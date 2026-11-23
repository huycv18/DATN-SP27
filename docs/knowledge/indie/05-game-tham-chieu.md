# Game tham chiếu: cấu trúc hai vòng

Kho tri thức chung cho mọi vai. Phân tích 8 game có hai vòng nối nhau: một vòng hành động hoặc thu thập, một vòng quản lý, chế biến hoặc bán. Chỉ lấy cấu trúc, không chép luật, không lấy asset (nguyên tắc 5 trong `CLAUDE.md`).

Cách đọc: mỗi game một bảng cùng hàng, sau đó là bài học cho Space Salvage. Mã [Sx] trỏ tới mục Nguồn cuối file. Ô ghi "chưa có nguồn" là chưa tìm được, không đoán. Ghi chú "(chơi trực tiếp)" là mô tả cơ chế phổ biến chưa có link dẫn.

## 1. Dave the Diver (Mintrocket, 2023)

| Mục | Nội dung |
|---|---|
| Core loop | Ban ngày lặn ở Blue Hole, bắn lao và bắt cá trong giới hạn oxy. Tối phục vụ quán sushi cùng đầu bếp Bancho, lấy vàng mở công thức và thuê nhân viên. Vàng nâng cấp đồ lặn [S2] |
| Nối hai vòng | Cá bắt ban ngày là nguyên liệu món ban đêm. Quán thành công mở thêm tính năng mới [S2] |
| Economy | Một loại tiền chính (vàng) đi vào nâng cấp đồ lặn và quán [S2] |
| Nhịp ngày | Oxy vừa là máu vừa là thời gian, bị quái đánh thì oxy tụt nhanh hơn. Hết oxy thì chuyến lặn kết thúc và chỉ giữ được một món [S2] |
| Team và thời gian | Bắt đầu 2017 từ prototype tên *Dave*, Early Access 10/2022, bản đủ 28/06/2023 [S2]. Khoảng 27 người lúc ra mắt [S3], studio sau đó khoảng 60 người [S4]. Unity [S1] |
| Được khen | Metacritic 90 (PC), IGN 9/10, PC Gamer 91. Pha trộn thám hiểm và quản lý được khen nhiều nhất [S2]. Bán hơn 1 triệu bản trong 10 ngày, hơn 5 triệu tới 11/2024 [S2] |
| Bị chê | Gần như không có chê về gameplay. Tranh cãi chính là được đề cử hạng mục indie dù thuộc Nexon [S2] |
| Ghi chú làm game | Làm lõi bắn lao và kéo cá trước, quán sushi sau. Quán ban đầu định chạy tự động sau khi đặt thực đơn, sau đổi sang điều khiển tay và chỉ mở ban đêm để chặt nhịp [S1]. Chia lập trình viên theo khu vực game (quán, biển, nông trại) [S1]. Thử sinh map thủ tục rồi bỏ vì độ vui chênh nhau quá nhiều giữa các lượt [S5]. Hệ thống dạy qua cốt truyện thay vì tutorial, mở dần từng hệ thống [S1] |

Bài học cho Space Salvage:
- Năng lượng bộ đồ vừa là máu vừa là thời gian chuyến bay là cùng cấu trúc oxy của Dave, đã chứng minh được. Hình phạt hết năng lượng phải đau nhưng không xóa sạch chuyến (Dave giữ lại một món). Phí cứu hộ cộng nợ cần sim để không thành vòng xoáy nợ.
- Làm prototype jetpack và thu nhặt trước (GD-002), quán sau. Giờ giao thương tối phải có thao tác tay, không chạy tự động, nếu không nửa quán thành màn hình chờ.
- Tầng không gian nên dựng tay cho MVP. Dave đã bỏ sinh thủ tục vì độ vui không đều.

## 2. Moonlighter (Digital Sun, 2018)

