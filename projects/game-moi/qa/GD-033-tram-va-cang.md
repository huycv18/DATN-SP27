# GD-033 tram-va-cang

ĐẠT - vòng 2: G1 tới G5 đã sửa thật, chỉ còn hai lỗi nhẹ (G6, G7). Chặn 0, nặng 0, nhẹ 2.

## Vòng 2

Giờ sửa khi chấm (đã chờ đứng yên): `tram-va-cang.md` 10:29:06, `Customer.tsv` 10:29:06, `cot-truyen.md` 10:32:14, `vat-pham.md` 10:15:53, `sim-ca-cang.md` 10:25:32, `ca-cang.json` 10:25:15, `sim-ca-cang.mjs` 10:24:05. Chấm sau 10:35.

| Lỗi | Trạng thái | Bằng chứng |
|---|---|---|
| G1 ID tàu The Kindling | Đã sửa | `cot-truyen.md` dòng 23, 33, 44, 395, 460, 472, 475, 502, 744, 766, 767, 815, 1262 đều ghi TA11. TA09 còn lại đúng một vai (người đưa hàng gấp, dòng 108 và 1197 ghi rõ "TA09 giữ vai tàu đơn gấp"). Hai file và Customer đều TA11. Thời điểm vào lịch cũng khớp: ngày kế tiếp sau C3.8 (cot-truyen dòng 33, tram-va-cang :57, :241) |
| G2 cot-truyen mục 2.5 | Đã sửa | C3.3 Maro lần một (:390), C3.8 "Người thừa kế" kén về Ember (:395), C4.7 "Đường dây thứ nhất" (:460), C5.1 hộ tống không còn TA06 (:501), C5.2 theo ngưỡng chương 5 (:502). Ngưỡng ở mục 3: chương 4 là 1 đơn (:694), chương 5 là tổng 2 đơn (:695). Không còn "lần thứ ba" của TA08 trong mốc, chỉ trong cột "Trước" và nhật ký |
| G3 HC15 và STY-701 | Đã sửa | Luật 69 (:193): "Riêng dòng HC15 luôn đúng 1 kiện ở mọi N, vì Gói tin mật STY-701 chỉ có 1 gói mỗi ngày". Bảng 2.4 TA11 (:241) và bảng co-op (:550: 1, 1, 1, 1) khớp. Customer.tsv dòng 55 khớp |
| G4 luật 35 | Đã sửa | :135 liệt kê "C1.8, C2.3, C3.3, C3.4, C4.7, C5.2". Customer.tsv dòng 82 khớp |
| G5 sim | Đã sửa | `ca-cang.json` có TA11 (dòng HC15 cố định CGO-421 và HC13, chỉ từ chương 4), TA04 hết ở chương 3, trọng số TA06 lên 3 và TA09 lên 2 từ chương 4. Chạy lại ra thư mục tạm: bảng giống file kết quả từng ô. Bảng 3 chương 4 và 5: đơn đủ 85, 81, 75, 84%, rảnh 40, 40, 34, 42%. GDD :490 ghi đúng "rảnh 4 người vượt trần 2 điểm, log 93" |
| G6 hai số sim cũ (:488, :490) | Còn | Chương 3 hai bến N=4 là 94%, vượt trần 4 điểm, GDD ghi 3. Chương 1 Hạng 3 N=1 là 176 giây, lệch 4 giây, GDD ghi 3 |
| G7 hai quy tắc chỉ trong bảng | Còn | "Nhận STY-701 mỗi ngày" và "đơn tin mật tới nơi là dòng HC15 đủ" vẫn chỉ ở :77, :241, :300 và Customer, không có luật đánh số trong mục Luật. Câu "luôn có trong lịch ngày đầu chương 4 và 5" vẫn trùng ý với "mỗi ngày từ sau C3.8 tới C5.2" |

