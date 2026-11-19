# Playbook - Systems & GDD Designer

Gộp từ playbook `systems-designer` và `gdd-writer` (20/10/2026). Phần chung trước, phần riêng theo loại việc sau.

## Checklist trước khi bắt đầu

### Luật và hệ thống
- [ ] Trang trình Lead chọn: chỉ bảng so sánh và một đề xuất, không ghi lựa chọn dạng nút. Chỉ viết luật mechanic khi DECISIONS có câu Lead tự viết. Câu đó trùng chữ nút gợi ý thì hỏi lại GDM trước khi làm (đã có ca mechanic bị bỏ vì viết theo chữ nút).
- [ ] Đọc `projects/<slug>/DECISIONS.md` và `projects/<slug>/README.md` (đối tượng, nền tảng, game tham chiếu).
- [ ] Đọc hồ sơ tham chiếu trong `projects/<slug>/tham-chieu/` nếu có.
- [ ] Đọc đính kèm của Lead (bảng thay đổi 2 cột "Mục | Mô tả", JSON mẫu, video, ảnh demo). Lead gửi luật bằng bảng và file, không bằng văn xuôi dài.
- [ ] Mở `docs/process/templates/gdd-he-thong.md`.

### Viết GDD và tài liệu
- [ ] Bản nào: V0.5 (2 tab Gameplay, Main Task, skill `/gdd-v05`, mẫu `.claude/skills/gdd-v05/references/khuon-va-bai-hoc.md`, mỗi ô 1-3 dòng, Logic viết theo chủ đề như bản Lead sửa: Nhặt, Điều phối, Ghép từ hàng chờ, Cơ chế hàng chờ, Chuỗi Combo, không luật đánh số, không thuật toán, không bot) hay V1 (đủ tab). Brief không nói thì hỏi GDM.
- [ ] Tab đã dán mà Lead có thể sửa tay: kéo export CSV về so với TSV, đưa ô Lead sửa vào nguồn sinh rồi mới sinh lại.
- [ ] Đọc `docs/knowledge/50-gdd-va-tai-lieu.md` (cấu trúc Sheet chuẩn, bảng màu, luật viết).
- [ ] Đọc GDD hiện có của project (sheet hoặc markdown) nguyên văn, mới nhất (Lead tự sửa song song).
- [ ] Biết từ Lead dùng cho vật thể và vùng (đọc DECISIONS mục project và GDD hiện có).
- [ ] Có doc nguồn cần chép nguyên văn (Anim, Sfx, asset list của game khác cùng studio) không? Lấy link ref.
- [ ] Xác định ai sẽ dán lên Sheet (GDM qua browser) và soạn đầu ra dạng TSV/HTML sẵn dán vào `projects/<slug>/gdd/sheet/`.

## Phương pháp

### Luật và hệ thống
- **Chốt luật ra giấy trước khi ai đó code.** Mọi lần luật đổi sau khi code đều tốn nhiều vòng: MaxCap của một game họ drop đổi 3 lần trong một tuần tới khi Lead chốt không đổi nữa, luật thua của game phục vụ Order đổi 3 lần vì 4 phiên song song, game path đổi cơ chế hai lần (hộp bóng rồi súng claim).
- **Hỏi đáp một lượt từ màn demo**: liệt kê mọi điểm mơ hồ thành danh sách đánh số (ví dụ game sort: Lead viết 6 điểm, hỏi đúng 4 chỗ mơ hồ là được đón nhận). Ghi câu trả lời thành luật khẳng định. Chỗ chưa xác nhận đánh `[GIẢ ĐỊNH]`.
- **Ví dụ bằng số là cách Lead chốt luật**: "90/80" làm rõ luật MaxCap sau hai lần hiểu sai. Khi Lead cho ví dụ, viết luật lại bằng chính ví dụ đó.
- **Dùng đúng từ của Lead**: "hàng chờ" không "khay" (game tile rơi), "bóng" không "kiến" (game họ drop có bóng), "băng chuyền" không "ring". Từ sai làm Lead nhầm.
- **Luật một bản duy nhất**. Khi đổi, liệt kê nơi phải cùng đổi: engine, solver của game, solver của tool, validator, GDD, tutorial, thang độ khó (hiệu chuẩn lại và nói "nhãn đặt cho luật cũ").
- **Bản đồ mechanic**: 1 lõi + 2-4 biến thể. Mechanic phải đánh vào nguồn khó của thể loại (game sort lục giác: Ice/Lock trang trí bị bác vì không đánh vào "mơ hồ tồn tại đủ lâu"). Mỗi biến thể dạy riêng ở một level dễ. Mechanic che thông tin làm khó qua mất thông tin, không qua hằng số phạt. Vật ẩn không di chuyển để solver không phình.
- **Ràng buộc vật lý nói sớm kèm số**: lục giác + hai mèo không kề thì số đếm tối đa 3. Khay 5 + 2 order thì L50 trần ~68 không phải 76. Số đẹp chạm bất biến "tổng bóng = tổng card" nên màu lẻ buộc có hộp lẻ.
- **Điền 5 chỗ cho tool ra giấy** (SCHEMA, LUẬT, BẤT BIẾN, TRỤC KHÓ, DỰNG) và trả lời Bước 0 trước khi gd-tools code. Chỗ nào tài liệu không trả lời được là câu phải hỏi Lead, không đoán.
- **Template của game khác chỉ lấy cấu trúc** ("cái nồi không liên quan"). Không map luật 1-1.
- **Bám tham chiếu thì kiểm toán độ trung thành ngay sau phân tích**, trước khi viết hệ thống. Lệch chỉ khi sửa điểm yếu đánh số có bằng chứng. Cải tiến là công tắc mặc định tắt.
- **Phản biện theo khung** Ưu / Nhược / Chi phí S-M-L / Thay thế rẻ hơn / Đề xuất. Luôn có "thay thế rẻ hơn" (hộp nhỏ hơn thay vì tăng card, cap 80 + hộp 24 thay vì cap 100 + hộp 48).
- Tham khảo thị trường có nguồn. Không sao chép.

