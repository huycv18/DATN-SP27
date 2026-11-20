# Khung game (mã tạm EMBER) - nguồn chung cho mọi GDD hệ thống

Project: game-moi | Chủ sở hữu: GDM | Trạng thái: đã chốt 2026-11-20 theo ủy quyền của Lead, sửa lần 2 sau phản biện đợt 1 (log dòng 39 đến 53), sửa lần 3 sau sim đợt 2 (log dòng 54 đến 60), sửa lần 4 sau QA vòng 1 (log dòng 61 đến 64), sửa lần 5 sau QA vòng 2 (log dòng 65 đến 80) | Nguồn: `DECISIONS.md` mục "2026-11-20 - Lead giao toàn quyền cho GDM", `log-gdm-tu-quyet.md`

Cách đọc: mọi vai đọc file này trước khi viết GDD hệ thống của mình. Luật khung đánh mã K. GDD hệ thống không được trái luật K. Thấy luật K có vấn đề thì phản biện trong báo cáo (luật 12 giao thức chung), không tự đổi.
Nhãn nguồn: (L) Lead chốt bằng lời, (G) GDM tự quyết theo ủy quyền, có dòng trong `log-gdm-tu-quyet.md`.
Mọi tên riêng tiếng Anh là [TẠM]. Số trong file này là mục tiêu ý đồ, chưa đo. Số hiện hành chỉ có sau khi gd-economy và gd-tech chạy sim.

## 1. Một câu, fantasy, người chơi

- Một câu: tỉnh dậy trên một trạm hỏng giữa bãi vỡ của tàu mẹ, mỗi ngày đổi oxy lấy thứ làm trạm sống lại, buôn bán với thương nhân ngoài hành tinh ở cảng, một mình hoặc cùng tối đa ba người bạn, cho tới khi trạm đủ sức rời neo.
- Mục tiêu người chơi theo chặng (L, G): chương 1 đến 3 là sống sót và tìm đường tới Solace. Chương 4 lộ ra Solace là mồi. Chương 5 là rời bãi vỡ. Game kết mở.
- Fantasy (G): tôi là người sống sót giỏi nghề, tự tay kéo một trạm chết sống lại. Mỗi chuyến ra ngoài là một lần liều có tính toán, mỗi lần về là thấy trạm đổi khác.
- Người chơi mục tiêu (G): người chơi PC thích Dave the Diver, Subnautica, Core Keeper, Stardew Valley co-op. Chơi phiên 30 đến 60 phút. Chơi một mình là chính, rủ bạn vào giữa chừng được.
- Thể loại (L): hành động nhập vai phiêu lưu kết hợp mô phỏng quản lý. Bán đứt. Unity, PC.
- Góc nhìn (G): 2D nhìn ngang ở mọi nơi. Ngoài không gian là mặt phẳng bay tự do 8 hướng (cùng cấu trúc với lặn của Dave). Trong trạm là mặt cắt ngang nhìn thấy các khoang.

## 2. Pillar (G)

| # | Pillar | Nghĩa là | Cấm |
|---|---|---|---|
| P1 | Mỗi hơi thở là một quyết định | Oxy vừa là thời gian vừa là máu. Đi tiếp hay quay về luôn là lựa chọn của người chơi | Thanh máu riêng, hồi oxy miễn phí giữa chuyến, chuyến đi không có giới hạn |
| P2 | Mang về là để trạm sống lại | Mọi thứ nhặt được đều có chỗ dùng nhìn thấy được trên trạm: sửa khoang, chế đồ, nuôi, bán ở cảng | Tài nguyên chỉ để bán lấy số, nâng cấp không đổi hình trạm |
| P3 | Một mình vẫn trọn, có bạn thì vui hơn | Mọi luật đúng với 1 đến 4 người. Thêm người là thêm tay, không phải mở khóa nội dung | Luật cần đúng N người, nội dung chỉ co-op mới có, tạm dừng toàn cục khi co-op |
| P4 | Vũ trụ kể chuyện qua thứ bạn vớt được | Truyện đến từ xác trạm, người vớt về, thương nhân ghé cảng. Truyện chen vào điểm nghỉ của vòng ngày | Cắt cảnh dài chặn vòng chơi, manh mối bắt buộc nằm ở chỗ sinh lại ngẫu nhiên |

