#!/usr/bin/env node
// So mọi gdd/sheet/<Tab>.tsv với tab cùng tên trên Sheet GDD qua export CSV (Sheet chia sẻ bằng link, không cần đăng nhập).
// TSV hàng 1 (header) ứng với hàng `dongDau` của tab (mặc định 2, hàng 1 là tiêu đề tab). So từng ô sau khi bỏ khoảng trắng cuối.
// Chạy: node projects/game-moi/tools/doi-chieu-sheet.mjs [--tab "Event Tracking"] [--ra <file.md>]   Thoát 1 khi có tab lệch.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseCsv, docNguon, chuanO, soSangCot } from '../../../.claude/skills/gdd-sheet-sync/scripts/chung.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const CFG = JSON.parse(readFileSync(join(HERE, 'tham-so', 'sheet.json'), 'utf8'));
const THU_MUC = join(HERE, '..', 'gdd', 'sheet');

// So một bảng nguồn với các hàng CSV của tab. Trả {lech: [{o, tab, nguon}], thua: số hàng có chữ ngay dưới bảng}.
export function soBang(nguon, csv, dongDau = 2) {
  const lech = [];
  nguon.forEach((r, i) => {
    const t = csv[dongDau - 1 + i] || [];
    for (let j = 0; j < Math.max(r.length, t.length); j++) {
      const a = chuanO(t[j]), b = chuanO(r[j]);
      if (a !== b) lech.push({ o: `${soSangCot(j)}${dongDau + i}`, tab: a, nguon: b });
    }
  });
  let thua = 0;
  for (let k = dongDau - 1 + nguon.length; k < csv.length && csv[k].some((c) => chuanO(c) !== ''); k++) thua++;
  return { lech, thua };
}

async function taiCsv(gid) {
  const url = `https://docs.google.com/spreadsheets/d/${CFG.spreadsheetId}/export?format=csv&gid=${gid}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`HTTP ${r.status} khi tải gid ${gid} (Sheet còn chia sẻ bằng link không?)`);
  return parseCsv(await r.text());
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const arg = (k) => (process.argv.includes(k) ? process.argv[process.argv.indexOf(k) + 1] : null);
  const chiTab = arg('--tab'), ra = arg('--ra');
  const files = readdirSync(THU_MUC).filter((f) => f.endsWith('.tsv')).map((f) => basename(f, '.tsv')).filter((t) => !chiTab || t === chiTab);
  const out = ['| Tab | Hàng dữ liệu | Ô lệch | Hàng thừa dưới bảng | Kết quả |', '|---|---|---|---|---|'], chiTiet = [];
  let sai = 0;
  for (const tab of files) {
    if (!(tab in CFG.gid)) { out.push(`| ${tab} | | | | Không có tab tên này trong tham-so/sheet.json |`); sai++; continue; }
    const { rows } = docNguon(join(THU_MUC, `${tab}.tsv`));
    const { lech, thua } = soBang(rows, await taiCsv(CFG.gid[tab]), CFG.dongDau);
    const ok = !lech.length && !thua;
    if (!ok) sai++;
    out.push(`| ${tab} | ${rows.length - 1} | ${lech.length} | ${thua} | ${ok ? 'KHỚP' : 'LỆCH'} |`);
    for (const l of lech.slice(0, 20)) chiTiet.push(`| ${tab} | ${l.o} | ${l.tab.replace(/\n/g, ' / ').slice(0, 80)} | ${l.nguon.replace(/\n/g, ' / ').slice(0, 80)} |`);
  }
  let md = out.join('\n') + '\n';
  if (chiTiet.length) md += '\nÔ lệch (tối đa 20 mỗi tab):\n\n| Tab | Ô | Trên tab | Nguồn |\n|---|---|---|---|\n' + chiTiet.join('\n') + '\n';
  if (ra) writeFileSync(ra, md);
  console.log(md);
  process.exit(sai ? 1 : 0);
}
