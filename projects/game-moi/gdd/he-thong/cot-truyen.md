# GDD hệ thống: Cốt truyện

Project: game-moi (The Novent). Chủ sở hữu: gd-story. Trạng thái: bản đủ, phản diện theo lời Lead, gd-qa ĐẠT (GD-022, GD-033). Nguồn quyết định: `gdd/00-khung-game.md` mục 3 và 7, `log-gdm-tu-quyet.md` dòng 2 đến 8 và 36 đến 38, `DECISIONS.md` 2026-11-20 "Solace là thông tin mồi, kết mở cho hậu bản" và "Lead sửa phản diện", log dòng 84 đến 92

- Mọi tên riêng tiếng Anh là [TẠM]. Từ dùng theo từ điển khung mục 10.
- Nhãn `MVP` và `Sau MVP` theo khung mục 12: chương 1 là MVP, chương 2 tới 5 là Sau MVP.
- Khớp khung (B3 đến B11, K10, K22 đến K27, C10). Chỗ còn lệch với file vai khác ghi ở mục "Lệch với vai khác".

## Tên mới (đợt 6, phản diện Lead sửa 2026-11-20)

Nguồn: lời Lead ở cuối `story/lead-y-tuong-2026-11-20.md`, khung B3 đến B11 và K10, log GDM dòng 84 đến 92. Mọi tên là [TẠM], các vai khác dùng đúng các tên này.

| Là gì | Tên [TẠM] | Mã, ghi chú |
|---|---|---|
| Chủng tộc của X và Y | Sennari | Đã có trong danh mục, dùng lại. Không thêm chủng tộc mới, không thêm art chủng tộc |
| Hành tinh quê của Sennari | Sennar | Người chơi không tới (log 88) |
| The Wardens | The Wardens | Tên chế độ và quân đội của X (log 84), không phải một chủng tộc. Lính The Wardens là người Sennari mặc giáp của chế độ |
| X, tên độc tài | Daskel | WD-P1, boss BS-5. Kẻ cầm quyền Sennar, đứng đầu The Wardens. Danh xưng tự phong: First Warden |
| Người cai trị cũ | Ilvane | Danh xưng Steward of Sennar. Cha của Y. Bị lật đổ, chết trong giam cầm trước khi game bắt đầu. Không xuất hiện, không cần art |
| Y, người thừa kế hợp pháp | Sevra Ilvane | Gọi là Sevra. Mã NP-5 (đề xuất, gd-character chốt) |
| Y giả làm thương nhân nào | Ilsume | Thương nhân Sennari đã có hồ sơ (TR-2, tàu TA04, ghé cảng từ chương 2). Ilsume là tên giả của Sevra. Một nhân vật, hai trạng thái: thương nhân che mạng và người thừa kế bỏ mạng |
| Chiến tranh vũ trụ | The Meeting War | Cuộc chiến nổ ra khi các hành tinh phát hiện ra nhau. Cha của Daskel là sĩ quan Sennari chết trong cuộc chiến này |
| Mạng lưới cách mạng | The Kindling | Quân cách mạng và người nằm vùng của Sevra. Tàu của mạng lưới ghé cảng Ember là TA11 (mã của gd-quan) |
| Căn cứ của Y ở bãi vỡ | The Hearth | Khoang ẩn có khí của The Kindling, khu thứ ba của Veyl Waypost (N4). gd-world đã chốt |
| Gián điệp của X săn Y | Maro | Giữ tên, mã WD-P2, tàu TA08 (log 90). Là người Sennari, chỉ huy toán bắt cóc |

Việc truyện cần ở vai khác, đã chốt với từng vai:

| Việc | Bản đã chốt | Vai đã chốt |
|---|---|---|
| Nơi cứu Y (mốc đóng chương 3, C3.8) | N4, Waypost Outer Ring: tàu TA04 bị toán của Maro áp mạn. Sevra nằm trong kén thoát hiểm BNG-102, người chơi kéo kén như kéo buồng ngủ đông. Mốc xong khi kén về tới Ember, qua cửa khí hoặc bằng Recall Beacon | gd-world (nơi, đường về), gd-combat (toán bắt cóc), gd-items (BNG-102) |
| Hộ tống Y về căn cứ (C5.1) | Skiff chở nhóm và kén từ Ember tới cửa N4. Kéo kén qua vòng phong tỏa của The Wardens tới cửa The Hearth, cửa mở khi kén chạm tới. Kén không bị nhắm, không nhận sát thương. Không thêm hệ thống (log 87) | gd-world, gd-combat |
| Nối tình báo (C4.7, C5.2) | Đơn đặt trước tự sinh của tàu TA11 (Pilot Light) mỗi ngày: Thông dịch viên đóng thùng tin mật CGO-421 từ gói tin mật STY-701 lúc Mở giao thương, tàu đến thì giao thùng, giao xong là tin tới nơi. Tàu vào lịch từ ngày kế tiếp sau C3.8 | gd-quan (TA11, nhóm hàng HC15), gd-items (CGO-421, STY-701, RCP-422) |
| Maro | Hai lần cập bến (C3.3 và sau C3.4), rồi chỉ huy cuộc bắt cóc ở C3.8. Maro không đánh, rút lên tàu TA08 khi toán bị hạ. Tàu TA06 không là điều kiện của mốc nào ở chương 5 | gd-quan, gd-combat |
| Trận cuối | Daskel tự tới Warden Rig để bắt Sevra. The Kindling nổi dậy ở Sennar đúng lúc hắn vắng mặt, tổ Ember giữ chân hắn ở Rig. BS-5 là Daskel, trận kết bằng khuất phục và bắt giữ, giao cho The Kindling | gd-combat |

Mốc gắn với Sevra và đơn tin mật (bản đủ ở mục 2.5):

| Mốc | Nội dung |
|---|---|
| C3.7 | Dấu săn trộm: dấu săn bắt của quân The Wardens trên Driftlife (B6) |
| C3.8 | Cứu Sevra: kén thoát hiểm của Ilsume về tới Ember, và giai đoạn 3 đã lắp |
| C4.6 | Mở hộp ghi hành trình: Solace là mồi, Sevra kể chuyện đảo chính |
| C4.7 | Giao xong đơn đặt trước tin mật đầu tiên cho tàu TA11, và giai đoạn 4 đã lắp |
| C5.1 | Hộ tống: kén của Sevra chạm cửa The Hearth |
| C5.2 | Số đơn đặt trước tin mật của TA11 đã giao xong đạt ngưỡng ở mục 3 |
| C5.6 | Nộp bản đồ sao thật, Sevra trao tọa độ hành tinh có sự sống thật |

## Tóm tắt

Hệ thống cốt truyện giữ bối cảnh, năm chương, nhân vật truyện, tên riêng và luật về cách truyện chen vào vòng ngày. Hệ thống cho người chơi lý do để đi xa hơn (ai đã đánh Cradle, đường nào tới Solace, rồi ai dựng lời nói dối đó và làm sao rời được bãi vỡ) và cho các hệ thống khác một trật tự mở nội dung. Tầng: tính năng và trình bày. Ưu tiên: chương đầu cho MVP, các chương sau cho bản đầy đủ. Phụ thuộc chính: map (nơi đặt manh mối và người vớt), trạm và cảng (quest mở tính năng, thương nhân), combat (The Wardens, boss), UX (hộp thoại, Sổ tay).

## Hiện hành

- Phản diện là Daskel, tên độc tài của hành tinh Sennar. Hắn đảo chính lật đổ Steward Ilvane, người chủ trương chung sống hòa bình sau The Meeting War. Chế độ và quân đội của hắn là The Wardens. Cái nhìn loài người tham lam, xấu tính là cái nhìn phiến diện của riêng hắn, sinh từ hận thù vì cha hắn chết trong cuộc chiến đó (Lead sửa 2026-11-20).
- Solace là thông tin mồi (Lead chốt). Lodestar Survey, hồ sơ tả một hành tinh sống được tên Solace và đường tới đó, do chế độ của Daskel dựng và phát qua The Lattice. Thương nhân trung lập chuyển nó đi mà không biết. Hồ sơ dẫn Cradle vào điểm phục kích: The Scattering.
- Sevra Ilvane, con gái Ilvane và người thừa kế hợp pháp, giả làm thương nhân Ilsume. Tổ Ember cứu cô ở mốc đóng chương 3. Cô cùng mạng lưới The Kindling chuẩn bị lật đổ Daskel.
- Chương 1 tới 3 người chơi sống sót và tìm đường tới Solace. Chương 4 lộ ra Solace là mồi và Sevra kể chuyện đảo chính. Chương 5 là hộ tống Sevra, nối tình báo qua giờ giao thương, đánh Warden Rig khi cách mạng nổ ra, rồi rời neo.
- Kết: cách mạng thành công, Sevra lên nắm quyền và trao tọa độ một hành tinh có sự sống thật. Ember rời neo lên đường. Móc cho phần sau là hành trình tới đó, game này không kể (B9, B11).
- Truyện có 5 chương, 40 mốc, đi một đường, không rẽ nhánh, một kết.
- Vật manh mối chỉ đặt ở khe M của map nhánh, vật nhiệm vụ ở khe V. Vật nhiệm vụ không bao giờ mất vĩnh viễn, nộp không tiêu vật. Mọi cảnh bỏ qua được. Không có trạng thái thua của truyện.
- Mốc xong ngay khi điều kiện đúng, không chờ cảnh. Chương đóng và dải mở theo mốc đóng chương. Chuỗi mốc cần ít nhất 26 ngày trong game, riêng chương 1 là 7 ngày (mục 5).
- Cảnh truyện chỉ diễn ra ở điểm nghỉ của vòng ngày. Ngoài không gian chỉ có lời radio một dòng, không chặn điều khiển.
- Năm người vớt: Ingrid Halvorsen (Kỹ sư), Linh Tran (Thông dịch viên), Rafael Ortega (Hoa tiêu), Amara Okafor (Nhà sinh học), Yusuf Demir (Trưởng cảng). Quest mở tính năng của họ theo luật ở `tram-va-cang.md`: sửa khoang của người đó.
- Mọi luật đúng với 1 đến 4 người. Tiến trình truyện là của chung thế giới.
- Vụ phục kích tên The Scattering (log GDM dòng 75). Tên Solace giữ nguyên. Mốc đóng chương cần giai đoạn động cơ của chương đã lắp (K25).

## Danh mục sơ bộ (để vai khác đọc, bản đủ ở các mục dưới)

### Tên riêng thế giới

| Tên [TẠM] | Là gì |
|---|---|
| United Accord | Liên minh các quốc gia đóng đoàn di cư |
| Cradle | Tàu mẹ |
| Seed Station | Loại trạm con, mỗi trạm 4 buồng ngủ đông |
| Station Ember | Trạm của người chơi |
| Solace | Hành tinh đích trong hồ sơ. Là thông tin mồi, không có thật. Hành tinh có sự sống thật do Sevra trao tọa độ ở kết, chưa đặt tên |
| The Scattering | Vụ phục kích làm nổ Cradle |
| The Wake | Bãi vỡ của Cradle, map tổng |
| The Veyl | Tên chung các chủng tộc ngoài hành tinh |
| The Wardens | Chế độ và quân đội của Daskel trên hành tinh Sennar. Không phải một chủng tộc |
| Sennar | Hành tinh quê của chủng tộc Sennari. Người chơi không tới |
| The Meeting War | Cuộc chiến nổ ra khi các hành tinh phát hiện ra nhau. Đã kết thúc từ lâu trước khi Cradle lên đường |
| The Kindling | Mạng lưới cách mạng của Sevra Ilvane: quân cách mạng và người nằm vùng |
| The Hearth | Căn cứ của The Kindling ở bãi vỡ, khoang ẩn trong Veyl Waypost |
| Driftlife | Sinh vật bản địa của vùng chân không |
| The Lattice | Mạng tin của thương nhân The Veyl trung lập |
| Lodestar Survey | Hồ sơ mồi: tả hành tinh Solace và đường tới đó |
| Tally | Đồng tiền duy nhất |

### Trạm con có tên

| Tên [TẠM] | Tình trạng | Mã map nhánh (gd-world) | Chương | Truyện đặt gì ở đó |
|---|---|---|---|---|
| Station Ember | Nhà của người chơi | Không | 1 | |
| Station Cinder | Xác | N1 | 1 | Buồng của Ingrid và Linh còn chạy, hai buồng khác đã tắt |
| Station Wick | Xác | N2 | 2 | Buồng của Rafa, vết phá từ ngoài vào |
| Station Lantern | Còn người sống | N3 | 2 | Odile, Bram, Amara đang thức ở đây |
| Station Flint | Xác, bị lính The Wardens chiếm làm trạm săn bắt | N6 | 3 | Không có người để vớt, manh mối cú lật Driftlife |
| The Raft | Cụm trạm con ghép của The Remainers | N5 | 3 | Elias, Wren |

### Chủng tộc The Veyl

| Chủng tộc [TẠM] | Một dòng | Thương nhân có tên | Loại tàu (gd-quan) |
|---|---|---|---|
| Oru | Dân gom phế liệu, tàu nhỏ, đi lẻ, tò mò | Tikko | TA01. TA02 là dân Oru vãng lai, không có tên riêng |
| Sennari | Dân của hành tinh Sennar: thương hội lớn, trọng nghi thức. Chủng tộc của Daskel và Sevra | Ilsume (tên giả của Sevra Ilvane) | TA04. TA09 là người đưa hàng gấp của một thương hội Sennari, không có tên riêng. TA11 là tàu của The Kindling. TA08 là tàu của Maro |
| Aelith | Nhà sưu tầm sinh vật sống | Vaeth | TA05 |
| Brakk | Dân chở hàng nặng, ít lời, không nói thẳng giá | Dromm | TA06 |
| Kesh | Dân buôn tin, giữ The Lattice | Nhem | TA10 |

- Tàu của con người: TA03 xuồng tiếp tế của Lantern (Bram Kowalski), TA07 tàu của The Remainers (người của Elias Vance).
- The Wardens không phải chủng tộc: đó là chế độ và quân đội của Daskel, lính là người Sennari. Daskel (WD-P1) và Maro (WD-P2, tàu TA08) thuộc The Wardens.

### Nhân vật

| Tên [TẠM] | Mã (gd-character) | Vai | Xuất hiện |
|---|---|---|---|
| Nguyễn Việt, Jonas Weber, Mei Tanaka, Niamh Doyle | PC-1 đến PC-4 | Bốn hồ sơ mặc định của tổ Ember: kíp vận hành trạm, không có nghề riêng (nhân vật người chơi, đổi tên được) | Chương 1 |
| Ingrid Halvorsen | RS-1 | Người vớt: Kỹ sư, xưởng | Chương 1, Station Cinder |
| Linh Tran | RS-2 | Người vớt: Thông dịch viên, khoang liên lạc và cảng | Chương 1, Station Cinder |
| Rafael Ortega (Rafa) | RS-3 | Người vớt: Hoa tiêu, khoang dẫn đường và bến Skiff | Chương 2, Station Wick |
| Amara Okafor | RS-4 | Người vớt: Nhà sinh học, phòng nghiên cứu và khoang sinh quyển | Chương 2, Station Lantern |
| Yusuf Demir | RS-5 | Người vớt: Trưởng cảng, thêm bến và tiện ích cảng | Chương 3, Veyl Waypost |
| Odile Laurent | NP-1 | Trưởng trạm Lantern | Chương 2 |
| Bram Kowalski | NP-2 | Trưởng xuồng tiếp tế của Lantern | Chương 1 (chỉ giọng), chương 2 |
| Elias Vance | NP-3 | Thủ lĩnh The Remainers | Chương 3 |
| Wren | NP-4 | Đứa trẻ sinh ra trên The Raft sau The Scattering | Chương 3, kết |
| Tikko, Ilsume, Dromm, Vaeth, Nhem | TR-1 đến TR-5 | Thương nhân The Veyl | Chương 1 tới 5 |
| Sevra Ilvane | NP-5 | Người thừa kế hợp pháp của Sennar, con gái Steward Ilvane. Giả làm thương nhân Ilsume tới mốc C3.8 | Chương 2 (dưới tên Ilsume), chương 3 tới 5 |
| Daskel | WD-P1 | Tên độc tài của Sennar, đứng đầu The Wardens, boss BS-5 | Chương 3 và 4 (lời phát), chương 5 |
| Maro | WD-P2 | Gián điệp của Daskel, giả làm thương nhân để săn Sevra, chỉ huy toán bắt cóc | Chương 3 |

### Năm chương (tóm tắt, mốc và manh mối đủ ở mục 2.5)

| Chương | Tên tạm | Map nhánh có truyện | Người vớt | Mốc đóng chương |
|---|---|---|---|---|
| 1 | Tỉnh dậy | N1 Station Cinder | Ingrid, Linh | Bắt được sóng của Lantern, mở Vành đai trong |
| 2 | Không cô độc | N3 Station Lantern, N2 Station Wick | Amara, Rafa | Thấy vết phá từ ngoài vào, mở Vùng trung tâm |
| 3 | Kẻ canh giữ | N4 Veyl Waypost, N5 The Raft, N6 Station Flint | Yusuf | Cứu Sevra khỏi toán bắt cóc của The Wardens, Sevra lộ danh tính |
| 4 | Tâm vụ nổ | N7 Cradle Interior | Không | Hộp ghi hành trình: Solace là mồi do Daskel dựng. Kiện tin mật đầu tiên tới The Kindling. Mục tiêu đổi thành giúp Sevra lật đổ Daskel để rời được bãi vỡ |
| 5 | Rời neo | N8 Warden Rig | Không | Daskel thua ở Warden Rig, Sevra lên nắm quyền và trao tọa độ hành tinh thật. Ember rời neo |

## 1. Mục đích với người chơi

- Người chơi cảm thấy: mình đang lần ra vì sao mình ở đây. Mỗi map nhánh mới trả lời một câu và mở một câu.
- Người chơi quyết định: đi tìm manh mối kế tiếp ngay, hay làm thêm vài ngày cho trạm khỏe rồi mới đi. Truyện không ép nhịp.
- Phục vụ pillar P4 (vũ trụ kể chuyện qua thứ bạn vớt được) và P3 (một mình vẫn trọn, có bạn thì vui hơn). Truyện cho P2 có mặt người: mỗi khoang sửa xong có một người đứng trong đó.
- 30 giây đầu: màn hình tối, tiếng báo động yếu, một buồng ngủ đông mở. Người chơi bước ra, thấy những buồng bên cạnh (đã tắt, hoặc đang mở nếu chơi nhiều người), thấy qua cửa sổ bãi vỡ đang xoay chậm vì trạm trôi. Một dòng radio tự động của trạm báo việc đầu tiên: ra cửa khí.

## 2. Luật kể chuyện

### 2.1 Luật

Số luật là khóa tham chiếu của các file khác, nên luật thêm sau nằm ở cuối, từ luật 19.

1. `MVP` Truyện chia 5 chương. Mỗi chương là một chuỗi mốc có thứ tự. Mốc sau chỉ mở khi mốc trước đã xong. Chương đóng khi mốc đóng chương đã xong, và chỉ mốc đóng chương mới mở dải và map nhánh của chương sau. Theo K25, mỗi mốc đóng chương chỉ xong khi giai đoạn động cơ của chương đó đã lắp. Kinh tế và trạm không có cổng chương riêng.
2. `MVP` Mỗi mốc có một danh sách điều kiện và đúng một nơi diễn ra. Mọi điều kiện trong danh sách phải cùng đúng thì mốc xong, không có điều kiện dạng "hoặc". Mỗi mốc xong đúng một lần trong một thế giới.
3. `MVP` Vật manh mối chỉ đặt ở map nhánh, tại khe M cố định theo bảng khe ở mục 2.5 (K7). Không vật manh mối nào đặt ở map tổng. Vật manh mối hiện ra từ lúc mốc ghi ở cột "Hiện từ mốc" mở, và nằm yên tại chỗ cho tới khi có người nhặt.
4. `MVP` Nhặt vật manh mối là ghi ngay vào Sổ tay của cả nhóm. Vật manh mối không chiếm sức chứa túi đồ và không mất khi người nhặt bị kéo về.
5. `MVP` Vật nhiệm vụ là thứ phải đưa về trạm, đặt ở khe V của map nhánh. Vật nhiệm vụ nhỏ (mảnh lõi dẫn đường của Cinder và Wick, mẫu Driftlife mang thẻ, hộp ghi hành trình, bản đồ sao thật) chiếm túi theo luật V4 của `vat-pham.md`. Người mang bị kéo về thì chọn nó làm món giữ lại theo K2 được. Không chọn thì nó mất cùng túi và ở chuyến sau nằm lại đúng khe V của nó. Buồng ngủ đông có người là vật kéo: rơi dọc đường, hoặc người kéo bị kéo về, thì ở chuyến sau buồng nằm lại vị trí gốc. Không vật nhiệm vụ nào mất vĩnh viễn. Người trong buồng ngủ đông không chết vì người chơi thất bại.
6. `MVP` Cảnh truyện chỉ diễn ra ở điểm nghỉ: pha Chuẩn bị, lúc vừa về tới trạm, pha Cuối ngày, và trong khu có khí của map nhánh. Không cảnh nào diễn ra trong map tổng. Không cảnh nào dừng đồng hồ giờ giao thương.
7. `MVP` Hộp thoại chỉ có trong trạm và trong khu có khí của map nhánh (Lantern, Veyl Waypost, The Raft), ngoài giờ giao thương. Trong giờ giao thương và trong khu chân không của map nhánh, truyện chỉ nói bằng lời bong bóng trên đầu nhân vật hoặc radio, không chặn điều khiển.
8. `MVP` Cảnh ngắn dài tối đa 3 câu. Cảnh dài (cảnh của mốc dài và cảnh mở chương 4, 5) dài tối đa 8 câu. Mọi cảnh bỏ qua được bằng một lần bấm ở bất kỳ câu nào. Bỏ qua thì Sổ tay vẫn ghi tóm tắt một câu.
9. `MVP` Ngoài không gian không có hộp thoại. Lời nói ngoài không gian đi qua radio: một dòng chữ ở mép màn hình, tự tắt, không dừng điều khiển.
10. `MVP` Sổ tay ở trong trạm ghi mọi mốc đã xong, mọi vật manh mối đã nhặt, và đúng một dòng mục tiêu hiện tại kèm tên nơi phải tới. Khi mốc đang mở cần một thứ chưa có (dụng cụ, khoang, tàu), dòng mục tiêu ghi thứ đó.
11. `MVP` Quest mở tính năng của người vớt theo luật 15 ở `tram-va-cang.md`: sửa khoang của người đó. Cốt truyện chỉ thêm cảnh và lời cho quest, không thêm điều kiện. Quest không có giới hạn thời gian và không thất bại. Riêng Linh Tran có hai khoang: khoang liên lạc KH06 và cảng KH07.
12. `MVP` Truyện không khóa vòng ngày. Khi một mốc chưa xong, người chơi vẫn ra ngoài, làm giờ giao thương, nâng cấp như mọi ngày. Mốc chỉ khóa nội dung mới: dải, lối vào map nhánh, tính năng, loại tàu.
13. `MVP` Lối vào mỗi map nhánh mở theo một mốc ghi ở bảng "Lối vào map nhánh" (mục 2.5). Dải chưa mở bị chặn cứng theo `map.md`, không vào sớm được.
14. `MVP` Lời theo trạng thái không phải cảnh và không vào hàng chờ cảnh. Nhân vật trong trạm nói một dòng khi người chơi tới gần hoặc bấm nói chuyện: chào đầu ngày, sau chuyến có hàng, sau khi người chơi bị kéo về, sau giờ giao thương, gợi ý mục tiêu. Mỗi trạng thái có 4 biến thể, không nói lại biến thể vừa nói.
15. `MVP` Tikko có lời theo trạng thái ở cảng (cập bến, chờ, nhận đủ hàng, rời bến thiếu hàng), nói bằng bong bóng.
16. `MVP` Truyện đi một đường. Không có lựa chọn hội thoại, không có nhánh, không có nhiều kết.
17. `MVP` Lời truyện không chứa số và không dạy thao tác. Hướng dẫn thao tác do gd-ux viết.
18. `MVP` Mỗi câu thoại là một chuỗi có mã riêng. Mã không hiện ra cho người chơi.
19. `MVP` Mốc xong ngay khi điều kiện đúng, không phụ thuộc cảnh. Cảnh chỉ là phần trình bày của mốc. Mỗi người chơi có hàng chờ cảnh riêng và xem mỗi cảnh nhiều nhất một lần.
20. `MVP` Nộp nghĩa là mang vật nhiệm vụ về tới trạm và đặt vào khoang nhận. Nộp không tiêu vật: vật vào kho của trạm và ở lại đó. Vật chỉ bị tiêu khi một danh sách sửa khoang hoặc một công thức của `vat-pham.md` dùng nó làm nguyên liệu, và các chỗ dùng đó được xếp sau mốc cần vật (bảng "Vật nhiệm vụ và chỗ tiêu" ở mục 6).
21. `MVP` Mốc có điều kiện đúng ở giữa giờ giao thương (C1.8, C2.3, C3.3, C3.4, C4.7, C5.2): trong giờ giao thương chỉ phát lời bong bóng. Cảnh mốc đó phát sau giờ giao thương, ở màn Kết thúc giờ giao thương hoặc ở pha Cuối ngày của cùng ngày (UI-43, UI-44 của `ux-ui.md`). Khi giờ giao thương đang chạy, không cảnh nào chặn màn của bất kỳ ai trong nhóm, kể cả người không làm giờ giao thương: cảnh của họ chờ tới khi giờ giao thương xong.
22. `MVP` Người vớt nằm trong buồng tỉnh vào đầu ngày kế tiếp sau khi buồng về tới trạm (luật 14 của `tram-va-cang.md`), rồi mới giao quest. Người vớt đang thức (Amara, Yusuf) giao quest ngay khi tới trạm.
23. `MVP` "Ngày kế tiếp sau mốc X" nghĩa là sau ít nhất một lần ngủ kể từ lúc X xong (K23).
24. `Sau MVP` Bốn thương nhân có tên còn lại cũng có lời theo trạng thái ở cảng như luật 15.
25. `Sau MVP` Mỗi thương nhân có tên có một chuỗi chuyện riêng 3 đoạn. Đoạn thứ k mở khi đủ cả hai điều kiện: số lần phục vụ xong tàu của thương nhân đó đạt ngưỡng ở mục 3, và mốc ghi ở cột "Mở sau mốc" của bảng đề cương (mục 2.6) đã xong. Chưa đủ thì thương nhân chỉ nói lời theo trạng thái. Mỗi đoạn là tối đa 3 lời bong bóng lúc tàu cập bến, không phải cảnh, không vào hàng chờ cảnh.
26. `Sau MVP` Sau cảnh kết game về menu chính (K24). Bản lưu nằm ở ngày cuối: động cơ chính giữ trạng thái đã xong giai đoạn 5, C5.7 và C5.8 đã xong và không phát lại, Ember không rời neo lần nữa. Người chơi vào chơi tiếp được, không có nội dung mới. Hai cảnh cuối xem lại được từ Sổ tay.

Xong truyện khi: mốc C5.8 xong. Truyện không có trạng thái thua.
Cam kết với người chơi: không bỏ lỡ mốc, không mất vật truyện, luôn bỏ qua được cảnh, luôn biết việc kế tiếp.

### 2.2 Trạng thái và chuyển tiếp

