# GDD hệ thống: Combat, bắt sống, Driftlife, The Wardens, boss

Project: game-moi (The Novent) | Chủ sở hữu: gd-combat | Trạng thái: bản đủ, nháp chờ QA (2026-11-20) | Nguồn: `../00-khung-game.md` (K1, K2, K4, K5, K7, K8, K9, K14, K16, C1 đến C8), brief `../../briefs/dot1-gdd-he-thong.md` GD-024

Tên hiển thị đã chốt cho The Novent. Dân thu hồi của The Veyl gọi Driftlife theo hình dáng hoặc hành vi. Boss Driftlife dùng biệt danh của dân thu hồi. Đơn vị The Wardens dùng tiền tố Warden và chức năng. Cradle Custodian mang tên hệ an ninh của Cradle. Số là khởi điểm ước trừ chỗ ghi nguồn sim (mục 3.8, 6b lấy từ sim của gd-tech). Đề sim ở mục 8. Nhãn `MVP` hoặc `Sau MVP` theo khung mục 12.
Đơn vị lấy từ `nguoi-choi.md`:

| Đại lượng | Đơn vị |
|---|---|
| Oxy | điểm, 1 điểm bằng 1 giây hao nền |
| Khoảng cách | u, nhân vật cao 1 u |
| Sát thương lên người chơi | điểm Oxy, trúng 8 nghĩa là mất 8 giây thở |

## Danh mục sơ bộ (cho vai khác đọc sớm)

gd-combat giữ tên Driftlife, kẻ địch, boss. Nhóm rơi ghi theo từ điển khung, tên vật phẩm cụ thể do gd-items đặt.

| ID | Tên | Dải | Cỡ | Kiểu | Bắt sống | Nuôi | Rơi khi hạ (nhóm) | Nhãn |
|---|---|---|---|---|---|---|---|---|
| DL-G01 | Driftmoth | Gần | S | Hiền, trôi thành đám | Có | Có | Mô sinh học Gần, Đặc sản Driftmoth (mẫu mô, phấn sinh học) | MVP |
| DL-G02 | Skitter Ray | Gần | S | Chạy trốn | Có | Có | Mô sinh học Gần, Đặc sản Skitter Ray (mẫu màng) | MVP |
| DL-G03 | Latchjaw | Gần | M | Phục kích, bám mảnh vỡ | Có (cạy khi bất lực) | Không | Mô sinh học Gần, Đặc sản Latchjaw (vỏ khoáng, tuyến keo) | Sau MVP |
| DL-G04 | Sting Krill | Gần | S | Đi bầy | Có | Có | Mô sinh học Gần, Đặc sản Sting Krill (vỏ giáp nhỏ) | MVP |
| DL-G05 | Arc Eel | Gần | M | Giữ lãnh thổ | Có (chỉ khi ngủ, Sau MVP) | Có (Sau MVP) | Mô sinh học Gần, Đặc sản Arc Eel (tuyến điện, mẫu mô) | MVP (chỉ hạ) |
| DL-M01 | Shepherd Whale | Giữa | L | Hiền khổng lồ, không hạ được | Không, chỉ sinh thiết | Không | Không hạ được | Sau MVP |
| DL-M02 | Lumen Jelly | Giữa | M | Hiền, chạm thì bỏng | Có | Có | Mô sinh học Giữa, Đặc sản Lumen Jelly (gel phát quang) | Sau MVP |
| DL-M03 | Orebiter | Giữa | M | Giữ lãnh thổ, ăn khoáng | Có | Có | Mô sinh học Giữa, Đặc sản Orebiter (khoáng tinh, mẫu mô) | Sau MVP |
| DL-M04 | Needlefin | Giữa | S | Đi bầy, săn mồi | Có | Có | Mô sinh học Giữa, Đặc sản Needlefin (gai, vỏ giáp nhỏ) | Sau MVP |
| DL-M05 | Gulper | Giữa | L | Săn mồi, nuốt | Không, chỉ sinh thiết | Không | Mô sinh học Giữa, Đặc sản Gulper (túi tiêu hóa (chứa phế liệu, linh kiện nó đã nuốt)) | Sau MVP |
| DL-X01 | Prism Wisp | Xa | S | Chạy trốn, ẩn trong mây khí | Có | Có | Mô sinh học Xa, Đặc sản Prism Wisp (tinh thể lăng kính) | Sau MVP |
| DL-X02 | Mirror Mantis | Xa | M | Phục kích, phản xạ đạn mặt trước | Có (chỉ khi ngủ) | Không | Mô sinh học Xa, Đặc sản Mirror Mantis (vỏ gương, mẫu mô) | Sau MVP |
| DL-X03 | Storm Siphon | Xa | L | Giữ lãnh thổ, hút Oxy | Không, chỉ sinh thiết | Không | Mô sinh học Xa, Đặc sản Storm Siphon (lõi khí, mẫu mô) | Sau MVP |
| DL-X04 | Shardbrood Queen | Xa | L | Đẻ bầy liên tục | Không, chỉ sinh thiết | Không | Mô sinh học Xa, Đặc sản Shardbrood Queen (túi trứng, mẫu mô) | Sau MVP |
| DL-X05 | Shardbrood Hatchling | Xa | S | Đi bầy, con của DL-X04 | Có | Có | Mô sinh học Xa, Đặc sản Shardbrood Hatchling (vỏ giáp nhỏ) | Sau MVP |
| WD-01 | Warden Harvester | Xa, từ chương 3 | M | Máy The Wardens bắt Driftlife | Không (máy) | Không | Linh kiện Warden, thả Driftlife đang bị giữ | Sau MVP |
| WD-02 | Warden Lancer | Xa, từ chương 3 | M | Lính có khiên trước | Không | Không | Linh kiện Warden | Sau MVP |
| WD-03 | Warden Snarer | Xa, từ chương 3 | M | Lính bắn lưới vào người chơi | Không | Không | Linh kiện Warden, lưới năng lượng | Sau MVP |
| WD-04 | Warden Collector | Xa, từ chương 3 | Boss nhỏ | Tàu thu gom, thả drone | Không | Không | Linh kiện Warden | Sau MVP |
| BS-1 | Scrapmaw | Map nhánh Station Cinder (Gần), khoang máy C6 sau cửa D1 | Boss | Driftlife làm tổ quanh lõi năng lượng | Hai cách kết: hạ hoặc xua đi | Không | Theo cách kết | MVP |
| BS-2 | Tempest Gulper | Map nhánh Station Lantern (Giữa), vành ngoài trạm | Boss | Gulper đầu đàn vây Lantern, cắt đường tiếp tế | Hai cách kết | Không | Theo cách kết | Sau MVP |
| BS-3 | Warden Reaper | Map nhánh Station Flint (Xa), khoang hàng bị biến thành trạm thu, nơi có manh mối cú lật Driftlife | Boss | Máy săn bắt Driftlife của quân The Wardens | Hạ | Không | Linh kiện Warden | Sau MVP |
| BS-4 | Cradle Custodian | Map nhánh Cradle Interior (Xa), Lõi máy | Boss | Hệ an ninh Cradle bị The Wardens cài lại | Hạ | Không | Linh kiện Cradle | Sau MVP |
| BS-5 | Daskel | Map nhánh Warden Rig (Xa), Command Deck | Boss | Độc tài của Sennar, đứng đầu The Wardens (tên của gd-story). Tự tới bãi vỡ để bắt Sevra Ilvane | Khuất phục và bắt giữ, không hạ chết | Không | Không rơi trực tiếp, vật truyện mở sau trận theo `vat-pham.md` và `cot-truyen.md` | Sau MVP |

Dụng cụ combat theo `vat-pham.md` (gd-items giữ danh mục và bậc, gd-combat giữ hành vi và chỉ số combat): Lao từ TOL-211, Dùi xung TOL-201, Súng lưới TOL-202 (tốn Lưới cuộn CON-102), Súng gây mê TOL-203 (tốn Ống gây mê CON-103), Phao kéo CON-106, Kim sinh thiết CON-107, Lồng mẫu TOL-501. Lao từ và Dùi xung dùng cooldown. Dụng cụ không có độ bền.

### Điểm sinh và rơi (cho gd-world, gd-items)

Thứ tự ID vật phẩm của gd-items: số loài trong dải theo cột "Số gd-items". Ví dụ DL-G04 là loài thứ 3 của dải Gần nên dùng SMP-113, LIV-113, BIO-113.

| ID | Số gd-items | Kiểu sinh | Số con mỗi điểm sinh | Điểm neo | Nguyên liệu chung khi hạ (SMP-101, 201, 301) | Đặc sản khi hạ (xác suất) | Khi bắt hoặc sinh thiết |
|---|---|---|---|---|---|---|---|
| DL-G01 | 111 | Đàn | 4 đến 6 | Quanh mảnh vỡ nhỏ | 1 | 30% | LIV-111 |
| DL-G02 | 112 | Đơn | 1 đến 2 | Không | 1 | 40% | LIV-112 |
| DL-G04 | 113 | Đàn | 5 đến 8 | Không | 1 mỗi con | 20% mỗi con | LIV-113 |
| DL-G05 | 114 | Đơn | 1 | Xác có điện, cáp chập (H02) | 2 | 60% | LIV-114 |
| DL-G03 | 115 (Sau MVP) | Đơn | 1 | Bám mảnh vỡ cỡ vừa, trông như vật salvage | 2 | 60% | LIV-115 |
| DL-M01 | 211 | Đơn, kèm 1 đàn DL-M02 bơi theo | 1 | Không | Không hạ được | Không | Sinh thiết 211 |
| DL-M02 | 212 | Đàn | 3 đến 5 | Không | 2 | 40% | LIV-212 |
| DL-M03 | 213 | Đơn | 1 | Thiên thạch khoáng | 2 | 60% | LIV-213 |
| DL-M04 | 214 | Đàn | 8 đến 12 | Không | 1 mỗi con | 15% mỗi con | LIV-214 |
| DL-M05 | 215 | Đơn | 1 | Không | 4 | 100%, cộng 3 đến 5 phế liệu và linh kiện ngẫu nhiên của dải | Sinh thiết 215 |
| DL-X01 | 311 | Đàn | 2 đến 3 | Trong mây khí | 1 | 50% | LIV-311 |
| DL-X02 | 312 | Đơn | 1 | Bám mảnh vỡ | 2 | 60% | LIV-312 (bắt khi ngủ, không nuôi, chỉ nghiên cứu) |
| DL-X03 | 313 | Đơn | 1 | Một vùng cố định, không sinh hazard khác trong 8 u | 4 | 100% | Sinh thiết 313 |
| DL-X04 | 314 | Tổ (mẹ và 3 con lúc sinh) | 1 mẹ | Tổ trên xác lớn | 4 | 100% | Sinh thiết 314 |
| DL-X05 | 315 | Đàn, hoặc sinh từ tổ DL-X04 | 4 đến 6 | Không | 1 mỗi con | 20% mỗi con | LIV-315 |

Kết nhanh (hạ con đang bất lực) giữ nguyên số lượng, chỉ nâng sao. Mẫu sinh thiết của loài L thuộc nhóm BPS cùng số loài (BPS-211, BPS-215, BPS-313, BPS-314), vào túi, luôn 3 sao.

| Đơn vị The Wardens | Đứng hay tuần tra | Cách sinh |
|---|---|---|
| WD-01 Warden Harvester | Tuần tra giữa các đàn Driftlife | Theo cặp với WD-03, hoặc do WD-04 thả ra |
| WD-02 Warden Lancer | Đứng cố định canh trạm thu hoặc lối vào khu của The Wardens | 1 đến 2 mỗi điểm |
| WD-03 Warden Snarer | Tuần tra | Đi cùng 1 WD-01 |
| WD-04 Warden Collector | Đi theo đường cố định băng qua dải Xa, là sự kiện | Tối đa 1 mỗi chuyến |

| Boss | Chương | Nơi (gd-world, gd-story) | Rơi khi hạ | Rơi khi xua đi |
|---|---|---|---|---|
| BS-1 Scrapmaw | 1 | Station Cinder, khoang máy C6 sau cửa D1 | SMP-191 Hạch thủ lĩnh Gần, cộng 5 SMP-101 | SMP-192 Mẫu boss Gần, cộng 2 SMP-101 |
| BS-2 Tempest Gulper | 2 | Station Lantern, vành ngoài trạm | SMP-291 Đặc sản Tempest Gulper, cộng phế liệu nó đã nuốt | SMP-292 Mẫu boss Giữa |
| BS-3 Warden Reaper | 3 | Station Flint, khoang hàng thành trạm thu | RES-305 Linh kiện Warden | Không có xua đi |
| BS-4 Cradle Custodian | 4 | Cradle Interior, Lõi máy | RES-401 Linh kiện Cradle | Không có xua đi |
| BS-5 Daskel | 5 | Warden Rig, Command Deck | Không rơi trực tiếp, vật truyện mở sau trận theo `vat-pham.md` và `cot-truyen.md` | Không có xua đi. Kết là khuất phục và bắt giữ |

## Tóm tắt

Ngoài không gian người chơi gặp Driftlife (sinh vật bản địa, sinh lại mỗi chuyến) và ở nửa sau game gặp The Wardens. Combat là cách lấy mẫu và giữ Oxy. Mỗi con Driftlife cho ba lựa chọn: bắt sống, hạ hoặc né. Bắt sống luôn đáng hơn hạ (K9) nhưng tốn công, tốn vật tiêu hao, chiếm chỗ trong Lồng mẫu. Tầng: lõi. Ưu tiên: bản đầu cho MVP (các loài dải Gần và boss chương đầu), đầy đủ cho cả game. Phụ thuộc: `nguoi-choi.md` (Oxy, lướt, túi), `vat-pham.md` (dụng cụ, rơi), `map.md` (điểm sinh, phòng boss), `tram-va-cang.md` (nuôi, sự cố).

## Hiện hành

- Sát thương lên người chơi trừ thẳng vào Oxy, kèm đẩy lùi và 0,8 giây miễn sát thương. Không có thanh máu riêng.
- Ngắm tự do bằng chuột hoặc cần phải gamepad, không khóa mục tiêu, gamepad có hỗ trợ ngắm nhẹ.
- Driftlife có Sinh lực, thanh Choáng và thanh Mê. Choáng nhanh và ngắn (4 giây), ngủ chậm và dài (12 giây). Lặp lại thì yếu dần (DR).
- Bắt sống theo cỡ: S bằng Súng lưới hoặc tay khi bất lực (từ chương 1, MVP), M bằng Phao kéo khi bất lực, L chỉ lấy mẫu sinh thiết (từ chương 2). Boss Driftlife có hai cách kết: hạ hoặc xua đi.
- Chất lượng mẫu sống 1 đến 3 sao theo Sinh lực còn lại lúc bắt. Hạ cho nguyên liệu 1 sao, hạ khi đang bất lực cho 2 sao.
- 15 loài Driftlife (5 mỗi dải), 4 đơn vị The Wardens, 5 boss (1 mỗi chương, chỉ ở map nhánh).
- Co-op: Sinh lực, ngưỡng choáng và ngưỡng mê tăng theo số người. Sát thương lên người chơi không tăng. Mỗi người chơi có vé tấn công riêng nên áp lực mỗi người giữ nguyên.

## 1. Mục đích với người chơi

- Cảm giác: tôi là người sống sót khéo tay: đọc con vật, chọn đúng dụng cụ, lấy thứ cần với ít Oxy nhất.
- Quyết định chính mỗi lần gặp Driftlife: bắt sống (giá trị cao, tốn công, phải kéo lồng mẫu về), hạ (nhanh, gọn túi, giá trị thấp hơn), hay né (giữ Oxy cho việc khác).
- Pillar phục vụ: P1 (mỗi đòn trúng là mất giây thở, nên đánh hay né là quyết định Oxy). P2 (mẫu sống thành con nuôi, nghiên cứu, đơn cảng giá cao, nhìn thấy trên trạm). P3 (mọi luật đúng 1 đến 4 người, có bạn thì chia vai lùa và bắt). P4 (The Wardens và dấu săn bắt trên Driftlife kể chuyện qua thứ người chơi gặp).
- 30 giây đầu combat (chương 1, chuyến 1): một đám Driftmoth trôi quanh mảnh vỡ, không đánh. Người chơi bắn Lao từ thử, con trúng nổ ra mẫu mô. Vài giây sau một Arc Eel sáng lên báo trước rồi phóng điện, người chơi mất vài điểm Oxy và thấy thanh Oxy tụt.

