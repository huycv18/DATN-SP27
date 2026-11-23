# GDD hệ thống: Trạm và cảng

Project: game-moi (The Novent) | Chủ sở hữu: gd-quan | Trạng thái: bản đủ, giờ giao thương viết lại theo khung bán sushi của Dave đợt 9 GD-051 (2026-11-20), chờ QA GD-056 | Nguồn quyết định: `gdd/00-khung-game.md` K10 đến K27, C1 đến C10, `DECISIONS.md` mục "Giờ giao thương theo khung Dave (đợt 9)", `log-gdm-tu-quyet.md`

Số giờ giao thương chương 1 lấy từ sim giờ giao thương GD-054 (`tools/ket-qua/sim-ca-cang.md`, khớp demo bot 2026-11-20 của `tools/prototype/ca-cang-dave.html` trong 1 điểm phần trăm). Số chương 2 tới 5 ghi "chưa đo". Số còn lại ghi nguồn ở cột Nguồn của mục 3, chữ "ước" là chưa đo. ID vật phẩm theo `vat-pham.md` của gd-items, tên thương nhân theo `cot-truyen.md`, hành vi Driftlife theo `combat-driftlife.md`, giá Tally theo `kinh-te-tien-trinh.md` mục 3.1.

## Tóm tắt

Trạm và cảng là nửa ở nhà của The Novent. Người chơi sửa từng khoang của Station Ember, đánh thức người vớt để mở tính năng, nuôi Driftlife, và chơi giờ giao thương, nửa chơi tay thứ hai. Trước giờ giao thương người chơi lập danh mục bán từ hàng trong kho. Trong giờ giao thương tàu thương nhân cập vào 3 cửa neo, mỗi tàu gọi 1 thùng, người chơi mang thùng từ quầy cảng tới đúng cửa neo trước khi tàu hết kiên nhẫn và bơm khí cho tàu đang chờ để lấy Tally và tip. Tầng: lõi. Ưu tiên: bản đầu (MVP chương 1). Phụ thuộc chính: vật phẩm (gd-items), Driftlife (gd-combat), kinh tế (gd-economy), cốt truyện (gd-story).

## Hiện hành

| Mục | Giá trị hiện hành | Nhãn |
|---|---|---|
| Số khoang | 13 khoang, 7 khoang có ở chương 1 | MVP một phần |
| Sửa khoang | Mang đủ vật liệu tới khoang, giữ phím sửa | MVP |
| Trước giờ giao thương | Lập danh mục bán tối đa 4 loại hàng (chương 1), Thông dịch viên tự đóng thùng lúc Mở giao thương. Hàng cần chế phải chế xong ở xưởng trước giờ giao thương | MVP |
| Giờ giao thương | Bến 1 có 3 cửa neo. Tàu cập theo nhịp, mỗi tàu gọi 1 thùng. Mang thùng từ quầy cảng tới đúng cửa neo, bơm khí cho tàu đang chờ. Trả giá thùng cộng tip theo kiên nhẫn còn lại | MVP |
| Thất bại trong giờ giao thương | Tàu hết kiên nhẫn thì rời, chỉ mất món đó. Thùng về kho, không trừ Tally, không giảm Hạng cảng | MVP |
| Đơn đặt trước | 1 đơn mỗi ngày ở chương 1, hiện ở bảng tàu, giá thùng nhân 1,5 | MVP |
| Hạng cảng | 8 hạng, điểm cảng theo tàu phục vụ xong, có trần theo chương, không bao giờ giảm. Ngưỡng 70, 135, 285, 400, 560, 680, 910 (GD-055) | MVP tới hạng 3 |
| Nuôi Driftlife | 4 ô lên 9 ô, cặp cùng loài sinh con non, cho ăn thì ra sản phẩm, không cho ăn không chết | Sau MVP |
| Sự cố | Từ chương 3: rò khí ở cửa neo, chập điện ở quầy, Driftlife sổng ôm thùng | Sau MVP |
| Co-op | Mọi luật đúng với 1 đến 4 người. Bến 1 luôn 3 cửa neo. Số tàu một giờ giao thương 25, 55, 55, 60 cho 1 tới 4 người (sim GD-054 vòng 2 mục 4) | MVP 2 người |

## Danh mục

### Khoang của Ember
| ID | Khoang | Chức năng | Người vớt | Mở ở chương | Nhãn |
|---|---|---|---|---|---|
| KH01 | Buồng ngủ đông (4 buồng, N buồng chạy) và khu hồi sức | Ngủ sang ngày, lưu. Khu hồi sức giữ buồng của người chơi vào sau và người vớt chờ tỉnh (luật 62) | Có sẵn | 1 | MVP |
| KH02 | Cửa khí | Ra và về chuyến, nạp đầy Oxy khi chuyến kết thúc, tối đa 2 chuyến mỗi ngày (luật 63, K22) | Có sẵn | 1 | MVP |
| KH03 | Kho | Chỗ chứa đồ chung | Có sẵn | 1 | MVP |
| KH04 | Khoang neo | Hãm trôi và neo Ember, việc sửa đầu tiên | Có sẵn | 1 | MVP |
| KH05 | Xưởng | Chế và nâng cấp trang bị, chế trước hàng cảng cần chế | Kỹ sư | 1 | MVP |
| KH06 | Khoang liên lạc | Gọi tàu, bảng tàu, lập danh mục bán, mở giờ giao thương, shop | Thông dịch viên | 1 | MVP |
| KH07 | Cảng (bến 1 có 3 cửa neo, quầy cảng) | Giờ giao thương | Thông dịch viên | 1 | MVP |
| KH08 | Khoang dẫn đường | Mở dải, đọc lõi dẫn đường | Hoa tiêu | 2 | Sau MVP |
| KH09 | Bến Skiff | Đi thẳng tới map nhánh | Hoa tiêu | 2 | Sau MVP |
| KH10 | Phòng nghiên cứu | Nghiên cứu mẫu Driftlife | Nhà sinh học | 2 | Sau MVP |
| KH11 | Khoang sinh quyển | Nuôi Driftlife | Nhà sinh học | 2 | Sau MVP |
| KH12 | Bến 2, bến 3, tiện ích cảng | Thêm cửa neo ở tầng khác, quầy phụ sát bến xa | Trưởng cảng | 3 | Sau MVP |
| KH13 | Động cơ chính | Tiến độ rời neo, 5 giai đoạn | Có sẵn (hỏng) | 1 đến 5 | MVP giai đoạn 1 |

### Loại tàu và thương nhân

Tên gọi bám vào người đặt. Loose Bolt là tên Tikko đặt cho tàu gom phế liệu, Lamplighter theo hệ tên ánh sáng của các trạm con, Vellune là tên đăng ký của tàu dưới vỏ bọc thương nhân Ilsume. Glasswing gợi mẫu vật sống mong manh mà Vaeth chở, Iron Keel là cách gọi nặng và thẳng của Dromm, Stayfast gợi chủ trương bám trụ của The Remainers. Backchannel là tên tàu của người buôn tin Nhem, Pilot Light là mật danh The Kindling dùng cho chuyến tàu chuyển tin.
Mã mốc truyện dạng C1.8 theo `cot-truyen.md` mục 2.5.
| ID | Tàu | Ai (tên theo `cot-truyen.md` sơ bộ) | Mở | Nhãn |
|---|---|---|---|---|
| TA01 | Loose Bolt (Tàu gom phế liệu) | Tikko, thương nhân người Oru, khách quen đầu tiên | Mốc C1.8 | MVP |
| TA02 | Tàu vội | Dân Oru vãng lai, không tên riêng | Chương 1, Hạng cảng 2 | MVP |
| TA03 | Lamplighter (Xuồng tiếp tế Lantern) | Bram Kowalski, Station Lantern | Sau mốc C2.2 | Sau MVP |
| TA04 | Vellune (Tàu trọng nghi thức) | Sennari, thương nhân Ilsume. Thật ra là Sevra Ilvane (Y) giả danh | Mốc C2.7 tới mốc C3.8 | Sau MVP |
| TA05 | Glasswing (Tàu sưu tầm) | Aelith, thương nhân Vaeth | Mốc C2.4 | Sau MVP |
| TA06 | Iron Keel (Tàu không nói giá) | Brakk, thương nhân Dromm | Mốc C3.1 | Sau MVP |
| TA07 | Stayfast (Tàu The Remainers) | The Remainers, Elias Vance | Mốc C3.5 | Sau MVP |
| TA08 | Tàu lạ | Maro, gián điệp của Daskel (The Wardens) cải trang, săn Sevra | Mốc C3.3, hai lần cập bến | Sau MVP |
| TA09 | Tàu đơn gấp | Người đưa hàng gấp của thương hội Sennari, không tên riêng | Hạng cảng 6 | Sau MVP |
| TA10 | Backchannel (Tàu buôn tin) | Kesh, thương nhân Nhem, giữ The Lattice | Mốc C3.1 | Sau MVP |
| TA11 | Pilot Light (Tàu của mạng lưới) | The Kindling, mạng lưới cách mạng | Ngày kế tiếp sau mốc C3.8 | Sau MVP |

### Nhóm hàng cảng (ID kiện theo `vat-pham.md` luật G2)
- Một loại hàng trong danh mục bán là một ID kiện CGO của gd-items. Nhóm hàng gom các ID kiện để gán sở thích của loại tàu (bảng 2.4) và mở theo chương. Mọi ID kiện trong ITEM LIST thuộc đúng một nhóm.
- Cột Trước giờ giao thương nói người chơi phải làm gì trước khi Mở giao thương. Đóng thùng luôn do Thông dịch viên làm tự động lúc Mở giao thương (luật 22).
| ID nhóm | Nhóm hàng | ID kiện (gd-items) | Làm từ | Trước giờ giao thương | Mở |
|---|---|---|---|---|---|
| HC01 | Kiện phế liệu | CGO-101, CGO-102 | Phế liệu thô | Có hàng trong kho | Chương 1, MVP |
| HC02 | Kiện khoáng | CGO-103 | Khoáng thô | Có hàng trong kho | Chương 1, MVP |
| HC03 | Kiện băng | CGO-104 (thô), CGO-113 (chế) | Băng, khối nước tinh khiết COM-105 | CGO-104 có hàng trong kho. CGO-113 chế COM-105 ở xưởng trước giờ giao thương | Chương 1, MVP. CGO-113 là hàng cần chế duy nhất của chương 1 (log 67) |
| HC04 | Kiện linh kiện | CGO-111, CGO-112 | Vật liệu chế COM của xưởng | Chế ở xưởng trước giờ giao thương | Chương 2, Sau MVP |
| HC05 | Kiện mẫu Driftlife | CGO-105 | Mẫu Driftlife đã hạ SMP | Có hàng trong kho | Chương 1, Hạng 3, MVP |
| HC06 | Lồng sinh vật sống | CGO-121 dải Gần (RCP-126 cho LIV-111 tới 113 cỡ S, RCP-128 cho LIV-114, 115 cỡ M), CGO-221, CGO-321. Lồng nhớ loài bên trong, giá theo loài (luật 30) | Mẫu sống LIV | Bắt sống trong chuyến. Thông dịch viên đưa vào lồng giao lúc Mở giao thương. Không chia thùng | CGO-121 chương 1, MVP (RCP-128 chương 2). CGO-221 chương 2, CGO-321 chương 3, Sau MVP |
| HC07 | Kiện sản phẩm nuôi | CGO-107, CGO-207, CGO-307 | Sản phẩm nuôi BIO | Có hàng trong kho | Chương 2, Hạng 5, Sau MVP |
| HC08 | Kiện vật tư | CGO-141 | 1 Bình Oxy nhỏ CON-101, 1 Lưới cuộn CON-102 (RCP-127) | Chế vật tiêu hao ở xưởng trước giờ giao thương | Chương 2, Sau MVP |
| HC09 | Bản sao dữ liệu | CGO-131 (sao bằng RCP-141) | Sao từ vật kể chuyện loại dữ liệu STY-101, STY-401 ở khoang liên lạc, vật gốc ở lại trạm | Sao một lần mỗi vật gốc. Không chia thùng | Chương 3, Sau MVP |
| HC10 | Kiện đồ Trái Đất | CGO-109 (RCP-116) | Đồ cũ của Cradle RES-106 | Có hàng trong kho | Chương 1, MVP |
| HC11 | Kiện đặc sản Driftlife | CGO-106, CGO-206, CGO-306 | Mẫu đặc sản từng loài SMP (CGO-106: 1 trong SMP-111 tới 115, RCP-124) | Có hàng trong kho | CGO-106 chương 1, Hạng 3, MVP. CGO-206 chương 2, CGO-306 chương 3, Sau MVP |
| HC12 | Kiện tinh dải Giữa | CGO-211, CGO-212, CGO-213 | Vật liệu chế COM dải Giữa | Chế ở xưởng trước giờ giao thương | Chương 2, Sau MVP |
| HC13 | Kiện tinh dải Xa | CGO-311, CGO-312, CGO-313 | Vật liệu chế COM dải Xa | Chế ở xưởng trước giờ giao thương | Chương 3, Sau MVP |
| HC14 | Kiện linh kiện đặc biệt | CGO-411, CGO-511 | Linh kiện Cradle RES-401 (RCP-421), linh kiện Warden RES-305 (RCP-521) | Có hàng trong kho | CGO-411 chương 4, CGO-511 chương 5, Sau MVP |
| HC15 | Kiện tin mật | CGO-421 | 1 Gói tin mật STY-701 (khoang liên lạc nhận từ mạng lưới, tối đa 1 gói mỗi ngày) và 1 kiện vỏ bọc dải Xa (RCP-422) | Có gói tin trong ngày. Không chia thùng | Chương 4, Sau MVP. Chỉ tàu của mạng lưới (TA11) gọi |

## 1. Mục đích với người chơi

- Pillar P2 (mang về là để trạm sống lại): mỗi chuyến về là có thứ để sửa, mỗi khoang sửa xong đổi hình mặt cắt trạm và trả một chức năng.
- Pillar P1 kéo dài sang nhà: bảng tàu cho biết hôm nay loại tàu nào ghé, tàu đó hay gọi gì và đơn đặt trước nào đang chờ, nên quyết định đi dải nào và mang gì về bắt đầu từ cảng.
- Pillar P3: giờ giao thương có đủ việc cho 4 người nhưng một người vẫn chơi trọn, vì số tàu co giãn theo số người và mỗi tàu chỉ cần 1 thùng.
- Pillar P4: thương nhân ghé cảng là nơi kể truyện giữa hai nửa ngày, kể cả tàu lạ của gián điệp Maro và Ilsume, người thừa kế Sevra giả danh.
- Cảm giác giờ giao thương: tay bận, đầu nhẹ. Quyết định nặng nằm trước giờ giao thương (bán gì, bao nhiêu). Trong giờ giao thương người chơi đọc bong bóng, chọn tàu sắp hết kiên nhẫn để phục vụ trước, chen bơm khí khi rảnh tay. Chậm thì mất tip trước, chậm nữa mới mất món.
- 30 giây đầu của giờ giao thương đầu tiên (luật 67): màn lập danh mục mở với thùng phế liệu chọn sẵn, người chơi bấm Mở giao thương. TA01 cập cửa neo 1, bong bóng hiện thùng phế liệu, 3 giây sau thùng viền màu cửa neo 1 hiện ở quầy. Người chơi nhặt thùng, chạy tới cửa neo 1, giao, thấy giá và tip bay lên. Tàu thứ hai cập khi tay trống và bật bơm khí ngay.

## 2. Luật

### Luật trạm và khoang (K10, K11)

1. Ember có 13 khoang ở bảng Danh mục. Mỗi khoang ở một trong bốn trạng thái: Hỏng, Hoạt động, Đang sự cố, Đang nâng cấp. `MVP` (trừ Đang sự cố)
2. Khoang Hỏng không dùng được chức năng, vẫn đi qua được. `MVP`
3. Sửa khoang: mọi vật liệu trong danh sách sửa phải nằm trong kho, người chơi đứng ở khoang và giữ phím sửa trong thời gian sửa. Bắt đầu giữ phím thì vật liệu bị trừ khỏi kho. Thả phím giữa chừng thì tiến độ giữ nguyên, vật liệu không hoàn lại, giữ phím lại thì làm tiếp. `MVP`
4. Sửa xong thì khoang sang Hoạt động cấp 1, mặt cắt trạm đổi hình khoang đó và hiện người vớt phụ trách (nếu có). `MVP`
5. Nâng cấp khoang lên cấp 2 và cấp 3 theo cùng cách sửa, cần vật liệu và Tally theo bảng của gd-economy. Trong lúc nâng cấp khoang vẫn dùng được. ID nâng cấp là ID khoang cộng cấp: KH05-C2 là xưởng cấp 2, KH07-C2 là Cảng cấp 2: cửa neo thứ 4 của bến 1 (mua ở shop, Hạng 4), là nâng cấp, không theo số người, KH12-KP là quầy phụ cạnh bến 2 và bến 3, KHxx-C3 là cấp 3 của khoang xx. Xưởng cấp 2 mở ở chương 2. Mọi nâng cấp khoang `Sau MVP`, trừ kho cấp 2 sửa ở chương 1 (`MVP`, có trong sim kinh tế chương 1)
6. Khoang neo là khoang đầu tiên sửa được. Trước khi khoang neo Hoạt động, chỉ cửa khí, kho, buồng ngủ đông dùng được, và Ember trôi chậm (hình nền trôi, không ảnh hưởng luật). Sửa xong khoang neo thì Ember đứng yên tới hết game. `MVP`
7. Một khoang chỉ sửa được khi chương của khoang đã mở (bảng 2.6). Khoang có người vớt phụ trách (xưởng, khoang liên lạc, cảng, khoang dẫn đường, bến Skiff, phòng nghiên cứu, khoang sinh quyển, bến 2, bến 3) chỉ sửa được sau khi người vớt đó tỉnh và giao quest (luật 15). Khoang chưa sửa được hiện khung tối và một dòng gợi ý truyện. `MVP`
8. Kho không giới hạn số lượng. Đồ trong túi đồ tự vào kho khi người chơi qua cửa khí về trạm. `MVP`
9. Trạm không xấu đi theo thời gian: khoang Hoạt động không tự hỏng lại. Chỉ sự cố (từ chương 3) làm một phần của cảng tạm Đang sự cố trong giờ giao thương. `MVP`

