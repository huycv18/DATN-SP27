#!/usr/bin/env node
// Selftest mọi tool trong tools/. Chạy: node projects/game-moi/tools/selftest.mjs. Thoát 1 khi một phép kiểm sai.
import { mkdtempSync, writeFileSync, rmSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { kiem } from './validate-gdd.mjs';

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

// sim-ca-cang: ca tính tay một tàu một kiện, và tất định.
const CC = await import('./sim-ca-cang.mjs');
const { rngTu } = await import('./lib.mjs');
const mot = (g, id, kg = [1, 1]) => ({ ...CC.CFG, lechGioDen: 0, tau: { [id]: { luu: 'vừa', dong: [1, 1], nhom: [g], trongSo: 1, tu: 1, hang: 1 } }, cauHinh: { t: { ch: 1, ben: 1, soTau: 1, gianCach: 0, kienGoc: kg, heSoKien: 0.6, hang: 1, suCo: [0, 0] } } });
t('sim-ca-cang: ca tính tay một tàu, một dòng CGO-109 (HC10, Nhỏ) một kiện, một người', () => {
  // Tàu đến 0 giây. Nghĩ 1,5, kho tới máy 2,0, đóng 5,0, máy tới bến 2,0 / 0,9 = 2,22: giao lúc khoảng 10,7. Rời sau 3 giây: ca khoảng 13,7 đến 14,5.
  const r = CC.chayCa(mot('HC10', 'TA03'), 't', 'trung bình', 1, 0, rngTu(1));
  assert.ok(r.giay >= 13.5 && r.giay <= 14.5, `giây ${r.giay}`);
  assert.equal(r.du, 1); assert.equal(r.kien, 1); assert.equal(r.nhanh, 1); assert.equal(r.diem, 3);
});
t('sim-ca-cang: luật TA01 ép dòng CGO-121, cho con vào lồng ở máy 8 giây, lồng Lớn: 1,5 + 2 + 8 + 2 / 0,65, rời sau 3 giây', () => {
  const r = CC.chayCa(mot('HC10', 'TA01'), 't', 'trung bình', 1, 0, rngTu(1));
  assert.ok(r.giay >= 17.3 && r.giay <= 18.3, `giây ${r.giay}`);
});
t('sim-ca-cang: điểm cảng làm tròn lên tích (luật 40): 2 người, một đơn đủ nhanh ra 3 + 2 = 5', () => {
  const r = CC.chayCa(mot('HC10', 'TA03'), 't', 'trung bình', 2, 0, rngTu(1));
  assert.equal(r.du, 1); assert.equal(r.nhanh, 1); assert.equal(r.diem, 5);
});
t('sim-ca-cang: cùng seed cùng kết quả', () => assert.deepEqual(CC.moPhong(CC.CFG, '2', 'tệ', 3, 0, 5, 50), CC.moPhong(CC.CFG, '2', 'tệ', 3, 0, 5, 50)));
t('sim-ca-cang: co-op tăng kiện mỗi dòng theo hệ số 0,6, làm tròn lên (dòng gốc 2: 2, 4, 5, 6)', () => {
  assert.deepEqual([1, 2, 3, 4].map((N) => CC.sinhLich(mot('HC10', 'TA03', [2, 2]), 't', N, rngTu(3))[0].dong[0].can), [2, 4, 5, 6]);
});
t('sim-ca-cang: một đơn không có hai dòng cùng ID, chương 1 tối đa một dòng kiện tinh 1 kiện', () => {
  const rng = rngTu(9);
  for (let i = 0; i < 300; i++) for (const ck of ['1', '1-h3', '3', '5']) {
    const lich = CC.sinhLich(CC.CFG, ck, 4, rng);
    for (const x of lich) assert.equal(new Set(x.dong.map((d) => d.id)).size, x.dong.length);
    if (CC.CFG.cauHinh[ck].ch === 1) {
      const tinh = lich.flatMap((x) => x.dong).filter((d) => CC.kien(CC.CFG, d.id).tinh);
      assert.ok(tinh.length <= 1 && tinh.every((d) => d.can === 1));
    }
  }
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
  const c = { ...CB.CFG, coop: { ...CB.CFG.coop, kTheoDai: { Gần: 0.27 } } };
  assert.ok(Math.abs(CB.heSoN(c, { dai: 'Gần' }, 4) - 4 / 1.81) < 1e-9);
  assert.equal(CB.heSoN(c, { dai: 'Gần' }, 1), 1);
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
t('lib: a theo dải ở map.md 3.8 có đủ Gần, Giữa, Xa, giá trị trong 0 đến 1', () => {
  const k = docHeSoDai(new URL('../gdd/he-thong/map.md', import.meta.url));
  assert.ok(['Gần', 'Giữa', 'Xa'].every((d) => k[d] > 0 && k[d] < 1));
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
}
console.log(`\n${ok} phép kiểm ĐẠT.`);
