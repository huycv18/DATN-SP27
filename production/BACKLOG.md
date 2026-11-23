# BACKLOG phòng Game Designer

Mục đích: mọi việc có pipeline (nhiều hơn một agent hoặc nhiều hơn một lượt) có một dòng ở đây. Việc nhỏ GDM làm thẳng không cần dòng.
Trạng thái: `todo` / `doing` / `review` / `done` / `blocked`. Chỉ GDM đặt `done`. Mã `GD-###` tăng dần, không tái dùng.
Mã lớn nhất đã cấp: GD-066

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
| GD-043 | game-moi | Viết lại Enemy dễ đọc, ID số (đợt 8) | gd-combat, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-044 | game-moi | Viết lại Salvage, ITEM LIST, Recipe dễ đọc, ID số (đợt 8) | gd-items, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-045 | game-moi | Viết lại Zone dễ đọc, ID số (đợt 8) | gd-world, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-046 | game-moi | Viết lại Customer dễ đọc, ID số (đợt 8) | gd-quan, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-047 | game-moi | Viết lại ECONOMIC, Shop, Upgrade, PROCESSING, Balance Sheet dễ đọc, ID số (đợt 8) | gd-economy, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-048 | game-moi | Viết lại WIREFRAME, Tutorials dễ đọc, ID số (đợt 8) | gd-ux, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-049 | game-moi | Viết lại Event Tracking, TRACKING, Assets, AUDIO dễ đọc, ID số (đợt 8) | gd-tech, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-050 | game-moi | Viết lại MVP Criteria Checklist, nghiệm thu chéo 23 tab (đợt 8) | gd-qa, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `kiem-de-doc.mjs` ĐẠT tab của mình, gd-qa ĐẠT, Sheet đối chiếu khớp |
| GD-051 | game-moi | Viết lại ca cảng theo khung Dave trong GDD trạm và cảng, tab Customer (đợt 9) | gd-quan, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | `briefs/dot9-ca-cang-kieu-dave.md`, kiem-de-doc ĐẠT, gd-qa ĐẠT |
| GD-052 | game-moi | Thùng, bỏ cỡ kiện, đóng thùng tự động trong vật phẩm, ITEM LIST, Recipe (đợt 9) | gd-items, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | như trên |
| GD-053 | game-moi | Màn lập danh mục, HUD ca cảng, tutorial ca đầu, WIREFRAME, Tutorials (đợt 9) | gd-ux, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | như trên |
| GD-054 | game-moi | Sim ca cảng mới 1 tới 4 người, event tracking ca cảng (đợt 9) | gd-tech, claude-cty | Lead 2026-11-20 | done (Sheet khớp) | sim in bảng, selftest ĐẠT, rảnh không quá 30% ở trễ 2 giây |
| GD-055 | game-moi | Giá thùng, tip, Tally một ca, ngưỡng Hạng cảng, sim kinh tế (đợt 9) | gd-economy, claude-cty | GD-052, GD-054 | done (Sheet khớp) | sim kinh tế in bảng, giữ mốc 60% hai chuyến |
| GD-056 | game-moi | Review GDD ca cảng mới, MVP Criteria Checklist phần ca cảng (đợt 9) | gd-qa, claude-cty | GD-051 tới GD-055 | done (Sheet khớp) | `qa/GD-056-ca-cang-dave.md` ĐẠT |
| GD-057 | game-moi | CORE LOOP, Day, dán Sheet các tab đổi, đối chiếu (đợt 9) | GDM, claude-cty | GD-056 | done (Sheet khớp) | doi-chieu-sheet KHỚP các tab đổi |
| GD-058 | game-moi | Doc thiết kế: mục mẫu II.6 Trạm và cảng theo `book/KHUON.md` (đợt 10) | gd-quan, claude-cty | Lead 2026-11-23 | done (mục mẫu qua kiem-book và soat, GDM duyệt, 3 chỗ lệch GDD đã chốt log 101 tới 103) | `book/phan-2/06-tram-va-cang.md` qua `kiem-book.mjs`, GDM duyệt làm mẫu |
| GD-059 | game-moi | Script gộp Doc, cổng kiểm khuôn, cách xuất sơ đồ luồng và Google Doc (đợt 10) | gd-tech, claude-cty | Lead 2026-11-23 | done (cổng và gộp, selftest 37 ĐẠT. Xuất ảnh sơ đồ và Google Doc chờ Lead duyệt tải công cụ) | `node projects/game-moi/tools/kiem-book.mjs` in lỗi theo mục, `gop-book.mjs` ra `book/ket-qua/book.md`, selftest ĐẠT |
| GD-060 | game-moi | Doc thiết kế: các mục Phần II còn lại II.1 tới II.9 | các vai giữ hệ thống, GDM | GD-058, GD-059 | doing (Lead duyệt mẫu 2026-11-23) | mỗi mục qua `kiem-book.mjs` |
| GD-061 | game-moi | Nghiệm thu Phần II khớp GDD hệ thống và Sheet | gd-qa | GD-060 | todo | `qa/GD-061-book-phan-2.md` ĐẠT |
| GD-062 | game-moi | Chương đề xuất dự án: ràng buộc, pillar, PX goal, concept đã bỏ và lý do | GDM | Lead 2026-11-23 | review (bản nháp, chờ Lead đọc) | `book/de-xuat-du-an.md` qua soat |
| GD-063 | game-moi | Folder Drive nộp bài, một tài khoản sở hữu, chia thư mục theo loại | Lead tạo, GDM xếp | GD-061 | todo | Lead mở folder thấy đủ Doc, Sheet, đề xuất, không shortcut |
| GD-064 | game-moi | Codex Dave the Diver theo hệ thống: Dave làm gì, The Novent lấy gì, khác gì (đợt 2 kế hoạch) | gd-research | GD-061 | todo | `docs/knowledge/indie/06-dave-the-diver-cau-truc.md` có mục cho 9 hệ thống, có nguồn |
| GD-065 | game-moi | Guides cho dev: Sheet sang ScriptableObject, prefab, thư mục Unity | gd-tech | Unity project | blocked (chưa có Unity project) | dev làm theo tạo được 1 item từ Sheet |
| GD-066 | game-moi | Doc thiết kế Phần I Điều khiển, ảnh build đánh số | gd-ux, gd-qa | build Unity | blocked (chưa có build) | mỗi thao tác MVP có mục và ảnh |
