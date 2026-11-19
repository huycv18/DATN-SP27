# Tổ chức phòng Game Designer

> Ghi chú 2026-11-19: phòng đang làm game indie PC Space Salvage, không phải Puzzle mobile. Bộ vai đang bật, phiên và tab Sheet mỗi vai giữ: `CLAUDE.md` mục "Hệ thống phiên". Phần dưới giữ nguyên lịch sử khung gốc.

## 1. Sơ đồ

```
Lead  <->  GDM (phiên chính, Game Designer Manager)
                               |
   +---------------------------+------------------------------+
   |  Lõi thiết kế (Opus)          |  Thiết kế bổ trợ (Sonnet)          |
   |  gd-systems         |  gd-economy          |
   |  gd-level    |  gd-ux             |
   |  gd-tools     |  gd-research             |
   |                               |  gd-qa (độc lập, nghiệm thu)   |
```

Lead chỉ nói với GDM. GDM không tự làm việc chuyên môn dài (GDD, tool, bộ level). GDM giao brief, nghiệm thu, tổng hợp, ghi DECISIONS. Việc một vài tool call (trả lời câu hỏi từ file, sửa một ô) GDM làm thẳng.

## 2. Bảy role và vì sao gộp như vậy (20/10/2026, từ 13 role)

Nguyên tắc gộp: hai vai dùng chung tri thức và chung file thì gộp, vì tách ra mỗi việc tốn thêm một lượt bàn giao. Vai nghiệm thu giữ độc lập với người làm. Phù hợp nhịp "tối đa 3 việc song song".

| Role mới | Gộp từ (tên cũ) | Vì sao gộp được | Bằng chứng cần có vai này |
|---|---|---|---|
| gd-systems | systems-designer + gdd-writer | Người chốt luật là người viết luật. GDD Sheet chỉ là luật đã chốt trình bày cho team | Luật đổi nhiều lần vì không chốt ra giấy (MaxCap 3 lần, luật thua game phục vụ Order 3 lần). Tool bịa cơ chế khi không có spec. GDD Sheet có cấu trúc và luật định dạng riêng của Lead |
| gd-level | level-designer + difficulty-analyst | Cùng một vòng: đặt curve, dựng, đo bot, soi mắt. Level designer phải mạnh số nên dùng Opus và có Bash | Thang độ khó sai định nghĩa (bấm bừa vẫn qua mà điểm 70). Máy chấm đạt 4 lần mà soi mắt đều lỗi. game-designer không có Bash nên không chạy được sim |
| gd-tools | level-tool-engineer + prototyper | Cả hai viết engine headless, solver, generator, build một file. Khác nhau chỉ ở đích | Mọi game của studio đều cần tool. Skill prototype-game-nhanh (nếu máy có) và level-forge cùng khung |
| gd-economy | economy-meta-designer + liveops-designer | Booster, revive, ads, sự kiện, loop sau bộ chính là một mạch. Liveops là economy theo thời gian | Ghế mở bằng ads, revive 900 coin, ô "+" lặp ở mọi sản phẩm. studio-os bỏ monetization nhưng đây là việc thật ở studio |
| gd-ux | ux-onboarding-designer + narrative-designer | Tutorial, text box, strings, 5 trạng thái luôn đi đôi. Trước đây hai vai đi hai vòng cho mỗi tính năng | FTUE không có chủ ở game-tycoon-a. Text tràn nút. Dải khen đoán sai phong cách |
| gd-research | reference-analyst + product-analyst | Cùng là người đi tìm số có nguồn: game tham chiếu, benchmark, event, bot so với người | Phân tích tham chiếu cỡ L dồn cho game-designer. "Không ai đo vui". Event tracking không có spec |
| gd-qa | giữ nguyên | Nghiệm thu phải độc lập | QA ĐẠT mà Lead thấy lỗi ngay. Bot và người lệch nhau cần truy nguyên |

Vai thứ tám `gd-algo`: nghiên cứu, thử bằng số và đặc tả thuật toán (sinh level, thứ tự rơi, phân bổ tile, DDA, solver). Không dựng tool UI (gd-tools), không dựng bộ level (gd-level). Playbook `docs/playbooks/gd-algo.md`. Opus.

Tên gọn (Lead chốt): tiền tố chung `gd-` cộng một từ, trùng tên phiên vai.

gd-manager theo sản phẩm: mỗi sản phẩm một phiên `gdm-<slug>` mở trong `projects/<slug>/`, vai và ranh giới với GDM phòng ở `docs/org/gd-manager.md`. Lead nói việc của sản phẩm với gdm-<slug>. GDM phòng giữ việc chung nhiều sản phẩm và các file dùng chung. Phiên vai `gd-<vai>` vẫn dùng chung cho mọi sản phẩm (thay cho đoạn dưới).

Phiên vai theo sản phẩm (đã thay bằng phiên vai dùng chung): mỗi sản phẩm một bộ phiên, tên `gd-<vai> · <slug>` (ví dụ `gd-level · <slug>`). Agent, playbook, skill dùng chung. Ngữ cảnh và quyết định của sản phẩm nằm trong `projects/<slug>/` (có `DECISIONS.md` riêng). Phiên vai không nhận việc của sản phẩm khác. Việc chung của phòng giao phiên đang rảnh hoặc subagent.

| Tên gọn hiện hành | Tên dài trước đó (cùng ngày) |
|---|---|
| gd-systems | systems-gdd-designer |
| gd-level | level-difficulty-designer |
| gd-tools | tools-prototype-engineer |
| gd-economy | economy-liveops-designer |
| gd-ux | ux-narrative-designer |
| gd-research | research-data-analyst |
| gd-qa | design-qa |

