# GDD hệ thống: Kinh tế và tiến trình

- Project: game-moi (EMBER) | Chủ sở hữu: gd-economy | Trạng thái: nháp bản đủ, chờ gd-qa (GD-028, 2026-11-20) | Nguồn quyết định: `../00-khung-game.md` K15, K18 đến K21, C3, C4, C8, mục 9, `../../log-gdm-tu-quyet.md` dòng 40, 50, 53

Mọi bảng số giữa dấu `<!--khoi:...-->` và mọi số giữa dấu `<!--v:...-->` do sim in, không sửa tay. Một lệnh in lại tất cả:
`python projects/game-moi/sim/economy/sim-kinh-te.py --ghi` (chạy sim, ghi bảng vào file này, rồi chạy cổng kiểm `economy_doc.py kiem`). Tham số ở `projects/game-moi/sim/economy/tham-so.json`. Tự kiểm: `--selftest`. Dò núm gap: `--do`.

## Tóm tắt

- Hệ thống này đặt giá cho mọi thứ trao đổi bằng Tally, quyết nhịp mở khóa theo chương và đo bằng sim rằng game đạt mục tiêu thời lượng của khung với 1, 2, 4 người. Tầng: lõi. Ưu tiên: bản đầu (MVP chương 1), số cho cả 5 chương. Phụ thuộc chính: GTĐ của gd-items (`vat-pham.md`), ca cảng và Hạng cảng của gd-quan (`tram-va-cang.md`), bậc bộ đồ của gd-character (`nguoi-choi.md`), nhịp chuyến và k(N) của gd-world (`map.md`).

## Hiện hành

| Mục | Giá trị | Nhãn |
|---|---|---|
| Đồng tiền | Tally duy nhất, chỉ đến từ ca cảng (K18) | MVP |
| Quy đổi | 10 Tally mỗi GTĐ. Giá một kiện bằng GTĐ của kiện nhân 10, làm tròn | MVP |
| Thưởng | Thưởng đủ đơn 25% tổng giá đơn, Thưởng nhanh 15% (khởi điểm của gd-quan, sim giữ nguyên) | MVP |
| Giá Tally của nâng cấp, ENG, Shop | Ngân sách chương chia theo tỉ lệ. Ngân sách chương bằng β nhân ngày mục tiêu nhân thu nhập tham chiếu một ngày, hệ số ngân sách β bằng <!--v:beta-->0,40<!--/v--> | MVP |
| Thời lượng đo được, trung bình, một người | Chương 1 <!--v:gio-ch1-tb-->1,83<!--/v--> giờ, cả game <!--v:gio-game-tb-->13,4<!--/v--> giờ (mục tiêu 1,5 đến 2 và 12 đến 15) | MVP |
| Co-op | k(N) bằng 1 cộng a nhân (N trừ 1), a bằng <!--v:kc-->0,30 ở dải Gần, 0,25 ở Giữa, 0,38 ở Xa<!--/v--> (gd-world). Nhóm 4 tới hết game bằng <!--v:coop4-game-->73%<!--/v--> thời gian một mình, trong mục tiêu 60 đến 75% (GDM, log 69) | MVP 2 người |
| Đề xuất gửi vai khác | Quy mô đơn theo túi đồ, điểm cảng theo quy mô đơn, ngưỡng Hạng cảng theo công thức mục 3.5 (gd-quan). gd-combat đã nhận: Lồng mẫu giữ 1 con khi ngạt | |
| Túi và bình | Túi 80, 100, 126, 168, 216 Khối, bình 330, 450, 600, 780, 1000 (GDM chốt, log 54). Phút và GTĐ một chuyến đọc từ sim chuyến gd-tech (mục 8.5) | MVP bậc 0 và 1 |

## 1. Mục đích với người chơi

- Người chơi cảm thấy: mỗi ca cảng là ngày lương, mỗi nâng cấp mua về làm chuyến sau khác đi thấy rõ (túi to hơn, Oxy dài hơn, vào được dải mới). Tally không bao giờ thành số vô nghĩa trước chương 5.
- Quyết định chính: đem hàng trong kho đi sửa trạm hay đóng kiện bán (P2), mua nâng cấp nào trước, giao đủ đơn để lên Hạng cảng hay giao lẻ để lấy Tally nhanh.
- Pillar: P2 (mọi thứ mang về có hai chỗ tiêu nhìn thấy được: trạm và cảng), P1 (giữ 1 món khi ngạt là mất thật, đo ở mục 8), P3 (một mình vẫn xong game trong 12 đến 15 giờ, có bạn thì nhanh hơn mà không ai nghèo).
- 30 giây đầu của ca cảng đầu tiên: kiện phế liệu đầu tiên lên tàu, số Tally nhảy lên <!--v:gia-cgo101-->140<!--/v-->. Cuối ngày đó người chơi mở Xưởng thấy T-TUI bậc 1 giá <!--v:gia-tui1-->1000<!--/v--> Tally cộng 25 GTĐ vật liệu, biết phải để dành Tally qua vài ca cảng.

## 2. Luật

### 2.1 Tally và quy đổi
1. Tally là đồng tiền duy nhất, dùng chung cả nhóm (K18, C3). `MVP`
2. Nguồn Tally duy nhất là ca cảng: giá từng kiện bốc lên tàu, thưởng đủ đơn, thưởng nhanh (K13, `tram-va-cang.md` luật 30, 31). Không có Tally từ quest, hòm, bán ở shop. `MVP`
3. Giá một kiện bằng GTĐ của kiện (cột GTĐ của gd-items) nhân 10 Tally mỗi GTĐ, làm tròn (dưới 100 làm tròn 5, dưới 1000 làm tròn 10, còn lại làm tròn 50). Không nhân theo Hạng cảng, không nhân theo số người. `MVP`
4. Hệ số riêng theo tàu: chỉ có dòng tùy chọn của TA03 trả gấp 1,5 (gd-quan, `tram-va-cang.md` bảng loại tàu), không tính vào đơn đủ và thưởng. Lồng sinh vật sống tính theo loài (mục 3.1). Bản này chưa có hệ số riêng nào khác: các tàu "trả giá cao" của gd-quan đi bằng loại kiện đắt hơn, không bằng hệ số. `MVP`
5. Thưởng đủ đơn 25% tổng giá các kiện của dòng bắt buộc khi đơn đủ. Thưởng nhanh 15% như thế khi đơn đủ trước ngưỡng nhanh. Sim tính thưởng theo tỉ lệ giá trị giao được (xấp xỉ trung bình nhiều đơn), luật trong game là đủ thì có, thiếu thì không. `MVP`

### 2.2 Shop là bảng giá duy nhất (K20)
6. Mọi giá Tally của game nằm ở mục 3.1 và 3.2 của file này (tab Shop và Upgrade khi dán Sheet). Tab khác ghi ID và trỏ về, không ghi lại số. `MVP`
7. Giá Tally của mọi thứ mua mở ở chương c lấy từ ngân sách chương: Ngân sách(c) = β x Ngày mục tiêu(c) x Thu nhập tham chiếu một ngày(c). Giá một thứ = Ngân sách(c) x Tỉ lệ của loại / Tổng tỉ lệ các thứ mở ở chương c. Công thức đủ ở mục 3.3. `MVP`
8. Nâng cấp bộ đồ (5 trục của `nguoi-choi.md` mục 2.6) và nâng cấp dụng cụ tốn hai phần: vật liệu đúng bằng cột Σ GTĐ vào của bảng UPG trong `vat-pham.md` và Tally theo luật 7. Chương mở lấy từ cột Mở bằng của bảng UPG. UPG-RACK-1 không tốn Tally vì là thưởng quest Kỹ sư đi kèm Dùi xung. Làm ở Xưởng, xong qua đêm (`vat-pham.md` luật C2). `MVP` bậc 1
9. Linh kiện động cơ ENG-101 tới ENG-104 chỉ mua ở Shop. ENG-10c mở khi Hạng cảng đạt hạng trần của chương c: ENG-101 hạng 3, ENG-102 hạng 5, ENG-103 hạng 7, ENG-104 hạng 8. ENG-105 không bán (`vat-pham.md` luật E1). `MVP` ENG-101
10. Shop bán thêm: kệ kiện cấp 2 (Hạng 2), bản thiết kế BPR-103 (Hạng 4), BPR-106 (Hạng 6), BPR-105 (chương 3, cũng có ở hòm Station Flint). Danh mục mở theo Hạng cảng và chương (K20). Shop không bán tài nguyên, kiện, vật tiêu hao. `MVP` kệ kiện cấp 2
11. Giá không đổi theo số người (C8). Giá không giảm và không tăng theo thời gian. `MVP`

### 2.3 Tiến trình và mở khóa
12. Qua chương theo K25: chương đóng và vùng mới mở khi mốc đóng chương của truyện xong (gd-story), mốc đó chỉ kích hoạt khi giai đoạn động cơ của chương đã lắp. Kinh tế không có cổng chương riêng. Ba mốc kinh tế là gợi ý tiến độ, và là cách sim ước ngày đóng chương: sửa xong mọi khoang và giai đoạn động cơ của chương (vật liệu theo `vat-pham.md` mục 2.7), đã lắp ENG-10c (c từ 1 tới 4), đã đi đủ chuyến map nhánh (số chuyến 2, 3, 2, 4, 3 theo `map.md` mục 2.10, trong 2 chuyến mỗi ngày của K22), và đã qua sàn ngày truyện của chương. T-VO không chặn chương: thiếu cấp vẫn vào dải mới nhưng thời gian làm việc chỉ còn khoảng 27% (K6, `map.md` mục 3.2), nên sim mua T-VO trước tiên khi chương mở nó. `MVP` chương 1
13. Mọi nâng cấp khác không chặn chương. Sim mua theo thứ tự: ENG và T-VO trước, rồi các dòng còn lại của bảng 3.2 theo chương mở, khi đủ Tally và vật liệu.
14. Mỗi chương mở các thứ mua mới đúng một lần. Thứ chương trước chưa mua vẫn mua được với giá cũ.
15. Hạng cảng theo luật 39 tới 42 của gd-quan. Đề xuất ngưỡng điểm theo công thức ở mục 3.5 và điểm mỗi đơn đủ nhân hệ số quy mô đơn (N cộng 1) chia 2 (mục 6b).

