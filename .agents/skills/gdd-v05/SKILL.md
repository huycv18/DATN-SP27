---
name: gdd-v05
description: Viết GDD bản V0.5 (bản nhanh cho prototype hoặc game mới) cho mọi game puzzle/casual theo khuôn Lead đã duyệt qua các game họ drop - chỉ 2 tab Gameplay và Main Task, một lượt viết, một lượt soát. Một file cấu hình JSON sinh 2 TSV sẵn dán Sheet. Mặc định là khung chung cho mọi Puzzle (Cách chơi, mục riêng của game, Win, Lose), họ drop là một preset. Dùng khi Lead nói GDD V0.5, GDD 0.5, GDD nhanh cho game mới, GDD cho prototype, làm GDD game mới giống game X nhưng đổi object.
argument-hint: <tên game> [--project <slug>] [--sheet <link>] [--dinh-kem <ảnh, video, link store>...]
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, Bash, AskUserQuestion
---

# /gdd-v05 - GDD bản nhanh, 2 tab

Tiếng Việt có dấu, thuật ngữ kỹ thuật giữ tiếng Anh, chỉ dùng "-", không emoji. Đường dẫn tính từ gốc repo, thư mục skill gọi tắt `SKILL/`.
Bản V0.5 ưu tiên tốc độ cao nhất. GDD V0.5 chỉ gọn trong 2 tab Gameplay và Main Task.
GDD V1 (đủ tab, luật đánh số, Level data, Tutorials) dùng `/gdd-v1 sheet`, không dùng skill này.

## 0. Hỏi 3 câu trước khi viết

Skill hỏi người dùng skill về gameplay, win khi nào, thua khi nào trước tiên. Bước đầu tiên, trước khi viết chữ nào vào cấu hình hay TSV, hỏi người dùng skill trong một lượt:

1. Gameplay thế nào: người chơi làm gì trong một ván?
2. Win khi nào?
3. Thua khi nào?

- Người dùng skill có thể không phải Lead (skill chạy cả trên claude.ai cho org). Hỏi đúng người đang gọi skill.
- Đọc đính kèm trước khi hỏi. Đính kèm đã nói rõ câu nào thì nhắc lại kèm nguồn để người dùng xác nhận, không hỏi lại từ đầu.
- Không lấy luật thắng, thua hay mục tiêu ván từ build, prototype hay config (biến tiến độ, đồng hồ trễ, điều kiện trong code). Build chỉ cho biết build đang làm gì, chưa phải luật đã chốt.
- Câu nào chưa có trả lời thì ghi "chờ Lead chọn" ở mục đó (Cách chơi, Win hoặc Lose), không tự điền.
- Câu xác nhận đọc từ video hoặc ảnh chỉ nêu điều thấy rõ ở khung hình gốc. Chi tiết còn ngờ (ví dụ vật có ổ cắm nối hay chỉ là hình vẽ) thì hỏi thành câu riêng hoặc để "chờ Lead chọn", không gộp vào phương án "Đúng" để người dùng bấm. Người dùng bấm "Đúng" cả cụm thì chi tiết ngờ trong đó vẫn chưa phải luật đã chốt.
- Gộp 3 câu này với câu hỏi ở mục 3 vào cùng một lượt.

## 1. Đọc trước (một lượt)

1. `SKILL/references/khuon-va-bai-hoc.md`: cột của 2 tab, mục nào chứa gì, số mặc định của họ drop, các lần Lead sửa tay và điều Lead đã bác. Bắt buộc đọc hết.
2. Đính kèm của người dùng: ảnh màn chơi (đọc bằng mắt: vật, vùng, HUD, bố cục), video, link store game tham chiếu, link Sheet bản sao.
   - Video: `python -I .Codex/skills/gdd-v05/scripts/video-khung.py <video> --ra <thư mục tạm>` ra tấm ghép 12 khung có mốc giờ, đọc hết các tấm. Dòng chữ báo của game (lỗi đặt sai, hướng dẫn, đếm tiến độ) là nguồn luật tốt nhất, ghi lại mốc giây. Mốc cần soi kỹ thì cắt khung gốc: thêm `--cat 2.2,90.5`.
   - Cắt luôn 1 khung giữa ván làm ảnh cột Ảnh (thấy đủ vùng chơi, vật, HUD, nút booster) vào `gdd/anh/gameplay.png` cạnh thư mục sheet.
