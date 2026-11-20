---
name: gdd-sheet-sync
description: Dán và đối chiếu một tab Google Sheet GDD từ file TSV/CSV trong repo bằng máy, cho mọi sản phẩm - ba chế độ moi (tab mới hoặc tab phòng sở hữu, dán HTML có màu nhóm, ô gộp, xuống dòng), o (tab có định dạng tay của chủ dự án, dán chữ thuần vào đúng vùng ô để giữ màu và font) và doi-chieu (đọc tab bằng export CSV, so từng hàng bằng hash, in bảng ô lệch và hàng thừa). Chạy qua công cụ JS của trình duyệt trên trang Sheet đang mở. Dùng khi nói dán Sheet, cập nhật tab GDD, sync sheet, đối chiếu Sheet với file, kiểm Sheet có khớp repo không.
argument-hint: <moi|o|doi-chieu> <nguồn .tsv|.csv> --tab "<tên tab>" [--o A1] [--bo-dong-dau n]
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Bash
---

# /gdd-sheet-sync - dán và đối chiếu tab Google Sheet bằng máy

Tiếng Việt có dấu, chỉ dùng "-", không emoji. Thư mục skill: `.Codex/skills/gdd-sheet-sync/` (gọi tắt `SKILL/`).
Nguồn là file trong repo (thường `projects/<slug>/gdd/sheet/*.tsv`, khuôn của skill `gdd`: xuống dòng trong ô ghi chuỗi `\n`). Sheet là bản hiển thị, sửa nguồn trước, dán sau.

## 1. Chuẩn bị (một lần mỗi phiên)

1. Mở Sheet trong trình duyệt của phiên (built-in browser), đúng link chủ dự án đưa. Thấy "Chỉ xem"/"Chỉ nhận xét" thì dừng, nhờ cấp quyền chỉnh sửa, không tìm cách vượt.
2. Nạp thư viện: đọc `SKILL/scripts/trang.js`, dán nguyên văn vào công cụ chạy JS trên trang. Kết quả "gdd-sheet-sync trang.js đã nạp". Tải lại trang thì nạp lại.
3. `node SKILL/scripts/selftest.mjs` phải xanh trước khi sửa script.
4. Lấy tên tab và gid: `await __ss.danhSachTab()`. Gid cũng nằm sau `#gid=` trên URL khi đang mở tab đó.

Trang Sheet chặn tải dữ liệu từ máy local (CSP), không mở server hay tìm cách lách. Dữ liệu vào trang chỉ qua payload dán trong công cụ JS.

## 2. Đóng gói nguồn

```bash
node .Codex/skills/gdd-sheet-sync/scripts/goi.mjs <nguồn> --tab "<tên tab>" --che-do <doi-chieu|moi|o> [--o A1] [--bo-dong-dau n]
```

- `--o`: ô trên trái của bảng trên tab (mặc định A1). `--bo-dong-dau n`: bỏ n hàng đầu nguồn (ví dụ CSV có tiêu đề tiếng Anh khác tiêu đề trên tab, thì dùng `--o A3 --bo-dong-dau 1`).
- Ra `<tmp>/gdd-sheet-sync/<tên>.payload.js` (một dòng `__ss.nap({...})`). Đọc file đó, dán vào công cụ JS. `doi-chieu` chỉ chở hash từng hàng (vài trăm ký tự), `moi` chở HTML nén, `o` chở chữ thuần.
- Chế độ `moi` có cổng: so TSV với nội dung ô của HTML (bỏ thẻ, `<br>` là xuống dòng, `colspan` trải ra, hàng nhóm so theo chữ). Lệch thì in bảng ô lệch, `DỪNG` và thoát 1, sinh lại cả hai file từ cùng nguồn. Chỉ bỏ cổng bằng `--bo-qua-so-html` và phải ghi trong báo cáo.
- Đọc mọi dòng `CẢNH BÁO` trước khi dán: HTML cũ hơn TSV, HTML không khớp số hàng, có script sinh riêng, ô đậm một phần.

## 3. Chế độ doi-chieu (chỉ đọc)

1. `__ss.nap(...)` rồi `await __ss.doiChieu()`. Trang tự mở tab, tải `/export?format=csv&gid=`, so hash từng hàng nguồn với hàng tương ứng từ ô `--o`.
2. Kết quả: `lech` (số hàng lệch), `nhomKhop` (hàng nhóm khớp theo chữ: ô gộp trải ngang nên chữ có thể nằm khác cột nguồn, đúng thiết kế), `thua` (hàng có chữ nối liền ngay dưới bảng, dừng ở hàng trống đầu tiên), `goiY` (khi bảng nằm lệch hàng), `chiTiet` (ô của hàng lệch).
3. Có lệch: lưu kết quả JSON vào file tạm rồi `node SKILL/scripts/doi-chieu.mjs <nguồn> --ket-qua <file>` in bảng "Ô | Trên tab | Nguồn". Thoát 0 khi khớp.
4. So sánh bỏ khoảng trắng cuối ô, coi CRLF như LF. Không dùng gviz (bỏ chữ ở cột kiểu số như hàng nhóm, cột STT).

