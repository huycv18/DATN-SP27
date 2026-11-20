# Quyết định của game mới (slug tạm game-moi)

Mỗi mục: `## <yyyy-mm-dd> - <chủ đề>`, người quyết (Lead nguyên văn hoặc GDM), lý do, hệ quả. Ghi ngay khi quyết. Quyết định chung của phòng ở `production/DECISIONS.md`.

## 2026-11-19 - Định nghĩa lại game từ đầu

Lead: "Hãy coi như chúng ta chưa có gì hết và cần xác định lại từ đầu về game này." Hỏi lại thì Lead chọn "Bỏ cả ý tưởng" (bỏ cả không gian, jetpack, nhặt rác, bắt sinh vật, quán cho khách ngoài hành tinh).
Ràng buộc nền Lead giữ: ghi nguyên văn ở `concept.md` bước 0.
Cách làm, Lead: "đi từng bước, tôi sẽ đưa ý tưởng rồi chúng ta cùng phát triển ý tưởng đó và chốt từng thứ."
Hệ quả:
- `projects/space-salvage/` và Sheet GDD Space Salvage giữ để tra, không xóa, không dùng làm gốc. Đợt 1 và đợt 2 của Space Salvage dừng hẳn, GD-001 tới GD-016 chuyển `blocked`.
- Khuôn GDD Sheet (`docs/process/templates/gdd-sheet-khuon-indie.md`) và cách chia 10 vai theo hệ thống vẫn dùng.
- Art đổi từ pixel art sang 2D vector (có thể 2.5D). Không còn ràng buộc offline.

## 2026-11-19 - Bối cảnh phải khai thác vũ trụ rộng lớn, tên tiếng Anh

Lead đọc bản GAME STORY đầu (hướng B, xác tàu mẹ): "Viết hướng khác để khai thác được vũ trụ rộng lớn. Tên để tiếng Anh".
Hệ quả: bỏ hướng B làm khung chính (khám phá bên trong một con tàu). Bản story 2 lấy không gian mở làm nơi phiêu lưu. Mọi tên riêng (nơi, phe, nhân vật, game) viết tiếng Anh. Bản 1 giữ ở `story/game-story.md` để so.

## 2026-11-19 - Bàn giao GDM

Phiên GDM cũ bàn giao cho phiên "GDM" mới theo lời Lead. Không còn việc chạy ngầm. Mọi lời Lead đã nằm trong file (concept.md bước 0 và 1, các mục ở trên).
Đang treo:
- Lead chưa trả lời có lấy `story/game-story-v2.md` làm gốc không. 5 câu mở nằm ở mục 4 của file đó.
- Bản 1 (`story/game-story.md`) đã bị Lead bác về hướng, nhưng câu 6 GDM cũ nêu (trạm ở đâu) bản 2 đã trả lời: người chơi sống và bán đồ ở Tether Station.
- Bản 1 và bản 2 do subagent gd-story của phiên cũ viết. Subagent đó không chuyển sang phiên mới, việc tiếp theo giao cho phiên gd-story mới.
- Rủi ro chưa bàn: vũ trụ mở cần nhiều nền, nhóm chỉ có 1 artist vector. Để bàn ở bước 6.
- `concept.md` bảng bước: bước 1 vẫn ghi "Chờ Lead chọn hướng A, B, C". Thực tế hướng B đã bị bác, hướng hiện tại là không gian mở theo lớp (bản 2), cần sửa bảng khi Lead chốt.
- Space Salvage: GD-001 tới GD-016 đã chuyển `blocked`, đợt 2 (`projects/space-salvage/briefs/dot2-chuyen-noi-dung.md`) chưa giao. 25 tab mới trên Sheet cũ vẫn để trống, 17 tab `v0.1` đã ẩn.

## 2026-11-19 - Game có Multiplayer

