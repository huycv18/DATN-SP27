# Đợt 1b và đợt 2 game-moi: khớp GDD đợt 1, rồi kinh tế, UX, kỹ thuật (2026-11-20)

Lead: "Tôi giao cho bạn toàn quyền quyết định và điều phối các phiên dưới quyền hoạt động và hoàn thiện GDD, về các hệ thông mà chúng ta bàn trên. Đi sâu và chi tiết."
Nguồn việc: BACKLOG GD-022 tới GD-030. Luật chung của đợt 1 (`briefs/dot1-gdd-he-thong.md` mục "Luật chung của đợt") áp nguyên cho cả hai phần dưới.

## Tình trạng

Đợt 1 đã nộp đủ 7 file ở `projects/game-moi/gdd/he-thong/`: `cot-truyen.md`, `nguoi-choi.md`, `ho-so-nhan-vat.md`, `combat-driftlife.md`, `vat-pham.md`, `map.md`, `tram-va-cang.md`.
GDM đã xử phản biện của các vai và sửa khung lần 2: `gdd/00-khung-game.md` (K2, K4, K6, K7, K12, K21, C8, C9 mới, bảng chương 1 và 2, mục 9, mục 12). Lý do từng điểm: `log-gdm-tu-quyet.md` dòng 39 đến 53.

## Ai làm gì

| Mã | Việc | Agent | Phiên (id) | Ghi vào |
|---|---|---|---|---|
| GD-022 1b | Khớp cốt truyện | gd-story | local_2ad8f6f1-9b7a-4558-8b62-30e701f1f48e | `gdd/he-thong/cot-truyen.md` |
| GD-023 1b | Khớp người chơi, hồ sơ | gd-character | subagent của GDM | `gdd/he-thong/nguoi-choi.md`, `ho-so-nhan-vat.md` |
| GD-024 1b | Khớp combat | gd-combat | local_7d432ac0-aea1-4651-be5f-a7d291dc0ed3 | `gdd/he-thong/combat-driftlife.md` |
| GD-025 1b | Khớp vật phẩm | gd-items | local_380608f3-d7fa-4b2e-bcb6-306d508bb730 | `gdd/he-thong/vat-pham.md` |
| GD-026 1b | Khớp map | gd-world | local_5959cdd6-bb7a-426b-9145-a658b0d94215 | `gdd/he-thong/map.md` |
| GD-027 1b | Khớp trạm và cảng | gd-quan | local_fc9e795d-6911-4dfc-bcb2-3a4f84182be6 | `gdd/he-thong/tram-va-cang.md` |
| GD-028 | Kinh tế và tiến trình | gd-economy | local_6fcec7c7-53e2-468a-a2c4-0dd1545dd37c | `gdd/he-thong/kinh-te-tien-trinh.md`, `sim/economy/` |
| GD-029 | UX / UI | gd-ux | local_c9e6ba43-63d8-49de-941f-60e536577360 | `gdd/he-thong/ux-ui.md` |
| GD-030 | Sim, validator, schema, đồng bộ co-op | gd-tech | local_36ad9fd6-f1b8-4fef-976f-4c8c40a3b3dd | `gdd/he-thong/ky-thuat.md`, `tools/` |

gd-qa (GD-031) nhận việc sau khi 1b xong.

## Phần A - Đợt 1b: khớp GDD đợt 1 (6 vai đợt 1)

Việc chung của mỗi vai, một lượt:
1. Đọc lại `gdd/00-khung-game.md` (đã sửa lần 2) và `log-gdm-tu-quyet.md` dòng 36 đến 53. Sửa GDD của mình cho khớp. Mục "Phản biện khung" của bạn: điểm nào GDM đã xử thì ghi "GDM đã xử, log dòng N".
2. Gỡ hết dấu `[CHỜ <vai>]` trong file của mình bằng cách đọc file của vai kia (đã có đủ). Sau lượt này chỉ còn được chờ gd-economy, gd-ux, gd-tech.
3. Thấy file vai khác lệch với file mình (tên, ID, số, mốc chương): nhắn thẳng vai đó một tin gộp, hai bên chốt, không qua GDM. Không tự chốt được thì báo GDM hai phương án.
4. Trả lời nhanh câu hỏi của gd-economy, gd-ux, gd-tech khi họ nhắn.
5. Báo GDM, dòng đầu `GD-0xx 1B XONG|KẸT`, tối đa 10 dòng: đã đổi gì, còn lệch gì.

