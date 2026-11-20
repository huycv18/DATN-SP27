# GD-031 combat-driftlife
ĐẠT (vòng cuối) - file `combat-driftlife.md` 0 chặn, 0 nặng, 4 nhẹ. R1 và R2 đã sửa, sim chạy lại ra đúng số trong GDD. Kèm lỗi chéo nặng thuộc gd-character ở `nguoi-choi.md` (chưa sửa theo K27 và C10), không nằm trong file này nhưng phải xử trước khi chốt đồng bộ co-op.
Giờ sửa file khi chấm vòng cuối: 04:55 (`combat-driftlife.md`, 96139 byte, 737 dòng), `tools/ket-qua/sim-combat.md` 04:50, `00-khung-game.md` 04:54, `vat-pham.md` 08:53, `map.md` 08:52, `nguoi-choi.md` 04:03 (không đổi từ vòng 1).

## Vòng cuối
### Lỗi vòng 2
| # | Trạng thái | Kiểm ở đâu | Ghi chú |
|---|---|---|---|
| R1 (nặng) sim không đọc 3.4, 3.4b | Đã sửa | Chạy lại `node tools/sim-combat.mjs --seed 1 --lan 2000` ra file tạm: giống hệt `ket-qua/sim-combat.md` ngoài giờ sinh, hash tham số 83a0cb70 | Bảng 3.8 (dòng 433-452) khớp 21/21 hàng của sim mục 2. S4 (6b dòng 551-554) khớp 100% các khoảng với sim mục 4, S5 (dòng 375-392) khớp 16/16 hàng. Oxy mất do đòn đã có số thật |
| R2 (nặng) bắt tay 0,5 s ở 3.2 | Đã sửa | Dòng 245 là 1,5 s, khoảng 1 đến 2 s. Khớp luật 19 dòng 140 và `combat.json` `batTay 1.5` | Hết lệch |
| R3 bảng 6b gãy | Đã sửa | Bảng hệ số liền một khối dòng 533-544 | |
| R4 mục tiêu S2 | Đã sửa | Dòng 608 trỏ "Hai thước đo", luật 24 có "sau khi trừ vật tiêu hao" | |
| R5 đường Dùi xung rồi bắt tay chưa đo | Đã sửa | Sim có đường này: ròng G01 1,10, G04 1,02, M04 1,55, X05 1,52, đều thấp hơn đường Súng lưới cùng loài (1,33, 1,08, 2,27, 2,44) | Không trội, bắt mất 5,6 s so với 3,3 s. Chiến lược "chỉ bắn" cũng không trội vì mẫu sống 1,5 đến 1,8 lần mà lồng không chiếm túi |
| R6 hàng cỡ S trong S4 | Đã sửa | 6b thêm hai hàng cỡ S (hạ dồn 0,85 đến 1,93, bắt dồn 1,21 đến 2,04 ở N từ 2 đến 4) và nói thẳng chấp nhận | |
| R7 BS-1 vùng 4 u, thân pha 1 | Đã sửa | Báo trước 1,3 s kèm vòng đỏ trên sàn, tiêu chí 10 (biên ước 0,1 s), pha 1 thân chỉ nhận sát thương khi Choáng, pha 2 nhận mọi lúc | |
| R8 "tốn chỗ túi" | Đã sửa | Không còn trong file | |
| R9 E9 lệch luật 36 | Đã sửa | E9 dòng 491 trỏ luật 36 | |
| R10 giờ chạy, S1, S5 | Đã sửa | Dòng 420 chép giờ 21:50 UTC bằng script, S5 có kết quả | S6 vẫn chờ prototype (BLOCKED) |
| R11 SMP-191, 192 nằm kho | Chấp nhận | Luật 37 có thông báo | |
| L11 BS-1 nặng hơn "boss nhỏ" | Đã sửa (giảm) | Sinh lực 600, quét 8, húc 10, phóng điện 8, phun 2 con hồi chiêu 20. S5: người trung bình một mình 1,2 phút P50, 1,3 phút P90 (mục tiêu 1 đến 2), Oxy P90 200 là 61% bình (S5 yêu cầu dưới 75%) | Cơ chế vẫn 2 pha, 3 Neo, Dây nối. Chấp nhận |

