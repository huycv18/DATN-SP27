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

## 2026-11-20 - GDD con bản đọc

Lead: "Cách tập con rườm rà, rối rắm không gọn gàng không dễ hiểu và hơi thừa những thông tin không cần thiết. Giao cho các phiên con sửa lại formats của GDD cho nó dễ đọc, gọn gàng, nội dung dễ hiểu, căn chỉnh đẹp cho tôi."

- Bỏ cách chép nguyên văn GDD hệ thống sang GDD con. GDD con là bản đọc cho dev, art, PM theo `gdd/sheet/gdd-con/KHUON.md`: một hàng một ý, bỏ lịch sử, tự quyết, phản biện, lệch với vai khác.
- Vai giữ hệ thống viết TSV ở `gdd/sheet/gdd-con/<module>/`. Trình bày do `tools/dung-gdd-con.py` lo (cổng `kiem`: đúng cột, ô tối đa 280 ký tự, chữ cấm, mọi số phải có trong GDD hệ thống). Đợt 7: `briefs/dot7-gdd-con-gon.md`.

## 2026-11-20 - Bỏ GDD con, về một GDD

Lead: "chuyển GDD về 1 bản không tách GDD con nữa".

- GDD chính `1kGdCePi8LDK1sGxfH7FK5sswVTgsXO71N4QyjzZP7Bs` lại là file duy nhất, đủ 25 tab như trước khi tách. 5 tab GAME STORY, Enemy, Salvage, ITEM LIST, Recipe chép lại từ 3 file con (copyTo, giữ định dạng), đặt về vị trí cũ, gid mới ghi ở `tools/tham-so/sheet.json` (bỏ khóa `file`). Đối chiếu sau khi gộp: 24 tab KHỚP, 0 ô lệch.
- Tab GDD CON ở GDD chính ẩn, không xóa. 3 file con trên Drive để nguyên, không cập nhật nữa, không chuyển vào thùng rác khi Lead chưa bảo.
- Bản đọc của 3 module (`gdd/sheet/gdd-con/`, `tools/dung-gdd-con.py`, `gdd/sheet/gdd-con/KHUON.md`) giữ trong repo để tra, không đưa vào GDD chính. Nguồn luật vẫn là GDD hệ thống markdown.
- Xóa hẳn cùng ngày (Lead: "Vậy tôi xóa bỏ các GDD con nhé"): 3 file con chuyển vào thùng rác Drive, xóa tab GDD CON ở GDD chính, xóa khỏi repo `gdd/sheet/gdd-con/`, `gdd/sheet/GDD CON.tsv` và `.html`, `tools/dung-gdd-con.py`. Bản cũ còn trong lịch sử git và thùng rác Drive 30 ngày.

## 2026-11-20 - Định dạng GDD chính

Lead: "sửa formats cho GDD, căn chỉnh, kẻ viền cho đẹp". 22 tab (trừ OVERVIEW) theo khuôn indie mục 2: thân chữ Lexend 10, wrap, căn giữa dọc, viền ngoài #351C75 đậm vừa, viền trong #B4A7D6, cao dòng tự co, ẩn lưới. Màu tab: ECONOMIC #351C75, nhóm D #8E7CC3. Tab thêm hàng thì chạy lại `tools/dinh-dang-sheet.mjs`.

## 2026-11-20 - Sheet GDD là bản đọc: soát lệch, viết gọn, ID là số thứ tự (đợt 8)

Lead: "Soát nội dung của GDD, có nhiều lỗi không khớp như Core Pillars chốt ở Overview nhưng bên Coreloop đang không khớp. Các nội dung viết khó hiểu, hãy sửa lại để người Việt Nam dễ đọc hiểu hơn, gọn gàng về nội dung hơn. Thay các ID phức tạp sang số thứ tự thôi."

- CORE LOOP bỏ 4 pillar cũ (P1 đến P4), thay bằng 5 Core Pillars và nguyên tắc nền của OVERVIEW, mỗi pillar ghi chặng nào của vòng chơi gánh chính.
- 23 tab viết lại theo `briefs/dot8-gdd-de-doc.md`: câu ngắn, một ý một dòng, bỏ ý lặp, không đổi luật và số.
- Cột ID mọi tab là số thứ tự 1, 2, 3. Trong chữ không còn mã (K1, C3, RES-101, TA01, C1.1...): ghi bằng tên. Tham chiếu sang tab khác bằng tên, không bằng số.
- Mã dữ liệu giữ ở GDD hệ thống markdown và JSON cho tool, Unity. Sheet không mang mã.
- Cổng máy `tools/kiem-de-doc.mjs` chặn mã, ID không phải số, gạch dài, chấm phẩy, emoji, đường dẫn dài, dòng quá 300 ký tự. Chạy trước mỗi lần dán Sheet.
- TSV của Sheet từ nay sửa tay. Xóa 5 script sinh TSV cũ (`sinh-customer.py`, `sinh-enemy.py`, `sinh-game-story.mjs`, `doi-chieu-game-story.mjs`, `sim/sinh_zone.py`) vì chạy lại sẽ ghi đè bản đọc. `xuat-event-tracking.mjs` giữ cho selftest, không dùng ghi tab.

