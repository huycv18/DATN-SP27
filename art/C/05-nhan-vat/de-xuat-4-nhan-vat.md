# Đề xuất thiết kế lại 4 nhân vật chính (bản demo)

Ngày 2026-11-25. Bản đề xuất của artist, chưa phải luật. Hồ sơ nhân vật do gd-character giữ (`projects/game-moi/gdd/he-thong/ho-so-nhan-vat.md`). Những chỗ đổi so với GDD ghi ở mục 6, cần gd-character và Lead duyệt.

## 1. Hướng mới: mỗi người mang hình của slot mình

| Slot | Hình slot | Nhân vật | Ngôn ngữ hình |
|---|---|---|---|
| 1 | ○ | Noor | Tròn: mũ tròn, vai tròn, khối mềm và chắc |
| 2 | △ | Jonas | Tam giác: cao, vai hẹp, phần dưới rộng, kính che mặt vát nhọn |
| 3 | □ | Mei | Vuông: nhỏ, khối hộp, mũ vuông, balo hộp |
| 4 | ◇ | Tariq | Thoi: vai rất rộng thu về eo và chân hẹp, mũ có gờ |

Lợi ích: trong co-op, người chơi nhìn dáng là biết ai, khớp luôn với hình slot trên HUD và ping. Không cần nhìn màu.

### Sửa một lỗi trong thiết kế hiện tại

GDD hiện dùng bình Oxy làm dấu nhận diện khi tô đen (Noor bình vuông nằm ngang, Jonas bình dài dọc, Tariq bình nghiêng). Nhưng bình Oxy là một trong 5 trục nâng cấp (`ho-so-nhan-vat.md` luật 5). Nâng cấp bình là đổi hình bình, nên silhouette mất dấu nhận diện, và 2 người cùng bậc bình sẽ trông giống nhau.

Đề xuất: dấu nhận diện chỉ nằm ở những phần **không nâng cấp**:

| Phần | Nâng cấp? | Dùng làm dấu nhận diện? |
|---|---|---|
| Mũ | Không | Có, dấu chính |
| Tỉ lệ thân | Không | Có |
| Vật riêng (mỗi người một món) | Không | Có |
| Bình Oxy, vỏ, bộ đẩy, túi, đai | Có | Không. Thiết kế chung theo bậc, tô màu slot |

## 2. Hồ sơ từng người

Tên, slot, màu và chiều cao giữ nguyên như GDD. Phần quá khứ là đời sống thường trên Trái Đất trước khi lên Cradle, không phải nghề chuyên môn, nên không trái luật "không ai là chuyên gia". Quá khứ chỉ dùng để định hướng hình, nhân vật vẫn không có lời thoại.

### PC-1 Noor Haddad, slot 1 ○, cam Ember `#F26B1D`, cao 1,0 u, MVP

| Mục | Nội dung |
|---|---|
| Một câu | Người chị cả lầm lì của tổ, đứng đâu thì chỗ đó vững |
| Tính cách | Điềm tĩnh, che chở, ít nói, kiên nhẫn |
| Quá khứ | Lái xe bồn chở nước qua vùng sa mạc. Quen với chuyện tính từng giọt, từng lít |
| Mũ | Tròn đều, kính che mặt rộng hình bầu dục, ăng-ten chữ L bên phải (giữ từ GDD) |
| Tỉ lệ thân | Vai tròn, thân dày, trọng tâm thấp, chân hơi ngắn |
| Vật riêng | Dải vải đỏ đất buộc ở bắp tay trái, kỷ vật từ Trái Đất. Bay ngoài không gian thì dải vải trôi theo quán tính |
| Đồ trạm | Áo liền quần xám than, xắn tay, mảng cam ở vai. Dải vải đỏ vẫn buộc tay |
| Dáng đứng | Chân rộng, tay khoanh hoặc chống hông |
| Idle | Gõ nhẹ vào đồng hồ Oxy, siết lại dây đai |
| Vẫy tay | Giơ một tay ngắn gọn, không vẫy qua lại |
| Biểu cảm đặc trưng | Vui: cười mím, không há miệng. Lo: nhíu mày nhẹ, mắt nhìn xa. Quyết tâm: hất cằm |
| Biến thể B | Tóc cắt ngắn sát thay cho búi, có thêm vết sẹo nhỏ ở lông mày |

### PC-2 Jonas Weber, slot 2 △, lam ngọc `#1FB5D6`, cao 1,1 u, MVP

