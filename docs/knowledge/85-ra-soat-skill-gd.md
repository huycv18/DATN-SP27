# Rà soát skill liên quan Game Design và viết GDD (20/10/2026)

Phạm vi quét: `~/.claude/skills` (kể cả synced), plugin cache, mọi repo GitHub trên máy, `game tile chữ A`, `game-bi-drop-a`. Tổng cộng khoảng 320 file SKILL.md, sau khi loại Unity MCP (game platformer A, 2 x 70 skill thao tác editor) và skill công cụ chung (pdf, xlsx, pptx, canva, figma, qt...), còn 4 nhóm liên quan phòng.

## 1. Bảng skill liên quan

### A. Skill Lead tự xây (ưu tiên dùng, đã qua thử lửa)

| Skill | Ở đâu | Làm gì | Đánh giá | Vai dùng |
|---|---|---|---|---|
| `studio-os` + 5 lệnh `/kickoff /sprint /report /retro /role` | `~/.claude/skills/studio-os`, đã cài vào game-tycoon-a, game-lan-quan-an-a, gds-clean | Bộ máy CPO 10 vai, kickoff giao game-designer viết `00-overview` + `10-core-loop`, template `gdd-system.md` 7 mục + "Lệch khỏi bản gốc" + "Câu hỏi mở" | Khuôn GDD markdown tốt nhất hiện có, tiếng Việt, luật đánh số, tham số bảng, biên ≥ 4. Thiếu: Summary ngắn để quét, bảng trạng thái, Game Feel, tiêu chí nghiệm thu đo được, mục "Hiện hành" (pacing.md phình 1 081 dòng) | GDM (tổ chức), systems-designer (template) |
| `prototype-game-nhanh` | `~/.claude/skills/synced/.../prototype-game-nhanh` | Ý tưởng -> bản chơi được một phiên, 15 level đo bằng bot, cổng QA | Chín nhất về phương pháp, Phase 1 "luật lõi" là một mini GDD ngầm nhưng không có file đầu ra chuẩn | prototyper, systems-designer (Phase 1) |
| `level-forge` | CHỈ trong `GitHub/game-ban-mau-a/.claude/skills/` (không có global) | 5 chỗ phụ thuộc game, hợp đồng 5 hàm, 4 tầng kiểm, selftest 22 phép | Tái dùng được ngay nhưng không chạy được ở repo khác vì chưa chép ra `~/.claude/skills` | level-tool-engineer, systems-designer (5 chỗ) |
| `order-image-production` | `GitHub/game-tile-chu-a/skills/` | Sản xuất ảnh order WebP từ danh sách từ | Không phải GD, thuộc pipeline nội dung | level-designer (nội dung), narrative-designer |
| `unity-mcp-setup`, `unity-mcp-skill` | `~/.claude/skills` | Cài và điều khiển Unity qua MCP | Hạ tầng cho level-tool-engineer khi tool là Unity editor | level-tool-engineer |
| `tach-nen-icon`, `bao-cao-tuan-igoal` | synced | Tách nền icon, báo cáo tuần | Ngoài phạm vi GD | - |

### B. Framework ngoài: Claude-Code-Game-Studios (73 skill, tiếng Anh)

