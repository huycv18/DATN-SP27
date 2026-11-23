# GDD hệ thống: Người chơi (nhân vật ngoài không gian và trong trạm)

Project: game-moi | Chủ sở hữu: gd-character | Trạng thái: bản đủ, đã sửa đợt 4 sau phiếu GD-031 (2026-11-20) | Nguồn: khung K1 đến K4, K6, K9, K12, K22 đến K27, C1 đến C10, log GDM dòng 9 đến 11 và 22 đến 27, brief GD-023

## Tóm tắt

Nhân vật người chơi là một người sống sót mặc bộ đồ không gian: bay 8 hướng bằng bộ đẩy với quán tính nhẹ, mang một túi đồ có sức chứa, tiêu một chỉ số duy nhất là Oxy (vừa là thời gian vừa là máu), và đi bộ trong mặt cắt trạm khi ở nhà. Người chơi điều khiển trực tiếp và tiêu Oxy theo từng giây (P1). Tầng: lõi. Ưu tiên: prototype di chuyển và Oxy trước, sau đó bản đầu. Phụ thuộc chính: gd-combat (sát thương, i-frame, bắt sống), gd-items (khối lượng, dụng cụ), gd-world (cấp môi trường theo dải, Recall Beacon), gd-economy (giá nâng cấp), gd-tech (prototype thử số).

## Hiện hành

| Mục | Giá trị khởi điểm | Nhãn |
|---|---|---|
| Oxy | 1 chỉ số, dung lượng bậc 0 là 330 điểm, hao nền 1 điểm/giây | MVP |
| Tốc độ bay | bậc 0 là 6,0 u/s, gia tốc 18 u/s2, trôi dừng sau khoảng 0,5 giây | MVP |
| Lướt | 4 Oxy một lần, hồi 1,2 giây, đi 3,3 u | MVP |
| Ngạt | 12 giây, tốc độ 40%, được cứu bằng chia Oxy hoặc chạm cửa khí | MVP |
| Bị kéo về | giữ đúng 1 món ghim, mất phần còn lại của túi, không mất Tally | MVP |
| Túi đồ | đo bằng Khối, bậc 0 là 80 Khối, đầy thì không nhặt thêm, vật manh mối không chiếm túi | MVP |
| Bộ đồ | 5 trục nâng cấp, mua một lần cho cả nhóm (C4) | MVP bậc 0 và 1, còn lại Sau MVP |
| Điều khiển | bàn phím chuột và gamepad, bảng phím ở mục 2.7 | MVP |
| Thoát giữa chuyến | Khách rời hoặc mất kết nối quá 15 giây tính như bị kéo về (giữ 1 món), chơi một mình thì mất chuyến, host thoát thì về điểm lưu (C10, K23) | MVP |
| Số chuyến mỗi ngày | Tối đa 2, Skiff cũng tính, cửa khí khóa sau chuyến 2 và sau khi mở ca cảng (K22) | MVP |
| Co-op | Oxy và túi riêng, chia Oxy, trao đồ, ping, không va chạm giữa người chơi | MVP (2 người), 3 và 4 người Sau MVP |

Mọi số là khởi điểm "ước", chưa qua prototype của gd-tech. Số di chuyển và Oxy phải qua prototype trước khi gd-economy dùng.

## Danh mục sơ bộ (để vai khác đọc)

Trục nâng cấp bộ đồ (mua một lần cho cả nhóm, C4):

| Mã | Tên trục | Số bậc | Đổi gì | Nhãn |
|---|---|---|---|---|
| T-OXY | Bình Oxy | 5 (bậc 0 đến 4) | Dung lượng Oxy | MVP bậc 0 và 1 |
| T-VO | Vỏ bộ đồ (cấp môi trường) | 4 (cấp 0 đến 3) | Chịu môi trường theo dải, giảm nhẹ đòn | MVP cấp 0, Sau MVP cấp 1 đến 3 |
| T-DAY | Bộ đẩy | 4 (bậc 0 đến 3) | Tốc độ, gia tốc, chi phí lướt | MVP bậc 0 và 1 |
| T-TUI | Túi đồ | 5 (bậc 0 đến 4) | Sức chứa | MVP bậc 0 và 1 |
| T-DUNGCU | Đai dụng cụ | 3 (bậc 0 đến 2) | Số ô dụng cụ mang theo (3, 4, 5) | MVP bậc 0 và 1 |

Tên trạng thái: Ở trạm, Bay, Lướt, Kéo vật, Kích Recall, Trúng đòn, Ngạt, Được cứu, Bị kéo về, Về an toàn, Giữ chỗ, Rời phiên, Chờ vào.

Tên thao tác: Bay, Lướt, Hãm, Ngắm, Dùng dụng cụ, Đổi dụng cụ, Tương tác, Nhặt (tự động), Kéo, Kích Recall, Chia Oxy, Trao đồ, Ghim món, Dùng vật tiêu hao, Kết nhanh, Ping, Mở túi, Bản đồ chuyến, Sổ tay, Xem kho nhanh.

Đơn vị: u là đơn vị thế giới (nhân vật cao 1 u), Oxy tính theo "điểm" (1 điểm bằng 1 giây hao nền), Khối là đơn vị khối lượng của vật phẩm (gd-items), tải là tổng Khối đang mang trong túi, sức chứa túi cũng tính bằng Khối.

## 1. Mục đích với người chơi

- Cảm thấy: người sống sót giỏi nghề, điều khiển chuẩn. Mỗi lượt lướt hay nán lại thêm một mẻ đều tốn Oxy.
- Quyết định: đi tiếp hay quay về (Oxy, tải túi), lướt hay trôi (tiết kiệm Oxy), ghim món nào phòng khi ngạt, chia Oxy cho bạn hay giữ.
- Pillar: P1 (Oxy là thời gian và máu, không hồi miễn phí), P3 (mọi luật đúng với 1 đến 4 người, thêm người là thêm tay), P2 (túi đồ là cầu nối ngoài với trạm).
- 30 giây đầu: ra khỏi cửa khí, bấm bay thấy nhân vật phản hồi ngay, buông phím thấy trượt nửa giây rồi dừng, nhặt một mảnh phế liệu bay vào túi, thấy thanh Oxy tụt đều và vạch "đủ về" nhích theo khoảng cách tới cửa khí.
- Ý đồ cảm giác: trôi nhẹ nhưng dừng đúng chỗ muốn. Đẩy là đi ngay, buông là trượt chừng nửa giây, hãm là dừng gọn.

## 2. Luật

### 2.1 Di chuyển ngoài không gian (MVP)

1. Bay 8 hướng: bàn phím WASD cho 8 hướng rời rạc (chéo được chuẩn hóa), gamepad cho analog. Tốc độ cuối bằng đúng tốc độ tối đa theo hướng đẩy, không cộng dồn khi đi chéo.
2. Điều khiển trực tiếp: bấm đẩy thì gia tốc ngay, không độ trễ nạp lực. Đẩy ngược hướng đang trôi nhận gia tốc gấp 1,5 lần (đảo chiều gọn).
3. Quán tính nhẹ (log dòng 22): buông phím thì tốc độ giảm theo hãm tự nhiên 12 u/s2, từ tốc độ tối đa bậc 0 dừng sau 0,5 giây và đi thêm 1,5 u.
4. Hãm (giữ Space, LT): hãm 36 u/s2, từ tốc độ tối đa dừng sau 0,17 giây và đi thêm 0,5 u. Hãm không tốn Oxy. Hãm là cách dừng chính xác để nhặt và khai thác.
5. Lướt (Shift, RB): xung lực 15 u/s trong 0,22 giây (đi 3,3 u) theo hướng đang đẩy, không đẩy thì theo hướng nhân vật quay. Tốn 4 Oxy, hồi chiêu 1,2 giây ở bậc 0. Có miễn sát thương 0,2 giây đầu (khớp gd-combat). Lướt đặt vận tốc cố định 15 u/s trong 0,22 giây, hết thì vận tốc cắt về tối đa vmax_thật theo hướng đó (không trôi tiếp 15 u/s), rồi hãm tự nhiên áp bình thường. Lướt không dùng để di chuyển đường dài vì 3,3 u tốn 4 Oxy trong khi bay thường 6 u chỉ tốn 1 Oxy (đắt hơn 7 lần mỗi u). Lướt dùng để né, vượt khe hẹp, vào đúng điểm.
6. Hướng nhìn: nhân vật quay trái hoặc phải theo vị trí con trỏ (chuột) hoặc cần ngắm phải (gamepad). Không ngắm thì quay theo hướng bay ngang.
7. Va chạm: nhân vật là hình tròn bán kính 0,4 u. Chạm tường thì triệt thành phần vận tốc vuông góc, giữ thành phần trượt dọc tường. Va tường không trừ Oxy, không choáng. Có corner correction 0,25 u để không kẹt góc.
8. Lực ngoài (dòng chảy, hazard của gd-world): cộng vào vận tốc, phần do lực ngoài gây ra chặn ở 12 u/s. Trần này không áp cho Lướt (15 u/s).
9. Tự gỡ kẹt: nếu hình tròn nhân vật chồng lên địa hình hơn 2 giây thì đẩy ra điểm trống gần nhất.
10. Kéo vật (E giữ 0,4 giây ở tầm 1,5 u, bấm E lần nữa để thả): nối bằng dây lò xo dài tối đa 3 u. Kéo không chiếm Khối túi. Mỗi người kéo tối đa 1 vật. Tốc độ theo lớp vật:

| Lớp vật | Vật ví dụ | Hệ số tốc độ khi kéo | Lướt | Oxy hao nền |
|---|---|---|---|---|
| Nhẹ | Lồng mẫu có LIV cỡ S | 1,00 | Được | 1,00 |
| Vừa | Chưa gán vật nào (giữ chỗ) | 0,75 | Được, không chặn kéo | 1,10 |
| Nặng | BNG-101 Buồng ngủ đông | 0,50 | Không | 1,25 |

