# GDD hệ thống: Kinh tế và tiến trình

- Project: game-moi (The Novent) | Chủ sở hữu: gd-economy | Trạng thái: bản đủ, đợt 9 theo ca cảng khung Dave (GD-055, 2026-11-20), chờ gd-qa GD-056 | Nguồn quyết định: `../00-khung-game.md` K9, K13, K15, K18 đến K21, C3, C4, C8, mục 9, `../../DECISIONS.md` mục "Ca cảng theo khung Dave (đợt 9)", `../../log-gdm-tu-quyet.md` dòng 40, 50, 53

Mọi bảng số giữa dấu `<!--khoi:...-->` và mọi số giữa dấu `<!--v:...-->` do sim in, không sửa tay. Một lệnh in lại tất cả:
`python projects/game-moi/sim/economy/sim-kinh-te.py --ghi` (chạy sim, ghi bảng vào file này, rồi chạy cổng kiểm `economy_doc.py kiem`). Tham số ở `projects/game-moi/sim/economy/tham-so.json`. Tự kiểm: `--selftest`. Dò β: `--do`. Tab ECONOMIC bản đọc: `--tab`. Kiểu danh mục đo bằng `sim/economy/do-danh-muc.mjs` trên mô hình ca của gd-tech (`tools/sim-ca-cang.mjs`).

## Tóm tắt

- Hệ thống này đặt giá cho mọi thứ trao đổi bằng Tally, quyết nhịp mở khóa theo chương và đo bằng sim rằng game đạt mục tiêu thời lượng của khung với 1 tới 4 người. Tầng: lõi. Ưu tiên: bản đầu (MVP chương 1), số cho cả 5 chương. Phụ thuộc chính: GTĐ của gd-items (`vat-pham.md`), luật ca cảng và Hạng cảng của gd-quan (`tram-va-cang.md`), sim ca cảng và sim chuyến của gd-tech (`tools/ket-qua/`), bậc bộ đồ của gd-character (`nguoi-choi.md`), nhịp chuyến và k(N) của gd-world (`map.md`).

## Hiện hành

| Mục | Giá trị | Nhãn |
|---|---|---|
| Đồng tiền | Tally duy nhất, chỉ đến từ ca cảng (K18) | MVP |
| Đơn vị bán | Thùng. 1 kiện = 2,5 thùng, lồng sinh vật sống là một đơn vị không chia (Lead chốt, D0) | MVP |
| Giá thùng | GTĐ một thùng nhân 10 nhân hệ số bậc giá. 5 bậc: chợ 0,75, sinh học 1,0, chế 1,35, sống 1,3, hiếm 1,5. Thùng chương 1 từ 40 tới 80 Tally, lồng 55 tới 75 (mục 3.1) | MVP |
| Tip | Tip tối đa 30% giá thùng nhân phần kiên nhẫn còn lại. Tàu vội gấp đôi, Tikko gọi đồ Trái Đất gấp đôi, bơm khí cộng 10 Tally (Lead chốt, K13). Sim đo tip chiếm <!--v:tip-tb-->25%<!--/v--> Tally (tệ <!--v:tip-te-->22%<!--/v-->, tốt <!--v:tip-tot-->26%<!--/v-->) | MVP |
| Điểm cảng | 1 mỗi tàu phục vụ xong, thêm 1 nếu còn trên 2/3 kiên nhẫn (Lead chốt). Một ca một người trung bình <!--v:diem-ca-1-->44<!--/v--> điểm | MVP |
| Ngưỡng Hạng cảng 2 tới 8 | <!--v:nguong-hien-hanh-->70, 135, 285, 400, 560, 680, 910<!--/v--> (mục 3.5, gd-quan đã nhận (luật 41)) | MVP hạng 2, 3 |
| Giá Tally của nâng cấp, ENG, Shop | Ngân sách chương chia theo tỉ lệ. Ngân sách chương bằng β nhân ngày mục tiêu nhân thu nhập tham chiếu một ngày, hệ số ngân sách β bằng <!--v:beta-->0,54<!--/v--> | MVP |
| Thời lượng đo được, trung bình, một người | Chương 1 <!--v:gio-ch1-tb-->1,89<!--/v--> giờ, cả game <!--v:gio-game-tb-->13,8<!--/v--> giờ (mục tiêu 1,5 đến 2 và 12 đến 15) | MVP |
| Co-op | Số tàu một ca 25, 50, 70, 70 cho 1 tới 4 người (sim ca cảng gd-tech, C8). k(N) bằng 1 cộng a nhân (N trừ 1), a bằng <!--v:kc-->0,30 ở dải Gần, 0,25 ở Giữa, 0,38 ở Xa<!--/v--> (gd-world). Nhóm 4 tới hết game bằng <!--v:coop4-game-->72%<!--/v--> thời gian một mình, trong mục tiêu 60 đến 75% (GDM, log 69) | MVP 2 người |
| Túi và bình | Túi 80, 100, 126, 168, 216 Khối, bình 330, 450, 600, 780, 1000 (GDM chốt, log 54). Phút và GTĐ một chuyến đọc từ sim chuyến gd-tech (mục 8.5) | MVP bậc 0 và 1 |

## 1. Mục đích với người chơi

- Người chơi cảm thấy: mỗi ca cảng là ngày lương, mỗi nâng cấp mua về làm chuyến sau khác đi thấy rõ (túi to hơn, Oxy dài hơn, vào được dải mới). Tally không bao giờ thành số vô nghĩa trước chương 5.
- Quyết định chính: đem hàng trong kho đi sửa trạm hay lập danh mục bán (P2). Lập danh mục nào: hàng chợ rẻ mà tàu nào cũng gọi, hay hàng chuẩn bị trước (bắt sống, chế nước, đồ Trái Đất) đắt mà ít. Mua nâng cấp nào trước.
- Pillar: P2 (mọi thứ mang về có hai chỗ tiêu nhìn thấy được: trạm và cảng, giá theo bậc làm hai chỗ tiêu kéo ngược nhau), P1 (giữ 1 món khi ngạt là mất thật, đo ở mục 8), P3 (một mình vẫn xong game trong 12 đến 15 giờ, có bạn thì nhanh hơn mà không ai nghèo).
- 30 giây đầu của ca cảng đầu tiên: thùng phế liệu đầu tiên lên tàu, số Tally nhảy lên <!--v:gia-thung-phe-->42<!--/v--> cộng tip. Lồng Driftmoth bắt sống ở chuyến sáng lên tàu được 65. Cuối ngày đó người chơi mở Xưởng thấy T-TUI bậc 1 giá <!--v:gia-tui1-->1350<!--/v--> Tally cộng 24,2 GTĐ vật liệu, biết phải để dành Tally qua vài ca cảng.

## 2. Luật

### 2.1 Tally và giá ở ca cảng
1. Tally là đồng tiền duy nhất, dùng chung cả nhóm (K18, C3). `MVP`
2. Nguồn Tally duy nhất là ca cảng: giá thùng khi tàu nhận thùng, tip theo kiên nhẫn còn lại, bơm khí (K13, luật ca của gd-quan ở `tram-va-cang.md`). Không có Tally từ quest, hòm, bán ở Shop. `MVP`
3. Đơn vị bán là thùng: 1 kiện = 2,5 thùng (D0). Giá một kiện bằng giá một thùng nhân 2,5. Lồng sinh vật sống không chia, giá theo loài bên trong. `MVP`
4. Giá một thùng bằng GTĐ một thùng (GTĐ kiện của gd-items chia 2,5, `vat-pham.md` mục 2.6b) nhân 10 Tally mỗi GTĐ nhân hệ số bậc giá của kiện (mục 3.1), làm tròn tới số chẵn để giá kiện là số nguyên. Giá lồng bằng GTĐ mẫu sống nhân 10 nhân hệ số Hàng sống, làm tròn 5. Không nhân theo Hạng cảng, không nhân theo số người. `MVP`
5. Bậc giá gắn với độ gọi: hàng rẻ thì độ gọi cao, hàng đắt thì độ gọi thấp. Khi tàu chọn món trong danh mục, trọng số của món là độ gọi nhân độ ưa của loại tàu (gd-quan giữ độ ưa). `MVP`
6. Tip một tàu bằng giá thùng nhân 30% nhân phần kiên nhẫn còn lại lúc giao. Tàu vội nhân 2. Tikko (Loose Bolt) nhận đồ Trái Đất nhân 2. Bơm khí xong cộng 10 Tally. Tàu hết kiên nhẫn rời đi thì không trả gì, thùng về kho (luật ca của gd-quan). `MVP`
7. Đơn đặt trước trả giá thùng nhân 1,5 (gd-quan giữ luật đơn đặt trước, file này giữ hệ số). `MVP`

### 2.2 Shop là bảng giá duy nhất (K20)
8. Mọi giá Tally của game nằm ở mục 3.1 và 3.2 của file này (tab Shop và Upgrade khi dán Sheet). Tab khác ghi tên và trỏ về, không ghi lại số. `MVP`
9. Giá Tally của mọi thứ mua mở ở chương c lấy từ ngân sách chương: Ngân sách(c) = β x Ngày mục tiêu(c) x Thu nhập tham chiếu một ngày(c). Giá một thứ = Ngân sách(c) x Tỉ lệ của loại / Tổng tỉ lệ các thứ mở ở chương c. Công thức đủ ở mục 3.3. `MVP`
10. Nâng cấp bộ đồ (5 trục của `nguoi-choi.md` mục 2.6) và nâng cấp dụng cụ tốn hai phần: vật liệu đúng bằng cột Σ GTĐ vào của bảng UPG trong `vat-pham.md` và Tally theo luật 9. Chương mở lấy từ cột Mở bằng của bảng UPG. UPG-RACK-1 không tốn Tally vì là thưởng quest Kỹ sư đi kèm Dùi xung. Làm ở Xưởng, xong qua đêm (`vat-pham.md` luật C2). `MVP` bậc 1
11. Linh kiện động cơ ENG-101 tới ENG-104 chỉ mua ở Shop. ENG-10c mở khi Hạng cảng đạt hạng trần của chương c: ENG-101 hạng 3, ENG-102 hạng 5, ENG-103 hạng 7, ENG-104 hạng 8. ENG-105 không bán (`vat-pham.md` luật E1). `MVP` ENG-101
12. Shop bán thêm: cảng cấp 2 KH07-C2 (Hạng 2, đề xuất là cửa neo thứ 4, gd-quan chốt nội dung), bản thiết kế BPR-103 (Hạng 4), BPR-106 (Hạng 6), BPR-105 (chương 3, cũng có ở hòm Station Flint). Danh mục mở theo Hạng cảng và chương (K20). Shop không bán tài nguyên, kiện, vật tiêu hao. `MVP` cảng cấp 2
13. Giá không đổi theo số người (C8). Giá không giảm và không tăng theo thời gian. `MVP`

### 2.3 Tiến trình và mở khóa
14. Qua chương theo K25: chương đóng và vùng mới mở khi mốc đóng chương của truyện xong (gd-story), mốc đó chỉ kích hoạt khi giai đoạn động cơ của chương đã lắp. Kinh tế không có cổng chương riêng. Ba mốc kinh tế là gợi ý tiến độ, và là cách sim ước ngày đóng chương: sửa xong mọi khoang và giai đoạn động cơ của chương (vật liệu theo `vat-pham.md` mục 2.7), đã lắp ENG-10c (c từ 1 tới 4), đã đi đủ chuyến map nhánh (số chuyến 2, 3, 2, 4, 3 theo `map.md` mục 2.10, trong 2 chuyến mỗi ngày của K22), và đã qua sàn ngày truyện của chương. T-VO không chặn chương: thiếu cấp vẫn vào dải mới nhưng thời gian làm việc chỉ còn khoảng 27% (K6, `map.md` mục 3.2), nên sim mua T-VO trước tiên khi chương mở nó. `MVP` chương 1
15. Mọi nâng cấp khác không chặn chương. Sim mua theo thứ tự: ENG và T-VO trước, rồi các dòng còn lại của bảng 3.2 theo chương mở, khi đủ Tally và vật liệu.
16. Mỗi chương mở các thứ mua mới đúng một lần. Thứ chương trước chưa mua vẫn mua được với giá cũ.
17. Hạng cảng theo luật của gd-quan, Hạng không giảm. Nguồn điểm: 1 mỗi tàu phục vụ xong, thêm 1 nếu còn trên 2/3 kiên nhẫn. Ngưỡng Hạng 2 tới 8 ở mục 3.5, đặt để ngày đủ điểm giữ như bản trước đợt 9. `MVP` hạng 2, 3

- Thắng khi, thua khi: hệ thống không có trạng thái thắng thua. Người chơi không thể mất Tally (K2). Tally không âm.
Cam kết với người chơi: giá in trên Shop không đổi, không có chi phí duy trì, không có cách nào làm Tally giảm ngoài mua.

### Trạng thái của một thứ mua
| Trạng thái | Vào khi | Ra khi | Hành vi | Người chơi thấy gì |
|---|---|---|---|---|
| Khóa | Chưa tới chương hoặc chưa đủ Hạng cảng | Đủ điều kiện | Không mua được | Ô xám, ghi điều kiện mở |
| Mở, thiếu | Đủ điều kiện, thiếu Tally hoặc vật liệu | Đủ cả hai | Không mua được | Giá đỏ ở phần thiếu |
| Mua được | Đủ Tally và vật liệu | Người chơi xác nhận | Trừ ngay Tally và vật liệu | Nút sáng |
| Đang làm | Đã mua, chờ qua đêm (nâng cấp, dụng cụ) | Ngủ | Đã trừ | Thanh đang chế ở Xưởng |
| Xong | Sáng hôm sau, hoặc ngay với mục Shop | Không | Hiệu ứng áp cho cả nhóm (C4) | Hình bộ đồ hoặc khoang đổi |

- Thứ tự xử lý cuối ngày: 1. Bảng kết ca cộng Tally và điểm cảng. 2. Lên Hạng cảng nếu đủ điểm và chưa chạm trần. 3. Mở mục Shop theo Hạng mới. 4. Người chơi mua. 5. Ngủ: xong hàng đợi qua đêm, lưu.

## 3. Tham số

### 3.1 Giá thùng (tab Shop, phần tàu trả)

- Bậc giá theo vai của món trong dải: hàng chợ là khối lớn cũng dùng để xây, hàng chế phải chế ở Xưởng trước ca, hàng sống là lồng bắt sống, hàng hiếm là đồ ít gặp không dùng để xây. Độ gọi ngược với giá. Bảng bậc:

<!--khoi:bac-gia-->
| Bậc giá | Hệ số giá | Độ gọi | Ý đồ | Giá chương 1 (MVP, Tally một thùng hoặc lồng) |
|---|---|---|---|---|
| Hàng chợ | 0,75 | 3,0 | Hàng khối lớn của dải, cũng là vật liệu xây. Rẻ, tàu nào cũng gọi | Kiện phế liệu 42, Kiện cáp 40, Kiện quặng 40, Kiện băng 42 |
| Hàng sinh học | 1,00 | 2,0 | Phụ phẩm khi hạ Driftlife, sản phẩm nuôi. Giá gốc | Kiện mô sinh học 54 |
| Hàng chế | 1,35 | 1,5 | Kiện tinh dải Gần phải chế ở Xưởng trước ca. Trả công chế | Kiện nước tinh khiết 64 |
| Hàng sống | 1,30 | 1,0 | Lồng Driftlife bắt sống. Giữ K9 trong 1,2 tới 2 lần hạ | lồng Driftmoth 65, lồng Skitter Ray 75, lồng Sting Krill 55 |
| Hàng hiếm | 1,50 | 1,0 | Đồ ít gặp, không dùng để xây. Đắt, ít tàu gọi | Kiện đặc sản Gần 80, Kiện đồ Trái Đất 76 |
<!--/khoi-->

- Lồng sinh vật sống (CGO-121, CGO-221, CGO-321) không có một giá chung: giá theo loài bên trong (bảng Lồng dưới). Bảng tàu hiện giá loài rẻ nhất kèm chữ "từ". Con nuôi đưa vào lồng giao trả 0,5 lần giá lồng bắt thật của cùng loài, tối đa 1 lồng mỗi loài mỗi ngày (`vat-pham.md` luật M5). Hệ số sao của lồng (1,0, 1,25, 1,5, `vat-pham.md` luật G5) nhân vào giá lồng.
- Cột Giá Tally một kiện là số `tools/sim-ca-cang.mjs` đang đọc (chia 2,5 ra giá thùng). Giá thùng và độ gọi cũng ghi ở `tools/tham-so/ca-cang.json` khối giaThung để gd-tech nối, `sim-kinh-te.py --selftest` kiểm hai nơi khớp nhau.