### Kiểm theo yêu cầu đợt 4
| Mục | Kết quả |
|---|---|
| BS-1 trong 1 đến 2 phút | Đạt: hạ trung bình 1 người 1,2 / 1,3, tệ 1 người 1,8 / 2,0, tốt 1,0 / 1,0. Boss nhóm 4 người trung bình 0,8 so với 1,2 một mình (67%, mục tiêu S4 60 đến 75%) |
| Oxy trận người tệ không vượt bình 330 | Đạt theo tiêu chí S5 do GDD tự đặt (P50 không quá 100% bình): hạ tệ 1 người P50 329 là 99,7%. Nhưng chỉ sát mép 1 điểm, P90 387 là 117% bình, Xua đi tệ P90 356 là 108%. Chưa tính Oxy đi đường tới C6. Người tệ phải rút ra B3 hoặc có bình bậc 1 (450). Ghi nhẹ N1 dưới đây |
| Tỉ lệ mẫu sống chia hạ, cỡ S và M | `vat-pham.md` khối SPECIES: S 1,50 / 1,50 / 1,60 (G01, G02, G04), 1,80 (M04, X01, X05). M đều 1,50. Trong 1,5 đến 2,0, K9 đạt. Ròng mỗi phút (sim): MVP G01 1,33 (lưới), 1,10 (Dùi xung rồi tay), G02 3,41, G04 1,08, 1,02, trên sàn 1,0. Cỡ M sau MVP 1,31 đến 1,61, tới 1,6 |
| Dùi xung rồi bắt tay | Không trội Súng lưới: ròng thấp hơn ở mọi loài cỡ S, nhưng không tốn vật tiêu hao, là đường cho người hết Lưới cuộn. Tiêu chí thiết kế đạt |
| K9 mới khớp `vat-pham.md` | Khớp: luật M1 (vat-pham dòng 60) ghi K9 chỉ áp loài S và M, L ngoài K9, ròng bằng k. Combat luật 24 và mục 9 cùng nội dung. Khung K9 (dòng 68) cũng khớp. Khớp log GDM dòng 66 |
| K27 ở luật 25, E12 | Combat đúng với khung K27 (dây nhả, lồng khóa tại chỗ, không kéo theo). Nhưng `nguoi-choi.md` chưa sửa (xem lỗi chéo) |
| C10 ở luật 25, E11 | Combat đúng với C10 (rớt quá 15 giây tính bị kéo về). `nguoi-choi.md` chưa sửa |
| K23 ở luật 35 | Khớp K23: trạng thái boss đã kết ghi vào tự lưu sau chuyến, boss chưa kết đánh lại từ đầu. Khớp luật 36 (hồi đầy khi phòng trống quá 10 giây) |
| K22, K24 đến K26 | Không ảnh hưởng combat |
| Validator `validate-gdd.mjs` | 8 lỗi, cả 8 ở `nguoi-choi.md` (gd-character), 0 lỗi ở combat. 379 ID |

### Lỗi còn lại (không chặn đạt)
| # | Mức | File:dòng | Vấn đề | Người sửa |
|---|---|---|---|---|
| N1 | Nhẹ | combat:375-392, 377 | Người tệ đánh BS-1 một mình hạ: Oxy P90 387 là 117% bình 330 (P50 329 sát mép 100%), Xua đi tệ xong trong 10 phút chỉ 74 đến 80%. Tiêu chí S5 chỉ đặt P50 nên đạt, nhưng chưa tính đường đi tới C6. Cần xem lại khi playtest | gd-combat, gd-tech |
| N2 | Nhẹ | combat:361 | Câu dẫn "Kết quả S5 lần đầu ... chờ gd-tech chạy lại S5" đã cũ, ngay dưới đã có kết quả chạy lại | gd-combat |
| N3 | Nhẹ | `sim-combat.md` mục 2 hàng G02, X01 | Đường Dùi xung rồi bắt tay giữ giây hạ 8,2 và 9,2 như đường Lao từ cho loài Chạy trốn, dù Dùi xung tầm 2,5 u và loài chạy 7,8 u/s. Ròng 2,71 và 3,04 có thể quá lạc quan. Đáng đo lại khi prototype có Dùi xung | gd-tech |
| N4 | Nhẹ | `vat-pham.md` SPECIES hàng 312, combat:426 | Mirror Mantis ngưỡng mê 280 với Súng gây mê 60 điểm mỗi phát cần ít nhất 5 Ống, `vat-pham.md` tính 4 Ống (GTĐ vật tiêu hao 26,3) trong khi sim dùng 40,7. Tỉ lệ ròng theo giá trị của Mantis nếu theo sim chỉ khoảng 1,0 chứ không phải 1,5. Sau MVP | gd-items, gd-combat |

