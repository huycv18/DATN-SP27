# GDD hệ thống: Trạm và cảng

Project: game-moi (The Novent) | Chủ sở hữu: gd-quan | Trạng thái: bản đủ, sửa sau QA vòng cuối GD-031 (2026-11-20) | Nguồn quyết định: `gdd/00-khung-game.md` K10 đến K27, C1 đến C10, `log-gdm-tu-quyet.md`

Số ca cảng (lịch tàu, kiện, giãn cách, hệ số co-op) đã đo bằng sim ca cảng GD-030 (`tools/ket-qua/sim-ca-cang.md`). Số còn lại ghi nguồn ở cột Nguồn của mục 3, chữ "ước" là chưa đo. ID vật phẩm theo `vat-pham.md` của gd-items, tên thương nhân theo `cot-truyen.md`, hành vi Driftlife theo `combat-driftlife.md`, giá Tally theo `kinh-te-tien-trinh.md` mục 3.1.

## Tóm tắt

Trạm và cảng là nửa ở nhà của The Novent: người chơi sửa từng khoang của Station Ember, đánh thức người vớt để mở tính năng, nuôi Driftlife, và chơi ca cảng, nửa chơi tay thứ hai, nơi bốc kiện lên tàu thương nhân trước giờ rời bến để lấy Tally. Tầng: lõi. Ưu tiên: bản đầu (MVP chương 1). Phụ thuộc chính: vật phẩm (gd-items), Driftlife (gd-combat), kinh tế (gd-economy), cốt truyện (gd-story).

## Hiện hành

| Mục | Giá trị hiện hành | Nhãn |
|---|---|---|
| Số khoang | 13 khoang, 7 khoang có ở chương 1 | MVP một phần |
| Sửa khoang | Mang đủ vật liệu tới khoang, giữ phím sửa | MVP |
| Ca cảng | Tàu cập bến theo lịch, giao từng kiện được trả ngay, đủ đơn có thưởng, tàu rời đúng giờ | MVP |
| Thất bại trong ca | Tàu rời khi đơn chưa đủ: mất thưởng đủ đơn, không mất hàng, không mất Tally, không giảm Hạng cảng | MVP |
| Hạng cảng | 8 hạng, tăng bằng điểm cảng từ đơn đủ, có trần theo chương, không bao giờ giảm | MVP tới hạng 3 |
| Nuôi Driftlife | 4 ô lên 9 ô, cặp cùng loài sinh con non, cho ăn thì ra sản phẩm, không cho ăn không chết | Sau MVP |
| Sự cố | Từ chương 3: rò khí, chập điện, Driftlife sổng | Sau MVP |
| Co-op | Mọi luật đúng với 1 đến 4 người, quy mô đơn tăng theo số người | MVP 2 người |

## Danh mục

### Khoang của Ember
| ID | Khoang | Chức năng | Người vớt | Mở ở chương | Nhãn |
|---|---|---|---|---|---|
| KH01 | Buồng ngủ đông (4 buồng, N buồng chạy) và khu hồi sức | Ngủ sang ngày, lưu. Khu hồi sức giữ buồng của người chơi vào sau và người vớt chờ tỉnh (luật 62) | Có sẵn | 1 | MVP |
| KH02 | Cửa khí | Ra và về chuyến, nạp đầy Oxy khi chuyến kết thúc, tối đa 2 chuyến mỗi ngày (luật 63, K22) | Có sẵn | 1 | MVP |
| KH03 | Kho | Chỗ chứa đồ chung | Có sẵn | 1 | MVP |
| KH04 | Khoang neo | Hãm trôi và neo Ember, việc sửa đầu tiên | Có sẵn | 1 | MVP |
| KH05 | Xưởng | Chế và nâng cấp trang bị, chế hàng cảng | Kỹ sư | 1 | MVP |
| KH06 | Khoang liên lạc | Gọi tàu, mở ca cảng, bảng tàu, shop | Thông dịch viên | 1 | MVP |
| KH07 | Cảng (bến 1, máy đóng kiện, kệ kiện) | Ca cảng | Thông dịch viên | 1 | MVP |
| KH08 | Khoang dẫn đường | Mở dải, đọc lõi dẫn đường | Hoa tiêu | 2 | Sau MVP |
| KH09 | Bến Skiff | Đi thẳng tới map nhánh | Hoa tiêu | 2 | Sau MVP |
| KH10 | Phòng nghiên cứu | Nghiên cứu mẫu Driftlife | Nhà sinh học | 2 | Sau MVP |
| KH11 | Khoang sinh quyển | Nuôi Driftlife | Nhà sinh học | 2 | Sau MVP |
| KH12 | Bến 2, bến 3, tiện ích cảng | Thêm bến, tăng tốc ca | Trưởng cảng | 3 | Sau MVP |
| KH13 | Động cơ chính | Tiến độ rời neo, 5 giai đoạn | Có sẵn (hỏng) | 1 đến 5 | MVP giai đoạn 1 |

### Loại tàu và thương nhân

Tên gọi bám vào người đặt. Loose Bolt là tên Tikko đặt cho tàu gom phế liệu, Lamplighter theo hệ tên ánh sáng của các trạm con, Vellune là tên đăng ký của tàu dưới vỏ bọc thương nhân Ilsume. Glasswing gợi sự mong manh của mẫu vật sống Vaeth chở, Iron Keel là cách gọi nặng và thẳng của Dromm, Stayfast gợi chủ trương bám trụ của The Remainers. Backchannel là tên tàu của người buôn tin Nhem, Pilot Light là mật danh The Kindling dùng cho chuyến tàu chuyển tin.
Mã mốc truyện dạng C1.8 theo `cot-truyen.md` mục 2.5.
| ID | Tàu | Ai (tên theo `cot-truyen.md` sơ bộ) | Mở | Nhãn |
|---|---|---|---|---|
| TA01 | Loose Bolt (Tàu gom phế liệu) | Oru, thương nhân Tikko, khách quen đầu tiên | Mốc C1.8 | MVP |
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
- Nhóm hàng chỉ dùng khi sinh lịch (luật 69), từ HC01 tới HC15. Một nhóm gồm một hoặc nhiều ID kiện CGO của gd-items. Mỗi dòng đơn ghi đúng một ID kiện, giá dòng là giá ID đó (luật 23 và luật 30). Mọi ID kiện trong ITEM LIST thuộc đúng một nhóm.
| ID nhóm | Nhóm hàng | ID kiện (gd-items) | Làm từ | Bước trước khi bốc | Mở |
|---|---|---|---|---|---|
| HC01 | Kiện phế liệu | CGO-101, CGO-102 | Phế liệu thô | Đóng kiện | Chương 1, MVP |
| HC02 | Kiện khoáng | CGO-103 | Khoáng thô | Đóng kiện | Chương 1, MVP |
| HC03 | Kiện băng | CGO-104 (thô), CGO-113 (chế) | Băng, khối nước tinh khiết COM-105 | CGO-104 đóng thẳng, CGO-113 chế ở xưởng rồi đóng kiện | Chương 1, MVP. CGO-113 là kiện tinh duy nhất của chương 1 (log 67) |
| HC04 | Kiện linh kiện | CGO-111, CGO-112 | Vật liệu chế COM của xưởng | Chế ở xưởng rồi đóng kiện | Chương 2, Sau MVP |
| HC05 | Kiện mẫu Driftlife | CGO-105 | Mẫu Driftlife đã hạ SMP | Đóng kiện | Chương 1, MVP |
| HC06 | Lồng sinh vật sống | CGO-121 dải Gần (RCP-126 cho LIV-111 tới 113 cỡ S, RCP-128 cho LIV-114, 115 cỡ M), CGO-221, CGO-321. Lồng nhớ loài bên trong: dòng đơn CGO-121 nhận mọi loài dải Gần, giá theo loài bên trong (luật 30) | Mẫu sống LIV | Đưa con vào lồng giao ở máy đóng kiện, 8 giây (RCP-126, RCP-128). Mang nguyên lồng | CGO-121 chương 1, MVP (RCP-128 chương 2). CGO-221 chương 2, CGO-321 chương 3, Sau MVP |
| HC07 | Kiện sản phẩm nuôi | CGO-107, CGO-207, CGO-307 | Sản phẩm nuôi BIO | Đóng kiện | Chương 2, Sau MVP |
| HC08 | Kiện vật tư | CGO-141 | 1 Bình Oxy nhỏ CON-101, 1 Lưới cuộn CON-102 (RCP-127) | Chế vật tiêu hao ở xưởng rồi đóng kiện | Chương 2, Sau MVP |
| HC09 | Bản sao dữ liệu | CGO-131 (sao bằng RCP-141) | Sao từ vật kể chuyện loại dữ liệu STY-101, STY-401 ở khoang liên lạc, vật gốc ở lại trạm | Sao một lần mỗi vật gốc | Chương 3, Sau MVP |
| HC10 | Kiện đồ Trái Đất | CGO-109 (RCP-116) | Đồ cũ của Cradle RES-106 | Đóng kiện | Chương 1, MVP |
| HC11 | Kiện đặc sản Driftlife | CGO-106, CGO-206, CGO-306 | Mẫu đặc sản từng loài SMP (CGO-106: 1 trong SMP-111 tới 115, RCP-124) | Đóng kiện | CGO-106 chương 1, MVP. CGO-206 chương 2, CGO-306 chương 3, Sau MVP |
| HC12 | Kiện tinh dải Giữa | CGO-211, CGO-212, CGO-213 | Vật liệu chế COM dải Giữa | Chế ở xưởng rồi đóng kiện | Chương 2, Sau MVP |
| HC13 | Kiện tinh dải Xa | CGO-311, CGO-312, CGO-313 | Vật liệu chế COM dải Xa | Chế ở xưởng rồi đóng kiện | Chương 3, Sau MVP |
| HC14 | Kiện linh kiện đặc biệt | CGO-411, CGO-511 | Linh kiện Cradle RES-401 (RCP-421), linh kiện Warden RES-305 (RCP-521) | Đóng kiện | CGO-411 chương 4, CGO-511 chương 5, Sau MVP |
| HC15 | Kiện tin mật | CGO-421 | 1 Gói tin mật STY-701 (khoang liên lạc nhận từ mạng lưới, tối đa 1 gói mỗi ngày) và 1 kiện vỏ bọc dải Xa (RCP-422) | Đóng kiện | Chương 4, Sau MVP. Chỉ tàu của mạng lưới (TA11) hỏi |

## 1. Mục đích với người chơi

- Pillar P2 (mang về là để trạm sống lại): mỗi chuyến về là có thứ để sửa, mỗi khoang sửa xong đổi hình mặt cắt trạm và trả một chức năng.
- Pillar P1 kéo dài sang nhà: bảng tàu cho biết hôm nay cần gì, nên quyết định đi dải nào và mang gì về bắt đầu từ cảng.
- Pillar P3: ca cảng có đủ việc cho 4 người nhưng một người vẫn chơi trọn, vì đơn co giãn theo số người và giao một phần vẫn được trả.
- Pillar P4: thương nhân ghé cảng là nơi kể truyện giữa hai nửa ngày, kể cả tàu lạ của gián điệp Maro và Ilsume, người thừa kế Sevra giả danh.
- Cảm giác ca cảng: bận tay có kế hoạch. Người chơi thấy rõ tàu nào sắp đi, kiện nào còn thiếu, tự chọn ưu tiên. Không phải phản xạ thuần.
- 30 giây đầu của ca cảng đầu tiên (chương 1, lịch cố định theo luật 67): Thông dịch viên báo có tàu, TA01 cập bến 1, bảng đơn hiện 2 kiện phế liệu, người chơi chạy tới kho lấy phế liệu, bỏ vào máy đóng kiện, nhận kiện, bốc lên tàu, thấy Tally cộng ngay.

## 2. Luật

### Luật trạm và khoang (K10, K11)

1. Ember có 13 khoang ở bảng Danh mục. Mỗi khoang ở một trong bốn trạng thái: Hỏng, Hoạt động, Đang sự cố, Đang nâng cấp. `MVP` (trừ Đang sự cố)
2. Khoang Hỏng không dùng được chức năng, vẫn đi qua được. `MVP`
3. Sửa khoang: mọi vật liệu trong danh sách sửa phải nằm trong kho, người chơi đứng ở khoang và giữ phím sửa trong thời gian sửa. Bắt đầu giữ phím thì vật liệu bị trừ khỏi kho. Thả phím giữa chừng thì tiến độ giữ nguyên, vật liệu không hoàn lại, giữ phím lại thì làm tiếp. `MVP`
4. Sửa xong thì khoang sang Hoạt động cấp 1, mặt cắt trạm đổi hình khoang đó và hiện người vớt phụ trách (nếu có). `MVP`
5. Nâng cấp khoang lên cấp 2 và cấp 3 theo cùng cách sửa, cần vật liệu và Tally theo bảng của gd-economy. Trong lúc nâng cấp khoang vẫn dùng được. ID nâng cấp là ID khoang cộng cấp: KH05-C2 là xưởng cấp 2, KH07-C2 là kệ kiện cấp 2 (mua ở shop), KH12-KP là kệ kiện phụ, KHxx-C3 là cấp 3 của khoang xx. `MVP` cho kệ kiện cấp 2 (mua ở shop, chương 1). Xưởng cấp 2 mở ở chương 2, `Sau MVP`. Còn lại `Sau MVP`
6. Khoang neo là khoang đầu tiên sửa được. Trước khi khoang neo Hoạt động, chỉ cửa khí, kho, buồng ngủ đông dùng được, và Ember trôi chậm (hình nền trôi, không ảnh hưởng luật). Sửa xong khoang neo thì Ember đứng yên tới hết game. `MVP`
7. Một khoang chỉ sửa được khi chương của khoang đã mở (bảng 2.6). Khoang có người vớt phụ trách (xưởng, khoang liên lạc, cảng, khoang dẫn đường, bến Skiff, phòng nghiên cứu, khoang sinh quyển, bến 2, bến 3) chỉ sửa được sau khi người vớt đó tỉnh và giao quest (luật 15). Khoang chưa sửa được hiện khung tối và một dòng gợi ý truyện. `MVP`
8. Kho không giới hạn số lượng. Đồ trong túi đồ tự vào kho khi người chơi qua cửa khí về trạm. `MVP`
9. Trạm không xấu đi theo thời gian: khoang Hoạt động không tự hỏng lại. Chỉ sự cố (từ chương 3) làm khoang tạm Đang sự cố trong ca cảng. `MVP`

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

