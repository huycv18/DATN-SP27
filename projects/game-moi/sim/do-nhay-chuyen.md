# Độ nhạy thời lượng chuyến (sinh bởi do_nhay_chuyen.mjs, 2026-11-19T20:54)

Sim gd-tech `tools/sim-chuyen.mjs`, seed 1, 600 chuyến mỗi ô, một người, kịch bản trung bình. Chỉ phần nhặt tài nguyên.

## A. Đổi số hàng mỗi dải (diện tích), túi giữ nguyên

| Hàng | Chương 1 phút | Chương 3 phút | Chương 5 phút |
|---|---|---|---|
| 3 | 1,5 | 4,8 | 6,4 |
| 4 | 1,2 | 4,7 | 6,1 |
| 5 | 1,2 | 4,7 | 6,2 |

## B. Đổi giây khai thác mỗi node và cỡ túi, 3 hàng

| Giây node so với hiện hành | Túi nhân | Ch1 phút | Ch1 về vì túi | Ch3 phút | Ch3 về vì túi | Ch5 phút | Ch5 về vì túi |
|---|---|---|---|---|---|---|---|
| 0,5 | 1 | 1,2 | 100% | 4,3 | 100% | 5,2 | 100% |
| 0,5 | 2 | 1,9 | 100% | 5,2 | 77% | 7,3 | 91% |
| 0,5 | 3 | 2,7 | 99% | 5,6 | 25% | 8,1 | 22% |
| 1 | 1 | 1,5 | 100% | 4,8 | 97% | 6,4 | 100% |
| 1 | 2 | 2,5 | 100% | 5,8 | 50% | 8,6 | 55% |
| 1 | 3 | 3,6 | 93% | 5,9 | 1% | 8,8 | 0% |
| 1,5 | 1 | 1,8 | 100% | 5,3 | 95% | 7,2 | 100% |
| 1,5 | 2 | 3,2 | 99% | 6,1 | 13% | 9,2 | 14% |
| 1,5 | 3 | 3,9 | 43% | 6,1 | 0% | 9,2 | 0% |

## C. Đề xuất túi và bình theo chương (sim có Driftlife)

| Chương | Túi | Bình | Phút P50 | Về vì túi | Bị kéo về, trung bình | Bị kéo về, tham | GTĐ một chuyến | Mục tiêu khung (phút) |
|---|---|---|---|---|---|---|---|---|
| 1 | 80 | 330 | 4,2 | 64% | 1% | 22% | 99,1 | 4 đến 6 |
| 2 | 100 | 450 | 5,4 | 21% | 1% | 35% | 318,1 | không có |
| 3 | 126 | 600 | 6,7 | 11% | 2% | 39% | 847,6 | không có |
| 4 | 168 | 780 | 8,6 | 15% | 0% | 27% | 1218,3 | không có |
| 5 | 216 | 1000 | 10,7 | 18% | 0% | 12% | 1604,3 | 10 đến 12 |

Tự kiểm đề xuất vào khung mục 9: ĐẠT