## 2026-11-20 - Cột STT thay cột ID (đợt 8, vòng 3)

Lead: "GDD bị mất cột số thứ tự rồi ý tôi là Thay cột ID bằng cột thứ tự mà".

- Header cột ID ở 18 tab đổi thành "STT" (Issue ID, ID, Item ID, No, Task của TRACKING, Mã của GAME STORY). ECONOMIC "Day ID" thành "Ngày", PROCESSING "Day ID" thành "Chương" vì cột đó ghi ngày và chương, không phải số thứ tự.
- MVP Criteria Checklist trước đây để mã trong ô tên, nay có cột STT riêng ở đầu (1 đến 130).
- Lead sửa tay OVERVIEW trên Sheet, đã kéo về repo: Age Rating là E+10, bỏ dòng "Quyền" ở Define GDD.


## 2026-11-20 - Ca cảng theo khung Dave (đợt 9)

Lead: "tôi muốn làm phần này giống phần bán sushi trong Dave the Diver để nó được đơn giản và game vẫn vui", chọn hướng "Khung Dave, giữ cảng", xem demo rồi chốt: "Oke phần này luồng oke rồi cần làm cho nó tốt hơn thôi là được. Update vào GDD đi".

- K13 đổi: trước ca lập danh mục bán (tối đa 4 loại hàng ở chương 1), Thông dịch viên tự đóng thùng. Trong ca tàu cập 3 cửa neo của bến 1, mỗi tàu gọi 1 thùng, người chơi mang thùng từ quầy tới đúng cửa neo, bơm khí cho tàu đang chờ. Trả giá thùng cộng tip theo kiên nhẫn còn lại. Tàu hết kiên nhẫn thì chỉ mất món đó, hàng về kho.
- Bỏ khỏi ca: đơn nhiều dòng, đơn đủ và đơn trượt, thưởng đủ đơn, thưởng nhanh, máy đóng kiện chạy tay, chế trong ca, kệ kiện, tốc độ chạy theo cỡ kiện.
- Thùng = 0,4 kiện. Lý do: bot ở demo đo bản 10 tàu, mỗi tàu 1 kiện thì rảnh 76% ca. Bản 25 tàu, mỗi tàu 1 thùng: rảnh 24% ở trễ phản xạ 2 giây, Tally một ca gần như không đổi.
- Giữ đơn đặt trước (1 tới 2 mỗi ngày, giá cao, hiện ở bảng tàu) để còn mối nối "đọc bảng tàu rồi chọn dải".
- Co-op (C8): số tàu trong ca tăng theo số người, thay cho quy mô đơn. C9: người về trạm sớm chế trước ở xưởng thay cho đóng kiện trước.
- Giữ nguyên: một ca mỗi ngày, mở ca khóa cửa khí, bỏ ca không phạt, không trừ Tally, Hạng cảng không giảm, tàu theo mốc truyện, sự cố từ chương 3, K17 không nấu ăn.
- Lead: "cần làm cho nó tốt hơn". Việc cải thiện mở ở đợt 9: giãn giá hàng để lập danh mục có thế cân, đặt lại ngưỡng Hạng cảng (một ca cho tới 50 điểm), sim co-op.
- Nguồn: `de-xuat-ca-cang-kieu-dave.md` (đã chốt), demo `tools/prototype/ca-cang-dave.html`. Khung, `so-hien-hanh.md` đã sửa. Brief `briefs/dot9-ca-cang-kieu-dave.md`.

## 2026-11-20 - Tab GAME STORY trình bày theo khối

Lead: "Sửa lại sheet Game Story, trình bày nó khoa học, đầy đủ và dễ nhìn dễ hiểu".