### Luật ca cảng (K13)

18. Ca cảng chỉ có khi khoang liên lạc và bến 1 đều Hoạt động. Trước đó pha ca cảng tự bỏ qua. `MVP`
19. Ca bắt đầu khi một người chơi tương tác với bảng tàu ở khoang liên lạc và chọn Mở ca, theo điều kiện ở luật 64 tới 66. Chọn Bỏ ca thì ca bỏ qua, không phạt, tàu hôm đó không tới. `MVP`
20. Lịch tàu của ngày sinh ra lúc bắt đầu ngày và hiện ở bảng tàu từ pha chuẩn bị. Lịch gồm cho mỗi tàu: loại tàu, giờ đến trong ca, danh sách hàng (ID kiện và kiện gốc), thời gian lưu bến. Loại tàu, giờ đến, ID kiện và kiện gốc không đổi trong ngày. Số kiện mỗi dòng bằng kiện gốc nhân quy mô đơn theo N, với N là số người đang online: bảng tàu tính lại mỗi khi số người online đổi, và chốt lúc Mở ca (luật 64). Cách sinh lịch ở luật 67 tới 70. Tàu có điều kiện truyện (TA03 cho mốc C2.3, TA06 cho mốc C3.2, TA08 hai lần cập bến, TA11 cho mốc C4.7 và C5.2 theo bảng 2.4) có trong lịch mỗi ngày tới khi điều kiện truyện đó xong. `MVP`
21. Mỗi bến chứa đúng một tàu. Tàu tới giờ đến mà bến trống thì cập bến ngay. Bến đang có tàu thì tàu mới chờ ngoài, hiện ở mép màn hình kèm đồng hồ chờ ngoài. Hết đồng hồ chờ ngoài thì tàu bỏ đi, đơn đó tính là trượt. `MVP`
22. Tàu cập bến thì đồng hồ lưu bến bắt đầu chạy. Hết đồng hồ lưu bến thì tàu rời. `MVP`
23. Danh sách hàng gồm 1 đến 4 dòng. Mỗi dòng là một ID kiện và số kiện. Một đơn không có hai dòng cùng ID kiện. Ở chương 1, dòng đơn chỉ gồm kiện thô (CGO-101 tới CGO-105, CGO-109), kiện đặc sản CGO-106 và lồng sống CGO-121, mỗi ca có tối đa một dòng kiện tinh, và chương 1 chỉ có đúng một loại kiện tinh là CGO-113 (log 67, gd-items chọn) và dòng đó có kiện gốc 1 (nhân quy mô đơn theo N như mọi dòng). Kiện tinh có trong đơn TA01 từ khi xưởng Hoạt động, để chương 1 có bước chế thêm (K13). Lý do: kiện tinh qua xưởng là nút cổ chai của ca. `MVP`
24. Kiện có từ máy đóng kiện: người chơi lấy hàng ở kệ kho bằng tương tác, mỗi lần lấy đúng số đơn vị đầu vào của một kiện theo công thức đóng kiện của gd-items (RCP-111 tới RCP-127), bỏ vào máy. Máy chạy trong thời gian của công thức (5 đến 8 giây) rồi nhả ra một kiện. Một máy chạy một kiện một lúc. Đưa Driftlife sống vào lồng giao (HC06) cũng làm ở máy đóng kiện. `MVP`
25. Kiện cần chế thêm (CGO-113, HC04, HC08, HC12, HC13) phải chế vật liệu ở xưởng trước, ra hàng đã chế, rồi mới đóng kiện. Xưởng chạy một mẻ một lúc và giữ thêm mẻ chờ trong hàng đợi chế. Mẻ chạy theo thời gian thực kể cả khi người chơi ra chuyến. Mẻ còn trong hàng đợi lúc ngủ thì xong khi sang ngày (chế qua đêm). `MVP` cho CGO-113
26. Máy nhả kiện lên kệ kiện cạnh máy. Người chơi lấy kiện từ kệ để mang. Kệ kiện có sức chứa giới hạn. Kệ đầy thì máy giữ kiện trong máy, không nhả, cho tới khi kệ có chỗ hoặc người chơi lấy tay. `MVP`
27. Người chơi được đóng kiện trước ngoài ca theo các luật 53 tới 58. Kiện và lồng trên kệ giữ qua ngày, không hỏng, Driftlife trong lồng không chết (K17). `MVP`
28. Mỗi người chơi mang một kiện hoặc một chồng hàng thô tối đa bằng số đơn vị của một kiện. Kiện có 3 cỡ Nhỏ, Vừa, Lớn (cỡ do gd-items gán cho từng ID kiện). Mang kiện thì tốc độ chạy giảm theo cỡ kiện ở bảng tham số. Nhiều người cùng giữ một kiện Lớn thì mỗi người thêm cộng 15 điểm phần trăm, trần 95%, cùng luật kéo chung của `nguoi-choi.md`. `MVP`
29. Bốc kiện: người chơi mang kiện tới cửa bến đang có tàu và nhấn tương tác. Thứ tự xử lý ở mục "Thứ tự xử lý khi bốc kiện". `MVP`
30. Giá một kiện là giá của ID kiện do gd-economy đặt (`kinh-te-tien-trinh.md` mục 3.1). Lồng sinh vật sống tính giá theo loài bên trong theo cùng công thức giá của gd-economy, bảng tàu hiện giá loài rẻ nhất kèm chữ "từ". Mỗi kiện tàu nhận được trả Tally ngay theo giá đó. `MVP`
31. Đơn đủ khi mọi dòng bắt buộc đã đủ số kiện. Tổng giá đơn là tổng giá các kiện đã nhận ở các dòng bắt buộc, thưởng đủ đơn và thưởng nhanh tính trên tổng đó. Đơn đủ thì cộng thưởng đủ đơn, cộng điểm cảng, và tàu rời sau 3 giây. Đơn đủ khi đồng hồ lưu bến còn trên ngưỡng nhanh thì cộng thêm thưởng nhanh và thêm điểm cảng. `MVP`
32. Tàu rời khi đơn chưa đủ (hết giờ lưu bến hoặc hết giờ ca) là đơn trượt. Đơn trượt giữ nguyên Tally của các kiện đã bốc, không có thưởng, không có điểm cảng, không trừ gì. Kiện chưa bốc ở lại kệ hoặc trên tay. `MVP`
33. Tàu không bán gì trong ca. Mua hàng chỉ ở shop của khoang liên lạc vào cuối ngày (K20). `MVP`
34. Ca kết thúc khi tàu cuối cùng của lịch đã rời hoặc khi hết giờ ca. Hết giờ ca thì mọi tàu còn ở bến rời ngay và tàu chờ ngoài bỏ đi, áp luật 32. `MVP`
35. Cuối ca hiện bảng kết ca: số đơn đủ, đơn trượt, Tally nhận, điểm cảng nhận, lời thoại một thương nhân. Bảng kết ca không chặn người chơi khác trong co-op. Mốc truyện xảy ra trong ca (C1.8, C2.3, C3.3, C3.4, C4.7, C5.2) chỉ hiện lời bong bóng trong ca, cảnh phát ở pha Cuối ngày, đồng hồ ca không dừng. `MVP`
36. Thời gian trong ca không dừng khi mở menu nếu có từ 2 người (C7). Chơi một mình thì tạm dừng được. `MVP`

Thắng khi (ca): mọi đơn của lịch đủ. Không có trạng thái thua ca. Ca tệ nhất là mọi đơn trượt: người chơi vẫn giữ Tally của kiện đã bốc, giữ mọi hàng chưa bốc, Hạng cảng không đổi.
Cam kết với người chơi: không mất hàng vì trượt đơn, không trừ Tally, không giảm Hạng cảng, kiện đóng sẵn không hỏng, bảng tàu không nói dối (trừ TA06 có luật riêng ghi rõ).

### Luật loại tàu (K13, chi tiết từng loại ở bảng 2.4)

37. Mỗi loại tàu khác nhau ở tối đa ba trục: thời gian lưu bến, kiểu danh sách hàng, một luật riêng. Không loại nào chỉ khác nhau ở số. `MVP`
38. TA08 tàu lạ không thuộc lịch ngẫu nhiên. TA08 cập bến đúng 2 lần, mỗi ngày tối đa 1 lần. Lần 1 vào lịch từ ngày kế tiếp sau khi bến 2 (KH12) Hoạt động, lần cập bến này hoàn thành mốc C3.3, đưa đơn bình thường 1 đến 2 dòng. Lần 2 vào lịch từ ngày kế tiếp sau mốc C3.4, hỏi mua bản sao dữ liệu (HC09) của nhật ký trạm và lời thoại dò hỏi về các thương hội Sennari ghé Ember. Sau mốc C3.8 TA08 không ghé nữa. Truyện đếm lần cập bến, giao hay không giao đều không đổi truyện. Bán bản sao không mất vật gốc và không mất manh mối. `Sau MVP`

### Luật Hạng cảng (K15)

39. Hạng cảng là một thang duy nhất từ hạng 1 tới hạng 8, chung cả nhóm. `MVP` tới hạng 3
40. Điểm cảng chỉ đến từ đơn đủ và thưởng nhanh. Điểm đơn đủ bằng 2 nhân (N + 1) chia 2, làm tròn lên tích. Điểm nhanh bằng 1 nhân (N + 1) chia 2, làm tròn lên tích. N là số người lúc mở ca. Kết quả: 1 người 2 và 1, 2 người 3 và 2, 3 người 4 và 2, 4 người 5 và 3. Điểm cảng không bao giờ giảm. `MVP`
41. Đủ điểm ngưỡng thì lên hạng ngay sau bảng kết ca. Mỗi chương có trần hạng: đủ điểm nhưng chạm trần thì điểm vẫn cộng dồn, lên hạng khi chương sau mở. `MVP`
42. Mỗi hạng mở đúng các thứ ở bảng 2.5: loại tàu, đơn giá trị cao, mục shop. `MVP` tới hạng 3

### Luật sự cố (K14)

43. Trước chương 3 không có sự cố. Sự cố bắt đầu từ ca cảng kế tiếp sau lần đầu TA08 cập bến (lý do truyện: thiết bị Maro để lại làm trạm trục trặc, theo gd-story). Từ đó mỗi ca có số sự cố theo bảng tham số, giờ xảy ra ngẫu nhiên trong ca nhưng không trong 30 giây đầu ca. `Sau MVP`
44. Sự cố làm một khoang hoặc một máy sang Đang sự cố. Xử lý sự cố bằng thao tác ở bảng 2.8. Xử lý xong thì khoang về trạng thái trước đó. `Sau MVP`
45. Sự cố bỏ mặc chỉ gây hậu quả trong ca đó. Hết ca thì mọi sự cố tự hết, khoang về trạng thái trước đó, không có hư hại lâu dài, không mất hàng. `Sau MVP`
46. Driftlife sổng chỉ xảy ra khi khoang sinh quyển có Driftlife nuôi. Loài sổng là một loài đang nuôi. Hàng con sổng ăn không mất: hàng bị giữ trong con vật, tóm được thì hàng về chỗ cũ, hết ca thì hàng về kho (kiện về kệ). `Sau MVP`

### Luật nuôi Driftlife (K16)

47. Khoang sinh quyển mở ở chương 2 khi Nhà sinh học tỉnh và khoang được sửa. Khoang có số ô nuôi theo cấp khoang, mỗi ô chứa một con. `Sau MVP`
48. Thả Driftlife sống vào ô trống bằng cách mang lồng tới khoang. Chỉ loài gd-combat ghi "nuôi được" mới thả được. `Sau MVP`
49. Cho ăn là bỏ 1 thức ăn đúng dải (FED-101, FED-201, FED-301, làm ở khoang sinh quyển từ mô sinh học) cho mỗi con. Mỗi ngày, mỗi con trưởng thành được cho ăn thì ra một sản phẩm nuôi (BIO của loài đó) vào đầu ngày kế tiếp. Không cho ăn thì không ra sản phẩm, con vật không chết, không yếu đi. Sản phẩm nuôi và Driftlife nuôi chỉ ra Tally qua dòng HC06, HC07, HC11 của đơn, nên lợi từ nuôi mỗi ngày bị chặn bởi số dòng đó trong lịch. `Sau MVP`
50. Hai con cùng loài cùng trưởng thành và được cho ăn trong ngày thì đầu ngày kế tiếp sinh một con non nếu khoang còn ô trống. Một cặp sinh tối đa một con non mỗi ngày. Con non trưởng thành sau số ngày theo tham số. `Sau MVP`
51. Lấy Driftlife trưởng thành ra khỏi ô bỏ vào lồng thì dùng được như Driftlife bắt sống: giao đơn HC06, nghiên cứu, thả ra ngoài. Lồng con nuôi có giá bằng 0,5 lần lồng bắt ngoài chuyến cùng loài, mỗi loài tối đa 1 lồng con nuôi mỗi ngày (luật M5 của `vat-pham.md`). Con non chưa trưởng thành không lấy ra được. `Sau MVP`
52. Nâng cấp khoang sinh quyển thêm ô. Môi trường cho loài dải Xa có ở cấp 3, riêng khoang sinh quyển được nâng cấp 3 từ chương 3 (bảng 2.6). Loài dải Xa không thả được vào khoang chưa có môi trường đó. `Sau MVP`

