# GD-031 nguoi-choi
TRẢ LẠI - hết chặn, nhưng còn 4 lỗi nặng: ghim món gamepad `ux-ui.md` vẫn Y, vạch đủ về hai giá trị dự phòng (3 hoặc 8), số chuyến trong GDD cũ so với sim 04:49, Giữ chỗ chưa có trần 1 lần mỗi chuyến.
Giờ sửa file khi chấm vòng 2: 08:57:30 (`nguoi-choi.md`, 529 dòng), `ho-so-nhan-vat.md` 08:55:08, đứng yên sau 20 giây. Khung `00-khung-game.md` 04:54 (lần 5). Vòng chấm: 2.

## Vòng cuối (vòng 2)
Máy (ghi sang thư mục tạm): `validate-gdd.mjs` 0 lỗi (10 file, 379 ID). `selftest.mjs` 25 phép kiểm ĐẠT (có ca K26 mang 10 bình vẫn chặn). `sim-chuyen.mjs --seed 1 --lan 2000` giống hệt `tools/ket-qua/sim-chuyen.md` (hash tham số c6a31c16, sinh 04:49, đã có mục 3c Bình Oxy nhỏ).

Tóm tắt vòng 2: 23 hạng mục của phiếu vòng 1 (2 chặn, 9 nặng, 12 nhẹ): 20 Đã sửa, 3 Còn (lỗi 7 nặng, lỗi 14 nhẹ, lỗi 20 nhẹ một phần). Lỗi mới do chỗ sửa: 3 nặng (M1, M2, M3), 5 nhẹ (M5, M6, M8, M9, lưu ý cân bằng). M4 và M7 là lỗi vòng 1 chưa sạch.

| Mức còn lại | Số lỗi |
|---|---|
| Chặn | 0 |
| Nặng | 4 (V7, M1, M2, M3) |
| Nhẹ | 8 (M4 đến M9, lưu ý cân bằng, `tram-va-cang.md:333`) |

### Trạng thái từng lỗi vòng 1
| # vòng 1 | Mức | Trạng thái | Chỗ xác nhận |
|---|---|---|---|
| 1 | Chặn | Đã sửa | `grep "giữ nguyên túi"` trong `gdd/he-thong`: `nguoi-choi.md` chỉ còn dòng 103 (tự thoát chạm cửa khí lúc Ngạt, đúng K4), dòng 498 và 529 (ghi cột "Đã bỏ" và lịch sử). Dòng 122 Giữ chỗ hết 15 giây thì Bị kéo về giữ 1 món, 123 và 228 khách rời thì tính như Bị kéo về, một mình thoát thì mất chuyến, host thoát thì về điểm lưu, 229, 329 đến 331, 464 và 465. `ky-thuat.md:115, 117` theo C10. `vat-pham.md:520` theo C10. `map.md:131` là Recall xong, đúng K4 |
| 2 | Chặn | Đã sửa luật, còn vài chữ cũ (M6) | 2.2 điểm 7 (dòng 84): K26 trần 25% dung lượng, tối đa 2 bình mỗi chuyến, hủy khi trúng đòn, thả phím hoặc Lướt, cấm khi Ngạt, cấm khi đầy, không hồi vượt, phần dư bỏ. Khớp `vat-pham.md:71` (T8: 2 bình, 80 Oxy là 24,2% bình bậc 0 vì 80 / 330 = 0,2424) và `vat-pham.md:433`. Sim đã mô hình CON-101: `chuyen.json` khối binhOxy, `sim-chuyen.md` mục 3c, selftest K26. Vòng Oxy giờ có trần cứng 80 Oxy mỗi chuyến |
| 3 | Nặng | Đã sửa | K22 ở dòng 22 (Hiện hành), 112 (bảng trạng thái), 220 (2.8 điểm 9), 309 (biên) |
| 4 | Nặng | Đã sửa | K27: dòng 99, 106, 166 (Trao đồ hủy khi một bên vào Ngạt), 310, 486 |
| 5 | Nặng | Đã sửa | Dòng 61, 114, 243, 479 đều 0,2 giây, khớp `combat-driftlife.md:114, 224` |
| 6 | Nặng | Đã sửa | Thao tác "Dùng vật tiêu hao" ở dòng 41, 167 (G giữ 1,5 giây), 201 (G, D-pad xuống), biên 306 đến 308. `ux-ui.md` đã có G và D-pad xuống |
| 7 | Nặng | Còn | `nguoi-choi.md:200` Ghim món gamepad R3. `ux-ui.md:371` vẫn "Ghim món (trong túi) R, Y". Hai file lệch, phía UX chưa sửa (chính `nguoi-choi.md:516` cũng ghi lệch này). Người sửa gd-ux |
| 8 | Nặng | Đã sửa | 2.7 có Q Kết nhanh (B), M Bản đồ chuyến (LB), G Dùng vật tiêu hao. J Sổ tay (Y) và Tab Xem kho nhanh trong trạm có ở dòng 208, bảng đầy đủ ở `ux-ui.md` mục 2.9 (có thật, dòng 351). Quy tắc dòng 208 giải thích Ghim dùng R3 để không đụng Y và X |
| 9 | Nặng | Đã sửa | Dòng 145 thả vật 30 giây rồi biến mất, khớp `vat-pham.md:45`. Vật nhiệm vụ thả thì về vị trí gốc (dòng 145, 153), khớp V4 |
| 10 | Nặng | Đã sửa | Dòng 61 (cắt về vmax_thật sau Lướt), 64 và 253 (trần 12 u/s không áp cho Lướt), 489 |
| 11 | Nặng | Đã sửa luật, sinh lỗi mới M1 | Dòng 95, 116, 305 (Oxy chạm 0 giữa kênh Recall thì hủy và vào Ngạt). Dòng 93 đổi dự phòng thành 5 giây Recall cộng 3 giây đệm, nhưng công thức mục 3 dòng 294 vẫn cộng 8 |
| 12 | Nhẹ | Đã sửa | Dòng 3, 529 |
| 13 | Nhẹ | Đã sửa | Dòng 185 trỏ `kinh-te-tien-trinh.md`. Grep `CHỜ`: 0 dòng trong `nguoi-choi.md` |
| 14 | Nhẹ | Còn | Dòng 175 sửa thành "tối đa 9% mỗi bậc, bậc 1 là 8,3%" nhưng dòng 342 ("Tăng mỗi bậc tối đa 8%") và 494 ("tăng tối đa 8% mỗi bậc") vẫn 8% |
| 15 | Nhẹ | Đã sửa | Dòng 347 nêu 66% chuyến chương 1 về vì đầy túi (số đã cũ, xem M2) |
| 16 | Nhẹ | Đã sửa | `combat-driftlife.md`: grep "kéo chậm" chỉ còn dòng lịch sử 719 (ghi đã bỏ). Dòng 630 đã sạch |
| 17 | Nhẹ | Đã sửa | Dòng 116 và 163 cùng "không cho Lướt trong kênh Recall" |
| 18 | Nhẹ | Đã sửa | Dòng 274 đến 276 ba hàng 90, 80, 65 phần trăm, bỏ 0,75 |
| 19 | Nhẹ | Đã sửa | Dòng 292 công thức gia tốc thật, ví dụ 18 x 0,944 = 17,0 đúng |
| 20 | Nhẹ | Đã sửa một phần | Bảng Lệch (dòng 512 đến 520) viết lại, câu hỏi mở 3 đã đóng (dòng 440). Còn: hàng #1 (ky-thuat) và #4 (combat:630) đã cũ vì hai file đó đã sửa. `tram-va-cang.md:333` vẫn "tốc độ thường", hàng #5 còn đúng. Dòng 100 vẫn ghi "gd-combat chưa ghi" |
| 21 | Nhẹ | Đã sửa | Dòng 415 tiêu chí 2: 5 người, từ lần thử 3, 90% lượt không chạm tường |
| 22 | Nhẹ | Đã sửa | Câu hỏi mở 1 (dòng 438) giờ ghi đã chặn bằng K26. `vat-pham.md:71` ghi 12% |
| 23 | Nhẹ | Đã sửa | Dòng 217 mốc 30 giây từ người đầu tiên xác nhận, khớp `ux-ui.md` |