### Lỗi chéo của gd-character (nặng, ngoài file combat)
| # | Mức | File:dòng | Vấn đề | Người sửa |
|---|---|---|---|---|
| X1 | Nặng | `nguoi-choi.md:104` | Mục 8 ghi "Người ngạt được đồng đội Trao đồ trong 12 giây để cứu đồ trước khi bị kéo về", trái K27 (người đang ngạt không trao và không thả được đồ, đồng đội không vét túi hộ) và trái luật 25, E12 của combat. Cùng file: dòng 97 "thả mọi vật đang kéo", dòng 299 "Ngạt khi đang kéo lồng mẫu: Thả" cần đổi thành lồng khóa tại chỗ, được cứu thì Tương tác nối lại | gd-character |
| X2 | Nặng | `nguoi-choi.md:120, 121, 221, 222, 291, 310` | 6 chỗ ghi rời hoặc rớt giữa chuyến thì "Về an toàn giữ nguyên túi", trái C10 (tính như bị kéo về, chỉ giữ 1 món). Validator báo 8 lỗi gồm 2 chỗ còn `[CHỜ gd-tech]` (dòng 222, 347) | gd-character |

Hai lỗi này thuộc `nguoi-choi.md` nên không tính vào kết luận của `combat-driftlife.md`. Nếu GDM muốn chốt cả bộ GDD hệ thống cùng lúc thì cần gd-character sửa trước, rồi `/gdd-review` lại `nguoi-choi.md`.

## Bản vòng 2 (giữ để tra)
Vòng 2 kết luận TRẢ LẠI vì R1 và R2, nay đã sửa. Nội dung bên dưới giữ nguyên từ vòng 2.

Giờ sửa file khi chấm vòng 2: 04:19 (`ls -l` ngày 2026-11-20, 85185 byte, 681 dòng). Vòng chấm: 2. Khung `00-khung-game.md` sửa lúc 04:13 (K22 đến K24, C10), `map.md` 04:12, `vat-pham.md` 04:20, `tools/sim-combat.mjs` 04:22 (gd-tech đang sửa, đã có hàm boss S5).

Việc đã làm vòng 2: đọc lại toàn file, mở từng chỗ sửa, đối chiếu `map.md` (dòng 127, 182, 215, 484), `vat-pham.md` (dòng 183-187, 285-287, 302, 356-359, 370-371), `nguoi-choi.md` (dòng 64-72, 143), `tools/tham-so/combat.json`, khung K22 đến K24 và C10, chạy lại sim ra file tạm rồi so với `tools/ket-qua/sim-combat.md` (04:11).

## Tóm tắt lỗi
| Mức | Số lỗi còn | Đã sửa vòng 1 |
|---|---|---|
| Chặn | 0 | 0 |
| Nặng | 2 (R1, R2, đều mới) | 12 trên 12 |
| Nhẹ | 9 (R3 đến R11, trong đó N3, N5, L11 còn dư một phần) | 10 trên 11 |

