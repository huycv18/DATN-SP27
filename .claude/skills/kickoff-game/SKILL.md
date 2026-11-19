---
name: kickoff-game
description: Mở một project game mới hoặc nhận một game đang làm vào phòng Game Designer - tạo projects/<slug>/ từ template, hỏi Lead đúng một lượt những gì không suy ra được, ghi DECISIONS, chọn pipeline theo loại việc (ý tưởng mới / tool level cho game có sẵn / bộ level / update GDD / mechanic mới / monetization), lập task GD-### và giao đợt đầu song song cho các vai trên đường găng. Dùng khi Lead đưa ý tưởng game mới, đưa repo hoặc sheet của game có sẵn, hoặc nói bắt đầu project.
argument-hint: <tên game hoặc ý tưởng> [--repo <đường dẫn>] [--sheet <link>] [--tham-chieu <game>]
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, Bash, Agent, AskUserQuestion
---

# /kickoff-game - mở project trong phòng

Bạn là GDM. Đầu vào: `$ARGUMENTS` và mọi đính kèm trong tin của Lead.

## 1. Đọc trước khi hỏi
- Đính kèm của Lead (ảnh, video, JSON, link sheet, repo). Repo có sẵn: đọc README, CLAUDE.md, GDD, thư mục level, tools, memory của project đó trong `~/.claude/projects/` nếu có.
- `docs/knowledge/00-cac-du-an-da-lam.md`: game này có họ hàng với dự án nào đã làm (cùng thể loại, cùng tool) để tái dùng.
- `docs/knowledge/95-cach-lead-lam-viec.md`.

## 2. Hỏi Lead đúng MỘT lượt
Chỉ hỏi những gì không suy ra được, mỗi câu kèm phương án nghiêng về, dưới 8 câu:
1. Loại việc chính (ý tưởng mới cần prototype / tool level cho game có sẵn / bộ level / update GDD cho sản phẩm có sẵn / mechanic mới / monetization).
2. Nền tảng và nơi chạy (web prototype một file / Unity production).
3. Game tham chiếu và quan hệ (cùng studio làm chuẩn / đối thủ chỉ lấy cấu trúc).
4. Độ khó đến từ đâu, theo lời Lead (2-4 thứ) và level nào trong bộ hiện có là "đúng nhất".
5. Mốc thời gian và mức chất lượng ("nhanh để test" hay "chất lượng, lâu cũng được"). GDD bản V0.5 thì mặc định khuôn 2 tab Gameplay và Main Task, ưu tiên tốc độ, viết bằng `/gdd-v05`, không cần hỏi.
6. Sheet GDD có sẵn không, quyền sửa ra sao.
7. Commit ở repo game: đứng tên ai, có Co-Authored-By không.
Câu nào đã có trong đính kèm thì không hỏi, chỉ ghi "Đã rõ: ...".

## 3. Dựng project
- Chép `projects/_template/` sang `projects/<slug>/`; điền `README.md` (repo, nền tảng, tham chiếu, sheet, trạng thái, lệnh hay dùng, điều Lead đã bác).
- Điền `projects/<slug>/CLAUDE.md` (gd-manager của sản phẩm): Sheet và gid, bảng nguồn hiện hành, điều Lead chốt riêng. Báo Lead mở phiên `gdm-<slug>` trong `projects/<slug>/` cho các việc sau kickoff.
- Ghi `projects/<slug>/DECISIONS.md` mục `<ngày> - Kickoff` với câu trả lời của Lead nguyên văn.
- Tạo task `GD-###` trong `production/BACKLOG.md` theo pipeline của loại việc (bảng "Pipeline theo loại việc" trong `CLAUDE.md`). Tiêu chí hoàn thành dạng "mở file X thấy Y / chạy Z ra W".

## 4. Đợt giao đầu (song song, chỉ việc trên đường găng)
Giao cho phiên vai dùng chung `gd-<vai>` (mở nếu chưa có, brief ghi slug), hoặc làm thẳng nếu là V0.5 sinh bằng khuôn, và một file phối hợp đợt theo `docs/process/templates/phoi-hop-dot.md` khi giao từ 2 vai trở lên.
Mặc định theo loại việc:
| Loại | Đợt đầu |
|---|---|
| Ý tưởng mới | gd-systems: luật lõi + bản đồ mechanic + mini GDD (`/gdd-v1 mini`); gd-research: hồ sơ game tham chiếu nếu có |
| Tool level cho game có sẵn | gd-systems: 5 chỗ ra giấy + Bước 0; gd-level: mô hình độ khó từ lời Lead + fixture |
| Bộ level | gd-level: bảng curve và mục tiêu, kiểm tool có sẵn |
| Update GDD sản phẩm có sẵn | gd-systems: `/gdd-v1 sheet` với hỏi đáp chốt luật từ demo |
| Mechanic mới | gd-systems: `/gdd-v1 he-thong`; gd-ux: tutorial nháp sau khi luật chốt |
| Monetization | gd-economy: bảng thua vì gì / đường cứu / ô bán được |

Giao bằng `Agent` tool: nếu phiên chưa nạp agent của repo, dùng `general-purpose` với model theo bảng trong CLAUDE.md và dòng đầu brief "Đọc `.claude/agents/<tên>.md` và làm theo vai đó". Brief 5 phần theo `docs/process/templates/brief.md`.

## 5. Báo Lead
Theo mẫu báo cáo trong CLAUDE.md: kết luận một câu, project đã dựng ở đâu, đợt đầu ai làm gì, câu hỏi còn treo (nếu có). Không dán output thô của agent.
