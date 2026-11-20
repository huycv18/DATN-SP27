# Định nghĩa game mới từ đầu

Một file duy nhất trình Lead tới khi chốt. Mỗi bước: Lead đưa ý tưởng, phòng phát triển thành 2 đến 3 phương án, Lead chốt bằng lời, GDM ghi nguyên văn vào mục "Đã chốt" và `DECISIONS.md`, rồi mới sang bước sau.
Chưa chốt bước trước thì không giao việc cho vai. Số và luật chỉ có sau bước 6.

| Bước | Nội dung | Trạng thái |
|---|---|---|
| 0 | Ràng buộc nền | Đã chốt 2026-11-19 |
| 1 | Ý tưởng gốc của Lead | Lead chốt qua story bản 3 và các mục DECISIONS 2026-11-20 |
| 2 | Fantasy và người chơi mục tiêu | GDM chốt 2026-11-20 theo ủy quyền của Lead, xem `gdd/00-khung-game.md` |
| 3 | Pillar (3 đến 4) | GDM chốt 2026-11-20 theo ủy quyền của Lead, xem `gdd/00-khung-game.md` |
| 4 | Core loop: nửa hành động phiêu lưu, nửa quản lý, và cái nối hai nửa | GDM chốt 2026-11-20 theo ủy quyền của Lead, xem `gdd/00-khung-game.md` |
| 5 | Danh sách hệ thống, chia cho 10 vai | GDM chốt 2026-11-20 theo ủy quyền của Lead, xem `gdd/00-khung-game.md` |
| 6 | Phạm vi MVP và Vertical Slice theo sức nhóm (4 dev, 1 artist 2D), mốc thời gian | GDM chốt 2026-11-20 theo ủy quyền của Lead, xem `gdd/00-khung-game.md`. MVP và mốc thời gian là đề xuất, Lead xem lại |
| 7 | Tên tạm, hướng art (vector 2D hay 2.5D), chi tiết bối cảnh | GDM chốt 2026-11-20 theo ủy quyền của Lead, xem `gdd/00-khung-game.md`. Hướng art 2.5D vẫn mở |

Xong bước 7 thì dựng Sheet GDD mới theo khuôn `docs/process/templates/gdd-sheet-khuon-indie.md` (OVERVIEW từ bước 1 đến 4 và 7, CORE LOOP từ bước 4 và 5, TRACKING từ bước 6).

## Bước 0 - Ràng buộc nền (đã chốt)

| Mục | Lead nguyên văn |
|---|---|
| Engine / nền tảng | "Game Unity, PC (có thể mở rộng nên đa nền tảng), 1 người chơi (để mở việc thêm MultiPlayer)" |
| Multiplayer (chốt sau, thay dòng trên) | "Game chốt sẽ đưa yếu tối Multi player vào game" (2026-11-19). Dạng: "Co-op 2-4 người" (2026-11-20, trả lời câu hỏi co-op online 2 đến 4 người) |
| Art | "Phong cách đồ hoạ 2D vector Art có thể có 3D để thành 2.5D (để mở chưa chốt)" |
| Kinh doanh | "Bán đứt không làm gói bán" |
| Thể loại | "Thể loại hành động nhập vai phiêu lưu kết hợp mô phỏng quản lý (khá giống Dave the diver)" |
| Nhóm | "1 Game Desiger, 4 Game Developer, 1 Artist 2D" |
| Cách làm | "đi từng bước, tôi sẽ đưa ý tưởng rồi chúng ta cùng phát triển ý tưởng đó và chốt từng thứ." |

Hệ quả phòng tự suy, chưa phải luật:
- Nhóm 4 dev nhưng 1 artist: art là nút cổ chai. Số loại quái, khách, map trong MVP phải tính theo sức 1 artist vector.
- Có Multiplayer (đã chốt): hệ thống lõi không được có luật chỉ đúng khi có một người (dừng thời gian toàn cục, tạm dừng khi mở menu), ghi nhận ở bước 4 và 5.

