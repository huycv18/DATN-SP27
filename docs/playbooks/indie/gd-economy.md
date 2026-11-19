# Playbook indie - gd-economy (Economy và tiến độ)

Viết 2026-11-19 cho team game indie PC, áp thẳng vào Space Salvage. Thay `docs/playbooks/gd-economy.md` (bản Puzzle mobile: bỏ booster, revive, ads, liveops, A/B, remote config). Phương pháp giữ lại từ bản cũ: số do sim in, `economy_doc.py kiem`, dải nhạy cho tham số hành vi, bất biến kiểm bằng máy.

## 1. Vai và đầu ra chuẩn nghề

Economy designer ở team indie giữ một việc: mỗi ₵ người chơi kiếm và tiêu có lý do, và nhịp mở khóa khớp với thời gian chơi dự kiến.

| Đầu ra | Dạng | Ai dùng |
|---|---|---|
| Bản đồ value chain và bảng source / sink | `projects/<slug>/gdd/he-thong/economy.md` | Mọi vai, gd-qa |
| Bảng giá duy nhất (nhiên liệu, nguyên liệu, món, đồ độ, giá thu mua) | Tab Shop, TSV ở `gdd/sheet/shop.tsv` | gd-items, gd-quan, gd-ux, dev |
| Nâng cấp theo bậc (giá, hiệu ứng, mở khả năng gì) | Tab Upgrade | gd-character, gd-world, gd-ux, dev |
| Thu chi theo ngày, Surplus sinh bằng sim | Tab ECONOMIC | Lead, GDM, gd-qa |
| Nhịp mở khóa theo ngày (học gì, mở gì, mốc tầng) | Tab PROCESSING | GDM (tab Day), gd-world, gd-ux |
| Tham số và sim 3 kịch bản tệ / trung bình / tốt | `projects/<slug>/sim/economy/tham-so.json`, sim in bảng | gd-tech (ScriptableObject), gd-qa |
| Lịch sử đổi số | Tab Balance Sheet (cũ, kết quả thử, mới, quyết định) | gd-qa, Lead |

Số hiện hành chỉ nằm ở tab spec (Shop, Upgrade). Balance Sheet không giữ số hiện hành.

## 2. Quy trình một việc

| Bước | Việc | Cổng kiểm |
|---|---|---|
| 1 | Đọc brief, slug, hỏi mức bản (nháp nhanh hay bản đủ) nếu brief không nói | Biết đầu ra, tab đích, hạn |
| 2 | Kéo tab mình giữ về repo (`/gdd-sheet-sync doi-chieu`), đọc `so-hien-hanh.md`, DECISIONS | Bản repo khớp Sheet, Lead không sửa tay gì chưa kéo |
| 3 | Vẽ value chain: từ vật nhặt ngoài không gian tới mốc nâng cấp. Lập bảng source / sink có lý do | Không có mắt xích đứt, mỗi sink có một câu lý do |
| 4 | Đặt công thức giá (cost curve) cho món, đồ độ, nhiên liệu, nâng cấp. Ghi hệ số vào `tham-so.json` | Không còn số gõ tay ngoài `tham-so.json` |
| 5 | Viết hoặc cập nhật sim economy, chạy 3 kịch bản và dải nhạy. Sim hành vi (chuyến bay, hàng đợi khách) đặt đề cho gd-tech | Sim chạy lại từ trạng thái sạch ra cùng số |
| 6 | Viết bất biến và cách kiểm bằng máy (sim, validator, grep) | Mỗi bất biến có lệnh kiểm, không mâu thuẫn bảng kịch bản |
| 7 | `economy_doc.py ghi` rồi `kiem`, soạn TSV tab, ghi dòng Balance Sheet nếu đổi số | `kiem` 0 lỗi, `soat.mjs` sạch |
| 8 | Gửi gd-qa chấm, báo GDM bằng khối `## Báo cáo cho GDM` | gd-qa ĐẠT hoặc có danh sách sửa |

## 3. Phương pháp và khung chuẩn nghề

