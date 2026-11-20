# GD-033 cot-truyen (`gdd/he-thong/cot-truyen.md`) và tab GAME STORY (`gdd/sheet/GAME STORY.tsv`)

ĐẠT - đủ 15 ý P1 đến P15, tên khớp các file khác, không hệ thống mới, tab khớp md. Không còn chặn hay nặng của gd-story, còn 6 lỗi nhẹ và 2 việc treo của người khác.
Giờ sửa file khi chấm (đã chờ đứng yên, `ls -l`): cot-truyen.md 10:32:14, GAME STORY.tsv 10:32:14, tram-va-cang.md 10:29:06, map.md 10:29:54, vat-pham.md 10:15:53, kinh-te-tien-trinh.md 10:10:12, ky-thuat.md 10:10:58, khung 10:12:47, combat-driftlife.md 10:34:16 (đổi sau khi tôi đọc phần hộ tống, không ảnh hưởng kết luận). Lần đọc đầu file ở 10:25 có TA09, gd-story sửa tiếp tới 10:32:14, phiếu này chấm bản 10:32:14.
Vòng chấm: 1 (GD-033). `node projects/game-moi/tools/validate-gdd.mjs`: 3 lỗi, không lỗi nào ở cot-truyen.md (ky-thuat.md:279 chữ Sundering và chờ GDM thuộc gd-tech, sheet/Day.tsv:47 "bản khảo sát" thuộc GDM). Đã đối chiếu với ba phiếu GD-033 của combat, map, tram-va-cang và `qa/_y-lead-phan-dien.md`.

## Bảng P1 đến P15
| # | Ý | Có | Dòng cot-truyen.md (và tab) |
|---|---|---|---|
| P1 | Bỏ "tham lam hơn loài người" | Có. Truyện nói rõ tội của Serith là dùng hận thù để giữ quyền, không kể hắn tham của. Dòng cấm giọng văn ghi "Lời kể Serith như một kẻ tham của" | 259, 1047. Tab GS dòng 2 |
| P2 | "Loài người tham lam, xấu tính" là cái nhìn phiến diện của một tên độc tài | Có. "Một nửa câu đó đúng: Trái Đất cạn kiệt. Nửa còn lại là hận thù của một người mất cha" | 55, 259 |
| P3 | X đảo chính lật đổ người cai trị | Có | 248, 55 |
| P4 | Người cai trị cũ chủ trương chung sống hòa bình sau chiến tranh vũ trụ nổ ra khi các hành tinh phát hiện nhau | Có | 22, 245, 246 (The Meeting War, Steward Ilvane) |
| P5 | X là con trai sĩ quan hy sinh trong chiến tranh đó, nuôi hận thù | Có | 22, 245, 594 |
| P6 | Hướng sự chú ý từ bất ổn trong hành tinh sang Trái Đất để giữ vị trí và đoàn kết chủng tộc | Có | 248 |
| P7 | Biết Trái Đất tìm hành tinh di cư, cho giả tín hiệu dụ rồi phục kích. Solace là mồi | Có | 247, 249 (Lodestar Survey), 250 (The Scattering), 56, 78 |
| P8 | Dưới X, hành tinh hòa bình thành hiếu chiến: ép lính, dung túng cướp bóc và tệ nạn, khơi mào chiến tranh | Có | 253, 252 |
| P9 | Y là con gái người cai trị cũ, người thừa kế hợp pháp, giả làm thương nhân | Có. Sevra Ilvane giả làm Ilsume | 20, 21, 131, 592. Ilsume ở bảng thương nhân dòng 563 |
| P10 | Người chơi tình cờ thấy cuộc tấn công, bắt cóc Y và cứu Y | Có. Tới Waypost Outer Ring thấy tàu TA04 bị áp mạn, hạ hoặc xua toán của Maro, kéo kén về Ember | 395, 429, 438 đến 440 |
| P11 | Biết đoàn là loài người đi tìm lời giải, Y lộ danh tính và cầu giúp | Có | 440, 441 |
| P12 | Y cùng mạng lưới quân cách mạng và người nằm vùng đã chuẩn bị lật đổ | Có. The Kindling | 24, 57, 85, 441, 592 |
| P13 | Hộ tống Y về căn cứ, hỗ trợ kết nối tình báo | Có. Hộ tống ở C5.1, nối tình báo bằng đơn tin mật của tàu TA11 ở C4.7 và C5.2 | 501, 502, 460, 475, 524. Tab GS dòng 38, 40, 41 |
| P14 | Cách mạng thành công, Y lên nắm quyền, lập lại hòa bình, giúp loài người tìm người sống sót | Có. C5.6 "vừa được tôn làm Steward of Sennar", cảnh rời neo có tàu của The Kindling dò các buồng ngủ đông còn chạy, lời Linh đọc câu 4 | 506, 629, mục 2.8 |
| P15 | Y trao thông tin hành tinh có sự sống thật để xây lại đế chế | Có. Tọa độ nằm trên bản đồ sao thật, hành trình tới đó để phần sau. Điểm trên bản đồ ở câu 2 | 59, 143, 506, 647, 657. Tab GS dòng 45, 47 |
Cùng lúc: "Solace là mồi" và "hành tinh thật" không mâu thuẫn. Dòng 78 ghi Solace là thông tin mồi, không có thật, hành tinh thật là một điểm khác do Sevra trao, chưa đặt tên. Dòng 647 giải thích vì sao tin tọa độ sau khi bị một hồ sơ lừa (do chính tổ Ember lấy bản đồ và Odile, Rafa tự kiểm). Câu "Solace là lời nói dối của hắn. Tọa độ này là lời hứa của tôi" (VO_SEV_03, dòng 1103) khớp.

