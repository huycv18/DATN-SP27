# Kho tri thức phòng Game Designer

Tổng hợp từ 33 thư mục project Claude Code của Lead (07/2026 - 20/10/2026), khoảng 1,3 GB transcript, 60 file memory, 3 skill. Mỗi file dưới đây là bản chắt lọc, bằng chứng chi tiết (số liệu, ngày, trích lời) nằm ở `nguon/`.

Bản cài bằng skill `gd-department` không kèm `nguon/`, `docs/nang-luc/`, `tools/` và repo game cũ. Đường dẫn tới các chỗ đó trong knowledge chỉ là nguồn của ca, đọc được khi có repo gốc của phòng.

| File | Nội dung | Vai đọc bắt buộc |
|---|---|---|
| `00-cac-du-an-da-lam.md` | Danh mục 20 dự án, thể loại, trạng thái, tri thức chính, đường dẫn | GDM, mọi vai khi vào project mới |
| `10-nguyen-tac-thiet-ke.md` | Luật lõi, mechanic, bộ đệm và số đẹp, chứng minh bằng máy, tham chiếu và IP, ưu tiên casual | gd-systems, GDM |
| `15-dang-puzzle-va-nguon-kho.md` | Bảng mỗi dạng Puzzle: vòng chơi, nguồn khó, trục khó, núm, kiểu solver hoặc bot, ca của phòng. Chọn bot theo dạng | gd-systems, gd-level, GDM khi mở game dạng mới |
| `20-do-kho-va-can-bang.md` | Định nghĩa độ khó, hai dạng thang, bot, hiệu chuẩn, đòn bẩy, curve, nhịp trong ván, economy bằng sim | gd-level, gd-tools, gd-research |
| `25-level-design.md` | Thứ tự dựng bộ level, vai trò level, mở màn, thẩm mỹ bàn, nội dung, cổng soi mắt, bàn giao Unity | gd-level, gd-qa |
| `30-tool-dung-level.md` | 5 chỗ phụ thuộc game, luật kiến trúc, 4 tầng kiểm, chuẩn editor, tài sản tái dùng, lỗi im lặng | gd-tools |
| `40-prototype-nhanh.md` | Hợp đồng đầu ra, các phase, âm thanh, game feel, lỗi cấm lặp | gd-tools |
| `50-gdd-va-tai-lieu.md` | Hai dạng GDD, cấu trúc Sheet chuẩn, luật viết, quy trình update, thao tác Sheet | gd-systems, GDM |
| `60-economy-meta-monetization.md` | Quyết định đã chốt (booster, revive, ads, ghế), nguyên tắc, economy tối giản | gd-economy |
| `70-ux-ftue.md` | Onboarding chuẩn, tầm nhìn người chơi, 5 trạng thái, điều Lead chấm bằng mắt, checklist | gd-ux |
| `80-phan-tich-game-tham-chieu.md` | 4 kiểu tiếp cận, thứ bậc nguồn, sản phẩm phân tích, bài học phương pháp | gd-research |
| `85-ra-soat-skill-gd.md` | Rà soát skill liên quan GD và viết GDD trên máy và trong repo: cái dùng được, cái mượn, cái thiếu, 5 khuôn GDD đang tồn tại, nguyên tắc chọn | GDM, gd-systems |
| `90-bai-hoc.md` | Bảng triệu chứng -> nguyên nhân -> cách tránh xuyên dự án | GDM trước khi giao việc, gd-qa |
| `95-cach-lead-lam-viec.md` | Giao tiếp, nhịp và quyền, điều khó chịu, điều chấp nhận, môi trường máy | GDM, mọi vai |
| `95-cach-lead-lam-viec.mau.md` | Mẫu trống hồ sơ Lead cùng các mục của file 95, dùng khi dựng phòng mới | GDM khi setup phòng |
| `nguon/*.md` | 5 bản nghiên cứu gốc theo nhóm dự án (game-tile-chu-a, level-tools, sort-prototype, misc-research, game-tycoon-a-studio) | tra cứu khi cần bằng chứng |

Cách dùng: GDM đọc `90` và `95` khi mở phiên, brief cho agent trỏ đúng file theo bảng trên thay vì chép lại. Bài học mới sau mỗi mốc ghi vào `90` và playbook của vai.