- Thắng khi, thua khi: hệ thống không có trạng thái thắng thua. Người chơi không thể mất Tally (K2, `tram-va-cang.md` luật 32). Tally không âm.
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

### 3.1 Giá kiện (tab Shop, phần tàu trả)

- Lồng sinh vật sống (CGO-121, CGO-221, CGO-321) không có một giá chung: giá một lồng bằng GTĐ mẫu sống của loài bên trong nhân 10 Tally mỗi GTĐ, cộng hệ số tàu nếu có (luật 4). Bảng tàu hiện giá loài rẻ nhất mà đơn chấp nhận, kèm chữ "từ" (gd-quan luật 30). Dòng CGO-121 trong bảng kiện dưới là giá loài rẻ nhất. Giá từng loài ở bảng Lồng sinh vật sống. Con nuôi đưa vào lồng giao trả 0,5 lần giá lồng bắt thật của cùng loài, tối đa 1 lồng mỗi loài mỗi ngày (`vat-pham.md` luật M5).
- Thưởng đủ đơn và thưởng nhanh tính trên tổng giá các kiện đã nhận ở dòng bắt buộc của đơn, không tính dòng tùy chọn của TA03 (gd-quan).

<!--khoi:gia-kien-->
| ID kiện | Tên | Dải | GTĐ (gd-items) | Giá Tally một kiện | Nhãn |
|---|---|---|---|---|---|
| CGO-101 | Kiện phế liệu | Gần | 14,0 | 140 | MVP |
| CGO-102 | Kiện cáp | Gần | 13,2 | 130 | MVP |
| CGO-103 | Kiện quặng | Gần | 13,2 | 130 | MVP |
| CGO-104 | Kiện băng | Gần | 14,0 | 140 | MVP |
| CGO-105 | Kiện mô sinh học | Gần | 13,5 | 140 | MVP |
| CGO-109 | Kiện đồ Trái Đất | Gần | 12,5 | 120 | MVP |
| CGO-111 | Kiện cơ khí | Gần | 13,4 | 130 | Sau MVP |
| CGO-112 | Kiện điện tử | Gần | 16,1 | 160 | Sau MVP |
| CGO-113 | Kiện nước tinh khiết | Gần | 12,0 | 120 | MVP |
| CGO-106 | Kiện đặc sản Gần | Gần | 13,2 | 130 | MVP |
| CGO-107 | Kiện sản phẩm nuôi Gần | Gần | 42,9 | 430 | Sau MVP |
| CGO-141 | Kiện vật tư | Gần | 46,9 | 470 | Sau MVP |
| CGO-131 | Bản sao dữ liệu | Gần | 20,9 | 210 | Sau MVP |
| CGO-211 | Kiện hợp kim | Giữa | 40,4 | 400 | Sau MVP |
| CGO-212 | Kiện cảm biến | Giữa | 31,3 | 310 | Sau MVP |
| CGO-213 | Kiện dung dịch lạnh | Giữa | 44,9 | 450 | Sau MVP |
| CGO-206 | Kiện đặc sản Giữa | Giữa | 44,0 | 440 | Sau MVP |
| CGO-207 | Kiện sản phẩm nuôi Giữa | Giữa | 46,2 | 460 | Sau MVP |
| CGO-311 | Kiện giáp | Xa | 107,6 | 1100 | Sau MVP |
| CGO-312 | Kiện plasma | Xa | 86,9 | 870 | Sau MVP |
| CGO-313 | Kiện lõi nguội | Xa | 111,1 | 1100 | Sau MVP |
| CGO-306 | Kiện đặc sản Xa | Xa | 99,0 | 990 | Sau MVP |
| CGO-307 | Kiện sản phẩm nuôi Xa | Xa | 107,8 | 1100 | Sau MVP |
| CGO-411 | Kiện linh kiện Cradle | Cradle | 161,0 | 1600 | Sau MVP |
| CGO-511 | Kiện linh kiện Warden | Xa | 193,2 | 1950 | Sau MVP |
<!--/khoi-->

Giá lồng sinh vật sống theo loài:

<!--khoi:gia-song-->
| Lồng | Loài bên trong | Dải | GTĐ mẫu sống (gd-items) | Giá Tally một lồng | Nhãn |
|---|---|---|---|---|---|
| CGO-121 | DL-G01 Driftmoth | Gần | 5,14 | 50 | MVP |
| CGO-121 | DL-G02 Skitter Ray | Gần | 5,74 | 55 | MVP |
| CGO-121 | DL-G04 Sting Krill | Gần | 4,04 | 40 | MVP |
| CGO-121 | DL-G05 Arc Eel | Gần | 30,71 | 310 | MVP (hạ), Sau MVP (bắt) |
| CGO-121 | DL-G03 Barnacle Maw | Gần | 16,91 | 170 | Sau MVP |
| CGO-221 | DL-M02 Lumen Jelly | Giữa | 25,91 | 260 | Sau MVP |
| CGO-221 | DL-M03 Ore Grazer | Giữa | 28,91 | 290 | Sau MVP |
| CGO-221 | DL-M04 Needle Shoal | Giữa | 10,26 | 100 | Sau MVP |
| CGO-321 | DL-X01 Prism Wisp | Xa | 33,49 | 330 | Sau MVP |
| CGO-321 | DL-X02 Mirror Mantis | Xa | 69,51 | 700 | Sau MVP |
| CGO-321 | DL-X05 Brood Spawn | Xa | 23,04 | 230 | Sau MVP |
<!--/khoi-->

### 3.2 Giá mua bằng Tally (tab Upgrade và Shop)

- Mỗi dòng là một ID. Nâng cấp dùng đúng ID, bậc, vật liệu và chương mở của bảng UPG trong `vat-pham.md`. Ánh xạ trục: T-OXY là UPG-OXY, T-TUI là UPG-BAG, T-DAY là UPG-THR, T-VO là UPG-ENV, T-DUNGCU là UPG-RACK. Dụng cụ là UPG-MIN, UPG-HAR, UPG-NET. ID khoang theo gd-quan (luật 5 của `tram-va-cang.md`): KH07-C2 là kệ kiện cấp 2 (cảng cấp 2), KH05-C2 là Xưởng cấp 2, KHxx-C3 là cấp 3 của từng khoang, dòng giá ở đây là tổng cho các khoang. Làm tròn: mỗi dòng làm tròn riêng theo luật 3.

<!--khoi:gia-mua-->
| Chương mở | ID | Tên | Trục bộ đồ (nguoi-choi.md) | Mở bằng hoặc nơi | Vật liệu (GTĐ, gd-items) | Giá Tally | Nhãn |
|---|---|---|---|---|---|---|---|
| 1 | UPG-THR-1 | - | T-DAY bộ đẩy bậc 1 | Kỹ sư (chương 1) | 26,2 | 710 | MVP |
| 1 | UPG-RACK-1 | - | T-DUNGCU số ô dụng cụ bậc 1 | Quest Kỹ sư (chương 1), đi kèm Dùi xung | 23,1 | 0 (quest Kỹ sư) | MVP |
| 1 | UPG-HAR-2 | - | Dụng cụ (UPG-MIN, UPG-HAR, UPG-NET) | Kỹ sư (chương 1) | 27,0 | 300 | MVP |
| 1 | UPG-MIN-2 | - | Dụng cụ (UPG-MIN, UPG-HAR, UPG-NET) | Kỹ sư (chương 1) | 24,4 | 300 | MVP |
| 1 | ENG-101 | Linh kiện động cơ | - | Shop, cần Hạng cảng 3 | - | 2000 | MVP |
| 1 | KH07-C2 | Kệ kiện cấp 2 (cảng cấp 2) | Kệ kiện cấp 2 | Shop | - | 400 | MVP |
| 1 | UPG-OXY-1 | - | T-OXY dung lượng Oxy bậc 1 | Kỹ sư (chương 1) | 26,0 | 1000 | MVP |
| 1 | UPG-BAG-1 | - | T-TUI sức chứa túi bậc 1 | Kỹ sư (chương 1) | 24,2 | 1000 | MVP |
| 2 | BPR-103 | Bản thiết kế Máy quét xung | Bản thiết kế ở Shop | Shop | - | 2300 | Sau MVP |
| 2 | UPG-THR-2 | - | T-DAY bộ đẩy bậc 2 | Chương 2 | 43,4 | 2650 | Sau MVP |
| 2 | UPG-RACK-2 | - | T-DUNGCU số ô dụng cụ bậc 2 | Chương 2 | 37,4 | 3050 | Sau MVP |
| 2 | UPG-HAR-3 | - | Dụng cụ (UPG-MIN, UPG-HAR, UPG-NET) | Chương 2 | 43,4 | 1150 | Sau MVP |
| 2 | UPG-MIN-3 | - | Dụng cụ (UPG-MIN, UPG-HAR, UPG-NET) | Chương 2 | 44,3 | 1150 | Sau MVP |
| 2 | UPG-NET-2 | - | Dụng cụ (UPG-MIN, UPG-HAR, UPG-NET) | BPR-101 | 25,7 | 1150 | Sau MVP |
| 2 | ENG-102 | Linh kiện động cơ | - | Shop, cần Hạng cảng 5 | - | 7650 | Sau MVP |
| 2 | KH05-C2 | Xưởng cấp 2 | Nâng cấp khoang | Xưởng | - | 3050 | Sau MVP |
| 2 | UPG-OXY-2 | - | T-OXY dung lượng Oxy bậc 2 | Chương 2 | 49,4 | 3800 | Sau MVP |
| 2 | UPG-BAG-2 | - | T-TUI sức chứa túi bậc 2 | Chương 2 | 40,6 | 3800 | Sau MVP |
| 2 | UPG-ENV-1 | - | T-VO cấp môi trường bậc 1 | Chương 2 (dải Giữa) | 48,1 | 4600 | Sau MVP |
| 3 | BPR-105 | Bản thiết kế Máy cắt thân tàu (cũng có ở hòm Station Flint) | Bản thiết kế ở Shop | Shop | - | 7900 | Sau MVP |
| 3 | BPR-106 | Bản thiết kế tiện ích cảng | Bản thiết kế ở Shop | Shop | - | 7900 | Sau MVP |
| 3 | UPG-THR-3 | - | T-DAY bộ đẩy bậc 3 | Chương 3 | 75,4 | 9250 | Sau MVP |
| 3 | ENG-103 | Linh kiện động cơ | - | Shop, cần Hạng cảng 7 | - | 26400 | Sau MVP |
| 3 | UPG-OXY-3 | - | T-OXY dung lượng Oxy bậc 3 | Chương 3 | 74,4 | 13200 | Sau MVP |
| 3 | UPG-BAG-3 | - | T-TUI sức chứa túi bậc 3 | Chương 3 | 79,4 | 13200 | Sau MVP |
| 3 | UPG-ENV-2 | - | T-VO cấp môi trường bậc 2 | Chương 3 (dải Xa) | 90,6 | 15850 | Sau MVP |
| 4 | ENG-104 | Linh kiện động cơ | - | Shop, cần Hạng cảng 8 | - | 32100 | Sau MVP |
| 4 | KHxx-C3 | Cấp 3 các khoang (KHxx-C3 từng khoang, giá ở đây là tổng, gd-quan chốt danh sách khoang) | Nâng cấp khoang | Xưởng | - | 12850 | Sau MVP |
| 4 | UPG-OXY-4 | - | T-OXY dung lượng Oxy bậc 4 | Chương 4 đến 5 | 133,2 | 16050 | Sau MVP |
| 4 | UPG-BAG-4 | - | T-TUI sức chứa túi bậc 4 | Chương 4 đến 5 | 121,2 | 16050 | Sau MVP |
| 4 | UPG-ENV-3 | - | T-VO cấp môi trường bậc 3 | Chương 4 (Cradle) | 126,6 | 19250 | Sau MVP |
<!--/khoi-->

