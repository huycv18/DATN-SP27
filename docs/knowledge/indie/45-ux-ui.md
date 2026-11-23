# Kiến thức nền: UX / UI cho game indie PC (gd-ux)

Ngày soạn 2026-11-19. Phạm vi: HUD, màn hình, FTUE, input, chữ, game feel. Cách làm việc từng bước nằm ở `docs/playbooks/indie/gd-ux.md`, file này chỉ là kiến thức nền. Mọi ký hiệu [Sn] trỏ tới mục 6. Chỗ nào nguồn yếu (blog, diễn đàn, tóm tắt tìm kiếm chưa mở toàn văn) đều ghi rõ.

## 1. Khái niệm lõi và thuật ngữ

| Thuật ngữ | Định nghĩa một dòng |
|---|---|
| HUD | Lớp thông tin vẽ chồng lên màn chơi: năng lượng, khoang hàng, mục tiêu |
| Diegetic UI | Phần giao diện tồn tại trong thế giới truyện và có vị trí trong không gian thế giới, ví dụ thanh máu gắn trên lưng bộ đồ [S7] |
| Non-diegetic UI | Giao diện nằm ngoài truyện và ngoài không gian, ví dụ thanh máu phẳng ở góc màn [S7] |
| Spatial UI | Phần tử có vị trí trong không gian thế giới nhưng không thuộc truyện, ví dụ vòng chọn quanh vật nhặt được [S7] |
| Meta UI | Phần tử thuộc truyện nhưng không có vị trí trong thế giới, ví dụ viền đỏ khi bị thương [S7] |
| FTUE | First-Time User Experience, phần chơi đầu tiên dạy luật |
| Interactive tutorial | Tutorial bắt người chơi tự làm thao tác thay vì đọc, nằm trong nhóm Basic của Game Accessibility Guidelines [S3] |
| Body height | Chiều cao chữ đo từ chân chữ thò xuống thấp nhất đến đỉnh nét lên cao nhất, đơn vị pixel, dùng để so với cỡ chữ tối thiểu [S1] |
| Glyph | Biểu tượng nút (phím, nút tay cầm) trong dòng chữ hướng dẫn thao tác |
| Remap | Cho người chơi gán lại phím, nút [S3] |
| Integer scaling | Phóng ảnh pixel art theo bội số nguyên để mỗi pixel gốc thành khối đều nhau [S9] |
| Game feel | Điều khiển thời gian thực lên vật thể trong không gian mô phỏng, nhấn mạnh tương tác bằng polish [S18] |
| Juice | Lớp phản hồi phụ (hạt, rung, âm, hoạt ảnh) làm hành động thỏa mãn hơn [S19] |
| Hit stop | Đóng băng ngắn lúc đòn trúng để tăng cảm giác lực, còn gọi hitlag, hitpause [S21] |
| Progressive disclosure | Chỉ hiện lựa chọn khi cần, nhóm phần còn lại [S22] |
| Funnel | Tỉ lệ người chơi đi tiếp qua từng bước tutorial, đo bằng event [S25] |
| Cỡ chữ mặc định | Cỡ chữ lúc mở game lần đầu, người chơi phải tăng giảm được [S1] |

## 2. Nguyên lý

