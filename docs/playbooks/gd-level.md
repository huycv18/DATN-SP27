# Playbook - Level & Difficulty Designer

Gộp từ playbook `difficulty-analyst` và `level-designer` (20/10/2026). Phần chung trước, phần riêng theo loại việc sau.

## Checklist trước khi bắt đầu

### Độ khó và cân bằng
- [ ] Đọc `docs/knowledge/20-do-kho-va-can-bang.md` (bắt buộc, mỗi lần).
- [ ] Đọc luật lõi đã chốt và phiên bản luật (nhãn cũ có thể thuộc luật cũ).
- [ ] Có fixture chưa (bộ đã ship, level Lead nói "đúng nhất", bảng nhãn của Lead)? Chưa có thì xin qua GDM trước khi đặt số.
- [ ] Có lời Lead về "độ khó đến từ đâu" chưa? Chưa có thì 3 câu phỏng vấn là việc đầu tiên.
- [ ] Repo có solver, bot, script đo chưa (`grep -ri solver`, `tools/`, `npm run`)? Mở `docs/process/templates/mo-hinh-do-kho.md`.

### Dựng level
- [ ] Bậc sản phẩm: V0.5 thì đầu ra là dòng Level Design (vị trí hard, very hard, mốc) và Level data tối thiểu trong một lượt. Số theo ý đồ, một dòng [GIẢ ĐỊNH] chung. Không dựng bot, solver, cổng vật lý trừ khi GDM xác nhận (mẫu `.claude/skills/gdd-v05/references/khuon-va-bai-hoc.md`).
- [ ] Mechanic chưa có câu Lead nguyên văn chọn: cột mechanic trống, mốc ghi "chờ mechanic". Lịch tag, mốc sương, họa tiết không phụ thuộc mechanic.
- [ ] Dòng Level Design gửi thẳng vai giữ Main Task (gd-systems, hoặc GDM với game sinh bằng khuôn). Không tự sửa `cau-hinh-v05.json` hay TSV Main Task (bài kiểm lần 4).
- [ ] Đọc `docs/knowledge/25-level-design.md` (bắt buộc, mỗi lần).
- [ ] Có bảng curve và mô hình độ khó của project chưa (`projects/<slug>/do-kho/`)? Chưa có thì báo GDM, không tự đặt mục tiêu.
- [ ] Đọc DECISIONS mục project: khung bàn, số order, sức chứa khay, mật độ mechanic theo chặng, định nghĩa Link, tầng đặt băng, chủ đề cấm, chuẩn thẩm mỹ tham chiếu.
- [ ] Kiểm tool và script có sẵn (`tools/`, `npm run`), hook chơi thật trong game, viewport mục tiêu.
- [ ] Sao lưu bộ level hiện tại có timestamp trước khi ghi bất kỳ file nào.

## Phương pháp

