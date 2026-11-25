# Định hướng art - bản nháp của artist

Ngày 2026-11-25. Chưa phải luật. Phần camera và model 3D cần Lead chốt (mục 4). Các con số là đề xuất, chốt sau khi vẽ thử style frame.

## 1. Công thức

| Thành phần | Lấy từ | Nội dung |
|---|---|---|
| Camera | Isometric | Chờ Lead chốt, xem mục 4 |
| Nhân vật chính và boss | Model 3D | Chờ Lead chốt, xem mục 4. Mọi thứ còn lại là 2D |
| Màu | Cách dùng màu của Hades 2 | Nền trầm, điểm nhấn neon |
| Ánh sáng và khối | Death's Door | Khối to, mảng sáng tối lớn, ánh sáng do engine làm |
| Stroke và độ chi tiết | Ở giữa Hades 2 và Death's Door | Ít hơn Hades 2, nhiều hơn Death's Door. Hạn chế vụn |
| Sắc độ | Ref AI của Lead và 2 ảnh gameplay đã duyệt | Tím chàm, cam ấm, đỏ kem có rỉ, xanh ngọc |

Hades 2 cho **cách** dùng màu, ref của Lead cho **những màu** cụ thể. Hai thứ này không xung đột.

## 2. Quy tắc vẽ

| Mục | Quy tắc đề xuất |
|---|---|
| Màu nền trầm | Khoảng 80 tới 90% diện tích màn hình là màu trầm, độ bão hòa và độ sáng thấp |
| Neon nhấn | Chỉ khoảng 5 tới 10% diện tích. Chỉ dùng cho thứ có nghĩa với gameplay: Driftlife, vật nhặt được và vật tương tác, đèn trạm, báo trước đòn, tín hiệu UI. Neon dùng để trang trí sẽ làm người chơi không biết nhìn vào đâu |
| Màu dành riêng | Trắng xương `#EDEBE0` và lục acid `#7CFC3A` chỉ dành cho The Wardens. 4 màu slot người chơi không dùng cho môi trường |
| Khối | Khối to, mỗi vật 2 tới 3 tông. Một nguồn sáng chính cố định hướng cho cả game |
| Stroke ngoài | Dày ở viền ngoài silhouette. Tiền cảnh dày hơn hậu cảnh, hậu cảnh xa có thể không có nét |
| Stroke trong | Chỉ ở chỗ gãy khối lớn. Không gạch bóng |
| Độ chi tiết | Dồn vào nhân vật, vật tương tác và mốc lớn. Mặt phẳng lớn để trơn hoặc chỉ dùng decal |
| Hạn chế vụn | Không vẽ chi tiết quá nhỏ, thu về cỡ trong game sẽ thành nhiễu. Mảnh vụn trôi chỉ đặt ở hậu cảnh, tối và mờ, không trùng màu hay hình với vật nhặt được |

Hạn chế vụn còn là luật gameplay, không chỉ là chuyện thẩm mỹ: game này là game vớt đồ, nên vụn trang trí giống salvage sẽ làm người chơi bay tới nhặt nhầm.

## 3. Cách kiểm khi vẽ

- Thu style frame về cỡ hiển thị 1280x720: vật nhặt được, Driftlife, người chơi phải nhận ra trong 1 giây.
- Chuyển ảnh sang đen trắng: nhân vật và vật tương tác phải tách khỏi nền bằng độ sáng, không chỉ bằng màu.
- Đặt cạnh 2 ảnh gameplay Lead đã duyệt: cùng họ màu.

## 4. Cần Lead chốt

| Đề xuất | Trái với | Ảnh hưởng |
|---|---|---|
| Camera isometric | Spec camera Rotation (45, 0, 0) không xoay (`gdd/he-thong/ky-thuat.md` luật 35), bố cục trạm UI-10 và cảng UI-40 đã duyệt | Đổi spec camera. Tường và sàn cần 2 hướng. Bố cục trạm, cảng và Tilemap phải làm lại theo lưới thoi |
| Nhân vật chính và boss là model 3D | Lead chốt "mọi asset là 2D, không có model 3D" (2026-11-23) | Cần người dựng, rig và làm hoạt ảnh 3D. Nhân vật 3D cần toon shader và nét viền khớp sprite 2D. Cả cảnh dùng đèn 3D (URP Universal Renderer). Bớt được 75 bộ hình nhân vật chính |

Chi tiết lợi và hại: `de-xuat-toi-uu-art.md`, `C/01-moodboard/so-sanh-3-style.md`, `C/03-quy-chuan-ky-thuat/anh-sang-2d-kieu-3d.md`.
