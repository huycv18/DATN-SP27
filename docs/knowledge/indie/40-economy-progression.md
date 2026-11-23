# Kho tri thức indie - Economy và tiến độ

Viết 2026-11-19 bởi gd-economy cho Space Salvage. Đây là kiến thức nền, cách làm việc nằm ở `docs/playbooks/indie/gd-economy.md`. Mã `[Nn]` trỏ tới mục 6. Số trong file là số của game khác hoặc của nguồn, không phải số của Space Salvage.

## 1. Khái niệm lõi và thuật ngữ

| Thuật ngữ | Định nghĩa một dòng | Nguồn |
|---|---|---|
| Source / Faucet / Tap | Nút tạo tài nguyên đưa vào game (bán món, tip, thưởng) | [N4] [N6] |
| Sink / Drain | Nút lấy tài nguyên ra khỏi game vĩnh viễn (nhiên liệu, phí, nâng cấp) | [N4] [N6] |
| Converter | Nút đổi một tài nguyên thành tài nguyên khác, hoạt động như một drain kích một source (quán chế món) | [N4] [N5] |
| Pool | Nơi tài nguyên đọng lại (ví ₵, khoang hàng, kho nguyên liệu) | [N4] |
| Value chain | Chuỗi hành động và tài nguyên nối tiếp, giá trị của một mắt xích đến từ mắt xích sau nó | [N1] |
| Anchor | Điểm cuối của value chain gắn với một nhu cầu tâm lý (năng lực, tự chủ, gắn kết) | [N1] |
| Cost curve | Đường quy mọi lợi ích về một đơn vị chi phí để so các lựa chọn | [N2] |
| Transitive / Intransitive balance | Lựa chọn mạnh hơn thì đắt hơn / không có lựa chọn tốt nhất (kiểu oẳn tù tì) | [N2] |
| Growth rate | Hệ số nhân giá mỗi lần mua thêm một bậc, giá tăng mũ | [N3] |
| Gold per day (yield rate) | Lãi ròng chia số ngày tạo ra lãi, dùng so lựa chọn có thời gian khác nhau | [N13] |
| Operating cost | Chi phí cố định mỗi giờ giao thương hoặc mỗi ngày để vận hành (Dave the Diver có chi phí vận hành quán theo hạng) | [N18] [N19] |
| Positive feedback loop | Vòng tự khuếch đại, người đang dẫn càng dẫn xa (snowball) | [N7] [N8] |
| Negative feedback loop | Vòng kéo về cân bằng, người đang sau dễ bắt kịp | [N7] [N8] |
| Death spiral | Vòng dương theo chiều xấu: thua làm yếu đi, yếu đi làm thua tiếp | [N7] [N8] |
| Inflation | Tài nguyên tích lũy nhanh hơn sink hút ra, giá trị một đơn vị giảm | [N9] |
| Meta progression | Tiến độ giữ lại giữa các lượt chơi (nâng cấp vĩnh viễn) | [N12] |
| Surplus | Dư cuối nhịp: dư cũ cộng thu trừ chi | Khuôn Sheet phòng |

## 2. Nguyên lý

**2.1 Giá trị đến từ mắt xích sau.** Một tài nguyên chỉ có giá khi người chơi thấy nó dẫn tới việc gì tiếp theo. Cook viết "Value for a particular action comes from how it facilitates subsequent activities" [N1]. Mắt xích không có đầu ra là nội dung thừa. Không áp cho vật sưu tầm thuần (bộ sưu tập), nơi anchor là chính việc sưu tầm.

**2.2 Sink hơi lớn hơn source thì chuỗi căng.** Khi sink nhỏ hơn source, tài nguyên đọng lại và mất nghĩa [N1] [N9]. Giữ sink nhỉnh hơn để người chơi luôn có thứ muốn mua. Không áp ở giai đoạn cuối game chủ động cho người chơi "giàu" làm phần thưởng, nếu đã chọn có chủ đích.

**2.3 Game một người chơi do nhà làm game kiểm soát tốc độ ra tiền.** Không có người chơi khác gây lạm phát, nên mọi lạm phát là do số thiết kế [N10]. Lỗi economy trong game một người chơi chủ yếu chỉ hại trải nghiệm của chính người đó, nên không cần hoàn hảo, nhưng phải tránh tiền thừa vô nghĩa cuối game [N10] [N11] [N21].