<!--khoi:gia-kien-->
| ID kiện | Tên | Dải | GTĐ kiện (gd-items) | Giá Tally một kiện | Giá Tally một thùng | Bậc giá | Hệ số giá | Độ gọi | Nhãn |
|---|---|---|---|---|---|---|---|---|---|
| CGO-101 | Kiện phế liệu | Gần | 14,0 | 105 | 42 | Hàng chợ | 0,75 | 3,0 | MVP |
| CGO-102 | Kiện cáp | Gần | 13,2 | 100 | 40 | Hàng chợ | 0,75 | 3,0 | MVP |
| CGO-103 | Kiện quặng | Gần | 13,2 | 100 | 40 | Hàng chợ | 0,75 | 3,0 | MVP |
| CGO-104 | Kiện băng | Gần | 14,0 | 105 | 42 | Hàng chợ | 0,75 | 3,0 | MVP |
| CGO-105 | Kiện mô sinh học | Gần | 13,5 | 135 | 54 | Hàng sinh học | 1,00 | 2,0 | MVP |
| CGO-109 | Kiện đồ Trái Đất | Gần | 12,5 | 190 | 76 | Hàng hiếm | 1,50 | 1,0 | MVP |
| CGO-111 | Kiện cơ khí | Gần | 13,4 | 180 | 72 | Hàng chế | 1,35 | 1,5 | Sau MVP |
| CGO-112 | Kiện điện tử | Gần | 16,1 | 215 | 86 | Hàng chế | 1,35 | 1,5 | Sau MVP |
| CGO-113 | Kiện nước tinh khiết | Gần | 12,0 | 160 | 64 | Hàng chế | 1,35 | 1,5 | MVP |
| CGO-106 | Kiện đặc sản Gần | Gần | 13,2 | 200 | 80 | Hàng hiếm | 1,50 | 1,0 | MVP |
| CGO-107 | Kiện sản phẩm nuôi Gần | Gần | 42,9 | 430 | 172 | Hàng sinh học | 1,00 | 2,0 | Sau MVP |
| CGO-141 | Kiện vật tư | Gần | 46,9 | 705 | 282 | Hàng hiếm | 1,50 | 1,0 | Sau MVP |
| CGO-131 | Bản sao dữ liệu | Gần | 20,9 | 315 | 126 | Hàng hiếm | 1,50 | 1,0 | Sau MVP |
| CGO-211 | Kiện hợp kim | Giữa | 40,4 | 305 | 122 | Hàng chợ | 0,75 | 3,0 | Sau MVP |
| CGO-212 | Kiện cảm biến | Giữa | 31,3 | 235 | 94 | Hàng chợ | 0,75 | 3,0 | Sau MVP |
| CGO-213 | Kiện dung dịch lạnh | Giữa | 44,9 | 335 | 134 | Hàng chợ | 0,75 | 3,0 | Sau MVP |
| CGO-206 | Kiện đặc sản Giữa | Giữa | 44,0 | 660 | 264 | Hàng hiếm | 1,50 | 1,0 | Sau MVP |
| CGO-207 | Kiện sản phẩm nuôi Giữa | Giữa | 46,2 | 460 | 184 | Hàng sinh học | 1,00 | 2,0 | Sau MVP |
| CGO-311 | Kiện giáp | Xa | 107,6 | 805 | 322 | Hàng chợ | 0,75 | 3,0 | Sau MVP |
| CGO-312 | Kiện plasma | Xa | 86,9 | 650 | 260 | Hàng chợ | 0,75 | 3,0 | Sau MVP |
| CGO-313 | Kiện lõi nguội | Xa | 111,1 | 835 | 334 | Hàng chợ | 0,75 | 3,0 | Sau MVP |
| CGO-306 | Kiện đặc sản Xa | Xa | 99,0 | 1485 | 594 | Hàng hiếm | 1,50 | 1,0 | Sau MVP |
| CGO-307 | Kiện sản phẩm nuôi Xa | Xa | 107,8 | 1080 | 432 | Hàng sinh học | 1,00 | 2,0 | Sau MVP |
| CGO-411 | Kiện linh kiện Cradle | Cradle | 161,0 | 1210 | 484 | Hàng chợ | 0,75 | 3,0 | Sau MVP |
| CGO-421 | Kiện tin mật | Xa | 86,9 | 1305 | 522 | Hàng hiếm | 1,50 | 1,0 | Sau MVP |
| CGO-511 | Kiện linh kiện Warden | Xa | 193,2 | 1450 | 580 | Hàng chợ | 0,75 | 3,0 | Sau MVP |
<!--/khoi-->

Giá lồng sinh vật sống theo loài:

<!--khoi:gia-song-->
| Lồng | Loài bên trong | Dải | GTĐ mẫu sống (gd-items) | Giá Tally một lồng | Nhãn |
|---|---|---|---|---|---|
| CGO-121 | DL-G01 Driftmoth | Gần | 5,14 | 65 | MVP |
| CGO-121 | DL-G02 Skitter Ray | Gần | 5,74 | 75 | MVP |
| CGO-121 | DL-G04 Sting Krill | Gần | 4,04 | 55 | MVP |
| CGO-121 | DL-G05 Arc Eel | Gần | 30,71 | 400 | MVP (hạ), Sau MVP (bắt) |
| CGO-121 | DL-G03 Latchjaw | Gần | 16,91 | 220 | Sau MVP |
| CGO-221 | DL-M02 Lumen Jelly | Giữa | 25,91 | 335 | Sau MVP |
| CGO-221 | DL-M03 Orebiter | Giữa | 28,91 | 375 | Sau MVP |
| CGO-221 | DL-M04 Needlefin | Giữa | 10,26 | 135 | Sau MVP |
| CGO-321 | DL-X01 Prism Wisp | Xa | 33,49 | 435 | Sau MVP |
| CGO-321 | DL-X02 Mirror Mantis | Xa | 69,51 | 905 | Sau MVP |
| CGO-321 | DL-X05 Shardbrood Hatchling | Xa | 23,04 | 300 | Sau MVP |
<!--/khoi-->

Chỉ số giá của từng kịch bản: Tally giá thùng của danh mục đại diện chia (GTĐ x 10). Sim kinh tế nhân chỉ số này vào mọi GTĐ bán ở ca, mọi chương (`[GIẢ ĐỊNH]` danh mục đại diện ở tham-so.json, chương 2 tới 5 coi như cùng tỉ lệ bậc):

<!--khoi:chi-so-gia-->
| Kịch bản | Danh mục đại diện, chương 1, một người (đơn vị) | Đơn vị | Tally giá thùng | Chỉ số giá (Tally trên GTĐ x 10) |
|---|---|---|---|---|
| tệ | Lồng sinh vật sống Gần 4, Kiện phế liệu 9, Kiện cáp 6, Kiện quặng 6 | 25 | 1118 | 0,84 |
| trung bình | Lồng sinh vật sống Gần 5, Kiện đồ Trái Đất 2, Kiện nước tinh khiết 3, Kiện phế liệu 15 | 25 | 1299 | 0,97 |
| tốt | Lồng sinh vật sống Gần 6, Kiện đồ Trái Đất 3, Kiện nước tinh khiết 5, Kiện phế liệu 11 | 25 | 1400 | 1,07 |
<!--/khoi-->

Kiểu danh mục có khác nhau thật không. Đo bằng mô hình ca của gd-tech (`tools/sim-ca-cang.mjs`, trễ phản xạ 2 giây, 300 ca mỗi dòng, cửa neo và số tàu theo N như mục 6b) với giá và độ gọi ở trên, qua `sim/economy/do-danh-muc.mjs`:

<!--khoi:danh-muc-->
| Số người | Kiểu danh mục | Thùng bày (lồng tính 1) | Tàu xong / không tới | Tally một ca | So với Chuẩn bị kỹ | Tip trong Tally | Đơn đặt trước đạt | Tally mỗi tàu | Tally mỗi GTĐ đã bán |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Hàng chợ, không chuẩn bị | Kiện phế liệu 9, Kiện cáp 8, Kiện quặng 8 | 25,0 / 0,0 | 1305 | -30% | 22% | 0% | 52 | 9,7 |
| 2 | Hàng chợ, không chuẩn bị | Kiện phế liệu 18, Kiện cáp 16, Kiện quặng 16 | 49,8 / 0,0 | 2594 | -29% | 22% | 0% | 52 | 9,7 |
| 3 | Hàng chợ, không chuẩn bị | Kiện phế liệu 25, Kiện cáp 22, Kiện quặng 22 | 69,0 / 1,0 | 3609 | -29% | 22% | 0% | 52 | 9,7 |
| 4 | Hàng chợ, không chuẩn bị | Kiện phế liệu 25, Kiện cáp 22, Kiện quặng 22 | 69,0 / 1,0 | 3611 | -29% | 22% | 0% | 52 | 9,7 |
| 1 | Như demo, thêm đồ Trái Đất | Kiện phế liệu 10, Kiện cáp 8, Kiện quặng 8, Kiện đồ Trái Đất 5 | 25,0 / 0,0 | 1642 | -12% | 26% | 100% | 66 | 12,3 |
| 2 | Như demo, thêm đồ Trái Đất | Kiện phế liệu 20, Kiện cáp 16, Kiện quặng 16, Kiện đồ Trái Đất 10 | 49,8 / 0,0 | 3202 | -12% | 26% | 100% | 64 | 12,1 |
| 3 | Như demo, thêm đồ Trái Đất | Kiện phế liệu 28, Kiện cáp 22, Kiện quặng 22, Kiện đồ Trái Đất 14 | 69,7 / 0,0 | 4454 | -13% | 26% | 100% | 64 | 12,0 |
| 4 | Như demo, thêm đồ Trái Đất | Kiện phế liệu 28, Kiện cáp 22, Kiện quặng 22, Kiện đồ Trái Đất 14 | 69,7 / 0,0 | 4482 | -12% | 26% | 100% | 64 | 12,0 |
| 1 | Chuẩn bị kỹ | Lồng sinh vật sống Gần 5, Kiện đồ Trái Đất 3, Kiện nước tinh khiết 5, Kiện phế liệu 12 | 25,0 / 0,0 | 1872 | +0% | 25% | 100% | 75 | 14,3 |
| 2 | Chuẩn bị kỹ | Lồng sinh vật sống Gần 10, Kiện đồ Trái Đất 6, Kiện nước tinh khiết 10, Kiện phế liệu 24 | 49,8 / 0,0 | 3660 | +0% | 24% | 100% | 74 | 14,0 |
| 3 | Chuẩn bị kỹ | Lồng sinh vật sống Gần 14, Kiện đồ Trái Đất 8, Kiện nước tinh khiết 14, Kiện phế liệu 34 | 69,7 / 0,0 | 5094 | +0% | 24% | 100% | 73 | 13,9 |
| 4 | Chuẩn bị kỹ | Lồng sinh vật sống Gần 14, Kiện đồ Trái Đất 8, Kiện nước tinh khiết 14, Kiện phế liệu 34 | 69,7 / 0,0 | 5107 | +0% | 24% | 100% | 73 | 14,0 |
| 1 | Ít mà đắt | Lồng sinh vật sống Gần 5, Kiện đồ Trái Đất 3, Kiện nước tinh khiết 5, Kiện đặc sản Gần 2 | 15,0 / 10,0 | 1432 | -24% | 25% | 100% | 95 | 19,2 |
| 2 | Ít mà đắt | Lồng sinh vật sống Gần 10, Kiện đồ Trái Đất 6, Kiện nước tinh khiết 10, Kiện đặc sản Gần 4 | 30,0 / 20,0 | 2805 | -23% | 25% | 100% | 93 | 18,8 |
| 3 | Ít mà đắt | Lồng sinh vật sống Gần 14, Kiện đồ Trái Đất 8, Kiện nước tinh khiết 14, Kiện đặc sản Gần 6 | 42,0 / 28,0 | 3911 | -23% | 25% | 100% | 93 | 18,8 |
| 4 | Ít mà đắt | Lồng sinh vật sống Gần 14, Kiện đồ Trái Đất 8, Kiện nước tinh khiết 14, Kiện đặc sản Gần 6 | 42,0 / 28,0 | 3911 | -23% | 25% | 100% | 93 | 18,8 |
| 1 | Chuẩn bị kỹ nhưng bày thừa hàng chợ | Lồng sinh vật sống Gần 5, Kiện đồ Trái Đất 3, Kiện nước tinh khiết 5, Kiện phế liệu 30 | 25,0 / 0,0 | 1781 | -5% | 25% | 100% | 71 | 13,2 |
| 2 | Chuẩn bị kỹ nhưng bày thừa hàng chợ | Lồng sinh vật sống Gần 10, Kiện đồ Trái Đất 6, Kiện nước tinh khiết 10, Kiện phế liệu 60 | 49,8 / 0,0 | 3497 | -4% | 24% | 100% | 70 | 13,0 |
| 3 | Chuẩn bị kỹ nhưng bày thừa hàng chợ | Lồng sinh vật sống Gần 14, Kiện đồ Trái Đất 8, Kiện nước tinh khiết 14, Kiện phế liệu 84 | 69,7 / 0,0 | 4873 | -4% | 24% | 100% | 70 | 13,0 |
| 4 | Chuẩn bị kỹ nhưng bày thừa hàng chợ | Lồng sinh vật sống Gần 14, Kiện đồ Trái Đất 8, Kiện nước tinh khiết 14, Kiện phế liệu 84 | 69,7 / 0,0 | 4886 | -4% | 24% | 100% | 70 | 13,0 |
| 1 | Chuẩn bị kỹ, bỏ đồ Trái Đất | Lồng sinh vật sống Gần 5, Kiện nước tinh khiết 5, Kiện đặc sản Gần 3, Kiện phế liệu 12 | 25,0 / 0,0 | 1781 | -5% | 22% | 0% | 71 | 13,5 |
| 2 | Chuẩn bị kỹ, bỏ đồ Trái Đất | Lồng sinh vật sống Gần 10, Kiện nước tinh khiết 10, Kiện đặc sản Gần 6, Kiện phế liệu 24 | 49,8 / 0,0 | 3539 | -3% | 22% | 0% | 71 | 13,5 |
| 3 | Chuẩn bị kỹ, bỏ đồ Trái Đất | Lồng sinh vật sống Gần 14, Kiện nước tinh khiết 14, Kiện đặc sản Gần 8, Kiện phế liệu 34 | 69,6 / 0,0 | 4950 | -3% | 22% | 0% | 71 | 13,5 |
| 4 | Chuẩn bị kỹ, bỏ đồ Trái Đất | Lồng sinh vật sống Gần 14, Kiện nước tinh khiết 14, Kiện đặc sản Gần 8, Kiện phế liệu 34 | 69,8 / 0,0 | 4966 | -3% | 22% | 0% | 71 | 13,5 |
<!--/khoi-->

- Kết quả, một người: bày hàng chợ không chuẩn bị kém Chuẩn bị kỹ <!--v:dm-cho-->-30%<!--/v--> Tally một ca. Ít mà đắt kém <!--v:dm-it-->-24%<!--/v--> vì 10 tàu không tới, nhưng Tally mỗi GTĐ gấp đôi hàng chợ, nghĩa là giữ được hàng chợ để xây. Bày thừa hàng chợ cạnh hàng chuẩn bị kém <!--v:dm-thua-->-5%<!--/v--> vì tàu gọi hàng chợ trước, hàng đắt ở lại kho. Bỏ đồ Trái Đất (trượt đơn đặt trước, mất tip gấp đôi của Tikko) kém <!--v:dm-bo-td-->-5%<!--/v-->. Tip ở mọi kiểu nằm trong <!--v:dm-tip-->22% đến 26%<!--/v-->, trong mục tiêu 20 đến 30%.
- Trước đợt 9 (giá thùng sát nhau 48 tới 56), sim ca cảng GD-054 đo chênh tối đa 13%, giữ hàng cho đơn đặt trước dưới 2,5%. Thế cân bây giờ là: chuẩn bị trước ca (bắt sống, chế nước, giữ đồ Trái Đất) thêm khoảng 30% Tally một ca, hoặc bán ít mà đắt để giữ hàng chợ cho trạm.
- Cách gd-tech đo lại khi nối khối giaThung vào `sim-ca-cang.mjs`: chạy mục 5 của sim ca cảng với 6 kiểu danh mục ở tham-so.json khóa do_danh_muc, so cột Tally và Tip với bảng trên, lệch quá 3% thì báo gd-economy.

