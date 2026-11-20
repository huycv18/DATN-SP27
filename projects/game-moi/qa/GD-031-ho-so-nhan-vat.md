# GD-031 ho-so-nhan-vat
TRẢ LẠI (vòng cuối) - hồ sơ đã sửa 8 trong 9 lỗi nặng, còn 1 lỗi nặng chéo file: `ux-ui.md` dòng 30 vẫn ghi bộ màu slot cũ, trái luật 6 của hồ sơ. Sửa đúng một dòng đó thì ĐẠT.
Giờ sửa file khi chấm: 08:55 (`ls -l`, 38144 byte, đứng yên sau 20 giây). `nguoi-choi.md` 08:57, `cot-truyen.md` 08:57, `ux-ui.md` 08:54, khung 04:54 (lần 5). Vòng chấm: 2 (vòng cuối).

## Vòng cuối
Validator `node projects/game-moi/tools/validate-gdd.mjs`: 0 lỗi, 379 ID.
Tóm tắt vòng cuối: chặn 0, nặng 1, nhẹ 10 (4 còn từ vòng 1, 6 mới). Đã sửa 17 trong 22 lỗi vòng 1 (8 nặng, 9 nhẹ). Còn 4: lỗi 1 (nặng), lỗi 11, 13, 18 (nhẹ), kèm phần dư nhẹ của lỗi 9 (thiếu clip vào buồng ngủ). Lỗi 21 chấp nhận.

Người sửa việc còn lại:
| Việc | Người sửa |
|---|---|
| Lỗi 1: `ux-ui.md:30` đổi sang Slot 1 ○ cam `#F26B1D`, Slot 2 △ lam ngọc `#1FB5D6`, Slot 3 □ vàng chanh `#D8E21F`, Slot 4 ◇ hồng tím `#D6309B` (hồ sơ luật 6, `nguoi-choi.md:516` cũng ghi việc này) | gd-ux |
| Lỗi 18: `combat-driftlife.md:570` báo trước đòn "vàng thường, đỏ đòn lớn", hồ sơ dòng 156 và 336 đã ghi chấp nhận nếu không đổi | gd-combat |
| Lỗi nhẹ còn lại và lỗi mới N1 đến N6 | gd-character |

### Trạng thái từng lỗi vòng 1 (số khớp bảng "Lỗi" bên dưới)
| # | Mức vòng 1 | Trạng thái | Bằng chứng kiểm lại |
|---|---|---|---|
| 1 | Nặng | CÒN (một nửa) | Hồ sơ đã đúng: luật 6 dòng 37 có 4 hex kèm hình ○ △ □ ◇, ghi là nguồn duy nhất, mục "Lệch" dòng 335 giao ux-ui. Nhưng `ux-ui.md:30` vẫn "Slot 1 xanh lục ○, Slot 2 cam △, Slot 3 xanh dương □, Slot 4 tím ◇" (grep lúc chấm, file sửa 08:54 trước hồ sơ 08:55). Hai file vẫn trái nhau. Phiếu `GD-031-ux-ui.md` không có dòng nào về việc này |
| 2 | Nặng | Đã sửa | Clip 17 nhãn MVP (dòng 209), tham số dòng 146 "17 (MVP)", CHR-ANIM dòng 254 "17 và 8 (cộng 1 Sau MVP)". Khớp khung mục 12 và `cot-truyen.md` C1.5 |
| 3 | Nặng | Đã sửa | Dòng 233: đai "3, 4, 5 ô", MVP bậc 0 và 1. Khớp `nguoi-choi.md:37` và 183. CHR-PART dòng 253 ghi MVP 9 mảnh (2+1+2+2+2) |
| 4 | Nặng | Đã sửa | Dòng 66 tách ba người kéo từ buồng (đồ Seed Station) khỏi Amara, Yusuf đang thức. Dòng 86 và 223: clip "Bước xuống từ xuồng hoặc Skiff" Sau MVP. Khớp `cot-truyen.md:181` |
| 5 | Nặng | Đã sửa | Dòng 28: 30 giây đầu chỉ có buồng, màu và hình slot, Ingrid và Linh hiện ở C1.4 và C1.6. Khớp `cot-truyen.md:248, 250` |
| 6 | Nặng | Đã sửa (còn dư nhẹ, xem N1, N2) | Chạy lại script HSV trên hex mới: người chơi S 88, 86, 86, 78 (đều trên 70%, khớp "đo 78 đến 88%"). Tikko `#C2A77E` S 35%. Noor-Tikko dH 14 (H 22 so 36), dS 53, qua. Tariq 54% thành 78%, Mei 67% thành 86%. Chín cặp trượt cũ: còn 1 cặp trượt theo hex trong file (Noor-Nhem, N1) |
| 7 | Nặng | Đã sửa (dư nhẹ N4) | Luật 11 dòng 42: người ban đầu chọn preset, mỗi preset một slot, người vào sau lấy slot trống thấp nhất, biến thể B, bắt buộc đặt tên mới, buồng tắt giữ tên mặc định, hết slot "Phòng đầy". Biên dòng 164 và 165, bảng co-op dòng 302. Khớp `nguoi-choi.md:225, 227` (cũng ghi tên mới bắt buộc) và `cot-truyen.md:541` |
| 8 | Nặng | Đã sửa | Luật 10 dòng 41: chiều cao và silhouette chỉ là hình, va chạm 0,4 u cho mọi preset (khớp `nguoi-choi.md:63`). Luật 4 dòng 35: scale đồng đều, chênh tối đa 20% quanh 1,0 u (Mei 0,9 là 10%, Tariq 1,2 là 20%, đúng). Wren 0,6 u là ngoại lệ ghi tên, rig trẻ em |
| 9 | Nặng | Đã sửa (còn dư nhẹ) | Có bảng clip NPC MVP dòng 235-241 (Ingrid 4, Linh 4, Tikko 6, tổng 14, kèm thời lượng, loop, 5 biểu cảm mỗi người), CHR-ANIM-NPC, CHR-RIG, CHR-TA02 dòng 255-257. Số dòng 329 khớp bảng. Còn thiếu clip "Vào buồng ngủ đông" (K23), CHR-RIG đếm thiếu (N5) |
| 10 | Nhẹ | Đã sửa | Bảng chương và chức năng K12 dòng 88-96 khớp `cot-truyen.md:77-81`. "Ghé cảng từ" dòng 110 |
| 11 | Nhẹ | CÒN (nhẹ) | Luật 1 đến 12 và tiêu chí đã có nhãn. Bảng tính cách dòng 78-84, bảng biên dòng 151-165 và mục 6 dòng 176-183 vẫn không nhãn |
| 12 | Nhẹ | Đã sửa | Bảng NP dòng 127-132 có cột Chiều cao, Biểu cảm, Nhãn. NP-2 "MVP (chỉ giọng), Sau MVP (hiện hình)" khớp `cot-truyen.md` |
| 13 | Nhẹ | CÒN (một phần) | Bão hòa đã chốt là S của HSV (luật 3). Còn: luật 3 "tối đa 6 màu chính" so khoảng an toàn "4 đến 8" (dòng 140), nhấn "2" (luật 3) so "1 nhấn trầm" của người vớt (dòng 86) |
| 14 | Nhẹ | Đã sửa | Bảng "Lệch" dòng 331-336 chỉ còn 2 việc thật (ux-ui, combat), dấu CHỜ gd-ux bỏ (dòng 163) |
| 15 | Nhẹ | Đã sửa | Dòng 25, 138, 269: 108 điểm ảnh, 17,8 u, khoảng an toàn 72 (720p) đến 130, tiêu chí 1 lặp ở 1280x720 |
| 16 | Nhẹ | Đã sửa | Dòng 123: Serith là boss BS-5, cần clip chiến đấu và cỡ boss do gd-combat cấp |
| 17 | Nhẹ | Đã sửa | Dòng 121: đường lục 10% là chi tiết thưởng, manh mối bắt buộc nằm ở hành vi hỏi mua |
| 18 | Nhẹ | CÒN (nhẹ) | `combat-driftlife.md:570` vẫn "vàng thường, đỏ đòn lớn". Hồ sơ dòng 156 ghi gd-combat chưa xác nhận, nếu không đổi thì chấp nhận. Chờ gd-combat quyết |
| 19 | Nhẹ | Đã sửa | Nhem "câu ngắn hai vế" (dòng 108), sổ ghi mẫu của Amara (dòng 73), cốc trà của Yusuf (dòng 74) |
| 20 | Nhẹ | Đã sửa (sinh N6) | `ky-thuat.md:69` đã có NP. Nhưng hồ sơ dòng 182 vẫn ghi NP chưa đưa vào ScriptableObject, hai file trái nhau |
| 21 | Nhẹ | Chấp nhận | Tham số vẫn "ước", dòng 146 thêm "chốt khi artist có bản thử" |
| 22 | Nhẹ | Đã sửa | Dòng 262 ghi nguồn 15 của `15-character.md`, đúng (GameSpot, creative director Spiritfarer) |

