# GD-033 vat-pham

Cập nhật 10:45: gd-items sửa BNG-102 (file 10:40). gd-qa grep `vat-pham.md` và `ITEM LIST.tsv`: không còn "mất giữa đường thì về chỗ cũ", ghi kén nằm lại chỗ thả, lưu ở beacon cố định gần nhất đã qua, chưa qua thì ở cửa N4, ngoài K2, khớp combat luật 42, 43 và `map.md` 2.7.9. validator 0 lỗi. Kết luận ĐẠT, 0 chặn, 0 nặng.

ĐẠT (sau gd-items sửa 10:40), trước đó TRẢ LẠI - còn 1 lỗi nặng (kén BNG-102 mất giữa đường "về chỗ cũ như vật nhiệm vụ" ở `vat-pham.md:505` và `ITEM LIST.tsv:146`, mâu thuẫn `combat-driftlife.md` luật 42, 43 và `map.md` mục 2.7.9). Không có lỗi chặn, không có ý cũ trong luật, không có hệ thống mới. Còn 5 lỗi nhẹ.
Giờ sửa file khi chấm: `vat-pham.md` 10:15:53, `ITEM LIST.tsv` 10:15:53, `sim/vat-pham.mjs` 10:15:42 (`ls -l`, 2026-11-20, đã đứng yên 20 phút trước giờ chấm 10:36 đến 10:38). Các file đối chiếu: `tram-va-cang.md` 10:29, `map.md` 10:29, `cot-truyen.md` 10:32, `combat-driftlife.md` 10:34, `kinh-te-tien-trinh.md` 10:10.

Lệnh đã chạy (ra thư mục tạm, không ghi đè): `node projects/game-moi/sim/vat-pham.mjs` thoát mã 0, 0 lỗi, 146 vật phẩm, 84 công thức, 14 điểm khai thác, 9 trang bị, 9 kiện nhãn MVP. Chạy `--ghi` trên bản sao rồi diff với file thật: mọi khối B khớp, chỉ lệch phút của dòng giờ. `node projects/game-moi/tools/validate-gdd.mjs` ra 2 lỗi, cả hai ở `ky-thuat.md:279` (còn "Sundering" và "chờ GDM"), không có lỗi nào ở `vat-pham.md`. `node projects/game-moi/qa/quet-phan-dien.mjs --chi-tiet` lọc "vat-pham|ITEM": chỉ còn hai dòng ở bảng đếm tên (Serith, Sevra, Ilsume, The Hearth), 0 dòng ý cũ ở `vat-pham.md` và `ITEM LIST.tsv`. Hit đầu đợt (bản khảo sát bị giấu, thu hoạch công nghiệp, "The Heart") đã hết ở hai file này.

## Tóm tắt lỗi
| Mức | Số lỗi |
|---|---|
| Chặn | 0 |
| Nặng | 1 |
| Nhẹ | 5 |

## Bảng P1 đến P15 (có trong file này không, dòng nào)
Vật phẩm là hệ thống phụ trợ, chỉ một phần P chạm tới. Ghi "không áp" nghĩa là ý đó thuộc cốt truyện, không đòi có ở file vật phẩm, không phải thiếu.
| # | Có trong file | Dòng và nhận xét |
|---|---|---|
| P1 | Đúng (không có ý "tham lam hơn loài người") | Grep tham lam, lòng tham, ghét: 0 hit ở `vat-pham.md` và `ITEM LIST.tsv` |
| P2 | Có, qua vật | STY-412 Hiến chương định cư United Accord (dòng 497, MM4.2 ở N7 khe M2): khớp `cot-truyen.md:467` (hiến chương không nói loài người xấu). STY-502 (dòng 503): khớp `cot-truyen.md:516` |
| P3 đến P6, P8 | Không áp | Cốt truyện và hồ sơ, không cần vật |
| P7 | Có, qua vật | STY-414 Bản gốc Lodestar Survey (dòng 498, `cot-truyen.md:469`), STY-502 Lệnh phục kích mang dấu Serith. Solace là mồi giữ nguyên, không có "Solace có thật" |
| P9, P10 | Có | BNG-102 Kén thoát hiểm của Ilsume (dòng 505), nơi cứu N4 Waypost Outer Ring, mốc C3.8, khớp `map.md:151`, `:227` và `combat-driftlife.md` mục 2.8 (trừ lỗi 1) |
| P11, P12 | Không áp | Cốt truyện. The Kindling xuất hiện qua nhóm hàng HC15 và TA11 (ngoài file này) |
| P13 | Có | Nối tình báo là CGO-421 Kiện tin mật, RCP-422, STY-701 (luật C7 dòng 84, ITEM, RECIPE), dùng ca cảng sẵn có, khớp `tram-va-cang.md:77` (HC15), `:241` (TA11), `cot-truyen.md:33` |
| P14 | Không áp | Cảnh kết |
| P15 | Có | STY-501 (dòng 501): ghi rõ "Tọa độ hành tinh thật do Sevra trao ở C5.6 là cảnh truyện, không phải vật", khớp `cot-truyen.md:506` và `:1267` điểm 42. Không thêm vật mới |

