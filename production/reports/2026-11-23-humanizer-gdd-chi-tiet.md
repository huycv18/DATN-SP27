# Chi tiết đánh giá humanizer từng file GDD (2026-11-23)

Bản gốc của 6 subagent, tổng hợp ở `2026-11-23-humanizer-gdd.md`.

## ux-ui.md (1146/1146)
Điểm: 4. Khô, đặc dữ liệu, gần như không có mẫu §1 đến §6 ở thân luật. Tell tập trung ở vài câu mô tả trần, chốt cuối mục và cột lý do của bảng phản biện.

| Mẫu | Số lần | Dòng ví dụ |
|---|---|---|
| §1 Không X mà Y (đuôi phủ định, "chứ không") | 4 | 35, 498, 914, 1067 |
| §2 Câu chốt nhắc lại ý, hàng mảnh phủ định | 2 | 1005, 1084 |
| §5 Bác phương án không ai đưa ra (cột "Đã bỏ", yếu) | 4 | 1119, 1124, 1125, 1129 |
| §6 Bộ ba cho đủ (yếu) | 1 | 9 |
| §25 Viết về tài liệu thay vì nội dung | 4 | 9, 459, 547, 982 |
| §26 Giải thích lại điều người đọc đã biết (lý do chép lại vấn đề) | 3 | 1135, 1136, 1137 |

Năm đoạn nặng nhất:
1. Dòng 914: "Núm gap: cỡ chữ tối thiểu, ngưỡng nhấp nháy và giờ tự tính ở lại là ba tham số nối ý đồ trợ năng và co-op với con số. Chỉnh bằng playtest, không bằng cảm tính." -> mẫu §1 (đuôi "không bằng cảm tính" bác điều không ai nói), §25 (nhận xét về chính bảng trên), "Núm gap" là cụm lạ không nghĩa -> gợi ý viết lại: "Cỡ chữ tối thiểu, ngưỡng nhấp nháy và giờ tự tính ở lại là ba tham số nối ý đồ trợ năng và co-op với con số. Chỉnh bằng playtest."
2. Dòng 1137: "Khung không định nghĩa "một mình" và không nói khi số người đổi lúc đang dừng | Khung chưa định nghĩa "một mình"" -> mẫu §26 (cột Lý do chép lại cột Vấn đề), dòng 1136 và 1135 cùng kiểu ("Người chơi khó đoán...", "Hai bên dễ hiểu khác nhau") -> gợi ý viết lại: để cột Lý do ghi hậu quả cụ thể: "Người thứ hai vào lúc người kia đang ở Menu tạm dừng thì chưa rõ thời gian chạy hay dừng".
3. Dòng 9: "Hệ thống này quy định người chơi thấy gì, bấm gì và học game theo thứ tự nào: 35 màn, HUD ngoài không gian và trong ca cảng, ..." -> mẫu §25 (mở bằng việc tả chính tài liệu) cộng §6 yếu (thấy gì, bấm gì, học gì) -> gợi ý viết lại: "35 màn, HUD ngoài không gian và trong ca cảng, bảng phím cho bàn phím chuột và gamepad, 37 bước FTUE của chương 1, checklist phản hồi cho các khoảnh khắc chính và bảng strings có giới hạn ký tự."
4. Dòng 1067: "Nguyên tắc: một bộ giao diện cho mọi N, không có màn nào chỉ co-op. Thêm người thêm hàng ở HUD-07, không thêm màn." -> mẫu §1 (đuôi phủ định ghép), dòng 1084 "Kiểm: không giao diện nào hỏi ..." nhắc lại đúng ý này (§2) -> gợi ý viết lại: "Một bộ giao diện cho mọi N. Thêm người thì thêm hàng ở HUD-07, không có màn riêng cho co-op." và gộp dòng 1084 thành tiêu chí nghiệm thu.
5. Dòng 35: "bước vào trạm thấy mọi việc cần làm đứng yên trên mặt cắt chứ không ẩn sau menu." -> mẫu §1 (yếu, vế sau là lựa chọn thiết kế có thật nên chỉ sửa nhẹ) -> gợi ý viết lại: "bước vào trạm thấy mọi việc cần làm đứng yên trên mặt cắt, không phải mở menu mới thấy."

Khác đáng sửa nếu có thời gian: dòng 459 và 547 (legend cột bảng người đọc đã thấy, §25), dòng 982 "Một artist, vector. Ưu tiên bộ kit tái dùng. Số của bảng dưới theo mức ưu tiên của MVP." (§25), dòng 1005 "Phản tham chiếu: không đếm ngược hét lên, không chữ Thất bại, ..." (hàng mảnh phủ định, đổi thành "Tránh: đếm ngược hét lên, chữ Thất bại, popup chặn màn khi đang bay, HUD phủ kín màn").

Mặt tốt: Mọi số, ID, phím, giới hạn ký tự nằm trong bảng, câu luật ngắn đủ chủ vị, có điều kiện và ngoại lệ cụ thể (luật 9, 25, 27). Caveat "ước", "Chưa đo", `[GIẢ ĐỊNH]` ở dòng 57, 895, 1044 là báo thật điều chưa biết, không phải §9, đừng xóa. Bảng "Đã bỏ" ở 1090 đến 1129 là nhật ký quyết định, hầu hết phương án bị bỏ là phương án có thật (Camera 12 x 21 của map.md, Diegetic hoàn toàn), chỉ 4 ô ở trên là yếu.

## 00-khung-game.md (295/295)
Điểm: 4. Luật K và C, bảng, mã nguồn (L, G) đọc như người viết. Tell nằm ở lời dẫn pillar và USP, vài mô tả hơi quảng cáo, và ghi chú về lịch sử bản viết.

| Mẫu | Số lần | Dòng ví dụ |
|---|---|---|
| §1 Không X mà Y (đuôi phủ định, "không còn là") | 4 | 87, 143, 280, 286 |
| §15 Cụm "-ing" gắn thêm ý sâu hơn ("từ đó", "thúc đẩy", "giúp") | 2 | 67, 77 |
| §16 Ngôn ngữ quảng cáo ("có chiều sâu", "độc đáo") | 2 | 77, 292 |
| §25 Viết về tài liệu và lịch sử bản viết | 3 | 3, 278, 280 |

