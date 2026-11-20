# Đợt 1 game-moi: GDD hệ thống bản đủ (2026-11-20)

Lead: "Tôi giao cho bạn toàn quyền quyết định và điều phối các phiên dưới quyền hoạt động và hoàn thiện GDD, về các hệ thông mà chúng ta bàn trên. Đi sâu và chi tiết. Ghi lại những điểm bạn tự quyết vào log để tôi đọc lại sau."
Nguồn việc: `projects/game-moi/gdd/00-khung-game.md` mục 8, BACKLOG GD-022 tới GD-027.

## Ai làm gì

| Mã | Việc | Agent | Phiên (id) | Ghi vào (`projects/game-moi/gdd/he-thong/`) |
|---|---|---|---|---|
| GD-022 | Cốt truyện bản đủ | gd-story | local_2ad8f6f1-9b7a-4558-8b62-30e701f1f48e | `cot-truyen.md` |
| GD-023 | Người chơi và hồ sơ nhân vật | gd-character | subagent của GDM, không nhận tin, chỉ đọc file | `nguoi-choi.md`, `ho-so-nhan-vat.md` |
| GD-024 | Combat, bắt sống, Driftlife, The Wardens, boss | gd-combat | local_7d432ac0-aea1-4651-be5f-a7d291dc0ed3 | `combat-driftlife.md` |
| GD-025 | Tài nguyên, vật phẩm, công thức, hàng hóa | gd-items | local_380608f3-d7fa-4b2e-bcb6-306d508bb730 | `vat-pham.md` |
| GD-026 | Map tổng, map nhánh, hazard, nhịp chuyến | gd-world | local_5959cdd6-bb7a-426b-9145-a658b0d94215 | `map.md` |
| GD-027 | Trạm và cảng | gd-quan | local_fc9e795d-6911-4dfc-bcb2-3a4f84182be6 | `tram-va-cang.md` |

Đợt 2 (sau khi đợt 1 xong): gd-economy, gd-ux, gd-tech. Đợt 3: gd-qa review chéo. Ba vai này chưa nhận việc ở đợt 1.

## Luật chung của đợt

1. Bỏ toàn bộ ngữ cảnh Space Salvage còn trong phiên (jetpack, quán, ₵, tầng, nợ, pixel art). Game hiện là EMBER, nguồn luật chung là `gdd/00-khung-game.md`. File agent của bạn còn nhắc Space Salvage ở phần mô tả: bỏ qua phần đó, giữ phần vai trò, nguyên tắc, skill.
2. Mức bản: bản đủ theo khuôn `docs/process/templates/gdd-he-thong.md` (đủ 10 mục). Riêng số: ghi khởi điểm, cột Nguồn ghi "ước" hoặc "gốc Dave [D#]". Sim làm ở đợt 2, không tự sim ở đợt này. Không khẳng định cân bằng khi chưa đo.
3. Không trái luật K và C của khung. Thấy luật khung có vấn đề: vẫn viết theo khung, ghi phản biện ở mục "Phản biện khung" cuối GDD (vấn đề, lý do, bằng chứng, phương án thay).
4. Lead đã giao toàn quyền cho GDM và không trả lời câu hỏi trong đợt này. Trong hệ thống của mình, bạn tự quyết mọi điểm khung chưa nói, và ghi mỗi điểm một dòng ở mục "Điểm tự quyết" cuối GDD: Điểm, Chọn, Vì sao, Đã bỏ, Đảo (Rẻ, Vừa, Đắt). Chỉ hỏi GDM khi hai cách hiểu dẫn tới hai GDD khác hẳn.
5. Mỗi luật và mỗi mục nội dung gắn nhãn `MVP` hoặc `Sau MVP` theo khung mục 12.
6. Co-op: mỗi GDD có một mục riêng "Co-op 1 đến 4 người" nêu luật của hệ thống đúng thế nào với 1, 2, 3, 4 người. Không có luật cần đúng N người.
7. Dùng đúng từ trong từ điển khung mục 10. Chủ tên gọi: gd-items (vật phẩm, ID), gd-combat (Driftlife, kẻ địch), gd-world (vùng, hazard), gd-story (tên riêng truyện). Cần tên chưa có thì đặt tạm, đánh `[CHỜ <vai>]`.
8. Bám Dave the Diver để lấy cấu trúc, dữ kiện ở `docs/knowledge/indie/06-dave-the-diver-cau-truc.md`. Mục 9 của khuôn ghi rõ Dave làm thế nào và mình lệch ở đâu. Không viết "làm giống Dave".
9. Chỉ sửa file của mình. Không sửa khung, DECISIONS, Sheet. Không commit.
10. Văn phong: tiếng Việt có dấu, không emoji, không gạch dài, không dấu chấm phẩy, số trong bảng. Soát `node .claude/skills/gdd-v1/scripts/soat.mjs <file>` tới 0 lỗi (lỗi của khuôn Puzzle không áp được thì ghi lại, không sửa mù).
11. Ghi file sớm. Việc đầu tiên trong 10 phút đầu: ghi mục "Danh mục sơ bộ" (danh sách tên thứ mình giữ) để vai khác đọc.

