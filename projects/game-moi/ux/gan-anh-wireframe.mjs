// Đặt Ref 1 = ảnh khung Figma (=IMAGE link raw GitHub theo commit), Ref 2 = chỗ đọc trong ux-ui.md, cho tab WIREFRAME.
// Figma đổi khung: xuất lại PNG vào ux/wireframe-png, commit và push, rồi chạy lại với sha mới.
import { readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL, fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../../..', import.meta.url)).replace(/\\/g, '/').replace(/\/$/, ''); // gốc repo
// Chạy: node projects/game-moi/ux/gan-anh-wireframe.mjs <sha commit có ảnh trong ux/wireframe-png> rồi dán cột C:D dòng 3-32 bằng update_values
const { docTsv } = await import(pathToFileURL(`${root}/projects/game-moi/tools/doi-chieu-sheet.mjs`).href);
const SHA = process.argv[2];
const f = `${root}/projects/game-moi/gdd/sheet/WIREFRAME.tsv`;
const rows = docTsv(readFileSync(f, 'utf8'));
// STT -> [ảnh, ghi chú khung]
const K = { 1: ['UI-01'], 2: ['UI-02'], 3: ['UI-04'], 4: ['UI-05'], 5: ['UI-10'], 6: ['UI-11'], 7: ['UI-12'], 8: ['UI-13'], 9: ['UI-14'], 10: ['UI-15'],
  11: ['UI-16'], 12: ['UI-17'], 13: ['UI-17', 'dùng chung khung với Sửa khoang'], 14: ['UI-19'], 17: ['UI-30', 'có thêm khung HUD khi đánh boss'],
  18: ['UI-31'], 19: ['UI-33'], 20: ['UI-34'], 21: ['UI-35'], 22: ['UI-35', 'dùng chung khung với Bị kéo về'], 23: ['UI-40'], 24: ['UI-43'], 25: ['UI-44'],
  26: ['UI-50'], 27: ['UI-51'], 28: ['UI-52'], 29: ['UI-53'], 30: ['UI-54'] };
const url = (k) => `https://raw.githubusercontent.com/huycv18/DATN-SP27/${SHA}/projects/game-moi/ux/wireframe-png/${k}.png`;
console.assert(rows[0][2] === 'Ref 1' && rows[0][3] === 'Ref 2', 'sai cột');
const ra = [];
for (const r of rows.slice(1)) {
  const stt = +r[0], k = K[stt];
  const them = [...r[3].matchAll(/mục (2\.\d+)/g)].map((m) => m[1]); // giữ mục phụ đang trỏ ở Ref 2
  const muc = ['2.4', '2.5', ...them.filter((m) => m !== '2.4' && m !== '2.5')];
  const doc = `ux-ui.md mục ${muc.slice(0, -1).join(', ')} và ${muc.at(-1)}`;
  r[2] = k ? `=IMAGE("${url(k[0])}")` : '';
  r[3] = k ? `${doc}. Figma Wireframe MVP${k[1] ? ', ' + k[1] : ''}` : `${doc}. Chưa có khung Figma (Sau MVP)`;
  ra.push([r[2], r[3]]);
}
const o = (c) => (/[\t\n"]/.test(c) ? `"${c.replace(/"/g, '""')}"` : c);
writeFileSync(f, rows.map((r) => r.map(o).join('\t')).join('\n') + '\n');
console.log(JSON.stringify(ra));
