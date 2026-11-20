# GDD hệ thống: Cốt truyện

Project: game-moi (mã tạm EMBER) | Chủ sở hữu: gd-story | Trạng thái: bản đủ, chờ nghiệm thu vòng cuối (2026-11-20) | Nguồn quyết định: `gdd/00-khung-game.md` mục 3 và 7, `log-gdm-tu-quyet.md` dòng 2 đến 8 và 36 đến 38, `DECISIONS.md` 2026-11-20 "Solace là thông tin mồi, kết mở cho hậu bản"

- Mọi tên riêng tiếng Anh là [TẠM]. Từ dùng theo từ điển khung mục 10.
- Nhãn `MVP` và `Sau MVP` theo khung mục 12: chương 1 là MVP, chương 2 tới 5 là Sau MVP.
- Đã khớp với khung sửa lần 4 (K22, K23, K24, C10) và đã sửa theo phiếu `qa/GD-031-cot-truyen.md` vòng 1. Chỗ còn lệch với file vai khác ghi ở mục "Lệch với vai khác".

## Tóm tắt

Hệ thống cốt truyện giữ bối cảnh, năm chương, nhân vật truyện, tên riêng và luật về cách truyện chen vào vòng ngày. Nó cho người chơi lý do để đi xa hơn (ai đã đánh Cradle, đường nào tới Solace, rồi Solace có thật không) và cho các hệ thống khác một trật tự mở nội dung. Tầng: tính năng và trình bày. Ưu tiên: chương đầu cho MVP, các chương sau cho bản đầy đủ. Phụ thuộc chính: map (nơi đặt manh mối và người vớt), trạm và cảng (quest mở tính năng, thương nhân), combat (The Wardens, boss), UX (hộp thoại, Sổ tay).

## Hiện hành

- Phản diện là The Wardens, một chủng tộc trong The Veyl. Chúng tự xưng kẻ canh giữ, ghét loài người vì phá môi trường, nhưng chính chúng thu hoạch bãi vỡ và Driftlife ở quy mô công nghiệp.
- Solace là thông tin mồi (Lead chốt). Lodestar Survey, hồ sơ tả một hành tinh sống được tên Solace và đường tới đó, do The Wardens dựng và phát qua The Lattice. Thương nhân trung lập chuyển nó đi mà không biết. Hồ sơ dẫn Cradle vào điểm phục kích: The Scattering.
- Chương 1 tới 3 người chơi sống sót và tìm đường tới Solace. Chương 4 lộ ra Solace là mồi. Chương 5 là rời bãi vỡ. Kết mở: Ember rời neo mà chưa có đích chắc chắn.
- Móc cho phần sau: ở Warden Rig có dữ liệu cho thấy mồi được dựng từ một bản khảo sát có thật mà The Wardens giấu. Game này không trả lời.
- Truyện có 5 chương, 40 mốc, đi một đường, không rẽ nhánh, một kết.
- Vật manh mối chỉ đặt ở khe M của map nhánh, vật nhiệm vụ ở khe V. Vật nhiệm vụ không bao giờ mất vĩnh viễn, nộp không tiêu vật. Mọi cảnh bỏ qua được. Không có trạng thái thua của truyện.
- Mốc xong ngay khi điều kiện đúng, không chờ cảnh. Chương đóng và dải mở theo mốc đóng chương. Chuỗi mốc cần ít nhất 26 ngày trong game, riêng chương 1 là 7 ngày (mục 5).
- Cảnh truyện chỉ diễn ra ở điểm nghỉ của vòng ngày. Ngoài không gian chỉ có lời radio một dòng, không chặn điều khiển.
- Năm người vớt: Ingrid Halvorsen (Kỹ sư), Linh Tran (Thông dịch viên), Rafael Ortega (Hoa tiêu), Amara Okafor (Nhà sinh học), Yusuf Demir (Trưởng cảng). Quest mở tính năng của họ theo luật của `tram-va-cang.md`: sửa khoang của người đó.
- Mọi luật đúng với 1 đến 4 người. Tiến trình truyện là của chung thế giới.
- Vụ phục kích nay tên The Scattering (log GDM dòng 75). Tên Solace giữ. Mốc đóng chương cần giai đoạn động cơ của chương đã lắp (K25).

## Danh mục sơ bộ (để vai khác đọc, bản đủ ở các mục dưới)

### Tên riêng thế giới

| Tên [TẠM] | Là gì |
|---|---|
| United Accord | Liên minh các quốc gia đóng đoàn di cư |
| Cradle | Tàu mẹ |
| Seed Station | Loại trạm con, mỗi trạm 4 buồng ngủ đông |
| Station Ember | Trạm của người chơi |
| Solace | Hành tinh đích trong hồ sơ. Là thông tin mồi. Có Solace thật hay không để mở |
| The Scattering | Vụ phục kích làm nổ Cradle |
| The Wake | Bãi vỡ của Cradle, map tổng |
| The Veyl | Tên chung các chủng tộc ngoài hành tinh |
| The Wardens | Chủng tộc phản diện trong The Veyl |
| Driftlife | Sinh vật bản địa của vùng chân không |
| The Kept Herds | Cách The Wardens gọi Driftlife: "đàn được bảo hộ" |
| The Lattice | Mạng tin của thương nhân The Veyl trung lập |
| Lodestar Survey | Hồ sơ mồi: tả hành tinh Solace và đường tới đó |
| Tally | Đồng tiền duy nhất |

### Trạm con có tên

| Tên [TẠM] | Tình trạng | Mã map nhánh (gd-world) | Chương | Truyện đặt gì ở đó |
|---|---|---|---|---|
| Station Ember | Nhà của người chơi | Không | 1 | |
| Station Cinder | Xác | N1 | 1 | Buồng của Ingrid và Linh, hai buồng tắt |
| Station Wick | Xác | N2 | 2 | Buồng của Rafa, vết phá từ ngoài vào |
| Station Lantern | Còn người sống | N3 | 2 | Odile, Bram, Amara đang thức ở đây |
| Station Flint | Xác, bị The Wardens biến thành trạm thu | N6 | 3 | Không có người để vớt, manh mối cú lật Driftlife |
| The Raft | Cụm trạm con ghép của The Remainers | N5 | 3 | Elias, Wren |

### Chủng tộc The Veyl

| Chủng tộc [TẠM] | Một dòng | Thương nhân có tên | Loại tàu (gd-quan) |
|---|---|---|---|
| Oru | Dân gom phế liệu, tàu nhỏ, đi lẻ, tò mò | Tikko | TA01. TA02 là dân Oru vãng lai, không có tên riêng |
| Sennari | Thương hội lớn, trọng nghi thức | Ilsume | TA04. TA09 là người đưa hàng gấp của một thương hội Sennari, không có tên riêng |
| Aelith | Nhà sưu tầm sinh vật sống | Vaeth | TA05 |
| Brakk | Dân chở hàng nặng, ít lời, không nói thẳng giá | Dromm | TA06 |
| Kesh | Dân buôn tin, giữ The Lattice | Nhem | TA10 |
| The Wardens | Tự xưng kẻ canh giữ, phản diện | Serith (thủ lĩnh), Maro (kẻ cải trang) | TA08 |

- Tàu của con người: TA03 xuồng tiếp tế của Lantern (Bram Kowalski), TA07 tàu của The Remainers (người của Elias Vance).

### Nhân vật

| Tên [TẠM] | Mã (gd-character) | Vai | Xuất hiện |
|---|---|---|---|
| Noor Haddad, Jonas Weber, Mei Tanaka, Tariq Bello | PC-1 đến PC-4 | Bốn hồ sơ mặc định của tổ Ember: kíp vận hành trạm, không có nghề riêng (nhân vật người chơi, đổi tên được) | Chương 1 |
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
| Serith | WD-P1 | Thủ lĩnh The Wardens ở bãi vỡ, boss BS-5 | Chương 3 tới 5 |
| Maro | WD-P2 | The Wardens cải trang làm thương nhân | Chương 3 |

### Năm chương (tóm tắt, mốc và manh mối đủ ở mục 2.5)

| Chương | Tên tạm | Map nhánh có truyện | Người vớt | Mốc đóng chương |
|---|---|---|---|---|
| 1 | Tỉnh dậy | N1 Station Cinder | Ingrid, Linh | Bắt được sóng của Lantern, mở dải Giữa |
| 2 | Không cô độc | N3 Station Lantern, N2 Station Wick | Amara, Rafa | Thấy vết phá từ ngoài vào, mở dải Xa |
| 3 | Kẻ canh giữ | N4 Veyl Waypost, N5 The Raft, N6 Station Flint | Yusuf | Maro lộ mặt sau cú lật Driftlife |
| 4 | Tâm vụ nổ | N7 Bên trong Cradle | Không | Hộp ghi hành trình: Solace là mồi. Mục tiêu đổi thành rời bãi vỡ |
| 5 | Rời neo | N8 Warden Rig | Không | Lấy bản đồ sao thật, rời neo. Kết mở |

## 1. Mục đích với người chơi

- Người chơi cảm thấy: mình không chỉ gom đồ, mình đang lần ra vì sao mình ở đây. Mỗi map nhánh mới trả lời một câu và mở một câu.
- Người chơi quyết định: đi tìm manh mối kế tiếp ngay, hay làm thêm vài ngày cho trạm khỏe rồi mới đi. Truyện không ép nhịp.
- Phục vụ pillar P4 (vũ trụ kể chuyện qua thứ bạn vớt được) và P3 (một mình vẫn trọn, có bạn thì vui hơn). Truyện cho P2 có mặt người: mỗi khoang sửa xong có một người đứng trong đó.
- 30 giây đầu: màn hình tối, tiếng báo động yếu, một buồng ngủ đông mở. Người chơi bước ra, thấy những buồng bên cạnh (đã tắt, hoặc đang mở nếu chơi nhiều người), thấy qua cửa sổ bãi vỡ đang xoay chậm vì trạm trôi. Một dòng radio tự động của trạm báo việc đầu tiên: ra cửa khí.

## 2. Luật kể chuyện

### 2.1 Luật

Các luật cũ giữ nguyên số vì file khác đang dẫn số. Luật thêm ở vòng QA đầu nối tiếp ở cuối danh sách, từ luật 19.

1. `MVP` Truyện chia 5 chương. Mỗi chương là một chuỗi mốc có thứ tự. Mốc sau chỉ mở khi mốc trước đã xong. Chương đóng khi mốc đóng chương đã xong, và chỉ mốc đóng chương mới mở dải và map nhánh của chương sau. Theo K25, mỗi mốc đóng chương chỉ xong khi giai đoạn động cơ của chương đó đã lắp. Kinh tế và trạm không có cổng chương riêng.
2. `MVP` Mỗi mốc có một danh sách điều kiện và đúng một nơi diễn ra. Mọi điều kiện trong danh sách phải cùng đúng thì mốc xong, không có điều kiện dạng "hoặc". Mỗi mốc xong đúng một lần trong một thế giới.
3. `MVP` Vật manh mối chỉ đặt ở map nhánh, tại khe M cố định theo bảng khe ở mục 2.5 (K7). Không vật manh mối nào đặt ở map tổng. Vật manh mối hiện ra từ lúc mốc ghi ở cột "Hiện từ mốc" mở, và nằm yên tại chỗ cho tới khi có người nhặt.
4. `MVP` Nhặt vật manh mối là ghi ngay vào Sổ tay của cả nhóm. Vật manh mối không chiếm sức chứa túi đồ và không mất khi người nhặt bị kéo về.
5. `MVP` Vật nhiệm vụ là thứ phải đưa về trạm, đặt ở khe V của map nhánh. Vật nhiệm vụ nhỏ (mảnh lõi dẫn đường của Cinder và Wick, mẫu Driftlife mang thẻ, hộp ghi hành trình, bản đồ sao thật) chiếm túi theo luật V4 của `vat-pham.md`. Người mang bị kéo về thì chọn nó làm món giữ lại theo K2 được. Không chọn thì nó mất cùng túi và ở chuyến sau nằm lại đúng khe V của nó. Buồng ngủ đông có người là vật kéo: rơi dọc đường, hoặc người kéo bị kéo về, thì ở chuyến sau buồng nằm lại vị trí gốc. Không vật nhiệm vụ nào mất vĩnh viễn. Người trong buồng ngủ đông không chết vì người chơi thất bại.
6. `MVP` Cảnh truyện chỉ diễn ra ở điểm nghỉ: pha Chuẩn bị, lúc vừa về tới trạm, pha Cuối ngày, và trong khu có khí của map nhánh. Không cảnh nào diễn ra trong map tổng. Không cảnh nào dừng đồng hồ ca cảng.
7. `MVP` Hộp thoại chỉ có trong trạm và trong khu có khí của map nhánh (Lantern, Veyl Waypost, The Raft), ngoài giờ ca cảng. Trong ca cảng và trong khu chân không của map nhánh, truyện chỉ nói bằng lời bong bóng trên đầu nhân vật hoặc radio, không chặn điều khiển.
8. `MVP` Cảnh ngắn dài tối đa 3 câu. Cảnh dài (cảnh của mốc dài và cảnh mở chương 4, 5) dài tối đa 8 câu. Mọi cảnh bỏ qua được bằng một lần bấm ở bất kỳ câu nào. Bỏ qua thì Sổ tay vẫn ghi tóm tắt một câu.
9. `MVP` Ngoài không gian không có hộp thoại. Lời nói ngoài không gian đi qua radio: một dòng chữ ở mép màn hình, tự tắt, không dừng điều khiển.
10. `MVP` Sổ tay ở trong trạm ghi mọi mốc đã xong, mọi vật manh mối đã nhặt, và đúng một dòng mục tiêu hiện tại kèm tên nơi phải tới. Khi mốc đang mở cần một thứ chưa có (dụng cụ, khoang, tàu), dòng mục tiêu ghi thứ đó.
11. `MVP` Quest mở tính năng của người vớt theo luật 15 của `tram-va-cang.md`: sửa khoang của người đó. Cốt truyện chỉ thêm cảnh và lời cho quest, không thêm điều kiện. Quest không có giới hạn thời gian và không thất bại. Riêng Linh Tran có hai khoang: khoang liên lạc KH06 và cảng KH07.
12. `MVP` Truyện không khóa vòng ngày. Khi một mốc chưa xong, người chơi vẫn ra ngoài, làm ca cảng, nâng cấp như mọi ngày. Mốc chỉ khóa nội dung mới: dải, lối vào map nhánh, tính năng, loại tàu.
13. `MVP` Lối vào mỗi map nhánh mở theo một mốc ghi ở bảng "Lối vào map nhánh" (mục 2.5). Dải chưa mở bị chặn cứng theo `map.md`, không vào sớm được.
14. `MVP` Lời theo trạng thái không phải cảnh và không vào hàng chờ cảnh. Nhân vật trong trạm nói một dòng khi người chơi tới gần hoặc bấm nói chuyện: chào đầu ngày, sau chuyến có hàng, sau khi người chơi bị kéo về, sau ca cảng, gợi ý mục tiêu. Mỗi trạng thái có 4 biến thể, không nói lại biến thể vừa nói.
15. `MVP` Tikko có lời theo trạng thái ở cảng (cập bến, chờ, nhận đủ hàng, rời bến thiếu hàng), nói bằng bong bóng.
16. `MVP` Truyện đi một đường. Không có lựa chọn hội thoại, không có nhánh, không có nhiều kết.
17. `MVP` Lời truyện không chứa số và không dạy thao tác. Hướng dẫn thao tác do gd-ux viết.
18. `MVP` Mỗi câu thoại là một chuỗi có mã riêng. Mã không hiện ra cho người chơi.
19. `MVP` Mốc xong ngay khi điều kiện đúng, không phụ thuộc cảnh. Cảnh chỉ là phần trình bày của mốc. Mỗi người chơi có hàng chờ cảnh riêng và xem mỗi cảnh nhiều nhất một lần.
20. `MVP` Nộp nghĩa là mang vật nhiệm vụ về tới trạm và đặt vào khoang nhận. Nộp không tiêu vật: vật vào kho của trạm và ở lại đó. Vật chỉ bị tiêu khi một danh sách sửa khoang hoặc một công thức của `vat-pham.md` dùng nó làm nguyên liệu, và các chỗ dùng đó được xếp sau mốc cần vật (bảng "Vật nhiệm vụ và chỗ tiêu" ở mục 6).
21. `MVP` Mốc có điều kiện đúng ở giữa ca cảng (C1.8, C2.3, C3.3, C3.4, C3.8, C5.1): trong ca chỉ phát lời bong bóng. Cảnh của mốc đó phát sau ca, ở màn Kết ca hoặc ở pha Cuối ngày của cùng ngày (UI-43, UI-44 của `ux-ui.md`). Khi ca cảng đang chạy, không cảnh nào chặn màn của bất kỳ ai trong nhóm, kể cả người không làm ca: cảnh của họ chờ tới khi ca xong.
22. `MVP` Người vớt nằm trong buồng tỉnh vào đầu ngày kế tiếp sau khi buồng về tới trạm (luật 14 của `tram-va-cang.md`), rồi mới giao quest. Người vớt đang thức (Amara, Yusuf) giao quest ngay khi tới trạm.
23. `MVP` "Ngày kế tiếp sau mốc X" nghĩa là sau ít nhất một lần ngủ kể từ lúc X xong (K23).
24. `Sau MVP` Bốn thương nhân có tên còn lại cũng có lời theo trạng thái ở cảng như luật 15.
25. `Sau MVP` Mỗi thương nhân có tên có một chuỗi chuyện riêng 3 đoạn. Đoạn thứ k mở khi đủ cả hai điều kiện: số lần giao đủ hàng cho thương nhân đó đạt ngưỡng ở mục 3, và mốc ghi ở cột "Mở sau mốc" của bảng đề cương (mục 2.6) đã xong. Chưa đủ thì thương nhân chỉ nói lời theo trạng thái. Mỗi đoạn là tối đa 3 lời bong bóng lúc tàu cập bến, không phải cảnh, không vào hàng chờ cảnh.
26. `Sau MVP` Sau cảnh kết game về menu chính (K24). Bản lưu nằm ở ngày cuối: động cơ chính giữ trạng thái đã xong giai đoạn 5, C5.7 và C5.8 đã xong và không phát lại, Ember không rời neo lần nữa. Người chơi vào chơi tiếp được, không có nội dung mới. Hai cảnh cuối xem lại được từ Sổ tay.

