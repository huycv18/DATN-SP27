# Đợt 5 game-moi: chuyển GDD sang 25 tab Sheet và dán (2026-11-20)

Lead: "đây là Link GDD của chúng ta" (link ở `so-hien-hanh.md`). Lead đã giao toàn quyền cho GDM hoàn thiện GDD. gd-qa đã chấm ĐẠT các GDD hệ thống (GD-031), validator 0 lỗi.
Sheet ID: `1kGdCePi8LDK1sGxfH7FK5sswVTgsXO71N4QyjzZP7Bs`. Mỗi tab đã có dòng 1 (tiêu đề tab) và dòng 2 (header cột) định dạng sẵn, từ dòng 3 trở đi trống (trừ OVERVIEW còn nội dung Space Salvage cũ, GDM thay).

## Ai giữ tab nào

| Vai | Tab | Nguồn |
|---|---|---|
| GDM | OVERVIEW, CORE LOOP, Day, TRACKING, Assets, AUDIO ASSETS LIST | `gdd/00-khung-game.md`, mục 7 của các GDD |
| gd-story | GAME STORY | `cot-truyen.md` |
| gd-character | Player | `nguoi-choi.md`, `ho-so-nhan-vat.md` |
| gd-combat | Enemy | `combat-driftlife.md` |
| gd-items | Salvage, ITEM LIST, Recipe | `vat-pham.md` |
| gd-world | Zone | `map.md` |
| gd-quan | Customer | `tram-va-cang.md` |
| gd-economy | ECONOMIC, Shop, Upgrade, PROCESSING, Balance Sheet | `kinh-te-tien-trinh.md` |
| gd-ux | WIREFRAME, Tutorials | `ux-ui.md` |
| gd-tech | Event Tracking | `ky-thuat.md` |
| gd-qa | MVP Criteria Checklist | `qa/mvp-criteria-checklist.md` |

Playtest Report và Bugs Report để trống tới khi có build.

## Việc của mỗi vai, một lượt

1. Đọc khuôn `docs/process/templates/gdd-sheet-khuon-indie.md` (mục 4 khuôn khối, mục 5 bảng dữ liệu, mục 6 tab sản xuất, mục 7 lỗi phải tránh) và xem header dòng 2 đang có của tab mình trên Sheet (connector Google Sheets, `get_values` vùng `<Tab>!A1:Z2`).
2. Sinh `projects/game-moi/gdd/sheet/<Tab>.tsv` từ GDD của mình: dòng đầu là header cột, các dòng sau là dữ liệu. Sinh bằng script từ bảng trong GDD nếu được, để GDD và Sheet không lệch. Một số chỉ ghi một nơi: giá chỉ ở Shop và Upgrade, tab khác trỏ về. Issue ID duy nhất. Nội dung cả game, cột hoặc ghi chú có nhãn MVP hay Sau MVP. Văn phong như GDD. Tên game dùng mã tạm EMBER. Đơn vị tiền là Tally, không còn ₵.
3. Tab là bản để dev, art đọc: đủ luật và số để làm việc, không chép cả GDD. Ô cuối hoặc cột Ref ghi đường dẫn file GDD trong repo cho bản đủ.
4. Dán lên Sheet bằng connector Google Sheets: `update_values` vùng `<Tab>!A2` (header mới nếu cần đổi, rồi dữ liệu). Không đụng dòng 1, không đụng tab khác, không đụng 17 tab `v0.1` ẩn. Tab còn dòng cũ thừa bên dưới thì xóa vùng thừa bằng `batch_clear_values`.
5. Đối chiếu: đọc lại bằng `get_values` và so từng dòng với TSV (script hash), 0 dòng lệch. Phiên không có connector thì dùng `/gdd-sheet-sync o` qua trình duyệt. Không dán được bằng cách nào thì báo KẸT, để TSV lại, GDM dán.
6. Không commit. Báo GDM `GD-032 <vai> XONG|KẸT`: mỗi tab một dòng (số dòng dữ liệu, số dòng lệch khi đối chiếu).
