# Rà chéo và sửa GDD The Novent (2026-11-23)

Nối tiếp `2026-11-23-review-gdd-sheet.md` (5 tab). Lượt này rà 18 tab còn lại, sửa repo, dán Sheet chính `1NayaWIuhGD9p3Czlff9sCubY610Ksye4bo97R_QqPdE`.

## Kết luận

Sheet chính khớp repo ở cả 23 tab (`doi-chieu-sheet.mjs` thoát 0). Đã sửa 3 lỗi lệch luật mà review trước tìm ra và 33 lỗi mới từ rà chéo. Thời lượng sau khi sửa sim vẫn trong mục tiêu. Còn 6 điểm mở ở cuối file, không chặn MVP.

## Số lỗi

| Nhóm | Tab | Lỗi đã sửa | Báo cáo |
|---|---|---|---|
| Review trước | MVP Criteria Checklist, Day | 3 (lưu game K23, thời lượng) | `2026-11-23-review-gdd-sheet.md` |
| A | Customer, ECONOMIC, Shop, Upgrade, PROCESSING, Balance Sheet | 6 lỗi chữ, 5 điểm GDM chốt | `projects/game-moi/qa/2026-11-23-ra-cheo-A.md` |
| B | Player, Enemy, Salvage, ITEM LIST, Recipe, Zone | 4 lỗi, 3 điểm GDM chốt | `projects/game-moi/qa/2026-11-23-ra-cheo-B.md` |
| C | GAME STORY, WIREFRAME, Tutorials, Event Tracking, Assets, AUDIO ASSETS LIST | 19 lỗi (Cao 4), 3 điểm GDM chốt | `projects/game-moi/qa/2026-11-23-ra-cheo-C.md` |

Lỗi nặng nhất: Assets và AUDIO còn ghi phần bắt sống là Sau MVP và còn giữ cảnh Maro lộ mặt trong ca cảng (bản trước đợt 6). Asset kiện còn 3 cỡ. Sim kinh tế mua bộ đồ bậc 2 trước Xưởng cấp 2, trái cổng.

## Thời lượng sau khi sửa sim

| Chỉ số | Trước | Sau | Mục tiêu |
|---|---|---|---|
| Chương 1 | 1,89 giờ | 1,90 giờ | 1,5 đến 2 |
| Chương 3 | 3,99 giờ | 4,37 giờ | - |
| Cả game | 13,9 giờ | 14,2 giờ | 12 đến 15 |
| Nhóm 4 so với một mình | 73% | 71% | 60 đến 75% |
| Tip trong Tally | 26% | 26% | 20 đến 30% |

## Điểm GDM chốt

Ghi ở `projects/game-moi/DECISIONS.md` mục "Rà chéo 23 tab Sheet". Gồm: cổng Xưởng cấp 2, giá riêng khoang sinh quyển cấp 3, Máy quét xung chương 2, số đơn đặt trước, phím Esc và Start, đổi tên SFX_Order, cách hiểu co-op MVP 2 người.

## Cổng máy

| Lệnh | Kết quả |
|---|---|
| `selftest.mjs` | 33 phép ĐẠT |
| `validate-gdd.mjs` | 0 lỗi |
| `kiem-de-doc.mjs --tat-ca` | ĐẠT |
| `sim/vat-pham.mjs` | 0 lỗi |
| `doi-chieu-sheet.mjs` (Sheet chính) | 23 tab KHỚP |

## Còn mở

| # | Việc | Ai | Ghi chú |
|---|---|---|---|
| 1 | Thẻ tên buồng ngủ đông: Zone đặt ở Station Cinder (MVP), ITEM LIST nhãn Sau MVP | gd-items, gd-world | Chọn cắt khỏi Zone hay đổi nhãn MVP |
| 2 | `ITEM LIST.json`, `Recipe.json` còn luật cũ, không script nào đọc | gd-tech | Xóa cần Lead đồng ý |
| 3 | Kỹ sư cấp 3 "bậc cao nhất": Xưởng cấp 3 có chặn bậc 4 không | gd-economy, gd-quan | Chưa áp, sim chưa có cổng này |
| 4 | Chưa có dòng giá khoang sinh quyển cấp 1 và 2 (chương 2) | gd-economy | Đưa vào backlog |
| 5 | Chương 3 chi thật 145000, vượt ngân sách 130350 | gd-economy | Chia lại thì giá chương 3 giảm khoảng 10% |
| 6 | Sheet cũ `1kGdCe...` đã nhận 3 ô sửa trước khi đổi Sheet chính | - | Sheet cũ thôi dùng, không cần làm gì |

## Giả định

- Hàng mới chèn ở Assets, AUDIO, Upgrade, ECONOMIC lấy định dạng của hàng ngay trên. Chưa soát mắt màu nhóm trên Sheet.
- Rà chéo đọc TSV, không so từng chữ GAME STORY với `cot-truyen.md`.