Xong truyện khi: mốc C5.8 xong. Truyện không có trạng thái thua.
Cam kết với người chơi: không bao giờ bỏ lỡ một mốc, không bao giờ mất một vật manh mối hay vật nhiệm vụ, luôn bỏ qua được cảnh, luôn biết việc kế tiếp.

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
1. Hàng chờ của người đó xếp theo thứ tự: cảnh của mốc (mốc xong trước phát trước), rồi cảnh đánh thức của người vớt.
2. Phát đúng một cảnh đứng đầu hàng. Cảnh còn lại chờ điểm nghỉ sau của người đó.

### 2.4 Bối cảnh (bản đủ của khung B1 tới B11)

| Thời điểm | Việc xảy ra | Nguồn |
|---|---|---|
| Trước khi rời Trái Đất | Loài người vắt kiệt Trái Đất, Hệ Mặt Trời sụp đổ. Loài người đã giao thương với The Veyl từ lâu, có phái bộ thương mại và dùng chung Tally | B1, B2 |
| Một hồ sơ xuất hiện | Trên The Lattice có Lodestar Survey: hồ sơ khảo sát một hành tinh sống được, giàu khoáng, đặt tên Solace, kèm đường tới đó. Phái bộ của loài người nhận về và dịch | B4 |
| Lập đoàn di cư | Các quốc gia lập United Accord, đóng tàu mẹ Cradle. Người lên tàu được chọn lọc, ngủ đông. Đích là Solace | B1 |
| Điều United Accord biết mà vẫn đi | Hồ sơ không kiểm chứng được từ Trái Đất. Vùng đường đi qua được ghi là khu bảo hộ của The Wardens. United Accord bỏ qua cả hai, vì hồ sơ hứa đúng thứ họ muốn, và kế hoạch của họ ở Solace vốn là mở mỏ như đã làm ở Trái Đất | Tự quyết 3 của gd-story |
| Ai dựng hồ sơ | The Wardens. Chúng coi loài người là loài ăn hết thế giới của mình rồi đi tìm thế giới khác. Chúng đưa hồ sơ lên The Lattice qua một nguồn ẩn danh. Thương nhân Kesh chuyển tiếp như mọi bản tin khác | B3, B4 |
| The Scattering | Đường trong hồ sơ dẫn Cradle vào điểm phục kích trong Glass Nebula. The Wardens đánh từ ngoài vào. Cradle nổ, phi hành đoàn đang thức chết. Cradle kịp phóng các Seed Station, phần lớn vỡ theo tàu mẹ | B3, B7 |
| Sau đó | The Wardens tuyên bố bãi vỡ là khu bảo hộ và bắt đầu "làm sạch": thu hoạch xác tàu và Driftlife bằng Warden Rig. Chúng lên Cradle, cài lại hệ an ninh và xóa dữ liệu dẫn đường. Thương nhân The Veyl trung lập vẫn lui tới rìa bãi vỡ gom hàng, không ai dám cãi kẻ canh giữ | B5 |
| Các trạm con | Trạm nào còn chạy thì tự đánh thức người theo chu kỳ. Lantern thức sớm và để đèn sáng. Một số trạm ghép lại thành The Raft và bỏ nhiệm vụ. Ember hỏng nặng nên chu kỳ đánh thức chạy muộn hơn nhiều năm | B7 |
| Lúc game bắt đầu | Ember đang trôi, người chơi tỉnh dậy. Chơi N người thì N người tỉnh, buồng còn lại hỏng do hậu vụ nổ, là không may | B7 |
| Điều game này không trả lời | Mồi Solace được dựng từ một bản khảo sát có thật mà The Wardens giấu. Bản đó tả cái gì, ở đâu, có phải một Solace thật không: để cho phần sau | B11 |

- The Wardens đạo đức giả ở chỗ nào (B5): chúng gọi Driftlife là The Kept Herds và cấm mọi loài khác đụng tới, nhưng gắn thẻ, cắt mô và lùa đàn theo lịch. Chúng kết tội loài người khai thác, rồi tự tay tháo Cradle lấy vật liệu. Lời của chúng luôn dùng từ của người làm vườn: giữ, tỉa, dọn, làm sạch.
- Driftlife (B6): sinh vật bản địa của vùng chân không mà bãi vỡ trôi vào. Chúng kéo tới bãi vỡ vì mảnh vỡ là chỗ bám và chỗ kiếm ăn mới. Người chơi săn và bắt chúng từ chương 1 mà không biết gì về The Wardens. Cú lật nằm ở chương 3.
- Vì sao thương nhân The Veyl không chở giúp và không báo tin hộ: The Wardens đã tuyên bố bãi vỡ là khu bảo hộ, ai chở tàn dư của loài người ra khỏi đó là phạm vào lời tuyên bố. Thương nhân bán hàng được vì buôn bán ở rìa không bị cấm.
- Vì sao không ai chỉ được đường tới Solace: mọi thứ thương nhân biết về Solace đều đến từ cùng một hồ sơ trên The Lattice. Người chơi tin phải vào Cradle mới có đường đi thật, và đó là lý do của chương 4.
- Chủ đề (B10): không luật nào phạt khai thác. Chủ đề nói qua ba chỗ: lời Amara Okafor, cú lật Driftlife, và việc nuôi thay vì săn.

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
| N7 Bên trong Cradle | C3.8 xong | `Sau MVP` |
| N8 Warden Rig | C4.7 xong, chỉ vào bằng Skiff | `Sau MVP` |

#### Chương 1 - Tỉnh dậy `MVP`

Mục tiêu người chơi: hãm trôi và neo Ember, vớt hai người đầu tiên, sửa cảng, bán chuyến hàng đầu tiên, nghe được tiếng người khác.

- Cảnh mở: cảnh của C1.1, theo số người (mục 2.7). Trạm tối, xoay chậm, một dòng radio tự động của trạm.

| Mốc | Tên | Điều kiện | Nơi | Mở gì |
|---|---|---|---|---|
| C1.1 | Tỉnh dậy | Bắt đầu thế giới | Ember, buồng ngủ đông KH01 | Cửa khí, dải Gần |
| C1.2 | Hãm trôi và neo | Khoang neo KH04 Hoạt động | Ember | Trạm ngừng xoay. Lối vào N1 |
| C1.3 | Một trạm khác | Tới lối vào N1 | N1, khu C1 | Vật truyện của N1 hiện ra |
| C1.4 | Người đầu tiên | Buồng của Ingrid qua cửa khí của Ember | Ember | Ingrid vào Hồi sức, tỉnh đầu ngày kế tiếp và giao quest sửa xưởng KH05 |
| C1.5 | Xưởng sáng đèn | Xưởng KH05 Hoạt động | Ember, xưởng | Xưởng (K12), chế được Bộ kích nguồn TOL-401 và Súng lưới cho loài nhỏ TOL-202 (log GDM dòng 49) |
| C1.6 | Người thứ hai | Buồng của Linh qua cửa khí của Ember | Ember | Linh vào Hồi sức, tỉnh đầu ngày kế tiếp và giao quest sửa KH06 và KH07 |
| C1.7 | Lời gọi đầu tiên | Khoang liên lạc KH06 Hoạt động và cảng KH07 Hoạt động | Ember, khoang liên lạc | Khoang liên lạc, cảng, shop (K12, K20). Tàu TA01 vào lịch từ ngày kế tiếp |
| C1.8 | Tàu đầu tiên | Ngày kế tiếp sau C1.7 và tàu TA01 của Tikko cập bến | Ember, bến 1 | Ca cảng (kiểu chơi mới) |
| C1.9 | Sóng của Lantern (đóng chương) | Số ca cảng đã xong đạt ngưỡng ở mục 3 và giai đoạn 1 của động cơ chính đã lắp (K25) | Ember, khoang liên lạc | Dải Giữa, lối vào N3, chương 2 |

| Mã | Là gì | ID vật | Nơi | Hiện từ mốc | Nói điều gì |
|---|---|---|---|---|---|
| MM1.1 | Nhật ký trạm của Cinder | STY-101 | N1, khe M4 ở khoang ngủ đông trái C3 | C1.3 | Người trực của Cinder ghi một ánh chớp ở phía ngoài mạn tàu ngay trước tiếng nổ. Nghi vấn đầu tiên: thứ đó đến từ bên ngoài |
| MM1.2 | Bản tin lưu trong máy liên lạc của Cinder | STY-111 | N1, khe M3 ở khoang lái C7 | C1.3 | Tên hồ sơ Lodestar Survey xuất hiện lần đầu, kèm dấu của The Lattice. Linh nhận ra tên này và im lặng |
| MM1.3 | Thẻ tên hai buồng đã tắt (không bắt buộc) | STY-601 | N1, khe M1 ở C3 và khe M2 ở C5 | C1.3 | Tên hai người không qua khỏi. Mang về thì thẻ treo ở khoang buồng ngủ đông của Ember. Ingrid và Linh mỗi người có một lời riêng |
| V1.1 | Mảnh lõi dẫn đường của Cinder (vật nhiệm vụ) | STY-102 | N1, khe V1 ở khoang lái C7 | C1.3 | Chưa có chỗ dùng ở chương 1. Sang chương 2 nó là một vật liệu sửa khoang dẫn đường KH08 |

- Nhật ký trạm nằm ở khe M4 của C3 để nhặt được ngay ở lần vào đầu tiên: nó là vật manh mối đầu tiên của game và bước hướng dẫn T29 của gd-ux dựa vào nó. `map.md` đã có khe này.

Nhân vật xuất hiện: tổ Ember, Ingrid Halvorsen, Linh Tran, Tikko, Bram Kowalski (chỉ giọng qua sóng).

Kiểu chơi mới và cách truyện đưa vào:
- Khai thác: khoang neo cần vật liệu, đó là lý do của chuyến ra ngoài đầu tiên (C1.2).
- Bắt sống loài nhỏ bằng lưới: Ingrid không chịu được việc phá hỏng thứ còn nguyên. Thứ đầu tiên cô chế sau Bộ kích nguồn là Súng lưới, để mang sinh vật về mà không làm nát chúng (C1.5).
- Ca cảng: lời gọi của Linh được một dân gom phế liệu Oru nghe thấy. Tikko ghé vì tò mò và trở thành khách đầu tiên (C1.8). Đơn của Tikko có một loại hàng Driftlife sống: Tikko gom hộ một nhà sưu tầm chưa lộ mặt. Người đó là Vaeth, tới chương 2 mới tự đến.

Người vớt của chương:

| Người | Đưa về thế nào | Quest mở (luật của gd-quan) | Cảnh truyện kèm quest | Mở (K12) |
|---|---|---|---|---|
| Ingrid Halvorsen | Lần 1 vào Cinder: kéo buồng từ C3 về beacon B1 | Sửa xưởng KH05 | Cô tự tay kiểm từng món vật liệu người chơi giao, chê một món, nhận hết | Xưởng: chế và nâng cấp trang bị. Kèm Súng lưới cho loài nhỏ |
| Linh Tran | Lần 2 vào Cinder: mở cửa D1 bằng Bộ kích nguồn, qua khoang máy C6, kéo buồng từ C5 về beacon B2 | Sửa khoang liên lạc KH06 và cảng KH07 | Cô phát lời gọi đầu tiên bằng ba thứ tiếng của The Veyl | Khoang liên lạc và cảng: gọi tàu, ca cảng, shop |

- Vai truyện của boss BS-1 Scrapmaw: nó làm tổ quanh lõi năng lượng ở khoang máy C6, chắn đường duy nhất tới buồng của Linh. Hạ hay xua nó đi đều được (hai cách kết của gd-combat). Xua đi là lần đầu game cho thấy không cần giết.

Cảnh đóng (cảnh của C1.9, pha Cuối ngày): khoang liên lạc bắt được một giọng người lặp đi lặp lại một lời gọi cũ. Cả trạm đứng nghe. Linh trả lời. Bram Kowalski đọc vị trí của Station Lantern, và Linh giải từ sóng đó ra một khe đi qua Rạn vụn đang chặn dải Giữa (hazard của gd-world).

#### Chương 2 - Không cô độc `Sau MVP`

Mục tiêu người chơi: phá vây cho Lantern, đưa về Nhà sinh học và Hoa tiêu, học nuôi và bắt sống Driftlife cỡ M, tìm hiểu vì sao các trạm con vỡ.

Mở chương: không có cảnh. Lần đầu vào dải Giữa có một dòng radio: Bram nhận ra đèn của Ember.

| Mốc | Tên | Điều kiện | Nơi | Mở gì |
|---|---|---|---|---|
| C2.1 | Đèn của Lantern | Tới lối vào N3 | N3, Lantern Outer Ring | Trận BS-2 Tempest Gulper đang vây bến cập. Vật truyện của N3 hiện ra |
| C2.2 | Phá vây | BS-2 xong (hạ hoặc xua) | N3, Lantern Core | Cửa cập mở. Gặp Odile Laurent, Bram, Amara. Odile ra điều kiện cho Amara đi. Tàu TA03 của Bram vào lịch từ ngày kế tiếp |
| C2.3 | Chuyến xuồng đặc biệt | Giao đủ đơn của tàu TA03 trong một ca cảng | Ember, bến | Bram chở Amara sang Ember. Quest sửa phòng nghiên cứu KH10 và khoang sinh quyển KH11 |
| C2.4 | Mẫu sống cho Amara | KH10 và KH11 Hoạt động và một con Driftlife cỡ M còn sống về tới kho của trạm | Ember, phòng nghiên cứu | Nuôi Driftlife (K16). Tàu TA05 của Vaeth |
| C2.5 | Nhịp buồng trong vành đai | Ngày kế tiếp sau C2.4 | Ember, khoang liên lạc | Lối vào N2 |
| C2.6 | Người chỉ đường | Buồng của Rafa qua cửa khí của Ember | Ember | Rafa vào Hồi sức, tỉnh đầu ngày kế tiếp và giao quest sửa khoang dẫn đường KH08 |
| C2.7 | Không nổ từ trong ra | Đã nhặt MM2.1 và đã nhặt MM2.2 | Ember, xưởng | Cảnh Ingrid xem mảng vỏ. Tàu TA04 của Ilsume |
| C2.8 | Bản đồ có một lỗ đen (đóng chương) | Khoang dẫn đường KH08 Hoạt động, đã nộp mảnh lõi dẫn đường của Wick STY-103 và giai đoạn 2 của động cơ chính đã lắp (K25) | Ember, khoang dẫn đường | Bến Skiff KH09, dải Xa, lối vào N4, chương 3 |

| Mã | Là gì | ID vật | Nơi | Hiện từ mốc | Nói điều gì |
|---|---|---|---|---|---|
| MM2.1 | Mảng vỏ thân của Station Wick | STY-211 | N2, khe M1 ở khoang ngủ đông | C2.5 | Vỏ lõm vào trong. Vết phá đi từ ngoài vào |
| MM2.2 | Nhật ký trạm của Wick | STY-101 | N2, khe M2 ở khoang ngủ đông | C2.5 | Sau vụ nổ có kẻ cắt rời khoang hàng của Wick. Đường cắt sạch, không phải dụng cụ của loài người |
| MM2.3 | Sổ trực của Lantern | STY-212 | N3, khe M1 ở Lantern Core | C2.1 | Danh sách xuồng Lantern cử vào dải Xa không về, kèm ghi chú về những con tàu lạ không trả lời |
| MM2.4 | Bản Lodestar Survey Odile treo trên tường | STY-213 | N3, khe M2 ở Lantern Core | C2.1 | Lantern vẫn tin hồ sơ này và định đi tiếp tới Solace khi sửa xong động cơ |
| MM2.5 | Thẻ tên các buồng đã tắt của Wick (không bắt buộc) | STY-601 | N2, khe M3 | C2.5 | Tên những người không qua khỏi ở Wick |
| V2.1 | Mảnh lõi dẫn đường của Wick (vật nhiệm vụ) | STY-103 | N2, khe V1 ở khoang lái | C2.5 | Nộp ở khoang dẫn đường, là điều kiện của C2.8 |

- Mảnh lõi dẫn đường của Cinder STY-102 bị tiêu khi sửa KH08 (danh sách sửa của `vat-pham.md`). Vì vậy C2.8 không đòi nộp nó lần nữa: sửa xong KH08 nghĩa là mảnh của Cinder đã được ghép.

Nhân vật xuất hiện: Odile Laurent, Bram Kowalski, Amara Okafor, Rafael Ortega, Vaeth, Ilsume.

