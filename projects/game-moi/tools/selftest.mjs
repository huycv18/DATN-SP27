#!/usr/bin/env node
// Selftest mọi tool trong tools/. Chạy: node projects/game-moi/tools/selftest.mjs. Thoát 1 khi một phép kiểm sai.
import { mkdtempSync, writeFileSync, rmSync, readFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { kiem } from './validate-gdd.mjs';
import { trichNhanVat, trichDriftlife, dung as dungWiki, choArtifact } from './xuat-wiki.mjs';

let ok = 0;
const t = (ten, fn) => { fn(); ok++; console.log(`ĐẠT  ${ten}`); };

// validate-gdd: bộ file nhỏ, một bản sạch và một bản cài lỗi cố ý.
const SACH = {
  'vat-pham.md': '| Item ID | Tên | Nhãn |\n|---|---|---|\n| RES-101 | Mảnh vỏ / Hull Shard | MVP |\n| STY-101 | Nhật ký / Station Log | Sau MVP |\n',
  'combat-driftlife.md': '| ID | Tên | Nhãn |\n|---|---|---|\n| DL-G01 | Driftmoth | MVP |\n| DL-G02 | Skitter Ray | MVP |\n| BS-2 | Tempest Gulper | Sau MVP |\n| DL-M05 | Gulper | Sau MVP |\n',
  'map.md': '| Mã | Tên | Nhãn |\n|---|---|---|\n| H01 | Mảnh trôi | MVP |\n| N1 | Station Cinder, Ember Anchorage | MVP |\n',
  'cot-truyen.md': '# Cốt truyện\n### Toàn bộ tên riêng\n| Nhóm | Tên |\n|---|---|\n| Trạm con | Station Ember, Station Cinder |\n| Nơi khác (tên vùng do gd-world giữ) | Ember Anchorage |\n| Chủng tộc | The Veyl, The Wardens |\n| Người vớt | Ingrid Halvorsen |\n## 10. Câu hỏi mở\nĐổi tên thành The Scattering?\n',
  'nguoi-choi.md': 'Dùng RES-101, DL-G01 Driftmoth, Tempest Gulper (BS-2), Ingrid Halvorsen ở Station Cinder, The Veyl. Đã bỏ RES-999. [CHỜ gd-economy] giá.\n## Lịch sử thay đổi\n- Đổi Hollower thành The Wardens.\n',
};
const LOI = {
  ...SACH,
  'vat-pham.md': SACH['vat-pham.md'] + '| RES-102 | Dây cáp / Frayed Cable | |\n',
  'nguoi-choi.md': 'Dùng RES-999, DL-G01 Skitter Ray, Ingrid Smith ở Station Cindr, The Hollow. [CHỜ gd-items] số. Hollower. Bếp trưởng.\n',
};
const dung = (files) => {
  const d = mkdtempSync(join(tmpdir(), 'vgdd-'));
  for (const [f, s] of Object.entries(files)) writeFileSync(join(d, f), s);
  try { return kiem(d); } finally { rmSync(d, { recursive: true }); }
};
t('validate-gdd: bộ sạch 0 lỗi', () => assert.deepEqual(dung(SACH).loi, []));
t('validate-gdd: bộ cài lỗi bắt đúng từng loại', () => {
  const kq = dung(LOI).loi.map((e) => `${e.file}|${e.kiem}`).sort();
  assert.deepEqual(kq, [
    'nguoi-choi.md|Còn dấu CHỜ',
    'nguoi-choi.md|ID không có trong file chủ',
    'nguoi-choi.md|Tên cũ đã bỏ', 'nguoi-choi.md|Tên cũ đã bỏ',
    'nguoi-choi.md|Tên loài lệch',
    'nguoi-choi.md|Tên riêng lạ', 'nguoi-choi.md|Tên riêng lạ',
    'nguoi-choi.md|Tên riêng lệch',
    'vat-pham.md|Thiếu nhãn MVP',
  ]);
});
t('validate-gdd: kiện CGO phải thuộc đúng một nhóm HC', () => {
  const kq = dung({
    'vat-pham.md': '| ID | Tên | Nhãn |\n|---|---|---|\n| CGO-101 | A | MVP |\n| CGO-102 | B | MVP |\n| CGO-103 | C | MVP |\n',
    'tram-va-cang.md': '| ID nhóm | Nhóm | ID kiện | Mở |\n|---|---|---|---|\n| HC01 | X | CGO-101, CGO-102 | Chương 1, MVP |\n| HC02 | Y | CGO-102 | Chương 1, MVP |\n',
  }).loi.filter((e) => e.kiem === 'Kiện không thuộc đúng một nhóm').map((e) => e.chiTiet.slice(0, 7)).sort();
  assert.deepEqual(kq, ['CGO-102', 'CGO-103']);
});
t('validate-gdd: bắt số túi cũ và câu trái C10, bỏ qua câu đúng luật', () => {
  const them = ['Túi 20, 30, 42, 56, 72 Khối.', 'Rời phiên giữa chuyến thì về an toàn giữ nguyên túi.', 'Tự thoát tới cửa khí thì Về an toàn, giữ nguyên túi.'].join('\n');
  const kq = dung({ ...SACH, 'map.md': SACH['map.md'] + them + '\n' }).loi.map((e) => e.kiem).sort();
  assert.deepEqual(kq, ['Số túi cũ (trước log 54)', 'Trái C10: rời hoặc rớt giữa chuyến không giữ nguyên túi']);
});
t('validate-gdd: vật truyện cần ID STY, khe có ở map nhánh, mốc hiện có định nghĩa', () => {
  const ct = SACH['cot-truyen.md'] + '## 2.5 Năm chương\n| Mốc | Nội dung |\n|---|---|\n| C1.3 | Vào Cinder |\n\n| Mã | Là gì | ID vật | Nơi | Hiện từ mốc | Nói gì |\n|---|---|---|---|---|---|\n| MM1.1 | Nhật ký | STY-101 | N1, khe M4 | C1.3 | x |\n| MM1.2 | Bản tin | - | N1, khe M9 | C1.9 | y |\n';
  const mp = SACH['map.md'] + '\n| Mã | Loại | Tên | Nhãn |\n|---|---|---|---|\n| N1 | Map nhánh | Station Cinder (xác Seed Station) | MVP |\n\n| Station Cinder | STY-101 (M1 đến M4) |\n';
  const kq = dung({ ...SACH, 'cot-truyen.md': ct, 'map.md': mp }).loi.filter((e) => e.file === 'cot-truyen.md' && e.n > 0).map((e) => e.kiem).sort();
  assert.deepEqual(kq, ['Khe vật truyện chưa có trên map', 'Mốc hiện vật truyện không có', 'Vật truyện chưa có ID']);
});
t('validate-gdd: bắt ID trùng ở bảng định nghĩa của file chủ và ID lạ của họ N, MM, T-', () => {
  const vp = SACH['vat-pham.md'] + ['RCP-111', 'RCP-111', 'UPG-OXY-1', 'UPG-OXY-1', 'SLV-101', 'SLV-101'].map((id, i) => `| ${id} | x${i} | MVP |`).join('\n') + '\n';
  const tc = '| ID | Tên | Nhãn |\n|---|---|---|\n| KH05 | Kho | MVP |\n| KH05 | Kho phụ | MVP |\n';
  const kq = dung({ ...SACH, 'vat-pham.md': vp, 'tram-va-cang.md': tc, 'map.md': SACH['map.md'] + 'Đi N9, đọc MM9.9, nâng T-XYZ.\n' }).loi.map((e) => `${e.kiem}|${e.chiTiet.split(' ')[0]}`).sort();
  assert.deepEqual(kq, ['ID không có trong file chủ|MM9.9', 'ID không có trong file chủ|N9', 'ID không có trong file chủ|T-XYZ',
    'ID trùng trong bảng|KH05', 'ID trùng trong bảng|RCP-111', 'ID trùng trong bảng|SLV-101', 'ID trùng trong bảng|UPG-OXY-1']);
});
t('validate-gdd: bắt tên The Sundering và chữ chờ GDM, bỏ qua mục lịch sử', () => {
  const them = 'Sau sự kiện Sundering. Luật này chờ GDM duyệt.\n## Lịch sử thay đổi\n- Đổi The Sundering thành The Scattering, hết chờ GDM.\n';
  const kq = dung({ ...SACH, 'map.md': SACH['map.md'] + them }).loi.map((e) => e.kiem).sort();
  assert.deepEqual(kq, ['Còn chờ GDM (thay bằng quyết định ở log-gdm-tu-quyet.md, ghi số dòng)', 'Tên cũ đã bỏ']);
});
t('validate-gdd: lỗi gán đúng vai giữ file', () => assert.ok(dung(LOI).loi.every((e) => e.vai === (e.file === 'vat-pham.md' ? 'gd-items' : 'gd-character'))));

// sim-chuyen: ca tính tay và tất định.
const SC = await import('./sim-chuyen.mjs');
t('sim-chuyen: ca tính tay một cột một node (0,8 giây, 1,1 GTĐ), chương 1', () => {
  // Vào cột: 0,5 x 40 x 1,3 / (0,8 x 6) = 5,417 s. Node: d = 0,5 x căn(40 x 24 x 3 / 1) = 26,83 u, bay 26,83 / 4,8 = 5,590 s, thao tác 0,8 s.
  // Về cửa khí từ x = 20 u: 20 / 4,8 = 4,167 s. Tổng 15,973 s, GTĐ 1,1, Oxy cuối 300 - 15,973.
  const node = { id: 'TEST', gtd: 1.1, khoi: 1, giay: 0.8, cung: 0 }; // số cố định, không đọc GDD đang sửa
  const map = [{ c: 0, nodes: [[node]], drift: [0], haz: 0, beacon: false }];
  const r = SC.chayNguoi(SC.CFG, '1', 'trung bình', 1, map, 0, () => 0.99);
  assert.ok(Math.abs(r.t - 15.973) < 0.01, `t = ${r.t}`);
  assert.equal(r.gtd, 1.1);
  assert.equal(r.ket, 'cửa khí');
});
t('sim-chuyen: cùng seed cùng kết quả, khác seed khác kết quả', () => {
  const a = SC.moPhong(SC.CFG, '3', 'tệ', 2, 0.47, 7, 300), b = SC.moPhong(SC.CFG, '3', 'tệ', 2, 0.47, 7, 300);
  assert.deepEqual(a, b);
  assert.notDeepEqual(a, SC.moPhong(SC.CFG, '3', 'tệ', 2, 0.47, 8, 300));
});
t('sim-chuyen: ngạt không ai cứu thì bị kéo về, chỉ giữ một món', () => {
  const map = [{ c: 0, nodes: [[SC.NODE['SLV-104'], SC.NODE['SLV-104']]], drift: [0], haz: 40, beacon: false }];
  const r = SC.chayNguoi(SC.CFG, '1', 'tệ', 1, map, 0, () => 0.01); // mọi lần thử đều trúng
  assert.equal(r.ket, 'kéo về');
});

t('sim-chuyen: K26 Oxy hồi từ Bình Oxy nhỏ một chuyến không quá 25% bình, mang 10 bình vẫn chặn', () => {
  const map = [{ c: 0, nodes: [[SC.NODE['SLV-104'], SC.NODE['SLV-104']]], drift: [0], haz: 40, beacon: false }];
  const cfg = { ...SC.CFG, binhOxy: { ...SC.CFG.binhOxy, soMang: 10 } };
  const r = SC.chayNguoi(cfg, '1', 'tệ', 1, map, 0, () => 0.01);
  assert.ok(r.daHoi > 0 && r.daHoi <= 0.25 * SC.CFG.chuong['1'].binh + 1e-9, `daHoi ${r.daHoi}`);
});

// sim-ca-cang (khung Dave, GD-054): ca tính tay một tàu một thùng, trễ phản xạ, chia việc co-op, hết hàng, tất định.
const CC = await import('./sim-ca-cang.mjs');
const { rngTu } = await import('./lib.mjs');
// Chỉ có tàu Loose Bolt, đơn đặt trước trỏ vào món không có trong danh mục, danh mục chỉ một loại.
const ccx = (so, dm) => ({ ...CC.CFG, cuaSoDen: 0, soTauGoc: so, tau: { ...CC.CFG.tau, voi: { ...CC.CFG.tau.voi, w: 0 } }, datTruoc: { ...CC.CFG.datTruoc, item: 'bang' }, danhMuc: { x: dm }, bom: { ...CC.CFG.bom, batLucCap: 0 } });
const ca = (cfg, N, tre, soTau) => CC.chayCa(cfg, { N, tre, soTau, danhMuc: 'x' }, rngTu(1));
t('sim-ca-cang: giá thùng đọc từ khối giaThung (đồ Trái Đất 76, phế liệu 42, lồng theo loài trung bình 65)', () => {
  assert.equal(CC.CFG.hang.td.gia, 76); assert.equal(CC.CFG.hang.phe.gia, 42); assert.equal(CC.CFG.hang.long.gia, 65); assert.ok(CC.CFG.hang.mo.gia > 0 && CC.CFG.hang.dacsan.gia > 0);
});
t('sim-ca-cang: ca tính tay một tàu Loose Bolt gọi 1 thùng đồ Trái Đất, một người, trễ 0: giao khoảng 9,2 giây, rời, ca khoảng 10,5 giây', () => {
  // Tàu tới 2,0, vào 1, cập 1, thùng hiện sau 3 (7,1), đi quầy 204 px / 280 = 0,73, đi cửa neo 374 / 280 = 1,34, rời 1,3.
  const r = ca(ccx(1, { td: 1 }), 1, 0, 1);
  assert.ok(r.giay >= 10.0 && r.giay <= 11.2, `giây ${r.giay}`);
  assert.equal(r.served, 1); assert.equal(r.left, 0);
  assert.ok(r.tally >= 104 && r.tally <= 121, `tally ${r.tally}`); // 76 cộng tip 76 x 0,3 x phần kiên nhẫn x 2 (mê đồ Trái Đất)
});
t('sim-ca-cang: trễ phản xạ 2 giây thêm 4 giây cho một tàu (hai lần đi: nhặt rồi giao)', () => {
  const d = ca(ccx(1, { td: 1 }), 1, 2, 1).giay - ca(ccx(1, { td: 1 }), 1, 0, 1).giay;
  assert.ok(d >= 3.8 && d <= 4.4, `chênh ${d}`);
});
t('sim-ca-cang: bơm khí bật ngay lúc cập (luật 28) cộng khoảng 10 Tally vào tip so với không bơm', () => {
  const base = ca(ccx(1, { td: 1 }), 1, 0, 1), cfg = ccx(1, { td: 1 }); cfg.bom = { ...cfg.bom, batLucCap: 1 };
  const b = ca(cfg, 1, 0, 1);
  assert.ok(b.tally - base.tally >= 7 && b.tally - base.tally <= 11, "chênh " + (b.tally - base.tally));
});
t('sim-ca-cang: Tàu vội chỉ gọi băng và khoáng, danh mục không có thì không tới (luật 24)', () => {
  const cfg = ccx(3, { phe: 5 }); cfg.tau = { ...cfg.tau, voi: { ...cfg.tau.voi, w: 1 }, bolt: { ...cfg.tau.bolt, w: 0 } };
  const r = ca(cfg, 1, 1, 3);
  assert.equal(r.served, 0); assert.equal(r.skipped, 3);
});
t('sim-ca-cang: ca đầu 2 tàu Loose Bolt, tàu 2 chỉ tới sau lần giao đầu (luật 67)', () => {
  const cfg = ccx(2, { phe: 5 }), r = CC.chayCa(cfg, { N: 1, tre: 1, soTau: 2, danhMuc: 'x', caDau: true }, rngTu(1));
  assert.equal(r.served, 2);
  assert.ok(r.giay > 15);
});
t('sim-ca-cang: hai người chia việc cho hai tàu đến cùng lúc, nhanh hơn một người và không ai nhặt trùng thùng', () => {
  const cfg = ccx(2, { td: 4 });
  const mot = ca(cfg, 1, 1, 2), hai = ca(cfg, 2, 1, 2);
  assert.equal(hai.served, 2); assert.ok(hai.giay < mot.giay - 1, `1 người ${mot.giay}, 2 người ${hai.giay}`);
});
t('sim-ca-cang: danh mục chỉ 3 thùng cho 6 tàu thì 3 tàu không tới, ca kết thúc sớm, Tally không âm', () => {
  const r = ca(ccx(6, { td: 3 }), 1, 1, 6);
  assert.equal(r.served, 3); assert.equal(r.skipped, 3); assert.ok(r.giay < CC.CFG.caToiDa);
});
t('sim-ca-cang: hết kiên nhẫn thì tàu rời, thùng quay về danh mục (tàu 30 giây, người chơi trễ 40 giây)', () => {
  const cfg = ccx(1, { td: 2 }); cfg.tau = { ...cfg.tau, bolt: { ...cfg.tau.bolt, kn: 5 } };
  const r = ca(cfg, 1, 40, 1);
  assert.equal(r.served, 0); assert.equal(r.left, 1); assert.equal(r.thungDu, 2);
});
t('sim-ca-cang: cùng seed cùng kết quả', () => {
  const o = { N: 3, tre: 2, soTau: 40, danhMuc: Object.keys(CC.CFG.danhMuc)[0], cua: 4 };
  assert.deepEqual(CC.moPhong(CC.CFG, o, 5, 5), CC.moPhong(CC.CFG, o, 5, 5));
});

// sim-combat: ca tính tay, đọc đúng bảng 3.4.
const CB = await import('./sim-combat.mjs');
const luonTrung = Object.assign(() => 0, { int: () => 0, chon: (a) => a[0] }); // mọi phát trúng, mọi đòn né được
t('sim-combat: ca tính tay hạ con 80 Sinh lực, một người, Lao từ 10 mỗi 0,8 giây: 8 phát, phát cuối lúc 5,6 giây', () => {
  const s = { id: 'T', ten: 'T', co: 'M', kieu: '', bat: 'Có', sinhLuc: 80, nguongChoang: 50, nguongMe: 70, don: [{ dmg: 8, bao: 0.5, cd: 3 }] };
  const r = CB.tran(CB.CFG, s, 1, 'trung bình', 'hạ', luonTrung);
  assert.ok(Math.abs(r.t - 5.6) < 0.06, `t = ${r.t}`);
  assert.equal(r.oxy, 0);
});
t('sim-combat: co-op nhân Sinh lực 1,22 ở 2 người: 80 x 1,22 = 97,6 cần 10 phát, 2 người bắn cùng nhịp xong ở phát thứ 5 (3,2 giây)', () => {
  const s = { id: 'T', ten: 'T', co: 'M', kieu: '', bat: 'Có', sinhLuc: 80, nguongChoang: 50, nguongMe: 70, don: [] };
  assert.ok(Math.abs(CB.tran(CB.CFG, s, 2, 'trung bình', 'hạ', luonTrung).t - 3.2) < 0.06);
});
t('sim-combat: hệ số Sinh lực bằng N / k(N) với a theo dải đọc từ map.md (a = 0,27 thì N = 4 ra 4 / 1,81)', () => {
  const c = { ...CB.CFG, coop: { ...CB.CFG.coop, kTheoDai: { 'Vành đai ngoài': 0.27 } } };
  assert.ok(Math.abs(CB.heSoN(c, { dai: 'Vành đai ngoài' }, 4) - 4 / 1.81) < 1e-9);
  assert.equal(CB.heSoN(c, { dai: 'Vành đai ngoài' }, 1), 1);
});
t('sim-combat: đọc được loài MVP từ combat-driftlife.md, Arc Eel miễn choáng thì bắt bằng mê', () => {
  const L = CB.docLoai();
  const eel = L.find((s) => s.id === 'DL-G05');
  assert.ok(L.length >= 5 && eel && eel.nguongChoang === Infinity);
  assert.equal(CB.cachBat(eel).kieu, 'mê');
});
t('sim-combat: boss BS-1 kết được cả hạ và xua đi khi mọi phát trúng, mọi đòn né; xua đi nhanh hơn hạ, không mất Oxy do đòn', () => {
  const ha = CB.bossBS1(CB.CFG, 1, 'trung bình', 'hạ', luonTrung), xua = CB.bossBS1(CB.CFG, 1, 'trung bình', 'xua', luonTrung);
  assert.ok(ha.xong && xua.xong && xua.t < ha.t && ha.dmg === 0 && xua.dmg === 0, JSON.stringify({ ha, xua }));
});
t('sim-combat: bắt tay chỉ cho cỡ S có ngưỡng choáng, không tốn vật tiêu hao', () => {
  const S = { id: 'T', ten: 'T', co: 'S', kieu: '', bat: 'Có', sinhLuc: 10, nguongChoang: 25, nguongMe: 35, don: [] };
  const r = CB.tran(CB.CFG, S, 1, 'trung bình', 'bắt tay', luonTrung);
  assert.ok(r.xong && Object.keys(r.vt).length === 0);
  assert.equal(CB.tran(CB.CFG, { ...S, co: 'M' }, 1, 'trung bình', 'bắt tay', luonTrung), null);
});
const { docHeSoDai } = await import('./lib.mjs');
t('lib: a theo dải ở map.md 3.8 có đủ Vành đai ngoài, Vành đai trong, Vùng trung tâm, giá trị trong 0 đến 1', () => {
  const k = docHeSoDai(new URL('../gdd/he-thong/map.md', import.meta.url));
  assert.ok(['Vành đai ngoài', 'Vành đai trong', 'Vùng trung tâm'].every((d) => k[d] > 0 && k[d] < 1));
});


// Sheet: tách tham số ngoài ngoặc, so bảng nguồn với CSV của tab.
{
  const XE = await import('./xuat-event-tracking.mjs');
  const DC = await import('./doi-chieu-sheet.mjs');
  t('xuat-event-tracking: tách tham số giữ ngoặc, sinh đủ No liên tục từ ky-thuat.md', () => {
    assert.deepEqual(XE.tachThamSo('player_id, result (rejoined, pulled_back), ms'), ['player_id', 'result (rejoined, pulled_back)', 'ms']);
    const { rows, loi } = XE.sinh(readFileSync(new URL('../gdd/he-thong/ky-thuat.md', import.meta.url), 'utf8'));
    assert.deepEqual(loi, []);
    assert.equal(rows.at(-1)[0], 'Ref');
  });
  t('doi-chieu-sheet: bắt ô lệch và hàng thừa, bỏ khoảng trắng cuối ô', () => {
    const csv = [['TIÊU ĐỀ'], ['A', 'B'], ['1', 'x '], ['2', 'y'], ['3', 'thừa'], ['']];
    const r = DC.soBang([['A', 'B'], ['1', 'x'], ['2', 'z']], csv, 2);
    assert.deepEqual(r.lech.map((l) => l.o), ['B4']);
    assert.equal(r.thua, 1);
  });
  t('doi-chieu-sheet: đọc ô ngoặc kép nhiều dòng, chuỗi \\n ở ô thường, 14 bằng 14,0', () => {
    const rows = DC.docTsv('A\tB\n"dòng 1\ndòng 2 có ""trích"""\tx\\ny\n14,0\t2\n');
    assert.deepEqual(rows, [['A', 'B'], ['dòng 1\ndòng 2 có "trích"', 'x\ny'], ['14,0', '2']]);
    assert.ok(DC.giongO('14', '14,0') && !DC.giongO('14', '14,5') && !DC.giongO('a', 'b'));
    assert.equal(DC.soBang(rows, [['T'], ['A', 'B'], ['dòng 1\ndòng 2 có "trích"', 'x\ny'], ['14', '2']], 2).lech.length, 0);
  });
}
t('validate-gdd: bắt cụm phản diện cũ ở GDD và TSV Sheet, bỏ qua Điểm tự quyết và Lịch sử', () => {
  const goc = mkdtempSync(join(tmpdir(), 'vgdd-'));
  const ht = join(goc, 'he-thong'), sh = join(goc, 'sheet');
  for (const d of [ht, sh]) mkdirSync(d);
  for (const [f, s] of Object.entries(SACH)) writeFileSync(join(ht, f), s);
  writeFileSync(join(ht, 'map.md'), SACH['map.md'] + 'Họ tham lam hơn loài người.\n## 9. Điểm tự quyết\nBỏ cụm đạo đức giả.\n## Lịch sử thay đổi\n- Bỏ bản khảo sát.\n');
  writeFileSync(join(sh, 'Enemy.tsv'), 'ID\tMô tả\nX\tTheo bản khảo sát\n');
  try {
    const kq = kiem(ht).loi.filter((e) => e.kiem.startsWith('Cụm phản diện')).map((e) => `${e.file}|${e.vai}`).sort();
    assert.deepEqual(kq, ['map.md|gd-world', 'sheet/Enemy.tsv|gd-combat']);
  } finally { rmSync(goc, { recursive: true }); }
});
// Cổng khuôn Doc thiết kế và script gộp (GD-059): file mẫu tạm, không dùng file thật của vai.
{
  const KB = await import('./kiem-book.mjs');
  const GB = await import('./gop-book.mjs');
  const muc = (n, { hong = false } = {}) => {
    const thun = Array.from({ length: 110 }, (_, i) => `Dòng chữ giải thích số ${i + 1} của hệ thống mẫu.`);
    return [
      `## II.${n}. Sample Station`, '', 'Hệ thống mẫu làm một việc trong game và nối với hệ thống khác.', '',
      `### II.${n}.1. Overview`, 'Một vòng chơi của hệ thống mẫu.', '',
      `### II.${n}.${hong ? 3 : 2}. Luật thứ nhất`, ...thun, 'Chi tiết dữ liệu: tab Customer trên Sheet GDD.', '',
      '```mermaid', 'flowchart TD', '  A[Tàu cập] --> B{Có chỗ}', '  B -->|Có| C[Nhận hàng]', '```',
      hong ? '' : `*Hình II.${n}.2 - Giờ giao thương một tàu*`, '',
      '[CHỜ ẢNH: màn cảng từ build]', `*Hình II.${n}.3 - Màn cảng*`, '',
      `### II.${n}.z. Post-MVP`, '- Tàu thứ ba', ...(hong ? ['Có dấu chấm phẩy; và gạch dài — sai, mã STY-501, tab Khong Co'] : []),
    ].join('\n') + '\n';
  };
  t('kiem-book: file đúng khuôn qua cổng, đếm CHỜ ẢNH', () => {
    const r = KB.kiemMuc(muc(6), '06-tram.md');
    assert.deepEqual(r.loi, []);
    assert.equal(r.choAnh, 1);
    assert.equal(r.mermaid, 1);
  });
  t('kiem-book: file sai khuôn bị bắt đủ nhóm lỗi', () => {
    const ten = KB.kiemMuc(muc(6, { hong: true }), '07-tram.md').loi.map((l) => l[1]);
    for (const can of ['Số mục', 'Đánh số không liên tục', 'Sơ đồ thiếu chú thích', 'Dấu chấm phẩy', 'Gạch dài', 'ID nội bộ', 'Tên tab không có trên Sheet'])
      assert.ok(ten.some((x) => x.startsWith(can)), 'thiếu bắt: ' + can);
  });
  t('kiem-book: file ngắn quá bị bắt độ dài', () => {
    assert.ok(KB.kiemMuc('## II.1. A\n\nMở.\n', '01-a.md').loi.some((l) => /^Độ dài/.test(l[1])));
  });
  t('gop-book: 0 file ra mục lục 9 dòng chưa viết, 1 file đánh số hình xuyên suốt', () => {
    const goc = mkdtempSync(join(tmpdir(), 'book-'));
    try {
      const khuon = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `| II.${n} | \`0${n}-x.md\` | HT${n} | nguồn | vai |`).join('\n');
      writeFileSync(join(goc, 'KHUON.md'), khuon);
      assert.equal(GB.gop(goc).md.split('\n').filter((l) => /\(chưa viết\)/.test(l)).length, 9);
      mkdirSync(join(goc, 'phan-2'));
      writeFileSync(join(goc, 'phan-2', '06-x.md'), muc(6));
      const g1 = GB.gop(goc);
      assert.equal(g1.thieu.length, 8);
      assert.ok(/\*Hình 1 - Giờ giao thương/.test(g1.md) && /\*Hình 2 - Màn cảng/.test(g1.md) && !/Hình II\.6/.test(g1.md));
    } finally { rmSync(goc, { recursive: true }); }
  });
}

