# Playbook indie - gd-items (Weapons & Items Designer)

Áp cho Space Salvage MVP. Soạn 2026-11-19 theo brief `production/briefs/2026-11-19-chuyen-nghiep-hoa-vai.md`.

## 1. Vai và đầu ra chuẩn nghề

Designer vật phẩm ở team indie giữ "từ điển của game": mọi thứ cầm, nhặt, chế, bán đều có một dòng ở đây. Đầu ra:

| Đầu ra | Dạng | Ai dùng |
|---|---|---|
| Danh mục item (Item ID duy nhất, Type, nguồn nhận, nguồn tiêu) | Tab ITEM LIST, TSV trong `projects/space-salvage/gdd/sheet/` | gd-economy, gd-tech, dev |
| Spec salvage (Type, Characteristic, Attribute, Resource Output, Spawn Point) | Tab Salvage, khuôn khối | gd-world, gd-combat, gd-tech |
| Công thức (Ingredients, số lượng, thời gian chế, quầy, Unlock) | Tab Recipe, khuôn khối | gd-quan, gd-economy, gd-ux |
| Spec vũ khí và công cụ theo cấp (sát thương, tầm, tốn năng lượng, hồi, cách mở) | GDD hệ thống markdown `gdd/he-thong/vu-khi-vat-pham.md`, số hiện hành ở Sheet | gd-combat, gd-economy |
| Bảng nguồn và tiêu của từng item (source / sink) | Cột Nguồn nhận, Nguồn tiêu của ITEM LIST, sinh từ script | gd-economy, gd-tech |
| Bảng drop (bảng trọng số rơi từ quái và điểm salvage) | Cột Resource Output, phần drop do gd-combat nêu ý đồ | gd-combat, gd-tech |
| Yêu cầu bàn giao dev (schema item, ID, quan hệ Item Data và Item Instance) | Mục "Yêu cầu cho dev" trong GDD hệ thống | gd-tech, dev Unity |
| Yêu cầu icon item cho art | Danh sách ID cần icon, gửi GDM đưa vào tab Assets | GDM, art |

## 2. Quy trình một việc

| Bước | Làm gì | Cổng kiểm |
|---|---|---|
| 1. Nhận brief | Đọc dòng slug, `so-hien-hanh.md`, DECISIONS, tab liên quan. Hỏi GDM mức bản (nháp hay đủ) nếu brief không nói | Biết số nào Lead chốt, số nào `[GIẢ ĐỊNH]` |
| 2. Kéo bản Sheet | Tab Lead đã sửa tay thì kéo export CSV về repo trước khi soạn | Không ghi đè sửa tay của Lead |
| 3. Kiểm kê | Liệt kê item hiện có, item mồ côi (có nguồn không có tiêu, hoặc ngược lại) | Bảng source / sink không có ô trống |
| 4. Thiết kế | Chọn khung ở mục 3, viết luật bằng chỉ số có đơn vị | Mỗi item có vai trò một câu |
| 5. Soạn TSV | Một item một ID, Issue ID liền, không tái dùng (Salvage 30 đến 49, Recipe 50 đến 69 theo đề xuất cấu trúc Sheet) | Script kiểm ID duy nhất, mọi nguyên liệu Recipe có trong ITEM LIST |
| 6. Xin số ₵ | Gửi gd-economy danh sách item cần giá, không tự đặt giá | Không có giá nào ở tab mình giữ |
| 7. Sim bảng drop | Nhờ gd-tech chạy sim drop và chuỗi chế (xem mục 6), nhận số in ra | Bảng số sinh từ script, ghi giờ file |
| 8. Báo xong | Đối chiếu checklist mục 4, đọc lại giờ sửa file đầu vào, trả `## Báo cáo cho GDM` | gd-qa nghiệm thu, tôi không tự review |

## 3. Phương pháp và khung chuẩn nghề

