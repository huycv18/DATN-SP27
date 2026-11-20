#!/usr/bin/env node
// Sim combat (GD-030 mục 4), theo "Đề sim combat cho gd-tech" ở combat-driftlife.md: S1 phần Oxy mất mỗi trận, S2 phần thời gian, S3, S4.
// Chạy: node projects/game-moi/tools/sim-combat.mjs [--seed 1] [--lan 2000] [--ra <file.md>]
// Mô hình một trận: N người cùng đánh một con từ lúc giao chiến. Hạ: mọi người bắn Lao từ. Bắt: cỡ S dùng Súng lưới,
// cỡ M và L cần Bất lực thì dùng Dùi xung (hoặc Súng gây mê nếu miễn choáng hay chỉ bắt khi ngủ) rồi Phao kéo hoặc Kim sinh thiết.
// Con vật ra đòn theo hồi chiêu vào một người ngẫu nhiên (vé tấn công). Không mô phỏng: tiếp cận và đuổi theo (Skitter Ray chạy trốn),
// bầy nhiều con (tính một con), đòn đặc biệt (Nuốt, vùng hút, đẻ bầy), boss, The Wardens.
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rngTu, phanVi, tb, vn, pt, soVn, docKhoi, bangMd, docHeSoDai, dauChay } from './lib.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const GDD = join(HERE, '..', 'gdd', 'he-thong');
export const CFG = JSON.parse(readFileSync(join(HERE, 'tham-so', 'combat.json'), 'utf8'));
CFG.coop.kTheoDai = docHeSoDai(join(HERE, '..', 'gdd', 'he-thong', 'map.md')); // a của k(N) theo dải, nguồn map.md 3.8