- Tab chia 11 khối, mỗi khối có dòng tiêu đề (kèm nguồn) và dòng tên cột riêng, STT đánh lại từ 1 trong từng khối: Tóm tắt, Bối cảnh theo dòng thời gian, Năm chương, Mốc truyện, Nhân vật, Chủng tộc The Veyl, Trạm con có truyện, Tên riêng, Luật kể chuyện, Giọng văn, Quy ước đặt tên.
- Ô văn xuôi "Điều kiện / Nơi / Mở" cũ tách ra thành cột riêng. Thêm 3 khối lấy từ `cot-truyen.md`: bối cảnh (mục 2.4), luật kể chuyện (mục 2.1, bản tóm), giọng văn (mục 13).
- Định dạng: tiêu đề khối nền tím vừa chữ trắng, tên cột nền tím nhạt, viền xám, Lexend 10, cố định 1 hàng. Tab này có nhiều hàng tên cột nên `kiem-de-doc.mjs` không kiểm cột ID của nó.
- CORE LOOP là mục lục của 8 tab Player, Enemy, Salvage, Recipe, Customer, Upgrade, Day, Zone (Lead chọn "Mục lục, giữ tab"): khối 8 "Mục lục tab chi tiết" mỗi tab một dòng, cột Ref bấm sang tab. 8 tab và CORE LOOP cùng màu #B4A7D6. Không gộp nội dung vào một tab.
- Vòng 2 (GDM chốt theo sim GD-054 vòng 2): 3 cửa neo ở mọi số người. Bơm khí bật lúc cập ở 50% tàu nên ca 3 và 4 người rảnh 19% và 27% ở trễ 2 giây. Không mở cửa neo theo số người (giữ C8). Cửa neo thứ 4 là nâng cấp Cảng cấp 2 ở Hạng 4, Sau MVP. Số tàu chương 1 theo số người 25, 55, 55, 60. Tip tối đa hạ từ 30% xuống 25% vì tip kể cả bơm khí vượt 30% ở 3 và 4 người.
- Vòng 2: giá thùng 5 bậc (40 tới 80 Tally chương 1), hệ số ngân sách 0,40 lên 0,54 nên giá Shop và Upgrade tăng khoảng 35% (GD-055). Tàu vội chỉ tới khi danh mục có băng hoặc khoáng, Tikko gọi đồ Trái Đất nhiều gấp đôi hàng chợ (GD-051, cải thiện theo ý Lead).
- Lead "Cho sửa" (2026-11-20): `sim/vat-pham.mjs` vá theo đơn vị thùng (sink "Bán theo thùng ở ca cảng", khối kho, bỏ cỡ kiện, bảng thùng mỗi kiện, công thức Cảng đóng lúc Mở ca). Chạy lại `--ghi` cập nhật 29 dòng khối ITEM còn sót "Bốc lên tàu". `--tsv` từ nay chỉ ghi ra `sim/out-tsv`, không ghi đè TSV bản đọc của Sheet.
- Lead chốt (2026-11-20, "Nguyên cái"): Bản sao dữ liệu và Kiện tin mật bán nguyên cái như lồng sống, một cái là một đơn vị bán, giá bằng giá kiện (315 và 1305 Tally). Đã sửa script vật phẩm, sim kinh tế, `vat-pham.md`, `kinh-te-tien-trinh.md`, tab ITEM LIST, Recipe, Shop và dán Sheet, đối chiếu khớp.

## 2026-11-23 - Soát văn GDD và đồng bộ Sheet

Lead: "sửa lại GDD", "Sửa Sheet". Báo cáo: `production/reports/2026-11-23-humanizer-gdd.md`.

- 11 file GDD sửa câu văn (bỏ lịch sử trong thân luật, phủ định thừa, câu chốt lặp), không đổi luật, số, ID. Lịch sử chuyển xuống bảng Lịch sử thay đổi của từng file.
- Lead sửa tay OVERVIEW B22 trên Sheet ("chưa chốt nhé"), đã kéo về `gdd/sheet/OVERVIEW.tsv`.
- OVERVIEW trên Sheet còn bản trước đợt 9 và USP lần 1 ở 7 ô (B7, B9, B15, D15, B20, B24, B28): đã ghi bản repo lên, gồm USP lần 2. B28 tách dòng dài cho qua cổng 300 ký tự.
- Sửa 3 ô nhỏ: ITEM LIST D143 (STY-501), Upgrade D7, TRACKING I3. Ghi bằng connector Google Sheets theo từng ô, giữ định dạng tab. `doi-chieu-sheet.mjs` KHỚP 23/23 tab.

## 2026-11-23 - USP viết theo mẫu của Lead

Lead đưa mẫu 3 ý theo khung USP của Dave the Diver: "kiểu kiểu như này ngôn từ nó chuyên nghiệp cơ". Lead giữ ý "Nội dung đa dạng, nhịp độ thư giãn" sau khi GDM đã phản biện ý này trái CP2 (log dòng 98).
Hệ quả: USP gồm 4 ý, giọng giới thiệu sản phẩm, bỏ cột so với Dave. Ý 2 viết thành căng khi bay, chậm trên trạm, thất bại không phạt nặng để không trái CP2. Ý 4 co-op thay ý DLC. Sửa `gdd/00-khung-game.md` mục 15 và ô USP tab OVERVIEW.