Năm đoạn nặng nhất:
1. Dòng 280: "Oxy là thời gian và cũng là máu không còn là USP: Dave cũng dùng O2 làm máu và cũng cho giữ 1 món khi hết O2, nên đây là điểm mượn, giữ ở CP2 và Core Gameplay." -> mẫu §25 (nói về bản USP cũ đã thay) cộng §1 -> gợi ý viết lại: "Oxy vừa là thời gian vừa là máu không tính là USP, vì Dave the Diver cũng dùng O2 làm máu và cho giữ 1 món khi hết O2. Điểm mượn này giữ ở CP2 và Core Gameplay." (hoặc chuyển nguyên câu xuống nhật ký quyết định).
2. Dòng 77: "Cốt truyện có chiều sâu (vụ The Scattering, tên độc tài Daskel, người thừa kế Sevra), nhân vật độc đáo (người vớt về, thương nhân The Veyl mỗi loài một tính cách) ... giúp người chơi không thấy lặp lại" -> mẫu §16 và §15 -> gợi ý viết lại: "Cốt truyện (vụ The Scattering, tên độc tài Daskel, người thừa kế Sevra), người vớt về và thương nhân The Veyl mỗi loài một tính cách, hài nhẹ từ tính cách nhân vật. Cơ chế mới xuất hiện theo chương (bắt sống, nuôi Driftlife, sự cố ca cảng, hộ tống), nên chương sau không lặp chương trước."
3. Dòng 67: "...nâng cấp bộ đồ (...), dụng cụ và trạm, từ đó mở ra khả năng mới (vào dải mới, chuyến dài hơn, bắt loài lớn hơn) và thúc đẩy người chơi tiếp tục khám phá." -> mẫu §15 (đuôi "thúc đẩy ... tiếp tục khám phá" không thêm dữ kiện) -> gợi ý viết lại: "Tally kiếm được dùng nâng cấp bộ đồ (bình Oxy, vỏ, bộ đẩy, túi, đai dụng cụ), dụng cụ và trạm. Nâng cấp mở ra dải mới, chuyến dài hơn, loài lớn hơn để bắt. Đích của cả hành trình là sửa xong động cơ và rời neo."
4. Dòng 87: "Nguyên tắc nền, không phải pillar, nhưng mọi pillar phải tuân theo. Mọi luật đúng với 1 đến 4 người." -> mẫu §1 (bác một cách hiểu không ai đưa ra, vì mục đã tách khỏi CP1 đến CP5 bằng tiêu đề) -> gợi ý viết lại: "Nguyên tắc nền, mọi pillar phải tuân theo. Mọi luật đúng với 1 đến 4 người."
5. Dòng 3: "... sửa lần 2 sau phản biện đợt 1 (log dòng 39 đến 53), sửa lần 3 ..., sửa lần 6 theo Lead sửa phản diện (log dòng 84 đến 92)" -> mẫu §25 (dòng đầu file kể lịch sử viết, khung chưa có bảng lịch sử) -> gợi ý viết lại: "Trạng thái: đã chốt 2026-11-20 theo ủy quyền của Lead, đã sửa 6 lần, lịch sử ở log-gdm-tu-quyet.md (dòng 39 đến 53, 54 đến 60, 61 đến 64, 65 đến 80, 84 đến 92)" hoặc chuyển thành bảng lịch sử cuối file như ux-ui.md.

Khác: dòng 143 "Nuôi là lựa chọn có lợi, không phải nghĩa vụ" và dòng 286 "Hài nhẹ đến từ tính cách nhân vật, không dùng cắt cảnh dài" là §1 yếu (vế phủ định có thật ở mục Cấm nên giữ được nếu muốn). Dòng 278 "bản viết lại lần 2 cùng ngày (log dòng 98, 99)" là §25 nhẹ.

Mặt tốt: Mỗi pillar có Mô tả, Giữ bằng luật, Đo bằng, Cấm kèm số, nên đọc như hồ sơ thiết kế thật. Các vế phủ định ở dòng 106 (nuôi thay vì săn), 167 (không phải đường về an toàn), 285 và 287 (khác Dave the Diver) sửa đúng niềm tin có thật của người đọc, đừng sửa. Cột "Cấm" và nhãn (L), (G) là dữ liệu, không chấm. Các tiêu đề USP tiếng Anh dạng khẩu hiệu (dòng 284 đến 287) là tên sản phẩm có chủ đích, không tính §3 hay §16.

## cot-truyen.md (1317/1317)
Điểm: 3 (1 = giọng AI dày đặc, 5 = như người viết). Phần luật, bảng, tham số khô đúng chất tra cứu, nhưng tài liệu kể quá nhiều về chính nó (đợt, vòng QA, bản trước) và rải đều mẫu "không phải X" ở các đoạn văn xuôi.

Ghi chú máy đếm: máy báo nhãn in đậm đầu dòng bằng 0, nhưng grep thấy 4 dòng bullet bắt đầu bằng nhãn đậm (1029 đến 1032) và 3 chỗ đậm lẻ ở 948, 950. Máy cũng không bắt "không chỉ ... " không có "mà" (dòng 147).

| Mẫu | Số lần | Dòng ví dụ |
|---|---|---|
| §25 Viết về tài liệu thay vì nội dung (so với bản trước, đợt, vòng QA, lịch sử con số, hàng "Hết hiệu lực" còn giữ lại) | khoảng 25 | 3, 7, 11, 37 đến 47, 68, 156, 702, 772 đến 776, 817 đến 819, 880, 950, 1034, 1090, 1231, 1239, 1259 |
| §1 Không phải X mà Y, X chứ không phải Y, đuôi phủ định | 6 | 147, 259, 260, 266, 663, 1241 |
| §15 Cụm "hợp ..." và "gợi ..." gắn vào sự kiện đơn giản | 6 | 1039, 1040, 1041, 1042, 1043, 1044 (và 948 "gợi chuyến đi") |
| §19 Đậm làm nhãn hoặc trang trí | 6 dòng | 948, 950, 1029, 1030, 1031, 1032 |
| §2 Câu chốt lặp ý hoặc câu giải thích ví dụ vừa thấy | 4 | 186, 645, 897, 1135 |
| §26 Giải thích lại điều người đọc đã biết (động cơ Daskel và danh tính Sevra nhắc đi nhắc lại) | 2 cụm | Daskel: 55, 259, 266, 890, 1271. Sevra: 21, 57, 131, 563, 592 |
| §6 Bộ ba hoặc bộ năm cho đủ vế (yếu, chỉ tính cùng dấu khác) | 3 | 51, 645, 858 |
| §3 Câu nghe sâu (yếu) | 2 | 259 "tội của hắn là dùng hận thù để giữ quyền", 1052 "cảm xúc nằm ở điều không nói" |
| §13 Phóng đại ý nghĩa | 2 | 948 "mở đầu một kỷ nguyên mới", 645 "Thắng lợi của kết" |
| §5 Bác một ý không ai đưa ra trong bản hiện hành | 3 | 259, 266, 663 |
| §12 Từ AI quen (yếu) | 2 | 685 "nặng ký", 976 "quan trọng nhất" |

