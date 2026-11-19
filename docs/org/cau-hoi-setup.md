# Câu hỏi setup phòng Game Designer (một lượt)

Skill `gd-department` hỏi người cài đúng một lượt, tối đa 6 câu. Câu nào cũng có mặc định: người cài bỏ trống hoặc trả "cứ làm" thì dùng mặc định và ghi vào hồ sơ. Câu 6 chỉ hỏi khi thư mục đích đã có phòng.

Trả lời điền vào `docs/org/ho-so-lead.md` (mẫu `docs/org/ho-so-lead.mau.md`). Cột Biến là tên biến trong file mẫu.

| # | Câu hỏi | Mặc định | Biến |
|---|---|---|---|
| 1 | Bạn tên gì, vai trò gì, ở studio nào? | Tên và vai trò lấy từ CLAUDE.md toàn cục hoặc memory nếu có, không có thì "Lead", vai trò "Game Designer". Studio lấy theo tên thư mục | `LEAD_TEN`, `LEAD_VAI_TRO`, `STUDIO` |
| 2 | Tài liệu viết bằng ngôn ngữ nào? Có cấm emoji, gạch dài, dấu chấm phẩy không? | Tiếng Việt có dấu, thuật ngữ kỹ thuật giữ tiếng Anh. Bật cả 3 luật cấm | `NGON_NGU`, `CAM_EMOJI`, `CAM_GACH_DAI`, `CAM_CHAM_PHAY` |
| 3 | Cài bộ vai gọn (systems, level, tools, qa) hay đủ 8 vai? | Gọn 4 vai. Vai còn thiếu thì việc chuyển theo bảng ở dưới | `BO_VAI` |
| 4 | GDD viết ở đâu: Google Sheet (V0.5 2 tab, V1 6 tab) hay chỉ markdown? | Sheet V0.5 cho game mới, markdown cho GDD hệ thống | `NOI_GDD` |
| 5 | Game đầu tiên là gì: tên, dạng Puzzle, repo hoặc link Sheet? | Chưa có, phòng chờ việc. Có game thì chạy `/kickoff-game` sau khi cài | `GAME_DAU` |
| 6 | Thư mục đích đã có phòng: cài sang tên khác hay đè lên có backup? | Cài sang tên khác | (không ghi vào hồ sơ) |

## Câu hỏi không hỏi lúc setup

- Gameplay, Win, Lose của từng game: hỏi khi viết GDD, bằng 3 câu đầu của `/gdd-v05` và `/gdd-v1`.
- Mechanic, luật lõi: chỉ chốt khi Lead nói bằng lời, không đặt mặc định.

## Vai còn thiếu thì việc chuyển cho ai

| Vai | Mức | Thiếu vai thì việc chuyển cho |
|---|---|---|
| gd-systems, gd-level, gd-tools, gd-qa | Mặc định | - |
| gd-ux, gd-research | Tùy chọn | gd-systems |
| gd-economy | Tùy chọn, chỉ sau khi loop lõi vui | gd-systems |
| gd-algo | Tùy chọn | gd-level đặc tả, gd-tools code |
