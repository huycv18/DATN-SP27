---
name: gd-department
description: Tự setup phòng Game Designer vận hành bằng đội agent cho mọi game Puzzle trên Claude Code - cài khung trung lập (CLAUDE.md vai GDM, agent, playbook, skill GDD và level, tri thức, khuôn project) vào một thư mục, hỏi người cài đúng một lượt, mặc định bộ gọn 4 vai (systems, level, tools, qa), cập nhật không đè file người dùng đã sửa, kiểm sau cài bằng một lệnh in bảng. Dùng khi người dùng gõ /gd-department, muốn "setup phòng Game Designer", "cài phòng GD", "cập nhật phòng", "kiểm phòng", hoặc cần bật thêm một vai (mo-vai).
argument-hint: cai | cap-nhat | kiem | mo-vai <vai>
user-invocable: true
---

# gd-department

Một skill, bốn lệnh. Mọi việc ghi file do `scripts/setup.mjs` làm (Node 18 trở lên), Claude chỉ hỏi, gọi lệnh và đọc bảng kết quả.
`SKILL` dưới đây là thư mục chứa file này. Gói đủ có `SKILL/assets/khung/` và `SKILL/assets/manifest.json`.
Ở repo nguồn của phòng, gói chưa có: chạy `node tools/sinh-khung-phong.mjs` trước, rồi dùng `dist/gd-department/` làm `SKILL`.

| Lệnh | Làm gì |
|---|---|
| `cai` | Cài phòng mới vào một thư mục |
| `cap-nhat` | Đưa khung mới vào phòng đã cài, không đè file người dùng sửa |
| `kiem` | Bảng kiểm sau cài, thoát 1 khi một dòng HỎNG |
| `mo-vai <vai>` | Bật agent một vai đang để dành, chỉ khi có việc cho vai đó |

## Luật chung

- Kiểm Node trước mọi lệnh: `node --version`. Thiếu hoặc dưới 18 thì dừng, báo người dùng cài Node LTS, nói rõ chưa ghi file nào.
- Python 3 không bắt buộc. Thiếu thì `kiem` ghi BỎ QUA cho selftest Python, không báo ĐẠT thay.
- Mọi lệnh ghi đều chạy thử trước (không có `--ghi`), đọc bảng cho người dùng, rồi mới chạy lại với `--ghi`.
- Không tự mở phiên vai lúc cài. Không cài vào `~/.claude`. Không push, không tải lên đâu.
- Đường dẫn có dấu cách: luôn bọc ngoặc kép.

## cai

1. Chọn thư mục đích: người dùng nêu thì dùng, không thì thư mục đang mở. Không tạo thêm một tầng thư mục con.
   Thư mục đã có `.gd-department/da-cai.json` thì chuyển sang `cap-nhat`.
2. Đọc `SKILL/assets/khung/docs/org/cau-hoi-setup.md`. Hỏi người dùng đúng một lượt, gộp mọi câu trong bảng của file đó vào một tin, mỗi câu kèm mặc định. Câu 6 chỉ hỏi khi thư mục đích đã có phòng.
   Người dùng trả "cứ làm" hoặc bỏ trống câu nào thì dùng mặc định của câu đó. Không hỏi lượt thứ hai.
3. Ghi câu trả lời ra file JSON tạm (ngoài thư mục đích), khóa là tên biến ở cột Biến, ví dụ `{"LEAD_TEN": "Lan", "STUDIO": "Studio X", "BO_VAI": "gọn", ...}`.
   Đủ mọi biến mà `SKILL/assets/manifest.json` liệt kê ở `bien`. Giá trị một dòng, không có ký tự `|`.
4. `node "SKILL/scripts/setup.mjs" cai --dich "<đích>" --tra-loi "<json>"` (chạy thử), rồi thêm `--ghi`.
   File trùng tên đã có trong thư mục đích không bị đè: bản của phòng ghi ra `<file>.moi`, báo người dùng gộp tay.
5. `node "SKILL/scripts/setup.mjs" kiem --dich "<đích>"`. Dòng HỎNG thì báo nguyên dòng, không tự chấm đạt.
6. Có công cụ đổi tên phiên thì đổi phiên hiện tại thành `GDM`. Báo người dùng: agent và CLAUDE.md mới chỉ nạp ở phiên mở trong thư mục đích, mở phiên mới ở đó. Có game đầu tiên thì gọi `/kickoff-game` ở phiên mới.

## cap-nhat

1. Cần gói mới hơn bản đã cài (bản trong `.claude/skills/gd-department/` của phòng không chứa khung).
2. `node "SKILL/scripts/setup.mjs" cap-nhat --dich "<phòng>"` (chạy thử). Đọc cho người dùng: số file thay, số `.moi`, số file khung đã bỏ.
3. Người dùng đồng ý thì thêm `--ghi`. File bị thay được backup ở `.gd-department/backup/<thời điểm>/`.
4. Liệt kê các `<file>.moi` để người dùng gộp tay. Không đụng `projects/`, `production/`, mọi `DECISIONS.md`, `BACKLOG.md`. File khung đã bỏ chỉ báo, không xóa.
5. Gói mới có biến mới thì `setup.mjs` dừng và nêu tên biến: hỏi người dùng đúng câu đó, ghi JSON, chạy lại với `--tra-loi`.

## kiem

`node "SKILL/scripts/setup.mjs" kiem --dich "<phòng>"`. In bảng, mỗi dòng có số. Dòng "Agent nạp thật" là bước tay: ở phiên mới, gọi Agent `gd-qa` (sonnet) hỏi một câu, trả lời được là đạt.

## mo-vai <vai>

Bộ gọn cài 4 agent vào `.claude/agents/`, 4 vai còn lại để dành ở `.gd-department/vai-them/`. Khi có việc thật cho một vai thiếu:
`node "SKILL/scripts/setup.mjs" mo-vai <vai> --dich "<phòng>"` (vai viết `ux` hoặc `gd-ux` đều được).
Agent chỉ nạp ở phiên mới. Mở phiên tên `gd-<vai>` hoặc gọi Agent với `subagent_type` đó. Chưa có việc thì không mở.

## Nguồn khung

Gói sinh bằng `tools/sinh-khung-phong.mjs` ở repo nguồn: chỉ lấy file trong danh sách cho phép, đếm agent và skill theo đĩa, cổng rò rỉ (tên người, studio, tên game nội bộ, đường dẫn máy, link Sheet) phải ra 0 dòng mới ghi. Không sửa tay `assets/khung/`.
Selftest của skill này: `node .claude/skills/gd-department/scripts/selftest.mjs` (chỉ chạy ở repo nguồn).
