# Điểm các vai tự quyết trong từng GDD hệ thống

File sinh bằng `projects/game-moi/tools/gom-tu-quyet.py`, chép nguyên văn mục "Điểm tự quyết" của từng GDD. Không sửa tay file này, sửa ở GDD rồi chạy lại.
Điểm GDM tự quyết nằm ở `log-gdm-tu-quyet.md`.

| File | Vai | Số điểm |
|---|---|---|
| `gdd/he-thong/cot-truyen.md` | gd-story | 45 |
| `gdd/he-thong/nguoi-choi.md` | gd-character | 24 |
| `gdd/he-thong/ho-so-nhan-vat.md` | gd-character | 13 |
| `gdd/he-thong/combat-driftlife.md` | gd-combat | 23 |
| `gdd/he-thong/vat-pham.md` | gd-items | 37 |
| `gdd/he-thong/map.md` | gd-world | 22 |
| `gdd/he-thong/tram-va-cang.md` | gd-quan | 41 |
| `gdd/he-thong/kinh-te-tien-trinh.md` | gd-economy | 17 |
| `gdd/he-thong/ux-ui.md` | gd-ux | 42 |
| `gdd/he-thong/ky-thuat.md` | gd-tech | 11 |
| Tổng | | 275 |

## cot-truyen.md (gd-story, 45 điểm)

| # | Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|---|
| 1 | Truyện có rẽ nhánh không | Một đường, không lựa chọn hội thoại, một kết | Tiến trình truyện là của chung nhóm (C3), bỏ phiếu lựa chọn trong co-op không tạm dừng rất rối. Vừa sức nhóm | Lựa chọn có hệ quả, nhiều kết | Đắt |
| 2 | Vật truyện có mất khi bị kéo về không | Vật manh mối ghi Sổ tay ngay khi nhặt. Vật nhiệm vụ rơi thì về vị trí gốc | P4 cấm bỏ lỡ manh mối. K2 chỉ cho giữ 1 món sẽ làm mất vật truyện | Tính như đồ mọi loại khác theo K2 | Rẻ |
| 4 | Người chơi biết Solace là mồi bằng cách nào | Hộp ghi hành trình: đài quan sát của Cradle đã tự nhìn về phía Solace ngay trước vụ nổ và thấy không có gì khớp hồ sơ | Sự thật phải đến từ chính mắt loài người, không từ lời kẻ thù hay lời thương nhân, thì người chơi mới tin | Daskel nói ra, hoặc Nhem tìm ra | Rẻ |
| 5 | Vì sao phải vào Warden Rig ở chương 5 | Mọi bản đồ loài người có đều chép từ hồ sơ giả. Bản đồ thật chỉ kẻ dựng hồ sơ mới có, và nó là thứ lắp bước cuối của động cơ | Cho chương 5 một mục tiêu cụ thể đúng log GDM dòng 36, nối boss cuối với việc rời neo | Rời neo không cần Rig | Vừa |
| 6 | Dải Giữa mở bằng gì | Bằng mốc C1.9 (Lantern đọc vị trí). Hoa tiêu mở dải Xa và Skiff | Khung mục 7 đặt Hoa tiêu ở chương 2, trong dải Giữa. gd-world đã theo (W4) | Vớt Hoa tiêu ở chương 1 | Vừa |
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

## nguoi-choi.md (gd-character, 24 điểm)

| Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|
| Đơn vị Oxy | 1 điểm bằng 1 giây hao nền, dung lượng bậc 0 là 330 | Số đọc ra thời gian, gd-world tính ngân sách chuyến dễ | Phần trăm hay đơn vị lạ | Rẻ |
| Hao khi bay | Không hao thêm vì bay, chỉ hao nền | Oxy là thời gian (P1), đứng yên cũng hao, bay không bị phạt đôi | Hao theo tốc độ | Rẻ |
| Lướt | Tốn 4 Oxy một lần, hồi chiêu 1,2 giây, miễn sát thương 0,2 giây đầu | Lướt đắt hơn bay 7 lần mỗi u nên là công cụ chiến thuật, không phải đường đi | Lướt miễn phí, lướt có thanh stamina riêng | Rẻ |
| Quán tính | Hãm tự nhiên 12 u/s2, có Hãm chủ động 36 u/s2 | Log dòng 22 chốt quán tính nhẹ. Có áp lực Oxy và combat nên cần dừng gọn | Quán tính nặng kiểu concept cũ | Rẻ |
| Ngạt | 12 giây, tốc độ 40%, không bị nhắm | Đủ cho cứu hoặc chọn đồ, không chết ngay (K2) | 5 giây (quá ngắn cho co-op), 30 giây (kéo dài chờ) | Rẻ |
| Ngạt chạm cửa khí | Cho phép tính là Về an toàn | Khoảnh khắc kịch tính ở dải Gần, thưởng người điều khiển giỏi, không phá K2 vì chỉ vài mét | Cấm, kéo về luôn | Rẻ |
| Ghim món | Người chơi ghim chủ động, mặc định vật hiếm nhất | K2 nói "tự chọn", ghim trước để không bị chọn vội lúc ngạt | Chọn lúc kéo về | Rẻ |
| Mất phần còn lại | Biến mất, không rơi ra map | K2 nói mất, rơi ra map biến thành vòng lặp nhặt lại phá nhịp và đồng bộ khó | Rơi thành túi nhặt lại | Vừa |
| Chia Oxy | Cho tự do (không chỉ khi ngạt), sàn người cho 20 | Thêm tay (P3), sàn tránh cả hai cùng ngạt | Chỉ chia khi ngạt, chia không sàn | Rẻ |
| Trao đồ | Có, giữ E gần đồng đội, cấm khi một bên ngạt (K27) | Thêm tay trước khi ngạt, không lách K2 | Cho trao khi ngạt | Rẻ |
| Dùng vật tiêu hao | Phím G, D-pad xuống, kênh 1,5 giây, hủy khi trúng đòn, cấm khi ngạt | Khớp `ux-ui.md` và K26, tránh bình thành tự cứu khi ngạt | Dùng được khi ngạt, không hủy khi trúng đòn | Rẻ |
| Ghim món bằng tay cầm | Bấm cần phải R3 trong túi | Tránh Y và X đang là Kích Recall và Chia Oxy | Y hoặc X | Rẻ |
| Lướt và trần 12 u/s | Trần chỉ áp cho lực ngoài, Lướt cắt về vmax khi hết | Dev khỏi phải đoán | Trần áp cả Lướt | Rẻ |
| Túi đồ | Đo bằng Khối, danh sách xếp chồng, không lưới | Dave tính theo trọng lượng [D14], ít tốn UI hơn lưới | Lưới ô kiểu Tetris | Vừa |
| Phạt tải | Mềm từ 60%, tốc độ 0,85 và hao nền 1,15 khi đầy | Tạo lựa chọn tham hay về mà không khóa | Không phạt, phạt cứng | Rẻ |
| Kéo vật | Dây lò xo 3 u, 3 lớp vật, thêm người thêm hệ số | Buồng ngủ đông và Driftlife sống cần kéo (khung K7, K9), thêm tay cho co-op mà một người vẫn kéo được | Vật chiếm túi, cần đúng 2 người kéo buồng | Vừa |
| Va chạm người chơi | Đi xuyên nhau | Tránh kẹt hành lang, tránh phá bạn, hợp cứu nhau | Va chạm cứng | Rẻ |
| Nâng cấp bộ đồ | 5 trục, tốc độ tăng tối đa 8% mỗi bậc | Giữ cảm giác tay không đổi mỗi bậc | Tăng tốc lớn | Vừa |
| Đai dụng cụ | 3, 4, 5 ô, đổi ở trạm | Hợp bắt sống ở chương 2, không đổi giữa chuyến để giữ chuẩn bị là một pha | Đổi ngoài không gian | Rẻ |
| Trong trạm | Không nhảy, không chạy, 5,5 u/s, 1 thùng mỗi người, tốc độ không đổi khi mang | Giờ giao thương cần đọc dễ, nhân vật tập trung nhiệm vụ | Có nhảy, nhiều thùng | Vừa |
| Vào sau | Thế giới giữ tối đa 4 nhân vật, người mới chiếm slot trống | Đơn giản hóa dữ liệu, 4 buồng ngủ đông | Không giới hạn nhân vật | Vừa |
| Rớt mạng | Giữ chỗ 15 giây, rồi tính như Bị kéo về (giữ 1 món), theo C10 | Không treo nhóm, không biến thoát thành Recall tức thì | Recall tức thì giữ cả túi (trái K4 và C10) | Rẻ |
| Ping | 4 loại, 3 ping mỗi người, 8 giây | Giao tiếp tối thiểu khi không có voice chat | Chat chữ đầy đủ | Rẻ |
| Gamepad | Hỗ trợ ngắm kéo vào mục tiêu trong nón 15 độ | Chơi gamepad không thiệt | Ngắm thuần | Rẻ |

