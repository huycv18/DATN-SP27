# Đợt 2 space-salvage: chuyển nội dung v0.1 sang khuôn mới (2026-11-19)

Trạng thái: ĐỀ XUẤT, chờ Lead duyệt. Chưa gửi cho vai nào.
Lead: "Sửa Sheet hiện tại" (áp khuôn Dungeon Builder vào Sheet). Chia vai theo hệ thống: CLAUDE.md gốc mục "Hệ thống phiên".
Nguồn việc: `projects/space-salvage/DECISIONS.md` mục 2026-11-19 "Áp khuôn vào Sheet hiện tại". Đợt 1 (`dot1-nen-mvp.md`) tạm dừng, mở lại sau đợt này.

## Mục tiêu chung
Mỗi vai chuyển nội dung các tab `v0.1 <tên cũ>` (tab ẩn trong Sheet, gid 0 đến 16) sang tab mình giữ, viết theo khuôn `docs/process/templates/gdd-sheet-khuon-indie.md`.
Đây là việc chuyển, không phải thiết kế: giữ nguyên số và luật của v0.1, không thêm, không bớt. Chỗ v0.1 thiếu hoặc mâu thuẫn thì ghi vào file ghi chú, không tự sửa.

## Ai làm gì
| Mã | Tab giữ | Lấy từ tab v0.1 | Agent | Phiên (id) | Issue ID |
|---|---|---|---|---|---|
| GD-007 | GAME STORY | NPC & STORY (bối cảnh, mạch truyện) | gd-story | chưa có phiên, subagent | không dùng |
| GD-008 | Player | PLAYER | gd-character | chưa có phiên, subagent | 10 đến 19 |
| GD-009 | Enemy | ENEMIES & HAZARDS (phần quái) | gd-combat | local_7d432ac0-aea1-4651-be5f-a7d291dc0ed3 | 20 đến 29 |
| GD-010 | Salvage, ITEM LIST, Recipe | ITEM LIST, RECIPES, WEAPONS & LAW (vũ khí hợp pháp thành dòng Type Weapon ở ITEM LIST) | gd-items | local_380608f3-d7fa-4b2e-bcb6-306d508bb730 | Salvage 30 đến 49, Recipe 50 đến 69 |
| GD-011 | Zone | ZONES, ENEMIES & HAZARDS (phần hazard) | gd-world | local_5959cdd6-bb7a-426b-9145-a658b0d94215 | 120 đến 129 |
| GD-012 | Customer | NPC & STORY (loài khách), SHOP (phần ca bán) | gd-quan | local_fc9e795d-6911-4dfc-bcb2-3a4f84182be6 | 70 đến 79 |
| GD-013 | ECONOMIC, Shop, Upgrade | ECONOMIC, SHOP, UPGRADES | gd-economy | local_6fcec7c7-53e2-468a-a2c4-0dd1545dd37c | Upgrade 80 đến 99 |
| GD-014 | WIREFRAME | WIREFRAME | gd-ux | local_c9e6ba43-63d8-49de-941f-60e536577360 | không dùng |
| GD-015 | CORE LOOP, Day, Assets, AUDIO ASSETS LIST | CORE LOOP, SYSTEMS, ONE PAGE mục 3 và 4, ART & AUDIO | GDM | phiên này | CORE LOOP 1 đến 9, Day 100 đến 119 |
| GD-016 | MVP Criteria Checklist + chấm cuốn chiếu GD-007 tới GD-015 | SCOPE & RISKS (mục tiêu kiểm chứng) | gd-qa | local_367c8dbf-da97-4dde-9a04-bb4d3f217294 | không dùng |

gd-tech chưa có việc trong đợt này (Event Tracking mới, chưa có nguồn). Việc của gd-tech ở đợt 1: kéo TSV về repo và validator.
PROCESSING, Tutorials, TRACKING, Balance Sheet, Playtest Report, Bugs Report là tab mới, v0.1 không có nội dung, để trống.
Phần chợ đen, súng nóng, cảnh sát của WEAPONS & LAW là phạm vi Alpha: gd-items ghi sang `gdd/backlog-ngoai-mvp.md`, không đưa lên Sheet.

## Brief chung cho mọi vai (dòng đầu tin: `space-salvage GD-0xx`)
- Đọc trước: `projects/space-salvage/DECISIONS.md`, `so-hien-hanh.md`, `README.md` (bảng gid), khuôn `docs/process/templates/gdd-sheet-khuon-indie.md` mục 4 và 5, đề xuất `projects/space-salvage/gdd/de-xuat-cau-truc-sheet.md` (ánh xạ thực thể), playbook vai.
- Đọc tab v0.1 bằng connector Google Sheets, tên tab có tiền tố `v0.1 ` (ví dụ `'v0.1 ENEMIES & HAZARDS'!A1:Z200`).
- Ghi vào: `projects/space-salvage/gdd/sheet/<Tab>.tsv` (từ dòng 3, dòng 1 và 2 đã có trên Sheet) và `projects/space-salvage/gdd/sheet/<Tab>-ghi-chu.md` (chỗ v0.1 thiếu, mâu thuẫn, nội dung không có chỗ trong khuôn).
- Tab spec dùng bộ Sub Task chuẩn ở khuôn mục 4, Issue ID trong khoảng của mình, mỗi thực thể một khối. Chỉ số viết `Tên (giải nghĩa): giá trị`, mỗi chỉ số một dòng trong ô.
- Tiêu chí hoàn thành: mọi thực thể và dòng của tab v0.1 nguồn có mặt ở TSV hoặc ở file ghi chú (không mất dòng nào). `node .claude/skills/gdd-v1/scripts/soat.mjs <file ghi chú>` không lỗi gạch dài, emoji, chấm phẩy. gd-qa chấm ĐẠT.
- Dán: sau khi gd-qa ĐẠT, vai tự dán bằng `/gdd-sheet-sync o` vào đúng tab, từ ô A3, giữ định dạng GDM đã dựng. Rồi `/gdd-sheet-sync doi-chieu` 0 ô lệch.
- Giới hạn: không đổi số, không thêm thực thể, không sửa tab của vai khác, không đụng tab `v0.1`. Không commit.
- Kết thúc: `GD-0xx XONG|KẸT: <một câu>` kèm khối `## Báo cáo cho GDM`.

## Ai đưa gì cho ai (SendMessage thẳng theo id phiên)
- gd-items và gd-world: cột Spawn Point của Salvage do gd-world cấp, gd-items ghi.
- gd-quan và gd-character: hồ sơ loài khách do gd-character cấp, gd-quan ghi vào Customer. gd-character chạy subagent nên gd-quan đọc file `projects/space-salvage/gdd/sheet/Player-ghi-chu.md` mục "Hồ sơ khách" khi có.
- gd-combat và gd-character: kỹ năng combat của Player (choáng, lưới, cắt) do gd-combat cấp số, gd-character ghi.
- gd-combat và gd-items: Enemy ghi "rơi gì khi bắt", tên vật phẩm phải trùng ITEM LIST.
- Xong TSV thì báo gd-qa kèm đường dẫn. gd-qa trả lỗi thẳng cho tác giả.
- Bất đồng không tự chốt: báo GDM, ghi hai phương án và đề xuất.
