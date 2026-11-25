# Cấu trúc bảng màu

Ngày 2026-11-25. Bản nháp của artist. Mã hex chỉ ghi màu đã chốt, còn lại artist chọn khi vẽ.

**Kết luận:** Đúng, mỗi vùng một bảng màu (GDD đã ghi: "mỗi dải một bảng màu", và qua ranh dải thì đổi màu nền là luật MVP trong `map.md`). Nhưng bảng màu chia làm 3 lớp. Lớp 1 giữ nguyên trên toàn game để người chơi luôn đọc được tín hiệu. Chỉ lớp 2 đổi theo vùng.

## Lớp 1 - Cố định toàn game, không vùng nào được dùng làm màu chủ

| Nhóm | Màu | Ghi chú |
|---|---|---|
| Người chơi | Bộ đồ cam | Nhận diện nhân vật ở mọi vùng |
| 4 slot co-op | Cam tròn, lam ngọc tam giác, vàng chanh vuông, hồng tím thoi | Đã chốt ở `gdd/00-khung-game.md` mục 13 |
| The Wardens | Trắng xương `#EDEBE0`, lục acid `#7CFC3A` | Chỉ quân The Wardens dùng |
| Báo trước đòn | Vàng chuyển đỏ | Đã có trong `combat-driftlife.md` |
| Choáng | Xanh dương | Đã có trong `combat-driftlife.md` |
| Vật nhặt được | Viền sáng | Phải nổi trên mọi nền |
| 4 bậc hiếm | Khác nhau cả màu, viền và hình | Cho người mù màu |
| UI | Màu khung, nút, chữ | Không đổi theo vùng |

## Lớp 2 - Theo vùng

Mỗi vùng chọn: 2 tới 3 màu nền, 3 tới 4 màu môi trường, 1 màu ánh sáng chính, 1 tới 2 màu phát sáng của Driftlife.

| Vùng | Phạm vi | Hướng màu |
|---|---|---|
| Vành đai ngoài | MVP | Nền tím chàm, xanh than. Vỏ tàu đỏ, kem, be có rỉ. Băng xanh nhạt. Driftlife xanh ngọc. Lấy từ 2 ảnh gameplay Lead đã duyệt |
| Station Cinder (bên trong xác Seed Station, có boss Scrapmaw) | MVP | Đề xuất: nâu than tối, đèn khẩn cấp đỏ, tia lửa cam. Tên "Cinder" gợi than hồng. Chờ chốt khi vẽ |
| Trạm Ember lúc hỏng | MVP | Xám xanh lạnh, tối, đèn chớp |
| Trạm Ember lúc sửa xong | MVP | Cam ấm, sáng dần theo từng khoang. Đèn đổi bằng engine, không vẽ lại sprite |
| Cảng | MVP | Ấm như trạm, đèn tàu thương nhân làm điểm nhấn |
| Vành đai trong | Sau MVP | Lạnh hơn: xanh lam băng, đá vụn. Chỉ ghi hướng, chưa vẽ |
| Vùng trung tâm | Sau MVP | Tinh vân sáng, tinh thể nhiều sắc, rực nhất game. Chỉ ghi hướng, chưa vẽ |

Càng vào sâu càng lạ và rực. Nhưng GDD cấm "vùng mới chỉ khác màu mà không có thứ mới" (pillar CP1), nên mỗi vùng mới phải có thêm hình khối, đạo cụ và sinh vật riêng, không chỉ đổi màu.

## Lớp 3 - Engine

| Thứ | Đổi theo vùng |
|---|---|
| LUT color grading | Mỗi vùng một LUT, chuyển dần khi qua ranh dải hoặc qua cửa khí |
| Màu đèn chính, màu sương | Mỗi vùng một bộ |
| Hạt bụi môi trường | Đổi màu khi qua ranh dải (luật MVP trong `map.md`) |

Nhờ lớp này, một mảnh kit (ví dụ mảnh vỏ tàu) dùng được ở nhiều vùng mà vẫn mang màu của vùng đó, không phải vẽ lại.

## Quy tắc kiểm

| Kiểm | Đạt khi |
|---|---|
| Lớp 1 trên nền lớp 2 | Mọi màu lớp 1 nổi trên nền của mọi vùng |
| Ảnh đen trắng | Nhân vật, vật nhặt được, Driftlife tách khỏi nền bằng độ sáng |
| Giả lập mù màu | Báo đòn, bậc hiếm, 4 slot vẫn phân biệt được |
| Trạm Ember lúc sửa xong | Bộ đồ cam không chìm vào đèn cam. Nền trạm giữ trầm, cam chỉ là ánh đèn, nhân vật tách bằng độ sáng và viền |

## Đầu ra

| File | Nội dung |
|---|---|
| `bang-mau-chung.ase` (hoặc `.aco`) | Swatch lớp 1 và từng vùng, mỗi vùng một nhóm |
| `bang-mau.png` | Một trang nhìn được cả 3 lớp, mỗi vùng một hàng |
| `thu-nen.png` | Lớp 1 đặt trên nền từng vùng, kèm bản đen trắng |

Lô 1 chỉ cần lớp 1 và 5 vùng MVP. Hai vùng Sau MVP chỉ cần một dòng hướng màu.