## ho-so-nhan-vat.md (gd-character, 13 điểm)

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

## combat-driftlife.md (gd-combat, 23 điểm)

| # | Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|---|
| 1 | Ngắm | Tự do, không khóa mục tiêu, gamepad hỗ trợ 6 độ | Bay 8 hướng, người chơi cần chọn đúng con trong bầy | Khóa mục tiêu | Vừa |
| 2 | Miễn sát thương sau khi trúng | 0,8 s | Chống bị bầy đánh liên hoàn, kho tri thức N8 | Không có | Rẻ |
| 3 | Lướt có miễn sát thương | 0,2 s đầu | Cách né chủ động duy nhất, kỹ năng người giỏi | Không có | Rẻ |
| 4 | Hai cách làm bất lực | Choáng nhanh ngắn, Mê chậm dài | Cho lựa chọn dụng cụ theo tình huống, không chỉ hơn kém số | Một cách duy nhất | Vừa |
| 5 | DR | Miễn 2 s, ngưỡng x1,5 tới x3 | Chống khóa, nhất là co-op 4 người | Không có | Rẻ |
| 6 | Bắt theo cỡ | S lưới hoặc tay, M Phao kéo, L sinh thiết | Mỗi cỡ một động tác khác, L không vào khoang nuôi | Mọi cỡ bắt như nhau | Vừa |
| 7 | Chất lượng | 1 đến 3 sao theo Sinh lực lúc bắt | Một luật cho mọi dụng cụ, thưởng bắt khéo | Theo loại súng như Dave | Rẻ |
| 8 | Kết nhanh | Hạ con bất lực cho 2 sao, có từ MVP | MVP có lý do làm choáng trước khi hạ, dạy trước động tác bắt | Không có | Rẻ |
| 9 | Mẫu sống cỡ S đi trong Lồng mẫu kéo theo, tối đa 3 con, 1 lồng mỗi người | Có | Khớp `vat-pham.md` (mẫu sống là vật kéo). Cái giá thấy được của bắt sống | Vào túi chiếm gấp đôi chỗ | Rẻ |
| 10 | Vé tấn công | 2 ở dải Gần, 3 ở Giữa và Xa, riêng từng người | Đông mà vẫn công bằng, co-op tự cân | Không giới hạn | Vừa |
| 11 | Không sát thương đồng đội, Lao từ kéo đồng đội | Có | C1 không PvP. Kéo đồng đội là động từ co-op rẻ, giúp cứu người ngạt | Bỏ qua va chạm với đồng đội | Rẻ |
| 12 | Không dụng cụ combat trong trạm | Có | Trạm là nhà, sự cố xử bằng tay | Cho bắn trong trạm | Rẻ |
| 13 | Số loài | 5 mỗi dải, 6 kiểu hành vi | Brief 4 đến 6. 5 đủ phủ các kiểu mà không vượt sức 1 artist | 6 mỗi dải | Vừa |
| 14 | Shepherd Whale không hạ được | Có | Không phải sinh vật nào cũng để đánh, giữ chủ đề nuôi thay vì săn (B10) | Hạ được với máu rất lớn | Rẻ |
| 15 | Boss Driftlife có hai cách kết | Hạ hoặc Xua đi | Lựa chọn nuôi thay vì săn ở khoảnh khắc lớn nhất, chi phí thấp vì dùng chung phòng | Chỉ hạ | Vừa |
| 16 | Dấu săn bắt trên Driftlife | Chỉ là hình, không đổi chỉ số | Kể cú lật qua thứ người chơi gặp (P4) mà không đặt manh mối chính ngoài map nhánh (K7) | Manh mối rơi từ Driftlife | Rẻ |
| 17 | The Wardens khác Driftlife | Bắn xa, phối hợp, khiên, không bắt sống, miễn mê | Kiểu chơi mới thật sự ở chương 3 | Driftlife mạnh hơn | Vừa |
| 18 | Driftlife thù The Wardens | Có (Sau MVP) | Cho người chơi dùng thế giới để đánh, kể chuyện qua hành vi | Hai phe làm ngơ nhau | Rẻ |
| 19 | Hệ số co-op | Sinh lực và ngưỡng Driftlife bằng N chia k(N) của dải (bảng 6b), boss và The Wardens +60% cả Sinh lực lẫn ngưỡng, sát thương không đổi | Chốt với gd-world. Sim S4 đã chạy: kiểu chia đúng 1,00, kiểu dồn 1,07 đến 1,38 ở 4 người (cỡ M, L), nhóm tự tách cặp. Mục tiêu 0,9 đến 1,1 áp cho kiểu chia | Công thức tuyến tính +22%, +40%, +50% | Rẻ |
| 20 | Boss hồi khi cả nhóm rời phòng | Có, khi không còn ai trong phòng quá 10 s hoặc cả nhóm về trạm. Cửa không khóa | Đơn giản, không có trạng thái boss dở dang. Người chơi một mình luôn rút được (P1) | Giữ máu boss qua chuyến, khóa cửa | Rẻ |
| 21 | Cái giá của bắt sống | Vật tiêu hao (Lưới cuộn, Ống gây mê, Phao kéo, Kim sinh thiết), Lồng mẫu 3 con, bắt tay chậm 1,5 s. Lồng không làm chậm người kéo (`nguoi-choi.md` lớp Nhẹ) | Sim 3.8 cho thấy bắt nhanh bằng hoặc hơn hạ, nên cái giá phải nằm ngoài thời gian. Chấp nhận bắt cỡ S trội khi lồng còn chỗ | Lồng làm chậm người kéo (cần gd-character đổi lớp Nhẹ), thanh vật lộn khi bắt | Rẻ |
| 22 | Ghim Lồng mẫu khi bị kéo về | Giữ 1 con, sao cao nhất | Đề xuất của gd-economy: giữ cả lồng thì K2 mất tác dụng với người bắt sống | Giữ cả lồng | Rẻ |
| 23 | BS-1 cắt Dây nối khi Sinh lực còn từ 50% (log GDM 116) | Đoạn đầu cắt ở mọi mức. Đoạn thứ hai khóa tới khi Sinh lực dưới 50%. Đoạn đã cắt giữ tới hết trận, về lại 2 đoạn khi boss hồi đầy. Boss không đổi hành vi sau khi bị cắt | Trùng điều kiện sim S5 đang chạy nên số S5 không đổi. Công cắt sớm không mất. Xua đi không thành đường tắt (1 lần cắt từng là 0,4 phút). Không thêm hành vi boss mới cho art và dev | Cho cắt đoạn hai rồi boss bỏ đi khi Sinh lực xuống dưới 50% sau đó (trạng thái treo khó đọc). Đoạn mọc lại sau mỗi lần boss tỉnh (phạt cắt sớm, phải chạy lại S5) | Rẻ |

