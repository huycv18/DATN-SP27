// Sinh batchUpdate định dạng thân bảng cho mọi tab GDD (trừ OVERVIEW): font Lexend 10, wrap, viền, cao dòng, màu tab nhóm A và D. Dán JSON vào update_spreadsheet sau khi tab đổi số hàng.
import { readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
const root = process.cwd(); // chạy ở gốc repo
const { docTsv } = await import(pathToFileURL(`${root}/projects/game-moi/tools/doi-chieu-sheet.mjs`).href);
const cfg = JSON.parse(readFileSync(`${root}/projects/game-moi/tools/tham-so/sheet.json`, 'utf8'));
const hex = (h) => ({ red: +(parseInt(h.slice(1, 3), 16) / 255).toFixed(3), green: +(parseInt(h.slice(3, 5), 16) / 255).toFixed(3), blue: +(parseInt(h.slice(5, 7), 16) / 255).toFixed(3) });
const vien = (w, c) => ({ style: w, colorStyle: { rgbColor: hex(c) } });
const NHOM_A = ['ECONOMIC'], NHOM_D = ['TRACKING', 'Assets', 'AUDIO ASSETS LIST', 'Event Tracking', 'MVP Criteria Checklist', 'Balance Sheet', 'Playtest Report', 'Bugs Report'];
const req = [];
for (const [tab, sheetId] of Object.entries(cfg.gid)) {
  if (tab === 'OVERVIEW') continue;
  let rows;
  try { rows = docTsv(readFileSync(`${root}/projects/game-moi/gdd/sheet/${tab}.tsv`, 'utf8')); } catch { continue; }
  const n = rows.length, c = Math.max(...rows.map((r) => r.length));
  const thanTu = 2, cuoi = 1 + n; // hàng 2 (index 1) là header, thân từ index 2
  req.push({ repeatCell: { range: { sheetId, startRowIndex: thanTu, endRowIndex: cuoi, startColumnIndex: 0, endColumnIndex: c },
    cell: { userEnteredFormat: { textFormat: { fontFamily: 'Lexend', fontSize: 10 }, wrapStrategy: 'WRAP', verticalAlignment: 'MIDDLE' } },
    fields: 'userEnteredFormat.textFormat.fontFamily,userEnteredFormat.textFormat.fontSize,userEnteredFormat.wrapStrategy,userEnteredFormat.verticalAlignment' } });
  const ngoai = vien('SOLID_MEDIUM', '#351C75'), trong = vien('SOLID', '#B4A7D6');
  req.push({ updateBorders: { range: { sheetId, startRowIndex: 1, endRowIndex: cuoi, startColumnIndex: 0, endColumnIndex: c },
    top: ngoai, bottom: ngoai, left: ngoai, right: ngoai, innerHorizontal: trong, innerVertical: trong } });
  req.push({ autoResizeDimensions: { dimensions: { sheetId, dimension: 'ROWS', startIndex: thanTu, endIndex: cuoi } } });
  const mau = NHOM_A.includes(tab) ? '#351C75' : NHOM_D.includes(tab) ? '#8E7CC3' : null;
  req.push({ updateSheetProperties: { properties: { sheetId, gridProperties: { hideGridlines: true }, ...(mau && { tabColorStyle: { rgbColor: hex(mau) } }) },
    fields: 'gridProperties.hideGridlines' + (mau ? ',tabColorStyle' : '') } });
}
writeFileSync(process.argv[2] ?? 'dinh-dang.json', JSON.stringify(req));
console.log(req.length, 'requests', JSON.stringify(req).length, 'ky tu');
