# Đề xuất thiết kế 4 nhân vật chính (bản 5)

Ngày 2026-11-26. Tuổi, chiều cao, dáng và tính cách gốc do artist chốt. Nguyên tắc artist chốt: **4 người ngang nhau, không ai nổi trội hơn ai, tính cách khác nhau nhưng cân bằng và có logic liên quan với nhau**. Phần còn lại (quá khứ, vật riêng, idle, biểu cảm) là đề xuất để dễ hình dung, chưa phải luật. Hồ sơ nhân vật do gd-character giữ (`projects/game-moi/gdd/he-thong/ho-so-nhan-vat.md`), truyện do gd-story giữ. Những chỗ khác GDD ghi ở mục 8, cần duyệt. Phân tích nhóm nhân vật tham chiếu: `phan-tich-nhom-nhan-vat.md`.

Nguyên tắc ngang nhau cũng khớp với GDD: nhân vật người chơi không ai có lợi thế gameplay (`ho-so-nhan-vat.md` luật 10), và người chơi chọn ai cũng phải thấy mình là nhân vật chính.

## 1. Khung artist đã chốt

| | NVC1 | NVC2 | NVC3 | NVC4 |
|---|---|---|---|---|
| Tên (GDD) | Noor Haddad | Jonas Weber | Mei Tanaka | Tariq Bello |
| Slot, màu | ○ cam `#F26B1D` | △ lam ngọc `#1FB5D6` | □ vàng chanh `#D8E21F` | ◇ hồng tím `#D6309B` |
| Phạm vi trong GDD | MVP | MVP | Sau MVP | Sau MVP |
| Giới tính, tuổi | Nữ, 19 | Nam, 22 | Nữ, 16 | Nam, 18 |
| Chiều cao | 1m67 | 1m76 | 1m50 | 1m74 |
| Chiều cao theo u (1 u = 1m67) | 1,00 | 1,05 | 0,90 | 1,04 |
| Dáng | Mảnh, cao | Săn chắc vừa đủ, không đô | Tròn, đáng yêu | Có cơ bắp |
| Khối thân | Đồng hồ cát | Tam giác ngược | Quả lê | Thang ngược |
| Tính cách artist chốt | Kỹ tính, nghiêm túc, ít nói | Lạc quan, nhiệt huyết | Thiên tài phân tích, hậu đậu khi tự tay làm | Nóng nảy, hài, chỗ dựa vững chắc |
| **Thế mạnh mang cho tổ** | **Kỷ luật** (giữ an toàn) | **Tinh thần** (giữ lửa) | **Trí tuệ** (tìm đường) | **Sức mạnh** (bảo vệ) |

Cả 4 nằm trong khoảng 0,9 tới 1,2 u mà GDD cho phép (`ho-so-nhan-vat.md` luật 4). Va chạm và tầm nhặt vẫn 0,4 u cho mọi người (luật 10), dáng chỉ là hình.

## 2. Cân bằng: vòng đỡ nhau

Không ai là thủ lĩnh cố định. Mỗi người có 1 thế mạnh và 1 điểm yếu. Điểm yếu của mỗi người được đúng một người khác bù, và mỗi người bù cho đúng một người khác. Bốn người tạo thành một vòng khép kín, nên ai cũng cho đi một lần và nhận lại một lần.

```
Noor  --giữ bình tĩnh cho-->  Tariq
  ^                             |
  |                        làm thay tay cho
kéo ra khỏi vỏ                  |
  |                             v
Jonas <--vạch đường cho--     Mei
```

| Người | Thế mạnh | Điểm yếu | Ai bù điểm yếu | Người này bù cho ai |
|---|---|---|---|---|
| Noor | Kỷ luật, tỉ mỉ, giữ an toàn cho cả nhóm | Cứng nhắc, ít nói nên khó gần, ngại rủi ro | Jonas kéo Noor ra khỏi vỏ, nói thay những gì Noor không nói | Tariq: một ánh nhìn của Noor làm Tariq nguội lại |
| Tariq | Sức mạnh, phản xạ nhanh, đứng chắn cho đồng đội | Nóng nảy, hành động trước khi nghĩ | Noor giữ Tariq bình tĩnh, bắt Tariq dừng lại một nhịp | Mei: làm bằng tay những gì Mei nghĩ ra nhưng làm hỏng |
| Mei | Phân tích, ý tưởng, đọc được Driftlife và bản đồ | Hậu đậu khi tự tay làm, thể chất yếu, hay tự ti | Tariq làm thay tay và đứng chắn khi Mei gặp nguy | Jonas: biến nhiệt huyết của Jonas thành kế hoạch có đường đi |
| Jonas | Tinh thần, kết nối mọi người, dám thử cái mới | Liều, thiếu kế hoạch, hứa nhiều hơn làm được | Mei vạch đường để nhiệt huyết của Jonas không thành liều lĩnh | Noor: kéo Noor mở lòng và dám thử |

