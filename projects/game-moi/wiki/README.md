# Wiki The Novent

Trang tra thông tin game: hồ sơ nhân vật, sau này thêm Driftlife, item. Mở `index.html` qua một server tĩnh ở gốc repo để ảnh concept hiện đúng (cấu hình `wiki` trong `.claude/launch.json`, cổng 8796), rồi vào `/projects/game-moi/wiki/index.html`.

| File | Vai trò |
|---|---|
| `khuon.html` | Giao diện, sửa tay ở đây |
| `index.html` | File sinh ra, không sửa tay |
| `../tools/xuat-wiki.mjs` | Đọc GDD, ghép bảng theo Mã, nhúng dữ liệu vào khuôn |

Wiki không phải bản thứ hai của luật. Mọi chữ lấy từ GDD:

| Loại | Nguồn |
|---|---|
| Nhân vật (21) | `gdd/he-thong/ho-so-nhan-vat.md` mục 2b, bảng tính cách PC ở `cot-truyen.md` |

Sửa GDD xong thì chạy lại:

```
node projects/game-moi/tools/xuat-wiki.mjs
node projects/game-moi/tools/xuat-wiki.mjs --kiem
```

`--kiem` thoát 1 khi `index.html` cũ hơn GDD.

Thêm loại mới (Driftlife, item): viết hàm `trich<Loai>()` trong `xuat-wiki.mjs` trả về cùng dạng với `trichNhanVat()`, thêm vào `LOAI`. Giao diện tự hiện thêm tab. Ảnh concept khai báo ở bảng `ANH` trong script.
