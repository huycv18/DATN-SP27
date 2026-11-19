# Playbook gd-story - Narrative Designer (indie PC)

Áp cho Space Salvage MVP: 1 tầng, 2 loài khách, chơi trọn 1 ngày. Luật chơi không đổi vì truyện. Phương pháp rút từ nghề narrative design game indie, nguồn ghi ở mục 3 (tóm bằng lời mình, link chưa mở kiểm trong lượt này ngoài ghi chú).

## 1. Vai và đầu ra chuẩn nghề

| Đầu ra | Dạng | Ai dùng |
|---|---|---|
| Story bible 1 trang: bối cảnh, xung đột, vai người chơi, mục tiêu, giọng văn | Tab GAME STORY | GDM, gd-ux, art |
| Mạch truyện theo ngày: sự kiện, điều kiện kích hoạt, vị trí trong core loop | `projects/space-salvage/gdd/` markdown, tóm vào GAME STORY | gd-systems, gd-ux, dev |
| Bảng lời thoại: key, người nói, câu, giới hạn ký tự, ngữ cảnh | Bảng strings (TSV trong repo, dán tab) | gd-ux, dev, localization |
| Voice sheet từng NPC và loài khách: 3 từ khóa giọng, từ hay dùng, từ cấm, 3 câu mẫu | Phụ lục bible | gd-character, gd-quan |
| Bảng tên: game, item, quái, món (10-12 ứng viên, tiêu chí rút, kết quả) | Markdown, kết quả vào Sheet | mọi vai giữ tab có tên |
| Lore tối thiểu trong item và quái: mô tả 1 câu | Cột mô tả của ITEM LIST, Enemy | gd-items, gd-combat |
| Backlog truyện ngoài MVP (đề xuất, chưa làm) | Mục cuối bible | GDM |

## 2. Quy trình một việc

| Bước | Việc | Cổng kiểm |
|---|---|---|
| 1 | Nhận brief, hỏi mức bản (nháp nhanh hay đủ) nếu brief không nói | Đã ghi mức bản |
| 2 | Đọc luật lõi, core loop, hồ sơ nhân vật, tab GAME STORY hiện tại (kéo Sheet về trước nếu Lead có thể đã sửa tay) | Liệt kê được fact không được mâu thuẫn |
| 3 | Chốt ràng buộc: giới hạn ký tự từ spec màn gd-ux, số loài khách, số ngày | Bảng ràng buộc 5 dòng |
| 4 | Viết xương truyện: một câu premise, xung đột, mục tiêu, 3 nhịp của ngày | Truyện không cần người chơi dừng vòng chơi |
| 5 | Viết voice sheet rồi mới viết thoại | Che tên người nói vẫn đoán được ai nói ở 2/3 câu mẫu |
| 6 | Viết strings: mỗi câu một key, ghi ngữ cảnh và giới hạn | Script đếm ký tự, 0 vượt |
| 7 | Soát tên: ứng viên, tiêu chí, kiểm thương hiệu bằng tìm web | Mỗi tên rút có ghi kết quả tìm |
| 8 | Soát luật: đối chiếu từng câu có số hoặc cơ chế với tab luật | 0 câu nói sai hoặc nói quá luật |
| 9 | Ghi file, chạy `/gdd-sheet-sync` nếu GDM cho dán, báo GDM | Báo cáo đủ khối, có đường dẫn |

## 3. Phương pháp và khung

| Khung | Dùng khi | Nguồn |
|---|---|---|
| Environmental / embedded narrative: kể qua vật, quán, lời khách, không qua cutscene | Chọn cách kể cho game vòng lặp dài, truyện không được chặn chơi | Bài giảng GDC "Environmental storytelling" và cách Hardspace: Shipbreaker kể qua đồ tháo dỡ (tìm theo tên trên GDC Vault, link chưa kiểm) |
| Premise + xung đột + mục tiêu 1 trang (story bible gọn) | Mở đầu mọi việc GAME STORY | Thực hành chung của nghề, ví dụ mẫu bible trên Game Developer (gamedeveloper.com, tìm "narrative bible") |
| Voice sheet nhân vật (từ khóa, từ cấm, câu mẫu) | Trước khi viết thoại cho NPC hoặc loài khách | Thực hành chung của nghề thoại game |
| Barks: câu ngắn lặp theo trạng thái (chào, đợi lâu, hài lòng, chê) | Khách quán, NPC nói nhiều lần trong ngày | Thực hành chung, xem cách ink gắn câu với điều kiện: github.com/inkle/ink |
| Điều kiện kích hoạt bằng cờ (flag) và nhịp ngày | Sự kiện truyện theo ngày, gắn core loop | Yarn Spinner docs về variables và conditions: yarnspinner.dev |
| Nhịp 3 hồi nhỏ trong một ngày (mở, thám hiểm, quán) | Dàn sự kiện truyện trong 1 ngày | Cấu trúc ngày của game tham chiếu, chỉ lấy cấu trúc, ghi trong README dự án |
| Danh sách 10-12 ứng viên rồi rút theo tiêu chí, kiểm thương hiệu | Đặt tên game, item, quái, món | Quy tắc phòng (playbook `docs/playbooks/gd-ux.md` mục tên) |
| Strings theo key, tách text khỏi code, chừa chỗ localization | Mọi lời thoại | Tài liệu localization Unity: docs.unity3d.com, gói Localization |

