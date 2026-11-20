# Đợt 2b và đợt 3 game-moi: chốt thang túi, bình rồi QA chéo (2026-11-20)

Nguồn: `log-gdm-tu-quyet.md` Phần 4 (dòng 54 đến 60), khung sửa lần 3 (`gdd/00-khung-game.md`: C5, C8, mục 9).

## Phần A - Đợt 2b: áp thang túi và bình GDM đã chốt

GDM chốt (log 54, 55): túi 80, 100, 126, 168, 216 Khối. Bình Oxy 330, 450, 600, 780, 1000. Hệ số ngân sách kinh tế 0,60, giờ mục tiêu chương 1 trong công thức 1,25. Giữ 1 món khi ngạt, chọn Lồng mẫu làm món giữ thì chỉ giữ con sao cao nhất (log 57).

| Vai | Việc | Ghi vào |
|---|---|---|
| gd-character | Đổi thang túi và bình trong `nguoi-choi.md` (bảng tham số, ví dụ tính, ngưỡng cảnh báo nếu tính theo dung lượng). Sửa luật món giữ khi chọn Lồng mẫu. Sửa 7 lỗi validator: 3 hàng NP thiếu nhãn MVP ở `ho-so-nhan-vat.md`, ID TOL-101, UPG-OXY-5, UPG-BAG-5, UPG-THR-5 không có trong `vat-pham.md` (khớp cách đánh số bậc với gd-items) | hai file của vai |
| gd-items | Khớp ID và số bậc nâng cấp với gd-character (bậc 0 đến 4). Kiểm Khối mỗi kiện và thang T của túi theo thang mới. Chạy lại `sim/vat-pham.mjs` | `vat-pham.md` |
| gd-tech | Cập nhật `tools/tham-so/chuyen.json` theo thang mới, chạy lại sim chuyến và validator, ghi `tools/ket-qua/`. Validator phải 0 lỗi khi các vai sửa xong | `tools/`, `ky-thuat.md` |
| gd-economy | Chạy lại sim với thang mới và tham số log 55, ghi bảng chính, cập nhật "Số hiện hành đề xuất". Mục tiêu mới của khung mục 9 (thưởng 15 đến 25% thu) thay mục tiêu cũ | `kinh-te-tien-trinh.md`, `sim/economy/` |
| gd-world | Đưa thang đã chốt vào mục Hiện hành và bảng ngân sách Oxy của `map.md` (mục 3.2), bỏ chữ "chờ GDM chốt" | `map.md` |
| gd-quan, gd-ux, gd-combat, gd-story | Không có việc ở 2b, trừ khi gd-qa trả lỗi |

Các vai nhắn thẳng nhau khi cần số. Báo GDM `GD-0xx 2B XONG|KẸT`, tối đa 8 dòng.

## Phần B - Đợt 3: GD-031 gd-qa review chéo

Mục tiêu: chấm độc lập toàn bộ GDD trước khi GDM dán Sheet và trình Lead.
Phạm vi: `gdd/00-khung-game.md` và 10 file ở `gdd/he-thong/` (cot-truyen, nguoi-choi, ho-so-nhan-vat, combat-driftlife, vat-pham, map, tram-va-cang, kinh-te-tien-trinh, ux-ui, ky-thuat). Số túi, bình và bảng kinh tế đang được chạy lại ở 2b: chấm các phần đó sau cùng, xem giờ sửa file trước khi chấm.

Việc:
1. `/gdd-review` đủ 5 lớp cho từng file. Bỏ các tiêu chí chỉ đúng với Puzzle.
2. Đối chiếu với lời Lead: mọi mục "Đã chốt" trong `DECISIONS.md` từ 2026-11-19 tới nay phải được GDD tôn trọng. Liệt kê chỗ GDD trái lời Lead. Lời Lead sau thay lời Lead trước (ví dụ Solace là mồi và kết mở thay "kết tới Solace").
3. Mâu thuẫn chéo giữa các GDD: cùng một thứ mà hai file nói khác nhau (số, tên, ID, mốc chương, nhãn MVP). Chạy `node projects/game-moi/tools/validate-gdd.mjs` làm lớp máy, phần của bạn là thứ máy không bắt được.
4. Lỗ hổng thiết kế: chiến lược trội, vòng lặp vô hạn (ví dụ về trạm nạp Oxy), luật chỉ đúng với N người (trái P3), thứ nhặt được mà không có chỗ dùng (trái P2), co-op bị kẹt, người chơi một mình không chơi được trọn.
5. Đọc bằng người không có ngữ cảnh: một dev mới đọc `tram-va-cang.md` mục Luật có dựng được ca cảng không, đọc `nguoi-choi.md` có dựng được di chuyển và Oxy không. Ghi chỗ phải đoán.
6. Kiểm bằng chứng số: chạy lại selftest và 4 sim, số trong GDD có khớp file kết quả không.
7. MVP Criteria Checklist cho chương 1: bảng Feature, Category, Acceptance Criteria đo được, lấy từ mục 8 của các GDD.

Ghi vào: `projects/game-moi/qa/GD-031-<ten-file>.md` mỗi GDD một file, dòng đầu ĐẠT hoặc TRẢ LẠI, lỗi có mức (chặn, nặng, nhẹ), file, dòng, bằng chứng. `projects/game-moi/qa/GD-031-tong-hop.md` (bảng tổng, mâu thuẫn chéo, chỗ trái lời Lead). `projects/game-moi/qa/mvp-criteria-checklist.md`.
Cách làm: lỗi chặn và nặng gửi thẳng tác giả bằng một tin gộp cho mỗi vai (id phiên ở `briefs/dot2-kinh-te-ux-ky-thuat.md`, gd-character là subagent nên lỗi của vai đó gửi GDM). Tác giả sửa rồi báo lại, bạn chấm lại. Tối đa 2 vòng. Không tự sửa GDD của vai khác. Không chấm ĐẠT cho đủ: còn lỗi chặn thì TRẢ LẠI.
Báo GDM dòng đầu `GD-031 XONG|KẸT`, kèm bảng mỗi file một dòng và danh sách việc còn treo.
