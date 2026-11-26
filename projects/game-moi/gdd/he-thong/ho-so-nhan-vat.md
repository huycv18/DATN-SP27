# GDD hệ thống: Hồ sơ nhân vật (người chơi, người vớt, thương nhân, The Wardens)

Project: game-moi | Chủ sở hữu: gd-character | Trạng thái: bản đủ, đã sửa đợt 4 sau phiếu GD-031 (2026-11-20) | Nguồn: khung mục 3, 7, 10, K12, C2, C10, `cot-truyen.md` (Danh mục sơ bộ của gd-story), `story/game-story-v3.md`, brief GD-023 việc 8

## Tóm tắt

Hồ sơ cho art và cho gd-story: mỗi nhân vật có vai, ngoại hình, silhouette, màu nhận diện, biểu cảm cần có và yêu cầu art 2D vector. Ngoại hình và silhouette là của gd-character. Tính cách, lời thoại, mâu thuẫn riêng là của gd-story (`cot-truyen.md`), file này chỉ trích phần cần cho art. Hành vi ở cảng của thương nhân là của gd-quan. Chỉ số người chơi nằm ở `nguoi-choi.md`. Tầng: trình bày. Ưu tiên: bản đầu.

## Hiện hành

| Mục | Giá trị | Nhãn |
|---|---|---|
| Người chơi | 4 preset gắn 4 slot màu, mỗi preset một silhouette riêng, đổi tên được | Preset 1 và 2 MVP, preset 3 và 4 Sau MVP |
| Người vớt | 5 người theo K12, tên theo gd-story | Ingrid và Linh MVP, ba người còn lại Sau MVP |
| Thương nhân The Veyl | 5 chủng tộc, mỗi chủng một thương nhân có tên | Tikko MVP, bốn người còn lại Sau MVP |
| The Wardens (chế độ và quân của Daskel, người Sennari) | Daskel (độc tài Sennar, boss BS-5), Maro (gián điệp của Daskel), lính The Wardens | Sau MVP |
| Sevra Ilvane (người thừa kế, giả làm Ilsume) | Một nhân vật hai trạng thái: TR-2 thương nhân che mạng, NP-5 người thừa kế bỏ mạng | Sau MVP |
| Người phụ | Odile, Bram, Elias, Wren | Sau MVP, Bram chỉ giọng qua sóng ở chương 1 |
| Rig | Một rig xương chung cho nhân loại, 4 skin người chơi, người vớt dùng cùng rig | MVP |
| Phong cách | 2D vector, bóng đổ phẳng 2 mức, nét viền theo màu tối của vùng | Chốt khung |

Danh mục sơ bộ (để vai khác đọc): nhân vật người chơi mã PC-1 đến PC-4 (preset Việt, Jonas, Mei, Niamh), người vớt mã RS-1 đến RS-5 (Ingrid, Linh, Rafa, Amara, Yusuf), thương nhân mã TR-1 đến TR-5 (Tikko, Ilsume, Dromm, Vaeth, Nhem). The Wardens mã WD-P1 và WD-P2 (Daskel, Maro, không trùng mã WD-01 đến WD-04 là đơn vị chiến đấu của gd-combat), người phụ mã NP-1 đến NP-4 (Odile, Bram, Elias, Wren). NP-5 là Sevra Ilvane, trạng thái thứ hai của TR-2 Ilsume (cùng một nhân vật). Chủng tộc: Sennari là chủng của Daskel, Sevra, Maro và lính The Wardens, không thêm chủng mới.

## 1. Mục đích với người chơi

- Người chơi nhận ra đồng đội trong co-op ở cỡ 108 điểm ảnh cao trên màn 1080p (nhân vật cao 1 u, camera thấy 17,8 u ngang) trong một liếc, kể cả khi ping, bay nhanh, hay có Driftlife che bớt.
- Người vớt và thương nhân là chỗ đặt giọng hài nhẹ (B9). Hình dáng phải gợi được tính cách.
- Phục vụ pillar P4 (vũ trụ kể chuyện qua thứ bạn vớt được): màu và chi tiết ngoại hình mang manh mối, ví dụ kẻ cải trang sạch hơn thương nhân thật.
- 30 giây đầu: người chơi thấy 1 đến 4 buồng và màu cùng hình slot trên bộ đồ của mình. Ingrid và Linh chưa xuất hiện, họ lần đầu hiện ở mốc C1.4 và C1.6 của `cot-truyen.md` (khi vớt từ Station Cinder).

## 2. Luật (quy ước chung, áp cho mọi hồ sơ)

1. Thang tỉ lệ `MVP`: người trưởng thành cao 1 u. Mỗi hồ sơ ghi chiều cao theo u. Cỡ hiển thị mục tiêu 108 điểm ảnh một u trên màn 1080p, nguồn vẽ gấp 4 lần.
2. Silhouette test `MVP`: tô đen cả nhóm trong cùng cảnh, ở cỡ hiển thị, phải phân biệt từng nhân vật trong 1 giây. Mỗi nhân vật có ít nhất hai đặc điểm ngoại hình nhận ra được khi tô đen (hình mũ, tỉ lệ thân, đồ mang sau lưng, phụ kiện).
3. Màu `MVP`: mỗi nhân vật có một màu nhận diện (nhấn lớn) và tối đa 6 màu chính cộng 2 màu nhấn nhỏ. Bão hòa luôn là kênh S của HSV, đo bằng công cụ lấy mẫu màu. Người chơi dùng nhấn từ 70% ở bộ đồ ngoài. Người vớt và thương nhân dùng nhấn tới 45%. Giáp và cờ của chế độ The Wardens dùng cặp trắng xương và lục acid, không ai khác dùng. Sevra khi bỏ mạng không dùng cặp này.
4. Rig `MVP`: một bộ xương chung cho nhân loại, chung mọi clip. Chiều cao preset (0,9 đến 1,2 u) là scale đều của rig, chênh tối đa 20% quanh 1,0 u. Mỗi preset người chơi được chỉnh riêng tỉ lệ xương đầu, vai, hông, tay, chân trong khoảng 0,8 đến 1,25 lần (bảng Tỉ lệ preset ở 2b.1, Lead duyệt 2026-11-26, `de-xuat-4-pc-vai-tam-ly.md`). Phần còn lại phân biệt bằng hoán đổi bộ phận (mũ, bình Oxy, túi, phụ kiện). Trước khi vẽ hết clip, artist chạy thử Mang thùng, Kéo vật, Ngạt trên cả 4 preset để kiểm méo. Chủng tộc The Veyl mỗi chủng một rig riêng, mức độ đơn giản. Ngoại lệ ghi tên: Wren (0,6 u) dùng rig trẻ em riêng đơn giản.
5. Bộ đồ `MVP bậc 0 và 1`: người chơi lắp mảnh theo 5 trục (bình Oxy, vỏ, bộ đẩy, túi, đai dụng cụ) theo `nguoi-choi.md`, mỗi bậc là một biến thể mảnh, không vẽ lại cả nhân vật.
6. Màu và hình slot `MVP`: slot gán cố định theo slot, không theo người, hiện trên HUD đồng đội và ping kèm hình để không chỉ dựa vào màu: Slot 1 ○ cam `#F26B1D`, Slot 2 △ lam ngọc `#1FB5D6`, Slot 3 □ vàng chanh `#D8E21F`, Slot 4 ◇ hồng tím `#D6309B`. Bảng này là nguồn duy nhất, `ux-ui.md` đọc từ đây.
7. Nguồn tính cách `MVP`: tính cách, nghề, quốc gia, mâu thuẫn, quest theo `cot-truyen.md`.
8. Solace `MVP`: là thông tin mồi, kết game mở (B4, B9, K10). Hồ sơ không viết Solace là đích thật hay giả. Riêng Odile (NP-1) giữ niềm tin "tới Solace" tới hết chương 3 và mất niềm tin ở chương 4 (log 73, `cot-truyen.md`). Hồ sơ của mọi nhân vật khác không gắn đích Solace.
9. Co-op `MVP`: không nhân vật nào cần đúng N người chơi để hiện diện (P3). Chơi 1 người thì ba buồng còn lại tắt, tên trên buồng lấy từ các preset chưa dùng.
10. Hình không đổi luật `MVP`: chiều cao, tỉ lệ xương từng preset (luật 4) và silhouette chỉ là hình. Va chạm, tầm nhặt, vùng trúng giữ bán kính 0,4 u cho mọi preset (P3, công bằng co-op).
11. Slot và người vào sau `MVP`: người tỉnh dậy ban đầu chọn preset, mỗi preset một slot, không trùng. Người vào sau lấy slot trống thấp nhất, dùng ngoại hình preset đó ở biến thể B (đổi tóc, râu hoặc kính), và bắt buộc đặt tên mới. Buồng tắt vẫn tắt với tên mặc định của preset, người vào sau là người khác, không lấp buồng. Hết slot thì hiện "Phòng đầy" (xem `nguoi-choi.md` 2.9).
12. Màu cùng cảnh `MVP`: hai nhân vật cùng cảnh phải khác nhau từ 25 độ Hue hoặc từ 25 điểm bão hòa hoặc từ 25 điểm sáng (V của HSV). Bộ màu đã kiểm bằng script cho cả 20 nhân vật, 0 cặp trượt.

