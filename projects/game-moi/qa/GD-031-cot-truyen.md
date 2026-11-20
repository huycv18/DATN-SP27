# GD-031 cot-truyen (`gdd/he-thong/cot-truyen.md`)

ĐẠT (vòng cuối) - cot-truyen.md không còn chặn hay nặng, cả ba lỗi chéo của vòng 3 (qua chương, sim sàn ngày, schema điều kiện) đã được xử trong file của người sở hữu, còn 6 lỗi nhẹ của gd-story. Lịch sử: vòng 2 TRẢ LẠI, vòng 3 ĐẠT phần gd-story, mục "Vòng cuối" ở cuối file.
Các mục "Trạng thái lỗi vòng 1" tới "Vòng 3" bên dưới là lịch sử các vòng trước, kết luận hiện hành ở mục "Vòng cuối".
Giờ sửa file khi chấm: cot-truyen.md 04:28, 00-khung-game.md 04:13 (có K22 đến K24, C10), map.md 04:30, tram-va-cang.md 04:30, vat-pham.md 04:30, ux-ui.md 04:30, kinh-te-tien-trinh.md 04:21, ky-thuat.md 04:02, nguoi-choi.md 04:03. Vòng chấm: 2.
Lớp máy: `node projects/game-moi/tools/validate-gdd.mjs` chạy lại: 1 lỗi, không thuộc truyện (vat-pham.md:82, BPR-104 không có định nghĩa, người sửa gd-items). Script riêng cho 36 câu mẫu và dòng Sổ tay: 0 vượt ký tự, 0 chữ số, 0 chấm phẩy, 0 gạch dài, 0 emoji, câu dài nhất 59.

## Tóm tắt lỗi (còn mở sau vòng 2, gồm lỗi mới)
| Mức | Số lỗi |
|---|---|
| Chặn | 0 |
| Nặng | 4 (1 mới, 3 chéo còn mở thuộc file khác) |
| Nhẹ | 9 |