## 3. Bối cảnh đã chốt (tóm tắt, bản đủ ở GDD cốt truyện)

| # | Điểm | Nguồn |
|---|---|---|
| B1 | Trái Đất cạn kiệt, Hệ Mặt Trời sụp đổ. United Accord đóng tàu mẹ Cradle chở người được chọn lọc đi định cư ở Solace | L |
| B2 | Loài người đã giao thương với người ngoài hành tinh từ sớm. The Veyl là tên gọi chung, gồm nhiều chủng tộc, phần lớn trung lập và không biết âm mưu | L |
| B3 | Phản diện là một chủng tộc trong The Veyl, tên tạm The Wardens. Chúng ghét loài người vì loài người tham lam và phá hoại môi trường. Chúng phát thông tin giả để dụ đoàn di cư rồi phục kích. Vụ đó gọi là The Scattering | L, tên G |
| B4 | Solace là thông tin mồi. Hồ sơ về một hành tinh sống được tên Solace và đường tới đó do The Wardens dựng lên, phát qua mạng tin của thương nhân The Veyl trung lập, dẫn Cradle vào điểm phục kích. Có một Solace thật hay không là câu hỏi để mở cho phần sau | L 2026-11-20 (kết mở), kênh phát G |
| B5 | The Wardens tự xưng là kẻ canh giữ nhưng đạo đức giả: chính chúng thu hoạch bãi vỡ và Driftlife ở quy mô công nghiệp. Giữ cả hai lời Lead: "ghét loài người vì tham lam" và "còn tham lam hơn loài người" | G |
| B6 | Driftlife là sinh vật bản địa của vùng chân không nơi bãi vỡ trôi vào. The Wardens gọi chúng là đàn được bảo hộ để kết tội loài người. Cú lật giữa game: nhà sinh học tìm thấy dấu thu hoạch của The Wardens trên Driftlife | G |
| B7 | Cradle phóng các Seed Station, mỗi trạm 4 buồng ngủ đông. Phần lớn vỡ theo tàu mẹ. Người chơi tỉnh dậy trên Station Ember đang trôi vì hỏng. Chơi N người thì N người tỉnh, buồng còn lại hỏng do không may | L |
| B8 | Dấu vết phản diện lộ dần theo tiến trình. Có một mốc truyện The Wardens cải trang làm thương nhân ghé cảng Ember | L, mốc cải trang G |
| B9 | Giọng: nền nghiêm, hài nhẹ từ tính cách người vớt về và thương nhân. Kết mở: biết Solace là mồi, Ember sửa xong động cơ và rời neo mà chưa có đích chắc chắn, để ngỏ cho hậu bản. Lời hứa "nếu tìm được thì dựng khác đi" nằm ở cảnh kết | L |
| B10 | Không phạt khai thác. Chủ đề nói qua nhân vật, cú lật Driftlife và lựa chọn nuôi thay vì săn | L |
| B11 | Móc cho phần sau: ở Warden Rig người chơi lấy được dữ liệu cho thấy mồi Solace được dựng từ một bản khảo sát có thật mà The Wardens giấu đi. Chưa kiểm chứng, không trả lời trong game này | G |

## 4. Core loop và một ngày

Vòng lớn: ra ngoài thu thập -> mang về kho -> sửa trạm, chế đồ, nuôi -> đóng kiện bán ở ca cảng lấy Tally -> nâng cấp bộ đồ và trạm, mua thứ không tự làm được -> đi xa hơn, lâu hơn, gặp thứ mới -> lộ thêm truyện.

Một ngày (từ trong game: "ngày", trong truyện là một chu kỳ trạm):