| Mục | Nội dung |
|---|---|
| Core loop | Ban ngày bán hàng ở cửa tiệm, tối vào 4 dungeon (Golem, Forest, Desert, Tech) đánh quái lấy loot [S6] |
| Nối hai vòng | Loot dungeon là hàng bán. Tiền bán đầu tư vào thị trấn (lò thuốc, thợ rèn, người bán hộ) và đồ để vào dungeon sâu hơn [S6] |
| Economy | Người chơi tự đặt giá, đọc nét mặt khách và ghi sổ để dò giá đúng. Tủ kính bán gần gấp đôi [S7] |
| Nhịp ngày | Ngày bán, đêm dungeon. Rời dungeon giữa chừng mất vàng [S7] |
| Team và thời gian | Chưa có nguồn. Unity, phát hành 29/05/2018 bởi 11 bit studios [S6] |
| Được khen | OpenCritic 78% đề xuất [S6], PC Gamer 78 [S9]. Bán hàng làm dungeon không nhàm, dungeon xếp lại mỗi lần vào, thử thách công bằng [S7] |
| Bị chê | Dò giá đầu game nhiều phỏng đoán, cốt truyện mỏng, có lỗi hiệu năng [S7]. Phần sau (Moonlighter 2) bỏ việc đặt giá lắt nhắt, thay bằng token khi mặc cả [S8] |

Bài học cho Space Salvage:
- Cơ chế dò giá ẩn là điểm vừa đặc trưng vừa gây khó chịu, chính studio đã bỏ ở phần sau. Giá món ở quán nên công khai hoặc có sổ ghi rõ, phần kỹ năng đặt vào chế món và phục vụ.
- Hình phạt rút sớm (mất vàng) tạo quyết định "về hay ở". Phí cứu hộ của mình cùng vai trò, cần giữ một lựa chọn về sớm an toàn.

## 3. Stardew Valley (ConcernedApe, 2016)

| Mục | Nội dung |
|---|---|
| Core loop | Dọn đất, trồng cây theo mùa, tưới mỗi ngày, nuôi thú, xuống mỏ đánh quái và luyện quặng, giao hàng vào bó Community Center để mở khu mới [S10] |
| Nối hai vòng | Mỏ (hành động) cấp quặng nâng công cụ cho nông trại. Nông sản cấp tiền và thức ăn hồi năng lượng [S10] |
| Economy | Bán nông sản lấy tiền, tiêu vào hạt giống, công cụ, chuồng trại (chơi trực tiếp) |
| Nhịp ngày | Mỗi ngày đầy thanh năng lượng, làm việc tiêu năng lượng, ăn để hồi. Năm 4 mùa, mỗi mùa 28 ngày [S10] |
| Team và thời gian | Một người (Eric Barone) làm khoảng 5 năm, tự làm art, nhạc, âm thanh. C# trên XNA, sau chuyển MonoGame [S10] |
| Được khen | Metacritic PC 89, OpenCritic 99% đề xuất. Khen vòng nông trại, tính cách dân làng, pixel art, nhạc [S10]. Hơn 50 triệu bản tới 02/2026 [S10] |
| Bị chê | Đầu game lặp, tutorial mỏng, combat đơn giản, không có di chuyển nhanh, điều khiển chưa chính xác [S10] |

Bài học cho Space Salvage:
- Hai đồng hồ tách bạch (năng lượng và giờ trong ngày) cho phép người chơi tự chia ngày. Space Salvage gộp hai thứ vào năng lượng bộ đồ, nên ngoài không gian chỉ có một áp lực, đơn giản hơn nhưng phải bù bằng quyết định ở quán.
- Lời chê "đầu game lặp, tutorial mỏng" là rủi ro trực tiếp cho MVP chơi trọn 1 ngày: ngày 1 phải chạm đủ mọi hệ thống, việc của gd-ux.

## 4. Hardspace: Shipbreaker (Blackbird Interactive, 2022)

