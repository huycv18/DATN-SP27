# GDD hệ thống: Kỹ thuật (máy chấm GDD, sim, schema dữ liệu, đồng bộ co-op, Event Tracking)

Project: game-moi | Chủ sở hữu: gd-tech | Task: GD-030 | Trạng thái: bản đủ đợt 2, 2026-11-20 | Nguồn luật: `../00-khung-game.md` (K1 đến K27, C1 đến C10, sửa lần 5), 9 GDD hệ thống cùng thư mục

## Tóm tắt

Cầu nối giữa GDD và 4 dev Unity. File này chốt cách dữ liệu đi từ Sheet và GDD vào Unity (schema JSON sang ScriptableObject), trạng thái nào phải đồng bộ trong co-op và ai nắm quyền, chuyện gì xảy ra khi người vào giữa chừng, người rời, host rớt mạng, và bộ sự kiện ghi cho playtest offline. Phần máy chấm (validator, 3 sim) nằm ở `projects/game-moi/tools/`, lệnh chạy ở `tools/README.md`.

## Hiện hành

| Thứ | Trạng thái | Nguồn |
|---|---|---|
| Validator chéo GDD | Chạy được, 10 file, thoát 1 khi lỗi | `tools/validate-gdd.mjs`, kết quả `tools/ket-qua/validate-gdd.md` |
| Sim chuyến | Chạy được, theo chương 1 đến 5, 4 kịch bản (tệ, trung bình, tốt, tham), 1 đến 4 người | `tools/sim-chuyen.mjs`, `tools/ket-qua/sim-chuyen.md` |
| Sim giờ giao thương | Chạy được, theo khung Dave: 1 đến 4 người chia việc, quét số tàu và số cửa neo theo N, trễ phản xạ 1 đến 3 giây, 3 kiểu danh mục, bơm khí | `tools/sim-ca-cang.mjs`, `tools/ket-qua/sim-ca-cang.md` |
| Sim combat | Chạy được, S1 phần trận, S2 phần thời gian và ròng, S3, S4, S5 cho BS-1. S6 lý thuyết ở prototype | `tools/sim-combat.mjs`, `tools/ket-qua/sim-combat.md` |
| Schema dữ liệu | Bản của gd-tech ở mục 2.1 (schema thuộc thẩm quyền gd-tech, GDM duyệt khi giao dev) | file này |
| Đồng bộ co-op | Mô hình host nắm quyền, mục 2.2 | file này |
| Camera và dựng cảnh | Top-down 45 độ, orthographic, sprite đứng, che khuất, camera co-op, mục 2.6 và 2.7. Số là [GIẢ ĐỊNH] chờ build | file này |
| Netcode | Dev chọn, bảng so sánh ở mục 6.3 | file này |
| Event Tracking | 73 sự kiện, mục 2.4: 46 gộp từ các GDD, 20 bổ sung, 5 của `ux-ui.md`, 2 của giờ giao thương khung Dave. Tab Sheet là bản đọc sửa tay, không sinh lại bằng `tools/xuat-event-tracking.mjs` | file này, tab Event Tracking |
| Prototype bay | Chạy được: bay 8 hướng, hãm, lướt, Oxy, túi, thử né S6, 16 thanh chỉnh, xuất JSON. Số bậc 0 khớp `nguoi-choi.md` (đo trong trình duyệt: buông từ vmax dừng sau 0,51 giây và 1,5 u, hãm dừng sau 0,18 giây, lướt 15 u/s) | `tools/prototype/bay.html` |

Số và kết luận của sim chỉ nằm ở file kết quả (`tools/ket-qua/sim-chuyen.md`, `sim-ca-cang.md`, `sim-combat.md`), mỗi file có mục đối chiếu mục tiêu.

## 1. Mục đích với người chơi

Người chơi chỉ thấy kết quả của hệ thống này:
- Co-op mượt: bạn vào giữa chừng không phải chờ, đồng đội bay không giật, thùng không bị nhân đôi hay biến mất khi hai người cùng nhặt hoặc giao.
- Luật mạng rõ ràng: rời phiên hay mất kết nối giữa chuyến không phải đường về an toàn (C10), host thoát thì thế giới về điểm lưu gần nhất (K23).
- Số trong game khớp số trong GDD vì dữ liệu đi một đường từ Sheet vào game, có máy kiểm.

## 2. Luật

### 2.1 Dữ liệu: một nguồn, một đường vào Unity `MVP`

1. Nguồn chuẩn của mọi số và danh mục là markdown trong repo: các bảng và khối máy sinh `<!--B:...-->` của GDD hệ thống, cùng script sinh bảng của vai (ví dụ `sim/vat-pham.mjs`). Sheet GDD là bản dán từ repo bằng `/gdd-sheet-sync` sau khi gd-qa chấm ĐẠT. Ngoại lệ: tab Lead sửa tay thì kéo bản Sheet về repo trước khi soạn tiếp (CLAUDE.md nguyên tắc 12). Unity không giữ số gõ tay trong prefab hay code.
2. Đường đi: khối markdown trong `gdd/he-thong/` -> `tools/xuat-data.mjs` (chưa làm, việc tiếp theo) -> `data/*.json` -> importer trong Unity Editor -> ScriptableObject. Exporter đọc thẳng khối markdown như các sim đang làm, không qua TSV của Sheet. Chạy importer chỉ lúc editor, game không gọi mạng khi chạy (game chơi offline được). Đổi sang Sheet làm nguồn chỉ khi GDM ghi DECISIONS.
3. ID là chuỗi ổn định do vai chủ tên đặt (khung mục 8), không dùng số thứ tự dòng. Tham chiếu giữa các bảng bằng ID. Đổi tên hiển thị không đổi ID. Mỗi thứ chỉ có một hệ ID (luật 7 dưới).
4. Exporter đọc cột theo tên header. Header lạ hoặc thiếu thì dừng, không đoán. Mọi khóa JSON và trường C# là ASCII không dấu.
5. Mỗi lần xuất chạy validator trước. Validator đỏ thì không xuất.
6. Round-trip: JSON xuất ra rồi đọc lại phải trùng từng trường. Selftest giữ phép kiểm này.
7. Nâng cấp dùng một hệ ID duy nhất là `UPG-<họ>-<bậc>` của gd-items (`vat-pham.md`). Các nhãn T-OXY, T-VO, T-DAY, T-TUI, T-DUNGCU ở `nguoi-choi.md` và `kinh-te-tien-trinh.md` chỉ là tên trục hiển thị, đổi một lần qua bảng ánh xạ trong `UpgradeData.truc`.
8. ScriptableObject ở bản build chỉ đọc. Trạng thái thế giới lưu bằng file save riêng (mục 2.3b), không ghi vào ScriptableObject.

Schema đề xuất (mỗi bảng một loại ScriptableObject, một asset mỗi dòng trừ khi ghi khác). Mọi loại có trường `nhan` (MVP, SauMVP) để dev lọc phạm vi.