### 3.2 Giá mua bằng Tally (tab Upgrade và Shop)

- Mỗi dòng là một ID. Nâng cấp dùng đúng ID, bậc, vật liệu và chương mở của bảng UPG trong `vat-pham.md`. Ánh xạ trục: T-OXY là UPG-OXY, T-TUI là UPG-BAG, T-DAY là UPG-THR, T-VO là UPG-ENV, T-DUNGCU là UPG-RACK. Dụng cụ là UPG-MIN, UPG-HAR, UPG-NET. ID khoang theo gd-quan (luật 5 của `tram-va-cang.md`): KH07-C2 là cảng cấp 2, KH05-C2 là Xưởng cấp 2, KHxx-C3 là cấp 3 của từng khoang, dòng giá ở đây là tổng cho các khoang. Làm tròn: dưới 100 làm tròn 5, dưới 1000 làm tròn 10, còn lại làm tròn 50.

<!--khoi:gia-mua-->
| Chương mở | ID | Tên | Trục bộ đồ (nguoi-choi.md) | Mở bằng hoặc nơi | Vật liệu (GTĐ, gd-items) | Giá Tally | Nhãn |
|---|---|---|---|---|---|---|---|
| 1 | KH07-C2 | Cảng cấp 2 (đề xuất: cửa neo thứ 4, gd-quan chốt) | Nâng cấp cảng | Shop | - | 540 | MVP |
| 1 | UPG-THR-1 | - | T-DAY bộ đẩy bậc 1 | Kỹ sư (chương 1) | 26,2 | 940 | MVP |
| 1 | UPG-RACK-1 | - | T-DUNGCU số ô dụng cụ bậc 1 | Quest Kỹ sư (chương 1), đi kèm Dùi xung | 23,1 | 0 (quest Kỹ sư) | MVP |
| 1 | UPG-HAR-2 | - | Dụng cụ (UPG-MIN, UPG-HAR, UPG-NET) | Kỹ sư (chương 1) | 27,0 | 400 | MVP |
| 1 | UPG-MIN-2 | - | Dụng cụ (UPG-MIN, UPG-HAR, UPG-NET) | Kỹ sư (chương 1) | 24,4 | 400 | MVP |
| 1 | ENG-101 | Linh kiện động cơ | - | Shop, cần Hạng cảng 3 | - | 2700 | MVP |
| 1 | UPG-OXY-1 | - | T-OXY dung lượng Oxy bậc 1 | Kỹ sư (chương 1) | 26,0 | 1350 | MVP |
| 1 | UPG-BAG-1 | - | T-TUI sức chứa túi bậc 1 | Kỹ sư (chương 1) | 24,2 | 1350 | MVP |
| 2 | BPR-103 | Bản thiết kế Máy quét xung | Bản thiết kế ở Shop | Shop | - | 3100 | Sau MVP |
| 2 | UPG-THR-2 | - | T-DAY bộ đẩy bậc 2 | Chương 2 | 43,4 | 3600 | Sau MVP |
| 2 | UPG-RACK-2 | - | T-DUNGCU số ô dụng cụ bậc 2 | Chương 2 | 37,4 | 4150 | Sau MVP |
| 2 | UPG-HAR-3 | - | Dụng cụ (UPG-MIN, UPG-HAR, UPG-NET) | Chương 2 | 43,4 | 1550 | Sau MVP |
| 2 | UPG-MIN-3 | - | Dụng cụ (UPG-MIN, UPG-HAR, UPG-NET) | Chương 2 | 44,3 | 1550 | Sau MVP |
| 2 | UPG-NET-2 | - | Dụng cụ (UPG-MIN, UPG-HAR, UPG-NET) | BPR-101 | 25,7 | 1550 | Sau MVP |
| 2 | ENG-102 | Linh kiện động cơ | - | Shop, cần Hạng cảng 5 | - | 10300 | Sau MVP |
| 2 | KH05-C2 | Xưởng cấp 2 | Nâng cấp khoang | Xưởng | - | 4150 | Sau MVP |
| 2 | UPG-OXY-2 | - | T-OXY dung lượng Oxy bậc 2 | Chương 2 | 49,4 | 5150 | Sau MVP |
| 2 | UPG-BAG-2 | - | T-TUI sức chứa túi bậc 2 | Chương 2 | 40,6 | 5150 | Sau MVP |
| 2 | UPG-ENV-1 | - | T-VO cấp môi trường bậc 1 | Chương 2 (dải Giữa) | 48,1 | 6200 | Sau MVP |
| 3 | BPR-105 | Bản thiết kế Máy cắt thân tàu (cũng có ở hòm Station Flint) | Bản thiết kế ở Shop | Shop | - | 10850 | Sau MVP |
| 3 | BPR-106 | Bản thiết kế tiện ích cảng | Bản thiết kế ở Shop | Shop | - | 10850 | Sau MVP |
| 3 | UPG-THR-3 | - | T-DAY bộ đẩy bậc 3 | Chương 3 | 75,4 | 12650 | Sau MVP |
| 3 | ENG-103 | Linh kiện động cơ | - | Shop, cần Hạng cảng 7 | - | 36200 | Sau MVP |
| 3 | UPG-OXY-3 | - | T-OXY dung lượng Oxy bậc 3 | Chương 3 | 74,4 | 18100 | Sau MVP |
| 3 | UPG-BAG-3 | - | T-TUI sức chứa túi bậc 3 | Chương 3 | 79,4 | 18100 | Sau MVP |
| 3 | UPG-ENV-2 | - | T-VO cấp môi trường bậc 2 | Chương 3 (dải Xa) | 90,6 | 21700 | Sau MVP |
| 4 | ENG-104 | Linh kiện động cơ | - | Shop, cần Hạng cảng 8 | - | 45200 | Sau MVP |
| 4 | KHxx-C3 | Cấp 3 các khoang (KHxx-C3 từng khoang, giá ở đây là tổng, gd-quan chốt danh sách khoang) | Nâng cấp khoang | Xưởng | - | 18100 | Sau MVP |
| 4 | UPG-OXY-4 | - | T-OXY dung lượng Oxy bậc 4 | Chương 4 đến 5 | 133,2 | 22600 | Sau MVP |
| 4 | UPG-BAG-4 | - | T-TUI sức chứa túi bậc 4 | Chương 4 đến 5 | 121,2 | 22600 | Sau MVP |
| 4 | UPG-ENV-3 | - | T-VO cấp môi trường bậc 3 | Chương 4 (Cradle) | 126,6 | 27150 | Sau MVP |
<!--/khoi-->

Nâng cấp nào mở khả năng mới, nâng cấp nào chỉ là số:

| Trục | Loại | Vì sao |
|---|---|---|
| T-VO cấp môi trường | Mở khả năng | Vào dải Giữa, Xa, Cradle mà không hao Oxy gấp 2,5 hoặc 4 (K6). Không chặn chương, thiếu thì làm việc còn khoảng 27% |
| T-DUNGCU số ô dụng cụ | Mở khả năng | Thêm một kiểu chơi mang theo cùng lúc (khai thác, hạ, bắt) |
| Cảng cấp 2 | Mở khả năng (đề xuất) | Cửa neo thứ 4: nhóm 3 và 4 người cần 4 cửa neo để rảnh không quá 30% (sim ca cảng mục 3). gd-quan chốt |
| T-OXY, T-TUI | Chỉ là số | Chuyến dài hơn, mang về nhiều hơn. Đây là đòn bẩy thu nhập chính |
| T-DAY bộ đẩy | Chỉ là số | Chuyến gọn hơn, tăng nhỏ để không đổi cảm giác tay (`nguoi-choi.md`) |
| Dụng cụ khai thác bậc 2, 3 | Chỉ là số, có cổng mềm | Khai thác điểm cứng hơn không bị chậm gấp 4 (`vat-pham.md` luật S3) |

### 3.3 Công thức và núm gap

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nhóm tác động | Nguồn |
|---|---|---|---|---|---|---|
| Tally mỗi GTĐ | 10 | cố định | Mọi giá Tally phình theo | | Đơn vị | gd-economy tự quyết |
| Hệ số ngân sách β | 0,54 | 0,49 đến 0,59 (cả game <!--v:beta-lo-->12,7<!--/v--> đến <!--v:beta-hi-->14,6<!--/v--> giờ) | Chương dài hơn | Chương ngắn hơn, Tally dư | Thời lượng mọi chương | Sim, dò bằng `--do` |
| Giờ dùng tính ngân sách từng chương | 1,25, 2,75, 3,5, 3,0, 1,5 | Tổng 12 đến 15 | | | Ngân sách từng chương | Không phải giờ đo. Giờ đo và lệch ở bảng ngay dưới công thức |
| Tỉ lệ giá trong ngân sách chương | ENG 1,0, T-VO 0,6, T-OXY 0,5, T-TUI 0,5, T-DUNGCU 0,4, khoang cấp 0,4, T-DAY 0,35, bản thiết kế 0,3, cảng cấp 2 0,2, mỗi nâng cấp dụng cụ 0,15 | | Thứ đó đắt hơn trong chương | | Thứ tự mua | gd-economy tự quyết |
| Hệ số bậc giá | Chợ 0,75, sinh học 1,0, chế 1,35, sống 1,3, hiếm 1,5 | Sống 1,1 đến 1,4 (giữ K9 trong 1,2 đến 2 lần hạ), chợ 0,7 đến 0,85 | Bậc đó đắt hơn, danh mục nghiêng về nó | Danh mục bỏ bậc đó | Lập danh mục, chỉ số giá | gd-economy, đợt 9 |
| Độ gọi | Chợ 3, sinh học 2, chế 1,5, sống 1, hiếm 1 | 1 đến 4 | Hàng đó bán trước khi bày thừa | | Thế cân bày thừa | gd-economy, đợt 9. gd-quan giữ độ ưa của loại tàu |
| Tip tối đa | 30% giá thùng | Lead chốt | Tip lớn hơn phần Tally | | Ca cảng | Lead chốt (K13) |
| Hệ số co-op k(N), phần thêm mỗi người | 0,30 ở Gần, 0,25 ở Giữa, 0,38 ở Xa | | Co-op nhanh, mỗi người giàu | Co-op chậm | Co-op | gd-world giữ, sim xác nhận |

Công thức:
- Ngày mục tiêu(c) = Giờ mục tiêu(c) x 60 / Phút một ngày tham chiếu(c). Phút một ngày tham chiếu(c) = 2 x Phút một chuyến đo được của chương (mục 8.5) + phút ca cảng + 3 phút chuẩn bị và cuối ngày. Phút ca cảng lấy từ sim ca cảng gd-tech (một người, trễ 2 giây): <!--v:phut-ca-->3,85, 3,85, 3,85, 3,85, 3,85<!--/v--> phút. Sim ca cảng mới chỉ có chương 1, chương 2 tới 5 dùng cùng số.
- Thu nhập tham chiếu một ngày(c) = 2 chuyến x (GTĐ một chuyến đo được của chương chia 0,9) x 10 x chỉ số giá kịch bản trung bình x 1 / (1 trừ phần tip). Chia 0,9 vì sim chuyến đo ở mức túi đầy 90% của kịch bản trung bình. Chia (1 trừ phần tip) vì tip là phần của Tally ca, không phải phần cộng thêm trên giá.
- Tally một ca trong sim = thùng bán x GTĐ một thùng x 10 x chỉ số giá của kịch bản / (1 trừ phần tip của kịch bản và số người). Thùng bán = số nhỏ hơn giữa tàu phục vụ xong (sim ca cảng) và thùng còn trong kho sau khi giữ phần để xây.
- Mật độ GTĐ mỗi Khối lấy trung bình bảng NODE của gd-items: <!--v:mat-do-->Gần 1,16, Giữa 3,09, Xa 7,78<!--/v-->. Chương 4 và 5 dùng mật độ dải Xa, khớp sim chuyến của gd-tech (mục 8.5).
- Ví dụ chương 1: Phút một ngày = 2 x <!--v:vd-chuyen-->4,4<!--/v--> + <!--v:vd-ca-->3,9<!--/v--> + 3 = <!--v:vd-phut-->15,7<!--/v-->. Ngày mục tiêu = 1,25 x 60 chia Phút một ngày = <!--v:vd-ngay-->4,8<!--/v-->. Thu nhập tham chiếu = 2 x (<!--v:vd-gtd-->102,1<!--/v--> chia 0,9) x 10 x <!--v:chi-so-tb-->0,97<!--/v--> chia (1 trừ <!--v:tip-tb-->25%<!--/v-->) = <!--v:vd-thu-->2950<!--/v-->. Ngân sách = β x Ngày mục tiêu x Thu nhập tham chiếu = <!--v:vd-ngan-sach-->7650<!--/v--> Tally.

<!--khoi:ngan-sach-->
| Chương | Giờ dùng tính ngân sách | Phút một ngày tham chiếu | Ngày mục tiêu | Thu nhập tham chiếu một ngày (Tally) | Ngân sách Tally của chương |
|---|---|---|---|---|---|
| 1 | 1,25 | 15,7 | 4,8 | 2950 | 7650 |
| 2 | 2,75 | 17,6 | 9,3 | 9200 | 46450 |
| 3 | 3,50 | 19,9 | 10,6 | 22500 | 128500 |
| 4 | 3,00 | 23,2 | 7,7 | 32450 | 135650 |
| 5 | 1,50 | 27,7 | 3,3 | 43100 | không có thứ mua mới |
<!--/khoi-->

Giờ dùng tính ngân sách so với giờ đo:

<!--khoi:gio-lech-->
| Chương | Giờ dùng tính ngân sách | Giờ đo (trung bình, một người) | Lệch |
|---|---|---|---|
| 1 | 1,25 | 1,89 | +51% |
| 2 | 2,75 | 3,46 | +26% |
| 3 | 3,50 | 3,97 | +13% |
| 4 | 3,00 | 3,09 | +3% |
| 5 | 1,50 | 1,36 | -9% |
<!--/khoi-->

Núm gap: β (một núm cho cả 5 chương). Mọi giá Tally đi theo thu nhập của chương nên khi gd-items hoặc gd-character đổi mật độ, túi, Oxy thì giá tự đổi theo, chạy lại sim là xong. Giá thùng và hệ số bậc không đổi thời lượng nhiều vì ngân sách chương đọc chỉ số giá, chúng đổi cách người chơi lập danh mục.

### 3.4 Thứ tự mua trong sim và kịch bản

- Thứ tự mua trong sim: theo chương mở của bảng 3.2, trong mỗi chương mua ENG và T-VO trước, rồi các dòng còn lại theo thứ tự bảng, khi đủ Tally và vật liệu.

| Tham số hành vi | Tệ | Trung bình | Tốt | Nguồn |
|---|---|---|---|---|
| Phần túi đầy mỗi chuyến | 75% | 90% | 100% | `[GIẢ ĐỊNH]`, chờ sim chuyến gd-tech |
| Hệ số mật độ (nhặt đồ hiếm) | 0,9 | 1,0 | 1,15 | `[GIẢ ĐỊNH]` |
| Tỉ lệ chuyến ngạt, một người | 25% | 15% | 7% | Khung mục 9: người cẩn thận dưới 5%, người tham 15 đến 40%. Ba mức là `[GIẢ ĐỊNH]` nằm giữa hai đầu |
| Trễ phản xạ ở ca cảng | 3 giây | 2 giây | 1 giây | Sim ca cảng gd-tech mục 4: tàu xong, giây một ca, tip, điểm mỗi tàu theo N |
| Chỉ số giá của danh mục | <!--v:chi-so-te-->0,84<!--/v--> | <!--v:chi-so-tb-->0,97<!--/v--> | <!--v:chi-so-tot-->1,07<!--/v--> | Danh mục đại diện mục 3.1, `[GIẢ ĐỊNH]` |
| Hệ số phút một ngày | 1,15 | 1,0 | 0,9 | `[GIẢ ĐỊNH]` |

