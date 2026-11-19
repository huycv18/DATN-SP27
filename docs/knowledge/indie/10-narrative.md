# Kiến thức nền: Narrative cho game indie vòng lặp (gd-story)

Ngày: 2026-11-19. Áp cho Space Salvage MVP (1 tầng, 2 loài khách, 1 ngày). Phương pháp làm việc nằm ở `docs/playbooks/indie/gd-story.md`, file này chỉ là kiến thức nền. Số trong ngoặc vuông trỏ tới mục 6. Nguồn lấy từ kết quả tìm web, phần lớn chỉ đọc đoạn tóm trong kết quả, chưa mở trang đầy đủ. Chỗ nào chỉ là blog hoặc bài đánh giá thì ghi rõ.

## 1. Khái niệm lõi và thuật ngữ

| Thuật ngữ | Định nghĩa một dòng |
|---|---|
| Narrative design | Thiết kế cách truyện đi vào luật chơi, nhịp chơi và giao diện, khác với viết truyện đứng riêng |
| Embedded narrative | Truyện gài sẵn trong cảnh và vật cho người chơi tự nhặt, theo cách gọi của Jenkins [S14] |
| Evoked narrative | Cảnh gợi lại truyện người chơi đã biết từ phim, sách, game khác [S14] |
| Enacted / emergent narrative | Truyện sinh ra từ hành động người chơi hoặc từ hệ thống, không viết sẵn [S14] |
| Environmental storytelling | Kể qua không gian và đồ vật, ví dụ ngôi nhà trong Gone Home [S12] |
| Diegetic | Nằm trong thế giới game, nhân vật cũng thấy. Ví dụ giao diện Shipbreaker là màn hình trong mũ phi hành gia [S10] |
| Ludonarrative dissonance | Luật chơi thưởng một điều, truyện nói điều ngược lại. Thuật ngữ của Clint Hocking, 2007 [S15] |
| Bark | Câu ngắn, lặp, kích hoạt theo trạng thái (chào, chờ lâu, chê). Cần nhiều biến thể [S16] [S17] |
| Storylet | Mẩu truyện có điều kiện kích hoạt, hệ thống chọn mẩu hợp lệ thay vì đi tuyến cố định [S19] [S20] |
| Saliency | Quy tắc chọn một mẩu trong số các mẩu hợp lệ, ví dụ chọn mẩu nhiều điều kiện nhất hoặc mẩu lâu chưa thấy [S20] |
| Flag | Biến cờ ghi sự kiện đã xảy ra, dùng làm điều kiện cho mạch truyện |
| Voice sheet | Phiếu giọng nhân vật: từ khóa, từ hay dùng, từ cấm, câu mẫu |
| String key | Mã định danh một câu text, tách text khỏi code để sửa và dịch |
| Text expansion | Bản dịch dài hơn bản gốc, ảnh hưởng giới hạn ký tự [S21] |
| Story bible | Tài liệu 1 trang chốt premise, xung đột, vai người chơi, giọng văn |

## 2. Nguyên lý

