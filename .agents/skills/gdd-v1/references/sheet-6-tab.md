# Sheet 6 tab chuẩn của studio

Khuôn bản V1. Bản V0.5 (2 tab Gameplay, Main Task) dùng `/gdd-v05`, khuôn `.claude/skills/gdd-v05/references/khuon-va-bai-hoc.md`.

Nguồn: Sheet GDD của một game tile chữ nhiều tầng làm khuôn, game tile rơi format theo. Chi tiết gốc: `docs/knowledge/50-gdd-va-tai-lieu.md` mục 2 và 3.

Tab phụ (Nhân vật, Object, SFX, VFX - Anim, Thuật toán level, Object List...) là tab tùy chọn, không thuộc 6 tab bắt buộc. Chỉ thêm khi game có nội dung đó, theo bảng "Khi nào có tab phụ" ở `.claude/skills/gdd-v05/references/tab-phu.md` mục 1, cột và ví dụ cũng ở file đó. Ví dụ game tile rơi có tab Thuật toán level chứa logic thuật toán sinh level.

## 1. File đầu ra trong `projects/<slug>/gdd/sheet/`

| File | Tab | Cột (hàng 1 của TSV) |
|---|---|---|
| `01-gameplay.tsv` | Gameplay | Ảnh, Mục, Mô tả |
| `02-main-task.tsv` | Main Task (hoặc Kế hoạch update) | STT, Hạng mục, Scope, Người thực hiện, Trạng thái, Ghi chú |
| `03-level-curve.tsv` | Level Curve | Level, Nhãn, Vai trò, Mechanic, Note, cộng các cột số của game (ví dụ game tile chữ nhiều tầng: Quân, Điểm, Order, Chữ gợi ý) |
| `04-level-data.tsv` | Level Data | Cột tùy game, xem mục 2 Level Data |
| `05-tutorials.tsv` | Tutorials | Bước, Tên bước, Khi nào, Highlight, Bàn tay, Text box (EN), Kết thúc bước, Ghi chú |
| `06-asset-man-hinh.tsv` | Asset & Màn hình | STT, Nhóm, Asset, Mô tả, Trạng thái, Ref |

Tên cột theo game: tên vật và tên vùng theo từ người dùng gọi (quân, bóng, card, ống, khay). Cột mechanic chỉ giữ mechanic game có. Mỗi `.tsv` sinh một `.html` cùng tên bằng `scripts/sheet-html.mjs`, thêm `README.md` hướng dẫn dán.

## 2. Nội dung từng tab

Gameplay
- Khung chung cho mọi Puzzle, vì mỗi game có gameplay và điều kiện thắng thua riêng, theo thứ tự: Cách chơi, Onboarding, các mục riêng của game (người dùng tự đặt tên), Mechanic, Booster, Win, Lose. Game không có mục nào thì bỏ hàng đó, không viết "không có".
- Win, Lose lấy từ câu trả lời ở bước hỏi 3 câu (SKILL mục 3), chưa có trả lời thì ghi "chờ Lead chọn". Không lấy từ build.
- Họ drop dùng preset: mục riêng là Order, Hàng chờ, thêm Revive (`.claude/skills/gdd-v05/references/khuon-va-bai-hoc.md` mục 2b). Gợi ý mục riêng cho dạng khác: cùng file, mục 2.
- Ô Mô tả viết nhiều dòng: "- Nhãn: nội dung", ý con "  + ". Trong TSV, xuống dòng trong ô ghi bằng hai ký tự `\n` (script đổi thành thẻ xuống dòng trong HTML).
- Mechanic: mỗi mechanic một cụm "- Tên: luật một câu" kèm số (số băng 1 đến 6, Link 2 quân). Mốc level giới thiệu ghi ở Level Curve, không lặp ở đây. Mechanic Lead chưa chốt bằng lời thì ghi "chờ Lead chọn", không viết luật.
- Ảnh: để trống hoặc ghi tên file, Lead chèn ảnh tay.

