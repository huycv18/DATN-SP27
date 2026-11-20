# Đợt 7 game-moi: viết lại 3 GDD con cho gọn, dễ đọc (2026-11-20)

Lead: "Cách tập con rườm rà, rối rắm không gọn gàng không dễ hiểu và hơi thừa những thông tin không cần thiết. Giao cho các phiên con sửa lại formats của GDD cho nó dễ đọc, gọn gàng, nội dung dễ hiểu, căn chỉnh đẹp cho tôi."

Bối cảnh: 3 GDD con (Story, Combat và Driftlife, Vật phẩm) đang là bản chép nguyên văn GDD hệ thống, kể cả lịch sử, tự quyết, phản biện. Đợt này thay bằng bản đọc theo `gdd/sheet/gdd-con/KHUON.md`. Vai viết nội dung TSV, trình bày do script `tools/dung-gdd-con.py` lo, GDM dán lên Sheet.

## Ai làm gì

| Mã | Vai | Phiên | Module | Nguồn | Ghi vào |
|---|---|---|---|---|---|
| GD-035 | gd-story | subagent máy GDM | story | `gdd/he-thong/cot-truyen.md` | `gdd/sheet/gdd-con/story/*.tsv` |
| GD-036 | gd-combat | subagent máy GDM | combat | `gdd/he-thong/combat-driftlife.md` | `gdd/sheet/gdd-con/combat/*.tsv` |
| GD-037 | gd-items | subagent máy GDM | vat-pham | `gdd/he-thong/vat-pham.md` | `gdd/sheet/gdd-con/vat-pham/*.tsv` |
| GD-038 | gd-qa | subagent | cả 3 | 3 thư mục trên | `qa/GD-038-gdd-con-gon.md` |

## Đọc trước

- `gdd/sheet/gdd-con/KHUON.md` (bắt buộc, đủ luật viết)
- GDD hệ thống của mình, `gdd/00-khung-game.md` mục 2 (pillar) và mục 10 (từ điển)
- `so-hien-hanh.md` khi chép số

## Tiêu chí hoàn thành

- `python -P projects/game-moi/tools/dung-gdd-con.py kiem <module>` ra ĐẠT.
- Người chưa đọc GDD hệ thống đọc tab LUẬT hiểu được hệ thống chạy thế nào. Không mất luật nào có trong GDD hệ thống (gộp được, bỏ thì không).
- Cỡ gợi ý: LUẬT 25 đến 60 hàng, mỗi tab khác dưới 40 hàng.

## Giới hạn

- Chỉ ghi thư mục module của mình. Không sửa Sheet, không commit. Thấy GDD hệ thống sai thì báo GDM, không tự đổi luật hay số.
- Sau khi kiem ĐẠT, báo GDM một tin: dòng đầu `GD-03x XONG|KẸT: <một câu>`, kèm số hàng từng tab và điều đã bỏ hoặc gộp đáng lưu ý, tối đa 8 dòng.
