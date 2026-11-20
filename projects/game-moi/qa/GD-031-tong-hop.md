# GD-031 tổng hợp review chéo GDD game-moi (EMBER)

## KẾT QUẢ VÒNG CUỐI (cập nhật 2026-11-20 09:05)

GD-031 KẸT: 10 trên 11 file ĐẠT, còn `nguoi-choi.md` 3 lỗi nặng (đều của gd-character, chưa chạy lần sửa cuối), không file nào còn chặn. Đợt 4 của GDM đã áp, máy sạch: `validate-gdd.mjs` 0 lỗi (379 ID), `selftest.mjs` 25 phép ĐẠT, `kiem-ux.mjs` 0 lỗi.

| File | Kết quả cuối | Chặn | Nặng | Nhẹ còn | Việc còn lại và người sửa |
|---|---|---|---|---|---|
| `00-khung-game.md` | ĐẠT | 0 | 0 | 3 | K25 (gating gián tiếp qua giai đoạn động cơ), K24 và K10, seed nạp lại cho dò map: GDM ghi một câu mỗi chỗ |
| `cot-truyen.md` | ĐẠT | 0 | 0 | 6 | gd-story: dòng 7 ghi khung lần 4, dòng 801 gãy bảng, bullet sim cũ ở mục 5, địa danh A02, A03, A05 chưa tiếng Anh ở khoảng 16 dòng, link mồ côi mục 12 |
| `nguoi-choi.md` | TRẢ LẠI | 0 | 3 | 8 | gd-character (qua GDM): M1 vạch "đủ về" 3 hoặc 8 (dòng 93, 294, `chuyen.json:149`, gd-tech giữ 8 tới khi chốt), M2 bảng chuyến 4,2 và 10,7 phút, 66% đầy túi so với sim 4,4, 10,4, 83% (chép từ `sim-chuyen.md`), M3 Giữ chỗ chưa có trần 1 lần mỗi chuyến theo `ky-thuat.md:116`. V7 (phím gamepad lệch UX) đã đóng: `ux-ui.md:371` nay R3 khớp |
| `ho-so-nhan-vat.md` | ĐẠT | 0 | 0 | 10 | gd-character: Rafa S 50% vượt 45% và Nhem Noor-Nhem trượt (câu "0 cặp trượt" sai), luật 12 thêm trục sáng không ghi là nới, Odile mất niềm tin sai mốc (đúng là đóng chương 4), CHR-FACE-B nhãn lệch luật 11, CHR-RIG đếm 3 cần 7, dòng 182 NP đã vào ScriptableObject. gd-combat: `combat-driftlife.md:570` báo trước vàng và đỏ. Nặng duy nhất cũ (màu slot ở `ux-ui.md:30`) đã sửa 09:03, QA grep xác nhận |
| `combat-driftlife.md` | ĐẠT | 0 | 0 | 4 | gd-combat, gd-tech: câu dẫn S5 cũ dòng 361, sim giả định Dùi xung đuổi kịp loài Chạy trốn, ngưỡng mê Mirror Mantis 280 cần 5 Ống nhưng `vat-pham.md` tính 4, BS-1 người tệ P50 Oxy 329 sát bình 330 |
| `vat-pham.md` | ĐẠT | 0 | 0 | 7 | gd-items: STY-102 chỉ dùng ở KH08 (Sau MVP), dòng 16 và 3 còn "1,5 đến 2,0" gồm sinh thiết, `kinh-te-tien-trinh.md:658` xếp Lồng mẫu chương 2, lịch sử chưa cập nhật |
| `map.md` | ĐẠT | 0 | 0 | 3 | gd-world: hàng BS-2 đến BS-4 beacon lối vào (đã báo sửa), nhãn giờ khối SIM, đầu file còn "chưa sim" và "đợt 2" |
| `tram-va-cang.md` | ĐẠT | 0 | 0 | 7 | gd-quan: F2 đến F8 (gd-quan báo đã sửa F2, F7, F8, chưa kiểm lại từng dòng), mép dưới rảnh 10%, lệch ca 4 giây, sim bỏ quy mô đơn kiện tinh chương 1 |
| `kinh-te-tien-trinh.md` | ĐẠT | 0 | 0 | 6 | gd-economy: dòng 517 còn "cỡ kiện chờ gd-items", K9 cỡ M chưa có hàng ở 8.4, luật 12 gọi động cơ là gợi ý trong khi K25 coi là bắt buộc, chạy `--ghi` một lần cho khối `gia-kien` |
| `ux-ui.md` | ĐẠT | 0 | 0 | 3 | gd-ux: "Ghim kiện" và "Ghim nhóm hàng" lẫn, HUD-15 thiếu tín hiệu trần 2 bình, T36 còn câu cũ. V7 và màu slot đã sửa 09:03, QA grep xác nhận dòng 30 và 371 |
| `ky-thuat.md` | ĐẠT | 0 | 0 | 1 | gd-tech báo đã sửa V1 đến V5 (09:06, QA chưa kiểm lại từng dòng). V6 trần Giữ chỗ chờ gd-character chốt (đề xuất 1 lần mỗi chuyến) |