## 2. Luật

### 2.1 Combat chung

1. (MVP) Sát thương lên người chơi trừ vào Oxy của người đó (K1). Không có thanh máu riêng.
2. (MVP) Người chơi trúng đòn thì vào trạng thái Trúng đòn: bị đẩy lùi theo hướng đòn, mất điều khiển 0,25 giây, rồi được miễn sát thương 0,8 giây tính từ lúc trúng. Trong 0,8 giây đó đòn khác trúng vẫn đẩy lùi nhưng không trừ Oxy.
3. (MVP) Trúng đòn hủy mọi thao tác giữ phím đang làm: Kích Recall (K4), Tương tác bắt, Kim sinh thiết, cạy. Dụng cụ đang nạp không mất đạn.
4. (MVP) Lướt (thao tác của gd-character) có 0,2 giây đầu miễn sát thương. Đây là cách né chủ động duy nhất.
5. (MVP) Ngắm tự do: chuột chỉ hướng bắn (bàn phím chuột), cần phải chỉ hướng bắn (gamepad). Không khóa mục tiêu. Gamepad có hỗ trợ ngắm: đạn lệch tối đa 6 độ về mục tiêu gần tâm ngắm nhất trong tầm.
6. (MVP) Không có sát thương lên đồng đội. Dùi xung, Súng lưới, Súng gây mê không tác dụng lên người chơi. Lao từ trúng đồng đội thì móc dây và kéo đồng đội về phía người bắn, không trừ Oxy.
7. (MVP) Trong trạm không dùng được dụng cụ combat. Dụng cụ chỉ hoạt động ngoài không gian và trong map nhánh.
8. (MVP) Mọi đòn của Driftlife và The Wardens có ba pha: Báo trước, Đánh, Hồi. Báo trước có cả hình và tiếng. Báo trước tối thiểu 0,7 giây với đòn hẹp trừ dưới 15 điểm Oxy, 0,8 giây với đòn hẹp từ 15 điểm trở lên, 1,0 giây với đòn vùng bán kính 2 đến 3 u, 1,3 giây với đòn vùng bán kính trên 3 đến 4 u. Vùng lớn hơn 4 u phải có cách chống khác ngoài bay ra (bám mảnh vỡ, chỗ núp). Ý đồ: mọi đòn đều né được bằng bay thường, lướt là cách né dư dả, không bắt buộc (prototype bay của gd-tech: bay ra khỏi đòn hẹp cần khoảng 0,67 giây, khỏi vùng bán kính 2,5 u cần 0,92 giây, lướt ra cần 0,46 giây). Vùng hút của Storm Siphon chống bằng bám mảnh vỡ, không bằng bay ra. Kẻ địch ở ngoài màn hình của người bị nhắm mà ra đòn thì báo trước có thêm chỉ báo ở mép màn (mũi tên chỉ hướng và âm định hướng), hiện ngay từ đầu pha Báo trước, và pha Báo trước không được ngắn hơn mức tối thiểu ở trên tính từ lúc chỉ báo hiện. Hazard từ ngoài màn theo cùng luật này ở `map.md` (gd-world). Ngoại lệ: sát thương tiếp xúc khi người chơi tự lao vào con vật (Lumen Jelly, gai) không cần báo trước nhưng tối đa 5 điểm mỗi lần.
9. (MVP) Vé tấn công: mỗi người chơi có 2 vé ở dải Gần, 3 vé ở dải Giữa và Xa. Một kẻ địch muốn ra đòn nhắm vào người chơi nào phải giữ một vé của người đó. Hết vé thì kẻ địch vòng quanh ở khoảng cách 4 u chờ. Đòn tiếp xúc và đòn vùng không cần vé.
10. (MVP) Chọn mục tiêu: kẻ địch nhắm người gây sát thương, choáng hoặc mê cho nó gần nhất trong 3 giây vừa qua. Không có thì nhắm người chơi gần nhất trong vùng phát hiện. Ra khỏi vùng bỏ đuổi thì quay về chỗ cũ. Người chơi đang Ngạt hoặc Được cứu không bị nhắm tới và không nhận sát thương, kể cả đòn vùng (theo `nguoi-choi.md` 2.3). Kẻ địch đang nhắm người đó trả vé và chọn lại mục tiêu theo luật này, không còn ai thì về Trôi.
11. (Sau MVP) Driftlife và The Wardens thù nhau: Driftlife kiểu Giữ lãnh thổ và Săn mồi tấn công đơn vị The Wardens trong vùng phát hiện, ưu tiên hơn người chơi.

### 2.2 Choáng và Mê

12. (MVP) Mỗi Driftlife có ba chỉ số: Sinh lực, Ngưỡng choáng, Ngưỡng mê. Sinh lực về 0 thì bị hạ.
13. (MVP) Dùi xung cộng điểm vào thanh Choáng. Thanh đầy thì con vật vào trạng thái Choáng 4 giây. Không bị trúng thêm trong 1 giây thì thanh Choáng tụt 20% ngưỡng mỗi giây. Dùi xung nóng tính riêng cho từng người cầm (bảng 3.3), người này nóng không chặn người khác.
14. (Sau MVP, mở cùng Súng gây mê ở chương 2) Súng gây mê cộng điểm vào thanh Mê sau 1,5 giây kể từ lúc trúng. Thanh đầy thì con vật vào trạng thái Ngủ 12 giây. Thanh Mê tụt 10% ngưỡng mỗi giây sau 3 giây không trúng thêm.
15. (MVP) Choáng và Ngủ gọi chung là Bất lực. Con bất lực không di chuyển chủ động, không ra đòn, trôi chậm theo quán tính còn lại.
16. (Sau MVP) Sát thương lên con đang Ngủ đánh thức nó ngay. Đòn đầu tiên đánh thức gây gấp đôi sát thương. Sát thương lên con đang Choáng không làm nó tỉnh.
17. (MVP) Giảm dần (DR): mỗi con có hai hệ số riêng, một cho Choáng và một cho Mê, khởi đầu 1. Sau khi tỉnh khỏi Choáng thì hệ số Choáng nhân 1,5, sau khi tỉnh khỏi Ngủ thì hệ số Mê nhân 1,5, trần 3. Ngưỡng hiệu lực bằng ngưỡng gốc nhân hệ số của loại đó. Vừa tỉnh khỏi bất kỳ loại nào thì con vật miễn cả choáng lẫn mê trong 2 giây. Hệ số của một loại về 1 khi đã qua 20 giây kể từ lần tỉnh gần nhất khỏi loại đó.
18. (MVP) Loài có thuộc tính "miễn choáng" thì Dùi xung không cộng thanh Choáng. Loài "miễn mê" tương tự với Súng gây mê. Máy The Wardens miễn mê.

### 2.3 Bắt sống

19. Bắt sống theo cỡ. Cỡ S có từ chương 1 (MVP, log GDM dòng 49). Cỡ M, L và Xua đi boss chương 2 trở đi (Sau MVP), trừ Xua đi BS-1 (MVP, không cần dụng cụ):

| Cỡ | Cách bắt | Cần Bất lực trước không | Kết quả |
|---|---|---|---|
| S (MVP) | Súng lưới trúng | Không | Mẫu sống vào Lồng mẫu người bắn kéo theo |
| S (MVP) | Tương tác giữ 1,5 giây | Có | Mẫu sống vào Lồng mẫu người tương tác kéo theo. Chậm hơn Súng lưới nhưng không tốn vật tiêu hao |
| M | Gắn Phao kéo (Tương tác giữ 1 giây) | Có | 3 giây sau phao đưa con vật về kho trạm, không vào túi |
| M (DL-G03) | Cạy (Tương tác giữ 1,5 giây) rồi gắn Phao kéo | Có | Như trên |
| L | Không bắt sống. Kim sinh thiết (Tương tác giữ 2 giây) | Có, trừ loài hiền | Mẫu sinh thiết vào túi (vật nhỏ). Con vật không bị hạ, tỉnh dậy và bỏ đi |
| Boss Driftlife | Xua đi (mục 2.6) | Theo pha | Mẫu boss vào kho khi về trạm |

20. (MVP) Súng lưới bắt tối đa 3 con cỡ S trong vùng nổ bán kính 1,5 u. Súng lưới trúng con cỡ M trở lên thì quấn nó 2 giây (tốc độ giảm 70%) và không bắt.
21. (MVP) Mẫu sống không vào túi (theo `vat-pham.md`: mẫu sống là vật kéo). Mẫu sống cỡ S vào Lồng mẫu: lồng mở ra khi bắt con đầu tiên, chứa tối đa 3 con S, người bắt kéo lồng theo trạng thái Kéo vật của gd-character. Mỗi người kéo tối đa 1 lồng. Lồng thuộc lớp vật kéo Nhẹ của `nguoi-choi.md` (không làm chậm, không chiếm túi). Cái giá của bắt sống cỡ S vì vậy chỉ là Lưới cuộn hoặc thời gian bắt tay, và giới hạn 3 con mỗi người mỗi chuyến.
22. (MVP) Chất lượng mẫu sống theo Sinh lực còn lại lúc bắt: từ 70% trở lên là 3 sao, từ 30% tới dưới 70% là 2 sao, dưới 30% là 1 sao. Mẫu sinh thiết luôn 3 sao.
23. (MVP) Nguyên liệu khi hạ: 1 sao. Hạ con đang Bất lực bằng Kết nhanh cho 2 sao. Kết nhanh là thao tác riêng, không chung phím với Tương tác (giữ 0,6 giây, không cần dụng cụ, phím do gd-ux đặt ở `ux-ui.md` 2.9), để trên cùng một con bất lực người chơi luôn chọn rõ bắt hay hạ. Kết nhanh có từ MVP vì không cần dụng cụ bắt sống.
24. (MVP) K9 đo bằng một thước duy nhất: giá trị một mẫu sống, sau khi trừ vật tiêu hao kỳ vọng mỗi lần bắt, chia giá trị một lần hạ cùng loài, mục tiêu 1,5 đến 2 lần (khung mục 9), gd-items kiểm bằng script của họ. Giá trị mẫu sống 1 sao không thấp hơn nguyên liệu 2 sao cùng loài. Theo K9 sửa lần 5 (log GDM dòng 66), K9 chỉ áp cho loài bắt sống được (cỡ S, M). Mẫu sinh thiết cỡ L đứng ngoài K9, dùng cho nghiên cứu (mục 9). Tỉ lệ "ròng mỗi phút" ở đề sim S2 là thước đo khác, chỉ để canh chiến lược trội, không phải K9.
25. (MVP) Mẫu sống trong lồng không chết trong chuyến. Người chơi ngạt và bị kéo về (K2) được ghim Lồng mẫu làm món giữ lại, nhưng chỉ giữ 1 con trong lồng: con có sao cao nhất, bằng sao thì con bắt trước. Các con còn lại mất cùng túi. Lý do: lồng đầy 3 con trị hơn cả túi đầy chương 1, giữ cả lồng thì ngạt gần như không mất gì (`kinh-te-tien-trinh.md` 8.3). Theo K27, người đang Ngạt không trao và không thả được Lồng mẫu: khi vào Ngạt, dây lồng nhả khỏi người nhưng lồng bị khóa tại chỗ, đồng đội không kéo đi được. Người đó được cứu thì Tương tác để nối lại. Bị kéo về thì lồng theo luật ghim ở trên, lồng không ghim thì mất. Rời phiên hoặc mất kết nối quá 15 giây giữa chuyến tính như bị kéo về (C10), lồng xử như trên.
26. (MVP) Hạ hay bắt đều cho mẫu dùng được ở trạm (P2).

### 2.4 Driftlife chung

27. (MVP) Loài gắn với dải (K5). Một loài chỉ sinh ở dải của nó và ở map nhánh trong dải đó.
28. (MVP) Driftlife sinh lại mỗi chuyến, không cạn (K8). Không có luật phạt khi hạ nhiều.
29. (MVP) Mỗi loài có đúng một kiểu hành vi chính trong 6 kiểu: Hiền, Chạy trốn, Giữ lãnh thổ, Săn mồi, Đi bầy, Phục kích. Kiểu quyết định nó làm gì khi thấy người chơi (bảng mục 2.7).
30. (Sau MVP, chương 3) Một phần cá thể ở dải Giữa và Xa mang Dấu săn bắt (vết lưới năng lượng và vết cắt của quân The Wardens, hình art). Ở dải Xa dấu luôn có: mọi DL-X05 Shardbrood Hatchling mang thẻ đánh dấu của quân The Wardens, mọi DL-X04 Shardbrood Queen có sẹo cắt mô theo quy luật. Dấu này không đổi chỉ số, chỉ là chi tiết truyện cho cú lật Driftlife (B6 sửa lần 6): bằng chứng chế độ của Daskel cướp bóc tràn lan, trái với hình ảnh chúng tự dựng. Manh mối chính vẫn ở map nhánh (K7).

### 2.5 The Wardens

31. (Sau MVP) The Wardens là chế độ và quân đội của Daskel, độc tài của Sennar. Lính là người Sennari mặc giáp chế độ, không phải cả chủng tộc (log GDM dòng 84). Quân The Wardens xuất hiện ở dải Xa từ chương 3, theo sự kiện do gd-world đặt (điểm sinh SP-W). Khác Driftlife ở 5 điểm: dùng vũ khí bắn xa, phối hợp nhóm (một đơn vị gọi thêm drone), có khiên hướng, không bắt sống được, miễn mê.
32. (Sau MVP) Hạ đơn vị The Wardens cho RES-305 Linh kiện Warden và RES-301 Hợp kim Warden. Đây là nguồn duy nhất của hai vật phẩm này.
33. (Sau MVP) Warden Harvester đang giữ một Driftlife trong lưới năng lượng. Hạ drone thì con Driftlife được thả, ở trạng thái Choáng 6 giây, bắt sống được ngay.
34. (Sau MVP) Warden Snarer bắn lưới lên người chơi: người trúng bị trói tối đa 2 giây rồi lưới tự tan, không bay được, mỗi giây trừ 2 điểm Oxy. Thoát sớm bằng Lướt 3 lần liên tiếp, hoặc đồng đội bắn Lao từ vào lưới để cắt. Người đang kéo vật lớp Nặng (không Lướt được theo `nguoi-choi.md`) thì chờ lưới tự tan, hoặc thả vật rồi Lướt. Một mình luôn thoát được (C1).

44. (Sau MVP, chương 3) Kẻ địch có vũ khí của chương 3 lần đầu xuất hiện đủ đội hình là toán bắt cóc Sevra Ilvane do Maro chỉ huy, áp mạn tàu TA04 (Ilsume) trong map nhánh đóng chương 3 (mốc C3.8 của gd-story, nơi do gd-world chốt). Toán chỉ gồm đơn vị sẵn có (bảng dưới), không thêm loại mới. Maro là nhân vật truyện, không chiến đấu, rút lên tàu TA08 khi toán bị hạ. Hạ hết toán thì gỡ được kén thoát hiểm của Sevra để kéo về Ember, qua cửa khí hoặc bằng Recall Beacon (mục 2.8). Toán bắt cóc không sinh lại sau khi đã cứu Sevra.

| Toán bắt cóc Sevra Ilvane | Số lượng |
|---|---|
| WD-02 Warden Lancer | 2 |
| WD-03 Warden Snarer | 1 |
| WD-01 Warden Harvester | 2 |

### 2.6 Boss

