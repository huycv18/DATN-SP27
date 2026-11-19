# Prototype nhanh: từ ý tưởng tới bản chơi được trong một phiên

Nguồn: skill `prototype-game-nhanh` v2 (rút từ game-suy-luan-luc-giac-a, game sort giao hàng A, game bán hàng A, game xoay pizza A, Bến Xe, game sort tàu A), game phục vụ Order A (áp dụng đầy đủ nhất), game sort xe A, game phá tàu A.
Skill gốc: `~/.claude/skills/synced/*/prototype-game-nhanh/SKILL.md`.

## 1. Hợp đồng đầu ra

1. Bản chơi được đầu tiên giao trong cùng phiên. Vòng sau = vặn config + đo lại + build lại.
2. Game feel thật (tween, VFX, SFX, nhạc), tutorial, màn thắng/thua, responsive mobile dọc 390×844 và desktop.
3. Không bug: 0 lỗi console, bot thắng 15/15 qua UI thật, fuzz không crash.
4. 1 mechanic lõi + 2-4 biến thể dàn theo level, không nhồi nhiều mechanic nông.
5. 15 level, độ khó tăng rõ và đo được bằng số. Khó do phải tính trước, không do may rủi, thông tin giấu không suy ra được, hay nút nhỏ.

## 2. Bốn nguyên tắc

Logic trước, đồ họa sau. Chứng minh bằng máy, không bằng cảm tính. Một file HTML chạy được hơn tài liệu đẹp. Mỗi vòng phản hồi = vặn nút + đo lại + build. Không refactor lớn khi Lead đang đợi.

## 3. Các phase

| Phase | Việc | Điểm chốt |
|---|---|---|
| 0 Chốt ý tưởng | tối đa 1 câu hỏi (mechanic lõi + theme) | mặc định mobile dọc, 15 level mở sẵn, Undo giới hạn |
| 1 Luật lõi | 2-3 luật vàng, thao tác là khẳng định, thắng/thua dứt khoát kể cả ca tranh cãi, cam kết với người chơi, deterministic, bản đồ mechanic 15 level | nói sớm ràng buộc vật lý của luật (lục giác + hai mèo không kề thì số tối đa là 3) |
| 2 Engine + solver headless | `rng` seed (mulberry32 + FNV-1a), `config` một chỗ, `rules` thuần trả `{state, events}`, `invariants`, `solver` ba phán quyết, `bots`, `metrics`, `generator` sinh ngược | solver theo loại game: BFS/A*/IDA* cho puzzle lượt, theo mẫu suy luận cho puzzle suy luận (lời giải duy nhất chưa đủ), bot có độ trễ phản xạ cho realtime |
| 3 Thiết kế 15 level bằng số | pool 300-2 000 ứng viên mỗi bậc, chọn trúng khoảng mục tiêu, bake `LEVELS` kèm `solution[]`, `metrics`, `seed` | không hạ chuẩn âm thầm, luật có trần thì báo kèm số, bake offline vì điện thoại chậm 3-5 lần |
| 4 UI một file | một object `Game`, một vòng rAF + tween manager, input state machine, view chỉ đọc `events[]`, render theo dirty flag, `window.__game` cho bot QA, localStorage có version | dark mode đủ token, vùng chạm ≥ 44 px, hủy press khi pointerup rơi ngoài, `visibilitychange` pause |
| 6 Cổng QA (trước polish) | node --test: 15/15 solvable + replay thắng, metrics trong khoảng, fuzz 2 000 chuỗi × 15 màn, undo deep-equal, determinism. Playwright: 0 lỗi console, autoplay qua UI thật 15/15, tutorial, monkey 500 tap, luồng thua rồi thử lại, reload giữ tiến độ, viewport 340/390/1024/1280/1600, âm thanh trước gesture không lỗi, nhãn UI khớp config, grep bundle | QA fail thì sửa và chạy lại toàn bộ cổng |
| 5 Polish | tutorial có kịch bản (gate input, sai thì toast không trừ mạng) -> feedback khi đúng -> SFX -> cảnh báo sắp thua -> màn thắng -> nhạc -> responsive desktop | không vẽ lại icon/mascot/logo game khác |
| 7 Graduate | tách ESM + `build.mjs` (~130 dòng) ghép một IIFE, tên top-level duy nhất, side effect chỉ ở `main.js`, `node --test`, generator và metrics đi kèm repo | page-load check sau build trước khi tin screenshot |