## Trạng thái lỗi vòng 1
| # | Mức | Trạng thái | Kiểm ở đâu | Ghi chú |
|---|---|---|---|---|
| N1 | Nặng | Đã sửa | Luật 24 (dòng 150), bảng "Hai thước đo" dòng 413-418, dòng 424-428 | K9 đo bằng một thước (giá trị mẫu chia giá trị hạ, 1,5 đến 2), "ròng mỗi phút" tách riêng và gọi là thước canh chiến lược trội. Còn một chỗ chưa đồng bộ, xem R4 |
| N2 | Nặng | Đã sửa | Luật 21 (dòng 147), điểm tự quyết 21 (dòng 655), Q2 (dòng 602) | Bỏ "kéo chậm", ghi lớp Nhẹ không làm chậm, chấp nhận bắt S trội khi lồng còn chỗ. Khớp `nguoi-choi.md:68`. Còn sót ở dòng 88, xem R8 |
| N3 | Nặng | Đã sửa một phần, còn nhẹ | Luật 19 dòng 140 (bắt tay 1,5 s), `tham-so/combat.json` `batTay: 1.5` | Luật và file tham số đã đổi, nhưng bảng 3.2 dòng 245 vẫn 0,5 s (R2, nặng). Đường Dùi xung rồi bắt tay chưa có trong sim (dòng 429 ghi "Chưa đo"), R5 |
| N4 | Nặng | Đã sửa | Danh mục dòng 24 ("MVP (chỉ hạ)"), 3.5 dòng 328, dòng 431, tutorial dòng 536 | Arc Eel MVP chỉ hạ, bắt sống ghi Sau MVP. Sim đã gắn nhãn "MVP (chỉ hạ)" |
| N5 | Nặng | Đã sửa một phần, còn nhẹ | Bảng 6b dòng 490-508, điểm 19 dòng 653 | Hệ số đổi sang N chia k(N) của từng dải, đã trích S4 cột dồn và bắt dồn, nói rõ mục tiêu áp cho kiểu chia. Còn: cỡ S bị loại khỏi báo cáo S4 với lý do chưa đúng (R6) |
| N6 | Nặng | Đã sửa | Dòng 359, 6b dòng 509-511, luật 37 dòng 172 | Boss miễn Dùi xung và Súng gây mê nên không có ngưỡng, ngưỡng đơn vị The Wardens nhân 1 + 0,6 (N - 1), BS-1 và BS-2 dùng dòng boss. Hợp lý với C8 (khung dòng 100 không đổi). Bảng 6b bị gãy định dạng, R3 |
| N7 | Nặng | Đã sửa | 3.7 dòng 353 | BS-1 viết lại: pha 2 có Dây nối, Choáng 6 s khi dính phóng điện, Xua đi Tương tác 3 s trong 6 s ở gốc Dây nối, không cần dụng cụ chương 2. Hết mâu thuẫn "rời lõi" và "ngắt khỏi lõi". Còn một ghi chú vật lý, R7 |
| N8 | Nặng | Đã sửa | Luật 36 dòng 171, điểm 20 dòng 654, `map.md:127, 182, 215, 484` | Cửa không khóa, beacon B3 cách D1 6 u để rút giữa trận, hồi boss khi không còn ai trong phòng quá 10 s. Khớp `map.md` (đã sửa theo). Còn lệch nhỏ ở E9, R9 |
| N9 | Nặng | Đã sửa | Luật 37 dòng 172 | Mẫu boss theo `vat-pham.md` (SMP-192, SMP-292 sửa khoang dẫn đường). Khớp `vat-pham.md:371` |
| N10 | Nặng | Đã sửa | `vat-pham.md:302` RCP-124 "Đóng kiện đặc sản Gần", nhãn MVP, Thông dịch viên chương 1, nhận một trong SMP-111..115. Luật 37 dòng 172 | Đặc sản ở MVP có chỗ dùng (kiện đặc sản). SMP-191, 192 nằm trong kho, trạm báo "dùng được khi mở khoang dẫn đường" |
| N11 | Nặng | Đã sửa | Luật 24, mục 9 dòng 594, điểm 19 | Sinh thiết ngoài K9, ghi rõ 0,45 lần và nói nếu GDM muốn K9 áp cả sinh thiết thì đổi giá ở `vat-pham.md`. Chờ GDM chốt nếu muốn |
| N12 | Nặng | Đã sửa | 3.4b dòng 286-316 | Đủ hình dạng, tầm, DMG, báo trước, Đánh, Hồi, hồi chiêu, vé, tốc độ. Tự kiểm: mọi báo trước đúng luật 8, thời gian Đánh khớp tầm chia tốc độ lao (5 chia 12 là 0,4), Nuốt 2 s x 4 Oxy là 8, Vùng hút 4 s x 3 Oxy là 12. Hết chỗ phải đoán |
| L1 | Nhẹ | Đã sửa | Dòng 5 | |
| L2 | Nhẹ | Đã sửa | Dòng 375 | |
| L3 | Nhẹ | Đã sửa | Luật 17 dòng 130 | Hai hệ số riêng, 20 s tính từ lần tỉnh gần nhất khỏi loại đó |
| L4 | Nhẹ | Đã sửa | E18 dòng 459 | |
| L5 | Nhẹ | Đã sửa | E16, E17 dòng 457-458, điểm 19 đến 22 dòng 653-656 | Thứ tự đã đúng |
| L6 | Nhẹ | Đã sửa (ghi nhận) | Dòng 361 | Nói rõ là nhu cầu cơ chế, đồng bộ khi mở BS-2 đến 5 |
| L7 | Nhẹ | Đã sửa | Danh mục dòng 43, bảng boss dòng 84 | |
| L8 | Nhẹ | Đã sửa | E19 dòng 460, luật co-op dòng 516 | |
| L9 | Nhẹ | Đã sửa | Tiêu chí 9 dòng 580 | Kiểm đòn vùng 2,5 u. Vùng 4 u của BS-1 chưa có, R7 |
| L10 | Nhẹ | Đã sửa | Dòng 518 | 60 giây, khớp `nguoi-choi.md:143` |
| L11 | Nhẹ | Còn | 3.7 dòng 353, mục 8 | BS-1 nặng hơn "boss nhỏ" của khung dòng 175, và S5 chưa có kết quả trong `ket-qua/` (hàm S5 mới có trong `sim-combat.mjs` lúc 04:22, chưa sinh file). Cần có số S5 trước khi chốt, R10 |