## Bảng ý cũ còn sót (dòng, trích)
Không còn ở phần đổi của `vat-pham.md` và `ITEM LIST.tsv`.
| Ý cũ | Kết quả | Ghi chú |
|---|---|---|
| tham lam hơn loài người, ghét vì tham lam, lòng tham, đạo đức giả | 0 hit | |
| bản khảo sát bị giấu | 0 hit | STY-502 đã đổi tên "Lệnh phục kích Cradle mang dấu Serith" |
| thu hoạch công nghiệp, dấu thu hoạch | 0 hit | STY-301 đã đổi "Mẫu mang dấu săn bắt Wardens". Còn "Xác máy thu hoạch / Harvester Wreck" (STY-313 dòng 495, `ITEM LIST.tsv:136`) là tên máy, cùng tên với MM3.3 ở `cot-truyen.md:401`, không phải ý cũ |
| kẻ canh giữ, đàn được bảo hộ | 0 hit | STY-312 "Lời tuyên bố khu bảo hộ" (dòng 494) trùng tên MM3.2 của gd-story, nội dung là lời tuyên bố của Serith trong truyện, để gd-story tự chấm |
| The Sundering, The Heart, chưa có đích, Wardens là chủng tộc | 0 hit | Dòng 677 nay ghi "The Hearth" đúng |
Hit ngoài phạm vi file này (chuyển GDM, không chấm): scanner còn ghi "kẻ canh giữ" ở tên Chương 3 (`00-khung-game.md:146`, `cot-truyen.md:141`, `:380`, `:1156`, các tab CORE LOOP, Day, GAME STORY), "thu hoạch công nghiệp" ở `Assets.tsv:74`, và `ho-so-nhan-vat.md:125`, `:353`.

## Bảng tên (khớp hay lệch với các file khác)
| Tên | Ở `vat-pham.md` và ITEM LIST | Kết quả |
|---|---|---|
| Serith (WD-P1, BS-5) | STY-502, ghi "Không rơi từ Serith" (dòng 501, 503) | Khớp `combat-driftlife.md:734` (bỏ đồ rơi), `map.md:231`, `:255` |
| Sevra, Ilsume (TR-2, TA04) | BNG-102 "Kén thoát hiểm của Ilsume" (dòng 505), C3.8 | Khớp `cot-truyen.md:395` và `tram-va-cang.md:645` |
| The Hearth | Dòng 505, 677 | Khớp `map.md:39`, `:191`, `:227` |
| The Kindling, TA11, HC15 | Dòng 84 (C7), 472 (CGO-421) | Khớp `tram-va-cang.md:57`, `:77`, `:241`, `cot-truyen.md:23`, `:33`, `:1208` |
| United Accord | STY-412 dòng 497 | Khớp `cot-truyen.md:467` |
| The Wardens (chế độ, quân) | "Mẫu mang dấu săn bắt Wardens", "Linh kiện Warden", "Hợp kim Warden", "Warden Rig" | Khớp ngữ cảnh. Lệch nhỏ: RES-301 nguồn "Đơn vị The Warden hạ được" (số ít, dòng 371, `ITEM LIST.tsv:12`), N3 bên dưới |
| Sennari, Sennar, Ilvane, Maro, The Meeting War | Không xuất hiện trong file | Không áp |

## Hệ thống mới (có hay không)
Không. Kiện tin mật CGO-421 là một ID kiện thường: đóng bằng RCP-422 ở máy đóng kiện sẵn có (Cảng, 6 giây, nhãn Sau MVP, chương 4), vào nhóm hàng HC15 của ca cảng sẵn có, có cỡ (Nhỏ, 90%) như kiện khác. STY-701 là vật nhiệm vụ không giá, chiếm 1 Khối, tối đa 1 gói mỗi ngày. BNG-102 dùng luật kéo buồng ngủ đông, không có luật riêng. Không thêm tiền, phe, chủng tộc hay chế độ chơi. Đồ thị công thức quét lại: 0 chu trình. Mọi nhãn mới là Sau MVP, MVP không đổi (9 kiện MVP, 7 SLV, 6 nâng cấp như vòng cuối GD-031).