35. (MVP cho BS-1) Mỗi chương có đúng một boss, chỉ ở map nhánh (K7). Boss không sinh lại. Đánh lại boss đã kết không có. Trạng thái boss đã kết (hạ hay xua đi) ghi vào lần tự lưu sau chuyến (K23). Boss chưa kết thì không lưu tiến độ trận, lần sau vào đánh lại từ đầu.
36. (MVP) Cửa phòng boss không khóa. Boss và mọi Driftlife do boss sinh ra trong trận (ví dụ Sting Krill do Scrapmaw phun) không rời phòng boss, để beacon cố định ngoài phòng luôn kích được. Lối đi tiếp phía sau phòng (BS-1: vách C6 sang C7) đóng tới khi boss kết thúc, theo `map.md`. Người chơi rút ra được bất cứ lúc nào bằng lối vào rồi kích Recall Beacon cố định đặt ngay ngoài phòng, phía lối vào (luật 2.5.7 của `map.md`, BS-1: beacon B3 trong C2, cách cửa D1 vài u). Người ngạt trong phòng theo K2. Khi không còn người chơi nào trong phòng quá 10 giây, hoặc cả nhóm đã về trạm, boss hồi đầy và về pha 1.
37. (MVP) Boss Driftlife (BS-1, BS-2) có hai cách kết. Hạ: Sinh lực về 0, rơi nhiều nguyên liệu. Xua đi: làm boss Bất lực ở pha cuối rồi Tương tác giữ 3 giây ở điểm yếu (ngắt khỏi tổ hoặc tiêm an thần, theo bảng 3.7) thì boss bỏ đi, rơi một Mẫu boss. Công dụng của Mẫu boss theo `vat-pham.md` (SMP-192, SMP-292: sửa khoang dẫn đường, thay được vật rơi khi hạ). Vật rơi boss chưa có chỗ dùng ở chương đang chơi thì nằm trong kho, trạm báo "dùng được khi mở khoang dẫn đường". Cả hai cách đều mở tiếp tiến trình chương. Boss miễn Dùi xung và Súng gây mê, chỉ Bất lực theo cơ chế của từng pha (bảng 3.7).
38. (Sau MVP) Boss The Wardens (BS-3 đến BS-5) chỉ có một cách kết. Với BS-5 Daskel, Sinh lực về 0 nghĩa là Daskel gục và bị bắt, giao cho The Kindling, không hạ chết (mốc C5.5 của gd-story).
39. (MVP) Boss có pha. Chuyển pha theo mốc Sinh lực. Lúc chuyển pha boss miễn sát thương 2 giây và có báo trước rõ.

### 2.7 Hành vi theo kiểu

| Kiểu | Khi chưa thấy người | Khi thấy người (vùng phát hiện) | Khi bị tấn công | Bỏ đuổi |
|---|---|---|---|---|
| Hiền | Trôi theo đường, ăn | Bỏ qua | Bơi ra xa 6 u rồi trôi tiếp | Không đuổi |
| Chạy trốn | Trôi, ăn | Lướt ra xa với tốc độ 1,3 lần người chơi bậc 0 trong 3 giây, nghỉ 2 giây | Như thấy người, không bao giờ đánh | Không đuổi |
| Giữ lãnh thổ | Tuần quanh một điểm neo | Báo trước đe dọa, người còn ở trong vùng 2 giây thì tấn công | Tấn công người gây đòn, kể cả khi người đó ở ngoài vùng phát hiện | Rời vùng lãnh thổ 10 u thì quay về |
| Săn mồi | Lượn tìm mồi | Đuổi và tấn công | Tấn công | Rời 18 u khỏi chỗ phát hiện |
| Đi bầy | Trôi cả bầy | Bỏ qua nếu không bị tấn công | Cả bầy trong 8 u chuyển sang tấn công | Rời 12 u |
| Phục kích | Bám, trông như vật salvage hoặc đá | Người tới gần 2 u thì ra đòn | Tấn công rồi bám lại | Không đuổi |

### 2.8 Kén của Sevra Ilvane trong combat (Sau MVP, chương 3 và 5)

Dùng luật sẵn có, không thêm hệ thống (log GDM về hộ tống). Áp cho hai mốc của gd-story:

| Mốc | Kéo kén từ | Tới |
|---|---|---|
| C3.8 (đóng chương 3) | Tàu TA04 ở Waypost Outer Ring | Ember, qua Recall Beacon (kén đi theo người kích, luật 2.5.5 của `map.md`) hoặc cửa khí |
| C5.1 (hộ tống) | Cửa N4 (Skiff chở kén tới đây từ đầu chương 5) | Cửa The Hearth, qua vòng phong tỏa của The Wardens |

40. (Sau MVP) Sevra nằm trong kén thoát hiểm BNG-102 (`vat-pham.md`). Ở C3.8, hạ hết toán bắt cóc thì Tương tác giữ 2 giây để gỡ kén khỏi mạn tàu TA04, rồi kéo. Kén là vật kéo lớp Nặng, theo luật Kéo vật của `nguoi-choi.md` (cùng luật với buồng ngủ đông). Sevra không ra đòn.
41. (Sau MVP) Kén không bị kẻ địch nhắm và không nhận sát thương. Kẻ địch nhắm người chơi theo luật 9 và 10. Warden Snarer ưu tiên người đang kéo vật (bảng 3.6), nên người kéo kén là mục tiêu chính, đồng đội che chắn.
42. (Sau MVP) Người kéo vào Ngạt thì thả kén, kén trôi tại chỗ, đồng đội kéo tiếp được. Cả nhóm bị kéo về hoặc về trạm thì kén nằm lại chỗ thả, chuyến sau kéo tiếp (luật buồng ngủ đông của `nguoi-choi.md`). Trong hộ tống C5.1 kén không đi theo Recall Beacon: người kéo kích beacon thì kén nằm lại tại chỗ, như khi ngạt. Giữa các chuyến, kén được lưu ở beacon cố định gần nhất đã đi qua, chưa qua beacon nào thì ở cửa N4 (luật 2.7.9 của `map.md`). Không có thất bại vĩnh viễn, Sevra không chết.
43. (Sau MVP) Kén nằm ngoài luật giữ 1 món của K2: không ghim được, không mất theo túi.

### Trạng thái và chuyển tiếp của Driftlife

| Trạng thái | Vào khi | Ra khi | Hành vi | Người chơi thấy gì |
|---|---|---|---|---|
| Trôi | Sinh ra, hoặc hết Bỏ đuổi | Thấy người, bị tấn công | Theo kiểu | Hoạt ảnh nghỉ |
| Cảnh giác | Thấy người (kiểu Giữ lãnh thổ, Săn mồi) | Hết 2 giây, hoặc người rời vùng | Quay mặt về người, đe dọa | Mắt hoặc thân đổi màu, âm gầm nhỏ |
| Tấn công | Hết Cảnh giác, bị tấn công, giữ được vé | Ra đòn xong, mất vé | Ba pha Báo trước, Đánh, Hồi | Báo trước hình và tiếng |
| Chờ vé | Muốn đánh nhưng hết vé | Có vé, mục tiêu đổi | Vòng quanh 4 u | Con vật lượn quanh |
| Chạy | Kiểu Hiền, Chạy trốn gặp người hoặc bị đánh | Hết thời gian chạy | Lướt ra xa | Vệt chuyển động |
| Choáng | Thanh Choáng đầy | Hết 4 giây | Bất lực | Sao quay, thân co, vòng xanh |
| Ngủ | Thanh Mê đầy | Hết 12 giây, bị sát thương | Bất lực | Thân rủ, bong bóng Z, vòng tím |
| Bỏ đuổi | Mục tiêu ra khỏi khoảng bỏ đuổi | Về tới chỗ cũ | Quay về, không nhận vé | Bơi về |
| Bị bắt | Bắt thành công | (cuối) | Biến khỏi thế giới, vào lồng hoặc phao | Hiệu ứng lưới, phao bay đi |
| Bị hạ | Sinh lực về 0 | (cuối) | Rơi nguyên liệu | Vỡ ra, vật rơi trôi |

Không có trạng thái cụt: mọi trạng thái trừ hai trạng thái cuối đều có lối ra theo thời gian.

### Thứ tự xử lý trong một khung hình

1. Đòn của người chơi trúng: tính miễn (DR 2 giây, miễn choáng, miễn mê), cộng thanh Choáng hoặc Mê, trừ Sinh lực.
2. Kiểm Sinh lực về 0: bị hạ. Một con vừa đầy thanh Choáng vừa về 0 Sinh lực trong cùng khung thì bị hạ.
3. Kiểm thanh đầy: vào Choáng hoặc Ngủ. Hai thanh cùng đầy thì vào Ngủ (dài hơn).
4. Đòn của kẻ địch trúng người chơi: kiểm miễn sát thương (0,8 giây, 0,2 giây đầu lướt), trừ Oxy, đẩy lùi, hủy thao tác giữ phím.
5. Kiểm Oxy người chơi về 0: vào Ngạt (K2, gd-character).
6. Bắt hoàn tất trong khung này mà người bắt vừa trúng đòn ở bước 4: việc bắt bị hủy (bước 4 trước bước 6).

Thắng khi: không có thắng thua riêng của combat. Kết quả tốt là mang mẫu về trạm với Oxy còn dư. Thua khi: Oxy về 0 rồi bị kéo về (K2).
Cam kết với người chơi: mọi đòn đều có báo trước, không có đòn nào trúng mà không thấy trước, ngoại trừ chạm vào con vật có gai hoặc bỏng. Luôn có cách tự thoát khi chơi một mình.

## 3. Tham số

### 3.1 Combat chung

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nhóm tác động | Nguồn |
|---|---|---|---|---|---|---|
| Miễn sát thương sau khi trúng | 0,8 s | 0,6 đến 1,2 s | Dễ hơn, đông quái kém nguy hiểm | Dễ bị đánh liên hoàn | Mọi người chơi | ước, theo kho tri thức 20-combat N8 |
| Mất điều khiển khi trúng | 0,25 s | 0,15 đến 0,4 s | Đòn thấy nặng, dễ ức chế | Đòn thấy nhẹ | Mọi người chơi | ước |
| Miễn sát thương đầu lướt | 0,2 s | 0 đến 0,3 s | Né dễ | Phải né sớm hơn | Mọi người chơi | ước |
| Báo trước tối thiểu, đòn hẹp dưới 15 Oxy | 0,7 s | 0,67 đến 0,9 s | Dễ né | Phải lướt mới né, dễ thấy oan | Mọi kẻ địch | đo, prototype bay của gd-tech (`tools/prototype/bay.html`): bay ra cần 0,67 s |
| Báo trước tối thiểu, đòn vùng từ bán kính 2 u | 1,0 s | 0,92 đến 1,3 s | Dễ né | Phải lướt | Mọi kẻ địch | đo, prototype bay: bay ra khỏi vùng 2,5 u cần 0,92 s |
| Báo trước tối thiểu, đòn hẹp từ 15 Oxy | 0,8 s | 0,7 đến 1,2 s | Như trên | Như trên | Mọi kẻ địch | ước, trên mức bay ra 0,67 s |
| Vé tấn công mỗi người, dải Gần | 2 | 1 đến 3 | Dải Gần khó lên | Bầy thành vô hại | Mỗi người chơi | ước |
| Vé tấn công mỗi người, Giữa và Xa | 3 | 2 đến 4 | Khó lên | Dễ đi | Mỗi người chơi | ước |
| Hỗ trợ ngắm gamepad | 6 độ | 0 đến 10 độ | Dễ ngắm | Khó ngắm | Người dùng gamepad | ước |

### 3.2 Choáng, Mê, bắt

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nhóm tác động | Nguồn |
|---|---|---|---|---|---|---|
| Thời gian Choáng | 4 s | 3 đến 6 s | Bắt dễ, combat dễ | Phải nhanh tay | Mọi Driftlife | ước |
| Thời gian Ngủ | 12 s | 8 đến 15 s | Bắt dễ | Vội | Mọi Driftlife | ước, theo Dave cá ngủ đủ lâu để bơi tới [D11] |
| Trễ tác dụng của Súng gây mê | 1,5 s | 1 đến 2,5 s | Mê khó dùng giữa trận | Mê thay luôn choáng | Mọi Driftlife | ước |
| Thanh Choáng tụt | 20% ngưỡng mỗi giây, sau 1 s | 10 đến 30% | Phải bắn liên tục | Dễ choáng | Mọi Driftlife | ước |
| Thanh Mê tụt | 10% ngưỡng mỗi giây, sau 3 s | 5 đến 20% | Khó mê | Dễ mê | Mọi Driftlife | ước |
| Miễn sau khi tỉnh | 2 s | 1 đến 3 s | Khó khóa liên tục | Dễ khóa | Mọi Driftlife | ước, kho tri thức 20-combat (DR) |
| Hệ số DR mỗi lần | 1,5 | 1,3 đến 2 | Khó khóa | Co-op khóa mãi | Mọi Driftlife | ước |
| Trần hệ số DR | 3 | 2 đến 4 | | | Mọi Driftlife | ước |
| Đặt lại DR sau | 20 s | 15 đến 30 s | | | Mọi Driftlife | ước |
| Bắt S bằng tay | 1,5 s | 1 đến 2 s | Súng lưới đáng mang hơn | Bắt tay trội Súng lưới (sim S2) | Cỡ S | sim S2: 1,5 s làm đường Dùi xung rồi bắt tay chậm hơn Súng lưới |
| Gắn Phao kéo | 1 s, bay về sau 3 s | 0,5 đến 2 s | | | Cỡ M | ước, theo Dave dùng drone kéo cá về [D8] |
| Kim sinh thiết | 2 s | 1,5 đến 3 s | | | Cỡ L | ước |
| Kết nhanh | 0,6 s | 0,4 đến 1 s | | | Mọi Driftlife bất lực | ước |
| Vùng Súng lưới | bán kính 1,5 u, tối đa 3 con | 1 đến 2 u, 2 đến 5 con | Bắt bầy dễ | Bầy khó bắt | Cỡ S | ước, theo Dave lưới bắt nhiều cá một lần [D11] |
| Ngưỡng sao mẫu sống | 3 sao từ 70%, 2 sao từ 30% | | | | Mẫu sống | ước |

### 3.3 Dụng cụ (số khởi điểm để sim, gd-items giữ số chốt và các bậc)

Mang vào chuyến theo đai dụng cụ của `nguoi-choi.md` (số ô và bộ khởi điểm do gd-character và gd-items giữ). Ở chương 1 người chơi có thể phải chọn giữa dụng cụ khai thác và dụng cụ combat, đây là lựa chọn trước chuyến có chủ đích. Lồng mẫu không chiếm ô.

| Dụng cụ | Mở | Tác dụng bậc 1 | Nhịp bắn | Tầm | Đạn mỗi chuyến | Nhãn |
|---|---|---|---|---|---|---|
| Lao từ (TOL-211) | Chương 1, có từ đầu | 10 sát thương. Trúng S hoặc vật thì móc dây, giữ để kéo về phía mình. Trúng đồng đội thì kéo | 0,8 s | 8 u | Không giới hạn | MVP |
| Lao từ bậc 2 (UPG-HAR-2) | Chương 1, Kỹ sư | 14 sát thương, móc dây theo luật của bậc 1 | 0,75 s | 9 u | Không giới hạn | MVP |
| Lao từ bậc 3 (UPG-HAR-3) | Chương 2, Kỹ sư | 20 sát thương, móc dây kéo được cả cỡ M đang Bất lực | 0,7 s | 10 u | Không giới hạn | Sau MVP |
| Dùi xung (TOL-201) | Chương 1, quest Kỹ sư | 0 sát thương, 20 điểm Choáng, hình nón 60 độ trước mặt | 0,5 s, nóng sau 12 lần liên tiếp thì nghỉ 4 s | 2,5 u (cận) | Không giới hạn, dùng cooldown | MVP |
| Súng lưới (TOL-202) | Chương 1, quest Kỹ sư (cùng Dùi xung) | Bắt S trong vùng (luật 20) | Nạp lại 3 s | 7 u | 1 Lưới cuộn (CON-102) mỗi phát | MVP |
| Súng lưới bậc 2 (UPG-NET-2, bản thiết kế BPR-101 từ nghiên cứu DL-G01) | Chương 2, Nhà sinh học | Vùng bán kính 2,2 u, vẫn tối đa 3 con (bằng sức chứa Lồng mẫu) | Nạp lại 2,5 s | 8 u | 1 Lưới cuộn (CON-102) mỗi phát | Sau MVP |
| Súng gây mê (TOL-203) | Chương 2, Nhà sinh học | 60 điểm Mê, tác dụng sau 1,5 s | 3,0 s | 10 u | 1 Ống gây mê (CON-103) mỗi phát | Sau MVP |
| Phao kéo (CON-106) | Chương 2, chế ở xưởng | Gửi con M bất lực về kho | Tương tác | Chạm | Vật tiêu hao, theo số mang | Sau MVP |
| Kim sinh thiết (CON-107) | Chương 2, Nhà sinh học | Lấy mẫu sinh thiết cỡ L | Tương tác | Chạm | Vật tiêu hao, theo số mang | Sau MVP |

