// Quét ý phản diện cũ (Lead sửa 2026-11-20) và độ thống nhất tên mới trong GDD, strings, TSV Sheet.
// Chạy từ gốc repo: node projects/game-moi/qa/quet-phan-dien.mjs [--chi-tiet]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const CU = [
  ['tham lam hơn loài người', /(?<!không )tham lam hơn/i],
  ['đạo đức giả', /đạo đức giả/i],
  ['bản khảo sát bị giấu', /(bản khảo sát|khảo sát) (có thật )?(bị )?giấu|giấu (đi )?(một )?bản khảo sát|khảo sát có thật/i],
  ['đàn được bảo hộ (tên chương 3 Kẻ canh giữ được giữ, log 94)', /đàn được bảo hộ|được bảo hộ để kết tội/i],
  ['thu hoạch công nghiệp', /thu hoạch (bãi vỡ|Driftlife)? ?(ở )?quy mô công nghiệp|dấu thu hoạch/i],
  ['kết không đích', /(kết|rời neo) (mà )?chưa có đích|không có đích|chưa có đích/i],
  ['ghét vì tham lam', /ghét loài người vì|vì loài người tham lam/i],
  ['động cơ lòng tham nhân loại', /lòng tham (của )?nhân loại|nhân loại tham lam/i],
];
const SAI = [
  ['The Wardens là chủng tộc', /chủng tộc (phản diện )?(tên (tạm )?)?The Wardens|The Wardens (là )?(một )?chủng tộc/i],
  ['The Sundering', /The Sundering/],
  ['X hoặc Y còn là tên giữ chỗ', /\b(X|Y)\b \[TẠM\]/],
];
const TEN = ['Daskel', 'Sevra', 'Ilvane', 'Sennari', 'Ilsume', 'The Kindling', 'The Hearth', 'The Meeting War', 'Maro', 'The Wardens'];

const files = [];
const walk = (d) => {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (/\.(md|tsv)$/.test(f.name)) files.push(p);
  }
};
walk(path.join(root, 'gdd'));
walk(path.join(root, 'strings'));
const rel = (f) => path.relative(root, f).split(path.sep).join('/');

const hits = [];
for (const f of files) {
  fs.readFileSync(f, 'utf8').split('\n').forEach((l, i) => {
    for (const [ten, re] of CU) if (re.test(l)) hits.push([ten, rel(f), i + 1, l.trim().slice(0, 110)]);
  });
}
const by = {};
for (const h of hits) {
  by[h[0]] ??= {};
  by[h[0]][h[1]] = (by[h[0]][h[1]] ?? 0) + 1;
}
console.log('| Ý cũ | File | Số dòng |\n|---|---|---|');
for (const [k, v] of Object.entries(by)) for (const [f, n] of Object.entries(v)) console.log(`| ${k} | ${f} | ${n} |`);
console.log(`\nTổng ${hits.length} dòng khớp ý cũ trong ${files.length} file.`);

console.log(`\n| File | ${TEN.join(' | ')} |\n|---|${TEN.map(() => '---').join('|')}|`);
for (const f of files) {
  const txt = fs.readFileSync(f, 'utf8');
  const c = TEN.map((t) => (txt.match(new RegExp(t, 'g')) ?? []).length);
  if (c.some((n) => n)) console.log(`| ${rel(f)} | ${c.join(' | ')} |`);
}
let sai = 0;
for (const f of files) {
  fs.readFileSync(f, 'utf8').split('\n').forEach((l, i) => {
    for (const [k, re] of SAI) if (re.test(l)) { console.log(`SAI ${k}: ${rel(f)}:${i + 1}`); sai++; }
  });
}
console.log(`Tên sai: ${sai}`);
if (process.argv.includes('--chi-tiet')) for (const h of hits) console.log(h.join(' | '));