Nâng cấp nào mở khả năng mới, nâng cấp nào chỉ là số:

| Trục | Loại | Vì sao |
|---|---|---|
| T-VO cấp môi trường | Mở khả năng | Vào dải Giữa, Xa, Cradle mà không hao Oxy gấp 2,5 hoặc 4 (K6). Không chặn chương, thiếu thì làm việc còn khoảng 27% |
| T-DUNGCU số ô dụng cụ | Mở khả năng | Thêm một kiểu chơi mang theo cùng lúc (khai thác, hạ, bắt) |
| T-OXY, T-TUI | Chỉ là số | Chuyến dài hơn, mang về nhiều hơn. Đây là đòn bẩy thu nhập chính |
| T-DAY bộ đẩy | Chỉ là số | Chuyến gọn hơn, tăng nhỏ để không đổi cảm giác tay (`nguoi-choi.md`) |
| Dụng cụ khai thác bậc 2, 3 | Chỉ là số, có cổng mềm | Khai thác điểm cứng hơn không bị chậm gấp 4 (`vat-pham.md` luật S3) |

### 3.3 Công thức và núm gap

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nhóm tác động | Nguồn |
|---|---|---|---|---|---|---|
| Tally mỗi GTĐ | 10 | cố định | Mọi giá Tally phình theo | | Đơn vị | gd-economy tự quyết |
| Hệ số ngân sách β | 0,40 | 0,35 đến 0,45 (cả game <!--v:beta-lo-->12,0<!--/v--> đến <!--v:beta-hi-->14,6<!--/v--> giờ) | Chương dài hơn | Chương ngắn hơn, Tally dư | Thời lượng mọi chương | Sim, dò bằng `--do`. GDM nhận lại 0,40 ở log 70 |
| Giờ dùng tính ngân sách từng chương | 1,25, 2,75, 3,5, 3,0, 1,5 | Tổng 12 đến 15 | | | Ngân sách từng chương | Không phải giờ đo. Giờ đo và lệch ở bảng ngay dưới công thức |
| Tỉ lệ giá trong ngân sách chương | ENG 1,0, T-VO 0,6, T-OXY 0,5, T-TUI 0,5, T-DUNGCU 0,4, khoang cấp 0,4, T-DAY 0,35, bản thiết kế 0,3, kệ kiện 0,2, mỗi nâng cấp dụng cụ 0,15 | | Thứ đó đắt hơn trong chương | | Thứ tự mua | gd-economy tự quyết |
| Phần đơn trong lượng nhặt | 0,6 | 0,5 đến 0,7 | Hạng cảng nhanh, xây chậm | Hạng cảng chặn | Quy mô đơn | Sim vòng 2 |
| Hệ số co-op k(N), phần thêm mỗi người | 0,47 | 0,45 đến 0,5 | Co-op nhanh, mỗi người giàu | Co-op chậm | Co-op | gd-world giữ, sim xác nhận |
| Thưởng đủ đơn | 25% | 10 đến 40% | Đủ đơn quan trọng hơn | | Ca cảng | gd-quan |
| Thưởng nhanh | 15% | 5 đến 25% | | | Ca cảng | gd-quan |

Công thức:
- Ngày mục tiêu(c) = Giờ mục tiêu(c) x 60 / Phút một ngày tham chiếu(c). Phút một ngày tham chiếu(c) = 2 x Phút một chuyến đo được của chương (mục 8.5) + phút ca cảng của chương + 3 phút chuẩn bị và cuối ngày. Phút ca cảng chương 1 tới 5 lấy từ sim ca cảng của gd-tech: <!--v:phut-ca-->3,02, 3,22, 3,40, 3,93, 3,93<!--/v--> phút.
- Thu nhập tham chiếu một ngày(c) = 2 chuyến x (GTĐ một chuyến đo được của chương chia 0,9) x 10 x 1,25. Chia 0,9 vì sim chuyến đo ở mức túi đầy 90% của kịch bản trung bình, thu nhập tham chiếu tính ở túi đầy 100%. GTĐ một chuyến lấy từ sim chuyến gd-tech, gồm Driftlife (mục 8.5).
- Mật độ GTĐ mỗi Khối lấy trung bình bảng NODE của gd-items: <!--v:mat-do-->Gần 1,16, Giữa 3,09, Xa 7,78<!--/v-->. Chương 4 và 5 dùng mật độ dải Xa, khớp sim chuyến của gd-tech (mục 8.5).
- Ví dụ chương 1: Phút một ngày = 2 x <!--v:vd-chuyen-->4,4<!--/v--> + <!--v:vd-ca-->3,0<!--/v--> + 3 = <!--v:vd-phut-->14,8<!--/v-->. Ngày mục tiêu = 1,25 x 60 chia Phút một ngày = <!--v:vd-ngay-->5,1<!--/v-->. Thu nhập tham chiếu = 2 x (<!--v:vd-gtd-->102,1<!--/v--> chia 0,9) x 10 x 1,25 = <!--v:vd-thu-->2850<!--/v-->. Ngân sách = β x Ngày mục tiêu x Thu nhập tham chiếu = <!--v:vd-ngan-sach-->5750<!--/v--> Tally.

<!--khoi:ngan-sach-->
| Chương | Giờ dùng tính ngân sách | Phút một ngày tham chiếu | Ngày mục tiêu | Thu nhập tham chiếu một ngày (Tally) | Ngân sách Tally của chương |
|---|---|---|---|---|---|
| 1 | 1,25 | 14,8 | 5,1 | 2850 | 5750 |
| 2 | 2,75 | 17,0 | 9,7 | 8850 | 34350 |
| 3 | 3,50 | 19,4 | 10,8 | 21650 | 93650 |
| 4 | 3,00 | 23,3 | 7,7 | 31200 | 96300 |
| 5 | 1,50 | 27,7 | 3,2 | 41450 | không có thứ mua mới |
<!--/khoi-->

Giờ dùng tính ngân sách so với giờ đo:

<!--khoi:gio-lech-->
| Chương | Giờ dùng tính ngân sách | Giờ đo (trung bình, một người) | Lệch |
|---|---|---|---|
| 1 | 1,25 | 1,83 | +46% |
| 2 | 2,75 | 3,35 | +22% |
| 3 | 3,50 | 4,04 | +15% |
| 4 | 3,00 | 2,77 | -8% |
| 5 | 1,50 | 1,39 | -8% |
<!--/khoi-->

Núm gap: β (một núm cho cả 5 chương) và Phần đơn trong lượng nhặt. Mọi giá Tally đi theo thu nhập của chương nên khi gd-items hoặc gd-character đổi mật độ, túi, Oxy thì giá tự đổi theo, chạy lại sim là xong.

### 3.4 Thứ tự mua trong sim và kịch bản

- Thứ tự mua trong sim: theo chương mở của bảng 3.2, trong mỗi chương mua ENG và T-VO trước, rồi các dòng còn lại theo thứ tự bảng, khi đủ Tally và vật liệu.

| Tham số hành vi | Tệ | Trung bình | Tốt | Nguồn |
|---|---|---|---|---|
| Phần túi đầy mỗi chuyến | 75% | 90% | 100% | `[GIẢ ĐỊNH]`, chờ sim chuyến gd-tech |
| Hệ số mật độ (nhặt đồ hiếm) | 0,9 | 1,0 | 1,15 | `[GIẢ ĐỊNH]` |
| Tỉ lệ chuyến ngạt, một người | 25% | 15% | 7% | Khung mục 9: người cẩn thận dưới 5%, người tham 15 đến 40%. Ba mức là `[GIẢ ĐỊNH]` nằm giữa hai đầu |
| Kỹ năng ca cảng (phần hàng giao kịp) | 70% | 85% | 95% | `[GIẢ ĐỊNH]`, chờ sim ca cảng gd-tech |
| Tỉ lệ đơn nhanh | 10% | 30% | 60% | `[GIẢ ĐỊNH]` |
| Hệ số phút một ngày | 1,15 | 1,0 | 0,9 | `[GIẢ ĐỊNH]` |