## Ý cũ còn sót (chạy `quet-phan-dien.mjs --chi-tiet`)
Kết quả cho hai file: cot-truyen.md 3 hit, GAME STORY.tsv 1 hit, cùng một mẫu "kẻ canh giữ, đàn được bảo hộ". Không còn "tham lam hơn", "đạo đức giả", "bản khảo sát bị giấu", "chưa có đích", "Sundering", "Hollower", "ghét vì tham lam", "thu hoạch công nghiệp" và The Wardens không còn là chủng tộc. Mọi hit còn lại là tên chương đang dùng, không phải lịch sử hay ý đã bỏ:
| File, dòng | Trích | Loại |
|---|---|---|
| cot-truyen.md:141 | "3 \| Kẻ canh giữ \| N4 Veyl Waypost ..." | Tên chương 3 ở bảng danh mục |
| cot-truyen.md:380 | "Chương 3 - Kẻ canh giữ" | Tên chương 3 ở tiêu đề mục |
| cot-truyen.md:1156 | "hud.chapter.3 \| Chương 3: Kẻ canh giữ" | Thẻ tên chương |
| GAME STORY.tsv:22 | "Chương 3 - Kẻ canh giữ" | Tên chương 3 |
Tên chương này lấy từ khung mục 7 (khung:146), cũng có ở CORE LOOP.tsv:54 và Day.tsv:36. Nội dung chương nay là Sevra, không còn ý "tự xưng kẻ canh giữ". Là lỗi nhẹ (xem lỗi 1). Các hit cũ ở C3.7, C5.5, The Kept Herds, mục MM5.1, VO_SER_03, BS-5 đã đổi hết (C3.7 "Dấu săn trộm", C5.5 "First Warden", MM5.1 "Lệnh phục kích Cradle mang dấu Serith"). Phần "ý đã bỏ" hợp lệ còn lại ở lịch sử và mục "Thay đổi so với bản trước" (dòng 41 trong bảng mốc đổi) không bị máy quét tính nữa.