### Luật động cơ chính (K10)

10. Động cơ chính có 5 giai đoạn. Mỗi chương mở đúng một giai đoạn. Mỗi giai đoạn cần một bộ vật liệu gồm tài nguyên của dải mới và một linh kiện động cơ. Giai đoạn 1 tới 4 dùng ENG-101 tới ENG-104 mua ở shop. Giai đoạn 5 dùng ENG-105 chế ở xưởng (RCP-207) từ bản đồ sao thật lấy ở Warden Rig và hộp ghi hành trình Cradle, không mua được. `MVP` giai đoạn 1
11. Sửa một giai đoạn theo luật 3. Xong giai đoạn thì động cơ hiện thêm một phần sáng đèn. Mốc đóng chương của truyện chỉ kích hoạt khi giai đoạn động cơ của chương đã lắp, chương đóng khi mốc đó xong (K25). Trạm không có cổng chương riêng. `MVP` giai đoạn 1
12. Giai đoạn 5 chỉ sửa được sau mốc C5.6 (lấy bản đồ sao thật ở Warden Rig). Xong giai đoạn 5 thì Ember rời neo, rời bãi vỡ, game sang cảnh kết mở C5.7, không tới Solace (K10). Sau cảnh kết game về menu chính. Bản lưu ở ngày cuối với mọi mốc truyện đã xong, Ember còn ở neo để chơi tự do, không có nội dung mới. Cảnh kết không phát lại, xem lại từ Sổ tay (K24). `Sau MVP`

### Luật người vớt mở tính năng (K12)

13. Mỗi người vớt nằm trong một buồng ngủ đông còn chạy (BNG-101) ở một map nhánh. Người chơi tìm buồng, kéo buồng về cửa khí của Ember (luật kéo vật của gd-character). Người vớt nào gd-story đặt ngoài buồng ngủ đông (ví dụ người đang sống ở Station Lantern) thì tới Ember theo mốc truyện, bỏ qua luật 13 và 14, vẫn áp luật 15. `MVP` cho Kỹ sư, Thông dịch viên
14. Buồng kéo về qua cửa khí thì đặt vào khu hồi sức cạnh buồng ngủ đông, người vớt ở trạng thái Hồi sức. Mốc truyện của việc vớt xong lúc buồng qua cửa khí. Người vớt tỉnh vào đầu ngày kế tiếp và giao quest lúc tỉnh. `MVP`
15. Người vớt tỉnh thì giao quest mở: sửa khoang của người đó (luật 3). Thông dịch viên có hai khoang, quest là sửa cả khoang liên lạc KH06 và cảng KH07 (khớp luật 18 và mốc C1.7). Sửa xong thì tính năng mở và người vớt đứng làm việc ở khoang đó. `MVP`
16. Mỗi người vớt có tính năng lớn dần theo cấp khoang và theo chương (bảng 2.7). Người vớt không chết, không rời trạm, không cần ăn (K17). `MVP`
17. Người vớt không phải nhân vật người chơi. Người chơi vào phiên sau là người sống sót vớt về theo luật C2, không chiếm chỗ của 5 người vớt. `MVP`

### Luật giờ giao thương (K13)

18. Giờ giao thương chỉ có khi khoang liên lạc và cảng (bến 1) đều Hoạt động. Trước đó pha giờ giao thương tự bỏ qua. `MVP`
19. Giờ giao thương bắt đầu khi một người chơi tương tác với bảng tàu ở khoang liên lạc và chọn Mở giao thương, theo điều kiện ở luật 64 tới 66. Chọn Nghỉ giao thương thì giờ giao thương bỏ qua, không phạt, tàu hôm đó không tới, kho giữ nguyên. `MVP`
20. Danh mục bán: trước khi Mở giao thương, người chơi lập danh mục ở bảng tàu. Danh mục gồm tối đa M loại hàng, mỗi loại hàng là một ID kiện đã mở (bảng Nhóm hàng cảng). Mỗi loại đặt số thùng từ 1 tới số thùng kho làm được. M theo Hạng cảng (mục 3). Danh mục rỗng thì không Mở giao thương được. Danh mục chốt lúc Mở giao thương, không sửa trong giờ giao thương. `MVP`
21. Thùng là đơn vị bán trong giờ giao thương, bằng 0,4 kiện. Số thùng kho làm được của một ID kiện bằng số kiện làm được theo công thức của gd-items nhân 2,5, làm tròn xuống. Lồng sinh vật sống, bản sao dữ liệu và kiện tin mật không chia: một đơn vị là một thùng. `MVP` (bản sao, tin mật `Sau MVP`)
22. Lúc Mở giao thương, Thông dịch viên đóng thùng tự động cho cả danh mục và trừ hàng khỏi kho ngay, không tốn thời gian giờ giao thương. Hàng cần chế phải chế xong ở xưởng trước khi Mở giao thương (luật 53). Trong giờ giao thương không chế, không đóng gì. `MVP`
23. Bến 1 có 3 cửa neo, mỗi cửa neo chứa một tàu. Số cửa neo không đổi theo số người (GDM chốt đợt 9, sim GD-054 vòng 2 đạt mục tiêu ở 1 tới 4 người). Cửa neo thứ 4 chỉ có qua nâng cấp KH07-C2. Tàu tới mà có cửa neo trống thì cập cửa neo trống có số nhỏ nhất. Mọi cửa neo bận thì tàu chờ ngoài, xếp hàng ở mép màn hình kèm đồng hồ chờ ngoài. Có cửa neo trống thì tàu chờ lâu nhất cập trước. Hết đồng hồ chờ ngoài thì tàu bỏ đi. `MVP`
24. Lúc tới, mỗi tàu chọn đúng 1 thùng trong các loại hàng còn thùng của danh mục. Trọng số chọn bằng độ gọi của bậc giá (gd-economy, `kinh-te-tien-trinh.md` mục 3.1: Hàng chợ 3, Hàng sinh học 2, Hàng chế 1,5, Hàng sống 1, Hàng hiếm 1) nhân hệ số hàng hay gọi của loại tàu (bảng 2.4, loại hàng không ghi có hệ số 1). Tàu có cột "chỉ gọi" ở bảng 2.4 chỉ chọn trong các nhóm đó. Thùng đó giữ riêng cho tàu từ lúc chọn. Tàu có đơn đặt trước chọn đúng thùng đã đặt (luật 72). Danh mục không còn thùng nào tàu đó gọi được thì tàu không tới. Từ chương 1, TA02 chỉ gọi băng hoặc khoáng, nên danh mục không có hai nhóm đó thì Tàu vội không tới và mất tip gấp đôi của nó. Người chơi phải chọn giữa bán hàng đắt và giữ chỗ cho hàng tàu tip cao gọi. Tàu cập cửa neo thì hiện món gọi bằng bong bóng trên tàu. `MVP`
25. Quầy cảng có 3 ô, mỗi ô cùng màu một cửa neo. 3 giây sau khi tàu cập, thùng tàu gọi hiện ở ô quầy cùng màu cửa neo đó. `MVP`
26. Mang thùng: người chơi tay trống nhặt thùng ở ô quầy bằng tương tác. Mỗi lần mang 1 thùng, tốc độ chạy không đổi khi mang. Tới cửa neo nhấn tương tác để giao. Thùng giao vào cửa neo khác thì tàu từ chối, thùng ở lại tay. Thùng đã nhặt không đặt xuống được, chỉ giao (GDM chốt cho MVP). Thứ tự xử lý ở mục "Thứ tự xử lý khi giao thùng". `MVP`
27. Kiên nhẫn: mỗi tàu có thanh kiên nhẫn đầy lúc cập cửa neo và giảm 1 mỗi giây. Kiên nhẫn tối đa theo loại tàu (bảng 2.4). Lúc chờ ngoài chỉ chạy đồng hồ chờ ngoài, không trừ kiên nhẫn. Hết kiên nhẫn thì tàu rời chưa giao (luật 32). `MVP`
28. Bơm khí: lúc cập, mỗi tàu có 50% bật yêu cầu bơm khí ngay. Tàu chưa giao thì bật yêu cầu nữa sau 10 tới 18 giây kể từ lúc cập hoặc lần bơm trước. Người chơi tay trống đứng ở cửa neo đó giữ tương tác 1 giây. Xong thì kiên nhẫn hồi 25% kiên nhẫn tối đa, không vượt tối đa, và cộng 10 Tally tính vào tip. Rời cửa neo trước 1 giây thì không tính, làm lại từ đầu. Bỏ qua yêu cầu không bị trừ gì. Lý do bật lúc cập: sim GD-054 cho thấy tàu thường được giao trong 10 giây, bơm khí bật sau 10 giây thì người chơi một mình không bao giờ gặp. Bật lúc cập thì bơm khí tranh 3 giây chờ thùng ra quầy với việc chạy về quầy. Số 50% là ước, gd-tech đo lại. `MVP`
29. Giao đúng thì tàu nhận thùng, trả Tally ngay bằng giá thùng cộng tip (luật 30, 31), cộng điểm cảng (luật 40), rồi rời cửa neo. Cửa neo trống khi tàu khuất. `MVP`
30. Giá thùng bằng giá ID kiện chia 2,5, gd-economy đặt (`kinh-te-tien-trinh.md` mục 3.1). Hàng không chia (luật 21) giữ giá một đơn vị. Lồng tính giá theo loài bên trong. Thùng của đơn đặt trước nhân 1,5 (luật 71). Giá không nhân theo Hạng cảng, không nhân theo số người. `MVP`
31. Tip cơ bản tối đa 25% giá thùng, nhân phần kiên nhẫn còn lại lúc giao (0 tới 1), nhân hệ số tip của loại tàu, nhân 2 nếu là món mê của tàu đó (bảng 2.4), làm tròn. MVP tip tối đa 50% giá thùng, chưa kể bơm khí. Bơm khí cộng thêm 10 Tally mỗi lần (luật 28). Tip là chỗ duy nhất tốc độ đổi ra Tally. `MVP`
32. Tàu rời chưa giao khi hết kiên nhẫn hoặc hết giờ giao thương. Tàu bỏ đi khi hết đồng hồ chờ ngoài. Cả hai chỉ mất món của tàu đó: không có giá, tip, điểm cảng cho tàu đó, không trừ gì. Thùng của tàu (ở quầy hay trên tay) về lại danh mục, tàu sau gọi được. `MVP`
33. Tàu không bán gì trong giờ giao thương. Mua hàng chỉ ở shop của khoang liên lạc vào cuối ngày (K20). `MVP`
34. Giờ giao thương kết thúc ở điều tới trước trong ba điều: hết giờ giao thương (300 giây), tàu cuối của lịch đã rời, hoặc danh mục hết thùng (kể cả thùng giữ cho đơn đặt trước) và không còn tàu ở cửa neo hay chờ ngoài. Hết danh mục thì tàu còn lại trong lịch không tới. Hết giờ giao thương thì mọi tàu ở cửa neo rời ngay và tàu chờ ngoài bỏ đi, áp luật 32. `MVP`
35. Cuối giờ giao thương hiện bảng tổng kết giao thương: số tàu phục vụ xong trên số tàu trong lịch, số tàu rời chưa giao, số tàu không tới vì hết hàng, Tally từ giá thùng, tip (kể cả bơm khí), tổng Tally, điểm cảng, kết quả đơn đặt trước, số thùng về kho theo loại, lời một thương nhân. Thùng còn lại về kho ngay, giữ qua ngày, không hỏng. Bảng tổng kết giao thương không chặn người chơi khác trong co-op. Mốc truyện xảy ra trong giờ giao thương (C1.8, C2.3, C3.3, C3.4, C4.7, C5.2) chỉ hiện lời bong bóng trong giờ giao thương, cảnh phát ở pha Cuối ngày, đồng hồ giờ giao thương không dừng. `MVP`
36. Thời gian trong giờ giao thương không dừng khi mở menu nếu có từ 2 người (C7). Chơi một mình thì tạm dừng được. `MVP`

Thắng khi (giờ giao thương): phục vụ xong mọi tàu khi kiên nhẫn còn cao. Không có trạng thái thua giờ giao thương. Giờ giao thương tệ nhất là mọi tàu rời chưa giao, khi đó giờ giao thương không có Tally, mọi thùng về kho, Hạng cảng không đổi.
Cam kết với người chơi: không mất hàng vì tàu rời, không trừ Tally, không giảm Hạng cảng, thùng không hỏng, bảng tàu không nói dối (TA06 gọi bằng gợi ý, bảng tàu ghi rõ).

### Luật loại tàu (K13, chi tiết từng loại ở bảng 2.4)

37. Mỗi loại tàu khác nhau ở tối đa ba trục: kiên nhẫn, hàng hay gọi (trọng số sở thích hoặc chỉ gọi một số nhóm), một luật riêng. Không loại nào chỉ khác nhau ở số. `MVP`
38. TA08 tàu lạ không thuộc túi trộn. TA08 cập bến đúng 2 lần, mỗi ngày tối đa 1 lần. Lần 1 vào lịch từ ngày kế tiếp sau khi bến 2 (KH12) Hoạt động, lần cập bến này hoàn thành mốc C3.3, tàu gọi 1 thùng như tàu thường. Lần 2 vào lịch từ ngày kế tiếp sau mốc C3.4, đặt trước 1 bản sao dữ liệu (HC09) của nhật ký trạm (hiện ở bảng tàu như đơn đặt trước) kèm lời thoại dò hỏi về các thương hội Sennari ghé Ember. Sau mốc C3.8 TA08 không ghé nữa. Truyện đếm lần cập bến, giao hay không giao đều không đổi truyện. Bán bản sao không mất vật gốc và không mất manh mối. `Sau MVP`

### Luật Hạng cảng (K15)

39. Hạng cảng là một thang duy nhất từ hạng 1 tới hạng 8, chung cả nhóm. `MVP` tới hạng 3
40. Điểm cảng: mỗi tàu phục vụ xong cho 1 điểm, thêm 1 điểm khi lúc giao còn từ 2/3 kiên nhẫn trở lên. Tàu rời chưa giao, bỏ đi, không tới cho 0 điểm. Điểm không nhân theo số người vì số tàu đã tăng theo số người (luật 68). Điểm cảng không bao giờ giảm. `MVP`
41. Đủ điểm ngưỡng thì lên hạng ngay sau bảng tổng kết giao thương. Mỗi chương có trần hạng: đủ điểm nhưng chạm trần thì điểm vẫn cộng dồn, lên hạng khi chương sau mở. Ngưỡng điểm Hạng cảng 2 tới 8: 70, 135, 285, 400, 560, 680, 910 (gd-economy GD-055, `kinh-te-tien-trinh.md` mục 3.5). `MVP`
42. Mỗi hạng mở đúng các thứ ở bảng 2.5: loại tàu, trần danh mục M, loại hàng bán được, mục shop. `MVP` tới hạng 3

### Luật sự cố (K14)

43. Trước chương 3 không có sự cố. Sự cố bắt đầu từ giờ giao thương kế tiếp sau lần đầu TA08 cập bến (lý do truyện: thiết bị Maro để lại làm trạm trục trặc, theo gd-story). Từ đó mỗi giờ giao thương có số sự cố theo bảng tham số, giờ xảy ra ngẫu nhiên trong giờ giao thương nhưng không trong 30 giây đầu giờ giao thương. `Sau MVP`
44. Sự cố làm một cửa neo, một ô quầy cảng hoặc khoang sinh quyển sang Đang sự cố. Xử lý bằng thao tác ở bảng 2.8. Xử lý xong thì chỗ đó về trạng thái trước. `Sau MVP`
45. Sự cố bỏ mặc chỉ gây hậu quả trong giờ giao thương đó. Hết giờ giao thương thì mọi sự cố tự hết, không có hư hại lâu dài, không mất hàng. `Sau MVP`
46. Driftlife sổng chỉ xảy ra khi khoang sinh quyển có Driftlife nuôi. Loài sổng là một loài đang nuôi. Thùng con sổng ôm không mất: tóm được thì thùng về ô quầy cũ, hết giờ giao thương thì thùng về kho. Tàu đang chờ thùng đó vẫn giảm kiên nhẫn. `Sau MVP`

### Luật nuôi Driftlife (K16)

