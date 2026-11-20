# GDD hệ thống: UX / UI (bản đồ màn, HUD, wireframe, input, FTUE chương 1, strings)

Project: game-moi | Chủ sở hữu: gd-ux | Trạng thái: bản đủ, nháp chờ gd-qa (2026-11-20) | Nguồn: khung K1 đến K21, C1 đến C9, brief GD-029 (`briefs/dot2-kinh-te-ux-ky-thuat.md`), 7 GDD đợt 1 đọc ngày 2026-11-20, `docs/knowledge/indie/45-ux-ui.md`

Mọi số là khởi điểm "ước" hoặc lấy nguyên từ GDD đợt 1 (ghi nguồn). Chưa có build nên chưa đo. ID vật phẩm, tên dụng cụ, tên người theo `vat-pham.md`, `cot-truyen.md`. Số kinh tế (giá, Tally) thuộc gd-economy, GDD này chỉ chỗ hiển thị.

## Tóm tắt

Hệ thống này quy định người chơi thấy gì, bấm gì và học game theo thứ tự nào: 35 màn, HUD ngoài không gian và trong ca cảng, bảng phím cho bàn phím chuột và gamepad, 36 bước FTUE của chương 1, checklist phản hồi cho các khoảnh khắc chính và bảng strings có giới hạn ký tự. Phục vụ P1 (hệ quả của mỗi hơi thở phải đọc được bằng số), P2 (mang về thì thấy trạm đổi), P3 (cùng một giao diện cho 1 đến 4 người). Tầng: trình bày. Ưu tiên: bản đầu (chương 1). Phụ thuộc chính: `nguoi-choi.md` (Oxy, túi, phím), `tram-va-cang.md` (ca cảng, khoang), `map.md` (la bàn, beacon), `combat-driftlife.md` (tín hiệu đòn, choáng), `vat-pham.md` (túi, kiện), gd-economy (giá), gd-story (thoại, tên).

## Hiện hành

| Mục | Giá trị khởi điểm | Nhãn |
|---|---|---|
| Khung hình | 16:9, thiết kế ở 1280x720, lề an toàn 5% (64 x 36 px), chiều cao camera ngoài không gian 10 u | MVP |
| Cỡ chữ | Thân chữ tối thiểu 12 px ở 720p (tương đương 18 px ở 1080p), người chơi chọn 100%, 150%, 200% | MVP |
| Số màn | 35 màn (bảng 2.2), 33 màn MVP và 2 màn Sau MVP | MVP và Sau MVP |
| HUD ngoài không gian | 15 phần tử HUD-01 đến HUD-15, chỉ Oxy, túi, dụng cụ luôn hiện | MVP |
| HUD ca cảng | Giờ ca, danh sách tàu, đơn của tàu ở bến, kiện cầm, kệ kiện, máy đóng kiện | MVP |
| HUD trạm | 4 phần tử HTR-01 đến HTR-04: đồng hồ xác nhận chung, số chuyến hôm nay, điểm lưu, dấu cảnh chờ | MVP |
| Input | Bàn phím chuột và gamepad (Xbox, PlayStation, Steam Deck), đổi phím, glyph tự đổi theo thiết bị | MVP |
| FTUE chương 1 | 36 bước T01 đến T36, mỗi bước một ý, tắt sau hành động đầu có ý nghĩa, gợi ý không chặn màn | MVP |
| Tạm dừng | Một mình có tạm dừng, từ 2 người không tạm dừng toàn cục (C7) | MVP |
| Strings | 243 key tiếng Việt, mỗi key một giới hạn ký tự, máy kiểm bằng `ux/kiem-ux.mjs` | MVP |
| Chế độ giảm nhấp nháy và rung, chuyển "giữ" thành "bật" | Tùy chọn trợ năng | giảm nhấp nháy MVP, "bật" Sau MVP |

## Danh mục sơ bộ (để vai khác đọc)

- Mã màn: UI-01 đến UI-53 (bảng 2.2). Mã phần tử HUD ngoài không gian: HUD-01 đến HUD-15. HUD ca cảng: HCH-01 đến HCH-10. HUD trạm: HTR-01 đến HTR-04. Mã bước tutorial: T01 đến T36.
- Slot người chơi (C2): 4 slot, mỗi slot một màu kèm một hình để không dựa vào màu, theo `ho-so-nhan-vat.md` luật 6 (file chủ): Slot 1 ○ cam `#F26B1D`, Slot 2 △ lam ngọc `#1FB5D6`, Slot 3 □ vàng chanh `#D8E21F`, Slot 4 ◇ hồng tím `#D6309B`. Màu cuối do Artist kiểm theo bảng tương phản, bản của gd-character là bản duy nhất.
- Tên giao diện (người chơi thấy): Oxy, túi, món ghim, đai dụng cụ, la bàn, Recall Beacon, Sổ tay, bảng tàu, kệ kiện, máy đóng kiện, Hạng cảng, Tally.

## 1. Mục đích với người chơi

- Cảm thấy: nhìn một lần biết mình còn bao lâu và có đủ về không, bốc kiện xong thấy Tally bay lên ngay, bước vào trạm thấy mọi việc cần làm đứng yên trên mặt cắt chứ không ẩn sau menu.
- Quyết định mà giao diện phải hỗ trợ: đi tiếp hay về (vạch "đủ về", thời gian còn), tham hay nhẹ túi (thanh tải và mốc 60%), ghim món nào, chia Oxy cho bạn hay giữ, tàu nào bốc trước (đồng hồ lưu bến).
- Pillar: P1 (Oxy là số đọc được, không ẩn), P2 (mặt cắt trạm là giao diện chính của nửa ở nhà, mỗi khoang sửa xong đổi hình), P3 (giao diện giống nhau với 1 đến 4 người, thêm người là thêm hàng đồng đội).
- 30 giây đầu (một mình, thế giới mới): xem cảnh tỉnh dậy (bỏ qua được), đi tới điểm sáng trong trạm tối bằng A D, thấy dòng mục tiêu "Sửa Khoang neo" ở góc, ra cửa khí, bay tới vòng sáng đầu tiên, thấy thanh Oxy tụt và vạch "đủ về" nhích theo.

## 2. Luật

### 2.1 Luật chung của giao diện (MVP trừ khi ghi khác)

1. Khung hình thiết kế ở 16:9, 1280x720. Vùng nhìn tối thiểu luôn là 17,8 x 10,0 u. Màn rộng hơn 16:9 (tới 21:9) được mở thêm chiều ngang, màn hẹp hơn 16:9 (16:10, 4:3) được mở thêm chiều cao, không có thanh đen trong khoảng 4:3 đến 21:9. HUD neo theo lề an toàn 5%.
2. Thân chữ tối thiểu 12 px ở 720p, tương đương 18 px ở 1080p theo mức tối thiểu PC của Xbox Accessibility Guideline 101. Người chơi chọn cỡ chữ 100%, 150%, 200% cho toàn bộ chữ và biểu tượng nút, không mất nội dung và không cuộn hai chiều. Mức Steam Deck (ký tự nhỏ nhất không dưới 9 px cao ở 1280x800) thấp hơn mốc này, vì 12 px ở 720p quy ra 13,3 px ở 800p. Nguồn: `45-ux-ui.md` S1, S5.
3. Font có đủ dấu tiếng Việt và có phương án sans serif không cách điệu. Mọi chữ nằm trên cảnh có viền hoặc nền mờ để đọc được trên mọi nền.
4. Tương phản chữ cỡ chuẩn tối thiểu 4,5:1, chữ lớn tối thiểu 3:1, phần tử không hoạt động tối thiểu 3:1. Số tỉ lệ ghi trong brief art phải lấy từ script đo, không gõ tay. Nguồn: `45-ux-ui.md` S2, S4.
5. Không thông tin nào chỉ truyền bằng màu. Mỗi trạng thái cảnh báo có thêm hình, chữ hoặc nhịp. Slot người chơi gồm màu và hình. Bậc hiếm của vật phẩm gồm màu, viền và hình biểu tượng khác nhau (khớp `vat-pham.md` mục 7). Nguồn: `45-ux-ui.md` S3, S8.
6. Mỗi màn có đúng 3 câu mô tả (ở đâu, làm được gì, quay lại thế nào), một hành động chính và đủ 5 trạng thái: Trống, Đang tải, Bình thường, Lỗi, Đầy hoặc khóa (bảng 2.4 và 2.5).
7. Quyết định tốn tài nguyên hay Oxy phải hiện hệ quả bằng số trước khi xác nhận: thiếu bao nhiêu, còn bao nhiêu sau khi trừ.
8. Từ 2 người online không tạm dừng toàn cục (C7). Mọi menu mở ngoài không gian và trong ca cảng không dừng thời gian, khung menu có biểu tượng đồng hồ đang chạy. Một người online thì Menu (Esc) dừng thời gian. Trong trạm ngoài ca cảng không có đồng hồ nào đang đếm, nên mở menu bao lâu cũng không mất gì (luật 26 nêu cách đổi khi số người đổi).
9. Gợi ý tutorial là dòng chữ ngắn không chặn thao tác. Cấm hộp thoại chặn màn khi có Driftlife trong 10 u, khi có hazard đang báo trước hoặc khi Oxy dưới 25%. Gợi ý một dòng vẫn được hiện cùng Driftlife (T13, T14, T18) vì đó là lúc cần dạy. Khi Oxy dưới 25% chỉ gợi ý loại thoát hiểm, cứu bạn và cảnh báo (T09, T15, T20, T34, T36) được hiện, gợi ý khác hoãn tới khi Oxy trên 25%. Chỉ cảnh truyện ở trạm được chặn màn (luật 25) và luôn bỏ qua được bằng một lần bấm (khớp `cot-truyen.md` luật 8).
10. Mọi hành động có ít nhất một phím bàn phím chuột và một nút gamepad. Mọi menu điều khiển được bằng chuột, bàn phím hoặc gamepad. Đổi thiết bị giữa chừng thì glyph đổi ngay trong một khung hình.
11. Thao tác nhấn phản hồi trong 0,1 giây. Thao tác giữ phải có vòng tiến độ và cách hủy hiện cạnh vòng. Đoạn chờ trên 10 giây phải có quyết định hoặc thông tin mới. Nguồn: `45-ux-ui.md` S6.
12. Thông báo nhặt gộp theo loại và hiện tối đa 3 dòng, mỗi dòng tối đa 32 ký tự, ở lại 2,5 giây.
13. Mọi cảnh báo âm có tương đương hình và ngược lại. Mỗi lớp phản hồi (rung, chớp, hạt, âm) bật tắt riêng được trong Cài đặt.
14. Nhấp nháy tối đa 3 lần mỗi giây. Có tùy chọn giảm nhấp nháy và rung. `[GIẢ ĐỊNH]` ngưỡng 3 lần mỗi giây theo hướng dẫn chống nhấp nháy phổ biến, chưa có nguồn đọc được trong repo.
15. Oxy hiển thị bằng điểm (1 điểm bằng 1 giây hao nền) kèm thời gian còn ước theo nhịp hao hiện tại. Mọi hệ số làm hao nhanh (tải, thiếu cấp vỏ, kéo vật) hiện thành số "x1,15" cạnh thanh Oxy.
16. HUD đồng đội tối đa 3 hàng nhỏ ở mép trái, không che vùng giữa màn. Ping là tín hiệu có sẵn, không có chat chữ.
17. UI không viết thoại hay tên truyện. Tên và thoại của gd-story, UI chỉ cấp chỗ đặt và giới hạn ký tự (bảng strings 2.13).
18. Mã nội bộ (TOL-211, CGO-101) không hiện cho người chơi. Người chơi chỉ thấy tên.
19. Tiến độ gợi ý tutorial lưu theo người chơi (hồ sơ máy), không theo nhân vật và không theo thế giới. Người chơi xem lại mọi gợi ý đã mở ở Sổ tay mục "Cách chơi" và tắt gợi ý trong Cài đặt.
20. Màn Shop (UI-15) và Nâng cấp (UI-16) hiện mỗi giá thành hai phần, Tally và vật liệu, kèm điều kiện Hạng cảng nếu có. Giá đọc từ dữ liệu của gd-economy, không có số nào nằm trong bảng strings (khớp `kinh-te-tien-trinh.md` dòng 193).
21. Esc và nút B đóng màn con trước, chỉ khi không còn màn con thì Esc mở UI-50. Start luôn mở UI-50 chồng lên màn hiện tại. UI-34 không có màn con để đóng, Esc không làm gì, Start vẫn mở Menu và không dừng thời gian. UI-35, UI-36, UI-43, UI-45 chỉ có nút Tiếp tục. `MVP`
22. Âm thanh có bốn thanh âm lượng tách ở UI-51: Tổng, Nhạc, Hiệu ứng, Cảnh báo. MVP không có giọng đọc, mọi thoại là chữ, không cần phụ đề lời nói. Chú thích âm bật tắt được: hiện chữ ngắn cạnh nguồn cho âm có nghĩa (bíp Oxy 25% và 10%, tàu cập bến, báo trước đòn lớn, còi sự cố ở Sau MVP). `MVP`
23. Thoát giữa chuyến hay giữa ca cảng (từ UI-50 hoặc đóng game) hiện hộp xác nhận nêu hệ quả bằng số trước khi thoát. Khách rời phiên tính như bị kéo về, chỉ giữ 1 món (C10). Chơi một mình hoặc chủ phòng thoát thì mất phần đang dở từ điểm lưu gần nhất (K23), chủ phòng thoát còn kết thúc phiên của cả nhóm. Hộp ghi rõ điểm lưu đó ("Lần lưu: ...") và có nút Vẫn thoát, Quay lại. `MVP`
24. Thẻ tên chương: hiện thẻ "Chương n: tên" 3 giây, không chặn. Chương 1 hiện sau cảnh tỉnh dậy ở UI-05, các chương sau hiện ở pha Chuẩn bị của ngày đầu chương ở UI-10. Năm tên do gd-story cấp (`cot-truyen.md` mục 13), khóa `hud.chapter`, đều dưới 40 ký tự. `MVP` chương 1
25. Cảnh truyện chặn màn (UI-53) chỉ xảy ra ở trạm khi ca cảng không chạy. Trong ca cảng đang chạy, UI-53 chỉ là bong bóng không chặn (`story.bubble`), cảnh của mốc xảy ra giữa ca (C1.8, C2.3, C3.3, C3.4, C3.8) phát ở UI-44 bằng UI-53. Lời theo trạng thái của nhân vật trong trạm và chuyện riêng của thương nhân không phải cảnh: là một dòng khi tới gần hoặc bấm nói chuyện và bong bóng lúc tàu cập bến, không dùng UI-53 và không có dấu cảnh chờ. Khi bất kỳ ai trong nhóm đang chạy ca cảng, cảnh của người khác không bao giờ chặn màn. `MVP`
26. "Một mình" nghĩa là một người đang online trong thế giới, không phụ thuộc số nhân vật tỉnh dậy. Người thứ hai vào lúc người kia đang ở Menu tạm dừng thì thời gian chạy tiếp ngay, Menu của người kia đổi tiêu đề thành Menu và hiện thông báo "{name} đã vào". Người thứ hai rời thì người còn lại tạm dừng được từ lần mở Menu kế. `MVP`
27. Xác nhận ra chuyến, ngủ, mở ca sớm và bỏ ca có đồng hồ chung hiện cho mọi người ở trạm tại HTR-01: ra ngoài 30 giây tính từ người đầu tiên xác nhận, ngủ 30 giây tính từ người đầu tiên vào buồng (khớp K23), mở ca sớm hoặc bỏ ca 30 giây tính từ người đầu tiên xác nhận (`tram-va-cang.md` luật 64 tới 66). Đồng hồ kèm tên người chưa trả lời. Người đã xác nhận hủy bằng cách bấm lại, đồng hồ không dừng và không đặt lại (khớp `tram-va-cang.md` luật 60 và 61). `MVP`
28. Số chuyến hôm nay hiện ở HTR-02 ("Chuyến n/2", K22). Sau chuyến thứ hai hoặc khi ca cảng đã mở thì UI-11 khóa kèm lý do. Nút Mở ca ở UI-14 hiện cảnh báo "Mở ca là hết ra ngoài hôm nay" và nút Bỏ ca hiện "Bỏ ca cũng hết ra ngoài hôm nay" trước khi xác nhận. `MVP`

### 2.2 Bản đồ màn

Nhóm: M menu và nhập cuộc, T trạm, O ngoài không gian, C ca cảng, S hệ thống. Nhãn trong cột cuối.

