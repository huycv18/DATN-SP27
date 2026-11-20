#!/usr/bin/env node
// Sinh gdd/sheet/Event Tracking.tsv từ hai bảng sự kiện của gdd/he-thong/ky-thuat.md mục 2.4 (luật 27: bỏ cột Nguồn, Dùng để thành Description).
// Chạy: node projects/game-moi/tools/xuat-event-tracking.mjs [--kiem]   (--kiem: chỉ so với file TSV đang có, thoát 1 khi lệch)
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const GOC = join(dirname(fileURLToPath(import.meta.url)), '..');
const NGUON = join(GOC, 'gdd', 'he-thong', 'ky-thuat.md');
const RA = join(GOC, 'gdd', 'sheet', 'Event Tracking.tsv');
const HEADER = ['No', 'Group', 'Event Name', 'When To Send', 'Event Params Key', 'Description', 'Value Type'];
// Kiểu của trường chung ở luật 24 (luật chỉ liệt kê tên)
const KIEU_CHUNG = { session_id: 'string', world_id: 'string', world_seed: 'int', build: 'string', t: 'float', play_seconds_total: 'float', day: 'int', chapter: 'int', n_players: 'int', slot: 'int' };

// Tách theo dấu phẩy nằm ngoài ngoặc: "result (rejoined, pulled_back)" là một tham số.
export function tachThamSo(s) {
  const out = []; let sau = 0, cur = '';
  for (const ch of s) {
    if (ch === '(') sau++; else if (ch === ')') sau--;
    if (ch === ',' && sau === 0) { out.push(cur.trim()); cur = ''; } else cur += ch;
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}
// Nguồn trong ky-thuat.md viết tắt ("mới", "luật 16", tên khối) thì ghi rõ file để người đọc Sheet tra được
const nguonDay = (n) => (n === 'mới' ? 'ky-thuat.md (gd-tech thêm)' : /\.md/.test(n) ? n : `ky-thuat.md ${n}`);
const o = (s) => s.replace(/`/g, '').replace(/\t/g, ' ').trim();

export function sinh(md) {
  const L = md.replace(/\r\n/g, '\n').split('\n');
  const rows = [], loi = [];
  let trong = false;
  for (const l of L) {
    if (/^\| No \| Group \| Event Name /.test(l)) { trong = true; continue; }
    if (!l.startsWith('|')) { trong = false; continue; }
    if (!trong || /^\|[-| ]+\|$/.test(l)) continue;
    const c = l.split('|').slice(1, -1).map((x) => x.trim());
    const [no, nhom, ten, khi, tham, dungDe, kieu, nguon] = c;
    const ts = tham ? tachThamSo(tham) : [], ks = kieu ? tachThamSo(kieu) : [];
    if (ts.length !== ks.length) loi.push(`Sự kiện ${no} ${ten}: ${ts.length} tham số nhưng ${ks.length} kiểu`);
    rows.push([no, nhom, ten, o(khi), ts.join('\n'), o(dungDe) || `Ghi nhận, ghép với sự kiện cùng nhóm. Nguồn: ${nguonDay(o(nguon))}`, ks.join('\n')]);
  }
  const so = rows.map((r) => r[0]);
  const trung = so.filter((x, i) => so.indexOf(x) !== i);
  if (trung.length) loi.push(`No trùng: ${trung.join(', ')}`);
  so.forEach((x, i) => { if (+x !== i + 1) loi.push(`No không liên tục ở hàng ${i + 1}: ${x}`); });
  const chung = Object.keys(KIEU_CHUNG);
  rows.push(['Chung', 'Mọi nhóm', '(trường chung)', 'Kèm mọi sự kiện ở trên', chung.join('\n'),
    'Ghi ra file JSON Lines cục bộ mỗi phiên, không gửi mạng. Sự kiện do host nắm chỉ máy host ghi, sự kiện của người chơi mỗi máy tự ghi, gộp theo session_id (luật 23 đến 25)',
    chung.map((k) => KIEU_CHUNG[k]).join('\n')]);
  rows.push(['Ref', '', '', '', '',
    'Bản đủ: projects/game-moi/gdd/he-thong/ky-thuat.md mục 2.4 (cột Nguồn ghi GDD sinh ra từng sự kiện). Sự kiện của tính năng Sau MVP chỉ ghi khi tính năng có trong build. Tab sinh bằng projects/game-moi/tools/xuat-event-tracking.mjs, không sửa tay', '']);
  return { rows, loi };
}

export const sangTsv = (rows) => [HEADER, ...rows].map((r) => r.map((x) => x.replace(/\n/g, '\\n')).join('\t')).join('\n') + '\n';

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const { rows, loi } = sinh(readFileSync(NGUON, 'utf8'));
  if (loi.length) { console.error(loi.join('\n')); process.exit(1); }
  const tsv = sangTsv(rows);
  if (process.argv.includes('--kiem')) {
    const cu = existsSync(RA) ? readFileSync(RA, 'utf8') : '';
    console.log(cu === tsv ? 'Khớp ky-thuat.md.' : 'LỆCH: TSV cũ hơn ky-thuat.md, chạy lại không có --kiem.');
    process.exit(cu === tsv ? 0 : 1);
  }
  mkdirSync(dirname(RA), { recursive: true });
  writeFileSync(RA, tsv);
  console.log(`Ghi ${RA}: ${rows.length} hàng dữ liệu (${rows.length - 2} sự kiện, trường chung, Ref).`);
}
