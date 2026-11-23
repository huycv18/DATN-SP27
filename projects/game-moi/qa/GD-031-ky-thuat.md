# GD-031 ky-thuat

ĐẠT (vòng cuối) - `ky-thuat.md` và tools hết lỗi chặn và nặng, còn 6 lỗi nhẹ. Lỗi chặn cuối của GD-031 nằm ở `nguoi-choi.md` (gd-character chưa sửa C10), không thuộc file này.

## Vòng cuối

Giờ sửa file khi chấm: `ky-thuat.md` 08:54:23 (`ls -l`, 373 dòng, đứng yên tới 09:00). Tools: `validate-gdd.mjs` 08:53:15, `selftest.mjs` 08:54:01, `sim-chuyen.mjs` 08:53:53, `tham-so/chuyen.json` 08:54:23, các file khác trong `tools/` không đổi từ 04:51. Các GDD khác (cot-truyen, map, vat-pham, ux-ui, tram-va-cang, ho-so-nhan-vat) còn được ghi tới 08:55, nên lượt chạy dưới đây ghi giờ 08:56 đến 09:00. `nguoi-choi.md` vẫn 04:03:30 (chưa sửa).

| Mức | Số lỗi còn |
|---|---|
| Chặn | 0 |
| Nặng | 0 |
| Nhẹ | 6 |

### Hai lỗi nặng và bảy lỗi nhẹ vòng 2

| # vòng 2 | Mức cũ | Trạng thái | Chỗ xác nhận |
|---|---|---|---|
| 1 | Nặng | Đã sửa | Dòng 23: "Số và kết luận của sim chỉ nằm ở file kết quả", ba câu kết luận đã xóa. Dòng 14 ghi 4 kịch bản (tệ, trung bình, tốt, tham) |
| 2 | Nặng | Đã sửa | Dòng 50 `ItemGroupData` nhãn "MVP (RCP-124, RCP-126 dùng nhóm ID ở chương 1)" |
| 3 | Nhẹ | Đã sửa | Dòng 20 "64 sự kiện" (đếm bảng: 64 hàng), dòng 220 "đánh số tiếp từ 65" |
| 4 | Nhẹ | Đã sửa | Dòng 271 mô tả validator đủ họ ID, trùng, CGO nhóm, giá, Hạng. Mục 6.2 điểm 1: "khối dữ liệu markdown ... sang data/*.json" |
| 5 | Nhẹ | Đã sửa | Thử xong (bảng dưới): RCP, KH05 trùng, N9, MM9.9, T-XYZ đều bị bắt. Selftest dòng 61 có ca này |
| 6 | Nhẹ | Đã sửa | Dòng 49 `giaTheoLoai` cho CGO-121, 221, 321. Dòng 73 `OrderInstance` và `OrderLine` có trường |
| 7 | Nhẹ | Đã sửa một nửa | Dòng 105 định nghĩa tài khoản (ID nền tảng của netcode). Dòng 116 trần Giữ chỗ vẫn là "đề xuất gửi gd-character", `nguoi-choi.md` chưa nhận. Chuyển thành lỗi chéo của gd-character (dưới) |
| 8 | Nhẹ | Đã sửa | `tram-va-cang.md:396` dẫn `ky-thuat.md` luật 17 và điểm tự lưu K23, :601 ghi "đã áp" |
| 9 | Nhẹ | Đóng | Không phải lỗi file, file kết quả sinh lại đứng yên, lượt chạy dưới khớp |

### Lỗi còn lại