**2.4 Giá tăng mũ, sản lượng tăng tuyến tính.** Khi giá bậc sau bằng giá gốc nhân hệ số mũ số bậc, thời gian chờ mỗi bậc không sụp dù thu nhập tăng [N3]. Không áp cho nâng cấp mở khả năng mới một lần (không có bậc tiếp), giá đó đặt theo mốc thời gian mong muốn.

**2.5 Lựa chọn transitive phải có cost curve.** Khi món này rõ ràng tốt hơn món kia, cách cân là giá khác nhau, không phải làm cho bằng nhau [N2]. Một lựa chọn kết hợp nhiều lợi ích nên đắt hơn tổng lợi ích riêng lẻ [N2]. Không áp cho lựa chọn khác loại không so được ("fruity"), những thứ đó chỉ cân được bằng playtest [N2].

**2.6 Có vòng dương thì phải có vòng âm.** Vòng dương (nâng cấp làm kiếm nhanh hơn) đẩy game tới đích, vòng âm (sink tăng theo) chống tràn và chống death spiral [N7] [N8]. Người chơi đang thua phải còn đường gỡ hợp lý [N8]. Không áp mạnh ở game muốn người chơi thấy mình mạnh dần rõ rệt, vòng âm quá mạnh làm mọi cố gắng giữa chừng vô nghĩa [N7].

**2.7 Meta progression phải giữ được kỹ năng lõi.** Tiền mang về sau một lượt làm mọi lượt có ý nghĩa, kể cả lượt thua [N12]. Nhưng nâng cấp vĩnh viễn quá mạnh làm lượt chơi dễ tới mức kỹ năng không còn quan trọng, và dễ đẩy người chơi đi cày [N12]. Không áp cho game không có lượt thua (sandbox thuần).

**2.8 Định giá phải đọc được.** Người chơi chấp nhận định giá khi thấy phản hồi rõ (Moonlighter dùng 4 mức phản ứng của khách) [N15]. Khi định giá thành đoán mò, người chơi phải tra guide ngoài game, và Moonlighter 2 đổi sang hệ số theo độ hiếm [N16]. Không áp khi chính việc dò giá là mechanic lõi được chủ động chọn.

**2.9 So lựa chọn bằng tỉ suất, không bằng giá tuyệt đối.** Stardew Valley wiki so cây trồng bằng lãi mỗi ngày (tổng bán trừ giá hạt, chia số ngày) chứ không bằng giá bán [N13]. Lựa chọn có thời gian khác nhau chỉ so được khi quy về cùng một đơn vị thời gian hoặc chỗ chứa. Không áp khi mọi lựa chọn có cùng thời gian và cùng chỗ chứa.

**2.10 Mô hình hóa trước khi đặt số.** Vẽ source, drain, converter, pool trước, rồi mới viết sim, để biết sim phải đo gì [N4] [N5]. Không áp cho economy chỉ có một source và một sink, khi đó bảng tính đủ.

## 3. Con số tham chiếu

| Số | Giá trị | Ngữ cảnh | Nguồn |
|---|---|---|---|
| Growth rate giá Lemonade Stand | 1.07 mỗi lần mua | AdVenture Capitalist, idle game | [N3] |
| Giá gốc Lemonade Stand | 4 (giá trị thật 3.738 vì sạp đầu miễn phí) | Cùng game | [N3] |
| Công thức gold per day | (số lần thu x giá bán mỗi lần thu - giá hạt) / số ngày | Stardew Valley | [N13] |
| Ví dụ gold per day | (5 x 150 - 240) / 27 = 18.89 | Cây hạt 240, thu 5 lần | [N13] |
| Nợ khởi đầu | 1,252,594,441.92 Credits | Hardspace: Shipbreaker | [N14] |
| Hạng quán Bronze | 10 like, chi phí vận hành 20 gold | Dave the Diver, Cooksta, ảnh chụp dữ liệu 2026-06-23 | [N18] |
| Hạng quán Gold | 130 like, 125 Best Taste, 5 món nghiên cứu, chi phí vận hành 320 gold | Cùng nguồn | [N18] |
| Mức phản ứng giá của khách | 4 mức, mức giận nhất thì khách bỏ đi | Moonlighter | [N15] |
| Nâng cấp tàu | 21 nâng cấp (5 trạm bản vẽ, 8 kích thước, 8 cải tiến), bậc kích thước cao nhất 80,000 Glim | Spiritfarer | [N20] |

Ghi chú: [N15], [N18], [N20] là wiki và guide cộng đồng, số có thể đổi theo bản vá. Dùng để so độ lớn, không dùng làm số chốt.

## 4. Phân tích game tham chiếu

