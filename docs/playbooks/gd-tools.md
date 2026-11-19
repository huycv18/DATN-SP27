# Playbook - Tools & Prototype Engineer

Gộp từ playbook `level-tool-engineer` và `prototyper` (20/10/2026). Phần chung trước, phần riêng theo loại việc sau.

## Checklist trước khi bắt đầu

### Tool dựng level
- [ ] Đọc `docs/knowledge/30-tool-dung-level.md` và skill `level-forge` (`.claude/skills/level-forge/SKILL.md`, `references/rules.md`).
- [ ] Mở editor chuẩn của phòng nếu project có (đường dẫn ghi trong `projects/<slug>/README.md`), không thì dựng theo `level-forge`.
- [ ] Có file 5 chỗ từ gd-systems chưa (`projects/<slug>/gdd/5-cho-tool.md`)? Chưa có thì báo GDM, không tự đoán luật.
- [ ] Có template JSON của build và level mẫu đã ship chưa? Chưa có thì xin trước khi viết schema.
- [ ] Đọc DECISIONS của project: bố cục, skin, tính năng Lead đã bác (không đề xuất lại).

### Prototype nhanh
- [ ] Đọc `docs/knowledge/40-prototype-nhanh.md` và skill `prototype-game-nhanh` nếu có.
- [ ] Đọc luật lõi và bản đồ mechanic của gd-systems (`projects/<slug>/gdd/luat-loi.md`). Chưa có thì Phase 1 tự viết, nhưng báo GDM để gd-systems review.
- [ ] Kiểm môi trường: Node, Playwright + Chromium đã cài (phiên bản khớp), cổng rảnh (Lead hay dùng 5173, 8080, 8765), repo có git không.
- [ ] Đọc DECISIONS: điều Lead đã bác (tạo hình, bố cục), nhịp làm việc (vội thì bỏ QA dài).

## Phương pháp

### Tool dựng level
- **Bước 0 trước khi hứa**: 4 câu khả thi. Vét cạn dưới vài nghìn node.
- **Thứ tự dẫn xuất**: LUẬT trước, kiểm bằng level có sẵn của game. Rồi SCHEMA và BẤT BIẾN. Rồi DỰNG (phá một lời giải). TRỤC KHÓ sau cùng cùng gd-level.
- **Luật một bản** trong `sim/`. Tool import thẳng engine khi được. Buộc có bản sao thì `parity` + phát lại lời giải trên engine thật.
- **Template build là nguồn sự thật**, round-trip trùng byte thành test. Tự nhận file cũ và báo đã đổi gì. Ánh xạ trước phép kiểm id.
- **Bốn tầng kiểm trong `npm run build`**: unit, verify-shipped, verify-generator, verify-playtest. Không gộp khi đỏ.
- **Tham số trực tiếp**, đặt gì ra đúng nấy. Panel sinh đi theo level đang mở. Validate chỉ cảnh báo với sửa tay.
- **Việc rẻ chạy ngay, việc đắt sau nút bấm**. Cache theo chữ ký đầy đủ, bump version khi đổi core. Worker pool cho sinh đắt.
- **Editor theo chuẩn Lead**: một file HTML, tiếng Việt, shell Photoshop, đơn giản kiểu iPhone, canvas giống màn game, cọ + phím tắt, trái tô phải xóa, zoom quanh con trỏ, undo theo nét, biểu đồ cung cầu mỗi cột một màu, gõ số trực tiếp, bôi chọn nhiều ô, lưới backup localStorage.
- **Khung chơi thử cố định**, không nhồi cả bàn, giải tiếp từ thế cờ hiện tại, tách hai thông điệp kẹt thật / thắng được nhưng cần N.
- **Mọi đường sinh qua một hàm chung** để luật đẹp không bị lách. Giữ source generator. Test sweep 0-100 bám đích.
- **Designer giữ quyền** với tham số nhìn thấy. Tool nói ra khi tự thu hẹp yêu cầu. Không tự thêm cơ chế.
- **Unity**: canvas editor render prefab thật qua camera riêng. Tái hiện đúng chuỗi dựng runtime. Tra enum theo tên. Quét bộ level sau merge của đồng nghiệp. `handEdited`. Kiểm trạng thái play mode trước khi save scene.
- **Migrate dữ liệu**: backup có timestamp, dry-run, báo số ô đổi, undo cấp cả bộ, hỏi khi ghi đè cùng id, cảnh báo bản nhớ khác bản đĩa.
- Ghi file bằng tool Write. Script Playwright trong repo. Cổng riêng cho preview. Kiểm bằng DOM và số đo, không tin screenshot khi pane ẩn.

