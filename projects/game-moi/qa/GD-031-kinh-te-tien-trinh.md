# GD-031 kinh-te-tien-trinh (vòng 2)

ĐẠT - 18 lỗi vòng 1 đã sửa hết (kể cả lỗi chặn), còn 7 lỗi nhẹ và 2 việc cần GDM quyết (β 0,40 so với log 55, mục tiêu co-op nhóm 4), không tính vào lỗi gd-economy.
Giờ sửa file khi chấm: file GDD 04:42 (ls -l 04:42:05), `sim/economy/ket-qua.json` 04:42:05, `tham-so.json` 04:42:02, `sim-kinh-te.py` 04:37:30. Vòng chấm: 2.
File bị sửa liên tục trong lúc chấm (04:21, 04:35, 04:36, 04:37, 04:39, 04:42, β đổi 0,45, 0,30, 0,35, 0,40, sàn ngày chương 1 đổi 6 thành 7). Tôi chờ tới khi các file đứng yên hơn 60 giây rồi mới chạy lại. Mọi dòng dưới đây là của bản 04:42. Nếu file đổi tiếp sau 04:45, kết luận này phải chạy lại.

## Tóm tắt lỗi
| Mức | Số lỗi |
|---|---|
| Chặn | 0 |
| Nặng | 0 |
| Nhẹ | 7 (mới) |

