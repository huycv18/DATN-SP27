# Kiến thức nền: vật phẩm, salvage, chế tạo (gd-items)

Soạn 2026-11-19 cho Space Salvage. Số trong ngoặc vuông là số thứ tự nguồn ở mục 6. Playbook cách làm nằm ở `docs/playbooks/indie/gd-items.md`, file này chỉ giữ kiến thức nền. Phần nguồn là blog, wiki fan hoặc guide thì đã ghi rõ ở mục 6, số từ nguồn đó phải kiểm lại bằng sim của mình trước khi dùng làm số chốt.

## 1. Khái niệm lõi và thuật ngữ

| Thuật ngữ | Định nghĩa một dòng |
|---|---|
| Source | Cơ chế tạo tài nguyên mới từ không gì cả (nhặt salvage, quái rơi) [1] |
| Sink / Drain | Cơ chế lấy tài nguyên ra khỏi game vĩnh viễn (tiêu vào công thức, nâng cấp, phí) [1] |
| Converter | Cơ chế đổi tài nguyên này thành tài nguyên khác, ví dụ cối xay biến lúa mì thành bột. Recipe là converter [1] |
| Feedback loop | Vòng mà đầu ra của hệ thống quay lại làm đầu vào, nguồn của nhịp động (thu nhiều, nâng cấp, thu nhiều hơn) [1][2] |
| Recipe Definition | Mức chặt của công thức, từ công thức cố định tới ghép tự do [3] |
| Completion Constraints | Tài nguyên trong game giới hạn cái gì chế được [3] |
| Variable Outcome | Cùng thao tác mà kết quả khác nhau. Hiếm ở game chế tạo, phần lớn kết quả định trước [3] |
| Progression (của chế tạo) | Khả năng chế thay đổi theo tiến trình chơi [3] |
| Find the Recipe | Phải tìm công thức rồi mới chế được món đó, nguồn: thế giới, thưởng, cửa hàng [4] |
| Money by Another Name | Chế như đổi chác minh bạch, giống cửa hàng [4] |
| Made-to-Order | Người chơi chọn linh kiện, mỗi lựa chọn đổi kết quả [4] |
| Cost curve | Thang đưa mọi món về cùng một thước chi phí để so sánh độ mạnh [27][28] |
| Transitive / Intransitive | Transitive: món cao cấp hơn luôn tốt hơn. Intransitive: không món nào tốt nhất mọi lúc, vì mỗi món có chỗ thắng riêng [27][28] |
| Item Data / Item Instance | Định nghĩa tĩnh của item (chỉ số) khác với bản đang sở hữu (số lượng, độ bền) |
| Weighted drop table | Bảng rơi có trọng số, tỉ lệ thật bằng trọng số chia tổng trọng số [19] |
| Pity | Bảo hiểm xui: sau số lần hụt định trước thì chắc chắn rơi [20] |
| Dry streak | Chuỗi lần quay không rơi món mong muốn [18] |
| Item tier | Bậc hiếm của item, thường gắn màu để quét mắt nhanh [21][22] |

## 2. Nguyên lý

