# GD-033 map.md và tab Zone
ĐẠT (vòng 2) - 3 lỗi nặng và 2 lỗi nhẹ vòng 1 đã sửa, ba file map, cot-truyen, combat cùng một đích và cùng luật kén. Còn 1 lỗi nhẹ mới (L6). Vòng 1 là TRẢ LẠI, giữ nguyên bên dưới làm lịch sử.
Giờ sửa file khi chấm vòng 2: map.md 10:29:54, Zone.tsv 10:29:54, cot-truyen.md 10:32:14, combat-driftlife.md 10:34:16 (không đổi tiếp sau lần kiểm cuối 10:36). Vòng chấm: 2.

## Bảng P1 đến P15 (phần map.md và Zone chịu trách nhiệm)
| # | Có trong map.md hoặc Zone | Dòng | Ghi chú |
|---|---|---|---|
| P1, P2 | Đúng (không còn ý cũ) | quét 0 chỗ trong map.md và Zone.tsv | Không còn "tham lam", "đạo đức giả", "đàn được bảo hộ", "thu hoạch công nghiệp" |
| P3, P4, P5, P6, P8, P9, P11, P12, P14 | Không áp, thuộc cốt truyện, hồ sơ | | map.md không giữ ý này và không viết sai |
| P7 | Đúng | map.md:230 | "hộp ghi hành trình lộ ra Solace là thông tin mồi", W19 |
| P10 | Có | map.md:32, 227, W22 (725) | Cứu Sevra ở N4 Waypost Outer Ring, toán của Maro áp mạn tàu TA04 (C3.8). Cụm "tình cờ thấy" là việc cốt truyện, map không cần ghi |
| P13 | Có, thiếu đường vào và ra (xem L1, L2) | map.md:155 (2.7.9), 227 | Hộ tống là kéo kén tới The Hearth. Phần nối tình báo thuộc ca cảng, không nằm ở map |
| P15 | Đúng | map.md:231, 255 | STY-501 bản đồ sao thật ở Data Core. Việc Sevra trao tọa độ là mốc C5.6 của cốt truyện |

## Ý cũ còn sót
Không. `node projects/game-moi/qa/quet-phan-dien.mjs --chi-tiet` lọc map và Zone: không có dòng ý cũ nào (hai dòng khớp trong bảng đếm tên là số lần xuất hiện tên mới). grep tay các cụm tham lam, đạo đức giả, kẻ canh giữ, bảo hộ, thu hoạch, bản khảo sát, móc cho phần sau, chưa có đích, Sundering: 0 chỗ. "Lodestar Survey" còn ở map.md:250, 254 là tên hồ sơ mồi (đúng ý P7), không phải "bản khảo sát bị giấu".

## Bảng tên
| Tên | Trong map.md và Zone | Khớp `cot-truyen.md` "Tên mới" |
|---|---|---|
| Serith (BS-5, đầu não ở Warden Rig) | map:36, 231, 242, 255 | Khớp. cot-truyen:35 nói Serith tự tới Rig. Nhẹ L5 |
| Sevra Ilvane (kén thoát hiểm), Ilsume (tàu TA04), Maro (toán bắt cóc) | map:151, 227 | Khớp |
| The Kindling, The Hearth (khoang ẩn trong N4) | map:32, 39, 227 | Khớp. cot-truyen:24 để vị trí cho gd-world, map chốt ở N4 |
| The Wardens là chế độ và quân | map.md không còn dùng như chủng tộc | Khớp |
| Sennari, Sennar, Ilvane, The Meeting War, The Scattering | map.md không cần dùng | Không lệch |
Tên địa danh A03 (Waypost Outer Ring, Waypost Concourse, The Hearth) khớp bảng A của map và Zone dòng 24.

## Hệ thống mới
Không. Hộ tống dùng luật kéo vật lớp Nặng (nguoi-choi.md:66, combat-driftlife.md luật 40 đến 43), Hàng rào cắt H09 và đơn vị The Wardens sẵn có, Recall Beacon cố định sẵn có. Không thêm chủng tộc, map nhánh, tiền, phe, chế độ chơi. W22 chọn dùng lại N4 thay vì map nhánh mới.

