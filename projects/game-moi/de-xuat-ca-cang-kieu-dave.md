# Đề xuất: ca cảng theo khung bán sushi của Dave the Diver

Trạng thái: ĐÃ CHỐT 2026-11-20 (Lead: "Oke phần này luồng oke rồi cần làm cho nó tốt hơn thôi là được. Update vào GDD đi"). Luật chuẩn từ nay ở `gdd/he-thong/tram-va-cang.md`, file này chỉ để tra lý do và số đo demo.
Nguồn: Lead 2026-11-20: "tôi muốn làm phần này giống phần bán sushi trong Dave the Diver để nó được đơn giản và game vẫn vui". Lead chọn hướng "Khung Dave, giữ cảng" ở câu hỏi của GDM (nút gợi sẵn, chưa tính là chốt luật lõi).

## 1. Ý đồ

- Ca cảng còn 2 động từ chính: mang kiện tới đúng tàu, làm việc phụ cho tàu đang chờ. Bỏ chế và đóng kiện trong ca.
- Quyết định dồn về trước ca: chọn bán gì, bao nhiêu. Giống Dave chọn thực đơn từ đồ bắt về.
- Giữ chủ đề cảng và thương nhân, giữ K17 (không nấu ăn). Lấy cấu trúc của Dave, không chép luật.

## 2. Luật đề xuất (thay K13 và luật 18 tới 36 của `gdd/he-thong/tram-va-cang.md`)

| Số | Luật |
|---|---|
| D0 | Đơn vị bán trong ca là thùng. Một thùng bằng 0,4 kiện: giá kiện chia 2,5, số trong kho nhân 2,5. Lồng sinh vật sống không chia, một lồng là một đơn vị. Lý do: bot đo ở bản 10 tàu, mỗi tàu một kiện thì người chơi rảnh 76% ca. Chia nhỏ để có 25 tàu một ca mà Tally một ca không đổi |
| D1 | Trước ca, ở khoang liên lạc, người chơi lập danh mục bán: chọn tối đa M loại hàng từ kho, đặt số thùng mỗi loại, không vượt hàng có. Thông dịch viên đóng thùng tự động lúc Mở ca, không tốn thời gian ca |
| D2 | Kiện tinh cần chế ở xưởng thì phải chế xong trước ca. Xưởng vẫn chạy ngoài ca và chế qua đêm (giữ luật 25 phần ngoài ca) |
| D3 | Trong ca, tàu cập theo nhịp. Bến 1 có 3 cửa neo, mỗi cửa neo chứa một tàu (giống 3 ghế của quán). Cửa neo đều bận thì tàu chờ ngoài, quá giờ chờ thì bỏ đi. Mỗi tàu gọi đúng 1 thùng còn trong danh mục, hiện bằng bong bóng trên tàu |
| D4 | Thùng được gọi hiện ở ô quầy cảng cùng màu với cửa neo sau 3 giây. Người chơi nhặt thùng, mang tới đúng cửa neo, nhấn tương tác. Mỗi lần mang 1 thùng. Sai cửa neo thì tàu từ chối, thùng ở lại tay |
| D5 | Mỗi tàu có thanh kiên nhẫn giảm dần. Hết kiên nhẫn thì tàu rời, chỉ mất món đó. Kiện chưa giao quay về kho, không mất |
| D6 | Việc phụ: tàu đang chờ thỉnh thoảng bật yêu cầu bơm khí. Làm xong thì hồi một phần kiên nhẫn và cộng tip nhỏ. Đây là chỗ thay cho rót trà của Dave |
| D7 | Giao đúng thì nhận giá kiện cộng tip theo phần kiên nhẫn còn lại. Tally trả ngay |
| D8 | Tàu chỉ gọi loại kiện còn hàng trong danh mục. Danh mục hết sạch thì không tàu nào cập thêm, ca kết thúc sớm |
| D9 | Đơn đặt trước: bảng tàu buổi sáng hiện 1 tới 2 đơn đặt trước của tàu cụ thể, loại kiện cụ thể, giá cao. Món đó phải có trong danh mục khi tàu tới. Đây là mối nối giữ việc đọc bảng tàu rồi chọn dải cho chuyến |
| D10 | Ca kết thúc khi hết giờ ca hoặc hết danh mục. Bảng kết ca hiện số tàu phục vụ, Tally, tip, điểm cảng, lời một thương nhân |
| D11 | Điểm cảng tính trên mỗi tàu phục vụ xong, thêm khi có tip cao. Hạng cảng không giảm (giữ luật 39 tới 42, đổi nguồn điểm) |
| D12 | Co-op: số tàu trong ca tăng theo số người N, thay cho quy mô đơn. Người vào giữa ca không đổi lịch ca đó |
| D13 | Loại tàu khác nhau ở tối đa 3 trục: kiên nhẫn, loại kiện hay gọi, một luật riêng (giữ luật 37). Ví dụ Vellune 15 giây chào hỏi chưa nhận kiện, Glasswing chỉ gọi hàng sống và đặc sản, Iron Keel gọi bằng gợi ý thay vì tên kiện |

