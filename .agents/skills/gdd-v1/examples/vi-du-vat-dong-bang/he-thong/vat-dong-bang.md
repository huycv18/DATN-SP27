# GDD hệ thống: Quân băng

Project: <slug> (game ví dụ) | Chủ sở hữu: người viết GDD | Trạng thái: nháp (20/10/2026) | Nguồn quyết định: DECISIONS game tile chữ nhiều tầng 29/09, 30/09, 01/10/2026. Hỏi đáp 20/10/2026

## Tóm tắt
Quân băng là quân bị khóa bởi một bộ đếm. Mỗi quân khác được nhặt làm bộ đếm giảm, về không thì quân trở lại bình thường. Mechanic bắt người chơi xếp thứ tự nhặt để băng tan đúng lúc chữ cần lộ ra, không thêm luật nhặt mới. Tầng: tính năng. Ưu tiên: bản đầu (đã cài trong prototype HTML, chờ Unity). Phụ thuộc chính: luật nhặt và che phủ, khay, quân Link, thang độ khó.

## Hiện hành
- Đã cài trong prototype từ 29/09/2026. Mốc: giới thiệu L16, luyện L17 và L18, trộn với quân úp từ L20, trộn với Link từ L30.
- Luật rút gọn của Lead: quân có số, không lấy được, mỗi lần lấy một quân khác thì số trừ một, về không thì mất băng.
- Tầng đặt: hai tầng trên cùng, tối đa ba tầng trên. Bàn hai tầng được cả tầng đáy.
- File level L16 đến L18 đang có nhiều quân băng hơn mốc đã chốt (bảng mục 3 và câu hỏi mở 1).
- Chưa chốt: nam châm với quân băng, hiệu ứng và âm tan băng, text tutorial (mục 10).

## 1. Mục đích với người chơi
Người chơi nhìn thấy chữ cần nhưng chưa lấy được, phải chọn nhặt quân nào trước để băng tan đúng lúc, và chịu rủi ro khay phồng trong lúc chờ. Mechanic đánh vào nguồn khó của tile match có khay: thứ tự nhặt và sức chứa khay, không đánh vào may rủi. Pillar phục vụ: "soi bàn, đánh vần, giữ khay sạch". Trong ba mươi giây đầu của L16 người chơi thấy một quân có lớp băng và số, bấm vào thì bị từ chối, nhặt quân khác thì thấy số giảm.

## 2. Luật
1. Quân băng là quân mang số băng n, với n nguyên từ 1 đến 6. Số băng hiện ở đáy quân và nhìn thấy kể cả khi quân bị đè.
2. Quân có số băng lớn hơn 0 không nhặt được, kể cả khi quân đã thoáng.
3. Mỗi quân khác được nhặt thành công từ bàn làm số băng của mọi quân băng giảm 1, kể cả quân băng còn đang bị đè.
4. Nhặt một nhóm Link N quân làm số băng giảm N trong cùng lượt.
5. Bấm vào quân bị từ chối (quân bị đè, quân băng, nhóm Link không đủ chỗ khay) không làm số băng giảm.
6. Chuộc khay không phải nhặt từ bàn, không làm số băng giảm.
7. Số băng về 0 thì quân thành quân thường ngay trong lượt đó, nhưng vẫn phải hết bị đè mới nhặt được.
8. Số băng không tăng lại. Số băng được tính từ tổng số quân đã nhặt từ bàn, nên Hoàn tác (nếu có lại) trả số băng về đúng giá trị trước nước đó.
9. Nhóm Link có quân băng chỉ nhặt được khi mọi quân trong nhóm hết băng và thoáng.
10. Quân vừa úp vừa băng: chữ giấu theo luật quân úp, số băng vẫn hiện. [GIẢ ĐỊNH]
11. Nam châm không rút quân còn số băng. [GIẢ ĐỊNH]
12. Xáo hoán vị chữ giữa các quân, số băng ở lại vị trí cũ. [GIẢ ĐỊNH]
13. Tầng được đặt băng: tầng trên cùng và tầng ngay dưới nó, tối đa 3 tầng trên cùng. Bàn 2 tầng được đặt cả tầng đáy. Bàn từ 3 tầng trở lên không đặt ở tầng đáy. Chủ dự án chốt 30/09/2026.
14. Băng không đặt lên quân mở màn (quân thuộc các nước giải được ngay khi vào bàn).