### Ai dẫn đầu thì tùy tình huống

| Tình huống | Người dẫn | Vì sao |
|---|---|---|
| Lên kế hoạch chuyến bay, đọc bản đồ, đoán Driftlife | Mei | Trí tuệ |
| Gặp nguy, báo đòn, kéo đồng đội đang ngạt về | Tariq | Sức mạnh |
| Cả nhóm nản, chuyến trước thất bại | Jonas | Tinh thần |
| Cần giữ quy trình an toàn, quyết khi nào quay về | Noor | Kỷ luật |

### Cả 6 cặp đều có một kiểu tương tác

Nhân vật người chơi không có lời thoại, nên mọi cặp thể hiện bằng idle và emote. Emote theo cặp chỉ bật khi 2 người đó cùng phòng. Cặp nào cũng có, để không ai bị thiếu đất diễn.

| Cặp | Kiểu tương tác | Thể hiện bằng hình |
|---|---|---|
| Noor và Tariq | Kỷ luật hạ nhiệt nóng nảy | Tariq đang nổi nóng, Noor nhìn một cái là Tariq im |
| Tariq và Mei | Sức mạnh làm thay trí tuệ | Mei chỉ vào máy quét, Tariq gãi đầu không hiểu, rồi cứ thế vác vật nặng đi giúp |
| Mei và Jonas | Trí tuệ dẫn đường cho nhiệt huyết | Jonas hào hứng chỉ ra xa, Mei kéo lại chỉ vào bản đồ một đường khác, Jonas gật lia lịa |
| Jonas và Noor | Nhiệt huyết làm mềm kỷ luật | Jonas giơ máy ảnh chụp, Noor quay đi nhưng khóe môi nhếch nhẹ |
| Noor và Mei | Hai cái đầu lạnh, kiểm tra chéo | Mei đưa máy quét, Noor xem rồi gật |
| Jonas và Tariq | Hai người hăng hái, hay thi nhau | Ai về trạm trước thì giơ tay ăn mừng, người kia lắc đầu |

## 3. Cả tổ: vì sao 4 người trẻ lại là kíp vận hành trạm

Đề xuất cho gd-story: chuyến đi tới Solace rất dài, nên United Accord chọn học viên trẻ làm kíp Seed Station, để khi tới nơi họ vẫn còn đủ sức gây dựng. Cả 4 vừa qua khóa huấn luyện cơ bản, được xếp chung tổ vì 4 thế mạnh bù nhau. Mei dù là thiên tài nhưng chưa có nghề chuyên môn, nên vẫn đúng luật "không ai là chuyên gia, chuyên gia là những người vớt". Người vớt về (Ingrid, Linh...) lớn tuổi hơn, đóng vai người lớn dẫn dắt.

## 4. Hồ sơ từng người

### NVC1 Noor Haddad, nữ, 19 tuổi, 1m67, mảnh và cao. Kỷ luật

| Mục | Nội dung |
|---|---|
| Một câu | Người giữ an toàn cho cả tổ, nói ít nhưng không bao giờ quên ai |
| Tính cách | Kỹ tính, nghiêm túc, ít nói, có trách nhiệm. Quan tâm bằng hành động, không bằng lời |
| Quá khứ | Lớn lên ở một thành phố sa mạc thiếu nước. Quen tính từng giọt và làm đúng quy trình, vì ở đó sai một bước là mất nước cả tuần |
| Hình khối | Đồng hồ cát: vai và hông cân, eo gọn. Đường nét dài, thẳng, gọn |
| Mũ | Tròn đều, kính bầu dục rộng, ăng-ten chữ L bên phải |
| Vật riêng | Dải vải đỏ đất buộc bắp tay trái, kỷ vật của mẹ. Đồng hồ cơ cũ đeo ngoài găng |
| Đồ trạm | Áo liền quần xám than phẳng phiu, cổ áo cài kín, tóc buộc đuôi ngựa cao gọn |
| Dáng đứng | Lưng thẳng, hai tay chắp sau lưng |
| Idle | Chỉnh lại găng cho thẳng, liếc đồng hồ, nhìn lướt qua từng đồng đội |
| Vẫy tay | Không vẫy, gật đầu một cái |
| Biểu cảm đặc trưng | Vui: khóe môi nhếch rất nhẹ. Giận: im lặng nhìn chằm chằm. Lo: nhíu mày, mắt liếc nhanh. Quyết tâm: hất cằm, mắt sắc |
| Biến thể B | Tóc cắt ngang vai, có vết sẹo nhỏ ở lông mày |

