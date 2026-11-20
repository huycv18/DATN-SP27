// Dữ liệu và cổng kiểm của GDD vật phẩm (GD-025). Nguồn duy nhất cho ITEM LIST, Recipe, Salvage.
// Chạy: node projects/game-moi/sim/vat-pham.mjs        -> kiểm, in tóm tắt, thoát 1 nếu lỗi
//       node projects/game-moi/sim/vat-pham.mjs --ghi  -> ghi bảng vào gdd/he-thong/vat-pham.md giữa các cặp <!--B:TÊN-->
// GTĐ = giá trị tương đối (RES-101 = 1,0). Không phải Tally. gd-economy quy đổi.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const MVP = 'MVP', SAU = 'Sau MVP';
const G = 'Gần', M = 'Giữa', X = 'Xa', CR = 'Cradle';
const TH = 'Thường', IG = 'Ít gặp', HI = 'Hiếm', DB = 'Đặc biệt';
const items = [];
const I = (id, ten, en, nhom, hiem, khoi, gtd, dai, nhan, o = {}) => items.push({ id, ten, en, nhom, hiem, khoi, gtd, dai, nhan, ...o });
const vn = (x) => String(x).replace('.', ',');

// Tài nguyên thô theo dải. Khối: số đơn vị tải trong túi.
const SR = 'Sửa khoang (tram-va-cang.md mục 2.6c)';
I('RES-101', 'Mảnh vỏ Cradle', 'Hull Shard', 'Phế liệu', TH, 1, 1.0, G, MVP, { sink: SR });
I('RES-102', 'Dây cáp đứt', 'Frayed Cable', 'Phế liệu', TH, 1, 1.2, G, MVP, { sink: SR });
I('RES-103', 'Quặng sắt thiên thạch', 'Meteoric Iron Ore', 'Khoáng', TH, 2, 2.2, G, MVP, { sink: SR });
I('RES-104', 'Bo mạch cháy', 'Scorched Circuit', 'Linh kiện', IG, 1, 3.0, G, MVP, { sink: SR });
I('RES-105', 'Băng nước đục', 'Murky Ice', 'Băng', TH, 2, 2.0, G, MVP, { sink: SR });
I('RES-106', 'Đồ Trái Đất vụn', 'Earth Trinkets', 'Phế liệu', IG, 1, 2.5, G, MVP, { sink: '' });
I('RES-201', 'Hợp kim nóng chảy', 'Fused Alloy', 'Phế liệu', IG, 1, 3.0, M, SAU, { sink: SR });
I('RES-202', 'Quặng cobalt', 'Cobalt Ore', 'Khoáng', IG, 2, 6.0, M, SAU, { sink: SR });
I('RES-203', 'Băng tinh', 'Clear Ice', 'Băng', IG, 2, 5.0, M, SAU, { sink: SR });
I('RES-204', 'Lõi cảm biến', 'Sensor Core', 'Linh kiện', HI, 1, 9.0, M, SAU, { sink: SR });
I('RES-301', 'Hợp kim Warden', 'Warden Alloy', 'Phế liệu', HI, 1, 8.0, X, SAU, { nguon: 'Đơn vị The Wardens hạ được (WD-01..04, gd-combat)', sink: SR });
I('RES-302', 'Kính nebula', 'Nebula Glass', 'Khoáng', HI, 2, 16.0, X, SAU, { sink: SR });
I('RES-303', 'Băng plasma', 'Plasma Ice', 'Băng', HI, 2, 14.0, X, SAU);
I('RES-304', 'Lõi năng lượng nguội', 'Cold Core', 'Linh kiện', HI, 1, 10.0, X, SAU, { sink: SR });
I('RES-305', 'Linh kiện Warden', 'Warden Part', 'Linh kiện', HI, 1, 12.0, X, SAU, { nguon: 'WD-01..04 và boss BS-3 (gd-combat)', sink: 'Lắp động cơ chính giai đoạn 4 và 5' });
I('RES-401', 'Linh kiện Cradle', 'Cradle Part', 'Linh kiện', DB, 1, 20.0, CR, SAU, { nguon: 'Boss BS-4 và map nhánh Cradle Interior (gd-combat, gd-world)', sink: 'Lắp động cơ chính giai đoạn 4 và 5' });

// Mẫu Driftlife. Thứ tự và loài theo gd-combat (`combat-driftlife.md`, mục Điểm sinh và rơi).
I('SMP-101', 'Mô sinh học Gần', 'Near Biomass', 'Mẫu', TH, 1, 1.5, G, MVP, { nguon: 'Mọi loài Gần khi hạ' });
I('SMP-201', 'Mô sinh học Giữa', 'Mid Biomass', 'Mẫu', IG, 1, 4.0, M, SAU, { nguon: 'Mọi loài Giữa khi hạ' });
I('SMP-301', 'Mô sinh học Xa', 'Far Biomass', 'Mẫu', HI, 1, 9.0, X, SAU, { nguon: 'Mọi loài Xa khi hạ' });
// [dải, số gd-items, mã combat, tên, hạ được, nls mỗi lần (mỗi con nếu đàn), xác suất đặc sản, bắt (LIV sống, BPS sinh thiết), nuôi, GTĐ đặc sản, hệ số k, nhãn, GTĐ sinh thiết cố định]
const SP = [
  [G, 111, 'DL-G01', 'Driftmoth', 1, 1, 0.30, 'LIV', 1, 4, 1.5, MVP],
  [G, 112, 'DL-G02', 'Skitter Ray', 1, 1, 0.40, 'LIV', 1, 4, 1.5, MVP],
  [G, 113, 'DL-G04', 'Sting Krill', 1, 1, 0.20, 'LIV', 1, 4, 1.6, MVP],
  [G, 114, 'DL-G05', 'Arc Eel', 1, 2, 0.60, 'LIV', 1, 5, 1.75, MVP],
  [G, 115, 'DL-G03', 'Latchjaw', 1, 2, 0.60, 'LIV', 0, 5, 1.7, SAU],
  [M, 211, 'DL-M01', 'Shepherd Whale', 0, 0, 0, 'BPS', 0, null, null, SAU, 25],
  [M, 212, 'DL-M02', 'Lumen Jelly', 1, 2, 0.40, 'LIV', 1, 10, 1.7, SAU],
  [M, 213, 'DL-M03', 'Orebiter', 1, 2, 0.60, 'LIV', 1, 10, 1.8, SAU],
  [M, 214, 'DL-M04', 'Needlefin', 1, 1, 0.15, 'LIV', 1, 10, 1.8, SAU],
  [M, 215, 'DL-M05', 'Gulper', 1, 4, 1.0, 'BPS', 0, 10, 1.8, SAU],
  [X, 311, 'DL-X01', 'Prism Wisp', 1, 1, 0.5, 'LIV', 1, 18, 1.8, SAU],
  [X, 312, 'DL-X02', 'Mirror Mantis', 1, 2, 0.6, 'LIV', 0, 18, 2.0, SAU],
  [X, 313, 'DL-X03', 'Storm Siphon', 1, 4, 1.0, 'BPS', 0, 18, 2.0, SAU],
  [X, 314, 'DL-X04', 'Shardbrood Queen', 1, 4, 1.0, 'BPS', 0, 18, 2.0, SAU],
  [X, 315, 'DL-X05', 'Shardbrood Hatchling', 1, 1, 0.2, 'LIV', 1, 18, 1.8, SAU],
];
const SIZE = { 111: 'S', 112: 'S', 113: 'S', 114: 'M', 115: 'M', 211: 'L', 212: 'M', 213: 'M', 214: 'S', 215: 'L', 311: 'S', 312: 'M', 313: 'L', 314: 'L', 315: 'S' };
const NLS = { [G]: 'SMP-101', [M]: 'SMP-201', [X]: 'SMP-301' };
const species = [];
const K_M = 1.5, K_BPS = 0.45; // cỡ M ở đầu thấp của khoảng 1,5 đến 2,0, mẫu sinh thiết 0,4 đến 0,5 lần E(hạ) vì sinh thiết không phải bắt sống
for (const [dai, so, ma, ten, ha, n, p, bat, nuoi, dac, k, nhan, bpsFix] of SP) {
  const s = { dai, so, ma, ten, ha, n, p, bat, nuoi, dac, k: bat === 'BPS' ? K_BPS : SIZE[so] === 'M' ? K_M : k, nhan, bpsFix, nlsId: NLS[dai], size: SIZE[so], dacId: `SMP-${so}`, livId: `LIV-${so}`, bpsId: `BPS-${so}`, bioId: `BIO-${so}` };
  species.push(s);
  if (ha) I(s.dacId, `Đặc sản ${ma} ${ten}`, `${ma} Specialty`, 'Mẫu', dai === G ? IG : HI, 1, dac, dai, nhan, { nguon: `${ma} khi hạ (xác suất ${vn(p)}${so === 113 || so === 214 || so === 315 ? ' mỗi con' : ''})` });
}
I('SMP-191', 'Hạch thủ lĩnh Gần', 'Scrapmaw Core', 'Mẫu', DB, 2, 25, G, MVP, { nguon: 'BS-1 Scrapmaw bị hạ, cộng 5 SMP-101 (gd-combat)', sink: 'Sửa khoang theo chương' });
I('SMP-192', 'Mẫu boss Gần', 'Scrapmaw Sample', 'Mẫu', DB, 2, 30, G, MVP, { nguon: 'BS-1 Scrapmaw bị xua đi, cộng 2 SMP-101 (gd-combat)', sink: 'Sửa khoang theo chương, thay được SMP-191' });
I('SMP-291', 'Đặc sản Tempest Gulper', 'Tempest Gulper Core', 'Mẫu', DB, 2, 60, M, SAU, { nguon: 'BS-2 bị hạ, cộng phế liệu nó đã nuốt (gd-combat)', sink: 'Sửa khoang theo chương' });
I('SMP-292', 'Mẫu boss Giữa', 'Tempest Gulper Sample', 'Mẫu', DB, 2, 65, M, SAU, { nguon: 'BS-2 bị xua đi (gd-combat)', sink: 'Sửa khoang theo chương, thay được SMP-291' });

const eHa = (s) => s.n * items.find((i) => i.id === s.nlsId).gtd + s.p * items.find((i) => i.id === s.dacId).gtd;
const r2 = (x) => Math.round(x * 100) / 100;
for (const s of species) {
  if (s.bat === 'LIV') I(s.livId, `Mẫu sống ${s.ma} ${s.ten}`, `${s.ma} Live Specimen`, 'Mẫu sống', s.dai === G ? IG : HI, 'kéo', null, s.dai, [111, 112, 113].includes(s.so) ? MVP : SAU, { nguon: s.size === 'S' ? `Bắt sống ${s.ma} bằng Súng lưới (K9, từ chương 1)` : s.so === 114 ? `Bắt sống ${s.ma} bằng Súng gây mê rồi Phao kéo (K9, chương 2, miễn choáng)` : `Bắt sống ${s.ma} bằng choáng hoặc mê rồi Phao kéo (K9, chương 2)`, sink: 'Nuôi (chương 2), bán ở ca cảng (lồng sinh vật sống), nghiên cứu (chương 2)' });
  if (s.bat === 'BPS') I(s.bpsId, `Mẫu sinh thiết ${s.ma} ${s.ten}`, `${s.ma} Biopsy`, 'Mẫu sinh thiết', HI, 1, s.bpsFix ?? null, s.dai, SAU, { nguon: `Kim sinh thiết trên ${s.ma} (loài L, chương 2)`, sink: 'Nghiên cứu (Hồ sơ loài, gd-combat)' });
  if (s.nuoi) I(s.bioId, `Sản phẩm nuôi ${s.ma} ${s.ten}`, `${s.ma} Farm Yield`, 'Sản phẩm nuôi', s.dai === G ? TH : IG, 1, s.dai === G ? 3 : s.dai === M ? 7 : 14, s.dai, SAU, { nguon: `Khoang nuôi ${s.ma} (1 đơn vị mỗi con trưởng thành mỗi ngày khi được cho ăn)` });
}

