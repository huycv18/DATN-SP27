# Khuôn Doc thiết kế The Novent

Doc thiết kế là tài liệu nộp cuối kỳ, viết tiếng Việt, 2 phần (Lead chốt 2026-11-23, xem `../DECISIONS.md`). Cấu trúc học từ "Tutorial - Book Of Timberwalls" của nhóm khóa trước: Phần I dạy người đọc điều khiển game, Phần II giải thích từng hệ thống bằng luật, công thức, bảng số và sơ đồ luồng, chi tiết dữ liệu để ở Sheet.

Người đọc: hội đồng chấm và dev mới vào nhóm. Họ chưa đọc GDD hệ thống, chưa biết từ nội bộ. Viết cho họ hiểu game chạy thế nào, không viết cho người trong phòng.

## Thư mục

```
book/
  KHUON.md                 file này
  phan-1/NN-<slug>.md      Phần I Điều khiển (chờ build, GD-066)
  phan-2/NN-<slug>.md      Phần II Thành phần game, mỗi hệ thống một file
  hinh/                    ảnh xuất từ sơ đồ và ảnh chụp build
  ket-qua/book.md          bản gộp do gop-book.mjs sinh, không sửa tay
```

## Mục lục Phần II

| Mục | File | Tiêu đề | Nội dung | GDD nguồn | Vai viết |
|---|---|---|---|---|---|
| II.1 | `01-mot-ngay.md` | Daily Cycle | Một ngày, thời gian, core loop | `00-khung-game.md` mục 4, tab Day, CORE LOOP | GDM |
| II.2 | `02-nguoi-choi.md` | Player | Di chuyển, bộ đẩy, Oxy, bộ đồ, đai dụng cụ | `nguoi-choi.md` | gd-character |
| II.3 | `03-map-va-chuyen.md` | Map and Expeditions | Map, chuyến ra ngoài, hazard | `map.md` | gd-world |
| II.4 | `04-combat-driftlife.md` | Combat and Driftlife | Combat, bắt sống, Driftlife, The Wardens, boss | `combat-driftlife.md` | gd-combat |
| II.5 | `05-vat-pham.md` | Items and Crafting | Tài nguyên, vật phẩm, dụng cụ, công thức, thùng | `vat-pham.md` | gd-items |
| II.6 | `06-tram-va-cang.md` | Station and Port | Khoang, người vớt, ca cảng, Hạng cảng, nuôi | `tram-va-cang.md` | gd-quan (mục mẫu) |
| II.7 | `07-kinh-te-tien-trinh.md` | Economy and Progression | Tally, giá, nâng cấp, 5 chương | `kinh-te-tien-trinh.md` | gd-economy |
| II.8 | `08-co-op-va-luu.md` | Co-op and Saving | Co-op 2 người MVP, vào giữa chừng, lưu | `ky-thuat.md` mục 2.2 tới 2.3b | gd-tech |
| II.9 | `09-cot-truyen-ket-thuc.md` | Story and Ending | Bối cảnh, 5 chương truyện, kết thúc trạm rời neo | `cot-truyen.md` | gd-story |

Mọi tiêu đề (tên Doc, tên phần, `##`, `###`) viết tiếng Anh, thân văn, bảng, chú thích hình viết tiếng Việt (Lead 2026-11-23). Tiêu đề `##` của mục lấy đúng cột Tiêu đề ở bảng trên.

## Khuôn một mục Phần II

```
## II.n. <Tiêu đề tiếng Anh theo bảng mục lục>

<Một đoạn 2 tới 4 câu: hệ thống này làm gì trong game, nối với hệ thống nào. Người đọc đọc xong đoạn này phải biết có nên đọc tiếp không.>

### II.n.1. Overview
<Hệ thống vận hành ra sao ở mức một vòng chơi. Không số, không ngoại lệ.>

### II.n.2. <Tên phần luật thứ nhất, tiếng Anh>
<Văn xuôi giải thích luật theo thứ tự người chơi gặp.>
<Bảng số khi có từ 3 giá trị trở lên.>
<Công thức trong khối công thức, sau đó giải nghĩa từng biến, mỗi biến một gạch đầu dòng, có đơn vị.>
<Sơ đồ luồng khi luật có rẽ nhánh, ngay sau đó là một đoạn đọc sơ đồ từ đầu tới cuối.>
<Chi tiết dữ liệu: tab <Tên tab> trên Sheet GDD.>

### II.n.k. ...

### II.n.<áp chót>. <Two-player Co-op and> Acceptance Criteria
<Khác biệt khi co-op 2 người nếu có. Bảng mục tiêu số của hệ thống và kết quả sim nếu đã có. Thứ sim chưa đo được thì nói chờ playtest.>

### II.n.<chót>. Edge Cases
<Bảng Tình huống, Phán quyết, ít nhất 4 dòng, chọn ca dev hay hỏi nhất.>

### II.n.z. Post-MVP
<Một gạch đầu dòng mỗi phần của bản đủ, không giải thích luật.>
```