Thêm người cùng kéo một vật nặng hoặc vừa: mỗi người thêm cộng 0,15 vào hệ số, trần 0,95. Một mình vẫn kéo được ở 0,50 (không luật nào cần đúng N người). Lớp vật theo ID của gd-items: lớp Nhẹ là Lồng mẫu (LIV cỡ S, tối đa 3 con, mỗi người 1 lồng), lớp Nặng là BNG-101, lớp Vừa chưa gán vật nào (giữ chỗ cho vật kéo lớn về sau). Driftlife cỡ M không kéo bằng dây mà gửi về kho bằng Phao kéo (gd-items). Hành vi Driftlife trong lồng do gd-combat.

### 2.2 Oxy (K1, K2) (MVP)

1. Oxy là chỉ số duy nhất của người chơi ngoài không gian. Không có thanh máu riêng. Mỗi người một thanh riêng (C3).
2. Hao nền: 1,0 điểm/giây từ lúc ra khỏi cửa khí tới lúc về. Đứng yên, hãm, khai thác đều hao như nhau, vì Oxy là thời gian.
3. Hao môi trường (K6): vào vùng môi trường mà Vỏ bộ đồ chưa đủ cấp thì hao nền nhân hệ số. Thiếu 1 cấp nhân 2,5. Thiếu 2 cấp trở lên nhân 4,0. Đủ cấp thì nhân 1,0. Thừa cấp không thêm lợi ích hao nền. Đi được nhưng đắt.
4. Hao khi lướt: cộng thẳng chi phí lướt (bảng 3).
5. Hao khi trúng đòn: sát thương của gd-combat trừ thẳng vào Oxy sau khi Vỏ giảm (0, 5, 10, 15 phần trăm theo cấp 0 đến 3). Oxy không âm. Số Oxy trừ mỗi đòn do gd-combat đặt (ví dụ trúng 8 là mất 8 Oxy), ngưỡng 15 Oxy chia đòn nhẹ và đòn nặng.
6. Hao theo tải: tải túi quá 60% sức chứa thì hao nền tăng tuyến tính tới 1,15 lần khi đầy, đồng thời tốc độ tối đa và gia tốc giảm tới 0,85 lần (công thức ở mục 3). Dưới 60% không ảnh hưởng.
7. Không hồi Oxy miễn phí giữa chuyến (P1). Oxy nhận lại chỉ có hai đường: chia Oxy từ đồng đội (2.3 điểm 4), và vật tiêu hao CON-101 Bình Oxy nhỏ (K26, thao tác "Dùng vật tiêu hao" ở 2.5 và 2.7). Luật CON-101: hồi 40 điểm Oxy theo `vat-pham.md` T8 (khoảng 12% bình bậc 0), chỉ cho chính người dùng, không thả hay trao cho người khác. Kênh 1,5 giây, hủy khi trúng đòn, thả phím, hoặc Lướt (bình chưa tiêu). Không dùng khi Ngạt hoặc khi Oxy đã đầy dung lượng. Tổng Oxy hồi từ vật tiêu hao trong một chuyến không quá 25% dung lượng bình của người đó (K26): ở bậc 0 là 82 điểm, tức tối đa 2 bình. Lần dùng chạm trần thì chỉ hồi phần còn lại và bình vẫn tiêu hết. Không hồi vượt dung lượng, phần dư bỏ. Mỗi người mang tối đa 2 bình trong túi mỗi chuyến (T8). Hồi chiêu giữa hai lần dùng: không. Số 40 chưa qua sim, chờ gd-tech mô hình vào sim chuyến.
8. Về tới trạm (cửa khí) thì Oxy đầy lại ngay, trạm tái tạo Oxy.
9. Cảnh báo theo phần trăm dung lượng:

| Ngưỡng | Hiển thị | Âm | Ghi chú |
|---|---|---|---|
| 50% | Thanh chuyển vàng | Bíp chậm mỗi 3 giây | Chỉ báo, không khóa gì |
| 25% | Thanh đỏ nhấp nháy | Bíp mỗi 1,5 giây | Hiện gợi ý "về" |
| 10% | Viền màn hình đỏ, thở dốc | Bíp mỗi 0,7 giây, nhịp thở | Camera thu nhẹ vào nhân vật |
| Vạch "đủ về" | Oxy_về = (d_thoát / (0,8 nhân vmax_thật)) nhân hệ_số_môi_trường_dọc_đường + dự phòng | d_thoát là khoảng cách đường thẳng tới đích (u). Dự phòng là 8 (5 giây Recall cộng 3 giây đệm) khi đích là Recall Beacon, là 3 khi đích là cửa khí | từ 3 trở lên | d = 240 u, vmax 6, đích cửa khí: 50 + 3 = 53 Oxy (không có hao môi trường) |

10. Oxy chạm 0 (do hao hay do đòn) thì vào Ngạt (2.3). Không bao giờ chết ngay. Nếu Oxy chạm 0 khi đang kênh Kích Recall mà kênh chưa hoàn tất thì hủy kênh và vào Ngạt.

### 2.3 Ngạt, được cứu, bị kéo về (K2, C6) (MVP)

1. Ngạt kéo dài 12 giây. Trong Ngạt: tốc độ tối đa nhân 0,4, không Lướt, không dùng dụng cụ, không kích Recall, không dùng vật tiêu hao, không Trao đồ, không thả đồ khỏi túi (K27), thả mọi vật đang kéo. Oxy giữ 0 và không hao thêm.
2. Người ngạt không bị AI nhắm tới và không nhận sát thương (để Ngạt là khoảnh khắc chọn đồ và chờ cứu, không phải bị đánh chết). Khớp `combat-driftlife.md` luật 10.
3. Ngay khi vào Ngạt, túi đồ mở ở chế độ chọn món ghim (2.4). Hết giờ chọn vẫn giữ món đã ghim trước đó.
4. Được cứu: một đồng đội ở trong 1,5 u giữ Chia Oxy (V, X) chuyển Oxy với tốc độ 10 điểm/giây. Khi người ngạt đạt từ 30 Oxy thì sang Được cứu (2 giây i-frame, rồi Bay). Trong lúc đang được chia Oxy thì đồng hồ ngạt tạm dừng.
5. Tự thoát (không cần đồng đội): nếu người ngạt chạm cửa khí của trạm trong 12 giây (chỉ ở dải Gần mới khả thi: 12 giây ở tốc độ 2,4 u/s đi tối đa 28,8 u) thì tính là kết thúc chuyến bằng cửa khí (K4), giữ nguyên túi. Recall Beacon cần kích 5 giây nên không dùng được khi ngạt.
6. Hết 12 giây không ai cứu và chưa về: Bị kéo về. Nhân vật về buồng cửa khí của trạm. Túi chỉ giữ đúng 1 món ghim (một đơn vị vật phẩm, một lồng mẫu đang kéo hoặc một vật nhiệm vụ cũng được ghim. Ghim lồng mẫu thì chỉ giữ con có sao cao nhất trong lồng, các con còn lại mất, khớp luật 25 của `combat-driftlife.md`). Phần còn lại của túi biến mất, không rơi ra map. Ngoại lệ: vật nhiệm vụ không ghim thì trở về vị trí gốc (2.4 điểm 10), vật manh mối không nằm trong túi nên không mất. Dụng cụ mang theo trên đai và Tally không mất, không phí, không nợ (K2).
7. Bị kéo về, cũng như Về an toàn sớm, là kết thúc chuyến của riêng người đó (C6). Người đã về trạm không ra lại trong cùng chuyến (C9, vì về trạm nạp đầy Oxy rồi ra lại sẽ phá giới hạn Oxy K1). Trong lúc chờ người đó làm việc trạm: xưởng (chế trước cho ca cảng), khoang nuôi, và xem vị trí đồng đội. Chuyến chung kết thúc khi người cuối cùng đã về hoặc bị kéo về.
8. K27: người đang ngạt không trao và không thả được đồ. Đồng đội cứu bằng chia Oxy, không vét túi hộ. Muốn giữ đồ cho nhóm, người chơi phải trao trước khi Oxy chạm 0.

Bảng trạng thái và chuyển tiếp ngoài không gian:

