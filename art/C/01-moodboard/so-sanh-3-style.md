# So sánh 3 art style: The Novent (ảnh mẫu), Death's Door, Hades 2

Ngày 2026-11-25. Mục đích: chọn hướng art cho concept, đánh giá độ khó theo sức 1 artist 2D.

**Kết luận:** Giữ nền style của 2 ảnh mẫu Lead đã duyệt (2D nét viền, cel shading). Lấy thêm từ Hades 2 cách chia màu theo vùng và vật phát sáng trên nền tối. Lấy thêm từ Death's Door không khí ánh sáng, nhưng phần này do engine làm (đèn 2D, bloom, vignette trong Unity), không phải artist vẽ. Không đi theo Death's Door làm nền vì đó là game 3D thật.

## 1. Ba style là gì

| | The Novent (2 ảnh mẫu) | Death's Door | Hades 2 |
|---|---|---|---|
| Cách làm | 2D vẽ tay, nét viền đậm, tô cel shading (bóng khối rõ, ít chuyển màu) | Model 3D low-poly, texture đơn giản, ánh sáng và bóng đổ thời gian thực, làm mờ tiền cảnh và hậu cảnh | Môi trường 2D vẽ tay kiểu painterly, nét mực đậm. Nhân vật dựng model 3D rồi render ra sprite 2D |
| Cảm giác | Comic, rõ ràng, vui mắt | Tĩnh lặng, điện ảnh, ánh sáng đẹp | Đậm đặc, giàu chi tiết, màu mạnh theo từng vùng |
| Màu | Nền xanh than và tím, vỏ tàu be và xanh rêu, đèn cam, sinh vật phát quang | Ít màu, độ bão hòa thấp, ánh sáng làm điểm nhấn | Mỗi vùng một bảng màu riêng, nền tối, vật phát sáng rực |

## 2. Ưu và nhược điểm

| | Ưu điểm | Nhược điểm |
|---|---|---|
| The Novent | Lead đã duyệt. Thuần 2D, đúng luật "mọi asset là 2D". Nét viền giúp nhân vật và vật thể đọc rõ trên nền không gian tối, cả khi thu nhỏ. Cel shading vẽ nhanh hơn painterly và dễ giữ đồng đều qua nhiều asset. Dễ chia mảnh để tái dùng (kit vỏ tàu, bộ đồ chia mảnh) | Ánh sáng vẽ sẵn vào hình, nên "trạm ấm dần lên" và đèn đổi trạng thái phải làm bằng lớp sáng riêng hoặc đèn 2D trong Unity. Ảnh mẫu rất nhiều chi tiết (đinh tán, rỉ, tấm vỏ), giữ mức đó cho cả kit và 155 icon là quá tải. Dễ nhìn chung chung nếu không có điểm nhận diện riêng |
| Death's Door | Không khí và ánh sáng mạnh nhất trong 3 style. Bóng đổ thật, đèn đổi được trong game. Hoạt ảnh làm 1 lần trên rig 3D, xoay hướng nào cũng có hình, không phải vẽ từng hướng | Cần người dựng model 3D, rig 3D, ánh sáng 3D. Trái luật Lead "không có model 3D" và nhóm chỉ có 1 artist 2D. Vẽ 2D giả lại thì mất đúng cái đẹp nhất là ánh sáng thật. Vẻ đẹp đến nhiều từ cây cối và vệt nắng, cảnh không gian không có những thứ đó |
| Hades 2 | Hợp không khí The Novent: nền tối, vật phát sáng rực, đọc rất rõ. Màu theo vùng khớp luật "mỗi dải một bảng màu". Nét mực đậm cùng họ với nét viền của ảnh mẫu | Mỗi mảnh vẽ painterly rất tốn công, Supergiant có cả một đội art. Nhân vật mượt vì quy trình 3D render ra sprite, artist 2D vẽ tay không theo được. Chi tiết dày, 1 người khó giữ đồng đều trên mọi asset |

## 3. Độ khó với nhóm 1 artist 2D

Thang 1 (dễ) tới 5 (rất khó). Đây là ước lượng so sánh giữa 3 style, chưa đo bằng giờ thật.

| Tiêu chí | The Novent | Death's Door | Hades 2 |
|---|---|---|---|
| Kỹ năng cần có | 3 | 5 (kỹ năng 3D, không phải 2D) | 5 |
| Công vẽ mỗi asset môi trường | 3 (giảm còn 2 nếu bớt chi tiết) | Không áp dụng cho 2D | 5 |
| Hoạt ảnh nhân vật 3 hướng | 3 (rig xương 2D, đã có trong GDD) | 2 nếu có người làm 3D, không làm được nếu chỉ có 2D | 5 |
| Giữ đồng đều qua khoảng 155 icon và kit | 2 | Không áp dụng | 4 |
| Khớp ràng buộc Lead đã chốt | Khớp | Trái luật | Khớp một phần (môi trường 2D được, nhân vật thì không) |
| **Tổng thể** | **Trung bình. Làm được nếu bớt chi tiết** | **Không làm được với nhóm hiện tại** | **Rất khó. Chỉ nên mượn ý** |

## 4. Đề xuất hướng đi

| Lấy từ | Lấy gì | Ai làm |
|---|---|---|
| The Novent | Nền style: nét viền, cel shading, khối dày, màu trong ảnh mẫu | Artist |
| The Novent | Bớt chi tiết khoảng một nửa so với ảnh mẫu: chi tiết dồn vào chỗ người chơi tương tác, mặt phẳng lớn để trơn | Artist |
| Hades 2 | Mỗi vùng một bảng màu riêng, vật tương tác và sinh vật phát sáng trên nền tối, nét viền dày mỏng khác nhau giữa tiền cảnh và hậu cảnh | Artist |
| Death's Door | Đèn 2D, bloom, vignette, làm mờ hậu cảnh, vệt sáng, bụi trôi | Dev trong Unity (URP 2D Lights, post-processing). Artist chỉ vẽ sprite vệt sáng và hạt bụi |

