# Đề xuất: tối ưu công artist mà không giảm độ đẹp

Ngày 2026-11-25. Bản đề xuất của artist, trình Lead. Chưa phải luật.

**Kết luận:** Phần lớn độ đẹp của Death's Door và Hades 2 đến từ ánh sáng, màu, VFX và cảm giác chuyển động, không đến từ chi tiết vẽ trên từng asset. Vì vậy hãy dồn độ đẹp vào những thứ engine làm một lần là dùng cho cả game, và cắt chi tiết vẽ tay ở những chỗ người chơi không nhìn kỹ.

## 1. Năm nguyên tắc

| # | Nguyên tắc | Làm thế nào | Công artist |
|---|---|---|---|
| 1 | Ánh sáng do engine làm | Đèn thật, bóng đổ, bloom, sương, DOF, LUT màu theo vùng (xem `C/03-quy-chuan-ky-thuat/anh-sang-2d-kieu-3d.md`). Artist chỉ thêm normal map sinh bán tự động và emissive map | Thêm ít, lợi nhiều nhất |
| 2 | Vẽ một lần, dùng nhiều lần | Kit mảnh ghép cho môi trường. Decal (rỉ sét, vết bẩn, số hiệu, vết cháy) dán chồng để mỗi chỗ trông khác nhau. Mặt phẳng lớn dùng texture lặp | Giảm mạnh |
| 3 | Đổi màu thay vì vẽ mới | Biến thể Driftlife, tàu, skin co-op, bậc hiếm dùng palette swap hoặc hue shift bằng shader | Giảm mạnh |
| 4 | Chi tiết đặt đúng chỗ | Chi tiết dày ở nhân vật, vật tương tác, mốc lớn. Sàn, tường, vật trôi xa thì trơn. Bớt khoảng một nửa chi tiết so với 2 ảnh mẫu | Giảm vừa |
| 5 | VFX và cảm giác do dev làm | Hitstop, rung màn, particle, tia sáng làm bằng engine. Artist vẽ bộ texture VFX dùng chung (tia lửa, khói, vòng sáng) | Giảm vừa |

## 2. Nhân vật chính: điểm quyết định lớn nhất

Nhân vật chính là khối việc nặng nhất (25 clip x 3 hướng = 75 bộ hình, 21 biến thể bộ đồ, 4 skin). Cách tối ưu phụ thuộc vào việc artist có làm được 3D hay không.

| Cách | Công artist | Đẹp | Điều kiện |
|---|---|---|---|
| A. Model 3D trong game, toon shader và nét viền | Thấp nhất: 1 rig, 25 hoạt ảnh, mọi hướng có sẵn, bộ đồ chỉ là thay mesh | Cao, ánh sáng thật trên nhân vật | Biết dựng, rig, làm hoạt ảnh 3D. Lead phải mở lại luật "không có model 3D" |
| B. Model 3D render ra sprite (cách Hades) | Thấp | Cao, nhưng ánh sáng vẽ sẵn vào sprite | Biết 3D. Vẫn đúng luật "asset trong game là 2D" |
| C. Rig xương 2D (Spine hoặc Unity 2D Animation), 3 hướng | Cao: vẽ bộ mảnh cho 3 hướng, làm 75 hoạt ảnh | Cao nếu hoạt ảnh tốt | Chỉ cần 2D. Đúng mọi luật đã chốt |

Đề xuất: nếu artist làm được 3D thì chọn A cho nhân vật chính và boss. Nếu không thì chọn C, và xin gd-character gộp bớt clip gần giống nhau (ví dụ Dùng dụng cụ hạ và Dùng dụng cụ bắt dùng chung tư thế).

## 3. Camera

Giữ top-down 45 độ không xoay theo spec hiện tại thì kit môi trường rẻ hơn isometric (tường và sàn chỉ một hướng, ghép theo lưới vuông). Bố cục trạm và cảng Lead đã duyệt cũng theo kiểu này. Đổi sang isometric không làm game đẹp hơn bằng việc đầu tư vào ánh sáng, mà tốn thêm công kit.

## 4. Không nên cắt

| Thứ | Vì sao |
|---|---|
| Silhouette và biểu cảm nhân vật | Là điểm nhận diện kiểu Dave the Diver, người chơi nhìn suốt |
| Driftlife phát sáng | Là thứ đẹp nhất trên nền không gian tối, cũng là tín hiệu gameplay |
| Báo trước đòn (vàng, đỏ) | Ảnh hưởng trực tiếp tới combat |
| Trạm ấm dần khi sửa khoang | Là cách người chơi thấy tiến trình bằng mắt (pillar CP3) |

## 5. Về AI tạo ảnh

Dùng được cho moodboard và thử ý tưởng nhanh. Asset cuối trong game nên do artist làm để giữ đồng đều style. Nếu có asset dùng AI thì phải khai báo trên trang Steam theo quy định của Steam.
