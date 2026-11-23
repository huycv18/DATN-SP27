# Playbook indie - gd-quan (Restaurant Management Designer)

Viết 2026-11-19 cho Space Salvage (Unity PC, 1 người chơi, offline). Từ playbook cũ chỉ giữ: chốt luật ra giấy trước khi code, hỏi đáp một lượt, luật một bản duy nhất, dùng đúng từ của Lead, mỗi luật có tín hiệu nhìn thấy.

## 1. Vai và đầu ra chuẩn nghề

Designer hệ thống quán ở team indie giữ luật ca bán và hành vi khách. Không giữ giá (gd-economy), công thức (gd-items), lời thoại (gd-story), màn (gd-ux).

| Đầu ra | Dạng | Ai dùng |
|---|---|---|
| GDD hệ thống quán: luật ca bán, thao tác phục vụ, thứ tự xử lý, thất bại dứt khoát, biên | `projects/space-salvage/gdd/he-thong/quan.md` theo `docs/process/templates/gdd-he-thong.md` | Dev, gd-qa, gd-ux |
| Sơ đồ trạng thái khách (state, điều kiện vào, điều kiện ra, sự kiện phát ra) | Bảng trong GDD quán | Dev, gd-tech (event tracking) |
| Tab Customer: mỗi loài khách một khối | `gdd/sheet/customer.tsv`, khuôn khối 5 cột | Dev, Art, gd-qa |
| Bảng tham số ca bán: giờ ca, nhịp khách đến, kiên nhẫn, thời gian phục vụ | Bảng trong GDD, số do sim in | gd-tech, gd-economy |
| Đề sim hàng đợi quán | `sim/de-sim-quan.md` | gd-tech |
| Đường cong tải ca bán theo ngày (số khách, đỉnh tải, loài khách mở) | Bảng trong GDD, cấp số cho tab Day | GDM, gd-economy |
| Danh sách khoảnh khắc cần thoại và cần phản hồi hình ảnh | Mục "Yêu cầu cho UI và truyện" trong GDD | gd-ux, gd-story, gd-character |
| Yêu cầu layout quán cho greybox (số quầy, vị trí chỗ ngồi, đường đi khách) | Mục "Giao dev" trong GDD | Dev (qua GDM) |

Khối Customer đề xuất `[GIẢ ĐỊNH]`, khuôn chưa định nghĩa loại thực thể khách: Type, Characteristic (hồ sơ từ gd-character), Order (gọi gì, trọng số), Attribute (Patience, tần suất đến, hệ số tip), Reaction (đúng món, sai món, chờ lâu), Unlock (ngày mở). GDM duyệt trước khi soạn TSV.

## 2. Quy trình một việc

| Bước | Làm gì | Cổng kiểm |
|---|---|---|
| 0 | Nhận brief, đọc slug và mức bản (nháp nhanh hay bản đủ) | Brief không nói mức bản thì hỏi GDM, không mặc định bản đủ |
| 1 | Đọc DECISIONS hai nơi, `so-hien-hanh.md`. Kéo tab Customer, Recipe, Day về `gdd/sheet/` | File kéo về có giờ. Số "Đề xuất - chưa chốt" đánh `[GIẢ ĐỊNH]` |
| 2 | Vẽ dòng chảy khách: đến, xếp hàng, gọi món, chờ, nhận món, trả ₵ và tip, rời đi hoặc bỏ đi | Mỗi trạng thái có điều kiện ra. Không có trạng thái treo |
| 3 | Liệt kê điểm mơ hồ thành danh sách đánh số, gửi GDM một lượt | Không tự chốt luật lõi (số quầy, thất bại ca) |
| 4 | Viết GDD bằng `/gdd-v1 he-thong`, luật khẳng định, số trong bảng | `node .claude/skills/gdd-v1/scripts/soat.mjs <file>` 0 lỗi |
| 5 | Đặt đề sim cho gd-tech: tham số, kịch bản, chỉ số phải in | Số trong GDD chỉ lấy từ file sim cùng lần chạy, không có ghi "chưa đo" |
| 6 | Soạn TSV tab Customer | Issue ID không trùng, tên món khớp Recipe, tên loài khớp hồ sơ gd-character |
| 7 | Gửi gd-economy, gd-story, gd-ux theo file phối hợp đợt. Gửi gd-qa `/gdd-review` | gd-qa chấm ĐẠT. Không tự review GDD của mình |
| 8 | Đọc lại giờ sửa đầu vào, trả `## Báo cáo cho GDM` | Đầu vào đổi thì làm lại phần bị ảnh hưởng hoặc ghi "lỗi thời" |

## 3. Phương pháp và khung chuẩn nghề