Mốc truyện (trạng thái của thế giới, host giữ):

| Trạng thái | Vào khi | Ra khi | Hành vi | Người chơi thấy gì |
|---|---|---|---|---|
| Khóa | Tạo thế giới | Mốc trước xong | Không kiểm điều kiện | Không thấy gì |
| Mở | Mốc trước xong | Mọi điều kiện của mốc cùng đúng | Kiểm điều kiện mỗi khi một điều kiện đổi | Một dòng mục tiêu trong Sổ tay |
| Xong | Mọi điều kiện cùng đúng | Không ra | Mở mốc sau và nội dung gắn với mốc. Thêm cảnh của mốc vào hàng chờ của từng người đang có mặt trong thế giới | Sổ tay thêm một dòng tóm tắt |

Cảnh của mốc (trạng thái riêng của từng người chơi):

| Trạng thái | Vào khi | Ra khi | Hành vi | Người chơi thấy gì |
|---|---|---|---|---|
| Chưa có | Tạo nhân vật | Mốc xong khi người đó đang có mặt trong thế giới | Không có gì | Không thấy gì |
| Chờ phát | Mốc xong | Người đó tới điểm nghỉ và cảnh đứng đầu hàng chờ của họ | Nằm trong hàng chờ của riêng người đó | Dấu báo ở nhân vật hoặc khoang có cảnh |
| Đã xem | Cảnh phát hết hoặc người đó bỏ qua | Không ra | Không phát lại, xem lại từ Sổ tay | Không còn dấu báo |

Người vào sau khi mốc đã xong không nhận cảnh của mốc đó vào hàng chờ, chỉ đọc được tóm tắt trong Sổ tay.

Vật manh mối:

| Trạng thái | Vào khi | Ra khi | Hành vi | Người chơi thấy gì |
|---|---|---|---|---|
| Ẩn | Tạo thế giới | Mốc ở cột "Hiện từ mốc" mở | Không hiện trong map nhánh | Không thấy gì |
| Tại chỗ | Mốc đó mở | Có người nhặt | Nằm cố định ở khe M, có dấu nhận diện | Vật phát sáng nhẹ kèm dấu manh mối |
| Đã nhặt | Có người nhặt | Không ra | Ghi Sổ tay cho cả nhóm | Thông báo một dòng và mục mới trong Sổ tay |

Người vớt nằm trong buồng (Ingrid, Linh, Rafa):

| Trạng thái | Vào khi | Ra khi | Hành vi | Người chơi thấy gì |
|---|---|---|---|---|
| Chưa tìm | Tạo thế giới | Người chơi bắt đầu kéo buồng | Buồng còn chạy trong map nhánh | Đèn buồng còn sáng |
| Đang đưa về | Người chơi bắt đầu kéo buồng | Buồng qua cửa khí của Ember, hoặc rơi | Buồng là vật kéo theo luật 5. Rơi thì quay lại Chưa tìm | Buồng được kéo theo người chơi |
| Hồi sức | Buồng qua cửa khí | Đầu ngày kế tiếp | Buồng nằm ở khu hồi sức, chưa giao quest | Buồng trong trạm, đèn đổi màu |
| Đã thức | Đầu ngày kế tiếp | Quest sửa khoang của người đó xong | Người đứng trong trạm, giao quest | Cảnh đánh thức ở pha Chuẩn bị, nhân vật mới trong trạm |
| Đã mở tính năng | Quest xong | Không ra | Đứng ở khoang của mình, có lời theo trạng thái | Khoang sáng đèn, tính năng dùng được |

Amara Okafor và Yusuf Demir đang thức, không nằm trong buồng. Hai người này đi thẳng từ một mốc truyện vào trạng thái Đã thức, xem bảng người vớt của hai chương đó ở mục 2.5.

### 2.3 Thứ tự xử lý

Khi một điều kiện đổi (về tới trạm, nhặt vật, sửa xong khoang, tàu cập bến, ngủ dậy):
1. Ghi đồ trong túi vào kho nếu vừa về tới trạm (luật của gd-character và gd-quan).
2. Kiểm vật nhiệm vụ vừa về tới trạm và ghi nộp.
3. Kiểm điều kiện của mốc đang Mở. Đủ thì mốc Xong, mở mốc sau, kiểm tiếp mốc sau cho tới khi gặp mốc chưa đủ.
4. Với mỗi mốc vừa Xong: thêm cảnh của mốc vào cuối hàng chờ của từng người đang có mặt, theo thứ tự mốc.
5. Cập nhật dòng mục tiêu trong Sổ tay.

Khi một người chơi tới một điểm nghỉ:
1. Hàng chờ của người đó xếp theo thứ tự: cảnh mốc (mốc xong trước phát trước), rồi cảnh đánh thức người vớt.
2. Phát đúng một cảnh đứng đầu hàng. Cảnh còn lại chờ điểm nghỉ sau của người đó.

### 2.4 Bối cảnh (bản đủ của khung B1 tới B11)

| Thời điểm | Việc xảy ra | Nguồn |
|---|---|---|
| The Meeting War | Các hành tinh phát hiện ra nhau và đánh nhau. Loài người là một bên. Cha của Daskel, một sĩ quan Sennari, chết trong một trận với hạm đội loài người | B3, B5, Tự quyết 34 |
| Sau chiến tranh | Steward Ilvane cầm quyền ở Sennar, chủ trương chung sống hòa bình với mọi chủng tộc. Các chủng tộc, loài người gọi chung là The Veyl, giao thương với nhau và với loài người, dùng chung Tally | B2, B3 |
| Trái Đất cạn kiệt | Loài người vắt kiệt Trái Đất, Hệ Mặt Trời sụp đổ. Họ tìm một hành tinh để di cư, và mọi thương nhân The Veyl đều biết điều đó | B1 |
| Đảo chính ở Sennar | Daskel lật đổ Ilvane. Để giữ ghế và gom dân Sennar về một mối sau đảo chính, hắn hướng mọi bất ổn sang một kẻ thù bên ngoài: loài người. Ilvane chết trong giam cầm. Con gái ông là Sevra, khi đó còn nhỏ, được người của cha giấu vào một thương hội | B3, B8, Tự quyết 35 |
| Một hồ sơ xuất hiện | Chế độ của Daskel dựng Lodestar Survey: hồ sơ khảo sát một hành tinh sống được tên Solace, kèm đường tới đó. Chúng đưa nó lên The Lattice qua một nguồn ẩn danh. Thương nhân Kesh chuyển tiếp như mọi bản tin khác. Phái bộ của loài người nhận về và dịch | B4 |
| Lập đoàn di cư | Các quốc gia lập United Accord, đóng tàu mẹ Cradle. Người lên tàu được chọn lọc, ngủ đông. Đích là Solace. Hồ sơ không kiểm chứng được từ Trái Đất, và loài người không còn lựa chọn nào khác | B1 |
| The Scattering | Đường trong hồ sơ dẫn Cradle vào điểm phục kích trong Glass Nebula. Quân The Wardens đánh từ ngoài vào. Cradle nổ, phi hành đoàn đang thức chết. Cradle kịp phóng các Seed Station, phần lớn vỡ theo tàu mẹ | B3, B7 |
| Sau đó | Daskel tuyên bố bãi vỡ là khu bảo hộ và đặt quân đồn trú ở Warden Rig. Quân lên Cradle, cài lại hệ an ninh, xóa dữ liệu dẫn đường. Chế độ dung túng cướp bóc: lính tháo xác tàu, bắt người, săn Driftlife đem bán. Thương nhân The Veyl trung lập vẫn lui tới rìa bãi vỡ gom hàng, không ai dám cãi lời tuyên bố | B5, B6 |
| Sennar dưới Daskel | Hành tinh từng to đẹp và hòa bình thành hiếu chiến: ép lính, dung túng cướp bóc và tệ nạn, khơi mào chiến tranh với láng giềng. Người của Ilvane lui vào bóng tối, lập mạng lưới The Kindling: quân cách mạng và người nằm vùng | B5, B8 |
| Sevra | Lớn lên trong thương hội dưới tên Ilsume. Cô đi các tuyến buôn The Veyl để nối người của The Kindling, và tới bãi vỡ vì đây là nơi lời nói dối lớn nhất của Daskel còn để lại bằng chứng | B8 |
| Các trạm con | Trạm nào còn chạy thì tự đánh thức người theo chu kỳ. Lantern thức sớm và để đèn sáng. Một số trạm ghép lại thành The Raft và bỏ nhiệm vụ. Ember hỏng nặng nên chu kỳ đánh thức chạy muộn hơn nhiều năm | B7 |
| Lúc game bắt đầu | Ember đang trôi, người chơi tỉnh dậy. Chơi N người thì N người tỉnh, buồng còn lại hỏng do hậu vụ nổ, là không may | B7 |
| Điều game này không trả lời | Hành tinh có sự sống thật mà Sevra trao tọa độ ra sao, đường tới đó thế nào: để cho phần sau | B11 |

- Cái nhìn của Daskel (B5): hắn nói loài người là loài ăn hết thế giới của mình rồi đi tìm thế giới khác. Một nửa câu đó đúng: Trái Đất cạn kiệt là thật (B1). Nửa còn lại là hận thù của một người mất cha, được đem làm chính sách. Trong game không người Sennari nào ngoài chế độ nói câu đó. Hắn dùng hận thù đó để giữ quyền.
- Trái với hình ảnh tự dựng (B6): chế độ gọi bãi vỡ là khu bảo hộ và gọi mình là kẻ giữ nó, trong khi lính của nó gắn thẻ, cắt mô, lùa đàn đem bán. Chế độ dung túng cướp bóc và gọi đó là canh giữ.
- Driftlife (B6): sinh vật bản địa của vùng chân không mà bãi vỡ trôi vào. Chúng kéo tới bãi vỡ vì mảnh vỡ là chỗ bám và chỗ kiếm ăn mới. Người chơi săn và bắt chúng từ chương 1 mà không biết gì về The Wardens. Cú lật nằm ở chương 3.
- Vì sao thương nhân The Veyl không chở giúp và không báo tin hộ: lời tuyên bố khu bảo hộ cấm chở tàn dư của loài người ra khỏi bãi vỡ, và ai cũng sợ quân The Wardens. Thương nhân bán hàng được vì buôn bán ở rìa không bị cấm.
- Vì sao Daskel chưa giết hết người sống sót: hắn cần kẻ thù còn đó. Tàn dư loài người trong khu bảo hộ là cớ để giữ quân, giữ luật thời chiến và giữ ghế. Maro đếm người để báo cáo đó luôn có số.
- Vì sao không ai chỉ được đường tới Solace: mọi thứ thương nhân biết về Solace đều đến từ cùng một hồ sơ trên The Lattice. Người chơi tin phải vào Cradle mới có đường đi thật, và đó là lý do của chương 4.
- Vì sao Sevra kịp lớn: người Sennari sống dài hơn người. Truyện không nêu con số.
- Chủ đề (B10): không luật nào phạt khai thác. Chủ đề nói qua ba chỗ: lời Amara Okafor, cú lật Driftlife, và việc nuôi thay vì săn. Gốc tai nạn là hận thù và định kiến của Daskel (log GDM dòng 91). Lời hứa "dựng khác đi" vẫn đứng được vì Trái Đất cạn kiệt là thật.

### 2.5 Năm chương

- Mã mốc: `C<chương>.<thứ tự>`. Mã vật truyện: `MM<chương>.<thứ tự>`.
- Cột "Điều kiện" là danh sách, các điều kiện nối bằng chữ "và" phải cùng đúng (luật 2).
- Khe M là khe manh mối, khe V là khe vật nhiệm vụ, theo quy ước của `map.md` mục 2.10.
- Boss, loài, khu trong map nhánh, khoang, loại tàu, vật phẩm là của vai khác. Ở đây chỉ ghi vai truyện và dùng đúng mã của họ.

Lối vào map nhánh (luật 13):

| Map nhánh | Lối vào mở khi | Nhãn |
|---|---|---|
| N1 Station Cinder | C1.2 xong | `MVP` |
| N3 Station Lantern | C1.9 xong | `Sau MVP` |
| N2 Station Wick | C2.5 xong | `Sau MVP` |
| N4 Veyl Waypost | C2.8 xong | `Sau MVP` |
| N5 The Raft | C3.4 xong | `Sau MVP` |
| N6 Station Flint | C3.5 xong | `Sau MVP` |
| N7 Cradle Interior | C3.8 xong | `Sau MVP` |
| N8 Warden Rig | C4.7 xong, chỉ vào bằng Skiff | `Sau MVP` |

#### Chương 1 - Tỉnh dậy `MVP`

Mục tiêu người chơi: hãm trôi và neo Ember, vớt hai người đầu tiên, sửa cảng, bán chuyến hàng đầu tiên, nghe được tiếng người khác.

- Cảnh mở: cảnh của C1.1, theo số người (mục 2.7). Trạm tối, xoay chậm, một dòng radio tự động của trạm.

| Mốc | Tên | Điều kiện | Nơi | Mở gì |
|---|---|---|---|---|
| C1.1 | Tỉnh dậy | Bắt đầu thế giới | Ember, buồng ngủ đông KH01 | Cửa khí, Vành đai ngoài |
| C1.2 | Hãm trôi và neo | Khoang neo KH04 Hoạt động | Ember | Trạm ngừng xoay. Lối vào N1 |
| C1.3 | Một trạm khác | Tới lối vào N1 | N1, khu C1 | Vật truyện của N1 hiện ra |
| C1.4 | Người đầu tiên | Buồng của Ingrid qua cửa khí của Ember | Ember | Ingrid vào Hồi sức, tỉnh đầu ngày kế tiếp và giao quest sửa xưởng KH05 |
| C1.5 | Xưởng sáng đèn | Xưởng KH05 Hoạt động | Ember, xưởng | Xưởng (K12), chế được Bộ kích nguồn TOL-401 và Súng lưới cho loài nhỏ TOL-202 (log GDM dòng 49) |
| C1.6 | Người thứ hai | Buồng của Linh qua cửa khí của Ember | Ember | Linh vào Hồi sức, tỉnh đầu ngày kế tiếp và giao quest sửa KH06 và KH07 |
| C1.7 | Lời gọi đầu tiên | Khoang liên lạc KH06 Hoạt động và cảng KH07 Hoạt động | Ember, khoang liên lạc | Khoang liên lạc, cảng, shop (K12, K20). Tàu TA01 vào lịch từ ngày kế tiếp |
| C1.8 | Tàu đầu tiên | Ngày kế tiếp sau C1.7 và tàu TA01 của Tikko cập bến | Ember, bến 1 | Giờ giao thương (kiểu chơi mới) |
| C1.9 | Sóng của Lantern (đóng chương) | Số giờ giao thương đã xong đạt ngưỡng ở mục 3 và giai đoạn 1 của động cơ chính đã lắp (K25) | Ember, khoang liên lạc | Vành đai trong, lối vào N3, chương 2 |

| Mã | Là gì | ID vật | Nơi | Hiện từ mốc | Nói điều gì |
|---|---|---|---|---|---|
| MM1.1 | Nhật ký trạm của Cinder | STY-101 | N1, khe M4 ở khoang ngủ đông trái C3 | C1.3 | Người trực của Cinder ghi một ánh chớp ở phía ngoài mạn tàu ngay trước tiếng nổ. Nghi vấn đầu tiên: thứ đó đến từ bên ngoài |
| MM1.2 | Bản tin lưu trong máy liên lạc của Cinder | STY-111 | N1, khe M3 ở khoang lái C7 | C1.3 | Tên hồ sơ Lodestar Survey xuất hiện lần đầu, kèm dấu của The Lattice. Linh nhận ra tên này và im lặng |
| MM1.3 | Thẻ tên hai buồng đã tắt (không bắt buộc) | STY-601 | N1, khe M1 ở C3 và khe M2 ở C5 | C1.3 | Tên hai người không qua khỏi. Mang về thì thẻ treo ở khoang buồng ngủ đông của Ember. Ingrid và Linh mỗi người có một lời riêng |
| V1.1 | Mảnh lõi dẫn đường của Cinder (vật nhiệm vụ) | STY-102 | N1, khe V1 ở khoang lái C7 | C1.3 | Chưa có chỗ dùng ở chương 1. Sang chương 2 nó là một vật liệu sửa khoang dẫn đường KH08 |

- Nhật ký trạm nằm ở khe M4 trong C3 để nhặt được ngay ở lần vào đầu tiên. Đây là vật manh mối đầu tiên của game, bước hướng dẫn T29 của gd-ux dựa vào nó. `map.md` đã có khe này.

Nhân vật xuất hiện: tổ Ember, Ingrid Halvorsen, Linh Tran, Tikko, Bram Kowalski (chỉ giọng qua sóng).

Kiểu chơi mới và cách truyện đưa vào:
- Khai thác: khoang neo cần vật liệu, đó là lý do của chuyến ra ngoài đầu tiên (C1.2).
- Bắt sống loài nhỏ bằng lưới: Ingrid không chịu được việc phá hỏng thứ còn nguyên. Thứ đầu tiên cô chế sau Bộ kích nguồn là Súng lưới, để mang sinh vật về mà không làm nát chúng (C1.5).
- Giờ giao thương: lời gọi của Linh được một dân gom phế liệu Oru nghe thấy. Tikko ghé vì tò mò và trở thành khách đầu tiên (C1.8). Từ ngày có Súng lưới, đơn đặt trước ngày chẵn của Tikko là một lồng Driftlife sống: Tikko gom hộ một nhà sưu tầm chưa lộ mặt. Giờ giao thương hướng dẫn đầu tiên chỉ bán thùng phế liệu theo GDD trạm và cảng. Người đó là Vaeth, tới chương 2 mới tự đến.

Người vớt của chương:

| Người | Đưa về thế nào | Quest mở (luật của gd-quan) | Cảnh truyện kèm quest | Mở (K12) |
|---|---|---|---|---|
| Ingrid Halvorsen | Lần 1 vào Cinder: kéo buồng từ C3 về beacon B1 | Sửa xưởng KH05 | Cô tự tay kiểm từng món vật liệu người chơi giao, chê một món, nhận hết | Xưởng: chế và nâng cấp trang bị. Kèm Súng lưới cho loài nhỏ |
| Linh Tran | Lần 2 vào Cinder: mở cửa D1 bằng Bộ kích nguồn, qua khoang máy C6, kéo buồng từ C5 về beacon B2 | Sửa khoang liên lạc KH06 và cảng KH07 | Cô phát lời gọi đầu tiên bằng ba thứ tiếng của The Veyl | Khoang liên lạc và cảng: gọi tàu, giờ giao thương, shop |

- Vai truyện của boss BS-1 Scrapmaw: nó làm tổ quanh lõi năng lượng ở khoang máy C6, chắn đường duy nhất tới buồng của Linh. Hạ hay xua nó đi đều được (hai cách kết của gd-combat). Xua đi là lần đầu game cho thấy không cần giết.

Cảnh đóng (cảnh của C1.9, pha Cuối ngày): khoang liên lạc bắt được một giọng người lặp đi lặp lại một lời gọi cũ. Cả trạm đứng nghe. Linh trả lời. Bram Kowalski đọc vị trí của Station Lantern, và Linh giải từ sóng đó ra một khe đi qua Rạn vụn đang chặn Vành đai trong (hazard của gd-world).

#### Chương 2 - Không cô độc `Sau MVP`

Mục tiêu người chơi: phá vây cho Lantern, đưa về Nhà sinh học và Hoa tiêu, học nuôi và bắt sống Driftlife cỡ M, tìm hiểu vì sao các trạm con vỡ.

Mở chương: không có cảnh. Lần đầu vào Vành đai trong có một dòng radio: Bram nhận ra đèn của Ember.

| Mốc | Tên | Điều kiện | Nơi | Mở gì |
|---|---|---|---|---|
| C2.1 | Đèn của Lantern | Tới lối vào N3 | N3, Lantern Outer Ring | Trận BS-2 Tempest Gulper đang vây bến cập. Vật truyện của N3 hiện ra |
| C2.2 | Phá vây | BS-2 xong (hạ hoặc xua) | N3, Lantern Core | Cửa cập mở. Gặp Odile Laurent, Bram, Amara. Odile ra điều kiện cho Amara đi. Tàu TA03 của Bram vào lịch từ ngày kế tiếp |
| C2.3 | Chuyến xuồng đặc biệt | Phục vụ xong tàu Lamplighter (TA03) | Ember, bến | Bram chở Amara sang Ember. Quest sửa phòng nghiên cứu KH10 và khoang sinh quyển KH11 |
| C2.4 | Mẫu sống cho Amara | KH10 và KH11 Hoạt động và một con Driftlife cỡ M còn sống về tới kho của trạm | Ember, phòng nghiên cứu | Nuôi Driftlife (K16). Tàu TA05 của Vaeth |
| C2.5 | Nhịp buồng trong vành đai | Ngày kế tiếp sau C2.4 | Ember, khoang liên lạc | Lối vào N2 |
| C2.6 | Người chỉ đường | Buồng của Rafa qua cửa khí của Ember | Ember | Rafa vào Hồi sức, tỉnh đầu ngày kế tiếp và giao quest sửa khoang dẫn đường KH08 |
| C2.7 | Không nổ từ trong ra | Đã nhặt MM2.1 và đã nhặt MM2.2 | Ember, xưởng | Cảnh Ingrid xem mảng vỏ. Tàu TA04 của Ilsume |
| C2.8 | Bản đồ có một lỗ đen (đóng chương) | Khoang dẫn đường KH08 Hoạt động, đã nộp mảnh lõi dẫn đường của Wick STY-103 và giai đoạn 2 của động cơ chính đã lắp (K25) | Ember, khoang dẫn đường | Bến Skiff KH09, Vùng trung tâm, lối vào N4, chương 3 |

| Mã | Là gì | ID vật | Nơi | Hiện từ mốc | Nói điều gì |
|---|---|---|---|---|---|
| MM2.1 | Mảng vỏ thân của Station Wick | STY-211 | N2, khe M1 ở khoang ngủ đông | C2.5 | Vỏ lõm vào trong. Vết phá đi từ ngoài vào |
| MM2.2 | Nhật ký trạm của Wick | STY-101 | N2, khe M2 ở khoang ngủ đông | C2.5 | Sau vụ nổ có kẻ cắt rời khoang hàng của Wick. Đường cắt sạch, không phải dụng cụ của loài người |
| MM2.3 | Sổ trực của Lantern | STY-212 | N3, khe M1 ở Lantern Core | C2.1 | Danh sách xuồng Lantern cử vào Vùng trung tâm không về, kèm ghi chú về những con tàu lạ không trả lời |
| MM2.4 | Bản Lodestar Survey Odile treo trên tường | STY-213 | N3, khe M2 ở Lantern Core | C2.1 | Lantern vẫn tin hồ sơ này và định đi tiếp tới Solace khi sửa xong động cơ |
| MM2.5 | Thẻ tên các buồng đã tắt của Wick (không bắt buộc) | STY-601 | N2, khe M3 | C2.5 | Tên những người không qua khỏi ở Wick |
| V2.1 | Mảnh lõi dẫn đường của Wick (vật nhiệm vụ) | STY-103 | N2, khe V1 ở khoang lái | C2.5 | Nộp ở khoang dẫn đường, là điều kiện của C2.8 |

- Mảnh lõi dẫn đường của Cinder STY-102 bị tiêu khi sửa KH08 (danh sách sửa của `vat-pham.md`). Vì vậy C2.8 không đòi nộp nó lần nữa: sửa xong KH08 nghĩa là mảnh của Cinder đã được ghép.

Nhân vật xuất hiện: Odile Laurent, Bram Kowalski, Amara Okafor, Rafael Ortega, Vaeth, Ilsume.

Kiểu chơi mới và cách truyện đưa vào:
- Bắt sống Driftlife cỡ M (gây mê, gắn Phao kéo): lưới của Ingrid chỉ bắt được cỡ S. Việc đầu tiên Amara nhờ là một con cỡ M còn sống. Cỡ L không bắt sống được, chỉ lấy mẫu sinh thiết (luật của gd-combat).
- Dụng cụ cho C2.4, dòng mục tiêu Sổ tay ghi từng bước. Đường nhanh nhất theo `vat-pham.md` và `combat-driftlife.md`: chế Phao kéo CON-106 ở xưởng (chế nhanh), làm một con cỡ M bất lực bằng dụng cụ đã có rồi gắn phao, ví dụ Latchjaw DL-G03 ở Vành đai ngoài. Súng gây mê TOL-203 cần hai lần chế qua đêm (bản thiết kế BPR-102 rồi mới tới súng), dành cho loài phải gây mê mới bắt được.
- Nuôi: khoang sinh quyển sửa xong thì nhận những con cỡ S đã bắt bằng lưới từ chương 1. Mốc C2.4 không đòi con cỡ M đó phải là loài nuôi được. Vaeth, nhà sưu tầm Aelith từng nhờ Tikko gom hộ ở chương 1, tự tìm tới và trả giá cao cho Driftlife sống, cho việc nuôi một lý do kinh tế đúng K9.
- Gieo trước cho cú lật Driftlife: ở Vành đai trong một phần cá thể đã mang dấu lạ (luật 30 của `combat-driftlife.md`). Amara để ý và ghi lại, chưa ai hiểu nó là gì.

Người vớt của chương:

| Người | Đưa về thế nào | Quest mở (luật của gd-quan) | Cảnh truyện kèm quest | Mở (K12) |
|---|---|---|---|---|
| Amara Okafor | Cô đang thức ở Lantern, làm thầy thuốc bất đắc dĩ. Odile chỉ cho đi khi Lantern nhận được hàng tiếp tế. Bram chở cô sang ở mốc C2.3 | Sửa phòng nghiên cứu KH10 và khoang sinh quyển KH11 | Cô mang theo đúng một cuốn sổ, thứ duy nhất còn lại của kho giống Trái Đất | Nghiên cứu và nuôi Driftlife |
| Rafael Ortega | Vào Wick: bật điện khoang ngủ đông bằng Bộ kích nguồn, kéo buồng về | Sửa khoang dẫn đường KH08 | Anh không chịu chạm vào bản đồ cho tới khi sửa xong khoang | Khoang dẫn đường: đọc lõi dẫn đường, mở Vùng trung tâm, Skiff |

Vai truyện của boss BS-2 Tempest Gulper: con đầu đàn vây Lantern, cắt đường tiếp tế. Đây là lý do nhiều năm Lantern không ra khỏi trạm được và xuồng của Bram không tới được Ember sớm hơn. Lần đầu tới Lantern là một trận cứu trạm.

Cảnh đóng (cảnh của C2.8): Rafa ghép lõi của Ember, Cinder và Wick. Mọi vệt mảnh vỡ chỉ về một điểm nằm trong Glass Nebula, và phần đường tới Solace trong cả ba lõi đều bị cháy đúng một chỗ. Rafa nói anh không tin vào trùng hợp, rồi tự gạt đi. Chỉ Cradle còn giữ bản đủ. Qua sóng, Odile nói người của bà vào đó chưa ai về, và nhắc tới những người đã bỏ đi: The Remainers.

#### Chương 3 - Kẻ canh giữ `Sau MVP`

Mục tiêu người chơi: vào Vùng trung tâm, tới Veyl Waypost và The Raft, đón Trưởng cảng, biết ai đã đánh Cradle, cứu một thương nhân khỏi tay The Wardens.

