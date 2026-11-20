# Đợt 8 game-moi: soát và viết lại Sheet GDD cho dễ đọc (2026-11-20)

Lead: "Soát nội dung của GDD, có nhiều lỗi không khớp như Core Pillars chốt ở Overview nhưng bên Coreloop đang không khớp. Các nội dung viết khó hiểu, hãy sửa lại để người Việt Nam dễ đọc hiểu hơn, gọn gàng về nội dung hơn. Thay các ID phức tạp sang số thứ tự thôi."

Sheet GDD (25 tab) là bản đọc cho dev, art, PM. Nguồn là `gdd/sheet/<Tab>.tsv`. Bản đủ (lý do, sim, lịch sử, mã dữ liệu cho Unity) vẫn ở `gdd/he-thong/*.md` và các file JSON, không đổi trong đợt này.

## Ai làm gì

| Mã | Vai | Model | Tab (file trong `gdd/sheet/`) |
|---|---|---|---|
| GD-040 | GDM | opus | OVERVIEW, CORE LOOP, Day |
| GD-041 | gd-story | sonnet | GAME STORY |
| GD-042 | gd-character | sonnet | Player |
| GD-043 | gd-combat | opus | Enemy |
| GD-044 | gd-items | sonnet | Salvage, ITEM LIST, Recipe |
| GD-045 | gd-world | opus | Zone |
| GD-046 | gd-quan | opus | Customer |
| GD-047 | gd-economy | opus | ECONOMIC, Shop, Upgrade, PROCESSING, Balance Sheet |
| GD-048 | gd-ux | sonnet | WIREFRAME, Tutorials |
| GD-049 | gd-tech | sonnet | Event Tracking, TRACKING, Assets, AUDIO ASSETS LIST |
| GD-050 | gd-qa | sonnet | MVP Criteria Checklist, sau đó nghiệm thu chéo cả 23 tab |

## Luật viết

1. Không đổi luật, không đổi số. Chỉ đổi cách nói. Số phải trùng GDD hệ thống và `so-hien-hanh.md`.
2. Soát lệch: tab phải khớp GDD hệ thống của mình, OVERVIEW (5 pillar Dave the Diver và nguyên tắc nền) và `gdd/00-khung-game.md`. Tab sai mà GDD đúng thì sửa tab. GDD hệ thống sai hoặc hai GDD cãi nhau thì không tự chọn, ghi vào báo cáo cho GDM.
3. Câu ngắn, chủ ngữ rõ, kiểu người Việt nói: "Hết Oxy thì ngất, đồng đội không cứu kịp thì bị kéo về trạm". Một ý một dòng. Một dòng tối đa 300 ký tự (cổng máy chặn), nên dưới 200.
4. Gọn: bỏ chữ thừa, bỏ ý lặp lại giữa các hàng, bỏ giải thích vì sao chọn số, bỏ tên vai, log, QA, sim nội bộ, "xem mục 3.4b của file X" giữa câu. Gộp hàng cùng ý. Không bỏ luật nào.
5. Thuật ngữ: dùng đúng Từ điển ở `gdd/00-khung-game.md` mục 10. Tên riêng tiếng Anh giữ nguyên (Station Ember, Driftlife, Tally). Thuật ngữ kỹ thuật giữ tiếng Anh (spawn, hitbox, cooldown). Không dịch kiểu máy.
6. Không gạch dài, không dấu chấm phẩy, không emoji, không markdown (`**`, `#` đầu dòng trừ hàng nhóm của tab đang dùng). Xuống dòng trong ô giữ đúng kiểu tab đang dùng (chuỗi `\n` hoặc ô bọc ngoặc kép).
7. Giữ nguyên cấu trúc cột và hàng tiêu đề của tab (khuôn Lead đã chọn). Được gộp, bớt hàng.

## Luật mã (ID)

1. Cột ID đầu tab (Issue ID, ID, Item ID, No, Mã, Day ID): ghi số thứ tự 1, 2, 3 theo thứ tự hàng của tab. Hàng tiếp theo cùng một mục để trống ô ID (không lặp lại số). ECONOMIC: Day ID là số ngày.
2. Trong chữ không còn mã nào: K1, C3, P1, CP2, B8, HC10, KH01, TA01, N1, M3, V1.1, C1.1, RES-101, RCP-101, CGO-101, SLV-101, UPG-OXY-1, T-OXY, AST-001, AUD-001, UI-05, HUD-13, T01, CK-01, GD-028, D01, BS-2, WD-P2, CHR-PC, STY-601...
   - Mã luật trong ngoặc như "(K1)", "(P1, C4)": bỏ hẳn nếu câu đã nói rõ luật. Cần trỏ thì ghi tên ngắn ở bảng dưới.
   - Mã vật, khoang, tàu, map nhánh, mốc truyện, màn, asset: thay bằng tên của nó. Tra tên bằng cách grep mã trong `gdd/he-thong/*.md`.
   - Tham chiếu sang tab khác luôn bằng tên, không bằng số thứ tự của tab kia (số có thể đổi khi tab kia sửa). Ví dụ "3 x Mảnh vỏ Cradle", "nâng cấp Bình Oxy bậc 2", "màn Ca cảng".
   - Được giữ: tên event và key tracking (session_start), tên file asset (BGM_Station_Day), phím ({interact}, F5), mã màu hex.
