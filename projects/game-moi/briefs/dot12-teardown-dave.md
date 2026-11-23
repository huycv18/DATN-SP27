game-moi

# Đợt 12: Teardown Dave the Diver (GD-064, 2026-11-23)

Nguồn: Lead "Làm tiếp Teardown Dave the Diver". DECISIONS game mục "Thêm 4 loại tài liệu nộp học từ Timberwalls". Mẫu học: Sheet "The codex - Mind over magic" của nhóm Timberwalls, mỗi hệ thống của game tham chiếu một tab.

## Mục tiêu

Teardown là bảng mổ xẻ Dave the Diver theo đúng 9 hệ thống của Doc thiết kế Phần II, để người đọc Doc thấy mỗi luật của The Novent học gì từ Dave và vì sao đổi. Mỗi dòng là một cơ chế con: Dave làm thế nào, có nguồn, The Novent lấy gì, khác gì và vì sao, trỏ tới mục GDD.

## Ghi vào

`projects/game-moi/teardown/<NN> <Tab>.tsv`, một file một tab. Tên tab tiếng Anh, trùng tiêu đề mục Phần II trong `book/KHUON.md`:

| NN | Tab | Nhóm |
|---|---|---|
| 01 | Daily Cycle | A |
| 03 | Map and Expeditions | A |
| 08 | Co-op and Saving | A |
| 02 | Player | B |
| 04 | Combat and Driftlife | B |
| 05 | Items and Crafting | B |
| 06 | Station and Port | C |
| 07 | Economy and Progression | C |
| 09 | Story and Ending | C |

Cột: `STT | Mục | Dave the Diver làm gì | Nguồn | The Novent lấy gì | Khác gì và vì sao | Mục GDD | Ảnh cần chụp | Ảnh`.

- Mục: tên cơ chế con, ngắn (ví dụ "Nhịp ngày lặn và tối mở quán").
- Dave the Diver làm gì: 1 tới 3 câu, viết lại bằng lời mình, không chép nguyên văn. Trích dẫn nếu có thì dưới 15 chữ, trong ngoặc kép.
- Nguồn: mã nguồn, ví dụ `D3` hay `A2`. Mã `D1` tới `D23` là nguồn đã có ở `docs/knowledge/indie/06-dave-the-diver-cau-truc.md`. Nguồn mới nhóm A đặt `A1, A2...`, nhóm B `B1...`, nhóm C `C1...`. Không tìm được nguồn đọc được thì ghi "chưa có nguồn" và nói rõ trong báo cáo, không đoán.
- The Novent lấy gì, Khác gì và vì sao: lấy từ mục 9 "Lệch khỏi tham chiếu" của GDD hệ thống trong `projects/game-moi/gdd/he-thong/` và từ Doc `projects/game-moi/book/phan-2/NN-*.md`. Không đặt luật mới. Thấy GDD chưa nói thì ghi "GDD chưa nói".
- Mục GDD: tên file và mục, ví dụ `tram-va-cang.md mục 2.4`.
- Ảnh cần chụp: mô tả màn hình Dave cần chụp để minh họa dòng này (màn nào, lúc nào), để người chơi Dave đi chụp. Ảnh để trống.
- Mỗi tab 6 tới 12 dòng, chọn cơ chế mà The Novent thật sự học hoặc cố ý làm khác. Tab Co-op and Saving: Dave không có co-op, ghi đúng như vậy và chỉ so phần lưu, ngày, thất bại.

Mỗi nhóm thêm một file nguồn `projects/game-moi/teardown/nguon-<A|B|C>.tsv`, cột `Mã | Nguồn | URL | Đọc được không`. Nguồn D1 tới D12 dùng lại thì không chép vào.

## Đọc trước

`docs/knowledge/indie/06-dave-the-diver-cau-truc.md`, `docs/knowledge/indie/05-game-tham-chieu.md`, mục 9 của GDD hệ thống thuộc tab mình, Doc Phần II mục tương ứng. Nguồn web: tra được thì dùng WebSearch và WebFetch. Fandom trả lỗi 402, đừng thử lại.

## Tiêu chí hoàn thành

- Đủ 3 tab của nhóm, mỗi tab 6 tới 12 dòng, không ô trống ở cột 1 tới 8 (trừ Nguồn ghi "chưa có nguồn" khi thật không có).
- Mỗi mã nguồn trong tab có trong `nguon-<nhóm>.tsv` hoặc là D1 tới D12.
- Văn phong theo `docs/org/ho-so-lead.md`: tiếng Việt có dấu, không emoji, không gạch dài, không chấm phẩy, không mã nội bộ (RES-, SLV-, KH..., BS-...) trong ô chữ. Ghi file bằng Write tool hoặc script ghi UTF-8.

## Giới hạn

Chỉ ghi các file của nhóm mình trong `projects/game-moi/teardown/`. Không sửa GDD, Doc, Sheet. Không commit. Trả khối `## Báo cáo cho GDM`: số dòng mỗi tab, số dòng có nguồn đọc được, dòng "chưa có nguồn", chỗ GDD mục 9 lệch với Doc hoặc với điều nguồn nói về Dave.
