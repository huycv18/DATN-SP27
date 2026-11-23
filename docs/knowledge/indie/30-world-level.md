# 30 - World & Level Design (kiến thức nền cho gd-world)

Kiến thức nền về thiết kế không gian chơi cho game indie action exploration có vòng quay về căn cứ. Cách làm việc, quy trình và checklist nằm ở `docs/playbooks/indie/gd-world.md`, file này không lặp lại. Số trong ngoặc vuông `[n]` trỏ tới mục 6. Soạn 2026-11-19 từ nguồn web đã mở hoặc đã thấy trong kết quả tìm kiếm.

## 1. Khái niệm lõi và thuật ngữ

| Thuật ngữ | Định nghĩa một dòng |
|---|---|
| Zone / biome | Một vùng có đặc trưng nhìn, luật môi trường và bộ nội dung riêng, người chơi nhận ra ngay khi bước vào |
| Critical path | Chuỗi beat mọi người chơi bắt buộc đi qua để hoàn thành [2] |
| Beat | Một khúc nhỏ tự đứng được của level: một vùng, một sự kiện, một hoạt động [2] |
| Set piece | Beat lớn, đáng nhớ, tốn công dựng (boss, sự kiện dàn dựng) [2] |
| Beat sheet | Danh sách hay bảng các beat chính theo thứ tự, dùng để phác nhịp [2] |
| Intensity graph | Đồ thị beat theo một chỉ số trải nghiệm (cường độ, hồi hộp) theo thời gian [2] |
| Build Up / Peak / Relax | Ba trạng thái của bộ điều phối nhịp trong Left 4 Dead: dồn áp lực, đỉnh, cho nghỉ [3] |
| Teach, test, twist | Ba beat: giới thiệu hoạt động, kiểm người chơi lặp lại được, rồi biến thể [2] |
| Kishōtenketsu | Cấu trúc bốn phần giới thiệu, phát triển, xoắn, kết mà nhóm Mario 3D dùng để dạy một ý trong một level [11] |
| Metrics | Thước đo kích thước, khoảng cách của toàn game: số vật lý người chơi là dữ kiện đo, số kiến trúc là quy ước dự án [1] |
| Metrics test map (metrics zoo) | Map chỉ cho dev, chứa phòng, hành lang, độ cao mẫu để đi thử và kiểm thước đo [1] |
| Blockout / greybox | Bản nháp level bằng khối đơn giản, chưa có art, để thử và sửa cấu trúc khi còn rẻ [17] |
| Prospect / refuge | Prospect là chỗ trống nhìn xa, refuge là chỗ kín an toàn. Đường đi tốt nối các refuge qua prospect [4] |
| Landmark | Vật mốc lớn, cố định, nhìn từ xa để định hướng |
| Lock and key / ability gate | Chướng ngại chỉ qua được khi có chìa hoặc năng lực, kiểu cổng của metroidvania [14] |
| Cycle (vòng) | Hai đường nối cùng hai điểm, tạo đường tắt và lựa chọn, đối lập với cấu trúc cây [10] |
| Room template | Phòng dựng tay có ô xác suất, ghép theo lưới để sinh level ngẫu nhiên mà vẫn chơi được [5][6] |
| Environmental storytelling | Sắp xếp không gian để người chơi tự đọc ra "chuyện gì đã xảy ra ở đây" [12] |
| Telegraph | Tín hiệu báo trước một hazard hay đòn đánh, cho người chơi thời gian phản ứng |
| Point of no return | Điểm mà tài nguyên còn lại không đủ để quay về căn cứ |
| Biên quay về (từ của phòng) | Tài nguyên còn lại trừ tài nguyên cần để về căn cứ từ vị trí hiện tại, âm là đã qua point of no return |
| Spawn point / respawn timer | Điểm sinh nội dung và thời gian để nội dung ở đó xuất hiện lại |
| Hub | Căn cứ người chơi quay về giữa các chuyến (trong Space Salvage là tàu và quán) |

## 2. Nguyên lý

**N1. Đo trước, vẽ sau.** Kích thước vùng phải sinh từ số di chuyển của người chơi (tốc độ, quán tính, tầm nhìn camera), không phải từ cảm giác trên giấy. Level Design Book gợi ý hành lang ít nhất gấp đôi bề ngang người chơi và dựng map thử thước đo trước khi dựng level thật [1]. Vì sao đúng: sai tỉ lệ là lỗi blockout phổ biến nhất và sửa muộn thì phải dựng lại cả vùng [17]. Nguyên lý level 3D phần lớn chuyển được sang game 2D nhìn ngang, như kinh nghiệm Lisa Brown khi làm Hyper Light Drifter [13]. Khi không áp: giai đoạn phác bubble diagram chỉ nói ý đồ và nối vùng, chưa cần tỉ lệ.