Lead: "Game chốt sẽ đưa yếu tối Multi player vào game". Thay ràng buộc cũ "1 người chơi (để mở việc thêm MultiPlayer)".
Chưa chốt: dạng chơi (co-op hay PvP, online hay cùng máy), số người, Multiplayer có trong MVP hay sau MVP.
Hệ quả (GDM, chưa phải luật):
- Kiến trúc mạng phải chọn từ đầu, 4 dev cần quyết netcode Unity (Netcode for GameObjects, Mirror hoặc Fish-Net) trước khi viết gameplay. Thêm sau rất đắt.
- Story bản 2 đang viết cho một nhân vật nợ nần. Câu hỏi mở 2 (nhân vật chính có tên hay trống) và mục tiêu cuối phải tính tới nhiều người chơi cùng lúc.
- Core loop: oxy, túi đồ, tiền và nâng cấp là của từng người hay của cả nhóm, quyết ở bước 4.
- Phạm vi: Multiplayer làm tăng việc test và QA, tính vào bước 6.

## 2026-11-20 - Multiplayer là co-op 2 đến 4 người

GDM hỏi "Multiplayer là co-op online 2 đến 4 người?", Lead: "Co-op 2-4 người".
Chưa chốt: Multiplayer có trong MVP hay sau MVP, tài nguyên và tiến trình chia theo người hay theo nhóm (bước 4).
Hệ quả (GDM, chưa phải luật):
- Không có PvP. Không có chơi cùng máy trừ khi Lead nói thêm.
- Story: người chơi là một nhóm thợ chung một trạm, mục tiêu và nợ có thể của cả nhóm. Phải chơi được một mình (1 người là ca nhỏ nhất của co-op).
- Cân bằng: oxy, độ khó vùng, số tài nguyên phải co theo số người (1 đến 4), quyết ở bước 4 và 6.

## 2026-11-20 - Chơi đơn hoặc co-op, Lead đưa ý tưởng cốt truyện mới

Lead: "có thể chơi đơn hoặc chơi co op." và đưa bối cảnh mới (nguyên văn đủ ở `story/lead-y-tuong-2026-11-20.md`): Trái Đất cạn kiệt, liên minh các quốc gia lập đoàn di cư lớn nhất vào không gian, tàu mẹ gặp tai nạn bí ẩn trên đường tới hành tinh có tín hiệu sự sống, nhân vật chính và đồng đội tỉnh dậy từ khoang ngủ đông trên một trạm con hỏng, ra ngoài khai thác tài nguyên và sinh vật, nâng cấp trạm và trang bị, gặp trạm con khác, người ngoài hành tinh, lần manh mối vụ tai nạn, mục tiêu cuối là tới hành tinh đó dựng lại đế chế loài người. Lead: "Hãy đưa thông tin này cho gd story làm."
Đã chốt: chơi đơn và co-op 2 đến 4 người đều là cách chơi chính, không phải chế độ phụ.
Hệ quả:
- Ý tưởng của Lead thay story bản 2 làm gốc. Halcyon, Tether Station, nợ oxy, Exodus Fleet của bản 2 chỉ để tra, không mang sang trừ khi Lead nói.
- "Dùng tài nguyên như nào" Lead để mở. gd-story đề xuất lý do trong truyện, cơ chế quyết ở bước 4.
- Nửa quản lý (thể loại "khá giống Dave the Diver") chưa có trong ý tưởng mới. Ứng viên tự nhiên: vận hành và nâng cấp trạm con, giao thương với trạm khác. Trình Lead ở bước 4.

## 2026-11-20 - Trạm con 4 buồng ngủ đông, số người chơi là số người sống sót

Lead: "mỗi trạm có 4 buồng ngủ đông, nếu trong chế độ chơi đơn thì khi tỉnh dậy người chơi phát hiện là chỉ còn 1 mình sống sót còn nếu như chơi 2 hay 3 hay 4 thì cũng có thể giải thích được. Kiểu như buồng ngủ đông của người kia gặp lỗi về Oxy dẫn tới tử vong".
Đã chốt: mỗi trạm con có 4 buồng. Chơi N người thì N người tỉnh dậy, 4 - N buồng còn lại hỏng và người trong đó chết. Lỗi oxy là ví dụ của Lead, chưa chốt là nguyên nhân duy nhất.
Hệ quả (GDM, chưa phải luật):
- Trần co-op 4 người có lý do trong truyện, khớp DECISIONS co-op 2 đến 4.
- Buồng hỏng có thể nối vào bí ẩn tai nạn (lỗi ngẫu nhiên hay có người gây ra). gd-story đề xuất.
- Người chơi vào giữa chừng hay rời phiên co-op thì truyện giải thích thế nào: chưa có, hỏi ở bước 4.