## vat-pham.md (gd-items, 37 điểm)

| # | Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|---|
| 1 | Đơn vị giá trị trước khi có giá Tally | Chỉ số GTĐ tương đối (RES-101 bằng 1,0), không phải Tally | Cần một thước để kiểm biên lợi chuỗi và tỉ lệ mẫu sống 1,5 đến 2,0 mà không ghi giá | Không có thước (không kiểm được), ghi giá Tally (trái brief) | Rẻ |
| 2 | Túi tính bằng Khối, không phải ô | Khối, mỗi vật phẩm có Khối nguyên 1 đến 2 | Một số đơn giản, gd-character đổi sang ô được bằng 1 Khối bằng 1 ô | Ô lưới tự do (khó cho gamepad, tốn UI) | Vừa |
| 3 | Dụng cụ là mở khóa cho cả nhóm, không có dạng vật | Mở khóa nhóm | Khớp C3, C4. Bạn vào giữa chừng không yếu, ít thứ trong kho phải theo dõi | Mỗi người sở hữu dụng cụ riêng | Vừa |
| 4 | Dụng cụ không có độ bền | Không độ bền | K17 không chi phí duy trì. Chi phí dụng cụ là vật tiêu hao hoặc cooldown | Độ bền và sửa chữa | Rẻ |
| 5 | Cổng mềm ở khai thác (bậc thấp vẫn làm nhưng chậm 4 lần) | Mềm | Cùng tinh thần K6. Cho người giỏi liều sớm | Cổng cứng (chặn hẳn) | Rẻ |
| 6 | Vật nhiệm vụ chiếm túi, mất thì về vị trí gốc chuyến sau. Vật manh mối tự ghi Sổ tay | Chiếm túi, vị trí gốc | P4 cấm manh mối bắt buộc nằm ở chỗ mất được. K2 nói mất phần còn lại của túi, STY không nằm trong túi | Coi STY là vật thường | Rẻ |
| 7 | Kho 999 mỗi loại | 999 | UI gọn, không đầy trong thực tế | Kho giới hạn tổng | Rẻ |
| 8 | "1 món" ở K2 là 1 đơn vị một loại | 1 đơn vị | Người chơi giữ món quý nhất. Kho cheap stack không bị giữ hết | 1 loại (cả stack) | Rẻ |
| 9 | Chuỗi giá trị 3 bước: thô, COM, kiện | 3 bước, hệ số 1,25 đến 1,5 và 1,1 đến 1,25 | Giờ giao thương có chỗ để chế thêm (K13) mà không phá nhịp giờ giao thương 3 đến 5 phút | 2 bước, hoặc cấp nâng Taste như Dave | Vừa |
| 10 | Mẫu sống có 3 nơi tiêu | Nuôi, nghiên cứu, kiện sống | K9 nói "nuôi, nghiên cứu, đơn cảng giá cao", gd-items gắn mỗi nơi vào một công thức | Chỉ nuôi | Vừa |
| 11 | Nghiên cứu đổi mẫu sống ra bản thiết kế dụng cụ | Có, mỗi loài mở một bản | Cho mẫu sống giá trị thiết kế, nối nhà sinh học với tiến trình dụng cụ | Nghiên cứu cho điểm kinh nghiệm (trái K18) | Vừa |
| 12 | Bình Oxy nhỏ là vật tiêu hao hồi một phần Oxy | Có, giá bằng chế tạo và Khối | Cho người chơi liều đổi chỗ túi lấy thêm thời gian, không miễn phí (P1) | Không có vật tiêu hao hồi Oxy | Rẻ |
| 13 | Hệ số tài nguyên theo số người | Bỏ núm riêng của vật phẩm, dùng k(N) của gd-world ở `map.md` | gd-world chỉ ra hai núm cho cùng một việc, và mục tiêu khung 70 đến 85% đang làm mỗi người nhặt ít (khoảng 35% so với chơi một mình) | N mũ 0,36 của bản trước | Rẻ |
| 14 | Tài nguyên dải trước giữ nguyên sink ở mọi giai đoạn | Có (sửa khoang, luyện COM, kiện thô, nâng cấp bậc thấp) | Tránh tài nguyên dải Gần trở thành rác sau chương 2 | Tài nguyên dải trước hết giá trị | Rẻ |
| 15 | Linh kiện ENG-105 không mua được | Chế từ STY (RCP-207) | Khớp lý do R2 của truyện (tọa độ không ai bán) | Mua ở Shop | Rẻ |
| 16 | Chìa mở lối map nhánh | Cổng cứng, không cần mang theo, nhóm mở khóa thì ai cũng mở. Bộ kích nguồn là công thức đầu của Xưởng | Tránh quên mang chìa trong co-op, giữ nhịp khóa và chìa đầu game (gd-world, gd-story: Linh cần dụng cụ Ingrid chế) | Chìa chiếm ô dụng cụ, chìa riêng từng người | Rẻ |
| 17 | Mẫu sinh thiết (BPS) cho loài L | Nhóm vật phẩm riêng, vào túi, giá ròng 0,45 lần E(hạ) cùng loài, đứng ngoài K9 | GDM đã sửa K9 chỉ áp cho loài bắt sống được (log 66), sinh thiết không phải bắt sống | Nâng k lên 1,5 đến 2,0 | Vừa |
| 18 | Mẫu boss (xua đi) | SMP-192 và SMP-292, GTĐ bằng hoặc hơn hạch một chút | Hai cách kết ở chương 1 và 2 cho giá trị gần bằng nhau để chọn theo lối chơi, không theo thưởng | Chỉ hạ mới có thưởng | Rẻ |
| 19 | Thức ăn nuôi | FED-101, 201, 301, 1 mỗi con mỗi ngày, làm từ mô sinh học, rẻ hơn sản phẩm nuôi từ 1,5 lần (script kiểm) | gd-quan cần ID. Cho mô sinh học thêm chỗ tiêu và nuôi có lời | Nuôi không tốn gì | Rẻ |
| 20 | Bản sao dữ liệu (CGO-131) | Sao từ STY loại dữ liệu bằng 1 COM-104, vật gốc ở lại, hệ số giá trị 1,5 đến 2,5 | Giữ luật STY không bán của gd-quan và P4 | Bán thẳng vật gốc | Rẻ |
| 21 | Kiện vật tư (CGO-141) cho nhóm hàng đồ chế HC08 | 2 Bình Oxy nhỏ cộng 2 Lưới cuộn | Đồ chế duy nhất không phải COM mà bán được | Bán thẳng dụng cụ (dụng cụ là mở khóa nhóm, không có dạng vật) | Rẻ |
| 22 | Giá trị một kiện theo túi 80 Khối | GTĐ một kiện bằng một phần mười giá trị đơn một giờ giao thương của chương (khoảng 13,6 chương 1, 42,5 chương 2, 104 chương 3, theo gd-economy), nên mỗi giờ giao thương khoảng 10 kiện. Từ đợt 9 bán theo thùng, 1 kiện = 2,5 thùng, khoảng 25 thùng một giờ giao thương một người | Bản trước chia nhỏ theo túi 20 Khối (2 đến 3 GTĐ mỗi kiện) khiến đơn một giờ giao thương cần 54 kiện, Tally bị chặn bởi sức giờ giao thương (QA GD-031, gd-economy) | Kiện 2 đến 3 GTĐ | Rẻ |
| 23 | Gộp Dụng cụ nạy vào Dụng cụ khai thác (TOL-102), bỏ TOL-101 | Một dụng cụ khai thác khoan và nạy | Khoan và nạy là cùng thao tác. Gộp để 3 ô dụng cụ ở bậc 0 còn chỗ cho dụng cụ hạ và dụng cụ thứ ba | Hai dụng cụ khai thác riêng | Vừa |
| 24 | Súng lưới, Lồng mẫu, Dùi xung mở bằng quest Kỹ sư ở chương 1 | MVP, không cần bản thiết kế | Log 49: Súng lưới cỡ S ở chương 1, một loại hàng sống ở chương 1. BPR-101 đổi thành bản thiết kế Súng lưới bậc 2 (đề xuất gd-combat) | Súng lưới mở ở chương 2 bằng BPR | Rẻ |
| 25 | Đánh số bậc nâng cấp bộ đồ theo gd-character (bậc 0 là khởi điểm) | UPG-OXY-1 là nâng cấp đầu tiên, lớp chi phí bằng bậc cộng 1 | Khớp T-OXY, T-TUI, T-DAY, T-VO, T-DUNGCU của `nguoi-choi.md`. Thêm trục Đai dụng cụ (UPG-RACK-1 và 2) | Bậc 1 là khởi điểm (bản trước) | Rẻ |
| 26 | Bình Oxy nhỏ hồi 40 điểm Oxy | 40 điểm, 1,5 giây, 1 Bình mất 2 Khối, nhãn MVP | Khớp đề xuất của gd-character (khoảng 12% bậc 0), trần 2 bình mỗi chuyến, kiểm bằng sim | Hồi nhiều hơn | Rẻ |
| 27 | Giảm lượng nhặt tay SLV-101 xuống 1 lần quay | 1 lần quay, gd-world rải thưa | Brief đợt 1b hỏi rải thưa hay giảm lượng. Giảm lượng là việc của gd-items và không cần map đổi | Chỉ rải thưa | Rẻ |
| 28 | Nhân đôi giây khai thác mọi điểm khai thác (GD-030) | Giây ở bậc 1 nhân 2 (hằng số TIME_X trong script) | Sim chuyến của gd-tech: chuyến chương 1 chỉ 1,1 phút, khung muốn 4 đến 6. Khoan lâu hơn hợp cảm giác tháo dỡ, tỉ lệ giữa các node không đổi | Giữ giây cũ | Rẻ |
| 29 | Boss chương 1 có chỗ dùng ở MVP | Động cơ giai đoạn 1 (KH13, MVP) nhận 1 hạch hoặc 1 mẫu boss BS-1 | QA GD-031 lỗi 4: SMP-191 và SMP-192 nhãn MVP nhưng chỉ dùng ở khoang dẫn đường (chương 2). STY-102 giữ nhãn MVP theo gd-quan: nhặt ở MVP (Station Cinder), nộp ở khoang dẫn đường chương 2 (KH08 là Sau MVP) | Đổi nhãn sang Sau MVP | Rẻ |
| 30 | Lồng sinh vật sống giá theo loài | GTĐ lồng bằng GTĐ mẫu sống bên trong nhân hệ số sao | QA GD-031 lỗi 5: một giá phẳng làm hệ số k sập (G02 ròng 0,94) | Một giá phẳng cho cả dải | Vừa |
| 31 | Trần Bình Oxy nhỏ 2 bình mỗi chuyến | 2 bình trong túi mỗi chuyến | QA GD-031 lỗi 9: không có trần thì đổi Khối túi lấy Oxy vô hạn, phá K1 và K22 | Không trần, chi phí leo thang | Rẻ |
| 32 | Con nuôi vào lồng giao đơn | Giá lồng nuôi bằng 0,5 lần lồng bắt thật, tối đa 1 lồng mỗi loài mỗi ngày | QA GD-031 lỗi 10: tránh vòng lặp nuôi rồi bán không tốn chuyến | Con nuôi không giao được | Rẻ |
| 33 | SLV-112 nhả tài nguyên thô thay vì COM | RES-104, RES-103, RES-106 | QA GD-031 lỗi 21: nhả COM bỏ qua hệ số chuỗi 1,25 đến 1,5 và bước Xưởng, mật độ 4,87 trội | Giữ COM | Rẻ |
| 34 | Rời phiên theo C10 | Giữ chỗ 15 giây rồi áp luật 1 món | QA GD-031 lỗi 1: bản trước cho giữ túi trong dữ liệu, trái C10 | Giữ túi | Rẻ |
| 35 | Kiện tin mật ăn giá bằng kiện vỏ bọc | CGO-421 hệ số 1,0, gói tin STY-701 giá 0 | Nối tình báo là sức nặng truyện, không phải nguồn Tally mới (log 87, không thêm hệ thống). Một ngày tối đa 1 gói nên kiện tin mật chỉ là một dòng đơn | Kiện tin có giá riêng | Rẻ |
| 36 | Kén của Sevra là vật kéo riêng BNG-102, không dùng chung BNG-101 | BNG-102 nhãn Sau MVP, dải Xa, kéo như BNG-101 nhưng không mở người vớt, kéo hai lần (C3.8 về trạm, C5.1 tới The Hearth) | BNG-101 gắn người vớt theo K12, dùng chung sẽ mở nhầm người vớt (gd-story đề nghị ID riêng hoặc dùng chung) | Dùng chung BNG-101 | Rẻ |
| 37 | Bán theo thùng, bỏ cỡ kiện và tốc độ mang | 1 kiện = 2,5 thùng, lồng sống không chia. Đóng thùng tự động lúc Mở giao thương, không tốn thời gian giờ giao thương. Kiện tinh và lồng làm trước giờ giao thương | Lead chốt giờ giao thương theo khung Dave 2026-11-20 (D0, D1, D2), bot đo bản mỗi tàu một kiện thì rảnh 76% | Giữ cỡ Nhỏ, Vừa, Lớn và tốc độ mang | Vừa |

