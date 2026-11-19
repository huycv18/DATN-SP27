# Kiến thức nền: management sim và vận hành quán

Viết 2026-11-19 bởi gd-quan cho kho `docs/knowledge/indie/`. Cách làm việc của vai ở `docs/playbooks/indie/gd-quan.md`, file này chỉ là kiến thức nền. Mã nguồn [Sx] trỏ về mục 6. Mọi link đã thấy trong kết quả tìm web ngày 2026-11-19.

## 1. Khái niệm lõi và thuật ngữ

| Thuật ngữ | Định nghĩa một dòng |
|---|---|
| Time management game | Dòng game phục vụ khách trước khi họ hết kiên nhẫn, gốc từ Tapper (1983), định hình bởi Diner Dash [S1] [S2] |
| Arrival rate (λ) | Số khách đến trong một đơn vị thời gian của ca |
| Service rate (μ) | Số khách một quầy phục vụ xong trong một đơn vị thời gian, nghịch đảo của thời gian phục vụ |
| Utilization (ρ) | Độ bận quầy, ρ = λ / μ. ρ ≥ 1 thì hàng dài vô hạn [S3] |
| Little's Law | Số khách trong quán = nhịp đến x thời gian ở lại (L = λW), đúng với mọi hệ ổn định [S4] [S5] |
| Queue | Hàng chờ trước quầy hoặc chỗ ngồi chờ món |
| Patience | Thời gian khách chịu chờ trước khi bỏ đi, thường hiện bằng thước hoặc tim [S2] |
| Reneging | Khách đã vào hàng rồi bỏ đi vì chờ quá lâu [S6] |
| Balking | Khách thấy hàng dài nên không vào hàng |
| Mood | Tâm trạng khách lúc nhận món, quyết định tip |
| Tip | Tiền thưởng ngoài giá món, theo tốc độ và chất lượng phục vụ [S2] |
| Rush hour | Khung giờ khách đến dồn dập trong ca, đỉnh tải [S7] |
| Holding station | Chỗ giữ món làm sẵn trước giờ cao điểm, thưởng cho người lập kế hoạch [S7] [S8] |
| Order | Yêu cầu món của một khách, có thể có điều kiện riêng [S9] |
| Reputation / rating | Chỉ số tiến trình của quán, quyết định lượng khách hoặc loại khách [S9] [S10] |
| Source, drain, converter | Ba khối của nền kinh tế nội tại (Machinations): nơi sinh, nơi tiêu, nơi đổi tài nguyên [S11] |
| Task overload | Số việc vượt khả năng xử lý cùng lúc, nguồn áp lực chính của game bếp [S12] |

## 2. Nguyên lý

**N1. Áp lực đến từ dư việc, không đến từ hình phạt.** Ghost Town Games mô tả lõi Overcooked là có nhiều việc hơn số người đang làm, cộng các chi tiết gây hoảng. Thao tác giữ rất ít nút [S12] [S13]. Đúng vì người chơi thấy rõ mình đang thua việc gì và tự sửa được. Không áp khi game muốn nhịp thư giãn, lúc đó giảm số việc chồng lên nhau thay vì thêm thời gian.

**N2. Thời gian chờ tăng phi tuyến theo độ bận quầy.** Với một quầy, thời gian chờ trung bình bằng ρ / (1 - ρ) lần thời gian phục vụ [S3]. Đi từ ρ 0.7 lên 0.9 làm thời gian chờ tăng gần 4 lần (bảng mục 3). Đúng vì hàng đợi tích lũy khi khách đến ngẫu nhiên. Không áp nguyên công thức khi khách đến theo lịch cố định hoặc người chơi chủ động chọn khách, khi đó phải đo bằng sim.

**N3. Dùng Little's Law để định sức chứa.** Muốn biết cần bao nhiêu chỗ ngồi hay ô hàng chờ, nhân nhịp đến với thời gian một khách ở lại [S4] [S5]. Đúng với mọi hệ ổn định không cần giả định phân phối. Không áp cho đoạn đầu và cuối ca, lúc hệ chưa ổn định.

**N4. Kiên nhẫn phải đọc được, tâm trạng sinh ra tip.** Diner Dash cho mỗi loại khách kiên nhẫn và cách tip riêng, hiện bằng tim giảm dần [S2]. Đúng vì người chơi ưu tiên khách bằng mắt, không cần nhớ số. Không áp khi muốn khách bí ẩn có chủ ý, nhưng phải dạy riêng.