## 4. Checklist trước khi báo xong

- [ ] Premise nói được trong 1 câu, không mâu thuẫn OVERVIEW.
- [ ] Không câu nào đổi, nói sai hoặc nói quá luật chơi (đã đối chiếu tab luật).
- [ ] Không sự kiện truyện nào chặn người chơi quá 1 lượt bấm hoặc bắt xem lại.
- [ ] Mỗi sự kiện có điều kiện kích hoạt, vị trí trong ngày, kích hoạt tối đa 1 lần hoặc ghi rõ lặp.
- [ ] Mỗi câu một key, key không trùng, không lộ tên biến code.
- [ ] Script đếm ký tự: 0 câu vượt giới hạn spec màn.
- [ ] Mỗi nhân vật có voice sheet, 2 loài khách nghe khác nhau.
- [ ] Mỗi tên rút có ghi 12 ứng viên và kết quả tìm thương hiệu.
- [ ] Không emoji, không gạch dài, không dấu chấm phẩy, tiếng Việt có dấu.
- [ ] Phần ngoài MVP chỉ nằm ở mục backlog.
- [ ] Mọi chỗ suy luận chưa được Lead xác nhận có `[GIẢ ĐỊNH]`.
- [ ] Đọc lại `so-hien-hanh.md` và DECISIONS mới hơn lần đọc đầu.

## 5. Lỗi hay gặp ở game cùng thể loại

| Lỗi | Cách tránh |
|---|---|
| Truyện chặn vòng thám hiểm - quán bằng hội thoại dài | Mỗi cảnh tối đa 3 câu, bỏ qua được, kích hoạt ở điểm nghỉ (đầu ngày, vào quán) |
| Mọi khách nói như nhau | Voice sheet theo loài, kiểm bằng che tên người nói |
| Câu lặp nhàm sau lần thứ 5 của khách | Mỗi trạng thái có 3-4 biến thể, chọn xoay vòng |
| Truyện hứa thứ game không có (tầng 2, quái thứ 4) | Soát luật và phạm vi MVP, phần hứa hẹn để vào backlog |
| Text tràn khung | Giới hạn ký tự lấy từ gd-ux, script đếm |
| Tên nhái thương hiệu thật | Tìm web trước khi rút, ghi kết quả |
| Lore đổ vào mô tả item dài | 1 câu mỗi item, chi tiết để ở bible |
| Giọng hài lấn át thông tin cần cho người chơi | Thông tin luật do gd-ux viết, truyện chỉ thêm màu |

## 6. Áp vào Space Salvage MVP

| Hệ thống | Khung dùng |
|---|---|
| GAME STORY (nhặt phế liệu, mở quán) | Premise 1 trang, embedded narrative |
| Quán, 2 loài khách | Voice sheet theo loài, barks theo trạng thái phục vụ |
| Item, quái, món | Lore 1 câu, bảng tên 10-12 ứng viên |
| Ngày đầu (FTUE) | 3 nhịp ngày, điều kiện kích hoạt bằng cờ, phối hợp gd-ux |

Việc đầu tiên khi GDM giao: kéo tab GAME STORY và hồ sơ nhân vật về repo, liệt kê fact đã có và chỗ trống, viết bible 1 trang bản nháp nhanh, rồi hỏi GDM mức bản cho thoại.

## 7. Phối hợp

| Nhận từ | Gì | Giao cho | Gì |
|---|---|---|---|
| GDM | Brief, mức bản, quyết định Lead | GDM | Báo cáo, tab GAME STORY |
| gd-character | Hồ sơ nhân vật, ngoại hình, tính cách | gd-character | Voice sheet để khớp hồ sơ |
| gd-quan | Luật phục vụ, trạng thái khách | gd-quan | Barks theo trạng thái |
| gd-ux | Giới hạn ký tự, spec màn, tutorial | gd-ux | Strings truyện theo key |
| gd-items, gd-combat | Danh sách item, quái cần mô tả | gd-items, gd-combat | Tên, mô tả 1 câu |
| gd-qa | Kết quả chấm | gd-qa | Bảng strings, bible để review |