### Luật đóng kiện trước (C9)

53. Đóng kiện trước là dùng máy đóng kiện và xưởng ngoài ca cảng. Làm được ở pha chuẩn bị, giữa hai chuyến, trong chuyến khi người đó đang ở trạm, và ở cuối ngày. `MVP`
54. Người đang ở trạm trong lúc đồng đội còn ở ngoài (về sớm, bị kéo về, hoặc chọn ở lại theo C5) không ra lại trong chuyến đó (C9) và được làm mọi việc trạm: đóng kiện trước, chế ở xưởng, sửa khoang, chăm khoang nuôi. Người đó xem vị trí đồng đội trên bản đồ ở khoang liên lạc (hiển thị do gd-ux). `MVP`
55. Chơi một mình áp cùng luật: giữa hai chuyến và trước ca, người chơi đóng kiện trước bằng hàng đã có trong kho. `MVP`
56. Đóng kiện trước chỉ dùng hàng đã nằm trong kho. Hàng trong túi đồ của đồng đội còn ở ngoài chưa dùng được cho tới khi người đó về qua cửa khí (K3). `MVP`
57. Kiện đóng trước không gắn với tàu nào. Kiện nằm trên kệ kiện và dùng được cho bất kỳ dòng đơn nào cùng ID kiện trong ca. Bảng tàu ở khoang liên lạc và màn hình máy đóng kiện cùng hiện đơn hôm nay kèm số kiện đã có trên kệ, để người đóng trước biết cần đóng gì. `MVP`
58. Trần của đóng kiện trước là sức chứa kệ kiện (luật 26). Kệ đầy thì máy giữ kiện trong máy, người chơi giữ thêm một kiện trên tay. Không có thưởng riêng cho kiện đóng trước, thưởng là ca nhẹ hơn. `MVP`

### Luật buồng ngủ đông và cửa khí (KH01, KH02, C5, K22, K23)

59. Sang ngày mới: mỗi người vào chỗ ngủ của mình (luật 62) là xác nhận sẵn sàng. Khi mọi người đang online đã xác nhận thì cả nhóm ngủ, lưu, sang ngày mới. Chơi một mình thì vào buồng là ngủ ngay. `MVP`
60. Từ lúc người đầu tiên vào buồng, người chưa vào có 30 giây (K23), đồng hồ hiện trên HUD của mọi người. Hết 30 giây, người chưa xác nhận tự tính sẵn sàng và nhân vật tự về buồng. Người đã vào buồng được ra lại để hủy xác nhận, đồng hồ không dừng. `MVP`
61. Cửa khí: người chưa trả lời xác nhận ra chuyến trong 30 giây kể từ khi người đầu tiên xác nhận thì tự tính là ở lại trạm (C5), chuyến bắt đầu với những người đã xác nhận. Người tự tính ở lại áp luật 54. Người đã xác nhận được hủy xác nhận trước khi chuyến bắt đầu. `MVP`
62. KH01 có 4 buồng ngủ đông. Lúc tạo thế giới, N buồng chạy cho N người tỉnh, các buồng còn lại hỏng và người trong đó đã chết, không sửa được (B7, `cot-truyen.md`). Người chơi vào sau tới trong buồng ngủ đông của trạm khác, buồng đó đặt ở khu hồi sức cạnh KH01 và là chỗ ngủ của người đó. Người vào sau không lấp buồng tắt. Khu hồi sức không giới hạn số buồng. `MVP`
63. Cửa khí nạp đầy Oxy cho người về trạm khi chuyến của người đó kết thúc. Một ngày có tối đa 2 chuyến, đi bằng Skiff cũng tính một chuyến. Sau chuyến thứ 2, hoặc khi ca cảng đã mở hay đã bỏ, cửa khí khóa tới ngày mới (K22). `MVP`

### Luật mở ca và sinh lịch tàu (chi tiết luật 19, 20)

64. Mở ca chỉ được khi không còn ai ở ngoài chuyến. N của ca là số người online lúc mở ca, số kiện mỗi dòng chốt theo N đó và không đổi tới hết ca (khớp `ky-thuat.md` luật 12). `MVP`
65. Mỗi ngày có đúng một ca cảng. Ca đã kết thúc hoặc đã bỏ thì không mở lại trong ngày. Mở ca hoặc Bỏ ca thì cửa khí khóa tới ngày mới (luật 63), vì ca cảng là pha sau các chuyến (K22). `MVP`
66. Khi có từ 2 người online: Bỏ ca, và Mở ca lúc nhóm chưa đi đủ 2 chuyến, cần mọi người online xác nhận, không trả lời trong 30 giây tính là đồng ý (cùng cách K23). Mở ca sau khi đã đi đủ 2 chuyến không cần xác nhận. `MVP`
67. Ca cảng đầu tiên của thế giới có lịch cố định: 1 tàu TA01, lưu bến dài, giờ đến 0, 1 dòng CGO-101 với số kiện 2 nhân quy mô đơn theo N, làm tròn lên. Ca này tính Tally và điểm cảng như mọi ca. Từ ca thứ hai lịch sinh theo luật 68 tới 70. `MVP`
68. Cấu hình lịch (số tàu, giãn cách, kiện gốc mỗi dòng, hệ số kiện) lấy theo chương và số bến đang Hoạt động, ở bảng "Cấu hình lịch" mục 3. Chương 3 trở đi mà bến 2 chưa sửa xong thì dùng cấu hình 1 bến. `MVP` cho chương 1
69. Chọn tàu cho từng chỗ trong lịch: chỗ đầu dành cho tàu có điều kiện truyện đang chờ, tối đa 2 chỗ mỗi ca, theo thứ tự mốc truyện. Chỗ còn lại rút từ túi trộn: mỗi loại tàu đã mở (theo chương, Hạng cảng, mốc truyện, không gồm TA08) góp số thẻ bằng trọng số ở bảng 2.4, rút không hoàn lại, hết túi thì trộn lại túi mới. Số dòng rút đều trong khoảng của loại tàu. Mỗi dòng rút đều một nhóm trong danh sách nhóm của tàu, rồi rút đều một ID kiện của nhóm đó thuộc dải đã mở, không trùng ID trong đơn. Kiện gốc mỗi dòng rút đều trong khoảng của cấu hình, trừ dòng kiện cần chế ở xưởng (CGO-111 tới 113, HC04, HC08, HC12, HC13) và dòng lồng sống (HC06) luôn có kiện gốc 1. Số kiện hiển thị và số kiện chốt lúc Mở ca bằng kiện gốc nhân quy mô đơn theo N, làm tròn lên (luật 20). Riêng dòng HC15 (kiện tin mật) luôn đúng 1 kiện ở mọi N, vì Gói tin mật STY-701 chỉ có 1 gói mỗi ngày. Sau cùng áp ràng buộc luật 23 và luật CGO-121 của TA01. `MVP`
70. Giờ đến của tàu thứ i, với i từ 0 theo thứ tự trong lịch, bằng i nhân giãn cách cộng lệch ngẫu nhiên từ 0 tới 10 giây. Nếu giờ đến cộng lưu bến của tàu vượt thời lượng ca tối đa thì giờ đến kéo về bằng thời lượng ca tối đa trừ lưu bến. Hai tàu cùng giờ đến thì xếp theo thứ tự trong lịch. `MVP`

### Trạng thái và chuyển tiếp

Khoang:
| Trạng thái | Vào khi | Ra khi | Hành vi | Người chơi thấy gì |
|---|---|---|---|---|
| Hỏng | Bắt đầu game | Sửa xong | Không có chức năng, đi qua được | Khoang tối, mảnh vỡ, khung đỏ khi đứng gần kèm danh sách vật liệu |
| Hoạt động | Sửa xong, xử lý xong sự cố, hết ca | Bắt đầu nâng cấp, có sự cố | Đủ chức năng theo cấp | Khoang sáng, người vớt đứng làm việc |
| Đang nâng cấp | Giữ phím nâng cấp lần đầu | Nâng cấp xong | Vẫn đủ chức năng cấp hiện tại | Giàn giáo, thanh tiến độ |
| Đang sự cố | Sự cố xảy ra trong ca | Xử lý xong hoặc hết ca | Theo bảng 2.8 | Đèn đỏ nháy, biểu tượng sự cố trên mặt cắt |

Tàu:
| Trạng thái | Vào khi | Ra khi | Hành vi | Người chơi thấy gì |
|---|---|---|---|---|
| Trong lịch | Lịch sinh ra đầu ngày | Tới giờ đến | Chưa có trong ca | Dòng trên bảng tàu |
| Chờ ngoài | Tới giờ đến, mọi bến bận | Có bến trống (sang Ở bến), hết đồng hồ chờ ngoài (sang Bỏ đi) | Đồng hồ chờ ngoài chạy | Tàu ở mép màn hình, vòng đồng hồ |
| Ở bến | Cập bến | Đơn đủ (sang Rời đủ), hết lưu bến hoặc hết ca (sang Rời trượt) | Nhận kiện, đồng hồ lưu bến chạy | Tàu ở cửa bến, bảng đơn trên cửa bến |
| Rời đủ | Đơn đủ, chờ 3 giây | Tàu khuất | Không nhận kiện | Thương nhân vẫy, Tally và điểm cảng bay lên |
| Rời trượt | Hết lưu bến hoặc hết ca khi đơn chưa đủ | Tàu khuất | Không nhận kiện | Thương nhân lắc đầu, dòng thiếu tô xám |
| Bỏ đi | Hết đồng hồ chờ ngoài | Tàu khuất | Không cập bến | Tàu quay đầu ở mép màn hình |

Đơn: Mở (có dòng chưa đủ) -> Đủ (mọi dòng đủ) hoặc Trượt (tàu rời khi còn dòng chưa đủ). Không có trạng thái khác.

### Thứ tự xử lý khi bốc kiện

1. Kiểm cửa bến có tàu ở trạng thái Ở bến. Không có thì không nhận, kiện ở lại tay.
2. Kiểm ID kiện có dòng nào trong đơn còn thiếu. Không có thì tàu từ chối, kiện ở lại tay, hiện lời thoại từ chối.
3. Nhận kiện, trừ một vào dòng đó, cộng Tally của kiện.
4. Kiểm đơn đủ. Đủ thì cộng thưởng đủ đơn, kiểm ngưỡng nhanh, cộng điểm cảng, chuyển tàu sang Rời đủ.
5. Hai người bốc cùng khung hình vào cùng một dòng chỉ còn thiếu 1: kiện tới máy chủ trước được nhận, kiện sau áp bước 2.

### 2.4 Bảng loại tàu

Trọng số dùng cho túi trộn ở luật 69. Tàu chỉ vào túi khi đã mở theo cột Mở.
| ID | Lưu bến | Kiểu danh sách (số dòng, nhóm) | Luật riêng | Trọng số | Mở | Nhãn |
|---|---|---|---|---|---|---|
| TA01 | Dài | 1 đến 2 dòng: HC01, HC02, HC10, HC06 (chỉ CGO-121), CGO-113 (kiện tinh duy nhất chương 1, từ khi xưởng Hoạt động, theo trần luật 23). Từ Hạng 3 thêm HC05 và HC11 (chỉ CGO-106). Từ ngày có Súng lưới, mỗi lịch có ít nhất một dòng CGO-121 ở một tàu TA01 | Hay hỏi HC10, lời thoại Tikko mê đồ Trái Đất | 3 | Chương 1 | MVP |
| TA02 | Ngắn | 1 dòng: HC01, HC02, HC10, CGO-104 | Thưởng nhanh gấp đôi | 1 | Chương 1, Hạng 2 | MVP |
| TA03 | Vừa | 2 dòng: HC03, HC07, HC08. Thêm 1 dòng tùy chọn | Dòng tùy chọn: 1 ID rút từ cùng nhóm của tàu, kiện gốc 1 nhân quy mô đơn. Không tính vào đơn đủ và tổng giá đơn, kiện giao vào dòng đó trả gấp rưỡi | 2 | Sau mốc C2.2 | Sau MVP |
| TA04 | Dài | 2 dòng: HC04, HC12 | 15 giây đầu là nghi lễ chào, chưa nhận kiện. Đồng hồ lưu bến vẫn chạy | 2 | Mốc C2.7. Sau mốc C3.8 ra khỏi túi trộn, không ghé nữa (Sevra ở ẩn trên Ember) | Sau MVP |
| TA05 | Vừa | 1 đến 2 dòng: HC06, HC11 | Chỉ hỏi Driftlife sống và đặc sản (loại kiện đắt), chê kiện mẫu đã hạ qua lời thoại | 2 | Mốc C2.4 | Sau MVP |
| TA06 | Vừa | 2 dòng: HC02, HC12, HC13 | Một dòng chỉ hiện gợi ý (ví dụ "thứ lạnh") thay vì tên ID. Giao đúng ID thì dòng lộ tên. Bảng tàu ghi rõ có dòng ẩn | 2, từ chương 4 là 3 | Mốc C3.1 | Sau MVP |
| TA07 | Vừa | 2 dòng: HC06, HC08, HC11, HC14 | Hỏi thêm về vị trí xác trạm qua lời thoại, không đổi luật | 2 | Mốc C3.5 | Sau MVP |
| TA08 | Dài | Lần 1: 1 đến 2 dòng từ HC01 tới HC14 đã mở (không gồm HC15). Lần 2: 1 dòng HC09 | Luật 38. Không vào túi trộn | Không | Mốc C3.3 | Sau MVP |
| TA09 | Ngắn | 2 đến 3 dòng: HC04, HC12, HC13, HC14 | Chỉ hỏi kiện tinh (loại kiện đắt), không có thưởng nhanh | 1, từ chương 4 là 2 | Hạng 6 | Sau MVP |
| TA10 | Vừa | 2 dòng: 1 dòng HC09, 1 dòng HC12 hoặc HC13 | Mua bản sao dữ liệu giá vừa. Lời thoại kể tin trên The Lattice, gợi manh mối hành lang an toàn | 1 | Mốc C3.1 | Sau MVP |
| TA11 | Vừa | 2 dòng: 1 dòng HC15 đúng 1 kiện ở mọi số người (không nhân quy mô đơn, luật 69) và 1 dòng HC13 kiện gốc 1 | Tàu có điều kiện truyện, không vào túi trộn. Có trong lịch mỗi ngày từ ngày kế tiếp sau mốc C3.8 tới khi mốc C5.2 xong, và luôn có trong lịch ngày đầu chương 4 và ngày đầu chương 5. Giao đủ dòng HC15 là một đơn tin mật tới nơi. Mốc C4.7 cần ít nhất 1 đơn, mốc C5.2 cần tổng 2 đơn cộng dồn từ chương 4 (`cot-truyen.md`). Kiện tin mật không sinh thêm Tally so với kiện vỏ bọc (log 87) | Không | Ngày kế tiếp sau C3.8 | Sau MVP |