## 2026-11-20 - Lead trả lời câu hỏi mở story bản 3 (câu 2, 3, 4)

Nguyên văn đủ ở cuối `story/lead-y-tuong-2026-11-20.md`.
Đã chốt:
- The Veyl trung lập. Loài người đã biết và tiếp xúc người ngoài hành tinh từ sớm. Đoàn di cư đi tìm hành tinh mới để định cư, không đi tìm tín hiệu sự sống. Từ khóa 3 cũ ("tín hiệu sự sống") đổi theo.
- Vụ tai nạn là âm mưu từ bên ngoài nhằm tiêu diệt loài người, nguyên nhân sâu xa là lòng tham của nhân loại, khai thác và phá hủy môi trường. Lead mở cửa cho bước ngoặt hay hơn.
- Buồng hỏng do hậu vụ nổ tàu mẹ làm trạm hư nặng, buồng nào lỗi là do không may. Phần lớn trạm con khác không kịp thoát và bị hỏng.
- Lúc tỉnh dậy trạm đang trôi vì hỏng, phải sửa mới đi được.
Lead nghiêng về, chưa chốt:
- Cấu trúc map theo kiểu Dave the Diver: trạm là điểm neo cố định, người chơi khám phá dần một map tổng và vài map nhánh, không chọn chặng trên bản đồ. Lead nêu vấn đề của đi theo chặng (chọn chặng, quay lại chặng cũ).
- Nửa quản lý: vớt người còn sống để mở tính năng (người nghiên cứu trang bị mới...). Lead cho đề xuất hướng khác tốt hơn.
Chưa trả lời: câu 1 (vào hoặc rời phiên co-op), câu 5 (giọng truyện).
Hệ quả (GDM, chưa phải luật):
- "Sửa mới đi được" và "điểm neo cố định" cần một cách khớp nhau, ví dụ sửa động cơ là cột mốc dời điểm neo sang vùng mới của cùng một map tổng, vùng cũ vẫn quay lại được. Trình Lead cùng bản 3 sửa.
- Map tổng + map nhánh chạm gd-world, giao sau khi Lead chốt.

## 2026-11-20 - Chốt câu 1 và 2 story bản 3 (co-op vào rời, giọng truyện)

Lead: "2 câu này bạn đề xuất tôi ko nhắc tới sửa là Oke rồi", kèm dán lại hai dòng câu 1 và 2 của bảng câu hỏi mở.
Đã chốt:
- Vào hoặc rời phiên co-op: người vào sau là người sống sót vớt về. Người rời thì nhân vật ở lại trạm. Luật cụ thể (số buồng hỏng chốt lúc tạo thế giới) quyết ở bước 4.
- Giọng truyện: nền nghiêm (sinh tồn, mất mát), hài nhẹ đến từ tính cách những người vớt được.
Còn mở: câu 3 (bước ngoặt, phòng đề xuất T1 khung + chi tiết Driftlife của T2), câu 4 (P1 hay P2, Solace là điểm kết hay vùng chơi), câu 5 (kết game, phòng đề xuất vẫn tới Solace nhưng dựng khác đi). Ba phản biện của gd-story (phạm vi MVP, chủ đề ngược core loop, lỗ hổng The Veyl) đã trình Lead, chờ Lead trả lời câu 3 và 5.

## 2026-11-20 - Lead xử lý 8 vấn đề mở theo Dave the Diver

