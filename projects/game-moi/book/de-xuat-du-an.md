# The Novent Project Proposal

## I. Overview

Tài liệu này kể lại cách nhóm đi từ ràng buộc tới concept The Novent. Quy trình đi theo thứ tự cố định: xác định ràng buộc sản xuất và chiến lược trước, đặt pillar làm thước đo cho mọi quyết định, viết mục tiêu trải nghiệm người chơi, rồi mới mở ý tưởng, thử nhiều hướng và chọn hướng hợp với cả ba lớp trên. Mỗi bước được Lead chốt bằng lời trước khi sang bước sau, nên mọi hướng bị bỏ đều có lý do ghi lại.

The Novent trong một câu: tỉnh dậy trên một trạm hỏng giữa bãi vỡ của tàu mẹ, mỗi ngày đổi oxy lấy thứ làm trạm sống lại, buôn bán với thương nhân ngoài hành tinh ở cảng, một mình hoặc cùng tối đa ba người bạn, cho tới khi trạm đủ sức rời neo.

## II. Constraints

### II.1. Production Constraints

| Mục | Giá trị |
|---|---|
| Engine, nền tảng | Unity, PC, có thể mở rộng đa nền tảng |
| Nhóm | 1 Game Designer, 4 Game Developer, 1 Artist 2D |
| Art | 2D vector, có thể thêm 3D thành 2.5D (chưa chốt) |
| Kinh doanh | Bán đứt, không gói bán |
| Multiplayer | Chơi đơn hoặc co-op online 2 đến 4 người, MVP có co-op 2 người |

### II.2. Strategic Constraints

Thể loại Lead chọn là hành động nhập vai phiêu lưu kết hợp mô phỏng quản lý, gần với Dave the Diver. Game tham chiếu chỉ dùng để lấy cấu trúc (ngày chia hai nửa, nửa hành động nuôi nửa quản lý), không lấy luật hay asset.

### II.3. Implications of the Constraints

- Nhóm có 4 dev nhưng chỉ 1 artist, nên art là nút cổ chai. Số loại quái, thương nhân và map trong MVP tính theo sức một artist vector. Map tổng ghép từ kho mảnh dựng tay để tái dùng tối đa.
- Có co-op online, nên luật lõi không được chỉ đúng khi có một người. Game không dừng thời gian toàn cục và không tạm dừng khi mở menu. Kiến trúc mạng phải chọn trước khi viết gameplay vì thêm sau rất đắt.

## III. Design Pillars

Pillar đi theo đúng năm Core Pillars của Dave the Diver về tên và thứ tự, nội dung viết lại cho The Novent. Mỗi tính năng phải phục vụ ít nhất một pillar. Khi hai pillar xung đột thì ưu tiên theo thứ tự từ CP1 tới CP5.

| Pillar | Nội dung cho The Novent | Player Experience |
|---|---|---|
| CP1. Exploration & Discovery | Khám phá bãi vỡ của tàu mẹ Cradle qua ba dải Gần, Giữa, Xa, các map nhánh, loài Driftlife mới, xác trạm con và người còn sống để vớt. Mỗi chuyến bố cục đổi khác, mỗi chương mở vùng mới | Curiosity, Wonder, Discovery |
| CP2. Risk & Reward | Oxy vừa là thời gian vừa là máu. Đi càng xa phần thưởng càng lớn và rủi ro càng cao. Người chơi luôn có thông tin để tính lúc quay về | Tension, Challenge, Satisfaction |
| CP3. Management & Optimization | Thứ mang về thành vật liệu sửa trạm và hàng bán ở ca cảng. Người chơi chọn sửa khoang nào trước, nuôi Driftlife nào, bán gì cho tàu thương nhân | Ownership, Strategy, Efficiency |
| CP4. Progression & Growth | Tally kiếm được dùng nâng cấp bộ đồ, dụng cụ và trạm. Nâng cấp mở dải mới, chuyến dài hơn. Đích cuối là sửa xong động cơ và rời neo | Achievement, Empowerment, Growth |
| CP5. Variety & Delight | Cốt truyện, người vớt và thương nhân mỗi người một tính cách, hài nhẹ. Mỗi chương thêm một kiểu chơi mới để chương sau không lặp chương trước | Surprise, Humor, Relaxation |