### Lỗi mới vòng cuối (đều nhẹ)
| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|---|
| N1 | Nhẹ | 2, 3 | `ho-so-nhan-vat.md:43, 108, 143, 315` | Câu "bộ màu đã kiểm bằng script, 0 cặp trượt, NPC đo 5 đến 42%" không tái hiện được | Script HSV trên hex trong file: Rafa `#B8665C` S 50% (vượt 45%, trái luật 3 và dòng 143). Nhem chỉ có hex nhấn `#D8382C` S 80%, không có hex cho màu xám đen chính. Dùng hex đó thì Noor-Nhem trượt (dH 18, dS 8, dV 10). Dromm nhấn đồng `#B87333` S 72% cũng ngoài khoảng nếu tính nhấn | Hạ Rafa còn S 45% hoặc thấp hơn. Thêm hex xám đen chính của Nhem. Ghi rõ luật 3 áp cho "màu nhận diện chính" hay cả nhấn nhỏ | gd-character |
| N2 | Nhẹ | 3 | `ho-so-nhan-vat.md:43, 273` | Luật 12 thêm điều kiện "chênh sáng từ 25 điểm" so với tiêu chí 5 vòng 1 (chỉ Hue hoặc bão hòa) mà không ghi là nới luật | Chỉ xét Hue hoặc bão hòa: trượt 5 cặp không liên quan Nhem là Rafa-Bram (dH 24, dS 10), Yusuf-Wren (16, 20), Tikko-Bram (5, 5), Dromm-Serith (21, 2), Wren-Maro (15, 9). Cả 5 chỉ qua nhờ chênh V từ 28 đến 50 | Ghi vào Điểm tự quyết rằng đã thêm trục sáng, hoặc đổi màu cho 5 cặp | gd-character |
| N3 | Nhẹ | 3 | `ho-so-nhan-vat.md:39` so `cot-truyen.md:513` | Odile mất niềm tin sai mốc | Hồ sơ: giữ niềm tin tới hết chương 3 và mất ở chương 4. `cot-truyen.md:513`: tin Solace là thật tới mốc đóng chương 4, và cảnh mở chương 4 bà vẫn nói đi tới Solace | Viết "tới mốc đóng chương 4" (K25) | gd-character |
| N4 | Nhẹ | 1 | `ho-so-nhan-vat.md:42, 258` | Luật 11 là MVP và co-op MVP có người vào sau, nhưng CHR-FACE-B (biến thể B) ghi Sau MVP | Luật 11 gắn `MVP`, `nguoi-choi.md` 2.9 ghi "MVP luật". Dòng 258 "Sau MVP, 4 biến thể". Người vào sau trong MVP chỉ cần biến thể B của preset 1 và 2 | Đổi CHR-FACE-B thành MVP, 2 biến thể (preset 1 và 2), 2 còn lại Sau MVP | gd-character |
| N5 | Nhẹ | 1 | `ho-so-nhan-vat.md:35, 256, 318` | CHR-RIG đếm "3 tổng" nhưng luật 4 và Điểm tự quyết nói mỗi chủng Veyl một rig | Rig cần: nhân loại, Oru, trẻ em (Wren), cộng Sennari, Brakk, Aelith, Kesh, và rig của The Wardens chưa nói (Serith, Maro). Ít nhất 7 | Sửa "7 tổng" hoặc ghi rig nào dùng chung, nói rõ rig của The Wardens | gd-character |
| N6 | Nhẹ | 3 | `ho-so-nhan-vat.md:182` so `ky-thuat.md:69` | Hai file trái nhau về NP trong `CharacterProfile` | Hồ sơ: "NP chưa đưa vào ScriptableObject (Sau MVP)". `ky-thuat.md:69`: "id (PC, RS, TR, NP, WD-P)" | Hồ sơ đổi theo `ky-thuat.md` (NP có, nhãn Sau MVP cho dữ liệu) | gd-character |

