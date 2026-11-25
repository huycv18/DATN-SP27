# 01 - Moodboard

Ưu tiên 1. Mọi phần sau đều dựa vào đây, nghiên cứu xong mới có cơ sở vẽ style frame. Dự kiến 1 đến 2 ngày.

## Điểm neo: 2 ảnh Lead đã duyệt

`projects/game-moi/art/gameplay-dai-gan-thu-hoi.png` và `gameplay-dai-gan-bai-vo.png`. Moodboard dùng để **mở rộng và làm rõ** phong cách này, không đi ngược nó. Ảnh tham chiếu nào lệch hẳn (pixel art, 3D render, góc nhìn ngang) thì không lấy.

Những gì 2 ảnh đã định sẵn:
- Nét viền đậm, tô màu kiểu cel shading (bóng đổ khối rõ ràng, không chuyển màu mềm), khối hình chắc, dày.
- Góc nhìn nghiêng 45 độ, vật thể có độ dày, nhìn thấy cả mặt trên lẫn mặt bên.
- Nền xanh than và tím đậm. Vỏ tàu màu be và xanh rêu, có rỉ sét. Đèn cam ấm.
- Driftlife phát quang xanh ngọc. Quái săn mồi màu cam đỏ, mắt sáng.
- Nhân vật thấp, đầu to, bộ đồ cam.

## Các bước

| Bước | Làm gì |
|---|---|
| 1 | Đọc `projects/game-moi/gdd/00-khung-game.md` mục 1, 2, 3, 13 và xem kỹ 2 ảnh neo. Ghi ra 5 từ khóa cảm giác của game |
| 2 | Gom ảnh theo 6 bảng ở dưới, mỗi bảng 15 đến 30 ảnh. Lấy nhiều rồi lọc sau |
| 3 | Lọc: mỗi bảng giữ 8 đến 15 ảnh tốt nhất. Ảnh nào cũng phải trả lời được "lấy gì từ ảnh này" |
| 4 | Ghi chú ngay trên bảng: khoanh vùng, ghi "lấy hình khối", "lấy màu", "lấy ánh sáng", "lấy độ chi tiết". Chỗ cần tránh thì ghi "không lấy" |
| 5 | Ghi nguồn mọi ảnh vào `nguon.md` |
| 6 | Viết `tong-ket.md` nửa trang: rút ra gì cho style frame (xem mục Đầu ra) |

## 6 bảng

| Bảng | Chủ đề | Tìm gì | Gợi ý nguồn |
|---|---|---|---|
| 1 | Bãi vỡ ngoài không gian (Vành đai ngoài) | Xác tàu vỡ, khung dầm, thiên thạch, băng, mây khí. Cảnh nhìn chéo từ trên, nền tối mà vật vẫn đọc rõ | Game isometric hoặc top-down 2.5D vẽ tay, concept art sci-fi trên ArtStation |
| 2 | Trạm Ember (nội thất) | Phòng nhìn từ trên xuống, nối nhau bằng hành lang. Hai trạng thái: hỏng (tối, lạnh, đèn chớp) và đã sửa (ấm, đèn cam, có người) | Ảnh nội thất trạm ISS, game quản lý có phòng nhìn từ trên xuống |
| 3 | Nhân vật và bộ đồ | Bộ đồ không gian chia mảnh (bình Oxy, vỏ, bộ đẩy, túi, đai), tỉ lệ đầu to, nét mặt nhìn rõ qua kính mũ | Dave the Diver (chỉ lấy cảm giác biểu cảm), concept bộ đồ phi hành gia |
| 4 | Driftlife | Sinh vật biển sâu phát quang: bướm đêm, cá đuối, tôm krill đi bầy, lươn điện. Loài hiền dáng tròn, màu lạnh. Loài săn mồi dáng nhọn, có điểm báo đỏ hoặc vàng | Ảnh sinh vật biển sâu thật, ảnh sinh vật phát quang |
| 5 | Thương nhân và tàu ngoài hành tinh | Loài Oru (Tikko), tàu gom phế liệu chắp vá, cảng neo tàu | Concept alien thân thiện, có chút hài hước |
| 6 | UI sci-fi game PC | HUD bám mép màn hình, thanh Oxy, ô công cụ, bảng giao thương | WarFront Demo trên Steam (Lead lấy làm mốc chất lượng UI), UI game sci-fi PC |

Ưu tiên ảnh chụp từ game đã phát hành có cùng góc camera, vì nhìn được cảnh thật ở cỡ thật. Ảnh concept đẹp mà không có trong game thì chỉ dùng cho màu và không khí.

## Công cụ

PureRef: miễn phí, kéo thả ảnh, ghi chú ngay trên bảng. Mỗi bảng lưu một file `.pur` và xuất một ảnh PNG để người khác xem không cần cài PureRef. Ai quen Figma thì dùng Figma, file `The Novent` của nhóm đã có sẵn.

## Kiểm nhanh trước khi chốt

- Thu nhỏ bảng xuống cỡ nhân vật trong game (khoảng 72 px mỗi u ở 720p) mà vẫn nhìn ra hình thì ảnh đó dùng được.
- Đặt 2 ảnh neo cạnh bảng. Ảnh nào nhìn lạc tông thì bỏ.
- Không có ảnh nào chỉ đẹp mà không trả lời được câu "lấy gì".

## Đầu ra

| File | Nội dung |
|---|---|
| `bang-1-bai-vo.png` tới `bang-6-ui.png` | 6 bảng đã ghi chú, kèm file `.pur` |
| `nguon.md` | Bảng 3 cột: Ảnh, Nguồn (link hoặc tên game), Lấy gì |
| `tong-ket.md` | 5 từ khóa phong cách, quy tắc hình khối (cái gì tròn, cái gì nhọn), bảng màu sơ bộ 8 đến 12 màu, những thứ không làm |

Xong thì chuyển sang `02-style-frame`.

## Lưu ý

- Dave the Diver và mọi game tham chiếu chỉ lấy cảm giác, không chép asset, không vẽ lại y hệt.
- Lấy tên gọi đúng theo GDD: Vành đai ngoài (không còn gọi là Dải Gần), Station Ember, Driftlife, The Veyl.