## 4. Chế độ moi (tab mới hoặc tab phòng sở hữu)

1. Tab mới: mở tab đứng trước vị trí cần, bấm Shift+F11 (chèn sau tab đang mở), đổi tên bằng nháy đúp tên tab. Tab có sẵn: chạy `doi-chieu` trước để biết hiện trạng và chắc không ai vừa sửa tay.
2. Bảng ngắn lại hoặc hàng nhóm đổi vị trí: chọn vùng cũ, Định dạng > Hợp nhất ô > Hủy hợp nhất, rồi Xóa định dạng (Ctrl+\) trước khi dán.
3. `await __ss.dan("html")`: kiểm tab, đi tới ô `--o` bằng Name Box, phát sự kiện dán text/html. Trả về vùng đã dán.
4. Hàng thừa bên dưới (từ `doiChieu().thua`): `await __ss.diToi("A20:H22")`, rồi bấm Delete và Ctrl+\ bằng bàn phím của công cụ trình duyệt.
5. `await __ss.dinhDangSauDan("<vùng>")`: Xuống dòng tự động và căn giữa dọc qua menu. Dán HTML không giữ hai định dạng này.
6. Độ rộng cột và cố định hàng: dán không đặt được, tab có sẵn giữ nguyên. Tab mới: chuột phải tiêu đề cột > Đổi kích thước cột (làm từ cột phải sang trái để tọa độ không trôi), Xem > Cố định > 1 hàng.
7. Chạy lại `doi-chieu`, chụp ảnh tab (giả lập viewport rộng để thấy đủ cột, xong trả về desktop).

## 5. Chế độ o (tab có định dạng tay của chủ dự án)

1. `doi-chieu` trước: ghi lại hàng nào đổi. Nguồn nhiều hàng hơn vùng trên tab thì chèn hàng tay ở đúng chỗ (chuột phải số hàng > Chèn hàng) trước khi dán, để không đè lên bảng bên dưới.
2. `await __ss.dan("plain")`: dán chữ thuần kiểu Excel (ô có xuống dòng, tab, ngoặc kép được bọc ngoặc kép). Màu, font, viền, độ rộng của tab giữ nguyên.
3. `doi-chieu` lại. Ô có màu theo giá trị (trạng thái, nhãn độ khó, tag) không tự đổi màu: liệt kê các ô đổi giá trị ở những cột đó trong báo cáo để tô lại tay hoặc nhờ chủ dự án.

## 6. Name Box, menu, tab

- `__ss.diToi("B5")` hoặc vùng `"A1:H19"`: đặt giá trị Name Box và phát Enter, báo lỗi nếu Name Box không nhận. Tay: Ctrl+J, gõ ô hoặc `'Tên tab'!A1`, Enter, chờ 1 giây.
- `__ss.menu(["Định dạng", "Căn chỉnh", "Giữa(M)"])`: bấm menu theo nhãn giao diện tiếng Việt. Hai mục trùng tên thì ghi kèm chữ tắt: "Giữa(C)" căn ngang, "Giữa(M)" căn dọc. Giao diện tiếng Anh thì truyền nhãn tiếng Anh.
- `__ss.moTab("<tên>")`, `__ss.trangThai()` (tab, gid, Name Box, có phải chỉ xem không).

## 7. Bẫy đã gặp (dự án thật 20/10/2026, knowledge 50 mục 6)