### Viết GDD và tài liệu
- GDD V0.5 chỉ 2 tab Gameplay và Main Task, viết gọn theo `.claude/skills/gdd-v05/references/khuon-va-bai-hoc.md`, một lượt, khuôn đủ tab chỉ dùng từ V1.
- Sheet V1 đúng khuôn 6 tab. Không tạo tab mới ngoài danh sách khi chưa duyệt. Logic mechanic nằm ở Main Task phần DEV, không tab riêng.
- Hỏi đáp chốt luật một lượt từ demo. Ghi thành luật khẳng định. Đánh dấu rõ chỗ là suy luận chưa xác nhận.
- Kế hoạch update: xanh đã làm, đỏ cần update, người thực hiện, phụ thuộc `#n`. Chèn hàng thì sửa phụ thuộc theo.
- Chép nguyên văn nội dung tham chiếu kèm link. Template chỉ lấy cấu trúc. Nội dung riêng của game nguồn còn sót thì liệt kê để Lead quyết.
- Level Curve và Level Data: số thật từ file level bằng script. Mechanic chỉ ghi tên. Note một câu. Không ghi mục tiêu curve hay nhãn đo vào Note.
- Tutorials: quy tắc chung đầu tab, khối theo mechanic, TB đánh số liền, cảnh báo tách khỏi giới thiệu.
- Luật viết: chỉ "-", không emoji, không "giống game X", không tên biến code, không chú thích cho người mới. Soát gạch dài, gạch ngắn, emoji sau khi ghi.
- GDD markdown: mục "Hiện hành" đầu file, lịch sử cuối. Mỗi quyết định có ngày và "chủ dự án chốt dd/mm". Đổi luật thì GDD đổi cùng lượt với code (Definition of done của repo).
- Doc cho dev: đặc tả JSON có ví dụ chú giải từng dòng. FORMAT.md cạnh mã với ví dụ được test.
- Đọc lại tab trước khi ghi đè. Thấy "Chỉ nhận xét" thì báo GDM.
- Game là biến thể của game cùng studio: trước khi viết luật mechanic, đọc nguyên văn tab Main Task và Gameplay của Sheet game đó (export CSV), lưu `tham-chieu/<game>-nguyen-van.md`. Luật chép nguyên văn từng dòng, nhãn (sửa cho game này) và (bổ sung) cho chỗ khác.
- Đề xuất chưa chốt chỉ nằm ở file riêng `he-thong/<tên>.md` và trang trình Lead. Luật lõi và tab Sheet chỉ trỏ một dòng. Số đếm (bao nhiêu level, bao nhiêu quân) lấy bằng script trên file level. Ví dụ trong luật không gắn level cụ thể, hoặc ghi "theo <file> ngày ...".

## Câu hỏi phải tự trả lời trước khi báo xong

### Luật và hệ thống
- Engineer và tool engineer đọc file này có implement được mà không hỏi lại không? Thiếu input/output/sự kiện nào?
- Ca tranh cãi nào chưa có phán quyết thắng/thua?
- Luật này đổi thì những nơi nào phải đổi theo, đã liệt kê chưa?
- Trần độ khó của luật là bao nhiêu, đã nói với GDM chưa?
- Có số nào đang nằm trong văn xuôi thay vì bảng không? Có từ nào không phải từ của Lead không?

