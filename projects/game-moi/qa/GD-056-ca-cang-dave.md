# QA GD-056: nghiệm thu đợt 9, ca cảng theo khung Dave

Ngày: 2026-11-20. Người chấm: gd-qa. Phạm vi: commit a7d63c1 tới f1ad4ba, nhánh claude-cty.

## Kết luận: TRẢ LẠI (sửa nhanh, không phải làm lại luật)

Luật ca cảng nhất quán một bản ở `tram-va-cang.md`, số lõi khớp ở mọi GDD hệ thống, tab Sheet và sim. Cổng máy xanh. Còn 1 lỗi nặng (tab Tutorials giữ hàng luật cũ, lệch `ux-ui.md`), 1 lỗi khung còn câu đo của luật cũ, và nhóm lỗi vừa, nhẹ là số lịch sử còn "chờ", cụm từ cũ rải rác. Sửa xong 7 điểm ở mục "Lỗi theo vai" thì nghiệm thu lại bằng grep và cổng máy, không cần sim lại.

## 1. Cổng máy (chạy thật)

| Lệnh | Kết quả |
|---|---|
| `node tools/selftest.mjs` | 33 phép kiểm ĐẠT |
| `node tools/validate-gdd.mjs` | 10 file, 391 ID, lỗi 0 |
| `node ux/kiem-ux.mjs` | 35 màn, 37 bước FTUE, 287 strings, lỗi 0 |
| `python -I sim/economy/sim-kinh-te.py --selftest` | selftest xanh |
| `python -I sim/economy/sim-kinh-te.py` | Chương 1 trung bình 1,89 giờ, cả game 13,9 giờ, nhóm 4 bằng 73% (khớp `kinh-te-tien-trinh.md` mục 2) |
| `node tools/sim-ca-cang.mjs --seed 1 --lan 300` ra file riêng | Khác file `tools/ket-qua/sim-ca-cang.md` ở 0 dòng (trừ dòng thời gian sinh). Cùng seed ra cùng số |
| `node tools/kiem-de-doc.mjs` | Mọi tab ĐẠT, trừ OVERVIEW 2 lỗi dòng dài B28 (ngoài phạm vi, phiên khác đang sửa) |
| `node tools/xuat-event-tracking.mjs --kiem` | In LỆCH, nhưng do tab Event Tracking đã là bản đọc đợt 8 (header STT, mô tả viết lại). Không phải lệch ca cảng. Đã khôi phục file sau khi thử, không đổi gì |

Số sim chương 1, trễ 2 giây, đã đối chiếu với GDD (khớp):

| Số người | Số tàu | Tàu xong | Rảnh | Ca (giây) | Tally | Điểm cảng |
|---|---|---|---|---|---|---|
| 1 | 25 | 24,7 | 14% | 230 | 1654 | 46 |
| 2 | 55 | 54,5 | 6% | 251 | 3602 | 102 |
| 3 | 55 | 54,7 | 19% | 241 | 3760 | 105 |
| 4 | 60 | 57,9 | 27% | 252 | 3996 | 111 |

Điểm 46, 102, 105, 111 khớp `kinh-te-tien-trinh.md` mục 8.4b. Mục tiêu rảnh tối đa 30% đạt ở cả 4 mức.

## 2. Kiểm chéo số (đã khớp)