## map.md (gd-world, 22 điểm)

| # | Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|---|
| W1 | Hình học map tổng | Dải ngang một trục, Ember ở mép trái | Khoảng cách tới trạm là một trục, tính Oxy được, ghép mảnh theo cột đơn giản | Vòng tròn đồng tâm quanh trạm (diện tích tăng bậc hai, nặng art) | Đắt |
| W2 | Đơn vị ghép | Lưới mảnh 40 x 24 u, cao 3 hàng | Mỗi mảnh khoảng 2 x 2 màn hình, đủ chỗ cho một ý | Mảnh tự do không lưới | Vừa |
| W3 | Bảo đảm đường | Đường chính kiểu một hàng mỗi cột, ít nhất một vòng mỗi dải | Không sinh bố cục hỏng, có lựa chọn đường | Cây phân nhánh | Rẻ |
| W4 | Mở dải | Rạn vụn chặn dải chưa mở, mở theo mốc chương. Giữa mở bởi mốc đóng chương 1, Xa bởi mốc đóng chương 2 | Khớp K6 (mở theo chương) và gd-story (Hoa tiêu ở Wick trong dải Giữa, mở dải Xa) | Hoa tiêu mở Giữa (Hoa tiêu nằm trong Giữa nên không tới được) | Rẻ |
| W5 | Cấp môi trường từng dải | Gần 0, Giữa 1, Xa 2, Cradle Interior và Warden Rig 3 (môi trường E3 Lõi rò). Hệ số thiếu cấp dùng của gd-character | Mỗi chương lớn cần một bậc vỏ, khớp bảng T-VO của gd-character. Thiếu 1 cấp còn 29 đến 33% thời gian làm việc: đi được nhưng đắt (K6) | Cradle dùng E2 của dải Xa (cấp 3 của T-VO không có chỗ dùng) | Rẻ |
| W6 | Sinh lại trong chuyến | Không | Chống farm tại chỗ, K8 áp ở mức chuyến | Làm mới theo thời gian | Rẻ |
| W7 | Số beacon | Gần 1, Giữa 2, Xa 3, phải thấy mới ghim | Beacon là núm của P1, giới hạn để còn quyết định quay về | Không giới hạn như Escape Pod | Rẻ |
| W8 | Beacon dùng lại | Nhiều lần, nhiều người, mỗi người kích riêng | P3, không có luật cần đúng N người | Một lần mỗi beacon | Rẻ |
| W9 | Beacon trong map nhánh | Cố định theo sơ đồ | Map nhánh không sinh lại (K7) | Đổi chỗ như map tổng | Rẻ |
| W10 | Skiff chỉ vào map nhánh, không ra map tổng | Chuyến Skiff là chuyến map nhánh | Không để Skiff thành đường tắt khai thác Xa | Skiff thả ở map tổng | Vừa |
| W11 | Map nhánh giữ trạng thái | Cửa, boss, đường tắt giữ, tài nguyên sinh lại | Map nhánh lớn chia được nhiều chuyến | Đặt lại mỗi lần | Vừa |
| W12 | Khu có khí | Không hao nền, không nạp Oxy | Trạm còn người có khí là hợp truyện, không vi phạm P1 vì không hồi | Hao như ngoài | Rẻ |
| W13 | Hazard có máu | Chỉ máy phát Hàng rào cắt | Một hazard dạy người chơi phá vật thể The Wardens | Mọi hazard phá được | Rẻ |
| W14 | Người vớt trong buồng | Kéo buồng tới beacon hoặc cửa ra | Một hành động vớt rõ, dùng lại luật kéo vật | Người vớt tự đi theo | Rẻ |
| W15 | Đặt người vớt | Ingrid, Linh ở Cinder, Rafa ở Wick, Amara ở Lantern, Yusuf ở Waypost | Khớp bảng của gd-story | Mỗi người một xác riêng | Rẻ |
| W16 | Hệ số số người | k(N) = 1 + a x (N trừ 1), a theo dải: Gần 0,30, Giữa 0,25, Xa 0,38 | Sim gd-tech: a tối thiểu khác nhau giữa chương 1 và chương 5. Một a chung không đạt cả hai mục tiêu ở mọi chương | a chung 0,47 (nhóm 4 qua chương đầu quá nhanh), a chung 0,25 (chương 5 dưới 60% mỗi người) | Rẻ |
| W20 | Hướng sửa thời lượng chuyến | Không đổi map. Giây khai thác nhân 2 (gd-items đã làm). Túi bậc 0 đến 4 là 80, 100, 126, 168, 216 và bình 330, 450, 600, 780, 1000 (GDM đã chốt, log 54) | Sim: diện tích, mật độ, hazard không kéo dài chuyến đủ. Túi quyết đầu game, bình quyết cuối game | Tăng số hàng, mật độ, giảm hazard (sim cho ngắn hơn hoặc thêm dưới 1 phút) | Vừa |
| W21 | Định nghĩa để dựng bộ sinh mảnh | Trùng mảnh là cùng mảnh cùng ô. Cờ nửa ngoài "Có" là chỉ cột 3, 4. Cổng ô cố định Ember Mooring 1111, Cinder 1101. Beacon không cùng ô chuyến trước. Đường chính nối liền giữa hai dải. Bố cục dự phòng dựng tay. Kiểm bằng `sim/bo_cuc.py` | QA GD-031: các luật cũ chưa dựng được, cách đọc khác nhau lệch tỉ lệ hợp lệ hàng nghìn lần | Trùng tính theo tập mảnh (kho 16 không đạt tiêu chí) | Rẻ |
| W22 | Nơi cứu và hộ tống Sevra (lời Lead, GD-033) | Dùng lại N4 Veyl Waypost theo đề xuất của gd-story. Cứu ở Waypost Outer Ring, kén về Ember bằng beacon hoặc cửa khí (C3.8). Hộ tống: Skiff chở kén tới cửa N4, kéo tới cửa The Hearth (C5.1). Trong hộ tống kén không theo beacon, lưu ở beacon cố định gần nhất | Không thêm map nhánh và art mới. Một đích cho mỗi mốc. Kén không theo beacon để hộ tống không bị bỏ qua bằng một lần kích | Station Flint, kéo kén xuyên map tổng từ Ember | Rẻ |
| W17 | Kho mảnh MVP | 16 mảnh Gần, 2 ô cố định | Tỉ lệ kho trên ô ghép 1,6, vừa sức 1 artist khi dựng bằng kit | 22 mảnh ngay MVP | Rẻ |
| W19 | Nơi đặt vật kể chuyện chương 4 và 5 | Hộp ghi hành trình ở Bridge Archive (khu cuối Cradle Interior). Bản đồ sao thật và lệnh phục kích mang dấu Daskel ở Data Core của Warden Rig, mở sau BS-5 | Vật kể chuyện là phần thưởng của trận cuối, người chơi tự tay lấy | Rơi từ boss (dễ lỡ khi xua hoặc rớt mạng) | Rẻ |
| W18 | Boss chương 2 và 3 | BS-2 ở Lantern Outer Ring, BS-3 ở Flint. Waypost và Wick không boss | BS-2 là Gulper vây Lantern (mô tả của gd-combat), lần đầu tới Lantern thành trận cứu trạm. BS-3 là máy thu hoạch, đặt ở Flint thì trận boss và manh mối cú lật Driftlife nói cùng một điều. Waypost trung lập giữ vai bến buôn | BS-2 ở Wick, BS-3 ở Waypost | Rẻ |

