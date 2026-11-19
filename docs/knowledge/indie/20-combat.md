# Kiến thức combat cho game indie

Kho tri thức nền của gd-combat. Cách làm việc ở `docs/playbooks/indie/gd-combat.md`, file này không chép lại. Viết 2026-11-19, mọi link đã thấy trong kết quả tìm web cùng ngày. Số ghi "cộng đồng đo" là số người chơi tự đo, không phải số nhà làm game công bố.

## 1. Khái niệm lõi và thuật ngữ

| Thuật ngữ | Định nghĩa |
|---|---|
| Telegraph (báo trước) | Tín hiệu hình hoặc tiếng cho biết đòn sắp tới, đủ sớm để người chơi phản ứng |
| Startup / Active / Recovery | Ba pha của một đòn: chuẩn bị (chưa gây sát thương), có hiệu lực (hitbox bật), hồi (kẻ đánh mở sơ hở) |
| Frame data | Số khung hình của từng pha, đọc ở nhịp logic của game (60 khung mỗi giây thì một khung khoảng 16,7 ms) |
| Hitbox / Hurtbox | Vùng gây sát thương của đòn / vùng nhận sát thương của thân |
| Hitstop (hit stop, impact freeze) | Dừng vài khung hình cả người đánh và mục tiêu lúc trúng để đòn có sức nặng |
| Hitstun | Khoảng mục tiêu bị khóa hành động sau khi trúng |
| Knockback | Đẩy lùi mục tiêu khi trúng |
| I-frames (invincibility frames) | Khung hình nhân vật miễn sát thương, thường trong lúc né |
| Mercy invincibility | Khoảng miễn sát thương ngắn sau khi vừa nhận đòn, chống bị đánh liên hoàn |
| Stun (choáng) | Trạng thái mục tiêu mất khả năng hành động trong một thời gian |
| Crowd control (CC) | Nhóm hiệu ứng khống chế: choáng, làm chậm, trói, ngủ |
| Diminishing returns (DR) | Hiệu ứng khống chế lặp lại trên cùng mục tiêu ngắn dần rồi hết tác dụng |
| Stunlock | Mục tiêu bị khống chế liên tục không có lối thoát |
| TTK (time to kill) | Thời gian hạ một mục tiêu với một vũ khí cho trước |
| DPS (damage per second) | Sát thương trung bình mỗi giây |
| Attack token | Vé tấn công: quái phải giữ vé mới được đánh, số vé giới hạn số quái đánh cùng lúc |
| Enemy archetype | Vai của quái trong combat, mỗi vai ép người chơi một hành vi |
| HFSM (hierarchical finite state machine) | Máy trạng thái phân cấp điều khiển quyết định của quái |
| Behavior tree | Cây hành vi, cấu trúc ra quyết định nhiều nhánh cho AI phức tạp hơn |
| Juice | Lớp phản hồi hình, tiếng, chuyển động làm hành động thấy thỏa mãn |
| Game feel | Cảm giác điều khiển vật thể theo thời gian thực trong không gian mô phỏng, có polish nhấn tương tác |
| Non-lethal capture | Bắt sống mục tiêu thay vì hạ, thường cho phần thưởng khác hoặc tốt hơn |

## 2. Nguyên lý

**N1. Mỗi đòn của quái là một câu hỏi trả lời được.** Đòn có ba pha báo trước, đánh, hồi. Người chơi thấy báo trước thì mới né hay chặn được, không thấy thì chết là "oan". Độ dài báo trước là núm chỉnh độ khó chính. Không áp khi nguy hiểm cố ý bất ngờ để tạo sợ hãi (hazard môi trường), lúc đó sát thương phải nhỏ. Nguồn [S3], [S4], [S5], [S34].

**N2. Báo trước tỉ lệ với mức nguy hiểm.** Đòn lớn, khó né thì báo trước dài và rõ, đòn nhỏ báo ngắn. Người chơi học được thang này và đọc được trận đấu. Không áp cho quái cố ý đánh lừa (đòn giả) ở cuối game, và chỉ sau khi người chơi đã học đòn thật. Nguồn [S4], [S5].