## 2b. Hồ sơ từng nhân vật

### 2b.1 Nhân vật người chơi (PC-1 đến PC-4) và người vào sau

Vai: người sống sót của Ember, kíp vận hành trạm, không ai là chuyên gia (chuyên gia là những người vớt). Bộ đồ có màu và hình slot. Người tỉnh dậy ban đầu chọn một preset và đổi tên được, preset không ai chọn rơi vào buồng hỏng là người đã chết, tên trên buồng giữ tên mặc định. Nhân vật người chơi không có lời thoại riêng. Người vào sau theo luật 11 mục 2 (biến thể B, đặt tên mới, không lấp buồng tắt).

| Mã | Slot, màu nhận diện | Tên mặc định | Vai truyện | Vai trong nhóm | Chiều cao | Silhouette (khi tô đen) | Ngoại hình | Nhãn |
|---|---|---|---|---|---|---|---|---|
| PC-1 | Slot 1 ○, cam Ember `#F26B1D` | Nguyễn Việt | Kíp vận hành trạm | Người truyền lửa | 1,0 u | Khối tròn, dáng chuẩn làm mốc: mũ tròn có ăng-ten chữ L bên phải, vai tròn, bình Oxy vuông ngang rộng sau lưng | Tóc đen dài ngang vai búi gọn dưới mũ, găng dày, bộ đồ cam xám than, đai dụng cụ chéo ngực | MVP |
| PC-2 | Slot 2 △, lam ngọc `#1FB5D6` | Jonas Weber | Kíp vận hành trạm | Chỗ dựa | 1,1 u | Khối vuông: mũ vuông bo góc, vai rộng ngang, tay và bàn tay to, một bình Oxy dài dọc lưng kiểu thùng | Gọng kính trong mũ, bộ đồ lam xám, dây đai vai dày | MVP |
| PC-3 | Slot 3 □, vàng chanh `#D8E21F` | Mei Tanaka | Kíp vận hành trạm | Cây hài | 0,9 u | Khối tròn phóng đại: mũ trứng có chóp sáng, đầu to hơn chuẩn, tay chân ngắn, balo tròn nhỏ | Tóc ngắn bồng thấy qua tấm kính mũ, bộ đồ vàng chanh đen, găng ngón mảnh | Sau MVP |
| PC-4 | Slot 4 ◇, hồng tím `#D6309B` | Niamh Doyle | Kíp vận hành trạm | Bộ não | 1,2 u | Khối tam giác: cao và mảnh nhưng tỉ lệ thường, không chân tay dài, vai hẹp, mũ đáy phẳng kính vát góc, bình Oxy nghiêng trên vai, túi dụng cụ hông | Tóc nâu đỏ đuôi thấp trong mũ, bộ đồ hồng tím và xám, túi dụng cụ thường đeo hông | Sau MVP |

Tỉ lệ preset (luật 4, số khởi điểm, artist chỉnh khi thử 3 clip, giữ trong 0,8 đến 1,25). Hệ số nhân sau scale chiều cao. Hình khối theo quy ước tròn thân thiện, vuông vững, tam giác sắc:

| Preset | Vai trong nhóm | Hình khối | Chiều cao | Đầu | Vai | Hông | Tay, bàn tay | Chân |
|---|---|---|---|---|---|---|---|---|
| PC-1 Việt | Người truyền lửa | Tròn | 1,0 u | 1,0 | 1,0 | 1,0 | 1,0 | 1,0 |
| PC-2 Jonas | Chỗ dựa | Vuông | 1,1 u | 1,0 | 1,2 | 1,05 | 1,2 | 1,0 |
| PC-3 Mei | Cây hài | Tròn | 0,9 u | 1,2 | 0,9 | 1,05 | 0,85 | 0,85 |
| PC-4 Niamh | Bộ não | Tam giác | 1,2 u | 1,0 | 0,9 | 0,95 | 1,0 | 1,05 |

Tỉ lệ chung của cả dàn nhân loại: khoảng 5,5 đầu, thân gọn khỏe, bàn tay và giày cỡ thường, áo quần dày có vết mòn, vá, bẩn. Không dài ngoằng (bản 2), không to béo (bản 3). Mẫu tỉ lệ là ảnh Lead gửi 2026-11-26 (`art/C/05-nhan-vat/ref-ti-le-lead.webp`).

Bốn nấc dáng: một người cao và mảnh (Niamh), một người thấp tròn (Mei), một người chuẩn (Việt), một người tỉ lệ phóng đại (Jonas tay to, Mei đầu to). Hình slot ○ △ □ ◇ là icon UI, không phải hình khối thân.

Nhân dạng để art dựng (khớp `cot-truyen.md` khối GD-079, GD-079 Lead chốt 2026-11-25: bốn PC ngang nhau về luật, không vai trò hay kỹ năng riêng, 2 nam 2 nữ, không ai da màu, PC-1 là nam chính người Việt Nam):

| Mã | Tên, quốc gia | Giới tính, tuổi | Da | Tóc | Nét mặt khi bình thường |
|---|---|---|---|---|---|
| PC-1 | Nguyễn Việt, Việt Nam | Nam, khoảng 29 | Sáng ngả vàng nhạt | Đen, dài ngang vai, búi gọn dưới mũ | Mắt sáng và thẳng, cười nửa miệng, cằm hơi ngẩng |
| PC-2 | Jonas Weber, Đức | Nam, khoảng 34 | Sáng | Nâu rối, râu lún phún | Mắt hiền sau kính, hơi gù khi nghe, gật chậm |
| PC-3 | Mei Tanaka, Nhật Bản | Nữ, khoảng 26 | Sáng | Đen ngắn bồng | Mắt to tròn, má phồng khi tập trung, cười toe rồi nghĩ ra trò khác |
| PC-4 | Niamh Doyle, Ireland | Nữ, khoảng 36 | Sáng có tàn nhang | Nâu đỏ, đuôi thấp gọn trong mũ | Mặt mềm, mày hơi nhíu, mắt liếc như đang tính, nhìn xuống khi bị khen |