### Độ khó và cân bằng
- **Thang nói ngôn ngữ của Lead.** Mã hóa đúng các trục Lead kể, trọng số đặt theo ý đồ, chỉ dò ngưỡng. Khi optimizer đòi dồn trọng số cho "độ dài ván" thì bác và ghi lý do.
- **Ưu tiên thang bậc người chơi** (nhắm mắt / mới / biết tính / cao thủ, 25 điểm mỗi bậc thua) cho puzzle có solver nhanh. Dùng thang nhiều trục khi cần giải thích "điểm đến từ đâu". Cả hai phải trả `reasons`.
- **Bot như người thật**: tầm nhìn bằng người, sai số người thường, không thận trọng hơn người. Hồ sơ lai planner + sai số mới đo được giá trị thông tin (quân úp). Kiểm đơn điệu trước khi tin.
- **Kiểm bot trước khi chỉnh số.** Mỗi vòng cân bằng bắt đầu bằng câu "bot có chơi sai không" (bot không tuyển người, đào tạo vô hạn, mua quảng cáo lỗ, bot thấy 6 lớp khi game hiện 4, solver sinh nước người không được đi).
- **Số tìm nhanh là cận trên**. Phán quyết bằng vét cạn. Đo trục từ lời giải ổn định (beam/planner).
- **Hiệu chuẩn bằng danh sách nhãn**, khóa bằng test. Đổi luật thì hiệu chuẩn lại và nói rõ nhãn thuộc luật nào. Mức khớp không đạt 100% là bình thường (11/15, 32/34). Chốt danh sách lệch kèm lý do thay vì ép khớp bằng cách hạ trục.
- **Đo biên độ mọi núm trước khi tin** (`probe`). Gỡ núm chết. Xếp hạng núm và ghi vào mô hình. Khi Lead đổi một núm mạnh, trả bảng trước/sau và đề xuất cách bù.
- **Trần của luật báo kèm số**, không hạ chuẩn âm thầm, không nới luật để đạt mốc (hỏi Lead qua GDM).
- **Curve**: đỉnh do Lead chỉ. Răng cưa. Vai trò mỗi level. Mốc mechanic dạng "lượng-tiến độ". Điểm đạt VỚI mechanic đã gắn. Ràng buộc đa dạng nhìn thấy, sàn số nước, seed riêng, cấm trùng bàn. Tính theo % tiến độ khi bộ có thể đổi số level.
- **Nhịp trong ván**: đo đường áp lực theo tiến độ, đối chiếu hình Lead vẽ. Luật mở màn thông và đuôi xả có hàm đo và hàm sửa.
- **Economy bằng sim**: mốc có nguồn và loại, bot nhiều chính sách, 20/40 seed, p10/p50/p90, luật sát ngưỡng ±25%, chỉ núm gap, thứ tự dự phòng viết trước, phủ cả vòng đời, đo chỉ số trải nghiệm và giá trị kỳ vọng lựa chọn. Điều kiện dừng: tối đa 2 vòng, lệch ≤ 5% hoặc ≤ 1 đơn vị thời gian thì chấp nhận và ghi DECISIONS.
- **Curve trước, màn sau** (09/11/2026): viết curve mục tiêu rồi mới dựng hoặc chọn màn, không dán nhãn lên màn có sẵn. Script curve tự kiểm: đỉnh sau không thấp hơn đỉnh trước, level sau đỉnh thấp hơn, cảnh báo từ 3 level Khó trở lên liền nhau, tối đa 3-4 thứ mới mỗi level. Level càng khó càng ngắn. Bot dùng để xếp hạng và chọn level cho người thử, không báo số tuyệt đối như số người. Nguồn: `docs/knowledge/20-do-kho-va-can-bang.md` mục 6 và 9.
- **Monetization là đòn bẩy độ khó**: đo bot ở mỗi trạng thái (số ghế, có/không booster). Cân bằng ở trạng thái miễn phí.
- **Đổi thuật toán làm dịch điểm thì bump version calibration** và chạy lại phép kiểm. Hằng số fit không chỉnh tay.
- Kết quả luôn thành bảng (level, nhãn, điểm, Wr/Wg/Wl hoặc bậc thua, lý do chính) và file trong `projects/<slug>/do-kho/`. Nêu "số nào đo, số nào ước".