| Trạng thái | Vào khi | Ra khi | Hành vi | Người chơi thấy gì |
|---|---|---|---|---|
| Ở trạm | Vào game, về an toàn, bị kéo về, người vào sau hoàn tất cảnh đến | Qua cửa khí khi cả nhóm xác nhận (C5), chỉ tối đa 2 chuyến mỗi ngày (K22). Người về giữa chuyến phải chờ chuyến chung kết thúc (C9), trong lúc chờ làm xưởng (chế trước), khoang nuôi, xem vị trí đồng đội | Đi bộ trong trạm (mục 2.8), Oxy đầy, không hao | Cảnh trong trạm |
| Bay | Qua cửa khí, hết Lướt, hết Trúng đòn, hết Được cứu, thả Kích Recall | Lướt, Kéo vật, Kích Recall, Trúng đòn, Oxy chạm 0, về cửa khí | Bay 8 hướng, nhặt, dùng dụng cụ | Thanh Oxy, bộ đẩy phụt |
| Lướt | Bấm Lướt, hết hồi chiêu, Oxy đủ chi phí, không Ngạt | Hết 0,22 giây thì về Bay | Xung lực 15 u/s, miễn sát thương 0,2 giây đầu | Vệt lướt, tiếng xì |
| Kéo vật | Giữ E ở tầm 1,5 u với vật kéo được | Bấm E thả, vào Ngạt (thả), Về an toàn (vật đi theo nếu trong 3 u) | Tốc độ theo lớp vật, Oxy hao theo lớp vật | Dây nối, vật bám theo |
| Kích Recall | Giữ F trong 1,5 u của Recall Beacon | 5 giây xong thì Về an toàn, hủy khi thả phím, trúng đòn, hoặc rời quá 2,5 u thì về Bay. Oxy chạm 0 giữa kênh thì hủy và vào Ngạt | Tốc độ nhân 0,3, không cho Lướt trong kênh | Vòng tròn nạp quanh Beacon |
| Trúng đòn | Nhận sát thương | Hết khóa điều khiển 0,25 giây thì về Bay, hoặc vào Ngạt nếu Oxy chạm 0 | Đẩy lùi, miễn sát thương 0,8 giây, hủy Kích Recall và mọi thao tác giữ phím | Nháy trắng, rung nhẹ, Oxy tụt |
| Ngạt | Oxy chạm 0 | Được chia Oxy đạt 30 thì sang Được cứu, hết 12 giây thì Bị kéo về, chạm cửa khí thì Về an toàn | Mục 2.3 mục 1 đến 3 | Đồng hồ vòng, tiếng thở yếu, túi mở chọn ghim |
| Được cứu | Đạt 30 Oxy khi đang ngạt | Hết 2 giây thì về Bay | I-frame 2 giây, điều khiển lại | Quầng sáng, đồng đội hiện biểu tượng |
| Bị kéo về | Hết 12 giây ngạt | Hoàn tất cảnh kéo 1,5 giây thì sang Ở trạm | Mất túi trừ món ghim, Oxy đầy | Dây kéo, hiện tóm tắt "mất" và "giữ" |
| Về an toàn | Vào cửa khí hoặc Recall xong | Chuyển cảnh xong thì sang Ở trạm | Túi nguyên vẹn đổ vào kho, Oxy đầy | Màn tóm tắt chuyến |
| Giữ chỗ | Mất kết nối giữa chuyến (khách) | Tối đa 1 lần mỗi người mỗi chuyến. Kết nối lại trong 15 giây thì về trạng thái cũ, hết 15 giây hoặc mất kết nối lần thứ hai trong chuyến thì Bị kéo về, chỉ giữ 1 món ghim (C10) | Nhân vật đứng yên, bất tử, Oxy đóng băng (mục 2.9 điểm 6) | Đồng đội thấy biểu tượng mạng |
| Rời phiên | Người chơi thoát chủ động | Vào lại thì nhận lại nhân vật cũ | Khách thoát giữa chuyến thì tính như Bị kéo về (giữ 1 món ghim), nhân vật ở lại trạm. Chơi một mình thoát giữa chuyến thì mất chuyến, vào lại ở điểm lưu gần nhất với bố cục chuyến cũ (K23). Host thoát thì thế giới về điểm lưu gần nhất (C10) | Nhân vật đứng ở trạm, không điều khiển |
| Chờ vào | Người vào sau khi nhóm đang giữa chuyến | Chuyến kế tiếp được xác nhận ở cửa khí | Ở trong trạm, dùng xưởng, khoang nuôi | Màn "chờ nhóm về" có nút ping |

Không có trạng thái cụt: mọi trạng thái có ít nhất một đường ra, Ngạt luôn kết thúc trong tối đa 12 giây cộng thời gian đồng hồ tạm dừng khi được chia (có trần: chia dứt khi người cho chạm sàn 20 Oxy).

Thứ tự xử lý mỗi khung vật lý (60 Hz), cố định để đồng bộ co-op:
1. Nhận input.
2. Cập nhật vận tốc (đẩy, hãm, lướt, lực ngoài, kéo vật).
3. Va chạm địa hình.
4. Hút nhặt vật trong bán kính hút.
5. Cập nhật kênh giữ (Kích Recall, Chia Oxy, tương tác giữ).
6. Hao Oxy (nền, môi trường, tải, chi phí lướt).
7. Áp sát thương nhận (của gd-combat), hủy các kênh bị đòn ngắt.
8. Kiểm Kích Recall hoàn tất, nếu xong thì Về an toàn (trước bước 9).
9. Kiểm Oxy chạm 0 thì vào Ngạt.
10. Kiểm đồng hồ Ngạt, cứu, kéo về.

Cam kết với người chơi: không bao giờ chết ngay vì một đòn, ngạt luôn có 12 giây để làm gì đó, mất mát chỉ nằm trong túi của chuyến đó và luôn nói trước (món ghim hiện thường trực), nhân vật không bao giờ bị kẹt vĩnh viễn.

### 2.4 Túi đồ và dụng cụ (K3) (MVP)

1. Túi đo bằng tải (đơn vị khối lượng). Mỗi vật phẩm có số Khối riêng (gd-items, ví dụ vật nhiệm vụ 1 Khối, mẫu BPS 1 Khối), túi là danh sách xếp chồng theo ID, không có lưới ô.
2. Đầy thì không nhặt thêm: vật nảy ra khỏi người và hiện "Túi đầy". Có thể thả vật khỏi túi trong menu Mở túi, vật thả nằm tại chỗ 30 giây rồi biến mất (khớp `vat-pham.md` V3), riêng vật nhiệm vụ thả thì sau hạn về vị trí gốc theo V4. Không thả được khi Ngạt (K27).
3. Nhặt là tự động trong bán kính 1,2 u (vật bay vào 0,2 giây) nếu túi còn chỗ. Vật kể chuyện và vật nặng cần Tương tác.
4. Đồ trong túi chỉ thành của trạm khi về tới trạm (K3), tự đổ vào kho khi Về an toàn.
5. Ghim món: người chơi ghim 1 vật phẩm hoặc 1 vật đang kéo bất cứ lúc nào (R hoặc bấm cần phải R3 trong menu túi, mặc định ghim vật có độ hiếm cao nhất vừa nhặt). Món ghim là thứ giữ lại khi bị kéo về. Món ghim luôn hiện biểu tượng ghim trên túi.
6. Mở túi không dừng thời gian (C7).
7. Dụng cụ mang theo nằm trên đai dụng cụ, riêng từng người (C3). Số ô: bậc 0 là 3, bậc 1 là 4, bậc 2 là 5. Đổi dụng cụ chỉ ở trạm (xưởng hoặc tủ dụng cụ), không đổi ngoài không gian. Ngoài không gian chỉ đổi ô đang cầm (phím 1 đến 4, bánh xe chuột, D-pad). Dụng cụ không bị mất khi bị kéo về.
8. Bộ khởi điểm bậc 0 (3 ô): ô 1 TOL-102 Dụng cụ khai thác (khoan và nạy), ô 2 TOL-211 Lao từ, ô 3 để trống cho TOL-201 Dùi xung hoặc TOL-202 Súng lưới (mở bằng quest Kỹ sư chương 1). Ô thứ 4 (bậc 1, UPG-RACK-1) và ô thứ 5 (bậc 2, UPG-RACK-2, chương 2) cho dụng cụ thêm như TOL-203 Súng gây mê. Chìa (TOL-401, TOL-402) và Lồng mẫu (TOL-501) không chiếm ô, đúng luật T6 của gd-items.
9. Dụng cụ không tốn Oxy. Chi phí của dụng cụ là hồi chiêu (gd-combat) và vật tiêu hao (CON-102, CON-103).
10. Vật manh mối (K2 ngoại lệ, luật V4 của gd-items): tự ghi vào Sổ tay ngay khi nhặt, không chiếm túi, không thể mất. Vật nhiệm vụ (STY-102, 103, 301, 401, 501) chiếm 1 Khối như vật thường. Bị kéo về hoặc thả mà không ghim vật nhiệm vụ thì nó mất cùng túi và trở về vị trí gốc để lấy lại ở chuyến sau, không mất vĩnh viễn. Vật nhiệm vụ ghim được như món giữ lại.

### 2.5 Tương tác (MVP)

| Thao tác | Đầu vào | Giữ | Tầm | Hủy khi | Ghi chú |
|---|---|---|---|---|---|
| Nhặt | Tự động | Không | 1,2 u | Túi đầy | Vật nặng, vật kể chuyện cần Tương tác |
| Khai thác | Giữ Dùng dụng cụ lên điểm khai thác | Theo dụng cụ (gd-items, bậc 1 khoảng 3 đến 7 giây) | Theo dụng cụ, mặc định 2,0 u | Thả phím, rời tầm | Khai thác không chặn Bay |
| Bắt sống | Dụng cụ bắt (TOL-202, TOL-203, gd-combat quyết chi tiết) | Theo gd-combat | Theo gd-combat | Theo gd-combat | Kết quả là Driftlife sống kéo được |
| Kéo | E giữ | 0,4 giây | 1,5 u | Bấm E thả, vào Ngạt | Mục 2.1 mục 10 |
| Kích Recall | F giữ | 5,0 giây | 1,5 u tới Beacon, hủy khi rời 2,5 u | Thả phím, trúng đòn, rời 2,5 u | Thử lại không giới hạn (Lướt không dùng được trong kênh). Vật đang kéo trong 3 u đi theo về |
| Mở lối map nhánh | E giữ | 1,0 giây | 1,5 u | Thả phím, rời tầm | Lối vào là ô cố định không khóa (gd-world), khóa nằm trong map nhánh. Riêng cửa cập Lantern đóng tới khi hạ BS-2, lúc đó hiện chữ nêu thiếu gì |
| Chia Oxy | V giữ | Liên tục | 1,5 u tới người nhận | Thả phím, rời tầm, trúng đòn | 10 điểm/giây, người cho không xuống dưới 20 Oxy |
| Trao đồ | E giữ gần đồng đội, chọn món | 0,5 giây | 1,5 u | Thả phím, một trong hai người vào Ngạt (K27) | Chuyển 1 đơn vị vật phẩm, được nếu người nhận còn chỗ Khối. Không trao được cho người đang ngạt, người ngạt cũng không trao |
| Dùng vật tiêu hao | G | 1,5 giây (kênh) | Bản thân | Trúng đòn, thả phím, Lướt, Ngạt | CON-101 hồi 40 Oxy, trần 25% dung lượng bình mỗi chuyến (K26), luật ở 2.2 điểm 7 |
| Vào cửa khí | E (hoặc chạm) | Tức thì | 1,0 u | Không | Từ ngoài vào là Về an toàn |
| Ping | T (nhấn mở bánh, thả chọn) | Không | Toàn màn | Hết 8 giây | Tối đa 3 ping mỗi người. Bốn loại: Tới đây, Cảnh báo, Cần Oxy, Tìm thấy |