Cả bốn dùng chung rig, chung chỉ số, chung kỹ năng. Ngoại hình ở bảng trên chỉ là hình, không chi tiết nào gợi vai gameplay.

Trong trạm: nhân vật không mặc bộ đồ ngoài, mặc đồ trạm màu xám than với một mảng màu slot ở vai và ống tay để vẫn nhận ra slot. Mặt thấy rõ nên cần biểu cảm đầy đủ.

Biểu cảm cần có (8, mặt thấy trong trạm và qua tấm kính mũ ngoài không gian): bình thường, vui, lo, đau (trúng đòn), sợ và ngạt, mệt, quyết tâm, ngạc nhiên. Cảm xúc phụ cho emote: vẫy, ngón cái (hai emote MVP).

Yêu cầu art: rig chung, 4 skin. Mỗi người có hai bộ màu (bộ đồ ngoài và đồ trạm), mỗi bộ tối đa 6 màu chính cộng 2 nhấn. Biến thể bộ đồ: bình Oxy 5 bậc, vỏ 4 cấp, bộ đẩy 4 bậc, túi 5 bậc, đai dụng cụ 3 bậc, xem bảng 7.

### 2b.2 Người vớt (RS-1 đến RS-5), mở tính năng trạm (K12)

Người vớt là NPC. Ingrid, Linh, Rafa được kéo từ buồng ngủ đông của xác trạm nên mặc đồ Seed Station (xám nhạt, mòn, mang số hiệu buồng). Amara và Yusuf đang thức ở Lantern và Veyl Waypost, mặc đồ nghề của họ (blouse, áo phản quang). Mỗi người một nhấn trầm. Tính cách, quest: `cot-truyen.md`.

| Mã | Tên | Vai | Chiều cao | Silhouette (khi tô đen) | Ngoại hình | Màu nhận diện | Biểu cảm cần có | Nhãn |
|---|---|---|---|---|---|---|---|---|
| RS-1 | Ingrid Halvorsen | Kỹ sư, mở xưởng | 0,95 u | Thấp và rộng vai, tóc búi cao, đai công cụ lớn và kính bảo hộ đẩy lên trán | Tay áo xắn tới khuỷu, găng da, tạp dề thợ, vết dầu | Xanh cobalt trầm `#6A8DB8` | Bình thường, bực, tập trung, vui khi sửa được, mệt | MVP |
| RS-2 | Linh Tran | Thông dịch viên, mở khoang liên lạc | 1,05 u | Gầy cao, tai nghe vành lớn, áo khoác dài chạm gối, máy bảng cầm tay | Tóc bob, áo khoác dài xám nhạt, dây tai nghe vắt cổ | Tím chàm trầm `#8A7FC9` | Bình thường, lịch sự, bối rối trước thương nhân, lo, cười ngượng | MVP |
| RS-3 | Rafael Ortega (Rafa) | Hoa tiêu, mở khoang dẫn đường | 1,1 u | Dáng thẳng, mũ lưỡi trai hoa tiêu, khăn quàng dài buông sau lưng | Ria nhẹ, áo hoa tiêu có dây vai, bản đồ cuộn đeo lưng | Đỏ gạch trầm `#B8665C` | Bình thường, mơ màng nhìn bản đồ, tự tin, hoảng, hài hước | Sau MVP |
| RS-4 | Amara Okafor | Nhà sinh học, mở nghiên cứu và nuôi | 1,0 u | Áo blouse dài, tóc xù lớn có kẹp, hộp mẫu đeo ngực | Blouse ngả vàng, găng cao su, kính lúp gập trên cổ, sổ ghi mẫu kẹp tay | Lục thẫm trầm `#6FA88A` | Bình thường, tò mò sáng mắt, buồn (cú lật Driftlife), giận, dịu dàng khi nuôi | Sau MVP |
| RS-5 | Yusuf Demir | Trưởng cảng, thêm bến và tiện ích cảng | 1,15 u | Vai to, mũ cứng có đèn, áo phản quang, bộ đàm trước ngực | Râu rậm, cốc trà hay cầm tay, găng, áo phản quang bạc màu | Olive trầm `#9AA06A` | Bình thường, cau có, quát điều phối, hài lòng khi tàu đi đúng giờ, lo | Sau MVP |

Tính cách trích từ `cot-truyen.md` để art đặt dáng và biểu cảm:

| Tên | Nghề, quốc gia | Tính cách | Gợi ý cho dáng và mặt |
|---|---|---|---|
| Ingrid | Kỹ sư, Na Uy, làm giàn khoan biển | Thẳng, khô, làm trước nói sau, đùa không đổi nét mặt | Mặt ít biểu cảm, vai và tay to, đùa chỉ ở mắt |
| Linh | Thông dịch viên, Việt Nam | Nhanh miệng, khéo, giữ thể diện cho cả hai bên, dịch quá trung thực | Nghiêng đầu, tay hay chen vào, cười lịch sự |
| Rafa | Hoa tiêu, Chile | Mơ mộng, mê tín với sao, sợ chịu trách nhiệm cho đường đi | Mắt hay nhìn lên, nói vòng, hay chạm bùa trên cổ |
| Amara | Nhà sinh học, Nigeria | Tỉ mỉ, ấm, nói chuyện với mẫu vật | Cúi sát mẫu, tay nhẹ, nghiêm hẳn khi nói tuyệt chủng |
| Yusuf | Trưởng cảng, Thổ Nhĩ Kỳ | Ồn ào, hiếu khách, mặc cả là niềm vui, quát và pha trà | Dáng to, tay vung, hay cầm cốc trà |

Yêu cầu art người vớt: dùng cùng rig xương người chơi, hoán đổi bộ phận, bảng 6 màu chính cộng 1 nhấn trầm. Clip riêng: Ingrid (đập búa, đo), Linh (bấm bảng, đứng nghe), Rafa (trải bản đồ), Amara (soi mẫu), Yusuf (vẫy tay điều phối). Clip "thức dậy từ buồng ngủ đông" dùng chung cho Ingrid, Linh, Rafa (khác mặt). Amara và Yusuf dùng clip "bước xuống từ xuồng hoặc Skiff" (Sau MVP).

Chương xuất hiện và chức năng K12 đầy đủ:

| Tên | Chương | Khoang, chức năng K12 |
|---|---|---|
| Ingrid | 1 | Xưởng: chế và nâng cấp trang bị |
| Linh | 1 | Khoang liên lạc: gọi tàu, mở giờ giao thương, shop |
| Rafa | 2 | Khoang dẫn đường: mở dải, Skiff |
| Amara | 2 | Nghiên cứu và nuôi Driftlife |
| Yusuf | 3 | Thêm bến và tiện ích cảng |

### 2b.3 Thương nhân The Veyl (TR-1 đến TR-5)

Mỗi chủng một rig và hình khối riêng, để người chơi đọc chủng tộc từ xa rồi mới đến tên. Tính cách theo `cot-truyen.md`. Tàu: Tikko TA01, Ilsume TA04, Vaeth TA05, Dromm TA06, Nhem TA10, Maro TA08 (Bram TA03).

