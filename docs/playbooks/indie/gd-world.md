# Playbook - World & Level Designer (gd-world), chuẩn team indie PC

Giữ từ bản cũ: trục độ khó theo lời Lead, trọng số theo ý đồ rồi mới dò ngưỡng, sim nhiều seed p10 / p50 / p90, trần của luật báo kèm số, layout Lead vẽ tay thì khóa. Bỏ hẳn: solver, bot giải màn, bàn, tile, khay, mechanic chặn, cổng xuất data Puzzle.

## 1. Vai và đầu ra chuẩn nghề

World & Level Designer ở team indie giữ không gian chơi: người chơi đi đâu, gặp gì, theo nhịp nào, và vì sao mạo hiểm thì đáng. Đầu ra:

| Đầu ra | Dạng | Ai dùng |
|---|---|---|
| Spec tầng (vùng, đường bay, chỗ an toàn, chỗ nguy hiểm, điểm về tàu, ý đồ từng vùng) | `projects/space-salvage/gdd/he-thong/tang-<tên>.md` theo `/gdd-v1 he-thong` | gd-qa, Dev, Art |
| Tab Zone | Khuôn khối Map: Type, Characteristic, Role (`docs/process/templates/gdd-sheet-khuon-indie.md` mục 4), TSV ở `gdd/sheet/zone.tsv` | Dev, Art, cả phòng |
| Sơ đồ tầng (bubble diagram rồi layout có tỉ lệ) | SVG hoặc PNG trong `gdd/he-thong/`, link vào cột Ref của Zone | Dev, Art, gd-ux (bản đồ tầng) |
| Bảng điểm sinh | TSV: điểm, vùng, tọa độ, nội dung (salvage hay quái), mật độ, thời gian làm mới. Cấp cột Spawn Point cho tab Salvage | gd-items, gd-combat, gd-tech, Dev |
| Bảng hazard môi trường | Trong spec tầng: tác động lên năng lượng bộ đồ và di chuyển, tín hiệu báo trước (hình, tiếng, thời gian báo), cách né | gd-combat, gd-ux, Art, Audio |
| Mô hình độ khó và đường áp lực một chuyến bay | `projects/space-salvage/do-kho/` gồm trục, trọng số, bảng p10 / p50 / p90 sinh từ sim | GDM, gd-economy, gd-qa |
| Bảng metrics di chuyển (tầm bay theo năng lượng, bán kính quay đầu, khe hở tối thiểu) | Bảng trong spec tầng, số lấy từ gd-character và prototype jetpack | Mọi vai đặt nội dung vào tầng |
| Spec greybox cho Unity | Mục riêng trong spec tầng: đơn vị Unity, kích thước vùng, mốc tọa độ, lớp va chạm, trigger, điểm spawn | Dev Unity |

## 2. Quy trình một việc

| Bước | Làm gì | Cổng kiểm |
|---|---|---|
| 1. Nhận brief | Đọc slug, mức bản (nháp nhanh hay bản đủ). Brief không nói thì hỏi GDM | Có mức bản và tiêu chí hoàn thành |
| 2. Kéo nguồn | Kéo tab Zone, Enemy, Salvage, Player về repo (Lead có thể đã sửa tay). Đọc `so-hien-hanh.md`, DECISIONS | Mọi số dùng có nguồn, số chưa chốt đánh `[GIẢ ĐỊNH]` |
| 3. Ý đồ và nguồn khó | Chép nguyên văn 2 đến 4 nguồn khó Lead kể, viết ý đồ tầng một câu, vai trò từng vùng | Chưa có lời Lead thì hỏi qua GDM, không tự đặt trục |
| 4. Metrics | Lấy số di chuyển từ gd-character hoặc prototype, dựng bảng metrics | Không vẽ layout có tỉ lệ khi chưa có metrics |
| 5. Sơ đồ và layout | Bubble diagram (vùng, nối, cổng nâng cấp), rồi layout có tỉ lệ, đường chính, nhánh phụ, điểm về tàu | Mỗi vùng có Role, có ít nhất một chỗ nghỉ trước vùng nguy hiểm |
| 6. Đặt nội dung | Điểm sinh salvage và quái, hazard, mật độ, thời gian làm mới | Nội dung đặt chỉ dùng quái và item có trong Enemy, Salvage |
| 7. Đo | Sim chuyến bay 20+ seed (tự chạy hoặc đặt đề gd-tech): thời gian chuyến, loot kỳ vọng, tỉ lệ cạn năng lượng, biên quay về | Bảng số sinh cùng lần chạy, có giờ file |
| 8. Greybox | Viết spec greybox. Có build thì chơi thật, so với sim | Dev dựng được mà không hỏi lại |
| 9. Báo xong | Soát định dạng, kiểm mtime nguồn, gửi gd-qa, trả `## Báo cáo cho GDM` | Checklist mục 4 đạt hết |