Nguyên tắc nền đứng trên năm pillar là **Solo or Together**: mọi luật đúng với mọi số người trong nhóm, chơi một mình là cách chơi chính ngang với co-op. Thêm người là thêm tay chia việc, không mở thêm nội dung.

## IV. Player Experience Goals

### IV.1. Fantasy

Tôi là người sống sót giỏi nghề, tự tay kéo một trạm chết sống lại. Mỗi chuyến ra ngoài là một lần liều có tính toán, mỗi lần về là thấy trạm đổi khác.

### IV.2. Target Audience

- Người chơi PC thích Dave the Diver, Subnautica, Core Keeper, Stardew Valley chơi chung.
- Thích khám phá, tối ưu và tự tay dựng lại một thứ. Thích truyện dày nhưng không muốn xem cắt cảnh dài.
- Chơi phiên 30 đến 60 phút, tương đương 2 đến 3 ngày trong game. Chơi một mình là chính, rủ 1 đến 3 bạn vào giữa chừng.
- Kỹ năng hành động vừa phải. Thử thách đến từ quyết định quản lý Oxy, không đòi phản xạ cao.

### IV.3. Measurable Goals

Mỗi trải nghiệm ở bảng pillar có một mục tiêu số để kiểm bằng sim và playtest. Đây là mục tiêu ý đồ, số đo thật nằm ở Phần II của Doc thiết kế và tab Balance Sheet.

| Trải nghiệm | Mục tiêu |
|---|---|
| Căng thẳng vừa phải ngoài không gian | Một chuyến dài 4 đến 6 phút ở chương 1, 10 đến 12 phút ở chương 5 |
| Liều có tính toán | Chuyến bị kéo về vì hết Oxy: người chơi cẩn thận dưới 5%, người chơi tham 15 đến 40% |
| Nhịp một ngày | Chương 1 dài 15 đến 20 phút, chương 5 dài 25 đến 30 phút |
| Ca cảng bận nhưng kịp | Tàu phục vụ xong 85 đến 100% ở chương 1, tip chiếm 20 đến 30% Tally của ca |
| Thấy mình lớn lên | Chương 1 dài 1,5 đến 2 giờ, cả game 12 đến 15 giờ khi chơi một mình |
| Chơi chung vẫn có phần | Mỗi người trong nhóm 4 nhặt được từ 60% so với chơi một mình |

## V. Ideation and Explored Directions

### V.1. Previous Concept: Space Salvage

Trước The Novent, nhóm có concept Space Salvage: nhân vật bay jetpack nhặt rác vũ trụ và bắt sinh vật, tối về mở quán bán món cho khách ngoài hành tinh, đồ họa pixel art cyberpunk, một người chơi, offline. Ngày 2026-11-19 Lead quyết định định nghĩa lại game từ đầu và bỏ cả concept. Giữ lại ràng buộc nền, khuôn GDD Sheet và cách chia vai theo hệ thống. Art đổi sang 2D vector, bỏ ràng buộc offline.

### V.2. Three Setting Directions

Lead yêu cầu phát triển bối cảnh từ hạt giống của concept cũ: thế giới loài người sống ngoài vũ trụ, người lao động nhỏ nợ tập đoàn, rác vũ trụ là tài nguyên, vùng xa vô luật, giọng bẩn, neon, hài hước khô. Phòng mở ba hướng.

| | A. Trạm rìa nợ nần | B. Xác tàu mẹ | C. Tinh vân vô luật |
|---|---|---|---|
| Một câu | Thợ trục vớt mắc nợ sống ở trạm quỹ đạo rìa, ra vành đai rác kiếm sống | Tàu thuộc địa khổng lồ bị bỏ trên quỹ đạo, người chơi đào sâu vào bên trong | Trạm biên giới cạnh tinh vân vô luật, nơi tập đoàn, chợ đen, cướp và loài lạ cùng sống |
| Nửa phiêu lưu | Bay ngoài không gian mở | Đi sâu từng tầng trong tàu | Thám hiểm các mảng tinh vân |
| Hợp 1 artist vector | Trung bình | Tốt | Thấp |
| Rủi ro chính | Giống concept đã bỏ | Mất cảm giác vũ trụ rộng | Phạm vi nội dung lớn nhất |

### V.3. Arriving at the Current Setting