### 2.5 Bảng Hạng cảng

| Hạng | Trần ở chương | Mở | Nhãn |
|---|---|---|---|
| 1 | 1 | TA01, bến 1, shop danh mục cơ bản | MVP |
| 2 | 1 | TA02, kệ kiện cấp 2 ở shop | MVP |
| 3 | 1 | Đơn TA01 có dòng HC05, mục shop ENG-101 | MVP |
| 4 | 2 | TA03 thêm dòng tùy chọn, mục shop bản thiết kế dải Giữa | Sau MVP |
| 5 | 2 | Đơn có dòng HC06 và HC07 (loại kiện đắt), mục shop ENG-102 | Sau MVP |
| 6 | 3 | TA09, mục shop tiện ích cảng | Sau MVP |
| 7 | 3 | Đơn TA06 và TA10 có dòng HC13 (kiện tinh dải Xa), mục shop ENG-103 | Sau MVP |
| 8 | 4 | Mục shop ENG-104, đơn có nhiều dòng kiện tinh dải Xa | Sau MVP |

Trần ở chương nghĩa là hạng đó đạt được sớm nhất ở chương ghi trong cột. Chương 5 không mở hạng mới, đúng mạch truyện thương nhân thưa dần.

### 2.6 Thứ tự mở khoang theo chương

| Chương | Khoang sửa được | Người vớt | Giai đoạn động cơ | Nhãn |
|---|---|---|---|---|
| 1 | Khoang neo, kho cấp 2, xưởng, khoang liên lạc, cảng bến 1 | Kỹ sư, Thông dịch viên | 1 | MVP |
| 2 | Khoang dẫn đường, bến Skiff, phòng nghiên cứu, khoang sinh quyển cấp 1 và 2, xưởng cấp 2 | Hoa tiêu, Nhà sinh học | 2 | Sau MVP |
| 3 | Bến 2, tiện ích cảng, khoang sinh quyển cấp 3 (môi trường dải Xa) | Trưởng cảng | 3 | Sau MVP |
| 4 | Bến 3, kệ kiện phụ, cấp 3 các khoang còn lại | Không | 4 | Sau MVP |
| 5 | Không có khoang mới | Không | 5 | Sau MVP |

### 2.6b Sơ đồ mặt cắt

Mặt cắt ngang 3 tầng, đọc từ trái sang phải. Hai thang dọc ở cột trái và cột giữa nối các tầng. Bến nằm ở mép phải để tàu cập từ ngoài màn hình.

| Tầng | Cột 1 | Cột 2 | Cột 3 | Cột 4 | Mép phải |
|---|---|---|---|---|---|
| Trên | Khoang dẫn đường | Khoang liên lạc | Phòng nghiên cứu | Khoang sinh quyển | Bến 2 |
| Giữa | Buồng ngủ đông và khu hồi sức | Xưởng | Kho | Máy đóng kiện và kệ kiện | Bến 1 |
| Dưới | Cửa khí | Khoang neo | Động cơ chính | Bến Skiff | Bến 3 |

- Ý đồ: kho, máy đóng kiện, bến 1 cùng tầng giữa và liền nhau để ca chương 1 có đường ngắn. Xưởng cách kho một ô nên hàng cần chế thêm tốn đường hơn. Bến 2 và bến 3 khác tầng, cần thang, là nguồn khó mới ở chương 3 và 4. Kích thước ô và tỉ lệ do gd-world và art quyết.

### 2.6c Vật liệu sửa khoang theo nhóm

Số lượng do gd-economy đặt, bảng ID đầy đủ ở `vat-pham.md` mục 2.7. Khoang neo và xưởng chỉ dùng tài nguyên thô vì chưa có xưởng thì chưa chế được COM. Nguyên tắc: khoang của chương nào dùng tài nguyên của dải mở ở chương đó, để mỗi dải mới có chỗ tiêu nhìn thấy trên trạm (P2).
| Khoang | Nhóm vật liệu | Có phần mua ở shop | Nhãn |
|---|---|---|---|
| Khoang neo | Phế liệu dải Gần, linh kiện | Không | MVP |
| Kho cấp 2 | Phế liệu dải Gần, khoáng dải Gần | Không | MVP |
| Xưởng | Phế liệu, khoáng, linh kiện dải Gần | Không | MVP |
| Khoang liên lạc | Linh kiện, khoáng dải Gần | Không | MVP |
| Cảng bến 1, máy đóng kiện, kệ kiện | Phế liệu, linh kiện dải Gần | Không | MVP |
| Khoang dẫn đường, bến Skiff | Linh kiện, khoáng dải Giữa, mảnh lõi dẫn đường, hạch hoặc mẫu boss BS-1 (SMP-191, SMP-192) | Không | Sau MVP |
| Phòng nghiên cứu, khoang sinh quyển | Băng, khoáng dải Giữa, mẫu Driftlife | Không | Sau MVP |
| Bến 2, bến 3, tiện ích cảng | Phế liệu, khoáng dải Xa, linh kiện | Bản thiết kế tiện ích | Sau MVP |
| Động cơ chính giai đoạn 1 đến 5 | Tài nguyên dải mới của chương, giai đoạn 1 thêm 1 hạch hoặc 1 mẫu boss BS-1 (SMP-191 hoặc SMP-192), linh kiện Warden ở giai đoạn 4 và 5 | ENG-101 tới ENG-104 ở giai đoạn 1 tới 4. ENG-105 chế, không mua | MVP giai đoạn 1 |

### 2.7 Người vớt và tính năng lớn dần

| Người vớt | Khoang | Tính năng khi mở | Lớn dần theo cấp khoang và chương | Nhãn |
|---|---|---|---|---|
| Kỹ sư | Xưởng | Chế dụng cụ cơ bản, chế khối nước tinh khiết COM-105 cho CGO-113, nâng cấp bộ đồ bậc 1 | Cấp 2 (chương 2): chế 2 mẻ song song, bậc 2. Cấp 3: bậc cao nhất, chế HC08 | MVP cấp 1 |
| Thông dịch viên | Khoang liên lạc, cảng | Bảng tàu, ca cảng, shop | Chương 2: gọi xuồng Lantern, mở TA04, TA05. Chương 3: hiểu ngôn ngữ Veyl Waypost, mở TA06, TA07, TA10, dịch lời tàu lạ. Chương 4: liên lạc với The Kindling, nhận Gói tin mật STY-701 mỗi ngày | MVP chương 1 |
| Hoa tiêu | Khoang dẫn đường, bến Skiff | Mở dải Xa (dải Giữa đã mở khi xong chương 1), Skiff tới map nhánh đã tìm ra | Mỗi lõi dẫn đường đọc được mở một map nhánh hoặc một dải | Sau MVP |
| Nhà sinh học (Amara Okafor) | Phòng nghiên cứu, khoang sinh quyển | Tới bằng xuồng TA03 sau ca đầu tiên giao đủ đơn TA03 (C2.3). Nghiên cứu mẫu, nuôi Driftlife | Cấp 2: thêm ô, cấp 3: môi trường dải Xa. Mốc chương 3: cú lật Driftlife | Sau MVP |
| Trưởng cảng (Yusuf Demir) | Bến 2, bến 3, tiện ích cảng | Về bằng Skiff sau ca đầu tiên có TA06 cập bến (C3.2). Bến 2 | Tiện ích: băng chuyền kho tới máy đóng kiện, máy đóng kiện thứ hai, bến 3 ở chương 4, kệ kiện phụ 4 chỗ cạnh bến 2 và bến 3 (đặt kiện đóng trước sát bến xa) | Sau MVP |

### 2.8 Bảng sự cố

| Sự cố | Ảnh hưởng | Xử lý | Bỏ mặc thì | Từ chương |
|---|---|---|---|---|
| Rò khí | Điểm rò ở một khoang trên đường từ kho tới bến đang có tàu (kho, ô máy đóng kiện, hoặc ô cạnh bến). Cửa ngăn khí của khoang đó đóng mở chậm: mỗi lần đi qua mất thêm 3 giây | Giữ phím vá ở điểm rò, tiêu 1 Keo vá CON-104. Kho hết Keo vá thì vẫn vá được nhưng thời gian xử lý gấp 3 | Đi qua chậm tới hết ca | 3 |
| Chập điện | Một máy đóng kiện hoặc xưởng ngừng chạy, mẻ đang chạy dừng lại, không mất | Giữ phím ở tủ điện của khoang đó, tiêu 1 Cầu chì dự phòng CON-105. Kho hết Cầu chì thì thời gian xử lý gấp 3 | Máy ngừng tới hết ca | 3 |
| Driftlife sổng | Một loài đang nuôi chạy trong mặt cắt (loài bầy sổng thành 3 con ở 3 khoang). Mỗi chu kỳ ăn 1 đơn vị hàng trong khoang nó đứng: hàng thô trong kho, hàng đã chế trong xưởng, hoặc một kiện trên kệ. Hàng bị ăn không mất, giữ trong con vật (luật 46) | Tóm bằng tay theo kiểu loài ở `combat-driftlife.md` mục "Driftlife trong trạm", không dùng dụng cụ. Tóm xong con vật tự về ô nuôi | Giữ hàng tới hết ca, hết ca tự về khoang, hàng về kho và kệ. Không chết, không mất con, không mất hàng | 3, khi có nuôi |

### 2.9 Bảng tàu ở pha chuẩn bị

Bảng tàu ở khoang liên lạc, mở được từ pha chuẩn bị tới khi mở ca. Người chơi thấy:
| Mục | Hiện | Nhãn |
|---|---|---|
| Từng tàu trong lịch | Loại tàu, chân dung thương nhân, giờ đến trong ca, thời gian lưu bến | MVP |
| Từng dòng đơn | ID kiện, số kiện, giá một kiện, dấu đủ hoặc thiếu so với kho và kệ kiện hiện tại | MVP |
| Dòng ẩn của TA06 | Gợi ý thay tên ID kiện | Sau MVP |
| Tổng | Số kiện cần, số kiện đã có trên kệ, số đơn vị hàng thô còn thiếu theo nhóm | MVP |
| Ghim | Người chơi ghim nhóm hàng còn thiếu, nhóm đã ghim hiện trên HUD khi ra chuyến | MVP |
| Quy mô đơn | Dòng ghi chú "Đơn theo số người đang chơi" khi N từ 2 (C8) | MVP |

Ý đồ: người chơi chọn dải và việc trong chuyến theo đơn của tàu, giống cách người chơi đọc danh sách trước khi đi chợ.