| Số | Nơi giữ | Kết quả |
|---|---|---|
| Thùng = 0,4 kiện, 1 kiện = 2,5 thùng | tram-va-cang luật 21, vat-pham luật G2, kinh-te mục 2, khung mục 10, ITEM LIST, Recipe | Khớp |
| Danh mục tối đa 4 loại ở chương 1 | tram-va-cang bảng 3, ux-ui, Customer, WIREFRAME, kinh-te | Khớp |
| 3 cửa neo mọi số người, cửa neo 4 là Cảng cấp 2 ở Hạng 4 | tram-va-cang luật 23 và bảng 2.5, Customer, Upgrade, ECONOMIC | Khớp |
| Số tàu 25, 55, 55, 60 | tram-va-cang bảng 3, kinh-te, Customer, sim | Khớp |
| Chờ ngoài 20 giây, trần ca 300, cửa sổ đến 225 | tram-va-cang, Customer, ky-thuat luật 33, sim | Khớp (trừ một chỗ trần 240 ở lỗi V3) |
| Kiên nhẫn 60, 45, 30 | tram-va-cang mục 2.4 và 3, sim | Khớp |
| Thùng ra quầy 3 giây | tram-va-cang, ux-ui, Tutorials, WIREFRAME, Customer | Khớp |
| Tip tối đa 25% | tram-va-cang luật 31, kinh-te, Customer, sim | Khớp |
| Bơm khí 50% lúc cập, hồi 25%, cộng 10 Tally | tram-va-cang luật 28, ux-ui, WIREFRAME, Customer, ky-thuat | Khớp |
| Giá thùng chương 1 | kinh-te mục 3.1, Shop, so-hien-hanh | Khớp (42, 40, 40, 42, 54, 64, 76, 80, lồng 65, 75, 55) |
| Ngưỡng Hạng 70, 135, 285, 400, 560, 680, 910 | tram-va-cang luật 41, kinh-te mục 3.5, Customer, so-hien-hanh, ECONOMIC (Hạng đổi đúng ở điểm 83, 175, 295) | Khớp ở bản hiện hành |
| Điểm 1 mỗi tàu, thêm 1 khi còn trên 2/3 | tram-va-cang luật 40, Customer, kinh-te | Khớp |
| Ca đầu 2 tàu Loose Bolt | tram-va-cang luật 67, ux-ui, Tutorials, Customer, sim | Khớp |

## 3. Bảng file

| File | Kết luận | Ghi chú |
|---|---|---|
| `gdd/he-thong/tram-va-cang.md` | ĐẠT có lỗi nhẹ | Nguồn luật một bản, 19 tới 36 đủ biên. Lỗi V1, V2, V3 |
| `gdd/he-thong/kinh-te-tien-trinh.md` | ĐẠT có lỗi nhẹ | Số khớp sim. Khối Balance còn số cũ, lỗi V4. Câu "Lead chốt 30% (K13)" ở mục 2.1 và bảng tham số chưa có nguồn trong khung (N3) |
| `gdd/he-thong/vat-pham.md` | ĐẠT có lỗi nhẹ | Bỏ cỡ kiện sạch. Còn "giao đơn cảng" 12 chỗ và 1 dòng biên "giữa lúc đóng kiện" (N1, N2) |
| `gdd/he-thong/ux-ui.md` | ĐẠT | Luật 19, 20, 23 tới 29, 35, 67, 71 trỏ đúng. Ví dụ wireframe "31 thùng cho 25 tàu, 1632 Tally" chưa kiểm được từng bậc giá |
| `gdd/he-thong/ky-thuat.md` | ĐẠT có lỗi nhẹ | Mục 2.5 khớp. Còn câu co-op cũ về "bốc kiện", lỗi N4 |
| `gdd/he-thong/nguoi-choi.md` | ĐẠT | Mang 1 thùng, tốc độ không đổi, trỏ luật 26 tới 28 đúng |
| `gdd/he-thong/cot-truyen.md` | ĐẠT có lỗi nhẹ | Mốc theo tàu phục vụ xong đúng. Lỗi V5 (tham chiếu luật 20) |
| `gdd/he-thong/ho-so-nhan-vat.md` | ĐẠT | Không còn luật cũ |
| `gdd/00-khung-game.md` | TRẢ LẠI | K13, C8, C9, mục 9, 10 đúng. Dòng 60 còn câu đo luật cũ, lỗi X1 |
| `gdd/sheet/Customer.tsv` | ĐẠT | Khớp tram-va-cang, kiem-de-doc ĐẠT |
| `gdd/sheet/ITEM LIST.tsv`, `Recipe.tsv` | ĐẠT có lỗi nhẹ | Recipe "đóng lúc Mở ca" đúng. ITEM LIST còn "giao đơn cảng" 11 dòng (N1) |
| `gdd/sheet/WIREFRAME.tsv` | ĐẠT | Khớp ux-ui |
| `gdd/sheet/Tutorials.tsv` | TRẢ LẠI | Lỗi X2 |
| `gdd/sheet/Event Tracking.tsv` | ĐẠT | Sự kiện 30 tới 37, 72, 73 khớp ky-thuat |
| `gdd/sheet/ECONOMIC.tsv`, `Shop.tsv`, `Upgrade.tsv`, `PROCESSING.tsv` | ĐẠT | Giá Shop khớp mục 3.1, điểm cộng dồn và Hạng đổi đúng ngưỡng, Cảng cấp 2 ở Hạng 4 |
| `gdd/sheet/Balance Sheet.tsv` | TRẢ LẠI nhẹ | Lỗi V4 |
| `gdd/sheet/Player.tsv`, `GAME STORY.tsv`, `Day.tsv` | ĐẠT | Không còn luật cũ, Day khớp K13 |
| `gdd/sheet/MVP Criteria Checklist.tsv` | ĐẠT | Đã cập nhật (mục 5), kiem-de-doc ĐẠT |
| `gdd/sheet/OVERVIEW.tsv`, `CORE LOOP.tsv` | Ghi riêng | Không thấy lệch ca cảng (OVERVIEW dòng 78 ghi 1 bến 3 cửa neo đúng). OVERVIEW B28 còn 2 lỗi dòng dài, phiên khác sửa |
| `gdd/sheet/Assets.tsv`, `AUDIO ASSETS LIST.tsv` | TRẢ LẠI nhẹ | Ngoài danh sách brief nhưng còn luật cũ, lỗi X3 |