1. **Chọn kiểu giao diện bằng hai trục: có thuộc truyện không, có nằm trong không gian không.** Bốn ô cho bốn kiểu giao diện giúp chọn có chủ đích thay vì mặc định. Không áp khi người chơi cần đọc số chính xác nhanh: khi đó ưu tiên dạng đọc được ngay. Luận văn gốc viết cho game bắn súng góc nhìn thứ nhất, sang thể loại khác phải tự diễn giải [S7].
2. **Dạng hiển thị theo loại thông tin.** Nghiên cứu Peacocke và cộng sự (2018) cho kết quả hỗn hợp: đạn đọc tốt nhất ở dạng diegetic hoặc spatial, máu đọc tốt hơn hẳn ở HUD. Với Space Salvage, năng lượng bộ đồ là máu kiêm đồng hồ nên nghiêng về HUD. Chỉ là một nghiên cứu nhỏ trên game bắn súng [S7].
3. **HUD theo mức ưu tiên.** Chỉ thứ quyết định sống chết luôn hiện, thứ còn lại hiện khi cần. Ưu tiên khả năng dùng hơn vẻ ngoài. Không áp cho game mô phỏng chuyên sâu mà người chơi muốn nhiều chỉ số [S23].
4. **Thông tin sống còn cần một con số hoặc dấu hiệu dứt khoát.** Trong Subnautica, oxygen là chỉ số duy nhất hiện bằng số còn các chỉ số khác là biểu tượng, do chính người chơi nêu trên diễn đàn. Phân tích Dead Space cho thấy chỉ số thấp nhấp nháy đỏ để báo khẩn. Nguồn là diễn đàn và blog, chỉ để tham khảo [S16, S17].
5. **Màu không bao giờ là kênh duy nhất.** Khoảng 1 trong 12 nam (8%) và 1 trong 200 nữ (0,5%) mù màu đỏ xanh. Luôn thêm hình, chữ hoặc nhịp. Cảnh báo "không chỉ dùng màu" nằm trong nhóm Basic [S3, S8].
6. **Chữ phải đủ lớn mặc định và scale được.** Cỡ tối thiểu theo Xbox cho PC là 18 px body height ở 1080p, cho phép phóng tới 200% mà không mất nội dung. Steam Deck đòi chữ nhỏ nhất không dưới 9 px cao ở 1280x800 [S1, S5].
7. **Phản hồi theo ba mốc thời gian.** Khoảng 0,1 s để cảm giác tác động trực tiếp, 1 s để dòng suy nghĩ không đứt, 10 s là giới hạn giữ chú ý. Quá 10 s phải có chỉ báo hoặc quyết định mới. Con số từ sách Nielsen 1993, mang tính ước lượng, không phải ngưỡng tuyệt đối [S6].
8. **Giảm lựa chọn cùng lúc, nhóm lại.** Thời gian quyết định tăng khi số lựa chọn tăng nhưng chậm dần. Luật Miller (7 cộng trừ 2) là về chia khối thông tin, không phải trần 7 mục. Công thức hợp lựa chọn đơn giản, ít đúng với quyết định phức tạp [S22].
9. **Dạy bằng làm, mỗi bước một ý.** Người chơi học tốt nhất khi mechanic được giới thiệu từng cái trong tình huống thật như Celeste, tutorial là thiết kế màn chứ không phải màn riêng. Số liệu "tutorial tương tác hơn chữ 30%" xuất hiện trên blog nhưng không có phương pháp, đừng dùng làm số [S3, S24].
10. **Đừng đẩy hết hệ thống vào người chơi cùng lúc.** Dave the Diver bị chê quá tải do nhiều hệ thống và hướng dẫn chưa đủ, nhưng cũng có ý kiến từng hệ thống đơn giản và khớp nhau. GDC 2024 của đạo diễn cho biết họ dùng nhân vật hài và thoại để giảm nặng nề hệ thống phức tạp [S12, S13].
11. **Giao diện dùng chung phong cách art dễ hòa vào thế giới.** Potion Craft vẽ UI cùng nét với môi trường, menu chính là căn nhà. Không áp khi chức năng cần độ rõ cao hơn thẩm mỹ, ví dụ màn quản lý số liệu [S11, S15].
12. **Game feel đi cùng luật từ đầu, juice thêm từng lớp rồi bật tắt để thấy lớp nào đáng giữ.** Hai talk kinh điển đều đi từ prototype trơn rồi thêm từng tweak. Thêm quá tay có thể giảm độ rõ, nên mỗi lớp phải đo được tác dụng [S18, S19, S20].
13. **Pixel UI phải theo bội số nguyên.** Tỉ lệ lẻ làm pixel không đều, UI mờ hoặc méo. Không áp khi chấp nhận UI độ phân giải cao tách khỏi cảnh pixel [S9].

## 3. Con số tham chiếu

Số ghi nguyên văn từ nguồn, cột "Suy ra" là tính của vai, không phải số nguồn.