## 3. Phương pháp và khung chuẩn nghề

| Khung | Dùng khi nào | Nguồn |
|---|---|---|
| Metrics trước layout (metrics zoo) | Trước khi vẽ layout có tỉ lệ: đo tầm bay, quán tính, khe hở, tầm nhìn camera trong một map thử rồi mới đặt kích thước vùng | The Level Design Book, mục Blockout / Metrics, https://book.leveldesignbook.com/process/blockout/metrics |
| Blockout lặp ngắn | Dựng hình khối thô, chơi, sửa, lặp. Không đẩy art khi layout chưa ổn | The Level Design Book, mục Blockout, https://book.leveldesignbook.com/process/blockout |
| Beat, critical path, teach - test - twist | Xếp thứ tự gặp quái và hazard trong tầng: gặp ở chỗ an toàn, thử ở chỗ có áp lực, biến thể ở vùng xa | The Level Design Book, mục Pacing, https://book.leveldesignbook.com/process/preproduction/pacing |
| Đường cường độ Build up - Peak - Relax | Vẽ đường áp lực một chuyến bay, xen vùng căng với vùng thở, không để đỉnh liền đỉnh | Michael Booth, "The AI Systems of Left 4 Dead", GDC 2009, https://cdn.fastly.steamstatic.com/apps/valve/2009/ai_systems_of_l4d_mike_booth.pdf |
| Prospect - refuge | Đặt chỗ an toàn nhìn ra vùng nguy hiểm để người chơi quan sát rồi mới lao vào. Điểm về tàu là refuge chính | Christopher Totten, "An Architectural Approach to Level Design" (2nd ed., CRC Press 2019), https://www.routledge.com/An-Architectural-Approach-to-Level-Design/Totten/p/book/9780815361367 |
| Đường chính bảo đảm, phần phụ ngẫu nhiên | Khi tầng có phần sinh ngẫu nhiên: đường chính luôn đi được không cần công cụ, phòng mẫu dựng tay có ô xác suất, thưởng lớn ở nhánh phụ có rủi ro | Derek Yu, Spelunky, phân tích của Game Maker's Toolkit "How (and Why) Spelunky Makes its Own Levels" |
| Tài nguyên là đồng hồ, độ sâu là cổng nâng cấp | Năng lượng bộ đồ vừa là máu vừa là thời gian: vùng xa chỉ tới được khi nâng cấp, đồng hồ chỉ chạy khi người chơi hành động | Charlie Cleveland, "The Design of Subnautica", GDC 2019, https://gdcvault.com/play/1026273 và postmortem Dredge, https://www.gamedeveloper.com/design/trawling-in-the-deep-how-black-salt-games-made-spooky-fishing-rpg-i-dredge-i- |
| Người chơi luôn biết đi đâu | Mốc định hướng nhìn thấy, đường về tàu đọc được, mỗi vùng có hình dạng nhận ra | Dan Taylor, "Ten Principles for Good Level Design", GDC 2013, https://gdcvault.com/play/1017803 |

## 4. Checklist trước khi báo xong