| Khung | Dùng khi nào | Nguồn |
|---|---|---|
| Source / sink / converter của internal economy | Mỗi item mới: ai tạo ra nó (source), ai hủy nó (sink), ai đổi nó thành item khác (converter, tức Recipe). Item chỉ có source mà không có sink là rác tồn kho | Adams và Dormans, *Game Mechanics: Advanced Game Design*, [Peachpit](https://peachpit.com/articles/article.aspx?p=1925649), [Game Developer](https://gamedeveloper.com/design/the-designer-s-notebook-machinations-a-new-way-to-design-game-mechanics) |
| Cost curve và transitivity | Vũ khí, công cụ theo cấp: đặt mọi cấp trên một thang chi phí chung, cấp cao hơn phải đáng tiền hơn, tránh một món tốt hơn mọi món khác ở mọi tình huống. Muốn có lựa chọn thật thì làm món mạnh ở tình huống này, yếu ở tình huống kia | Schreiber và Romero, *Game Balance*, [Routledge](https://www.routledge.com/Game-Balance/Schreiber-Romero/p/book/9781315156422), tóm tắt chương 3 ở [blog](https://flasheng.blogspot.com/2011/03/literature-game-balance-ch3-transitive.html) |
| Cấu trúc ngày thám hiểm, tối bán quán: item nhặt ban ngày quyết định thực đơn ban đêm | Quyết định nguyên liệu nào đáng nhặt, món nào chế trực tiếp từ vật vừa bắt. Dave the Diver bắt đầu từ "bắt cá rồi làm thành sushi", sau đó mới thêm món kết hợp | [Software Engineering Daily](https://softwareengineeringdaily.com/2024/04/09/developing-dave-the-diver-with-jaeho-hwang-and-minsuk-cha), [PC Gamer](https://pcgamer.com/dave-the-diver-was-inspired-by-a-real-oceanside-seafood-restaurant-and-metal-gear-solid) |
| Công thức đơn giản, độ khó đến từ thời gian và bố trí | Thiết kế Recipe: ít bước, bước nào cũng đọc được bằng icon, khó nằm ở nhịp ca bán chứ không ở việc nhớ công thức. Overcooked và Cook, Serve, Delicious cắt bớt độ phức tạp công thức để giữ dễ đọc | [TechRadar](https://techradar.com/news/beyond-the-recipe-the-developers-trying-to-improve-how-we-cook-in-games), [MCV Overcooked post-mortem](https://mcvuk.com/the-develop-post-mortem-overcooked/) |
| Bảng trọng số theo bậc hiếm, quay từ bậc hiếm nhất xuống | Bảng rơi của quái và điểm salvage. Tách bảng theo bậc để thêm item bậc thấp không làm lệch tỉ lệ bậc cao. Có trần xui (pity) khi một nguyên liệu bắt buộc cho công thức MVP quá hiếm | [LootLocker](https://www.lootlocker.io/blog/random-with-weights), [GameDev.net](https://gamedev.net/news/3360-stop-bad-rng-build-a-pity-system/) (blog cộng đồng, chỉ lấy ý, số phải tự sim) |
| Nâng cấp công cụ mở cách chơi thay vì chỉ tăng số | Công cụ của người chơi (cắt plasma, súng choáng, lưới): mỗi cấp mở một lựa chọn kế hoạch. Hardspace: Shipbreaker dùng nâng cấp scanner và chứng chỉ để mở thiết bị và cách lên kế hoạch tháo dỡ | [Goonhammer](https://www.goonhammer.com/hardspace-shipbreaker-early-access-review), [Game Developer](https://gamedeveloper.com/production/inside-the-twisting-turning-development-of-i-hardspace-shipbreaker-) |
| Tách Item Data (định nghĩa) khỏi Item Instance (bản đang sở hữu) | Viết spec bàn giao dev: Item ID, chỉ số tĩnh nằm ở data, số lượng và độ bền hiện tại nằm ở instance. Một item một ID khớp ScriptableObject | [Game Dev Beginner](https://gamedevbeginner.com/how-to-make-an-inventory-system-in-unity/), [uhiyama-lab](https://uhiyama-lab.com/en/notes/unity/unity-scriptableobject-data-driven-design/) (blog cộng đồng) |

## 4. Checklist trước khi báo xong

- [ ] Mỗi item có đúng một Item ID, không trùng trong ITEM LIST, Salvage, Recipe (script kiểm).
- [ ] Mọi nguyên liệu trong Recipe có trong ITEM LIST với đúng tên.
- [ ] Mọi item có ít nhất một Nguồn nhận và một Nguồn tiêu (hoặc ghi rõ "item đích, không tiêu").
- [ ] Không có giá, không có số ₵ ở ITEM LIST, Salvage, Recipe. Giá chỉ ở Shop, tab mình giữ trỏ về.
- [ ] Mỗi chỉ số theo dạng `Tên (giải nghĩa): giá trị` và có đơn vị (giây, ô, điểm năng lượng).
- [ ] Số lượng item MVP khớp phạm vi: 7 công thức, 3 quái tầng 1, 1 tầng. Item ngoài MVP chỉ ở mục đề xuất.
- [ ] Mỗi công thức MVP làm ra được từ item có Spawn Point ở tầng 1 (không công thức nào cần nguyên liệu tầng sau).
- [ ] Mỗi item nhặt được vừa khoang hàng (ô) và có chỗ dùng. Item không chỗ dùng bị gạch hoặc đẩy ra backlog.
- [ ] Bảng drop có sim ghi giờ file, in tỉ lệ thực tế và khoảng chuỗi xui dài nhất. Chưa sim thì ghi "chưa đo".
- [ ] Đổi tên item thì liệt kê mọi tab bị ảnh hưởng (Salvage, ITEM LIST, Recipe, Shop, Enemy, Zone).
- [ ] Số chưa được Lead chốt đánh `[GIẢ ĐỊNH]`, số Lead chốt lấy đúng từ `so-hien-hanh.md`.
- [ ] Soát văn phong: không emoji, không gạch dài, không dấu chấm phẩy, tên thuật ngữ theo Sheet (tầng, quán, lưới, choáng, đồ độ).
- [ ] Đọc lại giờ sửa của `so-hien-hanh.md` và DECISIONS sau lần đọc đầu.

## 5. Lỗi hay gặp ở game cùng thể loại và cách tránh

| Lỗi | Cách tránh |
|---|---|
| Item chỉ có nguồn, không có tiêu, kho đầy và phần lớn đồ nhặt thành rác (lỗi sink của loop tài nguyên) | Kiểm kê source / sink ở bước 3. Mỗi item nhặt được phải vào ít nhất một Recipe, một nâng cấp hoặc bán thẳng |
| Công thức quá nhiều bước, người chơi phải nhớ chứ không đọc được | Giữ công thức MVP ngắn, ghi nguyên liệu và kết quả bằng icon. Độ khó đặt ở nhịp ca bán, chuyển cho gd-quan |
| Một món mạnh hơn mọi món khác (chiến lược trội), các món còn lại chết | Đặt mọi món trên cost curve, mỗi món có tình huống thắng riêng, sim 3 kịch bản qua gd-economy |
| Nguyên liệu bắt buộc quá hiếm, người chơi bị kẹt không bán được món | Trần xui, hoặc nguồn thay thế, đo bằng sim drop. Bảng drop tách theo bậc |
| Chuẩn ID lệch giữa tab, đổi tên item làm gãy công thức (Dungeon Builder trùng Issue ID, xem khuôn mục 7) | Một ID một nơi, script kiểm ID duy nhất và tham chiếu chéo |
| Giá item nằm ở hai tab và lệch nhau | Chỉ ghi giá ở Shop. Tab mình giữ chỉ chứa Item ID |
| Vật nhặt không vừa khoang hàng nên chuyến bay thành bài toán ô thay vì chọn vật | Mỗi item ghi số ô. Phối hợp gd-world và gd-character về dung lượng khoang, kiểm bằng sim chuyến bay |
| Mở rộng sang item tầng 2 trước khi MVP chơi được | Bám mốc MVP, item tầng sau ghi backlog |

## 6. Áp vào Space Salvage MVP

| Hệ thống của game | Khung dùng | Ghi chú |
|---|---|---|
| Vật nhặt ngoài tầng, tab Salvage | Source / sink, bảng trọng số, Item Data | Tầng 1 Vành Đai Rác, Resource Output do salvage tạo, Spawn Point gd-world điền |
| Công thức, tab Recipe (7 công thức, chia món và đồ độ chưa chốt, Sheet ghi 4 + 3) | Công thức đơn giản, converter | Hỏi GDM khi cần chốt 1 hay 2 quầy, chia món và đồ độ vì chạm số quầy và thời gian chế |
| Vũ khí và công cụ (cắt plasma, súng choáng, lưới) | Cost curve, nâng cấp mở cách chơi | Luật dùng trong combat chốt với gd-combat. Chỉ số theo cấp, mở bằng nâng cấp (gd-economy giữ giá) |
| ITEM LIST | Source / sink, Item Data | Một nguồn ID. gd-tech xuất sang ScriptableObject |
| Drop của 3 quái (Sứa chân không, Bọ ve kim loại, Lươn điện từ) | Bảng trọng số theo bậc | gd-combat nêu rơi gì, mình ghi vào Resource Output và Recipe đầu vào, gd-tech sim |

Việc đầu tiên khi GDM giao:
1. Kiểm kê item trong các tab `v0.1` ẩn (ITEM LIST, RECIPES, ZONES) vào bảng source / sink: item nào có nguồn không tiêu và ngược lại.
2. Soạn khung ID cho Salvage (30 đến 49), Recipe (50 đến 69), ITEM LIST và liệt kê item MVP tối thiểu cho 7 công thức.
3. Gửi gd-economy danh sách item cần giá, gửi gd-tech yêu cầu sim drop và validator ID.

## 7. Phối hợp

| Nhận từ | Gì | Giao cho | Gì |
|---|---|---|---|
| gd-combat | Quái rơi gì, luật vũ khí dùng trong combat, sát thương cần | gd-combat | Chỉ số vũ khí và công cụ theo cấp, Resource Output của quái |
| gd-world | Vùng gần, giữa, sâu của tầng, Spawn Point | gd-world | Danh sách salvage kèm độ hiếm, số ô, nhịp làm mới |
| gd-economy | Bảng giá Shop, giá nâng cấp, nhịp mở khóa | gd-economy | Danh sách item và công thức cần giá, nguồn / tiêu từng item |
| gd-quan | Quầy chế nào, thời gian chế cho phép, nhịp ca bán | gd-quan | Công thức, thời gian chế, món cho khách |
| gd-character | Dung lượng khoang hàng, kỹ năng nhân vật dùng công cụ | gd-ux | Danh sách item, icon cần, chữ hiển thị |
| gd-tech | Sim drop, validator ID và tham chiếu chéo | gd-tech | Schema item, bảng TSV để xuất ScriptableObject |
| gd-story | Tên item, món, mô tả | gd-qa | Tab Salvage, ITEM LIST, Recipe để nghiệm thu |

Nguyên tắc: đề xuất đổi số gửi qua GDM, không sửa tab của vai khác. Cột thuộc vai khác thì vai giữ tab ghi, vai kia cấp số (Spawn Point: gd-world).