## 2026-11-23 - Giữ co-op 2 người trong MVP

Lead: "Giữ co-op trong MVP", sau khi GDM phản biện trong review Sheet (`production/reports/2026-11-23-review-gdd-sheet.md`, rủi ro 2): co-op online trong MVP cộng với 1 artist, 4 dev và chưa có mốc thời gian là rủi ro phạm vi Cao, GDM đề xuất làm MVP một người trước rồi gộp co-op sau.
Hệ quả: MVP có co-op 2 người online từ đầu, nhãn đổi từ (G) log 28 sang (L). Rủi ro phạm vi vẫn mở, cần dev ước công S/M/L từng mục MVP khi Lead có mốc thời gian.

## 2026-11-23 - Đổi Sheet GDD chính

- Lead xem GDD ở Sheet "Game Design Document - The Novent" (`1NayaWIuhGD9p3Czlff9sCubY610Ksye4bo97R_QqPdE`, chép từ Sheet cũ ngày 2026-11-20), trong khi tool và các lần dán vẫn trỏ vào Sheet cũ "GDD - The Novent" (`1kGdCePi8LDK1sGxfH7FK5sswVTgsXO71N4QyjzZP7Bs`). Lead chốt bằng lời: dùng Sheet mới làm GDD chính.
- Hai Sheet cùng tên tab và cùng gid, nên chỉ đổi `spreadsheetId` trong `tools/tham-so/sheet.json` và dòng Sheet GDD trong `so-hien-hanh.md`. Sheet cũ thôi dùng, không dán vào nữa.
- Lead bật chia sẻ xem bằng link cùng ngày. Đối chiếu lần đầu: 12 tab KHỚP, phần lệch là bản cũ chép từ 2026-11-20 (giá trị có trong lịch sử git). Đã dán OVERVIEW (USP và 6 ô), TRACKING I3, Upgrade D7. Kéo về repo tiêu đề OVERVIEW A1 Lead sửa tay ("OVERVIEW - The Novent"). Ô OVERVIEW B11 trống trên Sheet mới, giữ nguyên chờ Lead. Assets, AUDIO ASSETS LIST, WIREFRAME, ITEM LIST, GAME STORY còn lệch, để phiên đang sửa các TSV đó dán sau khi xong.

## 2026-11-23 - Bảng màn UX còn 30, thêm HUD boss và hộp xác nhận

Lead chọn "Sửa ux-ui.md" sau đánh giá wireframe trên Figma (`production/reports/2026-11-23-wireframe-figma.md`). Đây là quyết định UX trong thẩm quyền GDM, không chạm luật lõi.
Hệ quả: 35 màn còn 30. Bỏ sảnh co-op UI-03 (bạn vào sau bất kỳ lúc nào qua UI-04, chủ phòng mời từ UI-50). UI-20 thành trạng thái Chờ nhóm của UI-10, UI-45 thành khối trong UI-43. UI-32, UI-41, UI-42 thành phần tử HUD (HUD-16, HCH-06, HCH-12). Thêm UI-54 hộp xác nhận, xóa thế giới ở UI-01, HUD-17 thanh boss theo cơ chế pha (boss không có thanh Choáng), HUD-18 thanh Choáng và dấu Bất lực trên Driftlife. Đai dụng cụ 3 đến 5 ô theo `nguoi-choi.md`. Wireframe: Figma The Novent, trang Wireframe MVP. Tab WIREFRAME đã dán lên Sheet chính (1Naya...) bằng connector, hàng 3 đến 32, xóa 5 hàng thừa, `doi-chieu-sheet.mjs` KHỚP 30 hàng.

## 2026-11-23 - Rà chéo 23 tab Sheet và các điểm GDM chốt khi sửa

