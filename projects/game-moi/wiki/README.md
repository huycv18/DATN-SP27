# Wiki The Novent

Tra hồ sơ nhân vật, Driftlife, vật phẩm, công thức và điểm khai thác. Mở `index.html` qua một server tĩnh ở gốc repo để ảnh concept hiện đúng (cấu hình `wiki` trong `.claude/launch.json`, cổng 8796), rồi vào `/projects/game-moi/wiki/index.html`.

| File | Vai trò |
|---|---|
| `khuon.html` | Giao diện, sửa tay ở đây. Dùng Tailwind CSS 4.1.11 (bản chạy trong trình duyệt) và daisyUI 5.0.43 qua jsDelivr, font Be Vietnam Pro. Lần đầu mở cần mạng |
| `index.html` | File sinh ra, không sửa tay |
| `../tools/xuat-wiki.mjs` | Đọc GDD, ghép bảng theo Mã, nhúng dữ liệu vào khuôn |

Wiki không phải bản thứ hai của luật. Mọi chữ lấy từ GDD:

| Loại | Số mục | Nguồn |
|---|---|---|
| Nhân vật | 21 | `ho-so-nhan-vat.md` mục 2b, bảng tính cách PC ở `cot-truyen.md` |
| Driftlife | 24 (15 loài, 4 đơn vị The Wardens, 5 boss) | `combat-driftlife.md`, bảng loài và lồng ở `vat-pham.md` |
| Vật phẩm | 232 (155 vật phẩm, 63 công thức, 14 điểm khai thác) | `vat-pham.md` |

Cách ghép: bảng nào có một cột mà phần lớn ô mở đầu bằng mã (DL-G01, RES-101...) thì mỗi hàng ghép vào mục có mã đó, thành một phần đặt tên theo câu dẫn hoặc tiêu đề của bảng. Mã lặp nhiều hàng trong một bảng (bảng đòn, bảng lồng) giữ nguyên thành bảng con. Mã nhắc trong chữ thành link sang mục đó, kể cả khác loại.

Sửa GDD xong thì chạy lại:

```
node projects/game-moi/tools/xuat-wiki.mjs
node projects/game-moi/tools/xuat-wiki.mjs --kiem
```

`--kiem` thoát 1 khi `index.html` cũ hơn GDD.

Thêm loại mới: viết hàm `trich<Loai>()` trong `xuat-wiki.mjs` (thường chỉ cần gọi `gomTheoMa` với file nguồn và regex mã, rồi `chiaNhom`), thêm vào `LOAI()`. Giao diện tự hiện thêm tab. Ảnh concept khai báo ở bảng `ANH` trong script.

## Bản đăng web (Artifact claude.ai)

Link: https://claude.ai/artifact/DpJKfUbVkGY29EGuA6dXme (đăng 2026-11-26). Mặc định riêng tư, chia sẻ ở menu Share trên trang.

Đăng lại sau khi sửa GDD: chạy `node projects/game-moi/tools/xuat-wiki.mjs --artifact <thư mục>`, rồi nhờ Claude đăng lại đúng link trên với file `index.html` và 4 ảnh trong `anh/`. Bản đăng nhúng thẳng CSS daisyUI vì khung Artifact chặn stylesheet ngoài Google Fonts. Link trong trang dùng dạng `#loai--MA` vì khung chỉ giữ hash chữ, số, gạch nối.

## Web công khai (GitHub Pages)

Link: https://huycv18.github.io/DATN-SP27/ (bật 2026-11-26, Lead: "Cho đẩy và bật"). Ai có link cũng xem được, không cần đăng nhập. Trang chạy từ nhánh `gh-pages`, nhánh này chỉ chứa bản dựng, không có lịch sử chung với `main`.

Cập nhật sau khi sửa GDD: chạy `node projects/game-moi/tools/xuat-wiki.mjs --pages <thư mục>`, commit thư mục đó vào nhánh `gh-pages` rồi đẩy lên (cần Lead cho push). Trang không tự cập nhật theo repo.

