# GD-031 ux-ui

Cập nhật 09:05: hai lỗi chéo mới (màu slot ở dòng 30 trái `ho-so-nhan-vat.md` luật 6, phím Ghim món gamepad ở dòng 371 trái `nguoi-choi.md:200`) đã sửa lúc 09:03, QA grep xác nhận. Kết luận vẫn ĐẠT, 0 chặn, 0 nặng.

ĐẠT (vòng cuối, sau đợt 4) - 0 chặn, 0 nặng trong `ux-ui.md`, còn 3 lỗi nhẹ của gd-ux. Phần chưa khớp nằm ở `nguoi-choi.md` (lỗi chéo của gd-character, không tính của gd-ux).
Giờ sửa file khi chấm: `ux-ui.md` 08:54 (ls -l, đứng yên sau 20 giây chờ), `strings.tsv` 08:54, khung `00-khung-game.md` 04:54 (K22 đến K27, C10). `nguoi-choi.md` vẫn 04:03 (chưa ai sửa từ vòng 2). Vòng chấm: cuối (3).

## Vòng cuối
Máy: `kiem-ux.mjs` thoát 0, 0 lỗi (35 màn, 15 HUD, 10 HCH, 4 HTR, 36 bước, 243 chuỗi, 34 luật). `validate-gdd.mjs` báo 9 lỗi, cả 9 gán gd-character (`nguoi-choi.md` dòng 120, 121, 221, 222, 291, 310, 347 và `ho-so-nhan-vat.md` dòng 215), 0 lỗi gd-ux. Bảng 2.13 so `strings.tsv` đã kiểm ở vòng 2, vòng này kiểm bằng grep các chuỗi mới: `tut.ping_oxy`, `lbl.orders_by_players`, `lbl.lost_since` ("Mất việc từ: {point}"), `hud.oxy.refill`, `hud.oxy.refill_max`, `err.no_use_choking`, `btn.skip_shift`, `lbl.last_save` đều có trong tsv.

### 8 lỗi nhẹ vòng 2
| # | Việc | Trạng thái |
|---|---|---|
| 1 | UI-44 "không mất ngày" mâu thuẫn K23 | Đã sửa: dòng 213 ghi "mất việc từ lần lưu gần nhất, hiện 'Mất việc từ: {point}'", luật 23 (dòng 66) ghi "Lần lưu: ..." và nêu chủ phòng thoát thì kết thúc phiên cả nhóm. Khớp K23 và C10 |
| 2 | Mockup bảng tàu thiếu Bỏ ca, thuật ngữ trôi | Một nửa: mockup đã có [Bỏ ca] (dòng 321). Còn thiếu ghi chú "Đơn theo số người đang chơi" trong hình, và "Ghim nhóm hàng" (UI-14 hành động chính dòng 151, T21) so với "Ghim kiện" (`btn.pin_group`, dòng 88, 321, 611). Xem lỗi 1 bên dưới |
| 3 | HTR-01 thiếu kết quả hết giờ Mở ca và Bỏ ca | Đã sửa (dòng 279: "đồng ý") |
| 4 | T34 T35 bị hoãn khi Oxy dưới 25% | Đã sửa: luật 9 (dòng 52) và tiêu chí 7 (dòng 925) cho T09, T15, T20, T34, T36. T35 đã đổi theo K27 (không dùng khi đồng đội đang ngạt) nên không cần dưới 25% |
| 5 | Thiếu key "Đồng đội ping Cần Oxy" | Đã sửa: `tut.ping_oxy` trong bảng 2.13 (dòng 732) và tsv dòng 189 |
| 6 | Chỉ báo hazard ở mép màn chưa có bên kia nhận | Đã sửa: HUD-06 có mũi tên mép cho đòn, dòng 852 ghi gd-combat nâng báo trước 0,7 và 1,0 giây, gd-world nâng 1 giây. `map.md` dòng 105, 374, 381 xác nhận có chỉ báo mép |
| 7 | HUD-05 và vùng giữa 25 phần trăm | Đã sửa: dòng 849 coi HUD-05 là ngoại lệ (sát mép dưới, cao tối đa 72 px), cột trái 400 px (464 px dưới 480), đo bằng ảnh ở 200 phần trăm |
| 8 | Tham chiếu số lỗi của QA trong GDD | Đã sửa: grep "lỗi 3 của gd-qa" và "gd-qa lỗi 14" ra 0. Còn "Sửa theo gd-qa vòng 1" trong Lịch sử (chấp nhận được) |