Không thấy: §22 chatbot, §21 ngoặc cong, §8 gạch dài, §20 tiêu đề trang trí, §23 (các câu "chưa tra", "không tìm thấy nguồn" ở 893, 944, 985 là caveat thật, giữ).

Năm đoạn nặng nhất:
1. Dòng 37 đến 47 (bảng "Mốc đổi so với bản trước", cột Trước/Nay): "Mốc đổi so với bản trước (bản đủ ở mục 2.5)" -> mẫu §25 -> gợi ý viết lại: xóa cả bảng khỏi thân GDD, vì mục 2.5 đã có mốc hiện hành. Chuyển một dòng vào "Lịch sử thay đổi": "C3.7 đổi thành Dấu săn trộm, C3.8 thành Cứu Sevra, C4.6 thành Mở hộp ghi hành trình, C4.7 thành giao xong đơn tin mật đầu tiên, C5.1 thành Hộ tống, C5.2 và C5.6 đổi điều kiện."
2. Dòng 772: "Lịch sử con số này: bản đầu ghi 6, 5, 8, 3, 4. Chương cuối sửa còn 3 vì hai chuyến vào Warden Rig làm được trong một ngày." -> mẫu §25 (kể lịch sử sửa số trong thân luật) -> gợi ý viết lại: "Sàn ngày hiện hành là 7, 5, 8, 3, 3 (tổng 26). Chương 1 là 7 vì Bộ kích nguồn chế qua đêm. Chương 5 là 3 vì hai chuyến vào Warden Rig làm được trong một ngày." Bỏ luôn dòng 773 "bộ 6, 5, 8, 3, 4 không còn áp dụng" và dòng 775 "Bảng dưới chỉ để tham khảo, không áp".
3. Dòng 259: "Truyện không kể Daskel như một kẻ tham của: tội của hắn là dùng hận thù để giữ quyền." -> mẫu §1 (phủ định một cách kể không ai đề xuất ở bản hiện hành) cộng §3 -> gợi ý viết lại: "Tội của Daskel là dùng hận thù của một người mất cha để giữ quyền." (Ý "không tham của" đã có ở dòng 55 và 1068.)
4. Dòng 156: "Các luật cũ giữ nguyên số vì file khác đang dẫn số. Luật thêm ở vòng QA đầu nối tiếp ở cuối danh sách, từ luật 19." -> mẫu §25 -> gợi ý viết lại: "Số luật là khóa tham chiếu của các file khác, nên luật thêm sau nằm ở cuối, từ luật 19."
5. Dòng 1040 đến 1044 (cột "Hình tượng cần gợi"): "Hai âm tiết mở, hợp cách nói dễ gần khi hắn đóng vai khách buôn." -> mẫu §15 (cùng khuôn "hợp ..." lặp bốn lần, giải thích tên bằng tính cách) -> gợi ý viết lại: "Maro | MAH-roh | Hai âm tiết mở, nghe dễ gần khi hắn đóng vai khách buôn." Tương tự Tikko: "Nhịp bật ở giữa, khớp thói quen tự xưng tên." Dromm: "Tên ngắn, âm cuối khép, dành cho người chở hàng nặng ít lời."

Các điểm phụ đáng gom khi sửa:
- Dòng 147: "mình không chỉ gom đồ, mình đang lần ra vì sao mình ở đây" -> §1 -> "Người chơi cảm thấy mình đang lần ra vì sao mình ở đây. Mỗi map nhánh mới trả lời một câu và mở một câu."
- Dòng 260: "Đây là cướp bóc được dung túng, không phải canh giữ." -> §1 đuôi -> "Chế độ dung túng cướp bóc và gọi đó là canh giữ."
- Dòng 645 và 897: câu chốt "Điều để mở: hành trình và hành tinh đó." và "Chỉ đo được khi có build và playtest." lặp ý đã có ở 59 và 680 -> §2, cắt.
- Dòng 1231, 1239, 1259: hàng "Hết hiệu lực từ đợt 6" vẫn nằm trong bảng Điểm tự quyết -> §25, xóa hàng hoặc gộp vào Lịch sử thay đổi (số thứ tự 3, 11, 31).
- Dòng 1196 đến 1317 (khoảng 120 dòng): "Lệch với vai khác", "Phản biện khung", cột "Tình trạng" như "Đã gửi gd-economy", "GDM đã nhận, không có dòng log riêng" là nhật ký phối hợp, loại §25 ở quy mô lớn. Riêng "Lịch sử thay đổi" là nơi hợp lệ để kể đợt và vòng QA. Nên tách phần phối hợp ra file riêng hoặc xóa các hàng đã "Xong".
- Dòng 948 và 1029 đến 1032: gỡ đậm. Ví dụ dòng 1029: "Người Trái Đất lấy tên và họ theo xuất thân ..." (bỏ nhãn đậm, bỏ dấu chấm sau nhãn).

Mặt tốt: Phần lõi (luật 1 đến 26, bảng trạng thái, thứ tự xử lý, biên, tham số, yêu cầu tool) viết trung tính, mỗi dòng một khẳng định kèm mã và số, không đệm. Bảng câu mẫu VO_ và khối Voice sheet giữ được giọng từng nhân vật (câu ngắn, có chi tiết riêng như cờ lê, trà, cuộn băng dính), các cụm "không phải X" trong lời thoại là giọng nhân vật nên không nên sửa. Các lời phủ định ở dòng 17, 114, 477, 818 sửa đúng một hiểu nhầm có thật (Wardens không còn là chủng tộc, Sevra không phải người vớt, gói tin mật không phải vật truyện) nên giữ.

## vat-pham.md (730/730)
Điểm: 4/5. Phần lớn là bảng và luật khô đúng chuẩn tra cứu, dấu hiệu AI tập trung ở hai chỗ: câu phủ định kiểu "không phải X" lặp lại ý đã có, và lời kể lịch sử bản cũ nằm trong thân luật (lẽ ra chỉ ở Lịch sử thay đổi).

