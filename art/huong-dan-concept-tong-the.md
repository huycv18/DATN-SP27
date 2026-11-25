# Hướng dẫn làm concept tổng thể - The Novent

Concept tổng thể (art bible) là bộ tài liệu hình ảnh chốt game trông thế nào, để mọi asset sau đó vẽ ra cùng một tay, và dev dựng vào Unity không phải hỏi lại. Làm theo thứ tự dưới đây, mỗi mốc có dấu Lead duyệt thì dừng chờ duyệt rồi mới đi tiếp.

## 0. Đã chốt, không cần làm lại

| Mục | Giá trị | Nguồn |
|---|---|---|
| Không gian và góc nhìn | Unity dựng cảnh 3D, đồ họa 2.5D, camera top-down nghiêng 45 độ (orthographic). Mọi asset là 2D, không có model 3D | `projects/game-moi/DECISIONS.md` 2026-11-23 |
| Mẫu cảnh bay | 2 ảnh Lead duyệt: `projects/game-moi/art/gameplay-dai-gan-thu-hoi.png`, `gameplay-dai-gan-bai-vo.png` | DECISIONS 2026-11-23 |
| Không khí | Sci-fi sinh tồn, nền nghiêm, hài nhẹ từ tính cách nhân vật. Bãi vỡ tối và lạnh, trạm Ember ấm dần theo từng khoang sửa xong | `gdd/00-khung-game.md` mục 13 |
| Màu chủ | Không gian xanh than, tím đậm. Ánh sáng trạm cam ấm. Driftlife phát quang | mục 13 |
| Màu cấm dùng chung | Trắng xương `#EDEBE0` và lục acid `#7CFC3A` chỉ dành cho giáp The Wardens | mục 13 |
| Slot người chơi | cam tròn, lam ngọc tam giác, vàng chanh vuông, hồng tím thoi | mục 13 |
| Nhân vật | Silhouette đọc được ở 72 px mỗi u (720p). Tối đa 6 màu chính + 2 màu nhấn. Người chơi bão hòa từ 70%, NPC tới 45%. Rig xương chung, mảnh bộ đồ thay theo 5 trục nâng cấp | mục 13 |
| Tham chiếu cảm giác | Dave the Diver: đọc rõ, vui mắt, nhân vật nhiều biểu cảm. Chỉ lấy cảm giác, không lấy asset | mục 13 |

Lưu ý: chữ "Dải Gần" trong ảnh mẫu là tên cũ, nay gọi là Vành đai ngoài.

## 1. Đọc trước (khoảng nửa ngày)

| File | Đọc để biết |
|---|---|
| `projects/game-moi/gdd/00-khung-game.md` mục 1, 2, 3, 13 | Game là gì, 5 pillar, bối cảnh, art direction |
| `projects/game-moi/gdd/sheet/Assets.tsv` | Danh sách asset MVP và Sau MVP (91 dòng) |
| `projects/game-moi/gdd/he-thong/ho-so-nhan-vat.md` mục 7 | Yêu cầu art nhân vật |
| `projects/game-moi/gdd/he-thong/combat-driftlife.md` mục 7 | Driftlife, boss, VFX combat |
| `projects/game-moi/gdd/he-thong/map.md` mục 7 | Kit môi trường, hazard |
| `projects/game-moi/gdd/he-thong/tram-va-cang.md` mục 7 | Trạm, khoang, tàu thương nhân |
| `projects/game-moi/ux/de-xuat-topdown/` | Bố cục top-down trạm (UI-10) và cảng (UI-40) Lead đã duyệt |

## 2. Các phần của concept tổng thể