Ưu tiên khi nhiều đích cho một phím Tương tác (E): lối map nhánh, rồi vật cần kéo, rồi Trao đồ cho đồng đội, rồi vật khác. Cứu người ngạt dùng phím riêng Chia Oxy (V) nên không tranh E.

### 2.6 Nâng cấp bộ đồ (MVP và Sau MVP theo nhãn) (K19, C4)

Mua một lần cho cả nhóm, mọi bộ đồ lên cấp cùng lúc (C4). Không ghi giá (thuộc gd-economy). Bậc chỉ tăng, không có bậc phá luật. Nguyên tắc: bậc đầu tăng dung lượng và hiệu suất, tốc độ chỉ tăng nhỏ (tối đa 9% mỗi bậc, bậc 1 là 8,3%) để không đổi cảm giác tay.

| Trục | Bậc 0 | Bậc 1 | Bậc 2 | Bậc 3 | Bậc 4 | Mở dự kiến theo chương |
|---|---|---|---|---|---|---|
| T-OXY dung lượng Oxy | 330 | 450 | 600 | 780 | 1000 | Chương 1 đến 5 (xấp xỉ một bậc mỗi chương) |
| T-VO cấp môi trường, giảm đòn | 0, 0% | 1, 5% | 2, 10% | 3, 15% | không có | Cấp bằng cấp dải: Gần 0, Giữa 1, Xa 2, Cradle và Warden Rig 3 (E3 trong `map.md`) |
| T-DAY vmax, gia tốc, chi phí lướt, hồi chiêu | 6,0 u/s, 18, 4, 1,2 s | 6,5, 20, 4, 1,1 s | 7,0, 22, 3,5, 1,0 s | 7,5, 24, 3, 0,9 s | không có | Bậc 1 chương 1, bậc 2 chương 2, bậc 3 chương 3 (theo `kinh-te-tien-trinh.md` mục 3.2) |
| T-TUI sức chứa (Khối) | 80 | 100 | 126 | 168 | 216 | Chương 1 đến 5 |
| T-DUNGCU số ô dụng cụ | 3 | 4 | 5 | không có | không có | Bậc 1 ở chương 1 (Dùi xung), bậc 2 ở chương 2 (bắt sống) |

Quan hệ trục: T-OXY quyết định độ dài chuyến, T-VO quyết định đi được dải nào mà không đắt (K6), T-DAY làm chuyến gọn hơn, T-TUI quyết định lượng mang về, T-DUNGCU quyết định kiểu chơi (khai thác, tấn công, bắt). Bộ đồ nâng cấp ở Xưởng (Kỹ sư, K12) bằng vật liệu (UPG của gd-items) cộng Tally (giá ở bảng của gd-economy, `kinh-te-tien-trinh.md`). MVP chỉ cần bậc 0 và 1 của T-OXY, T-DAY, T-TUI, đủ cho chương 1 và thử hệ nâng cấp.

### 2.7 Điều khiển (MVP)

| Hành động | Bàn phím và chuột | Gamepad (bố cục Xbox) |
|---|---|---|
| Bay | W A S D | Cần trái |
| Ngắm và quay mặt | Con trỏ chuột | Cần phải, hỗ trợ ngắm: kéo nhẹ về mục tiêu trong nón 15 độ |
| Dùng dụng cụ | Chuột trái | RT |
| Đổi dụng cụ | 1 đến 4, bánh xe chuột | D-pad trái và phải |
| Lướt | Shift trái | RB |
| Hãm | Space | LT |
| Tương tác, Kéo, Trao đồ, Mở lối | E | A |
| Kích Recall (giữ) | F | Giữ Y |
| Chia Oxy (giữ) | V | Giữ X |
| Ghim món (chỉ khi túi mở) | R | Bấm cần phải (R3) |
| Dùng vật tiêu hao | G | D-pad xuống |
| Kết nhanh (giữ 0,6 giây, gd-combat) | Q | B |
| Bản đồ chuyến | M | LB |
| Mở túi | Tab | Back |
| Ping (mở bánh) | T | D-pad lên |
| Menu | Esc | Start |

Quy tắc: không phím nào đổi nghĩa theo chế độ ngoài hai ngữ cảnh (ngoài không gian, trong trạm). Trong túi mở, Ghim món dùng R3 nên không đụng Y (Kích Recall) và X (Chia Oxy). Trong trạm: Tab là Xem kho nhanh, J (Y) là Sổ tay, E hoặc Space là Tương tác, nhặt và giao thùng (giữ 1 giây để bơm khí), chuột trái vào ô quầy hay cửa neo để tự chạy tới. Bảng đầy đủ của trạm và menu nằm ở `ux-ui.md` mục 2.9, bảng này là phần ngoài không gian và luật. Mọi phím gán lại được, trừ Esc và Start. Giữ E cũng dùng để vá điểm rò trong sự cố cảng (gd-quan). Một mình tạm dừng được từ menu, co-op không tạm dừng (C7). Chi tiết HUD, wireframe, FTUE ở `ux-ui.md`.

### 2.8 Trong trạm (MVP)

1. Trạm là mặt cắt ngang, có trọng lực nhân tạo. Nhân vật đi bộ trái phải trên sàn, leo thang giữa các tầng bằng W hoặc S. Không có nhảy.
2. Tốc độ đi 5,5 u/s, leo thang 3,5 u/s. Không chạy riêng, vì ca cảng (K13) có áp lực thời gian nên tốc độ cố định cho dễ đọc.
3. Trong trạm nhân vật không có Oxy, không Ngạt. Không dùng dụng cụ trong trạm trừ sự cố do gd-quan quy định.
4. Mang thùng trong ca cảng: bấm E hoặc Space để nhặt ở ô quầy và giao ở cửa neo. Mỗi người mang 1 thùng (hoặc 1 lồng) một lần, tốc độ chạy không đổi khi mang, không cùng mang một thùng, không đặt thùng xuống. Giữ E 1 giây ở cửa neo để bơm khí. Bấm chuột trái vào ô quầy hay cửa neo để tự chạy tới, giữ A D giữa đường thì hủy. Luật đầy đủ ở `tram-va-cang.md` luật 26 tới 28.
5. Sự cố ca cảng (K14, gd-quan): không đặt trạng thái lên người chơi. Rò khí đóng cửa một khoang bắt đi vòng, chập điện và Driftlife sổng xử bằng giữ phím. Trong trạm không có Oxy nên không trừ Oxy và không có sát thương (khớp `combat-driftlife.md`).
6. Qua cửa khí từ trong ra cần cả nhóm đang online xác nhận (C5). 30 giây tính từ lúc người đầu tiên xác nhận (khớp `ux-ui.md`), ai không trả lời trong 30 giây thì tính là ở lại trạm và chuyến vẫn đi. Ở trong ra, bộ đồ tự mặc (cảnh 1,0 giây có thể bỏ qua).
7. Người chơi không qua cửa khí thì ở lại trạm và dùng xưởng, khoang nuôi (C5).
8. Người chơi không va chạm nhau, đi xuyên nhau (tránh kẹt hành lang và phá nhau).
9. K22: một ngày tối đa 2 chuyến (đi Skiff cũng tính một chuyến). Sau chuyến thứ hai cửa khí khóa tới ngày mới. Đã mở ca cảng thì không ra ngoài được nữa trong ngày đó. Lý do: về trạm nạp đầy Oxy rồi ra lại không giới hạn sẽ phá K1. Cửa khí khóa hiện chữ nêu lý do (chuyến thứ hai đã xong hoặc ca cảng đã mở).

### 2.9 Vào sau và rời phiên (C2) (MVP luật, cảnh do gd-story)

1. Thế giới lưu tối đa 4 nhân vật (4 slot màu). Host chọn 1 đến 4 người tỉnh dậy ban đầu.
2. Người vào sau lấy slot trống thấp nhất, là một người sống sót vớt về từ một buồng ngủ đông vô danh (gd-story): ở điểm nghỉ kế tiếp Skiff hoặc xuồng của Bram đưa buồng về, trước khi có Skiff thì dòng mảnh vỡ đưa buồng tới sát cửa khí. Không lấp buồng tắt của Ember. Cảnh tối đa 3 câu, phát một lần, bỏ qua được. Người vào sau có tên mới do người đó đặt (bắt buộc, không trùng tên mặc định của buồng tắt, khớp `ho-so-nhan-vat.md` luật 11). Túi rỗng, bộ đồ bằng cấp chung của nhóm (C4), dụng cụ lấy bộ khởi điểm, đổi được ở trạm.
3. Người vào giữa lúc nhóm đang ở ngoài thì ở Chờ vào tới chuyến kế (C5).
4. Hết slot thì không vào được, hiện "Phòng đầy". Host xóa nhân vật của người đã rời lâu để nhường slot.
5. Khách chủ động rời giữa chuyến thì tính như Bị kéo về (K2, C10): chỉ giữ 1 món ghim, phần còn lại của túi mất, không phải đường về an toàn. Nhân vật ở lại trạm, đứng ở khoang buồng ngủ đông (khớp gd-story), không điều khiển. Vào lại thì nhận lại đúng nhân vật cũ (cùng slot, cùng màu). Chơi một mình thoát giữa chuyến thì vào lại ở điểm lưu sau chuyến trước, chuyến dở không tính vào hạn 2 chuyến mỗi ngày, đi lại được với cùng bố cục chuyến (K23). Host thoát thì phiên kết thúc và thế giới về điểm lưu gần nhất (C10, K23).
6. Khách mất kết nối giữa chuyến thì Giữ chỗ 15 giây (đứng yên, bất tử, Oxy đóng băng, đồng hồ ngạt dừng). Giữ chỗ tối đa 1 lần mỗi người mỗi chuyến. Quá 15 giây, hoặc mất kết nối lần thứ hai trong cùng chuyến, thì tính như Bị kéo về (C10): chỉ giữ 1 món ghim. Host mất kết nối thì xử như host thoát (về điểm lưu gần nhất). Chuyển host không làm trong MVP.