1. **Mỗi item phải có source và sink.** Item chỉ có nguồn thì dồn thành rác tồn kho, item chỉ có tiêu thì người chơi không có đường lấy. Dormans vẽ nền kinh tế bằng bốn khối (source, drain, converter, trader) chính để thấy lỗ hổng này [1][2]. Không áp khi item là phần thưởng thuần trang trí, lúc đó ghi rõ "item đích".
2. **Converter phải trả lương cho việc chế.** Món chế ra phải đáng hơn tổng nguyên liệu bán thẳng, nếu không người chơi không chế. Stardew đặt rượu bằng 3 lần giá nền của trái, mứt và dưa muối bằng 2 lần giá nền cộng 50 [16][17]. Không áp khi chế để mở khóa (nâng cấp, nhiệm vụ) chứ không để lãi.
3. **Chọn độ chặt của công thức theo vai trò của chế tạo trong game.** Khảo sát 64 hệ chế tạo của 47 game cho thấy công thức định nghĩa chặt là phổ biến nhất [3]. Cách "Anything is Possible" tốn công thiết kế, cân bằng, kiểm thử nên chỉ hợp khi chế tạo là lõi của game [4]. Game có quán và ngày thám hiểm chia hai nửa thì chế tạo là cầu nối, nên giữ công thức chặt.
4. **Công thức đọc được trong một cái nhìn, khó nằm ở nhịp.** Nhà làm Overcooked, Cook Serve Delicious, Battle Chef Brigade cắt bớt độ phức tạp công thức, phần lớn thời gian phát triển Overcooked đầu tiên dành để cân bằng cách chuẩn bị món [5][6]. Không áp khi nhịp không có áp lực thời gian, lúc đó chiều sâu công thức mới là thứ giữ người chơi.
5. **Tiền tệ đơn nhất rất khó cân.** Moonlighter không có XP, vàng dùng cho mọi thứ nên thừa thì game dễ, thiếu thì mệt. Nhà làm nói đây là phần khó cân nhất [7]. Space Salvage chỉ có ₵ nên chịu đúng rủi ro này, giá phải cân qua sim chứ không qua cảm giác.
6. **Item nhặt phải kéo người chơi vào quyết định bán hay chế.** Moonlighter chọn giữ loot làm trọng tâm: mỗi món nhặt được buộc người chơi chọn bán hay làm nguyên liệu, và hai nửa game được thiết kế để thông tin cho nhau [7]. Item chỉ có một đường dùng thì không có quyết định.
7. **Giới hạn chứa tạo quyết định, không tạo việc vặt.** Bình luận về game kinh dị sinh tồn cho rằng túi hạn chế khiến người chơi phải cân nhắc mang gì và tăng căng thẳng [24]. Unexplored 2 chọn túi cố định 18 ô, món cồng kềnh chiếm nhiều ô, không có item mở rộng vì UI dễ hơn khi biết trước số ô [23]. Không áp khi giới hạn trở thành việc quản lý đồ chiếm hết thời gian, bài học của hướng "vừa đủ thiếu" ở [24].
8. **Bảng rơi tách theo bậc, có trần xui cho món bắt buộc.** Thêm item vào một bảng phẳng làm lệch tỉ lệ mọi item khác, kể cả món hiếm nhất. Tách bậc và quay từ bậc hiếm nhất xuống giữ được tỉ lệ ổn định [19]. Món 1% vẫn còn 37% người chơi trắng tay sau 100 lần [18], nên món bắt buộc cho công thức MVP cần pity [20]. Món tùy chọn thì không cần pity.
9. **Nâng cấp phải cảm nhận được.** Dome Keeper đặt mục tiêu mỗi nâng cấp khác biệt rõ, tạo bước nhảy sức mạnh dễ thấy kèm phản hồi hình hoặc tiếng, và mua bằng tài nguyên khai thác [9]. Hardspace: Shipbreaker mở thêm công cụ và cảm biến để mở rộng việc làm được trên mỗi tàu [11]. Không áp khi bước nhảy phá mốc độ khó của tầng, phải cân lại bằng sim.
10. **Công thức tìm thấy giữ động lực khám phá.** "Find the Recipe" thêm bước khám phá, khuyến khích sưu tầm, chặn người chơi đi tới nội dung quá sớm [4]. Subnautica gắn mở công thức với quét mảnh vỡ ngoài thế giới, và guide fan nói nhiều bản thiết kế cần quét cùng loại mảnh nhiều lần [26]. Không áp khi game ngắn như MVP một ngày, lúc đó phần lớn công thức nên có sẵn hoặc mở theo nâng cấp.
11. **Bậc hiếm bằng màu là thang quét mắt, không phải thang sức mạnh.** Thang xám, trắng, xanh lá, xanh dương, tím, cam phổ biến từ World of Warcraft, giúp người chơi đánh giá giá trị khi nhìn lướt qua danh sách [21][22]. Màu có thể gây nhầm: Caliber phải thêm thang 5 bậc có màu riêng vì người chơi hiểu sai độ hiếm [29]. Cần chế độ cho người mù màu.

## 3. Con số tham chiếu