Lead giao: đợi phiên review GDD xong thì review và sửa GDD. GDM cho gd-qa rà chéo 18 tab còn lại theo 3 nhóm (`qa/2026-11-23-ra-cheo-A.md`, `-B.md`, `-C.md`), sửa repo và dán Sheet chính `1Naya...`. Báo cáo: `production/reports/2026-11-23-ra-cheo-sua-gdd.md`.
GDM chốt trong thẩm quyền (chốt mâu thuẫn giữa vai, không đổi luật lõi):
- Xưởng cấp 2 giữ vai cổng: bộ đồ từ bậc 2 (5 trục) cần Xưởng cấp 2, dụng cụ không. Sim mua Xưởng cấp 2 trước.
- Khoang sinh quyển cấp 3 giữ mốc chương 3, có dòng giá riêng 14700 Tally ngoài phần chia ngân sách chương 3 (chương 3 chi thật 145000 so với ngân sách 130350, chấp nhận vì thời lượng vẫn trong mục tiêu). Gói chương 4 thành "Cấp 3 các khoang còn lại", giữ 18350.
- Máy quét xung mở chương 2 theo Shop và sim.
- Đơn đặt trước: chương 1 và từ chương 2 có 1 đơn mỗi ngày, từ Hạng cảng 8 có 2 đơn.
- Sim kinh tế làm tròn Tally thu mỗi ca về số nguyên. Kết quả mới: chương 1 1,90 giờ, cả game 14,2 giờ, nhóm 4 bằng 71%.
- Mọi phím gán lại được trừ Esc và Start (theo ux-ui.md mục 2.9).
- Âm SFX_Order_Complete và SFX_Order_Missed đổi tên thành SFX_Ship_Served và SFX_Ship_Left vì đơn nhiều dòng đã bỏ.
- Co-op MVP 2 người: không sửa ky-thuat.md luật 12 (4 slot là của bản đủ). Bản MVP khóa ô 3 và 4 ở màn Tạo thế giới như WIREFRAME.
- Không đổi: Recipe ghi bậc 4 "chương 4 đến 5" (cửa sổ mở, khác chương mua), Balance Sheet hàng 28 (đã đánh dấu thay).

## 2026-11-23 - Tài liệu nộp: Doc thiết kế 2 phần, tiếng Việt

Lead xem folder Documents của nhóm Timberwalls (khóa trước) và giao: "Oke để học theo các làm này của họ hãy lên kế hoạch". GDM đề xuất kế hoạch 3 đợt. Lead chốt: "Tiếng Việt, 2 phần".
Hệ quả:
- Tài liệu nộp là một Doc thiết kế viết tiếng Việt, 2 phần như "Tutorial - Book Of Timberwalls" của họ. Phần I Điều khiển: từng thao tác có ảnh build, đánh số hình. Phần II Thành phần game: mỗi hệ thống MVP một mục, có luật, công thức, bảng số, sơ đồ luồng, link sang tab Sheet.
- Nguồn của Doc nằm trong repo (`projects/game-moi/book/`), gộp và kiểm bằng script rồi mới xuất Google Doc. Không viết tay riêng trên Google Docs để Doc không lệch với GDD và Sheet.
- Doc chỉ dẫn lại luật và số đã có trong GDD hệ thống, `so-hien-hanh.md` và Sheet, không đặt luật hay số mới. Thấy lệch thì báo GDM.
- Làm một mục mẫu trước (II.6 Trạm và cảng), GDM duyệt rồi mới giao các mục còn lại. Phần I chờ có build.
- Việc đợt 2 và 3 (codex Dave the Diver theo hệ thống, Guides cho dev Unity) ghi ở BACKLOG GD-064, GD-065.

## 2026-11-23 - Tiêu đề Doc thiết kế viết tiếng Anh

Lead duyệt mục mẫu II.6 ("Oke làm tiếp đi"), rồi thêm: "Phần tiêu đề để tiếng anh nhé".
Hệ quả: tên Doc, tên phần và mọi tiêu đề `##`, `###` trong Doc thiết kế và chương đề xuất dự án viết tiếng Anh (The Novent Design Document, Part I. Controls, Part II. Game Elements, Overview, Acceptance Criteria, Edge Cases, Post-MVP). Thân văn, bảng, chú thích hình vẫn tiếng Việt. GDM hiểu "phần tiêu đề" là tiêu đề mục, không gồm chú thích hình. Đã sửa `book/KHUON.md`, II.6, `de-xuat-du-an.md`, `kiem-book.mjs`, `gop-book.mjs`, selftest. `soat.mjs` nhận thêm "edge case" là mục trường hợp biên.

## 2026-11-23 - Công cụ xuất Doc thiết kế ra Word

GDM hỏi có cho tải mermaid.min.js và pandoc để xuất sơ đồ và Google Doc không, Lead: "Cho tải".
Hệ quả: tải mermaid 10.9.1 (jsdelivr) và pandoc 3.1.11.1 bản portable (GitHub jgm/pandoc) vào `projects/game-moi/tools/vendor/`, không commit, lệnh tải ghi ở `tools/README.md`. `tools/xuat-book.mjs` gộp Doc, vẽ sơ đồ bằng Chrome headless có sẵn trên máy, ra `book/ket-qua/book.docx`. Lead kéo file vào Drive để thành Google Doc. Không gửi nội dung lên dịch vụ vẽ sơ đồ ngoài.

