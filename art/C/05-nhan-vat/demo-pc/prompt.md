# Demo concept 4 nhân vật người chơi

Bản 4 ngày 2026-11-26 là bản hiện hành. Khung 4 vai tâm lý Lead duyệt (`projects/game-moi/de-xuat-4-pc-vai-tam-ly.md`): Việt Người truyền lửa (khối tròn), Jonas Chỗ dựa (khối vuông), Mei Cây hài (khối tròn phóng đại), Niamh Bộ não (khối tam giác). Chất vẽ và tỉ lệ theo ảnh mẫu Lead gửi (`../ref-ti-le-lead.webp`), dáng khoảng 5,5 đầu. Nguồn chữ: `ho-so-nhan-vat.md` 2b.1 và `cot-truyen.md` mục Tính cách bốn hồ sơ mặc định. Đây là demo hướng nhân vật do GPT vẽ, chưa phải concept chốt của artist.

| Bản | Lead nói | Thư mục |
|---|---|---|
| 1 | "PC-4 đô con quá, cô ấy là phụ nữ mà" | `v1/` |
| 2, khung 4 vai, nét sạch | "người kiểu kia dài ngoằng ấy", gửi ảnh mẫu | `v2/` |
| 3, theo ảnh mẫu | "giờ thì người bị to quá béo béo" | chỉ giữ prompt `prompt/v3-*.txt` |
| 4, dáng giữa 5,5 đầu | Chờ Lead xem | thư mục này |

| File | Nội dung |
|---|---|
| `doi-hinh-4-pc.webp` | Bảng ghép 4 tấm, nhãn tên, vai, quốc gia, giới tính, tuổi, slot |
| `pc1.webp` - `pc4.webp` | Mỗi tấm 1254x1254: bộ đồ ngoài đội mũ, đồ trạm theo dáng của vai, 4 biểu cảm (bình thường, vui, lo, quyết tâm) |
| `so-dang-4-pc.webp` | Bốn người đứng cạnh nhau trên một đường nền, hàng dưới tô đen để kiểm silhouette (luật 2) |
| `prompt/` | Prompt mọi bản, `ghep.py`, `xoavat.py`, `do-cao.py` |

Bản 3 vẽ bằng `codex-img.sh -e medium -i ref.png -i <tấm bản 2> prompt/v3-pcN.txt`. Bản 4 sửa từ tấm bản 3: `codex-img.sh -e medium -i <tấm bản 3> prompt/v4-pcN.txt`, chỉ thon người khoảng 20%, giày và găng về cỡ thường. Bảng so dáng bản 4: `prompt/v4-doihinh.txt`, rồi `prompt/v4-doihinh-b.txt` chỉnh chiều cao.

Chiều cao trên `so-dang-4-pc.webp` bản 4, đo hàng tô đen bằng `python -X utf8 -P prompt/do-cao.py so-dang-4-pc.webp`. Lead: "nữ dáng người cao nhưng đừng để nó cao hơn mấy thằng đàn ông chứ", nên Niamh hạ xuống 0,98 u (vòng `prompt/v4-doihinh-c.txt`):

| Người | Đo được (lần Việt) | Mục tiêu GDD |
|---|---|---|
| Jonas | 1,07 | 1,1 |
| Việt | 1,00 | 1,0 |
| Niamh | 0,96 | 0,98 |
| Mei | 0,90 | 0,9 |

Thứ tự đúng GDD. Artist dựng theo số GDD, không theo ảnh này.

## Lịch sử bản 2

## Cách làm

| Bước | Lệnh, đầu vào |
|---|---|
| Bản 1, PC-1 làm mốc style | `codex-img.sh -e medium -i gameplay-dai-gan-bai-vo.png prompt/pc1.txt`. Ảnh cảnh bay Lead duyệt 2026-11-23 chỉ dùng để lấy nét vẽ |
| Bản 1, PC-4 | Vòng 1 vẽ quá đô con. Lead: "PC-4 đô con quá, cô ấy là phụ nữ mà". Vòng 2 đổi sang dáng cao mảnh |
| Bản 1, bỏ vật để lại | `prompt/xoavat.py` tô màu nền đè góc phải dưới (Lead chốt đổi sang hòm) |
| Bản 2 | Mỗi tấm sửa từ tấm bản 1 đã bỏ vật: `codex-img.sh -e medium -i <bản 1> prompt/v2-pcN.txt`, chỉ đổi hình khối, tỉ lệ, dáng đồ trạm, 4 biểu cảm |
| So dáng | `codex-img.sh -e medium -i pc1 -i pc2 -i pc3 -i pc4 prompt/v2-doihinh.txt` |
| Sửa chiều cao | Vòng 1 Niamh chỉ cao 1,09 lần Việt. Vòng 2 `prompt/v2-doihinh-b.txt` kéo cao. Đo bằng `python -X utf8 -P prompt/do-cao.py so-dang-4-pc.webp` |
| Ghép | `python -X utf8 -P prompt/ghep.py <thư mục ảnh> <thư mục ra>` |

## Bảng kiểm bản 2 (soi bằng mắt)

| Mục | PC-1 Việt | PC-2 Jonas | PC-3 Mei | PC-4 Niamh |
|---|---|---|---|---|
| Hình khối | Vai và mảng đồ bo tròn | Vai ngang rộng, thân hộp, tay to | Đầu to, tay chân ngắn, thân tròn | Rất cao gầy, mảng chữ V, mũ kính vát góc |
| Dáng đồ trạm theo idle | Đấm tay vào lòng bàn tay | Khoanh tay, đứng vững | Nhún một chân, tay vỗ quai balo | Xem đồng hồ Oxy ở cổ tay, tay xoa gáy |
| Biểu cảm bình thường | Cười nửa miệng, cằm ngẩng | Mắt hiền sau kính | Mắt to tròn, má phồng | Mày nhíu, mắt liếc như đang tính |
| Giữ tên, màu slot, giới tính, da sáng | Đạt | Đạt | Đạt | Đạt |

Chiều cao trên `so-dang-4-pc.webp`, đo hàng tô đen bằng `prompt/do-cao.py`:

| Người | Đo được (lần Việt) | Mục tiêu GDD |
|---|---|---|
| Niamh | 1,15 | 1,2 |
| Jonas | 1,09 | 1,1 |
| Việt | 1,00 | 1,0 |
| Mei | 0,90 | 0,9 |

Lệch còn để ngỏ:
- Niamh thấp hơn mục tiêu 4% vì dáng cúi đầu xem đồng hồ. Artist dựng theo số GDD, không theo ảnh này.
- PC-3: tóc thành khối xoăn bồng to, chưa ra kiểu bob ngắn thẳng. Vẫn đúng "ngắn bồng" trong GDD.
- PC-2: bình Oxy bản 2 thành bình trụ có ống nối mũ, khác bình thùng dọc của bản 1. Bình là trục nâng cấp nên không dùng làm dấu nhận diện.
