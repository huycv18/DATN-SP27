# Đợt 6 game-moi: áp phản diện mới của Lead (2026-11-20)

Nguồn: Lead sửa phản diện, nguyên văn cuối `story/lead-y-tuong-2026-11-20.md`, tóm tắt ở `DECISIONS.md` mục cùng tên. Khung sửa lần 6 (`gdd/00-khung-game.md`: B3 đến B11, K10, mục tiêu theo chặng, chương 3 đến 5). GDM tự quyết phần còn lại: `log-gdm-tu-quyet.md` Phần 8 (dòng 84 đến 92).

Tóm tắt: X là tên độc tài đã đảo chính trên hành tinh của chủng tộc phản diện, lật người cai trị cũ (người chủ trương chung sống hòa bình). X ghét loài người vì hận thù cá nhân (cha hy sinh trong chiến tranh vũ trụ), cái nhìn "loài người tham lam" là phiến diện. X phát tín hiệu giả Solace để dụ và phục kích đoàn di cư. Chế độ và quân của X tên The Wardens. Y là con gái người cai trị cũ, giả làm thương nhân. Người chơi cứu Y (cuối chương 3), hộ tống Y và nối tình báo qua ca cảng (chương 4, 5), đánh Warden Rig khi cách mạng nổ ra. Y lên nắm quyền, trao tọa độ hành tinh có sự sống thật, Ember rời neo lên đường.

Không thêm hệ thống mới (log 87). Hộ tống dùng sẵn bay, kéo, combat trong map nhánh. Nối tình báo là loại kiện có tin mật trong ca cảng.

## Thứ tự

1. gd-story viết trước, trong 30 phút đầu ghi mục "Tên mới" vào đầu `cot-truyen.md` (tên chủng tộc, X, Y, Y giả làm thương nhân nào, căn cứ của Y, mạng lưới cách mạng) và nhắn một tin cho gd-character (qua GDM), gd-combat, gd-world, gd-quan, gd-items.
2. Các vai còn lại sửa phần chạm vào, dùng tên của gd-story.
3. Mỗi vai sinh lại TSV tab mình giữ và dán lại tab Sheet bị đổi, đối chiếu bằng `node projects/game-moi/tools/doi-chieu-sheet.mjs --tab "<Tab>"`.
4. gd-qa chấm lại phần đã đổi.

## Việc từng vai

| Vai | File | Việc | Tab dán lại |
|---|---|---|---|
| gd-story | `cot-truyen.md` | Viết lại phản diện theo lời Lead: bối cảnh chiến tranh vũ trụ, người cai trị cũ, X và động cơ, đảo chính, hành tinh dưới X, Y và mạng lưới. Chương 3 đến 5 viết lại theo khung mới (cứu Y là mốc đóng chương 3, chương 4 lộ Solace là mồi và Y kể chuyện đảo chính, chương 5 hộ tống, nối tình báo, Warden Rig, Y trao tọa độ, rời neo). Bỏ "tham lam hơn loài người", bỏ móc "bản khảo sát bị giấu". Cú lật Driftlife theo B6 mới. Cảnh kết theo B9. Hồ sơ X, Y. Tra trùng tên X, Y | GAME STORY |
| gd-character | `ho-so-nhan-vat.md`, `nguoi-choi.md` (chỉ chỗ nhắc phản diện) | Hồ sơ X và Y (vai, ngoại hình, silhouette, màu, biểu cảm, yêu cầu art), sửa Serith nếu gd-story thay bằng X | Player |
| gd-combat | `combat-driftlife.md` | Đơn vị The Wardens là quân của X. Toán bắt cóc Y ở chương 3. Trận Warden Rig là đánh đầu não của X khi cách mạng nổ ra. Boss cuối theo tên gd-story. Hộ tống Y trong combat: Y có bị nhắm không, hết Oxy hay máu thì sao (dùng luật sẵn có) | Enemy |
| gd-world | `map.md` | Map nhánh nơi cứu Y (dùng lại map nhánh có sẵn nếu được), đường hộ tống Y về căn cứ, căn cứ của Y nếu là nơi người chơi vào được. Warden Rig là đầu não của X ở bãi vỡ | Zone |
| gd-quan | `tram-va-cang.md` | Y là thương nhân ghé cảng trước khi lộ danh tính. Kiện tin mật cho mạng lưới ở chương 4, 5 (một loại đơn, dùng luật ca cảng sẵn có). Maro là gián điệp của X săn Y | Customer |
| gd-items | `vat-pham.md` | Thêm vật nhiệm vụ và kiện tin mật nếu gd-story, gd-quan cần, kèm ID | ITEM LIST, Recipe nếu đổi |
| gd-ux, gd-economy, gd-tech | | Chỉ sửa nếu file mình nhắc phản diện cũ (grep "Hollower", "tham lam hơn", "bản khảo sát bị giấu", tên Serith nếu bị đổi). gd-tech thêm các chữ cũ đó vào validator | Tab mình nếu đổi |
| gd-qa | `qa/GD-033-phan-dien.md` | Chấm lại phần đổi: khớp lời Lead từng ý, không còn ý cũ, tên thống nhất giữa các file và tab | |

Văn phong, nhãn MVP, Điểm tự quyết, phản biện: như các đợt trước. Không commit. Báo GDM `GD-033 <vai> XONG|KẸT`, tối đa 6 dòng.