Thắng khi: hoàn thành mọi order. Quân băng không đổi điều kiện thắng vì khớp chính xác buộc mọi quân phải được nhặt. Thua khi: khay đầy theo luật khay. Quân băng không gây thua trực tiếp. Ca tranh cãi: quân cuối trên bàn còn số băng lớn hơn không và không còn quân nào khác để nhặt là kẹt cứng. Validator chặn từ lúc dựng level, trong game không có phán quyết riêng.
Cam kết với người chơi: băng luôn tan được bằng nước đi bình thường. Không quân băng nào cần booster mới tan.

Trạng thái và chuyển tiếp:
| Trạng thái | Vào khi | Ra khi | Hành vi | Người chơi thấy gì |
|---|---|---|---|---|
| Băng, bị đè | Vào bàn với số băng lớn hơn 0 và có quân tầng trên đè | Hết bị đè (sang Băng, thoáng) hoặc số về 0 (sang Thường, bị đè) | Không nhặt được. Số giảm theo mỗi nước nhặt | Quân xám, viền băng, số băng ở đáy |
| Băng, thoáng | Hết bị đè khi số còn lớn hơn 0 | Số về 0 (sang Thường, thoáng) | Không nhặt được. Bấm vào bị từ chối | Quân trắng, viền băng, số băng |
| Thường, bị đè | Số về 0 khi còn bị đè | Hết bị đè | Theo luật nhặt chung | Quân xám, không viền băng |
| Thường, thoáng | Số về 0 khi đã thoáng, hoặc hết bị đè | Được nhặt | Theo luật nhặt chung | Quân trắng |

Thứ tự xử lý trong một lượt (resolution order):
1. Kiểm hợp lệ: quân thoáng, số băng bằng 0, nhóm Link đủ chỗ trong khay.
2. Nhặt cả nhóm. Từng chữ vào order hoặc khay theo luật order.
3. Giảm số băng của mọi quân băng theo số quân vừa nhặt. Quân về 0 bỏ lớp băng.
4. Kiểm order hoàn thành, sinh order mới, chuộc khay.
5. Lật quân úp vừa hết bị đè.
6. Kiểm thắng.
7. Kiểm thua (khay đầy sau khi chuộc).

## 3. Tham số
| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nhóm tác động | Nguồn (gốc / đo / ước) |
|---|---|---|---|---|---|---|
| Số băng n của một quân | 1 (L16) | 1 đến 6 | Quân khóa lâu hơn, khay dễ phồng trong lúc chờ | Thành quân thường sớm, mechanic mờ | Độ khó, nhịp | Gốc: Lead 29/09 |
| Số quân băng mỗi level | 1 (L16) | L16 đến 25: 1 đến 3. L26 đến 35: 3 đến 4. L36 đến 50: 4 đến 6 | Nhiều điểm khóa, điểm độ khó tăng | Mechanic mờ nhạt | Độ khó | Gốc: Lead 30/09 |
| Tầng được đặt | 2 tầng trên cùng | Tối đa 3 tầng trên. Bàn 2 tầng cả tầng đáy | Băng sâu hơn, dễ tan trước khi lộ (vô nghĩa) | Chỉ tầng trên, dễ đọc | Độ khó, soi mắt | Gốc: Lead 30/09 |
| Tiến độ gắn băng | 2 đợt: 5 đến 10% và 45 đến 50% ván | Giữ 2 đợt | Dồn về cuối: đỉnh áp lực muộn | Dồn về đầu: hết băng sớm | Nhịp | Gốc: Lead 30/09 |
| Trần số băng ở level giới thiệu | 1 | 1 đến 2 | Dạy tệ (băng 12 ở level dạy) | Không có | Dạy | Ước: knowledge 25 [GIẢ ĐỊNH] |
| Trọng số "Băng" trong thang độ khó v2 | 7 trên 100 | 5 đến 10 | Băng kéo nhãn lên | Băng không đổi nhãn | Đo | Đo: hiệu chuẩn 01/10 |
| Thời lượng hiệu ứng tan | 0,3 giây | 0,2 đến 0,4 | Chậm nhịp nhặt | Không thấy tan | Cảm giác | Ước [GIẢ ĐỊNH] |

Núm gap: không có số gốc từ game tham chiếu. Mốc và mật độ là của Lead. Công thức thành phần "Băng" trong thang độ khó:
| Công thức | Biến | Khoảng đầu ra | Ví dụ tính |
|---|---|---|---|
| Băng = 7 x (0,6 x A + 0,4 x B) | A = chênh tỉ lệ thắng của bot người thường khi bỏ hết băng so với có băng, kẹp 0 đến 1. B = số nước quân đã thoáng mà vẫn băng chia 10, kẹp 0 đến 1 (chuẩn hóa [GIẢ ĐỊNH]) | 0 đến 7 | A 0,3 và B 0,5: Băng = 7 x (0,18 + 0,20) = 2,66 |

