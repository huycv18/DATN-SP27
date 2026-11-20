// Cổng máy cho GDD UX / UI. Chạy: node projects/game-moi/ux/kiem-ux.mjs [--xuat]
// Kiểm: đủ màn, ba câu, năm trạng thái, giới hạn ký tự, bước FTUE có key, luật K và C trỏ tới màn có thật, ký tự cấm.
// --xuat ghi thêm projects/game-moi/strings/strings.tsv từ bảng 2.13.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const goc = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const file = process.env.UX_FILE ?? resolve(goc, 'gdd/he-thong/ux-ui.md')
const text = readFileSync(file, 'utf8').normalize('NFC')
const lines = text.split('\n')
const errors = []
const loi = (m) => errors.push(m)

// Gom bảng: mỗi bảng có heading gần nhất phía trên, hàng tiêu đề và các hàng dữ liệu
function tables() {
  const out = []
  let heading = ''
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i]
    if (/^#{2,3} /.test(l)) heading = l.replace(/^#+ /, '').trim()
    if (l.startsWith('|') && lines[i + 1]?.startsWith('|---')) {
      const cells = (s) => s.split('|').slice(1, -1).map((c) => c.trim())
      const header = cells(l)
      const rows = []
      let j = i + 2
      while (j < lines.length && lines[j].startsWith('|')) rows.push({ c: cells(lines[j]), line: j + 1 }), j++
      out.push({ heading, header, rows, line: i + 1 })
      i = j - 1
    }
  }
  return out
}
const T = tables()
const bang = (heading, h0) => T.find((t) => t.heading.startsWith(heading) && t.header[0] === h0)

const tMan = bang('2.2', 'ID')
const t3cau = bang('2.4', 'ID')
const t5tt = bang('2.5', 'ID')
const tHud = bang('2.6', 'ID')
const t27 = T.filter((x) => x.heading.startsWith('2.7') && x.header[0] === 'ID')
const tHC = t27[0]
const tHTR = t27[1]
const tTut = bang('2.10', 'ID')
const tLuat = bang('2.12', 'Luật')
const tStr = bang('2.13', 'Key')
for (const [n, t] of Object.entries({ tMan, t3cau, t5tt, tHud, tHC, tHTR, tTut, tLuat, tStr })) if (!t) loi(`Thiếu bảng ${n}`)
if (errors.length) { console.log(errors.join('\n')); process.exit(1) }

const man = new Set(tMan.rows.map((r) => r.c[0]))
const hud = new Set(tHud.rows.map((r) => r.c[0]))
const hc = new Set(tHC.rows.map((r) => r.c[0]))
const htr = new Set(tHTR.rows.map((r) => r.c[0]))
const tut = new Set(tTut.rows.map((r) => r.c[0]))

// 1. Mỗi màn có đường ra, ba câu và năm trạng thái
for (const r of tMan.rows) if (!r.c[4]) loi(`L${r.line} ${r.c[0]}: cột Ra tới rỗng`)
for (const id of man) {
  const a = t3cau.rows.find((r) => r.c[0] === id)
  if (!a) loi(`${id}: thiếu dòng ở bảng 2.4`)
  else {
    for (const k of ['Ở:', 'Làm:', 'Về:']) if (!a.c[1].includes(k)) loi(`L${a.line} ${id}: thiếu "${k}"`)
    if (!a.c[2]) loi(`L${a.line} ${id}: thiếu hành động chính`)
  }
  const b = t5tt.rows.find((r) => r.c[0] === id)
  if (!b) loi(`${id}: thiếu dòng ở bảng 2.5`)
  else if (b.c.length !== 6 || b.c.slice(1).some((x) => !x)) loi(`L${b.line} ${id}: cần đủ 5 trạng thái không rỗng`)
}
for (const r of [...t3cau.rows, ...t5tt.rows]) if (!man.has(r.c[0])) loi(`L${r.line} ${r.c[0]}: không có trong bảng 2.2`)

