# Phần máy, playtest prototype một chuyến (2026-11-23)

Build: `projects/game-moi/tools/prototype/bay.html` (commit c55a1eb và bản sửa kẹt phím cùng ngày), mở qua `http://127.0.0.1:8791/bay.html` trong khung Browser.

## Kết quả

| Kiểm | Kết quả |
|---|---|
| Tự kiểm `?kiem` | ĐẠT 12 phép: vạch "đủ về" 2 ca tính tay, ngạt 12 giây rồi kéo về giữ 1 món, cửa khí và Beacon giữ nguyên túi, khai thác cộng đúng Khối và GTĐ |
| Lỗi console | Không có |
| Chuyến chạy bằng phím giả lập | Bay phải 5 giây, Hãm, bay về cửa khí. Màn kết chuyến hiện đúng: 12,0 giây, Oxy còn 318 trên 330, xa nhất 19 u |
| Khung 1280x720 | Bản đồ 931 x 525, nằm trọn trong khung. Thanh chỉnh bên phải phải cuộn xuống mới thấy hết, không ảnh hưởng khi chơi |
| Rời cửa sổ khi đang giữ phím | Lỗi: nhân vật bay mãi vì không nhận keyup. Đã sửa (nhả hết phím khi cửa sổ mất focus), kiểm lại tốc độ về 0 |
| Tab ẩn | Vòng lặp vẽ dừng, Oxy cũng dừng, tức là tạm dừng. Bước thời gian mỗi khung bị chặn ở 0,1 giây nên quay lại không bị giật |
| Độ dài chuyến tối đa | Bình 330 Oxy, hao 1 Oxy mỗi giây ở mức nền, nên một chuyến dài nhất khoảng 5,5 phút. Mục tiêu chuyến chương 1 là 4 đến 6 phút (`map.md` bảng tham số) |

## Chưa kiểm được

- Chưa ai chơi bằng tay. Bài 23 và 24 phải có người chơi mới đo được, bot không tự dừng chính xác.
- Âm bíp ở ngưỡng Oxy chưa nghe thử.
- Tay cầm chưa thử. Prototype mới nhận bàn phím.
- Đòn hẹp 0,7 giây của tiêu chí 54 chưa có trong prototype.
