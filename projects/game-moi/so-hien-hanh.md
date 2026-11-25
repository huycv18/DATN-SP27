# Số hiện hành của The Novent

Một nơi duy nhất cho số và phạm vi đã chốt. Các vai đọc ở đây, không lấy từ tin nhắn. Cột Nguồn trỏ mục DECISIONS, dòng log GDM hoặc file sim.
Nhãn: (L) Lead chốt bằng lời. (G) GDM chốt theo ủy quyền của Lead 2026-11-20, có dòng trong `log-gdm-tu-quyet.md`, Lead đổi được. (S) số do sim in ra, đổi số thì chạy lại sim, không sửa tay.

Cập nhật lần cuối: 2026-11-20, sau đợt 9 (giờ giao thương khung Dave, QA GD-056).

## Ràng buộc nền

| Mục | Giá trị hiện hành | Nguồn |
|---|---|---|
| Engine / nền tảng | Unity, PC, để mở đa nền tảng | (L) DECISIONS 2026-11-19 |
| Multiplayer | Chơi đơn hoặc co-op online 2 đến 4 người, cả hai là cách chơi chính. MVP có co-op 2 người | (L) DECISIONS 2026-11-20. MVP: (L) DECISIONS 2026-11-23 |
| Art | Không gian game 3D, đồ họa 2.5D, góc nhìn top-down 45 độ. Unity dựng cảnh 3D, mọi asset là 2D (sprite, tile, hiệu ứng 2D), không có model 3D. Thay góc nhìn ngang và mặt cắt trạm của log 9 | (L) DECISIONS 2026-11-23 Art 3D, 2.5D, top-down 45 |
| Kinh doanh | Bán đứt, không gói bán | (L) |
| Thể loại | Hành động nhập vai phiêu lưu kết hợp mô phỏng quản lý | (L) |
| Nhóm | 1 GD, 4 dev, 1 artist 2D | (L) |
| Sheet GDD | https://docs.google.com/spreadsheets/d/1NayaWIuhGD9p3Czlff9sCubY610Ksye4bo97R_QqPdE ("Game Design Document - The Novent", Lead chốt 2026-11-23). GDD duy nhất, 25 tab theo khuôn indie, 17 tab `v0.1` cũ đã ẩn. Sheet cũ `1kGdCe...` thôi dùng | (L) DECISIONS 2026-11-23 Đổi Sheet GDD chính |

## Luật và nội dung

| Mục | Giá trị hiện hành | Nguồn |
|---|---|---|
| Khung game | `gdd/00-khung-game.md`: pillar P1 đến P4, bối cảnh B1 đến B11, luật K1 đến K27, co-op C1 đến C10, 5 chương | (L) và (G), log 1 đến 80 |
| GDD hệ thống | 10 file ở `gdd/he-thong/` | Bảng hệ thống ở khung mục 8 |
| Điểm các vai tự quyết | `log-vai-tu-quyet.md` (237 điểm, sinh bằng `tools/gom-tu-quyet.py`) | Từng GDD |
| Cốt truyện | `gdd/he-thong/cot-truyen.md`. Phản diện The Wardens, vụ tai nạn The Scattering, Solace là thông tin mồi, kết mở | (L) DECISIONS 2026-11-20. Tên: (G) log 4, 75 |
| Tên game | The Novent | (L) DECISIONS 2026-11-20, mục Chốt tên game The Novent |
| Tên nửa chơi tay thứ hai | Giờ Giao Thương, tiếng Anh Trade Hour. Đếm: lượt giao thương. Hành động: mở giao thương, nghỉ giao thương, chữ trên nút Mở bán, Nghỉ bán. Trước 2026-11-23 gọi là giờ giao thương | (L) tiếng Anh, (G) log 117. DECISIONS 2026-11-23 |
| Đồng tiền | Tally, duy nhất | (L) vấn đề 7. (G) log 17 |
| Nửa chơi tay thứ hai | Giờ giao thương theo khung bán sushi của Dave: lập danh mục trước giờ giao thương, tàu cập 3 cửa neo, mỗi tàu gọi 1 thùng, mang thùng, bơm khí, tip theo kiên nhẫn | (L) DECISIONS 2026-11-20, mục "Giờ giao thương theo khung Dave" |
| Một ngày | Tối đa 2 chuyến, rồi giờ giao thương, rồi cuối ngày. Tự lưu sau mỗi chuyến, sau giờ giao thương, lúc ngủ | (G) log 12, 62, 65 |
| Phạm vi MVP | Chương 1 trọn: Vành đai ngoài và map nhánh Station Cinder, Ingrid và Linh, 8 khoang, giờ giao thương 1 bến 3 cửa neo (Tikko, Tàu vội, hàng chế CGO-113, 1 loại hàng Driftlife sống), 4 loài Driftlife (Driftmoth, Skitter Ray, Sting Krill, Arc Eel), bắt sống cỡ S bằng lưới, boss Scrapmaw, 3 hazard, co-op 2 người. Bảng đủ ở khung mục 12 | (G) log 29, 49, 67. Lead nên xem lại vì chạm thời hạn |