// 2. Strings
const keys = new Set()
let nStr = 0
for (const r of tStr.rows) {
  const [key, vi, lim, m] = r.c
  nStr++
  if (keys.has(key)) loi(`L${r.line} key trùng ${key}`)
  keys.add(key)
  const n = [...vi].length
  if (!/^\d+$/.test(lim)) loi(`L${r.line} ${key}: giới hạn không phải số`)
  else if (n > Number(lim)) loi(`L${r.line} ${key}: ${n} ký tự vượt giới hạn ${lim}`)
  if (!man.has(m) && !tut.has(m) && !hud.has(m) && !hc.has(m) && !htr.has(m)) loi(`L${r.line} ${key}: màn ${m} không có`)
  if (/\b[A-Z]{3}-\d{3}\b/.test(vi)) loi(`L${r.line} ${key}: lộ mã nội bộ`)
}
for (const id of tut) if (!keys.has(`tut.${id.toLowerCase()}`)) loi(`${id}: thiếu key tut.${id.toLowerCase()}`)

// 3. Luật K và C
const cover = new Set()
for (const r of tLuat.rows) {
  cover.add(r.c[0])
  for (const m of r.c[2].match(/\b(UI-\d\d|HCH-\d\d|HTR-\d\d|HUD-\d\d|T\d\d)\b/g) ?? []) {
    const ok = m.startsWith('UI') ? man.has(m) : m.startsWith('HCH') ? hc.has(m) : m.startsWith('HTR') ? htr.has(m) : m.startsWith('HUD') ? hud.has(m) : tut.has(m)
    if (!ok) loi(`L${r.line} ${r.c[0]}: ${m} không tồn tại`)
  }
}
for (let i = 1; i <= 24; i++) if (!cover.has(`K${i}`)) loi(`Bảng 2.12 thiếu K${i}`)
for (let i = 1; i <= 10; i++) if (!cover.has(`C${i}`)) loi(`Bảng 2.12 thiếu C${i}`)

// 3b. Mọi chữ in nháy hay sau "chữ " trong bảng 2.5 phải có key (khớp mẫu, {biến} là ký tự bất kỳ)
const esc = (s) => s.replace(/[.*+?^$()|[\]\\]/g, '\\$&')
const mau = tStr.rows.filter((r) => r.c[1].replace(/{[^}]+}/g, '').trim()).map((r) => new RegExp('^' + esc(r.c[1]).replace(/{[^}]+}/g, '.+') + '$', 'i'))
for (const r of t5tt.rows) for (const cell of r.c.slice(1)) {
  const cand = [...cell.matchAll(/"([^"]+)"/g)].map((m) => m[1]).concat([...cell.matchAll(/chữ ([^,.:()"]+)/g)].map((m) => m[1].trim()))
  for (const c of cand) if (!mau.some((re) => re.test(c))) loi(`L${r.line} ${r.c[0]}: chuỗi "${c}" chưa có key`)
}

// 4. Ký tự cấm
lines.forEach((l, i) => {
  if (l.includes(';')) loi(`L${i + 1}: có dấu chấm phẩy`)
  if (/[–—]/.test(l)) loi(`L${i + 1}: có gạch dài`)
  if (/\p{Extended_Pictographic}/u.test(l)) loi(`L${i + 1}: có emoji`)
})
if (/\[CHỜ gd-(story|character|combat|items|world|quan)/.test(text)) loi('Còn dấu [CHỜ] vai đợt 1')

if (process.argv.includes('--xuat')) {
  const dir = resolve(goc, 'strings')
  mkdirSync(dir, { recursive: true })
  writeFileSync(resolve(dir, 'strings.tsv'), ['key\ttext\tgioi_han\tman', ...tStr.rows.map((r) => r.c.join('\t'))].join('\n') + '\n')
}

console.log('| Kiểm | Kết quả |\n|---|---|')
console.log(`| Màn | ${man.size} |`)
console.log(`| Phần tử HUD, HCH, HTR | ${hud.size}, ${hc.size}, ${htr.size} |`)
console.log(`| Bước FTUE | ${tut.size} |`)
console.log(`| Strings | ${nStr} |`)
console.log(`| Luật K, C có tín hiệu | ${cover.size} |`)
console.log(`| Lỗi | ${errors.length} |`)
if (errors.length) { console.log('\n' + errors.join('\n')); process.exit(1) }
