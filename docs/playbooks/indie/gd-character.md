# Playbook gd-character (indie PC, Space Salvage)

Thay `docs/playbooks/gd-systems.md` làm tài liệu nghề của vai. Chỉ lấy phương pháp, không áp Puzzle.

## 1. Vai và đầu ra chuẩn nghề

| Đầu ra | Dạng | Ai dùng |
|---|---|---|
| Tab Player (Type, Characteristic, Move, Attribute, Controls Scheme, kĩ năng nội tại, kĩ năng đặc biệt) | Tab Sheet 105, nháp TSV trong repo | gd-combat, gd-economy, gd-tech, dev |
| Bảng số di chuyển jetpack (vmax, gia tốc, quán tính, hãm, tốn năng lượng/s) | Bảng trong tab Player + file tham số cho prototype | gd-tech, dev |
| Luật năng lượng bộ đồ và cứu hộ khi về 0 | Mục trong tab Player | gd-combat, gd-economy, gd-ux |
| Chỉ số theo cấp nâng cấp (chỉ phần nhân vật) | Bảng trong tab Player, số tiền ở Upgrade | gd-economy |
| Hồ sơ NPC và loài khách | `projects/space-salvage/gdd/nhan-vat/<tên>.md` | gd-story, gd-quan, gd-ux |
| Yêu cầu art nhân vật (silhouette, bảng màu, animation list) | Mục trong hồ sơ, gửi GDM vào tab Assets | GDM, người làm art |
| Danh sách đề xuất nhân vật ngoài MVP | Một file backlog | GDM, Lead |

## 2. Quy trình một việc

| Bước | Việc | Cổng kiểm |
|---|---|---|
| 1 | Đọc brief, `so-hien-hanh.md`, tab Player, GAME STORY, Customer. Số chưa chốt gắn `[GIẢ ĐỊNH]` | Liệt kê số đã chốt và số giả định |
| 2 | Viết ý đồ cảm giác một câu (ví dụ "trôi nặng nhưng điều khiển được") trước khi viết số | Có câu ý đồ, GDM đọc hiểu |
| 3 | Dựng bảng số, mỗi thông số có đơn vị, miền cho phép và lý do | Không ô trống, không số không đơn vị |
| 4 | Gửi gd-tech thông số để thử trong prototype jetpack, nhận lại video hoặc log | Có số đo thực, không chỉnh theo cảm tính một mình |
| 5 | Viết hồ sơ NPC theo khuôn, đối chiếu GAME STORY và Customer để không lệch | Mỗi hồ sơ đủ mục, không mâu thuẫn tab khác |
| 6 | Soạn yêu cầu art, chạy bài kiểm silhouette và kiểm bảng màu (mục 4) | Checklist đạt |
| 7 | Chạy `/gdd-v1 he-thong`, gửi gd-qa, sửa theo TRẢ LẠI | ĐẠT của gd-qa |
| 8 | `/gdd-sheet-sync` dán tab Player, đối chiếu CSV | Đối chiếu từng ô khớp |
| 9 | Báo cáo cho GDM, ghi giả định và việc bỏ qua | Báo cáo đủ khối |

## 3. Phương pháp và khung chuẩn nghề

| Khung | Dùng khi | Nguồn |
|---|---|---|
| Game feel: input, phản hồi, ngữ cảnh, độ trơn (6 khối của Swink) | Mô tả và đo cảm giác điều khiển jetpack thành số | Steve Swink, "Game Feel", CRC Press 2008 |
| Tham số vật lý rõ ràng, coyote time, input buffer, hãm theo trục | Thiết kế di chuyển quán tính mà không bực | Maddy Thorson, "Celeste and TowerFall Physics": https://maddythorson.medium.com/celeste-and-towerfall-physics-d24bd2ae0fc5 |
| Công cụ chỉnh tham số trực tiếp để nhìn ảnh hưởng từng số | Chốt vmax, gia tốc, hãm cùng prototype | Mark Brown (GMTK), "Platformer Toolkit": https://gmtk.itch.io/platformer-toolkit |
| Juice: hiệu ứng, âm, rung màn hình tăng cảm giác phản hồi | Phần phản hồi của jetpack, nhận sát thương, hết năng lượng | Jonasson và Purho, "Juice it or lose it", GDC Europe 2012 |
| Persona gọn: mục tiêu, nỗi sợ, cách nói, vai trong luồng | Hồ sơ NPC và loài khách | Alan Cooper, "The Inmates Are Running the Asylum", 1999 |
| Lens of Essential Experience, Lens of Character | Kiểm nhân vật có phục vụ trải nghiệm lõi không | Jesse Schell, "The Art of Game Design" |
| Silhouette test: tô đen còn nhận ra, đọc được vai trong 1 giây | Duyệt yêu cầu art, phân biệt 2 loài khách và quái | Thực hành chuẩn art nhân vật (ví dụ Valve, "Team Fortress 2" character design), không có link gốc đã kiểm |
| Palette giới hạn, màu nhấn mang nghĩa chức năng | Bảng màu cyberpunk pixel art, tra bảng mẫu | Lospec Palette List: https://lospec.com/palette-list |

## 4. Checklist trước khi báo xong

