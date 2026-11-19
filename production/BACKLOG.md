# BACKLOG phòng Game Designer

Mục đích: mọi việc có pipeline (nhiều hơn một agent hoặc nhiều hơn một lượt) có một dòng ở đây. Việc nhỏ GDM làm thẳng không cần dòng.
Trạng thái: `todo` / `doing` / `review` / `done` / `blocked`. Chỉ GDM đặt `done`. Mã `GD-###` tăng dần, không tái dùng.
Mã lớn nhất đã cấp: GD-016

| ID | Project | Việc | Agent | Phụ thuộc | Trạng thái | Tiêu chí hoàn thành |
|---|---|---|---|---|---|---|
| GD-001 | space-salvage | Kéo 17 tab Sheet v0.1.0 về repo + validator chéo bản đầu | gd-tech | Lead duyệt đợt 1 | blocked (concept bỏ 2026-11-19) | Chạy `node projects/space-salvage/tools/validate.mjs` in bảng lỗi theo tab, ô. Bắt được mâu thuẫn MVP 1 quầy với 3 đồ độ |
| GD-002 | space-salvage | Prototype jetpack web 1 file có thanh chỉnh tham số | gd-tech | Lead duyệt đợt 1 | blocked (concept bỏ 2026-11-19) | Mở `projects/space-salvage/prototype/jetpack/index.html` bay được bằng phím và gamepad, kéo thanh đổi ngay, xuất JSON tham số |
| GD-003 | space-salvage | Luật lõi MVP + bản đồ hệ thống MVP + câu hỏi chốt luật lượt 1 | GDM (gộp từ các vai hệ thống) | Lead duyệt đợt 1 | blocked (concept bỏ 2026-11-19) | Mở `projects/space-salvage/gdd/luat-loi.md` thấy luật đủ các bước một ngày, 26 hệ thống có nhãn MVP trong `ban-do-he-thong-mvp.md`, soat.mjs 0 lỗi |
| GD-004 | space-salvage | GDD hệ thống jetpack + năng lượng bộ đồ + cứu hộ và nợ | gd-character | GD-003 | blocked (concept bỏ 2026-11-19) | Mở `projects/space-salvage/gdd/he-thong/jetpack-nang-luong.md` đủ mục theo khuôn, tham số trùng tên với GD-002 |
| GD-005 | space-salvage | Source / sink ₵ MVP + sim 3 kịch bản tới nâng cấp đầu | gd-economy | Lead duyệt đợt 1 | blocked (concept bỏ 2026-11-19) | Chạy script trong `projects/space-salvage/sim/economy/` in ₵ theo ngày cho 3 kịch bản và số ngày tới nâng cấp đầu |
| GD-006 | space-salvage | QA cuốn chiếu đợt 1 | gd-qa | GD-001 tới GD-005 | blocked (concept bỏ 2026-11-19) | Mỗi việc có `projects/space-salvage/qa/GD-00x.md` ghi ĐẠT hoặc TRẢ LẠI kèm bằng chứng |
| GD-007 | space-salvage | Chuyển nội dung v0.1 sang tab GAME STORY theo khuôn | gd-story | Lead duyệt đợt 2 | blocked (concept bỏ 2026-11-19) | TSV ở `projects/space-salvage/gdd/sheet/`, không mất dòng nào của tab v0.1 nguồn, gd-qa ĐẠT, dán xong và đối chiếu 0 ô lệch |
| GD-008 | space-salvage | Chuyển nội dung v0.1 sang tab Player theo khuôn | gd-character | Lead duyệt đợt 2 | blocked (concept bỏ 2026-11-19) | TSV ở `projects/space-salvage/gdd/sheet/`, không mất dòng nào của tab v0.1 nguồn, gd-qa ĐẠT, dán xong và đối chiếu 0 ô lệch |
| GD-009 | space-salvage | Chuyển nội dung v0.1 sang tab Enemy theo khuôn | gd-combat | Lead duyệt đợt 2 | blocked (concept bỏ 2026-11-19) | TSV ở `projects/space-salvage/gdd/sheet/`, không mất dòng nào của tab v0.1 nguồn, gd-qa ĐẠT, dán xong và đối chiếu 0 ô lệch |
| GD-010 | space-salvage | Chuyển nội dung v0.1 sang tab Salvage, ITEM LIST, Recipe theo khuôn | gd-items | Lead duyệt đợt 2 | blocked (concept bỏ 2026-11-19) | TSV ở `projects/space-salvage/gdd/sheet/`, không mất dòng nào của tab v0.1 nguồn, gd-qa ĐẠT, dán xong và đối chiếu 0 ô lệch |
| GD-011 | space-salvage | Chuyển nội dung v0.1 sang tab Zone theo khuôn | gd-world | Lead duyệt đợt 2 | blocked (concept bỏ 2026-11-19) | TSV ở `projects/space-salvage/gdd/sheet/`, không mất dòng nào của tab v0.1 nguồn, gd-qa ĐẠT, dán xong và đối chiếu 0 ô lệch |
| GD-012 | space-salvage | Chuyển nội dung v0.1 sang tab Customer theo khuôn | gd-quan | Lead duyệt đợt 2 | blocked (concept bỏ 2026-11-19) | TSV ở `projects/space-salvage/gdd/sheet/`, không mất dòng nào của tab v0.1 nguồn, gd-qa ĐẠT, dán xong và đối chiếu 0 ô lệch |
| GD-013 | space-salvage | Chuyển nội dung v0.1 sang tab ECONOMIC, Shop, Upgrade theo khuôn | gd-economy | Lead duyệt đợt 2 | blocked (concept bỏ 2026-11-19) | TSV ở `projects/space-salvage/gdd/sheet/`, không mất dòng nào của tab v0.1 nguồn, gd-qa ĐẠT, dán xong và đối chiếu 0 ô lệch |
| GD-014 | space-salvage | Chuyển nội dung v0.1 sang tab WIREFRAME theo khuôn | gd-ux | Lead duyệt đợt 2 | blocked (concept bỏ 2026-11-19) | TSV ở `projects/space-salvage/gdd/sheet/`, không mất dòng nào của tab v0.1 nguồn, gd-qa ĐẠT, dán xong và đối chiếu 0 ô lệch |
| GD-015 | space-salvage | Chuyển nội dung v0.1 sang tab CORE LOOP, Day, Assets, AUDIO ASSETS LIST theo khuôn | GDM | Lead duyệt đợt 2 | blocked (concept bỏ 2026-11-19) | TSV ở `projects/space-salvage/gdd/sheet/`, không mất dòng nào của tab v0.1 nguồn, gd-qa ĐẠT, dán xong và đối chiếu 0 ô lệch |
| GD-016 | space-salvage | MVP Criteria Checklist từ v0.1 SCOPE & RISKS + QA cuốn chiếu đợt 2 | gd-qa | GD-007 tới GD-015 | blocked (concept bỏ 2026-11-19) | Mỗi việc có `projects/space-salvage/qa/GD-0xx.md` ĐẠT hoặc TRẢ LẠI kèm bằng chứng |