### Kiểm theo yêu cầu vòng cuối
| Mục | Kết quả |
|---|---|
| Đếm lại art MVP | Mảnh bộ đồ MVP 9 (bình 2, vỏ 1, bộ đẩy 2, túi 2, đai 2): khớp dòng 253 và 329. Clip người chơi MVP: ngoài 17 (đã đổi clip bắt sang MVP, vòng 1 đếm 16), trong trạm 8 (clip 9 Sau MVP). Tổng 25. Clip NPC 4 + 4 + 6 = 14. Cộng 39: khớp dòng 329 "39 clip" và 255. Biểu cảm NPC 5 x 3 = 15 khớp dòng 329 |
| Script HSV | Chạy lại cho 20 nhân vật (hex trong file, Nhem lấy hex nhấn). Người chơi S 78 đến 88. NPC S 5 đến 42 trừ Rafa 50 và Nhem 80. Cặp trượt (Hue, bão hòa, sáng): 1 (Noor-Nhem). Cặp trượt chỉ theo Hue và bão hòa: 6. Xem N1, N2 |
| The Scattering | Khung K3 và từ điển dùng The Scattering, `cot-truyen.md:85, 516` cũng vậy. Hồ sơ không còn nhắc tên vụ nổ (0 chỗ The Sundering). Còn 1 chuỗi "Sundering" ở `ky-thuat.md:373` (dòng lịch sử đổi tên, không phải luật) |
| Tên tiếng Anh | Station Cinder, Veyl Waypost, Lantern, The Raft, The Lattice, Seed Station, Skiff, mọi chủng và tên người: tiếng Anh. Không lỗi |
| K25 | Hồ sơ không có cổng chương riêng. Chỗ duy nhất liên quan là Odile (N3) |
| K27 | Hồ sơ không viết người ngạt trao hoặc thả đồ. Clip "Trao đồ" và "Ngạt" tách riêng, không trái |
| Tên, vai, chương, nhãn so `cot-truyen.md` | Khớp: 4 preset, 5 người vớt (chương 1, 1, 2, 2, 3), 5 thương nhân, Serith, Maro, 4 người phụ, nhãn MVP và Sau MVP. Bram "MVP (chỉ giọng), Sau MVP" khớp |
| L13, L14, P3 | L13 khớp (người vào sau là người sống sót vớt về, người rời thì nhân vật ở lại trạm). L14 khớp dòng 39 (Solace là mồi, chỉ Odile giữ niềm tin, xem N3 về mốc). P3: không nhân vật nào cần đúng N người, người vào sau có luật đủ |
| Yêu cầu art cho 1 artist | Đo được: có bảng clip, thời lượng, loop, số lượng, tiêu chí đo 108 và 72 px. Còn phải đoán: rig The Wardens, clip vào buồng ngủ, mô tả bậc giữa bộ đồ, tuổi và nét mặt (xem lớp 5 vòng 1) |

---
# Phiếu vòng 1 (giữ để tra, số lỗi, dòng và bằng chứng theo bản hồ sơ 04:03)
## Phiếu vòng 1
TRẢ LẠI - 9 lỗi nặng (slot màu lệch `ux-ui.md`, clip bắt sống gắn nhầm Sau MVP, đai dụng cụ lệch `nguoi-choi.md`, người vớt đang thức bị ghi "thức dậy từ buồng", hex màu tự phạm luật màu của file, luật người vào sau tự mâu thuẫn, thiếu luật chiều cao với va chạm, yêu cầu art chưa đủ để lập tab Assets). Không có lỗi chặn.
Giờ sửa file khi chấm: 04:03 (`ls -l`, 32247 byte). Vòng chấm: 1.

Validator `node projects/game-moi/tools/validate-gdd.mjs` chạy lúc chấm: 0 lỗi, 325 ID. Ba lỗi NP-1, NP-3, NP-4 thiếu nhãn đã sửa (dòng 114, 116, 117 giờ ghi "Sau MVP" ở cột Ghi chú). Lưu ý: validator chỉ tìm chữ "MVP" trong hàng, nên NP-2 qua cổng nhờ chuỗi "không cần art ở MVP" (xem lỗi 12).

## Tóm tắt lỗi
| Mức | Số lỗi |
|---|---|
| Chặn | 0 |
| Nặng | 9 |
| Nhẹ | 13 |

