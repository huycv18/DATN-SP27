# Ca thử skill /gdd-v1: mechanic quân băng của game tile chữ nhiều tầng (game ví dụ, 20/10/2026)

Mục đích: chạy đủ ba loại đầu ra của skill trên một mechanic có luật đã chốt (GDD markdown game tile chữ nhiều tầng mục 5.2, DECISIONS 29/09 và 30/09/2026, knowledge 25 và 50) để kiểm khuôn, bước hỏi đáp và script soát. Đích ghi thật của skill là `projects/<slug>/gdd/`. Ca thử ghi vào thư mục này để không tạo project thật.

## Lệnh đã chạy (tương đương)

| Lệnh | Đầu ra trong thư mục này |
|---|---|
| `/gdd-v1 he-thong vat-dong-bang --project <slug>` | `hoi-dap/vat-dong-bang.md`, `he-thong/vat-dong-bang.md` |
| `/gdd-v1 mini <slug>` | `mini-gdd.md` |
| `/gdd-v1 sheet <slug>` | `sheet/01` đến `06` dạng `.tsv` và `.html`, `sheet/README.md` |
| Soát | `soat/vat-dong-bang.md` |

Script phụ: `scripts/level-data-tile-chu.mjs` đọc số thật L16 đến L25 từ `<repo game>/levels/` cho tab Level Data (cột Chủ đề trống vì file level không có trường chủ đề. Chữ gợi ý tính theo chỉ số 0 của từ, chữ đầu luôn ẩn).

## Hỏi đáp một lượt

Danh sách 10 câu, mỗi câu có phương án nghiêng về. Ca thử không có Lead nên câu 3 và 5 trả lời từ GDD markdown, 8 câu còn lại điền theo phương án nghiêng về và đánh `[GIẢ ĐỊNH]` tại chỗ dùng. Tổng 28 chỗ `[GIẢ ĐỊNH]` trong cả bộ, liệt kê ở file soát.

## Điều ca thử phát hiện (đáng báo Lead thật)

- File L16 đến L18 đang chơi có 4 đến 5 quân băng số 5 và 6, trong khi mốc chốt 30/09 là L16 băng 1 quân từ đầu ván, L17 và L18 băng 2 quân. Mật độ chặng L16 đến 25 là 1 đến 3 quân. Số thật đọc bằng script lệch mốc, đã thành câu hỏi mở 1 của GDD hệ thống và hàng #9 Main Task.
- Bản đồ mechanic 15 level cho prototype phải nén mốc (úp L4, băng L9) vì mốc thật L6 và L16 không vừa 15 level. Đánh `[GIẢ ĐỊNH]`.

## Kết quả soát

Chạy `node .claude/skills/gdd-v1/scripts/soat.mjs <8 file> --tu-vung tu-vung.md`: Lỗi 0, Cảnh báo 0, `[GIẢ ĐỊNH]` 28. Bảng đầy đủ: `soat/vat-dong-bang.md`.

Lần soát đầu ra 32 lỗi. Phần lớn là lỗi thật của bản nháp (số trong văn xuôi ở mục trục độ khó, cụm so sánh với game khác, từ mơ hồ "nên nhắm" và "có thể"), phần còn lại là ngưỡng script quá chặt và đã sửa script: "nên" sau dấu phẩy là liên từ. Mục cha có mục con không tính trống. Tên thương hiệu của studio không tính là tên biến. Mục "Ràng buộc vật lý của luật" không phải mục Luật. Từ cấm trong tu-vung phải là cụm đủ dài (bỏ "mở", "yêu cầu" vì quá chung).

## Chưa thử

- Chế độ cập nhật (mục 6 của SKILL.md) chưa chạy trên file có sẵn. Chỉ mô tả trong `references/cap-nhat.md`.
- Dán HTML lên Google Sheet thật chưa làm (cần link sheet và quyền chỉnh sửa).