## 3. Giữ, bỏ, đổi

| Nhóm | Luật hiện tại |
|---|---|
| Giữ nguyên | Mở ca khóa cửa khí, một ca mỗi ngày, bỏ ca không phạt (luật 19, 63 tới 66). Không trừ Tally, không giảm Hạng cảng. Tàu theo mốc truyện (luật 38, TA11). Sự cố từ chương 3 (luật 43 tới 46), sửa lại cho hợp quầy cảng |
| Bỏ | Đơn nhiều dòng (luật 23), máy đóng kiện chạy tay trong ca (24), chế trong ca (25 phần trong ca), kệ kiện (26), tốc độ chạy theo cỡ kiện và khiêng chung (28), đơn đủ, đơn trượt, thưởng đủ đơn, thưởng nhanh (31, 32) |
| Đổi | Đóng kiện trước (luật 53 tới 58) thành lập danh mục và chế trước. Người về trạm sớm (C9) làm xưởng và danh mục. Lịch tàu sinh theo danh mục thay vì sinh đơn (luật 67 tới 70) |

## 4. Số khởi điểm (ước, đã chạy bot trong demo, chưa qua sim chính thức của gd-tech)

| Tham số | Khởi điểm | Ghi chú |
|---|---|---|
| Số loại hàng tối đa trong danh mục M | 4 ở chương 1 | Tăng theo Hạng cảng |
| Cửa neo ở bến 1 | 3 | Thêm cửa neo là một nâng cấp cảng |
| Số tàu một ca, 1 người, chương 1 | 25 | Trước là 6, bot đo quá rảnh |
| Giãn cách tàu | 7 tới 11 giây | Trước là 16 tới 24 |
| Chờ ngoài tối đa | 20 giây | |
| Kiên nhẫn Loose Bolt, Tàu vội | 60, 30 giây | Tàu vội tip gấp đôi |
| Thùng hiện ở quầy sau khi gọi | 3 giây | |
| Tip tối đa | 30% giá thùng nhân phần kiên nhẫn còn lại | Tikko gọi đồ Trái Đất thì tip gấp đôi |
| Bơm khí | Bật sau 10 tới 18 giây ở cửa neo, giữ 1 giây, hồi 25% kiên nhẫn, cộng 10 Tally | |
| Đơn đặt trước | 1 thùng đồ Trái Đất của Tikko, giá gấp 1,5, tàu thứ 9 | |
| Điểm cảng | 1 mỗi tàu, thêm 1 nếu còn trên 2/3 kiên nhẫn | Ngưỡng hạng phải đặt lại vì một ca cho tới 50 điểm |
| Thời lượng ca tối đa | 240 giây | Đợt 9 đổi thành 300 giây (GD-051), xem `tram-va-cang.md` |
| Số tàu theo N | 1 người 25, mỗi người thêm (chưa đo) | Co-op chưa có trong demo |

Bot trong demo (30 ca mỗi dòng, danh mục phế liệu 10, cáp 8, quặng 8, đồ Trái Đất 5, bot chơi đúng, trễ phản xạ là thời gian chờ trước mỗi lần đi):