| Mẫu | Số lần | Dòng ví dụ |
|---|---|---|
| §1 phủ định "không phải X" thêm trọng lượng, đuôi phủ định | 9 | 14, 63, 84, 91, 248, 538, 614, 703, 709 |
| §25 viết về tài liệu hoặc bản cũ thay vì nội dung (thay cho bản trước, đã đổi, đã sửa) | 7 | 3, 60, 63, 133, 204, 383, 718 |
| §26 (dạng tương đương) giải thích lại điều người đọc đã biết, luật nhắc đi nhắc lại | 4 | 15 và 90 và 93 (lồng không chia), 34 và 46 và 550 và 674 (vật nhiệm vụ) |
| §2 câu chốt nhắc lại ý | 2 | 25, 70 |
| §6 bộ ba cho đủ | 3 | 22, 25, 70 |
| §5 bác phương án không ai đưa ra | 1 | 91 |
| §9 qualifier chồng | 0 đáng kể | "Chưa đo" là trung thực, giữ |
| §12, §13, §16, §18, §19, §20, §22 | 0 | không thấy |

Năm đoạn nặng nhất:
1. Dòng 133: "Khung mới (Solace là mồi) làm tên cũ "Lõi dẫn hướng Solace" không còn đúng nên đã đổi." -> mẫu §25 -> gợi ý viết lại: "ENG-105 (Lõi dẫn hướng rời bãi vỡ, giai đoạn 5) không mua được, chế từ vật kể chuyện qua RCP-207 vì đường rời bãi vỡ không ai bán (R2)." Chuyện đổi tên chuyển xuống Lịch sử thay đổi.
2. Dòng 91: "Hệ số 0,75 và 0,50 ở `nguoi-choi.md` là tốc độ kéo vật ngoài không gian, không phải mang hàng." -> mẫu §1, §5, §25 (bác nhầm lẫn từ bản cũ) -> gợi ý viết lại: "Hệ số 0,75 và 0,50 ở `nguoi-choi.md` chỉ áp cho kéo vật ngoài không gian."
3. Dòng 204: "gd-world đã chỉ ra hai núm cho cùng một việc là thừa, tôi bỏ R(N) bằng N mũ 0,36 của bản trước." -> mẫu §25 (kể lịch sử bản cũ trong thân luật) -> gợi ý viết lại: "Co-op chỉ có một núm k(N) ở `map.md`, nên vật phẩm không nhân thêm hệ số theo số người." (dòng 718 và 681 cùng kiểu "bản trước", dòng 681 nằm trong bảng Điểm tự quyết nên chấp nhận được).
4. Dòng 248 (lặp ở 538): "Đây là kiểm nhất quán, không phải sim cân bằng:" -> mẫu §1, lặp ba lần cùng dòng 18 -> gợi ý viết lại: bỏ câu ở 248 và 538, giữ một lần ở dòng 18 "Chưa có sim cân bằng (đợt 2)". Dòng 248 còn lại: "Cột GTĐ mỗi giây là chênh lệch hiệu quả giữa các điểm khi đã ở trước mặt người chơi, chưa tính thời gian bay tới."
5. Dòng 25: "Ba ô dụng cụ ở bậc 0, ba loại thao tác, ba loại vật phẩm." -> mẫu §2 và §6 (câu chốt bộ ba nhắc lại câu trước) -> gợi ý viết lại: bỏ câu này, câu trước đã liệt kê đủ ba dụng cụ và ba thao tác.
Ngoài top 5: dòng 84 "nên tin mật không sinh thêm Tally, chỉ thêm sức nặng truyện và một bước đóng" và dòng 703 "không phải nguồn Tally mới" là cùng một ý hai lần, §1. Đề xuất: "Kiện tin mật có giá bằng kiện vỏ bọc rẻ nhất, thêm một bước đóng mà không thêm Tally."

Mặt tốt: Số liệu, ID, hệ số có nguồn và truy được tới script, câu luật chứa điều kiện cụ thể (ví dụ dòng 46 V4, dòng 53 S3 hệ số 4 lần). Các chú thích "(Nhãn: MVP.)" và cột "Đã bỏ / Đảo" ở Điểm tự quyết là dữ liệu thiết kế, đừng sửa. Dòng 9 (bảng sinh từ script, không sửa tay) là quy ước người đọc không tự suy ra được, giữ. Ghi chú ngoài khung mẫu: văn bản dùng "tôi" ở dòng 204, 695, 718, lệch giọng trung tính của GDD nhưng không phải mẫu AI.

## ho-so-nhan-vat.md (353/353)
Điểm: 4/5. Giọng khô, dữ liệu dày, ít tell kiểu AI. Lỗi nặng nhất là phần thừa của bản nháp (câu và dòng bị dán lặp nguyên văn), thứ hai là câu "không phải X" và lời nhắc quyền sở hữu file lặp ba lần.

| Mẫu | Số lần | Dòng ví dụ |
|---|---|---|
| Phần thừa của bản nháp (tương đương §22 leftovers), lặp nguyên văn | 2 | 22 (câu NP-5 và Sennari lặp hai lần trong cùng đoạn), 111 và 113 (cùng một dòng Sevra lộ ra) |
| §1 phủ định "không phải X", đuôi phủ định | 6 | 42, 67, 121, 125, 126, 270 (42 và 270 mang thông tin ở cả hai nửa, giữ) |
| §25 viết về tài liệu hoặc bản cũ (chỉ trích tóm tắt, không còn là, hồ sơ không viết) | 7 | 3, 7, 39, 40, 77, 101, 121 |
| §2 câu chốt nhắc lại ý | 3 | 41, 178, 313 ("không hồ sơ nào cần đúng N người") |
| §6 bộ ba cho đủ | 2 | 27, 121 |
| §3 câu nghe sâu | 2 | 28 và 269 ("gợi tính cách trước khi họ mở miệng", "nhận ra qua dáng trước khi nói"), 325 ("hài đến từ lệch văn hóa") |
| §3 khẳng định quá mạnh "cách duy nhất khả thi" | 1 | 175 |
| §12, §13, §16, §18, §19, §20, §22 chatbot, §26 | 0 | không thấy |