| Số | Giá trị | Ghi chú cách dùng | Nguồn |
|---|---|---|---|
| Xác suất có ít nhất một lần rơi sau N lần | `1 - (1 - p)^N` | Công thức, không phải tham số | [18] |
| Số lần trung bình để rơi | `1 / p` (món 1% trung bình 100 lần) | | [18] |
| Món rơi 1%: tỉ lệ người chơi chưa có sau 100 lần | khoảng 37% | | [18] |
| Món rơi 1%: sau 69, 230, 459 lần | còn 50%, 10%, 1% chưa có | Dùng để đặt trần xui | [18] |
| Pity ở lần 150 cho món 1% | chờ trung bình giảm từ 100 xuống khoảng 78 lần | Một ví dụ minh họa, không phải chuẩn | [18] |
| Hệ số giá rượu Stardew | 3 lần giá nền trái | Số fan audit theo bản 1.6.15, wiki chính thức chặn truy cập nên chưa đối chiếu | [16] |
| Giá mứt và dưa muối Stardew | `2 x giá nền + 50` | Cùng ghi chú | [16][17] |
| Hệ số chất lượng Stardew | 1,0 / 1,25 / 1,5 / 2,0 | Cùng ghi chú | [16] |
| Nghề Artisan Stardew | cộng 40% giá hàng chế | Cùng ghi chú | [16][17] |
| Dave the Diver: món có cấp nâng tối đa | thường 10, ví dụ súp Narwhal 400 lên 1480 | Số theo patch, guide fan lệch nhau, chỉ dùng thấy dạng đường cong | [15] |
| Unexplored 2: ô túi cố định | 18 ô, món lớn chiếm nhiều ô | Ví dụ thiết kế, không phải chuẩn ngành | [23] |
| Thang bậc hiếm phổ biến | 6 bậc (xám, trắng, xanh lá, xanh dương, tím, cam) | Thang gốc của World of Warcraft, nhiều game chép lại và chỉnh bớt bậc, không có số chuẩn | [21][22] |

Không có số chuẩn ngành nào cho "số ô túi hợp lý" hay "tỉ lệ lãi của công thức". Hai số đó Space Salvage phải tự dò bằng sim.

## 4. Phân tích game tham chiếu

| Game | Làm gì | Vì sao hiệu quả | Bài học cho Space Salvage |
|---|---|---|---|
| Moonlighter | Ngày hầm ngục lấy loot, tối bán ở tiệm, tiền chỉ có vàng, không XP, loot buộc chọn bán hay chế [7] | Hai nửa game thông tin cho nhau, mỗi món nhặt có ít nhất hai đường dùng [7] | Cùng cấu trúc và cùng rủi ro ₵ đơn nhất. Mọi item nhặt cần ít nhất hai đường (bán, chế). Phần 2 có cú sốc khi chuyển cửa hàng sang cơ chế nhiều RNG, người chơi phản đối mạnh, nhà làm phải thương lượng [8], nên đổi luật bán hàng cần chơi thử sớm |
| Dave the Diver | Bắt cá ban ngày, chế món bán ban đêm. Khởi đầu từ "bắt cá rồi làm sushi", sau mới thêm món kết hợp [13][14]. Món có giá bán và chỉ số Taste, nâng cấp món tăng cả hai, sao cá quyết định lượng thịt thu được [15] | Vật nhặt trực tiếp thành món ăn, người chơi thấy ngay hệ quả của chuyến đi | Cùng cấu trúc hai vòng. Nên có một món chế trực tiếp từ vật cắt hoặc bắt được, rồi mới thêm đồ độ. Chất lượng vật nhặt ảnh hưởng sản lượng đã đủ làm khung chất lượng, chưa cần quality tier phức tạp ở MVP |
| Potion Craft | Không có công thức cứng: bản đồ 2D, mỗi nguyên liệu dịch chuyển hướng bình thuốc, nghiền hay không nghiền đổi quãng dịch. Công thức tìm bằng thăm dò và chỉ rõ công dụng sau lần chế đầu [10] | Cùng kết quả có nhiều đường đi, trò chơi nằm ở chọn đường tiết kiệm nguyên liệu [10] | Dạng "Anything is Possible" gần nhất, rất tốn công cân [4]. Space Salvage nên chỉ lấy ý một biến thể nhẹ cho đồ độ (chọn linh kiện), không chuyển cả hệ sang |
| Hardspace: Shipbreaker | Cắt, kéo, phân loại tàu theo vật liệu và linh kiện, công cụ gồm máy cắt, xung động học, dây neo, móc [11] | Nâng cấp mở công cụ và cảm biến, độ khó tăng dần qua độ đa dạng linh kiện [11] | Nguồn trực tiếp cho tab Salvage: salvage nên có "loại bộ phận" và vật liệu, độ khó tăng bằng đa dạng chứ không chỉ bằng số lớn. Cơ chế nợ khi chết [11] chạm gd-economy, không phải gd-items |
| Dome Keeper | Đào tài nguyên dưới mái vòm, kéo về mua nâng cấp, trận phòng thủ là nơi thấy kết quả. Nâng cấp chia nhánh đào và chiến đấu [9] | Mỗi nâng cấp khác biệt rõ, sức chứa mang theo là chuyện thường trực khiến người chơi phải chọn đào gì [9] | Khoang hàng giới hạn ô gần tương đương sức chứa mang theo. Nâng cấp khoang và vũ khí nên là lựa chọn lối chơi, không chỉ thêm số |