| Loại SO | Trường chính (kiểu) | Nguồn | Nhãn |
|---|---|---|---|
| `ItemData` | id (string), tenVi, tenEn, nhom (enum), doHiem (enum), cachMang (tui, mang, keo, khong), khoi (float, chỉ khi cachMang là tui), coKien (Nho, Vua, Lon, chỉ CGO), canChe (bool, chỉ CGO), giayDong (float, chỉ CGO), hieuUng, giayDung, toiDaMoiChuyen (chỉ nhóm CON dùng trong chuyến: ví dụ CON-101 hồi 40 Oxy, 1,5 giây, tối đa 2 bình mỗi chuyến, chiếm túi theo khoi. Trần Oxy hồi cả chuyến theo K26 nằm ở `PlayerTuning`), giaTally (int, nếu bán được), giaTheoLoai (bool, true cho lồng sống CGO-121, 221, 321: giá một lồng bằng GTĐ mẫu sống của loài bên trong nhân 10 Tally, cộng hệ số tàu, theo `kinh-te-tien-trinh.md`. Khi đó giaTally bỏ trống), gtd (float), dai (enum), nhan | `vat-pham.md` khối ITEM, CGOSIZE, `kinh-te-tien-trinh.md` khối gia-kien | MVP |
| `ItemGroupData` | id, thanhVien (list itemId) | nhóm ID trong công thức kiểu "một trong SMP-212 tới 215" ở `vat-pham.md` | MVP (RCP-124, RCP-126 dùng nhóm ID ở chương 1) |
| `RecipeData` | id, noiChe (enum khoang), dauVao (list {itemId hoặc itemGroupId, soLuong}), dauRa ({itemId, soLuong}), giay (float, -1 là qua đêm), moBang (chương, người vớt, BPR id) | `vat-pham.md` khối RECIPE | MVP |
| `SalvageNodeData` | id, dai, dungCu (TOL id hoặc Tay), doCung (int), giayBac1 (float), soLanQuay (int), bangRoi (list {itemId, trongSo, soLuong}) | `vat-pham.md` khối NODE | MVP |
| `ToolData` | id, vaiTro (enum), bac (int), dmg, diemChoang, diemMe, tre, nhip, tam, vung, tieuHao (CON id) | `vat-pham.md` khối TOOL, `combat-driftlife.md` 3.3 | MVP |
| `UpgradeData` | id (UPG-xxx-n), ho (enum OXY, BAG, THR, ENV, RACK, MIN, HAR, NET), truc (nhãn T-xxx hiển thị), loai (BoDo, DungCu), bac, hieuUng (list {thamSo, giaTri}), giaTally, vatLieu (list), moBang (BPR id hoặc chương), nhan | `vat-pham.md` khối UPG, `kinh-te-tien-trinh.md` | MVP |
| `ShopEntryData` | itemId hoặc upgradeId, giaTally, chuongMo, hangCan, vatLieu (list) | `kinh-te-tien-trinh.md` bảng thứ mua | MVP |
| `EnemyData` | id (DL-xxx hoặc WD-xx), ten, phe (Driftlife, Wardens), dai, co (S, M, L), kieuHanhVi (enum), sinhLuc, nguongChoang, nguongMe (vô cực là miễn), mien (flags), khien (hướng, nếu có), vungPhatHien, khoangBoDuoi, tocDo, tocDoDuoi, kieuSinh (đơn, đàn, tổ), soConMoiDiem, batSong (enum cách bắt), nuoi (bool), bangRoiHa, mauSong (itemId), attacks (list `AttackData`), nhan | `combat-driftlife.md` Danh mục, 3.4, 3.4b, 3.6, Điểm sinh và rơi | MVP |
| `AttackData` (nhúng) | ten, kieu (can, xa, vung, tiepXuc, nuot), hinhVung, tam, dmgOxy, baoTruoc, thoiGianDanh, hoi, hoiChieu, canVe (bool), lucDay | `combat-driftlife.md` 3.4b | MVP |
| `BossData` | id (BS-n), ten, noi (BranchMap id), sinhLuc (một mình), heSoCoop, cacPha (list {nguong, coChe}), cachKet (list {kieu, roi}), thoiLuongMucTieu, nhan | `combat-driftlife.md` 3.7 | MVP cho BS-1 |
| `ZoneData` (dải) | id (Z1..3), tu, toi (u), soCot, soHang, moiTruong (E0..E3), tiLeSPR, tiLeSPD, tiLeHazard, soBeacon, aCoop (a của k(N)), loai (list EnemyData id), nhomTaiNguyen (list SLV id theo loại mảnh) | `map.md` 3.1, 3.3, 3.6, 3.8 | MVP |
| `TileData` (mảnh) | id, dai, loai (enum Mo, HanhLang, O, XacLon, Thuong, CoDinh), cong (4 bool), khe (list {loai SP-R/D/H/B, viTri, choPhep}), nuaNgoai (bool), prefab | `map.md` 6.1 | MVP |
| `HazardData` | id (H01..), loai, dmgOxy, choang (giây), lucDay, baoTruoc, giayBat, giayTat, kichThuocVung, soManh, daiMo, nhan | `map.md` 3.5 | MVP |
| `BranchMapData` (map nhánh) | id (N1..), scene, dai, chuong, nguoiVot (RS id), boss (BS id), khoa (list {cua, chia: TOL id}), thoiLuongMoiLanVao, khe (list {ma M1.. hoặc V1.., viTri}), trangThaiLuu (list khóa: cửa, vách, đường tắt), nhan | `map.md` 2.10, `vat-pham.md` luật T7, `cot-truyen.md` | MVP cho N1 |
| `ClueData` (vật truyện) | ma (MM hoặc V), itemId (STY), chuong, mocHien, branchMapId, khe, mucSoTay | `cot-truyen.md` mục 2.5, mục 6 | MVP cho chương 1 |
| `ShipTypeData` | id (TA01..), luuBen bỏ, kienNhan (giây kiên nhẫn), tipHeSo, trongSo, thichHang (list {thungId, trongSo}), mePhan (thungId tip gấp đôi), moChuong, moHang, thuongNhan (TR id), luatRieng ({kieu, thamSo}), nhan. Đề xuất của gd-tech theo khung Dave, chờ gd-quan khớp với tab Customer | `tram-va-cang.md` loại tàu | MVP cho tàu mở đầu |
| `CargoGroupData` | id (HC01..), kien (list CGO id), moChuong (int). Thùng là kiện chia hệ số thùng, giá thùng đọc từ giá kiện, lồng sống không chia | `tram-va-cang.md` Nhóm hàng, `vat-pham.md` | MVP |
| `RoomData` (khoang) | id (KH01..), ten, chuongMo, nguoiVot (RS id), capSua (list {vatLieu, giay}), viTriMatBang ({x, z, rong, sau}: tâm khoang và kích thước trên mặt bằng trạm, đơn vị u, mục 2.6) | `tram-va-cang.md` Danh mục, 2.6, 2.6b | MVP |
| `PortRankData` | hang (int), nguongDiem, tranChuong, mo (list) | `tram-va-cang.md` 2.5 | MVP |
| `StoryBeatData` | id (C1.x), chuong, dongChuong (bool, K25: chỉ mốc đóng chương mở dải mới), giaiDoanDongCo (giai đoạn động cơ phải lắp xong, chỉ khi dongChuong), truoc (list), dieuKien (list {loai, thamSo}, mọi điều kiện cùng đúng, không có "hoặc"), noi, canh, mo (list) | `cot-truyen.md` mục 6 (18 loại điều kiện) | MVP cho chương 1 |
| `AreaData` (địa danh) | id (A01..), ten (list tên khu hiển thị), branchMapId hoặc zoneId, nhan | `map.md` danh mục A01 đến A05 | MVP cho A01 |
| `CharacterProfile` | id (PC, RS, TR, NP, WD-P), ten, mau, preset, chieuCao | `ho-so-nhan-vat.md` mục 6 | MVP |
| `PlayerTuning`, `PortTuning`, `CombatTuning`, `EconomyTuning` (một asset mỗi loại) | tham số mục 3 của `nguoi-choi.md`, `tram-va-cang.md`, `combat-driftlife.md` 3.1, 3.2, 6b, `kinh-te-tien-trinh.md` | các file đó | MVP |
| Chuỗi và bước tutorial | Không thành SO ở bản này. gd-ux giữ `strings/strings.tsv` và bảng bước T01.. ở `ux-ui.md`, dev đọc thẳng. Câu hỏi mở 3 | `ux-ui.md` | MVP |

Dữ liệu động (không phải SO): `ItemInstance` (itemId, soLuong, sao 1 đến 3, loaiBenTrong cho lồng sống). Đầu giờ giao thương: `CatalogEntry` (thungId, soLuong, daBan), tối đa M loại, lập ở khoang liên lạc trước giờ giao thương. Lịch tàu sinh lúc mở giao thương từ `ShipTypeData`, danh mục và seed của ngày. `ShipInstance`: tauId (TA id), thuTu, gioDen, trangThai (vào, chờ ngoài, cập, giao xong, rời chưa giao), cuaNeo, thungId (một thùng mỗi tàu), datTruoc (bool), kienNhanCon (float). Thùng ở quầy: `CounterCrate` (cuaNeo, thungId, ai đang giữ chỗ). Danh mục và lịch tàu nằm trong file save (mục 2.3b), `ShipInstance` và `CounterCrate` chỉ sống trong giờ giao thương.

### 2.2 Đồng bộ co-op: ai nắm quyền `MVP`

9. Mô hình: host nắm quyền (listen server). Host là máy của người tạo thế giới (C2). Không có máy chủ riêng.
10. Phân quyền theo trạng thái:

| Hệ thống | Trạng thái | Ai nắm quyền | Gửi | Ghi chú |
|---|---|---|---|---|
| Người chơi | Vị trí, vận tốc, hướng, lướt | Máy của người đó | 20 lần mỗi giây, máy khác nội suy trễ 100 ms | Trả lời điểm chờ gd-tech của `nguoi-choi.md`: 20 Hz. Host kiểm tốc độ, vượt vmax cộng lực ngoài quá dung sai (mục 3) thì kéo về vị trí host |
| Người chơi | Oxy, túi đồ, tải | Máy của người đó tính, host kiểm | Khi đổi và 5 lần mỗi giây | Host quyết ngạt, kéo về, chia Oxy (theo `nguoi-choi.md`). Host giữ bộ đếm Oxy đã hồi từ vật tiêu hao trong chuyến của từng người, từ chối khi vượt 25% dung lượng bình, khi đang ngạt, hoặc khi bình đầy (K26) |
| Người chơi | Ngạt, được cứu, bị kéo về, Recall Beacon, Giữ chỗ | Host | Sự kiện tin cậy | |
| Người chơi | Trao đồ giữa hai người, thả đồ | Host | Yêu cầu gửi host, host chuyển và trả kết quả cho hai máy. Host từ chối khi người trao hoặc người thả đang ngạt (K27) | Không máy nào tự trừ túi trước khi host đồng ý |
| Vật kéo | Buồng ngủ đông, Lồng mẫu, kiện nổ, vật nặng | Người đang giữ nắm vị trí. Từ 2 người cùng kéo thì host nắm | 20 lần mỗi giây | Khớp luật kéo chung của `nguoi-choi.md` 2.1 |
| Chuyến | Seed, danh sách mảnh, khe đã kích hoạt, beacon | Host | Lúc bắt đầu chuyến, rồi chỉ gửi khe đã dùng | Mọi máy dựng map giống nhau từ seed (`map.md` 6.1) |
| Chuyến | Pha chu kỳ của hazard (H02, H03, H04...) | Tính từ seed chuyến cộng giờ host | Không gửi, mỗi máy tự tính | Lệch giờ máy khách sửa theo giờ host gửi kèm gói |
| Chuyến | Xác nhận ra chuyến (C5, 30 giây), xác nhận ngủ (K23, 30 giây), Bộ đếm ngày (số chuyến đã đi K22, ai đã về C9, giờ giao thương đã mở) | Host giữ đồng hồ, tính từ lúc người đầu tiên xác nhận | Sự kiện tin cậy | Không trả lời trong 30 giây tính là đồng ý |
| Khai thác | Node đang bị ai giữ, lượng còn | Host | Sự kiện | Khóa node cho một người (theo `vat-pham.md`) |
| Combat | Sinh lực, thanh Choáng, thanh Mê, trạng thái, vé tấn công của mọi kẻ địch | Host | 10 lần mỗi giây và sự kiện | Máy người bắn hiện hiệu ứng trúng ngay, host xác nhận (theo `combat-driftlife.md`) |
| Combat | Vị trí kẻ địch | Host | 10 lần mỗi giây, nội suy | |
| Trạm | Cấp và trạng thái khoang, giai đoạn động cơ, kho, hàng đợi xưởng, ô nuôi | Host | Sự kiện tin cậy | |
| Giờ giao thương | Đồng hồ giờ giao thương và chờ ngoài, danh mục và số thùng còn, lịch tàu, trạng thái từng tàu và thanh kiên nhẫn, thùng ở quầy, bơm khí đang giữ | Host | Sự kiện tin cậy, đồng hồ theo giờ host, thanh kiên nhẫn host tính và máy người chơi nội suy | Chi tiết ở mục 2.5 |
| Giờ giao thương | Thùng trên tay | Người mang giữ vị trí, host giữ sự tồn tại | Nhặt, giao, bắt đầu bơm khí là yêu cầu gửi host | Hai người cùng nhặt một thùng: yêu cầu tới host trước được nhận, người sau bị từ chối và đi tiếp việc khác. Tàu rời lúc đang cầm thùng của nó thì thùng về danh mục và tay trống |
| Kinh tế | Tally, điểm cảng, Hạng cảng, thứ đã mua, cấp trang bị chung | Host | Sự kiện tin cậy | Một ví chung (C3, C4) |
| Truyện | Mốc đã xong, vật manh mối đã nhặt, người vớt đã tỉnh | Host | Sự kiện tin cậy | Mốc là trạng thái thế giới. Cảnh là trình bày: mỗi máy có hàng chờ cảnh và danh sách cảnh đã xem riêng, phát ở điểm nghỉ (theo `cot-truyen.md` mục 6) |
| Giao tiếp | Ghim món, Ping | Máy của người đó | Sự kiện, không tin cậy | |
| Giao diện | Menu, bảng, cài đặt | Từng máy | Không gửi | Không tạm dừng toàn cục khi có từ 2 người (C7) |

11. Mọi thao tác đổi trạng thái chung (nhặt, bốc, sửa, mua, chế, trao đồ) là yêu cầu gửi host. Máy người chơi được hiện kết quả dự đoán. Host trả lời trong cửa sổ trả lời (mục 3), sai thì máy người chơi lùi lại.

### 2.3 Vào giữa chừng, số người N, rời phiên, mất kết nối `MVP`