Chưa có build Unity nên 145 tiêu chí trong `mvp-criteria-checklist.md` đều FALSE (chưa kiểm). Sim và validator chạy được, người chơi thật chưa thử.

### Việc GDM cần biết (không có vai nào quyết thay)
| # | Điểm | Chi tiết |
|---|---|---|
| 1 | K23 nạp lại ra đúng bố cục | Người chơi thoát để dò hòm và beacon rồi chơi lại, cái giá là mất cả chuyến. Chấp nhận thì ghi vào khung (đã đề xuất) |
| 2 | Người tham bị kéo về | Chương 1 10% và chương 5 13% dưới sàn 15% của khung mục 9, chương 3 vượt 40% một điểm. GDM đã nói không nới luật, đo lại bằng playtest |
| 3 | Về vì túi chương 1 | 83% so với khung 60% (map.md). Túi 80 Khối do GDM chốt (log 54) |
| 4 | Chương 4 và 5 ba bến một mình | Không chuẩn bị 61%, đóng sẵn một nửa và kệ phụ 86%, GDD ghi là ý đồ |
| 5 | Nhóm 4 hết chương 1 chậm hơn chơi một mình | Kịch bản tốt 99 đến 115% vì cùng chạm sàn ngày, ngày co-op dài hơn 5% mỗi người thêm (gd-economy ghi) |
| 6 | β 0,40 thay 0,60 | GDM đã nhận (log 70). Giữ 0,60 thì chương 1 thành 2,33 giờ và cả game 18,9 giờ |

---

Cập nhật: 2026-11-20 sau khi có phiếu vòng 1 của cả 10 GDD hệ thống và khung. Người chấm: gd-qa (đọc khung và chấm trực tiếp, 10 file hệ thống chấm bằng subagent gd-qa theo `_huong-dan-review.md`, gd-qa đã đối chiếu mẫu các lỗi chặn trước khi gửi tác giả). Chưa có build Unity nên mọi tiêu chí chơi thật ở trạng thái chưa kiểm.
Máy: `selftest.mjs` 13 đến 15 phép ĐẠT lúc 04:03 và 04:26 (nhưng lúc 04:26 ca-cang đỏ do `ca-cang.json` mất khóa `nhom`, gd-tech phải chạy lại). `validate-gdd.mjs` 0 lỗi (325 đến 328 ID), hết 7 lỗi cũ của gd-character. Validator không bắt được các nhóm lỗi ở mục 3, đã đề xuất kiểm mới cho gd-tech.

## 1. Bảng tổng

| File | Vòng chấm | Kết quả | Chặn | Nặng | Nhẹ | Người sửa | Trạng thái |
|---|---|---|---|---|---|---|---|
| `00-khung-game.md` | 2 | ĐẠT | 0 | 0 | 3 | GDM | Xong, nhẹ 4, 6, 7 chờ GDM |
| `cot-truyen.md` | 1, đang chấm 2 | TRẢ LẠI (v1) | 0 | 16 | 14 | gd-story | Đã sửa 30 lỗi, đang chấm vòng 2 |
| `nguoi-choi.md` | 1 | TRẢ LẠI | 2 | 9 | 12 | gd-character | Chờ GDM chuyển subagent |
| `ho-so-nhan-vat.md` | 1 | TRẢ LẠI | 0 | 9 | 13 | gd-character | Chờ GDM chuyển subagent |
| `combat-driftlife.md` | 2 | TRẢ LẠI | 0 | 2 | 9 | gd-combat, gd-tech | gd-combat sửa xong, còn chờ sim sinh lại |
| `vat-pham.md` | 1 | TRẢ LẠI | 2 | 8 | 12 | gd-items | Đã gửi, chờ sửa |
| `map.md` | 1 | TRẢ LẠI | 0 | 11 | 13 | gd-world | Đã gửi, chờ sửa |
| `tram-va-cang.md` | 2 | TRẢ LẠI | 0 | 3 | 8 | gd-quan, gd-tech | gd-quan báo sửa R1, R2, còn chờ sim |
| `kinh-te-tien-trinh.md` | 1 | TRẢ LẠI | 1 | 8 | 9 | gd-economy | Đã gửi, chờ sửa |
| `ux-ui.md` | 2 | ĐẠT | 0 | 0 | 8 | gd-ux | Xong |
| `ky-thuat.md` | 1 | TRẢ LẠI | 1 | 14 | 7 | gd-tech | Đã gửi, chờ sửa |