**N3. Báo trước phải dài hơn phản xạ cộng thời gian hành động.** Phản xạ thị giác đơn giản khoảng 200 ms trong phòng thí nghiệm, đo trên web khoảng 270 ms vì có độ trễ thiết bị. Thời gian hành động gồm cả thời gian đổi hướng hay phanh của nhân vật. Game bay quán tính phải cộng thêm thời gian phanh. Không áp cho đòn người chơi chủ động dụ ra. Nguồn [S12], [S13].

**N4. Quái theo vai, mỗi vai ép một hành vi.** Đội DOOM 2016 dùng bộ trụ cột (di chuyển nhanh, vũ khí riêng biệt, AI có vai rõ, người chơi mạnh) làm bộ lọc nhận hay bỏ ý tưởng. Quái chỉ khác hình làm combat lặp. Không áp khi game chỉ có một quái làm hazard nền. Nguồn [S1], [S10].

**N5. Combat phục vụ fantasy của game, không phải game nào cũng cần giết.** Subnautica bỏ súng có chủ đích, mối đe dọa làm người chơi né và sợ. Hardspace: Shipbreaker bỏ một công cụ cắt vì nó "giống vũ khí hơn công cụ". Game về nhặt rác thì công cụ nên là công cụ, combat là nghĩa vụ phụ. Không áp cho game hành động thuần. Nguồn [S16], [S17], [S18].

**N6. Bắt sống phải có lý do kinh tế.** Dave the Diver cho cá ngủ hoặc dính lưới giữ chất lượng cao hơn cá bị bắn, nên người chơi chọn cách khó hơn để lấy giá trị cao hơn. Đây là lựa chọn rủi ro và phần thưởng có thật. Không áp khi phần thưởng như nhau, lúc đó người chơi chọn cách nhanh nhất. Nguồn [S14], [S15].

**N7. Phản hồi xếp theo lớp, đồng bộ hai phía.** Thêm từng lớp (rung màn, chớp sáng, hạt, tiếng, đẩy lùi, hitstop) làm cùng một luật thấy khác hẳn. Hitstop phải dừng cả người đánh và mục tiêu. Mỗi lớp phải tắt được để đo tác dụng. Không áp lớp rung và chớp mạnh khi người chơi cần định hướng chính xác, lúc đó giảm biên độ. Nguồn [S2], [S6], [S7], [S8], [S9].

**N8. Có lối thoát khỏi khống chế ở cả hai phía.** Người chơi bị đánh có khoảng mercy invincibility để thoát. Quái bị choáng lặp có DR (lần sau ngắn hơn rồi miễn). Không có lối thoát thì combat thành khóa liên tục, vô hại hoặc bất công. Không áp khi khống chế liên hoàn là phần thưởng có chủ đích cho chuỗi kỹ năng khó. Nguồn [S19], [S20], [S21].

**N9. Giới hạn số quái đánh cùng lúc.** Hệ vé tấn công cho phép nhiều quái vây nhưng chỉ vài con được đánh, nên đông mà vẫn công bằng. Số vé cũng là núm độ khó. Không cần khi tầng chỉ có một hai quái hoạt động cùng lúc. Nguồn [S11], [S22].

**N10. Pha hành động và pha quản lý tranh cùng một nguồn.** Dome Keeper tách đào và thủ, mỗi lần nâng cấp vũ khí là bớt nâng cấp đào. Căng thẳng nằm ở lựa chọn giữa hai pha chứ không ở riêng pha nào. Không áp khi hai pha dùng tiền tệ tách biệt. Nguồn [S23], [S24].

**N11. Mạnh hơn thì phải đắt hơn theo tỉ lệ có ý đồ.** Quái khó bắt hơn cho giá trị cao hơn, công cụ mạnh hơn tốn hơn, theo một đường chi phí đặt trước rồi mới dò số. Không áp cho phần thưởng truyện hay mở khóa một lần. Nguồn [S25].

**N12. AI nhỏ dùng máy trạng thái, AI lớn mới cần cây hành vi.** DOOM 2016 dùng HFSM cho quái. Game ít quái, hành vi đơn giản thì máy trạng thái dễ viết, dễ đọc, dễ kiểm. Không áp khi một quái có nhiều mục tiêu cạnh tranh, lúc đó cân nhắc behavior tree. Nguồn [S10], [S26].

## 3. Con số tham chiếu

