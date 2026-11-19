# Kickoff Space Salvage (2026-11-19)

**Kết luận:** Đã dựng `projects/space-salvage/` và đề xuất đợt 1 gồm 6 việc cho 4 vai, chưa giao, chờ Lead duyệt.

## Kiểm phòng (bước tay của `/gd-department kiem`)
gd-qa (sonnet) trả lời đúng vai: chấm ĐẠT / TRẢ LẠI / BLOCKED theo mẫu, không tự sửa GDD. Kết quả: ĐẠT.

## Hiện trạng Sheet GDD
- Bản v0.1.0 ngày 19/10/2026, 17 tab đều có nội dung, 26 hệ thống ở SYSTEMS.
- Phần lớn số ở trạng thái "Đề xuất - chưa chốt". Chỉ 2 dòng "Đã thống nhất" ở ECONOMIC (₵ duy nhất, nhiên liệu theo tầng).
- Mục MÔ PHỎNG LỢI NHUẬN MỘT NGÀY ở ECONOMIC là ước tính tay, chưa có sim.
- Mâu thuẫn phạm vi: MVP ghi "ca bán 1 quầy" nhưng 7 công thức gồm 4 món + 3 đồ độ. Lead để sau.
- Câu còn mở trong SCOPE & RISKS: tên game, cốt truyện, nhịp ngày (hạn trả nợ hay tự do), ca bán điều khiển nhân vật hay click.

## Lead trả lời
| Câu | Trả lời |
|---|---|
| Mốc GDD MVP | Chất lượng, không gấp |
| Quyền Sheet | Dán thẳng sau QA ĐẠT |
| Prototype jetpack | Có, web 1 file |
| MVP 1 hay 2 quầy | Chưa chốt, để sau |

## Đã dựng
- `projects/space-salvage/README.md`: Sheet, bảng gid và vai giữ tab, phạm vi MVP, nguồn hiện hành.
- `projects/space-salvage/DECISIONS.md`: mục Kickoff, lời Lead nguyên văn.
- `projects/space-salvage/so-hien-hanh.md`: chỉ phạm vi và luật đã thống nhất, chưa có số cân bằng nào chốt.
- `projects/space-salvage/bai-hoc.md`: 3 bài học đầu.
- `production/BACKLOG.md`: GD-001 tới GD-006.
- Không tạo `projects/space-salvage/CLAUDE.md`: GDM phòng kiêm gd-manager, file đó sẽ nạp sai vai cho phiên vai đọc thư mục này.

## Đề xuất đợt 1 (chi tiết và brief: `projects/space-salvage/briefs/dot1-nen-mvp.md`)
| Mã | Vai | Việc |
|---|---|---|
| GD-001 | gd-tools | Kéo 17 tab về repo + validator chéo bản đầu |
| GD-002 | gd-tools | Prototype jetpack web 1 file có thanh chỉnh |
| GD-003 | gd-systems | Luật lõi MVP + bản đồ hệ thống MVP + câu hỏi chốt luật lượt 1 |
| GD-004 | gd-systems | GDD jetpack + năng lượng bộ đồ + cứu hộ và nợ |
| GD-005 | gd-economy | Source / sink ₵ MVP + sim 3 kịch bản |
| GD-006 | gd-qa | QA cuốn chiếu |

gd-level và gd-ux chưa giao: chờ luật MVP của GD-003. Hệ thống quán chưa vào đợt 1 vì câu quầy còn treo.