### NVC2 Jonas Weber, nam, 22 tuổi, 1m76, săn chắc vừa đủ. Tinh thần

| Mục | Nội dung |
|---|---|
| Một câu | Người lớn tuổi nhất nhưng hồn nhiên nhất, lúc nào cũng tin chuyến sau sẽ tốt hơn |
| Tính cách | Lạc quan, nhiệt huyết, thân thiện, hay cổ vũ, làm theo cảm xúc |
| Quá khứ | Huấn luyện viên trại hè cho thiếu niên. Quen giữ cho cả nhóm vui, nhưng cũng quen lao vào việc trước khi có kế hoạch |
| Hình khối | Tam giác ngược nhẹ: vai rộng vừa, eo thon, tay chân dài. Gọn và nhẹ, không đô. Đường cong mềm, dáng mở |
| Mũ | Tròn, kính rộng hướng lên một chút như đang nhìn xa, dán vài huy hiệu |
| Vật riêng | Máy ảnh chụp lấy liền cũ đeo trước ngực, thích chụp đồng đội. Vòng tay dây dù tự tết, tặng mỗi người trong tổ một cái |
| Đồ trạm | Áo khoác xám than mở phanh, bên trong là áo thun in hình, tay áo xắn |
| Dáng đứng | Nghiêng người về phía trước, một tay chỉ ra xa, cười |
| Idle | Đấm tay vào không khí, giơ máy ảnh chụp đồng đội, nhìn quanh hào hứng |
| Vẫy tay | Vẫy to cả hai tay |
| Biểu cảm đặc trưng | Vui: cười rạng rỡ, mắt sáng. Lo: vẫn cố cười. Quyết tâm: nắm đấm giơ cao |
| Biến thể B | Tóc dài buộc chỏm sau thay cho tóc rối, thêm râu lún phún |
| Màu bộ đồ | Lam xám là chính, lam ngọc chỉ ở viền kính, đèn mũ và mảng vai, để không lẫn với Driftlife xanh ngọc (`C/04-bang-mau/cau-truc-bang-mau.md`) |

Vòng tay dây dù là một chi tiết nối cả tổ: cả 4 người đều đeo một vòng của Jonas, mỗi vòng một màu slot.

### NVC3 Mei Tanaka, nữ, 16 tuổi, 1m50, tròn và đáng yêu. Trí tuệ

| Mục | Nội dung |
|---|---|
| Một câu | Thiên tài của tổ, nghĩ ra mọi thứ nhưng tự tay làm thì hỏng |
| Tính cách | Thông minh, tò mò, nói nhanh khi hào hứng, hậu đậu, hơi tự ti về sự vụng về của mình |
| Quá khứ | Thần đồng, nhảy lớp, vào khóa học viên với điểm cao nhất dù nhỏ tuổi nhất. Quen giải bài trên giấy, ít khi phải làm bằng tay |
| Hình khối | Quả lê: vai nhỏ, thân dưới tròn, đầu to. Nét tròn mềm. Thêm chi tiết góc cạnh ở đồ dùng (kính, máy quét) để vẫn đọc ra chất thông minh |
| Mũ | Tròn hơi dẹt như cái bát úp, kính lớn, một ăng-ten cảm biến nhỏ tự gắn |
| Vật riêng | Kính tròn dày. Máy quét cầm tay tự chế, quấn băng keo, dây cáp lòng thòng |
| Đồ trạm | Hoodie xám than rộng thùng thình, túi đầy bút và tua vít, kính đẩy lên trán |
| Dáng đứng | Ôm máy quét trước ngực, nghiêng đầu, mắt nhìn lên như đang nghĩ |
| Idle | Gõ máy quét, lẩm bẩm tính, làm rơi bút rồi lúng túng nhặt |
| Vẫy tay | Vẫy nhỏ, ngượng, tay kia vẫn ôm máy quét |
| Biểu cảm đặc trưng | Nghĩ ra: mắt sáng, giơ một ngón tay. Hậu đậu: mặt méo, rụt vai. Tập trung: lè lưỡi, nheo mắt |
| Biến thể B | Tóc buộc hai chỏm, kính vuông thay kính tròn |