Nguồn: `story/van-de-mo-theo-dave.md`. Lead trả lời:
- Vấn đề 1: "Bỏ bản án, The Veyl là gọi chung những người ngoài hành tinh và trong đó có một nhóm phản diện, chúng còn tham lam hơn loài người,... rồi âm mưu và gây ra tai nạn."
- Vấn đề 6: "Suy nghĩ 1 hướng khác" (không dùng nhà ăn trạm).
- Vấn đề 7: "có đồng tiền riêng, tiền có từ hoạt động gì đó có thể là giao thương".
- Vấn đề 8: "Bỏ qua phạm vi của Art đã".
- "những cái khác có thể là oke rồi".
Đã chốt:
- Bỏ T1 Bản án. The Veyl là tên gọi chung các loài ngoài hành tinh. Trong đó có một nhóm phản diện tham lam hơn loài người, âm mưu và gây ra The Sundering. Thay mục "The Veyl trung lập" cũ: phần lớn The Veyl vẫn trung lập, nhóm phản diện là một phe riêng.
- Game có đồng tiền riêng, nguồn chính là giao thương. Có thêm tiền thứ hai hay không: chưa chốt.
- Giai đoạn định nghĩa này không giới hạn theo sức art. Phạm vi art tính lại ở bước 6.
- Vấn đề 2: neo cố định (P1), map tổng 3 dải theo khoảng cách tới trạm, sinh lại mỗi chuyến, map nhánh riêng, Solace là điểm kết.
- Vấn đề 3: điểm thoát kéo về trạm rải trong map, cổng đi thẳng tới map nhánh đã mở (cơ chế cụ thể ở bước 4).
- Vấn đề 4: không phạt khai thác, Driftlife sinh lại mỗi chuyến, chủ đề nói qua nhân vật và cú lật Driftlife, có nuôi Driftlife, kết vẫn tới Solace nhưng dựng khác đi.
- Vấn đề 5: mỗi người vớt về mở một tính năng qua quest nhỏ hoặc mốc chương.
Vấn đề 6 chốt ở mục sau: ca cảng giao thương.

## 2026-11-20 - Nửa chơi tay thứ hai là ca cảng giao thương

GDM trình 3 hướng (A ca cảng giao thương, B ca giữ trạm, C ca phòng thí nghiệm) ở cuối `story/van-de-mo-theo-dave.md`, Lead: "A, ca cảng giao thương".
Đã chốt: sau chuyến ra ngoài là ca cảng giao thương tại Ember. Tàu thương nhân The Veyl và trạm người cập bến, đưa danh sách hàng, người chơi lấy hàng trong kho, chế thêm, đóng kiện, bốc lên tàu trước khi tàu rời. Đây là nguồn đồng tiền riêng của game (khớp vấn đề 7).
Đề xuất GDM chưa chốt: chen biến cố của hướng B (rò khí, chập điện) vào giữa ca. Phe phản diện có thể cải trang làm thương nhân.
Hệ quả: cơ chế ca, nhịp tàu, giá và tiền quyết ở bước 4 và 6. Vai giữ hệ thống này là gd-quan (đổi trọng tâm từ quán sang cảng), xem lại khi chia vai ở bước 5.

## 2026-11-20 - Phe phản diện: chủng tộc ghét loài người, dụ bằng thông tin giả

Lead trả lời câu 1 story bản 3: "Trong the Veyl như tôi nói là tên gọi chung như là ngoài ngoài hình tinh và trong đó có nhiều chủng tộc. Tôi thiên về việc chủng tộc này không ưa loài người vì con ngoài tham lam và phá hoại môi trường. Hệ mặt trời sụp đổ và phải rời bỏ trái đất là một ví dụ. Vì thế mà họ muốn tiêu diệt loài người bằng cách phát ra thông tin giả để dụ loài người rồi phục kích. Những the Veyl trung lập không biết về chuyện dó. Dấu vết sẽ lộ dần dần khi tiến sâu trong tiến trình khám phá."
Đã chốt:
- The Veyl là tên chung, gồm nhiều chủng tộc. Phản diện là một chủng tộc trong đó.
- Động cơ: chủng tộc này ghét loài người vì loài người tham lam và phá hoại môi trường. Hệ Mặt Trời sụp đổ, loài người phải rời Trái Đất là ví dụ.
- Cách làm: phát thông tin giả để dụ đoàn di cư rồi phục kích.
- The Veyl trung lập không biết âm mưu.
- Dấu vết lộ dần theo tiến trình khám phá (trả lời luôn câu 3: có mặt lớn dần, không chỉ lộ ở cuối).
Thay thế: bỏ bản "United Accord mua tọa độ từ The Hollowers" và động cơ "khoét rỗng hành tinh" của bản 3.
Chưa rõ, GDM hỏi Lead:
- Solace có thật không, hay chính Solace là thông tin giả.
- Lời Lead trước "chúng còn tham lam hơn loài người" và lời mới "ghét loài người vì tham lam" giữ cả hai (đạo đức giả) hay chỉ giữ lời mới.
- Câu 2 (Driftlife) Lead chưa trả lời, phụ thuộc động cơ phản diện.