3. `projects/<slug>/DECISIONS.md`, `README.md` nếu project đã có. Chưa có project thì tạo `projects/<slug>/` với `README.md` và `DECISIONS.md` (repo phòng có `/kickoff-game` thì dùng, nếu có). V0.5 không mở task nhiều vai.
4. Game cùng họ đã làm: `projects/*/gdd/cau-hinh-v05.json`. Gần nhất thì chép làm điểm xuất phát.

## 2. Chọn đường

Mỗi game có gameplay và điều kiện thắng thua riêng, skill phải linh động để viết GDD cho mọi game Puzzle.

| Game | Làm |
|---|---|
| Mặc định, mọi Puzzle | Chép `SKILL/cau-hinh/chung.json`. Viết `gameplay` theo khung Cách chơi, mục riêng, Win, Lose (references mục 2) từ câu trả lời 3 câu ở mục 0. Tên mục riêng theo lời người dùng, bảng gợi ý theo dạng Puzzle ở references mục 2 |
| Người dùng xác nhận game thuộc họ drop (nhặt vật vào Order, hàng chờ, vật lý rơi hoặc nổi) | Chép `SKILL/cau-hinh/drop.json` (có `"ho": "drop"`), điền vài trường ngắn (references mục 2b và 4) |
| Họ drop nhưng Order khác luật (theo chủ đề, số ô khác) | Như trên, ghi đè mục bằng `dong_cach_choi`, `dong_order`, `dong_logic`, `dong_hang_cho`, `dong_hoi_sinh` |

- Không tự coi game là họ drop vì đính kèm có Order hay hàng chờ. Chỉ dùng preset khi người dùng xác nhận.

Ghi vào `projects/<slug>/gdd/cau-hinh-v05.json`.

## 3. Hỏi người dùng tối đa một lượt, chỉ khi buộc phải

- Ngoài 3 câu ở mục 0, chỉ hỏi điều không suy ra được từ ảnh, video, game cùng họ, và hai cách hiểu dẫn tới GDD khác hẳn. Thường 0-3 câu, mỗi câu kèm phương án nghiêng về.
- Còn lại tự quyết theo game cùng họ gần nhất, ghi giả định một dòng vào DECISIONS ("Giả định (Lead sửa nếu sai): ..."), không chèn `[GIẢ ĐỊNH]` vào Sheet.
- Main Task (mọi game): mỗi tính năng hoặc mechanic là 1 dòng, Scope 1 tới 2 ý, "Xong khi" 1 câu, DEV thường 6 tới 8 dòng. V0.5 chỉ làm core win lose, không sao, kỷ lục, quà, skin, khăn, chương, Home chọn chương. Luồng UI chỉ Gameplay, Win, Lose, cộng màn quảng cáo nếu có. Chi tiết: references mục 3.
- Mechanic Lead chưa nói bằng lời là chốt thì ghi "1 mechanic hidden" ở Main Task. Lead đã chốt có mechanic nhưng còn để ngỏ một luật của nó thì ghi "chờ Lead chọn" ở chỗ đó, không tự điền phương án nghiêng về. Chữ trên nút gợi sẵn Lead bấm không tính là chốt.

## 4. Sinh và soát

```
python -I .Codex/skills/gdd-v1/scripts/sheet-yeu-cau.py projects/<slug>/gdd/sheet --doi
python -I .Codex/skills/gdd-v05/scripts/sinh-v05.py projects/<slug>/gdd/cau-hinh-v05.json [--ra <thư mục>]
node .Codex/skills/gdd-v1/scripts/soat.mjs projects/<slug>/gdd/sheet/01-gameplay.tsv projects/<slug>/gdd/sheet/02-main-task.tsv --loai sheet
python -I .Codex/skills/gdd-v05/scripts/selftest.py
```