Số liệu trên là của lần chấm gần nhất. Dòng vòng 2 của gd-story, gd-quan, gd-combat đã sửa nhưng chấm lại sau khi sim và file kia ổn định. Mỗi file chỉ còn tối đa 2 vòng, sau đó lỗi còn lại báo GDM.

## 2. Trái lời Lead
Không có GDD nào trái lời Lead L1 đến L17. Các lỗi chặn đều trái điểm GDM tự quyết (nhãn G) chứ không phải lời Lead: K2, K4, C10 (thoát giữa chuyến) và K9 (mẫu sinh thiết). Một điểm cần GDM xác định:

| Điểm | Chi tiết | Hỏi |
|---|---|---|
| L2 "mọi tên riêng (nơi, phe, nhân vật, game) viết tiếng Anh" | Một số tên khu do gd-world giữ là tiếng Việt: Rạn vụn (vật cản dải chưa mở), Khoang hàng sập, Khu ngủ đông chính, Lõi máy, Buồng lái (`map.md:19`, `cot-truyen.md:240, 352-366`). Tên chương cũng tiếng Việt | GDM quyết: các tên này là tên riêng của nơi (đổi sang tiếng Anh) hay mô tả chung (giữ) |

## 3. Mâu thuẫn chéo giữa các GDD (cùng một thứ, hai file nói khác)