## 2026-11-20 - Lead giao toàn quyền cho GDM hoàn thiện GDD

Lead: "Tôi giao cho bạn toàn quyền quyết định và điều phối các phiên dưới quyền hoạt động và hoàn thiện GDD, về các hệ thông mà chúng ta bàn trên. Đi sâu và chi tiết. Ghi lại những điểm bạn tự quyết vào log để tôi đọc lại sau."
Hệ quả:
- GDM chốt thay Lead các điểm còn mở để các vai làm tiếp, mỗi điểm một dòng ở `log-gdm-tu-quyet.md` kèm lý do, phương án đã bỏ và mức tốn khi đảo. Lead đổi dòng nào thì GDM sửa và báo các vai.
- Concept bước 2 đến 7 chốt theo ủy quyền, nội dung ở `gdd/00-khung-game.md` (fantasy, pillar, core loop, luật khung K1 đến K24, co-op C1 đến C10 (sau 4 lần sửa, xem log), 5 chương, hệ thống và chủ sở hữu, từ điển).
- Các điểm truyện còn treo ở mục trước (Solace có thật, phản diện đạo đức giả, Driftlife) GDM đã chốt: log dòng 1 đến 8. Phản diện đổi tên tạm thành The Wardens.
- Vẫn giữ: không push, không commit khi Lead chưa bảo. Lời Lead đã chốt không bị GDM đổi.
- GDD viết bản đủ cho cả game, nhãn MVP theo log dòng 29.

## 2026-11-20 - Sheet GDD của game

Lead: "đây là Link GDD của chúng ta" kèm link Sheet (ghi ở `so-hien-hanh.md`). Đây là Sheet cũ tên "GDD - Space Salvage (chưa đặt tên)": 25 tab theo khuôn indie còn trống, 17 tab `v0.1` đã ẩn.
Hệ quả: không tạo Sheet mới. GDD hệ thống viết markdown trong repo trước, gd-qa chấm ĐẠT rồi GDM và vai giữ tab dán vào 25 tab này bằng `/gdd-sheet-sync`. Không đụng 17 tab `v0.1` ẩn. Đổi tên file Sheet khi có tên game.

## 2026-11-20 - Solace là thông tin mồi, kết mở cho hậu bản

Lead: "Solace là một cái kết mở, sau khi biết được sự thật về Solace là một thông tin mồi thì Ở đây chúng ta để lại cái kết mở cho toàn bộ câu chuyện để có thể ra thêm phần hậu bản... Rằng phần sau liệu có thể tìm ra dc Solace thực sự ? Hay gì đó"
Đã chốt: Solace mà đoàn di cư nhắm tới là thông tin mồi của phản diện. Game kết mở, không tới Solace. Câu hỏi "có Solace thật không" để cho phần sau.
Thay thế: "kết vẫn tới Solace nhưng dựng khác đi" (mục 8 vấn đề), "Solace là điểm kết", log GDM dòng 1 (Solace có thật).
GDM tự quyết thêm (log dòng 36 đến 38): sự thật lộ ở chương 4, chương 5 có mục tiêu mới là rời bãi vỡ, móc hậu bản là bản khảo sát thật bị The Wardens giấu.
File đã sửa: `gdd/00-khung-game.md` (B4, B9, B11, K10, chương 4 và 5). gd-story và gd-world nhận tin gộp vào GD-022, GD-026.