## Bước 1 - Ý tưởng gốc của Lead

Lead 2026-11-19: "về bối cảnh hãy tham khảo từ bối cảnh cũ và chúng ta sẽ phát triển từ ý tưởng sơ khai đó".
Vì vậy bối cảnh (bước 7 cũ) làm trước, các bước sau phát triển từ bối cảnh được chọn.

### Hạt giống lấy từ bối cảnh cũ (Sheet v0.1, tab OVERVIEW, ZONES, NPC & STORY)

| Hạt giống | Nguyên văn v0.1 |
|---|---|
| Thế giới | "bối cảnh cyberpunk khi loài người đã sống ngoài vũ trụ", "rìa thành phố quỹ đạo" |
| Người chơi | "người lao động nhỏ", "Mỗi lần nâng cấp là một bước thoát khỏi cảnh túng quẫn" |
| Xung đột | "tập đoàn và luật lệ đè lên người nhỏ", thợ máy "nợ tập đoàn như người chơi" |
| Tài nguyên | "rác vũ trụ là tài nguyên", "nơi tập đoàn bỏ xác tàu khổng lồ" |
| Vùng xa | "Vùng ngoài vòng pháp luật cạnh tinh vân phát sáng, sinh vật lạ, bức xạ, tàu cướp" |
| Luật và ngoài luật | cấm súng nóng, chợ đen, "Cảnh sát Quỹ đạo" "quan liêu, thích phạt hơn là bắt", cướp không gian |
| Giọng | "thế giới bẩn, neon, hài hước khô", AI tập đoàn "lịch sự đến lạnh lùng", robot tái chế "mỗi con có tật riêng" |
| Bí ẩn chưa dùng | Hộp đen vệ tinh, Lõi AI cũ |

Bỏ khỏi hạt giống (thuộc concept đã bỏ, không phải bối cảnh): jetpack, quán bán món cho khách ngoài hành tinh, ₵ và các con số.

### Ba hướng phát triển bối cảnh

| | A. Trạm rìa nợ nần | B. Xác tàu mẹ | C. Tinh vân vô luật |
|---|---|---|---|
| Một câu | Thợ trục vớt mắc nợ tập đoàn sống ở trạm quỹ đạo rìa, ra vành đai rác kiếm sống | Một con tàu thuộc địa khổng lồ bị tập đoàn bỏ trên quỹ đạo, bên trong là cả một thế giới hoang, người chơi đào sâu vào nó | Trạm biên giới cạnh tinh vân ngoài vòng pháp luật, nơi tập đoàn, chợ đen, cướp và loài lạ cùng sống |
| Giữ từ hạt giống | Gần như toàn bộ | Nợ tập đoàn, xác tàu, Lõi AI cũ, robot tái chế, giọng hài hước khô | Vùng vô luật, chợ đen, cướp, sinh vật lạ, cảnh sát quan liêu |
| Thêm mới | Không đáng kể | Bên trong tàu có khu, tầng, phe người sống sót và sinh vật đột biến | Phe phái và danh tiếng giữa luật và ngoài luật |
| Nửa phiêu lưu sẽ là | Bay ngoài không gian mở quanh trạm | Đi sâu từng tầng, từng khu trong tàu (giống hầm ngục có cốt truyện) | Thám hiểm các mảng tinh vân có hệ sinh thái riêng |
| Nửa quản lý gợi ý | Cơ sở làm ăn trên trạm | Khu trú ẩn hay xưởng của nhóm sống sót dựng trong tàu | Trạm giao thương, phục vụ các phe |
| Bí ẩn dẫn truyện | Hộp đen vệ tinh kể lại một vụ tập đoàn che giấu | Lõi AI của tàu: vì sao tàu bị bỏ, ai còn sống ở tầng sâu | Thứ gì ở lõi tinh vân khiến tập đoàn muốn chiếm |
| Hợp nhóm 1 artist vector | Trung bình: không gian mở cần nền parallax lớn, ít tái dùng | Tốt: nội thất tàu chia khu, tái dùng bộ tile và đạo cụ theo từng khu | Thấp: mỗi mảng tinh vân một hệ sinh thái, nhiều sinh vật riêng |
| Hợp "nhập vai phiêu lưu" | Trung bình: tiến trình chủ yếu là đi xa hơn | Cao: khu bị khóa, NPC, phe, nhiệm vụ tự nhiên | Cao: phe phái, lựa chọn đạo đức |
| Rủi ro | Giống concept đã bỏ, dễ quay lại lối cũ | Ít cảnh không gian mở, mất cảm giác vũ trụ rộng | Phạm vi nội dung lớn nhất, khó vừa nhóm |