// Vật liệu chế, vật tiêu hao, thức ăn, kiện: GTĐ tính từ công thức (gtd = null).
const D = (id, ten, en, nhom, hiem, khoi, dai, nhan, o) => I(id, ten, en, nhom, hiem, khoi, null, dai, nhan, o);
D('COM-101', 'Tấm thép nén', 'Pressed Plate', 'Vật liệu chế', TH, 1, G, MVP, {});
D('COM-102', 'Dây dẫn bện', 'Braided Conductor', 'Vật liệu chế', TH, 1, G, MVP, {});
D('COM-103', 'Thỏi sắt', 'Iron Ingot', 'Vật liệu chế', TH, 1, G, MVP, {});
D('COM-104', 'Mạch phục hồi', 'Restored Circuit', 'Vật liệu chế', IG, 1, G, MVP, {});
D('COM-105', 'Khối nước tinh khiết', 'Purified Ice Block', 'Vật liệu chế', TH, 1, G, MVP, {});
D('COM-201', 'Tấm hợp kim chịu nhiệt', 'Heat Alloy Plate', 'Vật liệu chế', IG, 1, M, SAU, {});
D('COM-202', 'Thỏi cobalt', 'Cobalt Ingot', 'Vật liệu chế', IG, 1, M, SAU, {});
D('COM-203', 'Mạch cảm biến', 'Sensor Circuit', 'Vật liệu chế', HI, 1, M, SAU, {});
D('COM-204', 'Dung dịch lạnh', 'Coolant', 'Vật liệu chế', IG, 1, M, SAU, {});
D('COM-301', 'Tấm giáp Warden', 'Warden Armor Plate', 'Vật liệu chế', HI, 1, X, SAU, {});
D('COM-302', 'Phiến kính', 'Glass Slab', 'Vật liệu chế', HI, 1, X, SAU, {});
D('COM-303', 'Cuộn plasma', 'Plasma Coil', 'Vật liệu chế', HI, 1, X, SAU, {});
D('COM-304', 'Lõi nguội nạp', 'Charged Cold Core', 'Vật liệu chế', HI, 1, X, SAU, {});
D('CON-101', 'Bình Oxy nhỏ', 'Spare Canister', 'Vật tiêu hao', IG, 2, G, MVP, { sink: 'Dùng trong chuyến: hồi 40 điểm Oxy (khoảng 12% bình bậc 0) cho chính người dùng, dùng 1,5 giây, chiếm túi, tối đa 2 bình trong túi mỗi chuyến (trần chống nạp Oxy vô hạn, K22)' });
D('CON-102', 'Lưới cuộn', 'Net Cartridge', 'Vật tiêu hao', TH, 1, G, MVP, { sink: 'Dùng với Súng lưới' });
D('CON-103', 'Ống gây mê', 'Sedative Ampoule', 'Vật tiêu hao', TH, 1, G, SAU, { sink: 'Dùng với Súng gây mê' });
D('CON-104', 'Keo vá', 'Sealant Patch', 'Vật tiêu hao', TH, 1, G, SAU, { sink: 'Xử lý sự cố rò khí, 1 mỗi lần (K14, gd-quan)' });
D('CON-105', 'Cầu chì dự phòng', 'Spare Fuse', 'Vật tiêu hao', IG, 1, G, SAU, { sink: 'Xử lý sự cố chập điện, 1 mỗi lần (K14, gd-quan)' });
D('CON-106', 'Phao kéo', 'Tow Buoy', 'Vật tiêu hao', IG, 1, G, SAU, { sink: 'Gửi Driftlife cỡ M bất lực về kho (gd-combat)' });
D('CON-107', 'Kim sinh thiết', 'Biopsy Needle', 'Vật tiêu hao', IG, 1, G, SAU, { sink: 'Lấy mẫu sinh thiết loài cỡ L (gd-combat)' });
D('FED-101', 'Thức ăn nuôi Gần', 'Near Feed', 'Thức ăn nuôi', TH, 1, G, SAU, { sink: 'Khoang sinh quyển, 1 mỗi con mỗi ngày (K16)' });
D('FED-201', 'Thức ăn nuôi Giữa', 'Mid Feed', 'Thức ăn nuôi', TH, 1, M, SAU, { sink: 'Khoang sinh quyển, 1 mỗi con mỗi ngày (K16)' });
D('FED-301', 'Thức ăn nuôi Xa', 'Far Feed', 'Thức ăn nuôi', TH, 1, X, SAU, { sink: 'Khoang sinh quyển, 1 mỗi con mỗi ngày (K16)' });
const CG = (id, ten, en, hiem, dai, nhan, o = {}) => D(id, ten, en, 'Kiện', hiem, 'kho', dai, nhan, { sink: 'Bán theo thùng ở ca cảng (K13)', ...o });
CG('CGO-101', 'Kiện phế liệu', 'Scrap Crate', TH, G, MVP, { ghi: 'Cỡ Vừa' });
CG('CGO-102', 'Kiện cáp', 'Cable Crate', TH, G, MVP, { ghi: 'Cỡ Nhỏ' });
CG('CGO-103', 'Kiện quặng', 'Ore Crate', TH, G, MVP, { ghi: 'Cỡ Lớn' });
CG('CGO-104', 'Kiện băng', 'Ice Crate', TH, G, MVP, { ghi: 'Cỡ Lớn' });
CG('CGO-105', 'Kiện mô sinh học', 'Biomass Crate', TH, G, MVP, { ghi: 'Cỡ Nhỏ' });
CG('CGO-109', 'Kiện đồ Trái Đất', 'Earth Trinket Crate', IG, G, MVP, { ghi: 'Cỡ Nhỏ, tàu của người mê đồ Trái Đất hỏi (gd-story, gd-quan)' });
CG('CGO-111', 'Kiện cơ khí', 'Mechanical Crate', IG, G, SAU, { ghi: 'Cỡ Vừa' });
CG('CGO-112', 'Kiện điện tử', 'Electronics Crate', IG, G, SAU, { ghi: 'Cỡ Nhỏ' });
CG('CGO-113', 'Kiện nước tinh khiết', 'Purified Water Crate', IG, G, MVP, { ghi: 'Cỡ Vừa' });
CG('CGO-106', 'Kiện đặc sản Gần', 'Near Specialty Crate', IG, G, MVP, { ghi: 'Cỡ Nhỏ' });
CG('CGO-107', 'Kiện sản phẩm nuôi Gần', 'Near Farm Crate', IG, G, SAU, { ghi: 'Cỡ Nhỏ (HC07)' });
CG('CGO-121', 'Lồng sinh vật sống Gần', 'Near Live Cage', HI, G, MVP, { ghi: 'Cỡ Lớn, mang nguyên lồng (HC06), nhớ loài để khớp đơn' });
CG('CGO-141', 'Kiện vật tư', 'Supply Crate', IG, G, SAU, { ghi: 'Cỡ Vừa (HC08, đồ chế)' });
CG('CGO-131', 'Bản sao dữ liệu', 'Data Copy', HI, G, SAU, { ghi: 'Cỡ Nhỏ (HC09), sao từ vật kể chuyện loại dữ liệu, vật gốc ở lại' });
CG('CGO-211', 'Kiện hợp kim', 'Alloy Crate', IG, M, SAU, { ghi: 'Cỡ Vừa' });
CG('CGO-212', 'Kiện cảm biến', 'Sensor Crate', HI, M, SAU, { ghi: 'Cỡ Nhỏ' });
CG('CGO-213', 'Kiện dung dịch lạnh', 'Coolant Crate', IG, M, SAU, { ghi: 'Cỡ Vừa' });
CG('CGO-206', 'Kiện đặc sản Giữa', 'Mid Specialty Crate', HI, M, SAU, { ghi: 'Cỡ Nhỏ' });
CG('CGO-207', 'Kiện sản phẩm nuôi Giữa', 'Mid Farm Crate', IG, M, SAU, { ghi: 'Cỡ Nhỏ' });
CG('CGO-221', 'Lồng sinh vật sống Giữa', 'Mid Live Cage', HI, M, SAU, { ghi: 'Cỡ Lớn' });
CG('CGO-311', 'Kiện giáp', 'Armor Crate', HI, X, SAU, { ghi: 'Cỡ Vừa' });
CG('CGO-312', 'Kiện plasma', 'Plasma Crate', HI, X, SAU, { ghi: 'Cỡ Vừa' });
CG('CGO-313', 'Kiện lõi nguội', 'Cold Core Crate', HI, X, SAU, { ghi: 'Cỡ Nhỏ' });
CG('CGO-306', 'Kiện đặc sản Xa', 'Far Specialty Crate', HI, X, SAU, { ghi: 'Cỡ Nhỏ' });
CG('CGO-307', 'Kiện sản phẩm nuôi Xa', 'Far Farm Crate', HI, X, SAU, { ghi: 'Cỡ Nhỏ' });
CG('CGO-321', 'Lồng sinh vật sống Xa', 'Far Live Cage', HI, X, SAU, { ghi: 'Cỡ Lớn' });
CG('CGO-411', 'Kiện linh kiện Cradle', 'Cradle Parts Crate', HI, CR, SAU, { ghi: 'Cỡ Nhỏ' });
CG('CGO-421', 'Kiện tin mật', 'Dispatch Crate', HI, X, SAU, { ghi: 'Cỡ Nhỏ (giao cho tàu của mạng lưới, nhóm hàng HC15 của gd-quan, giá trị bằng kiện vỏ bọc)' });
CG('CGO-511', 'Kiện linh kiện Warden', 'Warden Parts Crate', HI, X, SAU, { ghi: 'Cỡ Nhỏ' });

