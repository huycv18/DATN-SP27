# Đánh giá giọng văn GDD The Novent theo humanizer (2026-11-23)

Phạm vi: 11 file GDD trong `projects/game-moi/gdd/` (khung và 10 GDD hệ thống), 194.518 từ. Chỉ đánh giá, chưa sửa file nào.
Cách làm: máy đếm các dấu hiệu bắt được bằng regex, rồi 6 subagent Sonnet đọc hết từng file theo 26 mẫu của skill humanizer v4.0.0, áp dạng tương đương tiếng Việt. Bảng, ID, số liệu, lời thoại nhân vật không chấm.

## Kết luận

GDD đọc như tài liệu kỹ thuật do người viết, điểm trung bình 3,7 trên 5 (trọng số theo số từ). Không còn dấu hiệu bề mặt. Lỗi chính là tài liệu kể về chính nó: lịch sử bản trước, đợt, vòng QA nằm ngay trong thân luật thay vì ở Lịch sử thay đổi. Hai file kéo điểm xuống là `cot-truyen.md` và `tram-va-cang.md`.

## Điểm từng file

| File | Từ | Điểm | Mẫu nhiều nhất |
|---|---|---|---|
| he-thong/cot-truyen.md | 32.356 | 3 | §25 khoảng 25 chỗ, §1 6, §15 6, §19 6 dòng |
| he-thong/tram-va-cang.md | 20.729 | 3 | §25 14, §26 số sim chép lại 6, §7 5 |
| he-thong/ux-ui.md | 24.696 | 4 | §1 4, §25 4, §5 4 (yếu) |
| he-thong/vat-pham.md | 24.250 | 4 | §1 9, §25 7 |
| he-thong/combat-driftlife.md | 19.489 | 4 | §1 8, §25 8 |
| he-thong/kinh-te-tien-trinh.md | 18.918 | 4 | §25 10, §1 7 |
| he-thong/map.md | 16.445 | 4 | §1 5, §25 4 |
| he-thong/nguoi-choi.md | 12.668 | 4 | §25 5, §1 4, §2 4 |
| he-thong/ky-thuat.md | 10.110 | 4 | §25 7 |
| he-thong/ho-so-nhan-vat.md | 7.791 | 4 | §25 7, §1 6, 2 chỗ dán lặp |
| 00-khung-game.md | 7.066 | 4 | §1 4, §25 3, §16 2 |

## Tổng theo mẫu

| Mẫu | Số chỗ | Ghi chú |
|---|---|---|
| §25 viết về chính tài liệu (bản trước, đợt, vòng QA, "bảng dưới") | khoảng 94 | Lỗi chính. Nơi đúng là Lịch sử thay đổi, Balance Sheet, Điểm tự quyết |
| §1 "không phải X", đuôi phủ định cụt | khoảng 59 | Giữ khi vế phủ định sửa hiểu nhầm có thật (ví dụ Wardens không còn là chủng tộc) |
| §2 câu chốt nhắc lại ý | khoảng 25 | Hay gặp: "không hồ sơ nào cần đúng N người", "túi quyết đầu game, bình quyết cuối game" |
| §3, §5, §6, §15, §16 | dưới 10 mỗi mẫu | Tập trung ở Tóm tắt, Mục đích, pillar, USP |
| Máy đếm: gạch dài, chấm phẩy, ngoặc cong, emoji | 0 | Cổng kiểm của repo đã lọc |
| Máy đếm: nhãn in đậm đầu dòng | 4 | Chỉ ở `cot-truyen.md` dòng 1029 tới 1032 |

## Lỗi thật cần sửa trước (đã kiểm tay, không phải giọng văn)