## 4. Trường hợp biên
| Ca | Phán quyết | Lý do |
|---|---|---|
| Số băng bằng 0 trong dữ liệu | Là quân thường. Dữ liệu hợp lệ | Giữ tương thích file cũ |
| Số băng lớn hơn số quân khác còn trên bàn | Validator từ chối level. Trong game không có ca này | Băng không bao giờ tan là kẹt cứng |
| Quân băng là quân cuối cùng, số còn lớn hơn 0 | Cùng ca trên: chặn từ lúc dựng | Khớp chính xác buộc nhặt hết |
| Băng tan trước khi quân hết bị đè | Hợp lệ nhưng vô nghĩa. Validator cảnh báo, level giới thiệu không được có | Người chơi không thấy mechanic |
| Nhặt nhóm Link 2 quân khi hai quân băng còn 1 và 2 | Quân thứ nhất về 0, quân thứ hai về 0 (giảm 2) | Luật 4 |
| Nhóm Link có một quân băng | Cả nhóm bị chặn tới khi quân đó về 0 | Luật 9 |
| Quân úp có băng | Chữ giấu, số băng hiện. Lật khi hết bị đè theo luật úp | Luật 10 [GIẢ ĐỊNH] |
| Bấm liên tiếp vào quân băng | Từ chối mỗi lần, số không đổi, không rung dồn | Luật 5 |
| Hoàn tác sau khi băng tan | Lớp băng và số quay lại đúng giá trị trước nước đó | Luật 8 |
| Xáo khi còn quân băng | Chữ đổi, băng ở lại vị trí. Xáo vẫn phải thỏa điều kiện còn đường thắng | Luật 12 [GIẢ ĐỊNH] |
| Nam châm khi chữ cần duy nhất nằm trên quân băng | Nam châm không rút. Toast nói rõ không có quân hợp lệ | Luật 11 [GIẢ ĐỊNH] |
| Revive (vợt dọn khay) khi còn quân băng | Không ảnh hưởng số băng. Chữ từ hàng giữ bay vào order không đếm là nhặt | Luật 6 |
| Thoát giữa ván | Không lưu trạng thái ván. Vào lại từ đầu | Luật chung của game |

## 5. Ràng buộc vật lý của luật
- Số băng tối đa bằng số quân khác còn trên bàn trừ số quân mở màn. Validator chặn vượt.
- Số băng tối đa 6 theo Lead. Level giới thiệu dùng 1.
- Tầng đặt băng tối đa 3 tầng trên. Bàn 2 tầng không có ràng buộc tầng.
- Băng không che thông tin nên không làm solver phình. Solver chỉ thêm điều kiện "số quân đã nhặt đạt n".
- Trần độ khó của băng trong thang v2 là 7 điểm trên 100. Băng không thể một mình đẩy level lên nhãn Khó.

## 6. Yêu cầu cho engineer / tool
- Dữ liệu: phần tử thứ năm của quân, `{iceCount: n}`, n nguyên từ 0 trở lên. Thiếu trường thì bằng 0.
- Trạng thái chạy: không lưu bộ đếm riêng. Số băng hiện tại = max(0, n - tổng số quân đã nhặt từ bàn). Hoàn tác và replay tự đúng.
- Sự kiện: `iceDecrement(tileId, remaining)` sau mỗi nước nhặt. `iceMelt(tileId)` khi về 0.
- Nơi cùng đổi khi luật đổi: engine nhặt (`mechanicGroup()`), solver của game và solver của editor, validator (`iceLayerAllowed()`, cờ "băng tan trước khi lộ", cờ "băng không bao giờ tan"), bot đo độ khó, thang v2 thành phần Băng, tutorial L16, Sheet tab Gameplay và Level Data.
- Editor: panel Mechanics có "Số băng", "Gán băng", "Bỏ băng". Từ chối gán ngoài tầng cho phép.
- Unity: lớp băng và bộ đếm 3D là asset riêng. Logic đếm theo tổng quân đã nhặt như trên, không đếm theo thời gian.