## Trạng thái 18 lỗi vòng 1
| # vòng 1 | Mức cũ | Trạng thái | Xác nhận ở đâu |
|---|---|---|---|
| 1 | Chặn | Đã sửa (còn hai điều kiện phụ thuộc, xem lỗi mới 5) | `vat-pham.md` đã đổi cỡ kiện: CGO-101 14,0, 102 13,2, 103 13,2, 104 14,0, 105 13,5, 109 12,5, 111 13,4 (dòng 441-449), luật G2 `vat-pham.md:89` ghi 13,6 / 42,5 / 104 GTĐ cho chương 1 / 2 / 3. Bảng 8.4 (`kinh-te-tien-trinh.md:418-426`): chương 1 cần 10,2 kiện, sim ca cảng gd-tech giao 9,2 kiện, chương 2 10,3 so với 8,0, chương 3 10,1 so với 7,1. Sim chặn thu một ca bằng số kiện giao được nhân GTĐ một kiện (`sim-kinh-te.py`). `tram-va-cang.md` không còn "28 GTĐ", "2,8 GTĐ" (grep 0 kết quả) |
| 2 | Nặng | Đã sửa | `tham-so.json:484-485` `ngay_mo_cang_ch1` 4, `vl_mo_cang_ch1` 98, code `sim-kinh-te.py:301` dùng đúng hai số. Mục 3.4 dòng 230 ghi "ca cảng chương 1 mở từ ngày 4". Phụ lục Tally theo ngày không còn ca cảng ngày 1 đến 3 |
| 3 | Nặng | Đã sửa | Luật 12 (dòng 50): T-VO không chặn chương, thiếu cấp còn 27% thời gian làm việc (`he_so_thieu_vo` 0,27, nguồn `map.md` 3.2). UPG-ENV-1, 2, 3 ở chương 2, 3, 4 vật liệu 48,1 / 90,6 / 126,6 khớp `vat-pham.md`. `nguoi-choi.md:32` T-VO cấp 1 Sau MVP khớp nhãn Sau MVP của economy |
| 4 | Nặng | Đã sửa | Bảng 3.2: UPG-THR-1 chương 1 MVP, UPG-RACK-1 chương 1 MVP giá 0 (quest Kỹ sư kèm Dùi xung), UPG-THR-2 và UPG-RACK-2 chương 2, khớp `vat-pham.md:264-267` và `nguoi-choi.md:180` |
| 5 | Nặng | Đã sửa | UPG-PRY không còn (grep 0 kết quả). Bảng 3.2 dùng đúng ID UPG của `vat-pham.md` (UPG-MIN-2, UPG-HAR-2, UPG-MIN-3, UPG-HAR-3, UPG-NET-2). BPR-103 (1700), BPR-105 (5950), BPR-106 (5950) có ID và giá. Ánh xạ ở dòng 126 (T-OXY là UPG-OXY, T-TUI là UPG-BAG, T-DAY là UPG-THR, T-VO là UPG-ENV, T-DUNGCU là UPG-RACK), khớp `ky-thuat.md:55` (`UpgradeData id UPG-xxx-n`) và `nguoi-choi.md` (chỉ dùng tên trục T-, không tên ID UPG). ID khoang KH07-C2, KH05-C2, KHxx-C3 theo `tram-va-cang.md:93` |
| 6 | Nặng | Đã sửa | Dòng 189 và 191 ghi bước chia 0,9. Tính lại: 2 x (102,1 chia 0,9) x 10 x 1,25 = 2836, làm tròn 50 là 2850, khớp bảng 3.3. Chương 2: 2 x (318,6 chia 0,9) x 10 x 1,25 = 8850, khớp bảng ngân sách |
| 7 | Nặng | Đã sửa | PROCESSING (dòng 652-661): cột Sức mạnh tăng ghi bậc theo bảng 3.2, không còn "Túi 20 lên 30" (grep 0 kết quả). Sửa lúc 04:39:22 trong lúc chấm |
| 8 | Nặng | Đã sửa | Luật 4 (dòng 38): chỉ còn hệ số 1,5 của dòng tùy chọn TA03 (khớp `tram-va-cang.md:230`), bỏ 1,3 / 1,2 / 1,25 |
| 9 | Nặng | Đã sửa | Có bảng tiêu chí đo được (dòng 468-483). Chương 1 là 1,5 đến 2 giờ (không còn 2,5) |
| 10 | Nhẹ | Đã sửa | Dòng 225 trích đúng khung mục 9 (dưới 5%, 15 đến 40%) |
| 11 | Nhẹ | Đã sửa | Đổi tên "Giờ dùng tính ngân sách", thêm khối `gio-lech` (chương 1 +47%, 2 +28%, 3 +20%, 4 -8%, 5 -8%) |
| 12 | Nhẹ | Đã sửa | Dòng 372 nói đúng: Tally không phải cổng ở chương 3 và 4, ví lên vài ngày lương |
| 13 | Nhẹ | Đã sửa | Bảng 3.5 chỉ còn một cột ngưỡng, bỏ đoạn "2,9 giờ", dòng 254 ghi Hạng 3 không phải cổng cuối. `tram-va-cang.md` không còn ghi chú "bảng 3.5 còn cột cũ" |
| 14 | Nhẹ | Đã sửa | Dòng 265 thêm "cộng dòng tùy chọn của TA03" |
| 15 | Nhẹ | Đã sửa | Các số cứng (0,27, lãi nuôi, 98 GTĐ, 190 giây) đã chuyển vào `tham-so.json` (`he_so_thieu_vo`, `nuoi_dai`, `vl_mo_cang_ch1`, `giay_lam_viec_ch1_tham_chieu`). grep code không còn số cứng |
| 16 | Nhẹ | Đã sửa | Tiêu đề bảng coop: "Tới hết chương N (cộng dồn)" |
| 17 | Nhẹ | Đã sửa | Dòng 266 có đoạn "Không có vòng tiền vô hạn" đúng với phân tích của tôi |
| 18 | Nhẹ | Đã sửa | Mục 8.1 đến 8.7 theo thứ tự |