## 3. Tham số

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nhóm tác động | Nguồn |
|---|---|---|---|---|---|---|
| Thời gian giữ phím sửa khoang | 5 giây | 3 đến 8 | Sửa thấy công sức hơn | Sửa nhanh, ít cảm giác | Trạm | ước |
| Giá trị một kiện | Khoảng một phần mười giá trị đơn một ca của chương, để một người có khoảng 10 kiện mỗi ca. GTĐ từng kiện và cỡ kiện ở `vat-pham.md` (gd-items và gd-economy chốt theo giá trị đơn một ca chia 10). Sim ca cảng đọc cỡ kiện trực tiếp từ file đó | 1 phần 8 tới 1 phần 12 giá trị đơn | Cần mang về nhiều hơn mỗi kiện | Kiện rẻ công | Cảng, kinh tế | gd-items `vat-pham.md` luật G2 |
| Thời gian đóng kiện | 5 tới 6 giây theo công thức, 8 giây khi đưa vào lồng giao | 3 đến 8 | Máy thành nút cổ chai | Máy không bao giờ nghẽn | Cảng | ước |
| Thời gian chế thêm ở xưởng một mẻ | 10 giây | 8 đến 20 | Đóng sẵn ngoài ca đáng giá hơn | Chế trong ca dễ | Cảng | ước |
| Sức chứa kệ kiện cấp 1, cấp 2 | 6, 12 | 4 đến 16 | Đóng sẵn nhiều, ca dễ | Ép làm trong ca | Cảng | ước |
| Tốc độ chạy khi mang kiện Nhỏ, Vừa, Lớn | 90%, 80%, 65% tốc độ thường | 60% đến 100% | Ca dễ | Ca nặng tay | Cảng | ước, bảng chốt dưới đây |
| Cộng thêm mỗi người giữ chung kiện Lớn | 15 điểm phần trăm, trần 95% | 10 đến 25 | Co-op mang dễ | Co-op ít lợi | Cảng, co-op | ước, theo luật kéo chung của gd-character |
| Hàng đợi chế của xưởng, cấp 1 | 2 mẻ | 1 đến 4 | Chế qua đêm nhiều, ca nhẹ | Phải chế trong ca | Cảng, xưởng | ước, gd-items đề xuất |
| Lưu bến dài, vừa, ngắn | 90, 70, 45 giây | 30 đến 120 | Ca dễ, ca dài | Ca gấp | Cảng | ước |
| Chờ ngoài tối đa | 30 giây | 15 đến 60 | Ít tàu bỏ đi | Phải giao nhanh để giải phóng bến | Cảng | ước |
| Thời lượng ca tối đa | 240 giây | 180 đến 300 | Ca dài | Ca vội | Cảng, một ngày | khung mục 9 |
| Cấu hình lịch | Xem bảng "Cấu hình lịch" ngay dưới | | | | Cảng | sim GD-030 |
| Kiện gốc mỗi dòng | Trong bảng "Cấu hình lịch". Chương 1 hạ từ 2 đến 3 xuống 1 đến 3 để giá trị đơn gần 60% hai chuyến (vòng sim cũ) | 1 đến 3 | Ca nặng, ít rảnh | Ca rỗi | Cảng | sim GD-030 |
| Giá trị đơn một ca | 60% giá trị hai chuyến đầy túi của chương, nhân quy mô đơn theo số người. Lịch sinh dòng theo kiện gốc mỗi dòng, giá trị đơn là chỉ số kiểm (sim kinh tế đo) | 40% đến 80% | Thiếu hàng, đơn trượt | Thừa hàng, cảng dễ | Cảng, kinh tế | gd-economy mục 8.4 |
| Giãn cách giờ đến | Trong bảng "Cấu hình lịch", lệch cộng từ 0 tới 10 giây (luật 70) | 35 đến 70 | Ca dài, rỗi | Tàu dồn, đơn trượt | Cảng | sim GD-030 |
| Giây chạy mỗi ô mặt cắt, thêm cho thang | 2,0 giây, thêm 1,5 ô khi đổi tầng | 1,5 đến 3,0 | Đường xa hơn | Đường gần hơn | Cảng, layout | sim GD-030, gd-world và art xác nhận khi có greybox |
| Thưởng đủ đơn | 25% tổng giá đơn | 10% đến 40% | Đủ đơn quan trọng hơn | Giao một phần gần ngang đủ | Kinh tế | ước, gd-economy duyệt |
| Ngưỡng nhanh | Đơn đủ khi còn trên 50% lưu bến | 30% đến 60% | Thưởng nhanh dễ | Thưởng nhanh hiếm | Cảng | ước |
| Thưởng nhanh | 15% tổng giá đơn | 5% đến 25% | Đua tốc độ | Bỏ qua tốc độ | Kinh tế | ước, gd-economy duyệt |
| Điểm cảng đơn đủ, thêm khi nhanh | 2 và 1, nhân (N + 1) chia 2, làm tròn lên tích (luật 40). 1 người 2 và 1, 2 người 3 và 2, 3 người 4 và 2, 4 người 5 và 3 | 1 đến 3 trước hệ số | Lên hạng nhanh | Lên hạng chậm | Hạng cảng | gd-economy `kinh-te-tien-trinh.md` mục 6b |
| Ngưỡng điểm hạng 2 tới 8 | 10, 20, 45, 70, 100, 135, 195 | | Chậm mở nội dung | Nhanh mở nội dung | Hạng cảng | gd-economy, Balance Sheet `kinh-te-tien-trinh.md` |
| Số sự cố mỗi ca, chương 3, chương 4 và 5 | 1, 1 đến 2 | 0 đến 3 | Ca hỗn loạn | Ca như chương 1 | Cảng | ước |
| Chu kỳ ăn hàng của Driftlife sổng | 20 giây | 10 đến 40 | Bỏ mặc được | Phải xử ngay | Cảng | ước |
| Thời gian xử lý sự cố | 4 giây | 2 đến 8 | Sự cố tốn người | Sự cố vô hại | Cảng | ước |
| Ô nuôi cấp 1, 2, 3 | 4, 6, 9 | 4 đến 12 | Nhiều sản phẩm nuôi | Ít | Nuôi | gốc Dave [D8] cho 4 và 9 |
| Ngày con non trưởng thành | 2 | 1 đến 4 | Đàn lớn chậm | Đàn lớn nhanh | Nuôi | ước, Dave ấp 1 ngày [D15] |
| Sản phẩm mỗi con mỗi ngày | 1 | 1 đến 2 | Nuôi lấn ca cảng | Nuôi vô nghĩa | Nuôi, kinh tế | ước |

Bảng chốt tốc độ mang kiện trong trạm (gd-quan giữ, gd-items và gd-character dùng chung). Chốt khi gd-items báo lệch giữa `vat-pham.md` và `nguoi-choi.md`:
| Mang | 1 người | 2 người giữ chung | 3 người trở lên giữ chung |
|---|---|---|---|
| Kiện Nhỏ | 90% | Không giữ chung | Không giữ chung |
| Kiện Vừa | 80% | Không giữ chung | Không giữ chung |
| Kiện Lớn | 65% | 80% | 95% |
| Chồng hàng thô | 90% | Không giữ chung | Không giữ chung |

- Kéo vật ngoài không gian (lồng mẫu, buồng ngủ đông) là luật của gd-character, không thuộc bảng này.
- Lệch còn lại cho GDM đối chiếu: `nguoi-choi.md` bảng tham số còn dòng "Hệ số tốc độ mang kiện 0,75", cũ hơn luật mang kiện 4 của chính file đó (đã theo bảng này). Dòng đó cần bỏ hoặc trỏ về bảng này. gd-character chạy bằng subagent nên chưa nhắn được.

- Cấu hình lịch theo luật 68, đo bằng sim GD-030 (`tools/tham-so/ca-cang.json`):
| Chương | Số bến Hoạt động | Số tàu | Giãn cách | Kiện gốc mỗi dòng | Hệ số kiện co-op | Nhãn |
|---|---|---|---|---|---|---|
| 1 | 1 | 4 | 42 giây | 1 đến 3 | 0,6 | MVP |
| 2 | 1 | 4 | 45 giây | Kiện thô 1 đến 3, còn lại 1 | 0,6 | Sau MVP |
| 3 | 1 (bến 2 chưa sửa) | 4 | 45 giây | Kiện thô 1 đến 3, còn lại 1 | 0,6 | Sau MVP |
| 3 | 2 | 4 | 45 giây | 1 đến 2 | 0,6 | Sau MVP |
| 4 và 5 | 2 (bến 3 chưa sửa) | 4 | 42 giây | 1 đến 2 | 0,6 | Sau MVP |
| 4 và 5 | 3 | 5 | 45 giây | 1 đến 2 | 0,6 | Sau MVP, chương 5 dùng chung số chương 4 |

Núm gap co-op (C8, công thức cho sim dò):
- Số tàu và thời gian lưu bến không đổi theo số người N (C8 sửa lần 2: quy mô đơn tăng theo số người, không bắt buộc tăng số tàu). Ca giữ 3 đến 5 phút ở mọi N.
- Số kiện mỗi dòng = làm tròn lên của số kiện gốc nhân (1 + hệ số kiện nhân (N trừ 1)), với N là số người trong ca. Hệ số kiện 0,6 ở mọi chương. Quy mô đơn theo số người là 1, 1,6, 2,2, 2,8 lần ở mọi chương. Ví dụ dòng gốc 2 kiện: 1 người 2, 2 người 4, 3 người 5, 4 người 6.
- N lấy lúc mở ca. Người vào giữa ca không đổi lịch ca đó.

## 4. Trường hợp biên

| Ca | Phán quyết |
|---|---|
| Kho có 0 đơn vị của nhóm một dòng cần | Bảng tàu đánh dấu thiếu. Người chơi vẫn mở ca được, dòng đó trượt nếu không có kiện, các dòng khác vẫn trả tiền |
| Kệ kiện đầy, máy đóng xong kiện | Máy giữ kiện, đèn vàng, không nhả cho tới khi kệ có chỗ hoặc người chơi lấy tay (luật 26) |
| Bốc kiện đúng nhóm nhưng dòng đã đủ | Tàu từ chối, kiện ở lại tay |
| Tàu rời đúng lúc người chơi đang bấm bốc | Tàu đã sang Rời trượt thì không nhận, kiện ở lại tay |
| Hai người bốc cùng lúc vào dòng còn thiếu 1 | Kiện tới máy chủ trước được nhận, kiện sau bị từ chối (thứ tự xử lý bước 5) |
| Spam phím bốc khi tay không có kiện | Không có hành động, không phạt |
| Bỏ ca | Tàu hôm đó không tới, kiện trên kệ giữ nguyên, không đổi Hạng cảng |
| Hết giờ ca khi tàu đang ở bến | Tàu rời ngay, áp luật 32 |
| Mọi đơn trượt | Ca vẫn kết thúc bình thường, bảng kết ca không có chữ thất bại, chỉ ghi số đơn |
| Người chơi rời phiên giữa ca | Nhân vật ở lại trạm, kiện trên tay rơi xuống sàn chỗ đứng, người khác nhặt được |
| Host rời phiên giữa ca | Phiên kết thúc với mọi người, thế giới về điểm tự lưu gần nhất là lúc mọi người về trạm sau chuyến cuối (K23, C10, log 65, `ky-thuat.md` luật 17). Ca đang dở không tính |
| Người rời phiên khi đang đếm 30 giây sang ngày | Người rời không còn tính trong "mọi người online", nhóm sang ngày khi những người còn lại đã xác nhận |
| Người vào phiên khi đang đếm 30 giây sang ngày | Người mới vào tính chưa xác nhận, đồng hồ không đặt lại |
| Người vào phiên giữa ca | Vào trạm với tay không, làm việc ngay, lịch ca không đổi |
| Đóng kiện bằng hàng chế dở khi xưởng bị chập điện | Mẻ dừng, không mất hàng, chạy tiếp khi xử lý xong hoặc sau ca |
| Thả phím sửa khoang giữa chừng | Tiến độ giữ, vật liệu đã trừ không hoàn |
| Sửa khoang khi kho thiếu một vật liệu | Không bắt đầu được, khung khoang liệt kê vật liệu thiếu |
| Driftlife sổng đứng trong khoang không có hàng | Không ăn gì, vẫn chạy trong trạm tới khi bị tóm hoặc hết ca |
| Rò khí hoặc chập điện khi kho hết Keo vá, Cầu chì | Vẫn xử lý được, thời gian xử lý gấp 3 |
| Khoang sinh quyển đầy, cặp sinh sản đủ điều kiện | Không sinh con non, không mất gì |
| Không cho ăn nhiều ngày | Không ra sản phẩm, không sinh con non, con vật không chết |
| Chương chưa mở khoang của người vớt đã tỉnh | Không xảy ra: người vớt chỉ nằm ở map nhánh của chương mở khoang đó |
| Người chơi chưa qua mốc C3.4 | TA08 lần 2 chưa vào lịch (luật 38) |
| Bỏ ca ở ngày có TA08 hoặc TA11 | Lần cập bến không tính, tàu có lại trong lịch ngày sau tới khi điều kiện truyện xong, không mất mốc |
| Đơn TA03 trượt ở chương 2 | Amara chưa tới, TA03 có lại trong lịch ngày sau tới khi có một ca giao đủ |
| Bỏ ca ở ngày có TA06 | TA06 không tính đã cập bến, Yusuf chưa về, TA06 có lại trong lịch ngày sau |
| Đủ điểm cảng nhưng chạm trần hạng của chương | Điểm cộng dồn, lên hạng ngay khi chương sau mở |
| Mở ca khi một người còn ngoài chuyến | Không mở được, nút Mở ca xám kèm lý do (luật 64) |
| Muốn ra chuyến sau khi ca đã mở hoặc đã đi 2 chuyến | Cửa khí khóa tới ngày mới (luật 63) |
| Hai tàu truyện cùng chờ và lịch chỉ 4 chỗ | Tối đa 2 chỗ cho tàu truyện, theo thứ tự mốc, tàu truyện còn lại sang ngày sau (luật 69) |
| Bến 2 chưa sửa ở chương 3 | Lịch dùng cấu hình 1 bến (luật 68) |
| Kiện có hai dòng cùng nhóm hàng trong một đơn | Không xảy ra với cùng ID (luật 23). Hai ID khác nhau cùng nhóm là hai dòng riêng, kiện vào đúng dòng cùng ID |

## 5. Ràng buộc vật lý của luật

| Ràng buộc | Số hoặc lý do |
|---|---|
| Một bến phục vụ nối tiếp, ca 1 bến dài ít nhất bằng tổng thời gian ở bến của các tàu đủ đơn | Ở 1 bến, giãn cách giờ đến quyết định độ dài ca nhiều hơn tốc độ giao. Độ dài ca theo cấu hình lịch đọc ở cột Giây ca TB, bảng 2 của `tools/ket-qua/sim-ca-cang.md` |
| Thông lượng máy đóng kiện | Một máy, 5 giây mỗi kiện, trần 12 kiện mỗi phút nếu luôn có người nạp. Trần thật thấp hơn vì chạy lấy hàng |
| Co-op 4 người ở 1 bến (chương 1, 2) | Tàu đến nối tiếp nên nhiều người không tăng số tàu xử lý song song. Đơn tăng theo kiện mỗi dòng. Nút cổ chai là máy đóng kiện: đọc cột Kiện giao và cột Máy bận, xưởng bận, chờ máy mỗi người ở bảng 2 của `tools/ket-qua/sim-ca-cang.md`. Đóng kiện trước (C9) gánh phần máy nghẽn |
| Kho không giới hạn | Không có ràng buộc kho trong ca. Ràng buộc nằm ở kệ kiện và tay mang |
| Tải mặt cắt | Đường kho tới bến 1 ngắn nhất, mục tiêu dưới 4 giây chạy. Bến 2, bến 3 xa hơn, là cách tạo độ khó mới ở chương 3, 4 mà không đổi luật |

