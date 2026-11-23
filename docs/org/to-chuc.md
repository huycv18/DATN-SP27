# Tổ chức phòng Game Designer

Phòng làm game indie PC The Novent. Bộ vai theo hệ thống của game, model, tab Sheet mỗi vai giữ, pipeline theo loại việc và bảng thẩm quyền: `CLAUDE.md` các mục "Hệ thống phiên", "Pipeline theo loại việc", "Thẩm quyền". File này chỉ giữ phần luật chung không lặp ở đó.

## 1. Sơ đồ

```
Lead  <->  GDM (phiên chính, kiêm gd-manager của game đang làm)
                |
   gd-story, gd-character, gd-combat, gd-items, gd-world,
   gd-quan, gd-economy, gd-ux, gd-tech, gd-qa (độc lập, nghiệm thu)
```

Lead chỉ nói với GDM. GDM không tự làm việc chuyên môn dài (GDD hệ thống, sim, tool). GDM giao brief, nghiệm thu, tổng hợp, ghi DECISIONS. Việc một vài tool call (trả lời câu hỏi từ file, sửa một ô) GDM làm thẳng.

Tên gọn: tiền tố chung `gd-` cộng một từ, trùng tên phiên vai. Vai để dành bật bằng `/gd-department mo-vai <vai>` khi có việc thật.

Khi phòng có game thứ hai: mỗi game một phiên `gdm-<slug>`, vai và ranh giới với GDM phòng ở `docs/org/gd-manager.md`.

## 2. Sở hữu file

Mỗi vai ghi GDD hệ thống của mình ở `projects/<slug>/gdd/he-thong/` và TSV các tab mình giữ ở `projects/<slug>/gdd/sheet/`. Chi tiết được ghi và không được ghi nằm trong prompt từng vai `.claude/agents/gd-<vai>.md`. GDM ghi `production/*`, `docs/*`, `.claude/*`, file chung của game (`00-khung-game.md`, `DECISIONS.md`, `so-hien-hanh.md`) và dán Sheet. gd-qa không sửa GDD, sim, tool của vai khác.

## 3. Vòng đời một việc

1. Lead nêu yêu cầu (tin ngắn, có thể kèm ảnh, video, JSON, link sheet). GDM đọc hết đính kèm trước khi hỏi.
2. GDM phân loại: câu hỏi (trả lời từ file) / việc nhỏ (làm thẳng) / việc có pipeline (tạo task `GD-###` trong `production/BACKLOG.md`, giao brief).
3. Agent làm, ghi file sớm, trả `## Báo cáo cho GDM`.
4. GDM mở file kiểm chứng. Việc có đầu ra nhìn thấy (GDD, sim, tool, prototype) đi qua gd-qa trước khi báo Lead.
5. GDM báo Lead theo mẫu. Cần Lead quyết thì một câu hỏi kèm phương án nghiêng về.
6. Quyết định ghi ngay khi quyết (ngày, ai, lý do, hệ quả): của một game vào `projects/<slug>/DECISIONS.md`, của cả phòng vào `production/DECISIONS.md`.
7. Bài học sau mỗi mốc: sửa playbook `docs/playbooks/indie/`, prompt agent, ghi `production/DECISIONS.md`.

## 4. Model, song song

- Model từng vai theo bảng "Hệ thống phiên" trong `CLAUDE.md`. Không Fable cho agent. Lead từng dừng cả đội vì tốn token.
- Chỉ giao việc trên đường găng. Gộp nhiều việc tuần tự cho cùng vai vào một brief. Báo cáo ≤ 15 dòng.
- Một vai giữ luật và tab của một hệ thống tại một thời điểm. Vai khác báo trước khi đụng.

## 5. Ranh giới an toàn và IP

- Không dùng bản crack, không lấy asset game khác, không vẽ lại logo/mascot game khác dù Lead gửi ảnh mẫu. Nói một câu rồi đưa phương án gốc.
- Tài sản tham chiếu để ngoài repo. Thư mục tham chiếu có `.gitignore` và hook chặn.
- Backup có timestamp trước khi migrate hoặc ghi đè dữ liệu. Dry-run. Không xóa thứ gì khi thư mục không phải git mà chưa xác nhận phạm vi.
- Cổng riêng cho preview của Claude. Dừng tiến trình theo PID. Không chụp toàn màn hình máy Lead.
- Commit đứng tên Lead, không Co-Authored-By (`CLAUDE.md`).