## Lỗi (mới, vòng 2)
| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|---|
| 1 | Nhẹ | 2 | `kinh-te-tien-trinh.md:541, 544, 546` | Balance Sheet không khớp số hiện hành. Hàng β ghi Mới "0,45, cả game trong 12 đến 15 giờ" trong khi β hiện hành là 0,40 (dòng 19, 179, 504). Cùng hàng ghi "17,0 giờ với β 0,60", tôi chạy lại β 0,60 ra 18,9 giờ cả game, chương 1 2,33 giờ. Hai hàng "GTĐ một kiện" (544 và 546) nói cùng việc | Chạy β 0,40 / 0,45 / 0,60, 100 lượt: cả game 13,7 / 14,9 / 18,9 giờ, chương 1 1,84 / 1,84 / 2,33 giờ | Sửa hàng β thành 0,40 và số 18,9, gộp hai hàng kiện | gd-economy |
| 2 | Nhẹ | 2 | `kinh-te-tien-trinh.md:559` | Điểm tự quyết 5 "Cổng chương: Sửa khoang, ENG, chuyến map nhánh, T-VO" trái luật 12 mới (T-VO không chặn chương, dòng 50) | Dòng 50 so với dòng 559 | Bỏ T-VO khỏi dòng 559 | gd-economy |
| 3 | Nhẹ | 5 | `kinh-te-tien-trinh.md:480` | Tiêu chí đo được "nhóm 4 bằng 45 đến 60% tới hết game" trái số đo hiện tại 72% và trái mục 6b. Tiêu chí này chỉ đúng sau khi GDM quyết (việc 2 dưới) | Dòng 349 ghi "Không đạt vì sàn ngày truyện" | Ghi điều kiện "sau quyết định GDM" cạnh tiêu chí | gd-economy |
| 4 | Nhẹ | 3 | `nguoi-choi.md:178, 182` | T-DAY bậc 1 ghi mở "Chương 2 đến 4" trong khi `vat-pham.md:264` UPG-THR-1 chương 1 MVP và economy 3.2 cũng chương 1. `nguoi-choi.md:182` còn `[CHỜ gd-economy]` cho giá, đã có giá ở 3.2 | grep | Sửa cột mở của T-DAY thành "Chương 1 đến 4", xóa nhãn CHỜ | gd-character |
| 5 | Nhẹ | 4 | `kinh-te-tien-trinh.md:418-428` | Hai phần phụ thuộc file khác chưa xác nhận. (a) Kiện chương 4 và 5 (CGO-411 161,0, CGO-511 193,2 GTĐ) cần RES-401 và RES-305 chỉ từ boss, map nhánh và The Wardens, chưa ai đo mỗi ngày đủ cho 10 kiện (economy tự ghi `[GIẢ ĐỊNH]` ở dòng 428 và câu hỏi mở dòng 500). (b) Sim ca cảng giao 8,0 / 7,1 / 8,0 / 8,0 kiện ở chương 2 đến 5 thay vì mục tiêu 10, nên sim đã chặn thu ở mức thấp hơn 10 kiện, không phải sai nhưng lệch mục tiêu của gd-quan | Bảng quy-mo-don cột "Kiện giao được một ca" | gd-world và gd-combat đo RES chương 4, 5. gd-quan, gd-tech xem ca chương 2 đến 5 giao ít hơn 10 kiện. Cả hai thuộc chương Sau MVP | gd-world, gd-combat, gd-quan, gd-tech |
| 6 | Nhẹ | 5 | `tools/validate-gdd.mjs` | Cổng máy báo 17 lỗi toàn dự án (gd-character 9, gd-quan 3, gd-items 1, gd-story 3, gd-ux 1, gd-world), không có dòng nào thuộc `kinh-te-tien-trinh.md` | Chạy `node projects/game-moi/tools/validate-gdd.mjs` | Không thuộc file này, ghi để GDM biết | các vai ghi trong cổng |
| 7 | Nhẹ | 5 | `kinh-te-tien-trinh.md` (khối `coop-he-so`, `source-sink`, biến `moi-nguoi-4`) | File chưa chạy lại sau khi gd-tech sinh lại `tools/ket-qua/sim-chuyen.md` lúc 04:43:06. Chạy lại ra: mỗi người nhóm 4 "66% đến 89%" (file ghi 63% đến 89%), hàng "mỗi người so với một mình" 85% / 73% / 66% ở chương 1 (file 84% / 71% / 63%), Tally thu và dư lệch dưới 0,2%. Cổng `economy_doc.py kiem` hiện báo lệch hai biến | Chạy lại sim với `sim-chuyen.md` 04:43, so `ket-qua.json` | Chạy `--ghi` lần nữa. Chỉ số chính không đổi (chương 1 1,83 giờ, cả game 13,7 giờ, nhóm 4 72%) | gd-economy |