| # | Mức | Lớp | File:dòng | Vấn đề | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|
| V1 | Nhẹ | 2 | ky-thuat.md:252 | Biên "File save chính hỏng: ... báo người chơi mất một ngày (luật 20)". Luật 20 (:124) giờ là lùi về điểm lưu trước (ba điểm), không phải mất một ngày | Sửa thành "lùi về điểm lưu trước" | gd-tech |
| V2 | Nhẹ | 1, 3 | ky-thuat.md:49-56, `vat-pham.md:433` | K26 là cơ chế mới nhưng `ItemData` không có trường cho vật tiêu hao dùng trong chuyến: hiệu ứng (hồi 40 Oxy), thời gian dùng (1,5 giây), số tối đa trong túi mỗi chuyến (2, CON-101), chiếm túi. `ToolData.tieuHao` chỉ trỏ ID. Dev có thể đặt vào `PlayerTuning`, nhưng trần 2 bình theo từng món nên nằm ở `ItemData` | Thêm `hieuUng`, `giayDung`, `toiDaMoiChuyen` cho nhóm CON | gd-tech |
| V3 | Nhẹ | 1, 3 | ky-thuat.md:68, `cot-truyen.md:253, :297, :344` | K25: mốc đóng chương (C1.9, C2.8, C3.8) biểu diễn được bằng điều kiện "Giai đoạn động cơ xong", nhưng `StoryBeatData` không có cờ `dongChuong`, nên "chỉ mốc đóng chương mới mở dải mới" (`cot-truyen.md` luật 1) dev phải suy từ tên | Thêm `dongChuong` (bool) và `giaiDoanDongCo` | gd-tech |
| V4 | Nhẹ | 1, 3 | map.md:37-41 (A01 đến A05), validator | Địa danh Cradle tiếng Anh A01 đến A05 là một họ ID mới trong danh mục `map.md`, schema không có chỗ (khu trong map nhánh, `BranchMapData.khe` chỉ ghi khe manh mối) và `HO_ID` của validator không kiểm | Thêm `AreaData` (id, ten, branchMapId hoặc zoneId) hoặc ghi rõ A01 đến A05 chỉ là tên hiển thị trong chuỗi, và thêm A vào `HO_ID` | gd-tech |
| V5 | Nhẹ | 3 | ky-thuat.md:148-218 | Không có sự kiện cho lần tự lưu (ba điểm K23) và lưu lỗi (UI-44), trong khi mục 8 có tiêu chí "file save" và "host thoát thử 4 thời điểm". Không đo được khi playtest lưu thất bại bao nhiêu lần, lùi về điểm nào | Thêm `save_written` (diem_luu, ms) và `save_failed` (diem_luu, lan) | gd-tech |
| V6 | Nhẹ | 3, 5 | ky-thuat.md:116, nguoi-choi.md | Trần Giữ chỗ 1 lần mỗi chuyến vẫn là đề xuất, chưa vào `nguoi-choi.md` và `PlayerTuning`. Câu hỏi mở 4 ghi "Nhận" dù gd-character chưa nhận | gd-character nhận và ghi vào `nguoi-choi.md` 2.9 luật 6 và mục 3, hoặc gd-tech đổi thành "đề xuất, chờ" ở câu hỏi mở | gd-character, gd-tech |

### Lỗi chéo ngoài file này (không tính vào ĐẠT của ky-thuat)

| File | Còn | Người sửa |
|---|---|---|
| `nguoi-choi.md` dòng 120, 121, 221, 222, 291, 310 | Còn "Về an toàn giữ nguyên túi" khi thoát hoặc rớt giữa chuyến, trái C10, K2. Trước đây tính là chặn. Chưa thấy K26 ("Dùng vật tiêu hao") và K27 áp ở file này (file đứng yên từ 04:03:30), và dòng 222, 347 còn `[CHỜ gd-tech]` đã được ky-thuat trả lời | gd-character |

### Khớp K23 ba điểm lưu giữa các file

| File | Chỗ | Khớp ky-thuat luật 18? |
|---|---|---|
| `00-khung-game.md` | K23, C10 (04:54) | Có |
| `ux-ui.md` | HTR-03 :281 "Đã lưu" tại ba điểm, luật 23 :66, câu hỏi 5 :951, K23 :526 | Có |
| `tram-va-cang.md` | :396 host rời giữa ca về điểm tự lưu sau chuyến cuối, :601 | Có |
| `map.md` | :86, :167, :496, :530 seed chuyến sinh từ thế giới, số ngày, số thứ tự chuyến (K23) | Có, cùng công thức với luật 18b |
| `nguoi-choi.md` | không có K23, vẫn C10 cũ | Không (gd-character) |

### Thử validator vòng cuối (bản sao ở thư mục tạm, nền 8 lỗi của `nguoi-choi.md`)

| Chèn | Bắt? |
|---|---|
| Câu trái C10 vào `ky-thuat.md` | Có |
| "20, 30, 42, 56, 72" vào `map.md` | Có |
| Hàng RCP-101 và KH05 định nghĩa lần hai | Có ("ID trùng trong bảng") |
| N9, MM9.9, T-XYZ | Có ("ID không có trong file chủ") |
| "The Sundering" | Có (tên cũ và tên riêng lạ) |
| "chờ GDM" | Có |

### Số kiểm vòng cuối

