# Đợt 10 game-moi: Doc thiết kế 2 phần, mục mẫu và script gộp (2026-11-23)

Lead: "Oke để học theo các làm này của họ hãy lên kế hoạch xem cần làm những gì trước", rồi chốt "Tiếng Việt, 2 phần".
Nguồn việc: `projects/game-moi/DECISIONS.md` mục 2026-11-23 "Tài liệu nộp: Doc thiết kế 2 phần, tiếng Việt". Khuôn: `projects/game-moi/book/KHUON.md`.

## Ai làm gì

| Mã | Việc | Agent | Ghi vào |
|---|---|---|---|
| GD-058 | Mục mẫu II.6 Trạm và cảng | gd-quan (opus) | `projects/game-moi/book/phan-2/06-tram-va-cang.md` |
| GD-059 | Cổng kiểm khuôn, script gộp, cách xuất sơ đồ và Google Doc | gd-tech (sonnet) | `projects/game-moi/tools/kiem-book.mjs`, `projects/game-moi/tools/gop-book.mjs`, test trong `projects/game-moi/tools/selftest.mjs` |

Hai việc chạy song song. gd-tech viết cổng theo `KHUON.md`, không chờ mục mẫu. Khi mục mẫu có bản nháp, gd-tech chạy cổng lên file đó để thử, báo lỗi trong báo cáo, không sửa file của gd-quan.

## GD-058 gd-quan: mục mẫu II.6

**Mục tiêu.** Viết mục II.6 Trạm và cảng của Phần II theo đúng `KHUON.md`. Đây là mục mẫu: GDM duyệt xong sẽ chép cách viết của mục này sang 8 mục còn lại, nên mục này phải cho thấy đủ các dạng nội dung: văn xuôi giải thích, bảng số, công thức có giải nghĩa biến, ít nhất 2 sơ đồ luồng (ca cảng một tàu từ lúc cập tới lúc rời, và vòng sửa khoang hoặc đánh thức người vớt), chú thích hình, chỗ chờ ảnh, mục Ngoài MVP. Người đọc là hội đồng chấm và dev mới, chưa đọc GDD.

**Đọc trước.**
- `projects/game-moi/book/KHUON.md` (bắt buộc, toàn bộ)
- `projects/game-moi/DECISIONS.md` các mục ngày 2026-11-20 tới 2026-11-23, `projects/game-moi/so-hien-hanh.md`
- `projects/game-moi/gdd/he-thong/tram-va-cang.md` mục Tóm tắt, Danh mục, 2. Luật, 3. Tham số, 4. Trường hợp biên. Bỏ qua mục Điểm tự quyết, Phản biện khung, Lịch sử thay đổi.
- `projects/game-moi/gdd/00-khung-game.md` mục 4 và mục 10 Từ điển
- `projects/game-moi/gdd/sheet/Customer.tsv` để biết tên tab và cột trỏ tới
- Cách viết tham chiếu: `docs/knowledge/indie/35-management-sim.md` chỉ khi cần

**Ghi vào.** `projects/game-moi/book/phan-2/06-tram-va-cang.md`. Không sửa GDD hệ thống, không sửa Sheet, không sửa file khác trong `book/`.

**Tiêu chí hoàn thành.**
- Mở file thấy đủ khuôn: đoạn mở, II.6.1 Tổng quan, các mục luật, II.6.z Ngoài MVP. Dài 120 tới 300 dòng.
- Ít nhất 2 khối mermaid `flowchart TD`, mỗi khối có chú thích `*Hình II.6.k - ...*` và một đoạn đọc sơ đồ.
- Mọi số trong mục tìm được trong `tram-va-cang.md`, `so-hien-hanh.md` hoặc TSV của Sheet. Báo cáo kèm bảng "số trong mục, nguồn".
- `node .claude/skills/gdd-v1/scripts/soat.mjs projects/game-moi/book/phan-2/06-tram-va-cang.md` 0 lỗi. Khi `kiem-book.mjs` của gd-tech có thì chạy thêm.
- Chỗ lệch giữa các nguồn ghi `[LỆCH: ...]` và liệt kê trong báo cáo.