1. **Truyện đi sau cấu trúc chơi, không đi trước.** Dave the Diver dựng vòng "lặn ban ngày, phục vụ ban đêm" xong mới gài truyện qua nhân vật và minigame, không có cutscene trong kế hoạch ban đầu [S1] [S2] [S4]. Đúng vì vòng lặp dài chịu được truyện chen vào, không chịu được truyện chặn lại. Không áp khi game là truyện tuyến tính là sản phẩm chính.
2. **Nhân vật là chất kết dính giữa các hệ thống.** Hwang nói ghép các hệ thống về một mạch truyện khó hơn làm mỗi hệ thống vui, và lời giải của ông là dùng nhân vật [S2]. Đúng vì người chơi nhớ người hơn nhớ luật. Không áp khi hệ thống đã tự kể (ví dụ sim thuần).
3. **Kể qua vật, không qua cảnh cắt.** Shipbreaker gài truyện trong data drive trôi trong tàu, người chơi phản ứng tốt nên studio mới mở rộng chiến dịch [S10]. Moonlighter dựa vào mô tả item, sổ tay trong hầm ngục và lời dân phố [S11] [S9]. Đúng vì người chơi chọn lúc đọc. Không áp khi thông tin truyện bắt buộc người chơi phải biết để chơi tiếp, khi đó đưa vào tutorial của gd-ux.
4. **Cơ chế và truyện phải nói cùng một điều.** Hocking gọi chỗ lệch là ludonarrative dissonance, nhưng giới nghiên cứu sau này cho rằng thuật ngữ bị dùng lỏng và không phải lúc nào cũng là lỗi [S15] [S22]. Với Space Salvage: truyện nhặt phế liệu, mở quán phải khớp việc chơi (nhặt, chế, bán). Không áp khi cố ý tạo mỉa mai, miễn cố ý.
5. **Giữ vai người chơi bằng một áp lực kinh tế.** Shipbreaker dùng nợ làm động lực chính, chết thì nợ tăng [S9]. Phản biện: vài nhà bình luận thấy chủ đề nợ lệch với một số hệ thống chơi [S9]. Bài học: áp lực truyện nên là cái luật đã có (tiền, nhiên liệu), không thêm luật mới vì truyện.
6. **Barks cần nhiều biến thể và kiểm soát tần suất.** Dansky (Splinter Cell: Conviction) nói tần suất phát câu quan trọng ngang chất lượng câu, nên đổi bộ câu theo bản đồ và loại địch [S17]. Nhà viết thoại thường viết dư nhiều câu rồi lọc [S16]. Câu nguyên tử ngắn ít gây nhàm hơn hub-and-spoke [S18]. Không áp khi nhân vật chỉ nói 1 lần.
7. **Chọn câu bằng điều kiện và độ ưu tiên, không viết tuyến cố định.** Storylet lọc theo điều kiện rồi chọn theo saliency, có hỗ trợ mẩu "once" [S19] [S20]. Sunshine Shuffle dùng priority queue và storylet parser để chống xung đột thời điểm [S23]. Đúng vì mạch truyện theo ngày gắn core loop không được chặn. Không áp khi chỉ có dưới vài chục câu, bảng key và cờ là đủ.
8. **Giọng hài là lựa chọn có chủ đích và cần một người giữ nhịp.** Dave the Diver chọn hài để khác với game u ám [S1]. Cutscene hài thêm sau để lộ tính cách nhân vật [S4]. Nhịp hài và nhịp đời thường phụ thuộc mạnh vào một đạo diễn cắt cảnh [S24]. Không áp khi tông game nghiêm.
9. **Chi phí viết nhân vật tăng theo số nhân vật, không theo số hệ thống.** Barone cho biết mỗi nhân vật cưới được cần sự kiện tim riêng, thoại riêng, hành vi sau cưới và lịch riêng, nên mở rộng rất tốn [S25]. Ông cũng tiếc chưa đào sâu nhân vật hơn [S26]. Với MVP: 2 loài khách, mỗi loài làm sâu hơn là nhiều loài làm mỏng.
10. **Mỗi câu một key, có giới hạn ký tự và chừa chỗ cho dịch.** Chuỗi ngắn giãn mạnh nhất khi dịch [S21]. Phụ đề có chuẩn 40 ký tự mỗi dòng, 2 dòng [S27]. Không áp khi game chắc chắn chỉ một ngôn ngữ, nhưng chi phí chừa chỗ gần bằng 0 nên vẫn nên làm.
11. **Truyện chen vào điểm nghỉ của vòng lặp.** Đánh giá Dave the Diver nói truyện mọc ra từ vòng ngày, không dừng vòng [S6]. Nhưng Game8 chê quest bị kéo dài giả tạo cho truyện dài ra [S5]. Bài học: kích hoạt ở đầu ngày, vào quán, cuối ngày, và đừng cản tiến độ.

## 3. Con số tham chiếu

Mọi số dưới đây là khoảng ngành hay dùng, đều từ blog hoặc trang hướng dẫn, không phải chuẩn bắt buộc. Cần kiểm lại với chính chuỗi của game.

