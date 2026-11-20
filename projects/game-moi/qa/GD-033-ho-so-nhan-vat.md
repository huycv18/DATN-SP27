# GD-033 ho-so-nhan-vat
ĐẠT (sau GDM sửa 10:39), trước đó TRẢ LẠI vì 1 lỗi nặng: hồ sơ ghi Maro cập bến ba lần và bỏ cải trang ở C3.8 trong cảng, trái `cot-truyen.md` (hai lần cập bến, lộ mặt trên sóng radio ở N4). Không có lỗi chặn. Sửa dòng 115, 126, 164 thì ĐẠT.
Cập nhật 10:41: GDM đã tự sửa lỗi nặng (Maro hai lần cập bến khi còn cải trang, lộ mặt ở N4 khi chỉ huy toán bắt cóc C3.8, ở cảng chỉ dáng cải trang). gd-qa grep dòng 115, 126, 164 (file 10:39): khớp `cot-truyen.md` và `tram-va-cang.md:54`. Kết luận ĐẠT, 0 chặn, 0 nặng.

Giờ sửa file khi chấm: `ho-so-nhan-vat.md` 10:16 (42321 byte, đứng yên sau 20 giây), `Player.tsv` 10:16 (15147 byte), `cot-truyen.md` 10:32, `00-khung-game.md` 10:12, `_y-lead-phan-dien.md` 10:15. Vòng chấm GD-033: 1.

Phạm vi: phần đổi đợt 6 của hồ sơ (Serith, Sevra NP-5 gộp Ilsume TR-2, Maro, lính The Wardens, Sennari) và khối PL-06 của `gdd/sheet/Player.tsv`. Không chấm lại phần cũ đã ĐẠT ở GD-031.

## Tóm tắt lỗi
| Mức | Số lỗi |
|---|---|
| Chặn | 0 |
| Nặng | 1 |
| Nhẹ | 6 |

Đã kiểm không phạm: không trái lời Lead, không ý cũ trong luật, không thêm hệ thống, chủng tộc, rig hay phe mới (log 87). Validator `validate-gdd.mjs`: 2 lỗi, cả hai ở `ky-thuat.md:279` (gd-tech, "Sundering", dòng lịch sử), 0 lỗi ở hồ sơ.