| Pha | Người chơi làm gì | Kết thúc khi | Bỏ qua được |
|---|---|---|---|
| 1. Chuẩn bị | Xem bảng tàu sẽ cập bến hôm nay và hàng họ cần, chọn dụng cụ mang theo, nhận đồ chế xong, chăm khoang nuôi | Người chơi ra cửa khí | Có |
| 2. Chuyến 1 | Ra ngoài: nhặt phế liệu, khai khoáng, bắt sống hoặc hạ Driftlife, vào map nhánh, vớt người, tìm manh mối | Mọi người đã về trạm (cửa khí, Recall Beacon) hoặc bị kéo về | Có |
| 3. Chuyến 2 | Như chuyến 1. Giữa hai chuyến được vào kho, xưởng | Như trên | Có |
| 4. Ca cảng | Tàu cập bến theo lịch, người chơi lấy hàng trong kho, chế thêm, đóng kiện, bốc lên tàu trước khi tàu rời, nhận Tally | Hết giờ ca hoặc tàu cuối rời bến | Có, không bị phạt |
| 5. Cuối ngày | Nâng cấp, nghiên cứu, đặt hàng ở shop, nói chuyện với người trong trạm, nhận quest, xem truyện. Ngủ thì lưu và sang ngày mới | Người chơi vào buồng ngủ | Không |

## 5. Luật khung

### Chuyến ra ngoài
- K1 (L, G): Oxy là một chỉ số duy nhất, vừa là thời gian chuyến đi vừa là máu. Oxy giảm đều theo thời gian và giảm thêm khi trúng đòn hay vào vùng môi trường xấu. Không có thanh máu riêng.
- K2 (G): Oxy về 0 thì người đó vào trạng thái ngạt trong một khoảng ngắn. Hết khoảng đó mà không ai cứu thì bị kéo về trạm, chỉ giữ đúng 1 món tự chọn trong túi đồ, mất phần còn lại của túi. Không mất Tally, không có phí cứu hộ, không có nợ. Ngoại lệ: vật manh mối tự ghi lại ngay khi nhặt và không chiếm túi, vật nhiệm vụ mất cùng túi thì trở về vị trí gốc để lấy lại.
- K3 (G): túi đồ có giới hạn sức chứa. Đây là giới hạn thứ hai sau Oxy. Đồ trong túi chỉ thành của trạm khi người chơi về tới trạm.
- K4 (L): kết thúc chuyến bằng cửa khí của trạm hoặc Recall Beacon. Recall Beacon: giữ phím vài giây, bị đánh thì hủy, về trạm giữ nguyên túi đồ. Trong map tổng vị trí Recall Beacon đổi mỗi chuyến. Trong map nhánh Recall Beacon nằm cố định.
- K5 (L, G): map tổng có 3 dải theo khoảng cách tới trạm: Gần, Giữa, Xa. Bố cục sinh lại mỗi chuyến bằng cách ghép các mảnh dựng tay từ một kho mảnh. Loài Driftlife và loại tài nguyên gắn với dải, không ngẫu nhiên giữa các dải.
- K6 (G): dải mở theo chương truyện. Mỗi dải có một điều kiện môi trường cần cấp bộ đồ tương ứng. Thiếu cấp vẫn vào được nhưng Oxy hao nhanh hơn nhiều (đi được nhưng đắt). Dải chưa mở theo chương thì bị chặn cứng bằng vật cản do gd-world định.
- K7 (L, G): map nhánh là khu dựng tay, không sinh lại, vào qua một lối trong map tổng. Người để vớt, vật manh mối, boss chỉ nằm ở map nhánh. Mốc truyện thì được diễn ra cả ở trạm và cảng. Skiff đưa người chơi từ trạm thẳng tới map nhánh đã tìm ra, tính là một chuyến.
- K8 (L): Driftlife và tài nguyên sinh lại mỗi chuyến. Không có luật cạn kiệt, không phạt khai thác.
- K9 (G): với loài bắt sống được (cỡ S và M), bắt sống luôn có giá trị hơn hạ. Driftlife sống dùng để nuôi, nghiên cứu và giao đơn cảng giá cao. Driftlife đã hạ chỉ cho nguyên liệu. Loài cỡ L không bắt sống được: mẫu sinh thiết là cách lấy mẫu nghiên cứu mà không hạ, đứng ngoài luật này.