| Mục | Nội dung |
|---|---|
| Core loop | Tháo dỡ tàu bỏ hoang trong không trọng lực bằng dây kéo, dao cắt laser, máy quét. Kiếm tiền trả món nợ 1,2 tỷ cho Lynx Corporation [S11] |
| Nối hai vòng | Mỗi lần làm xong nhận Lynx Token để nâng cấp và sửa công cụ. Lệnh việc nâng hạng chứng chỉ, mở công cụ và nhiệm vụ khó hơn [S11] |
| Economy | Hai lớp: tiền trừ nợ và token nâng cấp. Người chơi còn phải lo oxy và nhiên liệu đẩy [S11] |
| Nhịp ngày | Nhiệm vụ ban đầu có giới hạn thời gian, về sau thêm chế độ Start Trade Hour bỏ giới hạn [S11] |
| Team và thời gian | Từ game jam nội bộ sau 2016. Early Access 16/06/2020, bản đủ 24/05/2022. Unity [S11]. Số người chưa có nguồn |
| Được khen | PC Gamer 91, khen gameplay và chủ đề lao động. Destructoid khen chơi lại nhiều [S11]. Lời thoại đồng nghiệp trong lúc làm làm công trường sống động [S12] |
| Bị chê | IGN 6/10 vì tiến trình cố ý chậm, lê thê. Có người chê say không trọng lực và lặp [S11] |
| Ghi chú làm game | Khuyên nhân đôi độ trễ lịch cho Early Access. Phản hồi người chơi chậm, để tính năng bị ghét (cut guards) qua vài bản mới gỡ. Cắt hệ thống thuê NPC, chỉ giữ bản nhỏ là sửa tàu cá nhân [S12] |

Bài học cho Space Salvage:
- Fantasy tháo dỡ hay nhờ vật thể nguy hiểm khi cắt sai (dây điện, ống làm mát nổ) [S11]. Cắt plasma của mình nên có một hai điểm cắt sai gây hậu quả, không chỉ là thanh máu vật thể.
- Đồng hồ thời gian cứng bị người chơi phản đối đủ để studio thêm chế độ bỏ giới hạn. Năng lượng bộ đồ là đồng hồ, cần đo bằng sim và playtest để không thành áp lực khó chịu.
- Món nợ lớn làm động cơ, nhưng tiến trình chậm bị chê. Đường cong ₵ theo ngày phải có nâng cấp đầu tiên sớm.

## 5. Spiritfarer (Thunder Lotus, 2020)

| Mục | Nội dung |
|---|---|
| Core loop | Đi thuyền giữa các đảo, thu nguyên liệu, xây phòng trên thuyền theo lưới ô, nấu ăn và làm nhiệm vụ cho các linh hồn, đưa họ qua Everdoor [S13] |
| Nối hai vòng | Thu thập và mini-game cấp nguyên liệu và tiền. Xây thuyền và nấu ăn phục vụ nhu cầu linh hồn, linh hồn mở truyện [S13] |
| Economy | Tiền từ mini-game, mua hạt giống và nguyên liệu ở người bán, có món linh hồn yêu cầu [S13] |
| Nhịp ngày | Chưa có nguồn cụ thể. Chuyển mùa đã bị cắt, trồng trọt bị thu nhỏ so với ý tưởng sim ban đầu [S13] |
| Team và thời gian | Chưa có nguồn số người. Unity, khoảng 90.000 chữ truyện linh hồn [S13]. Một tháng nghiên cứu cơ sở chăm sóc cuối đời [S13] [S14] |
| Được khen | Metacritic 84, IGN 9/10. Khen nhịp chậm, hoạt họa, nhạc, chiều sâu cảm xúc [S13]. Hơn 1 triệu bản tới 12/2021 [S13] |
| Bị chê | IGN thấy đi lại nhiều lần mệt và nhiệm vụ lặp [S13] |
| Ghi chú làm game | Cơ chế ôm được đặt làm trung tâm để biến chăm sóc thành thao tác [S14] |

Bài học cho Space Salvage:
- Phần quản lý phục vụ cảm xúc với nhân vật thì người chơi chịu được lặp lâu hơn. Khách ngoài hành tinh ở quán nên có yêu cầu và mạch truyện ngắn theo ngày, không chỉ là hàng đợi đơn.
- Cắt sớm hệ thống không phục vụ lõi (mùa, trồng trọt) là cách team nhỏ giữ phạm vi. Bám mốc MVP theo cùng tinh thần.

## 6. Potion Craft: Alchemist Simulator (niceplay games, 2022)