## Bảng tên (khớp hay lệch với các file khác)
| Tên | cot-truyen.md | Các file khác | Kết quả |
|---|---|---|---|
| Sennari, Sennar | dòng 15, 16, 109 | tram-va-cang (TA04, TA09), map | Khớp |
| The Wardens là chế độ và quân đội | 17, 82, 115 | combat, map, tram-va-cang | Khớp |
| Serith (WD-P1, BS-5), First Warden | 18, 594, 506 | combat:43, 381 | Khớp |
| Ilvane (Steward of Sennar) | 19 | không xuất hiện ở file khác | Khớp |
| Sevra Ilvane (NP-5), giả làm Ilsume (TR-2, TA04) | 20, 21, 131 | ho-so-nhan-vat:17, 111, 113, tram-va-cang:55, map | Khớp |
| The Meeting War | 22, 84 | không có ở file khác | Khớp |
| The Kindling | 23, 85 | combat, map, tram-va-cang | Khớp |
| Tàu của The Kindling | TA11 (mọi chỗ trong cot-truyen, 18 lần), TA09 chỉ còn là tàu đơn gấp ở dòng 109 và 1197 | tram-va-cang:55, 57, 241 là TA11, TA09 là tàu túi trộn Hạng 6 | Khớp. Lỗi G1 của GD-033-tram-va-cang đã đóng |
| The Hearth | 24, 86 | map:32, 39, 227 | Khớp, có trong bảng tên riêng |
| Maro (WD-P2, TA08) | 25, 134 | combat, tram-va-cang | Khớp. Hai lần cập bến |
| The Scattering | 25, 79, 205 | mọi file dùng tên mới | Khớp. Chữ cũ chỉ còn ở lịch sử và mẫu cấm của validator |
Tab GAME STORY: 17 hàng "Tên riêng" khớp 17 hàng bảng tên riêng ở md (kiểm bằng script, 0 lệch). Hàng The Kindling và The Hearth đã có (GS dòng 73, 74).

## Hệ thống mới
Không. Truyện chỉ thêm một sự kiện (bắt cóc ở C3.8), một vật kéo (kén BNG-102, dùng luật kéo buồng ngủ đông của chương 1), một loại đơn cảng (kiện tin mật CGO-421 từ gói STY-701, dùng luật ca cảng và máy đóng kiện sẵn có), một nhân vật hai trạng thái (Sevra, không mở tính năng) và một tàu có điều kiện truyện (TA11). Không thêm chủng tộc, art chủng tộc, tiền, phe hay chế độ chơi. Mục "Phạm vi của đợt 6" (điểm phản biện 14, dòng 1290, và dòng 818, 819) ghi đúng điều đó và nhãn Sau MVP, MVP không đổi.

## Đóng lỗi chéo của ba phiếu GD-033 khác
| Lỗi | Phiếu | Kết quả | Xác nhận |
|---|---|---|---|
| ID tàu The Kindling TA11 hay TA09 | tram-va-cang G1 | Đã đóng. gd-quan đúng | cot-truyen dùng TA11 ở dòng 23, 33, 44, 460, 502, 475, 744. TA09 chỉ còn là tàu đơn gấp (dòng 109) |
| Mục 2.5 còn mốc cũ | tram-va-cang G2, map L1 | Đã đóng | Bảng mốc C3.7 đến C5.8 theo Tên mới. 40 mốc trong md khớp 40 hàng GS (script, 0 lệch cả tên, điều kiện, nơi, mở) |
| Điểm đích C3.8 | map L3 | Đã đóng | C3.8: kén "về tới Ember, qua cửa khí hoặc bằng Recall Beacon" (dòng 395), khớp map:227, 194 (beacon hoặc cửa khí) và combat 2.8 |
| Đường hộ tống và điều kiện C5.1 | map L1 | Đã đóng | Skiff chở nhóm và kén từ Ember tới cửa N4, kéo qua vòng phong tỏa tới cửa The Hearth, C5.1 xong khi kén chạm cửa (dòng 32, 501, 524) khớp map:155 luật 2.7.9 và combat 2.8. Điều kiện bắt đầu hộ tống là Skiff sau C4.7 |
| Bảng tên thiếu The Kindling và The Hearth | combat L3, tram-va-cang | Đã đóng | Dòng 85, 86 và GS dòng 73, 74. Validator không còn "Tên riêng lạ" ở cot-truyen |
| Ý cũ ở BS-5, VO_SER_03, MM5.1 | combat L2 (16 hit) | Đã đóng | Còn 3 hit ý cũ chỉ là tên chương 3 (xem trên) |
| C5.5 Serith bị bắt giao The Kindling | combat L2 | Đã đóng | Dòng 505, 506, vai truyện BS-5 "bị khuất phục, bị bắt và giao cho The Kindling" |
| Luật 35 danh sách mốc trong ca | tram-va-cang G4 | Đã đóng ở cả hai file | tram-va-cang:135 "C1.8, C2.3, C3.3, C3.4, C4.7, C5.2" và luật 21 cot-truyen (dòng 178) cùng danh sách. C3.8 không còn trong ca |
| Serith "tự tới Rig" so với "đầu não" | map L5 | Còn, nhẹ, không phải của gd-story | map L5 yêu cầu gd-world đổi chữ ở map |

