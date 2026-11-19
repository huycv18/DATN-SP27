# Độ khó và cân bằng: phương pháp đã kiểm chứng

Nguồn: game bắn màu A, game bi drop A, game sort xe A, game tile chữ A, game screw tổ ong A, game phục vụ Order A, game-tycoon-a. Chi tiết số liệu ở `nguon/`.

## 1. Định nghĩa độ khó đúng cách

- **Độ khó là "kiểu người chơi nào thua", không phải điểm cấu trúc bàn.** Thang cộng 5 trục cấu trúc (chật, rối, số màu, kho, độ dài) từng chấm 62-70 cho level mà bấm bừa thắng 100% (game sort xe A, 24/09/2026). Lead: "nhiều Level tôi bấm bừa cũng qua liên tục nhưng điểm độ khó bạn đánh giá toàn là trên 70".
- **Lấy định nghĩa từ Lead bằng 3 câu phỏng vấn**, ghi nguyên văn: (1) độ khó game này đến từ đâu (đợi 2-4 thứ), (2) một ván hay đi thế nào từ đầu tới cuối, (3) level nào trong bộ hiện tại đúng nhất và vì sao. Câu 3 cho fixture hiệu chuẩn.
- Trục Lead nêu bám nhãn tốt hơn trục Claude tự nghĩ: game bắn màu A 0,742 so với 0,664 (độ chặn, độ dư, slot chờ do Lead định nghĩa 11/09/2026).
- Các định nghĩa Lead đã từng nêu, tái dùng khi gặp thể loại tương tự:
  - Puzzle có bộ đệm (khay, slot, băng chuyền): "gần đầy mà không ăn được gì". Độ khó thật = áp lực lên MỘT tài nguyên khan hiếm, đo bằng "lượng tối thiểu để còn thắng" (minCap, minSlots, minPeakCap).
  - Luật thua game bi drop A (chốt 13/08/2026 qua ví dụ 90/80 của Lead, "đừng đổi nữa"): chỉ tính bóng ĐỌNG sau khi chuỗi ăn xong. Đọng chạm trần (≥ MaxCap, mặc định 80) là thua ngay. Không có tap tự cứu. Vọt trần giữa chuỗi ăn vẫn sống. Dưới trần mọi tap đều được phép kể cả tap tự sát. Code: `poolDead` = đọng ≥ cap.
  - Hộp bóng: độ chặn (phải lấy mấy hộp khác mới tới hộp cần), độ dư (hộp bắn vài phát rồi nằm lại slot), slot chờ ít.
  - Sort: để gom màu cho xe đang đỗ phải đẩy màu khác lên băng chuyền, băng chuyền đầy là thua, nên phải tính trước.
  - game tile chữ A: chôn chữ (order cần C A T nhưng quân bị đè), áp lực khay, úp (không biết quân dưới), băng (phải phá), link (phải lấy cả cặp).
  - Puzzle suy luận (game-suy-luan-luc-giac-a): cái khó là "mơ hồ tồn tại đủ lâu". Blocker trang trí kiểu Ice/Lock không đánh vào nguồn khó.

## 2. Hai dạng thang điểm đã dùng

### 2a. Thang bậc người chơi (ưu tiên cho puzzle có solver nhanh)
| Bậc | Người chơi | Cách chơi |
|---|---|---|
| 0 | Nhắm mắt | bấm bừa kể cả nước làm tràn |
| 1 | Người mới | không làm tràn, nhìn 1 nước |
| 2 | Biết tính | nhìn trước 2 nước |
| 3 | Cao thủ | nhìn trước 3 nước |
Mỗi bậc thua cộng 25 điểm theo tỉ lệ thua. 0 = nhắm mắt cũng qua, 100 = cả bốn bậc kẹt (vô nghiệm cũng 100). Dải Meow: Easy 0-30, Medium 30-55, Hard 55-78, Expert 78-100. Dễ giải thích cho designer, cấu trúc chỉ để chẩn đoán.

