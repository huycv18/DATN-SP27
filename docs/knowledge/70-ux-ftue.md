# UX, onboarding và trình bày cho người chơi

Nguồn: game tile chữ A tab Tutorials (29/09/2026), game tile drop A, game bi drop A (quy tắc trình bày 13/08/2026), game bắn màu A chế độ chơi, game phục vụ Order A, Meow, game-tycoon-a (UX spec, lỗi #8-#10), studio-os lessons.

## 1. Onboarding (chuẩn game tile chữ A, Lead chốt 29/09/2026)

- Lớp tối khoảng 70%, chỉ sáng Order đầu và quân cần bấm, bàn tay chỉ, chặn tương tác ngoài luồng (khóa booster và Settings).
- Text box tiếng Anh TB1-TB4. Khi chỉ dạy một ý thì **một text box hiện suốt luồng**, không đổi theo bước.
- L1 dạy Tap quân lên Order, Order đủ thì clear. Ăn xong Order đầu tiên là tắt tutorial. Mỗi bước hiện một lần.
- Bước cảnh báo khay bật khi khay có 3 quân lần đầu (level bất kỳ), nói "khay đầy là thua". Đây là cảnh báo, không phải giới thiệu. Không nhắc ô "+" khi cơ chế thêm ô chưa có.
- Mechanic mới: mỗi mechanic một khối tutorial (úp L6, băng L16, link L26 theo curve 30/09), có "Got it!" khi cần. Tutorial cho tính năng Lead đã bỏ (chuộc khay, booster) thì không làm.
- Prototype: tutorial có kịch bản ở L1-2, gate input chỉ nhận đúng nước đang dạy, sai thì toast nhắc, không trừ mạng. Dạy rõ tap với hold bằng chip nhấn mạnh.
- Game tycoon hoặc sim: FTUE phải có chủ và có file (`docs/ux/ftue.md` từng không tồn tại). Vào hành động chính sau 2 chạm, không bước nào chỉ để đọc, thẻ hướng dẫn tối đa 60 ký tự.

Nguồn ngoài bổ sung (09/11/2026, `production/reports/2026-11-09-nc-onboarding.md`, `2026-11-09-fb-lam-game-hien-dai.md`):
- Text trên màn tối đa khoảng 8 chữ một lúc (George Fan, GDC 2012). Tham chiếu, Lead có thể nâng. Dạy bằng làm, không dạy ngoài gameplay. Màn tutorial khác gameplay thật làm người chơi hụt khi vào game.
- Booster dạy lúc người chơi lần đầu gặp tình huống cần nó, tặng đúng 1 lần dùng miễn phí khi mở (Match Triple 3D). Mốc tham chiếu Royal Match (Gamigion quan sát): pre-level booster L7, booster trong ván L8, L14, L17, L19, live-op đầu L23, level khó đầu L39. Không chép mốc vào game, chỉ lấy trình tự.
- Không hiện ads trong onboarding. Interstitial đến muộn, rewarded vào trước cùng tính năng mới (TapNation A/B, không công bố số). Daily reward và thử thách dời sang phiên sau.
- Level giống creative quảng cáo chỉ đưa lên đầu khi hợp learning curve. Level thú vị mà cần dạy nhiều kỹ năng thì để sau.
- Màn thua ghi cụ thể còn thiếu bao nhiêu ("1 target left"), kèm lựa chọn hợp lý ngay sau thua. Người chơi phải hiểu vì sao thua và tin lần sau thắng được.
- Trade-off chưa chốt: phòng dùng gate input cứng ở L1-2, Apple và panel Metacore khuyên có đường skip hoặc lựa chọn. Không có A/B, đổi thì Lead quyết.

Cấu trúc tab Tutorials: Bước - Tên bước - Khi nào - Highlight - Bàn tay - Text box (EN) - Kết thúc bước - Ghi chú. Khối: Quy tắc chung -> Onboarding -> Cảnh báo -> từng mechanic. Viết "kèm nút", không viết "+ nút".

## 2. Tầm nhìn người chơi và trình bày

- Người chơi thấy bao nhiêu: game bi drop A = 3 hàng đầu mỗi cột (hàng tap + 2 sau), hàng 4+ tối. Bee: game hiện đinh ở 4 lớp (bot phải thấy đúng 4).
- Ô ẩn che cả màu và số (hộp xám "?"), mở khi tới hàng tap. Không đặt ẩn ở hàng đầu (lộ ngay thì vô nghĩa). Ẩn thêm độ khó qua mất thông tin, không qua hằng số phạt.
- Khóa và chìa cùng gateId vẽ cùng màu. Khóa ở hàng 1-4, chìa trong lớp đang chơi, không 2 khóa liền cột (khóa sâu quá thì người chơi không thấy việc mở khóa).
- Cỡ quân tối thiểu 44 px (ngưỡng chạm): game tile chữ A 8 hàng dọc ở 380 px cho quân 41,9 px, 7 hàng cho 46 px. Đề xuất layout nhắm ≤ 7 hàng, nói rõ hàng 8 làm quân nhỏ.
- Khung chơi cố định: súng và khay slot đứng một chỗ suốt ván, cột card dồn về phía súng, phần xa bị khung cắt có dải mờ. Hàng lựa chọn của người chơi thấy đủ. Không nhồi cả bàn vào khung ("khi chơi không cần nhìn hết toàn bộ các box").
- Lệch nửa ô trong cùng tầng là thiết kế. Lệch tầng (-16/-28 px Unity) chỉ để vẽ chiều sâu, che phủ tính theo lưới.
- Cảnh báo sắp thua bật ở mép (x = sức chứa), viền nháy đỏ không phủ kín, tôn trọng `prefers-reduced-motion`.
- Thanh tiến độ dạng "order đã xong / tổng" (2/50), không đồng hồ nếu game không có thời gian.
- Nhãn UI đọc từ config. Strings có cột giới hạn ký tự. Text tràn nút là lỗi UX, không phải lỗi dev.

## 3. Mỗi màn hình

- Ba câu: đang ở đâu, làm được gì, quay lại thế nào. Một hành động chính.
- **Đủ 5 trạng thái**: bình thường, rỗng, đang tải, lỗi, đầy/tràn hoặc giới hạn. Thiếu thì engineer tự chế.
- Quyết định có rủi ro hiện hệ quả bằng số (hộp ra mắt với 30 bug không báo mức phạt là lỗi). Kiểm "người mới hiểu hệ quả", không chỉ "đủ element".
- Đoạn chờ trên 10 giây phải có quyết định hoặc phản hồi mới (màn Bán 32 giây chỉ có cột chạy là chỗ chán nhất).
- Số đo cảnh (canvas, sàn) do tech chốt trước khi UX và art viết, nếu không ba bên vênh ba lượt.
- Luồng chuẩn prototype: Title -> chọn 15 màn (nhãn bậc, sao) -> chơi -> thắng/thua -> tiếp. Lưu tiến trình. Dev overlay `?dev`.

## 4. Điều Lead đánh giá bằng mắt (phản hồi thật)

- "Sao đồ nguyên liệu bay lên to đùng vậy" (icon 96 px thay vì 34), "chữ nhỏ chữ to không đều nên nhiều cái bị to hơn Button", "cột phải quá lộn xộn", "Hinden trông xấu điên", "bàn đặc vẽ hình trông như cục nhiễu", "game chưa có gì đáng thử, đồ họa đang xấu, UI/UX chưa có gì".
- Lớp hình ảnh tối thiểu phải chạy song song với cơ chế từ lần chơi thử đầu. Lead duyệt qua trang so sánh ảnh và chơi thật, không đọc GDD.
- Không đổi tạo hình nhân vật đã quen (chef Bancho mới bị bác). Muốn đổi lớn thì đưa ảnh so sánh trước.
- Muốn UI gọn, ít chữ, tooltip thay chú thích, icon thư viện chuẩn (Lucide), đơn giản kiểu iPhone.

## 5. Checklist review UX cho tool và prototype

- [ ] Vùng chạm ≥ 44 px. Hủy press khi pointerup rơi ngoài. Long-press ~330 ms.
- [ ] Không khóa input trong animation dài. Input lúc ANIMATING xếp hàng tối đa 1-2 lệnh.
- [ ] Mỗi luật mới có tín hiệu nhìn thấy (viền nhấp, dải trạng thái).
- [ ] Viewport 340 / 390 / 1024 / 1280 / 1600 không tràn ngang.
- [ ] Dark mode đủ token, body có background.
- [ ] Undo sau thắng/thua bị khóa. Reload giữ tiến độ. localStorage hỏng vẫn chơi được.
- [ ] Màu: đo ΔE và mô phỏng mù màu. Xếp màu theo độ an toàn để lấy n màu đầu. Trên 6 màu cần họa tiết.

## 6. Số đo FTUE (nguồn ngoài, 09/11/2026)

- Funnel từng bước tutorial (event bước, level, thời gian ở bước, xong hay bỏ), completion level 1-10, lượt thử mỗi level. Cùng một tutorial cho mọi người chơi để dữ liệu sạch (Supersonic).
- Mốc level đo completion FTUE tùy genre và độ dài level, không có mốc chung.
- D1 tham chiếu: GameAnalytics 2025 trung vị mọi thể loại 22% (11.600 game), top quartile Android 25-27%, iOS 31-33%. Số "D1 puzzle tốt 35-55%" trên blog và nhóm Facebook không có nguồn, không dùng.
- Ca có số: Trash Tycoon (hybrid sim, Supersonic) 60% rơi trong tutorial, sửa bằng giới thiệu mechanic chậm và tuyến tính hơn. Game midcore khoảng 40% rơi ngay khi vào tutorial (bình luận, ngoài phạm vi puzzle).
- Rơi nhiều ở level 1-2: so theo nguồn người chơi trước (xem `20-do-kho-va-can-bang.md` mục 9), rồi mới sửa FTUE.
- Chưa nguồn nào chứng minh bằng số quan hệ giữa FTUE và D1, cũng không có chuẩn thời gian tới lần thắng đầu cho puzzle.
