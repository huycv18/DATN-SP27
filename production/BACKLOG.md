# BACKLOG phòng Game Designer

Mục đích: mọi việc có pipeline (nhiều hơn một agent hoặc nhiều hơn một lượt) có một dòng ở đây. Việc nhỏ GDM làm thẳng không cần dòng.
Trạng thái: `todo` / `doing` / `review` / `done` / `blocked`. Chỉ GDM đặt `done`. Mã `GD-###` tăng dần, không tái dùng.
Mã lớn nhất đã cấp: GD-050

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
| GD-017 | game-moi | GAME STORY bản 2 (hướng vũ trụ rộng) | gd-story | - | done (bị thay bởi bản 3) | `projects/game-moi/story/game-story-v2.md` |
| GD-018 | game-moi | GAME STORY bản 3 từ ý tưởng Lead 2026-11-20 | gd-story | - | done | `projects/game-moi/story/game-story-v3.md` đủ 14 từ khóa |
| GD-019 | game-moi | Sửa bản 3 theo trả lời câu 2, 3, 4 | gd-story | GD-018 | done | Không còn "tín hiệu sự sống" |
| GD-020 | game-moi | Sửa bản 3 theo 8 vấn đề bám Dave, ca cảng | gd-story | GD-019 | done | Không còn Bản án, H3, 4 lớp |
| GD-021 | game-moi | Khung game, log tự quyết, điều phối đợt 1 | GDM | Lead giao toàn quyền | done | `projects/game-moi/gdd/00-khung-game.md`, `log-gdm-tu-quyet.md` |
| GD-022 | game-moi | GDD cốt truyện bản đủ: The Wardens, 5 chương, nhân vật truyện, tên gọi | gd-story | GD-021 | done (gd-qa ĐẠT) | `gdd/he-thong/cot-truyen.md` đủ khuôn, soat 0 lỗi |
| GD-023 | game-moi | GDD người chơi và hồ sơ nhân vật | gd-character | GD-021 | done | `gdd/he-thong/nguoi-choi.md`, `ho-so-nhan-vat.md` |
| GD-024 | game-moi | GDD combat, bắt sống, Driftlife, The Wardens, boss | gd-combat | GD-021 | done (gd-qa ĐẠT) | `gdd/he-thong/combat-driftlife.md` |
| GD-025 | game-moi | GDD tài nguyên, vật phẩm, dụng cụ, công thức, hàng hóa | gd-items | GD-021 | done (gd-qa ĐẠT) | `gdd/he-thong/vat-pham.md` |
| GD-026 | game-moi | GDD map tổng, map nhánh, hazard, nhịp chuyến | gd-world | GD-021 | done (gd-qa ĐẠT) | `gdd/he-thong/map.md` |
| GD-027 | game-moi | GDD trạm và cảng: khoang, người vớt, ca cảng, Hạng cảng, nuôi | gd-quan | GD-021 | done (gd-qa ĐẠT) | `gdd/he-thong/tram-va-cang.md` |
| GD-028 | game-moi | GDD kinh tế và tiến trình, sim 3 kịch bản, 1 đến 4 người | gd-economy | GD-022 tới GD-027 | done (gd-qa ĐẠT) | `gdd/he-thong/kinh-te-tien-trinh.md`, sim in bảng |
| GD-029 | game-moi | GDD UX / UI: HUD, màn, input, FTUE | gd-ux | GD-022 tới GD-027 | done (gd-qa ĐẠT) | `gdd/he-thong/ux-ui.md` |
| GD-030 | game-moi | Sim chuyến và ca cảng, schema dữ liệu, yêu cầu đồng bộ co-op, event | gd-tech | GD-022 tới GD-027 | done (gd-qa ĐẠT) | `gdd/he-thong/ky-thuat.md`, `tools/` có selftest |
| GD-031 | game-moi | Review chéo toàn bộ GDD, MVP Criteria Checklist | gd-qa | GD-022 tới GD-030 | done (11 file ĐẠT, 3 lỗi nặng cuối của nguoi-choi GDM sửa, log 81 đến 83) | `qa/` mỗi GDD một file ĐẠT hoặc TRẢ LẠI |
| GD-032 | game-moi | Chuyển GDD sang TSV theo khuôn và dán 25 tab Sheet GDD, đối chiếu 0 dòng lệch | mọi vai giữ tab, GDM | GD-031 | done (23 tab khớp) | `projects/game-moi/gdd/sheet/<Tab>.tsv`, mỗi tab đối chiếu 0 dòng lệch, `qa/GD-032-sheet.md` |
| GD-033 | game-moi | Áp phản diện mới của Lead (X độc tài, Y người thừa kế, cách mạng) vào GDD và Sheet | gd-story, các vai chạm, gd-qa | Lead 2026-11-20 | done (gd-qa ĐẠT 6 trên 6 file) | `briefs/dot6-sua-phan-dien.md`, `qa/GD-033-phan-dien.md` ĐẠT, các tab bị đổi đối chiếu khớp |
| GD-034 | game-moi | Tách hệ thống lớn ra GDD con đủ khuôn, link với GDD chính | GDM | Lead 2026-11-20 | done (3 GDD con: Story, Combat và Driftlife, Vật phẩm. 24 tab đối chiếu khớp) | 3 file con đủ tab khuôn, GDD chính có tab GDD CON, `doi-chieu-sheet.mjs` khớp mọi tab |
| GD-035 | game-moi | GDD con bản đọc Story theo `gdd/sheet/gdd-con/KHUON.md` | gd-story | Lead 2026-11-20 | done (kiem ĐẠT, gd-qa ĐẠT, đã thay tab Sheet) | `dung-gdd-con.py kiem story` ĐẠT, gd-qa ĐẠT |
| GD-036 | game-moi | GDD con bản đọc Combat và Driftlife theo `gdd/sheet/gdd-con/KHUON.md` | gd-combat | Lead 2026-11-20 | done (kiem ĐẠT, gd-qa ĐẠT, đã thay tab Sheet) | `dung-gdd-con.py kiem combat` ĐẠT, gd-qa ĐẠT |
| GD-037 | game-moi | GDD con bản đọc Vật phẩm theo `gdd/sheet/gdd-con/KHUON.md` | gd-items | Lead 2026-11-20 | done (kiem ĐẠT, gd-qa ĐẠT, đã thay tab Sheet) | `dung-gdd-con.py kiem vat-pham` ĐẠT, gd-qa ĐẠT |
| GD-038 | game-moi | Nghiệm thu 3 GDD con bản đọc: khớp GDD hệ thống, dễ hiểu, không mất luật | gd-qa | GD-035 tới GD-037 | done (vòng 2: Story, Vật phẩm ĐẠT. Combat N3 sửa sau, GDM soát 2 hàng kén) | `qa/GD-038-gdd-con-gon.md` ĐẠT |
| GD-039 | game-moi | Bỏ GDD con, gộp 5 tab về GDD chính | GDM | Lead 2026-11-20 | done | 25 tab ở GDD chính, `doi-chieu-sheet.mjs` 24 tab KHỚP |
| GD-040 | game-moi | Soát lệch và viết lại OVERVIEW, CORE LOOP, Day (đợt 8) | GDM, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-041 | game-moi | Viết lại GAME STORY dễ đọc, ID số (đợt 8) | gd-story, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-042 | game-moi | Viết lại Player dễ đọc, ID số (đợt 8) | gd-character, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-043 | game-moi | Viết lại Enemy dễ đọc, ID số (đợt 8) | gd-combat, claude-cty | Lead 2026-11-20 | review (TSV xong, Sheet chưa dán xong) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-044 | game-moi | Viết lại Salvage, ITEM LIST, Recipe dễ đọc, ID số (đợt 8) | gd-items, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-045 | game-moi | Viết lại Zone dễ đọc, ID số (đợt 8) | gd-world, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-046 | game-moi | Viết lại Customer dễ đọc, ID số (đợt 8) | gd-quan, claude-cty | Lead 2026-11-20 | review (TSV xong, Sheet chưa dán xong) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-047 | game-moi | Viết lại ECONOMIC, Shop, Upgrade, PROCESSING, Balance Sheet dễ đọc, ID số (đợt 8) | gd-economy, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-048 | game-moi | Viết lại WIREFRAME, Tutorials dễ đọc, ID số (đợt 8) | gd-ux, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-049 | game-moi | Viết lại Event Tracking, TRACKING, Assets, AUDIO dễ đọc, ID số (đợt 8) | gd-tech, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-050 | game-moi | Viết lại MVP Criteria Checklist, nghiệm thu chéo 23 tab (đợt 8) | gd-qa, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