| Skill | Làm gì | Đánh giá cho phòng |
|---|---|---|
| `brainstorm` | Ý tưởng từ zero qua 4 phase, hỏi gu và cảm xúc | Không hợp: Lead là designer chuyên nghiệp, đã "bỏ qua đi" phần khám phá |
| `map-systems` | Tách concept thành hệ thống, phụ thuộc, thứ tự thiết kế, `systems-index.md` | Hữu ích cho game nhiều hệ thống (tycoon, sim), Lead từng thấy 17 hệ thống "quá vụn", gộp còn 14 |
| `design-system` | Viết GDD một hệ thống theo 8 mục, đọc registry entity, hỏi duyệt từng mục, ghi tăng dần, có chế độ retrofit điền mục thiếu | Skill viết GDD mạnh nhất đang có. Nhược: tiếng Anh, hỏi từng section (Lead muốn ít vòng), gắn cứng `design/gdd/`, cần `game-concept.md` và `systems-index.md` trước |
| `quick-design` | Spec nhẹ cho tuning / tweak / addition dưới 4 giờ | Khớp với "việc nhỏ đi tắt" của phòng, đáng mượn khung phân loại |
| `design-review` | Review một GDD: đủ 8 mục, mâu thuẫn nội bộ, implement được, log review | Đáng mượn checklist, phòng chưa có bước review GDD độc lập |
| `review-all-gdds` | Đọc mọi GDD cùng lúc: mâu thuẫn chéo, stale reference, dominant strategy, pillar drift | Đáng mượn khi project có từ 5 hệ thống, đã bắt được mâu thuẫn thật ở game xoay pizza A (3 hay 5 chỗ ngồi) |
| `propagate-design-change` | GDD đổi thì quét ADR bị ảnh hưởng | Ý "đổi luật thì mọi nơi đổi theo" trùng nguyên tắc 6 của phòng, ta áp cho engine, solver, tool, tutorial, thang độ khó thay vì ADR |
| `balance-check` | Đọc data và GDD tìm outlier, dominant strategy | Yếu hơn phương pháp sim của ta (không chạy bot, không p10/p50/p90), chỉ mượn danh sách lỗi cần soi |
| `playtest-report` | Template báo cáo playtest và phân tích ghi chú thô | Đáng Việt hóa cho gd-qa (phòng chưa có mẫu playtest người thật) |
| `ux-design`, `ux-review` | Spec UX và review | Trùng ux-onboarding-designer, mượn checklist |
| `team-level`, `level-design-document.md` | LDD cho level 3D (critical path, encounters, pacing chart) | Khuôn cho game hành động, puzzle casual của ta dùng bảng level + curve thay LDD |
| `reverse-document` | Viết doc từ code có sẵn | Hợp việc "update GDD cho sản phẩm đã có" (game tile drop A) nếu có source |
| `consistency-check`, `vertical-slice`, `prototype`, `art-bible`, `create-epics/stories` | Vận hành studio | Thuộc CPO, không thuộc phòng GD |
| Template `game-design-document.md` | Summary, Quick reference (layer, priority, deps), Overview, Player Fantasy, Detailed Design (Core Rules, States and Transitions, Interactions), Formulas (biến, range, nguồn), Edge Cases (bảng scenario-behavior-rationale), Dependencies hai chiều, Tuning Knobs (Safe Range, hệ quả tăng/giảm), Visual/Audio Requirements, Game Feel (Feel Reference và anti-reference), Acceptance Criteria | Mục đáng mượn: Summary, States and Transitions, Tuning Knobs có Safe Range, Game Feel reference, Acceptance Criteria đo được |
| Rule `design-docs.md` | 8 mục bắt buộc, công thức có ví dụ tính, biên nói rõ, phụ thuộc hai chiều, viết tăng dần | Đáng đưa vào Definition of done của gdd-writer |

### C. Plugin chung (claude.ai)

| Skill | Làm gì | Đánh giá |
|---|---|---|
| `product-management:write-spec` | PRD: problem, goals, non-goals, user stories, P0/P1/P2, metrics | Là PRD phần mềm, không phải GDD, dùng được cho "kế hoạch update" hoặc đề xuất tính năng meta, không dùng cho luật chơi |
| `product-management:product-brainstorming`, `brainstorm` | Sparring partner, assumption testing | Hợp vai phản biện của systems-designer (Ưu / Nhược / Thay thế rẻ hơn), không tạo file |
| `product-management:competitive-brief` | Brief đối thủ | Khởi điểm cho reference-analyst, cần thêm phần cơ chế, mốc mechanic, monetization quan sát |
| `product-management:synthesize-research`, `metrics-review` | Gom ghi chú thành insight, đọc metric | Khởi điểm cho product-analyst và gd-qa (playtest) |
| `design:design-critique`, `ux-copy`, `design-handoff`, `user-research` | Critique màn hình, viết microcopy, handoff | ux-onboarding-designer và narrative-designer dùng khi review màn hình thật |
| `doc-coauthoring` | 3 giai đoạn: gom ngữ cảnh, dựng từng mục, test người đọc mới | Quy trình chung tốt, bước "test với Claude không có ngữ cảnh" đáng áp cho GDD trước khi giao dev |
| `docs` (Claude Docs), `google-workspace`, `xlsx` | Tạo doc / sheet | Lead dùng Google Sheet có sẵn do team giữ, sửa ô phải qua browser (xem knowledge 50). `google-workspace` chỉ hữu ích nếu sheet thuộc tài khoản có quyền API |