**N2. Cường độ phải có nghỉ.** Đỉnh liền đỉnh làm người chơi chai cảm giác. Valve tách trạng thái Build Up, Peak, Relax để sau mỗi đỉnh có khoảng thả [3], Level Design Book gọi là xen cao thấp và khuyên trận cuối khó nhưng không phải khó nhất [2]. Khi không áp: đoạn khám phá thuần thư giãn không cần đỉnh, chỉ cần biến thể nhịp.

**N3. Đặt refuge nhìn ra prospect.** Người chơi muốn quan sát vùng nguy hiểm từ chỗ an toàn trước khi lao vào. Totten dùng lý thuyết prospect và refuge của kiến trúc để xếp đường đi từ refuge qua prospect tới refuge kế [4]. Khi không áp: đoạn kinh dị cố ý tước refuge để tạo hoảng, nhưng phải là chủ ý và ngắn.

**N4. Vòng tốt hơn cây.** Level sinh máy hay dựng vội thường thành cây phân nhánh, đi tới cuối nhánh rồi quay lại cùng đường. Dormans dựng Unexplored từ các vòng gameplay và cho rằng vòng là thứ chiếm ưu thế trong level dựng tay [10]. Vòng cho đường tắt về căn cứ và lựa chọn đường an toàn hay đường nhanh. Khi không áp: hành lang dạy thao tác đầu game nên tuyến tính để không lạc.

**N5. Dạy một ý rồi xoắn nó.** Mỗi quái, hazard hay thao tác mới đi qua giới thiệu, phát triển, xoắn, kết [11] hoặc teach, test, twist [2]. Vì sao đúng: người chơi học bằng làm, gặp ý mới ở chỗ an toàn thì không đổ lỗi game. Khi không áp: nội dung người chơi đã thạo, lặp dạy làm chậm nhịp.

**N6. Ngẫu nhiên có khung.** Spelunky sinh đường chính đi được trước rồi mới đổ phòng mẫu dựng tay có phần xác suất, phần thưởng lớn đặt ngoài đường chính kèm rủi ro [5][6]. Vì sao đúng: giữ bất ngờ mỗi chuyến mà không sinh level hỏng. Khi không áp: tầng dựng tay một lần (như MVP một tầng) thì xáo chỉ nên ở mức nội dung trong điểm sinh, không xáo hình.

**N7. Giữ mốc cố định khi nội dung đổi.** Người chơi luôn phải biết mình ở đâu và đi đâu [9]. Dave the Diver đổi nhẹ Blue Hole mỗi lần lặn nhưng giữ các điểm đáng nhớ như hang ngầm ở chỗ cố định [16]. Metroid Dread giữ người chơi định hướng bằng cách nhốt họ trong các mảnh map nhỏ [14]. Khi không áp: game lấy lạc làm cảm giác chính, hiếm ở thể loại có vòng kinh tế.

**N8. Tài nguyên là đồng hồ, và đồng hồ chỉ chạy khi người chơi hành động.** Dredge cho thời gian trôi khi di chuyển, câu, nạo vét [8], và postmortem của team nói di chuyển gắn với tài nguyên thời gian đẩy chu kỳ ngày đêm [26]. Dave the Diver chỉ đẩy giờ trong ngày khi kết thúc một lần lặn [16]. Oxy trong Subnautica vừa giới hạn chuyến lặn vừa là cổng tiến độ qua nâng cấp bình [7][21]. Vì sao đúng: áp lực đến từ lựa chọn của người chơi, không từ đồng hồ thật. Khi không áp: chế độ muốn áp lực thời gian thật, nhưng Hardspace phải thêm chế độ không giới hạn vì nhiều người không thích đồng hồ giờ giao thương 15 phút [20].

**N9. Năng lực là chìa khóa của không gian.** Metroidvania khóa vùng bằng năng lực, Boss Keys vẽ khóa và chìa trên sơ đồ để thấy người chơi phải quay lại bao nhiêu [14][25]. Trong game có căn cứ, nâng cấp mua bằng tiền là chìa: bình oxy lớn hơn mở vùng sâu hơn [7][21]. Khi không áp: chìa đặt quá xa khóa làm người chơi quên, Metroid Dread bù bằng dịch chuyển [14].

