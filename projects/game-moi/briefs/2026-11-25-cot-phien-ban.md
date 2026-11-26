# Brief đợt 13: cột Phiên bản cho các tab GDD (game-moi)

Lead 2026-11-25: "Có, thêm cột" (thêm cột nhãn MVP riêng cho các tab còn ghi nhãn lẫn trong chữ). Mẫu đã làm: tab Assets (`gdd/sheet/Assets.tsv`, cột Phiên bản).

## Mục tiêu

Mỗi tab trong phần việc của bạn có thêm cột **Phiên bản** ở cuối, mỗi hàng dữ liệu một giá trị, để Lead và dev lọc được hàng nào thuộc MVP.

- Tên header đúng chữ `Phiên bản`, là cột cuối cùng của dòng header (dòng 1 của TSV). Mọi hàng dữ liệu thêm đúng một ô ở cuối.
- Giá trị chỉ được là: `MVP`, `Sau MVP`, `MVP một phần` (hàng có cả phần MVP lẫn Sau MVP, chữ trong hàng đã nói phần nào).
- Tab dạng Task / Sub Task: mọi hàng, kể cả hàng con, đều có giá trị.
- Không sửa ô nào khác. Giữ nguyên nhãn đang ghi trong chữ (`Nhãn: MVP`, `(MVP)`...), `tools/sinh-codex.mjs` đang đọc chúng.
- Hàng luật chung không gắn nội dung riêng (ví dụ luật Oxy dùng cho cả game) mà MVP có dùng thì ghi `MVP`.

## Đọc trước

- `projects/game-moi/gdd/00-khung-game.md` mục 12: bảng nội dung MVP (nguồn chuẩn khi phân vân).
- GDD hệ thống của tab trong `projects/game-moi/gdd/he-thong/`: nhãn MVP / Sau MVP ở từng mục và bảng.
- Bản nháp nhãn do máy dò: `C:/Users/huycv/AppData/Local/Temp/claude/9ad3ee176ecd1545/981c76f9-95a3-4080-b46c-1db2052092dd/scratchpad/nhan-nhap.json`, dạng `{tab: [[dòng TSV, nhãn hoặc null, nguồn], ...]}`. Nguồn `ghi rõ` là nhãn có sẵn trong chữ, tin được. `theo Task` lấy theo hàng Task cha, `đoán chương 1` và `đoán chương sau` là đoán theo tên vùng hoặc chương, phải soát. `null` là chưa có, phải tự định.
- File TSV có ô nhiều dòng trong ngoặc kép: đọc và ghi bằng parser TSV có ngoặc kép (Python `csv` với `delimiter='\t'`, ghi lại giữ nguyên quoting như file gốc, xuống dòng `\n`, UTF-8 không BOM). So `git diff` để chắc chỉ thêm cột.

## Ghi vào

Chỉ các file TSV trong phần việc của bạn ở `projects/game-moi/gdd/sheet/`. Không dán Sheet, không commit, không sửa tool dùng chung trừ khi phần việc ghi rõ.

## Tiêu chí hoàn thành

- Mỗi tab trong phần việc: số cột header tăng đúng 1, mọi hàng có giá trị hợp lệ, `git diff --word-diff` không đổi chữ nào khác.
- Chạy ở gốc repo, ghi kết quả vào báo cáo: `node projects/game-moi/tools/kiem-de-doc.mjs` (tab của bạn 0 lỗi), `node projects/game-moi/tools/validate-gdd.mjs` (0 lỗi), `node projects/game-moi/tools/selftest.mjs`, `node projects/game-moi/tools/sinh-codex.mjs --kiem` (nếu tab của bạn là nguồn Codex: ITEM LIST, Salvage, Recipe, Enemy, Customer, Player).
- Trả `## Báo cáo cho GDM`: bảng số hàng MVP / Sau MVP / MVP một phần mỗi tab, danh sách hàng phải tự định (dòng, tóm tắt, nhãn chọn, lý do một dòng), chỗ GDD hệ thống mâu thuẫn với khung mục 12 nếu có.

## Giới hạn

Không đổi phạm vi MVP. Thấy một mục mà GDD và khung mục 12 lệch nhau thì ghi vào báo cáo, chọn theo khung mục 12, không sửa GDD. Văn phong theo `docs/org/ho-so-lead.md` (không emoji, không gạch dài, không dấu chấm phẩy).

## Chia phần

| Phần | Tab |
|---|---|
| A | ITEM LIST, Salvage, Recipe, Shop, Upgrade, PROCESSING, Balance Sheet |
| B | Enemy, Customer, Zone, Player |
| C | GAME STORY, CORE LOOP, Day, Tutorials, WIREFRAME, MVP Criteria Checklist, Event Tracking. Event Tracking sinh bằng `projects/game-moi/tools/xuat-event-tracking.mjs` từ `gdd/he-thong/ky-thuat.md` mục 2.4: thêm cột trong script (lấy nhãn từ ky-thuat.md hoặc theo tính năng của sự kiện), chạy lại script, không sửa TSV tay |