Việc riêng:

| Vai | Phải áp |
|---|---|
| gd-story | Quest của Kỹ sư ở chương 1 mở thêm Súng lưới cho loài nhỏ (log 49). Kiểm bảng chương khớp khung mục 7 mới |
| gd-character | K2 ngoại lệ vật manh mối và vật nhiệm vụ (log 46). C9: người về sớm không ra lại, làm việc trạm (log 39). Cấp môi trường lấy theo `map.md`. Tên và tính cách theo `cot-truyen.md`. File đang có 31 dấu CHỜ |
| gd-combat | Súng lưới cỡ S mở ở chương 1, nhãn MVP. Chương 2 giữ gây mê, kéo loài lớn, sinh thiết (log 49). Đưa gd-items thời gian bắt sống trung bình mỗi loài để kiểm hệ số giá sống so với hạ |
| gd-items | Nhãn MVP cho Súng lưới và 1 loại hàng Driftlife sống ở chương 1. File đang có 28 dấu CHỜ. Phối hợp gd-world về điểm nhặt tay (rải thưa hay giảm lượng) |
| gd-world | Mục tiêu mới: mỗi người trong nhóm 4 nhặt được từ 60% trở lên so với chơi một mình, tính lại k(N) (log 50). Beacon map nhánh cố định, vật cản dải chưa mở (log 51). Giá sửa khoang không theo số người |
| gd-quan | Đơn cảng chương 1 có 1 loại hàng Driftlife sống (log 49). C8: quy mô đơn tăng theo số người, không mở bến theo số người (log 52). C9: người chờ ở trạm được đóng kiện trước cho ca cảng, viết luật đóng kiện trước |

## Phần B - Đợt 2

Đọc trước chung: `gdd/00-khung-game.md`, `log-gdm-tu-quyet.md`, cả 7 file đợt 1 (đọc mục Hiện hành, Luật, Tham số, đọc chọn lọc phần còn lại), `docs/knowledge/indie/06-dave-the-diver-cau-truc.md`, playbook và knowledge của vai, khuôn `docs/process/templates/gdd-he-thong.md`.
Bỏ toàn bộ ngữ cảnh Space Salvage còn trong phiên. Các vai đợt 1 đang chạy 1b song song: ngay trước khi báo xong, xem lại giờ sửa các file đầu vào và làm lại phần bị ảnh hưởng.

### GD-028 gd-economy - Kinh tế và tiến trình

