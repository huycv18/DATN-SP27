# Hướng dẫn review GD-031 (chung cho mọi người chấm)

Project `game-moi` (mã EMBER). Người giao: gd-qa. Người chấm không sửa GDD, chỉ ghi file QA của mình.

## Đọc trước
1. `.claude/agents/gd-qa.md`, `docs/playbooks/indie/gd-qa.md` (mục 2, 4, 5), `.claude/skills/gdd-review/SKILL.md` (bỏ tiêu chí chỉ đúng với Puzzle).
2. `projects/game-moi/gdd/00-khung-game.md` (luật K, C, pillar P1 đến P4, chương, mục 9, từ điển, mục 11 không làm, mục 12 MVP).
3. `projects/game-moi/DECISIONS.md` (lời Lead) và `log-gdm-tu-quyet.md`. Bảng lời Lead ở mục dưới.
4. GDD được giao. Khuôn GDD hệ thống: `docs/process/templates/gdd-he-thong.md`.

## Lời Lead (L) mà GDD phải tôn trọng, lời sau thay lời trước
| # | Lời Lead | Nguồn DECISIONS |
|---|---|---|
| L1 | Bỏ hẳn ý tưởng Space Salvage (jetpack nhặt rác, quán). Không mang Halcyon, Tether Station, nợ oxy, Exodus Fleet | 2026-11-19, 2026-11-20 |
| L2 | Mọi tên riêng (nơi, phe, nhân vật, game) viết tiếng Anh | 2026-11-19 |
| L3 | Chơi đơn và co-op 2 đến 4 người đều là cách chơi chính. Không PvP, không chơi cùng máy | 2026-11-20 |
| L4 | Mỗi trạm con có 4 buồng ngủ đông. Chơi N người thì N người tỉnh, 4 trừ N buồng hỏng do không may sau vụ nổ tàu mẹ. Trạm đang trôi vì hỏng, phải sửa mới đi được | 2026-11-20 |
| L5 | The Veyl là tên chung nhiều chủng tộc ngoài hành tinh, phần lớn trung lập và không biết âm mưu. Một chủng tộc phản diện ghét loài người vì tham lam và phá hoại môi trường, còn tham lam hơn loài người. Phát thông tin giả dụ đoàn di cư rồi phục kích. Dấu vết lộ dần theo tiến trình | 2026-11-20 (vấn đề 1, Phe phản diện) |
| L6 | Vụ tai nạn tàu mẹ là âm mưu từ bên ngoài, nguyên nhân sâu xa là lòng tham của nhân loại | 2026-11-20 |
| L7 | Đoàn di cư đi tìm hành tinh mới để định cư, không đi tìm tín hiệu sự sống | 2026-11-20 |
| L8 | Trạm neo cố định. Map tổng 3 dải theo khoảng cách tới trạm, sinh lại mỗi chuyến. Map nhánh riêng. Không chọn chặng trên bản đồ | 2026-11-20 vấn đề 2 |
| L9 | Điểm thoát kéo về trạm rải trong map. Cổng đi thẳng tới map nhánh đã mở | vấn đề 3 |
| L10 | Không phạt khai thác. Driftlife sinh lại mỗi chuyến. Có nuôi Driftlife. Chủ đề nói qua nhân vật và cú lật Driftlife | vấn đề 4 |
| L11 | Mỗi người vớt về mở một tính năng của trạm qua quest nhỏ hoặc mốc chương | vấn đề 5 |
| L12 | Có đồng tiền riêng, nguồn chính là giao thương. Nửa chơi tay thứ hai là ca cảng giao thương (tàu cập bến, danh sách hàng, lấy hàng, chế thêm, đóng kiện, bốc lên tàu). Bỏ nhà ăn | vấn đề 6, 7, mục Nửa chơi tay thứ hai |
| L13 | Người vào co-op sau là người sống sót vớt về, người rời thì nhân vật ở lại trạm. Giọng truyện nền nghiêm, hài nhẹ đến từ tính cách người vớt được | 2026-11-20 chốt câu 1, 2 |
| L14 | Solace là thông tin mồi, game kết mở cho hậu bản, không tới Solace. Thay mọi chỗ "kết tới Solace", "Solace là điểm kết", "Solace có thật" | 2026-11-20 Solace là thông tin mồi |
| L15 | Không đụng 17 tab `v0.1` trên Sheet. Sheet giữ tên cũ tới khi có tên game | 2026-11-20 Sheet |
| L16 | Giai đoạn định nghĩa này không giới hạn theo sức art | vấn đề 8 |
| L17 | Thể loại: hành động nhập vai phiêu lưu kết hợp mô phỏng quản lý, khá giống Dave the Diver. Nhóm 1 GD, 4 dev, 1 artist 2D. Bán đứt. Unity, PC | số hiện hành |

Điểm do GDM tự quyết (nhãn G trong khung, `log-gdm-tu-quyet.md`) không phải lời Lead: GDD trái điểm G thì ghi lỗi mâu thuẫn khung, không ghi "trái lời Lead".

