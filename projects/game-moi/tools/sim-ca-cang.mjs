#!/usr/bin/env node
// Sim ca cảng theo khung Dave (GD-054, đợt 9). Luật: de-xuat-ca-cang-kieu-dave.md mục 2 (D0 tới D13), khung K13, C8, C9.
// Chạy: node projects/game-moi/tools/sim-ca-cang.mjs [--seed 1] [--lan 300] [--ra <file.md>]
// Mô hình: một trục ngang như demo ca-cang-dave.html. Quầy cảng (3 ô) bên trái, cửa neo bên phải. N người chia việc,
// mỗi người nghĩ rồi chọn việc gần nhất chưa ai nhận theo ưu tiên: mang thùng đang cầm tới cửa neo, nhặt thùng ở quầy, bơm khí.
// "Trễ phản xạ" là thời gian chờ trước mỗi lần đi, tính là bận (khớp cách đo của demo). Rảnh = thời gian không có việc nào để làm.
// Không mô phỏng: sự cố, Driftlife sổng, tàu có tên ngoài hai loại của demo, hàng sống theo loài, cửa neo đổi theo Hạng cảng, kho đủ hàng cho danh mục.
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rngTu, tb, vn, pt, bangMd, dauChay } from './lib.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const GDD = join(HERE, '..', 'gdd', 'he-thong');
export const CFG = JSON.parse(readFileSync(join(HERE, 'tham-so', 'ca-cang.json'), 'utf8'));

