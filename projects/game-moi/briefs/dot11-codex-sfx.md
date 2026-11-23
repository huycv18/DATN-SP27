game-moi

# Đợt 11: Codex The Novent và Danh sách SFX (2026-11-23)

Nguồn: Lead xem folder Documents của nhóm Timberwalls, giao "Codex và SFX". DECISIONS game mục "Thêm 4 loại tài liệu nộp học từ Timberwalls". BACKLOG GD-068, GD-069.

Luật chung cho mọi vai: văn phong theo `docs/org/ho-so-lead.md` (tiếng Việt có dấu, không emoji, không gạch dài, không chấm phẩy). Chỉ làm mục MVP: dòng có nhãn "Sau MVP" thì bỏ qua. Không đổi luật, không đổi số. Thấy GDD lệch nhau thì ghi vào báo cáo, không tự sửa GDD của vai khác. Không commit, GDM commit.

## Phối hợp

| Bước | Vai | Đầu vào | Ra |
|---|---|---|---|
| 1 | gd-tech | TSV tab Sheet | `tools/sinh-codex.mjs`, `codex/khung.tsv`, `codex/<Tab>.tsv` |
| 2 | gd-story | `codex/khung.tsv` | `codex/loi.tsv` |
| 3 | gd-tech chạy lại script (GDM chạy cũng được) | `codex/loi.tsv` | `codex/<Tab>.tsv` đủ lời, `--kiem` 0 lỗi |
| song song | gd-ux | GDD, Event Tracking, WIREFRAME, strings | `gdd/sheet/AUDIO ASSETS LIST.tsv` bản mới |
| cuối | gd-qa | tất cả | `qa/GD-068-069.md` |

## GD-068 bước 1. gd-tech: script sinh Codex

**Mục tiêu.** Codex là bách khoa trong game, giống màn Codex của Mind over Magic và Sheet "Book of timberwalls" của Timberwalls: mỗi hệ thống một tab, mỗi thứ người chơi gặp có một mục. Cột dữ liệu phải sinh từ TSV bằng máy để không lệch GDD. Chỉ phần lời là người viết.

Viết `projects/game-moi/tools/sinh-codex.mjs` (Node, không thư viện ngoài, dùng `docTsv` trong `tools/doi-chieu-sheet.mjs` hoặc `tools/lib.mjs`):

| Tab Codex | Nguồn | Một mục là |
|---|---|---|
| Vat pham | `gdd/sheet/ITEM LIST.json` hoặc `.tsv` | mỗi vật phẩm MVP |
| Diem khai thac | `gdd/sheet/Salvage.tsv` (và `Salvage.json` nếu có ID) | mỗi điểm khai thác MVP |
| Driftlife | `gdd/sheet/Enemy.tsv` | mỗi loài và boss MVP (bỏ hàng luật chung) |
| Thuong nhan | `gdd/sheet/Customer.tsv` | mỗi tàu và thương nhân MVP |
| Tram va nang cap | `gdd/sheet/Upgrade.tsv`, khoang trạm trong `gdd/he-thong/tram-va-cang.md` | mỗi khoang và mỗi món nâng cấp MVP |
| Nhan vat va trang thai | `gdd/sheet/Player.tsv` | chỉ số, trạng thái, kỹ năng người chơi MVP |

Tên tab ghi tiếng Việt có dấu trong file ra (cột đầu bảng trên viết không dấu chỉ để làm tên file).

Cột mỗi tab: `STT | Loại | Tên | Tên tiếng Anh | Lời trong game | Nguồn nhận | Công thức | Dùng cho | Ảnh`. Cột nào hệ thống không có thì để trống, không bịa. Tên tiếng Anh lấy từ Note hoặc tên gốc trong GDD. Ảnh để trống (chờ art).

Khóa mục: mã ID nếu nguồn có (ví dụ RES-101), không có thì dùng tên đúng như trong TSV. Khóa chỉ nằm ở `codex/khung.tsv` và `codex/loi.tsv`, không in ra tab Codex (luật Sheet dễ đọc: không mã trong chữ).

Chế độ chạy:
- `node projects/game-moi/tools/sinh-codex.mjs --khung`: ghi `codex/khung.tsv` cột `khoa | tab | loai | ten | ten_en | tom_tat_luat`. Cột cuối là một dòng tóm luật lấy từ TSV để gd-story viết lời cho đúng.
- Không cờ: đọc `codex/loi.tsv` (cột `khoa | loi`), ghi `codex/<Tab>.tsv`.
- `--kiem`: thoát 1 khi có mục thiếu lời, lời thừa không khớp khóa, lời quá 200 ký tự, lời chứa chữ số, gạch dài, chấm phẩy.