### Viết GDD và tài liệu
- Dev, art, SFX đọc Main Task có biết làm gì, phụ thuộc ai, trạng thái gì không?
- Có ô nào đang mâu thuẫn với luật lõi hoặc ảnh game (công thức số quân, số order)?
- Có chỗ nào tôi suy luận mà chưa đánh dấu?
- Còn gạch dài, emoji, "giống X", tên biến code không?
- Tab Lead đã xóa có bị tôi thêm lại không?

## Lỗi hay gặp

- Bài kiểm lần 2: GDD quân băng (ví dụ của `/gdd-v1`) gắn [GIẢ ĐỊNH] cho luật và công thức build đã cài (`mechanics.js`, `difficulty.js`, `boosters.js`), nên lệch build ở tầng băng, trần điểm, "+1 ô khay" -> viết từ trí nhớ thay vì đọc build -> trước khi gắn [GIẢ ĐỊNH] phải grep repo game. Điều build đã làm thì ghi luật kèm file:dòng.

- Bài kiểm năng lực: hỏi lại đồng hồ và băng có mũi tên của game tile rơi dù đã chốt là visual tạm -> demo cũ còn ảnh tạm -> điều DECISIONS ghi "tạm" thì không hỏi lại, chỉ ghi "Đã chốt" và xin ảnh build mới nếu nghi.
- Bài kiểm năng lực: cho rằng đọng đúng 80/80 vẫn sống -> không tra luật gốc -> ngưỡng thua tra nguyên văn (ví dụ game họ drop: chạm trần là thua, `poolDead` = đọng ≥ cap). Ghi cả câu "dưới trần mọi tap được phép".

- Game họ drop: luật thua viết theo suy đoán (đếm slot) -> không kiểm bằng level thật -> kiểm luật bằng level người chơi đã biết thắng được trước khi làm gì khác.
- Game path: tool bịa cơ chế frozen/locked và beltCapacity -> không đọc spec và fixture -> đối chiếu spec và bộ shipped trước khi thêm luật. Game không có thì không thêm.
- Game sort lục giác: đề xuất mechanic trang trí -> không phân tích nguồn khó -> phân tích dữ liệu suy luận/hành vi trước rồi mới đề xuất.
- game-tycoon-a: thiết kế hệ thống trước kiểm toán tham chiếu -> hoàn 45 điểm lệch -> kiểm toán trước.
- Game phục vụ Order: luật thua bị ba phiên viết đè -> không có chủ sở hữu luật -> một vai sở hữu luật và engine. Nhãn phụ (+n) không được mâu thuẫn luật.
- Game sort: luật mới không thấy được trên bàn chơi thử -> người chơi không biết luật đổi -> mỗi luật mới có tín hiệu nhìn thấy và mục "Yêu cầu cho UI".
- Game tile rơi: ghi "làm giống <game cùng studio>" -> Lead bắt chép nguyên văn 17 mục Anim, 13 mục Sfx.
- Game tile rơi: tạo tab Mechanic riêng -> Lead xóa. Logic vào Main Task DEV.
- Game tile rơi: "Tổng số quân = số Order x 3" sai vì Order là từ có số chữ thay đổi -> đối chiếu công thức với ảnh game.
- Game tile chữ nhiều tầng: gạch dài và emoji "trông như AI" -> luật viết.
- Game tile chữ nhiều tầng: Lead xóa mechanic Ảnh mờ, đổi STT -> không tự thêm lại. Sửa cột Phụ thuộc theo.
- Game tile chữ nhiều tầng: sheet chuyển "Chỉ nhận xét" giữa chừng -> báo, không cố vượt.
- game-tycoon-a: GDD nhật ký 1 081 dòng khó đọc hiện trạng -> mục Hiện hành.
- Game tile chữ nhiều tầng: yêu cầu "xóa từ 6 chữ" mất giữa hai phiên -> ghi CLAUDE.md và memory ngay khi chốt.
- Game chữ rơi: tab Main Task, Gameplay còn đường dẫn file repo và câu "theo logic <game>" -> viết cho phòng thay vì cho Dev -> `soat.mjs` nay báo đường dẫn repo. Câu nguồn chỉ ghi "Logic lấy nguyên văn từ <game>" ở cột Ghi chú.
- Game chữ rơi: một vật thể đổi loại 3 lần (quân vàng, quân Coin, Coin không phải quân) -> luật viết theo "quân" -> định nghĩa "vật thể không phải quân" tách riêng trong luật lõi. Luật mechanic nói rõ có tính vào tổng quân, hàng chờ, Ice, Hint hay không.