for (const id of ['CGO-121', 'CGO-221', 'CGO-321']) items.find((i) => i.id === id).gtd = 'theo loài';
// Không có GTĐ: linh kiện lõi (mua Shop), bản thiết kế, vật kể chuyện, vật kéo.
const N = (id, ten, en, nhom, hiem, khoi, dai, nhan, o) => I(id, ten, en, nhom, hiem, khoi, '-', dai, nhan, o);
N('ENG-101', 'Van tiết lưu', 'Throttle Valve', 'Linh kiện lõi', HI, 'kho', G, MVP, { nguon: 'Shop (K19), mở ở Hạng cảng 3 (kinh-te-tien-trinh.md)', sink: 'Lắp động cơ chính, giai đoạn 1' });
N('ENG-102', 'Buồng đốt tái chế', 'Recycled Combustor', 'Linh kiện lõi', HI, 'kho', M, SAU, { nguon: 'Shop (K19)', sink: 'Lắp động cơ chính, giai đoạn 2' });
N('ENG-103', 'Cuộn ổn định từ', 'Magnetic Stabilizer', 'Linh kiện lõi', HI, 'kho', X, SAU, { nguon: 'Shop (K19)', sink: 'Lắp động cơ chính, giai đoạn 3' });
N('ENG-104', 'Bơm nhiên liệu Veyl', 'Veyl Fuel Pump', 'Linh kiện lõi', HI, 'kho', X, SAU, { nguon: 'Shop (K19)', sink: 'Lắp động cơ chính, giai đoạn 4' });
N('ENG-105', 'Lõi dẫn hướng rời bãi vỡ', 'Exit Guide Core', 'Linh kiện lõi', DB, 'kho', CR, SAU, { nguon: 'Chế từ vật kể chuyện (RCP-207), không mua được (đường rời bãi vỡ không ai bán, R2 của truyện)', sink: 'Lắp động cơ chính, giai đoạn 5' });
N('BPR-101', 'Bản thiết kế Súng lưới bậc 2', 'Net Gun Mk2 Blueprint', 'Bản thiết kế', IG, 0, G, SAU, { nguon: 'Nghiên cứu mẫu sống DL-G01 (RCP-301)', sink: 'Học để mở UPG-NET-2 (vùng lưới rộng hơn, chỉ số do gd-combat)' });
N('BPR-102', 'Bản thiết kế Súng gây mê', 'Tranq Gun Blueprint', 'Bản thiết kế', IG, 0, G, SAU, { nguon: 'Nghiên cứu mẫu sống DL-G04 (RCP-302)', sink: 'Học để mở RCP-202' });
N('BPR-103', 'Bản thiết kế Máy quét xung', 'Pulse Scanner Blueprint', 'Bản thiết kế', IG, 0, G, SAU, { nguon: 'Shop (K19) và hòm nhánh Seed Station thứ hai', sink: 'Học để mở RCP-203' });
N('BPR-105', 'Bản thiết kế Máy cắt thân tàu', 'Hull Cutter Blueprint', 'Bản thiết kế', HI, 0, X, SAU, { nguon: 'Hòm cố định trong khoang nghiên cứu Station Flint, mở sau BS-3 (chương 3, gd-world), và Shop (K19)', sink: 'Học để mở RCP-206' });
N('BPR-106', 'Bản thiết kế tiện ích cảng', 'Port Utility Blueprint', 'Bản thiết kế', HI, 0, X, SAU, { nguon: 'Shop (K19)', sink: 'Sửa khoang Bến 2, bến 3 và tiện ích cảng' });
N('STY-101', 'Nhật ký trạm', 'Station Log', 'Vật manh mối', DB, 0, G, MVP, { nguon: 'Mỗi xác Seed Station một bản (gd-story, gd-world)', sink: 'Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi. Loại dữ liệu, sao được thành CGO-131' });
N('STY-102', 'Mảnh lõi dẫn đường Cinder', 'Cinder Nav Core Fragment', 'Vật nhiệm vụ', DB, 1, G, MVP, { nguon: 'Xác Seed Station Cinder (gd-world, gd-story)', sink: 'Vật liệu sửa khoang dẫn đường KH08 (chương 2), bị tiêu ở việc sửa đó, ghép đường đi' });
N('STY-103', 'Mảnh lõi dẫn đường Wick', 'Wick Nav Core Fragment', 'Vật nhiệm vụ', DB, 1, M, SAU, { nguon: 'Xác Seed Station Wick (gd-world, gd-story)', sink: 'Nộp ở khoang dẫn đường (Hoa tiêu), không tiêu vật, vào kho, ghép đường đi' });
N('STY-104', 'Manh mối lõi dẫn đường Flint', 'Flint Nav Core Clue', 'Vật manh mối', DB, 0, X, SAU, { nguon: 'Xác Seed Station Flint (gd-world, gd-story)', sink: 'Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi' });
N('STY-105', 'Manh mối lõi dẫn đường Cradle', 'Cradle Nav Core Clue', 'Vật manh mối', DB, 0, CR, SAU, { nguon: 'Cradle Interior (gd-world)', sink: 'Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi' });
N('STY-111', 'Bản tin trong máy liên lạc Cinder', 'Cinder Comm Message', 'Vật manh mối', DB, 0, G, MVP, { nguon: 'Mã truyện MM1.2, máy liên lạc xác Seed Station Cinder (gd-story, gd-world)', sink: 'Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi' });
N('STY-211', 'Mảng vỏ thân Wick', 'Wick Hull Panel', 'Vật manh mối', DB, 0, M, SAU, { nguon: 'Mã truyện MM2.1, xác Seed Station Wick (gd-story, gd-world)', sink: 'Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi' });
N('STY-212', 'Sổ trực Lantern', 'Lantern Watch Log', 'Vật manh mối', DB, 0, M, SAU, { nguon: 'Mã truyện MM2.3, Station Lantern (gd-story, gd-world)', sink: 'Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi' });
N('STY-213', 'Bản Lodestar Survey treo tường ở Lantern', 'Lantern Lodestar Survey Copy', 'Vật manh mối', DB, 0, M, SAU, { nguon: 'Mã truyện MM2.4, Station Lantern (gd-story, gd-world)', sink: 'Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi' });
N('STY-311', 'Bản ghi chuyển tin The Lattice và sổ hải trình', 'Lattice Relay Record', 'Vật manh mối', DB, 0, X, SAU, { nguon: 'Mã truyện MM3.1, Veyl Waypost (gd-story, gd-world)', sink: 'Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi' });
N('STY-312', 'Lời tuyên bố khu bảo hộ', 'Protected Zone Declaration', 'Vật manh mối', DB, 0, X, SAU, { nguon: 'Mã truyện MM3.2 (gd-story, gd-world)', sink: 'Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi' });
N('STY-313', 'Xác máy thu hoạch', 'Harvester Wreck', 'Vật manh mối', DB, 0, X, SAU, { nguon: 'Mã truyện MM3.3 (gd-story, gd-world)', sink: 'Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi' });
N('STY-411', 'Vết vũ khí trên vỏ Cradle', 'Weapon Scars on Cradle Hull', 'Vật manh mối', DB, 0, CR, SAU, { nguon: 'Mã truyện MM4.1, bên trong và vỏ Cradle (gd-story, gd-world)', sink: 'Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi' });
N('STY-412', 'Hiến chương định cư United Accord', 'United Accord Settlement Charter', 'Vật manh mối', DB, 0, CR, SAU, { nguon: 'Mã truyện MM4.2, bên trong Cradle (gd-story, gd-world)', sink: 'Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi' });
N('STY-414', 'Bản gốc Lodestar Survey', 'Original Lodestar Survey', 'Vật manh mối', DB, 0, CR, SAU, { nguon: 'Mã truyện MM4.4, bên trong Cradle (gd-story, gd-world)', sink: 'Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi' });
N('STY-301', 'Mẫu mang dấu săn bắt Wardens', 'Hunt-marked Sample', 'Vật nhiệm vụ', DB, 1, X, SAU, { nguon: 'Station Flint (chương 3, gd-story)', sink: 'Nộp ở phòng nghiên cứu (Nhà sinh học), không tiêu vật, vào kho, mở cú lật Driftlife' });
N('STY-401', 'Hộp ghi hành trình Cradle', 'Cradle Flight Recorder', 'Vật nhiệm vụ', DB, 1, CR, SAU, { nguon: 'Cradle Interior (chương 4, gd-story)', sink: 'Nộp ở khoang dẫn đường (không tiêu vật, vào kho), mở cảnh truyện. Loại dữ liệu, sao được thành CGO-131 (RCP-141). Bị tiêu ở RCP-207 (sau mốc C5.6)' });
N('STY-501', 'Bản đồ sao thật', 'True Star Chart', 'Vật nhiệm vụ', DB, 1, CR, SAU, { nguon: 'Data Core ở Warden Rig, khe V1, mở sau BS-5 (chương 5, gd-world). Không rơi từ Daskel. Tọa độ hành tinh thật do Sevra trao ở C5.6 là cảnh truyện, không phải vật', sink: 'Nộp ở khoang dẫn đường (không tiêu vật, vào kho). Bị tiêu ở RCP-207 (Lõi dẫn hướng rời bãi vỡ, sau mốc C5.6)' });
N('STY-701', 'Gói tin mật', 'Sealed Dispatch', 'Vật nhiệm vụ', DB, 1, X, SAU, { nguon: 'Khoang liên lạc nhận từ mạng lưới, tối đa 1 gói mỗi ngày từ khi mốc nối tình báo mở (chương 4 đến 5, gd-quan), không mua bán', sink: 'Bị tiêu ở RCP-422 (đóng kiện tin mật). Mất khi rời phiên thì về lại khoang liên lạc (luật V4)' });
N('STY-502', 'Lệnh phục kích Cradle mang dấu Daskel', 'Daskel-Marked Ambush Order', 'Vật manh mối', DB, 0, CR, SAU, { nguon: 'Data Core ở Warden Rig, khe M1, cùng chỗ STY-501, mở sau BS-5 (chương 5, gd-world). Không rơi từ Daskel', sink: 'Tự ghi vào Sổ tay, mở cảnh truyện. Không sao thành CGO-131 (RCP-141 chỉ sao STY-101 và STY-401)' });
N('STY-601', 'Thẻ tên buồng ngủ đông', 'Cryo Pod Nameplate', 'Vật manh mối', DB, 0, G, SAU, { nguon: 'Xác Seed Station, mỗi buồng đã tắt một thẻ (gd-story)', sink: 'Tự ghi vào Sổ tay, hiện trên tường khoang buồng ngủ đông (đổi hình trạm, P2), không có công dụng chơi' });
N('BNG-102', 'Kén thoát hiểm của Ilsume', 'Ilsume Escape Pod', 'Vật kéo', DB, 'kéo', X, SAU, { nguon: 'Map nhánh N4 Waypost Outer Ring, cứu Sevra ở mốc C3.8 (gd-story, gd-world)', sink: 'Đưa về trạm qua cửa khí (C3.8), sau đó kéo tới The Hearth ở N4 (C5.1). Không mở người vớt hay tính năng. Kén rơi thì nằm lại chỗ thả, lưu ở beacon cố định gần nhất đã qua (chưa qua beacon nào thì ở cửa N4), ngoài K2 (combat luật 42, 43, map 2.7.9)' });
N('BNG-101', 'Buồng ngủ đông (có người)', 'Cryo Pod', 'Vật kéo', DB, 'kéo', G, MVP, { nguon: 'Map nhánh xác Seed Station, người vớt theo K12', sink: 'Đưa về trạm, mở người vớt và tính năng' });

