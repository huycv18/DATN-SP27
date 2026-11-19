# Tool dựng level: khung chung và chuẩn hoàn thiện

Nguồn: skill `level-forge` (game-ban-mau-a), game bắn màu A Level Forge, game bi drop A Level Forge, game sort xe A Level Forge, game tile chữ A editor, game tile chữ A tools, Bee Level Editor (Unity), game nối ống A editor, game screw tổ ong B editor.

## 1. Năm chỗ phụ thuộc game (level-forge)

Một tool dựng level chỉ có năm chỗ phụ thuộc game, phần còn lại là khung tự lắp. Khoảng 12% code (800 dòng) dùng lại được giữa game, `gen/` và `sim/` chính là game.

| # | Chỗ | Câu hỏi về gameplay | Khung trả lại |
|---|---|---|---|
| 1 | SCHEMA | Một level gồm những gì? | quản lý bộ level, JSON, CSV, nhớ qua reload, hoàn tác |
| 2 | LUẬT | Làm được gì, thắng thua khi nào? (hợp đồng 5 hàm: trạng thái đầu, danh sách nước, áp nước, thắng chưa, xếp hạng) | solver hai chế độ, ba phán quyết, tài nguyên tối thiểu, chơi thử tay, AI chơi thử |
| 3 | BẤT BIẾN | Dữ liệu thế nào là hợp lệ? | chặn ở cửa nạp kèm lý do, kiểm cả bộ, nút tự sửa |
| 4 | TRỤC KHÓ | Độ khó đến từ đâu? | điểm 0-100, hiệu chuẩn theo fixture, bảng phân tích, lời khuyên gỡ khó |
| 5 | DỰNG | Đẻ ra bàn chắc chắn giải được kiểu gì? | sinh hàng loạt, bám đích, curve cả chương |

**Bước 0 trước khi hứa** (trả lời ra giấy): mỗi lượt mấy lựa chọn (≤ 6 thì vét cạn được), có bước nào luôn có lợi để đẩy khỏi tìm kiếm, có đúng một tài nguyên khan hiếm, level có bất biến đếm được. Vét cạn một level nên dưới vài nghìn node, vượt vài chục nghìn thì câu 2 chưa trả lời.

**Thứ tự dẫn xuất:** điền 5 chỗ ra giấy -> viết LUẬT -> kiểm LUẬT bằng level có sẵn của game (không khớp thì luật sai) -> SCHEMA và BẤT BIẾN -> DỰNG (bóc một lời giải rồi phá) -> phỏng vấn Lead lấy TRỤC KHÓ và hiệu chuẩn -> khung lắp phần còn lại.

Vị trí skill: `game-ban-mau-a/.claude/skills/level-forge/` (SKILL.md, references/rules.md 12 luật, references/case-hop-bong.md, assets/forge/ 5 file dùng nguyên si, assets/selftest.mjs 22 phép kiểm). Bản dùng chung của phòng đã chép vào `.claude/skills/level-forge/`.

## 2. Luật kiến trúc