47. Khoang sinh quyển mở ở chương 2 khi Nhà sinh học tỉnh và khoang được sửa. Khoang có số ô nuôi theo cấp khoang, mỗi ô chứa một con. `Sau MVP`
48. Thả Driftlife sống vào ô trống bằng cách mang lồng tới khoang. Chỉ loài gd-combat ghi "nuôi được" mới thả được. `Sau MVP`
49. Cho ăn là bỏ 1 thức ăn đúng dải (FED-101, FED-201, FED-301, làm ở khoang sinh quyển từ mô sinh học) cho mỗi con. Mỗi ngày, mỗi con trưởng thành được cho ăn thì ra một sản phẩm nuôi (BIO của loài đó) vào đầu ngày kế tiếp. Không cho ăn thì không ra sản phẩm, con vật không chết, không yếu đi. Sản phẩm nuôi và Driftlife nuôi chỉ ra Tally khi bán ở giờ giao thương (HC06, HC07, HC11), nên lợi từ nuôi mỗi ngày có trần là số tàu một giờ giao thương và trần M của danh mục. `Sau MVP`
50. Hai con cùng loài cùng trưởng thành và được cho ăn trong ngày thì đầu ngày kế tiếp sinh một con non nếu khoang còn ô trống. Một cặp sinh tối đa một con non mỗi ngày. Con non trưởng thành sau số ngày theo tham số. `Sau MVP`
51. Lấy Driftlife trưởng thành ra khỏi ô bỏ vào lồng thì dùng được như Driftlife bắt sống: bán ở giờ giao thương (HC06), nghiên cứu, thả ra ngoài. Lồng con nuôi có giá bằng 0,5 lần lồng bắt ngoài chuyến cùng loài, mỗi loài tối đa 1 lồng con nuôi mỗi ngày (luật M5 của `vat-pham.md`). Con non chưa trưởng thành không lấy ra được. `Sau MVP`
52. Nâng cấp khoang sinh quyển thêm ô. Môi trường cho loài dải Xa có ở cấp 3, riêng khoang sinh quyển được nâng cấp 3 từ chương 3 (bảng 2.6). Loài dải Xa không thả được vào khoang chưa có môi trường đó. `Sau MVP`

### Luật chế trước và lập danh mục (C9)

53. Chế trước: hàng cần chế (CGO-113, HC04, HC08, HC12, HC13) phải chế ở xưởng trước khi Mở giao thương. Xưởng chạy một mẻ một lúc và giữ thêm mẻ chờ trong hàng đợi chế. Hàng đợi cấp 1 có 2 chỗ, tính cả mẻ đang chạy (một chạy, một chờ). Mẻ chạy theo thời gian thực kể cả khi người chơi ra chuyến. Mẻ còn trong hàng đợi lúc ngủ thì xong khi sang ngày (chế qua đêm). Mẻ xong sau khi Mở giao thương thì vào kho, không vào danh mục giờ giao thương đó. `MVP` cho CGO-113
54. Người đang ở trạm trong lúc đồng đội còn ở ngoài (về sớm, bị kéo về, hoặc chọn ở lại theo C5) không ra lại trong chuyến đó (C9) và được làm mọi việc trạm: chế trước ở xưởng, lập danh mục nháp, sửa khoang, chăm khoang nuôi. Người đó xem vị trí đồng đội trên bản đồ ở khoang liên lạc (hiển thị do gd-ux). `MVP`
55. Lập danh mục làm được bất cứ lúc nào trước Mở giao thương, ở bảng tàu của khoang liên lạc. Danh mục nháp lưu lại tới khi Mở giao thương, kể cả khi thoát bảng tàu. Co-op có một danh mục chung, ai ở khoang liên lạc cũng sửa được, người Mở giao thương chốt. Chơi một mình áp cùng luật. `MVP`
56. Danh mục chỉ dùng hàng đã nằm trong kho. Hàng trong túi đồ của đồng đội còn ở ngoài chưa dùng được cho tới khi người đó về qua cửa khí (K3). Kho giảm sau khi lập nháp thì số thùng của loại đó tự hạ về số kho làm được. `MVP`
57. Bảng tàu giúp lập danh mục: hiện số tàu dự kiến, hàng mỗi loại tàu hôm nay hay gọi, đơn đặt trước, giá thùng từng loại, tổng thùng so với số tàu (cảnh báo khi ít hơn số tàu: giờ giao thương có thể kết thúc sớm). Bảng tàu không chọn hộ. `MVP`
58. Chế trước và danh mục rộng được trả bằng việc bán được nhiều tàu hơn và đơn đặt trước giá cao, không có thưởng riêng. Hệ số 1,35 của bậc Hàng chế là giá của loại hàng đó (gd-economy mục 3.1), trả công chế qua giá thùng. `MVP`

### Luật buồng ngủ đông và cửa khí (KH01, KH02, C5, K22, K23)

59. Sang ngày mới: mỗi người vào chỗ ngủ của mình (luật 62) là xác nhận sẵn sàng. Khi mọi người đang online đã xác nhận thì cả nhóm ngủ, lưu, sang ngày mới. Chơi một mình thì vào buồng là ngủ ngay. `MVP`
60. Từ lúc người đầu tiên vào buồng, người chưa vào có 30 giây (K23), đồng hồ hiện trên HUD của mọi người. Hết 30 giây, người chưa xác nhận tự tính sẵn sàng và nhân vật tự về buồng. Người đã vào buồng được ra lại để hủy xác nhận, đồng hồ không dừng. `MVP`
61. Cửa khí: người chưa trả lời xác nhận ra chuyến trong 30 giây kể từ khi người đầu tiên xác nhận thì tự tính là ở lại trạm (C5), chuyến bắt đầu với những người đã xác nhận. Người tự tính ở lại áp luật 54. Người đã xác nhận được hủy xác nhận trước khi chuyến bắt đầu. `MVP`
62. KH01 có 4 buồng ngủ đông. Lúc tạo thế giới, N buồng chạy cho N người tỉnh, các buồng còn lại hỏng và người trong đó đã chết, không sửa được (B7, `cot-truyen.md`). Người chơi vào sau tới trong buồng ngủ đông của trạm khác, buồng đó đặt ở khu hồi sức cạnh KH01 và là chỗ ngủ của người đó. Người vào sau không lấp buồng tắt. Khu hồi sức không giới hạn số buồng. `MVP`
63. Cửa khí nạp đầy Oxy cho người về trạm khi chuyến của người đó kết thúc. Một ngày có tối đa 2 chuyến, đi bằng Skiff cũng tính một chuyến. Sau chuyến thứ 2, hoặc khi giờ giao thương đã mở hay đã bỏ, cửa khí khóa tới ngày mới (K22). `MVP`

### Luật mở giao thương, sinh lịch và đơn đặt trước (chi tiết luật 19, 24)

64. Mở giao thương chỉ được khi không còn ai ở ngoài chuyến. N của giờ giao thương là số người online lúc mở giao thương. Số tàu và giãn cách chốt theo N đó, không đổi tới hết giờ giao thương (khớp `ky-thuat.md` luật 12). `MVP`
65. Mỗi ngày có đúng một giờ giao thương. Giờ giao thương đã kết thúc hoặc đã bỏ thì không mở lại trong ngày. Mở giao thương hoặc Nghỉ giao thương thì cửa khí khóa tới ngày mới (luật 63), vì giờ giao thương là pha sau các chuyến (K22). `MVP`
66. Khi có từ 2 người online: Nghỉ giao thương, và Mở giao thương lúc nhóm chưa đi đủ 2 chuyến, cần mọi người online xác nhận, không trả lời trong 30 giây tính là đồng ý (cùng cách K23). Mở giao thương sau khi đã đi đủ 2 chuyến không cần xác nhận. `MVP`
67. Giờ giao thương đầu tiên của thế giới cố định để dạy: danh mục chọn sẵn một loại là thùng phế liệu CGO-101 với mọi thùng kho làm được, người chơi chỉ bấm Mở giao thương. Lịch có 2 tàu TA01 kiên nhẫn Dài, không có đơn đặt trước. Tàu 1 tới đầu giờ giao thương, không bật bơm khí. Tàu 2 cập khi tay người chơi trống sau lần giao đầu và bật yêu cầu bơm khí ngay. Kho làm được 1 thùng phế liệu thì chỉ có tàu 1. Giờ giao thương này ngắn hơn mục tiêu thời lượng giờ giao thương, chủ ý. Kho không có phế liệu thì nút Mở bán xám kèm gợi ý mang phế liệu về, Nghỉ giao thương vẫn được. Giờ giao thương này tính Tally, tip và điểm cảng như mọi giờ giao thương. Giờ giao thương thứ hai là giờ giao thương đầu tiên người chơi tự lập danh mục, từ giờ giao thương thứ hai lịch sinh theo luật 68 tới 70. `MVP`
68. Cấu hình lịch (số tàu, giãn cách, chờ ngoài) lấy theo chương, số cửa neo Hoạt động và N, ở bảng "Cấu hình lịch" mục 3. Số tàu tăng theo N, giãn cách co lại để tàu vẫn tới trong cửa sổ đến (C8). Số cửa neo không đổi theo N. `MVP` cho chương 1
69. Chọn loại tàu cho từng chỗ trong lịch: chỗ đầu dành cho tàu có điều kiện truyện đang chờ, tối đa 2 chỗ mỗi giờ giao thương, theo thứ tự mốc truyện. Chỗ của đơn đặt trước gắn đúng loại tàu đã đặt (luật 71). Chỗ còn lại rút từ túi trộn: mỗi loại tàu đã mở (theo chương, Hạng cảng, mốc truyện, không gồm TA08 và TA11) góp số thẻ bằng trọng số ở bảng 2.4, rút không hoàn lại, hết túi thì trộn lại túi mới. Món mỗi tàu gọi không chọn lúc sinh lịch mà lúc tàu tới, theo danh mục còn lại (luật 24). Tàu có điều kiện truyện (TA03 cho mốc C2.3, TA06 cho mốc C3.2, TA08 hai lần cập bến, TA11 cho mốc C4.7 và C5.2) có trong lịch mỗi ngày tới khi điều kiện truyện đó xong. `MVP`
70. Giờ đến: tàu đầu tới ở giây thứ 2 của giờ giao thương. Mọi tàu tới trong cửa sổ đến 225 giây đầu giờ giao thương: giãn cách trung bình bằng 225 chia số tàu, mỗi khoảng lệch ngẫu nhiên tới 22% (25 tàu là 7 tới 11 giây). Giờ giao thương kéo tới 300 giây để tàu cập cuối cửa sổ còn đủ kiên nhẫn được phục vụ. Hai tàu cùng giờ đến xếp theo thứ tự trong lịch. `MVP`
71. Đơn đặt trước: lịch của ngày có đơn đặt trước, hiện ở bảng tàu từ pha chuẩn bị: tàu nào, tàu thứ mấy trong lịch, loại hàng, giá thùng nhân 1,5. Chương 1 có 1 đơn mỗi ngày, ở tàu thứ 9 của lịch, là TA01. Loại hàng chương 1 là thùng đồ Trái Đất CGO-109. Từ ngày có Súng lưới, ngày chẵn đặt 1 lồng sống CGO-121 thay cho đồ Trái Đất. Từ chương 2 có 1 đơn mỗi ngày, từ Hạng cảng 8 có 2 đơn mỗi ngày (bảng 2.5), loại hàng rút từ hàng tàu đó hay gọi đã mở, ưu tiên hàng phải ra ngoài mới có. `MVP`
72. Lúc Mở giao thương, danh mục có loại hàng đặt thì 1 thùng được giữ riêng cho đơn đó. Tàu đặt tới thì gọi đúng thùng đó. Danh mục không có loại hàng đặt thì tàu đó gọi món khác như tàu thường, đơn đặt trước không đạt, không có phạt ngoài mất phần giá cao. Tàu đặt rời chưa giao thì đơn không đạt, thùng giữ riêng về kho. `MVP`
73. Đơn đặt trước đạt thì ghi vào bảng tổng kết giao thương và vào số lần phục vụ xong của thương nhân có tên (mục 6, Lưu). Phần lợi của đơn chỉ là giá nhân 1,5 và tip tính trên giá đó. `MVP`

### Trạng thái và chuyển tiếp

Khoang và chỗ trong cảng:
| Trạng thái | Vào khi | Ra khi | Hành vi | Người chơi thấy gì |
|---|---|---|---|---|
| Hỏng | Bắt đầu game | Sửa xong | Không có chức năng, đi qua được | Khoang tối, mảnh vỡ, khung đỏ khi đứng gần kèm danh sách vật liệu |
| Hoạt động | Sửa xong, xử lý xong sự cố, hết giờ giao thương | Bắt đầu nâng cấp, có sự cố | Đủ chức năng theo cấp | Khoang sáng, người vớt đứng làm việc |
| Đang nâng cấp | Giữ phím nâng cấp lần đầu | Nâng cấp xong | Vẫn đủ chức năng cấp hiện tại | Giàn giáo, thanh tiến độ |
| Đang sự cố | Sự cố xảy ra trong giờ giao thương ở cửa neo, ô quầy hoặc khoang sinh quyển | Xử lý xong hoặc hết giờ giao thương | Theo bảng 2.8 | Đèn đỏ nháy, biểu tượng sự cố trên mặt cắt |

Tàu:
| Trạng thái | Vào khi | Ra khi | Hành vi | Người chơi thấy gì |
|---|---|---|---|---|
| Trong lịch | Lịch sinh ra đầu ngày | Tới giờ đến | Chưa có trong giờ giao thương | Loại tàu trên bảng tàu |
| Không tới | Tới giờ đến mà danh mục không còn thùng tàu đó gọi được | Ngay | Không giữ thùng | Không thấy tàu. Bảng tổng kết giao thương đếm vào tàu không tới |
| Chờ ngoài | Tới giờ đến, đã giữ 1 thùng, mọi cửa neo bận | Có cửa neo trống (sang Cập), hết đồng hồ chờ ngoài (sang Bỏ đi) | Đồng hồ chờ ngoài chạy, kiên nhẫn chưa chạy | Tàu nhỏ xếp hàng ở mép màn hình, vòng đồng hồ |
| Cập | Có cửa neo trống | Sau 1 giây (sang Ở cửa neo) | Chưa nhận thùng | Tàu trượt vào cửa neo |
| Ở cửa neo | Cập xong | Giao đúng (sang Rời xong), hết kiên nhẫn hoặc hết giờ giao thương (sang Rời chưa giao) | Kiên nhẫn giảm, thùng ra quầy sau 3 giây, bật yêu cầu bơm khí theo luật 28 | Bong bóng món gọi, thanh kiên nhẫn, nút bơm khí khi có yêu cầu |
| Rời xong | Giao đúng | Tàu khuất (khoảng 1,3 giây) | Không nhận gì | Thương nhân vẫy, giá và tip bay lên |
| Rời chưa giao | Hết kiên nhẫn hoặc hết giờ giao thương | Tàu khuất | Không nhận gì, thùng về danh mục | Thương nhân lắc đầu, bong bóng tắt |
| Bỏ đi | Hết đồng hồ chờ ngoài | Tàu khuất | Không cập, thùng về danh mục | Tàu quay đầu ở mép màn hình |

Thùng: Trong danh mục -> Giữ cho tàu (lúc tàu tới) -> Ở quầy (3 giây sau khi tàu cập) -> Trên tay -> Đã giao. Tàu rời chưa giao hoặc bỏ đi thì thùng từ Giữ cho tàu, Ở quầy hay Trên tay về Trong danh mục. Hết giờ giao thương thì thùng Trong danh mục về kho. Không có thùng nằm trên sàn.

### Thứ tự xử lý khi giao thùng

1. Người chơi đang mang thùng, đứng ở một cửa neo, nhấn tương tác.
2. Cửa neo không có tàu ở trạng thái Ở cửa neo thì không nhận, thùng ở lại tay.
3. Thùng không phải thùng tàu ở cửa neo này đang chờ thì tàu từ chối, thùng ở lại tay, hiện lời từ chối ngắn. Kiên nhẫn không bị trừ thêm.
4. Nhận thùng: lấy phần kiên nhẫn còn lại lúc nhấn, tính giá thùng (nhân 1,5 nếu là đơn đặt trước), tính tip theo luật 31, cộng Tally, cộng điểm cảng theo luật 40, ghi đơn đặt trước đạt nếu có.
5. Tàu sang Rời xong, bong bóng và thanh kiên nhẫn tắt, cửa neo trống khi tàu khuất.
6. Tàu đã sang Rời chưa giao đúng lúc nhấn thì không nhận, thùng đã về danh mục và biến khỏi tay.
7. Co-op: hai người nhặt cùng một thùng hoặc bơm cùng một cửa neo cùng khung hình thì yêu cầu tới máy chủ trước được nhận, người sau không có gì đổi. Mỗi tàu chỉ có 1 thùng nên không có hai thùng giao cho cùng một tàu.

### 2.4 Bảng loại tàu