| ID | Màn | Nhóm | Vào từ | Ra tới | Nhãn |
|---|---|---|---|---|---|
| UI-01 | Menu chính | M | Mở game | UI-02, UI-04, UI-51, thoát | MVP |
| UI-02 | Tạo thế giới (chọn số người tỉnh dậy 1 đến 4) | M | UI-01 | UI-03 hoặc UI-05 | MVP |
| UI-03 | Sảnh co-op (chờ bạn vào, sẵn sàng) | M | UI-02 khi từ 2 người, hoặc nút Mời bạn ở UI-50 | UI-05 | MVP (2 người) |
| UI-04 | Tham gia thế giới (bạn bè, mã, Phòng đầy) | M | UI-01 | UI-05 hoặc UI-20 | MVP |
| UI-05 | Cảnh tỉnh dậy và cảnh đến | M | UI-02, UI-03, UI-04 | UI-10 | MVP |
| UI-10 | Trạm mặt cắt (đi bộ, 3 tầng) | T | UI-05, UI-36, UI-35, UI-44 | Mọi màn T, UI-11, UI-40 | MVP |
| UI-11 | Cửa khí: xác nhận chuyến và chọn dụng cụ | T | UI-10 (E ở cửa khí) | UI-30, UI-10 | MVP |
| UI-12 | Kho (xem, tìm, lọc) | T | UI-10 | UI-10 | MVP |
| UI-13 | Xưởng (chế, hàng đợi qua đêm, nâng cấp trang bị) | T | UI-10 | UI-10 | MVP |
| UI-14 | Bảng tàu (lịch tàu, đơn, ghim kiện, Mở ca) | T | UI-10 (khoang liên lạc) | UI-40 hoặc UI-10 | MVP |
| UI-15 | Shop (đặt hàng cuối ngày) | T | UI-10 (khoang liên lạc), UI-44 | UI-10 hoặc UI-44 | MVP |
| UI-16 | Nâng cấp (bộ đồ ở xưởng, khoang ở từng khoang) | T | UI-13, UI-10, UI-44 | UI-10 hoặc UI-44 | MVP |
| UI-17 | Sửa khoang (danh sách vật liệu, giữ phím sửa) | T | UI-10 (đứng ở khoang hỏng) | UI-10 | MVP |
| UI-18 | Động cơ chính (5 giai đoạn) | T | UI-10 (khoang động cơ) | UI-10 | MVP giai đoạn 1 |
| UI-19 | Sổ tay (mục tiêu, mốc truyện, manh mối, cách chơi) | T | UI-10, UI-44, UI-50 | Màn đã mở nó | MVP |
| UI-20 | Chờ nhóm (người về sớm, người chờ vào) | T | UI-35, UI-36, UI-04 | UI-10 | MVP |
| UI-21 | Nghiên cứu (mẫu Driftlife sang bản thiết kế) | T | UI-10 (phòng nghiên cứu), UI-44 | UI-10 hoặc UI-44 | Sau MVP |
| UI-22 | Khoang nuôi (ô, cho ăn, sản phẩm) | T | UI-10 (khoang sinh quyển) | UI-10 | Sau MVP |
| UI-30 | HUD bay (ngoài không gian) | O | UI-11 | UI-34, UI-36, UI-35 | MVP |
| UI-31 | Túi đồ (mở, thả, ghim) | O | UI-30 (Tab) | UI-30 | MVP |
| UI-32 | Bánh ping | O | UI-30 (T) | UI-30 | MVP |
| UI-33 | Bản đồ chuyến (chỉ phần đã đi qua) | O | UI-30 (M) | UI-30 | MVP |
| UI-34 | Ngạt và chọn món ghim | O | UI-30 (Oxy chạm 0) | UI-30, UI-35, UI-36 | MVP |
| UI-35 | Bị kéo về (tóm tắt Giữ và Mất) | O | UI-34 hết giờ | UI-10 hoặc UI-20 | MVP |
| UI-36 | Kết chuyến (Về an toàn, tóm tắt chuyến) | O | UI-30 (cửa khí hoặc Recall) | UI-10 hoặc UI-20 | MVP |
| UI-40 | HUD ca cảng | C | UI-14 (Mở ca) | UI-43 | MVP |
| UI-41 | Bảng đơn trên cửa bến (hiện trong cảnh) | C | Tàu cập bến | Tàu rời | MVP |
| UI-42 | Máy đóng kiện (nạp hàng, tiến độ, nhả kiện) | C | UI-40 (E ở máy) | UI-40 | MVP |
| UI-43 | Kết ca | C | Hết ca | UI-44 hoặc UI-10 | MVP |
| UI-44 | Cuối ngày (việc cuối ngày, vào buồng ngủ) | C | UI-43 | UI-10, UI-15, UI-16, UI-19, UI-21, UI-05 (ngày mới) | MVP |
| UI-45 | Lên Hạng cảng (danh sách mở) | C | UI-43 | UI-43 | MVP |
| UI-50 | Menu (một mình là tạm dừng) | S | Esc hoặc Start | Màn trước | MVP |
| UI-51 | Cài đặt (hình, âm, điều khiển, trợ năng, trò chơi) | S | UI-01, UI-50 | Màn trước | MVP |
| UI-52 | Đổi phím | S | UI-51 | UI-51 | MVP |
| UI-53 | Hộp thoại truyện (thoại ngắn, bỏ qua) | S | Mốc truyện, người vớt | Màn trước | MVP |

Tổng 35 màn: 33 MVP, 2 Sau MVP (UI-21, UI-22). UI-18 và UI-45 là màn MVP nhưng nội dung giai đoạn 2 đến 5 của động cơ và Hạng cảng 4 đến 8 là Sau MVP.

### 2.3 Luồng chính

```
UI-01 Menu --> UI-02 Tạo thế giới --(từ 2 người)--> UI-03 Sảnh --> UI-05 Cảnh tỉnh dậy
   |                    \--(1 người)-----------------------------> UI-05
   \--> UI-04 Tham gia --> UI-05 Cảnh đến --> UI-20 Chờ nhóm (nếu nhóm đang ngoài) --> UI-10
UI-10 Trạm --E--> UI-11 Cửa khí --(cả nhóm xác nhận)--> UI-30 HUD bay
UI-30 --Tab--> UI-31 Túi    --T--> UI-32 Ping    --M--> UI-33 Bản đồ chuyến
UI-30 --Oxy 0--> UI-34 Ngạt --hết 12 s--> UI-35 Bị kéo về --> UI-10 (hoặc UI-20 nếu nhóm còn ngoài)
UI-30 --cửa khí / Recall--> UI-36 Kết chuyến --> UI-10 (hoặc UI-20)
UI-10 --khoang liên lạc--> UI-14 Bảng tàu --Mở ca--> UI-40 HUD ca cảng --> UI-43 Kết ca --> UI-44 Cuối ngày --> UI-05 (ngày mới)
UI-44 --> UI-15 Shop / UI-16 Nâng cấp / UI-19 Sổ tay / UI-21 Nghiên cứu / vào buồng ngủ
```

Luật luồng:
1. Mọi màn có đường quay lại bằng Esc hoặc B về màn đã mở nó (luật 21 mục 2.1), trừ UI-34 (chỉ thoát khi hết giờ, được cứu hoặc chạm cửa khí), UI-05 (bỏ qua bằng một lần bấm) và UI-35, UI-36, UI-43, UI-45 (chỉ có nút Tiếp tục). `MVP`
2. Không màn nào cụt: mỗi màn có ít nhất một đường ra ghi ở cột "Ra tới". `MVP`
3. Thứ tự một ngày theo khung mục 4 là Chuẩn bị, Chuyến 1, Chuyến 2, Ca cảng, Cuối ngày, nhưng giao diện không ép thứ tự: người chơi vào UI-14 hay UI-11 lúc nào cũng được khi điều kiện luật cho phép. Pha ca cảng chỉ bắt đầu khi có người chọn Mở ca (`tram-va-cang.md` luật 19). `MVP`

### 2.4 Từng màn: ba câu và hành động chính

Câu thứ nhất nói đang ở đâu, câu thứ hai nói làm được gì, câu thứ ba nói quay lại thế nào. Cột cuối là một hành động chính của màn.

| ID | Ba câu | Hành động chính |
|---|---|---|
| UI-01 | Ở: màn mở đầu. Làm: chơi tiếp, tạo thế giới mới, tham gia bạn, cài đặt. Về: thoát game ra desktop. | Chơi tiếp thế giới gần nhất |
| UI-02 | Ở: tạo thế giới. Làm: đặt tên và chọn 1 hoặc 2 người tỉnh dậy (ô 3 và 4 khóa kèm "Sắp có"), bạn vào sau vẫn được. Về: Esc về menu chính, chưa tạo gì. | Bấm Tạo |
| UI-03 | Ở: sảnh chờ trước khi vào trạm. Làm: xem ai đã vào, ai sẵn sàng, mời thêm. Về: rời sảnh, thế giới vẫn còn. | Bấm Sẵn sàng |
| UI-04 | Ở: màn tìm thế giới của bạn. Làm: chọn bạn bè hoặc nhập mã để vào. Về: Esc về menu chính. | Bấm Vào |
| UI-05 | Ở: cảnh mở đầu hay cảnh đến. Làm: xem cảnh ngắn của nhân vật. Về: bấm một lần ở bất kỳ câu nào là bỏ qua. | Bỏ qua hoặc xem tiếp |
| UI-10 | Ở: mặt cắt Station Ember. Làm: đi tới khoang cần dùng, sửa, chế, đóng kiện. Về: không có thoát, thoát game qua Esc. | Đi tới khoang kế tiếp trong mục tiêu |
| UI-11 | Ở: cửa khí. Làm: chọn dụng cụ trong đai, xác nhận ra ngoài hoặc ở lại trạm, xem số chuyến hôm nay. Về: Esc ở lại trạm. | Xác nhận ra ngoài |
| UI-12 | Ở: kho dùng chung. Làm: xem số lượng, sao chất lượng và giá của từng loại, lọc theo nhóm, tìm theo tên. Về: Esc về màn đã mở nó. | Tìm một loại vật phẩm |
| UI-13 | Ở: xưởng. Làm: chọn công thức, đặt vào hàng đợi, nhận đồ chế xong. Về: Esc về trạm. | Bấm Chế |
| UI-14 | Ở: bảng tàu ở khoang liên lạc. Làm: xem tàu, đơn, giá một kiện, ghim kiện, mở ca (chỉ khi không còn ai ngoài chuyến, mỗi ngày một ca, hết ra ngoài hôm nay) hoặc bỏ ca không phạt (bỏ ca cũng khóa cửa khí tới ngày mới). Mở ca sớm hay bỏ ca cần cả nhóm xác nhận. Về: Esc về trạm. | Bấm Mở ca hoặc Ghim kiện |
| UI-15 | Ở: shop ở khoang liên lạc. Làm: đặt hàng bằng Tally, hàng tới sáng hôm sau. Về: Esc về trạm. | Đặt một mục |
| UI-16 | Ở: màn nâng cấp bộ đồ hay khoang. Làm: chọn trục hay khoang, xem vật liệu và Tally cần, mua một lần cho cả nhóm. Về: Esc quay lại. | Bấm Nâng cấp |
| UI-17 | Ở: khoang hỏng đang đứng. Làm: xem vật liệu cần, giữ phím sửa. Về: bước ra khỏi khoang là đóng. | Giữ E để sửa |
| UI-18 | Ở: động cơ chính. Làm: xem giai đoạn đang sửa và vật liệu, giữ phím sửa. Về: bước ra hay Esc. | Giữ E để sửa giai đoạn |
| UI-19 | Ở: Sổ tay chung của nhóm. Làm: đọc mục tiêu hiện tại, mốc đã xong, manh mối đã nhặt, cách chơi. Về: Esc về trạm. | Đọc mục tiêu hiện tại |
| UI-20 | Ở: trạm trong lúc nhóm còn ngoài kia. Làm: xem vị trí đồng đội, làm việc trạm, đóng kiện trước, ping nhắc. Về: tự đóng khi cả nhóm về. | Làm một việc trạm |
| UI-21 | Ở: phòng nghiên cứu. Làm: chọn mẫu và đổi sang bản thiết kế. Về: Esc về trạm. | Bấm Nghiên cứu |
| UI-22 | Ở: khoang sinh quyển. Làm: thả con vào ô, cho ăn, lấy sản phẩm. Về: Esc về trạm. | Cho ăn |
| UI-30 | Ở: ngoài không gian, thấy Oxy, túi, dụng cụ, la bàn, đồng đội. Làm: bay, nhặt, khai thác, bắn. Về: bay vào cửa khí hoặc giữ F ở Recall Beacon. | Bay |
| UI-31 | Ở: túi đồ, thời gian vẫn chạy. Làm: xem tải, thả đồ (đang ngạt không thả được), ghim một món. Về: Tab hay Esc đóng. | Ghim một món |
| UI-32 | Ở: bánh ping quanh nhân vật. Làm: chọn một trong bốn ping rồi thả. Về: thả phím không chọn là hủy. | Chọn một ping |
| UI-33 | Ở: bản đồ phần đã đi trong chuyến này. Làm: xem Ember, Recall Beacon, lối vào map nhánh đã thấy, đồng đội. Về: M hay Esc đóng. | Nhìn đường về |
| UI-34 | Ở: bị ngạt, còn 12 giây. Làm: chọn món ghim (đang ngạt không trao và không thả đồ), chờ đồng đội chia Oxy hoặc bay tới cửa khí. Về: không có nút thoát, Esc không làm gì, màn tự kết thúc khi được cứu, chạm cửa khí hay hết giờ. | Chọn món ghim hoặc bay |
| UI-35 | Ở: cảnh bị kéo về. Làm: xem món giữ, món mất và vật nhiệm vụ về chỗ cũ. Về: bấm Tiếp tục sau 1,5 giây. | Bấm Tiếp tục |
| UI-36 | Ở: về an toàn. Làm: xem tóm tắt chuyến, túi đã vào kho. Về: bấm tiếp. | Bấm Tiếp tục |
| UI-40 | Ở: trong ca cảng, thấy giờ ca, tàu, đơn, kiện. Làm: lấy hàng, đóng kiện, bốc lên tàu. Về: không thoát giữa ca, một mình dùng Esc để tạm dừng. | Bốc một kiện lên tàu |
| UI-41 | Ở: cửa bến có tàu. Làm: đọc dòng hàng, số kiện còn thiếu, đồng hồ lưu bến. Về: tàu rời là biến mất. | Đọc dòng hàng cần |
| UI-42 | Ở: máy đóng kiện. Làm: bỏ hàng vào, chờ máy chạy, nhả kiện. Về: bước ra hay Esc. | Bỏ hàng vào máy |
| UI-43 | Ở: kết ca. Làm: xem đơn đủ, đơn trượt, Tally, điểm cảng, lời thương nhân. Về: bấm tiếp, không chặn người khác. | Bấm Tiếp tục |
| UI-44 | Ở: cuối ngày. Làm: shop, nâng cấp, nghiên cứu, Sổ tay, nói chuyện, rồi vào buồng ngủ (đồng hồ 30 giây từ người đầu tiên). Về: Esc đóng màn con về cuối ngày, ra lại khỏi buồng để hủy xác nhận. | Vào buồng ngủ |
| UI-45 | Ở: bảng lên Hạng cảng. Làm: xem thứ mới mở. Về: bấm tiếp. | Bấm Tiếp tục |
| UI-50 | Ở: menu. Làm: tiếp tục, mời bạn, Sổ tay, cài đặt, về menu chính (có xác nhận kèm hệ quả). Về: Esc hay Start đóng. | Tiếp tục |
| UI-51 | Ở: cài đặt. Làm: chỉnh hình, âm lượng, điều khiển, trợ năng, gợi ý. Về: Esc, thay đổi áp ngay. | Chỉnh một mục |
| UI-52 | Ở: đổi phím. Làm: chọn hành động rồi bấm phím mới, trùng thì báo. Về: Esc, thay đổi giữ nguyên. | Bấm phím mới |
| UI-53 | Ở: hộp thoại truyện. Làm: đọc câu thoại ngắn, trong ca cảng đang chạy chỉ là bong bóng không chặn. Về: một lần bấm là bỏ qua cả cảnh. | Bấm Tiếp |

### 2.5 Năm trạng thái của từng màn

Trống: không có dữ liệu để hiện. Đang tải: chờ máy hoặc mạng. Bình thường: có dữ liệu. Lỗi: hành động không làm được hay mất kết nối. Đầy hoặc khóa: chạm giới hạn hay chưa mở. Chữ "không áp dụng" nghĩa là màn không có trạng thái đó và có lý do.

