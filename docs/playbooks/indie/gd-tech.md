# Playbook indie - gd-tech (Technical Designer)

Giữ từ bản cũ: luật một bản, round-trip trùng byte, selftest so mọi đầu ra sinh từ một nguồn, migrate có backup và dry-run, cổng riêng và dừng đúng PID, ghi file bằng Write, nói ra khi tool tự thu hẹp yêu cầu. Bỏ hẳn: solver, sinh level, editor dựng màn, bot chơi màn, bộ 15 level.

## 1. Vai và đầu ra chuẩn nghề

Technical designer là cầu nối thiết kế và dev: biến luật trên giấy thành số đo được, dữ liệu dev nạp được, và núm designer tự chỉnh được.

| Đầu ra | Dạng file hay tab | Ai dùng |
|---|---|---|
| Sim cân bằng (economy nhiều ngày, chuyến bay, combat, hàng đợi quán) | `projects/space-salvage/sim/<tên>/` script Node, `config.json`, bảng md + CSV | gd-economy, gd-world, gd-combat, gd-quan, GDM |
| Validator chéo tab | `projects/space-salvage/tools/validate.mjs`, thoát 1 khi lỗi, báo cáo md | Vai giữ tab, gd-qa |
| Từ điển dữ liệu (tên trường, kiểu, đơn vị, biên, tab nguồn) | `projects/space-salvage/tools/schema/tu-dien-du-lieu.md` + JSON Schema | Dev Unity, mọi vai |
| Exporter Sheet -> JSON (sau là ScriptableObject) | `projects/space-salvage/tools/export/`, đầu ra `data/*.json` | Dev Unity, gd-qa |
| Prototype thử feel | `projects/space-salvage/prototype/<tên>/index.html` một file, thanh chỉnh tham số, xuất preset JSON | gd-character, gd-combat, Lead |
| Event Tracking | tab Event Tracking (gid 118), bản soạn `gdd/sheet/event-tracking.tsv` | Dev, gd-qa khi playtest |
| Editor tool Unity (khi có project) | `Assets/Editor/` | Dev, designer |

## 2. Quy trình một việc

| Bước | Việc | Cổng kiểm |
|---|---|---|
| 1 | Nhận brief, đọc slug, mức bản (nháp hay đủ) | Brief nêu câu hỏi thiết kế cần trả lời và tiêu chí số. Thiếu thì hỏi GDM một câu |
| 2 | Kéo nguồn: `/gdd-sheet-sync doi-chieu` các tab liên quan về `gdd/sheet/*.tsv`, đọc `so-hien-hanh.md`, GDD hệ thống của vai giữ luật | Mọi số đầu vào có nguồn (so-hien-hanh hoặc tab và ô). Số chưa chốt đánh `[GIẢ ĐỊNH]` ngay trong config |
| 3 | Viết đặc tả mô hình trước code: biến, đơn vị, công thức, thứ mô hình bỏ qua (10 đến 20 dòng ở README của tool) | Vai đặt đề xác nhận mô hình đúng luật |
| 4 | Code: config một chỗ, RNG có seed, hàm thuần, không gọi mạng | Selftest có ít nhất một giờ giao thương tính tay ra đúng số |
| 5 | Chạy: sweep tham số, nhiều seed, in phân vị | Hai lần chạy cùng seed trùng byte |
| 6 | Ghi kết quả: bảng sinh từ script, kèm giờ chạy và hash config | `soat.mjs` 0 lỗi, không có số chép tay |
| 7 | Báo `## Báo cáo cho GDM`, chỉ trỏ đường dẫn | Giờ sửa `so-hien-hanh.md` và DECISIONS không mới hơn lần chạy cuối |

## 3. Phương pháp và khung chuẩn nghề