### Dựng level
- **Cổng xuất data (GD-019c).** Bước xuất data gọi `.claude/skills/level-forge/scripts/kiem_noi_dung.py` (cấu hình JSON của project). Cổng dừng khi tổng mechanic chặn vượt mức cao nhất của bộ đã ship, hoặc tổng mọi mechanic vượt 0,8, ở mọi mốc tiến độ (cột dạng tiến độ-số lượng thì đếm số quân chia tổng quân, khai ở `so_luong` của cấu hình), và dừng khi từ thêm lạc chủ đề chính hoặc nằm trong kho cấm. Ngoại lệ có chủ ý ghi vào file chấp nhận kèm lý do. Ví dụ ở game chữ rơi: `python -X utf8 projects/<slug>/do-kho/xuat_sheet.py`. Selftest `kiem_xuat.py --selftest` bắt lại bản 95% quân mang mechanic và ca L37 nhận DOCK, PARK.
- **Soi mắt bảng `bang-kiem.md`** (từ bỏ -> từ thêm -> chủ đề) trước khi gửi gd-qa. Mọi bảng số trong báo cáo lấy từ `bang-bao-cao.md` sinh cùng lần chạy, không gõ tay.
- **Khi dựng hay đổi từ** dùng `chon_tu_thay()` của cùng script: ứng viên thuộc chủ đề chính của level, không cấm, không tạo cặp nhầm, tránh 5 level trước.
- Mỗi level một vai trò ghi ở đầu. Mechanic theo dạy -> luyện -> thử. L1-5 không thể thua. Mechanic giới thiệu ở chỗ thấy ngay, không chạm trần.
- Layout Lead vẽ tay: khóa tọa độ, chỉ gán nội dung, order, hint, mechanic. Đổi hình phải hỏi kèm ảnh trước/sau. Lệch nửa ô là thiết kế.
- Thẩm mỹ theo chuẩn tham chiếu: cụm có rãnh, đối xứng, chỗ thở, nhiều hình thù, viền phẳng tâm sâu. Không bàn đặc, không bàn 1 tầng, không bàn 8 hàng. Căn giữa lưới. Dùng `aesthetic()` nếu có, giữ từ 70.
- Mở màn 1-2 nhóm giải được ngay. Áp lực kiểm sau khi gắn mechanic. Đuôi xả dài.
- Nội dung: một chủ đề chính, danh sách từ/ảnh cấm, cặp dễ nhầm tách, chặn trùng ≥ 40%, xoay vòng từ ít dùng. Màu theo độ an toàn mù màu.
- Cứ 10 level: review script + soi mắt + chơi thật theo `sol` và theo cảm giác ở viewport mục tiêu. Tờ tổng hợp ảnh bàn. Lỗi mới thành cổng script (đề xuất cho gd-tools).
- Nhãn là ràng buộc: nghiệm thu bằng số đo cuối với số ván lớn hơn lúc sinh (2000 ván), chừa lề dưới trần. Báo level lệch kèm lý do, không ép.
- Bàn giao theo template: `_index` đủ, tên file 3 chữ số, marker hệ tọa độ, bảng level, danh sách lệch, việc còn lại.
- Kiểm mtime và phiên khác đang chạy trước khi ghi. Không tự khôi phục thay đổi có chủ đích của người khác.
- Thêm mechanic vào bộ level: đo tổng tỉ lệ mọi mechanic ở mọi mốc tiến độ, trần phần chặn theo mức cao nhất của bộ đã ship, tổng không vượt 0,8. Cổng này nằm trong bước xuất data. Mechanic mới vượt trần thì không tự hạ Lock, Ice, Link đã có để chừa chỗ: liệt kê level vướng kèm lý do và đưa Lead chọn (ví dụ game chữ rơi: Lead giữ Lock, Ice ở V0.5).
- Đổi từ tự động: ứng viên thuộc chủ đề chính của level, không ảnh lỗi hay ảnh mức 3, tránh 5 level trước. In bảng "từ bỏ, từ thêm, chủ đề" để soi mắt trước khi gửi QA. Mọi bảng số trong báo cáo sinh từ file đo cùng lần chạy.
- Brief không nói lỗi nằm ở build hay ở data thì hỏi trước khi sửa data.

## Câu hỏi phải tự trả lời trước khi báo xong

### Độ khó và cân bằng
- Lead đọc bảng này có hiểu vì sao level X khó hơn Y bằng chính từ của họ không?
- Bot có chơi như người không, đã kiểm đơn điệu chưa?
- Fixture là gì, mức khớp bao nhiêu, danh sách lệch đã có lý do chưa?
- Núm nào mạnh nhất, núm nào chết, đã đo chưa?
- Trần của luật là bao nhiêu, mục tiêu nào không với tới?
- Đã đo thời lượng ván và chỉ số trải nghiệm chưa, hay chỉ chỉ số kết quả?

### Dựng level
- Level nào tôi chưa tự nhìn bằng mắt và chưa chơi thật?
- Có level nào hai mechanic mới cùng lúc, hoặc mechanic chạm trần ở level giới thiệu?
- Có đổi hình bàn, số order, khung bàn mà chưa hỏi không?
- Số đo cuối là của bản đã ghi trên đĩa chưa (không phải bản trước khi gắn mechanic)?
- Lead mở tờ tổng hợp ảnh có thấy bàn nào "đơn giản quá" hoặc "đặc" không?

