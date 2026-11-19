# GDD và tài liệu theo chuẩn studio

Nguồn: GDD game tile chữ A (Google Sheet, 24/09 - 08/10/2026), GDD game tile drop A (06/10), GDD markdown game tile chữ A, game-tycoon-a (khung 7 mục + lịch sử), game bắn màu A (spec từ file mẫu), studio-os, CCGS (8 mục).

## 1. Hai dạng GDD đang dùng

| Dạng | Khi nào | Nguồn chân lý |
|---|---|---|
| Google Sheet nhiều tab | Sản phẩm của studio có team art, dev, SFX theo dõi, kế hoạch update | Sheet, Lead tự sửa song song |
| Markdown trong repo | Prototype, hệ thống phức tạp, số có nguồn, lịch sử cân bằng | `docs/gdd/`, "GDD sống cùng code" |

Luật chung: luật chơi viết một nơi, doc khác trỏ sang. GDD markdown giữ mục "Hiện hành" ở đầu, lịch sử để cuối (pacing.md 1 081 dòng kiểu nhật ký khó đọc hiện trạng).

## 2. Cấu trúc Sheet chuẩn (game tile chữ A làm khuôn, game tile drop A phải format y hệt)

| Tab | Cột | Ghi chú |
|---|---|---|
| Gameplay | Ảnh - Mục - Mô tả | Mục theo thứ tự: Cách chơi, Onboarding, Order, Hàng chờ, Mechanic, Booster, Revive, Win, Lose. Viết "- Nhãn: nội dung", ý con "  + ". Logic mechanic KHÔNG để tab riêng |
| Main Task (hoặc Kế hoạch update) | STT - Hạng mục - Scope - Người thực hiện - Trạng thái - Phụ thuộc (#n) - Ghi chú/Ref | Nhóm 2D ART / VFX / SFX / DEV / GD. Xanh #b6d7a8 đã làm, đỏ #f4cccc cần update. Logic mechanic nằm ở hàng DEV của mechanic đó |
| Level Curve | Level - Nhãn - Quân - Điểm - Order - Chữ gợi ý - Vai trò - Mechanic - Note | Mechanic chỉ ghi tên ("Hidden + Ice + Link"), Note một câu chỉ level đáng nói, bỏ cột suy ra được, màu nhãn định dạng có điều kiện |
| Level Data | Level - Nhãn - Chủ đề - Quân - Tầng - Order - Từ theo thứ tự - Chữ gợi ý (`_A_`) - Chữ lộ/tổng - Khay - Quân úp - Quân băng (n) - Quân link - File | Số THẬT đọc từ file level bằng script |
| Tutorials | Bước - Tên bước - Khi nào - Highlight - Bàn tay - Text box (EN) - Kết thúc bước - Ghi chú | Quy tắc chung đầu tab, khối Onboarding, Cảnh báo, từng mechanic, TB đánh số liền |
| Asset & Màn hình | STT - Nhóm - Asset - Mô tả - Trạng thái - Ref | Chỉ asset art: MÀN HÌNH / OBJECT / ANIM-FX / SFX |

Bảng màu: tiêu đề #c0504d chữ trắng đậm, cột Mục #fce4d6, nhóm Main #fce4d6, Asset #b4a7d6, Tutorials #fce5cd, xanh #b6d7a8, đỏ nhạt #f4cccc, vàng #ffe599 (Vừa), tím #b4a7d6 (Rất khó), viền #bfbfbf.

## 3. Luật viết Lead đã đặt

- Chỉ dùng "-". Không gạch dài, không gạch ngắn kể cả khoảng số ("3-5", "L1-4"). Không emoji, tên nút viết chữ. Lý do: "trông nó bị trí tuệ nhân tạo quá" (24/09/2026).
- Chép nguyên văn nội dung tham chiếu (17 mục Anim, 13 mục Sfx) kèm link ref. Không viết "làm giống game tile chữ A".
- Template của game khác (GDD lẩu Hotpot) chỉ lấy cấu trúc tab, cột, nhóm task.
- Mỗi cột một nghĩa, bảng ít cột, bỏ cột suy ra được, note một câu. Phần giải thích cho người đọc hiểu (CAT = C A T) không đưa vào tài liệu.
- Gọi vật thể đúng từ Lead: "hàng chờ" (game tile drop A), "bóng" (game bi drop A), "băng chuyền" (Meow). Tên biến code (pJunk, adv) không lộ ra UI hay doc.
- Text trong game tiếng Anh ngắn, tối đa 2 dòng. Viết "kèm nút", không "+ nút".
- Chỗ là suy luận của Claude chưa được Lead xác nhận phải đánh dấu rõ (Điểm Order = tổng điểm 3 quân, nội dung tab Tutorials, danh sách ANIM/FX).
- Quyết định ghi kèm ngày và "chủ dự án chốt dd/mm". Luật cũ giữ làm lịch sử kèm ghi chú đã đổi.
- Tab Sheet viết cho Dev, Art, PM đọc: không đường dẫn file repo của phòng, không lý giải nội bộ, ghi chú mỗi ô 1-2 dòng. Điều chờ Lead ghi gọn "(chờ Lead)". `soat.mjs` báo lỗi "Đường dẫn file repo trong Sheet" (20/10/2026).

## 4. Khung GDD hệ thống (markdown)

Mục đích với người chơi -> Luật (đánh số, khẳng định) -> Tham số (bảng: tên, khởi điểm, khoảng hợp lệ, nguồn) -> Trường hợp biên (≥ 4) -> Ràng buộc vật lý -> Yêu cầu cho engineer/tool -> Yêu cầu cho art, UI, tutorial, audio -> Cách đo thành công -> Lệch khỏi tham chiếu -> Câu hỏi mở kèm phương án. Mượn từ CCGS: Formulas, Tuning Knobs có Safe Range, Acceptance Criteria đo được. Template: `docs/process/templates/gdd-he-thong.md`.

## 5. Quy trình cập nhật GDD cho sản phẩm có sẵn (game tile drop A 06/10/2026)

1. Lead giao: sản phẩm đã có, cần update doc cho khớp. Sửa thẳng sheet.
2. Lập danh sách câu hỏi một lượt từ màn demo (visual tạm hay thật? có đồng hồ không? bao nhiêu order? thua khi nào?). Ghi câu trả lời thành luật khẳng định (vật lý thật, 2 order cố định không bao giờ 3, hàng chờ 7 = 5 + 2 ads, thua ngay khi đầy, revive 900 coin, Lock là xích không phải băng, không đồng hồ, không booster).
3. Điền các tab theo khuôn. Biến danh sách update của Lead thành Kế hoạch update xanh/đỏ có người thực hiện và phụ thuộc.
4. Đối chiếu công thức với ảnh game trước khi sinh dữ liệu (tab Gameplay từng ghi "Tổng số quân = số Order x 3" trong khi Order có số chữ thay đổi).
5. Đọc lại tab trước khi ghi đè (Lead tự sửa, tự xóa cột và mục). Không tự thêm lại mục Lead đã xóa.

## 6. Thao tác Google Sheet (connector hoặc browser)

Có connector Google Sheets thì dán theo `.claude/skills/gdd-v1/references/tao-sheet.md` (05/11/2026: chưa có link thì tự tạo `[GDD] - <Tên game>`, kiểu Sheet của Lead). Qua browser thì skill `gdd-sheet-sync` (nếu có cài) thay cho dán tay. Các ghi chú dưới đây là cơ sở của hai cách đó (20/10/2026).

- Drive tool chỉ đọc và tạo file, không sửa ô. Sửa ô qua built-in browser: `ctrl+j` -> gõ `A3` hoặc `'Tab'!A1` -> Enter -> chờ 1 s -> phát `ClipboardEvent('paste')` với DataTransfer lên `#waffle-rich-text-editor`. Kiểm `#t-name-box` trước khi dán.
- Dán `text/html` (bảng có style inline, colspan) giữ màu nền, đậm, gộp ô, `<br>`, `<a href>`. Không giữ độ rộng cột và căn dọc. Sau dán: Định dạng > Xuống dòng tự động, căn chỉnh giữa dọc. Ô đơn một dòng có dấu `"` thì dán chuỗi thô.
- Đọc nguyên văn một tab: `fetch('/spreadsheets/d/<id>/gviz/tq?tqx=out:csv&sheet=<tên>')` cùng origin, đầy đủ hơn Drive read.
- Thấy "Chỉ nhận xét" là hết quyền. Nhờ Lead bật "Người chỉnh sửa", không cố vượt. Không bấm theo ref khi đang giả lập viewport.
- Soát sau khi ghi: tìm gạch ngắn, gạch dài (U+2013, U+2014) và emoji.

- Bài học game chữ drop A 20/10/2026: TSV phải giữ xuống dòng trong ô là chuỗi `
`. Ghi dòng xuống thật làm vỡ hàng (bảng 35 hàng thành 60). Dán text/html với `<b>` ở một phần ô thì Sheet đậm cả ô. Độ rộng cột (`colgroup`) không được giữ khi dán, phải chỉnh tay. Dán kiểu google-sheets-html-origin làm mất xuống dòng. Dán chữ thuần (text/plain) vào ô có sẵn thì giữ nguyên định dạng tab của Lead. Đổi số hàng nhóm (ô gộp) thì bỏ gộp và xóa định dạng vùng cũ trước khi dán lại. Đọc lại tab: gviz CSV bỏ chữ ở cột kiểu số (hàng nhóm, tiêu đề STT), dùng `/export?format=csv&gid=` để so đủ hàng. Chạy `sheet-html.mjs` không kèm `--tab` sinh lại mọi HTML trong thư mục, ghi đè file HTML do script riêng của vai khác sinh: chạy lại script đó sau.

## 7. Tài liệu khác thuộc phòng

- Đặc tả JSON cho dev (ví dụ chú giải từng dòng, sơ đồ lưới), BUILD.md, doc thao tác editor và đồng bộ Unity, `FORMAT.md` cạnh mã với ví dụ được test.
- Brief cho phiên khác (`BRIEF.md` 587 dòng từ GDD) khi tách prototype sang phiên riêng.
- Sổ tay dạng artifact khi Lead muốn đọc hiểu (mỗi luật gắn "vết sẹo" có số đo thật).
- CLAUDE.md của repo game: luật bất biến, quy ước, bộ level hiện hành, lệnh, Definition of done. Cập nhật ngay khi Lead chốt (yêu cầu "xóa từ 6 chữ" từng mất giữa hai phiên).