| Số | Giá trị | Dùng cho | Nguồn |
|---|---|---|---|
| Ký tự tối đa mỗi dòng phụ đề | 40, tối đa 2 dòng (3 chỉ ngoại lệ) | Hộp thoại, barks hiện chữ | [S27] |
| Biên khác trong bài về phụ đề game | 38 ký tự mỗi dòng (đề xuất của Ian Hamilton, GDC 2019, theo kết quả tìm) | Đặt trần chặt hơn | [S28] |
| Tốc độ đọc phụ đề | khoảng 15 đến 17 ký tự mỗi giây cho người lớn, Netflix 17 | Tính thời gian hiện câu | [S28] [S29] |
| Giãn chuỗi khi dịch, 10 ký tự trở xuống | khoảng 100 đến 200% | Nhãn nút, tên item | [S21] |
| Giãn chuỗi 11 đến 20 ký tự | khoảng 80 đến 100% | Tên món, tên khách | [S21] |
| Giãn chuỗi 21 đến 30 ký tự | khoảng 60 đến 80% | Câu barks ngắn | [S21] |
| Giãn chuỗi trên 70 ký tự | khoảng 30% | Mô tả item | [S21] |
| Đức, Hà Lan so với Anh | thường vượt 30%, Phần Lan và Hungary khoảng 50% | Chừa khung | [S21] |
| Quy tắc chừa chỗ | chừa gấp đôi bản gốc, giả lập thêm 40% | Khung text UI | [S30] |
| Số chương truyện Dave the Diver | 7 chương, mỗi chương thêm một kiểu chơi (theo bài đánh giá) | Tham chiếu nhịp mở chơi | [S6] |

Nguồn [S21] là bảng W3C do một trang checklist chép lại. [S30] là hướng dẫn localization từ kết quả tìm. Tôi không tìm thấy nguồn đáng tin cho "số câu barks tối thiểu mỗi trạng thái", nên không ghi con số. Playbook gd-story đang ghi 3 đến 4 biến thể mỗi trạng thái, đó là quy ước của phòng chưa có nguồn ngoài.

## 4. Phân tích game tham chiếu

**Dave the Diver (MINTROCKET).**
- Làm gì: truyện chia 7 chương, mỗi chương mở thêm một kiểu chơi, cảnh hài ngắn và minigame mang tính cách nhân vật [S6] [S1].
- Vì sao hiệu quả: truyện đi trong vòng ngày chứ không dừng vòng, hài cho nhân vật nét riêng [S4]. Feedback early access đã chỉnh cân bằng giữa lặn và quán, kể cả chỗ chứa truyện [S2]. DLC In the Jungle thêm khách bất ngờ ghé quán vì game gốc khá thụ động [S3].
- Điểm yếu: bị chê quest kéo dài giả tạo [S5].
- Bài học: 2 loài khách mỗi loài một arc nhỏ, sự kiện bất ngờ ở quán để backlog.

**Hardspace: Shipbreaker (Blackbird Interactive).**
- Làm gì: nợ với tập đoàn LYNX làm động lực, truyện qua data drive, email, radio, không qua cutscene [S9] [S10]. Nhân vật có chiều sâu dù chỉ nghe qua radio [S9].
- Vì sao hiệu quả: vật tháo dỡ mang truyện, người chơi tự khai quật. Giao diện kiểu diegetic tăng cảm giác có mặt trong thế giới [S10].
- Điểm yếu: có bài chê phản diện khuôn mẫu, truyện dễ đoán [S9].
- Bài học: phế liệu cắt, nhặt nên mang một mẩu truyện 1 câu, ghép với ITEM LIST.

**Moonlighter (Digital Sun).**
- Làm gì: Will bán hàng ban ngày, mơ làm anh hùng. Lore nằm ở mô tả item, sổ tay trong hầm ngục, lời dân phố [S11] [S9].
- Vì sao hiệu quả: khung chủ tiệm mang cảm xúc chính, truyện nhẹ nhưng đủ giải thích động cơ [S11]. Một bài phân tích cho rằng việc xếp ba lô khớp với hành vi chủ tiệm, cơ chế và fiction nói cùng một việc [S13].
- Điểm yếu: vài bài chê quest ít thực chất và ít lý do chơi tiếp khi chán quán [S11].
- Bài học: giữ lore ở mô tả ngắn, đừng để truyện là lý do duy nhất ở lại vòng lặp.

**Stardew Valley (ConcernedApe).**
- Làm gì: nhân vật thị trấn hé lộ tính cách qua thoại và sự kiện tim [S31].
- Vì sao hiệu quả: người chơi tự chọn gặp ai và lúc nào. Một người làm hết code, art, viết, nhạc [S26].
- Điểm yếu: tác giả tự thấy chưa đào sâu nhân vật [S26], chi phí mỗi nhân vật cao [S25].
- Bài học: ngân sách thoại tính theo số nhân vật, 2 loài khách đủ cho MVP.