## Mốc, sàn ngày, mục tiêu co-op
| Kiểm | Kết quả |
|---|---|
| Mốc truyện khớp tram-va-cang luật 35 | Khớp: C1.8, C2.3, C3.3, C3.4, C4.7, C5.2 |
| Sàn ngày 7, 5, 8, 3, 3 (tổng 26) | Cộng đúng 26. Chương 1 là 7 ngày x 15 đến 20 phút = 1,75 đến 2,33 giờ. Chuỗi ngày chương 3 đến 5 theo bảng mốc mới khớp (C3.8 ở ngày 8, TA11 ngày đầu chương 4 với đơn thứ nhất, ngày đầu chương 5 với đơn thứ hai). Khớp kinh-te-tien-trinh.md:231, 544, 671 dùng đúng sàn này |
| Mục tiêu co-op 60 đến 75% (log 69) | Khớp kinh-te-tien-trinh.md:350 (73%, Đạt) và khung. Số này là lần chạy trước đợt 6. gd-economy chưa chạy lại sim sau đợt 6 (tin mật, hộ tống), chuỗi tin mật không đổi sàn ngày nên không thay đổi kết luận, nhưng cần chạy lại. Không phải lỗi của truyện |
| Cả game 12 đến 15 giờ | Sàn cả game khoảng 8,3 đến 10,4 giờ, thấp hơn mục tiêu, không phá |
| Chương 1 1,5 đến 2 giờ | Sàn 1,75 đến 2,33 giờ, cao hơn trần khi ngày chương 1 dài hơn 17 phút. Sim đo ngày chương 1 khoảng 14,8 phút (kinh-te:348) nên vẫn trong mục tiêu. Truyện đã nói rõ ở mục 5 |
| P3 chơi một mình | Có. Hộ tống: kén là vật kéo giống buồng ngủ đông chương 1 mà một người vẫn kéo được (combat luật 40 đến 43, map luật 2.7.9 nói không cần đồng đội). Toán bắt cóc một mình hạ được (combat: một mình thắng mọi boss và đội hình, bảng toán 2 Lancer, 1 Snare Hunter, 2 Drone). Nối tình báo: một kiện CGO-421 mỗi đơn, tối đa một gói STY-701 mỗi ngày, không nhân theo N (tram-va-cang HC15 và TA11 "đúng 1 kiện ở mọi số người"). Truyện: "Không mốc, quest hay cảnh nào cần đúng N người" (dòng 810) |