- Giả định chung của sim (ghi đủ ở `tham-so.json`, kèm nguồn ở mục ghi chú nguồn): mỗi chương không xong trước sàn ngày truyện của gd-story (7, 5, 8, 3, 3 ngày, `cot-truyen.md` mục 5). ca cảng chương 1 mở từ ngày 4 (Thông dịch viên tỉnh, mốc C1.8 của `tram-va-cang.md`) và khi đã sửa đủ 98 GTĐ của 5 khoang. Mỗi ngày đúng 2 chuyến, đúng trần của K22 (khung sửa lần 4), ngày chỉ sang khi ngủ (K23). lượng nhặt một chuyến là số nhỏ hơn giữa túi đầy và thời gian làm việc nhân tốc độ nhặt thực. Tốc độ nhặt thực đặt để túi bậc 0 đầy ở 65% thời gian làm việc chương 1 (mục tiêu của gd-items). Kết quả nhân hệ số để khớp GTĐ một chuyến của sim chuyến gd-tech (mục 8.5), gồm cả Driftlife bắt và hạ. Chuyến map nhánh cho 50% lượng nhặt. Người vớt tỉnh sau một đêm. Co-op làm mỗi ngày dài thêm 5% mỗi người thêm (chờ người về cuối). Đồng đội cứu nhau làm tỉ lệ ngạt giảm một nửa khi từ 2 người. Ngạt giữ món đắt nhất của dải. Khi còn thứ phải xây, người chơi giữ lại 40% kho cho xây trước khi đóng kiện. Qua chương thì 30% giá trị kho mang sang. 200 lượt chạy mỗi ô, seed 20261120.

### 3.5 Ngưỡng Hạng cảng (gd-quan đã nhận)

- Cách đã tính ra ngưỡng (vòng 3): ngưỡng của hạng trần chương c bằng 70% tổng điểm cảng một người kiếm được tới hết ngày mục tiêu của chương c, chương 1 trừ 3 ngày đầu chưa có cảng. Hạng giữa hai trần lấy trung bình hai trần. gd-quan đã nhận kết quả. Bảng dưới là số hiện hành, sim dùng đúng số này. Đổi ngưỡng thì gd-quan đổi ở `tram-va-cang.md` rồi báo gd-economy chạy lại.

<!--khoi:nguong-hang-->
| Hạng | Trần ở chương | Ngưỡng điểm (gd-quan đã nhận, sim dùng số này) |
|---|---|---|
| 2 | 1 | 10 |
| 3 | 1 | 20 |
| 4 | 2 | 45 |
| 5 | 2 | 70 |
| 6 | 3 | 100 |
| 7 | 3 | 135 |
| 8 | 4 | 195 |
<!--/khoi-->

## 4. Trường hợp biên

| Ca | Xử lý |
|---|---|
| Tally bằng 0 | Không mua được gì, không có phạt. Ca cảng hôm sau vẫn có tàu. Không thể kẹt: kiện thô đóng thẳng từ tài nguyên thô không cần Tally |
| Bỏ mọi ca cảng | Không có Tally, không lên Hạng cảng, kẹt ở ENG-101. Đây là lựa chọn người chơi, game không ép. Bảng tàu nhắc ENG cần Hạng 3 |
| Đủ Tally, thiếu Hạng cảng cho ENG | Mục ENG hiện điều kiện "cần Hạng N". Sim đo: Hạng 3 tới trước khi chương 1 xong, Hạng không phải cổng cuối (bảng Tally theo ngày ở Phụ lục) |
| Đủ điểm, chạm trần hạng chương | Điểm cộng dồn, lên hạng khi chương sau mở (gd-quan luật 41) |
| Mua cùng lúc trong co-op | Ví chung, người bấm trước được, người sau thấy giá đỏ nếu thiếu. Máy chủ xử lý theo thứ tự tới |
| Người vào sau | Không mang Tally riêng, dùng ví chung, bộ đồ cùng bậc với nhóm (C4) |
| Tally rất lớn ở chương 5 | Chương 5 không có thứ mua mới, Tally dư. Ghi ở mục 10 |
| Kiện giao vào dòng tùy chọn TA03 | Giá gấp 1,5, không tính vào thưởng đủ đơn |
| Giao kiện sống loài A cho dòng đòi loài B | Tàu từ chối (gd-quan bước 2). Không có giá |
| Hai người cùng giao kiện cuối của một đơn | Thưởng đủ đơn tính một lần (gd-quan bước 5) |

## 5. Ràng buộc vật lý của luật

- Tally tối đa một ngày bằng tổng giá đơn của ca cộng 40% thưởng cộng dòng tùy chọn của TA03 (gấp 1,5, ngoài đơn). Một ngày không thể kiếm hơn mức đó, nên ngân sách chương luôn đo được bằng số ngày.
- Không có vòng tiền vô hạn (gd-qa kiểm ở GD-031, gd-economy nhận): nuôi có trần ô (4, 6, 9) và lãi ròng 2,2 / 5,0 / 9,5 GTĐ mỗi ô mỗi ngày, khoảng 3 đến 4% thu nhập. K22 cho một ca cảng mỗi ngày. Shop không bán tài nguyên, kiện, vật tiêu hao nên không có mua rẻ bán đắt. Chế rồi bán có biên lợi nhưng nguyên liệu gốc chỉ đến từ chuyến ngoài, bị chặn bởi Oxy và túi. Giá không đổi theo số người và thời gian.
- Thời gian một chương có sàn không phụ thuộc giá: chuyến map nhánh, đêm chờ người vớt, sửa khoang, Hạng cảng. Sim đo sàn chương 1 khi giá Tally gần 0 là <!--v:san-ch1-goc-->1,6<!--/v--> giờ. Chương 5 gần như chỉ có sàn (bảng 8.1).
- Co-op không thể nhanh hơn sàn: chương 5 của nhóm 4 dài gần bằng chơi một mình (bảng 8.1).

## 6. Yêu cầu cho engineer và tool

- Dữ liệu: bảng giá kiện (ID kiện, Tally), bảng thứ mua (ID, chương mở, Hạng cần, Tally, bộ vật liệu), hệ số tàu, phần trăm thưởng. Tất cả lấy từ `ket-qua.json` và `tham-so.json`, gd-tech chuyển sang ScriptableObject. Không gõ giá trong code.
- Lưu: Tally (số nguyên, chung thế giới), điểm cảng, Hạng cảng, danh sách thứ đã mua.
- Sự kiện cho event tracking (gd-tech): `tally_nhan` (nguồn: kiện, thưởng đủ, thưởng nhanh, tàu), `tally_chi` (thứ mua), `hang_cang_len`, `chuong_xong` (ngày, giờ chơi, số người). Dùng để so với bảng mục 8 khi playtest.
- Nơi phải đổi cùng khi đổi số: `tham-so.json`, chạy lại sim với `--ghi`, gd-tech xuất lại data. Đổi GTĐ ở `vat-pham.md` thì chạy lại sim, giá tự theo.

## 6b. Co-op 1 đến 4 người

<!--khoi:coop-he-so-->
| Phần | 1 người | 2 người | 3 người | 4 người |
|---|---|---|---|---|
| Ví Tally, giá, Hạng cảng | Chung | Chung | Chung | Chung |
| Hệ số khe điểm sinh k(N) (gd-world), Gần, Giữa, Xa | 1,00, 1,00, 1,00 | 1,30, 1,25, 1,38 | 1,60, 1,50, 1,76 | 1,90, 1,75, 2,14 |
| Mỗi người so với chơi một mình, sim chuyến gd-tech, chương 1 tới 5 | 100%, 100%, 100%, 100%, 100% | 85%, 92%, 95%, 92%, 85% | 73%, 85%, 91%, 87%, 75% | 66%, 80%, 89%, 83%, 69% |
| Quy mô đơn chương 1 và 2, chương 3 tới 5 (gd-quan C8) | 1,0, 1,0 | 1,6, 1,4 | 2,2, 1,8 | 2,8, 2,2 |
| Điểm cảng mỗi đơn đủ (gd-quan đã nhận) | 2 | 3 | 4 | 5 |
| Giá nâng cấp, sửa khoang | Không đổi | Không đổi | Không đổi | Không đổi |
<!--/khoi-->

Không luật nào cần đúng N người. Bảng đo:

<!--khoi:coop-->
| Kịch bản | Số người | Mỗi người nhặt so với một mình | Tới hết chương 1 (cộng dồn) | Tới hết chương 2 (cộng dồn) | Tới hết chương 3 (cộng dồn) | Tới hết chương 4 (cộng dồn) | Hết game |
|---|---|---|---|---|---|---|---|
| tệ | 2 | 90% | 76% | 66% | 68% | 68% | 71% |
| tệ | 4 | 77% | 83% | 52% | 54% | 53% | 58% |
| trung bình | 2 | 90% | 91% | 66% | 68% | 69% | 73% |
| trung bình | 4 | 77% | 99% | 67% | 70% | 68% | 73% |
| tốt | 2 | 90% | 105% | 74% | 78% | 76% | 80% |
| tốt | 4 | 77% | 115% | 81% | 85% | 83% | 87% |
<!--/khoi-->

