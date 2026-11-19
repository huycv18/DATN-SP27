# Playbook - Design QA / Playtester

## Checklist trước khi bắt đầu
- [ ] Đọc tiêu chí hoàn thành trong brief, GDD và DECISIONS của project, `docs/knowledge/90-bai-hoc.md`.
- [ ] Môi trường: dev server qua http (không file://), cổng đúng (hai server khác cổng = localStorage khác), trình duyệt, viewport. Liệt kê môi trường thiếu ngay đầu.
- [ ] Hook của game cho bot (`window.__game`, `pickTile`, `sol`) và script review có sẵn.
- [ ] Mở `docs/process/templates/ket-qua-qa.md`.

## Phương pháp
- Chấm V0.5 (Lead: ưu tiên tốc độ), `/gdd-review --muc v05`: một lượt, chỉ các tab đang hiện trên Sheet. Kéo bản Sheet về trước khi chấm. Ba kiểm: khớp `so-hien-hanh.md` và DECISIONS mới nhất, mâu thuẫn trong và giữa ô, mechanic chưa chốt không có luật hay tên gợi sẵn. Lỗi nhẹ gom tối đa 5 dòng, không chặn dán. Không lớp 5, không đối chiếu prototype từng dòng. Số tự tính phải trích dòng nguồn của hằng số.
- **Kiểm theo GDD và heuristic, không chỉ theo handoff.** QA ĐẠT theo handoff mà Founder thấy lỗi ngay là thất bại của QA.
- **Chơi thật hai cách**: theo `sol` qua hook (chứng minh đường thắng), và theo cảm giác người thường (ghi chỗ bối rối, chán, vui). Script bot chỉ thay phần đo thời gian. Gọi là "playtest" mà không có người thật thì ghi rõ.
- **Soi mắt từng bàn** qua tờ tổng hợp ảnh. Danh sách lỗi máy không bắt (knowledge 25 và 90): bàn dạt góc, quân nhỏ, mechanic chạm trần ở level dạy, Link dài, trùng từ, ảnh khó nhận, mở màn bị bịt, đỉnh lệch hình Lead vẽ.
- **Đối chiếu từng luật** build với GDD (ưu tiên order, điều kiện thua, số order, hàng chờ, revive). Nhãn UI với config. Marker dữ liệu với engine đích (Unity lật bàn khi thiếu `coordinateSystem`).
- **Heuristic biên**: 0, max, lặp nhanh, spam khi animation, thoát giữa chừng, reload, localStorage hỏng, viewport 340-1600, tab ẩn, âm thanh trước gesture.
- **Bot và người lệch nhau thì truy nguyên** trước khi gọi bug solver (luật thua áp sai thời điểm, solver sinh nước người không được đi, tầm nhìn bot khác người).
- **Kiểm nhanh gọn**: một khối script tự bấm + đọc DOM + trả JSON tổng hợp. Không chụp màn hình để xác nhận trạng thái (pane ẩn trả frame cũ, rAF dừng).
- **Thang kết luận**: có lỗi mức chặn hoặc nặng thì TRẢ LẠI. Chỉ còn lỗi nhẹ thì ĐẠT kèm danh sách lỗi nhẹ và đích của từng lỗi (task hoặc ghi chú). BLOCKED chỉ khi không làm được việc được giao vì thiếu môi trường, quyền hoặc dữ liệu, không dùng cho việc đã làm đủ trong phạm vi được giao. Mức chặn: sai luật so với GDD/DECISIONS, level không thắng được theo `sol`, crash hoặc lỗi console, mất dữ liệu. Mức nặng: lỗi người chơi thấy ngay (quân < 44 px, mở màn bịt, mechanic chạm trần ở level dạy, text tràn nút, lệch bot với người chưa truy ra). Mức nhẹ: thẩm mỹ, chữ, không ảnh hưởng luật.
- **Kết quả tái hiện được**: bước tái hiện, mức nghiêm trọng, bằng chứng, đề xuất ai sửa. Không chạy được thì BLOCKED kèm lý do. Bỏ qua gì ghi rõ.
- Không sửa level, tool, code. Không `taskkill` hàng loạt. Không mutation trên thư mục chung.
- Chấm cuốn chiếu: ghi giờ sửa từng file cạnh mỗi kết luận. Trước khi gửi ĐẠT đọc lại giờ sửa và `projects/<slug>/DECISIONS.md` (không phải file chung của phòng) mục mới hơn lần đọc, có đổi thì ghi "lỗi thời, chờ tác giả". Ghi đủ vào file review, mỗi vòng một tin gộp có đường dẫn, tin riêng chỉ cho lỗi chặn và nặng. Sau mỗi lần ghi file review, grep kiểm cập nhật đã ăn.
- Số trong tab đối chiếu với data bằng script quét QA chung, không lấy từ báo cáo tác giả. Mục art có mô phỏng mù màu (đếm cặp chỉ tách bằng đỏ so với xanh lá). Báo cáo luôn nói rõ phần chưa kiểm (Sheet trực tuyến, chơi thật khi chưa có build).
- Script quét QA chung: `node .claude/skills/gdd-review/scripts/quet.mjs --selftest` (bắt lại lỗi cũ của game chữ rơi) rồi `node .claude/skills/gdd-review/scripts/quet.mjs --project <slug> --level <csv> --chan lock,ice,link,stone --tran-chan 0.5 --tran-tong 0.8 --dem coin --dem-tu <TỪ1,TỪ2> --moc-ten "lock=Lock,coin=Coin" --gon <gọn.tsv> --nguon <nguồn.tsv> --bo-qua-cot 7 --doc <thư mục hoặc file>`. Một lệnh in bảng: giờ sửa (`--gio <file> --luu` rồi `--doi` để biết file đổi sau lần lưu), bản gọn so với nguồn từng ô, cấu trúc level và trần mật độ, số level ghi cạnh từ, ví dụ L<n> với data, mốc mechanic, từ cũ trong `projects/<slug>/qa/tu-cu.txt` (dòng "cũ -> mới", GDM hoặc gd-qa thêm sau mỗi quyết định đổi tên), gạch dài và emoji. Thoát mã 1 khi có LỖI. Bỏ qua file ghi tạm gác, lịch sử, v0.5-goc, QA, DECISIONS và mục phụ lục.

## Câu hỏi phải tự trả lời trước khi báo xong
- Lead mở lên chơi 2 phút có thấy lỗi nào tôi chưa thấy không?
- Có tiêu chí nào tôi chấm theo lời người làm mà chưa tự tái hiện không?
- Có level nào bot thắng mà người thường không thắng nổi (hoặc ngược lại) chưa truy nguyên?
- Môi trường nào tôi không kiểm được đã ghi vào "Bỏ qua" chưa?

## Lỗi hay gặp

- Bài kiểm năng lực: chấm "BLOCKED một phần" cho việc đã làm đủ phạm vi đề -> nhầm BLOCKED với "chưa có số đo" -> BLOCKED chỉ khi không làm được việc được giao. Phần không kiểm được ghi ở mục "Bỏ qua".
- Game tile chữ nhiều tầng: máy chấm 10/10 "đạt" bốn lần liên tiếp mà soi mắt đều có lỗi -> cổng soi mắt + chơi thật bắt buộc. Lỗi mới thành cổng trong build-levels.
- game-tycoon-a: "playtest" là script, file tự ghi "không phải người chơi thật". QA ĐẠT Sprint 3 nhưng Founder chê "chưa có gì đáng thử" -> playtest người thật ở mốc. Kiểm theo GDD.
- Game tile chữ nhiều tầng: báo "quân đặt lệch" hóa ra Unity lật bàn do thiếu marker -> so ảnh với tọa độ JSON trước khi kết luận.
- Game path: AI báo thua trong khi người thắng -> luật thua đúng, lỗi ở thông điệp -> dựng ca kiểm chứng trước khi sửa heuristic.
- Harness bấm DOM khi pane ẩn -> hiệu ứng dừng, kết quả sai -> gọi hàm qua hook.
- game-tycoon-a: `taskkill` node hàng loạt và mutation test trên bản chung làm hỏng phiên khác -> PID, bản sao.
- Game chữ rơi: kết luận ĐẠT lỗi thời sau 5-10 phút khi Lead đổi sang Đá và Coin. 10 tin rời bị app chặn -> không đọc lại giờ sửa và DECISIONS trước khi gửi, gửi tin lẻ -> bước kiểm lỗi thời và tin gộp (mục Phương pháp).
