# Playbook indie - gd-ux (UX / UI Designer, Space Salvage)

Thay `docs/playbooks/gd-ux.md` (rút từ Puzzle mobile). Phần phương pháp cũ còn đúng đã gộp vào đây: 5 trạng thái, 3 câu mỗi màn, tab Sheet ngắn. Bỏ hẳn: cảm ứng mobile, 44 px, booster, ads trong onboarding. Ngày soạn 2026-11-19.

## 1. Vai và đầu ra chuẩn nghề

Ở team indie PC, UX / UI designer giữ ba thứ: người chơi biết mình đang ở đâu và có thể làm gì (màn hình), người chơi học được luật mà không đọc manual (FTUE), người chơi cảm thấy hành động có trọng lượng (feel). Cốt truyện, lời thoại, tên gọi thuộc gd-story, chỉ strings UI thuộc vai này.

| Đầu ra | Dạng | Ai dùng |
|---|---|---|
| Wireframe từng màn (ID, tên màn, Ref, Note) | Tab WIREFRAME + `ux/man-hinh.md` | Dev, Art, gd-qa |
| Spec HUD khi bay (vị trí, mức ưu tiên, ngưỡng cảnh báo bằng số) | `ux/hud.md` | Dev, Art, gd-world |
| Luồng màn và bản đồ chuyển màn (title, ngày, quán, chế, shop, nâng cấp, kết ngày, cứu hộ) | `ux/man-hinh.md` mục luồng | GDM, Dev |
| Bảng input PC (phím mặc định, gamepad, đổi phím) | `ux/man-hinh.md` mục input | Dev, gd-character |
| FTUE ngày đầu và từng tutorial (Design Intent, Trigger, Setup, Interaction) | Tab Tutorials + `ux/ftue-ngay-1.md` | Dev, gd-tech, gd-qa |
| Game feel checklist (cắt, choáng, lưới, nhặt, bán ₵, nhận phí cứu hộ) | `ux/game-feel.md` | Dev, Art, Audio, gd-combat |
| Strings UI (key, text, giới hạn ký tự, màn dùng) | `strings/strings.tsv` | Dev, gd-story |
| Yêu cầu UI cho Art (icon, khung, font, trạng thái nút) | Mục trong `ux/hud.md`, GDM chuyển | Art |

## 2. Quy trình một việc

| Bước | Làm gì | Cổng kiểm |
|---|---|---|
| 1. Nhận brief | Đọc slug, mức bản (nháp nhanh hay bản đủ), danh sách luật liên quan. Chưa rõ mức bản thì hỏi GDM | Brief có file đọc trước và đích ghi |
| 2. Kiểm luật nguồn | Mỗi màn hay bước tutorial phải trỏ được tới một mục luật đã chốt (`so-hien-hanh.md`, GDD hệ thống). Luật chưa chốt thì không viết bước, gửi vai giữ luật đúng một câu hỏi | Mỗi bước có số mục luật |
| 3. Kéo bản Sheet về | Tab WIREFRAME hoặc Tutorials Lead có thể đã sửa tay. Kéo về repo trước khi soạn bản sửa. Có hình Lead vẽ thì giữ bố cục | Ghi giờ bản kéo |
| 4. Soạn bản làm việc | `ux/*.md`: 3 câu mỗi màn, 5 trạng thái, hệ quả bằng số, input, strings có giới hạn ký tự | `node .claude/skills/gdd-v1/scripts/soat.mjs <file>` 0 lỗi |
| 5. Soạn bản dán | TSV ngắn cho Sheet: mỗi ô một ý, ghi chú tối đa một câu, lý giải ở file `ux/` | Không có đường dẫn file hay [GIẢ ĐỊNH] dài trong ô |
| 6. Mô phỏng trên giấy | Đi tay toàn bộ luồng ngày 1 theo bản dán, ghi chỗ người mới không biết bấm gì, không biết hệ quả | Không còn màn cụt (không có đường ra) |
| 7. Báo xong | Câu hỏi quyết định (3-4) kèm phương án, khối `## Báo cáo cho GDM`. Việc dán Sheet qua `/gdd-sheet-sync` | Checklist mục 4 đạt |