| Khung | Dùng khi | Nguồn |
|---|---|---|
| Value chain (chuỗi giá trị có điểm neo) | Dựng hoặc soát toàn bộ economy: mỗi tài nguyên có giá trị vì mắt xích sau nó, chuỗi kết ở một điểm neo nhu cầu (năng lực, tự chủ). Sink hơi lớn hơn source để chuỗi luôn căng | Daniel Cook, "Value chains - A method for creating and balancing faucet-and-drain game economies", Lostgarden 2021, https://lostgarden.com/2021/12/12/value-chains/ |
| Faucet / drain / converter | Vẽ dòng ₵ và vật phẩm: nguồn tạo, bộ chuyển (quán chế món), nơi mất. Dùng trước khi viết sim để biết sim cần mô hình hóa gì | Ernest Adams, Joris Dormans, "Game Mechanics: Advanced Game Design", New Riders 2012. Công cụ Machinations, https://machinations.io |
| Cost curve (đường chi phí) | Đặt giá 7 công thức và các bậc nâng cấp: quy mọi lợi ích về một đơn vị chi phí, so lợi ích trên chi phí để tìm món trội | Ian Schreiber, Brenda Romero, "Game Balance", CRC Press 2021, chương "Transitive Mechanics and Cost Curves" |
| Giá tăng mũ, lợi ích tăng tuyến tính | Giá nâng cấp theo bậc: giá bậc sau bằng giá gốc nhân hệ số mũ số bậc, để thu nhập tăng mà thời gian chờ mỗi bậc không sụp | Anthony Pecorella, "The Math of Idle Games" phần I đến III, Kongregate / Game Developer 2016, https://www.gamedeveloper.com/design/the-math-of-idle-games-part-i |
| 3 kịch bản và dải nhạy | Mọi khẳng định thu nhập: chạy tệ / trung bình / tốt, tham số hành vi chạy cận dưới và cận trên, nói mốc dịch bao nhiêu ngày | Phương pháp phòng, `docs/process/templates/economy-sim/README.md` |
| Số do máy đưa vào doc | Mọi bảng số trong doc và TSV: tham số ở `tham-so.json`, sim `--ra`, `economy_doc.py ghi` rồi `kiem` | Phương pháp phòng, lỗi E1 E6 ở game trước |
| Một bảng giá duy nhất | Mọi giá: chỉ ở Shop, Recipe và ITEM LIST trỏ về, validator của gd-tech so | `docs/process/templates/gdd-sheet-khuon-indie.md` mục 7 |

## 4. Checklist trước khi báo xong

- [ ] Mọi giá ₵ chỉ xuất hiện ở tab Shop hoặc Upgrade, tab khác trỏ về (grep TSV của Recipe, ITEM LIST không có cột giá riêng).
- [ ] Bảng source / sink có đủ: bán món, bán đồ độ, tip / nhiên liệu, nguyên liệu shop, nâng cấp, phí cứu hộ, nợ. Mỗi dòng một câu lý do.
- [ ] Value chain không đứt: mọi vật nhặt có ít nhất một đầu ra ở quán, mọi công thức cần ít nhất một vật chỉ có ngoài không gian.
- [ ] Giá có công thức trong `tham-so.json`, không có số gõ tay trong doc (`economy_doc.py kiem` 0 lỗi).
- [ ] Bảng 7 công thức có cột lãi trên một ô khoang và lãi trên một phút chế. Món cao nhất không vượt món thứ hai quá ngưỡng đã ghi, hoặc có chi phí bù viết ra.
- [ ] Sim 3 kịch bản in Surplus từng ngày, ECONOMIC dán từ output cùng lần chạy, ghi giờ file.
- [ ] Kịch bản tệ: cuối ngày vẫn đủ ₵ mua nhiên liệu chuyến tối thiểu hôm sau (không kẹt vòng phí cứu hộ và nợ).
- [ ] Mỗi bậc nâng cấp ghi rõ "mở khả năng" hay "chỉ là số". Có ít nhất một bậc mở khả năng trong phạm vi MVP.
- [ ] Số ngày để mua mỗi bậc nâng cấp in từ sim cho cả 3 kịch bản.
- [ ] Tham số hành vi (tỉ lệ bắt được, số khách mỗi ca, tỉ lệ tip) đánh `[GIẢ ĐỊNH]` và có dải nhạy.
- [ ] Số chưa có trong `so-hien-hanh.md` đánh `[GIẢ ĐỊNH]`. Số Lead đổi thì số cũ vào `cam`.
- [ ] Đổi số thì có dòng Balance Sheet (cũ, kết quả thử, mới, quyết định).
- [ ] Không có tiền tệ thứ hai, XP, ads, IAP. Không đổi luật để chỉnh economy.
- [ ] `node .claude/skills/gdd-v1/scripts/soat.mjs <file>` sạch, đọc lại giờ sửa `so-hien-hanh.md` và DECISIONS ngay trước khi báo.