| Bản | Hướng | Kết quả |
|---|---|---|
| Story bản 1 | Hướng B, khám phá trong xác tàu mẹ | Lead bác: cần khai thác vũ trụ rộng lớn, tên riêng tiếng Anh |
| Story bản 2 | Không gian mở theo lớp | Thay bởi ý tưởng mới của Lead |
| Story bản 3 | Cốt truyện Lead đưa ngày 2026-11-20, chơi đơn hoặc co-op | Chọn làm gốc |

Bản 3 giữ được cả hai điều hướng A và B không cùng có: không gian mở để thấy vũ trụ rộng (bãi vỡ của tàu mẹ Cradle chia ba dải), và một nơi bị khóa có bí ẩn để kéo người chơi đi sâu (xác các trạm con, mạch truyện về chế độ The Wardens).

### V.4. Lead's Initial Core Loop

Lead mô tả core loop đầu tiên theo khung Dave the Diver. Nhân vật đi thu thập tài nguyên, bị Oxy giới hạn quãng đi và thời gian đi. Trên đường đi người chơi lần ra map và cốt truyện phía sau. Tài nguyên được tiêu bằng cách chế tạo rồi bán. Tiền kiếm được dùng nâng cấp chính nhân vật để đi xa hơn, lâu hơn và gặp tài nguyên mới. Phòng phát triển từ khung này thành vòng một ngày ở mục VI.

## VI. Selected Concept

### VI.1. Daily Loop

Một ngày gồm hai chuyến ra bãi vỡ ban ngày và một ca cảng ban đêm. Ngoài không gian người chơi bay tự do 8 hướng, Oxy là chỉ số duy nhất, nhặt tài nguyên và bắt sống hoặc hạ Driftlife. Về trạm, người chơi dùng thứ mang về để sửa khoang, đánh thức người vớt mở tính năng, nuôi Driftlife và lập danh mục bán. Ban đêm tàu thương nhân cập cảng, người chơi mang thùng hàng tới đúng cửa neo trước khi tàu hết kiên nhẫn để lấy Tally. Tally dùng nâng cấp bộ đồ, dụng cụ và trạm, mở dải xa hơn cho ngày sau.

### VI.2. Why the Concept Fits the Constraints

| Ràng buộc | Cách concept đáp ứng |
|---|---|
| 1 artist vector | Map tổng ghép từ kho mảnh dựng tay, trạm là mặt cắt ngang tái dùng khoang, Driftlife phát quang trên nền tối dễ đọc |
| Co-op 2 đến 4 người | Không có luật chỉ đúng với một người, không tạm dừng toàn cục, thêm người là thêm tay chia việc ở cả chuyến lẫn ca cảng |
| Bán đứt | Không tiền thứ hai, không XP, một đồng tiền Tally, tiến trình 5 chương có kết thúc |
| Thể loại hành động kết hợp quản lý | Hai nửa nuôi nhau trong một ngày: chuyến cấp hàng cho ca cảng, ca cảng cấp Tally cho chuyến sau |

### VI.3. Out of Scope

PvP, chơi chung một máy, tiền thứ hai, XP và cấp nhân vật, hệ đói và nấu ăn, sinh map thủ tục hoàn toàn, danh tiếng từng phe, xây trạm tự do theo ô, phí cứu hộ và nợ, chọn chặng trên bản đồ.

## VII. Scope

### VII.1. Full Game

| Nội dung | Số lượng |
|---|---|
| Chương | 5 |
| Dải map tổng | 3 |
| Map nhánh | 8 |
| Loài Driftlife | 15 |
| Đơn vị The Wardens | 4 |
| Boss | 5 |
| Vật phẩm | khoảng 150 |
| Người vớt | 5 |
| Thương nhân | 5 |
| Thời lượng chơi một mình | 12 đến 15 giờ |

### VII.2. MVP

MVP là trọn chương 1. Bắt sống loài nhỏ bằng lưới có trong MVP.

| Nội dung MVP | Phạm vi |
|---|---|
| Thời lượng | 1,5 đến 2 giờ |
| Map | Dải Gần, 1 xác Seed Station |
| Người vớt | Kỹ sư, Thông dịch viên |
| Trạm | Xưởng, ca cảng 1 bến |
| Hàng ở ca cảng | 1 loại kiện phải chế, 1 loại hàng Driftlife sống |
| Loài Driftlife | 3 đến 4 |
| Boss | 1 boss nhỏ |
| Co-op | 2 người |

Mốc thời gian sản xuất chưa có. Phạm vi art sẽ tính lại khi có mốc.