Thêm một phép vào `tools/selftest.mjs` cho script (khung nhỏ dựng tay, kiểm lọc MVP và `--kiem` bắt lỗi). Thêm dòng lệnh vào `tools/README.md`.

**Tiêu chí hoàn thành.** `--khung` ra đủ mục MVP, in số mục mỗi tab. Selftest ĐẠT. Báo cáo có bảng số mục mỗi tab và các dòng TSV không đọc được nhãn MVP.

## GD-068 bước 2. gd-story: lời trong game

**Mục tiêu.** Viết `projects/game-moi/codex/loi.tsv` (cột `khoa | loi`), mỗi khóa trong `codex/khung.tsv` một dòng.

**Đọc trước.** `codex/khung.tsv`, `gdd/he-thong/cot-truyen.md` (giọng văn, tên gọi), `strings/strings.tsv` (giọng chữ trong game đang dùng), mục hệ thống liên quan trong `gdd/he-thong/` khi tóm luật chưa đủ.

**Luật viết.** Một đến hai câu, tối đa 200 ký tự. Giọng như người chơi đọc trong game: nói vật đó là gì, lấy ở đâu hoặc dùng làm gì, thêm một nét thế giới nếu có. Không ghi số (số nằm ở cột dữ liệu). Không lộ truyện sau chương của mục đó. Tiếng Việt như `strings.tsv`, tên riêng giữ như GDD.

**Tiêu chí hoàn thành.** `node projects/game-moi/tools/sinh-codex.mjs --kiem` 0 lỗi.

## GD-069. gd-ux: Danh sách SFX

**Mục tiêu.** Nâng `projects/game-moi/gdd/sheet/AUDIO ASSETS LIST.tsv` theo khuôn Sheet "Sounds" của Timberwalls: mỗi âm có mô tả và sự kiện phát tách riêng, để người làm âm tìm và gắn được ngay. Rà đủ sự kiện cần âm.

Cột mới: `STT | Name | Loại | Mô tả | Sự kiện phát | Phát | Nhãn | Nguồn GDD | Link | Web Ref`.
- Loại: BGM, Ambience, SFX, UI.
- Sự kiện phát: khi nào phát, viết theo hành động người chơi hoặc trạng thái game, khớp tên sự kiện trong GDD.
- Phát: Một lần hoặc Lặp.
- Nhãn: MVP hoặc Sau MVP.
- Nguồn GDD: tên file và mục, như cột Note cũ.
- Link để trống. Web Ref giữ như cũ.

Giữ nguyên Name của 75 dòng đang có, không đổi tên âm. Tách nội dung cột Note cũ sang Mô tả, Sự kiện phát, Nhãn, Nguồn GDD.

Rà thêm, mỗi sự kiện thiếu âm thêm một dòng mới:
- `gdd/he-thong/*.md`: mọi chỗ nhắc âm, tiếng, "SFX", phản hồi khi trúng đòn, cảnh báo Oxy, bắt sống, cắt, giờ giao thương.
- `gdd/sheet/Event Tracking.tsv` và `WIREFRAME.tsv`: các nút và màn có phản hồi âm.
- Luật Dây nối của Scrapmaw trong `combat-driftlife.md` (cắt đoạn thứ nhất, đoạn thứ hai bị khóa khi boss còn từ 50% Sinh lực, cắt được đoạn thứ hai).
- Âm UI chung: bấm nút, mở và đóng màn, không đủ Tally, mua xong.

Đặt tên âm mới theo mẫu tên đang có (`SFX_`, `BGM_`, `UI_`, `AMB_`, chữ hoa đầu từ, gạch dưới).

**Tiêu chí hoàn thành.** `node projects/game-moi/tools/kiem-de-doc.mjs --tab "AUDIO ASSETS LIST"` 0 lỗi. Không dòng nào trống Mô tả hoặc Sự kiện phát. Báo cáo có bảng số dòng theo Loại và Nhãn, danh sách tên âm mới, và chỗ GDD nhắc âm mà không rõ sự kiện.

## Giới hạn

- Không dán Sheet. GDM dán AUDIO ASSETS LIST vào Sheet GDD chính và tạo Sheet Codex riêng.
- Không sửa file ngoài phần mình được giao.
- Báo cáo trả về theo khối `## Báo cáo cho GDM`.