| Việc | Kết quả |
|---|---|
| `selftest.mjs` | 25 phép ĐẠT, thoát 0 |
| `validate-gdd.mjs` | 379 ID, 8 lỗi, tất cả ở `nguoi-choi.md` (gd-character), 0 lỗi ở `ky-thuat.md` |
| 3 sim `--ra` thư mục tạm | Thoát 0. Cùng seed hai lần với `--khong-gio` trùng byte cả 3. So với `ket-qua/*.md` (trừ dòng 3): 0 dòng khác |
| Sim chuyến áp trần K26 | `tham-so/chuyen.json` có `tranK26` 0,25 và `sim-chuyen.mjs:93-94` giới hạn hồi theo trần |
| Bảng quyền co-op | Dòng 83 K26 (host giữ bộ đếm, từ chối khi quá 25%, đang ngạt, bình đầy), dòng 85 K27 (host từ chối trao và thả khi ngạt) |
| Schema phủ ID mới đợt 4 | CGO-113: `ItemData.canChe`, `giayDong`. CON-101: thiếu trường (V2). K25: có điều kiện nhưng thiếu cờ (V3). A01 đến A05: chưa có (V4). MM, STY: `ClueData`. Trần 2 bình: có ở GDD, chưa có trường |

(Phần bên dưới là biên bản vòng 2, giữ để tra.)

---

## Biên bản vòng 2

TRẢ LẠI (vòng 2) - 20 trên 22 lỗi vòng 1 đã sửa, lỗi chặn đã hết trong file này. Còn 2 lỗi nặng: câu kết luận sim ở "Hiện hành" lệch số sim hiện hành, và `ItemGroupData` ghi "Sau MVP" trong khi công thức MVP chương 1 (RCP-124, RCP-126) dùng nhóm ID.
Giờ sửa file khi chấm: 04:42:06 (`ls -l`, `gdd/he-thong/ky-thuat.md`, 373 dòng, không đổi tới 04:50). Vòng chấm: 2 (vòng 1 chấm bản 04:02).
Tools lúc chấm: `validate-gdd.mjs` 04:38, `selftest.mjs` 04:39, `lib.mjs` và 3 sim `.mjs` 04:42, `tools/README.md` 04:43, `tham-so/combat.json` 04:49, `ket-qua/sim-chuyen.md` 04:49. Một số file tham số và kết quả vẫn được vai khác sửa trong lúc chấm, mọi lượt chạy dưới đây ghi giờ.

## Tóm tắt lỗi

| Mức | Số lỗi còn |
|---|---|
| Chặn | 0 |
| Nặng | 2 |
| Nhẹ | 7 |

## Lỗi vòng 1: Đã sửa hay Còn