Mở chương: không có cảnh. Lần đầu vào Vùng trung tâm có một sự kiện hình không lời: liên lạc nhiễu, trong mây khí bóng một cỗ máy rất lớn đi ngang rồi mất.

| Mốc | Tên | Điều kiện | Nơi | Mở gì |
|---|---|---|---|---|
| C3.1 | Bến của The Veyl | Tới lối vào N4 | N4, Waypost Concourse | Nhem, Dromm, Yusuf Demir. Tàu TA06 và TA10 vào lịch từ ngày kế tiếp. Vật truyện của N4 hiện ra |
| C3.2 | Trưởng cảng về bến | Đã xong một giờ giao thương có tàu TA06 của Dromm cập bến và sau giờ giao thương đó tới N4 bằng Skiff | Ember, bến | Yusuf về Ember cùng chuyến Skiff. Quest sửa bến thuộc KH12 |
| C3.3 | Tàu lạ | Bến thuộc KH12 Hoạt động và tàu TA08 của Maro cập bến lần thứ nhất | Ember, bến | Maro vào truyện |
| C3.4 | Sự cố đầu tiên | Sự cố đầu tiên xảy ra, ở giờ giao thương kế tiếp sau C3.3 (luật 43 của `tram-va-cang.md`) | Ember | Sự cố trong giờ giao thương (K14). Lối vào N5 |
| C3.5 | Những người ở lại | Tới lối vào N5 | N5 | Elias Vance, Wren. Tàu TA07 của The Remainers. Lối vào N6 |
| C3.6 | Trạm bị cướp | Đã nộp mẫu Driftlife mang thẻ STY-301 ở phòng nghiên cứu | Ember, phòng nghiên cứu | Cảnh Amara nhận mẫu |
| C3.7 | Dấu săn trộm | Ngày kế tiếp sau C3.6 | Ember, phòng nghiên cứu | Cú lật Driftlife. Cuộc bắt cóc ở N4 sẵn sàng xảy ra từ ngày kế tiếp |
| C3.8 | Người thừa kế (đóng chương) | Kén thoát hiểm của Ilsume BNG-102 về tới Ember, qua cửa khí hoặc bằng Recall Beacon. Cuộc bắt cóc chỉ xảy ra khi giai đoạn 3 của động cơ chính đã lắp (K25) | N4, Waypost Outer Ring, rồi Ember | Sevra lộ danh tính, kể Daskel đã ra lệnh đánh Cradle và hồ sơ Solace là mồi dẫn tàu vào ổ phục kích. Tàu TA11 của The Kindling vào lịch từ ngày kế tiếp. Lối vào N7, chương 4 |

| Mã | Là gì | ID vật | Nơi | Hiện từ mốc | Nói điều gì |
|---|---|---|---|---|---|
| MM3.1 | Bản ghi chuyển tin của The Lattice và sổ hải trình của bến | STY-311 | N4, khe M1 ở quầy của Nhem | C3.1 | Lodestar Survey lên mạng tin từ một nguồn ẩn danh, Nhem là người chuyển tiếp nó cho phái bộ loài người. Sổ hải trình bao nhiêu năm không ghi một chuyến nào tới Solace hay ai từ đó về |
| MM3.2 | Lời tuyên bố khu bảo hộ | STY-312 | N4, khe M2 ở Waypost Concourse | C3.1 | Bản mang dấu First Warden dán ở mọi bến: bãi vỡ là khu bảo hộ, đàn Driftlife được giữ, không ai được chở tàn dư của loài người ra khỏi đó. Lý do thương nhân chỉ dám buôn bán |
| MM3.3 | Xác một máy thu hoạch | STY-313 | N5, khe M1 ở kho của Elias | C3.5 | Ký hiệu trên máy trùng với ký hiệu trên lời tuyên bố ở Veyl Waypost |
| MM3.4 | Nhật ký trạm của Flint | STY-101 | N6, khe M1 | C3.5 | Flint sống sót sau vụ nổ, bốn người đã thức. Rồi lính mang giáp tới, lấy hết kho và bắt người đi. Dòng cuối: họ nói đây là khu bảo hộ, rồi họ tháo cả cửa khí |
| MM3.5 | Manh mối lõi dẫn đường của Flint (không bắt buộc) | STY-104 | N6, khe M2 | C3.5 | Lõi của Flint cũng cháy đúng chỗ ghi đường tới Solace. Nhặt rồi thì Rafa có thêm một lời |
| V3.1 | Mẫu Driftlife mang thẻ (vật nhiệm vụ). Loài: Shardbrood Hatchling DL-X05 theo gd-combat | STY-301 | N6, khe V1 ở khoang nghiên cứu, mở sau khi hạ BS-3 | C3.5 | Con vật mang thẻ kiểm hàng của lính The Wardens. Con mẹ của nó có sẹo cắt mô đều nhau: bị lấy mô đem bán nhiều lần. Nộp ở phòng nghiên cứu, là điều kiện của C3.6 |

- Khe của N4 (M1, M2), N5 (M1), N6 (M1, M2, V1) khớp `map.md`.

- Thiết bị lạ dưới bến Ember (C3.4) và lời Elias kể ở C3.5 là mốc truyện, không phải vật manh mối để nhặt.

Nhân vật xuất hiện: Yusuf Demir, Nhem, Dromm, Maro, Elias Vance, Wren, Ilsume (lộ là Sevra Ilvane ở mốc đóng chương), Daskel (chỉ qua lời Maro và lời phát).

Kiểu chơi mới và cách truyện đưa vào:
- Sự cố trong giờ giao thương: thiết bị Maro để lại làm trạm trục trặc. Thiết bị đó cũng nghe lén lịch tàu ở cảng, nhờ vậy The Wardens biết đường đi của Ilsume. Sau khi Ingrid gỡ nó, trạm vẫn mang di chứng, nên sự cố còn lại tới hết game.
- Kẻ địch có vũ khí: đơn vị The Wardens có ở Vùng trung tâm từ đầu chương (theo gd-combat). Người chơi đọc được tên The Wardens ngay ở Veyl Waypost (MM3.2), nhưng tới C3.8 mới biết chính chúng đã đánh Cradle, khi toán bắt cóc của Maro lộ mặt.
- Kéo kén thoát hiểm ở mốc đóng chương: dùng lại cách kéo buồng ngủ đông của chương 1. Không thêm luật (log GDM dòng 87).

Người vớt của chương:

| Người | Đưa về thế nào | Quest mở (luật của gd-quan) | Cảnh truyện kèm quest | Mở (K12) |
|---|---|---|---|---|
| Yusuf Demir | Ông đang thức, điều bến thuê ở Veyl Waypost từ khi trạm của ông vỡ. Ông nhờ Dromm ghé xem cảng Ember có đáng về không. Sau một giờ giao thương có Dromm cập bến, người chơi dùng Skiff đón ông ở mốc C3.2. Theo K22 chuyến Skiff đó là của ngày sau giờ giao thương | Sửa bến thuộc KH12 | Ông đi một vòng cảng, chê hết, rồi pha trà | Thêm bến, tiện ích cảng |

Hai lần cập bến của Maro (tàu TA08) và cuộc bắt cóc:

| Lần | Vào lịch khi | Maro làm gì | Người trong trạm phản ứng |
|---|---|---|---|
| Thứ nhất (C3.3) | Bến thuộc KH12 Hoạt động | Gọi 1 thùng như mọi tàu, trả giá hời. Hỏi thăm trạm có bao nhiêu người thức | Yusuf vui vì có khách sộp. Linh thấy cách chào hơi lệch nghi thức Sennari. Giờ giao thương sau có sự cố đầu tiên (C3.4) |
| Thứ hai | Từ ngày kế tiếp sau C3.4 | Hỏi những thương hội Sennari nào hay ghé Ember. Hỏi mua bản sao dữ liệu của nhật ký trạm. Rời bến sớm | Ingrid đã gỡ thiết bị lạ, chưa biết của ai. Linh trả lời qua loa về Ilsume |
| Cuộc bắt cóc (C3.8) | Từ ngày kế tiếp sau C3.7, khi giai đoạn 3 đã lắp | Không cập bến Ember nữa. Toán của Maro áp mạn tàu TA04 ở Waypost Outer Ring của N4 | Mốc đóng chương |

- Thùng Maro gọi hay đơn đặt trước của Maro, giao hay không giao đều không đổi truyện (luật 16). Truyện đếm lần cập bến.
- Bản sao dữ liệu chỉ sao được từ vật loại dữ liệu (nhật ký trạm, hộp ghi hành trình) theo `vat-pham.md`. Ở chương 3 chỉ có nhật ký trạm.
- Nơi bắt cóc là đề xuất của gd-story, gd-world chốt. Toán bắt cóc là đơn vị của gd-combat.

- Vai truyện của boss BS-3 Warden Reaper: máy thu hoạch của lính The Wardens đang chạy trong khoang hàng của Flint, giữa những lồng nhốt Driftlife chờ đem bán. Phá lồng thì Driftlife quay sang đánh máy (cơ chế của gd-combat). Trận này và mẫu ở khe V1 nói cùng một điều.

Cuộc bắt cóc và cảnh đóng của chương:
- Ngoài không gian, chỉ lời radio (luật 8): tới Waypost Outer Ring, người chơi thấy tàu TA04 bị áp mạn, một kén thoát hiểm bị lính The Wardens kéo đi. Maro lộ mặt trên sóng, đòi tổ Ember đứng ngoài. Maro không đánh, hắn rút lên tàu TA08 khi toán bị hạ.
- Việc phải làm: hạ hoặc xua toán bắt cóc, kéo kén về Recall Beacon hoặc về cửa khí như kéo buồng ngủ đông.
- Khi kén về tới Ember, cảnh dài: người trong kén là Ilsume. Cô gỡ mạng che của thương hội, xưng tên thật là Sevra Ilvane, con gái Steward Ilvane, người thừa kế hợp pháp của Sennar.
- Biết tổ Ember là loài người và đang đi tìm lời giải cho vụ nổ, cô nói hai điều: kẻ đánh Cradle là First Warden Daskel, và Lodestar Survey là của hắn. Cô xin Ember giúp: mạng lưới The Kindling đã sẵn sàng lật đổ hắn.
- Rafa không tin một người lạ về điều thứ hai. Odile, qua sóng, đòi bằng chứng. Yusuf nhìn chén trà còn nguyên trên bàn, chén ông đã mời Maro.

#### Chương 4 - Tâm vụ nổ `Sau MVP`

Mục tiêu người chơi: vào bên trong Cradle lấy bằng chứng của chính loài người, xem đường tới Solace có thật không. Thứ tìm được là sự thật: Solace là mồi do Daskel dựng. Mục tiêu đổi thành giúp Sevra lật đổ Daskel, vì đó là đường duy nhất để rời được bãi vỡ.

- Cảnh mở (cảnh dài, không phải mốc): phát ở pha Chuẩn bị của ngày kế tiếp sau C3.8.
- Sevra ở ẩn trên Ember. Cô xin một điều trước mắt: cho tàu đưa tin của The Kindling cập bến, để người của cô biết cô còn sống.
- Rafa nhập vị trí Cradle cho Skiff: lời của cô sẽ được kiểm bằng hộp ghi hành trình. Qua sóng, Odile báo Lantern sắp sửa xong động cơ và sẽ đi tiếp tới Solace theo Lodestar Survey, trừ khi Ember mang về lý do để không đi.

| Mốc | Tên | Điều kiện | Nơi | Mở gì |
|---|---|---|---|---|
| C4.1 | Vào Cradle | Tới lối vào N7 | N7, Broken Hold | Map nhánh lớn trong nội thất tàu (kiểu chơi mới). Vật truyện của N7 hiện ra |
| C4.2 | Những dãy buồng | Tới Cryo Deck | N7 | Sự kiện hình không lời: hàng dãy buồng đã tắt |
| C4.3 | Kẻ đã vào trước | BS-4 Cradle Custodian xong và đã nhặt MM4.3 | N7, Engine Core | Đường sang Bridge Archive |
| C4.4 | Tên người dịch | Đã nhặt MM4.4 | N7, Bridge Archive | Lời thú nhận của Linh |
| C4.5 | Hộp ghi hành trình | Đã nộp hộp ghi hành trình STY-401 ở khoang dẫn đường | Ember, khoang dẫn đường | Cảnh Rafa và Linh nhận hộp |
| C4.6 | Không có gì ở đó | Ngày kế tiếp sau C4.5 | Ember, khoang dẫn đường | Hộp ghi hành trình chứng minh Solace là mồi. Sevra kể chuyện đảo chính và động cơ của Daskel. Dòng mục tiêu trong Sổ tay đổi |
| C4.7 | Đường dây thứ nhất (đóng chương) | Số đơn đặt trước tin mật của tàu TA11 đã giao xong đạt ngưỡng chương 4 ở mục 3 và giai đoạn 4 của động cơ chính đã lắp (K25) | Ember, bến | The Kindling biết Sevra còn sống và nhận được bằng chứng của Cradle. Maro báo cho Daskel, Daskel tới Warden Rig và cho quân khép các tuyến bay quanh Ember. Lối vào N8, chương 5 |

- Vì mốc đi theo thứ tự, C4.7 chỉ xét sau khi C4.6 xong. Đơn đặt trước tin mật đã giao xong từ trước đó vẫn được đếm.

| Mã | Là gì | ID vật | Nơi | Hiện từ mốc | Nói điều gì |
|---|---|---|---|---|---|
| MM4.1 | Vết vũ khí trên vỏ Cradle | STY-411 | N7, khe M1 ở Broken Hold | C4.1 | Cùng ký hiệu với thẻ trên Driftlife và máy thu hoạch |
| MM4.2 | Hiến chương định cư của United Accord | STY-412 | N7, khe M2 ở Cryo Deck | C4.1 | Bản phát cho người thức dậy: hạn mức khai thác, kho giống của Trái Đất, điều khoản không lặp lại những gì đã làm với Trái Đất. Loài người trong lời Daskel không có trong văn bản này |
| MM4.3 | Lõi dẫn đường của Cradle đã bị xóa, kèm nhật ký truy cập | STY-105 | N7, khe M3 ở Engine Core | C4.1 | Sau vụ nổ đã có kẻ lên tàu, cài lại hệ an ninh và xóa dữ liệu dẫn đường. Chúng không muốn ai đọc được Cradle đã thấy gì |
| MM4.4 | Bản gốc Lodestar Survey | STY-414 | N7, khe M4 ở Bridge Archive | C4.1 | Dấu của The Lattice, dấu nhận của phái bộ, và tên Linh Tran trong danh sách người dịch |
| V4.1 | Hộp ghi hành trình (vật nhiệm vụ) | STY-401 | N7, khe V1 ở Bridge Archive | C4.1 | Nộp ở khoang dẫn đường, là điều kiện của C4.5. Nội dung ở cảnh đóng |

Nhân vật xuất hiện: Sevra Ilvane, Rafael Ortega, Linh Tran, Nhem, Odile Laurent, người đưa tin của The Kindling (tàu TA11), Daskel (lời phát trên The Lattice).

Kiểu chơi mới và cách truyện đưa vào: map nhánh lớn trong nội thất tàu. Người chơi tin Cradle là nơi duy nhất còn giữ đường tới Solace, nên phải vào tận kho lưu trữ, đi trọn trong nhiều chuyến.
- Đơn tin mật không phải kiểu chơi mới, nó dùng luật đơn đặt trước sẵn có (luật 71 tới 73 của `tram-va-cang.md`): tàu TA11 của The Kindling có đơn đặt trước tự sinh mỗi ngày, Thông dịch viên đóng thùng tin mật CGO-421 lúc Mở giao thương, giao xong là tin tới nơi. Đây là phần nối tình báo trong lời Lead, làm bằng việc người chơi đã biết làm (log GDM dòng 87).

Người vớt của chương: không có (khung mục 7). Sevra ở ẩn trên Ember nhưng không phải người vớt: cô không mở tính năng nào. Hai chuyện riêng khép lại: Linh (người dịch hồ sơ) và Nhem (người chuyển hồ sơ).

Vai truyện của boss BS-4 Cradle Custodian: hệ an ninh của chính Cradle, bị The Wardens cài lại để giữ kho lưu trữ. Loài người bị chính con tàu của mình chặn đường.

Cảnh của C4.6 (cảnh dài):
- Rafa và Linh mở hộp ghi. Trước vụ nổ ít lâu, đài quan sát của Cradle đã đủ gần để tự nhìn về phía Solace. Lời cuối của người trực: phổ không khớp hồ sơ, ở đó không có gì cả. Rồi tới ánh chớp. Solace là mồi, đúng như Sevra nói.
- Sevra kể phần còn lại: The Meeting War, cha cô và chủ trương chung sống, người cha của Daskel chết trận, cuộc đảo chính, và việc Daskel cần một kẻ thù để giữ ghế. Cô bật một lời phát của hắn để tổ Ember nghe hắn nói gì về loài người.
- Qua sóng, Odile im rất lâu, rồi gỡ bản Lodestar Survey khỏi tường. Mục tiêu trong Sổ tay đổi: giúp Sevra, rời bãi vỡ.

Cảnh đóng (cảnh của C4.7, cảnh ngắn, phát sau giờ giao thương):
- Người đưa tin của The Kindling nhận kiện, chào Sevra bằng nghi thức cũ của nhà Ilvane. Tin về tới Sennar.
- Cùng lúc Maro báo về: người thừa kế đang ở chỗ loài người. Daskel rời Sennar, tự tới Warden Rig.

#### Chương 5 - Rời neo `Sau MVP`

Mục tiêu người chơi: đưa Sevra về căn cứ của The Kindling, giữ đường dây tin thông suốt, đánh Warden Rig khi cách mạng nổ ra, lấy bản đồ sao thật, sửa xong động cơ chính và rời neo.

- Cảnh mở (cảnh dài, không phải mốc): phát ở pha Chuẩn bị của ngày kế tiếp sau C4.7.
- Warden Rig hiện rõ ở rìa Vùng trung tâm: Daskel đã tới và phong tỏa bãi vỡ. Giờ giao thương vắng hẳn, chỉ còn Tikko, Dromm và tàu đưa tin.
- Sevra nói cô phải về The Hearth: người nằm vùng chỉ nổi dậy khi nghe lệnh từ chính cô.
- Rafa nói thẳng: mọi bản đồ loài người đang có đều chép từ hồ sơ giả, không tấm nào tin được. Kẻ dựng hồ sơ thì phải có bản đồ thật.

| Mốc | Tên | Điều kiện | Nơi | Mở gì |
|---|---|---|---|---|
| C5.1 | Đưa người thừa kế về | Kén của Sevra BNG-102 chạm cửa The Hearth | N4, từ cửa vào tới The Hearth | Hộ tống, dùng luật kéo sẵn có: Skiff chở nhóm và kén từ Ember tới cửa N4, người chơi kéo kén qua vòng phong tỏa. Cửa The Hearth mở khi kén tới. Sevra nắm lại mạng lưới |
| C5.2 | Lời nói dối đi đường nào | Tổng số đơn đặt trước tin mật của tàu TA11 đã giao xong đạt ngưỡng chương 5 ở mục 3 | Ember, bến | Nhem mở The Lattice cho The Kindling: bằng chứng của Cradle tới Sennar. Ngày nổi dậy được định. Trong giờ giao thương chỉ có lời bong bóng, cảnh ngắn phát sau giờ giao thương |
| C5.3 | Vào Warden Rig | Tới N8 bằng Skiff | N8, Rig Landing | Sennar nổi dậy. Tổ Ember giữ chân Daskel ở Rig. Vật truyện của N8 hiện ra |
| C5.4 | Mở lồng | Đã thả Driftlife ở Holding Pens | N8, Holding Pens | Driftlife quay sang đánh lính The Wardens. Đường vào Command Deck |
| C5.5 | First Warden | BS-5 Daskel xong | N8, Command Deck | Trận đối đầu cuối (kiểu chơi mới). Daskel bị khuất phục, bị bắt và giao cho The Kindling. Data Core mở |
| C5.6 | Tọa độ thật | Đã nộp bản đồ sao thật STY-501 ở khoang dẫn đường | Ember, khoang dẫn đường | Sevra, vừa được tôn làm Steward of Sennar, trao tọa độ một hành tinh có sự sống thật. Công thức RCP-207: chế ENG-105 từ STY-501 và STY-401 đang nằm trong kho |
| C5.7 | Rời neo | Động cơ chính KH13 xong giai đoạn 5 và mọi người chơi đang có mặt xác nhận rời neo ở khoang dẫn đường | Ember | Cảnh rời neo |
| C5.8 | Ngoài bãi vỡ (kết) | C5.7 xong | Ember, ngoài Glass Nebula | Cảnh kết (mục 2.8), rồi về menu chính (luật 26) |

- Hai cảnh cuối của C5.7 và C5.8 phát liền nhau cho mọi người đang có mặt, không chờ điểm nghỉ. Đây là ngoại lệ duy nhất của quy tắc một cảnh mỗi điểm nghỉ.
- Xác nhận rời neo trong co-op theo cách xác nhận ngủ của K23: ai không trả lời trong thời hạn thì tính là đồng ý.
- Vì mốc đi theo thứ tự, C5.3 chỉ xét sau khi C5.2 xong. Đơn đặt trước tin mật đã giao xong từ chương 4 vẫn được đếm vào ngưỡng chương 5.

| Mã | Là gì | ID vật | Nơi | Hiện từ mốc | Nói điều gì |
|---|---|---|---|---|---|
| MM5.1 | Lệnh phục kích Cradle mang dấu Daskel | STY-502 | N8, khe M1 ở Data Core | C5.3 | Lệnh dựng Lodestar Survey và lệnh đánh Cradle, cùng một dấu First Warden. Bằng chứng The Kindling cần để dân Sennar thấy kẻ thù họ được dạy phải ghét là do ai dựng lên |
| V5.1 | Bản đồ sao thật (vật nhiệm vụ) | STY-501 | N8, khe V1 ở Data Core | C5.3 | Vùng trời thật quanh bãi vỡ và các tuyến của Sennar. Không có nó thì tọa độ nào cũng không dùng được. Nộp ở khoang dẫn đường, là điều kiện của C5.6 |

Chương 5 có một vật manh mối và một vật nhiệm vụ. Bằng chứng còn lại là hình ảnh người chơi tự thấy: Holding Pens, các ống chứa trong Command Deck, và ở Rig Landing một đống thẻ tên buồng ngủ đông của các trạm đã bị cướp (chi tiết hình cho art, không phải khe).

Nhân vật xuất hiện: mọi người vớt, Sevra Ilvane, Tikko, Dromm, Nhem, Odile, Bram, Elias, Wren, Daskel.

Kiểu chơi mới và cách truyện đưa vào:
- Hộ tống: Sevra phải tới The Hearth thì người nằm vùng mới nhận lệnh. Cô đi trong kén, Skiff chở tới cửa N4, tổ Ember kéo kén qua vòng phong tỏa. Không thêm luật (log GDM dòng 87).
- Trận đối đầu cuối: bản đồ thật nằm sau lưng Daskel, không có đường nào khác để lấy. Giữ chân hắn ở Rig cũng là phần việc The Kindling cần ở tổ Ember.

Người vớt của chương: không có.

Vì sao Daskel có mặt ở bãi vỡ: Maro báo người thừa kế đang ở chỗ loài người. Với Daskel đó là hai mối hận ở cùng một chỗ, nên hắn tự tới. Sennar vắng hắn đúng lúc The Kindling cần.

Vai truyện của boss BS-5 Daskel: hắn đứng giữa những ống chứa Driftlife đang nuôi khiên cho hắn, giữa kho hàng cướp được của quân đồn trú. Người chơi tắt khiên bằng cách thả Driftlife ra (cơ chế của gd-combat). Hắn nói về cha, về trật tự, về loài người, và không lên giọng. Daskel thua trận, bị bắt và giao cho The Kindling. Truyện không kể bản án.

Cảnh đóng: mục 2.8.

### 2.6 Nhân vật truyện

Hồ sơ ngoại hình và yêu cầu art do gd-character giữ ở `ho-so-nhan-vat.md`. Ở đây là phần truyện.

#### Tổ Ember (nhân vật người chơi) `MVP`

- Bốn hồ sơ mặc định: Nguyễn Việt, Jonas Weber, Mei Tanaka, Niamh Doyle. Cả bốn là kíp vận hành trạm, không ai là chuyên gia. Chuyên gia là những người vớt.
- Người chơi chọn một hồ sơ và đổi tên được. Hồ sơ không ai chọn mà rơi vào buồng hỏng thì là người đã chết, tên trên buồng giữ tên mặc định.
- Nhân vật người chơi không có lời thoại riêng. Nhân vật khác gọi họ bằng tên người chơi đặt, hoặc gọi chung là "Ember".

**Tính cách bốn hồ sơ mặc định** (GD-078) `MVP`

Tính cách của PC chỉ hiện qua kênh không phải lời thoại: idle trong trạm, biểu cảm, đồ vật, mô tả preset, cách người vớt nhắc. Không có câu nói nào của PC. Nghề cũ thuộc kíp vận hành của Cradle, chỉ là nền, không ai thành chuyên gia: mở tính năng trạm vẫn là việc của người vớt. Bốn người chung một khuôn: nền là người thường làm việc ở hậu trường con tàu, hài đến từ tính cách chứ không từ câu đùa.

| Mã | Tên, quốc gia | Giới tính, tuổi | Da và tóc | Nghề cũ trên Cradle (chỉ là nền) | 3 nét tính cách | Thói quen nhìn thấy (idle đứng tại chỗ) | Nét mặt | Vật để lại khi buồng hỏng | Nhãn |
|---|---|---|---|---|---|---|---|---|---|
| PC-1 | Nguyễn Việt, Việt Nam | Nam, khoảng 29 | Da sáng ngả vàng nhạt, tóc đen dài ngang vai búi gọn dưới mũ | Nhân viên trực ca ở khu ngủ đông | Bền bỉ, ít lời, bướng một cách bình tĩnh | Vươn vai xoay cổ tay một lần rồi chỉnh lại quai đai. Khi đứng lâu thì ngẩng nhìn ra xa | Mắt sáng và thẳng, cằm hơi ngẩng, môi mím nhẹ khi bình thường | Một cuốn sổ nhỏ bìa mòn, trang cuối còn trống | MVP |
| PC-2 | Jonas Weber, Đức | Nam, khoảng 34 | Da sáng, tóc nâu rối, râu lún phún | Nhân viên bảo trì băng tải và cửa khoang ở kho Cradle | Ngay thật, tốt bụng, chậm một nhịp | Đẩy gọng kính trong mũ dù kính không trượt, rồi nhìn quanh chậm | Mắt mở to chăm chú, hơi gù khi nghe, miệng mím khi nghĩ | Cặp kính gập, một gọng quấn băng keo | MVP |
| PC-3 | Mei Tanaka, Nhật Bản | Nữ, khoảng 26 | Da sáng, tóc đen ngắn bồng | Nhân viên dịch vụ khu ở tập thể của đoàn | Thực tế, nhanh nhẹn, hay bướng | Vỗ balo hai cái rồi xoay tròn tại chỗ nhìn quanh | Dáng nhỏ, đầu hơi nghiêng, má phồng khi tập trung, cười nhanh rồi tắt | Một con thú nhồi bông nhỏ buộc ở quai balo | Sau MVP |
| PC-4 | Niamh Doyle, Ireland | Nữ, khoảng 36 | Da sáng có tàn nhang, tóc nâu đỏ buộc đuôi thấp gọn trong mũ | Nhân viên bốc xếp ở bến hàng Cradle | Điềm tĩnh, hiền, vụng về khi cần tinh tế | Gãi gáy khi thấy mình bị nhìn, rồi xoay vai cho đỡ mỏi | Vai rộng nhưng mắt hiền, nhìn xuống khi bị khen | Một đôi găng da sờn, xếp ngay ngắn | Sau MVP |