**N5. Giữ thất bại ở mức khách lẻ trong game hai nửa.** PlateUp! cho một khách bỏ đi là đóng cửa quán [S14], hợp với game chạy theo lượt (run). Đội làm PlateUp! vẫn nói họ chủ động tránh dồn áp lực [S15]. Với game có nửa thám hiểm, mất cả ca vì một khách làm mất công cả chuyến bay. Không áp khi thể loại lấy sự khắc nghiệt làm bản sắc.

**N6. Tránh bỏ đi hàng loạt bằng kiên nhẫn theo độ dài hàng.** Một dev indie trên itch.io cộng thêm kiên nhẫn theo độ dài hàng để khách không bỏ đi cùng lúc [S6]. Đúng vì đếm ngược đồng bộ tạo một khoảnh khắc thua không cứu được. Không cần khi hàng tối đa chỉ 1 đến 2 khách.

**N7. Quán là converter của vòng thám hiểm.** Theo Machinations, quán đổi nguyên liệu (source từ chuyến bay) thành tiền (₵) [S11]. Dave the Diver lấy cảm hứng từ một quán ở Jeju, chủ quán sáng ra biển bắt cá, tối chế món [S16]. Đúng vì doanh thu quán bị chặn bởi thứ mang về, nên người chơi phải ra khám phá lại. Không áp nếu quán có nguồn nguyên liệu vô hạn, khi đó hai nửa tách rời.

**N8. Ca cần đỉnh và vùng nghỉ.** Cook, Serve, Delicious! 2 có hai giờ cao điểm mỗi ca. Trong giờ đó khách đến liên tục và phần thưởng kiên nhẫn từ món phụ giảm một nửa [S7]. Holding station cho người chơi chuẩn bị trước cao điểm [S8]. Đúng vì nhịp căng rồi thả giữ cảm giác làm chủ. Không áp khi ca quá ngắn để có hai pha.

**N9. Đơn hàng là câu đố, danh tiếng lọc khách.** Potion Craft cho khách kể vấn đề thay vì gọi tên món, có khách đặt điều kiện riêng để việc chế không thành lặp lại. Danh tiếng quyết định loại khách đến [S9]. Đúng vì đơn hàng thành quyết định thay vì phản xạ. Không áp khi ca bán là phần nhịp nhanh, đọc đơn phải tức thì.

**N10. Tín hiệu phản hồi phải đủ rõ, nếu không người chơi tra guide.** Moonlighter cho người chơi tự định giá và đọc phản ứng khách bằng biểu cảm [S17]. Cộng đồng làm bảng "giá hoàn hảo" để bỏ qua thử sai [S18], dấu hiệu tín hiệu chưa đủ để học trong game. Không áp khi chính việc khám phá là niềm vui có chủ ý.

**N11. Lượng khách gắn với một chỉ số tiến trình dễ hiểu.** Ở Dave the Diver, số khách mỗi tối theo hạng Cooksta của quán, không theo trang trí hay món [S10]. Đúng vì người chơi biết phải nâng gì để có thêm khách. Không áp khi muốn nhiều đòn bẩy cùng tác động, khi đó phải hiển thị từng đòn bẩy.

## 3. Con số tham chiếu

Thời gian chờ trung bình một quầy theo độ bận (bội số thời gian phục vụ). Tính từ công thức Wq = ρ / (μ(1 - ρ)) ở [S3].

| ρ (độ bận) | Chờ trung bình / thời gian phục vụ |
|---|---|
| 0.5 | 1.0 |
| 0.7 | 2.3 |
| 0.8 | 4.0 |
| 0.9 | 9.0 |
| ≥ 1 | Hàng dài vô hạn |

| Con số | Giá trị | Nguồn |
|---|---|---|
| Giờ cao điểm mỗi ca, Cook, Serve, Delicious! 2 | 2 lần, mỗi lần 1 giờ trong game, thường 12:00 và 18:00 (wiki người chơi) | [S7] |
| Phần thưởng kiên nhẫn từ món phụ trong giờ cao điểm, CSD2 | Giảm một nửa (wiki người chơi) | [S7] |
| Dave the Diver, doanh số | Hơn 1 triệu bản trong chưa tới 2 tuần (7/2023), hơn 10 triệu bản (9/2026) | [S19] [S20] |
| Moonlighter, doanh số | 500 000 bản trong chưa tới 1 năm | [S21] |
| Potion Craft, doanh số | 100 000 bản trong 3 ngày Early Access (9/2021) | [S22] |
| Diner Dash, khách trả tiền | 1 triệu khách trả tiền, được dẫn làm bằng chứng cảm xúc có tác dụng ở game casual | [S23] |

Doanh số chỉ để thấy cấu trúc hai nửa hành động và kinh doanh có thị trường, không dùng làm mục tiêu.

## 4. Phân tích game tham chiếu