| # | Mức cũ | Trạng thái | Chỗ xác nhận |
|---|---|---|---|
| 1 | Chặn | Đã sửa | ky-thuat.md:118 (luật 15) "Rời khi đang ngoài chuyến thì tính như bị kéo về (K2, chỉ giữ 1 món), theo C10". :119 (luật 16) "Quá 15 giây thì tính như bị kéo về (K2), theo C10". :32, :249, :253 khớp. grep "giữ nguyên túi" trong ky-thuat.md = 0 câu trái luật, validator mới không báo file này. Lỗi tương tự còn ở file khác, xem mục Mâu thuẫn chéo |
| 2 | Nặng | Đã sửa | :124 (luật 18) "Chỉ lưu khi ngủ (K23). Không có điểm lưu giữa ngày", :120 (luật 17) "về lần lưu gần nhất là đầu ngày đó (K23, C10)", điểm tự quyết 6 (:354) ghi GDM chốt K23. Khớp `tram-va-cang.md:395` |
| 3 | Nặng | Đã sửa | Mục 2.3b :122-140: ghi file tạm rồi đổi tên, `.bak`, file hỏng thì mở `.bak`, lưu lỗi 3 lần cho thoát (:126), số phiên bản và migrate (:127), bảng trường có K22 (soChuyenDaDi, caDaMo), K24 (daKetGame), daySeed, hàng đợi qua đêm, số lần cập bến, vật manh mối, buồng đã vớt. Còn thiếu cấu trúc đơn, xem lỗi mới 6 |
| 4 | Nặng | Đã sửa | Bảng quyền :83-102 có hàng: Trao đồ (:88), Vật kéo, 2 người kéo thì host nắm (:89), pha hazard từ seed cộng giờ host (:91), xác nhận ra chuyến và ngủ, Bộ đếm ngày K22, người đã về C9 (:92), Giữ chỗ (:87), Ghim và Ping (:101) |
| 5 | Nặng | Đã sửa trong file | :119 Giữ chỗ tối đa 1 lần mỗi chuyến, vào lại bằng mã slot, người rớt cuối thì chuyến chờ tối đa 15 giây, trạm và ca cảng dùng cùng cửa sổ 15 giây. Mục 3 có "phát hiện 4 giây" (:231), "số lần Giữ chỗ 1" (:234). Phụ thuộc: luật còn ghi "đề xuất gửi gd-character", `nguoi-choi.md` chưa nhận (xem lỗi mới 7) |
| 6 | Nặng | Đã sửa, còn sót nhỏ | Có `ClueData` (:66), `ShopEntryData` (:58), `ItemInstance` (:76), `EnemyData` gộp DL và WD, có `khien` (:59), `ItemGroupData` (:53), chuỗi và tutorial chuyển câu hỏi mở 3 (:74, :337). Sót: lỗi mới 2 (nhãn ItemGroupData), lỗi mới 6 |
| 7 | Nặng | Đã sửa | Luật 7 :45 và điểm tự quyết 11: một hệ UPG-họ-bậc, T-xxx chỉ là nhãn. `UpgradeData` :57 có `ho` đủ 8 họ, `loai` BoDo hoặc DungCu, `moBang`. `kinh-te-tien-trinh.md:126` đã ánh xạ T-xxx sang UPG, grep UPG-PRY = 0 |
| 8 | Nặng | Đã sửa | :52 `ItemData.cachMang` (tui, mang, keo, khong), `coKien` theo CGO. :68 `CargoGroupData` chỉ còn id, kien, moChuong |
| 9 | Nặng | Đã sửa | `ShipTypeData` :67 có mocMo, lanCapBenDeMo, thuongNhan, luatRieng {kieu, thamSo}. `BossData` :61 có sinhLuc, noi. `ZoneData` :62 có aCoop. `EnemyData` :59 có khoangBoDuoi, kieuSinh, soConMoiDiem. `HazardData` :64 có choang, giayBat, giayTat, kichThuocVung, soManh, khóa ASCII. `BranchMapData` :65 có khoa, thoiLuongMoiLanVao, khe. NP có ở `CharacterProfile` :72. Mọi loại có `nhan` (:48) |
| 10 | Nặng | Còn | Số cụ thể sai (0,47, 1,05 đến 1,6) đã bỏ, nhưng :25 và :26 vẫn ghi kết luận lệch sim hiện hành. Xem lỗi mới 1 |
| 11 | Nặng | Đã sửa | Sự kiện 47 đến 64 (:203-220): trade, pinned, beacon_seen, zone_exit, branch_exit, branch_unlock, hazard_warn, creature_wake, attack_ticket, creature_born, clue_picked, quest_item_dropped, survivor_feature_open, nhóm Net (hold, rollback, reject_hash, rtt). Trường chung có session_id, world_id, play_seconds_total (:145). Luật 25 :146 nói máy nào ghi |
| 12 | Nặng | Đã sửa | Mục 8 :318-324 có tiêu chí co-op nhặt trùng, kiện, mất kết nối 15 giây, host thoát, vào giữa chừng, save, dữ liệu. :316 chỉ khẳng định các loại có ca cài trong selftest, đúng với `selftest.mjs:30-61` |
| 13 | Nặng | Đã sửa một phần | Xem mục "Thử validator" dưới. Bắt được: C10, số túi cũ, ID Z, UPG 4 chữ, CGO không nhóm, ID lạ. Chưa bắt: ID trùng ngoài khối ITEM, N, MM, T-. Còn lại hạ thành Nhẹ (lỗi mới 5) |
| 14 | Nặng | Đã sửa, còn sót nhẹ | Luật 1, 2 :39-40, điểm tự quyết 9: nguồn chuẩn là markdown, exporter đọc thẳng khối markdown, Sheet là bản dán. Sót: :281 (xem lỗi mới 4) |
| 15 | Nặng | Đã sửa | Luật 12 :108 (mã slot, Phòng đầy, xóa nhân vật), luật 13 :109 (buồng về ở điểm nghỉ kế, Chờ vào), luật 14 :110-116 bảng N cho chuyến, kẻ địch, ca cảng, khớp `combat-driftlife.md` 6b và `tram-va-cang.md` luật 64 |
| 16 | Nhẹ | Đã sửa | :3 "K1 đến K24, C1 đến C10, sửa lần 4" |
| 17 | Nhẹ | Còn (file khác) | `CHO_DUOC` đã bỏ gd-tech nên máy báo: `nguoi-choi.md:222`, `:347`, `tram-va-cang.md:437` vẫn còn `[CHỜ gd-tech]`. Việc của gd-character, gd-quan |
| 18 | Nhẹ | Đã sửa | Bảng 6.3 :289-295 thêm cột "Chi phí cố định khi bán đứt (cần kiểm trang chính thức)" cho mọi dòng, dòng NGO ghi quyền phân tán, luật 17 :120 "mặc định không chuyển host, dev được đề nghị", câu hỏi mở 2 |
| 19 | Nhẹ | Đã sửa | README :8-11 và ky-thuat.md :274-276 dùng `projects/game-moi/tools/ket-qua/...`, thư mục có sẵn |
| 20 | Nhẹ | Đã sửa | Luật 27 :148 (bỏ cột Nguồn khi dán, Dùng để thành Description), luật 26 :147 (tên nhóm là quyết định của gd-tech) |
| 21 | Nhẹ | Đã sửa | Mục 3 :228-236 thêm timeout phát hiện, dung sai tốc độ, cửa sổ trả lời, số lần Giữ chỗ, số người tối đa, đổi nhãn nguồn thành "đề xuất, dev chỉnh" |
| 22 | Nhẹ | Đã sửa | Đã chạy `--khong-gio` hai lần cho từng sim: `cmp` trùng byte cả 3. Dòng 3 in "hash tham số" (chuyen 91ce9450, ca-cang 28c5a722, combat 47a36ef9) |