## Lỗi
| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng (trích số, dòng, so với file nào) | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|---|
| 1 | Nặng | 3 | `ho-so-nhan-vat.md:50-53, 270-271, 283` so `ux-ui.md:29` | Bốn màu slot ghi hai bộ khác nhau | Hồ sơ: Slot 1 cam `#E8743B`, Slot 2 lam ngọc `#2FB7C9`, Slot 3 vàng chanh `#D9E04A`, Slot 4 hồng tím `#C45AA6`. `ux-ui.md:29`: "Slot 1 xanh lục, Slot 2 cam, Slot 3 xanh dương, Slot 4 tím" kèm hình ○ △ □ ◇ và câu "Màu chốt cuối do Artist". Hồ sơ không có hình đi kèm, luật 6 (dòng 37) chỉ nói màu. Xanh lục của ux còn gần `#5C8A5A` của Odile (dòng 114) | Chọn một bộ hex ở hồ sơ (chủ Player), ux-ui đọc từ đó. Thêm hình slot vào luật 6 để HUD không chỉ dựa vào màu | gd-character chốt, gd-ux đổi dòng 29 |
| 2 | Nặng | 3 | `ho-so-nhan-vat.md:192, 228, 131, 297` so khung mục 12 (`00-khung-game.md:179`), `cot-truyen.md:210`, `nguoi-choi.md` mục 2.5 | Clip 17 "Dùng dụng cụ bắt" ghi Sau MVP, nhưng bắt sống loài nhỏ bằng lưới là MVP chương 1 | Khung mục 12: "bắt sống loài nhỏ bằng lưới" thuộc MVP. `cot-truyen.md:210`: C1.5 Ingrid chế Súng lưới TOL-202 ở chương 1. `nguoi-choi.md` 2.5 (nhãn MVP) có hàng "Bắt sống". Trong file: dòng 228 CHR-ANIM "17 và 8 | MVP" và dòng 297 "25 clip" MVP, nhưng bảng dòng 175-192 chỉ có 16 clip ngoài không gian nhãn MVP | Đổi clip 17 thành MVP. Sau đó 16 thành 17 clip MVP, khớp dòng 228 và 297 | gd-character |
| 3 | Nặng | 3 | `ho-so-nhan-vat.md:215, 227` so `nguoi-choi.md:28-33, 177` | Đai dụng cụ lệch số ô và lệch nhãn MVP | Hồ sơ: "Đai dụng cụ \| 3 \| 2, 3, 4 ô thấy được \| Bậc 0". `nguoi-choi.md:33`: T-DUNGCU 3 bậc, số ô 3, 4, 5, nhãn "MVP bậc 0 và 1". Dòng 177: bậc 1 mở ở chương 1. Dòng 227 CHR-PART lại ghi MVP bậc 0 và 1 cho cả 5 trục, mâu thuẫn ngay trong file với dòng 215 | Sửa thành 3, 4, 5 ô, MVP bậc 0 và 1. Số mảnh MVP của đai là 2, tổng mảnh MVP là 9 | gd-character |
| 4 | Nặng | 3 | `ho-so-nhan-vat.md:63, 83` so `cot-truyen.md:160, 924` (câu 7), `tram-va-cang.md:104` | Mọi người vớt "thức dậy từ buồng ngủ đông" và mặc đồ Seed Station, nhưng Amara và Yusuf đang thức | `cot-truyen.md:160`: "Amara Okafor và Yusuf Demir đang thức, không nằm trong buồng". Bảng dòng 924: "Cả năm đều kéo buồng" là phương án đã bỏ. `tram-va-cang.md:104`: người vớt đặt ngoài buồng thì tới Ember theo mốc truyện. Dòng 63 ghi mọi người vớt mặc đồ trạm cũ xám nhạt mang số hiệu buồng, trong khi dòng 70 Amara mặc blouse ngả vàng và dòng 71 Yusuf áo phản quang | Dòng 83: clip "thức dậy từ buồng" chỉ cho Ingrid, Linh, Rafa. Amara và Yusuf cần clip "bước xuống từ xuồng hoặc Skiff". Dòng 63: đồ Seed Station chỉ cho ba người kéo từ xác trạm | gd-character |
| 5 | Nặng | 3 | `ho-so-nhan-vat.md:28` so `cot-truyen.md:104, 209-212` | "30 giây đầu ... nhận ra Ingrid và Linh qua hình dáng" sai mốc truyện | `cot-truyen.md:104`: 30 giây đầu chỉ có buồng, radio tự động và cửa khí. C1.4 và C1.6 (dòng 209, 211): Ingrid và Linh về trạm sau các chuyến vào Station Cinder. Art mở màn không có hai người này | Viết lại: 30 giây đầu người chơi thấy 1 đến 4 buồng và màu slot trên bộ đồ. Ingrid và Linh là lần đầu xuất hiện ở C1.4 và C1.6 | gd-character |
| 6 | Nặng | 2, 3 | `ho-so-nhan-vat.md:34, 50-53, 67-71, 91-95, 127-128, 241, 243` | Hex màu tự phạm luật màu và tiêu chí 5 của chính file. Tính bằng script (HSV, xem mục Số kiểm) | Luật 3: người chơi bão hòa từ 70%. Tariq `#C45AA6` đo 54% (HSL 47%), Mei `#D9E04A` đo 67% (HSL 71%). Luật 3: NPC tới 45%. Tikko `#E0A030` đo 79% (HSL 74%, MVP), Ilsume 67%, Rafa 63%, Ingrid 55%, Yusuf 51%. Tiêu chí 5 (dòng 243): hai nhân vật cùng cảnh cách 25 độ Hue hoặc 25 điểm bão hòa. Cặp trượt: Noor-Tikko (dH 18, dS 4, cùng cảnh ca cảng đầu tiên, MVP), Noor-Rafa (7, 12), Noor-Yusuf (19, 24), Mei-Yusuf (24, 16), Linh-Vaeth (2, 6, cùng ca cảng chương 2), Rafa-Bram (19, 13), Yusuf-Bram (7, 1), Yusuf-Wren (6, 17), Bram-Wren (13, 16) | Sửa hex để qua luật 3 và tiêu chí 5, hoặc nới luật có lý do. Ưu tiên cặp MVP: đổi Tikko khỏi vùng cam (cách Noor từ 25 độ Hue hoặc hạ bão hòa Tikko) | gd-character |
| 7 | Nặng | 2, 5 | `ho-so-nhan-vat.md:46, 138-139, 272-273` và `nguoi-choi.md:218`, `cot-truyen.md:479` | Luật người vào sau và slot tự mâu thuẫn, dev phải đoán | (a) Dòng 46: "Người chơi chọn một hồ sơ", dòng 272 và `nguoi-choi.md:218`: người vào sau lấy "slot trống thấp nhất". Không nói người tỉnh dậy ban đầu chọn preset hay gán theo thứ tự. (b) Dòng 46 và 138: buồng không ai chọn là người đã chết, tên lấy từ preset chưa dùng (Jonas, Mei, Tariq). Người vào sau "dùng preset của slot đó", tức mang đúng tên mặc định của người đã chết trên buồng tắt, trong khi cũng là "người từ buồng vô danh" và "không lấp buồng tắt". (c) Hết slot: `nguoi-choi.md:220` có "Phòng đầy" và host xóa nhân vật người đã rời, hồ sơ dòng 272 chỉ ghi "Không vào được" | Viết một luật: slot gán theo thứ tự hay theo chọn, tên mặc định của người vào sau (đề xuất: ép đặt tên, hoặc dùng bộ tên riêng không trùng tên buồng tắt), hiển thị buồng tắt khi slot bị lấy. Thêm hàng "Phòng đầy" vào bảng co-op | gd-character (cùng gd-story, `cot-truyen.md:479` giao cho gd-character) |
| 8 | Nặng | 2, 4 | `ho-so-nhan-vat.md:35, 50-53, 117, 124` so `nguoi-choi.md:61, 242` | Thiếu luật: chiều cao và silhouette có đổi va chạm, tầm nhặt, vùng trúng không. Và luật "tỉ lệ xương tối đa 15%" mâu thuẫn chiều cao 0,9 đến 1,2 u | `nguoi-choi.md:61`: nhân vật là hình tròn bán kính 0,4 u cho mọi người. Tariq cao 1,2 u vai rất rộng, túi hông to, Mei cao 0,9 u. Chênh chiều cao 0,9 so 1,2 là 33%, vượt "tối đa 15%" (dòng 35, 129) nếu hiểu là tỉ lệ xương. Wren cao 0,6 u (dòng 117) dùng "rig chung cho nhân loại" và nằm ngoài khoảng an toàn 0,8 đến 1,3 (dòng 124) | Ghi luật: chiều cao và silhouette chỉ là hình, va chạm, tầm nhặt, vùng trúng giữ bán kính 0,4 u cho mọi preset (P3, công bằng co-op). Nói rõ chiều cao là scale đồng đều hay tỉ lệ xương. Wren cần ngoại lệ ghi tên hoặc rig riêng | gd-character |
| 9 | Nặng | 1, 5 | `ho-so-nhan-vat.md:83, 97, 219-228, 297, 305` | Yêu cầu art MVP không đủ để GDM điền tab Assets và lập kế hoạch cho 1 artist | (a) Tab Assets dòng 221-223: CHR-RS, CHR-TR chỉ đếm số nhân vật. Clip người vớt (dòng 83) và 6 clip mỗi chủng thương nhân (dòng 97) không có thời lượng, loop, không nằm trong CHR-ANIM. (b) Biểu cảm của Ingrid, Linh, Tikko (5 mỗi người) không vào CHR-FACE (8, chỉ người chơi). (c) Rig riêng cho mỗi chủng Veyl (dòng 35, 286) không có dòng nào đếm. MVP cần ít nhất rig Oru. (d) TA02 là dân Oru vãng lai nhãn MVP (`tram-va-cang.md:48`), dòng 305 đề nghị "thêm 2 biến thể màu" nhưng CHR-TR ghi "1 MVP". (e) Dòng 297: "21 biến thể bộ đồ, 25 clip" cho MVP, thực tế bảng dòng 175-215 cho 9 mảnh và 24 clip MVP (hoặc 25 sau lỗi 2). (f) Thiếu clip "vào buồng ngủ đông" dù K23 và `tram-va-cang.md:527` cho vào buồng là thao tác sang ngày | Thêm vào mục 7: bảng clip và biểu cảm của Ingrid, Linh, Tikko (số, thời lượng, loop, nhãn), dòng Assets cho rig, dòng TA02, clip "vào buồng ngủ đông". Sửa số ở dòng 297 | gd-character, GDM giữ tab Assets |
| 10 | Nhẹ | 1 | `ho-so-nhan-vat.md:65-71, 89-95` so khung K12 (`00-khung-game.md:73`) | Hồ sơ người vớt và thương nhân không ghi chương xuất hiện, và phần K12 chỉ ghi nửa chức năng | Khung K12: Hoa tiêu mở dải Xa và Skiff, Thông dịch viên mở gọi tàu, ca cảng, shop. Hồ sơ dòng 68-69 chỉ ghi "mở khoang liên lạc", "mở khoang dẫn đường". Chương: `cot-truyen.md:76-80` ghi Ingrid, Linh chương 1, Rafa, Amara chương 2, Yusuf chương 3. Hồ sơ không có cột chương nên artist không biết thứ tự giao | Thêm cột Chương và chức năng K12 đầy đủ (hiện tên và chức năng khớp, chương chưa có). Thương nhân thêm "ghé cảng từ" | gd-character |
| 11 | Nhẹ | 1 | `ho-so-nhan-vat.md:30-39, 134-148, 157-166, 236-244, 73-81` | Nhiều mục không có nhãn MVP hoặc Sau MVP | Luật 1 đến 9, bảng biên, mục 6, bảng tính cách, mục 8 không có cột nhãn. Tiêu chí 1 và 2 nói 4 preset, 5 người vớt, 5 thương nhân nhưng MVP chỉ có 2 preset, 2 người vớt, 1 thương nhân | Thêm nhãn cho từng luật, từng tiêu chí (bảng dưới đề xuất) | gd-character |
| 12 | Nhẹ | 1 | `ho-so-nhan-vat.md:17, 110-117` | Bảng người phụ thiếu cột Nhãn, thiếu ngoại hình, chiều cao, biểu cảm so với brief GD-023 mục 8. NP-2 ghi nhãn mơ hồ | Brief: mỗi hồ sơ có vai, ngoại hình, silhouette, màu, biểu cảm. NP-1, NP-3, NP-4 chỉ có silhouette và màu, nhãn nằm trong cột Ghi chú. NP-2 chỉ có "không cần art ở MVP", trong khi `cot-truyen.md:452` ghi `MVP` (giọng) và `Sau MVP` (hiện hình). Validator qua nhờ chuỗi "ở MVP" | Thêm cột Nhãn, ghi NP-2 "MVP (chỉ giọng), Sau MVP (hiện hình)". Bổ sung chiều cao và biểu cảm tối thiểu cho NP khi Sau MVP bắt đầu | gd-character |
| 13 | Nhẹ | 2 | `ho-so-nhan-vat.md:34, 83, 125-126, 241` | Hai nguồn cho cùng một số: màu chính và nhấn | Luật 3: tối đa 6 màu chính cộng 2 nhấn nhỏ. Tiêu chí 3: "từ 1 đến 6 màu chính". Mục 3 dòng 125: khoảng an toàn 4 đến 8. Dòng 83: người vớt "6 màu chính cộng 1 nhấn trầm". Dòng 127-128: "bão hòa" không nói HSV hay HSL, kết quả lệch (Tariq 54% HSV, 47% HSL) | Chốt một số và một định nghĩa bão hòa (đề xuất HSV, ghi công cụ đo) | gd-character |
| 14 | Nhẹ | 5 | `ho-so-nhan-vat.md:148, 260, 303-305` | Mục tồn dư: dấu `[CHỜ gd-ux]` và 3 dòng "Lệch cần vai khác sửa" đã xử xong | `ux-ui.md:670` đã trả lời dòng 148 (camera trạm cùng 72 px mỗi u ở 720p). Lệch 1: `cot-truyen.md:75` đã ghi "kíp vận hành trạm". Lệch 3: `tram-va-cang.md:48, 55` đã có chủng của TA02 và TA09. Lệch 2: `cot-truyen.md:451` đã viết "Hoàn thành nhiệm vụ của United Accord ... bà tin là có thật cho tới mốc đóng chương 4", khớp L14 | Xóa dấu CHỜ và bảng lệch, hoặc đánh "đã xử" | gd-character |
| 15 | Nhẹ | 1, 3 | `ho-so-nhan-vat.md:25, 32, 124, 239-240` so `ux-ui.md:15, 669-670` | Tiêu chí silhouette chỉ đo ở 106 điểm ảnh mỗi u (1080p), không đo ở 1280x720 là bộ biên PC thấp nhất | `ux-ui.md:669-670`: 72 px mỗi u ở 720p, 10 u dọc, 17,8 u ngang (hồ sơ dòng 25 nói 18 u). Khoảng an toàn 90 đến 130 (dòng 124) loại cả 720p (71) lẫn 4K (213). Ở 72 px mỗi u, Wren cao 43 px và chi tiết nhỏ hơn 4 px (dòng 153) là 0,055 u. Chi tiết như gọng kính Jonas, tóc Mei qua kính mũ ở dòng 51-52 dưới ngưỡng này | Thêm lần test silhouette ở 720p, sửa khoảng an toàn thành theo độ phân giải, đổi "18 u" thành 17,8 u | gd-character |
| 16 | Nhẹ | 5 | `ho-so-nhan-vat.md:105-106` so `combat-driftlife.md:43, 325` | Serith là boss BS-5 nhưng hồ sơ không nhắc, chỉ 6 clip hội thoại | `combat-driftlife.md:325`: BS-5 có 3 pha, bắn lưới trói người chơi, ống chứa Driftlife nuôi khiên. Hồ sơ dòng 108: Serith 6 clip Idle, Nói, Chỉ tay, Giận, Rút, Rời, không có clip chiến đấu, không nêu cỡ trong phòng 36 x 24 u (`map.md:219`) | Ghi mã BS-5 và đề nghị gd-combat cấp danh sách clip chiến đấu, cỡ boss | gd-character, gd-combat |
| 17 | Nhẹ | 5 | `ho-so-nhan-vat.md:106` | Manh mối Maro (đường lục acid 10% ở gáy) không có tiêu chí đo và nằm dưới ngưỡng chi tiết của chính file | Dòng 153: chi tiết dưới 4 điểm ảnh không tính là nhận diện. Đường mờ 10% ở gáy cao 1,7 u khom không có tiêu chí ở mục 8 | Thêm một tiêu chí (ví dụ: 3 trong 10 người thử nhận ra sau khi biết trước) hoặc ghi rõ đây là chi tiết thưởng, không phải manh mối bắt buộc (P4) | gd-character |
| 18 | Nhẹ | 3 | `ho-so-nhan-vat.md:141` so `combat-driftlife.md:473, 487` | Đề nghị gd-combat tránh cam, vàng chanh, hồng tím chưa được nhận | `combat-driftlife.md:473`: thân Driftlife sáng "vàng thường, đỏ đòn lớn" khi báo trước. Dòng 487: săn mồi và lãnh thổ "có điểm đỏ hoặc vàng". Noor cam `#E8743B` (MVP) và Tikko hổ phách đứng gần màu cảnh báo | Hai vai chốt một quy tắc màu cảnh báo khác nhóm cam, vàng của người, hoặc ghi chấp nhận | gd-combat, gd-character |
| 19 | Nhẹ | 3 | `ho-so-nhan-vat.md:95, 70-71, 81` so `cot-truyen.md:443, 827, 279, 855` | Trích tính cách lệch nhẹ và thiếu đạo cụ truyện | Nhem: hồ sơ "nói vòng", gd-story ghi "Điềm đạm, cân nhắc, nặng lòng", câu ngắn hai vế. Amara mang đúng một cuốn sổ (`cot-truyen.md:279`, dùng ở cảnh kết) không có trong ngoại hình. Chén trà của Yusuf (`cot-truyen.md:855`, cảnh đóng chương 3) chỉ nằm ở bảng gợi ý, không trong silhouette | Sửa "nói vòng" thành "câu ngắn hai vế". Thêm sổ của Amara và cốc trà của Yusuf vào ngoại hình | gd-character |
| 20 | Nhẹ | 3 | `ho-so-nhan-vat.md:157-166` so `ky-thuat.md:68` | Dữ liệu `CharacterProfile` ở `ky-thuat.md` liệt kê tiền tố PC, RS, TR, WD-P, thiếu NP | `ky-thuat.md:68`: "id (PC, RS, TR, WD-P)". Hồ sơ có NP-1 đến NP-4 | Thêm NP vào `ky-thuat.md:68` hoặc ghi NP chưa đưa vào ScriptableObject (Sau MVP) | gd-tech |
| 21 | Nhẹ | 2 | `ho-so-nhan-vat.md:123-132` | Mọi tham số mục 3 có nguồn "ước", không có kiểm | Tất cả 10 hàng nguồn "ước". Số 106 tính được (1920 chia 18), số còn lại là ý đồ art | Nhẹ: chấp nhận vì không có sim cho art, nhưng ghi "chốt khi artist có bản thử" | gd-character |
| 22 | Nhẹ | 4 | `ho-so-nhan-vat.md:232` | Tham chiếu Spiritfarer không gắn mã nguồn | Dòng 232 nêu Spiritfarer không kèm [S13] hoặc [S14]. Nguồn có sẵn ở `05-game-tham-chieu.md:174-175` | Thêm mã nguồn | gd-character |