### Kiểm tín hiệu đợt 4
| Mục | Kết quả |
|---|---|
| K23 ba điểm lưu | HTR-03 (dòng 281), UI-44, UI-50, luật 23, câu hỏi mở 5 ĐÃ CHỐT. Khớp khung dòng 86 |
| C10 thoát giữa chuyến hay giữa ca | Luật 23: khách rời tính như bị kéo về, chỉ giữ 1 món, một mình hoặc chủ phòng thoát thì mất phần dở từ điểm lưu. Khớp khung dòng 101 |
| K22 | HTR-02, UI-11 khóa kèm "Hôm nay hết chuyến ra ngoài" cả khi đã bỏ ca (dòng 190), UI-14 Bỏ ca cũng khóa cửa khí (dòng 151, luật 28). Khớp `tram-va-cang.md` luật 63 và 65 |
| K27 người ngạt không trao không thả | UI-31 (dòng 161), UI-34 (dòng 164, 206 "Đang ngạt: không trao, không thả đồ"), T35 đổi. Khớp khung K27 và `combat-driftlife.md` E12 (không kéo theo Lồng mẫu của người ngạt). Lưu ý `combat-driftlife.md` luật 25 nói về ghim Lồng mẫu giữ 1 con khi bị kéo về, không mâu thuẫn |
| K26 trần hồi Oxy | HUD-15 (dòng 240) "Còn hồi {n} Oxy", "Đã hồi tối đa chuyến này", "Không dùng được khi ngạt", trần 25 phần trăm khớp khung K26 và `vat-pham.md` luật T8. T36 thêm. Thiếu tín hiệu cho trần 2 bình trong túi mỗi chuyến, xem lỗi 2 |
| Phím G Dùng vật tiêu hao | Dòng 369, ghi "đề xuất", gd-character cần thêm vào `nguoi-choi.md` 2.7. G và D-pad xuống không trùng phím nào |

### Lỗi còn lại
| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|---|
| 1 | Nhẹ | 2 | ux-ui.md:88, 151, 321, 611 so với 237, 443 | Thuật ngữ "Ghim kiện" (nút, mockup, UI-14 Làm) và "Ghim nhóm hàng" (UI-14 hành động chính dòng 151, T21) cùng tồn tại. Mockup bảng tàu vẫn không vẽ dòng "Đơn theo số người đang chơi" dù bảng 2.5 và `lbl.orders_by_players` có | `btn.pin_group` là "Ghim kiện" nhưng hành động chính ghi "Ghim nhóm hàng" | Thống nhất một tên, vẽ thêm dòng ghi chú | gd-ux |
| 2 | Nhẹ | 4 | ux-ui.md:240 so với vat-pham.md luật T8 và dòng 433 | HUD-15 chỉ nói trần 25 phần trăm, không có tín hiệu cho giới hạn "tối đa 2 bình trong túi mỗi chuyến" (80 Oxy, 24,2 phần trăm). Nhặt bình thứ 3 không rõ báo gì. Vị trí HUD-15 "Dưới HUD-01" trùng HUD-03, không có trong mockup dòng 241 đến 256 | Grep "2 bình" trong ux-ui.md ra 0 | Thêm dòng "Túi tối đa 2 bình Oxy" và vẽ HUD-15 vào mockup | gd-ux |
| 3 | Nhẹ | 3 | ux-ui.md:458 (T36) | T36 ghi "phụ thuộc gd-items đưa vật tiêu hao vào chương 1", nhưng `vat-pham.md` đã có CON-101 và RCP-131 nhãn MVP chương 1 | Dòng 303 và 433 của `vat-pham.md` | Bỏ câu phụ thuộc | gd-ux |