Tài liệu cũ (DECISIONS, bài làm bài kiểm lần 1 và 2, bản sao Codex) còn nhắc tên dài hoặc tên 13 role thì tra hai bảng trên.

Cái giá của việc gộp: gd-level chạy Opus (đắt hơn level-designer Sonnet cũ). gd-systems dùng lượt Opus cho việc định dạng Sheet. Khi dự án có khối lượng level rất lớn có thể tách lại level-designer chạy Sonnet theo bảng curve có sẵn.

Vai không có việc thật trong một dự án thì không gọi (game tycoon không cần phần dựng level, prototype chưa cần Sheet).

## 3. Sở hữu file

| Vai | Được ghi | Không được ghi |
|---|---|---|
| gd-systems | `projects/<slug>/gdd/` (luat-loi, ban-do-mechanic, he-thong/, 5-cho-tool, mini-gdd, sheet/*.tsv|html) | tool, level, sheet trực tiếp |
| gd-level | `projects/<slug>/do-kho/`, `projects/<slug>/levels/`, file level trong repo game khi brief chỉ định, script đo | luật lõi, hình bàn Lead vẽ, tool |
| gd-tools | tool và prototype trong repo game (`tools/`, `src/`, tests, build), `docs/tool/` | luật lõi, level đã ship (trừ migrate có backup) |
| gd-economy | `projects/<slug>/gdd/economy-meta.md`, `projects/<slug>/liveops/` | luật lõi, level |
| gd-ux | `projects/<slug>/ux/`, `projects/<slug>/strings/` | luật, level |
| gd-research | `projects/<slug>/tham-chieu/`, `projects/<slug>/analytics/` | mô hình độ khó (chỉ đề xuất) |
| gd-qa | `projects/<slug>/qa/` | không sửa level, tool, code |
| gd-algo | `projects/<slug>/thuat-toan/` | luật lõi, tham số nhìn thấy, tool, level, Sheet |
| GDM | `production/*`, `docs/*`, `.claude/*`, `projects/<slug>/README.md`, dán Sheet khi gd-systems đã soạn | |

## 4. RACI theo loại việc

| Việc | R (làm) | A | C (hỏi) | I (báo) |
|---|---|---|---|---|
| Chốt luật lõi | gd-systems | Lead | level-difficulty, ux-narrative | mọi vai |
| GDD (markdown, Sheet) | gd-systems | GDM | economy-liveops, ux-narrative | Lead |
| Mô hình độ khó, curve, bộ level | gd-level | GDM | Lead (định nghĩa), systems-gdd | tools-prototype, gd-qa |
| Tool dựng level, prototype | gd-tools | GDM | systems-gdd (5 chỗ), level-difficulty (trục) | gd-qa |
| Booster, ads, revive, sự kiện | gd-economy | GDM | level-difficulty (đo bot), research-data | systems-gdd |
| Tutorial, FTUE, strings | gd-ux | GDM | systems-gdd, level-difficulty | gd-qa |
| Tham chiếu, event, KPI | gd-research | GDM | Lead (chọn game), level-difficulty | systems-gdd |
| Nghiệm thu | gd-qa | GDM | người làm | Lead |

## 5. Vòng đời một việc

1. Lead nêu yêu cầu (tin ngắn, có thể kèm ảnh, video, JSON, link sheet). GDM đọc hết đính kèm trước khi hỏi.
2. GDM phân loại: câu hỏi (trả lời từ file) / việc nhỏ (làm thẳng) / việc có pipeline (tạo task `GD-###` trong `production/BACKLOG.md`, giao brief).
3. Agent làm, ghi file sớm, trả `## Báo cáo cho GDM`.
4. GDM mở file kiểm chứng. Việc có đầu ra nhìn thấy (level, tool, prototype) đi qua gd-qa trước khi báo Lead.
5. GDM báo Lead theo mẫu. Cần Lead quyết thì một câu hỏi kèm phương án nghiêng về.
6. Quyết định ghi ngay khi quyết (ngày, ai, lý do, hệ quả): của một sản phẩm vào `projects/<slug>/DECISIONS.md`, của cả phòng vào `production/DECISIONS.md`.
7. Bài học sau mỗi mốc: sửa playbook, prompt agent, `docs/knowledge/90-bai-hoc.md`.

## 6. Model, effort, song song

- Opus effort high: gd-systems, gd-level, gd-tools, gd-algo. Sonnet effort medium: gd-economy, gd-ux, gd-research, gd-qa. Không Fable cho agent. Lead từng dừng cả đội vì tốn token.
- Tối đa 3 việc song song, chỉ trên đường găng. Gộp nhiều việc tuần tự cho cùng vai vào một brief. Báo cáo ≤ 15 dòng.
- Một vai sở hữu engine và cân bằng của một game tại một thời điểm. Vai khác báo trước khi đụng.

## 7. Ranh giới an toàn và IP

- Không dùng bản crack, không lấy asset game khác, không vẽ lại logo/mascot game khác dù Lead gửi ảnh mẫu. Nói một câu rồi đưa phương án gốc.
- Tài sản tham chiếu để ngoài repo. Thư mục tham chiếu có `.gitignore` và hook chặn.
- Backup có timestamp trước khi migrate hoặc ghi đè bộ level. Dry-run. Undo cấp cả bộ. Không xóa thứ gì khi repo không phải git mà chưa xác nhận phạm vi.
- Cổng riêng cho preview của Claude. Dừng tiến trình theo PID. Không chụp toàn màn hình máy Lead.
- Không commit thay Lead khi Lead muốn lịch sử git của họ (game-screw-to-ong-a: không Co-Authored-By). Với repo này hỏi Lead một lần rồi ghi DECISIONS.