- Giả định chung của sim (ghi đủ ở `tham-so.json`, kèm nguồn ở mục ghi chú nguồn): mỗi chương không xong trước sàn ngày truyện của gd-story (7, 5, 8, 3, 3 ngày, `cot-truyen.md` mục 5). Ca cảng chương 1 mở từ ngày 4 (Thông dịch viên tỉnh, mốc C1.8 của `tram-va-cang.md`) và khi đã sửa đủ 98 GTĐ của 5 khoang. Mỗi ngày đúng 2 chuyến, đúng trần của K22, ngày chỉ sang khi ngủ (K23). Lượng nhặt một chuyến là số nhỏ hơn giữa túi đầy và thời gian làm việc nhân tốc độ nhặt thực. Tốc độ nhặt thực đặt để túi bậc 0 đầy ở 65% thời gian làm việc chương 1 (mục tiêu của gd-items). Kết quả nhân hệ số để khớp GTĐ một chuyến của sim chuyến gd-tech (mục 8.5), gồm cả Driftlife bắt và hạ. Chuyến map nhánh cho 50% lượng nhặt. Người vớt tỉnh sau một đêm. Co-op làm mỗi ngày dài thêm 5% mỗi người thêm (chờ người về cuối). Đồng đội cứu nhau làm tỉ lệ ngạt giảm một nửa khi từ 2 người. Ngạt giữ món đắt nhất của dải. Khi còn thứ phải xây, người chơi giữ lại 40% kho cho xây trước khi lập danh mục. Hết hàng thì ca ngắn lại theo phần tàu được phục vụ (D8). Qua chương thì 30% giá trị kho mang sang. 200 lượt chạy mỗi ô, seed 20261120.

### 3.5 Ngưỡng Hạng cảng (gd-quan đã nhận, luật 41)

- Cách tính (đợt 9): điểm mới gấp 7 tới 8 lần mỗi ca so với điểm theo đơn cũ, nên ngưỡng cũ (10, 20, 45, 70, 100, 135, 195) không còn chặn ENG. Ngưỡng mới đặt để ngày đủ điểm trung bình (một người, kịch bản trung bình, chưa tính trần chương) bằng ngày đủ điểm của sim bản trước đợt 9, tức giữ nguyên nhịp mở theo chương cũ. Hàm `nguong_theo_ngay_cu()` của sim dò từng ngưỡng theo bước 5 điểm, lặp tới khi đứng yên. Sim in lại đề xuất mỗi lần chạy: <!--v:nguong-de-xuat-->70, 135, 285, 400, 560, 680, 910<!--/v-->. Đổi ngưỡng thì gd-quan đổi ở `tram-va-cang.md` rồi gd-economy sửa tham-so.json.
- Hạng 2 cần 2 ca (một ca một người tới 50 điểm). Hạng 6 và 8 lên ở ngày mở chương vì trần chương, như bản cũ.

<!--khoi:nguong-hang-->
| Hạng | Trần ở chương | Ngưỡng điểm (sim dùng số này) | Ngày đủ điểm, bản trước đợt 9 | Ngày đủ điểm, đo lại | Ngày lên hạng (có trần chương) |
|---|---|---|---|---|---|
| 2 | 1 | 70 | 5,0 | 5,0 | 5,0 |
| 3 | 1 | 135 | 7,0 | 7,0 | 7,0 |
| 4 | 2 | 285 | 12,5 | 12,4 | 12,4 |
| 5 | 2 | 400 | 16,1 | 16,0 | 16,0 |
| 6 | 3 | 560 | 20,1 | 19,8 | 21,5 |
| 7 | 3 | 680 | 24,3 | 24,0 | 24,0 |
| 8 | 4 | 910 | 30,5 | 30,3 | 34,0 |
<!--/khoi-->

## 4. Trường hợp biên

| Ca | Xử lý |
|---|---|
| Tally bằng 0 | Không mua được gì, không có phạt. Ca cảng hôm sau vẫn có tàu. Không thể kẹt: thùng hàng chợ đóng thẳng từ tài nguyên thô không cần Tally |
| Bỏ mọi ca cảng | Không có Tally, không lên Hạng cảng, kẹt ở ENG-101. Đây là lựa chọn người chơi, game không ép. Bảng tàu nhắc ENG cần Hạng 3 |
| Đủ Tally, thiếu Hạng cảng cho ENG | Mục ENG hiện điều kiện "cần Hạng N". Sim đo: Hạng 3 tới trước khi chương 1 xong (bảng 3.5) |
| Đủ điểm, chạm trần hạng chương | Điểm cộng dồn, lên hạng khi chương sau mở (gd-quan) |
| Danh mục ít hơn số tàu | Tàu không tới khi hết hàng, ca kết thúc sớm (D8). Không phạt, không mất điểm đã có |
| Tàu rời vì hết kiên nhẫn | Không trả giá, không tip, không điểm. Thùng về kho, không mất |
| Đơn đặt trước trượt (món không có trong danh mục) | Tàu đó gọi món khác trong danh mục với giá thường. Không phạt |
| Thùng chưa bán cuối ca | Về kho, bán được ca sau với cùng giá |
| Mua cùng lúc trong co-op | Ví chung, người bấm trước được, người sau thấy giá đỏ nếu thiếu. Máy chủ xử lý theo thứ tự tới |
| Người vào sau | Không mang Tally riêng, dùng ví chung, bộ đồ cùng bậc với nhóm (C4) |
| Tally rất lớn ở chương 5 hoặc nhóm 3, 4 người | Chương 5 không có thứ mua mới, Tally dư. Nhóm đông dư nhiều hơn (bảng 8.2). Ghi ở mục 10 |
| Giao lồng loài A cho tàu gọi loài B | Tàu từ chối (gd-quan). Không có giá |

## 5. Ràng buộc vật lý của luật

- Tally tối đa một ca bằng số tàu nhân giá thùng đắt nhất trong danh mục nhân 1,6 (tip tối đa 30%, gấp đôi là 60%), cộng phần 0,5 thêm của đơn đặt trước, cộng 10 Tally mỗi lần bơm khí. K22 cho một ca mỗi ngày nên ngân sách chương luôn đo được bằng số ngày.
- Không có vòng tiền vô hạn: nuôi có trần ô (4, 6, 9) và lãi ròng 2,2 / 5,0 / 9,5 GTĐ mỗi ô mỗi ngày, khoảng 3 đến 4% thu nhập. Shop không bán tài nguyên, kiện, vật tiêu hao nên không có mua rẻ bán đắt. Chế rồi bán có biên lợi (hàng chế 1,35) nhưng nguyên liệu gốc chỉ đến từ chuyến ngoài, bị chặn bởi Oxy và túi, còn số thùng một ca bị chặn bởi số tàu. Giá không đổi theo số người và thời gian.
- Thời gian một chương có sàn không phụ thuộc giá: chuyến map nhánh, đêm chờ người vớt, sửa khoang, Hạng cảng. Sim đo sàn chương 1 khi giá Tally gần 0 là <!--v:san-ch1-goc-->1,6<!--/v--> giờ. Chương 5 gần như chỉ có sàn (bảng 8.1).
- Co-op không thể nhanh hơn sàn: chương 5 của nhóm 4 dài gần bằng chơi một mình (bảng 8.1).

## 6. Yêu cầu cho engineer và tool

- Dữ liệu: bảng giá kiện và thùng (ID kiện, Tally một kiện, Tally một thùng, bậc giá, độ gọi), bảng giá lồng theo loài, bảng thứ mua (ID, chương mở, Hạng cần, Tally, bộ vật liệu), tip tối đa, hệ số Tàu vội, hệ số Tikko, Tally bơm khí, hệ số đơn đặt trước, ngưỡng Hạng. Tất cả lấy từ `ket-qua.json` và `tham-so.json`, gd-tech chuyển sang ScriptableObject. Không gõ giá trong code.
- Lưu: Tally (số nguyên, chung thế giới), điểm cảng, Hạng cảng, danh sách thứ đã mua, thùng chưa bán trong kho.
- Sự kiện cho event tracking (gd-tech): `tally_nhan` (nguồn: thùng, tip, bơm khí, đơn đặt trước, kèm loại hàng và bậc giá), `tally_chi` (thứ mua), `hang_cang_len`, `chuong_xong` (ngày, giờ chơi, số người), `danh_muc_lap` (loại hàng, số thùng mỗi loại). Dùng để so với bảng mục 8 và bảng kiểu danh mục mục 3.1 khi playtest.
- Nơi phải đổi cùng khi đổi số: `tham-so.json`, chạy lại sim với `--ghi`, sửa khối giaThung của `tools/tham-so/ca-cang.json` (selftest bắt lệch), gd-tech xuất lại data. Đổi GTĐ ở `vat-pham.md` thì chạy lại sim, giá tự theo.

## 6b. Co-op 1 đến 4 người

<!--khoi:coop-he-so-->
| Phần | 1 người | 2 người | 3 người | 4 người |
|---|---|---|---|---|
| Ví Tally, giá, Hạng cảng | Chung | Chung | Chung | Chung |
| Hệ số khe điểm sinh k(N) (gd-world), Gần, Giữa, Xa | 1,00, 1,00, 1,00 | 1,30, 1,25, 1,38 | 1,60, 1,50, 1,76 | 1,90, 1,75, 2,14 |
| Mỗi người so với chơi một mình, sim chuyến gd-tech, chương 1 tới 5 | 100%, 100%, 100%, 100%, 100% | 85%, 92%, 95%, 92%, 85% | 73%, 85%, 91%, 87%, 75% | 66%, 80%, 89%, 83%, 69% |
| Số tàu một ca và cửa neo (sim ca cảng gd-tech, C8) | 25 tàu, 3 cửa neo | 50 tàu, 3 cửa neo | 70 tàu, 4 cửa neo | 70 tàu, 4 cửa neo |
| Điểm cảng một ca, kịch bản trung bình, kho đủ | 44 | 88 | 126 | 128 |
| Giá nâng cấp, sửa khoang | Không đổi | Không đổi | Không đổi | Không đổi |
<!--/khoi-->

Không luật nào cần đúng N người. Bảng đo:

<!--khoi:coop-->
| Kịch bản | Số người | Mỗi người nhặt so với một mình | Tới hết chương 1 (cộng dồn) | Tới hết chương 2 (cộng dồn) | Tới hết chương 3 (cộng dồn) | Tới hết chương 4 (cộng dồn) | Hết game |
|---|---|---|---|---|---|---|---|
| tệ | 2 | 90% | 72% | 57% | 56% | 56% | 59% |
| tệ | 3 | 82% | 75% | 46% | 48% | 45% | 49% |
| tệ | 4 | 77% | 79% | 48% | 50% | 48% | 53% |
| trung bình | 2 | 90% | 91% | 60% | 63% | 60% | 65% |
| trung bình | 3 | 82% | 95% | 63% | 67% | 64% | 68% |
| trung bình | 4 | 77% | 100% | 66% | 71% | 67% | 72% |
| tốt | 2 | 90% | 105% | 72% | 78% | 75% | 79% |
| tốt | 3 | 82% | 111% | 75% | 81% | 79% | 83% |
| tốt | 4 | 77% | 115% | 79% | 86% | 83% | 87% |
<!--/khoi-->

- Số tàu một ca tăng theo số người (C8) nên điểm cảng một ca tăng theo, không cần hệ số riêng. Mỗi người nhóm 4 nhặt <!--v:moi-nguoi-4-->66% đến 89%<!--/v--> so với một mình (sim chuyến gd-tech), từ 60% như mục tiêu. Nhóm 4 tới hết game bằng <!--v:coop4-game-->72%<!--/v--> thời gian một mình, hết chương 1 (cộng dồn) bằng <!--v:coop4-ch1-->100%<!--/v-->, hết chương 2 (cộng dồn) bằng <!--v:coop4-ch2-->66%<!--/v-->. Nguyên nhân là sàn ngày của chuỗi mốc truyện (`cot-truyen.md` mục 5): tổng <!--v:san-tong-->26<!--/v--> ngày, không đổi theo số người. Nhóm đông đi chạm sàn ở mọi chương. Phương án hạ sàn không áp: nếu áp thì sàn còn <!--v:san-ha-tong-->22<!--/v--> ngày và nhóm 4 xuống <!--v:coop4-san-ha-->62%<!--/v-->.
- Ở kịch bản tốt, nhóm đông xong chương 1 chậm hơn chơi một mình (trên 100% ở bảng trên): người chơi tốt một mình cũng chạm sàn ngày truyện, mà một ngày co-op dài hơn 5% mỗi người thêm (chờ người về cuối, `[GIẢ ĐỊNH]`). Cùng số ngày, ngày dài hơn thì giờ nhiều hơn.

## 7. Yêu cầu cho art, UI, tutorial, audio

| Sự kiện | Hình | Âm | Text / tutorial | Ưu tiên |
|---|---|---|---|---|
| Nhận Tally từ thùng | Số giá bay lên từ cửa neo về góc ví, số tip bay sau, nhỏ hơn và khác màu | Tiếng xu, tip cao thì tiếng cao hơn | Không | Cao |
| Màn lập danh mục | Mỗi loại hàng hiện giá thùng và độ gọi bằng biểu tượng (nhiều tàu gọi, ít tàu gọi), số thùng có trong kho | | Lần đầu: một câu của Thông dịch viên: hàng chuẩn bị trước đắt hơn, hàng chợ thì tàu nào cũng gọi (gd-ux) | Cao |
| Mở Shop lần đầu | Danh mục chia theo Hạng, ô khóa ghi điều kiện | | Một câu của Thông dịch viên: tàu trả Tally, Shop bán thứ trạm không tự làm | Cao |
| Mua nâng cấp | Bộ đồ đổi hình sáng hôm sau | Tiếng máy Xưởng | Lần đầu: nâng cấp xong qua đêm | Cao |
| Thiếu Tally hoặc vật liệu | Phần thiếu đỏ, ghi số còn thiếu | | Không | Cao |
| ENG khóa vì Hạng | Ô ENG ghi "cần Hạng cảng N", thanh điểm tới hạng | | FTUE chương 1: lần đầu chạm ô ENG-101 | Cao |

gd-ux: mỗi giá hiện cả hai phần (Tally và vật liệu). Màn Shop, Upgrade, lập danh mục đọc giá từ data, không có số trong strings.

## 7b. Cảm giác (game feel)

- Tham chiếu: khoảnh khắc Dave nhận tiền cuối ca sushi, tiền đếm lên từng dòng món [D theo `docs/knowledge/indie/06-dave-the-diver-cau-truc.md`]. Ở đây đếm theo từng tàu trên bảng kết ca, tách giá và tip.
- Phản tham chiếu: không có số Tally nhảy kiểu máy đánh bạc, không có hiệu ứng mua sắm kiểu cửa hàng game di động.
- Mua nâng cấp: không có hoạt ảnh dài, xác nhận một lần, kết quả thấy ở sáng hôm sau trên hình bộ đồ.

## 8. Cách đo thành công và tiêu chí nghiệm thu

### 8.1 Mốc chương theo kịch bản và số người

Mỗi ô là ngày thứ mấy xong chương và số giờ chơi của riêng chương đó (trung bình 200 lượt).