## 7. Yêu cầu cho art, UI, tutorial, audio
| Sự kiện | Hình (VFX, trạng thái) | Âm (SFX) | Text / tutorial | Ưu tiên |
|---|---|---|---|---|
| Quân có số băng lớn hơn 0 | Viền trong màu xanh băng và glow nhẹ. Số băng ở đáy quân, chữ trắng viền xanh đậm. Giữ tương phản trắng và xám của thoáng và bị đè | Không | Không | Bắt buộc |
| Số băng giảm | Số đổi ngay, không hiệu ứng riêng | Không | Không | Bắt buộc |
| Số băng về 0 | Lớp băng vỡ ngắn, không khóa input [GIẢ ĐỊNH] | Tiếng băng vỡ nhỏ hơn tiếng nhặt đúng [GIẢ ĐỊNH] | Không | Nên có |
| Bấm vào quân băng | Quân rung ngang nhẹ [GIẢ ĐỊNH] | Không | Không | Nên có |
| Vào L16 lần đầu | Tối màn, sáng quân băng và một quân nhặt được, bàn tay chỉ quân nhặt được | Không | TB3: "Ice tiles are locked. Pick other tiles to melt the ice!" kèm nút Got it! [GIẢ ĐỊNH] | Bắt buộc |

## 7b. Cảm giác (game feel)
Tham chiếu cảm giác: lớp băng trong suốt vẫn đọc được nội dung bên dưới kèm bộ đếm giảm mỗi lần nhặt đĩa khác, mục Frozen Plate trong GDD v0.2 của game băng chuyền phục vụ Order (phòng này, 12/10/2026). Số đếm giảm mỗi lần nhặt quân khác, mục Ice của game tile rơi (06/10/2026). Phản tham chiếu: không phải xích rung và đứt khi rơi như Lock của game tile rơi. Không có đồng hồ đếm theo thời gian thật.
| Khoảnh khắc | Mục tiêu |
|---|---|
| Phản hồi bấm quân băng | Dưới 50 ms, rung biên độ nhỏ hơn rung khay |
| Số giảm | Cùng khung hình với quân vừa nhặt rời bàn |
| Tan băng | 0,2 đến 0,4 giây, nhẹ hơn hiệu ứng nhặt đúng, không có spark |

## 8. Cách đo thành công và tiêu chí nghiệm thu
Chỉ số kết quả: tỉ lệ thắng bot người thường ở L16 đến L18 và điểm đo so với bảng curve. Chỉ số trải nghiệm: số lần bấm vào quân băng mỗi ván (playtest người thật). Bot chấm: hồ sơ người thường và planner của thang v2. Fixture: L16 đến L25 bộ đang chơi.
Tiêu chí nghiệm thu:
1. Mở L16, nhặt 1 quân thường, thấy số băng của mọi quân băng giảm đúng 1. Về 0 thì viền băng và số biến mất trong cùng lượt.
2. Bấm quân băng khi số lớn hơn 0: không nhặt, số không đổi, khay không đổi.
3. Nhặt nhóm Link 2 quân ở level có băng: mọi quân băng khác giảm đúng 2.
4. Validator chạy cả 50 level: 0 level có băng không bao giờ tan. L16 không có băng tan trước khi lộ.
5. Điểm đo L16 nằm trong 30 cộng trừ 4 (dung sai sinh của bảng curve). Tỉ lệ thắng bot người thường L16 từ 60% [GIẢ ĐỊNH ngưỡng].
6. Hoàn tác (nếu có lại) sau khi băng tan trả số băng về đúng giá trị trước nước đó. Replay lời giải sạch của L16 đến L25 pass 10 trên 10.

## 9. Lệch khỏi tham chiếu
Không áp dụng: quân băng không bám một game tham chiếu. Bảng mẫu của game khác có Key và Lock. Lead ánh xạ sang quân băng ngày 30/09/2026.

## 10. Câu hỏi mở
1. File L16 đến L18 đang có 4 đến 5 quân băng số 5 và 6, mốc chốt là 1 quân ở L16 và 2 quân ở L17 và L18. Phương án: dựng lại ba level theo mốc, giữ layout vẽ tay. Ai quyết: Lead.
2. Nam châm có rút quân băng không? Phương án: không (luật 11). Ai quyết: Lead.
3. Xáo giữ số băng tại vị trí? Phương án: giữ (luật 12). Ai quyết: Lead.
4. Quân vừa úp vừa băng có hiện số không? Phương án: hiện (luật 10). Ai quyết: Lead.
5. Có hiệu ứng và âm tan băng không? Phương án: có, ngắn, nhẹ hơn nhặt đúng (mục 7). Ai quyết: Lead.
6. Text box dạy băng? Phương án: TB3 ở mục 7. Ai quyết: Lead, qua gd-ux.

## Lịch sử thay đổi
| Ngày | Thay đổi | Lý do | Ai |
|---|---|---|---|
| 20/10/2026 | Viết bản đầu từ GDD markdown game tile chữ nhiều tầng và DECISIONS 29/09, 30/09, 01/10 | Ca thử skill /gdd-v1 | người viết |