### 3.4 Chỉ số Driftlife (bậc dụng cụ 1, chơi một mình)

| ID | Sinh lực | Ngưỡng choáng | Ngưỡng mê | Miễn | Đòn (chi tiết ở 3.4b) | Vùng phát hiện |
|---|---|---|---|---|---|---|
| DL-G01 Driftmoth | 10 | 25 | 35 | | Không có | 4 u |
| DL-G02 Skitter Ray | 20 | 25 | 35 | | Không có | 6 u |
| DL-G03 Latchjaw | 60 | 90 | 90 | | Đớp | 2 u |
| DL-G04 Sting Krill (mỗi con, bầy 5 đến 8) | 10 | 25 | 35 | | Lao chích | 5 u |
| DL-G05 Arc Eel | 80 | Miễn choáng | 90 | Choáng | Lao cắn, Phóng điện vòng | 7 u |
| DL-M01 Shepherd Whale | Không hạ được | Miễn | Miễn | Sát thương, choáng, mê | Va chạm đẩy lùi | Không |
| DL-M02 Lumen Jelly | 50 | 100 | 100 | | Tiếp xúc bỏng | Không |
| DL-M03 Orebiter | 120 | 180 | 180 | | Húc | 6 u |
| DL-M04 Needlefin (mỗi con, bầy 8 đến 12) | 12 | 25 | 35 | | Lao gai | 8 u |
| DL-M05 Gulper | 300 | 150 | 140 | | Đớp, Nuốt | 10 u |
| DL-X01 Prism Wisp | 25 | 25 | 35 | | Không có | 6 u (chỉ khi người đứng yên dưới 1 s mới thấy nó) |
| DL-X02 Mirror Mantis | 140 | 210 | 280 | Đạn từ mặt trước dội lại | Chém | 3 u |
| DL-X03 Storm Siphon | 400 | 200 | 175 | | Vùng hút | 9 u |
| DL-X04 Shardbrood Queen | 350 | 175 | 175 | | Đẻ bầy, Húc | 10 u |
| DL-X05 Shardbrood Hatchling | 15 | 25 | 35 | | Cắn | 6 u |

### 3.4b Đòn và di chuyển

Thời gian tính bằng giây, tầm bằng u, tốc độ bằng u/s. Tốc độ người chơi lấy ở `nguoi-choi.md`. Đánh là thời gian hitbox bật, Hồi là thời gian kẻ địch đứng yên mở sơ hở sau đòn.

| Loài | Đòn | Hình dạng, tầm | DMG (Oxy) | Báo trước | Đánh | Hồi | Hồi chiêu | Cần vé |
|---|---|---|---|---|---|---|---|---|
| DL-G03 | Đớp | Nón 90 độ trước mặt, tầm 2 | 12 | 0,7 | 0,2 | 0,8 | 3 | Có |
| DL-G04 | Lao chích | Lao thẳng 4 u với 10 u/s, va chạm thân | 4 | 0,7 | 0,4 | 0,6 | 4 | Có |
| DL-G05 | Lao cắn | Lao thẳng 5 u với 12 u/s, va chạm đầu | 8 | 0,7 | 0,4 | 0,8 | 3 | Có |
| DL-G05 | Phóng điện vòng | Tròn bán kính 2,5 quanh thân | 15 | 1,0 | 0,3 | 1,2 | 8 | Không (đòn vùng) |
| DL-M01 | Va chạm | Thân, đẩy lùi 8 u/s | 0 | Không | | | | Không |
| DL-M02 | Tiếp xúc bỏng | Thân, khi người chơi chạm vào | 5 | Không (ngoại lệ luật 8) | | | 1 mỗi lần chạm | Không |
| DL-M03 | Húc | Lao thẳng 6 u với 10 u/s | 14 | 0,7 | 0,6 | 1,0 | 4 | Có |
| DL-M04 | Lao gai | Lao thẳng 5 u với 12 u/s | 5 | 0,7 | 0,4 | 0,6 | 5 | Có |
| DL-M05 | Đớp | Nón 90 độ, tầm 3 | 15 | 0,8 | 0,3 | 1,0 | 4 | Có |
| DL-M05 | Nuốt | Hút nón 60 độ tầm 5, kéo 3 u/s, trúng thì giữ người 2 s, mỗi giây 4 Oxy | 8 tổng | 1,0 | 1,5 hút rồi 2 giữ | 2,0 | 12 | Có |
| DL-X02 | Chém | Nón 120 độ, tầm 2,5. Mặt gương quay theo người chơi gần nhất 120 độ mỗi giây, đứng yên không quay trong pha Hồi | 18 | 0,8 | 0,2 | 0,8 | 3 | Có |
| DL-X03 | Vùng hút | Tròn bán kính 6, kéo về tâm 4 u/s, mỗi giây 3 Oxy | 12 tổng | 1,0 | 4,0 | 6,0 | 10 | Không (đòn vùng, chống bằng bám mảnh vỡ) |
| DL-X04 | Đẻ bầy | Sinh 3 DL-X05 cạnh thân, tối đa 9 con sống | 0 | Không | | | 8 | Không |
| DL-X04 | Húc | Lao thẳng 5 u với 9 u/s | 16 | 0,8 | 0,5 | 1,2 | 5 | Có |
| DL-X05 | Cắn | Nón 60 độ, tầm 1,5 | 5 | 0,7 | 0,2 | 0,5 | 3 | Có |

| Loài | Tốc độ thường | Tốc độ khi đuổi hoặc chạy | Khoảng bỏ đuổi |
|---|---|---|---|
| DL-G01, DL-M01, DL-M02 (Hiền) | 1,5 | Bơi ra xa 3,0 khi bị tấn công | Không đuổi |
| DL-G02, DL-X01 (Chạy trốn) | 2,0 | 7,8 (1,3 lần người chơi bậc 0) trong 3 s, nghỉ 2 s | Không đuổi |
| DL-G03, DL-X02 (Phục kích) | Đứng yên khi bám | Không đuổi | Không đuổi |
| DL-G04, DL-M04, DL-X05 (Đi bầy) | 2,5 | 4,5 | 12 u |
| DL-G05, DL-M03, DL-X03 (Giữ lãnh thổ) | 2,0 | 4,5 | 10 u tính từ điểm neo |
| DL-M05 (Săn mồi) | 2,5 | 5,0 (chậm hơn người chơi bậc 0, chạy được) | 18 u |
| DL-X04 (Đẻ bầy, giữ tổ) | 1,0 | 3,0 | 10 u tính từ tổ |

Giữ lãnh thổ bị bắn từ ngoài vùng phát hiện (ví dụ Lao từ bắn Arc Eel từ xa hơn vùng phát hiện của nó) vẫn chuyển Tấn công và đuổi người gây đòn cho tới khi người đó ra ngoài khoảng bỏ đuổi tính từ điểm neo.

### 3.5 Hồ sơ từng loài: vì sao bắt, vì sao hạ, khắc chế

| ID | Hành vi riêng (không chỉ khác số) | Lý do bắt sống | Lý do hạ | Khắc chế bằng | Người chơi học gì |
|---|---|---|---|---|---|
| DL-G01 | Trôi thành đám quanh mảnh vỡ, ăn bụi kim loại, không phản ứng | Con nuôi đầu tiên, sinh phấn sinh học đều | Một phát lao là xong, gọn túi | Bất kỳ | Bắn, nhặt, thấy mẫu rơi |
| DL-G02 | Thấy người thì lướt đi nhanh hơn người chơi bậc 0, không bao giờ đánh | Đơn cảng Driftlife sống giá cao, nuôi ra màng | Mẫu màng, nhưng khó đuổi kịp | Súng gây mê từ xa, Súng lưới, dồn vào góc mảnh vỡ, co-op người lùa người chặn | Tiếp cận chậm, dùng địa hình |
| DL-G03 | Giả làm vật salvage, người lại gần 2 u thì đớp, rồi bám lại | Tuyến keo sống cho nghiên cứu | Vỏ khoáng sinh học dùng sửa khoang | Bắn từ xa trước khi lại gần, choáng rồi cạy | Không vơ mọi thứ trông như đồ nhặt |
| DL-G04 | Bầy bỏ qua người cho tới khi một con bị đánh, rồi cả bầy lao vào từng con một theo vé | Nuôi cần từ 2 con, cho vỏ giáp đều | Từng con yếu | Súng lưới một phát 3 con, Dùi xung hình nón, rút lui khỏi 12 u | Đánh một con là đánh cả bầy |
| DL-G05 | Tuần quanh xác có điện, miễn choáng (Dùi xung làm nó sáng thêm). Ở MVP chỉ hạ được, bắt sống từ chương 2 khi có Súng gây mê và Phao kéo | Nuôi cho tế bào điện | Tuyến điện cho linh kiện | Súng gây mê, đánh trong lúc hồi sau phóng điện, né vòng điện bằng lướt | Dụng cụ sai thì vô dụng, đọc báo trước |
| DL-M01 | Trôi chậm khổng lồ, các loài nhỏ bám theo nó, không hạ được | Sinh thiết mẫu quý không cần làm bất lực | Không hạ được | Tiếp cận, đừng lướt va vào | Không phải con nào cũng để đánh |
| DL-M02 | Trôi theo đàn, phát sáng soi vùng tối, chạm vào thì bỏng | Gel phát quang nuôi được, đơn cảng | Gel ít hơn | Bắn từ xa, Phao kéo khi ngủ | Giữ khoảng cách |
| DL-M03 | Giữ thiên thạch khoáng, gặm khoáng: để yên 60 s thì một khối khoáng biến mất | Nuôi ra khoáng tinh, lý do lớn nhất để có khoang sinh quyển | Khoáng tinh ngay trong túi | Mê rồi Phao kéo, hoặc hạ nhanh để cứu khối khoáng | Combat tranh tài nguyên với thời gian |
| DL-M04 | Bầy săn mồi bao vây, đổi màu đỏ trước khi lao | Nuôi ra gai | Gai, vỏ giáp | Súng lưới, đứng sát mảnh vỡ để giảm hướng bị lao | Vé tấn công, bao vây |
| DL-M05 | Đuổi người, há miệng hút rồi nuốt, giữ người 2 s | Sinh thiết khi choáng | Túi tiêu hóa chứa phế liệu và linh kiện nó đã nuốt, đáng giá | Né lúc há miệng (báo trước 1 s), choáng giữa pha hút | Kẻ săn mồi lớn, đáng hạ để lấy đồ trong bụng |
| DL-X01 | Ẩn trong mây khí, chỉ thấy khi người chơi đứng yên | Hiếm, đơn cảng giá cao nhất dải | Tinh thể lăng kính | Đứng yên quan sát, Súng lưới | Kiên nhẫn đổi lấy hàng hiếm |
| DL-X02 | Phục kích, mặt trước dội ngược đạn và tia về người bắn | Không nuôi, chỉ hạ hoặc bắt ngủ cho nghiên cứu | Vỏ gương | Vòng ra sau, Súng gây mê từ sau | Vị trí quan trọng hơn bắn nhiều |
| DL-X03 | Giữ vùng, chu kỳ hút kéo người vào và hút Oxy | Sinh thiết lõi khí sống | Lõi khí | Bám vào mảnh vỡ chống hút, đánh khi nó nghỉ | Hazard sống, quản lý Oxy |
| DL-X04 | Đẻ bầy liên tục, hạ mẹ thì bầy tan | Sinh thiết túi trứng | Túi trứng | Bỏ qua bầy, đánh mẹ, co-op chia vai | Ưu tiên mục tiêu |
| DL-X05 | Bầy con, tan khi mẹ bị hạ (bơi đi) | Nuôi, dễ bắt nhất dải Xa | Vỏ giáp nhỏ | Súng lưới | Bắt hàng loạt |

### 3.6 Đơn vị The Wardens (Sau MVP)

| ID | Sinh lực | Ngưỡng choáng | Khiên | Đòn (DMG, báo trước, hồi chiêu) | Hành vi | Khác Driftlife |
|---|---|---|---|---|---|---|
| WD-01 Warden Harvester | 80 | 60 | Không | Không đánh người, trừ khi bị chắn đường: đẩy 0 Oxy | Bắn lưới năng lượng giữ một Driftlife, kéo về Warden Collector | Hạ thì thả Driftlife đang bị giữ (luật 33) |
| WD-02 Warden Lancer | 120 | 100 | Khiên trước chặn 100% sát thương và choáng từ phía trước | Tia: 12, 0,7, 2,5 | Giữ khoảng cách 6 u, quay khiên về người gần nhất | Phải vòng ra sau hoặc có đồng đội đánh lạc hướng. Một mình: dùng Lao từ kéo vật nổ hoặc dụ Driftlife lãnh thổ vào |
| WD-03 Warden Snarer | 90 | 75 | Không | Lưới trói (luật 34). Gọi 1 WD-01 mỗi 15 s | Giữ 8 u, bắn lưới vào người đang kéo vật hoặc đang bắt | Săn người đang bắt sống |
| WD-04 Warden Collector | 600 | Miễn | Giáp toàn thân, 2 động cơ là điểm yếu (mỗi cái 150) | Thả 2 WD-01 mỗi 20 s. Tháp tia: 15, 1,0, 6 | Trôi qua dải Xa theo đường, có khoang chứa Driftlife | Phá cả 2 động cơ thì tàu rút, khoang chứa vỡ, thả 3 đến 5 Driftlife đang choáng |

### 3.7 Boss