### Dave the Diver (Mintrocket, 2023)
- Làm gì: ngày chia lặn và ca tối ở quán sushi. Khách vào, gọi món và đồ uống, để lại bừa bộn. Người chơi hoặc nhân viên thuê phục vụ và dọn [S24]. Lượng khách theo hạng Cooksta [S10].
- Vì sao hiệu quả: món của quán làm từ chính thứ bắt được, nên mỗi chuyến lặn có lý do [S16].
- Bài học cho Space Salvage: món quán phải truy về salvage và sinh vật mang về. Một chỉ số duy nhất quyết lượng khách là đủ cho MVP. Nhân viên là lớp quản lý thêm, ngoài MVP.

### Moonlighter (Digital Sun, 2018)
- Làm gì: anh hùng ngày vào hầm, tối bán đồ ở tiệm. Giá chưa biết, người chơi đặt giá rồi đọc biểu cảm của khách [S17].
- Vì sao hiệu quả: việc bán biến chiến lợi phẩm thành quyết định kinh tế có rủi ro nhỏ.
- Bài học cho Space Salvage: nếu cho người chơi định giá, tín hiệu phản ứng phải học được trong vài lần. Cộng đồng phải lập bảng giá [S18] là dấu hiệu cần tránh. MVP nên để giá cố định do gd-economy đặt.

### Potion Craft: Alchemist Simulator (niceplay games, 2021)
- Làm gì: khách mô tả vấn đề, người chơi chế thuốc phù hợp. Từ chối khách hay bán thuốc nổ cho sát thủ làm đổi danh tiếng, danh tiếng đổi loại khách [S9].
- Vì sao hiệu quả: đơn hàng mở ra lựa chọn đạo đức và cách chế, không chỉ tốc độ.
- Bài học cho Space Salvage: 2 loài khách nên khác nhau ở cách gọi món, không chỉ ở chỉ số kiên nhẫn. Lớp danh tiếng để sau MVP.

### Cook, Serve, Delicious! 2 (Vertigo Gaming, 2017)
- Làm gì: ca bán có giờ cao điểm, holding station cho làm món trước [S7] [S8]. Galindo nói bản 2 cố tình rất khó, dữ liệu hoàn tiền Steam cho thấy độ khó là lý do hoàn tiền phổ biến [S25].
- Vì sao hiệu quả: cao điểm có báo trước, người lập kế hoạch được thưởng.
- Bài học cho Space Salvage: báo trước đỉnh tải trong ca. Độ khó quán đặt nhẹ hơn dòng game bếp thuần, vì người chơi đến vì cả hai nửa.

### Overcooked (Ghost Town Games, 2016)
- Làm gì: co-op bếp hỗn loạn, ít nút: chặt, chuẩn bị, phục vụ [S12] [S13].
- Vì sao hiệu quả: áp lực sinh từ dư việc nên người chơi luôn biết phải làm gì tiếp.
- Bài học cho Space Salvage: game một người chơi thì số việc song song phải vừa sức một người. Câu 1 hay 2 quầy nên quyết bằng độ bận đo bằng sim.

## 5. Sai lầm thường gặp ở team indie nhỏ

| Sai lầm | Hậu quả | Cách tránh |
|---|---|---|
| Thêm lớp quản lý (nhân viên, menu, trang trí) trước khi vòng phục vụ vui | Phần quán thành việc vặt, review chê lặp lại [S26] | Làm vòng nhận đơn, chế, đưa cho vui trước. Lớp quản lý chỉ thêm khi Lead mở phạm vi |
| Chỉnh nhịp khách đến bằng cảm giác | Ca trống hoặc ngập, chênh lớn khi đổi một số nhỏ (N2) | Tính độ bận rồi sim nhiều seed, báo thời gian chờ trung bình và p90 |
| Đếm ngược kiên nhẫn đồng bộ | Cả hàng bỏ đi cùng lúc [S6] | Lệch giờ đến, cộng kiên nhẫn theo độ dài hàng |
| Một lỗi mất cả ca | Mất công cả chuyến thám hiểm [S14] | Thất bại ở mức khách lẻ, mức nặng hơn hỏi Lead |
| Tín hiệu giá hay tip mơ hồ | Người chơi tra guide [S18] | Mỗi mức phản ứng một biểu cảm và một câu thoại rõ |
| Doanh thu quán không phụ thuộc thứ mang về | Nửa thám hiểm vô nghĩa | Mỗi món cần nguyên liệu từ chuyến bay (N7) |
| Độ khó quán theo chuẩn game bếp thuần | Người chơi đến vì thám hiểm bỏ game [S25] | Đặt mức áp lực thấp hơn, cho chuẩn bị trước cao điểm |

## 6. Nguồn