## Trái lời Lead (liệt kê, hoặc "Không")
Không. Đã đối chiếu L1 (không có Halcyon, Tether, Exodus, nợ Oxy, jetpack nhặt rác), L2 (mọi tên riêng tiếng Anh), L3 (không PvP, không chung máy), L4 (N người tỉnh, 4 trừ N buồng hỏng, dòng 46 và 138), L5 (The Wardens là một chủng trong The Veyl), L13 (người vào sau là người vớt về, người rời thì nhân vật ở lại trạm, dòng 46 và 273), L14 (dòng 39 viết Solace là mồi, Odile chỉ "giữ nhiệm vụ của United Accord"), L16, L17. Không có dấu gạch dài, dấu chấm phẩy, emoji trong file (kiểm bằng script).

## Mâu thuẫn chéo (file khác nói gì, dòng nào)
| # | File này | File khác | Lỗi |
|---|---|---|---|
| a | `ho-so-nhan-vat.md:50-53` bốn màu slot | `ux-ui.md:29` bốn màu slot khác | 1 |
| b | `ho-so-nhan-vat.md:192` clip bắt Sau MVP | khung `00-khung-game.md:179`, `cot-truyen.md:210`, `nguoi-choi.md` 2.5 là MVP | 2 |
| c | `ho-so-nhan-vat.md:215` đai 2, 3, 4 ô, MVP bậc 0 | `nguoi-choi.md:33, 177` đai 3, 4, 5 ô, MVP bậc 0 và 1 | 3 |
| d | `ho-so-nhan-vat.md:83` cả 5 người vớt thức dậy từ buồng | `cot-truyen.md:160`, `tram-va-cang.md:104` Amara và Yusuf đang thức | 4 |
| e | `ho-so-nhan-vat.md:28` Ingrid, Linh có mặt 30 giây đầu | `cot-truyen.md:104, 209-212` | 5 |
| f | `ho-so-nhan-vat.md:297` "21 biến thể, 25 clip" cho MVP | cùng file dòng 175-215 cho 9 mảnh và 24 clip MVP | 9 |
| g | `ho-so-nhan-vat.md:141` đề nghị tránh cam, vàng | `combat-driftlife.md:473, 487` dùng vàng, đỏ báo trước | 18 |
| h | `ho-so-nhan-vat.md:25` camera 18 u ngang | `ux-ui.md:669` 17,8 u ngang | 15 |
| i | `ky-thuat.md:68` thiếu tiền tố NP | `ho-so-nhan-vat.md` NP-1 đến NP-4 | 20 |