| Mục | Nội dung |
|---|---|
| Core loop | Mỗi ngày một số khách cố định tới tiệm. Nghiền nguyên liệu, trộn vào vạc, đường đi trên bản đồ quyết định hiệu ứng thuốc. Bán, mặc cả bằng mini-game, mua nguyên liệu [S15] |
| Nối hai vòng | Vườn cho hái một lượng nguyên liệu giới hạn mỗi ngày. Tiền bán mua thêm nguyên liệu và ghi công thức mới [S15] |
| Economy | Mặc cả quyết định giá. Danh tiếng bị trừ khi đưa sai thuốc hoặc đuổi khách [S15] |
| Nhịp ngày | Ngày hết khi phục vụ hoặc từ chối hết khách. Tiến trình 10 chương [S15] |
| Team và thời gian | Studio nhỏ, chưa có nguồn số người. Early Access 21/09/2021, bản đủ 13/12/2022. Unity [S15] |
| Được khen | RPS gọi là hệ thống chế tạo hay nhất, khen trực quan và sâu, nhịp thư thả [S15]. Khoảng 100.000 bản trong 3 ngày đầu [S16] |
| Bị chê | Wikipedia không ghi lời chê đáng kể [S15] |

Bài học cho Space Salvage:
- Chế tạo hay khi bản thân thao tác chế là một câu đố có không gian (bản đồ vạc), không phải bấm nút chờ. Chế món và đồ độ ở quán nên có một thao tác nhỏ có kỹ năng.
- Số khách cố định mỗi ngày và danh tiếng là cách đơn giản để giới hạn một ngày ở quán, hợp với MVP 2 loài khách.

## 7. Dome Keeper (Bippinbits, 2022)

| Mục | Nội dung |
|---|---|
| Core loop | Đào xuống lấy 3 tài nguyên (sắt, nước, cobalt), mang về mái vòm, thường kịp khoảng 2 chuyến trước khi hết giờ đợt quái. Tiêu tài nguyên nâng mũi khoan, sức chở, tốc độ, máu và vũ khí mái vòm. Đánh đợt quái rồi lặp lại [S18] |
| Nối hai vòng | Tài nguyên đào được là tiền nâng cấp cả phần đào lẫn phần thủ, phải chia giữa hai bên [S18] |
| Economy | Tài nguyên khan hiếm, nhiều nâng cấp bắt buộc làm số build khả thi hẹp [S18] |
| Nhịp ngày | Đồng hồ đợt quái là áp lực chính, buộc quyết định quay về [S18] |
| Team và thời gian | 2 người (code và design, art), thuê nhạc ngoài. Khoảng 6 tháng bán thời gian từ bản game jam rồi 8 tháng toàn thời gian. Trước đó làm 14 game nhỏ [S17] |
| Được khen | Dễ hiểu, hợp phiên ngắn, đủ biến thể [S18]. Demo có thời gian chơi trung vị khoảng 1 giờ 30, hơn 1 triệu USD tuần đầu [S17]. Metacritic 76 [S19] |
| Bị chê | Đoán trước được sau vài lượt, cách đào tối ưu lộ rõ, quái ít loại, phần thủ đầu game dễ [S18] |

Bài học cho Space Salvage:
- Sức chở giới hạn cộng đồng hồ tạo quyết định "chuyến này về hay đào thêm" rõ nhất trong nhóm game này. Khoang hàng giới hạn ô cộng năng lượng bộ đồ là cùng cặp, sim nên đo số chuyến về tàu trong một ngày.
- Lời chê lớn nhất là lặp vì cách tối ưu lộ rõ. Bố trí salvage và quái ở tầng cần đủ biến thể giữa các ngày dù map dựng tay.
- Team 2 người làm xong nhờ phạm vi rất hẹp và nhiều game jam trước đó. Phạm vi MVP của mình nên giữ cỡ tương tự.

## 8. Cult of the Lamb (Massive Monster, 2022)