Kiên nhẫn Dài là 60 giây, Vừa 45 giây, Ngắn 30 giây (mục 3). Hệ số tip nhân vào tip của mọi thùng (luật 31). Hàng hay gọi là hệ số nhân với độ gọi của bậc giá ở luật 24, áp cho mọi ID kiện trong nhóm, loại hàng không ghi có hệ số 1. "Chỉ gọi" nghĩa là tàu chỉ chọn trong các nhóm đó và không tới khi danh mục không còn nhóm nào trong đó. Món mê là hàng giao cho tàu đó được tip gấp đôi. Trọng số cuối bảng dùng cho túi trộn ở luật 69. Tàu chỉ vào túi khi đã mở theo cột Mở. Cột khớp `ShipTypeData` ở `ky-thuat.md` mục 2.1 (kienNhan, tipHeSo, thichHang, mePhan, luatRieng, trongSo).
| ID | Kiên nhẫn | Hệ số tip | Hàng hay gọi (trọng số) | Món mê | Luật riêng | Trọng số | Mở | Nhãn |
|---|---|---|---|---|---|---|---|---|
| TA01 | Dài | 1 | Mọi hàng. Đồ Trái Đất HC10 hệ số 6 (trọng số cuối 6, gấp đôi mỗi loại hàng chợ là 3). Phế liệu hệ số 1 để giữ chất mê đồ Trái Đất | Đồ Trái Đất CGO-109 | Chủ đơn đặt trước của chương 1 (luật 71). Tikko mê đồ Trái Đất | 3 | Chương 1 | MVP |
| TA02 | Ngắn | 2 | Chỉ gọi băng HC03 và khoáng HC02 | Không | Danh mục không còn băng hay khoáng thì không tới (luật 24) | 1 | Chương 1, Hạng 2 | MVP |
| TA03 | Vừa | 1 | Băng HC03 3, sản phẩm nuôi HC07 3, vật tư HC08 3 | Không | Từ Hạng 4: giao xong khi còn từ 2/3 kiên nhẫn thì tàu gọi thêm 1 thùng thứ hai trong nhóm nó thích, giá gấp rưỡi, kiên nhẫn không hồi. Tàu truyện cho mốc C2.3: có trong lịch mỗi ngày tới khi một giờ giao thương phục vụ xong TA03 | 2 | Sau mốc C2.2 | Sau MVP |
| TA04 | Dài | 1 | Linh kiện HC04 3, kiện tinh dải Giữa HC12 3 | Không | 15 giây đầu là nghi lễ chào: thùng ra quầy sau 15 giây thay vì 3, kiên nhẫn chưa giảm trong 15 giây đó, cửa neo vẫn bị chiếm | 2 | Mốc C2.7. Sau mốc C3.8 ra khỏi túi trộn, không ghé nữa (Sevra ở ẩn trên Ember) | Sau MVP |
| TA05 | Vừa | 1 | Chỉ gọi lồng sống HC06 và đặc sản HC11 | Lồng sống HC06 | Danh mục không còn hai nhóm đó thì không tới. Chê hàng mẫu đã hạ qua lời thoại | 2 | Mốc C2.4 | Sau MVP |
| TA06 | Vừa | 1 | Khoáng HC02 3, kiện tinh HC12 3, HC13 3 | Không | Gọi bằng gợi ý (ví dụ "thứ lạnh") thay vì tên hàng. Thùng không tự ra quầy: người chơi chọn loại hàng ở ô quầy theo gợi ý. Chọn sai thì tàu từ chối, thùng sai về danh mục, chọn lại được. Bảng tàu ghi rõ TA06 gọi bằng gợi ý | 2, từ chương 4 là 3 | Mốc C3.1 | Sau MVP |
| TA07 | Dài | 1 | Lồng sống HC06 2, vật tư HC08 2, đặc sản HC11 2, linh kiện đặc biệt HC14 2 | Không | Không bật yêu cầu bơm khí (tàu tự cấp khí). Hỏi về vị trí xác trạm qua lời thoại | 2 | Mốc C3.5 | Sau MVP |
| TA08 | Dài | 1 | Lần 1 mọi hàng đã mở trừ HC15. Lần 2 đặt trước 1 bản sao HC09 | Không | Luật 38. Không vào túi trộn | Không | Mốc C3.3 | Sau MVP |
| TA09 | Ngắn | 0 | Chỉ gọi kiện tinh và linh kiện đặc biệt HC04, HC12, HC13, HC14 | Không | Không có tip, giá thùng gấp rưỡi. Danh mục không còn các nhóm đó thì không tới | 1, từ chương 4 là 2 | Hạng 6 | Sau MVP |
| TA10 | Vừa | 1 | Bản sao HC09 3, kiện tinh HC12 2, HC13 2 | Không | Mỗi giờ giao thương mua tối đa 1 bản sao. Giao xong kể một tin trên The Lattice, gợi manh mối hành lang an toàn | 1 | Mốc C3.1 | Sau MVP |
| TA11 | Dài | 1 | Kiện tin mật HC15 như đơn đặt trước tự sinh mỗi ngày. Danh mục không có kiện tin mật thì gọi kiện tinh dải Xa HC13 như tàu thường | Không | Tàu có điều kiện truyện, không vào túi trộn. Có trong lịch mỗi ngày từ ngày kế tiếp sau mốc C3.8 tới khi mốc C5.2 xong, và luôn có trong lịch ngày đầu chương 4 và ngày đầu chương 5. Giao kiện tin mật là một đơn tin mật tới nơi. Mốc C4.7 cần ít nhất 1 đơn, mốc C5.2 cần tổng 2 đơn cộng dồn từ chương 4 (`cot-truyen.md`). Kiện tin mật không sinh thêm Tally so với kiện vỏ bọc (log 87) | Không | Ngày kế tiếp sau C3.8 | Sau MVP |

### 2.5 Bảng Hạng cảng

| Hạng | Trần ở chương | Mở | Nhãn |
|---|---|---|---|
| 1 | 1 | TA01, bến 1 với 3 cửa neo, danh mục 4 loại, shop danh mục cơ bản | MVP |
| 2 | 1 | TA02 | MVP |
| 3 | 1 | Danh mục bán được kiện mẫu HC05 và đặc sản CGO-106. Mục shop ENG-101 | MVP |
| 4 | 2 | Danh mục 5 loại, TA03 gọi thùng thứ hai, mục shop bản thiết kế dải Giữa, mục shop Cảng cấp 2 KH07-C2 (cửa neo thứ 4 của bến 1) | Sau MVP |
| 5 | 2 | Danh mục bán được sản phẩm nuôi HC07, mục shop ENG-102 | Sau MVP |
| 6 | 3 | TA09, danh mục 6 loại, mục shop tiện ích cảng | Sau MVP |
| 7 | 3 | TA06 và TA10 gọi được kiện tinh dải Xa HC13, mục shop ENG-103 | Sau MVP |
| 8 | 4 | Mục shop ENG-104, đơn đặt trước tới 2 mỗi ngày ở mọi chương sau | Sau MVP |

Trần ở chương nghĩa là hạng đó đạt được sớm nhất ở chương ghi trong cột. Chương 5 không mở hạng mới, đúng mạch truyện thương nhân thưa dần.

### 2.6 Thứ tự mở khoang theo chương

| Chương | Khoang sửa được | Người vớt | Giai đoạn động cơ | Nhãn |
|---|---|---|---|---|
| 1 | Khoang neo, kho cấp 2, xưởng, khoang liên lạc, cảng bến 1 (3 cửa neo, quầy cảng) | Kỹ sư, Thông dịch viên | 1 | MVP |
| 2 | Khoang dẫn đường, bến Skiff, phòng nghiên cứu, khoang sinh quyển cấp 1 và 2, xưởng cấp 2, Cảng cấp 2 (cửa neo thứ 4 của bến 1) | Hoa tiêu, Nhà sinh học | 2 | Sau MVP |
| 3 | Bến 2, tiện ích cảng, khoang sinh quyển cấp 3 (môi trường dải Xa) | Trưởng cảng | 3 | Sau MVP |
| 4 | Bến 3, quầy phụ, cấp 3 các khoang còn lại | Không | 4 | Sau MVP |
| 5 | Không có khoang mới | Không | 5 | Sau MVP |

### 2.6b Sơ đồ mặt cắt

Mặt cắt ngang 3 tầng, đọc từ trái sang phải. Hai thang dọc ở cột trái và cột giữa nối các tầng. Bến nằm ở mép phải để tàu cập từ ngoài màn hình.

| Tầng | Cột 1 | Cột 2 | Cột 3 | Cột 4 | Mép phải |
|---|---|---|---|---|---|
| Trên | Khoang dẫn đường | Khoang liên lạc | Phòng nghiên cứu | Khoang sinh quyển | Bến 2 (2 cửa neo, ước) |
| Giữa | Buồng ngủ đông và khu hồi sức | Xưởng | Kho | Quầy cảng (3 ô, mỗi ô một màu cửa neo) | Bến 1: cửa neo 1, 2, 3 nằm ngang nối tiếp |
| Dưới | Cửa khí | Khoang neo | Động cơ chính | Bến Skiff | Bến 3 (2 cửa neo, ước) |

- Ý đồ: quầy cảng nằm ngay trái cửa neo 1, ba cửa neo nối tiếp về bên phải trên cùng một sàn. Demo đo đường chạy từ quầy tới cửa neo 1, 2, 3 khoảng 1,1, 1,7, 2,3 giây. Cửa neo xa hơn thì đường dài hơn, đó là lý do người chơi chọn tàu nào phục vụ trước. Kho cạnh quầy chỉ là hình, trong giờ giao thương không có việc ở kho. Bến 2 và bến 3 khác tầng, cần thang, là nguồn khó mới ở chương 3 và 4, quầy phụ (tiện ích Trưởng cảng) gỡ bớt. Kích thước ô và tỉ lệ do gd-world và art quyết.

### 2.6c Vật liệu sửa khoang theo nhóm

Số lượng do gd-economy đặt, bảng ID đầy đủ ở `vat-pham.md` mục 2.7. Khoang neo và xưởng chỉ dùng tài nguyên thô vì chưa có xưởng thì chưa chế được COM. Khoang của chương nào dùng tài nguyên của dải mở ở chương đó, để mỗi dải mới có chỗ tiêu nhìn thấy trên trạm (P2).
| Khoang | Nhóm vật liệu | Có phần mua ở shop | Nhãn |
|---|---|---|---|
| Khoang neo | Phế liệu dải Gần, linh kiện | Không | MVP |
| Kho cấp 2 | Phế liệu dải Gần, khoáng dải Gần | Không | MVP |
| Xưởng | Phế liệu, khoáng, linh kiện dải Gần | Không | MVP |
| Khoang liên lạc | Linh kiện, khoáng dải Gần | Không | MVP |
| Cảng bến 1, quầy cảng | Phế liệu, linh kiện dải Gần | Không | MVP |
| Khoang dẫn đường, bến Skiff | Linh kiện, khoáng dải Giữa, mảnh lõi dẫn đường, hạch hoặc mẫu boss BS-1 (SMP-191, SMP-192) | Không | Sau MVP |
| Phòng nghiên cứu, khoang sinh quyển | Băng, khoáng dải Giữa, mẫu Driftlife | Không | Sau MVP |
| Bến 2, bến 3, tiện ích cảng | Phế liệu, khoáng dải Xa, linh kiện | Bản thiết kế tiện ích | Sau MVP |
| Động cơ chính giai đoạn 1 đến 5 | Tài nguyên dải mới của chương, giai đoạn 1 thêm 1 hạch hoặc 1 mẫu boss BS-1 (SMP-191 hoặc SMP-192), linh kiện Warden ở giai đoạn 4 và 5 | ENG-101 tới ENG-104 ở giai đoạn 1 tới 4. ENG-105 chế, không mua | MVP giai đoạn 1 |

### 2.7 Người vớt và tính năng lớn dần

| Người vớt | Khoang | Tính năng khi mở | Lớn dần theo cấp khoang và chương | Nhãn |
|---|---|---|---|---|
| Kỹ sư | Xưởng | Chế dụng cụ cơ bản, chế trước khối nước tinh khiết COM-105 cho CGO-113, nâng cấp bộ đồ bậc 1 | Cấp 2 (chương 2): chế 2 mẻ song song, bậc 2. Cấp 3: bậc cao nhất, chế HC08 | MVP cấp 1 |
| Thông dịch viên | Khoang liên lạc, cảng | Bảng tàu, lập danh mục, đóng thùng tự động lúc Mở giao thương, giờ giao thương, shop | Chương 2: gọi xuồng Lantern, mở TA04, TA05. Chương 3: hiểu ngôn ngữ Veyl Waypost, mở TA06, TA07, TA10, dịch lời tàu lạ. Chương 4: liên lạc với The Kindling, nhận Gói tin mật STY-701 mỗi ngày | MVP chương 1 |
| Hoa tiêu | Khoang dẫn đường, bến Skiff | Mở dải Xa (dải Giữa đã mở khi xong chương 1), Skiff tới map nhánh đã tìm ra | Mỗi lõi dẫn đường đọc được mở một map nhánh hoặc một dải | Sau MVP |
| Nhà sinh học (Amara Okafor) | Phòng nghiên cứu, khoang sinh quyển | Tới bằng xuồng TA03 sau giờ giao thương đầu tiên phục vụ xong TA03 (C2.3). Nghiên cứu mẫu, nuôi Driftlife | Cấp 2: thêm ô, cấp 3: môi trường dải Xa. Mốc chương 3: cú lật Driftlife | Sau MVP |
| Trưởng cảng (Yusuf Demir) | Bến 2, bến 3, tiện ích cảng | Về bằng Skiff sau giờ giao thương đầu tiên có TA06 cập bến (C3.2). Bến 2 | Tiện ích: quầy phụ 3 ô cạnh bến 2 và bến 3 (thùng của tàu ở bến xa ra quầy sát bến đó), bến 3 ở chương 4 | Sau MVP |

### 2.8 Bảng sự cố

| Sự cố | Ảnh hưởng | Xử lý | Bỏ mặc thì | Từ chương |
|---|---|---|---|---|
| Rò khí | Một cửa neo bị rò. Tàu ở cửa neo đó mất kiên nhẫn nhanh gấp đôi, yêu cầu bơm khí ở đó không bật | Giữ phím vá ở điểm rò cạnh cửa neo, tiêu 1 Keo vá CON-104. Kho hết Keo vá thì vẫn vá được nhưng thời gian xử lý gấp 3 | Cửa neo rò tới hết giờ giao thương | 3 |
| Chập điện | Một ô quầy cảng tắt: thùng của cửa neo cùng màu không ra quầy. Thùng đang nằm ở ô đó vẫn nhặt được | Giữ phím ở tủ điện của quầy, tiêu 1 Cầu chì dự phòng CON-105. Kho hết Cầu chì thì thời gian xử lý gấp 3 | Tàu ở cửa neo đó không có thùng tới hết giờ giao thương, chỉ rời chưa giao | 3 |
| Driftlife sổng | Một loài đang nuôi chạy ra khu cảng (loài bầy sổng thành 3 con). Mỗi chu kỳ ôm 1 thùng trên quầy. Thùng bị ôm không mất (luật 46) | Tóm bằng tay theo kiểu loài ở `combat-driftlife.md` mục "Driftlife trong trạm", không dùng dụng cụ. Tóm xong con vật tự về ô nuôi, thùng về ô quầy | Giữ thùng tới hết giờ giao thương, hết giờ giao thương tự về khoang, thùng về kho. Không chết, không mất con, không mất hàng | 3, khi có nuôi |

### 2.9 Bảng tàu ở pha chuẩn bị

Bảng tàu ở khoang liên lạc, mở được từ pha chuẩn bị tới khi mở giao thương. Lập danh mục làm ngay trên bảng này. Người chơi thấy:
| Mục | Hiện | Nhãn |
|---|---|---|
| Tàu hôm nay | Số tàu dự kiến theo số người đang online, loại tàu ghé và số lượng mỗi loại, chân dung thương nhân | MVP |
| Từng loại tàu | Kiên nhẫn (Dài, Vừa, Ngắn), hàng hay gọi, luật riêng một dòng | MVP |
| Đơn đặt trước | Tàu, thứ tự trong lịch, loại hàng, giá thùng nhân 1,5, dấu có hoặc thiếu trong kho | MVP |
| Kho theo thùng | Số thùng làm được của mỗi loại hàng đã mở, giá thùng. Hàng cần chế ghi số mẻ còn trong xưởng | MVP |
| Danh mục | Loại hàng đã chọn trên trần M, số thùng mỗi loại, tổng thùng so với số tàu dự kiến, cảnh báo thiếu hàng | MVP |
| Ghim | Ghim loại hàng của đơn đặt trước hoặc loại hàng còn thiếu, hiện trên HUD khi ra chuyến | MVP |
| Gợi ý của TA06 | Ghi rõ "gọi bằng gợi ý" | Sau MVP |
| Số người | Dòng ghi chú "Số tàu theo số người đang chơi" khi N từ 2 (C8) | MVP |

Buổi sáng người chơi đọc bảng tàu để biết hôm nay nên mang gì về, giống đọc danh sách trước khi đi chợ. Tối lập danh mục từ thứ đã mang về.