<!--khoi:moc-chuong-->
| Kịch bản | Số người | Chương 1 | Chương 2 | Chương 3 | Chương 4 | Chương 5 | Cả game (giờ) | Lượt chạy xong game |
|---|---|---|---|---|---|---|---|---|
| tệ | 1 | 10 ngày, 2,76 giờ | 28 ngày, 5,56 giờ | 46 ngày, 6,50 giờ | 58 ngày, 5,18 giờ | 61 ngày, 1,52 giờ | 21,5 | 100% |
| tệ | 2 | 7 ngày, 1,98 giờ | 15 ngày, 2,78 giờ | 25 ngày, 3,56 giờ | 31 ngày, 2,83 giờ | 34 ngày, 1,60 giờ | 12,7 | 100% |
| tệ | 3 | 7 ngày, 2,08 giờ | 12 ngày, 1,74 giờ | 20 ngày, 3,24 giờ | 24 ngày, 1,89 giờ | 27 ngày, 1,66 giờ | 10,6 | 100% |
| tệ | 4 | 7 ngày, 2,17 giờ | 12 ngày, 1,86 giờ | 20 ngày, 3,45 giờ | 24 ngày, 2,05 giờ | 27 ngày, 1,77 giờ | 11,3 | 100% |
| trung bình | 1 | 8 ngày, 1,89 giờ | 21 ngày, 3,46 giờ | 33 ngày, 3,97 giờ | 41 ngày, 3,09 giờ | 44 ngày, 1,36 giờ | 13,8 | 100% |
| trung bình | 2 | 7 ngày, 1,72 giờ | 12 ngày, 1,47 giờ | 20 ngày, 2,68 giờ | 24 ngày, 1,60 giờ | 27 ngày, 1,42 giờ | 8,9 | 100% |
| trung bình | 3 | 7 ngày, 1,81 giờ | 12 ngày, 1,56 giờ | 20 ngày, 2,87 giờ | 24 ngày, 1,70 giờ | 27 ngày, 1,48 giờ | 9,4 | 100% |
| trung bình | 4 | 7 ngày, 1,89 giờ | 12 ngày, 1,66 giờ | 20 ngày, 3,03 giờ | 24 ngày, 1,79 giờ | 27 ngày, 1,59 giờ | 10,0 | 100% |
| tốt | 1 | 7 ngày, 1,47 giờ | 17 ngày, 2,59 giờ | 27 ngày, 2,89 giờ | 33 ngày, 2,16 giờ | 36 ngày, 1,24 giờ | 10,3 | 100% |
| tốt | 2 | 7 ngày, 1,55 giờ | 12 ngày, 1,37 giờ | 20 ngày, 2,48 giờ | 24 ngày, 1,47 giờ | 27 ngày, 1,31 giờ | 8,2 | 100% |
| tốt | 3 | 7 ngày, 1,62 giờ | 12 ngày, 1,43 giờ | 20 ngày, 2,60 giờ | 24 ngày, 1,54 giờ | 27 ngày, 1,37 giờ | 8,6 | 100% |
| tốt | 4 | 7 ngày, 1,70 giờ | 12 ngày, 1,51 giờ | 20 ngày, 2,74 giờ | 24 ngày, 1,61 giờ | 27 ngày, 1,43 giờ | 9,0 | 100% |
<!--/khoi-->

| Mục tiêu khung mục 9 | Mục tiêu | Đo (trung bình, một người trừ khi ghi) | Đạt |
|---|---|---|---|
| Chương 1 | 1,5 đến 2 giờ | <!--v:gio-ch1-tb-->1,89<!--/v--> giờ | Đạt |
| Cả game | 12 đến 15 giờ | <!--v:gio-game-tb-->13,8<!--/v--> giờ | Đạt |
| Độ dài một ngày (khung mục 9) | Chương 1: 15 đến 20 phút. Chương 5: 25 đến 30 phút | Chương 1 <!--v:phut-ngay-ch1-->15,7<!--/v--> phút, chương 5 <!--v:phut-ngay-ch5-->27,7<!--/v--> phút (2 chuyến đo được, ca cảng, 3 phút chuẩn bị) | Đạt |
| Số ngày tới hết game | Không đặt | <!--v:ngay-game-tb-->44<!--/v--> ngày | Để tham khảo |
| Nhóm 4 so với một mình, tới hết game | 60 đến 75% (GDM, log 69) | <!--v:coop4-game-->72%<!--/v--> | Đạt |
| Mỗi người nhóm 4 nhặt so với một mình | từ 60% | <!--v:moi-nguoi-4-->66% đến 89%<!--/v--> | Đạt |
| Tip trong Tally ca cảng (khung mục 9) | 20 đến 30% | <!--v:tip-tb-->25%<!--/v--> (tệ <!--v:tip-te-->22%<!--/v-->, tốt <!--v:tip-tot-->26%<!--/v-->), mọi kiểu danh mục <!--v:dm-tip-->22% đến 26%<!--/v--> | Đạt |
| Sống so với hạ, cỡ S và M, sau khi trừ vật tiêu hao, tính bằng Tally | 1,2 đến 2 lần (khung mục 9) | <!--v:luoi-min-->1,44<!--/v--> đến <!--v:luoi-max-->1,81<!--/v--> qua lưới, <!--v:tay-min-->1,50<!--/v--> đến <!--v:tay-max-->1,94<!--/v--> bắt tay (mục 8.4) | Đạt |
| Kiểu danh mục khác nhau rõ (Lead "cần làm cho nó tốt hơn") | Không đặt số | Hàng chợ <!--v:dm-cho-->-30%<!--/v-->, ít mà đắt <!--v:dm-it-->-24%<!--/v--> so với Chuẩn bị kỹ (mục 3.1) | Để GDM xem |

- Kịch bản tệ một người dài <!--v:gio-game-te-->21,5<!--/v--> giờ, kịch bản tốt <!--v:gio-game-tot-->10,3<!--/v--> giờ. Tệ dài hơn bản trước (19,5 giờ) vì người không chuẩn bị chỉ bán hàng chợ, chỉ số giá 0,84. Đây là chủ ý của giá theo bậc: chuẩn bị danh mục rút ngắn game. Chương 2 trung bình dài <!--v:gio-ch2-tb-->3,5<!--/v--> giờ so với 2,75 giờ đặt ra (lệch <!--v:lech-ch2-->26%<!--/v-->) vì chương 2 có 3 chuyến map nhánh và hai người vớt. Tổng vẫn trong mục tiêu nên không chỉnh thêm, ghi ở mục 10.

### 8.2 Source và sink Tally

<!--khoi:source-sink-->
| Kịch bản | Số người | Tally thu cả game | Phần tip trong thu | Chi cho ENG | Chi cho bộ đồ | Chi cho dụng cụ, khoang, Shop khác | Tally dư cuối game | Dư so với thu |
|---|---|---|---|---|---|---|---|---|
| tệ | 1 | 364125 | 22% | 30% | 54% | 17% | 45895 | 13% |
| tệ | 2 | 404127 | 23% | 30% | 54% | 17% | 85897 | 21% |
| tệ | 3 | 449778 | 24% | 30% | 54% | 17% | 131548 | 29% |
| tệ | 4 | 553411 | 24% | 30% | 54% | 17% | 235181 | 42% |
| trung bình | 1 | 397387 | 25% | 30% | 54% | 17% | 79157 | 20% |
| trung bình | 2 | 483800 | 25% | 30% | 54% | 17% | 165570 | 34% |
| trung bình | 3 | 734170 | 25% | 30% | 54% | 17% | 415940 | 57% |
| trung bình | 4 | 809617 | 25% | 30% | 54% | 17% | 491387 | 61% |
| tốt | 1 | 415135 | 26% | 30% | 54% | 17% | 96905 | 23% |
| tốt | 2 | 638793 | 25% | 30% | 54% | 17% | 320563 | 50% |
| tốt | 3 | 896666 | 25% | 30% | 54% | 17% | 578436 | 65% |
| tốt | 4 | 913647 | 25% | 30% | 54% | 17% | 595417 | 65% |
<!--/khoi-->

- Tally không phải cổng ở chương 3 và 4 (cổng là vật liệu, Hạng và chuyến map nhánh), nên Tally trong ví có lúc lên vài ngày lương (Phụ lục). Dư cuối game phần lớn đến từ chương 5 (không có thứ mua mới, GDM chấp nhận). Nhóm 3 và 4 người dư hơn nửa thu vì 70 tàu một ca bán gấp 2,8 lần một người mà giá không đổi theo số người (C8).

### 8.3 Điểm treo log 40: giữ 1 món khi ngạt có quá đau ở chương 1

<!--khoi:log40-->
| Kịch bản | Tỉ lệ chuyến ngạt (đầu vào) | Phần nhặt mất vì ngạt, cả game | Giờ chương 1, giữ 1 món | Giờ chương 1, giữ 3 món | Chênh (phút) |
|---|---|---|---|---|---|
| tệ | 25% | 22,9% | 2,76 | 2,66 | 6 |
| trung bình | 15% | 14,2% | 1,89 | 1,89 | 0 |
| tốt | 7% | 6,8% | 1,47 | 1,47 | 0 |
<!--/khoi-->

<!--khoi:mon-giu-->
| Chương | Dải | Túi đầy (GTĐ, bậc túi theo chương) | Món đắt nhất một đơn vị (GTĐ) | Giữ 1 món còn lại bao nhiêu |
|---|---|---|---|---|
| 1 | Gần | 93 | 5,0 | 5% |
| 2 | Giữa | 309 | 10,0 | 3% |
| 3 | Xa | 981 | 18,0 | 2% |
| 4 | Xa | 1308 | 18,0 | 1% |
| 5 | Xa | 1681 | 18,0 | 1% |
<!--/khoi-->

- Kết luận: với túi 80 Khối, giữ 1 món là mất thật: món giữ lại chỉ bằng <!--v:giu-ch1-->5%<!--/v--> túi đầy ở chương 1 và <!--v:giu-ch5-->1%<!--/v--> ở chương 5. Nhưng ngạt hiếm, nên đổi sang giữ 3 món chỉ đổi chương 1 khoảng <!--v:chenh-tb-->0<!--/v--> phút ở kịch bản trung bình và <!--v:chenh-te-->6<!--/v--> phút ở kịch bản tệ. GDM đã chốt giữ 1 món (log 57).
- Lồng mẫu: trước khi sửa, lồng 3 con đắt nhất dải Gần trị <!--v:long-3-->92,1<!--/v--> GTĐ, ngang túi đầy chương 1 (<!--v:tui-ch1-->92,6<!--/v--> GTĐ), nên ngạt với lồng đầy gần như không mất gì. gd-combat đã sửa luật 25, GDM chốt ở log 57: chọn lồng làm món giữ lại thì chỉ giữ con sao cao nhất.

### 8.4 Bắt sống so với hạ, tính bằng Tally (K9)

- Hạ một con: mô sinh học bán theo thùng mô (Hàng sinh học), phần đặc sản đóng kiện đặc sản (Hàng hiếm, hệ số chế 1,1). Bắt sống: giá lồng (Hàng sống). Lưới cuộn trừ <!--v:luoi-gtd-->1,10<!--/v--> GTĐ x 10 Tally mỗi phát, chia theo số con một phát trúng.

<!--khoi:bat-song-->
| Loài cỡ S | Dải | Hạ (Tally kỳ vọng, bán mô sinh học và đặc sản) | Lồng sống (Tally) | Sống trên hạ, bắt tay sau choáng | Ròng trên hạ, lưới trúng 1 con | 2 con | 3 con | Nhãn |
|---|---|---|---|---|---|---|---|---|
| DL-G01 Driftmoth | Gần | 35,0 | 65 | 1,86 | 1,54 | 1,70 | 1,75 | MVP |
| DL-G02 Skitter Ray | Gần | 41,7 | 75 | 1,80 | 1,54 | 1,67 | 1,71 | MVP |
| DL-G04 Sting Krill | Gần | 28,3 | 55 | 1,94 | 1,55 | 1,75 | 1,81 | MVP |
| DL-M04 Needlefin | Giữa | 81,7 | 135 | 1,65 | 1,52 | 1,59 | 1,61 | Sau MVP |
| DL-X01 Prism Wisp | Xa | 290,0 | 435 | 1,50 | 1,46 | 1,48 | 1,49 | Sau MVP |
| DL-X05 Shardbrood Hatchling | Xa | 200,0 | 300 | 1,50 | 1,44 | 1,47 | 1,48 | Sau MVP |
<!--/khoi-->

- Kết luận: qua lưới, ròng trên hạ từ <!--v:luoi-min-->1,44<!--/v--> tới <!--v:luoi-max-->1,81<!--/v-->. Bắt tay sau choáng không tốn vật tiêu hao nên được <!--v:tay-min-->1,50<!--/v--> đến <!--v:tay-max-->1,94<!--/v--> lần, trong trần 2,0 của khung. Bắt sống luôn đáng hơn hạ (K9) mà không vượt trần. Hệ số Hàng sống 1,3 thấp hơn Hàng hiếm 1,5 có chủ ý: đặc sản rơi khi hạ đã đắt, lồng đắt hơn nữa thì Sting Krill vượt trần 2.

### 8.4b Tally một ca theo số người, kho thùng sau hai chuyến

Tally một ca chương 1 khi kho đủ (tàu xong theo sim ca cảng, giá theo chỉ số giá của kịch bản) so với giá trị hai chuyến đầy túi của cả nhóm. Mốc cũ là 60% cho mọi số người, cột cuối là mốc theo số người:

<!--khoi:tally-ca-->
| Kịch bản | Số người | Số tàu | Tàu xong (sim ca cảng) | Tally một ca, kho đủ | Hai chuyến đầy túi của nhóm, quy ra Tally | Mốc: phần hai chuyến bán ở một ca | Điểm cảng một ca |
|---|---|---|---|---|---|---|---|
| tệ | 1 | 25 | 23,6 | 1357 | 2425 | 56% | 41 |
| tệ | 2 | 50 | 44,0 | 2562 | 4629 | 55% | 77 |
| tệ | 3 | 70 | 61,4 | 3622 | 6181 | 59% | 108 |
| tệ | 4 | 70 | 63,2 | 3728 | 7420 | 50% | 112 |
| trung bình | 1 | 25 | 25,0 | 1742 | 2949 | 59% | 44 |
| trung bình | 2 | 50 | 49,8 | 3469 | 4991 | 70% | 88 |
| trung bình | 3 | 70 | 69,7 | 4855 | 6472 | 75% | 126 |
| trung bình | 4 | 70 | 69,7 | 4855 | 7786 | 62% | 128 |
| tốt | 1 | 25 | 25,0 | 1944 | 3023 | 64% | 50 |
| tốt | 2 | 50 | 50,0 | 3835 | 4539 | 84% | 100 |
| tốt | 3 | 70 | 69,9 | 5362 | 5933 | 90% | 140 |
| tốt | 4 | 70 | 70,0 | 5369 | 7247 | 74% | 140 |
<!--/khoi-->

- Mốc mới, kịch bản trung bình: một người <!--v:moc-1-->59%<!--/v-->, 2 người <!--v:moc-2-->70%<!--/v-->, 3 người <!--v:moc-3-->75%<!--/v-->, 4 người <!--v:moc-4-->62%<!--/v--> giá trị hai chuyến đầy túi. Tally một ca <!--v:tally-ca-1-->1742<!--/v-->, <!--v:tally-ca-2-->3469<!--/v-->, <!--v:tally-ca-3-->4855<!--/v-->, <!--v:tally-ca-4-->4855<!--/v-->. Nhóm 2 và 3 người bán phần kho lớn hơn một mình vì vật liệu xây không nhân theo số người, nên nhóm có nhiều hàng rảnh để bán. 3 và 4 người cùng 70 tàu nên 4 người bán phần nhỏ hơn.

Kho thùng sau hai chuyến (kịch bản theo cột, sim chuyến gd-tech) so với số tàu một ca, chưa trừ phần giữ để xây:

<!--khoi:kho-thung-->
| Chương | Kịch bản | GTĐ một thùng trung bình | 1 người: thùng sau hai chuyến / số tàu | 2 người: thùng sau hai chuyến / số tàu | 3 người: thùng sau hai chuyến / số tàu | 4 người: thùng sau hai chuyến / số tàu |
|---|---|---|---|---|---|---|
| 1 | tệ | 5,4 | 32 / 25 đủ | 60 / 50 đủ | 79 / 70 đủ | 94 / 70 đủ |
| 1 | trung bình | 5,4 | 38 / 25 đủ | 64 / 50 đủ | 84 / 70 đủ | 101 / 70 đủ |
| 1 | tốt | 5,4 | 39 / 25 đủ | 59 / 50 đủ | 77 / 70 đủ | 94 / 70 đủ |
| 2 | trung bình | 16,5 | 39 / 25 đủ | 71 / 50 đủ | 98 / 70 đủ | 123 / 70 đủ |
| 3 | trung bình | 41,0 | 38 / 25 đủ | 72 / 50 đủ | 104 / 70 đủ | 135 / 70 đủ |
| 4 | trung bình | 64,4 | 35 / 25 đủ | 64 / 50 đủ | 91 / 70 đủ | 116 / 70 đủ |
| 5 | trung bình | 77,3 | 39 / 25 đủ | 66 / 50 đủ | 87 / 70 đủ | 107 / 70 đủ |
<!--/khoi-->

