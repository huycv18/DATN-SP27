# 55 - QA và playtest cho game indie (kiến thức nền cho gd-qa)

Kiến thức nền, không phải quy trình. Cách làm việc của vai ở `docs/playbooks/indie/gd-qa.md`. Soạn 2026-11-19 từ 16 lần tìm web và 7 lần mở trang.
Ký hiệu [n] trỏ tới mục 6. Nguồn đánh dấu (tóm tắt) là chưa đọc được toàn văn (PDF không trích được chữ, hoặc chỉ thấy kết quả tìm kiếm), chỉ dùng ý chung.
Nguồn blog nhà cung cấp dịch vụ (Bugnet, Game-Ace) là kinh nghiệm thực hành, không phải nghiên cứu. Số lấy từ khảo sát tự nguyện hoặc vài nguồn lệch nhau đã ghi cạnh số.

## 1. Khái niệm lõi và thuật ngữ

| Thuật ngữ | Định nghĩa một dòng |
|---|---|
| Smoke test | Kiểm nhanh một bản build có mở được và đi hết luồng chính không, hỏng thì chặn mọi kiểm sâu hơn [14] |
| Regression test | Kiểm lại hành vi đã đúng sau mỗi thay đổi, ưu tiên tự động hóa [14][15] |
| Exploratory testing | Chơi tìm rủi ro chưa biết, người kiểm tự chọn việc thử, đối nghịch với kịch bản cố định [14] |
| Charter | Câu giao việc một phiên exploratory, dạng "khám phá X bằng Y để tìm Z" [13] |
| Session-based test management (SBTM) | Phiên kiểm có charter, giới hạn giờ và họp rút kinh nghiệm cuối phiên [13] |
| Soft lock | Game vẫn chạy nhưng người chơi không thể thắng hay đi tiếp, không có crash để báo [9] |
| Dead end | Trạng thái đi vào được nhưng không có đường ra, nguyên nhân hay gặp của soft lock [9] |
| Severity | Mức tác động kỹ thuật của lỗi lên game, mô tả bằng định nghĩa cố định [6][7] |
| Priority | Độ gấp phải sửa, quyết ở buổi triage theo bối cảnh dự án [7][8] |
| Triage | Họp phân loại lỗi mới: tái hiện, gán severity, priority, người sửa [8] |
| Repro rate | Tỉ lệ lần tái hiện được lỗi trên số lần thử, ghi cạnh bước tái hiện [11] |
| Seed | Giá trị khởi tạo bộ sinh số ngẫu nhiên, cùng seed phải ra cùng kết quả sinh [10] |
| Observed playtest | Người kiểm ngồi xem người chơi chơi, ghi hành vi, không dẫn dắt [1][2] |
| Unmoderated playtest | Người chơi tự chơi ở nhà, gửi lại ghi hình hoặc phiếu, không có người ngồi cùng [3] |
| Think-aloud | Người chơi nói to điều đang nghĩ khi chơi, giữ được lý do đằng sau hành vi [24] |
| Acceptance criteria | Điều kiện đo được để coi một tính năng là xong, trạng thái TRUE hoặc FALSE |
| Source / sink | Nơi tiền tệ vào game (thu) và nơi ra (chi), cân bằng hai phía quyết định lạm phát [20] |
| Dominant strategy | Một cách chơi hơn hẳn mọi cách khác ở mọi tình huống nên làm các lựa chọn còn lại vô nghĩa |
| Build ID | Mã định danh bản build gắn vào mọi lỗi để biết lỗi xuất hiện từ bản nào [9] |
| Early Access (EA) | Bán sớm trên Steam để lấy phản hồi và doanh thu khi game chưa xong [18][22] |

## 2. Nguyên lý