## 3. Tham số

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nhóm tác động | Nguồn |
|---|---|---|---|---|---|---|
| Thời gian giữ phím sửa khoang | 5 giây | 3 đến 8 | Sửa thấy công sức hơn | Sửa nhanh, ít cảm giác | Trạm | ước |
| Thùng so với kiện | 0,4 kiện (giá kiện chia 2,5, số trong kho nhân 2,5) | 0,25 đến 0,5 | Ít tàu hơn, rảnh hơn | Nhiều tàu hơn, giờ giao thương vội | Cảng, kinh tế | demo bot 2026-11-20: 10 tàu mỗi tàu 1 kiện thì rảnh 76% |
| Số loại tối đa trong danh mục M | 4 ở Hạng 1 tới 3 (chương 1), 5 từ Hạng 4, 6 từ Hạng 6 | 3 đến 7 | Lập danh mục dễ, ít thế cân | Phải bỏ bớt hàng | Cảng | Chương 1 theo `de-xuat-ca-cang-kieu-dave.md` mục 4. Hạng 4 và 6 ước |
| Cửa neo ở bến 1 | 3 ở mọi số người. Cửa neo thứ 4 qua nâng cấp Cảng cấp 2 KH07-C2 từ Hạng 4 | 2 đến 4 | Ít tàu chờ ngoài, nhiều việc song song | Tàu chờ ngoài nhiều | Cảng | Lead chốt 3 (DECISIONS đợt 9). GDM chốt 3 cho mọi số người sau sim GD-054 vòng 2 mục 4 |
| Cửa neo ở bến 2, bến 3 | 2 mỗi bến | 1 đến 3 | Giờ giao thương rộng hơn | Bến xa ít tác dụng | Cảng | ước, chờ sim |
| Số tàu một giờ giao thương, chương 1 | 25, 55, 55, 60 cho 1, 2, 3, 4 người | 1 người 20 đến 35, 2 người 35 đến 65 | Bận hơn, Tally theo hàng | Rảnh hơn | Cảng | sim GD-054 vòng 2 mục 4, mục 3 cho dải đạt |
| Cửa sổ đến và giãn cách | Mọi tàu tới trong 225 giây đầu giờ giao thương. Giãn cách trung bình 225 chia số tàu, lệch tới 22% (25 tàu là 7 tới 11 giây) | 200 đến 240 giây | Giờ giao thương thưa, rảnh | Tàu dồn, chờ ngoài nhiều | Cảng | sim GD-054, khớp demo |
| Giờ đến của tàu đầu | Giây thứ 2 của giờ giao thương | 0 đến 5 | | | Cảng | demo |
| Chờ ngoài tối đa | 20 giây | 10 đến 30 | Ít tàu bỏ đi | Phải phục vụ nhanh để giải phóng cửa neo | Cảng | demo bot 2026-11-20 |
| Kiên nhẫn Dài, Vừa, Ngắn | 60, 45, 30 giây | 20 đến 90 | Giờ giao thương dễ, tip cao | Giờ giao thương căng, nhiều tàu rời | Cảng | Dài và Ngắn demo bot 2026-11-20. Vừa ước |
| Thùng ra quầy sau khi tàu cập | 3 giây | 1 đến 5 | Có khoảng trống để bơm khí | Giờ giao thương dồn dập | Cảng | demo bot 2026-11-20 |
| Tip tối đa | 25% giá thùng nhân phần kiên nhẫn còn lại | 15% đến 35% | Tốc độ đáng tiền hơn | Tốc độ ít ý nghĩa | Kinh tế | GDM hạ đợt 9 vì tip kể cả bơm khí vượt 30% ở 3, 4 người. Sau khi hạ: tip 26 tới 29% Tally ở trễ 2 giây (sim GD-054 vòng 2 mục 4) |
| Độ gọi theo bậc giá | Hàng chợ 3, Hàng sinh học 2, Hàng chế 1,5, Hàng sống 1, Hàng hiếm 1. Nhân với hệ số hàng hay gọi ở bảng 2.4 | | Hàng đó bán nhanh hơn | Hàng đó ít được gọi | Cảng, kinh tế | gd-economy GD-055 mục 3.1 |
| Hệ số tip | TA02 gấp 2. TA01 với đồ Trái Đất gấp 2. TA05 với lồng sống gấp 2. TA09 bằng 0 | 0 đến 2 | | | Kinh tế | TA01, TA02 demo bot. TA05, TA09 ước |
| Bơm khí | Lúc cập 50% tàu bật yêu cầu ngay, tàu chưa giao bật lại sau 10 tới 18 giây. Giữ 1 giây, hồi 25% kiên nhẫn tối đa, cộng 10 Tally | Tỉ lệ lúc cập 30% đến 70% | Bơm khí chiếm nhiều Tally hơn | Bơm khí hiếm gặp | Cảng, kinh tế | Giữ, hồi, Tally theo demo bot. Bật lúc cập 50% ước (sim GD-054 bảng 6: bật sau 10 tới 18 giây thì 0% Tally ở mọi số người) |
| Đơn đặt trước | Chương 1: 1 mỗi ngày, tàu thứ 9, giá thùng nhân 1,5. Từ chương 2: 1 mỗi ngày. Từ Hạng cảng 8: 2 mỗi ngày | Nhân 1,25 đến 2 | Đáng đổi dải theo đơn | Bỏ qua đơn | Cảng, kinh tế | Chương 1 demo bot. Từ chương 2 ước |
| Điểm cảng | 1 mỗi tàu phục vụ xong, thêm 1 khi còn từ 2/3 kiên nhẫn | | Lên hạng nhanh | Lên hạng chậm | Hạng cảng | demo bot 2026-11-20 |
| Ngưỡng điểm Hạng cảng 2 tới 8 | 70, 135, 285, 400, 560, 680, 910 | | Chậm mở nội dung | Nhanh mở nội dung | Hạng cảng | gd-economy GD-055 mục 3.5 |
| Thời lượng giờ giao thương tối đa | 300 giây | 240 đến 300 | Người chậm phục vụ hết tàu đã cập | Tàu bị đuổi vì hết giờ | Cảng, một ngày | Khung mục 9 cho 3 tới 5 phút. Sim GD-054 bảng 4: ở 240 giây, người trễ 3 giây chạm trần 54% số giờ giao thương ở 1 người, 100% từ 2 người. Giờ giao thương của người trễ 2 giây vẫn dài 231 tới 239 giây vì cửa sổ đến 225 giây không đổi. 300 là ước, gd-tech đo lại |
| Cấu hình lịch | Bảng "Cấu hình lịch" ngay dưới | | | | Cảng | sim GD-054 |
| Tally một giờ giao thương | Khoảng 60% giá trị hai chuyến đầy túi của chương. Tip khoảng 20 tới 30% Tally một giờ giao thương | 40% đến 80% | Thiếu hàng để sửa trạm | Cảng yếu | Cảng, kinh tế | gd-economy mục 8.4, khung mục 9. Sim GD-054 vòng 2, trễ 2 giây: Tally 1654, 3602, 3760, 3996 cho 1 tới 4 người, tip kể cả bơm khí 26 tới 29% |
| Tốc độ chạy khi mang thùng | Bằng tốc độ thường | | | | Cảng | demo |
| Hàng đợi chế của xưởng, cấp 1 | 2 chỗ, tính cả mẻ đang chạy | 1 đến 4 | Chế qua đêm nhiều, danh mục rộng | Ít hàng chế | Xưởng | ước, gd-items đề xuất |
| Thời gian chế ở xưởng một mẻ | Theo công thức, tab Recipe (Lọc băng 12 giây) | 8 đến 20 | Chế trước tốn thời gian hơn | Chế dễ | Xưởng | `vat-pham.md` khối RECIPE, log GDM 106 |
| Số sự cố mỗi giờ giao thương, chương 3, chương 4 và 5 | 1, 1 đến 2 | 0 đến 3 | Giờ giao thương hỗn loạn | Giờ giao thương như chương 1 | Cảng | ước |
| Chu kỳ ôm thùng của Driftlife sổng | 20 giây | 10 đến 40 | Bỏ mặc được | Phải xử ngay | Cảng | ước |
| Thời gian xử lý sự cố | 4 giây | 2 đến 8 | Sự cố tốn người | Sự cố vô hại | Cảng | ước |
| Ô nuôi cấp 1, 2, 3 | 4, 6, 9 | 4 đến 12 | Nhiều sản phẩm nuôi | Ít | Nuôi | gốc Dave [D8] cho 4 và 9 |
| Ngày con non trưởng thành | 2 | 1 đến 4 | Đàn lớn chậm | Đàn lớn nhanh | Nuôi | ước, Dave ấp 1 ngày [D15] |
| Sản phẩm mỗi con mỗi ngày | 1 | 1 đến 2 | Nuôi lấn giờ giao thương | Nuôi vô nghĩa | Nuôi, kinh tế | ước |

- Cấu hình lịch theo luật 68 (trễ phản xạ 2 giây, danh mục đủ hàng):
| Chương | Số người N | Cửa neo | Số tàu | Giãn cách trung bình | Kết quả sim | Nguồn | Nhãn |
|---|---|---|---|---|---|---|---|
| 1 | 1 | 3 | 25 | 9 giây | 99% tàu xong, rảnh 14%, giờ giao thương 230 giây, tip 26% | sim GD-054 vòng 2 mục 4 | MVP |
| 1 | 2 | 3 | 55 | 4,1 giây | 99% tàu xong, rảnh 6%, giờ giao thương 251 giây, tip 26% | sim GD-054 vòng 2 mục 4 | MVP |
| 1 | 3 | 3 | 55 | 4,1 giây | 99% tàu xong, rảnh 19%, giờ giao thương 241 giây, tip 29% | sim GD-054 vòng 2 mục 4 | Sau MVP |
| 1 | 4 | 3 | 60 | 3,8 giây | 97% tàu xong, rảnh 27%, giờ giao thương 252 giây, tip 29% | sim GD-054 vòng 2 mục 4 | Sau MVP |
| 2 tới 5 | 1 tới 4 | Theo bến đã sửa | Chưa đo | Chưa đo | | Chờ sim | Sau MVP |

Núm co-op (C8):
- Số tàu tăng theo N, cửa sổ đến giữ 225 giây nên giãn cách co lại. Kiên nhẫn, chờ ngoài không đổi theo N.
- Mục tiêu: rảnh mỗi người không quá 30% ở trễ phản xạ 2 giây, tàu phục vụ xong 85 tới 100% ở chương 1 (khung mục 9). Sim GD-054 vòng 2: có bơm khí lúc cập thì 3 cửa neo đạt ở mọi số người. Ở 240 giây trần, giờ giao thương 2 tới 4 người dài 241 tới 252 giây, nên trần 300 giây là cần. Trễ 3 giây: tàu xong 85 tới 95%, 0% giờ giao thương chạm trần 300.
- N lấy lúc Mở giao thương. Người vào giữa giờ giao thương không đổi lịch giờ giao thương đó.

## 4. Trường hợp biên

| Ca | Phán quyết |
|---|---|
| Danh mục rỗng | Nút Mở bán xám. Nghỉ giao thương vẫn được |
| Kho không có hàng nào bán được | Danh mục rỗng, như trên. Bảng tàu gợi ý ra ngoài mang hàng về. Nghỉ giao thương không phạt |
| Tổng thùng ít hơn số tàu | Mở giao thương được, bảng tàu cảnh báo. Hết danh mục thì tàu còn lại không tới, giờ giao thương kết thúc sớm (luật 34) |
| Danh mục có hàng loại tàu hôm nay không thích | Vẫn được gọi với trọng số 1 |
| Danh mục chỉ còn thùng giữ cho đơn đặt trước | Tàu khác tới thì không tới. Thùng vẫn giữ cho tàu đặt |
| Giao vào sai cửa neo | Tàu từ chối, thùng ở lại tay, kiên nhẫn không bị trừ thêm |
| Nhặt thùng khi tay đang mang thùng khác | Không nhặt, hiện "Mỗi lần mang 1 thùng" |
| Muốn bơm khí khi tay đang mang thùng | Không bơm được. Tương tác ở cửa neo là giao. Giao thùng xong mới bơm |
| Tàu rời chưa giao khi người chơi đang mang thùng của nó | Thùng biến khỏi tay, về danh mục, hiện "Tàu đã rời, thùng về kho" |
| Tàu rời đúng lúc người chơi nhấn giao | Tàu đã sang Rời chưa giao thì không nhận (thứ tự xử lý bước 6) |
| Hai người nhặt cùng một thùng | Yêu cầu tới máy chủ trước được nhận, người sau tay vẫn trống |
| Spam phím giao khi tay trống và cửa neo không có yêu cầu bơm khí | Không có hành động, không phạt |
| Nghỉ giao thương | Tàu hôm đó không tới, kho giữ nguyên vì chưa đóng thùng, không đổi Hạng cảng |
| Hết giờ giao thương (300 giây) khi tàu đang ở cửa neo | Tàu rời ngay, áp luật 32. Hiếm vì tàu cuối tới trước giây 225 |
| Mọi tàu rời chưa giao | Giờ giao thương vẫn kết thúc bình thường, bảng tổng kết giao thương không có chữ thất bại, chỉ ghi số |
| Đơn đặt trước mà kho không có loại hàng đặt | Bảng tàu đánh dấu thiếu. Tàu đặt gọi món khác, đơn không đạt, không phạt |
| Hai đơn đặt trước cùng loại hàng | Giữ 2 thùng nếu đủ. Thiếu thì đơn của tàu tới trước được giữ |
| Hàng cần chế còn trong xưởng lúc Mở giao thương | Mẻ chạy tiếp, xong thì vào kho, không vào danh mục giờ giao thương này (luật 53) |
| Kho giảm sau khi lập danh mục nháp (đem đi sửa khoang) | Số thùng của loại đó tự hạ về số kho làm được, về 0 thì loại đó rời danh mục (luật 56) |
| Người chơi rời phiên giữa giờ giao thương | Nhân vật ở lại trạm, thùng trên tay về ô quầy của nó |
| Host rời phiên giữa giờ giao thương | Phiên kết thúc với mọi người, thế giới về điểm tự lưu gần nhất là lúc mọi người về trạm sau chuyến cuối (K23, C10, log 65, `ky-thuat.md` luật 17). Giờ giao thương đang dở không tính, kho trở về trước lúc đóng thùng |
| Người rời phiên khi đang đếm 30 giây sang ngày | Người rời không còn tính trong "mọi người online", nhóm sang ngày khi những người còn lại đã xác nhận |
| Người vào phiên khi đang đếm 30 giây sang ngày | Người mới vào tính chưa xác nhận, đồng hồ không đặt lại |
| Người vào phiên giữa giờ giao thương | Vào trạm với tay không, làm việc ngay, số tàu không đổi |
| TA06 bị chọn sai loại hàng | Tàu từ chối, thùng sai về danh mục, người chơi chọn lại ở quầy, kiên nhẫn vẫn giảm |
| TA05 hoặc TA09 mà danh mục không còn hàng nó gọi | Không tới, bảng tổng kết giao thương đếm vào tàu không tới |
| Thả phím sửa khoang giữa chừng | Tiến độ giữ, vật liệu đã trừ không hoàn |
| Sửa khoang khi kho thiếu một vật liệu | Không bắt đầu được, khung khoang liệt kê vật liệu thiếu |
| Driftlife sổng khi quầy trống | Không ôm gì, vẫn chạy trong cảng tới khi bị tóm hoặc hết giờ giao thương |
| Rò khí hoặc chập điện khi kho hết Keo vá, Cầu chì | Vẫn xử lý được, thời gian xử lý gấp 3 |
| Khoang sinh quyển đầy, cặp sinh sản đủ điều kiện | Không sinh con non, không mất gì |
| Không cho ăn nhiều ngày | Không ra sản phẩm, không sinh con non, con vật không chết |
| Chương chưa mở khoang của người vớt đã tỉnh | Không xảy ra: người vớt chỉ nằm ở map nhánh của chương mở khoang đó |
| Người chơi chưa qua mốc C3.4 | TA08 lần 2 chưa vào lịch (luật 38) |
| Nghỉ giao thương ở ngày có TA08 hoặc TA11 | Lần cập bến không tính, tàu có lại trong lịch ngày sau tới khi điều kiện truyện xong, không mất mốc |
| TA03 rời chưa giao ở chương 2 | Amara chưa tới, TA03 có lại trong lịch ngày sau tới khi có một giờ giao thương phục vụ xong TA03 |
| Nghỉ giao thương ở ngày có TA06 | TA06 không tính đã cập bến, Yusuf chưa về, TA06 có lại trong lịch ngày sau |
| Đủ điểm cảng nhưng chạm trần hạng của chương | Điểm cộng dồn, lên hạng ngay khi chương sau mở |
| Mở giao thương khi một người còn ngoài chuyến | Không mở được, nút Mở bán xám kèm lý do (luật 64) |
| Muốn ra chuyến sau khi giờ giao thương đã mở hoặc đã đi 2 chuyến | Cửa khí khóa tới ngày mới (luật 63) |
| Hai tàu truyện cùng chờ | Tối đa 2 chỗ cho tàu truyện, theo thứ tự mốc, tàu truyện còn lại sang ngày sau (luật 69) |
| Bến 2 chưa sửa ở chương 3 | Lịch dùng cấu hình chỉ có bến 1 (luật 68) |

## 5. Ràng buộc vật lý của luật