Ghi chú để bốn người khác nhau và không trùng người vớt:

- Bốn người ngang nhau về luật (Lead chốt 2026-11-25): cùng chỉ số, cùng kỹ năng, không vai trò riêng. Bảng trên chỉ là nền để art dựng asset, không đồ vật hay thói quen nào gợi một vai gameplay. Nghề cũ chỉ là nền, không cấp lợi thế nào.
- Trục khác nhau: Việt bền (vươn vai, ngẩng nhìn xa), Jonas chậm (đẩy kính, nhìn quanh), Mei nhanh (vỗ balo, xoay tròn), Niamh hiền (gãi gáy, xoay vai). Mỗi người một nhịp idle riêng nên hai người cùng đứng trong trạm vẫn tách nhau, kể cả khi tô đen.
- Không trùng người vớt: không ai thẳng và khô như Ingrid, không ai lịch sự bối rối như Linh, không ai mê tín như Rafa, không ai nói chuyện với vật như Amara, không ai ồn như Yusuf. Hồ sơ PC im lặng, người vớt là người nói.
- Hài nhẹ: Jonas đẩy kính khi kính không trượt, Mei vỗ balo giữa cảnh hỏng, Niamh gãi gáy khi bị nhìn, Việt vươn vai giữa lúc căng. Không câu đùa nào, không dùng ở mốc mất mát.
- Biểu cảm 8 loại (`ho-so-nhan-vat.md` 2b.1) là bộ chung. Mỗi hồ sơ có biểu cảm "bình thường" đặt khác nhau như cột Nét mặt ở trên, và cùng một sự kiện thì thời gian giữ biểu cảm khác nhau. Các hoạt cảnh idle ở bảng là clip đứng tại chỗ, tắt được trong tùy chọn, không chạy khi đang điều khiển.
- Mô tả ngắn trên màn chọn preset (không phải lời của PC, ghi ngôi thứ ba, tối đa 80 ký tự, ví dụ trình gd-ux): Việt "Bền bỉ, ít lời. Cứ bình tĩnh đi tiếp." Jonas "Ngay thật, tốt bụng. Chậm một nhịp." Mei "Nhanh nhẹn, thực tế. Hay bướng." Niamh "Điềm tĩnh, hiền. Hơi vụng."
- Người vớt nhắc tới họ qua nét nhìn thấy, không qua lời của PC. Ví dụ hướng: Ingrid nhận xét người hay vươn vai giữa lúc căng là người không chịu căng theo, Linh nhận xét người hay đẩy kính là người nghĩ xong mới nói, Yusuf mời trà người đang xoay tròn nhìn quanh. Chỉ nhắc nét của hồ sơ đang có người chơi dùng, gọi theo tên người chơi đặt (luật 14). Hồ sơ buồng hỏng không được người vớt nhắc tên.
- Vật để lại đặt trên hoặc cạnh buồng tắt, bấm vào hiện dòng ở mục "Dòng trên buồng đã tắt" (cuối file), không thêm cảnh. Vật là thứ nhìn thấy khớp với thói quen, người chơi tự đọc ra ai đã mất.
- Người vào sau (luật 11 mục 2, biến thể B, đặt tên mới) dùng chung thói quen và idle của slot, vì thói quen gắn với hình preset chứ không gắn với người chơi. Người chơi nhập vai tự do: tính cách chỉ là nền nhìn thấy, không ép hành vi hay kỹ năng.

#### Năm người vớt

| Tên | Nghề, quốc gia gốc | Tính cách | Giọng | Mâu thuẫn riêng | Nhãn |
|---|---|---|---|---|---|
| Ingrid Halvorsen | Kỹ sư, Na Uy. Cả đời làm giàn khoan biển | Thẳng, khô, làm trước nói sau, không chịu được đồ hỏng | Câu ngắn, mệnh lệnh, đùa không đổi nét mặt | Tự hào về nghề khai thác. Khi sự thật lộ dần, cô phải nhìn lại chính nghề của mình | `MVP` |
| Linh Tran | Thông dịch viên, Việt Nam. Từng ở phái bộ thương mại với The Veyl | Nhanh miệng, khéo, hay chữa lời người khác, giữ thể diện cho cả hai bên | Lịch sự, chen lời giải thích, thỉnh thoảng dịch quá trung thực | Cô nằm trong nhóm dịch Lodestar Survey. Cô nhận ra tên hồ sơ từ chương 1 và giấu tới chương 4 | `MVP` |
| Rafael Ortega (Rafa) | Hoa tiêu, Chile. Lớn lên cạnh các đài thiên văn sa mạc | Mơ mộng, mê tín với sao, sợ phải chịu trách nhiệm cho đường đi của người khác | Ẩn dụ đi biển và bầu trời, nói vòng rồi mới vào ý | Bản đồ từng giết cả tàu. Tới chương 5 anh phải tin một tọa độ do người khác trao | `Sau MVP` |
| Amara Okafor | Nhà sinh học, Nigeria. Quê ở vùng châu thổ bị dầu tàn phá | Tỉ mỉ, ấm, nói chuyện với mẫu vật, nghiêm hẳn khi nói về tuyệt chủng | Chậm, rõ, dùng từ chính xác, không nói quá | Cô lên tàu để giữ kho giống của Trái Đất, kho đó đã mất. Cô phải chọn nhìn Driftlife là tài nguyên hay là sinh vật | `Sau MVP` |
| Yusuf Demir | Trưởng cảng, Thổ Nhĩ Kỳ. Điều hành cảng ở một eo biển lớn | Ồn ào, hiếu khách, coi mặc cả là niềm vui, quản người bằng trà và tiếng quát | Nói to, xưng hô thân mật, hay ví von chuyện bến bãi | Ông tin buôn bán với ai cũng được miễn công bằng. Chính ông đã mời Maro trà | `Sau MVP` |

- Quest mở tính năng của từng người: xem bảng người vớt trong chương 1, 2, 3. Cả năm khớp K12 và luật 15 của `tram-va-cang.md`.
- Hài nhẹ (B9) đặt ở: Ingrid đùa mặt lạnh, Linh dịch quá trung thực, Rafa mê tín, Amara nói chuyện với mẫu, Yusuf và những chén trà.

#### Thương nhân The Veyl

| Tên | Chủng tộc, tàu | Tính cách | Hài đến từ đâu | Vai truyện | Ghé cảng từ | Nhãn |
|---|---|---|---|---|---|---|
| Tikko | Oru, TA01 | Tò mò, mau miệng, tự xưng bằng tên | Mê đồ Trái Đất và hiểu sai công dụng của chúng | Khách đầu tiên. Sang chương 5, khi phần lớn tàu đã bỏ bãi vỡ, Tikko vẫn ghé đều | Chương 1 | `MVP` |
| Ilsume | Sennari, TA04 | Trịnh trọng, chậm rãi, coi nghi thức là hàng hóa quý nhất | Lễ nghi dài dòng trong khi tàu của chính bà sắp rời bến | Tên giả của Sevra Ilvane. Nghi thức là thứ duy nhất cha cô để lại, nên cô giữ nó kỹ hơn mọi thương nhân thật. Sau mốc C3.8 không còn Ilsume, tàu TA04 không ghé nữa | Chương 2 | `Sau MVP` |
| Vaeth | Aelith, TA05 | Say mê, lơ đãng, chỉ nhìn sinh vật không nhìn người | Khen con vật trong kiện, quên trả lời người bán | Cho việc bắt sống và nuôi một người mua. Sau cú lật, Vaeth là thương nhân đầu tiên tin Amara | Chương 2 | `Sau MVP` |
| Dromm | Brakk, TA06 | Ít lời, chắc chắn, đánh giá bằng mắt | Mặc cả bằng im lặng, người chơi phải tự đoán | Người xem hộ Yusuf cảng Ember. Sang chương 5, khi Daskel phong tỏa bãi vỡ, Dromm vẫn chở hàng tới | Chương 3 | `Sau MVP` |
| Nhem | Kesh, TA10 | Điềm đạm, tự hào về nghề buôn tin, tin rằng tin tức không có lỗi | Không hài. Nhem là nhân vật mang nỗi áy náy | Người đã chuyển Lodestar Survey mà không biết nguồn. Người đưa sự thật ngược lại đúng con đường đó | Chương 3 | `Sau MVP` |

Hành vi ở cảng của từng loại tàu do gd-quan giữ.

- Đề cương chuyện riêng của thương nhân (luật 25) `Sau MVP`. Mỗi đoạn là tối đa 3 lời bong bóng lúc tàu cập bến. Lời cụ thể viết khi dựng chương có thương nhân đó.

| Thương nhân | Đoạn một | Đoạn hai | Đoạn ba | Mở sau mốc (đoạn một, hai, ba) |
|---|---|---|---|---|
| Tikko | Khoe một món đồ Trái Đất vừa gom được và đoán sai công dụng của nó | Kể vì sao dân Oru đi lẻ: con tàu là nhà, không có nơi nào để về | Nói vì sao vẫn ghé khi tàu khác đã bỏ: dân Oru không bỏ một ngọn đèn còn sáng | C1.8, C1.9, C4.7 |
| Ilsume | Dạy một nghi thức chào và chê cách Ember chào | Hé lộ thương hội của bà có lệnh tránh xa bãi vỡ, và bà vẫn tới | Hỏi nếu có người bị The Wardens tìm thì Ember có giấu không | C2.7, C3.1, C3.4 |
| Vaeth | Hỏi tên từng con Driftlife đã mua, như hỏi thăm người quen | Kể bộ sưu tập là để giữ lại những loài sắp mất | Sau cú lật: đưa Amara ghi chép của mình về những đàn mang thẻ | C2.4, C2.8, C3.7 |
| Dromm | Không nói gì, để lại một kiện thừa không tính tiền | Một câu duy nhất, về Yusuf | Nói lý do vẫn tới giữa vòng phong tỏa: còn thiếu Yusuf một chén trà | C3.1, C3.2, C5.1 |
| Nhem | Giảng vì sao tin là hàng và hàng thì không có lỗi | Hỏi Linh về bản dịch năm xưa | Xin Ember một bản sao hộp ghi hành trình để phát lên The Lattice | C3.1, C4.4, C4.7 |

- Đoạn ba của Tikko và Nhem chờ mốc đóng chương 4, của Dromm chờ đầu chương 5, của Vaeth chờ cú lật. Người chơi giao nhiều hàng từ sớm cũng không nghe được lời của chương sau.
- Chuyện riêng của Ilsume khép lại ở mốc C3.8, khi cô không còn là Ilsume. Đoạn nào chưa kịp phát thì bỏ, không chặn gì.
- Người chơi tới mốc mở mà chưa đủ số lần giao thì đoạn đó phát ở lần cập bến đầu tiên sau khi đủ.

#### Người của Lantern, The Remainers, Sennar

| Tên | Thuộc | Vai | Tính cách và giọng | Điều nhân vật này muốn | Nhãn |
|---|---|---|---|---|---|
| Odile Laurent | Station Lantern | Trưởng trạm | Cứng, kỷ luật, nói bằng mệnh lệnh và nghĩa vụ | Hoàn thành nhiệm vụ của United Accord đúng như được giao. Với bà nhiệm vụ đó là tới Solace, nơi bà tin là có thật cho tới mốc đóng chương 4. Sau đó bà là người mất đích, cho tới khi có một tọa độ bà tự kiểm được | `Sau MVP` |
| Bram Kowalski | Station Lantern | Trưởng xuồng tiếp tế, tàu TA03 | Hay than, tốt bụng, lần nào cũng xin thêm một thứ ngoài danh sách | Có một trạm bạn để ghé | `MVP` (chỉ giọng), `Sau MVP` |
| Elias Vance | The Remainers | Thủ lĩnh, cựu sĩ quan an ninh của Cradle | Khắc nghiệt, nói ít, nỗi sợ giấu sau kỷ luật | Giữ những người còn lại sống, bằng cách không đi đâu cả | `Sau MVP` |
| Wren | The Remainers | Đứa trẻ sinh ra trên The Raft sau The Scattering | Hỏi thẳng, chưa từng thấy một hành tinh | Biết bên ngoài có gì | `Sau MVP` |
| Sevra Ilvane | Sennar, The Kindling | Người thừa kế hợp pháp, con gái Steward Ilvane. Giả làm thương nhân Ilsume tới mốc C3.8 | Dưới tên Ilsume: trịnh trọng, chậm rãi. Khi là chính mình: vẫn giữ nghi thức nhưng nói thẳng, nhận lỗi thay cho dân mình mà không xin tha | Trả Sennar về chủ trương của cha, và trả cho loài người món nợ Daskel gây ra dưới tên Sennar | `Sau MVP` |
| Maro | The Wardens | Gián điệp của Daskel săn Sevra. Giả làm thương nhân của một thương hội Sennari không có thật, tàu TA08. Chỉ huy toán bắt cóc | Vồn vã, hào phóng, hỏi quá nhiều. Khi lộ mặt thì phẳng lặng | Tìm ra người thừa kế, và giữ cho báo cáo về tàn dư loài người luôn có số | `Sau MVP` |
| Daskel | The Wardens | Tên độc tài của Sennar, tự phong First Warden, boss BS-5. Con trai một sĩ quan chết trong The Meeting War | Phẳng, từ tốn, nói về trật tự, hy sinh và người cha. Không bao giờ lên giọng | Giữ ghế bằng một kẻ thù chung, và tin mình đang trả nợ cho cha | `Sau MVP` |

- Ba lập trường của con người trước sự thật: Odile muốn đi tiếp tới đích đã được giao. Elias không muốn đi đâu nữa. Tổ Ember chọn tin một người lạ. Chương 4 lấy mất đích của Odile. Chương 5 cho thấy ở lại như Elias là chờ lính tới cướp, và đích mới chỉ có được nhờ đã cứu người.
- Steward Ilvane không xuất hiện. Ông có mặt qua lời Sevra và qua nghi thức cô giữ.
- Gieo trước về Ilsume: Linh nhận xét nghi thức của bà cổ hơn mọi thương hội (chương 2), bà vẫn tới dù thương hội cấm (chuyện riêng đoạn hai), Maro hỏi về các thương hội Sennari ghé Ember (lần cập bến thứ hai).

### 2.7 Cảnh tỉnh dậy, người vào sau, người rời phiên `MVP`

Cảnh tỉnh dậy theo số người tỉnh dậy ban đầu host chọn (C2):

| Số người | Cảnh | Lời |
|---|---|---|
| 1 | Một buồng mở. Ba buồng còn lại tắt đèn. Người chơi bước ra một mình | Chỉ có dòng radio tự động của trạm. Không ai nói gì khác |
| 2 hoặc 3 | Các buồng mở lệch nhau vài nhịp. Những buồng còn lại tắt đèn. Những người tỉnh dậy nhìn nhau rồi nhìn buồng tắt | Như trên |
| 4 | Cả bốn buồng mở. Không có buồng tắt | Như trên |

- Cảnh dài như nhau với mọi số người. Không nhân vật nào nói thay người chơi.
- Buồng tắt bấm vào được: hiện tên người trong buồng và một dòng (bảng "Dòng trên buồng đã tắt của Ember" ở mục 13). Không bắt buộc, không phải vật manh mối.
- Chơi bốn người thì Ember không có buồng tắt. Người chơi gặp buồng tắt lần đầu ở Station Cinder (MM1.3), nên không thiếu nhịp mất mát.

Người chơi vào sau (C2):

- Người vào sau là một người sống sót vớt về. Ở điểm nghỉ kế tiếp, Skiff hoặc xuồng của Bram đưa về một buồng ngủ đông vô danh, buồng mở, người mới bước ra.
- Trước khi có bến Skiff, buồng được dòng mảnh vỡ đưa tới sát cửa khí và người trong trạm kéo vào.
- Cảnh dài tối đa 3 câu, phát một lần cho mỗi người mới, bỏ qua được. Người mới thừa hưởng toàn bộ tiến trình truyện của thế giới và đọc lại được mọi thứ trong Sổ tay. Cảnh của các mốc đã xong trước khi họ vào không vào hàng chờ của họ.
- Người vào sau không lấp buồng tắt. Buồng tắt vẫn tắt, người chết vẫn chết. Chỗ ngủ của người vào sau theo luật của gd-quan và gd-character.

Người rời phiên (C2):

- Nhân vật của người rời ở lại trạm, đứng ở khoang buồng ngủ đông, có một lời chào chung. Không có cảnh chia tay.
- Người đó quay lại thì điều khiển lại đúng nhân vật ấy, không phát lại cảnh vào. Hàng chờ cảnh của họ giữ nguyên, cộng thêm cảnh của các mốc xong trong lúc họ vắng thì không có: họ đọc tóm tắt trong Sổ tay.
- Rời phiên hoặc mất kết nối giữa chuyến tính như bị kéo về (C10). Vật truyện xử lý theo biên 13 ở mục 4.

### 2.8 Kết game `Sau MVP`

- Lead chốt (B9): cách mạng thành công, Sevra lên nắm quyền, lập lại hòa bình, giúp loài người tìm người sống sót và trao tọa độ một hành tinh có sự sống thật. Ember rời neo lên đường.
- Kết mở ở chỗ hành trình tới đó để cho phần sau (log GDM dòng 92).
- Lời hứa "tới nơi thì dựng khác đi" nằm ở cảnh kết (log GDM dòng 91).

Cảnh rời neo (C5.7): động cơ chính chạy. Mỗi người vớt đứng ở khoang của mình. Bộ neo nhả. Lantern rời theo. Một phần The Raft rời theo, Elias đứng lại ở cửa khí nhìn Wren lên xuồng. Vòng phong tỏa đã tan: tàu của thương nhân The Veyl quay lại, đứng thành hàng nhìn Ember đi. Tàu của The Kindling tỏa vào bãi vỡ, dò những buồng ngủ đông còn chạy.

Cảnh ngoài bãi vỡ (C5.8), dài không quá số câu của một cảnh dài:
1. Ember ra khỏi Glass Nebula. Lần đầu trong game màn hình có một bầu trời sao sạch, không mảnh vỡ.
2. Rafa mở bản đồ thật. Trên đó có một điểm Sevra đã đánh dấu. Điểm đó không tên Solace.
3. Wren hỏi nơi đó tên gì. Chưa ai đặt.
4. Linh đọc lời Sevra gửi kèm: ai còn ngủ trong bãi vỡ sẽ được đánh thức và chỉ đường theo sau.
5. Odile nói lần này bà đã tự kiểm số liệu, hai lần.
6. Amara đặt hiến chương MM4.2 lên bàn: tới nơi, ta dựng khác đi.
7. Yusuf chữa không khí theo cách của ông: đường còn dài, trà thì ông lo.
8. Màn hình cuối: tên trên những buồng đã tắt của Ember, Cinder, Wick, Flint, rồi mới tới tên người làm game.

Người chơi thắng ở kết: ra khỏi bãi vỡ còn sống, mang theo mọi người đã vớt, hạ được Daskel, góp phần trả Sennar về hòa bình, và có một đích thật.

Vì sao tin tọa độ này sau khi đã bị một hồ sơ lừa: tọa độ nằm trên bản đồ sao thật do chính tổ Ember lấy từ tay Daskel (V5.1), và Odile, Rafa tự kiểm được trên đó. Lodestar Survey thì không ai kiểm được gì.

Điều người chơi mang theo khi rời neo:

| Thứ | Từ đâu | Hiện trong cảnh kết thế nào |
|---|---|---|
| Những người vớt được | Chương 1 tới 3 | Đứng ở khoang của mình khi rời neo |
| Khoang sinh quyển và đàn Driftlife đã nuôi | K16 | Có nuôi thì khoang có đàn, không nuôi thì khoang trống vẫn đi. Không phạt (B10) |
| Thẻ tên các buồng đã tắt | MM1.3 | Màn hình cuối |
| Bản đồ sao thật | V5.1 | Rafa mở ra ở câu 2 |
| Một tọa độ | Sevra, mốc C5.6 | Điểm trên bản đồ ở câu 2. Hành trình tới đó dành cho phần sau (B11) |

Sau cảnh kết game về menu chính. Bản lưu và việc chơi tiếp theo luật 26.

### 2.9 Gieo nghi ngờ về Solace trước chương 4 `Sau MVP`

- Mục đích: khi sự thật lộ ra ở chương 4, người chơi thấy mình đã được báo trước.
- Nguyên tắc: trước mốc đóng chương 3 chỉ gieo nghi ngờ về hồ sơ và về nguồn của nó, không nhân vật nào nói thẳng Solace không có thật. Ở mốc đóng chương 3 Sevra nói thẳng, nhưng đó là lời một người lạ, không ai kiểm được. Chương 4 là đi lấy bằng chứng của chính loài người.

| Chương | Chỗ gieo | Ai, ở đâu | Người chơi nghe thấy gì |
|---|---|---|---|
| 1 | MM1.2 | Linh, Station Cinder | Linh im lặng khi thấy tên Lodestar Survey. Có điều gì đó cô không nói |
| 2 | MM2.4 | Odile, Station Lantern | Odile tin hồ sơ tuyệt đối. Niềm tin quá chắc là thứ đầu tiên khiến người chơi gợn |
| 2 | Cảnh đóng C2.8 | Rafa, Ember | Ba lõi dẫn đường cháy đúng phần đường tới Solace. Rafa không tin vào trùng hợp |
| 3 | MM3.1 | Nhem và sổ hải trình, Veyl Waypost | Một hồ sơ tốt thế mà không ai nhận là của mình, và chưa tàu nào từng tới Solace. Nỗi áy náy của Nhem bắt đầu từ đây |
| 3 | MM3.5 | Lõi dẫn đường của Flint | Thêm một lõi cháy đúng chỗ đó |
| 3 | Lời Elias ở C3.5 | The Raft | Người xem sao của The Remainers từng kiểm số liệu trong hồ sơ: mọi con số đều quá tròn, quá đẹp. Elias gọi việc đi tiếp là mồi |
| 3 | Cảnh đóng C3.8 | Sevra, Ember | Sevra nói Lodestar Survey là của Daskel. Rafa không tin, Odile đòi bằng chứng. Người chơi vào Cradle để biết ai đúng |

Khi mốc C4.6 xong, mọi chỗ gieo trên được gọi lại trong Sổ tay dưới một mục chung.

## 3. Tham số

Mọi số là khởi điểm, chưa đo. Sim và playtest sẽ chỉnh.

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nhóm tác động | Nguồn | Nhãn |
|---|---|---|---|---|---|---|---|
| Số câu tối đa của cảnh ngắn | 3 | 2 đến 4 | Truyện rõ hơn, chặn vòng ngày lâu hơn | Nhanh hơn, dễ cụt ý | Nhịp vòng ngày | ước, playbook gd-story | `MVP` |
| Số câu tối đa của cảnh dài | 8 | 6 đến 10 | Mốc chương nặng ký hơn | Mốc chương nhạt | Nhịp chương | ước | `MVP` |
| Ký tự tối đa một câu hộp thoại | 80 | 60 đến 90 | Viết thoải mái hơn, dễ tràn khi dịch | Phải cắt ý | Hộp thoại, dịch | gốc `10-narrative.md` [S27], gd-ux đã nhận (story.box) | `MVP` |
| Ký tự tối đa một dòng radio | 60 | 40 đến 70 | Đọc không kịp khi đang bay | Thiếu ý | HUD | ước, gd-ux đã nhận (story.radio) | `MVP` |
| Ký tự tối đa một lời bong bóng | 60 | 40 đến 70 | Che màn khi đang làm giờ giao thương | Thiếu ý | Giờ giao thương, map nhánh | ước, gd-ux đã nhận (story.bubble) | `MVP` |
| Tốc độ đọc giả định | 17 ký tự mỗi giây | 15 đến 17 | Cảnh tính ra ngắn hơn | Cảnh tính ra dài hơn | Thời lượng cảnh | gốc `10-narrative.md` [S28][S29] | `MVP` |
| Số cảnh phát ở một điểm nghỉ, tính theo từng người | 1 | 1 đến 2 | Truyện dồn, chặn lâu | Truyện giãn | Nhịp vòng ngày | ước | `MVP` |
| Số biến thể của mỗi trạng thái lời nhân vật | 4 | 3 đến 6 | Ít lặp, tốn công viết | Lặp nhanh | Lời trong trạm | quy ước phòng, chưa có nguồn ngoài | `MVP` |
| Số giờ giao thương đã xong để C1.9 xong | 3 | 2 đến 5 | Chương 1 dài hơn | Lantern tới quá sớm, chưa quen giờ giao thương | Thời lượng chương 1 | ước, gd-economy chỉnh | `MVP` |
| Số lần cập bến của Maro trước cuộc bắt cóc | 2 | 1 đến 3 | Nghi ngờ kéo dài, dễ đoán ra | Cuộc bắt cóc tới khi chưa kịp nghi | Chương 3 | ước | `Sau MVP` |
| Số đơn đặt trước tin mật đã giao xong để C4.7 xong (ngưỡng chương 4) | 1 | 1 đến 2 | Chương 4 thêm ngày ở cảng | Không giảm được | Chương 4 | ước, gd-quan chỉnh | `Sau MVP` |
| Tổng số đơn đặt trước tin mật đã giao xong để C5.2 xong (ngưỡng chương 5) | 2 | 2 đến 4 | Chương 5 dài thêm, sàn ngày tăng | Nối tình báo chỉ còn là một lần giao | Chương 5 | ước, gd-quan chỉnh | `Sau MVP` |
| Số đoạn chuyện riêng của mỗi thương nhân | 3 | 2 đến 4 | Thương nhân sâu hơn, tốn công viết | Thương nhân mỏng | Giờ giao thương | ước | `Sau MVP` |
| Số lần phục vụ xong tàu để mở đoạn chuyện riêng thứ nhất | 3 | 2 đến 4 | Chuyện riêng tới muộn | Tới khi chưa quen thương nhân | Giờ giao thương | ước | `Sau MVP` |
| Số lần phục vụ xong tàu để mở đoạn thứ hai | 6 | 5 đến 8 | Như trên | Như trên | Giờ giao thương | ước | `Sau MVP` |
| Số lần phục vụ xong tàu để mở đoạn thứ ba | 10 | 8 đến 14 | Như trên | Như trên | Giờ giao thương | ước | `Sau MVP` |
| Số vật truyện tối thiểu mỗi chương | 2 | 2 đến 6 | Map nhánh dày truyện | Chương thiếu chứng cứ | Map nhánh | tiêu chí brief GD-022 | `MVP` |

Số tính từ tham số (in bằng script cùng lần soát, xem dòng "Soát" ở Lịch sử thay đổi):