## Việc cần GDM quyết (không tính lỗi gd-economy)
| # | Việc | Số đo | Ghi chú |
|---|---|---|---|
| 1 | β từ 0,60 (log 55) sang 0,40 | β 0,40: chương 1 1,83 giờ, cả game 13,7 giờ, tệ 19,9, tốt 10,4. Giữ β 0,60 thì chương 1 2,33 giờ (vượt 2 giờ, vượt dung sai 15% là 2,30) và cả game 18,9 giờ (vượt 15 giờ và dung sai 17,25) | Nguyên nhân: sau khi chặn thu theo sức chở ca cảng, cảng mở ngày 4, T-VO sang chương 2, thu nhập thật thấp hơn lần chốt log 55. β 0,40 không phá mục tiêu khung mục 9 một người (chương 1 1,5 đến 2, cả game 12 đến 15, thưởng 20% trong 15 đến 25%). β 0,45 cả game 14,9, sát trần 15. Chạy 3 seed ra cùng 1,83 và 13,7 |
| 2 | Mục tiêu co-op nhóm 4 | Hết game 72% thời gian một mình (mục tiêu 45 đến 60%, dung sai tối đa 69%), hết chương 1 cộng dồn 99%, kịch bản tốt hết chương 1 cộng dồn 115% (nhóm 4 chậm hơn chơi một mình, vì ngày co-op dài thêm 5% mỗi người) | Nhóm 4 gần như không nhanh hơn một mình ở chương 1 vì sàn ngày truyện 26 ngày (`cot-truyen.md` mục 5, đúng 7, 5, 8, 3, 3, sim đọc từ `tham-so.json`). Economy đề xuất đổi mục tiêu 65 đến 80% hoặc gd-story hạ sàn (sàn còn 22 ngày thì nhóm 4 bằng 62%). Đây là quyết định về mục tiêu khung mục 9 và nhịp truyện, GDM và gd-story quyết, economy không sửa được bằng số (C8 cấm đổi giá theo số người) |

## Trái lời Lead
Không. K18 đến K20, C3, C4, C8 vẫn được tuân thủ. Giá không đổi theo số người (luật 11, bảng 6b). Hạng cảng và ENG hạng 3, 5, 7, 8 khớp `tram-va-cang.md`. Điểm cảng nhân (N + 1) chia 2 và quy mô đơn 1 + 0,6 (N - 1), 1 + 0,4 (N - 1) khớp. K22 dùng đúng: 2 chuyến mỗi ngày, sim cảng sau chuyến, chuyến map nhánh tính trong 2 chuyến.

## Mâu thuẫn chéo
Chỉ còn hai chỗ nhẹ: `nguoi-choi.md:178, 182` (lỗi mới 4). Các mâu thuẫn vòng 1 với `vat-pham.md`, `tram-va-cang.md`, `nguoi-choi.md:32, 33, 35, 177, 180` về T-VO, T-DAY, T-DUNGCU, UPG-PRY, hệ số tàu, kiện mỗi ca đều đã hết. Giá không xuất hiện ở file khác (K20): grep các số giá 3.2 ngoài file này ra 0 kết quả.

## Chỗ phải đoán (lớp 5)
Hết các chỗ lớn của vòng 1. Còn: `ENG-101` giá 1500 được mua khi Hạng 3 nhưng "ngày nào đạt Hạng 3" chỉ thấy ở Phụ lục một lượt. Bảng 3.2 chưa nêu dòng nào mở vào ngày bao nhiêu, chỉ theo chương. Thưởng trong sim tính theo tỉ lệ giá trị giao, luật trong game là hai hoặc không (dòng 39 đã ghi rõ xấp xỉ).

## Số kiểm bằng chứng
Chạy lại ở thư mục sao riêng. Với bản 04:39 và sim-chuyen 04:35: `--selftest` xanh, `ket-qua.json` trùng từng byte, `economy_doc.py kiem` 0 lỗi, cả 70 biến và mọi khối `<!--khoi-->` khớp. Với bản 04:42 và các sim của gd-tech sinh lại lúc 04:43: chỉ lệch nhỏ (lỗi mới 7), chỉ số chính không đổi. 3 seed (1, 2, 3) cho cùng chương 1 1,83 giờ, cả game 13,7 giờ.

