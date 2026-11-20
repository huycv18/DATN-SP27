# Ca thử: doi-chieu 5 tab của một game chữ rơi (game ví dụ, chỉ đọc)

Sheet: Sheet GDD của game. Người chạy: gd-tools. Không sửa ô nào trên Sheet.

## Lệnh

```bash
S=.claude/skills/gdd-sheet-sync/scripts; W=projects/<slug>
node $S/goi.mjs $W/gdd/sheet/01-gameplay.tsv        --tab "Gameplay"
node $S/goi.mjs $W/gdd/sheet/02-main-task.tsv       --tab "Main Task"
node $S/goi.mjs $W/gdd/sheet/05-tutorials-sheet.tsv --tab "Tutorials"
node $S/goi.mjs $W/gdd/sheet/03-thuat-toan.tsv      --tab "Thuật toán level"
node $S/goi.mjs $W/levels/level-v1-sheet.csv        --tab "Level data" --o A3 --bo-dong-dau 1
```

Trên trang: nạp `trang.js`, rồi với từng payload `__ss.nap(...)` và `await __ss.doiChieu()`.

## Kết quả lần chạy cuối

| Tab | gid | Nguồn | Ô đầu | Hàng | Lệch | Hàng nhóm khớp theo chữ | Hàng thừa |
|---|---|---|---|---|---|---|---|
| Gameplay | 1943011912 | `gdd/sheet/01-gameplay.tsv` | A1 | 12 | 0 | - | 0 |
| Main Task | 362069165 | `gdd/sheet/02-main-task.tsv` | A1 | 34 | 0 | 2, 8, 13, 25, 28 | 0 |
| Tutorials | 2067873770 | `gdd/sheet/05-tutorials-sheet.tsv` | A1 | 19 | 0 | - | 0 |
| Thuật toán level | 871551600 | `gdd/sheet/03-thuat-toan.tsv` | A1 | 6 | 0 | - | 0 |
| Level data | 1897329277 | `levels/level-v1-sheet.csv` (bỏ hàng tiêu đề) | A3 | 50 | 0 | - | 0 |

- Hàng nhóm Main Task (GD, 2D ART, DEV, SFX, VFX): TSV ghi nhãn ở cột Hạng mục (B), trên Sheet là ô gộp A:G nên chữ nằm ở A. Đúng thiết kế, skill so theo chữ.
- Level data: tiêu đề tab (hàng 2: "difficulty point", "Word list") khác tiêu đề CSV ("difficulty_point", "word_list") nên so từ hàng dữ liệu A3. 50 level khớp từng ô.

## Lần chạy đầu bắt được gì

| Tab | Phát hiện | Xử lý |
|---|---|---|
| Main Task | 5 hàng nhóm lệch cột (nhãn ở B trong TSV, ở A trên Sheet) | Thêm so hàng nhóm theo chữ (`nhom` trong payload) |
| Tutorials | Hàng 2: TSV ghi "Quy tắc chung:" (có dấu hai chấm), Sheet và HTML ghi "Quy tắc chung" | Sửa `sinh-05-tutorials-sheet.mjs` cho TSV giống HTML |

## Vùng trên tab chưa có nguồn trong repo

| Tab | Vùng | Nội dung | Ghi chú |
|---|---|---|---|
| Level data | A1 | Tiêu đề "LEVEL DATA" | Trình bày |
| Level data | A2:G2 | Tiêu đề cột | Khác tên cột CSV, xem trên |
| Level data | I2:J? | Bảng DIFFICULTY CURVE (điểm 0-4, chuỗi curve order) | Không có file nguồn trong `gdd/sheet/`. Nên tách thành TSV riêng nếu muốn đối chiếu |
| Level data | A54:B64 | "GIẢI THÍCH CỘT" dạng 2 cột (Cột, Ý nghĩa) | `04-level-data-chu-thich.tsv` viết theo hàng (tên cột ở hàng 1, ý nghĩa ở hàng 2) nên không so được. Nội dung trên Sheet đã khác file (có dòng "coin, stone") |
