# 00 - Nền tảng thiết kế game (chung cho mọi vai)

Kiến thức nền, không phải quy trình. Quy trình nằm ở `docs/playbooks/indie/`. Số của game nằm ở Sheet GDD và `projects/space-salvage/so-hien-hanh.md`, file này không chốt số nào cho game.
Mã nguồn trong ngoặc vuông, ví dụ [S1], trỏ tới mục 6.

## 1. Khái niệm lõi và thuật ngữ

| Thuật ngữ | Định nghĩa một dòng | Áp vào Space Salvage |
|---|---|---|
| MDA (Mechanics, Dynamics, Aesthetics) | Ba lăng kính nối nhân quả: luật sinh ra hành vi hệ thống, hành vi sinh ra cảm xúc người chơi [S1] | Mỗi GDD hệ thống ghi cả ba tầng: luật jetpack, hành vi bay khi đầy khoang hàng, cảm giác căng khi nhiên liệu cạn |
| Mechanics | Luật, dữ liệu, thuật toán ở mức thành phần [S1] | Lực đẩy, quán tính, sát thương cắt, thời gian choáng, sức chứa lưới |
| Dynamics | Hành vi lúc chạy khi người chơi tác động vào luật [S1] | Người chơi chọn liều thêm một sinh vật hay quay về quán |
| Aesthetics | Cảm xúc mong muốn, MDA liệt kê 8 loại: Sensation, Fantasy, Narrative, Challenge, Fellowship, Discovery, Expression, Submission [S1] | Ứng viên chính: Challenge (bay và bắt), Discovery (tầng), Submission (nhịp quán thư giãn), Fantasy (người nhặt rác cyberpunk) |
| Design pillar | 3 đến 5 câu về trải nghiệm, dùng làm bộ lọc tính năng [S9][S10] | Pillar do Lead chốt, mọi đề xuất phải trả lời "phục vụ pillar nào" |
| Core loop | Chuỗi hành động lặp ngắn nhất tạo ra giá trị [S11][S12] | Bay ra tầng, nhặt, cắt, choáng và bắt bằng lưới, quay về |
| Meta loop | Vòng dài cho lý do quay lại core loop: tiến trình, mở khóa [S11][S12] | Bán món lấy ₵, mua nâng cấp và đồ độ, bay xa hơn |
| Mid loop | Lớp giữa giữa core và meta, một số tài liệu tách riêng, số khác gộp [S11] | Một ngày: chuyến bay ban ngày cộng giờ giao thương quán ban tối |
| SDT (Self-Determination Theory) | Động lực bền đến từ thỏa mãn 3 nhu cầu Competence, Autonomy, Relatedness [S3] | Thước đo cho từng hệ thống, xem nguyên lý 3 |
| Competence | Cảm giác mình giỏi lên và kiểm soát được [S3] | Bay mượt hơn, bắt nhanh hơn qua từng ngày |
| Autonomy | Cảm giác được chọn có nghĩa [S3] | Chọn đường bay, chọn món, chọn nâng cấp |
| Relatedness | Cảm giác gắn với người khác, kể cả NPC [S3] | Quan hệ với 2 loài khách và NPC ở quán |
| Bartle types | 4 kiểu người chơi MUD: Achiever, Explorer, Socialiser, Killer, trên 2 trục action / interaction và world / player [S5] | Game đơn offline nên chỉ dùng trục "world": Achiever và Explorer |
| Gamer Motivation Model | 12 động lực của Quantic Foundry từ factor analysis khảo sát lớn [S6][S7] | Dùng chọn động lực mục tiêu khi viết pillar, không dùng làm phân khúc thị trường |
| Flow | Trạng thái tập trung khi thử thách khớp kỹ năng, lệch lên là lo, lệch xuống là chán [S8] | Độ khó tầng và độ dồn khách ở quán phải tăng theo kỹ năng |
| DDA / Active DDA | Tự chỉnh độ khó theo người chơi, bản Active giao lựa chọn độ khó cho người chơi qua hành động trong game [S8][S9b] | Người chơi tự chọn bay sâu hơn hay ở vùng gần, không cần thanh độ khó |
| Risk / reward | Lựa chọn đổi an toàn lấy phần thưởng lớn hơn [S13][S14] | Ở lại thêm khi nhiên liệu thấp để bắt sinh vật giá cao |
| Push your luck | Dạng risk / reward: tích lũy rồi chọn chốt hay liều tiếp, liều hỏng mất phần chưa chốt [S14] | Khoang hàng chưa về quán là phần "chưa chốt" |
| Interesting decision | Lựa chọn có đánh đổi thật, không có đáp án hiển nhiên [S13] | Kiểm từng màn: shop, nâng cấp, chọn món có đánh đổi không |
| Game feel | Điều khiển thời gian thực vật thể ảo trong không gian mô phỏng, được polish nhấn mạnh [S15] | Jetpack quán tính là hệ thống feel chính của game |
| Juice / polish | Phản hồi nghe nhìn thêm vào tương tác, không đổi luật nhưng đổi cảm nhận [S15][S16] | Rung màn khi cắt, hạt khi choáng, tiếng lưới khép |
| Scope / feature creep | Phạm vi dự án, và việc phạm vi phình dần ngoài kế hoạch [S17][S18] | Mọi thứ ngoài MVP vào backlog |
| MVP | Bản nhỏ nhất chơi trọn vòng lõi để kiểm giả thuyết thiết kế [S19] | 1 tầng, 3 quái, 7 công thức, 2 loài khách, chơi trọn 1 ngày |
| Playtest | Cho người chơi thật chơi để kiểm giả thuyết, quan sát hơn hỏi [S20][S21][S22] | Có build thì gd-qa chạy `/playtest`, trước đó thử bằng prototype |
| Playcentric | Đưa người chơi vào quy trình từ ý tưởng tới hoàn thành, thử sớm và lặp [S22] | Prototype jetpack và giờ giao thương quán trước khi viết GDD chi tiết |