## 3. Tham số

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nhóm tác động | Nguồn |
|---|---|---|---|---|---|---|
| Oxy dung lượng bậc 0 | 330 điểm | 280 đến 380 | Chuyến dài hơn | Chuyến ngắn, chương 1 khó | Độ dài chuyến | sim GD-030, map.md 3.9 (chuyến chương 1 dài 4,4 phút) |
| Oxy dung lượng bậc 4 | 1000 điểm | 900 đến 1100 | Chuyến chương 5 dài | Chuyến chương 5 ngắn | Độ dài chuyến | sim GD-030, map.md 3.9 (chuyến chương 5 dài 10,4 phút) |
| Hao Oxy nền | 1,0 điểm/giây | 1,0 cố định | Đổi mọi số khác | Đổi mọi số khác | Mọi thứ | ước, định nghĩa đơn vị |
| Hệ số thiếu 1 cấp môi trường | 2,5 | 2,0 đến 3,0 | Phạt đi sớm nặng | Cổng mềm | K6, độ khó dải | ước |
| Hệ số thiếu 2 cấp trở lên | 4,0 | 3,0 đến 5,0 | Phạt nặng | Dải xa dễ ép | K6 | ước |
| Chi phí lướt bậc 0 | 4 Oxy | 3 đến 6 | Lướt đắt, ít né | Lướt thành đường đi | Cảm giác, Oxy | ước |
| Hồi chiêu lướt bậc 0 | 1,2 giây | 0,8 đến 1,6 | Ít lướt | Lướt dày | Cảm giác | ước |
| Khoảng lướt | 3,3 u (15 u/s, 0,22 giây) | 2,5 đến 4,5 | Lướt qua khe rộng | Né ngắn | Né, chính xác | ước |
| Miễn sát thương khi lướt | 0,2 giây | 0 đến 0,3 | Né dễ | Né khó | Combat | gd-combat |
| vmax bay bậc 0 | 6,0 u/s | 5,0 đến 7,5 | Đi nhanh, khó dừng | Chậm | Cảm giác, độ dài chuyến | ước |
| Gia tốc bậc 0 | 18 u/s2 (đạt vmax 0,33 giây) | 12 đến 30 | Phản hồi tức thì | Nặng nề | Cảm giác | ước |
| Hãm tự nhiên | 12 u/s2 | 8 đến 20 | Trượt ngắn | Trượt dài | Cảm giác | ước |
| Hãm chủ động | 36 u/s2 | 24 đến 60 | Dừng gắt | Dừng mềm | Chính xác khai thác | ước |
| Gia tốc đảo chiều | 1,5 lần | 1,0 đến 2,0 | Gọn | Trượt | Cảm giác | ước |
| Bán kính va chạm nhân vật | 0,4 u | 0,3 đến 0,5 | Khó qua khe | Dễ qua | Map, va chạm | ước |
| Corner correction | 0,25 u | 0,1 đến 0,4 | Ít kẹt | Kẹt | Cảm giác | gốc Celeste (kỹ thuật tha thứ), số ước |
| Bán kính hút nhặt | 1,2 u | 0,8 đến 2,0 | Nhặt dễ | Phải căn chuẩn | Tha thứ ngầm | ước |
| Đệm input lướt | 0,12 giây | 0,08 đến 0,2 | Dễ lướt đúng lúc | Mất lệnh | Cảm giác | ước |
| Trần tốc độ do lực ngoài (không áp cho Lướt) | 12 u/s | 9 đến 15 | Hazard mạnh | Hazard yếu | Hazard | ước |
| Camera nhìn trước | 1,5 u theo vận tốc, trễ 0,15 giây | 0 đến 3 | Thấy xa hơn | Đứng hình | Cảm giác, nhìn | ước |
| Tải ngưỡng bắt đầu nặng | 60% sức chứa | 40% đến 80% | Mang đầy tự do | Mang nhẹ là tối ưu | Quyết định tham | ước |
| Giảm tốc khi túi đầy | 0,85 lần | 0,75 đến 0,95 | Ít phạt | Phạt tham | Quyết định tham | ước |
| Tăng hao nền khi túi đầy | 1,15 lần | 1,05 đến 1,3 | Phạt tham | Ít phạt | Quyết định tham | ước |
| Sức chứa túi (Khối) bậc 0 đến 4 | 80, 100, 126, 168, 216 | Bậc 0: 60 đến 100 | Mang nhiều | Mang ít | Kinh tế, nhịp | sim GD-030, map.md 3.9 |
| Tốc độ kéo lớp nhẹ, vừa, nặng | 1,00, 0,75, 0,50 | Nặng: 0,4 đến 0,7 | Kéo dễ | Kéo khổ | Vớt người, bắt sống | ước |
| Cộng thêm mỗi người kéo chung | 0,15, trần 0,95 | 0,1 đến 0,25 | Co-op kéo dễ | Co-op ít lợi | Co-op | ước |
| Chiều dài dây kéo | 3 u | 2 đến 4 | Vật lỏng | Vật sát | Cảm giác | ước |
| Thời gian giữ Kích Recall | 5,0 giây | 3 đến 8 | Thoát khó | Thoát dễ | P1, độ khó | ước, gốc Dave 6 giây [D9] |
| Tầm Kích Recall, tầm hủy | 1,5 u, 2,5 u | 1 đến 3 | Dễ giữ | Hay hủy | Cảm giác | ước |
| Thời gian Ngạt | 12 giây | 8 đến 20 | Kịp cứu, kịp chạy | Gắt | Ngạt, co-op | ước |
| Tốc độ khi ngạt | 0,4 | 0,2 đến 0,6 | Tự thoát dễ | Tự thoát khó | Ngạt | ước |
| Tốc độ chia Oxy | 10 điểm/giây | 5 đến 20 | Cứu nhanh | Cứu chậm | Co-op | ước |
| Oxy tối thiểu để thoát ngạt | 30 điểm | 15 đến 60 | Cứu bền | Cứu rồi lại ngạt | Co-op | ước |
| Sàn Oxy người cho | 20 điểm | 10 đến 40 | Ít liều | Hai người cùng ngạt | Co-op | ước |
| I-frame sau khi được cứu | 2 giây | 1 đến 3 | An toàn | Dễ ngạt lại | Co-op | ước |
| Tầm chia Oxy, trao đồ | 1,5 u | 1 đến 3 | Dễ dùng | Phải sát | Co-op | ước |
| Giữ chỗ khi rớt mạng | 15 giây | 10 đến 30 | Tha thứ mạng | Treo nhóm | Co-op | ước |
| Tốc độ đi trong trạm | 5,5 u/s | 4,5 đến 7 | Ca cảng dễ | Ca cảng khó | Ca cảng | ước, gd-quan lấy làm tốc độ thường |
| Tốc độ leo thang | 3,5 u/s | 2,5 đến 5 | Nhanh giữa tầng | Chậm | Ca cảng | ước |
| Số ô dụng cụ bậc 0 đến 2 | 3, 4, 5 | 3 đến 6 | Nhiều lựa chọn | Hạn chế | Kiểu chơi | ước |
| Miễn sát thương sau khi trúng đòn | 0,8 giây | gd-combat đặt | Đòn ít dồn | Đòn dồn | Combat | gd-combat |
| Mất điều khiển khi trúng đòn | 0,25 giây | 0,15 đến 0,4 | Đòn nặng tay | Đòn nhẹ | Combat | gd-combat |
| Giảm đòn theo cấp Vỏ | 0, 5, 10, 15% | 0 đến 20% | Cấp cao ít đau | Cấp ít ý nghĩa | Combat, nâng cấp | ước |
| Hồi Oxy CON-101 | 40 điểm, 1,5 giây | 30 đến 60 | Bình lời hơn | Bình ít giá trị | P1, kinh tế | `vat-pham.md` T8, chờ sim |
| Trần hồi Oxy từ vật tiêu hao mỗi chuyến | 25% dung lượng bình | 15% đến 30% | Dễ cứu Oxy | Khó | P1, K26 | khung K26 |
| Số bình CON-101 mang mỗi chuyến | 2 | 1 đến 3 | Mang nhiều | Ít | P1, túi | `vat-pham.md` T8 |

Công thức:

| Tên | Công thức | Biến | Khoảng đầu ra | Ví dụ |
|---|---|---|---|---|
| Hệ số tải f | f = tải_hiện_tại / sức_chứa | tải, sức chứa túi | 0 đến 1 | 60 trên 80 thì f = 0,75 |
| Phạt tải p | p = 0,15 nhân max(0, (f - 0,6) / 0,4) | f | 0 đến 0,15 | f = 0,75 thì p = 0,056 |
| Tốc độ tối đa thật | vmax_thật = vmax_bậc nhân (1 - p) nhân hệ_số_kéo | p, hệ số kéo lớp vật | 0,43 đến 1,0 nhân vmax | vmax 6,0 với p = 0,056 thì 5,66 u/s |
| Gia tốc thật | a_thật = a_bậc nhân (1 - p) | p | 0,85 đến 1,0 nhân a | p = 0,056 thì 18 thành 17,0 u/s2 |
| Hao Oxy nền thật | hao = 1,0 nhân (1 + p) nhân hệ_số_môi_trường nhân hệ_số_hao_kéo | p, hệ số môi trường 1,0 / 2,5 / 4,0, hệ số hao kéo 1,0 / 1,10 / 1,25 | 1,0 đến 5,75 điểm/giây | p = 0,056, thiếu 1 cấp: 2,64 điểm/giây |
| Vạch "đủ về" | Oxy_về = (d_thoát / (0,8 nhân vmax_thật)) nhân hệ_số_môi_trường_dọc_đường + dự phòng | d_thoát là khoảng cách đường thẳng tới đích (u). Dự phòng 8 khi đích là Recall Beacon (5 giây Recall cộng 3 giây đệm), 3 khi đích là cửa khí, giống luật ở mục 2 | từ 3 trở lên | d = 240 u, vmax 6, đích cửa khí: 50 + 3 = 53 Oxy. Sim dùng 8 cho mọi đích (thận trọng hơn) |