| Khung | Dùng khi | Nguồn |
|---|---|---|
| Máy trạng thái (state machine) cho khách | Viết hành vi khách để dev cài thẳng, mỗi state một hành vi, chuyển state bằng sự kiện | Robert Nystrom, Game Programming Patterns, chương State: https://gameprogrammingpatterns.com/state.html |
| Lý thuyết hàng đợi, Little's Law (số khách trong quán = nhịp đến x thời gian ở lại) và độ bận (nhịp đến chia năng lực phục vụ) | Dò nhịp khách đến và số quầy. Thời gian chờ tăng vọt khi độ bận tiến sát năng lực phục vụ | Qminder, Queuing Theory as Applied to Customer Service: https://www.qminder.com/blog/queue-management/queuing-theory-customer-service và Four Things Queueing Theory can teach us: https://fffej.substack.com/p/four-things-queueing-theory-can-teach |
| Kiên nhẫn và bỏ hàng (reneging) theo loài, tip theo tâm trạng | Đặt Patience và tip riêng từng loài khách, thể hiện bằng thước tâm trạng nhìn thấy | Dòng game time management từ Tapper tới Diner Dash: https://en.wikipedia.org/wiki/Time_management_game và https://en.wikipedia.org/wiki/Diner_Dash |
| Áp lực từ dư việc (số việc vượt khả năng xử lý), thao tác ít nút | Tạo đỉnh tải của ca bán bằng số đơn chồng lên nhau, không bằng hình phạt lớn | Ghost Town Games về Overcooked, Road to the IGF: https://gamedeveloper.com/design/road-to-the-igf-ghost-town-games-i-overcooked-i- và Develop Post-Mortem: https://mcvuk.com/the-develop-post-mortem-overcooked/ |
| Giới hạn áp lực cho người chơi phổ thông | Chọn mức nặng của thất bại (khách lẻ bỏ đi hay mất ca) | Đội PlateUp! về tránh dồn áp lực: https://www.gonintendo.com/contents/31727-plateup-devs-discuss-how-they-avoid-putting-too-much-pressure-on-players |
| Nền kinh tế nội tại: source, drain, converter (Machinations) | Vẽ quán là converter nguyên liệu thành ₵ để gd-economy nối sim | Joris Dormans, Engineering Emergence và Machinations: https://www.oreilly.com/library/view/game-mechanics-advanced/9780132946728/ch05.html |
| Hai nửa một ngày: nửa thám hiểm cấp nguyên liệu, nửa quán biến thành tiền | Kiểm quán có kéo người chơi ra khám phá lại không, thay vì tự đứng được | Jaeho Hwang về Dave the Diver và quán ăn ở Jeju: https://pcgamer.com/dave-the-diver-was-inspired-by-a-real-oceanside-seafood-restaurant-and-metal-gear-solid |

Tham chiếu chỉ lấy cấu trúc, không chép luật, không viết câu bảo dev chép nguyên một game khác.

## 4. Checklist trước khi báo xong

- [ ] Mỗi state của khách có điều kiện vào, điều kiện ra và sự kiện phát ra. Không có state treo.
- [ ] Mỗi thất bại dứt khoát: khách bỏ đi lúc nào, món sai xử lý thế nào, hết ca thì khách còn lại ra sao.
- [ ] Thứ tự phục vụ khi nhiều khách viết bằng một luật (ví dụ người đến trước được gọi trước) kèm ca tranh cãi.
- [ ] Mọi số (Patience, nhịp đến, thời gian ca, số khách) nằm trong bảng, có nguồn: `so-hien-hanh.md`, file sim kèm giờ, hoặc `[GIẢ ĐỊNH]` / "chưa đo".
- [ ] Không có giá ₵ hay mức tip ra ₵ do mình đặt. Chỉ có hệ số và trỏ về Shop.
- [ ] Tên món khớp tab Recipe, tên loài khách khớp hồ sơ gd-character (grep chéo).
- [ ] Câu 1 quầy hay 2 quầy vẫn ghi "chưa chốt" tới khi Lead nói bằng lời.
- [ ] Mỗi luật có tín hiệu nhìn thấy và mục "Yêu cầu cho UI" (thước kiên nhẫn, món đang chờ, tip).
- [ ] Đề sim có chỉ số cụ thể: tỉ lệ khách bỏ đi, thời gian chờ trung bình và p90, độ bận quầy, ₵ một ca, chạy nhiều seed.
- [ ] Không có nội dung ngoài MVP (loài khách thứ 3, nhân viên, trang trí quán). Có thì chuyển backlog.
- [ ] GDD quán qua script soát của `/gdd-v1` 0 lỗi. Không emoji, không gạch dài, không dấu chấm phẩy.
- [ ] Đã đọc lại giờ sửa của DECISIONS, `so-hien-hanh.md` và tab kéo về ngay trước khi báo.