### Lỗi mới do chỗ sửa sinh ra, và lỗi còn từ vòng 1
| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|---|
| V7 (còn) | Nặng | 3 | `nguoi-choi.md:200` so với `ux-ui.md:371` | Ghim món gamepad: R3 so với Y. Dev gamepad dựng theo file nào cũng đúng một nửa, và Y đang là Kích Recall nên lỗi vòng 1 chưa hết | `ux-ui.md:371` "R, Y ... khớp nguoi-choi.md 2.7" | Sửa `ux-ui.md:371` thành R3 và bỏ chữ "khớp" sai | gd-ux |
| M1 | Nặng | 2 | `nguoi-choi.md:93` so với `294` và `chuyen.json:149` | Vạch "đủ về" có hai giá trị dự phòng trong cùng file: dòng 93 ghi 3 (đích cửa khí) hoặc 8 (đích Recall Beacon), ví dụ 53. Dòng 294 vẫn "+ 8", ví dụ 58. Sim dùng một số `duPhongVe` 8 cho mọi đích, `ux-ui.md` HUD-02 trỏ "công thức mục 3". Hàng ở dòng 93 còn bị nhét vào bảng 4 cột Cảnh báo với 5 ô nên bảng vỡ | Dòng 93: "50 + 3 = 53". Dòng 294: "50 + 8 = 58". `chuyen.json:149` "duPhongVe": 8 | Chọn một bản (đề xuất dự phòng 3 cho cửa khí, 8 cho Beacon) rồi sửa dòng 294, `chuyen.json` và sim cùng đợt. Tách hàng vạch "đủ về" khỏi bảng cảnh báo | gd-character, gd-tech |
| M2 | Nặng | 3 | `nguoi-choi.md:235, 236, 298, 347` | Số sim cũ. Bảng ghi chuyến chương 1 dài 4,2 phút, chương 5 dài 10,7 phút, chương 1 có 66% chuyến về vì đầy túi (nguồn "sim GD-030"). Sim sinh lại 04:49 cho 4,4 phút, 10,4 phút, 83% (chương 1 trung bình một người). Số có nguồn mà sai so với file sim | `sim-chuyen.md` dòng 23: "4,4 (4,0 đến 4,7) ... 83%". Dòng 87: "10,4". Mục 2: "4,4 phút", "10,4 phút" | Đổi 4,2 thành 4,4, 10,7 thành 10,4, 66% thành 83% (4 chỗ). Vẫn nằm trong khung mục 9 (4 đến 6 và 10 đến 12) | gd-character |
| M3 | Nặng | 4 | `nguoi-choi.md:122, 229, 271`, nguồn `ky-thuat.md:116, 232, 251, 336, 356` | Giữ chỗ chưa có trần số lần. Dòng 229 vẫn "Giữ chỗ 15 giây" không giới hạn: rút mạng và vào lại trong 15 giây, lặp lại, giữ đồng hồ Ngạt dừng, nhân vật bất tử và Oxy đóng băng mãi, người ngạt không bao giờ bị kéo về và nhóm phải chờ. Đây là lách K2 và C10. gd-tech đã đề xuất 1 lần mỗi người mỗi chuyến, `ky-thuat.md:336` ghi gd-character "Nhận", nhưng file chủ chưa có | `ky-thuat.md:116`: "Giữ chỗ tối đa 1 lần mỗi chuyến cho mỗi người, lần thứ hai tính như bị kéo về ngay". `ky-thuat.md:251` biên dựa vào luật này. `nguoi-choi.md` grep "tối đa 1": không có luật Giữ chỗ | Thêm vào 2.9 điểm 6, bảng trạng thái dòng 122, bảng tham số và biên: Giữ chỗ tối đa 1 lần mỗi người mỗi chuyến, lần thứ hai tính như Bị kéo về ngay | gd-character |
| M4 | Nhẹ | 2 | `nguoi-choi.md:342, 494` so với `175` | Trần tăng tốc mỗi bậc: dòng 175 "tối đa 9%, bậc 1 là 8,3%", dòng 342 và 494 còn 8% (lỗi 14 vòng 1 chưa sạch) | Dòng 342, 494 | Đổi hai dòng thành 9% | gd-character |
| M5 | Nhẹ | 2 | `nguoi-choi.md:306` | Biên "Dùng CON-101 chạm trần 25%" không bao giờ xảy ra: tối đa 2 bình x 40 = 80 nhỏ hơn 82,5 (25% bình bậc 0) và trần 25% càng lớn ở bậc cao. Luật trần thừa với số hiện hành, tiêu chí 8 (bot chấm không hồi vượt trần) chỉ có nghĩa nếu số bình đổi | Dòng 84: "82 điểm, tức tối đa 2 bình" | Giữ cả hai (an toàn khi đổi số) nhưng ghi rõ ở dòng 306 rằng với 2 bình thì trần không chạm | gd-character |
| M6 | Nhẹ | 1 | `nguoi-choi.md:84, 281, 438, 520` | Còn câu "Số 40 chưa qua sim, chờ gd-tech mô hình" trong khi sim đã có mục 3c | `sim-chuyen.md` mục 3c | Bỏ chữ chờ, trỏ tới mục 3c. Hàng #7 của bảng Lệch (dòng 520) cũng cũ | gd-character |
| M7 | Nhẹ | 1 | `nguoi-choi.md:100, 514, 517` | Câu "gd-combat chưa ghi" (dòng 100) cũ, bảng Lệch hàng #1 (ky-thuat:101, 102) và #4 (combat:630) đã được sửa ở file kia | `ky-thuat.md:115, 117`, `combat-driftlife.md` grep "kéo chậm" | Xóa dòng 100 phần "chưa ghi", đóng hàng #1 và #4 | gd-character |
| M8 | Nhẹ | 2 | `nguoi-choi.md:181` so với `vat-pham.md:264, 271, 278`, `kinh-te-tien-trinh.md:131, 140, 152` | Cột "Mở dự kiến theo chương": T-DAY ghi "Chương 2 đến 4", nâng cấp mở ở chương 1, 2, 3 (UPG-THR-1, 2, 3). Hiểu "dùng ở chương" thì đúng (ch2 bậc 1, ch4 bậc 3, khớp sim), hiểu "mua ở chương" thì sai. Cột trộn hai nghĩa (T-DUNGCU là nghĩa mua) | Ba file kia | Đổi tên cột hoặc đổi thành "Mua ở chương 1 đến 3, dùng từ chương 2 đến 4" | gd-character |
| M9 | Nhẹ | 5 | `nguoi-choi.md:61` | Hồi chiêu Lướt 1,2 giây tính từ lúc bấm hay lúc hết lướt: vẫn chưa nói | Dòng 61 | Ghi "tính từ lúc bấm" hoặc ngược lại | gd-character |
| Lưu ý cân bằng | Nhẹ | 4 | `sim-chuyen.md` 3c | Hai bình (80 Oxy) từ chương 2 trở đi luôn đáng mang: chương 3 trung bình 767 lên 937 GTĐ (+22%), thời gian 6,5 lên 7,4 phút, giá chế 2 x 9,1 = 18,2 GTĐ. Ở trần, lời gấp khoảng 9 lần. P1 không hỏng vì có trần, nhưng không còn quyết định "mang hay không" | Bảng 3c | Chỉ là lưu ý cho gd-economy, GDM quyết có nâng giá bình hay không | gd-economy, GDM |