## 2. Nguyên lý

**N1. Thiết kế từ Aesthetics ngược về Mechanics.** Người chơi gặp game từ phía Aesthetics, designer chỉ chạm được Mechanics, nên phải chọn cảm xúc đích trước rồi dò luật [S1]. Không áp cứng khi đang thử một mechanic mới chưa rõ cảm xúc, lúc đó prototype trước rồi gọi tên Aesthetics sau. MDA bị phê bình là bỏ qua phần hình ảnh, âm thanh và truyện [S2], nên đừng coi MDA là đủ.
Áp vào Space Salvage: mỗi GDD hệ thống mở đầu bằng câu Aesthetics đích, ví dụ "giờ giao thương quán là Submission có chút Challenge".

**N2. Pillar là bộ lọc, không phải khẩu hiệu.** Pillar ít (3 đến 5), nói về trải nghiệm chứ không về tính năng, và dùng để gạt tính năng [S9][S10]. Đổi pillar giữa chừng chỉ khi playtest chứng minh pillar sai [S10b].
Áp vào Space Salvage: GDM giữ pillar ở ONE PAGE, gd-qa dùng câu "phục vụ pillar nào" khi chấm.

**N3. Động lực bền đến từ nhu cầu tâm lý, không từ phần thưởng bề mặt.** Nghiên cứu SDT cho thấy sức kéo của game phần lớn đến từ Competence, Autonomy, Relatedness, và các nhu cầu này dự báo mức thích thú [S3]. Bạo lực thêm rất ít vào sự thích thú khi đã tính Competence và Autonomy [S4]. Không áp được để đo một game cụ thể mà không có playtest, đây là lăng kính, không phải công thức.
Áp vào Space Salvage: combat cắt và choáng phải tạo Competence (làm chủ), không cần tăng máu me để hấp dẫn hơn.