GDM đề xuất: B, giữ giọng và xung đột nợ tập đoàn của A. Lý do: phần phiêu lưu nhập vai có khung tự nhiên (tầng, khu, phe, bí ẩn Lõi AI), và nội thất tàu tái dùng art tốt nhất cho 1 artist vector. Có thể giữ một cửa ra không gian mở làm vùng phụ để không mất cảm giác vũ trụ.

Đã chốt: chưa chọn A, B, C. Lead cho gd-story viết GAME STORY từ hạt giống và từ khóa core loop bên dưới, đọc bản story rồi chốt.
Lead đọc bản 1 (hướng B): "Viết hướng khác để khai thác được vũ trụ rộng lớn. Tên để tiếng Anh". Hướng B bỏ làm khung chính, bản 2 lấy không gian mở, tên riêng tiếng Anh.
Lead 2026-11-20 đưa cốt truyện mới, nguyên văn ở `story/lead-y-tuong-2026-11-20.md`, kèm "có thể chơi đơn hoặc chơi co op". Ý tưởng này thay bản 2 làm gốc, gd-story viết bản 3 (`story/game-story-v3.md`).

### Mô tả core loop sơ khai của Lead (2026-11-19, nguyên văn)

"Trước hết core game chính sẽ là nhân vật chính đi thu thật tài nguyên giống như Dave lặn xuống biển và bắt cá. Thì ở đây User cũng bị hạn chế gì đó như đi xa hơn, đi lâu hơn và tôi đề xuất là dùng Oxy để nói lên cái giới hạn đó. Tiếp theo là khám phá vì đây sẽ là một phần của game, là khám phá map, khám phá cốt truyện phía sau. Quay lại việc khi khai thác thì cũng cần có hành động để tiêu đi lượng tài nguyên đó và tôi chưa nghĩ ra và chốt là gì, có thể là chế tạo rồi bán đồ như trong Dave the Diver vậy. Tiếp theo là dùng Currency từ việc trao đổi đó để nâng cấp cho chính User đây là Loop tốt để tiêu đi tài nguyên và tăng tiến trình. Nó sẽ giúp User đi xa hơn, đi lâu hơn, thu thập được nhiều loại tài nguyên mới hơn,.... Đây là những Key word giúp viết Game Story"

| Từ khóa | Trạng thái |
|---|---|
| Thu thập tài nguyên là core chính | Lead nói |
| Oxy là giới hạn đi xa, đi lâu | Lead đề xuất |
| Khám phá map và cốt truyện phía sau | Lead nói |
| Tiêu tài nguyên: chế tạo rồi bán | Lead chưa chốt |
| Currency từ trao đổi, nâng cấp chính nhân vật | Lead nói |
| Nâng cấp mở: đi xa hơn, đi lâu hơn, tài nguyên mới | Lead nói |

Đây là đầu vào cho bước 4, chưa phải core loop đã chốt.

## Bước 2 đến 7

Lead giao toàn quyền cho GDM 2026-11-20. Nội dung ở `gdd/00-khung-game.md`, các điểm GDM tự quyết ở `log-gdm-tu-quyet.md`.