1. Mọi thông số di chuyển có đơn vị (px/s, px/s2, năng lượng/s) và miền min-max.
2. Có câu ý đồ cảm giác điều khiển ở đầu mục Move.
3. Đã đưa số cho gd-tech thử, có kết quả đo hoặc ghi rõ "chưa thử".
4. Năng lượng bộ đồ: tốn/s ở từng hành động, nạp lại, và trạng thái về 0 có luật cứu hộ đầy đủ, không có đường kẹt.
5. Chỉ số theo cấp tăng đơn điệu, không có cấp phá luật, số ₵ để gd-economy.
6. Số chưa chốt đều gắn `[GIẢ ĐỊNH]`, không bịa số Lead chưa chốt.
7. Chỉ có 2 loài khách trong phạm vi làm, nhân vật khác nằm ở file đề xuất.
8. Hồ sơ NPC đủ: ngoại hình, tính cách, động cơ, cách nói, vai trong truyện.
9. Không viết hành vi quán (gọi món, kiên nhẫn, trả tiền), chỉ trỏ gd-quan.
10. Không viết luật combat hay vũ khí, chỉ nêu giao diện chỉ số với gd-combat, gd-items.
11. Yêu cầu art: silhouette 2 loài khách khác nhau rõ khi tô đen, bảng màu ≤ 16 màu mỗi nhân vật, animation list có số khung ước lượng.
12. Tên và thuật ngữ khớp Sheet (tầng, quán, ₵, lưới, choáng, đồ độ).
13. Văn phong: tiếng Việt có dấu, không emoji, không gạch dài, không dấu chấm phẩy.
14. TSV trong repo khớp Sheet sau `/gdd-sheet-sync`.

## 5. Lỗi hay gặp ở game indie cùng thể loại

| Lỗi | Cách tránh |
|---|---|
| Jetpack trượt quá, người chơi không dừng chính xác trong lúc cắt hoặc nhặt | Hãm chủ động mạnh hơn gia tốc, thử nhặt đồ trong lúc trôi trong prototype |
| Hết năng lượng là chết, phạt quá nặng khiến chơi sợ hãi | Luật cứu hộ rõ, mất có giới hạn (₵ hoặc đồ nhặt được), không mất cả ngày |
| Chỉ số nâng cấp thay đổi cảm giác điều khiển ở cấp cao (nhanh tới mức mất kiểm soát) | Nâng cấp tăng dung lượng và hiệu suất trước, tốc độ tăng nhỏ, kiểm lại cảm giác mỗi cấp |
| Hồ sơ NPC dài nhưng không dùng được trong lời thoại | Mỗi hồ sơ có 3 câu mẫu cách nói và 1 động cơ đủ để viết cảnh |
| Hai loài khách giống nhau ngoài màu da | Silhouette, nhịp động tác và cách nói khác nhau rõ |
| Nhân vật phình nội dung ngoài MVP | Ghi file đề xuất, không làm khi Lead chưa mở phạm vi |
| Số đặt theo cảm tính, không ai đo lại | Mọi số di chuyển đi qua prototype, ghi ngày và build thử |

## 6. Áp vào Space Salvage MVP

| Hệ thống | Khung dùng |
|---|---|
| Jetpack, quán tính, hãm | Game feel (Swink), tham số Celeste, Platformer Toolkit làm mẫu bảng chỉnh |
| Năng lượng bộ đồ, cứu hộ | Lens of Essential Experience, mô hình nguồn/hao như tài nguyên, kiểm không có đường kẹt |
| Nâng cấp chỉ số nhân vật | Bảng cấp đơn điệu, kiểm cảm giác từng cấp, số ₵ do gd-economy |
| Phản hồi (hết năng lượng, trúng đòn, nhặt) | Juice |
| 2 loài khách, NPC chính | Persona gọn, silhouette test, palette giới hạn |
| Yêu cầu art | Silhouette, Lospec, animation list |

Việc đầu tiên khi GDM giao: đọc tab Player v0.1 và `so-hien-hanh.md`, viết câu ý đồ cảm giác jetpack, dựng bảng thông số với `[GIẢ ĐỊNH]` rồi gửi gd-tech cho prototype (GD-002). Song song soạn hồ sơ 2 loài khách đủ để gd-story và gd-quan khởi động.

## 7. Phối hợp

| Nhận | Từ | Giao | Cho |
|---|---|---|---|
| Luật năng lượng, tài nguyên bộ đồ ở tầng chiến đấu | gd-combat | Chỉ số nhân vật (HP, năng lượng, tốc độ, tầm) | gd-combat |
| Số kết quả prototype jetpack | gd-tech | Bảng thông số cần thử | gd-tech |
| Giá nâng cấp, ngưỡng cấp | gd-economy | Bảng chỉ số theo cấp, giá trị mỗi cấp | gd-economy |
| Hành vi khách ở quán, luật phục vụ | gd-quan | Hồ sơ loài khách | gd-quan, gd-story |
| Mạch truyện, tone, tên | gd-story | Hồ sơ NPC, câu mẫu cách nói | gd-story |
| Điều khiển, HUD yêu cầu | gd-ux | Controls Scheme, thông số phản hồi | gd-ux |
| Phản hồi QA | gd-qa | Bản sửa tab Player và hồ sơ | gd-qa |
| Yêu cầu art | GDM | Yêu cầu art nhân vật để vào tab Assets | GDM |
