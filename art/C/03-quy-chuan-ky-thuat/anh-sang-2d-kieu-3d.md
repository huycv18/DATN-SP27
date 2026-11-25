# Ánh sáng: asset 2D mà nhìn như 3D (hướng Death's Door)

Ngày 2026-11-25. Bản nháp của artist, chưa phải luật. Phần đổi camera và đưa model 3D vào game cần Lead chốt (mục 4).

**Kết luận:** Làm được, vì cảnh Unity vốn dựng 3D. Sprite 2D vẫn nhận ánh sáng thật nếu mỗi asset có thêm normal map và emissive map, rồi để engine lo đèn, bóng, sương, bloom, DOF. Đổi lại, artist phải vẽ màu gốc phẳng hơn ảnh mẫu (ít bóng vẽ sẵn), nếu không sẽ bị bóng chồng hai lần.

Tham chiếu gần nhất: dòng HD-2D (Octopath Traveler, Triangle Strategy). Nhân vật là sprite 2D đặt trong cảnh 3D, có ánh sáng thật, bóng đổ, bloom và DOF.

## 1. Mỗi asset cần những lớp gì

| Lớp | Là gì | Ai làm | Công thêm |
|---|---|---|---|
| Base color | Màu gốc, chỉ giữ bóng khối nhẹ và nét viền. Không vẽ bóng đổ, không vẽ vệt sáng của đèn | Artist | Bằng hoặc ít hơn hiện tại |
| Normal map | Cho engine biết mặt nào hướng về đâu, đèn rọi vào sẽ thấy khối | Sinh bán tự động từ base color (Laigter, SpriteIlluminator), artist sửa chỗ sai | Thấp |
| Emissive map | Vùng tự phát sáng: đèn cam trạm, Driftlife, màn hình, mắt quái | Artist tô đen trắng | Thấp, chỉ asset có đèn |
| AO hoặc bóng tiếp xúc | Vệt tối dưới chân vật, khe tường | Artist vẽ sprite bóng riêng, hoặc engine làm (SSAO) | Thấp |

## 2. Engine làm phần còn lại

| Hiệu ứng | Cho ra cảm giác gì của Death's Door | Cách làm trong Unity URP |
|---|---|---|
| Đèn chính một hướng cố định | Khối rõ, phía sáng phía tối nhất quán | Directional light, cùng hướng với hướng sáng quy ước khi vẽ |
| Bóng đổ thật | Vật đứng in bóng xuống sàn | Sprite đứng dùng material Lit có alpha clip và bật cast shadow. Vật nằm sát sàn thì dùng sprite bóng vẽ sẵn |
| Đèn điểm cục bộ | Đèn cam trong trạm, quầng sáng Driftlife | Point light hoặc spot light. Trạm ấm dần lên khi sửa khoang: bật thêm đèn, đổi màu đèn từng khoang |
| Bloom | Đèn và sinh vật phát sáng rực | Post-processing Bloom, chỉ ăn vào vùng emissive |
| DOF (tiền cảnh và hậu cảnh mờ) | Cảm giác mô hình thu nhỏ, chiều sâu | Post-processing Depth of Field. Ngoài không gian dùng nhẹ để không làm mờ vật cản |
| Sương, lớp khí | Không khí dày, xa thì nhạt dần | Fog theo khoảng cách, thêm sprite mây khí bán trong suốt nhiều lớp |
| Vệt sáng (god rays) | Tia sáng xuyên qua khe vỏ tàu | Sprite hình nón cộng sáng (additive), đặt tay ở chỗ cần |
| Bụi trôi | Không gian có không khí | Particle hạt nhỏ, nhận đèn |
| Color grading | Độ bão hòa thấp, tông lạnh ngoài, ấm trong trạm | LUT khác nhau theo vùng, chuyển dần khi qua cửa khí |

Phải dùng URP Universal Renderer (3D), không dùng 2D Renderer. 2D Lights chỉ chiếu sprite, không chiếu model 3D, nên nếu có nhân vật 3D thì cả cảnh phải dùng đèn 3D. Chọn shader cụ thể là việc của dev và gd-tech.

## 3. Ảnh hưởng tới style đã duyệt

| | Style ảnh mẫu (bóng vẽ sẵn) | Style có ánh sáng engine |
|---|---|---|
| Base color | Cel shading đậm, bóng vẽ sẵn | Bóng nhẹ, để đèn làm phần còn lại |
| Đổi ánh sáng theo trạng thái (trạm hỏng hay đã sửa, sự cố đèn đỏ) | Phải vẽ thêm bản sprite | Đổi đèn, không vẽ thêm |
| Công mỗi asset | 1 lớp | 2 tới 3 lớp, phần lớn sinh bán tự động |
| Rủi ro | Không khí phẳng hơn Death's Door | Phải thử sớm. Nhìn sẽ khác ảnh mẫu Lead đã duyệt, cần Lead xem lại |

Đề xuất: dựng một cảnh thử nhỏ (1 mảnh xác tàu, 1 nhân vật, 1 Driftlife phát sáng) bằng cả hai cách rồi mới chốt.

## 4. Phương án isometric, nhân vật chính và boss làm 3D: cần Lead chốt

Phương án này trái hai điều đã chốt:

| Đã chốt | Nguồn | Phương án mới |
|---|---|---|
| "Mọi asset là 2D, không có model 3D" | Lead 2026-11-23, `projects/game-moi/DECISIONS.md` | Nhân vật chính và boss là model 3D |
| Camera Rotation (45, 0, 0), không xoay | `projects/game-moi/gdd/he-thong/ky-thuat.md` luật 35. Bố cục trạm UI-10 và cảng UI-40 đã duyệt theo kiểu này | Isometric: camera xoay 45 độ quanh trục đứng |

Phương án vẫn có lý do mạnh:

| Lợi | Vì sao |
|---|---|
| Bớt rất nhiều hình nhân vật chính | Hiện cần 25 clip x 3 hướng vẽ = 75 bộ hình. Model 3D chỉ cần 25 hoạt ảnh trên một rig, xoay hướng nào cũng có, kể cả 8 hướng |
| Mảnh bộ đồ thay dễ | 21 biến thể mảnh bộ đồ và 4 skin co-op chỉ là thay mesh hoặc texture, không vẽ lại theo từng clip |
| Ánh sáng thật trên nhân vật | Đúng hướng Death's Door |

Phải trả lời trước khi chốt:

| Câu hỏi | Vì sao quan trọng |
|---|---|
| Ai dựng, rig và làm hoạt ảnh 3D? | Nhóm có 1 artist 2D và 4 dev. Nếu artist tự làm thì phải tính thời gian học và làm. Nếu thuê ngoài thì tốn tiền |
| NPC (Ingrid, Linh, Tikko) và Driftlife vẫn là 2D đứng cạnh nhân vật 3D | Dễ lệch style. Nhân vật 3D phải dùng toon shader và nét viền khớp độ dày nét của sprite 2D |
| Isometric thì kit môi trường tốn hơn | Tường và sàn cần 2 hướng, bố cục trạm và cảng phải vẽ lại theo lưới thoi |
| Một cách lai ít rủi ro hơn | Dựng nhân vật 3D rồi render ra sprite 2D (cách Supergiant làm Hades). Vẫn đúng luật "asset trong game là 2D", vẫn bớt công vẽ từng hướng, nhưng mất ánh sáng thật trên nhân vật |
