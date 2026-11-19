# Level design: dựng, soi, bàn giao

Nguồn: game tile chữ A (50 level, 26/08 - 08/10/2026), game sort xe A, game bi drop A, game bắn màu A, game screw tổ ong A, game phục vụ Order A, prototype-game-nhanh.

## 1. Thứ tự làm một bộ level

1. Có bảng curve và mô hình độ khó từ gd-level (điểm, nhãn, vai trò, mechanic theo "lượng-tiến độ"). Không có thì dừng.
2. Có luật khung từ DECISIONS: khung bàn (8x8, nhắm ≤ 7 hàng), số order mở, sức chứa khay, mật độ mechanic theo chặng, tầng được đặt băng, định nghĩa "sát nhau" của Link.
3. Dựng bằng tool và script có sẵn (`author`, `build-levels`, `build-from-geometry`, `retheme`). Layout vẽ tay của Lead thì khóa tọa độ, chỉ gán nội dung và mechanic.
4. Cứ 10 level kiểm và sửa một lượt: review script + soi mắt + chơi thật trong game ở viewport mục tiêu (380 px).
5. Bàn giao theo `docs/process/templates/ban-giao-level.md`: backup có timestamp trước khi ghi đè, `_index` đủ, marker dữ liệu, bảng level, danh sách lệch kèm lý do.

## 2. Mỗi level một mục đích

- Vai trò: Dạy luật (L1-3) / Giới thiệu mechanic / Luyện / Thường / Chuẩn bị đỉnh / Đỉnh / Đỉnh nhỏ / Thở (ngay sau đỉnh). game tile chữ A: 16 đỉnh trong 50 level do Lead chỉ định. Đỉnh càng về sau càng cao.
- Mechanic mới: level dạy không thể thua -> level luyện -> level thử. Không hai mechanic mới cùng lúc. Mechanic giới thiệu đặt ở chỗ thấy ngay, không chạm trần (băng 12 ở level dạy là dạy tệ, trần theo nhãn, Dễ 5).
- Level 1-5 người mới không được thua. Level 12-15 của prototype: khó do thấy hết thông tin nhưng nước hiển nhiên là bẫy và thua muộn (greedy đi êm tới 70-80% rồi kẹt).
- "Feel trước, độ khó sau" cho 15 level đầu (09/09/2026): chỉ L10 và L15 khó.
- Nhịp thứ mới (nguồn ngoài, 09/11/2026): không quá 3-4 thứ mới mỗi level (Playrix). Royal Match 21 level đầu khoảng 1 thứ mới mỗi 2-4 level (blocker L4, booster L7-8, blocker L11, booster L14, L17, L19, blocker L21). Mechanic chưa dùng trong 5 level tới thì chưa giới thiệu. Level khó thì ngắn (King). Chi tiết: `docs/knowledge/20-do-kho-va-can-bang.md` mục 6 và 9.
- Ý đồ mỗi level ghi được thành chữ trước khi dựng: vai trò, pattern gây khó (cụm dính khó gỡ, lệch thứ tự, kiểm soát ngầm ở phần ẩn), cảm xúc muốn gây ra (wow, tò mò khi có thứ mới, thành tựu, tiếc khi đi sai). Mỗi game giữ một thư viện pattern: level nào chạy tốt thì ghi pattern để dùng lại. Ghi vừa đủ, chi tiết quá thì gò người dựng (Teddy Phan và bình luận, nhóm Làm Game Hiện Đại 15/04/2026).
- Near-miss: thua khi còn 1-2 mục tiêu là màn thua làm người chơi muốn thử lại nhất, nhưng level nào cũng thua sát nút thì người chơi thấy pattern và thấy bị thao túng. Near-miss là kết quả của curve có nhịp, không cài cưỡng bức.

## 3. Mở màn và nhịp trong ván

- Vào bàn luôn có 1-2 order giải được ngay (`openingDepth`: Dễ 6, Vừa 4, Khó 3, Rất khó 2 nước liên tiếp có quân đúng thoáng). Mechanic không chạm quân mở màn.
- Nhịp: mở nhẹ, đỉnh nhỏ ~40%, nghỉ, đỉnh lớn ~77%, xả về cuối. Cường độ nhiễu không hạ ở cuối với tile-match. Đuôi là dãy dài cùng màu.
- Áp lực kiểm SAU khi gắn mechanic (nhóm Link đẩy áp lực vượt 1,00 sau khi rải chữ).

## 4. Thẩm mỹ bàn (Lead chấm bằng mắt)

- Chuẩn: game tile sort B: Sorting Jam. Bàn = cụm 2-3 quân chồng 2 tầng trên bệ, lưới có rãnh, đối xứng trái phải, đáy là kệ dài. Bàn đặc "kim cương 38 quân" là cục nhiễu. "Layout đơn giản quá không có gì đặc biệt" cũng bị chê: cần nhiều hình thù, chỗ thở, đối xứng.
- Lệch nửa ô giữa hai cột cùng tầng là thiết kế ("đan" so le). Tầng trên bắc cầu lệch nửa quân thay vì chồng thẳng. Đo độ gần, không đòi sát nhau. Không nắn.
- Bàn cao 8 quân -> quân 41,9 px ở 380 px (dưới 44). Bàn dẹt (cao/rộng < 0,7) bị bóp ngang. Bàn phải căn giữa lưới editor (tâm khối quân tại (13,10) trên lưới 26x20). Để tọa độ thô thì dạt góc.
- Viền phẳng tâm sâu: mở màn dễ, cuối ván phải đào. Bàn 1 tầng vô nghĩa vì không quân nào đè quân nào.
- `aesthetic()` 0-100 (rãnh thở, tỉ lệ tầng trên, quân lẻ, đối xứng, cân bằng, dáng, số tầng) hiệu chuẩn trên 15 bàn Lead dựng tay (77-99), giữ bàn từ 70. Mode "sáng tạo" rải cụm ngẫu nhiên ra bàn vụn: đi từ bàn cân đối rồi biến đổi có kiểm soát.
- Render demo ở cỡ thật trong game, không chỉ SVG. Codex chỉ render ý tưởng, phải dựng lại bằng code cho đúng luật.

