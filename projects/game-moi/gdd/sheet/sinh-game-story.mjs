// Sinh tab GAME STORY từ cot-truyen.md để GDD và Sheet không lệch.
// Chạy: node projects/game-moi/gdd/sheet/sinh-game-story.mjs [--json <file>]
// Ra: "GAME STORY.tsv" cạnh script (xuống dòng trong ô ghi chuỗi \n theo quy ước gdd-sheet-sync).
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const day = dirname(fileURLToPath(import.meta.url));
const L = readFileSync(join(day, '../he-thong/cot-truyen.md'), 'utf8').split(/\r?\n/);
const o = (l) => l.split('|').slice(1, -1).map((s) => s.trim().replace(/`/g, ''));
const tim = (re, tu = 0) => { const i = L.findIndex((l, k) => k >= tu && re.test(l)); if (i < 0) throw new Error('Không thấy ' + re); return i; };
// Bảng đầu tiên sau dòng khớp `re`, có header bắt đầu bằng `dau`. Trả các hàng dữ liệu.
const bang = (re, dau) => {
  let i = tim(new RegExp('^\\| ' + dau), tim(re)) + 2;
  const r = [];
  for (; /^\|/.test(L[i] || ''); i++) r.push(o(L[i]));
  return r;
};
const REF = 'cot-truyen.md';
const rows = [['Nội dung', 'Mã', 'Nhóm', 'Nhãn', 'Ref']];

// 1. Khối GAME STORY (mục 14), một ô
const i14 = tim(/^## 14\. /);
const het14 = tim(/^## /, i14 + 1);
rows.push([L.slice(i14 + 1, het14).filter((l) => l.trim()).join('\n\n'), 'GS', 'Cốt truyện', 'Cả game', REF + ' mục 14']);

// 2. Năm chương và mốc (mục 2.5)
const tomTat = bang(/^### Năm chương \(tóm tắt/, 'Chương \\|');
for (const [so, ten, map, nguoi, dong] of tomTat) {
  const iCh = tim(new RegExp(`^#### Chương ${so} - `));
  const nhan = /Sau MVP/.test(L[iCh]) ? 'Sau MVP' : 'MVP';
  const mucTieu = L[tim(/^Mục tiêu người chơi: /, iCh)].replace(/^Mục tiêu người chơi: /, '');
  rows.push([`Chương ${so} - ${ten}\n- Mục tiêu người chơi: ${mucTieu}\n- Map nhánh có truyện: ${map}\n- Người vớt: ${nguoi}\n- Đóng chương: ${dong}`, `CH-${so}`, `Chương ${so}`, nhan, REF + ' mục 2.5']);
  for (const [ma, tenMoc, dk, noi, mo] of bang(new RegExp(`^#### Chương ${so} - `), 'Mốc \\| Tên \\|'))
    rows.push([`${tenMoc}\n- Điều kiện: ${dk}\n- Nơi: ${noi}\n- Mở: ${mo}`, ma, `Chương ${so}`, nhan, REF + ' mục 2.5']);
}

// 3. Nhân vật truyện (danh mục, bản đủ ở mục 2.6)
for (const [ten, ma, vai, xuat] of bang(/^### Nhân vật$/, 'Tên \\[TẠM\\] \\| Mã')) {
  const nhan = /^Chương 1 tới/.test(xuat) ? 'MVP: Tikko. Sau MVP: còn lại'
    : /chỉ giọng/.test(xuat) ? 'MVP (chỉ giọng), Sau MVP'
    : /^Chương 1/.test(xuat) ? 'MVP' : 'Sau MVP';
  rows.push([`${ten}\n- Vai: ${vai}\n- Xuất hiện: ${xuat}`, ma, 'Nhân vật', nhan, REF + ' mục 2.6']);
}

// 4. Bảng tên riêng: thế giới, trạm con, chủng tộc
for (const [ten, la] of bang(/^### Tên riêng thế giới/, 'Tên \\[TẠM\\] \\| Là gì'))
  rows.push([`${ten}: ${la}`, '', 'Tên riêng', 'Cả game', REF + ' mục 12']);
for (const [ten, tinh, ma, ch, dat] of bang(/^### Trạm con có tên/, 'Tên \\[TẠM\\] \\| Tình trạng'))
  rows.push([`${ten}: ${tinh}` + (dat ? `\n- Truyện đặt ở đây: ${dat}` : ''), ma === 'Không' ? '' : ma, 'Trạm con', ch === '1' ? 'MVP' : 'Sau MVP', REF + ' mục 12']);
for (const [ten, dong, thuong, tau] of bang(/^### Chủng tộc The Veyl/, 'Chủng tộc \\[TẠM\\]'))
  // Chỉ Oru (Tikko) ghé cảng ở chương 1, bảng thương nhân mục 2.6 cột "Ghé cảng từ".
  rows.push([`${ten}: ${dong}\n- Thương nhân có tên: ${thuong}\n- Loại tàu: ${tau}`, '', 'Chủng tộc', thuong === 'Tikko' ? 'MVP' : 'Sau MVP', REF + ' mục 2.6']);

// 5. Ref bản đủ
rows.push(['Bản đủ: projects/game-moi/gdd/he-thong/cot-truyen.md (luật kể chuyện, vật truyện, kết game, co-op, voice sheet). Mọi tên riêng là [TẠM]. Tên game dùng mã tạm EMBER.', '', 'Ref', '', REF]);

// Tự kiểm: đủ 40 mốc, không ký tự cấm, mã không trùng
const moc = rows.filter((r) => /^C\d\.\d+$/.test(r[1])).length;
if (moc !== 40) throw new Error(`Cần 40 mốc, có ${moc}`);
const ma = rows.map((r) => r[1]).filter(Boolean);
if (new Set(ma).size !== ma.length) throw new Error('Mã trùng');
for (const r of rows) for (const c of r) if (/[;\t—–₵]|\p{Extended_Pictographic}/u.test(c)) throw new Error('Ký tự cấm: ' + c.slice(0, 60));

writeFileSync(join(day, 'GAME STORY.tsv'), rows.map((r) => r.map((c) => c.replace(/\n/g, '\\n')).join('\t')).join('\n') + '\n');
const j = process.argv.indexOf('--json');
if (j > 0) writeFileSync(process.argv[j + 1], JSON.stringify(rows));
console.log(`GAME STORY.tsv: ${rows.length - 1} dòng dữ liệu, ${moc} mốc, ô dài nhất ${Math.max(...rows.flat().map((c) => c.length))} ký tự`);
