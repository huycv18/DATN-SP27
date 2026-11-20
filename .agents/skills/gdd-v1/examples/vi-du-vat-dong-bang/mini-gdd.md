# Mini GDD: game tile chữ nhiều tầng (game ví dụ, prototype 15 level, có quân băng)

Project: <slug> (game ví dụ) | Phiên bản: v0.1 | Ngày: 20/10/2026 | Trạng thái: nháp | Nguồn: hỏi đáp 20/10/2026, GDD markdown game tile chữ nhiều tầng v1 (20/08 đến 01/10/2026), DECISIONS 29/09 và 30/09/2026

## Hiện hành
- Prototype HTML đã có 50 level đang chơi. Bản mini này rút 15 level cho một phiên dựng lại engine headless có quân úp và quân băng.
- Luật lõi, khay, order, thắng thua lấy nguyên từ GDD markdown. Không có sao, không có điểm, không có đồng hồ.
- Bản đồ mechanic 15 level là bản nén của mốc L6 và L16 trong bộ 50 level. [GIẢ ĐỊNH]
- Trục độ khó dùng 7 thành phần của thang v2. Prototype chưa hiệu chuẩn lại.

## 1. Tổng quan
| Mục | Nội dung |
|---|---|
| Tên | Game tile chữ nhiều tầng (game ví dụ, tên trên Sheet và trong Unity có thể khác) |
| Thể loại | Tile match mạt chược kết hợp đánh vần từ tiếng Anh có sẵn trong order |
| Nền tảng | Mobile portrait, một ngón tay, viewport mục tiêu 380 px |
| Core fantasy | Soi bàn quân ngà, đánh vần từng từ, giữ khay sạch |
| USP | Từ được cho sẵn trong order nên người non-native chơi được theo kiểu tìm và gom. Độ khó nằm trong tay level designer |
| Game tham chiếu | Game tham chiếu cùng thể loại (tên, studio ghi ở bản thật): thẩm mỹ cụm quân và dải text khen combo, chép nguyên văn năm bậc đầu |

## 2. Luật vàng (không phá khi cân bằng)
1. Khớp chính xác: tập chữ trên bàn bằng đúng tập chữ của toàn bộ order, nên thắng đồng nghĩa dọn sạch bàn.
2. Mọi level có lời giải sạch: tồn tại đường thắng mà khay không bao giờ quá 1 chữ, không cần booster.
3. Khay đầy là thua ngay, tính sau khi cả lượt đã xử lý xong và order mới đã chuộc khay.

## 3. Luật bàn, bộ đệm, order
Bàn:
1. Quân đặt trên lưới nửa quân, mỗi quân chiếm 2 x 2 ô, được lệch nửa quân.
2. Quân nhặt được khi không bị quân nào ở tầng cao hơn đè lên (giao vùng chiếm). Không dùng luật thoáng cạnh trái phải.
3. Khung bàn tối đa 8 quân ngang và 8 quân dọc. Bàn nhắm tối đa 7 hàng dọc để quân từ 44 px ở viewport mục tiêu.
4. Độ lệch tầng khi vẽ chỉ để nhìn ra chiều sâu. Che phủ, lời giải và luật nhặt tính theo ô lưới.
Order:
1. Mỗi level có dãy order cố định. 2 order mở song song. Luôn hiện trước order kế tiếp.
2. Order là một từ tiếng Anh 3 đến 6 chữ, có chữ gợi ý lộ sẵn. Chữ đầu luôn ẩn.
3. Nhặt tự do trong phạm vi các từ đang mở, không bắt đúng thứ tự đánh vần.
4. Chữ khớp cả 2 order mở thì vào order còn thiếu ít chữ nhất. Bằng nhau thì vào order sinh trước.
5. Order xong thì order kế tiếp vào ngay về mặt luật. Hộp hiển thị của nó hiện sau khi hộp cũ tan.
6. Từ từ 6 chữ trở lên chiếm cả hai ô order. Bộ prototype giữ từ tối đa 5 chữ, nên luật này chưa kích hoạt.
Khay:
1. Sức chứa 5 ô. Chữ không order nào đang cần rơi vào khay theo thứ tự nhặt.
2. Khi order mới xuất hiện, chữ trong khay khớp order mới tự bay lên theo thứ tự vào khay (chuộc khay). Không chuộc giữa chừng một order.
3. Chuộc liên hoàn hoàn thành được order mới ngay. Khi đó sinh tiếp order và chuộc tiếp.
4. Cảnh báo đỏ nhấp từ khi khay có 4 chữ.