## Lỗi
| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|---|
| 1 | Nhẹ | 3 | cot-truyen.md:141, 380, 1156. GAME STORY.tsv:22. khung:146. CORE LOOP.tsv:54. Day.tsv:36 | Tên chương 3 "Kẻ canh giữ" còn, máy quét ý cũ báo 4 hit. Tên lấy từ khung mục 7 | `quet-phan-dien.mjs --chi-tiet`: 3 hit md, 1 hit GS | GDM chọn: đổi tên chương 3 (ví dụ theo C3.8 "Người thừa kế") ở khung và các file, hoặc ghi ngoại lệ cho máy quét vì Serith tự phong First Warden | GDM, rồi gd-story |
| 2 | Nhẹ | 2 | cot-truyen.md:395, GAME STORY.tsv:30 | Mốc C3.8: điều kiện giai đoạn 3 của K25 nằm ở câu thứ hai ("Cuộc bắt cóc chỉ xảy ra khi giai đoạn 3 đã lắp") thay vì là một điều kiện trong danh sách như C1.9, C2.8, C4.7. Luật 2 buộc "mọi điều kiện trong danh sách" | So dòng 253, 297, 460 (điều kiện giai đoạn nằm cuối danh sách, nối "và") với dòng 395 | Viết lại điều kiện C3.8: "Kén thoát hiểm ... về tới Ember ... và giai đoạn 3 của động cơ chính đã lắp (K25)" | gd-story |
| 3 | Nhẹ | 1, 3 | cot-truyen.md mục "Lệch với vai khác" (hàng 2, 3, 8, 9, 13) | Bảng "Đang mở" còn năm dòng đã đóng: hàng 2 ghi sim dùng bộ 6, 5, 8, 3, 4 (nay 7, 5, 8, 3, 3 theo kinh-te:231, 671), hàng 3 ghi schema một điều kiện (ky-thuat.md:68 đã là danh sách), hàng 8 ghi luật 38 chưa sửa (tram-va-cang:141 đã sửa), hàng 9 bảng hòm Wick (map đã sửa), hàng 13 hồ sơ Sevra (ho-so-nhan-vat đã có NP-5) | Đối chiếu các file | Chuyển sang "Đã hết lệch" | gd-story |
| 4 | Nhẹ | 2 | cot-truyen.md mục 5, bullet "gd-economy đã đưa bộ số đầu (6, 5, 8, 3, 4) vào sim ... 72% ... cao hơn mục tiêu cũ" | Cũ: sim nay dùng sàn 7, 5, 8, 3, 3 và co-op trong mục tiêu 60 đến 75% | kinh-te-tien-trinh.md:231, 350 | Viết lại hoặc xóa bullet | gd-story |
| 5 | Nhẹ | 3 | cot-truyen.md:1197, 1215 | Hai chỗ ghi lịch sử còn nhắc "tên TA02 và TA09" như đã hết lệch trong khi TA09 nay có vai khác. Không gây hiểu sai nhưng dễ nhầm | dòng 109 nói TA09 là tàu đơn gấp | Thêm "TA11 là tàu của The Kindling" vào hàng gd-quan ở "Đã hết lệch" | gd-story |
| 6 | Nhẹ | 2 | cot-truyen.md:1034, 1047 | Giọng The Wardens "giữ, canh, bảo hộ" vẫn có từ "canh" và "bảo hộ" của ý cũ. Chỉ là cách nói của chế độ, không còn là lời kết tội loài người, nhưng gần ý cũ | Dòng 1034 | GDM xác nhận giữ hoặc thay "canh, bảo hộ" bằng từ của trật tự và bổn phận | GDM, gd-story |

## Việc treo của người khác (không tính lỗi của gd-story)
| Việc | Người |
|---|---|
| Sim kinh tế chưa chạy lại sau đợt 6 (đơn tin mật, hộ tống, C3.8, mục tiêu co-op 60 đến 75%) | gd-economy, gd-tech |
| Khung mục 7 và B3 đến B11 còn X, Y là tên giữ chỗ (khung:68, 73), sheet/Day.tsv:47 còn "bản khảo sát". ky-thuat.md:279 còn chữ Sundering trong mô tả validator | GDM, gd-tech |

## Bỏ qua / không kiểm được
- Không chơi build (chưa có). Không kiểm lại các phần cũ đã ĐẠT trong GD-031, chỉ kiểm phần chạm phản diện.
- Không tra lại link mục 12 của vòng GD-031.
- Không đọc nội dung các file khác ngoài các dòng đối chiếu truyện (map, combat, tram-va-cang, vat-pham, ky-thuat, kinh-te, ho-so-nhan-vat, ba phiếu GD-033).
- File combat-driftlife.md đổi lúc 10:34 sau khi tôi đọc, nên dòng dẫn combat lấy theo lần đọc 10:25 đến 10:32.