## Lỗi mới và lỗi còn
| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|---|
| R1 | Nặng | 3 (sim) | combat:398-411, 500-508 so với `tools/sim-combat.mjs:34`, `tools/ket-qua/sim-combat.md` | Sim chưa đọc được bảng 3.4 và 3.4b mới. `sim-combat.mjs` dòng 34 vẫn tách đòn từ cột 5 của 3.4 bằng dạng "DMG, báo trước, hồi chiêu", mà 3.4 giờ chỉ ghi tên đòn. Chạy lại `node tools/sim-combat.mjs --seed 1 --lan 2000` ra file tạm: cột Oxy mất do đòn về 0,0 cho mọi loài (Arc Eel trung bình trước 14,3, nay 0,0), và vài số trong 3.8 lệch file kết quả 04:11 | Rerun so với file: DL-X02 Mirror Mantis giây hạ 18,3 thành 20,4 và ròng 1,82 thành 1,77, DL-M05 giây hạ 36,6 thành 36,1, DL-X04 giây bắt 18,1 thành 17,9 và ròng 1,05 thành 1,07, DL-G04 vật tiêu hao 1,5 thành 1,6, S4 nhiều ô lệch 0,01 đến 0,18 (DL-M04 N = 2 hạ dồn 1,03 thành 0,89). GDD dòng 398-411 và 500-508 khớp file 04:11 chứ không khớp sim hiện tại. `sim-combat.mjs` đang được sửa lúc 04:22 nên có thể gd-tech đang xử lý | gd-tech cho sim đọc 3.4b, sinh lại `ket-qua/sim-combat.md` (có S1 Oxy thật, S5 boss), rồi gd-combat đối chiếu lại 3.8 và 6b. Không chép số tay | gd-tech, gd-combat |
| R2 | Nặng | 2 | combat:245 so với 140 | Bảng 3.2 vẫn ghi "Bắt S bằng tay 0,5 s, khoảng 0,3 đến 1 s" trong khi luật 19 (dòng 140), dòng 429 và `tham-so/combat.json` (`batTay: 1.5`) đã đổi 1,5 s. Một tham số hai giá trị trong cùng file, dev đọc bảng tham số sẽ dựng 0,5 s. Khoảng an toàn 0,3 đến 1 s cũng không còn chứa 1,5 | combat:140, 245, `combat.json:43` | Sửa dòng 245 thành 1,5 s, khoảng an toàn đề xuất 1 đến 2 s | gd-combat |
| R3 | Nhẹ | 1 | combat:490-513 | Bảng 6b gãy. Dòng 500-508 chèn bảng S4 và đoạn văn vào giữa bảng, nên 5 dòng sau (509-513: Sinh lực boss, ngưỡng đơn vị The Wardens, ngưỡng boss, sát thương, vé) mất tiêu đề cột. Không render đúng, dev có thể bỏ sót hệ số boss | Dòng 508 là đoạn văn, dòng 509 bắt đầu bằng "|" | Chuyển 5 dòng 509-513 lên liền sau dòng 498, đặt bảng S4 và đoạn văn dưới bảng | gd-combat |
| R4 | Nhẹ | 2 | combat:564, 413-418, 424, 150 | Mục tiêu S2 chưa đồng bộ: dòng 564 vẫn ghi "ròng mỗi phút gấp 1,2 đến 1,6 lần, không hơn" nhưng bảng "Hai thước đo" (dòng 418) đổi thành "từ 1,0, cỡ M không quá 1,6, cỡ S được vượt" và dòng 424 gom "Trong 1,2 đến 1,6". Luật 24 chưa nói giá trị mẫu tính gộp hay sau trừ vật tiêu hao: gộp thì DL-G05 là 30,7 chia 6,0 bằng 5,12, ngoài 1,5 đến 2 (`vat-pham.md:60` định nghĩa là ròng sau trừ vật tiêu hao) | combat:150, 564 | Đồng bộ dòng 564 và 424 theo dòng 418. Thêm "sau khi trừ vật tiêu hao kỳ vọng" vào luật 24 | gd-combat |
| R5 | Nhẹ | 4 | combat:429, 140, 259 | Chiến lược Dùi xung rồi bắt tay (không tốn vật tiêu hao, mẫu giữ 3 sao vì Dùi xung 0 sát thương) chưa được đo. Bắt tay 1,5 s làm nó chậm hơn Súng lưới (Choáng 4 s đủ cho khoảng 2 con, lưới 3 con một phát), nhưng chưa có số chứng minh Súng lưới còn đáng mang với Driftmoth và Sting Krill | Dòng 429 "Chưa đo" | gd-tech thêm đường này vào sim S2, báo kết quả | gd-tech |
| R6 | Nhẹ | 4 | combat:508, 6b | Câu "Loài cỡ S không tính: một phát là xong, thêm người không rút ngắn được" không đúng ở co-op. Sinh lực nhân N chia k(N): Driftmoth 10 x 2,21 bằng 22 Sinh lực ở N = 4 dải Gần, cần 3 phát Lao từ. Sim S4 (rerun) cho G01 và G04 hạ dồn 1,29 / 1,54 / 1,84 và bắt dồn 1,23 / 1,47 / 1,73. Cỡ S là toàn bộ loài MVP trừ Arc Eel, nên chỗ này là cái co-op 2 người MVP gặp nhất | `sim-combat.md` bảng 4 dòng 143-147 | Đưa hàng S vào bảng kết quả S4 trong GDD, hoặc nói rõ lý do chấp nhận 1,29 ở N = 2 | gd-combat |
| R7 | Nhẹ | 2 | combat:353, 580 | BS-1 mới: Lõi phóng điện vòng bán kính 4 u báo trước 1,0 s. Luật 8 và đo prototype (0,92 s bay ra khỏi 2,5 u) chỉ chứng minh cho 2,5 u. Vùng 4 u bay thường từ gần tâm cần lâu hơn 1,0 s, người chơi phải bắt đầu rút khi lõi bắt đầu sáng. Ngoài ra ở pha 1 chưa nói thân boss có đánh được khi Neo chưa đứt (3 Neo chỉ cho khoảng 150 sát thương trong 4 s Choáng, dưới 50% Sinh lực 400) | `nguoi-choi.md` vmax 6 u/s, 3.1 dòng 226 | Thêm tiêu chí cho vòng 4 u, ghi pha 1 thân đánh được lúc nào | gd-combat, gd-tech |
| R8 | Nhẹ | 3 | combat:88, 103 | Tóm tắt và mục 1 vẫn nói bắt sống "tốn chỗ túi", trái luật 21 (Lồng mẫu không chiếm túi) | Dòng 88 so với 147 | Bỏ "tốn chỗ túi" | gd-combat |
| R9 | Nhẹ | 3 | combat:450 so với 171, `map.md:484` | E9 nói boss chỉ hồi "khi cả nhóm đã rời phòng (về trạm hoặc bị kéo về)". Luật 36 và `map.md:484` còn điều kiện "không còn ai trong phòng quá 10 giây" (người rút ra bằng D1 nhưng chưa về trạm) | Ba dòng đối chiếu | Sửa E9 cho khớp luật 36 | gd-combat |
| R10 | Nhẹ | 2 | combat:385, 566, 568 | Dòng 385 "Giờ chạy 20:53 UTC" cũ (file kết quả hiện sinh lúc 21:11 UTC). S1, S5, S6 chưa có kết quả hợp lệ trong GDD. Mục 3.8 không nói sim nào chưa khớp 3.4b (R1) | `sim-combat.md:3` | Cập nhật khi R1 xong | gd-tech, gd-combat |
| R11 | Nhẹ | 4 | combat:172, 80 | SMP-191 và SMP-192 (25 và 30 GTĐ) chỉ dùng ở khoang dẫn đường chương 2, nằm trong kho suốt chương 1. Đã có thông báo "dùng được khi mở khoang dẫn đường", nhưng vẫn là một thứ trị lớn không dùng được ngay. Chấp nhận được, chỉ nhắc theo dõi khi playtest | `vat-pham.md:116, 370-371` | Không cần sửa | gd-combat |