### D. Có trong repo nhưng không phải GD

Unity MCP skill pack (game platformer A, 140 skill thao tác editor), `ipixel/verify` (Playwright drive), `game-khoi-a` Unity LevelDesign SKILL (tool nội bộ).

## 2. Riêng việc viết GDD: 5 khuôn đang cùng tồn tại

| Khuôn | Dùng ở | Mục | Điểm mạnh | Điểm yếu |
|---|---|---|---|---|
| studio-os `gdd-system.md` | game-tycoon-a (11 hệ thống), game-lan-quan-an-a | Mục đích, Luật, Tham số, Biên, Yêu cầu engineer, Yêu cầu art/UI/audio/text, Đo thành công, Lệch khỏi bản gốc, Câu hỏi mở | Tiếng Việt, ép luật khẳng định và tham số bảng, có mục "Lệch" cho game bám tham chiếu | Không có Summary, không bảng trạng thái, không Game Feel, không tiêu chí nghiệm thu, file tích lũy kiểu nhật ký |
| CCGS GDD template | game xoay pizza A | 8 mục + Summary + Game Feel + AC + registry | Chặt, công thức có ví dụ, Safe Range, nghiệm thu đo được | Tiếng Anh, nặng, hỏi từng mục |
| GDD markdown "sống cùng code" | game tile chữ A (`GDD-game-tile-chu-a.md`, 13 mục, 472 dòng) | Tổng quan, Core loop, Luật chi tiết (nguồn chân lý), Win/Lose, Level design và curve, Hệ độ khó và solver, Art, VFX, SFX, Game feel, Content pipeline, Biến thể, Ngoài phạm vi | Gắn ngày và "chủ dự án chốt", mỗi VFX/SFX một dòng bảng, DoD bắt GDD đổi cùng code | Một file lớn, không tách hệ thống |
| Mini GDD prototype | game phục vụ Order A (`GDD_v0.2`, 11 mục + prompt tạo prototype) | Overview, Core loop, luật bàn, order, bộ đệm, win/lose, mechanic đặc biệt, resolution order, difficulty progression, visual/UX, acceptance criteria | Vừa đủ để prototyper chạy skill, có "Resolution Order" (thứ tự xử lý sự kiện) rất hữu ích cho engine | Chưa có bản đồ mechanic theo level và trục độ khó |
| Google Sheet của studio | game tile chữ A, game tile drop A, game chữ drop A | 6 tab: Gameplay, Main Task, Level Curve, Level Data, Tutorials, Asset & Màn hình | Là thứ team art/dev/SFX thật sự đọc, Lead duyệt ở đây | Không có skill nào sinh hoặc đồng bộ nó, thao tác ô qua browser thủ công, luật định dạng chỉ nằm trong memory |

Kết luận: **không có skill nào trên máy viết GDD theo cách phòng cần**. `design-system` của CCGS gần nhất nhưng sai ngôn ngữ, sai nhịp và sai đích (Lead cần Sheet cho team và markdown cho prototype, không cần hỏi duyệt từng mục). `write-spec` là PRD. `doc-coauthoring` chỉ là quy trình.

## 3. Khoảng trống và khuyến nghị