## 4. Thắng, thua, ca tranh cãi và trường hợp biên
| Sự kiện | Điều kiện | Tính lúc nào | Kết quả |
|---|---|---|---|
| Thắng | Hoàn thành toàn bộ order | Ngay khi chữ cuối đáp slot | Overlay thắng, đánh dấu đã qua, mở level kế. Bàn sạch |
| Thua | Khay đạt 5 trên 5 | Sau khi cả nhóm của lượt vào chỗ và order mới đã chuộc khay | Overlay thua, chơi lại. Không thua vì hết giờ |
Ca tranh cãi và trường hợp biên (tối thiểu 4, mỗi ca có phán quyết):
1. Nhóm Link làm khay chạm 5 giữa chừng rồi order mới chuộc ngay: không thua. Vì: kiểm thua chạy sau chuộc.
2. Khay còn 1 ô và người chơi bấm nhóm Link 2 quân: từ chối nước đi, không đổi gì. Vì: nhóm N quân cần N ô trống kể cả khi chữ sẽ vào order.
3. Mọi quân thoáng đều là chữ chưa cần và khay gần đầy (kẹt mềm): không phải thua, là điểm bán booster. Vì: lời giải sạch vẫn tồn tại theo luật vàng 2.
4. Chữ cuối của order cũng là chữ cuối trên bàn: thắng, không kiểm thua. Vì: kiểm thắng trước kiểm thua.
5. Quân băng cuối cùng còn số lớn hơn 0 và không còn quân khác: validator chặn từ lúc dựng. Trong game không có ca này. Vì: băng không bao giờ tan là kẹt cứng.
6. Thoát giữa ván: không lưu ván, vào lại từ đầu. Chuỗi thắng không đổi. Vì: luật chuỗi thắng chỉ đếm thắng và thua.

## 5. Mechanic đặc biệt
### 5.1 Quân úp
Hình: quân không cho thấy chữ, cả chữ giữa lẫn chữ góc. Mục đích (nguồn khó): giấu thông tin để lập kế hoạch, không thêm luật nhặt. Mốc dạy: L6 trong bộ chính. L4 trong bản prototype. [GIẢ ĐỊNH]
1. Quân úp tự lật khi không còn bị quân nào đè lên. Điều kiện lật trùng điều kiện nhặt được.
2. Quân úp mà không bị đè ngay từ đầu là lỗi dựng. Editor và validator cảnh báo.
3. Bot người thường và bot tính toán không dùng chữ của quân úp. Chỉ hồ sơ nhìn trước bị mất thông tin.
### 5.2 Quân băng
Hình: viền trong xanh băng, số băng ở đáy quân. Mục đích (nguồn khó): ép thứ tự nhặt và kéo dài thời gian khay chịu áp lực. Mốc dạy: L16 trong bộ chính. L9 trong bản prototype. [GIẢ ĐỊNH]
1. Quân có số băng lớn hơn 0 không nhặt được, kể cả khi đã thoáng.
2. Mỗi quân khác được nhặt thành công làm số băng giảm 1, kể cả khi quân băng còn bị đè. Nhóm Link N quân giảm N. Nước bị từ chối không giảm. Chuộc khay không giảm.
3. Về 0 thì thành quân thường, vẫn phải hết bị đè mới nhặt được.
4. Số băng từ 1 đến 6. Đặt ở tầng trên cùng và tầng ngay dưới, tối đa 3 tầng trên. Bàn 2 tầng được cả tầng đáy. Chủ dự án chốt 30/09/2026.
5. Băng không đặt lên quân mở màn. Chi tiết, biên và yêu cầu art: GDD hệ thống quân băng.
### 5.3 Quân Link (ngoài phạm vi 15 level, giữ để engine không phải sửa luật nhặt)
Hình: băng keo dán ngang khe giữa hai quân sát nhau, mỗi nhóm một màu. Mục đích: kéo chữ chưa cần vào khay cùng lúc. Mốc dạy: L26 trong bộ chính.
1. Chỉ nối quân sát nhau: cùng tầng, chung một cạnh theo hàng hoặc theo cột.
2. Nhặt một quân là lấy cả nhóm trong một lượt. Mọi quân của nhóm phải nhặt được.
3. Khay phải còn ít nhất N ô trống cho nhóm N quân.

