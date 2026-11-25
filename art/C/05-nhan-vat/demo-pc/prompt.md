# Demo concept 4 nhân vật người chơi

Ngày 2026-11-25. GPT (Codex CLI, image_gen) vẽ theo bảng bối cảnh ở `projects/game-moi/gdd/he-thong/ho-so-nhan-vat.md` 2b.1 và `cot-truyen.md` mục Tính cách bốn hồ sơ mặc định. Đây là demo hướng nhân vật để Lead xem. Chưa phải concept chốt của artist.

| File | Nội dung |
|---|---|
| `doi-hinh-4-pc.webp` | Bảng ghép 4 tấm, có nhãn tên, quốc gia, giới tính, tuổi, slot |
| `pc1.webp` - `pc4.webp` | Mỗi tấm 1254x1254: bộ đồ ngoài đội mũ, đồ trạm, 4 biểu cảm (bình thường, vui, lo, quyết tâm), vật để lại |
| `prompt/` | Prompt từng tấm và `ghep.py` (ghép và ghi nhãn bằng PIL) |

## Cách làm

| Bước | Lệnh, đầu vào |
|---|---|
| PC-1 làm mốc style | `codex-img.sh -e medium -i gameplay-dai-gan-bai-vo.png prompt/pc1.txt`. Ảnh cảnh bay Lead duyệt 2026-11-23 chỉ dùng để lấy nét vẽ |
| PC-2, PC-3 | Đính kèm tấm PC-1 làm mốc style và bố cục, chạy song song |
| PC-4 | Vòng 1 vẽ quá đô con. Lead: "PC-4 đô con quá, cô ấy là phụ nữ mà". Vòng 2 (`prompt/pc4c.txt`) đính kèm bản cũ và PC-1, đổi sang dáng cao mảnh, vai hẹp |
| Ghép | `python -X utf8 -P prompt/ghep.py <thư mục ảnh> <thư mục ra>` |

## Bảng kiểm (soi bằng mắt)

| Mục | PC-1 | PC-2 | PC-3 | PC-4 |
|---|---|---|---|---|
| Đúng giới tính, da sáng | Đạt | Đạt | Đạt | Đạt (vòng 2) |
| Màu slot và ký hiệu trên ngực | Cam, tròn | Lam ngọc, tam giác | Vàng chanh, vuông | Hồng tím, thoi |
| Silhouette theo hồ sơ | Ăng-ten chữ L, bình Oxy ngang | Bình Oxy dọc, kính | Mũ trứng có chóp sáng, balo tròn | Cao mảnh, bình Oxy trên vai, túi hông |
| Đồ trạm xám than, màu slot ở vai và cổ tay | Đạt | Đạt | Đạt | Đạt |

Lệch còn để ngỏ:
- PC-3: tóc dài tới cằm, gợn sóng, chưa đúng kiểu "ngắn bồng".
- PC-3 chưa thấp hơn rõ so với người khác.
- Vật để lại ở góc mỗi tấm chưa bỏ, chờ Lead chốt ý "chết thì đóng hòm hết".
