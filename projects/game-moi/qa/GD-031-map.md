# GD-031 map.md (vòng 2)
ĐẠT - 11 lỗi nặng vòng 1 đều đã sửa và tái hiện được bằng máy. Còn 5 lỗi nhẹ và 3 mục tiêu khung lệch chờ GDM quyết, không chặn giao dev.
Giờ sửa file khi chấm: map.md 04:42 (786 dòng, lần sửa cuối tôi thấy), sim/bo_cuc.py 04:35, sim/bo-cuc.md 04:38, sim/dong_bo_sim.py 04:38, tools/ket-qua/sim-chuyen.md 04:43 (gd-tech chạy lại với a Gần 0,30, bản 04:35 chạy với 0,27), sim/ngan-sach-oxy.md 04:38. Vòng chấm: 2.

## Tóm tắt lỗi (sau vòng 2)
| Mức | Số lỗi |
|---|---|
| Chặn | 0 |
| Nặng | 0 |
| Nhẹ | 5 (2 còn từ vòng 1, 3 mới) |
Vòng 1: 0 chặn, 11 nặng, 13 nhẹ. Trong 24 lỗi cũ có 22 đã sửa, 2 còn một phần. Một lỗi mới (N4) đã được sửa trong lúc chấm.

## Kết quả tái hiện (việc 3 và 4)
| Việc | Kết quả |
|---|---|
| Chạy lại `sim/bo_cuc.py` 3 seed (1, 2, 3) bản sao trong thư mục tạm, 1000 chuyến liền nhau mỗi seed | Rơi bố cục dự phòng 0,00% cả 3 seed. Trùng mảnh cùng ô lớn nhất 5 trên 10 (trung bình 1,4 đến 1,5). Beacon cùng ô chuyến trước 0,0%. Hợp lệ ngay lần đầu 50,0 đến 53,8%. Khớp `sim/bo-cuc.md` |
| Tiêu chí 619 (100% hợp lệ, dưới 1% dự phòng) và 620 (trùng không vượt 50%) theo nghĩa "cùng mảnh cùng ô" | Cùng đạt. Nghĩa này nay nằm trong map.md 2.1.7, 3.4 và W21. Điều kiện: cờ "Không" là đặt mọi cột, "Có" chỉ cột 3 và 4 (map.md 2.1.8), và bộ sinh đạt trùng tối đa bằng cách loại bố cục (kiem, 20 lần thử). Theo nghĩa tập hợp (cùng mảnh ở ô bất kỳ) vẫn không đạt với kho 16 mảnh, nhưng GDD đã bỏ nghĩa đó |
| Sim chuyến với a Gần 0,30 Giữa 0,25 Xa 0,38 (QA chạy `node tools/sim-chuyen.mjs --ra` trên bản sao, seed 1, 2000 chuyến mỗi ô, a đọc từ map.md hiện hành) | Mỗi người nhóm 4 so với một mình: tệ 75, 90, 104, 91, 70%. Trung bình 66, 80, 89, 83, 69%. Tốt 61, 79, 89, 82, 68%. Tham 71, 115, 135, 109, 73%. Thấp nhất 61% (chương 1 tốt, và chương 1 túi không giới hạn tốt), đạt mục tiêu 60% nhưng chỉ dư 1 điểm. Chương 5 với a Xa 0,38: 68 đến 73%, a nhỏ nhất 0,31 nên dư 0,07. Chương 1 chạy 4,4 phút và chương 5 chạy 10,4 phút, khớp bảng 3.9. Sim chính thức gd-tech chạy lại lúc 04:43 với a 0,30 cho đúng các số này (tốt 61, 79, 89, 82, 68%) |
| Thang túi 80, 100, 126, 168, 216 và bình 330, 450, 600, 780, 1000, bảng 3.2 | Bảng 3.2 khớp từng ô `sim/ngan-sach-oxy.md` 04:38 (diff rỗng). a và k(N) khớp (Gần 0,30, k(4) 1,90, kích hoạt 4 người 76%) |
| `node tools/validate-gdd.mjs` | Lúc 04:40 báo 2 lỗi liên quan map (cot-truyen.md:408, 409, khe M1 và M2 của N7). Lúc 04:42 map.md đã ghi M1, M2 (STY-411, STY-412) và không còn lỗi của gd-world. Các lỗi còn lại thuộc vai khác |