## 5b. Death's Door và ref AI của Lead, nếu làm 2D hết

Ref AI của Lead là 2 tranh key art: trạm neo trên bãi vỡ, phi hành gia kéo thùng cạnh cửa khoang.

| | Death's Door làm 2D | Ref AI của Lead làm 2D |
|---|---|---|
| Ưu | Khối hình to, đơn giản, ít chi tiết nên vẽ nhanh. Đẹp nhờ ánh sáng (mảng sáng tối lớn, đốm nắng, phát sáng xanh ngọc, DOF), mà những thứ này engine làm được trên sprite 2D. Ít nét viền nên dễ giữ đồng đều | Bản sắc mạnh: tím chàm của không gian đối với cam ấm của đèn trạm, vỏ tàu đỏ và kem có rỉ sét, sinh vật xanh ngọc. Nét viền ngoài dày nên silhouette đọc rõ trên nền tối. Chất liệu kể chuyện được (rỉ, băng, san hô). Nhân vật có biểu cảm. Cùng họ với 2 ảnh gameplay Lead đã duyệt |
| Nhược | Ra 2D mà thiếu ánh sáng engine thì nhìn phẳng và đục. Màu xanh lá, độ bão hòa thấp, hợp rừng chứ không hợp không gian tối: Death's Door đọc rõ nhờ nền sáng, nền không gian thì ngược lại. Bản sắc yếu nếu chỉ chép cách làm | Chi tiết rất dày (đường gạch bóng, đinh tán, đường ghép tấm), 1 artist không giữ nổi qua cả game. Đây là key art góc nhìn ngang và 3/4, không phải góc camera trong game, nên phải dịch lại. Nét gạch bóng thu nhỏ về cỡ trong game thành nhiễu. Nền nhiều chi tiết dễ tranh chỗ với vật cần đọc trong gameplay. Ảnh AI có chi tiết vô lý, không chép thẳng được |
| Độ khó vẽ | Trung bình thấp, cộng phần việc ánh sáng của dev | Cao |

### Kết hợp: khối và ánh sáng của Death's Door, màu và bản sắc của ref Lead

| Lấy từ | Lấy gì | Quy tắc khi vẽ |
|---|---|---|
| Ref Lead | Bảng màu | Nền tím chàm, đèn trạm cam ấm, vỏ tàu đỏ và kem có rỉ, Driftlife xanh ngọc, băng xanh lạnh. Cặp tím đối cam là màu chủ đạo của game |
| Ref Lead | Nét viền ngoài | Chỉ giữ nét dày ở viền ngoài silhouette. Bên trong bỏ gần hết nét, bỏ gạch bóng |
| Ref Lead | Thiết kế nhân vật và chất liệu | Bộ đồ cam, mặt nhìn thấy qua kính mũ, rỉ sét, băng, sinh vật dạng san hô phát sáng |
| Death's Door | Khối hình | Khối to và đơn giản, mặt phẳng lớn để trơn, chi tiết chỉ đặt ở chỗ người chơi tương tác |
| Death's Door | Tô bóng | 2 tới 3 tông màu mỗi vật, ranh giới sáng tối mềm hơn cel shading của ref Lead |
| Death's Door | Ánh sáng | Mảng sáng tối lớn do engine làm: vũng sáng dưới đèn trạm và quanh Driftlife thay cho đốm nắng, viền sáng tím từ tinh vân, DOF, sương nhiều lớp, bloom. Dùng light cookie cho vệt sáng in trên sàn |

Tóm lại: ref Lead cho biết game **trông là ai** (màu, nhân vật, chất liệu), Death's Door cho biết **cách làm cho rẻ mà vẫn đẹp** (khối đơn giản, ánh sáng gánh phần đẹp). Độ khó gộp lại ở mức trung bình.

## 5. Phải chốt trước khi vẽ concept: isometric hay top-down 45 độ

Hai cách nhìn này khác nhau, và hồ sơ dự án đang lệch nhau ở chỗ này.

| | Isometric | Top-down 45 độ theo spec hiện tại |
|---|---|---|
| Camera Unity | Nghiêng khoảng 30 độ và xoay 45 độ quanh trục đứng | Rotation (45, 0, 0): nghiêng 45 độ, không xoay (`gdd/he-thong/ky-thuat.md` luật 35) |
| Sàn và tường trên màn hình | Ô sàn hình thoi, tường chạy chéo, thấy 2 mặt bên của vật | Ô sàn hình chữ nhật, tường chạy ngang và dọc màn hình, thấy mặt trên và mặt trước |
| Giống | 2 ảnh mẫu Lead duyệt, Hades 2, Death's Door | Bố cục trạm UI-10 và cảng UI-40 Lead đã duyệt, Tilemap trong spec dev |
| Công art | Cao hơn: mỗi mảnh tường, sàn cần 2 hướng (lật gương được một phần), ghép kit phòng khó hơn | Thấp hơn: tường chỉ cần mặt trước và mặt bên, ghép kit kiểu lưới vuông dễ |

2 ảnh mẫu nhìn theo kiểu isometric, còn spec camera và bố cục trạm theo kiểu top-down không xoay. Muốn đi isometric thì phải báo Lead và dev chốt lại camera trước, vì đổi camera là đổi cả quy chuẩn kỹ thuật (`03-quy-chuan-ky-thuat`), kit môi trường và bố cục trạm.