1. **Tin hành vi hơn lời nói.** Người chơi không biết vì sao mình làm vậy và hay nói điều họ nghĩ người hỏi muốn nghe. Quan sát chơi thật là neo, phiếu hỏi chỉ bổ sung. Câu hỏi dẫn kiểu "bạn có thích combat thử thách không" làm lệch kết quả, hỏi mở thay vào [1][24][25]. Không áp: khi cần hiểu động cơ, vẫn hỏi, nhưng sau khi đã quan sát và bằng câu mở.
2. **Ít người mỗi đợt, nhiều đợt.** Khoảng 5 đến 6 người mỗi đợt tìm được phần lớn lỗi dễ thấy, sửa rồi chạy lại đợt mới [4][5][26]. Không áp: lỗi hiếm cần nhiều người hơn, đo ý kiến cần cỡ 100 người [4]. Game chỉ có một người chơi nên không có ngưỡng tối thiểu theo số người trong trận.
3. **Mọi trạng thái người chơi vào được đều phải có đường ra.** Soft lock gần như luôn là thiếu một rào chắn: tài nguyên bị tiêu quá mốc không quay lại, cửa cần chìa mà người chơi bỏ qua. Cách kiểm là liệt kê tài nguyên bắt buộc và cổng tiến trình, rồi chơi đối nghịch (bán thứ sắp cần, làm sai thứ tự, ngắt giữa chừng) [9]. Không áp: bẫy không thể thắng có chủ đích (thiết kế cố ý, phải ghi rõ trong GDD).
4. **Severity tách khỏi priority.** Severity theo định nghĩa viết sẵn nên người nào chấm cũng ra cùng mức. Priority quyết ở triage vì một người quyết sẽ nâng quá mức lỗi mình để ý [6][7][8]. Không áp: team một người thì cùng người đó quyết cả hai, nhưng vẫn ghi hai cột.
5. **Seed là khóa tái hiện của game sinh ngẫu nhiên.** Sinh phải là hàm thuần của seed, mỗi hệ con có bộ ngẫu nhiên riêng, ghi seed lúc sinh chứ không phải lúc mở game. Hai người cùng seed nhưng khác lựa chọn vẫn gặp lỗi khác nhau nên ghi cả build và hành động gần nhất [10]. Không áp: lỗi do thời điểm hoặc luồng thì seed không đủ, ghi repro rate.
6. **Tái hiện từ trạng thái đã biết, viết cho người chưa chơi, một lỗi một báo cáo.** Bắt đầu từ ngày mới hoặc file save cụ thể, tự làm theo trước khi gửi, ghi tỉ lệ tái hiện [11]. Không áp: lỗi một lần không lặp, ghi "không tái hiện" kèm log, không đoán nguyên nhân.
7. **Exploratory bổ sung kịch bản, không thay thế.** Kịch bản và tự động hóa giữ hành vi đã biết, phiên có charter tìm rủi ro chưa biết [14][13]. Không áp: bản đầu chưa có build thì exploratory vô nghĩa, kiểm số và GDD bằng script trước.
8. **Thiết kế phiên playtest để dữ liệu đọc được trước khi thu.** Dữ liệu khó diễn giải, mâu thuẫn nhau là thất bại phổ biến của playtest và de Jongh rút ra sau sáu năm và tám game [3]. Hệ quả cho phòng: mỗi phiên có câu hỏi cần trả lời từ trước, ghi cách thu, không thêm câu hỏi giữa phiên.
9. **Người thật là QA không thay được, nhưng đừng phản ứng thái quá với phản hồi đầu.** Stardew ra PC trước như một bản beta để bắt lỗi nặng như hỏng save [20]. Hardspace giữ một tính năng bị chê vài bản cập nhật trước khi bỏ để không phản ứng vội [18]. Không áp: lỗi chặn (mất save, crash) sửa ngay, không chờ nhiều ý kiến.
10. **Accessibility tầng basic rẻ nếu làm sớm.** Đổi phím, điều khiển đơn giản, phụ đề, tách âm lượng hiệu ứng / thoại / nhạc, lưu cài đặt [16]. Không áp: chỉ khi game không có thành phần đó (game chưa có thoại thì chưa có phụ đề).
11. **Hai giờ đầu là cổng hoàn tiền trên Steam.** Steam hoàn tiền trong 14 ngày nếu chơi dưới 2 giờ [12]. [GIẢ ĐỊNH] vì vậy FTUE và ngày đầu là phần đáng kiểm nhất, đây là suy luận của phòng, chưa có số liệu hoàn tiền của game.
12. **Kinh tế phải kiểm bằng số, không bằng cảm tính.** Thu vượt chi kéo dài làm người chơi tích lũy mà không chịu áp lực chi, cần van chặn như trần tỉ lệ đổi hoặc giá động [20]. QA chạy lại sim cùng seed thay vì tin báo cáo của người soạn.