## Ai đưa gì cho ai (nhắn thẳng bằng SendMessage tới id phiên, một tin gộp, không qua GDM)

| Từ | Đưa | Tới |
|---|---|---|
| gd-items | Danh mục sơ bộ: nhóm tài nguyên theo dải, dụng cụ, hàng hóa cảng (tên, ID) | gd-combat, gd-world, gd-quan |
| gd-combat | Danh sách Driftlife và kẻ địch theo dải, mỗi loài rơi nhóm gì, bắt sống được không | gd-items, gd-world, gd-quan |
| gd-world | Danh sách vùng, hazard, map nhánh, loại điểm sinh | gd-combat, gd-items, gd-story |
| gd-quan | Danh sách khoang, loại tàu và thương nhân, loại hàng cảng cần, nhu cầu vật liệu sửa khoang theo nhóm | gd-items, gd-story |
| gd-story | Tên riêng, 5 chương kèm mốc và nơi đặt manh mối, tên và tính cách người vớt, thương nhân | mọi vai (ghi vào file, nhắn một tin trỏ đường dẫn) |

gd-character chạy bằng subagent nên không nhận tin. Vai nào cần gì từ gd-character thì đọc `nguoi-choi.md`. gd-character đọc file các vai khác đang có tại thời điểm làm.
Hai vai lệch nhau không tự chốt được: báo GDM hai phương án và đề xuất. App chặn khoảng 10 tin liên phiên liền nhau, nên gộp tin.

## Brief từng vai

Đọc trước chung cho mọi vai: `projects/game-moi/gdd/00-khung-game.md` (toàn bộ), `projects/game-moi/log-gdm-tu-quyet.md`, `projects/game-moi/story/game-story-v3.md`, `docs/knowledge/indie/06-dave-the-diver-cau-truc.md`, playbook và knowledge của vai theo file agent, khuôn `docs/process/templates/gdd-he-thong.md`.

### GD-022 gd-story - GDD cốt truyện bản đủ

Mục tiêu: chuyển story bản 3 thành GDD cốt truyện đủ để các vai khác đặt nội dung và dev, art làm theo.
1. Viết lại theo khung B1 đến B10: phản diện là The Wardens (thay The Hollowers), động cơ ghét loài người vì phá môi trường nhưng đạo đức giả, thông tin giả là hành lang an toàn phát qua mạng tin thương nhân trung lập, Driftlife theo B6. Bỏ "United Accord mua tọa độ".
2. Năm chương theo khung mục 7. Mỗi chương: mục tiêu người chơi, chuỗi mốc truyện theo thứ tự, manh mối và nơi đặt (chỉ ở map nhánh, K7), nhân vật xuất hiện, cảnh mở và cảnh đóng, kiểu chơi mới được truyện đưa vào thế nào, quest vớt người.
3. Nhân vật truyện: 5 người vớt (tên, nghề, quốc gia gốc, tính cách, giọng, mâu thuẫn riêng, quest mở tính năng), 4 đến 6 thương nhân có tên thuộc các chủng tộc The Veyl, người của Lantern, The Remainers, The Wardens (thủ lĩnh, kẻ cải trang ghé cảng).
4. Cảnh tỉnh dậy theo 1 đến 4 người, người chơi vào sau, người rời phiên.
5. Kết game: tới Solace nhưng dựng khác đi, viết cảnh kết và điều người chơi mang theo.
6. Voice sheet: giọng chung, điều cấm, mỗi nhân vật chính 3 dòng thoại mẫu.
7. Bảng tên riêng toàn game và 3 đề xuất tên game. Tra trùng thương hiệu bằng WebSearch cho tên game và 6 tên quan trọng nhất.
8. Khối GAME STORY một ô để dán Sheet, cập nhật theo các điểm trên.
Tiêu chí: không còn The Hollowers, không còn mua tọa độ. Mỗi chương có ít nhất 3 mốc và 2 manh mối có nơi đặt. Mỗi người vớt có quest mở tính năng khớp K12.

### GD-023 gd-character - Người chơi và hồ sơ nhân vật

