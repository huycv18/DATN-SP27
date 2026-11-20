// Đối chiếu tab GAME STORY trên Sheet (export CSV) với "GAME STORY.tsv". In số dòng lệch, thoát 1 nếu lệch.
// Chạy: node projects/game-moi/gdd/sheet/doi-chieu-game-story.mjs
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const day = dirname(fileURLToPath(import.meta.url));
const config = JSON.parse(readFileSync(join(day, '../../tools/tham-so/sheet.json'), 'utf8'));
const tab = 'GAME STORY';
const URL_CSV = `https://docs.google.com/spreadsheets/d/${config.file[tab]}/export?format=csv&gid=${config.gid[tab]}`;
const csv = (await (await fetch(URL_CSV)).text()).replace(/\r\n/g, '\n');
// Parser CSV có ô trong ngoặc kép chứa xuống dòng và dấu phẩy
const rows = []; let row = [], o = '', q = false;
for (let i = 0; i < csv.length; i++) {
  const c = csv[i];
  if (q) { if (c === '"') { if (csv[i + 1] === '"') { o += '"'; i++; } else q = false; } else o += c; }
  else if (c === '"') q = true;
  else if (c === ',') { row.push(o); o = ''; }
  else if (c === '\n') { row.push(o); rows.push(row); row = []; o = ''; }
  else o += c;
}
if (o || row.length) { row.push(o); rows.push(row); }
const gon = (r) => { r = r.map((x) => x.trim()); while (r.length && !r[r.length - 1]) r.pop(); return r.join('\t'); };
const sheet = rows.slice(1).map(gon); // bỏ dòng 1 (tiêu đề tab)
while (sheet.length && !sheet[sheet.length - 1]) sheet.pop();
const tsv = readFileSync(join(day, 'GAME STORY.tsv'), 'utf8').trimEnd().split('\n').map((l) => gon(l.split('\t').map((c) => c.replace(/\\n/g, '\n'))));
let lech = 0;
for (let i = 0; i < Math.max(sheet.length, tsv.length); i++)
  if (sheet[i] !== tsv[i]) { lech++; if (lech <= 5) console.log(`LỆCH dòng Sheet ${i + 2}:\n  TSV:   ${(tsv[i] ?? '(không có)').slice(0, 160)}\n  Sheet: ${(sheet[i] ?? '(không có)').slice(0, 160)}`); }
console.log(`GAME STORY: TSV ${tsv.length - 1} dòng dữ liệu, Sheet ${sheet.length - 1} dòng dữ liệu, ${lech} dòng lệch`);
process.exit(lech ? 1 : 0);