| ID | Nơi | Sinh lực (một mình) | Pha | Cơ chế chính | Cách kết | Thời lượng mục tiêu một mình | Nhãn |
|---|---|---|---|---|---|---|---|
| BS-1 Scrapmaw | Station Cinder, khoang máy C6 (phòng lõi năng lượng) sau cửa D1 | 600 | 2 | Pha 1 (từ đầy tới khi đứt hết 3 Neo hoặc Sinh lực dưới 50%): quấn quanh lõi, thân giữ bằng 3 Neo xúc tu trên tường. Bắn Lao từ vào một Neo rồi giữ 2 s để giật đứt (bị đánh thì hủy). Mỗi Neo đứt thì Scrapmaw Choáng 4 s, thân đánh được. Ở pha 1 thân chỉ nhận sát thương khi đang Choáng (xúc tu quấn che thân). Đòn: quét xúc tu nón 120 độ tầm 4 (8 Oxy, báo trước 0,8, hồi chiêu 4), phun 2 DL-G04 (hồi chiêu 20, tối đa 3 con sống). Pha 2: rời lõi, thân nhận sát thương mọi lúc, vẫn nối với lõi bằng một Dây nối (xúc tu dài, gốc cố định sát lõi giữa phòng). Đuổi người chơi, lao húc thẳng 5 u với 10 u/s (10 Oxy, báo trước 1,0, hồi chiêu 5). Không phun bầy. Lõi phóng điện vòng bán kính 4 u quanh lõi mỗi 10 s (8 Oxy, báo trước 1,3 bằng lõi sáng dần, vòng đỏ trên sàn hiện bán kính). Scrapmaw dính phóng điện thì Choáng 6 s: đây là cách duy nhất làm nó Bất lực ở pha 2, người chơi dụ nó vào vùng lõi lúc lõi sáng | Hạ: Sinh lực về 0 bằng Lao từ. Xua đi: Dây nối có 2 đoạn. Mỗi lần Scrapmaw Choáng 6 s ở pha 2 do phóng điện, Tương tác giữ 3 s ở gốc Dây nối (sát lõi, tầm 1,5 u) cắt được 1 đoạn. Cắt đoạn thứ hai khi Sinh lực boss dưới 50% thì boss bỏ đi. Như vậy Xua đi cần cùng lượng giao chiến như hạ, không phải đường tắt. Phóng điện đã tắt và boss đang choáng nên không có đòn nào hủy thao tác, trừ DL-G04 còn sót từ pha 1. Không cần dụng cụ chương 2 | 1 đến 2 phút | MVP |
| BS-2 Tempest Gulper | Station Lantern, bến cập hàng ở vành ngoài | 900 | 2 | Pha 1: nuốt kiện hàng tiếp tế trôi quanh vành ngoài Lantern. Khi nó há miệng hút (báo trước 1,2 s), người chơi phóng Lao từ kéo kiện nổ vào miệng thì nó choáng 5 s. Pha 2: hút liên tục, người chơi bám mảnh vỡ hoặc dây neo, đánh 2 túi khí bên sườn | Hạ, hoặc Xua đi: choáng ở pha 2 rồi tiêm an thần vào túi khí | 3 đến 5 phút | Sau MVP |
| BS-3 Warden Reaper | Station Flint, khoang hàng bị biến thành trạm thu | 1200 | 2 | Pha 1: máy hút Driftlife vào 3 khoang chứa. Phá mỗi khoang (200) thì thả Driftlife, chúng quay sang đánh máy. Đòn: lưỡi gặt quét (18, 1,0, 5), drone WD-01. Pha 2: khiên năng lượng, chỉ hạ khiên bằng cách kéo lõi nổ (vật trong phòng) vào máy bằng Lao từ | Hạ | 4 đến 6 phút | Sau MVP |
| BS-4 Cradle Custodian | Cradle Interior, Lõi máy | 1000 | 3 | Hệ an ninh chặn đường tới hộp ghi hành trình, điều khiển cửa khoang và tia quét. Báo trước bằng đường quét đỏ 1,0 s. Người chơi phá 4 rơ le theo thứ tự hiện trên bảng điều khiển trong phòng. Mỗi rơ le phá xong mở một đoạn hành lang. Pha 3: lõi Custodian lộ ra | Hạ | 4 đến 6 phút | Sau MVP |
| BS-5 Daskel | Warden Rig, Command Deck | 1500 | 3 | Pha 1: khiên được nuôi bằng Driftlife bị nhốt trong ống chứa. Giải thoát hết ống (4 ống) thì khiên tắt. Pha 2: Daskel dùng lưới The Wardens bắt người chơi như bắt Driftlife (bị trói như luật 34, tối đa 5 s). Pha 3 (Sinh lực Daskel dưới 30%): Rig quá tải, sàn vỡ dần theo đoạn trong 90 s nên chỗ đứng thu hẹp, Daskel vẫn nhận sát thương bình thường. Hết 90 s mà chưa xong thì sàn dừng vỡ ở vùng nhỏ nhất, trận tiếp tục, không có thua do hết giờ. Daskel có mặt vì tự tới bãi vỡ bắt Sevra, tổ Ember giữ chân hắn trong lúc The Kindling nổi dậy ở Sennar | Khuất phục: Sinh lực về 0 thì Daskel gục và bị bắt, giao cho The Kindling | 6 đến 9 phút | Sau MVP |

Số BS-1 trước sim S5 và lý do đổi: cuối file, mục Lịch sử thay đổi.

Kết quả S5 hiện hành (`tools/ket-qua/sim-combat.md` mục 5):

| Cách kết | Kịch bản | Số người | Phút P50 / P90 | Oxy mất do đòn mỗi người | Oxy mỗi người P50 / P90 | P90 so với bình chương 1 | Xong trong 10 phút |
|---|---|---|---|---|---|---|---|
| Hạ | tệ | 1 | 1,8 / 2,0 | 225 | 329 / 387 | 117% | 100% |
| Hạ | tệ | 2 | 1,3 / 1,5 | 112 | 193 / 216 | 65% | 100% |
| Hạ | trung bình | 1 | 1,2 / 1,3 | 99 | 172 / 200 | 61% | 100% |
| Hạ | trung bình | 2 | 1,0 / 1,0 | 49 | 106 / 124 | 37% | 100% |
| Hạ | trung bình | 3 | 0,9 / 0,9 | 35 | 87 / 98 | 30% | 100% |
| Hạ | trung bình | 4 | 0,8 / 0,9 | 29 | 78 / 86 | 26% | 100% |
| Hạ | tốt | 1 | 1,0 / 1,0 | 41 | 99 / 121 | 37% | 100% |
| Hạ | tốt | 2 | 0,8 / 0,8 | 20 | 67 / 80 | 24% | 100% |
| Xua đi | tệ | 1 | 1,3 / 1,8 | 176 | 253 / 356 | 108% | 80% |
| Xua đi | tệ | 2 | 1,1 / 1,4 | 88 | 150 / 204 | 62% | 74% |
| Xua đi | trung bình | 1 | 0,8 / 1,2 | 71 | 117 / 174 | 53% | 90% |
| Xua đi | trung bình | 2 | 0,7 / 0,9 | 35 | 74 / 109 | 33% | 87% |
| Xua đi | trung bình | 3 | 0,6 / 0,9 | 26 | 63 / 90 | 27% | 85% |
| Xua đi | trung bình | 4 | 0,6 / 0,8 | 21 | 55 / 81 | 24% | 82% |
| Xua đi | tốt | 1 | 0,7 / 0,9 | 31 | 72 / 99 | 30% | 97% |
| Xua đi | tốt | 2 | 0,5 / 0,7 | 15 | 48 / 67 | 20% | 91% |

Ngưỡng choáng và mê của boss: mọi boss miễn Dùi xung và Súng gây mê, chỉ Bất lực theo cơ chế của pha (Neo đứt, phóng điện, kiện nổ). Không có thanh choáng nên không có ngưỡng để nhân theo số người. Thời gian choáng theo cơ chế không đổi theo số người. BS-1 và BS-2 là boss Driftlife nhưng dùng dòng hệ số boss ở 6b, không dùng dòng Driftlife.

Phòng boss (gd-world giữ, `map.md` 2.10). Vật dựng phòng BS-2 đến BS-5 dưới đây là nhu cầu của cơ chế, đồng bộ với bảng phòng của `map.md` khi mở các boss đó (Sau MVP):

| Boss | Phòng | Kích thước | Thứ trong phòng gd-combat cần |
|---|---|---|---|
| BS-1 | Station Cinder, khoang máy C6 | 16 x 12 u | 3 điểm neo xúc tu trên tường, lõi năng lượng giữa phòng |
| BS-2 | Station Lantern, bến cập hàng vành ngoài | 32 x 20 u | Kiện hàng trôi đẩy được, mảnh vỡ và dây neo để bám khi bị hút |
| BS-3 | Station Flint, khoang hàng thành trạm thu | 28 x 16 u | 3 lồng giữ Driftlife, lõi nổ kéo được |
| BS-4 | Cradle Interior, Lõi máy | 32 x 24 u | 4 rơ le, bảng điều khiển hiện thứ tự |
| BS-5 | Warden Rig, Command Deck | 36 x 24 u | 4 ống chứa Driftlife, sàn vỡ theo đoạn ở pha 3 |

Núm gap: Sinh lực Driftlife và Sinh lực boss nối sát thương dụng cụ (gd-items) với thời gian hạ mục tiêu ở mục 5.

| Công thức | Biến | Ví dụ |
|---|---|---|
| Số phát trúng để hạ = trần(Sinh lực x hệ số người chơi / sát thương mỗi phát) | Hệ số người chơi ở mục 6b | Chỉ là thời gian bắn thuần, chưa tính trượt và bay tới (sim ra 11,2 s cho Arc Eel). Arc Eel một mình, Lao từ bậc 1: trần(80 x 1 / 10) = 8 phát, bắn liên tục 6,4 giây |

### 3.8 Bắt sống so với hạ (sim của gd-tech)

Nguồn: `tools/sim-combat.mjs` của gd-tech (có thời gian bay tới, cạy Latchjaw, cột ròng trừ vật tiêu hao theo ITEM LIST). Số bảng dưới lấy từ `tools/ket-qua/sim-combat.md` của gd-tech, gồm luật Chạy trốn và giá trị mẫu của gd-items.

| Thông số lần chạy | Giá trị |
|---|---|
| Kịch bản | Một người trung bình (trúng 0,7, né 0,6, giả định của gd-tech) |
| Số trận mỗi ô | 2000, seed 1 |
| Giờ chạy | 21:50 UTC ngày 19/11, tức 04:50 giờ máy ngày 20/11 (chép bằng script, không chép tay) |

Điều chỉnh để bắt không áp đảo hạ:

| Số | Bản đầu | Hiện hành | Lý do |
|---|---|---|---|
| Ngưỡng choáng, ngưỡng mê cỡ M | Thấp hơn Sinh lực | Khoảng 1,5 lần Sinh lực (Lumen Jelly 2 lần). Riêng ngưỡng mê Arc Eel 90, Mirror Mantis 280 (2 lần Sinh lực, vì mặt gương làm hạ chậm nên bắt dễ trội) | Làm bất lực không được nhanh hơn hạ |
| Dùi xung | 25 điểm Choáng mỗi 0,5 s | 20 điểm | Dùi xung từng nhanh gấp 4 lần Lao từ |
| Súng gây mê | 35 điểm Mê mỗi 1,2 s | 60 điểm mỗi 3 s | Bớt số Ống gây mê mỗi lần bắt mà giữ nhịp mê chậm |
| Mẫu sinh thiết cỡ L | Bằng k nhân giá trị khi hạ | Thấp hơn giá trị khi hạ (gd-items) | Sinh thiết nhanh hơn hạ nhiều |

| Loài | Đường bắt | Giây hạ | Giây bắt | GTĐ vật tiêu hao mỗi lần bắt | Bắt chia hạ, gộp | Bắt chia hạ, ròng |
|---|---|---|---|---|---|---|
| DL-G01 Driftmoth | Súng lưới (MVP) | 3,3 | 3,3 | 1,6 | 1,90 | 1,33 |
| DL-G01 Driftmoth | Dùi xung rồi bắt tay (MVP) | 3,3 | 5,6 | 0,0 | 1,10 | 1,10 |
| DL-G02 Skitter Ray | Súng lưới (MVP) | 8,2 | 3,3 | 1,6 | 4,67 | 3,41 |
| DL-G02 Skitter Ray | Dùi xung rồi bắt tay (MVP) | 8,2 | 5,6 | 0,0 | 2,71 | 2,71 |
| DL-G04 Sting Krill | Súng lưới (MVP) | 3,3 | 3,3 | 1,5 | 1,76 | 1,08 |
| DL-G04 Sting Krill | Dùi xung rồi bắt tay (MVP) | 3,3 | 5,6 | 0,0 | 1,02 | 1,02 |
| DL-G05 Arc Eel | Súng gây mê rồi Phao kéo (Sau MVP, đường mê) | 11,2 | 11,6 | 21,0 | 4,96 | 1,57 |
| DL-G03 Latchjaw | Dùi xung rồi Phao kéo (Sau MVP) | 8,9 | 8,7 | 7,9 | 2,87 | 1,53 |
| DL-M02 Lumen Jelly | Dùi xung rồi Phao kéo (Sau MVP) | 7,9 | 7,4 | 7,9 | 2,32 | 1,61 |
| DL-M03 Orebiter | Dùi xung rồi Phao kéo (Sau MVP) | 15,9 | 17,6 | 7,9 | 1,86 | 1,35 |
| DL-M04 Needlefin | Súng lưới (MVP) | 4,7 | 3,3 | 1,5 | 2,67 | 2,27 |
| DL-M04 Needlefin | Dùi xung rồi bắt tay (MVP) | 4,7 | 5,6 | 0,0 | 1,55 | 1,55 |
| DL-M05 Gulper | Dùi xung rồi Phao kéo (Sau MVP) | 36,6 | 10,7 | 7,8 | 2,57 | 1,54 |
| DL-X01 Prism Wisp | Súng lưới (MVP) | 9,2 | 3,3 | 1,6 | 5,24 | 5,00 |
| DL-X01 Prism Wisp | Dùi xung rồi bắt tay (MVP) | 9,2 | 5,6 | 0,0 | 3,04 | 3,04 |
| DL-X02 Mirror Mantis | Súng gây mê rồi Phao kéo (Sau MVP, đường mê) | 33,9 | 25,9 | 40,7 | 3,16 | 1,31 |
| DL-X03 Storm Siphon | Dùi xung rồi Phao kéo (Sau MVP) | 47,9 | 19,9 | 7,8 | 1,43 | 1,09 |
| DL-X04 Shardbrood Queen | Dùi xung rồi Phao kéo (Sau MVP) | 42,3 | 18,1 | 7,8 | 1,39 | 1,05 |
| DL-X05 Shardbrood Hatchling | Súng lưới (MVP) | 4,7 | 3,3 | 1,6 | 2,62 | 2,44 |
| DL-X05 Shardbrood Hatchling | Dùi xung rồi bắt tay (MVP) | 4,7 | 5,6 | 0,0 | 1,52 | 1,52 |

Hai thước đo khác nhau, không lẫn:

| Thước đo | Định nghĩa | Mục tiêu | Ai kiểm |
|---|---|---|---|
| K9 (luật 24) | Giá trị một mẫu sống chia giá trị một lần hạ cùng loài | 1,5 đến 2 lần (khung mục 9) | gd-items, script của `vat-pham.md` |
| Ròng mỗi phút (đề sim S2) | Giá trị mỗi phút của bắt trừ vật tiêu hao, chia giá trị mỗi phút của hạ | Từ 1,0 cho mọi loài (bắt không thiệt). Cỡ M bắt bằng choáng hoặc mê không quá 1,6. Cỡ S được vượt vì bị chặn bởi Lồng mẫu 3 con mỗi người mỗi chuyến | gd-tech, sim combat |

Cột ròng theo thước đo thứ hai:

| Nhóm | Loài và ròng | Kết luận |
|---|---|---|
| Trong 1,2 đến 1,6 | DL-G01 (Súng lưới), DL-G03, DL-G05 (đường mê, Sau MVP), DL-M03, DL-M05 (sinh thiết) | Đạt |
| Sát trên 1,6 | DL-M02 | Đạt, lệch dưới 0,05 |
| Dưới 1,2 nhưng từ 1,0 | DL-G04 (bầy, hạ một phát là xong, sim tính bắt từng con dù một phát lưới được nhiều con), DL-X03, DL-X04 (sinh thiết, ngoài K9) | Đạt mức sàn 1,0, bắt không thiệt |
| Trên 1,6, cỡ S | DL-G02, DL-X01 (Chạy trốn), DL-M04, DL-X05 (bầy) | Chấp nhận: chặn bằng Lồng mẫu 3 con. Loài Chạy trốn cố ý khó hạ để dạy dùng Súng lưới |
| Cỡ M bắt bằng mê | DL-X02: mặt gương bắt người chơi vòng ra sau cho mọi phát, nên hạ nhiều phát chậm hơn bắt ít phát mê. Ngưỡng mê 280 (2 lần Sinh lực) | Trong 1,2 đến 1,6, đạt |
| Đường Dùi xung rồi bắt tay (cỡ S) | Mọi loài cỡ S: ròng thấp hơn đường Súng lưới cùng loài ở bảng trên, bắt mất lâu hơn | Không trội: không tốn vật tiêu hao nhưng chậm. Là đường cho người hết Lưới cuộn |

Ở MVP, Arc Eel chỉ hạ được (bắt cần Súng gây mê và Phao kéo của chương sau). Dòng Arc Eel ở bảng trên là đường bắt của chương sau.

| S3 sau khi sửa | Giá trị |
|---|---|
| Bất lực trong 60 giây, 4 người dùng Dùi xung liên tục | 18 đến 32% |
| Mục tiêu | Dưới 70% |

## 4. Trường hợp biên

