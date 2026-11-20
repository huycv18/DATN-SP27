# Kết quả QA: GD-038 game-moi - 3 GDD con bản đọc (Story, Combat và Driftlife, Vật phẩm)

Kết luận: **TRẢ LẠI** vì Vật phẩm còn 2 lỗi Nặng. **Story ĐẠT** (0 Nặng, 8 nhóm Nhẹ). **Combat ĐẠT** (0 Nặng, 6 nhóm Nhẹ). **Vật phẩm TRẢ LẠI** (2 Nặng, 8 nhóm Nhẹ).
Môi trường: repo `D:\DATN SP27`, working tree ngày 2026-11-20, TSV chưa commit. Cổng máy: `python -P -X utf8 projects/game-moi/tools/dung-gdd-con.py kiem tat-ca` ra story ĐẠT, combat ĐẠT, vat-pham ĐẠT. Cổng này không kiểm số câu mỗi ô, phạm vi MVP đúng sai, hay độ dễ hiểu.

## Phạm vi đã chấm
| Module | Hàng LUẬT đối chiếu | Hàng THAM SỐ đối chiếu | Cách |
|---|---|---|---|
| story | 61/61 so với 26 luật mục 2.1, bảng trạng thái 2.2, thứ tự 2.3, 2.7, 2.8, mục 11 | 8 hàng đọc tay (cảnh, ngưỡng mốc, sàn ngày 7/5/8/3/3 = 26, 40 mốc, 180 câu) + cổng máy cho phần còn lại | đọc từng câu |
| combat | 73/73 so với luật 1 đến 44, bảng hành vi 2.7, thứ tự khung hình, mục 6b | 12 hàng đọc tay (miễn, báo trước, vé, Choáng, Mê, DR, bắt, hệ số co-op, tự tính lại N/k(N): 1,54 / 1,88 / 2,11 / 1,6 / 2 / 2,29 / 1,45 / 1,7 / 1,87 đúng) | đọc từng câu |
| vat-pham | 66/66 so với luật V1 đến V5, S1 đến S6, M1 đến M5, T1 đến T8, C1 đến C7, G1 đến G5, E1 E2, mục co-op | 6 hàng đọc tay (túi 80/100/126/168/216, 0,45, tốc độ khai thác 1,0/1,4/1,9, thời gian làm đầy túi, ngưỡng sao, kiện) | đọc từng câu, một số ô nguồn bị cắt dòng nên đối chiếu theo phần đọc được |

Số THAM SỐ không đọc tay hết từng hàng: dựa vào cổng máy "mọi số có trong GDD hệ thống" (chỉ chứng minh số tồn tại, không chứng minh đúng ngữ cảnh). Không kiểm bảng dữ liệu Enemy, ITEM LIST, Recipe, GAME STORY. Không chạm Sheet.

## Lớp 1 và 2: khớp nguồn, không mất luật
- Story: 26 luật đều có mặt (luật 1 vào MO1, MO2, MO5; 2 vào MO3; 3 và 4 vào VT1, VT2; 5 vào VT3, VT4; 6 đến 10 vào CA2, CA3, CA1, CA4, SO1; 11 vào NV1, NV3; 12, 13 vào MO8, MO6; 14, 15 vào LO1 đến LO3; 16 đến 18 vào MO1, CA7; 19 vào MO4, CA6; 20 vào VT5, VT6; 21 vào CA5; 22 vào NV2; 23 vào MO7; 24, 25 vào LO4, LO5; 26 vào KE1). Không phát hiện số sai hay luật bịa. Không thiếu luật.
- Combat: 44 luật đều có mặt (gộp: 8 thành BT1 đến BT3, 10 thành MT1, MT2, 17 thành CM5, CM6, 25 thành BA9, BA10, 40 đến 43 thành KE1 đến KE3). 20 trường hợp biên E1 đến E20 đều có. Không phát hiện số sai. Không thiếu luật.
- Vật phẩm: mọi luật có mặt (gộp). Mất nhỏ: STY-601 Thẻ tên buồng ngủ đông treo ở khoang (V5 gốc, Sau MVP, chỉ đổi hình trạm) không còn, bảng vòng đời 2.8 không mang sang (không phải luật đánh số). Không tính lỗi Nặng.