### Lỗi chéo gd-character (không tính của gd-ux)
| File:dòng | Việc |
|---|---|
| `nguoi-choi.md` bảng 2.7 (dòng 184 đến 202, sửa 04:03) | Chưa có Kết nhanh Q và B, Bản đồ chuyến M và LB, Sổ tay J và Y, Dùng vật tiêu hao G và D-pad xuống. Dòng 202 vẫn "Mọi phím gán lại được", cần "trừ Esc và Start" |
| `nguoi-choi.md` dòng 120, 121, 221, 222, 291, 310 | Còn "Về an toàn giữ nguyên túi" khi rời phiên hoặc rớt mạng, trái C10 và validator báo lỗi |
| `nguoi-choi.md` dòng 104 (2.3 điểm 8) | Còn "Người ngạt được đồng đội Trao đồ trong 12 giây", trái khung K27 (người ngạt không trao không thả) |
| `nguoi-choi.md` dòng 82 (2.2 điểm 7) | Chưa ghi trần K26 (25 phần trăm bình mỗi chuyến, không dùng khi ngạt) |
| `nguoi-choi.md` dòng 222, 347 và `ho-so-nhan-vat.md` dòng 215 | Còn dấu CHỜ và số ô đai cũ (2, 3, 4 thay vì 3, 4, 5) |
Hệ quả: ux-ui.md:401 và 369 đã ghi sẵn việc chờ gd-character. Chừng nào `nguoi-choi.md` chưa sửa thì bảng phím có hai nguồn không khớp và đường thoát giữa chuyến vẫn lách K2 theo `nguoi-choi.md`. Cần gd-character sửa trước khi giao dev.

## Vòng 2 (giữ lại để tra)

ĐẠT (vòng 2) - 31 trên 32 lỗi vòng 1 đã sửa thật trong `ux-ui.md`, còn 1 lỗi nhẹ chưa xong hẳn. Không còn lỗi chặn hay nặng trong file này, còn 8 lỗi nhẹ (1 cũ, 7 mới) và 5 việc chéo nằm ở file khác.
Giờ sửa file khi chấm: 04:24 (ls -l, 20/11, `ux-ui.md` 1010 dòng, `strings.tsv` 04:24). Vòng chấm: 2.

Máy chạy lại: `node projects/game-moi/ux/kiem-ux.mjs` thoát 0, 0 lỗi (35 màn, 14 HUD, 10 HCH, 3 HTR, 35 bước, 230 chuỗi, 34 luật K C có tín hiệu). `validate-gdd.mjs` 0 lỗi. Tự kiểm thêm: bảng 2.13 so `strings.tsv` khớp từng dòng (0 lệch, cùng số dòng). Grep mẫu 44 nhãn trạng thái và chuỗi mới của bảng 2.5 vào `strings.tsv`, 44 trên 44 có (Kho trống, Túi trống, Hôm nay không có tàu, Chờ tàu đầu tiên, Hết ping, Chờ ping, Ca đang chạy, Chưa gán, Cố định, Chương sau, Xong, Đủ, Trong lịch, Ở bến, Chờ ngoài, Nhóm vừa về, Cách chơi, Đang lưu, Mất tín hiệu, Chờ bạn, Chờ cập nhật, Chưa có đường qua, Dừng chia, Sắp có, Bỏ ca, Mở ca, Đơn theo số người đang chơi và các chuỗi khác).
Trong lúc chấm tác giả sửa thêm ở 04:24 (đồng hồ ngủ 60 giây thành 30 giây theo K23 và `tram-va-cang.md` luật 60, thêm Mở ca sớm và Bỏ ca vào HTR-01 theo luật 64 đến 66, thêm 5 chuỗi). Đã đọc lại các dòng đó và xác nhận khớp.