Núm gap: ba tham số nối ý đồ với số đo: dung lượng Oxy bậc 0 (độ dài chuyến chương 1), hệ số thiếu cấp (độ mềm của cổng dải, K6), thời gian Ngạt (độ khoan dung, P1 với P3). Chỉnh bằng sim và prototype, không chỉnh cảm tính.

Độ dài chuyến theo sim GD-030 (`map.md` 3.9): chương 1 dài 4,4 phút với bình 330, chương 5 dài 10,4 phút với bình 1000, khớp khung mục 9 (4 đến 6 và 10 đến 12 phút, log 54).

## 4. Trường hợp biên

| Ca | Xử lý |
|---|---|
| Oxy bằng 0 đúng khung Kích Recall hoàn tất | Recall thắng (kiểm trước ngạt, bước 8 trước bước 9), kết thúc chuyến bằng Recall, túi nguyên vẹn |
| Oxy chạm 0 khi Kích Recall chưa xong | Hủy kênh, vào Ngạt |
| Dùng CON-101 khi Oxy gần đầy hoặc chạm trần 25% | Hồi phần còn lại tới trần hoặc tới dung lượng, bình tiêu hết, phần dư bỏ |
| Dùng CON-101 khi Ngạt | Không dùng được, hiện "Không dùng được khi ngạt" |
| Bị đánh giữa kênh CON-101 | Hủy kênh, bình chưa tiêu |
| Chuyến thứ ba trong ngày hoặc đã mở ca cảng | Cửa khí khóa (K22), hiện lý do |
| Trao đồ hay thả đồ khi đang ngạt | Không cho (K27) |
| Đòn trúng đúng khung Kích Recall hoàn tất | Đòn thắng (bước 7 trước bước 8), Recall bị hủy |
| Oxy đúng 0 do hao nền, không phải do đòn | Vào Ngạt như thường, không có nhánh "chết ngay" |
| Túi đầy lúc nhặt | Không nhặt, vật nảy ra, hiện "Túi đầy", không mất vật |
| Ngạt khi đang kéo buồng ngủ đông | Thả buồng, buồng trôi tại chỗ, người nào khác kéo về được. Một mình bị kéo về thì buồng nằm lại ở chỗ thả và kéo lại được ở chuyến sau (buồng thuộc map nhánh không sinh lại, K7) |
| Nhặt vật manh mối | Ghi vào Sổ tay tức thì, túi đầy cũng nhặt được, ngạt rồi bị kéo về không mất |
| Bị kéo về khi đang giữ vật nhiệm vụ không ghim | Vật về vị trí gốc, chuyến sau lấy lại |
| Người đã về trạm muốn ra lại trong cùng chuyến | Không cho (C9), cửa khí báo "chờ nhóm về" và mở xưởng, khoang nuôi, xem vị trí đồng đội |
| Ngạt khi đang kéo lồng mẫu | Thả. Nếu đang ghim lồng đó thì bị kéo về chỉ giữ con có sao cao nhất trong lồng (luật 25 của gd-combat) |
| Hai người cùng ngạt, cạnh nhau | Không ai chia được (người cho phải từ 20 Oxy), cả hai bị kéo về nếu hết giờ |
| Người cho tụt xuống 20 Oxy đang chia | Dừng chia, người nhận còn ngạt, đồng hồ tiếp tục |
| Hai người cùng chia cho một người ngạt | Cộng dồn tốc độ chia (20 điểm/giây), đồng hồ ngạt tạm dừng |
| Người nhận chia Oxy rồi trúng đòn ngay khi vừa được cứu | I-frame 2 giây che đòn |
| Spam Lướt | Chặn bởi hồi chiêu, đệm input giữ 0,12 giây |
| Spam Kích Recall (thả rồi giữ lại) | Cho thử lại không giới hạn (như Dave [D9]), mỗi lần bắt đầu lại 5 giây |
| Nhặt vật khi đang Trúng đòn | Hút nhặt vẫn chạy, Oxy trừ trước |
| Lướt vào tường | Triệt vận tốc vuông góc, không trừ thêm, vẫn mất 4 Oxy |
| Kích Recall khi có vật đang kéo xa hơn 3 u | Vật ở lại, hiện cảnh báo trước khi hoàn tất 1 giây |
| Về an toàn khi túi rỗng | Cho phép, hiện "Chuyến trống" |
| Thoát phiên đúng khi Ngạt | Mất kết nối: Giữ chỗ (đồng hồ dừng), quá 15 giây thì Bị kéo về giữ 1 món ghim. Thoát chủ động: tính như Bị kéo về, giữ 1 món ghim (C10) |
| Một mình thoát giữa chuyến | Mất chuyến, vào lại ở điểm lưu gần nhất với cùng bố cục (K23) |
| Host thoát hoặc mất kết nối giữa chuyến | Thế giới về điểm lưu gần nhất (C10), khách không giữ gì từ chuyến dở |
| Bộ đẩy mất lực ngoài (vượt 12 u/s) | Chặn ở 12 u/s |
| Mở túi giữa lúc bị đánh | Không dừng thời gian, túi mở như HUD chồng |
| Oxy đầy, ở xa cửa khí | Vạch "đủ về" hiển thị nhưng thanh không cảnh báo |
| Một mình, ngạt, cách cửa khí 40 u | Không tự thoát được (12 giây ở 2,4 u/s đi 28,8 u), bị kéo về giữ 1 món |
| Nhân vật người rời phiên đứng trong khoang đang sự cố | Không nhận trạng thái Chậm hay Giật điện (là NPC trang trí) |
| Người vào sau khi hết ngày | Vào trạm ở pha cuối ngày, dùng chung kho, chờ chuyến kế |
| Nâng cấp mua giữa chuyến | Không thể, nâng cấp ở trạm, áp từ chuyến sau |

## 5. Ràng buộc vật lý của luật

- Tốc độ tối đa ở bậc 3 là 7,5 u/s, không vượt 8 u/s vì tốc độ quá lớn làm khe và mảnh dựng tay khó đọc. Tăng mỗi bậc tối đa 8%.
- Camera thấy khoảng 17,8 u theo chiều ngang và 10 u theo chiều dọc (ước, chốt ở `ux-ui.md`), nên ở 7,5 u/s nhân vật mất 1,2 giây để băng qua nửa màn.
- Co-op 4 người tách nhau: mỗi người một camera nên cần đồng bộ vị trí 4 nhân vật tại 20 Hz (xem mục 6).
- Chia Oxy cần từ 2 người trở lên, một mình vẫn thoát được qua Recall, cửa khí, hoặc Ngạt rồi bị kéo về.
- Ngạt luôn kết thúc, trần thời gian = 12 giây cộng tối đa thời gian đang được chia (người cho đủ 20 Oxy để cho, nên hữu hạn).
- Túi tối đa 216 Khối (bậc 4) bằng 2,7 lần bậc 0 (80 Khối). Bình Oxy tối đa 1000 bằng 3,0 lần bậc 0, nên từ chương 2 trở đi túi đầy không còn là giới hạn đến trước Oxy. Ở chương 1 (bậc 0) túi đầy vẫn là lý do về phổ biến (sim GD-030: 83% chuyến trung bình một người về vì đầy túi), chấp nhận vì sim đã cho chuyến 4,2 phút.

## 6. Yêu cầu cho engineer / tool

Đầu vào: input (8 hướng, lướt, hãm, ngắm, hành động), cấp bộ đồ của nhóm, danh sách vật phẩm với khối lượng, lớp vật kéo được.
Đầu ra: vị trí, vận tốc, Oxy, tải, trạng thái, sự kiện.

| Sự kiện (cho Event Tracking) | Tham số |
|---|---|
| player_trip_start | player_id, slot, bậc bộ đồ, số người |
| player_oxy_threshold | player_id, ngưỡng (50, 25, 10, 0), thời điểm trong chuyến |
| player_dash | player_id, chi phí, vị trí |
| player_hit | player_id, sát thương gốc, sát thương sau giảm, nguồn |
| player_choking_start, player_choking_end | player_id, kết thúc (cứu, tự thoát, bị kéo về) |
| player_oxy_share | từ, tới, tổng điểm |
| player_consumable_use | player_id, vật tiêu hao, Oxy hồi thật, Oxy hồi lũy kế trong chuyến, hủy hay xong |
| player_item_trade | từ, tới, vật phẩm |
| player_recall_start, player_recall_end | player_id, hoàn tất hay hủy, lý do hủy |
| player_pinned_item | player_id, vật phẩm, thời điểm |
| player_trip_end | player_id, loại kết thúc (cửa khí, recall, kéo về, rời phiên tính như kéo về, mất chuyến khi chơi một mình), tải cuối, giá trị túi, Oxy còn |

- Dữ liệu lưu: cấp bộ đồ chung của nhóm, danh sách nhân vật (tối đa 4, slot, tên, màu), món ghim đang chọn không lưu qua chuyến.
- Đồng bộ co-op: vị trí và vận tốc từ client sở hữu nhân vật, Oxy và túi do client sở hữu quyết định nhưng host kiểm hợp lệ (host quyết ngạt, kéo về và chia Oxy), ngưỡng 20 Hz cho vị trí (gd-tech có thể đổi ở `ky-thuat.md`).
- Tham số trong một ScriptableObject duy nhất `PlayerTuning` để sửa không build lại, kèm công cụ bảng chỉnh trực tiếp trong prototype.
- Prototype gd-tech cần thử (số thử trong mục 8): vmax, gia tốc, hãm tự nhiên, hãm chủ động, lướt, bán kính hút nhặt, camera nhìn trước.
- Nơi luật phải cùng đổi khi sửa: `PlayerTuning`, bảng Player trên Sheet, bảng đầu vào của sim chuyến (gd-tech), HUD (gd-ux).