## 3. Con số tham chiếu

| Số | Giá trị | Ghi chú | Nguồn |
|---|---|---|---|
| Người mỗi đợt tìm lỗi sử dụng | 5 người tìm khoảng 85% lỗi khi mỗi người gặp lỗi với xác suất khoảng 31% | Gốc là nghiên cứu web, chỉ đúng với lỗi dễ thấy và đợt đầu | [5] (tóm tắt) |
| Người mỗi đợt tìm lỗi, khuyến nghị cho game | 6 người (thêm 1 phòng người vắng), sửa rồi chạy lại | Mô tả người chơi: 12. Đo ý kiến sai số khoảng 10%: 100. Sai số 5%: khoảng 400 | [4] |
| Thời lượng một phiên SBTM | Ngắn 60, thường 90, dài 120 phút | Bài trình EuroSTAR 2010, nguồn khác nói 60 đến 90 phút | [13] |
| Mức lỗi 4 bậc | P0 chặn, P1 nghiêm trọng, P2 lớn, P3 nhẹ | Ví dụ: P0 crash khi nạp save, hỏng save. P2 phím gán lại không lưu, 45 FPS trên cấu hình tối thiểu | [6] |
| Cổng hoàn tiền Steam | 14 ngày từ ngày mua và dưới 2 giờ chơi | Mua trước: 14 ngày tính từ ngày phát hành | [12] |
| Độ phân giải chính trên Steam, 9/2026 | 1920x1080: 47,91%. 2560x1440: 27,04%. 3840x2160: 4,79% | Khảo sát tự nguyện. Một báo cáo khác (3/2026) ghi 45,04% và 38,64%, lệch nhau | [17] |
| Overhead Early Access | Nhân đôi ước tính thời gian và buffer | Lời khuyên của producer Hardspace | [18] |
| Thời gian EA của Hardspace | Dự tính khoảng 1 năm, thực tế gần 2 năm | Bản EA gồm màn một, khoảng 15 giờ chơi | [18] (tóm tắt) |
| Quét seed hàng loạt | 10.000 dungeon mỗi đêm ở biên, kiểm đồ thị liên thông | Giai thoại, không nêu tên studio | [10] |

Số Space Salvage (HP, giá, thời lượng chuyến bay) không có trong kho này, lấy ở `projects/space-salvage/so-hien-hanh.md`.

## 4. Phân tích game tham chiếu

**Dave the Diver (Mintrocket).** Làm gì: ngày lặn, tối chạy quán sushi, thêm hoạt động phụ (trồng trọt, đua cá ngựa, sổ sưu tầm) để tránh lặp. Vì sao hiệu quả: hướng dẫn qua nhân vật và hài hước vì người chơi bỏ qua tutorial nhàm [19]. Sau ra mắt vẫn chỉnh kinh tế quán: giá và số đĩa của vài món, nhân viên, thao tác quán, và vá thả đồ ở boss Mantis Shrimp [23]. Bài học QA: quán là nơi kinh tế dễ lệch nên giá phải một nguồn và có Balance Sheet lịch sử. Lỗi và cân bằng của boss, rơi đồ phải có ca kiểm riêng, vì đội gốc cũng vá sau.

