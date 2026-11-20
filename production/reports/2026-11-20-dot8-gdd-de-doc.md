# Đợt 8 - Soát và viết lại Sheet GDD cho dễ đọc (2026-11-20)

**Kết luận:** 23 tab đã viết lại, qua cổng máy và QA vòng 2. Cả 23 tab đã dán lên Sheet và đối chiếu khớp.

## Đã xong

- CORE LOOP bỏ 4 pillar cũ, thay bằng 5 Core Pillars và nguyên tắc nền của OVERVIEW, mỗi pillar ghi chặng nào của vòng chơi gánh chính.
- 23 tab viết lại: câu ngắn, một ý một dòng, bỏ ý lặp giữa CORE LOOP và Day, không đổi luật và số.
- Cột ID mọi tab là số thứ tự. Trong chữ không còn mã (K1, C3, RES-101, TA01...), ghi bằng tên. Ref chỉ còn `<file>.md mục X`.
- Cổng máy mới `projects/game-moi/tools/kiem-de-doc.mjs`, luật ở `projects/game-moi/briefs/dot8-gdd-de-doc.md`.
- Xóa 5 script sinh TSV cũ, tắt `sim-kinh-te.py --sheet` (sẽ ghi đè bản đọc).

## Số liệu

| Kiểm | Kết quả |
|---|---|
| Cổng kiem-de-doc trước đợt | 3329 lỗi trên 23 tab |
| Cổng kiem-de-doc sau đợt | 0 lỗi, 23 tab ĐẠT |
| validate-gdd | 0 lỗi |
| selftest | 29 trên 29 ĐẠT |
| QA vòng 1 | TRẢ LẠI (tên công thức lệch, mã sót ở Recipe, tên vật rơi Enemy không có trong ITEM LIST, thuật ngữ lẫn) |
| Sửa theo QA | Đã sửa hết lỗi nặng và trung bình |
| Sheet đối chiếu | 23 tab KHỚP (Enemy, Customer dán lại ở phiên riêng) |

## Lệch đã chốt trong đợt (GDM)

| Lệch | Chốt |
|---|---|
| CORE LOOP dùng 4 pillar cũ, OVERVIEW 5 pillar Dave the Diver | Theo OVERVIEW |
| Chương mở Bộ đẩy: `nguoi-choi.md` ghi chương 2 đến 4, `kinh-te-tien-trinh.md` và `vat-pham.md` ghi bậc 1 chương 1, bậc 2 chương 2, bậc 3 chương 3 | Theo bảng kinh tế, sửa `nguoi-choi.md` |
| Vật rơi của Driftlife ở Enemy và `combat-driftlife.md` ghi tên mô tả không có trong ITEM LIST | Ghi theo tên ITEM LIST, tên mô tả để trong ngoặc |
| OVERVIEW pillar 3 ghi đơn đủ 70 đến 95% mọi chương, khung ghi 70 đến 90% từ chương 2 | Theo khung |
| Công thức "Cuộn plasma" trùng tên vật liệu | Đổi tên công thức thành "Ép cuộn plasma" trên Sheet. `vat-pham.md` và JSON còn tên cũ |

## Còn mở (GDD hệ thống, không chặn MVP)

- The Wardens: "lưới năng lượng" (Warden Snarer) và "Linh kiện Warden hiếm" không có trong `vat-pham.md`. Sau MVP.
- Nâng cấp khoang cấp 2 và 3: `tram-va-cang.md` nói cần vật liệu, `kinh-te-tien-trinh.md` để trống. Tab ghi "vật liệu chưa có số".
- Vật liệu sửa khoang chương 1: `kinh-te-tien-trinh.md` mục 8.4 ghi 170 GTĐ, khối Balance Sheet ghi 145. Tab giữ 145.
- Sim kinh tế mua Súng lưới bậc 2 ngày 9, sớm hơn luật cho phép (cần Nhà sinh học).
- Hệ số kiện co-op: `so-hien-hanh.md` 0,6 rồi 0,4 từ chương 3, `tram-va-cang.md` 0,6 mọi chương.
- Kiện vật tư: `tram-va-cang.md` 1 cộng 1, `vat-pham.md` 4 cộng 4. Mở chương 2 nhưng chế cần xưởng cấp 3 (chương 4).
- `map.md` và một số GDD hệ thống vẫn ghi mã pillar cũ P1 đến P4 (khung có bảng quy đổi).

## Giả định / Bỏ qua

- Mã dữ liệu (RES-101...) vẫn ở GDD hệ thống và JSON cho tool, Unity. Sheet không mang mã.
- Agent dán Enemy và Customer bị safeguards của API dừng giữa chừng sau khi dán xong Player. Enemy đang lẫn: hàng 2 tới 81 bản mới, hàng 82 tới 126 bản cũ. Customer còn nguyên bản cũ.
- MVP Criteria Checklist cột Status dán chuỗi "FALSE". Nếu cột này là ô checkbox thì cần xem lại hiển thị trên Sheet.
- Chưa soát mắt trên Sheet (màu, viền hàng mới). Số hàng của GAME STORY, CORE LOOP, Salvage, MVP Checklist ngắn lại, vùng viền cũ bên dưới có thể còn.
