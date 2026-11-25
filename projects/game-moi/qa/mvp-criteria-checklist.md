# MVP Criteria Checklist chương 1 (game-moi, EMBER)

Sinh bằng `node projects/game-moi/qa/build-mvp-checklist.mjs` từ mục "Tiêu chí nghiệm thu" trong mỗi `GD-031-<file>.md`. Giờ sinh: 2026-11-23 13:33. Không sửa tay, sửa ở file GD-031 rồi chạy lại.
Chỉ lấy dòng nhãn MVP (kể cả nhãn lẫn "MVP chương 1, Sau MVP chương 2 đến 5"). Trạng thái TRUE chỉ khi chạy được và đo được. Chưa có build Unity nên mọi dòng đang FALSE (chưa kiểm). Cột Cách kiểm: Máy là sim hoặc script chạy ngay được, Build hoặc playtest cần build.
Tiêu chí còn lỗi (mơ hồ, thiếu số) đã ghi ở file GD-031 tương ứng, chưa sửa ở đây.

| Hệ thống | Nguồn | Số tiêu chí MVP |
|---|---|---|
| Cốt truyện | cot-truyen.md | 13 |
| Người chơi | nguoi-choi.md | 14 |
| Hồ sơ nhân vật | ho-so-nhan-vat.md | 8 |
| Combat | combat-driftlife.md | 11 |
| Vật phẩm | vat-pham.md | 17 |
| Map | map.md | 11 |
| Trạm và cảng | tram-va-cang.md | 21 |
| Kinh tế | kinh-te-tien-trinh.md | 0 |
| UX và UI | ux-ui.md | 16 |
| Kỹ thuật | ky-thuat.md | 13 |
| Khung | khung | 10 |
| Tổng | | 134 |

