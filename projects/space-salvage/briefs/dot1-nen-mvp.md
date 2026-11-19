# Đợt 1 space-salvage: nền MVP (2026-11-19)

Trạng thái: TẠM DỪNG (Lead 2026-11-19: chốt khuôn GDD trước). Chưa gửi cho vai nào. Sửa theo khuôn mới trước khi giao.
Lead: "Chất lượng, không gấp" - "Dán thẳng sau QA ĐẠT" - "Có, web 1 file" (prototype jetpack).
Nguồn việc: `projects/space-salvage/DECISIONS.md` mục 2026-11-19 Kickoff, tab SYSTEMS mục "HỆ THỐNG CỔ CHAI" (ví, jetpack, cơ sở dữ liệu vật phẩm), SCOPE & RISKS rủi ro 1.

Đường găng: luật lõi MVP và cảm giác jetpack. Quán (ca bán, quầy) chưa vào đợt này vì câu 1 hay 2 quầy còn treo. gd-level và gd-ux chưa giao: chờ luật MVP của GD-003.

## Ai làm gì
| Mã | Việc | Agent | Phiên (id) | Ghi vào |
|---|---|---|---|---|
| GD-001 | Kéo 17 tab về repo + validator chéo bản đầu | gd-tools | local_36ad9fd6-f1b8-4fef-976f-4c8c40a3b3dd | `gdd/sheet/v0.1.0/*.tsv`, `tools/validate.mjs`, `qa/validator-v0.1.0.md` |
| GD-002 | Prototype jetpack web 1 file | gd-tools | local_36ad9fd6-f1b8-4fef-976f-4c8c40a3b3dd | `prototype/jetpack/index.html`, `prototype/jetpack/README.md` |
| GD-003 | Luật lõi MVP + bản đồ hệ thống MVP + lượt câu hỏi chốt luật | gd-systems | local_7d432ac0-aea1-4651-be5f-a7d291dc0ed3 | `gdd/luat-loi.md`, `gdd/ban-do-he-thong-mvp.md`, `gdd/cau-hoi-chot-luat-1.md`, `gdd/tu-vung.md` |
| GD-004 | GDD hệ thống jetpack + năng lượng bộ đồ + cứu hộ và nợ | gd-systems | local_7d432ac0-aea1-4651-be5f-a7d291dc0ed3 | `gdd/he-thong/jetpack-nang-luong.md` |
| GD-005 | Bảng source / sink MVP + sim 3 kịch bản ngày 1 tới mốc nâng cấp đầu | gd-economy | local_6fcec7c7-53e2-468a-a2c4-0dd1545dd37c | `gdd/economy-mvp.md`, `sim/economy/` |
| GD-006 | Chấm cuốn chiếu GD-001 tới GD-005 | gd-qa | local_367c8dbf-da97-4dde-9a04-bb4d3f217294 | `qa/GD-00x.md` |

Mọi đường dẫn tính từ `projects/space-salvage/`.

## Brief từng việc (đọc chung: `DECISIONS.md`, `so-hien-hanh.md`, `README.md` của project, `docs/playbooks/<vai>.md`)

### GD-001 gd-tools
- Mục tiêu: bản kéo 17 tab Sheet v0.1.0 về repo làm mốc so sánh, và validator in bảng lỗi chéo: công thức dùng item có trong ITEM LIST, giá món khớp hệ số chế biến ở ECONOMIC, nâng cấp đủ bậc và có giá, nhãn mốc (MVP / VS / Full) khớp giữa ONE PAGE, SCOPE & RISKS, RECIPES, ENEMIES & HAZARDS.
- Tiêu chí: `node projects/space-salvage/tools/validate.mjs` in bảng lỗi có tab, ô, mô tả. `qa/validator-v0.1.0.md` ghi số lỗi theo loại. Phải bắt được mâu thuẫn "MVP 1 quầy nhưng có 3 đồ độ".
- Giới hạn: chỉ đọc Sheet, không ghi Sheet. Schema JSON cho Unity chưa làm.

### GD-002 gd-tools
- Mục tiêu: prototype trình duyệt một file để Lead thử feel jetpack quán tính 8 hướng. Thanh chỉnh: lực đẩy, tốc độ tối đa, lực cản, phanh tự động bật/tắt và mức, tăng tốc (tốn năng lượng). Thanh năng lượng trừ theo thời gian, tăng tốc và va chạm. Vài vật cản và 3 vật nhặt được để có mục tiêu bay. Nút xuất JSON tham số.
- Đọc: tab PLAYER, SYSTEMS dòng 1 và 2, SCOPE & RISKS rủi ro 1. Số mặc định lấy từ PLAYER, đánh `[GIẢ ĐỊNH]`.
- Tiêu chí: mở `prototype/jetpack/index.html` bằng trình duyệt chơi được bằng bàn phím và gamepad, kéo thanh thấy đổi ngay, xuất JSON có đủ tham số. README ghi cách chơi và 3 bộ tham số mẫu (dễ, giữa, khó điều khiển).
- Giới hạn: không làm combat, quán. Không chốt số, Lead chốt sau khi chơi.