| Số trong GDD | Kết quả |
|---|---|
| Chương 1 1,83 giờ, cả game 13,7, nhóm 4 72%, thưởng 20% (tệ 15%, tốt 24%) | Khớp output. Trong 1,5 đến 2 và 12 đến 15 |
| Ngân sách chương (5700 chương 1, theo β 0,40), giá 3.2 | Khớp sim. Tôi tính lại: chương 1 thu nhập 2 x (102,1 / 0,9) x 12,5 = 2836, làm tròn 2850. Ngân sách 0,40 x 5,0 x 2850 = 5700, khớp bảng. Giá chương 1: ENG-101 2000, T-OXY 1000 |
| Giá kiện 3.1 (CGO-101 140 ...) | Khớp vat-pham GTĐ (14,0 x 10), cỡ kiện chương 1 trung bình 13,4 so với đơn 136 GTĐ cần 13,6 |
| Giá lồng sống theo loài | Khớp GTĐ mẫu sống của vat-pham |
| UPG vật liệu 3.2 | Khớp bảng UPG vat-pham (26,2 / 23,1 / 27,0 / 24,4 / 26,0 / 24,2 / 48,1 / 90,6 / 126,6 ...) |
| Hạng cảng, ENG hạng, điểm cảng | Khớp `tram-va-cang.md` |
| Phút ca cảng 3,18, 3,55, 3,40, 3,95, 3,95 | Khớp `sim-ca-cang.md` 04:37 |
| Sàn ngày truyện 7, 5, 8, 3, 3 | Khớp `cot-truyen.md` mục 5 (bản 04:41) |
| Mỗi người nhóm 4 63% đến 89% | Lệch nhẹ so với `sim-chuyen.md` mới (66% đến 89%), xem lỗi mới 7 |
| Số hiện hành đề xuất | Khớp `ket-qua.json` và `tham-so.json` (β 0,40, giờ 1,25 / 2,75 / 3,5 / 3,0 / 1,5, túi, bình, k(N) Gần 0,30 / Giữa 0,25 / Xa 0,38, điểm cảng, ngưỡng, thưởng 20%) |

## Tiêu chí nghiệm thu rút từ mục 8
Giữ bảng tiêu chí của vòng 1 và bảng của economy ở `kinh-te-tien-trinh.md:468-483` (12 dòng, mọi dòng MVP trừ "Thời lượng cả game" Sau MVP). Thêm một điều kiện: dòng "nhóm 4 bằng 45 đến 60%" chỉ có hiệu lực sau quyết định GDM việc 2.

## Bỏ qua / không kiểm được
- Không chạy `--ghi` vì lệnh ghi đè GDD. Thay bằng chạy sim trong thư mục sao, so JSON trùng byte, so từng khối và biến, chạy `economy_doc.py kiem` trên bản sao.
- Không có build Unity nên không đo được `chuong_xong`.
- Không kiểm từng dòng số chuyến map nhánh chương 2 đến 5 của `map.md` 2.10.
- Số "RES-401 và RES-305 đủ cho 10 kiện mỗi ca ở chương 4, 5" không kiểm được, thuộc gd-world và gd-combat.
- Các file anh em vẫn được sửa (04:41 `cot-truyen.md`). Nếu `vat-pham.md` hay `tram-va-cang.md` đổi sau 04:39 thì phải chạy lại sim.

## Vòng cuối (sau đợt 4 của GDM)

ĐẠT - không còn lỗi chặn hay nặng, còn 6 lỗi nhẹ. Cả 7 lỗi nhẹ vòng 2 đã xử 5, còn 2 (kiện chương 4 và 5, ca cảng giao dưới 10 kiện, đều thuộc vai khác).
Giờ sửa file khi chấm: GDD 08:52:12, `ket-qua.json` 08:52:12, `tham-so.json` 04:56:16, `sim-kinh-te.py` 04:37:30, `sim-chuyen.md` 04:49:30, `sim-ca-cang.md` 04:51:27. Trong lúc chấm `vat-pham.md` (08:53:39), `tram-va-cang.md` (08:53:31), `cot-truyen.md` (08:53:46) vẫn được sửa. Tôi chờ các file đứng yên 48 giây rồi chạy lại. Vòng chấm: 3.

