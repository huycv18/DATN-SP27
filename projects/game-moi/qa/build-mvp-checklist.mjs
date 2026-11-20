// Sinh mvp-criteria-checklist.md từ mục "Tiêu chí nghiệm thu" của các file GD-031-*.md. Chạy: node projects/game-moi/qa/build-mvp-checklist.mjs
// shortcut: lọc MVP theo chữ trong cột nhãn, đúng khi tác giả ghi nhãn "MVP" hoặc "Sau MVP", rà tay khi nhãn lạ.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const HE = [
  ['cot-truyen', 'Cốt truyện', 'CT'], ['nguoi-choi', 'Người chơi', 'NC'], ['ho-so-nhan-vat', 'Hồ sơ nhân vật', 'HS'],
  ['combat-driftlife', 'Combat', 'CB'], ['vat-pham', 'Vật phẩm', 'VP'], ['map', 'Map', 'MP'],
  ['tram-va-cang', 'Trạm và cảng', 'TC'], ['kinh-te-tien-trinh', 'Kinh tế', 'KT'], ['ux-ui', 'UX và UI', 'UX'], ['ky-thuat', 'Kỹ thuật', 'KY'],
];
const KHUNG = [
  ['Một ngày chương 1', 'Nhịp', 'Một ngày đủ 2 chuyến và ca cảng dài 15 đến 20 phút ở chương 1 (sim chuyến cộng sim ca cảng, sai lệch cho phép 15%)', 'Máy'],
  ['Trần chuyến mỗi ngày (K22)', 'Luật', 'Sau chuyến thứ hai hoặc khi đã mở ca cảng, cửa khí khóa. Skiff cũng tính một chuyến', 'Build'],
  ['Sang ngày và lưu (K23)', 'Luật', 'Ngày không có đồng hồ. Chỉ sang ngày khi ngủ và lúc ngủ tự lưu. Tắt game giữa ngày rồi mở lại về đầu ngày', 'Build'],
  ['Thoát giữa chuyến (C10)', 'Co-op, lưu', 'Rời phiên hoặc mất kết nối quá 15 giây giữa chuyến tính như bị kéo về, giữ 1 món. Một mình thoát giữa chuyến thì mất chuyến. Host thoát thì thế giới về lần lưu đầu ngày', 'Build'],
  ['Hết Oxy (K2)', 'Luật', 'Oxy về 0 rồi không ai cứu: bị kéo về, giữ đúng 1 món, 0 Tally bị trừ, không nợ', 'Build'],
  ['Chơi một mình trọn chương 1 (P3)', 'Co-op', 'Một người chơi trọn chương 1 (mọi quest, ca cảng, sửa khoang) không cần người thứ hai và không có thứ chỉ co-op mới có', 'Playtest'],
  ['Co-op 2 người (C1 đến C10)', 'Co-op', 'Hai người online chơi trọn một ngày: xác nhận cửa khí C5, kết chuyến riêng C6, người về sớm không ra lại C9, không tạm dừng toàn cục C7', 'Playtest'],
  ['Chương 1 dài', 'Nhịp', 'Chơi trọn chương 1 từ 1,5 đến 2 giờ (sim kinh tế, sai lệch 15%)', 'Máy'],
  ['Tally duy nhất (K18)', 'Kinh tế', 'Không có tiền thứ hai và không XP. Nguồn Tally chính là ca cảng. Grep GDD không thấy tiền khác', 'Máy'],
  ['Solace là mồi (L14)', 'Truyện', 'Grep GDD không còn chữ coi Solace là đích hay điểm kết của game. Chỉ còn là niềm tin của nhân vật', 'Máy'],
];

const sec = (txt) => {
  const m = txt.split(/^## Tiêu chí nghiệm thu.*$/m)[1];
  return m ? m.split(/^## /m)[0] : '';
};
const rows = (s) => s.split('\n').filter((l) => l.startsWith('|')).slice(2).map((l) => l.split('|').slice(1, -1).map((c) => c.trim()));
const how = (c) => (/Cần build|playtest|Playtest|prototype|người thử|người chơi mới|người ngoài/.test(c) ? 'Build hoặc playtest' : 'Máy');

const out = [];
let n = 0;
const add = (id, f, cat, ac, label, ch, src) => out.push(`| ${id} | ${f} | ${cat} | ${ac} | ${label} | ${ch} | FALSE | Chưa chấm, chưa có build | ${src} |`);
KHUNG.forEach((r, i) => add(`CK-${String(i + 1).padStart(2, '0')}`, r[0], r[1], r[2], 'MVP', r[3], 'khung'));
const stat = [];
for (const [slug, ten, code] of HE) {
  const f = path.join(dir, `GD-031-${slug}.md`);
  if (!fs.existsSync(f)) { stat.push(`| ${ten} | không có file QA | 0 |`); continue; }
  const rs = rows(sec(fs.readFileSync(f, 'utf8')));
  let k = 0;
  for (const r of rs) {
    const label = slug === 'ky-thuat' ? r[4] || '' : r[3] || '';
    if (!/MVP/.test(label) || /^Sau MVP/i.test(label.trim())) continue;
    if (/^Đề xuất thêm/.test(r[0])) { r[0] = r[1]; r[1] = 'Đề xuất QA'; }
    k++;
    add(`${code}-${String(k).padStart(2, '0')}`, r[0], r[1], r[2], label, how(r[2]), `GD-031-${slug}.md`);
  }
  stat.push(`| ${ten} | ${slug}.md | ${k} |`);
  n += k;
}
const head = `# MVP Criteria Checklist chương 1 (game-moi, EMBER)

Sinh bằng \`node projects/game-moi/qa/build-mvp-checklist.mjs\` từ mục "Tiêu chí nghiệm thu" trong mỗi \`GD-031-<file>.md\`. Giờ sinh: ${new Date().toLocaleString('sv-SE').slice(0, 16)}. Không sửa tay, sửa ở file GD-031 rồi chạy lại.
Chỉ lấy dòng nhãn MVP (kể cả nhãn lẫn "MVP chương 1, Sau MVP chương 2 đến 5"). Trạng thái TRUE chỉ khi chạy được và đo được. Chưa có build Unity nên mọi dòng đang FALSE (chưa kiểm). Cột Cách kiểm: Máy là sim hoặc script chạy ngay được, Build hoặc playtest cần build.
Tiêu chí còn lỗi (mơ hồ, thiếu số) đã ghi ở file GD-031 tương ứng, chưa sửa ở đây.

| Hệ thống | Nguồn | Số tiêu chí MVP |
|---|---|---|
${stat.join('\n')}
| Khung | khung | ${KHUNG.length} |
| Tổng | | ${n + KHUNG.length} |

| ID | Feature | Category | Acceptance Criteria | Nhãn | Cách kiểm | Status | Actual Result | Nguồn |
|---|---|---|---|---|---|---|---|---|
`;
fs.writeFileSync(path.join(dir, 'mvp-criteria-checklist.md'), head + out.join('\n') + '\n');
console.log(`ghi ${n + KHUNG.length} tiêu chí`);
