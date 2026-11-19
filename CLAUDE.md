# DATN SP27

Repo: github.com/huycv18/DATN-SP27 (public từ 2026-11-19). Làm việc nhiều thiết bị: máy cá nhân clone/pull, phiên Claude Đám mây trỏ vào repo này.

## Game
GDD (nguồn chuẩn, đọc ở đây trước khi làm): https://docs.google.com/spreadsheets/d/1kGdCePi8LDK1sGxfH7FK5sswVTgsXO71N4QyjzZP7Bs
17 tab: ONE PAGE, OVERVIEW, CORE LOOP, SYSTEMS, PLAYER, ZONES, ITEM LIST, ENEMIES & HAZARDS, WEAPONS & LAW, RECIPES, SHOP, ECONOMIC, UPGRADES, WIREFRAME, NPC & STORY, ART & AUDIO, SCOPE & RISKS.

| Mục | Giá trị |
|---|---|
| Tên tạm | Space Salvage (chưa đặt tên) |
| Thể loại | Thám hiểm hành động 2D + quản lý quán (cấu trúc Dave the Diver) |
| Engine / nền tảng | Unity, PC Windows, 1 người chơi, offline |
| Art | 2D pixel art side-view, cyberpunk |
| Core loop | Mua nhiên liệu → bay jetpack ra tầng không gian → nhặt, cắt, choáng + lưới bắt sinh vật → về quán chế món / đồ độ → bán lấy ₵ → nâng cấp → bay xa hơn |
| Tiền tệ | ₵ là đơn vị duy nhất, không có XP |
| Mốc hiện tại | MVP: 1 tầng, 3 quái, 7 công thức, 2 loài khách, chơi trọn 1 ngày |

Vì là dự án Unity: việc cần Unity Editor làm ở phiên cục bộ hoặc Remote Control, phiên Đám mây chỉ làm được tài liệu và script.

## Quy tắc cho mọi phiên (kể cả phiên đám mây, vốn không đọc CLAUDE.md global của máy)
- Trả lời tiếng Việt có dấu, thuật ngữ kỹ thuật giữ tiếng Anh. Kết luận trước, ngắn. Không emoji, không gạch dài, chỉ dùng "-". Số liệu để trong bảng.
- Không push khi chưa được bảo. Không --no-verify. Commit đứng tên Huy, không thêm Co-Authored-By.
- Tri thức dự án ghi vào file trong repo (CLAUDE.md, DECISIONS.md), không để trong memory của máy.

## DECISIONS
- 2026-11-19: Dùng GitHub private repo làm nơi lưu bản chính để làm việc từ nhiều nơi.
- 2026-11-19: Giai đoạn hiện tại chỉ làm GDD trên Google Sheet (connector Google Sheets), chưa tạo Unity project.
- 2026-11-19: Làm từ xa bằng Remote Control vào máy công ty (desktop, không pin). Phiên mới tự nối Remote Control. Tắt sleep khi cắm điện (standby-timeout-ac 0) để lúc nào cũng remote được.