| Mã | Nguồn | Link |
|---|---|---|
| S1 | Wikipedia, Time management game | https://Www.Wikipedia.org/wiki/Time_management_game |
| S2 | Wikipedia (bản Wikiwand), Diner Dash | https://wikiwand.com/en/articles/Diner_Dash |
| S3 | Wikipedia, M/M/1 queue | https://en.wikipedia.org/wiki/M/M/1_queue |
| S4 | Wolfram MathWorld, Little's Law | https://mathworld.wolfram.com/LittlesLaw.html |
| S5 | Wikipedia (bản Wikiwand), Little's Law | https://www.wikiwand.com/en/articles/Little's_Law |
| S6 | Dev indie trên itch.io về hàng chờ và kiên nhẫn | https://itch.io/post/1899347 |
| S7 | Cook, Serve, Delicious! Wiki, Game guides (wiki người chơi) | https://cookservedelicious.fandom.com/wiki/Game_guides |
| S8 | Review Cook, Serve, Delicious! 2, The Xbox Hub | https://www.thexboxhub.com/cook-serve-delicious-2-review/ |
| S9 | Hackernoon, A look at Potion Craft | https://sia.hackernoon.com/a-look-at-potion-craft-an-alchemist-simulator |
| S10 | The Escapist, số khách mỗi tối trong Dave the Diver | https://www.escapistmagazine.com/how-to-know-how-many-customers-per-night-in-dave-the-diver/ |
| S11 | Adams và Dormans, Game Mechanics: Advanced Game Design, chương 5 Machinations | https://www.oreilly.com/library/view/game-mechanics-advanced/9780132946728/ch05.html |
| S12 | MCV, The Develop Post-Mortem: Overcooked | https://mcvuk.com/the-develop-post-mortem-overcooked/ |
| S13 | Game Developer, Road to the IGF: Overcooked | https://gamedeveloper.com/design/road-to-the-igf-ghost-town-games-i-overcooked-i- |
| S14 | Review PlateUp!, Gideon's Gaming và Push Square | https://gideonsgaming.com/plate-up-review/ và https://pushsquare.com/reviews/ps5/plateup |
| S15 | GoNintendo, đội PlateUp! về tránh dồn áp lực | https://www.gonintendo.com/contents/31727-plateup-devs-discuss-how-they-avoid-putting-too-much-pressure-on-players |
| S16 | PC Gamer, Dave the Diver lấy cảm hứng từ quán hải sản ven biển | https://pcgamer.com/dave-the-diver-was-inspired-by-a-real-oceanside-seafood-restaurant-and-metal-gear-solid |
| S17 | Siliconera, Moonlighter và việc định giá | https://siliconera.com/?p=709874 |
| S18 | Pip's Puzzle, bảng giá Moonlighter 2 | https://pipspuzzle.com/game/guides/moonlighter-2-item-prices |
| S19 | God is a Geek, Dave the Diver vượt 1 triệu bản | https://www.godisageek.com/2023/07/dave-the-diver-reaches-over-1-million-sales/ |
| S20 | PC Gamer, Dave the Diver vượt 10 triệu bản | https://www.pcgamer.com/games/life-sim/dave-the-diver-has-now-sold-more-than-10-million-copies-mintrocket-cant-wait-to-share-our-future-plans/ |
| S21 | Game Developer, Moonlighter bán 500 000 bản | https://gamedeveloper.com/game-platforms/-i-moonlighter-i-sells-500-000-copies-in-less-than-a-year |
| S22 | Game World Observer, Potion Craft 100 000 bản trong 3 ngày | https://gameworldobserver.com/2021/09/27/alchemist-simulator-potion-craft-sales-100000-copies-in-three-days |
| S23 | Isbister và Schaffer, chương phỏng vấn user testing ở PlayFirst | https://www.taylorfrancis.com/chapters/mono/10.1201/b14580-16/interviews-user-testing-practices-playfirst%C2%AE-katherine-isbister-noah-schaffer |
| S24 | PC Gamer, thuê nhân viên và vận hành quán sushi trong Dave the Diver | https://www.pcgamer.com/au/dave-the-diver-best-staff/ |
| S25 | Game Developer, Deep Dive: Cook Serve Forever và các mức độ khó | https://gamedeveloper.com/design/deep-dive-cook-serve-forever-and-difficulty-levels |
| S26 | GOG, trang Travellers Rest (review người chơi) | https://www.gog.com/game/travellers_rest |

Tìm thêm khi cần: GDC Vault buổi của Tom Hall về Diner Dash Rush https://gdcvault.com/play/1019731/Designing-Games-for-Fun-and. Chưa xem nội dung, chỉ thấy trong kết quả tìm.
