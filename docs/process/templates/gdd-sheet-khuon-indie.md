# Khuôn GDD Sheet cho game indie (khuôn của Lead)

Nguồn: GDD Dungeon Builder của Lead (bản backup 29/06/2026, 22 tab), Sheet `1Q227Wb6pmSc5CTd57rBp1KDxeE4DEasPwfe_Wi7uiko`. Lead giao 2026-11-19: "cần có framework và Formats GDD" theo dự án này.
Dùng cho mọi GDD Sheet của game indie trong phòng. Khuôn 6 tab của `/gdd-v1 sheet` là khuôn Puzzle, không dùng cho game indie.

## 1. Bốn nhóm tab

| Nhóm | Màu tab | Tab trong Dungeon Builder | Ai đọc |
|---|---|---|---|
| A. Tổng quan | #351C75 (tím đậm) | OVERVIEW, ECONOMIC | Cả team, giảng viên |
| B. Spec thực thể (khuôn khối) | không màu | CORE LOOP (màu C), Enemy, Resource, Tower, Wave, Map | Dev, Art |
| C. Bảng dữ liệu | không màu | GAME STORY, PROCESSING, Shop, ITEM LIST, Tutorials, WIREFRAME (màu C) | Dev, Designer |
| D. Sản xuất và kiểm | #8E7CC3 (tím nhạt) | TRACKING, Assets, AUDIO ASSETS LIST, Event Tracking & Remote Config, VS Criteria Checklist, Balance Sheet, Playtest Report, Bugs Report | PM, QA, Dev |

Thứ tự tab: OVERVIEW, GAME STORY, TRACKING, WIREFRAME, CORE LOOP, các tab spec, PROCESSING, Shop, ITEM LIST, Tutorials, ECONOMIC, Event Tracking, Assets, Audio, VS Criteria Checklist, Balance Sheet, Playtest Report, Bugs Report.

## 2. Định dạng chung

| Phần | Định dạng |
|---|---|
| Font | Lexend toàn bộ |
| Dòng 1 (tiêu đề tab) | Tên tab IN HOA, gộp ngang hết bảng, nền #351C75, chữ trắng đậm 18, căn giữa, cao 42 đến 56 px |
| Dòng 2 (header cột) | Nền #B4A7D6, chữ đậm 11 hoặc 12, căn giữa, cố định (frozen) 2 dòng đầu |
| Thân | Chữ 10, xuống dòng (wrap), căn giữa theo chiều dọc |
| Cột ID, Task | Đậm, căn giữa |
| Cột mô tả | Căn trái, rộng 700 đến 740 px |
| Danh sách trong ô | Mỗi ý một dòng, mở đầu "- ", xuống dòng trong cùng ô |
| Chỉ số | Dạng `Tên (giải nghĩa): giá trị`, mỗi chỉ số một dòng. Ví dụ `HP (Máu): 60` |
| Ngôn ngữ | Văn xuôi tiếng Việt, tên trường và thuật ngữ game giữ tiếng Anh (Type, Attribute, Prep Phase, Token) |

## 3. Tab OVERVIEW

