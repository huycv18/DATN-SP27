# Kiến thức nền: Character (nhân vật chính, NPC, loài khách, art nhân vật)

Vai dùng: gd-character. Cách làm việc nằm ở `docs/playbooks/indie/gd-character.md`, file này chỉ là kiến thức nền. Nguồn đánh số [N] ở mục 6. Chỗ nào chưa có nguồn thì ghi rõ "chưa có nguồn", không có con số bịa.

## 1. Khái niệm lõi và thuật ngữ

| Thuật ngữ | Định nghĩa một dòng |
|---|---|
| Game feel | Cảm giác tay khi điều khiển, tạo bởi input, phản hồi, độ trơn của chuyển động |
| Newtonian movement | Chuyển động có quán tính thật, đẩy rồi trôi, muốn dừng phải hãm ngược |
| 6-axis / 6DOF | Di chuyển tự do 3 trục tịnh tiến và 3 trục xoay, kiểu zero-g |
| Coyote time | Cho nhảy thêm một khoảng ngắn sau khi rời mép |
| Input buffer / jump buffering | Nhớ lệnh bấm sớm, thực thi đúng khung hình hợp lệ đầu tiên |
| Corner correction | Game tự đẩy nhân vật lệch vài pixel để khỏi kẹt ở góc |
| Forgiveness | Nhóm kĩ thuật nới luật ngầm để người chơi thấy mình giỏi hơn thực tế |
| Juice | Lớp hiệu ứng (hạt, rung màn hình, âm, easing) làm hành động đầy phản hồi |
| Resource gate | Tài nguyên hữu hạn (oxygen, nhiên liệu, năng lượng) giới hạn một chuyến đi |
| Silhouette test | Tô đen nhân vật, vẫn phải đọc được vai và phân biệt với nhân vật khác |
| Shape language | Hình khối cơ bản (tròn, vuông, nhọn) gợi tính cách |
| Persona gọn | Hồ sơ ngắn gồm mục tiêu, nỗi sợ, cách nói, vai trong luồng |
| Passenger / regular | Khách có hồ sơ riêng và mạch truyện, khác khách vô danh |
| Gear progression | Mạnh lên nhờ mua hoặc chế đồ, không qua XP (khớp luật ₵ là tiền duy nhất) |

## 2. Nguyên lý