// Công thức. vao: [[id hoặc [id...], số]]. ra: [id, số] hoặc {nc} hoặc {tol}. giu: vật giữ nguyên, không tiêu.
const rec = [];
const R = (id, ten, noi, loai, vao, ra, t, mo, nhan, m = 1, giu = '') => rec.push({ id, ten, noi, loai, vao, ra, t, mo, nhan, m, giu });
const XU = 'Xưởng', CA = 'Cảng', NC = 'Phòng nghiên cứu', SQ = 'Khoang sinh quyển', LL = 'Khoang liên lạc';
const KH = 'Kỹ sư (chương 1)', TD = 'Thông dịch viên (chương 1)';
const ids = (dai, ...pre) => species.filter((s) => (!dai || s.dai === dai)).flatMap((s) => pre.map((p) => [p, s]));
const pick = (dai, kind) => species.filter((s) => s.dai === dai && ((kind === 'SMP' && s.ha) || (kind === 'LIV' && s.bat === 'LIV') || (kind === 'BPS' && s.bat === 'BPS') || (kind === 'BIO' && s.nuoi))).map((s) => ({ SMP: s.dacId, LIV: s.livId, BPS: s.bpsId, BIO: s.bioId }[kind]));
const SG = pick(G, 'SMP'), LG = ['LIV-111', 'LIV-112', 'LIV-113'], LGM = ['LIV-114', 'LIV-115'], BG = pick(G, 'BIO');
const SM = [...pick(M, 'SMP'), ...pick(M, 'BPS')], LM = pick(M, 'LIV'), BM = pick(M, 'BIO');
const SX = [...pick(X, 'SMP'), ...pick(X, 'BPS')], LX = pick(X, 'LIV'), BX = pick(X, 'BIO');
// Vật liệu chế (hệ số m trong [1,25 ; 1,5])
R('RCP-101', 'Ép tấm thép', XU, 'COM', [['RES-101', 3]], ['COM-101', 1], 10, KH, MVP, 1.3);
R('RCP-102', 'Bện dây dẫn', XU, 'COM', [['RES-102', 3]], ['COM-102', 1], 8, KH, MVP, 1.3);
R('RCP-103', 'Luyện thỏi sắt', XU, 'COM', [['RES-103', 2]], ['COM-103', 1], 15, KH, MVP, 1.35);
R('RCP-104', 'Phục hồi mạch', XU, 'COM', [['RES-104', 2], ['RES-102', 1]], ['COM-104', 1], 20, KH, MVP, 1.45);
R('RCP-105', 'Lọc băng', XU, 'COM', [['RES-105', 2]], ['COM-105', 1], 12, KH, MVP, 1.3);
R('RCP-151', 'Ép tấm hợp kim chịu nhiệt', XU, 'COM', [['RES-201', 3]], ['COM-201', 1], 10, 'Kỹ sư, dải Giữa mở', SAU, 1.3);
R('RCP-152', 'Luyện thỏi cobalt', XU, 'COM', [['RES-202', 2]], ['COM-202', 1], 15, 'Kỹ sư, dải Giữa mở', SAU, 1.35);
R('RCP-153', 'Chế mạch cảm biến', XU, 'COM', [['RES-204', 1], ['COM-104', 1]], ['COM-203', 1], 20, 'Kỹ sư, dải Giữa mở', SAU, 1.4);
R('RCP-154', 'Pha dung dịch lạnh', XU, 'COM', [['RES-203', 2]], ['COM-204', 1], 12, 'Kỹ sư, dải Giữa mở', SAU, 1.3);
R('RCP-161', 'Ép tấm giáp Warden', XU, 'COM', [['RES-301', 3]], ['COM-301', 1], 12, 'Kỹ sư, dải Xa mở', SAU, 1.3);
R('RCP-162', 'Mài phiến kính', XU, 'COM', [['RES-302', 2]], ['COM-302', 1], 18, 'Kỹ sư, dải Xa mở', SAU, 1.35);
R('RCP-163', 'Cuộn plasma', XU, 'COM', [['RES-303', 2]], ['COM-303', 1], 18, 'Kỹ sư, dải Xa mở', SAU, 1.35);
R('RCP-164', 'Nạp lõi nguội', XU, 'COM', [['RES-304', 1], ['COM-204', 1]], ['COM-304', 1], 20, 'Kỹ sư, dải Xa mở', SAU, 1.4);
// Vật tiêu hao (không bán, m = 1)
R('RCP-131', 'Nạp Bình Oxy nhỏ', XU, 'CON', [['COM-105', 1], ['COM-101', 1]], ['CON-101', 1], 10, KH, MVP);
R('RCP-132', 'Quấn Lưới cuộn', XU, 'CON', [['COM-102', 2], ['SMP-101', 1]], ['CON-102', 10], 10, 'Quest Kỹ sư (chương 1)', MVP);
R('RCP-133', 'Chiết Ống gây mê', NC, 'CON', [['SMP-111', 1], ['COM-105', 1]], ['CON-103', 2], 10, 'Nhà sinh học (chương 2)', SAU);
R('RCP-134', 'Trộn Keo vá', XU, 'CON', [['COM-101', 2], ['SMP-113', 1]], ['CON-104', 2], 10, 'Chương 3', SAU);
R('RCP-135', 'Lắp Cầu chì dự phòng', XU, 'CON', [['COM-104', 1], ['SMP-114', 1]], ['CON-105', 2], 10, 'Chương 3', SAU);
R('RCP-136', 'Chế Phao kéo', XU, 'CON', [['COM-103', 1], ['COM-102', 1], ['COM-105', 1]], ['CON-106', 2], 10, 'Chương 2', SAU);
R('RCP-137', 'Chế Kim sinh thiết', NC, 'CON', [['COM-104', 1], ['COM-105', 1]], ['CON-107', 2], 10, 'Nhà sinh học (chương 2)', SAU);
// Thức ăn nuôi: 1 đơn vị cho 1 con mỗi ngày, rẻ hơn sản phẩm nuôi (kiểm bằng script)
R('RCP-171', 'Pha thức ăn nuôi Gần', SQ, 'FOD', [['SMP-101', 2]], ['FED-101', 4], 8, 'Chương 2', SAU);
R('RCP-271', 'Pha thức ăn nuôi Giữa', SQ, 'FOD', [['SMP-201', 2]], ['FED-201', 4], 8, 'Chương 2', SAU);
R('RCP-371', 'Pha thức ăn nuôi Xa', SQ, 'FOD', [['SMP-301', 2]], ['FED-301', 4], 8, 'Chương 3', SAU);
// Đóng kiện thô (m = 1,0), kiện tinh (m trong [1,1 ; 1,25]), kiện sống (m = 1,0), bản sao dữ liệu (m trong [1,5 ; 2,5])
R('RCP-111', 'Đóng kiện phế liệu', CA, 'CGOT', [['RES-101', 14]], ['CGO-101', 1], 5, TD, MVP);
R('RCP-112', 'Đóng kiện cáp', CA, 'CGOT', [['RES-102', 11]], ['CGO-102', 1], 5, TD, MVP);
R('RCP-113', 'Đóng kiện quặng', CA, 'CGOT', [['RES-103', 6]], ['CGO-103', 1], 6, TD, MVP);
R('RCP-114', 'Đóng kiện băng', CA, 'CGOT', [['RES-105', 7]], ['CGO-104', 1], 6, TD, MVP);
R('RCP-115', 'Đóng kiện mô sinh học', CA, 'CGOT', [['SMP-101', 9]], ['CGO-105', 1], 5, TD, MVP);
R('RCP-116', 'Đóng kiện đồ Trái Đất', CA, 'CGOT', [['RES-106', 5]], ['CGO-109', 1], 5, TD, MVP);
R('RCP-121', 'Đóng kiện cơ khí', CA, 'CGOF', [['COM-101', 3]], ['CGO-111', 1], 5, 'Chương 2', SAU, 1.15);
R('RCP-122', 'Đóng kiện điện tử', CA, 'CGOF', [['COM-102', 3]], ['CGO-112', 1], 5, 'Chương 2', SAU, 1.15);
R('RCP-123', 'Đóng kiện nước tinh khiết', CA, 'CGOF', [['COM-105', 2]], ['CGO-113', 1], 5, TD, MVP, 1.15);
R('RCP-124', 'Đóng kiện đặc sản Gần', CA, 'CGOF', [[SG, 3]], ['CGO-106', 1], 5, TD, MVP, 1.1);
R('RCP-125', 'Đóng kiện sản phẩm nuôi Gần', CA, 'CGOF', [[BG, 13]], ['CGO-107', 1], 5, 'Chương 2', SAU, 1.1);
R('RCP-126', 'Đưa sinh vật sống cỡ S Gần vào lồng giao', CA, 'CGOL', [[LG, 1]], ['CGO-121', 1], 8, TD, MVP);
R('RCP-128', 'Đưa sinh vật sống cỡ M Gần vào lồng giao', CA, 'CGOL', [[LGM, 1]], ['CGO-121', 1], 8, 'Chương 2', SAU);
R('RCP-127', 'Đóng kiện vật tư', CA, 'CGOF', [['CON-101', 4], ['CON-102', 4]], ['CGO-141', 1], 5, 'Chương 2', SAU, 1.15);
R('RCP-141', 'Sao bản dữ liệu', LL, 'CGOD', [['COM-104', 1]], ['CGO-131', 1], 10, 'Chương 3', SAU, 2.0, 'một vật kể chuyện loại dữ liệu (STY-101, STY-401), mỗi vật gốc sao một lần');
R('RCP-221', 'Đóng kiện hợp kim', CA, 'CGOF', [['COM-201', 3]], ['CGO-211', 1], 5, 'Chương 2', SAU, 1.15);
R('RCP-222', 'Đóng kiện cảm biến', CA, 'CGOF', [['COM-203', 1]], ['CGO-212', 1], 5, 'Chương 2', SAU, 1.15);
R('RCP-223', 'Đóng kiện dung dịch lạnh', CA, 'CGOF', [['COM-204', 3]], ['CGO-213', 1], 5, 'Chương 2', SAU, 1.15);
R('RCP-224', 'Đóng kiện đặc sản Giữa', CA, 'CGOF', [[SM, 4]], ['CGO-206', 1], 5, 'Chương 2', SAU, 1.1);
R('RCP-225', 'Đóng kiện sản phẩm nuôi Giữa', CA, 'CGOF', [[BM, 6]], ['CGO-207', 1], 5, 'Chương 2', SAU, 1.1);
R('RCP-226', 'Đưa sinh vật sống Giữa vào lồng giao', CA, 'CGOL', [[LM, 1]], ['CGO-221', 1], 8, 'Chương 2', SAU);
R('RCP-321', 'Đóng kiện giáp', CA, 'CGOF', [['COM-301', 3]], ['CGO-311', 1], 5, 'Chương 3', SAU, 1.15);
R('RCP-322', 'Đóng kiện plasma', CA, 'CGOF', [['COM-303', 2]], ['CGO-312', 1], 5, 'Chương 3', SAU, 1.15);
R('RCP-323', 'Đóng kiện lõi nguội', CA, 'CGOF', [['COM-304', 3]], ['CGO-313', 1], 5, 'Chương 3', SAU, 1.15);
R('RCP-324', 'Đóng kiện đặc sản Xa', CA, 'CGOF', [[SX, 5]], ['CGO-306', 1], 5, 'Chương 3', SAU, 1.1);
R('RCP-325', 'Đóng kiện sản phẩm nuôi Xa', CA, 'CGOF', [[BX, 7]], ['CGO-307', 1], 5, 'Chương 3', SAU, 1.1);
R('RCP-421', 'Đóng kiện linh kiện Cradle', CA, 'CGOF', [['RES-401', 7]], ['CGO-411', 1], 6, 'Chương 4', SAU, 1.15);
R('RCP-422', 'Đóng kiện tin mật', CA, 'CGOT', [[['CGO-311', 'CGO-312', 'CGO-313', 'CGO-306', 'CGO-307'], 1], ['STY-701', 1]], ['CGO-421', 1], 6, 'Chương 4', SAU, 1.0);
R('RCP-521', 'Đóng kiện linh kiện Warden', CA, 'CGOF', [['RES-305', 14]], ['CGO-511', 1], 6, 'Chương 5', SAU, 1.15);
R('RCP-326', 'Đưa sinh vật sống Xa vào lồng giao', CA, 'CGOL', [[LX, 1]], ['CGO-321', 1], 8, 'Chương 3', SAU);
// Nghiên cứu: mẫu sống đổi ra bản thiết kế
R('RCP-301', 'Phân tích DL-G01', NC, 'NCU', [['LIV-111', 1], ['COM-105', 2]], ['BPR-101', 1], 'đêm', 'Nhà sinh học (chương 2)', SAU);
R('RCP-302', 'Phân tích DL-G04', NC, 'NCU', [['LIV-113', 1], ['COM-105', 2]], ['BPR-102', 1], 'đêm', 'Nhà sinh học (chương 2)', SAU);
R('RCP-207', 'Ghép Lõi dẫn hướng rời bãi vỡ', XU, 'ENG', [['STY-501', 1], ['STY-401', 1], ['COM-203', 2]], ['ENG-105', 1], 'đêm', 'Chương 5', SAU);
// Dụng cụ mở khóa (đầu ra là mở khóa cho cả nhóm, C4) và nâng cấp bậc. Chi phí vật liệu nhắm 25 x 1,8^(bậc-2) GTĐ, sai số 20%.
const T1 = (id, ten, vao, mo, nhan, bac = 2) => R(id, ten, XU, 'TOL', vao, { tol: true, bac }, 'đêm', mo, nhan);
T1('RCP-205', 'Chế Bộ kích nguồn (TOL-401)', [['RES-101', 6], ['RES-102', 3], ['RES-104', 1]], 'Xưởng, công thức đầu tiên sau khi vớt Kỹ sư', MVP, 1);
T1('RCP-201', 'Chế Súng lưới (TOL-202)', [['COM-103', 2], ['COM-102', 1], ['COM-104', 1]], 'Quest Kỹ sư (chương 1)', MVP);
T1('RCP-202', 'Chế Súng gây mê (TOL-203)', [['COM-103', 1], ['COM-104', 1], ['COM-105', 2]], 'BPR-102', SAU);
T1('RCP-203', 'Chế Máy quét xung (TOL-301)', [['COM-104', 1], ['COM-102', 1], ['COM-101', 2]], 'BPR-103', SAU);
T1('RCP-204', 'Chế Dùi xung (TOL-201)', [['COM-103', 2], ['COM-104', 1], ['COM-101', 1]], 'Quest Kỹ sư (chương 1)', MVP);
T1('RCP-206', 'Chế Máy cắt thân tàu (TOL-402)', [['COM-301', 1], ['COM-303', 1], ['COM-104', 1]], 'BPR-105', SAU, 4);
T1('RCP-208', 'Chế Lồng mẫu (TOL-501)', [['COM-101', 2], ['COM-103', 1], ['COM-102', 1], ['COM-105', 1]], 'Quest Kỹ sư (chương 1)', MVP);
const U = (id, cls, vao, mo, nhan) => R(id, `Nâng cấp ${id.split("-")[1]} bậc ${id.split('-')[2]}`, XU, 'UPG', vao, { nc: id, bac: cls }, 'đêm', mo, nhan);
// Trục bộ đồ (T-OXY, T-TUI, T-DAY, T-VO, T-DUNGCU): bậc n có lớp chi phí n + 1. Dụng cụ (MIN, HAR): bậc n có lớp chi phí n.
U('UPG-OXY-1', 2, [['COM-101', 4], ['COM-105', 2]], KH, MVP);
U('UPG-BAG-1', 2, [['COM-102', 3], ['COM-101', 2], ['RES-102', 2]], KH, MVP);
U('UPG-THR-1', 2, [['COM-103', 2], ['COM-104', 1], ['COM-101', 1]], KH, MVP);
U('UPG-MIN-2', 2, [['COM-103', 2], ['COM-101', 2], ['COM-102', 1]], KH, MVP);
U('UPG-HAR-2', 2, [['COM-103', 2], ['COM-104', 1], ['COM-102', 1]], KH, MVP);
U('UPG-RACK-1', 2, [['COM-101', 2], ['COM-102', 2], ['COM-103', 1]], 'Quest Kỹ sư (chương 1), đi kèm Dùi xung', MVP);
U('UPG-NET-2', 2, [['COM-103', 1], ['COM-102', 2], ['COM-104', 1]], 'BPR-101', SAU);
U('UPG-OXY-2', 3, [['COM-201', 2], ['COM-204', 2]], 'Chương 2', SAU);
U('UPG-BAG-2', 3, [['COM-201', 2], ['COM-102', 2], ['COM-101', 2]], 'Chương 2', SAU);
U('UPG-THR-2', 3, [['COM-202', 1], ['COM-203', 1]], 'Chương 2', SAU);
U('UPG-MIN-3', 3, [['COM-202', 2], ['COM-103', 2]], 'Chương 2', SAU);
U('UPG-HAR-3', 3, [['COM-203', 1], ['COM-202', 1]], 'Chương 2', SAU);
U('UPG-ENV-1', 3, [['COM-204', 2], ['COM-201', 1], ['COM-105', 2]], 'Chương 2 (dải Giữa)', SAU);
U('UPG-RACK-2', 3, [['COM-103', 2], ['COM-202', 1], ['COM-102', 2]], 'Chương 2', SAU);
U('UPG-OXY-3', 4, [['COM-302', 1], ['COM-301', 1]], 'Chương 3', SAU);
U('UPG-BAG-3', 4, [['COM-303', 1], ['COM-301', 1], ['COM-104', 1]], 'Chương 3', SAU);
U('UPG-THR-3', 4, [['COM-304', 1], ['COM-302', 1]], 'Chương 3', SAU);
U('UPG-ENV-2', 4, [['COM-301', 1], ['COM-304', 1], ['COM-203', 1]], 'Chương 3 (dải Xa)', SAU);
U('UPG-OXY-4', 5, [['COM-302', 1], ['COM-304', 1], ['COM-303', 1], ['RES-401', 1]], 'Chương 4 đến 5', SAU);
U('UPG-BAG-4', 5, [['COM-303', 1], ['COM-304', 1], ['COM-301', 1], ['RES-401', 1]], 'Chương 4 đến 5', SAU);
U('UPG-ENV-3', 5, [['COM-301', 1], ['COM-302', 1], ['COM-304', 1], ['RES-401', 1]], 'Chương 4 (Cradle)', SAU);

