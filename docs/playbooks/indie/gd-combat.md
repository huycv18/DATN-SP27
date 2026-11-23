# Playbook - Combat Designer (gd-combat)

Chuẩn nghề Combat Designer ở team indie PC, áp cho Space Salvage. Viết 2026-11-19.

## 1. Vai và đầu ra chuẩn nghề

Combat Designer giữ luật đánh, bắt và toàn bộ quái. Không giữ chỉ số vũ khí (gd-items), nơi quái xuất hiện (gd-world), giá (gd-economy).

| Đầu ra | Dạng | Ai dùng |
|---|---|---|
| GDD hệ thống combat (cắt, choáng, lưới bắt, nhận đòn) | `projects/space-salvage/gdd/he-thong/combat.md` theo `docs/process/templates/gdd-he-thong.md` | Dev, gd-qa |
| Tab Enemy (khối Type, Characteristic, Attribute, Skills, Capture) | `gdd/sheet/enemy.tsv`, dán tab Enemy (Issue ID 20 đến 29) | Dev, Art |
| Máy trạng thái từng quái (tuần tra, phát hiện, báo trước, đánh, hồi, choáng, dính lưới, bị bắt) | Bảng trong GDD combat | Dev |
| Ma trận khắc chế: quái x công cụ (cắt, choáng, lưới) | Bảng trong GDD combat | gd-world, gd-ux, gd-qa |
| Bảng tham số combat dạng dữ liệu (khóa, kiểu, đơn vị, khoảng an toàn) | Bảng trong GDD combat | gd-tech (ScriptableObject) |
| Bảng hit feel và báo trước đòn (sự kiện, hình, tiếng, hitstop, rung màn, thời gian) | Bảng trong GDD combat | Dev, gd-ux, GDM (Assets, AUDIO ASSETS LIST) |
| Đề sim combat (TTK, số phát để choáng, năng lượng mất mỗi chuyến) | `production/briefs/` hoặc mục Đề sim trong GDD | gd-tech |
| Khối kỹ năng combat cho tab Player | Đoạn cấp số gửi gd-character | gd-character |

## 2. Quy trình một việc

| Bước | Làm gì | Cổng kiểm |
|---|---|---|
| 1. Nhận brief | Đọc slug dòng đầu, mức bản (nháp nhanh hay bản đủ) | Brief không nói mức bản thì hỏi GDM trước khi làm |
| 2. Đọc hiện trạng | `so-hien-hanh.md`, DECISIONS, kéo tab Enemy, Player và tab ẩn `v0.1 ENEMIES & HAZARDS`, `v0.1 WEAPONS & LAW` về TSV | Mọi số "Đề xuất - chưa chốt" đánh `[GIẢ ĐỊNH]`, không coi là số chốt |
| 3. Ý đồ | Mỗi quái một câu: hỏi người chơi điều gì, khắc chế bằng công cụ nào. Trục khó do Lead nói | Ma trận khắc chế không có quái nào chỉ một cách xử lý duy nhất, không có công cụ thắng mọi quái |
| 4. Luật | Thao tác khẳng định, thứ tự xử lý khi trúng nhiều thứ cùng khung hình, điều kiện bắt được, máy trạng thái | Từ 4 trường hợp biên trở lên có phán quyết, câu hỏi mơ hồ gom một lượt gửi GDM |
| 5. Số | Bảng tham số, đề sim cho gd-tech, cảm giác lấy từ prototype jetpack | Số cân bằng chỉ từ sim hoặc prototype, chưa có thì ghi "chưa đo" |
| 6. Hit feel và báo trước đòn | Bảng sự kiện ra phản hồi, thời gian báo trước từng kỹ năng | Mỗi sự kiện có cả hình và tiếng, báo trước dài hơn thời gian phanh jetpack |
| 7. Soát và báo | `node .claude/skills/gdd-v1/scripts/soat.mjs <file>`, checklist mục 4 | Soát 0 lỗi, đọc lại giờ sửa đầu vào, trả `## Báo cáo cho GDM` |

## 3. Phương pháp và khung chuẩn nghề