## Năm lớp chấm (làm đủ cho file được giao)
1. Cấu trúc: đủ mục theo khuôn, có Hiện hành, có nhãn MVP hoặc Sau MVP ở mỗi mục nội dung, có tiêu chí nghiệm thu đo được (mục 8), có mục câu hỏi mở và điểm tự quyết.
2. Luật khẳng định và nội bộ: không từ mơ hồ ("thường", "có thể", "khá") ở chỗ phải là luật, không tự mâu thuẫn, số tính ví dụ đúng (tự tính lại), đơn vị nhất quán.
3. Chéo: khớp `00-khung-game.md` (K, C, chương, từ điển, mục 11 không làm) và khớp lời Lead L1 đến L17. Tên, ID, số, mốc chương, nhãn MVP trùng với file của vai khác (grep để so). Cách chạy lớp máy: `node projects/game-moi/tools/validate-gdd.mjs`, phần của bạn là thứ máy không bắt được.
4. Lỗ hổng thiết kế: chiến lược trội, vòng lặp vô hạn (đặc biệt nạp Oxy ở trạm, bán lặp, nuôi sinh lời không giới hạn), luật chỉ đúng với N người (trái P3), thứ nhặt không có chỗ dùng (trái P2), co-op bị kẹt (một người treo cả nhóm), người chơi một mình không chơi trọn, trạng thái không có đường ra (soft lock), mất tiến trình khi thoát giữa chừng.
5. Đọc bằng người không ngữ cảnh: dev mới có dựng được hệ thống từ mục Luật mà không phải đoán không. Liệt kê từng chỗ phải đoán.
Kiểm bằng chứng số: số trong GDD có trong file sim kết quả (`tools/ket-qua/*.md`, `sim/`) hay không. Số "ước" không nguồn thì ghi nhẹ, số sai so với file sim thì ghi nặng.

## Mức lỗi
| Mức | Định nghĩa | Ví dụ |
|---|---|---|
| Chặn | Trái lời Lead, trái luật K hoặc C, luật không dựng được, soft lock, vòng tiền hoặc Oxy vô hạn, số sai làm hỏng cân bằng, mất tiến trình | Chơi 1 người không qua được chương, nạp Oxy miễn phí lặp vô hạn |
| Nặng | Mâu thuẫn chéo giữa hai file, thiếu luật mà dev phải đoán, thiếu biên quan trọng, thiếu tiêu chí đo được | Hai file ghi hai giá trị cho cùng một số |
| Nhẹ | Chữ, định dạng, thiếu nhãn, ví dụ lệch nhỏ | Thiếu nhãn MVP ở một hàng |
Còn chặn hoặc nặng thì TRẢ LẠI. Chỉ còn nhẹ thì ĐẠT kèm danh sách nhẹ. Không chấm ĐẠT cho đủ.

## Đầu ra
Một file `projects/game-moi/qa/GD-031-<tên-file-không-đuôi>.md` theo dạng:
```
# GD-031 <tên file>
ĐẠT | TRẢ LẠI - một câu lý do.
Giờ sửa file khi chấm: <HH:MM từ ls -l>. Vòng chấm: 1.
## Tóm tắt lỗi
| Mức | Số lỗi |
## Lỗi
| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng (trích số, dòng, so với file nào) | Đề xuất sửa | Người sửa |
## Trái lời Lead (liệt kê, hoặc "Không")
## Mâu thuẫn chéo (file khác nói gì, dòng nào)
## Chỗ phải đoán (lớp 5)
## Số kiểm bằng chứng (số nào khớp file sim, số nào không)
## Tiêu chí nghiệm thu rút từ mục 8 (bảng Feature, Category, Acceptance Criteria đo được, MVP hay Sau MVP) 
## Bỏ qua / không kiểm được
```
Lỗi ghi dòng thật (đọc bằng Read hoặc grep -n), trích đúng số. Không bịa dòng. Văn phong: tiếng Việt có dấu, không emoji, không gạch dài, không dấu chấm phẩy. Xong báo gd-qa: dòng đầu ĐẠT hoặc TRẢ LẠI, số lỗi chặn, nặng, nhẹ, đường dẫn file, tối đa 8 dòng. Không commit, không sửa file ngoài thư mục `qa/`.

## Cập nhật 2026-11-20 (khung lần 4, giờ sửa khung xem `ls -l`)
Khung có thêm K22 (tối đa 2 chuyến mỗi ngày, Skiff cũng tính, đã mở ca cảng thì hết ra ngoài trong ngày), K23 (ngày không có đồng hồ, chỉ sang ngày khi ngủ, tự lưu lúc ngủ), K24 (sau kết về menu, bản lưu ngày cuối chơi tiếp được), C10 (rời phiên hoặc mất kết nối quá 15 giây giữa chuyến tính như bị kéo về, host thoát thì thế giới về lần lưu đầu ngày, chơi một mình thoát giữa chuyến thì mất chuyến). Mục 9: chương 1 một ngày 15 đến 20 phút, chương 5 một ngày 25 đến 30 phút. Phần A (thang túi 80, 100, 126, 168, 216 Khối, bình Oxy 330, 450, 600, 780, 1000, hệ số 0,60) đã xong theo GDM. File hệ thống nào còn ghi trái K22, K23, K24, C10 hoặc thoát giữa chuyến vẫn "Về an toàn giữ nguyên túi" thì ghi lỗi chéo (cùng một con số ở mọi file).
Lỗi đã biết từ vòng chấm đầu (không cần tìm lại, chỉ cần xác nhận còn hay đã sửa): `nguoi-choi.md` dòng 121, 222, 310 cho thoát giữa chuyến kể cả lúc Ngạt được "Về an toàn giữ nguyên túi" (lách K2, K4). Bảng phím `ux-ui.md` lệch `nguoi-choi.md` 2.7 (Ghim món gamepad Y so với X, Q Kết nhanh, M, J). Mẫu sinh thiết cỡ L bằng 0,45 lần giá hạ (`vat-pham.md:60`) trái K9. Lồng mẫu hệ số 1,00 (`nguoi-choi.md:68`) trái cái giá "kéo chậm" của combat.