## 2026-11-20 - Lead sửa phản diện: tên độc tài đảo chính, người thừa kế Y, cách mạng

Nguyên văn đủ ở cuối `story/lead-y-tuong-2026-11-20.md`.
Đã chốt (Lead nói):
- Bỏ "phản diện tham lam hơn loài người". Cái nhìn "loài người tham lam, xấu tính" là cái nhìn phiến diện của một tên độc tài (X), không phải sự thật của game.
- Bối cảnh chủng tộc phản diện: từng có chiến tranh vũ trụ khi các hành tinh phát hiện sự sống của nhau. Sau chiến tranh, người cai trị cũ của hành tinh đó chủ trương chung sống hòa bình với nhiều chủng tộc.
- X là con trai một sĩ quan hy sinh trong cuộc chiến đó, nuôi hận thù, đảo chính lật đổ người cai trị. Để ổn định quyền lực và đoàn kết chủng tộc sau đảo chính, hắn hướng sự chú ý sang Trái Đất. Biết Trái Đất đang tìm hành tinh để di cư, hắn phát tín hiệu giả dụ đoàn di cư rồi phục kích.
- Dưới X, hành tinh từng đẹp và hòa bình thành hiếu chiến: ép lính, dung túng cướp bóc và tệ nạn, khơi mào chiến tranh.
- Y là con gái người cai trị cũ, người thừa kế hợp pháp, đang giả làm thương nhân. Trong một chuyến ra ngoài, người chơi bắt gặp cuộc tấn công bắt cóc Y và cứu Y. Biết đoàn là loài người đang đi tìm lời giải, Y lộ danh tính và xin giúp. Y cùng mạng lưới quân cách mạng và người nằm vùng đã chuẩn bị lật đổ X.
- Đoàn hộ tống Y về căn cứ và giúp kết nối tình báo, nhờ đó mạng lưới thông tin thông suốt và cách mạng thành công. Y lên nắm quyền, lập lại hòa bình, giúp loài người tìm người sống sót, và trao cho đoàn thông tin về một hành tinh có sự sống thực sự để xây dựng lại đế chế.
Thay thế: khung B3, B5, B11 cũ, log GDM dòng 3 (đạo đức giả), 5 (Driftlife bị kết tội), 36 đến 38 (chương 5 và móc hậu bản). Gốc chủ đề "lòng tham của nhân loại gây ra tai nạn" đổi thành "hận thù và định kiến của một kẻ độc tài gây ra tai nạn". Trái Đất cạn kiệt vẫn là sự thật (B1).
GDM tự quyết để làm tiếp: `log-gdm-tu-quyet.md` Phần 8 (dòng 84 đến 92).

## 2026-11-20 - Core Pillars theo đúng Five Core Pillars của Dave the Diver

Lead đưa Five Core Pillars của Dave the Diver, rồi chốt: "tôi muốn giữ giống như Dave the Diver đó là điểm mà game sẽ follow."
Đã chốt: năm pillar theo đúng tên, thứ tự và Player Experience của Dave: 1 Exploration & Discovery, 2 Risk & Reward, 3 Management & Optimization, 4 Progression & Growth, 5 Variety & Delight. Nội dung từng pillar viết cho game này (bãi vỡ, Oxy, trạm và ca cảng, nâng cấp, truyện Serith và Sevra).
Thay thế: log GDM dòng 95 (5 pillar tự đặt) và bộ P1 đến P4 cũ.
GDM tự quyết: co-op (Lead chốt là cách chơi chính) không mất đi mà thành "nguyên tắc nền Solo or Together" mọi pillar phải tuân theo. Mã cũ P1 đến P5 trong các GDD đọc theo bảng ánh xạ ở khung mục 2, mã mới là CP1 đến CP5, để 10 GDD không phải sửa chéo (log dòng 96).

