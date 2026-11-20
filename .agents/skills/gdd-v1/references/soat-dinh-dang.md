# Soát định dạng: định nghĩa từng phép kiểm

Script: `scripts/soat.mjs`. Chạy: `node .claude/skills/gdd-v1/scripts/soat.mjs <file...> [--tu-vung <file>] [--loai he-thong|mini|sheet]`. Thoát mã 1 khi còn Lỗi. Mức: Lỗi (phải sửa) và Cảnh báo (giải thích trong báo cáo nếu giữ). Mọi phép kiểm bỏ qua nội dung trong khối mã (ba dấu backtick).

| Kiểm | Mức | Định nghĩa | Lý do (nguồn) |
|---|---|---|---|
| Gạch dài, gạch ngắn | Lỗi | Ký tự U+2013, U+2014, U+2212 ở bất kỳ đâu. Dấu "-" ASCII được phép, kể cả khoảng số "3-5", "L1-15" | Lead: gạch dài đọc như AI viết |
| Emoji và ký tự trang trí | Lỗi | Ký tự thuộc Extended_Pictographic, ký tự chọn biến thể U+FE0F, dấu tick U+2713, U+2714, U+2705, U+274C, mũi tên unicode U+2190 đến U+2193 | Cùng nguồn. "->" ASCII được phép |
| "Giống game X" | Lỗi | Cụm "làm giống", "giống game", "giống như game", "như game", "kiểu game", "tương tự game", "y như", "giống hệt" | Lead bắt chép nguyên văn từng mục Anim, Sfx của game tham chiếu |
| Tên biến code | Lỗi | Từ camelCase (iceCount), snake_case (ice_count), hoặc đoạn trong backtick có dạng định danh. Tên thương hiệu của studio và tên dạng iPhone, iOS không tính. Bỏ qua trong mục có tiêu đề chứa "engineer", "tool", "kỹ thuật", "Level Data", "lịch sử" và ô thuộc cột "File" | knowledge 50: tên biến code không lộ ra UI hay doc |
| Số trong văn xuôi | Lỗi | Đoạn văn xuôi (không phải bảng, không phải dòng luật đánh số, không phải tiêu đề, không phải gạch đầu dòng) chứa từ 2 giá trị số trở lên. Không đếm ngày dd/mm, mã level L16, mã TB1 V2 S3, số mục 3.2 | Protocol chung: số liệu để trong bảng, không chôn trong văn xuôi |
| Từ không phải từ của Lead | Lỗi | Từ nằm trong cột "Không dùng" của file tu-vung (khớp cả từ, không phân biệt hoa thường). Bỏ qua trong các mục miễn trừ của phép kiểm tên biến code. Không có file thì bỏ qua và báo "chưa có tu-vung" | "hàng chờ" không "khay", "bóng" không "kiến" |
| Luật chưa đánh số | Lỗi | Trong mục có tiêu đề bắt đầu bằng "Luật" (sau số thứ tự): dòng bắt đầu bằng "-" hoặc "*" | Template: luật đánh số, câu khẳng định |
| Từ mơ hồ trong luật | Lỗi | Trong dòng luật đánh số của mục "Luật": "thường", "có thể", "khá", "nên", "hầu như", "tương đối", "đôi khi", "gần như", "có lẽ". Ngoại lệ: "quân thường", "người thường", "bình thường", "thường xuyên". "nên" đứng sau dấu phẩy là liên từ, không tính | Template |
| Trường hợp biên dưới 4 | Lỗi (he-thong, mini) | Mục có tiêu đề chứa "biên": đếm hàng bảng (trừ tiêu đề và dòng gạch) cộng dòng đánh số và gạch đầu dòng. Dưới 4 là lỗi. Hàng bảng có ô phán quyết trống là lỗi | Template: biên tối thiểu 4 |
| Tiêu chí nghiệm thu không đo được | Cảnh báo | Mục có tiêu đề chứa "nghiệm thu" hoặc "Acceptance": mỗi dòng đánh số hoặc gạch đầu dòng phải chứa số, "%", hoặc một trong "thấy", "không có", "bằng", "đúng", "pass", "ra" | CCGS Acceptance Criteria, knowledge 85 |
| Thiếu mục nghiệm thu | Lỗi (he-thong, mini) | Không có mục nào tiêu đề chứa "nghiệm thu" | Khuôn |
| Tiếng Việt không dấu | Cảnh báo | Từ nguyên không dấu hay gặp: khong, duoc, nguoi, choi, luat, truoc, thang, thua, nhat | Lead đã nhắc |
| [GIẢ ĐỊNH] | Thông tin | Đếm số lần xuất hiện, in danh sách dòng | Protocol: đánh dấu suy luận |
| Mục trống | Cảnh báo | Tiêu đề mục mà nội dung tới tiêu đề sau chỉ có chữ giữ chỗ hoặc trống. Mục cha có mục con không tính | Chế độ cập nhật |