## Trạng thái lỗi vòng 1
| # vòng 1 | Mức | Kết quả | Xác nhận ở đâu |
|---|---|---|---|
| 1 Khe manh mối lệch map.md | Nặng | Đã sửa | cot-truyen:257-259, 301-305, 348-353, 408-412, 446-447 theo bảng khe mục 2.5. map.md đã cập nhật (dòng 183-188 N1 khe M4 cho STY-101, N2 M1 đến M3 và V1, N4 M1 M2, N5 M1, N6 M1 M2 V1, N7 M1 đến M4 và V1, N8 V1 M1). Mỗi MM có khe riêng, không trùng |
| 2 Quest Linh chỉ KH06, ca cảng cần KH07 | Nặng | Đã sửa | cot-truyen:123, 250-252, 276, 651 (C1.7 cần KH06 và KH07, biên 19). tram-va-cang.md:109 luật 15 và :115 luật 18 khớp. vat-pham.md:112-113 hai hàng sửa riêng |
| 3 "Nộp" không định nghĩa, nguy cơ soft lock | Nặng | Đã sửa | Luật 20 (cot-truyen:132) và bảng "Vật nhiệm vụ và chỗ tiêu" (dòng 691-700). Đối chiếu vat-pham.md:478-479, 493-494: STY-102 bị tiêu ở KH08, STY-103 nộp không tiêu, STY-401 và STY-501 nộp không tiêu và chỉ bị tiêu ở RCP-207 sau C5.6 (:342). C2.8 chỉ cần KH08 Hoạt động và STY-103 (dòng 297). C5.6 ghi STY-401 đang nằm trong kho (dòng 437). Không soft lock: xem kiểm lỗi mới 1 |
| 4 Ba định nghĩa "qua chương" | Nặng | Còn (chéo) | cot-truyen luật 1 (dòng 113) và câu hỏi mở 8 (dòng 791) đã chọn một nghĩa, nhưng kinh-te-tien-trinh.md:50 luật 12 vẫn "Qua chương c khi đủ ba cổng" và tram-va-cang.md:102 luật 11 vẫn "xong giai đoạn thì mốc truyện chương đó được mở". Chờ GDM chốt. Xem lỗi N2 |
| 5 Nhịp ngày sim và chuỗi mốc | Nặng | Còn (chéo) | cot-truyen:664-675 đã có bảng sàn ngày 6, 5, 8, 3, 4 (tổng 26). Sim chưa dùng: xem lỗi N3 |
| 6 TA08 ba lần cập bến | Nặng | Đã sửa | tram-va-cang.md:141 luật 38: lần 2 từ ngày kế tiếp sau C3.4, lần 3 từ ngày kế tiếp sau C3.7. Khớp cot-truyen:371-377. Còn lệch nhẹ ở lỗi nhẹ 9 |
| 7 Mốc nhiều điều kiện, schema một điều kiện | Nặng | Còn (chéo) | cot-truyen luật 2 (dòng 114) và mục 6 (dòng 681, 684, 689) đã chuyển sang danh sách điều kiện. ky-thuat.md:67 vẫn `dieuKien ({loai, thamSo})` một điều kiện, chưa có bảng cảnh theo từng người. Xem lỗi N4 |
| 8 Co-op: mốc xong và hàng chờ cảnh | Nặng | Đã sửa | Luật 19 (dòng 131), bảng trạng thái mốc và cảnh tách riêng (dòng 145-161), mục 11 (dòng 800-803), điểm tự quyết 23 |
| 9 Cảnh dài trong ca cảng | Nặng | Đã sửa | Luật 21 (dòng 133), C3.8 hai phần (dòng 384-386), mục 7 (dòng 717-721). ux-ui.md:68 luật 25 khớp |
| 10 Lời trạng thái, chuyện riêng, "một số lần" | Nặng | Đã sửa, sinh lỗi mới | Luật 14, 24, 25 (dòng 126, 136-137), tham số 3, 6, 10 (dòng 610-612), đề cương 15 đoạn (dòng 498-504), số cảnh theo từng người (dòng 605). Xem lỗi N1 |
| 11 C2.4 "loài lớn" | Nặng | Đã sửa trong truyện, khung còn | cot-truyen:284, 293, 313-314 dùng cỡ M. khung:107 vẫn "bắt sống loài lớn (gây mê, kéo về)". Xem lỗi nhẹ 1 |
| 12 Thời điểm người vớt tỉnh | Nặng | Đã sửa | Luật 22, bảng người vớt có trạng thái Hồi sức (dòng 171-181), C1.4 và C1.6 (dòng 248, 250). tram-va-cang.md:108 luật 14 khớp |
| 13 Cột mốc cho vật manh mối, lối vào N6 | Nặng | Đã sửa | Cột "Hiện từ mốc" ở mọi bảng vật, bảng lối vào (dòng 224-235) khớp map.md:175-186 (N6 mở sau C3.5) |
| 14 Cảnh mở chương 2, 3, 5 | Nặng | Đã sửa | Chương 2 và 3 không có cảnh (dòng 286, 333), chương 4 và 5 là cảnh dài có điều kiện riêng (dòng 392, 428), loại điều kiện "lần đầu vào một dải" (dòng 684) |
| 15 Sau kết quay về ngày trước rời neo | Nặng | Đã sửa | Luật 26 (dòng 138), biên 15, điểm tự quyết 16 khớp K24 (khung:87), còn một lệch nhẹ ở lỗi nhẹ 8 |
| 16 12 vật manh mối không có ID | Nặng | Đã sửa (bên vat-pham), truyện chưa ghi lại | vat-pham.md:482-491 đã cấp STY-111, 211, 212, 213, 311, 312, 313, 411, 412, 414 kèm "Mã truyện MMx.y" khớp số mới. cot-truyen vẫn ghi "Chưa có ID". Xem lỗi nhẹ 3 |
| 17 Tetherless | Nhẹ | Đã sửa | Danh sách ứng viên nay 11 dòng, không còn Tetherless (dòng 831-845) |
| 18 "nơi có thật" | Nhẹ | Đã sửa | Dòng 556 và 1043 dùng "bản khảo sát có thật" |
| 19 Bảng lệch cũ, Odile | Nhẹ | Còn một phần | Bảng lệch viết lại 14 dòng nhưng 7 dòng đã hết lệch ở file kia (xem lỗi nhẹ 3). Odile "tới Solace" chờ GDM chốt (mục 10 câu 9) |
| 20 Dòng Soát 63 ký tự | Nhẹ | Còn | Dòng 1130 vẫn ghi 63, thực tế 59. Xem lỗi nhẹ 3 |
| 21 Nhãn MVP, Sau MVP | Nhẹ | Đã sửa | Luật 15 tách thành hai luật, mục 3 và 4 có cột Nhãn |
| 22 C2.2 không mở TA03 | Nhẹ | Đã sửa | Dòng 291, khớp tram-va-cang.md:49 |
| 23 HC09 lõi dẫn đường | Nhẹ | Đã sửa | Dòng 376 và 380, tram-va-cang.md:141, vat-pham.md:495 (STY-502 không sao) |
| 24 Tikko "duy nhất" | Nhẹ | Đã sửa | Dòng 488 |
| 25 Tên The Wardens biết trước C3.8 | Nhẹ | Đã sửa | Dòng 363 |
| 26 "bạn" trong câu mẫu | Nhẹ | Đã sửa | VO_RAF_02 (dòng 941) và VO_AMA_01 (dòng 943) |
| 27 Biên 5 "theo K6" | Nhẹ | Đã sửa | Dòng 637 |
| 28 Vật nhiệm vụ ở khe M | Nhẹ | Đã sửa | Mã V1.1 đến V5.1, khe V1 ở mọi nhánh. Còn một chi tiết nhỏ ở lỗi nhẹ 6 |
| 29 STY-105 ở buồng lái | Nhẹ | Đã sửa | map.md:220 và :228 đặt ở Lõi máy (M3), khớp dòng 410 |
| 30 "Thua trận" | Nhẹ | Đã sửa | Dòng 457 "Serith bị hạ" |
Tổng: Đã sửa 25 trên 30 (trong đó #10, #11, #16 sửa xong phần truyện nhưng để lại lỗi mới hoặc ghi chú cũ). Còn mở 5: #4, #5, #7 (chéo, thuộc file khác, thành N2, N3, N4), #19 và #20 (nhẹ, gộp vào lỗi nhẹ 2 và 3).

## Lỗi (còn mở)
| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|---|
| N1 | Nặng (mới) | 2, 4 | cot-truyen.md:137, 498-504, 610-612, 1100 | Đoạn chuyện riêng của thương nhân (luật 25) chỉ khóa theo số lần giao đủ hàng (3, 6, 10), không khóa theo chương, nhưng lời của đoạn ba nói về sự kiện của chương sau. Người chơi giao nhiều có thể nghe lời "sau này" quá sớm, hoặc nghe lời đã bị truyện chính trả lời | Ilsume đoạn ba "Lời từ biệt đủ nghi thức" (dòng 501) là cảnh chương 5 (dòng 428), Ilsume ghé từ C2.7. Tikko đoạn ba "vẫn ghé khi tàu khác đã bỏ" (dòng 500) và Dromm đoạn ba "lý do chở chuyến hàng cuối" (dòng 503) là chương 5 (dòng 432). Nhem đoạn ba "xin bản sao hộp ghi hành trình" (dòng 504) cần STY-401 (C4.5, ngày 2 của chương 4). Vaeth đoạn ba "sau cú lật" (dòng 502) cần C3.7. Mốc cần 10 lần giao đủ hàng cho cùng một thương nhân, trong khi TA05 vào lịch từ C2.4 và TA04 từ C2.7, nên 10 lần có thể xong trong chương 2 hoặc 3 | Thêm điều kiện thứ hai cho từng đoạn: số lần giao đủ và mốc chương đã xong (Ilsume, Tikko, Dromm đoạn ba sau C4.7, Nhem đoạn ba sau C4.5, Vaeth đoạn ba sau C3.7). Ghi vào luật 25 và mục 3 | gd-story |
| N2 | Nặng (chéo, còn từ lỗi 4) | 3 | kinh-te-tien-trinh.md:50, tram-va-cang.md:102, cot-truyen.md:113, 791 | Hai file chưa theo nghĩa "chương đóng và dải mở theo mốc đóng chương của truyện". Người chơi xong C1.9 mà chưa lắp ENG-101 thì dải Giữa mở theo truyện, nhưng đóng theo kinh tế | kinh-te-tien-trinh.md:50 luật 12 "Qua chương c khi đủ ba cổng ... đã lắp ENG-10c". tram-va-cang.md:102 luật 11 "Xong giai đoạn thì ... mốc truyện chương đó được mở". cot-truyen:791 câu hỏi mở 8 đang chờ GDM. map.md:13-14 và :89 mở dải theo mốc truyện | GDM chốt nghĩa. Nếu theo đề xuất của truyện: gd-economy sửa luật 12 thành gợi ý tiến độ, gd-quan sửa luật 11 thành "xong giai đoạn thì mở thứ của khoang, không mở mốc" | GDM, rồi gd-economy và gd-quan |
| N3 | Nặng (chéo, còn từ lỗi 5) | 3, 4 | kinh-te-tien-trinh.md:330-340, sim/economy/tham-so.json:152, cot-truyen.md:664-675 | Sim kinh tế chưa dùng sàn ngày của chuỗi mốc, nên nhiều kịch bản thấp hơn sàn 26 ngày. Sàn cũng đẩy nhóm 4 người ra ngoài mục tiêu khung mục 9 "45 đến 60% thời gian của chơi một mình" khi so với người chơi một mình giỏi | Bảng 8.1 hiện tại: chương 1 xong ngày 5 với tốt 4 người, trung bình 4 người và tốt 2 người (sàn 6). Cả game tốt 4 người 17 ngày, tốt 2 người 24 ngày, trung bình 4 người 20 ngày (sàn 26). Cả game giờ: tốt 4 người 5,7 giờ, trung bình 4 người 7,5 giờ, trong khi sàn 26 ngày nhân độ dài ngày khung mục 9 (chương 1 15 đến 20 phút, chương 5 25 đến 30 phút, xấp xỉ 8,4 đến 10,8 giờ) cao hơn. Tỉ lệ ngày: sàn 26 chia solo tốt 35 ngày là 74%, trên mục tiêu 45 đến 60%. `nguoi_vot_theo_chuong = [2, 2, 1, 0, 0]` (tham-so.json:152) và điều kiện qua chương (sim-kinh-te.py:308) chưa có sàn. Điều cot-truyen:675 ghi "ngày 2 đến 4" đã cũ, nay là 5 đến 10 ngày | gd-economy và gd-tech đưa sàn 6, 5, 8, 3, 4 vào sim và chạy lại 8.1. GDM xem lại mục tiêu "45 đến 60%" (tính theo giờ hay theo ngày) vì sàn ngày không đổi theo số người | gd-economy, gd-tech, GDM |
| N4 | Nặng (chéo, còn từ lỗi 7) | 3, 5 | ky-thuat.md:62, 67 | Schema dữ liệu chưa theo mục 6 của truyện: một `dieuKien`, không có bảng cảnh theo từng người, `vatKeChuyen` chưa phân vật manh mối và vật nhiệm vụ (khe M và V), mã MM, mốc hiện, khoang nhận | ky-thuat.md:67 `StoryBeatData: id, chuong, truoc, dieuKien ({loai, thamSo}), noi, canh, mo`. cot-truyen:681-689 yêu cầu danh sách điều kiện, bảng cảnh riêng, bảng vật truyện có loại, khe, mốc hiện, khoang nhận, và lưu hàng chờ cảnh từng người. Tiêu chí 11, 12 của truyện chờ validator của gd-tech | gd-tech cập nhật schema và thêm validator (cặp mã truyện với ID, khe, mốc) | gd-tech |
| 1 | Nhẹ | 3 | 00-khung-game.md:107 | Khung mục 7 chương 2 còn ghi "bắt sống loài lớn (gây mê, kéo về)", trong khi cỡ L không bắt sống được. cot-truyen đã viết cỡ M | combat-driftlife.md:137-143 (L chỉ lấy mẫu sinh thiết). cot-truyen:1114 phản biện 9 đang chờ GDM sửa khung | Sửa khung thành "bắt sống cỡ M (gây mê, Phao kéo)" | GDM |
| 2 | Nhẹ | 2 | cot-truyen.md:510, 792 | Odile "tới Solace" giữ có chủ ý nhưng `ho-so-nhan-vat.md:39` luật 8 cấm. Câu hỏi mở 9 chưa chốt | Dòng 792 mục 10 câu 9 "Chờ GDM" | GDM chốt (khuyến nghị giữ, là niềm tin của Odile) rồi gd-character sửa luật 8 nếu giữ | GDM |
| 3 | Nhẹ | 1, 3 | cot-truyen.md:258, 262, 301-304, 348-350, 355, 408-411, 412, 446-447, 702, 754, 1051-1064, 1130 | Nhiều ghi chú trong file đã cũ so với file kia. (a) 10 vật vẫn ghi "Chưa có ID", trong khi vat-pham.md:482-491 đã cấp STY-111 (MM1.2), 211 (MM2.1), 212 (MM2.3), 213 (MM2.4), 311 (MM3.1), 312 (MM3.2), 313 (MM3.3), 411 (MM4.1), 412 (MM4.2), 414 (MM4.4). (b) Dòng 262, 355, 412, 446-447 nói khe M4 ở C3, khe V1 ở N6, "M5", "M2 và M1" là chỗ thêm hoặc gọi khác, nhưng map.md đã khớp. (c) Dòng 702 ghi "Mười một vật còn lại đã có ID" nhưng 23 trừ 10 là 13. (d) Mục 8 tiêu chí 11 ghi "còn 10 vật chưa có ID và 5 khe chưa có". (e) Bảng "Lệch với vai khác" dòng 1051-1057 liệt kê các dòng 1, 2, 3, 4, 5, 6, 7 là "Đang mở" nhưng map.md, vat-pham.md, tram-va-cang.md đã sửa xong. (f) Dòng Soát (1130) ghi câu dài nhất 63 ký tự (thực 59) và vật manh mối "3, 4, 7, 5, 2 sau khi thêm MM3.6 và MM3.7" (nay 4, 6, 6, 5, 2 vật truyện, MM3.6 và MM3.7 không còn) | Điền cột ID vật theo vat-pham, bỏ các câu "map.md đang gọi", chuyển 7 dòng lệch đã xong sang "Đã hết lệch", sửa "Mười một" thành "Mười ba", viết lại dòng Soát | gd-story |
| 4 | Nhẹ | 2 | cot-truyen.md:674-675 | Dòng sàn ngày dùng "một ngày 15 đến 25 phút (khung mục 9)" và "6,5 đến 10,8 giờ", đã cũ so với khung (chương 1 15 đến 20 phút, chương 5 25 đến 30 phút). Kết luận không đổi (sàn thấp hơn 12 đến 15 giờ) | khung:134 "Chương 1: 15 đến 20 phút. Chương 5: 25 đến 30 phút". Sàn chương 1 là 6 ngày nhân 15 đến 20 phút là 1,5 đến 2 giờ, đúng mục tiêu chương 1 (khung:135). Tính lại cả game: khoảng 8,4 đến 10,8 giờ | Cập nhật hai dòng | gd-story |
| 5 | Nhẹ | 2, 3 | cot-truyen.md:314, 664-672 | Sàn ngày không tính hai bước "qua đêm" mà chính truyện đòi. Chương 1: Bộ kích nguồn RCP-205 qua đêm nên vào Cinder lần 2 sớm nhất ngày 3, chương 1 thực sự là 7 ngày chứ không phải 6. Chương 2: chuỗi dụng cụ ở dòng 314 (BPR-102 từ RCP-302 qua đêm, rồi TOL-203 từ RCP-202 qua đêm) đẩy C2.4 tới ngày 4, trong khi bảng ghi ngày 3. Bảng có nói "không tính chế đồ" nhưng qua đêm là ranh giới ngày | vat-pham.md:343 RCP-205 "qua đêm", :341 RCP-302 "qua đêm", :345 RCP-202 "qua đêm". Có thể bỏ bước gây mê (Phao kéo RCP-136 chế 10 giây, loài DL-G03 chỉ cần CON-106) nếu muốn giữ ngày 3 | Chọn một: giữ sàn là cận dưới đã ghi rõ, hoặc tính qua đêm vào (chương 1 là 7, chương 2 là 6, tổng 28) và thống nhất với sim | gd-story, gd-tech |
| 6 | Nhẹ | 3 | cot-truyen.md:306, map.md:223, :228 | V2.1 STY-103 ghi "khe V1 ở lõi dẫn đường" nhưng map.md N2 ghi V1 ở khoang lái. Bảng hòm của map.md cho Wick ghi "STY-601 (M1 đến M3)" trong khi hàng N2 ghi M3 là thẻ tên, M1 và M2 chưa liệt kê STY-211 và STY-101 | map.md N2 hàng bảng: "M1, M2, M3 ở khoang ngủ đông (M3 là thẻ tên STY-601), V1 ở khoang lái (STY-103)". Bảng hòm: "STY-601 (M1 đến M3), STY-103 (V1)" | gd-story đổi "lõi dẫn đường" thành "khoang lái". gd-world sửa bảng hòm của Wick, Lantern, N4, N5 liệt kê đủ vật | gd-story, gd-world |
| 7 | Nhẹ | 2 | cot-truyen.md:620-622, 713-714 | Số cảnh 42 và 171 câu bỏ năm cảnh đánh thức người vớt (3 câu, `MVP` cho Ingrid và Linh), vì mục 2.3 và mục 7 có cảnh đó trong hàng chờ nhưng bảng mục 3 chỉ đếm cảnh của mốc và hai cảnh mở chương | Dòng 193 hàng chờ "cảnh của mốc, rồi cảnh đánh thức". Dòng 714 "Đánh thức người vớt ... Cảnh 3 câu". Thêm 5 cảnh thì 47 cảnh, 171 + 15 = 186 câu, khoảng 14,6 phút đọc | Thêm dòng vào bảng đại lượng tính | gd-story |
| 8 | Nhẹ | 3 | cot-truyen.md:138, 1087, 00-khung-game.md:87 | K24 nói bản lưu "ngay trước khi rời neo", luật 26 của truyện đặt bản lưu sau khi C5.7 và C5.8 đã xong. Hai cách đọc khác nhau về việc người chơi vào lại có thể bấm rời neo lần nữa không | khung:87 "Bản lưu nằm ở ngày cuối, ngay trước khi rời neo". cot-truyen:138 "C5.7 và C5.8 đã xong và không phát lại, Ember không rời neo lần nữa" | GDM sửa K24 thành "ở ngày cuối, sau cảnh kết" hoặc ghi rõ trạng thái | GDM |
| 9 | Nhẹ | 3 | tram-va-cang.md:141, cot-truyen.md:375 | Luật 38 "Lần 1 vào lịch từ mốc C3.3", truyện ghi "vào lịch khi bến KH12 Hoạt động". Nếu mốc C3.3 mở ngay khi Yusuf tới mà bến chưa sửa thì TA08 có thể cập bến vô hiệu | tram-va-cang.md:141 so với cot-truyen:339, 375 | Đổi luật 38 thành "lần 1 vào lịch từ ngày kế tiếp sau khi KH12 Hoạt động" | gd-quan |

## Lỗi mới do chỗ sửa sinh ra (kiểm theo yêu cầu)
| Kiểm | Kết quả |
|---|---|
| Luật 20 "nộp không tiêu" với ENG-105 và STY-401 chương 5 | Không soft lock. vat-pham.md:342 RCP-207 cần 1 STY-501, 1 STY-401, 2 COM-203. :493-494 hai vật nộp không tiêu, vào kho, chỉ bị tiêu ở RCP-207 sau C5.6. cot-truyen:437 C5.6 chỉ cần đã nộp STY-501 và mở RCP-207 với STY-401 đang nằm trong kho. STY-401 không bị tiêu sớm: HC09 sao giữ vật gốc (vat-pham.md:327, 47), C4.5 chỉ nộp. STY-102 bị tiêu ở KH08 (vat-pham.md:118) nhưng C2.8 không đòi nó. Nếu STY-102 rơi lại khe V1 của N1 thì lấy được lần nữa. Còn 1 trường hợp phải ghi: sau khi dùng RCP-207, nếu cần sao lại STY-401 thì không còn (không có luật đòi) |
| Sàn 26 ngày với khung mục 9 | Chương 1: 6 ngày x 15 đến 20 phút = 1,5 đến 2 giờ, khớp mục tiêu 1,5 đến 2 giờ. Cả game: khoảng 8,4 đến 10,8 giờ, thấp hơn 12 đến 15 giờ nên không phá mục tiêu. Sàn tổng đúng 6 + 5 + 8 + 3 + 4 = 26. Kiểm lại chuỗi từng chương theo K22 (2 chuyến, 1 ca, ca sau chuyến) và luật 22, 23: chương 3 và 5 khớp, chương 4 khớp (N7 cần 3 đến 4 chuyến, hai ngày đủ). Lỗi: sàn bỏ qua qua đêm (lỗi nhẹ 5), mục khung 9 "nhóm 4 người 45 đến 60%" bị sàn chạm (lỗi N3) |
| Sim kinh tế với sàn 26 ngày | Chưa khớp (lỗi N3). Chương 1 sim 5 đến 10 ngày so với sàn 6. Cả game tốt 4 người 17 ngày, tốt 2 người 24 ngày |
| Quest Linh KH06 và KH07 | Khớp ba file (cot-truyen:123, 250-252, 276, tram-va-cang.md:109, vat-pham.md:112-113). Biên 19 đã có đường ra (dòng mục tiêu "sửa cảng") |
| C2.4 cỡ M | Khớp với combat (cỡ M bắt bằng Phao kéo, về kho). Điều kiện đã chia: KH10, KH11 Hoạt động và có con cỡ M về kho (dòng 293). Chuỗi dụng cụ ở dòng 314 dùng Súng gây mê dù Phao kéo là đủ cho DL-G03 (lỗi nhẹ 5). Khung còn từ "loài lớn" (lỗi nhẹ 1) |
| Điều kiện danh sách của mốc | Cả 40 mốc có ít nhất một điều kiện thuộc danh sách loại ở dòng 684. C4.7 chỉ "Ngày kế tiếp sau C4.5" và dòng 404 giải thích chạy sau C4.6 nhờ thứ tự |
| Cảnh ngoại lệ C5.7 và C5.8 | Phát liền, ngoại lệ duy nhất của "một cảnh mỗi điểm nghỉ" (dòng 441), có xác nhận rời neo theo K23. Không mâu thuẫn |
| Co-op | Hàng chờ cảnh theo từng người, mốc xong theo thế giới. Người rời phiên theo C10 (biên 13). `nguoi-choi.md:221` vẫn viết "người rời phiên chủ động giữa chuyến thì Về an toàn giữ nguyên túi", trái C10 (khung:98). Không thuộc truyện, ghi cho tổng hợp: người sửa gd-character |

## Trái lời Lead (liệt kê, hoặc "Không")
Không. Đối chiếu lại L1 đến L17 sau khi sửa. grep sạch Halcyon, Tether, Hollower, Bếp trưởng, nợ Oxy. Solace chỉ còn là niềm tin hoặc câu hỏi của nhân vật (dòng 264, 510, 555, 792). Kết mở, không tới Solace (dòng 562, 662, 1043). L2: tên nơi, phe, nhân vật, game đều tiếng Anh. Tên khu trong map nhánh và hazard tiếng Việt do gd-world giữ, tên chương tiếng Việt như khung mục 7, không tính lỗi.

## Mâu thuẫn chéo (file khác nói gì, dòng nào)
| Với file | Điểm lệch còn mở | Dòng | Lỗi |
|---|---|---|---|
| kinh-te-tien-trinh.md | "Qua chương" theo ba cổng. Sim chưa dùng sàn ngày | kinh-te:50, :330-340. tham-so.json:152 | N2, N3 |
| tram-va-cang.md | Xong giai đoạn thì mở mốc truyện. Lần 1 của TA08 | tram-va-cang:102, :141 | N2, lỗi nhẹ 9 |
| ky-thuat.md | Schema mốc một điều kiện, chưa bảng cảnh theo người | ky-thuat:62, :67 | N4 |
| 00-khung-game.md | "Loài lớn" ở chương 2. K24 và luật 26 | khung:107, :87 | lỗi nhẹ 1, 8 |
| map.md | V1 của N2 ở khoang lái. Bảng hòm Wick | map.md:223, :228 | lỗi nhẹ 6 |
| ho-so-nhan-vat.md | Odile "tới Solace" | ho-so-nhan-vat.md:39 | lỗi nhẹ 2 |
| nguoi-choi.md (ngoài phạm vi, ghi cho gd-qa) | Người rời phiên giữ túi, trái C10 | nguoi-choi.md:221 so với khung:98 | gd-character |
| vat-pham.md (ngoài phạm vi) | BPR-104 chưa định nghĩa, làm validate-gdd báo 1 lỗi | vat-pham.md:82 | gd-items |
Khớp: mã khoang KH01 đến KH13, mã tàu TA01 đến TA10, mã boss, mã nhân vật, STY-101 đến STY-601 (trừ ghi chú cũ), lối vào map nhánh (cot-truyen:224-235 so với map.md:175-186), luật 15 và 18 tram-va-cang, luật 25 ux-ui.

## Chỗ phải đoán (lớp 5)
Dev dựng được máy trạng thái mốc, hàng chờ cảnh theo người, bảng lối vào, bảng vật truyện và quy tắc nộp từ mục 2 và 6 mà không phải đoán những chỗ vòng 1 nêu. Còn phải đoán:
1. Đoạn chuyện riêng thương nhân có khóa theo chương không (lỗi N1).
2. Cột ID vật trong 10 dòng "Chưa có ID": phải mở vat-pham.md để tra (lỗi nhẹ 3).
3. Sàn ngày có tính qua đêm không (lỗi nhẹ 5).
4. Nội dung 40 dòng tóm tắt và dòng mục tiêu cho chương 2 đến 5 (mới viết chương 1, dòng 979-1000).
5. Nhóm thương nhân đoạn ba của chương 5 khi người chơi chưa tới chương 5: hiện gì (lỗi N1).

## Số kiểm bằng chứng (số nào khớp file sim, số nào không)
| Số trong GDD | Dòng | Nguồn kiểm | Kết quả |
|---|---|---|---|
| 9, 8, 8, 7, 8 mốc, tổng 40 | 619, 744 | Đếm bảng mục 2.5 | Khớp |
| 4, 6, 6, 5, 2 vật truyện, tổng 23 | 744 | Đếm bảng: MM1.1 đến V1.1 (4), MM2.1 đến V2.1 (6), MM3.1 đến V3.1 (6), MM4.1 đến V4.1 (5), MM5.1 và V5.1 (2) | Khớp. 10 vật chưa ID, 13 đã có, dòng 702 ghi 11 (sai) |
| 42 cảnh, 171 câu, 805 giây, 13,4 phút, 1,9% | 620-623 | Tính lại: 33 x 3 + 7 x 8 + 2 x 8 = 171, 171 x 80 / 17 = 804,7, 13,4 / 720 = 1,86% | Khớp, nhưng thiếu 5 cảnh đánh thức (lỗi nhẹ 7) |
| 14 giây và 38 giây trần cảnh | 661 | 3 x 80 / 17 = 14,1. 8 x 80 / 17 = 37,6 | Khớp |
| Sàn ngày 6, 5, 8, 3, 4 tổng 26 | 664-674 | Kiểm lại chuỗi theo K22, K23, luật 22, 23 | Tổng đúng. Bỏ qua qua đêm (lỗi nhẹ 5) |
| Sàn x độ dài ngày | 674 | khung:134 | Đúng kết luận, số cũ (lỗi nhẹ 4). Chương 1 là 1,5 đến 2 giờ khớp khung:135 |
| 3 ca cảng cho C1.9, 3 lần Maro, 3, 6, 10 lần giao đủ hàng | 607-612 | Nhãn "ước" | Không có nguồn sim. Ghi nhẹ. Riêng chuyện riêng chưa khóa theo chương (lỗi N1) |
| 80 và 60 ký tự | 601-603 | ux-ui.md:741-742 | Khớp |
| 36 câu mẫu, dòng Sổ tay chương 1 (19 dòng) | 934-1000 | Script: tối đa 59 ký tự, Sổ tay tối đa 60, 0 chữ số, 0 từ chỉ số người | Khớp. Dòng Soát (1130) ghi 63, sai |
| Sim kinh tế theo kịch bản | | kinh-te:330-340 | Không khớp sàn (lỗi N3) |
| validate-gdd.mjs | | Chạy lại: 10 file, 338 ID, 1 lỗi (BPR-104, vat-pham.md:82) | Không thuộc truyện |

## Tiêu chí nghiệm thu rút từ mục 8 (bảng Feature, Category, Acceptance Criteria đo được, MVP hay Sau MVP)
| Feature | Category | Acceptance Criteria đo được | Nhãn |
|---|---|---|---|
| Cấu trúc mốc và vật truyện | Data | Mỗi chương có ít nhất 3 mốc và ít nhất 2 vật truyện có khe trong map nhánh: 9, 8, 8, 7, 8 mốc và 4, 6, 6, 5, 2 vật | MVP chương 1, Sau MVP chương 2 đến 5 |
| Quest người vớt | Rule | Mỗi người vớt mở đúng tính năng K12 theo luật 15 tram-va-cang. Linh cần cả KH06 và KH07 | MVP (Ingrid, Linh), Sau MVP (3 người) |
| Không tên cũ | Content | grep 0 tên phản diện cũ. Đạt | MVP |
| Giới hạn thoại | Content | 0 câu vượt 80 hoặc 60 ký tự, 0 chữ số, 0 từ chỉ số người. Đạt (59 ký tự tối đa) | MVP |
| Sổ tay chương 1 | Playtest | Bỏ qua mọi cảnh: Sổ tay có 9 dòng tóm tắt và luôn có một dòng mục tiêu. Cần build | MVP |
| Kéo buồng bị kéo về | Playtest | Bị kéo về khi đang kéo buồng Ingrid: chuyến sau buồng ở vị trí gốc. Cần build | MVP |
| Co-op vật manh mối | Playtest | Người 1 nhặt MM1.1 thì Sổ tay người 2 có MM1.1 ở lần mở kế tiếp. Cần build | MVP |
| Số người tỉnh dậy | Content | Không câu thoại nào sai với số người. Chưa có bảng chuỗi | MVP |
| Che tên người nói | Playtest | Đoán đúng ít nhất 2 trên 3 câu mẫu mỗi người vớt | MVP (Ingrid, Linh), Sau MVP |
| Biết việc kế tiếp | Playtest | Sau C1.9, ít nhất 7 trên 10 người chơi nói được việc kế tiếp không mở Sổ tay. Cần build | MVP |
| Vật truyện đủ ID, khe, mốc | Data | Validator của gd-tech: mỗi vật truyện có ID trong vat-pham.md, khe trong map.md, mốc hiện. Hiện chưa có validator (lỗi N4) | MVP chương 1 |
| Không khóa cứng do tiêu vật | Rule | Mô phỏng chuỗi mốc theo bảng "Vật nhiệm vụ và chỗ tiêu": không mốc đang mở nào cần vật đã tiêu. Kiểm tay vòng 2: đạt | Sau MVP |
| Mốc xong một lần trong co-op | Playtest | Hai người: mốc xong từ người nào cũng ghi một lần, mỗi người thấy mỗi cảnh nhiều nhất một lần. Cần build | MVP |
| Sàn ngày chuỗi mốc | Data | Chương 1 không xong trước ngày 6 với mọi số người. Sim kinh tế phải đạt. Hiện chưa (lỗi N3) | MVP |

## Bỏ qua / không kiểm được
- Không có build: chưa chơi, chưa đo các tiêu chí cần build.
- Không đọc lại mục 12 (tra trùng tên bằng web) và các nguồn tra, chỉ kiểm cấu trúc.
- Không chạy `soat.mjs` của phòng. Dùng script riêng cho câu mẫu và dòng Sổ tay.
- ux-ui.md, ky-thuat.md, nguoi-choi.md, combat-driftlife.md chỉ đọc các đoạn liên quan truyện bằng grep.
- File của vai khác (map.md, tram-va-cang.md, vat-pham.md, kinh-te-tien-trinh.md, ux-ui.md) đang được sửa trong lúc chấm. Dòng dẫn theo lần đọc cuối (04:2x đến 04:30). Cần gd-qa chạy lại kiểm chéo nếu có thay đổi sau đó.

## Vòng 3 (kiểm phần đã đổi, không mở vòng mới)
Giờ sửa file khi chấm: cot-truyen.md 04:41, map.md 04:38, vat-pham.md 04:39, khung 04:13. `node projects/game-moi/tools/validate-gdd.mjs`: 14 lỗi, 0 lỗi thuộc cot-truyen.md (gd-character 9, gd-quan 3, gd-items 1, gd-ux 1). Hai lỗi "khe M1 và M2 của N7" báo ở vòng 2 đã hết vì map.md đã gọi tên khe (map.md hàng N7). Script riêng: 36 câu mẫu tối đa 59 ký tự, 0 chữ số, 0 chấm phẩy, 0 gạch dài.

Kết luận phần gd-story: ĐẠT. Không còn chặn hay nặng của gd-story. Toàn file vẫn còn 3 lỗi nặng chéo của người khác ở bên dưới.

| Lỗi | Mức | Trạng thái | Xác nhận |
|---|---|---|---|
| N1 chuyện riêng thương nhân khóa theo số lần giao | Nặng | Đã sửa | Luật 25 (dòng 137) cần cả hai điều kiện. Bảng đề cương (dòng 498-504) có cột "Mở sau mốc" cho từng đoạn: Tikko C1.8, C1.9, C4.7. Ilsume C2.7, C3.1, C4.7. Vaeth C2.4, C2.8, C3.7. Dromm C3.1, C3.2, C5.1. Nhem C3.1, C4.4, C4.7. Cả 15 mốc đều tồn tại, đúng chương và tăng dần. Khớp nội dung: đoạn ba của Tikko, Ilsume, Nhem sau C4.7 (Nhem có STY-401 từ C4.5), Dromm sau C5.1 (chuyến hàng cuối), Vaeth sau C3.7 (sau cú lật). Mốc mở tàu khớp tram-va-cang.md:47-56 (TA04 C2.7, TA05 C2.4, TA06 và TA10 C3.1) |
| Nhẹ 3 ghi chú cũ, ID, "Mười một" | Nhẹ | Đã sửa | Cột ID vật điền đủ 23 trên 23 (STY-111, 211 đến 213, 311 đến 313, 411, 412, 414 khớp vat-pham.md:482-491, dòng 725). "Chưa có ID" và "map.md đang gọi" đã bỏ. Dòng Soát (dòng 1159) ghi 59 ký tự và 4, 6, 6, 5, 2 vật truyện. Bảng lệch còn 10 dòng mở |
| Nhẹ 5 sàn ngày bỏ qua qua đêm | Nhẹ | Đã sửa | Bảng sàn 7, 5, 8, 3, 3 (tổng 26, tính lại đúng). Chương 1 tính RCP-205 qua đêm (Cinder lần hai ngày 3, C1.9 ngày 7). Chương 2 đi đường Phao kéo CON-106 chế nhanh, không qua đêm. Chương 5 có RCP-207 qua đêm (ngày 2 chế, ngày 3 sửa giai đoạn 5, C5.7, C5.8). Khớp vat-pham.md:341-345 |
| Nhẹ 4 giờ theo độ dài ngày | Nhẹ | Đã sửa | Dòng 681-682 dùng khung (chương 1 15 đến 20 phút, chương 5 25 đến 30 phút). Tính lại: chương 1 là 7 ngày x 15 đến 20 phút = 1,75 đến 2,33 giờ. Cả game khoảng 8,3 đến 10,4 giờ (tôi tính 8,2 đến 10,6), thấp hơn 12 đến 15 giờ. Chương 1 vượt trần 2 giờ của khung nếu ngày dài quá 17 phút. Tác giả đã ghi và đưa phương án (hạ núm C1.9 xuống 2 ca). Đây là việc của GDM chọn, không phải lỗi của gd-story |
| Nhẹ 7 số cảnh bỏ ba cảnh đánh thức | Nhẹ | Đã sửa | 40 + 2 + 3 = 45 cảnh. 33 x 3 + 7 x 8 + 2 x 8 + 3 x 3 = 180 câu. 180 x 80 / 17 = 847 giây, 14,1 phút, 2,0% của 720 phút. Tính lại khớp |
| Nhẹ 6 V2.1 khe | Nhẹ | Đã sửa | Dòng 306 "N2, khe V1 ở khoang lái", khớp map.md N2 (V1 ở khoang lái). Bảng hòm Wick của map.md đã sửa (không còn "STY-601 (M1 đến M3)") |
| Nhẹ 9 tram-va-cang luật 38 lần 1 | Nhẹ | Đã sửa (bên gd-quan) | tram-va-cang.md:141 nay "Lần 1 vào lịch từ ngày kế tiếp sau khi bến 2 (KH12) Hoạt động", khớp cot-truyen:375 |
| C2.4 | Nhẹ | Đã sửa | Dòng 293 tên "Mẫu sống cho Amara", điều kiện KH10 và KH11 Hoạt động và con cỡ M về kho. Dòng 314 dụng cụ đi đường Phao kéo, không bắt buộc Súng gây mê |
| Nhẹ 8 K24 và luật 26 | Nhẹ | Còn (khung) | Đã chuyển thành lệch 5 chờ GDM (dòng cuối file), không phải lỗi của truyện |
| Nhẹ 1 khung "loài lớn", Nhẹ 2 Odile | Nhẹ | Còn (GDM chốt) | Lệch 4 và 6 chờ GDM. Không phải lỗi của truyện |

Lỗi chéo còn mở, thuộc người khác (không tính vào ĐẠT của gd-story):
| # | Mức | Việc | Người sửa |
|---|---|---|---|
| N2 | Nặng | "Qua chương" còn ba định nghĩa: kinh-te-tien-trinh.md luật 12 (các cổng kinh tế) và tram-va-cang.md luật 11 (xong giai đoạn thì mở mốc truyện) chưa theo luật 1 của truyện. Chờ GDM chốt mục 10 câu 8 | GDM, rồi gd-economy và gd-quan |
| N3 | Nặng | Sim kinh tế chưa dùng sàn 7, 5, 8, 3, 3 (đang dùng bộ cũ 6, 5, 8, 3, 4). Với sàn, nhóm bốn người hết game ở ngày 27, khoảng 72% thời gian chơi một mình, trên mục tiêu 45 đến 60% của khung mục 9. GDM chọn đổi mục tiêu co-op hay hạ sàn. Thêm: chương 1 sàn 1,75 đến 2,33 giờ so với trần 2 giờ của khung | GDM chọn, gd-economy và gd-tech chạy lại |
| N4 | Nặng | `ky-thuat.md:67` schema `StoryBeatData` còn một điều kiện, chưa tách cảnh theo người, chưa có loại, khe, mốc hiện, khoang nhận cho vật truyện, chưa validator cặp mã truyện với ID và khe | gd-tech |
Ngoài phạm vi truyện: nguoi-choi.md và ux-ui.md:940 còn cho người rời phiên giữ túi, trái C10 (gd-character, gd-ux). vat-pham.md:82 BPR-104 (gd-items). tram-va-cang.md và vat-pham.md còn lỗi kiện CGO-411, CGO-511 không nhóm (gd-quan, gd-items).

## Vòng cuối (sau đợt 4, khung lần 5 K22 đến K27, log GDM dòng 61 đến 80)
Giờ sửa file khi chấm (đã chờ đứng yên): cot-truyen.md 08:57, khung 04:54, map.md 08:56, tram-va-cang.md 08:57, kinh-te-tien-trinh.md 08:52, ky-thuat.md 08:54, vat-pham.md 08:53, ux-ui.md 08:54, nguoi-choi.md 08:57, ho-so-nhan-vat.md 08:55. `node projects/game-moi/tools/validate-gdd.mjs`: 0 lỗi (10 file, 379 ID). Lần chạy đầu cùng giờ báo 8 lỗi gd-character, hết sau khi gd-character sửa xong. Script riêng: 36 câu mẫu tối đa 59 ký tự, 0 chữ số, 0 chấm phẩy, 0 gạch dài, 0 emoji.

Kết luận: ĐẠT. Không còn chặn hay nặng. Chuỗi mốc, vật truyện, khe, ID và số tính đều khớp các file còn lại.

Ba lỗi chéo của vòng 3:
| Lỗi | Trạng thái | Xác nhận |
|---|---|---|
| N2 "qua chương" ba nghĩa | Đã xử | khung K25 (dòng 88). kinh-te-tien-trinh.md:50 luật 12 "Qua chương theo K25 ... Kinh tế không có cổng chương riêng". tram-va-cang.md:103 luật 11 "Mốc đóng chương của truyện chỉ kích hoạt khi giai đoạn động cơ đã lắp ... Trạm không có cổng chương riêng". cot-truyen luật 1 (dòng 113) và năm mốc đóng chương C1.9, C2.8, C3.8, C4.7 có điều kiện giai đoạn 1, 2, 3, 4 (dòng 253, 297, 344, 402). C5.7 vốn cần giai đoạn 5 (dòng 438) |
| N3 sim sàn 26 ngày, mục tiêu co-op | Đã xử | GDM chốt log 69: giữ sàn, mục tiêu nhóm 4 là 60 đến 75%. kinh-te-tien-trinh.md:230 sim dùng sàn 7, 5, 8, 3, 3. Bảng 8.1: mọi kịch bản xong chương 1 từ ngày 7, xong game nhóm 4 người ở ngày 24 đến 27, không dưới 26 ở kịch bản tệ và trung bình. Dòng 350 nhóm 4 bằng 73%, trong 60 đến 75%. Dòng 348 độ dài ngày 14,8 và 27,7 phút trong khoảng khung. Trung bình một người 13,4 giờ trong 12 đến 15 giờ. Ghi chú: sàn chương 1 là 7 ngày x 15 đến 20 phút = 1,75 đến 2,33 giờ, trên trần 2 giờ ở đầu cao, sim đo ngày chương 1 14,8 phút (khoảng 1,7 giờ) nên trong mục tiêu. Không phải lỗi |
| N4 ky-thuat.md:67 schema điều kiện | Đã xử | ky-thuat.md:68 `StoryBeatData` có `dieuKien (list {loai, thamSo}, mọi điều kiện cùng đúng, không có "hoặc")`, `ClueData` có itemId, mocHien, khe, mucSoTay. Dòng 97 và 137 tách hàng chờ cảnh và cảnh đã xem theo từng người |

Các mục theo yêu cầu:
| Kiểm | Kết quả |
|---|---|
| K25 một nghĩa | Khớp ba file (khung:88, kinh-te:50, tram-va-cang:103). TA08 lần 3 chỉ vào lịch khi giai đoạn 3 đã lắp (tram-va-cang:142 luật 38, cot-truyen:344). TA06 là tàu truyện cho C5.1 từ ngày kế tiếp sau C4.7 (tram-va-cang:118 luật 20 và lịch sử). Luật 21 và biên 4 của truyện có C5.1 |
| K24 và luật 26, biên 21 | Khớp. K24 (khung:87) "Bản lưu ở ngày cuối với mọi mốc truyện đã xong, Ember còn ở neo, cảnh kết không phát lại, xem lại từ Sổ tay" khớp luật 26 và biên 15. Biên 21 theo C10 và K23 |
| Odile (log 73) | Giữ. ho-so-nhan-vat.md:39 đã đổi theo: Odile giữ niềm tin tới hết chương 3 và mất ở chương 4. Hết lệch với truyện |
| Khung mục 7 "loài lớn" | Đã sửa ở khung (grep không còn) |
| Sàn ngày 7, 5, 8, 3, 3 | Tổng 26, tính lại đúng. Bảng ngày chương 5 dùng "ca cảng có TA06, C5.1" khớp điều kiện mới |
| grep "Sundering" | 0 lần trong cot-truyen.md. Còn trong ky-thuat.md:373 (dòng lịch sử, đúng chỗ), tools/validate-gdd.mjs:35 (mẫu cấm), tools/selftest.mjs (fixture), briefs/dot4 và story/game-story-v3.md (lưu trữ). Không có chỗ nào dùng tên cũ làm tên đang dùng |
| grep "chờ GDM", "Hollower", "CHỜ" | 0 lần trong cot-truyen.md. Mục 10 chỉ còn câu 3 (tên game, Lead). Còn lại "Đã chốt" kèm số dòng log |
| ID STY với vat-pham.md | 23 trên 23 vật truyện đều có ID trong vat-pham.md, 10 ID mới (STY-111, 211 đến 213, 311 đến 313, 411, 412, 414) có "Mã truyện MMx.y" đúng |
| Địa danh Cradle (map.md A04) | Khớp: Collapsed Hold, Main Cryo Deck, Engine Core, Bridge and Archive ở cot-truyen:396-411 khớp map.md:40, 229, 253. Mốc, khe M1 đến M4, V1 khớp |
| The Scattering và nguồn mục 12 | The Scattering thay The Sundering ở mọi chỗ trong truyện (dòng 16, 25, 38, 85, 205, 516, 902, 1061). Mục 12 có hàng riêng và nguồn "The Shattering" Steam (https://store.steampowered.com/app/596000/The_Shattering): đã mở thật, tên The Shattering, phát hành 21 tháng 4 năm 2020, nhà phát triển Super Sexy Software, nhà phát hành Deck13. Khớp câu "game năm 2020 tên gần giống". Các link cũ (Emberwake itch.io và Steam, Cradle, Dungeons and Dragons gizmodo, Solace Apex, Wardens Rising, Aliens Fireteam Elite) không mở lại trong vòng này, đã có từ vòng đầu |

Lỗi nhẹ còn lại (của gd-story, không chặn):
| # | Vị trí | Vấn đề | Đề xuất |
|---|---|---|---|
| 1 | cot-truyen.md:7 | Dòng đầu ghi "khung sửa lần 4 (K22, K23, K24, C10)", nay khung lần 5 có K25 đến K27 | Sửa thành lần 5 |
| 2 | cot-truyen.md:801 | Một dòng lạc ở cuối mục 9 gộp ba hàng "12, 11, 9" của mục 10 (hàng trùng với mục 10 bên dưới), làm gãy bảng | Xóa dòng 801 |
| 3 | cot-truyen.md mục 5 (bullet "gd-economy đã đưa bộ số đầu (6, 5, 8, 3, 4) vào sim ... ngày 27, 72% ... cao hơn mục tiêu cũ") | Cũ: sim nay dùng 7, 5, 8, 3, 3 và nhóm 4 là 73%, trong mục tiêu 60 đến 75% | Viết lại theo kinh-te:230, 350 |
| 4 | cot-truyen.md:1088-1089 (lệch 10, 11) | Cũ: map.md đã có khe M1, M2 của N7 và tên bốn khu Cradle (A04). Hai dòng vẫn "Đã gửi gd-world" | Chuyển sang "Đã hết lệch" |
| 5 | cot-truyen.md:290, 291, 303, 304, 337, 349, 399, 412, 416, 420, 434-436, 446, 447, 449 | Chưa theo tên địa danh tiếng Anh của map.md (log 74): Lantern Outer Ring, Cargo Berth, Lantern Core (A02), Waypost Outer Ring, Waypost Concourse (A03), Rig Landing, Holding Pens, Command Deck, Data Core (A05), và Bridge and Archive thay cho "kho lưu trữ". Truyện còn dùng "vành ngoài", "lõi trong", "bến ngoài", "khu giữ Driftlife", "phòng chỉ huy", "lõi dữ liệu", "kho lưu trữ" | Đổi theo A02, A03, A05 (gd-story duyệt, log 74) |
| 6 | cot-truyen.md mục 12, nguồn tra | Còn link "Sundered" (game tên gần Sundering) trong khi hàng The Sundering đã bỏ | Bỏ link hoặc ghi lý do giữ |
Việc chưa làm, ghi rõ, không tính lỗi: tên game (Lead chọn), Sổ tay chương 2 đến 5 viết khi dựng chương (dòng 977), `Sau MVP`.

Người sửa: gd-story cho 6 lỗi nhẹ trên. Không còn việc của người khác treo ở file này.