**N10. Phạt thất bại vừa đủ để giữ rủi ro có nghĩa.** Dave the Diver cạn oxy thì mất hết đồ trừ một món [16]. Moonlighter cho trả vàng để thoát khỏi dungeon giữ đồ, chết thì mất túi [19]. Stardew cho chết trong Mines thì quên vài tầng gần nhất [18]. Vì sao đúng: không có giá thì không có rủi ro, giá quá nặng thì người chơi không dám mạo hiểm. Khi không áp: chuyến dạy đầu tiên nên không phạt.

**N11. Môi trường kể chuyện bằng chính luật chơi.** Smith và Worch cho rằng người chơi tự ráp câu chuyện từ không gian, và hệ thống game có thể kể bằng phản ứng của môi trường [12]. Steve Lee đề xuất nghĩ gameplay, trình bày và truyện cùng lúc thay vì làm riêng [15]. Khi không áp: chi tiết kể chuyện không được che tín hiệu hazard hay đường bay.

## 3. Con số tham chiếu

| Số | Giá trị | Nguồn |
|---|---|---|
| Hành lang tối thiểu (3D, Unity) | khoảng 2 m, ít nhất gấp đôi bề ngang người chơi (người chơi khoảng 1,0 x 1,8 m) | [1] |
| Tầm vũ khí làm thước đo layout (Team Fortress 2) | gần 256 unit, trung 1024, xa 2048 | [1] |
| Màn hình Celeste | 320 x 180 px | [23] |
| Lưới phòng Spelunky | 4 x 4 phòng mỗi khu, đường chính chạy từ trên xuống dưới | [5][6] |
| Cỡ một phòng mẫu Spelunky | 10 x 8 ô (nguồn là bài hướng dẫn mod, chưa có lời Derek Yu) | [6] |
| Dave the Diver, số lần lặn mỗi ngày | 2 lần lặn rồi tới quán buổi tối | [16] |
| Dave the Diver, một lần lặn đáng kể | thường từ 15 phút trở lên | [16] |
| Dave the Diver, dải độ sâu Blue Hole | 0 - 50 m, 50 - 130 m, 130 - 250 m (trang dữ liệu fan, có nguồn khác ghi 50 - 100 m) | [24] |
| Subnautica: Below Zero, oxy | gốc 45, bình chuẩn +30 thành 75, bình dung tích cao thành 135, đeo bình giảm tốc bơi 0,40 m/s | [21] |
| Hardspace: Shipbreaker, giờ giao thương làm | 15 phút mỗi giờ giao thương trong chế độ chiến dịch, sau thêm chế độ không đếm ngược | [20] |
| Stardew Valley, Mines | 120 tầng, cứ 5 tầng có thang máy để quay lại | [18] |
| Moonlighter, cấu trúc dungeon | thường 3 tầng và boss (một nguồn ghi 4 tầng gồm tầng boss) | [19] |
| Left 4 Dead, trạng thái nhịp | 3 trạng thái Build Up, Peak, Relax | [3] |

## 4. Phân tích game tham chiếu

**Dave the Diver.** Làm gì: ngày chia 2 lần lặn rồi quán tối, oxy là điều kiện thua duy nhất, bị quái đánh trừ oxy, cạn thì mất hết đồ trừ một món. Blue Hole đổi nhẹ mỗi lần lặn nhưng hang ngầm cố định [16]. Vì sao hiệu quả: một tài nguyên gánh cả máu lẫn thời gian nên mọi va chạm đều là quyết định kinh tế. Người chơi tự chọn lặn ngắn lấy vài món hay lặn sâu, không bị phạt vì lặn ngắn [16]. Bài học cho Space Salvage: năng lượng bộ đồ đã gánh đúng vai này. Tầng Vành Đai Rác nên có mốc cố định (tàu, xác tàu lớn) và chỉ xáo nội dung điểm sinh. Chuyến ngắn cũng phải có lời.

**Subnautica.** Làm gì: oxy giới hạn mỗi lần lặn, biome xếp theo độ sâu, nâng cấp bình oxy và phương tiện mới đi sâu được [7][21]. Vì sao hiệu quả: không gian vừa là bản đồ vừa là cây tiến độ, người chơi nhìn thấy vùng sâu trước khi đủ sức tới. Bài học: vùng xa của tầng là cổng nâng cấp năng lượng. Cho người chơi nhìn thấy vùng xa từ vùng gần (prospect) để tạo mong muốn trước khi tới được.

