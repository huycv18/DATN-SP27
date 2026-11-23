// Cổng Teardown Dave the Diver (GD-064): kiểm các file teardown/NN Tab.tsv theo brief đợt 12.
// Chạy: node projects/game-moi/tools/kiem-teardown.mjs [--tu-kiem]   Thoát 1 khi có lỗi.
import { readFileSync, readdirSync, existsSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const GOC = join(dirname(fileURLToPath(import.meta.url)), '..', 'teardown');
export const COT = ['STT', 'Mục', 'Dave the Diver làm gì', 'Nguồn', 'The Novent lấy gì', 'Khác gì và vì sao', 'Mục GDD', 'Ảnh cần chụp', 'Ảnh'];
const CAM = [[/[—–]/, 'gạch dài'], [/;/, 'chấm phẩy'], [/\b(RES|SLV|RCP|COM|UPG|TOL|CGO|LIV|STY|BPR|DL-G)-?\d/, 'mã nội bộ'], [/\bKH\d{2}\b|\bBS-\d/, 'mã nội bộ']];
const docTsv = (t) => t.split(/\r?\n/).filter((l) => l.trim()).map((l) => l.split('\t'));

export function kiemTab(ten, rows, maNguon) {
  const loi = [];
  if (rows[0].join('|') !== COT.join('|')) loi.push(`${ten}: tiêu đề cột sai`);
  const than = rows.slice(1);
  if (than.length < 6 || than.length > 12) loi.push(`${ten}: ${than.length} dòng, cần 6 tới 12`);
  than.forEach((r, i) => {
    const d = `${ten} dòng ${i + 1}`;
    if (r.length > COT.length) loi.push(`${d}: thừa cột`);
    for (let c = 0; c < 8; c++) if (!(r[c] ?? '').trim()) loi.push(`${d}: trống cột ${COT[c]}`);
    for (const ma of (r[3] ?? '').split(/[,\s]+/).filter((m) => /^[A-D]\d+$/.test(m))) if (!maNguon.has(ma)) loi.push(`${d}: mã nguồn ${ma} không có trong bảng nguồn`);
    r.forEach((o, c) => { if (c !== 3) for (const [re, t] of CAM) if (re.test(o)) loi.push(`${d}: ${t} ở cột ${COT[c]}`); });
  });
  return loi;
}

export function maNguonTu(thuMuc) {
  // Mã D lấy từ bảng nguồn của file tri thức Dave, không gõ tay.
  const tri = join(thuMuc, '..', '..', '..', 'docs', 'knowledge', 'indie', '06-dave-the-diver-cau-truc.md');
  const s = new Set(existsSync(tri) ? [...readFileSync(tri, 'utf8').matchAll(/^\| (D\d+) \|/gm)].map((m) => m[1]) : []);
  for (const f of readdirSync(thuMuc).filter((f) => /^nguon-[A-C]\.tsv$/.test(f))) docTsv(readFileSync(join(thuMuc, f), 'utf8')).slice(1).forEach((r) => s.add(r[0].trim()));
  return s;
}

// --nguon: gộp nguồn đã dùng (mã D lấy từ file tri thức Dave, mã A, B, C từ nguon-*.tsv) thành teardown/Sources.tsv để dán tab Sources.
if (process.argv.includes('--nguon')) {
  const tri = readFileSync(join(GOC, '..', '..', '..', 'docs', 'knowledge', 'indie', '06-dave-the-diver-cau-truc.md'), 'utf8');
  const bang = new Map([...tri.matchAll(/^\| (D\d+) \| ([^|]*)\| ([^|]*)\|/gm)].map((m) => [m[1], [m[2].trim(), m[3].trim(), 'Xem kho tri thức 06']]));
  for (const f of readdirSync(GOC).filter((f) => /^nguon-[A-C]\.tsv$/.test(f))) docTsv(readFileSync(join(GOC, f), 'utf8')).slice(1).forEach((r) => bang.set(r[0].trim(), r.slice(1, 4).map((x) => (x ?? '').trim())));
  const dung = new Set(readdirSync(GOC).filter((f) => /^\d\d .+\.tsv$/.test(f)).flatMap((f) => docTsv(readFileSync(join(GOC, f), 'utf8')).slice(1).flatMap((r) => (r[3] ?? '').match(/\b[A-D]\d+\b/g) ?? [])));
  const ma = [...dung].sort((a, b) => a[0].localeCompare(b[0]) || +a.slice(1) - +b.slice(1));
  const rows = [['Mã', 'Nguồn', 'URL', 'Đọc được không'], ...ma.map((m) => [m, ...(bang.get(m) ?? ['Không có trong bảng nguồn', '', ''])])];
  writeFileSync(join(GOC, 'Sources.tsv'), rows.map((r) => r.join('\t')).join('\n') + '\n');
  console.log(`Ghi teardown/Sources.tsv: ${ma.length} nguồn đã dùng`);
  process.exit(0);
}

if (process.argv.includes('--tu-kiem')) {
  const tot = [COT, ...Array.from({ length: 6 }, (_, i) => [String(i + 1), 'Mục', 'Dave làm', 'D3, A1', 'Lấy', 'Khác', 'map.md mục 2', 'Màn bản đồ', ''])];
  if (kiemTab('Tốt', tot, new Set(['D3', 'A1'])).length) throw new Error('tự kiểm: bảng tốt bị bắt lỗi');
  const xau = [COT, ...tot.slice(1, 5).map((r) => [...r]), ['5', 'Mục', 'Có RES-101; và — gạch', 'A9', 'x', '', 'y', 'z', '']];
  const e = kiemTab('Xấu', xau, new Set(['D3', 'A1'])).join('\n');
  for (const can of ['5 dòng', 'mã nguồn A9', 'mã nội bộ', 'chấm phẩy', 'gạch dài', 'trống cột Khác gì']) if (!e.includes(can)) throw new Error(`tự kiểm: không bắt "${can}"`);
  console.log('Tự kiểm ĐẠT');
} else {
  if (!existsSync(GOC)) { console.log('Chưa có thư mục teardown/'); process.exit(1); }
  const ma = maNguonTu(GOC), tabs = readdirSync(GOC).filter((f) => /^\d\d .+\.tsv$/.test(f)).sort();
  const loi = tabs.flatMap((f) => kiemTab(f, docTsv(readFileSync(join(GOC, f), 'utf8')), ma));
  if (tabs.length !== 9) loi.push(`Có ${tabs.length} tab, cần 9`);
  console.log(loi.length ? loi.join('\n') : `ĐẠT: ${tabs.length} tab`);
  process.exit(loi.length ? 1 : 0);
}