| Dòng | Nội dung |
|---|---|
| 1 | `GAME DESIGN DOCUMENT - <TÊN GAME>` |
| 2 | `Version: x.y.z` và `Date: dd/mm/yyyy` |
| 3 | `Designed by <tên>` |
| 5 | Cột A `INFORMATION` (đậm 18), cột B gộp: Game Title, Genre, Graphics, Engine, Age Rating, Platform, mỗi dòng một mục |
| 7 | Cột A `IDEA`, cột B gộp: một đoạn văn mô tả game, vòng lặp, các giai đoạn chơi |
| 9 | `TRACKING GDD` (chữ #351C75 đậm 18) |
| 10 trở đi | Bảng changelog: Version (`v0.0.1 - dd/mm/yyyy`) / Content / In charge / note. Mỗi lần sửa GDD thêm một dòng |

## 4. Khuôn khối (tab spec thực thể)

Mọi tab spec dùng chung 5 cột: `Issue ID | Task | Sub Task | Short Description | Ref` (thêm `Ref 2` khi cần).
- Một thực thể là một khối nhiều dòng. Cột Issue ID và Task gộp dọc theo chiều cao khối. Cột Ref gộp dọc khi một ảnh tham chiếu cho cả khối.
- Mỗi dòng của khối là một Sub Task, Short Description là nội dung.
- Issue ID chạy liên tục qua mọi tab spec (Hero 1, Enemy 9 đến 12, Resource 14 đến 17, Tower 19 đến 23, Wave 25 đến 34, Map 36 đến 41). Không tái dùng, không trùng.

Bộ Sub Task chuẩn theo loại thực thể:

| Loại | Sub Task theo thứ tự |
|---|---|
| Nhân vật người chơi | Type, Characteristic, Move, Attribute, Controls Scheme, Kĩ năng nội tại, Kĩ năng đặc biệt |
| Quái | Type (cấp, rơi gì), Characteristic (ngoại hình, hành vi), Attribute (HP, DMG, SD), Skills 1..n (sát thương, delay, cooldown) |
| Tài nguyên | Type, Characteristic, Attribute (độ bền, sản lượng, thời gian làm mới), Resource Output, Spawn Point |
| Công trình / vật dùng được | Type, Characteristic, Attribute, Level 1 (Cost Unlock, Cost), Level 2, Level 3 (Cost Upgrade, mức tăng) |
| Nhịp chơi (Wave) | Type (bậc khó), Design Intent, Prep Phase, Combat Phase, Enemy Setup, Reward |
| Khu vực (Map) | Type, Characteristic, Role |

### CORE LOOP là mục lục
CORE LOOP dùng khuôn khối nhưng mỗi khối là một nhóm thực thể (Hero, Enemy, Resource, Tower, Wave, Map) với 2 Sub Task: `Role` (vai trò trong game) và `Logic` (luật chung của cả nhóm). Issue ID của khối là ID mở đầu nhóm ở tab spec tương ứng. Luật chung viết ở CORE LOOP, chỉ số riêng viết ở tab spec.

## 5. Bảng dữ liệu

| Tab | Cột |
|---|---|
| GAME STORY | Một ô văn xuôi dài: bối cảnh, xung đột, vai người chơi, mục tiêu |
| WIREFRAME | ID, Issue (tên màn), Ref 1, Ref 2, Note (mô tả màn, chuyển màn sau bao lâu, chứa nút gì) |
| PROCESSING | Wave ID, User Progression (người chơi học gì), Resource Unlock, Map Unlock, Tower Unlock, Enemy Unlock, Power Growth, Design Intent, Note |
| ITEM LIST | Item ID, Item name, Type (Resource / Currency / item), Nguồn nhận, Nguồn tiêu, Note |
| Shop | ID, Item List, Quantity, Unit, Value, Price (tiền tệ 1), New Price, Price (tiền tệ 2) |
| Tutorials | ID, Design Intent, Trigger (When), Level Design Setup, Interaction, Ref 1 |
| ECONOMIC | Theo từng nhịp (Wave ID): Source (từng tài nguyên, từng tiền tệ), Sink (Type, Quality: chi tiết Trade / Build / Upgrade), Surplus (`Coin: dư cũ + thu - tiêu = còn`), Note (ý đồ) |

## 6. Tab sản xuất và kiểm

| Tab | Cột |
|---|---|
| TRACKING | Task, Description, Planned-In (Iteration), In Charge, Done-In, Status (To Do / Doing / Done), Updated, Update Details, Note |
| Assets | ID, Asset Name, Link, Note |
| AUDIO ASSETS LIST | Issue ID, Name (`BGM_...`, `SFX_...`), Link (loại), Note (cảm giác), Web Ref |
| Event Tracking & Remote Config | No, Group (Session, Wave, Hero, Resource, Economy, Building, Tower, Enemy, Boss, KPI), Event Name (snake_case), When To Send, Event Params Key, Description, Value Type |
| VS Criteria Checklist | Feature/Metric, Category, Acceptance Criteria, Status (TRUE / FALSE), Actual Result, Notes |
| Balance Sheet | Feature, Category, Current Value, Test Result, Issue Found, Adjustment Plan, New Value, Result After Change, Decision (Pass / Keep / Not Pass), Notes |
| Playtest Report | Issue ID (`PT_01`), Findings / Observations, Severity (P1 đến P4), Decisions, Changes Implemented, Status |
| Bugs Report | ID, Version, Priority, Severity, Category, Screen/Pop Up, Bug, Bug description, PIC, Dev status, QA Status, Comments, Create Date, Closed/Verified Date |

## 7. Lỗi trong bản Dungeon Builder, không chép sang game mới

| Lỗi | Ví dụ | Cách tránh trong phòng |
|---|---|---|
| Một số ghi ở hai nơi lệch nhau | Laser DMG 50 ở Tower, 150 ở Balance Sheet. Canon Range 10f ở Tower, 7f ở Balance Sheet | Balance Sheet chỉ ghi lịch sử đổi số. Số hiện hành chỉ ở tab spec, validator của gd-tech so hai nơi |
| Issue ID trùng | Copper Ore và Rock cùng 15, Iron Ore và Blue Gems cùng 16 | Validator kiểm ID duy nhất |
| Dòng Surplus chép nhầm | ECONOMIC Wave 2 lặp công thức của Wave 1 | Surplus sinh bằng sim, không gõ tay |
| Giá ở hai tab khác đơn vị | Shop bán Wood 5 Coin, Balance Sheet 1 Coin | Một bảng giá duy nhất (Shop), tab khác trỏ về |