## Số cân bằng

| Mục | Giá trị hiện hành | Nguồn |
|---|---|---|
| Túi bậc 0 đến 4 (Khối) | 80, 100, 126, 168, 216 | (G) log 54, sim chuyến |
| Bình Oxy bậc 0 đến 4 | 330, 450, 600, 780, 1000. 1 Oxy hao trong 1 giây ở mức nền | (G) log 54 |
| Ngạt | 12 giây chờ cứu, sau đó bị kéo về và giữ 1 món. Chia Oxy không xuống dưới sàn 20 | `nguoi-choi.md`, (G) log 11, 41, 57 |
| Oxy hồi từ vật tiêu hao | Không quá 25% dung lượng bình mỗi chuyến, tối đa 2 bình Oxy nhỏ | (G) log 72 |
| Hệ số co-op lượng nhặt k(N) | 1 cộng a nhân (N trừ 1). a bằng 0,30 ở Vành đai ngoài, 0,25 ở Vành đai trong, 0,38 ở Vùng trung tâm | (S) `map.md` 3.8 |
| Giờ giao thương chương 1, 1 người | Thùng = 0,4 kiện. Danh mục tối đa 4 loại hàng. Số tàu theo số người 1, 2, 3, 4: 25, 55, 55, 60, 3 cửa neo ở mọi số người, đến trong cửa sổ 225 giây. Chờ ngoài 20 giây. Trần giờ giao thương 300 giây. Kiên nhẫn Loose Bolt 60, Vừa 45, Tàu vội 30 giây. Tip tối đa 25% giá thùng nhân kiên nhẫn còn lại. Bơm khí: 50% tàu bật lúc cập, hồi 25% kiên nhẫn, cộng 10 Tally. Giờ giao thương đầu tiên 2 tàu Loose Bolt | (S) sim GD-054 cho số tàu, (G) GD-051 cho trần giờ giao thương, bơm khí, giờ giao thương đầu (ước). sim GD-054 vòng 2 |
| Tally mỗi đơn vị giá trị (GTĐ) | 10 | `kinh-te-tien-trinh.md` 2.1 |
| Giá thùng chương 1 (1 kiện = 2,5 thùng) | Phế liệu 42, cáp 40, quặng 40, băng 42, mô sinh học 54, nước tinh khiết 64, đồ Trái Đất 76, đặc sản Vành đai ngoài 80. Lồng Driftmoth 65, Skitter Ray 75, Sting Krill 55. Bậc giá chợ 0,75, sinh học 1,0, chế 1,35, sống 1,3, hiếm 1,5 | (S) GD-055 `kinh-te-tien-trinh.md` mục 3.1 |
| Tip, điểm cảng | Tip cơ bản tối đa 25% giá thùng nhân kiên nhẫn còn lại, rồi nhân hệ số tip của tàu và hệ số món mê, cộng tiền bơm khí (MVP tối đa 50% giá thùng, log 114). 1 điểm mỗi tàu xong, thêm 1 nếu còn từ 2/3 kiên nhẫn trở lên (log 113). Ngưỡng Hạng 2 tới 8: 70, 135, 285, 400, 560, 680, 910 | (L) K13, (S) GD-055 mục 3.5. Thưởng đủ đơn, thưởng nhanh bỏ từ đợt 9 |
| Hệ số ngân sách kinh tế | 0,54 (đợt 9, trước là 0,40). Giá Shop và Upgrade tăng khoảng 35% | (S) GD-055 mục 3.3 |
| Số ngày tối thiểu của chuỗi mốc truyện, chương 1 đến 5 | 7, 5, 8, 3, 3 (tổng 26) | `cot-truyen.md` mục 5 |
| Giá, công thức, chỉ số loài, tham số giờ giao thương | Ở GDD của vai giữ hệ thống. Giá chỉ ở `kinh-te-tien-trinh.md` mục 3 (tab Shop, Upgrade) | Từng GDD |