## 4. Sót luật cũ (grep 11 cụm trên toàn `gdd/`)

Còn hợp lệ (dòng lịch sử, mục lệch tham chiếu, khối Balance, tên công thức): `tram-va-cang.md` dòng 559, 643, 651 tới 688. `kinh-te-tien-trinh.md` khối Balance và lịch sử (dòng 652 tới 679, 805 tới 822). `vat-pham.md` dòng 91, 656, 705, 728 (câu nói luật đã bỏ). `nguoi-choi.md` dòng 527. `Balance Sheet.tsv` dòng 5, 8, 25, 26. Tên công thức "Đóng kiện ..." ở Recipe, ITEM LIST.

Không hợp lệ, phải sửa: xem lỗi X2, X3, N1 tới N4.

## 5. MVP Criteria Checklist

Tab này do QA giữ. Đã sửa 14 dòng ca cảng và thêm 6 dòng cuối tab (STT 131 tới 136). Giữ Status FALSE vì chưa có build, ghi số sim đã chạy lại ở cột Actual Result.

| STT | Việc |
|---|---|
| 81 | Đổi từ "4 tàu, 3 đơn, 240 giây" sang 25 tàu, 3 cửa neo, tàu xong 85 đến 100%, rảnh tối đa 30%, ca 180 đến 300 giây |
| 82 | Giờ đến: tàu đầu giây 2, mọi tàu trong 225 giây, ca không quá 300 giây |
| 83, 84, 85 | Số liệu 1 đến 4 người theo sim (ca, rảnh, tàu xong, Tally), số tàu 25, 55, 55, 60 |
| 86, 87, 88 | Đơn trượt thành tàu rời chưa giao. Bỏ ca. Bốc đồng thời thành nhặt thùng đồng thời |
| 89 | Ca đầu: danh mục chọn sẵn, 2 tàu Loose Bolt, bơm khí ngay |
| 91, 92, 96 | Điểm cảng theo tàu, lồng sống theo đơn đặt trước, ngưỡng Hạng mới |
| 100, 125 | Đóng kiện trước thành chế trước. Kiện khi co-op thành thùng khi co-op |
| 131 tới 136 mới | Danh mục bán, giao sai cửa neo, bơm khí, tip, giá thùng chương 1, cửa neo thứ 4 |

Lưu ý cho gd-tech: `qa/mvp-criteria-checklist.md` (nguồn cũ, mã TC-01 tới TC-20) và `qa/xuat-checklist-tsv.mjs` vẫn theo luật cũ và sinh TSV khác định dạng hiện tại. Không chạy script đó, nó sẽ ghi đè tab bằng bản luật cũ.

## 6. Lỗi theo vai cần sửa

Mức: Nặng là dev đọc sẽ làm sai. Vừa là số hoặc tham chiếu lệch. Nhẹ là chữ cũ.

### GDM