## 2026-11-20 - Sửa hệ thống tên nhân vật

Lead duyệt: "Oke sửa lại hệ thống tên nhân vật".

- Đổi tên làm việc của phản diện từ Serith thành Daskel, đọc DAS-kel. Âm đầu và vần tách khỏi Sevra khi hai người được nhắc cùng cảnh. Danh xưng vẫn là First Warden. Mã nhân vật WD-P1, boss BS-5 và mã câu thoại VO_SER giữ giá trị cũ.
- Dùng Sevra Ilvane và First Warden Daskel khi lộ danh tính ở C3.8. Ilsume vẫn là tên giả của Sevra trước cảnh đó.
- Quy tắc âm theo nhóm, cách đọc và hình tượng của dàn The Veyl nằm ở GDD cốt truyện mục 12. Tên các nhân vật còn lại tiếp tục dùng cách viết hiện có.

## 2026-11-20 - Chốt tên game The Novent

Lead chốt: "thôi để là The Novent đi".

Tên chính thức: **The Novent**, đọc gần đúng **NÔ-ven(t)**. Ghép **Nova** và **Venture**, gợi chuyến đi mở đầu một kỷ nguyên mới cho nhân loại.

Station Ember là tên trạm trong truyện. Slug kỹ thuật vẫn là `projects/game-moi/` để giữ các đường dẫn và công cụ hiện có.

## 2026-11-20 - Chốt tên Driftlife, kẻ địch, địa danh và tàu

- Dân thu hồi The Veyl gọi Driftlife theo dáng và hành vi. Chốt Latchjaw, Orebiter, Needlefin, Shardbrood Queen và Shardbrood Hatchling. Giữ các tên đã hợp thế giới như Driftmoth, Arc Eel, Shepherd Whale, Scrapmaw và Tempest Gulper.
- The Wardens gọi đơn vị theo nhiệm vụ: Warden Harvester, Warden Lancer, Warden Snarer, Warden Collector và Warden Reaper. Tên hệ an ninh tàu mẹ là Cradle Custodian.
- Giữ bản đồ The Wake và ba dải Ember Anchorage, Shepherd Belt, Glass Nebula. Chốt các tên Ember Mooring, Shatterline, Lantern Berth, Cradle Interior, Broken Hold, Cryo Deck và Bridge Archive. Hazard đặc trưng là Glassflare, Dead Air và Warden Cutline.
- Tàu trong tab Customer: Loose Bolt của Tikko, Lamplighter của Station Lantern, Vellune của Ilsume, Glasswing của Vaeth, Iron Keel của Dromm, Stayfast của The Remainers, Backchannel của Nhem và Pilot Light là mật danh tàu chuyển tin của The Kindling.
- Dùng tên mới làm tên hiển thị theo tab Enemy, Zone và Customer. Giữ mã thực thể và nhãn chức năng phục vụ production.

## 2026-11-20 - Tách GDD con

Lead: "tách nhỏ GDD to này ra thành các bản Modul", "kiểu tạo ra nhiều bản GDD con được Link với GDD chính", tạo trong thư mục Drive Lead đưa.

- GDD chính là Sheet `1kGdCePi8LDK1sGxfH7FK5sswVTgsXO71N4QyjzZP7Bs`. Giữ OVERVIEW, TRACKING, CORE LOOP, Day, Assets, AUDIO ASSETS LIST, MVP Criteria Checklist, Playtest Report, Bugs Report và tab GDD CON (bảng link, nguồn `gdd/sheet/GDD CON.tsv`).
- 9 GDD con, mỗi hệ thống một file, chia theo vai giữ tab (GDM chọn): 01 Story (GAME STORY), 02 Nhân vật (Player), 03 Combat và Driftlife (Enemy), 04 Vật phẩm (Salvage, ITEM LIST, Recipe), 05 Map (Zone), 06 Trạm và cảng (Customer), 07 Kinh tế và tiến trình (ECONOMIC, Shop, Upgrade, PROCESSING, Balance Sheet), 08 UX UI (WIREFRAME, Tutorials), 09 Kỹ thuật (Event Tracking).
- Mỗi file con có tab INFO đứng đầu: link về GDD chính, vai giữ, tab trong file, link GDD hệ thống trong repo, quy ước sửa. Tab chép bằng copyTo nên giữ nguyên định dạng.
- Nguồn luật vẫn là GDD hệ thống markdown trong repo. Sheet con là bản hiển thị của hệ thống đó. Đổi luật: sửa markdown, sinh TSV, dán vào file con, ghi TRACKING ở GDD chính.
- `tools/tham-so/sheet.json` có khóa `file` ghi tab nào nằm ở file con nào, `doi-chieu-sheet.mjs` tải từ đúng file.
- File con do tài khoản iKame của Lead tạo (connector), nằm trong thư mục Drive dùng chung. File con dùng locale Việt: công thức phân cách bằng ";".