**Spiritfarer (Thunder Lotus).**
- Làm gì: chuyến đi tiễn các linh hồn, mỗi linh hồn gắn cơ chế chăm sóc, tiễn biệt [S32].
- Vì sao hiệu quả: bài nói GDC của Nicolas Guérin về "tạo sự dịu dàng" bằng cơ chế là minh chứng cơ chế và cảm xúc cùng một việc [S33]. Trang GDC Vault nằm sau đăng nhập, tôi chưa đọc nội dung.
- Bài học: gắn hành động chơi (nấu, cắt, giao món) với khoảnh khắc nhân vật, không thêm màn truyện tách rời.

## 5. Sai lầm thường gặp ở team indie nhỏ

| Sai lầm | Hậu quả | Cách tránh (có nguồn hoặc phòng quy ước) |
|---|---|---|
| Viết truyện dài trước khi có vòng chơi | Truyện hứa thứ game không có | Truyện đi sau cấu trúc chơi [S1] [S2] |
| Truyện kéo dài quest giả tạo | Người chơi chán, bị chê | [S5] |
| Barks ít biến thể, tần suất cao | Nhàm, vô nghĩa | [S16] [S17] |
| Hub-and-spoke dài cho vài ý nhỏ | Lặp, chặn chơi | Dùng câu nguyên tử [S18] |
| Nhiều nhân vật, mỗi người một mỏng | Chi phí cao, không nhớ ai | Làm sâu ít loài [S25] [S26] |
| Chuỗi text không chừa chỗ dịch | Tràn khung | [S21] [S30] |
| Câu tutorial và câu truyện lẫn nhau | Giọng hài lấn át thông tin cần thiết | Thông tin luật do gd-ux viết (quy ước phòng) |
| Hiển thị tên biến code trong text | Lộ kỹ thuật | Tách text khỏi code bằng key (quy ước phòng) |
| Cơ chế và truyện nói ngược | Người chơi mất tin | [S15] |
| Một đạo diễn nhịp hài duy nhất, không ghi tiêu chí | Mất nhịp khi đổi người | Ghi voice sheet và tiêu chí nhịp [S24] |

## 6. Nguồn