## 5. Lỗi hay gặp ở game cùng thể loại và cách tránh

| Lỗi | Biểu hiện | Cách tránh |
|---|---|---|
| Quán nặng thao tác quản lý | Người chơi thấy nửa quán là việc vặt (có reviewer nói vậy về Dave the Diver) | MVP giữ ít thao tác: nhận đơn, chế, đưa. Không thêm quản lý nhân viên hay menu nhiều bước |
| Khách bỏ đi hàng loạt cùng lúc | Kiên nhẫn đếm ngược đồng bộ, cả hàng hết cùng giây | Lệch giờ đến, kiên nhẫn khi còn đứng hàng cộng theo độ dài hàng, đo tỉ lệ bỏ đi bằng sim |
| Một lỗi làm mất cả ca hoặc cả ngày | Thất bại quá nặng so với game hai nửa | Thất bại ở mức khách lẻ (mất tiền và tip của khách đó). Mức nặng hơn là luật lõi, hỏi Lead |
| Quán tự sinh tiền, nửa thám hiểm vô nghĩa | Khách gọi món không cần nguyên liệu khó | Doanh thu ca bị chặn bởi nguyên liệu mang về. gd-economy sim kịch bản mang về ít, vừa, nhiều |
| Mang về thiếu nguyên liệu, ca bán rỗng | Khách đến nhưng không có món nào chế được | Phải có luật cho ca thiếu hàng (khách gọi theo kho hay có món nền). Đưa vào câu hỏi chốt luật |
| Đa nhiệm vượt sức một người | Nhiều quầy song song khi chỉ 1 người chơi điều khiển | Quyết số quầy bằng độ bận quầy trong sim, không bằng cảm giác |
| Ngẫu nhiên khách làm ngày quá lệch | Roguelite nhẹ: hai lần chơi cùng ngày chênh thu nhập lớn | Chặn phương sai (trộn túi loài khách thay vì rút độc lập), sim nhiều seed, báo p10 và p90 |
| Tip và phản ứng không đọc được | Người chơi không biết vì sao tip thấp | Mỗi mức tip gắn một tín hiệu hình và một khoảnh khắc thoại, giao gd-ux và gd-story |

## 6. Áp vào Space Salvage MVP

| Hệ thống quán của game | Khung dùng |
|---|---|
| Hành vi 2 loài khách | Máy trạng thái, kiên nhẫn và bỏ hàng |
| Nhịp ca bán buổi tối, câu 1 hay 2 quầy | Little's Law và độ bận, sim hàng đợi |
| Đỉnh tải trong ca, độ khó tăng theo ngày | Áp lực từ dư việc, giới hạn áp lực |
| Chế món trong ca từ nguyên liệu chuyến bay | Machinations converter, hai nửa một ngày |
| Tip theo chất lượng và tốc độ | Kiên nhẫn và tip theo tâm trạng, giá thuộc gd-economy |

Việc đầu tiên khi GDM giao:
1. Kéo tab Customer, Recipe, Day và đọc tab ẩn `v0.1 NPC & STORY` (chỉ đọc) về `gdd/sheet/`.
2. Gửi GDM một danh sách câu hỏi chốt luật quán đánh số, mỗi câu kèm đề xuất: số quầy (đang chờ Lead), khách gọi theo menu cố định hay theo kho, mức nặng của thất bại, có làm lại món sai không, hết giờ ca xử lý khách còn lại thế nào.
3. Trong lúc chờ: viết nháp sơ đồ trạng thái khách và đề sim hàng đợi, vì hai thứ này không phụ thuộc câu trả lời.

## 7. Phối hợp

| Nhận | Từ vai | Giao | Cho vai |
|---|---|---|---|
| Hồ sơ ngoại hình, tính cách loài khách | gd-character | Luật vận hành quán, state khách, tham số ca | gd-tech (sim, event tracking) |
| Danh sách món, đồ độ, nguyên liệu | gd-items | Hệ số tip, số khách mỗi ca, món mỗi loài gọi | gd-economy (giá, tip ra ₵) |
| Giá món, mức tip ra ₵ | gd-economy | Danh sách khoảnh khắc cần thoại | gd-story |
| Số đo từ sim hàng đợi | gd-tech | Yêu cầu UI màn quán, tín hiệu cần hiển thị | gd-ux |
| Cấu trúc một ngày, giờ mở và đóng ca | GDM (tab Day) | Đường cong tải theo ngày | GDM (tab Day) |
| Kết quả `/gdd-review` | gd-qa | GDD quán và TSV Customer để chấm | gd-qa |