Kiểu chơi mới và cách truyện đưa vào:
- Bắt sống Driftlife cỡ M (gây mê, gắn Phao kéo): lưới của Ingrid chỉ bắt được cỡ S. Việc đầu tiên Amara nhờ là một con cỡ M còn sống. Cỡ L không bắt sống được, chỉ lấy mẫu sinh thiết (luật của gd-combat).
- Dụng cụ cho C2.4, dòng mục tiêu Sổ tay ghi từng bước. Đường nhanh nhất theo `vat-pham.md` và `combat-driftlife.md`: chế Phao kéo CON-106 ở xưởng (chế nhanh), làm một con cỡ M bất lực bằng dụng cụ đã có rồi gắn phao, ví dụ Barnacle Maw DL-G03 ở dải Gần. Súng gây mê TOL-203 cần hai lần chế qua đêm (bản thiết kế BPR-102 rồi mới tới súng), dành cho loài phải gây mê mới bắt được.
- Nuôi: khoang sinh quyển sửa xong thì nhận những con cỡ S đã bắt bằng lưới từ chương 1. Mốc C2.4 không đòi con cỡ M đó phải là loài nuôi được. Vaeth, nhà sưu tầm Aelith từng nhờ Tikko gom hộ ở chương 1, tự tìm tới và trả giá cao cho Driftlife sống, cho việc nuôi một lý do kinh tế đúng K9.
- Gieo trước cho cú lật Driftlife: ở dải Giữa một phần cá thể đã mang dấu lạ (luật 30 của `combat-driftlife.md`). Amara để ý và ghi lại, chưa ai hiểu nó là gì.

Người vớt của chương:

| Người | Đưa về thế nào | Quest mở (luật của gd-quan) | Cảnh truyện kèm quest | Mở (K12) |
|---|---|---|---|---|
| Amara Okafor | Cô đang thức ở Lantern, làm thầy thuốc bất đắc dĩ. Odile chỉ cho đi khi Lantern nhận được hàng tiếp tế. Bram chở cô sang ở mốc C2.3 | Sửa phòng nghiên cứu KH10 và khoang sinh quyển KH11 | Cô mang theo đúng một cuốn sổ, thứ duy nhất còn lại của kho giống Trái Đất | Nghiên cứu và nuôi Driftlife |
| Rafael Ortega | Vào Wick: bật điện khoang ngủ đông bằng Bộ kích nguồn, kéo buồng về | Sửa khoang dẫn đường KH08 | Anh không chịu chạm vào bản đồ cho tới khi sửa xong khoang | Khoang dẫn đường: đọc lõi dẫn đường, mở dải Xa, Skiff |

Vai truyện của boss BS-2 Tempest Gulper: con đầu đàn vây Lantern, cắt đường tiếp tế. Đây là lý do nhiều năm Lantern không ra khỏi trạm được và xuồng của Bram không tới được Ember sớm hơn. Lần đầu tới Lantern là một trận cứu trạm.

Cảnh đóng (cảnh của C2.8): Rafa ghép lõi của Ember, Cinder và Wick. Mọi vệt mảnh vỡ chỉ về một điểm nằm trong Glass Nebula, và phần đường tới Solace trong cả ba lõi đều bị cháy đúng một chỗ. Rafa nói anh không tin vào trùng hợp, rồi tự gạt đi. Chỉ Cradle còn giữ bản đủ. Qua sóng, Odile nói người của bà vào đó chưa ai về, và nhắc tới những người đã bỏ đi: The Remainers.

#### Chương 3 - Kẻ canh giữ `Sau MVP`

Mục tiêu người chơi: vào dải Xa, tới Veyl Waypost và The Raft, đón Trưởng cảng, biết ai đã đánh Cradle.

Mở chương: không có cảnh. Lần đầu vào dải Xa có một sự kiện hình không lời: liên lạc nhiễu, trong mây khí bóng một cỗ máy rất lớn đi ngang rồi mất.

| Mốc | Tên | Điều kiện | Nơi | Mở gì |
|---|---|---|---|---|
| C3.1 | Bến của The Veyl | Tới lối vào N4 | N4, Waypost Concourse | Nhem, Dromm, Yusuf Demir. Tàu TA06 và TA10 vào lịch từ ngày kế tiếp. Vật truyện của N4 hiện ra |
| C3.2 | Trưởng cảng về bến | Đã xong một ca cảng có tàu TA06 của Dromm cập bến và sau ca đó tới N4 bằng Skiff | Ember, bến | Yusuf về Ember cùng chuyến Skiff. Quest sửa bến thuộc KH12 |
| C3.3 | Tàu lạ | Bến thuộc KH12 Hoạt động và tàu TA08 của Maro cập bến lần thứ nhất | Ember, bến | Maro vào truyện |
| C3.4 | Sự cố đầu tiên | Sự cố đầu tiên xảy ra, ở ca cảng kế tiếp sau C3.3 (luật 43 của `tram-va-cang.md`) | Ember | Sự cố trong ca cảng (K14). Lối vào N5 |
| C3.5 | Những người ở lại | Tới lối vào N5 | N5 | Elias Vance, Wren. Tàu TA07 của The Remainers. Lối vào N6 |
| C3.6 | Trạm bị dọn | Đã nộp mẫu Driftlife mang thẻ STY-301 ở phòng nghiên cứu | Ember, phòng nghiên cứu | Cảnh Amara nhận mẫu |
| C3.7 | Chúng chăn đàn | Ngày kế tiếp sau C3.6 | Ember, phòng nghiên cứu | Cú lật Driftlife. Lần cập bến thứ ba của TA08 vào lịch từ ngày kế tiếp |
| C3.8 | Đã được đếm (đóng chương) | Tàu TA08 cập bến lần thứ ba. Lần này chỉ vào lịch khi giai đoạn 3 của động cơ chính đã lắp (K25) | Ember, bến | Lối vào N7, chương 4 |

| Mã | Là gì | ID vật | Nơi | Hiện từ mốc | Nói điều gì |
|---|---|---|---|---|---|
| MM3.1 | Bản ghi chuyển tin của The Lattice và sổ hải trình của bến | STY-311 | N4, khe M1 ở quầy của Nhem | C3.1 | Lodestar Survey lên mạng tin từ một nguồn ẩn danh, Nhem là người chuyển tiếp nó cho phái bộ loài người. Sổ hải trình bao nhiêu năm không ghi một chuyến nào tới Solace hay ai từ đó về |
| MM3.2 | Lời tuyên bố khu bảo hộ | STY-312 | N4, khe M2 ở Waypost Concourse | C3.1 | Bản của The Wardens dán ở mọi bến: bãi vỡ được giữ, không ai được chở tàn dư ra khỏi đó. Lý do thương nhân chỉ dám buôn bán |
| MM3.3 | Xác một máy thu hoạch | STY-313 | N5, khe M1 ở kho của Elias | C3.5 | Ký hiệu trên máy trùng với ký hiệu trên lời tuyên bố ở Veyl Waypost |
| MM3.4 | Nhật ký trạm của Flint | STY-101 | N6, khe M1 | C3.5 | Flint sống sót sau vụ nổ, bốn người đã thức. Rồi "những con tàu sạch sẽ" tới. Dòng cuối: họ nói họ đến để dọn |
| MM3.5 | Manh mối lõi dẫn đường của Flint (không bắt buộc) | STY-104 | N6, khe M2 | C3.5 | Lõi của Flint cũng cháy đúng chỗ ghi đường tới Solace. Nhặt rồi thì Rafa có thêm một lời |
| V3.1 | Mẫu Driftlife mang thẻ (vật nhiệm vụ). Loài: Brood Spawn DL-X05 theo gd-combat | STY-301 | N6, khe V1 ở khoang nghiên cứu, mở sau khi hạ BS-3 | C3.5 | Con vật bị gắn thẻ của The Wardens. Con mẹ của nó có sẹo cắt mô đều nhau. Nộp ở phòng nghiên cứu, là điều kiện của C3.6 |

- Khe của N4 (M1, M2), N5 (M1), N6 (M1, M2, V1) khớp `map.md`.

- Thiết bị lạ dưới bến Ember (C3.4) và lời Elias kể ở C3.5 là mốc truyện, không phải vật manh mối để nhặt.

Nhân vật xuất hiện: Yusuf Demir, Nhem, Dromm, Maro, Elias Vance, Wren, Serith (chỉ qua lời Maro).

Kiểu chơi mới và cách truyện đưa vào:
- Sự cố trong ca cảng: thiết bị Maro để lại làm trạm trục trặc. Sau khi Ingrid gỡ nó, trạm vẫn mang di chứng, nên sự cố còn lại tới hết game.
- Kẻ địch có vũ khí: đơn vị The Wardens có ở dải Xa từ đầu chương (theo gd-combat). Người chơi đọc được tên The Wardens ngay ở Veyl Waypost (MM3.2), nhưng tới C3.8 mới biết chính chúng đã đánh Cradle và đang đếm người sống sót.

Người vớt của chương:

| Người | Đưa về thế nào | Quest mở (luật của gd-quan) | Cảnh truyện kèm quest | Mở (K12) |
|---|---|---|---|---|
| Yusuf Demir | Ông đang thức, điều bến thuê ở Veyl Waypost từ khi trạm của ông vỡ. Ông nhờ Dromm ghé xem cảng Ember có đáng về không. Sau một ca có Dromm cập bến, người chơi dùng Skiff đón ông ở mốc C3.2. Theo K22 chuyến Skiff đó là của ngày sau ca | Sửa bến thuộc KH12 | Ông đi một vòng cảng, chê hết, rồi pha trà | Thêm bến, tiện ích cảng |

Ba lần cập bến của Maro (tàu TA08):

| Lần | Vào lịch khi | Maro làm gì | Người trong trạm phản ứng |
|---|---|---|---|
| Thứ nhất (C3.3) | Bến thuộc KH12 Hoạt động | Đơn hàng như mọi tàu, trả giá hời. Hỏi thăm trạm có bao nhiêu người thức | Yusuf vui vì có khách sộp. Linh thấy cách chào hơi lệch nghi thức Sennari. Ca sau có sự cố đầu tiên (C3.4) |
| Thứ hai | Từ ngày kế tiếp sau C3.4 | Hỏi mua bản sao dữ liệu của nhật ký trạm. Rời bến sớm | Ingrid đã gỡ thiết bị lạ, chưa biết của ai |
| Thứ ba (C3.8) | Từ ngày kế tiếp sau C3.7 | Cập bến như mọi lần. Linh và Nhem gọi đúng tên thương hội mà Maro mạo nhận. Maro bỏ lớp cải trang | Mốc đóng chương |

- Đơn của Maro giao hay không giao đều không đổi truyện (luật 16). Truyện đếm lần cập bến.
- Bản sao dữ liệu chỉ sao được từ vật loại dữ liệu (nhật ký trạm, hộp ghi hành trình) theo `vat-pham.md`. Ở chương 3 chỉ có nhật ký trạm.

- Vai truyện của boss BS-3 Reaper Harvester: máy thu hoạch của The Wardens đang chạy trong khoang hàng của Flint, giữa những lồng nhốt Driftlife. Phá lồng thì Driftlife quay sang đánh máy (cơ chế của gd-combat). Trận này và mẫu ở khe V1 nói cùng một điều.

Cảnh đóng (C3.8):
- Trong ca cảng, chỉ lời bong bóng (luật 21): Linh và Nhem gọi tên thương hội, Maro bỏ lớp cải trang, nói ba lời rồi rời bến. Nhạc cảng tắt. Ca vẫn chạy.
- Ở pha Cuối ngày, cảnh dài: cả trạm ngồi lại. Qua khoang liên lạc, Serith gửi lời: bãi vỡ là khu bảo hộ, người sống sót là tàn dư, đã được đếm, việc còn lại chỉ là dọn. Yusuf nhìn chén trà còn nguyên trên bàn.

#### Chương 4 - Tâm vụ nổ `Sau MVP`

Mục tiêu người chơi: vào bên trong Cradle lấy đường tới Solace. Thứ tìm được là sự thật: Solace là mồi. Mục tiêu đổi thành rời bãi vỡ trước khi The Wardens quét sạch người sống sót.

Cảnh mở (cảnh dài, không phải mốc): phát ở pha Chuẩn bị của ngày kế tiếp sau C3.8. Rafa nhập vị trí Cradle cho Skiff. Qua sóng, Odile báo Lantern sắp sửa xong động cơ và sẽ đi tiếp tới Solace theo Lodestar Survey, trừ khi Ember mang về lý do để không đi.

| Mốc | Tên | Điều kiện | Nơi | Mở gì |
|---|---|---|---|---|
| C4.1 | Vào Cradle | Tới lối vào N7 | N7, Collapsed Hold | Map nhánh lớn trong nội thất tàu (kiểu chơi mới). Vật truyện của N7 hiện ra |
| C4.2 | Những dãy buồng | Tới Main Cryo Deck | N7 | Sự kiện hình không lời: hàng dãy buồng đã tắt |
| C4.3 | Kẻ đã vào trước | BS-4 Silent Custodian xong và đã nhặt MM4.3 | N7, Engine Core | Đường sang Bridge and Archive |
| C4.4 | Tên người dịch | Đã nhặt MM4.4 | N7, Bridge and Archive | Lời thú nhận của Linh |
| C4.5 | Hộp ghi hành trình | Đã nộp hộp ghi hành trình STY-401 ở khoang dẫn đường | Ember, khoang dẫn đường | Cảnh Rafa và Linh nhận hộp |
| C4.6 | Nguồn ẩn danh | Tới quầy của Nhem ở N4 | N4 | Nhem lần ngược The Lattice: nguồn của Lodestar Survey là The Wardens |
| C4.7 | Không có gì ở đó (đóng chương) | Ngày kế tiếp sau C4.5 và giai đoạn 4 của động cơ chính đã lắp (K25) | Ember, khoang dẫn đường | Sự thật: Solace là mồi. Lối vào N8, chương 5 |

- Vì mốc đi theo thứ tự, C4.7 chỉ xét sau khi C4.6 xong.

| Mã | Là gì | ID vật | Nơi | Hiện từ mốc | Nói điều gì |
|---|---|---|---|---|---|
| MM4.1 | Vết vũ khí trên vỏ Cradle | STY-411 | N7, khe M1 ở Collapsed Hold | C4.1 | Cùng ký hiệu với thẻ trên Driftlife và máy thu hoạch |
| MM4.2 | Bản chào mừng người thức dậy của United Accord | STY-412 | N7, khe M2 ở Main Cryo Deck | C4.1 | Kế hoạch ở Solace: giai đoạn một là khảo sát mỏ. Một dòng ghi chú: vùng đường đi qua là khu bảo hộ của The Wardens, bỏ qua để kịp tiến độ |
| MM4.3 | Lõi dẫn đường của Cradle đã bị xóa, kèm nhật ký truy cập | STY-105 | N7, khe M3 ở Engine Core | C4.1 | Sau vụ nổ đã có kẻ lên tàu, cài lại hệ an ninh và xóa dữ liệu dẫn đường. Chúng không muốn ai đọc được Cradle đã thấy gì |
| MM4.4 | Bản gốc Lodestar Survey | STY-414 | N7, khe M4 ở Bridge and Archive | C4.1 | Dấu của The Lattice, dấu nhận của phái bộ, và tên Linh Tran trong danh sách người dịch |
| V4.1 | Hộp ghi hành trình (vật nhiệm vụ) | STY-401 | N7, khe V1 ở Bridge and Archive | C4.1 | Nộp ở khoang dẫn đường, là điều kiện của C4.5. Nội dung ở cảnh đóng |

Nhân vật xuất hiện: Rafael Ortega, Linh Tran, Nhem, Odile Laurent, Serith (lời phát trên The Lattice).

Kiểu chơi mới và cách truyện đưa vào: map nhánh lớn trong nội thất tàu. Người chơi tin Cradle là nơi duy nhất còn giữ đường tới Solace, nên phải vào tận kho lưu trữ, đi trọn trong nhiều chuyến.

Người vớt của chương: không có (khung mục 7). Thay vào đó là hai chuyện riêng khép lại: Linh (người dịch hồ sơ) và Nhem (người chuyển hồ sơ).

Vai truyện của boss BS-4 Silent Custodian: hệ an ninh của chính Cradle, bị The Wardens cài lại để giữ kho lưu trữ. Loài người bị chính con tàu của mình chặn đường.

Cảnh đóng (cảnh của C4.7): Rafa và Linh mở hộp ghi. Trước vụ nổ ít lâu, đài quan sát của Cradle đã đủ gần để tự nhìn về phía Solace. Lời cuối của người trực: phổ không khớp hồ sơ, ở đó không có gì cả. Rồi tới ánh chớp. Solace là mồi. Cùng lúc Serith phát công khai trên The Lattice: bãi vỡ sẽ được làm sạch, và Warden Rig bắt đầu dọn dần về phía điểm neo. Qua sóng, Odile im rất lâu, rồi gỡ bản Lodestar Survey khỏi tường. Mục tiêu trong Sổ tay đổi: rời bãi vỡ.

#### Chương 5 - Rời neo `Sau MVP`

Mục tiêu người chơi: sửa xong động cơ chính, lấy bản đồ sao thật ở Warden Rig, rời neo trước khi The Wardens quét tới.

Cảnh mở (cảnh dài, không phải mốc): phát ở pha Chuẩn bị của ngày kế tiếp sau C4.7. Warden Rig hiện rõ ở rìa dải Xa. Ca cảng vắng hẳn. Ilsume gửi lời từ biệt đủ nghi thức. Tikko vẫn tới. Rafa nói thẳng: mọi bản đồ loài người đang có đều chép từ hồ sơ giả, không tấm nào tin được. Kẻ dựng hồ sơ thì phải có bản đồ thật.