// Trang bị (dụng cụ, chìa, lồng mẫu): mở khóa cho cả nhóm, không vào kho. Chỉ số combat do gd-combat giữ.
const tools = [
  ['TOL-102', 'Dụng cụ khai thác', 'Mining Tool', 'Khai thác', 'Khởi đầu', MVP, 'Khoan khoáng và băng (độ cứng 1 đến 3), nạy hòm (cấp khóa 1 đến 3). Bậc thấp hơn độ cứng hoặc cấp khóa thì chậm gấp 4'],
  ['TOL-211', 'Lao từ', 'Mag Harpoon', 'Hạ', 'Khởi đầu', MVP, 'Đòn tầm xa dùng cooldown. Chỉ số theo bậc do gd-combat'],
  ['TOL-201', 'Dùi xung', 'Pulse Prod', 'Choáng', 'Quest Kỹ sư, RCP-204', MVP, 'Làm choáng cận chiến, dùng cooldown. Chỉ số do gd-combat'],
  ['TOL-202', 'Súng lưới', 'Net Gun', 'Bắt sống', 'Quest Kỹ sư (chương 1), RCP-201', MVP, 'Bắt sống cỡ S vào Lồng mẫu, tốn CON-102. Chỉ số do gd-combat'],
  ['TOL-203', 'Súng gây mê', 'Tranq Gun', 'Bắt sống', 'BPR-102, RCP-202', SAU, 'Gây mê, tốn CON-103. Chỉ số do gd-combat'],
  ['TOL-301', 'Máy quét xung', 'Pulse Scanner', 'Tiện ích', 'BPR-103, RCP-203', SAU, 'Hiện điểm khai thác trong bán kính. Bậc 2 hiện hạng, bậc 3 hiện Driftlife. Bán kính do gd-world và gd-ux'],
  ['TOL-401', 'Bộ kích nguồn', 'Power Primer', 'Chìa', 'Xưởng, công thức đầu tiên sau khi vớt Kỹ sư (RCP-205, chỉ dùng tài nguyên thô)', MVP, 'Mở cửa D1 khóa nguồn trong Station Cinder (lần vớt thứ hai). Cổng cứng, không có chế độ chậm. Không cần mang theo (luật T7)'],
  ['TOL-402', 'Máy cắt thân tàu', 'Hull Cutter', 'Chìa', 'BPR-105, RCP-206', SAU, 'Mở vách vào Cradle Interior (chương 4). Cổng cứng, không cần mang theo (luật T7)'],
  ['TOL-501', 'Lồng mẫu', 'Specimen Cage', 'Chứa', 'Quest Kỹ sư (chương 1), RCP-208', MVP, 'Kéo theo, chứa tối đa 3 mẫu sống cỡ S, mỗi người 1 lồng (gd-combat)'],
];
// Điểm khai thác. [id, tên, dải, dụng cụ, độ cứng hoặc cấp khóa, giây ở bậc 1, số lần quay, bảng rơi [id, trọng số, số lượng], nhãn]
const nodes = [
  ['SLV-101', 'Mảnh vỡ trôi', G, 'Tay', 0, 0.8, 1, [['RES-101', 60, 1], ['RES-102', 40, 1]], MVP],
  ['SLV-102', 'Mạch quặng sắt', G, 'TOL-102', 1, 4, 1, [['RES-103', 100, 2]], MVP],
  ['SLV-103', 'Khối băng trôi', G, 'TOL-102', 1, 3.5, 1, [['RES-105', 100, 2]], MVP],
  ['SLV-104', 'Hòm kỹ thuật vỡ', G, 'TOL-102', 1, 3, 2, [['RES-104', 30, 1], ['RES-102', 30, 2], ['RES-101', 25, 2], ['RES-106', 15, 1]], MVP],
  ['SLV-105', 'Tấm vỏ lớn', G, 'TOL-102', 1, 7, 3, [['RES-101', 100, 2]], MVP],
  ['SLV-111', 'Hòm kỹ thuật Seed (nhánh)', 'Nhánh Gần', 'TOL-102', 1, 4, 3, [['RES-104', 35, 1], ['RES-102', 25, 2], ['RES-101', 25, 2], ['RES-106', 15, 1]], MVP],
  ['SLV-112', 'Kho hàng Seed (nhánh)', 'Nhánh Gần', 'TOL-102', 2, 6, 3, [['RES-104', 35, 1], ['RES-103', 35, 1], ['RES-106', 30, 1]], MVP],
  ['SLV-201', 'Mạch quặng cobalt', M, 'TOL-102', 2, 6, 1, [['RES-202', 100, 2]], SAU],
  ['SLV-202', 'Khối băng tinh', M, 'TOL-102', 2, 5.5, 1, [['RES-203', 100, 2]], SAU],
  ['SLV-203', 'Hòm Cradle', M, 'TOL-102', 2, 4, 2, [['RES-204', 25, 1], ['RES-201', 45, 2], ['RES-104', 30, 2]], SAU],
  ['SLV-204', 'Tấm hợp kim trôi', M, 'TOL-102', 1, 5, 3, [['RES-201', 100, 1]], SAU],
  ['SLV-301', 'Mạch kính nebula', X, 'TOL-102', 3, 8, 1, [['RES-302', 100, 2]], SAU],
  ['SLV-302', 'Túi khí plasma đông', X, 'TOL-102', 3, 7, 1, [['RES-303', 100, 2]], SAU],
  ['SLV-303', 'Hòm Warden', X, 'TOL-102', 3, 5, 2, [['RES-304', 30, 1], ['RES-301', 70, 2]], SAU],
];
// GD-030: sim chuyến của gd-tech cho thấy chuyến quá ngắn, nhân đôi giây khai thác (tỉ lệ giữa các node không đổi)
const TIME_X = 2;
for (const n of nodes) n[5] *= TIME_X;
// Nhu cầu vật liệu sửa khoang: ĐỀ XUẤT của gd-items, khớp 13 khoang và nhóm vật liệu ở `tram-va-cang.md` mục 2.6c. gd-economy đặt số cuối.
const repairs = [
  ['Khoang neo (KH04, hãm trôi và neo, K10)', 'Chương 1, trước khi có Xưởng nên chỉ tài nguyên thô', [['RES-101', 10], ['RES-102', 4], ['RES-104', 1]], MVP],
  ['Kho cấp 2 (KH03)', 'Chương 1', [['RES-101', 8], ['RES-103', 3]], MVP],
  ['Xưởng (KH05, Kỹ sư mở)', 'Chương 1, chỉ tài nguyên thô vì chưa chế được COM', [['RES-101', 8], ['RES-103', 4], ['RES-104', 2], ['RES-102', 3]], MVP],
  ['Khoang liên lạc (KH06, Thông dịch viên mở)', 'Chương 1, linh kiện và khoáng Gần', [['RES-104', 3], ['RES-103', 4], ['RES-102', 2]], MVP],
  ['Cảng bến 1 (KH07)', 'Chương 1, phế liệu và linh kiện Gần', [['RES-101', 8], ['RES-102', 4], ['RES-104', 2]], MVP],
  ['Động cơ chính, giai đoạn 1 (KH13)', 'Chương 1, linh kiện ENG mua ở Shop cộng vật liệu Gần cộng hạch hoặc mẫu boss BS-1', [['ENG-101', 1], ['COM-101', 6], ['COM-103', 4], [['SMP-191', 'SMP-192'], 1]], MVP],
  ['Khoang dẫn đường và bến Skiff (KH08, KH09)', 'Chương 2, hạch hoặc mẫu boss BS-1 cộng mảnh lõi dẫn đường', [['RES-204', 1], ['RES-202', 3], ['STY-102', 1], [['SMP-191', 'SMP-192'], 1]], SAU],
  ['Phòng nghiên cứu (KH10)', 'Chương 2, băng, khoáng Giữa, mẫu Driftlife', [['RES-203', 3], ['RES-202', 2], ['SMP-201', 2]], SAU],
  ['Khoang sinh quyển (KH11)', 'Chương 2', [['RES-203', 4], ['RES-204', 1], ['SMP-201', 4]], SAU],
  ['Động cơ chính, giai đoạn 2', 'Chương 2', [['ENG-102', 1], ['COM-201', 4], ['COM-202', 2]], SAU],
  ['Bến 2, bến 3, tiện ích cảng (KH12, Trưởng cảng)', 'Chương 3, phế liệu, khoáng Xa, linh kiện cộng bản thiết kế', [['RES-301', 4], ['RES-302', 2], ['RES-304', 2], ['BPR-106', 1]], SAU],
  ['Động cơ chính, giai đoạn 3', 'Chương 3', [['ENG-103', 1], ['COM-301', 3], ['COM-302', 2]], SAU],
  ['Động cơ chính, giai đoạn 4', 'Chương 4, linh kiện Warden và Cradle', [['ENG-104', 1], ['RES-305', 3], ['RES-401', 2]], SAU],
  ['Động cơ chính, giai đoạn 5', 'Chương 5, ENG-105 chế từ vật kể chuyện', [['ENG-105', 1], ['RES-305', 3], ['RES-401', 3]], SAU],
];