| Số | Giá trị | Ghi chú | Nguồn |
|---|---|---|---|
| Phản xạ thị giác đơn giản (phòng thí nghiệm) | khoảng 200 ms | Mức trung bình người lớn | [S12] |
| Phản xạ đo trên web (Human Benchmark) | trung vị khoảng 273 ms | Có cả trễ chuột và màn hình | [S12], [S13] |
| Một khung hình ở 60 fps | khoảng 16,7 ms | Phép tính 1000 / 60 | không cần nguồn |
| Hitstop đòn nhẹ | 30 đến 50 ms (khoảng 2 đến 3 khung) | Hướng dẫn kỹ thuật, điểm xuất phát để chỉnh | [S9] |
| Hitstop đòn nặng | 60 đến 100 ms (khoảng 4 đến 6 khung) | Như trên | [S9] |
| Hitstop đòn chí mạng | 100 đến 150 ms | Như trên | [S9] |
| Mercy invincibility, Terraria | khoảng 0,67 s, giảm một nửa khi đòn 1 sát thương | Số của wiki game | [S19] |
| Mercy invincibility, GoldenEye 007 | khoảng 0,5 s | Số của trang tổng hợp | [S20] |
| I-frames lăn thường, Dark Souls 3 | 13 khung (game chạy 30 fps, khoảng 0,43 s) | Cộng đồng đo | [S27] |
| DR choáng, World of Warcraft | lần 2 còn một nửa thời lượng, cửa sổ đặt lại khoảng 18 s | Số của wiki game | [S21] |

## 4. Phân tích game tham chiếu

### Dave the Diver (MINTROCKET, 2023)
- Làm gì: lặn ban ngày, súng lao, súng gây mê, lưới bắt cá, tối bán sushi. Cá bắt sống hoặc ngủ giữ chất lượng cao hơn cá bị bắn. Càng sâu cá càng to và hung hơn, một phát lao không còn đủ.
- Vì sao hiệu quả: cách bắt nối thẳng vào giá món ở quán, nên mỗi lần chọn công cụ là một quyết định kinh tế. Độ sâu tự đẩy người chơi đổi công cụ.
- Điểm yếu được nêu: combat được review gọi là "đủ dùng", góc ngắm hẹp. Người chơi phàn nàn lưới không bắt được cá to dù lưới to hơn cá.
- Bài học cho Space Salvage: lưới bắt sống phải cho giá trị cao hơn cắt hạ, và giới hạn của lưới (cỡ quái bắt được) phải có lý do nhìn thấy được trong game. Nguồn [S14], [S15], [S28].

### Subnautica (Unknown Worlds, 2018)
- Làm gì: thám hiểm dưới nước gần như không có vũ khí giết, sinh vật lớn là mối đe dọa phải né.
- Vì sao hiệu quả: không có súng thì sinh vật giữ được nỗi sợ, người chơi tập trung vào thám hiểm và chuẩn bị.
- Bài học: không phải quái nào trong tầng cũng cần đánh được. Một quái chỉ né được (hazard sống) cho tầng cảm giác hoang dã với chi phí thiết kế thấp. Nguồn [S16], [S17].

### Hardspace: Shipbreaker (Blackbird Interactive, 2022)
- Làm gì: tháo tàu vũ trụ trong không trọng lực, nguy hiểm là điện, nhiên liệu, phóng xạ, nổ do giảm áp.
- Vì sao hiệu quả: nguy hiểm đến từ chính vật đang tháo, sai một nhát là trả giá, nên cắt cẩn thận là kỹ năng. Đội làm bỏ công cụ cắt dạng sóng ngang vì nó giống vũ khí, chọn tia cắt đơn chính xác.
- Bài học: cắt plasma của Space Salvage là công cụ nhặt rác trước, combat sau. Nguy hiểm môi trường trên vật salvage có thể thay một phần quái. Nguồn [S18], [S29], [S30].

### Dome Keeper (Bippinbits, 2022)
- Làm gì: đào khoáng dưới mái vòm, định kỳ quay lên thủ mái vòm trước đợt quái.
- Vì sao hiệu quả: hai pha dùng chung tài nguyên và thời gian, nâng vũ khí là bớt tốc độ đào. Đồng hồ đợt quái tạo áp lực cho pha đào.
- Bài học: nâng cấp combat (choáng, lưới) phải tranh ₵ với nâng cấp bay và khoang hàng, không thì combat thành đường phụ không ai đầu tư. Nguồn [S23], [S24].