Khớp đã kiểm (không lỗi): tên và nghề 5 người vớt, 5 thương nhân, 4 người phụ, Serith, Maro, 4 preset của kíp vận hành trạm (so `cot-truyen.md:75-87, 418-456`). Chủng Oru, Sennari, Brakk, Aelith, Kesh. Tàu TA01, TA03, TA04, TA05, TA06, TA08, TA10 (so `cot-truyen.md:62-69` và `tram-va-cang.md:47-56`). Maro giả thương nhân Sennari, tàu TA08, lộ mặt cuối chương 3 (so `cot-truyen.md:455`, `tram-va-cang.md:153`). Nhãn MVP: Ingrid, Linh, Tikko là MVP, Rafa, Amara, Yusuf, Ilsume, Vaeth, Dromm, Nhem, Serith, Maro, Odile, Elias, Wren là Sau MVP, đúng so `cot-truyen.md:426-455` (Bram: xem lỗi 12). Khoang và chức năng K12: Ingrid xưởng (KH05), Linh khoang liên lạc (KH06), Rafa khoang dẫn đường (KH08), Amara nghiên cứu và nuôi (KH10, KH11), Yusuf bến và tiện ích (KH12), so `tram-va-cang.md:33-40`. Số trục bộ đồ 5, 4, 4, 5, 3 so `nguoi-choi.md:30-33` khớp, tổng 21.