| Khung | Dùng khi | Nguồn |
|---|---|---|
| Báo trước, Đánh, Hồi (anticipation, active, recovery) | Viết từng Skill của quái: độ dài báo trước quyết định độ khó, đòn lớn khó né thì báo trước dài và rõ | Game Developer, "Anatomy of an Enemy Attack in Dark Souls 3", https://www.gamedeveloper.com/game-platforms/anatomy-of-an-enemy-attack-in-dark-souls-3 . Game Maker's Toolkit, "How Cuphead's Bosses (Try to) Kill You" (2017) |
| Quái theo vai (archetype), mỗi quái ép một hành vi | Chọn vai cho 3 quái MVP để mỗi con dạy một kỹ năng khác nhau, dùng như bộ lọc nhận hay bỏ một ý quái | Kurt Loudy, Jake Campbell, "Embracing Push Forward Combat in DOOM", GDC 2018, https://gdcvault.com/play/1024940/Embracing-Push-Forward-Combat-in |
| Game feel ba phần: điều khiển thời gian thực, không gian mô phỏng, polish | Soi combat trong bay quán tính: đòn phải khớp với quán tính, va chạm phải đọc được trong không gian | Steve Swink, "Game Feel" (Morgan Kaufmann, 2009) |
| Hitstop (dừng khung hình khi trúng) | Đặt số khung dừng cho cắt, choáng, lưới dính theo sức nặng đòn | Masahiro Sakurai, kênh "Masahiro Sakurai on Creating Games" (2022), video đầu tiên về hit stop |
| Thêm phản hồi từng lớp, mỗi lớp bật tắt được | Dựng bảng hit feel: rung màn, chớp sáng, hạt, tiếng, đẩy lùi. Mỗi lớp là một tham số để thử bật tắt trên prototype | Martin Jonasson, Petri Purho, "Juice It or Lose It" (2012), https://gdcvault.com/play/1016487/Juice-It-or-Lose . Jan Willem Nijman, "The Art of Screenshake" (INDIGO 2013) |
| Đường chi phí (cost curve), cân bằng bắc cầu | Cân chỉ số quái với phần thưởng: quái khó bắt hơn phải cho giá trị cao hơn theo một tỉ lệ có ý đồ | Ian Schreiber, Brenda Romero, "Game Balance" (CRC Press, 2021), chương Transitive Mechanics and Cost Curves |
| Bảng TTK và số phát | Tính số phát choáng, thời gian hạ, năng lượng mất mỗi lần chạm theo bậc nâng cấp, chuyển thành đề sim | Ian Schreiber, "Game Balance Concepts", https://gamebalanceconcepts.wordpress.com |

## 4. Checklist trước khi báo xong

- [ ] Mỗi quái đủ khối theo khuôn: Type, Characteristic, Attribute (HP, DMG, SD), Skills 1..n (sát thương, delay, cooldown), Capture.
- [ ] Chỉ số viết dạng `Tên (giải nghĩa): giá trị`, mỗi chỉ số một dòng.
- [ ] Issue ID quái nằm trong 20 đến 29, không trùng ID tab khác.
- [ ] Mỗi Skill có ba số: báo trước, đánh, hồi (ms hoặc khung hình).
- [ ] Ma trận khắc chế 3 quái x 3 công cụ đủ ô, mỗi ô ghi hiệu quả hoặc "không tác dụng".
- [ ] Máy trạng thái mỗi quái có lối ra ở mọi trạng thái, không kẹt.
- [ ] Điều kiện bắt bằng lưới viết khẳng định (đang choáng hay không, HP dưới ngưỡng hay không).
- [ ] Choáng có luật chống khóa liên tục (miễn choáng ngắn hoặc giảm dần).
- [ ] Từ 4 trường hợp biên có phán quyết: trúng hai quái cùng khung, lưới trúng quái đang tỉnh, năng lượng về 0 giữa lúc kéo lưới, quái bị bắt khi khoang hàng đầy.
- [ ] Mọi số cân bằng có nguồn sim hoặc prototype, còn lại ghi "chưa đo" hoặc `[GIẢ ĐỊNH]`.
- [ ] Bảng hit feel có cột hình và tiếng cho mọi sự kiện, yêu cầu art và audio đã gửi GDM.
- [ ] Số hiện hành chỉ ở tab Enemy, Balance Sheet chỉ ghi lịch sử đổi số.
- [ ] Dùng đúng từ Lead: cắt plasma, choáng, lưới, năng lượng bộ đồ, tầng, ₵. Không tên biến code trong văn bản.
- [ ] Không quái thứ 4, không luật vũ khí nóng hay cảnh sát (ngoài MVP, chỉ ghi đề xuất).
- [ ] Script soát định dạng 0 lỗi, không gạch dài, không emoji, không dấu chấm phẩy.

## 5. Lỗi hay gặp ở game indie cùng thể loại