Mâu thuẫn chéo còn lại vòng 2: `ux-ui.md:371` (V7), `tram-va-cang.md:333` "tốc độ thường" chưa số (hàng #5 trong bảng Lệch của chính file này, gd-quan). `ux-ui.md` đã khớp G, D-pad xuống, Q, M, J.

Số kiểm vòng 2 (bổ sung): `chuyen.json` khớp bình 330 đến 1000, túi 80 đến 216, ngạt 12, thoát ngạt 30, Recall 5. Ngoài lệch M1, M2: tham số Oxy khác khớp. Công thức mới tự tính: 25% x 330 = 82,5, 2 x 40 = 80 là 24,2%, 18 x (1 - 0,056) = 17,0, 240 / 4,8 + 3 = 53, hành lang 20 / 6 = 3,3 giây, đều đúng. Mục tiêu bị kéo về của người tham theo sim 04:49 chương 1 đến 5: 10, 36, 41, 29, 13 phần trăm, lệch khung mục 9 (15 đến 40) ở chương 1, 3, 5, không phải lỗi của file này, báo gd-tech và GDM.

Bỏ qua vòng 2: không chạy prototype nên tiêu chí 1 đến 3 mục 8 vẫn BLOCKED. Tiêu chí 8 và 9 (bot chấm 1000 lượt) chỉ có selftest K26, chưa có bot K22 và C10.

---
Phần dưới là phiếu vòng 1 (giữ nguyên để đối chiếu).

Máy: `validate-gdd.mjs` 0 lỗi (10 file, 325 ID, ghi sang thư mục tạm). `selftest.mjs` 15 phép kiểm ĐẠT. Chạy lại `sim-chuyen.mjs --seed 1 --lan 2000` sang thư mục tạm, kết quả giống hệt `tools/ket-qua/sim-chuyen.md` (trừ dòng giờ sinh). Bảy lỗi validator cũ (TOL-101, UPG-OXY-5, UPG-BAG-5, UPG-THR-5, bậc 0 đến 4 khớp `vat-pham.md`) đã hết, xác nhận ở mục Số kiểm.

## Tóm tắt lỗi
| Mức | Số lỗi |
|---|---|
| Chặn | 2 |
| Nặng | 9 |
| Nhẹ | 12 |

## Lỗi
| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|---|
| 1 | Chặn | 3, 4 | `nguoi-choi.md:120, 121, 221, 222, 310, 439, 469`. Cùng lỗi ở `ky-thuat.md:101, 102` | Lỗi đã biết còn nguyên, và rộng hơn 3 dòng đã báo. Rời phiên chủ động, mất kết nối quá 15 giây, thoát ngay lúc Ngạt đều ra "Về an toàn giữ nguyên túi". Với túi 80 Khối đó là Recall tức thì không cần giữ 5 giây, không hủy khi bị đánh, giữ cả túi thay vì 1 món. Một mình thoát giữa chuyến cũng ra kết quả này, trong khi K23 và C10 nói mất chuyến. Host rớt: dòng 222 và 418 còn "phiên dừng và lưu [CHỜ gd-tech]", C10 đã chốt "về lần lưu đầu ngày" | Dòng 121: "Thoát giữa chuyến thì Về an toàn giữ nguyên túi". Dòng 310: "Thoát phiên đúng khi Ngạt ... nếu thoát chủ động thì Về an toàn giữ nguyên túi". Dòng 120 và 222: hết 15 giây thì "Về an toàn giữ nguyên túi". Dòng 469 điểm tự quyết "Đã bỏ: Bị kéo về mất túi". Khung K2 (chỉ 1 món), K4 (chỉ hai cách kết thúc chuyến), C10, log 64 | Sửa mọi dòng trên theo C10: khách mất kết nối quá 15 giây hoặc chủ động rời giữa chuyến thì tính Bị kéo về (giữ đúng 1 món ghim). Chơi một mình thoát giữa chuyến thì mất chuyến, vào lại ở đầu ngày (K23). Host thoát thì thế giới về lần lưu đầu ngày. Dòng 469 đổi cột "Chọn" và "Đã bỏ". Sửa 2 dòng của `ky-thuat.md` cùng đợt. Dòng 310: thoát lúc Ngạt cũng chỉ giữ món ghim | gd-character, gd-tech (`ky-thuat.md`) |
| 2 | Chặn | 4 | `nguoi-choi.md:82, 148, 413`. Nguồn số: `vat-pham.md:283, 411, 587, 628` | Vòng Oxy của CON-101 có lời ròng, không có trần, số 40 chưa qua sim. Tính ở mục Số kiểm: chế 1 bình tốn khoảng 14 giây khai thác Gần (7 Khối nguyên liệu) nên lời 40 - 14 = +26 Oxy (2,9 lần), theo năng suất bình quân của sim thì +17 Oxy (1,7 lần). Từ chương 3 mỗi bình đổi ra khoảng 85 đến 100 GTĐ thời gian chuyến với giá 9,1 GTĐ nên lời khoảng 9 đến 11 lần. Không luật nào chặn số bình mang ngoài Khối túi: 80 Khối chứa 40 bình tức 1600 Oxy, gấp 4,8 lần bình bậc 0. Không bị chặn thành vô hạn trong một chuyến vì phải qua xưởng, nhưng là chiến lược trội và làm hỏng P1 ("chuyến đi không có giới hạn" bị cấm). `vat-pham.md:587` còn đề xuất "hồi tối đa 20 phần trăm, hủy nếu bị đánh" nhưng 2.2.7 không lấy | Dòng 82: "CON-101 hồi 40 Oxy ... không miễn phí". `vat-pham.md:283`: RCP-131 1 COM-105 + 1 COM-101 -> 1 CON-101, 10 giây. `vat-pham.md:274, 270`: COM-105 = 2 RES-105 (Khối 2 mỗi cái), COM-101 = 3 RES-101. `vat-pham.md:207, 209`: SLV-103 7,0 giây cho 2 RES-105, SLV-105 14,0 giây cho 6 RES-101. Grep `sim-chuyen.mjs`, `chuyen.json`, `kinh-te-tien-trinh.md`: không có CON-101 | Trước khi chốt 40: gd-tech mô hình CON-101 vào `sim-chuyen.mjs` (chế ở xưởng, mang theo, dùng khi Oxy thấp). Thêm trần cứng vào 2.2.7, ví dụ tối đa 2 bình mỗi chuyến hoặc mỗi bình tăng Khối. Thêm hủy khi trúng đòn (khớp `vat-pham.md:587`), không hồi quá dung lượng, không dùng khi Ngạt (xem lỗi 6). Đóng câu hỏi mở 1 (dòng 413) bằng số sim | gd-character, gd-tech (sim), gd-items (RCP-131, số Khối), GDM |
| 3 | Nặng | 3, 4 | `nguoi-choi.md:110, 211, 298, 316` (toàn file không có chữ K22) | Thiếu K22. Không dòng nào ghi tối đa 2 chuyến mỗi ngày, Skiff cũng tính, đã mở ca cảng thì hết ra ngoài. Bảng trạng thái "Ở trạm" chỉ ghi "Qua cửa khí sau khi cả nhóm xác nhận ở chuyến kế". Dev đọc mục Luật sẽ dựng số chuyến không giới hạn, và dòng 83 "Về tới trạm Oxy đầy lại ngay" thành vòng Oxy vô hạn mà chính file này cảnh báo ở dòng 103 (C9 chỉ chặn trong cùng chuyến) | Khung K22 dòng 85. `grep -n K22 nguoi-choi.md` không ra dòng nào. Bảng 110 và 2.8.6 (dòng 211) không đề cập số chuyến | Thêm vào 2.8 và bảng trạng thái: cửa khí khóa sau chuyến thứ hai hoặc khi đã mở ca cảng tới lúc ngủ. Ghi Skiff tính một chuyến. Thêm dòng vào mục 4 trường hợp biên | gd-character |
| 4 | Nặng | 4 | `nguoi-choi.md:104, 164, 168` | Trao đồ lách K2. Người ngạt Trao đồ cho đồng đội trong 12 giây. Mỗi lần giữ E 0,5 giây chuyển 1 đơn vị, nên 12 giây cứu được tới khoảng 24 đơn vị cộng 1 món ghim. K2 nói chỉ giữ đúng 1 món và mất phần còn lại. Ngạt không cấm Trao đồ (dòng 97 chỉ cấm Lướt, dụng cụ, Recall, thả vật kéo). Một mình thì mất hết còn có đồng đội cạnh thì gần như giữ hết, sim GD-030 không mô hình việc này | Dòng 104: "Người ngạt được đồng đội Trao đồ trong 12 giây để cứu đồ". Dòng 164: "Chuyển 1 đơn vị vật phẩm", giữ 0,5 giây. Dòng 168: đồng đội ngạt là ưu tiên đầu của phím E. Khung K2 | GDM quyết: cấm Trao đồ khi Ngạt (đề xuất, giữ K2) hoặc giới hạn tổng đơn vị và đưa vào sim. Ghi quyết định vào cả 2.3 và mục Điểm tự quyết | GDM, gd-character |
| 5 | Nặng | 2 | `nguoi-choi.md:112` so với `59, 236` | Miễn sát thương khi Lướt có hai giá trị trong cùng file. Bảng trạng thái ghi 0,15 giây, luật 2.1.5 và bảng tham số ghi 0,2 giây | Dòng 112: "i-frame 0,15 giây đầu". Dòng 59: "miễn sát thương 0,2 giây đầu". Dòng 236: 0,2 giây. `combat-driftlife.md:114, 224`: 0,2 | Sửa dòng 112 thành 0,2 giây | gd-character |
| 6 | Nặng | 5 | `nguoi-choi.md:76-83, 97, 150` và danh sách thao tác dòng 39, bảng phím 2.7 | CON-101 không dựng được từ mục Luật. Danh sách thao tác (dòng 39) và bảng phím (197-211) không có "Dùng vật tiêu hao". Không rõ: phím nào, có hủy khi trúng đòn không, dùng được khi Ngạt không (một bình 40 Oxy đạt 30 Oxy thoát ngạt, tức tự cứu một mình, trái hoặc thừa với luật chia Oxy), hồi vượt dung lượng thì bỏ hay giữ, có hồi chiêu không, bình có tính "dụng cụ" nên bị cấm khi Ngạt không (dòng 97 cấm "dụng cụ") | Dòng 82 chỉ ghi "dùng 1,5 giây, chiếm chỗ túi". Dòng 150: dụng cụ "vật tiêu hao (CON-102, CON-103)", không nhắc CON-101 là hành động. `ux-ui.md`: grep "tiêu hao" không ra phím dùng bình | Thêm hành động "Dùng bình" vào dòng 39 và 2.7 (đã có phím chưa dùng, hoặc chọn trong đai). Ghi từng biên: hủy khi trúng đòn, cấm khi Ngạt, trần Oxy | gd-character, gd-ux (phím) |
| 7 | Nặng | 3 | `nguoi-choi.md:197` so với `ux-ui.md:375` | Ghim món: bạn ghi gamepad Y, UX ghi X (hàng "Hành động phụ (ghim, hoán đổi) R, X" ở menu). Lỗi đã biết còn nguyên. Thêm: dòng 202 tự đặt quy tắc không phím nào đổi nghĩa ngoài hai ngữ cảnh, nhưng Ghim là ngữ cảnh thứ ba (menu túi) trùng Y = Kích Recall giữ (dòng 196) và X = Chia Oxy giữ (dòng 196). Mở túi không dừng thời gian (dòng 147), nên trong túi bấm Y có thể vừa ghim vừa giữ Recall | Dòng 197: "Ghim món R (trong menu túi), Y". `ux-ui.md:375`: "Hành động phụ (ghim, hoán đổi) R, X". `ux-ui.md:348, 349`: Kích Recall Y giữ, Chia Oxy X giữ | GDM chọn một nút (đề xuất tách khỏi Y và X, ví dụ LB hoặc nút bấm đôi). Sửa cả hai file cùng đợt | gd-character, gd-ux |
| 8 | Nặng | 3 | `nguoi-choi.md:184-202` so với `ux-ui.md:347, 351, 363` | Bảng phím 2.7 là "nguồn chung" nhưng thiếu 4 hành động UX đã thêm. Kết nhanh (Q, B), Bản đồ chuyến (M, LB), Sổ tay (J, Y trong trạm), Xem kho nhanh (Tab, Back trong trạm). UX nói "không đụng bảng của nguoi-choi.md, chỉ thêm" nên hai bảng lệch nhau. Y trong trạm = Sổ tay, Y ngoài = Kích Recall, Y trong túi = Ghim: ba nghĩa cho một nút | `ux-ui.md:334` "Bảng dưới là nguồn chung với nguoi-choi.md 2.7". `ux-ui.md:854` "Không đụng bảng của nguoi-choi.md, chỉ thêm". Nguoi-choi 2.7 không có Q, M, J | Kéo 4 hàng đó vào 2.7 và chốt một bảng duy nhất (đề xuất `nguoi-choi.md` giữ phần luật, `ux-ui.md` giữ bảng đầy đủ, 2.7 chỉ trỏ tới) | gd-character, gd-ux |
| 9 | Nặng | 3, 4 | `nguoi-choi.md:143` so với `vat-pham.md:45, 46` | Thả vật: file này ghi trôi 60 giây, `vat-pham.md` V3 ghi 30 giây. Không ghi hết hạn thì sao. Thả vật nhiệm vụ: V4 nói nằm lại vị trí gốc, 2.4 điểm 10 chỉ nêu "bị kéo về", không nêu "thả". Nếu vật nhiệm vụ trôi mất sau hạn thì chuỗi truyện kẹt (soft lock) | Dòng 143: "vật thả trôi tại chỗ 60 giây". `vat-pham.md:45`: "tạo vật nhặt được tại chỗ trong 30 giây". `vat-pham.md:46`: "bị kéo về mất túi hoặc thả xuống thì vật nhiệm vụ nằm lại vị trí gốc" | Thống nhất 30 hay 60 giây (cùng một số ở hai file). Ghi hết hạn thì biến mất, riêng vật nhiệm vụ thả thì về vị trí gốc theo V4 | gd-character, gd-items |
| 10 | Nặng | 5 | `nguoi-choi.md:59, 62` | Lướt 15 u/s vượt trần 12 u/s của lực ngoài (dòng 62 "tổng tốc độ chặn ở 12 u/s"). Không nói trần có áp cho Lướt không. Cũng không nói vận tốc sau Lướt: cắt về vmax hay trôi theo hãm tự nhiên 12 u/s2 (từ 15 xuống 6 mất 0,75 giây, đi thêm khoảng 7,9 u, trái số "đi 3,3 u"). Dev phải đoán, và tiêu chí nghiệm thu 1 (dừng trong 0,5 u) phụ thuộc | Dòng 59: "xung lực 15 u/s trong 0,22 giây (đi 3,3 u)". Dòng 62: "chặn ở 12 u/s". Tính: sau lướt v = 15 thì 15 giảm còn 6 dưới 12 u/s2 là 0,75 giây, quãng (225 - 36) / 24 = 7,9 u | Ghi: Lướt đặt vận tốc cố định 15 u/s trong 0,22 giây, hết thì cắt về vmax (hoặc trôi) và trần 12 áp cho lực ngoài riêng, không áp cho Lướt | gd-character, gd-tech (prototype) |
| 11 | Nặng | 5 | `nguoi-choi.md:114, 135-136, 101` | Oxy chạm 0 đang giữa kênh Kích Recall: không nói. Bảng 2.3 điểm 1 cấm kích Recall khi Ngạt, nhưng kênh đã chạy thì hủy hay chạy tiếp? Bước 8 (Recall xong) chạy trước bước 9 chỉ lo trường hợp đúng khung hoàn tất. Dấu 8 trong công thức vạch đủ về ("dự phòng") không nói có gồm 5 giây Recall hay không, nên không biết Recall từ Oxy còn bao nhiêu thì an toàn | Dòng 97: "không kích Recall". Dòng 114: Recall 5 giây hủy khi thả, trúng đòn, rời 2,5 u. Không có Oxy chạm 0. Dòng 281: "8 là dự phòng" | Thêm: Oxy chạm 0 khi đang kênh Recall thì hủy kênh và vào Ngạt (hoặc ngược lại). Ghi 8 = 5 giây Recall cộng 3 giây đệm | gd-character |
| 12 | Nhẹ | 1, 3 | `nguoi-choi.md:3, 498-499` | Đầu file ghi nguồn "K1 đến K4, K6, K12, C1 đến C8", chưa có K22, K23, K24, C9, C10. Lịch sử thay đổi không có dòng nào cho khung lần 4 | Dòng 3. Khung dòng 3: "sửa lần 4 sau QA vòng 1" | Cập nhật khi sửa lỗi 1 và 3 | gd-character |
| 13 | Nhẹ | 2 | `nguoi-choi.md:182` | "giá [CHỜ gd-economy]" đã cũ. `kinh-te-tien-trinh.md:114` có giá bậc 1 (T-OXY bậc 1 25,0) | `kinh-te-tien-trinh.md:114, 123, 129, 136` | Trỏ tới bảng giá của gd-economy | gd-character |
| 14 | Nhẹ | 2 | `nguoi-choi.md:172, 178, 321` | Bộ đẩy bậc 1 tăng tốc 6,0 lên 6,5 là 8,3 phần trăm, vượt "tối đa 8% mỗi bậc". Bậc 2 là 7,7 phần trăm, bậc 3 là 7,1 phần trăm | 6,5 / 6,0 = 1,0833 | Đổi bậc 1 thành 6,4 (6,7 phần trăm) hoặc nâng trần lên 9 phần trăm. Báo gd-tech vì sim dùng 6,5 | gd-character |
| 15 | Nhẹ | 2 | `nguoi-choi.md:326` | Câu "túi đầy không còn là giới hạn đến trước Oxy ở bậc 0" sai với sim: chương 1 (bậc 0) 66 phần trăm chuyến về vì túi đầy (trung bình, một người). Chắc muốn nói bậc cao | `sim-chuyen.md` hàng chương 1, trung bình, 1 người: về vì túi đầy 66% | Sửa chữ "ở bậc 0" thành "từ chương 2 trở đi" | gd-character |
| 16 | Nhẹ | 3 | `combat-driftlife.md:630` so với `nguoi-choi.md:68` | Lồng mẫu hệ số 1,00 (Nhẹ, không làm chậm) khớp `combat-driftlife.md:147` và `619`. Lệch nằm ở `combat-driftlife.md:630` điểm tự quyết 21 vẫn ghi "kéo chậm" là cái giá của bắt sống. Lỗi này nằm bên combat, file này đúng theo luật 21 | `combat-driftlife.md:147`: "Lồng thuộc lớp vật kéo Nhẹ ... (không làm chậm". `combat-driftlife.md:630`: "Vật tiêu hao, lồng 3 con, kéo chậm" | Bỏ chữ "kéo chậm" ở `combat-driftlife.md:630` | gd-combat |
| 17 | Nhẹ | 2 | `nguoi-choi.md:161` so với `114` | Bảng 2.5 Kích Recall "Hủy khi: ... lướt", bảng trạng thái ghi "không Lướt". Hoặc cấm lướt hoặc lướt hủy, không thể cả hai | Dòng 161, dòng 114 | Chọn "không cho Lướt trong kênh Recall" cho khớp, bỏ chữ lướt ở dòng 161 | gd-character |
| 18 | Nhẹ | 2 | `nguoi-choi.md:209` so với `267` | Tốc độ mang kiện: 2.8.4 ghi 3 mức (Nhỏ 90, Vừa 80, Lớn 65 phần trăm), bảng tham số ghi một giá trị 0,75 | Dòng 209 và 267. `tram-va-cang.md:332` ghi 90, 80, 65 phần trăm "tốc độ thường" | Sửa bảng tham số thành 3 hàng, bỏ 0,75 | gd-character |
| 19 | Nhẹ | 2, 5 | `nguoi-choi.md:81, 279` | 2.2.6 nói tốc độ tối đa và gia tốc cùng giảm tới 0,85 lần khi đầy, bảng công thức chỉ có vmax_thật, không có gia tốc_thật | Dòng 81, dòng 279 | Thêm công thức gia tốc nhân (1 - p) | gd-character |
| 20 | Nhẹ | 3 | `nguoi-choi.md:487, 415, 489` | Bảng "Lệch cần vai khác sửa" #1 và câu hỏi mở 3 cũ: `combat-driftlife.md:120` (luật 10) và E9 (432) đã có luật người Ngạt không bị nhắm và không nhận sát thương, log GDM đã ghi. Dòng 489 (#3): `tram-va-cang.md:332` vẫn "tốc độ thường", chưa ghi 5,5 u/s, còn mở | `combat-driftlife.md:120, 432, 649` | Đóng #1 và câu hỏi 3. Giữ #3 hoặc nhờ gd-quan sửa | gd-character, gd-quan |
| 21 | Nhẹ | 2 | `nguoi-choi.md:392` | Tiêu chí nghiệm thu 2 mơ hồ: "người thử mới đi hết 20 giây không chạm tường sau 3 lần thử". Hành lang 20 u ở 6 u/s mất khoảng 3,3 giây, "20 giây" là gì, bao nhiêu người thử, đạt khi nào | Dòng 392 | Ghi: hành lang 1,5 u dài 20 u, tối thiểu 5 người thử mới, từ lần thử thứ 3 trở đi 90 phần trăm không chạm tường | gd-character, gd-qa |
| 22 | Nhẹ | 1, 3 | `nguoi-choi.md:82, 413`, `vat-pham.md:628` | Dòng 82 ghi "Chốt tại đây" mà câu hỏi mở 1 (dòng 413) vẫn mở. `vat-pham.md:628` ghi "khoảng 13% bậc 0" (số của bình 300 cũ), bình 330 thì 40 là 12,1 phần trăm, file này ghi 12 đúng | 40 / 330 = 0,121 | Đóng câu hỏi mở 1 sau khi gd-tech sim. Sửa chữ 13 ở `vat-pham.md:628` | gd-character, gd-items |
| 23 | Nhẹ | 5 | `nguoi-choi.md:211` so với `ux-ui.md:862` | 30 giây xác nhận cửa khí tính từ lúc nào: file này ghi "ai không trả lời trong 30 giây", UX ghi "kể từ người đầu tiên xác nhận". Dev phải đoán | `ux-ui.md:862` | Ghi mốc bắt đầu 30 giây ở 2.8.6 và tham chiếu `tram-va-cang.md:528` | gd-character |

## Trái lời Lead
Không. Thấy trái khung (G), không phải trái L:
- Lỗi 1 trái K2, K4 và C10 (nhãn G, không phải lời Lead).
- L3 (không PvP, không chơi cùng máy): file đúng. L4, L10, L13: file đúng. L1, L2: không thấy Halcyon, Tether Station, nợ oxy, Exodus Fleet. Tên riêng viết tiếng Anh (Recall Beacon, Skiff, Ember, Cradle, Lantern). L14: file không nhắc Solace.

## Mâu thuẫn chéo (file khác nói gì, dòng nào)
| File:dòng | Nói gì | Lệch với |
|---|---|---|
| `ky-thuat.md:101, 102` | Rời phiên chủ động và hết Giữ chỗ đều "về an toàn giữ nguyên túi" | C10, K2 (cùng lỗi 1) |
| `ky-thuat.md:16` | Thêm điểm lưu tạm sau chuyến 1, chuyến 2, ca cảng. Host rớt chỉ mất một pha | K23 và C10: lần lưu gần nhất là đầu ngày, tự lưu lúc ngủ. Cần gd-tech và GDM thống nhất |
| `ux-ui.md:375` | Hành động phụ (ghim) gamepad X | `nguoi-choi.md:197` Y (lỗi 7) |
| `ux-ui.md:347, 351, 363` | Có Q Kết nhanh, M Bản đồ, J Sổ tay mà 2.7 không có | Lỗi 8 |
| `ux-ui.md:862` | 30 giây tính từ người đầu tiên xác nhận | `nguoi-choi.md:211` (lỗi 23) |
| `vat-pham.md:45` | Vật thả trôi 30 giây | `nguoi-choi.md:143` 60 giây (lỗi 9) |
| `vat-pham.md:587` | CON-101: hồi tối đa 20 phần trăm, hủy nếu bị đánh | `nguoi-choi.md:82` hồi 40, không hủy |
| `vat-pham.md:628` | "khoảng 13% bậc 0" | 40 / 330 = 12,1 phần trăm |
| `combat-driftlife.md:630` | Cái giá của bắt sống gồm "kéo chậm" | `nguoi-choi.md:68` Lồng hệ số 1,00 (khớp `combat-driftlife.md:147`), lỗi ở combat |
| `tram-va-cang.md:332` | "tốc độ thường" chưa số | `nguoi-choi.md:489` còn mở |
| `map.md:419` | "túi đầy trước Oxy ở gần 100% chuyến" | `sim-chuyen.md`: 66% ở chương 1, 12 đến 40% ở chương 3 đến 5. Ngoài file này, báo gd-world |

## Chỗ phải đoán (lớp 5)
Dev mới dựng được: bay 8 hướng (tốc độ, gia tốc, hãm tự nhiên, hãm chủ động đều có số và ví dụ tính đúng), Oxy hao nền và hệ số tải, ngưỡng cảnh báo, ngạt 12 giây và các cách ra, chia Oxy 10 điểm/giây với sàn 20, Bị kéo về giữ 1 món, thứ tự khung 60 Hz. Phải đoán các chỗ sau:
1. Dùng CON-101: phím, hủy khi trúng đòn, dùng khi Ngạt, hồi vượt dung lượng, trần số bình (lỗi 2, 6).
2. Thoát giữa chuyến, host rớt, người chơi một mình thoát (lỗi 1).
3. Số chuyến mỗi ngày và khóa cửa khí (lỗi 3).
4. Lướt: vận tốc sau lướt, trần 12 u/s có áp không, hồi chiêu 1,2 giây tính từ đầu hay cuối lướt (lỗi 10).
5. Oxy chạm 0 giữa kênh Recall (lỗi 11). Oxy nhận được trong Ngạt có hao không (dòng 97 "Oxy giữ 0 và không hao thêm" không nêu trường hợp đã nhận một phần, ví dụ 25 trên 30).
6. Chia Oxy: người nhận ở dung lượng đầy thì bỏ phần thừa hay vượt dung lượng, ngưỡng cảnh báo 50, 25, 10 phần trăm có bắn lại khi Oxy lên lại không.
7. Gamepad analog: tốc độ theo độ nghiêng cần hay luôn vmax, vùng chết. Đẩy ngược hướng đang trôi (dòng 56) định nghĩa bằng góc nào trong 8 hướng.
8. "Đầy" là khi tải bằng sức chứa hay khi vật kế tiếp vượt chỗ trống (vật 2 Khối, chỗ trống 1 Khối). Chỉ `vat-pham.md:45` có "không vượt sức chứa".
9. Vật "nặng" và "kể chuyện" cần Tương tác (dòng 144) là những vật nào, và vật manh mối có cần Tương tác rồi mới tự ghi Sổ tay không (dòng 144 so với 151).
10. Thả vật 60 giây sau đó thì sao (lỗi 9).
11. Ghim món "một đơn vị vật phẩm": một đơn vị của kiện, hay một Khối. Buồng ngủ đông (vật kéo BNG-101) ghim được không (dòng 102 không liệt kê, dòng 295 ngầm nói không).
12. Hết "giờ chọn" ghim khi Ngạt: không có đồng hồ chọn riêng ngoài 12 giây (dòng 99).
13. Một mình xác nhận cửa khí và mốc 30 giây (lỗi 23). Nâng cấp mua trong lúc ở trạm sau khi đã ra chuyến 1 rồi về có áp ngay không (dòng 317 chỉ nói "từ chuyến sau").

Người chơi một mình vẫn thoát được ở mọi trạng thái: Đạt theo bảng 2.3 (Ngạt tối đa 12 giây rồi Bị kéo về, Recall không giới hạn thử, Kéo vật thả được khi Ngạt, Trúng đòn về Bay). Hai chỗ chưa kín: thoát lúc Ngạt (lỗi 1) và Oxy chạm 0 giữa Recall (lỗi 11). Co-op không bị kẹt vì AFK: chuyến kết thúc khi người cuối về hoặc bị kéo về, Oxy luôn hao nên không treo.

## Số kiểm bằng chứng (số nào khớp file sim, số nào không)
| Số trong `nguoi-choi.md` | Nguồn đối chiếu | Kết quả |
|---|---|---|
| Bình 330, 450, 600, 780, 1000 (dòng 176) | `tools/tham-so/chuyen.json` dòng 155 đến 188 | Khớp |
| Túi 80, 100, 126, 168, 216 Khối (dòng 179, 251) | `chuyen.json` | Khớp |
| vmax 6,0, 6,5, 7,0, 7,5, 7,5 (dòng 178) | `chuyen.json` chương 1 đến 5 | Khớp (chương 4 và 5 dùng bậc 3, 7,5) |
| Chuyến chương 1 dài 4,2 phút, chương 5 dài 10,7 phút (dòng 228, 229, 285) | `sim-chuyen.md` mục 2, trung bình một người | Khớp (4,2 và 10,7) |
| Ngạt 12 giây, Oxy thoát ngạt 30, giữ Recall 5 giây, hao nền 1,0, ngưỡng tải 60 phần trăm, phạt tải tối đa 0,15 (dòng 97, 100, 255) | `chuyen.json` khối "oxy" | Khớp. Tốc độ hiệu dụng 0,8 và dự phòng 8 khớp dòng 281 |
| Bán kính nhặt, bán kính va chạm, hãm 12 và 36, lướt 15 u/s trong 0,22 giây | Tự tính: 6 / 18 = 0,33 giây, 36 / 24 = 1,5 u, 36 / 72 = 0,5 u, 6 / 36 = 0,17 giây, 15 x 0,22 = 3,3 u | Đúng |
| Lướt đắt hơn bay 7 lần mỗi u (dòng 59) | 4 / 3,3 = 1,21 Oxy/u so với 1 / 6 = 0,167 Oxy/u, tỉ lệ 7,3 | Đúng |
| Tự thoát ngạt 28,8 u (dòng 101, 314) | 12 x 6 x 0,4 = 28,8 | Đúng |
| Ví dụ công thức: f = 0,75, p = 0,056, vmax_thật 5,66, hao 2,64 (dòng 277 đến 280) | 0,15 x (0,15 / 0,4) = 0,0563. 6 x 0,944 = 5,66. 1 x 1,056 x 2,5 = 2,64 | Đúng. Khoảng 0,43 đến 1,0 (0,85 x 0,5 = 0,425) và 1,0 đến 5,75 (1,15 x 4,0 x 1,25) đúng |
| Ví dụ vạch đủ về d = 240 u (dòng 281) | 240 / (0,8 x 6) = 50, cộng 8 = 58 | Đúng |
| Túi 216 bằng 2,7 lần 80, bình 1000 bằng 3,0 lần 330 (dòng 326) | 2,7 và 3,03 | Số đúng, câu kết luận sai (lỗi 15) |
| CON-101 hồi 40 Oxy bằng khoảng 12 phần trăm bậc 0 (dòng 413) | 40 / 330 = 12,1 phần trăm | Đúng. `vat-pham.md:628` ghi 13 (cũ) |
| Bậc 0 đến 4 của T-OXY, T-TUI, T-DAY, T-VO, T-DUNGCU khớp `vat-pham.md` | OXY 1 đến 4, BAG 1 đến 4, THR 1 đến 3, ENV 1 đến 3, RACK 1 đến 2 (`vat-pham.md:242-262`). Không còn TOL-101, UPG-OXY-5, UPG-BAG-5, UPG-THR-5 | Khớp. Bảy lỗi validator cũ đã hết (validator 0 lỗi) |
| TOL-102, 201, 202, 203, 211, 401, 402, 501, BNG-101, STY-102, 103, 301, 401, 501 | grep `vat-pham.md` | Đều có định nghĩa |
| Mục tiêu bị kéo về: cẩn thận dưới 5 phần trăm, tham 15 đến 40 phần trăm (dòng 385) | `sim-chuyen.md` mục 2: trung bình 1, 1, 2, 0, 0. Tham 21, 36, 41, 26, 12 | Cẩn thận đạt. Tham lệch chương 3 (41 phần trăm trên 40) và chương 5 (12 phần trăm dưới 15). Không phải lỗi của file này, báo gd-tech và GDM |
| Số lần được cứu trên số lần ngạt trên 40 phần trăm (dòng 388) | `sim-chuyen.md` dùng `pCuuMoiDongDoi` 0,5 [GIẢ ĐỊNH] | Là đầu vào, chưa phải kết quả đo. Chờ playtest |
| CON-101 (40 Oxy, 2 Khối, 9,1 GTĐ) | Không có trong `sim-chuyen.mjs`, `chuyen.json`, `kinh-te-tien-trinh.md` | Chưa có bằng chứng sim (lỗi 2) |

Tính CON-101 (tự tính từ các dòng `vat-pham.md` đã nêu ở lỗi 2):
| Bước | Số |
|---|---|
| Nguyên liệu 1 bình | 1 COM-105 (2 RES-105, 4 Khối) + 1 COM-101 (3 RES-101, 3 Khối) = 7 Khối |
| Thời gian khai thác tại điểm | SLV-103 7,0 giây + nửa SLV-105 7,0 giây = 14 giây, chưa tính bay giữa điểm. Xưởng 10 giây không tốn Oxy |
| Lời Oxy tính theo thời gian khai thác | 40 - 14 = +26 Oxy, 2,9 lần |
| Lời Oxy tính theo năng suất bình quân (sim chương 1, 99,0 GTĐ trong 252 giây, 0,39 GTĐ/Oxy, bình 9,1 GTĐ ra 23 Oxy) | 40 - 23 = +17 Oxy, 1,7 lần |
| Chương 3 (850,7 GTĐ trong 402 giây, 2,12 GTĐ/Oxy) | 40 Oxy bằng khoảng 85 GTĐ, giá bình 9,1, chi phí chỗ túi 2 Khối khoảng 19 GTĐ, lời ròng khoảng 57 GTĐ mỗi bình |
| Chương 5 (1601,7 GTĐ trong 642 giây, 2,49 GTĐ/Oxy) | 40 Oxy bằng khoảng 100 GTĐ, gấp 11 lần giá bình |
| Trần mang | 80 Khối / 2 Khối = 40 bình, 1600 Oxy, gấp 4,8 lần bình 330 |
Đây là ước tính tay, chưa có sim, nên đưa vào `sim-chuyen.mjs` trước khi chốt.

Ngưỡng cảnh báo (50, 25, 10 phần trăm) theo thang bình, tự tính: bậc 0 là 165, 82,5, 33 Oxy. Bậc 1 là 225, 112,5, 45. Bậc 2 là 300, 150, 60. Bậc 3 là 390, 195, 78. Bậc 4 là 500, 250, 100. Không có lỗi số học. Lưu ý: ở bậc 4 vạch đủ về cho đích 700 u là 700 / 6 + 8 = 125, lớn hơn ngưỡng 10 phần trăm (100) nên bíp 10 phần trăm đến sau chuông đủ về. Không phải lỗi.

## Tiêu chí nghiệm thu rút từ mục 8 (bảng Feature, Category, Acceptance Criteria đo được, MVP hay Sau MVP)
| Feature | Category | Acceptance Criteria | MVP hay Sau MVP |
|---|---|---|---|
| Di chuyển 8 hướng, Hãm | Điều khiển | Prototype: người thử dừng cách điểm đích tối đa 0,5 u ở trên 90 phần trăm lần thử bằng Hãm (dòng 391). Chưa chạy được, xem Bỏ qua | MVP |
| Hành lang hẹp | Điều khiển, va chạm | Hành lang 1,5 u dài 20 u, người thử mới không chạm tường sau 3 lần thử (dòng 392). Mơ hồ, xem lỗi 21 | MVP |
| Tham số trong khoảng an toàn | Cân bằng | Mọi số mục 3 nằm trong khoảng an toàn sau prototype, hoặc có ghi lý do lệch và ngày thử (dòng 393) | MVP |
| Bảng trạng thái 2.3 | Soft lock | Mô phỏng 1000 chuyến ngẫu nhiên, 0 người chơi ở trạng thái không thoát được (dòng 394). Không thấy script bot này trong `tools/` | MVP |
| Chia Oxy | Co-op | 5 lần thử liền chạy, Oxy hai bên cộng bằng đúng số chuyển sai số dưới 1 điểm (dòng 395) | MVP (2 người) |
| Bị kéo về | K2 | Luôn giữ đúng 1 món ghim, 0 Tally bị trừ (dòng 396). Cần thêm ca Trao đồ khi Ngạt (lỗi 4) | MVP |
| Thanh Oxy bậc 0 và 1 | Nâng cấp | Chuyến với bậc 0 và 1 khớp bảng 2.6 (dòng 397): 330, 450 Oxy và 80, 100 Khối | MVP |
| Tỉ lệ bị kéo về vì Ngạt | Chỉ số | Cẩn thận dưới 5 phần trăm, tham 15 đến 40 phần trăm (dòng 385). Sim chương 3 và 5 của người tham lệch, xem Số kiểm | MVP, đo lại bằng playtest |
| Chuyến chương 1 | Chỉ số | 4 đến 6 phút (dòng 386). Sim 4,2 phút | MVP |
| Ghim món trước lần ngạt đầu | Chỉ số, FTUE | Trên 70 phần trăm người chơi mới sau tutorial (dòng 387) | MVP, đo bằng playtest |
| Cứu nhau | Chỉ số, co-op | Số lần được cứu trên số lần ngạt trên 40 phần trăm khi co-op 2 người (dòng 388) | MVP (2 người) |
| Đề xuất thêm, chưa có trong file | Thoát giữa chuyến | Ngạt rồi thoát game thì chỉ giữ đúng 1 món ghim (sau sửa lỗi 1) | MVP |
| Đề xuất thêm, chưa có trong file | CON-101 | Sim: tỉ lệ chuyến dài vượt khung mục 9 khi mang bình không quá 5 phần trăm | MVP |
| Đề xuất thêm, chưa có trong file | K22 | Cửa khí khóa sau chuyến thứ hai và khi đã mở ca cảng | MVP |

## Bỏ qua / không kiểm được
- Không chạy được prototype `tools/prototype/bay.html` và không chơi build, nên tiêu chí 1, 2, 3 của mục 8 (cảm giác di chuyển) BLOCKED. Số di chuyển vẫn là "ước".
- Không tìm thấy bot 1000 chuyến kiểm trạng thái không thoát được (tiêu chí 4). `sim-chuyen.mjs` có ngạt và kéo về nhưng không kiểm đường ra. Chưa kiểm.
- Không đọc đủ `ho-so-nhan-vat.md`, `cot-truyen.md` (dòng 905), nên không xác nhận lệch #4 ở dòng 490.
- So số bảng 2.6 với `kinh-te-tien-trinh.md` chỉ ở mức giá nâng cấp bậc 1, 2, 3, 4 (dòng 114 đến 136), không chạy lại sim kinh tế.
- Sau khi sửa lỗi 1 và 3 cần chấm lại phần K22, K23, K24, C10 của vòng 2.