## Lỗi
| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|---|
| 1 | Nặng | 3 | `ho-so-nhan-vat.md:115, 126, 164` | Maro: số lần cập bến và nơi lộ mặt trái mốc truyện | Dòng 115: "ba lần cập bến, lần thứ ba bỏ cải trang". Dòng 126: "ba lần cập bến, lần ba bỏ cải trang (C3.8)". Dòng 164: "Maro lộ mặt giữa ca cảng, hiện biến thể lộ mặt, tàu đổi màu". `cot-truyen.md:34` và 423-429: Maro cập bến Ember 2 lần (C3.3 và sau C3.4), C3.8 là cuộc bắt cóc ở Waypost Outer Ring của N4, "không cập bến Ember nữa". Lộ mặt trên sóng radio (`cot-truyen.md:438`). `tram-va-cang.md:54, 144`: TA08 đúng 2 lần. `cot-truyen.md:1234`: bản ba lần cập bến "hết hiệu lực từ đợt 6" | Dòng 115 và 126: hai lần cập bến, C3.8 lộ mặt trên radio ở N4. Dòng 164: đổi thành "Maro lộ mặt ở C3.8 trên sóng radio, không ở cảng Ember", bỏ "tàu đổi màu theo cùng lúc" nếu gd-quan không còn cảnh đó. Nói rõ biến thể lộ mặt dùng ở đâu (radio, bong bóng) vì không có cảnh trong cảng | gd-character |
| 2 | Nhẹ | 1 | `ho-so-nhan-vat.md:22, 111, 113` | Câu chép hai lần | Dòng 22: "NP-5 là Sevra Ilvane ... Chủng tộc: Sennari ... không thêm chủng mới" xuất hiện 2 lần liền. Dòng 111 và 113 trùng nhau ("Sevra (NP-5, trạng thái 2 ...)") | Xóa bản thừa | gd-character |
| 3 | Nhẹ | 2 | `ho-so-nhan-vat.md:125`, `Player.tsv` dòng 29 (PL-06 Characteristic) | Cụm "Ghét loài người vì cha ..." khớp mẫu quét "ghét vì tham lam", dù nghĩa đúng (hận vì cha chết, cái nhìn phiến diện) | `quet-phan-dien.mjs --chi-tiết`: 2 hit "ghét vì tham lam" (mẫu `ghét loài người vì`). Đọc ngữ cảnh: không có ý tham lam, là P2 và P5 đúng. Hit còn lại "đạo đức giả" và "tham lam hơn loài người" nằm ở dòng 353 (lịch sử thay đổi), được phép | Viết "hận loài người vì cha chết trong The Meeting War, cái nhìn phiến diện" để quét sạch. Hit ở dòng 353 giữ | gd-character |
| 4 | Nhẹ | 3 | `ho-so-nhan-vat.md:125, 121, 138` so `cot-truyen.md:22-25, 108` | Hồ sơ không ghi tên The Meeting War, The Kindling, The Hearth và không có dòng art cho người đưa tin của TA11 (The Kindling) và TA09 | Dòng 125: "tên cuộc chiến ở cot-truyen mục Tên mới" (trỏ chứ không ghi tên). Dòng 121 chỉ nhắc "mạng lưới cách mạng của Sevra" không tên. `cot-truyen.md:108`: TA09 là người đưa hàng gấp Sennari không tên, TA11 là tàu của The Kindling, hai người này xuất hiện ở ca cảng (chương 4 và 5). CHR-TA02 có (dòng 264), TA09 và TA11 không có | Ghi tên The Meeting War, The Kindling, The Hearth một lần. Thêm dòng art cho người đưa tin TA11 và TA09: rig Sennari, 1 lớp phủ mỗi người (đề xuất, không thêm rig) | gd-character |
| 5 | Nhẹ | 3 | `ho-so-nhan-vat.md:121, 128, 256` so `combat-driftlife.md:35-38, 163` | Hồ sơ gọi cả WD-01 đến WD-04 là lính Sennari, nhưng WD-01 là máy, WD-04 là tàu. Số "3 biến thể giáp" không khớp | `combat-driftlife.md:35`: WD-01 Harvester Drone "Máy The Wardens". Dòng 38: WD-04 Collector Barge "Tàu thu gom". Chỉ WD-02 Warden Lancer và WD-03 Snare Hunter là lính (dòng 36, 37), tức 2 loại. Hồ sơ dòng 128 và CHR-WD dòng 256 và `Player.tsv` PL-06 Animation: "3 biến thể giáp" | Sửa dòng 121: lính là WD-02 và WD-03, WD-01 và WD-04 là máy và tàu của chế độ. Đổi "3 biến thể" thành 2 hoặc ghi rõ 3 là gì | gd-character |
| 6 | Nhẹ | 5 | `ho-so-nhan-vat.md:106, 138, 257` | Sevra và Ilsume cùng silhouette: dòng đang nói thiếu, và số clip lệch | Dòng 138: Sevra "Bỏ mạng và mũ nhọn" nhưng mũ nhọn cao là đặc điểm silhouette chính của Ilsume (dòng 106), không nói áo choàng nghi lễ và vòng cổ có giữ không, nên chỉ còn "dáng thẳng, tóc buộc gọn" để nhận ra cùng một người. Dòng 257: CHR-SEVRA ghi "4 clip" nhưng liệt kê 5 (Idle, Nói, Chạy trốn, Kiệt sức, Bị kéo trong kén) | Ghi phần giữ lại của Sevra (áo choàng nhiều lớp, vòng cổ nghi thức, huy hiệu Ilvane) để silhouette test "nhận ra cùng một người" đo được. Sửa số clip 4 hoặc 5 | gd-character |
| 7 | Nhẹ | 3 | `ho-so-nhan-vat.md:339-344` | Bảng "Lệch cần vai khác sửa": việc 1 đã xong nhưng còn ghi là lệch | Việc 1 nói `ux-ui.md` dòng 29 ghi bộ màu khác. `ux-ui.md:30` nay ghi "theo `ho-so-nhan-vat.md` luật 6 (file chủ)" với đúng 4 hex. Việc 2 (combat màu) còn: `combat-driftlife.md:593` vẫn "vàng thường, đỏ đòn lớn" | Xóa việc 1. Giữ việc 2 chờ gd-combat | gd-character, gd-combat |

Còn từ GD-031 vòng cuối, ngoài phạm vi đợt 6, chưa sửa (hồ sơ không đổi các dòng đó): màu Rafa `#B8665C` S 50% vượt 45% và câu "đo 5 đến 42%", "0 cặp trượt" sai (dòng 44, 149, 322), Nhem không có hex màu chính, luật 12 thêm trục sáng chưa ghi là nới luật, Odile "tới hết chương 3" (dòng 40 và `Player.tsv` Lưu ý truyện) trong khi `cot-truyen.md` ghi tin tới mốc đóng chương 4, CHR-FACE-B Sau MVP so luật 11 MVP, CHR-RIG "3 tổng" chưa cập nhật (nay còn dùng rig Sennari cho Ilsume, Sevra, Serith, Maro, lính), dòng 188 nói NP chưa vào ScriptableObject còn `ky-thuat.md:70` có NP. Script bão hòa và Hue chạy lại trên hex hiện tại cho kết quả như vòng cuối (người chơi S 78 đến 88, 1 cặp trượt Noor-Nhem theo hex nhấn, 6 cặp nếu chỉ tính Hue và bão hòa). Đợt 6 không thêm hex mới (Sevra dùng `#A5667A` của Ilsume, Serith dùng `#EDEBE0` và `#7CFC3A`, Maro `#A3A8A0`) nên không phạm thêm luật màu.