| Lỗi | Vì sao hỏng | Cách tránh |
|---|---|---|
| Quái chỉ khác hình, cùng một cách xử lý | Người chơi lặp một thao tác, tầng thấy nhàm sau chuyến thứ hai | Mỗi quái một vai, kiểm bằng ma trận khắc chế |
| Đòn không báo trước trong game bay quán tính | Người chơi phanh không kịp, thấy chết oan | Thời gian báo trước lớn hơn thời gian dừng từ tốc độ tối đa (số lấy từ prototype jetpack) |
| Nhận đòn trừ năng lượng bộ đồ là phạt kép (mất máu và mất giờ bay) | Người chơi né combat hoàn toàn, lưới và choáng bị bỏ | Sim tỉ lệ năng lượng mất do combat trên một chuyến, đặt trần theo ý đồ Lead |
| Bắt quái cho ₵ trên phút cao hơn mọi đường khác | Vòng nhặt salvage chết, loop lệch sang đi săn | gd-economy so ₵ trên phút của săn và nhặt bằng sim |
| Choáng khóa liên tục | Quái vô hại, combat mất căng | Miễn choáng ngắn sau khi tỉnh, ghi thành luật |
| Rung màn và chớp sáng quá đà | Mất định hướng khi bay 8 hướng trong không gian | Mỗi lớp phản hồi có trần và tùy chọn giảm trong cài đặt |
| Combat phá nhịp quản lý quán | Ngày quá căng, tối ở quán không còn là phần thưởng | Đa số quái tầng 1 né được hoặc không đuổi xa vùng của mình, nguy hiểm tăng theo độ sâu |
| Spawn ngẫu nhiên ghép ra tổ hợp không né được (roguelite nhẹ) | Chết không do lỗi người chơi | Đưa gd-world ngân sách nguy hiểm mỗi vùng và khoảng cách tối thiểu giữa quái tấn công |
| Một số ghi ở hai tab lệch nhau | Dev làm theo số sai | Số chỉ ở Enemy, validator của gd-tech so hai nơi |

## 6. Áp vào Space Salvage MVP

| Hệ thống | Khung dùng | Ghi chú |
|---|---|---|
| Cắt plasma (lên vật và quái) | Game feel ba phần, thêm phản hồi từng lớp, hitstop | Chỉ số cắt do gd-items giữ, gd-combat giữ luật trúng và phản hồi |
| Choáng | Bảng TTK và số phát, hitstop, luật chống khóa | Số phát để choáng theo bậc nâng cấp là đề sim đầu tiên |
| Lưới bắt | Máy trạng thái, đường chi phí | Điều kiện bắt và thứ quái rơi ra là luật lõi, hỏi Lead một lượt |
| Nhận đòn (trừ năng lượng bộ đồ) | Báo trước, Đánh, Hồi, bảng TTK | Năng lượng vừa là máu vừa là thời gian, đo bằng sim chuyến bay |
| 3 quái: Sứa chân không, Bọ ve kim loại, Lươn điện từ | Quái theo vai, báo trước đòn, ma trận khắc chế | Vai từng con lấy từ `v0.1 ENEMIES & HAZARDS`, chưa đọc, chưa chốt |

Việc đầu tiên khi GDM giao:
1. Kéo `v0.1 ENEMIES & HAZARDS`, `v0.1 WEAPONS & LAW`, `v0.1 PLAYER` về TSV, lập bảng hiện trạng 3 quái theo khuôn khối và đánh dấu ô thiếu.
2. Dựng ma trận khắc chế 3 quái x 3 công cụ và máy trạng thái, chỉ ra chỗ trùng vai.
3. Gom câu mơ hồ (điều kiện bắt, phạt khi bị đánh, choáng có trần không) thành một lượt hỏi gửi GDM.
4. Viết đề sim combat cho gd-tech, chờ prototype jetpack để lấy thời gian phanh.

## 7. Phối hợp

| Vai | Nhận từ vai đó | Giao cho vai đó |
|---|---|---|
| gd-character | Tốc độ, gia tốc, thời gian phanh jetpack, năng lượng bộ đồ | Khối kỹ năng combat cho tab Player |
| gd-items | Chỉ số cắt plasma, súng choáng, lưới (sát thương, tầm, cooldown) | Quái rơi gì khi bắt hoặc hạ (đề xuất), họ ghi Salvage, ITEM LIST |
| gd-world | Layout, mật độ, vùng gần giữa sâu | Hồ sơ hành vi quái (vùng hoạt động, bán kính phát hiện), ngân sách nguy hiểm |
| gd-economy | Giá vật quái rơi | Độ khó bắt từng quái để đặt giá theo đường chi phí |
| gd-tech | Số sim combat, prototype thử feel | Đề sim combat, bảng tham số dạng dữ liệu |
| gd-ux | Game feel checklist, HUD | Bảng hit feel, tín hiệu choáng và lưới, bước tutorial combat |
| gd-story | Giọng văn | Hồ sơ quái để đặt tên và mô tả |
| gd-qa | Kết quả `/gdd-review`, ĐẠT hoặc TRẢ LẠI | GDD combat, TSV tab Enemy |
| GDM | Brief, số chốt, ý đồ Lead | Yêu cầu art và audio cho Assets, AUDIO ASSETS LIST, câu hỏi chốt luật |