12. Vào phiên: host cấp cho mỗi người một mã slot (1 đến 4) lúc vào lần đầu, lưu trong thế giới. Người vào lại được nhận ra bằng mã slot gắn với tài khoản của người đó. Tài khoản là ID người chơi của nền tảng mà netcode dùng (Steam ID nếu bán trên Steam, hoặc ID của dịch vụ lobby được chọn ở mục 6.3), không phải tài khoản riêng của game. Người mới lấy slot trống thấp nhất. Hết 4 slot thì từ chối với lời báo "Phòng đầy". Host xóa được nhân vật của người đã rời (theo `nguoi-choi.md` 2.9).
13. Người mới vào giữa chừng: buồng của người đó được đưa về trạm ở điểm nghỉ kế tiếp (cảnh của `cot-truyen.md` 2.7), không lấp buồng đã tắt của Ember. Trong lúc chờ, người đó ở trạng thái Chờ vào: xem được, chưa điều khiển. Nếu đang giờ giao thương thì vào giờ giao thương ngay khi buồng về, số tàu của giờ giao thương đang chạy không đổi.
14. Số người N cho hệ số theo số người lấy lúc sinh và không đổi tới hết thứ đó:

| Ngữ cảnh | N là | Nguồn |
|---|---|---|
| Chuyến (k(N) của dải) | Số người đã xác nhận ra chuyến lúc chuyến bắt đầu (C5), không tính người ở lại | `map.md` 3.8, C5 |
| Kẻ địch (Sinh lực, ngưỡng) | Số người đang ở ngoài trong cùng map lúc kẻ địch sinh hoặc lúc vào phòng boss | `combat-driftlife.md` 6b |
| Giờ giao thương (số tàu trong giờ giao thương, số cửa neo, điểm) | Số người online lúc mở giao thương | `tram-va-cang.md` mục giờ giao thương, `sim-ca-cang.md` mục 4 |

15. Người rời phiên chủ động: nhân vật ở lại trạm (C2). Rời khi đang ngoài chuyến thì tính như bị kéo về (K2, chỉ giữ 1 món), theo C10.
16. Mất kết nối: mất gói liên tục quá thời gian phát hiện (mục 3) mới tính là rớt. Người rớt giữa chuyến vào Giữ chỗ 15 giây theo `nguoi-choi.md` 2.9 (Giữ chỗ tối đa 1 lần mỗi chuyến cho mỗi người, lần thứ hai tính như bị kéo về ngay, để không dùng rút mạng dừng đồng hồ ngạt. gd-character đã ghi trần này vào `nguoi-choi.md` 2.9). Quá 15 giây thì tính như bị kéo về (K2), theo C10. Vào lại trong 15 giây bằng cùng mã slot thì nhận lại nhân vật. Người rớt là người cuối còn ngoài thì chuyến chung chờ tối đa 15 giây đó. Trong trạm và giờ giao thương dùng cùng cửa sổ 15 giây: hết hạn thì kiện trên tay rơi tại chỗ, host giữ.
17. Host mất kết nối hoặc thoát: phiên kết thúc với mọi người. Mặc định không chuyển host, vì thế giới thuộc về host (C2) và chuyển host là việc riêng của stack mạng. Dev được đề nghị chuyển host nếu stack chọn hỗ trợ sẵn với chi phí thấp (câu hỏi mở 2). Mọi người về menu, thế giới trở về điểm lưu gần nhất trong ba điểm của luật 18 (K23, C10), chuyến hay giờ giao thương đang dở bị mất. Đây là câu trả lời cho điểm chờ gd-tech của `nguoi-choi.md` và `map.md`.

### 2.3b Lưu `MVP`

18. Tự lưu ở ba điểm (K23, khung sửa lần 5, log 65): sau mỗi chuyến khi mọi người đã về trạm, sau giờ giao thương, và lúc ngủ. Không có lưu tay. Thoát giữa một chuyến hoặc giữa giờ giao thương, kể cả chơi một mình, thì lần sau vào lại ở điểm lưu gần nhất, mất phần đang dở. Ba điểm lưu dùng chung một file và cùng cách ghi an toàn của luật 20.
18b. Bố cục map của từng chuyến lưu theo ngày và số thứ tự chuyến: `seedChuyen = hash(worldSeed, ngay, soThuTuChuyen)`. Nạp lại ở điểm lưu sau chuyến 1 rồi đi chuyến 2 thì bố cục chuyến 2 giống hệt lần trước, không lưu lại chuyến để đổi bố cục. Bộ sinh dùng RNG riêng theo luật tất định ở mục 7 (`map.md` 6.1, bản tham chiếu `sim/bo_cuc.py`).
19. File save theo thế giới, chỉ trên máy host. Khách giữ bản sao hồ sơ máy (cài đặt, phím, tiến độ tutorial), không đồng bộ qua mạng.
20. Ghi an toàn: ghi ra file tạm rồi đổi tên đè file chính. Giữ một bản `.bak` của lần lưu trước. File chính hỏng thì mở `.bak` và báo người chơi lùi về điểm lưu trước đó. Lưu lỗi 3 lần liền thì cho người chơi thoát, báo rõ lùi về điểm lưu cuối ghi được (khớp UI-44 của `ux-ui.md`).
21. File save có số phiên bản dữ liệu. Bản build đổi dữ liệu thì chạy bước migrate có ghi log. Không migrate được thì không mở và báo.
22. Trường của file save (gộp từ 8 GDD):

| Nhóm | Trường | Kiểu | Nguồn |
|---|---|---|---|
| Thế giới | phienBanSave, worldId, worldSeed, ngay, daySeed, playSecondsTotal, daKetGame (K24, chơi tiếp được ở ngày cuối) | số, chuỗi, bool | khung K23, K24 |
| Ngày | soChuyenDaDi (K22, tối đa 2), caDaMo, caDaXong, diemLuu (sau chuyến 1, sau chuyến 2, sau giờ giao thương, ngủ), seedChuyen theo số thứ tự chuyến đã sinh trong ngày | số, bool, enum | khung K22, K23, `tram-va-cang.md` luật 63, 65 |
| Người chơi theo slot | maSlot, ten, mau, preset, viTriTrongTram, daRoi | | C2, `nguoi-choi.md` 2.9 |
| Trang bị chung | cấp từng UPG đã mua, bản thiết kế, dụng cụ đã mở | list | C4, `vat-pham.md` |
| Kho | list `ItemInstance` | | `vat-pham.md` |
| Trạm | trạng thái và cấp từng khoang, giai đoạn động cơ, hàng đợi xưởng (gồm mẻ qua đêm), ô nuôi {loài, tuổi, đã cho ăn} | | `tram-va-cang.md` mục 6 |
| Cảng | Tally, điểm cảng, Hạng cảng, thứ đã mua, số lần cập bến của tàu có tên, danh mục bán đã lập, lịch tàu của ngày (sinh lại từ daySeed được, lưu để kiểm) | | `kinh-te-tien-trinh.md` mục 6, `tram-va-cang.md` |
| Truyện | mốc đã xong, vật manh mối đã nhặt, người vớt đã tỉnh, quest đã mở. Theo từng slot: hàng chờ cảnh, danh sách cảnh đã xem | | `cot-truyen.md` mục 6 |
| Map nhánh | theo từng N: cửa, vách, đường tắt đã mở, buồng đã vớt, boss đã kết và cách kết | | `map.md` 6.1 |

### 2.4 Event Tracking cho playtest offline `MVP`

23. Game ghi sự kiện ra file JSON Lines cục bộ, mỗi phiên một file, trong thư mục save. Không gửi mạng (bán đứt, offline, không telemetry ngoài). Người chơi playtest gửi file khi được hỏi.
24. Trường chung của mọi sự kiện: `session_id`, `world_id`, `world_seed`, `build`, `t` (giây từ đầu phiên), `play_seconds_total` (giờ chơi cộng dồn của thế giới, để đo thời lượng chương qua nhiều phiên), `day`, `chapter`, `n_players`, `slot`. Bảng dưới chỉ ghi tham số riêng.
25. Máy nào ghi: sự kiện do host nắm (Tally, giờ giao thương, mốc, khoang, combat) chỉ máy host ghi. Sự kiện của người chơi (Oxy, lướt, nhặt, giao diện, mạng) mỗi máy tự ghi của mình. Gộp file các máy theo `session_id` không đếm trùng.
26. Tên sự kiện tiếng Anh snake_case, tiền tố theo nhóm. Tên nhóm (Session, Day, Trip, Item, Combat, Port, Station, Economy, Story, UX, Net) là quyết định của gd-tech, khác danh sách nhóm của khuôn Dungeon Builder. Các tên tiếng Việt trong GDD khác (ví dụ `trung_don_nguoi_choi`) đổi theo bảng này. Mỗi sự kiện gắn một câu hỏi playtest ở cột Dùng để, sự kiện không trả lời câu nào thì không thêm.
27. Khi dán tab Event Tracking: bỏ cột Nguồn, cột Dùng để dán vào cột Description của khuôn (`gdd-sheet-khuon-indie.md` mục 6). Tham số và kiểu ghép theo thứ tự, mỗi tham số một kiểu.