| Mã | Nguồn | Link |
|---|---|---|
| S1 | GamesBeat, phỏng vấn đạo diễn Dave the Diver | https://gamesbeat.com/dave-the-divers-director-on-the-breakout-indie-hit-of-2023/ |
| S2 | Xbox Wire, Dave the Diver (bài của nhà phát triển, theo kết quả tìm) | https://news.xbox.com/en-us/2025/11/20/dave-the-diver-xbox/ |
| S3 | Automaton, phỏng vấn về DLC In the Jungle | https://automaton-media.com/en/interviews/dave-the-divers-in-the-jungle-expansion-is-basically-dave-the-diver-1-7-says-director-even-players-who-usually-skip-dlc-should-give-it-a/ |
| S4 | Automaton, phỏng vấn MINTROCKET về cutscene và quy mô nhỏ | https://automaton-media.com/en/interviews/dave-the-divers-developers-arent-indie-but-making-a-small-scale-game-under-a-corporation-came-with-its-own-set-of-challenges-we-talk-to-mintrocket/ |
| S5 | Game8, đánh giá Dave the Diver (chê quest kéo dài, bài đánh giá) | https://game8.co/articles/reviews/898 |
| S6 | GameGeeker, đánh giá Dave the Diver (7 chương, bài đánh giá) | https://gamegeeker.com/games/dave-the-diver/review?market=FR |
| S7 | Software Engineering Daily, phỏng vấn đội Dave the Diver | https://softwareengineeringdaily.com/articles/developing-dave-the-diver-with-jaeho-hwang-and-minsuk-cha/ |
| S8 | Invenglobal, The Joy of Dave the Diver | https://www.invenglobal.com/articles/22933/the-joy-of-dave-the-diver |
| S9 | PC Gamer, đánh giá Hardspace: Shipbreaker | https://www.pcgamer.com/hardspace-shipbreaker-review |
| S10 | Xbox Wire, Shipbreaker từ game jam đến series (data drive, mở rộng truyện) và GDC "Cutting Apart The Diegetic Interface" | https://news.xbox.com/en-us/?p=192284 và https://gdcvault.com/play/1027158/Cutting-Apart-The-Diegetic-Interface |
| S11 | TechRaptor, đánh giá Moonlighter | https://techraptor.net/content/moonlighter-review |
| S12 | Game Developer, Gone Home và ràng buộc thiết kế | https://www.gamedeveloper.com/design/how-i-gone-home-i-s-design-constraints-lead-to-a-powerful-story |
| S13 | Phân tích Moonlighter 2, ludonarrative resonance (blog) | https://saschb2b.github.io/game-mechanics/games/moonlighter-2/ludonarrative-resonance |
| S14 | Mechanics of Magic, tóm Jenkins "Game Design as Narrative Architecture" (nguồn thứ cấp, bài gốc nằm trong sách First Person, MIT Press 2004) | https://mechanicsofmagic.com/2025/10/15/read-play-game-design-as-narrative-architecture-4/ |
| S15 | Wikipedia, Ludonarrative dissonance | https://en.wikipedia.org/wiki/Ludonarrative_dissonance |
| S16 | Game Developer, 8 key principles of writing effective game dialogue | https://www.gamedeveloper.com/game-platforms/8-key-principles-of-writing-effective-game-dialogue |
| S17 | Kotaku, Why video game characters say such ridiculous things | https://kotaku.com/why-video-game-characters-say-such-ridiculous-things-5921878 |
| S18 | Game Developer, Emily Short, Conversation Design In Games | https://www.gamedeveloper.com/game-platforms/analysis-conversation-design-in-games |
| S19 | Yarn Spinner docs, storylets and saliency a primer | https://docs.yarnspinner.dev/write-yarn-scripts/advanced-scripting/storylets-and-saliency-a-primer |
| S20 | Yarn Spinner docs, Basic Storylets and Saliency | (link chết khi kiểm 2026-11-19, dùng S19) |
| S21 | Frontend Checklist, text expansion (bảng giãn theo W3C) | https://frontendchecklist.io/rules/i18n/text-expansion |
| S22 | Pitt Games Institute, Ludonarrative Dissonance, what it meant and what it means | https://www.games.pitt.edu/ludonarrative-dissonance-what-it-meant-and-what-it-means/ |
| S23 | Game Developer, Sunshine Shuffle deep dive về dialogue | https://gamedeveloper.com/design/deep-dive-creating-seamless-dialogue-for-sunshine-shuffle |
| S24 | Invenglobal, The Joy of Dave the Diver (nhịp hài phụ thuộc đạo diễn cắt cảnh) | https://www.invenglobal.com/articles/22933/the-joy-of-dave-the-diver |
| S25 | Spilled, ConcernedApe phỏng vấn kỷ niệm 10 năm | https://spilled.gg/stardew-valley-creator-marriage-candidates-10th-anniversary-interview |
| S26 | PC Gamer, Barone tiếc chưa đào sâu nhân vật Stardew Valley | https://www.pcgamer.com/games/sim/eric-barone-has-regrets-about-not-fleshing-out-stardew-valleys-characters-more-but-likes-that-its-so-open-ended-since-it-makes-things-more-personal-for-each-player |
| S27 | Game Accessibility Guidelines, phụ đề | https://gameaccessibilityguidelines.com/if-any-subtitles-captions-are-used-present-them-in-a-clear-easy-to-read-way/ |
| S28 | Game Developer, How to do subtitles well | https://www.gamedeveloper.com/audio/how-to-do-subtitles-well-basics-and-good-practices |
| S29 | Amara, characters per second | https://blog.amara.org/2024/10/17/crafting-accessible-subtitles-the-critical-role-of-characters-per-second-cps/ |
| S30 | SimpleLocalize, text expansion và UI | https://simplelocalize.io/blog/posts/text-expansion-ui-localization/ |
| S31 | Mechanics of Magic, Worldbuilding Critical Play Stardew Valley (blog) | https://mechanicsofmagic.com/?p=55955 |
| S32 | Game Developer, Inside the thoughtful design of Spiritfarer | https://gamedeveloper.com/design/inside-the-thoughtful-design-of-thunder-lotus-i-spiritfarer- |
| S33 | GDC Vault, Spiritfarer's Journey: Crafting Tenderness (cần đăng nhập) | https://gdcvault.com/play/1027409/-Spiritfarer-s-Journey-Crafting |

Ghi chú nguồn: S7, S8 và S24 chỉ thêm bối cảnh Dave the Diver, S8 và S24 là cùng một bài. S32 chưa mở nội dung. Số 38 ký tự và 17 ký tự mỗi giây lấy từ tóm tắt kết quả tìm, chưa đối chiếu với tài liệu gốc của Ian Hamilton hay Netflix.