| Đại lượng | Công thức | Kết quả |
|---|---|---|
| Số mốc cả game | 9 + 8 + 8 + 7 + 8 | 40 |
| Số cảnh cả game | 40 cảnh của mốc + 2 cảnh mở chương 4 và 5 + 3 cảnh đánh thức (Ingrid, Linh, Rafa) | 45 |
| Số câu thoại tối đa của các cảnh | 33 mốc ngắn x 3 câu + 7 mốc dài x 8 câu + 2 cảnh mở chương x 8 câu + 3 cảnh đánh thức x 3 câu | 180 câu |
| Thời gian đọc cảnh tối đa | 180 câu x 80 ký tự / 17 ký tự mỗi giây | 847 giây, khoảng 14,1 phút |
| Tỉ lệ so với cả game 12 giờ | 14,1 phút / 720 phút | 2,0% |

- Bảy mốc dài là C1.1, C1.9, C2.8, C3.8, C4.6, C5.7, C5.8.
- Lời theo trạng thái và chuyện riêng của thương nhân không phải cảnh (luật 14, 25), không nằm trong 180 câu. Amara và Yusuf tới bằng mốc nên không có cảnh đánh thức riêng.
- Núm nối: "Số giờ giao thương đã xong để C1.9 xong" là núm duy nhất của hệ thống này chạm thời lượng chương, các mốc khác đi theo tiến độ của map và trạm.
- Ba ngưỡng số lần phục vụ xong tàu chỉ là một nửa điều kiện của chuyện riêng thương nhân. Nửa kia là mốc truyện ở cột "Mở sau mốc" của bảng đề cương, mục 2.6 (luật 25).

## 4. Trường hợp biên

| # | Tình huống | Xử lý | Nhãn |
|---|---|---|---|
| 1 | Người chơi tới cửa D1 của Station Cinder trước khi có Bộ kích nguồn | Cửa không mở. Một dòng radio của Ingrid gợi ý về xưởng. Không có cảnh | `MVP` |
| 2 | Đang kéo buồng ngủ đông thì hết Oxy và bị kéo về | Buồng nằm lại vị trí gốc ở chuyến sau (luật 5). Người trong buồng vẫn sống. Vật nhiệm vụ nhỏ trong túi: chọn giữ lại thì về trạm, không chọn thì về khe V của nó ở chuyến sau | `MVP` |
| 3 | Người chơi bỏ qua mọi cảnh | Mốc đã xong từ trước khi cảnh phát (luật 19). Sổ tay vẫn đủ tóm tắt và dòng mục tiêu | `MVP` |
| 4 | Người chơi không bao giờ làm giờ giao thương | Mốc cần giờ giao thương (C1.8, C1.9, C2.3, C3.2, C3.3, C3.4, C4.7, C5.2) đứng ở trạng thái Mở vô thời hạn. Sổ tay ghi rõ việc cần làm. Không có đường vòng | `MVP` |
| 5 | Người chơi đã ở trong dải mới mở nhưng mốc mở lối vào map nhánh của dải đó chưa xong | Lối vào map nhánh đó đóng (luật 13). Dải chưa mở thì bị chặn cứng theo `map.md`, không vào sớm được | `MVP` |
| 6 | Nhiều mốc xong liền nhau trong một lần kiểm | Cả chuỗi xong ngay (mục 2.3). Cảnh của chúng xếp hàng theo thứ tự mốc, mỗi điểm nghỉ phát một cảnh | `MVP` |
| 7 | Nhặt vật manh mối trong cùng map nhánh theo thứ tự khác bảng | Được. Mốc chỉ xét đủ, không xét thứ tự nhặt | `MVP` |
| 8 | Không giao hàng cho Maro lần nào | Maro vẫn rời bến và vẫn quay lại. Truyện đếm lần cập bến, không đếm lần giao | `Sau MVP` |
| 9 | Không nuôi Driftlife sau C2.4 | Không sao. Con cỡ M đầu tiên là đủ cho mốc. Cảnh rời neo có khoang sinh quyển trống | `Sau MVP` |
| 10 | Thẻ tên MM1.3 không được nhặt | Không chặn gì. Màn hình cuối vẫn hiện tên | `MVP` |
| 11 | Chơi bốn người, Ember không có buồng tắt | Dùng biến thể cảnh tỉnh dậy cho bốn người. Lời mọi nhân vật không nhắc tới buồng tắt của Ember | `MVP` |
| 12 | Người chơi mới vào khi thế giới đã ở chương 4 | Phát cảnh vào 3 câu. Cảnh của các mốc đã xong không vào hàng chờ của người đó (mục 2.2). Sổ tay có đủ | `MVP` |
| 13 | Người đang mang vật nhiệm vụ rời phiên hoặc mất kết nối giữa chuyến | Tính như bị kéo về (C10): chỉ giữ 1 món. Vật nhiệm vụ nhỏ không được giữ thì về khe V ở chuyến sau. Buồng đang kéo rơi tại chỗ, người khác kéo tiếp được, hết chuyến chưa ai kéo về thì buồng về vị trí gốc | `MVP` |
| 14 | Người chơi đặt tên trùng tên một nhân vật | Hiện bình thường, không đổi | `MVP` |
| 15 | Đã xem cảnh kết rồi vào lại bản lưu | Theo luật 26: động cơ đã xong giai đoạn 5, C5.7 và C5.8 không phát lại, không rời neo lần nữa. Hai cảnh cuối xem lại từ Sổ tay | `Sau MVP` |
| 16 | Tàu Lamplighter (C2.3) rời khi chưa giao | Bram quay lại ở giờ giao thương sau và gọi thùng lại. Không giới hạn số lần | `Sau MVP` |
| 17 | Người chơi xua BS-1 hoặc BS-2 thay vì hạ | Mốc vẫn xong. Lời nhân vật có biến thể cho cách kết đó. Với BS-2, Amara đứng trong Lantern nhìn thấy và có một lời riêng ở lần gặp đầu | `MVP` cho BS-1 |
| 18 | Mảnh lõi dẫn đường của Cinder nhặt từ chương 1, chưa có chỗ dùng | Nằm trong kho tới khi sửa khoang dẫn đường KH08. Không bán được, không mất | `MVP` |
| 19 | Sửa xong KH06 mà chưa sửa KH07 | C1.7 chưa xong. Dòng mục tiêu Sổ tay ghi: sửa cảng | `MVP` |
| 20 | Tàu có điều kiện truyện cập bến trong ngày người chơi bỏ giờ giao thương | Tàu đó vào lịch lại ở ngày sau. Mốc không mất (luật 19 của `tram-va-cang.md`) | `MVP` |
| 21 | Host thoát khi một mốc vừa xong giữa ngày | Thế giới về điểm lưu gần nhất (C10, K23). Mốc xong sau lần lưu đó quay lại trạng thái Mở, vật manh mối nhặt sau lần lưu đó quay lại Tại chỗ | `MVP` |
| 22 | Mọi người chơi đều ở ngoài khi một mốc ở trạm xong | Mốc xong ngay. Cảnh chờ từng người ở điểm nghỉ kế tiếp của họ | `MVP` |
| 23 | Đang kéo kén của Sevra thì người kéo ngạt hoặc bị kéo về | Người kéo thả kén, đồng đội kéo tiếp. Cả nhóm về trạm thì kén nằm lại, chuyến sau kéo tiếp (luật của gd-combat). Kén không bị nhắm, không nhận sát thương. Sevra không chết, truyện không có trạng thái thua | `Sau MVP` |
| 24 | Không giao xong đơn đặt trước tin mật nào | Mốc C4.7 và C5.2 đứng ở trạng thái Mở. Tàu TA11 vẫn quay lại theo lịch. Sổ tay ghi rõ việc cần làm | `Sau MVP` |
| 25 | Giao xong nhiều đơn đặt trước tin mật ngay trong chương 4 | Số đếm cộng dồn. Mốc C5.2 xong ngay sau C5.1 nếu đã đủ ngưỡng | `Sau MVP` |
| 26 | Toán bắt cóc bị xua đi nhưng người chơi bỏ kén lại | Kén ở nguyên chỗ, toán bắt cóc không quay lại lấy. Mốc đóng chương 3 chờ tới khi kén về tới Ember | `Sau MVP` |

## 5. Ràng buộc của luật

- Không thể bỏ lỡ mốc: điều kiện của mốc chỉ dựa vào map nhánh, trạm và cảng, là ba nơi không sinh lại.
- Không thể mất vật manh mối hay vật nhiệm vụ: luật 4, 5 và 20.
- Không có khóa cứng do tiêu vật: xem bảng "Vật nhiệm vụ và chỗ tiêu" ở mục 6.
- Trần chặn vòng ngày: mỗi điểm nghỉ phát nhiều nhất một cảnh cho mỗi người. Cảnh ngắn dài nhất 3 x 80 / 17 = 14 giây đọc. Cảnh dài dài nhất 8 x 80 / 17 = 38 giây đọc.
- Điều không có: thua vì truyện, người vớt chết, lựa chọn hội thoại, kết thứ hai, tới được Solace.

- Số ngày tối thiểu của chuỗi mốc từng chương `MVP` cho chương 1. Tính tay theo luật, chưa sim.
- Luật dùng để tính: một ngày tối đa hai chuyến và một giờ giao thương, giờ giao thương sau các chuyến (K22). Ngày chỉ sang khi ngủ (K23). Người vớt trong buồng tỉnh đầu ngày kế tiếp (luật 22). Lịch tàu sinh đầu ngày nên tàu mới mở vào lịch từ ngày kế tiếp.
- Có tính hai bước chế qua đêm mà chuỗi mốc bắt buộc phải qua theo `vat-pham.md`: Bộ kích nguồn (RCP-205) ở chương đầu và Lõi dẫn hướng rời bãi vỡ (RCP-207) ở chương cuối. Mốc C2.4 đi đường Phao kéo, không cần bước qua đêm nào. Máy cắt thân tàu cho chương 4 chế được từ chương 3.
- Không tính thời gian gom vật liệu và tiền, nên đây là sàn, thực tế dài hơn.

| Chương | Sàn ngày | Chuỗi theo ngày |
|---|---|---|
| 1 | 7 | Ngày 1: C1.1, C1.2, C1.3, C1.4. Ngày 2: Ingrid tỉnh, C1.5, đặt chế Bộ kích nguồn qua đêm. Ngày 3: vào Cinder lần hai, C1.6. Ngày 4: Linh tỉnh, C1.7. Ngày 5: C1.8 và giờ giao thương thứ nhất. Ngày 6: giờ giao thương thứ hai. Ngày 7: giờ giao thương thứ ba, C1.9. Đây là sàn theo truyện. Sim kinh tế cho chơi một mình đóng chương ngày 8, vì cần Hạng cảng 3 để mua Van tiết lưu |
| 2 | 5 | Ngày 1: C2.1, C2.2. Ngày 2: giờ giao thương có TA03, C2.3, sửa KH10 và KH11, chế Phao kéo. Ngày 3: bắt con cỡ M, C2.4. Ngày 4: C2.5, vào Wick, C2.6, C2.7. Ngày 5: Rafa tỉnh, sửa KH08, nộp STY-103, C2.8 |
| 3 | 8 | Ngày 1: C3.1. Ngày 2: giờ giao thương có TA06. Ngày 3: Skiff đón Yusuf, C3.2, sửa bến. Ngày 4: C3.3. Ngày 5: C3.4. Ngày 6: C3.5, vào Flint, C3.6. Ngày 7: C3.7. Ngày 8: tới N4, cứu Sevra, C3.8 |
| 4 | 3 | Ngày 1: cảnh mở, C4.1, C4.2, giờ giao thương có TA11 với đơn đặt trước tin mật đầu tiên. Ngày 2: C4.3, C4.4, C4.5. Ngày 3: C4.6, rồi C4.7 xong ngay vì đơn đặt trước đã giao xong |
| 5 | 3 | Ngày 1: cảnh mở, chuyến hộ tống với C5.1, giờ giao thương có TA11, C5.2. Ngày 2: chuyến một vào Rig với C5.3 và C5.4, chuyến hai với C5.5 và C5.6, chế ENG-105 qua đêm. Ngày 3: sửa giai đoạn 5, C5.7, C5.8 |

- Tổng sàn: 26 ngày. Độ dài một ngày lấy theo khung mục 9 (chương đầu 15 đến 20 phút, chương cuối 25 đến 30 phút, ba chương giữa nội suy đều). Cả game: khoảng 8,3 đến 10,4 giờ, thấp hơn mục tiêu 12 đến 15 giờ.
- Riêng chương đầu: 7 ngày là khoảng 1,8 đến 2,3 giờ, chạm trần mục tiêu 1,5 đến 2 giờ của khung. Hạ núm số giờ giao thương của C1.9 xuống hai thì chương đầu còn 6 ngày, khoảng 1,5 đến 2 giờ.
- Chuỗi mốc là sàn cứng: không số người chơi nào xong chương đầu trước ngày 7. Sàn không đổi theo số người chơi.
- Chương 1 là 7 vì Bộ kích nguồn chế qua đêm. Chương 5 là 3 vì hai chuyến vào Warden Rig làm được trong một ngày.
- Sim kinh tế của gd-economy chạy với sàn 7, 5, 8, 3, 3, số giờ và tỉ lệ co-op ở `kinh-te-tien-trinh.md` mục 6b. Mục tiêu co-op của khung là 60 đến 75% (log dòng 69).
- K25 buộc mỗi mốc đóng chương chờ giai đoạn động cơ của chương đã lắp. Việc lắp không thêm ngày vào sàn khi vật liệu và linh kiện đã có sẵn. Sàn không tính thời gian chờ hàng đặt ở shop.
- GDM chốt giữ sàn ngày (log dòng 69). Bảng chỗ hạ sàn bên dưới chưa áp.
- Sàn của ba chương cuối đứng được khi tàu TA11 vào lịch từ ngày kế tiếp sau mốc đóng chương 3 và có trong lịch ngày đầu chương 5.

Chỗ hạ sàn được `Sau MVP` trừ dòng đầu. Tính tay theo cùng luật với bảng trên:

| Chỗ hạ | Đổi gì | Rút được | Mất gì ở truyện |
|---|---|---|---|
| Núm C1.9 | Số giờ giao thương để C1.9 xong từ 3 xuống 2 | 1 ngày ở chương 1 | Người chơi mới quen giờ giao thương ít hơn một giờ giao thương trước khi sang chương 2 |
| C2.5 | Bỏ điều kiện ngày kế tiếp, lối vào Wick mở ngay khi C2.4 xong | 1 ngày ở chương 2 | Mất một nhịp nghỉ sau mẫu sống đầu tiên |
| C3.2 | Yusuf về Ember cùng tàu của Dromm ngay trong giờ giao thương đó, không cần chuyến Skiff ngày sau | 1 ngày ở chương 3 | Skiff mất một vai trong truyện, giống cách Amara tới |
| C3.7 | Bỏ điều kiện ngày kế tiếp, cú lật phát ở pha Cuối ngày của ngày nộp mẫu | 1 ngày ở chương 3 | Mất đêm chờ kết quả, cú lật tới gấp hơn |

- Áp cả bốn chỗ thì sàn còn 6, 4, 6, 3, 3, tổng 22 ngày thay cho 26.
- Chương 4 và 5 không còn chỗ hạ mà không đổi số chuyến của map nhánh.

## 6. Yêu cầu cho engineer và tool

| Thứ | Yêu cầu | Nhãn |
|---|---|---|
| Dữ liệu mốc | Bảng: mã mốc, chương, mốc đứng trước, danh sách điều kiện (mỗi điều kiện gồm loại và tham số, tất cả phải cùng đúng), nơi, mã cảnh, danh sách thứ được mở | `MVP` |
| Dữ liệu cảnh | Bảng: mã cảnh, mốc sở hữu hoặc điều kiện riêng (hai cảnh mở chương 4 và 5), loại (ngắn, dài), kênh, danh sách mã câu | `MVP` |
| Dữ liệu vật truyện | Bảng: mã truyện, ID vật của `vat-pham.md`, loại (manh mối, nhiệm vụ), map nhánh, khe, mốc làm nó hiện, mã mục Sổ tay, khoang nhận nếu là vật nhiệm vụ | `MVP` |
| Loại điều kiện cần có | Bắt đầu thế giới. Tới một lối vào hoặc một khu. Một khoang Hoạt động. Một buồng ngủ đông qua cửa khí. Boss xong (hạ hoặc xua). Đã nhặt một vật manh mối. Đã nộp một vật nhiệm vụ. Một vật hoặc sinh vật về tới kho. Số giờ giao thương đã xong. Phục vụ xong một tàu. Một tàu cập bến lần thứ n. Một giờ giao thương có một tàu đã xong. Sự cố đầu tiên xảy ra. Đã mua một món ở shop. Ngày kế tiếp sau một mốc. Giai đoạn động cơ xong. Mọi người có mặt xác nhận. Lần đầu vào một dải (chỉ dùng cho radio và sự kiện hình mở chương 2, 3) | `MVP` |
| Lưu | Trạng thái mọi mốc, mọi vật truyện, số lần cập bến của từng tàu có tên, số lần phục vụ xong tàu của từng thương nhân có tên, và với mỗi người chơi: hàng chờ cảnh và danh sách cảnh đã xem. Lưu theo thế giới của host | `MVP` |
| Chuỗi văn bản | Mỗi câu một mã, tách khỏi code, dùng bảng dịch của Unity Localization. Chừa khung gấp đôi độ dài bản gốc | `MVP` |
| Đồng bộ co-op | Trạng thái mốc và vật truyện là trạng thái chung, host quyết và đồng bộ. Hàng chờ cảnh và cảnh đã xem là của từng người. Cảnh phát riêng từng máy | `MVP` |
| Sự kiện theo dõi | Mốc xong (mã, ngày trong game, số người). Cảnh được xem hoặc bị bỏ qua (mã, câu thứ mấy, người nào). Vật manh mối được nhặt. Vật nhiệm vụ rơi về khe. Người vớt mở tính năng | `MVP` |
| Validator | Mỗi vật truyện có đủ: ID trong `vat-pham.md`, map nhánh và khe có trong `map.md`, mốc làm nó hiện. Mỗi mốc có ít nhất một điều kiện thuộc danh sách loại ở trên. Không mốc nào thiếu mốc đứng trước trừ C1.1. Không câu thoại nào vượt giới hạn ký tự của kênh, chứa chữ số, hay chứa từ chỉ số người chơi | `MVP` |

Vật nhiệm vụ và chỗ tiêu (luật 20). Cột cuối là lý do không có khóa cứng:

| Vật | Nộp ở đâu, cho mốc nào | Bị tiêu ở đâu (theo `vat-pham.md`) | Vì sao không khóa cứng | Nhãn |
|---|---|---|---|---|
| STY-102 mảnh lõi của Cinder | Không có mốc nào đòi nộp | Danh sách sửa KH08 | Truyện không đòi nó sau khi KH08 đã sửa. C2.8 chỉ đòi KH08 Hoạt động và STY-103 | `MVP` nhặt, `Sau MVP` dùng |
| STY-103 mảnh lõi của Wick | Khoang dẫn đường, C2.8 | Không | Nộp không tiêu | `Sau MVP` |
| STY-301 mẫu Driftlife mang thẻ | Phòng nghiên cứu, C3.6 | Không | Nộp không tiêu | `Sau MVP` |
| STY-401 hộp ghi hành trình | Khoang dẫn đường, C4.5 | Công thức RCP-207 | RCP-207 chỉ mở sau C5.6 và cần cả STY-501. Lúc đó C4.5 và C4.7 đã xong từ chương trước | `Sau MVP` |
| STY-501 bản đồ sao thật | Khoang dẫn đường, C5.6 | Công thức RCP-207 | RCP-207 chỉ mở khi C5.6 đã xong, tức sau khi đã nộp | `Sau MVP` |
| Buồng ngủ đông có người | Cửa khí, C1.4, C1.6, C2.6 | Không | Người vớt ra khỏi buồng, buồng không phải vật liệu | `MVP` |
| Kén thoát hiểm BNG-102 | Về tới Ember ở C3.8, chạm cửa The Hearth ở C5.1 | Không | Sevra ra khỏi kén ở C3.8 và vào lại cho chuyến C5.1. Kén không phải vật liệu | `Sau MVP` |
| STY-701 gói tin mật | Không nộp. Thông dịch viên đóng vào thùng tin mật CGO-421 lúc Mở giao thương cho đơn đặt trước của tàu TA11 | Công thức RCP-422 | Khoang liên lạc nhận gói mới từ The Kindling mỗi ngày, tiêu rồi vẫn có lại | `Sau MVP` |

- Cả 23 vật truyện đã có ID trong `vat-pham.md`. Mười vật manh mối do gd-items cấp ID: STY-111, STY-211 tới STY-213, STY-311 tới STY-313, STY-411, STY-412, STY-414.
- ID do gd-items cấp cho phần Sevra và tin mật: kén thoát hiểm BNG-102, kiện tin mật CGO-421, gói tin mật STY-701, công thức đóng kiện RCP-422. Gói tin mật không phải vật truyện của bảng mục 2.5 và không nằm ở khe nào.
- Phần Sevra và tin mật cần thêm ba thứ trong dữ liệu. Một: bộ đếm đơn đặt trước tin mật đã giao xong, tính cho thế giới, cộng dồn qua chương. Hai: sự kiện bắt cóc ở N4, điều kiện là mốc C3.7 và giai đoạn 3 của động cơ. Ba: nơi ở của Sevra (tàu TA04, Ember, The Hearth) đổi theo mốc.

Nơi phải đổi cùng lúc khi đổi truyện: `map.md` (map nhánh, khe M và V), `tram-va-cang.md` (quest mở tính năng, loại tàu, lịch tàu có điều kiện truyện, sự cố), `combat-driftlife.md` (boss, The Wardens), `vat-pham.md` (vật kể chuyện, danh sách sửa khoang, công thức), `kinh-te-tien-trinh.md` (định nghĩa qua chương, sàn ngày), `ky-thuat.md` (schema mốc và cảnh), `ho-so-nhan-vat.md`, tab GAME STORY.

## 7. Yêu cầu cho art, UI, tutorial, audio

| Sự kiện | Hình | Âm | Text | Ưu tiên |
|---|---|---|---|---|
| Tỉnh dậy (C1.1) | Buồng mở, hơi lạnh, buồng bên cạnh tắt đèn, bãi vỡ xoay ngoài cửa sổ | Báo động yếu, tiếng buồng xả khí | Dòng radio tự động của trạm | `MVP` |
| Neo trạm (C1.2) | Bãi vỡ ngoài cửa sổ ngừng xoay, đèn trạm sáng thêm | Tiếng bộ neo bắt vào khối xác | Không | `MVP` |
| Buồng ngủ đông còn chạy trong map nhánh | Đèn buồng nhịp chậm, khác hẳn buồng tắt | Nhịp bíp đều | Không | `MVP` |
| Buồng về tới trạm (C1.4, C1.6, C2.6) | Buồng đặt vào khu hồi sức, đèn đổi màu | Tiếng khóa buồng | Cảnh 3 câu | `MVP` |
| Đánh thức người vớt | Đầu ngày kế tiếp, pha Chuẩn bị: buồng mở trong trạm, nhân vật bước ra | Như C1.1, ấm hơn | Cảnh 3 câu | `MVP` |
| Vật manh mối | Phát sáng nhẹ, có một dấu riêng dùng chung cả game | Một tiếng chuông ngắn khi nhặt | Thông báo một dòng, mục Sổ tay | `MVP` |
| Khoang mở tính năng | Khoang sáng đèn, có người đứng trong | Tiếng máy khởi động theo khoang | Tên tính năng | `MVP` |
| Tàu đầu tiên (C1.8) | Tàu Oru nhỏ, chắp vá, cập bến lệch | Động cơ lọc xọc | Trong giờ giao thương: lời bong bóng của Tikko. Cuối ngày: cảnh 3 câu | `MVP` |
| Sóng của Lantern (C1.9) | Cuối ngày: đèn khoang liên lạc nhấp theo giọng nói | Giọng người lẫn nhiễu | Cảnh 8 câu | `MVP` |
| Cú lật Driftlife (C3.7) | Ảnh phóng to cái thẻ và vết cắt mô | Im lặng, bỏ nhạc nền | Cảnh 3 câu | `Sau MVP` |
| Cuộc bắt cóc (C3.8), ở N4 | Tàu TA04 bị áp mạn, một kén thoát hiểm bị kéo đi giữa các tàu đang đậu | Nhạc bến tắt, chỉ còn sóng radio | Lời radio của Maro, một dòng mỗi lần | `Sau MVP` |
| Sevra lộ danh tính (C3.8), khi kén về tới Ember | Cô gỡ mạng che của thương hội. Cùng một nhân vật, hai trạng thái hình | Không nhạc | Cảnh 8 câu | `Sau MVP` |
| Vào Vành đai trong lần đầu | Một trạm để đèn sáng ở xa | Không | Một dòng radio của Bram | `Sau MVP` |
| Vào Vùng trung tâm lần đầu | Liên lạc nhiễu, bóng một cỗ máy rất lớn đi ngang trong mây khí | Tiếng rè | Không lời | `Sau MVP` |
| Những dãy buồng (C4.2) | Cryo Deck của Cradle, dãy buồng tắt kéo dài hết màn hình | Chỉ tiếng thở của người chơi | Không lời | `Sau MVP` |
| Không có gì ở đó (C4.6) | Màn hình khoang dẫn đường: chỗ lẽ ra có Solace là một khoảng trống. Sevra kể chuyện đảo chính bằng lời, không có cảnh hồi tưởng | Tiếng hộp ghi rè rồi tắt | Cảnh 8 câu, dòng mục tiêu trong Sổ tay đổi | `Sau MVP` |
| Hộ tống (C5.1) | Kén của Sevra có đèn tín hiệu riêng, khác buồng ngủ đông | Tiếng thở của cô qua sóng | Lời radio một dòng | `Sau MVP` |
| Tọa độ thật (C5.6) | Màn hình khoang dẫn đường: một điểm sáng lên trên bản đồ thật | Nhạc chủ đề vào khẽ | Cảnh 3 câu | `Sau MVP` |
| Rời neo (C5.7) | Bộ neo nhả, hàng tàu The Veyl đứng nhìn | Động cơ chính | Cảnh 8 câu | `Sau MVP` |
| Ngoài bãi vỡ (C5.8) | Bầu trời sao sạch, lần đầu trong game không có mảnh vỡ | Nhạc chủ đề đủ bài | Cảnh 8 câu, màn hình tên | `Sau MVP` |

- Yêu cầu cho gd-ux: hộp thoại 2 dòng có tên và chân dung người nói, dòng radio ở mép màn hình, lời bong bóng trên đầu nhân vật, Sổ tay có ba phần (mục tiêu, mốc đã xong, vật manh mối), dấu báo có cảnh chờ ở nhân vật.
- Màn và bước hướng dẫn theo `ux-ui.md`: hộp thoại truyện là UI-53, Sổ tay là UI-19. Cách bỏ qua cảnh dạy ở bước T30, cách mở Sổ tay ở T02 và T29, dấu của vật manh mối ở T29.
- Yêu cầu art cho phản diện: không thêm chủng tộc. Lính The Wardens là người Sennari mặc giáp của chế độ. Sevra dùng chung dáng với Ilsume, thêm trạng thái gỡ mạng che. Steward Ilvane không cần hình.

## 7b. Cảm giác