Kiểm giá và vòng tiền của CGO-421:
- GTĐ 86,9 bằng đúng kiện vỏ bọc rẻ nhất trong nhóm (CGO-312), RCP-422 hệ số 1,00, STY-701 giá trị 0, không mua bán. Chế rồi bán không sinh lời: đổi 1 kiện vỏ bọc (870 Tally) lấy 1 kiện tin mật (870 Tally).
- Giá lấy từ bảng, không gõ tay (K19, K20): `kinh-te-tien-trinh.md:103` có hàng CGO-421, GTĐ 86,9, 870 Tally, Sau MVP. `Shop.tsv:26` cùng giá. Công thức 10 Tally mỗi GTĐ của kinh-te cho đúng 869 làm tròn 870.
- P2: STY-701 có nơi dùng là RCP-422 (nhãn Sau MVP, cùng nhãn nguồn). Các kiện vỏ bọc CGO-306, 307, 311, 312, 313 có thêm nơi dùng RCP-422, nhận ở dòng 465 đến 469.

## Khớp vật truyện với `cot-truyen.md` (yêu cầu 6)
| Vật | vat-pham.md | cot-truyen.md | Kết quả |
|---|---|---|---|
| STY-412 | MM4.2, N7, hiến chương định cư United Accord, Sau MVP | Dòng 467: MM4.2, N7 khe M2 Main Cryo Deck, nội dung hiến chương | Khớp. `map.md:254` cũng M2 Main Cryo Deck |
| STY-501 | Data Core Warden Rig khe V1, không rơi từ Serith, bị tiêu ở RCP-207, nhãn Sau MVP | Dòng 517, 506, 812: V5.1 khe V1, nộp C5.6, tiêu ở RCP-207 | Khớp, `map.md:255` khớp |
| STY-502 | Lệnh phục kích mang dấu Serith, khe M1 Data Core, Khối 0, không sao thành CGO-131 | Dòng 516: MM5.1 khe M1, C5.3 | Khớp, `map.md:255` khớp |
| STY-701 | Khoang liên lạc nhận, 1 gói mỗi ngày, tiêu ở RCP-422, nhãn Sau MVP | Dòng 815, 818 và `tram-va-cang.md:300` | Khớp |
| STY-301 | Mẫu mang dấu săn bắt Wardens, nộp phòng nghiên cứu, không tiêu | Dòng 404, 810 | Khớp |
| BNG-102 | Kén Ilsume, C3.8 về trạm, C5.1 tới The Hearth | Dòng 395, 814 | Khớp mốc. Lệch luật "mất giữa đường" (lỗi 1) |

## Khớp ITEM LIST.tsv với md (yêu cầu 7)
`ITEM LIST.tsv` sinh từ cùng script (`sim/vat-pham.mjs` dòng 448 trở đi). Quét: 146 ID của md có đủ trong tsv, tên, nguồn nhận và nguồn tiêu khớp từng hàng, nhãn nằm trong cột Note. Tsv thêm 9 hàng dụng cụ TOL (khác md, có bảng TOOL riêng), không lệch. Các hàng đổi đợt 6 (CGO-421, STY-412, STY-301, STY-501, STY-701, STY-502, BNG-102) đều khớp md. `Recipe.tsv:265` (RCP-422) trỏ về `vat-pham.md` mục 3, đủ cột theo khuôn tab, không ghi giá.