// ---------- Tính GTĐ dẫn xuất và kiểm ----------
const byId = new Map(items.map((i) => [i.id, i]));
const errs = [];
const err = (s) => errs.push(s);
{ const seen = new Set(); for (const x of [...items.map((i) => i.id), ...rec.map((r) => r.id), ...tools.map((t) => t[0]), ...nodes.map((n) => n[0])]) { if (seen.has(x)) err(`ID trùng: ${x}`); seen.add(x); } }
const gtdOf = (id) => (byId.get(id)?.nhom === 'Vật nhiệm vụ' ? 0 : byId.get(id)?.gtd); // vật nhiệm vụ không có giá, tính 0 khi làm đầu vào
const idsOf = (v) => (Array.isArray(v[0]) ? v[0] : [v[0]]);
const inGtd = (v) => Math.min(...idsOf(v).map(gtdOf)) * v[1];
const USE = { // số ID loài: [[vật tiêu hao, số lượng mỗi lần bắt]]
  111: [['CON-102', 1]], 112: [['CON-102', 1]], 113: [['CON-102', 1 / 3]],
  114: [['CON-103', 3], ['CON-106', 1]], 115: [['CON-106', 1]],
  211: [['CON-107', 1]], 212: [['CON-106', 1]], 213: [['CON-106', 1]], 214: [['CON-102', 1 / 3]], 215: [['CON-107', 1]],
  311: [['CON-102', 1]], 312: [['CON-103', 4], ['CON-106', 1]], 313: [['CON-107', 1]], 314: [['CON-107', 1]], 315: [['CON-102', 1 / 3]],
};
const useCost = (so) => { const v = USE[so].map(([id, n]) => [gtdOf(id), n]); return v.every(([g]) => typeof g === 'number') ? v.reduce((t, [g, n]) => t + g * n, 0) : NaN; };
const useText = (so) => USE[so].map(([id, n]) => `${n === 1 / 3 ? '1/3' : n} x ${id}`).join(', ');
for (let pass = 0; pass < 8; pass++) {
  for (const sx of species) {
    const cost = useCost(sx.so);
    if (!Number.isFinite(cost) || !sx.ha) continue;
    for (const id of [sx.livId, sx.bpsId]) { const it = byId.get(id); if (it && it.gtd === null) it.gtd = r2(sx.k * eHa(sx) + cost); }
  }
  for (const r of rec) {
    if (!r.ra?.[0] || r.ra.tol || r.ra.nc) continue;
    const it = byId.get(r.ra[0]);
    if (!it) { err(`${r.id}: đầu ra ${r.ra[0]} không có trong ITEM LIST`); continue; }
    if (it.gtd !== null) continue;
    if (r.vao.some((v) => idsOf(v).some((x) => typeof gtdOf(x) !== 'number'))) continue;
    it.gtd = Math.round((r.vao.reduce((s, v) => s + inGtd(v), 0) * r.m * 100) / r.ra[1]) / 100;
  }
}
const LONG = ['CGO-121', 'CGO-221', 'CGO-321'], NGUYEN = ['CGO-131', 'CGO-421'], THUNG = 2.5; // 1 kiện = 2,5 thùng (K13, đợt 9). Lồng sống, Bản sao dữ liệu, Kiện tin mật bán nguyên cái (Lead 2026-11-20)
for (const it of items) if (NGUYEN.includes(it.id)) it.sink = 'Bán nguyên cái ở ca cảng (K13)';
// Đợt 9: đóng kiện thành đóng thùng tự động lúc Mở ca, không tốn thời gian ca. Lồng sống làm tay ngoài ca, xong trước Mở ca.
for (const r of rec) if (r.noi === CA) { if (r.loai === 'CGOL') r.noi = 'Cảng (trước Mở ca)'; else { r.noi = 'Cảng (tự động lúc Mở ca)'; r.t = 0; } }
const thung = (id) => (!id.startsWith('CGO-') ? '' : LONG.includes(id) || NGUYEN.includes(id) ? ' (1 đơn vị bán)' : ` (${String(THUNG).replace('.', ',')} thùng)`);
const RANGE = { COM: [1.25, 1.5], CGOT: [1, 1], CGOF: [1.1, 1.25], CGOD: [1.5, 2.5], CON: [1, 1], FOD: [1, 1] };
for (const r of rec) {
  for (const v of r.vao) for (const id of idsOf(v)) if (!byId.has(id)) err(`${r.id}: đầu vào ${id} không có trong ITEM LIST`);
  r.sum = r.vao.some((v) => idsOf(v).some((x) => typeof gtdOf(x) !== 'number')) ? NaN : r.vao.reduce((s, v) => s + inGtd(v), 0);
  const out = r.ra?.[0] && !r.ra.tol && !r.ra.nc ? byId.get(r.ra[0]) : null;
  r.out = out && typeof out.gtd === 'number' ? out.gtd * r.ra[1] : null;
  r.mReal = r.out !== null && r.sum ? r.out / r.sum : null;
  const rg = RANGE[r.loai];
  if (rg && r.mReal !== null && (r.mReal < rg[0] - 0.02 || r.mReal > rg[1] + 0.02)) err(`${r.id}: hệ số ${r.mReal.toFixed(2)} ngoài khoảng ${rg}`);
  if (r.ra?.nc || r.ra?.tol) {
    const bac = r.ra.bac ?? 2, tgt = 25 * 1.8 ** (bac - 2);
    r.tgt = tgt;
    if (Math.abs(r.sum / tgt - 1) > 0.2) err(`${r.id}: chi phí ${r.sum.toFixed(1)} lệch quá 20% so mục tiêu ${tgt.toFixed(1)}`);
  }
}
for (const it of items) { if (!it.id.startsWith('CGO-')) continue; const rest = (it.ghi ?? '').replace(/^Cỡ \S+(, | )?/, ''); const base = LONG.includes(it.id) ? 'Một lồng là một đơn vị bán, không chia thùng' : NGUYEN.includes(it.id) ? 'Một cái là một đơn vị bán, không chia thùng' : '1 kiện = 2,5 thùng'; it.ghi = rest ? `${base}${rest.startsWith('(') ? ' ' : '. '}${rest}` : base; }
const nguonRec = new Map(), sinkRec = new Map(), nguonNode = new Map();
const add = (m, k, v) => m.set(k, [...(m.get(k) ?? []), v]);
for (const r of rec) { if (r.ra?.[0] && !r.ra.tol && !r.ra.nc) add(nguonRec, r.ra[0], r.id); for (const v of r.vao) for (const id of idsOf(v)) add(sinkRec, id, r.id); }
for (const n of nodes) { for (const row of n[7]) { if (!byId.has(row[0])) err(`${n[0]}: ${row[0]} không có trong ITEM LIST`); add(nguonNode, row[0], n[0]); } if (n[3].startsWith('TOL') && !tools.some((t) => t[0] === n[3])) err(`${n[0]}: dụng cụ ${n[3]} không có`); }
for (const i of items) {
  i.nguonAuto = [...(nguonNode.get(i.id) ?? []), ...(nguonRec.get(i.id) ?? []), ...(i.nguon ? [i.nguon] : [])].join(', ');
  i.sinkAuto = [...(sinkRec.get(i.id) ?? []), ...(i.sink ? [i.sink] : [])].join(', ');
  if (!i.nguonAuto) err(`${i.id}: không có nguồn nhận`);
  if (!i.sinkAuto) err(`${i.id}: không có nguồn tiêu`);
}
{ const che = rec.filter((r) => r.loai === 'CGOF' && r.nhan === MVP && r.vao.some((v) => idsOf(v).some((x) => x.startsWith('COM-')))); if (che.length !== 1) err(`Chương 1 phải có đúng 1 loại kiện chế (log 67), thực tế ${che.length}: ${che.map((r) => r.ra[0]).join(', ')}`); }
const OXY0 = 330, HOI = 40, TOIDA = 2; // bình bậc 0, một Bình Oxy nhỏ, số bình tối đa mỗi chuyến (K26)
if (HOI * TOIDA > 0.25 * OXY0) err(`K26: ${TOIDA} bình hồi ${HOI * TOIDA} Oxy vượt 25% bình bậc 0 (${0.25 * OXY0})`);
// đủ bậc nâng cấp cho 5 trục bộ đồ của gd-character (bậc 0 là khởi điểm)
{ const DEN = { [TH]: [1.0, 1.5], [IG]: [2.5, 5.0], [HI]: [7, 20], [DB]: [12, Infinity] }; for (const i of items) { if (!/^(RES|SMP)-/.test(i.id) || typeof i.gtd !== 'number' || typeof i.khoi !== 'number' || !i.khoi) continue; const d = i.gtd / i.khoi, [lo, hi] = DEN[i.hiem]; if (d < lo - 0.01 || d > hi + 0.01) err(`${i.id}: mật độ ${d.toFixed(2)} GTĐ mỗi Khối ngoài khoảng của bậc ${i.hiem} (${lo} đến ${hi})`); } }
for (const [ax, n] of Object.entries({ OXY: 4, BAG: 4, THR: 3, ENV: 3, RACK: 2 })) for (let k = 1; k <= n; k++) if (!rec.some((r) => r.id === `UPG-${ax}-${k}`)) err(`thiếu UPG-${ax}-${k}`);
for (const dai of [G, M, X]) { const c = items.filter((i) => i.id.startsWith('RES-') && i.dai === dai).length; if (c < 2) err(`Dải ${dai} chỉ có ${c} tài nguyên riêng`); }
const sp = species.filter((s) => s.bat && s.ha).map((s) => { const e = eHa(s), live = byId.get(s.bat === 'LIV' ? s.livId : s.bpsId).gtd, cost = useCost(s.so); return { ...s, e, live, cost, ratio: (live - cost) / e }; });
for (const s of sp) {
  const [lo, hi] = s.bat === 'BPS' ? [0.4, 0.5] : [1.5, 2.0];
  if (s.ratio < lo - 0.01 || s.ratio > hi + 0.01) err(`${s.ma}: tỉ lệ ròng mẫu bắt (đã trừ vật tiêu hao) trên hạ ${s.ratio.toFixed(2)} ngoài ${lo} đến ${hi}`);
  if (s.bat === 'LIV' && s.size === 'S' && s.live / s.e > 2.0 + 0.01) err(`${s.ma}: bắt tay sau choáng (không tốn vật tiêu hao) vượt trần 2,0: ${(s.live / s.e).toFixed(2)}`);
  if (s.bat === 'LIV' && s.ratio < 1.25) err(`${s.ma}: mẫu 1 sao thấp hơn mẫu hạ 2 sao (ràng buộc K9 của gd-combat)`);
}
for (const s of species.filter((x) => x.nuoi)) { // sản phẩm nuôi phải lời hơn thức ăn
  const fed = byId.get(s.dai === G ? 'FED-101' : s.dai === M ? 'FED-201' : 'FED-301').gtd;
  if (byId.get(s.bioId).gtd < 1.5 * fed) err(`${s.ma}: sản phẩm nuôi không lời hơn 1,5 lần thức ăn`);
}
const nodeStat = nodes.map((n) => { const w = n[7].reduce((s, r) => s + r[1], 0); const eg = n[6] * n[7].reduce((s, r) => s + (r[1] / w) * r[2] * gtdOf(r[0]), 0); const ek = n[6] * n[7].reduce((s, r) => s + (r[1] / w) * r[2] * (typeof byId.get(r[0]).khoi === 'number' ? byId.get(r[0]).khoi : 0), 0); return { n, eg, ek }; });