- Tham chiếu: cách Dave the Diver chen cảnh ngắn vào giữa vòng ngày mà không dừng vòng. Cách Hardspace: Shipbreaker kể bằng radio và đồ nhặt trong xác tàu. Cách Spiritfarer gắn một tính năng của con tàu với một con người.
- Phản tham chiếu: không cắt cảnh dài không bỏ qua được. Không hộp thoại chân dung nối nhau quá 8 câu. Không nhân vật giảng giải lịch sử thế giới.
- Phản hồi: nhặt vật manh mối có tiếng và thông báo trong vòng một nhịp. Cảnh hiện ngay khi vào điểm nghỉ, không chờ. Bỏ qua là hết ngay, không chuyển cảnh mờ dần dài.
- Nhịp cảm xúc: mốc mất mát (C1.1, C3.6, C4.2, C4.6) không có hài và không có nhạc cảng. Hài chỉ ở trong trạm và ở giờ giao thương.
- Kết là thắng lợi của tổ Ember trước, của Sevra sau: cảnh rời neo cho thấy thứ người chơi tự làm (thoát, mang được người, hạ được Daskel), rồi mới tới món quà của cô.

## 8. Cách đo thành công và tiêu chí nghiệm thu

| # | Tiêu chí | Cách kiểm |
|---|---|---|
| 1 | Mỗi chương có ít nhất 3 mốc và ít nhất 2 vật truyện (vật manh mối hoặc vật nhiệm vụ) có nơi đặt là khe của map nhánh | Script đếm bảng mục 2.5. Hiện: 9, 8, 8, 7, 8 mốc và 4, 6, 6, 5, 2 vật truyện |
| 2 | Mỗi người vớt có quest mở đúng tính năng K12 | Đối chiếu bảng người vớt với K12 và luật 15 của `tram-va-cang.md` |
| 3 | Không còn tên phản diện cũ của story bản 3, không còn chi tiết United Accord trả tiền để có đường đi | Script tìm chuỗi |
| 4 | Không câu thoại mẫu nào vượt giới hạn của kênh (80 hoặc 60 ký tự), chứa chữ số, hay chứa từ chỉ số người chơi | Script đếm |
| 5 | Chơi hết chương 1 và bỏ qua mọi cảnh: Sổ tay có 9 dòng tóm tắt và luôn có một dòng mục tiêu | Khi có build |
| 6 | Bị kéo về khi đang kéo buồng của Ingrid: chuyến sau buồng ở vị trí gốc, Ingrid vẫn vớt được | Khi có build |
| 7 | Hai người chơi: người thứ nhất nhặt MM1.1, Sổ tay của người thứ hai có MM1.1 ở lần mở kế tiếp | Khi có build |
| 8 | Đổi số người tỉnh dậy từ 1 tới 4: không câu thoại nào sai với số người | Đọc soát bảng chuỗi |
| 9 | Che tên người nói: người đọc ngoài phòng đoán đúng ít nhất 2 trên 3 câu mẫu của mỗi người vớt | gd-qa làm ở đợt 3 |
| 10 | Playtest MVP: sau C1.9, ít nhất 7 trên 10 người chơi nói được việc kế tiếp là gì mà không mở Sổ tay | Khi có build, chỉ tiêu ước |
| 11 | Mỗi vật truyện có đủ ID trong `vat-pham.md`, khe trong `map.md` và mốc làm nó hiện | Validator của gd-tech, chưa có. Kiểm tay: ID đủ 23 trên 23, khe khớp `map.md` mục 2.10 |
| 12 | Chạy mô phỏng chuỗi mốc từng chương theo bảng "Vật nhiệm vụ và chỗ tiêu": không có trạng thái nào mà mốc đang mở cần một vật đã bị tiêu | Test của gd-tech |
| 13 | Hai người chơi: mốc xong từ người nào cũng chỉ ghi một lần, mỗi người thấy mỗi cảnh nhiều nhất một lần | Khi có build |
| 14 | Chương 1 không xong trước ngày 7 với mọi số người chơi, theo bảng sàn ngày ở mục 5 | Sim kinh tế của gd-economy chạy với sàn 7, 5, 8, 3, 3 |
| 15 | Không còn ý phản diện của bản trước đợt 6: Daskel tham của, cả chủng tộc là kẻ xấu, móc cũ cho phần sau, cảnh kết của bản trước | Script tìm chuỗi, và gd-qa đọc soát theo từng ý trong lời Lead |

- Tiêu chí 1, 3, 4 đã kiểm bằng script, kết quả ở dòng "Soát" trong Lịch sử thay đổi. Tiêu chí 2 đã đối chiếu tay.
- Tiêu chí 5 tới 7, 10 và 13 chưa kiểm được vì chưa có build. Tiêu chí 8 và 9 để gd-qa làm. Tiêu chí 11, 12, 14 chờ vai khác.

## 9. Lệch khỏi tham chiếu (Dave the Diver)

| Điểm | Dave làm thế nào | Game này làm gì | Vì sao lệch |
|---|---|---|---|
| Số chương | 7 chương tính cả prologue [C3], mỗi chương thêm một kiểu chơi (`10-narrative.md` [S6], bài đánh giá) | 5 chương | Log GDM dòng 7: 5 vừa với 3 dải và 2 map nhánh lớn |
| Nhân vật mở tính năng | Mỗi NPC mở một tính năng qua quest hoặc chương: Duff, Cobra, Otto [D8][D10] | Giữ cấu trúc: 5 người vớt, quest là sửa khoang của người đó | Nối người vớt với sửa trạm (P2), theo `tram-va-cang.md` |
| Phản diện | John Watson ở Chapter 2 tin Dave đánh bắt quá mức [D11][D17]. Mối đe dọa các chương sau: không tìm thấy nguồn | Daskel và chế độ The Wardens xuyên suốt, lộ dần từ chương 2 tới 5. Có một đồng minh trong chính chủng tộc của hắn | Lead chốt tai nạn là âm mưu có chủ đích, và phản diện là một tên độc tài, không phải cả một chủng tộc |
| Chủ đề môi trường | Mức nhẹ, nói qua nhân vật, farm là đường bền vững [D8][D14][D18] | Cùng mức với luật chơi (không phạt), nặng hơn ở truyện qua cú lật Driftlife và lời hứa cuối. Phản diện không xoay quanh nó | Lead sửa 2026-11-20: gốc tai nạn là hận thù của Daskel, cái nhìn loài người tham lam là phiến diện |
| Giọng | Hài là chính (`10-narrative.md` nguyên lý 8) | Nền nghiêm, hài nhẹ từ tính cách | Lead chốt (B9) |
| Cảnh truyện | Cảnh cắt hài, có minigame riêng | Cảnh tối đa 8 câu, bỏ qua được, không minigame truyện | Co-op không tạm dừng toàn cục (C7), và sức nhóm |
| Kết | Sau chương 7 có một chương cuối tên Epilogue: Friends, kể kết cục của những nhân vật Dave gặp trên đường [C4, chỉ qua tóm tắt tìm kiếm, nội dung chi tiết chưa đọc được] | Cách mạng thành công, nhận tọa độ thật, rời neo. Hành trình để ngỏ cho hậu bản | Lead sửa 2026-11-20 (B9) |
| Số người chơi | Một người | 1 đến 4 người, truyện là tiến trình chung | Lead chốt |
| Điểm yếu của Dave được tránh | Bị chê kéo dài quest cho truyện dài ra (`10-narrative.md` [S5]) | Quest là một việc sửa khoang, truyện không khóa vòng ngày | Luật 11 và 12 |

Chưa có bằng chứng game này không tệ hơn ở phần truyện, chỉ đo được khi có build và playtest.

## 10. Câu hỏi mở

Nguồn quyết định nằm ở `log-gdm-tu-quyet.md` và `DECISIONS.md`.

| # | Câu hỏi | Đề xuất | Ai quyết |
|---|---|---|---|
| 1 | Đã chốt: vụ phục kích đổi tên thành The Scattering ở mọi file vì tên cũ trùng một sự kiện lớn của Dungeons & Dragons (log GDM dòng 75). Tra web tên mới: không thấy trùng, có một game tên gần giống (mục 12) | Không | Đã xong |
| 2 | Đã chốt: giữ tên Solace, là từ thông dụng (log GDM dòng 75) | Không | Đã xong |
| 3 | Đã chốt tên game: The Novent | Xem mục 12 | Lead |
| 4 | Đã chốt: thoại gốc tiếng Việt, tên riêng tiếng Anh (log GDM dòng 80) | Không | Đã xong |
| 5 | Đã chốt: không lồng tiếng, mỗi nhân vật một âm giọng ngắn (log GDM dòng 80). Lead đổi được | Không | Đã xong |
| 6 | Đã chốt với gd-ux: hộp thoại truyện UI-53 tối đa 80 ký tự mỗi câu, radio 60, bong bóng 60 (`ux-ui.md` bảng strings: story.box, story.radio, story.bubble) | Không | Đã xong |
| 7 | Đã chốt: nơi ghi truyện trong trạm tên là Sổ tay. gd-ux dùng tên này cho màn UI-19, gd-items cũng đã đổi theo | Không | Đã xong |
| 8 | Đã chốt bằng K25 (log GDM dòng 68): chương đóng và vùng mới mở khi mốc đóng chương xong, và mốc đó chỉ xong khi giai đoạn động cơ của chương đã lắp. Kinh tế và trạm không có cổng chương riêng. File này đã viết theo (luật 1 và bốn mốc đóng chương) | Không | Đã xong |
| 9 | Đã chốt: giữ việc Odile muốn tới Solace, đó là niềm tin của nhân vật tới mốc C4.7 (log GDM dòng 73) | Không | Đã xong |
| 10 | Đã chốt với gd-ux: một dòng Sổ tay ở màn UI-19 tối đa 60 ký tự (khóa notebook.line), lời theo trạng thái tối đa 60 (khóa story.line) | Không | Đã xong |
| 11 | Đã chốt bằng K24 (log GDM dòng 77): bản lưu ở ngày cuối với mọi mốc đã xong, Ember còn ở neo để chơi tự do, cảnh kết xem lại từ Sổ tay. Khớp luật 26 | Không | Đã xong |
| 12 | Đã chốt: giữ sàn ngày, mục tiêu co-op của khung đổi thành 60 đến 75% (log GDM dòng 69) | Không | Đã xong |

## 11. Co-op 1 đến 4 người

| Luật | 1 người | 2 hoặc 3 người | 4 người |
|---|---|---|---|
| Tiến trình truyện | Của thế giới | Của thế giới, chung cho mọi người kể cả người đang không online (C3) | Như 2 hoặc 3 |
| Ai làm xong mốc | Người chơi | Mốc xong ngay khi điều kiện đúng, do bất kỳ ai làm, tính cho cả thế giới. Host quyết và đồng bộ (luật 19) | Như 2 hoặc 3 |
| Hàng chờ cảnh | Một hàng | Mỗi người một hàng riêng. Mốc xong thì cảnh vào hàng của mọi người đang có mặt. Mỗi người xem mỗi cảnh nhiều nhất một lần | Như 2 hoặc 3 |
| Cảnh trong trạm | Hộp thoại, tạm dừng được (C7) | Phát riêng trên màn hình từng người ở điểm nghỉ của người đó, mỗi điểm nghỉ một cảnh. Mỗi người tự bỏ qua, không ai chờ ai. Người đang ở ngoài thấy dấu báo và xem khi về | Như 2 hoặc 3 |
| Hai cảnh cuối (C5.7, C5.8) | Phát liền nhau | Phát cùng lúc cho mọi người đang có mặt sau khi mọi người xác nhận rời neo | Như 2 hoặc 3 |
| Cảnh trong khu chân không của map nhánh và trong giờ giao thương | Lời bong bóng và radio, không chặn điều khiển | Như 1 người | Như 1 người |
| Vật manh mối | Nhặt là ghi Sổ tay | Ai nhặt cũng ghi cho cả nhóm | Như 2 hoặc 3 |
| Vật nhiệm vụ | Tự mang về | Ai mang cũng được, chuyền tay được | Như 2 hoặc 3 |
| Cảnh tỉnh dậy | Ba buồng tắt | Một hoặc hai buồng tắt | Không buồng tắt |
| Cách nhân vật xưng hô | Gọi tên người chơi hoặc "Ember" | Nói với cả nhóm thì gọi "Ember". Nói với người đang đứng trước mặt thì gọi tên người đó | Như 2 hoặc 3 |

- Không mốc, quest hay cảnh nào cần đúng N người. Không nội dung truyện nào chỉ co-op mới có (P3).
- Câu thoại không chứa từ chỉ số người chơi như "một mình", "cả hai", "cả bốn", "các bạn". Ngoại lệ duy nhất là ba biến thể cảnh tỉnh dậy, và chúng không có lời.
- Trong trạm ngoài giờ giao thương và trong khu có khí không có nguy hiểm, nên hộp thoại không tạm dừng thời gian khi co-op vẫn an toàn.
- Khi giờ giao thương đang chạy, hộp thoại không hiện với bất kỳ ai trong nhóm (luật 21, khớp luật 25 và 26 của `ux-ui.md`). Mỗi mốc xảy ra trong giờ giao thương có hai bản lời: bản bong bóng ngắn cho trong giờ giao thương và bản cảnh cho sau giờ giao thương.
- Người đã về trạm và đang chờ đồng đội (C9) xem được cảnh đang chờ của mình trong lúc chờ.
- Người vào sau và người rời phiên: mục 2.7.

## 12. Bảng tên riêng và tên game

- Mọi tên là [TẠM].
- Tra trùng làm bằng tìm web ngày 2026-11-20, không phải tra cơ sở dữ liệu nhãn hiệu. Kết quả "không thấy" nghĩa là tìm web không ra, chưa phải bảo đảm pháp lý.
- Tên các khu hiện như địa danh trong map nhánh (Lantern Outer Ring, Broken Hold, Holding Pens và các khu khác) do gd-world đặt ở bảng A01 đến A05 của `map.md`, gd-story đã duyệt (log GDM dòng 74). File này dùng đúng các tên đó, chưa tra trùng.

### Tên game: The Novent

Tên chính thức do Lead chốt ngày 2026-11-20. Đọc gần đúng NÔ-ven(t). Ghép từ Nova và Venture, nghĩa là chuyến đi tới một khởi đầu mới.

Các phương án đã xét trước khi chốt:

| Đề xuất | Nghĩa với game | Kết quả tra |
|---|---|---|
| Cradlefall | Ngày Cradle rơi, gốc của mọi chuyện | Không thấy game trùng tên. Có một game tên Cradle (2015), khác thể loại |
| Wakebound | Bị buộc vào The Wake, và đang tỉnh dậy | Không thấy game trùng tên |
| Breathline | Sợi dây Oxy buộc người chơi vào trạm (P1) | Không thấy game trùng tên. Có vài ứng dụng tập thở tên gần giống |

Mười một ứng viên đã xét và lý do:

| Ứng viên | Kết quả |
|---|---|
| Cradlefall | Giữ, đã tra |
| Wakebound | Giữ, đã tra |
| Breathline | Giữ, đã tra |
| Emberwake | Loại. Đã có game cùng tên trên Steam (2024) và trên itch.io |
| Wake of the Cradle | Loại vì dài. Tra không thấy trùng |
| Station Ember | Loại. Tên trạm, không nói được game là gì. Chưa tra |
| Last Ember | Loại. Chữ Ember đi kèm Last rất hay gặp. Chưa tra |
| Seedfall | Dự phòng. Chưa tra |
| The Long Wake | Dự phòng. Chưa tra |
| Driftkeepers | Loại. Nghe như phe phản diện. Chưa tra |
| After the Cradle | Loại vì dài. Chưa tra |

Tiêu chí rút: một từ, đọc được ngay, nói đúng một ý lõi của game, tra web không thấy game trùng. Không đề xuất tên có chữ Solace vì Solace là mồi.

### Sáu tên quan trọng nhất

| Tên | Kết quả tra | Rủi ro | Đề xuất |
|---|---|---|---|
| The Veyl | Không thấy game nào có chủng tộc tên này | Thấp | Giữ |
| The Wardens | Từ thông dụng. Có game Wardens Rising và một loại kẻ địch tên Warden trong Aliens: Fireteam Elite | Thấp | Giữ |
| Driftlife | Không thấy game hay nhãn hiệu trùng. Có nhiều nhãn bắt đầu bằng Drift | Thấp | Giữ |
| The Scattering | Tên mới của vụ phục kích, GDM chốt ở log dòng 75 vì tên cũ trùng một sự kiện và bộ tiểu thuyết lớn của Dungeons & Dragons. Tra web tên mới: không thấy game, tiểu thuyết hay thương hiệu cùng tên. Có một game năm 2020 tên gần giống, khác vài chữ cái (link ở danh sách nguồn) | Thấp | Giữ |
| Solace | Trùng tên một hành tinh trong Apex Legends | Vừa | Giữ, có phương án Respite [TẠM] (mục 10 câu 2) |
| Tally | Không thấy game nào dùng làm tên tiền. Theo hiểu biết của người viết có một phần mềm kế toán cùng tên, chưa tra | Thấp | Giữ |

### Tên mới ở đợt 6

| Tên | Kết quả tra | Rủi ro | Đề xuất |
|---|---|---|---|
| Sevra | Không thấy nhân vật game hay tiểu thuyết cùng tên. Có một nhân vật game có biệt danh gần giống | Thấp | Giữ |
| Ilvane, The Kindling | Tìm web không thấy trùng trong game | Thấp | Giữ |
| Sennar, The Meeting War, The Hearth | Chưa tra | Chưa rõ | Tra khi GDM chốt bộ tên |