**Dave the Diver** [N17] [N18] [N19] [N22]
- Làm gì: ngày lặn bắt cá, tối bán sushi. Tiền nâng thiết bị lặn để lặn sâu hơn, lâu hơn, chở nhiều hơn. Quán có hạng (Cooksta) với điều kiện like, vị ngon và chi phí vận hành tăng theo hạng.
- Vì sao hiệu quả: value chain liền từ cá tới món tới tiền tới thiết bị, anchor là lặn được vùng mới. Chi phí vận hành tăng theo hạng là sink tăng theo thu nhập (nguyên lý 2.2, 2.6). Đội làm game thêm hoạt động phụ để chống nhàm của vòng ngày đêm [N22].
- Bài học cho Space Salvage: nâng cấp phải gắn với tầm bay, thời gian bay, khoang hàng. Sink của quán nên tăng theo quy mô, không cố định.

**Moonlighter** [N15] [N16]
- Làm gì: đêm vào ngục lấy đồ, ngày bán ở tiệm, người chơi tự đặt giá và đọc phản ứng của khách.
- Vì sao hiệu quả: biến bán hàng thành một vòng chơi có kỹ năng. Nhưng giá gốc ẩn khiến nhiều người phải tra bảng giá ngoài game, bản 2 chuyển sang hệ số theo độ hiếm [N16].
- Bài học cho Space Salvage: giá món theo công thức đọc được (nguyên liệu, độ hiếm, công chế). Nếu có phản ứng của khách thì phản ứng là phản hồi, không phải câu đố đoán số.

**Stardew Valley** [N13]
- Làm gì: trồng, thu, bán theo mùa. Cộng đồng so cây bằng lãi mỗi ngày.
- Vì sao hiệu quả: mỗi cây khác thời gian, giá hạt, số lần thu, nên lựa chọn có ý nghĩa. Một chỉ số chung giúp người chơi tự lập kế hoạch.
- Bài học cho Space Salvage: mỗi vật nhặt và mỗi món nên có một chỉ số chung để so (₵ trên một ô khoang, ₵ trên một phút chế). Bảng đó là cách tìm món trội trước khi người chơi tìm ra.

**Hardspace: Shipbreaker** [N14]
- Làm gì: người chơi làm thợ tháo tàu mang khoản nợ khoảng 1.25 tỉ Credits với công ty, trả dần qua từng hợp đồng. Nâng thiết bị mở hợp đồng lợi hơn.
- Vì sao hiệu quả: nợ là khung truyện và mục tiêu dài hạn, đặt người chơi vào vai người lao động chịu rủi ro.
- Bài học cho Space Salvage: nợ trong Space Salvage (khi thiếu tiền trả phí cứu hộ) là áp lực ngắn hạn, khác hẳn. Nợ quá lớn so với thu chi hằng ngày làm các quyết định nhỏ mất nghĩa. Trần nợ nên cùng cỡ với thu nhập vài ngày, đo bằng sim.

**Spiritfarer** [N20]
- Làm gì: nâng tàu bằng Glim và nguyên liệu, 21 nâng cấp chia 3 nhóm, nhóm cải tiến mở vùng mới và tăng tốc độ đi.
- Vì sao hiệu quả: nâng cấp vừa là số (kích thước) vừa mở khả năng (đi qua vùng cấm), giá cần cả tiền lẫn vật liệu nên kéo người chơi đi khám phá.
- Bài học cho Space Salvage: nâng cấp lớn có thể cần cả ₵ và vật chỉ có ngoài không gian, để giữ hai nửa game nối nhau.

## 5. Sai lầm thường gặp ở team indie nhỏ

| Sai lầm | Hậu quả | Nguồn |
|---|---|---|
| Đầu game thiếu tiền quá, cuối game tiền vô dụng | Người chơi bực lúc đầu, chán lúc sau | [N21] [N10] |
| Vá tiền thừa bằng một món cực đắt cuối game | Sink vô dụng thì người chơi bỏ qua, không còn là sink | [N11] |
| Định giá thành đoán mò | Người chơi phải dùng bảng tính hoặc guide ngoài game | [N15] [N16] |
| Nâng cấp vĩnh viễn quá mạnh | Kỹ năng lõi mất ý nghĩa, người chơi đi cày | [N12] |
| Chỉ có vòng dương | Snowball, hoặc death spiral khi thua liên tiếp | [N7] [N8] |
| Không có sink tăng theo thu nhập | Lạm phát giữa game | [N9] [N1] |
| Lựa chọn có giá như nhau mà mạnh yếu khác nhau | Một lựa chọn trội, các lựa chọn khác thừa | [N2] |
| Đặt số trước khi vẽ dòng tài nguyên | Sim đo nhầm thứ, sửa số mãi không cân | [N4] [N5] |
| Mắt xích đứt (vật nhặt không có chỗ dùng) | Người chơi bỏ qua nội dung đã làm | [N1] |