**Dome Keeper.** Làm gì: hai pha rõ, đào khoáng dưới vòm trong thời gian có đếm ngược, rồi về vòm chống đợt quái. Game bắt đầu từ Ludum Dare 48 chủ đề "deeper and deeper" [22]. Vì sao hiệu quả: mỗi lần đào là một ván push your luck, đào sâu thêm thì đường về dài thêm. Bài học: biên quay về là trục áp lực chính của chuyến bay. Cần đo biên này bằng sim và cho người chơi đọc được nó.

**Stardew Valley (The Mines).** Làm gì: 120 tầng, cứ 5 tầng có thang máy, chết thì quên vài tầng gần nhất [18]. Vì sao hiệu quả: điểm lưu tiến độ trong không gian chia game dài thành các mục tiêu ngắn, phạt chết lấy đi tiến độ gần nhất chứ không lấy hết. Bài học: khi mở tầng 2 trở đi (ngoài MVP), cân nhắc điểm phóng tàu mở theo mốc thay vì luôn xuất phát từ cửa tầng.

**Hardspace: Shipbreaker.** Làm gì: tháo dỡ tàu trong giờ giao thương 15 phút, hết giờ giao thương về doanh trại dù xong hay chưa. Sau phản hồi người chơi, nhà phát triển thêm Start Trade Hour không đếm ngược [20]. Vì sao hiệu quả và chỗ hỏng: giờ giao thương ngắn hợp nhịp vào, làm, ra, nhưng đồng hồ thật làm một phần người chơi khó chịu với game tháo dỡ cần cẩn thận. Bài học: fantasy nhặt nhạnh ngoài không gian cần thời gian tỉ mỉ. Đồng hồ nên là tài nguyên bị tiêu bởi hành động (năng lượng) thay vì đếm ngược tường minh.

## 5. Sai lầm thường gặp ở team indie nhỏ

| Sai lầm | Vì sao xảy ra | Cách tránh |
|---|---|---|
| Vẽ layout đẹp trên giấy rồi mới biết tốc độ di chuyển | Làm level song song khi controller chưa xong | Metrics test map trước [1], chờ prototype jetpack |
| Đưa art vào khi blockout chưa qua playtest | Muốn có ảnh đẹp để khoe sớm | Phần lớn blockout không sống qua lần playtest đầu, chấp nhận dựng lại [17] |
| Tầng hình cây, đi tới cuối rồi quay lại đúng đường | Thêm nhánh dễ hơn nghĩ vòng | Thiết kế quanh vòng và đường tắt [10] |
| Hazard và quái mới gặp lần đầu ở chỗ nguy hiểm | Xếp nội dung theo bản đồ thay vì theo beat sheet | Teach, test, twist cho mỗi thứ mới [2] |
| Áp lực đều đều hoặc đỉnh liền đỉnh | Không vẽ intensity graph | Vẽ đồ thị cường độ, xen nghỉ sau đỉnh [2][3] |
| Xáo map hoàn toàn để tăng chơi lại | Tưởng ngẫu nhiên là nội dung miễn phí | Giữ mốc cố định, xáo trong khung [5][16] |
| Đồng hồ đếm ngược thật trong game cần tỉ mỉ | Bê cơ chế áp lực từ game hành động | Cho đồng hồ chạy theo hành động [8], xem bài học Hardspace [20] |
| Phạt thất bại quá nặng hoặc không phạt | Không đặt giá rủi ro theo ý đồ | Mất một phần, giữ một phần, như Dave the Diver, Stardew [16][18] |
| Chi tiết môi trường che tín hiệu gameplay | Art và level làm tách rời | Nghĩ gameplay, trình bày, truyện cùng lúc [15] |

## 6. Nguồn