**N4. Taxonomy người chơi là bản đồ, không phải khách hàng.** Bartle sinh ra từ MUD nhiều người và chính ông ghi người chơi trôi giữa 4 kiểu theo tâm trạng [S5]. Quantic Foundry đo 12 động lực theo thang liên tục, một người cao hay thấp ở từng động lực độc lập [S6][S7]. Không áp Bartle cho game đơn offline ở trục Socialiser và Killer.
Áp vào Space Salvage: chọn 2 đến 3 động lực đích (gợi ý ứng viên: Discovery, Completion, Design), Lead chốt.

**N5. Core loop phải tự đứng được trước khi thêm meta.** Meta loop chỉ khuếch đại một core loop đã vui, core loop yếu thì thêm hệ thống không cứu được [S11][S12]. Meta tốt cho người chơi sức mạnh để quay lại core loop ở mức khó hơn [S12].
Áp vào Space Salvage: kiểm một chuyến bay không có nâng cấp vẫn vui, rồi mới cân ₵ và nâng cấp.

**N6. Flow cần đường tăng độ khó và lối cho người chơi tự chỉnh.** Chen đề xuất giao lựa chọn độ khó vào hành động trong game để người chơi tự giữ mình trong vùng flow mà không thoát nhịp [S8][S9b]. Phê bình: chỉnh độ khó cho từng người có giới hạn, người chơi vẫn phải tự điều chỉnh [S8b]. Không áp khi game cần một thử thách cố định có chủ đích.
Áp vào Space Salvage: độ sâu trong tầng là núm chỉnh độ khó tự nhiên, gần trạm dễ, xa trạm khó và giá cao.

**N7. Quyết định thú vị cần đánh đổi thật.** Meier xem game là chuỗi quyết định thú vị, nhấn đánh đổi, ngắn hạn và dài hạn, và lưu ý thứ thú vị làm một lần chưa chắc thú vị khi làm mười lần [S13]. Risk / reward kiểu push your luck làm mỗi lựa chọn có trọng lượng [S14]. Không áp cho từng thao tác nhỏ, không phải nút nào cũng cần là quyết định.
Áp vào Space Salvage: nhiên liệu và khoang hàng tạo push your luck mỗi chuyến, mức phạt khi hết nhiên liệu phải đủ đau mà không xóa cả ngày.

**N8. Game feel là hệ thống thiết kế, không phải trang trí cuối.** Swink tách feel thành điều khiển thời gian thực, không gian mô phỏng và polish [S15]. Vlambeer cho thấy khoảng 30 chỉnh nhỏ biến một game bắn nhàm thành game có cảm giác tốt [S16]. Polish không đổi chức năng, nên không cứu được điều khiển sai.
Áp vào Space Salvage: chốt tham số jetpack bằng prototype feel trước khi thêm rung màn và hạt.

**N9. Phạm vi là rủi ro số một của team nhỏ.** Phân tích postmortem cho thấy vấn đề quản lý và sản xuất ngang nhau, nhóm quản lý người và tính năng chiếm phần lớn [S17], phạm vi quá tham và feature creep gặp rất thường xuyên [S18]. Derek Yu khuyên cắt thứ không cần và phát hành bản có lỗi còn hơn không phát hành [S19]. Không áp khi đang tìm ý tưởng, lúc đó thử rộng là đúng.
Áp vào Space Salvage: MVP khóa ở CLAUDE.md, mọi ý mới vào `production/BACKLOG.md`.

**N10. Playtest sớm, nhỏ, nhiều vòng, và quan sát hơn hỏi.** Valve coi thiết kế là giả thuyết và playtest là thí nghiệm, và lưu ý người chơi không luôn hiểu đúng vì sao mình làm vậy [S20][S21]. Nhiều vòng nhỏ có sửa giữa các vòng tìm được nhiều lỗi hơn một vòng lớn [S23]. Không thay được đo số bằng sim cho cân bằng ₵.
Áp vào Space Salvage: playtest cảm giác (jetpack, giờ giao thương quán) bằng người, cân bằng ₵ bằng sim, hai việc không thay nhau.