Mục tiêu: một bảng giá duy nhất, nhịp tiến trình 5 chương, và bằng chứng bằng sim rằng các mục tiêu khung mục 9 đạt được.
1. Tally: bảng source và sink đủ (K18, K19). Quy đổi đơn vị giá trị của gd-items (GTĐ) ra Tally.
2. Shop là bảng giá duy nhất (K20): giá kiện hàng tàu trả, giá mua ở shop, giá nâng cấp 5 trục bộ đồ theo bậc, chi phí sửa và nâng cấp khoang (vật liệu, Tally), linh kiện động cơ chính. Giá theo công thức, không gõ tay.
3. Hạng cảng: ngưỡng lên hạng, phối hợp gd-quan.
4. PROCESSING: nhịp mở khóa theo ngày và theo chương, người chơi học gì, mở gì, sức mạnh tăng thế nào. Thời lượng chương 1 và cả game theo khung mục 9.
5. Sim kinh tế (dùng `docs/process/templates/economy-sim/`, RNG có seed): 3 kịch bản tệ, trung bình, tốt, với 1, 2, 4 người. In Tally theo ngày, số ngày tới từng mốc chương, tỉ lệ Tally từ ca cảng, thời gian nhóm 4 so với một mình. Đầu vào lượng nhặt một chuyến lấy từ sim chuyến của gd-tech (nhắn nhau), chưa có thì dùng số ước của `map.md` và ghi rõ.
6. Trả lời bằng số các điểm treo: log 40 (giữ 1 món có quá đau ở chương 1), log 50 (k(N) và hai mục tiêu co-op), log 53 (món nhỏ giá trị cao, chi phí bắt sống so với hệ số giá, chương 1 cần khoảng 11 chuyến đầy túi, nhặt tay so với khoan). Mỗi điểm: số đo, kết luận, đề xuất đổi tham số nào của vai nào.
7. Balance Sheet: lịch sử đổi số từ khởi điểm của các vai sang số sau sim.
Tiêu chí: chạy một lệnh in lại được mọi bảng số trong GDD. Điều kiện dừng: tối đa 3 vòng chỉnh, chấp nhận lệch 15% so với mục tiêu khung mục 9, lệch hơn thì ghi rõ và đề xuất đổi mục tiêu. Số sau sim ghi đề xuất vào cuối GDD dạng bảng "Số hiện hành đề xuất" để GDM chép sang `so-hien-hanh.md`. Không tự sửa file vai khác: gửi vai đó danh sách tham số cần đổi.

### GD-029 gd-ux - UX / UI

Mục tiêu: người chơi và dev biết mỗi màn có gì, bấm gì, học game theo thứ tự nào.
1. Bản đồ màn và luồng: menu chính, tạo thế giới (chọn số người tỉnh dậy), sảnh co-op và vào giữa chừng, trạm (mặt cắt), cửa khí và chọn dụng cụ, ngoài không gian, kết chuyến, bảng tàu, ca cảng, kết ca, cuối ngày, xưởng, nghiên cứu, khoang nuôi, shop, nâng cấp, bản đồ, nhật ký manh mối, tạm dừng và cài đặt.
2. HUD ngoài không gian: Oxy (ngưỡng cảnh báo theo `nguoi-choi.md`), túi đồ, dụng cụ, hướng về trạm và Recall Beacon, đồng đội và trạng thái ngạt, ping. HUD ca cảng: giờ ca, tàu và giờ rời bến, danh sách hàng, thứ đang cầm, sự cố.
3. Mỗi màn: 3 câu mô tả, một hành động chính, 5 trạng thái (trống, đang tải, bình thường, lỗi, đầy hoặc khóa), wireframe dạng khối chữ, 16:9, đọc được ở 1280x720.
4. Input: bàn phím chuột và gamepad, khớp bảng phím của `nguoi-choi.md`, đổi phím.
5. FTUE chương 1 theo thứ tự core loop: tỉnh dậy, đi trong trạm, ra cửa khí, bay, Oxy, nhặt, khai thác, về trạm, sửa khoang, vớt người, xưởng, lưới bắt, ca cảng đầu tiên, nâng cấp đầu tiên. Mỗi bước một ý: Design Intent, Trigger, Setup, Interaction. Co-op: người vào sau học thế nào.
6. Game feel checklist cho các khoảnh khắc chính (nhặt, bắt sống, Oxy thấp, về tới cửa khí, bốc xong kiện, tàu rời bến, nhận Tally).
7. Strings UI: bảng key, tiếng Việt, giới hạn ký tự. Tên riêng và thoại là của gd-story.
Tiêu chí: mỗi luật K và C mà người chơi cần thấy đều có một tín hiệu trên màn hình, có bảng đối chiếu luật với màn. Không có bước tutorial cho thứ ngoài chương 1 trừ khi ghi nhãn Sau MVP.

### GD-030 gd-tech - Sim, validator, schema, đồng bộ co-op