### 2b. Thang nhiều trục có trọng số (khi cần "điểm đến từ đâu")
- Đặt **trọng số theo ý đồ của Lead**, chỉ dò ngưỡng dải và mức chuẩn hóa bằng grid search trên bộ đã ship. Hai lần máy dò đòi dồn trọng số cho "độ dài ván" (0,40 rồi 34%) đều bị bác vì trái định nghĩa.
- Kèm `reasons` và `flags`: thang phải nói được điểm đến từ trục nào. game tile chữ A v2 (01/10/2026): thua 25, khay 20, chôn 25, úp 6, băng 7, Link 7, dài 10. Mechanic đo bằng 60% phép loại bỏ (Δwin% khi bỏ mechanic) + 40% cấu trúc theo dòng thời gian lời giải.
- Hai trục đếm cùng một thứ (độ dư và nằm slot) thì một vào điểm, một làm số chẩn đoán.
- Trục chuẩn hóa theo bộ nhỏ sẽ bão hòa khi bộ sinh đổi cỡ bàn (length luôn 100). Xem lại mức chuẩn hóa khi đổi bộ sinh.
- Khi fit bằng dữ liệu bot (game bi drop A Spearman +0,36 lên +0,81): hằng số fit không chỉnh tay khi không có bộ đo mới. Bất biến theo cap (chia cho capacity của level).

## 3. Bot và solver