1. **Tha thứ ngầm tốt hơn chính xác tuyệt đối.** Celeste dùng coyote time, jump buffering, giảm trọng lực ở đỉnh nhảy, corner correction, cửa sổ wall-jump rộng hơn hình ảnh [1][2]. Người chơi cảm thấy "mình điều khiển tốt" mà không biết. Không áp khi game thi đấu cần luật cứng đo được từng khung. Với jetpack: thêm khoảng ngầm khi nhặt, cắt, vào cửa.
2. **Mọi tham số phải có số và chỉnh được trực tiếp.** Celeste liệt kê cả khoảng cách theo pixel trong nền 320x180 [1]. Làm bảng thông số rồi chỉnh trong prototype. Không áp khi chưa có prototype: số chỉ là giả định.
3. **Quán tính tạo trọng lượng, nhưng chỉ khi điều khiển được.** Hardspace: Shipbreaker mô phỏng Newtonian bán thực với 6 trục [3], nhóm dev nói thách thức lớn là giữ input tối thiểu và dễ hiểu dù di chuyển tự do [4]. Bài học: càng nhiều tự do càng phải ít nút. Không áp nếu nhịp game cần chính xác từng pixel (nhặt đồ nhỏ).
4. **Phản hồi thị giác nói thay vật lý.** Shipbreaker cho chân nhân vật vẩy ngược hướng trôi và camera trễ để tạo cảm giác zero-g [5][4]. Rẻ hơn thêm vật lý phức tạp. Không áp nếu camera trễ gây say hoặc mất mục tiêu.
5. **Juice cộng dồn từng lớp.** Bài "Juice It or Lose It" thêm hạt, rung, âm, easing từng lớp lên một game đơn giản [6]. Định nghĩa của Jonasson là đầu ra tối đa cho đầu vào tối thiểu [7]. Không áp khi lớp phụ che mất thông tin cần đọc, và có ý kiến phê rằng quá nhiều polish làm giảm đắm chìm [7].
6. **Tài nguyên hữu hạn tạo căng thẳng, nâng cấp di chuyển rút ngắn đường chứ không đổi bản chất.** Oxygen và nhiên liệu jetpack hữu hạn buộc chọn giữa làm an toàn và làm nhanh [8]. Subnautica 2 chỉ rõ nâng cấp di chuyển không thêm oxygen mà rút thời gian về an toàn [9]. Dome Keeper: đồ mang nặng làm jetpack chậm, buộc chọn tham hay về [10]. Không áp khi phạt hết năng lượng là mất tất cả, thành frustration.
7. **Nâng cấp theo gear, không theo XP.** Moonlighter không có XP, sức mạnh đến từ mua và chế đồ [11]. Khớp luật Space Salvage. Rủi ro: nâng cấp chỉ số di chuyển cấp cao làm đổi cảm giác tay, kiểm lại mỗi cấp (chưa có nguồn, thực hành của playbook).
8. **Silhouette đứng trước chi tiết.** Quy trình nhân vật của Valve cho TF2 bắt đầu bằng silhouette, rồi hình khối bên trong, model sheet [12]. Chín lớp nhân vật được thiết kế để khác nhau rõ, kể cả khi đọc trong ánh sáng xấu [13]. Kết hợp thay đổi tỉ lệ để tăng độ đọc [14]. Không áp khi nhân vật cố tình giống nhau (đồng phục), lúc đó phân biệt bằng màu nhấn.
9. **Mỗi NPC mang một luật chơi nhỏ qua tính cách.** Spiritfarer: hành khách có sở thích riêng, chế đồ hợp khẩu vị làm họ vui, cái này cũng là cơ chế [15]. Creative director nói cơ chế chỉ nên tồn tại khi phục vụ trải nghiệm và ý nghĩa [15]. Không áp khi MVP chỉ có 2 loài khách: dùng một nét tính cách tạo khác biệt về luật, không thêm hệ thống mới.
10. **Hài hước và tính cách riêng là khác biệt có chủ đích.** Lead Dave the Diver nói chọn hài hước để khác đám game nghiêm và u ám [16]. Khách có chiều sâu cảm xúc dù chỉ qua vài câu [16]. Không áp nếu tone truyện đã chốt khác (hỏi gd-story).

## 3. Con số tham chiếu

Chỉ giữ số đã thấy trong nguồn. Số khung coyote/buffer của Celeste (có blog nói 6 khung) chưa xác nhận từ nguồn chính, không dùng [1].

| Số | Giá trị | Nguồn | Cách dùng |
|---|---|---|---|
| Cửa sổ wall-jump thường (Celeste) | 2 pixel, 1/4 ô, nền 320x180 | [1] | Mẫu về độ rộng khoảng tha thứ so với kích thước ô |
| Cửa sổ wall-jump khi dash lên | khoảng 5 pixel, hơn nửa ô | [1] | Khoảng tha thứ nên rộng hơn ở hành động khó |
| Lớp nhân vật Valve TF2 | 9 lớp, mỗi lớp silhouette riêng | [13] | Mức tách biệt để kiểm 2 loài khách và quái |
| Quy trình art nhân vật TF2 | silhouette, hình khối trong, model sheet, model, skin | [12] | Thứ tự duyệt yêu cầu art |
| Tốc độ, gia tốc, năng lượng/s của jetpack | chưa có nguồn công khai | n/a | Phải đo bằng prototype của gd-tech |
| Số cấp nâng cấp, độ tăng mỗi cấp | chưa có nguồn công khai | n/a | Do gd-economy và prototype quyết |

## 4. Phân tích game tham chiếu