## Chỗ phải đoán (lớp 5)
1. Slot gán theo thứ tự hay theo chọn preset ở lúc tạo thế giới. Tên mặc định của người vào sau khi preset đó đang là người chết trên buồng tắt (lỗi 7).
2. Chiều cao 0,9 đến 1,2 u có đổi va chạm, tầm nhặt, vùng trúng không. "Tỉ lệ xương" là scale đồng đều hay tỉ lệ từng xương (lỗi 8).
3. Bão hòa đo theo HSV hay HSL (lỗi 13). Kết quả đổi hẳn pass hay fail ở Mei, Ilsume, Vaeth.
4. Mô tả hình các bậc giữa của bộ đồ: bình Oxy 5 bậc chỉ có "một bình nhỏ tới ba bình ghép", bộ đẩy 4 bậc chỉ có "một vòi tới hai vòi lớn", đai "2, 3, 4 ô". Bậc 2 và 3 phải đoán. Vỏ cấp 1 đến 2 không có mô tả.
5. Hồ sơ ngoại hình không ghi tuổi, vóc người, màu da, nét mặt cho 4 preset và người vớt (ví dụ Noor chỉ có tóc búi, găng, đai). Artist phải đoán độ tuổi và nét mặt, trong khi biểu cảm là trọng tâm (8 biểu cảm, dòng 57). Chủng Veyl đủ khối hình (tay, mắt, tua), thiếu mặt và cách biểu cảm ở Brakk (một mắt), Kesh (nhiều mắt nhỏ). Tả silhouette tốt, tả mặt thiếu.
6. Rig của The Wardens: dùng rig nhân loại, rig Sennari (Maro cải trang) hay rig riêng. File chỉ ghi "dùng chung rig, đổi lớp phủ" giữa hai biến thể Maro (dòng 108).
7. Người vớt của Amara và Yusuf (lỗi 4) mặc gì, vì dòng 63 nói đồ Seed Station nhưng dòng 70-71 nói khác.
8. Hiện clip nào cho "Mở lối map nhánh" (giữ E 1 giây) và "Vào buồng ngủ đông" (K23): không có clip tương ứng, phải đoán dùng "Tương tác".
9. "Người rời phiên ... đứng ở khoang buồng ngủ đông" (dòng 273) nhưng chuyến chưa kết thúc: nhân vật xuất hiện ở trạm lúc nào theo C10, không nói.

