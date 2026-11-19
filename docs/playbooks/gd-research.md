# Playbook - Research & Data Analyst

Gộp từ playbook `reference-analyst` và `product-analyst` (20/10/2026). Phần chung trước, phần riêng theo loại việc sau.

## Checklist trước khi bắt đầu

### Nghiên cứu tham chiếu
- [ ] Đọc `docs/knowledge/80-phan-tich-game-tham-chieu.md`.
- [ ] Hỏi GDM mục đích Lead nêu: chuẩn thẩm mỹ, bám sát cơ chế, lấy cấu trúc doc, benchmark số, hay việt hóa/mod.
- [ ] Kiểm nguồn hợp pháp: store, video, wiki, bản game Lead sở hữu hợp lệ. Bản crack hoặc "lấy asset trực tiếp" thì dừng và báo GDM kèm phương án hợp lệ.
- [ ] Mở `docs/process/templates/ho-so-game-tham-chieu.md`.

### Dữ liệu và đo lường
- [ ] Đọc mô hình độ khó và bảng bot của project. Biết hồ sơ bot nào tương ứng người chơi nào.
- [ ] Biết nguồn dữ liệu: file bot (CSV/JSON), ghi chú playtest, bake-report, level_evaluation. Chưa có dữ liệu người thật thì nói rõ.
- [ ] Biết công cụ analytics của project nếu có (event tracking là hạng mục DEV trong kế hoạch update).

## Phương pháp

### Nghiên cứu tham chiếu
- Hồ sơ game đủ mục. Mỗi khẳng định có nguồn và nhãn độ tin cậy. Không có nguồn thì "Không có dữ liệu".
- Thứ bậc nguồn: dữ liệu game đã dump > wiki > video có timestamp > ước. Số nguồn không "làm đẹp".
- Bóc dữ liệu: tìm bảng dữ liệu hoặc ngôn ngữ trước. Xác định code nào thật sự chạy. Thứ tự load. Phân loại trước khi báo phần trăm (đếm thô luôn phóng đại). Kiểm một mẫu thật trước khi tin bộ lọc. Giữ token định dạng. Backup và script khôi phục.
- Chuẩn thẩm mỹ: mô tả đo được (cụm, tầng, lưới có rãnh, đối xứng, kệ đáy). Render demo đúng cỡ thật.
- Bảng cấu trúc tái dùng chỉ lấy cấu trúc. Bảng đối chiếu theo hệ thống với mức trùng và rủi ro. Kết luận học gì, làm khác gì.
- Chạy song song nhiều góc (gameplay, art, audio) khi phân tích lớn. Gộp bảng. Đề xuất đổi khỏi tham chiếu thì để Lead quyết.
- Tách "thứ gặp ở mọi ván" khỏi "danh từ riêng, riêng từng nước".

