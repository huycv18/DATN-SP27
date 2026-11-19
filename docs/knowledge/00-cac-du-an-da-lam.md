# Danh mục dự án đã làm (nguồn tri thức của phòng)

Rút từ 33 thư mục project Claude Code (07/2026 - 20/10/2026). Chi tiết từng nhóm ở `nguon/`.

| Dự án | Thể loại | Nền tảng / repo | Trạng thái | Tri thức chính | Nguồn |
|---|---|---|---|---|---|
| game tile chữ A | Tile-match mạt chược + đánh vần, Picture Order | HTML5 prototype + editor, production Unity. `GitHub/game-tile-chu-a`, thư mục `game tile chữ A` | 50 level đang chơi, 3 mechanic (úp L6, băng L16, Link L26), GDD Sheet | Thang độ khó v2 7 thành phần, construct-first, curve 50 level 16 đỉnh, thẩm mỹ cụm game tile sort B, luật chất lượng soi mắt, GDD Sheet chuẩn, onboarding | `nguon/game-tile-chu-a.md` |
| game tile drop A / game chữ drop A | Tile-match trọng lực | Sản phẩm có sẵn, GDD Sheet, `GitHub/game-tile-drop-a` | Kế hoạch update xanh/đỏ | Hỏi đáp chốt luật từ demo, hàng chờ 7 = 5 + 2 ads, revive 900 coin, Lock xích, độ nhận biết ảnh là trục khó | `nguon/game-tile-chu-a.md` |
| game bắn màu A | Puzzle bắn màu, hộp bóng | Tool web 1 file, game Unity | Tool chín 36 module, 15 level shipped | Skill level-forge (5 chỗ), 4 tầng kiểm, trục khó do Lead định nghĩa, nhịp trong ván, số đẹp, luật súng claim | `nguon/level-tools.md` |
| game bi drop A | Mosaic clearing từ tranh pixel | Tool Vite + 1 file, game Unity | 50 level, luật MaxCap 80 chốt 13/08 | Thang pool fit bot +0,81, cap-invariant, cỡ hộp là đòn bẩy, Lock & Key 4x4, worker pool, ladder | `nguon/level-tools.md` |
| game sort xe A | Sort / water-sort reskin | Web canvas, `GitHub/game-sort-xe-a` | 15 level v2, Level Forge | Thang 4 bậc người chơi, sức chứa 7 đo 60 bàn, thứ tự xe là đòn bẩy, In/Out, probe núm, parity | `nguon/sort-prototype.md` |
| game screw tổ ong A | Screw/sort tổ ong | Unity 6, `GitHub/game-screw-to-ong-a` | Production 50 level, Bee Level Editor + AI độ khó | Editor dùng prefab thật, mô hình C# thuần + 3 hồ sơ + annealing + validator Play mode, luật khóa/chìa/ẩn | `nguon/sort-prototype.md` |
| game screw tổ ong B | Biến thể game screw tổ ong A | Web 1 file | 30 level | Editor dùng thuật toán thật của game, độ khó slider 0-4 trần cứng | `nguon/sort-prototype.md` |
| game suy luận lục giác A | Puzzle suy luận lục giác | Web 28 module, `GitHub/game-suy-luan-luc-giac-a` | Prototype có tutorial | Solver theo mẫu suy luận, phân tích 590 bước, blocker phải đánh vào nguồn khó, màn kết "brag" | `nguon/sort-prototype.md` |
| game phục vụ Order A | Puzzle sushi băng chuyền | Web, Three.js, `GitHub/game-phuc-vu-order-a` | v1.2, 15 level bake | Pipeline prototype đầy đủ, TARGETS theo bậc, ghế mở bằng ads đo bot, luật thua 5 s, game feel, 4 phiên song song | `nguon/misc-research.md` |
| game xoay pizza A (CCGS) | Pizza xoay + cột khách | Phaser + TS, `GitHub/Claude-Code-Game-Studios` | MVP | Framework CCGS 49 agent (so sánh), ranh giới core/scenes, ví dụ xấu: không solver, mất source generator | `nguon/misc-research.md` |
| game tycoon A | Tycoon bám Game Dev Story | Web TS, `GitHub/game-tycoon-a` | 9 sprint, T-191, 1 338 test | Mô hình CPO + 10 agent (skill studio-os), cân bằng bằng sim (mốc có nguồn, núm gap, p10/50/90), fidelity audit, khoảng trống vai thiết kế | `nguon/game-tycoon-a-studio.md` |
| game lặn quán ăn A | Lặn + quán ăn | Unity, `GitHub/game-lan-quan-an-a` | Kickoff GDD v0.1 | Phân tích tham chiếu qua nguồn công khai với nhãn tin cậy, ranh giới IP, economy 3 kịch bản, FTUE 2 chạm | `nguon/misc-research.md` |
| game RTS A | RTS | Unity, `GitHub/game-rts-a` | Sprint 06 | Nhịp trận đo bằng phát bắn, bot preset, phối hợp đa agent với Codex (contract version, UNITY_LOCK) | `nguon/misc-research.md` |
| game nối ống A | Puzzle nối ống | Web + editor, `GitHub/game-noi-ong-a` | Editor xuất JSON Unity | Editor UX: undo cấp bộ, hỏi khi trùng id, đổi màu hàng loạt, Hidden lockZones | `nguon/misc-research.md` |
| game platformer A | Platformer 2D kể chuyện | Unity 6 | Đánh giá kiến trúc, vũ khí/rương | Cheat giữ phản ứng bị đánh, Unity serialize đè default | `nguon/misc-research.md` |
| game phá tàu A | Phá tàu 3D | Web Three.js | 9 màn | Curve 3 trục độc lập, HP cướp biển, từ chối chép nhạc | `nguon/level-tools.md` |
| game khối A / game-khoi-a | Puzzle khối | Unity editor tool | UPM package | Đóng gói tool level thành package | `nguon/level-tools.md` |
| game khối B | Block puzzle | Phaser + Three | Hybrid renderer | "Build" = build + commit | memory |
| Thriving City Song, HoI4 | Việt hóa, mod | Unity bundle, Paradox | Patch | Reverse-engineer dữ liệu, đếm thô phóng đại, thứ tự load | `nguon/misc-research.md` |
| ipixel | Tool pixel art | React/TS | Đồng bộ màu batch | Tự chọn số màu theo đường cong sai số | `nguon/misc-research.md` |
| portfolio của Lead | Portfolio | Next.js | One-page | Hồ sơ Lead | memory |

Skill đã có trên máy: `studio-os` (~/.claude/skills), `prototype-game-nhanh` (synced), `level-forge` (chỉ trong repo game-ban-mau-a), `unity-mcp-setup`, `order-image-production` (game tile chữ A), `tach-nen-icon`.