## 2026-11-23 - Mốc đạt playtest prototype một chuyến

Lead: "Giữ mốc". Mốc của buổi playtest `qa/playtest/2026-11-23/kich-ban.md`: từ 2/3 số người muốn ra chuyến thứ hai. Từ nửa số người có ít nhất một lần dưới vạch "đủ về", và dưới 1/3 số chuyến kết thúc bằng bị kéo về. Điểm khó điều khiển trung bình từ 3 trở xuống, không ai bỏ dở bài hành lang. Tiêu chí 23, 24, 54 theo MVP Checklist.

## 2026-11-23 - Hạ giờ ngân sách chương 1 xuống 0,8

Sau khi sim mô hình đúng ca cảng sớm nhất ngày 5 và ca dạy 2 tàu (log 111), chương 1 một người dài 2,29 giờ, vượt mục tiêu 1,5 đến 2 giờ. GDM trình ba cách, Lead chọn: "Hạ về 0,8".
Hệ quả: giờ mục tiêu chương 1 trong công thức ngân sách của `kinh-te-tien-trinh.md` từ 1,25 thành 0,8. Giá mua chương 1 giảm theo (sim thử: ngân sách 7750 thành 4950, Bình Oxy bậc 1 1450 thành 930, Van tiết lưu 2900 thành 1850). Ngưỡng Hạng cảng giữ nguyên. gd-economy chạy lại sim, in lại Shop, Upgrade, ECONOMIC, PROCESSING, Balance Sheet, sửa II.7. GDM dán Sheet các tab đổi.

## 2026-11-23 - Bỏ hàng "Nguyên tắc nền Solo or Together" khỏi bảng pillar

Lead chỉ vào hàng này trên Sheet: "Bạn check rồi mà vẫn giữ cái này". Hàng do GDM tự thêm ngày 2026-11-20 (mục Core Pillars theo Dave), nằm chen trong bảng 5 pillar mà Lead chốt giữ đúng như Dave the Diver.
Đã làm: xóa hàng đó ở OVERVIEW và hàng "Nguyên tắc nền: Một mình vẫn trọn" ở CORE LOOP mục 2. Ý co-op không mất: USP ý 4 ở OVERVIEW, mục Luật co-op ở CORE LOOP (hàng Số người thêm câu "thêm người là thêm tay để chia việc, không mở thêm nội dung"), luật C1 đến C10 ở `gdd/00-khung-game.md`.
Bài học: lượt rà và lượt đọc sửa chữ chỉ so với luật, không soát thứ GDM tự thêm vào chỗ Lead đã chốt khuôn. Lần sau rà bảng nào Lead chốt khuôn thì đếm hàng so với khuôn.

## 2026-11-23 - Đổi tên "ca cảng" thành Giờ Giao Thương (Trade Hour)

Lead: "tôi muốn đổi tên luồng Ca Cảng, nghe Ca Cảng tôi không hiểu gì nó tối nghĩa và đọc không hay". Tên tiếng Anh Lead chọn: "Trade Hour đi nhưng để tên tiếng việt gì đó cho ngầu". Tên tiếng Việt Lead giao: "tên nào phù hợp cho game đi". GDM chọn Giờ Giao Thương (log 117).

| Cũ | Mới |
|---|---|
| ca cảng, ca | giờ giao thương (tên tính năng viết hoa: Giờ Giao Thương, tiếng Anh Trade Hour) |
| số đếm: 3 ca cảng | 3 lượt giao thương (tránh đọc nhầm thành 3 giờ đồng hồ) |
| Mở ca, Bỏ ca | Hành động: mở giao thương, nghỉ giao thương. Chữ trên nút: Mở bán, Nghỉ bán (giới hạn 8 ký tự của nút). Tiếng Anh Start Trade Hour |
| bảng kết ca, màn Kết ca (UI-43), kết ca | bảng tổng kết giao thương, màn Tổng kết giao thương (tiêu đề trên màn: Tổng kết), kết thúc giờ giao thương |
| giờ ca, hết ca, trần ca | giờ giao thương, hết giờ giao thương, trần giờ giao thương |
| ca dạy | giờ giao thương hướng dẫn |