### Moonlighter (Digital Sun, 2018)
- Làm gì: ban ngày đánh hầm ngục lấy đồ, ban đêm bán ở cửa hàng.
- Vì sao hiệu quả: cấu trúc hai vòng nối loot với giá bán rất rõ. Đội làm nói muốn combat dựa vào vị trí và thời điểm.
- Điểm yếu được nêu: review chê hitbox và vài vũ khí làm dễ gần hết trận.
- Bài học: hitbox phải khớp hình (pixel art side-view rất lộ lệch hitbox), và không công cụ nào được thắng mọi quái. Nguồn [S31], [S32], [S33].

## 5. Sai lầm thường gặp ở team indie nhỏ

| Sai lầm | Hệ quả | Cách tránh |
|---|---|---|
| Làm combat trước khi chốt điều khiển nhân vật | Mọi số báo trước, tầm đánh phải làm lại khi tốc độ bay đổi | Chốt prototype di chuyển trước, combat lấy thời gian phanh làm đầu vào |
| Ba quái chỉ khác hình và chỉ số | Tầng nhàm sau vài chuyến | Mỗi quái một vai, kiểm bằng ma trận khắc chế |
| Thêm juice cuối dự án | Không còn thời gian chỉnh, phản hồi lệch nhau | Đặt bảng phản hồi ngay từ GDD, mỗi lớp là một tham số |
| Hitbox vẽ to hơn hình cho dễ trúng | Người chơi thấy bị đánh oan | Hitbox quái nhỏ hơn hình, hitbox đòn người chơi có thể rộng hơn chút |
| Không có lối thoát khỏi choáng hay đòn liên hoàn | Stunlock ở cả hai phía | Mercy invincibility cho người chơi, DR cho quái |
| Phần thưởng bắt sống bằng phần thưởng hạ | Không ai dùng lưới | Bắt sống cho giá trị cao hơn rõ rệt |
| Cân số bằng cảm tính trong editor | Mỗi lần đổi một số phải chơi lại cả chuyến | Bảng TTK và sim trước, chơi thật để xác nhận |
| AI viết thẳng trong code không có sơ đồ | Không ai sửa được khi người viết bận | Máy trạng thái vẽ ra bảng trong GDD trước khi code |
| Quá nhiều quái cùng đánh | Màn hình rối, chết không biết vì sao | Giới hạn số quái tấn công cùng lúc |

## 6. Nguồn