| Số | Giá trị | Nguồn | Suy ra cho Space Salvage |
|---|---|---|---|
| Cỡ chữ tối thiểu PC, body height | 18 px ở 1080p, 36 px ở 4K | [S1] | 12 px ở 720p theo tỉ lệ 18 x 720 / 1080 [GIẢ ĐỊNH tính tuyến tính] |
| Cỡ chữ tối thiểu console | 26 px ở 1080p, 52 px ở 4K | [S1] | Không áp (PC Windows) |
| Phóng chữ | Tới 200% cỡ tối thiểu, không mất nội dung | [S1] | Chọn bội số 100%, 150%, 200% |
| Chữ nhỏ nhất Steam Deck | Không dưới 9 px cao ở 1280x800, đọc được từ khoảng 30 cm | [S5] | Làm chuẩn sàn cho chữ chú thích |
| Độ dài dòng | Tối đa 80 ký tự, CJK 40 | [S1] | Hộp thoại khách và tutorial ngắn hơn nhiều |
| Giãn dòng | Ít nhất 1,5 lần trong đoạn nhiều dòng | [S1] | Áp cho hộp thoại, mô tả item |
| Giãn chữ, giãn từ | Ít nhất 0,12 và 0,16 lần cỡ chữ | [S1] | Chỉ cần nếu font pixel cho phép chỉnh |
| Pixel viền tính vào chiều cao chữ | Pixel viền có tương phản trên 2:1 với nền được tính | [S1] | Dùng khi đo chữ có viền |
| Tương phản chữ | 4,5:1 chữ thường, 3:1 chữ lớn | [S4] | Chép từ script đo, không gõ tay |
| Phần tử không hoạt động | 3:1 | [S2] (chỉ thấy trong ghi chú phiên bản, chưa mở toàn trang) | Nút khóa, ô trống |
| Mù màu đỏ xanh | Khoảng 8% nam, 0,5% nữ | [S8] | Mô phỏng mù màu bắt buộc cho cảnh báo |
| Ngưỡng thời gian phản hồi | 0,1 s, 1 s, 10 s | [S6] | Chuyển màn, tải, đợi bán |
| Độ phân giải nền pixel art | 320x180 và 640x360 scale nguyên lên 1080p, 1440p, 4K. 1280x720 gây lệch ở 1080p (1,5 lần) | [S9] | 1280x720 là 4 lần của 320x180, lên 1080p là hệ số 6 so với 320x180 [tính của vai] |
| Hit stop đòn nhẹ | 2 đến 4 khung | [S21] độ tin thấp | Điểm bắt đầu thử, không phải chuẩn |
| Hit stop đòn nặng, đòn chốt | 8 đến 12 khung, 12 đến 20 khung. Trên 20 khung giống lỗi | [S21] độ tin thấp | Điểm bắt đầu thử cho lưới, cắt nặng |
| Tỉ lệ rơi trong tutorial hybrid sim, D1 trung vị | 60% (một ca), 22% (GameAnalytics 2025) | [S25] nguồn gốc ở file đó | Chỉ để tham chiếu cho funnel, không là mục tiêu |

## 4. Phân tích game tham chiếu

**Dave the Diver (Mintrocket).** Làm gì: hai nửa ngày, lặn ban ngày và quản lý quán ban tối, nhiều hệ thống con. Vì sao hiệu quả: từng hệ thống đơn giản và khớp nhau theo một số người chơi, và đạo diễn dùng hài cùng thoại nhân vật để làm nhẹ hệ thống phức tạp [S12, S13]. Mặt yếu: Destructoid nêu hướng dẫn một số phần chưa đủ, nhiều bình luận nói quá tải, trong khi Push Square thấy tutorial ngắn là đủ. Bài học: Space Salvage cùng cấu trúc hai nửa nên đừng dạy cả hai nửa trong một nhịp, tách bay trước quán sau, dùng thoại khách làm kênh dạy (phối hợp gd-story).

**Hardspace: Shipbreaker (Blackbird Interactive).** Làm gì: giao diện chủ yếu diegetic, HUD là kính mũ, nhiều giao diện mô phỏng máy tính đơn sắc đời đầu, buổi GDC 2021 của Vidhi Shah nói về pha trộn nhiều phong cách để cân bằng nhập vai với khả năng dùng và tiếp cận. Hạn chế: NME chê giao diện màn hub, cho thấy kiểu diegetic không kéo đều sang màn quản lý [S10, S11]. Bài học: HUD bay của Space Salvage có thể là kính mũ bộ đồ, màn quán, shop, nâng cấp ưu tiên rõ ràng và dễ đọc.