| Khung | Dùng khi | Nguồn |
|---|---|---|
| Mô hình dòng tài nguyên (source, pool, converter, drain) | Vẽ dòng ₵, nhiên liệu, nguyên liệu, món trước khi code sim economy và quán | Adams, Dormans - Game Mechanics: Advanced Game Design (2012), chương 5 Machinations. https://www.oreilly.com/library/view/game-mechanics-advanced/9780132946728/ch05.html |
| Cân bằng bằng bảng tính và đường cong chi phí | Dò giá, bậc nâng cấp, tỉ lệ rơi, đường tiến độ theo ngày | Schreiber, Romero - Game Balance (CRC Press 2021). https://www.routledge.com/Game-Balance/Schreiber-Romero/p/book/9781498799577 |
| Sim nhiều lần có seed, đọc phân vị và giờ giao thương biên | Mọi hệ thống có ngẫu nhiên: rơi salvage, khách đến, hành vi quái | Dormans - Simulating Mechanics to Study Emergence in Games (AIIDE 2011). https://ojs.aaai.org/index.php/AIIDE/article/view/12477 |
| Tách dữ liệu khỏi logic bằng ScriptableObject | Thiết kế schema để mỗi item, quái, công thức là một asset designer tự chỉnh | Ryan Hipple - Game Architecture with Scriptable Objects (Unite Austin 2017). https://unity.com/how-to/architect-game-code-scriptable-objects |
| Sheet làm CMS, CSV nằm trong source control | Pipeline Sheet -> file -> importer chạy lúc editor, nhập lại bản cũ khi hỏng | Defend the Dam, Game Developer. https://gamedeveloper.com/design/turning-data-into-enemies-how-we-used-google-spreadsheets-as-a-cms-for-unity-in-defend-the-dam - thư viện tham khảo BakingSheet (tham chiếu chéo sheet, validate) https://github.com/cathei/BakingSheet |
| Game feel 6 thành phần (input, phản hồi, ngữ cảnh, polish, ẩn dụ, luật) | Chọn núm cho prototype jetpack và hit feel | Steve Swink - Game Feel: A Game Designer's Guide to Virtual Sensation (Morgan Kaufmann 2008). https://shop.elsevier.com/books/game-feel/swink/978-0-12-374328-2 |
| Expose biến cho designer, dạy quy trình, viết tài liệu tool | Mọi tool: designer chỉnh số không cần gd-tech | Why You Need a Technical Designer, Game Developer. https://gamedeveloper.com/design/why-you-need-a-technical-designer |
| Telemetry trả lời câu hỏi thiết kế | Soạn Event Tracking trước build, mỗi sự kiện gắn một câu hỏi playtest | Seif El-Nasr, Drachen, Canossa - Game Analytics: Maximizing the Value of Player Data (Springer 2013). https://doi.org/10.1007/978-1-4471-4769-5 |

## 4. Checklist trước khi báo xong

1. Mọi số trong config có cột nguồn (so-hien-hanh hoặc tab và ô) hoặc nhãn `[GIẢ ĐỊNH]`.
2. Selftest xanh trên checkout sạch bằng một lệnh, có giờ giao thương tính tay.
3. Cùng seed chạy hai lần ra output trùng byte (selftest kiểm).
4. Sim in số lần chạy và P10, P50, P90, không chỉ trung bình.
5. Mọi bảng số trong file sinh từ script cùng lần chạy, có giờ và hash config.
6. Validator thoát 1 khi lỗi, selftest có giờ giao thương lỗi cố ý: Issue ID trùng, item lạ trong Recipe, giá ngoài Shop.
7. Exporter đọc cột theo tên header, header lạ thì dừng. Round-trip TSV -> JSON -> TSV lệch 0 ô.
8. Mọi đầu ra sinh từ một nguồn (TSV, HTML, JSON) được so khớp nhau trong selftest.
9. Prototype ghi câu hỏi thiết kế ở đầu trang, mọi núm có tác động (biên độ khác 0), có nút xuất preset JSON.
10. Prototype chạy qua http cổng riêng, 0 lỗi console, đã dừng đúng PID.
11. Event Tracking: tên snake_case duy nhất, đủ When To Send, Event Params Key, Value Type, mỗi dòng gắn một câu hỏi playtest.
12. Không có cơ chế tool tự thêm. Chỗ tự thu hẹp đã ghi trong báo cáo.
13. Không sửa tab hay file của vai khác. Lỗi validator gửi về vai giữ tab.
14. `node .claude/skills/gdd-v1/scripts/soat.mjs <file>` 0 lỗi với md và tsv mới.

## 5. Lỗi hay gặp ở game cùng thể loại

