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

## Giới hạn

- Humanizer viết cho tiếng Anh. Mẫu cấu trúc áp được, danh sách từ (§12) thì không. Skill `vietnamese-tech-writing` hợp hơn cho bước sửa thật.
- Số chỗ mỗi mẫu do subagent đếm bằng đọc, không phải máy, sai lệch vài đơn vị là có thể. Các lỗi ở mục "Lỗi thật" đã kiểm lại bằng lệnh.
- Bản chi tiết từng file (năm đoạn nặng nhất, gợi ý viết lại, mặt tốt): `2026-11-23-humanizer-gdd-chi-tiet.md`.