## Lỗi hay gặp

- Game họ drop (nhóm món): rà nhóm món, gắn rắn vào Wildlife, xe đẩy vào On wheels, hộp cứu thương vào Emergency, Lead chê "không hợp lý" -> hiểu nhóm theo tên tiếng Anh vừa rút gọn và theo bối cảnh dùng -> nghĩa nhóm là khái niệm gốc (tên Việt, trước khi rút gọn). Chỉ gắn món điển hình của khái niệm đó, đồ dùng ở đâu không làm nó thuộc nhóm đó.

- Game sort: điểm cấu trúc 62-70 mà bấm bừa thắng 100% -> chấm bàn thay vì hành vi -> thang là "ai thua", luôn kèm Wr.
- Game sort: minRing 6-8 bằng tìm nhanh, vét cạn chỉ cần 2-4 -> báo cận trên như số thật -> vét cạn trước khi báo. Nói thẳng khi số cũ bị thổi phồng.
- Game path: optimizer muốn buffer .20 và length .40 -> khớp nhãn rẻ nhất -> trọng số theo ý đồ, chỉ dò ngưỡng.
- Game họ drop: dial không đổi điểm (maxAnts ghim 24, wantNests ngược chiều) -> giả định chưa đo -> quét dải đòn bẩy trước khi xây UI.
- Game tile chữ nhiều tầng: đo úp bằng bot planner thuần cho Δ = 0 -> bot không giống người -> hồ sơ lai.
- game-tycoon-a: sim 4 năm, nửa sau vỡ. Đạt 4/4 mốc tiền mà vòng 2-3 phút. Nhiều vòng dời mốc -> sim phủ cả run, đo trải nghiệm, điều kiện dừng trong brief.
- Bee: bot Giỏi đoán màu Ẩn sai nên thua hơn người mới. Bot thấy 6 lớp -> sửa tầm nhìn, kiểm đơn điệu, chừa 1 ô chờ dư.
- Cache calibration trả thang cũ sau khi đổi core -> không bump version -> mọi đổi thuật toán kèm bump.
- Game tile chữ nhiều tầng: nắn quân lệch nửa ô, ghi đè 37 level -> xác nhận trước khi sửa hình học. Backup.
- Game tile chữ nhiều tầng: máy chấm đạt 4 lần, soi mắt đều lỗi (bàn 8 cao, băng 12 ở level dạy, Link dài, trùng từ, ảnh TRUMP) -> cổng soi mắt + chơi thật.
- Game tile chữ nhiều tầng: bộ L16-50 dạt góc vì tọa độ thô -> căn giữa lưới.
- Game sort: 10 màn cùng cỡ bàn, 5 màn là 2 bàn trùng -> ràng buộc đa dạng, cấm trùng.
- Bee: 17/50 level cần sửa (5/5 ô chờ, chìa quá sâu, Ẩn trước khi mở khóa cơ chế) -> chừa 1 ô dư. Khóa ở hàng thấy được. Mechanic sau level mở khóa.
- Game tile chữ nhiều tầng: level trộn 2-3 chủ đề rải rác, từ cơ thể khó nhận -> một chủ đề chính, danh sách cấm.
- Game tile chữ nhiều tầng: test Save làm dịch tọa độ 4 level thật. Autoplay ghi 3 sao vào tiến độ -> level nháp. Chặn ghi tiến độ khi autoplay.
- Game tile chữ nhiều tầng: đặt 3 order để hạ áp lực -> luật bất biến không phải núm.
- Game chữ rơi: viết lại data L5, L9, L10, L12 rồi Lead nói lỗi do build -> không hỏi lỗi ở build hay data trước khi sửa -> level "lỗi" trên sản phẩm có build: kiểm build hoặc hỏi Lead trước, giữ data và ghi chú cho Dev tới khi Lead xác nhận.
- Game chữ rơi: thêm mechanic giảm rối khiến 95% quân L36, L39, L45 mang mechanic -> không có trần mật độ -> luôn kiểm trần mật độ (ví dụ game chữ rơi: chặn <= 0,5, tổng <= 0,8) khi thêm mechanic vào bộ level.