## 5. Lỗi hay gặp ở game cùng thể loại và cách tránh

| Lỗi | Thể loại | Cách tránh |
|---|---|---|
| Giá ẩn, người chơi phải đoán hoặc tra guide ngoài game mới định giá được. Moonlighter bản đầu bị phàn nàn đúng chỗ này, bản 2 chuyển sang hệ số theo độ hiếm (GamesRadar, https://www.gamesradar.com/games/roguelike/moonlighter-2s-shop-system-solves-the-age-old-rpg-issue-of-your-bag-being-filled-with-useless-tat) | Quản lý quán | Giá theo công thức đọc được (nguyên liệu, độ hiếm, công chế), giao gd-ux hiện giá và phản ứng khách |
| Một món trội làm các công thức khác thừa | Quản lý quán, chế tạo | Cost curve và bảng lãi trên ô khoang, lãi trên phút cho cả 7 công thức |
| Vòng xoáy thua: hết năng lượng, mất phí cứu hộ, nợ, không đủ nhiên liệu, chuyến sau càng tệ | Roguelite nhẹ, action exploration | Bất biến sàn: kịch bản tệ vẫn mua được chuyến tối thiểu. Trần nợ và cách trả nợ đặt bằng số, luật nợ hỏi GDM |
| Tràn tiền giữa game: thu nhập tăng theo nâng cấp, sink cố định nên ₵ mất nghĩa | Mọi game có tiến độ | Giá nâng cấp tăng mũ theo bậc, sink hơi lớn hơn source (Cook). Sim nhiều ngày ở kịch bản tốt |
| Nâng cấp chỉ cộng số, người chơi không thấy khác | Action exploration | Xen bậc mở khả năng (bay xa hơn, khoang lớn hơn, lưới bắt loài lớn hơn) giữa các bậc số. Cấu trúc tham chiếu: tiền nâng thiết bị để lặn sâu hơn, lâu hơn, chở nhiều hơn (Dave the Diver, https://en.wikipedia.org/wiki/Dave_the_Diver) |
| Hai nửa không nối: quán mua đủ nguyên liệu ở shop nên không cần bay, hoặc bay nhặt nhiều mà quán không tiêu hết | Thám hiểm + quán | Nguyên liệu shop chỉ là phụ, mỗi công thức cần vật ngoài không gian. Sim so lượng nhặt một chuyến với sức bán một ca |
| Số ghi ở hai nơi lệch nhau, Surplus chép nhầm | Mọi GDD Sheet | Một bảng giá ở Shop, Surplus do sim, validator gd-tech (khuôn Sheet mục 7) |
| Thiết kế economy dài hạn trước khi loop một ngày vui | Indie nhỏ | Bám MVP: chỉ cân ngày 1 và nhịp mua bậc nâng cấp đầu. Ngày 2 trở đi là phụ lục `[GIẢ ĐỊNH]` |

## 6. Áp vào Space Salvage MVP

| Hệ thống | Khung dùng | Câu economy phải trả lời |
|---|---|---|
| Nhiên liệu tàu (mua ở bến, trừ mỗi lần phóng theo tầng) | Faucet / drain, 3 kịch bản | Một chuyến lãi ròng bao nhiêu sau nhiên liệu và kỳ vọng phí cứu hộ |
| Năng lượng bộ đồ về 0, drone cứu hộ, phí, nợ | Bất biến sàn, dải nhạy | Phí bao nhiêu để mất năng lượng đau mà không kẹt vòng xoáy |
| Khoang hàng giới hạn ô | Cost curve theo ô | ₵ kỳ vọng trên một ô của từng vật nhặt và sinh vật, lựa chọn bỏ gì có ý nghĩa |
| 7 công thức (chia món / đồ độ chưa chốt) | Cost curve, value chain | Giá theo nguyên liệu, độ hiếm, công chế. Không món trội |
| 2 loài khách, tip | Value chain (điểm neo ở quán) | Giá chịu trả và tip theo loài, số liệu khách mỗi ca từ gd-quan |
| Nâng cấp | Giá tăng mũ, mở khả năng | Bậc 1 mua được sau bao nhiêu ngày ở 3 kịch bản |
| PROCESSING | Nhịp mở khóa | Ngày 1 người chơi học gì, mở gì, mua gì đầu tiên |

Việc đầu tiên khi GDM giao (đợt chuyển nội dung Sheet):
1. Kéo `v0.1 ECONOMIC`, `v0.1 SHOP`, `v0.1 UPGRADES` về `gdd/sheet/`, đánh dấu mọi số "Đề xuất - chưa chốt" là `[GIẢ ĐỊNH]`. Không dùng mục "MÔ PHỎNG LỢI NHUẬN MỘT NGÀY" làm số chốt.
2. Chuyển sang cột tab mới Shop, Upgrade, ECONOMIC theo khuôn, giá chỉ ở Shop.
3. Lập value chain và bảng source / sink từ nội dung đó, liệt kê mắt xích đứt và số không có công thức.
4. Tạo `sim/economy/tham-so.json` từ mẫu `economy-sim`, đặt đề gd-tech cho sim hành vi một chuyến bay và một ca bán.
5. Hỏi GDM một câu nếu chặn: bậc nâng cấp đầu phải mua được cuối ngày 1 (MVP chơi trọn 1 ngày) hay sau vài ngày.

## 7. Phối hợp

| Nhận từ | Thứ nhận |
|---|---|
| GDM | Cấu trúc một ngày (tab Day), `so-hien-hanh.md`, câu trả lời của Lead |
| gd-items | Danh sách vật phẩm, công thức, độ hiếm, nguồn nhận, nguồn tiêu (Salvage, ITEM LIST, Recipe) |
| gd-world | Sản lượng salvage một chuyến, quãng bay, năng lượng tiêu theo tầng |
| gd-combat | Độ khó bắt hoặc hạ từng quái, dùng làm hệ số rủi ro trong giá |
| gd-quan | Số khách mỗi ca, kiên nhẫn, luật tip, sức bán một ca |
| gd-character | Hồ sơ loài khách (khẩu vị, sức chi), hiệu ứng nâng cấp lên nhân vật |
| gd-tech | Output sim hành vi, validator giá chéo tab |

| Giao cho | Thứ giao |
|---|---|
| gd-items | Giá ở Shop để Recipe, ITEM LIST trỏ về |
| gd-quan | Giá chịu trả và tip theo loài khách |
| gd-ux | Giá, HUD ₵, màn shop, màn nâng cấp, màn phí cứu hộ và nợ |
| gd-tech | `tham-so.json` cho ScriptableObject, đề sim, event economy cho Event Tracking |
| gd-world, gd-character | Hiệu ứng từng bậc nâng cấp (tầm bay, khoang, lưới) để khớp luật |
| gd-qa | Doc economy, TSV tab, Balance Sheet để chấm và kiểm chéo |
| GDM | PROCESSING (mốc mở theo ngày cho tab Day), câu hỏi cần Lead chốt |
