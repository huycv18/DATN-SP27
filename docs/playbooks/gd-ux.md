# Playbook - UX & Narrative Designer

Gộp từ playbook `ux-onboarding-designer` và `narrative-designer` (20/10/2026). Phần chung trước, phần riêng theo loại việc sau.

## Checklist trước khi bắt đầu

### UX và onboarding
- [ ] Đọc `docs/knowledge/70-ux-ftue.md`.
- [ ] Đọc luật lõi, bản đồ mechanic, curve (mốc giới thiệu mechanic) của project.
- [ ] Số đo cảnh (canvas, khung, cỡ quân) đã được chốt chưa? Chưa thì xin tech/tool chốt trước khi viết.
- [ ] Xem bản chạy thật (dev server qua http) nếu có. Không viết spec chỉ từ chữ.

### Text, tên, từ vựng
- [ ] Đọc spec màn hình và tab Tutorials của project (nguồn giới hạn ký tự và số bước).
- [ ] Đọc luật lõi để text không nói sai luật (ví dụ "khay đầy là thua" đúng với luật thua).
- [ ] Có tham chiếu phong cách chữ Lead gửi không (ví dụ ảnh pill combo của game tham chiếu)? Chưa có thì hỏi qua GDM trước khi dựng kiểu chữ.
- [ ] Danh sách từ cấm và cặp dễ nhầm của game chữ (nếu có).

## Phương pháp
- V0.5: tab dán mỗi ô một dòng ngắn, Quy tắc chung tối đa 3 dòng. `ux/*.md` tối đa 40 dòng. Không dải khen, không tiêu chí nghiệm thu dài, không bảng toast prototype, trừ khi brief đòi.
- Tutorial mechanic chỉ viết khi file luật mechanic của project đã có. Chưa có thì gửi gd-systems đúng một câu hỏi (điều kiện kích hoạt, chạm vật thể có phản hồi không, có ca kẹt không) rồi chờ. Không viết điều kiện từ file trình Lead. Mỗi bước cảnh báo phải có tình huống tương ứng trong bảng ca biên của luật.

### UX và onboarding
- Onboarding theo chuẩn của studio: lớp tối 70%, chỉ sáng thứ cần bấm, bàn tay, chặn ngoài luồng, một text box EN suốt luồng khi dạy một ý, tắt sau hành động đầu tiên có ý nghĩa, mỗi bước một lần, cảnh báo khác giới thiệu.
- Tutorial từng mechanic theo cấu trúc tab Tutorials. Logic mechanic nằm trong Main Task phần DEV, tutorial chỉ nói cách dạy. Không làm tutorial cho tính năng Lead đã bỏ.
- FTUE (09/11/2026): text box khoảng 8 chữ trở xuống làm tham chiếu, booster dạy khi lần đầu cần và tặng 1 lần miễn phí, không ads trong onboarding, màn thua ghi cụ thể còn thiếu bao nhiêu. Gate cứng hay cho skip là trade-off Lead quyết. Nguồn: `docs/knowledge/70-ux-ftue.md` mục 1 và 6.
- Mỗi màn: 3 câu, một hành động chính, đủ 5 trạng thái, hệ quả rủi ro bằng số, đoạn chờ > 10 s có quyết định.
- Tầm nhìn người chơi và trình bày: hàng thấy được, ô ẩn che gì, khóa-chìa cùng màu, 44 px, khung cố định, không nhồi cả bàn, cảnh báo ở mép không phủ kín, reduced motion.
- Game feel checklist cho prototype. Chuyển động có logic đời thực. Không "pop".
- Strings có cột giới hạn ký tự lấy từ spec màn hình.
- Kết thúc mỗi spec bằng 3-4 câu hỏi quyết định rõ ràng kèm phương án cho GDM.

