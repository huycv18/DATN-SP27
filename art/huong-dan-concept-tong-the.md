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

## 2. 10 phần theo thứ tự ưu tiên

Mỗi phần một thư mục trong `C/`, README trong thư mục ghi việc cần làm, đầu ra và file cần đọc.

| Ưu tiên | Thư mục | Đầu ra | Vì sao ở thứ tự này |
|---|---|---|---|
| 1 | `C/01-moodboard` | 4 đến 6 bảng ảnh tham chiếu có nguồn | Mọi phần sau dựa vào đây |
| 2 | `C/02-style-frame` | 4 khung 1920x1080. **Lead duyệt** | Chưa duyệt thì chưa vẽ asset |
| 3 | `C/03-quy-chuan-ky-thuat` | Spec + ảnh thước đo. **Chốt với dev** | Dev cần sớm nhất để dựng greybox đúng tỉ lệ. Làm song song với 4 |
| 4 | `C/04-bang-mau` | Palette có mã hex, kiểm mù màu | Màu tín hiệu dùng cho nhân vật, Driftlife, UI, VFX |
| 5 | `C/05-nhan-vat` | Sheet mỗi nhân vật | Người chơi có nhiều hình nhất (75 bộ), chốt sớm để vẽ clip |
| 6 | `C/06-moi-truong` | Bảng kit + cảnh ghép thử | Chiếm phần lớn màn hình, dev cần kit để thay greybox |
| 7 | `C/07-driftlife-boss` | Sheet mỗi loài, tư thế báo đòn | Cần bảng màu và tỉ lệ nhân vật đã chốt |
| 8 | `C/08-ui-art` | Kit UI mẫu | HUD cần cho bản chơi thử, bố cục đã có wireframe |
| 9 | `C/09-icon` | Quy tắc + 2 icon mẫu mỗi nhóm | Nhiều (155) nhưng vẽ theo quy tắc, cần bậc hiếm từ 4 |
| 10 | `C/10-vfx` | Storyboard VFX | Phụ thuộc màu, nhân vật và Driftlife đã chốt |

## 3. Cách đi qua các mốc

1. Xong 01 và 02 thì gửi Lead duyệt style frame.
2. Duyệt xong thì làm 03 và 04 song song, gửi dev xem 03.
3. Từ 05 trở đi làm lần lượt. Mỗi phần xong thì cập nhật README của thư mục đó.

## 4. Rủi ro cần biết

- Nhóm có 1 artist mà danh sách MVP đã rất nặng: riêng người chơi có 75 bộ hình, cộng 155 icon. Concept phải ưu tiên những gì tái dùng được (rig chung, kit mảnh ghép, icon theo quy tắc). Gặp chỗ nào quá sức thì báo Lead sớm, đừng âm thầm cắt.
- Mọi tên gọi (vùng, khoang, loài) lấy đúng theo GDD. Tên đổi thì sửa theo `projects/game-moi/DECISIONS.md`.
