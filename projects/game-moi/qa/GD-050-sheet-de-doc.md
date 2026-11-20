# GD-050 phần 2: nghiệm thu chéo 23 tab Sheet GDD (đợt 8)

Kết luận: TRẢ LẠI. Pillar, số và luật đạt. Còn 3 nhóm lỗi nặng mà cổng máy không bắt (tên không khớp, mã sót, số lệch giữa tab) và một nhóm khó đọc.

Phương pháp: so TSV hiện tại với bản trước đợt 8 (commit `60c4a03^`), script trong scratchpad, đọc tay Player, Tutorials, Customer, Enemy, ITEM LIST. Không sửa TSV, không commit.

## 1. Pillar: ĐẠT

| Kiểm | Kết quả |
|---|---|
| OVERVIEW | 5 pillar đúng tên và thứ tự (Khám phá, Rủi ro và phần thưởng, Quản lý và tối ưu, Phát triển liên tục, Đa dạng và bất ngờ), có Player Experience, Luật và đo, Cấm. Nguyên tắc nền Một mình vẫn trọn có đủ |
| CORE LOOP hàng 2 | 5 pillar khớp OVERVIEW, mỗi pillar một chặng gánh, nguyên tắc nền có |
| Tab khác nhắc pillar | Chỉ Player ("pillar Rủi ro và phần thưởng"), đúng tên. Không còn tên pillar cũ ở tab nào |

## 2. Mất luật hoặc đổi số: ĐẠT (không có số bị đổi sai)

Lấy mẫu 11 tab, so theo khối hàng (bỏ mã). Mọi số đổi đều có nguồn GDD hệ thống.

| Tab | Kết quả |
|---|---|
| CORE LOOP | Số giữ nguyên (30 giây, 15 giây, 25%, 2 chuyến, 5 chương). Bảng 5 chương và 5 pha chuyển sang tab Day, có trỏ. Day có đủ nội dung pha và chương |
| Enemy | Khối "Luật combat" (trước ghi tóm tắt) được bổ sung số từ combat-driftlife.md: 0,25 s, 0,8 s, hệ số co-op 1,54, 1,88, 2,11, 1,6, 2,2, 2,8, 70%, 6 độ. Đã đối chiếu, khớp. Mirror Mantis thêm 50% dội đòn, khớp mục E14. Số HP, ngưỡng, DMG, báo trước của 25 khối còn lại không đổi |
| Customer | Lưu bến 90, 70, 45 giây, 4 tàu, giãn cách 42 giây, kệ 6 và 12 kiện, tốc độ mang kiện 90, 80, 65%, quy mô đơn 1, 1,6, 2,2, 2,8, ngưỡng điểm 10, 20, 45, 70, 100, 135, 195: khớp tram-va-cang.md |
| Upgrade | Toàn bộ giá Tally và GTĐ giữ nguyên. Thêm hiệu ứng từng bậc (Oxy 330 lên 450, 600, 780, 1000, túi 80 lên 100, 126, 168, 216, bộ đẩy, Lao từ, Súng lưới): khớp nguoi-choi.md và combat-driftlife.md |
| Recipe | Số lượng nguyên liệu, đầu ra, thời gian giữ nguyên 336 hàng (so từng hàng) |
| ITEM LIST | Số giữ nguyên, chỉ đổi mã thành tên |
| Zone | Ngân sách Oxy, trần 4,7 / 6,4 / 8,5 / 11,1 / 14,2 phút, sim 4,4 / 5,4 / 6,5 / 8,2 / 10,4 phút giữ nguyên. Thêm chú thích "trung vị, ngoặc là 10% đến 90%": khớp bảng P50 (P10 đến P90) ở map.md |
| Shop | 45 dòng giá giữ nguyên. Hạng cảng yêu cầu thêm vào ghi chú (Kệ kiện 2, bản thiết kế 4 và 6, động cơ 3, 5, 7, 8): khớp kinh-te-tien-trinh.md |
| ECONOMIC | 43 dòng sim giữ nguyên số |
| Player, Tutorials, MVP Criteria Checklist | Số giữ nguyên, trừ lỗi 4.1 dưới đây |

## 3. Tham chiếu chéo bằng tên

Định nghĩa không đổi tên nào so với bản cũ. Kiểm: nguyên liệu và đầu ra Recipe so ITEM LIST, nguồn tiêu ITEM LIST so Recipe, tên Shop, tên nâng cấp theo bậc, tên map nhánh, tên tàu, tên khoang.