| ID | Trống | Đang tải | Bình thường | Lỗi | Đầy hoặc khóa |
|---|---|---|---|---|---|
| UI-01 | Chưa có thế giới: ẩn "Chơi tiếp", nổi bật "Thế giới mới" | Quét thế giới đã lưu: vòng xoay | Danh sách thế giới kèm "Lần lưu: Ngày {n}" | Không đọc được bản lưu: báo "Không đọc được bản lưu" và nút "Thử lại" | Bản lưu sau kết game (Sau MVP): nhãn "Ngày cuối" |
| UI-02 | Chưa đặt tên: nút "Tạo" mờ, gợi ý tên | Đang dựng thế giới | Có tên và số người | Tên trùng hay ký tự cấm: báo "Tên đã dùng" dưới ô | Ô 3 và 4 khóa kèm "Sắp có". Đủ số thế giới tối đa: báo xóa bớt |
| UI-03 | Chỉ có mình: chữ "Chờ bạn" và nút "Mời bạn" | Đang kết nối bạn | 2 đến 4 hàng người, màu và hình slot, dấu sẵn sàng | Bạn rớt kết nối: hàng chuyển xám có chữ "Mất kết nối" | Đủ số người đã chọn: ẩn nút "Mời bạn" |
| UI-04 | Không có bạn đang chơi: báo "Chưa có bạn nào đang chơi" và ô nhập mã | Đang tìm | Danh sách thế giới bạn mời | Báo "Mã sai hoặc hết hạn" hay "Khác phiên bản game" | Chữ "Phòng đầy", nút "Vào" mờ |
| UI-05 | Không áp dụng, luôn có cảnh | Nạp cảnh: tối dần | Cảnh phát, nút Bỏ qua luôn hiện | Cảnh lỗi: tự bỏ qua và ghi nhật ký | Không áp dụng, cảnh luôn bỏ qua được |
| UI-10 | Khoang hỏng tối với khung đỏ | Nạp trạm: màn tối ngắn | Mặt cắt sáng, người vớt đứng ở khoang | Mất kết nối chủ phòng: banner "Mất kết nối chủ phòng", kèm "Thế giới về lần lưu gần nhất" và nút "Thử lại" | Khoang chưa tới chương: khung tối, báo "Chưa mở ở chương này" kèm gợi ý truyện |
| UI-11 | Đai không có dụng cụ nào chế được: báo vào xưởng | Chờ cả nhóm xác nhận: tick từng người và đồng hồ HTR-01 | Chọn dụng cụ, danh sách tick, "Chuyến {n}/{m}" | Một người chưa trả lời: báo tên, tự tính "Ở lại trạm" sau 30 giây kể từ người đầu tiên xác nhận | Hết chuyến, đã mở ca hoặc đã bỏ ca: khóa kèm "Hôm nay hết chuyến ra ngoài". Đủ ô đai: dụng cụ thừa mờ |
| UI-12 | Kho rỗng: chữ "Kho trống" | Đồng bộ kho cho nhóm | Danh sách theo nhóm với số lượng, sao và giá | Số liệu lệch: báo "Thử lại" | Một loại chạm 999: số đổi sang vàng kèm biểu tượng "Đầy" |
| UI-13 | Chưa có công thức nào mở: chữ Kỹ sư chưa tới | Mẻ đang chạy: thanh tiến độ | Danh sách công thức, thời gian, hàng đợi | Thiếu vật liệu: dòng đỏ có biểu tượng và số thiếu | Hàng đợi qua đêm đủ 2 chỗ: nút Chế mờ kèm lý do |
| UI-14 | Không có tàu hôm nay: chữ "Hôm nay không có tàu" | Sinh lịch tàu đầu ngày | Danh sách tàu, đơn, giá một kiện, "Đơn theo số người đang chơi" | Khoang liên lạc hay bến 1 hỏng: khóa "Mở ca" và "Bỏ ca" kèm danh sách vật liệu sửa | Còn người đang ở ngoài chuyến: nút "Mở ca" xám kèm "Còn người đang ở ngoài chuyến". Đã mở ca hôm nay: nút đổi thành "Ca đang chạy", xong ca thì "Hôm nay đã có ca" |
| UI-15 | Chưa mở mục nào: chữ Shop sắp có hàng | Đồng bộ giá | Danh sách mục theo Hạng cảng | Không đủ Tally: giá đỏ kèm số thiếu | Mục chưa đủ Hạng cảng: khóa kèm hạng cần |
| UI-16 | Không có gì nâng cấp được lúc này: báo điều kiện kế tiếp | Mua: thanh ngắn | Danh sách trục hay khoang, bậc hiện tại và kế | Thiếu vật liệu hay Tally: số thiếu từng loại | Bậc tối đa: chữ Tối đa |
| UI-17 | Khoang không hỏng: màn không mở | Đang trừ vật liệu | Danh sách vật liệu với đủ hoặc thiếu | Mất kết nối giữa lúc giữ phím: tiến độ giữ nguyên | Chương chưa tới: khung tối |
| UI-18 | Giai đoạn chưa mở: chữ Chương sau | Đang trừ vật liệu | Thanh 5 giai đoạn, giai đoạn hiện tại và vật liệu | Thiếu linh kiện: dòng đỏ | Giai đoạn đã xong: đèn sáng và chữ Xong |
| UI-19 | Mới bắt đầu: chỉ một mục tiêu | Chờ đồng bộ Sổ tay chung: vòng xoay | Mục tiêu hiện tại, mốc xong, manh mối, "Cách chơi" | Mất đồng bộ: hiện bản cục bộ gần nhất kèm "Mất kết nối" | Không áp dụng, Sổ tay không có giới hạn |
| UI-20 | Chưa ai ngoài kia: tự đóng | Chờ dữ liệu đồng đội | Bản đồ chuyến chỉ xem, danh sách việc trạm, nút ping | Mất đồng bộ vị trí: chữ Chờ cập nhật | Kệ kiện hay hàng đợi đầy: nút mờ |
| UI-21 | Chưa có mẫu: chữ Chưa có mẫu | Đang nghiên cứu: thanh | Danh sách mẫu và bản thiết kế | Thiếu vật liệu: số thiếu | Đã nghiên cứu hết: chữ Hết bản thiết kế |
| UI-22 | Ô trống: khung ô trống | Đang ra sản phẩm | Ô có con, tình trạng ăn | Loài không nuôi được: báo lý do | Hết ô: nút Thả mờ |
| UI-30 | Không áp dụng, HUD luôn có Oxy | Vào chuyến: nạp tối 0,3 giây | Oxy, túi, dụng cụ, la bàn, đồng đội | Mất kết nối: biểu tượng mạng cạnh tên mình, nhân vật bất tử 15 giây | Túi đầy hay Oxy thấp: viền và nhãn tương ứng |
| UI-31 | Túi rỗng: chữ Túi trống | Không áp dụng, dữ liệu cục bộ | Danh sách theo nhóm, thanh tải, món ghim | Không nhặt được: dòng Túi đầy | Chạm 100% tải: thanh đầy kèm chữ Đầy |
| UI-32 | Không áp dụng, luôn có 4 ping | Không áp dụng | Bốn ô với biểu tượng và chữ | Hết 3 ping: số về 0 và các ô mờ | Hết ping: chữ Chờ ping tự hết |
| UI-33 | Chưa đi đâu: chỉ Ember và vòng quanh nhân vật | Không áp dụng | Phần đã đi, Recall Beacon, lối map nhánh, đồng đội | Vùng nhiễu (Sau MVP): màn nhiễu và chữ "Mất tín hiệu" | Không áp dụng |
| UI-34 | Túi rỗng: chữ "Không có gì để mất", đồng hồ vòng vẫn chạy | Không áp dụng | Đồng hồ vòng 12 giây, danh sách món, nút ghim, ghi chú "Ghim giữ lại 1 đơn vị" | Mất kết nối: đồng hồ tạm dừng tối đa 15 giây, hiện "Giữ chỗ" | Đang được chia Oxy: đồng hồ dừng kèm "Đang được chia Oxy". Đang ngạt: nút thả và trao mờ kèm "Đang ngạt: không trao, không thả đồ". Hết giờ: sang UI-35 |
| UI-35 | Túi trống: chữ "Không mất gì" | Cảnh kéo 1,5 giây | Hai cột Giữ và Mất, dòng "Vật nhiệm vụ về chỗ cũ" nếu có | Không áp dụng, màn tự kết thúc | Không áp dụng |
| UI-36 | Chuyến trống: chữ "Chuyến trống" | Đổ túi vào kho: thanh ngắn | Tóm tắt vật nhặt, mẫu, thời gian, Oxy còn, biểu tượng "Đã lưu" khi tự lưu sau chuyến | Kho đồng bộ lỗi: Thử lại, túi giữ nguyên | Không áp dụng |
| UI-40 | Chưa có tàu cập: chữ Chờ tàu đầu tiên | Sinh lịch ca | Giờ ca, tàu, đơn, kiện cầm, kệ | Mất kết nối host: banner, ca tạm dừng cho người đó | Kệ kiện đầy hoặc tay đầy: biểu tượng đầy cạnh kiện |
| UI-41 | Tàu chưa cập: bảng ẩn | Không áp dụng | Dòng hàng, số kiện, đồng hồ lưu bến | Kiện bị từ chối: kiện bật về tay, dòng không đổi, lời từ chối | Đơn đủ: mọi dòng đầy, chữ Đủ |
| UI-42 | Máy rảnh: khung nạp trống | Máy chạy: thanh tiến độ | Số đơn vị đã bỏ, thời gian đóng | Sai loại hàng: báo loại cần | Kệ đầy: máy giữ kiện, chữ Kệ đầy |
| UI-43 | Ca không có đơn nào đủ: vẫn hiện Tally của kiện | Không áp dụng | Đơn đủ, đơn trượt, Tally, điểm cảng, "Đã lưu" khi tự lưu sau ca cảng | Mất kết nối chủ phòng: hiện kết quả đã tính, chờ đồng bộ kèm "Mất kết nối" | Không áp dụng |
| UI-44 | Chưa có việc cuối ngày: chỉ nút "Vào buồng ngủ" | Chữ "Đang lưu" | Danh sách việc cuối ngày, "Đã lưu" sau khi lưu | Lưu lỗi: báo "Lưu lỗi, thử lại", nút "Thử lại" và nút "Về menu chính" (mất việc từ lần lưu gần nhất, hiện "Mất việc từ: {point}") | Nhóm chưa sẵn sàng ngủ: tick từng người, HTR-01 đếm 30 giây từ người đầu tiên vào buồng, ra lại để hủy |
| UI-45 | Không áp dụng, chỉ hiện khi lên hạng | Không áp dụng | Hạng mới và danh sách mở khóa | Không áp dụng | Chạm trần chương: báo điểm cộng dồn tới chương sau |
| UI-50 | Không áp dụng | Không áp dụng | Danh sách nút | Về menu chính giữa chuyến: hộp xác nhận nêu hệ quả (luật 23) | Một người online: tiêu đề "Tạm dừng". Từ 2 người: tiêu đề "Menu" kèm "Thời gian vẫn chạy" |
| UI-51 | Không áp dụng | Áp thay đổi: ngay | Danh sách mục theo nhóm | Giá trị ngoài khoảng: tự kéo về khoảng | Mục khóa theo thiết bị: mờ kèm lý do |
| UI-52 | Hành động chưa gán: chữ Chưa gán | Chờ bấm phím: nhấp nháy khung | Mỗi hành động hai phím và một nút | Trùng phím: báo hành động trùng và nút Hoán đổi | Phím cố định (Esc): khóa kèm chữ Cố định |
| UI-53 | Không áp dụng | Không áp dụng | Hộp thoại có tên người nói và nút Bỏ qua | Thiếu chuỗi: hiện chuỗi dự phòng, ghi nhật ký | Không áp dụng |

### 2.6 HUD ngoài không gian (UI-30)

Ba phần tử luôn hiện: Oxy (HUD-01 và HUD-02), túi (HUD-03 và HUD-04), dụng cụ (HUD-05). Các phần tử còn lại hiện khi có việc. Mọi ngưỡng lấy từ `nguoi-choi.md` mục 2.2 và công thức vạch "đủ về" ở mục 3 của file đó.

| ID | Phần tử | Vị trí | Hiện khi | Nội dung và số | Tín hiệu không dựa vào màu |
|---|---|---|---|---|---|
| HUD-01 | Thanh Oxy | Trên trái | Luôn | Thanh dài 320 px ở 720p, số điểm Oxy, dưới thanh là thời gian còn ước tính (Oxy chia hao hiện tại) và hệ số "x1,0". Hệ số hiện đỏ khi lớn hơn 1 | Ngưỡng 50%: biểu tượng bình và bíp chậm mỗi 3 giây. 25%: chữ THẤP, nhấp nháy tối đa 3 lần mỗi giây, bíp mỗi 1,5 giây, gợi ý "Về". 10%: viền màn hình dày lên, thở dốc, bíp mỗi 0,7 giây, camera thu nhẹ |
| HUD-02 | Vạch "đủ về" | Trên HUD-01 | Luôn khi ngoài không gian (cửa khí luôn là đích) | Oxy_về theo công thức mục 3 của `nguoi-choi.md`. Phần thanh dưới vạch tô sọc chéo, trên vạch tô đặc. Nhãn nhỏ "Về cửa khí" hoặc "Về Beacon" theo đích rẻ nhất. Khi Oxy chạm vạch có một tiếng chuông và chữ ĐỦ VỀ sáng 2 giây | Sọc chéo và đặc, chữ, chuông |
| HUD-03 | Thanh tải túi | Dưới HUD-01 | Luôn | Thanh tải, số "x/80" (bậc 0 là 80 Khối), vạch mốc 60%. Quá 60% hiện chữ "Nặng" và "-p% tốc độ, hao +p%" cùng một p theo công thức của `nguoi-choi.md` mục 3. Chạm 100% hiện chữ Đầy | Vạch mốc, chữ Nặng, bộ đẩy phụt lớn |
| HUD-04 | Món ghim | Dưới HUD-03 | Luôn | Biểu tượng ghim và biểu tượng món đang ghim. Chưa ghim hiện "Chưa ghim" cùng gợi ý phím. Ghim tự đổi (vật hiếm nhất vừa nhặt) hiện thông báo "Đã ghim ..." | Biểu tượng ghim |
| HUD-05 | Đai dụng cụ | Dưới giữa | Luôn | 2 đến 4 ô (theo bậc đai), ô đang cầm to hơn kèm phím 1 đến 4. Hiện hồi chiêu dạng vòng quay, độ nóng của Dùi xung, số Lưới cuộn còn lại khi cầm Súng lưới | Số phím, vòng hồi chiêu |
| HUD-06 | La bàn viền | Mép màn hình | Khi mục tiêu nằm ngoài màn | Mũi tên ở mép: Ember (luôn), Recall Beacon đã thấy, đồng đội (hình slot), điểm ping. Mũi tên kèm khoảng cách bằng u. Đòn từ kẻ địch ngoài màn có mũi tên chỉ báo riêng ở mép ngay từ đầu pha báo trước (vàng hay đỏ theo mức đòn, đòn lớn dùng mũi tên đôi, kèm âm định hướng). Hazard của map cũng có chỉ báo mép theo `map.md` mục 3.5: Mảnh trôi (MVP) mũi tên theo hướng tới và tiếng có hướng trái phải, 1 giây trước khi vào màn. Dòng đá vụn (Sau MVP) là vạch đỏ theo làn ở mép, 2 giây trước đợt. Bùng tinh vân (Sau MVP) chỉ báo cùng lúc túi khí sáng dần khi cách mép dưới 5 u. Mũi tên Ember có hình trạm, Beacon có hình tháp | Hình riêng từng loại, không chỉ màu |
| HUD-07 | Đồng đội | Mép trái, dưới HUD-04 | Từ 2 người | Tối đa 3 hàng: hình slot, tên, thanh Oxy nhỏ, trạng thái (Ngạt có đồng hồ vòng, Được chia Oxy, Đã về), biểu tượng mạng ba mức (ổn, trễ, Giữ chỗ có đồng hồ 15 giây, quá hạn tính như bị kéo về theo C10). Người chia Oxy thấy mốc sàn 20 trên thanh Oxy của mình, chạm sàn thì dừng chia và hiện "Dừng chia: giữ lại {n} Oxy" | Hình slot, chữ trạng thái |
| HUD-08 | Số ping còn lại | Dưới phải | Khi có ping đang hiện | "Ping 3" giảm dần, hết thì "0", ping hiện 8 giây trong thế giới và ở La bàn nếu ngoài màn | Chữ |
| HUD-09 | Thông báo nhặt | Phải, dưới HUD-13 | Khi nhặt | Tối đa 3 dòng, 32 ký tự, gộp loại ("+3 Phế liệu"). Vật hiếm có viền và hình riêng theo bậc | Viền, hình bậc |
| HUD-10 | Lời nhắc thao tác | Cạnh nhân vật | Khi có đích tương tác | Phím theo thiết bị và động từ ngắn ("E Kéo"). Nhiều đích thì hiện đích ưu tiên theo `nguoi-choi.md` 2.5 và một chấm "+1". Lối map nhánh thiếu điều kiện hiện chữ nêu thiếu gì ("Cần {tool} để mở"). Vật cản dải chưa mở hiện "Chưa có đường qua" | Chữ, glyph |
| HUD-11 | Tên dải và cảnh báo môi trường | Trên giữa | Qua ranh dải | Tên dải hiện 2 giây. Vào dải thiếu cấp vỏ (Sau MVP): thêm biểu tượng, chữ "Thiếu cấp vỏ, hao Oxy x2,5" và hệ số HUD-01 đổi | Biểu tượng, chữ, âm cảnh báo bộ đồ |
| HUD-12 | Kiện đã ghim | Dưới trái | Khi đã ghim ở bảng tàu | Một đến hai dòng: "Cần: Kiện phế liệu x2" (tên nhóm hàng và số) | Chữ |
| HUD-13 | Mục tiêu Sổ tay | Trên phải | Luôn trong chương 1 | Một dòng mục tiêu hiện tại của Sổ tay, ví dụ "Sửa Khoang neo", kèm tên nơi phải tới | Chữ |
| HUD-14 | Vòng tiến độ thao tác giữ | Quanh nhân vật | Khi giữ Kích Recall, Kéo, Khai thác, Kết nhanh, Chia Oxy | Vòng đầy dần theo thời gian giữ của thao tác, chữ nhỏ nêu cách hủy ("Thả phím hủy") | Vòng, chữ |
| HUD-15 | Trần hồi Oxy từ vật tiêu hao | Dưới HUD-01 | Khi có vật tiêu hao hồi Oxy trong túi hoặc đã dùng trong chuyến | "Còn hồi {n} Oxy" (trần 25% dung lượng bình mỗi chuyến, K26). Vật trong túi hiện số hồi thật nếu vượt trần. Đạt trần hiện "Đã hồi tối đa chuyến này". Đang ngạt bấm dùng hiện "Không dùng được khi ngạt" | Chữ, số |

```
1280x720, lề an toàn 64 x 36 px
+----------------------------------------------------------------------+
| HUD-01 OXY [/////|####......] 187  ~3:07  x1,0   HUD-11 Dải Gần     HUD-13 Sửa |
| HUD-02   vạch đủ về --^  Về cửa khí                              Khoang |
| HUD-03 TÚI [######....|] 56/80 Nặng            HUD-09 +3 Phế liệu        neo |
| HUD-04 GHIM: (pin) Mảnh lõi                        +1 Băng              |
| HUD-07 (o) An   [####.] 61                                              |
|     (^) Bo   NGẠT (vòng 8 s)                                         |
|  <-- HUD-06 Ember 240 u               (vùng chơi)     Beacon 85 u -->   |
|                                HUD-10 "E Kéo" (vòng HUD-14)               |
|                                                                      |
| HUD-12 Cần: Kiện phế liệu x2     HUD-05 [1 Lao từ][2 Dùi xung]  HUD-08 Ping 3 |
+----------------------------------------------------------------------+
```

Ghi chú: ○ △ □ ◇ trong bản vẽ thay bằng (o) (^) vì khối chữ ASCII. Thanh HUD-01 phần "////" là phần dưới vạch "đủ về".

### 2.7 HUD ca cảng và trạm (UI-40, UI-10)

| ID | Phần tử | Vị trí | Nội dung và số | Tín hiệu không dựa vào màu |
|---|---|---|---|---|
| HCH-01 | Giờ ca và Tally trong ca | Trên giữa | Đồng hồ ca còn lại (phút:giây), Tally nhận trong ca. Mỗi kiện nhận thì "+n" bay lên trong 150 ms (khớp `tram-va-cang.md` mục 7b) | Chữ, số bay |
| HCH-02 | Danh sách tàu | Trái | Mỗi tàu: chân dung thương nhân, trạng thái (Trong lịch, Chờ ngoài, Ở bến), vòng đồng hồ lưu bến. Vòng đổi biểu tượng ở 50% và 20% còn lại, dưới 20% có tiếng tích tắc nhanh dần. Tàu chờ ngoài hiện thêm vòng đồng hồ chờ | Biểu tượng đồng hồ, tích tắc |
| HCH-03 | Đơn tàu ở bến | Phải | Các dòng hàng của tàu ở bến: tên kiện, "n/m", giá một kiện (lồng sống hiện giá kèm chữ "từ"). Đủ thì dòng đổi sang dấu Đủ. Dòng ẩn của TA06 hiện gợi ý thay tên và chữ "dòng ẩn" | Dấu Đủ, chữ |
| HCH-04 | Thứ đang cầm | Dưới giữa | Biểu tượng kiện, cỡ (Nhỏ, Vừa, Lớn), "tốc độ 80%". Hai người cùng giữ kiện Lớn hiện thêm "90%" | Biểu tượng, số |
| HCH-05 | Kệ kiện | Dưới trái | "n/sức chứa". Đầy thì biểu tượng Đầy và chữ | Biểu tượng, chữ |
| HCH-06 | Máy đóng kiện | Trên máy (diegetic) và chip nhỏ khi ở xa | Thanh tiến độ, số đơn vị đã bỏ, thời gian còn. Kệ đầy thì "Kệ đầy, máy giữ kiện" | Thanh, chữ |
| HCH-07 | Hàng đợi xưởng | Dưới phải | Số mẻ đang chạy và chờ, chế qua đêm hiện "xong khi sang ngày" | Số, chữ |
| HCH-08 | Sự cố | Giữa trái | Biểu tượng loại sự cố, mũi tên tới khoang, chữ xử lý. Còi báo động ngắn, không lặp liên tục | Biểu tượng riêng từng loại (Sau MVP) |
| HCH-09 | Tally và Hạng cảng | Trên phải | Tổng Tally của nhóm kèm "Hạng n (a/b)" (điểm cảng hiện tại trên ngưỡng kế), mỗi khi thay đổi hiện số cộng hay trừ trong 150 ms | Số |
| HCH-10 | Sơ đồ trạm thu nhỏ | Dưới HCH-09 | Mặt cắt 3 tầng thu nhỏ: khoang, bến (chấm khi có tàu), kệ kiện, máy đóng kiện, vị trí mỗi người (hình slot), sự cố. Cũng hiện ở UI-10 ngoài ca. Cần vì camera trạm không thấy hết tầng | Hình khoang, hình slot |