| Mã | Nguồn | Link |
|---|---|---|
| S1 | Kurt Loudy, Jake Campbell, "Embracing Push Forward Combat in DOOM", GDC 2018 | https://gdcvault.com/play/1024940/Embracing-Push-Forward-Combat-in |
| S2 | Steve Swink, "Game Feel" (2009), bài review của Liz England | https://lizengland.com/blog/review-game-feel-by-steve-swink/ |
| S3 | "Anatomy of an Enemy Attack in Dark Souls 3", Game Developer | https://www.gamedeveloper.com/game-platforms/anatomy-of-an-enemy-attack-in-dark-souls-3 |
| S4 | Game Maker's Toolkit, "How Cuphead's Bosses (Try to) Kill You" (2017), bản phụ đề | https://amara.org/videos/TbmQ6Ac3Z6pb/en/3100937 |
| S5 | "Enemy Attacks and Telegraphing", Game Developer | https://gamedeveloper.com/design/enemy-attacks-and-telegraphing |
| S6 | Martin Jonasson, Petri Purho, "Juice It or Lose It" (2012) | https://gdcvault.com/play/1016487/Juice-It-or-Lose |
| S7 | Jan Willem Nijman (Vlambeer) chia sẻ cách làm game hành động tốt hơn, Game Developer | https://gamedeveloper.com/design/vlambeer-co-founder-shares-advice-on-building-better-action-games |
| S8 | Masahiro Sakurai, cột Famitsu về hitstop, bản dịch Source Gaming | https://sourcegaming.info/2015/11/11/thoughts-on-hitstop-sakurais-famitsu-column-vol-490-1/ |
| S9 | Uhiyama Lab, Godot Hitstop Basics | https://uhiyama-lab.com/en/notes/godot/hit-feedback-hitstop/ |
| S10 | "Cyber Demons: The AI of DOOM (2016)", Game Developer | https://www.gamedeveloper.com/design/cyber-demons-the-ai-of-doom-2016- |
| S11 | Doomworld, thảo luận hệ vé tấn công trong Doom Eternal (cộng đồng) | https://test.doomworld.com/forum/topic/134214-the-attack-token-system-in-doom-eternal-breaks-occasionally-for-no-reason-at-all |
| S12 | Blur Busters, "Input Lag and the Limits of Human Reflex, Part 1" | https://www.blurbusters.com/human-reflex-part1-input-lag-and-the-limits-of-human-reaction-time |
| S13 | Insider Gaming, reaction time và game bắn súng | https://insider-gaming.com/what-is-reaction-time-and-does-it-make-you-better-at-cs2-or-valorant/ |
| S14 | Gamepressure, cách dùng Tranquilizer và Net Gun trong Dave the Diver | https://www.gamepressure.com/dave-the-diver/how-to-use-tranquilizer-and-net-gun/zd10d62 |
| S15 | The Xbox Hub, review Dave the Diver | https://www.thexboxhub.com/dave-the-diver-review/ |
| S16 | MCV/Develop, Subnautica: "a vote towards a world with less guns" | https://www.mcvuk.com/subnautica-dev-our-game-is-a-vote-towards-a-world-with-less-guns/ |
| S17 | Kotaku, lý do Subnautica không có súng | https://kotaku.com/revulsion-with-real-guns-inspired-developer-to-make-a-g-1768960503 |
| S18 | Rock Paper Shotgun (bản mirror), cách Hardspace: Shipbreaker làm tàu cắt được mọi chỗ | https://wwwrockpapers.pages.dev/posts/how-hardspace-shipbreakers-devs-made-spaceships-you-can-cut-anywhere |
| S19 | Terraria Wiki, Invincibility frame | https://terraria.wiki.gg/wiki/Invincibility_frame |
| S20 | TV Tropes, Mercy Invincibility | https://tvtropes.org/pmwiki/pmwiki.php/Main/MercyInvincibility |
| S21 | Warcraft Wiki, Diminishing returns | https://warcraft.wiki.gg/wiki/Diminishing_returns |
| S22 | Strayspark, attack token system cho combat nhóm | https://www.strayspark.studio/blog/attack-token-system-ue5-group-combat-that-feels-fair |
| S23 | "How Dome Keeper focuses on systems that feed into one another", Game Developer | https://www.gamedeveloper.com/road-to-igf-2023/how-dome-keeper-focuses-on-systems-that-feed-into-one-another |
| S24 | Side Questing, hands-on preview Dome Keeper | https://sidequesting.com/2022/04/hands-on-preview-dome-keeper |
| S25 | Ian Schreiber, Brenda Romero, "Game Balance" (CRC Press) | https://www.routledge.com/Game-Balance/Schreiber-Romero/p/book/9781315156422 |
| S26 | Game AI Pro, các chương miễn phí (có "Overcoming Pitfalls in Behavior Tree Design") | https://www.gameaipro.com/ |
| S27 | Steam Community, thảo luận i-frames Dark Souls 3 (cộng đồng đo) | https://steamcommunity.com/app/374320/discussions/0/596262211620473504 |
| S28 | Analog Stick Gaming, review Dave the Diver | https://www.analogstickgaming.com/game-reviews/2023/7/12/dave-the-diver |
| S29 | Xbox Wire, Hardspace: Shipbreaker retrospective | https://news.xbox.com/en-us/2023/04/28/hardspace-shipbreaker-retrospective-making-of-game-pass/ |
| S30 | Rory McGuire, Elliot Hudson, "How to Dissect an Exploding Spaceship", GDC | https://gdcvault.com/play/1026837/How-to-Dissect-an-Exploding |
| S31 | MCV/Develop, "When we made Moonlighter" | https://mcvuk.com/when-we-made-moonlighter/ |
| S32 | TechRaptor, review Moonlighter | https://techraptor.net/content/moonlighter-review |
| S33 | Game Wisdom, "Moonlighter Wants to Have its Sword and Sell it Too" | https://game-wisdom.com/analysis/moonlighter |
| S34 | Dustloop, Frame Data Glossary | https://dustloop.com/w/Template:FrameDataGlossary-GGACR |