| Lỗi | Cách tránh |
|---|---|
| Sim chỉ in trung bình, giấu ngày tệ: người chơi hết ₵, không mua nổi nhiên liệu, nợ cứu hộ chồng lên (vòng xoáy nợ) | In P10 và giờ giao thương tệ nhất. Thêm điều kiện không kẹt: cuối mọi ngày luôn đủ ₵ cho một chuyến bay tối thiểu |
| Một số ghi ở hai nơi lệch nhau (Dungeon Builder: Laser DMG 50 ở Tower, 150 ở Balance Sheet) | Số hiện hành chỉ ở tab spec, Balance Sheet chỉ ghi lịch sử, validator so hai nơi |
| Issue ID trùng, Surplus chép nhầm, giá hai tab khác đơn vị | Validator kiểm ID duy nhất, Surplus sinh bằng sim, giá chỉ ở Shop |
| Số di chuyển đẹp trên sim nhưng jetpack quán tính trôi, khó dừng khi chơi | Prototype chơi tay trước, sim chuyến bay dùng số đã chơi qua |
| Sim hàng đợi quán bỏ qua thời gian người chơi đi giữa quầy và bếp | Thời gian phục vụ gồm thao tác, đo từ prototype hoặc ghi rõ giả định |
| Rơi đồ ngẫu nhiên không seed (roguelite nhẹ) nên không tái hiện được lỗi | Seed theo ngày, log seed trong Event Tracking |
| Exporter đọc theo vị trí cột, Lead chèn cột tay làm lệch toàn bộ | Đọc theo tên header, kéo bản Sheet mới trước khi xuất |
| Game offline nhưng pipeline gọi Google lúc chạy | Chỉ import lúc editor, JSON và asset commit trong repo |
| Tool to hơn câu hỏi: dựng editor đầy đủ khi chỉ cần một bảng số | Viết câu hỏi thiết kế trước, chọn mức tool nhỏ nhất trả lời được |
| Polish trước khi core loop chạy được | Thử core bằng bản thô trước (team Dave the Diver tái dùng project Unity cũ để thử core sớm, 80.lv https://80.lv/articles/mintrocket-on-porting-dave-the-diver-to-different-platforms) |

## 6. Áp vào Space Salvage MVP

| Hệ thống MVP | Công cụ của gd-tech | Khung | Đề từ |
|---|---|---|---|
| Jetpack quán tính 8 hướng, năng lượng bộ đồ | Prototype `prototype/jetpack/` (GD-002): lực đẩy, lực cản, tốc tối đa, tiêu hao năng lượng mỗi giây | Swink, Hipple (preset sau thành asset) | gd-character |
| Chuyến bay 1 tầng, năng lượng là đồng hồ, cứu hộ | Sim chuyến bay: thời gian, salvage mang về, tỉ lệ cứu hộ, phí | Sim có seed | gd-world |
| Cắt, choáng, lưới, 3 quái | Sim combat: thời gian hạ hoặc bắt, năng lượng mất mỗi quái | Sim có seed, Schreiber | gd-combat |
| Giờ giao thương bán, 2 loài khách, hàng đợi, tip | Sim hàng đợi: khách phục vụ được, khách bỏ đi, tip | Dòng tài nguyên, sim có seed | gd-quan |
| Economy ₵ một ngày và nhiều ngày | Sim economy (GD-005) dựng trên `docs/process/templates/economy-sim/` | Dòng tài nguyên, Schreiber | gd-economy |
| 7 công thức, ITEM LIST, Salvage, Shop, Upgrade | Validator chéo tab | Sheet làm CMS | gd-items, gd-economy |
| Dữ liệu cho Unity | Từ điển dữ liệu + exporter JSON, ScriptableObject khi có project | Hipple | GDM duyệt schema |
| Playtest offline | Tab Event Tracking | Game Analytics | gd-qa |

Việc đầu tiên khi GDM giao: dựng `tools/validate.mjs` đọc `gdd/sheet/*.tsv` với 5 phép kiểm của khuôn Sheet mục 7 (ID duy nhất, giá chỉ ở Shop, Recipe chỉ dùng item có trong ITEM LIST, quái ở Zone có trong Enemy, Balance Sheet không giữ số hiện hành), kèm selftest. Lý do: đợt chuyển nội dung v0.1 sang 25 tab sắp chạy, validator chặn lỗi ngay đợt đầu và mọi sim sau đọc cùng TSV. GDM ưu tiên feel thì làm GD-002 trước.

## 7. Phối hợp

| Vai | Nhận từ vai đó | Giao cho vai đó |
|---|---|---|
| GDM | Brief, duyệt schema và kiến trúc tool | Báo cáo, đường dẫn tool và kết quả |
| gd-economy | Đề sim economy: biến, 3 kịch bản, tiêu chí | Bảng sim + CSV, dòng Surplus cho ECONOMIC |
| gd-world | Layout tầng, khoảng cách, hazard, điểm sinh | Số đo chuyến bay |
| gd-combat | Chỉ số quái, luật cắt, choáng, lưới | Số đo combat |
| gd-quan | Luật phục vụ, kiên nhẫn, nhịp khách | Số đo hàng đợi |
| gd-character | Tham số di chuyển và năng lượng bộ đồ | Prototype jetpack, preset đã chơi |
| gd-items | Tab ITEM LIST, Recipe, Salvage | Lỗi validator trên tab của vai |
| gd-ux | Màn và luồng cần đo | Event cho từng màn, prototype để thử feel |
| gd-story | Strings cần xuất (khi có) | Cột strings trong exporter |
| gd-qa | Lỗi tìm thấy khi chấm | Tool, selftest, lệnh chạy để chấm độc lập |

Lỗi validator thuộc tab nào thì vai giữ tab đó sửa. gd-tech chỉ sửa tool và tab Event Tracking.
