# Brief gd-tech: prototype một chuyến đủ vòng (2026-11-23)

Game: game-moi (The Novent). Lead: "Oke làm cái 1 đi" (việc 1 trong bước tiếp sau review, `production/reports/2026-11-23-review-gdd-sheet.md` rủi ro 1).

## Mục tiêu
Nâng `projects/game-moi/tools/prototype/bay.html` từ sân bay thử thành một chuyến chơi được từ đầu tới cuối, để 5-8 người chưa biết game thử và trả lời: có muốn ra chuyến thứ hai không, có liều quá vạch "đủ về" không, có thấy khó điều khiển không.
Một chuyến gồm:
1. Ra khỏi cửa khí ở mảnh Ember Mooring (không hazard, không Driftlife).
2. Bay quán tính 8 hướng, Hãm, Lướt như bản hiện có. Số bậc 0 đọc lại từ GDD: bình Oxy bản hiện có là 300, số chốt là 330. Túi bậc 0 là 80 Khối.
3. Nhặt phế liệu trôi (nhặt tay) và ít nhất 2 loại điểm khai thác cần giữ phím (giây khai thác, số lần quay, bảng rơi theo tab Salvage và `vat-pham.md` khối NODE). Có GTĐ cho từng món để tính "mang về được bao nhiêu".
4. Thanh Oxy có vạch "đủ về" tính theo công thức `nguoi-choi.md` (Oxy_về theo khoảng cách tới đích gần nhất, dự phòng theo đích), bíp hoặc đổi màu ở ngưỡng 50, 25, 10 phần trăm.
5. Ít nhất 1 Recall Beacon trên map: giữ F 5 giây để về, bị hủy khi rời vòng hoặc trúng đòn nếu GDD nói vậy.
6. Về bằng cách bay vào cửa khí hoặc kích Beacon. Hết Oxy thì ngạt 12 giây (chơi một mình không ai cứu), rồi bị kéo về và chỉ giữ 1 món theo luật.
7. Màn kết chuyến: thời gian chuyến, Oxy còn khi về, có lúc nào Oxy dưới vạch "đủ về" không và bao lâu, số món và GTĐ mang về, cách về (cửa khí, Beacon, bị kéo về). Nút Chuyến mới.
8. Ghi lại mọi chuyến trong phiên, nút Xuất JSON gồm cả tham số và kết quả từng chuyến, để gd-qa gom số khi playtest.
9. Hai bài thử cho tiêu chí MVP 23 và 24 (tab MVP Criteria Checklist): dừng cách điểm đích tối đa 0,5 u bằng Hãm, và hành lang rộng 1,5 u dài 20 u. Đếm lần đạt. Giữ phím T thử né như bản cũ (tiêu chí 54).
Map: một map nhỏ dựng tay (khoảng 3-4 mảnh dải Gần ghép theo `map.md`), có chỗ xa trạm đáng liều (điểm khai thác giá trị cao hơn đặt xa hơn), vì cần đo người chơi có liều không. Không cần Driftlife, combat, ca cảng, co-op.

## Đọc trước
- `projects/game-moi/tools/prototype/bay.html` (bản đang có, giữ cách làm: một file, không thư viện, thanh chỉnh bên phải, số gốc ghi nguồn)
- `projects/game-moi/so-hien-hanh.md` mục Số cân bằng
- `projects/game-moi/gdd/he-thong/nguoi-choi.md` mục 2 (luật), 3 (tham số), vạch "đủ về", ngạt
- `projects/game-moi/gdd/he-thong/map.md` phần Ember Mooring, mảnh, Recall Beacon, nhịp chuyến
- `projects/game-moi/gdd/sheet/Salvage.tsv` (điểm khai thác dải Gần), `gdd/he-thong/vat-pham.md` khối NODE và GTĐ
- `projects/game-moi/gdd/sheet/Player.tsv` dòng Controls Scheme (phím)

## Ghi vào
- `projects/game-moi/tools/prototype/bay.html` (sửa tại chỗ, đổi tiêu đề thành "Prototype một chuyến")
- `projects/game-moi/tools/README.md` dòng Prototype (cách mở, cách xuất JSON)
- Số nào GDD chưa có mà prototype cần thì tự đặt, ghi nhãn `[GIẢ ĐỊNH]` trong `GOC` và liệt kê trong báo cáo

## Tiêu chí hoàn thành
- Mở qua http trên cổng 8791 (`python -m http.server 8791 --bind 127.0.0.1` trong thư mục `prototype/`), không lỗi console, chơi hết một chuyến theo cả 3 cách về.
- Mọi số trong `GOC` có nguồn (file và mục) hoặc nhãn `[GIẢ ĐỊNH]`.
- Có tự kiểm nhỏ trong file (hàm chạy khi thêm `?kiem` vào URL, in ĐẠT hoặc lỗi ra console): công thức vạch "đủ về" với 2 ca tính tay, ngạt 12 giây rồi kéo về giữ 1 món, GTĐ cộng đúng.
- Tắt đúng tiến trình http.server mình mở, kiểm cổng 8791 trống.
- Trả `## Báo cáo cho GDM`: tính năng đã có, bảng số dùng và nguồn, giả định, chỗ GDD mơ hồ phải đoán, lệnh mở.

## Giới hạn
Không commit, không push. Không sửa GDD, TSV, Sheet. Văn bản tiếng Việt có dấu, không gạch dài, không chấm phẩy, không emoji. Không thêm thư viện ngoài.