| # | Chủ đề | File A nói | File B nói | Mức | Người sửa | Trạng thái |
|---|---|---|---|---|---|---|
| M1 | Thoát giữa chuyến, rớt mạng quá 15 giây | `nguoi-choi.md:120, 121, 221, 222, 310, 439, 469`, `vat-pham.md:486, 515`, `ky-thuat.md:101, 102`: "Về an toàn giữ nguyên túi" | Khung K2, K4, C10: tính như bị kéo về, giữ 1 món | Chặn | gd-character, gd-items, gd-tech | Chưa sửa |
| M2 | Lưu giữa ngày | `ky-thuat.md:104` luật 16: 3 điểm lưu tạm | Khung K23, C10: về đầu ngày. `tram-va-cang.md` luật 12 theo khung | Nặng | GDM chọn | Chờ GDM |
| M3 | Thang túi và bình cũ | `vat-pham.md:71` (túi 20 đến 72, ô 2, 3, 4), `kinh-te-tien-trinh.md:511, 623` và PROCESSING (túi 20 lên 30, Oxy 300 lên 400) | Thang chốt 80 đến 216 Khối, 330 đến 1000 Oxy, ô 3, 4, 5 (log 54) | Nặng | gd-items, gd-economy | Chưa sửa |
| M4 | ID và chương mở nâng cấp | `kinh-te-tien-trinh.md`: T-VO, T-DAY, T-DUNGCU, UPG-PRY (không tồn tại), vật liệu T-VO 25/45/81 | `vat-pham.md`: UPG-ENV, THR, RACK, vật liệu 45/81/145,8. `nguoi-choi.md:32` T-VO bậc 1 Sau MVP. `ky-thuat.md` `UpgradeData` ghi 5 trục, có 8 họ UPG | Nặng | gd-economy, gd-items, gd-character, gd-tech | Chưa sửa |
| M5 | Số kiện một ca cảng | `kinh-te-tien-trinh.md:412` đơn chương 1 132 GTĐ, kiện trung bình 2,5 GTĐ, 52,5 kiện mỗi ca | `sim-ca-cang.md` giao 10,8 kiện. `tram-va-cang.md`, `vat-pham.md`: khoảng 10 kiện. Hệ quả: thu nhập ca cảng trong sim kinh tế cao hơn sức chở khoảng 3,4 lần (chương 1) tới 6 lần (chương 5), nên 1,99 giờ và 14,9 giờ chưa chứng minh được | Chặn (kinh tế) | gd-economy, gd-items, gd-quan | Chưa sửa |
| M6 | Mẫu sinh thiết so với hạ | `vat-pham.md:60`: 0,45 lần giá hạ, mẫu L 0,59 lần ở Storm Siphon, Brood Mother | Khung K9, mục 9: sống 1,5 đến 2 lần hạ | Chặn | GDM chọn: nâng k hay sửa chữ K9 | Chờ GDM |
| M7 | Giá lồng sống | `vat-pham.md` CGO-121 một giá 4,0, sau Lưới cuộn G02 ròng 0,94 (thấp hơn hạ), RCP-128 hệ số 0,24 | K9 sống luôn hơn hạ | Nặng | gd-items | Chưa sửa |
| M8 | Khe manh mối, ID STY | `cot-truyen.md`: MM1.1 và MM1.3 cùng khe M1, thiếu khe M3, M2, M3 cho N4 đến N6 | `map.md` bảng khe. `vat-pham.md`: 12 vật manh mối không có ID STY | Nặng | gd-world, gd-items | gd-story đã sửa phần mình, còn 5 chỗ ở map, 10 ID ở vật phẩm |
| M9 | Số sim so với GDD | `map.md` 3.8, 3.9: chuyến 4,2 và 10,7 phút, nhóm 4 thấp nhất 61% | `sim-chuyen.md` 04:22: 4,4 và 11,6 phút, thấp nhất 58%, hụt mục tiêu 60% ở 4 ô. Người tham bị kéo về 11, 37, 39, 28, 4% (chương 1 và 5 ngoài khoảng) | Nặng | gd-world, gd-tech, GDM nới hoặc chỉnh a | Chưa sửa |
| M10 | Sim thiếu hoặc lệch luật | Sim ca cảng: cỡ HC02 đến HC04, `suCoGiay` 10 giây (GDD 4), thiếu +1 sự cố từ 3 người, mở ca ngày 1, TA02 chưa mô phỏng. Sim combat chưa đọc 3.4b, Oxy mất 0,0. Sim chuyến không có CON-101 | `tram-va-cang.md` luật hiện hành, `combat-driftlife.md` 3.4b, `vat-pham.md` | Nặng | gd-tech | Đã nhắn gd-tech |
| M11 | CON-101 Bình Oxy nhỏ | `nguoi-choi.md`, `vat-pham.md`: hồi 40 Oxy, 20 Oxy mỗi Khối, chế khoảng 14 giây khai thác, lời ròng +26, túi 80 Khối đổi 800 đến 1600 Oxy | P1 (Oxy là giới hạn), không có trần số bình, không có trong sim | Chặn | gd-character, gd-items, gd-tech | Chưa sửa |
| M12 | Bảng phím | `nguoi-choi.md` 2.7: Ghim món gamepad Y, thiếu Q Kết nhanh, M, J | `ux-ui.md` đã có X, Q/B, M/LB, J/Y | Nặng | gd-character | Chưa sửa |
| M13 | Hồ sơ nhân vật | Màu slot (cam, lam ngọc, vàng chanh, hồng tím), đai 2/3/4 ô, clip "dùng dụng cụ bắt" Sau MVP, Amara và Yusuf có clip "thức dậy từ buồng" | `ux-ui.md` màu (xanh lục, cam, xanh dương, tím), `nguoi-choi.md:33` đai 3/4/5, khung mục 12 bắt lưới MVP, `cot-truyen.md:160` Amara và Yusuf đang thức | Nặng | gd-character | Chưa sửa |
| M14 | Định nghĩa "qua chương" | `cot-truyen.md` (điều kiện truyện), `kinh-te-tien-trinh.md:50`, `tram-va-cang.md:99` ba cách khác nhau | Sim kinh tế báo chương 1 xong ngày 2 đến 4 với 2 và 4 người, chuỗi mốc cần tối thiểu 6 ngày (gd-story đã thêm bảng sàn ngày 6, 5, 8, 3, 4 = 26 ngày) | Nặng | GDM chốt | Chờ GDM |
| M15 | Kiện tinh trong MVP | `tram-va-cang.md`: TA01 có HC04 và CGO-113 ở chương 1 (gd-quan thêm vì MVP có bước "chế thêm") | `vat-pham.md` HC03 và HC04 chỉ vào đơn từ chương 2 | Nặng | GDM duyệt (chạm phạm vi MVP) | Chờ GDM |
| M16 | Quản lý trạng thái nặng sau sửa | `ux-ui.md` UI-44 lỗi lưu "không mất ngày" | K23 thoát giữa ngày về đầu ngày | Nhẹ | gd-ux, GDM | Chờ GDM chốt câu hỏi mở 5 |

