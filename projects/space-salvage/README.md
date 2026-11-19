# Space Salvage (space-salvage)

**Đã bỏ (Lead 2026-11-19, định nghĩa lại game từ đầu). Chỉ để tra, xem `projects/game-moi/`.**

Tên tạm, chưa đặt tên. Repo: `github.com/huycv18/DATN-SP27` (gốc repo này, chưa có Unity project) | Nền tảng: Unity, PC Windows, 1 người chơi, offline | Đối tượng: người chơi 16+ thích nhịp vừa, quản lý, khám phá, tối ưu kinh tế (theo OVERVIEW)
Game tham chiếu: Dave the Diver (chỉ lấy cấu trúc ngày thám hiểm + quán), Stardew Valley (nhịp ngày đêm), Hardspace: Shipbreaker (fantasy tháo dỡ). Không chép luật, không lấy asset.
Người thực hiện ngoài phòng: chưa có (code Unity, art, audio không thuộc phòng) | Trạng thái: GDD v0.1.0 (19/10/2026), phần lớn số ở trạng thái "Đề xuất - chưa chốt"

## GDD Sheet (nguồn chuẩn)
https://docs.google.com/spreadsheets/d/1kGdCePi8LDK1sGxfH7FK5sswVTgsXO71N4QyjzZP7Bs
Quyền: phòng dán thẳng sau khi gd-qa chấm ĐẠT (Lead chốt 2026-11-19). Trước khi soạn lại một tab, kéo bản Sheet về repo, Lead có thể đã sửa tay.

Khuôn: `docs/process/templates/gdd-sheet-khuon-indie.md`. 25 tab mới dựng ngày 2026-11-19, mới có tiêu đề và header, nội dung còn nằm ở 17 tab ẩn `v0.1 <tên cũ>` (gid 0 đến 16).

| gid | Tab | Vai giữ | Nội dung lấy từ tab v0.1 |
|---|---|---|---|
| 100 | OVERVIEW | GDM | OVERVIEW, ONE PAGE (đã điền) |
| 101 | GAME STORY | gd-story | NPC & STORY |
| 102 | TRACKING | GDM | mới |
| 103 | WIREFRAME | gd-ux | WIREFRAME |
| 104 | CORE LOOP | GDM | CORE LOOP, SYSTEMS |
| 105 | Player | gd-character (kỹ năng combat: gd-combat) | PLAYER, WEAPONS & LAW (choáng, lưới, cắt) |
| 106 | Enemy | gd-combat | ENEMIES & HAZARDS |
| 107 | Salvage | gd-items (Spawn Point: gd-world) | ITEM LIST, ZONES |
| 108 | Recipe | gd-items (giá ở Shop) | RECIPES |
| 109 | Customer | gd-quan (hồ sơ: gd-character) | NPC & STORY |
| 110 | Upgrade | gd-economy | UPGRADES |
| 111 | Day | GDM | CORE LOOP, ONE PAGE mục 4 |
| 112 | Zone | gd-world | ZONES, ENEMIES & HAZARDS |
| 113 | PROCESSING | gd-economy | mới |
| 114 | Shop | gd-economy | SHOP |
| 115 | ITEM LIST | gd-items | ITEM LIST |
| 116 | Tutorials | gd-ux | mới |
| 117 | ECONOMIC | gd-economy | ECONOMIC |
| 118 | Event Tracking | gd-tech | mới |
| 119 | Assets | GDM | ONE PAGE mục 3, ART & AUDIO |
| 120 | AUDIO ASSETS LIST | GDM | ART & AUDIO |
| 121 | MVP Criteria Checklist | gd-qa | SCOPE & RISKS |
| 122 | Balance Sheet | gd-economy | mới |
| 123 | Playtest Report | gd-qa | mới |
| 124 | Bugs Report | gd-qa | mới |

## Luật lõi (tóm tắt, nguồn chân lý sẽ ở `gdd/luat-loi.md` sau GD-003)
- Ngày: sáng mua nhiên liệu, phóng tàu ra tầng, bay jetpack quán tính 8 hướng.
- Năng lượng bộ đồ vừa là máu vừa là thời gian chuyến bay. Về 0 thì drone cứu hộ kéo về, trừ phí, thiếu thì ghi nợ.
- Thu nhặt, cắt plasma, choáng rồi lưới bắt sinh vật, khoang hàng giới hạn ô.
- Tối: chế món ăn và đồ độ ở quán, bán cho khách ngoài hành tinh lấy ₵ và tip.
- ₵ là đơn vị duy nhất, không XP. Tiến trình là nâng cấp mua bằng ₵ để bay xa hơn.

## Phạm vi MVP
1 tầng (Vành Đai Rác), 3 quái tầng 1 (Sứa chân không, Bọ ve kim loại, Lươn điện từ), 7 công thức (4 món + 3 đồ độ theo Sheet), 2 loài khách, chơi trọn 1 ngày, lưu game. Câu còn treo: MVP 1 quầy hay 2 quầy (xem `DECISIONS.md`).

## Nguồn hiện hành
| Thứ | File nguồn | Ghi chú |
|---|---|---|
| Số Lead chốt | `so-hien-hanh.md` | Các vai chỉ đọc số ở đây |
| Bản kéo về từ Sheet | `gdd/sheet/*.tsv` | Chưa có, tạo ở GD-001 |
| Luật lõi MVP | `gdd/luat-loi.md` | Chưa có, tạo ở GD-003 |
| Sim kinh tế | `sim/` | Chưa có, GD-005 |
| Prototype jetpack | `prototype/jetpack/` | Chưa có, GD-002 |

Không dùng số trong mục "MÔ PHỎNG LỢI NHUẬN MỘT NGÀY" của tab ECONOMIC làm số chốt: đó là ước tính tay của v0.1, chưa có sim.

## Quyết định riêng project
Xem `DECISIONS.md`. Điều Lead đã bác (không đề xuất lại): chưa có.
Không có phiên `gdm-space-salvage`: GDM phòng kiêm gd-manager game này (xem `CLAUDE.md` gốc). Vì thế thư mục này không có `CLAUDE.md` riêng, thông tin Sheet và nguồn nằm ở file này.

## Thư mục
```
gdd/            luat-loi.md, ban-do-he-thong-mvp.md, he-thong/*.md, sheet/*.tsv (bản kéo về và bản soạn dán)
sim/            sim kinh tế, chuyến bay, combat (script in ra số)
prototype/      prototype thử feel (jetpack web 1 file)
ux/             hud.md, man-hinh.md, ftue-ngay-1.md, game-feel.md
qa/             GD-###.md, playtest/
strings/        strings.tsv, ten.md
briefs/         dot<N>-*.md (file phối hợp đợt)
reports/        YYYY-MM-DD.md
```

## Lệnh hay dùng
```
node .claude/skills/gdd-v1/scripts/soat.mjs <file>     soát định dạng tài liệu
```

## Việc còn lại khi tạm dừng
Khuôn đã áp vào Sheet (25 tab rỗng, chỉ OVERVIEW có nội dung). Việc kế tiếp: đợt chuyển nội dung v0.1 sang tab mới theo vai giữ tab. Đợt 1 cũ tạm dừng: `briefs/dot1-nen-mvp.md`.