| # | Phần | Làm gì | Đầu ra | Để ở |
|---|---|---|---|---|
| 1 | Moodboard | Gom ảnh tham chiếu cho từng chủ đề: bãi vỡ, nội thất trạm, sinh vật phát quang, thương nhân ngoài hành tinh, UI sci-fi. Mỗi ảnh ghi nguồn và lý do chọn | 4 đến 6 bảng moodboard | `nghien-cuu/` |
| 2 | Style frame (key art) | Vẽ 4 khung hình 1920x1080 đúng góc camera: Vành đai ngoài (đã có mẫu), trạm Ember lúc hỏng, trạm Ember lúc sửa xong vài khoang, cảng giờ giao thương có tàu của Tikko | 4 style frame. **Lead duyệt** | `lam-viec/style-frame/` |
| 3 | Bảng màu | Bảng màu chung, bảng riêng mỗi vùng, màu trạm theo trạng thái (Hỏng, Hoạt động, Đang nâng cấp), màu tín hiệu (báo đòn vàng và đỏ, choáng xanh dương, 4 bậc hiếm). Kiểm mù màu | 1 file palette có mã hex | `lam-viec/palette/` |
| 4 | Quy chuẩn kỹ thuật | Tỉ lệ px mỗi u, kích thước nhân vật so với cửa và thùng, 3 hướng vẽ và hướng nào lật ngang, pivot, hướng nguồn sáng cố định, bóng đổ, nét viền có hay không và dày bao nhiêu, định dạng xuất | 1 trang spec + 1 ảnh thước đo. **Chốt với dev** | `lam-viec/spec/` |
| 5 | Nhân vật | Shape language, bảng silhouette, turnaround 3 hướng, bảng biểu cảm, bộ đồ chia mảnh thay được. Người chơi trước, rồi Ingrid, Linh, Tikko (loài Oru) | Sheet nhân vật mỗi người | `lam-viec/nhan-vat/` |
| 6 | Driftlife và boss | Hình dáng theo hành vi: loài hiền tròn, màu lạnh, loài săn mồi nhọn, có điểm đỏ hoặc vàng báo đòn. 4 loài MVP (Driftmoth, Skitter Ray, Sting Krill, Arc Eel) và boss Scrapmaw | Sheet mỗi loài, 1 tư thế báo đòn | `lam-viec/driftlife/` |
| 7 | Môi trường | Kit mảnh ghép (vỏ tàu, thiên thạch, băng, mây khí), nội thất Seed Station, mốc lớn, 3 hazard MVP, khoang trạm 3 trạng thái | Bảng kit + 1 cảnh ghép thử | `lam-viec/moi-truong/` |
| 8 | Icon và prop | Quy tắc vẽ icon cho 6 nhóm vật phẩm (phế liệu góc cạnh, khoáng tinh thể, băng khối trong, linh kiện bo mạch, mẫu sinh học, kiện hộp). 4 bậc hiếm khác nhau cả màu, viền và hình | 1 trang quy tắc + 2 icon mẫu mỗi nhóm | `lam-viec/icon/` |
| 9 | VFX | Ngôn ngữ hình của hiệu ứng: trúng đòn, choáng, bắt được, nhặt đồ, Recall Beacon | 1 trang storyboard VFX | `lam-viec/vfx/` |
| 10 | UI art | Khung, nút 5 trạng thái, thanh, font đủ dấu tiếng Việt. Bám wireframe của gd-ux, không tự đổi bố cục | Kit UI mẫu | `lam-viec/ui/` |

## 3. Thứ tự làm

1. Moodboard, rồi style frame. Đây là mốc Lead duyệt đầu tiên. Chưa duyệt thì chưa vẽ asset.
2. Bảng màu và quy chuẩn kỹ thuật, làm song song. Dev cần quy chuẩn kỹ thuật sớm nhất để dựng greybox đúng tỉ lệ.
3. Nhân vật người chơi, vì có nhiều clip nhất (17 clip ngoài không gian + 8 clip trong trạm, mỗi clip 3 hướng).
4. Driftlife, môi trường, icon, VFX, UI.

## 4. Rủi ro cần biết

- Nhóm có 1 artist mà danh sách MVP đã rất nặng: riêng người chơi có 75 bộ hình, cộng 155 icon. Concept phải ưu tiên những gì tái dùng được (rig chung, kit mảnh ghép, icon theo quy tắc). Gặp chỗ nào quá sức thì báo Lead sớm, đừng âm thầm cắt.
- Mọi tên gọi (vùng, khoang, loài) lấy đúng theo GDD. Tên đổi thì sửa theo `projects/game-moi/DECISIONS.md`.