// ---------- Bảng markdown ----------
const f = (x, d = 1) => (typeof x === 'number' ? (Number.isFinite(x) ? x.toFixed(d).replace('.', ',') : '-') : String(x ?? '-'));
const runs = (list) => { const g = {}; for (const id of list) { const [p, n] = id.split('-'); (g[p] ??= []).push(+n); } return Object.entries(g).map(([p, ns]) => { ns.sort((a, b) => a - b); const out = []; let s = ns[0], prev = s; for (const n of [...ns.slice(1), Infinity]) { if (n === prev + 1) { prev = n; continue; } out.push(s === prev ? `${s}` : `${s}..${prev}`); s = n; prev = n; } return `${p}-${out.join(', ')}`; }).join(' hoặc '); };
const idList = (v) => (Array.isArray(v[0]) ? `${v[1]} x một trong ${runs(v[0])}` : `${v[1]} x ${v[0]}`);
const tbl = (head, rows) => [`| ${head.join(' | ')} |`, `|${head.map(() => '---').join('|')}|`, ...rows.map((r) => `| ${r.join(' | ')} |`)].join('\n');
const parts = {};
parts.ITEM = tbl(['Item ID', 'Tên (VI / EN [TẠM])', 'Nhóm', 'Độ hiếm', 'Khối', 'GTĐ', 'Dải', 'Nguồn nhận', 'Nguồn tiêu', 'Nhãn'],
  items.map((i) => [i.id, `${i.ten} / ${i.en}`, i.nhom, i.hiem, f(i.khoi, 0), f(i.gtd), i.dai, i.nguonAuto || '-', i.sinkAuto || '-', i.nhan]));
parts.RECIPE = tbl(['Recipe ID', 'Tên', 'Nơi chế', 'Đầu vào', 'Đầu ra', 'Thời gian (giây)', 'Mở bằng', 'Σ GTĐ vào', 'GTĐ ra', 'Hệ số', 'Nhãn'],
  rec.filter((r) => !r.ra?.nc).map((r) => [r.id, r.ten, r.noi, r.vao.map(idList).join(', ') + (r.giu ? `. Giữ nguyên, không tiêu: ${r.giu}` : ''), r.ra.tol ? 'Mở khóa dụng cụ cho nhóm' : `${r.ra[1]} x ${r.ra[0]}${thung(r.ra[0])}`, r.t === 'đêm' ? 'qua đêm' : r.t === 0 ? 'lúc Mở ca' : f(r.t, 0), r.mo, f(r.sum), f(r.out), r.mReal ? f(r.mReal, 2) : '-', r.nhan]));
parts.UPG = tbl(['Nâng cấp', 'Bậc', 'Lớp chi phí', 'Đầu vào (vật liệu)', 'Σ GTĐ vào', 'Mục tiêu 25 x 1,8^(lớp-2)', 'Mở bằng', 'Nhãn'],
  rec.filter((r) => r.ra?.nc).map((r) => [r.id, r.id.split('-')[2], r.ra.bac, r.vao.map(idList).join(', '), f(r.sum), f(r.tgt), r.mo, r.nhan]));
parts.TOOL = tbl(['ID', 'Tên (VI / EN [TẠM])', 'Vai trò', 'Cách có', 'Công dụng và gating', 'Nhãn'], tools.map((t) => [t[0], `${t[1]} / ${t[2]}`, t[3], t[4], t[6], t[5]]));
parts.NODE = tbl(['SLV ID', 'Tên', 'Dải', 'Dụng cụ', 'Độ cứng hoặc cấp khóa', 'Giây (bậc 1)', 'Số lần quay', 'Bảng rơi (ID, trọng số, số lượng mỗi lần)', 'GTĐ kỳ vọng', 'Khối kỳ vọng', 'GTĐ mỗi giây', 'GTĐ mỗi Khối', 'Nhãn'],
  nodeStat.map(({ n, eg, ek }) => [n[0], n[1], n[2], n[3], n[4], f(n[5]), n[6], n[7].map((r) => `${r[0]} w${r[1]} x${r[2]}`).join(', '), f(eg), f(ek), f(eg / n[5], 2), ek ? f(eg / ek, 2) : '-', n[8]]));
parts.SPECIES = tbl(['Số', 'Mã gd-combat', 'Tên', 'Dải', 'Cỡ', 'Hạ được', 'Bắt', 'Nuôi', 'Nguyên liệu chung mỗi lần hạ', 'Xác suất đặc sản', 'E[GTĐ] khi hạ', 'Hệ số k', 'Vật tiêu hao mỗi lần bắt', 'GTĐ mẫu bắt', 'Tỉ lệ ròng trên hạ', 'Nhãn'],
  species.map((s) => { const x = sp.find((q) => q.so === s.so); return [s.so, s.ma, s.ten, s.dai, s.size, s.ha ? 'Có' : 'Không', s.bat === 'LIV' ? 'Sống (LIV)' : 'Sinh thiết (BPS)', s.nuoi ? 'Có' : 'Không', s.ha ? `${s.n} x ${s.nlsId}` : '-', s.ha ? f(s.p, 2) : '-', x ? f(x.e, 2) : '-', x ? f(s.k, 2) : '-', useText(s.so), f(byId.get(s.bat === 'LIV' ? s.livId : s.bpsId).gtd, 2), x ? f(x.ratio, 2) : 'cố định', (() => { const b = byId.get(s.bat === 'LIV' ? s.livId : s.bpsId).nhan; return b === s.nhan ? s.nhan : `${s.nhan} (hạ), ${b} (bắt)`; })()]; }));
parts.LONG = tbl(['Lồng', 'Loài', 'Mẫu sống', 'GTĐ lồng giao (bằng mẫu sống bên trong, nhân hệ số sao 1,0 / 1,25 / 1,5)', 'Tỉ lệ ròng trên E(hạ)', 'Nhãn'], sp.filter((x) => x.bat === 'LIV').map((x) => [x.dai === G ? 'CGO-121' : x.dai === M ? 'CGO-221' : 'CGO-321', `${x.ma} ${x.ten}`, x.livId, f(x.live, 2), f(x.ratio, 2), byId.get(x.livId).nhan]));
for (const r of repairs) for (const [id] of r[2]) for (const x of (Array.isArray(id) ? id : [id])) if (!byId.has(x)) err(`Sửa khoang "${r[0]}": ${x} không có trong ITEM LIST`);
const gt = (id) => (Array.isArray(id) ? Math.min(...id.map(gt)) : (typeof gtdOf(id) === 'number' ? gtdOf(id) : 0));
parts.REPAIR = tbl(['Khoang hoặc mốc', 'Ghi chú', 'Vật liệu đề xuất', 'Σ GTĐ', 'Nhãn'],
  repairs.map((r) => [r[0], r[1], r[2].map(([id, n]) => `${n} x ${Array.isArray(id) ? id.join(' hoặc ') : id}`).join(', '), f(r[2].reduce((s, [id, n]) => s + gt(id) * n, 0)), r[3]]));