| Mã | Mức | Vị trí | Lỗi | Cách sửa |
|---|---|---|---|---|
| 3.1 | Nặng | Recipe dòng 59 (công thức số 12), cột Task | Tên "Cuộn plasma". ITEM LIST dòng 14 và 79 gọi công thức này là "Ép cuộn plasma". Tên mới chưa áp vào Recipe | Đổi ô thành "Ép cuộn plasma" (vai gd-items) |
| 3.2 | Nặng | Recipe dòng 174, 179, 184, 189, 221, 226, 231, 251, 256, 266, 277 (cột Ingredients) | 11 ô còn đuôi mã dạng "Đặc sản Driftmoth..115", "Sản phẩm nuôi Lumen Jelly..214", "Mẫu sinh thiết Shepherd Whale, 215", "Kiện đặc sản Xa..307, 311..313". Không tên nào là tên trong ITEM LIST. Cổng máy không bắt vì không khớp mẫu mã | Viết thành danh sách tên đầy đủ, ví dụ "một trong Đặc sản Driftmoth, Skitter Ray, Sting Krill, Arc Eel, Latchjaw". Tra đúng nhóm loài ở vat-pham.md (vai gd-items) |
| 3.3 | Trung bình | Enemy, cột Type, dòng "Rơi khi hạ" của 14 loài | Tên rơi ghi theo mô tả (Mẫu mô, phấn sinh học, Gel phát quang, Vỏ gương, Túi trứng, Lõi khí, Tuyến điện...). ITEM LIST không có vật nào tên vậy, chỉ có "Đặc sản <loài>" và "Mô sinh học Gần/Giữa/Xa". Trước đợt 8 có cột ID nối hai tab, nay mất nối | Ghi "Rơi khi hạ" bằng tên ITEM LIST: "Mô sinh học Gần, Đặc sản Driftmoth 30%". Đã đúng ở 3 chỗ khác (Mẫu sống, Mẫu sinh thiết, Hạch thủ lĩnh) (vai gd-combat với gd-items) |
| 3.4 | Nhẹ | Recipe dòng 300, 307, 314, 321, 328, 335, 342 | Tên "Chế Bộ kích nguồn (Bộ kích nguồn)": ngoặc lặp đúng tên vừa nói | Bỏ phần trong ngoặc |
| 3.5 | Nhẹ | Enemy dòng 126, so Zone dòng 24 | Enemy gọi "tàu của Ilsume", Zone gọi "tàu Vellune của Ilsume" | Dùng "tàu Vellune" ở cả hai |
| 3.6 | Nhẹ | 16 chỗ ở CORE LOOP, Day, Event Tracking, ITEM LIST (9), Player, WIREFRAME | "khoang nuôi". Tab Customer, Recipe, GAME STORY (21 chỗ) dùng tên khoang là "Khoang sinh quyển" | Thống nhất "Khoang sinh quyển" |

Đã khớp: toàn bộ tên nguyên liệu và kiện trong Recipe (trừ 3.2), tên 25 nâng cấp "Nâng cấp X bậc N", 8 map nhánh, 8 tàu, 4 linh kiện động cơ ở Shop và ITEM LIST, tên khoang ở tab Customer.

## 4. Lệch giữa các tab

| Mã | Mức | Lệch | Cách xử |
|---|---|---|---|
| 4.1 | Nặng | MVP Criteria Checklist dòng 111 ghi "35 bước" tutorial. Tab Tutorials có 36 bước, ux-ui.md ghi 36 | Sửa số thành 36. Cũng ở dòng đó có "Bot của gd-tech" (tên vai, brief cấm) và dòng 63 còn mã "5 COM" |
| 4.2 | Cần GDM quyết | Player (Bộ đẩy): "Mở ở chương 2 đến 4. MVP bậc 0 và 1". Upgrade: Bộ đẩy bậc 1 mở chương 1, bậc 2 chương 2, bậc 3 chương 3. Nguồn: nguoi-choi.md bảng mục 3.2 ghi "Chương 2 đến 4", kinh-te-tien-trinh.md và vat-pham.md ghi chương 1, 2, 3. Hai GDD hệ thống cãi nhau | GDM chốt một bên rồi sửa GDD hệ thống và hai tab |
| 4.3 | Nhẹ | Day: chương 1 sim 1,82 giờ. Balance Sheet và kinh-te-tien-trinh.md: 1,83 giờ | Thống nhất 1,83 hoặc ghi rõ khác lượt sim |
| 4.4 | Nhẹ | ECONOMIC dòng cuối "đã chơi 13,61 giờ", ngày 43. Day, OVERVIEW: cả game 13,4 giờ, PROCESSING: chương 5 kết ngày 42. Ghi chú ECONOMIC đã nói "một lượt sim, có thể lệch 1 ngày" | Chấp nhận. Nên ghi rõ "13,4 giờ là trung bình nhiều lượt" cạnh dòng cuối |
| 4.5 | Nhẹ | Thuật ngữ: Player ghi "ngất" (2 chỗ) và ITEM LIST "Ngất" (1), mọi tab khác "ngạt" (30+). "Rớt mạng" ở Player, Event Tracking, MVP, còn CORE LOOP, MVP dùng "Mất kết nối". "Kĩ năng" (Player) khác "Kỹ sư" | Dùng "ngạt", "mất kết nối", "Kỹ" cả Sheet. Lưu ý bảng tên ngắn K2 trong brief ghi "Ngất", chính brief cần sửa |
| 4.6 | Nhẹ | Hạng cảng, giá Shop, ngưỡng điểm, số tàu, thời lượng chuyến, số chương giữa Customer, Shop, ECONOMIC, PROCESSING, Day, Zone | Không lệch. Đã đối chiếu từng mốc |

