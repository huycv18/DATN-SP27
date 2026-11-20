# GD-032 gd-qa: dán Sheet và kiểm chéo tab

Cập nhật: 2026-11-20 (phần dán của gd-qa xong, phần kiểm chéo chờ các vai dán xong).

## 1. Tab MVP Criteria Checklist (phần của gd-qa)

| Việc | Kết quả |
|---|---|
| Nguồn | `qa/mvp-criteria-checklist.md` (sinh bằng `qa/build-mvp-checklist.mjs`), xuất TSV bằng `qa/xuat-checklist-tsv.mjs` ra `gdd/sheet/MVP Criteria Checklist.tsv` |
| Header tab (dòng 2) | Feature/Metric, Category, Acceptance Criteria, Status, Actual Result, Notes. Khớp 6 cột của TSV |
| Dán | `update_values` ba đợt: `A3:F47`, `A48:F92`, `A93:F136`. 134 dòng, 804 ô, không đụng dòng 1 và 2, không đụng tab khác, không đụng 17 tab `v0.1` |
| Status | Cả 134 dòng là FALSE (chưa kiểm), vì chưa có build Unity |
| Mapping cột | Feature/Metric là `<ID> <Feature>` (CK = khung, CT = cốt truyện, NC = người chơi, HS = hồ sơ, CB = combat, VP = vật phẩm, MP = map, TC = trạm và cảng, UX, KY = kỹ thuật). Notes là `Nhãn: ... Cách kiểm: ... Nguồn: ...` |
| Lọc nội dung | Bỏ ghi chú vòng 1 đã lỗi thời trong cột Acceptance Criteria (số dòng, "lỗi N3", "Hiện chưa"). Ghi đè tay 9 tiêu chí đã cũ: CT-13, VP-02, VP-06, VP-08 đến VP-11, VP-13, VP-14, KY-01, KY-10 (trong `xuat-checklist-tsv.mjs`, bảng OV) |

### Đối chiếu sau khi dán
| Kiểm | Kết quả |
|---|---|
| Ranh giới: hàng cuối | Hàng 136 là KY-13, hàng 137 trống (đọc lại `A135:F140`) |
| Ranh giới giữa các đợt | Hàng 47 là HS-08, hàng 48 là CB-01 (đọc `A45:A52`). Hàng 92 là TC-06, hàng 93 là TC-07 (đọc `A91:C94`, khớp) |
| Hash từng ô với TSV | CHƯA làm. Dữ liệu dán bằng tay qua `update_values`, chưa có script đọc lại cả 804 ô và so hash. Nếu muốn đối chiếu đầy đủ: `/gdd-sheet-sync doi-chieu` hoặc đọc `A3:F136` và so với TSV |
| Lỗi chính tả có thể có | Dữ liệu được chép từ đầu ra script vào lệnh dán, khả năng sai một vài ký tự tiếng Việt. Hai đợt đầu đã đọc mẫu 2 đoạn đúng |

## 2. Kiểm chéo giữa các tab

Kiểm chéo Sheet chưa làm, để đợt sau (GDM 2026-11-20: Lead dặn hoàn thiện phần đang dở, không làm thêm). Khi làm: ID trùng, số ghi hai nơi, giá ngoài Shop.