Kiểm số đơn tin mật: C4.7 cần 1 đơn và C5.2 cần tổng 2 đơn, giống nhau ở `cot-truyen.md` (mục 3 dòng 694, 695, mốc dòng 460, 502, bảng quyết định 1262), `tram-va-cang.md` (:241) và `tram-va-cang.md` lịch sử. Không có số trong `sim-ca-cang.md`. Thứ tự ngày của cot-truyen (dòng 766, 767: đơn đầu ở ngày 1 chương 4, đơn thứ hai ở ngày 1 chương 5) hợp với 1 gói mỗi ngày.
Kiểm vật phẩm: CGO-421 (Hiếm, Sau MVP, 86,9 GTĐ, vat-pham.md:472), RCP-422 (Chương 4, 6 giây, Sau MVP, :341), STY-701 (vật nhiệm vụ, 1 gói mỗi ngày, :502), giá 870 Tally ở `kinh-te-tien-trinh.md` dòng 103. HC15 ở tram-va-cang (:77) ghi Chương 4, Sau MVP, đúng.
Validator: `tram-va-cang.md` 0 lỗi (còn 2 lỗi ở phần gd-tech), tên The Kindling đã có trong bảng tên của cot-truyen.

Lỗi nhẹ còn lại:

| # | Mức | File:dòng | Việc sửa | Người sửa |
|---|---|---|---|---|
| G6 | Nhẹ | tram-va-cang.md:488, :490 | Đổi "lệch tối đa 3 giây" thành 4 giây và "vượt trần 3 điểm" thành 4 điểm theo sim 10:25 | gd-quan |
| G7 | Nhẹ | tram-va-cang.md:241 và mục Luật | Thêm luật ngắn về nhận STY-701 mỗi ngày và định nghĩa "đơn tin mật tới nơi", bỏ câu trùng | gd-quan |

## Vòng 1 (lưu lại)

Vòng 1: TRẢ LẠI - phần phản diện của `tram-va-cang.md` và tab Customer khớp lời Lead và không thêm hệ thống mới, nhưng còn 4 lỗi nặng: ID tàu The Kindling lệch với `cot-truyen.md`, `cot-truyen.md` mục 2.5 chưa đổi mốc, dòng tin mật nhân theo N va vào cap 1 gói mỗi ngày, luật 35 liệt kê mốc trong ca sai. Chặn 0.

Giờ sửa khi chấm (đã chờ đứng yên, không file nào đổi trong lúc chấm): `tram-va-cang.md` 10:12:55 (644 dòng), `gdd/sheet/Customer.tsv` 10:12:55 (122 dòng gồm tiêu đề, 5 cột đủ ở mọi dòng), `cot-truyen.md` 10:12:12, `vat-pham.md` 10:15:53, `tools/ket-qua/sim-ca-cang.md` và `ca-cang.json` 09:17:09. Chạy sau 10:17.
Chấm theo `qa/_y-lead-phan-dien.md`. Chỉ chấm phần đổi của đợt 6.

## P1 đến P15

| # | Có trong file này không | Dòng |
|---|---|---|
| P1 bỏ "tham lam hơn loài người" | Không còn. Quét `quet-phan-dien.mjs` 0 ý cũ ở tram-va-cang.md và Customer.tsv | scan |
| P2 | Ngoài phạm vi file (cốt truyện, B5) | |
| P3, P4, P5, P6, P7, P8 | Ngoài phạm vi file (cốt truyện, hồ sơ) | |
| P9 Y giả làm thương nhân | Có: TA04 "Sennari, thương nhân Ilsume. Thật ra là Sevra Ilvane (Y) giả danh", mở từ C2.7 tới C3.8 | tram-va-cang.md:50, :84, :234. Customer.tsv:17, :21 |
| P10 thấy tấn công và cứu Y | Không nằm ở ca cảng. Chỉ có hệ quả: TA04 ngừng ghé sau C3.8. Nhưng luật 35 còn liệt kê C3.8 là mốc trong ca (lỗi G4) | :135 |
| P11 | Ngoài phạm vi file | |
| P12 mạng lưới cách mạng | Có: TA11 "The Kindling, mạng lưới cách mạng" | :57, :241. Customer.tsv:52 |
| P13 nối tình báo qua ca cảng | Có: HC15 Kiện tin mật CGO-421, đơn tin mật của TA11, thông dịch viên chương 4 nhận Gói tin mật STY-701 | :57, :77, :241, :300. Customer.tsv:71, :112 |
| P14, P15 | Ngoài phạm vi file. Luật 12 (cảnh kết, K24) không còn "chưa có đích" | :106 |