## Tóm tắt lỗi
| Mức | Số lỗi |
|---|---|
| Chặn | 0 |
| Nặng | 0 |
| Nhẹ | 8 (1 còn từ vòng 1, 7 mới) |

## Trạng thái 32 lỗi vòng 1
| # cũ | Mức cũ | Trạng thái | Chỗ xác nhận |
|---|---|---|---|
| 1 | Nặng | Đã sửa phía UX. Phần `nguoi-choi.md` xem mục chéo | ux-ui.md:368 hàng Ghim món R và Y (khớp `nguoi-choi.md`:197), Menu hành động phụ đổi thành hoán đổi, lọc. 401 ghi rõ cần gd-character cập nhật |
| 2 | Nặng | Đã sửa | Luật 21 (dòng 64): Esc và B đóng màn con trước, Start luôn mở menu, UI-34 Esc không làm gì. Nhắc lại ở 132, 164, 371, tiêu chí 11 |
| 3 | Nặng | Đã sửa | Dòng 44: vùng nhìn tối thiểu 17,8 x 10,0 u, màn hẹp hơn mở thêm chiều cao, không thanh đen từ 4:3 đến 21:9. Tham số 773, điểm tự quyết 979 |
| 4 | Nặng | Đã sửa | Dòng 52 và tiêu chí 7 (dòng 903): chỉ cấm hộp thoại chặn, T13 T14 T18 được hiện cùng Driftlife, dưới 25% Oxy chỉ T09 T15 T20. Xem lỗi mới 11 |
| 5 | Nặng | Đã sửa | HTR-01 (dòng 278), luật 27 (dòng 70): đồng hồ chung hiện cho mọi người ở trạm, kèm tên người chưa trả lời, nút Hủy. Số 30 giây khớp `tram-va-cang.md` luật 60, 61 và khung K23, C5 |
| 6 | Nặng | Đã sửa | UI-14 (dòng 151, 193): Bỏ ca, Mở ca xám khi còn người ngoài chuyến, bến 1 hỏng thì khóa. Khớp `tram-va-cang.md` luật 19, 64, 65, 66. Chuỗi `btn.skip_shift`, `lbl.shift_blocked`, `hud.confirm.skip` |
| 7 | Nặng | Đã sửa | 152 lên 230 chuỗi, khớp tsv, 44 trên 44 mẫu có. Còn thiếu một chuỗi nhỏ, xem lỗi mới 8 |
| 8 | Nặng | Đã sửa | Luật 22 (dòng 65): 4 thanh âm lượng (Tổng, Nhạc, Hiệu ứng, Cảnh báo), chú thích âm bật tắt, MVP không giọng đọc nên không cần phụ đề lời nói. Chuỗi `set.vol_*`, `set.captions`. Tiêu chí 12 |
| 9 | Nặng | Đã sửa | Luật FTUE 7 (dòng 414): Setup là của thế giới ở mốc, gợi ý là của từng người, người vào sau bỏ Setup. T01 có trigger cho người vào sau |
| 10 | Nặng | Đã sửa | T31 đến T35: Lướt tốn Oxy, Bản đồ chuyến, Ping, Chia Oxy, Trao đồ (dòng 450 đến 454). Chuỗi `tut.t31` đến `tut.t35` có |
| 11 | Nặng | Đã sửa | HUD-10 "Chưa có đường qua" và "Cần {tool} để mở", bảng 2.12 K6 và K7 gắn MVP cho vế vật cản |
| 12 | Nặng | Đã sửa | UI-44 có nút "Về menu chính" khi lưu lỗi, HTR-03 "Đã lưu", UI-36 và UI-43 biểu tượng "Đã lưu", UI-10 "Thế giới về lần lưu gần nhất", UI-04 "Khác phiên bản game", HUD-07 mạng ba mức. Còn một lời "không mất ngày" sai, xem lỗi mới 1 |
| 13 | Nặng | Đã sửa phía UX. Gốc ở `nguoi-choi.md` xem mục chéo | Luật 23 (dòng 66), UI-50 (dòng 173, 215): hộp xác nhận nêu hệ quả theo C10, nút Vẫn thoát và Quay lại |
| 14 | Nặng | Đã sửa | Luật 25 (cảnh chặn màn không xảy ra khi ca chạy) và luật 26 (một mình là một người online, người thứ hai vào thì chạy tiếp ngay). Khung C7 chưa có định nghĩa, UX đã đề xuất ở dòng 998 |
| 15 | Nhẹ | Đã sửa | Dòng 45 giải thích 9 px thấp hơn 12 px |
| 16 | Nhẹ | Đã sửa | HUD-03 dùng cùng một biến p, mockup 56/80 (70 phần trăm, đúng "Nặng"), chuỗi `hud.bag.penalty` dùng {p} hai lần |
| 17 | Nhẹ | Đã sửa | HUD-02 "Luôn khi ngoài không gian", mockup sọc bên trái vạch |
| 18 | Nhẹ | Đã sửa | `hud.team.lost` là "Giữ chỗ", thêm `hud.team.hold` "Giữ chỗ {s} giây" |
| 19 | Nhẹ | Đã sửa | Dòng 379: giữ khi sửa và nhấc, bấm khi đặt |
| 20 | Nhẹ | Đã sửa | Cột Vào từ và Ra tới của UI-15, 16, 19, 21, 44 khớp luồng (dòng 89 đến 108) |
| 21 | Nhẹ | Đã sửa | Dòng 996 đổi thành đề xuất thêm mốc đếm vào C5 |
| 22 | Nhẹ | Đã sửa | HC1 đến HC10 thành HCH-01 đến HCH-10, grep `\bHC[0-9]\b` trong file ra 0 |
| 23 | Nhẹ | Đã sửa | UI-12 có sao và giá (dòng 149, 191), thẻ tên chương (luật 24), HCH-09 hiện "Hạng n (a/b)" |
| 24 | Nhẹ | Đã sửa | UI-34, UI-19, UI-43 viết lại (dòng 198, 206, 212) |
| 25 | Nhẹ | Còn một phần | Có tham số cột trái 400 px (dòng 774), nhưng dòng 827 vẫn ghi "mọi phần tử luôn hiện nằm ở mép" trong khi HUD-05 ở "Dưới giữa". Tính vào lỗi nhẹ 7 |
| 26 | Nhẹ | Đã sửa | UI-02 khóa ô 3 và 4 kèm "Sắp có" (dòng 143, 185, 987) |
| 27 | Nhẹ | Đã sửa | `err.host_lost` là "Mất kết nối chủ phòng", `tut.t27` bỏ "cả nhóm" |
| 28 | Nhẹ | Đã sửa | Dòng 830 tính lại với tổng tốc độ 18 u/s ra 0,49 giây và đòi chỉ báo mép màn. Xem lỗi mới 6 |
| 29 | Nhẹ | Đã sửa | HUD-07 sàn 20 Oxy, UI-34 "Ghim giữ lại 1 đơn vị" và "Đang được chia Oxy", UI-35 "Vật nhiệm vụ về chỗ cũ" |
| 30 | Nhẹ | Đã sửa | Wireframe (dòng 309 đến 311) có KH07, KH12, dòng 872 ghi 8 khoang MVP |
| 31 | Nhẹ | Đã sửa | Hai chỉ số ghi "Đo trước, đặt mục tiêu sau 5 buổi playtest" |
| 32 | Nhẹ | Chuyển sang mục chéo | Thuộc `nguoi-choi.md`, không tính lỗi của gd-ux |