| Mã | Tên | Chủng | Chiều cao, tỉ lệ | Silhouette | Ngoại hình | Màu nhận diện | Tính cách (gd-story) | Biểu cảm cần có | Nhãn |
|---|---|---|---|---|---|---|---|---|---|
| TR-1 | Tikko | Oru | 0,7 u, tròn | Thân tròn nhỏ, bốn tay mảnh, đội thùng tôn làm mũ | Da nâu tro, bộ đồ vá chằng, túi đựng phế liệu đeo đầy | Hổ phách nhạt `#C2A77E` | Kẻ mê đồ Trái Đất, trả giá cao cho thứ con người coi là rác, hiểu sai công dụng | Tò mò, mê mẩn, bối rối, mặc cả, vui | MVP |
| TR-2 | Ilsume (tên giả của Sevra Ilvane, trạng thái 1: thương nhân che mạng) | Sennari | 1,6 u, thon | Áo choàng dài nhiều lớp nghi lễ, mũ nhọn cao, mạng che kín mặt | Da trắng ngọc, tay dài, vòng cổ nghi thức, giọng bà lão trang trọng (giả). Dưới áo là dáng người trẻ | Hồng rượu trầm `#A5667A` | Trọng nghi thức, mỗi giao dịch có chuỗi lễ dài (vỏ bọc). Sợ bị nhận ra, đúng mực, lo giấu sau lễ nghi | Trang nghiêm, sốt ruột bị che giấu, hài lòng, bối rối khi lễ bị phá, giật mình khi nghe tên Daskel | Sau MVP |
| TR-3 | Dromm | Brakk | 1,8 u cao, 1,6 u rộng, thân khối | Khối vuông lớn, giáp đá, đầu nhỏ chìm giữa vai | Một mắt lớn, da xám đá có vân kim loại | Xám đá `#6E6A66` nhấn đồng `#B87333` | Ít lời, không bao giờ nói thẳng giá, mặc cả bằng ánh nhìn | Im lặng, nhìn xuống, nhướng mắt, gật rất nhỏ | Sau MVP |
| TR-4 | Vaeth | Aelith | 1,3 u, uyển chuyển | Tua mềm như sứa quanh thân, bể thủy tinh nhỏ đeo vai | Da trong mờ, tua phát sáng, bể chứa một sinh vật nhỏ sống | Oải hương `#CBA6E4` | Nhà sưu tầm sinh vật sống, quan tâm Driftlife còn sống hơn Tally | Mê say, thương cảm, giận khi thấy Driftlife bị hạ | Sau MVP |
| TR-5 | Nhem | Kesh | 1,0 u, lơ lửng | Thân dẹt trôi, nhiều mắt nhỏ, bó dây cáp mạng buông dưới | Da xám đen, mắt trắng nhỏ như điểm sáng, dây cáp có đèn | Xám đen nhấn đỏ tươi nhỏ `#D8382C` | Dân buôn tin, giữ The Lattice, câu ngắn hai vế, áy náy về thông tin giả | Nhìn nghiêng, im lặng, sợ, dè dặt, thú nhận | Sau MVP |

Sevra (NP-5, trạng thái 2, xem mục 2b.5) lộ ra ở cuối chương 3 (C3.8). Từ đó Ilsume không còn che mạng trong trạm.

Ghé cảng từ: Tikko chương 1 (và TA02 là dân Oru vãng lai không tên, dùng rig Oru, biến thể màu), Ilsume chương 2, Vaeth chương 2, Dromm chương 3, Nhem chương 3, Maro chương 3 (hai lần cập bến khi còn cải trang, lộ mặt khi chỉ huy toán bắt cóc Sevra ở N4, mốc C3.8).

Yêu cầu art thương nhân: tàu của mỗi chủng cần màu và hình khối ăn khớp với chủng (yêu cầu tab Assets cho tàu do gd-quan lấy từ hồ sơ này và danh sách tàu). Mỗi chủng cần 6 clip: Idle, Nói, Mặc cả (gật hoặc lắc), Vui, Bối rối, Rời đi.

### 2b.4 The Wardens: chế độ của Daskel (WD-P1, WD-P2, lính)

Đơn vị chiến đấu (WD-01 đến WD-04) do gd-combat giữ, là lính Sennari mặc giáp của chế độ (không thêm chủng tộc, dùng rig Sennari, mặt che bằng mũ giáp). The Wardens là chế độ và quân của Daskel. File này giữ Daskel và Maro. Ngôn ngữ hình: sạch, nhẵn, đối xứng, kỷ luật, đối lập với thương nhân lấm lem và với mạng lưới cách mạng của Sevra (đồ chắp vá). Màu chung của chế độ: trắng xương `#EDEBE0` và lục acid `#7CFC3A` (đường sáng).

| Mã | Tên | Vai | Chiều cao | Silhouette | Ngoại hình | Màu nhận diện | Biểu cảm cần có | Nhãn |
|---|---|---|---|---|---|---|---|---|
| WD-P1 | Daskel, danh xưng tự phong First Warden | Độc tài cầm quyền Sennar, đứng đầu The Wardens, boss BS-5 (chương 3 đến 5, qua lời Maro và tín hiệu, tới Warden Rig ở chương 5). Ghét loài người vì cha là sĩ quan chết trong cuộc chiến vũ trụ đầu tiên giữa các hành tinh (tên cuộc chiến ở `cot-truyen.md` mục Tên mới), cái nhìn phiến diện của hắn | 2,0 u (cao hơn Ilsume nhờ giáp và bục), rất gầy | Cao, tay dài quá gối, vòng sáng tròn sau gáy (halo), mặt nạ nhẵn, vai giáp nhọn đối xứng | Áo giáp choàng trắng xương không một vết bẩn, đường lục acid chạy dọc áo, huy hiệu chế độ trên ngực, không thấy mắt. Sạch vì hắn tin mình đang dọn dẹp | Trắng xương và lục acid | Bình thản, khinh miệt nhẹ, cuồng tín (mặt nạ nứt khi mất bình tĩnh), thương hại giả, giận lạnh khi nhắc tên Sevra hay cha mình | Sau MVP |
| WD-P2 | Maro | Gián điệp của Daskel săn Sevra, chỉ huy toán bắt cóc. Người Sennari, giả thương nhân của một thương hội Sennari không có thật (tàu TA08), hai lần cập bến khi còn cải trang, lộ mặt ở N4 khi chỉ huy toán bắt cóc (C3.8) | 1,7 u khi cải trang (khom người), 2,0 u sau khi lộ | Cải trang: dáng thương nhân Sennari, áo choàng nghi lễ rút gọn, che đầu bằng khăn, sạch hơn hẳn thương nhân thật. Lộ mặt: dáng cao gầy cùng kiểu Daskel, ít chi tiết hơn, giáp chế độ | Khi cải trang: áo xám không vết, đường lục acid mờ 10 phần trăm ở gáy, chi tiết thưởng cho người tinh ý, không ai cần nó để hiểu truyện (P4). Lộ mặt: đường lục 100 phần trăm, bỏ khăn, huy hiệu The Wardens | Xám nhạt `#A3A8A0`, lục acid mờ khi cải trang, lục acid sáng khi lộ | Vồn vã, hào phóng, hỏi quá nhiều, khi lộ mặt thì phẳng lặng, soi mói | Sau MVP |

Lính The Wardens: một bộ giáp trắng xương đường lục acid dùng chung rig Sennari, mũ giáp che mặt, 3 biến thể theo loại đơn vị (gd-combat cấp danh sách). Yêu cầu art: Maro cần hai biến thể (cải trang và lộ mặt) dùng chung rig Sennari, đổi lớp phủ. Tàu của Maro cần sạch bất thường trong cảng (gd-quan lấy làm manh mối). Daskel là boss BS-5 nên ngoài 6 clip hội thoại (Idle, Nói, Chỉ tay, Giận, Rút, Rời) cần danh sách clip chiến đấu và cỡ boss do gd-combat cấp (`combat-driftlife.md`), Sau MVP.

### 2b.5 Người phụ (NP-1 đến NP-4) và Sevra (NP-5), Sau MVP