## 6. Resolution order (sau một thao tác)
1. Kiểm hợp lệ: quân thoáng, số băng bằng 0, nhóm Link đủ ô khay.
2. Nhặt cả nhóm. Từng chữ vào order (chọn order theo luật order 4) hoặc vào khay.
3. Giảm số băng của mọi quân băng theo số quân vừa nhặt. Quân về 0 bỏ lớp băng.
4. Kiểm order hoàn thành. Order kế vào ngay. Chuộc khay theo thứ tự vào khay. Lặp nếu chuộc hoàn thành luôn order mới.
5. Lật quân úp vừa hết bị đè.
6. Kiểm thắng.
7. Kiểm thua (khay đầy sau chuộc).

## 7. Bản đồ mechanic 15 level
- Bản nén của mốc trong bộ chính để prototype dạy đủ hai mechanic trong một phiên. Mốc thật của bộ chính giữ nguyên (úp L6, băng L16, Link L26). [GIẢ ĐỊNH]
| Level | Vai trò | Mechanic (lượng, từ tiến độ) | Nhãn mục tiêu | Ghi chú |
|---|---|---|---|---|
| 1 | Dạy luật | - | Dễ | Không thể thua. 1 order mở |
| 2 | Dạy luật | - | Dễ | Không thể thua. Cảnh báo khay nếu khay có 3 chữ |
| 3 | Dạy luật | - | Dễ | Không thể thua |
| 4 | Giới thiệu | Úp 30% từ 50% | Dễ | Quân úp phải bị đè |
| 5 | Luyện | Úp 30% từ 50% | Dễ | Không thể thua |
| 6 | Thường | - | Dễ | |
| 7 | Đỉnh nhỏ | Úp 30% từ 20% | Vừa | |
| 8 | Thở | - | Dễ | |
| 9 | Giới thiệu | Băng 1 quân số 1 từ đầu ván | Vừa | Băng ở tầng trên, thấy ngay |
| 10 | Luyện | Băng 2 quân (1 từ 10%, 1 từ 50%) | Vừa | |
| 11 | Luyện | Băng 2 quân (1 từ 10%, 1 từ 50%) | Vừa | |
| 12 | Đỉnh | Úp 30% từ 50% + băng 2 quân | Vừa | Lần đầu trộn úp và băng |
| 13 | Thở | - | Vừa | |
| 14 | Thường | Úp 30% từ 50% + băng 3 quân | Vừa | |
| 15 | Đỉnh | Úp 30% từ 10% + băng 3 quân | Khó | Đỉnh của bộ |

## 8. Trục độ khó (lời Lead)
Thang v2 (01/10/2026) trả lời "độ khó đến từ đâu" theo cách Lead mô tả.
| Nhãn | Dễ | Vừa | Khó | Rất khó | Cực khó |
|---|---|---|---|---|---|
| Điểm | dưới 22 | 22 đến 44 | 44 đến 57 | 57 đến 66 | từ 66 |
| Trục | Lead mô tả | Đo bằng gì | Trọng số ý đồ | Trạng thái |
|---|---|---|---|---|
| Người thường thua | "Người bình thường có qua được không" | 1 trừ tỉ lệ thắng bot người thường (12% bấm nhầm, 20% không thấy tầng thấp) | 25 | Đã hiệu chuẩn trên 44 level |
| Áp lực khay | "Khay phồng đến đâu" | 60% kỳ vọng chữ chưa cần chia sức chứa, 40% đỉnh khay trung bình chia sức chứa | 20 | Đã hiệu chuẩn |
| Chôn chữ cần | "Chữ đang cần nằm sâu đến đâu" | 50% độ sâu chôn trung bình, 20% độ sâu của 2 order mở lúc vào bàn, 30% tỉ lệ nước bị ép bỏ khay | 25 | Đã hiệu chuẩn |
| Úp | "Mất thông tin để tính trước" | 60% phép loại bỏ với bot planner, 40% úp che chữ đang cần | 6 | Đã hiệu chuẩn |
| Băng | "Phải chờ bao lâu mới lấy được" | 60% phép loại bỏ với bot người thường, 40% số nước quân đã thoáng mà vẫn băng | 7 | Đã hiệu chuẩn |
| Link | "Kéo theo bao nhiêu rác" | 60% phép loại bỏ, 40% số chữ chưa cần bị kéo theo | 7 | Đã hiệu chuẩn. Ngoài phạm vi 15 level |
| Ván dài | "Bàn to thì mệt" | Số quân chia 70. Không bao giờ là lý do đầu | 10 | Đã hiệu chuẩn |
- Bản prototype chưa đo lại. Mục tiêu điểm theo nhãn ở bảng mục 7, dung sai 4 đến 5 điểm.

