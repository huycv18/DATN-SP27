# Nguyên tắc thiết kế của phòng (rút từ 13 dự án, 07/2026 - 10/2026)

## 1. Luật lõi

1. **2-3 luật vàng** người chơi phải nhớ. Hơn 3 là khó dạy. Thao tác là một khẳng định (tap / drag / hold). Thắng thua dứt khoát kể cả ca tranh cãi. Cam kết với người chơi (ví dụ "không bao giờ phải đoán") quyết định kiến trúc.
2. **Tách luật bất biến khỏi núm độ khó** và viết thành văn bản. game tile chữ A: 2 order mở, khay 5, khớp chính xác, chuộc khay chỉ khi order mới sinh là luật. Chôn chữ, nhiễu, hint, mechanic là núm. Claude từng đặt 3 order để hạ áp lực là phá luật.
3. **Cách thua duy nhất là trục đo chính**: tile-match thua vì đầy khay thì áp lực = rác kỳ vọng / sức chứa. Sort thua vì tràn băng chuyền thì độ khó = phải tính trước bao xa.
4. **Tìm ràng buộc vật lý của luật sớm** và nói kèm số (trần độ khó, trần số đếm, điều bất khả).
5. **Game deterministic**. Random chỉ cho VFX/SFX. Realtime dùng fixed timestep.
6. **Luật một bản duy nhất**. Đổi luật thì engine, solver, tool, GDD, tutorial, thang độ khó đổi cùng lúc và ghi DECISIONS.
7. **Lớp vẽ không chạm lớp luật**: lệch tầng, bóng, offset chỉ để vẽ. Che phủ và lời giải tính theo lưới (28/50 level mất lời giải khi lẫn hai lớp).

## 2. Mechanic

- 1 mechanic lõi + 2-4 biến thể. Mỗi biến thể dạy riêng ở level dễ trước khi trộn. Không nhồi nhiều mechanic nông.
- Mechanic phải đánh vào nguồn khó của thể loại (game-suy-luan-luc-giac-a: mơ hồ phải tồn tại đủ lâu). Blocker trang trí bị bác.
- Mechanic che thông tin làm khó qua mất thông tin, không qua hằng số phạt. Vật ẩn không di chuyển để solver không phình. Không đặt ẩn ở hàng người chơi sắp lấy.
- Khóa và chìa: cùng màu, khóa ở hàng thấy được, chìa trong lớp đang chơi, không hai khóa liền cột. Khóa không có chìa = đóng vĩnh viễn, phải cảnh báo.
- Mechanic lấy nhiều vật một lượt (Link) ngốn tài nguyên đệm nhất. Muốn nhiều Link phải bớt chỗ khác hoặc nới khay.
- Mốc giới thiệu 3 mechanic trong 50 level: L6 / L16 / L26. Loop sau L50 từ L16 bỏ level giới thiệu.

## 3. Bộ đệm, sức chứa và số đẹp

- Sức chứa đệm (khay 5, băng chuyền 7, slot 5, ô chờ 5) là hằng số game, không theo level, chọn bằng đo trên nhiều cỡ bàn (7 = nhóm tối đa 4 + 3).
- Người chơi cần chừa ít nhất 1 ô dư so với solver tối ưu (Bee: solver cần 4/5, level 5/5 là kẹt với người).
- Số in trên mặt vật thể phải là số đẹp (4, 6, 8, 10, trần 12 cho bộ sinh). 5 và 7 bắt người chơi nhẩm. Sửa tay không giới hạn.
- Nhiều cột / lane / lối thoát = dễ hơn. Thời lượng ván là hệ quả của cỡ hộp và số vật, không phải tham số.

## 4. Chứng minh bằng máy, soi bằng mắt

- Mọi level xuất ra đã được chứng minh giải được, `sol` lưu kèm làm bằng chứng. Sinh ngược từ lời giải (construct-first) rồi phá. Mọi biến đổi sau đó giải lại.
- Mọi khẳng định về độ khó có script và số. Nhưng máy chấm "đạt" chưa đủ: soi mắt và chơi thật trong game ở viewport mục tiêu là cổng bắt buộc.
- Đo trước, sửa sau. Đo biên độ núm trước khi xây UI cho núm.

## 5. Tham chiếu và IP

- Game cùng studio làm chuẩn thẩm mỹ nội bộ. Game đối thủ chỉ lấy cấu trúc. Template của game khác chỉ lấy cấu trúc tab và cột.
- Bám tham chiếu thì kiểm toán độ trung thành trước khi thiết kế. Lệch chỉ khi sửa điểm yếu đánh số có bằng chứng. Cải tiến là công tắc mặc định tắt.
- Không dùng bản crack, không lấy asset, không vẽ lại logo/mascot, không chép tên và số liệu. Nói một câu rồi đưa phương án gốc.

## 6. Ưu tiên khi thiết kế cho casual mobile

- Logic trước, đồ họa sau khi làm prototype. Nhưng Lead đánh giá bằng mắt, nên lớp hình tối thiểu phải đi cùng cơ chế từ lần chơi thử đầu.
- Feel và thẩm mỹ trước độ khó cho 15 level đầu. Đối xứng, chỗ thở, nhiều hình thù.
- Vùng chạm ≥ 44 px. Không đồng hồ nếu game không có thời gian. Không hệ sao nếu không có logic sao. Thua có cứu (5 s + tín hiệu + Undo/Ads).
- Monetization là đòn bẩy độ khó: đo bot ở từng trạng thái. Cân bằng ở trạng thái miễn phí. Mọi level giải được không cần booster.
- Meta vào sau khi loop lõi được xác nhận vui.

## 7. Chia việc giữa người, Claude và thuật toán

Claude lo phần cần hiểu (chọn từ theo chủ đề, đọc ý đồ từng dòng curve, chấm thẩm mỹ từ ảnh, vòng lặp vặn núm). Thuật toán lo phần phải đúng 100% (xếp chữ, bảo đảm giải được, khớp chính xác, đo win%). Công cụ ảnh (Codex, ChatGPT) chỉ render ý tưởng, không đúng luật, phải dựng lại bằng code. Lead giữ quyền với luật lõi, hình bàn vẽ tay, tham số nhìn thấy.
