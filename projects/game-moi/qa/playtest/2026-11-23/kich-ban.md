# Kịch bản playtest prototype một chuyến (2026-11-23)

**Mục tiêu buổi:** người chưa biết game, chỉ đọc dòng hướng dẫn trên trang, có thấy một chuyến bay đáng chơi tiếp không, có dám liều Oxy không, và có điều khiển được bay quán tính không.

Build: `projects/game-moi/tools/prototype/bay.html`. Phần máy đã chạy trước: `may.md`. Phiếu điền cho từng người: `phieu.md`.

## Người chơi

5 đến 8 người chưa đọc GDD và chưa xem ai chơi. Mỗi người chơi riêng, khoảng 20 phút.

## Chuẩn bị máy

1. Mở PowerShell trong `projects/game-moi/tools/prototype`, chạy `python -m http.server 8791 --bind 127.0.0.1`.
2. Mở Chrome tới `http://127.0.0.1:8791/bay.html`, cho cửa sổ to hết màn hình, bật loa.
3. Trước mỗi người: tải lại trang (F5), bấm "Về số gốc". Không chỉnh thanh nào ngoài bước Thử né bên dưới.
4. Bàn phím và chuột. Chưa thử tay cầm.

## Lời dặn người chơi (đọc nguyên văn)

"Đây là bản thử phần bay của một game. Bạn đọc dòng chữ trên cùng rồi chơi theo ý mình. Mình chỉ ngồi ghi, không giúp. Bạn cứ nói to những gì đang nghĩ."

Người quan sát không giải thích luật, không chỉ chỗ, không trả lời câu hỏi về luật. Người chơi hỏi thì đáp "bạn cứ thử xem" và ghi câu hỏi đó vào phiếu.

## Trình tự

| Bước | Làm gì | Ghi gì |
|---|---|---|
| 1. Chuyến 1 | Tab Chuyến. Để người chơi tự chơi tới khi màn kết chuyến hiện | Bối rối ở đâu, có nhận ra vạch "đủ về" không, về bằng cách nào |
| 2. Câu hỏi giữa buổi | Màn kết chuyến hiện thì hỏi: "Bạn có muốn đi thêm chuyến nữa không?" Không gợi ý gì thêm | Có hoặc không, lý do nguyên văn. Đây là câu hỏi đầu tiên trong 3 câu Lead cần trả lời |
| 3. Chuyến 2 | Chơi chuyến 2 dù họ đáp có hay không. Muốn chơi chuyến 3 thì cho chơi | Có đi xa hơn chuyến 1 không, có liều dưới vạch không |
| 4. Bài 23 Hãm | Tab Bài 23. Chơi đủ 10 lần dừng | Tỉ lệ đạt hiện trên màn |
| 5. Bài 24 Hành lang | Tab Bài 24. Chơi 3 lượt | Số lần chạm tường lượt 3 |
| 6. Thử né | Quay lại tab Chuyến, kéo thanh "Báo trước đòn thử" về 1,0 giây và "Bán kính đòn thử" về 2,5 u, bấm T, né khoảng 10 đòn | Số né trên số đòn hiện ở dòng dưới bản đồ |
| 7. Xuất JSON | Bấm Xuất JSON, chép nội dung ô chữ vào file `json/<tên người chơi>.json` trong thư mục này | Không điền gì, máy gom |
| 8. Phiếu | Người chơi điền 4 câu cuối của phiếu, khoảng 3 phút | |

## Mốc đạt của buổi

Mức của tiêu chí MVP lấy từ tab MVP Criteria Checklist. Mức của 3 câu hỏi do GDM đặt, ghi nhãn [GIẢ ĐỊNH], Lead đổi được trước buổi.

| Câu hỏi | Đo bằng | Đạt khi |
|---|---|---|
| Muốn ra chuyến thứ hai | Câu hỏi ở bước 2 | Từ 2/3 số người trả lời có [GIẢ ĐỊNH] |
| Có liều quá vạch "đủ về" | JSON: số lần và số giây dưới vạch, cách về | Từ nửa số người có ít nhất một lần dưới vạch, và dưới 1/3 số chuyến kết thúc bằng bị kéo về [GIẢ ĐỊNH] |
| Có thấy khó điều khiển | Phiếu câu 4 (điểm 1 đến 5) và lời nói to | Điểm trung bình từ 3 trở xuống, không ai bỏ dở bài 24 [GIẢ ĐỊNH] |
| Tiêu chí 23 | Bài 23 | Trên 90% lần dừng cách đích tối đa 0,5 u |
| Tiêu chí 24 | Bài 24 | Lượt thứ 3 không chạm tường |
| Tiêu chí 54 | Thử né | Từ 70% số đòn né được sau 3 lần thử |

Chưa đo được ở buổi này: đòn hẹp 0,7 giây của tiêu chí 54. Prototype chỉ có đòn vùng tròn.

## Sau buổi

Gom phiếu, file JSON và ghi chú vào thư mục này, rồi chạy `/playtest phan-tich` để ra `ket-qua.md`.