## Số kiểm bằng chứng (số nào khớp file sim, số nào không)
Không có file sim cho hồ sơ nhân vật (art), mọi tham số mục 3 là "ước". Kiểm bằng tính lại và đối chiếu file khác:
| Số | Kết quả |
|---|---|
| 106 điểm ảnh mỗi u = 1920 chia 18 | Khớp (106,7). `ux-ui.md:669` dùng 10 u dọc, 17,8 u ngang, 108 px ở 1080p, 72 px ở 720p, nhất quán |
| 5, 4, 4, 5, 3 bậc, tổng 21 biến thể | Khớp `nguoi-choi.md:30-33` |
| Số ô đai 2, 3, 4 | Sai, nguồn 3, 4, 5 (`nguoi-choi.md:33`) |
| 25 clip MVP (dòng 297) | Bảng có 16 + 8 = 24 clip MVP, 25 chỉ đúng nếu clip 17 là MVP (lỗi 2). 17 + 8 = 25 tổng |
| 21 biến thể MVP (dòng 297) | Sai, 9 mảnh MVP (bình 2, vỏ 1, đẩy 2, túi 2, đai 2) |
| Lướt 0,25 s | `nguoi-choi.md:59` lướt 0,22 s: clip dài hơn trạng thái 0,03 s, chấp nhận |
| Bị kéo về 1,5 s, Mặc bộ đồ 1,0 s | Khớp `nguoi-choi.md` |
| Hex slot, màu người vớt, thương nhân | Script: PC1 S75 H20, PC2 S77 H187, PC3 S67 H63, PC4 S54 H317, Ingrid S55, Linh S39, Rafa S63, Amara S43, Yusuf S51, Tikko S79 H38, Ilsume S67, Vaeth S33, Bram S50, Wren S34 (HSV). Lỗi 6 |

## Tiêu chí nghiệm thu rút từ mục 8 (bảng Feature, Category, Acceptance Criteria đo được, MVP hay Sau MVP)
| Feature | Category | Acceptance Criteria (đo được) | MVP hay Sau MVP | Đánh giá |
|---|---|---|---|---|
| Silhouette 4 preset người chơi | Art, nhận diện co-op | Tô đen 4 preset cạnh nhau ở 106 px một u, 5 người thử phân biệt đúng trong 1 giây ở ít nhất 90% lượt | MVP cho preset 1 và 2 (cặp), Sau MVP cho 4 preset | Đo được. Thiếu lần đo ở 720p (lỗi 15). Hiện tiêu chí MVP chỉ cần 2 preset nhưng ghi 4 |
| Silhouette người vớt và thương nhân | Art, nhận diện | Tô đen mỗi nhân vật nhận ra đúng vai ở ít nhất 80% lượt | MVP cho Ingrid, Linh, Tikko. Sau MVP cho 7 người còn lại | Đo được nhưng tiêu chí ghi 5 và 5, MVP chỉ 2 và 1 (lỗi 11) |
| Bảng màu mỗi nhân vật | Art, màu | 1 đến 6 màu chính cộng tối đa 2 nhấn bằng công cụ lấy mẫu, bão hòa đúng mục 3 | MVP cho 5 nhân vật MVP, Sau MVP còn lại | Đo được nếu chốt định nghĩa bão hòa (lỗi 13). Hiện fail ở Tikko (lỗi 6) |
| Lắp thử bộ đồ | Art, mảnh ghép | Bậc 0 và bậc cuối của mọi trục không mảnh nào che hoặc cắt mảnh khác | MVP cho bậc 0 và 1 của bình, bộ đẩy, túi, đai, cấp 0 của vỏ. Sau MVP bậc còn lại | Đo được. "Bậc cuối" MVP là bậc 1, tiêu chí cần ghi rõ, và cần đai MVP là 0 và 1 (lỗi 3) |
| Phân biệt màu trong cùng cảnh | Art, nhận diện | Hai nhân vật cùng cảnh cách 25 độ Hue hoặc 25 điểm bão hòa | MVP cho cặp ở ca cảng đầu (Noor, Jonas, Ingrid, Linh, Tikko) | Đo được. Hiện fail Noor-Tikko (lỗi 6) |
| Đủ clip và biểu cảm MVP | Art, hoạt ảnh | Mọi nhân vật MVP đủ clip bảng mục 7 và 8 biểu cảm | MVP | Chưa đo được cho Ingrid, Linh, Tikko vì không có bảng clip của họ (lỗi 9). Người chơi: 17 ngoài (sau lỗi 2) và 8 trong |
| Không hồ sơ nào đổi theo số người (P3) | Thiết kế | Bảng co-op: không hồ sơ nào đổi ngoài số preset hiển thị và số buồng tắt | MVP | Đo được bằng đối chiếu bảng. Cần thêm hàng "Phòng đầy" (lỗi 7) |
| Chiều cao không đổi va chạm (đề xuất thêm) | Gameplay, công bằng | Cả 4 preset có cùng bán kính va chạm 0,4 u trong build | MVP | Thiếu hẳn (lỗi 8) |
| Manh mối Maro nhìn thấy được (đề xuất thêm) | Art, truyện | N trong 10 người thử nhận ra Maro cải trang sạch hơn thương nhân thật khi so cạnh | Sau MVP | Thiếu (lỗi 17) |

## Bỏ qua / không kiểm được
- Không đọc toàn bộ `cot-truyen.md` (khoảng 1000 dòng): đọc đủ mục danh mục, 2.1, 2.6, 2.7, các bảng người vớt, thương nhân, lời thoại, và grep từng tên, chương, tàu. Không kiểm lời thoại ngoài dòng trích.
- `ux-ui.md`, `combat-driftlife.md`, `tram-va-cang.md`, `ky-thuat.md`, `map.md`: chỉ grep và đọc đoạn liên quan đến hồ sơ nhân vật, không review toàn file.
- Không có build, không đo silhouette bằng người thật, không kiểm art. Số bão hòa tính bằng script từ hex ghi trong file (HSV là chính, HSL ghi kèm), chưa so với bản vẽ thật.
- Không kiểm Sheet (L15, không đụng 17 tab `v0.1`).
- Giờ sửa file `ux-ui.md` là 03:41, cũ hơn hồ sơ (04:03): nếu gd-ux đã sửa sau lần chấm này thì lỗi 1 cần đối chiếu lại.