| Mốc | Tên | Điều kiện | Nơi | Mở gì |
|---|---|---|---|---|
| C5.1 | Chuyến hàng cuối | Tàu TA06 của Dromm cập bến lần đầu sau C4.7 | Ember, bến | Dromm vẫn tự chở hàng tới dù các tàu khác đã bỏ bãi vỡ. Trong ca chỉ có lời bong bóng, cảnh ngắn phát sau ca |
| C5.2 | Lời nói dối đi đường nào | Ngày kế tiếp sau C5.1 | Ember, khoang liên lạc | Nhem phát bằng chứng lên The Lattice. Chưa ai đáp |
| C5.3 | Vào Warden Rig | Tới N8 bằng Skiff | N8, Rig Landing | Vật truyện của N8 hiện ra |
| C5.4 | Mở lồng | Đã thả Driftlife ở Holding Pens | N8, Holding Pens | Driftlife quay sang đánh The Wardens. Đường vào Command Deck |
| C5.5 | Kẻ canh giữ | BS-5 Serith xong | N8, Command Deck | Trận đối đầu cuối (kiểu chơi mới). Data Core mở |
| C5.6 | Bản đồ thật | Đã nộp bản đồ sao thật STY-501 ở khoang dẫn đường | Ember, khoang dẫn đường | Công thức RCP-207: chế ENG-105 từ STY-501 và STY-401 đang nằm trong kho |
| C5.7 | Rời neo | Động cơ chính KH13 xong giai đoạn 5 và mọi người chơi đang có mặt xác nhận rời neo ở khoang dẫn đường | Ember | Cảnh rời neo |
| C5.8 | Ngoài bãi vỡ (kết) | C5.7 xong | Ember, ngoài Glass Nebula | Cảnh kết mở (mục 2.8), rồi về menu chính (luật 26) |

- Hai cảnh cuối của C5.7 và C5.8 phát liền nhau cho mọi người đang có mặt, không chờ điểm nghỉ. Đây là ngoại lệ duy nhất của quy tắc một cảnh mỗi điểm nghỉ.
- Xác nhận rời neo trong co-op theo cách xác nhận ngủ của K23: ai không trả lời trong thời hạn thì tính là đồng ý.

| Mã | Là gì | ID vật | Nơi | Hiện từ mốc | Nói điều gì |
|---|---|---|---|---|---|
| MM5.1 | Dữ liệu bản khảo sát bị giấu | STY-502 | N8, khe M1 ở Data Core | C5.3 | The Wardens dựng mồi Solace từ một bản khảo sát có thật mà chúng giấu đi. Bản đó tả gì thì chưa đọc được hết (B11) |
| V5.1 | Bản đồ sao thật (vật nhiệm vụ) | STY-501 | N8, khe V1 ở Data Core | C5.3 | Vùng trời thật quanh bãi vỡ, đủ để rời đi mà không rơi vào bẫy khác. Nộp ở khoang dẫn đường, là điều kiện của C5.6 |

Chương 5 có một vật manh mối và một vật nhiệm vụ. Bằng chứng còn lại là hình ảnh người chơi tự thấy: Holding Pens, các ống chứa trong Command Deck, và ở Rig Landing một đống thẻ tên buồng ngủ đông của các trạm đã bị dọn (chi tiết hình cho art, không phải khe).

Nhân vật xuất hiện: mọi người vớt, Tikko, Dromm, Ilsume, Nhem, Odile, Bram, Elias, Wren, Serith.

Kiểu chơi mới và cách truyện đưa vào: trận đối đầu cuối. Bản đồ thật nằm sau lưng Serith, không có đường nào khác để lấy.

Người vớt của chương: không có.

Vai truyện của boss BS-5 Serith: nó đứng giữa những ống chứa Driftlife đang nuôi khiên cho nó, và vẫn nói bằng giọng người làm vườn. Người chơi tắt khiên bằng cách thả Driftlife ra (cơ chế của gd-combat). Trận đánh diễn ra giữa bằng chứng về sự đạo đức giả của chính nó. Serith bị hạ, số phận để mở.

Cảnh đóng: mục 2.8.

### 2.6 Nhân vật truyện

Hồ sơ ngoại hình và yêu cầu art do gd-character giữ ở `ho-so-nhan-vat.md`. Ở đây là phần truyện.

#### Tổ Ember (nhân vật người chơi) `MVP`

- Bốn hồ sơ mặc định: Noor Haddad, Jonas Weber, Mei Tanaka, Tariq Bello. Cả bốn là kíp vận hành trạm, không ai là chuyên gia. Chuyên gia là những người vớt.
- Người chơi chọn một hồ sơ và đổi tên được. Hồ sơ không ai chọn mà rơi vào buồng hỏng thì là người đã chết, tên trên buồng giữ tên mặc định.
- Nhân vật người chơi không có lời thoại riêng. Nhân vật khác gọi họ bằng tên người chơi đặt, hoặc gọi chung là "Ember".

#### Năm người vớt

| Tên | Nghề, quốc gia gốc | Tính cách | Giọng | Mâu thuẫn riêng | Nhãn |
|---|---|---|---|---|---|
| Ingrid Halvorsen | Kỹ sư, Na Uy. Cả đời làm giàn khoan biển | Thẳng, khô, làm trước nói sau, không chịu được đồ hỏng | Câu ngắn, mệnh lệnh, đùa không đổi nét mặt | Tự hào về nghề khai thác. Khi sự thật lộ dần, cô phải nhìn lại chính nghề của mình | `MVP` |
| Linh Tran | Thông dịch viên, Việt Nam. Từng ở phái bộ thương mại với The Veyl | Nhanh miệng, khéo, hay chữa lời người khác, giữ thể diện cho cả hai bên | Lịch sự, chen lời giải thích, thỉnh thoảng dịch quá trung thực | Cô là một trong những người dịch Lodestar Survey. Cô nhận ra tên hồ sơ từ chương 1 và giấu tới chương 4 | `MVP` |
| Rafael Ortega (Rafa) | Hoa tiêu, Chile. Lớn lên cạnh các đài thiên văn sa mạc | Mơ mộng, mê tín với sao, sợ phải chịu trách nhiệm cho đường đi của người khác | Ẩn dụ đi biển và bầu trời, nói vòng rồi mới vào ý | Bản đồ từng giết cả tàu. Tới chương 5 anh phải dẫn đường mà không có đích | `Sau MVP` |
| Amara Okafor | Nhà sinh học, Nigeria. Quê ở vùng châu thổ bị dầu tàn phá | Tỉ mỉ, ấm, nói chuyện với mẫu vật, nghiêm hẳn khi nói về tuyệt chủng | Chậm, rõ, dùng từ chính xác, không nói quá | Cô lên tàu để giữ kho giống của Trái Đất, kho đó đã mất. Cô phải chọn nhìn Driftlife là tài nguyên hay là sinh vật | `Sau MVP` |
| Yusuf Demir | Trưởng cảng, Thổ Nhĩ Kỳ. Điều hành cảng ở một eo biển lớn | Ồn ào, hiếu khách, coi mặc cả là niềm vui, quản người bằng trà và tiếng quát | Nói to, xưng hô thân mật, hay ví von chuyện bến bãi | Ông tin buôn bán với ai cũng được miễn công bằng. Chính ông đã mời Maro trà | `Sau MVP` |

- Quest mở tính năng của từng người: xem bảng người vớt trong chương 1, 2, 3. Cả năm khớp K12 và luật 15 của `tram-va-cang.md`.
- Hài nhẹ (B9) đặt ở: Ingrid đùa mặt lạnh, Linh dịch quá trung thực, Rafa mê tín, Amara nói chuyện với mẫu, Yusuf và những chén trà.

#### Thương nhân The Veyl

| Tên | Chủng tộc, tàu | Tính cách | Hài đến từ đâu | Vai truyện | Ghé cảng từ | Nhãn |
|---|---|---|---|---|---|---|
| Tikko | Oru, TA01 | Tò mò, mau miệng, tự xưng bằng tên | Mê đồ Trái Đất và hiểu sai công dụng của chúng | Khách đầu tiên. Sang chương 5, khi phần lớn tàu đã bỏ bãi vỡ, Tikko vẫn ghé đều | Chương 1 | `MVP` |
| Ilsume | Sennari, TA04 | Trịnh trọng, chậm rãi, coi nghi thức là hàng hóa quý nhất | Lễ nghi dài dòng trong khi tàu của chính bà sắp rời bến | Tiếng nói của thương hội lớn: đúng mực và sợ The Wardens | Chương 2 | `Sau MVP` |
| Vaeth | Aelith, TA05 | Say mê, lơ đãng, chỉ nhìn sinh vật không nhìn người | Khen con vật trong kiện, quên trả lời người bán | Cho việc bắt sống và nuôi một người mua. Sau cú lật, Vaeth là thương nhân đầu tiên tin Amara | Chương 2 | `Sau MVP` |
| Dromm | Brakk, TA06 | Ít lời, chắc chắn, đánh giá bằng mắt | Mặc cả bằng im lặng, người chơi phải tự đoán | Người xem hộ Yusuf cảng Ember. Người chở chuyến hàng cuối ở chương 5 | Chương 3 | `Sau MVP` |
| Nhem | Kesh, TA10 | Điềm đạm, tự hào về nghề buôn tin, tin rằng tin tức không có lỗi | Không hài. Nhem là nhân vật mang nỗi áy náy | Người đã chuyển Lodestar Survey mà không biết nguồn. Người đưa sự thật ngược lại đúng con đường đó | Chương 3 | `Sau MVP` |

Hành vi ở cảng của từng loại tàu do gd-quan giữ.

- Đề cương chuyện riêng của thương nhân (luật 25) `Sau MVP`. Mỗi đoạn là tối đa 3 lời bong bóng lúc tàu cập bến. Lời cụ thể viết khi dựng chương có thương nhân đó.

| Thương nhân | Đoạn một | Đoạn hai | Đoạn ba | Mở sau mốc (đoạn một, hai, ba) |
|---|---|---|---|---|
| Tikko | Khoe một món đồ Trái Đất vừa gom được và đoán sai công dụng của nó | Kể vì sao dân Oru đi lẻ: con tàu là nhà, không có nơi nào để về | Nói vì sao vẫn ghé khi tàu khác đã bỏ: dân Oru không bỏ một ngọn đèn còn sáng | C1.8, C1.9, C4.7 |
| Ilsume | Dạy một nghi thức chào và chê cách Ember chào | Hé lộ thương hội của bà có lệnh tránh xa bãi vỡ | Lời từ biệt đủ nghi thức, để lại một món quà trái lệ của thương hội | C2.7, C3.1, C4.7 |
| Vaeth | Hỏi tên từng con Driftlife đã mua, như hỏi thăm người quen | Kể bộ sưu tập là để giữ lại những loài sắp mất | Sau cú lật: đưa Amara ghi chép của mình về những đàn mang thẻ | C2.4, C2.8, C3.7 |
| Dromm | Không nói gì, để lại một kiện thừa không tính tiền | Một câu duy nhất, về Yusuf | Nói lý do chở chuyến hàng cuối: còn thiếu Yusuf một chén trà | C3.1, C3.2, C5.1 |
| Nhem | Giảng vì sao tin là hàng và hàng thì không có lỗi | Hỏi Linh về bản dịch năm xưa | Xin Ember một bản sao hộp ghi hành trình để phát lên The Lattice | C3.1, C4.4, C4.7 |

- Đoạn ba của Tikko, Ilsume và Nhem chờ mốc đóng chương 4, của Dromm chờ chuyến hàng cuối, của Vaeth chờ cú lật. Người chơi giao nhiều hàng từ sớm cũng không nghe được lời của chương sau.
- Người chơi tới mốc mở mà chưa đủ số lần giao thì đoạn đó phát ở lần cập bến đầu tiên sau khi đủ.

#### Người của Lantern, The Remainers, The Wardens

| Tên | Thuộc | Vai | Tính cách và giọng | Điều nhân vật này muốn | Nhãn |
|---|---|---|---|---|---|
| Odile Laurent | Station Lantern | Trưởng trạm | Cứng, kỷ luật, nói bằng mệnh lệnh và nghĩa vụ | Hoàn thành nhiệm vụ của United Accord đúng như được giao. Với bà nhiệm vụ đó là tới Solace, nơi bà tin là có thật cho tới mốc đóng chương 4. Sau đó bà là người mất đích | `Sau MVP` |
| Bram Kowalski | Station Lantern | Trưởng xuồng tiếp tế, tàu TA03 | Hay than, tốt bụng, lần nào cũng xin thêm một thứ ngoài danh sách | Có một trạm bạn để ghé | `MVP` (chỉ giọng), `Sau MVP` |
| Elias Vance | The Remainers | Thủ lĩnh, cựu sĩ quan an ninh của Cradle | Khắc nghiệt, nói ít, nỗi sợ giấu sau kỷ luật | Giữ những người còn lại sống, bằng cách không đi đâu cả | `Sau MVP` |
| Wren | The Remainers | Đứa trẻ sinh ra trên The Raft sau The Scattering | Hỏi thẳng, chưa từng thấy một hành tinh | Biết bên ngoài có gì | `Sau MVP` |
| Maro | The Wardens | Kẻ cải trang làm thương nhân của một thương hội Sennari không có thật, tàu TA08 | Vồn vã, hào phóng, hỏi quá nhiều. Khi lộ mặt thì phẳng lặng | Đếm người sống sót trước khi dọn | `Sau MVP` |
| Serith | The Wardens | Thủ lĩnh của The Wardens ở bãi vỡ, boss BS-5 | Nói như người làm vườn: giữ, tỉa, dọn. Không bao giờ lên giọng | Làm sạch bãi vỡ, và tin đó là việc thiện | `Sau MVP` |

- Ba lập trường của con người trước sự thật: Odile muốn đi tiếp tới đích đã được giao. Elias không muốn đi đâu nữa. Tổ Ember đi mà không có đích. Chương 4 lấy mất đích của Odile. Chương 5 cho thấy ở lại như Elias là chờ bị dọn.

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

Lead chốt: kết mở. Biết Solace là mồi, Ember sửa xong động cơ và rời neo mà chưa có đích chắc chắn. Lời hứa "nếu tìm được thì dựng khác đi" nằm ở cảnh kết (B9).

Cảnh rời neo (C5.7): động cơ chính chạy. Mỗi người vớt đứng ở khoang của mình. Bộ neo nhả. Lantern rời theo. Một phần The Raft rời theo, Elias đứng lại ở cửa khí nhìn Wren lên xuồng. Ở rìa bãi vỡ, tàu của thương nhân The Veyl đã quay lại, đứng thành hàng nhìn Ember đi. Họ không đánh giúp, nhưng họ không còn im lặng: bản tin của Nhem đã chạy hết The Lattice.

Cảnh ngoài bãi vỡ (C5.8), dài không quá số câu của một cảnh dài:
1. Ember ra khỏi Glass Nebula. Lần đầu trong game màn hình có một bầu trời sao sạch, không mảnh vỡ.
2. Rafa mở bản đồ thật. Không có điểm nào tên Solace.
3. Wren hỏi điều không ai dám hỏi: vậy Solace có thật không.
4. Rafa mở dữ liệu bản khảo sát bị giấu (MM5.1): mồi được dựng từ một bản khảo sát có thật. Anh chưa đọc được nó tả nơi nào.
5. Odile nói điều duy nhất bà còn chắc: lần này không có lệnh nào để theo.
6. Amara đặt bản chào mừng MM4.2 lên bàn: nếu tìm được, ta dựng khác đi.
7. Yusuf chữa không khí theo cách của ông: trước hết tìm một chỗ đậu được đã, trà thì ông lo.
8. Màn hình cuối: tên trên những buồng đã tắt của Ember, Cinder, Wick, Flint, rồi mới tới tên người làm game.

Thắng lợi của kết mở: người chơi không tới được Solace, nhưng ra khỏi bãi vỡ còn sống, mang theo mọi người đã vớt, phá được Warden Rig, và sự thật đã lên The Lattice.

Điều người chơi mang theo khi rời neo:

| Thứ | Từ đâu | Hiện trong cảnh kết thế nào |
|---|---|---|
| Những người vớt được | Chương 1 tới 3 | Đứng ở khoang của mình khi rời neo |
| Khoang sinh quyển và đàn Driftlife đã nuôi | K16 | Có nuôi thì khoang có đàn, không nuôi thì khoang trống vẫn đi. Không phạt (B10) |
| Thẻ tên các buồng đã tắt | MM1.3 | Màn hình cuối |
| Bản đồ sao thật | V5.1 | Rafa mở ra ở câu 2 |
| Một câu hỏi | MM5.1 | Có Solace thật không. Dành cho phần sau |

Sau cảnh kết game về menu chính. Bản lưu và việc chơi tiếp theo luật 26.

### 2.9 Gieo nghi ngờ về Solace trước chương 4 `Sau MVP`

- Mục đích: khi sự thật lộ ra ở mốc đóng chương 4, người chơi thấy mình đã được báo trước, không thấy bị lừa mất mục tiêu.
- Nguyên tắc: trước chương 4 chỉ gieo nghi ngờ về hồ sơ và về nguồn của nó. Không nhân vật nào nói thẳng Solace không có thật.

