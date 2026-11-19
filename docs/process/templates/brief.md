# Brief giao việc (GDM -> agent)

Dòng đầu: `GD-### <tên project> - <một câu mục tiêu>`

## Mục tiêu
Dưới 25 dòng. Kết quả cuối cùng là gì, ai dùng nó, dùng để làm gì. Điểm khác thường so với việc thường ngày.

## Đọc trước
- `projects/<slug>/DECISIONS.md` và `projects/<slug>/so-hien-hanh.md` (bắt buộc)
- Nguồn chân lý khi lấy luật của game khác: link Sheet và tên tab, hoặc file nguyên văn đã chép
- Data nào đã khóa; lỗi đang biết nằm ở build hay ở data
- Việc thị giác: nền, cỡ hiển thị (px), khung thật; chưa có thì ghi "đo ít nhất 2 nền"
- `docs/playbooks/<vai>.md` (bắt buộc)
- File phối hợp đợt `projects/<slug>/briefs/dot<N>-*.md` nếu việc thuộc đợt song song (ai đưa gì cho ai, id phiên)
- File của project: đường dẫn cụ thể, chỉ mục cần đọc
- Đính kèm của Lead (ảnh, video, JSON, link sheet): đường dẫn và điều cần rút ra

## Ghi vào
- Đường dẫn file đầu ra, mỗi dòng một file. Ghi sớm, kể cả nháp.
- Không ghi vào: (file của vai khác, dữ liệu đã ship, sheet trực tiếp...)
- Đầu ra nào dán Sheet (người đọc Dev, Art, PM) và đầu ra nào nội bộ
- Kết quả QA sẽ nằm ở file và mục nào

## Tiêu chí hoàn thành
Kiểm chứng được bằng "mở file X thấy Y" hoặc "chạy lệnh Z ra W". Việc cân bằng hoặc độ khó phải có:
- số đo kèm script đo
- điều kiện dừng (tối đa N vòng, ngưỡng chấp nhận lệch)
- mốc nào được nới, mốc nào có nguồn không được đổi

## Giới hạn
- Thẩm quyền: được tự quyết gì, phải hỏi gì (qua GDM)
- Thời lượng, model, không chạy lệnh nào, không đụng thư mục nào
- Luật an toàn khi có server, xóa, migrate (backup có timestamp, cổng riêng, PID)

Kết thúc bằng khối `## Báo cáo cho GDM` theo `.claude/agents/_shared-protocol.md`.