const cells = (l) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
// Đọc loài: cỡ, kiểu, bắt, nhãn từ Danh mục sơ bộ. Chỉ số từ bảng 3.4.
export function docLoai() {
  const L = readFileSync(join(GDD, 'combat-driftlife.md'), 'utf8').split(/\r?\n/);
  const loai = {};
  for (const l of L) {
    if (!/^\| DL-[GMX]\d{2} \|/.test(l)) continue;
    const c = cells(l);
    if (c.length >= 9 && !loai[c[0]]) loai[c[0]] = { id: c[0], ten: c[1], dai: c[2], co: c[3], kieu: c[4], bat: c[5], nhan: c[8] };
  }
  for (const l of L) {
    const m = l.match(/^\| (DL-[GMX]\d{2}) [^|]*\|/);
    if (!m || !loai[m[1]] || loai[m[1]].sinhLuc !== undefined) continue;
    const c = cells(l);
    if (c.length !== 7) continue;
    const so = (s) => (/miễn/i.test(s) ? Infinity : /\d/.test(s) ? soVn(s.match(/[\d,]+/)[0]) : null);
    Object.assign(loai[m[1]], { sinhLuc: so(c[1]), nguongChoang: so(c[2]), nguongMe: so(c[3]), don: [], donDacBiet: false });
  }
  // Đòn đọc bảng 3.4b: | Loài | Đòn | Hình dạng, tầm | DMG | Báo trước | Đánh | Hồi | Hồi chiêu | Cần vé |
  const so1 = (x) => (/\d/.test(x) ? soVn(x.match(/[\d,]+/)[0]) : null);
  const muc = L.join('\n').split(/^### /m).find((x) => x.startsWith('3.4b')) || '';
  for (const l of muc.split('\n')) {
    const c = cells(l);
    if (!/^DL-[GMX]\d{2}$/.test(c[0]) || !loai[c[0]] || c.length < 9) continue;
    const s = loai[c[0]];
    if (/Nuốt|hút|Đẻ/i.test(c[1])) { s.donDacBiet = true; continue; } // đòn đặc biệt chưa mô phỏng
    const dmg = so1(c[3]), cd = so1(c[7]);
    if (!dmg || !cd) continue;
    s.don.push({ ten: c[1], dmg, bao: /^Không/.test(c[4]) ? 0 : so1(c[4]) || 0, cd });
  }
  return Object.values(loai).filter((s) => s.sinhLuc !== undefined);
}

// Hệ số Sinh lực và ngưỡng theo số người: bảng N / k(N) theo dải (combat-driftlife.md 6b), không có thì công thức tuyến tính.
export const heSoN = (cfg, s, N) => (cfg.coop.kTheoDai?.[s.dai] !== undefined ? N / kN(cfg, s, N) : 1 + cfg.coop.sinhLuc * (N - 1));
const kN = (cfg, s, N) => 1 + (cfg.coop.kTheoDai?.[s.dai] ?? cfg.coop.k) * (N - 1);

// Nhãn đường bắt cho bảng: chỉ Súng lưới có ở MVP. Phao kéo, Súng gây mê, Kim sinh thiết mở ở chương 2 (3.3).
export const nhanBat = (s) => ({ 'lưới': 'Súng lưới (MVP)', 'choáng': 'Dùi xung rồi Phao kéo (Sau MVP)', 'mê': 'Súng gây mê rồi Phao kéo (Sau MVP, đường mê)', 'không cần': 'Kim sinh thiết (Sau MVP)' })[cachBat(s)?.kieu] ?? '-';

// Cách bắt của một loài theo luật 19: null là không bắt được ở chế độ này.
export function cachBat(s) {
  if (/^Không/.test(s.bat) && !/sinh thiết/.test(s.bat)) return null;
  if (s.co === 'S') return { kieu: 'lưới' };
  const canNgu = /chỉ khi ngủ/.test(s.bat) || s.nguongChoang === Infinity;
  const hoanTat = s.co === 'L' ? CFG.kimSinhThiet : CFG.phaoKeo + (CFG.cay?.[s.id] || 0); // cạy trước Phao kéo (luật 19)
  if (s.co === 'L' && /Hiền/.test(s.kieu)) return { kieu: 'không cần', hoanTat };
  return { kieu: canNgu ? 'mê' : 'choáng', hoanTat };
}

// Một trận, tính từ lúc giao chiến. che: 'hạ' | 'bắt'. Trả {t, oxy (Oxy mất do đòn, cả nhóm), xong, vt (vật tiêu hao đã dùng)}.
export function tran(cfg, s, N, kb, che, rng, tran0 = 120) {
  const K = cfg.kichBan[kb], h = heSoN(cfg, s, N), dt = cfg.dt;
  let hp = s.sinhLuc * h, thanhC = 0, thanhM = 0, batLucDen = -1, mienDen = 0, drC = 1, drM = 1, lanCuoiBatLuc = -1e9, lanTrungC = -1e9, oxy = 0;
  // 'bắt tay': Dùi xung tới Choáng rồi giữ tương tác (luật 19, cỡ S), không tốn vật tiêu hao.
  const cach = che === 'bắt' ? cachBat(s) : che === 'bắt tay' ? (s.co === 'S' && Number.isFinite(s.nguongChoang) ? { kieu: 'choáng', hoanTat: cfg.batTay, tay: true } : null) : null;
  if (che !== 'hạ' && !cach) return null;
  if (che === 'hạ' && s.sinhLuc === null) return null;
  const vong = cfg.matTruocDoi?.[s.id] || 0; // mặt trước dội đạn: vòng ra sau trước khi bắn
  const ng = Array.from({ length: N }, () => ({ ban: rng() * 0.3 + vong, mien: 0, nong: 0, nghi: 0 }));
  const don = s.don.map((d) => ({ ...d, toi: d.cd * rng() }));
  const meCho = [];
  let hoanTatLuc = null;
  // Loài Chạy trốn: phát trượt thì nó lướt đi, người đuổi lại vào tầm (combat-driftlife.md 2.7).
  const CT = cfg.chayTron, tron = CT && /Chạy trốn/.test(s.kieu || '');
  const phatTron = (tam) => (tron ? CT.giay + Math.max(0, CT.vungPhatHien + (CT.heSoToc - 1) * CT.vmaxNguoi * CT.giay - tam) / CT.vmaxNguoi : 0);
  const vt = {}, dung = (k) => { const id = cfg.vatTieuHao?.[k]; if (id) vt[id] = (vt[id] || 0) + 1; };
  for (let i = 0, t = 0; t < tran0; t = ++i * dt) {
    const batLuc = t < batLucDen;
    if (!batLuc && batLucDen > 0 && t - batLucDen < dt) mienDen = t + cfg.dr.mien; // vừa tỉnh
    if (t - lanCuoiBatLuc > cfg.dr.datLai) { drC = 1; drM = 1; }
    // Đòn của con vật.
    if (!batLuc) for (const d of don) if (t >= d.toi - 1e-9) {
      d.toi += d.cd;
      const p = ng[rng.int(N)];
      const ne = d.bao > 0 ? K.ne : K.ne / 2;
      if (t >= p.mien && rng() >= ne) { oxy += d.dmg; p.mien = t + cfg.mienSauTrung; }
      if (vong) for (const q of ng) q.ban = Math.max(q.ban, t + vong); // ra đòn xong nó quay mặt, phải vòng lại
    }
    // Tụt thanh Choáng sau 1 giây không trúng.
    if (t - lanTrungC > cfg.choang.tutSau) thanhC = Math.max(0, thanhC - cfg.choang.tutMoiGiay * s.nguongChoang * h * drC * dt);
    for (const x of meCho.filter((x) => x.luc <= t)) { meCho.splice(meCho.indexOf(x), 1); if (t >= mienDen && !batLuc) thanhM += cfg.sungMe.me; }
    if (!batLuc && t >= mienDen && thanhM >= s.nguongMe * h * drM) { batLucDen = t + cfg.ngu.giay; thanhM = 0; drM = Math.min(cfg.dr.tran, drM * cfg.dr.heSo); lanCuoiBatLuc = t; }
    if (!batLuc && t >= mienDen && thanhC >= s.nguongChoang * h * drC) { batLucDen = t + cfg.choang.giay; thanhC = 0; drC = Math.min(cfg.dr.tran, drC * cfg.dr.heSo); lanCuoiBatLuc = t; }
    // Hoàn tất bắt khi con vật đang Bất lực (một người giữ tương tác).
    if (che !== 'hạ' && cach.kieu !== 'lưới') {
      const san = cach.kieu === 'không cần' || t < batLucDen;
      if (san && hoanTatLuc === null) hoanTatLuc = t + cach.hoanTat;
      if (!san) hoanTatLuc = null;
      if (hoanTatLuc !== null && t >= hoanTatLuc) { if (!cach.tay) dung(s.co === 'L' ? 'kim' : 'phao'); return { t, oxy, xong: true, vt }; }
    }
    for (const p of ng) {
      if (t < p.ban - 1e-9) continue;
      if (che === 'hạ') {
        p.ban += cfg.laoTu.nhip;
        if (rng() < K.trung) { hp -= cfg.laoTu.dmg; if (hp <= 0) return { t, oxy, xong: true, vt }; } else p.ban += phatTron(cfg.chayTron?.tamLao);
      } else if (cach.kieu === 'lưới') {
        p.ban += cfg.sungLuoi.napLai; dung('lưới');
        if (rng() < K.trung) return { t, oxy, xong: true, vt };
        p.ban += phatTron(cfg.chayTron?.tamLuoi);
      } else if (cach.kieu === 'choáng' && !(t < batLucDen)) {
        if (t < p.nghi) continue;
        p.ban = Math.max(p.ban + cfg.duiXung.nhip, t);
        if (++p.nong >= cfg.duiXung.nongSau) { p.nong = 0; p.nghi = t + cfg.duiXung.nghiNong; }
        if (rng() < K.trung && t >= mienDen) { thanhC += cfg.duiXung.choang; lanTrungC = t; }
      } else if (cach.kieu === 'mê' && !(t < batLucDen)) {
        p.ban = Math.max(p.ban + cfg.sungMe.nhip, t); dung('mê');
        if (rng() < K.trung) meCho.push({ luc: t + cfg.sungMe.tre });
      }
    }
  }
  return { t: tran0, oxy, xong: false, vt };
}

// S3: N người dùng Dùi xung liên tục lên một con trong 60 giây, tỉ lệ thời gian Bất lực.
export function khoa(cfg, s, N, kb, rng) {
  const K = cfg.kichBan[kb], h = heSoN(cfg, s, N), dt = cfg.dt;
  let thanh = 0, den = -1, mien = 0, dr = 1, lanTrung = -1e9, batLuc = 0, tinh = true;
  const ng = Array.from({ length: N }, () => ({ ban: rng() * 0.3, nong: 0, nghi: 0 }));
  for (let i = 0, t = 0; t < 60; t = ++i * dt) {
    const bl = t < den;
    if (bl) batLuc += dt; else if (!tinh) { tinh = true; mien = t + cfg.dr.mien; }
    if (t - lanTrung > cfg.choang.tutSau) thanh = Math.max(0, thanh - cfg.choang.tutMoiGiay * s.nguongChoang * h * dr * dt);
    for (const p of ng) {
      if (t < p.ban - 1e-9 || t < p.nghi || bl) continue;
      p.ban = Math.max(p.ban + cfg.duiXung.nhip, t);
      if (++p.nong >= cfg.duiXung.nongSau) { p.nong = 0; p.nghi = t + cfg.duiXung.nghiNong; }
      if (rng() < K.trung && t >= mien) { thanh += cfg.duiXung.choang; lanTrung = t; }
    }
    if (!bl && t >= mien && thanh >= s.nguongChoang * h * dr) { den = t + cfg.choang.giay; thanh = 0; dr = Math.min(cfg.dr.tran, dr * cfg.dr.heSo); tinh = false; }
  }
  return batLuc / 60;
}

// S5: boss BS-1 Scrapmaw theo combat-driftlife.md 3.7. ket: 'hạ' | 'xua'. Trả {t, dmg (Oxy mất do đòn, cả nhóm), xong}.
export function bossBS1(cfg, N, kb, ket, rng, tran0 = 600) {
  const B = cfg.boss['BS-1'], K = cfg.kichBan[kb], dt = cfg.dt;
  const hp0 = B.sinhLuc * (1 + B.heSoCoop * (N - 1));
  let hp = hp0, pha = 1, neo = B.neo, choangDen = -1, krill = 0, dmg = 0, xuaDen = null, doan = 0;
  let quet = B.quet.cd * rng(), phun = 2, huc = B.huc.cd * rng(), dien = null;
  const ng = Array.from({ length: N }, () => ({ ban: rng() * 0.3, mien: 0, giuNeo: null }));
  const trungNguoi = (dm, bao) => { // đòn vào một người ngẫu nhiên (vé), hủy giữ Neo nếu trúng
    const p = ng[rng.int(N)];
    if (rng() < (bao ? K.ne : K.ne / 2) || p.mien > tNow) return;
    dmg += dm; p.mien = tNow + cfg.mienSauTrung; p.giuNeo = null;
  };
  let tNow = 0;
  for (let i = 0; tNow < tran0; tNow = ++i * dt) {
    const t = tNow, choang = t < choangDen;
    if (pha === 1 && (neo === 0 || hp < hp0 * B.nguongPha2)) { pha = 2; dien = t + B.dien.chuKy; }
    // Đòn của boss và bầy Krill.
    if (!choang && pha === 1) {
      if (t >= quet) { quet = t + B.quet.cd; trungNguoi(B.quet.dmg, true); }
      if (t >= phun) { phun = t + B.phun.cd; krill = Math.min(B.phun.toiDa, krill + B.phun.con); }
    }
    if (!choang && pha === 2 && t >= huc) { huc = t + B.huc.cd; trungNguoi(B.huc.dmg, true); }
    if (krill && rng() < (dt * krill) / B.krill.cd) trungNguoi(B.krill.dmg, true);
    if (pha === 2 && t >= dien) {
      dien = t + B.dien.chuKy;
      for (const p of ng) if (rng() >= K.ne && p.mien <= t) { dmg += B.dien.dmg; p.mien = t + cfg.mienSauTrung; }
      if (!choang && rng() < cfg.boss.pDu[kb]) choangDen = t + B.dien.choang;
    }
    // Xua đi: trong lúc Choáng ở pha 2, một người giữ tương tác ở gốc Dây nối.
    // Đoạn 2 chỉ cắt được khi Sinh lực dưới 50%. Mỗi lần Choáng cắt tối đa một đoạn.
    const catDuoc = ket === 'xua' && pha === 2 && t < choangDen && (doan === 0 || hp < hp0 * 0.5) && choangDen !== xuaDen?.cd;
    if (catDuoc && xuaDen === null) xuaDen = { luc: t + B.xuaGiu, cd: choangDen };
    if (xuaDen && !(t < choangDen)) xuaDen = null;
    if (xuaDen && xuaDen.luc !== null && t >= xuaDen.luc) { doan++; xuaDen.luc = null; if (doan >= (B.xuaDoan || 1)) return { t, dmg, xong: true }; }
    for (const [j, p] of ng.entries()) {
      if (j === 0 && xuaDen && xuaDen.luc !== null) continue; // người 0 đang giữ ở Dây nối
      if (p.giuNeo !== null) { if (t >= p.giuNeo) { p.giuNeo = null; neo = Math.max(0, neo - 1); choangDen = t + B.choangNeo; } continue; }
      if (t < p.ban - 1e-9) continue;
      p.ban += cfg.laoTu.nhip;
      if (krill >= cfg.boss.banKrillKhi && !(t < choangDen)) { if (rng() < K.trung) krill--; continue; }
      const thanTrung = t < choangDen || (pha === 2 && !B.thanChiKhiChoang);
      if (thanTrung) { if (rng() < K.trung) { hp -= cfg.laoTu.dmg; if (hp <= 0) return { t, dmg, xong: ket === 'hạ' }; } continue; }
      const dangGiu = ng.filter((q) => q.giuNeo !== null).length;
      if (pha === 1 && neo - dangGiu > 0 && rng() < K.trung) p.giuNeo = t + B.giuNeo; // trúng Neo thì giữ 2 giây để giật
    }
  }
  return { t: tran0, dmg, xong: false };
}

export function moPhong(cfg, s, N, kb, che, seed, lan) {
  const rng = rngTu(seed);
  const r = [];
  for (let i = 0; i < lan; i++) { const x = tran(cfg, s, N, kb, che, rng); if (!x) return null; r.push(x); }
  const tc = cfg.tiepCan || 0; // bay tới con vật, cộng cho cả hạ và bắt
  const vt = {};
  for (const x of r) for (const [k, n] of Object.entries(x.vt)) vt[k] = (vt[k] || 0) + n / lan;
  return { p50: phanVi(r.map((x) => x.t), 0.5) + tc, p90: phanVi(r.map((x) => x.t), 0.9) + tc, oxy: tb(r.map((x) => x.oxy)), xong: r.filter((x) => x.xong).length / lan, vt };
}

export function baoCao(cfg, seed, lan) {
  const loai = docLoai();
  const KB = Object.keys(cfg.kichBan).filter((k) => !k.startsWith('_'));
  const out = [`# Kết quả sim combat\n\nSinh bởi \`tools/sim-combat.mjs\` ${dauChay(cfg)}, seed ${seed}, ${lan} trận mỗi ô. Chỉ số loài đọc từ \`combat-driftlife.md\` (Danh mục, 3.4), tham số \`tools/tham-so/combat.json\`.`];
  out.push(`\nGiả định gd-tech tự đặt: ${cfg.kichBan._nguon.replace('[GIẢ ĐỊNH] ', '')}. Thời gian trận cộng ${cfg.tiepCan} giây bay tới (gd-combat đề nghị), loài Chạy trốn mỗi phát trượt mất thêm thời gian đuổi theo (cfg.chayTron). Bầy tính một con. Đòn đặc biệt chưa tính: ${loai.filter((s) => s.donDacBiet).map((s) => s.ten).join(', ')}.`);
  const ch = (s, N, kb, che) => moPhong(cfg, s, N, kb, che, seed, lan);
  const o = (r) => (r ? `${vn(r.p50)} / ${vn(r.p90)}` : '-');
  const rows = [];
  const solo = {};
  for (const s of loai) for (const kb of KB) for (const N of [1, 2, 3, 4]) {
    if (kb !== 'trung bình' && N > 1) continue;
    const ha = ch(s, N, kb, 'hạ'), bat = ch(s, N, kb, 'bắt');
    if (N === 1 && kb === 'trung bình') solo[s.id] = { ha, bat };
    rows.push([`${s.id} ${s.ten}`, s.co, s.nhan, kb, N, o(ha), ha ? vn(ha.oxy) : '-', bat ? nhanBat(s) : '-', o(bat), bat ? vn(bat.oxy) : '-', bat ? pt(bat.xong) : '-']);
  }
  out.push('\n## 1. Thời gian hạ và bắt sống mỗi loài, Oxy mất do đòn (cả nhóm, mỗi trận)\n');
  out.push('Kịch bản tệ và tốt chỉ in cho một người. Giây P50 / P90. "Bắt xong trong 120 giây" dưới 100% nghĩa là có trận không bắt được.\n');
  out.push(bangMd(['Loài', 'Cỡ', 'Nhãn', 'Kịch bản', 'Số người', 'Giây hạ P50 / P90', 'Oxy mất khi hạ', 'Cách bắt', 'Giây bắt P50 / P90', 'Oxy mất khi bắt', 'Bắt xong trong 120 giây'], rows));

  // S2 phần thời gian: GTĐ mỗi phút bắt so với hạ (chưa trừ vật tiêu hao, giá do gd-economy).
  let sp = [], gia = {};
  try { for (const r of docKhoi(join(GDD, 'vat-pham.md'), 'ITEM')) gia[r['Item ID']] = soVn(r['GTĐ']); } catch { /* không có khối ITEM thì cột ròng trống */ }
  try { sp = docKhoi(join(GDD, 'vat-pham.md'), 'SPECIES'); } catch { /* gd-items đổi khối thì bỏ bảng này */ }
  const s2 = [];
  for (const r of sp) {
    const s = loai.find((x) => x.id === r['Mã gd-combat']); const so = solo[r['Mã gd-combat']];
    if (!s || !so?.ha || !so?.bat) continue;
    const gHa = soVn(r['E[GTĐ] khi hạ']), gBat = soVn(r['GTĐ mẫu bắt']);
    if (!Number.isFinite(gHa) || !Number.isFinite(gBat)) continue;
    const duong = [[nhanBat(s), so.bat]];
    const tay = ch(s, 1, 'trung bình', 'bắt tay');
    if (tay) duong.push(['Dùi xung rồi bắt tay (MVP)', tay]);
    for (const [ten, b] of duong) {
      const tieu = Object.entries(b.vt).reduce((a, [id, n]) => a + n * (gia[id] || 0), 0);
      const mHa = gHa / (so.ha.p50 / 60), mBat = gBat / (b.p50 / 60), mRong = (gBat - tieu) / (b.p50 / 60);
      s2.push([`${s.id} ${s.ten}`, ten, vn(gHa), vn(gBat), vn(tieu), vn(so.ha.p50), vn(b.p50), vn(mHa), vn(mBat), vn(mBat / mHa, 2), vn(mRong / mHa, 2)]);
    }
  }
  out.push('\n## 2. S2 phần thời gian: GTĐ mỗi phút trận, bắt so với hạ (một người trung bình)\n');
  out.push('GTĐ từ `vat-pham.md` khối SPECIES. Cột ròng trừ GTĐ vật tiêu hao đã dùng (Lưới cuộn mỗi phát, Ống gây mê mỗi phát, Phao kéo hoặc Kim sinh thiết mỗi lần bắt, GTĐ từ khối ITEM). Chưa tính kéo lồng chậm. Cỡ S nên đọc theo chuyến (Lồng 3 con), không theo trận. Mục tiêu đề S2: bắt ròng gấp 1,2 đến 1,6 lần hạ.\n');
  out.push(bangMd(['Loài', 'Đường bắt', 'GTĐ khi hạ', 'GTĐ mẫu bắt', 'GTĐ vật tiêu hao mỗi lần bắt', 'Giây hạ', 'Giây bắt', 'GTĐ mỗi phút hạ', 'GTĐ mỗi phút bắt', 'Bắt trên hạ (gộp)', 'Bắt trên hạ (ròng)'], s2));

  out.push('\n## 3. S3: tỉ lệ thời gian Bất lực trong 60 giây khi N người dùng Dùi xung liên tục (mục tiêu dưới 70% với N = 4)\n');
  const s3 = [];
  for (const s of loai.filter((x) => Number.isFinite(x.nguongChoang) && x.co !== 'S')) {
    s3.push([`${s.id} ${s.ten}`, ...[1, 2, 3, 4].map((N) => { const rng = rngTu(seed); return pt(tb(Array.from({ length: Math.max(100, lan / 10) }, () => khoa(cfg, s, N, 'trung bình', rng)))); })]);
  }
  out.push(bangMd(['Loài', 'N = 1', 'N = 2', 'N = 3', 'N = 4'], s3));

  out.push('\n## 4. S4: gánh mỗi người so với một mình, trung bình\n');
  out.push('Số con mỗi chuyến nhân k(N) theo dải, Sinh lực và ngưỡng nhân N / k(N) theo bảng 6b. "Hạ dồn": cả nhóm cùng hạ từng con, gánh = k(N) x giây hạ với N người / giây hạ một mình. "Chia": mỗi người làm riêng k(N) / N con, gánh = k(N) / N x hệ số Sinh lực. "Bắt dồn": như hạ dồn với bắt sống (phần 3 giây tiếp cận tính một lần mỗi con). Mục tiêu 0,9 đến 1,1. Bắt dồn trên 1,1 nghĩa là cả nhóm cùng bắt tốn hơn mỗi người tự bắt riêng.\n');
  const s4 = [];
  for (const s of loai.filter((x) => x.sinhLuc !== null)) {
    const g = (N) => {
      const k = kN(cfg, s, N), tc = cfg.tiepCan || 0;
      const don = (k * ch(s, N, 'trung bình', 'hạ').p50) / solo[s.id].ha.p50;
      const bN = ch(s, N, 'trung bình', 'bắt');
      const batDon = bN && solo[s.id].bat ? vn((k * bN.p50) / solo[s.id].bat.p50, 2) : '-';
      return `${vn(don, 2)} / ${vn((k / N) * heSoN(cfg, s, N), 2)} / ${batDon}`;
    };
    s4.push([`${s.id} ${s.ten}`, s.dai, g(2), g(3), g(4)]);
  }
  out.push(bangMd(['Loài', 'Dải', 'N = 2 hạ dồn / chia / bắt dồn', 'N = 3 hạ dồn / chia / bắt dồn', 'N = 4 hạ dồn / chia / bắt dồn'], s4));

  // S5: boss BS-1.
  const B = cfg.boss['BS-1'], binh1 = 330; // bình chương 1 (log 54)
  out.push('\n## 5. S5: boss BS-1 Scrapmaw (combat-driftlife.md 3.7, mục tiêu một mình 1 đến 2 phút)\n');
  out.push(`Sinh lực ${B.sinhLuc} nhân 1 + ${vn(B.heSoCoop, 1)} (N - 1). Oxy mỗi người = hao nền 1 mỗi giây cộng Oxy mất do đòn chia đều, so với bình chương 1 (${binh1}). Nguồn: ${B._nguon}.`);
  out.push(`
Giả định gd-tech: ${cfg.boss._nguon.replace('[GIẢ ĐỊNH] ', '')} pDu theo kịch bản ${Object.entries(cfg.boss.pDu).map(([k, v]) => `${k} ${vn(v, 1)}`).join(', ')}.
`);
  const s5 = [];
  for (const ket of ['hạ', 'xua']) for (const kb of KB) for (const N of [1, 2, 3, 4]) {
    if (kb !== 'trung bình' && N > 2) continue;
    const rng = rngTu(seed), r = Array.from({ length: Math.max(300, lan / 4) }, () => bossBS1(cfg, N, kb, ket, rng));
    const tg = r.map((x) => x.t), oxyNg = r.map((x) => x.t + x.dmg / N);
    s5.push([ket === 'hạ' ? 'Hạ' : 'Xua đi', kb, N, `${vn(phanVi(tg, 0.5) / 60, 1)} / ${vn(phanVi(tg, 0.9) / 60, 1)}`, vn(tb(r.map((x) => x.dmg / N)), 0), `${vn(phanVi(oxyNg, 0.5), 0)} / ${vn(phanVi(oxyNg, 0.9), 0)}`, pt(phanVi(oxyNg, 0.9) / binh1), pt(r.filter((x) => x.xong).length / r.length)]);
  }
  out.push(bangMd(['Cách kết', 'Kịch bản', 'Số người', 'Phút P50 / P90', 'Oxy mất do đòn mỗi người', 'Oxy mỗi người P50 / P90', 'P90 so với bình chương 1', 'Xong trong 10 phút'], s5));
  return out.join('\n');
}

if (process.argv[1] && basename(process.argv[1]) === 'sim-combat.mjs') {
  const arg = (k, d) => (process.argv.includes(k) ? process.argv[process.argv.indexOf(k) + 1] : d);
  const seed = Number(arg('--seed', 1)), lan = Number(arg('--lan', CFG.lan)), ra = arg('--ra', null);
  const txt = baoCao(CFG, seed, lan);
  if (ra) writeFileSync(ra, txt + '\n');
  console.log(txt);
}
