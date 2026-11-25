// Tab Tutorials: Ref 1 = ảnh khung màn nơi bước hiện (=IMAGE link raw GitHub theo commit), Ref 2 = chỗ đọc tài liệu.
// Lần đầu chèn cột Ref 2 trước Phiên bản và chuyển chữ Ref 1 cũ sang đó. Chạy lại an toàn.
// Chạy: node projects/game-moi/ux/gan-anh-tutorials.mjs <sha commit có ảnh trong ux/wireframe-png>
import { readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL, fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../../..', import.meta.url)).replace(/\\/g, '/').replace(/\/$/, '');
const { docTsv } = await import(pathToFileURL(`${root}/projects/game-moi/tools/doi-chieu-sheet.mjs`).href);
const SHA = process.argv[2];
if (!/^[0-9a-f]{7,40}$/.test(SHA ?? '')) throw new Error('Thiếu sha commit');
const f = `${root}/projects/game-moi/gdd/sheet/Tutorials.tsv`;
const rows = docTsv(readFileSync(f, 'utf8'));
// Màn nơi bước tutorial hiện -> khung trong ux/wireframe-png
const MAN = {
  'UI-30': [4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 18, 19, 31, 33, 34, 35, 36], 'UI-40': [22, 23, 24, 25], 'UI-10': [1, 2], 'UI-14': [21, 37],
  'UI-31': [11], 'UI-11': [3], 'UI-17': [12], 'UI-13': [17], 'UI-34': [20], 'UI-43': [26], 'UI-16': [27], 'UI-15': [28], 'UI-19': [29], 'UI-05': [30], 'UI-33': [32],
};
const khung = new Map(Object.entries(MAN).flatMap(([k, ds]) => ds.map((s) => [s, k])));
const h = rows[0], c1 = h.indexOf('Ref 1');
if (c1 < 0) throw new Error('Không thấy cột Ref 1');
if (h[c1 + 1] !== 'Ref 2') for (const r of rows) r.splice(c1 + 1, 0, r === h ? 'Ref 2' : r[c1]);
for (const r of rows.slice(1)) {
  const k = khung.get(+r[0]);
  if (!k) throw new Error(`Bước ${r[0]} chưa có khung`);
  r[c1] = `=IMAGE("https://raw.githubusercontent.com/huycv18/DATN-SP27/${SHA}/projects/game-moi/ux/wireframe-png/${k}.png")`;
}
console.assert(khung.size === rows.length - 1, 'số bước khác số khung đã ghép');
const o = (c) => (/[\t\n"]/.test(c) ? `"${c.replace(/"/g, '""')}"` : c);
writeFileSync(f, rows.map((r) => r.map(o).join('\t')).join('\n') + '\n');
console.log(JSON.stringify(rows.slice(1).map((r) => [r[c1], r[c1 + 1], r[c1 + 2]])));