3. Cột Ref: chỉ ghi `<file>.md mục X`, ví dụ `map.md mục 2.1`. Không ghi `projects/game-moi/gdd/he-thong/`.
4. Mã dữ liệu (RES-101...) vẫn sống trong GDD hệ thống và JSON cho tool, Unity. Sheet không cần.

Tên ngắn khi cần trỏ tới luật khung:

| Mã cũ | Ghi là |
|---|---|
| K1 | Oxy vừa là thời gian vừa là máu |
| K2 | Ngạt và bị kéo về, giữ 1 món |
| K3 | Giới hạn túi đồ |
| K4 | Kết thúc chuyến bằng cửa khí hoặc Recall Beacon |
| K5 | Map tổng 3 dải, sinh lại mỗi chuyến |
| K6 | Mở dải theo chương, cần cấp bộ đồ |
| K7 | Map nhánh dựng tay |
| K8 | Sinh lại, không phạt khai thác |
| K9 | Bắt sống giá trị hơn hạ |
| K10 | Neo và rời neo |
| K11 | Sửa khoang |
| K12 | Người vớt mở tính năng |
| K13 | Ca cảng |
| K14 | Sự cố trạm |
| K15 | Hạng cảng |
| K16 | Nuôi Driftlife |
| K17 | Không hệ đói |
| K18 | Tally là đồng tiền duy nhất |
| K19 | Nguồn và nơi tiêu tài nguyên |
| K20 | Shop |
| K21 | 5 chương |
| K22 | Tối đa 2 chuyến một ngày |
| K23 | Ngày không đồng hồ, lưu khi ngủ |
| K24 | Sau cảnh kết |
| K25 | Qua chương |
| K26 | Trần hồi Oxy 25% mỗi chuyến |
| K27 | Đang ngạt không trao đồ |
| C1 đến C10 | "luật co-op" kèm nội dung: dùng chung và riêng, nâng cấp một lần cả nhóm, xác nhận ra chuyến, không tạm dừng khi co-op, cân bằng theo số người, mất kết nối... |
| P1 | pillar Rủi ro và phần thưởng |
| P2 | pillar Quản lý và tối ưu |
| P3 | nguyên tắc nền Một mình vẫn trọn |
| P4 | pillar Khám phá hoặc pillar Đa dạng và bất ngờ (chọn đúng ý) |
| CP1 đến CP5 | Khám phá, Rủi ro và phần thưởng, Quản lý và tối ưu, Phát triển liên tục, Đa dạng và bất ngờ |

Từ chuẩn: "ngạt" trong GDD hệ thống giữ nguyên nghĩa. Trên Sheet ghi "ngạt" như cũ (không tự đổi từ điển). Bảng trên chỉ là gợi ý cách nói.

## Kiểm

```
node projects/game-moi/tools/kiem-de-doc.mjs --tab "<Tab>"
```

Cổng chặn: ID không phải số, còn mã, gạch dài, chấm phẩy, emoji, markdown, tên pillar cũ, đường dẫn dài, dòng quá 300 ký tự. Phải ĐẠT từng tab trước khi báo xong. Script sinh TSV cũ (`sinh-customer.py`, `sinh-enemy.py`, `sinh-game-story.mjs`, `sim/sinh_zone.py`, `tools/xuat-event-tracking.mjs`) KHÔNG chạy lại: chúng sẽ ghi đè bản đọc. GDM xử lý các script này sau đợt.

## Giới hạn

- Chỉ ghi các file TSV tab của mình. Không sửa GDD hệ thống, Sheet, DECISIONS, không commit.
- Báo GDM một khối `## Báo cáo cho GDM`, tối đa 12 dòng: dòng đầu `GD-0xx XONG|KẸT: <một câu>`, số hàng trước và sau từng tab, kết quả cổng, lệch đã sửa (tab sai so với nguồn), lệch cần GDM quyết (GDD hệ thống sai hoặc cãi nhau), điều đã gộp hoặc bỏ đáng lưu ý.