### Dữ liệu và đo lường
- Spec event: bảng tên, khi nào bắn, tham số và kiểu, ví dụ JSON. Mỗi quyết định thiết kế cần trả lời bằng dữ liệu phải có event tương ứng (thắng lần đầu theo level, bỏ cuộc, booster, ads tại điểm sắp thua, bước tutorial).
- KPI theo level có ngưỡng theo nhãn và cách đọc: Dễ thắng lần đầu ≥ 90%, đỉnh thì số lần thử tăng rõ, thở thì giảm. Lệch nhãn là tín hiệu cho gd-level.
- KPI độ khó theo level ngoài win rate (09/11/2026): lượt thử trung bình, trung vị, P90, tỉ lệ người cần từ 10 lượt trở lên (cảnh báo, ngưỡng chốt theo dữ liệu game), % thua khi còn 1-2 mục tiêu. Event thua kèm `attempt_no` và hành động ngay sau (retry, ads, booster, quit). FTUE: event từng bước tutorial, completion level 1-10. Rơi ở level 1-2 thì so theo ad network trước. Đổi curve thì tiêu chí thành công gồm D1, D7, churn theo level, không chỉ conversion. Nguồn: `docs/knowledge/20-do-kho-va-can-bang.md` mục 9, `70-ux-ftue.md` mục 6.
- Số chép từ nguồn ngoài gắn nhãn: Có dữ liệu / Một nguồn / Không có dữ liệu. Ngưỡng D1 hay thắng lần đầu trên blog phần lớn là ước của vendor.
- Bot so với người: bảng hai cột. Lệch lớn thì truy nguyên trước khi kết luận thang sai (bot sai tầm nhìn, người bỏ cuộc, UI gây hiểu nhầm, luật thua áp sai thời điểm).
- Đếm thô phải phân loại trước khi báo phần trăm. Cỡ mẫu và sai số kèm theo. Không đổi kết luận vì nhiễu một lần chụp.
- Tiêu chí thành công đo được cho mỗi thay đổi: chỉ số, ngưỡng, cỡ mẫu, thời gian, điều kiện dừng. Viết trước khi thay đổi lên.
- Script phân tích đặt trong repo project (có node_modules), in bảng. Biểu đồ chỉ khi giúp quyết định.
- Đo thị giác (tương phản, cỡ, độ chi tiết, độ rối): hỏi nền, cỡ hiển thị và khung thật trước khi đo. Chưa có thì đo ít nhất hai nền và ghi nền nào đổi kết luận (không hỏi trước từng làm đo lại 3 vòng).
- Tờ ghép ảnh giữ tỉ lệ (`tools/to-ghep-anh.py` nếu repo có), xem riêng ảnh cực trị ở cỡ thật. Đọc `projects/<slug>/gdd/tu-vung.md` trước khi viết file tham chiếu và chạy soát từ vựng trước khi báo.

## Câu hỏi phải tự trả lời trước khi báo xong

### Nghiên cứu tham chiếu
- Mọi số trong hồ sơ có nguồn chưa?
- Có chỗ nào mô tả thay vì đo được không (đặc biệt chuẩn thẩm mỹ)?
- Bảng đối chiếu có nói khác biệt nằm ở cơ chế hay chỉ ở skin?
- Có vi phạm ranh giới IP nào trong đề xuất không?

### Dữ liệu và đo lường
- Kết luận một câu đầu tiên là gì, dựa trên số nào, cỡ mẫu bao nhiêu?
- Số nào là bot, số nào là người thật?
- Có tương quan nào tôi đang gọi là nguyên nhân không?
- Thiếu event nào để trả lời câu hỏi của Lead lần sau?

## Lỗi hay gặp

- HoI4: "81,5% đã dịch" thực tế còn 4 câu -> phân loại trước khi báo.
- TCS: bộ lọc bỏ sót 496 chỗ vì khóa rỗng -> kiểm mẫu thật.
- Game tham chiếu: Lead muốn đục bản crack -> từ chối 4 lần, chuyển nguồn công khai, Lead chấp nhận -> đưa phương án hợp lệ ngay trong câu từ chối.
- game-tycoon-a: phân tích wiki cỡ L dồn cho game-designer -> tách vai, xuất CSV có cột nguồn.
- Game phục vụ Order: dựng lại nhân vật theo game tham chiếu bị bác -> ảnh so sánh trước khi đổi tạo hình.
- HoI4: "81,5% đã dịch" sau phân loại chỉ còn 4 câu thật -> phân loại trước.
- game-tycoon-a: coi nhiễu một tuần chụp là cơ chế. 10 seed nhiễu 22% -> cỡ mẫu và phân vị.
- game-tycoon-a: "playtest" là script bot, không ai đo vui -> ghi rõ nguồn dữ liệu. Đề xuất lịch người thật.
- Game sort: điểm cấu trúc 70 mà bấm bừa thắng 100% -> đối chiếu điểm với hành vi, báo sớm.
- Game chữ rơi: chấm 12 ảnh trắng là lỗi theo nền kem tự giả định, đo lại 3 vòng khi nền đổi -> không hỏi nền và cỡ thật -> hỏi trước hoặc đo hai nền.