| # | Ca | Phán quyết |
|---|---|---|
| E1 | Oxy còn 3, trúng đòn 8 | Oxy về 0, vào Ngạt. Không có Oxy âm |
| E2 | Hai đòn trúng cùng khung | Đòn đầu trừ Oxy và kích miễn sát thương. Đòn sau chỉ đẩy lùi |
| E3 | Bắn Dùi xung liên tục một con với 4 người | DR: sau mỗi lần tỉnh miễn 2 s, ngưỡng tăng 1,5 lần tới trần 3. Không khóa được mãi (sim kiểm ở mục 8) |
| E4 | Súng lưới trúng 5 con S cùng vùng | Bắt 3 con gần tâm nhất. 2 con còn lại chạy theo kiểu |
| E5 | Lồng đã đủ 3 con khi bắt S | Không bắt được, con vật vẫn bất lực, thông báo lồng đầy. Súng lưới không tiêu Lưới cuộn khi mọi con trong vùng không vào được lồng |
| E6 | Đang gắn Phao kéo thì bị đánh | Hủy gắn, phao không mất |
| E7 | Con đang Ngủ bị đồng đội bắn | Tỉnh ngay, đòn đầu x2 sát thương (luật 16). Co-op cần ping trước khi bắt |
| E8 | Đang Kích Recall thì bầy lao tới | Bị đánh là hủy Kích Recall (K4). Phải dọn hoặc né rồi kích lại |
| E9 | Người chơi ngạt trong phòng boss, đồng đội còn đánh | Người ngạt không bị boss nhắm tới, không nhận sát thương (luật 10), chờ cứu hoặc bị kéo về theo K2. Boss không hồi. Boss chỉ hồi theo luật 36: không còn người chơi nào trong phòng quá 10 giây, hoặc cả nhóm đã về trạm |
| E10 | Boss vừa về 0 Sinh lực đúng lúc đủ điều kiện Xua đi | Hạ thắng vì bước 2 xử lý trước. Xua đi chỉ hoàn tất bằng Tương tác 3 giây |
| E11 | Người bắt rớt mạng giữa lúc giữ Tương tác | Việc bắt hủy. Con vật vẫn bất lực tới hết thời gian. Mất kết nối quá 15 giây thì người đó tính như bị kéo về (C10), Lồng mẫu theo luật 25 |
| E12 | Lao từ trúng đồng đội đang Ngạt | Kéo người ngạt về phía người bắn để chia Oxy nhanh hơn (luật chia Oxy của gd-character). Không kéo theo Lồng mẫu của người ngạt (K27) |
| E13 | Warden Harvester bị hạ khi đang kéo Driftlife cỡ L | Con L được thả, choáng 6 s, chỉ sinh thiết được (L không bắt sống) |
| E14 | Mirror Mantis dội Lao từ về người bắn | Đòn dội gây 50% sát thương của đòn gốc vào Oxy người bắn, có miễn sát thương như đòn thường |
| E15 | Hai người cùng Tương tác bắt một con | Người bắt đầu trước được. Người sau nhận thông báo "đang có người bắt" |
| E16 | Spam Kết nhanh lên con vừa tỉnh | Không làm được, Kết nhanh chỉ áp con đang Bất lực |
| E17 | Con cỡ S bất lực, người chơi giữ cả phím Tương tác và phím Kết nhanh | Thao tác bấm trước được thực hiện, thao tác sau bị bỏ qua tới khi thả phím |
| E18 | Lồng còn 1 chỗ, Súng lưới trúng 3 con | Bắt 1 con gần tâm nổ nhất, tiêu 1 Lưới cuộn. Hai con còn lại chạy theo kiểu |
| E19 | Ba người đã về trạm hoặc bị kéo về, người cuối còn ngoài không gian | Driftlife chưa giao chiến tính lại hệ số Sinh lực và ngưỡng theo số người còn ngoài không gian. Con đang giao chiến giữ hệ số tới hết trận. Mật độ (k(N) của gd-world) giữ như lúc sinh |
| E20 | Người một mình đang kéo kén của Sevra bị Warden Snarer trói | Không Lướt được khi kéo vật lớp Nặng, nên lưới tự tan sau tối đa 2 giây (luật 34). Muốn thoát sớm thì thả kén rồi Lướt, sau đó kéo lại. Một mình luôn thoát được (C1) |

## 5. Ràng buộc vật lý của luật

- Trần khóa liên tục: với hệ số DR 1,5 và trần 3, thời gian Choáng một con trên một phút giảm dần. Ước một người với Dùi xung bậc 1 giữ con DL-G05 không thể vì miễn choáng, giữ DL-M03 bất lực tối đa khoảng 40% thời gian. Đã đo bằng sim S3 (kết quả ở cuối mục 3.8): 4 người dùng Dùi xung liên tục giữ một con Bất lực 18 đến 32% thời gian trong 60 giây, dưới mục tiêu 70%.
- Vé tấn công giới hạn số đòn cùng lúc: một người ở dải Gần chịu tối đa 2 đòn có vé trong một chu kỳ, cộng đòn vùng. Trần Oxy mất do combat mỗi giây vì vậy có giới hạn, sim S1 đo.
- Súng lưới bắt tối đa 3 con một phát, nên bầy 8 con cần 3 phát. Số con bắt được một chuyến bị chặn bởi số Lưới cuộn mang theo và 1 lồng 3 con mỗi người.
- Cỡ L không bắt sống được bằng luật, nên khoang sinh quyển chỉ chứa S và M.
- Một mình phải thắng được mọi boss: không cơ chế boss nào cần hai người đứng hai chỗ cùng lúc. BS-1 Neo xúc tu giật lần lượt được, BS-5 ống chứa phá lần lượt được.

## 6. Yêu cầu cho engineer và tool

Dữ liệu (gd-tech dựng ScriptableObject):

| Bảng | Trường |
|---|---|
| Loài | ID, tên, dải, cỡ (S, M, L, Boss), kiểu hành vi, sinh lực, ngưỡng choáng, ngưỡng mê, danh sách miễn, vùng phát hiện, khoảng bỏ đuổi, bắt sống được không, cách bắt, nuôi được không, bảng rơi khi hạ, bảng rơi khi bắt, nhãn MVP |
| Đòn | ID, loài, kiểu (cận, xa, vùng, tiếp xúc, nuốt), DMG Oxy, báo trước, thời gian đánh, hồi, hồi chiêu, cần vé không, hình dạng vùng trúng, lực đẩy |
| Dụng cụ (luật) | ID theo `vat-pham.md` (TOL, CON), sát thương, điểm choáng, điểm mê, trễ tác dụng, vùng, nhịp, tầm, đạn |
| Boss | ID, pha, mốc chuyển pha, cơ chế mỗi pha, cách kết, phần rơi mỗi cách kết |
| Hệ số co-op | Tham số mục 6b |

Sự kiện cần phát (để UI, audio, event tracking dùng): `trung_don_nguoi_choi`, `driftlife_choang`, `driftlife_ngu`, `driftlife_tinh`, `bat_song_xong`, `ha_driftlife`, `bat_that_bai`, `boss_chuyen_pha`, `boss_ket` (kèm cách kết), `ve_tan_cong_cap`, `ve_tan_cong_tra`.

Đồng bộ co-op: host giữ Sinh lực, thanh Choáng, thanh Mê, trạng thái của mọi kẻ địch. Máy người chơi hiện hiệu ứng trúng ngay khi bắn, host xác nhận. Oxy của mỗi người do máy người đó tính, host kiểm. Hitstop chỉ là hiệu ứng hình trên máy người bắn và người trúng, không dừng mô phỏng chung (C7).

Nơi phải cùng đổi khi đổi luật này: bảng Loài và Đòn, sim combat (mục 8), tab Enemy, `vat-pham.md` (dụng cụ), `nguoi-choi.md` (trạng thái Trúng đòn, lướt), tutorial của gd-ux.

## 6b. Co-op 1 đến 4 người

| Chỉ số | Công thức theo số người N | N=1 | N=2 | N=3 | N=4 |
|---|---|---|---|---|---|
| Sinh lực, ngưỡng choáng, ngưỡng mê Driftlife, dải Gần | N chia k(N) của dải | 1 | 1,54 | 1,88 | 2,11 |
| Sinh lực, ngưỡng choáng, ngưỡng mê Driftlife, dải Giữa | N chia k(N) của dải | 1 | 1,6 | 2 | 2,29 |
| Sinh lực, ngưỡng choáng, ngưỡng mê Driftlife, dải Xa | N chia k(N) của dải | 1 | 1,45 | 1,7 | 1,87 |
| Số Driftlife một chuyến, dải Gần | k(N) = 1 + 0,3 x (N - 1), `map.md` 3.8 | 1 | 1,3 | 1,6 | 1,9 |
| Số Driftlife một chuyến, dải Giữa | k(N) = 1 + 0,25 x (N - 1), `map.md` 3.8 | 1 | 1,25 | 1,5 | 1,75 |
| Số Driftlife một chuyến, dải Xa | k(N) = 1 + 0,38 x (N - 1), `map.md` 3.8 | 1 | 1,38 | 1,76 | 2,14 |
| Gánh mỗi người so với một mình = k(N) x hệ số Sinh lực / N | Kiểm, mục tiêu 0,9 đến 1,1 | 1 | 1 | 1 | 1 |
| Sinh lực boss (kể cả BS-1, BS-2) và đơn vị The Wardens | Gốc x (1 + 0,6 x (N - 1)) | 1 | 1,6 | 2,2 | 2,8 |
| Ngưỡng choáng đơn vị The Wardens | Gốc x (1 + 0,6 x (N - 1)) | 1 | 1,6 | 2,2 | 2,8 |
| Ngưỡng choáng, mê boss | Không có, boss chỉ Bất lực theo cơ chế (3.7) | | | | |
| Sát thương lên người chơi | Không đổi | 1 | 1 | 1 | 1 |
| Vé tấn công | Mỗi người giữ vé riêng (luật 9) | 2 | 4 | 6 | 8 |

Kết quả S4 (sim của gd-tech, `tools/ket-qua/sim-combat.md` bảng 4, sim tự tính hệ số từ `map.md`). "Dồn" là cả nhóm cùng xử một con, so với mỗi người xử riêng phần mình, loài cỡ M và L:

| Cách chơi | Cỡ | N = 2 | N = 3 | N = 4 |
|---|---|---|---|---|
| Mỗi người xử riêng | Mọi cỡ | 1,00 | 1,00 | 1,00 |
| Cả nhóm cùng hạ một con | M, L | 1,01 đến 1,18 | 1,04 đến 1,29 | 1,07 đến 1,38 |
| Cả nhóm cùng bắt một con | M, L | 0,65 đến 1,16 | 0,69 đến 1,40 | 0,76 đến 1,57 |
| Cả nhóm cùng hạ một con | S | 0,85 đến 1,32 | 0,80 đến 1,60 | 0,95 đến 1,93 |
| Cả nhóm cùng bắt một con | S | 1,21 đến 1,34 | 1,43 đến 1,68 | 1,67 đến 2,04 |

Mục tiêu của S4 (mục 8) áp cho kiểu chia (mỗi người xử riêng). Kiểu dồn chỉ để đọc kết quả. Nhận kết quả, không đổi số. Đi theo cặp gần như không tốn thêm, và với Orebiter, Storm Siphon, Shardbrood Queen còn lợi hơn (một người choáng, một người bắt). Cả nhóm bốn người dồn vào một con thì tốn hơn, nên nhóm tự tách thành hai cặp, đúng kiểu chia vai mong muốn (P3). Loài cỡ S dồn tốn rõ hơn vì máu mỗi con nhân theo N mà con S chết hoặc dính lưới sau một hai phát, nên cả nhóm vây một con nhỏ là phí. Chấp nhận, kể cả 2 người ở MVP: loài cỡ S trôi rải rác hoặc theo bầy, nên mỗi người một hướng là cách chơi chung tự nhiên, và Súng lưới bắt nhiều con một phát.

Luật co-op:
- N là số người đang ở ngoài không gian trong cùng map lúc kẻ địch sinh ra hoặc lúc vào phòng boss. Số người ngoài không gian giảm giữa chuyến thì áp E19. Người rời phiên giữa trận thì hệ số giữ nguyên tới hết trận đó.
- Bắt sống: người hoàn tất thao tác bắt nhận mẫu vào lồng mình kéo. Đồng đội nhận lồng bằng thao tác Trao đồ của gd-character. Phao kéo gửi về kho chung (C3), không cần ai mang.
- Hạ: nguyên liệu rơi thành vật trôi, ai vào bán kính hút nhặt trước thì nhặt được (luật nhặt của `nguoi-choi.md`). Vật rơi trôi 60 giây rồi biến mất, cùng luật vật thả của `nguoi-choi.md` 2.4.
- Ngắm và vé riêng từng người nên mỗi người chịu áp lực như chơi một mình. Thêm người là thêm tay chia vai: một người choáng, một người bắt, một người lùa.
- Không luật nào cần đúng N người. Mọi cơ chế co-op (lùa Skitter Ray, đánh lạc hướng Lancer, cắt lưới cho đồng đội) đều có cách làm một mình.
- Hệ số Sinh lực và số Driftlife nhân chồng lên nhau, nên hai vai chốt chung (gd-world, `map.md` 3.8): tích chia N gần 1, mỗi người gánh khoảng bằng lúc chơi một mình. Ngưỡng choáng và ngưỡng mê dùng cùng hệ số với Sinh lực để bắt sống trong co-op không khó hơn hạ. DR chặn khóa vĩnh viễn (sim S3).

## 7. Yêu cầu cho art, UI, tutorial, audio

| Sự kiện | Hình (VFX, trạng thái) | Âm (SFX) | Text, tutorial | Ưu tiên |
|---|---|---|---|---|
| Báo trước đòn | Thân con vật sáng màu đòn (vàng thường, đỏ đòn lớn), viền vùng trúng hiện mờ với đòn vùng | Âm tích ngắn, cao dần | Tutorial chương 1: "Sáng đỏ là sắp đánh, lướt để né" | MVP |
| Đòn từ ngoài màn | Mũi tên ở mép màn chỉ hướng kẻ địch, màu theo mức đòn (vàng, đỏ), hiện suốt pha Báo trước | Âm báo trước phát theo hướng (stereo) | Không | MVP |
| Người chơi trúng đòn | Nhân vật nháy trắng 2 khung, thanh Oxy tụt có vệt đỏ phần mất, rung màn nhẹ | Âm va đập mũ, tiếng thở gấp | Lần đầu: "Bị đánh mất Oxy" | MVP |
| Miễn sát thương | Nhân vật nhấp nháy 0,8 s | Không | Không | MVP |
| Lao từ trúng | Hitstop 3 khung, tia lửa, dây căng | Âm xuyên, dây rít | Không | MVP |
| Choáng | Vòng xanh dương quanh con vật, sao quay, đồng hồ vòng đếm ngược | Âm điện xẹt rồi ù | Tutorial: "Con vật choáng, lại gần để bắt hoặc Kết nhanh" | MVP |
| Ngủ | Vòng tím, bong bóng Z, đồng hồ vòng | Âm ngáy nhẹ | Tutorial chương 2 | Sau MVP |
| Bắt được | Súng lưới co lại, mẫu bay vào lồng, hiện số sao | Âm "pốp" vui, hợp âm ngắn theo số sao | Lần đầu: "Mẫu sống giá trị hơn" | MVP |
| Phao kéo bay về | Phao bật đèn, kéo con vật bay về hướng trạm, có vệt | Âm động cơ nhỏ xa dần | Không | Sau MVP |
| Hạ | Con vật vỡ, nguyên liệu trôi ra có viền sáng | Âm vỡ trầm | Không | MVP |
| Miễn choáng (Arc Eel) | Dùi xung làm nó sáng thêm, biểu tượng "miễn" | Âm dội | Lần đầu ở chương 1: "Con này không choáng được, chưa có cách bắt" | MVP |
| Chuyển pha boss | Boss gầm, màn tối viền, khung chậm 0,3 s | Nhạc boss đổi đoạn | Tên boss hiện ở lần gặp đầu | MVP |
| Bị lưới The Wardens trói | Súng lưới năng lượng đỏ quấn nhân vật, nút "Lướt x3" | Âm điện rè | Lần đầu hiện cách thoát | Sau MVP |
| Dấu săn bắt | Vết lưới năng lượng và vết cắt của quân The Wardens trên thân một số cá thể | Không | Nhà sinh học bình luận khi mang mẫu về | Sau MVP |