| Bản | Trễ phản xạ | Tàu giao xong | Tàu rời | Ca (giây) | Rảnh | Tally | Tip trong Tally |
|---|---|---|---|---|---|---|---|
| 10 tàu, mỗi tàu 1 kiện | 1 giây | 10/10 | 0 | 194 | 76% | 1853 | |
| 25 tàu, mỗi tàu 1 thùng | 1 giây | 25/25 | 0 | 230 | 45% | 1796 | 26% |
| 25 tàu, mỗi tàu 1 thùng | 2 giây | 24,9/25 | 0,1 | 231 | 24% | 1769 | 25% |
| 25 tàu, mỗi tàu 1 thùng | 3 giây | 24,1/25 | 0,9 | 235 | 5% | 1663 | 23% |

Danh mục khác ở trễ 2 giây: bỏ cáp và quặng, lấy băng và lồng (tổng 21 thùng) thì 4 tàu không tới, Tally 1542. Bỏ đồ Trái Đất thì trượt đơn đặt trước, Tally 1739. Lập danh mục có tác động nhưng nhỏ, xem mục 5 điểm 3.

## 5. Phản biện còn mở, phải đo

1. Mối nối đơn hàng với chuyến ra ngoài yếu đi. D9 bù bằng đơn đặt trước. Cần đo: người chơi có đổi dải để đi theo đơn đặt trước không.
2. Một người, bản 25 tàu đạt mức rảnh 24% ở trễ 2 giây. Bốn người cùng bưng thì chưa đo, cần sim ở N bằng 1 tới 4.
3. Lập danh mục mới khác nhau ở đủ hàng và đơn đặt trước, chênh tối đa khoảng 13% Tally. Giá các loại hàng chương 1 quá sát nhau (48 tới 56 Tally một thùng) nên chưa có thế cân "thứ đắt ít tàu gọi, thứ rẻ hay được gọi". Cần gd-economy giãn giá và gắn sở thích tàu vào giá.
4. Tàu gần như không bao giờ bỏ đi (dưới 1 trên 25 tàu ở trễ 3 giây). Áp lực chỉ nằm ở tip, giống Dave. Nếu muốn ca căng hơn thì giảm kiên nhẫn chứ không thêm hình phạt.
5. Tally một ca phải giữ mốc 60% giá trị hai chuyến đầy túi (gd-economy mục 8.4). Tip chiếm khoảng 25% Tally một ca là nguồn mới, gd-economy phải tính lại.

## 5b. Demo nháp

`tools/prototype/ca-cang-dave.html`, mở thẳng bằng trình duyệt, không cần cài gì. Có màn lập danh mục, ca 25 tàu với 3 cửa neo, bơm khí, đơn đặt trước, bảng kết ca. Điều khiển A, D hoặc mũi tên để chạy, E hoặc Space để nhặt, giao, bơm khí, bấm chuột vào quầy hay cửa neo để tự chạy tới, P tạm dừng. Chưa có: co-op, sự cố, hình art, âm thanh. Hàm `window.__ca()` trả trạng thái ca để chạy bot.

## 6. Khi Lead chốt: việc và vai

| Thứ tự | Vai | Việc |
|---|---|---|
| 1 | GDM | Sửa K13, K22 phần ca, C8, C9 trong `gdd/00-khung-game.md`, ghi DECISIONS, sửa `so-hien-hanh.md` |
| 2 | gd-quan | Viết lại luật ca cảng trong `gdd/he-thong/tram-va-cang.md` theo mục 2 và 3, bảng loại tàu, trạng thái tàu |
| 3 | gd-items | Bỏ cỡ kiện và tốc độ mang, rà nhóm hàng HC01 tới HC15 cho danh mục |
| 4 | gd-economy | Giá kiện, tip, điểm cảng, Tally một ca theo mốc 60% |
| 5 | gd-tech | Sim ca cảng mới thay GD-030, đo mục 5 |
| 6 | gd-ux | Màn lập danh mục, bong bóng gọi món, thanh kiên nhẫn, HUD ca |
| 7 | gd-qa | Nghiệm thu GDD, sim, rồi GDM dán Sheet các tab Customer, ECONOMIC, WIREFRAME, Tutorials |