// sinh-codex: khung nhỏ dựng tay, kiểm lọc MVP, dịch ID, --kiem bắt lỗi.
{
  const SC2 = await import('./sinh-codex.mjs');
  const T = (rows) => rows.map((r) => r.map((c) => c.replace(/\n/g, '\\n')).join('\t')).join('\n') + '\n';
  const H = ['STT', 'Task', 'Sub Task', 'Short Description', 'Ref'];
  const goc = mkdtempSync(join(tmpdir(), 'codex-'));
  mkdirSync(join(goc, 'gdd', 'sheet'), { recursive: true });
  const w = (f, x) => writeFileSync(join(goc, 'gdd', 'sheet', f), typeof x === 'string' ? x : T(x));
  const itemH = ['STT', 'Item name', 'Type', 'Nguồn nhận', 'Nguồn tiêu', 'Note'];
  w('ITEM LIST.tsv', [itemH, ['1', 'Mảnh vỏ', 'Phế liệu', 'Mảnh trôi', 'Ép tấm', 'Hull Shard. Thường, MVP'], ['2', 'Hợp kim', 'Phế liệu', 'Hòm', 'Sửa', 'Fused Alloy. Hiếm, Sau MVP'], ['3', 'Tấm nén', 'Vật liệu chế', 'RCP-101', 'Sửa', 'Thường, MVP']]);
  w('ITEM LIST.json', JSON.stringify([['RES-101', 'Mảnh vỏ', 'Phế liệu', 'SLV-101', 'RCP-101', 'x'], ['RES-201', 'Hợp kim', 'Phế liệu', 'SLV-201', 'x', 'x'], ['COM-101', 'Tấm nén', 'Vật liệu chế', 'RCP-101', 'UPG-OXY-1, UPG-OXY-2, Hầm sâu (SLV-201), Sửa khoang', 'x']]));
  w('Salvage.tsv', [H, ['1', 'Mảnh trôi', 'Type', 'Điểm khai thác, Vành đai ngoài. Nhãn: MVP', 'r'], ['', '', 'Resource Output', '- Mảnh vỏ: trọng số 60', ''], ['', '', 'Spawn Point', 'Vành đai ngoài. Tối đa 25%', ''], ['2', 'Hầm sâu', 'Type', 'Điểm khai thác, Vành đai trong. Nhãn: Sau MVP', 'r']]);
  w('Salvage.json', JSON.stringify([['SLV-101', 'Mảnh trôi', 'Type', 'x', ''], ['RES-101', 'Mảnh vỏ', 'Type', 'x', ''], ['SLV-201', 'Hầm sâu', 'Type', 'x', '']]));
  w('Recipe.tsv', [H, ['1', 'Ép tấm', 'Type', 'Xưởng', 'r'], ['', '', 'Ingredients', '3 x Mảnh vỏ', ''], ['', '', 'Output', '1 x Tấm nén\nThời gian: 10 giây', '']]);
  w('Recipe.json', JSON.stringify([['RCP-101', 'Ép tấm', 'Type', 'Xưởng', ''], ['', '', 'Ingredients', '3 x RES-101 Mảnh vỏ', '']]));
  w('Enemy.tsv', [H, ['1', 'Luật chung', 'Sát thương', '- Mất Oxy', 'r'], ['2', 'Moth', 'Type', '- Vành đai ngoài\n- Nhãn: MVP\n- Rơi khi hạ: Mô', 'r'], ['3', 'Eel', 'Type', '- Vành đai trong\n- Nhãn: Sau MVP', 'r']]);
  w('Customer.tsv', [H, ['1', 'Loose Bolt (Tàu gom)', 'Type', '- Ai: Tikko, thương nhân người Oru\n- Nhãn: MVP', 'r'], ['', '', 'Order', 'Gọi mọi hàng', ''], ['2', 'Tàu xa', 'Type', '- Ai: Vaeth, thương nhân\n- Nhãn: Sau MVP', 'r'], ['3', 'Khoang trạm', 'Luật', '- Sửa khoang', 'r'], ['', '', 'Kho', '- Chức năng: Chỗ chứa\n- Người vớt: Có sẵn\n- Mở ở chương: 1\n- Nhãn: MVP', ''], ['', '', 'Sinh quyển', '- Chức năng: Nuôi\n- Người vớt: Nhà sinh học\n- Mở ở chương: 2\n- Nhãn: Sau MVP', '']]);
  w('Upgrade.tsv', [H, ['1', 'Bình Oxy', 'Loại', 'Chỉ là số', 'r'], ['', '', 'Bậc 1', 'Oxy 330 lên 450. 930 Tally, vật liệu 26 GTĐ. Mở chương 1. MVP', ''], ['', '', 'Bậc 2', 'Oxy 600. 5000 Tally. Mở chương 2. Sau MVP', ''], ['2', 'Túi đồ', 'Loại', 'Chỉ là số', 'r'], ['', '', 'Bậc 2', 'Túi 126. 5000 Tally. Mở chương 2. Sau MVP', '']]);
  w('Player.tsv', [H, ['1', 'Co-op 1 đến 4 người', 'Type', '- MVP chạy 2 người', 'r'], ['2', 'Hồ sơ nhân vật (tóm tắt cho art)', 'Type', '- 4 preset', 'r']]);
  mkdirSync(join(goc, 'gdd', 'he-thong'), { recursive: true });
  writeFileSync(join(goc, 'gdd', 'he-thong', 'vat-pham.md'), '| RES-101 | Mảnh vỏ / Hull Shard Mk1 | Phế liệu |\n');
  try {
    t('sinh-codex: lọc MVP đúng từng tab, bỏ Sau MVP và hàng luật', () => {
      const r = SC2.dung(goc), dem = (tab) => r.muc.filter((m) => m.tab === tab).length;
      assert.deepEqual(TABS_DEM(r, dem), [2, 1, 1, 2, 2, 1]);
      assert.deepEqual(r.canh, []);
    });
    t('sinh-codex: ID thành tên, công thức lấy từ Recipe, khóa không lọt ra tab Codex', () => {
      const r = SC2.dung(goc), tam = r.muc.find((m) => m.khoa === 'COM-101');
      assert.equal(tam.nguon, 'công thức Ép tấm');
      assert.equal(tam.congthuc, '3 x Mảnh vỏ (10 giây)');
      assert.equal(tam.dungcho, 'nâng cấp Bình Oxy bậc 1, Sửa khoang'); // bậc 2 và Hầm sâu (Sau MVP) bị lọc khỏi ô
      assert.equal(r.muc.find((m) => m.khoa === 'RES-101').ten_en, 'Hull Shard Mk1'); // tên Anh lấy từ vat-pham.md
      assert.equal(tam.congthuc, '3 x Mảnh vỏ (10 giây)');
      const tabs = SC2.ghiTab(r.muc, new Map([['RES-101', 'Lời mẫu.']]));
      assert.ok(tabs.every((x) => !/COM-101|RES-101|SLV-101/.test(x.text)));
      assert.ok(tabs[0].text.split('\n')[1].includes('Lời mẫu.'));
      assert.equal(tabs[0].text.split('\n')[0], SC2.COT.join('\t'));
    });
    t('sinh-codex: lọc Sau MVP theo nhãn nguồn, giữ dấu phẩy thập phân', () => {
      const r = SC2.dung(goc), tam = r.muc.find((m) => m.khoa === 'COM-101');
      assert.ok(!/Hầm sâu|bậc 2|SLV-201/.test(tam.nguon + tam.congthuc + tam.dungcho));
      const sau = { re: /(?<![\p{L}\d-])(?:Hầm sâu)(?![\p{L}\d])/u };
      assert.equal(SC2.locSau('dùng 1,5 giây, Hầm sâu, Kho', sau), 'dùng 1,5 giây, Kho');
    });
    t('sinh-codex: --kiem bắt thiếu, thừa, quá dài, chữ số, gạch dài, chấm phẩy', () => {
      const { muc } = SC2.dung(goc), ok1 = new Map(muc.map((m) => [m.khoa, 'Một câu gọn.']));
      assert.deepEqual(SC2.kiem(muc, ok1), []);
      const x = new Map(ok1);
      x.delete('RES-101'); x.set('KHÔNG-CÓ', 'Thừa.'); x.set('COM-101', 'a'.repeat(201)); x.set('Moth', 'Có 3 con.'); x.set('Kho', 'Dài — thật.'); x.set('Tikko', 'Hai ý; một câu.');
      const e = SC2.kiem(muc, x).join('\n');
      for (const can of ['Thiếu lời: Vật phẩm / RES-101', 'Lời thừa', 'quá 200', 'chữ số: Moth', 'gạch dài: Kho', 'chấm phẩy: Tikko']) assert.ok(e.includes(can), 'thiếu bắt: ' + can);
      assert.equal(SC2.kiem(muc, null).length, 1);
    });
  } finally { rmSync(goc, { recursive: true }); }
  function TABS_DEM(r, dem) { return SC2.TABS.map((tab) => dem(tab)); }
}

