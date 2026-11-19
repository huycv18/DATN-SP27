---
name: gdd-review
description: Review độc lập một hoặc nhiều GDD của phòng Game Designer trước khi giao dev hoặc dán lên Sheet - đủ mục theo khuôn, luật khẳng định và không mâu thuẫn nội bộ, mâu thuẫn chéo giữa các GDD, lệch với DECISIONS và với build thật (số, nhãn, từ của Lead), lỗ hổng thiết kế (chiến lược trội, mechanic không đánh vào nguồn khó, trần độ khó không nói ra), và bước đọc bằng người không có ngữ cảnh. Dùng khi nói review GDD, kiểm GDD, soát GDD trước khi giao, GDD có mâu thuẫn không.
argument-hint: <đường dẫn GDD hoặc thư mục projects/<slug>/gdd> [--build <repo game>] [--muc v05|nhanh|day-du]
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Bash, Agent
---

# /gdd-review - review GDD độc lập

Người review không phải người viết. Nếu chính phiên này vừa viết GDD đó, giao việc review cho một subagent mới (`general-purpose`, model sonnet) kèm đường dẫn file này, để mắt nhìn không bị neo vào ý mình.

Tiếng Việt có dấu, chỉ dùng "-", không emoji. Ghi kết quả vào `projects/<slug>/gdd/review/<yyyy-mm-dd>-<tên>.md`.

## 1. Đọc

1. GDD cần review (nguyên văn) và mọi GDD khác trong `projects/<slug>/gdd/` (chỉ đọc mục Tóm tắt và Luật của file khác trước. Đọc sâu khi thấy dính nhau).
2. `projects/<slug>/DECISIONS.md`, `projects/<slug>/README.md`, `projects/<slug>/gdd/tu-vung.md` nếu có.
3. Khuôn tương ứng: `docs/process/templates/gdd-he-thong.md`, `.claude/skills/gdd-v1/templates/mini-gdd.md`, hoặc cấu trúc Sheet ở `docs/knowledge/50-gdd-va-tai-lieu.md`.
4. Có `--build`: file level JSON, config, file curve trong repo game để đối chiếu số.
5. Lần review trước (`gdd/review/`) nếu có: mục nào đã báo, đã sửa chưa.

## 2. Năm lớp kiểm (ghi kết quả từng dòng: ĐẠT / LỖI / CẢNH BÁO + bằng chứng)

**Mức `v05`** (GDD V0.5, ưu tiên tốc độ): bỏ lớp 1 đến 5 dưới đây, chỉ một lượt trên bản Sheet đang hiện (kéo export CSV về trước): số và phạm vi khớp `so-hien-hanh.md` và DECISIONS mới nhất. Kiểm mâu thuẫn trong và giữa ô Gameplay, Main Task. Kiểm mechanic chưa chốt không có luật hay tên gợi sẵn. Lỗi nhẹ tối đa 5 dòng, không chặn dán.

**Lớp 1 - Đủ khuôn.** Mọi mục của khuôn có nội dung thật (không "...", không placeholder). Hệ thống: Tóm tắt, Luật đánh số, trạng thái và resolution order nếu có trạng thái, Tham số dạng bảng có khoảng an toàn và nguồn, Trường hợp biên ≥ 4 (0, max, lặp nhanh, thoát giữa chừng, hai mechanic chồng), Ràng buộc vật lý, Yêu cầu engineer, Yêu cầu art/UI/tutorial, Game feel, Tiêu chí nghiệm thu đo được, Câu hỏi mở có phương án.

**Lớp 2 - Luật chặt.** Mỗi luật một câu khẳng định, không "thường", "có thể", "khá", "tùy". Thắng và thua có phán quyết cho ca tranh cãi. Mọi số trong bảng, không chôn trong văn xuôi. Công thức có biến, khoảng, một ví dụ tính. Không hai luật mâu thuẫn trong cùng file.

**Lớp 3 - Khớp nguồn chân lý.**
- Với DECISIONS: mọi số và luật đã chốt khớp (grep từng con số, từng tên mechanic, từng mốc level).
- Với GDD khác: cùng vật thể cùng tên, cùng số (sức chứa, số order, mốc mechanic), phụ thuộc hai chiều.
- Với build (khi có): nhãn UI, số level, khung bàn, marker dữ liệu, công thức số quân so với file thật.
- Từ của Lead: không "khay" khi Lead nói "hàng chờ", không tên biến code, không "làm giống game X".

**Lớp 4 - Thiết kế.**
- Có chiến lược trội không (lựa chọn A luôn lợi hơn B. Booster làm mechanic vô nghĩa).
- Mechanic có đánh vào nguồn khó Lead nêu không, hay chỉ trang trí.
- Trần độ khó và ràng buộc vật lý có được nói ra kèm số không.
- Mọi level giải được không cần booster. Monetization không chặn đường thắng.
- Có bước tutorial cho mỗi luật mới, và tín hiệu nhìn thấy cho mỗi trạng thái.
- Đoạn chờ trên 10 giây có quyết định không.

**Lớp 5 - Người đọc không ngữ cảnh** (chỉ `--muc day-du`). Giao một subagent `general-purpose` (sonnet) đọc RIÊNG file GDD, không cho đọc gì khác, trả lời: (a) tóm tắt luật thắng thua trong 3 câu, (b) liệt kê 5 câu engineer sẽ hỏi lại, (c) chỗ nào đọc hai cách hiểu. Câu trả lời sai luật hoặc câu hỏi lại nào GDD lẽ ra phải trả lời thì ghi thành LỖI.

Sau đó chạy `node .claude/skills/gdd-v1/scripts/soat.mjs <file>` nếu script có, ghi bảng soát định dạng.
Lớp 3 gọi thêm `node .claude/skills/gdd-review/scripts/quet.mjs --project <slug> ...` (xem `docs/playbooks/gd-qa.md` mục Chấm cuốn chiếu): so số trong tab với data, bản gọn với nguồn, từ cũ sau đổi tên, giờ sửa file. Chạy `--selftest` trước khi tin kết quả.
`--doi` so nội dung từng ô của TSV repo với bản export CSV của Sheet (`--doi <tsv> --csv <csv>`, hoặc `--project <slug> --doi` lấy mọi `gdd/sheet/<tab>.tsv` so với `gdd/sheet/_tren-sheet/<tab>.csv`). Ô lệch là LỖI: Lead đã sửa tay, kéo về trước khi sinh lại. Chưa có bản export thì CẢNH BÁO.
File báo cáo lưu trữ không được quét: dòng đầu ghi "Trạng thái: dừng" hoặc "lưu trữ", thư mục `luu-tru/`, `archive/`, hoặc có tên trong `projects/<slug>/qa/luu-tru.txt`.

## 3. Kết luận

```
Kết luận: ĐẠT / SỬA NHỎ / TRẢ LẠI - một câu.
| # | Lớp | Mức (chặn / nặng / nhẹ) | Vị trí (mục, dòng) | Vấn đề | Bằng chứng | Đề xuất sửa |
Câu hỏi cần Lead quyết (nếu có): kèm phương án nghiêng về.
```

- TRẢ LẠI khi có lỗi chặn: mâu thuẫn với DECISIONS, luật thắng thua thiếu phán quyết, thiếu tiêu chí nghiệm thu, sai từ của Lead ở chỗ team sẽ đọc.
- Không tự sửa GDD. Đề xuất sửa cụ thể từng dòng để người viết làm.
- Báo GDM bằng khối `## Báo cáo cho GDM`.