## 5. Sai lầm thường gặp ở team indie nhỏ

| Sai lầm | Vì sao hay mắc | Cách tránh |
|---|---|---|
| Item có nguồn không có chỗ tiêu | Thêm item vì "có vẻ hợp" trước khi biết ai dùng [1] | Lập bảng source / sink từ ngày đầu, item không có sink bị đưa vào backlog |
| Giá item chỉnh theo cảm giác, ₵ lạm phát hoặc cạn | Tiền tệ đơn nhất dùng cho mọi thứ [7] | Mọi giá qua gd-economy và sim, tab của mình không ghi giá |
| Công thức quá nhiều nhánh, khó đọc | Muốn thể hiện chiều sâu cooking [5][6] | Công thức ít bước, kết quả đọc được bằng icon. Độ khó đặt ở nhịp quán |
| Món rơi hiếm bắt buộc cho công thức đầu | Không tính chuỗi xui [18] | Sim xác suất, thêm pity hoặc nguồn thay thế cho nguyên liệu bắt buộc [20] |
| Thêm item vào bảng rơi phẳng làm lệch tỉ lệ cũ | Một bảng cho mọi bậc [19] | Tách bảng theo bậc, quay từ bậc hiếm xuống [19] |
| Túi quá chật hoặc quá rộng | Không thử chơi, chỉ đoán số ô [24] | Dò số ô bằng sim chuyến bay rồi chơi thử, ghi là `[GIẢ ĐỊNH]` tới lúc đó |
| Chuyển mạnh cơ chế bán hàng giữa chừng | Muốn thêm RNG sau khi đã có người chơi [8] | Chốt luật bán hàng sớm, chơi thử trước khi đổi |
| Nâng cấp chỉ tăng số, không đổi lối chơi | Dễ làm [9] | Mỗi nâng cấp đổi một lựa chọn, kiểm bằng câu hỏi "nâng cấp này đổi chuyến bay thế nào" |
| Dùng màu bậc hiếm làm kênh thông tin duy nhất | Màu rõ trên màn hình thiết kế [22] | Có biểu tượng hoặc chữ đi kèm màu |

## 6. Nguồn

Link chỉ ghi khi đã mở được hoặc đã thấy trong kết quả tìm kiếm ngày 2026-11-19. Phần ghi (mở) là đã đọc nội dung trang, (kết quả) là chỉ thấy trong kết quả tìm kiếm.