// xuat-wiki: ghép nhiều bảng vào một nhân vật theo Mã và theo bí danh, tách tên phụ, bắt khuôn thiếu chỗ dữ liệu.
t('xuat-wiki: ghép bảng theo Mã và theo tên, tách tên phụ', () => {
  const hs = '### 2b.2 Người vớt\nGhi chú nhóm.\n\n| Mã | Tên | Màu nhận diện | Nhãn |\n|---|---|---|---|\n| RS-3 | Rafael Ortega (Rafa) | Đỏ `#B8665C` | Sau MVP |\n\n'
    + '| Tên | Chương |\n|---|---|\n| Rafa | 2 |\n\n### 2b.4 The Wardens\n| Mã | Tên | Nhãn |\n|---|---|---|\n| WD-P1 | Daskel, danh xưng First Warden | Sau MVP |\n';
  const l = trichNhanVat(hs, '');
  const g = (ten) => l.nhom.find((x) => x.ten === ten);
  const rs = g('Người vớt').muc[0];
  assert.equal(rs.ten, 'Rafael Ortega'); assert.equal(rs.tenPhu, 'Rafa'); assert.equal(rs.mau, '#B8665C');
  assert.deepEqual(rs.phan.flatMap((p) => p.truong).find(([h]) => h === 'Chương'), ['Chương', '2']);
  assert.deepEqual(g('Người vớt').ghiChu, ['Ghi chú nhóm.']);
  const wd = g('The Wardens').muc[0];
  assert.equal(wd.ma, 'WD-P1'); assert.equal(wd.ten, 'Daskel'); assert.equal(wd.tenPhu, 'danh xưng First Warden');
  assert.match(dungWiki('<script>const D = /*DATA*/null</script>', [l]), /"Rafael Ortega"/);
  assert.throws(() => dungWiki('<html>', [l]), /DATA/);
});
t('xuat-wiki: cột khóa không phải cột đầu, ô nhiều mã, mã lặp thành bảng con, nguồn phụ chỉ ghép', () => {
  const chinh = '### Danh mục\n| ID | Tên | Dải | Nhãn |\n|---|---|---|---|\n| DL-G01 | Driftmoth | Vành đai ngoài | MVP |\n| DL-G03 | Latchjaw | Vành đai ngoài | Sau MVP |\n\n'
    + '### Đòn\n| Loài | Đòn | DMG |\n|---|---|---|\n| DL-G03 | Đớp | 12 |\n| DL-G03 | Cắn | 5 |\n\n'
    + '### Di chuyển\n| Loài | Tốc độ |\n|---|---|\n| DL-G01, DL-G03 (Hiền) | 1,5 |\n';
  const phu = '### Danh sách tham chiếu sinh từ script\n- Loài Driftlife và hệ số (ghi chú). Cột Số\n\n| Số | Mã gd-combat | Hệ số k |\n|---|---|---|\n| 111 | DL-G01 | 0,45 |\n| 115 | DL-M05 | 0,5 |\n';
  const l = trichDriftlife(chinh, phu);
  const ds = l.nhom.flatMap((g) => g.muc);
  assert.deepEqual(ds.map((m) => m.ma), ['DL-G01', 'DL-G03']);
  const [moth, jaw] = ds;
  assert.deepEqual(moth.phan.map((p) => p.ten), ['Danh mục', 'Di chuyển', 'Loài Driftlife và hệ số']);
  assert.deepEqual(jaw.phan.find((p) => p.ten === 'Di chuyển').truong, [['Tốc độ', '1,5']]);
  assert.deepEqual(jaw.bangCon, [{ ten: 'Đòn', head: ['Đòn', 'DMG'], rows: [['Đớp', '12'], ['Cắn', '5']] }]);
  assert.equal(l.nhom[0].ten, 'Vành đai ngoài');
});
t('xuat-wiki: bản Artifact bỏ thẻ khung, body thành div, ảnh về anh/', () => {
  const html = '<!doctype html>\n<html lang="vi">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="x">\n<title>W</title>\n</head>\n<body class="a b">\n<img src="../../../art/C/05-nhan-vat/demo-pc/pc1.webp">\n</body>\n</html>\n';
  const ra = choArtifact(html);
  assert.ok(ra.startsWith('<title>W</title>'));
  assert.ok(ra.includes('<div class="a b">') && ra.includes('src="anh/pc1.webp"'));
  assert.ok(!/<(html|head|body|meta)\b/i.test(ra));
});

console.log(`\n${ok} phép kiểm ĐẠT.`);