## 3. Con số tham chiếu

| Số | Giá trị | Nguồn |
|---|---|---|
| Số loại Aesthetics trong MDA | 8 | [S1] |
| Nhu cầu tâm lý trong SDT áp cho game | 3, kiểm qua 4 nghiên cứu (2006) | [S3] |
| Kiểu người chơi Bartle / số trục | 4 / 2, từ thảo luận 11/1989 tới 5/1990 | [S5] |
| Động lực Quantic Foundry | 12, gom thành 6 cặp, 3 cụm lớn | [S6] |
| Mẫu khảo sát Quantic Foundry | trên 400.000 người (GDC 2019), bản sau trên 2 triệu | [S6][S7] |
| Số pillar nên có | 3 đến 5 | [S9][S10] |
| Chỉnh nhỏ trong "The Art of Screenshake" | khoảng 30, talk gần 45 phút, 2013 | [S16] |
| Postmortem Politowski phân tích | 200 bài (1997 đến 2019), 927 vấn đề, 20 loại | [S17] |
| Vấn đề quản lý người và tính năng | 45% số vấn đề | [S17] |
| Phạm vi quá tham, feature creep (20 postmortem, 2009) | mỗi loại 75%, số qua tóm tắt, chưa đọc bản đầy đủ | [S18] |
| Người thử cho một vòng usability | 5 người tìm khoảng 85% vấn đề, mỗi người tìm khoảng 31% | [S23] |
| Biến thiên nhóm 5 người (Faulkner 2003) | từ khoảng 55% tới gần 100% vấn đề | [S24] |
| Chia vòng thử | 3 vòng x 5 người tốt hơn 1 vòng x 15 người | [S23] |

Lưu ý: số usability đo cho phần mềm, áp cho game ở mức tìm lỗi hiểu và lỗi luồng, không áp cho đo độ vui hay cân bằng.

## 4. Phân tích game tham chiếu

**Dave the Diver (Mintrocket, 2023).** Làm gì: lặn ban ngày, bán sushi ban tối, hai vòng nuôi nhau [S25]. Vì sao hiệu quả: dựa vào hiểu biết sẵn có "cá thành sushi" để giảm đường học, dùng các mini-game và hoạt động phụ để chống nhàm của nhịp ngày đêm lặp lại [S25][S26]. Bài học cho Space Salvage: chuyển hóa "sinh vật thành món" phải hiểu được ngay không cần tutorial dài, và cần nguồn đa dạng trong nhịp ngày để không lặp.

**flOw (Jenova Chen, 2006).** Làm gì: game thử nghiệm cho luận văn Active DDA, người chơi tự quyết lặn sâu hơn hay quay lên [S8][S9b][S27]. Vì sao hiệu quả: chỉnh độ khó nằm trong hành động, không thoát nhịp. Bài học cho Space Salvage: dùng khoảng cách tới trạm làm núm độ khó thay cho menu độ khó.

**Nuclear Throne và các game Vlambeer.** Làm gì: game hành động nhỏ, đầu tư feel bằng chuỗi chỉnh nhỏ (rung màn, giật lùi, hiệu ứng nổ, slow motion) [S16]. Vì sao hiệu quả: phản hồi dồn dập làm mỗi phát bắn có trọng lượng dù luật đơn giản. Bài học cho Space Salvage: cắt plasma, choáng, lưới đều cần danh sách phản hồi riêng, đo bằng prototype.

**Spelunky (Derek Yu).** Làm gì: tác giả viết kinh nghiệm hoàn thành game từ góc nhìn indie [S19]. Vì sao hiệu quả: kỷ luật cắt phạm vi và ưu tiên phát hành. Bài học cho Space Salvage: MVP 1 ngày chơi trọn quan trọng hơn thêm tầng.

