# Wiki The Novent

Tra hồ sơ nhân vật, Driftlife, vật phẩm, công thức và điểm khai thác. Mở `index.html` qua một server tĩnh ở gốc repo để ảnh concept hiện đúng (cấu hình `wiki` trong `.claude/launch.json`, cổng 8796), rồi vào `/projects/game-moi/wiki/index.html`.

| File | Vai trò |
|---|---|
| `khuon.html` | Giao diện, sửa tay ở đây. Dùng Tailwind CSS 4.1.11 (bản chạy trong trình duyệt) và daisyUI 5.0.43 qua jsDelivr, font Be Vietnam Pro. Lần đầu mở cần mạng |
| `index.html` | File sinh ra, không sửa tay |
| `../tools/xuat-wiki.mjs` | Đọc GDD, ghép bảng theo Mã, nhúng dữ liệu vào khuôn |

Wiki xuất các trường dùng để tra cứu từ GDD.

| Loại | Số mục | Nguồn |
|---|---|---|
| Nhân vật | 21 | `ho-so-nhan-vat.md` mục 2b, bảng tính cách PC ở `cot-truyen.md` |
| Driftlife | 24 (15 loài, 4 đơn vị The Wardens, 5 boss) | `combat-driftlife.md`, bảng loài và lồng ở `vat-pham.md` |
| Vật phẩm | 232 (155 vật phẩm, 63 công thức, 14 điểm khai thác) | `vat-pham.md` |

Script ghép các hàng GDD theo mã mục, rồi chọn trường xuất qua `rutGonWiki`. Bản wiki ưu tiên vai trò nhân vật, cách gặp và đối phó Driftlife, nguồn nhận và công dụng vật phẩm. Các phần dùng để dựng art, cân bằng, sim và phối hợp nội bộ nằm trong GDD. Mã xuất hiện trong phần tra cứu thành link sang mục tương ứng, kể cả khác loại.

Sửa GDD xong thì chạy lại:

```
node projects/game-moi/tools/xuat-wiki.mjs
node projects/game-moi/tools/xuat-wiki.mjs --kiem
```

`--kiem` thoát 1 khi `index.html` cũ hơn GDD.

Khi thêm loại mới, đọc dữ liệu bằng `gomTheoMa`, chia nhóm bằng `chiaNhom`, rồi khai báo trường tra cứu trong `rutGonWiki`. Thêm loại vào `LOAI()` để giao diện hiện thêm tab. Ảnh concept khai báo ở bảng `ANH`.

## Bản đăng web (Artifact claude.ai)

Link: https://claude.ai/artifact/DpJKfUbVkGY29EGuA6dXme (đăng 2026-11-26). Mặc định riêng tư, chia sẻ ở menu Share trên trang.

Đăng lại sau khi sửa GDD: chạy `node projects/game-moi/tools/xuat-wiki.mjs --artifact <thư mục>`, rồi nhờ Claude đăng lại đúng link trên với file `index.html` và 4 ảnh trong `anh/`. Bản đăng nhúng thẳng CSS daisyUI vì khung Artifact chặn stylesheet ngoài Google Fonts. Link trong trang dùng dạng `#loai--MA` vì khung chỉ giữ hash chữ, số, gạch nối.

## Web công khai (GitHub Pages)

Link: https://huycv18.github.io/DATN-SP27/ (bật 2026-11-26, Lead: "Cho đẩy và bật"). Ai có link cũng xem được, không cần đăng nhập. Trang chạy từ nhánh `gh-pages`, nhánh này chỉ chứa bản dựng, không có lịch sử chung với `main`.

Cập nhật sau khi sửa GDD: chạy `node projects/game-moi/tools/xuat-wiki.mjs --pages <thư mục>`, commit thư mục đó vào nhánh `gh-pages` rồi đẩy lên (cần Lead cho push). Trang không tự cập nhật theo repo.