| Ưu tiên | Việc | Lý do | Vai |
|---|---|---|---|
| P1 | Viết skill `/gdd-v1` của phòng: một lệnh, ba đầu ra theo loại (`he-thong` markdown theo template của ta, `mini` cho prototype theo khuôn game phục vụ Order A + bản đồ mechanic + trục độ khó, `sheet` sinh TSV/HTML 6 tab chuẩn của studio kèm checklist dán), bước hỏi đáp chốt luật một lượt từ demo, soát định dạng (gạch dài, emoji, từ của Lead, số trong văn xuôi) | Việc lặp ở mọi sản phẩm, hiện mỗi lần làm lại từ memory | gdd-writer, systems-designer |
| Đã làm 20/10/2026 | Skill `/gdd-v1` tại `.claude/skills/gdd-v1/` (SKILL.md, `references/`, `templates/`, `scripts/soat.mjs` và `scripts/sheet-html.mjs`), ca thử quân băng game tile chữ A ở `.claude/skills/gdd-v1/examples/vi-du-vat-dong-bang/` (ba loại, soát 0 lỗi) | Dòng trên | GDM |
| P1 | Chép `level-forge` lên `~/.claude/skills/level-forge` (giữ nguyên assets và selftest) | Đang kẹt trong repo game-ban-mau-a | level-tool-engineer |
| P1 | Cập nhật `docs/process/templates/gdd-he-thong.md`: thêm Summary 2-3 câu, bảng Trạng thái và chuyển tiếp, Game Feel (tham chiếu cảm giác và phản tham chiếu), Tiêu chí nghiệm thu đo được, Safe Range cho tham số | Mượn phần tốt của CCGS, giữ tiếng Việt và nhịp của ta | GDM (đã làm trong lần rà soát này) |
| P2 | Skill `/gdd-review`: checklist của `design-review` + mâu thuẫn chéo của `review-all-gdds` + bước "đọc bằng Claude không ngữ cảnh" của doc-coauthoring, đối chiếu GDD với DECISIONS và với build (nhãn, công thức, từ) | Phòng chưa có review thiết kế độc lập, code có review mà GDD không | systems-designer, gd-qa |
| P2 | Việt hóa và rút gọn `playtest-report` của CCGS thành template playtest người thật (bối rối / chán / vui theo level và bước tutorial) | "Không ai đo vui" | gd-qa, product-analyst |
| P2 | Skill `/gdd-sheet-sync`: đọc tab qua `gviz` CSV, diff với file level JSON và DECISIONS, sinh TSV sửa | Lead tự sửa sheet song song, đồng bộ tay dễ sai | gdd-writer, GDM |
| P3 | Mượn `map-systems` cho game nhiều hệ thống (tycoon, sim), giữ ngưỡng 8-14 hệ thống | Tránh "quá vụn" | systems-designer |
| P3 | Khung phân loại `quick-design` (tuning / tweak / addition / new small) cho việc đi tắt | Quyết nhanh việc nào cần GDD | GDM |
| Không dùng | CCGS `brainstorm` (hỏi gu người mới), `write-spec` cho luật chơi, Claude Docs cho GDD team (team đọc Sheet) | Sai đối tượng hoặc sai đích | - |

## 4. Nguyên tắc chọn skill cho một việc GDD

1. Prototype mới: Phase 1 của `prototype-game-nhanh` + mini GDD (khuôn game phục vụ Order A) + bản đồ mechanic. Không viết Sheet.
2. Hệ thống trong game đang làm: template `gdd-he-thong.md` của phòng, mỗi hệ thống một file, mục "Hiện hành" ở đầu.
3. Sản phẩm đưa cho team art, dev, SFX: Sheet 6 tab chuẩn của studio, nội dung soạn ở markdown rồi dán, luật định dạng ở knowledge 50.
4. Thay đổi nhỏ: khung quick-design, ghi vào DECISIONS và dòng tương ứng của GDD, không mở file mới.
5. Trước khi giao dev: review theo checklist design-review + đối chiếu DECISIONS, đổi luật thì liệt kê nơi đổi theo (engine, solver, tool, tutorial, thang độ khó, Sheet).