## 7. Yêu cầu cho art, UI, tutorial, audio

| Sự kiện | Hình | Âm | Text / tutorial | Ưu tiên |
|---|---|---|---|---|
| Bay | Bộ đẩy phụt theo hướng ngược, thân nghiêng 10 độ theo hướng đẩy, chân vẩy ngược hướng trôi | Xì nhẹ liên tục theo tốc độ | Bước 1 tutorial: "Bay" | Cao |
| Hãm | Bộ đẩy phụt ngược hướng đang trôi, bụi băng nhỏ | Xì ngắn gắt | Bước 2: "Hãm để dừng" | Cao |
| Lướt | Vệt mờ 3 khung, phụt lớn | Vút ngắn | Bước 3: "Lướt tốn Oxy" | Cao |
| Oxy hao | Thanh Oxy tụt đều, vạch "đủ về" | Bíp theo ngưỡng 50, 25, 10 | Gợi ý lần đầu ở 25% | Cao |
| Trúng đòn | Nháy trắng 0,1 giây, rung màn hình nhẹ, Oxy tụt thấy được | Thịch, thở gấp | Không | Cao |
| Ngạt | Viền tối, đồng hồ vòng quanh đầu, nhân vật co, túi mở | Thở yếu, tim đập | Hiện "Chờ cứu hoặc chạm cửa khí" | Cao |
| Chia Oxy | Dây sáng nối hai bộ đồ, hạt sáng chạy theo dây | Tiếng nạp ấm | Hiện "Đang chia Oxy" | Cao |
| Được cứu | Quầng sáng 2 giây | Hít sâu | Không | Trung bình |
| Bị kéo về | Dây kéo về hướng trạm, bình mờ dần | Tiếng thu dây | Màn tóm tắt "Giữ" và "Mất" | Cao |
| Kích Recall | Vòng nạp quanh Beacon, nhân vật chùng tay | Bíp tăng dần theo 5 giây | "Giữ F" lần đầu | Cao |
| Nhặt | Vật hút vào theo cong | Tick, cao độ theo độ hiếm | Không | Cao |
| Túi nặng | Bộ đẩy phụt lớn hơn, nhân vật cúi | Xì nặng hơn | Gợi ý lần đầu ở 60% | Trung bình |
| Ghim món | Biểu tượng ghim trên túi | Click | "Món ghim giữ lại khi ngạt" ở lần ngạt đầu | Cao |
| Dùng vật tiêu hao | Nhân vật nâng bình lên cổ, thanh Oxy dâng, hiện "Còn hồi n" | Xì nạp ấm 1,5 giây | "Hồi Oxy có trần" lần đầu Oxy dưới 50% | Cao |

Phản hồi thị giác và âm thanh phải bật tắt được từng lớp khi thử (juice không che thông tin). Chi tiết art nhân vật trong `ho-so-nhan-vat.md`.

## 7b. Cảm giác (game feel)

- Tham chiếu: Dave the Diver (bơi và lặn, điều khiển trực tiếp trong cấu trúc 2D nhìn ngang, oxy hao nhanh khi trúng đòn [D14]), Celeste (tha thứ ngầm: bán kính hút nhặt, corner correction, đệm input), Hardspace: Shipbreaker (phản hồi thị giác thay vật lý nặng: chân vẩy theo vận tốc, camera trễ).
- Phản tham chiếu: không được giống quán tính nặng kiểu trôi 2 đến 3 giây làm khó dừng chính xác, không được giống nhân vật điều khiển nửa trễ khiến lướt vào đòn.
- Thời gian phản hồi: đẩy tới gia tốc nhìn thấy trong 1 khung, lướt phản hồi trong 2 khung, hãm trong 1 khung. Camera trễ 0,15 giây, nhìn trước 1,5 u.
- Rung màn hình: trúng đòn rung biên độ nhỏ 0,1 giây. Chia Oxy không rung. Cảnh báo 10% dùng âm và viền, không rung.

## 8. Cách đo thành công và tiêu chí nghiệm thu

Chỉ số kết quả:

| Chỉ số | Mục tiêu | Ai đo |
|---|---|---|
| Tỉ lệ chuyến kết thúc vì Ngạt rồi bị kéo về | Hai mức theo khung mục 9: người cẩn thận dưới 5%, người tham 15 đến 40%. Đo lại bằng playtest | gd-tech, gd-qa |
| Thời gian chuyến chương 1 | 4 đến 6 phút | gd-tech, gd-world |
| Tỉ lệ người chơi mới ghim món trước lần ngạt đầu | trên 70% sau tutorial | gd-qa (playtest) |
| Số lần được cứu trên số lần ngạt khi co-op 2 người | trên 40% | gd-tech, gd-qa |

Tiêu chí nghiệm thu (gd-qa pass hoặc fail):
1. Có prototype di chuyển trong đó người thử dừng cách điểm đích tối đa 0,5 u ở trên 90% lần thử bằng Hãm.
2. Có hành lang rộng 1,5 u dài 20 u (đi hết khoảng 3,3 giây ở 6 u/s), tối thiểu 5 người thử mới, từ lần thử thứ 3 trở đi ít nhất 90% lượt đi không chạm tường.
3. Mọi số trong mục 3 nằm trong khoảng an toàn sau prototype, hoặc có ghi lý do lệch và ngày thử.
4. Bảng trạng thái 2.3: không có đường thoát nào bị thiếu, mô phỏng 1000 chuyến ngẫu nhiên không có người chơi ở trạng thái không thoát được (bot chấm).
5. Co-op 2 người: cứu bằng chia Oxy hoạt động trong 5 lần thử liền, Oxy hai bên cộng bằng đúng số chuyển (sai số dưới 1 điểm).
6. Bị kéo về luôn giữ đúng 1 món ghim, 0 Tally bị trừ.
7. Chuyến bắt đầu với bậc 0 và 1 trên MVP đều có thanh Oxy khớp bảng 2.6.
8. CON-101: hồi không vượt trần 25% dung lượng bình trong một chuyến, không dùng được khi ngạt, hủy khi trúng đòn, sim 1000 chuyến không có lượt nào hồi vượt trần (bot chấm).
9. K22 và C10: cửa khí khóa sau chuyến thứ hai, khách thoát giữa chuyến luôn giữ đúng 1 món (bot chấm 1000 lượt).

## 9. Lệch khỏi tham chiếu

| Mục | Dave the Diver làm thế nào | Mình lệch ở đâu | Bằng chứng không tệ hơn |
|---|---|---|---|
| Oxy | Oxy hao nhanh khi bị tấn công, hết oxy thì dive kết thúc, Gold nâng sức chứa, oxy, độ sâu [D14] | Hết Oxy có 12 giây Ngạt kịp cứu, giữ 1 món ghim | Giảm phạt đột ngột (playbook: hết năng lượng là mất tất cả gây sợ). Bằng chứng giữ 1 món: log GDM dòng 11 và 57, sim GD-030 (món giữ lại bằng 22% túi đầy ở chương 1) |
| Thoát chuyến | Escape Pod giữ Space 6 giây, bị đẩy hoặc thả phím thì hủy, loot giữ nguyên [D9] | Recall Beacon 5 giây theo K4, thêm: ngạt vẫn chạm được cửa khí, chia Oxy | Cùng cấu trúc, thêm lựa chọn khi nguy hiểm |
| Co-op | Tài liệu 06 không ghi co-op | Chia Oxy, trao đồ, ping, kéo chung, không va chạm giữa người chơi | Pillar P3 do Lead chốt, Dave không có để tham chiếu |
| Điều khiển | Không tìm thấy nguồn trong tài liệu 06 | Thêm Lướt tốn Oxy, hãm chủ động | Prototype đo trong tiêu chí 1 và 2 |
| Túi đồ | Gold nâng sức chứa túi [D14] | Phạt tải mềm từ 60% (tốc độ và hao nền) | Tạo lựa chọn tham hay về, không khóa cứng |

## 10. Câu hỏi mở

| # | Câu hỏi | Đề xuất | Ai quyết |
|---|---|---|---|
| 1 | CON-101 có phá P1 không | Đã chặn bằng K26 (trần 25% dung lượng, tối đa 2 bình, không dùng khi ngạt, hủy khi trúng đòn). Số 40 và chi phí chế chờ gd-tech đưa vào sim chuyến | gd-tech, gd-economy |
| 2 | Lướt có nên tốn Oxy theo giây giữ phím thay vì một lần không | Giữ một lần 4 Oxy cho đo lường dễ, thử trong prototype | gd-tech |
| 3 | Người ngạt không bị nhắm tới và không nhận đòn | Đã chốt: `combat-driftlife.md` luật 10 và E9 đã có luật này | Đóng |
| 4 | Thang tải của vật phẩm và lớp vật kéo | gd-items đặt, giữ trần mẻ lớn nhất không quá 2 lần túi bậc 0 | gd-items |
| 5 | Camera 17,8 nhân 10 u có hợp bản đồ greybox không | Giữ ước, chốt cùng gd-world và gd-ux | gd-world, gd-ux |
| 6 | Chuyển host khi host rớt | Không làm: host thoát thì về điểm lưu (C10) | Đóng |
| 7 | Người rời phiên có nên có mặt trong ca cảng như NPC hỗ trợ không | Không, nhân vật chỉ đứng trang trí (Sau MVP bàn lại) | gd-quan, GDM |
| 8 | Cấp Vỏ có cần giảm đòn không hay chỉ cần là cổng môi trường | Giữ giảm nhẹ 5 phần trăm mỗi cấp để cấp có cảm giác | gd-combat |

## Co-op 1 đến 4 người

Nguyên tắc: mọi luật ở trên đúng với mọi N từ 1 đến 4. Thêm người là thêm tay, không mở nội dung riêng (P3).