Nguồn tra:
- [Emberwake trên itch.io](https://potentialnova.itch.io/emberwake)
- [Emberwake trên Steam](https://store.steampowered.com/app/3986340)
- [Cradle, game năm 2015](https://store.steampowered.com/app/361550/Cradle/)
- [Sự kiện trùng tên cũ của Dungeons & Dragons](https://gizmodo.com/fantasy-authors-erin-m-evans-and-troy-denning-talk-the-1218767242)
- [Game năm 2020 có tên gần giống tên mới của vụ phục kích](https://store.steampowered.com/app/596000/The_Shattering)
- [Sundered](https://store.steampowered.com/app/535480/Sundered)
- [Solace trong Apex Legends](https://titanfall.fandom.com/wiki/Solace)
- [Wardens Rising](https://store.epicgames.com/p/wardens-rising-b42f9b)
- [Warden trong Aliens: Fireteam Elite](https://www.gamewatcher.com/aliens-fireteam-elite-2/enemies/warden)
- [Nhân vật có biệt danh gần giống tên Sevra, loạt Killzone](https://giantbomb.com/wiki/Characters/Tomas_Sevchenko/Images)

### Toàn bộ tên riêng

| Nhóm | Tên |
|---|---|
| Game | The Novent |
| Thế giới | United Accord, Cradle, Seed Station, Solace, The Scattering, The Wake, The Lattice, Lodestar Survey, Tally, The Meeting War, Sennar (hành tinh, ngoài map) |
| Trạm con | Station Ember, Station Lantern, Station Cinder, Station Wick, Station Flint, The Raft |
| Nơi khác (tên vùng do gd-world giữ) | Ember Anchorage, Shepherd Belt, Glass Nebula, Veyl Waypost, Warden Rig, The Hearth |
| Chủng tộc | The Veyl (tên chung), Oru, Sennari, Brakk, Aelith, Kesh |
| Sinh vật | Driftlife. Tên loài và boss đã chốt ở combat-driftlife.md |
| Tổ Ember | Nguyễn Việt, Jonas Weber, Mei Tanaka, Niamh Doyle |
| Người vớt | Ingrid Halvorsen, Linh Tran, Rafael Ortega, Amara Okafor, Yusuf Demir |
| Người khác | Odile Laurent, Bram Kowalski, Elias Vance, Wren |
| Thương nhân | Tikko, Ilsume (tên giả của Sevra Ilvane), Vaeth, Dromm, Nhem |
| Người Sennar | Daskel và Maro (The Wardens), Sevra Ilvane, Ilvane |
| Phe | The Remainers, The Wardens, The Kindling |
| Vật dụng (khung đã có) | Recall Beacon, Skiff |

Quy tắc tên trạm con: dùng tên gợi lửa hoặc ánh sáng (Ember, Lantern, Cinder, Wick, Flint).

### Quy tắc tên nhân vật

- Người Trái Đất lấy tên và họ theo xuất thân, theo cách nhân vật tự giới thiệu. Trong hội thoại dùng tên gọi quen như Ingrid, Linh hoặc Rafa. Dùng họ tên đầy đủ trên hồ sơ, thẻ buồng và khi cần nhận diện.
- Mỗi nhóm người The Veyl có mẫu âm riêng. Với mỗi tên mới, ghi mẫu âm, cách đọc, nét hình tượng cần gợi và cảnh mà tên xuất hiện lần đầu. So tên với các nhân vật cùng cảnh hoặc cùng màn hình, ưu tiên phân biệt âm đầu và vần.
- Tên cá nhân của người Sennari trong dàn hiện tại có hai âm tiết, nhấn đầu. Âm cuối có thể mở như Sevra và Maro hoặc khép như Daskel và Ilsume. Dùng họ để biểu thị gia tộc và danh xưng để biểu thị quyền lực. Ở cảnh C3.8, giới thiệu Sevra Ilvane và First Warden Daskel. Giữ tên Ilsume trong lời thoại và nhãn người nói trước cảnh này.
- Các nhóm thương nhân khác: Oru ưu tiên nhịp bật và âm tiết kết bằng nguyên âm. Brakk ưu tiên tên ngắn, âm cuối khép. Aelith ưu tiên vần có thể ngân và ghi rõ cách đọc các cụm nguyên âm. Kesh ưu tiên tên gọn với âm mũi hoặc âm cuối khép. Mẫu này dùng cho tên cá nhân, tách khỏi cách gọi các chủng tộc của con người.

Chữ hoa trong cột cách đọc chỉ phần nhấn. Cột này dùng nội bộ khi đọc thoại, làm localization và kiểm tên trên UI.

| Nhân vật / danh xưng | Cách đọc gần đúng | Hình tượng cần gợi |
|---|---|---|
| Daskel | DAS-kel | Nhịp đầu dứt khoát, âm cuối khép. Danh xưng First Warden đặt trọng tâm vào quyền lực và trật tự của chế độ. |
| Sevra Ilvane | SEV-ra IL-vayn | Tên riêng gọn. Họ Ilvane nối cô với người cai trị cũ và quyền kế vị. |
| Ilsume | IL-soom | Âm có thể kéo nhẹ, theo nhịp nói từ tốn của thương nhân giữ lễ. |
| Steward Ilvane | IL-vayn | Họ gia tộc là dấu nhận diện khi kể về người cai trị cũ. |
| Maro | MAH-roh | Hai âm tiết mở, nghe dễ gần khi hắn đóng vai khách buôn. |
| Tikko | TIK-ko | Nhịp bật ở giữa, khớp thói quen tự xưng tên. |
| Dromm | DROM | Cụm đầu dr, kết bằng m. Tên ngắn, âm cuối khép, dành cho người chở hàng nặng ít lời. |
| Vaeth | VAYTH | Vần ay có thể ngân. Đọc đuôi th như trong từ *thin* khi nói tiếng Anh, có thể đọc gần VÊT khi trao đổi tiếng Việt. |
| Nhem | NYEM | Đầu nh như tiếng Việt. Viết NY trong ghi chú tiếng Anh để gợi đúng âm. |

## 13. Voice sheet

### Giọng chung

- Nền nghiêm: sinh tồn, mất mát, việc phải làm. Câu ngắn, nói việc trước, cảm xúc nằm ở điều không nói.
- Hài nhẹ đến từ tính cách và từ chỗ lệch văn hóa giữa các loài, không từ câu đùa. Hài không có mặt ở mốc mất mát.
- Nhân vật nói với nhau như người cùng làm việc, không giảng giải thế giới.
- Daskel và người của The Wardens nói bằng từ của trật tự và bổn phận: giữ, canh, bảo hộ. Không bao giờ lên giọng. Người Sennari ngoài chế độ nói bằng nghi thức.

### Điều cấm

- Chữ số, tên phím, tên nút, tên biến, thuật ngữ luật chơi trong lời nhân vật.
- Từ chỉ số người chơi (mục 11).
- Emoji, gạch dài, dấu chấm phẩy.
- Câu dài quá giới hạn của kênh: 80 ký tự cho hộp thoại, 60 cho bong bóng và radio. Cảnh dài quá số câu ở mục 3.
- Nhân vật tự kể tiểu sử của mình thành đoạn.
- Lời trách người chơi vì đã săn Driftlife (B10).
- Tiếng lóng thời nay và nhắc tới thương hiệu thật.
- Trước mốc đóng chương 3, không nhân vật nào nói thẳng rằng Solace không có thật. Nghi ngờ về hồ sơ và nguồn của nó thì được gieo theo bảng mục 2.9.
- Lời nào nói cả chủng tộc Sennari là xấu. Kẻ xấu là Daskel và chế độ của hắn (B5).
- Lời kể Daskel như một kẻ tham của. Động cơ của hắn là hận thù và giữ quyền (B5).

### Từng nhân vật

| Nhân vật | Ba từ khóa | Hay dùng | Không bao giờ |
|---|---|---|---|
| Ingrid Halvorsen | Khô, gọn, thực tế | Câu mệnh lệnh, tên dụng cụ | Nói về cảm xúc của mình bằng lời thẳng |
| Linh Tran | Khéo, nhanh, giữ thể diện | "Ý ông ấy là", lời chữa, lời cảnh báo lịch sự | Nói thẳng điều cô đang giấu |
| Rafael Ortega | Mơ mộng, vòng vo, ấm | Sao, biển, đèn, đường về | Hứa chắc một con đường là an toàn |
| Amara Okafor | Chậm, chính xác, dịu | Tên bộ phận sinh vật, "nhẹ tay" | Gọi sinh vật là "hàng" |
| Yusuf Demir | To, thân mật, hiếu khách | Trà, bến, khách, quát việc | Nói nhỏ |
| Tikko | Tò mò, líu lo, tự xưng tên | "Tikko" thay cho "tôi", câu hỏi | Mặc cả gắt |
| Nhem | Điềm đạm, cân nhắc, nặng lòng | "Tin là hàng", câu ngắn có hai vế | Đùa |
| Maro | Vồn vã, hào phóng, soi mói | Lời khen, câu hỏi về con người | Nói về bản thân |
| Daskel | Phẳng, từ tốn, chắc nịch | Trật tự, hy sinh, người cha, "tàn dư" | Lên giọng, xin lỗi |
| Sevra Ilvane | Trịnh trọng, thẳng, mang nợ | Nghi thức, "nhà tôi", lời nhận lỗi thay cho Sennar | Xin tha, nói xấu cả dân mình |
| Odile Laurent | Cứng, nghĩa vụ, mệt | Nhiệm vụ, bằng chứng, lệnh | Nói "tôi sợ" |
| Bram Kowalski | Than, tốt bụng, lắm lời | Lưng đau, xuồng rò, "hỏi cho bạn tôi thôi" | Từ chối giúp |
| Elias Vance | Khắc nghiệt, ít lời, sợ | Đếm, giữ, ở lại | Nói về hy vọng |

### Câu mẫu

- Mỗi câu một mã. Đây là câu mẫu để giữ giọng, chưa phải bảng chuỗi của game.
- Cột Kênh quyết giới hạn ký tự theo `ux-ui.md` bảng strings: hộp thoại 80, bong bóng và radio 60.

| Mã | Nhân vật | Câu | Ngữ cảnh | Kênh |
|---|---|---|---|---|
| VO_ING_01 | Ingrid | Đừng cảm ơn. Đưa tôi cái cờ lê. | Vừa được đánh thức | Hộp thoại |
| VO_ING_02 | Ingrid | Thứ gì hỏng được thì sửa được. Trừ người. | Nhìn buồng tắt | Hộp thoại |
| VO_ING_03 | Ingrid | Tôi khoan đáy biển cả đời. Giờ mới biết sợ một cái lỗ. | Xem mảng vỏ của Wick | Hộp thoại |
| VO_LIN_01 | Linh | Ông ấy vừa khen tàu của ta. Hoặc chê. Từ đó có hai nghĩa. | Giờ giao thương, dịch cho Tikko | Bong bóng |
| VO_LIN_02 | Linh | Nói chậm thôi. Lịch sự với họ rẻ hơn sửa tàu. | Trước khi Ilsume cập bến | Bong bóng |
| VO_LIN_03 | Linh | Tôi dịch đúng từng chữ. Không ai dịch cho tôi ý đồ. | Lời thú nhận ở chương 4 | Hộp thoại |
| VO_RAF_01 | Rafa | Sao không nói dối. Chỉ bản đồ mới nói dối. | Vừa được đánh thức | Hộp thoại |
| VO_RAF_02 | Rafa | Tôi vẽ đường, Ember đi. Chia việc thế cho tôi dễ ngủ. | Mở Vùng trung tâm | Hộp thoại |
| VO_RAF_03 | Rafa | Ngoài kia tối lắm. Nhưng tối thì mới thấy đèn nhà. | Chào đầu ngày | Hộp thoại |
| VO_AMA_01 | Amara | Nhẹ tay thôi. Nó sợ ta hơn ta sợ nó. | Nhận con cỡ M đầu tiên | Hộp thoại |
| VO_AMA_02 | Amara | Tôi mang cả một kho giống lên tàu. Giờ còn cuốn sổ này. | Chuyện riêng | Hộp thoại |
| VO_AMA_03 | Amara | Đây không phải dấu canh giữ. Đây là dấu săn trộm. | Cú lật, C3.7 | Hộp thoại |
| VO_YUS_01 | Yusuf | Tàu cập bến là khách. Khách thì phải có trà. | Vừa về Ember | Hộp thoại |
| VO_YUS_02 | Yusuf | Bốc nhanh lên! Tàu không đợi, tôi thì đợi còn ít hơn. | Trong giờ giao thương | Bong bóng |
| VO_YUS_03 | Yusuf | Tôi đã mời nó trà. Trà ngon của tôi. | Sau C3.8 | Hộp thoại |
| VO_TIK_01 | Tikko | Cái có răng này! Loài người dùng chải đầu hay đánh nhau? | Thấy một cái lược | Bong bóng |
| VO_TIK_02 | Tikko | Trạm sáng đèn giữa bãi vỡ. Tikko thích. Tikko ghé. | Cập bến lần đầu | Bong bóng |
| VO_TIK_03 | Tikko | Hôm nay Tikko trả thêm. Vì Ember vẫn còn đây. | Chương 5 | Bong bóng |
| VO_NHE_01 | Nhem | Tin là hàng. Hàng của tôi chưa giết ai. Tôi đã tưởng vậy. | Xem MM3.1 | Hộp thoại |
| VO_NHE_02 | Nhem | Tôi chuyển nó đi như mọi bản tin khác. Không mở, không hỏi. | Chuyện riêng đoạn hai | Bong bóng |
| VO_NHE_03 | Nhem | Lời nói dối đi bằng mạng của tôi. Sự thật cũng đi đường đó. | C5.2 | Hộp thoại |
| VO_MAR_01 | Maro | Thương hội chúng tôi rất quan tâm tới trạm này. Từng người. | Cập bến lần thứ nhất | Bong bóng |
| VO_MAR_02 | Maro | Dạo này có thương hội Sennari nào ghé đây không? | Cập bến lần thứ hai | Bong bóng |
| VO_MAR_03 | Maro | Giao bà ta ra. Chuyện này không phải của loài người. | Cuộc bắt cóc, C3.8 | Radio |
| VO_SER_01 | Daskel | Chúng ăn hết một thế giới. Giờ chúng tìm thế giới của ta. | Lời phát, Sevra bật ở C4.6 | Hộp thoại |
| VO_SER_02 | Daskel | Cha ta chết dưới tay loài các người. Ta nhớ. | C5.5 | Bong bóng |
| VO_SER_03 | Daskel | Sennar cần một kẻ thù. Ta cho họ các người. | C5.5 | Bong bóng |
| VO_SEV_01 | Sevra | Nghi thức trước, hàng sau. Trạm này chào còn vụng. | Dưới tên Ilsume, lúc cập bến | Bong bóng |
| VO_SEV_02 | Sevra | Ilsume là tên tôi mượn. Tên thật của tôi đáng giá một cái đầu. | Lộ danh tính, C3.8 | Hộp thoại |
| VO_SEV_03 | Sevra | Solace là lời nói dối của hắn. Tọa độ này là lời hứa của tôi. | C5.6 | Hộp thoại |
| VO_ODI_01 | Odile | Chúng ta có nhiệm vụ. Nhiệm vụ không chết theo tàu mẹ. | C2.2 | Hộp thoại |
| VO_ODI_02 | Odile | Tôi để đèn sáng suốt ngần ấy năm. Đừng bắt tôi tắt nó. | Cảnh mở chương 4 | Hộp thoại |
| VO_ODI_03 | Odile | Lần này không có lệnh nào để theo cả. | C5.8 | Hộp thoại |
| VO_BRA_01 | Bram | Có ai ở đó không? Đây là Lantern. Làm ơn, có ai không? | C1.9 | Hộp thoại |
| VO_BRA_02 | Bram | Xuồng lại rò. Lưng lại đau. Hàng thì vẫn thiếu như mọi khi. | Cập bến | Bong bóng |
| VO_BRA_03 | Bram | Này Ember, dư cuộn băng dính không? Hỏi cho bạn tôi thôi. | Rời bến | Bong bóng |
| VO_ELI_01 | Elias | Đi tiếp là chết. Tôi đếm đủ người chết rồi. | C3.5 | Hộp thoại |
| VO_ELI_02 | Elias | Ember gọi đó là hy vọng. Tôi gọi đó là mồi. | C3.5 | Hộp thoại |
| VO_ELI_03 | Elias | Giữ con bé xa cửa khí. Nó chưa thấy gì ngoài kia cả. | Nói về Wren | Hộp thoại |

- Câu VO_ELI_02 được viết có chủ ý: Elias gọi đúng tên sự thật một chương trước khi có ai biết, theo nghĩa bóng. Nó là một chỗ gieo nghi ngờ của mục 2.9.

### Dòng Sổ tay chương 1 `MVP`

- Mỗi mốc có một dòng mục tiêu (hiện khi mốc Mở) và một dòng tóm tắt (ghi khi mốc Xong). Mỗi vật manh mối có một dòng.
- Giới hạn 60 ký tự mỗi dòng, theo khóa notebook.line của gd-ux cho màn UI-19.
- Dòng của chương 2 tới 5 viết khi dựng chương đó.

| Mã | Dòng | Loại |
|---|---|---|
| SO_C1_1_TT | Tỉnh dậy trên Ember. Trạm đang trôi giữa bãi vỡ. | Tóm tắt |
| SO_C1_2_MT | Ra ngoài gom vật liệu, sửa khoang neo. | Mục tiêu |
| SO_C1_2_TT | Ember đã neo vào một khối xác lớn. | Tóm tắt |
| SO_C1_3_MT | Tới xác trạm gần điểm neo: Station Cinder. | Mục tiêu |
| SO_C1_3_TT | Tìm thấy Station Cinder, một trạm con đã vỡ. | Tóm tắt |
| SO_C1_4_MT | Kéo buồng còn sáng đèn ở Cinder về Ember. | Mục tiêu |
| SO_C1_4_TT | Một buồng ngủ đông đã về trạm. Người bên trong còn sống. | Tóm tắt |
| SO_C1_5_MT | Sửa xưởng cho Ingrid. | Mục tiêu |
| SO_C1_5_TT | Xưởng chạy lại. Ingrid chế được dụng cụ. | Tóm tắt |
| SO_C1_6_MT | Chế Bộ kích nguồn, mở cửa khóa ở Cinder, kéo buồng về. | Mục tiêu |
| SO_C1_6_TT | Buồng thứ hai đã về Ember. | Tóm tắt |
| SO_C1_7_MT | Sửa khoang liên lạc và cảng cho Linh. | Mục tiêu |
| SO_C1_7_TT | Linh phát lời gọi đầu tiên ra bãi vỡ. | Tóm tắt |
| SO_C1_8_MT | Chờ tàu đầu tiên cập bến trong giờ giao thương. | Mục tiêu |
| SO_C1_8_TT | Tikko, dân gom phế liệu Oru, là khách đầu tiên. | Tóm tắt |
| SO_C1_9_MT | Làm thêm giờ giao thương. Khoang liên lạc đang dò sóng. | Mục tiêu |
| SO_C1_9_TT | Bắt được sóng của Station Lantern. Còn người sống. | Tóm tắt |
| SO_MM1_1 | Nhật ký Cinder: một ánh chớp ngoài mạn tàu trước tiếng nổ. | Vật manh mối |
| SO_MM1_2 | Máy liên lạc Cinder còn lưu tên hồ sơ Lodestar Survey. | Vật manh mối |
| SO_MM1_3 | Thẻ tên của người nằm trong buồng đã tắt. | Vật manh mối |

- Khi mốc Lời gọi đầu tiên còn thiếu một trong hai khoang: vẫn dùng dòng mục tiêu của mốc đó, khoang đã sửa xong được gạch đi trên màn Sổ tay (cách hiển thị do gd-ux).

### Thẻ tên chương `MVP` cho chương 1

- Hiện vài giây ở pha Chuẩn bị của ngày đầu tiên mỗi chương. Khóa hud.chapter của gd-ux, tối đa 40 ký tự.
- Thẻ của chương đầu hiện sau cảnh tỉnh dậy. Tên chương là tiếng Việt như bảng chương của khung.

| Mã | Dòng |
|---|---|
| hud.chapter.1 | Chương 1: Tỉnh dậy |
| hud.chapter.2 | Chương 2: Không cô độc |
| hud.chapter.3 | Chương 3: Kẻ canh giữ |
| hud.chapter.4 | Chương 4: Tâm vụ nổ |
| hud.chapter.5 | Chương 5: Rời neo |

### Dòng trên buồng đã tắt của Ember `MVP`

Hiện khi người chơi bấm vào một buồng tắt (mục 2.7). Hồ sơ nào có người chơi dùng thì không có dòng này.

| Mã | Hồ sơ | Dòng |
|---|---|---|
| SO_BUONG_PC1 | Nguyễn Việt | Nguyễn Việt. Buồng tắt khi trạm còn trôi. |
| SO_BUONG_PC2 | Jonas Weber | Jonas Weber. Không tỉnh lại. |
| SO_BUONG_PC3 | Mei Tanaka | Mei Tanaka. Buồng mất khí giữa giấc ngủ. |
| SO_BUONG_PC4 | Niamh Doyle | Niamh Doyle. Đèn buồng tắt trước khi trạm gọi dậy. |

## 14. Khối GAME STORY (dán vào một ô Sheet)

Khi tỉnh khỏi giấc ngủ đông, Nguyễn Việt phát hiện trạm Ember đang trôi giữa xác Cradle, con tàu mẹ từng đưa đoàn di cư rời Trái Đất để đến Solace. Cùng những người sống sót, Việt thu hồi vật liệu để sửa trạm và tìm cách tiếp tục hành trình. Khi lần theo tọa độ cũ, họ phát hiện The Wardens đang phong tỏa bãi vỡ. Trong một chuyến đi, cả nhóm cứu được Sevra Ilvane, người thừa kế của Sennar đang sống dưới vỏ bọc thương nhân. Cô tiết lộ rằng Daskel, kẻ đã lật đổ cha cô, dùng một hồ sơ khảo sát giả để dụ Cradle vào ổ phục kích. Mang mối hận từ cuộc chiến cũ, hắn biến đoàn di cư thành kẻ thù chung để củng cố quyền lực ở Sennar. Tổ Ember quay lại Cradle và tìm được bản ghi xác nhận con tàu đã phát hiện tọa độ giả ngay trước khi bị tấn công. Họ chuyển bằng chứng cho Sevra, rồi giữ chân Daskel tại Warden Rig để lực lượng của cô có thời gian giành quyền kiểm soát ở Sennar. Daskel bị bắt, vòng phong tỏa được dỡ bỏ và những con tàu cứu hộ bắt đầu tìm kiếm các buồng ngủ đông còn tín hiệu. Sevra trao cho Ember tọa độ của một hành tinh có sự sống. Sau khi tự kiểm tra tọa độ trên bản đồ sao thu được ở Warden Rig, cả kíp nhả neo, đưa trạm rời bãi vỡ để tiếp tục hành trình tìm một nơi định cư.

## Lệch với vai khác (cập nhật ở vòng QA 2, 2026-11-20)

Đang mở:

| # | Với | Lệch | Đề xuất | Tình trạng |
|---|---|---|---|---|
| 2 | gd-economy, gd-tech | Sàn ngày của chuỗi mốc là 7, 5, 8, 3, 3 (mục 5). Sim kinh tế dùng đúng bộ số này | GDM đã chốt giữ sàn, mục tiêu co-op 60 đến 75% (log dòng 69) | Đã gửi gd-economy |
| 3 | gd-tech | `ky-thuat.md`: schema mốc có một điều kiện, cảnh chưa tách theo người, vật truyện chưa có loại, khe, mốc hiện, khoang nhận. Validator chưa kiểm cặp mã truyện với ID vật và khe | Theo mục 6 của file này | Đã gửi gd-tech |
| 7 | gd-character | File luật người chơi của gd-character còn cho người rời phiên giữa chuyến giữ túi như khi về bằng cửa khí. Khung C10: tính như bị kéo về | gd-character sửa theo C10. File này đã theo C10 (biên 13) | Báo GDM, gd-character là subagent |
| 8 | gd-quan | `tram-va-cang.md` luật 38 ghi lần cập bến đầu của TA08 vào lịch từ mốc C3.3. Mốc C3.3 của truyện lại xong chính nhờ lần cập bến đó | Luật 38: lần đầu vào lịch từ ngày kế tiếp sau khi bến thuộc KH12 Hoạt động, khớp bảng ba lần cập bến ở mục 2.5 | Đã gửi gd-quan |
| 9 | gd-world | Bảng hòm của `map.md` cho Wick ghi thẻ tên ở cả M1 đến M3, trong khi hàng N2 ghi M3 là thẻ tên, M1 và M2 là mảng vỏ STY-211 và nhật ký STY-101 | gd-world sửa bảng hòm của Wick, và liệt kê đủ vật ở Lantern, N4, N5 | Đã gửi gd-world |
| 13 | gd-character | Đợt 6: hồ sơ Sevra Ilvane (mã đề xuất NP-5), Daskel đổi vai, lính The Wardens là người Sennari, Ilsume là tên giả | gd-character sửa `ho-so-nhan-vat.md` | GDM chuyển, gd-character là subagent |

Đã hết lệch:
- gd-world: khe M4 cho nhật ký trạm ở C3 của Cinder, khe V1 cho vật nhiệm vụ ở N2, N6, N7, N8, STY-105 ở Engine Core, lối vào map nhánh theo mốc, mốc C4.5.
- gd-world, đợt 4: hàng N7 của `map.md` đã gọi tên khe M1 ở Broken Hold và M2 ở Cryo Deck. Tên tiếng Anh các khu trong map nhánh đã chốt ở bảng A01 đến A05 của `map.md`, file này đã đổi theo (log GDM dòng 74).
- gd-items: đủ ID cho cả 23 vật truyện, nghĩa của nộp, bản sao dữ liệu chỉ từ STY-101 và STY-401, ENG-105 đổi tên, Súng lưới ở chương 1.
- gd-quan: luật 38 (lần hai và lần ba của TA08 chờ mốc), luật 15 (quest của Linh là KH06 và KH07), luật 14 (Hồi sức), tên TA02 và TA09.
- gd-ux: giới hạn ký tự của hộp thoại, radio, bong bóng, dòng Sổ tay và lời theo trạng thái, tên Sổ tay, cảnh sau giờ giao thương, bước T29, thẻ tên chương.
- gd-combat: vai truyện và vị trí của BS-1 tới BS-5, loài mang thẻ, cỡ M cho mốc C2.4.
- gd-character: cảnh đến của người vào sau, bốn hồ sơ người chơi không có nghề riêng.

## Điểm tự quyết (gd-story, để GDM gom vào log)

| # | Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|---|
| 1 | Truyện có rẽ nhánh không | Một đường, không lựa chọn hội thoại, một kết | Tiến trình truyện là của chung nhóm (C3), bỏ phiếu lựa chọn trong co-op không tạm dừng rất rối. Vừa sức nhóm | Lựa chọn có hệ quả, nhiều kết | Đắt |
| 2 | Vật truyện có mất khi bị kéo về không | Vật manh mối ghi Sổ tay ngay khi nhặt. Vật nhiệm vụ rơi thì về vị trí gốc | P4 cấm bỏ lỡ manh mối. K2 chỉ cho giữ 1 món sẽ làm mất vật truyện | Tính như đồ mọi loại khác theo K2 | Rẻ |
| 4 | Người chơi biết Solace là mồi bằng cách nào | Hộp ghi hành trình: đài quan sát của Cradle đã tự nhìn về phía Solace ngay trước vụ nổ và thấy không có gì khớp hồ sơ | Sự thật phải đến từ chính mắt loài người, không từ lời kẻ thù hay lời thương nhân, thì người chơi mới tin | Daskel nói ra, hoặc Nhem tìm ra | Rẻ |
| 5 | Vì sao phải vào Warden Rig ở chương 5 | Mọi bản đồ loài người có đều chép từ hồ sơ giả. Bản đồ thật chỉ kẻ dựng hồ sơ mới có, và nó là thứ lắp bước cuối của động cơ | Cho chương 5 một mục tiêu cụ thể đúng log GDM dòng 36, nối boss cuối với việc rời neo | Rời neo không cần Rig | Vừa |
| 6 | Vành đai trong mở bằng gì | Bằng mốc C1.9 (Lantern đọc vị trí). Hoa tiêu mở Vùng trung tâm và Skiff | Khung mục 7 đặt Hoa tiêu ở chương 2, trong Vành đai trong. gd-world đã theo (W4) | Vớt Hoa tiêu ở chương 1 | Vừa |
| 7 | Năm người vớt có cùng một kiểu vớt không | Ba người kéo buồng từ xác trạm (Ingrid, Linh, Rafa). Amara đang thức ở Lantern, tới bằng xuồng của Bram. Yusuf đang thức ở Veyl Waypost, đón bằng Skiff | Năm lần không lặp, và cho Lantern, giờ giao thương, Skiff mỗi thứ một vai trong truyện | Cả năm đều kéo buồng | Rẻ |
| 8 | Nhân vật người chơi | Bốn hồ sơ mặc định có tên, đổi tên được, không có lời thoại riêng | Buồng tắt cần có tên. Người chơi 1 đến 4 không thể có thoại riêng mà vẫn đúng mọi số người | Nhân vật chính có tên và giọng riêng | Vừa |
| 9 | Số xác trạm có truyện | Ba: Cinder, Wick, Flint. Flint không có người để vớt | Mỗi dải một xác trạm, khớp ba người kéo buồng và cú lật | Một xác trạm mỗi người vớt | Rẻ |
| 10 | Lý do truyện của sự cố giờ giao thương (K14) | Thiết bị Maro để lại dưới bến, gỡ rồi vẫn còn di chứng | Nối K14 với mốc cải trang B8, sự cố có thủ phạm | Sự cố không có lý do | Rẻ |
| 12 | The Veyl trung lập làm gì ở kết | Không đánh giúp. Sau khi bằng chứng chạy hết The Lattice, họ quay lại bãi vỡ đứng nhìn Ember rời neo | Giữ trung lập Lead chốt, vẫn cho The Wardens mất uy quyền | The Veyl hợp sức đánh The Wardens | Rẻ |
| 13 | Kết với The Wardens | Hạ Daskel ở Warden Rig, thả Driftlife. Daskel bị bắt và giao cho The Kindling, truyện không kể bản án. Không diệt ai | Chủ đề là làm khác đi, không phải trả thù. Lead cho cách mạng thành công nên Daskel phải mất quyền | Giết Daskel, hoặc để số phận mở | Rẻ |
| 14 | Lời hứa "dựng khác đi" do ai nói | Amara, ở câu áp chót của cảnh kết, đặt cạnh hiến chương định cư của United Accord | Log GDM dòng 38 và 91: giữ làm lời nhân vật. Amara là người mang chủ đề suốt game | Odile hoặc người dẫn truyện | Rẻ |
| 15 | Thêm Wren, đứa trẻ sinh trên The Raft | Có | Người hỏi tên của nơi sắp tới phải là người chưa từng được hứa gì | Không có trẻ em | Rẻ |
| 16 | Sau cảnh kết | Theo K24: về menu chính, bản lưu ở ngày cuối. Thêm: động cơ giữ trạng thái đã xong, hai mốc cuối không phát lại, không rời neo lần nữa (luật 26) | K24 chưa nói trạng thái mốc và động cơ trong bản lưu đó | Sửa lại giai đoạn 5 và xem lại kết | Rẻ |
| 17 | Số cảnh mỗi điểm nghỉ và độ dài cảnh | Một cảnh, tối đa 3 câu, mốc chương tối đa 8 câu | Truyện chen vào điểm nghỉ, không chặn vòng ngày (P4) | Cảnh dài tự do | Rẻ |
| 18 | Năm chủng tộc thương nhân | Oru, Sennari, Brakk, Aelith, Kesh | Mỗi chủng tộc một kiểu hàng và một kiểu hài, Kesh giữ mạng tin của B4 | Thương nhân không chia chủng tộc | Rẻ |
| 19 | Người vào sau có lấp buồng tắt không | Không. Người vào sau là người vớt từ một buồng vô danh | Lead chốt người trong buồng hỏng đã chết | Người mới tỉnh dậy từ buồng tắt | Rẻ |
| 20 | Tên hồ sơ mồi và mạng tin | Lodestar Survey, The Lattice | Khung B4 có khái niệm, chưa có tên | Không đặt tên | Rẻ |
| 21 | Lời gốc viết bằng tiếng gì | Tiếng Việt, tên riêng tiếng Anh | Tài liệu phòng là tiếng Việt, Lead chỉ yêu cầu tên tiếng Anh | Viết gốc tiếng Anh | Vừa |
| 22 | Quest của người vớt | Theo luật của gd-quan: sửa khoang. Truyện không thêm điều kiện riêng | Một luật cho cả năm người, không hai vai cùng giữ một luật | Quest riêng nhiều bước do truyện đặt | Rẻ |
| 23 | Mốc xong lúc nào khi co-op | Ngay khi điều kiện đúng, không chờ cảnh. Cảnh xếp hàng riêng từng người (luật 19) | Cảnh phát riêng từng máy nên không thể là thứ quyết mốc xong | Mốc xong khi cảnh phát xong | Vừa |
| 24 | Nộp vật nhiệm vụ có tiêu vật không | Không tiêu. Vật vào kho, chỉ công thức hoặc danh sách sửa của gd-items mới tiêu, và luôn sau mốc cần vật (luật 20) | Tránh khóa cứng ở C2.8 và chương 5 | Nộp là tiêu | Rẻ |
| 25 | Mốc xảy ra giữa giờ giao thương trình bày thế nào | Trong giờ giao thương chỉ bong bóng, cảnh của mốc phát ở pha Cuối ngày (luật 21) | Không cảnh nào được dừng đồng hồ giờ giao thương | Dừng giờ giao thương để phát cảnh | Rẻ |
| 26 | Rời neo có tự chạy khi sửa xong động cơ không | Không. Cần mọi người có mặt xác nhận ở khoang dẫn đường | Kết game là việc người chơi chọn lúc làm, và co-op không ai bị kéo vào kết khi chưa sẵn sàng | Tự rời neo khi sửa xong | Rẻ |
| 27 | Giảm số vật ở chương 3 | Gộp sổ hải trình vào bản ghi của Nhem (MM3.1), đưa ghi chép của người xem sao thành lời Elias ở C3.5 | Dùng đúng số khe `map.md` đang có ở N4 và N5 | Xin thêm hai khe | Rẻ |
| 28 | Mã cho vật nhiệm vụ | Mã V theo chương (V1.1 tới V5.1), tách khỏi mã MM của vật manh mối | Khớp quy ước khe M và khe V của `map.md` | Dùng chung mã MM | Rẻ |
| 29 | Chuyện riêng của thương nhân | Là lời bong bóng lúc cập bến, mở theo số lần phục vụ xong tàu 3, 6, 10 cộng một mốc truyện cho từng đoạn. Không phải cảnh | Không chiếm điểm nghỉ, không đẩy lùi cảnh của mốc, không lộ chuyện của chương sau | Là cảnh trong hàng chờ | Rẻ |
| 30 | Áp K25 cho mốc đóng chương 3 | Cuộc bắt cóc ở N4 chỉ xảy ra khi giai đoạn 3 của động cơ đã lắp | Nếu để cuộc bắt cóc xảy ra rồi mới xét động cơ thì Sevra lộ danh tính mà chương chưa đóng | Cho cứu trước, chương đóng sau | Rẻ |
| 32 | Sàn ngày có tính bước chế qua đêm không | Có, tính hai bước mà chuỗi mốc bắt buộc: Bộ kích nguồn và Lõi dẫn hướng rời bãi vỡ | Sàn là con số gd-economy dùng làm cận dưới, phải là cận dưới thật | Bỏ qua mọi thời gian chế | Rẻ |
| 33 | Chủng tộc của X và Y (đợt 6) | Sennari, chủng tộc đã có. Hành tinh quê tên Sennar | Maro vốn đã giả làm thương nhân Sennari, Ilsume là người Sennari. Không thêm chủng tộc, không thêm art | Chủng tộc mới | Vừa |
| 34 | Cha của Daskel chết thế nào | Trong một trận với hạm đội loài người ở The Meeting War | Lead nói hắn hận vì cha hy sinh và hướng hận thù sang Trái Đất. Phải có lý do để mối hận đó nhắm vào loài người | Chết vì một chủng tộc khác | Rẻ |
| 35 | Số phận Ilvane và tuổi của Sevra | Ilvane chết trong giam cầm. Sevra còn nhỏ lúc đảo chính, lớn lên trong thương hội. Người Sennari sống dài hơn người | Sevra là người thừa kế thì Ilvane phải đã mất. Từ đảo chính tới lúc game bắt đầu là rất nhiều năm | Ilvane còn sống trong ngục | Rẻ |
| 36 | Y giả làm thương nhân nào (log 89) | Ilsume, thương nhân đã có từ chương 2 | Người chơi đã bán hàng cho cô nhiều giờ giao thương trước khi cứu cô, cú lộ danh tính có sức nặng. Không thêm nhân vật | Một thương nhân mới | Vừa |
| 37 | X có mặt ở bãi vỡ không | Có. Daskel tự tới Warden Rig ở đầu chương 5 và là boss cuối | Cho người chơi mặt đối mặt với phản diện chính. Sennar vắng hắn là lý do cách mạng thắng mà người chơi không cần tới đó (log 88) | Daskel ở Sennar, boss cuối là một tướng của hắn | Vừa |
| 38 | Cứu và hộ tống Y bằng cách nào (log 86, 87) | Sevra ở trong kén thoát hiểm, kéo như buồng ngủ đông. Cứu ở Waypost Outer Ring, hộ tống tới The Hearth, đều trong N4 | Dùng lại luật kéo và map có sẵn | Sevra tự bay theo người chơi | Vừa |
| 39 | Nối tình báo (log 87) | Tàu TA11 của The Kindling có đơn đặt trước tin mật tự sinh từ ngày kế tiếp sau mốc đóng chương 3. Ngưỡng chương 4 là 1 đơn, ngưỡng chương 5 là tổng 2 đơn | Giờ giao thương có việc của truyện suốt chương 4. Sàn ngày giữ 3 và 3. gd-quan cấp mã tàu mới vì TA09 đã có vai ở Hạng cảng | Chỉ mở đơn đặt trước tin mật ở chương 5 | Rẻ |
| 47 | Bỏ tên riêng mà chế độ đặt cho đàn Driftlife | Bỏ. Hình ảnh chế độ tự dựng chỉ còn "khu bảo hộ" và danh xưng First Warden | Tên này gắn với ý phản diện bản trước, không file nào khác dùng | Giữ làm lời tuyên truyền | Rẻ |
| 48 | Tên mốc C3.7 và C5.5 | Dấu săn trộm, First Warden | Tên cũ dùng chữ của ý phản diện bản trước. Tên chương 3 giữ theo khung mục 7 | Giữ tên cũ | Rẻ |
| 40 | Vì sao Daskel để người sống sót yên nhiều năm | Hắn cần kẻ thù còn đó để giữ quân và giữ ghế | Lời Lead: hướng sự chú ý sang Trái Đất để ổn định vị trí. Lấp lỗ hổng "sao chưa giết hết" | Quân đồn trú lười | Rẻ |
| 41 | Loài người có lỗi gì trong truyện | Chỉ một: đã vắt kiệt Trái Đất (B1). Hiến chương định cư MM4.2 cho thấy họ đã định làm khác đi | Lead: cái nhìn loài người tham lam là phiến diện. Phiến diện nghĩa là có một nửa đúng | Loài người vô can hoàn toàn | Rẻ |
| 42 | Tọa độ thật là gì trong game | Một cảnh ở mốc C5.6, không phải vật mới. Tọa độ đặt lên bản đồ sao thật STY-501 để kiểm được | Không thêm vật, không đổi công thức RCP-207. Trả lời câu "vì sao tin lần này" | Một vật nhiệm vụ mới | Rẻ |
| 43 | Ai nói thẳng Solace là giả đầu tiên | Sevra, ở mốc đóng chương 3. Tổ Ember chưa tin, chương 4 đi lấy bằng chứng | Giữ nguyên tắc sự thật phải đến từ chính Cradle (dòng 4), và cho chương 4 một câu hỏi rõ | Không ai nói trước chương 4 | Rẻ |
| 44 | Maro sau đợt 6 (log 90) | Hai lần cập bến, rồi chỉ huy toán bắt cóc. Thiết bị nghe lén gắn ở cảng Ember làm lộ lịch của Ilsume | Cuộc bắt cóc có nguyên nhân từ chính cảng của người chơi | Giữ lần cập bến thứ ba | Rẻ |
| 45 | Mốc dài của chương 4 | C4.6 (mở hộp ghi, Sevra kể chuyện), thay cho C4.7 | Mốc đóng chương 4 nay nằm trong giờ giao thương, cảnh của nó là cảnh ngắn | Hai cảnh dài liền nhau | Rẻ |
| 46 | Tên mới | Sennar, Ilvane, Sevra, The Meeting War, The Kindling, The Hearth, danh xưng First Warden và Steward of Sennar | Log 85. Tên Sennari ngắn, hai âm tiết. The Kindling và The Hearth nối với họ tên giữ lửa của các trạm con | Xem mục 12 | Rẻ |

## Phản biện khung

| # | Vấn đề | Lý do và bằng chứng | Phương án thay | Đã viết theo |
|---|---|---|---|---|
| 1 | K21 nói mỗi chương thêm đúng một kiểu chơi mới, nhưng bảng mục 7 của khung ghi hai kiểu ở chương 1 (khai thác và giờ giao thương) và hai kiểu ở chương 3 (sự cố trong giờ giao thương, kẻ địch có vũ khí) | Hai chỗ của khung lệch nhau. Chương 3 còn gánh thêm Vùng trung tâm, ba map nhánh, một người vớt và ba mốc truyện lớn nhất | Sửa K21 thành "một hoặc hai". Hoặc dời một map nhánh của chương 3 sang chương 4 | GDM đã xử, log dòng 43: K21 sửa thành một hoặc hai. Chương 3 giữ nguyên |
| 2 | K12 ghi Hoa tiêu mở dải, nhưng mục 7 đặt Vành đai trong và Hoa tiêu cùng ở chương 2 | Phải vào Vành đai trong mới vớt được Hoa tiêu | Sửa K12: Hoa tiêu mở Vùng trung tâm và Skiff | GDM đã xử, log dòng 44: K12 đã sửa đúng phương án thay |
| 3 | K7 ghi manh mối truyện chỉ nằm ở map nhánh | Nhiều mốc truyện phải diễn ra ở trạm và cảng: tàu lạ, cú lật ở phòng nghiên cứu, thiết bị dưới bến | Sửa chữ K7 thành "vật manh mối", còn mốc truyện được diễn ra ở trạm và cảng | GDM đã xử, log dòng 45: K7 đã sửa đúng phương án thay |
| 4 | K2 chỉ cho giữ 1 món khi bị kéo về | Áp cho vật truyện thì người chơi phải chọn giữa manh mối và hàng, hoặc mất vật nhiệm vụ | Thêm ngoại lệ cho vật manh mối và vật nhiệm vụ | GDM đã xử, log dòng 46: K2 đã có ngoại lệ. gd-items đã ghi luật V4 cùng nghĩa, gd-character áp ở đợt 1b |
| 5 | MVP chỉ có chương 1, trong đó chưa có The Wardens, chưa có cú lật | MVP không đo được sức kéo của truyện, chỉ đo được móc mở đầu. `10-narrative.md` nguyên lý 1: truyện đi sau cấu trúc chơi, nên chấp nhận được | Giữ MVP. Playtest MVP chỉ hỏi về móc: người chơi có muốn biết Lantern là ai và thứ gì đã đánh Cradle không | GDM đã nhận, không có dòng log riêng. Đã gieo MM1.1, MM1.2 và C1.9 vào chương 1. Log dòng 49 thêm bắt sống loài nhỏ vào chương 1, MVP thử được thêm điểm khác biệt đó |
| 6 | B3 và B5 của bản trước đợt 6 (Lead đã đảo): phản diện kết tội loài người phá môi trường, trong khi người chơi khai thác suốt game và B10 không phạt | Nếu loài người trong game không bị thấy làm gì sai thì lời buộc tội rỗng, và lời hứa "dựng khác đi" không có gì để khác. `10-narrative.md` nguyên lý 4 | Cho thấy lỗi của loài người bằng chứng cứ, không bằng luật phạt | GDM đã xử ở log dòng 47. Đợt 6: Lead đã đảo, gốc tai nạn không còn là lỗi của loài người, MM4.2 đổi thành hiến chương định cư |
| 7 | B4 và B9, kết mở: người chơi theo đuổi Solace phần lớn game rồi biết đó là mồi | Rủi ro người chơi thấy bị lấy mất mục tiêu. GDM đã xử một phần ở log dòng 36 (lộ ở chương 4, chương 5 có mục tiêu mới) | Giữ. Thêm bốn thứ để kết mở không thành kết hụt: gieo nghi ngờ từ chương 1 tới 3 (mục 2.9), sự thật đến từ chính Cradle (Điểm tự quyết 4), chương 5 có thắng lợi cụ thể, và cảnh rời neo đi trước câu hỏi | GDM đã nhận, không có dòng log riêng. Mục 2.8, 2.9 và 7b. Đợt 6: kết nay có đích thật (B9), rủi ro này giảm |
| 8 | Khung mục 1 ghi chương 1 đến 3 là "tìm đường tới Solace" | Trong ba chương đó khung không cho việc nào thật sự là tìm đường, người chơi chỉ sửa trạm và vớt người | Truyện thêm mảnh lõi dẫn đường ở mỗi xác trạm và cảnh đóng chương 2 để mục tiêu "tìm đường" có việc làm | GDM đã xử, log dòng 48: mỗi xác trạm một mảnh lõi dẫn đường, ghép dần (C2.8) |
| 9 | Khung mục 7, chương 2 ghi "bắt sống loài lớn (gây mê, kéo về)" | Theo `combat-driftlife.md` cỡ L chỉ lấy được mẫu sinh thiết, cỡ M bắt sống bằng Phao kéo. Chữ "loài lớn" làm mốc C2.4 không thể xong nếu đọc đúng chữ | Sửa khung thành "bắt sống cỡ M (gây mê, Phao kéo)" | GDM đã xử, log dòng 76: khung đã sửa thành cỡ M |
| 10 | Khung chưa định nghĩa "qua chương". Ba file đang định nghĩa ba kiểu | `kinh-te-tien-trinh.md` luật 12 (bốn cổng), `tram-va-cang.md` luật 11 (xong giai đoạn động cơ thì mở mốc truyện), file này luật 1 (mốc đóng chương). Người chơi xong C1.9 mà chưa lắp ENG-101 thì Vành đai trong mở theo truyện, đóng theo kinh tế | Ghi vào khung một nghĩa: chương đóng và dải mở theo mốc đóng chương, cổng kinh tế là gợi ý tiến độ | GDM đã xử, log dòng 68: K25 |
| 11 | Lời Lead: Y trao tọa độ một hành tinh có sự sống thật, ngay sau khi loài người vừa bị một tọa độ từ Sennar lừa | Người chơi vừa học rằng tọa độ được cho không là bẫy. Nhận tọa độ thứ hai mà không kiểm được thì kết thành ngây thơ, hoặc người chơi chờ một cú lừa nữa | Giữ lời Lead, thêm cách kiểm: tọa độ đặt trên bản đồ sao thật do tổ Ember tự lấy ở Data Core, Odile và Rafa tự kiểm | gd-story đã viết theo phương án thay (mục 2.8). Báo GDM |
| 12 | Lời Lead và log 88: cách mạng diễn ra trên Sennar, người chơi không tới | Cao trào chính trị xảy ra ngoài màn hình. Chương 5 dễ thành chuyện giành ghế của người khác, tổ Ember làm vai phụ, trong khi mục tiêu của người chơi suốt game là nhà cho loài người | Giữ phạm vi của log 88. Viết để việc của tổ Ember là điều kiện của cả hai thắng lợi: giữ chân Daskel ở Rig thì Sennar mới nổi dậy được, lấy bản đồ sao thật thì mới rời được bãi vỡ | gd-story đã viết theo phương án thay (chương 5, mục 7b). Báo GDM |
| 13 | Lời Lead: tổ Ember tình cờ gặp cuộc bắt cóc một thương nhân | Nếu Y là người lạ xuất hiện lần đầu ở cuối chương 3 thì cú lộ danh tính nhẹ, và phải thêm một nhân vật, một chủng tộc cần art | Y là Ilsume, thương nhân người chơi đã bán hàng từ chương 2. Chủng tộc là Sennari đã có. Cuộc bắt cóc xảy ra vì thiết bị nghe lén Maro gắn ở cảng Ember | gd-story tự quyết trong thẩm quyền (log 89). Báo GDM |
| 14 | Phạm vi của đợt 6: thêm một sự kiện bắt cóc, một vật kéo, một loại đơn đặt trước ở giờ giao thương, một nhân vật hai trạng thái | Tất cả là `Sau MVP`, MVP không đổi. Bản đầy đủ nặng thêm cho 4 dev và 1 artist | Đã giữ mọi thứ trên luật sẵn có. Nếu phải cắt: bỏ hộ tống ở C5.1, cho Sevra về The Hearth bằng tàu TA11 trong một cảnh | Báo GDM, chưa cắt |

## Lịch sử thay đổi

| Ngày | Thay đổi | Lý do | Ai |
|---|---|---|---|
| 2026-11-20 | Bản đủ đầu tiên, chuyển từ `story/game-story-v3.md` sang khung B1 tới B11. Phản diện là The Wardens, bỏ tên phản diện cũ và nguồn gốc cũ của đường đi | GD-022, log GDM dòng 2 tới 8 | gd-story |
| 2026-11-20 | Viết lại chương 4, chương 5 và kết theo Solace là thông tin mồi và kết mở. Khớp boss, khe manh mối, quest sửa khoang, loại tàu với file của các vai khác | Khung đổi B4, B9, B11, K10 sau khi Lead chốt kết mở. File các vai khác có sau bản đầu | gd-story |
| 2026-11-20 | Thêm mục 2.9 gieo nghi ngờ về Solace ở chương 1 tới 3, hai vật manh mối MM3.6 và MM3.7. Khớp ID vật kể chuyện STY và luật V4 của gd-items (bản cuối: vật nhiệm vụ chiếm túi, mất thì về vị trí gốc), loài mang thẻ DL-X05 của gd-combat, lý do mở Vành đai trong của gd-world | Tin cập nhật của GDM và tin trả lời của gd-items, gd-combat, gd-world, gd-quan | gd-story |
| 2026-11-20 | Đợt 1b: quest của Kỹ sư mở thêm Súng lưới cho loài nhỏ ở chương 1, chương 2 đổi thành nuôi và bắt sống loài lớn. Ghi kết quả GDM xử 8 phản biện. Gỡ dấu chờ gd-character | Khung sửa lần 2, log GDM dòng 43 đến 49 | gd-story |
| 2026-11-20 | Gỡ dấu chờ gd-ux (bước T02, T29, T30, màn UI-19 và UI-53). Giữ tên cũ của vụ phục kích, đưa phương án đổi tên xuống mục 10. Ghi rõ Odile tin Solace tới chương 4. Bốn hồ sơ người chơi không có nghề riêng | Tin của gd-ux, lỗi validator của gd-tech, mục lệch của gd-character | gd-story |
| 2026-11-20 | Thêm cột Kênh cho 36 câu mẫu, cắt VO_MAR_01 và VO_BRA_03 xuống dưới 60 ký tự. Script soát kiểm giới hạn theo kênh | gd-ux chốt story.box 80, story.radio 60, story.bubble 60 | gd-story |
| 2026-11-20 | Đính chính sàn ngày chương 5 từ 4 xuống 3 (tổng 25). Ghi kết quả sim của gd-economy và bảng bốn chỗ hạ sàn được, chưa áp | Tin của gd-economy, tự soát lại bảng sàn | gd-story |
| 2026-11-20 | Luật 21 khớp luật 25 và 26 của `ux-ui.md`: cảnh sau giờ giao thương phát ở màn Kết thúc giờ giao thương hoặc Cuối ngày, khi giờ giao thương đang chạy không cảnh nào chặn màn của ai. Thêm năm thẻ tên chương | Tin của gd-ux | gd-story |
| 2026-11-20 | Vòng QA 1 (GD-031, 16 nặng, 14 nhẹ). Luật 19 tới 26 mới: mốc xong không phụ thuộc cảnh, nộp không tiêu vật, mốc trong giờ giao thương, người vớt tỉnh ngày kế tiếp, nghĩa của ngày kế tiếp, chuyện riêng thương nhân, sau kết. Điều kiện mốc thành danh sách. C1.7 cần cả KH06 và KH07. C2.4 đổi sang cỡ M. C2.8 không đòi nộp lại STY-102. Bảng lối vào map nhánh, cột ID vật và cột "Hiện từ mốc" cho mọi vật truyện, khe M và V theo `map.md`. Gộp hai vật ở chương 3. Mã V cho vật nhiệm vụ. Bảng sàn ngày từng chương. Bảng vật nhiệm vụ và chỗ tiêu. Dòng Sổ tay chương 1, dòng buồng tắt, đề cương chuyện riêng thương nhân. Theo khung lần 4: K22, K23, K24, C10 | `qa/GD-031-cot-truyen.md` | gd-story |
| 2026-11-20 | Đợt 4, theo khung sửa lần 5 và log GDM dòng 61 đến 80. Đổi tên vụ phục kích thành The Scattering. K25: bốn mốc đóng chương thêm điều kiện giai đoạn động cơ đã lắp. C5.1 đổi điều kiện thành tàu của Dromm cập bến. Các câu hỏi mở đã có quyết định thì ghi số dòng log. Tra web tên The Scattering: không thấy trùng | Brief đợt 4 của GDM (áp các điểm chốt sau QA vòng 2) | gd-story |
| 2026-11-20 | Vòng QA 2. Chuyện riêng thương nhân thêm điều kiện mốc cho từng đoạn (luật 25, bảng đề cương). Sàn ngày tính cả bước chế qua đêm: 7, 5, 8, 3, 3, tổng 26, giờ tính theo độ dài ngày của khung. Thêm ba cảnh đánh thức vào số cảnh (45 cảnh, 180 câu). C2.4 đổi tên thành Mẫu sống cho Amara, đi đường Phao kéo. Bỏ các ghi chú đã cũ về khe và ID, viết lại bảng lệch | `qa/GD-031-cot-truyen.md` vòng 2 | gd-story |
| 2026-11-20 | Soát, lần chạy cuối sau vòng QA 2. Script riêng của file, 0 lỗi: 36 câu mẫu của 12 nhân vật, câu dài nhất 59 ký tự, 24 dòng Sổ tay dài nhất 58 ký tự, 0 chữ số, 0 từ chỉ số người chơi. Mốc 9, 8, 8, 7, 8. Vật truyện 4, 6, 6, 5, 2, mỗi vật có khe, ID và mốc hiện. Sàn ngày 7, 5, 8, 3, 3. 0 dấu chấm phẩy, 0 gạch dài, 0 emoji, 0 tên phản diện cũ, 0 dấu chờ. Script của phòng `soat.mjs`: 0 lỗi, 2 cảnh báo (thiếu file từ vựng của game, một dòng có tên file không dấu). `validate-gdd.mjs`: gd-story 0 lỗi riêng, 2 lỗi chung với gd-world (khe M1 và M2 của N7 chưa có tên trên map) | Tiêu chí nghiệm thu 1, 3, 4 | gd-story |
| 2026-11-20 | Đợt 4, đổi tên khu trong map nhánh sang tiếng Anh theo bảng A01 đến A05 của `map.md`: bốn khu trong Cradle, Lantern Outer Ring, Lantern Core, Waypost Concourse, Holding Pens, Command Deck, Data Core, Rig Landing. Vật MM3.2 ghi theo bảng hòm của `map.md`: khe M2 ở Waypost Concourse. Hai dòng lệch với gd-world chuyển sang hết lệch. Soát lại: script riêng và `soat.mjs` không lỗi, `validate-gdd.mjs` không còn lỗi nào ở cả mười file | Tin của gd-world, log GDM dòng 74 | gd-story |
| 2026-11-20 | Đợt 6, sửa phản diện theo lời Lead. Phản diện là Daskel, tên độc tài của Sennar, The Wardens là chế độ và quân của hắn. Thêm Steward Ilvane, Sevra Ilvane (giả làm Ilsume), The Meeting War, The Kindling, The Hearth. Viết lại bối cảnh, ba chương cuối, kết, mục gieo, hồ sơ nhân vật, voice sheet (thêm ba câu của Sevra, đổi năm câu), khối GAME STORY. Mốc đóng chương 3 là cứu Sevra, mốc đóng chương 4 là đơn tin mật đầu tiên. Bỏ gốc lỗi của loài người và móc cũ cho phần sau. Sàn ngày giữ | Lời Lead cuối `story/lead-y-tuong-2026-11-20.md`, khung sửa lần 6, log GDM dòng 84 đến 92, brief `briefs/dot6-sua-phan-dien.md` | gd-story |
| 2026-11-20 | Đợt 6, khớp với các vai sau khi họ chốt. Tàu của The Kindling là TA11. Kén thoát hiểm BNG-102, kiện tin mật CGO-421, gói tin mật STY-701, công thức RCP-422. Mốc đóng chương 3 xong khi kén về tới Ember bằng cửa khí hoặc Recall Beacon. Mốc C5.1 xong khi kén chạm cửa The Hearth. Trận BS-5 kết bằng bắt giữ Daskel. Đổi tên hai mốc (Dấu săn trộm, First Warden), bỏ tên The Kept Herds. Bảng lệch đợt 6 chuyển sang xong | Tin của gd-world, gd-combat, gd-items, gd-quan, GDM, phiếu `qa/GD-033-*.md` | gd-story |
| 2026-11-20 | Mục 5, tiêu chí 14 và bảng lệch số 2: bỏ bộ số sim cũ (6, 5, 8, 3, 4), ghi sim dùng sàn hiện hành 7, 5, 8, 3, 3. Không đổi luật hay số | Sửa cho khớp số đã chốt, theo báo cáo GD-035 | gd-story |
| 2026-11-20 | Khớp truyện minh họa (Google Doc The Novent): C3.8 Sevra nói ra âm mưu Solace, C4.6 bằng chứng là hộp ghi hành trình, C4.7 thêm phong tỏa quanh Ember | Lead đợt 8 | GDM |
| 2026-11-23 | Sửa câu văn theo đánh giá humanizer (production/reports/2026-11-23-humanizer-gdd.md): bỏ lịch sử trong thân luật, phủ định thừa, câu chốt lặp. Không đổi luật, số, ID. Bảng mốc ở đầu file bỏ cột Trước, giá trị cũ: C3.7 là cú lật Driftlife bản trước, C3.8 là tàu TA08 cập bến lần thứ ba, C4.6 là nguồn ẩn danh (Nhem ở N4), C4.7 là ngày kế tiếp sau C4.5, C5.1 là tàu TA06 cập bến, C5.2 là ngày kế tiếp sau C5.1, C5.6 là nộp bản đồ sao thật. Mục 5 bỏ câu kể lịch sử sàn ngày (bản đầu 6, 5, 8, 3, 4, chương 1 sửa thành 7 ở vòng QA 2) | Báo cáo humanizer GDD của GDM | GDM |
| 2026-11-23 | Theo rà chéo Sheet nhóm C (qa/2026-11-23-ra-cheo-C.md): Station Cinder ghi rõ buồng Ingrid và Linh còn chạy, hai buồng khác đã tắt. Không đổi luật | Báo cáo humanizer GDD của GDM | GDM |
| 2026-11-23 | Mục 9: dòng Kết ghi điều nguồn C4 nói (Epilogue: Friends sau chương 7, chỉ qua tóm tắt tìm kiếm), dòng Số chương ghi 7 chương tính cả prologue (C3). Không đổi luật | Lead giao sửa 8 chỗ lệch mục 9 (production/reports/2026-11-23-teardown-dot12.md) | gd-research |
| 2026-11-25 | Thêm bảng tính cách PC-1 đến PC-4 (nghề cũ, quốc gia, 3 nét, thói quen, gợi ý dáng và mặt, vật để lại khi buồng hỏng) ở mục Tổ Ember. Không đổi luật lời thoại, tên, slot, màu | GD-078, Lead yêu cầu bổ sung tính cách PC | gd-story |
| 2026-11-25 | Lượt 2 GD-078: đổi đội hình PC theo Lead. PC-1 nam Việt Nam Lê Quốc Bảo (Lead sửa cùng ngày: nam chính, PC-4 thành nữ) thay hồ sơ PC-1 cũ, PC-4 nữ Niamh Doyle (Ireland) thay hồ sơ PC-4 cũ, Jonas và Mei giữ tên. Bảng thêm giới tính, tuổi, da và tóc, nét mặt, nhãn. Bỏ đồ vật và thói quen gợi vai (hộp y tế, đếm khẩu phần, hướng dẫn, đếm khóa). Đổi tên ở truyện kể, dòng buồng tắt, khối GAME STORY | Lead chốt 2026-11-25: bốn người ngang luật, nhân vật chính là người Việt | gd-story |
| 2026-11-25 | Lead đặt tên PC-1 là Nguyễn Việt (gọi ngắn Việt), thay Lê Quốc Bảo | GD-078 | GDM |

### Lệch đã xong (chuyển từ mục Lệch với vai khác, 2026-11-23)

| # | Với | Lệch | Đề xuất | Tình trạng |
|---|---|---|---|---|
| 1 | gd-quan | Đợt 6: Maro còn hai lần cập bến. Tàu của The Kindling là mã mới TA11 (TA09 giữ vai tàu đơn gấp), vào lịch từ ngày kế tiếp sau C3.8. Tàu TA04 và TA08 không ghé sau C3.8 | Hai file đã khớp, luật 35 của `tram-va-cang.md` ghi cùng danh sách mốc trong giờ giao thương | Xong |
| 4 | Khung | Khung mục 7 chương 2 còn viết "bắt sống loài lớn". Cỡ L không bắt sống được | Viết "cỡ M" như mốc C2.4 | Xong, khung đã sửa (log GDM dòng 76) |
| 5 | Khung | K24 ghi bản lưu "ngay trước khi rời neo". Luật 26 của file này đặt bản lưu sau khi C5.7 và C5.8 đã xong, không rời neo lần nữa | Sửa K24 thành "ở ngày cuối, sau cảnh kết", hoặc GDM chọn cách đọc khác thì file này sửa theo | Xong, K24 đã sửa (log GDM dòng 77) |
| 6 | gd-character | `ho-so-nhan-vat.md` luật 8 không cho viết Odile "tới Solace". File này giữ, có chủ ý | Giữ: đó là niềm tin của Odile tới mốc C4.7. Mục 10 câu 9 | Xong, giữ (log GDM dòng 73) |
| 10 | gd-world | Đợt 6: nơi cứu Sevra là Waypost Outer Ring, The Hearth là khu thứ ba của N4. Mốc C3.8 xong khi kén về tới Ember bằng cửa khí hoặc Recall Beacon. Mốc C5.1 xong khi kén chạm cửa The Hearth | Hai file đã khớp | Xong |
| 11 | gd-combat | Đợt 6: toán bắt cóc, kén là vật kéo không bị nhắm, Maro không đánh, trận BS-5 kết bằng bắt giữ Daskel | Hai file đã khớp | Xong |
| 12 | gd-items | Đợt 6: BNG-102, CGO-421, STY-701, RCP-422. STY-502, STY-412, STY-301 đã đổi tên và mô tả | Hai file đã khớp | Xong |

### Điểm tự quyết hết hiệu lực từ đợt 6 (chuyển từ mục Điểm tự quyết, 2026-11-23)

| # | Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|---|
| 3 | Gốc của tai nạn nằm ở đâu | Hết hiệu lực từ đợt 6. Lead sửa: gốc là hận thù của Daskel, cái nhìn loài người tham lam là phiến diện. Xem dòng 41 | Lead sửa phản diện 2026-11-20 | Bản trước: lỗi của United Accord | Rẻ |
| 11 | Maro lộ mặt thế nào | Hết hiệu lực từ đợt 6. Xem dòng 44 | Lead sửa phản diện 2026-11-20 | Bản trước: cập bến ba lần rồi tự lộ mặt | Rẻ |
| 31 | Điều kiện của C5.1 | Hết hiệu lực từ đợt 6: mốc này nay là hộ tống Sevra tới The Hearth. Xem dòng 38 | Lead sửa phản diện 2026-11-20 | Bản trước: tàu của Dromm cập bến | Rẻ |