| No | Group | Event Name | When To Send | Event Params Key | Dùng để | Value Type | Nguồn |
|---|---|---|---|---|---|---|---|
| 1 | Session | session_start | Mở thế giới | world_id, is_host, input_device | Đếm phiên, thiết bị | string, bool, string | mới |
| 2 | Session | session_end | Thoát hoặc rớt | reason (quit, host_lost, crash), minutes | Phiên dài bao lâu, rớt mạng bao nhiêu | string, float | mới |
| 3 | Session | player_join | Người vào giữa chừng | player_id, phase | Vào giữa chừng có chờ lâu không | string, string | mới |
| 4 | Session | player_leave | Người rời | player_id, phase, reason | | string, string, string | mới |
| 5 | Day | day_start | Thức dậy | ships_scheduled | Một ngày dài bao lâu (khung mục 9) | int | mới |
| 6 | Day | day_end | Vào buồng ngủ | minutes, trips, port_shift_done | | float, int, bool | mới |
| 7 | Trip | trip_start | Cả nhóm xác nhận ở cửa khí | seed, chapter, zone_target, n_players | Thời lượng chuyến theo chương | int, int, string, int | `map.md` 6.2 |
| 8 | Trip | player_trip_start | Mỗi người rời cửa khí | player_id, slot, suit_tiers, tools | | string, int, string, string | `nguoi-choi.md` |
| 9 | Trip | zone_enter | Vào dải | player_id, zone, env_ok | Người chơi có vào dải thiếu cấp không (K6) | string, string, bool | `map.md` 6.2 |
| 10 | Trip | player_oxy_threshold | Oxy qua 50, 25, 10, 0% | player_id, threshold, trip_seconds, can_return | Ngưỡng cảnh báo có kịp không | string, int, float, bool | `nguoi-choi.md`, `ux_hud_warning` của `ux-ui.md` gộp vào đây |
| 11 | Trip | player_hit | Người chơi trúng đòn hoặc hazard | player_id, source_id, dmg_raw, dmg_final | Combat và hazard ăn bao nhiêu Oxy (S1) | string, string, float, float | `nguoi-choi.md`, `trung_don_nguoi_choi` của `combat-driftlife.md`, trúng hazard của `map.md` |
| 12 | Trip | player_dash | Lướt | player_id, oxy_cost | Lướt có thành cách đi chính không | string, float | `nguoi-choi.md` |
| 13 | Trip | player_choking_start | Oxy về 0 | player_id, x, bag_value | Tỉ lệ ngạt (khung mục 9) | string, float, float | `nguoi-choi.md` |
| 14 | Trip | player_choking_end | Hết ngạt | player_id, result (rescued, recovered, pulled_back), kept_item | Co-op cứu được bao nhiêu | string, string, string | `nguoi-choi.md` |
| 15 | Trip | player_oxy_share | Chia Oxy xong | from, to, amount | | string, string, float | `nguoi-choi.md` |
| 16 | Trip | recall_start | Bắt đầu giữ Recall Beacon | player_id, beacon_id | | string, string | `map.md`, `nguoi-choi.md` |
| 17 | Trip | recall_end | Xong hoặc hủy | player_id, done, cancel_reason | Recall có bị hủy quá nhiều không | string, bool, string | `map.md`, `nguoi-choi.md` |
| 18 | Trip | branch_enter | Vào map nhánh | player_id, branch_id, via (gate, skiff) | | string, string, string | `map.md` 6.2 |
| 19 | Trip | player_trip_end | Mỗi người kết thúc chuyến | player_id, end_type (airlock, recall, pulled_back, left), load, bag_value, oxy_left, end_reason (bag_full, oxy, choice) | Chuyến về vì túi hay vì Oxy (sim chuyến) | string, string, float, float, float, string | `nguoi-choi.md` |
| 20 | Trip | trip_end | Người cuối cùng về | minutes, team_value | Thời lượng chuyến nhóm | float, float | `map.md` 6.2 |
| 21 | Item | item_pickup | Nhặt hoặc khai thác xong | player_id, item_id, qty, source_id | Lượng nhặt theo dải và theo người (k(N)) | string, string, int, string | `vat-pham.md` |
| 22 | Item | item_lost_on_recall | Bị kéo về | player_id, lost (list), kept | K2 đau tới đâu | string, string, string | `vat-pham.md` |
| 23 | Item | item_craft | Chế xong | recipe_id, room, qty | Công thức nào được dùng | string, string, int | `vat-pham.md` |
| 24 | Combat | creature_disabled | Driftlife vào Choáng hoặc Ngủ | creature_id, kind (stun, sleep), n_attackers | S3 khóa liên tục | string, string, int | `driftlife_choang`, `driftlife_ngu` của `combat-driftlife.md` |
| 25 | Combat | creature_captured | Bắt sống xong | creature_id, method, stars, seconds | S2 bắt so với hạ | string, string, int, float | `bat_song_xong` |
| 26 | Combat | creature_killed | Hạ xong | creature_id, finisher (weapon, quick_finish), seconds | S2 | string, string, float | `ha_driftlife` |
| 27 | Combat | capture_failed | Bắt hỏng | creature_id, reason | Bắt có quá khó không | string, string | `bat_that_bai` |
| 28 | Combat | boss_phase | Boss chuyển pha | boss_id, phase, seconds | S5 thời lượng boss | string, int, float | `boss_chuyen_pha` |
| 29 | Combat | boss_end | Boss kết | boss_id, ending (defeat, drive_off), seconds, n_players | S5, S4 | string, string, float, int | `boss_ket` |
| 30 | Port | port_shift_start | Mở giao thương | ships, n_players, docks, catalog_types, crates_total | Số tàu theo N, danh mục lúc mở có đủ không | int, int, int, int, int | `tram-va-cang.md` |
| 31 | Port | port_shift_skip | Nghỉ giao thương | day | Giờ giao thương có bị bỏ nhiều không | int | `tram-va-cang.md` |
| 32 | Port | ship_docked | Tàu cập cửa neo | ship_type, dock, waited | Tàu chờ ngoài bao lâu mới cập | string, int, float | `tram-va-cang.md` |
| 33 | Port | port_catalog_set | Bấm Mở giao thương sau khi lập danh mục | items (list item_id và số thùng), crates_total, has_preorder, seconds_on_screen | Người chơi lập danh mục thế nào, mất bao lâu, có giữ hàng cho đơn đặt trước không | string, int, bool, float | `tram-va-cang.md` |
| 34 | Port | ship_called | Tàu cập cửa neo và hiện món gọi | ship_type, item_id, preorder, patience_max | Món nào hay được gọi, tàu nào gọi gì | string, string, bool, float | `tram-va-cang.md` |
| 35 | Port | crate_delivered | Giao thùng được nhận | ship_type, item_id, price, tip, patience_left_pct, player_id | Tally và tip mỗi lần giao, ai giao | string, string, int, int, float, string | `tram-va-cang.md` |
| 36 | Port | ship_left_unserved | Tàu rời khi chưa giao | ship_type, item_id, reason (patience, waited_out, shift_end), seconds_docked | Tỉ lệ tàu phục vụ xong (sim giờ giao thương) | string, string, string, float | `tram-va-cang.md` |
| 37 | Port | port_shift_end | Kết thúc giờ giao thương | seconds, served, left, not_arrived, tally, tip, port_points, end_reason (timeout, last_ship, out_of_stock) | Giờ giao thương dài bao lâu, giờ giao thương có kết sớm vì hết hàng không | float, int, int, int, int, int, int, string | `tram-va-cang.md` |
| 38 | Port | incident | Sự cố bắt đầu hoặc xong | incident_id, state, seconds | | string, string, float | `tram-va-cang.md` |
| 39 | Station | room_repaired | Khoang sửa xong | room_id, level | Nhịp sửa trạm theo ngày | string, int | `tram-va-cang.md` |
| 40 | Station | survivor_awake | Người vớt tỉnh | survivor_id | | string | `tram-va-cang.md`, `cot-truyen.md` |
| 41 | Economy | tally_gain | Nhận Tally | source (crate, tip, air_pump, preorder), amount | Tỉ lệ Tally từ cảng (khung mục 9) | string, int | `tally_nhan` của `kinh-te-tien-trinh.md` |
| 42 | Economy | tally_spend | Tiêu Tally | item_id, amount | | string, int | `kinh-te-tien-trinh.md` sự kiện tally_chi |
| 43 | Economy | port_rank_up | Lên Hạng cảng | rank, day | Số ngày tới Hạng 3 | int, int | `hang_cang_len` |
| 44 | Story | story_beat_done | Mốc truyện xong | beat_id | Thời lượng chương (khung mục 9) | string | `cot-truyen.md`, `chuong_xong` của `kinh-te-tien-trinh.md` gộp (mốc đóng chương) |
| 45 | Story | cutscene_skipped | Bỏ qua cảnh | scene_id, line_index | Cảnh có dài quá không (P4) | string, int | `cot-truyen.md` |
| 46 | UX | ux_tutorial_step | Bước tutorial hiện, xong hoặc bỏ | step_id, state, seconds, trips_done | FTUE chương 1 | string, string, float, int | `ux_tut_step_*` của `ux-ui.md` gộp |

Sự kiện 47 đến 73:

| No | Group | Event Name | When To Send | Event Params Key | Dùng để | Value Type | Nguồn |
|---|---|---|---|---|---|---|---|
| 47 | Trip | player_item_trade | Trao đồ xong | from, to, item_id, qty | Co-op có trao đồ không | string, string, string, int | `nguoi-choi.md` mục 6 |
| 48 | Trip | player_pinned_item | Ghim món | player_id, item_id | Ghim món trước lần ngạt đầu (mục tiêu trên 70%) | string, string | `nguoi-choi.md` mục 6 |
| 49 | Trip | beacon_seen | Thấy Recall Beacon lần đầu trong chuyến | player_id, beacon_id | Thời gian từ thấy tới dùng beacon | string, string | `map.md` mục 6.2 |
| 50 | Trip | zone_exit | Ra dải | player_id, zone | | string, string | `map.md` mục 6.2 |
| 51 | Trip | branch_exit | Ra map nhánh | player_id, branch_id, minutes | Thời lượng mỗi lần vào map nhánh | string, string, float | `map.md` mục 6.2 |
| 52 | Trip | branch_unlock | Mở khóa cửa hay vách map nhánh | branch_id, lock_id | | string, string | `map.md` mục 6.2 |
| 53 | Trip | hazard_warn | Hazard bắt đầu báo trước gần người chơi | hazard_id, warn_seconds, on_screen | Báo trước đo trên build từ 1 giây (`map.md` tiêu chí), vùng báo trước có nằm trong màn không (mục 2.6) | string, float, bool | `map.md` mục 8 |
| 54 | Combat | creature_wake | Driftlife tỉnh khỏi Choáng hoặc Ngủ | creature_id, kind | S3 | string, string | `driftlife_tinh` |
| 55 | Combat | attack_ticket | Vé tấn công cấp hoặc trả | creature_id, player_id, state | Áp lực mỗi người | string, string, string | `ve_tan_cong_cap` |
| 56 | Station | creature_born | Con non sinh ở khoang nuôi | species_id | Nhịp nuôi | string | `tram-va-cang.md` mục 6 |
| 57 | Story | clue_picked | Nhặt vật manh mối | clue_id, item_id | Manh mối có bị bỏ sót không | string, string | `cot-truyen.md` mục 6 |
| 58 | Story | quest_item_dropped | Vật nhiệm vụ rơi khi bị kéo về | item_id, branch_id | | string, string | `cot-truyen.md` mục 6 |
| 59 | Story | survivor_feature_open | Người vớt mở tính năng | survivor_id, room_id | | string, string | `cot-truyen.md` mục 6 |
| 60 | Net | net_hold_start | Một người vào Giữ chỗ | player_id, phase | Rớt mạng bao nhiêu | string, string | luật 16 |
| 61 | Net | net_hold_end | Hết Giữ chỗ | player_id, result (rejoined, pulled_back) | | string, string | luật 16 |
| 62 | Net | net_rollback | Máy người chơi lùi lại sau dự đoán sai | action, ms | Lùi lại có hiếm không (mục 7b) | string, int | luật 11 |
| 63 | Net | net_reject_hash | Từ chối vào phiên vì lệch hash dữ liệu | build_host, build_client | | string, string | mục 4 |
| 64 | Net | net_rtt | Mỗi 30 giây | player_id, rtt_ms | Độ trễ thực tế | string, int | mục 3 |
| 65 | Session | save_written | Tự lưu xong ở một trong ba điểm (K23) | save_point (after_trip, after_shift, sleep), ms | Lưu chậm hay không, người chơi thoát ở điểm nào | string, int | luật 18 |
| 66 | Session | save_failed | Một lần ghi lưu lỗi | save_point, attempt (1 đến 3) | Lưu lỗi bao nhiêu lần, lùi về điểm nào (UI-44) | string, int | luật 20 |
| 67 | UX | ux_screen_open | Mở một màn | screen_id, device, day_phase | Màn nào hay mở, mở lúc nào trong ngày | string, string, string | `ux-ui.md` mục 6 |
| 68 | UX | ux_pin_changed | Đổi món ghim | item_id, source (auto, player) | Người chơi có tự ghim không | string, string | `ux-ui.md` mục 6 |
| 69 | UX | ux_input_device_change | Đổi giữa bàn phím chuột và gamepad | from, to | Tỉ lệ dùng gamepad | string, string | `ux-ui.md` mục 6 |
| 70 | UX | ux_settings_change | Đổi một cài đặt | key, value | Cài đặt nào hay bị đổi | string, string | `ux-ui.md` mục 6 |
| 71 | UX | ux_dead_end | Đứng yên ở một màn trên 20 giây | screen_id, idle_seconds | Màn nào làm người chơi bí | string, float | `ux-ui.md` mục 6 |
| 72 | Port | air_pump_done | Bơm khí xong | player_id, ship_type, patience_gain_pct, tally | Việc phụ có được làm không (sim giờ giao thương mục 6) | string, string, float, int | `tram-va-cang.md` |
| 73 | Port | port_player_idle | Kết thúc giờ giao thương, mỗi người một dòng | player_id, idle_seconds, shift_seconds | Rảnh mỗi người tối đa 30% ở người chơi trễ 2 giây (sim giờ giao thương). Rảnh là thời gian không có thùng ở quầy chưa ai nhận, không đang cầm thùng, không có tàu đang chờ bơm khí | string, float, float | `tram-va-cang.md` |

