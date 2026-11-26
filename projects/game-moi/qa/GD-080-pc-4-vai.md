# Kết quả QA: GD-080 game-moi - 4 PC theo khung 4 vai tâm lý

Kết luận: **ĐẠT** - 7/7 tiêu chí đạt, có 3 góp ý nhẹ không chặn.
Môi trường: commit 471e7a4, nhánh feature/artist. Cổng máy: `validate-gdd.mjs` (0 lỗi, 391 ID), `selftest.mjs` (43 phép kiểm ĐẠT), `xuat-wiki.mjs --kiem` (ĐẠT, wiki khớp GDD, 21 nhân vật).

## Theo tiêu chí
| # | Tiêu chí | Kết quả | Bằng chứng |
|---|---|---|---|
| 1 | Vai, khối, chiều cao, tỉ lệ, 3 nét, idle, nét mặt khớp giữa đề xuất mục 4, ho-so-nhan-vat.md, cot-truyen.md | ĐẠT | Vai, khối, chiều cao khớp cả 3 nơi (Việt tròn 1,0, Jonas vuông 1,1, Mei tròn phóng đại 0,9, Niamh tam giác 1,2). 3 nét và idle cot-truyen.md = bảng 2b.1 = bảng clip idle (ho-so-nhan-vat.md dòng 254 trở đi). Lệch chữ không đổi nghĩa: thứ tự vươn vai và đấm tay của Việt, Niamh bỏ nét thứ tư "vụng về khi bị khen" khỏi 3 nét (xem góp ý 1) |
| 2 | Không đổi luật đã chốt, không gợi vai gameplay | ĐẠT | Diff không đụng chỉ số, kỹ năng, tên, slot, màu, tuổi, giới tính. Luật 10 (0,4 u) còn nguyên. Câu "Vai chỉ hiện qua hình khối... không phải vai gameplay" ở cot-truyen.md và "không chi tiết nào gợi vai gameplay" ở 2b.1. Nhãn vai (Người truyền lửa, Bộ não, Chỗ dựa, Cây hài) chỉ xuất hiện trong 2 file GDD và DECISIONS, không lọt sang tab khác |
| 3 | Bảng Tỉ lệ preset trong 0,8 đến 1,25, chiều cao 0,9 đến 1,2 u, khớp luật 4 | ĐẠT | Hệ số nhỏ nhất 0,85 (Niamh vai, Mei tay và chân), lớn nhất 1,2 (Mei đầu, Jonas vai và tay). Chiều cao 1,0 / 1,1 / 0,9 / 1,2. Luật 4 ghi đúng 0,8 đến 1,25 và 0,9 đến 1,2 u. Clip thử Mang thùng, Kéo vật, Ngạt đều có trong bảng clip (#4, #8, #13) |
| 4 | Mô tả preset tối đa 80 ký tự mỗi câu | ĐẠT | 4 câu dài 38 đến 42 ký tự: "Nhiệt huyết, lạc quan. Làm trước, nghĩ sau.", "Điềm tĩnh, trung thành. Chậm một nhịp.", "Tò mò, bốc đồng. Luôn có trò mới.", "Cẩn thận, hay lo. Luôn có kế hoạch B." |
| 5 | Không còn tính cách cũ ngoài Lịch sử thay đổi | ĐẠT | grep "bền bỉ", "ít lời", "thực tế", "điềm tĩnh, hiền", "Mei nhanh", "Việt bền", "Niamh hiền", "xoay cổ tay", "chỉnh lại quai" trong 2 file GDD, Player.tsv, wiki: 0 chỗ. 3 hit còn lại ("ít lời" ở cot-truyen.md dòng 110, 1068, 1110) là Brakk, Dromm, Elias Vance, không phải PC. Player.tsv không chứa tính cách |
| 6 | Văn phong phần mới | ĐẠT | Quét các dòng thêm của diff trong gdd/, DECISIONS.md: 0 dấu chấm phẩy, 0 gạch dài, 0 emoji |
| 7 | Cổng máy | ĐẠT | Xem môi trường |

## Góp ý nhẹ (không chặn, GDM tự quyết)
| # | Mức | Chỗ | Vấn đề | Đề xuất ai sửa |
|---|---|---|---|---|
| 1 | Nhẹ | cot-truyen.md và 2b.1, PC-4 | Đề xuất mục 4 có 4 nét (cẩn thận, hay lo, lên kế hoạch, vụng về khi bị khen), GDD còn 3 nét. Ý "khi bị khen" vẫn nằm trong nét mặt và idle nên không mất | GDM, chỉ ghi chú |
| 2 | Nhẹ | ho-so-nhan-vat.md luật 10 | Còn viết "chiều cao và silhouette chỉ là hình", chưa nhắc tỉ lệ xương từng preset. Không sai vì 0,4 u vẫn đúng, nhưng dev đọc luật 10 có thể không biết tỉ lệ xương cũng không đổi va chạm | gd-character, thêm 4 từ |
| 3 | Nhẹ | Player.tsv dòng 29 | Ghi hình slot (tròn, tam giác, vuông, thoi) liền kề với khối thân mới (Jonas thân vuông nhưng slot tam giác, Mei thân tròn nhưng slot vuông). Docs đã tách rõ, tab Sheet chưa có câu "hình slot là icon UI, không phải hình khối thân" | gd-character, thêm một câu vào ô |

## Bỏ qua
Chưa kiểm ảnh GPT gen thử (chưa có trong commit), chưa kiểm méo 3 clip trên 4 preset (việc artist, trước khi vẽ hết). Chưa kiểm Sheet trực tuyến (chưa dán).