## tram-va-cang.md (gd-quan, 41 điểm)

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

## kinh-te-tien-trinh.md (gd-economy, 17 điểm)

| # | Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|---|
| 1 | Đơn vị quy đổi | 10 Tally mỗi GTĐ | Số tròn, dễ đọc, nhân với hệ số bậc ra giá thùng | Quy đổi một đổi một (giá lẻ thập phân) | Rẻ |
| 2 | Cách đặt giá Tally | Ngân sách chương neo thu nhập tham chiếu và ngày mục tiêu, một núm β | Mật độ dải Xa gấp <!--v:xa-gan-->6,7<!--/v--> dải Gần, giá mũ một hệ số làm Tally dư hàng chục lần (vòng 1) | Giá gốc nhân hệ số mũ theo chương | Rẻ |
| 3 | Giá thùng theo Hạng cảng | Không nhân | Hạng đã mở tàu và Shop, nhân thêm là vòng dương kép | Cộng 4% mỗi hạng | Rẻ |
| 4 | Nguồn Tally | Chỉ giờ giao thương | K18. Tally từ quest làm người nghỉ giao thương vẫn tiến | Tally từ quest người vớt | Rẻ |
| 5 | Cổng chương | Sửa khoang, ENG, chuyến map nhánh, sàn ngày truyện. T-VO không chặn chương | Khớp `vat-pham.md` (UPG-ENV-1 mở ở chương 2) và K6 (thiếu cấp vẫn vào được, chỉ đắt) | T-VO là cổng chương, bắt mua mọi nâng cấp | Vừa |
| 6 | ENG mở theo Hạng | 3, 5, 7, 8 (hạng trần của chương) | gd-quan đã ghi hạng 3 và hạng 8, điền hai hạng giữa theo trần chương | Mở theo chương, không theo Hạng | Rẻ |
| 7 | Giờ từng chương | 0,8 (Lead chốt 2026-11-23), 2,75, 3,5, 3,0, 1,5 | Khung chỉ đặt chương 1 và tổng. Chương 3 dài nhất vì dải Xa, sự cố và nhiều tàu. Chương 5 ngắn vì chỉ còn truyện | Chia đều | Rẻ |
| 8 | Độ dài một ngày | 2 chuyến cộng phút giờ giao thương của gd-tech cộng 3 phút, co-op thêm 5% mỗi người | Khớp khung mục 4 và mục 9 | Không tính thời gian chờ co-op | Rẻ |
| 9 | Ba kịch bản | Bảng 3.4, giờ giao thương theo trễ phản xạ 3, 2, 1 giây của sim gd-tech | Tệ là người mới hay ngạt, giao chậm, không chuẩn bị danh mục. Tốt là người tối ưu | Chỉ một kịch bản | Rẻ |
| 10 | Bộ đồ | Dùng 5 trục của `nguoi-choi.md` (T-OXY, T-VO, T-DAY, T-TUI, T-DUNGCU), vật liệu theo công thức gd-items | Chọn bộ của chủ hệ thống bộ đồ | Bộ UPG của gd-items | Rẻ |
| 11 | Xưởng cấp 2 | Chương 2, là cổng của nâng cấp bộ đồ từ bậc 2. Dụng cụ không qua cổng | Bậc 2 bộ đồ là chương 2. `tram-va-cang.md` mục 2.7: Kỹ sư cấp 2 mới nâng cấp bậc 2 (GDM chốt giữ cổng 2026-11-23) | Chương 1. Bỏ cổng, chỉ giữ chế 2 mẻ song song | Rẻ |
| 12 | Hàng mang sang chương mới | Giữ 30% giá trị | Hàng dải cũ vẫn bán được nhưng tàu ít gọi | Giữ 100% | Rẻ |
| 13 | Giãn giá thùng | 5 bậc giá theo vai của món trong dải, hệ số 0,75 tới 1,5, độ gọi ngược với giá | Giá sát nhau thì lập danh mục không có thế cân (sim GD-054 chênh dưới 13%). Bậc theo vai giữ một quy tắc cho cả 5 dải, không chỉnh từng món | Hệ số riêng từng món, hoặc giá theo độ hiếm của gd-items | Rẻ |
| 14 | Hàng sống 1,3 thấp hơn hàng hiếm 1,5 | Giữ K9 trong 1,2 tới 2 lần hạ | Đặc sản rơi khi hạ đã ở bậc hiếm. Sống 1,5 thì Sting Krill bắt tay lên 2,24 lần, vượt trần | Sống 1,5 | Rẻ |
| 15 | Ngưỡng Hạng | Giữ ngày đủ điểm của bản trước đợt 9 | Nhịp mở theo chương đã được duyệt, đổi nguồn điểm không phải lý do đổi nhịp | Đặt lại theo 70% điểm tới ngày mục tiêu như vòng 3 | Rẻ |
| 16 | Chỉ số giá mỗi kịch bản | Danh mục đại diện chương 1, áp cho mọi chương | Sim mức giá trị không theo từng loại hàng. Chương sau giữ cùng tỉ lệ bậc | Theo dõi kho từng loại hàng | Vừa |
| 17 | Giá khoang sinh quyển cấp 3 (chương 3) | Đơn giá một phần trọng số của chương 3 nhân 0,4, không cộng vào tổng trọng số chương 3. Gói cấp 3 các khoang còn lại ở chương 4 giữ dòng và giá 18350 | Thêm một dòng mà không đổi giá đã chốt của chương 3 và 4. Chương 3 chi thật 145000 so với ngân sách 130350. Sim đo chương 3 dài thêm 0,38 giờ, cả game 14,2 giờ, trong mục tiêu | Chia lại ngân sách chương 3 có dòng mới (7 giá chương 3 giảm khoảng 10%), hoặc trừ phần khoang sinh quyển khỏi gói chương 4 (giá chương 4 khác đổi) | Rẻ |