## Kiểm hộ tống và N4 (P10, P13, P15)
| Ý kiểm | Kết quả |
|---|---|
| Dùng đúng luật sẵn có | Đạt. Kén lớp Nặng, tốc độ 0,5 lần tốc độ bay (nguoi-choi.md:66), Oxy hao 1,25 lần khi kéo, người kéo bị Snare Hunter nhắm (combat luật 41) |
| Oxy hao (ước QA, chương 5 bình 1000, bộ đẩy 7,5 u/s) | Bay tới cửa N4 (Xa cột 1, khoảng 420 u) khoảng 73 giây. 210 giây trong nhánh, phần kéo hao 1,25 lần, Hàng rào cắt trừ 25 mỗi lần trúng, Recall 5 giây. Tổng dưới 450 trên 1000, còn rất dư. Chương 3 cứu Sevra (bình 600, trần chuyến 510 giây): 78 giây bay, 180 giây trong nhánh, về bằng beacon 24 giây, khoảng 285 giây, còn dư. Nếu về bằng cửa khí Ember (xem L3): kéo 420 u ở 3,5 u/s cộng đường vòng ra khoảng 156 giây hao 1,25 lần, tổng khoảng 380 trên 510, sát hơn nhiều |
| Thời lượng chuyến dải Xa | Không phá. Hộ tống 210 giây và cứu 180 giây nằm trong trần 510 đến 850 giây (bảng 3.2), không đổi mục tiêu chuyến chương 5 là 10 đến 12 phút |
| Beacon, lối ra | Có. Hai beacon cố định trên đường hộ tống (map:227) và cửa N4 là lối ra chính (2.7.3). Rút giữa chừng đúng luật 2.5.7 |
| Kén kẹt, kéo bị kéo về | Có luật: kén rơi khi người kéo ngạt hoặc bị kéo về, nằm lại tại chỗ, chuyến sau kéo tiếp (map 2.7.9, combat luật 42), kén không bị nhắm và không nhận sát thương. Không có thất bại vĩnh viễn. Xem L2 cho phần thiếu |
| Một mình (P3) | Làm được. Thả kén (bấm E) để đánh rồi kéo tiếp, qua Hàng rào cắt lúc tắt hoặc phá máy phát (một người phá được), không có cơ chế hai người |
| K22, K23, C10 | K22: chuyến Skiff hoặc bay đều tính, hộ tống có thể chia 2 chuyến một ngày nên đủ. K23 và C10: thoát giữa chuyến về điểm lưu, mất phần đang dở. Xem L2 về chỗ lưu kén |
| Chỉ tiêu MP-01 đến MP-11 (`qa/mvp-criteria-checklist.md`) | Không lệch. Cả 11 chỉ tiêu thuộc MVP (dải Gần, Cinder, bố cục, thoát giữa chuyến). N4 và The Hearth là Sau MVP nên không chạm MP-01 đến MP-07, MP-09 đến MP-11. MP-08 (lối ra map nhánh) chỉ ghi MVP cho Cinder, N4 thỏa (cửa chính, hai beacon) |

## Zone.tsv
Kiểm hai hàng N4 (dòng 23 đến 25) và N8 (dòng 35 đến 37) trong `gdd/sheet/Zone.tsv` so với map.md:227 và 231: văn bản giống từng chữ (khu, khóa và chìa, khe, người vớt, boss, thời lượng). Dòng 32 (N7 mở sau C3.8) và dòng 69 (Skiff tới Warden Rig) khớp 2.10. Không lệch, tin được con số 0 ô lệch.