// Giá thùng = giá kiện chia heSoThung, đọc từ khối gia-kien của kinh-te-tien-trinh.md (gd-economy giữ, sẽ đặt lại giá thùng sau).
export function docGiaKien(file) {
  const m = readFileSync(file, 'utf8').match(/<!--khoi:gia-kien-->([\s\S]*?)(?:<!--\/khoi:gia-kien-->|\n\n|$)/);
  if (!m) throw new Error(`Không thấy khối gia-kien trong ${file}`);
  const out = {};
  for (const l of m[1].split(/\r?\n/)) {
    const c = l.trim().replace(/^\||\|$/g, '').split('|').map((x) => x.trim());
    if (/^CGO-\d{3}$/.test(c[0])) out[c[0]] = Number(c[4]);
  }
  return out;
}
const GIA_KIEN = docGiaKien(join(GDD, 'kinh-te-tien-trinh.md'));
for (const it of Object.values(CFG.hang)) it.gia = it.giaCoDinh ?? Math.round(GIA_KIEN[it.cgo] / CFG.heSoThung);

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// Một ca. o = { N, tre (giây), soTau, danhMuc (tên), cua }. Trả số đo của ca.
export function chayCa(cfg, o, rng) {
  const N = o.N, cua = o.cua ?? cfg.cua, dt = cfg.dt, tre = o.tre;
  const he = o.soTau / cfg.soTauGoc; // kho co giãn theo số tàu để kho không là nút cổ chai
  const slotX = Array.from({ length: cua }, (_, k) => cfg.quayX + (k * cfg.quayDai) / Math.max(1, cua - 1));
  const dockX = Array.from({ length: cua }, (_, k) => cfg.neoX + (k * cfg.neoDai) / Math.max(1, cua - 1));
  const cat = {};
  for (const [id, q] of Object.entries(cfg.danhMuc[o.danhMuc])) { const n = cfg.hang[id].khongChia ? q : Math.ceil(q * he); cat[id] = { qty: n, avail: n, sold: 0 }; }
  const dp = cfg.datTruoc;
  let preReserved = false, preKet = 'chưa tới';
  if (cat[dp.item] && cat[dp.item].avail > 0) { cat[dp.item].avail--; preReserved = true; }
  const plan = [];
  const tbCach = cfg.cuaSoDen / o.soTau, loSong = cfg.lechGian;
  for (let i = 0, t = cfg.tauDau; i < o.soTau; i++) {
    const pre = i === dp.thuTu;
    const wb = cfg.tau.bolt.w, wv = cfg.tau.voi.w;
    plan.push({ at: t, type: pre ? 'bolt' : rng() < wb / (wb + wv) ? 'bolt' : 'voi', pre });
    t += tbCach * (1 - loSong + 2 * loSong * rng());
  }
  const S = { t: 0, next: 0, ships: [], docks: Array(cua).fill(null), counter: Array(cua).fill(null), tally: 0, tip: 0, tipBom: 0, diem: 0, served: 0, left: 0, skipped: 0, giaoTheo: {}, kn: [] };
  const ps = Array.from({ length: N }, (_, i) => ({ x: cfg.nguoiX + i * cfg.nguoiCach, carry: null, st: 'idle', timer: 0, job: null, pumpT: 0, idle: 0 }));
  const availTotal = () => Object.values(cat).reduce((a, c) => a + c.avail, 0);
  const pickItem = (type) => {
    const pool = Object.entries(cat).filter(([, c]) => c.avail > 0);
    if (!pool.length) return null;
    const like = cfg.tau[type].thich;
    let sum = 0; const w = pool.map(([id]) => (sum += like[id] || 1));
    const r = rng() * sum;
    return pool[w.findIndex((x) => r < x)][0];
  };
  const rand = (a, b) => a + rng() * (b - a);
  const spawn = (pl) => {
    let item, pre = false;
    if (pl.pre) { if (preReserved) { item = dp.item; pre = true; preReserved = false; } else preKet = 'trượt (không có trong danh mục)'; }
    if (!item) { item = pickItem(pl.type); if (!item) { S.skipped++; return; } cat[item].avail--; }
    const ty = cfg.tau[pl.type];
    S.ships.push({ type: pl.type, item, pre, state: 'vao', t: 0, dock: -1, kn: ty.kn, knMax: ty.kn, wait: 0, pumpReq: false, pumpNext: rand(...cfg.bom.sau), crateMade: false, dead: false });
  };
  const fail = (sh) => {
    sh.state = 'roi'; sh.t = 0; S.left++;
    const k = sh.dock;
    if (k >= 0 && S.counter[k]?.ship === sh) S.counter[k] = null;
    for (const p of ps) if (p.carry?.ship === sh) p.carry = null;
    if (sh.pre) preKet = 'trượt (tàu bỏ đi)';
    if (cat[sh.item]) cat[sh.item].avail++;
  };
  // Việc hợp lệ của người p, theo ưu tiên. claim = true thì đặt chỗ.
  const chonViec = (p, claim) => {
    if (p.carry) return p.carry.ship.state === 'o' ? { kind: 'dock', k: p.carry.ship.dock } : null;
    let best = null;
    S.counter.forEach((c, k) => { if (c && !c.claim) { const d = Math.abs(p.x - slotX[k]); if (!best || d < best.d) best = { kind: 'pick', k, d }; } });
    if (!best) S.docks.forEach((sh, k) => { if (sh && sh.state === 'o' && sh.pumpReq && !sh.claim) { const d = Math.abs(p.x - dockX[k]); if (!best || d < best.d) best = { kind: 'pump', k, d }; } });
    if (best && claim) { if (best.kind === 'pick') S.counter[best.k].claim = p; else S.docks[best.k].claim = p; }
    return best;
  };
  const huy = (p) => { // bỏ việc đang giữ
    const j = p.job;
    if (j?.kind === 'pick' && S.counter[j.k]?.claim === p) S.counter[j.k].claim = null;
    if (j?.kind === 'pump' && S.docks[j.k]?.claim === p) S.docks[j.k].claim = null;
    p.job = null; p.st = 'idle';
  };
  const hopLe = (p) => {
    const j = p.job; if (!j) return false;
    if (j.kind === 'dock') return !!p.carry && p.carry.ship.state === 'o';
    if (j.kind === 'pick') return S.counter[j.k]?.claim === p && !p.carry;
    const sh = S.docks[j.k]; return !!sh && sh.state === 'o' && sh.pumpReq && sh.claim === p;
  };
  const giao = (sh) => {
    const it = cfg.hang[sh.item], ty = cfg.tau[sh.type];
    const gia = Math.round(it.gia * (sh.pre ? dp.heSo : 1));
    const frac = clamp(sh.kn / sh.knMax, 0, 1);
    const love = ty.mePhan && ty.mePhan === sh.item ? cfg.tip.meGap : 1;
    const tip = Math.round(gia * cfg.tip.toiDa * frac * ty.tipX * love);
    S.tally += gia + tip; S.tip += tip; S.served++; S.diem += 1 + (frac >= cfg.diemNguong ? 1 : 0);
    cat[sh.item].sold++; S.giaoTheo[sh.item] = (S.giaoTheo[sh.item] || 0) + 1; S.kn.push(frac);
    if (sh.pre) preKet = 'đạt';
    sh.state = 'roi'; sh.t = 0;
  };

  let xong = false;
  while (!xong) {
    S.t += dt;
    while (S.next < plan.length && plan[S.next].at <= S.t) spawn(plan[S.next++]);
    for (const sh of S.ships) {
      sh.t += dt;
      if (sh.state === 'vao') { if (sh.t > cfg.vao) { sh.state = 'cho'; sh.t = 0; } }
      else if (sh.state === 'cho') {
        const k = S.docks.indexOf(null);
        if (k >= 0) { S.docks[k] = sh; sh.dock = k; sh.state = 'cap'; sh.t = 0; }
        else { sh.wait += dt; if (sh.wait >= cfg.choNgoai) fail(sh); }
      } else if (sh.state === 'cap') { if (sh.t >= cfg.cap) { sh.state = 'o'; sh.t = 0; } }
      else if (sh.state === 'o') {
        sh.kn -= dt;
        if (!sh.crateMade && sh.t >= cfg.quay) { S.counter[sh.dock] = { ship: sh, claim: null }; sh.crateMade = true; }
        if (!sh.pumpReq && sh.t >= sh.pumpNext) sh.pumpReq = true;
        if (sh.kn <= 0) fail(sh);
      } else if (sh.state === 'roi') {
        if (sh.t > cfg.roi) { if (sh.dock >= 0 && S.docks[sh.dock] === sh) S.docks[sh.dock] = null; sh.dead = true; }
      }
    }
    S.ships = S.ships.filter((s) => !s.dead);

    for (const p of ps) {
      if (p.st === 'idle') {
        if (chonViec(p, false)) { p.st = 'react'; p.timer = tre; } else p.idle += dt;
      }
      if (p.st === 'react') {
        p.timer -= dt;
        if (p.timer <= 0) { const j = chonViec(p, true); if (j) { p.job = j; p.st = 'walk'; } else p.st = 'idle'; }
      } else if (p.st === 'walk') {
        if (!hopLe(p)) { huy(p); continue; }
        const j = p.job, tx = j.kind === 'pick' ? slotX[j.k] : dockX[j.k], d = tx - p.x;
        if (Math.abs(d) < 4) {
          p.x = tx;
          if (j.kind === 'pick') { p.carry = S.counter[j.k]; S.counter[j.k] = null; p.job = null; p.st = 'idle'; }
          else if (j.kind === 'dock') { giao(p.carry.ship); p.carry = null; p.job = null; p.st = 'idle'; }
          else { p.st = 'pump'; p.pumpT = 0; }
        } else p.x += Math.sign(d) * Math.min(Math.abs(d), cfg.tocDo * dt);
      } else if (p.st === 'pump') {
        const sh = S.docks[p.job.k];
        if (!hopLe(p)) { huy(p); continue; }
        p.pumpT += dt;
        if (p.pumpT >= cfg.bom.giu) {
          sh.kn = Math.min(sh.knMax, sh.kn + cfg.bom.hoi * sh.knMax); sh.pumpReq = false; sh.pumpNext = sh.t + rand(...cfg.bom.sau); sh.claim = null;
          S.tally += cfg.bom.tally; S.tip += cfg.bom.tally; S.tipBom += cfg.bom.tally; p.job = null; p.st = 'idle';
        }
      }
    }

    const active = S.ships.some((s) => s.state !== 'roi');
    const noMore = S.next >= plan.length || (availTotal() === 0 && !preReserved);
    if (S.t >= cfg.caToiDa) { for (const sh of S.ships) if (sh.state !== 'roi') fail(sh); xong = true; }
    else if (noMore && !active && S.ships.length === 0) xong = true;
  }
  S.skipped += plan.length - S.next;
  const idles = ps.map((p) => p.idle / S.t);
  return { giay: S.t, served: S.served, left: S.left, skipped: S.skipped, tally: S.tally, tip: S.tip, tipBom: S.tipBom, diem: S.diem, ranh: tb(idles), ranhMax: Math.max(...idles), pre: preKet, knTb: tb(S.kn), giaoTheo: S.giaoTheo, thungCan: Object.values(cat).reduce((a, c) => a + c.qty, 0), thungDu: Object.values(cat).reduce((a, c) => a + c.qty - c.sold, 0) };
}