## ux-ui.md (gd-ux, 42 điểm)

| Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|
| Khung hình | 16:9, 1280x720, màn rộng mở chiều ngang | Brief GD-029 yêu cầu đọc được ở 1280x720, PC có nhiều tỉ lệ màn | Khóa 16:9 mọi màn | Rẻ |
| Cỡ chữ tối thiểu | 12 px ở 720p, tức 18 px ở 1080p | Mức PC của Xbox, bảo đảm đọc ở máy cầm tay | Chữ nhỏ hơn cho đẹp | Rẻ |
| Oxy hiển thị | Điểm cộng thời gian còn | P1: người chơi đọc được hệ quả, Oxy bằng giây nên đọc luôn | Chỉ thanh không số | Rẻ |
| Vạch đủ về | Sọc chéo dưới vạch, đặc trên vạch, nhãn đích | Không dựa vào màu, đọc ở liếc mắt | Hai thanh Oxy | Rẻ |
| La bàn | Mũi tên ở mép, không minimap luôn hiện | Giữ màn sạch cho bay 8 hướng, đã có Bản đồ chuyến | Minimap góc màn | Vừa |
| Bản đồ chuyến | Có trong MVP, chỉ hiện phần đã đi | Bố cục sinh lại mỗi chuyến, Recall Beacon đổi chỗ | Chỉ la bàn | Vừa |
| Phân loại giao diện | HUD phẳng cho bay, mặt cắt trực quan cho trạm | Máu đọc tốt hơn ở HUD, trạm thì mặt cắt đã là cảnh | Diegetic hoàn toàn | Vừa |
| Slot người chơi | Màu cộng hình | Mù màu, 4 người phân biệt được | Chỉ màu | Rẻ |
| Phím mới | Bản đồ M, Sổ tay J, Kết nhanh Q (gd-combat đã chốt) | Không đụng bảng của `nguoi-choi.md`, chỉ thêm | Dùng E cho cả ba | Rẻ |
| Esc không gán lại | Cố định | Người chơi không tự khóa | Gán lại tự do | Rẻ |
| Giữ hay bật | Giữ mặc định, "bật" là tùy chọn Sau MVP | Luật hiện tại thả phím là hủy, đổi thì đụng nhiều luật | Bật mặc định | Vừa |
| Gợi ý tutorial | Một dòng không chặn, tắt sau hành động đầu | Chặn màn khi đang bay là nguy hiểm | Hộp thoại chặn | Rẻ |
| Tiến độ gợi ý | Theo hồ sơ máy | Bạn vào sau không bị yếu, bạn cũ không bị nhắc lại | Theo thế giới | Rẻ |
| Số bước FTUE | 37 bước, mỗi bước một ý, theo sự kiện | Chương 1 có 9 mốc truyện và nhiều hệ thống mới | Ít bước, hộp thoại dài | Vừa |
| Bước Súng lưới ở chương 1 | Có (T19), nhãn MVP theo khung mục 12 và log 49 | Brief GD-029 yêu cầu, khung mục 12 ghi lưới ở MVP | Để Sau MVP như bản cũ của `combat-driftlife.md` | Rẻ |
| Ngạt | Túi tự mở ở chế độ chọn ghim ngay lập tức | 12 giây ngắn, không cho thêm bước | Màn riêng chặn hết | Rẻ |
| Người không xác nhận cửa khí | Sau 30 giây kể từ người đầu tiên xác nhận thì tự tính ở lại trạm, làm việc trạm theo luật 54 của `tram-va-cang.md` | Ngăn một người AFK kẹt cả nhóm, gd-quan đã ghi vào luật | Chờ vô hạn | Rẻ |
| Ngủ sang ngày co-op | Vào buồng ngủ đông là xác nhận, đếm 30 giây từ người đầu tiên, ra lại để hủy | gd-quan chốt luật 59 tới 61, đã vào K23 (log dòng 63) | Host quyết | Rẻ |
| Trợ năng | Giảm nhấp nháy và rung là MVP, chuyển giữ thành bật là Sau MVP | Giảm nhấp nháy an toàn thị giác, "bật" đụng luật | Không có trợ năng | Rẻ |
| Chữ thất bại | Cấm trong giờ giao thương | Khung K13: tàu rời chỉ mất món đó | Màn Thua giờ giao thương | Rẻ |
| Hộp thoại truyện | Bỏ qua một lần bấm, Sổ tay ghi một câu | Khớp `cot-truyen.md` luật 8 | Không cho bỏ qua | Rẻ |
| Camera ngoài không gian | 10,0 u dọc, 17,8 u ngang ở 16:9 | Hai trong ba file đã ngầm dùng 10 u (`nguoi-choi.md` 18 x 10, `ho-so-nhan-vat.md` 106 điểm ảnh mỗi u là 10,2 u ở 1080p), nhân vật 72 px ở 720p còn đọc rõ | Camera 12 x 21 của `map.md` mục 6.4 (nhân vật chỉ 60 px ở 720p) | Vừa (greybox của gd-world phải theo) |
| Camera trong trạm | Cùng tỉ lệ nhân vật, theo nhân vật, kèm HCH-10 | Silhouette nhân vật không đổi giữa hai cảnh, HCH-10 bù phần không thấy | Thu nhỏ để thấy cả 3 tầng | Rẻ |
| Màn hẹp hơn 16:9 | Mở thêm chiều cao, vùng nhìn tối thiểu 17,8 x 10,0 u | Mọi người thấy cùng vùng ngang tối thiểu, hazard vào màn không bị thu hẹp | Cắt ngang, thanh đen | Rẻ |
| Esc | Đóng màn con trước, rồi mới mở menu. Start luôn mở menu | Một luật để dev không phải đoán | Esc luôn mở menu | Rẻ |
| Gợi ý khi Oxy dưới 25% | Chỉ T09, T15, T20, T34, T36 | Nhường chỗ cho cảnh báo Oxy, năm bước này là thoát hiểm, cứu bạn hoặc hồi Oxy | Cấm mọi gợi ý | Rẻ |
| Đồng hồ xác nhận chung | HTR-01 cho mọi người ở trạm | `tram-va-cang.md` luật 60 và 61 yêu cầu | Chỉ hiện ở cửa khí | Rẻ |
| Nghỉ giao thương | Nút riêng ở UI-14 | Luật 19, khung mục 4 cho bỏ qua pha giờ giao thương | Chỉ không bấm Mở giao thương | Rẻ |
| Màn lập danh mục | Gộp vào Bảng tàu (UI-14), không thêm màn | Lead chốt gộp bảng tàu, đơn đặt trước và danh mục ở khoang liên lạc | Màn riêng trước Bảng tàu | Vừa |
| Đếm màn | 30 màn: chỉ chỗ có focus riêng là màn. Bong bóng gọi món, chip bơm khí, bánh ping thành HCH-06, HCH-12, HUD-16. Chờ nhóm thành trạng thái UI-10, Lên Hạng cảng thành khối của UI-43, bỏ sảnh co-op. Mã cũ không dùng lại | Lead chọn sửa theo đánh giá wireframe 2026-11-23. Bớt 6 màn phải dựng và test, vào sau bất kỳ lúc nào (C2) đã thay sảnh chờ | Giữ 35 màn, giữ sảnh | Rẻ |
| HUD boss | HUD-17 theo cơ chế pha, không có thanh Choáng | Boss chỉ Bất lực theo cơ chế pha (`combat-driftlife.md` mục 3.7), người chơi cần biết pha và cơ chế để chọn hạ hay xua đi | Thanh choáng như Driftlife | Rẻ |
| Hộp xác nhận | Một khuôn UI-54, nút an toàn focus sẵn | Luật 23, 28 cần nêu hệ quả, một khuôn để dev không dựng nhiều kiểu | Mỗi chỗ một hộp riêng | Rẻ |
| Nhận biết cửa neo | Số lớn cộng màu, viền thùng cùng số | Màu demo gần màu slot, mù màu | Chỉ màu | Rẻ |
| Chạy tới bằng chuột | Bấm ô quầy hay cửa neo là tự chạy và làm việc ở đích | Demo Lead đã duyệt, bớt bấm A D qua lại | Chỉ A D | Rẻ |
| Giờ giao thương đầu cố định | 2 tàu, dạy T22 đến T25 trong một giờ giao thương | Mỗi bước một ý, đủ vòng nhặt, giao, bơm khí | Dạy rải nhiều giờ giao thương | Vừa |
| Âm thanh | 4 thanh âm lượng, chú thích âm bật tắt, không giọng đọc ở MVP | Trợ năng cơ bản, mọi thoại là chữ | Một thanh âm lượng | Rẻ |
| Thoát giữa chuyến | Hộp xác nhận nêu hệ quả theo C10 | Không để người chơi mất túi vì bấm nhầm | Thoát im lặng | Rẻ |
| Lưu lỗi ở UI-44 | Có lối ra "Về menu chính", ghi rõ mất việc từ điểm lưu nào theo luật 7 | Tránh soft lock | Chờ vô hạn | Rẻ |
| 3 và 4 người ở UI-02 | Khóa kèm "Sắp có" ở MVP | Khung mục 12 chỉ cần 2 người chạy được | Mở nhưng không đảm bảo | Rẻ |
| Setup của FTUE | Setup là của thế giới ở mốc, gợi ý là của từng người | Người vào sau không dựng được Setup cũ | Setup riêng từng người | Vừa |
| Cảnh truyện chặn màn | Chỉ khi giờ giao thương không chạy, trong giờ giao thương là bong bóng | Cảnh không được làm mất giờ giao thương của nhóm (C7) | Chặn mọi lúc | Rẻ |
| Chuỗi trạng thái | Mọi chữ in nháy trong bảng 2.5 phải có key | Dev không tự đặt chuỗi, máy kiểm | Để dev tự đặt | Rẻ |