HUD trong trạm (UI-10 ngoài ca cảng):

| ID | Phần tử | Vị trí | Nội dung và số | Tín hiệu không dựa vào màu |
|---|---|---|---|---|
| HTR-01 | Đồng hồ xác nhận chung | Trên giữa | Hiện khi có người xác nhận ra chuyến (30 giây từ người đầu tiên) vào buồng ngủ, mở ca sớm hay bỏ ca (30 giây từ người đầu tiên): giây còn lại, tên người chưa trả lời, nút trả lời và nút "Hủy". Hiện cho mọi người ở trạm, kể cả đang ở xưởng hay sửa khoang. Hết giờ thì người chưa trả lời tự tính theo luật: ở lại trạm (ra chuyến), sẵn sàng ngủ, đồng ý (mở ca sớm hay bỏ ca) | Vòng đồng hồ, chữ tên |
| HTR-02 | Chuyến hôm nay | Trên phải | "Chuyến n/2" (K22). Sau chuyến hai hoặc khi đã mở ca thì hiện "Hôm nay hết chuyến ra ngoài" | Chữ |
| HTR-03 | Điểm lưu | Dưới phải | Biểu tượng và chữ "Đã lưu" 2 giây tại ba điểm tự lưu của K23: sau mỗi chuyến khi mọi người đã về, sau ca cảng, lúc ngủ | Biểu tượng, chữ |
| HTR-04 | Dấu cảnh chờ | Trên nhân vật hay khoang | Biểu tượng cạnh người vớt hay khoang có cảnh đang chờ phát. Hàng chờ cảnh và dấu là riêng từng người chơi. Cảnh chặn màn chỉ phát ở trạm khi ca cảng không chạy. Mốc xảy ra giữa ca chỉ có bong bóng trong ca, cảnh của mốc phát ở UI-44 bằng UI-53 | Biểu tượng, chữ |

Quy tắc ca cảng:
1. Không có chữ "Thất bại" hay "Thua" ở bất kỳ đâu trong ca cảng (khớp `tram-va-cang.md` luật 32 và mục 7). Đơn trượt hiện dòng thiếu tô xám, thương nhân lắc đầu, âm trung tính. `MVP`
2. Bảng đơn ở cửa bến (UI-41) và HCH-03 hiện cùng một dữ liệu, bảng cửa bến là bản nhìn trong cảnh, HCH-03 là bản nhìn khi đang chạy xa cửa bến. `MVP`
3. Khi kiện bị từ chối hiện lời từ chối ngắn của thương nhân (gd-story) và lý do ngắn "Không có trong đơn". `MVP`
4. Trong ca cảng không có Oxy. HUD trạm ở UI-10 gồm Tally (HCH-09), mục tiêu Sổ tay (HUD-13), sơ đồ trạm (HCH-10), hàng đợi xưởng (HCH-07), lời nhắc thao tác và ba phần tử HTR-01 đến HTR-04. `MVP`

```
1280x720 ca cảng
+----------------------------------------------------------------------+
| HCH-02 TÀU                HCH-01 Ca còn 2:41  Tally ca +86          HCH-09 412 |
|  (Tikko) O Ở bến [vòng 70%]            HCH-03 TÀU Ở BẾN: TA01          |
|  (Oru)   Trong lịch                         Kiện phế liệu  1/2  18 T |
|  (...)   Chờ ngoài [vòng 40%]               Kiện khoáng    0/1  24 T |
|                                                                      |
|  [Tầng trên] khoang liên lạc | xưởng ...                             |
|  [Tầng giữa] kho -- máy đóng kiện HCH-06 -- bến 1 (cửa bến, UI-41)      |
|  [Tầng dưới] cửa khí | khoang neo | động cơ                          |
|                                                                      |
| HCH-05 Kệ 2/4     HCH-04 Cầm: Kiện phế liệu (Nhỏ) 90%       HCH-07 Xưởng 1 mẻ |
+----------------------------------------------------------------------+
```

### 2.8 Wireframe các màn chính

Wireframe trạm (UI-10) theo sơ đồ mặt cắt của `tram-va-cang.md` mục 2.6b. Khoang hỏng tối với khung đỏ, khoang hoạt động sáng.

```
Tầng trên  | KH08 Dẫn đường | KH06 Liên lạc  | KH10 Nghiên cứu | KH11 Sinh quyển | KH12 Bến 2
Tầng giữa  | KH01 Ngủ đông  | KH05 Xưởng     | KH03 Kho        | KH07 Cảng: máy đóng, kệ | Bến 1
Tầng dưới  | KH02 Cửa khí   | KH04 Neo       | KH13 Động cơ    | KH09 Bến Skiff  | KH12 Bến 3
Thang dọc: cột trái và cột giữa. Góc trên phải: Tally, HUD-13 mục tiêu. Dưới giữa: lời nhắc.
```

Bảng tàu (UI-14), bản vẽ mẫu của một ngày về sau (ca đầu của thế giới chỉ có TA01 và một dòng kiện):

```
+------------------------------- BẢNG TÀU --------------------------------+
| Hôm nay: 3 tàu        Kệ kiện 2/4        [Mở ca] [Bỏ ca] [Ghim kiện]  |
|--------------------------------------------------------------------------|
| TA01 (Tikko)  đến phút 0:20  lưu bến Dài                               |
|   Kiện phế liệu  x2   18 T/kiện   [Có 3 trên kệ - Đủ]                |
|   Kiện khoáng    x1   24 T/kiện   [Có 0, thiếu 3 đơn vị khoáng thô]  |
| TA02 (dân Oru)  đến phút 1:30  lưu bến Ngắn                            |
|   Kiện băng      x1   30 T/kiện   [Thiếu]  Ghim                        |
|--------------------------------------------------------------------------|
| Tổng cần: 4 kiện  Đã có: 3 kiện  Thiếu: 3 đơn vị khoáng thô  [Quay lại]|
+--------------------------------------------------------------------------+
```

Số giá trong bản vẽ là chỗ đặt, giá thật do gd-economy.

Ngạt và chọn món ghim (UI-34), mở ở chế độ chồng lên HUD, không dừng thời gian:

```
+----------------------------------------------------------------------+
|                         NGẠT   (vòng 12 s, còn 9)                    |
|        Chờ cứu hoặc bay tới cửa khí. Giữ lại: (pin) Mảnh lõi        |
|----------------------------------------------------------------------|
|  [x] Mảnh lõi (hiếm)    1   <- GHIM, giữ khi bị kéo về               |
|  [ ] Phế liệu           8   mất nếu bị kéo về                        |
|  [ ] Băng               3   mất nếu bị kéo về                        |
|  Tổng mất nếu hết giờ: 11 món      Oxy: 0   cần 30 để thoát ngạt    |
+----------------------------------------------------------------------+
```

Kết chuyến (UI-36) và Bị kéo về (UI-35) cùng khuôn: hai cột Giữ và Mất, danh sách vật, thời gian chuyến, Oxy còn. UI-36 chỉ có cột Giữ (cả túi), có dòng "Đã vào kho".

### 2.9 Input

Bàn phím theo vị trí phím vật lý (AZERTY dùng ZQSD cùng vị trí, không phải chữ). Bảng dưới là nguồn chung với `nguoi-choi.md` 2.7, thêm hành động của trạm, menu và các hành động còn thiếu (đánh dấu "mới").

Ngoài không gian:

| Hành động | Bàn phím và chuột | Gamepad Xbox | Ghi chú |
|---|---|---|---|
| Bay | W A S D | Cần trái | 8 hướng, chéo chuẩn hóa |
| Ngắm và quay mặt | Chuột | Cần phải | Hỗ trợ ngắm gamepad bật tắt được |
| Dùng dụng cụ | Chuột trái | RT | Giữ để khai thác |
| Đổi dụng cụ | 1 đến 4, cuộn chuột | D-pad trái phải | |
| Lướt | Shift trái | RB | |
| Hãm | Space | LT | |
| Tương tác, Kéo, Trao đồ, Mở lối, Bắt tay cỡ S | E | A | Ưu tiên ở 2.5 `nguoi-choi.md` |
| Kết nhanh | Q giữ 0,6 giây | B giữ 0,6 giây | Dùng được trên mọi cỡ đang Bất lực. E chỉ còn Tương tác (bắt tay cỡ S, gắn Phao kéo, cạy, sinh thiết, Xua đi boss). Giữ cả hai phím thì thao tác bấm trước thắng. Khớp `nguoi-choi.md` 2.7 |
| Kích Recall | F giữ | Y giữ | |
| Chia Oxy | V giữ | X giữ | |
| Dùng vật tiêu hao | G | D-pad xuống | Hồi Oxy có trần 25% mỗi chuyến, không dùng khi ngạt (K26). Khớp `nguoi-choi.md` 2.7 |
| Mở túi | Tab | Back | Không dừng thời gian |
| Ghim món (trong túi) | R | Bấm cần phải (R3) | Chỉ khi túi đang mở. R3 không đụng Y (Kích Recall) và X (Chia Oxy), khớp `nguoi-choi.md` 2.7 |
| Bản đồ chuyến | M | LB | Không dừng thời gian. Khớp `nguoi-choi.md` 2.7 |
| Ping | T mở bánh | D-pad lên | Chọn bằng chuột hay cần phải |
| Menu | Esc | Start | Cố định, không gán lại. Esc đóng màn con trước, Start luôn mở menu (luật 21) |

Trong trạm:

| Hành động | Bàn phím | Gamepad Xbox | Ghi chú |
|---|---|---|---|
| Đi trái phải | A D | Cần trái | |
| Leo thang | W S | Cần trái lên xuống | Không nhảy |
| Tương tác, sửa, mang, đặt kiện | E (giữ khi sửa và nhấc kiện, bấm khi đặt kiện) | A | |
| Xem kho nhanh (mới) | Tab | Back | Chỉ xem |
| Sổ tay (mới) | J | Y | |
| Ping | T | D-pad lên | |
| Menu | Esc | Start | |

Menu:

| Hành động | Bàn phím chuột | Gamepad |
|---|---|---|
| Chọn, di chuyển | Chuột hay mũi tên, W A S D | D-pad, cần trái |
| Xác nhận | Chuột trái, Enter, Space | A |
| Quay lại | Esc | B |
| Đổi thẻ | Q E | LB RB |
| Hành động phụ (hoán đổi, lọc) | R | X |

Luật:
1. Mỗi hành động có tối đa 2 phím bàn phím chuột và 1 nút gamepad. Đổi phím ở UI-52. Phím trùng thì báo và cho Hoán đổi. Esc và Start luôn mở menu, không gán lại để người chơi không tự khóa. Cài đặt lưu theo hồ sơ máy, khôi phục mặc định theo từng hành động hay cả nhóm. `MVP`
2. Glyph tự đổi theo thiết bị cuối cùng dùng: bàn phím, Xbox, PlayStation. Steam Deck dùng glyph của Steam Input. Con trỏ chuột ẩn khi dùng gamepad. `MVP`
3. Mọi thao tác giữ hiện vòng HUD-14. Tùy chọn "chuyển Giữ thành Bật" cho Kích Recall, Kéo, Chia Oxy, Khai thác: bấm một lần để bắt đầu, bấm lần nữa hay bị đòn thì hủy. `Sau MVP`
4. Hỗ trợ ngắm gamepad, độ nhạy ngắm, rung tay cầm, rung màn hình đều tắt hay chỉnh được ở UI-51. `MVP`
5. Phím không đổi nghĩa theo chế độ ngoài hai ngữ cảnh ngoài không gian và trong trạm (khớp `nguoi-choi.md` 2.7). `MVP`
6. Bảng phím ngoài không gian đã đối chiếu từng hàng với `nguoi-choi.md` 2.7 (Bay, Ngắm, Dụng cụ, Lướt, Hãm, Tương tác, Recall, Chia Oxy, Ghim món R3, Dùng vật tiêu hao G, Kết nhanh Q và B, Bản đồ M và LB, Túi, Ping, Menu): khớp hết. Bản chính của phần ngoài không gian là `nguoi-choi.md`, bản đầy đủ của trạm và menu là mục này (`nguoi-choi.md` đã trỏ sang đây). Còn lệch một câu: `nguoi-choi.md` ghi "Mọi phím gán lại được", UX ghi Esc và Start cố định, đề nghị gd-character sửa thành "trừ Esc và Start". `MVP`

### 2.10 FTUE chương 1

Thứ tự theo core loop và theo các mốc chương 1 của `cot-truyen.md` (C1.1 tỉnh dậy, C1.2 neo trạm, C1.3 Station Cinder, C1.4 Ingrid về, C1.5 xưởng, C1.6 Linh về, C1.7 khoang liên lạc và cảng, C1.8 tàu đầu tiên, C1.9 đóng chương). Các bước kích bằng sự kiện, không bằng đồng hồ, nên người chơi đi lệch thứ tự vẫn nhận đúng gợi ý ở đúng lúc.

Luật FTUE:
1. Gợi ý là một dòng chữ không quá 40 ký tự đặt cạnh thứ cần làm, không chặn thao tác (luật 9 mục 2.1). Mỗi bước dạy đúng một ý. `MVP`
2. Gợi ý tắt sau hành động đầu có ý nghĩa ở cột Tắt khi. Bước chỉ để thông tin tắt sau 8 giây hay khi người chơi làm việc tiếp. Mỗi bước hiện một lần cho mỗi người chơi, xem lại ở Sổ tay mục Cách chơi. `MVP`
3. Cảnh báo (nguy hiểm sắp tới) có dáng khác lời giới thiệu: nền cảnh báo, biểu tượng, động từ ngắn, ví dụ "Sáng đỏ là sắp đánh". `MVP`
4. Mọi tình huống dạy đặt ở dải Gần, ô Bến ngoài hoặc mảnh Mở đầu tiên, nơi `map.md` luật 2.3.8 cấm hazard ở Bến ngoài. Bước dạy kỹ năng chiến đấu chỉ đặt khi có đúng một con Driftlife thường trong vùng. `MVP`
5. Người chơi tắt gợi ý trong Cài đặt thì mọi gợi ý ẩn, Sổ tay mục Cách chơi vẫn đọc được. `MVP`
6. Không có bước dạy cho thứ ngoài chương 1. Thứ Sau MVP chỉ có danh mục cuối mục này. `MVP`
7. Cột Setup là cảnh dựng của thế giới, chỉ áp khi thế giới đang ở mốc chương ghi ở cột Trigger. Gợi ý là của từng người chơi. Hai người cùng tỉnh dậy thấy cùng một cảnh dựng (một con Driftlife ở T13), mỗi người nhận gợi ý của mình. Với người vào sau hay thế giới đã qua mốc, Setup bỏ qua, bước vẫn kích theo Trigger khi người đó lần đầu gặp tình huống. `MVP`

Mỗi bước có Design Intent (ý đồ), Trigger (kích khi), Setup (cảnh dựng), Interaction (người chơi làm), Tắt khi và Luật nguồn. Chuỗi gợi ý ở bảng strings, khóa `tut.tNN`.