**Moonlighter (Digital Sun).** Làm gì: ba lô giới hạn 20 ô, vật phẩm tác động lẫn nhau, mua bán qua định giá có phản ứng khách. Vì sao hiệu quả: quản lý ô trống trở thành câu đố gắn với lời văn người bán hàng. Điểm yếu theo đánh giá: người chơi không có mốc giá (không biết 100 hay 8), một số người chê giao diện bán hàng [S14]. Bài học: khoang hàng giới hạn ô của Space Salvage vừa là cơ chế vừa là UI, mọi giá cần mốc tham chiếu hiện ngay trên màn quán.

**Potion Craft (niceplay games).** Làm gì: UI cùng phong cách art, menu chính là các phòng trong nhà, chế thuốc làm bằng thao tác tay trên bản đồ alchemy, bản đồ hiện suốt phía sau chỗ nấu và lấp dần khi mở công thức [S15]. Hạn chế: tổng hợp đánh giá nêu lo ngại hỗ trợ tay cầm. Bài học: màn chế món có thể là không gian thay vì danh sách, nhưng gamepad phải tính từ đầu chứ không vá sau.

**Subnautica (Unknown Worlds).** Làm gì: oxygen là chỉ số duy nhất hiện bằng số trong cụm chỉ số, theo quan sát của người chơi. Một phân tích 2017 phê bình các lớp phủ máu, nước, thức ăn thiếu nhất quán về màu và chủ đề [S16]. Bài học: năng lượng bộ đồ cần số rõ, chỉ số khác dùng chung một ngôn ngữ thị giác. Nguồn là diễn đàn và blog, không phải phân tích chính thức.

## 5. Sai lầm thường gặp ở team indie nhỏ

| Sai lầm | Hậu quả | Nguồn |
|---|---|---|
| Chữ nhỏ vì chỉ thử trên màn lớn | Không đọc được trên màn nhỏ, handheld, khoảng cách xa | [S1, S5] |
| Chỉ làm đổi phím bàn phím, quên glyph tay cầm | Prompt hiện sai thiết bị, tay cầm bị chê | [S3, S5, S15] |
| Diegetic hóa mọi màn | Màn quản lý khó đọc, bị chê như hub của Hardspace | [S10, S11] |
| Cảnh báo chỉ bằng màu đỏ | Người mù màu bỏ lỡ | [S3, S8] |
| Chỉ số không nhất quán về màu, hình | Người chơi không nhận ra chỉ số nào quan trọng | [S16] |
| Không có mốc giá trên màn bán | Người chơi đoán mò, thấy ngẫu nhiên | [S14] |
| Dạy toàn bộ hệ thống trong vài phút đầu | Quá tải, bỏ chơi. Nguồn yếu (blog) | [S24] |
| Tutorial là bức tường chữ | Đọc thụ động. Nguồn yếu (blog) | [S24] |
| Thêm juice hay hit stop quá dài | Hit stop quá 20 khung giống lỗi. Nguồn độ tin thấp | [S21] |
| Scale pixel không nguyên | UI mờ, pixel không đều | [S9] |
| Không đo funnel khi có build | Không biết bước nào gây rơi | [S25] |

## 6. Nguồn

Trừ khi ghi khác, nguồn đã thấy trong kết quả tìm kiếm ngày 2026-11-19. Nguồn đánh dấu "đã mở" thì vai đã tải nội dung và đọc.

