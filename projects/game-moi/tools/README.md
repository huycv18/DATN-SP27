# tools/ game-moi (gd-tech)

Máy chấm GDD và sim. Node 18 trở lên, không cần cài thư viện. Chạy từ gốc repo. Script Python cần Python 3.12 và `python -m pip install --user openpyxl`, chạy bằng `python -P -X utf8` (không dùng `-I` vì `-I` bỏ thư viện cài kiểu `--user`). Mô tả luật và quyết định: `gdd/he-thong/ky-thuat.md`.

| Lệnh | Làm gì | Ra |
|---|---|---|
| `node projects/game-moi/tools/selftest.mjs` | Selftest mọi tool (ca tính tay, cùng seed cùng kết quả, bộ lỗi cố ý). Chạy trước khi báo xong | thoát 0 khi đạt |
| `node projects/game-moi/tools/validate-gdd.mjs [--ra projects/game-moi/tools/ket-qua/validate-gdd.md]` | Kiểm chéo mọi file `gdd/he-thong/*.md`, in bảng lỗi theo vai, file, dòng | thoát 1 khi có lỗi |
| `node projects/game-moi/tools/sim-chuyen.mjs [--seed 1] [--lan 2000] [--ra projects/game-moi/tools/ket-qua/sim-chuyen.md]` | Sim chuyến: thời lượng, lượng nhặt, ngạt, beacon theo chương, kịch bản, số người. Độ nhạy túi và mật độ, tìm k(N) | `tools/ket-qua/sim-chuyen.md` |
| `node projects/game-moi/tools/sim-ca-cang.mjs [--seed 1] [--lan 300] [--ra projects/game-moi/tools/ket-qua/sim-ca-cang.md]` | Sim ca cảng khung Dave (đợt 9): 1 tới 4 người, số tàu theo N, cửa neo, 3 kiểu danh mục, bơm khí | `tools/ket-qua/sim-ca-cang.md` |
| `node projects/game-moi/tools/sim-combat.mjs [--seed 1] [--lan 2000] [--ra projects/game-moi/tools/ket-qua/sim-combat.md]` | Sim combat S1 phần trận, S2, S3, S4, S5 boss BS-1 | `tools/ket-qua/sim-combat.md` |

Prototype ca cảng khung Dave: `prototype/ca-cang-dave.html`, mở thẳng bằng trình duyệt. Prototype bay: `prototype/bay.html`, mở qua http trên cổng riêng (`python -m http.server 8791 --bind 127.0.0.1` trong thư mục `prototype/`, tắt đúng tiến trình đó khi xong). Thanh chỉnh bên phải, nút Xuất JSON, phím T thử né.

Cờ `--khong-gio` bỏ giờ chạy khỏi file kết quả để so hai lần chạy bằng diff (hash tham số vẫn in).

Tham số: `tham-so/chuyen.json`, `tham-so/ca-cang.json`, `tham-so/combat.json`. Mỗi khóa có `_nguon`. Số gd-tech tự đặt có nhãn `[GIẢ ĐỊNH]` và được in ở đầu file kết quả. Số của vai khác được đọc thẳng từ GDD, không chép tay: khối NODE, SPECIES, ITEM, CGOTHUNG của `vat-pham.md`, khối gia-kien của `kinh-te-tien-trinh.md`, bảng Danh mục, 3.4 và 3.4b của `combat-driftlife.md`, bảng a theo dải ở `map.md` 3.8.

Vai đổi số: sửa GDD hoặc file tham số, chạy lại lệnh sim, đọc file kết quả. Không chép số từ file kết quả vào GDD bằng tay, trỏ tới file.

## Sheet GDD

| Lệnh (chạy ở gốc repo) | Làm gì |
|---|---|
| `node projects/game-moi/tools/xuat-event-tracking.mjs` | Sinh `gdd/sheet/Event Tracking.tsv` từ bảng sự kiện của `ky-thuat.md` mục 2.4. Thêm `--kiem` để chỉ báo TSV có cũ hơn GDD không. Từ đợt 8 (2026-11-20) tab là bản đọc sửa tay, không chạy lệnh ghi đè nữa |
| `node projects/game-moi/tools/kiem-de-doc.mjs [--tab "<Tab>"] [--tat-ca]` | Cổng Sheet dễ đọc: cột ID là số thứ tự, không còn mã trong chữ, không gạch dài, chấm phẩy, emoji, đường dẫn dài, dòng quá 300 ký tự. Thoát 1 khi có lỗi. Luật ở `briefs/dot8-gdd-de-doc.md` |
| `node projects/game-moi/tools/dinh-dang-sheet.mjs <ra.json>` | Sinh lệnh định dạng thân bảng mọi tab (viền, font, wrap, cao dòng, màu tab) theo số hàng TSV. Dán vào `update_spreadsheet` sau khi tab thêm hàng |
| `node projects/game-moi/tools/doi-chieu-sheet.mjs` | So mọi `gdd/sheet/<Tab>.tsv` với tab cùng tên trên Sheet qua export CSV, in bảng ô lệch và hàng thừa. Thoát 1 khi có tab lệch |
| `node projects/game-moi/tools/doi-chieu-sheet.mjs --tab "Customer" --ra <file.md>` | Chỉ một tab, ghi kết quả ra file |
| `python -X utf8 -I projects/game-moi/tools/ban-do-tri-thuc/trich_sao.py` | Sinh lại `ban-do-tri-thuc/sao.json` (cây sao từ 11 GDD, trọng số và liên hệ chéo từ `graphify-out/graph.json`). Chạy sau khi sửa GDD hoặc làm mới graphify |
| `python -m http.server 8791` trong `ban-do-tri-thuc/`, mở `http://127.0.0.1:8791/` | Xem bản đồ sao ở máy (trang đọc `sao.json` nên không mở thẳng file được). Bản đăng: claude.ai/artifact/4Kji863AvcdJYsxHp9DpMt |

Quy ước cho mọi vai: tên file TSV trùng tên tab, hàng 1 của TSV là header và ứng với hàng 2 của tab (hàng 1 là tiêu đề tab), xuống dòng trong ô ghi `\n`. gid các tab ở `tham-so/sheet.json`. Sheet phải chia sẻ bằng link (đọc không cần đăng nhập), nếu không thì dùng `/gdd-sheet-sync doi-chieu` qua trình duyệt.