- Solver trả **ba phán quyết**: giải được / vô nghiệm (chứng minh) / chưa kết luận (hết ngân sách thì loại level). Vét cạn có memo và ngân sách. Beam hoặc planner khi gõ.
- **Đo từ lời giải ổn định** (beam/planner), không từ lời giải đầu tiên của vét cạn (lệch tới 0,21 trên trục độ chặn).
- **Số tìm nhanh chỉ là cận trên**: minRing 6-8 bằng tìm nhanh, vét cạn cho thấy người chơi hoàn hảo chỉ cần 2-4. Xác nhận bằng vét cạn trước khi báo số.
- Bot tất định (0% hoặc 100%) không đo được bẫy. Dùng **hồ sơ lai planner + sai số người thường** (game tile chữ A `dxBotPlannerHuman` mới lộ giá trị thông tin của quân úp: L15 mất 15% win vì 18 quân úp).
- Bot phải hành xử như người thật: tầm nhìn bằng người (Bee: bot thấy 6 lớp trong khi game chỉ hiện 4), dự trữ tiền ngang người mới, không thận trọng hơn người thật. Kiểm đơn điệu: thêm ô chờ dễ hơn, thêm Ẩn khó hơn, giỏi thua ít hơn mới.
- **Phần lớn lệch cân bằng là lỗi bot, không phải lỗi data** (game-tycoon-a: bot không tuyển người, đào tạo vô hạn, mua quảng cáo lỗ). Kiểm bot trước mỗi vòng chỉnh số.
- Bot và người lệch nhau: truy nguyên nhân trước khi gọi bug. Ca game bắn màu A: solver sinh nước người không được đi. Ca "luật thua đã đúng, đừng sửa lại" vì solver và bot bắn hết rồi mới xét slot đầy.
- **Bot đúng thứ hạng, sai giá trị tuyệt đối** (Tactile 4.000 level Lily's Garden, King hơn 1.000 lượt mô phỏng mỗi level): dùng bot để xếp level và chọn level cần người thử, số tuyệt đối hiệu chuẩn bằng dữ liệu người. Tactile: đổi giới hạn nước đi 1 đơn vị thì completion đổi khoảng 2%. Nguồn: `production/reports/2026-11-09-nc-level-curve.md`.
- Bộ chỉ số prototype chuẩn: `L*` (độ dài lời giải tối ưu), `Wr` (300 rollout random), `Wg` (100 greedy), `Wl` (50 lookahead 2-3), `T` mật độ bẫy, `C` số quyết định sống còn, `F` độ sâu thua, `Sol` số lời giải. Đo không dùng booster.

## 4. Hiệu chuẩn theo bộ đã ship

- Fixture = bộ level đã ship hoặc level Lead nói "đúng nhất". Không có fixture thì mọi số về sau chỉ là ý kiến.
- Khóa bằng test **danh sách nhãn** (level nào khớp, level nào lệch chiều nào), không chỉ đếm "11/15". Nhãn Medium của một bộ có thể gồm cả câu đố minSlots = cap nên AI playtest Medium cao hơn Hard: kiểm chỉ canh Easy nhỏ hơn hẳn Hard, Super từ 90, thang kỹ năng đơn điệu.
- **Đổi luật lõi thì hiệu chuẩn lại và nói rõ "nhãn được đặt cho luật cũ"** (game bắn màu A luật súng mới: 8/15 level đổi minSlots, khớp nhãn 10/15 xuống 9/15, không phải thang tệ đi).
- Mỗi tranh hoặc bàn có thang điểm rời rạc (168 lần dựng chỉ ra 9 mức, hở 15 điểm): giữ `ladder` điểm kèm dial/seed rồi dựng lại cặp gần đích. Báo mức đạt được thay vì thử lại vô hạn. Nhiều bàn chỉ có hai chế độ (0-8 hoặc 64).
- Trần độ khó của luật là có thật: bàn không mechanic game tile chữ A trần khoảng 65, L50 mục tiêu 76 không với tới với khay 5 và 2 order trên thang v1 (trên v2 L50 đo 74,8, xem dòng dưới). game bắn màu A trần khoảng 85 với 5 slot. Báo trần kèm số, không hứa, không nới luật âm thầm.
- Hai số L50 game tile chữ A khác thang, không mâu thuẫn (đo lại 20/10/2026, 2000 ván, bài kiểm năng lực lần 2): "trần 67-69" là thang v1 (`score.js`, đo 30/09, trước khi có v2). "77,1" là thang v2 (`difficulty.js`) đo 300 ván trên bản 01/10 sau khi gỡ Link từ 10 xuống 3 nhóm (cùng bản đo 2000 ván ra 76,2). Gỡ Link làm điểm giảm (10 nhóm 88,3 nhưng áp lực 1,52 trượt cổng ≤ 1,00), không phải tăng. L50 hiện tại (3 nhóm Link, áp lực 0,90): v2 74,8, v1 68,8, người thường thắng 20,9%. Ở đỉnh v2 đọc cao hơn v1 khoảng 7 điểm dù `DX_SCALE` khớp trung bình, nên mục tiêu 76 (đặt trên v1) "đạt" trên v2 một phần do thang. Luật: mọi số độ khó ghi kèm thang, số ván, ngày. Chi tiết: `docs/nang-luc/bai-lam/2026-10-20-lan2/gd-level.md`.

## 5. Đòn bẩy độ khó (đo biên độ trước khi tin)

- Quét biên độ từng núm (`forge:probe`) và gỡ núm chết: Meow `minRing`, `lookahead`, `greedyFail` biên độ 0,00. game bắn màu A "xáo" chỉ đổi độ chặn 0,06 lên 0,13 còn "chôn màu" 0,03 lên 0,29. game bi drop A trần bóng/hộp ghim 24 làm dial vô tác dụng.
- Thứ tự sức mạnh cho sort / jam / match: bớt chỗ đệm (mạnh nhất) > thêm màu giữ sức chứa > lớp che đúng chỗ greedy muốn lấy > thứ tự bắt buộc (khóa-chìa, hàng đợi) > bẫy có chủ đích > tăng cỡ bàn sau cùng (to hơn chủ yếu làm dài hơn).
- game phục vụ Order A: `maxOrders 2 + capacity 2` mạnh nhất, Hidden thứ hai. Tăng capacity từ 2 lên 6 làm L12-14 từ Wg 0% lên 100%.
- Puzzle băng chuyền và satisfy puzzle (nguồn ngoài, định tính, chưa đo): độ khó đến từ lệch thứ tự giữa bàn và phía giải (vật tồn trên băng hoặc bar), thứ tự cứng hay mềm, vật nối 2 loại (Connected Object, chỉ 1 trong 2 đúng thứ tự), bất đối xứng kích thước (vật nhìn nhỏ cần nhiều chỗ chứa), màu na ná gây chọn nhầm. Nguồn: Teddy Phan, nhóm Làm Game Hiện Đại 05/03 và 18/03/2026 (`production/reports/2026-11-09-fb-lam-game-hien-dai.md`).
- Sort có đệm: **cố định sức chứa đệm cho cả game** bằng đo trên nhiều cỡ bàn (Meow 7 = nhóm tối đa 4 + 3, đo 60 bàn), rồi điều khiển độ khó bằng thứ tự order/xe và hàng chờ. Thứ tự order khó: cùng màu tới sát nhau, màu đang lộ cho tới muộn. Nhưng trộn ngẫu nhiên (tối đa 2 liền nhau).
- Nhiều cột / lane = nhiều lối thoát = dễ hơn (game bi drop A đảo CSV: khó hơn thì ít cột hơn).
- Thời lượng ván là hệ quả, không phải tham số. Cơ chế gom nhiều đơn vị vào một thao tác (hộp) thì cỡ hộp là đòn bẩy kéo dài rẻ nhất: cùng 84 card, hộp 6 bóng ra 36 s, hộp 3 ra 56 s. Đổi trần tài nguyên và cỡ hộp cùng lúc để giữ độ căng tương đối (cap 80 + hộp 24 cho +67% tap, căng giữ 76%).
- **Đòn bẩy monetization cũng là đòn bẩy độ khó**: đo bot ở mỗi trạng thái (2/3/4 ghế, có/không booster). game phục vụ Order A L14 Wl 35/78/90% theo 2/3/4 ghế. Cân bằng ở trạng thái miễn phí, ads nâng khoảng một bậc.

## 6. Curve nhiều level

- Lead chỉ định level đỉnh. Không dò tự động từ cực đại cục bộ (game tile chữ A: L2, L6 là cực đại cục bộ nhưng không phải đỉnh).
- Răng cưa: tăng 2-3 level rồi hạ một bậc. Không tụt quá 1 bậc sau đỉnh. Vai trò mỗi level: dạy / giới thiệu / luyện / đỉnh / thở / thường.
- Mốc giới thiệu mechanic viết theo bảng cấu trúc "lượng - tiến độ" (Hidden là tỉ lệ 0.3-0.2 = 30% quân từ 20% ván, Link là số đếm 2-0.3 = 2 nhóm từ 30% ván), trộn hai loại từ giữa bộ, cả ba ở các đỉnh cuối.
- Mật độ mechanic theo nhãn và theo chặng (game tile chữ A: băng L16-25 1-3, L26-35 3-4, L36-50 4-6. Link 2-3 rồi 3-4). Điểm phải đạt VỚI mechanic đã gắn, gắn trong vòng chọn ứng viên.
- Curve chiến dịch tính theo % tiến độ để đổi số level không vỡ hình (game bi drop A: phẳng 0-18%, đỉnh 27%, thở 50%, đỉnh lớn 72%, tụt cuối. Nhịp nghỉ mỗi 10 level ×0,82, mỗi 25 level ×1,12).
- Bộ sinh cần **ràng buộc đa dạng nhìn thấy được** (cỡ bàn, số màu leo dần), sàn số nước, seed riêng từng level, cấm trùng bàn ngay ở bước chọn (Meow: 5 màn thực ra là 2 bàn trùng).
- Cửa sổ mục tiêu prototype 15 level (Wr / Wg): dạy 0,85-1 / 0,95-1. Dễ 0,45-0,9 / 0,9-1. Vừa 0,12-0,5 / 0,7-1. Khó 0,02-0,22 / 0,45-0,9. Rất khó 0-0,1 / 0,25-0,7. Boss 0-0,04 / 0-0,55, `C` tăng dần, `F` từ 70% ở level 12 trở lên.
- **Thiết kế curve trước, dựng màn theo curve sau.** Dán nhãn độ khó lên màn có sẵn cho ra cầu thang đi lên, "Đỉnh" không hạ, số màn ngược nhãn (game phục vụ Order A 06/11/2026, Lead: "khủng khiếp"). Script sinh curve tự kiểm: đỉnh sau không thấp hơn đỉnh trước, level ngay sau đỉnh thấp hơn đỉnh.
- **Không xếp chuỗi level khó liền nhau.** Playrix theo dõi riêng chuỗi level 92-95% thua liên tiếp vì người chơi nản. Cổng curve cảnh báo khi từ 3 level liền nhau ở bậc Khó trở lên.
- **Level khó đầu tiên của bộ ship đến muộn.** Royal Match giữ level khó đầu tới L39, L11-22 khoảng 1,1 lượt thử mỗi lần thắng (Gamigion quan sát). Prototype 15 level để thử luật thì được có đỉnh sớm, bộ ship thì 20-30 level đầu chủ yếu Dễ và Vừa. Chưa nguồn nào công bố tỉ lệ level khó trong 20, 50, 100 level đầu, không chép số ngoài làm ngưỡng.
- **Level càng khó càng phải ngắn**, độ khó và độ vui là hai trục riêng (King, GDC 2024: đo vui bằng time to abandon và time to pass, sửa 100 level kém vui nhất thì engagement tăng rõ).

## 7. Nhịp độ bên trong một ván

- Hình Lead vẽ (game bắn màu A 11/09/2026): mở nhẹ tới 25%, đỉnh nhỏ 40%, nghỉ 50-62%, đỉnh lớn 77%, xả về 0. Trục dọc = tài nguyên đang bị chiếm. Áp cho mọi level, biên độ co theo điểm khó. game bi drop A: bóp ở 20% và 60-70%, đỉnh sau cao hơn đỉnh trước.
- **Mở màn phải thông**: giải được 1-2 nhóm ngay lúc vào bàn (trước luật này 5/15 level shipped bị bịt nước đầu). Có hàm đo và hàm sửa.
- **Đoạn xả cuối** là phần thưởng cảm xúc: đuôi là dãy dài cùng màu, cuối dài hơn đầu. Kiểm hướng index (front là index 0) trước khi đặt cấu trúc.
- Giới hạn: người chơi giỏi hoãn tài nguyên chết nên đỉnh bị đẩy về cuối. Hộp chỉ rời slot khi cạn nên áp lực bánh cóc. Hộp càng nhỏ càng dễ nắn nhịp.
- Hộp to ở giữa hàng, hộp nhỏ và lẻ dồn cuối. Số đẹp 4, 6, 8, 10, trần 12 cho bộ sinh (sửa tay không giới hạn). Số đẹp chạm bất biến "tổng bóng = tổng card mỗi màu" nên phải sửa cả phía nguồn.

## 8. Cân bằng economy bằng sim (từ game-tycoon-a)

```
mốc có nguồn -> bot nhiều chính sách + sim nhiều seed -> p10/p50/p90 -> so mốc
-> chỉnh một núm gap -> chạy lại cả bảng -> dừng ở bước đầu đạt hoặc chấp nhận lệch nhỏ -> DECISIONS -> QA chơi thật
```
- Mốc ghi nguồn và loại: gốc (APK, wiki, đo thật) hay "ước của ta". Mốc ước nhường mốc gốc. Số nguồn không "làm đẹp" (bảng F gãy ở 1 000 fan là thật, Ghidra xác nhận).
- 20 seed dò, 40 seed xác nhận. Mốc trong ±25% ngưỡng thì báo p50 của 20 seed. Sim phủ cả vòng đời người chơi (đo 4 năm thì nửa sau vỡ).
- Chỉ chỉnh núm gap (tham số ta đặt để nối số gốc với mục tiêu), mỗi núm có giá trị mặc định, khoảng hợp lệ, nhóm tác động. Thứ tự chỉnh dự phòng viết trước khi code.
- Đo cả chỉ số trải nghiệm: thời lượng một vòng, đoạn chờ trên 10 giây không quyết định, giá trị kỳ vọng các lựa chọn (hợp đồng so với làm game). Đạt 4/4 mốc tiền mà vòng chỉ 2-3 phút là thất bại.
- Điều kiện dừng ghi trong brief: tối đa 2 vòng sim mỗi task. Lệch ≤ 1 đơn vị thời gian game hoặc ≤ 5% thì chấp nhận và ghi DECISIONS.
- Kiểm kinh tế 3 kịch bản (tệ, trung bình, tốt): phiên tệ vẫn mua được nâng cấp rẻ nhất. Mỗi đổi hệ số kèm một bất biến viết ra.
- Nhịp trận RTS/PvE: đo thời lượng kèm mật độ hành động (phát bắn mỗi trận). Kéo dài bằng nội dung chứ không bằng ngưỡng điểm.

## 9. Đo độ khó với người chơi thật (nguồn ngoài, 09/11/2026)

Tổng hợp từ 3 báo cáo: `production/reports/2026-11-09-nc-level-curve.md`, `2026-11-09-nc-onboarding.md`, `2026-11-09-fb-lam-game-hien-dai.md`. Số ngoài chỉ để tham chiếu cấu trúc, ngưỡng của game đặt theo dữ liệu game đó.

- **Lượt thử để thắng thay cho win rate đơn thuần.** Tỉ lệ thua 50% tương đương khoảng 2 lượt thử, 80% khoảng 5 lượt (SayGames 07/2026). Trung bình che đuôi: chỗ trung bình 2 lượt vẫn có người cần 10-20 lượt, chỗ 5 lượt có người thử 50 lần. Ghi lượt thử trung bình, trung vị, P90 và tỉ lệ người cần từ 10 lượt trở lên. Tham chiếu: Room 8 level Hard khoảng 1 thắng trên 8-10 lượt, Lily's Garden khoảng 3,2 lượt mỗi level sau giai đoạn đầu (level dễ 1, level khó trên 7). Playliner "Hard 20-35 lượt" không có dữ liệu gốc, không dùng.
- **Hành động ngay sau thua phân loại level.** Event thua kèm lượt thử thứ mấy và hành động kế tiếp: retry ngay là thử thách tốt, xem ads hoặc dùng booster là ma sát bán được, quit là bực bội, thua vì không hiểu mechanic là lỗi tutorial chứ không phải độ khó. Thêm % thua khi còn 1-2 mục tiêu (near-miss). Win rate thấp chưa chắc là level xấu, level xấu là level làm người chơi không quay lại (Jack Nguyen, nhóm Làm Game Hiện Đại 09/05 và 13/06/2026).
- **Retention thắng conversion về dài hạn.** King level 65: bản khó tăng conversion ngắn hạn, bản dễ giữ người lâu hơn (A/B, không công bố số). Playrix level 77 và 93: chọn bản giảm dropout dù doanh thu giảm nhẹ. Hạ độ khó một level hay thua thì đo cả session, rewarded, IAP vì level đó có thể đang là điểm tạo căng hoặc ma sát bán được. Mọi thay đổi curve đo D1, D7 và churn theo level, không chỉ conversion.
- **Bảng 4 ô chỉnh live (Room 8):** khó, churn cao, doanh thu cao thì giữ. Khó, doanh thu thấp thì hạ. Churn thấp, doanh thu thấp thì level quá dễ, nâng.
- **Churn ở một level có thể là tạm dừng**: theo dõi qua nhiều phiên hoặc nhiều ngày. Chuỗi level mới thử trên nhóm hẹp trước khi mở hết (SayGames).
- **Rơi người chơi ở level 1-2 thì so theo nguồn trước khi sửa game**: so tỉ lệ rơi theo ad network, chỉ một nguồn rơi thì xem tệp người chơi hoặc làm bộ level riêng cho nguồn đó (bình luận nhóm Làm Game Hiện Đại 01/10/2026, ca 1/25 người chơi tới L80).
- **Khoảng trống thật, không có dữ liệu công khai:** tỉ lệ level khó theo mốc 20/50/100, ngưỡng thắng lần đầu, ngưỡng churn theo level, force lose, curve phụ khi thua liên tiếp. Thí nghiệm Columbia (300.000 người chơi, giảm độ khó cho người sắp rời tăng doanh thu dài hạn) mới thấy qua tóm tắt, đọc bản gốc trước khi dùng.