| Mã | Tên | Vai | Chiều cao | Silhouette | Màu nhận diện | Biểu cảm tối thiểu | Nhãn |
|---|---|---|---|---|---|---|---|
| NP-1 | Odile Laurent | Trưởng trạm Lantern, chương 2 | 1,0 u | Gọn, tóc bạc, áo khoác Lantern dài, gậy đèn | Lục đèn pin trầm `#7FAE7A` | Bình thường, nghiêm, mệt, quát | Sau MVP |
| NP-2 | Bram Kowalski | Trưởng xuồng tiếp tế Lantern, tàu TA03, chương 1 qua sóng, chương 2 hiện hình | 1,2 u | Vóc to, râu, mũ nồi, thùng hàng sau lưng | Nâu sẫm `#6B5640` | Bình thường, than thở, vui, xin thêm | MVP (chỉ giọng), Sau MVP (hiện hình) |
| NP-3 | Elias Vance | Thủ lĩnh The Remainers, chương 3 | 1,15 u | Cao gầy, áo bạc màu, băng tay cũ | Xám bạc `#8C95A0` | Bình thường, khắc nghiệt, sợ giấu | Sau MVP |
| NP-4 | Wren | Đứa trẻ sinh trên The Raft, chương 3 và kết | 0,6 u | Rất nhỏ, đầu tròn, áo thùng thình vá | Xanh lá nhạt `#E4F0D0` | Bình thường, tò mò, ngạc nhiên, vui | Sau MVP |
| NP-5 | Sevra Ilvane (trạng thái 2 của TR-2 Ilsume) | Người thừa kế hợp pháp của Ilvane (Steward of Sennar, cha của Sevra, bị Daskel lật đổ, chết trong giam cầm). Giả làm Ilsume để trốn Daskel. Người chơi cứu ở cuối chương 3 (C3.8), hộ tống ở chương 5, nhận tọa độ thật | 1,6 u | Bỏ mạng và mũ nhọn, thân thon cùng rig Sennari với Ilsume, khuôn mặt trẻ, tóc buộc gọn, dáng thẳng hơn dáng bà lão giả | Hồng rượu trầm `#A5667A` (cùng Ilsume), thêm nhấn nhỏ là huy hiệu nhà Ilvane ở cổ áo, không dùng trắng xương và lục acid | Bình thường, kiệt sức, sợ, quyết tâm, đau buồn khi nhắc cha, nhẹ nhõm khi được nhận ra | Sau MVP |

## 3. Tham số

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nhóm tác động | Nguồn |
|---|---|---|---|---|---|---|
| Điểm ảnh mỗi u (1080p) | 108 | 72 (720p) đến 130 | Chi tiết rõ | Silhouette khó đọc | Art | ước (1920 chia 17,8 u, 720p là 72 điểm ảnh một u) |
| Chiều cao nhân loại | 0,9 đến 1,2 u | 0,8 đến 1,3 | Nhân vật lớn | Nhỏ | Silhouette | ước |
| Màu chính mỗi nhân vật | 6 | 4 đến 8 | Mịn hơn | Dễ đọc hơn | Art | ước |
| Màu nhấn nhỏ mỗi nhân vật | 2 | 1 đến 3 | Chi tiết | Gọn | Art | ước |
| Bão hòa nhấn người chơi (S của HSV) | từ 70% (đo 78 đến 88%) | 65% đến 90% | Nổi bật | Mờ | Nhận diện co-op | ước, đo bằng script |
| Bão hòa nhấn NPC (S của HSV) | tới 45% (đo 5 đến 42%) | 30% đến 55% | Dễ nhầm với người chơi | Hơi nhạt | Nhận diện | ước |
| Chênh scale rig giữa preset | tối đa 20% quanh 1,0 u | 10% đến 25% | Khác biệt rõ | Dễ trùng | Rig | ước |
| Số biểu cảm người chơi | 8 | 6 đến 10 | Tốn art | Thiếu cảm xúc | Art | ước |
| Số clip ngoài không gian | 17 (MVP) | 14 đến 20 | Tốn art | Thiếu phản hồi | Art | ước (bảng 7), chốt khi artist có bản thử |
| Số clip trong trạm | 8 | 6 đến 10 | Tốn art | Thiếu | Art | ước |

## 4. Trường hợp biên

| Ca | Xử lý |
|---|---|
| Chơi 1 người, ba buồng tắt | Tên trên buồng lấy từ ba preset chưa dùng, hiện ở cảnh mở |
| Người vào sau trùng slot với nhân vật đã rời | Nhận lại đúng nhân vật cũ nếu cùng tài khoản, không thì slot trống thấp nhất khác |
| Hai người chơi cùng chọn một màu | Không cho, màu gắn slot, slot gắn nhân vật |
| Màu nhận diện trùng giữa NPC và Driftlife | Đề xuất gd-combat dùng gam lục lam phát quang và tím sẫm cho Driftlife, tránh cam, vàng chanh, hồng tím và cặp trắng xương lục acid. gd-combat chưa xác nhận, nếu không đổi thì chấp nhận và kiểm ở review art |
| Vỏ bộ đồ cấp cao đổi màu bộ đồ | Không đổi màu slot, chỉ thêm tấm giáp xám |
| Maro lộ mặt ở N4 (C3.8) | Hiện biến thể lộ mặt khi chỉ huy toán bắt cóc. Ở cảng Maro chỉ xuất hiện trong dáng cải trang (gd-quan, TA08 hai lần cập bến) |
| Người chơi đổi tên | Tên đổi được, hồ sơ không đổi (màu, silhouette, nghề không đổi theo tên) |
| Hai nhân vật người chơi chồng lên nhau khi cùng ở cảng | Đi xuyên nhau (xem `nguoi-choi.md`), màu slot phân biệt |
| Bộ đồ nhiều biến thể cùng lúc | 5 trục độc lập, mỗi mảnh vẽ không che mảnh khác (kiểm lắp thử mọi tổ hợp bậc đầu và bậc cuối) |
| Nền không gian tối trùng màu với áo xám đen | Nhân vật có viền sáng mảnh 2 điểm ảnh khi ngoài không gian |
| Cảnh trong trạm cỡ khác ngoài không gian | Giữ 108 điểm ảnh một u, nếu camera trạm khác thì silhouette test lại (UI quyết, `ux-ui.md`) |
| Người vào sau khi đã có đủ 4 nhân vật lưu | Hiện "Phòng đầy", host xóa nhân vật người đã rời để nhường slot |
| Người vào sau mang ngoại hình trùng người đã chết trên buồng tắt | Dùng biến thể B và tên mới bắt buộc, buồng tắt giữ tên mặc định |

## 5. Ràng buộc vật lý của luật

- Một artist 2D cho cả game (khung). Rig chung, skin ghép mảnh vừa sức một artist cho 4 người chơi cộng 5 người vớt.
- Silhouette phải đọc ở 108 điểm ảnh cao: chi tiết dưới 4 điểm ảnh không tính là đặc điểm nhận diện.
- Co-op 4 người cùng màn trong trạm: 4 màu slot, 5 nhấn người vớt, vẫn phải đọc, nên cặp màu bão hòa cao và bão hòa thấp đã chia để không nhầm.
- Hồ sơ không cần đúng N người chơi (luật 9).

## 6. Yêu cầu cho engineer / tool