| Bẫy | Cách tránh |
|---|---|
| Dán text/html với `<b>` một phần ô thì Sheet đậm cả ô | `goi.mjs` bỏ `<b>` một phần và cảnh báo, đậm tay sau dán (F2, Ctrl+Home, Shift+End, Ctrl+B, Enter) |
| `colgroup` độ rộng cột không được giữ | Chỉnh tay theo mục 4 bước 6 |
| Dán kiểu `google-sheets-html-origin` mất xuống dòng | Không dùng, trang.js dán text/html thường |
| TSV ghi xuống dòng thật trong ô làm vỡ hàng | Nguồn giữ chuỗi `\n`, `goi.mjs` đổi khi đóng gói |
| gviz bỏ chữ ở cột kiểu số | Luôn đọc bằng export CSV theo gid |
| `sheet-html.mjs` không kèm `--tab` ghi đè HTML do script sinh riêng | `goi.mjs` cảnh báo khi có `sinh-<tên>.mjs`, chạy lại script đó trước khi đóng gói |
| Name Box gõ nhầm khi đang chọn nhiều vùng: hộp "Tên đặt cho dải ô không hợp lệ" | Dùng `__ss.diToi`, nếu hộp lỗi hiện thì bấm OK rồi Escape |
| Bảng ngắn lại để sót hàng cũ bên dưới | `doiChieu().thua`, xóa nội dung và định dạng |
| Dán chữ thuần (chế độ o) hủy hợp nhất ô của hàng nhóm và ô ghi chú gộp trong vùng dán | Sau dán, gộp lại từng hàng nhóm bằng `__ss.menu(["Định dạng", "Hợp nhất", "Hợp nhất theo chiều ngang"])` rồi `doi-chieu` |
| Hàng nhóm đổi vị trí so với bản cũ: màu hàng nhóm nằm sai hàng | Sao chép định dạng: chọn hàng mẫu bằng `__ss.diToi("A13:G13")`, bấm nút "Sao chép định dạng" bằng chuột thật (tọa độ lấy từ ảnh chụp, cạnh nút In), rồi bấm chuột thật vào ô cột A của hàng đích, không bấm số hàng (áp cả hàng, có thể gộp ô làm mất chữ). Dán đặc biệt chỉ định dạng qua menu không ăn |
| Đổi tên tab: nháy đúp rồi Ctrl+A chọn cả lưới, gõ tên không vào tab | Chuột phải tab (sự kiện contextmenu) > "Đổi tên", chọn chữ trong span tên tab bằng Range của JS (mỗi bước một lệnh JS riêng, chờ ô tên tab nhận focus), rồi gõ và Enter bằng bàn phím thật |
| Tab mới vừa đổi tên: lần dán đầu rơi vào trình sửa ô, export rỗng (22/10/2026) | Tải lại trang, Escape, nạp lại `__ss`, rồi `diToi` và dán, luôn kiểm số hàng bằng export sau mỗi khúc dán |
| Dữ liệu lớn không đưa được vào trang: fetch localhost bị chặn, Set-Clipboard rồi Ctrl+V thật không dán | Mã hóa gọn (bỏ cột suy ra được như mã, tên file), dựng lại hàng bằng JS, so hash FNV với file repo trước khi dán |
| Thay cả bảng có hàng nhóm đậm hoặc gộp ở vị trí khác | Xóa hàng cũ (chuột phải tiêu đề hàng > Xóa hàng) rồi dán từ A1, sau đó đậm lại hàng nhóm |
| Bấm chuột thật vào ô rồi dán bằng JS: chữ chèn vào trình sửa ô, nối vào nội dung cũ | Không bấm vào ô trước khi dán, nếu lỡ thì Escape (bỏ phần chưa lưu), chọn bằng Name Box rồi dán, kiểm lại bằng export |
| Khung trình duyệt hẹp không thấy thanh tab để nháy đúp | Gửi bằng JS chuỗi mousedown, mouseup, click hai lần rồi dblclick vào `.docs-sheet-active-tab .docs-sheet-tab-name` (tên thành contenteditable), chọn chữ bằng Range, gõ tên và Enter bằng bàn phím thật (22/10/2026) |
| Đổi tên tab qua menu chuột phải + Range lúc được lúc không | Nháy đúp chuột thật vào tên tab (tọa độ từ ảnh chụp), gõ tên và Enter bằng bàn phím thật |
| Bảng dài (trên 100 hàng) dán một lần dễ hỏng | Chia khúc 90 hàng, ô đầu mỗi khúc A1, A91, A181..., kiểm số hàng sau từng khúc |
| `diToi("'Tab'!C12")` báo lỗi vì Name Box chỉ hiện C12 dù đã sang đúng tab | Kiểm tên tab đang mở (`.docs-sheet-active-tab`), rồi dán thẳng vào `#waffle-rich-text-editor`, ô nhiều dòng thì bọc chữ trong ngoặc kép |
| Chủ dự án hoặc phiên khác đang sửa cùng Sheet | `doi-chieu` ngay trước khi dán, chỉ đụng tab được giao |

## 8. Báo cáo

Mỗi tab một dòng: tab, nguồn, ô đầu, số hàng, lệch, hàng nhóm khớp theo chữ, hàng thừa, ảnh chụp (nếu dán). Ví dụ đầy đủ: `SKILL/examples/vi-du-doi-chieu.md`.