Mục mẫu đã duyệt: `phan-2/06-tram-va-cang.md`. Viết mục mới thì đọc mục mẫu trước, chép cách viết, không chép nội dung.

## Luật viết

1. Chỉ dẫn lại luật và số đã có. Nguồn theo thứ tự: `so-hien-hanh.md`, GDD hệ thống của mục, Sheet. Không đặt luật mới, không đặt số mới, không làm tròn số khác nguồn. Hai nguồn lệch nhau: ghi `[LỆCH: <nguồn A> nói X, <nguồn B> nói Y]` tại chỗ và báo GDM, không tự chọn.
2. Chỉ phần MVP được giải thích đầy đủ. Phần ngoài MVP gom vào mục con cuối "Post-MVP".
3. Mỗi mục có ít nhất 1 sơ đồ luồng. Chọn luồng có rẽ nhánh khó hiểu nhất của hệ thống (ví dụ: tàu cập, chờ, nhận thùng hay bỏ đi). Viết bằng khối ` ```mermaid ` dạng `flowchart TD`, nút tiếng Việt ngắn, nhánh ghi điều kiện. Tối đa khoảng 15 nút một sơ đồ, nhiều hơn thì tách.
4. Mỗi sơ đồ và mỗi chỗ cần ảnh có chú thích dòng riêng ngay dưới, dạng `*Hình II.n.k - <mô tả>*`. Chỗ cần ảnh build hay wireframe mà chưa có ảnh thì vẫn ghi chú thích và thêm `[CHỜ ẢNH: <ảnh gì, lấy từ đâu>]`.
5. Công thức viết dạng chữ trong khối ` ```text `, tên biến tiếng Việt không dấu cách, ví dụ `TallyThung = GiaThung * (1 + TipTheoKienNhan)`. Mỗi biến giải nghĩa có đơn vị và nguồn số.
6. Dùng đúng từ trong `00-khung-game.md` mục 10 Từ điển. Lần đầu một từ riêng của game xuất hiện trong mục thì in đậm và giải nghĩa nửa câu.
7. Không chép ID nội bộ (STY-501, HUD-16, log 98...) vào thân văn. Cần trỏ tới thì ghi tên tab Sheet.
8. Văn phong: tiếng Việt có dấu, thuật ngữ game giữ tiếng Anh, không emoji, không gạch dài, không dấu chấm phẩy. Câu kể chuyện vận hành, không viết kiểu ghi chú. Không lịch sử thay đổi, không "đã bỏ", không "trước đây".
9. Độ dài: 120 tới 300 dòng một mục. Dài hơn thì cắt chi tiết xuống Sheet.
10. Một dòng văn xuôi có từ 2 số trở lên thì tách thành gạch đầu dòng hoặc bảng. Chú thích hình cũng tính là văn xuôi.
11. Ở dòng giải nghĩa công thức, tên biến viết thường, không bọc backtick.
12. Chú thích hình đặt ngay dưới khối mermaid hoặc ngay dưới dòng `[CHỜ ẢNH`. Mục cuối ghi đúng `### II.n.z. Post-MVP`.
13. Được thêm ví dụ tính bằng số lấy từ nguồn, mở đầu bằng chữ "Ví dụ" để người đọc biết số kết quả là phép tính, không phải số cân bằng mới.

## Kiểm

- `node projects/game-moi/tools/kiem-book.mjs <file>`: khuôn, đánh số, sơ đồ, chú thích hình, tab Sheet có thật, văn phong (gd-tech viết, GD-059).
- `node .claude/skills/gdd-v1/scripts/soat.mjs <file>`: soát chữ chung của phòng.
- gd-qa nghiệm thu khớp số với GDD và Sheet (GD-061).