## ky-thuat.md (gd-tech, 11 điểm)

| # | Điểm | Chọn | Lý do | Phương án bỏ | Đảo ngược |
|---|---|---|---|---|---|
| 1 | Kiến trúc tool | Node một file mỗi tool, không thư viện ngoài, tham số JSON trong `tools/tham-so/`, hàm chung ở `tools/lib.mjs` | Chạy được ở mọi phiên, kể cả phiên đám mây, không cần cài | Python, bảng tính | Rẻ |
| 2 | Sim đọc thẳng GDD ở chỗ có bảng máy sinh | Điểm khai thác đọc khối NODE, mẫu Driftlife đọc khối SPECIES của `vat-pham.md`, chỉ số loài đọc bảng 3.4 của `combat-driftlife.md` | Vai đổi số, sim theo ngay, không chép tay | Chép vào JSON | Rẻ |
| 3 | Validator chỉ báo, không sửa | In bảng lỗi theo vai giữ file, gửi vai đó | Không sửa file vai khác | Tự sửa | Rẻ |
| 4 | Tên riêng trong mục Câu hỏi mở, Tên game, Lệch khỏi tham chiếu, Lịch sử không bị kiểm | Bỏ qua các mục đó | Đó là chỗ nêu tên đề xuất và game khác, kiểm sẽ báo nhầm | Kiểm mọi nơi | Rẻ |
| 5 | Mô hình mạng | Host nắm quyền, chuyển động do máy người chơi | Khớp C2 (thế giới của host), co-op không cạnh tranh nên tin client về chuyển động là chấp nhận được | Server riêng, tất định khóa bước | Đắt sau khi dev bắt đầu |
| 6 | Host thoát | Không chuyển host, thế giới về điểm lưu gần nhất theo K23 (ba điểm lưu, khung sửa lần 5) và C10 | Chuyển host đắt với 4 dev | Chuyển host, điểm lưu giữa ngày | Vừa |
| 7 | Tên sự kiện | Tiếng Anh snake_case có tiền tố nhóm, gộp trùng | Một bảng duy nhất, công cụ phân tích không vấp dấu | Giữ tên từng GDD | Rẻ |
| 8 | Sự kiện ghi ra đâu | File JSON Lines cục bộ | Game offline, bán đứt | Gửi về máy chủ | Rẻ |
| 9 | Nguồn chuẩn của dữ liệu | Markdown trong repo, Sheet là bản dán | Sim, validator và exporter cùng đọc một chỗ, Sheet 25 tab chưa dán. Đổi khi GDM ghi DECISIONS | Sheet làm nguồn, kéo TSV về | Rẻ |
| 10 | Giữ chỗ tối đa 1 lần mỗi chuyến | gd-character đã ghi vào `nguoi-choi.md` 2.9 | Chặn rút mạng để dừng đồng hồ ngạt (lách K2) | Không giới hạn | Rẻ |
| 11 | Một hệ ID nâng cấp | UPG-xxx-n của gd-items, T-xxx chỉ là nhãn | Luật 3 đòi một ID một thứ | Giữ hai hệ | Rẻ |