## Lỗi
| # | Mức | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|
| L1 | Nặng | map.md:32, 39, 155, 191, 227 và cot-truyen.md:45, 384, 472 | Mốc hộ tống mâu thuẫn mốc truyện và thiếu điều kiện bắt đầu. map ghi The Hearth "chỉ mở ở C5.1" mà bảng "Nay" của cot-truyen:45 định nghĩa C5.1 là kết quả "kén tới The Hearth" (mở ở chính mốc đó là vòng tròn). Bảng đủ mục 2.5 của cot-truyen vẫn là bản cũ: C5.1 "Chuyến hàng cuối" (dòng 472, Dromm cập bến) và C3.8 "Đã được đếm" (dòng 384). Sau C3.8 kén ở Ember, nhưng 2.7.9 bắt đầu "từ cửa N4" và không nói kén ra tới N4 bằng cách nào (Skiff, kéo ngoài map tổng) | map.md:155 "Kén chỉ tính là tới nơi khi chạm cửa The Hearth". cot-truyen:32 "Kéo kén từ lối vào N4". Không có luật đưa kén từ Ember tới cửa N4 | gd-story cập nhật mục 2.5 theo bảng Nay (C3.8 cứu, C5.1 hộ tống, điều kiện mở: ví dụ sau C4.7). gd-world ghi điều kiện mở The Hearth và cách kén tới cửa N4 | gd-story, gd-world |
| L2 | Nặng | map.md:155, 2.5.5 (dòng 131) và 6.1 (lưu map nhánh) | Chưa nói Recall khi đang kéo kén. 2.5.5 cho vật kéo trong 3 u đi cùng về trạm, nên người kích beacon cố định trên đường hộ tống mang kén về Ember, trái "kén nằm lại chuyến sau kéo tiếp" (combat luật 42, chỉ áp khi người kéo ngạt hoặc cả nhóm về mà đã thả). Kén về Ember rồi thì lặp lại L1. Danh sách trạng thái lưu của map nhánh (2.7.2, 6.1) không có vị trí kén hộ tống nên K23 và C10 chưa rõ lúc nạp lại | map.md:131, 155, 530 | Ghi: kích Recall khi đang kéo kén thì kén nằm lại tại beacon, hoặc không cho kích khi kéo. Thêm "vị trí kén" vào trạng thái lưu của map nhánh (lưu ở điểm lưu K23) | gd-world, gd-combat |
| L3 | Nặng | map.md:227 và combat-driftlife.md 2.8, cot-truyen.md:42 | Hai điểm đích khác nhau cho C3.8: map "kéo kén về beacon", combat và cốt truyện "tới cửa khí của Ember". Oxy khác nhau lớn (beacon khoảng 24 giây, cửa khí khoảng 156 giây kéo hao 1,25 lần, có thể ép hết Oxy ở bình 600) | map:227, combat bảng mốc "C3.8 ... Cửa khí của Ember", cot-truyen:42 | Chốt một điểm đích (khuyến nghị beacon, đúng luật vớt 2.7.5) và sửa hai file kia | gd-world, gd-combat, gd-story |
| L4 | Nhẹ | map.md:227 | Không có kích thước hay khoảng cách đường hộ tống (cửa N4 tới The Hearth). 210 giây ước chưa kiểm được ở tốc độ kéo 3,5 đến 3,75 u/s | Sau MVP, chưa có greybox N4 | Thêm số u khi dựng chương 3 | gd-world |
| L5 | Nhẹ | map.md:36, 231 và cot-truyen.md:35 | "Đầu não của Serith" và cốt truyện ghi Serith "tự tới Warden Rig" (chỗ ngồi là Sennar). Hai cách nói chưa trùng | cot-truyen:35 | Đổi thành "nơi Serith chỉ huy ở bãi vỡ" | gd-world |

## Bỏ qua / không kiểm được
- Không kiểm các phần map.md không đổi ở đợt 6 (đã ĐẠT ở GD-031).
- Oxy hộ tống là tính tay của QA từ tốc độ và hệ số hiện có, chưa có sim hộ tống.
- Không kiểm lại cot-truyen.md ngoài các dòng chạm map. L1 là lỗi của hai phía, gd-story giữ phần bảng mốc.


## Vòng 2 (sau khi gd-world, gd-story, gd-combat sửa)
| Lỗi vòng 1 | Trạng thái | Chỗ xác nhận |
|---|---|---|
| L1 (điều kiện mở The Hearth, kén tới cửa N4) | Đã sửa | map.md:155 (2.7.9): từ đầu chương 5 (sau C4.7) Skiff chở nhóm và kén từ Ember tới cửa N4, kén chỉ rời Ember bằng Skiff, cửa The Hearth mở khi kén chạm cửa và đó là mốc C5.1. Câu "chỉ mở ở C5.1" đã bỏ (map:227). cot-truyen.md:32, 45, 501 và combat-driftlife.md 2.8 ghi cùng nội dung |
| L2 (Recall khi kéo kén, lưu vị trí kén) | Đã sửa | map.md:155: trong hộ tống kén không đi theo Recall Beacon, người kích beacon thì kén nằm lại, giữa các chuyến kén lưu ở beacon cố định gần nhất đã qua hoặc cửa N4. map.md:148 (2.7.2) thêm "vị trí kén hộ tống" vào trạng thái lưu. combat luật 42 khớp |
| L3 (đích C3.8) | Đã sửa | map.md:151, 227: kén về Ember bằng Recall Beacon (đi theo, 2.5.5) hoặc cửa khí, cả hai tính xong C3.8. combat 2.8 bảng mốc và cot-truyen.md:31, 42 ghi cùng hai cách |
| L4 (khoảng cách đường hộ tống) | Đã sửa | map.md:227: khoảng 120 u, hai đoạn phong tỏa, beacon ở khoảng 40 u và 90 u (ước, chốt khi dựng greybox) |
| L5 ("đầu não" lệch "tự tới Rig") | Đã sửa | map.md:231 "Nơi Serith chỉ huy ở bãi vỡ" |