**Moonlighter (Digital Sun).** Làm gì: bán hàng ban ngày, hầm ngục ban đêm, cùng cấu trúc hai nửa với Space Salvage. Combat chỉnh nhiều vòng vì bản đầu chưa đạt, cân bằng bằng bảng tính và playtest [21]. Phần tiếp theo thử cơ chế shop nặng ngẫu nhiên và bị phản ứng ngay, đội hỏi lại người chơi [21]. Bài học QA: thay đổi lớn ở cơ chế kinh tế cần playtest người thật trước khi chốt. Ngẫu nhiên nặng ở phần bán hàng dễ gây cảm giác bất công mà sim không thấy.

**Stardew Valley (ConcernedApe).** Làm gì: một người làm gần hết, tin PC là nơi thử trước. Barone nói ra PC trước như một bản beta để bắt lỗi nặng như phá save, vì console khó vá nhanh [20]. Bản 1.6.9 chỉnh quy trình lưu để giảm nguy cơ hỏng save, có nhánh beta công khai trên Steam [20]. Bài học QA: save là hạng mục chặn số một cho game dài một người. Ca thoát và nạp phải kiểm ở mọi pha của ngày.

**Hardspace: Shipbreaker (Blackbird).** Làm gì: tháo dỡ phi thuyền trong không trọng lực, bán EA gần hai năm, coi hệ thống là nội dung. Chuyển động không trọng lực khó với cả người chơi FPS quen nên đội đơn giản hóa tutorial, bắt đầu từ vài tấm kim loại thay vì con tàu nhỏ [18]. Thử một cơ chế "cut guards" bị chê, giữ vài bản rồi mới bỏ để không phản ứng vội [18]. Bài học QA: jetpack quán tính của Space Salvage rất dễ lặp lỗi này, kiểm FTUE bằng người chưa chơi. Phiên có người xem ngày đầu là bắt buộc, không thay bằng script.

**Subnautica (Unknown Worlds).** Làm gì: đưa game cho người chơi Steam ngay khi mới chơi được một chút, giao tiếp chặt với cộng đồng từ đầu, nhờ EA mà studio qua được giai đoạn gần phá sản [22]. Bài học QA: kiểm nội bộ không thể thay vòng phản hồi người thật. [GIẢ ĐỊNH] Space Salvage chưa có kế hoạch EA trong tài liệu hiện có, nên playtest kín bằng Steam Playtest hoặc người quen thay thế [13][27].

## 5. Sai lầm thường gặp ở team indie nhỏ

| Sai lầm | Hậu quả | Cách tránh |
|---|---|---|
| Chấm theo handoff của tác giả | ĐẠT trên giấy, Lead chơi 2 phút thấy lỗi | Tự tái hiện từng tiêu chí (bài học nội bộ, `docs/knowledge/90-bai-hoc.md`) |
| Gọi script là playtest | Không có dữ liệu hành vi người chơi | Ghi rõ "chưa có người chơi thật". Sim chứng minh số, người chứng minh cảm giác |
| Hỏi câu dẫn, giải thích khi người chơi kẹt | Dữ liệu lệch, che lỗi FTUE | Hỏi mở, im lặng, ghi chỗ kẹt [24][25] |
| Một người test rồi kết luận | Sửa theo cá nhân, không theo mẫu | Chờ lặp lại ở người thứ hai trở đi, quyết theo mẫu [4][3] |
| Mọi thứ đều "gấp" | Lỗi chặn lẫn lỗi thẩm mỹ, không ai biết sửa gì trước | Hai cột severity và priority, priority quyết ở triage [7][8] |
| Không có đường ra cho trạng thái xấu | Soft lock: hết năng lượng, nợ, túi đầy | Liệt kê trạng thái xấu, mỗi trạng thái một đường ra, test đối nghịch [9] |
| Không ghi seed và build | Lỗi ngẫu nhiên không tái hiện | Ghi seed lúc sinh, build, hành động gần nhất [10] |
| Bỏ qua kiểm save | Mất tiến trình, mất niềm tin | Ca thoát và nạp ở mỗi pha, kiểm khi có bản mới [20] |
| Phản ứng vội với phản hồi đầu | Thêm rồi bỏ tính năng, phí công | Chờ mẫu, trừ lỗi chặn [18] |
| Tin EA hay demo làm phòng thử | Lỗi nặng đến tay người chơi trả tiền | Kín trước, dùng Steam Playtest chọn ngẫu nhiên từ người đăng ký [13] |
| Đánh giá thấp overhead sau ra mắt | Trễ lịch vá và hỗ trợ | Nhân đôi buffer [18] |
| Chạy kiểm một lần ở bản đầu | Lỗi hồi quy vào bản sau | Regression tự động, Unity Test Framework Play Mode khi có project [15][27] |