**Giới hạn.** Không đặt luật hay số mới. Phần nào không biết có thuộc MVP không thì đưa vào Ngoài MVP và ghi trong báo cáo. Không commit.

## GD-059 gd-tech: cổng kiểm và script gộp

**Mục tiêu.** Dựng máy cho Doc thiết kế để 9 mục do 8 người viết ra cùng một khuôn và gộp được thành một tài liệu. Ba việc:
1. `kiem-book.mjs <file|thư mục>`: kiểm luật 2 tới 9 của `KHUON.md` làm được bằng máy. Tối thiểu: heading đúng dạng `## II.n.` và `### II.n.k.` đánh số liên tục, có mục Tổng quan và Ngoài MVP, có ít nhất 1 khối mermaid, mỗi khối mermaid và mỗi `[CHỜ ẢNH` có chú thích `*Hình II.n.k - ...*` đúng số mục, tên tab nhắc tới có trong `tools/tham-so/sheet.json`, không gạch dài, không dấu chấm phẩy, không emoji, không ID nội bộ dạng `[A-Z]{2,4}-\d{2,3}`, độ dài 120 tới 300 dòng, đếm `[LỆCH` và `[CHỜ ẢNH`. In bảng lỗi theo file và dòng, mã thoát khác 0 khi có lỗi.
2. `gop-book.mjs`: gộp `book/phan-1/*.md` rồi `book/phan-2/*.md` theo thứ tự tên file thành `book/ket-qua/book.md`, thêm tiêu đề, mục lục và đánh số hình xuyên suốt. Thiếu file nào trong mục lục của `KHUON.md` thì ghi dòng "chưa viết" vào mục lục, không dừng.
3. Đề xuất cách xuất sơ đồ mermaid thành ảnh và bản gộp thành Google Doc. Thử nhiều nhất 2 cách và so sánh chúng. Không cài gói toàn cục, không gửi nội dung lên dịch vụ ngoài khi chưa hỏi GDM. Cách nào cần thêm dependency thì ghi tên gói, dung lượng và lệnh, để GDM quyết.

**Đọc trước.** `projects/game-moi/book/KHUON.md`, `projects/game-moi/tools/README.md`, `projects/game-moi/tools/lib.mjs`, `projects/game-moi/tools/kiem-de-doc.mjs` (lấy cách viết cổng đang dùng), `projects/game-moi/tools/selftest.mjs`.

**Ghi vào.** `projects/game-moi/tools/kiem-book.mjs`, `projects/game-moi/tools/gop-book.mjs`, thêm test vào `selftest.mjs`, thêm 2 dòng vào `projects/game-moi/tools/README.md`. Không sửa `book/phan-2/*.md`.

**Tiêu chí hoàn thành.**
- `node projects/game-moi/tools/selftest.mjs` ĐẠT, có ít nhất 1 ca file đúng khuôn qua cổng và 1 ca sai khuôn bị bắt, cả hai dùng file mẫu tạm, không dùng file thật của vai.
- `node projects/game-moi/tools/gop-book.mjs` chạy khi `phan-2` mới có 0 hoặc 1 file, ra `book/ket-qua/book.md` có mục lục 9 dòng.
- Báo cáo có bảng so sánh cách xuất sơ đồ và Google Doc kèm đề xuất.

**Giới hạn.** Dùng Node có sẵn, không thêm dependency. Không commit.

## Luật chung

- Mỗi vai chỉ sửa file trong cột Ghi vào. Không sửa Google Sheet.
- Tiếng Việt có dấu, không gạch dài, không emoji, không dấu chấm phẩy.
- Xong báo GDM, dòng đầu `GD-### XONG|KẸT: <một câu>` kèm khối `## Báo cáo cho GDM`.
