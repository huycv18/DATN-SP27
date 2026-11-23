// Sinh bản dán Sheet cho tab WIREFRAME và Tutorials từ bảng trong ux-ui.md.
// Chạy: node projects/game-moi/ux/xuat-sheet.mjs [--json]  (ghi gdd/sheet/WIREFRAME.tsv, gdd/sheet/Tutorials.tsv)
// Với --json in thêm mảng giá trị để dán bằng connector. Ô không chứa xuống dòng, không chứa tab.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const goc = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const lines = readFileSync(resolve(goc, 'gdd/he-thong/ux-ui.md'), 'utf8').normalize('NFC').split('\n')
const tables = []
let heading = ''
for (let i = 0; i < lines.length; i++) {
  if (/^#{2,3} /.test(lines[i])) heading = lines[i].replace(/^#+ /, '').trim()
  if (lines[i].startsWith('|') && lines[i + 1]?.startsWith('|---')) {
    const cells = (s) => s.split('|').slice(1, -1).map((c) => c.trim())
    const rows = []
    let j = i + 2
    while (j < lines.length && lines[j].startsWith('|')) rows.push(cells(lines[j++]))
    tables.push({ heading, header: cells(lines[i]), rows })
    i = j - 1
  }
}
const bang = (h) => tables.find((t) => t.heading.startsWith(h) && t.header[0] === 'ID')
const man = bang('2.2'), ba = bang('2.4'), tut = bang('2.10')
const strings = tables.find((t) => t.heading.startsWith('2.13'))
const txt = (k) => strings.rows.find((r) => r[0] === k)?.[1] ?? ''
const clean = (s) => s.replace(/`/g, '').replace(/\s+/g, ' ').trim()

const wire = new Map([['UI-10', 'mục 2.8 wireframe trạm'], ['UI-14', 'mục 2.8 wireframe bảng tàu'], ['UI-30', 'mục 2.6 wireframe HUD bay'], ['UI-34', 'mục 2.8 wireframe ngạt'], ['UI-35', 'mục 2.8 khuôn Giữ và Mất'], ['UI-36', 'mục 2.8 khuôn Giữ và Mất'], ['UI-40', 'mục 2.7 wireframe giờ giao thương']])
const hudRef = new Map([['UI-30', 'HUD-01 đến HUD-18'], ['UI-40', 'HCH-01 đến HCH-12'], ['UI-10', 'HTR-01 đến HTR-04 và HCH-07, HCH-09, HCH-10'], ['UI-11', 'HTR-01, HTR-02'], ['UI-44', 'HTR-01, HTR-03']])

const W = [['ID', 'Issue', 'Ref 1', 'Ref 2', 'Note']]
for (const r of man.rows) {
  const [id, ten, , vao, ra, nhan] = r
  const b = ba.rows.find((x) => x[0] === id)
  const note = `${clean(b[1])} Hành động chính: ${clean(b[2])}. Vào từ: ${clean(vao)}. Ra tới: ${clean(ra)}. Nhãn: ${clean(nhan)}.`
  W.push([id, clean(ten), `ux-ui.md mục 2.4 và 2.5${wire.has(id) ? ', ' + wire.get(id) : ''}`, hudRef.get(id) ?? '', note])
}
const U = [['ID', 'Design Intent', 'Trigger (When)', 'Level Design Setup', 'Interaction', 'Ref 1']]
for (const r of tut.rows) {
  const [id, di, trig, setup, inter, tat, luat] = r
  const hint = txt(`tut.${id.toLowerCase()}`)
  U.push([id, clean(di), clean(trig), clean(setup), `${clean(inter)}. Tắt khi: ${clean(tat)}.${hint ? ` Chữ gợi ý: ${hint}.` : ''}`, `ux-ui.md mục 2.10, luật: ${clean(luat)}`])
}
const tsv = (rows) => rows.map((r) => r.map((c) => c.replace(/\t/g, ' ')).join('\t')).join('\n') + '\n'
mkdirSync(resolve(goc, 'gdd/sheet'), { recursive: true })
writeFileSync(resolve(goc, 'gdd/sheet/WIREFRAME.tsv'), tsv(W))
writeFileSync(resolve(goc, 'gdd/sheet/Tutorials.tsv'), tsv(U))
console.log(`WIREFRAME ${W.length - 1} dòng dữ liệu, Tutorials ${U.length - 1} dòng dữ liệu`)
if (process.argv.includes('--json')) console.log(JSON.stringify({ WIREFRAME: W, Tutorials: U }))
