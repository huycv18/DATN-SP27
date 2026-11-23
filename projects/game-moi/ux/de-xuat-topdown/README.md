# Bố cục top-down 45 độ: UI-10 và UI-40 (GD-077)

Trạng thái: Đã duyệt (Lead, 2026-11-23, ghi ở `DECISIONS.md`). Bốn điểm đã chép vào `ux-ui.md`, key string `btn.trip_map` và `btn.ping` đã thêm. Bản vẽ này là gốc để vẽ lại hai khung Figma "Wireframe MVP". Không sửa Figma, GDD, Sheet. Greybox, không phải art. Mở `UI-10.svg` và `UI-40.svg` bằng trình duyệt (1920x1080). Lớp ghi chú màu hồng nằm trong nhóm `ghichu`, ẩn đi là còn khung sạch.

Thước chung (từ `ky-thuat.md` 2.6): 1 u = 108 px theo chiều ngang, 76 px theo chiều dọc mặt đất (nén 0,71). Sprite đứng cao 1 u = 108 px, chân đặt ở điểm dưới thân, có bóng chân. Vùng nhìn 17,8 x 14,1 u mặt đất. Vùng an toàn 5% = 96 px ngang, 54 px dọc.

## UI-40 HUD giờ giao thương

| Vùng | Nội dung | Nguồn luật |
|---|---|---|
| Dải trên, cao 84 px (56 x 1,5) | HCH-01 "Còn 2:41", HCH-02 "Tally 412 Tip 86", HCH-03 "Điểm cảng 12 Tàu 7/25". Phần còn lại của dải để trống | ux-ui 2.7, strings hud.shift.left, hud.tally.shift, hud.tip, hud.port_score, hud.ships |
| Tàu chờ ngoài, mép trên | Ba tàu chỉ thấy nửa dưới, nét đứt, vòng chờ đếm giây. Không bong bóng | HCH-06, ux-ui 2.7 luật 5, tram-va-cang 2.6b |
| Tàu cập, ở 3 cửa neo | Sprite đứng, chân ở mép bắc hành lang bến. Bong bóng trên đầu: hình thùng, tên món, thanh kiên nhẫn có vạch 2/3 và 1/3. Nhãn "Đặt trước" ở tàu 2, chip "Bơm khí!" cạnh bong bóng tàu 3 | HCH-06, HCH-12, strings lbl.preorder, lbl.pump_ask |
| Dải mép bắc hành lang bến | Ô quầy 1, 2, 3 ở x 204, 330, 458 px. Cửa neo 1, 2, 3 ở x 997, 1358, 1718 px, vẽ nhãn "Cửa neo n" ngay dưới đường mép. Quầy tới cửa neo thẳng hàng một trục | tram-va-cang 2.6b bảng vị trí (u nhân 108) |
| Sàn chạy, 5,7 u dọc | Người chơi cầm thùng Cáp, gợi ý "E giao thùng". Đồng đội có tên "Bo" khi co-op. Kho chỉ là hình ở phía nam quầy | HCH-11, HCH-05, tram-va-cang 2.6b |
| Dải dưới, cao 126 px (84 x 1,5) | HCH-04 "Danh mục còn" với 3 loại (Quặng mờ kèm "Hết"), HCH-05 "Cầm Cáp, cửa neo 3" | ux-ui 2.7, strings hud.catalog.left, state.sold_out, hud.carry |
| Kiểm tỉ lệ | Ô 1 tới cửa neo 3 = 1514 px = 14,03 u, lề 204 và 202 px (1,9 u mỗi bên), vừa 1920 px | ky-thuat luật 43, tram-va-cang 2.6b |

Thứ tự đọc: giờ còn lại (trái trên), bong bóng tàu, người chơi và gợi ý phím, danh mục (dải dưới).

## UI-10 Trạm mặt bằng

Camera ở Zmin bám người chơi, chân người chơi ở giữa màn (960, 540). Cảnh chụp lúc người chơi đứng ở cửa Khoang neo (hỏng, mục tiêu hiện tại).

| Vùng | Nội dung | Nguồn luật |
|---|---|---|
| Cảnh | Hành lang chính rộng 3 u nằm ngang, phía bắc: Bến Skiff, Khoang dẫn đường (khóa, "Chưa mở ở chương này"), Khoang liên lạc (hỏng, khung đỏ). Phía nam: Cửa khí, Khoang neo (hỏng, khung đỏ), Buồng ngủ đông (sáng). Tường thấp 0,8 u che 86 px nền phòng phía bắc, khe cửa 2 u | tram-va-cang 2.6b, ux-ui UI-10 trạng thái, err.locked |
| Giữa màn | Người chơi, vòng sáng mục tiêu ở cửa Khoang neo, gợi ý "Giữ E sửa" | HCH-11, strings prompt.repair |
| Trên trái | Khối Chờ nhóm (nét đứt, chỉ khi có người ngoài chuyến): hàng đồng đội (tên, thanh Oxy, trạng thái "Đã về trạm"), nút "Xem bản đồ chuyến", nút "Ping" | ux-ui luật 33, HUD-07, title.wait, hud.team.home |
| Trên giữa | HTR-01 "Ra ngoài sau 24 giây", "Chờ: Bo" (nét đứt, chỉ khi có người xác nhận) | HTR-01, hud.confirm.go, hud.confirm.wait |
| Trên phải | HCH-09 "Tally 412" và "Hạng 1 (3/8)", HUD-13 mục tiêu "Sửa Khoang neo", HTR-02 "Chuyến 1/2" | HCH-09, HUD-13, hud.rank, hud.trip_count |
| Dưới phải | HCH-10 sơ đồ trạm thu nhỏ, HCH-07 hàng đợi xưởng, HTR-03 "Đã lưu" | ux-ui 2.7 |
| Trong cảnh | Đồng đội "An" ở hành lang, dấu cảnh chờ (HTR-04) trên cửa Khoang liên lạc | HUD-07, HTR-04 |