| Chương | Chỗ gieo | Ai, ở đâu | Người chơi nghe thấy gì |
|---|---|---|---|
| 1 | MM1.2 | Linh, Station Cinder | Linh im lặng khi thấy tên Lodestar Survey. Có điều gì đó cô không nói |
| 2 | MM2.4 | Odile, Station Lantern | Odile tin hồ sơ tuyệt đối. Niềm tin quá chắc là thứ đầu tiên khiến người chơi gợn |
| 2 | Cảnh đóng C2.8 | Rafa, Ember | Ba lõi dẫn đường cháy đúng phần đường tới Solace. Rafa không tin vào trùng hợp |
| 3 | MM3.1 | Nhem và sổ hải trình, Veyl Waypost | Một hồ sơ tốt thế mà không ai nhận là của mình, và chưa tàu nào từng tới Solace. Nỗi áy náy của Nhem bắt đầu từ đây |
| 3 | MM3.5 | Lõi dẫn đường của Flint | Thêm một lõi cháy đúng chỗ đó |
| 3 | Lời Elias ở C3.5 | The Raft | Người xem sao của The Remainers từng kiểm số liệu trong hồ sơ: mọi con số đều quá tròn, quá đẹp. Elias gọi việc đi tiếp là mồi |
| 3 | Cảnh đóng C3.8 | Maro, Ember | Maro không hề ngăn Ember tìm đường tới Solace. Kẻ thù không sợ điều đó |

Khi mốc đóng chương 4 xong, mọi chỗ gieo trên được gọi lại trong Sổ tay dưới một mục chung.

## 3. Tham số

Mọi số là khởi điểm, chưa đo. Sim và playtest sẽ chỉnh.

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nhóm tác động | Nguồn | Nhãn |
|---|---|---|---|---|---|---|---|
| Số câu tối đa của cảnh ngắn | 3 | 2 đến 4 | Truyện rõ hơn, chặn vòng ngày lâu hơn | Nhanh hơn, dễ cụt ý | Nhịp vòng ngày | ước, playbook gd-story | `MVP` |
| Số câu tối đa của cảnh dài | 8 | 6 đến 10 | Mốc chương nặng ký hơn | Mốc chương nhạt | Nhịp chương | ước | `MVP` |
| Ký tự tối đa một câu hộp thoại | 80 | 60 đến 90 | Viết thoải mái hơn, dễ tràn khi dịch | Phải cắt ý | Hộp thoại, dịch | gốc `10-narrative.md` [S27], gd-ux đã nhận (story.box) | `MVP` |
| Ký tự tối đa một dòng radio | 60 | 40 đến 70 | Đọc không kịp khi đang bay | Thiếu ý | HUD | ước, gd-ux đã nhận (story.radio) | `MVP` |
| Ký tự tối đa một lời bong bóng | 60 | 40 đến 70 | Che màn khi đang làm ca cảng | Thiếu ý | Ca cảng, map nhánh | ước, gd-ux đã nhận (story.bubble) | `MVP` |
| Tốc độ đọc giả định | 17 ký tự mỗi giây | 15 đến 17 | Cảnh tính ra ngắn hơn | Cảnh tính ra dài hơn | Thời lượng cảnh | gốc `10-narrative.md` [S28][S29] | `MVP` |
| Số cảnh phát ở một điểm nghỉ, tính theo từng người | 1 | 1 đến 2 | Truyện dồn, chặn lâu | Truyện giãn | Nhịp vòng ngày | ước | `MVP` |
| Số biến thể của mỗi trạng thái lời nhân vật | 4 | 3 đến 6 | Ít lặp, tốn công viết | Lặp nhanh | Lời trong trạm | quy ước phòng, chưa có nguồn ngoài | `MVP` |
| Số ca cảng đã xong để C1.9 xong | 3 | 2 đến 5 | Chương 1 dài hơn | Lantern tới quá sớm, chưa quen ca cảng | Thời lượng chương 1 | ước, gd-economy chỉnh | `MVP` |
| Số lần cập bến của Maro trước khi lộ mặt | 3 | 2 đến 4 | Nghi ngờ kéo dài, dễ đoán ra | Cú lộ mặt đột ngột | Chương 3 | ước | `Sau MVP` |
| Số đoạn chuyện riêng của mỗi thương nhân | 3 | 2 đến 4 | Thương nhân sâu hơn, tốn công viết | Thương nhân mỏng | Ca cảng | ước | `Sau MVP` |
| Số lần giao đủ hàng để mở đoạn chuyện riêng thứ nhất | 3 | 2 đến 4 | Chuyện riêng tới muộn | Tới khi chưa quen thương nhân | Ca cảng | ước | `Sau MVP` |
| Số lần giao đủ hàng để mở đoạn thứ hai | 6 | 5 đến 8 | Như trên | Như trên | Ca cảng | ước | `Sau MVP` |
| Số lần giao đủ hàng để mở đoạn thứ ba | 10 | 8 đến 14 | Như trên | Như trên | Ca cảng | ước | `Sau MVP` |
| Số vật truyện tối thiểu mỗi chương | 2 | 2 đến 6 | Map nhánh dày truyện | Chương thiếu chứng cứ | Map nhánh | tiêu chí brief GD-022 | `MVP` |

Số tính từ tham số (in bằng script cùng lần soát, xem dòng "Soát" ở Lịch sử thay đổi):

| Đại lượng | Công thức | Kết quả |
|---|---|---|
| Số mốc cả game | 9 + 8 + 8 + 7 + 8 | 40 |
| Số cảnh cả game | 40 cảnh của mốc + 2 cảnh mở chương 4 và 5 + 3 cảnh đánh thức (Ingrid, Linh, Rafa) | 45 |
| Số câu thoại tối đa của các cảnh | 33 mốc ngắn x 3 câu + 7 mốc dài x 8 câu + 2 cảnh mở chương x 8 câu + 3 cảnh đánh thức x 3 câu | 180 câu |
| Thời gian đọc cảnh tối đa | 180 câu x 80 ký tự / 17 ký tự mỗi giây | 847 giây, khoảng 14,1 phút |
| Tỉ lệ so với cả game 12 giờ | 14,1 phút / 720 phút | 2,0% |

- Bảy mốc dài là C1.1, C1.9, C2.8, C3.8, C4.7, C5.7, C5.8.
- Lời theo trạng thái và chuyện riêng của thương nhân không phải cảnh (luật 14, 25), không nằm trong 180 câu. Amara và Yusuf tới bằng mốc nên không có cảnh đánh thức riêng.
- Núm nối: "Số ca cảng đã xong để C1.9 xong" là núm duy nhất của hệ thống này chạm thời lượng chương, các mốc khác đi theo tiến độ của map và trạm.
- Ba ngưỡng số lần giao đủ hàng chỉ là một nửa điều kiện của chuyện riêng thương nhân. Nửa kia là mốc truyện ở cột "Mở sau mốc" của bảng đề cương, mục 2.6 (luật 25).

## 4. Trường hợp biên

| # | Tình huống | Xử lý | Nhãn |
|---|---|---|---|
| 1 | Người chơi tới cửa D1 của Station Cinder trước khi có Bộ kích nguồn | Cửa không mở. Một dòng radio của Ingrid gợi ý về xưởng. Không có cảnh | `MVP` |
| 2 | Đang kéo buồng ngủ đông thì hết Oxy và bị kéo về | Buồng nằm lại vị trí gốc ở chuyến sau (luật 5). Người trong buồng vẫn sống. Vật nhiệm vụ nhỏ trong túi: chọn giữ lại thì về trạm, không chọn thì về khe V của nó ở chuyến sau | `MVP` |
| 3 | Người chơi bỏ qua mọi cảnh | Mốc đã xong từ trước khi cảnh phát (luật 19). Sổ tay vẫn đủ tóm tắt và dòng mục tiêu | `MVP` |
| 4 | Người chơi không bao giờ làm ca cảng | Mốc cần ca cảng (C1.8, C1.9, C2.3, C3.2, C3.3, C3.4, C3.8, C5.1) đứng ở trạng thái Mở vô thời hạn. Sổ tay ghi rõ việc cần làm. Không có đường vòng | `MVP` |
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
| 16 | Giao đơn của Lantern (C2.3) không đủ trong ca | Bram quay lại ở ca sau với cùng đơn. Không giới hạn số lần | `Sau MVP` |
| 17 | Người chơi xua BS-1 hoặc BS-2 thay vì hạ | Mốc vẫn xong. Lời nhân vật có biến thể cho cách kết đó. Với BS-2, Amara đứng trong Lantern nhìn thấy và có một lời riêng ở lần gặp đầu | `MVP` cho BS-1 |
| 18 | Mảnh lõi dẫn đường của Cinder nhặt từ chương 1, chưa có chỗ dùng | Nằm trong kho tới khi sửa khoang dẫn đường KH08. Không bán được, không mất | `MVP` |
| 19 | Sửa xong KH06 mà chưa sửa KH07 | C1.7 chưa xong. Dòng mục tiêu Sổ tay ghi: sửa cảng | `MVP` |
| 20 | Tàu có điều kiện truyện cập bến trong ngày người chơi bỏ ca cảng | Tàu đó vào lịch lại ở ngày sau. Mốc không mất (luật 20 của `tram-va-cang.md`) | `MVP` |
| 21 | Host thoát khi một mốc vừa xong giữa ngày | Thế giới về điểm lưu gần nhất (C10, K23). Mốc xong sau lần lưu đó quay lại trạng thái Mở, vật manh mối nhặt sau lần lưu đó quay lại Tại chỗ | `MVP` |
| 22 | Mọi người chơi đều ở ngoài khi một mốc ở trạm xong | Mốc xong ngay. Cảnh chờ từng người ở điểm nghỉ kế tiếp của họ | `MVP` |

## 5. Ràng buộc của luật

- Không thể bỏ lỡ mốc: điều kiện của mốc chỉ dựa vào map nhánh, trạm và cảng, là ba nơi không sinh lại.
- Không thể mất vật manh mối hay vật nhiệm vụ: luật 4, 5 và 20.
- Không có khóa cứng do tiêu vật: xem bảng "Vật nhiệm vụ và chỗ tiêu" ở mục 6.
- Trần chặn vòng ngày: mỗi điểm nghỉ phát nhiều nhất một cảnh cho mỗi người. Cảnh ngắn dài nhất 3 x 80 / 17 = 14 giây đọc. Cảnh dài dài nhất 8 x 80 / 17 = 38 giây đọc.
- Điều không có: thua vì truyện, người vớt chết, lựa chọn hội thoại, kết thứ hai, tới được Solace.

- Số ngày tối thiểu của chuỗi mốc từng chương `MVP` cho chương 1. Tính tay theo luật, chưa sim.
- Luật dùng để tính: một ngày tối đa hai chuyến và một ca cảng, ca cảng sau các chuyến (K22). Ngày chỉ sang khi ngủ (K23). Người vớt trong buồng tỉnh đầu ngày kế tiếp (luật 22). Lịch tàu sinh đầu ngày nên tàu mới mở vào lịch từ ngày kế tiếp.
- Có tính hai bước chế qua đêm mà chuỗi mốc bắt buộc phải qua theo `vat-pham.md`: Bộ kích nguồn (RCP-205) ở chương đầu và Lõi dẫn hướng rời bãi vỡ (RCP-207) ở chương cuối. Mốc C2.4 đi đường Phao kéo, không cần bước qua đêm nào. Máy cắt thân tàu cho chương 4 chế được từ chương 3.
- Không tính thời gian gom vật liệu và tiền, nên đây là sàn, thực tế dài hơn.

| Chương | Sàn ngày | Chuỗi theo ngày |
|---|---|---|
| 1 | 7 | Ngày 1: C1.1, C1.2, C1.3, C1.4. Ngày 2: Ingrid tỉnh, C1.5, đặt chế Bộ kích nguồn qua đêm. Ngày 3: vào Cinder lần hai, C1.6. Ngày 4: Linh tỉnh, C1.7. Ngày 5: C1.8 và ca thứ nhất. Ngày 6: ca thứ hai. Ngày 7: ca thứ ba, C1.9 |
| 2 | 5 | Ngày 1: C2.1, C2.2. Ngày 2: ca có TA03, C2.3, sửa KH10 và KH11, chế Phao kéo. Ngày 3: bắt con cỡ M, C2.4. Ngày 4: C2.5, vào Wick, C2.6, C2.7. Ngày 5: Rafa tỉnh, sửa KH08, nộp STY-103, C2.8 |
| 3 | 8 | Ngày 1: C3.1. Ngày 2: ca có TA06. Ngày 3: Skiff đón Yusuf, C3.2, sửa bến. Ngày 4: C3.3. Ngày 5: C3.4. Ngày 6: C3.5, vào Flint, C3.6. Ngày 7: C3.7. Ngày 8: C3.8 |
| 4 | 3 | Ngày 1: cảnh mở, C4.1, C4.2. Ngày 2: C4.3, C4.4, C4.5. Ngày 3: C4.6, C4.7 |
| 5 | 3 | Ngày 1: cảnh mở, ca cảng có TA06, C5.1. Ngày 2: C5.2, chuyến một vào Rig với C5.3 và C5.4, chuyến hai với C5.5 và C5.6, chế ENG-105 qua đêm. Ngày 3: sửa giai đoạn 5, C5.7, C5.8 |

- Tổng sàn: 26 ngày. Độ dài một ngày lấy theo khung mục 9 (chương đầu 15 đến 20 phút, chương cuối 25 đến 30 phút, ba chương giữa nội suy đều). Cả game: khoảng 8,3 đến 10,4 giờ, thấp hơn mục tiêu 12 đến 15 giờ.
- Riêng chương đầu: 7 ngày là khoảng 1,8 đến 2,3 giờ, chạm trần mục tiêu 1,5 đến 2 giờ của khung. Hạ núm số ca cảng của C1.9 xuống hai thì chương đầu còn 6 ngày, khoảng 1,5 đến 2 giờ.
- Chuỗi mốc là sàn cứng: không số người chơi nào xong chương đầu trước ngày 7. Sàn không đổi theo số người chơi.
- Lịch sử con số này: bản đầu ghi 6, 5, 8, 3, 4. Chương cuối sửa còn 3 vì hai chuyến vào Warden Rig làm được trong một ngày. Chương đầu sửa thành 7 ở vòng QA hai vì Bộ kích nguồn chế qua đêm. Tổng vẫn là 26.
- gd-economy đã đưa bộ số đầu (6, 5, 8, 3, 4) vào sim. Kết quả họ báo với bộ số đó, kịch bản trung bình: chơi một mình không chạm sàn (chương đầu khoảng 1,84 giờ, cả game khoảng 14,1 giờ trong 44 ngày). Nhóm hai và bốn người chạm sàn ở mọi chương, xong game ở ngày 27, bằng khoảng 72% thời gian chơi một mình, cao hơn mục tiêu cũ của khung.
- K25 buộc mỗi mốc đóng chương chờ giai đoạn động cơ của chương đã lắp. Việc lắp không thêm ngày vào sàn khi vật liệu và linh kiện đã có sẵn. Sàn không tính thời gian chờ hàng đặt ở shop.
- GDM đã chốt giữ sàn ngày và đổi mục tiêu co-op của khung thành 60 đến 75% (log dòng 69). Bảng dưới chỉ để tham khảo, không áp.

Chỗ hạ sàn được `Sau MVP` trừ dòng đầu. Tính tay theo cùng luật với bảng trên:

| Chỗ hạ | Đổi gì | Rút được | Mất gì ở truyện |
|---|---|---|---|
| Núm C1.9 | Số ca cảng để C1.9 xong từ 3 xuống 2 | 1 ngày ở chương 1 | Người chơi mới quen ca cảng ít hơn một ca trước khi sang chương 2 |
| C2.5 | Bỏ điều kiện ngày kế tiếp, lối vào Wick mở ngay khi C2.4 xong | 1 ngày ở chương 2 | Mất một nhịp nghỉ sau mẫu sống đầu tiên |
| C3.2 | Yusuf về Ember cùng tàu của Dromm ngay trong ca đó, không cần chuyến Skiff ngày sau | 1 ngày ở chương 3 | Skiff mất một vai trong truyện, giống cách Amara tới |
| C3.7 | Bỏ điều kiện ngày kế tiếp, cú lật phát ở pha Cuối ngày của ngày nộp mẫu | 1 ngày ở chương 3 | Mất đêm chờ kết quả, cú lật tới gấp hơn |

- Áp cả bốn chỗ thì sàn còn 6, 4, 6, 3, 3, tổng 22 ngày thay cho 26.
- Chương 4 và 5 không còn chỗ hạ mà không đổi số chuyến của map nhánh.

## 6. Yêu cầu cho engineer và tool

| Thứ | Yêu cầu | Nhãn |
|---|---|---|
| Dữ liệu mốc | Bảng: mã mốc, chương, mốc đứng trước, danh sách điều kiện (mỗi điều kiện gồm loại và tham số, tất cả phải cùng đúng), nơi, mã cảnh, danh sách thứ được mở | `MVP` |
| Dữ liệu cảnh | Bảng: mã cảnh, mốc sở hữu hoặc điều kiện riêng (hai cảnh mở chương 4 và 5), loại (ngắn, dài), kênh, danh sách mã câu | `MVP` |
| Dữ liệu vật truyện | Bảng: mã truyện, ID vật của `vat-pham.md`, loại (manh mối, nhiệm vụ), map nhánh, khe, mốc làm nó hiện, mã mục Sổ tay, khoang nhận nếu là vật nhiệm vụ | `MVP` |
| Loại điều kiện cần có | Bắt đầu thế giới. Tới một lối vào hoặc một khu. Một khoang Hoạt động. Một buồng ngủ đông qua cửa khí. Boss xong (hạ hoặc xua). Đã nhặt một vật manh mối. Đã nộp một vật nhiệm vụ. Một vật hoặc sinh vật về tới kho. Số ca cảng đã xong. Giao đủ đơn của một tàu. Một tàu cập bến lần thứ n. Một ca cảng có một tàu đã xong. Sự cố đầu tiên xảy ra. Đã mua một món ở shop. Ngày kế tiếp sau một mốc. Giai đoạn động cơ xong. Mọi người có mặt xác nhận. Lần đầu vào một dải (chỉ dùng cho radio và sự kiện hình mở chương 2, 3) | `MVP` |
| Lưu | Trạng thái mọi mốc, mọi vật truyện, số lần cập bến của từng tàu có tên, số lần giao đủ hàng cho từng thương nhân có tên, và với mỗi người chơi: hàng chờ cảnh và danh sách cảnh đã xem. Lưu theo thế giới của host | `MVP` |
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