Art: mỗi loài cần hoạt ảnh Trôi, Cảnh giác, Báo trước (mỗi đòn), Đánh, Hồi, Choáng, Ngủ, Bị hạ. Silhouette mỗi loài khác nhau rõ ở cỡ nhỏ. Màu nhận diện theo kiểu: hiền màu lạnh, săn mồi và lãnh thổ có điểm đỏ hoặc vàng. Gửi GDM cho tab Assets, AUDIO ASSETS LIST.
Tutorial (gd-ux):

| Chương | Dạy |
|---|---|
| 1 | Bắn, Né bằng lướt, Choáng, Kết nhanh, Súng lưới, Lồng mẫu, sao chất lượng |
| 2 | Mê, Phao kéo, Sinh thiết |

## 7b. Cảm giác (game feel)

- Tham chiếu: lao móc trúng thì dây căng và con vật giật về phía người chơi (khoảnh khắc lao trúng cá to rồi giữ dây trong Dave the Diver). Choáng là ngắt rõ ràng, con vật đơ hẳn, không lờ mờ.
- Hitstop: đòn nhẹ 2 đến 3 khung (30 đến 50 ms), đòn nặng và đứt Neo boss 4 đến 6 khung (60 đến 100 ms). Nguồn: `docs/knowledge/indie/20-combat.md` mục 3.
- Rung màn: chỉ khi người chơi trúng đòn từ 15 Oxy và khi boss chuyển pha. Biên độ thấp vì người chơi cần định hướng khi bay 8 hướng. Có tùy chọn tắt rung trong cài đặt.
- Phản tham chiếu: tránh cảm giác bắn súng không gian (không đạn tràn màn hình, không nổ lớn liên tục). Người chơi là người sống sót, không phải phi công chiến đấu.
- Mỗi lớp phản hồi (hitstop, rung, chớp, hạt, âm) là một tham số bật tắt được để thử trên prototype.

## 8. Cách đo thành công và tiêu chí nghiệm thu

### Đề sim combat cho gd-tech

| Mã | Câu hỏi | Đầu vào | Đầu ra | Mục tiêu ý đồ |
|---|---|---|---|---|
| S1 | Combat ăn bao nhiêu Oxy một chuyến | Mục 3.4, mật độ của gd-world, bình Oxy bậc 0 đến 4 của gd-character, 3 kiểu người chơi (né giỏi, trung bình, kém) | Oxy mất do combat mỗi chuyến, tỉ lệ chuyến hết Oxy | Combat chiếm 10 đến 25% Oxy một chuyến người chơi trung bình. Hết Oxy 10 đến 20% (khung mục 9) |
| S2 | Bắt sống có áp đảo hạ không | Mục 3.3, 3.4, bảng 3.8, giá vật tiêu hao của gd-economy | Giá trị ròng mỗi phút của bắt và hạ mỗi loài (giá trị mẫu trừ vật tiêu hao), theo từng đường bắt | Như bảng "Hai thước đo" ở 3.8: từ 1,0 cho mọi loài, cỡ M bắt bằng choáng hoặc mê không quá 1,6, cỡ S được vượt vì chặn bằng Lồng mẫu. Không phải K9 |
| S3 | Co-op có khóa vĩnh viễn được không | Luật 13, 17, mục 6b, N = 1 đến 4 | Tỉ lệ thời gian một con bị Bất lực trong 60 s | Dưới 70% với N = 4 |
| S4 | Gánh combat mỗi người theo số người | Mục 6b, k(N) của gd-world | Thời gian combat mỗi người mỗi chuyến với N = 1 đến 4, thời gian hạ mỗi boss | Gánh mỗi người 0,9 đến 1,1 lần chơi một mình. Boss nhóm 4 mất 60 đến 75% thời gian một mình |
| S5 | Boss dài bao lâu, tốn bao nhiêu Oxy | Mục 3.7 | Thời lượng mỗi boss và Oxy mỗi người (P90), một mình và 4 người | Thời lượng theo cột mục tiêu ở 3.7. Người trung bình đánh một mình: Oxy P90 không quá 75% bình Oxy của chương. Người tệ đánh một mình: Oxy P50 không quá 100% bình (có thể thua lần đầu, nhưng không phải chắc thua) |
| S6 | Báo trước đủ để né không | Báo trước, tốc độ, gia tốc, hãm của prototype bộ đẩy | Thời gian từ thấy báo trước tới ra khỏi vùng trúng | Ra khỏi vùng trúng trước khi đòn đánh, với phản xạ 0,27 s |

### Tiêu chí nghiệm thu (gd-qa kiểm)

1. Mỗi loài có ít nhất một lý do bắt sống và một lý do hạ (hoặc ghi rõ vì sao không hạ được) ở bảng 3.5.
2. Không hai loài cùng kiểu hành vi và cùng cách khắc chế. Kiểm bằng bảng 3.5 cột Hành vi riêng và Khắc chế.
3. Mọi đòn ở bảng 3.4 có báo trước đúng luật 8.
4. Bảng trạng thái không có trạng thái cụt.
5. Mọi luật có nhãn MVP hoặc Sau MVP.
6. Chơi một mình thắng được mọi boss theo mô tả cơ chế (không cơ chế cần hai người cùng lúc).
7. MVP có đúng 4 loài dải Gần và 1 boss.
8. Trên prototype bay (`tools/prototype/bay.html`, chế độ thử né phím T): người chơi mới né được đòn hẹp báo trước 0,7 s bằng bay thường, không lướt, ít nhất 70% lần sau 3 lần thử.
9. Trên prototype bay: người chơi mới thoát khỏi đòn vùng bán kính 2,5 u báo trước 1,0 s bằng bay thường ít nhất 70% lần sau 3 lần thử. Biên thiết kế hiện tại: đòn hẹp 0,7 s so với 0,67 s cần để bay ra, đòn vùng 1,0 s so với 0,92 s, nên hai tiêu chí này là kiểm thật, có thể trượt.
10. Trên prototype bay: người chơi mới thoát khỏi vùng phóng điện bán kính 4 u của lõi BS-1 (báo trước 1,3 s) từ sát lõi bằng bay thường ít nhất 70% lần sau 3 lần thử. Phép tính ước: phản xạ 0,27 s cộng khoảng 0,9 s bay 4,4 u từ đứng yên là khoảng 1,2 s, biên 0,1 s.

## 9. Lệch khỏi tham chiếu

Dữ kiện Dave the Diver từ `docs/knowledge/indie/06-dave-the-diver-cau-truc.md` và `docs/knowledge/indie/20-combat.md`.

| Dave làm thế nào | The Novent làm thế nào | Vì sao lệch |
|---|---|---|
| Oxy hao nhanh khi bị tấn công, hết Oxy là hết lượt lặn [D14] | Giữ: trúng đòn trừ Oxy (K1) | Không lệch |
| Bắt sống bằng Net Gun hoặc drone kèm Tranquilizer, cá ngủ thì bơi lại thu [D8][D11] | Giữ cấu trúc: Súng lưới cho S, Súng gây mê, Phao kéo cho M | Không lệch về cấu trúc. Thêm Dùi xung làm cách bất lực nhanh và ngắn, để có lựa chọn choáng hay mê |
| Cá bị bắn bằng súng giảm hạng, bắt sống giữ hạng cao (theo review và guide) | Sao theo Sinh lực lúc bắt. Hạ cho 1 sao, Kết nhanh cho 2 sao | Một luật duy nhất thay vì luật theo từng loại súng, dễ hiểu và dễ cân |
| Súng lưới của Dave bị người chơi chê không bắt được cá to dù lưới to hơn cá (thảo luận Steam) | Súng lưới trúng con M trở lên thì quấn chậm 2 s và báo rõ "quá to, cần Phao kéo" | Giới hạn của Súng lưới có lý do nhìn thấy được |
| Combat của Dave bị review gọi là đủ dùng, góc ngắm hẹp | Ngắm tự do 360 độ vì bay tự do 8 hướng, có hỗ trợ ngắm gamepad | Không gian không có hướng trên dưới cố định |
| Một người chơi | 1 đến 4 người, vé tấn công riêng, hệ số co-op | Khung C1 |
| Cá to không bắt được bằng lưới, người chơi chê (thảo luận Steam) | Cỡ L không bắt sống, chỉ sinh thiết. Mẫu sinh thiết rẻ hơn một lần hạ (`vat-pham.md`: 0,45 lần), đổi lại nhanh hơn nhiều và con vật sống, bỏ đi | K9 sửa lần 5 (log GDM dòng 66) chỉ áp cho loài cỡ S, M. Sinh thiết cỡ L là đường khác, dùng cho nghiên cứu. Hạ cỡ L lâu và nguy hiểm nên cho nhiều giá trị hơn, sinh thiết nhanh và an toàn |
| Không có phe địch có vũ khí rõ ràng ở các dải chính | The Wardens từ chương 3 | Khung B3, B8, chương 3 thêm kiểu chơi "kẻ địch có vũ khí" |

## 10. Câu hỏi mở

| # | Câu | Đề xuất | Ai quyết |
|---|---|---|---|
| Q1 | Súng lưới mở chương 1 hay chương 2 | GDM đã xử, log dòng 49: chương 1, MVP | Xong |
| Q2 | Có nên cho Lồng mẫu làm chậm người kéo để thêm cái giá cho bắt sống cỡ S | Không, giữ lớp Nhẹ của `nguoi-choi.md`. Xem lại khi có playtest | gd-combat, gd-character |
| Q3 | Xua đi boss có cho thưởng truyện khác không | Có một dòng thoại khác của Nhà sinh học, không đổi nhánh truyện | gd-story |
| Q4 | Driftlife bị Warden Harvester kéo về Barge có mất hẳn không | Đã chốt với gd-world: mất khỏi chuyến đó, không ảnh hưởng gì khác | Xong |
| Q5 | Sim cho BS-5 Daskel, toán bắt cóc C3.8 và hộ tống kén C5.1 khi nào chạy | Chưa đo, ghi backlog vì cả ba là Sau MVP (nguyên tắc 12). Khi GDM mở phạm vi thì gd-tech chạy theo thứ tự BS-5, toán bắt cóc, hộ tống. Hộ tống cần thêm mô hình kéo vật vào sim | GDM |

## Driftlife trong trạm (sự cố sổng khoang nuôi, K14)

Luật sự cố, thời gian, hậu quả là của gd-quan. gd-combat chỉ cấp hành vi. Sau MVP (sự cố và nuôi chưa có ở MVP, xem K14, K16).

| Kiểu loài sổng | Hành vi trong mặt cắt trạm | Cách người chơi xử |
|---|---|---|
| Hiền (DL-G01, DL-M02) | Đi lang thang qua các khoang, dừng nuốt hàng trong khoang đang đứng | Đi tới tóm (Tương tác giữ 0,8 s) |
| Chạy trốn (DL-G02, DL-X01) | Chạy khỏi người chơi trong bán kính 3 u, trốn vào góc khoang | Dồn vào góc hoặc hai người chặn hai cửa |
| Đi bầy (DL-G04, DL-M04, DL-X05) | Sổng là 3 con tách ra 3 khoang | Tóm từng con |
| Giữ lãnh thổ (DL-G05, DL-M03) | Đứng chặn cửa một khoang, đẩy người chơi ra (0 Oxy, trong trạm không có Oxy) | Đưa mồi (vật phẩm nuôi của gd-items) để dụ ra, rồi tóm |

- Trong trạm không có Oxy giảm, không có sát thương. Driftlife sổng không chết và không mất. Không có dụng cụ combat trong trạm (luật 7).
- Con sổng nuốt và giữ hàng trong khoang nó đứng (hàng thô trong kho, hàng đã chế trong xưởng, hoặc kiện trên kệ). Hàng không mất: tóm được thì hàng nó giữ về chỗ cũ và con tự về ô nuôi. Bỏ mặc thì nó nuốt tiếp tới hết ca, hết ca con tự về và hàng về kho, kệ. Cái giá là hàng bị giữ không giao được trong ca (luật 46 của `tram-va-cang.md`). Số theo `tram-va-cang.md` bảng 2.8:

| Tham số | Giá trị | Khoảng an toàn | Chủ |
|---|---|---|---|
| Nhịp nuốt và giữ hàng | 1 đơn vị mỗi 20 s | 10 đến 40 s | gd-quan |

## Phản biện khung

| # | Vấn đề | Lý do và bằng chứng | Phương án thay |
|---|---|---|---|
| PB1 | Khung mục 7 cho "bắt sống và nuôi" là kiểu chơi mới của chương 2, và MVP là chương 1. Vậy MVP không có bắt sống, không kiểm được K9 (bắt sống luôn đáng hơn) là luật làm game khác game săn thường | K9 và P2 là điểm khác biệt chính. Kho tri thức 20-combat N6: bắt sống phải có lý do kinh tế mới có người dùng, mà lý do kinh tế cần được thử sớm. Ca cảng MVP đã có hàng "Kiện mẫu Driftlife" (`tram-va-cang.md`) nhưng chưa có lồng sống | GDM đã xử, log dòng 49: Súng lưới cỡ S mở chương 1, nhãn MVP, cảng chương 1 có 1 loại hàng Driftlife sống. GDD đã sửa theo (luật 19 đến 25, bảng 3.3, tutorial) |
| PB2 | C8 nói máu Driftlife tăng theo số người, nhưng nếu chỉ tăng máu thì co-op khóa choáng mãi | Choáng cộng từ nhiều nguồn cùng lúc | Đã xử trong hệ thống: tăng cả ngưỡng choáng, ngưỡng mê và DR. Không cần đổi khung |

## Điểm tự quyết

| # | Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|---|
| 1 | Ngắm | Tự do, không khóa mục tiêu, gamepad hỗ trợ 6 độ | Bay 8 hướng, người chơi cần chọn đúng con trong bầy | Khóa mục tiêu | Vừa |
| 2 | Miễn sát thương sau khi trúng | 0,8 s | Chống bị bầy đánh liên hoàn, kho tri thức N8 | Không có | Rẻ |
| 3 | Lướt có miễn sát thương | 0,2 s đầu | Cách né chủ động duy nhất, kỹ năng người giỏi | Không có | Rẻ |
| 4 | Hai cách làm bất lực | Choáng nhanh ngắn, Mê chậm dài | Cho lựa chọn dụng cụ theo tình huống, không chỉ hơn kém số | Một cách duy nhất | Vừa |
| 5 | DR | Miễn 2 s, ngưỡng x1,5 tới x3 | Chống khóa, nhất là co-op 4 người | Không có | Rẻ |
| 6 | Bắt theo cỡ | S lưới hoặc tay, M Phao kéo, L sinh thiết | Mỗi cỡ một động tác khác, L không vào khoang nuôi | Mọi cỡ bắt như nhau | Vừa |
| 7 | Chất lượng | 1 đến 3 sao theo Sinh lực lúc bắt | Một luật cho mọi dụng cụ, thưởng bắt khéo | Theo loại súng như Dave | Rẻ |
| 8 | Kết nhanh | Hạ con bất lực cho 2 sao, có từ MVP | MVP có lý do làm choáng trước khi hạ, dạy trước động tác bắt | Không có | Rẻ |
| 9 | Mẫu sống cỡ S đi trong Lồng mẫu kéo theo, tối đa 3 con, 1 lồng mỗi người | Có | Khớp `vat-pham.md` (mẫu sống là vật kéo). Cái giá thấy được của bắt sống | Vào túi chiếm gấp đôi chỗ | Rẻ |
| 10 | Vé tấn công | 2 ở dải Gần, 3 ở Giữa và Xa, riêng từng người | Đông mà vẫn công bằng, co-op tự cân | Không giới hạn | Vừa |
| 11 | Không sát thương đồng đội, Lao từ kéo đồng đội | Có | C1 không PvP. Kéo đồng đội là động từ co-op rẻ, giúp cứu người ngạt | Bỏ qua va chạm với đồng đội | Rẻ |
| 12 | Không dụng cụ combat trong trạm | Có | Trạm là nhà, sự cố xử bằng tay | Cho bắn trong trạm | Rẻ |
| 13 | Số loài | 5 mỗi dải, 6 kiểu hành vi | Brief 4 đến 6. 5 đủ phủ các kiểu mà không vượt sức 1 artist | 6 mỗi dải | Vừa |
| 14 | Shepherd Whale không hạ được | Có | Không phải sinh vật nào cũng để đánh, giữ chủ đề nuôi thay vì săn (B10) | Hạ được với máu rất lớn | Rẻ |
| 15 | Boss Driftlife có hai cách kết | Hạ hoặc Xua đi | Lựa chọn nuôi thay vì săn ở khoảnh khắc lớn nhất, chi phí thấp vì dùng chung phòng | Chỉ hạ | Vừa |
| 16 | Dấu săn bắt trên Driftlife | Chỉ là hình, không đổi chỉ số | Kể cú lật qua thứ người chơi gặp (P4) mà không đặt manh mối chính ngoài map nhánh (K7) | Manh mối rơi từ Driftlife | Rẻ |
| 17 | The Wardens khác Driftlife | Bắn xa, phối hợp, khiên, không bắt sống, miễn mê | Kiểu chơi mới thật sự ở chương 3 | Driftlife mạnh hơn | Vừa |
| 18 | Driftlife thù The Wardens | Có (Sau MVP) | Cho người chơi dùng thế giới để đánh, kể chuyện qua hành vi | Hai phe làm ngơ nhau | Rẻ |
| 19 | Hệ số co-op | Sinh lực và ngưỡng Driftlife bằng N chia k(N) của dải (bảng 6b), boss và The Wardens +60% cả Sinh lực lẫn ngưỡng, sát thương không đổi | Chốt với gd-world. Sim S4 đã chạy: kiểu chia đúng 1,00, kiểu dồn 1,07 đến 1,38 ở 4 người (cỡ M, L), nhóm tự tách cặp. Mục tiêu 0,9 đến 1,1 áp cho kiểu chia | Công thức tuyến tính +22%, +40%, +50% | Rẻ |
| 20 | Boss hồi khi cả nhóm rời phòng | Có, khi không còn ai trong phòng quá 10 s hoặc cả nhóm về trạm. Cửa không khóa | Đơn giản, không có trạng thái boss dở dang. Người chơi một mình luôn rút được (P1) | Giữ máu boss qua chuyến, khóa cửa | Rẻ |
| 21 | Cái giá của bắt sống | Vật tiêu hao (Lưới cuộn, Ống gây mê, Phao kéo, Kim sinh thiết), Lồng mẫu 3 con, bắt tay chậm 1,5 s. Lồng không làm chậm người kéo (`nguoi-choi.md` lớp Nhẹ) | Sim 3.8 cho thấy bắt nhanh bằng hoặc hơn hạ, nên cái giá phải nằm ngoài thời gian. Chấp nhận bắt cỡ S trội khi lồng còn chỗ | Lồng làm chậm người kéo (cần gd-character đổi lớp Nhẹ), thanh vật lộn khi bắt | Rẻ |
| 22 | Ghim Lồng mẫu khi bị kéo về | Giữ 1 con, sao cao nhất | Đề xuất của gd-economy: giữ cả lồng thì K2 mất tác dụng với người bắt sống | Giữ cả lồng | Rẻ |

## Lịch sử thay đổi

| Ngày | Thay đổi | Lý do | Ai |
|---|---|---|---|
| 2026-11-20 | Tạo bản đủ đầu tiên | GD-024 | gd-combat |
| 2026-11-20 | Mục 7 hàng "Bắt được" thành MVP khớp luật 19 đến 21. Mục 5 câu khóa choáng ghi kết quả S3 đã đo thay cho "chưa đo" | Soát khi viết GDD con bản đọc GD-036 | gd-combat |
| 2026-11-20 | Mục 2.8 và luật 42 khớp `map.md` đã chốt: C3.8 về Ember qua beacon hoặc cửa khí, C5.1 từ cửa N4 tới cửa The Hearth, kén không theo beacon khi hộ tống, lưu ở beacon gần nhất giữa các chuyến | Tin gd-world, QA map L2 L3 | gd-combat |
| 2026-11-20 | QA GD-033: luật 34 lưới trói tự tan sau 2 giây, người kéo vật Nặng chờ hoặc thả vật, thêm E20. Luật 40 ghi BNG-102 và gỡ kén 2 giây. BS-5 pha 3 bỏ "đánh lõi", ghi rõ sàn vỡ không gây thua. Sửa sót "dấu thu hoạch" | Phiếu `qa/GD-033-combat-driftlife.md` | gd-combat |
| 2026-11-20 | Đợt 6, tên của gd-story: X là Daskel (độc tài Sennar), Y là Sevra Ilvane. Toán bắt cóc do Maro chỉ huy ở C3.8. Mục 2.8 đổi thành kéo kén của Sevra (vật kéo lớp Nặng, không bị nhắm). BS-5 ở Command Deck, kết là khuất phục và bắt giữ, bỏ đồ rơi bản đồ sao và bản khảo sát | Tin gd-story GD-033 | gd-combat |
| 2026-11-20 | Đợt 6 phản diện mới (phần không cần tên): Dấu săn bắt theo B6 mới, The Wardens là quân của X, toán bắt cóc Y chương 3 (luật 44), Y trong combat khi hộ tống (luật 40 đến 43) | Brief đợt 6, khung sửa lần 6, log 84 đến 92 | gd-combat |
| 2026-11-20 | Đợt 4: K9 sửa lần 5 (sinh thiết ngoài K9, log 66), K27 cho Lồng mẫu khi Ngạt, C10 cho rớt mạng, K23 lưu trạng thái boss | Brief đợt 4, khung sửa lần 5 | gd-combat |
| 2026-11-20 | BS-1 húc pha 2 từ 12 xuống 10 Oxy để người tệ một mình đạt Oxy P50 dưới 330 | Tin gd-tech, sim S5 tách nguồn Oxy | gd-combat |
| 2026-11-20 | 6b dải Gần theo k(N) mới (0,30). Luật 36: Driftlife do boss sinh ra không rời phòng, lối sau phòng đóng tới khi boss kết thúc | Tin gd-world, QA map lỗi 8 | gd-combat |
| 2026-11-20 | BS-1 giảm phun Krill (2 con, hồi chiêu 20, tối đa 3 sống). Mục tiêu S5 tách người trung bình và người tệ. Chép lại 3.8, S4 | Tin gd-tech: người tệ một mình vượt Oxy | gd-combat |
| 2026-11-20 | Mirror Mantis ngưỡng mê 280, ghi tốc độ quay mặt gương. BS-1 pha 2 thân nhận sát thương mọi lúc. Chép lại 3.8, S4 từ sim mới | Tin gd-tech: sim đọc 3.4b, S5 quá nặng | gd-combat |
| 2026-11-20 | Thêm Lao từ bậc 2, bậc 3 | Tin gd-items, QA lỗi 8 (UPG-HAR không có hiệu ứng) | gd-combat |
| 2026-11-20 | QA vòng 2: bảng 3.2 bắt tay 1,5 s, luật 24 ghi trừ vật tiêu hao, S2 đồng bộ "Hai thước đo", 6b gom bảng hệ số và thêm hàng cỡ S vào kết quả S4, E9 theo luật 36, báo trước đòn vùng trên 3 u là 1,3 s, tiêu chí 10, bảng 3.8 và S4 chép bằng script | Phiếu GD-031 vòng 2 | gd-combat |
| 2026-11-20 | Sau sim S2, S5: ngưỡng mê Mirror Mantis 210. BS-1 Sinh lực 600, đòn nhẹ hơn, mục tiêu 1 đến 2 phút, Xua đi cần 2 lần cắt và Sinh lực dưới 50%. 3.8 lấy bảng sim mới có cột đường bắt | Tin gd-tech | gd-combat |
| 2026-11-20 | Luật 8 thêm chỉ báo mép màn cho đòn từ ngoài màn | Tin gd-ux | gd-combat |
| 2026-11-20 | Driftlife sổng nuốt và giữ hàng, không làm mất hàng | Tin gd-quan, luật 46 `tram-va-cang.md` | gd-combat |
| 2026-11-20 | Luật 36 trỏ tới beacon cố định ngoài mỗi phòng boss | Tin gd-world, `map.md` 2.5.7 | gd-combat |
| 2026-11-20 | QA vòng 1 (GD-031): tách thước đo K9 và ròng mỗi phút, bỏ "kéo chậm", bắt tay 1,5 s, Arc Eel MVP chỉ hạ, 3.4b đòn và di chuyển, boss miễn dụng cụ và hệ số co-op, BS-1 viết lại, cửa phòng boss không khóa, Mẫu boss theo `vat-pham.md`, DR viết lại, E18, E19, tiêu chí 9 | Phiếu `qa/GD-031-combat-driftlife.md` | gd-combat |
| 2026-11-20 | Cập nhật số S3, S4 theo sim tự đọc k(N) từ `map.md` | Tin gd-tech | gd-combat |
| 2026-11-20 | Ghi kết quả S4 có cột bắt dồn, nhận không đổi số | Tin gd-tech | gd-combat |
| 2026-11-20 | Cập nhật bảng 6b theo k(N) mới của gd-world (Gần 0,27, Giữa 0,25, Xa 0,38) | Tin gd-world | gd-combat |
| 2026-11-20 | Hệ số Sinh lực và ngưỡng Driftlife theo số người đổi thành N chia k(N) của từng dải | k(N) của gd-world đổi theo dải | gd-combat |
| 2026-11-20 | 3.8 lấy số từ sim chính thức của gd-tech (có Chạy trốn, giá mẫu mới). Arc Eel ròng 1,57 đạt. Nhận Mantis 1,82 và loài Chạy trốn cao | Tin gd-tech | gd-combat |
| 2026-11-20 | Súng gây mê 60 điểm mỗi 3 s, ngưỡng mê Arc Eel 90, Mirror Mantis 150. Viết lại 3.8 theo sim có bay tới và vật tiêu hao | Tin gd-tech: hai loài bắt bằng mê ròng âm | gd-combat |
| 2026-11-20 | Báo trước tối thiểu theo prototype bay: đòn hẹp 0,7 s, đòn vùng 1,0 s. Nâng các đòn 0,5 và 0,6 s lên 0,7 s, phóng điện Arc Eel 1,0 s | Tin gd-tech GD-030 | gd-combat |
| 2026-11-20 | Luật 25: ghim Lồng mẫu chỉ giữ 1 con | Tin gd-economy, lỗ hổng K2 | gd-combat |
| 2026-11-20 | Sửa S2 theo sim của gd-tech: ngưỡng choáng và mê cỡ M lên khoảng 1,5 lần Sinh lực, Dùi xung 20 điểm, Súng gây mê 40 điểm mỗi 2 s. Viết lại 3.8 theo số sim | Sim GD-030: bắt áp đảo hạ 5 tới 8 lần mỗi phút | gd-combat |
| 2026-11-20 | Kết nhanh tách khỏi Tương tác, thêm E17 | Tin gd-ux: trùng phím với bắt tay cỡ S | gd-combat |
| 2026-11-20 | Luật 10 và E9: người Ngạt hoặc Được cứu không bị nhắm, không nhận sát thương. Bỏ số ô dụng cụ khỏi 3.3, trỏ về `nguoi-choi.md` | Lệch số 6 của gd-character | gd-combat |
| 2026-11-20 | Thêm Súng lưới bậc 2 (UPG-NET-2) theo `vat-pham.md` | Tin gd-items | gd-combat |
| 2026-11-20 | Hệ số co-op chốt với gd-world: Sinh lực và ngưỡng Driftlife +22% mỗi người, k(N) 0,47 của gd-world, thêm dòng kiểm gánh mỗi người | Tin gd-world, hai hệ số nhân chồng | gd-combat |
| 2026-11-20 | Đợt 1b: Súng lưới cỡ S và Lồng mẫu thành MVP từ chương 1 (log 49). Sinh lực Driftlife co-op +40% mỗi người theo mục tiêu mới (log 50). Thêm 3.8 thời gian bắt so với hạ, đổi đề sim S2, S4 | Brief đợt 1b, khung sửa lần 2 | gd-combat |
| 2026-11-20 | Thay mọi chỗ chờ gd-items bằng ID chốt trong `vat-pham.md` (BPS, SMP-192, 291, 292, RES-301, 305, 401, STY-501, CON-106, 107, TOL-501) | Tin gd-items | gd-combat |
| 2026-11-20 | Nơi đặt boss theo `map.md` 2.10 (gd-world chốt): BS-2 về Station Lantern, BS-4 ở Lõi máy, thêm hệ số số Driftlife theo N | Tin gd-world | gd-combat |
| 2026-11-20 | Thêm bảng điểm sinh và rơi, đổi tên dụng cụ theo ID gd-items, mẫu sống đi trong Lồng mẫu kéo theo thay vì vào túi, đặt boss chương 2 và 3 vào SS-3 và SS-4 | Tin của gd-world, gd-items, gd-story | gd-combat |
| 2026-11-20 | BS-5 rơi bản đồ sao thật | Khung đổi: Solace là mồi, chương 5 lấy bản đồ sao ở Warden Rig (DECISIONS 2026-11-20) | gd-combat |
| 2026-11-23 | Sửa câu văn theo đánh giá humanizer (production/reports/2026-11-23-humanizer-gdd.md): bỏ lịch sử trong thân luật, phủ định thừa, câu chốt lặp. Không đổi luật, số, ID | Đánh giá humanizer GDD | gd-combat |
| 2026-11-23 | Theo rà chéo Sheet nhóm B (qa/2026-11-23-ra-cheo-B.md): WD-04 và BS-3 rơi Linh kiện Warden (đúng tên trong ITEM LIST), bỏ chữ hiếm. Không đổi luật | Đánh giá humanizer GDD | gd-combat |

### Số BS-1 trước sim S5 (chuyển từ mục 3, 2026-11-23)

Kết quả S5 lần đầu cho BS-1 (sim của gd-tech) và các thay đổi sau đó, chờ gd-tech chạy lại S5:

| Chỉ số | Bản cũ | Kết quả sim bản cũ | Hiện hành |
|---|---|---|---|
| Sinh lực | 400 | Hạ một người trung bình 0,9 phút (P50), quá ngắn | 600 |
| Đòn quét, húc, phóng điện (Oxy) | 12, 16, 12 | Oxy P90 người tệ đánh một mình 385, vượt bình chương 1 (330) | 8, 10, 8 |
| Thời lượng mục tiêu | 2 đến 4 phút | Không vừa bình Oxy chương 1 cộng đường đi | 1 đến 2 phút |
| Xua đi | 1 lần cắt | 0,4 phút, là đường tắt | 2 lần cắt Dây nối, lần hai khi Sinh lực dưới 50% |
| Thân ở pha 2 | Chỉ nhận sát thương khi Choáng (lần sim thứ hai đọc như vậy) | Hạ một người trung bình 3,3 phút P50, Oxy P90 710. Người tệ 7,9 phút | Nhận sát thương mọi lúc. Chỉ pha 1 cần Choáng |
| Phun Krill ở pha 1 | 3 con mỗi lần, hồi chiêu 15, tối đa 6 sống | Pha 2 bắn được mọi lúc: thời lượng đạt (người trung bình một mình 1,3 phút P50, Oxy P90 229). Người tệ một mình vẫn tốn Oxy P90 456, phần lớn do quét và Krill | 2 con mỗi lần, hồi chiêu 20, tối đa 3 sống |
| Húc ở pha 2 | 12 Oxy | Sau khi giảm Krill: người tệ một mình Oxy P50 344, vẫn trên 330. Tách nguồn: Krill 97, húc 92, phóng điện 33, quét 20. Thử húc 10 ra 329 | 10 Oxy. Thời lượng người trung bình một mình 1,2 phút, Oxy P90 210. Xua đi một mình xong trong 10 phút: người tệ 80%, trung bình 90%, phần còn lại vẫn hạ được |
