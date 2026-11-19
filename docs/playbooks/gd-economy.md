# Playbook - Economy, Meta & LiveOps Designer

Gộp từ playbook `economy-meta-designer` và `liveops-designer` (20/10/2026). Phần chung trước, phần riêng theo loại việc sau.

## Checklist trước khi bắt đầu

### Economy và meta
- [ ] Đọc `docs/knowledge/60-economy-meta-monetization.md` (bảng quyết định đã chốt ở các sản phẩm của studio).
- [ ] Đọc luật lõi, bản đồ mechanic, mô hình độ khó của project. DECISIONS mục booster / revive / ads.
- [ ] Loop lõi đã được xác nhận vui chưa? Chưa thì chỉ làm phần tối thiểu (revive, 1 placement) và ghi "meta chờ playtest".

### LiveOps (chỉ sau khi loop lõi vui)
- [ ] Loop lõi đã được xác nhận vui qua playtest chưa? Chưa thì phạm vi chỉ là loop level sau bộ chính và danh sách tham số nên đưa ra config.
- [ ] Đọc `docs/knowledge/60-economy-meta-monetization.md`, GDD, mô hình độ khó và bảng curve của project.
- [ ] Đọc DECISIONS: điều Lead đã bỏ (sao, đồng hồ, booster) để không đề xuất lại dưới tên sự kiện.

## Phương pháp

### Economy và meta
- Bắt đầu từ bảng "người chơi thua vì gì, đường cứu nào": Undo, revive, ads, booster. Mỗi đường giá, giới hạn, tương tác với mechanic.
- **Mọi level giải được không cần booster**. Booster là dung sai. Revive giữ khớp luật lõi (dời sang vùng giữ, không xóa).
- **Tìm ô bán được** trong bộ đệm: ô "+" cuối hàng chờ, ghế 3-4, slot. Mỗi placement ghi: điều kiện hiện, tần suất, người chơi được gì, mất gì nếu bỏ qua, giữ tới khi nào (hết lượt kể cả Undo, chơi lại thì về mặc định).
- **Đo bằng bot ở từng trạng thái** (nhờ gd-level): bảng Wl theo 2/3/4 ghế, có/không booster. Cân bằng ở trạng thái miễn phí. Ads nâng khoảng một bậc. Nút đặt ở khoảnh khắc sắp thua.
- **Trình tự mở trong FTUE và độ khó để bán** (09/11/2026): booster mở sau khi dạy xong loop lõi, tặng 1 lần dùng miễn phí. Rewarded trước, interstitial đến muộn, không ads trong onboarding. Level khó bán được nhưng retention thắng về dài hạn (King L65, Playrix L77, L93): đề xuất làm khó để bán phải kèm đo D1, D7, churn theo level và bảng 4 ô Room 8. Nguồn: `docs/knowledge/20-do-kho-va-can-bang.md` mục 9, `70-ux-ftue.md` mục 1.
- Economy tối giản: một tiền chính, bảng source/sink có lý do, giá có công thức, 3 điểm trên đường cong, 3 kịch bản (tệ / trung bình / tốt), không game over cứng.
- Progression: loop sau bộ level (từ L16 bỏ level giới thiệu), đỉnh theo chu kỳ, force-lose chỉ khi Lead chốt.
- Mỗi đổi hệ số kèm bất biến viết ra. Mọi số có nguồn hoặc ghi "ước". Bất biến phải có cách kiểm bằng máy (sim, solver, grep) và không mâu thuẫn với bảng kịch bản của chính mình, không thì bỏ.
- Số trong doc economy do máy đưa vào, không gõ tay: tham số ở `economy/tham-so.json` (lấy từ `projects/<slug>/so-hien-hanh.md`), sim `--ra` in bảng và số suy ra, `economy_doc.py ghi` rồi `economy_doc.py kiem` ra 0 lỗi trước khi báo xong. Mẫu và cách dùng: `docs/process/templates/economy-sim/README.md`. Lead đổi số thì thêm số cũ vào `cam` để máy bắt lại.
- Tham số hành vi (tỉ lệ nhặt, xác suất thua, tỉ lệ xem ads) ghi [GIẢ ĐỊNH] và chạy dải nhạy cận dưới, cận trên. Tham số làm mốc Hồi sinh dịch quá 1 level phải có dữ liệu thật (bot theo tag của gd-level, event của gd-research) trước khi chốt số. Ví dụ ở game chữ rơi, q nhạy nhất (dịch tới 4 level), f gần như không.
- Tham chiếu thị trường có nguồn (tên game, cơ chế, điều làm khác). Không đề xuất bỏ sao hay thêm đồng hồ ngược với quyết định Lead đã chốt.