### GD-003 gd-systems
- Mục tiêu: luật lõi MVP ra giấy. `ban-do-he-thong-mvp.md`: 26 hệ thống ở tab SYSTEMS, mỗi cái ghi MVP có / rút gọn / không, kèm lý do. `luat-loi.md`: luật khẳng định cho một ngày MVP từ sáng tới lúc lưu. `cau-hoi-chot-luat-1.md`: tối đa 8 câu cho Lead, mỗi câu kèm phương án nghiêng về, gồm 3 câu đang treo (nhịp ngày có hạn trả nợ hay tự do, ca bán điều khiển nhân vật hay click, MVP 1 hay 2 quầy). `gdd/tu-vung.md`: từ của Lead lấy từ Sheet (tầng, quán, ₵, lưới, choáng, đồ độ...) để `soat.mjs` kiểm từ vựng cho mọi vai.
- Tiêu chí: mở `luat-loi.md` thấy luật cho đủ các bước của LUỒNG CHƠI MỘT NGÀY ở ONE PAGE, không câu nào dạng "có thể". `soat.mjs` 0 lỗi.
- Giới hạn: không đổi phạm vi MVP. Luật lõi chỉ chốt khi Lead trả lời bằng lời.

### GD-004 gd-systems (sau GD-003, không chờ Lead trả lời)
- Mục tiêu: GDD hệ thống jetpack, năng lượng bộ đồ, cứu hộ và nợ theo `/gdd-v1 he-thong`. Danh sách tham số trùng tên với thanh chỉnh của GD-002.
- Tiêu chí: GDD đủ mục theo khuôn, mỗi tham số có giá trị `[GIẢ ĐỊNH]` và biên. Báo gd-tools tên tham số ngay khi có.

### GD-005 gd-economy
- Mục tiêu: bảng source / sink ₵ chỉ trong phạm vi MVP (tầng 1, 7 công thức, 2 loài khách, nâng cấp cơ bản) và sim 3 kịch bản (người chơi yếu / trung bình / giỏi) cho các ngày từ ngày 1 tới khi mua được nâng cấp đầu tiên. So với mục MÔ PHỎNG LỢI NHUẬN MỘT NGÀY của ECONOMIC.
- Tiêu chí: chạy script trong `sim/economy/` in bảng ₵ theo ngày cho 3 kịch bản và số ngày tới nâng cấp đầu. `economy-mvp.md` ghi chỗ số v0.1 lệch sim và đề xuất. Số đọc từ Sheet đánh `[GIẢ ĐỊNH]`.
- Giới hạn: không đụng giá ngoài MVP. Chia 4 món + 3 đồ độ giữ như Sheet, ghi rõ là giả định vì câu quầy còn treo.

### GD-006 gd-qa
- Mục tiêu: chấm từng việc ngay khi tác giả báo xong, theo `docs/process/templates/ket-qua-qa.md`. GD-003, GD-004 dùng `/gdd-review`. GD-002 chơi thật trên trình duyệt.

## Ai đưa gì cho ai (gửi thẳng bằng SendMessage tới id phiên, không qua GDM)
- gd-systems có danh sách tham số jetpack (GD-004) thì báo gd-tools để GD-002 dùng đúng tên.
- gd-tools có bảng lỗi validator (GD-001) thì báo gd-systems và gd-economy.
- gd-economy cần số vật phẩm mỗi chuyến hoặc luật cứu hộ thì hỏi gd-systems.
- Xong một file thì báo gd-qa kèm đường dẫn, gd-qa trả lỗi thẳng cho tác giả.
- Bất đồng không tự chốt được: báo GDM, ghi hai phương án và đề xuất.

## Luật chung
- Mỗi người chỉ sửa file của mình (cột Ghi vào). File chung do GDM giữ (README, DECISIONS, so-hien-hanh, BACKLOG).
- Không sửa Google Sheet. GDM dán khi gd-qa chấm ĐẠT (`/gdd-sheet-sync`).
- Không thêm thứ Lead chưa duyệt. Điều chưa chốt đánh `[GIẢ ĐỊNH]`.
- Tiếng Việt có dấu, không gạch dài, không emoji, không dấu chấm phẩy. Soát bằng `node .claude/skills/gdd-v1/scripts/soat.mjs <file>`.
- Không commit. Xong báo GDM, dòng đầu `GD-### XONG|KẸT: <một câu>` kèm khối `## Báo cáo cho GDM`.