Sự kiện 72 và 73 thêm ở đợt 9 cho giờ giao thương khung Dave (cùng với việc viết lại 30 đến 37). Sự kiện 67 đến 71 lấy từ bảng sự kiện của `ux-ui.md` mục 6, tham số đổi sang tên tiếng Anh snake_case theo luật 26. Từ đợt 8 (2026-11-20) tab Event Tracking là bản đọc sửa tay, `tools/xuat-event-tracking.mjs` chỉ còn dùng cho selftest (DECISIONS 2026-11-20).

### 2.5 Giờ giao thương khung Dave: cách đo, đồng bộ, sự kiện `MVP`

28. Cách đo (`tools/sim-ca-cang.mjs`): N người chia việc, mỗi người chọn việc gần nhất chưa ai nhận theo thứ tự mang thùng đang cầm tới cửa neo, nhặt thùng ở quầy, bơm khí. Trễ phản xạ là thời gian chờ trước mỗi lần đi và tính là bận. Rảnh là thời gian không có việc nào để làm. Số tàu một giờ giao thương, số cửa neo, rảnh, tip, Tally nằm ở `tools/ket-qua/sim-ca-cang.md`.
29. Host nắm toàn bộ trạng thái giờ giao thương: đồng hồ, danh mục và số thùng còn, lịch tàu (sinh lúc mở giao thương từ seed ngày, số tàu theo số người N lúc mở giao thương), trạng thái từng tàu, kiên nhẫn từng tàu, thùng ở quầy. Máy người chơi chỉ gửi ba yêu cầu: nhặt thùng ở ô quầy, giao thùng ở cửa neo, bắt đầu hoặc dừng giữ bơm khí.
30. Hai người cùng nhặt một thùng hay cùng giữ bơm khí một tàu: yêu cầu tới host trước được nhận. Người sau nhận từ chối, máy đó hiện lại tay trống và đi việc khác, không mất gì. Giao thùng vào đúng lúc tàu hết kiên nhẫn: host quyết, máy người chơi lùi lại như luật 11.
31. Người vào giữa giờ giao thương không đổi lịch giờ giao thương đó (luật 13). Người rớt giữa giờ giao thương khi đang cầm thùng: thùng rơi tại chỗ, host giữ, người khác nhặt được, hết Giữ chỗ mà tàu đã rời thì thùng về danh mục.
32. Sự kiện một giờ giao thương theo thứ tự: `port_catalog_set` (trước giờ giao thương), `port_shift_start`, rồi mỗi tàu `ship_docked`, `ship_called`, `crate_delivered` hoặc `ship_left_unserved`, thêm `air_pump_done` khi có, cuối giờ giao thương `port_shift_end` và `port_player_idle` mỗi người một dòng. Sự kiện 30, 32 tới 37 do host ghi, 73 do máy của người đó ghi (luật 25). Tỉ lệ tàu phục vụ xong tính bằng số `crate_delivered` chia số tàu trong lịch (`ships` của `port_shift_start`). Tip trong Tally tính bằng tổng `tip` và `patience_gain` của bơm khí chia tổng Tally giờ giao thương.
33. `PortTuning` cần các khóa: soTauTheoN (4 giá trị), cuaNeoTheoN (4 giá trị), caToiDa (300 giây, luật 34), choNgoai, thungHienSau, tuoiRoiGiuCua, kienNhan theo loại tàu, heSoHangHayGoi theo loại tàu (Tikko đồ Trái Đất 6, phế liệu 1), chiGoi theo loại tàu (Tàu vội chỉ gọi nhóm băng và khoáng, luật 24), doGoiTheoBacGia (Hàng chợ 3, sinh học 2, chế 1,5, sống 1, hiếm 1), giaThung theo món và giaLongTheoLoai (khối giaThung của gd-economy), tipToiDa, bom {batLucCap (50%, luật 28), sau, giu, hoi, tally}, datTruoc {thuTu, heSo}, caDau (2 tàu Loose Bolt, luật 67). Giá trị đặt theo kết quả sim, giá do gd-economy đặt.

### 2.6 Camera và dựng cảnh top-down 45 độ `MVP`

Nguồn: Lead chốt Art 2026-11-23 (`DECISIONS.md`), quy ước `briefs/dot10-top-down.md`. Một camera cho trạm, cảng, ngoài không gian. Mỗi máy tự chạy camera của mình, camera không đồng bộ qua mạng.

34. Dựng cảnh: Unity dựng cảnh 3D, mọi asset là 2D. Mặt phẳng chơi là mặt phẳng XZ của Unity (y = 0). Phía bắc của map là +Z, phía trên màn hình. Đơn vị 1 u = 1 đơn vị Unity, nhân vật cao 1 u (khớp `map.md`). Mọi tốc độ, tầm, bán kính trong GDD là u hoặc u/s trên mặt phẳng này, không đổi số.
35. Camera: Rotation (45, 0, 0) cố định, không xoay, không đổi góc theo cảnh. Phép chiếu orthographic. Camera đặt trên đường chéo cách tâm nhìn 40 u (near 0,3, far 120). Điều khiển 8 hướng theo trục màn hình: lên màn hình là +Z. Tốc độ bay là u/s trên mặt đất, nên chạy dọc màn hình trông chậm hơn chạy ngang khoảng 0,71 lần (cos 45 độ). Không bù tốc độ, vì đơn vị khoảng cách phải giữ nguyên (đợt 10). Playtest xem người chơi có phàn nàn (câu hỏi mở 6).
36. Sprite đứng: nhân vật, Driftlife, vật phẩm, tàu, máy và vật cản cao là sprite quay mặt camera, Rotation (45, 0, 0) giống camera nên không bị méo. Pivot ở chân, chân đặt đúng điểm dưới sàn. Vị trí logic, hitbox, tầm và vùng báo trước tính theo điểm chân trên mặt phẳng XZ, không theo thân sprite. Mỗi sprite đứng có một bóng giả (sprite ellipse dẹt đặt ở y = 0,01) để người chơi thấy điểm chân.
37. Thứ tự vẽ: vật nào chân nằm phía nam hơn (Z nhỏ hơn) vẽ sau, che vật phía bắc. Dev đặt Transparency Sort Mode là Custom Axis (0, 0, -1) hoặc dùng Sorting Order tính từ -Z (chiều dấu kiểm bằng ca thử: hai sprite chân ở Z = 0 và Z = -1, sprite Z = -1 phải che). Vật lớn nhiều ô (xác tàu, máy) cắt thành lát theo chiều ngang, mỗi lát một pivot ở mép nam của lát, để người đi giữa hai lát vẫn che đúng. Hazard, vùng báo trước, bóng, sàn vẽ trước mọi sprite đứng.
38. Sàn và nền: sàn trạm, sàn cảng, mảnh map, vùng báo trước và hazard là tile hoặc quad phẳng nằm trên XZ, không phải sprite đứng. Tilemap dùng Cell Swizzle XZY. Vùng báo trước và vùng trúng là đĩa phẳng trên mặt đất: hình tròn bán kính r của GDD trông là ellipse rộng 2r, cao 1,41r trên màn hình, đúng theo phép chiếu, artist không vẽ ellipse tay. Nền sao là một quad lớn đi theo camera, UV cuộn 5% theo vị trí camera, chỉ để trang trí, không có hitbox. Không có model 3D.
39. Vật lý: Physics 3D, mọi collider là trụ hoặc hộp đứng trên mặt phẳng XZ, khóa y và khóa xoay x, z. Bán kính tầm, vùng báo trước, bán kính hút nhặt tính trên XZ bằng khoảng cách phẳng (bỏ y). Vị trí gửi mạng là (x, z) hai float, không gửi y, cùng tần số của mục 2.2.
40. Che khuất: vật cao (vách, xác tàu, máy, xác lớn) nằm trên layer Occluder, mang trường `doCao` (u). Mỗi khung, host và khách đều raycast từ camera tới điểm chân mỗi người chơi còn ngoài chuyến (và người ở trạm, cảng). Người chơi bị Occluder nằm giữa thì vật đó dùng shader dither cắt một ellipse quanh người, rộng 5 u và cao 3,5 u trên màn hình, alpha phần cắt 0,35, mờ dần 0,15 giây, trả lại 0,25 giây sau khi hết che. Dùng shader dither chứ không mờ cả vật, vì vách dài che nhiều người một lúc và mờ cả vách làm mất layout. Hiệu ứng chỉ là hình ảnh, không đổi va chạm hay tầm nhìn của Driftlife. Vùng báo trước và hazard vẽ trên sàn, không bị che.
40b. Ngắm bằng chuột vào sprite cao: sprite đứng che phần mặt phẳng phía bắc chân, nên không ngắm theo điểm con trỏ chiếu xuống mặt đất. Mỗi khung dev bắn raycast từ con trỏ vào collider quad của sprite Driftlife và boss (layer Targetable, quad cùng cỡ sprite, cùng Rotation camera). Trúng quad của kẻ địch cỡ L hoặc boss thì hướng ngắm là từ người chơi tới tâm hitbox trên XZ của con đó (không phải điểm chân, không phải điểm con trỏ chiếu xuống đất). Cỡ S và M giữ ngắm theo điểm con trỏ chiếu xuống mặt phẳng XZ, vì sprite thấp không che đáng kể. Trúng nhiều quad thì lấy con có chân nằm phía nam nhất (cùng thứ tự vẽ của luật 37). Ngoại lệ: gamepad ngắm theo hướng cần analog, không dùng raycast. Đòn vùng nhắm điểm (Súng lưới) vẫn dùng điểm con trỏ chiếu xuống đất, không bắt vào tâm. Đây là cách đọc con trỏ, không đổi hitbox hay luật combat. Nguồn: giả định của gd-combat GD-073.
41. Camera co-op (mọi N, kể cả N = 1): mỗi máy tính khung chứa tất cả người đang ngoài chuyến ở trạng thái Bay, Lướt, Kéo vật, Kích Recall, Trúng đòn, Ngạt, Được cứu, Giữ chỗ (không tính Về an toàn, Bị kéo về, Rời phiên, Chờ vào). Tâm là tâm hộp bao các điểm chân đó. Zoom (orthographic size) tăng vừa đủ để hộp bao cộng lề 4 u nằm trong màn, không dưới Zmin, không quá Zmax. Camera đi theo bằng SmoothDamp 0,25 giây, zoom đổi tối đa 3 đơn vị size mỗi giây, có vùng chết 1 u để đứng yên không rung.
42. Quá ngưỡng: khi hộp bao không vừa Zmax (người xa nhau hơn ngưỡng co-op ở bảng dưới) camera đứng ở Zmax và giữ người của máy đó trong 60% giữa màn hình (kẹp tâm). Người ngoài màn hình hiện mũi tên ở viền (gd-ux đặt hình, gồm biểu tượng Ngạt, để cứu người xa). Không chia màn, không kéo người về gần, không giới hạn khoảng cách giữa hai người: đó là luật chơi, không thêm. Lý do không chia màn: co-op là online (C1), mỗi người một máy một màn, không có chơi chung một máy, và chia màn tốn thêm một camera mỗi người cho 4 dev mà không giải quyết gì mới. Lý do không kéo người hay khóa khoảng cách: chạm C6 và C9 (mỗi người kết thúc chuyến riêng) và luật Oxy riêng.
43. Trạm và cảng: camera cùng góc, bám người của máy đó, Zmin. Kẹp camera trong biên mặt bằng (không hiện ra ngoài trạm). Giờ giao thương: camera cố định ở tâm cánh cảng, Zmin. Đã kiểm theo `tram-va-cang.md` 2.6b: ô quầy 1 tới cửa neo 3 dài 714 x 5,5/280 = 14,03 u, khung ngang Zmin 17,8 u, lề (17,8 - 14,03)/2 = 1,9 u mỗi bên, vừa. Tàu cập và tàu chờ ngoài xếp ở mép trên màn hình (phía bắc người chơi), camera phải chừa dải mép trên cho chúng, nên tâm đặt sao cho dải bắc của cảng nằm trong khung dọc 14,1 u. Chiều sâu bắc nam của cánh cảng chưa đặt trong 2.6b [GIẢ ĐỊNH]: dev kiểm khi dựng, nếu sâu quá 14,1 u thì camera bám người theo trục dọc, giữ cố định theo trục ngang. Người ở trạm (C9) xem đồng đội ngoài chuyến qua bản đồ và UI, không đổi camera.
44. Chọn orthographic, không chọn perspective, vì: Một, khoảng cách u giữ đều trên màn hình, mọi tầm, vùng báo trước và bán kính hút nhặt đọc được bằng mắt, người chơi đo né đòn đúng như số GDD (báo trước 0,92 đến 1,3 giây dựa trên khoảng cách này). Hai, sprite 2D không bị méo và không đổi cỡ theo xa gần, artist vẽ một cỡ. Ba, sàn tile ghép khít, không cần mip hay lệch đường lưới. Bốn, zoom co-op chỉ là một số (size), không cần dịch camera thay đổi góc nhìn. Mất gì: không có cảm giác chiều sâu thật, chấp nhận vì art là 2D vector.