## Lỗi (còn và mới)
| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|---|
| 1 | Nhẹ | 2, 4 | ux-ui.md:213 so với khung K23 dòng 86 và ux-ui.md:929 (câu hỏi mở 5) | UI-44 lỗi lưu ghi nút "Về menu chính (không mất ngày, thế giới về lần lưu gần nhất)". Theo K23 lưu lúc ngủ và thoát giữa ngày về đầu ngày, nên thoát khi lưu lỗi mất phần ngày chưa lưu | "không mất ngày" mâu thuẫn "thế giới về lần lưu gần nhất" cùng một ô. Câu hỏi mở 5 (K23 so với 3 điểm lưu tạm của `ky-thuat.md` luật 16) chưa được GDM chốt | Bỏ "không mất ngày", ghi hệ quả bằng số theo luật 2.1.7 (mất việc từ điểm lưu nào). Chờ GDM chốt câu hỏi 5 | gd-ux, GDM |
| 2 | Nhẹ | 2 | ux-ui.md:319, 151, 68 | Mockup bảng tàu chỉ có nút "Mở ca" và "Ghim kiện", thiếu nút Bỏ ca và ghi chú "Đơn theo số người đang chơi" mà bảng 2.5 và 2.12 yêu cầu. Thuật ngữ trôi: `btn.pin_group` là "Ghim kiện", UI-14 hành động chính, HUD-12, T21 dùng "nhóm hàng" | Mockup lệch bảng 2.5 dòng 193 | Vẽ lại mockup, thống nhất "Ghim nhóm hàng" hoặc "Ghim kiện" | gd-ux |
| 3 | Nhẹ | 2 | ux-ui.md:278 | HTR-01 ghi hết giờ thì người chưa trả lời "tự tính theo luật (ở lại trạm, hay sẵn sàng ngủ)", thiếu trường hợp Mở ca sớm và Bỏ ca, nơi `tram-va-cang.md` luật 66 ghi không trả lời là đồng ý | Hai trong bốn loại xác nhận không có kết quả hết giờ | Thêm "đồng ý" cho Mở ca sớm và Bỏ ca | gd-ux |
| 4 | Nhẹ | 4 | ux-ui.md:903, 453, 454 | Tiêu chí 7 chỉ cho T09, T15, T20 hiện khi Oxy dưới 25 phần trăm, nhưng T34 (Chia Oxy) và T35 (Trao đồ) là bước cứu người và người cứu có thể đang 20 đến 25 phần trăm Oxy (T34 cần trên 20 Oxy) | Bước dạy cứu người bị hoãn đúng lúc cần | Thêm T34, T35 vào danh sách được phép hoặc ghi lý do | gd-ux |
| 5 | Nhẹ | 5 | ux-ui.md:461 so với strings.tsv | Dòng "Đồng đội ping Cần Oxy" khi có ping tới (T20, T15) vẫn không có key trong tsv, và tiêu chí 13 chỉ bắt chữ in nháy nên không thấy | Grep "ping Cần Oxy" trong strings.tsv ra 0 | Thêm key hoặc bỏ dòng | gd-ux |
| 6 | Nhẹ | 3 | ux-ui.md:830 | Giải pháp cho báo trước hazard là yêu cầu gd-world và gd-combat có chỉ báo mép màn tối thiểu 0,5 giây, chưa có luật nào ở `map.md` hay `combat-driftlife.md` xác nhận | Chưa kiểm được file kia đã nhận yêu cầu (chỉ grep) | Gửi tin cho hai vai và ghi lại khi họ nhận | gd-ux |
| 7 | Nhẹ | 2 | ux-ui.md:827, 774 | Luật vật lý ghi "mọi phần tử luôn hiện nằm ở mép" và giữ trống 25 phần trăm giữa, trong khi HUD-05 ở Dưới giữa. Chưa có phép tính ở 200 phần trăm cho HUD-05 và HUD-10 | Lỗi cũ 25 chưa xong hẳn | Ghi HUD-05 là ngoại lệ và đo bằng script ở tiêu chí 5 | gd-ux |
| 8 | Nhẹ | 2 | ux-ui.md:773, 998 | Nội dung GDD tham chiếu số lỗi của vòng QA ("trả lời lỗi 3 của gd-qa", "Lỗ hổng gd-qa lỗi 14") sẽ lỗi thời khi file QA đổi | Chữ trong tham số và phản biện | Thay bằng lý do thiết kế | gd-ux |