| # | Nguồn | Link | Trạng thái |
|---|---|---|---|
| 1 | Adams và Dormans, *Game Mechanics: Advanced Game Design*, chương mẫu | https://peachpit.com/articles/article.aspx?p=1925649 | kết quả |
| 2 | Game Developer, "Machinations: a new way to design game mechanics" | https://gamedeveloper.com/design/the-designer-s-notebook-machinations-a-new-way-to-design-game-mechanics | kết quả |
| 3 | Grow và cộng sự, "Crafting in Games", DHQ 11.4 (2017) | https://dhq.digitalhumanities.org/vol/11/4/000339/000339.html | mở, đọc nửa đầu |
| 4 | Tuts+, "5 approaches to crafting systems in games and where to use them" | https://code.tutsplus.com/5-approaches-to-crafting-systems-in-games-and-where-to-use-them--cms-22628a | mở |
| 5 | TechRadar, "Beyond the recipe" | https://techradar.com/news/beyond-the-recipe-the-developers-trying-to-improve-how-we-cook-in-games | kết quả |
| 6 | MCV, "The Develop Post-Mortem: Overcooked" | https://mcvuk.com/the-develop-post-mortem-overcooked/ | kết quả |
| 7 | MCV, "When we made Moonlighter" | https://mcvuk.com/when-we-made-moonlighter/ | mở |
| 8 | Bonus Action, phỏng vấn design director Moonlighter 2 | https://bonus-action.com/interview/moonlighter-2s-design-director-on-the-redesign-that-nearly-broke-him-we-owe-it-to-our-players/ | mở |
| 9 | Game Developer, "How Dome Keeper focuses on systems that feed into one another" | https://www.gamedeveloper.com/road-to-igf-2023/how-dome-keeper-focuses-on-systems-that-feed-into-one-another | mở |
| 10 | HackerNoon, "A look at Potion Craft" (bài giới thiệu, không phải phỏng vấn nhà làm) | https://hackernoon.com/a-look-at-potion-craft-an-alchemist-simulator | kết quả |
| 11 | Xbox Wire, hồi cứu Hardspace: Shipbreaker | https://news.xbox.com/en-us/2023/04/28/hardspace-shipbreaker-retrospective-making-of-game-pass/ | mở |
| 12 | Goonhammer, Hardspace: Shipbreaker Early Access review (chứng chỉ và nâng cấp scanner, trang chặn 403 khi mở) | https://www.goonhammer.com/hardspace-shipbreaker-early-access-review | kết quả |
| 13 | Software Engineering Daily, phỏng vấn nhà làm Dave the Diver | https://softwareengineeringdaily.com/2024/04/09/developing-dave-the-diver-with-jaeho-hwang-and-minsuk-cha | kết quả |
| 14 | PC Gamer, Dave the Diver lấy cảm hứng từ nhà hàng thật | https://pcgamer.com/dave-the-diver-was-inspired-by-a-real-oceanside-seafood-restaurant-and-metal-gear-solid | kết quả |
| 15 | Gfinity, guide Best Taste (nguồn fan, số theo patch) | https://www.gfinityesports.com/guides/dave-the-diver-best-taste-ranking | kết quả |
| 16 | Stardew Price DB, audit công thức artisan (fan) | https://stardewpricedb.pages.dev/artisan-goods/ | kết quả |
| 17 | Carl's Guide to Stardew Valley, artisan goods (fan) | https://carlsguides.com/stardewvalley/artisan-goods.php | kết quả |
| 18 | Ziva, loot table calculator | https://ziva.sh/tools/loot-table-calculator | mở |
| 19 | LootLocker, random with weights | https://www.lootlocker.io/blog/random-with-weights | kết quả |
| 20 | GameDev.net, "Stop bad RNG, build a pity system" | https://gamedev.net/news/3360-stop-bad-rng-build-a-pity-system/ | kết quả |
| 21 | GGRecon, "I want games to decide on a rarity system" | https://ggrecon.com/articles/i-want-games-to-decide-on-a-rarity-system | kết quả |
| 22 | TV Tropes, Color Coded Item Tiers (wiki cộng đồng) | https://tvtropes.org/pmwiki/pmwiki.php/Main/ColorCodedItemTiers | kết quả |
| 23 | Game Developer, "Never enough space: redesigning the inventory system for Unexplored 2" | https://www.gamedeveloper.com/game-platforms/never-enough-space-redesigning-the-inventory-system-for-unexplored-2 | kết quả |
| 24 | Bloody Disgusting, "Horror declassified: a look at inventory and resources" | https://bloody-disgusting.com/news/3234623/horror-declassified-a-look-at-inventory-and-resources/ | kết quả |
| 25 | Diễn đàn Unknown Worlds, "7 tweaks to make Subnautica more balanced" (ý kiến cộng đồng, không phải nhà làm) | https://forums.unknownworlds.com/discussion/comment/2352871 | kết quả, chưa dùng làm căn cứ số |
| 26 | AllThings.how, blueprint Subnautica 2 (fan, early access, chỉ minh họa cơ chế quét mảnh) | https://allthings.how/subnautica-2-blueprints-full-recipe-and-unlock-reference-early-access/ | kết quả |
| 27 | Schreiber và Romero, *Game Balance* (CRC Press, 2021) | https://www.routledge.com/Game-Balance/Schreiber-Romero/p/book/9781315156422 | kết quả |
| 28 | Tóm tắt chương transitive và cost curve | https://flasheng.blogspot.com/2011/03/literature-game-balance-ch3-transitive.html | kết quả |
| 29 | Caliber, "Item rarity levels in Caliber" | https://playcaliber.com/en/news/474/item-rarity-levels-in-caliber | kết quả |

Chưa mở được: wiki Stardew chính thức và Dave the Diver fandom (lỗi 403, 402), nên số Stardew và Dave the Diver đến từ trang fan. Chưa có nguồn nhà làm cho Subnautica, Spiritfarer, Hades nên các game này không phân tích ở mục 4.