### Prototype nhanh
- Thứ tự: Phase 1 ngắn -> Phase 2 + 3 (engine, solver, 15 level có số) -> Phase 4 giao bản chơi được sớm -> Phase 6 QA -> Phase 5 polish -> Phase 6 lại -> giao cuối.
- **Engine headless trước UI**: bot chơi hết các màn trong Node trước khi mở trình duyệt.
- **Sinh ngược từ lời giải**. Pool ứng viên. Chọn đúng khoảng. Bake offline. Giữ source generator và metrics.
- **Một vòng rAF + tween manager + input state machine**. View chỉ đọc events. `window.__game` cho bot QA.
- **Build một IIFE**: tên top-level duy nhất, side effect chỉ ở `main.js`. Sau build chạy page-load check. Test qua http, không file://.
- **Cổng QA đầy đủ** khi đổi engine hoặc level. **Bỏ qua QA dài khi Lead vội và chỉ sửa visual/feel**, nói rõ đã bỏ qua.
- **Game feel theo checklist Lead chấp nhận** (knowledge 40 mục 5): preview nhấn giữ, combo, cảnh báo sớm, chuyển động có logic đời thực, khách không "pop", thua có cứu 5 s.
- **Tutorial có kịch bản** ở L1-2, gate input, sai không trừ mạng.
- **Nhiều phiên cùng repo**: một phiên sở hữu engine và cân bằng. Rebuild từ source hiện tại và chạy test trước khi giao. Không sửa tay file bake.
- **Không vẽ lại icon/mascot/logo game khác**. Không đổi tạo hình đã quen mà không có ảnh so sánh.
- Báo cáo cuối: file/link, bản đồ mechanic, bảng độ khó 15 dòng, kết quả QA, đánh đổi còn lại. Nhắc Lead chơi L13-15.
- Tool sinh nhiều đầu ra từ một nguồn (TSV, HTML, JSON, CSV) phải có phép kiểm các đầu ra khớp nhau trong selftest (TSV lệch HTML từng lọt 4 lần chấm).
- Sửa file sau khi QA đã ĐẠT, kể cả chỉ đổi định dạng: báo QA kèm số ô đổi nội dung (phải là 0). Có đổi nội dung thì gửi chấm lại. Thao tác dán hoặc công cụ mới thử trên bản Sheet NHÁP trước.

### Sheet và công cụ dùng chung (GD-019a, 20/10/2026)
- Dán tab: `/gdd-sheet-sync`. `goi.mjs --che-do moi` tự so TSV với HTML và DỪNG khi lệch. Sau mỗi lần dán chạy `doi-chieu`. Selftest `node .claude/skills/gdd-sheet-sync/scripts/selftest.mjs`.
- Soát từ vựng cả project: `node .claude/skills/gdd-v1/scripts/soat.mjs --project <slug>` (mọi md, tsv kể cả `tham-chieu/`, bỏ `qa/` trừ khi `--ca-qa`, cảnh báo ví dụ gắn data trong `gdd/`). Từ đa nghĩa ghi trong tu-vung dạng `khay [cùng câu: đầy/thua]`. Selftest `soat-selftest.mjs`.
- Soi nhiều ảnh (nếu repo có `tools/to-ghep-anh.py`): `python tools/to-ghep-anh.py <thư mục> --ra <ra>`: giữ tỉ lệ, cảnh báo tỉ lệ ngoài 0,5-2, xuất 6 ảnh cực trị cỡ thật. Chấm ảnh cảnh báo ở `cuc-tri/`, không chấm trên tờ ghép.