## Lỗi mới và lỗi còn của vòng 2

| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|---|
| 1 | Nặng | 2, số | ky-thuat.md:14, :25, :26 | Kết luận sim ở "Hiện hành" không khớp file sim hiện hành (04:45 đến 04:49). (a) :26 "S2 Mirror Mantis còn trên trần cỡ M": sim ghi ròng 1,31 (trần cỡ M là 1,6, `combat-driftlife.md:437`), loài vượt nhẹ là Lumen Jelly 1,61. (b) :26 "S5 BS-1 nặng hơn mục tiêu cả thời lượng và Oxy": sim S5 hạ trung bình một người 1,2 phút (P90 1,3), tệ 1,8 phút, mục tiêu 2 đến 4 phút, tức nhẹ hơn mục tiêu, P90 Oxy 64% bình ở trung bình. (c) :25 "chương 2 tới 5 dưới mục tiêu đơn đủ": chương 2 là 89 / 90 / 87 / 76% (nằm trong 70 đến 90%), chương 3 một bến 98 / 96 / 93 / 94%, mục tiêu đơn đủ chỉ ghi cho chương 1 (`tram-va-cang.md:449`). Chương 1 là 91 / 94 / 93 / 81%, N = 1 đến 3 vượt trần 90% một điểm. (d) :14 "3 kịch bản" nhưng sim chạy 4 (tệ, trung bình, tốt, tham). (e) :24 "người tham lệch nhẹ ở chương 3 và 5": thật ra chương 1 là 10%, chương 3 là 41%, chương 5 là 13%. Dòng :23 đã tự ghi "không chép tay", nhưng 3 câu này chính là chép tay lệch | `tools/ket-qua/sim-combat.md` bảng 2 (Mirror Mantis 1,31, Lumen Jelly 1,61) và mục 5 (BS-1). `sim-ca-cang.md` mục 2. `sim-chuyen.md` mục 2 (kéo về tham 10, 36, 41, 29, 13%). Các file sim bị đổi sau 04:42 nên câu trong GDD chạy nhanh hơn sim, đây là lý do gốc | Xóa ba câu kết luận khỏi "Hiện hành", chỉ giữ dòng "xem file kết quả, mục tiêu đạt hay không đọc trong file đó". Hoặc để script in lại bảng đối chiếu mục tiêu | gd-tech |
| 2 | Nặng | 3 | ky-thuat.md:53 | `ItemGroupData` ghi nhãn "Sau MVP" nhưng nhóm ID được dùng trong công thức MVP chương 1: RCP-124 "3 x một trong SMP-111..115" (MVP, Thông dịch viên chương 1) và RCP-126 "1 x một trong LIV-111..113" (MVP, bắt sống loài nhỏ, tính năng cốt lõi của MVP theo khung mục 12). Dev lọc theo `nhan` sẽ bỏ nhóm và hai công thức MVP vỡ tham chiếu | `vat-pham.md:322` (RCP-124 MVP), `:324` (RCP-126 MVP). `00-khung-game.md:179` (MVP có bắt sống loài nhỏ và 1 loại hàng Driftlife sống) | Đổi nhãn `ItemGroupData` thành MVP. Thêm ca selftest: mọi ID dùng trong công thức MVP có nhãn MVP | gd-tech |
| 3 | Nhẹ | 1 | ky-thuat.md:20, :222 | :20 "46 sự kiện" nhưng bảng có 64. :222 bảo gd-ux sự kiện "đánh số tiếp từ 47 khi dán tab", nhưng 47 đến 64 đã dùng, năm sự kiện UX sẽ trùng No | Bảng :150-220 | Sửa thành 64 và "đánh số từ 65" | gd-tech |
| 4 | Nhẹ | 3 | ky-thuat.md:273, :281 | :273 mô tả validator bằng danh sách kiểm cũ, thiếu các kiểm mới (ID trùng trong khối ITEM, CGO thuộc nhóm, số túi cũ, câu trái C10, vật truyện, Z, giá kiện, ngưỡng Hạng). :281 mục 6.2 điểm 1 vẫn ghi "TSV Sheet sang data/*.json", trái luật 2 :40 (đọc thẳng markdown) | `validate-gdd.mjs` các khối 7, 8 và các kiểm sau | Cập nhật hai dòng | gd-tech |
| 5 | Nhẹ | 3 (máy) | tools/validate-gdd.mjs:188-206, selftest.mjs | Kiểm ID trùng chỉ chạy trên khối ITEM và các bảng ngay dưới tiêu đề chứa "Danh mục" (cờ `trongDanhMuc` bị xóa ở mỗi tiêu đề con). Không bắt trùng RCP, UPG, SLV, KH05 (đã thử). Họ N, MM, T- vẫn ngoài `HO_ID`. Selftest không có ca "ID trùng" | Mục "Thử validator" | Mở rộng kiểm trùng cho mọi bảng có cột đầu là ID định nghĩa, thêm N, MM vào `HO_ID`, thêm một ca selftest | gd-tech |
| 6 | Nhẹ | 1, 3 | ky-thuat.md:52, :138 | `ItemData.giaTally` là một số nhưng giá lồng CGO-121 phụ thuộc loài (50, 55, 40 Tally cho DL-G01, G02, G04), cần bảng (cargoId, speciesId, giaTally) hoặc công thức. Đơn hàng và lịch tàu có trong save (:138) nhưng không có trường (dòng {nhóm, số cần, số đã nhận}, giờ đến, bến) | `kinh-te-tien-trinh.md:73`, `:111-113` | Thêm hai dòng schema | gd-tech |
| 7 | Nhẹ | 3, 5 | ky-thuat.md:108, :119 so với nguoi-choi.md:120-121, :221-222, :291, :310 | Hai chỗ chưa khép chéo. (a) Luật 12 "nhận ra bằng mã slot của tài khoản đó" không nói tài khoản là gì (Steam ID, tên máy), dev phải đoán. (b) Luật 16 trần Giữ chỗ 1 lần vẫn là "đề xuất", `nguoi-choi.md` chưa nhận, và còn 6 dòng trái C10 của chính file đó (validator báo, xem dưới) | `tools/validate-gdd.mjs` chạy 04:45 | gd-tech chốt định danh tài khoản, gd-character sửa `nguoi-choi.md` và nhận trần Giữ chỗ | gd-tech, gd-character |
| 8 | Nhẹ | 3 | tram-va-cang.md:395, :537, :601 | Còn viết "ky-thuat.md luật 16 là điểm lưu tạm" và đề xuất khung nhận điểm lưu tạm, trong khi ky-thuat đã bỏ điểm lưu tạm, luật 16 giờ là mất kết nối. Số luật lệch sau khi đổi số | grep luật 16 | Sửa dẫn chiếu | gd-quan |
| 9 | Nhẹ | 2 | tools/ket-qua/*.md | Lúc 04:45 đến 04:49 ba file kết quả và `combat.json` được ghi lại, nên bất kỳ số nào ký trong GDD sẽ lệch tiếp nếu chép tay. Không phải lỗi file, nhưng ghi để gd-tech nhớ lỗi 1 | | | |

## Thử validator mới

Chạy trên bản sao `gdd/he-thong` ở thư mục tạm của tôi (nền có sẵn 14 lỗi của các file khác), chèn vào giữa file rồi so với nền.

| Chèn | Bắt? |
|---|---|
| "Thoát giữa chuyến thì Về an toàn giữ nguyên túi." (trái C10) vào `ky-thuat.md` | Có: "Trái C10: rời hoặc rớt giữa chuyến không giữ nguyên túi" |
| "20, 30, 42, 56, 72" (túi cũ) vào `map.md` | Có: "Số túi cũ (trước log 54)" |
| `UPG-ZZZ-1`, `Z7` | Có: "ID không có trong file chủ" |
| Hàng `RES-101` định nghĩa lần hai trong khối ITEM | Có: "ID trùng trong bảng" |
| Hàng `RCP-101`, `UPG-OXY-1`, `SLV-102`, `KH05` định nghĩa lần hai | Không |
| `N9`, `MM9.9`, `T-XYZ` | Không |
| "host rớt thì chuyển host" và "điểm lưu tạm giữa ngày" (trái luật 17, 18) | Không (đúng, máy không làm được) |
| Nền trên bản gốc | 14 lỗi, thoát 1. Có 9 lỗi C10 hoặc số ô cũ ở `nguoi-choi.md` (dòng 120, 121, 221, 222 x2, 291, 310, 347) và `ho-so-nhan-vat.md:215`, `ux-ui.md:940`, `vat-pham.md:82` (BPR-104), CGO-411 và CGO-511 không nhóm, `tram-va-cang.md:437` còn CHỜ |

Các lỗi trong nền là lỗi của file khác. Validator thoát 1 vì chúng, ky-thuat.md không có dòng nào.

## Trái lời Lead (liệt kê, hoặc "Không")

Không.

## Mâu thuẫn chéo (file khác nói gì, dòng nào)

| ky-thuat nói | File khác nói | Dòng |
|---|---|---|
| :118, :119 rời hoặc quá 15 giây thì tính như bị kéo về (C10) | `nguoi-choi.md` vẫn ghi "Về an toàn giữ nguyên túi" ở :120, :121, :221, :222, :291, :310 (gd-character chưa sửa, validator đã báo). Không tính vào lỗi ky-thuat nhưng đây là chỗ cuối còn trái C10 | `nguoi-choi.md` |
| :119 Giữ chỗ tối đa 1 lần mỗi chuyến | `nguoi-choi.md` chưa có, nên hiện chỉ là đề xuất | `nguoi-choi.md:222` |
| :120 host thoát thì về đầu ngày, không điểm lưu tạm | `tram-va-cang.md` khớp (:395), nhưng :537, :601 còn dẫn số luật 16 cũ | `tram-va-cang.md` |
| :92 xác nhận 30 giây | `tram-va-cang.md:178-179` đã đổi thành 30 giây theo K23, khớp. Lệch cũ đã hết | |
| :57 một hệ UPG | `kinh-te-tien-trinh.md:126` ánh xạ T-xxx sang UPG, khớp | |

## Chỗ phải đoán (lớp 5)

1. Định danh tài khoản cho mã slot (Steam ID hay mã tự tạo).
2. Cấu trúc đơn hàng và lịch tàu trong save.
3. Giá lồng sinh vật theo loài là bảng hay công thức.
4. Trần Giữ chỗ có hiệu lực chưa, hay còn là đề xuất.
5. Nếu stack netcode chọn hỗ trợ chuyển host sẵn thì luật 17 (mặc định không chuyển) áp thế nào, dev tự quyết (đã ghi ở câu hỏi mở 2, chấp nhận).
6. Mục 6.2: `xuat-data.mjs` và importer chưa có, nên round-trip (luật 6) chưa kiểm được.

## Số kiểm bằng chứng (số nào khớp file sim, số nào không)

Chạy lúc 04:45 đến 04:50, `--ra` sang thư mục tạm của tôi, seed 1.

| Việc | Kết quả |
|---|---|
| `selftest.mjs` | 22 phép kiểm ĐẠT, thoát 0 (04:45 và 04:50) |
| `validate-gdd.mjs` | 14 lỗi, thoát 1, không lỗi nào ở `ky-thuat.md`, 347 ID định nghĩa |
| `sim-chuyen.mjs`, `sim-ca-cang.mjs`, `sim-combat.mjs` | Thoát 0. Bản của tôi trùng `ket-qua/*.md` (trừ dòng 3) ở ba file, kiểm lại sau khi file kết quả đổi lúc 04:48 và 04:49: vẫn trùng |
| Cùng seed cùng số | Có: với `--khong-gio`, từng sim chạy hai lần và `cmp` trùng byte. Dòng 3 in hash tham số |
| :24 thời lượng chuyến | Chương 1 là 4,4 phút, chương 5 là 10,4 phút. Khớp |
| :24 kéo về của người cẩn thận | 1, 1, 3, 0, 0% (trung bình), 0% (tốt), dưới 5%. Khớp |
| :24 người tham lệch ở chương 3 và 5 | 10, 36, 41, 29, 13%. Thiếu chương 1 (10% dưới 15%), xem lỗi mới 1e |
| :25 chương 1 đạt, chương 2 tới 5 dưới mục tiêu | Chương 1: 91 / 94 / 93 / 81%. Chương 2: 89 / 90 / 87 / 76%. Chương 3 (2 bến): 71 / 70 / 65 / 90%. Chương 4, 5: 61 / 61 / 56 / 77%. Câu sai ở chương 2, xem lỗi mới 1c |
| :26 S2 Mirror Mantis trên trần | Ròng 1,31. SAI. Lumen Jelly 1,61 |
| :26 S5 nặng hơn mục tiêu | Hạ trung bình một người 1,2 phút (mục tiêu 2 đến 4). SAI chiều |
| :14 "3 kịch bản" | 4 kịch bản. SAI |
| Số sự kiện :20 | 64 hàng. SAI (file ghi 46) |
| Băng thông :262 | 1,8 KB/s nhận mỗi khách, 5,4 KB/s phát của host. Khớp |

## Tiêu chí nghiệm thu rút từ mục 8 (bảng Feature, Category, Acceptance Criteria đo được, MVP hay Sau MVP)

| Feature | Category | Acceptance Criteria | Đo được? | Nhãn |
|---|---|---|---|---|
| Selftest | Tool | `selftest.mjs` thoát 0 (hiện 22 phép ĐẠT) | Có | MVP |
| Tất định | Tool | Cùng seed cho cùng kết quả ở cả 3 sim (đã kiểm byte với `--khong-gio`) | Có | MVP |
| Ca tính tay | Tool | Có trong selftest cho cả 3 sim | Có | MVP |
| Giả định in ra | Tool | Đầu mỗi file kết quả liệt kê `[GIẢ ĐỊNH]` | Có | MVP |
| Validator | Tool | Bắt các loại lỗi có ca cài trong selftest | Có (đã thử, giới hạn ở lỗi nhẹ 5) | MVP |
| Schema | Dữ liệu | Phủ mọi bảng dữ liệu các GDD xin | Đo được, gần đạt: còn lỗi mới 2 và 6 | MVP |
| Nhặt trùng | Co-op | 1000 lần hai máy cùng nhặt: đúng 1 người nhận | Có (khi có build) | MVP |
| Kiện | Co-op | 100 lần thả, nhặt, bốc có rớt mạng: tổng kiện không đổi | Có (khi có build) | MVP |
| Mất kết nối | Co-op | Vào lại đúng nhân vật theo mã slot, quá 15 giây thì bị kéo về | Có, cần chốt định danh tài khoản (lỗi mới 7) | MVP |
| Host thoát | Co-op | Host thoát rồi mở lại: thế giới về điểm lưu gần nhất (3 điểm lưu), không mất ngày trước | Có | MVP |
| Vào giữa chừng | Co-op | Thử ở 3 pha, đúng luật 13 | Có | MVP |
| File save | Lưu | Cắt điện giữa lúc ghi, mở lại được bản trước | Có | MVP |
| Dữ liệu | Dữ liệu | Xuất rồi nhập lại, 0 trường lệch | Chưa có exporter | MVP |
| Số playtest so sim | Playtest | Thời lượng chuyến, đơn đủ, kéo về lệch không quá 20% | Có, nêu rõ sự kiện (`trip_end.minutes`, `order_end`, `player_choking_end`) | Sau MVP |

## Bỏ qua / không kiểm được

- Không mở `tools/prototype/bay.html` trong trình duyệt và không dò lại số 0,51 giây.
- Không tra giá, giấy phép netcode trên trang chính thức (không có mạng), nên cột "Chi phí cố định" chưa được xác thực, chỉ kiểm cách viết (cân xứng, có ghi "cần kiểm").
- Không đọc trọn các GDD khác, chỉ đọc cột, bảng và mục 6 liên quan tới schema, lưu và co-op. Mẫu mỗi loại: ItemData (ITEM, CGO), RecipeData (RCP-124, RCP-126), SalvageNodeData (NODE), UpgradeData (UPG), ShopEntryData, EnemyData (DL, WD), BossData (BS-1), HazardData, ShipTypeData (TA01 đến TA03), CargoGroupData, RoomData (KH), ClueData (MM1.1), StoryBeatData (18 loại điều kiện, đúng 18).
- Không kiểm `ux/kiem-ux.mjs`, `sim/vat-pham.mjs`.
- Các file `tools/ket-qua/*.md` và `tools/tham-so/combat.json` vẫn bị vai khác ghi trong lúc chấm. Kết luận lỗi mới 1 dựa trên kết quả chạy lúc 04:50.
