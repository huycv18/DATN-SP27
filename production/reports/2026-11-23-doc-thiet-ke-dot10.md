# Đợt 10: Doc thiết kế 2 phần (2026-11-23)

Nguồn: Lead xem folder Documents của nhóm Timberwalls và giao học theo, chốt "Tiếng Việt, 2 phần", rồi "Phần tiêu đề để tiếng anh nhé". DECISIONS game mục 2026-11-23 (hai mục). Brief: `projects/game-moi/briefs/dot10-doc-thiet-ke.md`.

## Kết quả

| File | Dòng | Sơ đồ | Chờ ảnh | Vai |
|---|---|---|---|---|
| `book/phan-2/01-mot-ngay.md` Daily Cycle | 171 | 1 | 1 | GDM |
| `book/phan-2/02-nguoi-choi.md` Player | 299 | 1 | 1 | gd-character |
| `book/phan-2/03-map-va-chuyen.md` Map and Expeditions | 300 | 1 | 1 | gd-world |
| `book/phan-2/04-combat-driftlife.md` Combat and Driftlife | 300 | 2 | 1 | gd-combat |
| `book/phan-2/05-vat-pham.md` Items and Crafting | 289 | 2 | 0 | gd-items |
| `book/phan-2/06-tram-va-cang.md` Station and Port (mục mẫu) | 296 | 2 | 3 | gd-quan |
| `book/phan-2/07-kinh-te-tien-trinh.md` Economy and Progression | 299 | 1 | 1 | gd-economy |
| `book/phan-2/08-co-op-va-luu.md` Co-op and Saving | 211 | 1 | 0 | gd-tech |
| `book/phan-2/09-cot-truyen-ket-thuc.md` Story and Ending | 210 | 1 | 0 | gd-story |

- Bản gộp: `book/ket-qua/book.md`, 2405 dòng, 20 hình đánh số xuyên suốt. Sinh lại bằng `node projects/game-moi/tools/gop-book.mjs`.
- Cổng: `kiem-book.mjs` ĐẠT cả thư mục, `soat.mjs` 0 lỗi từng mục, `validate-gdd.mjs` 0 lỗi, selftest 37 ĐẠT.
- Chương đề xuất dự án: `book/de-xuat-du-an.md`, bản nháp chờ Lead đọc.

## Chỗ lệch GDD tìm ra khi viết Doc, GDM đã chốt

Log tự quyết dòng 101 tới 110. Chín chỗ đã sửa trong GDD và Doc. Dòng 103 (chữ "từ 2/3" và "trên 2/3") để gom vào GD-061.

| Log | Chỗ lệch | Chốt |
|---|---|---|
| 101 | Kho cấp 2 MVP hay Sau MVP | MVP, sửa luật 5 `tram-va-cang.md` |
| 102 | Tikko và Oru | Tikko là thương nhân người Oru |
| 103 | "Từ 2/3" và "trên 2/3" | Cùng kết quả, gom vào GD-061 |
| 104 | Trần Giữ chỗ 1 lần mỗi chuyến | Là luật, sửa `ky-thuat.md` |
| 105 | Món Tikko gọi ở ca dạy | Ca dạy bán phế liệu, lồng sống qua đơn đặt trước ngày chẵn |
| 106 | Thời gian một mẻ xưởng | Theo công thức ở tab Recipe |
| 107 | Chế nhanh đứng chờ hay chạy nền | Chạy nền |
| 108 | Sống so với hạ 1,28 hay 1,44 | Theo sim mới 1,44 đến 1,81 qua lưới |
| 109 | Hệ số co-op dải Gần trong bảng cuối `map.md` | 1,30, 1,60, 1,90 |
| 110 | Mục tiêu K9 1,5 hay 1,2 | 1,2 đến 2 theo khung |

## Còn mở

- GD-061 gd-qa nghiệm thu Phần II, kèm 3 việc: hai dòng MVP Criteria Checklist về 1,2 đến 2 lần (phải dán Sheet), chữ "từ 2/3", luật Scrapmaw khi cắt xong Dây nối lúc boss còn từ nửa Sinh lực (gd-combat).
- Luật thiếu các vai báo, chưa lấp: giá lồng làm tròn trước hay sau hệ số sao, Van tiết lưu mua xong vào kho hay lắp thẳng, nâng cấp ở Xưởng mua lúc nào trong ngày, người từ chối xác nhận Mở ca thì sao.
- Xuất ảnh sơ đồ và Google Doc: chờ Lead cho tải `mermaid.min.js` (khoảng 3 MB) và pandoc (khoảng 30 MB). Mermaid chưa render thử lần nào.
- Phần I Controls chờ build. 9 chỗ chờ ảnh.
- Subagent không gọi được skill vietnamese-hmr. Văn các mục chỉ qua `soat.mjs`, GDM đọc kỹ mục mẫu và II.1.

## Sau QA (GD-061, GD-067)

| Đo | Giá trị |
|---|---|
| Lỗi QA nặng, vừa, nhẹ | 0, 17, 22 |
| Lỗi vừa đã sửa | 17 |
| Điểm GDM chốt thêm | log 111 tới 116 |
| Chương 1 một người (sim, giờ ngân sách 0,8 theo Lead) | 1,77 giờ, đóng ngày 8 |
| Cả game một người | 14,2 giờ |
| Nhóm 4 so với một mình | 70% |
| Tab Sheet khớp repo | 23/23 |
| Sơ đồ trong docx | 15 |

- Luật mới gd-combat đặt, GDM duyệt: đoạn Dây nối thứ hai của Scrapmaw chỉ cắt được khi boss dưới 50% Sinh lực, đoạn đã cắt giữ tới hết trận.
- Giá chương 1 giảm: Bình Oxy và Túi đồ bậc 1 930, Bộ đẩy bậc 1 650, Dụng cụ khai thác và Lao từ bậc 2 280, Van tiết lưu 1850.
- Còn mở: yêu cầu art và âm thanh cho Dây nối Scrapmaw chưa vào tab Assets, 4 luật nhỏ còn thiếu ở mục Còn mở phía trên, Phần I chờ build.