Năm đoạn nặng nhất:
1. Dòng 22: "NP-5 là Sevra Ilvane, trạng thái thứ hai của TR-2 Ilsume (cùng một nhân vật)." (cả câu này và câu "Chủng tộc: Sennari là chủng của Daskel..." xuất hiện hai lần liền nhau) -> mẫu phần thừa bản nháp -> gợi ý viết lại: xóa bản lặp thứ hai, giữ một lần "NP-5 là Sevra Ilvane, trạng thái thứ hai của TR-2 Ilsume (cùng một nhân vật). Chủng tộc: Sennari là chủng của Daskel, Sevra, Maro và lính The Wardens, không thêm chủng mới."
2. Dòng 111 và 113: "Sevra (NP-5, trạng thái 2, xem mục 2b.5) lộ ra ở cuối chương 3 (C3.8)." -> mẫu phần thừa bản nháp, cùng dòng dán hai lần -> gợi ý viết lại: xóa dòng 113 và dòng trống kèm theo.
3. Dòng 121: "The Wardens là chế độ và quân của Daskel, không còn là một chủng tộc." -> mẫu §25 và §1 (nhắc bản cũ) -> gợi ý viết lại: "The Wardens là chế độ và quân của Daskel." Chuyện "không còn là chủng tộc" đã có ở dòng 353 Lịch sử thay đổi.
4. Dòng 125: "cái nhìn phiến diện của hắn, không phải sự thật" -> mẫu §1 đuôi phủ định -> gợi ý viết lại: "đó là cái nhìn phiến diện của hắn."
5. Dòng 39: "tính cách, nghề, quốc gia, mâu thuẫn, quest: `cot-truyen.md` quyết, file này chỉ trích tóm tắt để art dựa vào." -> mẫu §25 và §26, cùng ý đã nói ở dòng 7 và 77 -> gợi ý viết lại: "Tính cách, nghề, quốc gia, mâu thuẫn, quest theo `cot-truyen.md`." Giữ lời giải thích phân quyền ở dòng 7, bỏ ở 77 và 101.
Ngoài top 5: dòng 126 "chỉ là chi tiết thưởng cho người tinh ý, không phải manh mối bắt buộc (P4)" -> "chi tiết thưởng cho người tinh ý, không ai cần nó để hiểu truyện (P4)". Dòng 178 và 313 lặp lại "không hồ sơ nào cần đúng N người" đã có ở luật 9 dòng 41, bỏ hai bản sau.

Mặt tốt: Bảng nhân vật cụ thể, có hex, chiều cao, silhouette, ngoại hình, biểu cảm, nhãn, đủ để artist làm việc ngay. Có giọng người viết thật ở vài chỗ chi tiết riêng, ví dụ dòng 125 "Sạch vì hắn tin mình đang dọn dẹp" và dòng 326 lý do chọn trắng xương cộng lục acid, giữ nguyên. Tên riêng, mã PC, RS, TR, WD, NP và các số đo là dữ liệu, không sửa.

## tram-va-cang.md (690/690)
Điểm: 3. Phần luật và bảng số khô, đúng giọng tra cứu, nhưng lịch sử sửa đổi và số sim bị kể lại ngay trong thân luật, và có vài câu bác phương án không ai đưa ra.

| Mẫu | Số lần | Dòng ví dụ |
|---|---|---|
| §25 viết về chính tài liệu, nhắc bản cũ hoặc nguồn ngay trong thân bài | 14 | 5, 65, 129, 240, 268, 356, 363, 387, 463, 559, 610, 627, 643, 644 |
| §26 và nhắc lại: số sim chép nhiều nơi dù mục 5 và mục 8 đã có | 6 | 24, 350, 365, 379, 441, 512 |
| §2 câu chốt nhắc lại cam kết "không mất hàng, Hạng cảng không đổi" | 4 | 143, 144, 408, 589 |
| §7 mở câu lặp "Đã đo vòng 2:" | 5 | 467 đến 471 |
| §1 phủ định rồi khẳng định, "chứ không", câu phủ định tách | 4 | 181, 202, 502, 634 |
| §5 bác phương án không ai đưa ra | 2 | 502, 644 |
| §3 khẩu hiệu nghe sâu (yếu) | 3 | 9, 90, 129 |
| §6 bộ ba hoặc dãy phủ định cho đủ (yếu) | 2 | 144, 502 |

Năm đoạn nặng nhất:
1. Dòng 129: "Lập danh mục thành quyết định thật: bán hàng đắt hay giữ chỗ cho hàng tàu tip cao gọi." -> mẫu §25 và §3 (cả câu "Đây là cải thiện theo ý Lead ... (GDM duyệt đợt 9)" là lịch sử duyệt, không phải luật) -> gợi ý viết lại: "Từ chương 1, TA02 chỉ gọi băng hoặc khoáng, nên danh mục không có hai nhóm đó thì Tàu vội không tới và mất tip gấp đôi của nó. Người chơi phải chọn giữa bán hàng đắt và giữ chỗ cho hàng tàu tip cao gọi."
2. Dòng 181: "Không có thưởng riêng cho chế trước hay danh mục rộng." -> mẫu §1 và §5 (không ai đòi thưởng riêng) -> gợi ý viết lại: "Chế trước và danh mục rộng được trả bằng việc bán được nhiều tàu hơn và đơn đặt trước giá cao. Hệ số 1,35 của bậc Hàng chế là giá của loại hàng đó (gd-economy mục 3.1), trả công chế qua giá thùng."
3. Dòng 502: "Ca cảng không giống trò ném đồ hỗn loạn của game co-op party." -> mẫu §5 và §1, đứng cạnh hai phủ định nữa tạo dãy ba -> gợi ý viết lại: "Phản tham chiếu: ca cảng không có đếm ngược ồn ào và không có màn hình thua ca, nhịp chậm hơn game co-op party kiểu ném đồ."
4. Dòng 467: "Đã đo vòng 2: bơm khí chiếm 3,5%, 3,9%, 7,2% Tally ở 1, 2, 4 người." -> mẫu §25 và §7 (mục tên "Đề sim ... việc vòng sau" nhưng 5 dòng đầu là kết quả đã chạy, dòng 472 đến 474 lặp ý nhau) -> gợi ý viết lại: "Bơm khí chiếm 3,5%, 3,9%, 7,2% Tally ở 1, 2, 4 người." Bỏ tiền tố "Đã đo vòng 2:" ở cả 5 dòng và chuyển các dòng kết quả sang mục 8, chỉ giữ dòng còn mở ở mục đề sim.
5. Dòng 559: "Bản cũ chỉ còn trong lịch sử thay đổi" -> mẫu §25 (dòng "Bản cũ của Ember trước đợt 9" trong bảng Lệch khỏi tham chiếu, trong khi dòng 687 của lịch sử đã ghi đủ) -> gợi ý viết lại: xóa cả dòng 559, giữ nguyên danh sách bỏ ở dòng 687. Cùng loại nhưng nhẹ hơn: dòng 356 "(trước là 30%)", 363 "(trước là 240)", 610 "như bản cũ", 627 "bản trước đợt 9", chỉ cần giữ giá trị hiện hành, phần "trước là" để lịch sử.