Thứ tự đọc: người chơi và gợi ý phím, mục tiêu, Tally, khối nhóm khi có, sơ đồ thu nhỏ.

## Khác gì so với khung nhìn ngang cũ

| Mục | Khung ngang cũ | Đề xuất top-down |
|---|---|---|
| Trạm | Mặt cắt, người chơi chạy trái phải, lên xuống tầng | Mặt bằng, đi 8 hướng, hành lang ngang ở giữa, khoang hai bên |
| Cảng | Quầy và cửa neo cùng hàng ngang trên một sàn | Vẫn một trục tây đông, nhưng thành dải mép bắc, người chơi có chiều sâu (sàn 5,7 u) để tránh nhau |
| Tàu | Cùng mặt phẳng với quầy | Nằm phía bắc, chân ở mép bắc, tàu chờ xếp ở mép trên, không che người chơi |
| Chiều đứng | Không có | Sprite đứng có bóng chân. Tường phía bắc che nền phía sau nó, nên dùng tường thấp hoặc dither (ky-thuat luật 40) |
| Sơ đồ thu nhỏ | Mặt cắt 3 tầng | Mặt bằng bắc ở trên, dời xuống góc dưới phải |

## [GIẢ ĐỊNH]

| Mã | Nội dung | Ai kiểm |
|---|---|---|
| G1 | Đã chốt: dải 84 px, chữ 26 px đặt trong vùng an toàn dọc 54 px | Đã duyệt |
| G2 | Chiều sâu bắc nam của sàn bến phía bắc đường mép khoảng 2,9 u. Chưa đặt trong 2.6b | gd-tech |
| G3 | Sàn chạy phía nam đường mép khoảng 5,7 u (phần còn lại của 14,1 u sau dải HUD) | gd-tech, gd-quan |
| G4 | HCH-05 lệch phải giữa màn để HCH-04 đủ 3 loại không đè | gd-ux |
| G5 | Mỗi khoang 5,9 u rộng x 6 u sâu, hành lang 3 u. Số do gd-world và art quyết | gd-world |
| G6 | Đã chốt: tường thấp 0,8 u ở mặt bắc của phòng phía bắc | Đã duyệt |
| G7 | Khối Chờ nhóm gom HUD-07 và hai nút vào một khối | gd-ux, Lead |
| G8 | Đã chốt: HCH-10 ở góc dưới phải | Đã duyệt |
| G9 | Mọi bố cục và cỡ chữ là greybox, chữ HUD 22 đến 32 px ở 1080p (tối thiểu 18 px theo ux-ui) | gd-ux |

## Lệch giữa đề bài và luật hiện hành

| Chỗ | Điều thấy | Cách xử lý |
|---|---|---|
| "Giờ trong ngày" ở HUD trạm | ux-ui.md chưa có phần tử HUD đồng hồ trong ngày, chưa có key | Đã chốt: không có |
| Nút "Xem bản đồ chuyến" và "Ping" ở khối Chờ nhóm | Có trong ux-ui luật 33 và C9 nhưng không có key riêng trong `strings.tsv` (chỉ có hud.ping.left) | Đã thêm key btn.trip_map, btn.ping |
| `hud.rank` | strings.tsv gán cho UI-40, ux-ui HCH-09 nói nhường chỗ ở giờ giao thương | Không vẽ trong UI-40, vẽ ở UI-10 |

## Quyết định đã chốt (từ 4 câu hỏi)

1. Dải HUD trên và vùng an toàn dọc 5% (G1): (a) dải 84 px, chữ lệch lên sát 54 px, chấp nhận chữ sát mép (nghiêng về cái này, giữ số 56 và 84 đã chốt). (b) tăng dải trên lên 108 px, tức 72 px ở 720p, hơi hẹp sàn chạy.
2. Giờ trong ngày ở HUD trạm: (a) không có, vì luật chưa có đồng hồ ngày (nghiêng về cái này). (b) thêm một phần tử HTR-05 hiện ngày và pha, cần Lead chốt luật trước.
3. Sơ đồ trạm thu nhỏ (G8): (a) dưới phải như bản vẽ này, không che hành lang (nghiêng về cái này). (b) giữ dưới Tally ở trên phải đúng ux-ui, chấp nhận che một phần hành lang phía đông.
4. Phòng phía bắc bị tường thấp che 86 px nền (G6): (a) tường thấp 0,8 u, thấy đồ trong phòng qua khe cửa và phần trên (nghiêng về cái này). (b) tường cao dùng dither theo ky-thuat luật 40, đẹp hơn nhưng phụ thuộc shader.
