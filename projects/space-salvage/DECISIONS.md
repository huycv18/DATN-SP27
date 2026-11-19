# Quyết định của sản phẩm Space Salvage

Quyết định riêng của sản phẩm này (luật, mechanic, tầng, kinh tế, Sheet). Quyết định chung của phòng ở `production/DECISIONS.md`.

Mỗi mục: `## <yyyy-mm-dd> - <chủ đề>`, người quyết (Lead nguyên văn hoặc GDM), lý do, hệ quả. Ghi ngay khi quyết, không hồi tố. Khi ghi mới, grep mục cũ cùng chủ đề.

## 2026-11-19 - Kickoff

Đã rõ từ file, không hỏi lại:
- Loại việc: update GDD sản phẩm có sẵn (GDD v0.1.0 trên Sheet 17 tab), đưa phần MVP thành bản đủ để dựng Unity (luật khẳng định, số đã sim).
- Nền tảng: Unity, PC Windows, 1 người chơi, offline. Chưa tạo Unity project (DECISIONS gốc 2026-11-19).
- Tham chiếu: Dave the Diver, Stardew Valley, Hardspace: Shipbreaker, chỉ lấy cấu trúc (tab OVERVIEW).
- Phạm vi MVP: 1 tầng, 3 quái, 7 công thức, 2 loài khách, chơi trọn 1 ngày (CLAUDE.md gốc, tab ONE PAGE).
- Commit: đứng tên Huy, không Co-Authored-By, không push khi chưa bảo (CLAUDE.md gốc).

Lead trả lời (nguyên văn lựa chọn):
1. Mốc GDD MVP: "Chất lượng, không gấp". Hệ quả: mỗi GDD hệ thống qua `/gdd-review` đủ 5 lớp, không cắt bước QA để kịp.
2. Quyền Sheet: "Dán thẳng sau QA ĐẠT". Hệ quả: vai giữ tab soạn TSV trong repo, gd-qa chấm ĐẠT, GDM dán bằng `/gdd-sheet-sync` và đối chiếu từng ô.
3. Prototype jetpack: "Có, web 1 file". Hệ quả: gd-tools làm prototype trình duyệt có thanh chỉnh tham số ngay đợt 1, số Lead chốt sau khi chơi thử mang sang Unity.
4. MVP 1 quầy hay 2 quầy (Sheet ghi "ca bán 1 quầy" nhưng có 4 món + 3 đồ độ): "Chưa chốt, để sau". Hệ quả: giữ nguyên Sheet, gd-systems đưa câu này vào lượt hỏi chốt luật quán. Đợt 1 không đụng hệ thống quán.

Người quyết: Huy. GDM ghi.

## 2026-11-19 - Dừng đợt 1, chốt khuôn GDD trước

Lead: "Từ đã chúng ta cần có framework và Formats GDD đã." Kèm GDD Dungeon Builder làm mẫu format và cấu trúc.
Hệ quả: đợt 1 (`briefs/dot1-nen-mvp.md`) giữ nguyên ở trạng thái đề xuất, chưa giao. GDM rút khuôn ra `docs/process/templates/gdd-sheet-khuon-indie.md` và đề xuất cấu trúc Sheet mới ở `gdd/de-xuat-cau-truc-sheet.md`, chờ Lead duyệt. Brief đợt 1 phải sửa theo khuôn mới trước khi giao.

## 2026-11-19 - Áp khuôn vào Sheet hiện tại

Lead: "Sửa Sheet hiện tại".
GDM làm: đổi tên 17 tab cũ thành `v0.1 <tên cũ>`, tô xám, ẩn, giữ nguyên nội dung (gid 0 đến 16). Dựng 25 tab mới theo `gdd/de-xuat-cau-truc-sheet.md` (gid 100 đến 124): tiêu đề, header, màu tab, font Lexend, cố định 2 dòng, độ rộng cột. Điền OVERVIEW bản v0.2.0 từ OVERVIEW và ONE PAGE cũ, thêm dòng PILLARS (khuôn Dungeon Builder không có, giữ lại vì là ý đồ thiết kế). Đặt font mặc định cả file là Lexend 10.
Chưa làm: chuyển nội dung 24 tab còn lại. WEAPONS & LAW và SCOPE & RISKS chưa có chỗ chốt (đề xuất trong `gdd/de-xuat-cau-truc-sheet.md`).
Hệ quả: CLAUDE.md gốc, `docs/org/ho-so-lead.md`, agent gd-systems, gd-qa, gd-tools, gd-ux đổi sang tên tab mới. Brief đợt 1 phải viết lại thành đợt chuyển nội dung theo vai giữ tab.