Mặt tốt: Luật đánh số, bảng tham số có khoảng an toàn và nguồn, bảng trạng thái, thứ tự xử lý khi giao thùng và bảng biên đều cụ thể, đúng giọng tra cứu, không nên đụng. Cột "Đã bỏ" ở bảng Điểm tự quyết là khuôn bắt buộc, không tính §5. Lưu ý riêng: dòng 512 chép lại số sim trong khi `ky-thuat.md` dòng 23 tự nhận "không chép kết luận" thì hai file nên theo một quy ước.

## ky-thuat.md (395/395)
Điểm: 4. Đọc như người viết tài liệu kỹ thuật: luật đánh số, bảng quyền, bảng sự kiện và tham số đều dữ liệu, chỉ vài câu kể về chính file hoặc lặp ý.

| Mẫu | Số lần | Dòng ví dụ |
|---|---|---|
| §25 viết về chính tài liệu, kể lịch sử hoặc cách ghép trong thân bài | 7 | 15, 20, 23, 198, 230, 234, 304 |
| §2 câu chốt nhắc lại ý đã nói ở mục 1 | 2 | 29 và 116 |
| §5 bác phương án không ai đưa ra (yếu) | 2 | 19, 304 |
| §1 phủ định rồi khẳng định (yếu) | 2 | 27, 279 |
| §3 ẩn dụ chung chung (yếu) | 1 | 7 |
| §6 bộ ba cho đủ (yếu) | 1 | 28 |

Năm đoạn nặng nhất:
1. Dòng 23: "File này không chép kết luận để không lệch khi số đổi." -> mẫu §25 (dòng 234 lặp lại gần nguyên văn: "file này không chép để không lệch khi số đổi") -> gợi ý viết lại: "Số liệu sim nằm ở `tools/ket-qua/sim-chuyen.md`, `sim-ca-cang.md`, `sim-combat.md`, mỗi file có mục đối chiếu mục tiêu." Bỏ câu thứ hai ở cả dòng 23 và 234.
2. Dòng 230: "Sự kiện 72 và 73 thêm ở đợt 9 cho ca cảng khung Dave" -> mẫu §25 (lịch sử thêm đã có ở dòng 394, 395) kèm mâu thuẫn: câu cuối dòng 230 nói tab Event Tracking "sinh bằng `tools/xuat-event-tracking.mjs`" trong khi dòng 20 nói không sinh lại bằng tool đó -> gợi ý viết lại: "Sự kiện 67 đến 71 lấy từ bảng sự kiện của `ux-ui.md` mục 6, tham số theo snake_case tiếng Anh (luật 26)." Giữ một trong hai câu về tool, theo trạng thái thật.
3. Dòng 304: "Bảng dưới là điểm cần cân, kiểm lại giá và giấy phép trên trang chính thức trước khi chọn." -> mẫu §25 và §5 ("Phòng không chọn thay dev." cũng lặp ở dòng 19) -> gợi ý viết lại: "Phòng không chọn netcode. Kiểm giá và giấy phép trên trang chính thức trước khi chọn."
4. Dòng 116: "Rời phiên không phải đường về an toàn." -> mẫu §2 (dòng 29 đã nói "không phải đường về an toàn (C10)", câu này lặp ngay sau mệnh đề "theo C10") -> gợi ý viết lại: bỏ câu cuối, giữ "Rời khi đang ngoài chuyến thì tính như bị kéo về (K2, chỉ giữ 1 món), theo C10."
5. Dòng 198: "Sự kiện bổ sung sau QA GD-031 (đánh số tiếp):" -> mẫu §25 (kể lịch sử QA trong thân bảng) -> gợi ý viết lại: "Sự kiện 47 đến 73:". Tương tự dòng 15 "(đợt 9, thay bản GD-030)" nên để ở lịch sử, chỉ ghi trạng thái hiện hành.

Mặt tốt: Bảng quyền đồng bộ, bảng sự kiện, bảng schema và tham số giữ nguyên số, ID, tên riêng, không bóng bẩy. Giọng khô và trung tính, không bold nhãn hay triad vô nghĩa, phần "Điểm tự quyết" nêu rõ phương án bỏ là cột khuôn, không phải §5.

## combat-driftlife.md (766/766)
Điểm: 4/5. Văn bản khô, đúng giọng tra cứu, mẫu dàn dựng (§1, §3) thưa và nằm gần hết ở phần tóm tắt, mục đích, ghi chú cuối bảng. Tập trung nặng là §25 (tài liệu nói về chính nó, kể lịch sử số ngay trong thân bài).

| Mẫu | Số lần | Dòng ví dụ |
|---|---|---|
| §1 Không X mà Y, X chứ không phải Y, đuôi phủ định | 8 | 88, 102, 118, 353, 579, 621, 631, 717 |
| §25 Viết về tài liệu thay vì nội dung (bảng trên, nguồn, chép bằng script, bản cũ) | 8 | 5, 383, 395, 436, 442, 444, 483, 579 |
| §2 Câu chốt nhắc lại ý | 3 | 105, 152, 236 |
| §6 Bộ ba cho đủ | 2 | 102, 104 |
| §3 Câu nghe sâu | 1 | 88 |