- **Luật game một bản duy nhất** trong `sim/`, solver, bot, chế độ chơi thử, generator đều gọi chung. Tool buộc có bản sao luật (Meow `tools/level-forge/game/`) thì phải có `parity.mjs` và phát lại lời giải trên engine thật (bắt được lỗi 3 ghế lên 1 xe, lời giải thật 292 nước thay vì 153). Tốt nhất: tool import thẳng engine (Meow editor mới 1 306 dòng thay 4 222).
- Tầng `model/ sim/ gen/ io/` không đụng DOM để Node test được và chạy trong worker. Bundler một file HTML, chỉ named export, tên top-level không trùng (`tools/check-modules.mjs`).
- **Template JSON của build là nguồn sự thật**, không phải lời mô tả. Chép template vào `data/`, khóa bằng test round-trip trùng từng byte. Tool bịa trường (frozen/locked, beltCapacity) vì không đọc spec và fixture trước.
- Cache kết quả đắt theo chữ ký đầy đủ (mọi override vào chữ ký), đổi thuật toán làm dịch điểm thì bump version cache (`CAL_NS`, `fh.cal.vN`), không thì tool sinh theo thang cũ âm thầm.
- Việc rẻ chạy ngay, việc đắt sau nút bấm (solver vét cạn tự chạy sau mỗi sửa làm tool lag 963 ms tới 2,8 s). Phân biệt "Chưa quét" với "Chưa kết luận".
- Tham số sinh là **trực tiếp**: đặt số thẻ ra đúng số thẻ, số hộp ra đúng số hộp, chọn đích danh màu. Lead bác điều khiển gián tiếp qua ô thời lượng. Thông số panel sinh đi theo level đang mở, sinh xong slider không trôi về điểm đo.
- Mọi đường sinh đi qua một hàm chung để luật trải nghiệm (số đẹp, mở màn thông, đuôi xả) không bị lách. Giữ source generator trong repo (game xoay pizza A chỉ còn bundle minify nên không cân bằng lại được).
- Designer giữ quyền với tham số nhìn thấy (lane, cỡ hộp, link, MaxCap, hình bàn), tool chỉ tự động phần thuật toán và phải nói ra khi tự thu hẹp yêu cầu. Validate chỉ cảnh báo vàng với sửa tay, không chặn.

## 3. Bốn tầng kiểm luôn kèm repo

| Tầng | Kiểm | Ví dụ |
|---|---|---|
| unit | luật lõi, bất biến, biên | `tests/core.test.js` khóa luật MaxCap |
| verify-shipped | round-trip trùng byte với template build, danh sách nhãn khớp ≥ ngưỡng, beam == exact | game bắn màu A ≥ 11/15, 15/15 beam == exact |
| verify-generator | đặt gì ra đúng nấy trên 6 ca, MAE bám đích < 7, max ≤ 15, sweep 0-100 | lệch TB 2,8 |
| verify-playtest | thang kỹ năng đơn điệu (mới > TB > giỏi), Easy nhỏ hơn hẳn Hard | 3 hồ sơ × 60 ván có seed |

Thêm: `npm run build` chạy đủ 4 tầng rồi mới gộp, `run.cmd` / `build.cmd` cho designer bấm đúp trên Windows, test bundle không có định nghĩa trùng, không `debugger`, không unlock-all.

## 4. Chuẩn editor Lead chấp nhận

Chuẩn tham chiếu bắt buộc đọc trước khi dựng tool mới: `game tile chữ A/game-tile-chu-a.html` (shell kiểu Photoshop) và `game-bi-drop-a/dist/index.html` ("lời giải có trước, level sinh sau").

- Một file HTML độc lập, không dependency ngoài, UI tiếng Việt, bấm đúp là chạy.
- Shell: menubar, options bar, tool rail có nhãn và phím tắt, dock trái điều hướng, canvas, dock phải thuộc tính, status bar, panel `<details>`, tooltip, undo/redo snapshot (một nét kéo = một bước undo), bộ level lưu localStorage có version và lưới backup giữ bản nhiều level nhất, batch CSV, bảng phím tắt.
- "Đơn giản như iPhone": ít control (50 xuống 15), một hành động chính mỗi vùng, biểu đồ thay số, chip màu thay tên màu, bôi chuột chọn nhiều ô, gõ số trực tiếp thay nút +/-, chuột trái tô, chuột phải xóa, zoom lăn chuột quanh con trỏ, thao tác từng vật thể (hàng loạt chỉ qua phím phụ).
- Canvas giống màn game thật (block trên, băng chuyền giữa, bóng dưới, dùng asset thật khi là Unity). Lead bác: bố cục ngang, cột cạnh nhau, mockup HTML thay asset thật, slider mặc định Windows, skin theo ảnh art ("quá xấu quay trở lại").
- Chế độ chơi thử: khung cố định (súng và slot không trôi khi bàn vơi), không nhồi cả bàn vào khung (phần xa bị cắt, phần lựa chọn thấy đủ), Gợi ý và Tự chơi giải tiếp từ thế cờ hiện tại, Hoàn tác, giới hạn hồi sinh, ghi kết quả chơi tay làm thang thứ ba cạnh cấu trúc và AI.
- Phân tích: chạy lời giải từng bước, bản đồ áp lực theo tiến độ, level kẹt thì "chạy tới chỗ kẹt", tách hai thông điệp "vẫn thắng được nhưng cần N tài nguyên" và "vét cạn chứng minh không thắng nổi với N".
- Biểu đồ cung và cầu theo màu (card so với bóng, đinh so với ong, mèo so với xe), mỗi cột một màu, nút sinh thêm cho màu thiếu, bỏ bớt màu thừa (có sàn, luôn chừa lối dựng lại).
- Nhập: dán, chọn file, kéo thả, tự nhận file cũ (bảng màu cũ, id 1-14) và báo đã đổi gì, ánh xạ chạy trước phép kiểm id, hỏi khi ghi đè cùng id, cảnh báo bản nhớ khác bản đĩa. Xuất: LevelList, level đơn, ColorLibrary, CSV, Zip, tự kiểm trước khi tải.
- Unity editor: canvas trong cửa sổ editor render bằng prefab thật qua camera riêng vào RenderTexture, tái hiện đúng chuỗi dựng runtime (cỡ đinh, dây Link), tra enum theo tên, cờ `handEdited` chống importer ghi đè, TEST một lần bấm với backup PlayerPrefs.