## Bảng P1 đến P15 (có trong hồ sơ hay không, dòng nào)
| # | Ý của Lead | Trong hồ sơ | Nhận xét |
|---|---|---|---|
| P1 | Bỏ "tham lam hơn loài người" | Có (đã bỏ) | Chỉ còn ở dòng 353 lịch sử thay đổi, được phép |
| P2 | Cái nhìn loài người tham lam là phiến diện của một tên độc tài | Có, dòng 125 | "cái nhìn phiến diện của hắn, không phải sự thật" |
| P3 | X đảo chính, lật đổ người cai trị | Có, dòng 125, 138 | "độc tài cầm quyền Sennar", Ilvane "bị Serith lật đổ, chết trong giam cầm" |
| P4 | Người cai trị trước chủ trương hòa bình | Không, không bắt buộc ở hồ sơ art | Dòng 138 chỉ ghi Ilvane là Steward of Sennar, cha của Sevra. Ý nằm ở `cot-truyen.md:55` |
| P5 | X là con trai sĩ quan chết trong chiến tranh vũ trụ | Có, dòng 125 | "cha là sĩ quan chết trong cuộc chiến vũ trụ đầu tiên". Tên The Meeting War không ghi (lỗi 4) |
| P6 | X hướng sự chú ý sang Trái Đất | Không, không bắt buộc | Dòng 125 có Serith tới Warden Rig, ý đủ trong cốt truyện |
| P7 | Giả tín hiệu dụ rồi phục kích | Không, không bắt buộc | Dòng 40 giữ Solace là mồi, không viết thêm |
| P8 | Hành tinh chuyển hiếu chiến | Không, không bắt buộc | Dòng 121 gọi lính "kỷ luật", đủ cho art |
| P9 | Y là con gái người cai trị cũ, giả thương nhân | Có, dòng 106, 138 | TR-2 Ilsume trạng thái 1, NP-5 Sevra trạng thái 2 |
| P10 | Người chơi thấy tấn công, cứu Y | Có, dòng 138, 126 | "Người chơi cứu ở cuối chương 3 (C3.8)", Maro chỉ huy toán bắt cóc. Chi tiết Maro lệch (lỗi 1) |
| P11 | Y lộ danh tính, cầu giúp | Một phần, dòng 111 | Có lộ ở C3.8. Không ghi "cầu giúp", không cần cho art |
| P12 | Y cùng mạng lưới cách mạng chuẩn bị lật đổ | Thoáng qua, dòng 121 | Không tên The Kindling, không art người đưa tin TA11 (lỗi 4) |
| P13 | Đoàn hộ tống Y, kết nối tình báo | Có, dòng 138 | "hộ tống ở chương 5". Nối tình báo thuộc ca cảng, không cần ở hồ sơ |
| P14 | Cách mạng thành công, Y lên nắm quyền | Không, không bắt buộc | Thuộc cảnh kết, `cot-truyen.md` |
| P15 | Y trao thông tin hành tinh sống thật | Có, dòng 138 | "nhận tọa độ thật", khớp C5.6 |

## Bảng ý cũ còn sót
| Ý cũ | Còn trong hồ sơ hay Player.tsv | Dòng | Kết luận |
|---|---|---|---|
| tham lam hơn loài người | ho-so | 353 | Lịch sử thay đổi, được phép |
| đạo đức giả | ho-so | 353 | Lịch sử thay đổi, được phép |
| ghét loài người vì tham lam (mẫu `ghét loài người vì`) | ho-so, Player.tsv | 125, PL-06 dòng 29 | Khớp mẫu nhưng nghĩa đúng (vì cha chết). Nên viết lại để quét sạch (lỗi 3) |
| kẻ canh giữ, đàn được bảo hộ, thu hoạch công nghiệp, bản khảo sát bị giấu, Hollower, The Sundering, lòng tham nhân loại | Không | Grep hồ sơ: 0 chỗ | Sạch |
| The Wardens là chủng tộc | Không | Dòng 16, 121, 326, Player.tsv ghi "chế độ và quân" | Sạch. Hiện hành dòng 15 chỉ còn 5 chủng (Oru, Sennari, Brakk, Aelith, Kesh) |
| Serith là thủ lĩnh bãi vỡ ghét loài người vì tham lam | Không | Dòng 125 | Đã đổi thành độc tài Sennar, hận vì cha |