Năm đoạn nặng nhất:
1. Dòng 5: "Số là khởi điểm ước trừ chỗ ghi nguồn sim (mục 3.8, 6b lấy từ sim của gd-tech). Đề sim ở mục 8. Nhãn `MVP` hoặc `Sau MVP` theo khung mục 12." -> mẫu §25 (mô tả cách soạn và bố cục, đoạn này còn kể tên hiển thị đã chốt cho ai) -> gợi ý viết lại: "Số là khởi điểm ước, trừ chỗ ghi nguồn sim (3.8, 6b)." Dòng "Tên hiển thị đã chốt cho The Novent" chuyển vào DECISIONS hoặc lịch sử.
2. Dòng 88: "Combat là cách để lấy mẫu và giữ Oxy, không phải mục đích: mỗi con Driftlife là một câu hỏi" -> mẫu §1 và §3 -> gợi ý viết lại: "Combat là cách lấy mẫu và giữ Oxy. Mỗi con Driftlife cho ba lựa chọn: bắt sống, hạ hoặc né. Bắt sống luôn đáng hơn hạ (K9) nhưng tốn công, tốn vật tiêu hao, chiếm chỗ trong Lồng mẫu."
3. Dòng 102: "tôi là người sống sót khéo tay, không phải lính. Tôi đọc được con vật, chọn đúng dụng cụ, lấy được thứ mình cần" -> mẫu §1 và §6 -> gợi ý viết lại: "tôi là người sống sót khéo tay: đọc con vật, chọn đúng dụng cụ, lấy thứ cần với ít Oxy nhất."
4. Dòng 383 đến 393: "Kết quả S5 lần đầu cho BS-1 (sim của gd-tech, bản số cũ) và các thay đổi, chờ gd-tech chạy lại S5:" -> mẫu §25 (kể số cũ và lần sim trước ngay trong thân, đúng chỗ là Lịch sử thay đổi) -> gợi ý viết lại: giữ một dòng hiện hành "BS-1: Sinh lực 600, quét 8 Oxy, húc 10 Oxy, phóng điện 8 Oxy, thời lượng mục tiêu 1 đến 2 phút" và chuyển bảng "Bản cũ" xuống Lịch sử thay đổi.
5. Dòng 579: "Nhận kết quả, không đổi số. Đi theo cặp gần như không tốn thêm" -> mẫu §1 (đuôi phủ định), §25 ("bảng trên" ba lần), §2 ("Đây là kiểu chia vai mong muốn (P3), không phạt chơi chung") -> gợi ý viết lại: "Mục tiêu S4 áp cho kiểu chia (mỗi người xử riêng), kiểu dồn chỉ để đọc. Đi theo cặp gần như không tốn thêm. Bốn người dồn vào một con thì tốn hơn, nên nhóm tự tách hai cặp. Cỡ S dồn tốn rõ vì máu mỗi con nhân theo N mà con S chết sau một hai phát, nhưng loài S trôi rải rác nên mỗi người một hướng là cách chơi tự nhiên."
Mặt tốt: luật đánh số, mỗi luật có nhãn MVP hoặc Sau MVP, tham số có nguồn "đo" hoặc "ước", điểm tự quyết có cột Vì sao và Đã bỏ. Các ghi chú "Lý do" ở luật 25, 36 là thông tin thật, đừng cắt.

## nguoi-choi.md (527/527)
Điểm: 4/5. Gần như toàn bảng, công thức và luật đánh số nên đọc như người viết, dấu hiệu AI chỉ nằm ở vài câu mô tả cảm giác ở Tóm tắt, Mục đích, và ghi chú tự trỏ về chính tài liệu.

| Mẫu | Số lần | Dòng ví dụ |
|---|---|---|
| §25 Viết về tài liệu hoặc bản cũ (xem mục, thang cũ, mục "Lệch") | 5 | 25, 100, 208, 295, 507 |
| §1 Không X mà Y, đuôi phủ định | 4 | 61, 100, 395, 446 |
| §2 Câu chốt hoặc điệp khúc nhắc lại ý | 4 | 51, 140, 342, 466 |
| §3 Câu nghe sâu | 2 | 7, 47 |

Năm đoạn nặng nhất:
1. Dòng 7: "cho người chơi cảm giác điều khiển chính xác dưới áp lực 'mỗi hơi thở là một quyết định' (P1)" -> mẫu §3 -> gợi ý viết lại: "Người chơi điều khiển trực tiếp và tiêu Oxy theo từng giây (P1)."
2. Dòng 47: "mỗi lượt lướt hay nán lại thêm một mẻ đều có giá bằng hơi thở của mình" -> mẫu §3, ý đã nằm ở dòng 7 và 2.2 mục 2 -> gợi ý viết lại: "Cảm thấy: người sống sót giỏi nghề, điều khiển chuẩn. Mỗi lần lướt tốn 4 Oxy, mỗi giây nán lại tốn 1 Oxy."
3. Dòng 51: "Ý đồ cảm giác một câu: trôi nhẹ nhưng dừng đúng chỗ muốn, đẩy là đi ngay, buông là trượt chừng nửa giây" -> mẫu §2 (nhắc lại 2.1 mục 2 đến 4) -> gợi ý viết lại: "Buông phím trượt khoảng 0,5 giây, Hãm dừng sau 0,17 giây." Hoặc cắt dòng.
4. Dòng 100: "(để Ngạt là khoảnh khắc chọn đồ và chờ cứu, không phải bị đánh chết). Luật này do file này đặt, gd-combat chưa ghi" -> mẫu §1 và §25, đồng thời đã lỗi thời vì câu hỏi mở 3 (dòng 437) ghi combat luật 10 đã có -> gợi ý viết lại: "Người ngạt không bị AI nhắm tới và không nhận sát thương (khớp `combat-driftlife.md` luật 10)."
5. Dòng 295: "Thang cũ (túi 20 Khối, bình 300) làm gần 100% chuyến kết thúc vì đầy túi, chương 1 chỉ dài khoảng 1,5 phút, nên đã đổi (log 54)." -> mẫu §25 (kể thứ bị thay) -> gợi ý viết lại: "Túi 80 Khối và bình 330 cho chuyến chương 1 dài 4,4 phút (log 54)." Phần thang cũ chuyển vào Lịch sử thay đổi.
Mặt tốt: ví dụ tính cụ thể có số (d = 240 u cho 53 Oxy, 60 trên 80 thì f = 0,75), bảng trạng thái có cột Vào khi và Ra khi, thứ tự xử lý khung vật lý. Các câu "không luật nào cần đúng N người" ở 74 và 342 là kiểm tra kỹ thuật có thật, chỉ nên giữ một lần ở mục Co-op.

## kinh-te-tien-trinh.md (823/823)
Điểm: 4. Đọc như tài liệu kỹ thuật của người viết, lỗi chính là kể lịch sử đổi số ngay trong phần luật và kết quả, không có giọng quảng cáo, triad hay câu chốt kịch tính.

| Mẫu | Số lần | Dòng ví dụ |
|---|---|---|
| §25 viết về lịch sử bản trước thay vì nội dung hiện hành | 10 | 19, 57, 183, 298, 430, 474, 495, 566, 578, 700 |
| §1 "không phải X", "X, không Y", câu phủ định cụt | 7 | 232, 243, 279, 318, 451, 551, 700 |
| §4 câu hỏi tu từ làm mào đầu | 2 | 151, 453 (tiêu đề dạng câu hỏi) |
| §25 mô tả cách làm hoặc bảng sắp tới (yếu, đứng riêng không tính) | 2 | 5, 357 |
| §3 ẩn dụ nhẹ | 1 | 29 ("mỗi ca cảng là ngày lương") |