// Chạy lan ca, seed cố định theo (seed, lần). Trả trung bình.
export function moPhong(cfg, o, seed, lan) {
  const r = [];
  for (let i = 0; i < lan; i++) r.push(chayCa(cfg, o, rngTu(seed * 100003 + i * 7919 + o.N * 31)));
  const m = (f) => tb(r.map(f));
  return {
    giay: m((x) => x.giay), xong: m((x) => x.served / o.soTau), served: m((x) => x.served), left: m((x) => x.left), skipped: m((x) => x.skipped),
    tally: m((x) => x.tally), tip: m((x) => x.tip), tipPhan: m((x) => x.tip) / m((x) => x.tally), bomPhan: m((x) => x.tipBom) / m((x) => x.tally),
    diem: m((x) => x.diem), ranh: m((x) => x.ranh), ranhMax: m((x) => x.ranhMax), pre: r.filter((x) => x.pre === 'đạt').length / lan, knTb: m((x) => x.knTb),
    tran: r.filter((x) => x.giay >= cfg.caToiDa - cfg.dt).length / lan, thungDu: m((x) => x.thungDu), p90Giay: r.map((x) => x.giay).sort((a, b) => a - b)[Math.floor(0.9 * lan)],
  };
}

const DM0 = Object.keys(CFG.danhMuc).find((k) => !k.startsWith('_'));
const dat = (N, tre, soTau, danhMuc = DM0, cua) => ({ N, tre, soTau, danhMuc, cua });
const dung = (r, m) => r.ranh <= m.ranhToiDa && r.xong >= m.xongToiThieu && r.giay >= m.caMin && r.giay <= m.caMax && r.tipPhan >= m.tipMin && r.tipPhan <= m.tipMax;