| ID | Design Intent | Trigger | Setup | Interaction | Tắt khi | Luật nguồn |
|---|---|---|---|---|---|---|
| T01 | Biết mình điều khiển được và trạm đang hỏng | Sau cảnh tỉnh dậy C1.1, hoặc sau cảnh đến UI-05 với người vào sau | Trạm tối, chỉ KH01, KH02, KH03 dùng được, điểm sáng ở khoang kho | Đi A D, leo thang W S tới điểm sáng | Tới điểm sáng | `nguoi-choi.md` 2.8 |
| T02 | Luôn biết việc kế tiếp | Đã tới điểm sáng ở T01 | HUD-13 hiện mục tiêu "Sửa Khoang neo" | Mở Sổ tay một lần (tùy chọn) | Sau 8 giây | `cot-truyen.md` luật 10 |
| T03 | Ra ngoài là quyết định có xác nhận | Đứng trong 1,0 u của cửa khí | Hai dụng cụ khởi điểm đã trong đai | E ở cửa khí, chọn dụng cụ, xác nhận | Xác nhận xong | K4, C5 |
| T04 | Bay trực tiếp, buông thì trượt nửa giây | Ra khỏi cửa khí lần đầu | Ô Bến ngoài, vòng sáng cách 12 u, không hazard | WASD bay tới vòng | Tới vòng | `nguoi-choi.md` 2.1.1 và 2.1.3 |
| T05 | Hãm là cách dừng chính xác | Tốc độ trên 5 u/s khi cách vòng dưới 2 u, hoặc trôi quá vòng | Vòng thứ hai nhỏ hơn | Giữ Space dừng trong vòng | Dừng trong vòng | `nguoi-choi.md` 2.1.4 |
| T06 | Oxy là thời gian và là máu | 15 giây sau khi ra ngoài | Thanh HUD-01 và vạch HUD-02 sáng viền | Chỉ nhìn, chưa cần bấm | Sau 8 giây hay khi nhặt vật đầu | K1 |
| T07 | Nhặt là tự động | Mảnh Phế liệu đầu tiên trong 5 u | Ba mảnh vỡ trôi nối tới điểm khai thác | Bay lại gần, tự nhặt | Nhặt được 1 vật | `vat-pham.md` mục 7 (tutorial 1) |
| T08 | Khai thác cần giữ | Gần điểm khai thác độ cứng 0 với dụng cụ nạy đang cầm | Điểm tiến độ 3 đến 7 giây | Giữ chuột trái lên điểm | Khai thác xong 1 điểm | `nguoi-choi.md` 2.5, `vat-pham.md` mục 7 |
| T09 | Về khi đủ, không đợi cạn | Oxy chạm vạch "đủ về" lần đầu | La bàn Ember sáng viền | Bay vào cửa khí | Vào cửa khí | `nguoi-choi.md` 2.2.9 |
| T10 | Tham thì chậm | Tải túi lần đầu qua 60% hay Túi đầy | Điểm giàu phế liệu ở mảnh gần | Mở túi, thả một món | Thả 1 món hoặc 8 giây | K3, `nguoi-choi.md` 2.2.6 |
| T11 | Ghim món trước khi cần | Mở túi lần đầu có từ 2 loại vật | Món hiếm nhất đã ghim sẵn | Mở túi, ghim đổi một món | Ghim đổi lần đầu | K2 |
| T12 | Mang về là để trạm sống lại | Đứng ở khoang hỏng có đủ vật liệu (C1.2 khoang neo) | Danh sách vật liệu hiện cạnh khoang, đủ hoặc thiếu từng loại | Giữ E sửa | Sửa xong | K11, `tram-va-cang.md` luật 3 |
| T13 | Bắn có hướng | Có một Driftlife trong 8 u lần đầu | Một con Driftlife thường, hiền | Chuột trái bắn Lao từ | Một lần bắn trúng | `combat-driftlife.md` 2.1.5 |
| T14 | Né bằng lướt khi sáng đỏ | Báo trước đòn đầu tiên của Driftlife | Đòn nhẹ, báo trước tối thiểu 0,7 giây, hiện viền | Lướt để né | Né được một đòn | `combat-driftlife.md` 2.1.8 |
| T15 | Có đường thoát cố định | Thấy Recall Beacon lần đầu | Cột sáng và mũi tên la bàn | Giữ F 5 giây tại Beacon | Về xong hoặc 1 lần giữ | K4, `map.md` 2.5 |
| T16 | Vớt người là kéo, không nhặt | Tới buồng ngủ đông ở Station Cinder lần đầu (C1.3) | Buồng sáng nhịp tim, dây kéo | Giữ E kéo buồng về cửa khí | Buồng qua cửa khí | `nguoi-choi.md` 2.1.10 |
| T17 | Xưởng biến vật liệu thành đồ | Vào xưởng lần đầu sau quest Ingrid (C1.5) | Công thức đầu tiên chế nhanh, đủ vật liệu | Chọn công thức, bấm Chế | Chế xong 1 món | `vat-pham.md` mục 7 (tutorial 5) |
| T18 | Choáng là cơ hội | Dùng Dùi xung lần đầu | Con vật thường, ngưỡng choáng thấp | Dùi xung, đợi choáng, giữ Q Kết nhanh | Kết nhanh 1 con | `combat-driftlife.md` 2.2 và 2.3.23 |
| T19 | Bắt sống có giá trị hơn | Nhận Súng lưới sau quest Kỹ sư | Một con loài nhỏ cỡ S, đúng 1 con | Chuột trái bắn lưới, kéo mẫu về | Bắt 1 con | K9, log 49 |
| T20 | Ngạt không phải thua | Vào trạng thái Ngạt lần đầu | Túi tự mở ở chế độ chọn món | Chọn món ghim, chờ hoặc bay tới cửa khí | Hết Ngạt | K2, `nguoi-choi.md` 2.3 |
| T21 | Bảng tàu nói hôm nay cần gì | Vào khoang liên lạc sau quest Linh (C1.7) | Ca đầu của thế giới cố định một tàu TA01 với một dòng kiện (luật 67 của `tram-va-cang.md`) | Mở bảng tàu, ghim kiện | Ghim lần đầu | `tram-va-cang.md` 2.9 |
| T22 | Lấy hàng rồi đóng kiện | Ca cảng đầu tiên mở (C1.8) | TA01 lưu bến Dài, một dòng kiện phế liệu (ca đầu cố định), hàng thô đủ trong kho | Lấy hàng từ kho, bỏ vào máy đóng kiện, nhận kiện | Nhận kiện đầu tiên | `tram-va-cang.md` luật 24, mục 7 |
| T23 | Bốc lên tàu là lấy tiền ngay | Cầm kiện đầu tiên | Cửa bến sáng | Mang kiện tới cửa bến, E bốc | Bốc xong 1 kiện, thấy Tally cộng | `tram-va-cang.md` luật 29 và 30 |
| T24 | Có kiện cần chế thêm | Dòng đơn đầu tiên có kiện cần chế thêm | Dòng đơn có biểu tượng búa | Chế ở xưởng rồi đóng kiện | Kiện chế đóng xong | `tram-va-cang.md` luật 25 |
| T25 | Tàu chờ ngoài, bến trống mới cập | Tàu đầu tiên rơi vào trạng thái Chờ ngoài | Tàu thứ hai tới khi bến 1 bận | Chỉ nhìn vòng chờ ngoài | Sau 8 giây | `tram-va-cang.md` luật 21 |
| T26 | Đơn đủ mới có thưởng, đơn trượt không mất | Kết ca đầu tiên | Bảng kết ca có cả đơn đủ lẫn đơn trượt trong kịch bản | Đọc bảng, bấm Tiếp tục | Bấm Tiếp tục | `tram-va-cang.md` luật 31 và 32, K15 |
| T27 | Nâng cấp cho cả nhóm, áp từ chuyến sau | Lần đầu đủ vật liệu và Tally cho bậc 1 | Xưởng, một trục có thể mua | Chọn trục, Nâng cấp | Mua xong | K19, C4 |
| T28 | Shop để mua thứ không tự làm | Cuối ngày sau ca cảng đầu | Danh mục cơ bản | Đặt một mục | Đặt xong | K20 |
| T29 | Manh mối tự ghi vào Sổ tay, không chiếm túi | Nhặt vật manh mối đầu tiên (nhật ký trạm ở khoang ngủ đông Station Cinder, C1.3. `[GIẢ ĐỊNH]` gd-world chuyển nhật ký về khe M4 theo yêu cầu của gd-story, nếu không chuyển thì T29 lùi sang lần vào thứ hai) | Vật manh mối có dấu riêng, khác vật thường | Chỉ nhìn dòng "Đã ghi vào Sổ tay" và dấu manh mối trên Sổ tay | Sau 8 giây | `cot-truyen.md` luật 4 |
| T30 | Cảnh truyện bỏ qua được | Cảnh đầu tiên của người chơi (UI-05) | Nút Bỏ qua luôn hiện ở góc | Bấm Bỏ qua hay xem tiếp | Sau cảnh đầu | `cot-truyen.md` luật 8 |
| T31 | Lướt có giá bằng Oxy | Lần đầu bấm Lướt | Không cần dựng riêng | Bấm Lướt, thấy Oxy tụt và hồi chiêu | Lướt xong 1 lần | `nguoi-choi.md` 2.1.5, mục 7 |
| T32 | Bản đồ chuyến chỉ đường về | Đã đi qua 3 mảnh hoặc Oxy chạm 50% lần đầu | Không cần dựng riêng | Bấm M xem đường về | Mở bản đồ 1 lần | K4, K5, `map.md` mục 6.1 |
| T33 | Ping thay lời nói | Lần đầu có đồng đội trong cùng chuyến (từ 2 người) | Không cần dựng riêng | Nhấn T, chọn một ping | Ping 1 lần | `nguoi-choi.md` 2.5 |
| T34 | Chia Oxy để cứu bạn | Đồng đội trong 8 u rơi vào Ngạt lần đầu và mình còn trên 20 Oxy | Tình huống tự có | Giữ V cạnh bạn | Chia xong hoặc sau 8 giây | C6, `nguoi-choi.md` 2.3 |
| T35 | Trao đồ cho bạn khi cần | Lần đầu đồng đội trong 1,5 u còn chỗ trong túi và mình có đồ trong túi | Tình huống tự có, không dùng khi đồng đội đang ngạt (K27) | Giữ E chọn món trao | Trao 1 lần | K27, `nguoi-choi.md` 2.5 |
| T36 | Hồi Oxy có trần, không phải bơm vô hạn | Oxy dưới 50% lần đầu khi có vật tiêu hao hồi Oxy trong túi | Không cần dựng riêng, phụ thuộc gd-items đưa vật tiêu hao vào chương 1 | Bấm G dùng vật, thấy "Còn hồi {n} Oxy" giảm | Dùng 1 lần | K26 |

Các bước T29 và T30 trả lời mục "bước hướng dẫn cần có" ở cuối `cot-truyen.md`: cách bỏ qua cảnh (T30), cách mở Sổ tay (T02 và T29), dấu của vật manh mối (T29).

Người vào sau (C2) học thế nào:
1. Cảnh đến (UI-05, 6 giây, bỏ qua được) rồi UI-20 Chờ nhóm nếu nhóm đang ngoài. Trong UI-20 có nút xem lại Cách chơi ở Sổ tay. `MVP`
2. Gợi ý tính theo người chơi (luật 19 mục 2.1) nên bạn từng chơi ở thế giới khác không bị nhắc lại. Hồ sơ mới thì nhận T01 trở đi theo trigger, đi cùng nhóm ngay. `MVP`
3. Bộ khởi điểm có hai dụng cụ cơ bản. Ping là cách đồng đội dạy nhanh nhất, nên T20 và T15 có thêm dòng "Đồng đội ping Cần Oxy" khi có ping tới. `MVP`

Danh mục thứ Sau MVP chưa có bước (không viết cho tới khi Lead mở phạm vi): Mê và Súng gây mê, Phao kéo, Kim sinh thiết và Lồng mẫu, nuôi Driftlife, ba loại sự cố ca cảng, bị lưới The Wardens trói, vào dải thiếu cấp vỏ, Skiff, dòng ẩn TA06, Bản sao dữ liệu.

### 2.11 Checklist game feel

Mỗi dòng là một khoảnh khắc cần có phản hồi. "Thời gian" là thời gian từ lúc thao tác tới lúc thấy phản hồi đầu tiên. Số lấy từ GDD vai khác ghi cột Nguồn, còn lại là ước và phải thử trên prototype của gd-tech. Phối hợp gd-combat cho các dòng chiến đấu.

| Khoảnh khắc | Cảm giác muốn | Hình | Âm | Thời gian | Nguồn |
|---|---|---|---|---|---|
| Nhặt | Gọn, thưởng nhẹ | Vật bay cong vào người, số cộng ở HUD-09 | Tick, cao độ theo độ hiếm | 0,1 giây | `vat-pham.md` 7b |
| Khai thác xong | Nặng, xong việc | Mảnh vụn nổ, vật nhả ra có viền | Vỡ ngắn | 0,2 giây | `vat-pham.md` 7b |
| Bắt sống (lưới trúng) | Hả hê, mẫu quý | Lưới co lại, mẫu bay vào lồng, hiện số sao | Pốp vui rồi hợp âm theo sao | 0,3 giây ước | `combat-driftlife.md` mục 7 |
| Kết nhanh | Dứt khoát | Con vật vỡ, nguyên liệu viền sáng | Vỡ trầm | 0,15 giây ước | `combat-driftlife.md` mục 7 |
| Choáng | Rõ ràng, có cơ hội | Vòng xanh quanh con vật, đồng hồ vòng | Điện xẹt rồi ù | 0,1 giây | `combat-driftlife.md` mục 7 |
| Trúng đòn | Đau nhưng đọc được | Nháy trắng 2 khung, thanh Oxy có vệt đỏ phần mất, rung nhẹ | Va mũ, thở gấp | 1 khung | `nguoi-choi.md` mục 7 |
| Oxy chạm 50%, 25%, 10% | Tăng dần áp lực, không hoảng | Theo HUD-01, viền màn hình ở 10% | Bíp mỗi 3, 1,5, 0,7 giây | 1 khung | `nguoi-choi.md` 2.2.9 |
| Oxy chạm vạch đủ về | Tín hiệu nên quay về | Chữ ĐỦ VỀ sáng 2 giây | Một tiếng chuông | 1 khung | `nguoi-choi.md` 2.2.9 |
| Về tới cửa khí | An toàn, thở ra | Cảnh vào khoang, Oxy đầy lại | Hít sâu, khóa khí | Dưới 1 giây ước | `nguoi-choi.md` bảng trạng thái |
| Kích Recall xong | Được kéo đi trong nhịp sáng | Vòng đầy, chớp sáng rồi cắt cảnh về trạm | Bíp tăng dần rồi cắt | 5 giây giữ | `map.md` mục 7b |
| Được chia Oxy | Ấm, được cứu | Dây sáng nối hai bộ đồ, hạt chạy theo dây | Tiếng nạp ấm | 1 khung | `nguoi-choi.md` mục 7 |
| Bị kéo về | Nuối nhưng không bị phạt nặng | Dây kéo về hướng trạm, bình mờ dần | Thu dây | 1,5 giây | `nguoi-choi.md` mục 7 |
| Sửa khoang xong | Trạm sống lại | Khoang sáng dần, mảnh vỡ biến mất, người vớt bước vào | Máy khởi động, ù nền | 0,5 giây ước | `tram-va-cang.md` mục 7 |
| Đóng kiện | Hộp gấp gọn | Hộp gấp lại, nhãn loại và phẩm cấp | Dán, thả hộp | 0,5 giây | `vat-pham.md` 7b |
| Bốc xong kiện | Tiền vào túi ngay | Kiện trượt vào khoang hàng, dòng giảm một, Tally bay lên | Nhận hàng, xu | 150 ms | `tram-va-cang.md` 7b |
| Tàu rời bến đủ đơn | Hài lòng | Thương nhân vẫy, pháo sáng nhỏ, cờ nhanh nếu có | Hợp âm đi lên, cao dần theo số đơn đủ liên tiếp | 1 khung | `tram-va-cang.md` mục 7 |
| Tàu rời bến trượt đơn | Trung tính, không phạt | Dòng thiếu tô xám, thương nhân lắc đầu | Hợp âm trung tính, không chói | 1 khung | `tram-va-cang.md` mục 7 |
| Nhận Tally | Số tăng đo được | Số cộng bay từ nơi nhận lên HCH-09 | Xu, cao độ theo giá | 150 ms | `tram-va-cang.md` 7b |
| Lên Hạng cảng | Một cột mốc | Bảng hạng sáng, danh sách thứ mới | Chuông dài | Sau kết ca | `tram-va-cang.md` mục 7 |
| Mua nâng cấp | Bộ đồ khác đi | Bộ đồ đổi hình theo trục, hiện số bậc mới | Tiếng khởi động | 0,3 giây ước | `vat-pham.md` mục 7 |

Quy tắc: mọi lớp phản hồi (rung, chớp, hạt, âm, hitstop) có tham số bật tắt riêng trong prototype để đo lớp nào đáng giữ. Rung màn hình chỉ ở trúng đòn từ 15 Oxy và khi boss chuyển pha (khớp `combat-driftlife.md` 7b) và tắt được trong UI-51.

### 2.12 Bảng đối chiếu luật với màn

Mỗi luật khung mà người chơi cần thấy phải có tín hiệu. Cột Tín hiệu trỏ tới màn hay phần tử. "Không cần" ghi lý do.

| Luật | Điều người chơi cần thấy | Tín hiệu | Nhãn |
|---|---|---|---|
| K1 | Oxy là thời gian và máu, hết thì sao | HUD-01, HUD-02, UI-34 | MVP |
| K2 | Bị kéo về chỉ giữ 1 món, không mất Tally | HUD-04, UI-31 ghim, UI-34, UI-35 hai cột Giữ và Mất | MVP |
| K3 | Túi giới hạn, đồ chỉ thành của trạm khi về | HUD-03, UI-31, UI-36 dòng "Đã vào kho" | MVP |
| K4 | Có đường về: cửa khí và Beacon | HUD-06, HUD-14, UI-33, T15 | MVP |
| K5 | Dải Gần, Giữa, Xa | HUD-11 tên dải, UI-33 | MVP (Gần) |
| K6 | Dải chưa mở bị chặn bằng vật cản (MVP). Thiếu cấp vỏ thì Oxy hao nhanh (Sau MVP) | HUD-10 chữ "Chưa có đường qua", HUD-11, HUD-01 hệ số, UI-16 | MVP (vật cản), Sau MVP (thiếu cấp vỏ) |
| K7 | Map nhánh có lối vào riêng, có thể cần chìa | UI-33 biểu tượng lối vào, HUD-10 chữ "Cần {tool} để mở", cảnh chuyển, Sổ tay | MVP |
| K8 | Sinh lại mỗi chuyến, không cạn | Không cần tín hiệu riêng, điểm khai thác mới hiện ở chuyến sau | MVP |
| K9 | Sống có giá trị hơn hạ | Sao chất lượng và giá ở UI-12, T19 | MVP |
| K10 | Động cơ chính là mục tiêu dài | UI-18, HUD-13, Sổ tay | MVP giai đoạn 1 |
| K11 | Khoang sửa xong đổi hình | UI-10, UI-17 | MVP |
| K12 | Mỗi người vớt mở một tính năng | UI-10 tên người ở khoang, UI-19 | MVP |
| K13 | Ca cảng: bốc kiện trước giờ tàu rời | UI-40, UI-41, UI-42, T22 đến T26 | MVP |
| K14 | Sự cố trạm trong ca | HCH-08 | Sau MVP |
| K15 | Hạng cảng tăng theo ca | UI-43, UI-45, HCH-09 (Tally và Hạng cảng) | MVP tới hạng 3 |
| K16 | Nuôi là lựa chọn lợi | UI-22 | Sau MVP |
| K17 | Không có hệ đói hay phí duy trì | Không cần: không có chỉ số nào để hiện | MVP |
| K18 | Tally là đồng tiền duy nhất | HCH-09, UI-15, UI-16 | MVP |
| K19 | Chi Tally vào nâng cấp và shop | UI-15, UI-16 | MVP |
| K20 | Shop là bảng giá duy nhất | UI-15, UI-14 giá một kiện chỉ để xem | MVP |
| K21 | 5 chương | Thẻ tên chương (luật 24), HUD-13, UI-19 | MVP chương 1 |
| K22 | Tối đa 2 chuyến mỗi ngày, mở ca là hết ra ngoài | HTR-02, UI-11 khóa kèm lý do, UI-14 cảnh báo khi Mở ca | MVP |
| K23 | Ngày chỉ sang khi ngủ, tự lưu lúc ngủ, thoát giữa ngày về lần lưu gần nhất | UI-44, HTR-01 đồng hồ ngủ, HTR-03 "Đã lưu", UI-01 "Lần lưu", luật 23 | MVP |
| K24 | Sau cảnh kết về menu chính, bản lưu ở ngày cuối | UI-01 nhãn "Ngày cuối" | Sau MVP |
| C1 | 1 đến 4 người, không PvP | UI-02, UI-03, HUD-07 | MVP (2 người) |
| C2 | Host chọn số người, bạn vào sau tối đa 4 | UI-02, UI-04 Phòng đầy, UI-05 cảnh đến | MVP |
| C3 | Dùng chung và riêng | UI-12 nhãn "Kho chung", HUD-01 và HUD-03 là riêng, nhãn "Chung cả nhóm" ở UI-16 | MVP |
| C4 | Nâng cấp mua cho cả nhóm | UI-16 dòng "Áp cho cả nhóm" | MVP |
| C5 | Cả nhóm xác nhận ở cửa khí | UI-11 tick từng người, HTR-01 đồng hồ 30 giây, nút "Ở lại trạm" | MVP |
| C6 | Chuyến kết thúc riêng từng người, chia Oxy | HUD-07, UI-34, UI-36 | MVP |
| C7 | Từ 2 người online không tạm dừng | UI-50 biểu tượng "Thời gian vẫn chạy", luật 26 | MVP |
| C8 | Cân bằng theo số người | UI-14 ghi chú "Đơn theo số người đang chơi", số kiện tính lại khi có người vào hay rời và chốt lúc Mở ca, không có hệ số riêng | MVP |
| C9 | Người về sớm không ra lại, làm việc trạm | UI-20, HUD-07 hàng "Đã về" | MVP |
| C10 | Rớt mạng quá 15 giây hoặc rời giữa chuyến tính như bị kéo về | HUD-07 Giữ chỗ và đồng hồ 15 giây, UI-35, luật 23, UI-10 banner chủ phòng | MVP |