Năm đoạn nặng nhất:
1. Dòng 183: "Trước đợt 9 (giá thùng sát nhau 48 tới 56), sim ca cảng GD-054 đo chênh tối đa 13%" -> mẫu §25 (lịch sử nằm trong thân luật, Balance Sheet dòng 673 đã giữ đúng nội dung này) -> gợi ý viết lại: "Thế cân hiện hành: chuẩn bị trước ca (bắt sống, chế nước, giữ đồ Trái Đất) thêm khoảng 30% Tally một ca, hoặc bán ít mà đắt để giữ hàng chợ cho trạm."
2. Dòng 298: "điểm mới gấp 7 tới 8 lần mỗi ca so với điểm theo đơn cũ, nên ngưỡng cũ" -> mẫu §25 (giải thích bằng bản cũ trong mục tham số hiện hành, lặp lại ở dòng 654, 676) -> gợi ý viết lại: "Ngưỡng đặt để ngày đủ điểm trung bình (một người, kịch bản trung bình, chưa tính trần chương) giữ nhịp mở theo chương đã duyệt. Hàm nguong_theo_ngay_cu() dò từng ngưỡng theo bước 5 điểm, lặp tới khi đứng yên."
3. Dòng 578: "nhặt tay đầy túi chậm nhất, không còn lợi gấp 2,5 như trước bản 1b của gd-items." -> mẫu §25 -> gợi ý viết lại: "Nhặt tay đầy túi chậm nhất trong các cách lấy."
4. Dòng 232: "nên cửa thứ 4 là tiện, không bắt buộc" -> mẫu §1 (đuôi phủ định cụt) -> gợi ý viết lại: "nên cửa thứ 4 chỉ để thuận tiện cho nhóm đông."
5. Dòng 151: "Kiểu danh mục có khác nhau thật không." -> mẫu §4 (câu hỏi dựng trước điểm) -> gợi ý viết lại: "Độ khác nhau giữa các kiểu danh mục đo bằng mô hình ca của gd-tech (trễ phản xạ 2 giây, 300 ca mỗi dòng), với giá và độ gọi ở trên:"
Ghi thêm: dòng 551 "không phải tàu bỏ đi, nên không trái mục tiêu tàu phục vụ xong của khung" và dòng 318 "Đây là lựa chọn người chơi, game không ép." cùng kiểu §1 nhưng nhẹ, vế phủ định có chỗ để sửa hiểu nhầm nên có thể giữ.

Mặt tốt: Bảng, ID, số liệu và nguồn đầy đủ, mỗi luật đánh số kèm nhãn MVP, câu kết luận luôn kèm số (dòng 182, 373, 491). Lịch sử đổi số đã có chỗ riêng (Balance Sheet, Lịch sử thay đổi, Điểm tự quyết) nên các mục đó không phải sửa.

## map.md (761/761)
Điểm: 4. Giọng trung tính của người dựng tài liệu, vết AI chỉ lẻ tẻ ở câu phủ định cụt và một câu chốt lặp ở mục 3.9.

| Mẫu | Số lần | Dòng ví dụ |
|---|---|---|
| §1 "không phải X", "X, không Y", câu phủ định cụt | 5 | 6, 19, 281, 516, 630 |
| §25 viết về cách làm hoặc bản trước | 4 | 6, 123, 446, 484 |
| §2 câu chốt lặp lại ý đã nói | 1 | 484 và 485 (cùng một câu, còn lặp ở 723) |
| §4 tiêu đề hoặc câu mào đầu "vì sao" | 1 | 417 |
| §6 bộ ba hoặc chuỗi phủ định cho đủ nhịp (yếu) | 2 | 634, 701 |
| §3 ẩn dụ nhẹ | 1 | 65 ("một khoản Oxy đem đi đầu tư") |

Năm đoạn nặng nhất:
1. Dòng 484 và 485: "Túi quyết thời lượng đầu game, bình quyết cuối game." (xuất hiện ở cuối cả hai dòng, cộng dòng 723) -> mẫu §2 (câu chốt lặp) và §25 ("Không phải số hiện hành nên không chép vào đây") -> gợi ý viết lại: "Bản chạy thử chọn hướng nằm ở projects/game-moi/sim/do-nhay-chuyen.md, sinh bởi sim/do_nhay_chuyen.mjs. Kết quả: thêm diện tích hay mật độ không kéo dài chuyến, túi quyết thời lượng đầu game, bình quyết cuối game." và dòng 485 bỏ câu cuối: "Hướng đã chọn: map giữ nguyên kích thước và mật độ ở mục 3.1 đến 3.7. Giây khai thác nhân 2 (gd-items). Túi 80 đến 216 Khối và bình 330 đến 1000 (GDM, log 54)."
2. Dòng 516: "Cổng mềm rất đắt. Đúng ý K6, không phải tường" -> mẫu §1 (đuôi phủ định cụt, tách hai câu) -> gợi ý viết lại: "Cổng mềm rất đắt, đúng ý K6: vẫn vào được dải mới."
3. Dòng 6: "Đó là phép tính tất định, không phải sim nhiều seed." -> mẫu §1 và §25 -> gợi ý viết lại: "Đây là phép tính tất định, chưa có sim nhiều seed (việc của gd-tech ở đợt 2)."
4. Dòng 281: "Đây là giả định hành vi người chơi, không phải HUD." -> mẫu §1 -> gợi ý viết lại: "Giả định hành vi người chơi trong phép tính, HUD dùng vạch đủ về của gd-character."
5. Dòng 417: "Vì sao theo dải và vì sao số này:" -> mẫu §4 (mào đầu, nội dung đi sau) -> gợi ý viết lại: "Bảng mục 4 của sim chuyến (tools/ket-qua/sim-chuyen.md) cho a tối thiểu khác nhau giữa dải Gần (chương 1) và dải Xa (chương 3 đến 5), nên a đặt theo dải."
Ghi thêm: dòng 630 "Mảnh là cách xếp kit, không phải tranh vẽ riêng." và dòng 19 "Không phải ô, không tính vào ô cố định" cùng kiểu §1 nhưng vế phủ định ngăn hiểu nhầm có thật nên có thể giữ. Dòng 701 "không cửa nào cần hai người cùng đứng, không công tắc đôi, không boss có cơ chế bắt buộc nhiều người" là ba mục thật khác nhau nên giữ.

Mặt tốt: Luật chia mục đánh số, mỗi dòng có nhãn MVP hoặc Sau MVP, tham số có khoảng an toàn và nguồn, mục Điểm tự quyết ghi rõ phương án đã bỏ và lý do. Các câu giải thích như dòng 214 và 725 mang thông tin thật, không phải trang trí.