| File | Dòng | Lỗi |
|---|---|---|
| ho-so-nhan-vat.md | 22 | Hai câu "NP-5 là Sevra Ilvane..." và "Sennari là chủng..." lặp hai lần trong cùng đoạn |
| ho-so-nhan-vat.md | 111, 113 | Cùng một dòng "Sevra (NP-5...) lộ ra ở cuối chương 3" dán hai lần |
| ky-thuat.md | 20, 230 | Mâu thuẫn: dòng 20 nói tab Event Tracking không sinh lại bằng `tools/xuat-event-tracking.mjs`, dòng 230 nói sinh bằng tool đó |
| nguoi-choi.md | 100 | "gd-combat chưa ghi" đã lỗi thời, chính file này dòng 437 ghi luật 10 của combat đã có, trạng thái Đóng |
| ky-thuat.md và tram-va-cang.md | 23 và 24, 350, 365, 379, 441, 512 | Lệch quy ước: ky-thuat không chép số sim, tram-va-cang chép lại nhiều chỗ |
| vat-pham.md | 204, 678, 695, 718 | Dùng "tôi" trong thân GDD, lệch giọng trung tính |

## Ví dụ sửa tiêu biểu

| File, dòng | Hiện tại | Gợi ý |
|---|---|---|
| cot-truyen 772 | "Lịch sử con số này: bản đầu ghi 6, 5, 8, 3, 4..." | "Sàn ngày hiện hành là 7, 5, 8, 3, 3 (tổng 26)." Lịch sử chuyển xuống cuối file |
| tram-va-cang 467 tới 471 | "Đã đo vòng 2: bơm khí chiếm 3,5%..." lặp tiền tố 5 dòng | Bỏ tiền tố, chuyển kết quả sang mục 8 |
| combat-driftlife 88 | "Combat là cách để lấy mẫu và giữ Oxy, không phải mục đích" | "Combat là cách lấy mẫu và giữ Oxy." |
| map 516 | "Cổng mềm rất đắt. Đúng ý K6, không phải tường" | "Cổng mềm rất đắt, đúng ý K6: vẫn vào được dải mới." |
| 00-khung-game 77 | "Cốt truyện có chiều sâu..., nhân vật độc đáo..." | Bỏ "có chiều sâu", "độc đáo", giữ danh sách cụ thể |
| ux-ui 914 | "Chỉnh bằng playtest, không bằng cảm tính." | "Chỉnh bằng playtest." |

## Không nên sửa

- Luật đánh số, bảng tham số, cột Đã bỏ ở Điểm tự quyết, caveat "Chưa đo", `[GIẢ ĐỊNH]`: là dữ liệu và báo thật điều chưa biết.
- Lời thoại và Voice sheet trong `cot-truyen.md`: các câu "không phải X" là giọng nhân vật.
- Tiêu đề USP tiếng Anh dạng khẩu hiệu ở `00-khung-game.md` dòng 284 tới 287: tên sản phẩm có chủ đích.

## Kết quả sửa (cùng ngày, skill vietnamese-hmr)

Sửa câu văn ở 11 file, giữ luật, số, ID. Mỗi file thêm đúng 1 dòng ở bảng Lịch sử thay đổi (trừ 00-khung-game.md vì không có bảng), số lịch sử bỏ khỏi thân luật chuyển vào dòng đó. Không thêm, không xóa dòng trong thân file nên các tham chiếu "dòng N" giữa các file vẫn đúng.

| File | scan.py trước | Sau | check_facts |
|---|---|---|---|
| 00-khung-game.md | 21 (20 dấu hiệu) | 21 (17) | 0 |
| combat-driftlife.md | 26 (23) | 20 (19) | 0 |
| cot-truyen.md | 36 (74) | 35 (52) | 0 |
| ho-so-nhan-vat.md | 14 (10) | 14 (7) | 0 |
| kinh-te-tien-trinh.md | 20 (19) | 20 (15) | 0 |
| ky-thuat.md | 21 (16) | 16 (14) | 0 |
| map.md | 29 (24) | 20 (17) | 0 |
| nguoi-choi.md | 20 (11) | 16 (8) | 0, số 100% và 300 chuyển vào dòng lịch sử |
| tram-va-cang.md | 10 (21) | 4 (11) | 0 |
| ux-ui.md | 20 (12) | 20 (10) | 0 |
| vat-pham.md | 39 (30) | 34 (26) | 0 |

