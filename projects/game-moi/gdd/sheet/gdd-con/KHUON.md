# Khuôn GDD con bản đọc

Lead 2026-11-20: GDD con cũ "rườm rà, rối rắm, không gọn gàng, không dễ hiểu, thừa thông tin không cần thiết". Bản đọc viết cho dev, art, PM mở ra hiểu ngay hệ thống. Bản đủ (lý do, sim, lịch sử) vẫn ở GDD hệ thống trong repo, không chép sang.

## Nguyên tắc nội dung

1. Rút gọn, không đổi luật. Mọi luật và số phải trùng GDD hệ thống. Thấy GDD sai thì sửa GDD trước, rồi mới viết bản đọc.
2. Một hàng một ý. Câu ngắn, chủ ngữ rõ, tối đa 2 câu một ô, tối đa 280 ký tự. Ý dài thì tách hàng.
3. Viết cho người không đọc GDD hệ thống: không "xem mục 3.4b", không mã điểm tự quyết, không tên vai (trừ hàng Vai giữ), không nhắc QA, log, sim nội bộ, lịch sử sửa.
4. Dùng đúng từ trong Từ điển (`gdd/00-khung-game.md` mục 10). Tên riêng giữ nguyên tiếng Anh.
5. Bỏ hẳn: Điểm tự quyết, Phản biện khung, Lịch sử thay đổi, Lệch với vai khác, Danh mục sơ bộ, Hiện hành, phần giải thích vì sao chọn số. Lệch khỏi tham chiếu chỉ giữ khi dev cần biết. Cảm giác (game feel) gộp vào YÊU CẦU.
6. Nhóm hàng bằng hàng nhóm: ô đầu bắt đầu bằng "# ", các ô còn lại trống. Mỗi tab tối đa khoảng 8 nhóm.
7. Phạm vi chỉ ghi `MVP` hoặc `Sau MVP`.
8. Không ký hiệu markdown, không gạch dài, không emoji, không dấu chấm phẩy. Xuống dòng trong ô ghi `\n`.
9. Cỡ tab: LUẬT tối đa 70 hàng (kể cả hàng nhóm), tab khác tối đa 45. Vượt thì gộp luật cùng ý, bỏ chi tiết nhỏ dev không cần ngay. Chi tiết đó vẫn ở bản đủ, có link ở TỔNG QUAN.
10. Mã giữ nguyên mã trong GDD hệ thống để các GDD khác trỏ tới không lệch. Chỉ đặt mã mới cho luật GDD chưa đánh mã. Pillar viết bằng tên, không dùng mã.

## Tab và cột

Mỗi tab một file `gdd/sheet/gdd-con/<module>/<TÊN TAB>.tsv`, hàng đầu đúng tên cột dưới đây. Module: `story`, `combat`, `vat-pham`.

| Tab | Cột | Nội dung |
|---|---|---|
| TỔNG QUAN | Mục, Nội dung | Đúng 7 hàng: Hệ thống làm gì (tối đa 3 câu), Người chơi nhận được gì, Pillar phục vụ, Trong MVP, Sau MVP, Liên quan hệ thống khác, Vai giữ. Script tự thêm link GDD chính và bản đủ |
| LUẬT | Mã, Luật, Phạm vi | Luật chơi, trạng thái, thứ tự xử lý, co-op 1 đến 4 người. Mã giữ mã trong GDD (K9, C1...) hoặc mã ngắn theo nhóm |
| THAM SỐ | Tham số, Giá trị, Đơn vị, Ghi chú | Chỉ số hiện hành. Bảng số lớn đã có ở tab dữ liệu thì không chép lại |
| TRƯỜNG HỢP BIÊN | Tình huống, Xử lý | Biên và ràng buộc của luật |
| YÊU CẦU | Bộ phận, Yêu cầu, Phạm vi | Bộ phận: Dev, Tool, Art, UI, Audio, Tutorial |
| NGHIỆM THU | Tiêu chí, Cách đo, Ngưỡng đạt | Điều kiện coi là xong |
| CÂU HỎI MỞ | Câu hỏi, Ai trả lời, Cần trước | Chỉ câu còn mở. Không còn thì không tạo file |
| CHƯƠNG (chỉ story) | Chương, Tóm tắt, Mốc chính, Phạm vi | Mỗi chương một hàng hoặc một nhóm |
| NHÂN VẬT (chỉ story) | Tên, Vai trò, Tính cách và giọng, Phạm vi | Gộp nhân vật truyện và voice sheet |
| TÊN RIÊNG (chỉ story) | Tên, Loại, Nghĩa và ghi chú | Tên riêng thế giới, trạm, chủng tộc |

Tab dữ liệu (GAME STORY, Enemy, Salvage, ITEM LIST, Recipe) giữ nguyên, không viết lại.

## Trình bày (script lo, vai không chỉnh tay)

Hàng 1 tiêu đề tím đậm, hàng 2 tên cột tím nhạt, cố định 2 hàng đầu, hàng nhóm tím rất nhạt chữ tím, viền xám mảnh, bỏ lưới, chữ Arial 10 xuống dòng tự động căn trên, cột Mã và Phạm vi căn giữa, MVP chữ xanh. Độ rộng cột cố định theo tab.

## Kiểm

```
python -P projects/game-moi/tools/dung-gdd-con.py kiem <module>
```

Cổng máy: đủ file, đúng cột, đủ 7 hàng TỔNG QUAN, ô không quá 280 ký tự, không chữ cấm, Phạm vi hợp lệ, mọi số có trong GDD hệ thống. Phải ra ĐẠT trước khi báo xong.