## Trạng thái 24 lỗi vòng 1
| # | Mức cũ | Trạng thái | Chỗ xác nhận (map.md vòng 2) |
|---|---|---|---|
| 1 | Nặng | Đã sửa, còn N1 | Bảng 3.9 chép bằng script `<!--SIM-->` (dòng 441 đến 470): 4,4 và 10,4 phút, khớp sim-chuyen.md 04:35. a Gần 0,30, Xa 0,38 đạt 60% theo sim QA chạy lại ở trên. Bảng cũ trong 3.9 vẫn còn, xem N2 |
| 2 | Nặng | Đã sửa | 2.1.7, 3.4 hàng "Trùng mảnh tối đa", W21: cùng mảnh cùng ô |
| 3 | Nặng | Đã sửa | 2.1.5 (Bến ngoài 1111), 2.1.8 (cờ nửa ngoài), 6.4 dòng 577 và 578 (Bến 1111, Cinder 1101) và ghi chú cột "Nửa ngoài" |
| 4 | Nặng | Đã sửa | 2.5.1 và 2.9.10: beacon không cùng ô chuyến trước. Sim đo 0,0% |
| 5 | Nặng | Đã sửa | 2.9.4 (hàng ra dải trước bằng hàng vào dải sau, khe Rạn ở hàng đó), 2.2.2, 2.9.10 kiểm nối liền giữa các dải. Phần giữa các dải chưa chạy được vì chỉ có dải Gần (Sau MVP) |
| 6 | Nặng | Đã sửa | 2.6.6 ngoại lệ của 2.6.2 |
| 7 | Nặng | Đã sửa | 2.7.5 nêu Amara (C2.3) và Yusuf (C3.2) |
| 8 | Nặng | Đã sửa | 2.10 N1: vách C6 sang C7 kín tới khi BS-1 kết thúc, Driftlife do boss sinh không rời C6. Khớp combat-driftlife.md:171 |
| 9 | Nặng | Đã sửa, còn N5 | 3.5 dòng 363 đến 365: H01 bán kính 1 u, đường trôi hết cạnh mảnh. H02 tia dài 4 đến 8 u rộng 0,5 u, mỗi lần phóng trúng một lần mỗi người. H03 hình chữ nhật 12 x 3 u, hướng ở marker SP-H (8 hướng). Còn mâu thuẫn "cạnh Cáp chập" so với 4 u |
| 10 | Nặng | Đã sửa | 2.4.5: khe hạng hiếm là khe chỉ cho hòm SLV-104, SLV-203, SLV-303 |
| 11 | Nặng | Đã sửa | Dòng 523 và 524: thoát một mình mất chuyến, về lần lưu gần nhất. Host thoát thì phiên kết thúc. Hết `[CHỜ`: grep chỉ còn dòng lịch sử |
| 12 | Nhẹ | Đã sửa | R0 dòng 19: Rạn là dải va chạm 8 u ở đầu cột 1, không phải ô |
| 13 | Nhẹ | Đã sửa | 3.2 dòng 268 ghi bảng trần không tính hao tải 1,15 và kéo 1,25 |
| 14 | Nhẹ | Đã sửa | W5 dòng 737: 29 đến 33% |
| 15 | Nhẹ | Đã sửa | 3.9 và mục 8: "cẩn thận" là trung bình và tốt, có 4 kịch bản |
| 16 | Nhẹ | Đã sửa | Dòng 388: MVP 1 trên 4 (Arc Eel) |
| 17 | Nhẹ | Đã sửa | 2.4.7 và ghi chú 6.4 dòng 613: neo SP-D theo loại mảnh |
| 18 | Nhẹ | Đã sửa | Câu "Sau lần 2 cửa mở thành đường tắt" đã bỏ |
| 19 | Nhẹ | Còn một phần | Beacon phía lối vào đã có ở N3, N6, N7, BS-5 (dòng 220, 223, 224, 236). Hàng BS-2, BS-3, BS-4 (dòng 233 đến 235) chưa ghi. Xem N6 |
| 20 | Nhẹ | Đã sửa | Dòng co-op: máu máy phát x 1,6, 2,2, 2,8 theo combat |
| 21 | Nhẹ | Đã sửa | Số cũ 0,22 đến 0,27 và 1,89 giờ không còn |
| 22 | Nhẹ | Đã sửa | R0, H01, H02, H03 có tên Anh [TẠM] |
| 23 | Nhẹ | Đã sửa | 2.8.5 ghi K22, ngân sách ngày do GDM giữ |
| 24 | Nhẹ | Đã sửa | Bố cục dự phòng ở 6.4, dung sai kho ±5 điểm (dòng 360). Có lỗi định dạng, xem N3 |