Đã sửa trong vòng 1 và 2 (không còn tính): Lồng mẫu hệ số 1,00 so với "kéo chậm" (gd-combat bỏ "kéo chậm"), SMP-192 mẫu boss (theo `vat-pham.md`), ngưỡng Hạng cảng 10, 20, 45, 70 (sim kinh tế đã theo), ngủ co-op 60 so với 30 giây (UX sửa theo K23), ID TOL-101 và UPG-*-5 (hết khỏi validator), tên cũ Hollower, Bếp trưởng, Halcyon, Tether.

## 4. Lỗ hổng thiết kế còn mở (rút từ các phiếu)
| # | Lỗ hổng | Mức | Ở đâu | Cần |
|---|---|---|---|---|
| H1 | Trao đồ khi Ngạt: 12 giây cứu được khoảng 24 đơn vị cộng 1 món ghim, lách K2 | Nặng | `nguoi-choi.md` | GDM quyết |
| H2 | Dùi xung rồi bắt tay (0 sát thương, mẫu 3 sao, không tốn vật tiêu hao) trội hơn Súng lưới | Nặng | `combat-driftlife.md` | gd-combat đã tăng bắt tay cỡ S lên 1,5 giây, ghi "không trội", cần xác nhận khi sim S2 mới |
| H3 | Hệ số co-op đo kiểu "chia" khác kiểu "dồn" (G01 và G04 2,37 ở N = 4) | Nặng, đã sửa phần ghi | `combat-driftlife.md` 6b | Đã ghi cả hai, chờ sim |
| H4 | Beacon "đổi vị trí" không có cơ chế ép, 30% cùng ô giữa hai chuyến liền nhau ở dải Gần | Nặng | `map.md` | gd-world |
| H5 | Trùng mảnh tối đa 50% mâu thuẫn tiêu chí (86 đến 92% cặp bố cục trùng hơn 5 trên 10 mảnh nếu hiểu theo mảnh) | Nặng | `map.md` | gd-world định nghĩa |
| H6 | Giữ chỗ 15 giây không có trần số lần (rút mạng lặp lại, ngạt không hết giờ) | Nặng | `ky-thuat.md`, `nguoi-choi.md` | gd-tech, gd-character |
| H7 | Soft lock có thể: STY-401 nếu "nộp" tiêu vật (ENG-105 chương 5) | Nặng, gd-story đã đặt "nộp không tiêu" | `cot-truyen.md` luật 20 | Xác nhận ở vòng 2 |
| H8 | Thả vật nhiệm vụ không có luật hết hạn (60 so với 30 giây) | Nặng | `nguoi-choi.md`, `vat-pham.md:45` | gd-character |
| H9 | Nạp lại đầu ngày đổi bố cục chuyến (seed mới) nếu seed không lưu | Nhẹ | Khung K23 | GDM ghi seed theo ngày |
| H10 | Phòng boss: cửa phía C7 có chặn tới khi boss kết không chưa ghi, chạy ngang boss | Nặng | `map.md` | gd-world, gd-combat |

## 5. Việc GDM phải chốt (không vai nào quyết thay)
| # | Câu hỏi | Đề xuất của QA |
|---|---|---|
| G1 | K23 và C10 (về đầu ngày) so với điểm lưu tạm của `ky-thuat.md` | Cho điểm lưu tạm sau mỗi chuyến và sau ca cảng, sửa K23, C10. Ngày chương 5 dài 25 đến 30 phút nên mất cả ngày khi crash là quá đau |
| G2 | K9 so với mẫu sinh thiết 0,45 lần hạ | Giữ K9, nâng hệ số sinh thiết hoặc ghi sinh thiết đứng ngoài K9 (gd-combat đã ghi ở mục 9) |
| G3 | Kiện tinh ở MVP chương 1 | Giữ gọn: bỏ "chế thêm" khỏi chương 1 (Sau MVP) để ca cảng chỉ có hàng thô và lồng sống |
| G4 | "Qua chương" tính theo điều kiện truyện hay theo đủ khoang | Một định nghĩa, ghi ở khung |
| G5 | Mục tiêu nhóm 4 nhặt từ 60% (4 ô trượt 58 đến 60%) | Chỉnh a Gần lên 0,29 và Xa lên 0,42 thay vì nới mục tiêu |
| G6 | BS-1 nặng hơn "boss nhỏ" (L11 combat), cần S5 | gd-combat đã đổi Sinh lực 600, đòn nhẹ hơn. Chờ S5, nếu Oxy trận boss vượt bình 330 thì giảm phạm vi |
| G7 | Trao đồ khi Ngạt | Cho trao nhưng không trao món đã ghim |
| G8 | Odile và chữ "tới Solace" (gd-story giữ có chủ ý, câu hỏi mở 9) | Giữ: đó là niềm tin của nhân vật, đã ghi rõ không phải sự thật của game |
| G9 | L2 tên khu tiếng Việt (mục 2) | Đổi tên riêng của khu Cradle sang tiếng Anh, giữ "Rạn vụn" như vật cản |
| G10 | `so-hien-hanh.md` lỗi thời | Chép sau khi 2b và sim mới ổn định |