| Mã | Nguồn | Link |
|---|---|---|
| S1 | Xbox Accessibility Guideline 101: text display (đã mở) | https://learn.microsoft.com/en-us/gaming/accessibility/xbox-accessibility-guidelines/101 |
| S2 | Xbox Accessibility Guideline 102: contrast | https://learn.microsoft.com/en-us/gaming/accessibility/xbox-accessibility-guidelines/102 |
| S3 | Game Accessibility Guidelines, mức Basic (đã mở) | https://gameaccessibilityguidelines.com/basic/ |
| S4 | Unity, Accessibility basics (4,5:1 và 3:1) | https://unity.com/blog/video-game-accessibility-basics |
| S5 | Steamworks: tương thích Steam Deck (chữ 9 px, glyph) | https://partner.steamgames.com/doc/steamdeck/compat |
| S6 | NN/g: Response Times, the 3 important limits | https://www.nngroup.com/alertbox/timeframes.html |
| S7 | Fagerholt, Lorentzon: Beyond the HUD (slide). Peacocke et al. 2018 | https://www2.slideshare.net/DICEStudio/beyond-the-hud-user-interfaces-for-increased-player-immersion-in-fps-games và https://www.yorku.ca/mack/ec2018.html |
| S8 | City University London: mù màu ở nam và nữ | https://www.city.ac.uk/news-and-events/news/2017/09/colour-blindness-statistically-affects-every-male-football-team |
| S9 | Cài đặt pixel art và scale nguyên (blog, nguồn yếu) | https://itch.io/blog/806788/godot-44-settings-for-pixel-art và https://forum.gdevelop.io/t/about-resolution-pixel-art-and-size/48825/9 |
| S10 | GDC 2021: Cutting Apart The Diegetic Interface of Hardspace: Shipbreaker (đã mở) | https://www.gdconf.com/news/go-behind-fully-diegetic-ui-hardspace-shipbreaker-gdc-2021 |
| S11 | NME review Hardspace (chê UI hub). Xbox Wire về game | https://www.nme.com/reviews/game-reviews/hardspace-shipbreaker-review-3236613 và https://news.xbox.com/en-us/?p=186009 |
| S12 | Inven Global: GDC24 Dave the Diver, hài và gameplay | https://www.invenglobal.com/articles/18786/gdc24-blending-humor-and-gameplay-insights-from-dave-the-divers-session |
| S13 | Destructoid và Push Square review Dave the Diver | https://www.destructoid.com/review-dave-the-diver/ và https://pushsquare.com/reviews/ps5/dave-the-diver |
| S14 | UX in video games part 1: Moonlighter. Game Wisdom. Review Backloggd (giá) | https://uxdesign.cc/ux-in-video-games-part-1-moonlighter-17c7fe166c12 và https://game-wisdom.com/analysis/moonlighter và https://www.backloggd.com/u/karamatsu/review/792759 |
| S15 | Potion Craft và UI của nó (Medium, blog) | https://medium.com/@saragiraltfdez/potion-craft-and-its-lovingly-well-crafted-ui-57670cec4e13 |
| S16 | Diễn đàn Unknown Worlds (chỉ số oxygen). Phê bình UI Subnautica 2017 | https://forums.unknownworlds.com/discussion/comment/2349661 và https://alexjrybak.blogspot.com/2017/08/uiux-design-reworking-of-subnauticas.html |
| S17 | Phân tích UI Dead Space (blog Giant Bomb) | https://www.giantbomb.com/profile/gamer_152/blog/markers-i-a-deep-dive-into-dead-spaces-ui/249377/ |
| S18 | Tóm tắt Game feel của Swink (2008) | https://www.wikiwand.com/en/articles/Game_feel |
| S19 | GDC Vault: Juice It or Lose It (Jonasson, Purho) | https://gdcvault.com/play/1016789/Juice-It-or-Lose |
| S20 | Nijman: The Art of Screenshake (video, qua danh sách của Kenney) | https://kenney.nl/knowledge-base/learning/must-see-videos-for-indie-developers |
| S21 | Hit stop: blog và diễn đàn, độ tin thấp, chưa mở từng trang | https://gamejuice.pages.dev/articles/hit-stop-frame-trick và https://forums.ultra-combo.com/t/why-isnt-hitstop-duration-standardized/24838 |
| S22 | IxDF: Hick-Hyman Law (cộng ghi chú về luật Miller) | https://ixdf.org/literature/article/the-hick-hyman-law-an-argument-against-complexity-in-user-interface-design |
| S23 | Game Developer: UI as gameplay. HUD The Long Dark | https://www.gamedeveloper.com/design/ui-as-gameplay và https://gamedeveloper.com/design/long-dark-survival-game-hud-ui |
| S24 | Onboarding: Game Wisdom, Game Developer (invisible tutorials), GDevelop (blog) | https://game-wisdom.com/critical/onboarding và https://gamedeveloper.com/design/methods-of-creating-invisible-tutorials và https://gdevelop.io/blog/improve-game-tutorials |
| S25 | Nội bộ: số FTUE (Supersonic, GameAnalytics 2025) | Tri thức Puzzle cũ, đã xóa 2026-11-23 |