## Trái lời Lead (liệt kê, hoặc "Không")
Không.

## Mâu thuẫn chéo (file khác nói gì, dòng nào)
Các mục dưới không tính là lỗi của gd-ux, ghi để GDM giao gd-character và GDM.
| File | Việc còn | Trạng thái lúc chấm |
|---|---|---|
| `nguoi-choi.md` bảng 2.7 (dòng 184 đến 202, sửa 04:03) | Thêm Kết nhanh Q và B, Bản đồ chuyến M và LB, Sổ tay J và Y, sửa dòng 202 "Mọi phím gán lại được" thành "trừ Esc và Start". UX đã ghi sẵn ở ux-ui.md:401 | Chưa có (grep "Kết nhanh", "Bản đồ chuyến", "trừ Esc" ra 0 dòng ở bảng 2.7). Ghim món Y đã khớp |
| `nguoi-choi.md` dòng 121, 221, 310 (và 2.9) | Thoát giữa chuyến, kể cả lúc Ngạt, vẫn ghi "Về an toàn giữ nguyên túi", trái khung C10 dòng 98 ("tính như bị kéo về") và UX luật 23. Nếu không sửa thì thoát game vẫn là đường lách K2 và P1 | Chưa sửa |
| Khung K23 dòng 86 và `ky-thuat.md` luật 16 | K23 ghi thoát giữa ngày về đầu ngày, `ky-thuat.md` giữ 3 điểm lưu tạm. UX dùng cách nói "lần lưu gần nhất" cho cả hai | GDM chốt (ux-ui.md câu hỏi mở 5) |
| Khung C7 dòng 95 và C5 dòng 95 | Chưa có định nghĩa "một mình là một người online" và mốc đếm 30 giây tính từ người đầu tiên xác nhận. UX và `tram-va-cang.md` luật 61 đã dùng | GDM thêm vào khung |
| `map.md`, `combat-driftlife.md` | Nhận yêu cầu chỉ báo hazard ở mép màn (ux-ui.md:830) | Không kiểm được |
Đã kiểm khớp: `tram-va-cang.md` luật 19 (Bỏ ca), 60 và 61 (30 giây), 64 đến 66 (Mở ca chỉ khi không còn ai ngoài chuyến, Bỏ ca và Mở ca sớm cần xác nhận 30 giây không trả lời là đồng ý), K22 (HTR-02 "Chuyến n/2"), C10 (HUD-07 Giữ chỗ 15 giây), `nguoi-choi.md` Y ghim món.

