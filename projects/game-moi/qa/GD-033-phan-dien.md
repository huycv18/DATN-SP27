# GD-033 chấm phản diện mới (Lead sửa 2026-11-20)

Người chấm: gd-qa (6 file bằng subagent gd-qa theo `qa/_y-lead-phan-dien.md`, gd-qa đọc lại các lỗi nặng bằng grep trước khi gửi tác giả). Cập nhật 2026-11-20 sau vòng 1 (kèm vòng kiểm lại của 4 file). Tối đa 1 vòng sửa, nên lỗi còn lại ghi dưới đây cho GDM.
Công cụ: `node projects/game-moi/qa/quet-phan-dien.mjs` (ý cũ, tên thống nhất). `tools/validate-gdd.mjs`, `tools/doi-chieu-sheet.mjs` do gd-tech giữ.

GD-033 XONG: 6 trên 6 file ĐẠT, 0 chặn, 0 nặng. Nhẹ còn lại ghi trong bảng.

## 1. Kết quả mỗi file

| File và tab | Kết quả | Chặn | Nặng | Nhẹ | Ý cũ còn | Tên khớp | Hệ thống mới | Việc còn lại và người sửa |
|---|---|---|---|---|---|---|---|---|
| `cot-truyen.md`, GAME STORY | ĐẠT | 0 | 0 | 6 | 0 (trừ tên chương 3 "Kẻ canh giữ" GDM giữ, log 94) | Khớp | Không | gd-story: C3.8 thiếu điều kiện giai đoạn 3 trong danh sách, bảng lệch còn 5 dòng đã đóng, bullet sim cũ ở mục 5, hai ghi chú lịch sử TA09, giọng "canh, bảo hộ" |
| `combat-driftlife.md`, Enemy | ĐẠT | 0 | 0 | 1 | 1 (dòng lịch sử 733, được phép) | Khớp | Không | gd-combat, gd-tech: toán bắt cóc chưa ghi hồi hay giữ máu khi nhóm rút giữa trận, chưa có sim cho toán, BS-5, hộ tống C5.1 |
| `map.md`, Zone | ĐẠT | 0 | 0 | 1 | 0 | Khớp | Không | gd-character, gd-world: `nguoi-choi.md:115, 163` vật kéo trong 3 u đi theo về chưa có ngoại lệ hộ tống, `map.md` 2.5.5 chưa dẫn sang 2.7.9 |
| `tram-va-cang.md`, Customer | ĐẠT | 0 | 0 | 2 | 0 | Khớp (TA11 là tàu The Kindling) | Không (kiện tin mật chỉ là kiện thường trong ca cảng sẵn có) | gd-quan: `:488, :490` lệch 3 giây và 3 điểm (sim nay 4 giây và 4 điểm), quy tắc nhận STY-701 mỗi ngày và định nghĩa "đơn tin mật tới nơi" chưa có luật đánh số |
| `ho-so-nhan-vat.md`, Player (PL-06) | ĐẠT (GDM tự sửa 10:39, gd-qa grep dòng 115, 126, 164) | 0 | 0 | 6 | 2 hit khớp sai nghĩa (dòng lịch sử 353, "hận vì cha chết") | Khớp (Maro hai lần cập bến khớp `cot-truyen.md`, `tram-va-cang.md:54`) | Không | gd-character: câu chép đôi dòng 22, 111, 113, thiếu tên The Meeting War, The Kindling, The Hearth, WD-01 là máy và WD-04 là tàu nhưng hồ sơ gọi là lính, CHR-SEVRA ghi 4 clip liệt kê 5, bảng Lệch việc 2 chờ gd-combat |
| `vat-pham.md`, ITEM LIST | ĐẠT (gd-items sửa 10:40, gd-qa grep) | 0 | 0 | 5 | 0 (1 hit ở dòng lịch sử 699, được phép) | Khớp (RES-301 đã đổi "The Wardens") | Không | gd-items: nhẹ còn lại từ phiếu (cỡ CGO-421, Note tsv). Nặng BNG-102 đã sửa: nằm lại chỗ thả, lưu ở beacon cố định gần nhất đã qua, chưa qua thì ở cửa N4, ngoài K2, khớp combat luật 42, 43 và `map.md` 2.7.9 ở cả `vat-pham.md` (dòng ITEM và mục Vật kéo) và `ITEM LIST.tsv`. validator 0 lỗi (391 ID) |

Không chấm: `kinh-te-tien-trinh.md`, `ux-ui.md`, `ky-thuat.md`, `nguoi-choi.md` (không chạm phản diện theo brief). Ghi nhận ngoài phạm vi: `ky-thuat.md:279` còn chữ "Sundering" (gd-tech), `Day.tsv:47` (GDM), `Assets.tsv:74` còn "thu hoạch công nghiệp" (GDM), `nguoi-choi.md` chưa có ngoại lệ hộ tống (xem map).

## 2. Khớp 15 ý của Lead

