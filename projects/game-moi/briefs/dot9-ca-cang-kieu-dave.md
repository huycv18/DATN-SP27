# Đợt 9 game-moi: ca cảng theo khung bán sushi của Dave (2026-11-20)

Lead chốt luật mới của ca cảng (DECISIONS mục "Ca cảng theo khung Dave (đợt 9)"). Nguồn luật và số: `de-xuat-ca-cang-kieu-dave.md` mục 2 tới 5b, khung `gdd/00-khung-game.md` K13, C8, C9, mục 9, mục 10. Demo chạy được: `tools/prototype/ca-cang-dave.html` (mở bằng trình duyệt, `window.__ca()` trả trạng thái, các hàm `update`, `interact`, `startShift` là hàm toàn cục).

Lead còn nói "cần làm cho nó tốt hơn": mỗi vai được đề xuất cải thiện trong phần của mình, ghi rõ là đề xuất trong báo cáo, không tự đổi luật lõi K13.

## Ai làm gì

| Mã | Vai | Model | Đợt | Việc | Ghi vào |
|---|---|---|---|---|---|
| GD-051 | gd-quan | opus | A | Viết lại toàn bộ phần ca cảng của GDD trạm và cảng theo luật mới | `gdd/he-thong/tram-va-cang.md`, `gdd/sheet/Customer.tsv` |
| GD-052 | gd-items | sonnet | A | Đơn vị thùng, bỏ cỡ kiện và tốc độ mang, đổi công thức đóng kiện thành đóng thùng tự động, kiện tinh vẫn chế ở xưởng trước ca | `gdd/he-thong/vat-pham.md`, `gdd/sheet/ITEM LIST.tsv`, `gdd/sheet/Recipe.tsv` |
| GD-053 | gd-ux | sonnet | A | Màn lập danh mục, HUD ca cảng, bong bóng gọi món, thanh kiên nhẫn, bơm khí, bảng kết ca, tutorial ca đầu tiên | `gdd/he-thong/ux-ui.md`, `gdd/sheet/WIREFRAME.tsv`, `gdd/sheet/Tutorials.tsv` |
| GD-054 | gd-tech | sonnet | A | Viết lại sim ca cảng theo luật mới, 1 tới 4 người, đo số tàu theo số người để rảnh không quá 30% ở trễ 2 giây. Event tracking ca cảng mới | `tools/sim-ca-cang.mjs`, `tools/tham-so/ca-cang.json`, `tools/ket-qua/sim-ca-cang.md`, `gdd/he-thong/ky-thuat.md`, `gdd/sheet/Event Tracking.tsv` |
| GD-055 | gd-economy | opus | B, sau GD-052 và GD-054 | Giá thùng, giãn giá chương 1 để lập danh mục có thế cân, tip, Tally một ca giữ mốc 60% hai chuyến, ngưỡng Hạng cảng theo điểm mới, sim kinh tế chạy lại | `gdd/he-thong/kinh-te-tien-trinh.md`, `sim/economy/`, tab ECONOMIC, Balance Sheet, PROCESSING nếu chạm |
| GD-056 | gd-qa | sonnet | C, sau GD-051 tới GD-055 | `/gdd-review` các file trên, kiểm chéo số giữa các file, MVP Criteria Checklist phần ca cảng | `qa/GD-056-ca-cang-dave.md`, `gdd/sheet/MVP Criteria Checklist.tsv` |
| GD-057 | GDM | | sau C | Tab CORE LOOP, Day, dán Sheet các tab đổi, đối chiếu | `gdd/sheet/CORE LOOP.tsv`, `gdd/sheet/Day.tsv` |

## Luật chung

1. Luật ca cảng một bản duy nhất: GDD trạm và cảng của gd-quan. Vai khác trỏ sang, không chép lại luật.
2. Số chưa đo ghi "ước". Số từ demo bot ghi "demo bot 2026-11-20". Số từ sim mới ghi tên sim.
3. Xóa hẳn khỏi file của mình mọi chỗ còn nói đơn đủ, đơn trượt, thưởng đủ đơn, thưởng nhanh, kệ kiện, máy đóng kiện chạy tay trong ca, quy mô đơn theo số người, tốc độ chạy theo cỡ kiện. Grep trước khi báo xong.
4. Tab Sheet là bản đọc theo luật viết của `briefs/dot8-gdd-de-doc.md` (câu ngắn, ID là STT, không mã trong chữ). Chạy `node tools/kiem-de-doc.mjs` cho tab của mình, ĐẠT mới báo xong. Không dán Sheet, GDM dán.
5. Không gạch dài, không dấu chấm phẩy, không emoji. Tiếng Việt có dấu.
6. Thấy file của vai khác cần sửa theo luật mới (ví dụ `nguoi-choi.md` còn luật mang kiện, `map.md`, `cot-truyen.md` nhắc đóng kiện): không sửa, ghi đường dẫn và dòng vào báo cáo cho GDM.
7. Không commit, không push. GDM commit.
8. Trả về khối `## Báo cáo cho GDM`: đã sửa gì (file, mục), số mới kèm nguồn, việc chéo cho vai khác, đề xuất cải thiện, cổng máy đã chạy và kết quả.