### Trạm và cảng
- K10 (L, G): Ember neo cố định suốt game. Việc sửa đầu tiên là hãm trôi và neo. Sửa động cơ chính là mục tiêu dài nhất, xong thì Ember rời neo, rời bãi vỡ và game kết (kết mở, không tới Solace trong game này).
- K11 (G): trạm gồm các khoang. Khoang hỏng phải sửa bằng vật liệu mới dùng được. Mỗi khoang sửa xong đổi hình trạm và trả lại một chức năng.
- K12 (L, G): mỗi người vớt về mở một tính năng của trạm qua một quest nhỏ hoặc mốc chương. Năm người: Kỹ sư (xưởng: chế và nâng cấp trang bị), Thông dịch viên (khoang liên lạc: gọi tàu, mở ca cảng, shop), Hoa tiêu (khoang dẫn đường: mở dải Xa, Skiff. Dải Giữa mở khi xong chương 1), Nhà sinh học (nghiên cứu và nuôi Driftlife), Trưởng cảng (thêm bến, tiện ích cảng). Không có bếp trưởng.
- K13 (L, G): ca cảng là nửa chơi tay thứ hai. Mỗi tàu có danh sách hàng và giờ rời bến. Người chơi chạy trong mặt cắt trạm để lấy hàng, chế thêm, đóng kiện, bốc lên tàu. Giao đúng và kịp thì nhận Tally. Tàu chỉ mua, không bán trong ca.
- K14 (G): từ chương 3, ca cảng có sự cố trạm chen ngang (rò khí, chập điện, Driftlife sổng khoang nuôi). Trước chương 3 không có sự cố.
- K15 (G): có một thang Hạng cảng duy nhất, tăng theo kết quả các ca. Hạng cảng mở thêm loại tàu, đơn giá trị cao và danh mục shop. Không có danh tiếng riêng từng phe.
- K16 (L, G): nuôi Driftlife trong khoang sinh quyển là nguồn hàng đều, mở ở chương 2. Nuôi là lựa chọn có lợi, không phải nghĩa vụ.
- K17 (G): không có hệ đói, không có chi phí duy trì cư dân, không nấu ăn. Trạm không xấu đi khi người chơi nghỉ.

### Kinh tế và tiến trình
- K18 (L, G): Tally là đồng tiền duy nhất. Nguồn chính là ca cảng. Không có tiền thứ hai, không có XP. Nghiên cứu tiêu mẫu vật và vật liệu.
- K19 (G): sink của tài nguyên: sửa khoang, chế trang bị, nghiên cứu, nuôi, đóng kiện bán. Sink của Tally: nâng cấp bộ đồ và trạm, mua ở shop thứ Ember không tự làm được (linh kiện động cơ, bản thiết kế).
- K20 (G): Shop là bảng giá duy nhất, nằm ở khoang liên lạc, đặt hàng cuối ngày. Danh mục mở theo Hạng cảng và chương.
- K21 (G): tiến trình đi theo 5 chương. Mỗi chương mở một dải hoặc map nhánh lớn và thêm một hoặc hai kiểu chơi mới.
- K22 (G): một ngày có tối đa 2 chuyến. Đi bằng Skiff cũng tính là một chuyến. Sau chuyến thứ hai cửa khí khóa tới ngày mới. Ca cảng luôn sau các chuyến: đã mở ca cảng thì không ra ngoài được nữa trong ngày đó. Lý do: về trạm nạp đầy Oxy rồi ra lại không giới hạn sẽ phá K1.
- K23 (G): ngày không có đồng hồ. Ngày chỉ sang khi người chơi vào buồng ngủ đông (co-op: vào buồng là xác nhận, đếm 30 giây từ người đầu tiên, người chưa vào tự tính là đồng ý). Game tự lưu ở ba điểm: sau mỗi chuyến khi mọi người đã về trạm, sau ca cảng, và lúc ngủ. Thoát giữa một chuyến hoặc giữa ca cảng thì lần sau vào lại ở điểm lưu gần nhất, mất phần đang dở. Bố cục map của từng chuyến được lưu theo ngày và số thứ tự chuyến, nạp lại không đổi bố cục.
- K24 (G): sau cảnh kết game về menu chính. Bản lưu nằm ở ngày cuối với mọi mốc truyện đã xong, Ember còn ở neo để chơi tự do, không có nội dung mới. Cảnh kết không phát lại khi vào bản lưu, xem lại được từ Sổ tay.
- K25 (G): "qua chương" chỉ có một nghĩa. Chương đóng và vùng mới mở khi mốc đóng chương của truyện xong. Mốc đóng chương chỉ kích hoạt khi giai đoạn động cơ của chương đó đã lắp. Kinh tế và trạm không có cổng chương riêng, các mốc kinh tế khác chỉ là gợi ý tiến độ.
- K26 (G): Oxy hồi từ vật tiêu hao trong một chuyến không quá 25% dung lượng bình của người đó. Vật tiêu hao hồi Oxy không dùng được khi đang ngạt và không hồi vượt dung lượng.
- K27 (G): người đang ngạt không trao và không thả được đồ. Đồng đội cứu bằng chia Oxy, không vét túi hộ.

