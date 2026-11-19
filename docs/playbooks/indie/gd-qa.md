# Playbook indie - gd-qa (Design QA / Playtester)

Bản chuẩn nghề cho Space Salvage (Unity PC, offline, action exploration 2D + quản lý quán). Thay `docs/playbooks/gd-qa.md` (rút từ Puzzle mobile). Phần bot theo lời giải, soi mắt từng bàn, tờ tổng hợp ảnh level, viewport mobile: bỏ.
Nguồn gắn nhãn (V) là blog hoặc bài của nhà cung cấp dịch vụ, chỉ để tham khảo. Nguồn nghề gốc không gắn nhãn.

## 1. Vai và đầu ra chuẩn nghề

QA ở team indie là người giữ định nghĩa "xong" và bằng chứng. Không sửa GDD, tool, code.

| Đầu ra | Dạng | Ai dùng |
|---|---|---|
| Test plan MVP: phạm vi, ngoài phạm vi, môi trường, định nghĩa mức lỗi, cổng ra | `projects/space-salvage/qa/test-plan-mvp.md` | GDM, mọi vai |
| MVP Criteria Checklist: tiêu chí chấp nhận đo được, TRUE / FALSE kèm kết quả thực | Tab MVP Criteria Checklist | GDM, Lead, dev |
| Kết quả QA từng việc: ĐẠT / TRẢ LẠI / BLOCKED kèm bằng chứng | `qa/GD-###.md` theo `ket-qua-qa.md` | GDM, vai bị chấm |
| Bugs Report: một lỗi một dòng, có bước tái hiện | Tab Bugs Report | Dev, vai giữ hệ thống |
| Playtest Report: quan sát từ người chơi (P1 đến P4), quyết định, trạng thái | Tab Playtest Report, ghi thô ở `qa/playtest/` | GDM, Lead |
| Kiểm chéo số giữa tab (output validator hoặc script quét, có giờ chạy) | `qa/quet-<ngày>.md` | GDM, gd-economy |
| Charter và ghi chú phiên exploratory | `qa/playtest/charter-<n>.md` | gd-qa, GDM |
| Bộ smoke và regression (script, từ lần lặp thứ 3 thì thành script) | `qa/smoke/` | gd-qa, gd-tech |

## 2. Quy trình một việc

| Bước | Làm gì | Cổng kiểm |
|---|---|---|
| 1. Nhận brief | Đọc tiêu chí hoàn thành, `so-hien-hanh.md`, DECISIONS hai cấp. Ghi giờ sửa từng file đầu vào | Mỗi tiêu chí đo được hoặc quan sát được. Không đo được thì hỏi GDM, không tự diễn giải |
| 2. Dựng môi trường | Kéo bản Sheet về nếu Lead có thể đã sửa tay. Ghi commit hoặc bản build, máy, độ phân giải | Môi trường thiếu liệt kê ngay đầu báo cáo |
| 3. Smoke (khoảng 10 phút) | Mở được, vào ngày mới, bay ra tầng, về quán, thoát, mở lại | Hỏng ở đây là chặn, dừng, báo ngay |
| 4. Kiểm chéo bằng máy | Validator của gd-tech hoặc script quét: ID duy nhất, công thức dùng item có thật, giá một nguồn, nâng cấp đủ bậc | Output có giờ chạy. Cùng seed ra cùng số |
| 5. Đối chiếu luật | GDD và DECISIONS với Sheet, với sim, với build. Nhãn UI với config | Mỗi luật một dòng khớp hoặc lệch, có nguồn hai phía |
| 6. Chơi | Phiên exploratory theo charter, rồi chơi trọn một ngày theo core loop, rồi chơi như người mới | Có build mới tính là "chơi". Chưa có build ghi "chưa chơi" |
| 7. Ghi lỗi | Bước tái hiện từ trạng thái đã biết, mong đợi, thực tế, mức, đề xuất người sửa | Người lạ làm theo được. Một lỗi một báo cáo |
| 8. Kết luận | Chấm theo thang mục 3 khung 3. Đọc lại giờ sửa file và DECISIONS mới hơn lần đọc | Có đổi thì ghi "lỗi thời, chờ tác giả" |
| 9. Báo | Ghi đủ vào file, một tin gộp có đường dẫn, khối `## Báo cáo cho GDM` | Phần không kiểm được nằm ở "Bỏ qua" |