### 2.13 Strings UI

Mỗi key một dòng. Giới hạn là số ký tự tối đa của chuỗi gốc kể cả ký hiệu {…} (chuỗi thật sau thay thế có thể ngắn hơn). Chữ trong ngoặc nhọn là biến, người chơi không thấy. Máy kiểm bằng `projects/game-moi/ux/kiem-ux.mjs`. Văn phong: ngắn, động từ trước, không lộ tên biến, không từ chỉ số người chơi ("một mình", "cả nhóm" chỉ dùng ở chỗ luật yêu cầu nêu rõ).

| Key | Tiếng Việt | Giới hạn | Màn |
|---|---|---|---|
| hud.oxy.label | Oxy | 8 | UI-30 |
| hud.oxy.time | còn ~{m}:{s} | 14 | UI-30 |
| hud.oxy.mult | x{n} | 8 | UI-30 |
| hud.oxy.low | THẤP | 8 | UI-30 |
| hud.oxy.back_ok | ĐỦ VỀ | 10 | UI-30 |
| hud.return.airlock | Về cửa khí | 14 | UI-30 |
| hud.return.beacon | Về Beacon | 14 | UI-30 |
| hud.bag.label | Túi | 8 | UI-30 |
| hud.bag.heavy | Nặng | 8 | UI-30 |
| hud.bag.full | Đầy | 8 | UI-30 |
| hud.bag.penalty | -{p}% tốc độ, hao +{p}% | 28 | UI-30 |
| hud.pin.label | Ghim | 8 | UI-30 |
| hud.pin.none | Chưa ghim | 14 | UI-30 |
| hud.pin.set | Đã ghim {item} | 28 | UI-30 |
| hud.tool.ammo | Lưới cuộn x{n} | 18 | UI-30 |
| hud.ping.left | Ping {n} | 10 | UI-30 |
| hud.zone.under | Thiếu cấp vỏ, hao Oxy x{n} | 32 | UI-30 |
| hud.goal.pinned | Cần: {group} x{n} | 28 | UI-30 |
| hud.team.choking | Ngạt {s} giây | 14 | UI-30 |
| hud.team.sharing | Đang chia Oxy | 16 | UI-30 |
| hud.team.home | Đã về trạm | 14 | UI-30 |
| hud.team.lost | Giữ chỗ | 12 | UI-30 |
| prompt.pull | {key} Kéo | 14 | UI-30 |
| prompt.recall | Giữ {key} về trạm | 24 | UI-30 |
| prompt.share | Giữ {key} chia Oxy | 24 | UI-30 |
| prompt.trade | Giữ {key} trao đồ | 24 | UI-30 |
| prompt.open_door | Giữ {key} mở lối | 24 | UI-30 |
| prompt.airlock | {key} vào cửa khí | 24 | UI-30 |
| prompt.finish | Giữ {key} kết nhanh | 24 | UI-30 |
| prompt.repair | Giữ {key} sửa | 18 | UI-17 |
| prompt.use | {key} dùng | 14 | UI-10 |
| prompt.load | {key} bốc kiện | 18 | UI-40 |
| prompt.carry | Giữ {key} nhấc kiện | 24 | UI-40 |
| prompt.put | {key} đặt kiện | 18 | UI-40 |
| prompt.release | Thả phím để hủy | 20 | UI-30 |
| toast.pick | +{n} {item} | 32 | UI-30 |
| toast.bag_full | Túi đầy | 12 | UI-30 |
| toast.recall_cancel | Recall bị hủy | 20 | UI-30 |
| toast.oxy_shared | Đã chia {n} Oxy | 24 | UI-30 |
| toast.tally | +{n} Tally | 16 | UI-40 |
| toast.craft_done | {item} đã chế xong | 32 | UI-10 |
| toast.room_fixed | {room} đã sửa xong | 32 | UI-10 |
| toast.goal_new | Mục tiêu mới | 16 | UI-10 |
| toast.joined | {name} đã vào | 28 | UI-10 |
| toast.left | {name} đã rời phiên | 32 | UI-10 |
| toast.home | {name} đã về trạm | 32 | UI-30 |
| toast.order_done | Đơn đủ | 12 | UI-40 |
| toast.order_missed | Tàu đã rời | 16 | UI-40 |
| btn.continue_world | Chơi tiếp | 14 | UI-01 |
| btn.new_world | Thế giới mới | 16 | UI-01 |
| btn.join | Tham gia | 12 | UI-01 |
| btn.settings | Cài đặt | 12 | UI-01 |
| btn.quit | Thoát | 10 | UI-01 |
| btn.create | Tạo | 8 | UI-02 |
| btn.ready | Sẵn sàng | 12 | UI-03 |
| btn.invite | Mời bạn | 12 | UI-03 |
| btn.enter | Vào | 8 | UI-04 |
| btn.skip | Bỏ qua | 10 | UI-05 |
| btn.continue | Tiếp tục | 12 | UI-35 |
| btn.back | Quay lại | 12 | UI-50 |
| btn.confirm | Xác nhận | 12 | UI-11 |
| btn.stay | Ở lại trạm | 14 | UI-11 |
| btn.craft | Chế | 8 | UI-13 |
| btn.upgrade | Nâng cấp | 12 | UI-16 |
| btn.order | Đặt hàng | 12 | UI-15 |
| btn.open_shift | Mở ca | 8 | UI-14 |
| btn.pin_group | Ghim kiện | 18 | UI-14 |
| btn.sleep | Vào buồng ngủ | 18 | UI-44 |
| btn.retry | Thử lại | 10 | UI-01 |
| btn.swap | Hoán đổi | 12 | UI-52 |
| btn.reset | Mặc định | 12 | UI-52 |
| title.create | Tạo thế giới | 16 | UI-02 |
| title.lobby | Sảnh | 8 | UI-03 |
| title.join | Tham gia thế giới | 20 | UI-04 |
| title.airlock | Cửa khí | 12 | UI-11 |
| title.storage | Kho | 8 | UI-12 |
| title.workshop | Xưởng | 8 | UI-13 |
| title.shipboard | Bảng tàu | 12 | UI-14 |
| title.shop | Shop | 8 | UI-15 |
| title.upgrade | Nâng cấp | 12 | UI-16 |
| title.repair | Sửa khoang | 14 | UI-17 |
| title.engine | Động cơ chính | 16 | UI-18 |
| title.notebook | Sổ tay | 10 | UI-19 |
| title.wait | Chờ nhóm | 12 | UI-20 |
| title.map | Bản đồ chuyến | 16 | UI-33 |
| title.choking | Ngạt | 8 | UI-34 |
| title.pulled | Bị kéo về | 14 | UI-35 |
| title.home | Về an toàn | 14 | UI-36 |
| title.shift_end | Kết ca | 10 | UI-43 |
| title.day_end | Cuối ngày | 12 | UI-44 |
| title.rank_up | Lên Hạng cảng | 16 | UI-45 |
| title.paused | Tạm dừng | 12 | UI-50 |
| title.menu | Menu | 8 | UI-50 |
| title.keys | Đổi phím | 12 | UI-52 |
| lbl.keep | Giữ | 8 | UI-35 |
| lbl.lose | Mất | 8 | UI-35 |
| lbl.empty_trip | Chuyến trống | 14 | UI-36 |
| lbl.none_lost | Không mất gì | 16 | UI-35 |
| lbl.room_full | Phòng đầy | 12 | UI-04 |
| lbl.clock_runs | Thời gian vẫn chạy | 22 | UI-50 |
| lbl.max | Tối đa | 10 | UI-16 |
| lbl.missing | Thiếu {n} | 12 | UI-17 |
| err.save_read | Không đọc được bản lưu | 32 | UI-01 |
| err.name_dup | Tên đã dùng | 20 | UI-02 |
| err.code_bad | Mã sai hoặc hết hạn | 32 | UI-04 |
| err.net_lost | Mất kết nối | 20 | UI-30 |
| err.host_lost | Mất kết nối chủ phòng | 24 | UI-10 |
| err.save_fail | Lưu lỗi, thử lại | 24 | UI-44 |
| err.not_enough | Không đủ {res} | 24 | UI-16 |
| err.wrong_cargo | Không có trong đơn | 20 | UI-41 |
| err.shelf_full | Kệ đầy, máy giữ kiện | 28 | UI-42 |
| err.queue_full | Hàng đợi đầy | 20 | UI-13 |
| err.locked | Chưa mở ở chương này | 28 | UI-10 |
| set.text_size | Cỡ chữ | 12 | UI-51 |
| set.reduce_flash | Giảm nhấp nháy và rung | 28 | UI-51 |
| set.aim_assist | Hỗ trợ ngắm | 16 | UI-51 |
| set.hints | Gợi ý hướng dẫn | 20 | UI-51 |
| set.rumble | Rung tay cầm | 16 | UI-51 |
| set.hold_toggle | Giữ thành bật | 16 | UI-51 |
| set.vol_master | Âm lượng tổng | 20 | UI-51 |
| set.vol_music | Nhạc | 12 | UI-51 |
| set.vol_sfx | Hiệu ứng | 14 | UI-51 |
| set.vol_alert | Cảnh báo | 14 | UI-51 |
| set.captions | Chú thích âm | 20 | UI-51 |
| state.storage_empty | Kho trống | 14 | UI-12 |
| state.bag_empty | Túi trống | 14 | UI-31 |
| state.no_ships | Hôm nay không có tàu | 28 | UI-14 |
| state.first_ship | Chờ tàu đầu tiên | 24 | UI-40 |
| state.no_ping | Hết ping | 12 | UI-32 |
| state.ping_wait | Chờ ping tự hết | 18 | UI-32 |
| state.shift_on | Ca đang chạy | 16 | UI-14 |
| state.unset | Chưa gán | 12 | UI-52 |
| state.fixed | Cố định | 12 | UI-52 |
| state.next_chapter | Chương sau | 14 | UI-18 |
| state.done | Xong | 8 | UI-18 |
| state.enough | Đủ | 8 | UI-41 |
| state.scheduled | Trong lịch | 14 | UI-40 |
| state.docked | Ở bến | 10 | UI-40 |
| state.waiting_out | Chờ ngoài | 14 | UI-40 |
| state.just_back | Nhóm vừa về | 16 | UI-20 |
| lbl.how_to | Cách chơi | 12 | UI-19 |
| state.saving | Đang lưu | 12 | UI-44 |
| state.saved | Đã lưu | 10 | UI-44 |
| state.no_signal | Mất tín hiệu | 16 | UI-33 |
| state.wait_friends | Chờ bạn | 10 | UI-03 |
| lbl.orders_by_players | Đơn theo số người đang chơi | 32 | UI-14 |
| hud.block | Chưa có đường qua | 24 | UI-30 |
| prompt.need_key | Cần {tool} để mở | 24 | UI-30 |
| hud.share.floor | Dừng chia: giữ lại {n} Oxy | 32 | UI-30 |
| hud.rank | Hạng {n} ({a}/{b}) | 24 | UI-40 |
| hud.chapter | Chương {n}: {name} | 40 | UI-05 |
| hud.team.hold | Giữ chỗ {s} giây | 18 | UI-30 |
| net.ok | Mạng ổn | 10 | UI-30 |
| net.lag | Mạng trễ | 12 | UI-30 |
| lbl.last_save | Lần lưu: Ngày {n} | 24 | UI-01 |
| lbl.final_day | Ngày cuối | 12 | UI-01 |
| lbl.soon | Sắp có | 10 | UI-02 |
| lbl.no_friends | Chưa có bạn nào đang chơi | 32 | UI-04 |
| lbl.nothing_to_lose | Không có gì để mất | 24 | UI-34 |
| lbl.pin_one | Ghim giữ lại 1 đơn vị | 28 | UI-34 |
| lbl.being_shared | Đang được chia Oxy | 24 | UI-34 |
| lbl.quest_back | Vật nhiệm vụ về chỗ cũ | 32 | UI-35 |
| lbl.trip_of | Chuyến {n}/{m} | 16 | UI-11 |
| lbl.no_trips | Hôm nay hết chuyến ra ngoài | 36 | UI-11 |
| lbl.open_shift_warn | Mở ca là hết ra ngoài hôm nay | 40 | UI-14 |
| lbl.skip_shift_warn | Bỏ ca cũng hết ra ngoài hôm nay | 40 | UI-14 |
| lbl.for_group | Áp cho cả nhóm | 20 | UI-16 |
| lbl.shop_soon | Shop sắp có hàng | 24 | UI-15 |
| btn.skip_shift | Bỏ ca | 8 | UI-14 |
| btn.cancel | Hủy | 8 | HTR-01 |
| btn.leave_anyway | Vẫn thoát | 12 | UI-50 |
| btn.menu_main | Về menu chính | 18 | UI-50 |
| hud.confirm.go | Ra ngoài sau {s} giây | 28 | HTR-01 |
| hud.confirm.sleep | Ngủ sau {s} giây | 24 | HTR-01 |
| hud.confirm.wait | Chờ: {names} | 32 | HTR-01 |
| hud.trip_count | Chuyến {n}/{m} | 16 | HTR-02 |
| hud.saved | Đã lưu | 10 | HTR-03 |
| confirm.leave_trip | Thoát giữa chuyến tính như bị kéo về, chỉ giữ 1 món | 64 | UI-50 |
| confirm.leave_trip_solo | Thoát giữa chuyến sẽ mất chuyến này | 40 | UI-50 |
| confirm.leave_save | Lần sau vào lại ở lần lưu gần nhất | 40 | UI-50 |
| err.version | Khác phiên bản game | 24 | UI-04 |
| err.host_world | Thế giới về lần lưu gần nhất | 40 | UI-10 |
| err.save_menu | Lưu lỗi: thế giới về lần lưu gần nhất | 56 | UI-44 |
| tut.t31 | Lướt tốn {n} Oxy, hồi {s} giây | 40 | T31 |
| tut.t32 | {map} mở bản đồ chuyến | 40 | T32 |
| tut.t33 | {ping} mở bánh ping cho đồng đội | 40 | T33 |
| tut.t34 | Giữ {share} để chia Oxy cho bạn | 40 | T34 |
| tut.ping_oxy | Đồng đội ping Cần Oxy | 30 | T33 |
| tut.t35 | Giữ {interact} để trao đồ cho bạn | 40 | T35 |
| state.engineer_wait | Kỹ sư chưa tới | 24 | UI-13 |
| state.wait_update | Chờ cập nhật | 16 | UI-20 |
| state.no_samples | Chưa có mẫu | 14 | UI-21 |
| state.no_blueprints | Hết bản thiết kế | 20 | UI-21 |
| state.shelf_full | Kệ đầy | 10 | UI-42 |
| lbl.shift_blocked | Còn người đang ở ngoài chuyến | 36 | UI-14 |
| state.shift_done | Hôm nay đã có ca | 24 | UI-14 |
| hud.confirm.shift | Mở ca sau {s} giây | 28 | HTR-01 |
| hud.confirm.skip | Bỏ ca sau {s} giây | 28 | HTR-01 |
| lbl.from_price | từ {n} | 12 | UI-14 |
| story.box | {câu thoại} | 80 | UI-53 |
| story.radio | {dòng radio} | 60 | UI-30 |
| story.bubble | {lời bong bóng} | 60 | UI-40 |
| notebook.line | {dòng Sổ tay} | 60 | UI-19 |
| lbl.lost_since | Mất việc từ: {point} | 32 | UI-44 |
| lbl.no_give_choking | Đang ngạt: không trao, không thả đồ | 40 | UI-34 |
| hud.oxy.refill | Còn hồi {n} Oxy | 24 | HUD-15 |
| hud.oxy.refill_max | Đã hồi tối đa chuyến này | 32 | HUD-15 |
| err.no_use_choking | Không dùng được khi ngạt | 28 | HUD-15 |
| prompt.use_item | {key} dùng {item} | 28 | UI-30 |
| confirm.leave_host | Chủ phòng thoát thì phiên kết thúc | 44 | UI-50 |
| confirm.leave_shift | Thoát giữa ca sẽ mất ca đang dở | 40 | UI-50 |
| tut.t36 | {use} dùng vật tiêu hao hồi Oxy | 40 | T36 |
| story.line | {lời nhân vật} | 60 | UI-10 |
| tut.t01 | {move} đi trái phải, {climb} leo thang | 40 | T01 |
| tut.t02 | Mục tiêu ở góc phải, {notebook} Sổ tay | 40 | T02 |
| tut.t03 | {interact} ở cửa khí để ra ngoài | 40 | T03 |
| tut.t04 | {move} để bay tới vòng sáng | 40 | T04 |
| tut.t05 | Giữ {brake} để dừng gọn | 40 | T05 |
| tut.t06 | Oxy là thời gian, hết là bị kéo về | 40 | T06 |
| tut.t07 | Bay lại gần để nhặt | 40 | T07 |
| tut.t08 | Giữ {tool} lên điểm để khai thác | 40 | T08 |
| tut.t09 | Oxy chạm vạch ĐỦ VỀ, quay về ngay | 40 | T09 |
| tut.t10 | Túi nặng thì chậm và hao Oxy nhanh | 40 | T10 |
| tut.t11 | {bag} mở túi, {pin} ghim món | 40 | T11 |
| tut.t12 | Giữ {interact} để sửa khoang | 40 | T12 |
| tut.t13 | {tool} để bắn Lao từ | 40 | T13 |
| tut.t14 | Sáng đỏ là sắp đánh, {dash} để né | 40 | T14 |
| tut.t15 | Giữ {recall} ở Beacon để về trạm | 40 | T15 |
| tut.t16 | Giữ {interact} để kéo buồng ngủ | 40 | T16 |
| tut.t17 | Chọn công thức rồi bấm Chế | 40 | T17 |
| tut.t18 | Choáng rồi, giữ {finish} kết nhanh | 40 | T18 |
| tut.t19 | Súng lưới bắt loài nhỏ còn sống | 40 | T19 |
| tut.t20 | Chờ cứu hoặc bay tới cửa khí | 40 | T20 |
| tut.t21 | Xem đơn của tàu, ghim hàng cần | 40 | T21 |
| tut.t22 | Lấy hàng ở kho, bỏ vào máy đóng kiện | 40 | T22 |
| tut.t23 | Mang kiện tới cửa bến, {interact} để bốc | 40 | T23 |
| tut.t24 | Kiện này cần chế ở xưởng trước | 40 | T24 |
| tut.t25 | Tàu chờ ngoài, bến trống sẽ cập | 40 | T25 |
| tut.t26 | Đơn đủ mới có thưởng và điểm cảng | 40 | T26 |
| tut.t27 | Nâng cấp có tác dụng từ chuyến sau | 40 | T27 |
| tut.t28 | Đặt hàng cuối ngày, hàng tới sáng mai | 40 | T28 |
| tut.t29 | Manh mối đã ghi vào Sổ tay | 40 | T29 |
| tut.t30 | Bấm {skip} để bỏ qua cảnh | 40 | T30 |