| ID | Feature | Category | Acceptance Criteria | Nhãn | Cách kiểm | Status | Actual Result | Nguồn |
|---|---|---|---|---|---|---|---|---|
| CK-01 | Một ngày chương 1 | Nhịp | Một ngày đủ 2 chuyến và ca cảng dài 15 đến 20 phút ở chương 1 (sim chuyến cộng sim ca cảng, sai lệch cho phép 15%) | MVP | Máy | FALSE | Chưa chấm, chưa có build | khung |
| CK-02 | Trần chuyến mỗi ngày (K22) | Luật | Sau chuyến thứ hai hoặc khi đã mở ca cảng, cửa khí khóa. Skiff cũng tính một chuyến | MVP | Build | FALSE | Chưa chấm, chưa có build | khung |
| CK-03 | Sang ngày và lưu (K23) | Luật | Ngày không có đồng hồ. Chỉ sang ngày khi ngủ. Tự lưu ở ba lúc: sau mỗi chuyến, sau ca cảng, lúc ngủ. Thoát giữa chuyến hoặc giữa ca cảng thì lần sau vào lại ở điểm lưu gần nhất | MVP | Build | FALSE | Chưa chấm, chưa có build | khung |
| CK-04 | Thoát giữa chuyến (C10) | Co-op, lưu | Rời phiên hoặc mất kết nối quá 15 giây giữa chuyến tính như bị kéo về, giữ 1 món. Một mình thoát giữa chuyến thì mất đồ trong chuyến và vẫn tính một chuyến. Host thoát thì phiên kết thúc, thế giới về điểm lưu gần nhất | MVP | Build | FALSE | Chưa chấm, chưa có build | khung |
| CK-05 | Hết Oxy (K2) | Luật | Oxy về 0 rồi không ai cứu: bị kéo về, giữ đúng 1 món, 0 Tally bị trừ, không nợ | MVP | Build | FALSE | Chưa chấm, chưa có build | khung |
| CK-06 | Chơi một mình trọn chương 1 (P3) | Co-op | Một người chơi trọn chương 1 (mọi quest, ca cảng, sửa khoang) không cần người thứ hai và không có thứ chỉ co-op mới có | MVP | Playtest | FALSE | Chưa chấm, chưa có build | khung |
| CK-07 | Co-op 2 người (C1 đến C10) | Co-op | Hai người online chơi trọn một ngày: xác nhận cửa khí C5, kết chuyến riêng C6, người về sớm không ra lại C9, không tạm dừng toàn cục C7 | MVP | Playtest | FALSE | Chưa chấm, chưa có build | khung |
| CK-08 | Chương 1 dài | Nhịp | Chơi trọn chương 1 từ 1,5 đến 2 giờ (sim kinh tế, sai lệch 15%) | MVP | Máy | FALSE | Chưa chấm, chưa có build | khung |
| CK-09 | Tally duy nhất (K18) | Kinh tế | Không có tiền thứ hai và không XP. Nguồn Tally chính là ca cảng. Grep GDD không thấy tiền khác | MVP | Máy | FALSE | Chưa chấm, chưa có build | khung |
| CK-10 | Solace là mồi (L14) | Truyện | Grep GDD không còn chữ coi Solace là đích hay điểm kết của game. Chỉ còn là niềm tin của nhân vật | MVP | Máy | FALSE | Chưa chấm, chưa có build | khung |
| CT-01 | Cấu trúc mốc và vật truyện | Data | Mỗi chương có ít nhất 3 mốc và ít nhất 2 vật truyện có khe trong map nhánh: 9, 8, 8, 7, 8 mốc và 4, 6, 6, 5, 2 vật | MVP chương 1, Sau MVP chương 2 đến 5 | Máy | FALSE | Chưa chấm, chưa có build | GD-031-cot-truyen.md |
| CT-02 | Quest người vớt | Rule | Mỗi người vớt mở đúng tính năng K12 theo luật 15 tram-va-cang. Linh cần cả KH06 và KH07 | MVP (Ingrid, Linh), Sau MVP (3 người) | Máy | FALSE | Chưa chấm, chưa có build | GD-031-cot-truyen.md |
| CT-03 | Không tên cũ | Content | grep 0 tên phản diện cũ. Đạt | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-cot-truyen.md |
| CT-04 | Giới hạn thoại | Content | 0 câu vượt 80 hoặc 60 ký tự, 0 chữ số, 0 từ chỉ số người. Đạt (59 ký tự tối đa) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-cot-truyen.md |
| CT-05 | Sổ tay chương 1 | Playtest | Bỏ qua mọi cảnh: Sổ tay có 9 dòng tóm tắt và luôn có một dòng mục tiêu. Cần build | MVP | Build hoặc playtest | FALSE | Chưa chấm, chưa có build | GD-031-cot-truyen.md |
| CT-06 | Kéo buồng bị kéo về | Playtest | Bị kéo về khi đang kéo buồng Ingrid: chuyến sau buồng ở vị trí gốc. Cần build | MVP | Build hoặc playtest | FALSE | Chưa chấm, chưa có build | GD-031-cot-truyen.md |
| CT-07 | Co-op vật manh mối | Playtest | Người 1 nhặt MM1.1 thì Sổ tay người 2 có MM1.1 ở lần mở kế tiếp. Cần build | MVP | Build hoặc playtest | FALSE | Chưa chấm, chưa có build | GD-031-cot-truyen.md |
| CT-08 | Số người tỉnh dậy | Content | Không câu thoại nào sai với số người. Chưa có bảng chuỗi | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-cot-truyen.md |
| CT-09 | Che tên người nói | Playtest | Đoán đúng ít nhất 2 trên 3 câu mẫu mỗi người vớt | MVP (Ingrid, Linh), Sau MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-cot-truyen.md |
| CT-10 | Biết việc kế tiếp | Playtest | Sau C1.9, ít nhất 7 trên 10 người chơi nói được việc kế tiếp không mở Sổ tay. Cần build | MVP | Build hoặc playtest | FALSE | Chưa chấm, chưa có build | GD-031-cot-truyen.md |
| CT-11 | Vật truyện đủ ID, khe, mốc | Data | Validator của gd-tech: mỗi vật truyện có ID trong vat-pham.md, khe trong map.md, mốc hiện. Hiện chưa có validator (lỗi N4) | MVP chương 1 | Máy | FALSE | Chưa chấm, chưa có build | GD-031-cot-truyen.md |
| CT-12 | Mốc xong một lần trong co-op | Playtest | Hai người: mốc xong từ người nào cũng ghi một lần, mỗi người thấy mỗi cảnh nhiều nhất một lần. Cần build | MVP | Build hoặc playtest | FALSE | Chưa chấm, chưa có build | GD-031-cot-truyen.md |
| CT-13 | Sàn ngày chuỗi mốc | Data | Chương 1 không xong trước ngày 6 với mọi số người. Sim kinh tế phải đạt. Hiện chưa (lỗi N3) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-cot-truyen.md |
| NC-01 | Di chuyển 8 hướng, Hãm | Điều khiển | Prototype: người thử dừng cách điểm đích tối đa 0,5 u ở trên 90 phần trăm lần thử bằng Hãm (dòng 391). Chưa chạy được, xem Bỏ qua | MVP | Build hoặc playtest | FALSE | Chưa chấm, chưa có build | GD-031-nguoi-choi.md |
| NC-02 | Hành lang hẹp | Điều khiển, va chạm | Hành lang 1,5 u dài 20 u, người thử mới không chạm tường sau 3 lần thử (dòng 392). Mơ hồ, xem lỗi 21 | MVP | Build hoặc playtest | FALSE | Chưa chấm, chưa có build | GD-031-nguoi-choi.md |
| NC-03 | Tham số trong khoảng an toàn | Cân bằng | Mọi số mục 3 nằm trong khoảng an toàn sau prototype, hoặc có ghi lý do lệch và ngày thử (dòng 393) | MVP | Build hoặc playtest | FALSE | Chưa chấm, chưa có build | GD-031-nguoi-choi.md |
| NC-04 | Bảng trạng thái 2.3 | Soft lock | Mô phỏng 1000 chuyến ngẫu nhiên, 0 người chơi ở trạng thái không thoát được (dòng 394). Không thấy script bot này trong `tools/` | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-nguoi-choi.md |
| NC-05 | Chia Oxy | Co-op | 5 lần thử liền chạy, Oxy hai bên cộng bằng đúng số chuyển sai số dưới 1 điểm (dòng 395) | MVP (2 người) | Máy | FALSE | Chưa chấm, chưa có build | GD-031-nguoi-choi.md |
| NC-06 | Bị kéo về | K2 | Luôn giữ đúng 1 món ghim, 0 Tally bị trừ (dòng 396). Cần thêm ca Trao đồ khi Ngạt (lỗi 4) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-nguoi-choi.md |
| NC-07 | Thanh Oxy bậc 0 và 1 | Nâng cấp | Chuyến với bậc 0 và 1 khớp bảng 2.6 (dòng 397): 330, 450 Oxy và 80, 100 Khối | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-nguoi-choi.md |
| NC-08 | Tỉ lệ bị kéo về vì Ngạt | Chỉ số | Cẩn thận dưới 5 phần trăm, tham 15 đến 40 phần trăm (dòng 385). Sim chương 3 và 5 của người tham lệch, xem Số kiểm | MVP, đo lại bằng playtest | Máy | FALSE | Chưa chấm, chưa có build | GD-031-nguoi-choi.md |
| NC-09 | Chuyến chương 1 | Chỉ số | 4 đến 6 phút (dòng 386). Sim 4,2 phút | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-nguoi-choi.md |
| NC-10 | Ghim món trước lần ngạt đầu | Chỉ số, FTUE | Trên 70 phần trăm người chơi mới sau tutorial (dòng 387) | MVP, đo bằng playtest | Build hoặc playtest | FALSE | Chưa chấm, chưa có build | GD-031-nguoi-choi.md |
| NC-11 | Cứu nhau | Chỉ số, co-op | Số lần được cứu trên số lần ngạt trên 40 phần trăm khi co-op 2 người (dòng 388) | MVP (2 người) | Máy | FALSE | Chưa chấm, chưa có build | GD-031-nguoi-choi.md |
| NC-12 | Thoát giữa chuyến | Đề xuất QA | Ngạt rồi thoát game thì chỉ giữ đúng 1 món ghim (sau sửa lỗi 1) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-nguoi-choi.md |
| NC-13 | CON-101 | Đề xuất QA | Sim: tỉ lệ chuyến dài vượt khung mục 9 khi mang bình không quá 5 phần trăm | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-nguoi-choi.md |
| NC-14 | K22 | Đề xuất QA | Cửa khí khóa sau chuyến thứ hai và khi đã mở ca cảng | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-nguoi-choi.md |
| HS-01 | Silhouette 4 preset người chơi | Art, nhận diện co-op | Tô đen 4 preset cạnh nhau ở 106 px một u, 5 người thử phân biệt đúng trong 1 giây ở ít nhất 90% lượt | MVP cho preset 1 và 2 (cặp), Sau MVP cho 4 preset | Build hoặc playtest | FALSE | Chưa chấm, chưa có build | GD-031-ho-so-nhan-vat.md |
| HS-02 | Silhouette người vớt và thương nhân | Art, nhận diện | Tô đen mỗi nhân vật nhận ra đúng vai ở ít nhất 80% lượt | MVP cho Ingrid, Linh, Tikko. Sau MVP cho 7 người còn lại | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ho-so-nhan-vat.md |
| HS-03 | Bảng màu mỗi nhân vật | Art, màu | 1 đến 6 màu chính cộng tối đa 2 nhấn bằng công cụ lấy mẫu, bão hòa đúng mục 3 | MVP cho 5 nhân vật MVP, Sau MVP còn lại | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ho-so-nhan-vat.md |
| HS-04 | Lắp thử bộ đồ | Art, mảnh ghép | Bậc 0 và bậc cuối của mọi trục không mảnh nào che hoặc cắt mảnh khác | MVP cho bậc 0 và 1 của bình, bộ đẩy, túi, đai, cấp 0 của vỏ. Sau MVP bậc còn lại | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ho-so-nhan-vat.md |
| HS-05 | Phân biệt màu trong cùng cảnh | Art, nhận diện | Hai nhân vật cùng cảnh cách 25 độ Hue hoặc 25 điểm bão hòa | MVP cho cặp ở ca cảng đầu (Việt, Jonas, Ingrid, Linh, Tikko) | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ho-so-nhan-vat.md |
| HS-06 | Đủ clip và biểu cảm MVP | Art, hoạt ảnh | Mọi nhân vật MVP đủ clip bảng mục 7 và 8 biểu cảm | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ho-so-nhan-vat.md |
| HS-07 | Không hồ sơ nào đổi theo số người (P3) | Thiết kế | Bảng co-op: không hồ sơ nào đổi ngoài số preset hiển thị và số buồng tắt | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ho-so-nhan-vat.md |
| HS-08 | Chiều cao không đổi va chạm (đề xuất thêm) | Gameplay, công bằng | Cả 4 preset có cùng bán kính va chạm 0,4 u trong build | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ho-so-nhan-vat.md |
| CB-01 | Báo trước đòn | Combat | Mọi đòn 3.4b: báo trước tối thiểu 0,7 s (hẹp dưới 15 Oxy), 0,8 s (từ 15 Oxy), 1,0 s (vùng bán kính từ 2 u). Có hình và tiếng. Hiện 0 vi phạm | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-combat-driftlife.md |
| CB-02 | Miễn sát thương, Lướt | Combat | Hai đòn cùng khung chỉ trừ Oxy một lần. Miễn 0,8 s, Lướt miễn 0,2 s đầu | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-combat-driftlife.md |
| CB-03 | Choáng và DR | Combat | Choáng 4 s, hệ số DR riêng Choáng và Mê, trần 3, về 1 sau 20 s. Sim S3 dưới 70% với 4 người (đạt, 18 đến 32%) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-combat-driftlife.md |
| CB-04 | Bắt sống cỡ S | Combat | Súng lưới tối đa 3 con trong 1,5 u, tiêu 1 Lưới cuộn. Bắt tay giữ 1,5 s (sửa R2). Lồng 3 con, không chiếm túi, không làm chậm. Lồng còn 1 chỗ bắt 1 con (E18) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-combat-driftlife.md |
| CB-05 | Chất lượng mẫu | Combat | 70% là 3 sao, 30% là 2 sao, dưới 30% là 1 sao. Kết nhanh cho 2 sao | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-combat-driftlife.md |
| CB-06 | Ghim lồng | Combat | Bị kéo về giữ 1 con sao cao nhất | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-combat-driftlife.md |
| CB-07 | K9 | Kinh tế | Giá trị mẫu sống sau trừ vật tiêu hao chia giá trị hạ từ 1,5 đến 2 (script của gd-items). Ròng mỗi phút từ 1,0, cỡ M không quá 1,6 (sim S2) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-combat-driftlife.md |
| CB-08 | Loài và boss MVP | Phạm vi | 4 loài dải Gần (Arc Eel chỉ hạ) và BS-1. Không xuất hiện thứ Sau MVP | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-combat-driftlife.md |
| CB-09 | BS-1 một mình | Combat | Thắng được một mình bằng hạ và Xua đi trong 2 đến 4 phút. Cửa không khóa, rút qua B3, hồi đầy khi phòng trống quá 10 s. Cần số S5 (R10) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-combat-driftlife.md |
| CB-10 | Co-op hệ số | Co-op | Sinh lực và ngưỡng Driftlife N chia k(N), boss 1 + 0,6 (N - 1). Gánh mỗi người kiểu chia 1,00. Kiểu dồn đọc để biết, không mục tiêu | MVP (2 người) | Máy | FALSE | Chưa chấm, chưa có build | GD-031-combat-driftlife.md |
| CB-11 | Tiêu chí 8 và 9 | Hit feel | Prototype bay phím T: người mới né đòn hẹp 0,7 s và vùng 2,5 u báo trước 1,0 s ít nhất 70% sau 3 lần thử | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-combat-driftlife.md |
| VP-01 | Cổng kiểm máy | Dữ liệu | `node projects/game-moi/sim/vat-pham.mjs` thoát mã 0, 0 lỗi. Hiện đạt | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-vat-pham.md |
| VP-02 | Nguồn nhận và nguồn tiêu | P2 | Mọi vật phẩm có nguồn nhận và nguồn tiêu (script). Đạt theo script, nhưng script tính cả nguồn tiêu Sau MVP nên không bắt lỗi 3, 4. Cần thêm kiểm: mọi vật nhãn MVP có nguồn tiêu nhãn MVP | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-vat-pham.md |
| VP-03 | Công thức dùng ID có thật | Dữ liệu | Mọi đầu vào công thức có trong ITEM LIST (script). Đạt | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-vat-pham.md |
| VP-04 | Tài nguyên riêng mỗi dải | Dữ liệu | Mỗi dải có ít nhất 2 tài nguyên riêng. Gần 6, Giữa 4, Xa 5 cộng Cradle 1. Đạt | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-vat-pham.md |
| VP-05 | Biên lợi công thức | Cân bằng | Hệ số trong khoảng C5. Đạt trừ RCP-128 (0,24, loại CGOL không có kiểm) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-vat-pham.md |
| VP-06 | Mẫu sống trên hạ | Cân bằng | 1,5 đến 2,0 cho mọi loài. Đạt cho LIV, không đạt cho BPS (0,45, lỗi 2), tiêu chí cần sửa cho khớp quyết định K9 | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-vat-pham.md |
| VP-07 | Không ghi giá Tally | Quy tắc | Tìm "Tally" chỉ thấy trong ngữ cảnh gd-economy giữ. Đạt (10 chỗ, đều là chú thích) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-vat-pham.md |
| VP-08 | Đủ số lượng nhãn MVP | Phạm vi | 6 tài nguyên (đúng), 5 COM (đúng), 9 kiện (thực tế 10, lỗi 11), 6 nâng cấp (đúng), 2 vật tiêu hao (đúng), 5 dụng cụ cộng chìa (đúng), 4 loài với 3 cỡ S bắt sống (đúng). Mỗi luật có nhãn: chưa đạt (lỗi 13) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-vat-pham.md |
| VP-09 | Không còn dấu chờ | Quy tắc | Dấu chờ chỉ còn của gd-economy. Hiện còn một `[CHỜ gd-economy]` ở ENG-101 dù đã có giá (lỗi 14) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-vat-pham.md |
| VP-10 | Sim đợt 2 | Cân bằng | Thời gian làm đầy túi, thu nhập chuỗi thô và chuỗi tinh một ngày, mức trội chiến lược nhặt (script in). Chưa có | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-vat-pham.md |
| VP-11 | Số GTĐ mỗi chuyến | Cân bằng | Đo ở sim gd-tech. Chưa có số trong file này | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-vat-pham.md |
| VP-12 | Thời gian làm đầy túi | Nhịp | 60 đến 70% chuyến, chương 1 (kiểm tay ước 56 đến 63%, chờ sim) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-vat-pham.md |
| VP-13 | Tỉ lệ chuyến dùng cả khoan, nạy, hạ | Nhịp | Trên 90% ở chương 1. Chưa có sim | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-vat-pham.md |
| VP-14 | Tỉ lệ kiện tinh trên kiện thô | Cân bằng | Trên 50% sau chương 1 khi đủ nguyên liệu. Chưa có sim | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-vat-pham.md |
| VP-15 | Người chơi hiểu vì sao đồ đáng nhặt, bỏ gì khi túi đầy | Trải nghiệm | Playtest ghi lại, cần build | MVP | Build hoặc playtest | FALSE | Chưa chấm, chưa có build | GD-031-vat-pham.md |
| VP-16 | Bình Oxy nhỏ không phá P1 | Cân bằng | Đề xuất bổ sung: trần số bình mỗi chuyến và sim Oxy có CON-101 (lỗi 9) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-vat-pham.md |
| VP-17 | Giá lồng sống theo loài | Cân bằng | Đề xuất bổ sung: mỗi loài, GTĐ lồng ròng sau vật tiêu hao bằng 1,5 đến 2,0 lần E(hạ MVP bán được) (lỗi 5) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-vat-pham.md |
| MP-01 | Sinh bố cục dải Gần | Kỹ thuật | 1000 chuyến liền nhau: 100% hợp lệ, dưới 1% dự phòng. Tham chiếu đo 0,00% ở 3 seed | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-map.md |
| MP-02 | Đa dạng bố cục | Kỹ thuật | Hai chuyến liền nhau: không quá 5 trên 10 ô ghép cùng mảnh cùng ô, không beacon cùng ô. Tham chiếu đo lớn nhất 5, beacon trùng 0% | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-map.md |
| MP-03 | Thời lượng chuyến chương 1 | Cân bằng | p50 trong 4 đến 6 phút. Đo 4,4 | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-map.md |
| MP-04 | Bị kéo về | Cân bằng | Cẩn thận dưới 5%, tham 15 đến 40%. Cẩn thận đạt, tham chưa (xem bảng mục tiêu lệch) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-map.md |
| MP-05 | Báo trước hazard | Cảm giác | Mỗi hazard gây hại có báo trước ít nhất 1 giây tính từ lúc thấy, H01 có chỉ báo mép màn hình | MVP cho H01 đến H03 | Máy | FALSE | Chưa chấm, chưa có build | GD-031-map.md |
| MP-06 | Chơi một mình Station Cinder | Luồng | Đi hết lần 1 và lần 2, vớt Ingrid và Linh, hạ hoặc xua BS-1. Thêm: rút giữa trận qua B3, không chạy ngang boss tới C7 | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-map.md |
| MP-07 | Trạng thái sau lần 2 | Dữ liệu | D1 mở, boss không còn, vách C6 sang C7 mở, beacon B2 bật | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-map.md |
| MP-08 | Lối ra map nhánh | Luồng | Mỗi map nhánh có ít nhất một lối ra, kiểm tay trên greybox | MVP cho Cinder | Máy | FALSE | Chưa chấm, chưa có build | GD-031-map.md |
| MP-09 | Nhóm 4 | Cân bằng | Mỗi người nhặt từ 60% so với một mình ở mọi chương và kịch bản. Đo 61% thấp nhất (a 0,30) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-map.md |
| MP-10 | Hazard Oxy | Cân bằng | H01 trừ 8, H02 trừ 12 một lần mỗi tia, H03 không trừ, qua event "trúng hazard" | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-map.md |
| MP-11 | Thoát giữa chuyến | Dữ liệu | Một mình: mất đồ trong chuyến, vẫn tính một chuyến, về lần lưu. Host thoát: phiên dừng, chuyến dở cũng tính | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-map.md |
| TC-01 | Ca chương 1 một người | Sim, chơi thật | Lịch 4 tàu, giao đủ ít nhất 3 đơn trong 240 giây, 0 đóng sẵn | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-02 | Giờ đến tàu | Sim | Không tàu nào có giờ đến cộng lưu bến vượt 240 giây (luật 70) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-03 | Ca chương 1 N 1 tới 4 | Sim | Ca 190 tới 191 giây, rảnh 21 tới 26%, kiện mỗi người 10,8, 10,2, 9,5, 7,8, đơn đủ 91, 94, 96, 86% | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-04 | Thời lượng ca | Sim | Trung bình 170 tới 300 giây mọi N, chương 1 tới 4 | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-05 | Đơn trượt | Log | Tally không giảm, kiện còn đúng, Hạng không đổi | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-06 | Bỏ ca | Chơi, log | Tàu không tới, kiện còn đủ, cửa khí khóa | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-07 | Bốc đồng thời, 2 người | Co-op | Đúng 1 kiện nhận | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-08 | Ca đầu tiên | Chơi, log | Đúng 1 tàu TA01, 1 dòng CGO-101 | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-09 | Mở ca | Log | Còn người ngoài chuyến thì không mở. Một ca mỗi ngày. Sau mở ca cửa khí khóa | MVP | Build hoặc playtest | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-10 | Điểm cảng | Sim, log | Đơn đủ nhanh 3, 5, 6, 8 điểm ở N 1 tới 4 | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-11 | Số tàu theo N | Sim | Bằng nhau ở N 1 tới 4 | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-12 | CGO-121 chương 1 | Sim 100 lịch | Mọi lịch từ ngày có Súng lưới có 1 dòng CGO-121 | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-13 | Nhóm hàng | Validator | Mọi CGO thuộc đúng một nhóm | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-14 | Sửa khoang | Chơi, log | Thiếu vật liệu không bắt đầu, thả phím giữ tiến độ, vật liệu không hoàn | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-15 | Người vớt | Chơi, log | Kéo buồng về, tỉnh đầu ngày kế, khoang chỉ sửa sau khi tỉnh | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-16 | Hạng cảng | Sim, log | Điểm đúng công thức, không giảm, trần dồn | MVP tới hạng 3 | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-17 | Sang ngày co-op | Chơi 2 người | Người treo máy: sang ngày sau 30 giây | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-18 | Ra chuyến co-op | Chơi 2 người | Người treo máy: chuyến bắt đầu sau 30 giây, tính ở lại | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-19 | Hai chuyến mỗi ngày | Chơi, log | Chuyến thứ 3 bị cửa khí chặn | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-20 | Đóng kiện trước co-op | Chơi 2 người | Người về sớm đóng được kiện, không ra lại, kiện được nhận | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| TC-21 | Người vào sau | Chơi | Có chỗ ngủ ở khu hồi sức, buồng tắt vẫn tắt | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-tram-va-cang.md |
| UX-01 | Cổng máy UX | Process | `kiem-ux.mjs` thoát 0 (đạt lúc chấm), thêm kiểm chuỗi in nháy ở bảng 2.5 | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ux-ui.md |
| UX-02 | Đường ra mỗi màn | Navigation | Mỗi màn đi được bằng bàn phím chuột và gamepad. Cần build | MVP | Build hoặc playtest | FALSE | Chưa chấm, chưa có build | GD-031-ux-ui.md |
| UX-03 | Cảnh báo hai kênh | Accessibility | Mô phỏng mù màu 4 nhóm | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ux-ui.md |
| UX-04 | Chữ và tương phản | Accessibility | 12 px ở 720p, 4,5:1, đo bằng script art | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ux-ui.md |
| UX-05 | HUD ở 200 phần trăm | Layout | 1280x720, HUD-01 đến HUD-05 trong lề 64 x 36 px | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ux-ui.md |
| UX-06 | Đổi phím | Input | Mọi hành động bảng 2.9 đổi được, Esc cố định | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ux-ui.md |
| UX-07 | Esc và Start | Input | Esc đóng màn con trước rồi mới mở menu, Start luôn mở, UI-34 Esc không làm gì | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ux-ui.md |
| UX-08 | Gợi ý không chặn | FTUE | Không hộp thoại chặn khi Driftlife trong 10 u, hazard báo trước, Oxy dưới 25 phần trăm. Dưới 25 phần trăm chỉ T09, T15, T20 | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ux-ui.md |
| UX-09 | FTUE kích được | FTUE | Bot gd-tech: T01 đến T35 mỗi bước kích ít nhất 1 lần | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ux-ui.md |
| UX-10 | Âm lượng và chú thích âm | Accessibility | 4 thanh tách, chú thích bật tắt ở UI-51 | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ux-ui.md |
| UX-11 | Thoát giữa chuyến | Data | Luôn qua hộp xác nhận nêu hệ quả. Lưu lỗi ở UI-44 có lối ra | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ux-ui.md |
| UX-12 | Ca cảng không chữ Thua | Tone | Không chuỗi nào chứa "Thất bại" hay "Thua" | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ux-ui.md |
| UX-13 | Co-op 2 người | Co-op | HUD-07 trễ dưới 0,5 giây, Menu không dừng, một người online thì dừng | MVP (2 người) | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ux-ui.md |
| UX-14 | Đồng hồ xác nhận chung | Co-op | HTR-01 hiện cho mọi người ở trạm: 30 giây ra chuyến, ngủ, mở ca sớm, bỏ ca | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ux-ui.md |
| UX-15 | Đọc HUD Oxy | Playtest | 3 trên 5 người mới nói được "còn đủ về không" trong 5 giây | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ux-ui.md |
| UX-16 | Ghim trước ngạt lần đầu | Playtest | Trên 70 phần trăm sau tutorial | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ux-ui.md |
| KY-01 | Selftest | Tool | `selftest.mjs` thoát 0 (hiện 22 phép ĐẠT) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ky-thuat.md |
| KY-02 | Tất định | Tool | Cùng seed cho cùng kết quả ở cả 3 sim (đã kiểm byte với `--khong-gio`) | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ky-thuat.md |
| KY-03 | Ca tính tay | Tool | Có trong selftest cho cả 3 sim | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ky-thuat.md |
| KY-04 | Giả định in ra | Tool | Đầu mỗi file kết quả liệt kê `[GIẢ ĐỊNH]` | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ky-thuat.md |
| KY-05 | Validator | Tool | Bắt các loại lỗi có ca cài trong selftest | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ky-thuat.md |
| KY-06 | Schema | Dữ liệu | Phủ mọi bảng dữ liệu các GDD xin | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ky-thuat.md |
| KY-07 | Nhặt trùng | Co-op | 1000 lần hai máy cùng nhặt: đúng 1 người nhận | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ky-thuat.md |
| KY-08 | Kiện | Co-op | 100 lần thả, nhặt, bốc có rớt mạng: tổng kiện không đổi | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ky-thuat.md |
| KY-09 | Mất kết nối | Co-op | Vào lại đúng nhân vật theo mã slot, quá 15 giây thì bị kéo về | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ky-thuat.md |
| KY-10 | Host thoát | Co-op | Host thoát rồi mở lại: thế giới về điểm lưu gần nhất (3 điểm lưu), không mất ngày trước | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ky-thuat.md |
| KY-11 | Vào giữa chừng | Co-op | Thử ở 3 pha, đúng luật 13 | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ky-thuat.md |
| KY-12 | File save | Lưu | Cắt điện giữa lúc ghi, mở lại được bản trước | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ky-thuat.md |
| KY-13 | Dữ liệu | Dữ liệu | Xuất rồi nhập lại, 0 trường lệch | MVP | Máy | FALSE | Chưa chấm, chưa có build | GD-031-ky-thuat.md |
