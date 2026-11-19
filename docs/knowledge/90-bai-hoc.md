# Bài học xuyên dự án (triệu chứng -> nguyên nhân -> cách tránh)

Đọc trước khi giao việc đầu tiên của một project. Bài học riêng từng vai nằm ở cuối mỗi playbook. Thêm dòng mới qua retro sau mỗi mốc.

## A. Hiểu yêu cầu của Lead

| Triệu chứng | Nguyên nhân | Cách tránh |
|---|---|---|
| "không, ý tôi là..." lặp lại (xếp lại màu chứ không phải thứ tự, sửa cái này chứ không phải ảnh guide) | Tin ngắn, nhiều lỗi gõ, không dấu. Claude đoán theo nghĩa rộng | Đọc hết đính kèm (ảnh đánh số, video, JSON). Khi từ khóa đa nghĩa hỏi một câu có phương án hoặc làm thử 1-2 mẫu trước |
| Làm nhầm chỗ ("phải sửa ở đây chứ không phải cái Tool test", "không phải tool này mà là tools/level-forge/") | Nhiều bản, nhiều tool cùng repo | Xác nhận đúng file/tool đích trong câu trả lời đầu |
| Vượt phạm vi (tự sinh Link, tự bấm Update 37 level, sửa ảnh khi chỉ cần text, tự chọn 4 hằng số thời lượng) | Muốn "làm trọn" | Hỏi trước quyết định thiết kế. Đã làm thì tắt mặc định và thừa nhận. Không tự thêm cơ chế |
| Phải nhắc lại yêu cầu ("tôi bảo xóa đi rồi mà", "tôi có tính năng build sẵn mà") | Không ghi quyết định vào file giữa các phiên | Ghi DECISIONS và CLAUDE.md của repo ngay khi chốt |
| Hiểu sai định nghĩa ("sát nhau là cùng tầng đặt cạnh và chạm nhau hiểu ko") | Dùng định nghĩa của mình | Lấy ví dụ bằng số/hình của Lead làm định nghĩa. Viết lại luật bằng ví dụ đó |
| Đội rà và viết lại data L5, L9, L10, L12 rồi Lead nói "level đang phát hiện vấn đề tới từ Dev nên không sửa" (game chữ drop A 20/10/2026) | Giao sửa data khi chưa hỏi lỗi nằm ở build hay ở data | Level "lỗi, khó" trên sản phẩm đã có build: hỏi hoặc kiểm build trước. Chỉ sửa data khi Lead xác nhận lỗi ở data |
| Lead bỏ 2 mục 2D ART GDM tự thêm vào Main Task (Order và hàng chờ, rule layer) (game chữ drop A 20/10/2026) | Chép thêm việc từ tab khác không có trong lời Lead | Main Task chỉ ghi việc Lead giao. Việc đề xuất thêm để danh sách riêng hỏi Lead một lượt |
| Phạm vi mechanic đặc biệt đổi 3 lần trong ngày (4 loại, rồi 2, rồi Đá và Coin không phải quân tile), mỗi lần sửa 6 file luật và 5 tab Sheet (game chữ drop A 20/10/2026) | Đề xuất được lan xuống luật, level, tutorial, Sheet trước khi Lead họp team chốt | Đề xuất mới chỉ nằm ở một trang trình Lead. Lan ra các file khác sau khi Lead chốt (thường sau họp team) |

## B. Phương pháp thiết kế

| Triệu chứng | Nguyên nhân | Cách tránh |
|---|---|---|
| GDD soát định dạng xanh nhưng review lớp 3 trả lại 1 chặn, 6 nặng (20/10/2026) | Gắn [GIẢ ĐỊNH] cho điều build đã cài. Soát chỉ kiểm hình thức | Grep build trước khi giả định. Soát xanh không phải duyệt, mọi GDD qua `/gdd-review` có đối chiếu build |
| Hai số độ khó tưởng mâu thuẫn (L50 67-69 và 77,1) | Ghi số không kèm thang, số ván, ngày | Mọi số độ khó ghi kèm thang, số ván, ngày |
| Điểm độ khó cao mà bấm bừa vẫn qua | Chấm cấu trúc bàn | Thang "ai thua", luôn kèm Wr |
| Đạt mọi mốc tiền mà vòng chơi 2-3 phút, lựa chọn phụ luôn lợi hơn | Chỉ đo kết quả | Đo thời lượng, đoạn chờ, giá trị kỳ vọng từng lựa chọn |
| Nửa sau game vỡ không ai thấy | Sim chỉ chạy 4 năm | Sim phủ cả vòng đời ngay từ hệ thống đầu |
| Số đo lệch rồi phát hiện bot chơi sai | Bot không được kiểm như code | Kiểm bot trước mỗi vòng. Bot như người thật |
| Nhiều vòng cân bằng, mỗi vòng dời mốc | Không có điều kiện dừng. Mốc ước cứng như mốc gốc | Phân loại mốc. Trần 2 vòng. Chấp nhận lệch ≤ 5% |
| Hoàn 45 điểm lệch sau 2 sprint | Thiết kế trước kiểm toán tham chiếu | Kiểm toán ngay sau phân tích |
| Luật đổi 3 lần (MaxCap, luật thua game phục vụ Order A) | Không chốt ra giấy. Nhiều phiên song song | gd-systems chốt bằng ví dụ số. Một chủ sở hữu luật |
| Tool bịa cơ chế | Không đọc spec/fixture | Kiểm luật bằng level thật trước |
| Mục tiêu không với tới (L50 76 điểm) | Trần của luật | Báo trần kèm số và lựa chọn (nới luật hay hạ mục tiêu). Không lách |
| Blocker trang trí bị bác | Không phân tích nguồn khó | Dữ liệu suy luận/hành vi trước, mechanic sau |
| Mechanic giảm rối bằng quân tile phủ lớp (quân úp, quân vàng) bị Lead đổi thành vật thể khác hình (Đá, Coin) (game chữ drop A 20/10/2026) | Vẫn là quân nên vẫn thêm khung và chữ lên bàn đang rối | Giải pháp giảm rối mắt phải bớt số vật thể trông giống quân, không chỉ đổi mặt quân. Vật thể đặc biệt khác hình hẳn quân tile |