## 6. Yêu cầu cho engineer / tool

| Hạng mục | Nội dung |
|---|---|
| Dữ liệu khoang | ID, tên, chương mở, danh sách vật liệu theo cấp, thời gian sửa, người vớt, vị trí trên mặt cắt |
| Dữ liệu tàu | ID loại, lưu bến, kiểu danh sách (số dòng tối thiểu, tối đa, nhóm hàng được chọn, trọng số), luật riêng, chương và hạng mở |
| Sinh lịch tàu | Đầu ngày theo luật 67 tới 70, có seed để tái hiện. Túi trộn loại tàu giữ qua các ngày (lưu cùng thế giới) |
| Đơn và kiện | Đơn gồm dòng (ID kiện, số cần, số đã nhận, bắt buộc hay tùy chọn). Kiện có ID. Kiện là vật thể có vị trí trong trạm (tay, kệ, sàn, máy) |
| Sự kiện cho Event Tracking | Mở ca, bỏ ca, tàu cập bến, tàu bỏ đi, kiện bốc, kiện bị từ chối, đơn đủ, đơn trượt, đơn nhanh, lên hạng, sự cố bắt đầu, sự cố xử lý, khoang sửa xong, người vớt tỉnh, con non sinh ra |
| Đồng bộ co-op | Máy chủ xử lý thứ tự bốc kiện, đồng hồ lưu bến, kệ kiện, máy đóng kiện. Kiện trên tay: người mang giữ vị trí, host giữ sự tồn tại, nhặt, đặt, bốc là yêu cầu gửi host (`ky-thuat.md` bảng đồng bộ và luật 15 tới 17) |
| Lưu | Số đơn tin mật đã tới nơi (TA11). Số đơn đủ của từng thương nhân có tên (mở chuyện riêng ở lần 3, 6, 10 theo `cot-truyen.md` mục 2.6). Bản lưu ngày cuối trước rời neo giữ sau cảnh kết (K24). Trạng thái và cấp mọi khoang, giai đoạn động cơ, kệ kiện, điểm và hạng cảng, ô nuôi (loài, tuổi, đã cho ăn), người vớt đã tỉnh, quest mở, số chuyến đã đi và ca đã mở trong ngày. Tự lưu sau mỗi chuyến khi mọi người đã về trạm, sau ca cảng, và lúc ngủ (K23). Ca cảng không lưu giữa chừng |
| Nơi phải cùng đổi khi đổi luật | GDD này, tab Customer, sim ca cảng, dữ liệu tàu và khoang, tab Shop (mục mở theo hạng), Tutorials |

### Đề sim hàng đợi ca cảng cho gd-tech (đợt 2)

| Phần | Nội dung |
|---|---|
| Câu hỏi | Với 1, 2, 3, 4 người và chương 1 đến 4: ca dài bao lâu, bao nhiêu đơn đủ, mỗi người rảnh bao nhiêu phần trăm thời gian, máy đóng kiện và bến bận bao nhiêu |
| Đầu vào | Bảng tham số mục 3, công thức co-op, khoảng cách trên mặt cắt (giây chạy giữa kho, xưởng, máy, kệ, bến), số kiện đóng sẵn đầu ca (0, một nửa, đủ), chiến lược người chơi (tham lam theo tàu sắp đi, theo dòng giá cao) |
| Đầu ra | Thời lượng ca trung bình và p90, tỉ lệ đơn đủ, tỉ lệ đơn nhanh, tỉ lệ tàu bỏ đi, độ bận bến và máy, phần trăm rảnh mỗi người, Tally mỗi ca, điểm cảng mỗi ca, số ca để lên từng hạng |
| Chạy | Tối thiểu 200 seed mỗi cấu hình, in bảng theo N và chương |
| Mục tiêu so | Ca 180 đến 300 giây. Một người chơi trung bình, 0 kiện đóng sẵn, đơn đủ từ 70% tới 90%, riêng chương 1 từ 70% tới 95% (log 78). Phần trăm rảnh mỗi người từ 10% tới 30% ở mọi N (chương 4, 5 có đóng sẵn: tới 40%). Sim ca cảng coi kho đủ hàng nên không đo số ngày tới Hạng. Số ngày tới Hạng do sim kinh tế của gd-economy đo, có tính thiếu hàng |

## 7. Yêu cầu cho art, UI, tutorial, audio

| Sự kiện | Hình (VFX, trạng thái) | Âm (SFX) | Text / tutorial | Ưu tiên |
|---|---|---|---|---|
| Khoang sửa xong | Khoang sáng dần từ tối, mảnh vỡ biến mất, người vớt bước vào | Máy khởi động, tiếng ù nền của khoang | Tên khoang và chức năng mới | Cao |
| Tàu cập bến | Tàu trượt vào cửa bến, kẹp neo đóng | Kẹp neo, chuông bến | Bảng đơn bật lên trên cửa bến | Cao |
| Đồng hồ lưu bến | Vòng quanh chân dung thương nhân, đổi vàng ở 50%, đỏ ở 20% | Tích tắc nhanh dần dưới 20% | Không | Cao |
| Bốc kiện được nhận | Kiện trượt vào khoang hàng, dòng giảm một, số Tally bay lên | Tiếng nhận hàng, tiếng xu | Không | Cao |
| Kiện bị từ chối | Kiện bật nhẹ về tay, dòng không đổi | Tiếng từ chối trầm | Lời thoại từ chối ngắn của thương nhân | Cao |
| Đơn đủ | Thương nhân vẫy, pháo sáng nhỏ, cờ nhanh nếu có | Hợp âm đi lên | Thưởng đủ đơn, thưởng nhanh | Cao |
| Đơn trượt | Dòng thiếu tô xám, thương nhân lắc đầu | Hợp âm trung tính, không chói | Không có chữ thất bại | Cao |
| Tàu chờ ngoài | Bóng tàu ở mép màn hình kèm vòng chờ | Còi xa | Không | Vừa |
| Lên hạng cảng | Bảng hạng sáng, liệt kê thứ mới mở | Chuông dài | Danh sách mở khóa | Vừa |
| Sự cố | Đèn đỏ nháy ở khoang, biểu tượng trên mặt cắt và HUD | Còi báo động ngắn, không lặp liên tục | Tên sự cố và cách xử lý lần đầu | Vừa |
| Driftlife sinh con non | Con non cạnh bố mẹ trong ô | Âm sinh vật | Không | Thấp |

- Tutorial cần có (gd-ux viết): ca cảng đầu tiên chỉ 1 tàu TA01 lưu bến dài, 1 dòng 2 kiện HC01, hướng dẫn từng bước lấy hàng, đóng kiện, bốc. Lần đầu có kiện cần chế thêm: hướng dẫn chế ở xưởng. Lần đầu có tàu chờ ngoài. Lần đầu sự cố mỗi loại. Lần đầu dùng bảng tàu ghim nhóm hàng.

## 7b. Cảm giác (game feel)

- Tham chiếu cảm giác: Overcooked ở khoảnh khắc thả món vào ô giao, phản hồi tức thì kèm số. Cook, Serve, Delicious! 2 ở chỗ chuẩn bị sẵn trước giờ cao điểm. Dave the Diver ở khoảnh khắc cuối ca hiện tổng doanh thu và lời khách.
- Phản tham chiếu: không ồn ào, không đếm ngược hét lên. Không có màn hình thua ca. Ca cảng không giống trò ném đồ hỗn loạn của game co-op party.
- Phản hồi: bốc kiện tới khi số Tally hiện dưới 150 ms. Kiện cầm trên tay đung đưa theo quán tính nhẹ. Bến rung nhẹ khi tàu cập. Âm đơn đủ cao dần theo số đơn đủ liên tiếp trong ca.

## 8. Cách đo thành công và tiêu chí nghiệm thu

Chỉ số kết quả: tỉ lệ đơn đủ, Tally mỗi ca, số ngày tới mỗi hạng, tỉ lệ ca bị bỏ. Chỉ số trải nghiệm: phần trăm thời gian rảnh mỗi người trong ca, người chơi có dùng bảng tàu trước chuyến không (event ghim nhóm hàng).

Tiêu chí nghiệm thu (số sim lấy từ `tools/ket-qua/sim-ca-cang.md` bảng gọn, bản sau khi sửa tham số theo QA vòng hai, người chơi trung bình, 0 đóng sẵn trừ khi ghi khác):

Ca cảng:
- Một người chơi mở ca chương 1 với lịch 4 tàu, giao đủ ít nhất 3 đơn trong 240 giây, không đóng sẵn: sim trung bình 3,6 đơn đủ, chơi thật kiểm lại.
- Sim: không tàu nào có giờ đến cộng lưu bến vượt 240 giây (luật 70).
- Chương 1 (Hạng 1 và Hạng 3): đơn đủ 70 tới 95% (log 78), rảnh không quá 30%. Kết quả ở bảng 2 của `tools/ket-qua/sim-ca-cang.md` bản cuối: đạt. Thời lượng ca chạm mép dưới 180 giây, lệch tối đa 3 giây, ghi như sai số, không đổi tham số.
- Chương 2: đơn đủ 70 tới 90%, rảnh không quá 30%. Bảng 2 bản cuối: đạt.
- Chương 3 một bến và hai bến: đơn đủ 70 tới 90%, rảnh không quá 30%. Bảng 2 bản cuối: đạt, trừ hai bến 4 người vượt trần 3 điểm, đã chấp nhận (log 78). Chương 4 hai bến là cấu hình chuyển tiếp, không đặt mục tiêu riêng. Chương 4 và 5 ba bến đo ở bảng 3 (kệ phụ, đóng sẵn một nửa): đơn đủ 70 tới 90%, rảnh không quá 40%. Sau khi tàu Ilsume ngừng ghé từ chương 4, bù bằng TA11 hai dòng và tăng trọng số TA06, TA09 từ chương 4: đạt đơn đủ, rảnh 4 người vượt trần 2 điểm, GDM đã chấp nhận (log 93). Tăng kiện gốc thì đạt rảnh nhưng vượt mức 10 kiện mỗi ca của gd-economy, không chọn. Ở bảng 2 (không chuẩn bị) chương 4 ba bến chạm trần 240 giây ở phần lớn số ca, đúng ý đồ phải chuẩn bị.
- Chương 5 cho kết quả giống chương 4 vì không mở tàu hay hàng mới, đúng thiết kế.
- Thời lượng ca trung bình từ 180 tới 300 giây ở mọi N và chương 1 tới 4 (khung mục 9), đọc ở bảng 2 và 3 bản cuối.
- Mọi tàu rời khi đơn còn thiếu: Tally không giảm, kiện còn lại đúng số, Hạng cảng không đổi (kiểm bằng log event).
- Bỏ ca: thấy tàu không tới, kiện trên kệ còn đủ, không có dòng log trừ gì, cửa khí khóa tới ngày mới.
- Ở 2 người, hai người bốc cùng khung hình vào dòng còn thiếu 1: đúng 1 kiện được nhận, kiện kia ở lại tay.
- Ca đầu tiên của thế giới: đúng 1 tàu TA01, 1 dòng CGO-101 (luật 67).
- Co-op: người thứ hai vào phiên ở pha chuẩn bị thì bảng tàu đổi số kiện theo N bằng 2. Sau Mở ca, người vào thêm không đổi số kiện (luật 20, 64).
- Chương 1 từ khi xưởng Hoạt động: 100 lịch sim có không quá 1 dòng kiện tinh mỗi lịch, dòng đó có kiện gốc 1.
- Mở ca: khi còn người ngoài chuyến thì không mở được. Mỗi ngày có đúng 1 ca. Sau khi mở ca, cửa khí khóa (log event).
- Điểm cảng: một đơn đủ nhanh cho 3, 5, 6, 8 điểm ở N bằng 1, 2, 3, 4 (luật 40).
- Sim co-op: số tàu mỗi ca bằng nhau ở N bằng 1, 2, 3, 4, chỉ số kiện mỗi dòng đổi.
- Chương 1, từ ngày có Súng lưới: 100 lịch sim đều có ít nhất 1 dòng CGO-121.
- Mọi loại tàu có ít nhất một trục khác loại khác ngoài số (đọc bảng 2.4).
- Mọi ID kiện CGO trong ITEM LIST thuộc đúng một nhóm hàng HC01 tới HC15 (validator gd-tech).

Trạm, người vớt, Hạng:
- Sửa khoang: thiếu một vật liệu thì không bắt đầu được. Thả phím giữa chừng giữ tiến độ, vật liệu không hoàn. Sửa xong thấy khoang đổi hình (chơi, log).
- Người vớt: kéo buồng về cửa khí, người vớt tỉnh đầu ngày kế, khoang của người đó sửa được sau khi tỉnh và không sửa được trước đó, sửa xong thì thấy tính năng mở (chơi, log).
- Hạng cảng: điểm cộng đúng công thức mọi N, không giảm, chạm trần thì dồn, lên hạng khi chương sau mở (sim và log).
- Mọi khoang trong bảng 2.6 có danh sách vật liệu chỉ gồm ID có trong ITEM LIST (validator gd-tech).

Co-op và một ngày:
- Sang ngày khi 2 người, một người treo máy: nhóm sang ngày sau 30 giây (K23).
- Ra chuyến khi 2 người, một người treo máy: chuyến bắt đầu sau 30 giây, người đó tính ở lại.
- Một ngày đi được đúng 2 chuyến, chuyến thứ 3 bị cửa khí chặn (K22).
- Co-op 2 người, một người về sớm: người đó đóng được kiện từ hàng trong kho khi đồng đội còn ở ngoài, không ra lại được, kiện đó được tàu nhận trong ca cùng ngày.
- Người vào sau: có chỗ ngủ ở khu hồi sức, buồng tắt của KH01 vẫn tắt (luật 62).