Mei tò mò về Driftlife theo kiểu nhà nghiên cứu, khớp chủ đề "nuôi thay vì săn" (B10 trong GDD).

### NVC4 Tariq Bello, nam, 18 tuổi, 1m74, có cơ bắp. Sức mạnh

| Mục | Nội dung |
|---|---|
| Một câu | Nóng như lửa, nhưng là người đầu tiên đứng chắn khi đồng đội gặp nguy |
| Tính cách | Nóng nảy, thẳng tính, dễ cáu với máy móc, hài một cách không cố ý, trung thành |
| Quá khứ | Võ sĩ quyền anh nghiệp dư ở một phòng tập khu lao động. Quen phản xạ nhanh, nhưng cũng quen dùng nắm đấm trước khi nghĩ. Biết sơ cứu vết thương, nhưng không phải bác sĩ |
| Hình khối | Thang ngược: vai rộng, cổ dày, eo không thon nhiều, trọng tâm thấp. Thêm một chi tiết lệch cho chất hài: tóc dựng một bên |
| Mũ | Đáy phẳng, gờ hai bên, có một vết lõm do va đập |
| Vật riêng | Băng quấn tay quyền anh, hộp sơ cứu đeo hông (giữ từ GDD) |
| Đồ trạm | Áo ba lỗ xám than, băng quấn tay, khăn hồng tím quàng cổ |
| Dáng đứng | Chân rộng, hai nắm đấm, ngực ưỡn |
| Idle | Đấm gió, bẻ khớp ngón tay, cáu với một cái máy rồi đá nó |
| Vẫy tay | Giơ nắm đấm lên |
| Biểu cảm đặc trưng | Giận: phồng mũi, mặt đỏ, kiểu hài. Vui: cười to, vỗ vai đồng đội. Bảo vệ: mặt nghiêm hẳn lại, khác hoàn toàn lúc thường |
| Biến thể B | Đầu cạo trọc, thêm vết sẹo ở cằm |

## 5. Giữ 4 người ngang nhau bằng hình

| Quy tắc | Cách làm |
|---|---|
| Cùng mức đầu tư | Mỗi người đúng 2 vật riêng, cùng số biểu cảm, cùng số clip idle, cùng mức chi tiết |
| Không ai đứng giữa cố định | Ảnh nhóm, màn chọn nhân vật, key art: xếp hàng ngang hoặc vòng tròn, đổi chỗ giữa các ảnh |
| Cân độ nổi của màu | Vàng chanh của Mei sáng nhất (tương phản 11,5 trên nền Vành đai ngoài), hồng tím của Tariq tối nhất (3,7) theo `kiem-mau.py`. Màu slot đã chốt nên cân bằng diện tích: Mei để mảng vàng chanh nhỏ hơn và nền bộ đồ tối hơn, Tariq để mảng hồng tím lớn hơn |
| Không ai cao lấn át | Chênh cao nhất 26 cm (Jonas 1m76 với Mei 1m50), vẫn trong khoảng GDD cho phép |
| Mỗi người một khoảnh khắc tỏa sáng | Mỗi người có một tình huống mình dẫn đầu (mục 2), làm emote riêng cho khoảnh khắc đó |

## 6. Rủi ro: 2 nhân vật nam dễ trông giống nhau

Jonas 1m76 và Tariq 1m74 chỉ cách nhau 2 cm, cả hai đều vai rộng hơn hông. Khi tô đen trong bộ đồ phồng, rất dễ nhầm, trái luật silhouette 1 giây (`ho-so-nhan-vat.md` luật 2).

| Điểm tách | Jonas | Tariq |
|---|---|---|
| Thân | Thon, eo nhỏ, tay chân dài | Dày, eo to, cổ dày, chân ngắn hơn so với thân |
| Trọng tâm | Cao, dáng nhón, nghiêng về trước | Thấp, chân rộng, đứng trụ |
| Mũ | Tròn, kính hướng lên | Đáy phẳng có gờ, có vết lõm |
| Bộ đồ | Ôm gọn | Vai giáp dày, găng to |
| Đường nét | Cong, mềm | Vuông, cứng |

Nếu được thì nới khoảng cách chiều cao, ví dụ Jonas 1m80 và Tariq 1m72, để tô đen là nhận ra ngay.

## 7. Lưu ý khi vẽ