Mục tiêu: luật đầy đủ của nhân vật người chơi ngoài không gian và trong trạm, và hồ sơ nhân vật cho art.
1. Di chuyển ngoài không gian: bộ đẩy 8 hướng, điều khiển trực tiếp, quán tính nhẹ (log dòng 22), lướt nhanh, va chạm, kéo vật (buồng ngủ đông, Driftlife sống, kiện). Trong trạm: đi trong mặt cắt, mang kiện.
2. Oxy (K1, K2): dung lượng, hao nền, hao khi lướt, khi trúng đòn, khi thiếu cấp môi trường, ngưỡng cảnh báo, trạng thái ngạt, được chia Oxy để cứu, bị kéo về giữ 1 món. Bảng trạng thái và chuyển tiếp.
3. Bộ đồ: các trục nâng cấp (bình Oxy, cấp môi trường theo dải, bộ đẩy, túi đồ, chống đòn nếu cần), số bậc mỗi trục, mỗi bậc đổi gì. Không ghi giá.
4. Túi đồ (K3): đo bằng khối lượng hay ô, quá tải thì sao. Dụng cụ mang theo: số ô, đổi ở đâu.
5. Tương tác: nhặt, khai thác, bắt, kéo, dùng Recall Beacon, mở lối map nhánh.
6. Điều khiển: bàn phím chuột và gamepad, bảng phím mặc định.
7. Co-op: Oxy và túi riêng, chia Oxy, ping, va chạm giữa người chơi, nhân vật của người rời phiên.
8. `ho-so-nhan-vat.md`: nhân vật người chơi (4 người của Ember, người vào sau), 5 người vớt, thương nhân, The Wardens. Mỗi hồ sơ: vai, ngoại hình, silhouette, màu nhận diện, biểu cảm cần có, yêu cầu art 2D vector. Tính cách lấy từ file gd-story nếu đã có, chưa có thì theo story bản 3 và đánh `[CHỜ gd-story]`.
Tiêu chí: tham số di chuyển và Oxy đủ để gd-tech dựng prototype. Bảng trạng thái không có trạng thái cụt.

### GD-024 gd-combat - Combat, bắt sống, Driftlife, The Wardens, boss

Mục tiêu: luật combat và toàn bộ sinh vật, kẻ địch của game.
1. Luật combat trong không trọng lực 2D nhìn ngang: sát thương trừ vào Oxy (K1), đẩy lùi, i-frame, khóa mục tiêu hay ngắm tự do, hit feel.
2. Bắt sống (K9): quy trình, công cụ theo loại (làm choáng, lưới, gây mê), điều kiện thành công, chất lượng mẫu, kéo về.
3. Bộ loài Driftlife theo dải Gần, Giữa, Xa: mỗi dải 4 đến 6 loài đủ kiểu (hiền, chạy trốn, giữ lãnh thổ, săn mồi, đi bầy). Mỗi loài: hành vi, chỉ số khởi điểm, đòn, rơi nhóm gì, bắt sống được không, nuôi được không.
4. Boss: 1 boss mỗi chương, cơ chế chính, pha, nơi gặp (map nhánh, K7).
5. The Wardens từ chương 3: loại đơn vị (máy thu hoạch, lính, tàu thu gom), hành vi, khác Driftlife ở đâu.
6. Driftlife sổng khoang nuôi trong sự cố ca cảng (K14): hành vi trong trạm, phối hợp gd-quan.
7. Tăng theo số người (C8): chỉ số nào tăng, công thức đề xuất.
8. Đề sim combat cho gd-tech: câu hỏi cần sim trả lời, đầu vào, đầu ra.
Tiêu chí: mỗi loài có ít nhất một lý do để người chơi chọn bắt sống hoặc hạ. Không loài nào chỉ khác nhau ở số.

### GD-025 gd-items - Tài nguyên, vật phẩm, công thức, hàng hóa