## Lỗi Nặng
| # | File, tab, hàng | Trích dẫn | Vấn đề | Bước tái hiện | Đề xuất ai sửa |
|---|---|---|---|---|---|
| N1 | `vat-pham/LUẬT.tsv` hàng 32 (M9), Phạm vi `MVP` | "BS-3 và BS-4 chỉ hạ được, rơi RES-305 và RES-401. BS-5 không rơi vật phẩm. ... Data Core ... STY-501 và STY-502." | BS-3, BS-4, BS-5, Data Core Warden Rig là chương 3 đến 5, Sau MVP. Mâu thuẫn với `combat/LUẬT.tsv` hàng 60 (BO8, Sau MVP) và bảng sửa khoang gốc (động cơ giai đoạn 4, 5 Sau MVP). Dev đọc nhãn MVP sẽ dựng drop boss chương 3 đến 5. Nguyên nhân: GDD gốc `vat-pham.md` luật M4 gắn một nhãn MVP cho cả đoạn có BS-3 đến BS-5 | Mở `vat-pham/LUẬT.tsv` hàng 32, đối chiếu `combat/LUẬT.tsv` hàng 60 | gd-items: tách M9 thành Sau MVP, sửa nhãn ở GDD gốc trước |
| N2 | `vat-pham/TRƯỜNG HỢP BIÊN.tsv` hàng 10 | "Host thoát giữa chuyến: Thế giới về lần lưu đầu ngày." | Lệch luật chung K23 và C10 (tự lưu ở 3 điểm: sau chuyến khi mọi người về trạm, sau ca cảng, lúc ngủ; host thoát về "điểm lưu gần nhất"). `story/TRƯỜNG HỢP BIÊN.tsv` hàng 22 ghi đúng "điểm lưu gần nhất". Hai GDD con nói hai luật lưu khác nhau. Nguyên nhân: `vat-pham.md` bảng biên dòng 525 còn chữ cũ | Đối chiếu `00-khung-game.md` K23 (dòng 152), `vat-pham.md` dòng 525, hai TSV trên | gd-items: sửa GDD gốc và TSV thành "điểm lưu gần nhất" |

## Lỗi Nhẹ
### Story (8 nhóm)
| # | File, tab, hàng | Vấn đề | Đích |
|---|---|---|---|
| S1 | LUẬT hàng 38 (VT6) | Phạm vi `Sau MVP` nhưng luật 20 gốc và `vat-pham/LUẬT` N4 (hàng 13) là `MVP` ("Vật chỉ bị tiêu khi ..."). Lệch nhãn giữa hai module | gd-story |
| S2 | Cả module, ước khoảng 74 ô quá 2 câu (KHUON mục 2) | Ví dụ LUẬT hàng 3 (MO1, 3 câu 210 ký tự), 23 (CA1, 4 câu), 15 (TT4), 28 (CA6), 58 (CO8); YÊU CẦU hàng 19, 27 (4 câu). Cổng máy chỉ chặn 280 ký tự | gd-story |
| S3 | Cả module | Mã và từ chưa giải thích: "khe M", "khe V", "Host", "điểm nghỉ", C1.9, MM1.3, V1.1, KH06, KH07, TA01, TA11, BS-1, BS-2, N3. TỔNG QUAN hàng 4 dùng "P2, P3, P4" không ghi pillar là gì | gd-story |
| S4 | THAM SỐ hàng 3 đến 11 (cột Ghi chú "Khoảng an toàn ..."), hàng 20 ("Núm duy nhất của truyện chạm thời lượng chương 1"), hàng 21 ("Hạ núm ca cảng xuống 2 thì còn 6"), 29 đến 31 (công thức 180 x 80 / 17, "khoảng 2,0% cả game 12 giờ", "Khoảng 8,3 đến 10,4 giờ") | Là lý do chọn số, số tính từ tham số: KHUON mục 5 bảo bỏ | gd-story |
| S5 | NGHIỆM THU hàng 15 ("Sim kinh tế") và CÂU HỎI MỞ hàng 2, 3 (cột "Ai trả lời" ghi "GDM", câu hỏi về mã NP-5 nội bộ) | Nhắc sim, tên vai nội bộ (KHUON mục 3) | gd-story |
| S6 | TRƯỜNG HỢP BIÊN hàng 16 | Trộn BS-1 (MVP) và BS-2 (Sau MVP) không phân biệt. Tab Biên không có cột Phạm vi nên nhiều hàng Sau MVP (kén Sevra, tin mật, Maro) đọc như MVP | gd-story, GDM (KHUON thêm cột hoặc nhóm "Sau MVP" đã có, nên dùng đủ) |
| S7 | TÊN RIÊNG hàng 3 | "Mọi tên khác trong bảng là tên tạm": không tìm thấy câu tương đương trong `cot-truyen.md` (grep "tên tạm" chỉ có cột "Tên tạm" của bảng chương). Cần GDM xác nhận | gd-story |
| S8 | LUẬT mã TT1, CO1, KE1 | Trùng mã với combat (TT1, CO1, KE1 nghĩa khác). Chỉ rối nếu hai module nằm chung một Sheet | GDM |