## 6. Co-op (khung)

- C1 (L): 1 đến 4 người, co-op online, không PvP. Chơi một mình là cách chơi chính ngang với co-op.
- C2 (G): thế giới thuộc về người tạo (host). Lúc tạo, host chọn số người tỉnh dậy ban đầu từ 1 đến 4. Người vào sau là người sống sót vớt về, tối đa 4 người chơi cùng lúc. Người rời phiên thì nhân vật ở lại trạm.
- C3 (G): dùng chung cả nhóm: trạm, kho, Tally, nâng cấp trạm, cấp trang bị, bản thiết kế, bản đồ, tiến trình truyện, Hạng cảng. Riêng từng người: Oxy, túi đồ trong chuyến, dụng cụ đang mang.
- C4 (G): nâng cấp trang bị mua một lần cho cả nhóm, mọi bộ đồ cùng lên cấp. Lý do: bạn vào giữa chừng không bị yếu, một ví chung, ít màn hình.
- C5 (G): chuyến bắt đầu khi mọi người đang online đã xác nhận ở cửa khí. Ai không đi thì chọn ở lại trạm và vẫn dùng được xưởng, khoang nuôi. Ai không trả lời trong 30 giây thì tính là ở lại. Ngoài không gian mỗi người tự do tách nhau, mỗi người một màn hình.
- C6 (G): mỗi người kết thúc chuyến riêng. Người ngạt được đồng đội chia Oxy để cứu. Chuyến kết thúc khi người cuối cùng đã về hoặc bị kéo về.
- C9 (G): người đã về trạm (về sớm hoặc bị kéo về) không ra lại trong cùng chuyến. Trong lúc chờ, người đó làm việc trạm: xưởng, khoang nuôi, đóng kiện trước cho ca cảng, và xem được vị trí đồng đội. Lý do không cho ra lại: về trạm nạp đầy Oxy rồi ra lại sẽ phá giới hạn Oxy (K1).
- C10 (G): rời phiên hoặc mất kết nối giữa chuyến không phải là đường về an toàn. Khách mất kết nối được giữ chỗ 15 giây, quá hạn thì tính như bị kéo về (K2, chỉ giữ 1 món). Khách chủ động rời giữa chuyến cũng tính như bị kéo về. Host thoát thì phiên kết thúc và thế giới trở về điểm lưu gần nhất (K23). Chơi một mình thoát giữa chuyến thì mất chuyến đó theo K23.
- C7 (G): không tạm dừng toàn cục khi có từ 2 người. Mở menu không dừng thời gian. Chơi một mình được tạm dừng.
- C8 (G): cân bằng theo số người: không gian chơi giữ nguyên, lượng tài nguyên một chuyến và sức chịu của Driftlife, boss (máu, ngưỡng choáng) tăng theo số người, quy mô đơn trong ca cảng và điểm cảng của đơn tăng theo số người đang chơi (không bắt buộc tăng số tàu), bảng tàu ghi rõ điều này. Giá sửa khoang và nâng cấp không đổi theo số người, vì số người đổi được giữa các phiên. Không nội dung nào mở khóa theo số người. Hệ số do sim đặt. Mục tiêu ý đồ ở mục 9.

## 7. Tiến trình 5 chương (G)