## 6. Chỗ dev phải đoán (lớp 5) còn lại sau sửa
Cốt truyện: không còn mục lớn. Người chơi: CON-101 (phím, hủy khi bị đánh, trần), vận tốc sau Lướt, Oxy chạm 0 giữa kênh Recall. Hồ sơ: bậc giữa bộ đồ, rig The Wardens, tuổi và vóc preset. Combat: tầm và hình dạng đòn đã bổ sung (3.4b), còn vật trôi 60 giây đã ghi. Map: "trùng mảnh", cờ "Nửa ngoài", hình học hazard H01 đến H03. Trạm và cảng: lớp 5 đã đạt ở vòng 2. Kinh tế: ví dụ thu nhập 2750 so với 2475 (thiếu hệ số 0,9 trong công thức). Kỹ thuật: danh sách trường file save, quyền co-op cho xác nhận C5 và K23.

## 7. Bằng chứng số
| Kiểm | Kết quả |
|---|---|
| `selftest.mjs` | 13 phép ĐẠT (04:03), 15 phép ĐẠT (lượt 1 của subagent), ca-cang đỏ lúc 04:26 do `ca-cang.json` mất khóa `nhom` |
| `validate-gdd.mjs` | 0 lỗi, 328 ID định nghĩa (đã hết 7 lỗi của gd-character). Không bắt được: UPG-PRY, ID định nghĩa hai lần, số lệch giữa hai file, câu trái C10, thang túi cũ |
| Sim chuyến, ca cảng, combat cùng seed | Ra cùng số khi chạy lại sang thư mục tạm (QA không ghi đè file kết quả) |
| Số GDD so với file sim | `combat-driftlife.md` 3.8 khớp 14 trên 14 loài trước khi sửa bảng 3.4b. `tram-va-cang.md` mục 8 sai ở vòng 1 (chương 2 ghi 83 đến 93%, sim 77 đến 84%), đã chép lại ở vòng 2. `map.md` 3.8 và 3.9 lệch sim mới (M9). `ky-thuat.md` "Hiện hành" ghi k(N) 0,47 không có trong sim |
| Sim kinh tế `sim-kinh-te.py` | 17 khối và 66 biến khớp output, chương 1 trung bình 1,99 giờ, cả game 14,9 giờ, nhóm 4 bằng 53%. Chưa chứng minh được vì M5 |

## 8. Không kiểm được hoặc bỏ qua
Không có build Unity và prototype `bay.html` chưa chạy trong trình duyệt, nên mọi tiêu chí chơi thật, đọc được ở 1280x720, gamepad, độ phân giải 3840x2160, alt-tab, thoát giữa chuyến thật đều chưa kiểm. 6 file đợt hai do subagent đọc khi tác giả còn sửa nên số dòng trong phiếu là của bản ghi ở đầu mỗi phiếu. Sim kinh tế và sim chuyến mô phỏng người chơi, chưa thay được playtest.

## 9. Việc còn treo
- Chờ gd-items, gd-economy, gd-tech, gd-world sửa vòng 1. gd-character qua GDM (tin của QA tới GDM hai lần chưa được xác nhận giao).
- Chấm lại: cốt truyện (đang chạy), combat và trạm và cảng (sau khi gd-tech sinh lại sim), các file vòng 1 sau khi tác giả báo.
- `mvp-criteria-checklist.md` sinh bằng script, chạy lại sau mỗi vòng.