### Combat (6 nhóm)
| # | File, tab, hàng | Vấn đề | Đích |
|---|---|---|---|
| C1 | LUẬT hàng 73 (CO2) | "Sinh lực ... nhân N chia k(N) của dải": k(N) không định nghĩa trong bản đọc (gốc: số Driftlife mỗi chuyến theo dải, `map.md`). Số cuối đúng và có ở THAM SỐ hàng 38 đến 41, nên không mất số | gd-combat |
| C2 | Cả module | Từ chưa giải thích: "u" (đơn vị), "P90", "P50" (NGHIỆM THU hàng cuối), "ping" (BIÊN hàng 12), "CP1 đến CP5" (TỔNG QUAN hàng 4, kiểu đặt tên pillar khác story dùng P2 đến P4) | gd-combat |
| C3 | Ước khoảng 24 ô quá 2 câu | TỔNG QUAN hàng 5 đến 7 (4 đến 6 câu), LUẬT hàng 22 (CM5, 224 ký tự), 47 (DL5, 4 câu), 59 (BO7, 239 ký tự), 67 (WD5), 73 (CO2) | gd-combat |
| C4 | THAM SỐ hàng 9, 11 (Ghi chú "Bay thường ra khỏi đòn hẹp cần khoảng 0,67 giây ..."); NGHIỆM THU hàng 10 đến 20 ("sim combat", "phản xạ 0,27 giây") | Số đo prototype và sim nội bộ, thuộc lý do chọn số | gd-combat |
| C5 | TRƯỜNG HỢP BIÊN (cả tab) | Không có cột Phạm vi: Mirror Mantis, Súng gây mê, Warden Snarer, Harvester, kén Sevra (Sau MVP) lẫn với biên MVP | gd-combat, GDM |
| C6 | LUẬT hàng 47 (DL5) | Câu "Cách xử con sổng theo kiểu: Hiền tới tóm ..." đọc cụt, không nói rõ 4 kiểu nào xử thế nào | gd-combat |