## Trái lời Lead
Không. Đã soát lại L1 đến L17 sau khi sửa: không Halcyon, Tether, Exodus, quán, nợ Oxy. Solace chỉ ở lịch sử dòng 681 (L14). Tên riêng tiếng Anh. Không PvP, không sát thương đồng đội (L3). Không phạt khai thác (L10). Không gạch dài, dấu chấm phẩy, emoji.

## Khung đổi lần 4 (K22 đến K24, C10) có làm combat lệch không
Không lệch. Chi tiết:
| Mục khung | Ảnh hưởng tới combat |
|---|---|
| K22 (tối đa 2 chuyến mỗi ngày, Skiff tính một chuyến) | Boss rút bằng B3 rồi vào lại ở chuyến sau, boss hồi đầy (luật 36, điểm 20): khớp. Không có đường ra lại trong cùng chuyến (C9) nên không phá K1 |
| K23, K24 (ngày không đồng hồ, thoát giữa ngày về đầu ngày, kết game) | Combat không giữ trạng thái giữa ngày. Boss hồi đầy khi vào lại nên không có trạng thái dở dang: khớp |
| C10 (rớt mạng giữ chỗ 15 s rồi tính như bị kéo về K2, host thoát thì về lần lưu gần nhất) | E11 (người bắt rớt mạng) và luật co-op dòng 516 ("người rời phiên giữ hệ số") không mâu thuẫn. GDD chưa nói rõ Lồng mẫu của người rớt mạng bị ghim 1 con như K2. Gợi ý một dòng, thuộc nhẹ, không tính lỗi |
| C8 (khung dòng 100, không đổi) | "Boss (máu, ngưỡng choáng) tăng theo số người": combat đáp bằng cách bỏ ngưỡng boss (boss Bất lực theo cơ chế), giữ Sinh lực x (1 + 0,6 (N - 1)). Chấp nhận |