## Kết quả sim (S), bản chạy 2026-11-20, sim kinh tế chạy lại 2026-11-23

Chạy lại: `node projects/game-moi/tools/selftest.mjs`, các lệnh sim trong `projects/game-moi/tools/README.md`, `python projects/game-moi/sim/economy/sim-kinh-te.py`.

| Chỉ số | Đo được | Mục tiêu khung mục 9 | Đạt |
|---|---|---|---|
| Chương 1, một người, kịch bản trung bình | 1,77 giờ, đóng ngày 8 (sim 2026-11-23, giờ giao thương đầu ngày 5 là giờ giao thương hướng dẫn, giờ ngân sách chương 1 là 0,8 theo Lead) | 1,5 đến 2 giờ | Có |
| Cả game, một người, kịch bản trung bình | 14,2 giờ | 12 đến 15 giờ | Có |
| Nhóm 4 hết game so với một mình | 70% thời gian | 60 đến 75% | Có |
| Mỗi người nhóm 4 nhặt so với một mình | Từ 61% | Từ 60% | Có |
| Tip trong Tally của giờ giao thương (gồm bơm khí) | 26% (tệ 21%, tốt 30%) | 20 đến 30% | Có |
| Sống so với hạ, cỡ S, sau khi trừ vật tiêu hao | 1,44 đến 1,81 lần qua lưới, 1,50 đến 1,94 bắt tay (sim kinh tế 2026-11-23, log 108) | 1,2 đến 2 lần | Có |
| Đơn giao đủ ở giờ giao thương chương 1, 1 đến 4 người (luật cũ, hết hiệu lực 2026-11-20) | 92, 93, 93, 80% | 70 đến 95% | Bỏ, đo lại theo luật mới ở đợt 9 |
| Giờ giao thương khung Dave chương 1, trễ 2 giây, 1 đến 4 người (sim GD-054 vòng 2) | Tàu xong 99, 99, 99, 97%. Rảnh 14, 6, 19, 27%. Giờ giao thương 230, 251, 241, 252 giây | Rảnh không quá 30%, tàu xong 85 đến 100%, giờ giao thương 180 đến 300 giây | Có |
| Phút một chuyến, một người, chương 1 và chương 5 | 4,4 và 10,4 phút | 4 đến 6 và 10 đến 12 phút | Có |
| Tỉ lệ bị kéo về, người chơi cẩn thận, chương 1 đến 5 | 1, 1, 3, 0, 0% | Dưới 5% | Có |
| Tỉ lệ bị kéo về, người chơi tham, chương 1 đến 5 | 10, 36, 41, 29, 13% | 15 đến 40% | Chương 2, 4 đạt. Chương 1, 3, 5 lệch 1 đến 5 điểm, chấp nhận, đo lại ở playtest |

Chưa đo được bằng sim, phải chờ build: cảm giác điều khiển, độ khó thật của boss, tỉ lệ bị kéo về của người chơi thật, người chơi có hiểu giờ giao thương không.
