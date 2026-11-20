# Đưa GDD lên Google Sheet qua connector

Dùng cho bản V0.5 (2 tab) và V1 sheet (6 tab), sau khi TSV đã soát 0 lỗi. Một script cho cả ba việc: `.claude/skills/gdd-v1/scripts/sheet-yeu-cau.py` (kiểu Sheet của Lead, `.claude/skills/gdd-v05/references/khuon-va-bai-hoc.md` mục 8).

Cần connector Google Drive và Google Sheets đang bật. Thiếu thì nói rõ connector nào cần bật, dừng bước này, đưa người dùng file TSV, HTML và `README.md` để dán tay. Qua browser thì skill `gdd-sheet-sync` (nếu có cài) làm thay. Trước lần sửa Sheet đầu tiên trong phiên, đọc skill `google-workspace` nếu có.

## 1. Có link Sheet của Lead: chỉ dán chữ

Lead thường gửi bản sao Sheet của game trước, đã có màu, font, ô gộp tay. Không dán HTML đè.

1. `get_spreadsheet` với `fields: ["sheets.properties.title", "sheets.properties.sheetId"]` lấy tên tab. Tab không dùng ở V0.5 thì ẩn (`updateSheetProperties` với `hidden: true`), không xóa.
2. `python -I .claude/skills/gdd-v1/scripts/sheet-yeu-cau.py projects/<slug>/gdd/sheet --chu --ra projects/<slug>/gdd/sheet/_chu.json`: ra `{"Gameplay": [[...]], "Main Task": [[...]]}`. `\n` trong TSV đã thành xuống dòng thật, ô mở đầu bằng `-` có `'` để Sheet không đọc thành công thức.
3. `update_values` từng tab từ `'<tên tab của Lead>'!A1`, `valueInputOption: USER_ENTERED`.
4. Lead đã sửa tay trước đó thì đối chiếu (mục 3) trước khi dán.

## 2. Chưa có link: tự tạo, đặt tên, dựng tab có màu (không hỏi)

Tên file: `[GDD] - <Tên game>` (theo Sheet Lead đang dùng, ví dụ `[GDD] - game sinh tồn A`). `<Tên game>` viết như người dùng gọi game (chữ hoa đầu từ, giữ dấu), không dùng slug. Tìm trên Drive trước (`title = '[GDD] - <Tên game>'`, loại spreadsheet). Đã có file trùng tên: hỏi người dùng một câu, nghiêng về dán vào file đó (mục 1). Chỉ tạo file mới khi người dùng chọn, tên thêm hậu tố bản: `[GDD] - <Tên game> - V0.5`.

1. HTML có màu cho từng tab: `node .claude/skills/gdd-v1/scripts/sheet-html.mjs projects/<slug>/gdd/sheet`.
2. Lô lệnh: `python -I .claude/skills/gdd-v1/scripts/sheet-yeu-cau.py projects/<slug>/gdd/sheet --ra projects/<slug>/gdd/sheet/_yeu-cau.json`. Script đặt tên tab theo khuôn (Gameplay, Main Task, Level Curve, Level Data, Tutorials, Asset & Màn hình), dán HTML (màu nhóm, chữ đậm, ô gộp, xuống dòng trong ô), rồi định dạng kiểu Lead: header đỏ chữ trắng cỡ 12 cao 36px cố định, Gameplay gộp cột Ảnh từ A2 tới hàng cuối (rộng 265px, hàng cao 95px), cột Mục hồng đào, hàng nhóm Main Task hồng đào, độ rộng cột, viền mảnh, xuống dòng tự động, căn giữa dọc. Tab đầu đổi tên `Sheet1` (sheetId 0), các tab sau sheetId 1001, 1002...
3. Drive `create_file` với `title` ở trên, `contentMimeType: application/vnd.google-apps.spreadsheet`. Rồi Sheets `update_spreadsheet` với `spreadsheetId` vừa tạo và `requests` là nguyên mảng trong `_yeu-cau.json` (một lần gọi; lỗi một lệnh thì cả lô không áp dụng, sửa rồi gửi lại cả lô).

- Ảnh: cột Ảnh của tab Gameplay đã gộp sẵn. Không tự chèn ảnh, Lead chèn tay trong 10 giây (Chèn > Hình ảnh > Hình ảnh trong ô, chọn `gdd/anh/gameplay.png`). Bốn cách tự chèn đã thử đều hỏng (khuôn V0.5 mục 7), đừng thử lại.
- Dán lại sau khi sửa TSV (tab đã có): đối chiếu (mục 3), rồi chạy lại bước 1, bước 2 với `--da-co-tab`, `update_spreadsheet` vào đúng file cũ.

## 3. Đối chiếu với bản trên Sheet (trước khi sinh lại hay dán lại)

Lead tự sửa tay trên Sheet. Sinh lại mà không đối chiếu là đè mất chữ Lead.

1. `get_values` từng tab (range `'<tên tab>'!A1:Z`), lưu nguyên mảng `values` thành `projects/<slug>/gdd/sheet/_tren-sheet/<NN-tab>.json` (cùng tên file TSV, ví dụ `02-main-task.json`).
2. `python -I .claude/skills/gdd-v1/scripts/sheet-yeu-cau.py projects/<slug>/gdd/sheet --doi`: đổi JSON thành CSV rồi chạy `quet.mjs --doi`, in từng ô lệch.
3. Ô lệch là chữ Lead sửa tay: kéo về cấu hình (V0.5: `ghi_chu` theo tên hạng mục, `gameplay`, `dong_*`) hoặc TSV trước, rồi mới sinh lại và dán.

## 4. Kiểm và ghi lại

- `get_spreadsheet` với `fields: ["properties.title", "sheets.properties.title", "sheets.properties.gridProperties.frozenRowCount"]`: đúng tên file, đủ tab, đúng thứ tự.
- `get_values` từng tab: số hàng khớp TSV, ô nhiều dòng còn xuống dòng, không có `\n` dạng chữ.
- Ghi link vào `projects/<slug>/CLAUDE.md` (bảng nguồn) và một dòng DECISIONS: ngày, tên file, link, bản.
- Báo người dùng: tên file là link, số tab, số hàng mỗi tab. File nằm ở Drive gốc của người dùng; muốn chuyển thư mục thì người dùng tự kéo hoặc đưa link thư mục.
