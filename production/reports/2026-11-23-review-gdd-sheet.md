# Review GDD The Novent trên Sheet (2026-11-23)

Sheet: `1NayaWIuhGD9p3Czlff9sCubY610Ksye4bo97R_QqPdE` (Game Design Document - The Novent, 25 tab và 17 tab v0.1).
Đã đọc: OVERVIEW, CORE LOOP, Day, TRACKING, MVP Criteria Checklist. Đối chiếu với `gdd/00-khung-game.md`, `so-hien-hanh.md`, `DECISIONS.md`, `tram-va-cang.md`, `kinh-te-tien-trinh.md`, `ky-thuat.md`.
Chưa đọc kỹ: 20 tab còn lại (Player, Enemy, Salvage, Recipe, Customer, Upgrade, Zone, Shop, ITEM LIST, ECONOMIC...). Phương pháp: skill ahy-game-designer mục 1 (soi giả thuyết) và mục 3 (lăng kính A, B, C, D, J, M).

## Kết luận

**Hợp lý nhưng chưa chứng minh.** Chuỗi nhân quả của game mạch lạc và số thời lượng có sim. Có hai rủi ro lớn hơn mọi lỗi chữ:

1. Chưa có prototype nào: 58 tiêu chí MVP đều "chưa có build", trong khi GDD repo đã gần 195.000 từ. Động từ lõi (bay quán tính 8 hướng, liều Oxy) chưa ai chơi thử.
2. Phạm vi vượt sức nhóm 1 artist 2D và 4 dev, nhất là co-op online nằm ngay trong MVP.

Trên Sheet có 5 chỗ lệch với luật đã chốt, OVERVIEW lệch nhiều nhất vì chưa cập nhật ca cảng theo khung Dave.

## 1. Rủi ro thiết kế

| # | Lăng kính | Thấy gì | Mức | Sửa cụ thể | Cách kiểm | Nhãn |
|---|---|---|---|---|---|---|
| 1 | A. Tìm cái vui | MVP Checklist 58 dòng, Status đều FALSE, "chưa có build". Sim chỉ đo thời lượng và tiền, không đo được cảm giác bay và áp lực Oxy | Chặn | Dừng viết thêm GDD. Làm greybox một chuyến: bay quán tính, Hãm, Oxy, 1 điểm khai thác, Beacon, vạch "đủ về". Chưa art, chưa trạm. Đưa cho 5-8 người chưa biết game | Quan sát người thử có tự ra chuyến thứ hai không, có liều quá vạch "đủ về" không, có kêu khó điều khiển không (tiêu chí 23, 24, 54 đã có sẵn) | Chưa biết |
| 2 | M, N. Phạm vi | Cả game: 15 loài, 5 boss, 4 đơn vị Wardens, khoảng 150 vật phẩm, 8 map nhánh, 10 nhân vật, bộ đồ 5 trục hoán mảnh. MVP: 4 loài, 1 boss, 5 nhân vật mỗi người 8 biểu cảm, trạm đổi hình theo khoang, co-op 2 người online. Nhóm 1 artist 2D, 4 dev, mốc thời gian chưa có | Cao | MVP chơi một mình trước. Co-op tách thành một spike kỹ thuật riêng (đồng bộ bay quán tính, chia Oxy, host giữ ca cảng) chạy song song, gộp vào sau khi vertical slice một người đã vui. Kiến trúc vẫn viết cho co-op từ đầu để không phải làm lại | Dev ước công từng mục MVP theo S/M/L khi có mốc thời gian | Suy ra |
| 3 | B. Hook | USP 1 (Oxy là thời gian và máu) và USP 2 (ca cảng khung bán sushi) đều là cấu trúc của Dave the Diver. Phần chỉ game này có là trạm đổi hình theo khoang, co-op có lý do trong truyện, bay quán tính trong không gian | Vừa | Đưa "kéo một trạm chết sống lại" và co-op 4 buồng ngủ đông lên đầu USP. Ghi rõ học Dave cấu trúc gì, khác ở đâu | Đọc USP cho người chưa biết game, hỏi họ game này khác Dave ở đâu | Suy ra |
| 4 | D. Pillar | OVERVIEW dùng tên 5 pillar của Dave (Lead chốt). Khung game có câu riêng sắc hơn và kiểm được: "Mỗi hơi thở là một quyết định", "Mang về là để trạm sống lại", "Vũ trụ kể chuyện qua thứ bạn vớt được". Pillar 5 ghi Relaxation trong khi ca cảng có áp lực giờ và co-op không tạm dừng | Thấp | Giữ tên Dave, thêm câu riêng của khung làm dòng phụ cho mỗi pillar. Bỏ Relaxation hoặc chỉ rõ nó nằm ở pha Cuối ngày | Không cần test | Suy ra |
| 5 | C, J. Rủi ro và phần thưởng | Không đồng hồ ngày, không hệ đói, không chi phí giữ trạm. Cái giá duy nhất của một ngày kém là thời gian thật. Người chơi cẩn thận có thể đi 2 chuyến ngắn sát trạm mãi mà không bị gì, pillar 2 yếu đi | Vừa | Sim in Tally mỗi phút theo dải và theo độ xa trong dải. Dải xa cần cao hơn rõ (đề xuất từ 1,5 lần) sau khi trừ tỉ lệ bị kéo về | gd-tech chạy sim, so kịch bản cẩn thận với kịch bản tham | Giả định |
| 6 | C. Co-op 3-4 người | Ca cảng luôn 3 cửa neo, số tàu 25, 55, 55, 60 cho 1 tới 4 người. Người thứ 4 có ít việc trong ca. Ở chương 1 người về sớm chỉ có xưởng và sửa khoang (khoang sinh quyển mở chương 2) trong lúc chờ đồng đội | Thấp | Ghi nhận, chưa sửa. Đo khi có playtest co-op | Đếm giây đứng không trong ca và lúc chờ | Suy ra |