## Ý cũ còn sót

Không. `node projects/game-moi/qa/quet-phan-dien.mjs --chi-tiet`: bảng ý cũ không có dòng nào của `tram-va-cang.md` hay `Customer.tsv`. Bảng đếm tên: tram-va-cang.md có Serith 2, Sevra 5, Ilvane 2, Sennari 3, Ilsume 3, The Kindling 3, Maro 5, The Wardens 1, không có The Sundering, không có "The Wardens là chủng tộc". Customer.tsv Serith 1, Sevra 3.
Không còn C3.7 cũ trong thân luật (chỉ còn trong lịch sử thay đổi dòng 633, 641). Không còn "ba lần cập bến" của TA08 trong luật hay bảng (chỉ còn lịch sử dòng 614). TA06 không còn là điều kiện C5.1 trong thân luật (:117 chỉ giữ C3.2).

## Bảng tên

| Tên | tram-va-cang.md và Customer.tsv | Các file khác | Kết luận |
|---|---|---|---|
| Sennari, Sennar | Sennari ở TA04, TA09 | cot-truyen.md Tên mới | Khớp |
| Sevra Ilvane (Y) | TA04 giả danh Ilsume | cot-truyen.md:9-30 | Khớp |
| Serith, The Wardens | TA08 "gián điệp của Serith (The Wardens)", The Wardens là chế độ | cot-truyen.md | Khớp |
| Maro, 2 lần cập bến | Luật 38 (:144), TA08 "hai lần cập bến" (:54), sau C3.8 không ghé | cot-truyen.md Tên mới ("chỉ còn hai lần cập bến") | Khớp. cot-truyen mục 2.5 còn "lần thứ ba" (G2) |
| The Kindling | TA11 | cot-truyen.md:23, :33, :44: tàu của mạng lưới là TA09 | LỆCH (G1) |
| The Hearth, The Meeting War | Không dùng ở file này | Không cần | Không áp dụng |
| ID CGO-421, RCP-422, HC15, STY-701 | tram-va-cang.md HC15 (:77), 2.7 (:300) | vat-pham.md:84, :341, :472, :502, kinh-te-tien-trinh.md:103 | Khớp. Cả CGO-421, RCP-422, STY-701 có trong `vat-pham.md`, giá 86,9 GTĐ, 870 Tally |

Validator (`validate-gdd.mjs` 37 lỗi, nhiều file đang sửa): hai lỗi của tram-va-cang.md ở dòng 57 và 300 là "The Kindling không có trong bảng tên riêng của cot-truyen.md". Lỗi đó nằm ở cot-truyen.md (gd-story chưa thêm tên vào bảng), không tính cho gd-quan.

## Hệ thống mới

Không thêm hệ thống mới. Đối chiếu với luật có sẵn:

| Phần mới | Luật sẵn có nó dùng | Kết luận |
|---|---|---|
| TA11 là loại tàu | Bảng 2.4, luật 20 (tàu có điều kiện truyện, chỗ đầu của lịch, tối đa 2 chỗ theo luật 69), luật 21, 22 (bến, lưu bến), luật 37 (khác loại ở luật riêng và dòng hàng) | Dùng đúng |
| HC15 là nhóm hàng | Luật 23 (dòng là ID kiện), luật 24 (máy đóng kiện, RCP-422 6 giây), luật 29 tới 31 (bốc, giá, thưởng), luật 30 (giá bằng kiện vỏ bọc, không có Tally riêng, log 87) | Dùng đúng, không thêm tiền, phe hay chế độ |
| "Đơn tin mật tới nơi" tính cho mốc C4.7 và C5.2 | Cùng kiểu mốc cần ca cảng có sẵn (C1.9 số ca, C2.3 giao đủ đơn TA03) | Không phải hệ thống. Nhưng định nghĩa là dòng HC15 đủ chứ không phải đơn đủ (luật 31), chỉ ghi ở :241 (lỗi nhẹ G7) |
| STY-701 nhận mỗi ngày ở khoang liên lạc | Vật nhiệm vụ của gd-items (luật V4), nhưng "nhận mỗi ngày, tối đa 1 gói" là một quy tắc cấp vật chưa có số luật trong mục Luật | Không phải hệ thống mới, nhưng phải có luật (lỗi nhẹ G7) và va vào quy mô đơn (lỗi G3) |