- Mọi ô đủ. Một người chương 1 có <!--v:kho-ch1-1-->38<!--/v--> thùng sau hai chuyến, còn <!--v:kho-ch1-1-xay-->23<!--/v--> nếu giữ 40% để xây, dưới 25 tàu. Hàng tồn từ ngày 1 tới 3 (cảng chưa mở) bù phần thiếu: sim đo một người chương 1 bán trung bình <!--v:ban-ch1-->25,0<!--/v--> thùng mỗi ca.

Thùng bán thật mỗi ca trong sim (sau khi giữ phần để xây, kho mang sang 30% khi qua chương):

<!--khoi:ban-chuong-->
| Kịch bản | Số người | Số tàu | Chương 1: thùng bán mỗi ca (phần số tàu) | Chương 2: thùng bán mỗi ca (phần số tàu) | Chương 3: thùng bán mỗi ca (phần số tàu) | Chương 4: thùng bán mỗi ca (phần số tàu) | Chương 5: thùng bán mỗi ca (phần số tàu) |
|---|---|---|---|---|---|---|---|
| tệ | 1 | 25 | 20,1 (81%) | 15,6 (62%) | 16,6 (66%) | 16,4 (65%) | 15,4 (62%) |
| tệ | 2 | 50 | 43,9 (88%) | 28,3 (57%) | 33,6 (67%) | 31,4 (63%) | 29,2 (58%) |
| tệ | 3 | 70 | 61,4 (88%) | 41,9 (60%) | 49,3 (70%) | 43,3 (62%) | 37,4 (53%) |
| tệ | 4 | 70 | 63,2 (90%) | 48,9 (70%) | 56,1 (80%) | 60,3 (86%) | 47,4 (68%) |
| trung bình | 1 | 25 | 25,0 (100%) | 17,9 (72%) | 19,9 (80%) | 20,3 (81%) | 22,7 (91%) |
| trung bình | 2 | 50 | 49,8 (100%) | 38,3 (77%) | 39,7 (79%) | 41,6 (83%) | 39,8 (80%) |
| trung bình | 3 | 70 | 69,7 (100%) | 55,7 (80%) | 62,5 (89%) | 67,0 (96%) | 54,5 (78%) |
| trung bình | 4 | 70 | 69,7 (100%) | 62,4 (89%) | 66,1 (94%) | 69,7 (100%) | 69,0 (99%) |
| tốt | 1 | 25 | 25,0 (100%) | 20,3 (81%) | 22,6 (90%) | 24,1 (96%) | 24,9 (100%) |
| tốt | 2 | 50 | 50,0 (100%) | 45,1 (90%) | 47,0 (94%) | 50,0 (100%) | 49,7 (99%) |
| tốt | 3 | 70 | 69,9 (100%) | 63,3 (90%) | 66,3 (95%) | 69,9 (100%) | 69,8 (100%) |
| tốt | 4 | 70 | 70,0 (100%) | 67,0 (96%) | 68,7 (98%) | 70,0 (100%) | 70,0 (100%) |
<!--/khoi-->

- Từ chương 2 một người chỉ lấp khoảng 70 tới 90% số tàu vì vật liệu sửa khoang chương mới lớn và kho mang sang chỉ còn 30%. Tàu không tới khi hết hàng (D8), không phải tàu bỏ đi, nên không trái mục tiêu tàu phục vụ xong của khung. Nếu gd-quan muốn ca chương 2 đầy hơn thì bớt tàu hoặc giảm GTĐ một thùng chương 2, không đổi giá.

### 8.5 So với sim chuyến của gd-tech

<!--khoi:so-gd-tech-->
| Chương | Bình | Túi (Khối) | Phút một chuyến | GTĐ một chuyến (gồm Driftlife) | GTĐ túi đầy chỉ tài nguyên, sim này | Hệ số nhân vào sim này | Nguồn |
|---|---|---|---|---|---|---|---|
| 1 | 330 | 80 | 4,4 | 102,1 | 83 | 1,22 | sim chuyến gd-tech |
| 2 | 450 | 100 | 5,4 | 318,6 | 278 | 1,15 | sim chuyến gd-tech |
| 3 | 600 | 126 | 6,5 | 778,8 | 883 | 0,88 | sim chuyến gd-tech |
| 4 | 780 | 168 | 8,2 | 1123,5 | 1177 | 0,95 | sim chuyến gd-tech |
| 5 | 1000 | 216 | 10,4 | 1492,3 | 1513 | 0,99 | sim chuyến gd-tech |
<!--/khoi-->

- Sim này đọc thẳng phút và GTĐ một chuyến (trung bình, một người, gồm Driftlife) khi cột Bình của sim chuyến khớp thang hiện hành. Nguồn hiện tại: <!--v:nguon-chuyen-->sim chuyến gd-tech<!--/v-->. GTĐ nhân vào lượng nhặt và thu nhập tham chiếu. Phút dùng cho độ dài một ngày.
- Với thang túi và bình GDM chốt (log 54), chuyến không còn kết thúc quá sớm vì túi đầy. Cột Phút một chuyến khớp khung mục 9 (4 đến 6 phút ở chương 1, 10 đến 12 ở chương 5).

<!--khoi:tay-khoan-->
| Điểm | Tên | Dụng cụ | GTĐ mỗi giây tại chỗ | GTĐ mỗi giây gồm 6 giây đi | Giây đầy túi 80 Khối | GTĐ mỗi Khối |
|---|---|---|---|---|---|---|
| SLV-101 | Mảnh vỡ trôi | Tay | 0,69 | 0,14 | 608 | 1,10 |
| SLV-102 | Mạch quặng sắt | TOL-102 | 0,55 | 0,31 | 280 | 1,10 |
| SLV-103 | Khối băng trôi | TOL-102 | 0,57 | 0,31 | 260 | 1,00 |
| SLV-104 | Hòm kỹ thuật vỡ | TOL-102 | 0,83 | 0,42 | 310 | 1,61 |
| SLV-105 | Tấm vỏ lớn | TOL-102 | 0,43 | 0,30 | 267 | 1,00 |
<!--/khoi-->

- Nhặt tay so với khoan (bảng trên, gồm 6 giây đi giữa hai điểm `[GIẢ ĐỊNH]`): nhặt tay đầy túi chậm nhất, không còn lợi gấp 2,5 như trước bản 1b của gd-items.

### 8.7 Tiêu chí nghiệm thu (gd-qa kiểm)

- Chạy `python projects/game-moi/sim/economy/sim-kinh-te.py --ghi` trên bản sạch: `economy_doc.py kiem` ra 0 lỗi, file này không đổi so với bản đã nộp (cùng seed).
- `--selftest` in "selftest xanh": cùng seed cùng kết quả, kịch bản trung bình một người xong game, tệ chậm hơn trung bình chậm hơn tốt, bậc giá đúng thứ tự, K9 trong 1,2 tới 2 lần, khối giaThung của ca-cang.json khớp bảng giá.
- Mọi giá Tally trong mọi GDD khác trỏ về mục 3 của file này.
- Mọi mục 8.1 ghi Đạt, trừ dòng có điều kiện thì điều kiện đã được vai kia nhận.

Tiêu chí đo được khi có build:

| Feature | Category | Acceptance Criteria đo được | Nhãn |
|---|---|---|---|
| Tally là nguồn duy nhất | Kinh tế | Mọi event `tally_nhan` có nguồn là thùng, tip, bơm khí hoặc đơn đặt trước, không nguồn khác trong 100 phiên thử | MVP |
| Giá một thùng | Kinh tế | Giá hiển thị bằng cột Giá Tally một thùng ở bảng 3.1, giá kiện bằng thùng nhân 2,5 | MVP |
| Giá lồng sống | Kinh tế | Giá bằng bảng Lồng theo loài nhân hệ số sao, bảng tàu hiện "từ" giá loài rẻ nhất | MVP |
| Tip | Kinh tế | Tip bằng giá thùng x 30% x phần kiên nhẫn còn lại, Tàu vội và Tikko gọi đồ Trái Đất gấp đôi, bơm khí cộng 10 | MVP |
| Phần tip trong thu | Kinh tế | 20 đến 30% tổng Tally ca cảng trong cả phiên | MVP |
| Giá nâng cấp và Shop | Kinh tế | Bằng bảng 3.2, không đổi khi số người đổi từ 1 đến 4 kể cả giữa phiên (C8) | MVP |
| Điểm cảng | Tiến trình | Mỗi tàu xong cộng 1, cộng thêm 1 khi còn trên 2/3 kiên nhẫn, tàu rời không cộng | MVP |
| Qua chương 1 | Tiến trình | Chương 1 đóng khi mốc đóng chương của truyện xong và ENG-101 đã lắp vào động cơ (K25), không có cổng kinh tế riêng | MVP |
| ENG-101 | Tiến trình | Chỉ mua được khi Hạng cảng 3, ô ENG hiện "cần Hạng 3" khi chưa đủ | MVP |
| Thời lượng chương 1 | Tiến trình | Event `chuong_xong` chương 1 của 5 người chơi mới, trung bình trong 1,5 đến 2 giờ | MVP |
| Thời lượng cả game | Tiến trình | 12 đến 15 giờ trung bình, nhóm 4 bằng 60 đến 75% thời gian một mình tới hết game (log 69) | Sau MVP |
| Lập danh mục có tác động | Kinh tế | Event `danh_muc_lap`: ca có từ 3 thùng hàng chế, sống hoặc hiếm cho Tally mỗi tàu cao hơn ca chỉ hàng chợ từ 20% | MVP |
| Không mất Tally | Kinh tế | Ngạt, bị kéo về, thoát giữa chuyến không làm Tally giảm (K2) | MVP |
| Không có vòng tiền | Kinh tế | Tally một ca không vượt số tàu x giá thùng đắt nhất trong danh mục x 1,6 cộng phần đơn đặt trước và bơm khí | MVP |

## 9. Lệch khỏi tham chiếu (Dave the Diver)

| Phần | Dave làm thế nào | The Novent làm thế nào | Vì sao lệch |
|---|---|---|---|
| Đồng tiền | Gold từ quán sushi, thêm Bei cho trang bị | Một đồng Tally | K18, một bảng giá |
| Nguồn tiền | Doanh thu ca tối theo món, giá món tăng theo cấp món, tip theo độ hài lòng | Giá thùng cố định theo GTĐ và bậc giá, tip theo kiên nhẫn còn lại. Không có cấp món | Thùng nối thẳng với lượng nhặt, người chơi tính được. Thế cân nằm ở bậc giá thay cho nâng cấp món |
| Chọn thực đơn | Chọn món từ đồ bắt về, món đắt bán ít suất | Lập danh mục tối đa 4 loại hàng, hàng đắt ít tàu gọi | Cùng cấu trúc, lấy bậc giá và độ gọi làm trục cân |
| Nâng cấp | Mua bằng tiền, mở độ sâu và thời gian lặn | Tally cộng vật liệu, T-VO là cổng dải | P2: nâng cấp phải tiêu đồ mang về |
| Hạng quán | Cooksta theo like, mở nhân viên | Hạng cảng theo tàu phục vụ và kiên nhẫn, mở tàu và Shop | Cùng vai trò, gd-quan giữ luật |
| Thiếu tiền | Tiền có thể tụt vì chi phí vận hành | Không có chi phí duy trì (K17), Tally không giảm | Không phạt người nghỉ |

## 10. Câu hỏi mở

| Câu hỏi | Phương án đề xuất | Ai quyết |
|---|---|---|
| Chương 2 dài hơn giờ đặt ra <!--v:lech-ch2-->26%<!--/v--> | Giữ, tổng game trong mục tiêu. Muốn rút thì bớt 1 chuyến map nhánh chương 2 | GDM, gd-world |
| Nguồn RES-401 và RES-305 mỗi ngày có đủ cho khoảng 25 thùng CGO-411, CGO-511 một ca không | gd-world và gd-combat đo số RES mỗi chuyến chương 4, 5 | gd-world, gd-combat |
| Cảng cấp 2 KH07-C2 là gì | Đề xuất cửa neo thứ 4: sim ca cảng mục 3 cho thấy nhóm 3 và 4 người cần 4 cửa neo. Giá ở bảng 3.2 giữ tỉ lệ 0,2 | gd-quan |
| Số tàu và phút ca chương 2 tới 5 | Sim dùng số chương 1 (25, 50, 70, 70 tàu, 3,85 phút). Cần sim ca cảng của gd-tech cho tàu chương sau | gd-quan, gd-tech |
| Tally dư ở nhóm 3, 4 người (bảng 8.2) | Chấp nhận như chương 5, hoặc thêm sink tùy chọn cho nhóm đông khi Lead mở phạm vi | GDM |

## Số hiện hành đề xuất (GDM chép sang `so-hien-hanh.md`)

| Mục | Giá trị đề xuất | Nguồn |
|---|---|---|
| Tally mỗi GTĐ | 10 | GD-028 mục 2.1 |
| Đơn vị bán | 1 kiện = 2,5 thùng, lồng không chia | Lead chốt (D0) |
| Hệ số bậc giá | Chợ 0,75, sinh học 1,0, chế 1,35, sống 1,3, hiếm 1,5 | GD-055 mục 3.1 |
| Độ gọi | Chợ 3, sinh học 2, chế 1,5, sống 1, hiếm 1 | GD-055 mục 3.1 |
| Giá thùng chương 1 (MVP) | Phế liệu 42, cáp 40, quặng 40, băng 42, mô sinh học 54, nước tinh khiết 64, đồ Trái Đất 76, đặc sản Gần 80. Lồng Driftmoth 65, Skitter Ray 75, Sting Krill 55 | GD-055 mục 3.1 |
| Tip | Tip tối đa 30% giá thùng nhân phần kiên nhẫn còn lại, Tàu vội và Tikko gọi đồ Trái Đất gấp đôi, bơm khí cộng 10 | Lead chốt (K13) |
| Điểm cảng | 1 mỗi tàu xong, thêm 1 nếu còn trên 2/3 kiên nhẫn | Lead chốt |
| Ngưỡng điểm Hạng cảng 2 tới 8 | 70, 135, 285, 400, 560, 680, 910 | GD-055 mục 3.5, gd-quan đã nhận (luật 41) |
| Hệ số ngân sách β | 0,54 | GD-055 mục 3.3 |
| Giờ mục tiêu chương 1 tới 5 trong công thức | 1,25, 2,75, 3,5, 3,0, 1,5 | GDM chốt chương 1, log 55 |
| Túi và bình bậc 0 tới 4 | Túi 80, 100, 126, 168, 216. Bình 330, 450, 600, 780, 1000 | GDM chốt, log 54 |
| Tally một ca theo số người, kịch bản trung bình | <!--v:tally-ca-1-->1742<!--/v-->, <!--v:tally-ca-2-->3469<!--/v-->, <!--v:tally-ca-3-->4855<!--/v-->, <!--v:tally-ca-4-->4855<!--/v-->, bằng <!--v:moc-1-->59%<!--/v-->, <!--v:moc-2-->70%<!--/v-->, <!--v:moc-3-->75%<!--/v-->, <!--v:moc-4-->62%<!--/v--> hai chuyến đầy túi | GD-055 mục 8.4b |
| k(N) phần thêm mỗi người | 0,30 ở dải Gần, 0,25 ở Giữa, 0,38 ở Xa | gd-world, map.md 3.8 |
| ENG mở theo Hạng cảng | 3, 5, 7, 8 | GD-028 luật 11 |
| Đo được (trung bình, một người) | Chương 1 <!--v:gio-ch1-tb-->1,89<!--/v--> giờ, cả game <!--v:gio-game-tb-->13,8<!--/v--> giờ. Nhóm 4 xong game bằng <!--v:coop4-game-->72%<!--/v--> thời gian một mình. Tip chiếm <!--v:tip-tb-->25%<!--/v--> Tally ca | Sim GD-055 |

## Balance Sheet (lịch sử đổi số, tab Balance Sheet)