| Mục | Yêu cầu |
|---|---|
| Rig | Một prefab xương chung cho nhân loại, skin theo preset, bộ phận hoán đổi theo ID mảnh (ví dụ `part_oxy_0`) |
| Màu slot | Đọc từ bảng slot (4 mã hex) để dùng cho HUD, ping, viền đồng đội |
| Biến thể bộ đồ | Gắn mảnh theo cấp nâng cấp chung của nhóm (`nguoi-choi.md` mục 2.6) |
| Biểu cảm | Hoán đổi bộ phận mặt theo sự kiện (trúng đòn, ngạt, cứu, nhặt vật hiếm) |
| Dữ liệu | Hồ sơ nhân vật ở dạng ScriptableObject (`CharacterProfile`): ID, tên, màu, preset, chiều cao. Tiền tố PC, RS, TR, WD-P cho MVP và sau, NP chưa đưa vào ScriptableObject (Sau MVP) |
| Tên | Tên người chơi đổi được, lưu theo nhân vật |

## 7. Yêu cầu cho art, UI, tutorial, audio (gửi GDM để vào tab Assets)

Yêu cầu chung: 2D vector, rig xương, bóng đổ phẳng 2 mức, viền theo màu tối của vùng, bảng màu theo mục 3. Thời lượng clip theo giây (ước), loop ghi chú.

Tải art theo hướng (top-down 45 độ, GD-072): mỗi clip vẽ 3 hướng (lên, xuống, ngang), ngang lật gương. Ngoài không gian 17 clip thành 51 bộ hình, trong trạm 8 clip thành 24 bộ hình, tổng 75 bộ thay cho 25 bộ khi nhìn ngang.

Clip nhân vật người chơi ngoài không gian (mỗi clip dùng cho 4 skin):

| # | Clip | Thời lượng | Loop | Nhãn |
|---|---|---|---|---|
| 1 | Idle trôi | 2,0 | Có | MVP |
| 2 | Bay (4 nghiêng theo hướng, blend) | 0,8 | Có | MVP |
| 3 | Hãm | 0,3 | Không | MVP |
| 4 | Lướt | 0,25 | Không | MVP |
| 5 | Nhặt | 0,2 | Không | MVP |
| 6 | Khai thác | 0,8 | Có | MVP |
| 7 | Dùng dụng cụ hạ | 0,4 | Không | MVP |
| 8 | Kéo vật | 0,8 | Có | MVP |
| 9 | Kích Recall | 1,0 | Có | MVP |
| 10 | Chia Oxy | 0,8 | Có | MVP |
| 11 | Trao đồ | 0,5 | Không | MVP |
| 12 | Trúng đòn | 0,3 | Không | MVP |
| 13 | Ngạt | 1,5 | Có | MVP |
| 14 | Được cứu | 1,0 | Không | MVP |
| 15 | Bị kéo về | 1,5 | Không | MVP |
| 16 | Ping chỉ tay | 0,3 | Không | MVP |
| 17 | Dùng dụng cụ bắt | 0,5 | Không | MVP |

Clip trong trạm (top-down 45 độ, 3 hướng vẽ lên, xuống, ngang, ngang lật gương, đi 8 hướng dùng hướng gần nhất):

| # | Clip | Thời lượng | Loop | Nhãn |
|---|---|---|---|---|
| 1 | Idle | 2,0 | Có | MVP |
| 2 | Đi ngang (lật gương cho trái, phải) | 0,8 | Có | MVP |
| 3 | Đi lên và đi xuống (hai hướng vẽ) | 0,8 | Có | MVP |
| 4 | Mang thùng (đi) | 0,8 | Có | MVP |
| 5 | Nhặt và giao thùng | 0,4 | Không | MVP |
| 6 | Tương tác | 0,5 | Không | MVP |
| 7 | Mặc bộ đồ | 1,0 | Không | MVP |
| 8 | Thức dậy từ buồng ngủ đông | 3,0 | Không | MVP |
| 9 | Bước xuống từ xuồng hoặc Skiff (Amara, Yusuf) | 2,0 | Không | Sau MVP |

Clip idle đứng tại chỗ riêng từng preset (GD-079, thay clip Idle chung ở dòng 1 khi đứng yên trong trạm, 2,0 giây loop, tắt được trong tùy chọn, không chạy khi đang điều khiển). Buồng của preset không ai chọn đóng nắp thành hòm dùng chung có biển tên, bấm vào hiện dòng ở `cot-truyen.md` mục "Dòng trên buồng đã tắt":

| Preset | Clip idle | Nhãn |
|---|---|---|
| PC-1 Việt | Đấm nhẹ nắm tay vào lòng bàn tay, vươn vai rồi ngẩng nhìn ra xa | MVP |
| PC-2 Jonas | Khoanh tay đứng yên lâu, thỉnh thoảng đẩy gọng kính dù kính không trượt | MVP |
| PC-3 Mei | Vỗ balo hai cái, nhún tại chỗ rồi xoay tròn nhìn quanh | Sau MVP |
| PC-4 Niamh | Liếc đồng hồ Oxy, gãi gáy khi thấy mình bị nhìn, rồi xoay vai | Sau MVP |

Biến thể mảnh bộ đồ (xem `nguoi-choi.md` mục 2.6):

| Trục | Số biến thể | Mô tả hình | MVP cần |
|---|---|---|---|
| Bình Oxy | 5 | Từ một bình nhỏ tới ba bình ghép | Bậc 0 và 1 |
| Vỏ bộ đồ | 4 | Từ vải trơn tới giáp dày | Cấp 0 (cấp 1 đến 3 Sau MVP) |
| Bộ đẩy | 4 | Từ một vòi tới hai vòi lớn, phụt sáng hơn | Bậc 0 và 1 |
| Túi đồ | 5 | Từ túi nhỏ tới túi lớn buộc ngoài | Bậc 0 và 1 |
| Đai dụng cụ | 3 | 3, 4, 5 ô thấy được | Bậc 0 và 1 |

Clip riêng NPC MVP (rig nhân loại cho Ingrid và Linh, rig Oru cho Tikko):

| Nhân vật | Clip (giây, loop) | Số clip | Biểu cảm | Nhãn |
|---|---|---|---|---|
| Ingrid | Idle 2,0 loop, Đập búa 0,8 loop, Đo 0,6, Vui khi sửa được 1,0 | 4 | 5 (bình thường, bực, tập trung, vui, mệt) | MVP |
| Linh | Idle 2,0 loop, Bấm bảng 0,8 loop, Đứng nghe 1,5 loop, Cười ngượng 0,8 | 4 | 5 (bình thường, lịch sự, bối rối, lo, cười ngượng) | MVP |
| Tikko | Idle 1,5 loop, Nói 1,0 loop, Mặc cả 0,8, Vui 0,8, Bối rối 0,8, Rời đi 1,2 | 6 | 5 (tò mò, mê mẩn, bối rối, mặc cả, vui) | MVP |

Danh sách yêu cầu để GDM đưa vào tab Assets:

| Mã Assets | Việc | Số lượng | Nhãn |
|---|---|---|---|
| CHR-PC | Skin người chơi (rig chung) | 2 MVP, 4 tổng | MVP |
| CHR-RS | Người vớt (Ingrid, Linh MVP) | 2 MVP, 5 tổng | MVP |
| CHR-TR | Thương nhân (Tikko MVP) | 1 MVP, 5 tổng | MVP |
| CHR-WD | Daskel, Maro (hai biến thể), giáp lính The Wardens (3 biến thể) | 6 | Sau MVP |
| CHR-SEVRA | Sevra và Ilsume: một rig Sennari, hai lớp phủ (che mạng, bỏ mạng), 5 biểu cảm trạng thái 2, clip Idle, Nói, Chạy trốn, Kiệt sức, Bị kéo trong kén | 2 lớp phủ, 4 clip | Sau MVP |
| CHR-NP | Người phụ | 4 | Sau MVP |
| CHR-FACE | Biểu cảm người chơi | 8 | MVP |
| CHR-PART | Mảnh bộ đồ theo 5 trục | 21 biến thể tổng (5, 4, 4, 5, 3), MVP cần 9 (bình 2, vỏ 1, bộ đẩy 2, túi 2, đai 2) | MVP |
| CHR-ANIM | Clip người chơi ngoài và trong trạm | 17 và 8 (cộng 1 Sau MVP) | MVP |
| CHR-ANIM-PC-IDLE | Clip idle riêng 4 preset (bảng trên) | 4 (2 MVP) | MVP |
| CHR-PROP-HOM | Hòm buồng ngủ đông của người đã mất: buồng đóng nắp kim loại kín, biển tên trên nắp, tên là chữ của game. Một asset dùng chung cho mọi buồng tắt | 1 | MVP |
| CHR-ANIM-NPC | Clip riêng Ingrid, Linh, Tikko | 14 (bảng dưới) | MVP |
| CHR-RIG | Rig nhân loại, rig Oru (Tikko, TA02), rig trẻ em (Wren) | 2 MVP, 3 tổng | MVP |
| CHR-TA02 | Biến thể màu Oru không tên cho TA02 | 1 | MVP |
| CHR-FACE-B | Biến thể B của 4 preset cho người vào sau | 4 | Sau MVP |

## 7b. Cảm giác (game feel)

- Tham chiếu: khách và người của Dave the Diver có hồ sơ riêng và hài hước từ tính cách [theo `15-character.md` mục 4, nguồn 16 và 18], Spiritfarer cho cách gắn sở thích vào luật [nguồn 15 của `15-character.md`]. Mượn đúng khoảnh khắc nhận ra nhân vật qua dáng.
- Phản tham chiếu: không để nhân vật khác nhau chỉ ở màu da hay màu áo (lỗi hai loài khách giống nhau trong playbook).
- Phản hồi nhân vật: biểu cảm đổi trong 1 khung hình khi có sự kiện (đau, sợ, cứu), không có độ trễ lên mặt.

## 8. Cách đo thành công và tiêu chí nghiệm thu

Tiêu chí nghiệm thu (gd-qa pass hoặc fail):
1. Silhouette test: tô đen 4 preset người chơi cạnh nhau ở 108 điểm ảnh một u, 5 người dùng thử phân biệt đúng 4 nhân vật trong 1 giây ở ít nhất 90% lượt. Lặp ở 1280x720 (72 điểm ảnh một u) với cùng ngưỡng 90% `MVP` (preset 1 và 2).
2. Tô đen người vớt và thương nhân MVP (Ingrid, Linh, Tikko), mỗi nhân vật nhận ra đúng vai ở ít nhất 80% lượt `MVP`. Phần còn lại Sau MVP.
3. Mỗi nhân vật có từ 1 đến 6 màu chính cộng tối đa 2 nhấn, đo bằng công cụ lấy mẫu màu, và bão hòa (S của HSV) đúng khoảng mục 3 `MVP`.
4. `MVP` Lắp thử bộ đồ ở bậc 0 và bậc cuối của mọi trục: không mảnh nào che hoặc cắt mảnh khác.
5. `MVP` Hai nhân vật bất kỳ trong cùng cảnh cách nhau từ 25 độ Hue, hoặc chênh bão hòa từ 25 điểm, hoặc chênh sáng từ 25 điểm (luật 12). Đo lại bằng script khi artist đổi màu.
6. `MVP` Mọi nhân vật MVP có đủ clip trong bảng mục 7 và biểu cảm 8.

## 9. Lệch khỏi tham chiếu

| Mục | Tham chiếu | Mình lệch ở đâu | Bằng chứng |
|---|---|---|---|
| Người mở tính năng | Dave: mỗi NPC mở một tính năng, quest hoặc chương [D10][D8] | Người vớt NPC mở tính năng, nhưng cũng có chủ đề vớt từ buồng ngủ đông (K12) | Khung K12 do Lead chốt |
| Khách có hồ sơ | Dave có VIP và khách khó tính có backstory [nguồn 16 và 18 của `15-character.md`] | Thương nhân The Veyl có chủng tộc và silhouette riêng, đọc từ xa | Silhouette test mục 8 |
| Nhân vật chính | Dave một nhân vật cố định | 4 preset slot màu cho co-op, đổi tên được | C1, C2 do Lead và GDM chốt |

## 10. Câu hỏi mở

| # | Câu hỏi | Đề xuất | Ai quyết |
|---|---|---|---|
| 1 | Người chơi vào sau có dùng cảnh Skiff hoặc xuồng Bram cần art riêng không | Dùng clip Thức dậy từ buồng ngủ đông và nền buồng, không clip riêng (cảnh tối đa 3 câu, bỏ qua được) | gd-story, GDM |
| 2 | Người vào sau dùng preset có sẵn hay tùy chỉnh ngoại hình | MVP dùng preset, tùy chỉnh Sau MVP | GDM |
| 3 | Camera trạm có cùng tỉ lệ 108 điểm ảnh một u không | Giữ, chốt cùng gd-ux | gd-ux |
| 4 | Quốc gia gốc của người vớt và thương nhân ảnh hưởng đến đồ mặc không | Chỉ chi tiết nhỏ (hoa văn), không đổi silhouette | gd-story |
| 5 | Tàu của từng chủng Veyl cần hồ sơ hình riêng | Có, gd-quan giữ danh sách tàu, gd-character cấp màu và hình khối | gd-quan |
| 6 | Có thêm phong cách chữ cho tên người chơi trên đầu không | Có, màu slot, cỡ nhỏ | gd-ux |

## Co-op 1 đến 4 người

| Mục | 1 người | 2 người | 3 người | 4 người |
|---|---|---|---|---|
| Nhân vật hiển thị | 1 preset, 3 buồng tắt có tên preset khác | 2 preset, 2 buồng tắt | 3 preset, 1 buồng tắt | 4 preset, không buồng tắt |
| Art MVP cần | Preset 1 | Preset 1 và 2 | Thêm preset 3 | Thêm preset 4 |
| Màu và hình slot | ○ cam | Thêm △ lam ngọc | Thêm □ vàng chanh | Thêm ◇ hồng tím |
| Người vào sau | Slot trống thấp nhất, biến thể B, đặt tên mới | Như vậy | Như vậy | "Phòng đầy", không vào được |
| Người rời phiên | Không áp | Nhân vật đứng ở khoang buồng ngủ đông, không điều khiển | Như 2 người | Như 2 người |
| Người vớt, thương nhân | Như nhau | Như nhau | Như nhau | Như nhau |

Kiểm: không hồ sơ nào đổi theo số người ngoài số preset hiển thị và số buồng tắt.

## Điểm tự quyết

| Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|
| Số preset người chơi | 4 preset cố định gắn 4 slot | Đủ co-op 4, ít việc cho một artist, đọc co-op dễ | Tùy chỉnh toàn bộ ngoại hình | Vừa |
| Màu theo slot | Cam, lam ngọc, vàng chanh, hồng tím, S từ 78%, kèm hình ○ △ □ ◇, hex ở luật 6 là nguồn duy nhất | Tách hue, nhận diện co-op và HUD, không dựa riêng vào màu | Màu người chơi tự chọn, bộ màu khác của ux-ui | Rẻ |
| Người vào sau | Biến thể B của preset, ép đặt tên | Không trùng người chết trên buồng, không đổi slot | Dùng nguyên preset | Rẻ |
| Bộ màu NPC | Kiểm bằng script, 0 cặp trượt luật 12 | Tiêu chí 5 đo được | Chọn màu theo cảm tính | Rẻ |
| NPC bão hòa thấp | Nhấn trầm tới 45% | Không nhầm người chơi với NPC | Mọi nhân vật cùng bão hòa | Rẻ |
| Rig chung | Một xương cho nhân loại, ghép mảnh | Một artist không đủ cho rig riêng mỗi người | Rig riêng từng người | Đắt |
| Chủng The Veyl | Rig riêng, mức đơn giản | Đọc chủng tộc từ xa, hài đến từ lệch văn hóa | Dùng chung rig nhân loại | Vừa |
| Giáp The Wardens | Trắng xương cộng lục acid, sạch và đối xứng | Đối lập thương nhân lấm lem và mạng lưới cách mạng chắp vá, gợi chế độ kỷ luật tự cho mình là sạch | Đen đỏ kiểu phản diện thường | Rẻ |
| Sevra và Ilsume | Một nhân vật, hai lớp phủ trên rig Sennari. Mã TR-2 (che mạng) và NP-5 (bỏ mạng), chốt NP-5 | Người chơi nhận ra Ilsume khi lộ mặt nhờ dáng và màu cùng gốc, không cần rig thứ hai | Hai nhân vật tách rời | Rẻ |
| Maro cải trang | Sạch hơn thương nhân thật, đường lục mờ ở gáy, là người Sennari của Daskel | Manh mối cho người tinh ý, đúng P4 | Cải trang hoàn hảo | Rẻ |
| Preset người chơi | Dùng 4 tên gd-story, vai truyện là kíp vận hành trạm, không nghề | gd-story ghi đây không phải chuyên gia, chuyên gia là người vớt | Gán nghề cho preset | Rẻ |
| Người vớt gọi bằng tên gd-story | Ingrid, Linh, Rafa, Amara, Yusuf | Khớp `cot-truyen.md` | Tên khác | Rẻ |
| Clip người chơi ngoài và trong | 17 và 8 | Đủ phản hồi cho mọi trạng thái trong `nguoi-choi.md`, không thừa | Ít hơn (thiếu phản hồi) | Rẻ |

## Phản biện khung

| Luật khung | Vấn đề | Lý do | Bằng chứng | Phương án thay |
|---|---|---|---|---|
| Mục 12 (MVP: 2 người vớt, 1 boss nhỏ, co-op 2 người) cùng một artist 2D | Art MVP tối thiểu: 2 skin người chơi, 2 người vớt, 1 thương nhân, 9 mảnh bộ đồ (21 tổng), 39 clip (17 ngoài, 8 trong trạm, 14 NPC), 8 biểu cảm người chơi cộng 15 biểu cảm NPC | 25 clip người chơi chỉ làm một lần vì 2 skin dùng chung rig, nên khả thi, nhưng khối lượng mảnh bộ đồ và biểu cảm vẫn lớn so với một artist | Đếm từ bảng 7, chưa có số giờ làm | Cắt mảnh bộ đồ xuống bậc 0 duy nhất ở MVP đầu, bậc 1 vào bản kế, hoặc cắt biểu cảm NPC xuống 3 mỗi người. Gd-qa và GDM xem lại khi biết tốc độ artist |

## Lệch cần vai khác sửa

| # | File, dòng | Lệch | Đề xuất |
|---|---|---|---|
| 1 | `ux-ui.md` dòng 29 | Bộ màu và hình slot khác luật 6 (Slot 1 xanh lục ○, Slot 2 cam △, Slot 3 xanh dương □, Slot 4 tím ◇) | Đổi theo luật 6: Slot 1 ○ cam `#F26B1D`, Slot 2 △ lam ngọc `#1FB5D6`, Slot 3 □ vàng chanh `#D8E21F`, Slot 4 ◇ hồng tím `#D6309B`, hình giữ nguyên thứ tự |
| 2 | `combat-driftlife.md` bảng màu Driftlife | Chưa nhận đề xuất tránh cam, vàng chanh, hồng tím | Xác nhận hoặc ghi chấp nhận trùng |

## Lịch sử thay đổi

| Ngày | Thay đổi | Lý do | Ai |
|---|---|---|---|
| 2026-11-20 | Bản đủ đầu tiên | GD-023 | gd-character |
| 2026-11-20 | Khớp lượt 1b: preset người chơi là kíp vận hành trạm, tính cách và tàu theo gd-story, Maro giả Sennari, Solace là mồi, gỡ dấu chờ gd-story | GD-023 1b | gd-character |
| 2026-11-20 | Đợt 4 sau GD-031: bộ màu sinh lại và kiểm bằng script (HSV), hình slot, luật slot và người vào sau, luật chiều cao không đổi va chạm, Odile giữ niềm tin tới chương 4, clip bắt sống MVP, bảng clip và biểu cảm NPC MVP, 108 điểm ảnh một u, nhãn MVP | GD-023 Đ4 | gd-character |
| 2026-11-20 | Đợt 6 phản diện mới: Daskel là độc tài Sennar, Sevra (NP-5) gộp với Ilsume hai trạng thái, Maro là gián điệp của Daskel, lính The Wardens là người Sennari, bỏ ý tham lam hơn loài người và đạo đức giả | GD-033 | gd-character |
| 2026-11-23 | Sửa câu văn theo đánh giá humanizer (production/reports/2026-11-23-humanizer-gdd.md): bỏ lịch sử trong thân luật, phủ định thừa, câu chốt lặp. Không đổi luật, số, ID. Chuyển xuống đây: The Wardens không còn là một chủng tộc, là chế độ và quân của Daskel | Rà văn phong GDD | gd-character |
| 2026-11-25 | Đội hình bốn PC mới: PC-1 Lê Quốc Bảo (nam Việt Nam), PC-4 Niamh Doyle (nữ Ireland), bảng giới tính, tuổi, da, tóc, nét mặt, bỏ râu và hộp y tế PC-4 (đổi túi dụng cụ thường), thêm 4 clip idle và 4 vật để lại vào yêu cầu art mục 7, bốn PC ngang nhau về luật | GD-079 | gd-character |
| 2026-11-25 | Lead đặt tên PC-1 là Nguyễn Việt (gọi ngắn Việt), thay Lê Quốc Bảo | GD-079 | GDM |
| 2026-11-25 | PC-4 đổi dáng: cao và mảnh, vai hẹp, bỏ vai rất rộng. Lead xem concept: "PC-4 đô con quá, cô ấy là phụ nữ mà" | GD-078 | GDM |
| 2026-11-26 | Tỉ lệ chung đổi sang khoảng 5,5 đầu, thân gọn khỏe, bàn tay và giày cỡ thường. Lead xem bản 3: "giờ thì người bị to quá béo béo" | Lead xem concept bản 3 | GDM |
| 2026-11-26 | Tỉ lệ chung chắc, khoảng 4,5 đầu, theo ảnh mẫu Lead. Niamh bỏ "rất cao gầy, chân tay dài", bảng Tỉ lệ preset của Niamh về gần chuẩn (đầu 1,0, chân 1,05). Lead: "kiểu như này đẹp mà, người kiểu kia dài ngoằng ấy" | Lead xem concept bản 2 | GDM |
| 2026-11-26 | Khung 4 vai tâm lý: cột Vai trong nhóm, silhouette theo hình khối (tròn, vuông, tròn phóng đại, tam giác), bảng Tỉ lệ preset, luật 4 cho chỉnh tỉ lệ xương riêng từng preset 0,8 đến 1,25 lần, nét mặt và clip idle mới. Không đổi chỉ số, va chạm, slot, màu | Lead duyệt `de-xuat-4-pc-vai-tam-ly.md` | GDM |
| 2026-11-26 | Bỏ CHR-PROP-PC (4 vật để lại, 2 MVP), thay bằng CHR-PROP-HOM (1 hòm dùng chung có biển tên). Lead: "khi chết thì cho đóng hòm hết" | GD-078 | GDM |