## 2. Lệch giữa Sheet và luật đã chốt

| # | Ở đâu trên Sheet | Ghi gì | Luật hiện hành | Mức | Sửa |
|---|---|---|---|---|---|
| 1 | OVERVIEW, pillar 3 cột Đo | "Đơn giao đủ 70-95%", "Thưởng đủ đơn và nhanh chiếm 15-25% thu Tally" | Đợt 9 bỏ đơn nhiều dòng, thưởng đủ đơn, thưởng nhanh. Thay bằng tip, sim đo 22-26% Tally (DECISIONS dòng 274) | Cao | Đo theo tỉ lệ tàu phục vụ xong và tỉ trọng tip |
| 2 | OVERVIEW, pillar 3 Mô tả, Core Gameplay, USP | "nhận đơn nào, đóng kiện và bốc lên tàu kịp giờ", "lấy hàng, chế thêm, đóng kiện, bốc lên tàu trước giờ rời" | Lập danh mục trước ca, Thông dịch viên tự đóng thùng, mỗi tàu gọi 1 thùng, mang thùng, bơm khí, tip theo kiên nhẫn. Không chế trong ca (CORE LOOP mục 5) | Cao | Viết lại theo CORE LOOP |
| 3 | MVP Checklist dòng 3, 4 | "Tắt game giữa ngày rồi mở lại thì về đầu ngày", "Host thoát thì thế giới về lần lưu đầu ngày" | Tự lưu 3 lúc: sau mỗi chuyến, sau ca cảng, lúc ngủ. Thoát thì về điểm lưu gần nhất (K23, C10, `ky-thuat.md` luật 17, 18) | Cao | Sửa 2 tiêu chí theo K23 |
| 4 | Day mục 3 | Chương 1 sim 1,82 giờ, cả game 13,4 giờ | `so-hien-hanh.md` và `kinh-te-tien-trinh.md`: 1,89 giờ và 13,9 giờ. 13,4 là kịch bản "bỏ đồ Trái Đất", không phải kịch bản trung bình | Vừa | Lấy số từ so-hien-hanh |
| 5 | OVERVIEW Art Direction và MVP Checklist dòng 36 | 72 điểm ảnh mỗi u (720p) và 106 px một u | Chưa rõ số nào chốt (72 ở 720p tương đương 108 ở 1080p) | Thấp | gd-character chọn một số, ghi kèm độ phân giải |
| 6 | OVERVIEW Information và Target Audience | "Age Rating: E+10" và "Độ tuổi: chưa chốt" | - | Thấp | Đổi Age Rating thành "chưa chốt" hoặc chốt E10+ |

## 3. Việc nên làm tiếp

| Thứ tự | Việc | Ai |
|---|---|---|
| 1 | Sửa 6 chỗ lệch ở bảng 2 trên Sheet, chạy `doi-chieu-sheet.mjs` | GDM |
| 2 | Brief greybox một chuyến (rủi ro 1) | gd-tech |
| 3 | Sim Tally mỗi phút theo độ xa (rủi ro 5) | gd-tech, gd-economy |
| 4 | Review 20 tab còn lại theo mục 4 (rà chéo) | gd-qa |

## Giả định

- Sheet `1Naya...` này chưa có trong repo. `so-hien-hanh.md`, `DECISIONS.md` và `tools/tham-so/sheet.json` vẫn trỏ Sheet `1kGdCe...`. Báo cáo coi Sheet này là bản Lead đang dùng. Nếu đúng thì phải đổi ID ở các file đó, nếu không thì cổng đối chiếu đang kiểm nhầm file.
- Co-op là cách chơi chính (Lead chốt), báo cáo không đề xuất bỏ co-op, chỉ đề xuất dời co-op ra sau vertical slice của MVP (điểm GDM tự quyết, log dòng 28).