export function baoCao(cfg, seed, lan) {
  const M = cfg.muc, out = [];
  const nhan = (v) => `${vn(v, 0)}`;
  out.push(`# Kết quả sim ca cảng khung Dave\n\nSinh bởi \`tools/sim-ca-cang.mjs\` ${dauChay(cfg)}, seed ${seed}, ${lan} ca mỗi ô. Tham số \`tools/tham-so/ca-cang.json\`. Luật nguồn: \`de-xuat-ca-cang-kieu-dave.md\` mục 2, khung K13, C8.`);
  out.push('\nSim thay hẳn bản GD-030 (đơn nhiều dòng, đóng kiện, kệ). Số trong file này là số sim, không phải số chốt. Giá thùng là giá kiện chia 2,5, gd-economy sẽ đặt lại. Mục tiêu do Lead và gd-quan đặt: rảnh mỗi người tối đa 30% ở trễ 2 giây, ca 180 tới 300 giây, tàu phục vụ xong 85 tới 100% (chương 1), tip 20 tới 30% Tally.');
  out.push(`\nGiả định gd-tech: ${cfg._gia_dinh}`);
  out.push(`\nNguồn số: ${cfg._nguon_so}`);

  // 1. Đối chiếu demo
  const dc = [];
  for (const tre of [1, 2, 3]) { const r = moPhong(cfg, dat(1, tre, 25), seed, lan); dc.push([`${tre} giây`, `${vn(r.served)}/25`, vn(r.left, 2), nhan(r.giay), pt(r.ranh), nhan(r.tally), pt(r.tipPhan)]); }
  out.push('\n## 1. Đối chiếu demo (N = 1, 25 tàu, danh mục đủ hàng)\n');
  out.push(bangMd(['Trễ phản xạ', 'Tàu giao xong', 'Tàu rời', 'Ca (giây)', 'Rảnh', 'Tally', 'Tip trong Tally'], dc));
  out.push('\nMốc demo bot 2026-11-20 (de-xuat mục 4): trễ 1 giây rảnh 45%, ca 230, Tally 1796, tip 26%. Trễ 2 giây rảnh 24%, ca 231, Tally 1769, tip 25%. Trễ 3 giây rảnh 5%, 24,1/25, ca 235, Tally 1663, tip 23%.');

  // 2. Quét số tàu theo N ở trễ 2 giây, 3 cửa neo (luật D3)
  const quet = (cua) => {
    const bang = {};
    for (const N of [1, 2, 3, 4]) for (let s = cfg.quet.tu; s <= cfg.quet.den; s += cfg.quet.buoc) bang[`${N}|${s}`] = moPhong(cfg, dat(N, 2, s, DM0, cua), seed, Math.min(lan, cfg.quet.lan));
    return bang;
  };
  const B3 = quet(cfg.cua);
  const soTauMuc = (B, N) => { const ok = []; for (let s = cfg.quet.tu; s <= cfg.quet.den; s += cfg.quet.buoc) if (dung(B[`${N}|${s}`], M)) ok.push(s); return ok; };
  out.push(`\n## 2. Quét số tàu theo N, ${cfg.cua} cửa neo, trễ 2 giây, danh mục đủ hàng (kho co giãn theo số tàu)\n`);
  out.push(`Cột "Đạt mục tiêu" là có đủ 4 điều kiện: rảnh tối đa ${pt(M.ranhToiDa)} (trung bình mọi người), tàu xong từ ${pt(M.xongToiThieu)}, ca ${M.caMin} tới ${M.caMax} giây, tip ${pt(M.tipMin)} tới ${pt(M.tipMax)}.\n`);
  const rows2 = [];
  for (const N of [1, 2, 3, 4]) for (let s = cfg.quet.tu; s <= cfg.quet.den; s += cfg.quet.buoc) {
    const r = B3[`${N}|${s}`];
    rows2.push([N, s, `${vn(r.served)} (${pt(r.xong)})`, vn(r.left, 1), nhan(r.giay), pt(r.ranh), pt(r.ranhMax), nhan(r.tally), pt(r.tipPhan), dung(r, M) ? 'có' : '']);
  }
  out.push(bangMd(['N', 'Số tàu', 'Tàu xong', 'Tàu rời', 'Ca (giây)', 'Rảnh TB', 'Rảnh người rảnh nhất', 'Tally', 'Tip', 'Đạt mục tiêu'], rows2));

  // 3. Cần bao nhiêu cửa neo
  out.push('\n## 3. Cửa neo cần cho N (trễ 2 giây, dải số tàu đạt mục tiêu)\n');
  const rows3 = [], choN = {}; choN[cfg.cua] = B3;
  for (const cua of cfg.quet.cua) {
    const B = choN[cua] || (choN[cua] = quet(cua));
    for (const N of [1, 2, 3, 4]) { const ok = soTauMuc(B, N); rows3.push([cua, N, ok.length ? `${ok[0]} tới ${ok[ok.length - 1]}` : 'không có']); }
  }
  out.push(bangMd(['Cửa neo', 'N', 'Số tàu đạt mục tiêu'], rows3));
  // Giữ 3 cửa nhưng rút thời gian thùng hiện và tàu rời giữ cửa
  const rowsQ = [];
  for (const [q, ro] of [[3, 1.3], [2, 1.3], [1, 1.3], [1, 0.5]]) for (const N of [3, 4]) {
    const c2 = { ...cfg, quay: q, roi: ro }, ok = [];
    for (let s = 45; s <= 75; s += 5) if (dung(moPhong(c2, dat(N, 2, s), seed, Math.min(lan, cfg.quet.lan)), M)) ok.push(s);
    rowsQ.push([q, vn(ro, 1), N, ok.length ? `${ok[0]} tới ${ok[ok.length - 1]}` : 'không có']);
  }
  out.push(`\nGiữ ${cfg.cua} cửa neo, đổi thời gian thùng hiện ở quầy (mặc định ${cfg.quay} giây) và thời gian tàu rời giữ cửa (mặc định ${cfg.roi} giây), quét số tàu 45 tới 75:\n`);
  out.push(bangMd(['Thùng hiện sau (giây)', 'Tàu rời giữ cửa (giây)', 'N', 'Số tàu đạt mục tiêu'], rowsQ));

  // 4. Đề xuất số tàu theo N: cửa neo ít nhất có dải đạt mục tiêu, số tàu lớn nhất còn giữ 85% xong ở trễ 3 giây
  out.push('\n## 4. Số tàu đề xuất theo N và độ nhạy với trễ phản xạ\n');
  out.push('Với mỗi N lấy số cửa neo nhỏ nhất có dải đạt mục tiêu ở mục 3. Trong dải đó lấy số tàu lớn nhất mà người chơi trễ 3 giây vẫn có từ 85% tàu xong (để không bị phạt khi chậm hơn).\n');
  const de = {}, rows4 = [];
  for (const N of [1, 2, 3, 4]) {
    const cua = cfg.quet.cua.find((c) => soTauMuc(choN[c], N).length) ?? cfg.quet.cua[cfg.quet.cua.length - 1];
    const ok = soTauMuc(choN[cua], N);
    const ben = ok.filter((s) => moPhong(cfg, dat(N, 3, s, DM0, cua), seed, Math.min(lan, cfg.quet.lan)).xong >= M.xongToiThieu);
    const s = ben.length ? ben[ben.length - 1] : ok[0] ?? 50;
    de[N] = { s, cua };
    for (const tre of [1, 2, 3]) {
      const r = moPhong(cfg, dat(N, tre, s, DM0, cua), seed, lan);
      rows4.push([N, cua, s, `${tre} giây`, `${vn(r.served)} (${pt(r.xong)})`, vn(r.left, 1), nhan(r.giay), pt(r.ranh), nhan(r.tally), pt(r.tipPhan), vn(r.diem, 0), pt(r.tran)]);
    }
  }
  out.push(bangMd(['N', 'Cửa neo', 'Số tàu', 'Trễ', 'Tàu xong', 'Tàu rời', 'Ca (giây)', 'Rảnh TB', 'Tally', 'Tip', 'Điểm cảng', 'Ca chạm trần 240'], rows4));

  // 5. Ba kiểu danh mục
  out.push('\n## 5. Ba kiểu danh mục, trễ 2 giây, số tàu và cửa neo đề xuất theo N (lập danh mục có tạo chênh lệch không)\n');
  const rows5 = [], kieu = Object.keys(cfg.danhMuc).filter((k) => !k.startsWith('_'));
  for (const N of [1, 2, 3, 4]) {
    const { s, cua } = de[N], goc = moPhong(cfg, dat(N, 2, s, kieu[0], cua), seed, lan);
    for (const k of kieu) {
      const r = moPhong(cfg, dat(N, 2, s, k, cua), seed, lan);
      rows5.push([N, s, k, `${vn(r.served)} / ${vn(r.skipped, 1)} không tới`, nhan(r.giay), nhan(r.tally), `${r.tally >= goc.tally ? '+' : ''}${vn((r.tally / goc.tally - 1) * 100, 1)}%`, pt(r.pre)]);
    }
  }
  out.push(bangMd(['N', 'Số tàu', 'Danh mục', 'Tàu xong / không tới', 'Ca (giây)', 'Tally', 'So với đủ hàng', 'Đơn đặt trước đạt'], rows5));
  out.push(`\nSố trong kho và kiểu danh mục: ${cfg._danh_muc}`);

  // 6. Bơm khí có xảy ra không
  out.push('\n## 6. Bơm khí (việc phụ D6) có xảy ra không, trễ 2 giây, số tàu và cửa neo đề xuất\n');
  const rows6 = [];
  for (const sau of [[10, 18], [6, 10], [4, 7]]) for (const N of [1, 2, 4]) {
    const { s, cua } = de[N], r = moPhong({ ...cfg, bom: { ...cfg.bom, sau } }, dat(N, 2, s, DM0, cua), seed, lan);
    rows6.push([`${sau[0]} tới ${sau[1]}`, N, s, `${vn(r.bomPhan * 100, 1)}%`, vn(r.tally / s, 1), pt(r.ranh), `${vn(r.served)} (${pt(r.xong)})`, nhan(r.tally)]);
  }
  out.push(bangMd(['Bơm khí bật sau (giây ở cửa neo)', 'N', 'Số tàu', 'Bơm khí trong Tally', 'Tally mỗi tàu', 'Rảnh TB', 'Tàu xong', 'Tally'], rows6));
  out.push('\nBơm khí chỉ là tip, không phải việc bắt buộc. Nếu tỉ lệ gần 0 thì D6 chỉ còn là trang trí khi người chơi giao kịp.');
  return { txt: out.join('\n'), de };
}

if (process.argv[1] && basename(process.argv[1]) === 'sim-ca-cang.mjs') {
  const arg = (k, d) => (process.argv.includes(k) ? process.argv[process.argv.indexOf(k) + 1] : d);
  const seed = Number(arg('--seed', 1)), lan = Number(arg('--lan', CFG.lan)), ra = arg('--ra', null);
  const { txt } = baoCao(CFG, seed, lan);
  if (ra) writeFileSync(ra, txt + '\n');
  console.log(txt);
}