## Lỗi
| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|---|
| N1 | Nhẹ | 3 | map.md:445, 459 (khối SIM của 3.9) | Khối số chép bằng script còn là bản sim 21:35 (a Gần 0,27) nên ghi "tốt chương 1 59%", dưới mục tiêu 60%. Sim gd-tech 04:43 (a 0,30) cho 61% | map.md:445 ghi "2026-11-19T21:35:07". sim-chuyen.md:3 là 21:42:44, dòng 15 ghi Gần 0,30 | Chạy lại `python sim/dong_bo_sim.py` | gd-world |
| N2 | Nhẹ | 2 | map.md:3.9 (bảng "Thang túi và bình đề xuất") | Bảng số cũ của bản chạy thử (4,2 phút, 64%, 10,7 phút) nằm sát bảng số hiện hành (4,4 phút, 83%, 10,4 phút), dễ đọc nhầm. Đoạn "Đổi giây khai thác" cũng ghi "so với hiện hành" mà là số cũ | Cùng mục 3.9 | Gỡ bảng cũ hoặc đánh dấu "lịch sử, không dùng" | gd-world |
| N3 | Nhẹ | 1 | map.md:360 (3.4) | Hàng "Dung sai tỉ lệ loại mảnh" có 7 ô trong bảng 6 cột | Dòng 360 | Bỏ ô thừa | gd-world |
| N5 | Nhẹ | 2 | map.md:324, 340 và 530, 566 | Còn mâu thuẫn "SLV-104 cạnh Cáp chập" và luật khe SP-R cách SP-H ít nhất 4 u, "cạnh" chưa có số | Vòng 1 lỗi 9d | Ghi "cạnh" là 4 đến 6 u hoặc ngoại lệ cho SLV-104 | gd-world |
| N6 | Nhẹ | 2 | map.md:233 đến 235 (BS-2 đến BS-4 trong bảng phòng boss) | Hàng BS-2, BS-3, BS-4 chưa ghi beacon phía lối vào theo 2.5.7 (BS-5 đã ghi) | 2.5.7 | Thêm vào ba hàng | gd-world |

## Mục tiêu khung còn lệch, chờ GDM (tác giả cũng nêu, không tính lỗi của map.md)
| Mục tiêu khung mục 9 | Đo (sim gd-tech 04:43, a 0,30) | Ghi chú |
|---|---|---|
| Túi đầy ở khoảng 60% chuyến, chương 1 | 83% (sim-chuyen.md dòng 22, map 3.9) | Nên GDM chọn: nới mục tiêu hoặc tăng túi bậc 0 (80 Khối) |
| Người chơi tham bị kéo về 15 đến 40% | 10%, 36%, 41%, 29%, 13% (chương 1 và 5 dưới sàn, chương 3 vượt 1 điểm) | map.md 3.9 ghi chờ playtest, núm là phần mảnh có hazard ở dải Xa |
| Nhóm 4 hết chương 2 bằng 45 đến 60% thời gian một mình | 33% theo kinh-te-tien-trinh.md (map.md 3.8 dẫn sang) | gd-economy đề xuất đo ở hết chương 1 và hết game |
| Nhóm 4 nhặt từ 60% | 61% thấp nhất, dư 1 điểm | Không có biên an toàn nếu vai khác đổi số |

