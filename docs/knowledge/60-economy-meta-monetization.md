# Economy, meta và monetization cho casual puzzle

Nguồn: game tile chữ A (GDD 24/09/2026), game tile drop A (06/10/2026), game phục vụ Order A (20/10/2026), game bi drop A, game-tycoon-a (economy tycoon), game lặn quán ăn A.

## 1. Quyết định đã chốt ở các sản phẩm của studio (tái dùng làm điểm xuất phát)

| Hạng mục | Quyết định | Nguồn |
|---|---|---|
| Sao | Bỏ hệ 3 sao, chỉ thắng/thua ("không có logic sao, bỏ đi") | game tile chữ A 24/09, gỡ 02/10 |
| Booster | 4 booster: Gợi ý chữ, Hoàn tác, Nam châm, Xáo. "+1 ô khay" không là booster mà thành 2 ô khóa "+" cuối khay, xem ads để mở | game tile chữ A 24/09 |
| Booster | Không booster, chỉ Revive | game tile drop A 06/10 |
| Revive | Xem ads, 1 lần/level, vợt dọn chữ trong khay sang hàng giữ riêng, chữ tự bay vào order khi trùng (không xóa chữ, giữ khớp chính xác) | game tile chữ A |
| Revive | 900 coin, thu hết quân hàng chờ vào một Box, quân trong Box tự nhảy vào order khi trùng. Bản này là bản chốt 06/10/2026, ghi chép "Revive thêm 1 order" trong sheet gốc là SAI (Lead: không bao giờ có order thứ 3) | game tile drop A |
| Hàng chờ | 7 ô = 5 mở + 2 ô "+" mở bằng xem ads, đầy là thua ngay | game tile drop A |
| Ghế khách | Mặc định 2 ghế, ghế 3-4 mở bằng rewarded ad mỗi ván, ghế mở giữ tới hết lượt kể cả Undo, chơi lại về 2 ghế, nút đặt ngay trên đồng hồ đếm ngược | game phục vụ Order A 20/10 |
| Đồng hồ | Không có đồng hồ đếm giờ trong puzzle (0:20 trong demo là ảnh tạm) | game tile drop A |
| Loop sau bộ | Sau L50 loop từ L16 bỏ các level giới thiệu (21/31/41), game screw tổ ong A lặp 16-50 từ lượt 51 | game tile chữ A 28/09, Bee |
| Force lose | Lần đầu gần như chắc thua, chơi lại vẫn khó như cũ, chỉ khi Lead chốt | game tile drop A |
| Thua có cứu | Điều kiện thua thành đồng hồ 5 s + tín hiệu đỏ + đường cứu (Undo, Ads) | game phục vụ Order A, game bi drop A |

## 2. Nguyên tắc

- **Mọi level giải được không cần booster.** Đo độ khó không dùng booster. Booster và revive là dung sai cho người chơi, không phải điều kiện thắng.
- **Đòn bẩy monetization là đòn bẩy độ khó, phải đo bằng bot** ở từng trạng thái (2/3/4 ghế, có/không booster). game phục vụ Order A Wl theo ghế: L9 75/100/100%, L12 33/38/60%, L14 35/78/90%, boss 3/15/23%. Màn 1-8 thắng 100% ở mọi số ghế. Ghế thêm chủ yếu cứu người chạm bừa (Wr L6 48% lên 98%). Cân bằng ở trạng thái miễn phí. Ads nâng khoảng một bậc độ khó.
- **Nút xem quảng cáo đặt ở khoảnh khắc sắp thua** (trên đồng hồ đếm ngược, khi hàng chờ sắp đầy), không chặn đường thắng, không làm hỏng cam kết với người chơi.
- Revive phải **giữ khớp chính xác với luật lõi** (không xóa vật thể, chỉ dời sang vùng giữ, vật thể tự về đúng chỗ khi trùng).
- Lead tự nghĩ ra đòn bẩy kiếm tiền từ cơ chế ("càng nhiều slot mở ra thì game càng dễ đi"): khi thiết kế bộ đệm, luôn hỏi "ô nào bán được".
- Meta vào sau khi loop lõi được xác nhận vui. Sprint 1 chỉ loop lõi. Prototype không có meta nặng.

## 3. Economy tối giản (từ playbook game-designer và game-tycoon-a)

- Một tiền tệ chính (+ một tài sản studio nếu là tycoon). Bảng nguồn (source) và chỗ tiêu (sink). Mỗi sink phải có lý do người chơi muốn tiêu.
- Giá khởi điểm có công thức: thời gian đạt mốc = tổng chi phí / tốc độ kiếm. Tính thử 3 điểm trên đường cong rồi mới chỉnh theo playtest. Revive 900 coin so với thu nhập mỗi level là câu hỏi phải trả lời bằng bảng.
- Không game over mềm: quỹ khẩn cấp một lần rồi khóa chi tiêu tới khi dương (tycoon). Đêm tệ vẫn mua được nâng cấp rẻ nhất (game lặn quán ăn A 3 kịch bản: tệ 44, trung bình 99, nâng cấp rẻ nhất 40).
- Báo cáo tài chính tách đầu tư khỏi lỗ. Quyết định rủi ro hiện hệ quả bằng số.
- Mỗi thay đổi hệ số đi kèm một bất biến viết ra (ví dụ: đưa đúng món khách đặt luôn lời hơn).
- Cân bằng economy bằng sim theo `20-do-kho-va-can-bang.md` mục 8: mốc có nguồn, núm gap, p10/p50/p90, đo cả giá trị kỳ vọng các lựa chọn.

## 4. Câu hỏi phải trả lời trong GDD phần meta

1. Người chơi thua vì gì, và có đường cứu nào (Undo, revive, ads, booster)? Mỗi đường cứu giá bao nhiêu và giới hạn mấy lần?
2. Ô nào, ghế nào, slot nào là "bán được" và mở bằng gì? Mở rồi giữ tới khi nào?
3. Sau khi hết bộ level thì chơi gì? Loop từ đâu, bỏ level nào?
4. Booster tương tác với từng mechanic ra sao (Hoàn tác với Link? Nam châm với quân úp?). Trường hợp biên: khay còn 1 ô mà booster lấy 2 quân.
5. Tiền vào từ đâu mỗi level (thắng, thua, sao nếu có), tiền ra đâu, 3 điểm trên đường cong.