## 6. Nguồn

Trạng thái: **đọc** là đã mở trang và lấy được nội dung, **tóm tắt** là chỉ thấy trong kết quả tìm kiếm hoặc PDF không trích được chữ.

| # | Nguồn | Link | Trạng thái |
|---|---|---|---|
| 1 | Valve, The Valve Approach to Playtesting, GDC 2009 | https://cdn.fastly.steamstatic.com/apps/valve/2009/GDC2009_ValvesApproachToPlaytesting.pdf | tóm tắt |
| 2 | Cronin, Playtesting Process for Ultra Small Teams, GDC 2026 (slide) | https://media.gdcvault.com/gdc2026/Slides/Cronin_Brian_PlaytestingProcessForUltraSmallTeams.pdf | tóm tắt |
| 3 | de Jongh, Playtesting: Avoiding Evil Data, GDC 2017 (abstract) | https://gdcvault.com/play/1024451/Playtesting-Avoiding-Evil | đọc abstract |
| 4 | Games User Research, How many players do I need for a playtest | https://gamesuserresearch.com/how-many-players-do-i-need-for-a-playtest/ | đọc |
| 5 | MeasuringU, Why you only need to test with five users | https://measuringu.com/five-users/ | tóm tắt |
| 6 | Bugnet, Bug severity classification for game developers | https://bugnet.io/blog/bug-severity-classification-for-game-developers | đọc |
| 7 | Packt, Modern Game Testing, severity versus priority | https://subscription.packtpub.com/book/game-development/9781803244402/10/ch10lvl1sec49/severity-versus-priority | tóm tắt |
| 8 | HacknPlan, The bug triage process. Bugnet, bug priority rubric | https://hacknplan.com/the-bug-triage-process/ và https://bugnet.io/blog/how-to-build-a-bug-priority-rubric-for-your-team | tóm tắt |
| 9 | Bugnet, QA testing for soft lock and dead end detection. How to prevent soft locks | https://bugnet.io/blog/qa-testing-for-soft-lock-and-dead-end-detection và https://bugnet.io/blog/how-to-prevent-soft-locks-in-your-game | tóm tắt |
| 10 | Bugnet, How to debug procedural generation bugs. Bug tracking for roguelite action games | https://bugnet.io/blog/how-to-debug-procedural-generation-bugs và https://bugnet.io/blog/bug-tracking-for-roguelite-action-games | tóm tắt |
| 11 | Bugnet, How to write bug reproduction steps for games | https://bugnet.io/blog/how-to-write-bug-reproduction-steps-for-games | tóm tắt |
| 12 | Valve, Steam Refunds | https://store.steampowered.com/steam_refunds | tóm tắt (trích dẫn lại trong kết quả tìm kiếm) |
| 13 | SBTM: Yrkan, Session-based test management. Feilberg, EuroSTAR 2010 | https://yrkan.com/blog/session-based-test-management/ và https://www.slideshare.net/EuroSTARConference/w5-c-feildberg | tóm tắt |
| 14 | Game-Ace, Types of game testing | https://game-ace.com/blog/types-of-game-testing/ | tóm tắt |
| 15 | AltTester, Regression testing in game development | https://alttester.com/regression-testing-in-game-development-a-core-technique-for-ensuring-stability-and-quality/ | tóm tắt |
| 16 | Game Accessibility Guidelines, tầng Basic | https://gameaccessibilityguidelines.com/basic/ | tóm tắt |
| 17 | ixbt.games về khảo sát Steam 9/2026. Automaton về khảo sát 3/2026 | https://ixbt.games/en/news/2026/10/31/bolsinstvo-pk-geimerov-v-steam-igraiut-v-1080p-valve-predstavila-srednestatisticeskii-pk-v-sentiabre-2026-goda.amp.html và https://automaton-media.com/articles/newsjp/steam-20260303-425951/ | tóm tắt |
| 18 | Game Developer, Hardspace: Shipbreaker is taking flight, what its devs learned in Early Access | https://www.gamedeveloper.com/game-platforms/hardspace-shipbreaker-is-taking-flight-here-s-what-its-devs-learned-in-early-access | đọc |
| 19 | Inven Global, [GDC24] Blending Humor and Gameplay, Dave the Diver | https://www.invenglobal.com/articles/18786/gdc24-blending-humor-and-gameplay-insights-from-dave-the-divers-session | đọc |
| 20 | PC Gamer, Stardew 1.6 on PC first. Deltias, patch 1.6.9. EkoSphere devlog, economy | https://pcgamer.com/games/life-sim/ive-always-released-on-pc-first-stardew-valley-creator-eric-barone-discusses-why-the-16-update-came-to-pc-before-consoleits-sort-of-a-beta-test và https://deltiasgaming.com/?p=77211 và https://arshyagupta.cargo.site/ekosphere-economy | tóm tắt |
| 21 | Push Square, phỏng vấn dev Moonlighter. Bonus Action, Moonlighter 2 shop redesign | https://www.pushsquare.com/news/2018/05/interview_talking_shop_with_action_rpg_moonlighters_developer và https://bonus-action.com/interview/moonlighter-2s-design-director-on-the-redesign-that-nearly-broke-him-we-owe-it-to-our-players/ | tóm tắt |
| 22 | Fandom, phỏng vấn Charlie Cleveland về Subnautica. Game Developer, how Subnautica was made | https://www.fandom.com/articles/subnautica-charlie-cleveland-interview và https://gamedeveloper.com/audio/video-a-behind-the-scenes-look-at-how-i-subnautica-i-was-made | tóm tắt |
| 23 | MP1st, Dave the Diver update 1.14. SteamDB patch notes | https://mp1st.com/news/dave-the-diver-new-update-1-14-wades-out-for-improvements-balance-adjustments và https://steamdb.info/patchnotes/11576102 | tóm tắt |
| 24 | Wayline, psychology of playtesting. Games User Research, unbiased player interviews | https://www.wayline.io/blog/psychology-of-playtesting-informed-design và https://gamesuserresearch.com/how-to-run-unbiased-player-interviews/ | tóm tắt |
| 25 | PlaytestCloud, hearing players think as they play | (link chết khi kiểm 2026-11-19) | tóm tắt |
| 26 | Game Developer, How many players should you playtest with | https://gamedeveloper.com/design/how-many-players-should-you-playtest-with- | tóm tắt |
| 27 | Steamworks, Steam Playtest. Unity, Test Framework manual | https://partner.steamgames.com/doc/features/playtest và https://docs.unity3d.com/Packages/com.unity.test-framework@1.4/manual/manual.html | tóm tắt |

Chưa tìm được: postmortem chính thức của Moonlighter (chỉ có phỏng vấn), số liệu hoàn tiền của game cùng thể loại, và nội dung chi tiết của hai bài GDC Valve 2009 và Cronin 2026 (PDF không đọc được). Nên đọc trực tiếp khi có điều kiện.