## Trái lời Lead (liệt kê, hoặc "Không")
Không. L1, L3, L4, L5, L7, L8, L9, L10, L11, L14 đã kiểm lại. Khung K22 (2.8.5), K23 và C10 (dòng 523, 524) khớp. K24 không áp. Cổng trạm và thang túi bình khớp nguoi-choi.md.

## Mâu thuẫn chéo (file khác nói gì, dòng nào)
| map.md | File khác | Chi tiết | Người sửa |
|---|---|---|---|
| (map đúng, file kia cũ) | ux-ui.md:940 (thoát giữa chuyến Về an toàn giữ nguyên túi, trái C10), ky-thuat.md:102, nguoi-choi.md:469, vat-pham.md:172 và 669, kinh-te-tien-trinh.md:511 và 623 | Vòng 1 đã báo, chưa kiểm lại từng file. Validator còn báo ux-ui.md:940 | gd-ux, gd-tech, gd-character, gd-items, gd-economy |
Khớp lại: combat-driftlife.md:171 (luật 36) với map.md N1, bảng mốc mở lối vào map nhánh (map.md 2.10) với cot-truyen.md mục 2.5.

## Chỗ phải đoán (lớp 5)
Không còn chỗ đoán chặn dựng. Còn: "cạnh" Cáp chập (N5).

## Số kiểm bằng chứng (số nào khớp file sim, số nào không)
| Số | Kết quả |
|---|---|
| Bảng 3.2 so với ngan-sach-oxy.md | Khớp 5 hàng |
| Bảng 3.9 so với sim-chuyen.md | Khớp từng số của bản 21:35 (a 0,27). Bản 21:42 (a 0,30) khác ở dòng nhóm 4 (N1) |
| a và k(N), tỉ lệ kích hoạt | Khớp ngan-sach-oxy.md (76%, 66%, 75%, 76%, 70%, 86%) |
| bo-cuc.md so với chạy lại | Khớp 3 seed |
| Số hình học hazard mới (bán kính 1 u, tia 4 đến 8 u, luồng 12 x 3 u) | Số thiết kế, chưa có sim, đã đủ để viết test |

## Tiêu chí nghiệm thu rút từ mục 8 (bảng Feature, Category, Acceptance Criteria đo được, MVP hay Sau MVP)
| Feature | Category | Acceptance Criteria | MVP / Sau MVP |
|---|---|---|---|
| Sinh bố cục dải Gần | Kỹ thuật | 1000 chuyến liền nhau: 100% hợp lệ, dưới 1% dự phòng. Tham chiếu đo 0,00% ở 3 seed | MVP |
| Đa dạng bố cục | Kỹ thuật | Hai chuyến liền nhau: không quá 5 trên 10 ô ghép cùng mảnh cùng ô, không beacon cùng ô. Tham chiếu đo lớn nhất 5, beacon trùng 0% | MVP |
| Thời lượng chuyến chương 1 | Cân bằng | p50 trong 4 đến 6 phút. Đo 4,4 | MVP |
| Thời lượng chuyến chương 5 | Cân bằng | p50 trong 10 đến 12 phút. Đo 10,4 | Sau MVP |
| Bị kéo về | Cân bằng | Cẩn thận dưới 5%, tham 15 đến 40%. Cẩn thận đạt, tham chưa (xem bảng mục tiêu lệch) | MVP |
| Báo trước hazard | Cảm giác | Mỗi hazard gây hại có báo trước ít nhất 1 giây tính từ lúc thấy, H01 có chỉ báo mép màn hình | MVP cho H01 đến H03 |
| Chơi một mình Station Cinder | Luồng | Đi hết lần 1 và lần 2, vớt Ingrid và Linh, hạ hoặc xua BS-1. Thêm: rút giữa trận qua B3, không chạy ngang boss tới C7 | MVP |
| Trạng thái sau lần 2 | Dữ liệu | D1 mở, boss không còn, vách C6 sang C7 mở, beacon B2 bật | MVP |
| Lối ra map nhánh | Luồng | Mỗi map nhánh có ít nhất một lối ra, kiểm tay trên greybox | MVP cho Cinder |
| Nhóm 4 | Cân bằng | Mỗi người nhặt từ 60% so với một mình ở mọi chương và kịch bản. Đo 61% thấp nhất (a 0,30) | MVP |
| Hazard Oxy | Cân bằng | H01 trừ 8, H02 trừ 12 một lần mỗi tia, H03 không trừ, qua event "trúng hazard" | MVP |
| Thoát giữa chuyến | Dữ liệu | Một mình: mất chuyến, về lần lưu. Host thoát: phiên dừng | MVP |