- Đã dán Sheet rồi thì đối chiếu trước khi sinh lại: `get_values` từng tab lưu vào `gdd/sheet/_tren-sheet/<NN-tab>.json`, rồi `sheet-yeu-cau.py --doi` (gọi `quet.mjs --doi`, so từng ô). Lệch là Lead đã sửa tay, kéo chữ đó về cấu hình trước. Chi tiết: `.Codex/skills/gdd-v1/references/tao-sheet.md` mục 3.
- Script ra `projects/<slug>/gdd/sheet/01-gameplay.tsv`, `02-main-task.tsv` (hoặc thư mục `--ra`), tự kiểm số cột. Xuống dòng trong ô là chuỗi `\n`. Tự đặt UTF-8, không cần `-X utf8`.
- Tách dòng Main Task bằng cấu hình (không còn script riêng của từng game):
  - `dev_rows` thay nhóm DEV.
  - `object_rows` thay dòng "Các object".
  - `mechanic_art_rows` thay dòng "Mechanic" của 2D ART.
  - Mỗi dòng là `[hạng mục, scope, ghi chú]`. STT đánh lại liền nhau.
- `ghi_chu` khớp theo tên hạng mục ở cột B, không theo STT. Tên trùng ở hai nhóm (Mechanic) ghi kèm nhóm: `"GD/Mechanic"`, `"2D ART/Mechanic"`. Khóa không khớp dòng nào thì script dừng và in danh sách tên.
- `selftest.py` kiểm cấu trúc Main Task, khóa Ghi chú và chạy thiếu `-X utf8`. Chạy sau khi sửa script.
- Soát tới khi Lỗi = 0. Đọc lại 2 TSV bằng mắt một lượt theo bảng "Soát tay" ở references mục 6.
- Game mới chưa có `gdd/tu-vung.md` thì `soat.mjs` cảnh báo bỏ qua kiểm từ vựng. Đó là bình thường ở V0.5, ghi "chưa soát từ vựng" trong báo cáo, không tạo file rỗng để tắt cảnh báo.
- Không viết Tutorials, Thuật toán level, Level data, không chạy bot, không vòng review nhiều lượt.

## 5. Dán Sheet

Một đường, qua connector Google Drive và Google Sheets, theo `.Codex/skills/gdd-v1/references/tao-sheet.md` (script `.Codex/skills/gdd-v1/scripts/sheet-yeu-cau.py`, kiểu Sheet của Lead ở references mục 8):

- Lead gửi link Sheet (thường là bản sao GDD game trước): chỉ dán chữ (`--chu`, `update_values`) để giữ màu, font, ô gộp của Lead. Tab không dùng ở V0.5 thì ẩn, không xóa. Qua browser thì skill `gdd-sheet-sync` (nếu có cài) lệnh `o` làm thay.
- Chưa có link: tự tạo, đặt tên `[GDD] - <Tên game>`, dựng tab có màu, không hỏi (tao-sheet.md mục 2).
- Ảnh: cột Ảnh của tab Gameplay gộp sẵn từ A2 tới hàng cuối. Không tự chèn ảnh, Lead chèn tay trong 10 giây (Chèn > Hình ảnh > Hình ảnh trong ô, chọn `gdd/anh/gameplay.png`). Lý do ở references mục 7, đừng thử lại.
- Lead đã sửa tay trên Sheet: đối chiếu (mục 4, `--doi`) rồi kéo về cấu hình (ô Ghi chú Main Task vào `ghi_chu` theo tên hạng mục, ô Gameplay vào `dong_*` hoặc `gameplay`) trước khi sinh lại, để không đè chữ Lead.
- Sau khi dán: `get_values` từng tab, số hàng khớp TSV, ô nhiều dòng còn xuống dòng (tao-sheet.md mục 4).

## 6. Báo Lead (dưới 10 dòng, trong chat)

```
**Kết luận:** GDD V0.5 <game> đã dán 2 tab Gameplay, Main Task vào <link Sheet>.
**Khác game gần nhất:** 2-4 dòng (object, vùng nhặt, Order, scope art).
**Giả định:** mỗi dòng một giả định đã ghi DECISIONS, hoặc "Không".
**Cần Lead quyết:** câu hỏi kèm phương án, hoặc "Không".
```

Ghi DECISIONS của project: ngày, lời Lead nguyên văn ngắn, các giả định. Project mới thêm dòng GDD V0.5 vào bảng nguồn trong `projects/<slug>/AGENTS.md` (lệnh sinh ở mục 4).
