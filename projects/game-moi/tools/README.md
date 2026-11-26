# tools/ game-moi (gd-tech)

Máy chấm GDD và sim. Node 18 trở lên, không cần cài thư viện. Chạy từ gốc repo. Script Python cần Python 3.12 và `python -m pip install --user openpyxl`, chạy bằng `python -P -X utf8` (không dùng `-I` vì `-I` bỏ thư viện cài kiểu `--user`). Mô tả luật và quyết định: `gdd/he-thong/ky-thuat.md`.

| Lệnh | Làm gì | Ra |
|---|---|---|
| `node projects/game-moi/tools/selftest.mjs` | Selftest mọi tool (giờ giao thương tính tay, cùng seed cùng kết quả, bộ lỗi cố ý). Chạy trước khi báo xong | thoát 0 khi đạt |
| `node projects/game-moi/tools/validate-gdd.mjs [--ra projects/game-moi/tools/ket-qua/validate-gdd.md]` | Kiểm chéo mọi file `gdd/he-thong/*.md`, in bảng lỗi theo vai, file, dòng | thoát 1 khi có lỗi |
| `node projects/game-moi/tools/sim-chuyen.mjs [--seed 1] [--lan 2000] [--ra projects/game-moi/tools/ket-qua/sim-chuyen.md]` | Sim chuyến: thời lượng, lượng nhặt, ngạt, beacon theo chương, kịch bản, số người. Độ nhạy túi và mật độ, tìm k(N) | `tools/ket-qua/sim-chuyen.md` |
| `node projects/game-moi/tools/sim-ca-cang.mjs [--seed 1] [--lan 300] [--ra projects/game-moi/tools/ket-qua/sim-ca-cang.md]` | Sim giờ giao thương khung Dave (đợt 9): 1 tới 4 người, số tàu theo N, cửa neo, 3 kiểu danh mục, bơm khí | `tools/ket-qua/sim-ca-cang.md` |
| `node projects/game-moi/tools/sim-combat.mjs [--seed 1] [--lan 2000] [--ra projects/game-moi/tools/ket-qua/sim-combat.md]` | Sim combat S1 phần trận, S2, S3, S4, S5 boss BS-1 | `tools/ket-qua/sim-combat.md` |
| `node projects/game-moi/tools/kiem-book.mjs <file.md|thư mục>` | Cổng khuôn Doc thiết kế (`book/KHUON.md`): heading II.n và II.n.k liên tục, Tổng quan và Ngoài MVP, mermaid có chú thích Hình đúng số mục, tên tab có trong `tham-so/sheet.json`, văn phong, ID nội bộ, 120 tới 300 dòng, đếm LỆCH và CHỜ ẢNH | thoát 1 khi có lỗi |
| `node projects/game-moi/tools/gop-book.mjs [--book <thư mục>]` | Gộp `book/phan-1` rồi `phan-2` thành `book/ket-qua/book.md`: tiêu đề, mục lục 9 mục Phần II (thiếu file ghi "chưa viết"), đánh số hình xuyên suốt. Không sửa file nguồn | `book/ket-qua/book.md` |
| `node projects/game-moi/tools/xuat-book.mjs [--chrome <đường dẫn>]` | Gộp như trên, vẽ mỗi khối mermaid thành `book/hinh/so-do-NN.png` bằng Chrome headless, rồi pandoc ra `book/ket-qua/book.docx`. Lead kéo docx vào Drive, mở bằng Google Docs. Cần `tools/vendor/` (không commit): `curl -L -o tools/vendor/mermaid.min.js https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js` và giải nén `https://github.com/jgm/pandoc/releases/download/3.1.11.1/pandoc-3.1.11.1-windows-x86_64.zip` vào `tools/vendor/` | `book/ket-qua/book.docx`, `book/hinh/so-do-*.png` |

Prototype giờ giao thương khung Dave: `prototype/ca-cang-dave.html`, mở thẳng bằng trình duyệt. Prototype một chuyến: `prototype/bay.html`, mở qua http trên cổng riêng (`python -m http.server 8791 --bind 127.0.0.1` trong thư mục `prototype/`, tắt đúng tiến trình đó khi xong, rồi mở `http://127.0.0.1:8791/bay.html`). Một chuyến đủ vòng ở Ember Mooring tới mảnh Thưởng, 3 cách về, màn kết chuyến, nút Chuyến mới, bài thử tiêu chí MVP 23 và 24, phím T thử né (tiêu chí 54). Thanh chỉnh bên phải. Nút Xuất JSON ra tham số và kết quả từng chuyến trong phiên (mất khi tải lại trang, nên xuất trước khi đóng). Tự kiểm: thêm `?kiem` vào URL, xem console in `KIEM ĐẠT`.

Cờ `--khong-gio` bỏ giờ chạy khỏi file kết quả để so hai lần chạy bằng diff (hash tham số vẫn in).

Tham số: `tham-so/chuyen.json`, `tham-so/ca-cang.json`, `tham-so/combat.json`. Mỗi khóa có `_nguon`. Số gd-tech tự đặt có nhãn `[GIẢ ĐỊNH]` và được in ở đầu file kết quả. Số của vai khác được đọc thẳng từ GDD, không chép tay: khối NODE, SPECIES, ITEM, CGOTHUNG của `vat-pham.md`, khối gia-kien của `kinh-te-tien-trinh.md`, bảng Danh mục, 3.4 và 3.4b của `combat-driftlife.md`, bảng a theo dải ở `map.md` 3.8.