## 3. Tham số

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nhóm tác động | Nguồn |
|---|---|---|---|---|---|---|
| Chiều cao camera ngoài không gian | 10,0 u (ngang 17,8 u ở 16:9, nhân vật 72 px ở 720p) | 9 đến 12 | Thấy xa, nhân vật nhỏ | Hẹp, hazard vào màn muộn | Đọc map, hazard, bắn | ước, chốt giữa `nguoi-choi.md` mục 5 (18 x 10), `ho-so-nhan-vat.md` (106 điểm ảnh mỗi u, khoảng 10 u ở 1080p) và `map.md` mục 6.4 (đề xuất 12 x 21) |
| Camera trong trạm | Cùng tỉ lệ nhân vật với ngoài không gian (72 px mỗi u ở 720p), theo nhân vật, thấy khoảng 1,5 tầng | | Thấy nhiều khoang | Mất ngữ cảnh | Trạm, ca cảng | ước, trả lời `ho-so-nhan-vat.md` dòng 148 (silhouette giữ nguyên). HCH-10 bù phần không thấy |
| Tỉ lệ màn hỗ trợ | 4:3 đến 21:9, vùng nhìn tối thiểu 17,8 x 10,0 u | 4:3 đến 21:9 | Màn rộng thấy thêm ngang | Màn hẹp thấy thêm chiều cao | Công bằng nhìn | ước, vùng nhìn tối thiểu là luật 1 mục 2.1 |
| Cột trái HUD tối đa | 400 px ở 720p, mọi cỡ chữ (thanh Oxy và thanh tải giữ 320 px, chỉ chữ và biểu tượng phóng) | 360 đến 440 | Thấy nhiều | Vào vùng giữa màn | Bố cục | tính: vùng giữa 25% rộng 320 px bắt đầu từ 480 px, mà 64 + 400 = 464 |
| Giữ chỗ khi mất kết nối | 15 giây, quá hạn tính như bị kéo về (C10) | 10 đến 30 | Tha thứ mạng | Treo nhóm | Co-op | gốc `nguoi-choi.md` 2.9, C10 |
| Lề an toàn | 5% (64 x 36 px ở 720p) | 3% đến 8% | HUD vào trong | HUD sát mép | HUD | ước |
| Thân chữ tối thiểu | 12 px ở 720p | 12 trở lên | Đọc dễ, tốn chỗ | Dưới 12 là vi phạm | Chữ | tính từ 18 px ở 1080p [S1 `45-ux-ui.md`] |
| Mức cỡ chữ | 100%, 150%, 200% | tới 200% | Đọc dễ | | Trợ năng | [S1] |
| Tương phản chữ cỡ chuẩn, chữ lớn, phần tử khóa | 4,5:1, 3:1, 3:1 | không dưới | | Dưới là vi phạm | Đọc | [S2, S4] |
| Ngưỡng cảnh báo Oxy | 50%, 25%, 10% dung lượng | theo `nguoi-choi.md` | | | HUD | gốc `nguoi-choi.md` 2.2.9 |
| Nhịp bíp theo ngưỡng | 3 giây, 1,5 giây, 0,7 giây | theo `nguoi-choi.md` | | | Âm | gốc `nguoi-choi.md` 2.2.9 |
| Nhấp nháy tối đa | 3 lần mỗi giây | 1 đến 3 | | | An toàn thị giác | `[GIẢ ĐỊNH]` ước |
| Thời gian toast | 2,5 giây, tối đa 3 dòng | 2 đến 4 giây | Đọc kịp, dồn thông báo | Bỏ lỡ | HUD | ước |
| Thời gian gợi ý bước thông tin | 8 giây | 5 đến 12 | Đọc chậm | Bỏ lỡ | FTUE | ước |
| Giới hạn ký tự gợi ý, toast, nút, tiêu đề | 40, 32, 18, 20 | | | | Strings | ước theo mục 2.13 |
| Giờ tự tính "ở lại" kể từ người đầu tiên xác nhận ở cửa khí | 30 giây | 20 đến 60 | Chờ lâu | Có thể bị bỏ lại ngoài ý muốn | Co-op | ước |
| Giờ tự tính "sẵn sàng ngủ" kể từ người đầu tiên vào buồng ngủ, không đặt lại khi có người vào giữa lúc đếm | 30 giây | 20 đến 60 | | | Co-op | ước |
| Số hàng đồng đội trên HUD | 3 | 3 | | | Co-op | ước |
| Số ping, thời gian ping | 3 ping, 8 giây | | | | Co-op | gốc `nguoi-choi.md` 2.5 |
| Mốc đồng hồ lưu bến đổi biểu tượng | 50% và 20% còn lại | | | | Ca cảng | gốc `tram-va-cang.md` mục 7 |
| Thời gian Tally bay lên | 150 ms | 100 đến 250 | Chậm cảm giác | | Ca cảng | gốc `tram-va-cang.md` 7b |
| Thời gian phản hồi nhấn | 0,1 giây | dưới 0,2 | | | Mọi màn | [S6] |
| Thời gian chờ không có phản hồi mới | 10 giây | | | | Mọi màn | [S6] |
| Cảnh truyện bỏ qua | 1 lần bấm | | | | Truyện | gốc `cot-truyen.md` luật 8 |
| Tần số cập nhật HUD đồng đội | 5 lần mỗi giây | 2 đến 20 | Mượt, tốn mạng | Giật | Co-op | ước, gd-tech xác nhận |

Núm gap: cỡ chữ tối thiểu, ngưỡng nhấp nháy và giờ tự tính ở lại là ba tham số nối ý đồ trợ năng và co-op với con số. Chỉnh bằng playtest, không bằng cảm tính.

## 4. Trường hợp biên

| Ca | Xử lý |
|---|---|
| Oxy bằng 0 khi túi đang mở | Túi đổi sang chế độ UI-34 ngay trong cùng khung hình, không đóng rồi mở |
| Ngạt trong lúc đang bắn, đang giữ phím | Mọi thao tác giữ hủy (theo `nguoi-choi.md` 2.3), vòng HUD-14 vỡ |
| Hai ping cùng lúc ở một chỗ | Gộp thành một biểu tượng có số người, ghi tên người ping gần nhất |
| Người chơi đã dùng hết 3 ping rồi bấm T | Bánh ping hiện mờ với chữ "Hết ping" |
| Đổi thiết bị giữa chừng (chuột sang tay cầm) | Glyph đổi trong một khung hình, con trỏ ẩn |
| Phím gán trùng | Báo hành động trùng và cho Hoán đổi, không tự ghi đè |
| Chữ 200% làm HUD tràn | Ẩn HUD-12 và HUD-13 trước, thu HUD-07 còn 2 hàng, HUD-01 đến HUD-05 luôn giữ trong lề |
| Đổi cỡ chữ giữa chuyến | Áp ngay, không dừng, HUD sắp lại trong một khung hình |
| Tên người chơi quá dài | Cắt ở 16 ký tự kèm dấu ba chấm, đầy đủ ở UI-03 |
| Nhóm 4 người, cả 3 đồng đội cùng ngạt | HUD-07 hiện đủ 3 hàng, thứ tự theo thời gian còn lại, hàng ngạt gần hết nhất lên đầu |
| Mất kết nối giữa lúc giữ phím sửa khoang | Tiến độ giữ nguyên (khớp `tram-va-cang.md` luật 3), hiện chữ Mất kết nối |
| Mở menu giữa ca cảng khi từ 2 người | Đồng hồ ca không dừng, khung menu có biểu tượng "Thời gian vẫn chạy" |
| Mở Bảng tàu khi tàu sắp rời | Cho phép, đồng hồ HCH-02 vẫn chạy, đóng bảng bằng một lần bấm |
| Hai người cùng nhìn UI-44 và một người nâng cấp | Dữ liệu chung, người kia thấy số đổi, nút mờ cập nhật trong 1 giây |
| Người vào sau trong lúc nhóm đang ở UI-36 | Vào UI-20, thấy "Nhóm vừa về", xem lại tóm tắt khi bấm vào chip |
| Cảnh truyện bị bỏ qua giữa chừng | Sổ tay ghi tóm tắt một câu (khớp `cot-truyen.md` luật 8) |
| Gợi ý T14 (né) đang hiện khi Oxy xuống dưới 25% | Gợi ý tắt ngay, nhường chỗ cho cảnh báo Oxy |
| Tutorial trigger nhưng điều kiện luật chưa đạt (ví dụ chưa có Dùi xung) | Bước không kích, giữ chờ, ghi sự kiện để gd-tech phát hiện chuỗi kẹt |
| Một mình mở Menu giữa chuyến | Thời gian dừng, tiêu đề đổi thành Tạm dừng. Từ 2 người tiêu đề là Menu |
| Cỡ chữ 200% và 1280x720 cùng lúc | Mọi màn T vẫn lọt trong lề, danh sách dài cuộn một chiều |
| Chuỗi thiếu trong bảng strings | Hiện chữ dự phòng tiếng Anh ngắn, ghi nhật ký, không treo màn |

## 5. Ràng buộc vật lý của luật

- HUD không che quá 25% chiều ngang trung tâm (320 px ở 720p, từ 480 đến 800 px). HUD-05 (Dưới giữa) là ngoại lệ vì nằm sát mép dưới, cao tối đa 72 px ở 720p và không chiếm vùng bay. Cột trái HUD tối đa 400 px (64 + 400 = 464 px, còn dưới 480). Đo bằng ảnh chụp ở cỡ chữ 200% trong tiêu chí 5.
- Tổng hàng chữ ở HUD bay tối đa 10 dòng ở 100%. Ở 200% phải ẩn bớt theo thứ tự ở mục 4.
- Mỗi người một màn hình, không có chia đôi màn (C5). 4 người nghĩa là 4 máy, giao diện không cần chia khung.
- Vùng nhìn tối thiểu 17,8 x 10,0 u. Đòn vào màn từ mép ở tổng tốc độ tới 18 u/s (12 của hazard cộng 6 của người bay ngược) đi hết nửa ngang 8,9 u trong 0,49 giây, ít hơn báo trước cũ 0,5 giây. Đã xử xong: gd-combat nâng báo trước tối thiểu lên 0,7 giây (đòn hẹp) và 1,0 giây (đòn vùng), gd-world nâng báo trước hazard lên 1 giây, cả hai tính từ lúc chỉ báo mép hiện và đều có chỉ báo mép (HUD-06). Phép tính giản lược, chưa đo trên prototype.
- 35 màn do một artist dựng bằng một bộ kit dùng chung. Mỗi màn mới phải tái dùng thành phần của kit (nút, khung, thanh, danh sách, bảng).

## 6. Yêu cầu cho engineer / tool

Đầu vào: dữ liệu từ các hệ thống (Oxy, tải, trạng thái người chơi, danh sách tàu, danh sách khoang, kho), cấu hình input. Đầu ra: giao diện và sự kiện theo dõi.

- Bảng strings: `projects/game-moi/strings/strings.tsv` do gd-ux giữ, cột key, text, giới hạn, màn. Chuỗi không hardcode trong code. Dev chọn UI toolkit.
- Một nhà cung cấp glyph theo thiết bị. Một nhà cung cấp gán phím có lưu theo hồ sơ máy.
- Vạch "đủ về" (HUD-02) tính ở một chỗ duy nhất theo công thức `nguoi-choi.md` mục 3, UI chỉ đọc kết quả.
- Tiến độ tutorial lưu theo hồ sơ máy dạng tập các ID bước đã hiện.
- Cài đặt giữ ở hồ sơ máy, không đồng bộ qua mạng.

Sự kiện cho Event Tracking (gd-tech giữ tab):

| Sự kiện | Tham số |
|---|---|
| ux_screen_open | screen_id, device, thời điểm trong ngày |
| ux_tut_step_shown, ux_tut_step_done, ux_tut_step_skipped | step_id, thời gian trong bước, số chuyến đã đi |
| ux_hud_warning | ngưỡng Oxy (50, 25, 10), có đủ về không |
| ux_pin_changed | món, tự động hay người chơi |
| ux_input_device_change | từ, tới |
| ux_settings_change | key, giá trị |
| ux_dead_end | screen_id, thời gian đứng yên trên 20 giây |

Nơi luật phải cùng đổi: bảng 2.2, 2.4, 2.5, bảng strings, `ux/kiem-ux.mjs`, `nguoi-choi.md` bảng phím 2.7, Sheet WIREFRAME và Tutorials.

## 7. Yêu cầu cho art, UI, tutorial, audio

Một artist, vector. Ưu tiên bộ kit tái dùng. Số của bảng dưới theo mức ưu tiên của MVP.

| Sự kiện hay thứ | Hình | Âm | Text, tutorial | Ưu tiên |
|---|---|---|---|---|
| Bộ kit UI | Khung, nút 5 trạng thái (thường, hover, nhấn, focus, khóa), thanh, danh sách, bảng, vòng tiến độ | Click, hover, xác nhận, hủy | | MVP |
| Font | Một font sans đủ dấu tiếng Việt, số có độ rộng đều cho Oxy và Tally | | Cỡ 12 px ở 720p là tối thiểu | MVP |
| Màu và hình slot | 4 màu và 4 hình (tròn, tam giác, vuông, thoi) kiểm tương phản, mô phỏng mù màu | | | MVP |
| Biểu tượng ping | 4 biểu tượng: Tới đây, Cảnh báo, Cần Oxy, Tìm thấy | Mỗi ping một âm ngắn khác nhau | Chữ trên bánh | MVP |
| Biểu tượng la bàn | Ember (trạm), Recall Beacon (tháp), đồng đội (hình slot), điểm ping | | | MVP |
| Bậc hiếm | 4 bậc khác nhau cả màu, viền và hình | Cao độ nhặt theo bậc | Chú giải ở Kho | MVP |
| Biểu tượng trạng thái Oxy | Bình đủ, 50%, 25%, 10%, vạch đủ về sọc chéo | Bíp theo ngưỡng | | MVP |
| Biểu tượng kiện | 3 cỡ (Nhỏ, Vừa, Lớn), nhãn phẩm cấp | | | MVP |
| Chân dung thương nhân | TA01 Tikko và TA02 dân Oru ở MVP, các tàu khác Sau MVP | | Tên theo `cot-truyen.md` | MVP |
| Khoang mặt cắt | Hỏng (tối, khung đỏ), Hoạt động (sáng), Đang nâng cấp (giàn giáo) cho 8 khoang MVP (KH01 đến KH07 và KH13) | Máy khởi động theo khoang | | MVP |
| Glyph | Bộ bàn phím, Xbox, PlayStation | | | MVP |
| Cảnh bỏ qua | Nút Bỏ qua luôn hiện ở góc | | | MVP |
| Biểu tượng sự cố | Rò khí, chập điện, Driftlife sổng | Còi ngắn | | Sau MVP |

## 7b. Cảm giác (game feel)

- Tham chiếu: khoảnh khắc cuối ca hiện tổng doanh thu và lời khách của Dave the Diver (đã nêu ở `tram-va-cang.md` 7b), thanh tiến độ hiện rõ khi giữ phím thoát Escape Pod 6 giây của Dave (`06-dave-the-diver-cau-truc.md` D9). Cảm giác bốc kiện và nhận Tally nhanh như thả món vào ô giao trong Overcooked (tham chiếu của gd-quan).
- Phản tham chiếu: không đếm ngược hét lên, không chữ Thất bại, không popup chặn màn khi đang bay, không HUD phủ kín màn.
- Thời gian phản hồi, từng lớp và từng khoảnh khắc ở bảng 2.11. Tham số bật tắt từng lớp ở prototype.

## 8. Cách đo thành công và tiêu chí nghiệm thu

Chỉ số kết quả và trải nghiệm (đều chưa đo, mục tiêu là ước):

| Chỉ số | Mục tiêu ước | Ai đo |
|---|---|---|
| Người chơi mới đọc HUD-01 và HUD-02 nói được "còn đủ về không" trong 5 giây | Từ 3 trên 5 người | gd-qa playtest |
| Tỉ lệ người chơi ghim món trước lần ngạt đầu | Trên 70% sau tutorial (khớp `nguoi-choi.md` mục 8) | gd-qa |
| Tỉ lệ người chơi mới hoàn tất T01 tới T23 trong buổi chơi đầu | Đo trước, đặt mục tiêu sau 5 buổi playtest | gd-qa, gd-tech |
| Bước tutorial có nhiều người bỏ qua hoặc kẹt nhất | Đo trước, đặt mục tiêu sau 5 buổi playtest | gd-tech funnel |
| Thời gian từ vào thế giới mới tới lần đầu ra cửa khí | Dưới 3 phút (ước) | gd-qa |
| Số lần người chơi hỏi hoặc nhìn bảng phím trong chuyến đầu | Đo trước, đặt mục tiêu sau 5 buổi playtest | gd-qa |