Số mốc truyện 9, 8, 8, 7, 8 của MVP Criteria Checklist khớp GAME STORY (mới đếm chương 1 và 2). OVERVIEW: 15 loài, 8 map nhánh, 5 boss, 4 đơn vị Wardens khớp Enemy và Zone.

## 5. Dễ đọc (đọc tay Player, Tutorials, Customer, Enemy, ITEM LIST)

Tutorials đọc tốt: một bước một dòng, có "Tắt khi" và "Chữ gợi ý". Enemy đọc tốt, câu ngắn.

| Mã | Mức | Vị trí | Vấn đề |
|---|---|---|---|
| 5.1 | Trung bình | Upgrade, ECONOMIC (43 dòng), PROCESSING, Balance Sheet | "GTĐ" dùng hàng trăm lần, không tab nào giải nghĩa (chỉ Shop ghi "GTĐ (cột Value)"). Người mới không hiểu "vật liệu 26,0 GTĐ". Nên thêm một dòng giải nghĩa ở đầu ECONOMIC và Upgrade ("GTĐ: giá trị tương đối của vật phẩm, Mảnh vỡ trôi bằng 1,0") |
| 5.2 | Nhẹ | Mọi tab có khoảng cách | "u" (đơn vị khoảng cách) chưa được giải nghĩa. Nên ghi ở Player hoặc Zone: "1 u bằng bề rộng nhân vật khoảng ..." theo map.md |
| 5.3 | Trung bình | Customer "Luật ca cảng", dòng Lịch tàu và Ca đầu tiên | Từ dựng riêng không giải nghĩa: "kiện gốc", "quy mô đơn", "túi trộn", "trọng số túi trộn". Câu "kiện gốc nhân quy mô đơn theo số người online, làm tròn lên" khó với người mới. Thêm một câu ví dụ (1 người, kiện gốc 2, thành 2 kiện) |
| 5.4 | Nhẹ | Player, Move | "Tha thứ ngầm: ... corner correction ... đệm input lướt" kiểu dịch máy, dòng này nên viết "Hỗ trợ tay chơi (không báo người chơi): ..." |
| 5.5 | Nhẹ | Player, Attribute (Ngạt) | "Vạch đủ về = (khoảng cách / (0,8 nhân vmax thật)) nhân hệ số môi trường, cộng dự phòng" là công thức giữa câu. "Dự phòng: 8 nếu ..., 3 nếu ..." thiếu đơn vị giây |
| 5.6 | Trung bình | ITEM LIST dòng 76, 141, 146 (cột Nguồn tiêu) | Ô ngắt dòng cứng giữa câu: "...chiếm túi,\ntối đa 2 bình", "Loại dữ liệu,\nsao được thành Bản sao dữ liệu", "Kén rơi thì nằm lại chỗ thả,\nlưu ở beacon cố định". Cột "Nguồn tiêu" lẫn tên công thức với câu mô tả cách dùng. Dòng 63 đến 67 là danh sách 12 mục cuối ô ngắt bằng dấu phẩy rồi xuống dòng. Nên tách mô tả sang cột Note |
| 5.7 | Nhẹ | CORE LOOP (2 ô), Day (6 ô) | Dùng chuỗi `\n` trong khi cùng tab Day còn ô bọc ngoặc kép xuống dòng thật. CORE LOOP chưa dùng `\n` trước đợt 8. Chấp nhận được nếu `/gdd-sheet-sync` đổi `\n` thành xuống dòng. Cần kiểm lúc dán |
| 5.8 | Nhẹ | Assets, AUDIO ASSETS LIST, MVP Criteria Checklist (300 ô) | Cột Note ghi "Nguồn: file.md mục 7b" cho từng hàng, còn "mục 7b", "mục 2.10" là mã mục. Trái luật mã 3 (chỉ cột Ref) nhưng các tab này không có cột Ref. Chấp nhận, ghi lại cho GDM |

## Việc phải làm để ĐẠT

1. gd-items: sửa Recipe 3.1, 3.2, 3.4.
2. gd-combat với gd-items: Enemy "Rơi khi hạ" theo tên ITEM LIST (3.3), thống nhất "tàu Vellune" (3.5).
3. gd-qa (hoặc người giữ tab): MVP Criteria Checklist 4.1.
4. GDM: chốt 4.2 (Bộ đẩy mở chương nào), thống nhất 3.6 và 4.5.
5. Người giữ tab: 5.1, 5.3, 5.6. Mức nhẹ còn lại gộp khi tiện.

Chưa kiểm: nội dung GAME STORY, Salvage, WIREFRAME, Event Tracking, TRACKING, Assets, AUDIO ASSETS LIST chỉ quét máy (số, mã, tên), chưa đọc tay từng câu. Không kiểm với Google Sheet thật.
