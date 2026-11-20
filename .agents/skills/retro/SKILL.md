---
name: retro
description: Rút kinh nghiệm sau một mốc của phòng Game Designer và nâng năng lực đội bằng cách SỬA FILE - playbook vai, prompt agent, knowledge 90-bai-hoc, template, cổng kiểm - từ phản hồi của Lead, kết quả QA và playtest, task bị trả lại, lỗi lặp. Có thể chạy lại bài kiểm năng lực của vai bị ảnh hưởng. Dùng sau mỗi mốc lớn, khi Lead chê hoặc sửa lại cùng một điều lần thứ hai, hoặc khi nói retro, rút kinh nghiệm, nâng cấp đội.
argument-hint: [project slug] [--tu <ngày>] [--kiem-lai]
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, Bash, Agent
---

# /retro - bài học thành thay đổi trong file

Retro không phải biên bản. Mỗi bài học phải kết thúc bằng một file bị sửa, nếu không thì chưa xong.

## 1. Thu thập (từ `--tu` hoặc từ retro gần nhất)
- Tin của Lead trong khoảng đó: chỗ khó chịu, chỗ phải nhắc lại, chỗ sửa định nghĩa, chỗ bác (trích nguyên văn ngắn).
- `projects/<slug>/DECISIONS.md`, `production/DECISIONS.md`, `production/BACKLOG.md` (task bị trả lại, blocked, làm lại), `projects/<slug>/qa/` (TRẢ LẠI, playtest), `projects/<slug>/gdd/review/`.
- Báo cáo agent có mục "Chưa xong / bỏ qua" và "Giả định" bị Lead bác.
- Memory của project này nếu có thay đổi mới.
- `projects/*/bai-hoc.md`: đề xuất các gd-manager sản phẩm gửi lên phòng. Gộp xong thì ghi ngày gộp ở cuối file đó.

## 2. Phân tích từng vấn đề
Bảng: Triệu chứng - Nguyên nhân gốc (hỏi "vì sao" tới khi chạm quy trình, prompt, template hoặc thiếu công cụ) - Vai liên quan - Lần thứ mấy gặp.
Loại bỏ vấn đề một lần do tình huống lạ, giữ vấn đề lặp hoặc vấn đề Lead đã nói.

## 3. Sửa file (bắt buộc cho mỗi vấn đề giữ lại)
| Nguyên nhân thuộc | Sửa ở đâu |
|---|---|
| Vai không biết luật hoặc thói quen của Lead | mục "Lỗi hay gặp" và "Phương pháp" của `docs/playbooks/<vai>.md`, và dòng ngắn trong `.Codex/agents/<vai>.md` nếu đủ quan trọng (prompt ≤ 60 dòng) |
| Bài học xuyên vai | `docs/knowledge/90-bai-hoc.md` |
| Tri thức game hoặc phương pháp | file knowledge tương ứng (20, 25, 30, 40, 50, 60, 70, 80) |
| Brief thiếu thông tin | `docs/process/templates/brief.md` hoặc template liên quan |
| Việc làm tay lặp từ 3 lần | script hoặc skill mới, ghi DECISIONS |
| Lỗi máy chấm không bắt mà người thấy | cổng mới trong script review của repo game (giao gd-tools) |
Dạng dòng "Lỗi hay gặp": `YYYY-MM-DD <project>: <triệu chứng> -> <nguyên nhân> -> <cách tránh>`.

## 4. Kiểm lại năng lực (`--kiem-lai`)
Với mỗi vai có playbook hoặc prompt vừa sửa: repo có `docs/nang-luc/` thì thêm một câu hỏi vào `docs/nang-luc/<vai>.md` tái hiện đúng tình huống vừa học, rồi chạy bài kiểm của vai đó theo `docs/nang-luc/README.md`. Ghi kết quả vào `docs/nang-luc/ket-qua.md`. Câu mới không đạt thì sửa prompt tiếp, tối đa 2 vòng.

## 5. Ghi và báo
- `production/reports/<yyyy-mm-dd>-retro.md`: bảng vấn đề - file đã sửa - kết quả kiểm lại.
- DECISIONS cho thay đổi quy trình.
- Báo Lead 3-5 dòng: đội đã học gì, sửa ở đâu, điều gì cần Lead xác nhận.
