# Đề xuất: Sheet GDD Space Salvage theo khuôn của Lead

Trạng thái: ĐÃ ÁP vào Sheet 2026-11-19 (Lead: "Sửa Sheet hiện tại"). Khuôn: `docs/process/templates/gdd-sheet-khuon-indie.md` (rút từ Dungeon Builder).
Sheet hiện tại (v0.1.0, 17 tab) viết theo khung khác: cột STT, chữ thường, không có khuôn khối Issue ID / Task / Sub Task. Nội dung giữ, chỉ đổi cấu trúc và định dạng.

## Ánh xạ thực thể

| Dungeon Builder | Space Salvage | Ghi chú |
|---|---|---|
| Hero | Player (bộ đồ jetpack) | Move đổi thành bay 8 hướng quán tính, Attribute thêm Năng lượng bộ đồ |
| Enemy | Enemy (Sứa chân không, Bọ ve kim loại, Lươn điện từ) | Thêm Sub Task `Capture` (choáng bao lâu, lưới bắt được không, ra vật phẩm gì) |
| Resource | Salvage (rác kim loại, vật cắt plasma) | Spawn Point là vùng gần / giữa / sâu của tầng |
| Tower | Recipe (món ăn, đồ độ) | Level 1..3 đổi thành Ingredients, Sell Price, Unlock |
| Wave | Day (nhịp một ngày) | Prep Phase / Combat Phase đổi thành Sáng (bến tàu), Chuyến bay, Tối (ca bán). Enemy Setup đổi thành Spawn Setup, thêm Customer Setup |
| Map | Zone (tầng và quán) | Safe Zone tương ứng quán và bến tàu, Forest / Cave tương ứng vùng của tầng |
| Token, Coin | ₵ | Chỉ một tiền tệ, Shop bỏ cột Price (Token) |
| (không có) | Customer (2 loài khách MVP) | Khối mới: Type, Characteristic, Order (món thích), Patience, Tip |
| (không có) | Upgrade | Dùng khuôn khối như Tower: Level 1..n, Cost, mức tăng |

## Tab đề xuất (thứ tự)

| # | Tab | Nhóm | Lấy nội dung từ tab cũ | Vai giữ |
|---|---|---|---|---|
| 1 | OVERVIEW | A | OVERVIEW, ONE PAGE mục 1 | GDM |
| 2 | GAME STORY | C | NPC & STORY (phần cốt truyện) | gd-ux |
| 3 | TRACKING | D | mới | GDM |
| 4 | WIREFRAME | C | WIREFRAME | gd-ux |
| 5 | CORE LOOP | B (mục lục) | CORE LOOP, SYSTEMS | gd-systems |
| 6 | Player | B | PLAYER | gd-systems |
| 7 | Enemy | B | ENEMIES & HAZARDS (phần quái) | gd-level |
| 8 | Salvage | B | ITEM LIST (vật thu thập), ZONES | gd-level |
| 9 | Recipe | B | RECIPES | gd-systems (luật), gd-economy (giá) |
| 10 | Customer | B | NPC & STORY (khách) | gd-systems |
| 11 | Upgrade | B | UPGRADES | gd-economy |
| 12 | Day | B | CORE LOOP (luồng một ngày), ONE PAGE mục 4 | gd-level |
| 13 | Zone | B | ZONES, ENEMIES & HAZARDS (phần hazard) | gd-level |
| 14 | PROCESSING | C | mới (theo ngày: học gì, mở gì) | gd-level |
| 15 | Shop | C | SHOP | gd-economy |
| 16 | ITEM LIST | C | ITEM LIST | gd-economy |
| 17 | Tutorials | C | mới | gd-ux |
| 18 | ECONOMIC | A | ECONOMIC (Surplus sinh từ sim) | gd-economy |
| 19 | Assets | D | ONE PAGE mục 3, ART & AUDIO | GDM |
| 20 | AUDIO ASSETS LIST | D | ART & AUDIO | GDM |
| 21 | Event Tracking | D | mới (log cục bộ để cân bằng, game offline nên không Remote Config) | gd-tools |
| 22 | MVP Criteria Checklist | D | SCOPE & RISKS (mục tiêu kiểm chứng) | gd-qa |
| 23 | Balance Sheet | D | mới | gd-economy |
| 24 | Playtest Report | D | mới | gd-qa |
| 25 | Bugs Report | D | mới | gd-qa |

Tab cũ không có chỗ trong khuôn: WEAPONS & LAW (súng nóng, cảnh sát là phạm vi Alpha, chưa vào MVP) và SCOPE & RISKS (bảng mốc và rủi ro). Đề xuất: WEAPONS & LAW thành khối Weapon trong tab Player (choáng, lưới, cắt plasma) và phần luật cảnh sát để ở backlog. Bảng mốc và rủi ro chuyển vào OVERVIEW dưới TRACKING GDD.

## Issue ID dự kiến

| Khoảng | Tab |
|---|---|
| 1 đến 9 | CORE LOOP (mục lục) |
| 10 đến 19 | Player, Weapon |
| 20 đến 29 | Enemy |
| 30 đến 49 | Salvage |
| 50 đến 69 | Recipe |
| 70 đến 79 | Customer |
| 80 đến 99 | Upgrade |
| 100 đến 119 | Day |
| 120 đến 129 | Zone |

Chừa khoảng trống để thêm thực thể Vertical Slice mà không đánh lại số.