## 5. Sai lầm thường gặp ở team indie nhỏ

- Viết luật trước, gọi tên cảm xúc sau, kết quả là hệ thống đúng mà không ai thấy vui [S1].
- Pillar là danh sách tính năng hoặc quá nhiều pillar, không gạt được gì [S9][S10].
- Đắp meta loop (nâng cấp, mở khóa) để che core loop chưa vui [S11][S12].
- Lấy Bartle làm phân khúc cho game đơn, thiết kế cho Socialiser và Killer không tồn tại [S5].
- Lựa chọn giả: một nâng cấp luôn tốt nhất, shop không có đánh đổi [S13].
- Đẩy game feel về cuối dự án, lúc đó tham số điều khiển đã khóa [S15][S16].
- Feature creep và phạm vi quá tham, nguyên nhân hàng đầu trong postmortem [S17][S18].
- Hỏi người chơi "có vui không" thay vì quan sát, tin vào lời giải thích của họ [S20][S21].
- Một vòng playtest lớn duy nhất ở cuối thay vì nhiều vòng nhỏ từ sớm [S22][S23].

## 6. Nguồn

- [S1] Hunicke, LeBlanc, Zubek, MDA: A Formal Approach to Game Design and Game Research (2004): https://users.cs.northwestern.edu/~hunicke/MDA.pdf và https://aaai.org/papers/ws04-04-001-mda-a-formal-approach-to-game-design-and-game-research/
- [S2] MDA framework, mục phê bình (Wikipedia): https://Www.Wikipedia.org/wiki/MDA_framework
- [S3] Ryan, Rigby, Przybylski, The motivational pull of video games: A self-determination theory approach (2006): https://acuresearchbank.acu.edu.au/item/8q128/the-motivational-pull-of-video-games-a-self-determination-theory-approach và https://www.rochester.edu/warner/lida/wp-content/uploads/2022/11/02bfe513dd59366750000000.pdf
- [S4] Przybylski, Ryan, Rigby (2009), bạo lực và sự thích thú: https://selfdeterminationtheory.org/wp-content/uploads/2014/04/2009_PrzbylskiRyanRigby_PSPB-1.pdf
- [S5] Bartle, Hearts, Clubs, Diamonds, Spades: Players Who Suit MUDs: https://aom.jku.at/archiv/cmc/text/bartle.90/mud.co.uk/richard/hcds.html và bối cảnh https://mud.co.uk/richard/hcdsbg.htm
- [S6] Quantic Foundry, Gamer Motivation Model: https://quanticfoundry.com/ và https://quanticfoundry.com/2015/07/20/how-we-developed-the-gamer-motivation-profile-v2/
- [S7] Nick Yee, GDC, A Deep Dive into the 12 Motivations: Findings from 400,000+ Gamers: https://gdcvault.com/play/1025742/contactUs và slide GDC 2021 https://quanticfoundry.com/wp-content/uploads/2021/07/GDC-2021-Slides-Universals-vs-Differentiators-Quantic-Foundry.pdf
- [S8] Jenova Chen, Flow in Games (luận văn, tóm tắt): https://jenovachen.info/abstract
- [S8b] Phê bình Flow và flOw: https://videlais.com/tag/flow/
- [S9] Unity, Start with a feeling: How to define your first video game: https://unity.com/blog/define-your-video-game
- [S9b] Phỏng vấn Jenova Chen về flOw và Active DDA (Game Developer): https://www.gamedeveloper.com/design/go-with-the-i-fl0w-i-jenova-chen-on-console-independence
- [S10] Pillars, goals and features (Methods and Tools for Level Design): https://methods-and-tools-for-level-design.netlify.app/pillars-goals-and-features
- [S10b] 80 Level, Defining the core of your game design pillars: https://80.lv/articles/defining-the-core-of-your-game-design-pillars/
- [S11] Roblox Creator Docs, Core loops: https://create.roblox.com/docs/en-us/production/game-design/core-loops.md
- [S12] Game Wisdom, Great Game Loops Bring Players Back, No Matter the Genre: https://game-wisdom.com/general/great-game-loops-bring-players-back-no-matter-genre
- [S13] Sid Meier, Interesting Decisions, GDC 2012: https://gdcvault.com/play/1015756/Interesting và tường thuật https://gamedeveloper.com/design/gdc-2012-sid-meier-on-how-to-see-games-as-sets-of-interesting-decisions
- [S14] Risk and reward, the engine of engaging decisions: https://bugnet.io/blog/risk-and-reward-the-engine-of-engaging-decisions và Push Your Luck (NoobFeed): https://www.noobfeed.com/articles/push-luck-risk-reward-loops-modern-games
- [S15] Steve Swink, Game Feel (2008), định nghĩa qua bài tổng quan: https://ar5iv.arxiv.org/html/2011.09201 và https://eolt.org/articles/game-feel/
- [S16] Jan Willem Nijman, The Art of Screenshake (INDIGO 2013), tường thuật Game Developer: https://gamedeveloper.com/design/vlambeer-co-founder-shares-advice-on-building-better-action-games và danh sách Kenney: https://kenney.nl/learn/must-see-videos-for-indie-developers
- [S17] Politowski và cộng sự, Game Industry Problems: an Extensive Analysis of the Gray Literature: https://arxiv.org/abs/2009.02440v2 và tin Concordia https://www.concordia.giờ giao thương/news/stories/2021/04/07/the-video-game-industrys-problems-are-mostly-due-to-people-not-technology-concordia-researchers-argue.html
- [S18] Petrillo và cộng sự, What went wrong? A survey of problems in game development (2009): https://api.crossref.org/works/10.1145%2F1486508.1486521 và Game Developer, What Went Wrong? Learning From Past Postmortems: https://www.gamedeveloper.com/pc/feature-what-went-wrong-learning-from-past-postmortems-
- [S19] Derek Yu, Finishing a Game: https://gamedev.net/news/4293-finishing-a-game/ và Game Developer: https://gamedeveloper.com/design/-i-spelunky-i-designer-want-to-be-an-indie-then-learn-how-to-finish-games-reliably
- [S20] Mike Ambinder, Valve's Approach to Playtesting, GDC 2009: https://cdn.fastly.steamstatic.com/apps/valve/2009/GDC2009_ValvesApproachToPlaytesting.pdf
- [S21] GMTK, Valve's Secret Weapon: https://gmtk.substack.com/p/valves-secret-weapon?r=4st3d
- [S22] Tracy Fullerton, Game Design Workshop: A Playcentric Approach: https://www.routledge.com/Game-Design-Workshop-A-Playcentric-Approach-to-Creating-Innovative-Games/Fullerton/p/book/9781032607009 và trích đoạn https://gamedeveloper.com/design/book-excerpt-game-design-workshop
- [S23] Jakob Nielsen, Why You Only Need to Test with 5 Users: https://nngroup.com/articles/why-you-only-need-to-test-with-5-users/
- [S24] Tóm tắt nghiên cứu Faulkner 2003 về cỡ mẫu: https://uxpsychology.substack.com/p/how-many-participants-do-you-need
- [S25] Jaeho Hwang, Dave the Diver trên Xbox Wire: https://news.xbox.com/en-us/2025/11/20/dave-the-diver-xbox/
- [S26] Inven Global, GDC24 Blending Humor and Gameplay, Dave the Diver: https://www.invenglobal.com/articles/18786/gdc24-blending-humor-and-gameplay-insights-from-dave-the-divers-session
- [S27] flOw (Wikipedia): https://en.wikipedia.org/wiki/Flow_(video_game)