check_facts chạy trên thân file, bỏ dòng lịch sử ngày 2026-11-23. Khối do script sinh (`<!--B:...-->` ở vat-pham, `<!--SIM:...-->` ở map) và mốc `<!--v:...-->` giữ nguyên. Cổng repo: selftest 33 phép ĐẠT, validate-gdd 0 lỗi, kiem-de-doc TRẢ LẠI 2 lỗi dòng dài ở tab OVERVIEW B28, có từ trước, không thuộc lượt sửa này.

Tham chiếu sửa kèm: `ux-ui.md` dòng 885 trỏ `ho-so-nhan-vat.md` dòng 148 đổi thành 146, vì lượt sửa lỗi trước bớt 2 dòng ở ho-so-nhan-vat.

Các chỗ còn lại sau lượt sửa câu văn, đã xử lý cùng ngày (GDM):

| Chỗ | Cách xử lý |
|---|---|
| cot-truyen.md bảng Điểm tự quyết, 3 hàng "Hết hiệu lực từ đợt 6" | Chuyển nguyên văn xuống cuối file, mục con dưới Lịch sử thay đổi |
| cot-truyen.md mục Lệch với vai khác, 7 hàng "Xong" | Chuyển nguyên văn xuống cuối file. Bảng Đang mở chỉ còn 6 hàng chưa xong. Không tách file riêng vì 9 file khác cũng có mục Lệch, Điểm tự quyết, Phản biện |
| combat-driftlife.md bảng BS-1 bản cũ | Câu dẫn và bảng chuyển nguyên văn xuống cuối file, thân bài còn một câu trỏ xuống |
| 00-khung-game.md dòng 3 | Rút còn "sửa 6 lần, lịch sử ở cuối file". Thêm bảng Lịch sử thay đổi 7 hàng |
| vat-pham.md dòng 528, 538 | Sửa câu trong `sim/vat-pham.mjs`, chạy `--ghi`. Chỉ đổi 3 dòng (2 câu và giờ sinh) |
| tram-va-cang.md dòng 457 | gd-quan: "đặt" là chữ sót, bỏ đi. Câu nay ghi đúng ba yêu cầu gửi host theo `ky-thuat.md` luật 29, chỗ trỏ sửa từ luật 15 tới 17 thành mục 2.2 và luật 29 tới 31. Luật 26 giữ nguyên |
| cot-truyen.md dòng 3, dòng 773 | Tra từ file: GD-022 và GD-033 gd-qa ĐẠT, nên "chờ nghiệm thu" đổi thành "gd-qa ĐẠT (GD-022, GD-033)". Sim kinh tế đã chạy với sàn 7, 5, 8, 3, 3, câu "cần chạy lại" đổi thành trỏ `kinh-te-tien-trinh.md` mục 6b |
| nguoi-choi.md bảng Lệch hàng 4 | Trỏ sai từ trước (dòng 630 của combat là S1). Sửa thành dòng 714 và ghi đã xong, vì combat bỏ "kéo chậm" ở QA vòng 1 |

Tham chiếu "dòng N" tới file đổi số dòng dò bằng script theo nội dung dòng, chỉ một chỗ phải đổi (hàng trên). Kiểm: check_facts không mất số (chỉ báo phần cố ý thêm: GD-033, ngày và đường dẫn ở bảng lịch sử khung), selftest 33 ĐẠT, validate-gdd 0 lỗi, khối SIM của map giữ nguyên.

Còn lệch: tab ITEM LIST trên Sheet (bản đọc sửa tay) vẫn ghi STY-501 "là cảnh truyện, không phải vật". Nghĩa không đổi, sửa khi dán tab đó lần tới.

## Giới hạn

- Humanizer viết cho tiếng Anh. Mẫu cấu trúc áp được, danh sách từ (§12) thì không. Skill `vietnamese-tech-writing` hợp hơn cho bước sửa thật.
- Số chỗ mỗi mẫu do subagent đếm bằng đọc, không phải máy, sai lệch vài đơn vị là có thể. Các lỗi ở mục "Lỗi thật" đã kiểm lại bằng lệnh.
- Bản chi tiết từng file (năm đoạn nặng nhất, gợi ý viết lại, mặt tốt): `2026-11-23-humanizer-gdd-chi-tiet.md`.