- Kết quả với log 50, sau thang túi mới và k(N) theo dải của gd-world (a 0,30 ở Gần, 0,25 ở Giữa, 0,38 ở Xa): mỗi người nhóm 4 nhặt <!--v:moi-nguoi-4-->66% đến 89%<!--/v--> so với một mình (sim chuyến gd-tech), từ 60% như mục tiêu. Nhóm 4 tới hết game bằng <!--v:coop4-game-->73%<!--/v--> thời gian một mình, hết chương 1 (cộng dồn) bằng <!--v:coop4-ch1-->99%<!--/v-->, hết chương 2 (cộng dồn) bằng <!--v:coop4-ch2-->67%<!--/v-->. Nguyên nhân là sàn ngày của chuỗi mốc truyện (`cot-truyen.md` mục 5, gd-story): tổng <!--v:san-tong-->26<!--/v--> ngày, không đổi theo số người, vì người vớt tỉnh đầu ngày kế tiếp, mỗi ngày một ca cảng, tàu mới vào lịch từ ngày kế tiếp. Nhóm 4 đi chạm sàn ở mọi chương, một mình thì không. GDM đã chốt mục tiêu mới 60 đến 75% và giữ sàn ngày truyện (log 69), nên 72% là đạt. Phương án hạ sàn không áp: nếu áp thì sàn còn <!--v:san-ha-tong-->22<!--/v--> ngày và nhóm 4 xuống <!--v:coop4-san-ha-->63%<!--/v-->. Quy mô đơn là 1 cộng a nhân (N trừ 1), a bằng 0,6 ở chương 1 và 2, 0,4 ở chương 3 tới 5, và điểm cảng tăng theo quy mô đơn (gd-quan).
- Ở kịch bản tốt, nhóm đông xong chương 1 chậm hơn chơi một mình (trên 100% ở bảng trên): người chơi tốt một mình cũng chạm sàn ngày truyện, mà một ngày co-op dài hơn 5% mỗi người thêm (chờ người về cuối, `[GIẢ ĐỊNH]`). Cùng số ngày, ngày dài hơn thì giờ nhiều hơn.

## 7. Yêu cầu cho art, UI, tutorial, audio

| Sự kiện | Hình | Âm | Text / tutorial | Ưu tiên |
|---|---|---|---|---|
| Nhận Tally từ kiện | Số Tally bay lên từ bến về góc ví (gd-quan đã có) | Tiếng xu, cao dần theo đơn đủ liên tiếp | Không | Cao |
| Mở Shop lần đầu | Danh mục chia theo Hạng, ô khóa ghi điều kiện | | Một câu của Thông dịch viên: tàu trả Tally, Shop bán thứ trạm không tự làm | Cao |
| Mua nâng cấp | Bộ đồ đổi hình sáng hôm sau | Tiếng máy Xưởng | Lần đầu: nâng cấp xong qua đêm | Cao |
| Thiếu Tally hoặc vật liệu | Phần thiếu đỏ, ghi số còn thiếu | | Không | Cao |
| ENG khóa vì Hạng | Ô ENG ghi "cần Hạng cảng N", thanh điểm tới hạng | | FTUE chương 1: lần đầu chạm ô ENG-101 | Cao |

gd-ux: mỗi giá hiện cả hai phần (Tally và vật liệu). Màn Shop và Upgrade đọc giá từ data, không có số trong strings.

## 7b. Cảm giác (game feel)

- Tham chiếu: khoảnh khắc Dave nhận tiền cuối ca sushi, tiền đếm lên từng dòng món [D theo `docs/knowledge/indie/06-dave-the-diver-cau-truc.md`]. Ở đây đếm theo từng tàu trên bảng kết ca.
- Phản tham chiếu: không có số Tally nhảy kiểu máy đánh bạc, không có hiệu ứng mua sắm kiểu cửa hàng game di động.
- Mua nâng cấp: không có hoạt ảnh dài, xác nhận một lần, kết quả thấy ở sáng hôm sau trên hình bộ đồ.

## 8. Cách đo thành công và tiêu chí nghiệm thu

### 8.1 Mốc chương theo kịch bản và số người

Mỗi ô là ngày thứ mấy xong chương và số giờ chơi của riêng chương đó (trung bình 200 lượt).

<!--khoi:moc-chuong-->
| Kịch bản | Số người | Chương 1 | Chương 2 | Chương 3 | Chương 4 | Chương 5 | Cả game (giờ) | Lượt chạy xong game |
|---|---|---|---|---|---|---|---|---|
| tệ | 1 | 9 ngày, 2,51 giờ | 25 ngày, 5,04 giờ | 41 ngày, 6,15 giờ | 51 ngày, 4,25 giờ | 54 ngày, 1,59 giờ | 19,5 | 100% |
| tệ | 2 | 7 ngày, 1,91 giờ | 16 ngày, 3,11 giờ | 27 ngày, 4,30 giờ | 33 ngày, 2,94 giờ | 36 ngày, 1,67 giờ | 13,9 | 100% |
| tệ | 4 | 7 ngày, 2,09 giờ | 12 ngày, 1,88 giờ | 20 ngày, 3,42 giờ | 24 ngày, 2,06 giờ | 27 ngày, 1,83 giờ | 11,3 | 100% |
| trung bình | 1 | 8 ngày, 1,83 giờ | 20 ngày, 3,35 giờ | 32 ngày, 4,04 giờ | 39 ngày, 2,77 giờ | 42 ngày, 1,39 giờ | 13,4 | 100% |
| trung bình | 2 | 7 ngày, 1,66 giờ | 13 ngày, 1,77 giờ | 21 ngày, 2,83 giờ | 26 ngày, 2,04 giờ | 29 ngày, 1,46 giờ | 9,8 | 100% |
| trung bình | 4 | 7 ngày, 1,81 giờ | 12 ngày, 1,63 giờ | 20 ngày, 2,97 giờ | 24 ngày, 1,79 giờ | 27 ngày, 1,59 giờ | 9,8 | 100% |
| tốt | 1 | 7 ngày, 1,42 giờ | 16 ngày, 2,40 giờ | 27 ngày, 2,95 giờ | 33 ngày, 2,10 giờ | 36 ngày, 1,25 giờ | 10,1 | 100% |
| tốt | 2 | 7 ngày, 1,49 giờ | 12 ngày, 1,34 giờ | 20 ngày, 2,44 giờ | 24 ngày, 1,47 giờ | 27 ngày, 1,31 giờ | 8,1 | 100% |
| tốt | 4 | 7 ngày, 1,63 giờ | 12 ngày, 1,47 giờ | 20 ngày, 2,68 giờ | 24 ngày, 1,61 giờ | 27 ngày, 1,44 giờ | 8,8 | 100% |
<!--/khoi-->

| Mục tiêu khung mục 9 | Mục tiêu | Đo (trung bình, một người trừ khi ghi) | Đạt |
|---|---|---|---|
| Chương 1 | 1,5 đến 2 giờ | <!--v:gio-ch1-tb-->1,83<!--/v--> giờ | Đạt |
| Cả game | 12 đến 15 giờ | <!--v:gio-game-tb-->13,4<!--/v--> giờ | Đạt |
| Độ dài một ngày (khung mục 9 sửa lần 4) | Chương 1: 15 đến 20 phút. Chương 5: 25 đến 30 phút | Chương 1 <!--v:phut-ngay-ch1-->14,8<!--/v--> phút, chương 5 <!--v:phut-ngay-ch5-->27,7<!--/v--> phút (2 chuyến đo được, ca cảng, 3 phút chuẩn bị) | Chương 5 đạt. Chương 1 dưới sàn chưa tới 3%, trong dung sai |
| Số ngày tới hết game | Không đặt | <!--v:ngay-game-tb-->42<!--/v--> ngày | Để tham khảo |
| Nhóm 4 so với một mình, tới hết game | 60 đến 75% (GDM, log 69) | <!--v:coop4-game-->73%<!--/v--> | Đạt |
| Mỗi người nhóm 4 nhặt so với một mình | từ 60% | <!--v:moi-nguoi-4-->66% đến 89%<!--/v--> | Đạt |
| Thưởng đủ đơn và thưởng nhanh trong thu Tally (mục tiêu mới, GDM nhận phản biện 1) | 15 đến 25% | <!--v:thuong-phan-->20%<!--/v--> (tệ <!--v:thuong-te-->15%<!--/v-->, tốt <!--v:thuong-tot-->24%<!--/v-->) | Đạt |
| Sống so với hạ, cỡ S và M, sau khi trừ vật tiêu hao | 1,2 đến 2 lần (khung sửa lần 5) | <!--v:luoi-min-->1,28<!--/v--> đến <!--v:luoi-max-->1,84<!--/v--> qua lưới, <!--v:tay-min-->1,76<!--/v--> đến <!--v:tay-max-->1,90<!--/v--> bắt tay (mục 8.4) | Đạt |

- Kịch bản tệ một người dài <!--v:gio-game-te-->19,5<!--/v--> giờ, kịch bản tốt <!--v:gio-game-tot-->10,1<!--/v--> giờ. Khoảng này chấp nhận được với game bán đứt không giới hạn thời gian. Chương 2 trung bình dài <!--v:gio-ch2-tb-->3,4<!--/v--> giờ so với 2,75 giờ đặt ra (lệch <!--v:lech-ch2-->22%<!--/v-->) vì chương 2 có 3 chuyến map nhánh và hai người vớt. Tổng vẫn trong mục tiêu nên không chỉnh thêm, ghi ở mục 10.

### 8.2 Source và sink Tally

<!--khoi:source-sink-->
| Kịch bản | Số người | Tally thu cả game | Phần từ ca cảng | Chi cho ENG | Chi cho bộ đồ | Chi cho dụng cụ, khoang, Shop khác | Tally dư cuối game | Dư so với thu |
|---|---|---|---|---|---|---|---|---|
| tệ | 1 | 271980 | 100% | 30% | 54% | 17% | 41920 | 15% |
| tệ | 2 | 290421 | 100% | 30% | 54% | 17% | 60361 | 21% |
| tệ | 4 | 339875 | 100% | 30% | 54% | 17% | 109815 | 32% |
| trung bình | 1 | 286101 | 100% | 30% | 54% | 17% | 56041 | 20% |
| trung bình | 2 | 306020 | 100% | 30% | 54% | 17% | 75960 | 25% |
| trung bình | 4 | 442922 | 100% | 30% | 54% | 17% | 212862 | 48% |
| tốt | 1 | 297433 | 100% | 30% | 54% | 17% | 67373 | 23% |
| tốt | 2 | 330405 | 100% | 30% | 54% | 17% | 100345 | 30% |
| tốt | 4 | 527563 | 100% | 30% | 54% | 17% | 297503 | 56% |
<!--/khoi-->

- Tally không phải cổng ở chương 3 và 4 (cổng là vật liệu, Hạng và chuyến map nhánh), nên Tally trong ví có lúc lên vài ngày lương (Phụ lục). Dư cuối game phần lớn đến từ chương 5 (không có thứ mua mới, GDM chấp nhận).