### Chạy lại
Chạy ở thư mục sao riêng: `--selftest` xanh, `economy_doc.py kiem` ra 1 lỗi, cả 70 biến `<!--v:...-->` khớp, 16 trên 17 khối khớp. Khối lệch duy nhất là `gia-kien`: cột Nhãn của CGO-111, CGO-112 (và các kiện tinh khác) trong GDD ghi MVP, sim ra Sau MVP, vì gd-items sửa `vat-pham.md` lúc 08:53:39, sau lần chạy cuối của economy (08:52:12). Không phải lỗi của economy, chạy `--ghi` một lần nữa là hết. Mọi số khác (giờ, Tally, ngưỡng, giá) trùng từng ô.

| Số GDD ghi | Kết quả so với `ket-qua.json` |
|---|---|
| Nhóm 4 hết game 73% (mục tiêu mới 60 đến 75%) | Khớp (biến `coop4-game`). Đạt |
| Chương 1 một người 1,82 giờ | Khớp, trong 1,5 đến 2 |
| Cả game 13,4 giờ, 43 ngày | Khớp, trong 12 đến 15 |
| Thưởng 20% (tệ 15%, tốt 24%) | Khớp, trong 15 đến 25% |
| β 0,40 | Khớp `tham-so.json`, GDM nhận ở log 70 (dòng 179, 511) |
| Sống so với hạ 1,28 đến 1,90 | Khớp (cỡ S) |
| Mỗi người nhóm 4 66% đến 89% | Khớp `sim-chuyen.md` mới |

### Lỗi nhẹ vòng 2, trạng thái
| # | Lỗi | Trạng thái |
|---|---|---|
| 1 | Balance Sheet hàng β (0,45, 17,0 giờ) | Đã sửa. Hàng β ghi 0,60 sang 0,40, giữ 0,60 thì chương 1 2,33 giờ, cả game 18,9 giờ (khớp lần chạy của tôi) |
| 1 | Hai hàng "GTĐ một kiện" trùng | Đã sửa, còn một hàng (dòng 544) |
| 2 | Điểm tự quyết 5 vẫn ghi T-VO là cổng chương | Đã sửa (dòng 559 ghi T-VO không chặn chương) |
| 2 | "26 ngày, 72%" ở câu hỏi mở | Đã sửa, hai câu hỏi đã chốt (log 69, 70) đã bỏ khỏi mục 10, còn ba câu hỏi |
| 3 | Tiêu chí "nhóm 4 45 đến 60%" | Đã sửa, dòng 480 ghi 60 đến 75% (log 69) |
| 4 | `nguoi-choi.md:178, 182` | Còn. T-DAY ghi "Chương 2 đến 4" trong khi UPG-THR-1 chương 1, và còn 1 dấu `[CHỜ gd-economy]` (giá đã có ở 3.2). Người sửa: gd-character |
| 5a | Kiện chương 4 và 5 chưa ai đo nguồn RES-401, RES-305 | Còn, economy ghi câu hỏi mở dòng 501 và `[GIẢ ĐỊNH]`. Người sửa: gd-world, gd-combat (Sau MVP) |
| 5b | Sim ca cảng giao dưới 10 kiện ở chương 2 đến 5 | Còn nhưng nhẹ hơn: giao 9,0 / 8,6 / 7,5 / 8,0 / 8,0 kiện (bảng 8.4), sim đã chặn thu theo số này. Người sửa: gd-quan, gd-tech (Sau MVP trừ chương 1, chương 1 giao 9,0 so với 10,2 cần) |
| 7 | File chưa chạy lại sau sim chuyến mới | Đã sửa (`moi-nguoi-4` 66% khớp) |