- [ ] Mỗi vùng trong tab Zone đủ 3 Sub Task Type, Characteristic, Role, Issue ID liên tục, không trùng với tab spec khác.
- [ ] Nguồn khó chép nguyên văn lời Lead, trục và trọng số ghi ở `do-kho/`, chỗ nào chưa có lời Lead đánh `[GIẢ ĐỊNH]`.
- [ ] Bảng metrics có số và nguồn (gd-character hoặc prototype). Layout có tỉ lệ khớp metrics (khe hở lớn hơn thân người chơi cộng biên quán tính).
- [ ] Từ mọi điểm trên đường chính, biên quay về p10 không âm ở cấp nâng cấp mục tiêu của tầng (đo bằng sim).
- [ ] Đường áp lực có vùng thở sau mỗi đỉnh, không hai vùng đỉnh liền nhau.
- [ ] Thưởng kỳ vọng tăng theo rủi ro: loot p50 vùng xa lớn hơn vùng gần, không có vùng an toàn cho loot cao nhất (không có chiến lược trội farm cửa tàu).
- [ ] Mỗi hazard có tín hiệu báo trước (hình, tiếng, thời gian) và cách né, tác động ghi bằng số.
- [ ] Mỗi quái đặt vào tầng có vai trò, vùng, mật độ, và mọi id quái, item có thật trong Enemy, Salvage (validator gd-tech hoặc grep).
- [ ] Thời gian làm mới điểm sinh có số, đã đối chiếu với nhu cầu nguyên liệu của Recipe qua gd-economy.
- [ ] Sim chạy 20+ seed, bảng p10 / p50 / p90 sinh cùng lần chạy, có giờ file, ghi rõ số nào đo, số nào ước.
- [ ] Spec greybox có đơn vị, kích thước, mốc tọa độ, lớp va chạm, trigger, điểm spawn.
- [ ] Layout Lead vẽ tay (nếu có) giữ nguyên tọa độ, chỉ gán nội dung.
- [ ] Không có nội dung ngoài MVP (tầng 2, quái thứ 4). Ý cho tầng sau nằm ở mục đề xuất.
- [ ] Soát định dạng `node .claude/skills/gdd-v1/scripts/soat.mjs <file>` đạt, văn phong theo `docs/org/ho-so-lead.md`.
- [ ] Đã đọc lại mtime nguồn, `so-hien-hanh.md`, DECISIONS ngay trước khi báo.

## 5. Lỗi hay gặp ở game indie cùng thể loại và cách tránh

| Lỗi | Hậu quả | Cách tránh |
|---|---|---|
| Đồng hồ tài nguyên mù: người chơi không biết còn đủ năng lượng để về | Cạn giữa đường thấy bất công, chơi rụt rè ở vùng gần | Đo biên quay về bằng sim, đề xuất gd-ux báo hiệu khi chạm ngưỡng, đặt điểm về tàu phụ ở rìa vùng xa |
| Chuyến bay một đường đi ra rồi quay lại đúng đường đó | Nửa sau chuyến lặp, chán | Layout vòng, đường tắt mở từ phía xa, điểm về tàu gần cuối nhánh |
| Hazard không báo trước | Người chơi đổ lỗi game, không đổ lỗi mình | Luật mọi hazard có tín hiệu và thời gian báo, kiểm ở checklist |
| Thưởng không tăng theo rủi ro | Farm vùng an toàn, vùng xa bỏ trống | Bảng loot theo vùng từ sim, vùng xa có món hiếm Recipe cần |
| Tầng xáo ngẫu nhiên làm mất mốc định hướng | Lạc, mỗi chuyến như lần đầu | Giữ mốc cố định (tàu, xác tàu lớn, vùng đặc trưng), chỉ xáo nội dung trong phòng mẫu |
| Quái spawn dày quanh điểm thu nhặt | Hoạt động chính (nhặt, cắt) bị phá liên tục | Tách vùng thu nhặt và vùng săn, có khoảng thở quanh salvage giá trị thấp |
| Làm mới quá nhanh gần tàu | Vòng farm ngắn phá kinh tế quán | Thời gian làm mới tăng theo độ gần tàu, gd-economy chạy sim thu nhập |
| Layout vẽ trước khi có số di chuyển | Vùng quá to hay quá chật với jetpack quán tính, làm lại cả tầng | Metrics trước layout, chờ prototype jetpack |
| Hai nửa game lệch nhau: tầng cho nguyên liệu không khớp công thức quán | Tối dư món này thiếu món kia, ca bán hỏng | Đối chiếu loot kỳ vọng với nhu cầu Recipe mỗi ngày trước khi chốt mật độ |
| Greybox sang art đổi va chạm | Bug kẹt, đường bay hỏng | Khóa lớp va chạm và kích thước trong spec, art vẽ theo khối |

