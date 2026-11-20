# Ngân sách Oxy một chuyến (sinh bởi ngan_sach_oxy.py, 2026-11-20 08:52)

Phép tính ước, chưa sim. Đơn vị giây.

## Ranh dải

| Dải | Từ (u) | Tới (u) | Giây bay thẳng tới ranh ngoài | Giây bay có đường vòng |
|---|---|---|---|---|
| Gần | 0 | 160 | 27 | 35 |
| Giữa | 160 | 400 | 67 | 87 |
| Xa | 400 | 720 | 120 | 156 |

## Trần Oxy theo chương, đủ cấp môi trường (thời lượng thật đo bằng sim, xem do-nhay-chuyen.md)

| Chương | Bậc bình | Bậc bộ đẩy | Oxy | Túi | Dải | Bay ra | Về | Làm việc | Dự trù đòn | Tổng chuyến (giây) | Tổng (phút) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 0 | 0 | 330 | 80 | Gần | 17 | 17 | 213 | 33 | 280 | 4,7 |
| 2 | 1 | 1 | 450 | 100 | Giữa | 56 | 24 | 257 | 45 | 382 | 6,4 |
| 3 | 2 | 2 | 600 | 126 | Xa | 89 | 24 | 336 | 60 | 510 | 8,5 |
| 4 | 3 | 3 | 780 | 168 | Xa | 97 | 24 | 463 | 78 | 663 | 11,1 |
| 5 | 4 | 3 | 1000 | 216 | Xa | 111 | 24 | 615 | 100 | 850 | 14,2 |

## Thiếu cấp môi trường (vào dải mới khi bộ đồ chưa nâng)

| Chương | Dải | Làm việc đủ cấp | Làm việc thiếu 1 cấp | Còn lại |
|---|---|---|---|---|
| 2 | Giữa | 257 | 74 | 29% |
| 3 | Xa | 336 | 111 | 33% |

## Hệ số tài nguyên theo số người (C8), theo dải

Số chốt đo bằng sim chuyến của gd-tech và sim kinh tế của gd-economy. Bảng này chỉ in hệ số và trần khe.

| Dải | a | k(2) | k(3) | k(4) |
|---|---|---|---|---|
| Gần | 0,30 | 1,30 | 1,60 | 1,90 |
| Giữa | 0,25 | 1,25 | 1,50 | 1,75 |
| Xa | 0,38 | 1,38 | 1,76 | 2,14 |

## Tỉ lệ kích hoạt khe một người (trần 100% ở 4 người)

| Dải | SP-R một người | SP-R 4 người | SP-D một người | SP-D 4 người |
|---|---|---|---|---|
| Gần | 40% | 76% | 40% | 76% |
| Giữa | 38% | 66% | 40% | 70% |
| Xa | 35% | 75% | 40% | 86% |

## Nhặt tay so với khoan, có tính bay giữa các node

| Node | GTĐ | Giây thao tác | Khoảng cách tới node kế (u) | GTĐ mỗi giây có bay | So với khoan trung bình |
|---|---|---|---|---|---|
| SLV-102 Mạch quặng sắt | 4,4 | 8,0 | 4 | 0,51 | |
| SLV-103 Khối băng trôi | 4,0 | 7,0 | 4 | 0,52 | |
| SLV-104 Hòm kỹ thuật vỡ | 5,0 | 6,0 | 4 | 0,75 | |
| SLV-105 Tấm vỏ lớn | 6,0 | 14,0 | 4 | 0,41 | |
| SLV-101 Mảnh vỡ trôi | 1,1 | 1,6 | 2 | 0,57 | 1,04 lần |