### 8.3 Điểm treo log 40: giữ 1 món khi ngạt có quá đau ở chương 1

<!--khoi:log40-->
| Kịch bản | Tỉ lệ chuyến ngạt (đầu vào) | Phần nhặt mất vì ngạt, cả game | Giờ chương 1, giữ 1 món | Giờ chương 1, giữ 3 món | Chênh (phút) |
|---|---|---|---|---|---|
| tệ | 25% | 23,1% | 2,51 | 2,46 | 3 |
| trung bình | 15% | 14,1% | 1,83 | 1,82 | 0 |
| tốt | 7% | 6,4% | 1,42 | 1,42 | 0 |
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

- Kết luận: với túi 80 Khối, giữ 1 món là mất thật: món giữ lại chỉ bằng <!--v:giu-ch1-->5%<!--/v--> túi đầy ở chương 1 và <!--v:giu-ch5-->1%<!--/v--> ở chương 5. Nhưng ngạt hiếm, nên đổi sang giữ 3 món chỉ đổi chương 1 khoảng <!--v:chenh-tb-->0<!--/v--> phút ở kịch bản trung bình và <!--v:chenh-te-->3<!--/v--> phút ở kịch bản tệ. GDM đã chốt giữ 1 món (log 57).
- Lồng mẫu: trước khi sửa, lồng 3 con đắt nhất dải Gần trị <!--v:long-3-->92,1<!--/v--> GTĐ, ngang túi đầy chương 1 (<!--v:tui-ch1-->92,6<!--/v--> GTĐ), nên ngạt với lồng đầy gần như không mất gì. gd-combat đã sửa luật 25, GDM chốt ở log 57: chọn lồng làm món giữ lại thì chỉ giữ con sao cao nhất.

### 8.4 Điểm treo log 53

- **Món nhỏ giá trị cao làm giữ 1 món nhẹ:** không đúng với đồ thường (bảng món giữ ở 8.3, tối đa <!--v:giu-ch1-->5%<!--/v-->). Chỉ đúng với mẫu boss một lần (SMP-191, SMP-192 ở chương 1) và Lồng mẫu (lỗ hổng ở 8.3).

- **Chi phí bắt sống so với hệ số giá:** gd-items đã cộng giá Lưới cuộn vào GTĐ mẫu sống, tăng Lưới cuộn lên 10 mỗi mẻ và thêm cổng kiểm giá gộp mẫu sống cỡ S không quá 2,0 lần hạ (đợt 1b). Bảng dưới tính ròng (trừ Lưới cuộn <!--v:luoi-gtd-->1,10<!--/v--> GTĐ mỗi phát) theo số con một phát trúng.

<!--khoi:bat-song-->
| Loài cỡ S | Dải | Hạ (GTĐ kỳ vọng) | Mẫu sống (GTĐ, gd-items) | Sống trên hạ, bắt tay sau choáng | Ròng trên hạ, lưới trúng 1 con | 2 con | 3 con | Nhãn |
|---|---|---|---|---|---|---|---|---|
| DL-G01 Driftmoth | Gần | 2,70 | 5,14 | 1,90 | 1,50 | 1,70 | 1,77 | MVP |
| DL-G02 Skitter Ray | Gần | 3,10 | 5,74 | 1,85 | 1,50 | 1,67 | 1,73 | MVP |
| DL-G04 Sting Krill | Gần | 2,30 | 4,04 | 1,76 | 1,28 | 1,52 | 1,60 | MVP |
| DL-M04 Needle Shoal | Giữa | 5,50 | 10,26 | 1,87 | 1,67 | 1,77 | 1,80 | Sau MVP |
| DL-X01 Prism Wisp | Xa | 18,00 | 33,49 | 1,86 | 1,80 | 1,83 | 1,84 | Sau MVP |
| DL-X05 Brood Spawn | Xa | 12,60 | 23,04 | 1,83 | 1,74 | 1,78 | 1,80 | Sau MVP |
<!--/khoi-->

- Kết luận: qua lưới, ròng trên hạ từ <!--v:luoi-min-->1,28<!--/v--> tới <!--v:luoi-max-->1,84<!--/v-->, thấp nhất khi một phát chỉ trúng 1 con của loài rẻ. Bắt tay sau choáng không tốn vật tiêu hao nên được <!--v:tay-min-->1,76<!--/v--> đến <!--v:tay-max-->1,90<!--/v--> lần, trong trần 2,0 của khung. Bắt sống luôn đáng hơn hạ (K9) mà không vượt trần.

- **Chương 1 cần khoảng 11 chuyến đầy túi, cảng có thể thiếu hàng:** đúng với túi cũ 20 Khối. Với túi 80 Khối, vật liệu chương 1 (sửa khoang cộng nâng cấp theo lộ trình, <!--v:vl-ch1-->321<!--/v--> GTĐ) chỉ còn <!--v:chuyen-ch1-->3,5<!--/v--> chuyến đầy túi tài nguyên. Bảng dưới so đơn một ca với cỡ kiện và sức chở của ca cảng:

<!--khoi:quy-mo-don-->
| Chương | Đơn một ca, một người (GTĐ) | GTĐ một kiện trung bình hiện tại (gd-items) | Kiện mỗi ca với kiện hiện tại | Kiện giao được một ca (sim ca cảng gd-tech) | GTĐ một kiện cần để đơn là 10 kiện |
|---|---|---|---|---|---|
| 1 | 136 | 13,4 | 10,2 | 9,2 | 13,6 |
| 2 | 425 | 41,4 | 10,3 | 8,7 | 42,5 |
| 3 | 1038 | 102,5 | 10,1 | 7,5 | 103,8 |
| 4 | 1498 | 161,0 | 9,3 | 8,2 | 149,8 |
| 5 | 1990 | 193,2 | 10,3 | 8,2 | 199,0 |
<!--/khoi-->

- Lỗi chặn của QA GD-031, đã xử: gd-items đã đổi cỡ kiện theo túi 80 Khối (GTĐ một kiện bằng giá trị đơn một ca chia 10 ở chương 1 tới 3) và thêm kiện riêng cho chương 4 (CGO-411, linh kiện Cradle) và chương 5 (CGO-511, linh kiện Warden). Sim luôn chặn thu một ca bằng số kiện sim ca cảng của gd-tech giao được nhân GTĐ một kiện, nên thu không vượt sức chở. Còn hụt: sim ca cảng giao 7 đến 8 kiện ở chương 2 tới 4 thay vì 10. Nếu không chặn sức chở, cả game chỉ <!--v:gio-game-khong-chan-->12,4<!--/v--> giờ với β hiện tại. Giả định `[GIẢ ĐỊNH]`: sim coi GTĐ nhặt được là dùng chung cho mọi kiện. CGO-411 và CGO-511 cần RES-401 và RES-305, chỉ có từ boss, map nhánh và đơn vị The Wardens, nên gd-world và gd-combat cần xác nhận một ngày chương 4, 5 nhặt đủ cho khoảng 10 kiện. Vật liệu sửa khoang chương 1 (<!--v:sua-ch1-goc-->170<!--/v--> GTĐ) giữ nguyên.

- **Nhặt tay lợi gấp 2,5 lần khoan:** không còn đúng. gd-items đã giảm Mảnh vỡ trôi còn 1 lần quay ở 1b. Tính cả 6 giây đi giữa hai điểm `[GIẢ ĐỊNH]`, nhặt tay đầy túi chậm nhất:

<!--khoi:tay-khoan-->
| Điểm | Tên | Dụng cụ | GTĐ mỗi giây tại chỗ | GTĐ mỗi giây gồm 6 giây đi | Giây đầy túi 80 Khối | GTĐ mỗi Khối |
|---|---|---|---|---|---|---|
| SLV-101 | Mảnh vỡ trôi | Tay | 0,69 | 0,14 | 608 | 1,10 |
| SLV-102 | Mạch quặng sắt | TOL-102 | 0,55 | 0,31 | 280 | 1,10 |
| SLV-103 | Khối băng trôi | TOL-102 | 0,57 | 0,31 | 260 | 1,00 |
| SLV-104 | Hòm kỹ thuật vỡ | TOL-102 | 0,83 | 0,42 | 310 | 1,61 |
| SLV-105 | Tấm vỏ lớn | TOL-102 | 0,43 | 0,30 | 267 | 1,00 |
<!--/khoi-->

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

- Sim này đọc thẳng phút và GTĐ một chuyến (trung bình, một người, gồm Driftlife) khi cột Bình của sim chuyến khớp thang hiện hành. Nguồn hiện tại: <!--v:nguon-chuyen-->sim chuyến gd-tech<!--/v-->. GTĐ nhân vào lượng nhặt, thu nhập tham chiếu và quy mô đơn. Phút dùng cho độ dài một ngày.
- Với thang túi và bình GDM chốt (log 54), chuyến không còn kết thúc quá sớm vì túi đầy. Cột Phút một chuyến khớp khung mục 9 (4 đến 6 phút ở chương 1, 10 đến 12 ở chương 5).

### 8.6 Thang túi và bình mới: đã áp

- GDM chốt thang của gd-world ở log 54 và β 0,60, giờ chương 1 trong công thức 1,25 ở log 55. Sau QA GD-031 (cảng mở ngày 4, T-VO sang chương 2, giá theo đúng ID, thu một ca chặn theo sức chở ca cảng), β dò lại thành 0,40 để cả game vào 12 đến 15 giờ. Số trước và sau ở Balance Sheet.

### 8.7 Tiêu chí nghiệm thu (gd-qa kiểm)

- Chạy `python projects/game-moi/sim/economy/sim-kinh-te.py --ghi` trên bản sạch: `economy_doc.py kiem` ra 0 lỗi, file này không đổi so với bản đã nộp (cùng seed).
- `--selftest` in "selftest xanh": cùng seed cùng kết quả, kịch bản trung bình một người xong game, tệ chậm hơn trung bình chậm hơn tốt.
- Mọi giá Tally trong mọi GDD khác trỏ về mục 3 của file này (grep "Tally" trong 7 file đợt 1 không có số giá).
- Mọi mục 8.1 ghi Đạt, trừ dòng có điều kiện thì điều kiện đã được vai kia nhận.

