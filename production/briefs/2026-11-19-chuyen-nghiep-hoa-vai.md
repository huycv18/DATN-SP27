# Brief: chuyên nghiệp hóa vai (mọi vai, ngoài backlog)

Dòng slug: `space-salvage`. Ngày giao: 2026-11-19. Người giao: phiên Cài phòng GD, theo lời Lead "Để các phiên chuyên nghiệp hoá cho tôi".

## Mục tiêu
Playbook hiện có trong `docs/playbooks/` rút từ studio Puzzle mobile. Mỗi vai viết playbook nghề của mình theo chuẩn team game indie PC, áp thẳng vào Space Salvage, để mọi lần làm việc sau có phương pháp, đầu ra và cổng kiểm như một designer chuyên nghiệp ở vị trí đó.

## Đọc trước
- File vai của bạn `.claude/agents/<vai>.md`, `.claude/agents/_shared-protocol.md`.
- `CLAUDE.md` mục "Game" và "Hệ thống phiên". `projects/space-salvage/README.md`. Khuôn Sheet `docs/process/templates/gdd-sheet-khuon-indie.md`.
- Playbook cũ gần vai nhất trong `docs/playbooks/` (giữ phương pháp còn đúng, bỏ phần Puzzle).
- Được dùng WebSearch, WebFetch để lấy chuẩn nghề (GDC talk, sách, bài postmortem game indie cùng thể loại). Ghi tên nguồn và link, tóm bằng lời mình, không chép đoạn dài.

## Ghi vào
1. `docs/playbooks/indie/<vai>.md` (ví dụ `docs/playbooks/indie/gd-combat.md`), tối đa 150 dòng, theo đúng 7 mục:
   1. Vai và đầu ra chuẩn nghề: các deliverable một designer vị trí này ở team indie phải giao (bảng: đầu ra, dạng file hay tab, ai dùng).
   2. Quy trình một việc: các bước từ nhận brief tới báo xong, cổng kiểm ở từng bước.
   3. Phương pháp và khung chuẩn nghề: 4 đến 8 khung, mỗi khung một dòng nói dùng khi nào, kèm nguồn.
   4. Checklist trước khi báo xong: 8 đến 15 dòng, kiểm được bằng mắt hoặc script.
   5. Lỗi hay gặp ở game indie cùng thể loại (action exploration, quản lý quán, roguelite nhẹ) và cách tránh.
   6. Áp vào Space Salvage MVP: hệ thống nào của game dùng khung nào, việc đầu tiên nên làm khi GDM giao.
   7. Phối hợp: nhận gì từ vai nào, giao gì cho vai nào (theo bảng "Hệ thống phiên").
2. Sửa đúng một dòng "Trước khi làm, đọc ..." trong file vai của bạn: thay playbook cũ bằng `docs/playbooks/indie/<vai>.md`. Không sửa phần khác của file vai, không sửa file của vai khác.

## Tiêu chí hoàn thành
- Playbook đủ 7 mục, ≤ 150 dòng, mỗi khung có nguồn, không còn từ Puzzle (bàn, tile, solver, booster, ads) trừ khi nói rõ là bỏ.
- Văn phong theo `docs/org/ho-so-lead.md`: tiếng Việt có dấu, không emoji, không gạch dài, không dấu chấm phẩy.
- Báo bằng khối `## Báo cáo cho GDM`, tối đa 10 dòng.

## Giới hạn
- Không đụng Sheet GDD, không đụng `projects/space-salvage/` ngoài đọc. Không commit, không push.
- GDM giao việc đợt chuyển nội dung Sheet thì việc của GDM ưu tiên, làm brief này sau.
- Ngân sách: một lượt làm, không quá khoảng 15 lần tìm kiếm web.