| Chương | Tên tạm | Vùng mới | Người vớt | Kiểu chơi mới | Mốc truyện |
|---|---|---|---|---|---|
| 1 | Tỉnh dậy | Dải Gần, xác Seed Station đầu tiên | Kỹ sư, Thông dịch viên | Khai thác, bắt sống loài nhỏ bằng lưới, ca cảng | Neo trạm, sửa cảng, tàu buôn đầu tiên ghé, bắt được sóng của Lantern |
| 2 | Không cô độc | Dải Giữa, Station Lantern | Hoa tiêu, Nhà sinh học | Nuôi Driftlife, bắt sống cỡ M (gây mê, Phao kéo), lấy mẫu sinh thiết cỡ L | Gặp người sống ở Lantern, dấu vết phá từ ngoài vào trên các xác trạm |
| 3 | Kẻ canh giữ | Dải Xa, Veyl Waypost, The Remainers | Trưởng cảng | Sự cố trong ca cảng, kẻ địch có vũ khí | Tàu lạ ghé cảng, cú lật Driftlife, The Wardens lộ mặt |
| 4 | Tâm vụ nổ | Bên trong Cradle | Không | Map nhánh lớn trong nội thất tàu | Hộp ghi hành trình: Solace là thông tin mồi. Mục tiêu đổi từ "tới Solace" sang "rời bãi vỡ trước khi The Wardens quét sạch người sống sót" |
| 5 | Rời neo | Warden Rig | Không | Trận đối đầu cuối | Lấy bản đồ sao thật và dữ liệu về bản khảo sát bị giấu ở Warden Rig, sửa xong động cơ chính, rời neo. Kết mở: liệu có một Solace thật |

## 8. Hệ thống và chủ sở hữu

| Hệ thống | Vai | File GDD (`projects/game-moi/gdd/he-thong/`) | Tab Sheet |
|---|---|---|---|
| Khung, core loop, một ngày | GDM | `../00-khung-game.md` | OVERVIEW, CORE LOOP, Day |
| Cốt truyện, chương, nhân vật truyện, tên gọi | gd-story | `cot-truyen.md` | GAME STORY |
| Nhân vật người chơi: di chuyển, Oxy, bộ đồ, túi đồ, ngạt và cứu, điều khiển. Hồ sơ người vớt và thương nhân | gd-character | `nguoi-choi.md`, `ho-so-nhan-vat.md` | Player |
| Combat, bắt sống, Driftlife, The Wardens, boss | gd-combat | `combat-driftlife.md` | Enemy |
| Tài nguyên, vật phẩm, dụng cụ, công thức, hàng hóa | gd-items | `vat-pham.md` | Salvage, ITEM LIST, Recipe |
| Map tổng, map nhánh, hazard, Recall Beacon, Skiff, nhịp chuyến | gd-world | `map.md` | Zone |
| Trạm và cảng: khoang, người vớt mở tính năng, ca cảng, Hạng cảng, nuôi Driftlife, sự cố | gd-quan | `tram-va-cang.md` | Customer (thương nhân và tàu) |
| Tally, giá, nâng cấp, nhịp mở khóa, cân bằng 1 đến 4 người | gd-economy | `kinh-te-tien-trinh.md` | ECONOMIC, Shop, Upgrade, PROCESSING, Balance Sheet |
| HUD, màn hình, input, FTUE | gd-ux | `ux-ui.md` | WIREFRAME, Tutorials |
| Sim, schema dữ liệu, yêu cầu đồng bộ co-op, event | gd-tech | `ky-thuat.md` | Event Tracking |
| Nghiệm thu | gd-qa | `../qa/` | MVP Criteria Checklist |

Chủ tên gọi: gd-items giữ tên và ID vật phẩm, gd-combat giữ tên Driftlife và kẻ địch, gd-world giữ tên vùng và hazard, gd-story giữ tên riêng trong truyện. Vai khác cần tên chưa có thì đặt tạm, đánh dấu `[CHỜ <vai>]` và nhắn thẳng vai chủ.

## 9. Mục tiêu ý đồ (G, chưa đo)