Tiêu chí đo được khi có build (rút từ GD-031):

| Feature | Category | Acceptance Criteria đo được | Nhãn |
|---|---|---|---|
| Tally là nguồn duy nhất | Kinh tế | Mọi event `tally_nhan` có nguồn là kiện, thưởng đủ hoặc thưởng nhanh, không nguồn khác trong 100 phiên thử | MVP |
| Giá một kiện | Kinh tế | Giá hiển thị bằng bảng 3.1, làm tròn theo luật 3 | MVP |
| Giá lồng sống | Kinh tế | Giá bằng GTĐ mẫu sống nhân 10 theo bảng lồng sống, bảng tàu hiện "từ" giá loài rẻ nhất | MVP |
| Thưởng | Kinh tế | 25% và 15% tổng giá các kiện của dòng bắt buộc, không tính dòng tùy chọn | MVP |
| Giá nâng cấp và Shop | Kinh tế | Bằng bảng 3.2, không đổi khi số người đổi từ 1 đến 4 kể cả giữa phiên (C8) | MVP |
| Qua chương 1 | Tiến trình | Chương 1 đóng khi mốc đóng chương của truyện xong và ENG-101 đã lắp vào động cơ (K25), không có cổng kinh tế riêng | MVP |
| ENG-101 | Tiến trình | Chỉ mua được khi Hạng cảng 3, ô ENG hiện "cần Hạng 3" khi chưa đủ | MVP |
| Thời lượng chương 1 | Tiến trình | Event `chuong_xong` chương 1 của 5 người chơi mới, trung bình trong 1,5 đến 2 giờ | MVP |
| Thời lượng cả game | Tiến trình | 12 đến 15 giờ trung bình, nhóm 4 bằng 60 đến 75% thời gian một mình tới hết game (log 69) | Sau MVP |
| Phần thưởng trong thu | Kinh tế | 15 đến 25% tổng Tally từ ca cảng trong cả phiên | MVP |
| Không mất Tally | Kinh tế | Ngạt, bị kéo về, thoát giữa chuyến không làm Tally giảm (K2) | MVP |
| Không có vòng tiền | Kinh tế | Tally một ngày không vượt tổng giá đơn của ca cộng 40% thưởng cộng dòng tùy chọn TA03 | MVP |

## 9. Lệch khỏi tham chiếu (Dave the Diver)

| Phần | Dave làm thế nào | EMBER làm thế nào | Vì sao lệch |
|---|---|---|---|
| Đồng tiền | Gold từ quán sushi, thêm Bei cho trang bị | Một đồng Tally | K18, một bảng giá |
| Nguồn tiền | Doanh thu ca tối theo món, giá món tăng theo cấp món | Giá kiện cố định theo GTĐ, thưởng đủ đơn và nhanh | Kiện nối thẳng với lượng nhặt, người chơi tính được |
| Nâng cấp | Mua bằng tiền, mở độ sâu và thời gian lặn | Tally cộng vật liệu, T-VO là cổng dải | P2: nâng cấp phải tiêu đồ mang về |
| Hạng quán | Cooksta theo like, mở nhân viên | Hạng cảng theo đơn đủ, mở tàu và Shop | Cùng vai trò, gd-quan giữ luật |
| Thiếu tiền | Tiền có thể tụt vì chi phí vận hành | Không có chi phí duy trì (K17), Tally không giảm | Không phạt người nghỉ |

## 10. Câu hỏi mở

| Câu hỏi | Phương án đề xuất | Ai quyết |
|---|---|---|
| Chương 2 dài hơn giờ đặt ra <!--v:lech-ch2-->22%<!--/v--> | Giữ, tổng game trong mục tiêu. Muốn rút thì bớt 1 chuyến map nhánh chương 2 | GDM, gd-world |
| Nguồn RES-401 và RES-305 mỗi ngày có đủ cho khoảng 10 kiện CGO-411, CGO-511 mỗi ca không | gd-world và gd-combat đo số RES mỗi chuyến chương 4, 5 | gd-world, gd-combat |
| Xưởng cấp 2 ở chương 1 hay 2 | Chương 2 (giá khoang cấp 2). gd-quan ghi "MVP xưởng và cảng tới cấp 2": cảng cấp 2 là kệ kiện cấp 2 ở chương 1 | gd-quan |

## Số hiện hành đề xuất (GDM chép sang `so-hien-hanh.md`)

| Mục | Giá trị đề xuất | Nguồn |
|---|---|---|
| Tally mỗi GTĐ | 10 | GD-028 mục 2.1 |
| Thưởng đủ đơn | 25% | GD-028, gd-quan |
| Thưởng nhanh | 15% | GD-028, gd-quan |
| Hệ số ngân sách β | 0,40 | Sim GD-028, GDM nhận lại ở log 70 |
| Giờ mục tiêu chương 1 tới 5 trong công thức | 1,25, 2,75, 3,5, 3,0, 1,5 | GDM chốt chương 1, log 55 |
| Túi và bình bậc 0 tới 4 | Túi 80, 100, 126, 168, 216. Bình 330, 450, 600, 780, 1000 | GDM chốt, log 54 |
| Hệ số kiện co-op | 0,6 ở chương 1 và 2, 0,4 ở chương 3 tới 5 | gd-quan |
| k(N) phần thêm mỗi người | 0,30 ở dải Gần, 0,25 ở Giữa, 0,38 ở Xa | gd-world, map.md 3.8 |
| Điểm cảng mỗi đơn đủ | 2 nhân (N cộng 1) chia 2, thêm 1 nhân như thế khi nhanh, làm tròn lên | gd-quan đã nhận |
| Đơn một ca | Giá trị bằng 60% lượng hai chuyến của chương. 10 kiện mỗi ca một người, GTĐ một kiện bằng giá trị đơn chia 10 | gd-quan nhận giá trị. Cỡ kiện chờ gd-items |
| Ngưỡng điểm Hạng cảng 2 tới 8 | Bảng mục 3.5 | gd-quan đã nhận |
| ENG mở theo Hạng cảng | 3, 5, 7, 8 | GD-028 luật 9 |
| Đo được (trung bình, một người) | Chương 1 <!--v:gio-ch1-tb-->1,83<!--/v--> giờ, cả game <!--v:gio-game-tb-->13,4<!--/v--> giờ. Nhóm 4 xong game bằng <!--v:coop4-game-->73%<!--/v--> thời gian một mình. Thưởng chiếm <!--v:thuong-phan-->20%<!--/v--> thu Tally | Sim GD-028 |

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
| Thưởng đủ đơn, thưởng nhanh | tram-va-cang.md (gd-quan) | 25%, 15% | Không thấy vấn đề | 25%, 15% | Giữ |
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
<!--/khoi-->

## Điểm tự quyết

| # | Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|---|
| 1 | Đơn vị quy đổi | 10 Tally mỗi GTĐ | Số tròn, kiện thô đầu tiên giá <!--v:gia-cgo101-->140<!--/v-->, dễ đọc | Quy đổi một đổi một (giá lẻ thập phân) | Rẻ |
| 2 | Cách đặt giá Tally | Ngân sách chương neo thu nhập tham chiếu và ngày mục tiêu, một núm β | Mật độ dải Xa gấp <!--v:xa-gan-->6,7<!--/v--> dải Gần, giá mũ một hệ số làm Tally dư hàng chục lần (vòng 1) | Giá gốc nhân hệ số mũ theo chương | Rẻ |
| 3 | Giá kiện theo Hạng cảng | Không nhân | Hạng đã mở tàu và đơn giá trị cao, nhân thêm là vòng dương kép | Cộng 4% mỗi hạng | Rẻ |
| 4 | Nguồn Tally | Chỉ ca cảng | K18. Thưởng Tally từ quest làm người bỏ ca vẫn tiến | Thưởng quest người vớt | Rẻ |
| 5 | Cổng chương | Sửa khoang, ENG, chuyến map nhánh, sàn ngày truyện. T-VO không chặn chương (sửa sau QA GD-031) | Khớp `vat-pham.md` (UPG-ENV-1 mở ở chương 2) và K6 (thiếu cấp vẫn vào được, chỉ đắt) | T-VO là cổng chương, bắt mua mọi nâng cấp | Vừa |
| 6 | ENG mở theo Hạng | 3, 5, 7, 8 (hạng trần của chương) | gd-quan đã ghi hạng 3 và hạng 8, điền hai hạng giữa theo trần chương | Mở theo chương, không theo Hạng | Rẻ |
| 7 | Giờ từng chương | 1,25, 2,75, 3,5, 3,0, 1,5 | Khung chỉ đặt chương 1 và tổng. Chương 3 dài nhất vì dải Xa, sự cố và nhiều tàu. Chương 5 ngắn vì chỉ còn truyện | Chia đều | Rẻ |
| 8 | Độ dài một ngày | 2 chuyến cộng phút ca cảng của gd-tech cộng 3 phút, co-op thêm 5% mỗi người | Khớp khung mục 4 và mục 9 | Không tính thời gian chờ co-op | Rẻ |
| 9 | Ba kịch bản | Bảng 3.4 | Tệ là người mới hay ngạt và giao chậm, tốt là người tối ưu | Chỉ một kịch bản | Rẻ |
| 10 | Bộ đồ | Dùng 5 trục của `nguoi-choi.md` (T-OXY, T-VO, T-DAY, T-TUI, T-DUNGCU), vật liệu theo công thức gd-items | Hai file đang dùng hai bộ ID (UPG-OXY, BAG, THR, ENV và T-...), chọn bộ của chủ hệ thống bộ đồ | Bộ UPG của gd-items | Rẻ |
| 11 | Xưởng cấp 2 | Chương 2 | Bậc 2 bộ đồ là chương 2 | Chương 1 | Rẻ |
| 12 | Hàng mang sang chương mới | Giữ 30% giá trị | Hàng dải cũ vẫn bán được nhưng đơn ít đòi | Giữ 100% | Rẻ |