| Vấn đề | Cách xử lý |
|---|---|
| Ngoài không gian ai cũng mặc bộ đồ phồng, dáng người gần như không thấy | Dáng thể hiện qua cách cắt bộ đồ. Dáng người thật chỉ rõ ở đồ trạm |
| Bình Oxy là trục nâng cấp (`ho-so-nhan-vat.md` luật 5), nâng cấp thì đổi hình | Không dùng bình Oxy làm dấu nhận diện. Dấu nhận diện là mũ, khối thân và vật riêng |
| GDD quy định chiều cao là scale đều cả rig (luật 4) | 4 khối thân khác nhau thì phải scale riêng từng xương (vai, hông). Vẫn dùng chung 1 rig |
| Mei mới 16 tuổi | Thiết kế trong sáng, đồ kín, đúng tuổi |

Kiểm silhouette: tô đen cả 4 người trong cùng cảnh, ở cỡ hiển thị, phải phân biệt được trong 1 giây. Kiểm thêm cân bằng: đưa ảnh nhóm cho người chưa biết game, hỏi "ai là nhân vật chính". Nếu họ chỉ một người thì phải chỉnh lại.

### Prompt AI để thử biến thể nhanh

Dùng để thử ý tưởng, sau đó artist vẽ lại để ép về định hướng art.

Phần chung:

```
Character design sheet, 2D stylized game art, bold outer outline, minimal interior lines, 2-3 tone cel shading, chunky simple shapes, dark muted palette with one strong identity color, sci-fi survival, young space station trainee crew of four equals, worn spacesuit and station outfit, front view and 3/4 view, expression row, silhouette inset, plain dark background
```

| Nhân vật | Phần riêng |
|---|---|
| NVC1 Noor | `serious disciplined 19-year-old woman, the careful one, 167 cm, slender tall hourglass build, upright posture with hands behind back, round helmet with wide oval visor and L-shaped antenna on the right, neat fitted charcoal suit with orange #F26B1D panels, faded red cloth tied on left upper arm, old mechanical wristwatch over the glove, stern focused expression` |
| NVC2 Jonas | `cheerful optimistic 22-year-old man, the morale of the team, 176 cm, lean fit build with moderate inverted triangle, long limbs, not bulky, leaning forward pointing ahead, round helmet with upward-tilted visor and pin badges, blue-gray suit with small teal #1FB5D6 accents, old instant camera on chest, paracord bracelets, big bright smile` |
| NVC3 Mei | `cute clumsy genius 16-year-old girl, the analyst of the team, 150 cm, pear-shaped soft build, wholesome, thick round glasses, bowl-shaped helmet with big visor and a small homemade sensor antenna, black-gray suit with small lime #D8E21F panels, holding a homemade handheld scanner wrapped in tape with dangling cables, thinking expression` |
| NVC4 Tariq | `hot-tempered loyal 18-year-old man, the strong protective one with comic temper, 174 cm, muscular trapezoid build, thick neck, low wide stance, fists ready, flat-bottom helmet with side ridges and a dent, warm gray suit with heavy shoulder armor and large magenta #D6309B panels, boxing hand wraps, first aid case on hip, hair sticking up on one side, angry comedic face` |

## 7b. Ưu và nhược điểm của bản này

### Ưu điểm

| Ưu | Vì sao |
|---|---|
| 4 người khác nhau rõ ở cả dáng lẫn tính cách | Mỗi người một khối thân, một thế mạnh, một kiểu biểu cảm, khó nhầm vai |
| Tính cách nối được với gameplay | Noor với Oxy và quyết định quay về (pillar CP2), Mei với Driftlife và "nuôi thay vì săn" (B10), Tariq với kéo đồng đội đang ngạt về, Jonas với không khí ở cảng và thương nhân |
| Cặp MVP Noor và Jonas tương phản tốt | Kỷ luật đi với tinh thần, một người nghiêm một người cười. Bản trình diễn co-op 2 người có cảm xúc |
| Tiếng cười chia đều | Mei hậu đậu, Tariq nóng nảy, Noor là người đứng nghiêm làm nền, Jonas cười theo. Không dồn hết vào một người |
| Ngang nhau, khớp luật co-op | Không ai là thủ lĩnh cố định, khớp với việc nhân vật người chơi không ai có lợi thế gameplay (luật 10) |

### Nhược điểm và cách sửa