### Kiểm theo khung lần 5
| Mục | Kết quả |
|---|---|
| K25, một nghĩa "qua chương" | Khớp. Luật 12 (dòng 50) và tiêu chí chương 1 (dòng 478) ghi chương đóng khi mốc đóng chương của truyện xong và giai đoạn động cơ đã lắp, kinh tế không có cổng riêng. Khớp `cot-truyen.md` (C1.9, C2.8, C3.8, C4.7 đều có điều kiện giai đoạn động cơ, dòng 253, 297, 344, 402) và `tram-va-cang.md:103`. Còn một chỗ chưa gọn (lỗi nhẹ cuối cùng 3) |
| K26 CON-101 | Khớp ở `vat-pham.md:433`: hồi 40 Oxy, tối đa 2 bình, tổng 80 là 24,2% bình bậc 0 (330), dưới trần 25% của K26. Economy không dùng CON-101 trong giá nên không bị ảnh hưởng |
| K9 | Khung ghi cỡ S và M, 1,2 đến 2 lần. Economy chứng minh cỡ S (1,28 đến 1,90). Cỡ M có số ở `vat-pham.md` SPECIES (hệ số ròng 1,50 cho DL-G05, G03, M02, M03, X02) nhưng bảng 8.4 của economy chỉ có cỡ S, xem lỗi nhẹ cuối cùng 2. Cỡ L (sinh thiết, hệ số 0,45) đứng ngoài K9 theo khung, economy không nhắc nhưng không trái |
| K22, K23, C10 | Không có chỗ trái. Sim mỗi ngày đúng 2 chuyến, chuyến map nhánh tính trong 2 chuyến, cảng sau chuyến. Tally không giảm khi ngạt, bị kéo về, thoát giữa chuyến (dòng 483). Economy không nói gì về lưu, rời phiên nên không mâu thuẫn |
| grep "Sundering" | 0 kết quả. grep "chờ GDM" và "cần GDM": 0 kết quả (các "chờ gd-qa", "chờ gd-items" còn lại ở dòng 3 và 517, xem lỗi nhẹ cuối cùng 1) |

### Lỗi nhẹ còn lại (cuối cùng)
| # | Mức | File:dòng | Vấn đề | Người sửa |
|---|---|---|---|---|
| 1 | Nhẹ | `kinh-te-tien-trinh.md:517` | "Cỡ kiện chờ gd-items" đã lỗi thời, gd-items đã đổi cỡ kiện | gd-economy |
| 2 | Nhẹ | `kinh-te-tien-trinh.md:353, 404-411` | Dòng 353 ghi "cỡ S và M ... Đạt" nhưng bảng 8.4 chỉ có cỡ S, bằng chứng cỡ M nằm ở `vat-pham.md` | gd-economy (thêm hàng cỡ M) |
| 3 | Nhẹ | `kinh-te-tien-trinh.md:50` | Luật 12 gọi cả "đã lắp ENG-10c" là gợi ý, trong khi K25 coi giai đoạn động cơ đã lắp là điều kiện bắt buộc để mốc đóng chương kích hoạt. Câu cần tách: động cơ lắp là điều kiện của truyện, sửa khoang và chuyến map nhánh mới là gợi ý | gd-economy |
| 4 | Nhẹ | khối `gia-kien` | Cột Nhãn lệch sim do `vat-pham.md` đổi sau 08:52. Chạy `--ghi` lại | gd-economy |
| 5 | Nhẹ | `nguoi-choi.md:178, 182` | Xem lỗi vòng 2 số 4 | gd-character |
| 6 | Nhẹ | kiện chương 4, 5 và ca cảng dưới 10 kiện | Xem lỗi vòng 2 số 5 | gd-world, gd-combat, gd-quan, gd-tech |

Còn lại cổng máy `validate-gdd.mjs` báo lỗi ở các file khác (nguoi-choi.md dòng 291, 310 trái C10, `[CHỜ gd-tech]` ở nhiều file), không có dòng nào thuộc file economy.

### Bỏ qua
Không chạy `--ghi` (ghi đè GDD). Không có build nên không đo `chuong_xong`. Không kiểm số RES chương 4 và 5. Nếu `vat-pham.md`, `tram-va-cang.md` hay `cot-truyen.md` đổi tiếp sau 08:54, số kiểm phải chạy lại.