## Câu hỏi phải tự trả lời trước khi báo xong

### Tool dựng level
- Level đã ship nạp vào tool có ra đúng phán quyết người chơi đã biết không?
- Xuất ra rồi nạp lại có trùng từng byte với template build không?
- Có núm nào trên UI chưa nối với gì hoặc biên độ 0 không?
- Lead gõ số 60 có ra 60 không? Sửa tay có bị chặn vô lý không?
- Có chỗ nào tool tự quyết thay designer mà chưa nói ra không?
- Bốn tầng kiểm xanh trên checkout sạch chưa?

### Prototype nhanh
- 15/15 màn có `solvable` và replay thắng trên engine thật không?
- Bot random có thắng nổi màn 12-15 không (phải 0%)? Màn 1-2 có thể thua không (không được)?
- Nhãn UI có đọc từ config không? Có còn code debug không?
- Lead mở file trên điện thoại dọc 390 px có chơi được không tràn ngang không?
- Đã nói rõ test nào bỏ qua chưa?

## Lỗi hay gặp

- Game path: định dạng JSON đổi qua lại vì hiểu lời nói -> xin template, khóa trùng byte.
- Game họ drop: cache thiếu khóa `mech`, `capacity`. Đổi core không bump `CAL_NS` -> thang cũ âm thầm -> mọi override vào chữ ký, bump khi đổi core.
- Game họ drop: CSV `capacity` chỉ vào file xuất, không vào bộ sinh -> kiểm end-to-end CSV -> override -> generator.
- Game sort: solver tự chạy sau mỗi sửa, lag 2,8 s -> nút Quét.
- Game sort: hai dev server 5173/5174 "mất 5 level" -> lưới backup, nhắc cổng đúng.
- Game path: dựng skin theo ảnh art, bị bác "quá xấu" -> hỏi mức giống trước khi thay cả sân.
- Game path: tự sinh Link, tự bấm Update 37 level khi demo -> vượt phạm vi -> hỏi trước quyết định thiết kế. Đã làm thì tắt mặc định và thừa nhận.
- Game họ drop: xuất pixel lớn kèm ô bị phủ, game thiếu đạn -> mô phỏng đúng cách engine đọc file.
- Bee: merge đồng nghiệp đổi enum màu và API làm tool hỏng -> tra theo tên, drawer hiện mọi trường, quét 50 level sau merge.
- game xoay pizza A: generator chỉ còn bundle minify -> không cân bằng lại được -> source generator luôn trong repo.
- game xoay pizza A: không solver, chỉ greedy. Chỉ còn bundle minify -> không chứng minh được, không cân bằng lại được -> solver và source bắt buộc.
- Game phục vụ Order: trùng tên top-level (`_v`, `INK`) chỉ lộ thành pageerror -> test bundle + page-load check.
- Game phục vụ Order: luật thua đổi 3 lần do 4 phiên song song -> một chủ sở hữu.
- Game phục vụ Order: preview của Claude chiếm cổng 8765 của Lead -> cổng riêng.
- Game phục vụ Order: khách "pop", món bay vào đầu, icon 96 px -> Lead đánh giá bằng mắt từng chi tiết. Soi ảnh chuỗi khung hình trước khi giao.
- Game sort: khóa input trong animation làm 34% thời gian không chạm được -> không khóa, xếp hàng input.
- Game sort lục giác: heredoc nuốt `\n`, cp1252 -> Write tool, script trong scratchpad.
- Bake trên main thread lúc vào màn giật 0,7-1,5 s -> bake offline.
- Game chữ rơi: TSV ghi "Quy tắc chung:" còn HTML và Sheet ghi "Quy tắc chung", lọt 4 lần ĐẠT -> không kiểm TSV với HTML dù hai nhánh code -> phép so đầu ra trong selftest và `goi.mjs`.