<!--khoi:balance-->
| Tham số | Nơi giữ | Cũ | Kết quả thử | Mới | Vai sửa |
|---|---|---|---|---|---|
| Hệ số tài nguyên co-op k(N), phần thêm mỗi người | map.md 3.8 (gd-world) | 0,13 | Nhóm 4 mỗi người nhặt 35% so với một mình (log 50). Sim GD-028 với 0,47: mỗi người 60%, nhóm 4 hết game bằng 57% thời gian một mình (trung bình) | 0,47 (gd-world đã đổi ở 1b, sim xác nhận) | Giữ |
| Điểm cảng mỗi đơn đủ | tram-va-cang.md mục 3 (gd-quan) | 2, thêm 1 khi nhanh, mọi số người | Điểm không theo quy mô đơn thì nhóm 4 hết game bằng 82% thời gian một mình, trượt mục tiêu 45 đến 60% | 2 và 1 nhân (N cộng 1) chia 2, làm tròn lên (gd-quan đã nhận) | gd-quan |
| Quy mô đơn một ca | tram-va-cang.md (gd-quan): 3 tàu, 1 đến 4 dòng, 2 kiện mỗi dòng gốc | Đơn đòi 146% (chương 1) tới 440% (chương 2) lượng nhặt một ngày | Hạng cảng chặn mọi chương, chương 2 và 3 kéo dài trên 6 giờ, Tally dư hàng chục lần | Giá trị đơn bằng 60% hai chuyến đầy túi (gd-quan đã nhận). Số kiện theo phương án B: kiện nhỏ hơn, khoảng 10 kiện mỗi ca một người | gd-quan, gd-items |
| Ngưỡng điểm Hạng cảng 2 tới 8 | tram-va-cang.md mục 3 (gd-quan) | 8, 20, 36, 56, 80, 108, 140, rồi 18, 45, 85, 130, 185, 245, 310 sau sim ca cảng GD-030 | Bản sau đặt theo ca đủ hàng (8,5 điểm một ca) nên chương 1 kéo tới 2,9 giờ vì cảng mở muộn và kho chưa đủ hàng | 10, 20, 45, 70, 100, 135, 195 (gd-quan đã nhận) | gd-quan |
| Vật liệu sửa khoang chương 1 | vat-pham.md mục 2.7 (gd-items) | 145 GTĐ | Vòng 3 thử nhân 0,7: chương 1 xuống 1,9 giờ. Sau khi đổi ngưỡng Hạng cảng thì chương 1 vào mục tiêu mà không cần | 145 GTĐ, không đổi | Giữ |
| Đơn vị quy đổi GTĐ sang Tally | chưa có | - | Cần một đơn vị để Shop là bảng giá duy nhất | 10 Tally mỗi GTĐ | gd-economy |
| Giá Tally theo chương | chưa có | Vòng 1: B1 600 nhân 2,4 mũ (chương trừ 1) | Tally dư 30 đến 100 lần chi, Hạng cảng chặn, cả game 22 giờ | Vòng 3: ngân sách chương bằng β nhân ngày mục tiêu nhân thu nhập tham chiếu một ngày, β 0,40 | gd-economy |
| Lưới cuộn mỗi mẻ RCP-132, mở ở | vat-pham.md (gd-items) | 2 mỗi mẻ, chương 2 | Bắt bằng lưới lỗ so với hạ khi trúng 1 con | 4 mỗi mẻ, chương 1 (gd-items, 1b), rồi 10 mỗi mẻ (gd-items, sau QA). Sim xác nhận ròng 1,28 lần trở lên | Giữ |
| Thưởng đủ đơn, thưởng nhanh | tram-va-cang.md (gd-quan) | 25%, 15% | Không thấy vấn đề | 25%, 15%, rồi bỏ từ đợt 9 (Lead chốt ca cảng khung Dave), thay bằng tip | Giữ |
| Giờ mục tiêu chương 1 trong công thức ngân sách | GD-028 | 1,75 | Sau khi dùng lượng nhặt của sim chuyến gd-tech (có Driftlife, cao hơn 1,4 đến 2 lần), chương 1 dài 2,24 giờ với β 0,40 | 1,5, chương 1 đo được trong 1,5 đến 2 giờ | gd-economy |
| Túi và bình bậc 0 tới 4 | nguoi-choi.md (gd-character), map.md (gd-world) | Túi 20, 30, 42, 56, 72. Bình 300, 400, 520, 650, 800 | Chuyến kết thúc vì đầy túi sau 1,5 phút ở chương 1 (sim GD-030) | Túi 80, 100, 126, 168, 216. Bình 330, 450, 600, 780, 1000 (GDM chốt, log 54) | gd-character, gd-world |
| Hệ số ngân sách β và giờ mục tiêu chương 1 trong công thức | GD-028 | 0,40 và 1,5 | Thang túi mới làm thu nhập một chuyến tăng 3 đến 4 lần, cả game còn 9,5 giờ với β 0,40 | 0,60 và 1,25 (GDM chốt, log 55) | gd-economy |
| Hệ số k(N), phần thêm mỗi người | map.md 3.8 (gd-world) | 0,47 mọi dải | Với thang túi mới, Oxy là giới hạn từ chương 2, mỗi người nhóm 4 nhặt 73 đến 91%, nhóm 4 hết chương 1 ở 31%, chương 2 ở 29% | 0,30 ở Gần, 0,25 ở Giữa, 0,38 ở Xa (gd-world, sau QA GD-026) | gd-world |
| Hệ số ngân sách β | GD-028 | 0,60 (GDM chốt, log 55) | Sau sửa QA GD-031 (cảng mở ngày 4, T-VO 1 sang chương 2, giá theo ID gd-items, chặn sức chở ca cảng, sàn ngày truyện, kiện chương 4 và 5): giữ 0,60 thì chương 1 2,33 giờ, cả game 18,9 giờ (gd-qa đo) | 0,40, cả game trong 12 đến 15 giờ (bảng 8.1). GDM nhận lại ở log 70 | gd-economy |
| Ngày mở ca cảng chương 1 trong sim | GD-028 | Ngày đầu đủ vật liệu 5 khoang (thường ngày 1) | QA GD-031: trái chuỗi vớt Thông dịch viên | Từ ngày 4 (tram-va-cang.md, mốc C1.8) | gd-economy |
| T-VO là cổng chương | GD-028 | T-VO bậc c chặn qua chương c, vật liệu 25, 45, 81 | QA GD-031: trái vat-pham.md (UPG-ENV-1 mở chương 2, vật liệu 48,1 / 90,6 / 126,6) | Không chặn chương, mua đầu chương mở nó, vật liệu theo bảng UPG | gd-economy |
| Sàn ngày truyện mỗi chương trong sim | cot-truyen.md mục 5 (gd-story) | Không có, chỉ đếm đêm chờ người vớt | QA GD-031 lỗi 4, 5 của truyện: nhóm xong chương 1 ở ngày 2 đến 4, dưới sàn 6 | 7, 5, 8, 3, 3 ngày (gd-story bản cuối sau QA vòng 2) | gd-story |
| GTĐ một kiện | vat-pham.md (gd-items) | Chương 1 khoảng 2,5 | Đơn một ca cần 54 kiện, ca chở khoảng 10 | Chương 1 khoảng 13,4, chương 2 khoảng 41, chương 3 khoảng 102 (gd-items đã đổi). Chương 4 và 5 chưa có kiện riêng | gd-items |
| Thu một ca trong sim | GD-028 | Theo đơn, không chặn sức chở | QA GD-031 lỗi chặn | Chặn bằng số kiện sim ca cảng giao được nhân GTĐ một kiện. β dò lại 0,30, rồi 0,35 (sàn chương 5 còn 3 ngày), rồi 0,40 (có kiện chương 4 và 5) | gd-economy |
| Kiện chương 4 và 5 | vat-pham.md (gd-items) | Dùng kiện dải Xa, khoảng 102 GTĐ | Đơn chương 4, 5 cần khoảng 150 và 199 GTĐ mỗi kiện, chương 4 kéo dài | CGO-411 161,0 và CGO-511 193,2 GTĐ (gd-items thêm) | gd-items |
| Mục tiêu nhóm 4 so với một mình, hết game | khung mục 9 (GDM) | 45 đến 60% | Sàn ngày truyện 26 ngày không đổi theo số người, đo được 72% | 60 đến 75%, giữ sàn ngày truyện (GDM, log 69) | GDM |
| Mục tiêu sống so với hạ | khung mục 9 (GDM) | 1,5 đến 2 lần | Lưới trúng 1 con của loài rẻ cho 1,28 lần | 1,2 đến 2 lần cho cỡ S và M, sau khi trừ vật tiêu hao (khung sửa lần 5) | GDM |
| Đơn vị bán ở ca cảng và giá | kinh-te-tien-trinh.md mục 3.1 (gd-economy) | Giá kiện bằng GTĐ x 10, một thùng bằng giá kiện chia 2,5: thùng chương 1 từ 48 tới 56 Tally | Sim ca cảng GD-054: giữ hàng cho đơn đặt trước chỉ chênh dưới 2,5% Tally, lập danh mục không có thế cân | Giá thùng theo 5 bậc giá: chợ 0,75, sinh học 1,0, chế 1,35, sống 1,3, hiếm 1,5. Thùng chương 1 từ 40 tới 80 Tally, lồng 55 tới 75 | gd-economy |
| Thưởng theo đơn | tram-va-cang.md (gd-quan), kinh-te-tien-trinh.md | Thưởng đủ đơn 25%, thưởng nhanh 15% | Lead chốt ca cảng khung Dave 2026-11-20, bỏ đơn nhiều dòng | Tip tối đa 30% giá thùng nhân kiên nhẫn còn lại, Tàu vội gấp đôi, Tikko gọi đồ Trái Đất gấp đôi, bơm khí cộng 10. Sim đo tip 22 tới 26% Tally | Lead |
| Điểm cảng | tram-va-cang.md (gd-quan) | 2 mỗi đơn đủ, thêm 1 khi nhanh, nhân (N cộng 1) chia 2 | Luật mới không còn đơn | 1 mỗi tàu phục vụ xong, thêm 1 nếu còn trên 2/3 kiên nhẫn. Một ca một người tới 50 điểm, nhóm 3 và 4 người tới 140 | Lead |
| Ngưỡng điểm Hạng cảng 2 tới 8 | tram-va-cang.md mục 3 (gd-quan) | 10, 20, 45, 70, 100, 135, 195 | Điểm mới gấp 7 tới 8 lần mỗi ca, ngưỡng cũ thì Hạng không còn chặn ENG | 70, 135, 285, 400, 560, 680, 910, giữ ngày đủ điểm của bản trước (5, 7, 13, 16, 20, 24, 31). Chờ gd-quan nhận | gd-economy |
| Hệ số ngân sách β | GD-028 | 0,40 | Ca khung Dave bán gần đủ 25 thùng mỗi ca và có tip: giữ 0,40 thì cả game 11,0 giờ | 0,54, cả game trung bình 13,8 giờ, nhóm 4 bằng 72% thời gian một mình | gd-economy |
<!--/khoi-->

## Điểm tự quyết

| # | Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|---|
| 1 | Đơn vị quy đổi | 10 Tally mỗi GTĐ | Số tròn, dễ đọc, nhân với hệ số bậc ra giá thùng | Quy đổi một đổi một (giá lẻ thập phân) | Rẻ |
| 2 | Cách đặt giá Tally | Ngân sách chương neo thu nhập tham chiếu và ngày mục tiêu, một núm β | Mật độ dải Xa gấp <!--v:xa-gan-->6,7<!--/v--> dải Gần, giá mũ một hệ số làm Tally dư hàng chục lần (vòng 1) | Giá gốc nhân hệ số mũ theo chương | Rẻ |
| 3 | Giá thùng theo Hạng cảng | Không nhân | Hạng đã mở tàu và Shop, nhân thêm là vòng dương kép | Cộng 4% mỗi hạng | Rẻ |
| 4 | Nguồn Tally | Chỉ ca cảng | K18. Tally từ quest làm người bỏ ca vẫn tiến | Tally từ quest người vớt | Rẻ |
| 5 | Cổng chương | Sửa khoang, ENG, chuyến map nhánh, sàn ngày truyện. T-VO không chặn chương | Khớp `vat-pham.md` (UPG-ENV-1 mở ở chương 2) và K6 (thiếu cấp vẫn vào được, chỉ đắt) | T-VO là cổng chương, bắt mua mọi nâng cấp | Vừa |
| 6 | ENG mở theo Hạng | 3, 5, 7, 8 (hạng trần của chương) | gd-quan đã ghi hạng 3 và hạng 8, điền hai hạng giữa theo trần chương | Mở theo chương, không theo Hạng | Rẻ |
| 7 | Giờ từng chương | 1,25, 2,75, 3,5, 3,0, 1,5 | Khung chỉ đặt chương 1 và tổng. Chương 3 dài nhất vì dải Xa, sự cố và nhiều tàu. Chương 5 ngắn vì chỉ còn truyện | Chia đều | Rẻ |
| 8 | Độ dài một ngày | 2 chuyến cộng phút ca cảng của gd-tech cộng 3 phút, co-op thêm 5% mỗi người | Khớp khung mục 4 và mục 9 | Không tính thời gian chờ co-op | Rẻ |
| 9 | Ba kịch bản | Bảng 3.4, ca cảng theo trễ phản xạ 3, 2, 1 giây của sim gd-tech | Tệ là người mới hay ngạt, giao chậm, không chuẩn bị danh mục. Tốt là người tối ưu | Chỉ một kịch bản | Rẻ |
| 10 | Bộ đồ | Dùng 5 trục của `nguoi-choi.md` (T-OXY, T-VO, T-DAY, T-TUI, T-DUNGCU), vật liệu theo công thức gd-items | Chọn bộ của chủ hệ thống bộ đồ | Bộ UPG của gd-items | Rẻ |
| 11 | Xưởng cấp 2 | Chương 2 | Bậc 2 bộ đồ là chương 2 | Chương 1 | Rẻ |
| 12 | Hàng mang sang chương mới | Giữ 30% giá trị | Hàng dải cũ vẫn bán được nhưng tàu ít gọi | Giữ 100% | Rẻ |
| 13 | Giãn giá thùng | 5 bậc giá theo vai của món trong dải, hệ số 0,75 tới 1,5, độ gọi ngược với giá | Giá sát nhau thì lập danh mục không có thế cân (sim GD-054 chênh dưới 13%). Bậc theo vai giữ một quy tắc cho cả 5 dải, không chỉnh từng món | Hệ số riêng từng món, hoặc giá theo độ hiếm của gd-items | Rẻ |
| 14 | Hàng sống 1,3 thấp hơn hàng hiếm 1,5 | Giữ K9 trong 1,2 tới 2 lần hạ | Đặc sản rơi khi hạ đã ở bậc hiếm. Sống 1,5 thì Sting Krill bắt tay lên 2,24 lần, vượt trần | Sống 1,5 | Rẻ |
| 15 | Ngưỡng Hạng | Giữ ngày đủ điểm của bản trước đợt 9 | Nhịp mở theo chương đã được duyệt, đổi nguồn điểm không phải lý do đổi nhịp | Đặt lại theo 70% điểm tới ngày mục tiêu như vòng 3 | Rẻ |
| 16 | Chỉ số giá mỗi kịch bản | Danh mục đại diện chương 1, áp cho mọi chương | Sim mức giá trị không theo từng loại hàng. Chương sau giữ cùng tỉ lệ bậc | Theo dõi kho từng loại hàng | Vừa |

## Phản biện khung

| # | Điểm | Vấn đề | Bằng chứng | Phương án |
|---|---|---|---|---|
| 1 | Mục tiêu khung mục 9 "Tally từ ca cảng trên 80%" | Luôn đạt 100% vì K18 | Bảng 8.2 | Đã thay bằng mục tiêu tip 20 đến 30% (khung mục 9 đợt 9) |
| 2 | Hai mục tiêu co-op (60 đến 75% thời gian, từ 60% mỗi người) | Chỉ cùng đạt khi điểm cảng tăng theo số người | Bảng 6b | Đã đạt tự nhiên vì số tàu tăng theo số người (C8) và điểm tính trên mỗi tàu |
| 3 | K19 sink của Tally | Chương 5 và nhóm 3, 4 người không còn sink, Tally dư | Bảng 8.2 | GDM chấp nhận Tally dư ở chương 5. Nhóm đông dư hơn nửa thu, nêu lại ở mục 10 |
| 4 | Độ gọi chỉ có tác dụng khi bày thừa | Luật D3, D8: tàu chỉ gọi món còn trong danh mục. Người chơi bày đúng 25 thùng thì mọi thùng đều bán, độ gọi không đổi gì. Thế cân thật nằm ở bậc giá và kho (giữ hàng chợ để xây) | Bảng kiểu danh mục mục 3.1: bày thừa chỉ kém 5% | gd-quan đã có cơ chế này cho TA05, TA09 (danh mục không có nhóm hàng của tàu thì tàu không tới), nhưng chỉ từ chương 2. Đề xuất cho gd-quan (luật, không tự đổi): đưa vào chương 1, ví dụ Tàu vội chỉ tới khi danh mục có băng hoặc khoáng. Khi đó bỏ hàng chợ khỏi danh mục là mất tàu thật, "hàng đắt ít tàu gọi" thành quyết định thật |