Tham số camera (ô khởi điểm là đề xuất, đo trên build):

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nguồn |
|---|---|---|---|---|---|
| Góc nghiêng camera | 45 độ | cố định | | | Lead 2026-11-23 |
| Phép chiếu | Orthographic | cố định | | | mục 2.6 luật 44 |
| Zmin (size, 1 người và trạm) | 5 | 5 đến 6 | Thấy xa hơn, sprite nhỏ | Sprite lớn, ít thấy báo trước | [GIẢ ĐỊNH]. Size 5 giữ khung ngang 17,8 u ở 16:9 như `map.md` hiện hành |
| Zmax (size, co-op) | 9 | 8 đến 11 | Chứa đội xa hơn, sprite nhỏ còn 56% | Người dễ ra khỏi màn | [GIẢ ĐỊNH] |
| Vùng nhìn mặt đất ở Zmin (16:9) | 17,8 u ngang, 14,1 u dọc | theo Z | | | tính: ngang = 2 nhân size nhân 1,78, dọc = 2 nhân size nhân 1,41 |
| Vùng nhìn mặt đất ở Zmax (16:9) | 32,0 u ngang, 25,5 u dọc | | | | tính như trên |
| Ngưỡng co-op (hộp bao vừa Zmax, lề 4 u) | 24 u ngang, 17 u dọc | theo Zmax và lề | Cho đội tách xa | Cho đội gần | tính |
| Tầm nhìn tối thiểu quanh người, phía trước | 7 u dọc, 8,9 u ngang tới mép màn ở Zmin | không thấp hơn 7 u dọc | | | [GIẢ ĐỊNH]. Theo `map.md` mục 3.1: R = 7 u ở Vành đai ngoài (MVP), Zmin 5 cho nửa dọc 7,05 u, đạt sát. Playtest đo bằng `hazard_warn` tham số `on_screen`, đòn nào báo trước ngoài màn thì nâng Zmin lên 5,6 (log GDM 119). Vành đai trong và Vùng trung tâm R = 10 u cần size từ 7,1, Sau MVP chọn giữa zoom theo dải và chỉ báo mép |
| Lề hộp bao | 4 u | 3 đến 6 | | | [GIẢ ĐỊNH] |
| Làm mượt camera | 0,25 giây | 0,15 đến 0,4 | | | [GIẢ ĐỊNH] |
| Tốc độ đổi zoom | 3 size mỗi giây | 1,5 đến 5 | | | [GIẢ ĐỊNH] |
| Vùng chết | 1 u | 0,5 đến 2 | | | [GIẢ ĐỊNH] |
| Kẹp người của máy trong màn khi quá ngưỡng | 60% giữa | 50 đến 70% | | | [GIẢ ĐỊNH] |
| Che khuất: ellipse cắt, alpha, mờ dần, trả lại | 5 x 3,5 u, 0,35, 0,15 giây, 0,25 giây | | | | [GIẢ ĐỊNH] |

Cách đo khi có build: (1) vùng báo trước đòn nặng nhất (DL-X03 bán kính 6 u, phóng điện lõi BS-1 bán kính 4 u) nằm trong màn trước khi bắt đầu báo trước ít nhất 90% lần ở Zmin, đo bằng sự kiện `hazard_warn` kèm cờ `on_screen`. (2) Tỉ lệ người chơi trúng đòn có `player_hit` mà nguồn đòn ngoài màn hình trước đó không quá 5%. (3) Đội 2 người cùng đi trong ngưỡng 24 u ngang bao nhiêu phần thời gian (gd-qa ghi khoảng cách hai người mỗi 5 giây khi playtest). (4) Cỡ sprite nhân vật ở Zmax còn đọc được khi so với Zmin trên màn 1080p (nhân vật cao 1 u là 108 px ở Zmin, 60 px ở Zmax).

### 2.7 Yêu cầu cho art và dev từ camera

| Ai | Yêu cầu |
|---|---|
| Artist 2D | Sprite đứng vẽ nhìn xiên 45 độ từ trên xuống (thấy đỉnh đầu và phần mặt phẳng trên), không vẽ nhìn ngang, vì camera nghiêng. Nhân vật cao 1 u. Pivot ở chân. Vùng báo trước là texture đĩa tròn vuông (không vẽ ellipse), dev đặt trên XZ. Sàn và tường thấp là tile 1 u vuông trên XZ |
| Dev | Camera orthographic, script camera co-op (hoặc Cinemachine Group Framing cộng script kẹp 60%), sort theo -Z, shader dither che khuất, bóng giả, Tilemap XZY |

## 3. Tham số

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nhóm tác động | Nguồn |
|---|---|---|---|---|---|---|
| Tần số gửi vị trí người chơi | 20 lần mỗi giây | 15 đến 30 | Mượt hơn, tốn băng thông | Giật | Co-op | đề xuất, dev chỉnh khi chọn stack |
| Trễ nội suy | 100 ms | 50 đến 150 | Mượt, trễ hình | Giật khi mất gói | Co-op | đề xuất, dev chỉnh |
| Tần số gửi trạng thái Driftlife | 10 lần mỗi giây | 5 đến 20 | | | Co-op, combat | đề xuất, dev chỉnh |
| Thời gian phát hiện mất kết nối | 4 giây mất gói liên tục | 3 đến 5 | Ít báo nhầm | Phát hiện nhanh | Co-op | đề xuất, chờ dev |
| Dung sai host kiểm tốc độ | 15% trên vmax cộng lực ngoài | 10 đến 25% | Ít kéo giật | Chặn gian lận chặt hơn | Co-op | đề xuất, chờ dev |
| Cửa sổ host trả lời yêu cầu | 250 ms | 150 đến 500 | Chịu mạng kém | Phản hồi nhanh hơn | Co-op | đề xuất, chờ dev |
| Số lần Giữ chỗ mỗi người mỗi chuyến | 1 | 1 đến 2 | Tha thứ mạng | Chặn rút mạng dừng ngạt | Co-op | `nguoi-choi.md` 2.9, luật 16 |
| Số người tối đa | 4 | cố định | | | Co-op | C1 |
| Giữ chỗ khi rớt mạng | 15 giây | 10 đến 30 | | | Co-op | `nguoi-choi.md` 3 |
| Số lần sim mỗi ô | chuyến 2000, giờ giao thương 300, combat 2000 | từ 200 | Số ổn định hơn | Nhanh hơn | Máy chấm | `tools/tham-so/*.json` |

Tham số của từng sim nằm ở `tools/tham-so/chuyen.json`, `ca-cang.json`, `combat.json`, mỗi khóa có `_nguon`, số tự đặt có nhãn `[GIẢ ĐỊNH]` và được in lại ở đầu file kết quả.

## 4. Trường hợp biên