## C. Level và nội dung

| Triệu chứng | Nguyên nhân | Cách tránh |
|---|---|---|
| Máy chấm 10/10 "đạt" mà soi mắt có lỗi (4 lần) | Tin số đo | Soi mắt + chơi thật là cổng. Lỗi mới thành cổng script |
| Ghi đè 37 level khi "nắn" quân lệch nửa ô | Coi bố cục Lead là lỗi. Lỗi thật là marker Unity | Xác nhận trước khi sửa hình học. So ảnh với JSON. Backup |
| Bảng đo đẹp nhưng 5 màn là 2 bàn trùng, 10 màn cùng cỡ | Bộ chọn chỉ tối ưu khoảng cách tới đích | Ràng buộc đa dạng nhìn thấy, sàn số nước, seed riêng, cấm trùng |
| Level trùng 9/9 từ, ảnh khó nhận, bộ phận cơ thể | Xoay vòng chủ đề nhỏ. Không có danh sách cấm | Chặn trùng ≥ 40%. Danh sách từ cấm và cặp dễ nhầm |
| Bàn dạt góc, quân 42 px, bàn dẹt | Tọa độ thô, bàn 8 hàng | Căn giữa lưới. Nhắm ≤ 7 hàng. Đo cỡ quân |
| 12 level hỏng vì file bị ghi trong lúc làm | Nhiều người/phiên cùng thư mục | Kiểm mtime. Backup có ngày. Không tự khôi phục thay đổi có chủ đích của người khác |
| Lead: "Cái Curve Level khủng khiếp gì đây" (game phục vụ Order A 06/11/2026): cầu thang 7/15 level Khó trở lên, "Đỉnh" không hạ, số đĩa ngược nhãn | Dán nhãn độ khó lên 15 màn prototype có sẵn thay vì thiết kế curve | Curve răng cưa viết trước, script tự kiểm đỉnh và thở, màn dựng theo curve. Cột số chỉ lên tab khi là số của màn khớp curve. Xem `20-do-kho-va-can-bang.md` mục 6 |

## D. Tool và kỹ thuật

| Triệu chứng | Nguyên nhân | Cách tránh |
|---|---|---|
| Thang độ khó cũ âm thầm | Cache thiếu khóa. Không bump version | Mọi override vào chữ ký. Bump khi đổi core |
| Tham số CSV không vào bộ sinh | Hai đường đọc | Test end-to-end với hai bộ tham số khác nhau |
| Tool lag 2,8 s khi sửa | Solver tự chạy | Việc đắt sau nút bấm |
| "Mất 5 level" | Hai dev server, localStorage tách origin | Lưới backup. Nhắc cổng đúng. Cổng riêng cho Claude |
| Lỗi chỉ lộ thành pageerror sau build | Trùng tên top-level trong IIFE | Test bundle, page-load check |
| Heredoc nuốt `\n`, cp1252 vỡ tiếng Việt | Shell Windows | Write tool, script ở scratchpad, in ASCII |
| Kiểm chứng bằng đường tắt che lỗi (gọi hàm thay input thật, screenshot pane ẩn) | rAF dừng khi pane ẩn | Playwright qua http, đọc DOM, hook game |
| Kết quả cũ còn giữ sau khi sửa (lời giải, autoPlay không hủy) | Không vứt dữ liệu suy ra | Vứt khi không còn đúng. Báo lý do dừng |
| Xóa quá tay (13/18 hộp, shadowColors khỏi cả library) | Hiểu lời rộng | Sàn cho mọi thao tác xóa. Bảng ranh giới trường nào ở file nào |
| Dán Sheet tay lỗi 4 kiểu: TSV có dòng xuống thật làm vỡ hàng, `sheet-html.mjs` ghi đè HTML do script khác sinh, gviz bỏ chữ ở cột kiểu số, màu tag tô tay không đổi theo giá trị (game chữ drop A 20/10/2026) | Không có công cụ dán và đối chiếu chuẩn | Dùng `/gdd-sheet-sync` (GD-016). Luật dán ở `50-gdd-va-tai-lieu.md` mục 6 |