## 6. Nguồn

| Mã | Nguồn | Link |
|---|---|---|
| N1 | Daniel Cook, "Value chains - A method for creating and balancing faucet-and-drain game economies", Lostgarden, 2021 (đã mở) | https://lostgarden.com/2021/12/12/value-chains/ |
| N2 | Ian Schreiber, Brenda Romero, "Game Balance", CRC Press 2021, chương Transitive Mechanics and Cost Curves | https://www.routledge.com/Game-Balance/Schreiber-Romero/p/book/9781498799577 |
| N3 | Anthony Pecorella, "The Math of Idle Games, Part I", Kongregate / Game Developer 2016 (đã mở) | https://www.gamedeveloper.com/design/the-math-of-idle-games-part-i |
| N4 | Machinations, Framework Basics | https://machinations.gitbook.io/docs/getting-started/framework-basics |
| N5 | Ernest Adams, "The Designer's Notebook: Machinations, a New Way to Design Game Mechanics", Game Developer | https://gamedeveloper.com/design/the-designer-s-notebook-machinations-a-new-way-to-design-game-mechanics |
| N6 | Machinations, "What is game economy design" | https://machinations.io/articles/what-is-game-economy-design |
| N7 | Machinations, "Game systems: Feedback loops and how they help craft player experiences" | https://machinations.io/articles/game-systems-feedback-loops-and-how-they-help-craft-player-experiences |
| N8 | Cornell CS 3152, bài giảng 07 Balance, 2013 | https://cs.cornell.edu/courses/cs3152/2013sp/lectures/07-Balance.pdf |
| N9 | Machinations, "What is game economy inflation? How to foresee and overcome it" | https://machinations.io/articles/what-is-game-economy-inflation-how-to-foresee-it-and-how-to-overcome-it-in-your-game-design |
| N10 | Tóm tắt quan điểm Tim Cain về economy game nhập vai (wiki tóm tắt video, nguồn thứ cấp) | https://turbo-wiki.pages.dev/tim-cain/system-design/game-economy |
| N11 | Rampant Games, "Brewster's Millions (of Gold Pieces)" | https://rampantgames.com/blog/?p=5446 |
| N12 | Game Maker's Toolkit, "Roguelikes, Persistency and Progression" (bản chép lời) | https://amara.org/videos/7doGHxwrhRpX/en/3100738 |
| N13 | Stardew Valley Wiki, Crops (công thức thấy trong kết quả tìm, trang chặn mở trực tiếp) | https://stardewvalleywiki.com/Crops |
| N14 | Hardspace: Shipbreaker, trang Steam (đã mở) | https://store.steampowered.com/app/1161580 |
| N15 | All Things How, "Moonlighter price guide" (guide cộng đồng) | https://allthings.how/moonlighter-price-guide-perfect-selling-prices-for-every-item/ |
| N16 | GamesRadar, "Moonlighter 2's shop system solves the age-old RPG issue..." | https://www.gamesradar.com/games/roguelike/moonlighter-2s-shop-system-solves-the-age-old-rpg-issue-of-your-bag-being-filled-with-useless-tat |
| N17 | Wikipedia, Dave the Diver | https://en.wikipedia.org/wiki/Dave_the_Diver |
| N18 | MeowDB, Dave the Diver Cooksta (dữ liệu cộng đồng) | https://meowdb.com/db/dave-the-diver/cooksta |
| N19 | Prima Games, "What is Operation Cost in Dave the Diver" | https://primagames.com/tips/what-is-operation-cost-in-dave-the-diver-answered |
| N20 | GuideStrats, "Albert's Shipyard Guide + Upgrades List (Spiritfarer)" | https://guidestrats.com/spiritfarer-alberts-shipyard/ |
| N21 | Seberin, "Spend less on candles", 2017 | https://seberin.blogspot.com/2017/04/spend-less-on-candles.html?m=0 |
| N22 | Inven Global, "[GDC24] Blending Humor and Gameplay: Insights from Dave the Diver's Session" | https://www.invenglobal.com/articles/18786/gdc24-blending-humor-and-gameplay-insights-from-dave-the-divers-session |
