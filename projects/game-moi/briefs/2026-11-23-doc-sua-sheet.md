# Brief chung: đọc và sửa chữ Sheet GDD (2026-11-23)

Game: game-moi (The Novent). Lead: "Đọc và sửa hết" để Sheet đọc không còn cấn. Mỗi agent nhận một nhóm tab, phần riêng nằm trong tin giao việc.

## Mục tiêu
Đọc từng ô chữ của các tab được giao như một người mới vào team đọc GDD, sửa chỗ cấn: câu dài phải đọc lại, ý nhảy, lặp từ gần nhau, một thứ gọi bằng hai tên, câu kể về chính tài liệu ("bản trước", "đợt 9", "vòng QA", "bảng dưới") nằm trong ô luật, giọng quảng cáo, chữ Anh lẫn khi đã có từ Việt chuẩn của dự án, câu phủ định thừa. Sửa xong dán lên Sheet chính và đối chiếu khớp.

## Đọc trước
- Skill `vietnamese-hmr` (gọi bằng Skill tool), làm theo dòng B (GDD) và đọc `references/tech/quy-trinh.md` của skill.
- `projects/game-moi/so-hien-hanh.md` (tên gọi và số chuẩn).
- `projects/game-moi/tools/README.md` mục Sheet GDD (quy ước TSV, lệnh kiểm).

## Luật sửa (cứng)
1. Chỉ đổi cách viết. Giữ nguyên mọi số, ID, tên riêng, nhãn MVP và Sau MVP, nghĩa luật, phủ định, mức chắc chắn ("có thể", "chưa", "sẽ"). Không thêm thông tin mới, không bỏ thông tin.
2. Không thêm, xóa hay đổi thứ tự hàng, không đổi cột STT, header, ô số. Số hàng mỗi tab giữ nguyên.
3. Không động vào chữ Lead viết hoặc sửa tay: OVERVIEW A1, OVERVIEW B28 (USP), tên 5 pillar ở OVERVIEW, GAME STORY A2. Ô nào DECISIONS ghi là Lead sửa tay thì giữ.
4. Thuật ngữ game giữ nguyên như Sheet đang dùng (Oxy, Tally, Driftlife, ca cảng, cửa neo, thùng, kiện, khoang, Hạng cảng, Recall Beacon...). Tên thao tác giữ đúng như tab Player.
5. Không gạch dài, không dấu chấm phẩy, không emoji, mỗi dòng trong ô dưới 300 ký tự (cổng `kiem-de-doc.mjs`).
6. Ô đã dễ đọc thì để nguyên. Không viết lại cho có.

## Nguồn của TSV
TSV trong `projects/game-moi/gdd/sheet/` là bản đọc sửa tay, sửa thẳng trong TSV.
- (Đính chính 2026-11-23) Không chạy script nào: WIREFRAME, Tutorials, MVP Criteria Checklist cũng sửa thẳng trong TSV, xem tools/README.md.

## Kiểm trước khi dán
1. Chép bản gốc mỗi TSV ra thư mục tạm trước khi sửa. Sửa xong chạy `python -X utf8 -I <skill vietnamese-hmr>/scripts/check_facts.py <gốc> <mới>` cho từng tab, hết lỗi số và tên mới được dán.
2. `node projects/game-moi/tools/kiem-de-doc.mjs --tab "<Tab>"` ĐẠT, `node projects/game-moi/tools/validate-gdd.mjs` thoát 0.

## Dán Sheet
- Sheet chính: `1NayaWIuhGD9p3Czlff9sCubY610Ksye4bo97R_QqPdE` (connector Google Sheets, tool `update_values`, nạp bằng ToolSearch). Không dùng Sheet cũ `1kGdCe...`.
- Chạy `node projects/game-moi/tools/doi-chieu-sheet.mjs --tab "<Tab>"` để lấy địa chỉ ô lệch (ví dụ D33). Lấy giá trị đầy đủ của ô đó từ TSV bằng script nhỏ (hàng TSV = hàng Sheet trừ `dongDau` trong `tools/tham-so/sheet.json`, `\n` trong TSV là xuống dòng thật). Dán đúng các ô đó.
- Chạy lại `doi-chieu-sheet.mjs --tab` tới khi KHỚP. Dán nhầm ô thì sửa ngay.

## Giới hạn
Không commit, không push. Không sửa tab ngoài nhóm được giao. Script tạm để ngoài repo. Không đổi file GDD markdown nào ngoài nguồn của tab sinh bằng script.

## Trả về
Khối `## Báo cáo cho GDM`: bảng mỗi tab (số ô đã sửa, kết quả check_facts, kiem-de-doc, doi-chieu), 3 ví dụ trước và sau tiêu biểu, chỗ phân vân không sửa (nêu ô và lý do).