- Cả 23 vật truyện đã có ID trong `vat-pham.md`. Mười vật manh mối mới được gd-items cấp ID ở vòng QA đầu: STY-111, STY-211 tới STY-213, STY-311 tới STY-313, STY-411, STY-412, STY-414.

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
| Tàu đầu tiên (C1.8) | Tàu Oru nhỏ, chắp vá, cập bến lệch | Động cơ lọc xọc | Trong ca: lời bong bóng của Tikko. Cuối ngày: cảnh 3 câu | `MVP` |
| Sóng của Lantern (C1.9) | Cuối ngày: đèn khoang liên lạc nhấp theo giọng nói | Giọng người lẫn nhiễu | Cảnh 8 câu | `MVP` |
| Cú lật Driftlife (C3.7) | Ảnh phóng to cái thẻ và vết cắt mô | Im lặng, bỏ nhạc nền | Cảnh 3 câu | `Sau MVP` |
| Maro lộ mặt (C3.8), trong ca cảng | Lớp cải trang rơi, dáng đứng đổi hẳn. Ca vẫn chạy | Nhạc cảng tắt giữa chừng | Ba lời bong bóng | `Sau MVP` |
| Sau khi Maro đi (C3.8), pha Cuối ngày | Cả trạm ngồi lại, đèn khoang liên lạc nhấp theo lời Serith | Không nhạc | Cảnh 8 câu | `Sau MVP` |
| Vào dải Giữa lần đầu | Một trạm để đèn sáng ở xa | Không | Một dòng radio của Bram | `Sau MVP` |
| Vào dải Xa lần đầu | Liên lạc nhiễu, bóng một cỗ máy rất lớn đi ngang trong mây khí | Tiếng rè | Không lời | `Sau MVP` |
| Những dãy buồng (C4.2) | Main Cryo Deck của Cradle, dãy buồng tắt kéo dài hết màn hình | Chỉ tiếng thở của người chơi | Không lời | `Sau MVP` |
| Không có gì ở đó (C4.7) | Màn hình khoang dẫn đường: chỗ lẽ ra có Solace là một khoảng trống | Tiếng hộp ghi rè rồi tắt | Cảnh 8 câu, dòng mục tiêu trong Sổ tay đổi | `Sau MVP` |
| Rời neo (C5.7) | Bộ neo nhả, hàng tàu The Veyl đứng nhìn | Động cơ chính | Cảnh 8 câu | `Sau MVP` |
| Ngoài bãi vỡ (C5.8) | Bầu trời sao sạch, lần đầu trong game không có mảnh vỡ | Nhạc chủ đề đủ bài | Cảnh 8 câu, màn hình tên | `Sau MVP` |

- Yêu cầu cho gd-ux: hộp thoại 2 dòng có tên và chân dung người nói, dòng radio ở mép màn hình, lời bong bóng trên đầu nhân vật, Sổ tay có ba phần (mục tiêu, mốc đã xong, vật manh mối), dấu báo có cảnh chờ ở nhân vật.
- Màn và bước hướng dẫn theo `ux-ui.md`: hộp thoại truyện là UI-53, Sổ tay là UI-19. Cách bỏ qua cảnh dạy ở bước T30, cách mở Sổ tay ở T02 và T29, dấu của vật manh mối ở T29.

## 7b. Cảm giác

- Tham chiếu: cách Dave the Diver chen cảnh ngắn vào giữa vòng ngày mà không dừng vòng. Cách Hardspace: Shipbreaker kể bằng radio và đồ nhặt trong xác tàu. Cách Spiritfarer gắn một tính năng của con tàu với một con người.
- Phản tham chiếu: không cắt cảnh dài không bỏ qua được. Không hộp thoại chân dung nối nhau quá 8 câu. Không nhân vật giảng giải lịch sử thế giới.
- Phản hồi: nhặt vật manh mối có tiếng và thông báo trong vòng một nhịp. Cảnh hiện ngay khi vào điểm nghỉ, không chờ. Bỏ qua là hết ngay, không chuyển cảnh mờ dần dài.
- Nhịp cảm xúc: mốc mất mát (C1.1, C3.6, C4.2, C4.7) không có hài và không có nhạc cảng. Hài chỉ ở trong trạm và ở ca cảng.
- Kết mở không được là kết hụt: cảnh rời neo phải cho cảm giác thắng (thoát, mang được người, phá được Rig) trước khi cảnh cuối đặt câu hỏi.

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
| 11 | Mỗi vật truyện có đủ ID trong `vat-pham.md`, khe trong `map.md` và mốc làm nó hiện | Validator của gd-tech, chưa có. Kiểm tay ở vòng QA hai: ID đủ 23 trên 23, khe khớp `map.md` mục 2.10 |
| 12 | Chạy mô phỏng chuỗi mốc từng chương theo bảng "Vật nhiệm vụ và chỗ tiêu": không có trạng thái nào mà mốc đang mở cần một vật đã bị tiêu | Test của gd-tech |
| 13 | Hai người chơi: mốc xong từ người nào cũng chỉ ghi một lần, mỗi người thấy mỗi cảnh nhiều nhất một lần | Khi có build |
| 14 | Chương 1 không xong trước ngày 7 với mọi số người chơi, theo bảng sàn ngày ở mục 5 | Sim kinh tế của gd-economy. Họ đã đưa bộ số đầu vào (chương 1 là 6), cần đổi sang 7, 5, 8, 3, 3 |

- Tiêu chí 1, 3, 4 đã kiểm bằng script, kết quả ở dòng "Soát" trong Lịch sử thay đổi. Tiêu chí 2 đã đối chiếu tay.
- Tiêu chí 5 tới 7, 10 và 13 chưa kiểm được vì chưa có build. Tiêu chí 8 và 9 để gd-qa làm. Tiêu chí 11, 12, 14 chờ vai khác.

## 9. Lệch khỏi tham chiếu (Dave the Diver)

| Điểm | Dave làm thế nào | Game này làm gì | Vì sao lệch |
|---|---|---|---|
| Số chương | 7 chương, mỗi chương thêm một kiểu chơi (`10-narrative.md` [S6], bài đánh giá) | 5 chương | Log GDM dòng 7: 5 vừa với 3 dải và 2 map nhánh lớn |
| Nhân vật mở tính năng | Mỗi NPC mở một tính năng qua quest hoặc chương: Duff, Cobra, Otto [D8][D10] | Giữ cấu trúc: 5 người vớt, quest là sửa khoang của người đó | Nối người vớt với sửa trạm (P2), theo `tram-va-cang.md` |
| Phản diện | John Watson ở Chapter 2 tin Dave đánh bắt quá mức [D11][D17]. Mối đe dọa các chương sau: không tìm thấy nguồn | The Wardens xuyên suốt, lộ dần từ chương 2 tới 5 | Lead chốt tai nạn là âm mưu có chủ đích, cần một phản diện giữ được cả game |
| Chủ đề môi trường | Mức nhẹ, nói qua nhân vật, farm là đường bền vững [D8][D14][D18] | Cùng mức với luật chơi (không phạt), nặng hơn ở truyện: phản diện và lời hứa cuối đều xoay quanh nó | Lead chốt gốc tai nạn là lòng tham của nhân loại |
| Giọng | Hài là chính (`10-narrative.md` nguyên lý 8) | Nền nghiêm, hài nhẹ từ tính cách | Lead chốt (B9) |
| Cảnh truyện | Cảnh cắt hài, có minigame riêng | Cảnh tối đa 8 câu, bỏ qua được, không minigame truyện | Co-op không tạm dừng toàn cục (C7), và sức nhóm |
| Kết | Không tìm thấy nguồn mô tả kết của Dave | Kết mở, để ngỏ cho hậu bản | Lead chốt 2026-11-20 |
| Số người chơi | Một người | 1 đến 4 người, truyện là tiến trình chung | Lead chốt |
| Điểm yếu của Dave được tránh | Bị chê kéo dài quest cho truyện dài ra (`10-narrative.md` [S5]) | Quest là một việc sửa khoang, truyện không khóa vòng ngày | Luật 11 và 12 |

Chưa có bằng chứng game này không tệ hơn ở phần truyện. Chỉ đo được khi có build và playtest.
| 12 | Đã chốt: giữ sàn ngày, mục tiêu co-op của khung đổi thành 60 đến 75% (log GDM dòng 69) | Không | Đã xong || 11 | Đã chốt bằng K24 (log GDM dòng 77): bản lưu ở ngày cuối với mọi mốc đã xong, Ember còn ở neo, cảnh kết xem lại từ Sổ tay | Không | Đã xong || 9 | Đã chốt: giữ việc Odile muốn tới Solace, đó là niềm tin của nhân vật (log GDM dòng 73) | Không | Đã xong || 8 | Đã chốt bằng K25 (log GDM dòng 68): chương đóng khi mốc đóng chương xong, và mốc đó chỉ xong khi giai đoạn động cơ của chương đã lắp | Không | Đã xong || 5 | Đã chốt: không lồng tiếng, mỗi nhân vật một âm giọng ngắn (log GDM dòng 80) | Không | Đã xong || 4 | Đã chốt: thoại gốc tiếng Việt, tên riêng tiếng Anh (log GDM dòng 80) | Không | Đã xong || 1 | Đã chốt: vụ phục kích đổi tên thành The Scattering ở mọi file (log GDM dòng 75). Tên mới chưa tra trùng vì công cụ tìm web hết hạn mức | Tra trùng khi có lại công cụ | gd-story |
## 10. Câu hỏi mở

Câu nào đã có quyết định thì ghi số dòng trong `log-gdm-tu-quyet.md`. Còn mở đúng một câu: tên game, để Lead chọn.

| # | Câu hỏi | Đề xuất | Ai quyết |
|---|---|---|---|
| 1 | Đã chốt: vụ phục kích đổi tên thành The Scattering ở mọi file vì tên cũ trùng một sự kiện lớn của Dungeons & Dragons (log GDM dòng 75). Tra web tên mới: không thấy trùng, có một game tên gần giống (mục 12) | Không | Đã xong |
| 2 | Đã chốt: giữ tên Solace, là từ thông dụng (log GDM dòng 75) | Không | Đã xong |
| 3 | Tên game | Ba đề xuất ở mục 12: Cradlefall, Wakebound, Breathline | Lead |
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
| Cảnh trong khu chân không của map nhánh và trong ca cảng | Lời bong bóng và radio, không chặn điều khiển | Như 1 người | Như 1 người |
| Vật manh mối | Nhặt là ghi Sổ tay | Ai nhặt cũng ghi cho cả nhóm | Như 2 hoặc 3 |
| Vật nhiệm vụ | Tự mang về | Ai mang cũng được, chuyền tay được | Như 2 hoặc 3 |
| Cảnh tỉnh dậy | Ba buồng tắt | Một hoặc hai buồng tắt | Không buồng tắt |
| Cách nhân vật xưng hô | Gọi tên người chơi hoặc "Ember" | Nói với cả nhóm thì gọi "Ember". Nói với người đang đứng trước mặt thì gọi tên người đó | Như 2 hoặc 3 |

- Không mốc, quest hay cảnh nào cần đúng N người. Không nội dung truyện nào chỉ co-op mới có (P3).
- Câu thoại không chứa từ chỉ số người chơi như "một mình", "cả hai", "cả bốn", "các bạn". Ngoại lệ duy nhất là ba biến thể cảnh tỉnh dậy, và chúng không có lời.
- Trong trạm ngoài giờ ca cảng và trong khu có khí không có nguy hiểm, nên hộp thoại không tạm dừng thời gian khi co-op vẫn an toàn.
- Khi ca cảng đang chạy, hộp thoại không hiện với bất kỳ ai trong nhóm (luật 21, khớp luật 25 và 26 của `ux-ui.md`). Mỗi mốc xảy ra trong ca có hai bản lời: bản bong bóng ngắn cho trong ca và bản cảnh cho sau ca.
- Người đã về trạm và đang chờ đồng đội (C9) xem được cảnh đang chờ của mình trong lúc chờ.
- Người vào sau và người rời phiên: mục 2.7.

## 12. Bảng tên riêng và tên game

- Mọi tên là [TẠM].
- Tra trùng làm bằng tìm web ngày 2026-11-20, không phải tra cơ sở dữ liệu nhãn hiệu. Kết quả "không thấy" nghĩa là tìm web không ra, chưa phải bảo đảm pháp lý.
- Tên các khu hiện như địa danh trong map nhánh (Lantern Outer Ring, Collapsed Hold, Holding Pens và các khu khác) do gd-world đặt ở bảng A01 đến A05 của `map.md`, gd-story đã duyệt (log GDM dòng 74). File này dùng đúng các tên đó, chưa tra trùng.

### Tên game: 3 đề xuất

Mã tạm EMBER vẫn dùng cho tới khi Lead chọn.

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

### Toàn bộ tên riêng

| Nhóm | Tên |
|---|---|
| Thế giới | United Accord, Cradle, Seed Station, Solace, The Scattering, The Wake, The Lattice, Lodestar Survey, Tally |
| Trạm con | Station Ember, Station Lantern, Station Cinder, Station Wick, Station Flint, The Raft |
| Nơi khác (tên vùng do gd-world giữ) | Ember Anchorage, Shepherd Belt, Glass Nebula, Veyl Waypost, Warden Rig |
| Chủng tộc | The Veyl (tên chung), Oru, Sennari, Brakk, Aelith, Kesh, The Wardens |
| Sinh vật | Driftlife, The Kept Herds (cách The Wardens gọi). Tên từng loài và boss do gd-combat giữ |
| Tổ Ember | Noor Haddad, Jonas Weber, Mei Tanaka, Tariq Bello |
| Người vớt | Ingrid Halvorsen, Linh Tran, Rafael Ortega, Amara Okafor, Yusuf Demir |
| Người khác | Odile Laurent, Bram Kowalski, Elias Vance, Wren |
| Thương nhân | Tikko, Ilsume, Vaeth, Dromm, Nhem |
| The Wardens | Serith, Maro |
| Phe | The Remainers |
| Vật dụng (khung đã có) | Recall Beacon, Skiff |

Quy tắc đặt tên: trạm con mang tên một thứ giữ lửa hoặc giữ sáng (Ember, Lantern, Cinder, Wick, Flint). Tên The Veyl ngắn, hai âm tiết, không có nghĩa trong tiếng Anh. Tên người lấy theo quốc gia gốc.

## 13. Voice sheet

### Giọng chung

- Nền nghiêm: sinh tồn, mất mát, việc phải làm. Câu ngắn, nói việc trước, cảm xúc nằm ở điều không nói.
- Hài nhẹ đến từ tính cách và từ chỗ lệch văn hóa giữa các loài, không từ câu đùa. Hài không có mặt ở mốc mất mát.
- Nhân vật nói với nhau như người cùng làm việc, không giảng giải thế giới.
- The Wardens nói bằng từ của người làm vườn. Không bao giờ lên giọng, không bao giờ đe dọa thẳng.

### Điều cấm

