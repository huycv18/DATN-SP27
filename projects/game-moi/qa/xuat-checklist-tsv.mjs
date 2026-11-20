// Xuất mvp-criteria-checklist.md sang TSV và JSON theo header tab MVP Criteria Checklist (Feature/Metric, Category, Acceptance Criteria, Status, Actual Result, Notes).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const dir = path.dirname(fileURLToPath(import.meta.url));
const md = fs.readFileSync(path.join(dir, 'mvp-criteria-checklist.md'), 'utf8').split('\n');
const i = md.findIndex((l) => l.startsWith('| ID | Feature'));
const rows = md.slice(i + 2).filter((l) => l.startsWith('| ')).map((l) => l.split('|').slice(1, -1).map((c) => c.trim()));
const clean = (t) => t
  .replace(/ \(dòng \d+\)/g, '').replace(/ \(dòng \d+ [^)]*\)/g, '')
  .replace(/\.? ?(Mơ hồ, xem lỗi \d+|Chưa chạy được, xem Bỏ qua|Hiện chưa \(lỗi N\d\)|Hiện chưa có validator \(lỗi N\d\)|Cần thêm ca Trao đồ khi Ngạt \(lỗi \d+\)|Sim 4,2 phút|Sim chương 3 và 5 của người tham lệch, xem Số kiểm|Chưa có bảng chuỗi|Cần build,? ?[^.]*|Đạt \([^)]*\)|Đạt)\.?$/g, '')
  .replace(/ Không thấy script bot này trong `tools\/`/, '').replace(/ \(sau sửa lỗi \d+\)/, '').replace(/\(lỗi \d+\)/g, '').trim();
const out = rows.map((r) => [`${r[0]} ${r[1]}`, r[2], clean(r[3]), 'FALSE', r[7], `Nhãn: ${r[4]}. Cách kiểm: ${r[5]}. Nguồn: ${r[8]}`]);
const OV = {
  'CT-13': 'Chương 1 không xong trước ngày 7 với mọi số người (sàn ngày 7, 5, 8, 3, 3). Sim kinh tế phải đạt',
  'VP-02': 'Mọi vật phẩm nhãn MVP có nguồn nhận và nguồn tiêu nhãn MVP (script)',
  'VP-06': 'Mẫu sống chia hạ từ 1,5 đến 2,0 cho cỡ S và M. Sinh thiết cỡ L đứng ngoài K9 (log 66)',
  'VP-09': 'Dấu chờ chỉ còn của gd-economy, không còn dấu chờ nào đã có giá',
  'VP-10': 'Sim: thời gian làm đầy túi, thu nhập chuỗi thô và chuỗi tinh một ngày, mức trội chiến lược nhặt (script in)',
  'VP-11': 'Số GTĐ mỗi chuyến đo ở sim gd-tech (tools/ket-qua/sim-chuyen.md)',
  'VP-13': 'Trên 90% chuyến chương 1 dùng cả khoan, nạy, hạ (sim)',
  'VP-14': 'Kiện tinh trên kiện thô trên 50% sau chương 1 khi đủ nguyên liệu (sim)',
  'KY-10': 'Host thoát rồi mở lại: thế giới về điểm lưu gần nhất (K23, ba điểm lưu), không mất ngày trước',
  'KY-01': '`selftest.mjs` thoát 0 (hiện 25 phép ĐẠT)',
  'VP-08': '6 tài nguyên, 5 COM, 9 kiện (CGO-113 là kiện chế duy nhất), 6 nâng cấp, 2 vật tiêu hao, 5 dụng cụ cộng chìa, 4 loài với 3 cỡ S bắt sống',
};
for (const r of out) { const id = r[0].split(' ')[0]; if (OV[id]) r[2] = OV[id]; }
const head = ['Feature/Metric', 'Category', 'Acceptance Criteria', 'Status', 'Actual Result', 'Notes'];
fs.writeFileSync(path.join(dir, '..', 'gdd', 'sheet', 'MVP Criteria Checklist.tsv'), [head, ...out].map((r) => r.join('\t')).join('\n') + '\n');
const part = Number(process.argv[2] ?? -1), n = 45;
if (part >= 0) console.log(JSON.stringify(out.slice(part * n, part * n + n)));
else console.log(`${out.length} dòng`);