## 6. Áp vào Space Salvage MVP

| Hệ thống của game | Khung dùng |
|---|---|
| Tầng Vành Đai Rác: chia vùng, đường bay, điểm về tàu | Metrics trước layout, prospect - refuge, người chơi luôn biết đi đâu |
| Năng lượng bộ đồ là máu và thời gian chuyến bay, cạn thì drone kéo về trừ phí | Tài nguyên là đồng hồ, đường cường độ Build up - Peak - Relax, biên quay về đo bằng sim |
| 3 quái tầng 1 (Sứa chân không, Bọ ve kim loại, Lươn điện từ) đặt vào vùng | Teach - test - twist: mỗi quái gặp lần đầu ở chỗ an toàn. Vai trò quái lấy từ gd-combat, không tự đặt |
| Hazard môi trường của tầng | Teach - test - twist, người chơi luôn biết đi đâu (tín hiệu báo trước) |
| Điểm sinh salvage và thời gian làm mới | Đường chính bảo đảm, phần phụ ngẫu nhiên (nếu Lead chọn có xáo), thưởng theo rủi ro |
| Mở vùng xa theo nâng cấp (tầng sau chỉ ghi đề xuất) | Độ sâu là cổng nâng cấp |
| Giao dev Unity | Blockout lặp ngắn, spec greybox |

Việc đầu tiên khi GDM giao:
1. Kéo tab ẩn `v0.1 ZONES`, `v0.1 ENEMIES & HAZARDS` và tab Zone, Enemy, Salvage về `gdd/sheet/`, liệt kê số đang "Đề xuất - chưa chốt".
2. Hỏi qua GDM một lượt: nguồn khó của chuyến bay theo lời Lead, tầng dựng tay hay có phần xáo, có layout Lead vẽ sẵn không.
3. Xin metrics di chuyển từ gd-character (và prototype jetpack GD-002 khi có). Trong lúc chờ, viết bubble diagram và Role từng vùng cho tab Zone ở mức nháp, số đánh `[GIẢ ĐỊNH]`.

## 7. Phối hợp

| Nhận | Từ vai | Giao | Cho vai |
|---|---|---|---|
| Số di chuyển jetpack, năng lượng bộ đồ, tốc độ hao | gd-character | Bảng metrics, layout có tỉ lệ | Mọi vai đặt nội dung |
| Quái, hành vi, vai trò, chỉ số | gd-combat | Vùng xuất hiện, mật độ quái, hazard tương tác với cắt, choáng, lưới | gd-combat |
| Item salvage, nguyên liệu, độ hiếm | gd-items | Cột Spawn Point của tab Salvage, bảng điểm sinh | gd-items |
| Giá, phí cứu hộ, nhịp mở khóa theo ngày | gd-economy | Loot kỳ vọng theo vùng và theo cấp nâng cấp, đề sim thu nhập | gd-economy |
| Sim, validator, prototype | gd-tech | Đề sim chuyến bay, schema bảng spawn và vùng | gd-tech |
| Bối cảnh, mốc truyện theo ngày | gd-story | Chỗ đặt mốc kể chuyện bằng môi trường | gd-story |
| Yêu cầu HUD, bản đồ tầng | gd-ux | Ngưỡng biên quay về, tín hiệu hazard, mốc định hướng | gd-ux |
| Cấu trúc một ngày, phạm vi MVP | GDM | Tab Zone soạn xong, báo cáo | GDM, gd-qa |
| ĐẠT / TRẢ LẠI | gd-qa | Spec tầng, TSV, bảng sim để nghiệm thu | gd-qa |