## Chỗ phải đoán (lớp 5)
Còn 3 chỗ nhỏ: kết quả hết giờ của Mở ca sớm và Bỏ ca (lỗi 3), có hiện T34 T35 khi Oxy dưới 25 phần trăm không (lỗi 4), mất gì khi thoát lúc lưu lỗi (lỗi 1). Các chỗ phải đoán của vòng 1 (Esc, 16:10, Setup FTUE, "một mình", nút Bỏ ca, âm lượng) đã hết.

## Số kiểm bằng chứng (số nào khớp file sim, số nào không)
| Số | Kết quả |
|---|---|
| 35 màn, 33 MVP, 14 HUD, 10 HCH, 3 HTR, 35 bước, 230 chuỗi, 34 luật | Khớp `kiem-ux.mjs` |
| tsv so bảng 2.13 | Khớp, 0 lệch |
| 56/80 Khối bằng 70 phần trăm | Khớp công thức p của `nguoi-choi.md` |
| 30 giây ra chuyến, 30 giây ngủ, 15 giây Giữ chỗ | Khớp khung K23, C5, C10, `tram-va-cang.md` luật 60, 61 |
| 17,8 x 10,0 u, 12 u/s cộng 6 u/s, 8,9 chia 18 bằng 0,49 giây | Tự tính đúng |
| Số UX khác (24 tham số "ước") | Không có file sim, giữ mức nhẹ |