## Mâu thuẫn chéo còn lại
Không còn mâu thuẫn chéo đáng kể sau khi đối chiếu `nguoi-choi.md`, `vat-pham.md`, `map.md`. Hệ số 6b khớp `map.md` bảng k(N): Gần 1,27 / 1,54 / 1,81, Giữa 1,25 / 1,50 / 1,75, Xa 1,38 / 1,76 / 2,14, Sinh lực N chia k(N) ra 1,57 / 1,95 / 2,21 (Gần), 1,6 / 2,0 / 2,29 (Giữa), 1,45 / 1,70 / 1,87 (Xa). Hàng "Gánh = 1" là hệ quả đại số của hệ số, không phải kết quả sim. Phòng boss BS-2 đến BS-5 vẫn lệch vật dựng với `map.md` nhưng đã ghi nhận ở dòng 361 (Sau MVP).

## Chỗ phải đoán (lớp 5)
Chỉ còn các chỗ nhỏ: thân BS-1 đánh được lúc nào ở pha 1 (R7), vòng 4 u (R7), Lồng mẫu khi rớt mạng (C10). Danh sách 10 chỗ phải đoán vòng 1 đã được xử lý.

## Số kiểm bằng chứng
| Số trong GDD | Nguồn | Kết quả vòng 2 |
|---|---|---|
| 3.8 dòng 398-411 (14 loài) | `ket-qua/sim-combat.md` 04:11 | Khớp 14/14 |
| 3.8 dòng 398-411 | Rerun hiện tại | Lệch 5 hàng (R1) |
| 3.8, câu hỏi "bắt tay 1,5 s có làm lệch số S không" | Rerun, hàng DL-G01, G02, G04, M04, X01, X05 | Không lệch (các hàng cỡ S giữ nguyên, sim dùng đường lưới) |
| S3 "18 đến 32%" (dòng 435) | Rerun S3 N = 4: 32, 27, 18, 20, 20, 20, 20 | Khớp |
| S4 dòng 504-506 | `ket-qua/sim-combat.md` 04:11: hạ dồn M, L 1,01 đến 1,16 / 1,04 đến 1,24 / 1,07 đến 1,38, bắt dồn 0,65 đến 1,19 / 0,69 đến 1,39 / 0,76 đến 1,50 | Khớp file 04:11. Rerun ra 1,02 đến 1,16 / 1,06 đến 1,24 / 1,07 đến 1,38 và 0,65 đến 1,20 / 0,69 đến 1,43 / 0,76 đến 1,51 (R1) |
| 6b hệ số Sinh lực và ngưỡng, k(N) | Tự tính từ `map.md:392-394` | Đúng 9/9 ô |
| 3.4b báo trước theo luật 8 | Soát từng dòng | Đúng, 0 vi phạm (Vùng hút 6 u báo trước 1,0 s được miễn theo luật 8) |
| Mẫu sinh thiết, K9 | `vat-pham.md` | Đã ghi vào mục 9 |
| ID tham chiếu (SMP, LIV, BPS, RES, STY, CON, TOL) | `vat-pham.md` grep | Đủ, validator `validate-gdd.mjs` vòng 2 0 lỗi, 328 ID |

