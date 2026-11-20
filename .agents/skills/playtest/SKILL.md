---
name: playtest
description: Tổ chức và ghi một buổi playtest cho game puzzle/casual của phòng Game Designer - chuẩn bị phiếu theo level và bước tutorial, chạy phần máy (bot theo lời giải, đo thời gian, heuristic biên) và phần người (Lead hoặc người chơi thật ghi bối rối / chán / vui), rồi phân tích ghi chú thô thành bảng phát hiện có mức độ, so bot với người, và đề xuất ai sửa. Dùng khi nói playtest, chơi thử, test cảm giác, Lead chơi thấy..., phân tích ghi chú chơi thử.
argument-hint: <moi|phan-tich> <project slug> [--build <url hoặc đường dẫn>] [--levels L1-15] [--ghi-chu <file>]
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, Bash
---

# /playtest - playtest có cấu trúc

Lý do có skill: ở các dự án trước "playtest" chỉ là script bot, không ai đo cái vui; QA ĐẠT mà Lead chơi thấy "chưa có gì đáng thử". Skill tách rõ phần máy đo được và phần chỉ người mới đo được.

Tiếng Việt có dấu, chỉ "-", không emoji. Ghi vào `projects/<slug>/qa/playtest/<yyyy-mm-dd>/`.

## Chế độ `moi`: chuẩn bị và chạy

1. **Đọc**: GDD và DECISIONS của project, bảng curve (`projects/<slug>/do-kho/`), tutorial (`projects/<slug>/ux/`), lần playtest trước.
2. **Mục tiêu buổi** (một câu): ví dụ "L1-5 người mới có hiểu luật hàng chờ không", "L12-15 có khó do phải tính trước không, hay do may rủi".
3. **Phần máy** (chạy trước, ghi `may.md`):
   - Mở build qua http, đúng cổng; dùng hook của game (`window.__game`, `sol`) chơi theo lời giải mọi level trong phạm vi: thắng / thua / lỗi console.
   - Bấm giờ mỗi level theo lời giải và theo bot người thường nếu có; so với thời lượng mục tiêu.
   - Heuristic biên: spam tap khi animation, thoát giữa chừng, reload, viewport 390 và 1280, tab ẩn.
   - Không chụp màn hình để xác nhận trạng thái; đọc DOM và state. Pane ẩn thì rAF dừng.
4. **Phiếu người chơi** (ghi `phieu.md`, gửi GDM để đưa Lead hoặc người chơi): một bảng mỗi level, cột: Level - Thử mấy lần - Thắng/Thua - Bối rối ở đâu (một câu) - Chán ở đâu - Vui ở đâu - Khó do tính trước hay do may - Ghi chú tự do. Thêm 3 câu cuối buổi: điều nhớ nhất, điều muốn bỏ, có muốn chơi tiếp không. Phiếu ngắn, chơi xong điền trong 3 phút.
5. **Dặn người chơi**: không hướng dẫn trước, không giải thích luật ngoài tutorial; người quan sát (nếu có) chỉ ghi, không gợi ý.

## Chế độ `phan-tich`: từ ghi chú thô ra kết luận

1. Đọc phiếu, ghi chú thô (tin nhắn Lead, ảnh khoanh đỏ, video), `may.md`.
2. Tách từng quan sát thành một dòng: level, bước, loại (bối rối / chán / vui / lỗi / khó-may), trích nguyên văn, ai nói.
3. Gom theo chủ đề; đếm số người hoặc số lần; phân loại trước khi báo phần trăm.
4. **So bot với người**: level nào bot dễ mà người khó, hoặc ngược lại; truy nguyên trước khi gọi là lỗi thang độ khó (tầm nhìn bot, UI gây hiểu nhầm, tutorial thiếu, luật thua áp sai thời điểm).
5. Ghi `ket-qua.md`:

```
Kết luận: một câu (mục tiêu buổi đạt hay chưa).
| # | Phát hiện | Level / bước | Bằng chứng (trích, số lần) | Mức (chặn / nặng / nhẹ) | Nguyên nhân nghi ngờ | Đề xuất | Ai sửa |
Bot so với người: bảng level - bot - người - giải thích.
Cái vui (giữ nguyên, đừng làm mất khi sửa): ...
Đã bỏ qua / chưa kiểm được: ...
```

- Ai sửa: gd-systems (luật), gd-level (level, curve), gd-ux (tutorial, text, UI), gd-tools (bug, game feel), gd-economy (booster, ads).
- Lỗi máy không bắt được nhưng người thấy: đề xuất biến thành cổng tự động (script review, test) cho lần sau.
- Báo GDM bằng khối `## Báo cáo cho GDM`, dòng đầu `ĐẠT` / `TRẢ LẠI` theo mục tiêu buổi.