Main Task
- Nhóm theo thứ tự: 2D ART, VFX, SFX, DEV, GD. Hàng nhóm là một hàng chỉ có tên nhóm ở cột Hạng mục (script tô màu nhóm).
- STT liền trong cả tab (#1, #2, ...). Không cột Phụ thuộc. Trạng thái: "Đã làm" (xanh), "Cần update" (đỏ), trống (chưa bắt đầu).
- Mỗi tính năng hoặc mechanic là 1 dòng, không tách thành dòng con kiểu "Tên: phần việc". DEV không dồn 1 cục, thường 6 tới 8 dòng. Scope 1 tới 2 ý, "Xong khi" 1 câu (áp mọi game, chi tiết `.claude/skills/gdd-v05/references/khuon-va-bai-hoc.md` mục 3).
- Logic mechanic nằm ở hàng DEV của mechanic đó, cột Ghi chú, chép đủ luật đánh số.
- Người thực hiện ghi vai (2D Artist, VFX, SFX, Dev, GD), không ghi tên người trừ khi Lead ghi.

Level Curve
- Số từ bảng curve của người làm level hoặc file curve của repo game. Mechanic chỉ ghi tên ("Hidden + Ice + Link"), không số lượng. Note một câu, chỉ level đáng nói (giới thiệu, đỉnh, thở). Không ghi mục tiêu curve hay nhãn đo vào Note.
- Nhãn: Dễ, Vừa, Khó, Rất khó, Cực khó (script tô màu nhãn).

Level Data
- Số THẬT đọc từ file level bằng script (đếm vật, mechanic và các số riêng của game). Không có file thì để trống và ghi `[GIẢ ĐỊNH]` trong README, không bịa số.
- Cột tùy game, lấy theo file level của game hoặc bản Sheet Lead đang dùng, không chép cột của game khác họ.

| Game | Cột |
|---|---|
| Ví dụ game tile chữ nhiều tầng (họ chữ) | Level, Nhãn, Chủ đề, Quân, Tầng, Order, Từ theo thứ tự, Chữ gợi ý, Chữ lộ/tổng, Khay, Quân úp, Quân băng (n), Quân link, File |
| Ví dụ game tile rơi (họ drop) | level, tag, difficulty point, box order, 10 cột curve (10% tới 100%), curve tile, tile id, mechanic, force lose, unlock, rồi nhóm sub curve 10 cột và lose to sub curve |

- Game tile chữ nhiều tầng: Chữ gợi ý ghi chữ lộ xen gạch dưới, Chữ lộ/tổng dạng `12/30`, Quân băng ghi số quân kèm n trong ngoặc ("2 (3, 4)").

Tutorials
- Khối theo thứ tự: Quy tắc chung (một hàng, cột Ghi chú chứa luật: tối 70%, một text box suốt luồng, chặn ngoài luồng, tắt sau thành công đầu), Onboarding, Cảnh báo, từng mechanic theo mốc level.
- Cột, luật viết và ví dụ: `.claude/skills/gdd-v05/references/tab-phu.md` mục 7. Lời người chơi thấy và làm, không giây, không bộ đếm.
- Text box tiếng Anh, tối đa 2 dòng, đánh số liền TB1, TB2 ... trong cả tab. Viết "kèm nút Got it!", không "+ nút".
- Cảnh báo (vùng chứa sắp đầy, nếu game có) là cảnh báo, không phải giới thiệu nút, bật theo điều kiện lần đầu.
- Mechanic Lead đã bỏ thì không có khối.

Asset & Màn hình
- Chỉ asset art: nhóm MÀN HÌNH, OBJECT, ANIM-FX, SFX. Mỗi hàng một asset, Mô tả một câu, Ref là link hoặc tên file tham chiếu.
- Nội dung mượn từ game cùng studio: chép nguyên văn từng dòng kèm Ref nguồn, không viết câu so sánh với game khác.

## 3. Luật viết của Lead (mọi tab)

- Không dùng dấu chấm phẩy (Lead cấm vì "nó AI quá"). Tách ý thành 2 gạch hoặc dùng "," hay ".".
- Viết cho Game Designer đọc (Lead: "Nội dung cần viết đơn giản và dễ hiểu với vai trò của GameDesigner"): lời người chơi thấy và làm, không bộ đếm, công thức, ngoại lệ biên của build. Chi tiết cài đặt nằm ở cột Ghi chú hàng DEV.
- Ô Main Task tối đa 5 dòng (Lead: "đừng nhét hết vào 1 ô như vậy chứ"). Danh sách dài hơn tách tab phụ, ô Main Task chỉ ghi số lượng và tên tab.
- Main Task ghi rõ số lượng từng việc art, DEV tách mỗi việc một dòng. Chi tiết: `.claude/skills/gdd-v05/references/khuon-va-bai-hoc.md` mục 3.

## 4. Bảng màu (script áp tự động)

| Chỗ | Màu nền | Chữ |
|---|---|---|
| Hàng tiêu đề (mọi tab) | #c0504d | trắng, đậm |
| Cột Mục (Gameplay) | #fce4d6 | đen |
| Hàng nhóm Main Task | #fce4d6 | đậm |
| Hàng nhóm Asset & Màn hình | #b4a7d6 | đậm |
| Hàng khối Tutorials | #fce5cd | đậm |
| Trạng thái "Đã làm" | #b6d7a8 | |
| Trạng thái "Cần update" | #f4cccc | |
| Nhãn Dễ | #b6d7a8 [GIẢ ĐỊNH] | |
| Nhãn Vừa | #ffe599 | |
| Nhãn Khó | #f4cccc [GIẢ ĐỊNH] | |
| Nhãn Rất khó, Cực khó | #b4a7d6 | |
| Viền mọi ô | #bfbfbf | |

Hai màu [GIẢ ĐỊNH] suy từ bảng màu có nguồn (xanh đã làm, đỏ nhạt cần update) chưa được Lead xác nhận cho nhãn. Sheet thật dùng định dạng có điều kiện nên dán xong Lead có thể đổi một lần.

## 5. Dán lên Google Sheet

Có connector Google Drive và Google Sheets: làm theo `.claude/skills/gdd-v1/references/tao-sheet.md` (tự tạo Sheet khi chưa có link, dán HTML có màu, định dạng kiểu Lead, đối chiếu bằng `--doi`). Các bước tay dưới đây chỉ dùng khi không có connector (qua browser, knowledge 50 mục 6):

1. Mở tab đích, đọc lại nguyên văn qua gviz CSV trước khi dán (Lead tự sửa song song).
2. Chọn ô đầu (ctrl+j, gõ A1 hoặc tên tab kèm A1), dán HTML bằng sự kiện paste với kiểu text/html để giữ màu, đậm, gộp ô, xuống dòng. TSV dùng khi chỉ cần chữ.
3. Sau dán: Định dạng > Xuống dòng tự động, căn giữa dọc, độ rộng cột chỉnh tay (HTML không giữ).
4. Soát trên sheet: tìm gạch dài, gạch ngắn và emoji. Thấy "Chỉ nhận xét" là hết quyền, báo Lead.