## Lỗi

| # | Mức | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|
| G1 | Nặng | tram-va-cang.md:57, :241, :412, Customer.tsv:52 vs cot-truyen.md:23, :33, :44 | ID tàu của The Kindling hai file nói hai ID: gd-quan tạo TA11, gd-story ghi "Tàu của mạng lưới ghé cảng Ember là TA09 (đã có)" và "Đơn tin mật của tàu TA09". `cot-truyen.md` không có TA11 chỗ nào | grep TA11: chỉ có tram-va-cang.md và Customer.tsv. TA09 hiện là tàu túi trộn Hạng 6 hỏi kiện tinh (tram-va-cang.md:55, :239), không bảo đảm có mặt từ sau C4.6 | Bên đúng là TA11: tàu truyện phải ra khỏi túi trộn và ghi điều kiện mở, TA09 là tàu Hạng 6 nên không dùng được. gd-story sửa "TA09" thành "TA11" ở ba chỗ (và nhắc cả :104 và mục 2.5 khi cập nhật). GDM chốt nếu không đồng ý | gd-story, GDM chốt |
| G2 | Nặng | cot-truyen.md:379-384 (C3.3 tới C3.8), :440-442 (C4.5 tới C4.7), :472-473 (C5.1, C5.2), :506 | Mục 2.5 của cot-truyen chưa đổi theo "Tên mới" (mục đầu file, dòng 41-46). Mục 2.5 vẫn: C3.7 cú lật Driftlife và TA08 lần ba cập bến ở C3.8, C4.5 hộp ghi hành trình, C4.6 Nhem, C4.7 "ngày kế tiếp sau C4.5", C5.1 TA06 cập bến, C5.2 "ngày kế tiếp sau C5.1". Dòng 46 viết C5.2 cần "ngưỡng ở mục 3" nhưng cot-truyen không có số đơn nào. GDD tram-va-cang.md theo bản mới (C3.8 cứu Sevra, TA08 hai lần, C4.6 hộp ghi hành trình, C4.7 một đơn, C5.2 hai đơn) | cot-truyen.md:46 và grep "tin mật": chỉ ba dòng 33, 44, 46, không có "2 đơn". Dòng 506 còn "Ilsume chờ mốc đóng chương 4" trong khi TA04 ngừng ghé sau C3.8 | gd-story cập nhật mục 2.5 và ghi ngưỡng 2 đơn cho C5.2, bỏ đoạn Ilsume chờ chương 4. Đến khi đó tram-va-cang.md và Customer.tsv đúng theo Tên mới nhưng chưa khớp mốc đầy đủ | gd-story |
| G3 | Nặng | tram-va-cang.md:241 (TA11 kiện gốc 1), :120 (luật 20), :191 (luật 69), :77 (HC15), vat-pham.md:84, :502 | Dòng HC15 có kiện gốc 1 nhưng luật 20 nhân quy mô đơn theo N, trong khi STY-701 chỉ có 1 gói mỗi ngày và mỗi CGO-421 tiêu 1 gói. Nhóm đông cần nhiều ngày hơn một người, trái P3 (thêm người là thêm tay) | ceil(1 x (1 + 0,6 x (N - 1))) là 1, 2, 3, 3 kiện cho N bằng 1, 2, 3, 4, cần 1, 2, 3, 3 gói tức 1, 2, 3, 3 ngày chuẩn bị cho một đơn. Mốc C5.2 cần 2 đơn: 2, 4, 6, 6 ngày. vat-pham.md:676 ghi lý do "kiện tin mật chỉ là một dòng đơn" ngầm hiểu 1 kiện | Dòng HC15 không nhân quy mô đơn (luôn 1 kiện, như mô tả của vat-pham) hoặc tăng gói mỗi ngày theo N. Chọn cách thứ nhất rồi thêm vào luật 69 | gd-quan, gd-items |
| G4 | Nặng | tram-va-cang.md:135 (luật 35) | Danh sách mốc trong ca là "C1.8, C2.3, C3.3, C3.4, C3.8". C3.8 nay là cứu Sevra ở N4 và kén qua cửa khí, không xảy ra trong ca. Còn C4.7 và C5.2 (giao đủ đơn tin mật trong ca) thiếu, nên dev sẽ chen cảnh vào giữa ca | `cot-truyen.md` Tên mới dòng 42, 44, 46 | Đổi thành "C1.8, C2.3, C3.3, C3.4, C4.7, C5.2" | gd-quan |
| G5 | Nhẹ | tools/tham-so/ca-cang.json, tools/ket-qua/sim-ca-cang.md | Sim chưa có TA11 và HC15, TA04 vẫn trong túi trộn ở chương 4 và 5. Mục 8 không ghi điều này. Chạy lại ra thư mục tạm: bảng 2 và 3 giống file kết quả từng ô, nên các số mục 8 không đổi vì TA11 chưa được mô phỏng (không có kết luận về ảnh hưởng của đơn tin mật tới ca 170 đến 300 giây và đơn đủ chương 4 và 5) | `ca-cang.json` không có TA11, grep không thấy | gd-tech thêm TA11 (1 dòng HC15 kiện gốc 1 và 1 dòng HC13), bỏ TA04 sau chương 3, chạy lại. Mục 8 ghi "chưa có TA11" tới khi đó | gd-tech |
| G6 | Nhẹ | tram-va-cang.md:490, :485 | Số sim cũ so với bản sim hiện hành: chương 3 hai bến N=4 là 94% (vượt trần 4 điểm, GDD ghi 3 điểm), chương 1 Hạng 3 thấp nhất 176 giây (lệch 4, GDD ghi 3) | sim-ca-cang.md bảng 2 | Sửa hai số | gd-quan |
| G7 | Nhẹ | tram-va-cang.md:241, :300, :77 | Hai quy tắc chỉ nằm trong bảng, không có luật đánh số: "STY-701 nhận mỗi ngày ở khoang liên lạc" (tự động đầu ngày hay tương tác) và "đơn tin mật tới nơi là dòng HC15 đủ, kể cả đơn chưa đủ vì dòng HC13". Dòng "luôn có trong lịch ngày đầu chương 5" trùng với "mỗi ngày từ sau C4.6 tới C5.2 xong" | :241 | Thêm hai luật ngắn vào luật 64 tới 70 hoặc luật mới và bỏ câu trùng | gd-quan |

## Ghi cho GDM

1. Tàu The Kindling là TA11 hay TA09: đề xuất TA11 (G1). Khi chốt, gd-story sửa ba chỗ ở `cot-truyen.md`, tram-va-cang.md và Customer.tsv giữ nguyên.
2. `cot-truyen.md` mục 2.5 đang chờ cập nhật mốc (G2). Nếu gd-story vẫn đang sửa thì chấm lại sau khi file đứng yên.

## Bỏ qua / không kiểm được

- Không kiểm các P ngoài phạm vi file (P2 tới P8, P10, P11, P14, P15): thuộc `cot-truyen.md`, `ho-so-nhan-vat.md`, `combat-driftlife.md`.
- Không chạy lại sim với TA11 vì sim chưa có (G5).
- Tab Customer: kiểm hàng TA04 (dòng 17, 21), TA08 (dòng 37), TA11 (dòng 52-57), HC15 (dòng 71), Lịch tàu (dòng 75), Thông dịch viên (dòng 112): khớp từng chữ với `tram-va-cang.md`. Không đối chiếu từng ô với Sheet thật (không có kết nối).
