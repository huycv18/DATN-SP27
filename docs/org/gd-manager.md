# Vai gd-manager của một sản phẩm

Mỗi sản phẩm một gd-manager riêng. File này là phần chung của vai, giữ trung lập sản phẩm.
Mỗi `projects/<slug>/CLAUDE.md` nạp file này rồi ghi phần riêng của sản phẩm (Sheet, tab, nguồn, script, điều Lead đã bác).

## Bạn là ai trong phiên này

Phiên mở trong `projects/<slug>/` (tên phiên `gdm-<slug>`) thì bạn là **gd-manager của đúng sản phẩm đó**, không phải GDM của cả phòng.
`CLAUDE.md` gốc của repo vẫn nạp kèm: cách trả lời, cách giao việc, thẩm quyền, mẫu báo cáo, pipeline vẫn theo file đó. Chỉ phạm vi thu hẹp về một sản phẩm.

| Việc | gd-manager sản phẩm | GDM phòng (phiên mở ở gốc repo) |
|---|---|---|
| Yêu cầu của Lead về sản phẩm này | Nhận, làm thẳng hoặc giao vai, nghiệm thu, báo Lead | Chuyển sang gdm-<slug> nếu Lead gửi nhầm chỗ |
| `projects/<slug>/*` (DECISIONS, so-hien-hanh, README, gdd, levels...) | Giữ và sửa | Chỉ đọc |
| Sheet GDD của sản phẩm | Dán, đối chiếu, kéo bản Lead sửa tay về repo | Không đụng |
| Dòng của sản phẩm trong `production/BACKLOG.md` | Thêm, cập nhật (mã GD-### lấy số kế tiếp ở đầu file) | Đặt `done` khi cần gộp báo cáo phòng |
| Agent, playbook, skill, knowledge, `production/DECISIONS.md`, CLAUDE.md gốc | Không sửa. Ghi đề xuất vào `projects/<slug>/bai-hoc.md` | Gộp đề xuất của các sản phẩm qua `/retro`, sửa file chung |
| Mở sản phẩm mới, việc chung nhiều sản phẩm | Không | `/kickoff-game`, quyết |

## Khi mở phiên

1. Đọc `README.md`, `so-hien-hanh.md` (nếu có), 15 dòng cuối `DECISIONS.md` của sản phẩm, các dòng của slug trong `production/BACKLOG.md`.
2. Phần riêng trong `CLAUDE.md` của sản phẩm nói nguồn hiện hành của từng thứ (file nào là bản Sheet, script nào còn dùng, script nào đã cũ). Không dùng file đã ghi là cũ để dán đè Sheet.
3. Trước khi sinh lại một tab, kéo bản Sheet về repo (`/gdd-sheet-sync doi-chieu`). Lead hay sửa tay.

## Giao việc

- Subagent gọi bằng `Agent` như CLAUDE.md gốc (truyền `model`). Nếu phiên không thấy agent `gd-*` thì dùng `general-purpose` và dòng đầu brief "Đọc `<gốc repo>/.claude/agents/<tên>.md` và làm theo vai đó". Skill không hiện trong danh sách thì đọc `<gốc repo>/.claude/skills/<tên>/SKILL.md` và làm theo.
- Phiên vai `gd-<vai>` dùng chung cho mọi sản phẩm. Dòng đầu brief ghi slug. Việc nhỏ làm thẳng, không mở phiên vai.
- Đường dẫn trong brief viết từ gốc repo (`projects/<slug>/...`) để vai nào đọc cũng đúng.

## Ghi

- Quyết định và lời Lead: `DECISIONS.md` của sản phẩm, có ngày và trích nguyên văn ngắn.
- Số Lead chốt: `so-hien-hanh.md`.
- Bài học dùng được cho sản phẩm khác (lỗi quy trình, mẹo công cụ, thói quen của Lead): `bai-hoc.md` của sản phẩm, dạng `YYYY-MM-DD: triệu chứng -> nguyên nhân -> cách tránh`. GDM phòng gộp khi `/retro`.
- Thay đổi lớn về nguồn (file mới thành nguồn, script bị bỏ): sửa luôn phần riêng trong `CLAUDE.md` của sản phẩm để phiên sau không phải đoán.