| Ràng buộc | Số hoặc lý do |
|---|---|
| Thông lượng một người | Một tàu cần ít nhất 3 giây chờ thùng ra quầy, cộng đường chạy quầy tới cửa neo 1,1 tới 2,3 giây và quay về. Sim GD-054: một người với 25 tàu rảnh 44%, 23%, 4% ở trễ 1, 2, 3 giây. Tới 30 tàu vẫn đạt, từ 35 tàu thì tàu rời chưa giao tăng nhanh vì một người không giao nhanh hơn khoảng 29 tàu mỗi giờ giao thương |
| Thông lượng 3 cửa neo | Một tàu chiếm cửa neo từ lúc cập tới lúc khuất, ít nhất khoảng 6 giây. Sim GD-054 vòng 2: 3 cửa neo đạt mục tiêu ở 1 tới 4 người với 25, 55, 55, 60 tàu. 3 và 4 người dừng ở khoảng 55 tới 60 tàu vì 3 ô quầy và 3 cửa neo chung, bơm khí lấp phần rảnh |
| Trần thời gian | Cửa sổ đến 225 giây, giờ giao thương tối đa 300 giây. Tàu cập cuối cửa sổ với kiên nhẫn Dài 60 giây vẫn kịp phục vụ |
| Kho không giới hạn | Không có ràng buộc kho trong giờ giao thương. Ràng buộc nằm ở trần M loại và lượng hàng mang về. Sim GD-054 bảng 5: danh mục thiếu hàng làm Tally hụt 13 tới 16% |
| Tải mặt cắt | Quầy tới cửa neo 3 dưới 2,5 giây chạy. Bến 2, bến 3 khác tầng, xa hơn, là cách tạo độ khó mới ở chương 3, 4 mà không đổi luật |

## 6. Yêu cầu cho engineer / tool

| Hạng mục | Nội dung |
|---|---|
| Dữ liệu khoang | ID, tên, chương mở, danh sách vật liệu theo cấp, thời gian sửa, người vớt, vị trí trên mặt cắt |
| Dữ liệu tàu | ID loại, kiên nhẫn, bảng trọng số sở thích theo nhóm hàng hoặc danh sách chỉ gọi, hệ số tip theo loại hàng, luật riêng, có bật bơm khí không, chương và hạng mở, trọng số túi trộn |
| Danh mục | Danh sách {ID kiện, số thùng}, trần M theo Hạng cảng, chốt lúc Mở giao thương. Đổi kho sang thùng theo công thức đóng thùng của gd-items (0,4 kiện mỗi thùng, hàng không chia là 1) |
| Sinh lịch | Đầu ngày theo luật 67 tới 73, có seed để tái hiện. Túi trộn loại tàu giữ qua các ngày (lưu cùng thế giới). Món gọi chọn lúc tàu tới bằng RNG có seed của giờ giao thương |
| Thùng | Vật thể có ID kiện, tàu chủ, vị trí (giữ cho tàu, ô quầy, tay, đã giao). Không có thùng trên sàn |
| Sự kiện cho Event Tracking | Lập danh mục (số loại, tổng thùng), mở giao thương (N, số tàu), nghỉ giao thương, tàu tới, tàu không tới, tàu cập, tàu bỏ đi, tàu rời chưa giao, giao thùng (kiên nhẫn còn, giá, tip), giao sai cửa neo, bơm khí, đơn đặt trước đạt hay không, hết danh mục, kết thúc giờ giao thương, lên hạng, sự cố bắt đầu, sự cố xử lý, khoang sửa xong, người vớt tỉnh, con non sinh ra. Tên event do gd-tech đặt |
| Đồng bộ co-op | Máy chủ giữ danh mục, thùng, kiên nhẫn, yêu cầu bơm khí, cửa neo, ô quầy. Máy người chơi chỉ gửi host ba yêu cầu: nhặt thùng ở ô quầy, giao thùng ở cửa neo, bắt đầu hoặc dừng giữ bơm khí (`ky-thuat.md` bảng đồng bộ mục 2.2 và luật 29 tới 31) |
| Lưu | Danh mục nháp. Số đơn tin mật đã tới nơi (TA11). Số tàu phục vụ xong của từng thương nhân có tên (mở chuyện riêng ở lần 3, 6, 10 theo `cot-truyen.md` mục 2.6). Bản lưu ngày cuối trước rời neo giữ sau cảnh kết (K24). Trạng thái và cấp mọi khoang, giai đoạn động cơ, hàng đợi xưởng, điểm và hạng cảng, ô nuôi (loài, tuổi, đã cho ăn), người vớt đã tỉnh, quest mở, số chuyến đã đi và giờ giao thương đã mở trong ngày. Tự lưu sau mỗi chuyến khi mọi người đã về trạm, sau giờ giao thương, và lúc ngủ (K23). Giờ giao thương không lưu giữa chừng |
| Nơi phải cùng đổi khi đổi luật | GDD này, tab Customer, sim giờ giao thương, dữ liệu tàu và khoang, ITEM LIST, Recipe, tab Shop (mục mở theo hạng), WIREFRAME, Tutorials, Event Tracking |

### Đề sim giờ giao thương cho gd-tech (GD-054 đã chạy, việc vòng sau)

Kết quả sim GD-054 vòng 2 cho các mục gd-quan đề, bản đầy đủ ở `tools/ket-qua/sim-ca-cang.md`:

| Phần | Nội dung |
|---|---|
| Bơm khí lúc cập | Bơm khí chiếm 3,5%, 3,9%, 7,2% Tally ở 1, 2, 4 người. Người một mình có gặp. Tip kể cả bơm khí 26 tới 29% sau khi hạ tip tối đa xuống 25% |
| Trần giờ giao thương 300 giây | 0% giờ giao thương chạm trần ở mọi số người, kể cả trễ 3 giây |
| Giờ giao thương đầu tiên | 2 tàu xong trong 23 tới 33 giây (sim GD-054 vòng 2 mục 1) |
| Trọng số theo bậc giá | Danh mục 5 thùng đồ Trái Đất bán hết trước tàu thứ 9 ở 22% số giờ giao thương một người. Đơn đặt trước vẫn đạt 100% vì thùng đặt được giữ riêng lúc Mở giao thương |
| Tàu vội chỉ gọi băng, khoáng | Thiếu cả băng và quặng thì hụt 16,6 tới 20,6% Tally. Chỉ thiếu băng thì hụt dưới 5%. Đạt ý đồ: bỏ hẳn hai nhóm thì mất Tàu vội và tip gấp đôi |
| Còn mở | Chương 2 tới 5 và hai mục dưới |
| Hạng 1 chỉ có TA01 | So với có TA02 (sim vòng đầu có TA02 từ đầu) |
| Kiên nhẫn Vừa 45 giây | Một cấu hình thử cho tàu chương 2 |
| Chạy | Tối thiểu 200 seed mỗi cấu hình, in bảng theo N và trễ phản xạ |

## 7. Yêu cầu cho art, UI, tutorial, audio

| Sự kiện | Hình (VFX, trạng thái) | Âm (SFX) | Text / tutorial | Ưu tiên |
|---|---|---|---|---|
| Khoang sửa xong | Khoang sáng dần từ tối, mảnh vỡ biến mất, người vớt bước vào | Máy khởi động, tiếng ù nền của khoang | Tên khoang và chức năng mới | Cao |
| Mở giao thương, Thông dịch viên đóng thùng | Thùng xếp ra quầy thành hàng nhỏ theo màu loại hàng trong 1 giây | Tiếng băng chuyền ngắn | Danh mục còn hiện ở góc HUD | Cao |
| Tàu cập cửa neo | Tàu trượt vào cửa neo, kẹp neo đóng, vạch màu cửa neo sáng. Mỗi cửa neo có số lớn kèm màu, bộ màu khác nhau cả độ sáng để người mù màu vẫn phân biệt (gd-ux, Artist) | Kẹp neo, chuông cửa neo | Bong bóng món gọi bật lên trên tàu | Cao |
| Thùng ra quầy | Thùng hiện ở ô quầy, viền màu cửa neo | Tiếng đặt hàng nhẹ | Không | Cao |
| Thanh kiên nhẫn | Thanh trên tàu: xanh trên 2/3, vàng trên 1/3, đỏ dưới 1/3 | Tích tắc nhanh dần dưới 1/3 | Không | Cao |
| Yêu cầu bơm khí | Nhãn "Bơm khí" nảy cạnh tàu, vòng tiến độ 1 giây khi giữ | Tiếng xì khí khi xong | Lần đầu: gợi ý giữ phím ở cửa neo | Cao |
| Giao thùng | Thùng trượt vào khoang hàng, giá và tip bay lên hai màu | Tiếng nhận hàng, tiếng xu, tip có thêm tiếng chuông nhỏ | Không | Cao |
| Giao sai cửa neo | Thùng bật nhẹ về tay, cửa neo đúng nháy màu | Tiếng từ chối trầm | "Sai cửa neo" | Cao |
| Tàu rời chưa giao | Thương nhân lắc đầu, bong bóng tắt | Hợp âm trung tính, không chói | Không có chữ thất bại | Cao |
| Tàu chờ ngoài | Tàu nhỏ xếp hàng ở mép màn hình kèm vòng chờ | Còi xa | Không | Vừa |
| Đơn đặt trước tới | Bong bóng có nhãn "đặt trước" | Âm riêng ngắn | Lời Tikko | Vừa |
| Hết danh mục | Bảng danh mục ở HUD tắt dần | Âm kết | "Hết hàng, giờ giao thương kết thúc sớm" | Vừa |
| Lên hạng cảng | Bảng hạng sáng, liệt kê thứ mới mở | Chuông dài | Danh sách mở khóa | Vừa |
| Sự cố | Đèn đỏ nháy ở cửa neo hoặc ô quầy, biểu tượng trên mặt cắt và HUD | Còi báo động ngắn, không lặp liên tục | Tên sự cố và cách xử lý lần đầu | Vừa |
| Driftlife sinh con non | Con non cạnh bố mẹ trong ô | Âm sinh vật | Không | Thấp |

- Tutorial cần có (gd-ux viết): giờ giao thương đầu tiên theo luật 67: danh mục chọn sẵn, chỉ bấm Mở giao thương, đọc bong bóng, nhặt thùng ở quầy, giao đúng cửa neo, bơm khí lần đầu ở tàu thứ 2. Giờ giao thương thứ hai: lập danh mục lần đầu (chọn loại, đặt số thùng, đọc đơn đặt trước). Lần đầu có tàu chờ ngoài. Lần đầu có hàng cần chế trước giờ giao thương: hướng dẫn chế ở xưởng trước khi Mở giao thương. Lần đầu có TA02 (kiên nhẫn ngắn, tip gấp đôi). Lần đầu sự cố mỗi loại. Lần đầu ghim hàng của đơn đặt trước.

## 7b. Cảm giác (game feel)

- Tham chiếu cảm giác: Dave the Diver ở nhịp giờ giao thương bán ngắn, bong bóng món, tip khi phục vụ nhanh, và khoảnh khắc cuối giờ giao thương hiện tổng doanh thu và lời khách. Overcooked ở khoảnh khắc thả món vào ô giao, phản hồi tức thì kèm số.
- Phản tham chiếu là game co-op party kiểu ném đồ hỗn loạn: giờ giao thương không có đếm ngược ồn ào, không có màn hình thua giờ giao thương.
- Phản hồi: giao thùng tới khi số Tally hiện dưới 150 ms. Tip bay riêng, màu khác giá. Bến rung nhẹ khi tàu cập. Chuỗi giao liên tiếp khi còn từ 2/3 kiên nhẫn thì âm giao cao dần, đứt chuỗi khi một tàu rời chưa giao.

## 8. Cách đo thành công và tiêu chí nghiệm thu

Chỉ số kết quả gồm tỉ lệ tàu phục vụ xong, Tally mỗi giờ giao thương, phần tip, tỉ lệ đơn đặt trước đạt, số ngày tới mỗi hạng, tỉ lệ giờ giao thương bị bỏ. Chỉ số trải nghiệm gồm phần trăm thời gian rảnh mỗi người trong giờ giao thương, số loại trong danh mục, người chơi có đổi dải theo đơn đặt trước không, đo bằng event ghim.

Tiêu chí nghiệm thu:

Giờ giao thương:
- Sim chương 1, trễ phản xạ 2 giây: tàu phục vụ xong 85 tới 100%, rảnh không quá 30%, giờ giao thương 180 tới 300 giây, tip 20 tới 30% Tally. sim GD-054 vòng 2 mục 4, 3 cửa neo: 1 người 25 tàu (99%, rảnh 14%, giờ giao thương 230 giây, tip 26%), 2 người 55 tàu (99%, rảnh 6%, giờ giao thương 251 giây, tip 26%), 3 người 55 tàu (99%, rảnh 19%, giờ giao thương 241 giây, tip 29%), 4 người 60 tàu (97%, rảnh 27%, giờ giao thương 252 giây, tip 29%). Đạt.
- Bơm khí lúc cập: người một mình gặp, bơm khí chiếm 3,5% Tally ở 1 người (sim vòng 2). Trần giờ giao thương 300 giây: 0% giờ giao thương chạm trần. Giờ giao thương đầu 2 tàu xong trong 23 tới 33 giây (sim GD-054 vòng 2 mục 1). Đạt.
- Lập danh mục: thiếu cả băng và quặng hụt 16,6 tới 20,6% Tally, thiếu một trong hai hụt dưới 5%. Đồ Trái Đất 5 thùng hết trước tàu thứ 9 ở 22% số giờ giao thương một người, đơn đặt trước đạt 100% (sim vòng 2).
- Tàu rời chưa giao hoặc bỏ đi: Tally không giảm, thùng về danh mục, hết giờ giao thương thùng về kho đúng số, Hạng cảng không đổi, kiểm bằng log event.
- Danh mục: không vượt M loại, không vượt số thùng kho làm được. Mở giao thương trừ kho đúng số thùng nhân 0,4 kiện. Hết giờ giao thương số thùng chưa bán về kho đúng, kiểm bằng log.
- Nghỉ giao thương: tàu không tới, kho không đổi, không có dòng log trừ gì, cửa khí khóa tới ngày mới.
- Hết danh mục: tàu còn lại trong lịch không tới, giờ giao thương kết thúc khi tàu cuối ở cửa neo rời, kiểm bằng log.
- Giờ giao thương đầu tiên của thế giới: đúng 2 tàu TA01 (1 tàu nếu kho chỉ làm được 1 thùng phế liệu), chỉ gọi thùng phế liệu, không có đơn đặt trước, tàu 2 cập khi tay trống và bật bơm khí ngay (luật 67).
- Đơn đặt trước: danh mục có loại hàng đặt thì tàu thứ 9 gọi đúng thùng đó, giá nhân 1,5. Danh mục không có thì tàu thứ 9 gọi món khác, bảng tổng kết giao thương ghi không đạt.
- Giao sai cửa neo: tàu từ chối, thùng ở lại tay, kiên nhẫn không bị trừ thêm.
- Điểm cảng: tàu phục vụ xong còn từ 2/3 kiên nhẫn cho 2 điểm, dưới 2/3 cho 1 điểm, tàu rời chưa giao cho 0 (luật 40).
- Ở 2 người, hai người nhặt cùng một thùng cùng khung hình: đúng 1 người cầm thùng.
- Co-op: người thứ hai vào phiên ở pha chuẩn bị thì bảng tàu đổi số tàu dự kiến. Sau Mở giao thương, người vào thêm không đổi số tàu (luật 64).
- Mở giao thương: khi còn người ngoài chuyến thì không mở được. Mỗi ngày có đúng 1 lượt giao thương. Sau khi mở giao thương, cửa khí khóa, kiểm bằng log event.
- Mang thùng không đổi tốc độ chạy. Mỗi người chỉ mang 1 thùng, thùng đã nhặt không đặt xuống được.
- Mọi loại tàu có ít nhất một trục khác loại khác ngoài số (đọc bảng 2.4).
- Mọi ID kiện CGO trong ITEM LIST thuộc đúng một nhóm hàng HC01 tới HC15 (validator gd-tech).

Trạm, người vớt, Hạng:
- Sửa khoang: thiếu một vật liệu thì không bắt đầu được. Thả phím giữa chừng giữ tiến độ, vật liệu không hoàn. Sửa xong thấy khoang đổi hình (chơi, log).
- Người vớt: kéo buồng về cửa khí, người vớt tỉnh đầu ngày kế, khoang của người đó sửa được sau khi tỉnh và không sửa được trước đó, sửa xong thì thấy tính năng mở (chơi, log).
- Hạng cảng: điểm cộng đúng luật 40 ở mọi N, không giảm, chạm trần thì dồn, lên hạng khi chương sau mở (sim và log).
- Mọi khoang trong bảng 2.6 có danh sách vật liệu chỉ gồm ID có trong ITEM LIST (validator gd-tech).

Co-op và một ngày:
- Sang ngày khi 2 người, một người treo máy: nhóm sang ngày sau 30 giây (K23).
- Ra chuyến khi 2 người, một người treo máy: chuyến bắt đầu sau 30 giây, người đó tính ở lại.
- Một ngày đi được đúng 2 chuyến, chuyến thứ 3 bị cửa khí chặn (K22).
- Co-op 2 người, một người về sớm: người đó chế được ở xưởng và sửa danh mục nháp khi đồng đội còn ở ngoài, không ra lại được, hàng chế xong trước Mở giao thương vào được danh mục cùng ngày.
- Người vào sau: có chỗ ngủ ở khu hồi sức, buồng tắt của KH01 vẫn tắt (luật 62).

Sau MVP:
- Không có sự cố trước chương 3 trong 100 lượt giao thương sim chương 1 và 2.
- Driftlife sổng bỏ mặc tới hết giờ giao thương: 0 thùng và 0 đơn vị hàng bị mất.
- Khoang sinh quyển không cho ăn 5 ngày: 0 con chết, 0 sản phẩm.

## 9. Lệch khỏi tham chiếu (Dave the Diver)

