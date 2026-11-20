# Khuôn ba loại: từng mục phải chứa gì

## A. `he-thong` (một hệ thống, một file)

Khuôn: `docs/process/templates/gdd-he-thong.md`. Giữ đúng thứ tự và tên mục, không thêm mục ngoài khuôn, không bỏ mục (mục không áp dụng ghi một dòng "Không áp dụng vì ...").

| Mục | Phải có | Đạt | Không đạt |
|---|---|---|---|
| Tóm tắt | 2 đến 3 câu, tầng, ưu tiên, phụ thuộc | "Quân băng là quân bị khóa bởi bộ đếm, mở bằng cách nhặt quân khác. Tầng: tính năng. Ưu tiên: bản đầu. Phụ thuộc: luật nhặt, khay." | Một đoạn kể lịch sử |
| Hiện hành | 5 đến 10 dòng trạng thái đúng hôm nay | Mốc giới thiệu, số, tầng đặt, nơi đã cài | Nhật ký theo ngày |
| 1. Mục đích | Cảm giác, quyết định, pillar, 30 giây đầu | "Người chơi phải xếp thứ tự nhặt để băng tan đúng lúc chữ cần lộ" | "Tăng độ khó" |
| 2. Luật | Đánh số, khẳng định, thắng thua kể cả ca tranh cãi, bảng trạng thái, resolution order | "3. Mỗi quân khác được nhặt thành công làm số băng giảm 1, kể cả khi quân băng còn bị đè." | "- Băng thường giảm khi nhặt" |
| 3. Tham số | Bảng 7 cột, núm gap, công thức có ví dụ tính | Hàng "Số băng n, 1, 1 đến 6, tăng thì chờ lâu hơn, giảm thì thành quân thường sớm, GDD game ví dụ" | Số nằm trong câu văn |
| 4. Biên | Tối thiểu 4, mỗi ca có phán quyết | Bảng Ca - Phán quyết - Lý do | "Xử lý như bình thường" |
| 5. Ràng buộc vật lý | Trần, số đếm tối đa, điều không thể kèm số | "Số băng lớn hơn tổng quân còn lại thì không bao giờ tan: validator chặn" | Bỏ trống |
| 6. Engineer / tool | Input, output, sự kiện, dữ liệu lưu, nơi cùng đổi | Danh sách engine, solver, validator, editor, thang độ khó | Chỉ ghi "cập nhật code" |
| 7. Art, UI, tutorial, audio | Bảng sự kiện - hình - âm - text - ưu tiên, tín hiệu nhìn thấy | Hàng cho mỗi luật mới | Không có hàng nào cho trạng thái |
| 7b. Cảm giác | Tham chiếu đúng khoảnh khắc, phản tham chiếu, thời gian | "Mượn lớp băng trong suốt vẫn đọc được chữ bên dưới của mechanic đĩa đóng băng (GDD game phục vụ Order, bản v0.2)" | "Giống game tham chiếu" |
| 8. Đo và nghiệm thu | Chỉ số, bot, fixture, tiêu chí pass/fail | "Mở L16, nhặt 1 quân thường, thấy số băng từ 1 về 0 và viền băng biến mất" | "Chơi thấy ổn" |
| 9. Lệch tham chiếu | Chỉ khi bám tham chiếu | Điểm yếu đánh số, bằng chứng | Bỏ qua mà không ghi "không áp dụng" |
| 10. Câu hỏi mở | Mỗi câu kèm phương án và ai quyết | | Câu hỏi không phương án |
| Lịch sử | Bảng ngày - thay đổi - lý do - ai | | |

## B. `mini` (mini GDD cho prototype)

Khuôn: `templates/mini-gdd.md`. Mục đích: đủ để chạy skill `prototype-game-nhanh` (nếu máy có) trong một phiên mà không hỏi lại. Lấy cấu trúc từ GDD v0.2 của một game phục vụ Order (11 mục, có Resolution Order) cộng bản đồ mechanic 15 level và trục độ khó Lead nêu, không có Sheet.

| Mục | Phải có |
|---|---|
| 1. Tổng quan | Tên, thể loại, nền tảng, core fantasy một câu, USP một câu, game tham chiếu kèm nguồn |
| 2. Luật vàng | 2 đến 3 luật không được phá khi cân bằng (ví dụ "khớp chính xác: thắng là dọn sạch bàn") |
| 3. Luật riêng của game | Đánh số. Khung bàn và từng vùng riêng của game do người dùng đặt tên (ống, Order, bộ đệm, băng chuyền... chỉ khi game có): là gì, sức chứa, khi nào xả |
| 4. Thắng, thua, biên | Điều kiện lấy từ câu trả lời ở bước hỏi 3 câu, chưa có thì ghi "chờ Lead chọn", thua tính lúc nào, ca tranh cãi và trường hợp biên tối thiểu 4, mỗi ca có phán quyết (ví dụ "nhóm chạm trần giữa chừng rồi được chuộc ngay: không thua") |
| 5. Mechanic đặc biệt | Mỗi mechanic: tên theo từ Lead, hình, luật đánh số, mục đích (nguồn khó nào), mốc dạy |
| 6. Resolution order | Thứ tự xử lý sau một thao tác, đánh số từ kiểm hợp lệ tới kiểm thua |
| 7. Bản đồ mechanic 15 level | Bảng Level - Vai trò - Mechanic (lượng, tiến độ) - Nhãn mục tiêu, vai trò theo knowledge 25 (Dạy luật, Giới thiệu, Luyện, Thường, Đỉnh, Thở), L1-5 không thể thua |
| 8. Trục độ khó | Lời Lead mô tả (chôn, áp lực khay, độ chặn, độ dư ...) thành bảng Trục - Định nghĩa bằng lời Lead - Đo bằng gì - Trọng số ý đồ, chưa hiệu chuẩn thì ghi "chưa đo" |
| 9. Visual, UX | Thứ bậc màn hình, art direction một đoạn, cỡ vật thể tối thiểu 44 px ở 380 px, 5 trạng thái màn chơi |
| 10. Tiêu chí nghiệm thu prototype | Mỗi dòng kiểm được: bot, viewport, luật, "chơi hoàn chỉnh bằng một ngón tay màn dọc" |
| 11. Câu hỏi mở | Kèm phương án |
| Lịch sử | Bảng |

## C. `sheet` (6 tab)

Khuôn và nội dung từng tab: `references/sheet-6-tab.md`. Đầu ra là TSV cộng HTML cộng README, nội dung luật lấy từ GDD he-thong hoặc mini đã có, không viết luật mới trong Sheet. Nếu project chưa có GDD markdown nào, viết `mini` trước rồi mới sinh `sheet`.