Mục tiêu: bảng định nghĩa mọi thứ người chơi nhặt, chế, mang, bán.
1. Hệ ID và phân loại. Tài nguyên theo dải: phế liệu, khoáng, băng, linh kiện, mẫu Driftlife (sống, đã hạ), vật kể chuyện (lõi dẫn đường, nhật ký). Độ hiếm, khối lượng.
2. Dụng cụ và vũ khí: định nghĩa, công dụng, bậc. Hành vi combat lấy từ gd-combat.
3. Bộ phận bộ đồ theo trục của gd-character. Vật tiêu hao. Bản thiết kế.
4. Công thức xưởng (Kỹ sư): chế và nâng cấp. Công thức nghiên cứu (Nhà sinh học): mẫu đổi ra gì.
5. Hàng hóa cảng: các loại kiện, kiện làm từ gì, bước chế trước khi đóng kiện. Sản phẩm từ nuôi Driftlife. Lấy nhu cầu từ gd-quan.
6. Vật liệu sửa khoang và linh kiện động cơ chính: thứ nào tự làm, thứ nào phải mua ở shop (K19).
7. ITEM LIST: mỗi vật phẩm có nguồn nhận và ít nhất một nguồn tiêu. Không có vật phẩm chỉ để bán lấy số (P2).
Tiêu chí: không ghi giá (thuộc gd-economy). Mỗi công thức chỉ dùng vật phẩm có trong ITEM LIST. Mỗi dải có ít nhất 2 tài nguyên chỉ dải đó có.

### GD-026 gd-world - Map tổng, map nhánh, hazard, nhịp chuyến

Mục tiêu: cấu trúc không gian của cả game và nhịp một chuyến.
1. Map tổng The Wake (K5): kích thước mỗi dải tính bằng giây bay, ranh giới dải, mốc cố định (trạm, lối vào map nhánh), kho mảnh (số mảnh mỗi dải, loại mảnh, luật ghép, thứ không đổi giữa các chuyến).
2. Mỗi dải: điều kiện môi trường và cấp bộ đồ cần (K6), hazard, mật độ tài nguyên và Driftlife theo mảnh, độ khó.
3. Recall Beacon (K4): số lượng mỗi chuyến theo dải, luật đặt. Skiff (K7): luật dùng.
4. Ngân sách Oxy của một chuyến: bảng thời gian bay tới từng dải, thời gian làm việc còn lại, theo bậc bình Oxy. Số ước, kèm đề sim cho gd-tech. Bám mục tiêu khung mục 9.
5. Map nhánh: xác Seed Station (nhiều bản dùng chung bộ nội thất), Station Lantern, Veyl Waypost, The Remainers, bên trong Cradle, Warden Rig. Mỗi nhánh: sơ đồ khu, khóa và chìa, nơi đặt người vớt, manh mối, boss, thời lượng, khác gì khi 1 đến 4 người.
6. Spec greybox cho MVP: dải Gần và xác Seed Station đầu tiên, đủ để dev dựng.
Tiêu chí: thời lượng chuyến chương 1 và chương 5 khớp khung mục 9 theo phép tính ước. Mỗi map nhánh có lối vào và lối ra rõ.

### GD-027 gd-quan - Trạm và cảng

Mục tiêu: nửa quản lý và nửa chơi tay thứ hai của game. Phạm vi vai đã đổi từ Quán sang Trạm và cảng (log dòng 32).
1. Trạm (K10, K11): danh sách khoang, sơ đồ mặt cắt, trạng thái hỏng, sửa, nâng cấp, thứ tự mở theo chương, nhu cầu vật liệu theo nhóm, tiến độ động cơ chính tới lúc rời neo.
2. Người vớt mở tính năng (K12): luật quest mở, mỗi người mở gì, tính năng lớn dần thế nào theo chương.
3. Ca cảng (K13): bến, tàu, danh sách hàng, giờ rời bến, thao tác lấy hàng, chế thêm, đóng kiện, bốc lên tàu, giao sai, giao trễ, thưởng giao nhanh, kết thúc ca. Bảng trạng thái của tàu và của đơn, thứ tự xử lý, ca biên.
4. Loại tàu và thương nhân: hành vi ở cảng (kiên nhẫn, kiểu đơn, điều khác thường), mở theo chương và Hạng cảng. Tàu The Wardens cải trang ở chương 3.
5. Hạng cảng (K15): tăng bằng gì, mỗi hạng mở gì.
6. Sự cố từ chương 3 (K14): loại sự cố, cách xử, hậu quả khi bỏ mặc.
7. Nuôi Driftlife (K16): khoang sinh quyển, số ô, cặp giống, sản lượng, chăm sóc, mở rộng.
8. Bảng tàu ở pha chuẩn bị: người chơi biết trước gì để chọn đi lấy hàng nào.
9. Đề sim hàng đợi ca cảng cho gd-tech theo 1 đến 4 người.
Tiêu chí: ca cảng chơi được trọn bằng một người. Thất bại trong ca dứt khoát và không phá tiến trình. Nêu rõ ca cảng khác quán của Dave ở đâu và giống ở đâu.

## Báo xong

Tin cho GDM, dòng đầu `GD-### XONG|KẸT: <một câu>`, kèm khối `## Báo cáo cho GDM`. Trong báo cáo có mục phản biện nếu có.