- 14 string UI rút gọn cho vừa giới hạn ký tự, ví dụ HUD "Còn {m}:{s}", "Đang giao thương" (`ux-ui.md`, `strings/strings.tsv`).
- Chỉ đổi chữ, luật và số giữ nguyên. Sim kinh tế chạy lại, không số nào đổi. Hạng cảng, cảng, cửa neo, bến, quầy cảng giữ tên vì là nơi chốn.
- Đã đổi trong GDD hệ thống, Book, TSV các tab, strings, sim, tool, prompt agent, CLAUDE.md. Giữ nguyên ở chỗ ghi lịch sử: các DECISIONS, log tự quyết, `production/`, `qa/`, `briefs/`, đề xuất cũ, lời trích của Lead.
- Giữ tên file và ID kỹ thuật có chữ ca-cang (`sim-ca-cang.mjs`, `tham-so/ca-cang.json`, `ca-cang-dave.html`) để không gãy lệnh và đường dẫn.
- Chữ "Ca" ở tiêu đề bảng trường hợp biên nghĩa là trường hợp, không đổi. Chữ "phiên" đã dùng cho phiên co-op nên không dùng cho tên mới.

## 2026-11-23 - Thêm 4 loại tài liệu nộp học từ Timberwalls
Lead: "Thêm 1. Teardown game tham chiếu 2. Codex của chính game họ, dựng theo khuôn codex Mind over Magic 3. Hướng dẫn sử dụng 4. Danh sách SFX".
- "Codex" ở đây là bách khoa trong game (Mind over Magic có màn Codex liệt kê mọi phòng, vật phẩm, nghi thức, trạng thái), không phải Codex của OpenAI. Timberwalls có hai file: "The codex - Mind over magic" là teardown game tham chiếu, mỗi hệ thống một tab, chủ yếu ảnh chụp. "Book of timberwalls" là codex game của họ, mỗi hệ thống một tab, cột Loại, Tên, Lời trong game, Nguồn, Công thức, Dùng cho, Ảnh.
- Việc tương ứng ở BACKLOG: Teardown Dave the Diver GD-064, Codex The Novent GD-068, Hướng dẫn sử dụng cho dev GD-065 (chờ Unity project), Danh sách SFX GD-069 (nâng tab AUDIO ASSETS LIST có sẵn). Folder nộp GD-063 thêm 4 file này.

## 2026-11-23 - Đổi tên ba vùng của map: Vành đai ngoài, Vành đai trong, Vùng trung tâm

Lead: "dải gần, dải giữa và dải xa là cái gì? nghe nó phèn lứm", rồi chê tên địa danh "tối nghĩa quá" vì không cho biết vùng nào gần trạm hơn. GDM đề xuất đặt tên theo khoảng cách tới tâm vụ nổ tàu mẹ. Lead chốt tên tiếng Việt: "Vành đai ngoài, Vành đai trong, Vùng trung tâm".

| Mã | Cũ | Tên tiếng Việt mới | Tên tiếng Anh (giữ như cũ) |
|---|---|---|---|
| Z1 | dải Gần, Gần | Vành đai ngoài | Ember Anchorage |
| Z2 | dải Giữa, Giữa | Vành đai trong | Shepherd Belt |
| Z3 | dải Xa, Xa | Vùng trung tâm | Glass Nebula |

- Tên mới dùng ở mọi chỗ, kể cả HUD-11, tên món (ví dụ Kiện đặc sản Vành đai ngoài) và key dữ liệu trong sim. Bỏ chữ "dải" đứng trước tên. Chữ "dải" chung chỉ cấu trúc map giữ nguyên.
- Chỉ đổi chữ. Sim vật phẩm, kinh tế, ngân sách Oxy, bố cục chạy lại, không số nào đổi. Mã ID giữ nguyên (DL-G0x, DL-M0x, DL-X0x, SLV-1xx).
- Đã đổi trong GDD hệ thống, Book, 18 tab TSV và Sheet, sim, tool, prototype, story. Giữ nguyên ở chỗ ghi lịch sử theo tiền lệ đổi tên Giờ Giao Thương: các DECISIONS, log tự quyết, `production/`, `qa/`, `briefs/`, `book/de-xuat-du-an.md`.
- Tên tiếng Anh giữ tên chính đã có, Lead: "chỉ dùng tên chính trước đó, chỉ là thay tên tiếng việt kia thôi". Tên món tiếng Anh giữ nguyên (ví dụ Near Specialty Crate).

## 2026-11-23 - Art: không gian 3D, đồ họa 2.5D, góc nhìn top-down 45 độ

Lead: "Về Art game sẽ là không gian game là 3D đồ họa là 2.5D Góc nhìn là Top-down 45". Lead chốt bằng lời.