| Nhược | Vì sao là vấn đề | Cách sửa |
|---|---|---|
| Vòng đỡ nhau chỉ khép kín khi đủ 4 người | Vòng là Noor đỡ Tariq, Tariq đỡ Mei, Mei đỡ Jonas, Jonas đỡ Noor. Cặp MVP Noor và Jonas thì Jonas đỡ Noor, nhưng Noor không đỡ lại ai, vì Tariq không có mặt. Chơi 2 hay 3 người thì vòng bị gãy, có người chỉ nhận mà không cho | Đổi từ vòng một chiều sang đỡ hai chiều theo từng cặp: cặp nào cũng có cả hai hướng. Ví dụ Noor và Jonas: Jonas kéo Noor mở lòng, Noor giữ cho Jonas khỏi liều |
| Chơi một mình thì không thấy tính cách nhóm | Chơi 1 người thì 3 người kia nằm chết trong buồng hỏng (luật 9). Mà chơi một mình là cách chơi chính | Tính cách từng người vẫn phải đứng được một mình: idle, biểu cảm, cách bay và cách nhặt đồ. Phần quan hệ nhóm chỉ là phần thưởng thêm khi co-op |
| Tính cách không có tác dụng trong gameplay | Mei là "thiên tài phân tích" nhưng chơi Mei không phân tích được gì hơn người khác. Tariq là "người bảo vệ" nhưng va chạm vẫn 0,4 u như mọi người. Người chơi có thể thấy hình nói một đằng, chơi một nẻo | Không thêm chỉ số (sẽ phá luật công bằng co-op). Thể hiện thế mạnh bằng hoạt ảnh: Mei quét vật thể có động tác khác, Tariq kéo đồng đội có tư thế gồng, Noor kiểm Oxy kỹ hơn trong idle |
| Dễ thành khuôn mẫu quen thuộc | Cô gái lạnh lùng, chàng trai vui vẻ, thiên tài đeo kính hậu đậu, võ sĩ nóng nảy đều là kiểu nhân vật rất quen | Mỗi người thêm một nét ngược với kiểu của mình. Noor lạnh nhưng giữ dải vải của mẹ và lén đeo vòng tay Jonas tặng. Tariq nóng nhưng băng bó cho đồng đội rất nhẹ tay. Jonas vui nhưng là người buồn lâu nhất khi có mất mát. Mei hậu đậu nhưng là người bình tĩnh nhất lúc nguy cấp |
| Mei tròn và đáng yêu dễ bị đọc là linh vật hơn là thiên tài | Bộ não thường có dáng mảnh, góc cạnh | Dồn chất thông minh vào đồ dùng góc cạnh (kính dày, máy quét tự chế) và ánh mắt tập trung |
| 2 nhân vật nam dễ nhầm khi tô đen | Jonas 1m76 và Tariq 1m74 | Xem mục 6 |
| 16 tuổi đi cùng truyện có chiến tranh, bắt cóc, cách mạng | Có thể ảnh hưởng giọng truyện và độ tuổi phát hành | Cần gd-story xem lại các cảnh nặng có Mei |
| Khối lượng hoạt ảnh tăng | 6 emote theo cặp và idle riêng từng người là thêm việc cho 1 artist | MVP chỉ làm cặp Noor và Jonas. 5 cặp còn lại để Sau MVP |

## 8. Khác với GDD hiện tại, cần duyệt

| Thay đổi | GDD hiện tại | Đề xuất | Ai duyệt |
|---|---|---|---|
| Tuổi | Không ghi | 16 tới 22 tuổi, cả tổ là học viên trẻ | gd-story, gd-character, Lead |
| Chiều cao | Noor 1,0, Jonas 1,1, Mei 0,9, Tariq 1,2 u | Noor 1,00, Jonas 1,05, Mei 0,90, Tariq 1,04 u | gd-character |
| Dáng | Tariq vai rất rộng, Mei nhỏ gọn | Theo khối thân ở mục 1 | gd-character |
| Rig | Scale đều cả rig | Scale riêng từng xương | gd-character, dev |
| Dấu nhận diện | Có dựa vào bình Oxy | Mũ, khối thân, vật riêng | gd-character |
| Tính cách, vòng cân bằng, quá khứ | Không có | Mục 1, 2 và 4, chỉ thể hiện qua hình, không có lời thoại | gd-story, gd-character, Lead |
| Vật riêng | Đai dụng cụ (Noor), kính (Jonas), hộp y tế (Tariq) | Theo mục 4. Kính chuyển từ Jonas sang Mei | gd-character |
| Emote theo cặp | Không có | 6 cặp ở mục 2, bật khi 2 người cùng phòng | gd-character, gd-ux |