| Mục | 1 người | 2 người (MVP) | 3 người (Sau MVP) | 4 người (Sau MVP) |
|---|---|---|---|---|
| Oxy | Riêng, không ai chia được, tự thoát bằng cửa khí hoặc Recall | Riêng, chia Oxy cho nhau | Như 2 người, nhiều bên cho cùng lúc | Như 3 người |
| Túi đồ | Riêng | Riêng, Trao đồ cho nhau | Như 2 người | Như 2 người |
| Dụng cụ mang theo | Riêng | Riêng | Riêng | Riêng |
| Bộ đồ nâng cấp | Chung của nhóm | Chung, mua một lần (C4) | Chung | Chung |
| Kéo vật nặng | 0,50 | 0,65 nếu cùng kéo | 0,80 | 0,95 |
| Va chạm giữa người chơi | Không có | Đi xuyên nhau | Đi xuyên | Đi xuyên |
| Tạm dừng | Có thể (C7) | Không | Không | Không |
| Ping | Dùng được (ghi chú cho bản thân) | Có | Có, mỗi người 3 ping | Có |
| Xác nhận chuyến | Một mình xác nhận | Cả hai xác nhận, ai không trả lời trong 30 giây thì tính là ở lại (C5) | Như vậy | Như vậy |
| Ngạt và kéo về | Mỗi người riêng (C6) | Riêng, người còn lại tiếp tục | Riêng | Riêng |
| Người về sớm (C9) | Không áp, chuyến kết thúc ngay | Chờ người còn lại, làm việc trạm | Như 2 người | Như 2 người |
| Khách rời hoặc mất kết nối quá 15 giây | Không áp. Chơi một mình thoát giữa chuyến thì mất chuyến (K23) | Tính như Bị kéo về, giữ 1 món ghim, nhân vật ở lại trạm (C10) | Như 2 người | Như 2 người |
| Host thoát | Như một mình | Phiên kết thúc, về điểm lưu gần nhất | Như vậy | Như vậy |
| Người vào sau | Vào làm người thứ 2 | Vào làm người thứ 3 | Vào làm người thứ 4 | Không vào được (hết slot) |
| Ngạt khi chỉ còn một người ngoài kia | Bị kéo về như thường | Như thường | Như thường | Như thường |

Kiểm: không luật nào hỏi "có đúng N người không", mọi con số tham số không đổi theo N (C8 chỉ đổi tài nguyên, máu Driftlife, số tàu, ở hệ thống khác).

Ca đặc biệt: hai người cùng bị kéo về cạnh nhau, cả hai cùng ở Bị kéo về, hai cảnh kéo hiển thị đồng thời, mỗi người giữ món ghim của mình. Đồng đội cũ vẫn ngoài kia ghi nhận "người này đã về" trên HUD và có thể ping lời nhắc.

## Điểm tự quyết

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
| Trong trạm | Không nhảy, không chạy, 5,5 u/s, 1 thùng mỗi người, tốc độ không đổi khi mang | Ca cảng cần đọc dễ, nhân vật tập trung nhiệm vụ | Có nhảy, nhiều thùng | Vừa |
| Vào sau | Thế giới giữ tối đa 4 nhân vật, người mới chiếm slot trống | Đơn giản hóa dữ liệu, 4 buồng ngủ đông | Không giới hạn nhân vật | Vừa |
| Rớt mạng | Giữ chỗ 15 giây, rồi tính như Bị kéo về (giữ 1 món), theo C10 | Không treo nhóm, không biến thoát thành Recall tức thì | Recall tức thì giữ cả túi (trái K4 và C10) | Rẻ |
| Ping | 4 loại, 3 ping mỗi người, 8 giây | Giao tiếp tối thiểu khi không có voice chat | Chat chữ đầy đủ | Rẻ |
| Gamepad | Hỗ trợ ngắm kéo vào mục tiêu trong nón 15 độ | Chơi gamepad không thiệt | Ngắm thuần | Rẻ |

## Phản biện khung

| Luật khung | Vấn đề | Lý do | Bằng chứng | Phương án thay | Trạng thái |
|---|---|---|---|---|---|
| C5, C6 (người về sớm phải chờ) | Người bị kéo về ở phút đầu chờ tới 8 phút | Chuyến chương 5 dài 11 phút | Phép ước đã ghi ở bản đầu | Đã xử: GDM thêm C9 (không ra lại, được làm xưởng (chế trước), khoang nuôi, xem vị trí đồng đội), bỏ đề xuất "ra lại một lần" | Đã đóng |
| K2 (giữ 1 món) với K3 | Sim GD-030 cho món giữ lại bằng 22% túi đầy ở chương 1, đổi sang giữ 3 món chỉ lệch 10 đến 18 phút, trong nhiễu | Người mới ngạt nhiều ở chương 1 | Sim GD-030 | GDM giữ 1 món (log 57). Vá lỗ hổng: chọn lồng mẫu thì chỉ giữ con có sao cao nhất | Đã đóng |
| C6 (chia Oxy) | Người cứu cũng thấp Oxy, có thể cùng ngạt | Hai bên đều thấp | Chưa đo | GDM giữ sàn 20 Oxy của người cho. Nếu sim vẫn thấy cao thì chỉ cho chia khi người cho còn trên 40% dung lượng | Giữ sàn 20 |

## Lệch cần vai khác sửa

| # | File, dòng | Lệch | Đề xuất |
|---|---|---|---|
| 1 | `ky-thuat.md` dòng 101, 102 | Còn luật túi nguyên vẹn khi thoát hoặc mất kết nối, trái C10 | Đổi thành tính như Bị kéo về (giữ 1 món), host thoát về điểm lưu |
| 2 | `ky-thuat.md` dòng 68 | `CharacterProfile` thiếu tiền tố NP | Thêm NP hoặc ghi NP Sau MVP (đã ghi ở `ho-so-nhan-vat.md` mục 6) |
| 3 | `ux-ui.md` dòng 29 và bảng 2.9 | Bộ màu slot khác `ho-so-nhan-vat.md` luật 6. Ghim món gamepad đang Y (trùng Kích Recall), hàng hành động phụ menu ghi X | Ghim món gamepad đổi sang R3, bộ màu theo hồ sơ nhân vật |
| 4 | `combat-driftlife.md` dòng 714 | Điểm tự quyết 21 còn chữ "kéo chậm", Lồng mẫu là lớp Nhẹ hệ số 1,00 | Đã xong: combat bỏ chữ "kéo chậm" ở QA vòng 1 (Lịch sử thay đổi của file đó) |
| 5 | `tram-va-cang.md` dòng 332 | "tốc độ thường" chưa có số | Ghi tốc độ đi 5,5 u/s, leo thang 3,5 u/s (mục 2.8) |
| 6 | `map.md` map nhánh có buồng ngủ đông | Cần tính thời gian kéo buồng về cửa | Dùng hệ số kéo lớp Nặng 0,50 |
| 7 | `vat-pham.md` | CON-101 cần đưa vào sim chuyến để chốt số 40 và chi phí chế | gd-tech mô hình, gd-items chỉnh nếu lời ròng quá trần |

## Lịch sử thay đổi

| Ngày | Thay đổi | Lý do | Ai |
|---|---|---|---|
| 2026-11-20 | Bản đủ đầu tiên | GD-023 | gd-character |
| 2026-11-20 | Khớp lượt 1b: K2 ngoại lệ (vật manh mối, vật nhiệm vụ), C9, Solace là mồi, gỡ dấu chờ các vai đã có file, đai dụng cụ 3, 4, 5 ô, đơn vị Khối | GD-023 1b | gd-character |
| 2026-11-20 | Lượt 2b: túi 80, 100, 126, 168, 216 Khối, bình 330, 450, 600, 780, 1000, ghim lồng mẫu giữ con sao cao nhất, C5 30 giây, mục tiêu bị kéo về hai mức, đổi ID theo gd-items (bỏ TOL-101) | GD-023 2b, log 54 đến 60 | gd-character |
| 2026-11-20 | Đợt 4 sau GD-031: C10 và K23 thay "Về an toàn giữ nguyên túi" khi thoát hoặc mất kết nối, K26 trần CON-101 kèm thao tác Dùng vật tiêu hao (phím G), K27 cấm trao và thả đồ khi ngạt, K22 tối đa 2 chuyến mỗi ngày, bảng phím khớp ux-ui (Q, M, J, Tab, ghim R3), Lướt và trần 12 u/s, Oxy chạm 0 giữa Recall, thả vật 30 giây, gỡ mọi dấu chờ, sửa số lỗi nhẹ | GD-023 Đ4 | gd-character |
| 2026-11-20 | Đợt 9 ca cảng kiểu Dave (GD-051): bỏ luật mang kiện và 3 hàng tốc độ mang kiện theo cỡ, thay bằng mang 1 thùng, tốc độ không đổi, không khiêng chung, không đặt xuống, nhặt giao bằng E hoặc Space, giữ E 1 giây bơm khí, bấm chuột tự chạy tới. Người về sớm (C9) chế trước ở xưởng, bỏ đóng kiện trước | Lead chốt ca cảng theo khung bán sushi của Dave | gd-character |
| 2026-11-23 | Sửa câu văn theo đánh giá humanizer (production/reports/2026-11-23-humanizer-gdd.md): bỏ lịch sử trong thân luật, phủ định thừa, câu chốt lặp. Không đổi luật, số, ID. Thang cũ túi 20 Khối, bình 300 làm gần 100% chuyến kết thúc vì đầy túi, chương 1 chỉ dài khoảng 1,5 phút nên đã đổi (log 54) | Đánh giá humanizer GDD | gd-character |
| 2026-11-23 | Theo rà chéo Sheet nhóm B (qa/2026-11-23-ra-cheo-B.md): mục 2.7 ghi rõ mọi phím gán lại được trừ Esc và Start, khớp ux-ui.md mục 2.9. Không đổi luật | Đánh giá humanizer GDD | gd-character |