| Mục | Nội dung |
|---|---|
| Một câu | Người lo xa của tổ, lúc nào cũng có một danh sách |
| Tính cách | Cẩn thận, hay lo, hài khô, chu đáo |
| Quá khứ | Nhân viên kho lưu trữ dữ liệu. Thói quen ghi lại mọi thứ |
| Mũ | Cao hơn đầu, kính che mặt vát nhọn ở dưới thành hình tam giác ngược, gọng kính nhìn thấy bên trong mũ |
| Tỉ lệ thân | Cao, vai hẹp, phần hông và ống quần rộng dần xuống dưới |
| Vật riêng | Máy ghi chép gắn cổ tay trái, màn hình nhỏ phát sáng lam ngọc. Cây bút cài ở ngực |
| Đồ trạm | Áo khoác xám than dài tới hông, mảng lam ngọc ở vai, tay áo kéo thẳng gọn gàng |
| Dáng đứng | Thẳng, hơi khom vai về trước, một tay cầm bút |
| Idle | Đẩy gọng kính, gõ vào máy ghi chép ở cổ tay |
| Vẫy tay | Giơ hai ngón tay chào kiểu lịch sự |
| Biểu cảm đặc trưng | Vui: cười nghiêng một bên miệng. Lo: mắt mở to, cắn môi. Ngạc nhiên: kính trượt xuống mũi |
| Biến thể B | Thay kính tròn bằng kính vuông gọng dày, tóc rẽ ngôi |
| Màu bộ đồ | Lam xám là chính, lam ngọc chỉ ở viền kính mũ, màn hình cổ tay và mảng vai. Để không lẫn với Driftlife xanh ngọc (xem `C/04-bang-mau/cau-truc-bang-mau.md`) |

### PC-3 Mei Tanaka, slot 3 □, vàng chanh `#D8E21F`, cao 0,9 u, Sau MVP

| Mục | Nội dung |
|---|---|
| Một câu | Người nhỏ nhất tổ, luôn là người đầu tiên lao ra |
| Tính cách | Nhanh nhẹn, tò mò, liều, lạc quan |
| Quá khứ | Giao hàng bằng xe đạp ở một thành phố ngập nước |
| Mũ | Vuông bo góc nhẹ, kính che mặt vuông, dán đầy sticker sờn màu |
| Tỉ lệ thân | Nhỏ, khối hộp, đầu tương đối lớn, chân ngắn |
| Vật riêng | Chuông xe đạp gắn bên hông mũ. Bấm chuông là emote riêng |
| Đồ trạm | Áo khoác xám than ngắn, quá rộng so với người, tay áo xắn nhiều vòng, mảng vàng chanh ở vai |
| Dáng đứng | Nhún nhẹ trên mũi chân, đầu nghiêng |
| Idle | Nhìn quanh, gõ vào kính mũ, nhún nhảy |
| Vẫy tay | Vẫy cả cánh tay qua lại thật nhanh |
| Biểu cảm đặc trưng | Vui: cười toe, mắt nhắm tít. Sợ: rụt cổ vào mũ. Ngạc nhiên: miệng tròn chữ O |
| Biến thể B | Tóc buộc hai chỏm thay cho tóc bồng, sticker khác trên mũ |

### PC-4 Tariq Bello, slot 4 ◇, hồng tím `#D6309B`, cao 1,2 u, Sau MVP

| Mục | Nội dung |
|---|---|
| Một câu | Ông anh to xác ồn ào, người kéo cả tổ dậy |
| Tính cách | Ấm áp, hay pha trò, bảo vệ đồng đội |
| Quá khứ | Cứu hộ bãi biển. Biết sơ cứu nhưng không phải bác sĩ |
| Mũ | Đáy phẳng, có gờ nhô ra hai bên tạo dáng thoi khi nhìn chính diện |
| Tỉ lệ thân | Vai rất rộng, thu nhỏ dần về eo, chân thon. Hình thoi rõ khi tô đen |
| Vật riêng | Hộp sơ cứu đeo hông (giữ từ GDD), còi cứu hộ đeo cổ. Thổi còi là emote riêng |
| Đồ trạm | Áo ba lỗ xám than, tay để trần, khăn hồng tím quàng cổ |
| Dáng đứng | Ngực ưỡn, hai tay chống hông |
| Idle | Xoay vai, vươn vai, quay sang giơ ngón cái với đồng đội |
| Vẫy tay | Vẫy to cả hai tay |
| Biểu cảm đặc trưng | Vui: cười lớn há miệng, nheo mắt. Lo: nhướng mày, miệng mím. Mệt: thở phì, vai sụp |
| Biến thể B | Đầu cạo trọc thay cho tóc, râu quai nón dày hơn |

## 3. Bảng màu từng người

Mỗi người tối đa 6 màu chính và 2 màu nhấn (`ho-so-nhan-vat.md` luật 3). Màu nhận diện là màu slot, đã chốt. Các màu còn lại là đề xuất, chạy kiểm luật 12 (hai nhân vật cùng cảnh lệch từ 25 điểm hue, bão hòa hoặc độ sáng) trước khi chốt.