## Bỏ qua / không kiểm được
- Bố cục giữa các dải (2.9.4) chưa chạy được: `bo_cuc.py` chỉ có dải Gần.
- `bo_cuc.py` đọc cờ "Không" là đặt mọi cột và kiểm bố cục theo luật 2.9.10, tức là kiểm của chính tác giả. QA chỉ chạy lại và xem lại hàm kiem, không viết lại độc lập. Bố cục mẫu trong bo-cuc.md đọc bằng mắt thấy hợp lý.
- Sim chuyến QA chạy lại là bản sao trong thư mục tạm (`scratchpad\p`), không ghi đè file repo.
- Không kiểm lại từng file vai khác ở bảng chéo ngoài validator. Không chơi build.

## Vòng cuối (sau đợt 4)
ĐẠT - 0 chặn, 0 nặng, 3 nhẹ. Seed theo thế giới, ngày, thứ tự chuyến tái hiện được và không phá "trùng lớn nhất 5 trên 10" hay "beacon trùng ô 0%". Nhóm 4 nhặt từ 60% đạt với sim mới nhất.
Giờ sửa file khi chấm: map.md 08:52, sim-chuyen.md 08:54 (chạy lại 01:54Z, hash tham số c6a31c16, đứng yên sau 30 giây chờ), khung 00-khung-game.md 04:54, sim/bo-cuc.md 04:56, sim/bo_cuc.py 04:35 (không đổi). Vòng chấm: 3.