## Bảng tên (khớp hay lệch với `cot-truyen.md` mục "Tên mới")
| Tên | Hồ sơ | `cot-truyen.md` | Kết quả |
|---|---|---|---|
| Serith, WD-P1, BS-5, First Warden | Dòng 125 | Dòng 18, 132 | Khớp |
| Sevra Ilvane, NP-5 | Dòng 17, 22, 138 | Dòng 20, 131 | Khớp (hồ sơ chốt NP-5) |
| Ilsume, TR-2, TA04 | Dòng 101, 106, 111 | Dòng 21, 108, 563 | Khớp. Ghé từ chương 2, hết ghé sau C3.8 |
| Maro, WD-P2, TA08 | Dòng 101, 126 | Dòng 25, 133, 593 | Tên và mã khớp. Số lần cập bến lệch (lỗi 1) |
| Sennari, Sennar | Dòng 22, 121, 128 | Dòng 15, 16 | Khớp. Không thêm chủng mới |
| The Wardens là chế độ và quân, không chủng tộc | Dòng 16, 121 | Dòng 17, 114 | Khớp |
| Ilvane, Steward of Sennar | Dòng 138 | Dòng 19 | Khớp |
| The Meeting War, The Kindling, The Hearth, TA11 | Không ghi | Dòng 22, 23, 24 | Chưa ghi (lỗi 4), không lệch |
| The Scattering | Không nhắc | Có | Không lệch |

## Hệ thống mới (có hay không)
Không. Hồ sơ không thêm luật chơi, tiền, phe, chế độ chơi. Sevra và Ilsume dùng cùng rig Sennari đã có từ TR-2 nên không thêm chủng tộc hay rig chủng tộc (log 87). Phần art thêm của đợt 6 đều Sau MVP: CHR-SEVRA (2 lớp phủ, 4 hoặc 5 clip, 5 biểu cảm, dòng 257), CHR-WD tăng từ 3 lên 6 (giáp lính 3 biến thể, dòng 256). Art MVP không đổi: 9 mảnh bộ đồ, 25 clip người chơi, 14 clip NPC, rig nhân loại và Oru (đếm lại dòng 253 đến 264 và 337, khớp). Sevra, Serith, Maro, Ilsume đều Sau MVP, khớp `cot-truyen.md` (nhãn `Sau MVP`) và khung mục 12 (MVP là chương 1). Việc thêm không vượt ngân sách 1 artist 2D về mặt khung vì Sau MVP và dùng lại rig Sennari, nhưng lỗi 4 và 5 cần số liệu chính xác trước khi GDM đưa vào tab Assets.

## Khối PL-06 trong Player.tsv so với hồ sơ
| Mục | Kết quả |
|---|---|
| Type: Ilsume tên giả của Sevra, Serith và Maro thuộc chế độ, người Sennari | Khớp hồ sơ dòng 17, 106, 125 |
| Characteristic: slot, người vớt (chương), thương nhân, Serith, Maro, Sevra NP-5 Sau MVP | Khớp (hex slot, chương người vớt 1 1 2 2 3, Tikko MVP). Cụm "ghét loài người vì cha chết" như lỗi 3 |
| Attribute: 108 và 72 px, S của HSV 70 và 45, 25 độ Hue, bộ giáp trắng xương và lục acid, Sevra không dùng | Khớp dòng 35, 44, 142 đến 149 |
| Animation: 17, 8, 1 Sau MVP, 14 clip NPC, Sevra một rig hai lớp phủ, lính 3 biến thể | Khớp số 17, 8, 14. "3 biến thể giáp" lệch combat (lỗi 5) |
| Lưu ý truyện: Solace là mồi, Odile tin tới hết chương 3, mất ở chương 4 | Khớp hồ sơ dòng 40, nhưng cả hai lệch `cot-truyen.md` (tin tới mốc đóng chương 4), ghi ở mục "Còn từ GD-031" |
| Không có dòng PL-06 nào ghi Maro ba lần cập bến | Không lặp lỗi 1 |

## Bỏ qua / không kiểm được
- Chỉ đọc hồ sơ đủ 354 dòng, Player.tsv dòng 28 đến 34, các dòng liên quan của `cot-truyen.md` (Tên mới, bảng nhân vật, mốc C3.8, Maro, Ilsume, Sevra, Serith), `tram-va-cang.md` (TA08, TA09, TA11), `combat-driftlife.md` (WD-01 đến WD-04). Không đọc toàn bộ `cot-truyen.md` (khoảng 1200 dòng) và không kiểm các tab Player khác.
- `ky-thuat.md:279` còn "Sundering" (dòng lịch sử, do `validate-gdd.mjs` báo cho gd-tech), không thuộc hồ sơ.
- Không có build, không đo silhouette bằng người. Clip và mảnh đếm từ bảng trong hồ sơ.