- Lead nói rõ cùng ngày: "Không gian 3D nghĩa là trong Unity sẽ dựng với 3D nhưng dùng Assets 2D". Không có model 3D, artist 2D làm mọi asset.
- Thay ràng buộc cũ "2D vector, có thể 2.5D (chưa chốt)" và góc nhìn ngang ở mọi nơi kèm mặt cắt trạm (log GDM 9, GDM tự quyết).
- Đã sửa: CLAUDE.md, AGENTS.md, `so-hien-hanh.md`, `gdd/00-khung-game.md` mục Góc nhìn và mục 13.
- Chưa sửa: các GDD, Book, tab và wireframe còn mô tả theo góc nhìn ngang (mặt cắt trạm ba tầng, cảng ở mép phải tầng giữa, layout map nhánh, greybox). GDM giao các vai sửa theo pipeline sau khi Lead trả lời câu hỏi phạm vi.
- Lead: "Chuyển hết sang top-down" (trạm và cảng cũng vậy, bỏ mặt cắt). Đợt 10 (GD-070 tới GD-076, gd-qa ĐẠT) đã sửa map, trạm và cảng thành mặt bằng một lớp, điều khiển trong trạm đi 8 hướng, combat, spec camera orthographic 45 độ, wireframe. Quy ước chung ở log 118, Zmin camera ở log 119. Tải art nhân vật thành 75 bộ hình (3 hướng vẽ mỗi clip) thay cho 25.

## 2026-11-23 - Codex và Danh sách SFX (đợt 11, GD-068, GD-069)
Lead: "Codex và SFX".
- Codex là Sheet riêng "Codex - The Novent" (id 1B6KkZ4_6o7aYHKyxGmawZZzSRyt8CsvKmHb_WG6cIdM), cùng thư mục với Sheet GDD. 6 tab, 83 mục MVP. Nguồn: `codex/<Tab>.tsv` sinh bằng `tools/sinh-codex.mjs` từ TSV các tab GDD cộng `codex/loi.tsv` (gd-story viết). Cổng `sinh-codex.mjs --kiem`. Đổi GDD thì chạy lại script rồi dán lại, không sửa tay trên Sheet Codex.
- Lời Codex viết tiếng Việt như `strings/strings.tsv`, tên tiếng Anh ở cột riêng, lấy từ `vat-pham.md`. Mục GDD không có tên Anh thì để trống.
- AUDIO ASSETS LIST đổi sang 10 cột theo khuôn "Sounds" của Timberwalls: tách Mô tả, Sự kiện phát, Phát, Nhãn, Nguồn GDD. Âm GDD chưa có dòng thì Nguồn GDD ghi "Đề xuất gd-ux, GDD chưa có dòng âm" (GDM quyết giữ, gồm 3 ambience).
- ITEM LIST: hai chìa (Bộ kích nguồn, Máy cắt thân tàu) cột Nguồn tiêu thành "Không tiêu, không cần mang theo" theo luật T7.

## 2026-11-23 - Duyệt bố cục top-down UI-10 trạm và UI-40 cảng (GD-077)

Lead bấm Duyệt bản đề xuất của gd-ux ở `ux/de-xuat-topdown/` kèm 4 phương án GDM nghiêng về:
- Dải HUD trên giờ giao thương giữ 84 px ở 1080p, chữ đặt trong vùng an toàn 5%.
- HUD trạm không có đồng hồ giờ trong ngày (luật chưa có).
- Sơ đồ trạm thu nhỏ ở góc dưới phải, không che hành lang phía đông.
- Tường phía bắc các phòng là tường thấp 0,8 u, không cần dither vách cao trong trạm.
gd-ux chép vào `ux-ui.md`, thêm key cho nút Xem bản đồ chuyến và Ping của khối Chờ nhóm. Khung Figma Wireframe MVP vẽ lại theo hai SVG này.

## 2026-11-23 - Teardown Dave the Diver (đợt 12, GD-064)
Lead: "Làm tiếp Teardown Dave the Diver".
- Sheet riêng "Teardown - Dave the Diver" (id 1JSE_C8ixTcDwE3d0BXXu6DnGsYoa88HP9P1_YuRwJxU), cùng thư mục Sheet GDD. Tab Overview, 9 tab trùng tiêu đề mục Phần II, tab Sources. Nguồn ở `projects/game-moi/teardown/`, cổng `tools/kiem-teardown.mjs`, gộp nguồn bằng `--nguon`.
- Mỗi cơ chế Dave chỉ mổ ở một tab nhà, tab khác chỉ giữ góc riêng của hệ thống tab đó hoặc trỏ sang tab nhà (GDM quyết khi QA bắt trùng).
- Cột Ảnh chờ người chơi Dave chụp theo cột Ảnh cần chụp.