### Kết quả kiểm
| Việc | Kết quả |
|---|---|
| 5 lỗi nhẹ vòng 2 | N1 (khối SIM cũ) đã sửa: khối `<!--SIM-->` dòng 450 đến 478 khớp số sim hiện tại, a Gần 0,30. N2 (bảng cũ 3.9) đã sửa: thay bằng con trỏ tới `sim/do-nhay-chuyen.md`. N3 (hàng dung sai 3.4) đã sửa: 6 ô đủ. N5 ("cạnh" Cáp chập) đã sửa: dòng 383 định nghĩa cách vùng gây hại 2 đến 4 u, khe SP-R cách tối thiểu 2 u. N6 (beacon phía lối vào ở BS-2 đến BS-4) CÒN: dòng 238 đến 240 chưa ghi, chỉ BS-5 (dòng 241) và hàng N3, N6, N7 đã ghi. N4 đã sửa từ vòng 2 |
| Seed theo thế giới (QA tự viết `t.py`, gọi `sinh()` của `bo_cuc.py` với `random.Random(sha256(thế giới, ngày, thứ tự chuyến))`, 60 thế giới x 50 ngày x 2 chuyến = 6000 chuyến liên tiếp có chuỗi chuyến trước) | Chạy 2 lần ra đúng cùng bố cục từng chuyến (tất định, nạp lại không đổi). Rơi dự phòng 0,00%. Trùng cùng mảnh cùng ô lớn nhất 5. Beacon trùng ô 0,00%. Chạy `bo_cuc.py` gốc seed 1, 1000 chuyến: 0,00%, 5, 0,0%, khớp bo-cuc.md. Lưu ý: `bo_cuc.py` chưa tự nó tạo seed từ thế giới, nên việc này do tôi dựng thay. Luật 2.1.6 và 6.1 (bố cục lưu theo ngày và chuyến, K23) đủ để dev làm |
| Khối SIM 3.9 so với sim-chuyen.md mới nhất | Khớp từng số: chương 1 4,4 phút (về vì túi 83%), chương 5 10,4 phút. Nhóm 4 so với một mình: tệ 75, 90, 104, 91, 70%, trung bình 66, 80, 89, 83, 69%, tốt 61, 79, 89, 82, 68%, tham 71, 115, 135, 109, 73%. Thấp nhất 61% (chương 1 tốt), đạt mục tiêu 60% với a Gần 0,30, a Xa 0,38 dư 0,07 so với a nhỏ nhất. Dòng thời gian trong khối còn ghi 21:49 trong khi sim là 01:54Z (số không đổi, xem L1) |
| grep | "Sundering": 0 chỗ. "chờ GDM": 0. `[CHỜ`: chỉ còn dòng lịch sử 755. Địa danh cũ tiếng Việt (Bến ngoài, Khoang hàng sập, Khu ngủ đông chính, Lõi máy, Buồng lái, kho lưu trữ, Vành ngoài, Lõi dữ liệu...) chỉ còn trong bảng A01 đến A05 làm "tên làm việc cũ". Tên phòng Cinder (C1 đến C8) giữ tiếng Việt theo dòng 5 (log 74) |
| Khung K22 đến K27, C10, K9, mục 9 | K22 ở 2.8.5. K23: map 2.1.6, 2.9 bước 1, 6.1 và dòng 496, 497 khớp (ba điểm lưu, thoát giữa chuyến mất chuyến, bố cục nạp lại không đổi). C10 khớp dòng 497. K24 không áp. K26, K27 là việc của nguoi-choi.md, map.md không chạm. K25 không mâu thuẫn (2.2.1 dùng mốc đóng chương). Trọng số độ khó 35, 30, 20, 15% (log 79) ở dòng 399 và 678. Co-op 60 đến 75% (log 69) ở dòng 414. Thang túi và bình khớp ngan-sach-oxy.md (bảng 3.2 diff rỗng). Validator: 0 lỗi gd-world (8 lỗi của gd-character) |

### Lỗi còn lại
| # | Mức | File:dòng | Vấn đề | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|
| L1 | Nhẹ | map.md:450, 464 | Dòng thời gian trong khối SIM là 21:49, sim mới là 01:54Z. Số khớp, chỉ lệch nhãn | Chạy lại `python sim/dong_bo_sim.py` | gd-world |
| L2 | Nhẹ | map.md:238 đến 240 | Hàng BS-2, BS-3, BS-4 chưa ghi beacon phía lối vào theo 2.5.7 (lỗi N6 vòng 2, còn) | Thêm một câu vào ba hàng | gd-world |
| L3 | Nhẹ | map.md:3, 6 | Đầu file còn ghi "số là khởi điểm ước, chưa sim" và "Sim là việc của gd-tech ở đợt 2" trong khi đã có sim chuyến và bộ kiểm bố cục | Sửa hai dòng trạng thái | gd-world |

### Còn mở chờ GDM (không tính lỗi của map.md)
Về vì túi chương 1 là 83% so với khung 60% (mục 9). Người tham chương 1 bị kéo về 10% và chương 5 13%, dưới sàn 15% (chương 3 là 41%, vượt trần 1 điểm). Nhóm 4 nhặt dư chỉ 1 điểm ở chương 1. Nên đọc thêm: nạp lại cùng ngày ra cùng bố cục nên người chơi có thể thoát để dò trước vị trí hòm và beacon rồi chơi lại, cái giá là mất cả chuyến (không phải lỗi, chỉ cần GDM biết).