Vai đổi số: sửa GDD hoặc file tham số, chạy lại lệnh sim, đọc file kết quả. Không chép số từ file kết quả vào GDD bằng tay, trỏ tới file.

## Sheet GDD

| Lệnh (chạy ở gốc repo) | Làm gì |
|---|---|
| `node projects/game-moi/tools/xuat-event-tracking.mjs` | Sinh `gdd/sheet/Event Tracking.tsv` từ bảng sự kiện của `ky-thuat.md` mục 2.4. Thêm `--kiem` để chỉ báo TSV có cũ hơn GDD không. Từ đợt 8 (2026-11-20) tab là bản đọc sửa tay, không chạy lệnh ghi đè nữa |
| `node projects/game-moi/tools/kiem-de-doc.mjs [--tab "<Tab>"] [--tat-ca]` | Cổng Sheet dễ đọc: cột ID là số thứ tự, không còn mã trong chữ, không gạch dài, chấm phẩy, emoji, đường dẫn dài, dòng quá 300 ký tự. Thoát 1 khi có lỗi. Luật ở `briefs/dot8-gdd-de-doc.md` |
| `node projects/game-moi/tools/dinh-dang-sheet.mjs <ra.json> ["Tab1,Tab2"]` | Sinh lệnh định dạng mọi tab hoặc các tab chỉ định theo khuôn indie mục 2: dòng 1 tiêu đề gộp ngang, dòng 2 header, cột STT đậm căn giữa, thân Lexend 10, viền, gộp ô khối Task, cao dòng, màu tab. Tab nhiều mục (GAME STORY) kẻ khung riêng từng mục. Dán vào `update_spreadsheet` sau mỗi lần dán chữ hay thêm hàng |
| `node projects/game-moi/tools/doi-chieu-sheet.mjs` | So mọi `gdd/sheet/<Tab>.tsv` với tab cùng tên trên Sheet qua export CSV, in bảng ô lệch và hàng thừa. Thoát 1 khi có tab lệch |
| `node projects/game-moi/tools/doi-chieu-sheet.mjs --tab "Customer" --ra <file.md>` | Chỉ một tab, ghi kết quả ra file |
| `python -X utf8 -I projects/game-moi/tools/ban-do-tri-thuc/trich_sao.py` | Sinh lại `ban-do-tri-thuc/sao.json` (cây sao từ 11 GDD, trọng số và liên hệ chéo từ `graphify-out/graph.json`) và `ban-do-mot-file.html` (nhúng sẵn dữ liệu, nháy đúp mở thẳng). Chạy sau khi sửa GDD, làm mới graphify hoặc sửa `index.html` |
| `python -m http.server 8791` trong `ban-do-tri-thuc/`, mở `http://127.0.0.1:8791/` | Xem bản đồ sao ở máy (trang đọc `sao.json` nên không mở thẳng file được). Bản đăng: claude.ai/artifact/4Kji863AvcdJYsxHp9DpMt |

Không chạy `ux/xuat-sheet.mjs` và `qa/xuat-checklist-tsv.mjs`: hai script này còn khuôn cũ, chạy sẽ ghi đè bản đọc sửa tay của WIREFRAME, Tutorials và MVP Criteria Checklist. Ba tab này sửa thẳng trong TSV như các tab khác (2026-11-23).

Quy ước cho mọi vai: tên file TSV trùng tên tab, hàng 1 của TSV là header và ứng với hàng 2 của tab (hàng 1 là tiêu đề tab), xuống dòng trong ô ghi `\n`. gid các tab ở `tham-so/sheet.json`. Sheet phải chia sẻ bằng link (đọc không cần đăng nhập), nếu không thì dùng `/gdd-sheet-sync doi-chieu` qua trình duyệt.

## Codex trong game (GD-068)

| Lệnh (chạy ở gốc repo) | Làm gì |
|---|---|
| `node projects/game-moi/tools/sinh-codex.mjs --khung` | Ghi `codex/khung.tsv` (khoa, tab, loai, ten, ten_en, tom_tat_luat) từ TSV các tab, chỉ mục MVP, in số mục mỗi tab. gd-story đọc file này để viết lời |
| `node projects/game-moi/tools/sinh-codex.mjs` | Đọc `codex/loi.tsv` (khoa, loi), ghi 6 tab `codex/<Tab>.tsv` cột STT, Loại, Tên, Tên tiếng Anh, Lời trong game, Nguồn nhận, Công thức, Dùng cho, Ảnh. Chưa có `loi.tsv` thì cột lời để trống |
| `node projects/game-moi/tools/sinh-codex.mjs --kiem` | Thoát 1 khi thiếu lời, lời thừa khóa, lời quá 200 ký tự, có chữ số, gạch dài, chấm phẩy |

Khóa là ID của `ITEM LIST.json` và `Salvage.json`, các tab không có ID thì dùng tên đúng như TSV. Khóa chỉ ở `khung.tsv` và `loi.tsv`.