| Phần | Dave làm thế nào | Giờ giao thương và trạm làm thế nào | Vì sao lệch |
|---|---|---|---|
| Nửa thứ hai trong ngày | Giờ giao thương tối ở quán sushi, khách vào gọi món, Dave và nhân viên phục vụ, dọn [PC Gamer, S24 kho 35] | Giờ giao thương: tàu cập 3 cửa neo, mỗi tàu gọi 1 thùng, người chơi mang thùng từ quầy tới đúng cửa neo | Lead bỏ nhà ăn, giữ cảng. Không nấu ăn (K17). Lead chốt lấy cấu trúc giờ giao thương bán của Dave cho đơn giản mà vẫn vui |
| Ai chọn thực đơn | Người chơi đặt thực đơn quán trước giờ mở [S1] | Người chơi lập danh mục tối đa M loại từ kho, Thông dịch viên tự đóng thùng | Giống: quyết định dồn về trước giờ giao thương. Khác: không nấu, thùng không hỏng, thùng chưa bán về kho |
| Gọi món | Khách ngồi ghế, món hiện bằng bong bóng (theo đề xuất đã chốt mục 2 luật D3, chưa có nguồn kho) | 3 cửa neo, bong bóng trên tàu, thùng ra ô quầy cùng màu cửa neo | Màu cửa neo thay cho việc nhớ ghế nào gọi gì |
| Việc phụ | Rót trà cho khách đang chờ (đề xuất mục 2 luật D6, chưa có nguồn kho) | Bơm khí: hồi kiên nhẫn, cộng tip nhỏ | Đúng chủ đề trạm không gian |
| Nhân lực | Thuê nhân viên có chỉ số [S24 kho 35] | Không có nhân viên. Co-op là thêm tay. Trưởng cảng thêm quầy phụ | P3: thêm người là thêm tay. Bớt một hệ quản lý cho 4 dev |
| Chỉ số tiến trình | Hạng Cooksta quyết số khách mỗi tối [S10 kho 35] | Hạng cảng quyết loại tàu, trần danh mục, loại hàng bán được, mục shop | Giống: một chỉ số dễ hiểu. Khác: số tàu theo chương và số người để giờ giao thương giữ trong 300 giây |
| Thất bại | Khách bỏ đi mất doanh thu khách đó | Tàu rời chưa giao mất món đó, thùng về kho | Giống: thất bại ở mức khách lẻ. Khác: hàng không mất vì hàng là công cả chuyến |
| Bản cũ của Ember trước đợt 9 | | Tàu đưa đơn nhiều dòng theo lịch biết trước, đơn đủ và đơn trượt, thưởng đủ đơn, thưởng nhanh, máy đóng kiện chạy trong giờ giao thương, kệ kiện, tốc độ chạy theo cỡ kiện, quy mô đơn theo số người | Lead muốn giờ giao thương đơn giản mà vẫn vui (DECISIONS đợt 9) |
| Nuôi | Fish Farm 9 ô mỗi khu, bắt đầu 4 ô, cần một cặp cùng loài, roe ấp 1 ngày [D8][D15] | Một khoang sinh quyển, 4 lên 9 ô, cặp cùng loài sinh con non, cần cho ăn để ra sản phẩm | Giữ số ô của Dave. Một khoang thay vì nhiều khu để gọn mặt cắt. Thêm cho ăn để nuôi có một quyết định mỗi ngày mà không phạt |
| NPC mở tính năng | Duff, Cobra, Otto mở shop, farm qua quest [D10][D8] | 5 người vớt, mỗi người một khoang, quest là sửa khoang | Giống cấu trúc. Khác: quest nối với sửa trạm (P2) thay vì quest giao đồ |

## 10. Câu hỏi mở

| Câu hỏi | Phương án đề xuất | Ai quyết |
|---|---|---|
| Danh mục có sửa được giữa giờ giao thương không | Không, chốt lúc Mở giao thương. Sửa giữa giờ giao thương làm mất quyết định trước giờ giao thương | GDM |
| Giờ giao thương đầu tiên khi kho không có phế liệu | Nút Mở bán xám kèm gợi ý (luật 67). Không cho Tikko mang hàng bù để không sinh hàng miễn phí | GDM, gd-ux |
| Trần giờ giao thương 300 giây thay 240 | Nâng (luật 34, mục 3). Cửa sổ đến giữ 225 giây nên người chơi thường không thấy khác, người chậm không bị đuổi tàu vì đồng hồ | GDM duyệt, sửa `so-hien-hanh.md` |
| Có cho từ chối từng tàu ngay khi cập không | Không, giữ luật bỏ cả giờ giao thương. Từ chối từng tàu thêm thao tác mà không thêm quyết định | GDM |
| Tên loài, thương nhân, lời thoại quest người vớt và lời tàu trong giờ giao thương | Theo `cot-truyen.md` | gd-story |

## Co-op 1 đến 4 người

| Phần | 1 người | 2 người | 3 người | 4 người |
|---|---|---|---|---|
| Sửa khoang | Một người giữ phím | Nhiều người giữ cùng khoang: tốc độ nhân (1 + 0,5 nhân số người thêm), trần 2 lần | Như 2 người, trần 2 lần | Như 2 người, trần 2 lần |
| Số tàu chương 1 | 25 | 55 | 55 | 60 |
| Cửa neo bến 1 | 3 | 3 | 3 | 3 |
| Danh mục | Một danh mục | Một danh mục chung, ai ở khoang liên lạc cũng sửa, người Mở giao thương chốt | Như 2 người | Như 2 người |
| Mang thùng | 1 thùng | Mỗi người 1 thùng | Như 2 người | Như 2 người |
| Bơm khí | Một người | Một người mỗi cửa neo một lúc | Như 2 người | Như 2 người |
| Tạm dừng | Được | Không | Không | Không |
| Sự cố mỗi giờ giao thương | Theo bảng tham số | Theo bảng tham số | Cộng 1 | Cộng 1 |
| Tally, Hạng cảng, kho, ô nuôi | Chung | Chung | Chung | Chung |
| Ai mở giao thương | Người chơi, khi không ở ngoài chuyến | Bất kỳ ai ở khoang liên lạc khi không còn ai ngoài chuyến. Nghỉ giao thương hoặc mở giao thương sớm cần mọi người xác nhận, 30 giây không trả lời là đồng ý (luật 64 tới 66) | Như 2 người | Như 2 người |
| Ở lại hoặc về sớm khi người khác còn ở ngoài | Giữa hai chuyến được chế trước và lập danh mục nháp (luật 55) | Không ra lại, được chế trước, lập danh mục nháp, sửa khoang, chăm khoang nuôi, xem vị trí đồng đội (luật 53 tới 58, C9) | Như 2 người | Như 2 người |

Không có luật nào cần đúng N người, vì một người phục vụ được mọi tàu (số tàu co theo N), mỗi tàu chỉ cần 1 thùng, và mọi thao tác giờ giao thương một người làm được.

## Điểm tự quyết

| Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|
| Kho có giới hạn không | Không giới hạn | Giới hạn đã nằm ở túi đồ (K3). Thêm giới hạn kho là thêm việc sắp xếp không vui | Kho theo ô | Rẻ |
| Trả Tally khi nào | Mỗi thùng trả ngay khi giao, tip theo kiên nhẫn còn lại | Phản hồi tức thì, tốc độ đổi ra tiền ở tip (K13 đợt 9) | Trả cả giờ giao thương khi kết thúc giờ giao thương | Rẻ |
| Thất bại giờ giao thương | Không có trạng thái thua, tàu rời chưa giao chỉ mất món đó | Khung yêu cầu thất bại dứt khoát mà không phá tiến trình. Hàng là công cả chuyến | Phạt Hạng cảng, mất hàng | Rẻ |
| Chế trước | Hàng cần chế phải xong trước Mở giao thương, mẻ xong sau Mở giao thương để ngày sau | K13 đợt 9 bỏ chế trong giờ giao thương. Người ở lại trạm có việc (C9) | Chế trong giờ giao thương | Rẻ |
| Thời điểm chọn món | Món chọn lúc tàu tới, theo danh mục còn lại | Món phụ thuộc danh mục người chơi lập. Chọn sớm từ đầu ngày thì danh mục mất nghĩa | Lịch đủ món từ sáng | Rẻ |
| Đơn đặt trước | 1 mỗi ngày ở chương 1, giá nhân 1,5, không đạt không phạt | Giữ mối nối đọc bảng tàu rồi chọn dải (D9) | Bỏ hẳn bảng tàu buổi sáng | Rẻ |
| Thứ tự cập cửa neo | Cửa neo trống số nhỏ nhất, tàu chờ lâu nhất cập trước | Giống demo, dễ đọc. Cửa neo 1 gần quầy nhất nên tàu đầu luôn dễ | Ngẫu nhiên cửa neo | Rẻ |
| Kiên nhẫn chạy khi nào | Chỉ khi ở cửa neo. Chờ ngoài có đồng hồ riêng | Người chơi chỉ chịu trách nhiệm tàu đã cập, thứ họ thấy và với tới được | Kiên nhẫn chạy từ lúc tới | Rẻ |
| Đặt thùng xuống | Không, thùng đã nhặt chỉ giao (GDM chốt cho MVP) | Mỗi thùng chỉ có một tàu nhận nên người chơi không kẹt. Ít thao tác hơn | Đặt về ô quầy | Rẻ |
| Bơm khí bật lúc cập | 50% tàu bật ngay lúc cập, bật lại sau 10 tới 18 giây nếu chưa giao | Sim GD-054: bật sau 10 giây thì người một mình không bao giờ gặp bơm khí. GDM nghiêng bật lúc cập | Bật sau 10 tới 18 giây như demo | Rẻ |
| Tàu vội chỉ gọi băng, khoáng | Có, thiếu hai nhóm đó thì Tàu vội không tới | Cải thiện theo ý Lead "cần làm cho nó tốt hơn", GDM duyệt từ đề xuất của gd-economy. Lập danh mục có giá phải trả thật | Tàu vội gọi mọi hàng | Rẻ |
| Hệ số hàng hay gọi của Tikko | Đồ Trái Đất 6, phế liệu bỏ ưu tiên | Trọng số nay là độ gọi nhân hệ số. Giữ hệ số cũ thì phế liệu 6, đồ Trái Đất 3, Tikko thành tàu mê phế liệu | Đồ Trái Đất 3, phế liệu 2 | Rẻ |
| Trần giờ giao thương | 300 giây, cửa sổ đến 225 giây | Sim GD-054: ở 240 giây người trễ 3 giây chạm trần 54% số giờ giao thương ở 1 người, 100% từ 2 người. Tàu bị đuổi vì đồng hồ là thất bại không do người chơi. Vẫn trong 3 tới 5 phút của khung | 240 giây | Rẻ |
| Giờ giao thương đầu tiên | 2 tàu TA01, tàu 2 bật bơm khí ngay | Khớp tutorial của gd-ux, đủ dạy nhặt, giao, bơm khí trong một phút | 5 tàu giãn cách 15 giây | Rẻ |
| Thùng 0,4 kiện | Có | Demo bot: 10 tàu một kiện rảnh 76%, 25 tàu một thùng rảnh 24% ở trễ 2 giây, Tally một giờ giao thương gần như không đổi | Giữ kiện làm đơn vị bán | Rẻ |
| Điểm cảng không nhân theo N | Không nhân | Số tàu đã tăng theo N nên điểm nhóm tự tăng. gd-economy kiểm lại mục tiêu thời gian co-op | Nhân (N + 1) chia 2 như bản cũ | Rẻ |
| Lịch tàu | Loại tàu, số tàu, đơn đặt trước biết từ pha chuẩn bị, không đổi trong ngày | Nối giờ giao thương với lựa chọn dải trong chuyến (P1, P2) | Tàu ngẫu nhiên hoàn toàn trong giờ giao thương | Vừa |
| Hạng cảng giảm không | Không bao giờ giảm, có trần theo chương | Không phá tiến trình. Trần giữ nội dung không vượt truyện | Giảm khi tàu rời | Rẻ |
| Số hạng | 8 hạng | 5 chương, chương 5 không mở hạng mới theo mạch thương nhân thưa dần | 10 hạng | Rẻ |
| Quest người vớt | Sửa khoang của người đó | Nối người vớt với sửa trạm (P2), một luật cho cả 5 người | Quest giao đồ riêng từng người | Vừa |
| Người vớt tỉnh khi nào | Đầu ngày kế tiếp | Cho cảnh tỉnh dậy chỗ trong pha chuẩn bị, không chen giữa chuyến | Tỉnh ngay | Rẻ |
| Nuôi cần cho ăn | Có, không cho ăn thì không ra sản phẩm, không chết | Một quyết định nhỏ mỗi ngày, đúng K16 và K17 | Không cần cho ăn | Rẻ |
| Số ô nuôi | 4, 6, 9 | Giữ khung Dave 4 lên 9 đã chứng minh | 6 lên 12 | Rẻ |
| Sự cố hết khi hết giờ giao thương | Có | Hậu quả chỉ trong giờ giao thương, không có hư hại lâu dài, đúng K17 | Khoang hỏng lại sau sự cố | Rẻ |
| Co-op: tăng gì theo N | Số tàu 25, 55, 55, 60, giãn cách co lại. Cửa neo, kiên nhẫn không đổi | C8 đợt 9. sim GD-054 vòng 2 mục 4: 3 cửa neo đạt ở mọi số người khi có bơm khí lúc cập. Không mở nội dung theo số người | Thêm cửa neo theo số người | Vừa |
| Hàng Driftlife sống ở chương 1 | Lồng sống bán được trong danh mục chương 1. Từ ngày có Súng lưới, ngày chẵn đơn đặt trước là lồng sống | Log 49: MVP phải thử được bắt sống đáng hơn hạ. Đơn đặt trước kéo người chơi đi bắt sống mà không ép mỗi giờ giao thương | Ép mỗi giờ giao thương có tàu gọi lồng | Rẻ |
| TA06 gọi bằng gợi ý | Thùng không tự ra quầy, người chơi chọn ở quầy theo gợi ý. Bảng tàu ghi rõ | Thùng tự ra theo màu thì gợi ý vô nghĩa. Giữ cam kết bảng tàu không nói dối | Thùng tự ra như tàu khác | Rẻ |
| Bán vật kể chuyện | Không bán vật gốc. Tàu mua bản sao dữ liệu (HC09) | gd-items ghi vật kể chuyện không bán, và bán vật gốc làm mất manh mối. Vẫn giữ mốc truyện bán hàng cho kẻ thù | Bán vật gốc | Rẻ |
| Người vớt ngoài buồng ngủ đông | Tới theo mốc truyện, vẫn qua quest sửa khoang | gd-story đặt Nhà sinh học ở Station Lantern còn người sống | Ép mọi người vào buồng | Rẻ |
| TA05 | Tàu sưu tầm Driftlife sống của Aelith, chỉ gọi lồng sống và đặc sản | Khớp chủng tộc gd-story đã đặt, và cho bắt sống một người mua riêng (K9) | Mê đồ Trái Đất | Rẻ |
| Vật tiêu hao cho sự cố | Rò khí tiêu 1 Keo vá, chập điện tiêu 1 Cầu chì. Hết thì vẫn xử lý được, chậm gấp 3 | Cho CON-104, CON-105 của gd-items một chỗ tiêu, không tạo tình huống kẹt | Bắt buộc có vật tiêu hao | Rẻ |
| Mốc bắt đầu sự cố | Giờ giao thương kế tiếp sau lần đầu TA08 cập bến | Khớp lý do truyện của gd-story, vẫn trong chương 3 theo K14 | Đầu chương 3 | Rẻ |
| Sự cố ở đâu | Rò khí ở cửa neo, chập điện ở ô quầy, Driftlife sổng ôm thùng trên quầy | Giờ giao thương mới chỉ xoay quanh quầy và cửa neo, phạt vào kiên nhẫn đúng chỗ người chơi đang nhìn | Rò khí làm đi qua khoang chậm thêm 3 giây (bản trước đợt 9) | Rẻ |
| Ai quyết sang ngày khi co-op | Mọi người online xác nhận bằng cách vào buồng, người không vào sau 30 giây tự tính sẵn sàng (khớp K23) | Không ai bị kẹt bởi một người treo máy, không cho host quyền riêng (P3). Đề xuất của gd-ux | Host quyết, hoặc người vào buồng cuối quyết | Rẻ |
| Người không trả lời ở cửa khí | Sau 30 giây tự tính ở lại trạm | Một người treo máy không kẹt cả nhóm. Đề xuất của gd-ux | Chờ vô hạn | Rẻ |
| Trần rảnh trong giờ giao thương | 30% ở trễ phản xạ 2 giây, mọi số người | Khung mục 9. Demo bot đạt 24% ở 1 người | 25% | Rẻ |
| Một giờ giao thương mỗi ngày, mở giao thương khóa cửa khí | Có | Khớp K22, thang Hạng và nhịp kinh tế dựa vào một giờ giao thương mỗi ngày | Mở nhiều giờ giao thương | Rẻ |
| Khoang của người vớt | Chỉ sửa được sau khi người vớt tỉnh | Quest mở là sửa khoang, cho mỗi người vớt một khoảnh khắc trả chức năng | Sửa trước, người vớt tới sau | Rẻ |
| Chỗ ngủ người vào sau | Buồng của họ đặt ở khu hồi sức | Khớp L4: buồng tắt vẫn tắt. Không cần khoang mới | Lấp buồng tắt | Rẻ |
| Driftlife sổng | Ôm thùng chứ không làm mất | Giữ cam kết không mất hàng | Mất hàng | Rẻ |
| Khoang hỏng đi qua được | Có | Mặt cắt không bị chặn đường, sửa là để có chức năng | Khoang hỏng chặn lối | Rẻ |