| Mã | Mức | File và dòng | Lỗi | Sửa |
|---|---|---|---|---|
| X1 | Vừa | `gdd/00-khung-game.md:60` | Cột Đo bằng của P2 còn "đơn giao đủ ở ca cảng 70 đến 95%, thưởng đủ đơn và nhanh chiếm 15 đến 25% thu Tally". Mâu thuẫn K13 và mục 9 dòng 213 (tip 20 đến 30%) | Đổi thành tàu phục vụ xong 85 đến 100%, tip 20 đến 30% Tally |
| X3 | Nhẹ | `gdd/sheet/Assets.tsv:45` (hiệu ứng "kiện trượt vào khoang hàng, đồng hồ lưu bến, đơn đủ, đơn trượt"), `Assets.tsv:31` (đóng kiện hộp gấp). `AUDIO ASSETS LIST.tsv:50` (Dock_Timer "lưu bến"), `:51` (Crate_Accepted "bốc kiện"), `:52` và `:57` ("đơn đủ liên tiếp"), `:30` (Pack_Crate "đóng kiện") | Mô tả art và audio theo luật cũ | Viết lại theo thùng, cửa neo, kiên nhẫn, bơm khí, tip |
| N5 | Nhẹ | `gdd/00-khung-game.md:134` (K9 "giao đơn cảng"), `:142` (K15 "đơn giá trị cao") | Cụm cũ | Đổi "bán ở ca cảng", "đơn đặt trước giá cao" |
| N6 | Vừa | `so-hien-hanh.md:57` và `:58` | Ghi chương 1 là 1,82 giờ, cả game 13,4 giờ. Sim in 1,89 và 13,9. Dòng ca cảng demo còn "chờ sim chính thức", dòng đầu file "cập nhật sau đợt 4" | Cập nhật bảng kết quả sim và ngày |

### gd-ux

| Mã | Mức | File và dòng | Lỗi | Sửa |
|---|---|---|---|---|
| X2 | Nặng | `gdd/sheet/Tutorials.tsv:22` (STT 21) | Hàng "Bảng tàu nói hôm nay cần gì" còn luật cũ: "ca đầu cố định một tàu Loose Bolt với một dòng kiện, ghim kiện". Luật 67 là 2 tàu, danh mục chọn sẵn, chỉ bấm Mở ca. `ux-ui.md` không có hàng này. STT lệch một bậc từ 21 tới 36 so với T21 tới T37 của ux-ui, và tab thiếu hàng "Nâng cấp cho cả nhóm, áp từ chuyến sau" (T27) | Xóa hoặc viết lại hàng 21, thêm hàng T27, đánh lại STT cho khớp ux-ui |

### gd-economy

| Mã | Mức | File và dòng | Lỗi | Sửa |
|---|---|---|---|---|
| V4 | Vừa | `Balance Sheet.tsv:26` và `kinh-te-tien-trinh.md` khối Balance dòng 675 | Điểm một ca ghi "44, tối đa 50, nhóm 3 và 4 khoảng 126" (tab) và "tới 50, nhóm 3 và 4 tới 140" (GDD). Sim 46, 102, 105, 111 | Ghi số sim hiện hành |
| V4b | Vừa | `Balance Sheet.tsv:27`, `kinh-te-tien-trinh.md:676` | Cột kết quả ngưỡng Hạng còn "Chờ gd-quan nhận", trong khi mục 2 và 3.5 và luật 41 ghi đã nhận | Đổi thành "gd-quan đã nhận (luật 41)" |
| V4c | Nhẹ | `kinh-te-tien-trinh.md:677` | Hệ số β ghi "cả game 13,8 giờ, nhóm 4 bằng 72%". Sim hiện hành 13,9 và 73% (tab Balance đã đúng) | Sửa khớp tab |
| N3 | Nhẹ | `kinh-te-tien-trinh.md:19` và `:247` | "Lead chốt K13 ở 30%": K13 trong khung và DECISIONS không nêu 30%, chỉ `de-xuat-ca-cang-kieu-dave.md:50` ghi 30% | Ghi nguồn đúng là đề xuất đã duyệt, hoặc bỏ chữ "Lead chốt" |

### gd-quan