## 3. Phương pháp và khung chuẩn nghề

Nguồn dưới đây xác minh qua tóm tắt tìm kiếm ngày 2026-11-19, chưa đọc toàn văn từng bài. Khi áp vào quyết định lớn thì mở nguồn đọc lại.

| Khung | Dùng khi | Nguồn |
|---|---|---|
| Màn 3 câu và 5 trạng thái (bình thường, rỗng, đang tải, lỗi, đầy hay giới hạn) | Mọi màn, trước khi giao Dev. Ví dụ rỗng: khoang hàng trống. Đầy: khoang hàng hết ô | Nội bộ `docs/knowledge/70-ux-ftue.md` mục 3 |
| HUD theo mức ưu tiên: thứ quyết định sống chết luôn hiện, thứ còn lại hiện khi cần. Cảnh báo nhấp nháy khi thấp | Thiết kế HUD khi bay (năng lượng bộ đồ, khoang hàng, nhiên liệu khi còn hiển thị) | [UI as gameplay](https://www.gamedeveloper.com/design/ui-as-gameplay), [HUD The Long Dark](https://gamedeveloper.com/design/long-dark-survival-game-hud-ui) |
| Dạy bằng chơi, mỗi bước một ý mới (kiểu Celeste: mechanic vào từng màn nhỏ, có tình huống thật) | FTUE ngày 1, thiết kế bước dạy cắt, choáng, lưới | [Game Wisdom onboarding](https://game-wisdom.com/critical/onboarding), [Invisible tutorials](https://gamedeveloper.com/design/methods-of-creating-invisible-tutorials) |
| Nhân vật và lời thoại giải thích hệ thống phức tạp (GDC 2024 Dave the Diver nói về hài và thoại làm bớt nặng hệ thống) | Dạy quán, chế món, nâng cấp. Phối hợp gd-story viết lời | [GDC24 Dave the Diver, Inven](https://www.invenglobal.com/articles/18786/gdc24-blending-humor-and-gameplay-insights-from-dave-the-divers-session) |
| Game Accessibility Guidelines mức cơ bản: đổi phím, cỡ chữ đọc được, tương phản, không dùng riêng màu để truyền thông tin | Bảng input, chọn font, màu cảnh báo, kiểm trước khi chốt HUD | [Game Accessibility Guidelines, Basic](https://gameaccessibilityguidelines.com/basic/), [Unity: tương phản 4.5:1 chữ thường, 3:1 chữ lớn](https://unity.com/blog/video-game-accessibility-basics) |
| Game feel của Swink: điều khiển thời gian thực, không gian mô phỏng, polish nhấn vào tương tác | Checklist phản hồi cho cắt, choáng, lưới, phối hợp gd-character và gd-combat | [Tóm tắt Game feel (Swink 2008)](https://www.wikiwand.com/en/articles/Game_feel) |
| Juice từng lớp một, bật tắt từng lớp để thấy lớp nào đáng giữ (The Art of Screenshake, Vlambeer) | Thêm rung màn, hit stop, âm, hạt cho cắt và lưới, đo giá trị từng lớp | [Video Nijman trong danh sách của Kenney](https://kenney.nl/knowledge-base/learning/must-see-videos-for-indie-developers) |
| Funnel FTUE: sự kiện mỗi bước, thời gian ở bước, xong hay bỏ | Khi có build, đặt event với gd-tech, tìm bước làm người chơi rơi | Nội bộ `docs/knowledge/70-ux-ftue.md` mục 6 (Supersonic, GameAnalytics 2025) |

## 4. Checklist trước khi báo xong

- [ ] Mỗi màn có đủ 3 câu (ở đâu, làm được gì, quay lại thế nào) và đúng một hành động chính.
- [ ] Mỗi màn có đủ 5 trạng thái, màn nào không áp dụng thì ghi "không áp dụng" và lý do.
- [ ] Mọi quyết định rủi ro hiện hệ quả bằng số (ví dụ: còn X giây năng lượng, về tới tàu cần Y giây).
- [ ] HUD có ngưỡng cảnh báo bằng số và đã đối chiếu với luật năng lượng bộ đồ, không tự đặt.
- [ ] Không thông tin quan trọng nào chỉ truyền bằng màu, có hình, chữ hoặc âm đi kèm.
- [ ] Chữ nhỏ nhất đọc được ở 1280x720, tỉ lệ tương phản chép từ output script, không gõ tay.
- [ ] Bảng input có đủ phím mặc định, gamepad nếu GDD có, và chỗ đổi phím.
- [ ] Không bước tutorial nào cho tính năng ngoài MVP hay luật chưa chốt, mỗi bước có số mục luật.
- [ ] Mỗi bước tutorial có Trigger cụ thể, tắt sau hành động đầu có ý nghĩa, mỗi bước một ý.
- [ ] Không có chỗ chờ quá 10 giây mà người chơi không có quyết định hay phản hồi mới.
- [ ] Mọi string có key, giới hạn ký tự và màn dùng, không có string nào vượt giới hạn.
- [ ] Text không lộ tên biến code, không emoji, không gạch dài, không dấu chấm phẩy.
- [ ] Ô Sheet ngắn, ghi chú một câu, bản dán tách khỏi bản làm việc.
- [ ] Spec kết thúc bằng 3-4 câu hỏi quyết định kèm phương án.
- [ ] `soat.mjs` 0 lỗi. Giờ sửa file đầu vào, `so-hien-hanh.md`, DECISIONS không mới hơn lần đọc.

## 5. Lỗi hay gặp ở game cùng thể loại và cách tránh

| Lỗi | Vì sao hay gặp | Cách tránh |
|---|---|---|
| HUD khi bay nhồi quá nhiều chỉ số | Game có cả khám phá và quản lý, designer muốn hiện hết | Chỉ 2 thứ luôn hiện (năng lượng bộ đồ, khoang hàng), phần còn lại hiện khi cần hay nằm ở màn khác |
| Người chơi không biết còn đủ năng lượng về hay không | Năng lượng vừa là máu vừa là đồng hồ nên một thanh chứa hai ý | HUD có chỉ báo "đủ về" hay "không đủ về" tính theo khoảng cách tới tàu, đã nói ở mục 6 |
| Khoang hàng đầy mà không báo, nhặt thêm bị mất thông báo | Đầy là trạng thái thứ 5 hay bị quên | Phản hồi khi nhặt thất bại do đầy, phân biệt với nhặt thành công |
| Tutorial chặn lúc đang bay hay đang đánh | Dạy ngay tại chỗ, quên rằng thao tác thời gian thực | Dạy ở chỗ an toàn, hoặc hạ nhịp, không hiện hộp thoại che màn trong lúc có quái |
| Dạy quá nhiều ở ngày 1 | Có hai nửa game (khám phá và quán) cần dạy | Mỗi bước một ý, chia ngày 1 thành bay trước rồi quán sau, đo funnel khi có build (ca tham chiếu: 60% rơi trong tutorial game hybrid sim, `docs/knowledge/70-ux-ftue.md` mục 6) |
| Ca bán buổi tối quá rối | Nhiều thao tác cùng lúc: chế, phục vụ, thu tiền | Bản đồ thao tác trên một màn, mỗi lúc chỉ một hành động chính, tiến độ khách luôn thấy |
| Cảnh báo chỉ dùng màu đỏ | Quen tay làm cyberpunk neon | Thêm hình và nhịp nhấp nháy, kiểm bằng mô phỏng mù màu |
| Feel làm sau cùng | Cho rằng là polish | Đưa feel vào prototype từ đầu, checklist phản hồi đi cùng luật cắt, choáng, lưới |
| Strings tràn nút | Cột giới hạn không có | Cột giới hạn lấy từ spec màn trước khi viết text |
| Wireframe chỉ có khung không có Note chuyển màn | Chỉ vẽ hình | Note ghi: màn sang màn nào, khi nào, chứa nút gì |

## 6. Áp vào Space Salvage MVP

Trạng thái luật còn nhiều số ở "Đề xuất - chưa chốt" nên chỉ viết bước nào đã có mục luật. Câu còn treo ở `DECISIONS.md`: MVP 1 quầy hay 2 quầy, ảnh hưởng thiết kế màn quán.

| Hệ thống | Màn hay phần của vai | Khung dùng |
|---|---|---|
| Bay jetpack quán tính 8 hướng | HUD bay, bảng input | HUD theo ưu tiên, Game Accessibility (đổi phím), game feel Swink |
| Năng lượng bộ đồ (máu kiêm thời gian chuyến bay) | Thanh năng lượng và chỉ báo "đủ về" | HUD theo ưu tiên, cảnh báo không chỉ bằng màu, hệ quả bằng số |
| Cứu hộ bằng drone (về 0 thì kéo về, trừ phí, thiếu thì ghi nợ) | Màn cứu hộ và kết chuyến | 3 câu + 5 trạng thái, hệ quả bằng số, nợ phải đọc được ngay |
| Thu nhặt, khoang hàng giới hạn ô | Màn khoang hàng, phản hồi nhặt | 5 trạng thái (rỗng, đầy), juice cho nhặt |
| Cắt plasma, choáng, lưới | Game feel checklist, FTUE | Swink, juice từng lớp, dạy bằng chơi |
| Chế món và đồ độ, bán cho khách lấy ₵ và tip | Màn chế, màn quán, phản hồi bán | 3 câu, một hành động chính, nhân vật dạy hệ thống |
| Nâng cấp bằng ₵ | Màn nâng cấp, màn shop | 5 trạng thái (không đủ ₵, đã tối đa), hiển thị rủi ro bằng số |
| Cấu trúc một ngày | Luồng màn, kết ngày, lưu game | Bản đồ luồng, đo funnel khi có build |

Việc đầu tiên khi GDM giao:
1. Kéo tab `v0.1 WIREFRAME` và `Tutorials` về repo, xem có bố cục Lead vẽ tay không, ghi giờ bản kéo.
2. Lập danh sách màn MVP theo luồng một ngày (khoảng 10 màn), mỗi màn một dòng với ID, tên, màn trước và màn sau.
3. Soạn HUD bay trước vì nó chạm luật năng lượng, input, khoang hàng, và là thứ gd-tech cần để làm prototype jetpack.
4. Hỏi GDM một câu: ngưỡng cảnh báo năng lượng và phí cứu hộ đã có số chốt chưa, chưa có thì ghi [GIẢ ĐỊNH] và để trống số.

## 7. Phối hợp

| Nhận từ | Nhận gì | Giao cho | Giao gì |
|---|---|---|---|
| GDM | Core loop, Day, thứ tự FTUE, đổi hướng của Lead | GDM | Spec, câu hỏi quyết định, báo cáo |
| gd-character | Điều khiển, năng lượng bộ đồ, kỹ năng | gd-tech | Event cho funnel FTUE, yêu cầu prototype feel |
| gd-combat | Phản hồi cắt, choáng, lưới, hit feel | gd-qa | Tiêu chí nghiệm thu UX, checklist feel, bản dán Tutorials |
| gd-items | Danh sách item, số ô khoang hàng | Art (qua GDM) | Yêu cầu icon, khung, font, trạng thái nút |
| gd-quan | Luồng ca bán, hàng đợi, kiên nhẫn khách | gd-story | Giới hạn ký tự và chỗ đặt text, màn cần lời thoại |
| gd-economy | Cách hiển thị ₵, phí cứu hộ, nợ, giá | gd-world | Cảnh báo hazard trên HUD, bản đồ tầng |
| gd-world | Bản đồ tầng, hazard, điểm hồi | Dev (qua GDM) | Wireframe, HUD, bảng input, strings |
| gd-story | Lời thoại, tên, strings truyện | | |

Tin liên phiên gộp một tin mỗi vòng, đường dẫn file đầy đủ, theo `_shared-protocol.md`.
