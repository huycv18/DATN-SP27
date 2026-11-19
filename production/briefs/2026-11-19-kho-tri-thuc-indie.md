# Brief: kho tri thức thiết kế game indie (mọi vai, ngoài backlog)

Dòng slug: `space-salvage`. Ngày giao: 2026-11-19. Người giao: phiên Cài phòng GD, theo lời Lead "Vì làm game indie nên cần trang bị kiến thức chuyên môn hãy nạp kiến thức chuyên môn về thiết kế game cho các phiên".

## Mục tiêu
`docs/knowledge/` hiện là tri thức Puzzle mobile. Dựng kho mới `docs/knowledge/indie/` chứa kiến thức chuyên môn thiết kế game indie: lý thuyết, thuật ngữ, con số tham chiếu, phân tích game cùng thể loại. Playbook (`docs/playbooks/indie/`) là cách làm việc, kho này là kiến thức nền, không chép lại playbook.

## Đọc trước
- File vai của bạn và playbook `docs/playbooks/indie/<vai>.md` (để không trùng).
- `CLAUDE.md` mục "Game" và "Hệ thống phiên".

## Ghi vào
File của bạn (bảng phân công ở cuối), tối đa 200 dòng, theo đúng 6 mục:
1. Khái niệm lõi và thuật ngữ: bảng thuật ngữ, định nghĩa một dòng, tên tiếng Anh giữ nguyên.
2. Nguyên lý: 6 đến 12 nguyên lý chuyên môn, mỗi nguyên lý một đoạn ngắn, nói vì sao đúng và khi nào không áp.
3. Con số tham chiếu: bảng số có nguồn (thời lượng, tỉ lệ, khoảng an toàn ngành hay dùng). Không có nguồn thì không ghi.
4. Phân tích game tham chiếu: 3 đến 5 game indie liên quan tới phần của bạn (ưu tiên Dave the Diver, Moonlighter, Stardew Valley, Hardspace: Shipbreaker, Spiritfarer, Potion Craft, Dome Keeper, Subnautica). Mỗi game: làm gì, vì sao hiệu quả, bài học cho Space Salvage.
5. Sai lầm thường gặp ở team indie nhỏ về phần này.
6. Nguồn: danh sách sách, GDC talk, postmortem, bài viết, mỗi dòng có link.

## Luật nguồn (bắt buộc lần này)
- Phải dùng WebSearch hoặc WebFetch. Mỗi nguyên lý và mỗi con số trỏ tới một nguồn trong mục 6.
- Chỉ ghi link đã mở được hoặc đã thấy trong kết quả tìm kiếm. Link viết từ trí nhớ mà chưa thấy thì không ghi.
- Tóm bằng lời mình, không chép đoạn dài. Mỗi nguồn trích nguyên văn tối đa một câu ngắn.

## Sau khi ghi
Thêm file của bạn vào dòng "Trước khi làm, đọc ..." trong `.claude/agents/<vai>.md` (ngay sau playbook). Hai file chung `docs/knowledge/indie/00-nen-tang-thiet-ke.md` và `05-game-tham-chieu.md` do phiên Cài phòng GD tự thêm vào mọi file vai, bạn không cần thêm.

## Tiêu chí hoàn thành
- Đủ 6 mục, ≤ 200 dòng, văn phong theo `docs/org/ho-so-lead.md` (tiếng Việt có dấu, không emoji, không gạch dài, không dấu chấm phẩy).
- Báo bằng khối `## Báo cáo cho GDM`, tối đa 10 dòng, ghi số nguồn và số lần tìm web.

## Giới hạn
- Không đụng Sheet, `projects/space-salvage/` chỉ đọc. Không commit, không push. Việc GDM giao thì ưu tiên.
- Ngân sách: một lượt, khoảng 15 đến 20 lần tìm web.

## Phân công

| Vai | File |
|---|---|
| (subagent) | `00-nen-tang-thiet-ke.md`: MDA, pillar, core loop và meta loop, động lực người chơi (SDT, Bartle, Quantic Foundry), flow, risk và reward, game feel tổng quát, phạm vi và MVP cho team nhỏ, playtest |
| (subagent) | `05-game-tham-chieu.md`: phân tích tổng thể 6 đến 8 game cùng cấu trúc hai vòng (hành động ban ngày, quản lý ban đêm) |
| gd-story | `10-narrative.md` |
| gd-character | `15-character.md` |
| gd-combat | `20-combat.md` |
| gd-items | `25-items-crafting.md` |
| gd-world | `30-world-level.md` |
| gd-quan | `35-management-sim.md` |
| gd-economy | `40-economy-progression.md` |
| gd-ux | `45-ux-ui.md` |
| gd-tech | `50-technical-design.md` |
| gd-qa | `55-qa-playtest.md` |