Mục tiêu: máy chấm cho GDD và cầu nối sang dev. Làm theo thứ tự ưu tiên dưới, xong mục nào ghi kết quả mục đó.
1. Validator chéo GDD (`projects/game-moi/tools/validate-gdd.mjs`): đọc 7 file đợt 1 và các file đợt 2, kiểm ID vật phẩm dùng ở mọi file có trong ITEM LIST của `vat-pham.md`, tên loài và kẻ địch có trong `combat-driftlife.md`, tên vùng và map nhánh có trong `map.md`, tên riêng khớp `cot-truyen.md`, không còn "Hollower", "Bếp trưởng", không còn dấu `[CHỜ` ngoài ba vai đợt 2, nhãn MVP có ở mỗi mục nội dung. Một lệnh, in bảng lỗi theo file và dòng, thoát 1 khi có lỗi. Gửi bảng lỗi thẳng cho vai có lỗi.
2. Sim chuyến (`tools/sim-chuyen.mjs`, RNG có seed): theo tham số của `nguoi-choi.md`, `map.md`, `vat-pham.md`, `combat-driftlife.md`. In theo dải, bậc bình Oxy và số người 1 đến 4: thời lượng chuyến, lượng nhặt mỗi người và cả nhóm, tỉ lệ ngạt, tỉ lệ dùng Recall Beacon. Trả lời: thời lượng chuyến chương 1 và chương 5 có khớp khung mục 9, k(N) nào cho mỗi người nhóm 4 nhặt được từ 60%. Gửi kết quả cho gd-economy và gd-world.
3. Sim ca cảng (`tools/sim-ca-cang.mjs`): theo đề của `tram-va-cang.md`. In theo chương, Hạng cảng, số người: thời lượng ca, tỉ lệ đơn giao kịp, Tally một ca. Gửi gd-quan và gd-economy.
4. Sim combat theo đề của `combat-driftlife.md`: thời gian hạ và thời gian bắt sống mỗi loài theo số người, Oxy mất trung bình. Gửi gd-combat và gd-items.
5. `gdd/he-thong/ky-thuat.md`: schema dữ liệu (vật phẩm, công thức, Driftlife, mảnh map, map nhánh, tàu, đơn, khoang, nâng cấp) dạng JSON sang ScriptableObject. Yêu cầu đồng bộ co-op cho dev: danh sách trạng thái phải đồng bộ theo từng hệ thống, ai nắm quyền (host), vào giữa chừng, người rời phiên, host rớt mạng, lưu thế giới. So sánh ngắn các lựa chọn netcode Unity để 4 dev quyết, không quyết thay. Event tracking cho playtest.
6. Prototype di chuyển một file HTML (`tools/prototype/bay.html`): bay 8 hướng, lướt, Oxy hao, theo tham số của `nguoi-choi.md`, có thanh chỉnh và xuất JSON. Làm sau cùng.
Tiêu chí: mỗi tool có selftest, cùng seed cho cùng kết quả, chạy bằng một lệnh ghi trong `tools/README.md`. Tool không tự thêm luật: thiếu tham số thì hỏi vai giữ hệ thống, chỗ tự giả định thì in ra.

## Ai đưa gì cho ai (nhắn thẳng, tin gộp)

| Từ | Đưa | Tới |
|---|---|---|
| gd-tech | Bảng lỗi validator | Vai có lỗi |
| gd-tech | Kết quả sim chuyến, sim ca cảng, sim combat | gd-economy và vai giữ hệ thống tương ứng |
| gd-economy | Danh sách tham số cần đổi sau sim | Vai giữ tham số, kèm số đo |
| gd-ux | Câu hỏi về luật thiếu tín hiệu hoặc không hiển thị được | Vai giữ luật |
| Vai đợt 1 | Trả lời, sửa file mình, báo lại người hỏi | Người hỏi |

Bất đồng không tự chốt được: báo GDM hai phương án và đề xuất. App chặn khoảng 10 tin liên phiên liền nhau, gộp tin.

## Báo xong

Tin cho GDM, dòng đầu `GD-### XONG|KẸT: <một câu>`, kèm khối `## Báo cáo cho GDM`, có mục phản biện nếu có.