## E. Vận hành và phối hợp

| Triệu chứng | Nguyên nhân | Cách tránh |
|---|---|---|
| Lead dừng cả đội vì tốn token (07/10/2026) | 5 phiên song song, Fable, notify, báo cáo dài | Opus/Sonnet theo vai, trần 3 việc, báo ≤ 15 dòng, gộp brief |
| Vai nhàn rỗi (Level Designer ở game tycoon) | Vai định nghĩa theo studio chung | Gọi vai theo việc thật của project |
| QA ĐẠT nhưng Lead thấy lỗi ngay, "chưa có gì đáng thử" | Kiểm theo handoff. Không ai đo vui. Không có hình | Kiểm theo GDD. Playtest người thật. Hình tối thiểu từ đầu |
| Báo "xong" rồi Lead hỏi "đã 100% chưa" | Rà trạng thái theo trí nhớ | Rà thực tế trước khi báo. Nói "chưa" kèm số còn thiếu |
| Agent không có shell nên không chạy được sim | Định nghĩa tools quá hẹp | Vai cân bằng, tool, prototype, QA không giới hạn tools |
| Phiên được đánh thức làm lại brief cũ | Hộp thư giữ tin cũ | Tin đầu "dừng brief cũ". Ưu tiên subagent |
| Tài liệu "trông như AI" | Gạch dài, emoji | Chỉ "-", không emoji, soát sau khi ghi |
| Mất dữ liệu vĩnh viễn (vm_bundles 9 GB, 3 dòng markup) | Xóa/ghi đè không backup | Backup timestamp, dry-run, undo cấp bộ |
| Ảnh chụp toàn màn hình trúng trình duyệt của Lead | Chụp màn hình máy | Không chụp toàn màn hình. Chỉ chụp pane |
| Đẩy ranh giới IP (crack, bản dịch người khác, bìa Paradox) | Lead muốn nhanh | Từ chối ngắn + phương án hợp lệ. Ghi DECISIONS từ kickoff |
| Lead nhắc "để các agent làm việc và phối hợp với nhau" khi GDM tự viết Main Task (game chữ drop A 20/10/2026) | GDM làm thay vai để nhanh | Giao cả đợt cùng lượt kèm file phối hợp (`docs/process/templates/phoi-hop-dot.md`). GDM chỉ gỡ bất đồng, dán Sheet, báo Lead |
| Tin liên phiên bị chặn sau khoảng 10 tin, báo cáo của vai đến trước khi vai đọc tin cập nhật (game chữ drop A 20/10/2026) | App giới hạn tin khi Lead chưa nhắn. Tin xếp hàng đợi | Gộp tin, để vai nhắn thẳng nhau. Trước khi dán, đối chiếu giờ file với DECISIONS mới nhất |
| game chữ drop A mất thời gian vào vòng làm lại: phạm vi đổi 4 lần lan 6 file và 5 tab, Main Task dán lại 6 lần, QA chấm 19 lượt, số chốt đến qua 4 tin (20/10/2026) | Đề xuất lan trước khi chốt. Số rải trong tin. Kiểm và dán bằng tay | Số chốt ở `so-hien-hanh.md`, đề xuất ở 1 file tới khi chốt, cổng máy cho kiểm lặp, `/gdd-sheet-sync`, biên bản `production/reports/2026-10-20-hop-team.md` mục 2 |
- 2026-10-21 game-bong-noi-a: GDD V0.5 dựng như V1 (5 tab, luật 30 điều, 2 lượt QA, bot đo 15 level) -> không hỏi Lead mức V0.5 cần gì, chép khuôn Sheet V1 có sẵn -> V0.5 ưu tiên tốc độ: theo mẫu `knowledge/nguon/game sort mèo A-gdd-v05.md` (2 tab Gameplay, Main task 4 cột), level chỉ là một dòng Main Task. Hỏi mức chất lượng ngay ở kickoff.
- 2026-10-21 game-bong-noi-a: phòng viết luật, tutorial, level cho Thanh chắn rồi phải gỡ -> tin "chọn Thanh chắn" chỉ là chữ của nút GDM gợi sẵn, Lead chưa chốt -> quyết định luật lõi phải là lời Lead. Nút chỉ dùng cho việc đảo ngược được.
- 2026-10-21 game-bong-noi-a: Lead sửa tay trên Sheet (Logic, cột, trạng thái), lần dán sau suýt ghi đè -> repo không biết bản Sheet mới -> trước khi sinh lại tab đã dán, `doi-chieu` trước. Lệch thì kéo bản Sheet về nguồn.
- 2026-10-21 game-vat-drop-a, game-nhom-drop-a: mỗi game xong trong một lượt -> khuôn sinh chung cho họ game chỉ khác object -> game cùng họ thì làm khuôn trước, game sau chỉ điền cấu hình.