## Định dạng bảng kết quả

```
| Kiểm | Kết quả | Vị trí |
|---|---|---|
| Gạch dài, gạch ngắn | 0 | |
| Emoji | 2 lỗi | L14, L88 |
...
Lỗi: 2. Cảnh báo: 1. [GIẢ ĐỊNH]: 3 (L20, L45, L71).
```

Vị trí là số dòng trong file (L kèm số), tối đa 5 vị trí mỗi phép kiểm, phần còn lại ghi "+n".

## Soát cả project (`--project <slug>`)

- Lệnh: `node .claude/skills/gdd-v1/scripts/soat.mjs --project <slug>`. Soát từ vựng mọi file md, tsv dưới `projects/<slug>/`, kể cả `tham-chieu/`.
- Bỏ qua: thư mục `qa/` (thêm `--ca-qa` để soát cả qa), file có "nguyen-van" trong tên, thư mục `v0.5-goc` và `tmp`.
- Bỏ chữ trong ngoặc kép và trong backtick trước khi soát, vì đó là lời trích hoặc tên file.
- Từ đa nghĩa: ghi trong cột "Không dùng" của tu-vung theo dạng `từ [cùng câu: cụm 1/cụm 2]`. Từ đó chỉ bị báo khi đứng cùng câu với một trong các cụm. Ví dụ `khay [cùng câu: đầy/thua/7 ô]` bắt "khay" dùng cho hàng chờ mà không báo "Khay chứa quân".
- Ghi chú phần trong ngoặc của từ cấm (ví dụ "tile (trong doc tiếng Việt)") bị coi là một phần của từ nên không bao giờ khớp. Muốn cấm thật thì ghi dạng `tile [cùng câu: quân]`.

## Cảnh báo "Ví dụ gắn data level"

| Kiểm | Mức | Định nghĩa | Lý do (nguồn) |
|---|---|---|---|
| Ví dụ gắn data level | Cảnh báo | Dòng trong `gdd/` có mã level (L1, L28) đi cùng từ in hoa (trừ viết tắt GDD, QA, CSV và tương tự) hoặc số quân từ 5 trở lên. Dòng đã ghi "theo <file>.csv" thì không báo | Lỗi G1 review-v1-dot2 (20/10/2026): luật ghi "L1 DOVE, BIRD, DOG = 11 quân", data đổi thành CAT, BIRD, DOG = 10 quân. Sửa: dùng ví dụ không gắn level, hoặc ghi "theo <file data> ngày ..." |

Selftest: `node .claude/skills/gdd-v1/scripts/soat-selftest.mjs` (bắt lại G1).

## Giới hạn

Script bắt định dạng và cấu trúc, không bắt nội dung sai luật. Soát nội dung (mâu thuẫn với DECISIONS, công thức sai với ảnh game, luật thiếu ca thua) vẫn là việc của người viết và của bước review (skill `/gdd-review` chưa có, knowledge 85 mục 3).