## Lỗi
| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|---|
| 1 | Nặng | 3 | `vat-pham.md:505`, `ITEM LIST.tsv:146` (BNG-102) | Luật "mất giữa đường" của kén mâu thuẫn hai file khác. Vat-pham: "mất giữa đường thì về chỗ cũ như vật nhiệm vụ", tức về vị trí gốc (luật V4). Combat và map: kén rơi thì nằm lại chỗ thả, lưu ở beacon cố định gần nhất, và nằm ngoài K2, không mất theo túi | `combat-driftlife.md:206`: "kén trôi tại chỗ ... nằm lại chỗ thả, chuyến sau kéo tiếp". `:207` (luật 43): "Kén nằm ngoài luật giữ 1 món của K2". `map.md:155` (2.7.9): "Giữa các chuyến, kén được lưu ở beacon cố định gần nhất đã đi qua trên đường hộ tống, chưa qua beacon nào thì ở cửa N4". Dev đọc vat-pham sẽ reset kén về N4 Outer Ring, đọc map sẽ giữ tại beacon. Dòng 37 của chính vat-pham (nhóm vật kéo) ghi "Bỏ lại chỗ cũ, chuyến sau còn ở điểm cũ" nên phù hợp combat, chỉ dòng 505 trái | Sửa dòng 505 và hàng tsv: "rơi thì nằm lại chỗ thả, lưu ở beacon cố định gần nhất (map.md 2.7.9), không phải vật nhiệm vụ". Chạy lại `sim/vat-pham.mjs --ghi` để sinh tsv. Điểm tự quyết 36 (dòng 677) ghi lại khi sửa | gd-items |
| 2 | Nhẹ | 1 | `vat-pham.md:3`, `:16`, mục Lịch sử thay đổi | Dòng 3 còn nguồn "K1 đến K21, C1 đến C8" và trạng thái "chờ gd-qa (GD-025)". Dòng 16 "Mẫu bắt (sống hoặc sinh thiết) bằng 1,5 đến 2,0 lần mẫu hạ" trái M1 và K9 mới (sinh thiết 0,45). Lịch sử thay đổi chỉ có một dòng, chưa ghi đợt 4, đợt 6 | Cuối file | Cập nhật ba chỗ. Đã ghi ở GD-031 vòng cuối (N2, N3), chưa sửa | gd-items |
| 3 | Nhẹ | 3 | `vat-pham.md:371` (RES-301), `ITEM LIST.tsv:12` | Nguồn nhận ghi "Đơn vị The Warden hạ được", số ít. Tên đúng là The Wardens | Bảng tên của `_y-lead-phan-dien.md` | Đổi thành "The Wardens" (script `sim/vat-pham.mjs`, chạy lại `--ghi`) | gd-items |
| 4 | Nhẹ | 2 | `vat-pham.md:89` (luật G2), `:472` (CGO-421), CGOSIZE | Cỡ CGO-421 (Nhỏ) tính từ "tổng Khối đầu vào", nhưng đầu vào gồm 1 kiện (không có Khối) và STY-701 (1 Khối). Script gán mặc định 5 Khối cho đầu vào là kiện (6 Khối, Nhỏ), luật không nói | `sim/vat-pham.mjs` dòng tính cỡ: `typeof khoi==='number' ? khoi : 5`. Kết quả Nhỏ trùng với kiện vỏ bọc (Nhỏ) nên không sai số, chỉ thiếu luật | Thêm vào G2: kiện làm từ kiện khác lấy cỡ của kiện đầu vào cộng STY nếu có | gd-items |
| 5 | Nhẹ | 2 | `vat-pham.md:46` (V4) | V4 nói vật nhiệm vụ mất thì về "vị trí gốc ở map nhánh", nhưng STY-701 không có vị trí ở map nhánh (nhận ở khoang liên lạc). Hàng ITEM ghi "về lại khoang liên lạc", chưa có trong luật V4 | Dòng 502 (ITEM) so với dòng 46 | Thêm ngoại lệ vào V4: STY-701 mất thì về khoang liên lạc, nhận lại mỗi ngày | gd-items |
| 6 | Nhẹ | 1 | `ITEM LIST.tsv` (cả file), `Recipe.tsv` | Cột Note của ITEM LIST dồn độ hiếm, Khối, dải, nhãn và cỡ vào một chuỗi dài, khó lọc nhãn Sau MVP trên Sheet. Không sai nhưng validator Sheet và người nhập đọc nhãn bằng cách cắt chuỗi | Dòng 113: "Hiếm, Khối mang, Xa, Sau MVP. Cỡ Nhỏ (giao cho tàu ... giá trị bằng kiện vỏ bọc)" | Tách cột Nhãn nếu khuôn Sheet cho phép (không bắt buộc, đã đúng khuôn hiện hành) | gd-tech, gd-items |

## Số kiểm bằng chứng
| Số | Nguồn | Kết quả |
|---|---|---|
| 146 vật phẩm, 84 công thức | sim, dòng CHECK | Khớp |
| CGO-421: 86,9 GTĐ, 870 Tally | `kinh-te-tien-trinh.md:103`, `Shop.tsv:26` | Khớp, hệ số RCP-422 1,00 |
| STY-701: 1 Khối, 0 GTĐ, tối đa 1 gói mỗi ngày | `tram-va-cang.md:77`, `cot-truyen.md:815` | Khớp |
| 9 kiện MVP, 6 nâng cấp, 7 SLV | Script chk và sim | Không đổi so với GD-031 vòng cuối, đợt 6 không chạm MVP |
| Chu trình công thức, ID, tên VI, tên EN trùng | Script chk | 0 chu trình, 0 trùng |
| Tên Serith, Sevra, Ilsume, The Hearth, The Kindling, TA11, HC15, United Accord | grep toàn `gdd/he-thong` | Viết đúng và thống nhất, trừ "The Warden" ở RES-301 (lỗi 3) |

## Bỏ qua / không kiểm được
- Không có build Unity, không chơi thử.
- Không chấm lại phần cũ đã ĐẠT ở GD-031, chỉ phần đổi của đợt 6 và chỗ chạm phản diện.
- Không kiểm nội dung truyện của `cot-truyen.md`, `map.md`, `combat-driftlife.md` ngoài các điểm vật phẩm tham chiếu. Hit ý cũ "kẻ canh giữ", "thu hoạch công nghiệp" ở file khác và 2 lỗi validator ở `ky-thuat.md:279` thuộc gd-story, gd-character, gd-tech, báo GDM.
- Không chạy lại sim chuyến, sim ca cảng, sim combat của gd-tech.