| Game | Làm gì | Vì sao hiệu quả | Bài học cho Space Salvage |
|---|---|---|---|
| Hardspace: Shipbreaker | Nhân vật Cutter di chuyển zero-g Newtonian 6 trục, oxygen và nhiên liệu hữu hạn [3][8] | Input tối thiểu, phản hồi thị giác (chân vẩy, camera trễ) truyền cảm giác trọng lượng [4][5] | Với 2D side-view chỉ cần 2 trục: đừng thêm nút, dùng animation và camera trễ nhẹ để nói quán tính. Jetpack và oxygen cùng là tài nguyên, giới hạn chuyến bay |
| Dome Keeper | Keeper đào bằng drill, jetpack chịu ảnh hưởng đồ mang, nâng cấp suit tăng tốc và sức chứa [10] | Quyết định "mang thêm hay về" xuất hiện ngay trong di chuyển | Dung lượng nhặt ảnh hưởng tốc độ bay là một lựa chọn rẻ mà có chiều sâu. Cân nhắc làm nâng cấp tăng sức chứa trước, tốc độ sau |
| Moonlighter | Nhân vật là chủ quán kiêm thám hiểm, sức mạnh theo gear, không XP [11][17] | Một nhân vật phục vụ cả hai vòng, đồng bộ với tiền và đồ | Nhân vật chính chỉ có một danh tính dùng ở cả tầng và quán. Không thêm hệ XP |
| Dave the Diver | Khách quán là dân làng, có VIP và khách khó tính kèm backstory, hài hước có chủ đích [16][18] | Khách có tính cách riêng khiến vòng bán hàng có nội dung, không chỉ số | 2 loài khách mỗi loài cần một nét tính cách đủ viết cảnh, kèm luật phục vụ riêng (giao gd-quan) |
| Spiritfarer | Mỗi hành khách có sở thích, tính cách, mạch truyện, chế đồ hợp khẩu vị làm họ vui [15] | Tính cách thành cơ chế, không tách khỏi gameplay | Mỗi loài khách một sở thích cụ thể ảnh hưởng món gọi, silhouette khác nhau để đọc nhanh |

## 5. Sai lầm thường gặp ở team indie nhỏ

| Sai lầm | Hệ quả | Cách tránh |
|---|---|---|
| Chỉnh số jetpack theo cảm tính một mình | Mỗi người một cảm giác, không lặp lại được | Số trong bảng, thử trong prototype, ghi ngày và build |
| Không có khoảng tha thứ ngầm (nhặt, cắt, vào cửa) | Cảm giác "điều khiển dở" dù số đúng [1] | Thêm cửa sổ rộng hơn hình ảnh, coi như tham số cần đo |
| Thêm nhiều nút cho di chuyển tự do | Người chơi lạc hướng, mệt tay [4] | Giữ input tối thiểu, để nút còn lại cho hành động |
| Hết năng lượng là mất tất cả | Người chơi sợ rời quán | Luật cứu hộ có mất mát giới hạn [8] |
| Nâng cấp tốc độ làm mất kiểm soát | Cảm giác tay đổi mỗi cấp | Nâng cấp sức chứa và hiệu suất trước, tốc độ tăng nhỏ [9][10] |
| Hai loài khách khác nhau chỉ ở màu | Không đọc được, silhouette giống nhau | Silhouette test và đổi tỉ lệ [12][14] |
| Hồ sơ NPC dài nhưng không dùng được | Story không viết được cảnh | Mỗi hồ sơ có 3 câu mẫu và 1 động cơ rõ |
| Juice dày che thông tin | Mất đọc được chuyển động, trải nghiệm giảm đắm chìm [7] | Tăng từng lớp, bật tắt được khi thử |
| Phình nhân vật ngoài MVP | Trễ lịch | Ghi file đề xuất, chờ Lead mở phạm vi |

## 6. Nguồn