Sau MVP:
- Không có sự cố trước chương 3 trong 100 ca sim chương 1 và 2.
- Driftlife sổng bỏ mặc tới hết ca: 0 kiện và 0 đơn vị hàng bị mất.
- Khoang sinh quyển không cho ăn 5 ngày: 0 con chết, 0 sản phẩm.

## 9. Lệch khỏi tham chiếu (Dave the Diver)

| Phần | Dave làm thế nào | Ca cảng và trạm làm thế nào | Vì sao lệch |
|---|---|---|---|
| Nửa thứ hai trong ngày | Ca tối ở quán sushi, khách vào gọi món, Dave và nhân viên phục vụ, dọn [PC Gamer, S24 kho 35] | Ca cảng: tàu cập bến theo lịch, bốc kiện theo danh sách | Lead bỏ nhà ăn, chọn ca cảng (DECISIONS 2026-11-20). Không nấu ăn (K17) |
| Ai chọn thực đơn | Người chơi đặt thực đơn quán | Tàu đưa danh sách, người chơi chọn đi lấy gì | Đơn biết trước ở bảng tàu biến nửa thám hiểm thành chuẩn bị cho cảng, nối hai nửa chặt hơn |
| Nhân lực | Thuê nhân viên có chỉ số [S24 kho 35] | Không có nhân viên. Co-op là thêm tay. Trưởng cảng thêm tiện ích máy | P3: thêm người là thêm tay. Bớt một hệ quản lý cho 4 dev |
| Chỉ số tiến trình | Hạng Cooksta quyết số khách mỗi tối [S10 kho 35] | Hạng cảng quyết loại tàu, loại kiện trong đơn, mục shop | Giống: một chỉ số dễ hiểu. Khác: không quyết số tàu, số tàu theo chương và số người để ca giữ trong 3 đến 5 phút |
| Thất bại | Khách bỏ đi mất doanh thu khách đó | Đơn trượt mất thưởng, giữ Tally từng kiện, giữ hàng | Giống: thất bại ở mức khách lẻ. Khác: hàng không mất vì hàng là công cả chuyến |
| Nuôi | Fish Farm 9 ô mỗi khu, bắt đầu 4 ô, cần một cặp cùng loài, roe ấp 1 ngày [D8][D15] | Một khoang sinh quyển, 4 lên 9 ô, cặp cùng loài sinh con non, cần cho ăn để ra sản phẩm | Giữ số ô của Dave. Một khoang thay vì nhiều khu để gọn mặt cắt. Thêm cho ăn để nuôi có một quyết định mỗi ngày mà không phạt |
| NPC mở tính năng | Duff, Cobra, Otto mở shop, farm qua quest [D10][D8] | 5 người vớt, mỗi người một khoang, quest là sửa khoang | Giống cấu trúc. Khác: quest nối với sửa trạm (P2) thay vì quest giao đồ |

## 10. Câu hỏi mở

| Câu hỏi | Phương án đề xuất | Ai quyết |
|---|---|---|
| Ca cảng có cho người chơi chọn tàu từ chối nhận ngay khi cập bến không | Không, giữ luật bỏ qua cả ca. Thêm từ chối từng tàu làm bảng tàu phức tạp | GDM |
| Tên loài, thương nhân, lời thoại quest người vớt | Theo `cot-truyen.md` | gd-story |

## Co-op 1 đến 4 người

| Phần | 1 người | 2 người | 3 người | 4 người |
|---|---|---|---|---|
| Sửa khoang | Một người giữ phím | Nhiều người giữ cùng khoang: tốc độ nhân (1 + 0,5 nhân số người thêm), trần 2 lần | Như 2 người, trần 2 lần | Như 2 người, trần 2 lần |
| Số tàu chương 1 | 4 | 4 | 4 | 4 |
| Kiện mỗi dòng gốc 2 | 2 | 4 | 5 | 6 |
| Dòng kiện tin mật HC15 | 1 kiện | 1 kiện | 1 kiện | 1 kiện |
| Máy đóng kiện | 1 máy, chia lượt tự nhiên | 1 máy, 2 khi có tiện ích Trưởng cảng | Như 2 người | Như 2 người |
| Mang kiện Lớn | 65% | Giữ chung 80% | Giữ chung 95% | Giữ chung 95% (trần) |
| Tạm dừng | Được | Không | Không | Không |
| Sự cố mỗi ca | Theo bảng tham số | Cộng 1 khi N từ 3 trở lên | Cộng 1 | Cộng 1 |
| Tally, Hạng cảng, kệ kiện, ô nuôi | Chung | Chung | Chung | Chung |
| Ai mở ca | Người chơi, khi không ở ngoài chuyến | Bất kỳ ai ở khoang liên lạc khi không còn ai ngoài chuyến. Bỏ ca hoặc mở ca sớm cần mọi người xác nhận, 30 giây không trả lời là đồng ý (luật 64 tới 66) | Như 2 người | Như 2 người |
| Ở lại hoặc về sớm khi người khác còn ở ngoài | Giữa hai chuyến được đóng kiện trước (luật 55) | Không ra lại, được đóng kiện trước, chế, sửa khoang, chăm khoang nuôi, xem vị trí đồng đội (luật 53 tới 58, C9) | Như 2 người | Như 2 người |

Không có luật nào cần đúng N người: một người hoàn tất được mọi đơn vì đơn co theo N, và mọi thao tác ca cảng một người làm được.

## Điểm tự quyết

| Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|
| Kho có giới hạn không | Không giới hạn | Giới hạn đã nằm ở túi đồ (K3). Thêm giới hạn kho là thêm việc sắp xếp không vui | Kho theo ô | Rẻ |
| Trả Tally khi nào | Từng kiện trả ngay, đủ đơn có thưởng | Giao một phần vẫn được trả, thất bại mềm, phản hồi tức thì | Trả cả đơn khi tàu rời | Rẻ |
| Thất bại ca | Không có trạng thái thua, đơn trượt chỉ mất thưởng | Khung yêu cầu thất bại dứt khoát và không phá tiến trình. Hàng là công cả chuyến | Phạt Hạng cảng, mất kiện | Rẻ |
| Đóng kiện sẵn ngoài ca | Được, kiện không hỏng | Thưởng người lập kế hoạch, cho người ở lại trạm trong co-op có việc (C5) | Chỉ đóng trong ca | Rẻ |
| Lịch tàu | Biết trước từ pha chuẩn bị, không đổi trong ngày | Nối đơn cảng với lựa chọn dải trong chuyến (P1, P2) | Tàu ngẫu nhiên trong ca | Vừa |
| Hàng đợi tàu | Một bến một tàu, tàu chờ ngoài có hạn | Tạo áp lực giải phóng bến, giao nhanh tự rút ngắn ca | Lịch không bao giờ chồng | Rẻ |
| Hạng cảng giảm không | Không bao giờ giảm, có trần theo chương | Không phá tiến trình. Trần giữ nội dung không vượt truyện | Giảm khi trượt | Rẻ |
| Số hạng | 8 hạng | 5 chương, chương 5 không mở hạng mới theo mạch thương nhân thưa dần | 10 hạng | Rẻ |
| Quest người vớt | Sửa khoang của người đó | Nối người vớt với sửa trạm (P2), một luật cho cả 5 người | Quest giao đồ riêng từng người | Vừa |
| Người vớt tỉnh khi nào | Đầu ngày kế tiếp | Cho cảnh tỉnh dậy chỗ trong pha chuẩn bị, không chen giữa chuyến | Tỉnh ngay | Rẻ |
| Nuôi cần cho ăn | Có, không cho ăn thì không ra sản phẩm, không chết | Một quyết định nhỏ mỗi ngày, đúng K16 và K17 | Không cần cho ăn | Rẻ |
| Số ô nuôi | 4, 6, 9 | Giữ khung Dave 4 lên 9 đã chứng minh | 6 lên 12 | Rẻ |
| Sự cố hết khi hết ca | Có | Hậu quả chỉ trong ca, không có hư hại lâu dài, đúng K17 | Khoang hỏng lại sau sự cố | Rẻ |
| Co-op: tăng gì theo N | Chỉ tăng kiện mỗi dòng, số tàu và lưu bến giữ nguyên | Một bến phục vụ nối tiếp nên thêm tàu kéo dài ca. GDM đã sửa C8 theo hướng này (log dòng 52) | Tăng số tàu | Vừa |
| Hàng Driftlife sống ở chương 1 | CGO-121 có trong đơn TA01 từ ngày có Súng lưới, mỗi lịch ít nhất một dòng | Log dòng 49: MVP phải thử được bắt sống đáng hơn hạ | Tàu riêng cho hàng sống ở chương 1 | Rẻ |
| TA06 dòng ẩn | Dòng gợi ý, bảng tàu ghi rõ có dòng ẩn | Giữ cam kết bảng tàu không nói dối | Dòng hoàn toàn ẩn | Rẻ |
| Bán vật kể chuyện | Không bán vật gốc. Tàu mua bản sao dữ liệu (HC09) | gd-items ghi vật kể chuyện không bán, và bán vật gốc làm mất manh mối. Vẫn giữ mốc truyện bán hàng cho kẻ thù | Bán vật gốc | Rẻ |
| Người vớt ngoài buồng ngủ đông | Tới theo mốc truyện, vẫn qua quest sửa khoang | gd-story đặt Nhà sinh học ở Station Lantern còn người sống | Ép mọi người vào buồng | Rẻ |
| TA05 | Đổi từ mê đồ Trái Đất sang tàu sưu tầm Driftlife sống của Aelith | Khớp chủng tộc gd-story đã đặt, và cho bắt sống một người mua riêng (K9) | Giữ mê đồ Trái Đất | Rẻ |
| Vật tiêu hao cho sự cố | Rò khí tiêu 1 Keo vá, chập điện tiêu 1 Cầu chì. Hết thì vẫn xử lý được, chậm gấp 3 | Cho CON-104, CON-105 của gd-items một chỗ tiêu, không tạo tình huống kẹt | Bắt buộc có vật tiêu hao | Rẻ |
| Mốc bắt đầu sự cố | Ca kế tiếp sau lần đầu TA08 cập bến | Khớp lý do truyện của gd-story, vẫn trong chương 3 theo K14 | Đầu chương 3 | Rẻ |
| Ai quyết sang ngày khi co-op | Mọi người online xác nhận bằng cách vào buồng, người không vào sau 30 giây tự tính sẵn sàng (khớp K23) | Không ai bị kẹt bởi một người treo máy, không cho host quyền riêng (P3). Đề xuất của gd-ux | Host quyết, hoặc người vào buồng cuối quyết | Rẻ |
| Người không trả lời ở cửa khí | Sau 30 giây tự tính ở lại trạm | Một người treo máy không kẹt cả nhóm. Đề xuất của gd-ux | Chờ vô hạn | Rẻ |
| Quy mô đơn | Giá trị đơn bằng 60% hai chuyến đầy túi (gd-economy), chia nhỏ kiện để mỗi ca khoảng 10 kiện một người | Giữ ca 3 đến 5 phút và người chơi bận (sim GD-030) mà không đòi nhiều hàng hơn lượng nhặt được. gd-economy đồng ý, Tally một ca không đổi | Giữ cỡ kiện cũ, ca 4 kiện (phương án của gd-economy) | Vừa |
| Hệ số kiện co-op | 0,6 ở mọi chương (trước là 0,4 ở chương 3 tới 5, đổi lại khi xưởng 2 mẻ và máy thứ hai gỡ nút thắt) | Ở chương 1 với 0,4 thì phần việc mỗi người giảm khi đông người, nhóm rảnh trên 30%. Ở chương 3, 4 với 0,6 thì đơn nhóm quá lớn so với bến xa và sự cố (sim GD-030). Giá trị đơn nhóm 4 người khoảng 70% lượng cả nhóm nhặt được nếu mỗi người nhặt 60% so với chơi một mình, vẫn trong khoảng 40 tới 80%. Sim kinh tế gd-economy (`kinh-te-tien-trinh.md` mục 6b, số hiện hành): nhóm 4 xong game bằng 53% thời gian một mình, trong mục tiêu 45 tới 60% | 0,4 | Rẻ |
| Hàng chương 1 | Đơn chỉ kiện thô, đặc sản CGO-106 và lồng sống, tối đa một dòng kiện tinh kiện gốc 1 mỗi ca ở TA01 | Kiện tinh phải qua xưởng nên là nút cổ chai của ca (sim GD-030: chương 2 tới 4 tụt dưới 70% vì kiện tinh). Một dòng đủ để chương 1 có bước chế thêm (K13). Giá trị một kiện do gd-items và gd-economy đặt bằng một phần mười đơn một ca nên chọn loại kiện không đổi giá trị đơn | Mọi nhóm hàng như nhau | Rẻ |
| Trần rảnh trong ca | 30% ở chương 1 tới 3, 40% ở chương 4, 5 khi có đóng sẵn | Trần 25% đầu tiên là ước, chưa có playtest. Sim GD-030 cho thấy đơn đủ và rảnh kéo ngược nhau qua cùng một núm, ép 25% thì đơn đủ nhóm tụt dưới 70%. Playtest đo lại cảm giác bận | 25% | Rẻ |
| Dòng đơn | Mỗi dòng một ID kiện, không phải một nhóm | Một giá cho mỗi dòng, không có lỗ chọn ID đắt để ăn thưởng (QA GD-031 lỗi 9) | Dòng theo nhóm, giá thấp nhất | Rẻ |
| Một ca mỗi ngày, mở ca khóa cửa khí | Có | Khớp K22, thang Hạng và nhịp kinh tế dựa vào một ca mỗi ngày | Mở nhiều ca | Rẻ |
| Khoang của người vớt | Chỉ sửa được sau khi người vớt tỉnh | Quest mở là sửa khoang, cho mỗi người vớt một khoảnh khắc trả chức năng | Sửa trước, người vớt tới sau | Rẻ |
| Chỗ ngủ người vào sau | Buồng của họ đặt ở khu hồi sức | Khớp L4: buồng tắt vẫn tắt. Không cần khoang mới | Lấp buồng tắt | Rẻ |
| Driftlife sổng | Giữ hàng chứ không làm mất | Giữ cam kết không mất hàng và luật 27 | Mất hàng | Rẻ |
| Rò khí | Đi qua khoang bị rò chậm thêm 3 giây | Mặt cắt không có đường vòng, đóng cửa sẽ chặn đường duy nhất | Đóng cửa, đi vòng | Rẻ |
| Khoang hỏng đi qua được | Có | Mặt cắt không bị chặn đường, sửa là để có chức năng | Khoang hỏng chặn lối | Rẻ |