### LiveOps (chỉ sau khi loop lõi vui)
- Sự kiện là biến thể trên mechanic có sẵn (theme, giới hạn, mục tiêu tích lũy, level đỉnh đặc biệt), không phải mechanic mới. Mechanic mới đi qua gd-systems.
- Mỗi tính năng: người chơi làm gì, thưởng gì, chu kỳ, điều kiện mở, điểm chạm ads/IAP, dữ liệu lưu, trạng thái UI (đủ 5 trạng thái), việc hết hạn.
- Lịch nội dung tính theo % tiến độ và chu kỳ (đỉnh mỗi 2-3 level, thở sau đỉnh). Loop sau bộ chính bỏ level giới thiệu.
- Remote config: tham số nào được phép đổi ngoài build, khoảng an toàn (Safe Range) cho từng tham số, ai được đổi. Mọi giá trị trong khoảng phải đã được bot đo.
- A/B: giả thuyết một câu, chỉ số thành công, cỡ mẫu và thời gian, điều kiện dừng sớm. Biến thể độ khó đo bot trước khi lên.
- Phản biện theo khung Ưu / Nhược / Chi phí / Thay thế rẻ hơn / Đề xuất. Với game chưa có người chơi thì "thay thế rẻ hơn" thường là không làm.
- Bảng trong doc economy do sim in ra, tham số ở `tham-so.json`. Đổi tham số thì chạy sim và `kiem-so-doc` trước khi báo (lỗi cũ E1, E6 do chép tay).
- Mỗi bất biến có cách kiểm bằng máy (sim, solver, grep) và không mâu thuẫn bảng kịch bản của chính mình. Tham số hành vi (tỉ lệ nhặt, xác suất thua, tỉ lệ xem ads) ghi nguồn hoặc chạy dải nhạy, nói mốc chính có dịch quá 1 level không. Đổi hệ số thưởng thì luôn có kịch bản thưởng thấp hoặc bằng 0 (Hồi sinh còn với tới không, ở level nào) và một câu hỏi Lead kèm đề xuất dựa trên bảng đó (bài kiểm lần 3: thiếu ý này).

## Câu hỏi phải tự trả lời trước khi báo xong

### Economy và meta
- Placement nào chặn đường thắng hoặc phá cam kết với người chơi không?
- Bảng bot theo trạng thái đã có chưa, hay chỉ là nhận định?
- Booster tương tác với từng mechanic đã có trường hợp biên chưa (khay còn 1 ô mà lấy cặp Link)?
- Giá có công thức không, hay số bịa?

### LiveOps (chỉ sau khi loop lõi vui)
- Tính năng này có thay đổi độ khó hoặc economy không, đã có bảng bot chưa?
- Có đề xuất lại thứ Lead đã bỏ không?
- Dữ liệu nào cần để biết tính năng có hiệu quả, đã gửi sang gd-research chưa?
- Người chơi không tham gia sự kiện có bị thiệt trong loop chính không?

## Lỗi hay gặp

- Game tile chữ nhiều tầng: "+1 ô khay" bị coi là booster -> Lead chuyển thành ô khóa xem ads -> phân biệt booster (dùng chủ động) với mở rộng sức chứa (bán một lần mỗi ván).
- game-tycoon-a: marketing mặc định làm lỗ, hợp đồng luôn lợi hơn làm game -> chỉ đo kết quả, không đo giá trị kỳ vọng lựa chọn -> bảng lãi/tuần cho từng lựa chọn.
- Game phục vụ Order: ghế 3-4 làm màn 1-8 vô nghĩa với mọi số ghế -> ads chỉ có giá trị ở màn khó. Thiết kế placement theo bậc khó.
- game-tycoon-a: meta thiết kế trước khi loop lõi vui phải vào icebox -> Sprint 1 chỉ loop lõi.
- Game phục vụ Order: ghế mở bằng ads chỉ có giá trị ở màn khó -> placement và sự kiện theo bậc khó, không rải đều.
- Game tile chữ nhiều tầng: hệ sao bị bỏ vì "không có logic sao" -> không thêm hệ thưởng không gắn với hành vi thật.
- Game chữ rơi: doc ghi 10 coin, L3, 209 quân khi sim đã 5 coin, L6, 192 quân (E1, E6) -> dán số tay từ output sim -> bảng do sim in, `kiem-so-doc` trước khi báo.
