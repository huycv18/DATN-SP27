# Giao thức chung cho mọi agent trong phòng Game Designer

(File tham chiếu, không phải agent. Mọi agent trong thư mục này tuân theo nó.)

Mỗi agent được GDM (Game Designer Manager) gọi với một brief. Agent không nói chuyện với Lead.
Mọi kết quả phải nằm trong file. Phần trả lời chỉ là bản tóm tắt cho GDM.
Ghi file đầu ra sớm, kể cả bản nháp, để phiên khác làm tiếp được nếu phiên này bị đóng.

## Phong cách

- Tiếng Việt có dấu đầy đủ, kể cả trong label của mọi câu hỏi. Thuật ngữ kỹ thuật giữ tiếng Anh.
- Không emoji. Không gạch dài, chỉ dùng "-". Kết quả quan trọng lên đầu. Không xã giao, không đề nghị thêm việc.
- Phân biệt rõ dữ kiện / giả định / nhận định. Chỗ nào là suy luận chưa được Lead xác nhận thì đánh dấu `[GIẢ ĐỊNH]`.
- Số liệu để trong bảng, không chôn trong văn xuôi.

## Luật bất biến

1. Đọc `projects/<slug>/DECISIONS.md` (quyết định của sản phẩm), `production/DECISIONS.md` (luật chung của phòng) và playbook của vai trước khi làm. Không làm ngược quyết định đã chốt mà không nêu lý do. Số Lead đã chốt đọc ở `projects/<slug>/so-hien-hanh.md`, không lấy từ tin nhắn.
2. Không sửa file thuộc sở hữu của vai khác. Khi brief có file phối hợp đợt, nhắn thẳng vai khác bằng SendMessage theo file đó. Ngoài ra đề xuất qua GDM ở mục "Bàn giao cho".
3. Khẳng định về độ khó, giải được, cân bằng phải kèm script đo và số đo. Không có số thì ghi "chưa đo".
4. Template hay GDD của game khác chỉ dùng cấu trúc, không dập khuôn luật.
5. Không đổi hình bàn Lead vẽ tay, không đổi số có nguồn, không nới luật để đạt mốc. Gặp thì dừng và hỏi qua GDM.
6. Trước khi báo xong: chạy lại kiểm (test, validator, review script) trên trạng thái sạch. Kết quả phải tái hiện được.
7. Mọi bảng số trong file và báo cáo sinh từ script hoặc file đo cùng lần chạy, ghi giờ file. Không chép tay số từ output cũ hay tin nhắn (chép tay làm lệch số giữa các vai).
8. Ngay trước khi báo xong: đọc lại giờ sửa của file đầu vào, `so-hien-hanh.md` và DECISIONS mục mới hơn lần đọc. Có đổi thì làm lại phần bị ảnh hưởng hoặc ghi rõ "lỗi thời".
9. Hỏi trước mức bản: nháp nhanh (luật chính và số chính, không sim) hay bản đủ (biên, sim, tiêu chí nghiệm thu). Brief không nói thì hỏi GDM, không mặc định làm bản đủ.
11. Phòng đang làm game indie PC (Space Salvage), không phải Puzzle mobile. Playbook và knowledge rút từ dự án Puzzle: chỉ lấy phương pháp, bỏ phần solver, bàn, tile, booster, revive, ads, liveops. Bảng cách đọc ở `CLAUDE.md` mục "Khung gốc viết cho Puzzle mobile".

## Tiết kiệm token

- Đọc file dài có chọn lọc (grep, đúng mục cần). Không đọc lại file đã đọc trong cùng task.
- Gộp nhiều bước đọc / sửa / kiểm vào một lượt. Không chụp màn hình để xác nhận trạng thái. Đọc DOM hoặc file.
- Một task nhiều phần thì làm hết rồi báo một lần, trừ khi bị chặn.
- Báo cáo tối đa khoảng 15 dòng. Chi tiết, bằng chứng, log để trong file và chỉ trỏ đường dẫn.
- Tin liên phiên: ghi đầy đủ vào file, mỗi vòng gửi một tin gộp có đường dẫn. Tin riêng chỉ cho lỗi chặn. App chặn khoảng 10 tin liên phiên liền nhau khi Lead chưa nhắn.
- Kiểm lặp từ lần thứ 3 thì thành script hoặc cổng trong tool, không viết lại tay.

## Khối kết thúc (bắt buộc, đúng tiêu đề)

## Báo cáo cho GDM
- **Task:** mã task hoặc "ngoài backlog", project
- **Kết quả:** 1-4 dòng, mỗi dòng một kết quả kiểm chứng được, có số đo nếu là độ khó / cân bằng
- **File thay đổi:** đường dẫn, mỗi dòng một file
- **Chưa xong / bỏ qua:** ghi rõ vì sao, hoặc "Không"
- **Giả định:** những gì chưa được Lead xác nhận, hoặc "Không"
- **Cần quyết định:** câu hỏi cụ thể kèm phương án đề xuất, hoặc "Không"
- **Bàn giao cho:** agent nào nên làm tiếp và cần đọc file gì
10. Phiên vai dùng chung cho nhiều sản phẩm: đọc slug ở dòng đầu brief. Chỉ dùng số và luật trong `projects/<slug>/` của sản phẩm đó, không lấy số từ sản phẩm đã làm trước trong cùng phiên.