| Tình huống | Xử lý |
|---|---|
| Hai người cùng nhặt một node hay một kiện cùng khung hình | Yêu cầu tới host trước được nhận, người sau nhận từ chối và vật ở lại |
| Người vào giữa chừng khi cả nhóm đang ngạt hết | Ở trạng thái Chờ vào tới điểm nghỉ kế (luật 13) |
| Host rớt khi khách đang chia Oxy | Phiên kết thúc, thế giới về điểm lưu gần nhất (luật 17, 18, K23). Người được chia Oxy không giữ gì của chuyến đó |
| Khách rớt giữa giờ giao thương khi đang cầm thùng | Thùng rơi xuống sàn tại chỗ, host giữ, người khác nhặt được |
| Khách rớt rồi vào lại trong 15 giây | Nhận lại nhân vật đang Giữ chỗ, không mất gì |
| Seed chuyến cho map khác nhau trên hai máy | Không xảy ra nếu mọi máy cùng phiên bản dữ liệu. Snapshot lúc vào phiên có hash dữ liệu, lệch hash thì không cho vào, báo cập nhật |
| Validator đỏ khi cần xuất gấp | Không xuất. Sửa nguồn hoặc xuất bản cũ trong repo |
| Sheet có cột Lead chèn tay | Exporter đọc theo tên header, cột lạ được bỏ qua và in cảnh báo, cột thiếu thì dừng |
| Người đang ngạt rút mạng rồi vào lại để dừng đồng hồ ngạt | Giữ chỗ lần đầu dừng đồng hồ, lần thứ hai trong cùng chuyến tính như bị kéo về ngay (luật 16) |
| File save chính hỏng khi mở | Mở bản `.bak`, báo người chơi lùi về điểm lưu trước (luật 20) |
| Hai người cùng kéo một buồng ngủ đông, một người rớt | Host giữ vị trí vật, người còn lại kéo tiếp ở hệ số một người |
| Số trong GDD đổi sau khi sim chạy | Kết quả sim ghi giờ chạy. Vai đổi số chạy lại lệnh trong `tools/README.md` |

## 5. Ràng buộc vật lý của luật

| Ràng buộc | Số hoặc lý do |
|---|---|
| Băng thông 4 người | 3 người khách nhận vị trí của 3 người khác, 20 lần mỗi giây, cỡ khoảng 30 byte mỗi gói vị trí: dưới 10 KB mỗi giây mỗi máy, chưa tính Driftlife. Không là ràng buộc ở PC |
| Tất định của map theo seed | Bộ sinh map phải dùng RNG riêng có seed, không dùng `UnityEngine.Random` dùng chung, không phụ thuộc thứ tự khung hình |
| Vật lý | Vật lý trong Unity chạy theo fixed timestep (mặc định 0,02 giây). Host là nguồn sự thật cho vật lý của Driftlife và kiện rơi. Chuyển động người chơi chạy trên máy người đó |
| Sim là mô hình rút gọn | Mọi sim trong `tools/` bỏ qua phần không có số trong GDD (ghi ở đầu mỗi file sim). Khi có build, so số sim với Event Tracking của playtest |

## 6. Yêu cầu cho engineer và tool

### 6.1 Máy chấm có sẵn

| Lệnh | Làm gì |
|---|---|
| `node projects/game-moi/tools/validate-gdd.mjs --ra projects/game-moi/tools/ket-qua/validate-gdd.md` | Kiểm chéo 10 GDD: ID mọi họ (vật phẩm, nâng cấp UPG, loài, kẻ địch, boss, hazard, dải, map nhánh N, vật truyện MM, trục T-, khoang, tàu, nhóm hàng, hồ sơ) có trong file chủ. ID không trùng trong bảng định nghĩa và khối dữ liệu. ID định nghĩa có nhãn MVP. Kiện CGO thuộc đúng một nhóm HC và có giá. Ngưỡng Hạng khớp. Vật truyện có ID STY, khe có trên map, mốc có định nghĩa. Luật khung K, C được GDD nhắc. Tên riêng khớp `cot-truyen.md`, tên loài đi đúng mã, không còn tên cũ, số túi và ô đai cũ, câu trái C10. Dấu chờ chỉ còn của gd-economy, gd-ux. Không còn tên biến cố cũ đã đổi thành The Scattering (log 75), không còn điểm treo đợi GDM quyết (thay bằng số dòng log), không còn cụm phản diện cũ Lead đã bỏ (GD-033, kiểm cả `gdd/sheet/*.tsv`). Thoát 1 khi lỗi |
| `node projects/game-moi/tools/sim-chuyen.mjs --ra projects/game-moi/tools/ket-qua/sim-chuyen.md` | Sim chuyến |
| `node projects/game-moi/tools/sim-ca-cang.mjs --ra projects/game-moi/tools/ket-qua/sim-ca-cang.md` | Sim giờ giao thương |
| `node projects/game-moi/tools/sim-combat.mjs --ra projects/game-moi/tools/ket-qua/sim-combat.md` | Sim combat |
| `node projects/game-moi/tools/selftest.mjs` | Selftest mọi tool |

### 6.2 Việc kỹ thuật tiếp theo (chưa làm)

1. `tools/xuat-data.mjs`: khối dữ liệu markdown trong `gdd/he-thong/` sang `data/*.json` theo schema mục 2.1, có round-trip. Sheet chỉ là bản dán (điểm tự quyết 9).
2. Importer Unity Editor: JSON sang ScriptableObject, chạy bằng menu, giữ GUID asset theo ID để prefab không mất tham chiếu.
3. Prototype bay (`tools/prototype/bay.html`, mở qua http, ví dụ `python -m http.server` ở thư mục đó): còn thiếu kéo vật, Recall Beacon, gamepad. Người chơi thật chơi thử để chốt cảm giác. Lý thuyết S6 trong trang (đứng yên, phản xạ 0,27 giây, vùng trúng bán kính 2,5 u như phóng điện của Arc Eel): bay ra cần 0,92 giây báo trước, lướt ra cần 0,46 giây, nên báo trước 0,5 giây chỉ đủ khi lướt và lướt không đang hồi chiêu. Đã gửi gd-combat.

### 6.3 Lựa chọn netcode Unity (để 4 dev quyết)

Kiểm giá và giấy phép trên trang chính thức trước khi chọn.

| Lựa chọn | Mô hình | Điểm mạnh với game này | Điểm cần cân | Chi phí cố định khi bán đứt (cần kiểm trang chính thức) |
|---|---|---|---|---|
| Netcode for GameObjects + Unity Relay, Lobby | Host, server, có chế độ quyền phân tán | Của Unity, tài liệu chính chủ, Relay vượt NAT không cần mở cổng | Relay và Lobby là dịch vụ trả theo dùng (có mức miễn phí), cần kiểm chi phí khi bán đứt lâu dài | Relay và Lobby trả theo lượng dùng, game bán đứt vẫn tốn tiền theo số người chơi lâu dài |
| Mirror | Host, server | Mã nguồn mở, cộng đồng lớn, có transport cho Steam | Không có dịch vụ relay riêng, ghép với Steam hoặc tự lo | Không có phí thư viện. Relay phải tự lo hoặc dùng của Steam |
| FishNet | Host, server | Mã nguồn mở, có sẵn dự đoán phía client | Cộng đồng nhỏ hơn Mirror | Không có phí thư viện. Relay phải tự lo hoặc dùng của Steam |
| Photon Fusion | Host, chế độ chia sẻ | Có relay và dự đoán sẵn, nhanh làm co-op | Thương mại, giá theo số người online cùng lúc | Phí theo số người online cùng lúc, tốn tiền suốt đời game bán đứt |
| Steamworks (Steam Networking Sockets) làm transport | Host | Relay của Steam, mời bạn qua danh sách bạn Steam, hợp game bán trên Steam | Gắn với Steam, đa nền tảng sau này cần lớp khác | Không phí thêm khi bán trên Steam |

Câu cần dev trả lời trước khi chọn: game có bán ngoài Steam không, có cần chơi chéo nền tảng không (khung để ngỏ đa nền tảng), ai trong 4 dev đã làm netcode Unity.

## 7. Yêu cầu cho art, UI, tutorial, audio

- UI: biểu tượng trạng thái mạng của từng đồng đội (ổn, trễ, đang Giữ chỗ). Thông báo khi host thoát rằng thế giới về điểm lưu gần nhất. Thông báo lệch phiên bản dữ liệu khi vào phiên. gd-ux đặt vị trí.
- Không cần art hay audio riêng.

## 7b. Cảm giác (game feel)

Không có khoảnh khắc riêng. Mục tiêu là người chơi không nhận ra mạng: đồng đội bay mượt, nhặt và bốc phản hồi ngay trên máy mình, lùi lại hiếm.

## 8. Cách đo thành công và tiêu chí nghiệm thu

| Tiêu chí | Cách kiểm |
|---|---|
| Mọi tool có selftest và chạy bằng một lệnh | `node projects/game-moi/tools/selftest.mjs` thoát 0 |
| Cùng seed cho cùng kết quả | Có trong selftest cho cả 3 sim |
| Sim có giờ giao thương tính tay | Có trong selftest cho cả 3 sim |
| Tool không tự thêm luật, giả định được in | Đầu mỗi file kết quả liệt kê `[GIẢ ĐỊNH]` |
| Validator bắt các loại lỗi đã có giờ giao thương cài trong selftest | Selftest có giờ giao thương cố ý cho: ID lạ, thiếu nhãn MVP, dấu chờ, tên cũ, tên riêng, tên loài, CGO thuộc nhóm, số túi cũ, câu trái C10, vật truyện, ID trùng trong bảng định nghĩa (RCP, UPG, SLV, KH), ID lạ họ N, MM, T- |
| Schema phủ mọi bảng dữ liệu các GDD xin | Đối chiếu mục 6 của 10 GDD với bảng mục 2.1. Loại còn thiếu ghi ở câu hỏi mở |
| Khi có build, co-op: hai người cùng nhặt một node | 1000 lần thử, đúng 1 người nhận mỗi lần |
| Khi có build, co-op: thùng không nhân đôi hay mất | 100 lần nhặt, giao có rớt mạng giữa chừng, tổng thùng không đổi |
| Khi có build, mất kết nối 15 giây | Vào lại đúng nhân vật theo mã slot. Quá 15 giây thì bị tính như kéo về (C10) |
| Khi có build, host thoát | Thoát ở 4 thời điểm (giữa chuyến 1, sau chuyến 1, giữa giờ giao thương, sau giờ giao thương): mở lại đúng điểm lưu gần nhất (K23), bố cục chuyến kế giống lần trước |
| Khi có build, vào giữa chừng | Thử ở 3 pha (chuyến, giờ giao thương, cuối ngày), người mới vào đúng luật 13 |
| Khi có build, file save | Cắt điện giữa lúc ghi: mở lại được bản trước (luật 20) |
| Khi có build, dữ liệu | Xuất rồi nhập lại: 0 trường lệch |
| Khi có build, số playtest khớp sim | Thời lượng chuyến (`trip_end.minutes`), tỉ lệ tàu phục vụ xong, tip, rảnh mỗi người (`crate_delivered`, `ship_left_unserved`, `port_player_idle`), tỉ lệ kéo về (`player_choking_end`) lệch không quá 20% so với file kết quả sim cùng cấu hình |

## 9. Lệch khỏi tham chiếu

Không bám game tham chiếu. Cách dùng Sheet làm nguồn dữ liệu và ID chuỗi ổn định theo kho tri thức `docs/knowledge/indie/50-technical-design.md`.