## Phản biện khung

| # | Điểm | Vấn đề | Bằng chứng | Phương án |
|---|---|---|---|---|
| 1 | Mục tiêu khung mục 9 "Tally từ ca cảng trên 80%" | Luôn đạt 100% vì K18 không cho nguồn Tally nào khác, chỉ số không đo gì | Bảng 8.2 | Đổi thành "Tally từ thưởng đủ đơn và nhanh chiếm 15 đến 25% thu" (đo việc người chơi có giao đủ đơn không), hoặc bỏ. GDM đã nhận |
| 2 | C8 và mục tiêu co-op | Hai mục tiêu co-op chỉ cùng đạt khi điểm cảng tăng theo quy mô đơn. C8 chưa nói | Bảng 6b, <!--v:coop4-diem-co-dinh-->78%<!--/v--> khi điểm cố định | Thêm vào C8: "điểm cảng của đơn tăng cùng quy mô đơn". GDM đã nhận |
| 3 | K19 sink của Tally | Chương 5 không còn sink, Tally dư | Bảng 8.2 | Chấp nhận, hoặc thêm một sink tùy chọn ở chương 5 (câu hỏi mở 1). GDM chấp nhận Tally dư, không thêm sink |

## Bàn giao

| Vai | Việc | Đọc |
|---|---|---|
| gd-quan | Đơn một ca theo bảng quy mô đơn mục 8.4, điểm cảng nhân quy mô đơn, ngưỡng Hạng cảng mục 3.5, ENG mở hạng 5 và 7, Xưởng cấp 2 ở chương 2 | Mục 2.2, 3.5, 6b, 8.4 |
| gd-items | Thống nhất ID nâng cấp bộ đồ với `nguoi-choi.md`. Thêm bộ vật liệu cho bậc 4 theo công thức của chính gd-items | Mục 3.2 |
| gd-character (qua GDM) | `nguoi-choi.md` 2.3 điểm 6: lồng ghim khi bị kéo về chỉ giữ 1 con, khớp luật 25 mới của gd-combat | Mục 8.3 |
| gd-tech | Schema đọc `ket-qua.json`. Báo khi sim chuyến đổi để chạy lại bảng 8.6 | Mục 6, 8.6 |
| gd-world, gd-character, gd-items | Chuyến kết thúc vì đầy túi quá sớm (mục 8.5). Cần chọn giữa túi lớn hơn, mật độ thấp hơn, hay nhặt chậm hơn để chuyến chương 1 dài 4 đến 6 phút | Mục 8.6 |
| gd-ux | Màn Shop và Upgrade hiện hai phần giá, điều kiện Hạng | Mục 2.2, 7 |

## Phụ lục

### Tally theo ngày, kịch bản trung bình, một người (một lượt, seed 20261120)

<!--khoi:tally-ngay-->
| Ngày | Chương | Nhặt cả ngày (GTĐ) | Tally thu ở ca cảng | Tally còn cuối ngày | Hạng cảng | Giờ chơi cộng dồn |
|---|---|---|---|---|---|---|
| 1 | 1 | 153 | 0 | 0 | 1 | 0,20 |
| 2 | 1 | 153 | 0 | 0 | 1 | 0,39 |
| 3 | 1 | 10 | 0 | 0 | 1 | 0,59 |
| 4 | 1 | 107 | 1311 | 11 | 1 | 0,84 |
| 5 | 1 | 107 | 1136 | 147 | 2 | 1,08 |
| 6 | 1 | 255 | 1311 | 47 | 2 | 1,33 |
| 7 | 1 | 255 | 1311 | 1358 | 3 | 1,58 |
| 8 | 1 | 255 | 1311 | 668 | 3 | 1,82 |
| 9 | 2 | 189 | 627 | 146 | 3 | 2,11 |
| 10 | 2 | 259 | 1664 | 659 | 3 | 2,39 |
| 11 | 2 | 259 | 2095 | 104 | 3 | 2,68 |
| 12 | 2 | 339 | 2872 | 1826 | 3 | 2,96 |
| 13 | 2 | 339 | 3273 | 499 | 4 | 3,24 |
| 14 | 2 | 349 | 3512 | 211 | 4 | 3,53 |
| 15 | 2 | 349 | 3621 | 31 | 4 | 3,81 |
| 16 | 2 | 823 | 3826 | 807 | 5 | 4,09 |
| 17 | 2 | 823 | 3826 | 1583 | 5 | 4,38 |
| 18 | 2 | 823 | 3826 | 3108 | 5 | 4,66 |
| 19 | 2 | 431 | 3826 | 6934 | 5 | 4,94 |
| 20 | 2 | 823 | 3826 | 3109 | 5 | 5,23 |
| 21 | 3 | 480 | 5639 | 848 | 6 | 5,55 |
| 22 | 3 | 664 | 6980 | 7828 | 6 | 5,87 |
| 23 | 3 | 867 | 8171 | 150 | 6 | 6,20 |
| 24 | 3 | 1615 | 8171 | 421 | 7 | 6,52 |
| 25 | 3 | 1615 | 8171 | 8592 | 7 | 6,84 |
| 26 | 3 | 93 | 8171 | 3563 | 7 | 7,17 |
| 27 | 3 | 1615 | 8171 | 2485 | 7 | 7,49 |
| 28 | 3 | 854 | 8171 | 10656 | 7 | 7,81 |
| 29 | 3 | 1615 | 8171 | 5627 | 7 | 8,14 |
| 30 | 3 | 1113 | 8171 | 13798 | 7 | 8,46 |
| 31 | 3 | 2134 | 8171 | 21970 | 7 | 8,78 |
| 32 | 3 | 1113 | 8171 | 3741 | 7 | 9,11 |
| 33 | 4 | 405 | 14036 | 1727 | 8 | 9,50 |
| 34 | 4 | 122 | 6275 | 8001 | 8 | 9,89 |
| 35 | 4 | 921 | 8664 | 615 | 8 | 10,27 |
| 36 | 4 | 921 | 9051 | 9667 | 8 | 10,66 |
| 37 | 4 | 1720 | 14036 | 4452 | 8 | 11,05 |
| 38 | 4 | 2975 | 14036 | 5638 | 8 | 11,44 |
| 39 | 4 | 2975 | 14036 | 19673 | 8 | 11,83 |
| 40 | 4 | 2975 | 14036 | 1609 | 8 | 12,22 |
| 41 | 5 | 850 | 16843 | 18452 | 8 | 12,68 |
| 42 | 5 | 2324 | 16843 | 35294 | 8 | 13,14 |
| 43 | 5 | 2324 | 16843 | 52137 | 8 | 13,61 |
<!--/khoi-->

### Sức mạnh theo chương (đầu vào cho PROCESSING)

<!--khoi:suc-manh-->
| Chương | Dải | Oxy (bậc theo chương) | Túi (Khối) | GTĐ một chuyến (gồm Driftlife) | Quy ra Tally | Ngân sách Tally của chương | Phút ra ngoài một ngày |
|---|---|---|---|---|---|---|---|
| 1 | Gần | 330 | 80 | 102 | 1021 | 5750 | 8,8 |
| 2 | Giữa | 450 | 100 | 319 | 3186 | 34350 | 10,8 |
| 3 | Xa | 600 | 126 | 779 | 7788 | 93650 | 13,0 |
| 4 | Xa | 780 | 168 | 1124 | 11235 | 96300 | 16,4 |
| 5 | Xa | 1000 | 216 | 1492 | 14923 | - | 20,8 |
<!--/khoi-->

### PROCESSING (tab Sheet, theo chương)

- Số túi và Oxy từng bậc ở bảng Sức mạnh theo chương ngay trên (do sim in), cột Sức mạnh tăng dưới đây chỉ ghi bậc lên theo bảng 3.2.

| Chương | Người chơi học gì | Mở tài nguyên | Mở map | Mở trang bị | Mở Driftlife | Sức mạnh tăng | Ý đồ |
|---|---|---|---|---|---|---|---|
| 1 | Bay, Oxy, nhặt, khoan, nạy, hạ, bắt sống loài nhỏ, sửa khoang, đóng kiện, ca cảng, mua nâng cấp đầu tiên | Tài nguyên dải Gần | Dải Gần, Station Cinder | Dùi xung, Súng lưới, Bộ kích nguồn, bậc 1 bộ đồ | 4 loài Gần, BS-1 | T-TUI và T-OXY lên bậc 1, T-DAY bậc 1, thêm ô dụng cụ (quest) | Dạy trọn vòng lặp trong 2 giờ |
| 2 | Nuôi, bắt loài lớn, nghiên cứu, Skiff | Tài nguyên dải Giữa | Dải Giữa, Wick, Lantern | Súng gây mê, Phao kéo, Kim sinh thiết, Lồng mẫu, bậc 2 | Loài Giữa, BS-2 | T-TUI, T-OXY, T-DAY lên bậc 2, T-VO bậc 1, thêm ô dụng cụ | Nhịp chậm lại, trạm lớn lên rõ |
| 3 | Sự cố trong ca, kẻ địch có vũ khí, nhiều bến | Tài nguyên dải Xa | Dải Xa, Flint, Veyl Waypost | Máy quét xung, bậc 3 | Loài Xa, The Wardens, BS-3 | T-TUI, T-OXY, T-DAY lên bậc 3, T-VO bậc 2 | Chương dài nhất, giữa game |
| 4 | Map nhánh lớn nhiều chuyến | Linh kiện Cradle | Bên trong Cradle | Máy cắt thân tàu, bậc 4 | BS-4 | T-TUI, T-OXY lên bậc 4, T-VO bậc 3 | Lộ sự thật, chuẩn bị trận cuối |
| 5 | Trận cuối nhiều chuyến | Linh kiện Warden | Warden Rig | Không | BS-5 | Không thêm | Kết, Tally không còn vai trò |

## Lịch sử thay đổi

| Ngày | Thay đổi | Lý do | Ai |
|---|---|---|---|
| 2026-11-20 | Tạo bản đủ, sim 3 vòng | GD-028 | gd-economy |
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