| Mục | Nội dung |
|---|---|
| Core loop | Chạy dungeon kiểu rogue-lite săn boss, về làng quản lý giáo phái: thu nạp tín đồ, làm nghi lễ, giảng đạo [S20] |
| Nối hai vòng | Hai nửa nuôi nhau. Nhà phát triển nói khi một nửa yếu thì cả game đổ [S20] |
| Economy | Tim, vàng, đức tin, đói. Hiến tế tín đồ cho lên cấp ngay [S20] |
| Nhịp ngày | Làng vẫn chạy khi người chơi ở ngoài [S20]. Chưa có nguồn chi tiết hơn |
| Team và thời gian | 3 người cốt lõi ở 3 nước. Khoảng 9 tháng tìm chủ đề, rồi khoảng 3 năm lặp [S20] |
| Được khen | Chưa mở review trong lượt này |
| Bị chê | Chưa mở review trong lượt này |
| Ghi chú làm game | Chọn chủ đề rồi đặt 3 pillar, mọi quyết định phải phục vụ ít nhất một pillar, cắt ý hay nếu không phục vụ. Game tự nghiêng về phía người chơi đang thua (ít máu thì dễ rơi tim) [S20] |

Bài học cho Space Salvage:
- Cả hai nửa phải đủ hay để đứng riêng. Quán không được là màn hình bán hàng phụ của chuyến bay, và ngược lại.
- Cân bằng ngầm hỗ trợ người đang thua là kỹ thuật rẻ cho team nhỏ, cân nhắc cho rơi năng lượng khi bộ đồ gần cạn.

## 9. Bảng so sánh

| Game | Vòng hành động | Vòng quản lý | Đồng hồ giới hạn chuyến | Hình phạt thất bại | Tiền và sink chính | Team / thời gian | Bài học số 1 |
|---|---|---|---|---|---|---|---|
| Dave the Diver | Lặn, bắn lao, bắt cá | Quán sushi ban đêm, điều khiển tay | Oxy (cũng là máu) | Chỉ giữ 1 món | Vàng vào đồ lặn và quán | Khoảng 6 năm từ prototype, khoảng 27 người | Một chỉ số vừa máu vừa giờ hoạt động tốt |
| Moonlighter | Dungeon ban đêm | Cửa tiệm ban ngày, tự đặt giá | Chưa có nguồn | Rời sớm mất vàng | Vàng vào thị trấn và đồ | Chưa có nguồn | Dò giá ẩn gây khó chịu, phần sau đã bỏ |
| Stardew Valley | Mỏ, đánh quái | Nông trại, dân làng | Năng lượng và giờ trong ngày | Chưa dẫn trong file này | Tiền bán nông sản | 1 người, khoảng 5 năm | Ngày đầu phải chạm đủ hệ thống |
| Hardspace: Shipbreaker | Cắt, tháo tàu không trọng lực | Nâng cấp bằng token, trả nợ | Giới hạn giờ giao thương, sau có Start Trade Hour | Chưa dẫn trong file này | Token vào công cụ, tiền trừ nợ | Từ jam, EA 2 năm | Đồng hồ cứng cần lối thoát |
| Spiritfarer | Thu thập, mini-game | Xây thuyền, chăm linh hồn | Chưa có nguồn | Không có thất bại cứng (chơi trực tiếp) | Tiền mua hạt và nguyên liệu | Chưa có nguồn | Quản lý gắn cảm xúc thì chịu lặp lâu |
| Potion Craft | Hái vườn giới hạn mỗi ngày | Chế thuốc trên bản đồ, bán, mặc cả | Số khách mỗi ngày | Mất danh tiếng | Tiền vào nguyên liệu, công thức | EA khoảng 15 tháng | Thao tác chế phải có kỹ năng |
| Dome Keeper | Đào, mang tài nguyên về | Nâng cấp, thủ mái vòm | Đồng hồ đợt quái | Mất mái vòm là hết lượt (chơi trực tiếp) | Sắt, nước, cobalt vào nâng cấp | 2 người, khoảng 14 tháng | Sức chở cộng đồng hồ tạo quyết định về tàu |
| Cult of the Lamb | Dungeon rogue-lite | Quản lý giáo phái | Chưa có nguồn | Chưa dẫn trong file này | Tim, vàng, đức tin | 3 người cốt lõi, khoảng 4 năm | Một nửa yếu là cả game đổ |