## 5. Nội dung: từ, ảnh, màu, chủ đề

- Mỗi level một chủ đề chính (+ tối đa 2 chủ đề gần), không hiện trong game. Tránh chủ đề con người và bộ phận cơ thể (bỏ 21 từ cơ thể + BOY GIRL MOM DAD BABY NURSE), ảnh người thật (TRUMP), ảnh vẽ bộ phận (WRIST, TOE).
- Độ dễ nhận biết ảnh là trục độ khó riêng: 300 từ chấm Dễ 163 / TB 91 / Khó 46. Tỉ lệ theo tag: easy 100% dễ, normal 70/30, hard 50/35/15, super hard 40/35/25. Không để cặp dễ nhầm (LEG/KNEE, DUCK/CHICK) chung level dễ.
- Chặn trùng bộ từ ≥ 40% với bất kỳ level nào (L34 trùng 9/9 từ L16). Xoay vòng ưu tiên từ ít dùng. Bỏ từ 6 chữ khi không hợp khay.
- Màu: đo ΔE và mô phỏng mù màu, xếp màu theo độ an toàn để lấy n màu đầu, trên 6 màu cần họa tiết. Art đã chốt thì khớp art rồi di trú dữ liệu (Meow 11 -> 10 màu, giữ cấu trúc).
- Sort: hàng xe phải lộn xộn tự nhiên (tối đa 2 xe cùng màu liền nhau, 50% cặp bị tách), đa dạng cỡ bàn và số màu leo dần, sàn số nước, seed riêng từng level, cấm bàn trùng.

## 6. Cổng chất lượng bằng mắt (máy chấm 10/10 "đạt" 4 lần vẫn có lỗi)

- [ ] Mở màn có 1-2 nhóm giải được ngay
- [ ] Mechanic ở level giới thiệu không chạm trần, mật độ theo chặng
- [ ] Dây Link không quá 4 quân, Link đúng định nghĩa "sát nhau", gắn từng nhóm rồi replay
- [ ] Áp lực sau khi gắn mechanic ≤ ngưỡng (0,96 cho L50)
- [ ] Không bàn đặc, không bàn dẹt, không bàn 8 hàng, căn giữa lưới
- [ ] Không trùng bộ từ, không ảnh cấm, không cặp dễ nhầm, một chủ đề chính
- [ ] Úp không bị đè là vô tác dụng. Băng tan trước khi lộ là vô nghĩa
- [ ] Chơi thật theo `sol` qua hook trong game, tờ tổng hợp ảnh bàn cho Lead
- [ ] Marker dữ liệu đúng engine đích (`coordinateSystem`, layerOffsets chỉ để vẽ)
- [ ] Cỡ quân ≥ 44 px ở viewport mục tiêu, nút bấm không nhỏ

Lỗi mới phát hiện bằng mắt thì thành cổng trong script build/review.

## 7. Bàn giao cho Unity / engine khác

- JSON phải khai báo hệ tọa độ. Unity lật bàn khi thiếu marker, thứ tự vẽ x+y, che phủ theo lưới, lệch tầng -16/-28 px chỉ để vẽ.
- Mặt trắng ảnh quân phải khớp ô lưới, quân cùng tầng đặt khít.
- Tên file level theo id 3 chữ số, `_index` đủ, không đổi thứ tự cột CSV cho tool đọc theo vị trí (Beads Maker).
- Doc đặc tả JSON có ví dụ chú giải từng dòng và sơ đồ lưới nửa quân.

## 8. Lỗi lặp lại của level designer

- Nắn quân lệch nửa ô và ghi đè 37 level: coi bố cục của Lead là lỗi -> xác nhận trước khi sửa hình học, luôn sao lưu.
- Hai kế hoạch 50 level song song ở hai phiên -> một nguồn chân lý. Kiểm mtime và phiên khác trước khi ghi.
- 19 file bị người khác ghi trong lúc đang làm, 12 level hỏng -> không tự khôi phục, so backup, sửa tối thiểu trên bản mới.
- Đặt `activeOrders: 3` để hạ áp lực -> nhầm luật bất biến với núm -> chỉ vặn núm (chôn, nhiễu, hint, mechanic, thứ tự order).
- Test làm bẩn dữ liệu thật (Save khi test, autoplay ghi 3 sao) -> level nháp, chặn ghi tiến độ khi autoplay.
- Nhãn chỉ là chú thích nên generator để áp lực trôi -> nhãn là ràng buộc, nghiệm thu bằng số đo cuối với số ván lớn hơn lúc sinh, chừa lề dưới trần.