## Tiêu chí nghiệm thu rút từ mục 8 (bảng Feature, Category, Acceptance Criteria đo được, MVP hay Sau MVP)
| Feature | Category | Acceptance Criteria | Nhãn |
|---|---|---|---|
| Cổng máy UX | Process | `kiem-ux.mjs` thoát 0 (đạt lúc chấm), thêm kiểm chuỗi in nháy ở bảng 2.5 | MVP |
| Đường ra mỗi màn | Navigation | Mỗi màn đi được bằng bàn phím chuột và gamepad. Cần build | MVP |
| Cảnh báo hai kênh | Accessibility | Mô phỏng mù màu 4 nhóm | MVP |
| Chữ và tương phản | Accessibility | 12 px ở 720p, 4,5:1, đo bằng script art | MVP |
| HUD ở 200 phần trăm | Layout | 1280x720, HUD-01 đến HUD-05 trong lề 64 x 36 px | MVP |
| Đổi phím | Input | Mọi hành động bảng 2.9 đổi được, Esc cố định | MVP |
| Esc và Start | Input | Esc đóng màn con trước rồi mới mở menu, Start luôn mở, UI-34 Esc không làm gì | MVP |
| Gợi ý không chặn | FTUE | Không hộp thoại chặn khi Driftlife trong 10 u, hazard báo trước, Oxy dưới 25 phần trăm. Dưới 25 phần trăm chỉ T09, T15, T20 | MVP |
| FTUE kích được | FTUE | Bot gd-tech: T01 đến T35 mỗi bước kích ít nhất 1 lần | MVP |
| Âm lượng và chú thích âm | Accessibility | 4 thanh tách, chú thích bật tắt ở UI-51 | MVP |
| Thoát giữa chuyến | Data | Luôn qua hộp xác nhận nêu hệ quả. Lưu lỗi ở UI-44 có lối ra | MVP |
| Ca cảng không chữ Thua | Tone | Không chuỗi nào chứa "Thất bại" hay "Thua" | MVP |
| Co-op 2 người | Co-op | HUD-07 trễ dưới 0,5 giây, Menu không dừng, một người online thì dừng | MVP (2 người) |
| Đồng hồ xác nhận chung | Co-op | HTR-01 hiện cho mọi người ở trạm: 30 giây ra chuyến, ngủ, mở ca sớm, bỏ ca | MVP |
| Đọc HUD Oxy | Playtest | 3 trên 5 người mới nói được "còn đủ về không" trong 5 giây | MVP |
| Ghim trước ngạt lần đầu | Playtest | Trên 70 phần trăm sau tutorial | MVP |
| 3 và 4 người, thiếu cấp vỏ, sự cố, khoang nuôi, Nghiên cứu, giữ thành bật | Luật Sau MVP | Chưa có tiêu chí, đúng phạm vi | Sau MVP |

## Bỏ qua / không kiểm được
- Chưa có build nên không chơi thật, không đo độ đọc được ở 1280x720 và 200 phần trăm, không đo tương phản và mù màu, không kiểm font tiếng Việt.
- Các file khác chỉ grep (`nguoi-choi.md`, `tram-va-cang.md`, `ky-thuat.md`, khung), không đọc lại từng dòng. `map.md` và `combat-driftlife.md` không kiểm xem đã nhận yêu cầu ở ux-ui.md:830.
- Không đọc lại 225 dòng bảng 2.13 từng chuỗi về nghĩa, chỉ kiểm khớp tsv, giới hạn bằng máy và 44 chuỗi mẫu. Kiểm tay không gồm giới hạn ký tự của 5 chuỗi mới ở 04:24 ngoài kết quả của `kiem-ux.mjs` (0 lỗi).