### Vật phẩm (8 nhóm)
| # | File, tab, hàng | Vấn đề | Đích |
|---|---|---|---|
| V1 | LUẬT hàng 30 (M7), 31 (M8), 28 (M6), 40 (T5) | Phạm vi trộn: M7 `MVP` nhưng nói mẫu sinh thiết (Sau MVP theo M3 và combat BA5), M8 `MVP` có BS-2 (Sau MVP), M6 `Sau MVP` chứa "MVP chương 1", T5 `MVP` có bậc 2 chương 2. Cần tách hàng theo phạm vi | gd-items |
| V2 | LUẬT mã | Đánh số lại khác GDD: nhảy mã (V5, T4 vắng), cùng mã khác nghĩa (T3 bản đọc = chìa, GDD = nâng cấp dụng cụ; V1 bản đọc = túi, GDD = Lồng mẫu). Các GDD khác dẫn "luật V4 của `vat-pham.md`" theo mã gốc | gd-items |
| V3 | Cả module | "GTĐ" dùng 6 ô, không giải thích đơn vị. ENG, RCP, STY, CGO, BPR, UPG, COM (COM, BPR chỉ có giải thích một lần ở một hàng) | gd-items |
| V4 | THAM SỐ hàng 23 | "25 nhân 1,8 mũ (lớp chi phí trừ 2) ... Lớp bằng n cộng 1 cho ..., n cộng 2 cho Vỏ" khó hiểu với người chưa đọc GDD | gd-items |
| V5 | THAM SỐ hàng 3, 24, 25, 26, 34 | Trùng tab dữ liệu hoặc lý do: sức chứa túi (tab Player, Upgrade), Lao từ, Súng lưới bậc 2, chi phí chế Bình Oxy 9,1 GTĐ (tab Recipe, Upgrade), giá trị kiện thô "một phần mười giá trị đơn một ca" (Economy) | gd-items |
| V6 | Ước khoảng 34 ô quá 2 câu | LUẬT hàng 66 (L1, 7 bước trong một ô), 58 (G2, 251 ký tự), 52 (C6, 6 câu), 39 (T3, 259 ký tự) | gd-items |
| V7 | NGHIỆM THU hàng 11 đến 13 ("Đo trong sim cân bằng"), CÂU HỎI MỞ hàng 5 ("Chạy sim cân bằng", là việc không phải câu hỏi) | Nhắc sim nội bộ (KHUON mục 3) | gd-items |
| V8 | TỔNG QUAN hàng 4 | Pillar ghi "CP3 Management & Optimization", "CP2 Risk & Reward": mã không đồng nhất với story (P2, P3, P4) | GDM |

## Lớp 3 và 4: dễ hiểu, gọn
- Dễ hiểu: story đọc được nhất nhờ câu ngắn và chủ ngữ rõ, vướng chủ yếu ở mã không giải thích (S3). Combat tốt phần luật, vướng k(N), "u", P90. Vật phẩm khó đọc nhất: GTĐ, mã đánh số lại, công thức nâng cấp.
- Gọn: không còn Lịch sử, Điểm tự quyết, Phản biện, "xem mục 3.4b", mã GD-0xx hay mã tự quyết (đã quét). Còn: lý do chọn số trong cột Ghi chú (S4, C4), bảng số trùng tab dữ liệu (V5), nhắc sim (S5, C4, V7), và vi phạm giới hạn 2 câu mỗi ô ở cả ba module (S2, C3, V6).

## Heuristic biên và bỏ qua
- Không chạy: Sheet (không chạm), build (không có, đây là nghiệm thu tài liệu).
- Không so từng hàng 100% THAM SỐ và TRƯỜNG HỢP BIÊN/YÊU CẦU/NGHIỆM THU của story, combat với mục 6 đến 8 GDD; lấy mẫu đọc tay, các hàng YÊU CẦU và NGHIỆM THU đối chiếu lướt, không phát hiện sai số.
- Số câu mỗi ô là đếm bằng regex dấu chấm, sai số vài chục phần trăm (chuỗi như "BS-1: hạ rơi ..." có thể đếm lệch).

## Kết luận từng module
| Module | Kết luận | Nặng | Nhẹ |
|---|---|---|---|
| story | ĐẠT (kèm danh sách Nhẹ cho gd-story) | 0 | 8 nhóm |
| combat | ĐẠT (kèm danh sách Nhẹ cho gd-combat) | 0 | 6 nhóm |
| vat-pham | TRẢ LẠI | 2 (N1, N2) | 8 nhóm |

Đề xuất cho GDM: trước khi đưa lên Sheet, sửa N1 và N2 ở `vat-pham.md` rồi TSV. Giới hạn 2 câu mỗi ô là luật KHUON nhưng cổng máy chưa kiểm: cân nhắc thêm vào `dung-gdd-con.py` (gd-tech) để khỏi dựa vào mắt người.