- Chữ số, tên phím, tên nút, tên biến, thuật ngữ luật chơi trong lời nhân vật.
- Từ chỉ số người chơi (mục 11).
- Emoji, gạch dài, dấu chấm phẩy.
- Câu dài quá giới hạn của kênh: 80 ký tự cho hộp thoại, 60 cho bong bóng và radio. Cảnh dài quá số câu ở mục 3.
- Nhân vật tự kể tiểu sử của mình thành đoạn.
- Lời trách người chơi vì đã săn Driftlife (B10).
- Tiếng lóng thời nay và nhắc tới thương hiệu thật.
- Trước chương 4, không nhân vật nào nói thẳng rằng Solace không có thật. Nghi ngờ về hồ sơ và nguồn của nó thì được gieo theo bảng mục 2.9.

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
| Serith | Phẳng, từ tốn, chắc nịch | Giữ, tỉa, dọn, làm sạch | Lên giọng, xin lỗi |
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
| VO_LIN_01 | Linh | Ông ấy vừa khen tàu của ta. Hoặc chê. Từ đó có hai nghĩa. | Ca cảng, dịch cho Tikko | Bong bóng |
| VO_LIN_02 | Linh | Nói chậm thôi. Lịch sự với họ rẻ hơn sửa tàu. | Trước khi Ilsume cập bến | Bong bóng |
| VO_LIN_03 | Linh | Tôi dịch đúng từng chữ. Không ai dịch cho tôi ý đồ. | Lời thú nhận ở chương 4 | Hộp thoại |
| VO_RAF_01 | Rafa | Sao không nói dối. Chỉ bản đồ mới nói dối. | Vừa được đánh thức | Hộp thoại |
| VO_RAF_02 | Rafa | Tôi vẽ đường, Ember đi. Chia việc thế cho tôi dễ ngủ. | Mở dải Xa | Hộp thoại |
| VO_RAF_03 | Rafa | Ngoài kia tối lắm. Nhưng tối thì mới thấy đèn nhà. | Chào đầu ngày | Hộp thoại |
| VO_AMA_01 | Amara | Nhẹ tay thôi. Nó sợ ta hơn ta sợ nó. | Nhận con cỡ M đầu tiên | Hộp thoại |
| VO_AMA_02 | Amara | Tôi mang cả một kho giống lên tàu. Giờ còn cuốn sổ này. | Chuyện riêng | Hộp thoại |
| VO_AMA_03 | Amara | Chúng không bảo hộ đàn. Chúng chăn đàn. | Cú lật, C3.7 | Hộp thoại |
| VO_YUS_01 | Yusuf | Tàu cập bến là khách. Khách thì phải có trà. | Vừa về Ember | Hộp thoại |
| VO_YUS_02 | Yusuf | Bốc nhanh lên! Tàu không đợi, tôi thì đợi còn ít hơn. | Trong ca cảng | Bong bóng |
| VO_YUS_03 | Yusuf | Tôi đã mời nó trà. Trà ngon của tôi. | Sau C3.8 | Hộp thoại |
| VO_TIK_01 | Tikko | Cái có răng này! Loài người dùng chải đầu hay đánh nhau? | Thấy một cái lược | Bong bóng |
| VO_TIK_02 | Tikko | Trạm sáng đèn giữa bãi vỡ. Tikko thích. Tikko ghé. | Cập bến lần đầu | Bong bóng |
| VO_TIK_03 | Tikko | Hôm nay Tikko trả thêm. Vì Ember vẫn còn đây. | Chương 5 | Bong bóng |
| VO_NHE_01 | Nhem | Tin là hàng. Hàng của tôi chưa giết ai. Tôi đã tưởng vậy. | Xem MM3.1 | Hộp thoại |
| VO_NHE_02 | Nhem | Tôi chuyển nó đi như mọi bản tin khác. Không mở, không hỏi. | C4.6 | Hộp thoại |
| VO_NHE_03 | Nhem | Lời nói dối đi bằng mạng của tôi. Sự thật cũng đi đường đó. | C5.2 | Hộp thoại |
| VO_MAR_01 | Maro | Thương hội chúng tôi rất quan tâm tới trạm này. Từng người. | Cập bến lần thứ nhất | Bong bóng |
| VO_MAR_02 | Maro | Giá này hào phóng, tôi biết. Coi như phí làm quen. | Cập bến lần thứ hai | Bong bóng |
| VO_MAR_03 | Maro | Trạm này đã được đếm. Việc còn lại chỉ là dọn. | C3.8 | Bong bóng |
| VO_SER_01 | Serith | Loài người ăn hết một thế giới rồi đi tìm thế giới khác. | Lời phát ở C4.7 | Hộp thoại |
| VO_SER_02 | Serith | Chúng ta không giết. Chúng ta tỉa. | C5.5 | Bong bóng |
| VO_SER_03 | Serith | Đàn này được giữ. Bãi này được giữ. Loài người thì không. | C5.5 | Bong bóng |
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
| SO_C1_8_MT | Chờ tàu đầu tiên cập bến trong ca cảng. | Mục tiêu |
| SO_C1_8_TT | Tikko, dân gom phế liệu Oru, là khách đầu tiên. | Tóm tắt |
| SO_C1_9_MT | Làm thêm ca cảng. Khoang liên lạc đang dò sóng. | Mục tiêu |
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
| SO_BUONG_PC1 | Noor Haddad | Noor Haddad. Buồng tắt khi trạm còn trôi. |
| SO_BUONG_PC2 | Jonas Weber | Jonas Weber. Không tỉnh lại. |
| SO_BUONG_PC3 | Mei Tanaka | Mei Tanaka. Buồng mất khí giữa giấc ngủ. |
| SO_BUONG_PC4 | Tariq Bello | Tariq Bello. Đèn buồng tắt trước khi trạm gọi dậy. |

## 14. Khối GAME STORY (dán vào một ô Sheet)

Tương lai xa. Loài người vắt kiệt Trái Đất, Hệ Mặt Trời sụp đổ. Khi ấy con người đã giao thương từ lâu với nhiều chủng tộc ngoài hành tinh, gọi chung là The Veyl. Thứ họ thiếu là một hành tinh để ở.

Trên mạng tin của thương nhân The Veyl xuất hiện một hồ sơ khảo sát: một hành tinh sống được, giàu khoáng, tên Solace, kèm đường tới đó. Các quốc gia lập United Accord, đóng tàu mẹ Cradle, chở những người được chọn lọc, ngủ đông, lên đường.

Hồ sơ đó là mồi. Nó do The Wardens dựng lên, một chủng tộc trong The Veyl tự xưng là kẻ canh giữ, ghét loài người vì đã phá hủy thế giới của chính mình. Đường trong hồ sơ dẫn Cradle vào điểm phục kích và tàu mẹ nổ tung. Vụ đó gọi là The Scattering. Cradle chỉ kịp phóng ra các Seed Station, mỗi trạm bốn buồng ngủ đông. Phần lớn vỡ theo.

Nhiều năm sau, trên Station Ember, người chơi tỉnh dậy: một mình, hoặc cùng tối đa ba người nữa. Buồng nào không may hỏng sau vụ nổ thì người bên trong đã chết. Trạm đang trôi giữa bãi vỡ, mất liên lạc, không biết Solace ở hướng nào.

Mỗi ngày họ mặc bộ đồ, mang bình Oxy ra ngoài: nhặt phế liệu của Cradle, khai khoáng, bắt sống hoặc hạ Driftlife, những sinh vật trôi trong chân không. Oxy là sợi dây buộc họ vào trạm. Thứ mang về dùng để sửa từng khoang, chế trang bị, nuôi Driftlife, và đóng kiện bán cho tàu thương nhân The Veyl cập bến Ember, đổi lấy Tally.

Trong xác các trạm con khác còn những buồng ngủ đông đang chạy, và ở những nơi còn người sống có những người muốn sang Ember. Mỗi người vớt về là một chuyên gia và trả lại cho trạm một năng lực: xưởng, liên lạc, dẫn đường, nghiên cứu, cảng.

Càng đi xa, sự thật càng lộ. Vết phá đến từ bên ngoài. Một thương nhân lạ ghé cảng chỉ để đếm người. Driftlife mang thẻ và sẹo thu hoạch: The Wardens không bảo hộ đàn, chúng chăn đàn, và đang tháo dỡ cả bãi vỡ. Rồi hộp ghi hành trình của Cradle cho biết điều tệ nhất: ở chỗ lẽ ra có Solace không có gì cả. United Accord cũng không vô can: họ tin một hồ sơ không kiểm chứng vì nó hứa đúng thứ họ thèm, và đã lên sẵn kế hoạch mở mỏ.

Mục tiêu cuối không còn là tới Solace. Đó là sửa xong động cơ chính, giành lấy bản đồ sao thật từ tay The Wardens, và rời bãi vỡ trước khi bị dọn. Game kết mở: Ember rời neo mà chưa có đích, mang theo một dấu vết cho thấy mồi được dựng từ một bản khảo sát có thật, và một lời hứa: nếu tìm được, sẽ dựng khác đi.

## Lệch với vai khác (cập nhật ở vòng QA 2, 2026-11-20)

Đang mở:

| # | Với | Lệch | Đề xuất | Tình trạng |
|---|---|---|---|---|
| 1 | gd-quan | K25 đã chốt nghĩa của qua chương (log GDM dòng 68). File này đã thêm điều kiện giai đoạn động cơ vào bốn mốc đóng chương. Lần cập bến thứ ba của TA08 cần thêm điều kiện giai đoạn 3 đã lắp | gd-quan thêm điều kiện đó vào luật 38, và cho TA06 vào lịch ở ngày đầu chương 5 để mốc C5.1 xong được | Đã gửi gd-quan |
| 2 | gd-economy, gd-tech | Sàn ngày của chuỗi mốc là 7, 5, 8, 3, 3 (mục 5). Sim kinh tế đang dùng bộ số đầu 6, 5, 8, 3, 4. Với sàn, nhóm bốn người hết game bằng khoảng 72% thời gian chơi một mình, vượt mục tiêu khung | Sim đổi sang bộ số mới. GDM đã chốt giữ sàn, mục tiêu co-op 60 đến 75% (log dòng 69) | Đã gửi gd-economy |
| 3 | gd-tech | `ky-thuat.md`: schema mốc có một điều kiện, cảnh chưa tách theo người, vật truyện chưa có loại, khe, mốc hiện, khoang nhận. Validator chưa kiểm cặp mã truyện với ID vật và khe | Theo mục 6 của file này | Đã gửi gd-tech |
| 4 | Khung | Khung mục 7 chương 2 còn viết "bắt sống loài lớn". Cỡ L không bắt sống được | Viết "cỡ M" như mốc C2.4 | Xong, khung đã sửa (log GDM dòng 76) |
| 5 | Khung | K24 ghi bản lưu "ngay trước khi rời neo". Luật 26 của file này đặt bản lưu sau khi C5.7 và C5.8 đã xong, không rời neo lần nữa | Sửa K24 thành "ở ngày cuối, sau cảnh kết", hoặc GDM chọn cách đọc khác thì file này sửa theo | Xong, K24 đã sửa (log GDM dòng 77) |
| 6 | gd-character | `ho-so-nhan-vat.md` luật 8 không cho viết Odile "tới Solace". File này giữ, có chủ ý | Giữ: đó là niềm tin của Odile tới mốc C4.7. Mục 10 câu 9 | Xong, giữ (log GDM dòng 73) |
| 7 | gd-character | File luật người chơi của gd-character còn cho người rời phiên giữa chuyến giữ túi như khi về bằng cửa khí. Khung C10: tính như bị kéo về | gd-character sửa theo C10. File này đã theo C10 (biên 13) | Báo GDM, gd-character là subagent |
| 8 | gd-quan | `tram-va-cang.md` luật 38 ghi lần cập bến đầu của TA08 vào lịch từ mốc C3.3. Mốc C3.3 của truyện lại xong chính nhờ lần cập bến đó | Luật 38: lần đầu vào lịch từ ngày kế tiếp sau khi bến thuộc KH12 Hoạt động, khớp bảng ba lần cập bến ở mục 2.5 | Đã gửi gd-quan |
| 9 | gd-world | Bảng hòm của `map.md` cho Wick ghi thẻ tên ở cả M1 đến M3, trong khi hàng N2 ghi M3 là thẻ tên, M1 và M2 là mảng vỏ STY-211 và nhật ký STY-101 | gd-world sửa bảng hòm của Wick, và liệt kê đủ vật ở Lantern, N4, N5 | Đã gửi gd-world |

Đã hết lệch:
- gd-world: khe M4 cho nhật ký trạm ở C3 của Cinder, khe V1 cho vật nhiệm vụ ở N2, N6, N7, N8, STY-105 ở Engine Core, lối vào map nhánh theo mốc, mốc C4.5.
- gd-world, đợt 4: hàng N7 của `map.md` đã gọi tên khe M1 ở Collapsed Hold và M2 ở Main Cryo Deck. Tên tiếng Anh các khu trong map nhánh đã chốt ở bảng A01 đến A05 của `map.md`, file này đã đổi theo (log GDM dòng 74).
- gd-items: đủ ID cho cả 23 vật truyện, nghĩa của nộp, bản sao dữ liệu chỉ từ STY-101 và STY-401, ENG-105 đổi tên, Súng lưới ở chương 1.
- gd-quan: luật 38 (lần hai và lần ba của TA08 chờ mốc), luật 15 (quest của Linh là KH06 và KH07), luật 14 (Hồi sức), tên TA02 và TA09.
- gd-ux: giới hạn ký tự của hộp thoại, radio, bong bóng, dòng Sổ tay và lời theo trạng thái, tên Sổ tay, cảnh sau ca cảng, bước T29, thẻ tên chương.
- gd-combat: vai truyện và vị trí của BS-1 tới BS-5, loài mang thẻ, cỡ M cho mốc C2.4.
- gd-character: cảnh đến của người vào sau, bốn hồ sơ người chơi không có nghề riêng.

## Điểm tự quyết (gd-story, để GDM gom vào log)

| # | Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|---|
| 1 | Truyện có rẽ nhánh không | Một đường, không lựa chọn hội thoại, một kết | Tiến trình truyện là của chung nhóm (C3), bỏ phiếu lựa chọn trong co-op không tạm dừng rất rối. Vừa sức nhóm | Lựa chọn có hệ quả, nhiều kết | Đắt |
| 2 | Vật truyện có mất khi bị kéo về không | Vật manh mối ghi Sổ tay ngay khi nhặt. Vật nhiệm vụ rơi thì về vị trí gốc | P4 cấm bỏ lỡ manh mối. K2 chỉ cho giữ 1 món sẽ làm mất vật truyện | Tính như đồ mọi loại khác theo K2 | Rẻ |
| 3 | Gốc lòng tham của loài người nằm ở đâu, sau khi khung bỏ nguồn gốc cũ của đường đi | United Accord tin một hồ sơ không kiểm chứng vì nó hứa đúng thứ họ muốn, bỏ qua ghi chú khu bảo hộ của The Wardens để kịp tiến độ, và lên sẵn kế hoạch mở mỏ ở Solace (MM4.2) | Lead chốt gốc tai nạn là lòng tham của nhân loại. Không có chi tiết này thì loài người chỉ là nạn nhân | Loài người vô can | Rẻ |
| 4 | Người chơi biết Solace là mồi bằng cách nào | Hộp ghi hành trình: đài quan sát của Cradle đã tự nhìn về phía Solace ngay trước vụ nổ và thấy không có gì khớp hồ sơ | Sự thật phải đến từ chính mắt loài người, không từ lời kẻ thù hay lời thương nhân, thì người chơi mới tin | Serith nói ra, hoặc Nhem tìm ra | Rẻ |
| 5 | Vì sao phải vào Warden Rig ở chương 5 | Mọi bản đồ loài người có đều chép từ hồ sơ giả. Bản đồ thật chỉ kẻ dựng hồ sơ mới có, và nó là thứ lắp bước cuối của động cơ | Cho chương 5 một mục tiêu cụ thể đúng log GDM dòng 36, nối boss cuối với việc rời neo | Rời neo không cần Rig | Vừa |
| 6 | Dải Giữa mở bằng gì | Bằng mốc C1.9 (Lantern đọc vị trí). Hoa tiêu mở dải Xa và Skiff | Khung mục 7 đặt Hoa tiêu ở chương 2, trong dải Giữa. gd-world đã theo (W4) | Vớt Hoa tiêu ở chương 1 | Vừa |
| 7 | Năm người vớt có cùng một kiểu vớt không | Ba người kéo buồng từ xác trạm (Ingrid, Linh, Rafa). Amara đang thức ở Lantern, tới bằng xuồng của Bram. Yusuf đang thức ở Veyl Waypost, đón bằng Skiff | Năm lần không lặp, và cho Lantern, ca cảng, Skiff mỗi thứ một vai trong truyện | Cả năm đều kéo buồng | Rẻ |
| 8 | Nhân vật người chơi | Bốn hồ sơ mặc định có tên, đổi tên được, không có lời thoại riêng | Buồng tắt cần có tên. Người chơi 1 đến 4 không thể có thoại riêng mà vẫn đúng mọi số người | Nhân vật chính có tên và giọng riêng | Vừa |
| 9 | Số xác trạm có truyện | Ba: Cinder, Wick, Flint. Flint không có người để vớt | Mỗi dải một xác trạm, khớp ba người kéo buồng và cú lật | Một xác trạm mỗi người vớt | Rẻ |
| 10 | Lý do truyện của sự cố ca cảng (K14) | Thiết bị Maro để lại dưới bến, gỡ rồi vẫn còn di chứng | Nối K14 với mốc cải trang B8, sự cố có thủ phạm | Sự cố không có lý do | Rẻ |
| 11 | Maro lộ mặt thế nào | Cập bến ba lần, truyện đếm lần cập bến, không đếm lần giao hàng | Không phụ thuộc người chơi có bán hàng cho Maro hay không | Lộ mặt theo lựa chọn của người chơi | Rẻ |
| 12 | The Veyl trung lập làm gì ở kết | Không đánh giúp. Sau khi bằng chứng chạy hết The Lattice, họ quay lại bãi vỡ đứng nhìn Ember rời neo | Giữ trung lập Lead chốt, vẫn cho The Wardens mất uy quyền | The Veyl hợp sức đánh The Wardens | Rẻ |
| 13 | Kết với The Wardens | Phá Warden Rig và thả Driftlife, không diệt cả chủng tộc. Serith thua trận, số phận để mở | Chủ đề là làm khác đi, không phải trả thù. Để phần sau còn phản diện | Tiêu diệt The Wardens | Rẻ |
| 14 | Lời hứa "dựng khác đi" do ai nói | Amara, ở câu áp chót của cảnh kết, đặt cạnh bản kế hoạch mở mỏ của United Accord | Log GDM dòng 38: giữ làm lời nhân vật. Amara là người mang chủ đề suốt game | Odile hoặc người dẫn truyện | Rẻ |
| 15 | Thêm Wren, đứa trẻ sinh trên The Raft | Có | Người hỏi câu "Solace có thật không" phải là người chưa từng được hứa gì | Không có trẻ em | Rẻ |
| 16 | Sau cảnh kết | Theo K24: về menu chính, bản lưu ở ngày cuối. Thêm: động cơ giữ trạng thái đã xong, hai mốc cuối không phát lại, không rời neo lần nữa (luật 26) | K24 chưa nói trạng thái mốc và động cơ trong bản lưu đó | Sửa lại giai đoạn 5 và xem lại kết | Rẻ |
| 17 | Số cảnh mỗi điểm nghỉ và độ dài cảnh | Một cảnh, tối đa 3 câu, mốc chương tối đa 8 câu | Truyện chen vào điểm nghỉ, không chặn vòng ngày (P4) | Cảnh dài tự do | Rẻ |
| 18 | Năm chủng tộc thương nhân | Oru, Sennari, Brakk, Aelith, Kesh | Mỗi chủng tộc một kiểu hàng và một kiểu hài, Kesh giữ mạng tin của B4 | Thương nhân không chia chủng tộc | Rẻ |
| 19 | Người vào sau có lấp buồng tắt không | Không. Người vào sau là người vớt từ một buồng vô danh | Lead chốt người trong buồng hỏng đã chết | Người mới tỉnh dậy từ buồng tắt | Rẻ |
| 20 | Tên hồ sơ mồi và mạng tin | Lodestar Survey, The Lattice | Khung B4 có khái niệm, chưa có tên | Không đặt tên | Rẻ |
| 21 | Lời gốc viết bằng tiếng gì | Tiếng Việt, tên riêng tiếng Anh | Tài liệu phòng là tiếng Việt, Lead chỉ yêu cầu tên tiếng Anh | Viết gốc tiếng Anh | Vừa |
| 22 | Quest của người vớt | Theo luật của gd-quan: sửa khoang. Truyện không thêm điều kiện riêng | Một luật cho cả năm người, không hai vai cùng giữ một luật | Quest riêng nhiều bước do truyện đặt | Rẻ |
| 23 | Mốc xong lúc nào khi co-op | Ngay khi điều kiện đúng, không chờ cảnh. Cảnh xếp hàng riêng từng người (luật 19) | Cảnh phát riêng từng máy nên không thể là thứ quyết mốc xong | Mốc xong khi cảnh phát xong | Vừa |
| 24 | Nộp vật nhiệm vụ có tiêu vật không | Không tiêu. Vật vào kho, chỉ công thức hoặc danh sách sửa của gd-items mới tiêu, và luôn sau mốc cần vật (luật 20) | Tránh khóa cứng ở C2.8 và chương 5 | Nộp là tiêu | Rẻ |
| 25 | Mốc xảy ra giữa ca cảng trình bày thế nào | Trong ca chỉ bong bóng, cảnh của mốc phát ở pha Cuối ngày (luật 21) | Không cảnh nào được dừng đồng hồ ca cảng | Dừng ca để phát cảnh | Rẻ |
| 26 | Rời neo có tự chạy khi sửa xong động cơ không | Không. Cần mọi người có mặt xác nhận ở khoang dẫn đường | Kết game là việc người chơi chọn lúc làm, và co-op không ai bị kéo vào kết khi chưa sẵn sàng | Tự rời neo khi sửa xong | Rẻ |
| 27 | Giảm số vật ở chương 3 | Gộp sổ hải trình vào bản ghi của Nhem (MM3.1), đưa ghi chép của người xem sao thành lời Elias ở C3.5 | Dùng đúng số khe `map.md` đang có ở N4 và N5 | Xin thêm hai khe | Rẻ |
| 28 | Mã cho vật nhiệm vụ | Mã V theo chương (V1.1 tới V5.1), tách khỏi mã MM của vật manh mối | Khớp quy ước khe M và khe V của `map.md` | Dùng chung mã MM | Rẻ |
| 29 | Chuyện riêng của thương nhân | Là lời bong bóng lúc cập bến, mở theo số lần giao đủ hàng 3, 6, 10 cộng một mốc truyện cho từng đoạn. Không phải cảnh | Không chiếm điểm nghỉ, không đẩy lùi cảnh của mốc, không lộ chuyện của chương sau | Là cảnh trong hàng chờ | Rẻ |
| 30 | Áp K25 cho mốc đóng chương 3, là mốc xảy ra trong ca cảng | Lần cập bến thứ ba của TA08 chỉ vào lịch khi giai đoạn 3 của động cơ đã lắp | Nếu để Maro cập bến rồi mới xét động cơ thì cảnh lộ mặt xảy ra mà chương chưa đóng | Cho Maro lộ mặt trước, chương đóng sau | Rẻ |
| 31 | Điều kiện của C5.1 sau K25 | Tàu của Dromm cập bến lần đầu sau C4.7 | Điều kiện cũ (đã mua ENG-104) thành thừa, vì K25 đã buộc lắp giai đoạn 4 trước khi C4.7 xong | Giữ điều kiện mua linh kiện | Rẻ |
| 32 | Sàn ngày có tính bước chế qua đêm không | Có, tính hai bước mà chuỗi mốc bắt buộc: Bộ kích nguồn và Lõi dẫn hướng rời bãi vỡ | Sàn là con số gd-economy dùng làm cận dưới, phải là cận dưới thật | Bỏ qua mọi thời gian chế | Rẻ |