Điểm chung rút ra cho Space Salvage:
- 5 trên 8 game dùng một tài nguyên vừa giới hạn chuyến vừa là rủi ro (oxy, năng lượng, đợt quái, giờ giao thương, số khách). Năng lượng bộ đồ đúng hướng, phần cần chứng minh là số bằng sim.
- Lời chê lặp lại nhiều nhất là lặp và tiến trình chậm (Stardew, Hardspace, Spiritfarer, Dome Keeper). Đường cong ₵ ngày 1 đến ngày 3 là điểm phải đo trước.
- Hình phạt thất bại đều giữ lại một phần thành quả, không xóa sạch. Phí cứu hộ và nợ của mình cần cùng tinh thần.

## Nguồn

- [S1] Software Engineering Daily, phỏng vấn Jaeho Hwang và Minsuk Cha: https://softwareengineeringdaily.com/articles/developing-dave-the-diver-with-jaeho-hwang-and-minsuk-cha/
- [S2] Wikipedia, Dave the Diver: https://en.wikipedia.org/wiki/Dave_the_Diver
- [S3] Game World Observer, tối ưu đồ họa Dave the Diver: https://gameworldobserver.com/2023/12/04/dave-the-diver-unity-2d-3d-graphics-optimization-mintrocket
- [S4] Automaton, studio 60 người: https://automaton-media.com/en/news/dave-the-diver-creator-working-on-three-new-titles-with-60-person-studio-plans-to-expand-dave-the-diver-into-a-franchise/
- [S5] eXputer, phỏng vấn nội dung bị cắt: https://exputer.com/?p=439812
- [S6] Wikipedia, Moonlighter: https://en.wikipedia.org/wiki/Moonlighter_(video_game)
- [S7] RPG Site, review Moonlighter: https://rpgsite.net/review/7210-moonlighter-review
- [S8] PC Gamer, demo Moonlighter 2: https://www.pcgamer.com/games/roguelike/moonlighter-2-perfectly-refines-and-streamlines-the-first-games-engrossing-shopkeeper-rpg-formula-and-its-got-a-free-demo-you-can-try-right-now/
- [S9] PC Gamer, review Moonlighter (78): https://www.pcgamer.com/uk/moonlighter-review
- [S10] Wikipedia, Stardew Valley: https://en.wikipedia.org/wiki/Stardew_Valley
- [S11] Wikipedia, Hardspace: Shipbreaker: https://en.wikipedia.org/wiki/Hardspace:_Shipbreaker
- [S12] Game Developer, bài học Early Access của Hardspace: https://www.gamedeveloper.com/game-platforms/hardspace-shipbreaker-is-taking-flight-here-s-what-its-devs-learned-in-early-access
- [S13] Wikipedia, Spiritfarer: https://en.wikipedia.org/wiki/Spiritfarer
- [S14] Game Developer, thiết kế Spiritfarer: https://gamedeveloper.com/design/inside-the-thoughtful-design-of-thunder-lotus-i-spiritfarer-i-
- [S15] Wikipedia, Potion Craft: https://en.wikipedia.org/wiki/Potion_Craft:_Alchemist_Simulator
- [S16] Gamespress, Potion Craft 100 nghìn bản 3 ngày: https://gamespress.com/Potion-Craft-sells-100k-copies-in-the-first-three-days
- [S17] How To Market A Game, Dome Keeper ra mắt 1 triệu USD: https://howtomarketagame.com/2022/10/17/how-dome-keeper-achieved-a-million-dollar-launch/
- [S18] Shacknews, review Dome Keeper: https://shacknews.com/article/132448/dome-keeper-review
- [S19] Metacritic, Dome Keeper PC: https://legacy.prod.metacritic.com/game/pc/dome-keeper/critic-reviews
- [S20] Unity Blog, công thức của Cult of the Lamb: https://unity.com/blog/en/games/recipe-behind-smash-hit-cult-of-the-lamb
