# Đề xuất: ca cảng theo khung bán sushi của Dave the Diver

Trạng thái: ĐỀ XUẤT, chờ Lead chốt bằng lời. Chưa sửa khung, GDD hệ thống, sim, Sheet. File này là nơi duy nhất giữ đề xuất tới khi chốt.
Nguồn: Lead 2026-11-20: "tôi muốn làm phần này giống phần bán sushi trong Dave the Diver để nó được đơn giản và game vẫn vui". Lead chọn hướng "Khung Dave, giữ cảng" ở câu hỏi của GDM (nút gợi sẵn, chưa tính là chốt luật lõi).

## 1. Ý đồ

- Ca cảng còn 2 động từ chính: mang kiện tới đúng tàu, làm việc phụ cho tàu đang chờ. Bỏ chế và đóng kiện trong ca.
- Quyết định dồn về trước ca: chọn bán gì, bao nhiêu. Giống Dave chọn thực đơn từ đồ bắt về.
- Giữ chủ đề cảng và thương nhân, giữ K17 (không nấu ăn). Lấy cấu trúc của Dave, không chép luật.

## 2. Luật đề xuất (thay K13 và luật 18 tới 36 của `gdd/he-thong/tram-va-cang.md`)

| Số | Luật |
|---|---|
| D1 | Trước ca, ở khoang liên lạc, người chơi lập danh mục bán: chọn tối đa M loại kiện từ hàng đang có trong kho, đặt số kiện mỗi loại, không vượt hàng có. Thông dịch viên đóng kiện tự động lúc Mở ca, không tốn thời gian ca |
| D2 | Kiện tinh cần chế ở xưởng thì phải chế xong trước ca. Xưởng vẫn chạy ngoài ca và chế qua đêm (giữ luật 25 phần ngoài ca) |
| D3 | Trong ca, tàu cập bến theo nhịp. Mỗi bến chứa một tàu. Mỗi tàu gọi đúng 1 loại kiện còn trong danh mục, hiện bằng bong bóng trên bến |
| D4 | Kiện được gọi hiện ở quầy cảng sau vài giây. Người chơi nhặt kiện, mang tới đúng bến, nhấn tương tác. Sai bến thì tàu từ chối, kiện ở lại tay |
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

## 4. Số khởi điểm (đều là ước, chờ sim)

| Tham số | Khởi điểm | Ghi chú |
|---|---|---|
| Số loại kiện tối đa trong danh mục M | 4 ở chương 1 | Tăng theo Hạng cảng |
| Số tàu một ca, 1 người, chương 1 | 6 | Ca nhiều tàu, mỗi tàu 1 món |
| Kiên nhẫn tàu ngắn, vừa, dài | 30, 45, 60 giây | |
| Kiện hiện ở quầy sau khi gọi | 3 giây | |
| Tip tối đa | 30% giá kiện | |
| Hồi kiên nhẫn khi bơm khí | 25% thanh | |
| Thời lượng ca tối đa | 240 giây | Giữ |
| Số tàu theo N | 1 người 6, mỗi người thêm 3 | Dò bằng sim để mỗi người rảnh không quá 30% |

## 5. Phản biện còn mở, phải đo

1. Mối nối đơn hàng với chuyến ra ngoài yếu đi. D9 bù bằng đơn đặt trước. Cần đo: người chơi có đổi dải để đi theo đơn đặt trước không.
2. Bốn người cùng chỉ có việc bưng thì có thể rảnh tay. Cần sim phần trăm thời gian rảnh ở N bằng 1 tới 4.
3. Lập danh mục phải là một quyết định thật (bán thứ đắt ít người gọi hay thứ rẻ hay được gọi). Cần sim Tally mỗi ca theo 3 kiểu danh mục.
4. Tally một ca phải giữ mốc 60% giá trị hai chuyến đầy túi (gd-economy mục 8.4), nếu không thì phải chỉnh giá kiện.

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