## Phản biện khung

| # | Vấn đề | Lý do và bằng chứng | Phương án thay | Đã viết theo |
|---|---|---|---|---|
| 1 | K21 nói mỗi chương thêm đúng một kiểu chơi mới, nhưng bảng mục 7 của khung ghi hai kiểu ở chương 1 (khai thác và ca cảng) và hai kiểu ở chương 3 (sự cố trong ca cảng, kẻ địch có vũ khí) | Hai chỗ của khung lệch nhau. Chương 3 còn gánh thêm dải Xa, ba map nhánh, một người vớt và ba mốc truyện lớn nhất | Sửa K21 thành "một hoặc hai". Hoặc dời một map nhánh của chương 3 sang chương 4 | GDM đã xử, log dòng 43: K21 sửa thành một hoặc hai. Chương 3 giữ nguyên |
| 2 | K12 ghi Hoa tiêu mở dải, nhưng mục 7 đặt dải Giữa và Hoa tiêu cùng ở chương 2 | Phải vào dải Giữa mới vớt được Hoa tiêu | Sửa K12: Hoa tiêu mở dải Xa và Skiff | GDM đã xử, log dòng 44: K12 đã sửa đúng phương án thay |
| 3 | K7 ghi manh mối truyện chỉ nằm ở map nhánh | Nhiều mốc truyện phải diễn ra ở trạm và cảng: tàu lạ, cú lật ở phòng nghiên cứu, thiết bị dưới bến | Sửa chữ K7 thành "vật manh mối", còn mốc truyện được diễn ra ở trạm và cảng | GDM đã xử, log dòng 45: K7 đã sửa đúng phương án thay |
| 4 | K2 chỉ cho giữ 1 món khi bị kéo về | Áp cho vật truyện thì người chơi phải chọn giữa manh mối và hàng, hoặc mất vật nhiệm vụ | Thêm ngoại lệ cho vật manh mối và vật nhiệm vụ | GDM đã xử, log dòng 46: K2 đã có ngoại lệ. gd-items đã ghi luật V4 cùng nghĩa, gd-character áp ở đợt 1b |
| 5 | MVP chỉ có chương 1, trong đó chưa có The Wardens, chưa có cú lật | MVP không đo được sức kéo của truyện, chỉ đo được móc mở đầu. `10-narrative.md` nguyên lý 1: truyện đi sau cấu trúc chơi, nên chấp nhận được | Giữ MVP. Playtest MVP chỉ hỏi về móc: người chơi có muốn biết Lantern là ai và thứ gì đã đánh Cradle không | GDM đã nhận, không có dòng log riêng. Đã gieo MM1.1, MM1.2 và C1.9 vào chương 1. Log dòng 49 thêm bắt sống loài nhỏ vào chương 1, MVP thử được thêm điểm khác biệt đó |
| 6 | B3 và B5: phản diện ghét loài người vì phá môi trường, trong khi người chơi khai thác suốt game và B10 không phạt | Nếu loài người trong game không bị thấy làm gì sai thì lời buộc tội của The Wardens rỗng, và lời hứa "dựng khác đi" không có gì để khác. `10-narrative.md` nguyên lý 4 | Cho thấy lỗi của loài người bằng chứng cứ, không bằng luật phạt | GDM đã xử, log dòng 47: nhận cách của vai. MM4.2, nghề của Ingrid, quê của Amara, lập trường của Odile |
| 7 | B4 và B9, kết mở: người chơi theo đuổi Solace phần lớn game rồi biết đó là mồi | Rủi ro người chơi thấy bị lấy mất mục tiêu. GDM đã xử một phần ở log dòng 36 (lộ ở chương 4, chương 5 có mục tiêu mới) | Giữ. Thêm bốn thứ để kết mở không thành kết hụt: gieo nghi ngờ từ chương 1 tới 3 (mục 2.9), sự thật đến từ chính Cradle (Điểm tự quyết 4), chương 5 có thắng lợi cụ thể, và cảnh rời neo đi trước câu hỏi | GDM đã nhận, không có dòng log riêng. Mục 2.8, 2.9 và 7b |
| 8 | Khung mục 1 ghi chương 1 đến 3 là "tìm đường tới Solace" | Trong ba chương đó khung không cho việc nào thật sự là tìm đường, người chơi chỉ sửa trạm và vớt người | Truyện thêm mảnh lõi dẫn đường ở mỗi xác trạm và cảnh đóng chương 2 để mục tiêu "tìm đường" có việc làm | GDM đã xử, log dòng 48: mỗi xác trạm một mảnh lõi dẫn đường, ghép dần (C2.8) |
| 9 | Khung mục 7, chương 2 ghi "bắt sống loài lớn (gây mê, kéo về)" | Theo `combat-driftlife.md` cỡ L không bắt sống được, chỉ lấy mẫu sinh thiết. Cỡ M mới bắt sống bằng Phao kéo. Chữ "loài lớn" làm mốc C2.4 không thể xong nếu đọc đúng chữ | Sửa khung thành "bắt sống cỡ M (gây mê, Phao kéo)" | GDM đã xử, log dòng 76: khung đã sửa thành cỡ M |
| 10 | Khung chưa định nghĩa "qua chương". Ba file đang định nghĩa ba kiểu | `kinh-te-tien-trinh.md` luật 12 (bốn cổng), `tram-va-cang.md` luật 11 (xong giai đoạn động cơ thì mở mốc truyện), file này luật 1 (mốc đóng chương). Người chơi xong C1.9 mà chưa lắp ENG-101 thì dải Giữa mở theo truyện, đóng theo kinh tế | Ghi vào khung một nghĩa: chương đóng và dải mở theo mốc đóng chương, cổng kinh tế là gợi ý tiến độ | GDM đã xử, log dòng 68: K25 |

## Lịch sử thay đổi

| Ngày | Thay đổi | Lý do | Ai |
|---|---|---|---|
| 2026-11-20 | Bản đủ đầu tiên, chuyển từ `story/game-story-v3.md` sang khung B1 tới B11. Phản diện là The Wardens, bỏ tên phản diện cũ và nguồn gốc cũ của đường đi | GD-022, log GDM dòng 2 tới 8 | gd-story |
| 2026-11-20 | Viết lại chương 4, chương 5 và kết theo Solace là thông tin mồi và kết mở. Khớp boss, khe manh mối, quest sửa khoang, loại tàu với file của các vai khác | Khung đổi B4, B9, B11, K10 sau khi Lead chốt kết mở. File các vai khác có sau bản đầu | gd-story |
| 2026-11-20 | Thêm mục 2.9 gieo nghi ngờ về Solace ở chương 1 tới 3, hai vật manh mối MM3.6 và MM3.7. Khớp ID vật kể chuyện STY và luật V4 của gd-items (bản cuối: vật nhiệm vụ chiếm túi, mất thì về vị trí gốc), loài mang thẻ DL-X05 của gd-combat, lý do mở dải Giữa của gd-world | Tin cập nhật của GDM và tin trả lời của gd-items, gd-combat, gd-world, gd-quan | gd-story |
| 2026-11-20 | Đợt 1b: quest của Kỹ sư mở thêm Súng lưới cho loài nhỏ ở chương 1, chương 2 đổi thành nuôi và bắt sống loài lớn. Ghi kết quả GDM xử 8 phản biện. Gỡ dấu chờ gd-character | Khung sửa lần 2, log GDM dòng 43 đến 49 | gd-story |
| 2026-11-20 | Gỡ dấu chờ gd-ux (bước T02, T29, T30, màn UI-19 và UI-53). Giữ tên cũ của vụ phục kích, đưa phương án đổi tên xuống mục 10. Ghi rõ Odile tin Solace tới chương 4. Bốn hồ sơ người chơi không có nghề riêng | Tin của gd-ux, lỗi validator của gd-tech, mục lệch của gd-character | gd-story |
| 2026-11-20 | Thêm cột Kênh cho 36 câu mẫu, cắt VO_MAR_01 và VO_BRA_03 xuống dưới 60 ký tự. Script soát kiểm giới hạn theo kênh | gd-ux chốt story.box 80, story.radio 60, story.bubble 60 | gd-story |
| 2026-11-20 | Đính chính sàn ngày chương 5 từ 4 xuống 3 (tổng 25). Ghi kết quả sim của gd-economy và bảng bốn chỗ hạ sàn được, chưa áp | Tin của gd-economy, tự soát lại bảng sàn | gd-story |
| 2026-11-20 | Luật 21 khớp luật 25 và 26 của `ux-ui.md`: cảnh sau ca phát ở màn Kết ca hoặc Cuối ngày, khi ca đang chạy không cảnh nào chặn màn của ai. Thêm năm thẻ tên chương | Tin của gd-ux | gd-story |
| 2026-11-20 | Vòng QA 1 (GD-031, 16 nặng, 14 nhẹ). Luật 19 tới 26 mới: mốc xong không phụ thuộc cảnh, nộp không tiêu vật, mốc trong ca cảng, người vớt tỉnh ngày kế tiếp, nghĩa của ngày kế tiếp, chuyện riêng thương nhân, sau kết. Điều kiện mốc thành danh sách. C1.7 cần cả KH06 và KH07. C2.4 đổi sang cỡ M. C2.8 không đòi nộp lại STY-102. Bảng lối vào map nhánh, cột ID vật và cột "Hiện từ mốc" cho mọi vật truyện, khe M và V theo `map.md`. Gộp hai vật ở chương 3. Mã V cho vật nhiệm vụ. Bảng sàn ngày từng chương. Bảng vật nhiệm vụ và chỗ tiêu. Dòng Sổ tay chương 1, dòng buồng tắt, đề cương chuyện riêng thương nhân. Theo khung lần 4: K22, K23, K24, C10 | `qa/GD-031-cot-truyen.md` | gd-story |
| 2026-11-20 | Đợt 4, theo khung sửa lần 5 và log GDM dòng 61 đến 80. Đổi tên vụ phục kích thành The Scattering. K25: bốn mốc đóng chương thêm điều kiện giai đoạn động cơ đã lắp. C5.1 đổi điều kiện thành tàu của Dromm cập bến. Các câu hỏi mở đã có quyết định thì ghi số dòng log. Tra web tên The Scattering: không thấy trùng | Brief đợt 4 của GDM (áp các điểm chốt sau QA vòng 2) | gd-story |
| 2026-11-20 | Vòng QA 2. Chuyện riêng thương nhân thêm điều kiện mốc cho từng đoạn (luật 25, bảng đề cương). Sàn ngày tính cả bước chế qua đêm: 7, 5, 8, 3, 3, tổng 26, giờ tính theo độ dài ngày của khung. Thêm ba cảnh đánh thức vào số cảnh (45 cảnh, 180 câu). C2.4 đổi tên thành Mẫu sống cho Amara, đi đường Phao kéo. Bỏ các ghi chú đã cũ về khe và ID, viết lại bảng lệch | `qa/GD-031-cot-truyen.md` vòng 2 | gd-story |
| 2026-11-20 | Soát, lần chạy cuối sau vòng QA 2. Script riêng của file, 0 lỗi: 36 câu mẫu của 12 nhân vật, câu dài nhất 59 ký tự, 24 dòng Sổ tay dài nhất 58 ký tự, 0 chữ số, 0 từ chỉ số người chơi. Mốc 9, 8, 8, 7, 8. Vật truyện 4, 6, 6, 5, 2, mỗi vật có khe, ID và mốc hiện. Sàn ngày 7, 5, 8, 3, 3. 0 dấu chấm phẩy, 0 gạch dài, 0 emoji, 0 tên phản diện cũ, 0 dấu chờ. Script của phòng `soat.mjs`: 0 lỗi, 2 cảnh báo (thiếu file từ vựng của game, một dòng có tên file không dấu). `validate-gdd.mjs`: gd-story 0 lỗi riêng, 2 lỗi chung với gd-world (khe M1 và M2 của N7 chưa có tên trên map) | Tiêu chí nghiệm thu 1, 3, 4 | gd-story |
| 2026-11-20 | Đợt 4, đổi tên khu trong map nhánh sang tiếng Anh theo bảng A01 đến A05 của `map.md`: bốn khu trong Cradle, Lantern Outer Ring, Lantern Core, Waypost Concourse, Holding Pens, Command Deck, Data Core, Rig Landing. Vật MM3.2 ghi theo bảng hòm của `map.md`: khe M2 ở Waypost Concourse. Hai dòng lệch với gd-world chuyển sang hết lệch. Soát lại: script riêng và `soat.mjs` không lỗi, `validate-gdd.mjs` không còn lỗi nào ở cả mười file | Tin của gd-world, log GDM dòng 74 | gd-story |

