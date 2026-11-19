# Mẫu: phối hợp một đợt giao việc song song

Dùng khi GDM giao từ 2 việc độc lập trở lên cho các phiên vai của một sản phẩm cùng lúc. Chép sang `projects/<slug>/briefs/dot<N>-<chu-de>.md`, điền, rồi gửi mỗi vai một tin trỏ tới file này và brief riêng của vai. Rút từ một game chữ rơi (đợt 2 và 3: 5 vai chạy song song, tự gửi kết quả cho nhau).

---

# Đợt <N> <slug>: <chủ đề> (<ngày>)

Lead: "<lời Lead nguyên văn giao đợt này>"
Nguồn việc: <tab Main Task mục nào, hoặc DECISIONS mục nào>.

## Ai làm gì
| Mã | Việc | Agent | Phiên (id) | Ghi vào |
|---|---|---|---|---|
| GD-### | | gd-<vai> | local_... | |

## Ai đưa gì cho ai (gửi thẳng bằng SendMessage tới id phiên, không qua GDM)
- Vai chốt luật báo ngay các vai dùng luật đó (tutorial, level, kinh tế).
- Vai có dữ liệu đầu vào (danh sách lỗi, số liệu) báo ngay vai cần nó.
- Hai vai cùng chạm một mốc (mốc giới thiệu mechanic, tên cột data) thống nhất với nhau. Ai đổi phải báo người kia.
- Xong một file thì báo gd-qa kèm đường dẫn, gd-qa trả lỗi thẳng cho tác giả, tác giả sửa rồi báo lại gd-qa.
- Bất đồng hai vai không tự chốt được: báo GDM, ghi hai phương án và đề xuất.

## Luật chung
- Mỗi người chỉ sửa file của mình (cột Ghi vào). File chung do GDM giữ (Main Task, README thư mục sheet).
- Không sửa Google Sheet trừ vai được giao dán. GDM dán khi gd-qa chấm ĐẠT (`/gdd-sheet-sync`).
- Không thêm thứ Lead chưa duyệt. Điều chưa chốt đánh `[GIẢ ĐỊNH]`.
- Tiếng Việt có dấu, không gạch dài, không emoji. Soát bằng `node .claude/skills/gdd-v1/scripts/soat.mjs <file>`.
- Không commit. Xong báo GDM, dòng đầu `GD-### XONG|KẸT: <một câu>` kèm khối `## Báo cáo cho GDM`.

---

## Ghi chú cho GDM khi dùng mẫu
- Giao cả đợt trong một lượt. Sau đó chỉ đọc báo cáo, gỡ bất đồng, dán Sheet. Không làm thay việc của vai.
- App giới hạn khoảng 10 tin liên phiên liền nhau khi Lead chưa nhắn lại: gộp tin, để các vai tự nhắn nhau. Tin bị chặn thì gửi lại ngay sau tin kế của Lead.
- Lead đổi ý giữa đợt: ghi DECISIONS trước, rồi gửi một tin cập nhật cho mọi vai bị ảnh hưởng, ghi rõ "gộp vào việc đang làm".
- Báo cáo của vai có thể đến trước khi vai đọc tin cập nhật: đối chiếu giờ file và DECISIONS trước khi dán.