## 5. Tài sản tái dùng được (đường dẫn thật)

| Tài sản | Ở đâu | Dùng cho |
|---|---|---|
| Skill level-forge + assets/forge | `GitHub/game-ban-mau-a/.claude/skills/level-forge/` | game puzzle mới cần tool |
| Bundler một file + check-modules | `GitHub/game-ban-mau-a/tools/`, `GitHub/game-suy-luan-luc-giac-a/build.mjs` | mọi tool web |
| Worker pool + cache theo chữ ký + ladder | `GitHub/game-bi-drop-a/src/core/forge-core.js`, `level-worker.js` | sinh level đắt |
| Khung CSV đọc theo tên cột, batch update | `GitHub/game-bi-drop-a/src/batch/csv.js` | sản xuất nhiều level |
| Level Forge sort + probe núm + parity | `GitHub/game-sort-xe-a/tools/level-forge/` | game sort |
| Bộ tool game tile chữ A (author, build-levels, review-levels, retheme, verify-picture, difficulty-report) | `GitHub/game-tile-chu-a/tools/` | game word / tile |
| Bee Level Editor + AI độ khó (C# thuần, annealing, validator) | `GitHub/game-screw-to-ong-a` | game Unity screw/sort |
| check_curve.py | `GitHub/game-bi-drop-a/level_data/` | chấm curve PASS/FAIL |
| Sổ tay dựng Tool Level (artifact) | `claude.ai/artifact/GLMYtAg3UKiUWN7VPzRH51` | onboard người mới |

## 6. Lỗi im lặng hay gặp khi làm tool

- Chữ ký cache thiếu khóa, tham số CSV chỉ vào file xuất không vào bộ sinh, copy nông làm solver ăn mòn state, tham chiếu object mất sau JSON, `opt.x || default` với mảng rỗng.
- `<input type=range>` kẹp value khi max chưa nới, `hidden` bị `display:flex` đè, class `card` trùng class toàn cục, DOM order khác tap order (round-robin theo lane).
- Xuất pixel lớn kèm ô bị phủ: tool báo cân bằng, game thiếu đạn. Mô phỏng đúng cách engine đọc file.
- Hai dev server cổng 5173/5174 làm localStorage tách origin, "mất 5 level". Luôn nhắc đúng cổng, cổng riêng cho preview của Claude.
- Pane trình duyệt ẩn: rAF đóng băng, navigate cùng URL không reload, file:// là ảnh tĩnh. Kiểm bằng gọi hàm và số đo DOM qua http.
- Heredoc nuốt `\n` và backtick, in tiếng Việt lỗi cp1252. Ghi file bằng tool Write, script ở scratchpad, in ASCII.
