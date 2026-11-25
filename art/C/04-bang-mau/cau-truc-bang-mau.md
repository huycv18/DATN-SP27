# Cấu trúc bảng màu

Ngày 2026-11-25. Bản nháp của artist. Mã hex chỉ ghi màu đã chốt, còn lại artist chọn khi vẽ.

**Kết luận:** Đúng, mỗi vùng một bảng màu (GDD đã ghi: "mỗi dải một bảng màu", và qua ranh dải thì đổi màu nền là luật MVP trong `map.md`). Nhưng bảng màu chia làm 3 lớp. Lớp 1 giữ nguyên trên toàn game để người chơi luôn đọc được tín hiệu. Chỉ lớp 2 đổi theo vùng.

## Lớp 1 - Cố định toàn game, không vùng nào được dùng làm màu chủ

### Nghĩa của màu (giữ đúng trên toàn game)

| Màu | Nghĩa | Không dùng cho |
|---|---|---|
| Đỏ | Nguy hiểm: đòn lớn, mất Oxy, Oxy 10% | Trang trí môi trường ở tiền cảnh |
| Vàng hổ phách | Cảnh báo: đòn thường, Oxy 25%, hazard sắp kích | Vật nhặt được, bậc hiếm |
| Xanh dương | Cơ hội: con vật đang choáng | Nền, ánh sáng môi trường |
| Trắng ấm viền sáng | Nhặt được, tương tác được | Vật trang trí, mảnh vụn |
| 4 màu slot | Người chơi nào | Môi trường, Driftlife, thương nhân |

### Bảng hex

Cột Nguồn: "Đã chốt" là số có trong GDD, không tự đổi. "Đề xuất" là số artist đặt, chốt sau khi chạy `kiem-mau.py` và vẽ thử.

| Nhóm | Tên | Hex | Nguồn |
|---|---|---|---|
| Slot 1 ○ (Noor, MVP) | Cam Ember | `#F26B1D` | Đã chốt, `ho-so-nhan-vat.md` luật 6 |
| Slot 2 △ (Jonas, MVP) | Lam ngọc | `#1FB5D6` | Đã chốt, như trên |
| Slot 3 □ (Mei, Sau MVP) | Vàng chanh | `#D8E21F` | Đã chốt, như trên |
| Slot 4 ◇ (Tariq, Sau MVP) | Hồng tím | `#D6309B` | Đã chốt, như trên |
| The Wardens | Trắng xương, lục acid | `#EDEBE0`, `#7CFC3A` | Đã chốt, `ho-so-nhan-vat.md` |
| Báo trước đòn thường | Vàng hổ phách | `#FFB020` | Đề xuất. GDD chỉ ghi "vàng" |
| Báo trước đòn lớn | Đỏ | `#FF3B30` | Đề xuất. GDD chỉ ghi "đỏ" |
| Choáng | Xanh dương | `#3D7BFF` | Đề xuất. GDD chỉ ghi "vòng xanh dương" |
| Vật nhặt được | Viền trắng ấm | `#FFF4D6` | Đề xuất |
| Bậc hiếm 1 tới 4 | Xám, lục, lam, tím | `#A7B0BA`, `#45C46A`, `#4FA3FF`, `#C77DFF` | Đề xuất. Mỗi bậc thêm một kiểu viền và hình riêng |
| Driftlife phát quang (Vành đai ngoài) | Xanh ngọc | `#80C5C8` | Lấy mẫu từ ảnh Lead duyệt |
| Cửa neo 1 tới 3 ở cảng | Chưa có | | Chọn sau cùng: phải khác 4 slot cả màu và độ sáng (`ux-ui.md` luật 30) |
| UI | Khung, chữ, nút | | Chữ phải đạt tương phản 4,5:1, đo bằng script (`ux-ui.md` luật 4) |

Nhân vật chính không có một màu bộ đồ cố định: bộ đồ mỗi nhân vật mang màu slot của nhân vật đó. MVP có 2 nhân vật là Noor (cam) và Jonas (lam xám nhấn lam ngọc).

### Kết quả kiểm bằng máy (`python art/C/04-bang-mau/kiem-mau.py`, 2026-11-25)

Mọi màu trên đều đạt tương phản từ 3:1 trở lên với nền Vành đai ngoài `#1E1C3D`. Thấp nhất là Slot 4 hồng tím (3,7) và choáng (4,2).

Những cặp dưới đây lệch hue dưới 20 độ. Chỉ các cặp xuất hiện cùng chỗ mới cần xử lý:

| Cặp | Lệch hue | Cùng xuất hiện? | Cách xử lý |
|---|---|---|---|
| Slot 2 lam ngọc / Driftlife xanh ngọc | 8 | Có, cả hai đều trong MVP và cùng bay ngoài không gian | **Phải xử lý.** Cách 1: đẩy màu phát sáng Driftlife sang xanh lục ngọc. Cách 2: bộ đồ Jonas để lam xám là chính, lam ngọc chỉ nhấn ở mũ và đèn. Người chơi luôn có dấu hình slot bên cạnh |
| Slot 1 cam / báo đòn vàng và đỏ | 17, 19 | Có | Báo đòn sáng cả thân con vật và nhấp nháy, còn người chơi không phát sáng. Người chơi tách ra bằng hình dáng |
| Báo đòn vàng / viền vật nhặt được | 5 | Có | Đủ khác về độ sáng (0,38). Vật nhặt được để viền mảnh và đứng yên, báo đòn thì nhấp nháy |
| Choáng / bậc hiếm 3 | 9 | Ít: choáng ở trên con vật, bậc hiếm ở icon và kho | Chấp nhận |
| Wardens trắng xương / viền vật nhặt được | 7 | Sau MVP | Xử lý khi làm The Wardens |

Bậc hiếm 4 lúc đầu đề xuất vàng kim, nhưng trùng báo đòn vàng (lệch 5 độ, độ sáng gần bằng nhau), nên đã đổi sang tím.

Quy ước khi Driftlife có màu: GDD ghi loài săn mồi "có điểm đỏ hoặc vàng". Những điểm này phải là chấm nhỏ, trầm và đứng yên, để không lẫn với lúc cả thân sáng lên báo đòn.

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
