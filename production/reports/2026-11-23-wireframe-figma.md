# Wireframe cơ bản The Novent trên Figma (2026-11-23)

File: https://www.figma.com/design/rwemYZkNuUXZKONbA2c2EW/The-Novent , trang "Wireframe MVP".
Nguồn: `projects/game-moi/gdd/he-thong/ux-ui.md` mục 2.1 đến 2.9, tab WIREFRAME, `so-hien-hanh.md`, tab Upgrade, tab Shop.

## Đã dựng

| Nhóm | Khung | Ghi chú |
|---|---|---|
| M | UI-01, UI-02, UI-03, UI-04, UI-05 | UI-03 gắn thẻ đề xuất bỏ |
| T | UI-10, UI-11, UI-14, UI-12, UI-13, UI-15, UI-16, UI-17 (khuôn chung UI-18), UI-19 | UI-10 là trạng thái gốc, UI-20 đề xuất gộp vào |
| O | UI-30 (kèm UI-32), UI-30b HUD boss (đề xuất), UI-31, UI-33, UI-34, UI-35 (khuôn chung UI-36) | |
| C | UI-40 (kèm UI-41, UI-42), UI-43 (kèm UI-45), UI-44 | |
| S | UI-50, UI-51, UI-52, UI-53, hộp xác nhận (đề xuất) | |

Tổng 28 khung 1280x720, lề an toàn 5%, 4 component (WF/Button 3 biến thể, WF/Tag, WF/Keycap, WF/DeXuat). Không dựng UI-21, UI-22 (Sau MVP).

## Đánh giá phần wireframe trong GDD

Đủ: 35 màn có luồng vào ra, 3 câu, hành động chính, 5 trạng thái. HUD bay 15 phần tử, HUD ca cảng 11, HUD trạm 4. Có bản vẽ ASCII cho 6 màn. Tab WIREFRAME chỉ là danh mục chữ.

Thiếu (MVP):
1. HUD boss cho BS-1 Scrapmaw (sức chịu, ngưỡng choáng, pha, lời nhắc Xua đi). Không có phần tử nào trong HUD-01 đến HUD-15.
2. Chỉ báo choáng và Bất lực trên Driftlife (world-space).
3. Khuôn hộp xác nhận cho luật 7, 23, 28, 31.
4. Chỗ xóa thế giới (UI-02 trạng thái Đầy bảo xóa bớt).
5. Lệch số: HUD-05 ghi đai "2 đến 4 ô", phím đổi dụng cụ "1 đến 4", trong khi `nguoi-choi.md` T-DUNGCU ghi 3, 4, 5 ô. Wireframe theo `nguoi-choi.md`.

Thừa (đề xuất gộp, chờ Lead):
1. UI-41, UI-42, UI-32 là phần tử HUD, không phải màn.
2. UI-20 là trạng thái của UI-10.
3. UI-03 trùng với cơ chế vào sau bất kỳ lúc nào (UI-04).
4. UI-45 gộp thành khối trong UI-43.
5. Cặp cùng khuôn: UI-35 và UI-36, UI-17 và UI-18.

35 màn còn khoảng 22 khuôn phải vẽ.

## Giả định và chưa làm

- Giá Shop, vật liệu nâng cấp, lời thoại là chỗ đặt `{...}` khi GDD chưa có số. Giá thùng và độ gọi lấy tab Shop, bậc 1 lấy tab Upgrade.
- Font wireframe Be Vietnam Pro (đủ dấu), chưa phải font game.
- Chưa chạy `validate_wireframe.py` (script kiểm SVG, không áp cho Figma). Chưa soi ở 1080p, Steam Deck. Chưa có anchor game tham chiếu nên phần thẩm mỹ CHƯA ĐÁNH GIÁ.
- Các đề xuất thêm hoặc bỏ đã đưa vào `ux-ui.md`, xem mục dưới.

## Đã đưa vào ux-ui.md (Lead chọn sửa, cùng ngày)

| Mục | Trước | Sau |
|---|---|---|
| Màn | 35 | 30 (28 MVP) |
| Phần tử HUD bay | 15 | 18 |
| Phần tử HUD ca cảng | 11 | 12 |
| Strings | 287 | 298 |

HUD boss viết theo `combat-driftlife.md` mục 3.7: boss không có thanh Choáng, chỉ Bất lực theo cơ chế pha, nên HUD-17 hiện Sinh lực, pha, bộ đếm Neo hoặc Dây nối và đồng hồ Choáng. Khung UI-30b trên Figma đã sửa theo. Cổng máy: `kiem-ux.mjs` 0 lỗi, `kiem-de-doc.mjs --tab WIREFRAME` ĐẠT, `validate-gdd.mjs` 0 lỗi, `selftest.mjs` 33 ĐẠT. Chưa dán tab WIREFRAME lên Sheet.