## 2026-11-20 - Dùng bản tóm tắt truyện trong GDD Story

Dùng đoạn tóm tắt theo hành trình của Noor và tổ Ember, không có hội thoại, làm nội dung mở đầu của tab GAME STORY. Bản truyện minh họa vẫn nằm trong tài liệu riêng.

Sửa cùng ngày, Lead: "GDD không phải là tách hết ra mà những hệ thống nào lớn quá và cần tách riêng ra thì mới tách. Và đảm bảo các GDD modul này được trình bày khoa học đầy đủ. GDD chính vẫn giữ được yếu tố tổng quát cốt lõi."

- Bỏ cách tách cả 9 hệ thống ở trên. Chỉ hệ thống lớn và cần tách mới có GDD con. Danh sách chờ Lead chốt.
- GDD con phải đủ như một GDD hệ thống (mục đích, luật, tham số, biên, yêu cầu, nghiệm thu), không chỉ là tab dữ liệu chép sang.
- GDD chính giữ phần tổng quát cốt lõi của mọi hệ thống, kể cả hệ thống đã tách (tóm tắt và link).
- Chưa xóa tab nào ở GDD chính.

Chốt cùng ngày, Lead chọn "Tách 3 lớn nhất":

- GDD con chỉ có 3: 01 Story (cot-truyen.md, tab GAME STORY), 02 Combat và Driftlife (combat-driftlife.md, tab Enemy), 03 Vật phẩm (vat-pham.md, tab Salvage, ITEM LIST, Recipe). Thư mục Drive: https://drive.google.com/drive/folders/1y7pgu2TOxUScoCcNl40OAn3D1362NqRt. 6 file con của lần tách đầu đã chuyển vào thùng rác.
- Khuôn GDD con: TỔNG QUAN, LUẬT, THAM SỐ, các bảng dữ liệu, (TÊN RIÊNG, VOICE SHEET với Story), TRƯỜNG HỢP BIÊN, YÊU CẦU, NGHIỆM THU, CÂU HỎI VÀ LỊCH SỬ. Tab khuôn sinh bằng `tools/dung-gdd-con.py` từ GDD hệ thống, mỗi mục "## " vào đúng một tab, script tự kiểm mỗi dòng nội dung thành một hàng. Không sửa tay trên Sheet.
- GDD chính bỏ 5 tab GAME STORY, Enemy, Salvage, ITEM LIST, Recipe (còn trong lịch sử phiên bản của Sheet). Tab GDD CON đứng sau OVERVIEW giữ tóm tắt từng hệ thống đã tách và link. 6 hệ thống còn lại (Nhân vật, Map, Trạm và cảng, Kinh tế, UX UI, Kỹ thuật) giữ đủ trong GDD chính.
- 3 file con bật "ai có link được xem" để `doi-chieu-sheet.mjs` đọc được.
- GDD chính có lối tắt trong cùng thư mục Drive với 3 GDD con (Lead: "Đưa GDD Chính vào trong Drive luôn"). Là lối tắt vì file gốc thuộc nguyenplus2005@gmail.com, tài khoản sửa không di chuyển được. Muốn chuyển hẳn thì chủ file chuyển hoặc chuyển quyền sở hữu.