| Mục | Mục tiêu | Ai đo |
|---|---|---|
| Thời lượng một chuyến, chương 1 | 4 đến 6 phút | gd-world, gd-tech |
| Thời lượng một chuyến, chương 5 | 10 đến 12 phút | gd-world, gd-tech |
| Thời lượng ca cảng | 3 đến 5 phút | gd-quan, gd-tech |
| Một ngày đủ 2 chuyến và ca cảng | Chương 1: 15 đến 20 phút. Chương 5: 25 đến 30 phút | GDM |
| Chương 1 | 1,5 đến 2 giờ | gd-economy |
| Cả game | 12 đến 15 giờ | gd-economy |
| Tỉ lệ chuyến bị kéo về vì hết Oxy | Người chơi cẩn thận dưới 5%, người chơi tham 15 đến 40%. Đo lại bằng playtest khi có build | gd-tech |
| Thứ kết thúc chuyến | Chương 1 túi đầy trước ở khoảng 60% chuyến, từ chương 2 Oxy là giới hạn chính | gd-world, gd-tech |
| Thời gian tới hết game của nhóm 4 người so với chơi một mình | 60 đến 75% (bị chặn dưới bởi số ngày tối thiểu của chuỗi mốc truyện) | gd-economy, gd-tech |
| Lượng nhặt được của mỗi người trong nhóm 4 so với khi chơi một mình | từ 60% trở lên | gd-world, gd-tech |
| Phần Tally đến từ thưởng đủ đơn và thưởng nhanh | 15 đến 25% tổng thu | gd-economy |
| Giá trị Driftlife sống so với đã hạ (cỡ S và M, sau khi trừ vật tiêu hao) | 1,2 đến 2 lần | gd-items, gd-economy |
| Tỉ lệ đơn giao đủ trong ca cảng | Chương 1: 70 đến 95%. Từ chương 2: 70 đến 90% | gd-quan, gd-tech |

## 10. Từ điển (dùng đúng từ này trong mọi GDD)

| Từ | Nghĩa |
|---|---|
| Trạm, Ember | Station Ember, nhà của người chơi |
| Khoang | Một phòng chức năng của trạm |
| Buồng ngủ đông | Nơi người ngủ. Ember có 4 buồng |
| Chuyến | Một lần ra ngoài không gian rồi về |
| Dải Gần, Giữa, Xa | Ba dải của map tổng The Wake. Tên riêng: Ember Anchorage, Shepherd Belt, Glass Nebula |
| Map nhánh | Khu dựng tay vào qua một lối trong map tổng |
| Oxy | Chỉ số duy nhất của người chơi ngoài không gian |
| Bộ đồ, bộ đẩy, túi đồ | Trang bị mặc, thiết bị di chuyển, chỗ chứa đồ trong chuyến |
| Kho | Chỗ chứa đồ chung của trạm |
| Driftlife | Sinh vật trôi trong chân không. Bắt sống hoặc hạ |
| Phế liệu, khoáng, băng, linh kiện, mẫu | Các nhóm tài nguyên. Chi tiết do gd-items giữ |
| Kiện | Hàng đã đóng để bốc lên tàu |
| Bến, tàu, danh sách hàng | Chỗ tàu cập, tàu thương nhân, thứ tàu cần mua |
| Ca cảng | Pha bốc hàng lên tàu để lấy Tally |
| Tally | Đồng tiền duy nhất |
| Hạng cảng | Thang tiến trình của cảng |
| Người vớt | Người sống sót đưa về trạm, mở tính năng |
| Recall Beacon | Điểm thoát kéo về trạm |
| Skiff | Xuồng đi thẳng tới map nhánh đã tìm ra |
| The Veyl, The Wardens | Tên chung người ngoài hành tinh, chủng tộc phản diện |
| Cradle, Seed Station, Solace, The Scattering, United Accord, Lantern, The Remainers, Veyl Waypost, Warden Rig | Tên riêng trong truyện, xem GDD cốt truyện |

## 11. Không làm (G)

PvP. Chơi chung một máy. Tiền thứ hai. XP và cấp nhân vật. Hệ đói, nấu ăn, phục vụ ăn uống. Sinh map thủ tục hoàn toàn. Danh tiếng từng phe. Xây trạm tự do theo ô. Phí cứu hộ và nợ. Chọn chặng trên bản đồ. Solace là vùng chơi.

## 12. Phạm vi MVP đề xuất (G, Lead nên xem lại vì chạm thời hạn)

Chương 1 trọn vẹn: dải Gần, 1 xác Seed Station, Kỹ sư và Thông dịch viên, xưởng, ca cảng 1 bến, 3 đến 4 loài Driftlife, bắt sống loài nhỏ bằng lưới và 1 loại hàng Driftlife sống ở cảng, 1 boss nhỏ, co-op 2 người chạy được. GDD viết cho cả game, mỗi mục ghi nhãn MVP hoặc Sau MVP.