| Nhân vật | Nhận diện | Nền bộ đồ | Tối | Da | Tóc | Nhấn |
|---|---|---|---|---|---|---|
| Noor | Cam `#F26B1D` | Xám than `#3A3D45` | `#1F2026` | Ô liu trung bình | Đen | Đỏ đất (dải vải) |
| Jonas | Lam ngọc `#1FB5D6` | Lam xám `#5C6E80` | `#252B33` | Sáng | Nâu vàng | Trắng (bút, gọng kính) |
| Mei | Vàng chanh `#D8E21F` | Đen xám `#2B2B30` | `#15151A` | Sáng | Đen | Nhiều màu sờn (sticker) |
| Tariq | Hồng tím `#D6309B` | Xám ấm `#55504E` | `#26221F` | Nâu sẫm | Đen | Đỏ cứu hộ (hộp, còi) |

## 4. Một trang thiết kế nhân vật cần có gì

| Phần | Nội dung |
|---|---|
| Turnaround | 3 hướng vẽ theo spec camera (hướng còn lại lật gương), ở bậc bộ đồ 0 |
| Silhouette | Cả 4 người tô đen đứng cạnh nhau ở cỡ hiển thị, phân biệt được trong 1 giây |
| Đồ trạm | 1 hướng chính diện, có mảng màu slot |
| Biểu cảm | 8 biểu cảm theo GDD, mặt nhìn qua kính mũ và mặt không đeo mũ |
| Dáng và idle | 1 dáng đứng đặc trưng, 3 khung phác idle |
| Vật riêng | Vẽ to riêng, có ghi chú |
| Bảng màu | Dải màu kèm mã hex |
| Biến thể B | Chỉ vẽ phần đầu |
| Nâng cấp | 1 hình người mặc bộ đồ bậc 1, để thấy dấu nhận diện vẫn còn |

Cỡ vẽ nguồn: 432 px mỗi u (gấp 4 lần 108 px mỗi u ở 1080p, `ho-so-nhan-vat.md` luật 1).

## 5. Prompt AI để thử biến thể nhanh

Dùng để thử ý tưởng, sau đó artist vẽ lại (paint-over) để ép về đúng định hướng art. Prompt viết tiếng Anh vì công cụ tạo ảnh hiểu tốt hơn.

Phần chung, ghép vào đầu mọi prompt:

```
Character design sheet, 2D stylized game art, bold outer outline, minimal interior lines, 2-3 tone cel shading, chunky simple shapes, dark muted palette with one strong identity color, sci-fi survival, worn spacesuit, front view and 3/4 view, silhouette inset, plain dark background
```

| Nhân vật | Phần riêng |
|---|---|
| Noor | `stocky calm woman, round helmet with oval visor and L-shaped antenna on the right, rounded shoulders, low center of gravity, charcoal suit with orange #F26B1D panels, faded red cloth tied on left upper arm, arms crossed` |
| Jonas | `tall lanky man, tall helmet with downward-pointing triangular visor, glasses visible inside, narrow shoulders widening to the hips, blue-gray suit with small teal #1FB5D6 accents, glowing wrist datapad, pen clipped on chest` |
| Mei | `small energetic young woman, boxy square helmet covered in worn stickers, small bicycle bell on helmet side, compact boxy body, black-gray suit with lime #D8E21F panels, bouncing on toes` |
| Tariq | `big cheerful man, very broad shoulders tapering to slim waist and legs, diamond silhouette, flat-bottom helmet with side ridges, warm gray suit with magenta #D6309B panels, first aid case on hip, lifeguard whistle on neck, hands on hips` |

## 6. Khác với GDD hiện tại, cần duyệt

| Thay đổi | GDD hiện tại | Đề xuất | Ai duyệt |
|---|---|---|---|
| Dấu nhận diện | Có dựa vào hình bình Oxy | Chỉ dựa vào mũ, tỉ lệ thân, vật riêng | gd-character |
| Hình mũ Jonas | Vuông bo góc | Cao, kính vát tam giác | gd-character |
| Hình mũ Mei | Hình trứng có chóp sáng | Vuông, dán sticker | gd-character |
| Tính cách và quá khứ | Không có | Có, chỉ thể hiện qua hình, không có lời thoại | gd-story, gd-character, Lead |
| Vật riêng | Có đai dụng cụ (Noor), hộp y tế (Tariq) | Mỗi người một món, thêm emote riêng cho Mei và Tariq | gd-character, gd-ux (emote) |
| Mảng màu slot ở đồ trạm | Vai và ống tay | Vai, cộng vật riêng giữ nguyên trong trạm | gd-character |