## Bàn giao

| Vai | Việc | Đọc |
|---|---|---|
| gd-quan | Nhận ngưỡng Hạng 2 tới 8 (70, 135, 285, 400, 560, 680, 910) vào luật 41 của `tram-va-cang.md`. Luật 24: trọng số chọn món bằng độ gọi của bậc giá nhân hàng hay gọi của bảng 2.4. Luật 30 giữ (giá kiện chia 2,5 ra đúng giá thùng). Chốt cảng cấp 2 là cửa neo thứ 4. Xem phản biện 4 | Mục 2.1, 3.1, 3.5 |
| gd-tech | Nối khối giaThung của `tools/tham-so/ca-cang.json` vào `sim-ca-cang.mjs` (giá thùng thay cho giá kiện chia 2,5, lồng theo loài, thêm mô sinh học và đặc sản), chạy lại mục 5 so với bảng kiểu danh mục. Sửa phép kiểm `selftest.mjs` dòng 111 (giá thùng mới: đồ Trái Đất 76, phế liệu 42). Sim ca cảng cho tàu chương 2 tới 5 | Mục 3.1, 6, 10 |
| gd-ux | Màn lập danh mục hiện giá thùng và độ gọi, bảng kết ca tách giá và tip | Mục 7 |
| gd-items | Không có việc mới. Giá thùng đọc GTĐ ở bảng 2.6b | Mục 3.1 |

## Phụ lục

### Tally theo ngày, kịch bản trung bình, một người (một lượt, seed 20261120)

<!--khoi:tally-ngay-->
| Ngày | Chương | Nhặt cả ngày (GTĐ) | Thùng bán ở ca | Tally thu ở ca cảng | Tally còn cuối ngày | Điểm cảng cộng dồn | Hạng cảng | Giờ chơi cộng dồn |
|---|---|---|---|---|---|---|---|---|
| 1 | 1 | 153 | 0,0 | 0 | 0 | 0 | 1 | 0,20 |
| 2 | 1 | 153 | 0,0 | 0 | 0 | 0 | 1 | 0,39 |
| 3 | 1 | 10 | 0,0 | 0 | 0 | 0 | 1 | 0,59 |
| 4 | 1 | 107 | 25,0 | 1742 | 392 | 44 | 1 | 0,85 |
| 5 | 1 | 107 | 19,9 | 1383 | 25 | 79 | 2 | 1,10 |
| 6 | 1 | 255 | 25,0 | 1742 | 426 | 123 | 2 | 1,36 |
| 7 | 1 | 255 | 25,0 | 1742 | 1628 | 167 | 3 | 1,62 |
| 8 | 1 | 255 | 25,0 | 1742 | 669 | 211 | 3 | 1,88 |
| 9 | 2 | 189 | 2,8 | 609 | 1279 | 216 | 3 | 2,12 |
| 10 | 2 | 259 | 10,5 | 2264 | 443 | 234 | 3 | 2,38 |
| 11 | 2 | 259 | 11,1 | 2381 | 1274 | 254 | 3 | 2,63 |
| 12 | 2 | 339 | 15,1 | 3256 | 930 | 281 | 3 | 2,90 |
| 13 | 2 | 339 | 16,8 | 3606 | 386 | 310 | 4 | 3,18 |
| 14 | 2 | 189 | 12,2 | 2628 | 3014 | 332 | 4 | 3,44 |
| 15 | 2 | 189 | 11,8 | 2528 | 393 | 352 | 4 | 3,70 |
| 16 | 2 | 478 | 20,3 | 4355 | 598 | 388 | 4 | 3,98 |
| 17 | 2 | 478 | 25,0 | 5375 | 823 | 432 | 5 | 4,27 |
| 18 | 2 | 478 | 25,0 | 5375 | 3098 | 476 | 5 | 4,57 |
| 19 | 2 | 259 | 20,7 | 4453 | 1351 | 512 | 5 | 4,85 |
| 20 | 2 | 823 | 25,0 | 5375 | 6726 | 556 | 5 | 5,14 |
| 21 | 2 | 431 | 25,0 | 5375 | 1801 | 600 | 5 | 5,44 |
| 22 | 3 | 664 | 8,5 | 4542 | 6343 | 615 | 6 | 5,73 |
| 23 | 3 | 664 | 13,1 | 6996 | 689 | 639 | 6 | 6,03 |
| 24 | 3 | 867 | 16,8 | 8968 | 9657 | 668 | 6 | 6,34 |
| 25 | 3 | 867 | 19,4 | 10345 | 1901 | 702 | 7 | 6,65 |
| 26 | 3 | 93 | 8,0 | 4283 | 6184 | 716 | 7 | 6,94 |
| 27 | 3 | 1191 | 20,6 | 11000 | 6334 | 753 | 7 | 7,26 |
| 28 | 3 | 642 | 17,7 | 9406 | 4890 | 784 | 7 | 7,57 |
| 29 | 3 | 1191 | 24,5 | 13049 | 17938 | 827 | 7 | 7,90 |
| 30 | 3 | 642 | 19,2 | 10225 | 6464 | 861 | 7 | 8,22 |
| 31 | 3 | 1615 | 25,0 | 13319 | 1682 | 905 | 7 | 8,55 |
| 32 | 3 | 1113 | 25,0 | 13319 | 15001 | 949 | 7 | 8,88 |
| 33 | 3 | 1113 | 25,0 | 13319 | 28320 | 993 | 7 | 9,21 |
| 34 | 3 | 93 | 17,8 | 9471 | 1591 | 1024 | 7 | 9,52 |
| 35 | 4 | 707 | 7,2 | 6053 | 7644 | 1037 | 8 | 9,87 |
| 36 | 4 | 707 | 9,5 | 7931 | 15575 | 1053 | 8 | 10,21 |
| 37 | 4 | 990 | 13,0 | 10892 | 3867 | 1076 | 8 | 10,57 |
| 38 | 4 | 1312 | 16,2 | 13546 | 17413 | 1105 | 8 | 10,93 |
| 39 | 4 | 1720 | 22,5 | 18834 | 9097 | 1144 | 8 | 11,32 |
| 40 | 4 | 2332 | 25,0 | 20924 | 7422 | 1188 | 8 | 11,70 |
| 41 | 4 | 1548 | 25,0 | 20924 | 10246 | 1232 | 8 | 12,09 |
| 42 | 4 | 2975 | 25,0 | 20924 | 31170 | 1276 | 8 | 12,48 |
| 43 | 4 | 2975 | 25,0 | 20924 | 6895 | 1320 | 8 | 12,87 |
| 44 | 5 | 2324 | 25,0 | 25109 | 32004 | 1364 | 8 | 13,33 |
| 45 | 5 | 2324 | 25,0 | 25109 | 57113 | 1408 | 8 | 13,79 |
| 46 | 5 | 2324 | 25,0 | 25109 | 82222 | 1452 | 8 | 14,25 |
<!--/khoi-->

### Sức mạnh theo chương (đầu vào cho PROCESSING)

<!--khoi:suc-manh-->
| Chương | Dải | Oxy (bậc theo chương) | Túi (Khối) | GTĐ một chuyến (gồm Driftlife) | Quy ra Tally | Ngân sách Tally của chương | Phút ra ngoài một ngày |
|---|---|---|---|---|---|---|---|
| 1 | Gần | 330 | 80 | 102 | 1021 | 7650 | 8,8 |
| 2 | Giữa | 450 | 100 | 319 | 3186 | 46450 | 10,8 |
| 3 | Xa | 600 | 126 | 779 | 7788 | 128500 | 13,0 |
| 4 | Xa | 780 | 168 | 1124 | 11235 | 135650 | 16,4 |
| 5 | Xa | 1000 | 216 | 1492 | 14923 | - | 20,8 |
<!--/khoi-->

### PROCESSING (tab Sheet, theo chương)

- Số túi và Oxy từng bậc ở bảng Sức mạnh theo chương ngay trên (do sim in), cột Sức mạnh tăng dưới đây chỉ ghi bậc lên theo bảng 3.2.

| Chương | Người chơi học gì | Mở tài nguyên | Mở map | Mở trang bị | Mở Driftlife | Sức mạnh tăng | Ý đồ |
|---|---|---|---|---|---|---|---|
| 1 | Bay, Oxy, nhặt, khoan, nạy, hạ, bắt sống loài nhỏ, sửa khoang, lập danh mục, ca cảng, mua nâng cấp đầu tiên | Tài nguyên dải Gần | Dải Gần, Station Cinder | Dùi xung, Súng lưới, Bộ kích nguồn, bậc 1 bộ đồ | 4 loài Gần, BS-1 | T-TUI và T-OXY lên bậc 1, T-DAY bậc 1, thêm ô dụng cụ (quest) | Dạy trọn vòng lặp trong 2 giờ |
| 2 | Nuôi, bắt loài lớn, nghiên cứu, Skiff | Tài nguyên dải Giữa | Dải Giữa, Wick, Lantern | Súng gây mê, Phao kéo, Kim sinh thiết, Lồng mẫu, bậc 2 | Loài Giữa, BS-2 | T-TUI, T-OXY, T-DAY lên bậc 2, T-VO bậc 1, thêm ô dụng cụ | Nhịp chậm lại, trạm lớn lên rõ |
| 3 | Sự cố trong ca, kẻ địch có vũ khí, nhiều bến | Tài nguyên dải Xa | Dải Xa, Flint, Veyl Waypost | Máy quét xung, bậc 3 | Loài Xa, The Wardens, BS-3 | T-TUI, T-OXY, T-DAY lên bậc 3, T-VO bậc 2 | Chương dài nhất, giữa game |
| 4 | Map nhánh lớn nhiều chuyến | Linh kiện Cradle | Cradle Interior | Máy cắt thân tàu, bậc 4 | BS-4 | T-TUI, T-OXY lên bậc 4, T-VO bậc 3 | Lộ sự thật, chuẩn bị trận cuối |
| 5 | Trận cuối nhiều chuyến | Linh kiện Warden | Warden Rig | Không | BS-5 | Không thêm | Kết, Tally không còn vai trò |

## Lịch sử thay đổi

| Ngày | Thay đổi | Lý do | Ai |
|---|---|---|---|
| 2026-11-20 | Tạo bản đủ, sim 3 vòng | GD-028 | gd-economy |
| 2026-11-20 | Đợt 9 GD-055, ca cảng khung Dave: bán theo thùng, giá thùng 5 bậc (40 tới 80 Tally ở chương 1), độ gọi, tip thay thưởng theo đơn, điểm cảng mỗi tàu, ngưỡng Hạng 70 tới 910 giữ ngày đủ điểm cũ, β 0,54, 1 tới 4 người, bảng kiểu danh mục đo bằng mô hình ca của gd-tech, K9 tính bằng Tally, bỏ mục quy mô đơn và thang túi cũ | Lead chốt ca cảng khung Dave, brief đợt 9 | gd-economy |
| 2026-11-20 | Đợt 4: β 0,40 (log 70), mục tiêu nhóm 4 là 60 đến 75% (log 69), luật 12 theo K25, mục tiêu sống so với hạ 1,2 đến 2 lần, bỏ hai câu hỏi đã chốt | GDM | gd-economy |
| 2026-11-20 | QA GD-031 vòng 2 ĐẠT, sửa 7 lỗi nhẹ: chạy lại theo sim chuyến mới, hàng β và hàng kiện trùng ở Balance Sheet, điểm tự quyết 5 | gd-qa | gd-economy |
| 2026-11-20 | Sàn ngày truyện bản cuối 7, 5, 8, 3, 3 (gd-story sau QA vòng 2). Phương án hạ sàn còn 6, 4, 6, 3, 3 | gd-story | gd-economy |
| 2026-11-20 | Bảng PROCESSING bỏ số túi và Oxy thang cũ, trỏ về bảng Sức mạnh. a dải Gần 0,30 (gd-world) | QA GD-031 lỗi 7, gd-world | gd-economy |
| 2026-11-20 | gd-items thêm kiện chương 4 (CGO-411) và 5 (CGO-511). β 0,40 | gd-items | gd-economy |
| 2026-11-20 | Sàn ngày truyện chương 5 đổi 4 thành 3 (gd-story đính chính). Thêm số đo khi hạ sàn còn 21 ngày | gd-story | gd-economy |
| 2026-11-20 | gd-items đổi cỡ kiện chương 1 tới 3. Sim luôn chặn thu một ca theo sức chở ca cảng, β 0,30 | gd-items, QA GD-031 | gd-economy |
| 2026-11-20 | Đổi sang ID khoang chính của gd-quan (KH07-C2, KH05-C2, KHxx-C3) | gd-quan | gd-economy |
| 2026-11-20 | Thêm sàn ngày truyện của gd-story vào điều kiện qua chương. Luật lồng con nuôi (M5 của gd-items). Đọc vat-pham.md mới | gd-story, gd-items | gd-economy |
| 2026-11-20 | Sửa theo QA GD-031 vòng 1: cảng mở ngày 4, T-VO không chặn chương, bảng 3.2 dựng từ bảng UPG của gd-items theo ID, bỏ UPG-PRY, đủ BPR-103, 105, 106, bỏ hệ số tàu không nguồn, công thức chia 0,9, số cứng vào tham số, đọc sim ca cảng mới, cỡ kiện là lỗi chặn chờ gd-items, β 0,45, thêm tiêu chí đo được và đoạn vòng tiền, đánh lại số mục 8 | gd-qa GD-031 | gd-economy |
| 2026-11-20 | Sửa theo QA GD-031 qua gd-quan: bảng 3.5 chỉ còn ngưỡng đã nhận và sim dùng đúng số đó, thêm giá lồng sống theo loài, ghi cách tính thưởng | QA lỗi 18, 27 | gd-economy |
| 2026-11-20 | Chạy lại theo sim chuyến 04:11 (k(N) theo dải lần cuối). Thêm độ dài một ngày theo khung mục 9 sửa lần 4, ghi nguồn K22, K23 | GDM | gd-economy |
| 2026-11-20 | Đọc tỉ lệ mỗi người theo số người từ sim chuyến gd-tech. k(N) theo dải của gd-world | Tin gd-tech, gd-world | gd-economy |
| 2026-11-20 | Đợt 2b: áp thang túi và bình GDM chốt, β 0,60, giờ mục tiêu chương 1 là 1,25. Đọc phút và GTĐ chuyến từ sim chuyến gd-tech theo cột Bình. Thay mục tiêu Tally từ ca cảng bằng mục tiêu thưởng 15 đến 25% | GDM log 54 tới 57 | gd-economy |
| 2026-11-20 | gd-quan tách hệ số kiện co-op: 0,6 ở chương 1 và 2, 0,4 ở chương 3 tới 5. Sim dùng đúng bảng này | Tin của gd-quan | gd-economy |
| 2026-11-20 | Quy mô đơn co-op của gd-quan đổi 0,4 lên 0,6 mỗi người thêm. Nhóm 4 xong game đổi 2 điểm (số lúc đó, số hiện hành ở mục 6b). Đọc cột vật tiêu hao mới của SPECIES | Tin của gd-quan, gd-items | gd-economy |
| 2026-11-20 | gd-quan nhận ngưỡng Hạng, điểm theo quy mô đơn, ENG theo Hạng. Quy mô đơn theo phương án B | Trả lời của gd-quan | gd-economy |
| 2026-11-20 | Chạy lại với vat-pham.md mới (Lưới cuộn 10 mỗi mẻ, cổng sống trên hạ). Thêm mục 8.6 thử trước túi nhân 3 | gd-items và gd-combat sửa ở 1b, gd-world đề xuất túi | gd-economy |