// Quy mọi thứ về GTĐ tài nguyên thô để ước số chuyến cần cho nhu cầu MVP (kiểm nhất quán, không phải sim cân bằng).
const rawEq = (id) => { if (Array.isArray(id)) return Math.min(...id.map(rawEq)); if (/^(RES|SMP)/.test(id)) return byId.get(id).gtd; const r = rec.find((x) => x.ra?.[0] === id); if (!r || /^(ENG|STY|BPR)/.test(id)) return 0; return r.vao.reduce((s, v) => s + rawEq(v[0]) * v[1], 0) / r.ra[1]; };
const mvpRep = repairs.filter((r) => r[3] === MVP), mvpUpg = rec.filter((r) => r.ra?.nc && r.nhan === MVP);
const mvpRaw = [...mvpRep.flatMap((r) => r[2]), ...mvpUpg.flatMap((r) => r.vao)].reduce((s, [id, n]) => s + rawEq(id) * n, 0);
parts.CGOTHUNG = tbl(["Kiện", "GTĐ kiện", "Thùng mỗi kiện", "GTĐ mỗi thùng"], items.filter((i) => i.id.startsWith("CGO-")).map((i) => LONG.includes(i.id) ? [i.id, "theo loài", "1 đơn vị, không chia", "bằng GTĐ lồng"] : NGUYEN.includes(i.id) ? [i.id, f(i.gtd), "1 đơn vị, không chia", f(i.gtd)] : [i.id, f(i.gtd), f(THUNG, 1), f(+f(i.gtd).replace(",", ".") / THUNG, 2)]));
const stamp = new Date().toISOString().slice(0, 16).replace('T', ' ');
parts.CHECK = `- Sinh bởi \`projects/game-moi/sim/vat-pham.mjs\` lúc ${stamp} UTC. Số vật phẩm: ${items.length}. Công thức: ${rec.length}. Điểm khai thác: ${nodes.length}. Trang bị: ${tools.length}. Kiện nhãn MVP: ${items.filter((i) => i.id.startsWith('CGO-') && i.nhan === MVP).length}. Lỗi kiểm: ${errs.length}.
- Vật liệu nhãn MVP (${mvpRep.length} việc sửa khoang và ${mvpUpg.length} nâng cấp) quy ra tài nguyên thô: ${f(mvpRaw)} GTĐ, tương đương ${f(mvpRaw / (80 * 1.1))} chuyến đầy túi (túi bậc 0 là 80 Khối, mật độ 1,1 GTĐ mỗi Khối), chưa tính nguyên liệu đóng kiện bán lấy Tally. Đây là kiểm nhất quán, không phải sim cân bằng.`;

const here = dirname(fileURLToPath(import.meta.url));
if (process.argv.includes('--ghi')) {
  const path = join(here, '..', 'gdd', 'he-thong', 'vat-pham.md');
  let md = readFileSync(path, 'utf8');
  for (const [k, v] of Object.entries(parts)) {
    const re = new RegExp(`(<!--B:${k}-->)[\\s\\S]*?(<!--/B:${k}-->)`);
    if (!re.test(md)) { console.log(`thiếu cặp dấu B:${k}`); continue; }
    md = md.replace(re, (_, a, b) => `${a}\n${v}\n${b}`);
  }
  writeFileSync(path, md);
  console.log('đã ghi bảng vào', path);
}

// ---------- Sinh TSV cho Sheet (GD-032): Salvage, ITEM LIST, Recipe. Không ghi giá, không ghi GTĐ. ----------
const SPAWN = { // vị trí theo map.md (mục 2.10, 3.3): loại mảnh và điểm nhánh
  'SLV-101': 'Dải Gần, khe SP-R các mảnh Mở, Hành lang, Ổ. Tối đa 25% khe SP-R của một mảnh, hai khe cách nhau ít nhất 2 u',
  'SLV-102': 'Dải Gần, mảnh Mở và Ổ',
  'SLV-103': 'Dải Gần, mảnh Mở',
  'SLV-104': 'Dải Gần, mảnh Hành lang (cạnh Cáp chập) và Xác lớn. Khe SP-R hạng hiếm của dải Gần',
  'SLV-105': 'Dải Gần, chỉ mảnh Xác lớn',
  'SLV-111': 'Xác Seed Station: Cinder 3 hòm (C2, C3, C7), Wick 3, Flint 3 (map.md mục 2.10)',
  'SLV-112': 'Xác Seed Station: Cinder 1 (C6, sau boss), Wick 1. Cradle Interior 2 mỗi khu (map.md mục 2.10)',
  'SLV-201': 'Dải Giữa, mảnh Mở và Ổ (dòng đá vụn chạy ngang qua)',
  'SLV-202': 'Dải Giữa, mảnh Mở (băng nứt khi khoan mạnh)',
  'SLV-203': 'Dải Giữa, mảnh Xác lớn. Khe SP-R hạng hiếm của dải Giữa',
  'SLV-204': 'Dải Giữa, mảnh Hành lang và Xác lớn',
  'SLV-301': 'Dải Xa, mảnh Mở và Hành lang',
  'SLV-302': 'Dải Xa, mảnh Mở và Ổ (trong mây khí, bùng tinh vân)',
  'SLV-303': 'Dải Xa, mảnh Xác lớn cạnh trạm thu (WD-02 canh, hàng rào cắt). Khe SP-R hạng hiếm của dải Xa',
};
if (process.argv.includes('--tsv')) {
  const cell = (x) => { const t = String(x ?? ''); return /[\t\n"]/.test(t) ? '"' + t.replaceAll('"', '""') + '"' : t; };
  const row = (a) => a.map(cell).join('\t');
  const nm = (id) => byId.get(id)?.ten ?? id;
  // Từ đợt 8 TSV của Sheet là bản đọc sửa tay (DECISIONS 2026-11-20). --tsv chỉ ghi ra sim/out-tsv để tra, không ghi đè gdd/sheet.
  const dirOut = join(here, 'out-tsv'); mkdirSync(dirOut, { recursive: true });
  const REF = 'projects/game-moi/gdd/he-thong/vat-pham.md';
  const H = {
    Salvage: ['Issue ID', 'Task', 'Sub Task', 'Short Description', 'Ref'],
    'ITEM LIST': ['Item ID', 'Item name', 'Type', 'Nguồn nhận', 'Nguồn tiêu', 'Note'],
    Recipe: ['Issue ID', 'Task', 'Sub Task', 'Short Description', 'Ref'],
  };
  const T = { Salvage: [], 'ITEM LIST': [], Recipe: [] };
  for (const i of items) T['ITEM LIST'].push([i.id, i.ten, i.nhom, i.nguonAuto, i.sinkAuto, `${i.hiem}, Khối ${i.khoi}, ${i.dai}, ${i.nhan}${i.ghi ? '. ' + i.ghi : ''}`]);
  for (const t of tools) T['ITEM LIST'].push([t[0], t[1], `Dụng cụ (${t[3]})`, t[4], 'Không tiêu, chọn mang theo ở trạm', `${t[6]}. ${t[5]}`]);
  const tolName = (x) => (x === 'Tay' ? 'Nhặt tay, không cần dụng cụ' : `${x} ${nm(x) === x ? '' : nm(x)}`.trim());
  for (const n of nodes) {
    const [id, ten, dai, tool, hard, giay, rolls, table, nhan] = n;
    const out = table.map((r) => `- ${r[0]} ${nm(r[0])}: trọng số ${r[1]}, số lượng ${r[2]}`).join('\n');
    const rows = [
      ['Type', `Điểm khai thác, ${dai}. Nhãn: ${nhan}`],
      ['Characteristic', `Dụng cụ: ${tolName(tool)}\nĐộ cứng hoặc cấp khóa: ${hard}. Bậc dụng cụ thấp hơn thì chậm gấp 4`],
      ['Attribute', `Thời gian khai thác ở bậc 1 (giây): ${f(giay)}\nSố lần quay bảng rơi: ${rolls}`],
      ['Resource Output', out],
      ['Spawn Point', SPAWN[id]],
    ];
    rows.forEach((rw, k) => T.Salvage.push([k === 0 ? id : '', k === 0 ? ten : '', rw[0], rw[1], k === 0 ? REF + ' mục 3' : '']));
  }
  for (const i of items.filter((x) => x.id.startsWith('RES-'))) {
    const srcs = (nguonNode.get(i.id) ?? []).concat(i.nguon ? [i.nguon] : []);
    const rows = [
      ['Type', `Tài nguyên thô, ${i.nhom}, dải ${i.dai}. Nhãn: ${i.nhan}`],
      ['Characteristic', `Độ hiếm: ${i.hiem}. ${i.en}`],
      ['Attribute', `Khối: ${i.khoi}`],
      ['Resource Output', i.sinkAuto],
      ['Spawn Point', srcs.join(', ')],
    ];
    rows.forEach((rw, k) => T.Salvage.push([k === 0 ? i.id : '', k === 0 ? i.ten : '', rw[0], rw[1], k === 0 ? REF + ' mục 3' : '']));
  }
  const ing = (v) => (Array.isArray(v[0]) ? `${v[1]} x một trong ${runs(v[0])}` : `${v[1]} x ${v[0]} ${nm(v[0])}`);
  for (const r of rec) {
    const outTxt = r.ra.tol ? 'Mở khóa dụng cụ cho cả nhóm' : r.ra.nc ? `Nâng cấp ${r.ra.nc} cho cả nhóm. Tally ở tab Upgrade` : `${r.ra[1]} x ${r.ra[0]} ${nm(r.ra[0])}${thung(r.ra[0])}`;
    const rows = [
      ['Type', r.noi],
      ['Ingredients', r.vao.map(ing).join('\n') + (r.giu ? `\nGiữ nguyên, không tiêu: ${r.giu}` : '')],
      ['Output', `${outTxt}\nThời gian: ${r.t === 'đêm' ? 'qua đêm' : r.t === 0 ? 'đóng lúc Mở ca, không tốn thời gian ca' : f(r.t, 0) + ' giây'}`],
      ['Unlock', `${r.mo}. Nhãn: ${r.nhan}`],
    ];
    rows.forEach((rw, k) => T.Recipe.push([k === 0 ? r.id : '', k === 0 ? r.ten : '', rw[0], rw[1], k === 0 ? REF + ' mục 3' : '']));
  }
  for (const [tab, rows] of Object.entries(T)) {
    writeFileSync(join(dirOut, tab + '.tsv'), [row(H[tab]), ...rows.map(row)].join('\n') + '\n');
    writeFileSync(join(dirOut, tab + '.json'), JSON.stringify(rows));
    console.log(tab, rows.length, 'dòng');
  }
}
console.log(parts.CHECK);
if (errs.length) { console.log(errs.join('\n')); process.exit(1); }