## Phản biện khung

| Luật khung | Vấn đề | Lý do và bằng chứng | Phương án thay |
|---|---|---|---|
| C8 "số tàu trong giờ giao thương tăng theo số người" và "không nội dung nào mở khóa theo số người" (đợt 9) | Sim vòng đầu: 3 cửa neo không đạt ở 3 và 4 người, thêm cửa neo theo số người thì trái C8 | Sim GD-054 vòng 2: có bơm khí lúc cập thì 3 cửa neo đạt ở mọi số người | Đã xử: GDM chốt 3 cửa neo cho mọi số người, không đổi C8 |
| C10, K23 "host thoát thì về đầu ngày" | Host rớt giữa giờ giao thương làm cả nhóm mất hai chuyến và việc trạm của ngày | GDM đã xử, log dòng 65: K23 tự lưu ở ba điểm | Đã áp ở mục biên và mục 6 |
| K19 sink "đóng kiện bán" | Người chơi không đóng kiện, Thông dịch viên đóng thùng lúc Mở giao thương | Chữ cũ, không sai luật | GDM sửa thành "bán ở giờ giao thương" khi rảnh |
| Khung mục 4 pha 1 "chăm khoang nuôi" và khung mục 12 MVP không có khoang sinh quyển | Không trái: pha 1 ở MVP không có việc chăm nuôi | K16 mở nuôi ở chương 2, MVP là chương 1 | Không cần đổi |

## Lịch sử thay đổi

| Ngày | Thay đổi | Lý do | Ai |
|---|---|---|---|
| 2026-11-20 | Bản đủ đầu tiên | GD-027 đợt 1 | gd-quan |
| 2026-11-20 | Khớp danh mục gd-items, gd-combat, gd-story: ID kiện CGO, cỡ kiện, thời gian đóng kiện 5 giây, chế 10 giây, hàng đợi chế 2 mẻ, Driftlife sổng ăn hàng và tóm bằng tay, TA04 và TA05 sang chương 2, sự cố bắt đầu sau lần đầu TA08 | Tin của ba vai | gd-quan |
| 2026-11-20 | Khớp bản đủ gd-items: ID kiện HC06 tới HC09, thêm HC10 Kiện đồ Trái Đất, ENG-105 chế không mua, số đơn vị mỗi kiện theo Khối, thức ăn FED, hai người giữ kiện Lớn | Tin gd-items | gd-quan |
| 2026-11-20 | Khớp bản đủ gd-story và khung mới: mốc mở từng tàu, tên TA02 và TA09, ba lần cập bến của TA08, Amara và Yusuf tới theo giờ giao thương, tàu có điều kiện truyện lặp lại tới khi xong, kết mở không tới Solace | Tin gd-story, khung đổi Solace là mồi | gd-quan |
| 2026-11-20 | Đợt 1b: C8 mới (số tàu không theo số người), luật đóng kiện trước 53 tới 58 (C9), hàng Driftlife sống CGO-121 ở chương 1 (log 49), Hoa tiêu mở dải Xa (log 44) | Khung sửa lần 2 | gd-quan |
| 2026-11-20 | Bảng chốt tốc độ mang kiện, kiện Lớn giữ chung theo luật cộng 15 điểm của gd-character thay cho 90% cố định | Lệch gd-items báo giữa vat-pham và nguoi-choi | gd-quan |
| 2026-11-20 | Chốt số theo sim giờ giao thương GD-030: chương 1 4 tàu, kiện gốc 2 đến 3, giãn cách 55 giây chia số bến, tàu cuối không vượt giờ giao thương, ô 2 giây, ngưỡng hạng mới | Sim cho thấy giờ giao thương chương 1 quá dễ, chương 4 tàu cuối đến muộn | gd-quan |
| 2026-11-20 | Thêm luật 59 tới 61: xác nhận sang ngày ở buồng ngủ đông, hết giờ ở cửa khí khi co-op | Câu hỏi mở 2 của gd-ux | gd-quan |
| 2026-11-20 | Theo gd-economy GD-028: ngưỡng Hạng cảng mới, điểm cảng nhân quy mô đơn, ENG mở ở hạng 3, 5, 7, 8, xưởng cấp 2 sang chương 2. Quy mô đơn còn mở, hai phương án | Sim kinh tế | gd-quan |
| 2026-11-20 | Chốt quy mô đơn phương án B với gd-economy: giá trị một kiện bằng khoảng một phần mười giá trị đơn một giờ giao thương | gd-economy đồng ý | gd-quan |
| 2026-11-20 | Sim vòng 2: chương 1 đạt. Bỏ chia giãn cách theo số bến, giãn cách theo chương 55, 55, 45, 40. Kiện gốc chương 2 tới 5 là 1 đến 2. Số ngày tới Hạng chuyển cho sim kinh tế | Chương 3, 4 đơn đủ thấp vì tàu dồn | gd-quan |
| 2026-11-20 | Sim vòng 3: chương 2, 3 đạt. Chương 4 nới giãn cách lên 45 giây, thêm tiện ích kệ kiện phụ cạnh bến 2 và bến 3 | Chương 4 một người đơn đủ 61% | gd-quan |
| 2026-11-20 | Chương 1: giãn cách 45 giây, hệ số kiện co-op 0,6, đơn chương 1 chỉ kiện thô và lồng sống, tối đa 1 kiện tinh | Sim GD-030 chạy thử đạt cả 10 kiện một người và rảnh dưới 30% | gd-quan |
| 2026-11-20 | Sim vòng 4: chương 4 đạt khi có kệ kiện phụ và đóng sẵn một nửa. Mục tiêu chương 4, 5 đo ở cấu hình đó, trần rảnh 40% | Một người không chuẩn bị chỉ 62%, nới giãn cách không đủ | gd-quan |
| 2026-11-20 | Hệ số kiện co-op tách theo chương: 0,6 ở chương 1, 2 và 0,4 ở chương 3 tới 5 | Sim GD-030 bản chính thức: 0,6 làm nhóm ở chương 3, 4 tụt dưới 70% đơn đủ | gd-quan |
| 2026-11-20 | Trần rảnh 30% ở chương 1 tới 3. Chương 3 giữ hệ số 0,4 (0,5 cho cùng số kiện vì làm tròn) | Sim GD-030: chương 3 với 0,4 thì rảnh 32% ở 3 người, với 0,6 thì đơn đủ 68% ở 2 người. Cả hai lệch 2 điểm, dừng dò, chờ playtest | gd-quan |
| 2026-11-20 | Chương 3 giãn cách 42 giây, hệ số 0,4 | Sim GD-030: đạt cả đơn đủ và rảnh ở mọi N | gd-quan |
| 2026-11-20 | QA vòng 1 GD-031: luật mở giao thương và sinh lịch 64 tới 70, giờ giao thương đầu cố định, cấu hình lịch theo số bến, dòng đơn theo ID, giá và thưởng, điểm cảng làm tròn tích, nhóm HC11 tới HC13, HC06 vào lồng 8 giây, chỗ ngủ người vào sau, cửa khí K22, ngủ 30 giây K23, khoang người vớt sửa sau khi tỉnh, sổng không mất hàng, rò khí đi chậm, Hạng 7, số mục 8 theo sim, chuyển luật 53 tới 63 xuống sau nuôi | Biên bản `qa/GD-031-tram-va-cang.md` | gd-quan |
| 2026-11-20 | CGO-106 lên MVP chương 1, TA01 từ Hạng 3 hỏi thêm HC11 (chỉ CGO-106) | gd-items đưa đặc sản dải Gần vào MVP | gd-quan |
| 2026-11-20 | QA vòng 2 GD-031: số kiện tính theo N online, chốt lúc Mở giao thương (R1). TA01 có tối đa 1 dòng kiện tinh từ khi xưởng Hoạt động (R2). Nghỉ giao thương cũng khóa cửa khí, làm tròn giờ giao thương đầu, K24, trả mục tiêu đơn đủ 70 tới 90% và giờ giao thương 180 giây về như khung | Biên bản vòng 2 | gd-quan |
| 2026-11-20 | Lồng con nuôi giá 0,5 lần, tối đa 1 lồng mỗi loài mỗi ngày. Động cơ giai đoạn 1 nhận mẫu boss BS-1 | Khớp `vat-pham.md` luật M5 và bảng REPAIR | gd-quan |
| 2026-11-20 | Dòng kiện cần chế và dòng lồng sống có kiện gốc 1. TA03, TA04, TA06 còn 2 dòng, TA09 còn 2 đến 3 dòng. Chờ sim | Sim GD-030 sau khi sửa tham số: chương 2 tới 5 đơn đủ 28 tới 65% vì kiện tinh qua xưởng, chương 1 nhóm 4 người nghẽn máy vì 9 lồng | gd-quan |
| 2026-11-20 | Khớp gd-story: TA08 lần 2, lần 3 chờ mốc C3.4, C3.7, lần 2 chỉ hỏi bản sao nhật ký. Quest Thông dịch viên sửa cả KH06 và KH07. Trạng thái Hồi sức. Mốc trong giờ giao thương chỉ có lời bong bóng | Phiếu `qa/GD-031-cot-truyen.md` | gd-quan |
| 2026-11-20 | Bỏ "trả giá cao" theo tàu, tàu đắt đi bằng loại kiện đắt (gd-economy bỏ hệ số tàu). ID nâng cấp khoang KHxx-Cn. Giá trị kiện trỏ về `vat-pham.md` | Tin gd-economy sau QA GD-031 | gd-quan |
| 2026-11-20 | Bỏ lý do cũ dựa trên kiện thô rẻ (gd-items đặt mọi kiện khoảng một phần mười đơn một giờ giao thương, kiện thô chương 1 nay cỡ Vừa) | Tin gd-items | gd-quan |
| 2026-11-20 | TA08 lần 1 vào lịch sau khi bến 2 Hoạt động (bỏ vòng với C3.3). Lưu số đơn đủ của từng thương nhân có tên | gd-story, phiếu QA cốt truyện vòng 2 | gd-quan |
| 2026-11-20 | Cấu hình lịch sau sim gộp: hệ số co-op 0,6 mọi chương, giãn cách chương 1 42 giây, chương 2 và chương 3 45 giây, kiện thô chương 2 1 đến 3. Mục 8 chép số mới | Sim GD-030 sau khi gỡ nút thắt xưởng: chương 2 quá dễ, nhóm chương 3 lệch | gd-quan |
| 2026-11-20 | Chép số bản sim cuối GD-030 vào mục 8 | gd-tech chạy bản cuối 300 lượt giao thương | gd-quan |
| 2026-11-20 | Thêm HC14 cho CGO-411, CGO-511 (TA07, TA09 hỏi). Gỡ dấu chờ gd-tech về kiện trên tay theo `ky-thuat.md` | Validator báo 3 lỗi | gd-quan |
| 2026-11-20 | Đợt 4: chương 1 chỉ một loại kiện tinh CGO-113 theo lựa chọn của gd-items (log 67), K25 thay luật 11, K23 ba điểm tự lưu (log 65), mục tiêu đơn đủ chương 1 70 tới 95% (log 78), mục 8 trỏ bảng sim bản cuối thay số chép tay | Brief `briefs/dot4-gdm-chot-sau-qa.md` | gd-quan |
| 2026-11-20 | TA08 lần 3 cần giai đoạn 3 động cơ đã lắp (K25). TA06 là tàu truyện cho C5.1 từ ngày kế tiếp sau C4.7 | gd-story sau đợt 4 | gd-quan |
| 2026-11-20 | QA vòng cuối F1: mục 3 và mục 5 bỏ số sim chép tay, trỏ bảng 2 của sim. Quy mô đơn sửa thành 1, 1,6, 2,2, 2,8 mọi chương. Luật 12 theo K24 mới, header K10 đến K27 | Phiếu `qa/GD-031-tram-va-cang.md` vòng cuối | gd-quan |
| 2026-11-20 | Đợt 6 phần một: thêm HC15 Kiện tin mật (CGO-421) và TA11 tàu của mạng lưới. Phần Y và Maro chờ tên của gd-story | Log 87, tin gd-items | gd-quan |
| 2026-11-20 | Đợt 6 phần hai theo tên mới của gd-story: Ilsume (TA04) là Sevra Ilvane giả danh, ngừng ghé sau C3.8. Maro là gián điệp của Daskel, còn 2 lần cập bến, ngừng sau C3.8. TA11 là tàu của The Kindling, vào lịch sau C4.6, đơn tin mật cho C4.7 (1 đơn) và C5.2 (2 đơn). TA06 bỏ khỏi điều kiện C5.1 | Log 86 tới 90, `cot-truyen.md` mục Tên mới | gd-quan |
| 2026-11-20 | QA GD-033: dòng HC15 không nhân quy mô đơn (1 gói tin mỗi ngày), luật 35 liệt kê C4.7 và C5.2 thay C3.8 | Phiếu `qa/GD-033-tram-va-cang.md` G3, G4 | gd-quan |
| 2026-11-20 | TA11 luôn 2 dòng, trọng số TA06 lên 3 và TA09 lên 2 từ chương 4 để bù việc chế của TA04 | Sim GD-033: bỏ TA04 làm rảnh chương 4, 5 vượt trần 40% | gd-quan |
| 2026-11-20 | TA11 vào lịch từ ngày kế tiếp sau C3.8, có mặt ngày đầu chương 4 và chương 5 | gd-story đính chính | gd-quan |
| 2026-11-20 | Đợt 9 GD-051: viết lại giờ giao thương theo khung bán sushi của Dave. Luật 18 tới 36 mới (danh mục bán, thùng 0,4 kiện, 3 cửa neo, gọi 1 thùng, quầy cảng, kiên nhẫn, bơm khí, tip). Luật 40 điểm cảng theo tàu phục vụ xong, không nhân N, ngưỡng chờ gd-economy. Luật 43 tới 46 sự cố ở cửa neo và quầy. Luật 53 tới 58 thành chế trước và lập danh mục. Luật 67 tới 73 lượt giao thương đầu 5 tàu để dạy, lịch theo danh mục, đơn đặt trước. Bảng 2.4 theo kiên nhẫn, hàng hay gọi, luật riêng. Bỏ đơn nhiều dòng, đơn đủ, đơn trượt, thưởng đủ đơn, thưởng nhanh, máy đóng kiện, kệ kiện, cỡ kiện và tốc độ mang, quy mô đơn, cấu hình lịch sim GD-030 | Lead chốt (DECISIONS mục "Ca cảng theo khung Dave"), số từ demo bot 2026-11-20 | gd-quan |
| 2026-11-20 | Đợt 9 GD-051 vòng 2: số tàu 25, 50, 70, 70 theo số người và cửa neo 3 và 4 người chờ Lead theo sim GD-054. Bơm khí bật lúc cập 50%. Trần giờ giao thương 300 giây, cửa sổ đến 225 giây. Giờ giao thương đầu 2 tàu theo gd-ux. Thùng đã nhặt không đặt xuống (GDM chốt). Bảng 2.4 thêm cột hệ số tip và món mê khớp ShipTypeData | Tin GDM sau GD-053, GD-054 | gd-quan |
| 2026-11-20 | Đợt 9 GD-051 vòng 3: nhận ngưỡng Hạng 70 tới 910 và độ gọi theo bậc giá của gd-economy GD-055. Tikko đồ Trái Đất hệ số 6. Tàu vội chỉ gọi băng, khoáng (cải thiện GDM duyệt). Luật 58 ghi rõ Hàng chế 1,35 là giá. KH07-C2 chờ Lead | Tin GDM sau GD-055 | gd-quan |
| 2026-11-20 | Đợt 9 GD-051 vòng 4: 3 cửa neo cho mọi số người, KH07-C2 là cửa neo thứ 4 qua nâng cấp. Số tàu 25, 55, 55, 60. Tip tối đa 25%. Chép kết quả sim GD-054 vòng 2 vào mục 6 và mục 8. Bỏ câu hỏi cửa neo ở mục 10 | GDM chốt sau sim GD-054 vòng 2 | gd-quan |
| 2026-11-23 | Sửa câu văn theo đánh giá humanizer (production/reports/2026-11-23-humanizer-gdd.md): bỏ lịch sử trong thân luật, phủ định thừa, câu chốt lặp. Không đổi luật, số, ID. Số chuyển từ thân luật xuống đây: tip tối đa trước là 30%, trần giờ giao thương trước là 240 giây | Đánh giá humanizer | GDM |
| 2026-11-23 | Dòng 457 (đề sim, Đồng bộ co-op): bỏ chữ "đặt" trong danh sách yêu cầu gửi host vì luật 26 không cho đặt thùng xuống và `ky-thuat.md` luật 29 chỉ có ba yêu cầu nhặt, giao, bơm khí. Sửa chỗ trỏ từ luật 15 tới 17 (rời phiên, mất kết nối) sang mục 2.2 và luật 29 tới 31. Không đổi luật, số, ID | Brief GDM | gd-quan |
| 2026-11-23 | Luật 71 và bảng tham số mục 3: đơn đặt trước từ chương 2 là 1 đơn mỗi ngày, Hạng cảng 8 lên 2 đơn mỗi ngày, khớp bảng 2.5. Không đổi luật khác | qa/2026-11-23-ra-cheo-A.md mục Cần quyết 4, GDM chốt | gd-economy |