| # | Nguồn | Loại | Link |
|---|---|---|---|
| 1 | The Level Design Book, Blockout / Metrics | Sách online | https://book.leveldesignbook.com/process/blockout/metrics |
| 2 | The Level Design Book, Pacing | Sách online | https://book.leveldesignbook.com/process/preproduction/pacing |
| 3 | Michael Booth, "The AI Systems of Left 4 Dead", GDC 2009 | Slide GDC | https://cdn.fastly.steamstatic.com/apps/valve/2009/ai_systems_of_l4d_mike_booth.pdf |
| 4 | Christopher Totten, "An Architectural Approach to Level Design", 2nd ed. | Sách | https://www.routledge.com/An-Architectural-Approach-to-Level-Design/Totten/p/book/9780815361367 |
| 5 | Game Maker's Toolkit, "How (and Why) Spelunky Makes its Own Levels" | Video, bản chữ | https://amara.org/videos/p6MHlmreohsY/en-gb/3101319 |
| 6 | Darius Kazemi, "Tutorial: Modding Spelunky's Level Generator" | Bài viết | https://www.tinysubversions.com/2010/01/tutorial-modding-spelunkys-level-generator/index.html |
| 7 | Charlie Cleveland, "The Design of Subnautica", GDC 2019 | GDC talk | https://gdconf.com/news/dive-deep-design-subnautica-gdc-2019 |
| 8 | Slant Magazine, review Dredge (thời gian chỉ trôi khi hành động) | Bài review | https://www.slantmagazine.com/games/dredge-review-stuck-in-the-shallow-end/ |
| 9 | Dan Taylor, "Ten Principles for Good Level Design", GDC 2013 | GDC talk | https://gdcvault.com/play/1017803/contactUs |
| 10 | Joris Dormans, cyclic dungeon generation trong Unexplored | Bài viết | https://gamedeveloper.com/design/unexplored-s-secret-cyclic-dungeon-generation- |
| 11 | Engadget, phân tích kishōtenketsu trong Super Mario 3D World | Bài viết | https://www.engadget.com/2015/03/17/super-mario-3d-world-design/ |
| 12 | Harvey Smith, Matthias Worch, "What Happened Here? Environmental Storytelling", GDC 2010 | GDC talk | https://www.gdcvault.com/play/1012647 |
| 13 | Lisa Brown, "Applying 3D Level Design Skills to the 2D World of Hyper Light Drifter", GDC 2017 | GDC talk | https://gdcvault.com/play/1024433/contactUs |
| 14 | Game Maker's Toolkit, "Why You Didn't Get Lost in Metroid Dread" (Boss Keys) | Video, bản chữ | https://amara.org/subtitles/Aci4iDbgsAtY/en/1/download/Why%20You%20Didnt%20Get%20Lost%20in%20Metroid%20Dread.en.txt |
| 15 | Steve Lee, "An Approach to Holistic Level Design", GDC 2017 | GDC talk | https://gdcvault.com/play/1024301/contactUs |
| 16 | Naavik, "Dave the Diver: Nexon's Approach to Fun First" | Phân tích | https://naavik.co/deep-dives/dave-the-diver-nexons-approach-to-fun-first/ |
| 17 | The Level Design Book, Blockout | Sách online | https://book.leveldesignbook.com/process/blockout |
| 18 | Stardew Valley Wiki, The Mines | Wiki | https://stardewvalleywiki.com/The_Mines |
| 19 | Nintendo Life, review Moonlighter | Bài review | https://www.nintendolife.com/reviews/nintendo-switch/moonlighter |
| 20 | PC Gamer, "Hardspace: Shipbreaker is adding a new mode with no time limit" | Bài viết | https://pcgamer.com/hardspace-shipbreaker-is-adding-a-new-mode-with-no-time-limit |
| 21 | Subnautica Wiki, Standard O₂ Tank (Below Zero) | Wiki | https://subnautica.fandom.com/wiki/Standard_O%E2%82%82_Tank_(Below_Zero) |
| 22 | Game Developer, "How Dome Keeper focuses on systems that feed into one another" và Wikipedia Dome Keeper | Phỏng vấn, wiki | https://www.gamedeveloper.com/road-to-igf-2023/how-dome-keeper-focuses-on-systems-that-feed-into-one-another và https://en.wikipedia.org/wiki/Dome_Keeper |
| 23 | Noel Berry, "Remaking Celeste's Lighting" | Bài viết | https://www.noelberry.giờ giao thương/posts/celeste_lighting |
| 24 | MeowDB, Dave the Diver Blue Hole Area & Depth | Trang dữ liệu fan | https://meowdb.com/db/dave-the-diver/blue-hole |
| 25 | Boris the Brave, "Lock and Key Dungeons" | Bài viết | https://www.boristhebrave.com/2021/02/27/lock-and-key-dungeons |
| 26 | Game Developer, postmortem "Trawling in the deep: How Black Salt Games made Dredge" | Postmortem | https://www.gamedeveloper.com/design/trawling-in-the-deep-how-black-salt-games-made-spooky-fishing-rpg-i-dredge-i- |