| Mã | Mức | File và dòng | Lỗi | Sửa |
|---|---|---|---|---|
| V1 | Vừa | `tram-va-cang.md:21` (bảng Hiện hành, dòng Hạng cảng) | "Ngưỡng chờ gd-economy" trong khi luật 41 và bảng tham số đã có 70, 135, 285, 400, 560, 680, 910 | Ghi ngưỡng hiện hành |
| V2 | Vừa | `tram-va-cang.md:469` và `:513` | "Ca đầu 2 tàu xong trong 13 tới 17 giây". Sim ghi ca đầu 23, 28, 33 giây (trễ 1, 2, 3 giây). Số 13 tới 17 không có trong `sim-ca-cang.md` | Sửa theo sim hoặc ghi rõ cách đo |
| V3 | Nhẹ | `tram-va-cang.md:557` | "ca giữ trong 240 giây", trần ca hiện hành là 300 | Sửa 300 |
| V3b | Nhẹ | `tram-va-cang.md:11 tới 24` và mục 3 | Tally một ca ghi 1654, 3602, 3760, 3996 (sim bot trễ 2 giây) trong khi `kinh-te` ghi 1744, 3848, 4025, 4261 (sim kinh tế, kịch bản trung bình). Hai nguồn khác phương pháp nhưng người đọc dễ nhầm | Ghi rõ tên nguồn ở cả hai nơi |

### gd-story

| Mã | Mức | File và dòng | Lỗi | Sửa |
|---|---|---|---|---|
| V5 | Nhẹ | `cot-truyen.md:740` (dòng 20 của bảng biên) | Trỏ "luật 20 của tram-va-cang.md" cho việc bỏ ca. Luật 20 nay là danh mục bán, bỏ ca ở luật 19 | Đổi thành luật 19 |
| N7 | Nhẹ | `cot-truyen.md:1295` | "một loại đơn cảng" | Đổi theo thùng, đơn đặt trước |

### gd-items

| Mã | Mức | File và dòng | Lỗi | Sửa |
|---|---|---|---|---|
| N1 | Nhẹ | `vat-pham.md:61, 425 tới 447` (12 chỗ), `ITEM LIST.tsv` (11 dòng mẫu sống), `ITEM LIST.json`, `combat-driftlife.md:354, 358` | Cụm "giao đơn cảng" của luật cũ | Đổi "bán ở ca cảng" |
| N2 | Nhẹ | `vat-pham.md:555` | Dòng biên "Hết nguyên liệu giữa lúc đóng kiện". Kiện nay đóng lúc Mở ca, không có thời gian đóng | Bỏ hoặc đổi thành lúc Mở ca |

### gd-tech

| Mã | Mức | File và dòng | Lỗi | Sửa |
|---|---|---|---|---|
| N4 | Nhẹ | `ky-thuat.md:28` và `:336` (và `Event Tracking` nếu có chữ tương ứng) | Mục tiêu co-op còn "kiện không nhân đôi hay mất khi hai người cùng bốc", "100 lần thả, nhặt, bốc". Ca cảng không còn thả, bốc. Thùng đã nhặt không đặt xuống | Đổi sang nhặt, giao thùng và tổng thùng. MVP Checklist STT 125 đã theo bản mới |
| N8 | Nhẹ | `qa/mvp-criteria-checklist.md`, `qa/xuat-checklist-tsv.mjs` | Nguồn và script sinh checklist còn luật cũ | Cập nhật hoặc đánh dấu bỏ |

## 7. Ghi chú không phải lỗi

- `ky-thuat.md` luật 31: người rớt mạng khi cầm thùng thì thùng rơi tại chỗ. Luật 26 nói thùng đã nhặt không đặt xuống được. Hợp lệ nếu hiểu là ngoại lệ khi rớt mạng, nhưng nên có một câu trỏ chéo.
- Tip kể cả bơm khí: `tram-va-cang.md` ghi 26 tới 29% (sim ca cảng, trễ 2 giây), `kinh-te` ghi tb 26%, tệ 21%, tốt 30% (mọi kịch bản). Khác thang đo, không mâu thuẫn.
- Chưa kiểm được: ví dụ giá trị danh mục 1632 Tally ở `ux-ui.md:338`, chơi thật ca cảng (chưa có build, prototype `tools/prototype/ca-cang-dave.html` chưa chơi trong lượt này).

## 8. Bỏ qua

- Không chơi build hay prototype (chưa có build Unity, không mở demo HTML).
- Không đối chiếu Sheet trực tuyến bằng `doi-chieu-sheet.mjs` (không dán Sheet trong phạm vi, cần mạng).
- `/gdd-review` 5 lớp không chạy đủ cho từng file, thay bằng kiểm chéo số, grep luật cũ và cổng máy.
