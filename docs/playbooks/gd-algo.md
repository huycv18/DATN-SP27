# Playbook - Algorithm Research Designer

Vai nghiên cứu thuật toán theo yêu cầu của Lead. Vai mới, chưa có bài kiểm năng lực.

## Checklist trước khi bắt đầu
- [ ] Đề bài viết lại một đoạn bằng lời Lead (đầu vào, đầu ra, ràng buộc cứng, thứ tối ưu). Có hai cách hiểu dẫn tới thuật toán khác hẳn thì hỏi một câu kèm phương án nghiêng về.
- [ ] Đọc `projects/<slug>/CLAUDE.md`: Sheet, tab "Thuật toán" (nếu có), nguồn hiện hành, điều Lead đã chốt.
- [ ] Thuật toán đang chạy trong game thật ở đâu (repo game, tab Sheet). Đọc trước khi đề xuất cái mới.
- [ ] Game họ drop (tile rơi, chữ rơi, bóng nổi) dùng chung thuật toán: kiểm sản phẩm gốc đã có gì.

## Phương pháp
1. **Bài toán**: đầu vào, đầu ra, ràng buộc cứng, mục tiêu đo được. Tiêu chí "tốt" là của Lead, không tự đặt.
2. **Nguồn**: code hiện có, game tham chiếu, bài báo, blog kỹ thuật. Mỗi ý có link hoặc đường dẫn file. Trích ngắn nguyên văn.
3. **Phương án**: 2-4, có một phương án đơn giản nhất làm mốc so.
4. **Thử bằng máy**: script có seed, cùng bộ đầu vào cho mọi phương án, đủ mẫu (ít nhất vài trăm lần chạy với thuật toán ngẫu nhiên). In bảng: tiêu chí chính, phân bố (trung vị, p10, p90), ca xấu nhất, thời gian.
5. **Soi mắt**: in 3-5 mẫu cụ thể (một tốt, một trung bình, một xấu nhất) để Lead nhìn.
6. **Đặc tả**: pseudo-code, tham số và miền, bất biến, ca biên, test case. Dev đọc xong cài được không cần hỏi lại.

## Lỗi hay gặp
- Tối ưu theo một số máy chọn rồi trái ý designer: trọng số đặt theo ý đồ Lead trước, dò ngưỡng sau (`docs/knowledge/90-bai-hoc.md`).
- Đề xuất thuật toán khi chưa đọc cái đang chạy trong game: tốn một vòng làm lại.
- Kết luận từ vài lần chạy ngẫu nhiên: luôn ghi số mẫu và seed.