Chỉ liệt các link đã thấy trong kết quả tìm kiếm hoặc đã mở. Sách và talk không có link đã thấy (Swink "Game Feel", Cooper, Schell) nằm ở playbook, không lặp ở đây.

| # | Nguồn | Link |
|---|---|---|
| 1 | Maddy Thorson, "Celeste and Forgiveness" (đã mở, 10 kĩ thuật, số pixel) | https://maddymakesgames.com/articles/celeste_and_forgiveness/ |
| 2 | GameSpot, Celeste dev giải thích game feel | https://www.gamespot.com/articles/celeste-dev-explains-how-they-made-their-game-feel/1100-6474775/ |
| 3 | Goonhammer, Hardspace: Shipbreaker Early Access Review (Newtonian 6 trục) | https://www.goonhammer.com/hardspace-shipbreaker-early-access-review |
| 4 | Xbox Wire, Hardspace: Shipbreaker retrospective (thách thức zero-g, input tối thiểu) | https://news.xbox.com/en-us/2023/04/28/hardspace-shipbreaker-retrospective-making-of-game-pass/ |
| 5 | Unity case study Shipbreaker (đã mở, chân vẩy theo vận tốc) | https://unity.com/case-study/shipbreaker |
| 6 | GDC Vault, "Juice It or Lose It" (Jonasson, Purho, GDC Europe 2012) | https://gdcvault.com/play/1016487/Juice-It-or-Lose |
| 7 | Game Developer, Indies resist the urge to juice it | https://gamedeveloper.com/design/video-indies-resist-the-urge-to-juice-it-or-lose-it- |
| 8 | bit-tech, Hardspace: Shipbreaker preview (oxygen và nhiên liệu) | https://bit-tech.net/previews/hardspace-shipbreaker-preview/1/ |
| 9 | Hướng dẫn oxygen Subnautica 2 (nguồn phụ, không chính thức) | https://players.com.ua/en/news/subnautica-2-how-to-improve-oxygen-capacity-and-stay-underwater-longer/ |
| 10 | TechRadar, Dome Keeper (jetpack và đồ nặng) | https://www.techradar.com/features/dome-keepers-pacific-rim-style-monsters-test-your-self-restraint |
| 11 | TV Tropes, Moonlighter (nguồn phụ, không XP, sức mạnh theo gear) | https://tvtropes.org/pmwiki/pmwiki.php/VideoGame/Moonlighter |
| 12 | Valve, GDC 2008 "Stylization with a Purpose: TF2" | https://cdn.steamstatic.com/apps/valve/2008/GDC2008_StylizationWithAPurpose_TF2.pdf |
| 13 | Mitchell, Illustrative Rendering in TF2 (SIGGRAPH 2007) | https://www.advances.realtimerendering.com/s2007/Mitchell-IllustrativeRenderingInTF2(Siggraph07%20Course%20Notes).pdf |
| 14 | Valve, MIGS08 Connecting Visuals to Gameplay | https://cdn.fastly.steamstatic.com/apps/valve/2008/MIGS08_ConnectingVisualsToGameplay.pdf |
| 15 | GameSpot, phỏng vấn creative director Spiritfarer | https://gamespot.com/articles/spiritfarer-creative-director-when-creating-art-you-have-to-be-vulnerable/1100-6494493/ |
| 16 | Inven Global, phỏng vấn Hwang Jae-ho (MINTROCKET) | https://www.invenglobal.com/articles/22913/mintrocket-head-hwang-jae-ho-dave-the-diver-dredge-dlc-will-offer-a-different-gameplay-experience-from-the-main-game |
| 17 | MCV/Develop, tag Digital Sun (nhắc thách thức nhân vật kiêm chủ quán, chỉ thấy teaser) | https://www.mcvuk.com/tag/digital-sun/ |
| 18 | Software Engineering Daily, phỏng vấn dev Dave the Diver | https://softwareengineeringdaily.com/articles/developing-dave-the-diver-with-jaeho-hwang-and-minsuk-cha/ |