| # | Ý | Có trong file | Kết quả |
|---|---|---|---|
| P1 | Bỏ "tham lam hơn loài người" | Khung B5, `cot-truyen.md` 2.4 | Đạt, quét 0 hit (còn lịch sử được phép) |
| P2 | "Loài người tham lam" là phiến diện của một tên độc tài | Khung B5, `cot-truyen.md` 2.4 và mục 13, MM4.2 hiến chương định cư | Đạt |
| P3 | X đảo chính lật đổ người cai trị | `cot-truyen.md` 2.4, hồ sơ Serith | Đạt |
| P4 | Người cai trị cũ chủ trương chung sống hòa bình sau chiến tranh vũ trụ | `cot-truyen.md` 2.4 (Ilvane, The Meeting War) | Đạt |
| P5 | X là con sĩ quan hy sinh trong chiến tranh, nuôi hận thù | `cot-truyen.md`, `ho-so-nhan-vat.md` (Serith) | Đạt |
| P6 | X hướng chú ý sang Trái Đất để ổn định vị trí | `cot-truyen.md` 2.4 | Đạt |
| P7 | Tín hiệu giả, phục kích | Khung B3, B4, `cot-truyen.md` 2.4 (Solace là mồi) | Đạt |
| P8 | Dưới X hành tinh hiếu chiến: ép lính, cướp bóc, tệ nạn, khơi mào chiến tranh | `cot-truyen.md` 2.4, `combat-driftlife.md` (lính Sennari), khung B5 | Đạt |
| P9 | Y là con gái người cai trị cũ, giả làm thương nhân | Sevra Ilvane giả Ilsume (TA04), `cot-truyen.md`, `ho-so-nhan-vat.md`, `tram-va-cang.md` | Đạt |
| P10 | Tình cờ thấy tấn công bắt cóc và cứu Y | C3.8 ở N4 (map, combat luật 40 đến 44, `cot-truyen.md`) | Đạt |
| P11 | Y lộ danh tính, xin giúp | `cot-truyen.md` chương 3 đến 4 | Đạt |
| P12 | Y và mạng lưới cách mạng chuẩn bị lật đổ | The Kindling (TA11, The Hearth) | Đạt |
| P13 | Hộ tống Y về căn cứ, kết nối tình báo | C5.1 (map 2.7.9, combat 2.8), đơn tin mật CGO-421 C4.7 và C5.2 (cảng, vật phẩm) | Đạt (còn ngoại lệ hộ tống ở `nguoi-choi.md`, nhẹ) |
| P14 | Cách mạng thành công, Y lên nắm quyền, giúp tìm người sống sót | `cot-truyen.md` C5.3 đến C5.6, khung B9 | Đạt |
| P15 | Y trao thông tin hành tinh có sự sống thật | Khung B9, B11, K10, `cot-truyen.md` mục 2.8 | Đạt |

## 3. Tên [TẠM] thống nhất
Chủng tộc Sennari, hành tinh Sennar, The Wardens (chế độ và quân, không phải chủng tộc), Serith (WD-P1, BS-5), Ilvane, Sevra Ilvane (NP-5), Ilsume (TR-2, TA04), The Meeting War, The Kindling (TA11), The Hearth (khoang ẩn N4), Maro (WD-P2, TA08), The Scattering. Quét `quet-phan-dien.mjs` mục tên: 0 "SAI" trong GDD hệ thống, khung còn dùng "X, Y [TẠM]" ở dòng 68 và 73 (GDM). Lệch còn lại duy nhất giữa file: số lần cập bến của Maro (hồ sơ ghi 3, các file khác ghi 2). Chưa tra trùng web: Sennar, The Meeting War, The Hearth (gd-story báo).

## 4. Không có hệ thống mới
Hộ tống Y dùng sẵn bay, kéo vật lớp Nặng, Hàng rào cắt, Recall Beacon, ngạt và C10 (map 2.7.9, combat 2.8 và luật 40 đến 44). Nối tình báo là kiện tin mật CGO-421 (nhóm HC15, TA11) dùng luật ca cảng sẵn có (luật 19, 20, 23 đến 31), giá từ `kinh-te-tien-trinh.md` (870 Tally, hệ số 1,00), không sinh Tally mới. Không thêm tiền, phe, chủng tộc, art chủng tộc. Toàn bộ nội dung mới nhãn Sau MVP (chương 3 đến 5), art MVP không đổi (9 mảnh, 25 clip người chơi, 14 clip NPC).

## 5. Việc GDM cần biết
| # | Điểm |
|---|---|
| 1 | Không còn lỗi chặn hay nặng mở. BNG-102 (gd-items) và Maro 3 lần cập bến (GDM sửa hồ sơ) đã sửa, gd-qa kiểm ĐẠT |
| 2 | Chương 1 trần thời lượng: sàn ngày 7 ngày cho 1,75 đến 2,33 giờ, vượt trần 2 giờ nếu ngày dài quá 17 phút. gd-economy chưa chạy lại sim sau đợt 6, sim cảng chưa có đơn tin mật nặng ở chương 4 và 5 (đã có TA11) |
| 3 | Chưa có sim cho toán bắt cóc, BS-5 và hộ tống C5.1 (đều Sau MVP) |
| 4 | Khung dòng 68 và 73 còn "X, Y [TẠM]", `ky-thuat.md:279` chữ "Sundering", `Day.tsv:47`, `Assets.tsv:74` "thu hoạch công nghiệp" |
| 5 | Lead sửa phản diện thay "kết mở không có đích": khung B9, B11, K10 đã theo (Y trao tọa độ hành tinh thật, Ember rời neo lên đường, hành trình tới đó để phần sau). `cot-truyen.md` đã nhất quán "Solace là mồi" và "hành tinh thật" |