## 10. Câu hỏi mở

| Câu | Ai trả lời | Đề xuất |
|---|---|---|
| Netcode nào | 4 dev | Bảng 6.3 |
| Có chuyển host khi host thoát không (luật 17) | 4 dev, GDM | Mặc định không. Dev đề nghị nếu stack chọn hỗ trợ sẵn |
| Chuỗi và bước tutorial có thành ScriptableObject không | gd-ux, dev | Chưa. Dev đọc thẳng `strings/strings.tsv` và bảng bước của `ux-ui.md` |
| Giữ chỗ tối đa 1 lần mỗi chuyến (luật 16) | gd-character | Đã nhận, `nguoi-choi.md` 2.9 có trần (log GDM 104) |
| Ai chơi thử prototype bay để chốt cảm giác | GDM | Lead hoặc gd-qa chơi 10 phút, xuất JSON gửi gd-character |
| Có bù tốc độ dọc màn hình (chạy dọc trông chậm 0,71 lần) không | GDM, Lead | Không bù, giữ đơn vị khoảng cách. Quyết lại sau playtest nếu người chơi phàn nàn |
| Tầm nhìn tối thiểu ngoài không gian (số của gd-world) | gd-world | Đã có ở `map.md` 3.1: 7 u ở Vành đai ngoài, 10 u từ Vành đai trong. MVP giữ Zmin 5 (log GDM 119) |

## Co-op 1 đến 4 người

File này là phần co-op kỹ thuật của mọi hệ thống: mục 2.2 và 2.3. Không luật nào cần đúng N người. Hệ số theo N lấy lúc sinh, không đổi giữa chừng (luật 14).

## Điểm tự quyết

| # | Điểm | Chọn | Lý do | Phương án bỏ | Đảo ngược |
|---|---|---|---|---|---|
| 1 | Kiến trúc tool | Node một file mỗi tool, không thư viện ngoài, tham số JSON trong `tools/tham-so/`, hàm chung ở `tools/lib.mjs` | Chạy được ở mọi phiên, kể cả phiên đám mây, không cần cài | Python, bảng tính | Rẻ |
| 2 | Sim đọc thẳng GDD ở chỗ có bảng máy sinh | Điểm khai thác đọc khối NODE, mẫu Driftlife đọc khối SPECIES của `vat-pham.md`, chỉ số loài đọc bảng 3.4 của `combat-driftlife.md` | Vai đổi số, sim theo ngay, không chép tay | Chép vào JSON | Rẻ |
| 3 | Validator chỉ báo, không sửa | In bảng lỗi theo vai giữ file, gửi vai đó | Không sửa file vai khác | Tự sửa | Rẻ |
| 4 | Tên riêng trong mục Câu hỏi mở, Tên game, Lệch khỏi tham chiếu, Lịch sử không bị kiểm | Bỏ qua các mục đó | Đó là chỗ nêu tên đề xuất và game khác, kiểm sẽ báo nhầm | Kiểm mọi nơi | Rẻ |
| 5 | Mô hình mạng | Host nắm quyền, chuyển động do máy người chơi | Khớp C2 (thế giới của host), co-op không cạnh tranh nên tin client về chuyển động là chấp nhận được | Server riêng, tất định khóa bước | Đắt sau khi dev bắt đầu |
| 6 | Host thoát | Không chuyển host, thế giới về điểm lưu gần nhất theo K23 (ba điểm lưu, khung sửa lần 5) và C10 | Chuyển host đắt với 4 dev | Chuyển host, điểm lưu giữa ngày | Vừa |
| 7 | Tên sự kiện | Tiếng Anh snake_case có tiền tố nhóm, gộp trùng | Một bảng duy nhất, công cụ phân tích không vấp dấu | Giữ tên từng GDD | Rẻ |
| 8 | Sự kiện ghi ra đâu | File JSON Lines cục bộ | Game offline, bán đứt | Gửi về máy chủ | Rẻ |
| 9 | Nguồn chuẩn của dữ liệu | Markdown trong repo, Sheet là bản dán | Sim, validator và exporter cùng đọc một chỗ, Sheet 25 tab chưa dán. Đổi khi GDM ghi DECISIONS | Sheet làm nguồn, kéo TSV về | Rẻ |
| 10 | Giữ chỗ tối đa 1 lần mỗi chuyến | gd-character đã ghi vào `nguoi-choi.md` 2.9 | Chặn rút mạng để dừng đồng hồ ngạt (lách K2) | Không giới hạn | Rẻ |
| 11 | Một hệ ID nâng cấp | UPG-xxx-n của gd-items, T-xxx chỉ là nhãn | Luật 3 đòi một ID một thứ | Giữ hai hệ | Rẻ |

## Phản biện khung

| # | Điểm | Vấn đề | Bằng chứng | Đề xuất |
|---|---|---|---|---|
| PB1 | Khung mục 9: chuyến chương 1 dài 4 đến 6 phút, chương 5 dài 10 đến 12 | Với số hiện hành của `map.md`, `nguoi-choi.md`, `vat-pham.md`, phần nhặt tài nguyên ở map tổng chỉ lấp khoảng 1 phút ở chương 1 (túi đầy) và kể cả túi không giới hạn cũng chỉ khoảng 3,6 phút (dải cạn) | `tools/ket-qua/sim-chuyen.md` bảng 2, 3, 3b | GDM đã xử, log dòng 54: thang túi 80 đến 216 Khối, bình 330 đến 1000. Sim chạy lại đạt khung |
| PB2 | Khung mục 9: tỉ lệ chuyến hết Oxy 10 đến 20% | Khi túi là giới hạn thì người chơi về trước khi Oxy cạn, tỉ lệ đo 0 đến 4% | `tools/ket-qua/sim-chuyen.md` bảng 1 | GDM đã xử, log dòng 56: mục tiêu đổi thành người cẩn thận dưới 5%, người tham 15 đến 40% |

## Lịch sử thay đổi

| Ngày | Thay đổi | Lý do | Ai |
|---|---|---|---|
| 2026-11-20 | Bản đủ đầu tiên: schema, đồng bộ co-op, Event Tracking, máy chấm | GD-030 | gd-tech |
| 2026-11-20 | Sửa theo QA GD-031 vòng 1: luật rời phiên và mất kết nối theo C10, bỏ điểm lưu tạm theo K23, thêm mục 2.3b trường file save và ghi an toàn, bảng quyền thêm xác nhận, bộ đếm ngày, vật kéo, trao đồ, hazard, Giữ chỗ. Định nghĩa N theo ngữ cảnh, luật slot. Schema thêm ItemGroupData, ShopEntryData, EnemyData (gộp DL và WD), ClueData, ItemInstance, trường thiếu ở tàu, boss, dải, hazard, map nhánh, nâng cấp một hệ ID UPG. Nguồn chuẩn là markdown trong repo. 18 sự kiện mới gồm nhóm Net, trường chung session_id và play_seconds_total. Tham số mạng, tiêu chí co-op và lưu, cột chi phí netcode | `qa/GD-031-ky-thuat.md` | gd-tech |
| 2026-11-20 | Sửa theo QA GD-031 vòng 2: bỏ câu kết luận sim, chỉ trỏ file kết quả. `ItemGroupData` thành MVP. Thêm giá lồng theo loài ở `ItemData`, cấu trúc `OrderInstance`, `OrderLine`. Định nghĩa tài khoản của mã slot. 64 sự kiện, sự kiện UX đánh số từ 65. Mô tả validator và exporter theo nguồn markdown | `qa/GD-031-ky-thuat.md` | gd-tech |
| 2026-11-20 | Đợt 4 theo khung sửa lần 5: K23 ba điểm tự lưu (sau chuyến, sau giờ giao thương, lúc ngủ) và seed bố cục theo ngày và số thứ tự chuyến (luật 18, 18b), host thoát về điểm lưu gần nhất (C10), host chặn trao và thả đồ khi ngạt (K27), host giữ trần Oxy hồi từ vật tiêu hao (K26). Sim chuyến áp trần K26. Validator thêm kiểm Sundering và chữ chờ GDM | `briefs/dot4-gdm-chot-sau-qa.md`, log 62 đến 75 | gd-tech |
| 2026-11-20 | Sửa nhẹ vòng cuối V1 đến V6: biên file save hỏng, trường vật tiêu hao ở `ItemData`, `dongChuong` ở `StoryBeatData`, `AreaData` cho A01 đến A05, sự kiện save_written và save_failed, câu hỏi mở Giữ chỗ về trạng thái đề xuất | `qa/GD-031-ky-thuat.md` vòng cuối | gd-tech |
| 2026-11-20 | Đợt 9 (GD-054): giờ giao thương theo khung Dave. Sim giờ giao thương viết lại (N người chia việc, quét số tàu và cửa neo, 3 kiểu danh mục, bơm khí). Mục 2.5 mới. Sự kiện giờ giao thương 30 đến 37 viết lại, thêm 72 và 73. Schema ShipTypeData, dữ liệu động của giờ giao thương đổi sang thùng, danh mục | Lead chốt giờ giao thương theo khung Dave | gd-tech |
| 2026-11-20 | Đợt 9 vòng 2 (GD-054): sim nối giaThung của gd-economy, độ gọi nhân hệ số hàng hay gọi (luật 24), Tàu vội chỉ gọi băng và khoáng, bơm khí 50% lúc cập (luật 28), giờ giao thương 300 giây (luật 34), giờ giao thương đầu (luật 67). So sánh cửa neo hiện hành, 4 cửa, 3 cửa thùng 1 giây. Mục đo: 6 kiểu danh mục, Tàu vội, đồ Trái Đất và đơn đặt trước. Khóa PortTuning cập nhật | Lead chốt giờ giao thương, gd-quan sửa luật | gd-tech |
| 2026-11-23 | Sửa câu văn theo đánh giá humanizer (production/reports/2026-11-23-humanizer-gdd.md): bỏ lịch sử trong thân luật, phủ định thừa, câu chốt lặp. Không đổi luật, số, ID | Đánh giá humanizer | GDM |
| 2026-11-23 | GD-074 (đợt 10, Lead chốt Art top-down 45 độ): thêm mục 2.6 và 2.7 camera, dựng 3D với asset 2D, thứ tự vẽ, che khuất, camera co-op. Đổi trường vị trí khoang trên RoomData sang `viTriMatBang`. Sự kiện 53 thêm `on_screen`. Luật 43: camera giờ giao thương cố định ở tâm cảng, đã kiểm với 2.6b. Luật 40b: ngắm chuột vào sprite cao (L, boss) quy về tâm hitbox trên XZ. Không đổi luật chơi, số GDD | Lead chốt Art 2026-11-23 | gd-tech |
| 2026-11-23 | Theo rà chéo Sheet nhóm C (qa/2026-11-23-ra-cheo-C.md): tally_gain nguồn ship đổi thành preorder, tham số lưu đổi sang tiếng Anh save_point, attempt. Không đổi luật | Đánh giá humanizer | GDM |