## 3. Phương pháp và khung chuẩn nghề

| # | Khung | Dùng khi nào | Nguồn |
|---|---|---|---|
| 1 | Smoke, regression, exploratory: smoke chặn bản hỏng, regression giữ hành vi đã biết (tự động hóa), exploratory tìm rủi ro chưa biết (làm tay) | Quyết định kiểm gì ở mỗi bản và mỗi lần sửa GDD | (V) [Game-Ace: types of game testing](https://game-ace.com/blog/types-of-game-testing/), [iXie: game QA guide](https://www.ixiegaming.com/comprehensive-guide-to-game-qa-testing/) |
| 2 | Session-based test management: một phiên có charter (vùng kiểm), giới hạn giờ, ghi chú. Phiên 60 đến 90 phút | Chơi tìm lỗi mà không biến thành chuỗi bấm cứng | James Bach, Session-Based Test Management (satisfice.com, kiến thức nghề, chưa mở lại link). Thông số giờ phiên: (V) iXie ở trên |
| 3 | Tách severity khỏi priority. Severity là tác động kỹ thuật, priority là độ gấp do người điều phối đặt. QA đề xuất, GDM chốt priority | Mọi dòng Bugs Report. Mức của phòng: chặn, nặng, nhẹ, thẩm mỹ, tương ứng P1 đến P4 ở Playtest Report | [Packt, Modern Game Testing: severity versus priority](https://subscription.packtpub.com/book/game-development/9781803244402/10/ch10lvl1sec49/severity-versus-priority) |
| 4 | Bước tái hiện chuẩn: bắt đầu từ trạng thái đã biết (ngày mới, file save cụ thể), viết cho người chưa chơi, tự làm theo trước khi gửi, ghi tỉ lệ tái hiện, kèm seed, một lỗi một báo cáo | Mọi lỗi. Roguelite nhẹ có spawn ngẫu nhiên nên seed là bắt buộc | (V) [Bugnet: bug reproduction steps for games](https://bugnet.io/blog/how-to-write-bug-reproduction-steps-for-games), [Game Developer: how to report bugs](https://gamedeveloper.com/design/how-to-report-bugs) |
| 5 | Playtest quan sát: nhìn người chơi, ghi hành vi, không giải thích, không dẫn. Người chơi không biết vì sao mình làm vậy nên hành vi tin hơn lời. Một người chưa đủ, tìm mẫu qua nhiều người | Playtest người thật, ngày đầu và FTUE | [Valve, Approach to Playtesting, GDC 2009](https://cdn.fastly.steamstatic.com/apps/valve/2009/GDC2009_ValvesApproachToPlaytesting.pdf), [Cronin, Playtesting Process for Ultra Small Teams, GDC 2026](https://media.gdcvault.com/gdc2026/Slides/Cronin_Brian_PlaytestingProcessForUltraSmallTeams.pdf), [de Jongh, Avoiding Evil Data](https://gdcvault.com/play/1024451/Playtesting-Avoiding-Evil) |
| 6 | Kiểm kinh tế: nguồn thu so với nguồn chi (source / sink), chiến lược trội (một cách chơi hơn hẳn mọi cách khác ở mọi tình huống), tích trữ không áp lực chi | Kiểm ECONOMIC, Shop, Recipe, Upgrade. Số do sim cấp, QA chạy lại | (V) [EkoSphere devlog: economy](https://arshyagupta.cargo.site/ekosphere-economy), Adams và Dormans, Game Mechanics: Advanced Game Design, chương 5 (https://www.oreilly.com/library/view/game-mechanics-advanced/9780132946728/ch05.html). Devlog mới đọc qua tóm tắt tìm kiếm |
| 7 | Game Accessibility Guidelines tầng basic: đổi phím điều khiển, điều khiển đơn giản, phụ đề, tách âm lượng hiệu ứng / thoại / nhạc, lưu cài đặt | Checklist build có điều khiển và UI | [gameaccessibilityguidelines.com/basic](https://gameaccessibilityguidelines.com/basic/). Mới đọc qua tóm tắt tìm kiếm |
| 8 | Tiêu chí chấp nhận đo được (Feature, Category, Acceptance Criteria, TRUE / FALSE, Actual Result) | Dựng MVP Criteria Checklist. Câu "chơi trọn 1 ngày được" phải tách thành số đo | Khuôn Lead, `docs/process/templates/gdd-sheet-khuon-indie.md` mục 6 |

## 4. Checklist trước khi báo xong

- [ ] Mỗi tiêu chí trong brief có dòng kết quả và bằng chứng. Không có dòng nào chấm theo lời người làm.
- [ ] Giờ sửa file đầu vào, `so-hien-hanh.md`, DECISIONS đã đọc lại ngay trước khi gửi, không có mục mới hơn lần đọc.
- [ ] Sim hoặc script chạy lại trên trạng thái sạch, cùng seed, bảng trong báo cáo khớp output (grep kiểm).
- [ ] Mỗi số trong báo cáo sinh từ output cùng lần chạy, không chép tay.
- [ ] Kiểm chéo giữa tab có kết quả: ID trùng, giá lệch giữa Shop và ECONOMIC, công thức dùng item không có nguồn.
- [ ] Mỗi lỗi có bước tái hiện từ trạng thái đã biết, mong đợi, thực tế, mức, người sửa.
- [ ] Mức lỗi theo thang chặn, nặng, nhẹ. Có chặn hoặc nặng thì TRẢ LẠI, chỉ còn nhẹ thì ĐẠT kèm đích của từng lỗi.
- [ ] Đã thử biên: 0, max, lặp nhanh, thoát giữa chuyến, hết năng lượng bộ đồ ngoài không gian, khoang hàng đầy, không đủ ₵.
- [ ] Không có build thì ghi rõ "chưa chơi", không gọi script là playtest.
- [ ] Mục "Bỏ qua" liệt kê môi trường và phần không kiểm được. BLOCKED chỉ khi không làm được việc được giao.
- [ ] Văn phong theo hồ sơ Lead: tiếng Việt có dấu, không emoji, không gạch dài, không dấu chấm phẩy (script `soat.mjs` nếu có).
- [ ] Không sửa file của vai khác, không thêm việc ngoài MVP vào kết luận.

## 5. Lỗi hay gặp ở game cùng thể loại và cách tránh

Phần này tổng hợp từ bài học nội bộ (`docs/knowledge/90-bai-hoc.md`) và kinh nghiệm nghề chung, chưa có nguồn trích riêng.

| Lỗi | Biểu hiện | Cách tránh |
|---|---|---|
| Chấm theo handoff | ĐẠT theo lời tác giả, Lead chơi 2 phút thấy lỗi ngay | Tự tái hiện từng tiêu chí. Chơi như người mới trước khi chấm |
| Tin sim, bỏ chơi thật | Sim đạt, build thì nhàm hoặc quá khó | Sim chứng minh số, build chứng minh cảm giác. Ghi rõ cái nào chưa có |
| Soft lock ở chuỗi chết, nợ, túi đầy | Hết năng lượng bộ đồ, drone cứu hộ kéo về, phí vượt ₵ thì kẹt vòng lặp. Khoang hàng đầy không nhặt được món cần | Bộ biên bắt buộc ở checklist. Mỗi trạng thái xấu phải có đường ra |
| Vòng lặp tiền vô hạn | Giá bán món cao hơn giá nguyên liệu và nhiên liệu cộng lại ở mức bỏ qua thu nhặt | Quét giá chéo Shop, Recipe, ITEM LIST. Chạy sim 3 kịch bản (thận trọng, bình thường, tối ưu) |
| Chiến lược trội | Chỉ dùng lưới hoặc chỉ cắt, bỏ qua cơ chế còn lại. Farm một tầng bỏ nâng cấp | Hỏi "cách chơi nào hơn hẳn" ở mỗi hệ thống, ghi chiến lược trội vào lỗi thiết kế |
| Mất tiến trình | Thoát giữa chuyến bay hoặc giữa ca bán, save hỏng, load sai | Ca thoát và load ở mỗi pha của ngày. Ghi file save dùng |
| Số hai nơi lệch | Cùng một số ở hai tab khác nhau (lỗi đã thấy ở Dungeon Builder) | Số hiện hành chỉ ở tab spec. Script quét so hai nơi |
| Spawn ngẫu nhiên không tái hiện được | Lỗi một lần rồi mất | Ghi seed và trạng thái đầu. Không có seed thì ghi tỉ lệ tái hiện |
| Pixel art co giãn lỗi | Méo khi tỉ lệ không nguyên, UI tràn ở 3840x2160 hoặc 21:9, mờ khi đổi cửa sổ | Bộ biên 1280x720 đến 3840x2160, cửa sổ và toàn màn hình, alt-tab |
| Lỗi thời sau khi Lead đổi luật | Kết luận ĐẠT đúng lúc viết, sai lúc đọc | Đọc lại giờ sửa và DECISIONS ngay trước khi gửi, mỗi vòng một tin gộp |
| Hai nhịp lệch nhau (thám hiểm, quán) | Chuyến bay nhiều ₵ mà quán không bán hết, hoặc quán đói nguyên liệu | Chơi trọn một ngày và đo hai nửa cùng đồng hồ |

## 6. Áp vào Space Salvage MVP

Mốc MVP: 1 tầng, 3 quái, 7 công thức, 2 loài khách, chơi trọn 1 ngày. Hiện chưa có build Unity, chưa có prototype, số còn "Đề xuất - chưa chốt". Mọi mục "chơi" bên dưới là kế hoạch, chưa kiểm.

| Hệ thống | Khung dùng | Kiểm gì |
|---|---|---|
| Jetpack quán tính, năng lượng bộ đồ | 2, 4, biên | Hết năng lượng giữa chuyến, drone cứu hộ, phí và nợ, quán tính ở 8 hướng khi đổi tốc độ khung hình |
| Cắt, choáng, lưới bắt (Enemy, Player) | 2, 3 | Hit feel qua charter, chỉ số HP / DMG khớp giữa Enemy và sim, chiến lược trội (chỉ lưới) |
| Khoang hàng, salvage | biên, 6 | Túi đầy, nhặt thứ không có chỗ, Spawn Point khớp Zone |
| Chế món và đồ độ (Recipe, ITEM LIST) | 6, kiểm chéo | Công thức dùng item có nguồn nhận, giá bán lớn hơn chi phí, 7 công thức đủ |
| Quán và khách (Customer) | 5, 6 | Hàng đợi, kiên nhẫn, tip, 2 loài khách, câu treo 1 hay 2 quầy |
| Kinh tế (ECONOMIC, Shop, Upgrade) | 6, 8 | Source / sink, một bảng giá, nâng cấp đủ bậc, sim chạy lại cùng seed |
| Ngày, lưu game, FTUE | 4, 5, 7 | Thoát và load ở mỗi pha, ngày đầu người mới tự đi được, phím điều khiển đổi được |

Việc đầu tiên khi GDM giao:
1. Soạn `qa/test-plan-mvp.md` (phạm vi, ngoài phạm vi, môi trường, thang mức lỗi, cổng ra) và điền khung MVP Criteria Checklist từ tab ẩn `v0.1 SCOPE & RISKS`. Mỗi dòng có tiêu chí đo được.
2. Bàn với gd-tech bộ kiểm chéo: ID duy nhất, công thức và item, giá một nguồn, nâng cấp đủ bậc, ZONES so với Enemy. Chạy lần đầu trên các tab v0.1 để biết lỗi nền.
3. Khi có prototype jetpack (GD-002): charter đầu tiên là cảm giác bay và hết năng lượng.

## 7. Phối hợp

| Nhận từ | Nhận gì | Giao cho | Giao gì |
|---|---|---|---|
| GDM | Brief, tiêu chí, giờ chốt số | GDM | Kết luận ĐẠT / TRẢ LẠI / BLOCKED, danh sách lỗi nhẹ và đích |
| gd-tech | Validator, sim, seed, prototype | gd-tech | Lỗi validator bỏ sót, ca kiểm cần thành script |
| gd-economy | Bảng giá, sim 3 kịch bản | gd-economy | Lỗi cân bằng, chiến lược trội, vòng tiền |
| gd-combat, gd-items, gd-world, gd-quan | GDD hệ thống, tab đã soạn | Từng vai giữ tab | Lỗi có bước tái hiện, đề xuất người sửa |
| gd-character, gd-story, gd-ux | Hồ sơ, lời thoại, wireframe, FTUE | gd-ux và vai liên quan | Lỗi FTUE, strings, nhãn UI lệch config |

Quyền giữ tab: MVP Criteria Checklist, Playtest Report, Bugs Report. QA chấm cuốn chiếu theo file phối hợp đợt, ghi giờ sửa cạnh mỗi kết luận. Tin riêng chỉ cho lỗi chặn và nặng. Bất đồng về mức lỗi thì GDM quyết, QA giữ nguyên bằng chứng.