### Text, tên, từ vựng
- Mỗi string một key, một dòng, cột giới hạn ký tự. Text box tối đa 2 dòng. Tiếng Anh ngắn. Không chú thích thừa.
- Một text box xuyên suốt khi tutorial chỉ dạy một ý. Cảnh báo viết như cảnh báo, không như giới thiệu. Viết "kèm nút", không "+ nút".
- Dải khen: mốc đầu theo combo trần của level nhỏ nhất (6 chữ thì mốc 3), leo đều, kiểu chữ theo tham chiếu, kiểm tương phản trên nền thật (bậc thấp từng chìm vào nền nỉ xanh).
- Tên chế và parody: hài nhưng không dùng tên hoặc logo thật. Đưa 10-12 ứng viên rồi rút theo tiêu chí.
- Từ vựng game chữ: gom theo chủ đề, chấm độ nhận biết ảnh, tách cặp dễ nhầm, xoay vòng từ ít dùng.
- Strings đa ngôn ngữ: khóa không đổi, giá trị đổi. Ghi key nào đã dùng ở đâu.
- Ô Sheet viết cho người đọc (Dev, Art): ghi chú tối đa một câu. Đường dẫn file, [GIẢ ĐỊNH] dài, so sánh nguồn để ở `ux/*.md`.
- Mọi màu và tỉ lệ tương phản trong brief chép từ output script, không gõ tay. Vật thể phụ trên bàn: hỏi trước "có nên là quân tile không", silhouette khác quân ở cỡ hiển thị thật.
- Trước khi viết hoặc sửa text tutorial: grep mục luật liên quan, ghi số mục vào ghi chú, chạy soát từ vựng project trước khi báo.

## Câu hỏi phải tự trả lời trước khi báo xong

### UX và onboarding
- Người mới ở quyết định rủi ro có thấy hệ quả không?
- Có màn nào thiếu một trong 5 trạng thái không?
- Tutorial có nhắc tính năng chưa có hoặc đã bỏ không?
- Spec có đi ngược luật gốc đã chốt không (mobile-first "≤ 3 chạm" so với luật 8 chạm)?
- Engineer có dựng được mà không tự chế không?

### Text, tên, từ vựng
- String nào vượt giới hạn ký tự?
- Text nào nói sai hoặc nói quá luật?
- Có tên nào chạm thương hiệu thật không?
- Kiểu chữ có dựa trên tham chiếu Lead gửi hay tôi đoán?

## Lỗi hay gặp

- game-tycoon-a: UX chỉ wireframe ASCII, không ai giữ lớp nhìn thấy -> Founder chê "UI/UX chưa có gì" -> lớp hình tối thiểu đi cùng cơ chế từ lần chơi thử đầu.
- game-tycoon-a: số đo cảnh vênh giữa UX, art, tech ba lượt -> tech chốt số đo trước.
- game-tycoon-a: kiểm "đủ element" thay vì "người mới hiểu hệ quả" -> hộp 30 bug không báo mức phạt.
- Game tile chữ nhiều tầng: toast khay bật ngay quân đầu tiên trong khi spec nói 3 quân lần đầu -> spec phải nêu điều kiện kích hoạt chính xác và báo khác biệt với code hiện tại.
- Game họ drop: ô ẩn ở hàng đầu vô nghĩa. Khóa đặt sâu người chơi không thấy -> luật vị trí cho ẩn và khóa.
- Game tile chữ nhiều tầng: đoán phong cách text khen kiểu neon, Lead gửi ảnh pill gốc phải làm lại -> lấy nguồn trước khi dựng.
- Game tile chữ nhiều tầng: màu bậc thấp trùng nền nỉ -> kiểm tương phản trên nền thật.
- game-tycoon-a: text tràn nút vì strings không có giới hạn ký tự -> cột giới hạn lấy từ UX spec.
- Game tile chữ nhiều tầng: text box đổi theo từng bước làm luồng rối -> một text box xuyên suốt khi chỉ dạy một ý.
- Game chữ rơi: Lead "cần sheet đó trông clean" vì tab Tutorials có đường dẫn file, [GIẢ ĐỊNH] dài, so sánh với game khác -> viết cho phòng thay vì cho Dev -> bản dán Sheet tách khỏi bản làm việc: ô ngắn, lý giải ở `ux/tutorials.md`.
- Game chữ rơi: đề xuất quân úp, quân vàng (vẫn là quân tile) bị Lead đổi thành Đá, Coin khác hình -> giảm rối bằng đổi mặt quân vẫn giữ số vật thể giống quân -> giảm rối mắt phải bớt vật thể giống quân. Vật thể đặc biệt khác hình hẳn quân.