## 4. Âm thanh và hình

- SFX: ZzFX Micro nhúng, mỗi SFX một dãy tham số trong `config.js`, tiếng thật: Howler audio sprite base64, nhạc: Tone.js Transport. Mở audio ở gesture đầu, trước đó no-op. Cao độ SFX tăng theo combo.
- Không có công cụ sinh ảnh AI khả dụng thì vẽ icon bằng SVG/Canvas trong code, hoặc Three.js khi game thật cần 3D (game phục vụ Order A v1.0 bake ảnh UI từ mô hình 3D, instancing giảm draw call 903 xuống khoảng 200).

## 5. Checklist game feel Lead chấp nhận (game phục vụ Order A, Meow, game-suy-luan-luc-giac-a)

- Nhấn giữ xem trước ô bị chiếm. Chạm là áp dụng ngay, hiệu ứng chạy song song.
- Combo tăng cao độ SFX và thang 7 bậc (cỡ chữ, glow, hạt, màu) tăng từ bậc 1 để không giật ở bậc 3.
- Lời khen "sạch đĩa", cảnh báo sớm khi chỉ còn 1-2 lựa chọn, nhân vật đổi mặt theo trạng thái, nhạc dày lên theo áp lực.
- Chuyển động có logic đời thực: món bay vòng cung cao, xoay, đáp vào thớt chứ không vào đầu, đĩa dồn có gia tốc và nảy hai nhịp, khách quay lưng rời đi rồi khách mới đi vào, không "pop".
- "Loop" trong tên phải có nghĩa trong gameplay: món phải thật sự chạy tới khách.
- Mẫu thua có cứu: băng chuyền đầy thì đếm ngược 5 s, màn nhấp nháy đỏ ở mép không phủ kín, giải tỏa thì dừng, hết giờ thì thua. Đường cứu là Undo hoặc Ads ngay trên đồng hồ. Luật thua duy nhất, không nhãn phụ mâu thuẫn.
- Feedback "brag" cuối màn: tỉ lệ vượt màn theo seed, IQ +N.
- Không khóa input trong lúc animation dài (Meow: 34% thời gian không chạm được -> 0%).

## 6. Lỗi cấm lặp lại

- Solver/generator chạy trên main thread lúc vào màn (giật 0,7-1,5 s). Bake offline.
- `setTimeout` lồng nhau + cờ busy (lệch nhịp, double-apply). Một vòng rAF + tween manager + input state machine.
- Render lại `innerHTML` mỗi frame. Render theo dirty flag.
- Không có solver, chỉ bot greedy (game xoay pizza A): không chứng minh được màn giải được.
- Nhãn UI lệch code ("12 màn" mà có 10). Mọi nhãn đọc từ config, có test.
- Code debug sót (unlock all, booster tự cấp lại). Một cờ `DEV`, test grep.
- SVG gradient id trùng giữa nhiều SVG. Prefix duy nhất.
- Booster sửa thẳng level data đã cache. `Object.freeze`, state luôn clone.
- Hàm/CSS trùng tên trong file lớn. Test bundle không định nghĩa trùng.
- Generator không đi kèm file hoặc chỉ còn bundle minify. Luôn giữ source.
- Nhiều phiên sửa cùng engine làm luật thua bị viết đè 3 lần. Một phiên sở hữu engine và cân bằng. Phiên khác báo trước khi đụng.
- Sửa tay file level đã bake thay vì chạy bake làm test determinism fail.
- Preview của Claude chiếm cổng của Lead (8765). Cổng riêng.

## 7. Báo cáo cuối

1. Link hoặc file bản chơi. 2. Mechanic + biến thể dạy ở màn nào. 3. Bảng độ khó 15 màn (L*, Wr, Wg, Wl, C, F). 4. Kết quả cổng QA (số test pass). 5. Đánh đổi và giới hạn còn lại, nói thẳng. Nhắc Lead chơi thử L13-15: bot đo được độ khó logic, cảm giác khổ sở có đáng không cần người thật xác nhận.