## Phản biện khung

| Luật khung | Vấn đề | Lý do và bằng chứng | Phương án thay |
|---|---|---|---|
| C8 "số tàu trong ca cảng tăng theo số người" và K12 bến 2 chỉ có từ chương 3 | Một bến phục vụ nối tiếp nên thêm tàu làm ca vượt 5 phút với 3 đến 4 người | GDM đã xử, log dòng 52: C8 sửa thành quy mô đơn tăng theo số người. Không mở bến theo số người (P3) | Đã viết lại: số tàu giữ nguyên, kiện mỗi dòng tăng |
| C10, K23 "host thoát thì về đầu ngày" | Host rớt giữa ca làm cả nhóm mất hai chuyến và việc trạm của ngày | GDM đã xử, log dòng 65: K23 tự lưu ở ba điểm | Đã áp ở mục biên và mục 6 |
| Khung mục 4 pha 1 "chăm khoang nuôi" và khung mục 12 MVP không có khoang sinh quyển | Không trái, chỉ ghi để QA không bắt nhầm: pha 1 ở MVP không có việc chăm nuôi | K16 mở nuôi ở chương 2, MVP là chương 1 | Không cần đổi |

## Lịch sử thay đổi

| Ngày | Thay đổi | Lý do | Ai |
|---|---|---|---|
| 2026-11-20 | Bản đủ đầu tiên | GD-027 đợt 1 | gd-quan |
| 2026-11-20 | Khớp danh mục gd-items, gd-combat, gd-story: ID kiện CGO, cỡ kiện, thời gian đóng kiện 5 giây, chế 10 giây, hàng đợi chế 2 mẻ, Driftlife sổng ăn hàng và tóm bằng tay, TA04 và TA05 sang chương 2, sự cố bắt đầu sau lần đầu TA08 | Tin của ba vai | gd-quan |
| 2026-11-20 | Khớp bản đủ gd-items: ID kiện HC06 tới HC09, thêm HC10 Kiện đồ Trái Đất, ENG-105 chế không mua, số đơn vị mỗi kiện theo Khối, thức ăn FED, hai người giữ kiện Lớn | Tin gd-items | gd-quan |
| 2026-11-20 | Khớp bản đủ gd-story và khung mới: mốc mở từng tàu, tên TA02 và TA09, ba lần cập bến của TA08, Amara và Yusuf tới theo ca cảng, tàu có điều kiện truyện lặp lại tới khi xong, kết mở không tới Solace | Tin gd-story, khung đổi Solace là mồi | gd-quan |
| 2026-11-20 | Đợt 1b: C8 mới (số tàu không theo số người), luật đóng kiện trước 53 tới 58 (C9), hàng Driftlife sống CGO-121 ở chương 1 (log 49), Hoa tiêu mở dải Xa (log 44) | Khung sửa lần 2 | gd-quan |
| 2026-11-20 | Bảng chốt tốc độ mang kiện, kiện Lớn giữ chung theo luật cộng 15 điểm của gd-character thay cho 90% cố định | Lệch gd-items báo giữa vat-pham và nguoi-choi | gd-quan |
| 2026-11-20 | Chốt số theo sim ca cảng GD-030: chương 1 4 tàu, kiện gốc 2 đến 3, giãn cách 55 giây chia số bến, tàu cuối không vượt ca, ô 2 giây, ngưỡng hạng mới | Sim cho thấy ca chương 1 quá dễ, chương 4 tàu cuối đến muộn | gd-quan |
| 2026-11-20 | Thêm luật 59 tới 61: xác nhận sang ngày ở buồng ngủ đông, hết giờ ở cửa khí khi co-op | Câu hỏi mở 2 của gd-ux | gd-quan |
| 2026-11-20 | Theo gd-economy GD-028: ngưỡng Hạng cảng mới, điểm cảng nhân quy mô đơn, ENG mở ở hạng 3, 5, 7, 8, xưởng cấp 2 sang chương 2. Quy mô đơn còn mở, hai phương án | Sim kinh tế | gd-quan |
| 2026-11-20 | Chốt quy mô đơn phương án B với gd-economy: giá trị một kiện bằng khoảng một phần mười giá trị đơn một ca | gd-economy đồng ý | gd-quan |
| 2026-11-20 | Sim vòng 2: chương 1 đạt. Bỏ chia giãn cách theo số bến, giãn cách theo chương 55, 55, 45, 40. Kiện gốc chương 2 tới 5 là 1 đến 2. Số ngày tới Hạng chuyển cho sim kinh tế | Chương 3, 4 đơn đủ thấp vì tàu dồn | gd-quan |
| 2026-11-20 | Sim vòng 3: chương 2, 3 đạt. Chương 4 nới giãn cách lên 45 giây, thêm tiện ích kệ kiện phụ cạnh bến 2 và bến 3 | Chương 4 một người đơn đủ 61% | gd-quan |
| 2026-11-20 | Chương 1: giãn cách 45 giây, hệ số kiện co-op 0,6, đơn chương 1 chỉ kiện thô và lồng sống, tối đa 1 kiện tinh | Sim GD-030 chạy thử đạt cả 10 kiện một người và rảnh dưới 30% | gd-quan |
| 2026-11-20 | Sim vòng 4: chương 4 đạt khi có kệ kiện phụ và đóng sẵn một nửa. Mục tiêu chương 4, 5 đo ở cấu hình đó, trần rảnh 40% | Một người không chuẩn bị chỉ 62%, nới giãn cách không đủ | gd-quan |
| 2026-11-20 | Hệ số kiện co-op tách theo chương: 0,6 ở chương 1, 2 và 0,4 ở chương 3 tới 5 | Sim GD-030 bản chính thức: 0,6 làm nhóm ở chương 3, 4 tụt dưới 70% đơn đủ | gd-quan |
| 2026-11-20 | Trần rảnh 30% ở chương 1 tới 3. Chương 3 giữ hệ số 0,4 (0,5 cho cùng số kiện vì làm tròn) | Sim GD-030: chương 3 với 0,4 thì rảnh 32% ở 3 người, với 0,6 thì đơn đủ 68% ở 2 người. Cả hai lệch 2 điểm, dừng dò, chờ playtest | gd-quan |
| 2026-11-20 | Chương 3 giãn cách 42 giây, hệ số 0,4 | Sim GD-030: đạt cả đơn đủ và rảnh ở mọi N | gd-quan |
| 2026-11-20 | QA vòng 1 GD-031: luật mở ca và sinh lịch 64 tới 70, ca đầu cố định, cấu hình lịch theo số bến, dòng đơn theo ID, giá và thưởng, điểm cảng làm tròn tích, nhóm HC11 tới HC13, HC06 vào lồng 8 giây, chỗ ngủ người vào sau, cửa khí K22, ngủ 30 giây K23, khoang người vớt sửa sau khi tỉnh, sổng không mất hàng, rò khí đi chậm, Hạng 7, số mục 8 theo sim, chuyển luật 53 tới 63 xuống sau nuôi | Biên bản `qa/GD-031-tram-va-cang.md` | gd-quan |
| 2026-11-20 | CGO-106 lên MVP chương 1, TA01 từ Hạng 3 hỏi thêm HC11 (chỉ CGO-106) | gd-items đưa đặc sản dải Gần vào MVP | gd-quan |
| 2026-11-20 | QA vòng 2 GD-031: số kiện tính theo N online, chốt lúc Mở ca (R1). TA01 có tối đa 1 dòng kiện tinh từ khi xưởng Hoạt động (R2). Bỏ ca cũng khóa cửa khí, làm tròn ca đầu, K24, trả mục tiêu đơn đủ 70 tới 90% và ca 180 giây về như khung | Biên bản vòng 2 | gd-quan |
| 2026-11-20 | Lồng con nuôi giá 0,5 lần, tối đa 1 lồng mỗi loài mỗi ngày. Động cơ giai đoạn 1 nhận mẫu boss BS-1 | Khớp `vat-pham.md` luật M5 và bảng REPAIR | gd-quan |
| 2026-11-20 | Dòng kiện cần chế và dòng lồng sống có kiện gốc 1. TA03, TA04, TA06 còn 2 dòng, TA09 còn 2 đến 3 dòng. Chờ sim | Sim GD-030 sau khi sửa tham số: chương 2 tới 5 đơn đủ 28 tới 65% vì kiện tinh qua xưởng, chương 1 nhóm 4 người nghẽn máy vì 9 lồng | gd-quan |
| 2026-11-20 | Khớp gd-story: TA08 lần 2, lần 3 chờ mốc C3.4, C3.7, lần 2 chỉ hỏi bản sao nhật ký. Quest Thông dịch viên sửa cả KH06 và KH07. Trạng thái Hồi sức. Mốc trong ca chỉ có lời bong bóng | Phiếu `qa/GD-031-cot-truyen.md` | gd-quan |
| 2026-11-20 | Bỏ "trả giá cao" theo tàu, tàu đắt đi bằng loại kiện đắt (gd-economy bỏ hệ số tàu). ID nâng cấp khoang KHxx-Cn. Giá trị kiện trỏ về `vat-pham.md` | Tin gd-economy sau QA GD-031 | gd-quan |
| 2026-11-20 | Bỏ lý do cũ dựa trên kiện thô rẻ (gd-items đặt mọi kiện khoảng một phần mười đơn một ca, kiện thô chương 1 nay cỡ Vừa) | Tin gd-items | gd-quan |
| 2026-11-20 | TA08 lần 1 vào lịch sau khi bến 2 Hoạt động (bỏ vòng với C3.3). Lưu số đơn đủ của từng thương nhân có tên | gd-story, phiếu QA cốt truyện vòng 2 | gd-quan |
| 2026-11-20 | Cấu hình lịch sau sim gộp: hệ số co-op 0,6 mọi chương, giãn cách chương 1 42 giây, chương 2 và chương 3 45 giây, kiện thô chương 2 1 đến 3. Mục 8 chép số mới | Sim GD-030 sau khi gỡ nút thắt xưởng: chương 2 quá dễ, nhóm chương 3 lệch | gd-quan |
| 2026-11-20 | Chép số bản sim cuối GD-030 vào mục 8 | gd-tech chạy bản cuối 300 ca | gd-quan |
| 2026-11-20 | Thêm HC14 cho CGO-411, CGO-511 (TA07, TA09 hỏi). Gỡ dấu chờ gd-tech về kiện trên tay theo `ky-thuat.md` | Validator báo 3 lỗi | gd-quan |
| 2026-11-20 | Đợt 4: chương 1 chỉ một loại kiện tinh CGO-113 theo lựa chọn của gd-items (log 67), K25 thay luật 11, K23 ba điểm tự lưu (log 65), mục tiêu đơn đủ chương 1 70 tới 95% (log 78), mục 8 trỏ bảng sim bản cuối thay số chép tay | Brief `briefs/dot4-gdm-chot-sau-qa.md` | gd-quan |
| 2026-11-20 | TA08 lần 3 cần giai đoạn 3 động cơ đã lắp (K25). TA06 là tàu truyện cho C5.1 từ ngày kế tiếp sau C4.7 | gd-story sau đợt 4 | gd-quan |
| 2026-11-20 | QA vòng cuối F1: mục 3 và mục 5 bỏ số sim chép tay, trỏ bảng 2 của sim. Quy mô đơn sửa thành 1, 1,6, 2,2, 2,8 mọi chương. Luật 12 theo K24 mới, header K10 đến K27 | Phiếu `qa/GD-031-tram-va-cang.md` vòng cuối | gd-quan |
| 2026-11-20 | Đợt 6 phần một: thêm HC15 Kiện tin mật (CGO-421) và TA11 tàu của mạng lưới. Phần Y và Maro chờ tên của gd-story | Log 87, tin gd-items | gd-quan |
| 2026-11-20 | Đợt 6 phần hai theo tên mới của gd-story: Ilsume (TA04) là Sevra Ilvane giả danh, ngừng ghé sau C3.8. Maro là gián điệp của Daskel, còn 2 lần cập bến, ngừng sau C3.8. TA11 là tàu của The Kindling, vào lịch sau C4.6, đơn tin mật cho C4.7 (1 đơn) và C5.2 (2 đơn). TA06 bỏ khỏi điều kiện C5.1 | Log 86 tới 90, `cot-truyen.md` mục Tên mới | gd-quan |
| 2026-11-20 | QA GD-033: dòng HC15 không nhân quy mô đơn (1 gói tin mỗi ngày), luật 35 liệt kê C4.7 và C5.2 thay C3.8 | Phiếu `qa/GD-033-tram-va-cang.md` G3, G4 | gd-quan |
| 2026-11-20 | TA11 luôn 2 dòng, trọng số TA06 lên 3 và TA09 lên 2 từ chương 4 để bù việc chế của TA04 | Sim GD-033: bỏ TA04 làm rảnh chương 4, 5 vượt trần 40% | gd-quan |
| 2026-11-20 | TA11 vào lịch từ ngày kế tiếp sau C3.8, có mặt ngày đầu chương 4 và chương 5 | gd-story đính chính | gd-quan |