## Kiểm ba file cùng một đích và một luật kén
| Tình huống | map.md | cot-truyen.md | combat-driftlife.md | Kết quả |
|---|---|---|---|---|
| Đích C3.8 | Ember, Recall Beacon hoặc cửa khí | dòng 31, 42, 439 | 2.8 | Khớp |
| Đích C5.1 | Cửa The Hearth, Skiff chở tới cửa N4 | dòng 32, 45, 501 | 2.8 | Khớp |
| Kén là vật kéo lớp Nặng, không bị nhắm, không nhận sát thương | 2.7.5 | dòng 743 (luật 23) | luật 40, 41 | Khớp |
| Người kéo ngạt hoặc bị kéo về | Kén rơi, nằm lại | dòng 743 | luật 42 | Khớp |
| Recall ngay khi kén bị bỏ lại ở C5.1 (kén ở cửa N4, chưa qua beacon) | Kén nằm lại, lưu ở cửa N4 | không mâu thuẫn | luật 42: kén nằm lại, chưa qua beacon nào thì ở cửa N4 | Khớp, kén không mất, chuyến sau Skiff không cần chở lại vì kén còn trong N4 |
| Host rớt giữa lúc kéo kén (K23, C10) | Chuyến dở mất, thế giới về điểm lưu gần nhất (bảng biên 497), kén ở vị trí đã lưu (2.7.2) | luật 23 không trái | không trái | Khớp. Kén không đi quá vị trí đã lưu nên không có chuyển trạng thái kẹt |

## Oxy hộ tống
Đường 120 u, đường vòng hệ số 1,3 thành 156 u, kén lớp Nặng 0,5 lần tốc độ bay (3,75 u/s ở bộ đẩy bậc 3, 3,5 u/s ở bậc 2): khoảng 42 giây kéo thuần, Oxy hao 1,25 lần nên khoảng 52 điểm. Cộng chờ Hàng rào cắt (bật 3 giây, tắt 2 giây), hai đoạn phong tỏa, tối đa 4 lần trúng H09 (4 x 25 = 100), hộ tống 210 giây trong nhánh, khu có khí Concourse và The Hearth không hao nền. Cận trên khoảng 210 x 1,25 + 100 = 360 điểm, chưa tính Skiff (Oxy không hao trong cảnh đi). Nếu bay tới cửa N4 thay vì Skiff thì thêm khoảng 73 giây. Bình dải Xa chương 5 là 780 đến 1000, trần chuyến 663 đến 850 giây (bảng 3.2). Còn dư. Cứu Sevra ở chương 3 (bình 600, trần 510): 78 giây bay, 180 giây trong nhánh, kéo về Ember bằng beacon 24 giây khoảng 285, còn dư. Nếu kéo về bằng cửa khí thì thêm khoảng 156 giây kéo hao 1,25 lần, tổng khoảng 380 trên 510, vẫn nằm trong bình nhưng sát (người chơi chọn).

## Zone.tsv
Hàng N4 (Z08, dòng 23 đến 25) và N8 (Z12, dòng 35 đến 37) so với map.md:227 và 231: QA tách từng câu của hàng map và tìm trong Zone.tsv, N4 khớp 11 trên 11, N8 khớp 8 trên 8. Zone sửa cùng giờ với map.md (10:29:54).

## Lỗi còn lại
| # | Mức | File:dòng | Vấn đề | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|
| L6 | Nhẹ | nguoi-choi.md:115, 163 | Luật Về an toàn và Kích Recall của gd-character vẫn ghi "vật kéo trong 3 u đi theo" mà không có ngoại lệ hộ tống (kén nằm lại). map.md 2.7.9 và combat luật 42 đã có ngoại lệ, map.md:131 (2.5.5) cũng chưa dẫn sang 2.7.9 | Thêm ngoại lệ vào nguoi-choi.md và một câu dẫn vào 2.5.5 | gd-character, gd-world |

Không có chặn hay nặng. Không có hệ thống mới. Giữ nguyên các mục "Bảng P1 đến P15", "Ý cũ", "Bảng tên" của vòng 1, vì map.md và Zone không đổi phần đó.
