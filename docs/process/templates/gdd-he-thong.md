# GDD hệ thống: <tên hệ thống>

Project: <slug> | Chủ sở hữu: <người viết> | Trạng thái: nháp / đã chốt (ngày) | Nguồn quyết định: DECISIONS <ngày>

## Tóm tắt (2-3 câu để người quét 20 GDD quyết có đọc tiếp không)
Hệ thống này là gì, làm gì cho người chơi, vì sao có. Tầng: nền / lõi / tính năng / trình bày. Ưu tiên: prototype / bản đầu / đầy đủ. Phụ thuộc chính: ...

## Hiện hành (tóm tắt 5-10 dòng, luôn cập nhật, lịch sử để cuối file)

## 1. Mục đích với người chơi
Người chơi cảm thấy gì, quyết định gì. Hệ thống này phục vụ pillar nào. "30 giây đầu" người chơi làm gì, thấy gì.

## 2. Luật
Đánh số, viết khẳng định, không từ mơ hồ ("thường", "có thể", "khá"). Dùng đúng từ Lead dùng cho vật thể và vùng.
1. ...
2. ...
Thắng khi: ... Thua khi: ... (kể cả ca tranh cãi, ví dụ "lỗi cuối cùng vừa lộ đáp án").
Cam kết với người chơi: ...

Trạng thái và chuyển tiếp (nếu hệ thống có trạng thái: quân úp, băng n, khóa, ghế mở):
| Trạng thái | Vào khi | Ra khi | Hành vi | Người chơi thấy gì |
|---|---|---|---|---|

Thứ tự xử lý trong một lượt (resolution order): 1. ... 2. ... (ví dụ: nhặt -> vào order -> chuộc khay -> kiểm Link -> kiểm thua).

## 3. Tham số
| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nhóm tác động | Nguồn (gốc / đo / ước) |
|---|---|---|---|---|---|---|

Núm gap (tham số ta đặt để nối số gốc với mục tiêu): ... Công thức nếu có: viết công thức, định nghĩa biến, khoảng đầu ra, một ví dụ tính.

## 4. Trường hợp biên
Ít nhất: giá trị 0, giá trị max, lặp nhanh / spam, thoát giữa chừng, hai mechanic chồng nhau, booster + mechanic, hàng chờ còn 1 ô.

## 5. Ràng buộc vật lý của luật
Trần độ khó, trần số đếm, điều không thể (kèm số hoặc lý do).

## 6. Yêu cầu cho engineer / tool
Input, output, sự kiện, dữ liệu lưu, nơi luật phải cùng đổi (engine, solver, tool, validator).

## 7. Yêu cầu cho art, UI, tutorial, audio
| Sự kiện | Hình (VFX, trạng thái) | Âm (SFX) | Text / tutorial | Ưu tiên |
|---|---|---|---|---|
Tín hiệu nhìn thấy của mỗi luật mới; bước tutorial cần có.

## 7b. Cảm giác (game feel)
Tham chiếu cảm giác: tên game và đúng khoảnh khắc mượn (ví dụ: liên thanh kiểu This Is Blast; dồn đĩa có gia tốc và nảy hai nhịp). Phản tham chiếu: không được giống gì. Thời gian phản hồi, tween, rung, cao độ SFX theo combo.

## 8. Cách đo thành công và tiêu chí nghiệm thu
Chỉ số kết quả và chỉ số trải nghiệm; bot nào chấm; fixture.
Tiêu chí nghiệm thu đo được (QA kiểm pass/fail): "mở level X làm Y thấy Z", "bot nhắm mắt thắng L1-5 ≥ 90%", "không có nước nào làm state vi phạm bất biến".

## 9. Lệch khỏi tham chiếu (nếu bám game tham chiếu)
Tham chiếu làm thế nào, điểm yếu đánh số nào được sửa, bằng chứng không tệ hơn.

## 10. Câu hỏi mở
Mỗi câu kèm phương án đề xuất và ai quyết.

## Lịch sử thay đổi
| Ngày | Thay đổi | Lý do | Ai |
|---|---|---|---|