## Tiêu chí nghiệm thu rút từ mục 8
| Feature | Category | Acceptance Criteria đo được | MVP hay Sau MVP |
|---|---|---|---|
| Báo trước đòn | Combat | Mọi đòn 3.4b: báo trước tối thiểu 0,7 s (hẹp dưới 15 Oxy), 0,8 s (từ 15 Oxy), 1,0 s (vùng bán kính từ 2 u). Có hình và tiếng. Hiện 0 vi phạm | MVP |
| Miễn sát thương, Lướt | Combat | Hai đòn cùng khung chỉ trừ Oxy một lần. Miễn 0,8 s, Lướt miễn 0,2 s đầu | MVP |
| Choáng và DR | Combat | Choáng 4 s, hệ số DR riêng Choáng và Mê, trần 3, về 1 sau 20 s. Sim S3 dưới 70% với 4 người (đạt, 18 đến 32%) | MVP |
| Bắt sống cỡ S | Combat | Súng lưới tối đa 3 con trong 1,5 u, tiêu 1 Lưới cuộn. Bắt tay giữ 1,5 s (sửa R2). Lồng 3 con, không chiếm túi, không làm chậm. Lồng còn 1 chỗ bắt 1 con (E18) | MVP |
| Chất lượng mẫu | Combat | 70% là 3 sao, 30% là 2 sao, dưới 30% là 1 sao. Kết nhanh cho 2 sao | MVP |
| Ghim lồng | Combat | Bị kéo về giữ 1 con sao cao nhất | MVP |
| K9 | Kinh tế | Giá trị mẫu sống sau trừ vật tiêu hao chia giá trị hạ từ 1,5 đến 2 (script của gd-items). Ròng mỗi phút từ 1,0, cỡ M không quá 1,6 (sim S2) | MVP |
| Loài và boss MVP | Phạm vi | 4 loài dải Gần (Arc Eel chỉ hạ) và BS-1. Không xuất hiện thứ Sau MVP | MVP |
| BS-1 một mình | Combat | Thắng được một mình bằng hạ và Xua đi trong 2 đến 4 phút. Cửa không khóa, rút qua B3, hồi đầy khi phòng trống quá 10 s. Cần số S5 (R10) | MVP |
| Co-op hệ số | Co-op | Sinh lực và ngưỡng Driftlife N chia k(N), boss 1 + 0,6 (N - 1). Gánh mỗi người kiểu chia 1,00. Kiểu dồn đọc để biết, không mục tiêu | MVP (2 người) |
| Tiêu chí 8 và 9 | Hit feel | Prototype bay phím T: người mới né đòn hẹp 0,7 s và vùng 2,5 u báo trước 1,0 s ít nhất 70% sau 3 lần thử | MVP |
| Súng gây mê, Ngủ, Phao kéo, Sinh thiết | Combat | Mê sau 1,5 s, Ngủ 12 s, Phao kéo 3 s, Kim 2 s | Sau MVP |
| The Wardens, BS-2 đến BS-5 | Combat | Khiên, lưới trói, mỗi boss hạ được một mình | Sau MVP |
| Driftlife sổng trong trạm | Trạm | Tóm 0,8 s, ăn hàng 1 đơn vị mỗi 20 s | Sau MVP |

## Bỏ qua / không kiểm được
- Tiêu chí 8 và 9 (người thật trên prototype bay), build Unity, độ phân giải, gamepad: BLOCKED, không có môi trường.
- Số S5 (thời lượng BS-1) và S1 (Oxy thật) chưa có kết quả hợp lệ: sim đang sửa (R1, R10). Cần chấm lại phần này sau khi gd-tech xong.
- Không chấm nội dung `vat-pham.md`, `map.md`, chỉ đối chiếu các dòng dẫn chiếu combat. Validator `validate-gdd.mjs` chạy lại vòng 2: 0 lỗi, 328 ID.
- Đã ghi nhận không sửa file nào ngoài `qa/`.