Tiêu chí nghiệm thu (gd-qa pass hoặc fail):
1. `node projects/game-moi/ux/kiem-ux.mjs` thoát 0: mọi màn ở bảng 2.2 có đủ ba câu, hành động chính và năm trạng thái, mọi key có giới hạn và không vượt giới hạn, mọi luật K và C trong bảng 2.12 trỏ tới màn có thật.
2. Không màn nào cụt: mỗi màn có đường ra và đi được bằng bàn phím chuột lẫn gamepad.
3. Mọi cảnh báo có ít nhất hai kênh (hình cộng chữ hay âm), kiểm bằng mô phỏng mù màu ở bốn nhóm phổ biến.
4. Chữ nhỏ nhất đo được từ 12 px ở 720p, tương phản chữ cỡ chuẩn từ 4,5:1 trên nền thật, đo bằng script của art.
5. Ở 1280x720 và cỡ chữ 200%, HUD-01 đến HUD-05 vẫn trong lề an toàn.
6. Đổi phím: mọi hành động ở bảng 2.9 đổi được, trùng phím báo, Esc cố định.
7. Không có hộp thoại chặn màn khi có Driftlife trong 10 u, hazard đang báo trước hay Oxy dưới 25%. Ở Oxy dưới 25% chỉ T09, T15, T20, T34, T36 được hiện gợi ý một dòng, các bước khác hoãn. T13, T14, T18 được hiện cùng Driftlife.
8. Bot gd-tech đi chương 1 theo kịch bản: mỗi bước T01 đến T36 có trigger kích được ít nhất một lần, không bước nào kẹt.
9. Ca cảng không có chữ Thất bại hay Thua ở bất cứ chuỗi nào.
10. Co-op 2 người: HUD-07 hiện trạng thái đồng đội với trễ dưới 0,5 giây, Menu không dừng thời gian, một mình thì dừng.
11. Esc đóng màn con trước rồi mới mở menu, Start luôn mở menu, UI-34 không đóng được bằng Esc (luật 21).
12. Bốn thanh âm lượng tách và chú thích âm bật tắt được ở UI-51, MVP không có giọng đọc (luật 22).
13. Mọi chữ in nháy trong bảng 2.5 có key trong bảng 2.13, kiểm bằng `kiem-ux.mjs`.
14. Thoát giữa chuyến luôn qua hộp xác nhận nêu hệ quả (luật 23), lưu lỗi ở UI-44 luôn có lối ra.

## 9. Lệch khỏi tham chiếu (Dave the Diver)

| Mục | Tham chiếu làm thế nào | Mình lệch ở đâu | Bằng chứng không tệ hơn |
|---|---|---|---|
| Hướng dẫn | Nhiều người chơi và Destructoid nêu một số phần chưa được giải thích, ngoài ra có ý kiến quá nhiều hệ thống cùng lúc (`45-ux-ui.md` S13) | 36 bước chia theo core loop, mỗi bước một ý, kích bằng sự kiện, xem lại ở Sổ tay | Chưa đo, playtest sẽ đo funnel từng bước |
| Thoát chuyến | Escape Pod giữ Space 6 giây, hủy khi bị đẩy (`06` D9) | Recall 5 giây theo K4, thêm cửa khí và chia Oxy, vòng tiến độ và cách hủy hiện cạnh vòng | Cùng cấu trúc, thêm tín hiệu |
| Theo dõi tiến độ | App điện thoại Cooksta theo dõi quán và bộ sưu tập (`06` D2, D10) | Sổ tay một mục tiêu cố định cộng bảng tàu cho nửa cảng | Giữ việc kế tiếp ở một nơi duy nhất |
| Giao diện diegetic | Hardspace: Shipbreaker pha diegetic với giao diện rõ, NME chê màn hub (`45-ux-ui.md` S10, S11) | HUD bay là HUD phẳng có thẩm mỹ kính mũ, màn trạm là mặt cắt trực quan | Chưa đo, nhận định theo nghiên cứu Peacocke (`45-ux-ui.md` S7): máu đọc tốt hơn ở HUD |

## 10. Câu hỏi mở

| # | Câu hỏi | Phương án đề xuất | Ai quyết |
|---|---|---|---|
| 1 | ĐÃ CHỐT 2026-11-20: Kết nhanh giữ Q (gamepad B), E chỉ Tương tác | Theo trả lời của gd-combat, Q và B không trùng phím nào ở bảng 2.7 của `nguoi-choi.md` | gd-combat |
| 2 | ĐÃ CHỐT 2026-11-20 (gd-quan, `tram-va-cang.md` luật 59 tới 61): vào buồng ngủ đông là xác nhận sẵn sàng. Đếm 30 giây từ người đầu tiên vào buồng, người chưa vào tự tính sẵn sàng và nhân vật tự về buồng. Người đã vào được ra lại để hủy, đồng hồ không dừng. Người rời phiên không tính. Không có quyền riêng của host (P3) | GDM đã đưa vào K23 (log dòng 63) | GDM |
| 3 | ĐÃ CHỐT 2026-11-20: Bản đồ chuyến (UI-33) vào MVP | gd-world cấp mỗi chuyến lưới mảnh, ô mỗi người đã vào (gộp cả nhóm), beacon đã thấy, lối vào map nhánh đã biết (`map.md` mục 6.1 và 7) | gd-world, gd-tech |
| 4 | ĐÃ CHỐT 2026-11-20: camera ngoài không gian 10,0 u cao, 17,8 u ngang | gd-world dựng greybox theo khung này (`map.md` mục 6.4), mảnh 40 x 24 u khoảng 2,2 x 2,4 màn hình nên không chỉnh mảnh. Con số 15% của `map.md` chỉ dùng trong sim, không hiện HUD | gd-world |
| 5 | ĐÃ CHỐT (K23, log dòng 65): game tự lưu sau mỗi chuyến khi mọi người đã về, sau ca cảng và lúc ngủ. Thoát giữa chuyến hay giữa ca thì mất phần đang dở từ điểm lưu gần nhất | UI-44, UI-50 và HTR-03 theo ba điểm lưu này | GDM |
| 6 | ĐÃ CHỐT (C10, log dòng 64): rời phiên giữa chuyến tính như bị kéo về. `nguoi-choi.md` do gd-character sửa ở đợt 4 | UI-50 hộp xác nhận đã theo C10 | gd-character |

## Co-op 1 đến 4 người

Nguyên tắc: một bộ giao diện cho mọi N, không có màn nào chỉ co-op. Thêm người thêm hàng ở HUD-07, không thêm màn.

| Mục | 1 người | 2 người (MVP) | 3 người (Sau MVP) | 4 người (Sau MVP) |
|---|---|---|---|---|
| Tạo thế giới (UI-02) | Chọn 1, bỏ qua sảnh | Chọn 2, vào sảnh chờ bạn | Chọn 3 | Chọn 4 |
| Bạn vào sau (UI-04) | Vào làm người thứ 2 | Người thứ 3 | Người thứ 4 | Phòng đầy |
| HUD đồng đội HUD-07 | Ẩn | 1 hàng | 2 hàng | 3 hàng |
| Ping (UI-32) | Dùng được, ghi chú cho mình | Có | Có | Có |
| Xác nhận ra cửa khí (UI-11) | Một mình xác nhận | Tick 2 người | Tick 3 người | Tick 4 người |
| Menu (UI-50) | Tạm dừng, tiêu đề Tạm dừng | Không dừng, biểu tượng Thời gian vẫn chạy | Như 2 người | Như 2 người |
| Chờ nhóm (UI-20) | Không xuất hiện | Có khi một người về sớm | Có | Có |
| Cuối ngày (UI-44) | Tự ngủ khi bấm | Tick 2 người | Tick 3 người | Tick 4 người |
| Bảng tàu (UI-14) | Đơn theo 1 người | Đơn theo 2 người | Đơn theo 3 người | Đơn theo 4 người, chỉ ghi chú không có số riêng |
| FTUE | Đủ 36 bước | Mỗi người nhận gợi ý riêng theo hồ sơ | Như 2 người | Như 2 người |
| Sổ tay (UI-19) | Một bản | Chung cả nhóm | Chung | Chung |

Kiểm: không giao diện nào hỏi "có đúng N người không", mọi số tham số không đổi theo N.

## Điểm tự quyết

| Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|
| Khung hình | 16:9, 1280x720, màn rộng mở chiều ngang | Brief GD-029 yêu cầu đọc được ở 1280x720, PC có nhiều tỉ lệ màn | Khóa 16:9 mọi màn | Rẻ |
| Cỡ chữ tối thiểu | 12 px ở 720p, tức 18 px ở 1080p | Mức PC của Xbox, bảo đảm đọc ở máy cầm tay | Chữ nhỏ hơn cho đẹp | Rẻ |
| Oxy hiển thị | Điểm cộng thời gian còn | P1: người chơi đọc được hệ quả, Oxy bằng giây nên đọc luôn | Chỉ thanh không số | Rẻ |
| Vạch đủ về | Sọc chéo dưới vạch, đặc trên vạch, nhãn đích | Không dựa vào màu, đọc ở liếc mắt | Hai thanh Oxy | Rẻ |
| La bàn | Mũi tên ở mép, không minimap luôn hiện | Giữ màn sạch cho bay 8 hướng, đã có Bản đồ chuyến | Minimap góc màn | Vừa |
| Bản đồ chuyến | Có trong MVP, chỉ hiện phần đã đi | Bố cục sinh lại mỗi chuyến, Recall Beacon đổi chỗ | Chỉ la bàn | Vừa |
| Phân loại giao diện | HUD phẳng cho bay, mặt cắt trực quan cho trạm | Máu đọc tốt hơn ở HUD, trạm thì mặt cắt đã là cảnh | Diegetic hoàn toàn | Vừa |
| Slot người chơi | Màu cộng hình | Mù màu, 4 người phân biệt được | Chỉ màu | Rẻ |
| Phím mới | Bản đồ M, Sổ tay J, Kết nhanh Q (gd-combat đã chốt) | Không đụng bảng của `nguoi-choi.md`, chỉ thêm | Dùng E cho cả ba | Rẻ |
| Esc không gán lại | Cố định | Người chơi không tự khóa | Gán lại tự do | Rẻ |
| Giữ hay bật | Giữ mặc định, "bật" là tùy chọn Sau MVP | Luật hiện tại thả phím là hủy, đổi thì đụng nhiều luật | Bật mặc định | Vừa |
| Gợi ý tutorial | Một dòng không chặn, tắt sau hành động đầu | Chặn màn khi đang bay là nguy hiểm | Hộp thoại chặn | Rẻ |
| Tiến độ gợi ý | Theo hồ sơ máy | Bạn vào sau không bị yếu, bạn cũ không bị nhắc lại | Theo thế giới | Rẻ |
| Số bước FTUE | 36 bước, mỗi bước một ý, theo sự kiện | Chương 1 có 9 mốc truyện và nhiều hệ thống mới | Ít bước, hộp thoại dài | Vừa |
| Bước Súng lưới ở chương 1 | Có (T19), nhãn MVP theo khung mục 12 và log 49 | Brief GD-029 yêu cầu, khung mục 12 ghi lưới ở MVP | Để Sau MVP như bản cũ của `combat-driftlife.md` | Rẻ |
| Ngạt | Túi tự mở ở chế độ chọn ghim ngay lập tức | 12 giây ngắn, không cho thêm bước | Màn riêng chặn hết | Rẻ |
| Người không xác nhận cửa khí | Sau 30 giây kể từ người đầu tiên xác nhận thì tự tính ở lại trạm, làm việc trạm theo luật 54 của `tram-va-cang.md` | Ngăn một người AFK kẹt cả nhóm, gd-quan đã ghi vào luật | Chờ vô hạn | Rẻ |
| Ngủ sang ngày co-op | Vào buồng ngủ đông là xác nhận, đếm 30 giây từ người đầu tiên, ra lại để hủy | gd-quan chốt luật 59 tới 61, đã vào K23 (log dòng 63) | Host quyết | Rẻ |
| Trợ năng | Giảm nhấp nháy và rung là MVP, chuyển giữ thành bật là Sau MVP | Giảm nhấp nháy an toàn thị giác, "bật" đụng luật | Không có trợ năng | Rẻ |
| Chữ thất bại | Cấm trong ca cảng | Luật `tram-va-cang.md` 32 và 7 | Màn Thua ca | Rẻ |
| Hộp thoại truyện | Bỏ qua một lần bấm, Sổ tay ghi một câu | Khớp `cot-truyen.md` luật 8 | Không cho bỏ qua | Rẻ |
| Camera ngoài không gian | 10,0 u dọc, 17,8 u ngang ở 16:9 | Hai trong ba file đã ngầm dùng 10 u (`nguoi-choi.md` 18 x 10, `ho-so-nhan-vat.md` 106 điểm ảnh mỗi u là 10,2 u ở 1080p), nhân vật 72 px ở 720p còn đọc rõ | Camera 12 x 21 của `map.md` mục 6.4 (nhân vật chỉ 60 px ở 720p) | Vừa (greybox của gd-world phải theo) |
| Camera trong trạm | Cùng tỉ lệ nhân vật, theo nhân vật, kèm HCH-10 | Silhouette nhân vật không đổi giữa hai cảnh, HCH-10 bù phần không thấy | Thu nhỏ để thấy cả 3 tầng | Rẻ |
| Màn hẹp hơn 16:9 | Mở thêm chiều cao, vùng nhìn tối thiểu 17,8 x 10,0 u | Mọi người thấy cùng vùng ngang tối thiểu, hazard vào màn không bị thu hẹp | Cắt ngang, thanh đen | Rẻ |
| Esc | Đóng màn con trước, rồi mới mở menu. Start luôn mở menu | Một luật để dev không phải đoán | Esc luôn mở menu | Rẻ |
| Gợi ý khi Oxy dưới 25% | Chỉ T09, T15, T20, T34, T36 | Nhường chỗ cho cảnh báo Oxy, năm bước này là thoát hiểm, cứu bạn hoặc hồi Oxy | Cấm mọi gợi ý | Rẻ |
| Đồng hồ xác nhận chung | HTR-01 cho mọi người ở trạm | `tram-va-cang.md` luật 60 và 61 yêu cầu | Chỉ hiện ở cửa khí | Rẻ |
| Bỏ ca | Nút riêng ở UI-14 | Luật 19, khung mục 4 cho bỏ qua pha ca cảng | Chỉ không bấm Mở ca | Rẻ |
| Âm thanh | 4 thanh âm lượng, chú thích âm bật tắt, không giọng đọc ở MVP | Trợ năng cơ bản, mọi thoại là chữ | Một thanh âm lượng | Rẻ |
| Thoát giữa chuyến | Hộp xác nhận nêu hệ quả theo C10 | Không để người chơi mất túi vì bấm nhầm | Thoát im lặng | Rẻ |
| Lưu lỗi ở UI-44 | Có lối ra "Về menu chính", ghi rõ mất việc từ điểm lưu nào theo luật 7 | Tránh soft lock | Chờ vô hạn | Rẻ |
| 3 và 4 người ở UI-02 | Khóa kèm "Sắp có" ở MVP | Khung mục 12 chỉ cần 2 người chạy được | Mở nhưng không đảm bảo | Rẻ |
| Setup của FTUE | Setup là của thế giới ở mốc, gợi ý là của từng người | Người vào sau không dựng được Setup cũ | Setup riêng từng người | Vừa |
| Cảnh truyện chặn màn | Chỉ khi ca cảng không chạy, trong ca là bong bóng | Cảnh không được làm mất giờ ca của nhóm (C7) | Chặn mọi lúc | Rẻ |
| Chuỗi trạng thái | Mọi chữ in nháy trong bảng 2.5 phải có key | Dev không tự đặt chuỗi, máy kiểm | Để dev tự đặt | Rẻ |

## Phản biện khung

| Luật khung | Vấn đề | Lý do | Bằng chứng | Phương án thay |
|---|---|---|---|---|
| C5 (cả nhóm xác nhận ở cửa khí, ai không đi thì chọn ở lại) | Khung lần 4 đã có "không trả lời trong 30 giây thì ở lại" nhưng chưa nói tính từ lúc nào | Hai bên dễ hiểu khác nhau | Chưa đo | GDM đã đưa vào C5 (khung dòng 98, log dòng 60). Mốc đếm tính từ người đầu tiên xác nhận (`tram-va-cang.md` luật 61) |
| C8 (quy mô đơn tăng theo số người) | Số người đổi giữa các phiên nên số kiện ở bảng tàu mỗi ngày khác nhau mà người chơi không hiểu vì sao | Người chơi khó đoán "đơn gấp đôi khi bạn vào" | Chưa đo | Đã xử: gd-quan chốt luật 20 và 64, bảng tàu hiện số kiện theo số người đang online và tính lại khi có người vào hay rời, số kiện chốt lúc Mở ca. UI ghi chú "Đơn theo số người đang chơi" và hiện số chốt sau khi mở ca. Phương án cố định theo số người tỉnh dậy đã bỏ |
| C7 (không tạm dừng từ 2 người) | Khung không định nghĩa "một mình" và không nói khi số người đổi lúc đang dừng | Khung chưa định nghĩa "một mình" | Chưa đo | Ghi vào C7: một người online thì tạm dừng được, thời gian chạy tiếp ngay khi người thứ hai vào (UI luật 26 đã áp) |

## Lịch sử thay đổi

| Ngày | Thay đổi | Lý do | Ai |
|---|---|---|---|
| 2026-11-20 | Viết mới bản đủ GDD UX / UI | Brief GD-029 | gd-ux |
| 2026-11-20 | Sửa theo gd-qa vòng 1: Esc, 16:10, tiêu chí 7, HTR-01 đến HTR-04, Bỏ ca, âm lượng và chú thích âm, FTUE thêm T31 đến T35, tín hiệu K22 K23 K24 C10, đổi mã HUD-nn và HCH-nn, strings 225, cổng kiểm chuỗi trạng thái | GD-031 lỗi 1 đến 32, khung lần 4 | gd-ux |
| 2026-11-20 | Đợt 4: K23 ba điểm tự lưu và thoát giữa chuyến theo C10 (luật 23, UI-44, HTR-03), K22 tín hiệu cửa khí, K26 thêm HUD-15 trần hồi Oxy và phím Dùng vật tiêu hao, K27 đang ngạt không trao không thả (T35 đổi, thêm T36), HTR-01 kết quả hết giờ cho Mở ca và Bỏ ca, bỏ chữ chờ GDM, The Scattering | Brief đợt 4, log GDM dòng 60 đến 72, GD-031 vòng 2 | gd-ux |