## 9. Visual, UX
Thứ bậc màn hình:
1. HUD: level, chuỗi thắng, Settings.
2. Hộp order sơn mài, mỗi order một hộp, hộp kế tiếp mờ.
3. Bàn quân, căn giữa, cỡ quân từ 44 px.
4. Khay 5 ô và 3 nút booster (+1 ô khay, Nam châm, Xáo).
Art direction: mạt chược kiểu Tây, chữ cái in trên quân ngà. Quân thoáng nền trắng, quân bị đè nền xám (đổi hẳn nền và mực, không dùng filter). Chữ gợi ý glow vàng. Hàng sau bị hàng trước che một phần mép dưới như bàn mạt chược thật.
| Màn chơi, trạng thái | Người chơi thấy gì |
|---|---|
| Bình thường | Bàn, 2 hộp order, hộp kế mờ, khay, 3 nút booster |
| Rỗng (chưa có level) | Màn chọn level với 15 ô, ô đã qua có dấu |
| Đang tải | Quân rơi vào bàn tổng thời gian dưới 1 giây, chặn input tới khi xong |
| Lỗi | Level không giải được hoặc file hỏng: toast một dòng, nút Chơi lại |
| Đầy, sắp thua | Viền khay đỏ nhấp thở từ 4 chữ. Thua thì rung màn rồi overlay |
Tutorial bằng lớp tối và text box ngữ cảnh: L1 dạy nhặt vào order (tắt sau order đầu), cảnh báo khay lần đầu khay có 3 chữ, mỗi mechanic một khối ở level giới thiệu.

## 10. Tiêu chí nghiệm thu prototype
1. Bàn và quân vẽ đúng lưới nửa quân. Ở viewport 380 px quân từ 44 px với bàn 7 hàng.
2. Nhặt đúng bay vào slot, nhặt sai rơi khay. 2 order mở. Order mới vào ngay và chuộc khay đúng thứ tự.
3. Khay đầy thua sau khi chuộc. Nhóm chạm 5 rồi chuộc ngay không thua (ca 1 mục 4).
4. Quân úp lật đúng lúc hết bị đè. Quân băng giảm đúng 1 mỗi nước, về 0 thì nhặt được khi thoáng.
5. Validator 15 level pass: khớp chính xác, lời giải sạch, úp bị đè, băng tan sau khi lộ, khung 8 x 8.
6. Bot nhắm mắt thắng L1 đến L5 từ 90%. Bot người thường thắng L15 dưới 50%. Điểm đo từng level nằm trong nhãn mục tiêu cộng trừ 5. [GIẢ ĐỊNH ngưỡng]
7. Chơi hoàn chỉnh bằng một ngón tay trên màn dọc. Không khóa input quá 0,5 giây sau một nước.

## 11. Câu hỏi mở
1. Mốc nén úp L4 và băng L9 cho bản 15 level có được không? Phương án: giữ như bảng mục 7. Ai quyết: Lead.
2. Bản 15 level có giữ 3 nút booster không? Phương án: giữ, nhưng bot đo không dùng. Ai quyết: Lead.
3. Ngưỡng nghiệm thu bot ở mục 10 dòng 6? Phương án: giữ ngưỡng đề xuất tới khi có số đo bot. Ai quyết: Lead.

## Lịch sử thay đổi
| Ngày | Thay đổi | Lý do | Ai |
|---|---|---|---|
| 20/10/2026 | Viết bản đầu từ GDD markdown game tile chữ nhiều tầng | Ca thử skill /gdd-v1 | người viết |
