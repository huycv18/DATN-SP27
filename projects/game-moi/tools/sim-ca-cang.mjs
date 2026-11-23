#!/usr/bin/env node
// Sim giờ giao thương theo khung Dave (GD-054, đợt 9). Luật: de-xuat-ca-cang-kieu-dave.md mục 2 (D0 tới D13), khung K13, C8, C9.
// Chạy: node projects/game-moi/tools/sim-ca-cang.mjs [--seed 1] [--lan 300] [--ra <file.md>]
// Mô hình: một trục ngang như demo ca-cang-dave.html. Quầy cảng (3 ô) bên trái, cửa neo bên phải. N người chia việc,
// mỗi người nghĩ rồi chọn việc gần nhất chưa ai nhận theo ưu tiên: mang thùng đang cầm tới cửa neo, nhặt thùng ở quầy, bơm khí.
// "Trễ phản xạ" là thời gian chờ trước mỗi lần đi, tính là bận (khớp cách đo của demo). Rảnh = thời gian không có việc nào để làm.
// Luật theo tram-va-cang.md đợt 9: ca 300 giây (luật 34), 50% tàu bật bơm khí ngay lúc cập (luật 28), chọn món theo độ gọi của bậc giá nhân hàng hay gọi (luật 24), ca đầu 2 tàu Loose Bolt (luật 67).
// Không mô phỏng: sự cố, Driftlife sổng, tàu có tên ngoài Loose Bolt và Tàu vội, cửa neo đổi theo Hạng cảng, kho đủ hàng cho danh mục.
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rngTu, tb, vn, pt, bangMd, dauChay } from './lib.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const GDD = join(HERE, '..', 'gdd', 'he-thong');
export const CFG = JSON.parse(readFileSync(join(HERE, 'tham-so', 'ca-cang.json'), 'utf8'));

// Giá thùng, độ gọi và lồng theo loài đọc từ khối giaThung của ca-cang.json (gd-economy giữ, khớp bảng giá kinh-te-tien-trinh.md mục 3.1).
// Lồng sống: mỗi lần giao rút một loài trong giaThung.long. gia của lồng là trung bình để bên ngoài (do-danh-muc.mjs) thay được.
{
  const GT = CFG.giaThung;
  for (const [id, cgo] of Object.entries(GT.cgo)) CFG.hang[id] ??= { cgo };
  for (const [id, it] of Object.entries(CFG.hang)) {
    it.doGoi = GT.doGoi[id] ?? 1;
    if (id === 'long') { it.loai = Object.values(GT.long); it.gia = Math.round(it.loai.reduce((a, b) => a + b, 0) / it.loai.length); }
    else it.gia = GT.thung[id];
  }
}

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
    plan.push({ at: t, idx: i, type: pre || o.chiBolt ? 'bolt' : rng() < wb / (wb + wv) ? 'bolt' : 'voi', pre });
    t += tbCach * (1 - loSong + 2 * loSong * rng());
  }
  if (o.caDau) { plan.length = 0; plan.push({ at: cfg.tauDau, type: 'bolt', pre: false, noPump: true }, { at: Infinity, type: 'bolt', pre: false, forcePump: true }); }
  const S = { t: 0, next: 0, ships: [], docks: Array(cua).fill(null), counter: Array(cua).fill(null), tally: 0, tip: 0, tipBom: 0, diem: 0, served: 0, left: 0, skipped: 0, giaoTheo: {}, kn: [] };
  const ps = Array.from({ length: N }, (_, i) => ({ x: cfg.nguoiX + i * cfg.nguoiCach, carry: null, st: 'idle', timer: 0, job: null, pumpT: 0, idle: 0 }));
  const availTotal = () => Object.values(cat).reduce((a, c) => a + c.avail, 0);
  const pickItem = (type) => {
    const chi = cfg.tau[type].chiGoi; // luật 24: loại tàu có cột chỉ gọi thì chỉ chọn trong các nhóm đó
    const pool = Object.entries(cat).filter(([id, c]) => c.avail > 0 && (!chi || chi.includes(id)));
    if (!pool.length) return null;
    const like = cfg.tau[type].thich;
    let sum = 0; const w = pool.map(([id]) => (sum += (like[id] || 1) * (cfg.hang[id].doGoi ?? 1)));
    const r = rng() * sum;
    return pool[w.findIndex((x) => r < x)][0];
  };
  const rand = (a, b) => a + rng() * (b - a);
  const spawn = (pl) => {
    if (pl.idx === dp.thuTu) { S.tdConLai9 = cat[dp.item]?.avail ?? 0; S.tdBan9 = cat[dp.item]?.sold ?? 0; }
    let item, pre = false;
    if (pl.pre) { if (preReserved) { item = dp.item; pre = true; preReserved = false; } else preKet = 'trượt (không có trong danh mục)'; }
    if (!item) { item = pickItem(pl.type); if (!item) { S.skipped++; if (pl.pre) preKet = 'trượt (không có trong danh mục)'; return; } cat[item].avail--; }
    const ty = cfg.tau[pl.type];
    S.ships.push({ type: pl.type, item, pre, state: 'vao', t: 0, dock: -1, kn: ty.kn, knMax: ty.kn, wait: 0, pumpReq: false, pumpNext: rand(...cfg.bom.sau), noPump: !!pl.noPump, forcePump: !!pl.forcePump, crateMade: false, dead: false });
  };
  const fail = (sh) => {
    sh.state = 'roi'; sh.t = 0; S.left++;
    if (o.caDau && plan[1].at === Infinity) S.next = plan.length; // tàu 1 chưa giao thì tàu 2 không tới
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
    const gia = Math.round((it.loai ? it.loai[Math.floor(rng() * it.loai.length)] : it.gia) * (sh.pre ? dp.heSo : 1));
    const frac = clamp(sh.kn / sh.knMax, 0, 1);
    const love = ty.mePhan && ty.mePhan === sh.item ? cfg.tip.meGap : 1;
    const tip = Math.round(gia * cfg.tip.toiDa * frac * ty.tipX * love);
    S.tally += gia + tip; S.tip += tip; S.served++; S.diem += 1 + (frac >= cfg.diemNguong ? 1 : 0);
    cat[sh.item].sold++; S.giaoTheo[sh.item] = (S.giaoTheo[sh.item] || 0) + 1; S.kn.push(frac);
    if (sh.pre) preKet = 'đạt';
    sh.state = 'roi'; sh.t = 0;
    if (o.caDau && plan[1].at === Infinity) plan[1].at = S.t; // tàu 2 cập khi tay người chơi trống sau lần giao đầu
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
      } else if (sh.state === 'cap') { if (sh.t >= cfg.cap) { sh.state = 'o'; sh.t = 0; sh.pumpReq = !sh.noPump && (sh.forcePump || rng() < cfg.bom.batLucCap); if (sh.noPump) sh.pumpNext = Infinity; } }
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
  return { giay: S.t, served: S.served, left: S.left, skipped: S.skipped, tally: S.tally, tip: S.tip, tipBom: S.tipBom, diem: S.diem, ranh: tb(idles), ranhMax: Math.max(...idles), pre: preKet, knTb: tb(S.kn), giaoTheo: S.giaoTheo, thungCan: Object.values(cat).reduce((a, c) => a + c.qty, 0), tdHet: S.tdConLai9 === 0, tdBan9: S.tdBan9 ?? 0, thungDu: Object.values(cat).reduce((a, c) => a + c.qty - c.sold, 0) };
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
    tran: r.filter((x) => x.giay >= cfg.caToiDa - cfg.dt).length / lan, thungDu: m((x) => x.thungDu), tdHet: r.filter((x) => x.tdHet).length / lan, tdBan9: m((x) => x.tdBan9), p90Giay: r.map((x) => x.giay).sort((a, b) => a - b)[Math.floor(0.9 * lan)],
  };
}

const DM0 = Object.keys(CFG.danhMuc).find((k) => !k.startsWith('_'));
const dat = (N, tre, soTau, danhMuc = DM0, cua, extra = {}) => ({ N, tre, soTau, danhMuc, cua, ...extra });
const dung = (r, m) => r.ranh <= m.ranhToiDa && r.xong >= m.xongToiThieu && r.giay >= m.caMin && r.giay <= m.caMax; // tip không phụ thuộc số tàu nên xét riêng ở cột Tip và mục 6
const NS = [1, 2, 3, 4];
const nhan = (v) => `${vn(v, 0)}`;
const doc = (rel) => JSON.parse(readFileSync(join(HERE, '..', rel), 'utf8'));

export function baoCao(cfg, seed, lan) {
  const M = cfg.muc, out = [], QL = Math.min(lan, cfg.quet.lan);
  const dai = (cfgX, cua) => { // quét số tàu theo N, trả { N: { s: r } }
    const B = {};
    for (const N of NS) for (let s = cfg.quet.tu; s <= cfg.quet.den; s += cfg.quet.buoc) B[`${N}|${s}`] = moPhong(cfgX, dat(N, 2, s, DM0, cua), seed, QL);
    return B;
  };
  const okS = (B, N) => { const ok = []; for (let s = cfg.quet.tu; s <= cfg.quet.den; s += cfg.quet.buoc) if (dung(B[`${N}|${s}`], M)) ok.push(s); return ok; };
  const deXuat = (cfgX, cua, B, N) => { // số tàu lớn nhất trong dải mà trễ 3 giây vẫn còn từ 85% tàu xong
    const ok = okS(B, N);
    const ben = ok.filter((s) => moPhong(cfgX, dat(N, 3, s, DM0, cua), seed, QL).xong >= M.xongToiThieu);
    return { s: ben.length ? ben[ben.length - 1] : ok[0] ?? null, dai: ok.length ? `${ok[0]} tới ${ok[ok.length - 1]}` : 'không có' };
  };
  const loiDai = (B, N) => okS(B, N).length;
  out.push(`# Kết quả sim giờ giao thương khung Dave\n\nSinh bởi \`tools/sim-ca-cang.mjs\` ${dauChay(cfg)}, seed ${seed}, ${lan} ca mỗi ô (quét: ${QL} ca). Tham số \`tools/tham-so/ca-cang.json\`. Luật nguồn: \`tram-va-cang.md\` mục 2 (luật 24, 28, 34, 67) và bảng 2.4, khung K13, C8.`);
  out.push('\nSim thay hẳn bản GD-030 (đơn nhiều dòng, đóng kiện, kệ). Số trong file này là số sim, không phải số chốt. Giá thùng, độ gọi và lồng theo loài đọc từ khối giaThung của gd-economy. Mục tiêu do Lead và gd-quan đặt: rảnh mỗi người tối đa 30% ở trễ 2 giây, ca 180 tới 300 giây, tàu phục vụ xong 85 tới 100% (chương 1), tip kể cả bơm khí 20 tới 30% Tally.');
  out.push(`\nGiả định gd-tech: ${cfg._gia_dinh}`);
  out.push(`\nNguồn số: ${cfg._nguon_so}`);

  // 1. Đối chiếu demo và ca đầu
  const dc = [];
  for (const tre of [1, 2, 3]) { const r = moPhong(cfg, dat(1, tre, 25), seed, lan); dc.push([`${tre} giây`, `${vn(r.served)}/25`, vn(r.left, 2), nhan(r.giay), pt(r.ranh), nhan(r.tally), pt(r.tipPhan), pt(r.bomPhan)]); }
  out.push('\n## 1. Đối chiếu demo (N = 1, 25 tàu, 3 cửa neo, danh mục đủ hàng) theo luật mới\n');
  out.push(bangMd(['Trễ phản xạ', 'Tàu giao xong', 'Tàu rời', 'Ca (giây)', 'Rảnh', 'Tally', 'Tip kể cả bơm khí', 'Bơm khí trong Tally'], dc));
  out.push('\nMốc demo bot 2026-11-20 (luật cũ: giá thùng chia 2,5, bơm khí chỉ sau 10 tới 18 giây, trần ca 240, Tikko đồ Trái Đất 3): trễ 1 giây rảnh 45%, ca 230, Tally 1796, tip 26%. Trễ 2 giây rảnh 24%, ca 231, Tally 1769, tip 25%. Trễ 3 giây rảnh 5%, 24,1/25, ca 235, Tally 1663, tip 23%. Tally khác mốc vì giá thùng mới (gd-economy) và bơm khí lúc cập. Số tàu, ca và rảnh phải gần mốc.');
  out.push('\nCa đầu tiên của thế giới (luật 67): 2 tàu Loose Bolt, danh mục phế liệu, tàu 1 không bơm khí, tàu 2 cập khi tay trống sau lần giao đầu và bật bơm khí ngay, một người:\n');
  const rc = [];
  for (const tre of [1, 2, 3]) { const r = moPhong({ ...cfg, soTauGoc: 2, danhMuc: { ...cfg.danhMuc, caDau: { phe: 5 } }, datTruoc: { ...cfg.datTruoc, item: 'bang' } }, dat(1, tre, 2, 'caDau', cfg.cua, { caDau: true }), seed, lan); rc.push([`${tre} giây`, `${vn(r.served)}/2`, nhan(r.giay), nhan(r.tally), pt(r.tipPhan)]); }
  out.push(bangMd(['Trễ phản xạ', 'Tàu giao xong', 'Ca (giây)', 'Tally', 'Tip kể cả bơm khí'], rc));

  // 2. Quét luật hiện hành (3 cửa, thùng hiện sau 3 giây)
  const B3 = dai(cfg, cfg.cua), c4 = { ...cfg, cua: 4 }, B4 = dai(c4, 4);
  out.push(`\n## 2. Quét số tàu theo N, ${cfg.cua} cửa neo (luật hiện hành), trễ 2 giây, danh mục đủ hàng (kho co giãn theo số tàu)\n`);
  out.push(`Cột "Đạt mục tiêu" là đủ 3 điều kiện: rảnh tối đa ${pt(M.ranhToiDa)} (trung bình mọi người), tàu xong từ ${pt(M.xongToiThieu)}, ca ${M.caMin} tới ${M.caMax} giây. Tip kể cả bơm khí (mục tiêu ${pt(M.tipMin)} tới ${pt(M.tipMax)}) gần như không đổi theo số tàu nên xét riêng, xem cột Tip và mục 6.\n`);
  const rows2 = [];
  for (const N of NS) for (let s = cfg.quet.tu; s <= cfg.quet.den; s += cfg.quet.buoc) {
    const r = B3[`${N}|${s}`];
    rows2.push([N, s, `${vn(r.served)} (${pt(r.xong)})`, vn(r.left, 1), nhan(r.giay), pt(r.ranh), pt(r.ranhMax), nhan(r.tally), pt(r.tipPhan), dung(r, M) ? 'có' : '']);
  }
  out.push(bangMd(['N', 'Số tàu', 'Tàu xong', 'Tàu rời', 'Ca (giây)', 'Rảnh TB', 'Rảnh người rảnh nhất', 'Tally', 'Tip', 'Đạt mục tiêu'], rows2));

  // 4 (tính trước mục 3 để mục 3 so sánh ở cùng số tàu). Đề xuất theo luật hiện hành: cửa neo ít nhất có dải đạt mục tiêu (economy đọc bảng mục 4)
  const de = {}, rows4 = [];
  for (const N of NS) {
    const cua = loiDai(B3, N) ? 3 : 4, cx = cua === 3 ? cfg : c4, B = cua === 3 ? B3 : B4;
    const d = deXuat(cx, cua, B, N);
    de[N] = { s: d.s ?? 50, cua };
    for (const tre of [1, 2, 3]) {
      const r = moPhong(cx, dat(N, tre, de[N].s, DM0, cua), seed, lan);
      rows4.push([N, cua, de[N].s, `${tre} giây`, `${vn(r.served)} (${pt(r.xong)})`, vn(r.left, 1), nhan(r.giay), pt(r.ranh), nhan(r.tally), pt(r.tipPhan), vn(r.diem, 0), pt(r.tran)]);
    }
  }

  // 3. Hai phương án cửa neo so với luật hiện hành, cùng số tàu theo N của mục 4
  out.push('\n## 3. Cửa neo: luật hiện hành và hai phương án (Lead chọn), N = 1 tới 4, trễ 1, 2, 3 giây\n');
  out.push('Hiện hành: 3 cửa neo, thùng ra quầy sau 3 giây. Phương án a: 4 cửa neo cho mọi số người, thùng sau 3 giây. Phương án b: 3 cửa neo, thùng ra quầy sau 1 giây. Cả ba chạy cùng số tàu theo N của mục 4 để so sánh công bằng. Bơm khí theo luật 28 mới.\n');
  const cb = { ...cfg, quay: 1 }, Bb = dai(cb, cfg.cua);
  const PA = [['hiện hành: 3 cửa, thùng 3 giây', cfg, cfg.cua, B3], ['a: 4 cửa, thùng 3 giây', c4, 4, B4], ['b: 3 cửa, thùng 1 giây', cb, cfg.cua, Bb]];
  out.push(bangMd(['Phương án', 'N', 'Dải số tàu đạt mục tiêu (trễ 2 giây)'], PA.flatMap(([ten, , , B]) => NS.map((N) => { const ok = okS(B, N); return [ten, N, ok.length ? `${ok[0]} tới ${ok[ok.length - 1]}` : 'không có']; }))));
  const rows3 = [];
  for (const [ten, cx, cua] of PA) for (const N of NS) for (const tre of [1, 2, 3]) {
    const s = de[N].s, r = moPhong(cx, dat(N, tre, s, DM0, cua), seed, lan);
    rows3.push([ten, N, s, `${tre} giây`, pt(r.ranh), `${vn(r.served)} (${pt(r.xong)})`, nhan(r.giay), nhan(r.tally), pt(r.bomPhan), pt(r.tipPhan), pt(r.tran)]);
  }
  out.push('');
  out.push(bangMd(['Phương án', 'N', 'Số tàu', 'Trễ', 'Rảnh TB', 'Tàu xong', 'Ca (giây)', 'Tally', 'Bơm khí trong Tally', 'Tip kể cả bơm khí', 'Ca chạm trần 300'], rows3));

  out.push('\n## 4. Số tàu đề xuất theo N và độ nhạy với trễ phản xạ\n');
  out.push('Với mỗi N lấy số cửa neo nhỏ nhất (3 rồi 4) có dải đạt mục tiêu ở trễ 2 giây, thùng ra quầy sau 3 giây. Trong dải đó lấy số tàu lớn nhất mà trễ 3 giây vẫn có từ 85% tàu xong. Phương án cửa neo của Lead nằm ở mục 3.\n');
  out.push(bangMd(['N', 'Cửa neo', 'Số tàu', 'Trễ', 'Tàu xong', 'Tàu rời', 'Ca (giây)', 'Rảnh TB', 'Tally', 'Tip', 'Điểm cảng', 'Ca chạm trần 300'], rows4));

  // 5. Sáu kiểu danh mục của gd-economy
  const DMK = doc('sim/economy/tham-so.json').sim.do_danh_muc.kieu;
  out.push('\n## 5. Sáu kiểu danh mục (khóa do_danh_muc của gd-economy), trễ 2 giây, số tàu và cửa neo theo mục 4\n');
  out.push('Số thùng là số cho 1 người nhân số tàu chia 25, làm tròn, tối thiểu 1 (lồng cũng nhân). Cách tính trùng `sim/economy/do-danh-muc.mjs`, nên bảng này phải gần bảng trong `kinh-te-tien-trinh.md` (lệch do lồng rút loài ngẫu nhiên thay cho giá trung bình).\n');
  const rows5 = [], kt = Object.keys(DMK);
  for (const N of NS) {
    const { s, cua } = de[N], cx = { ...cfg, soTauGoc: s, danhMuc: Object.fromEntries(kt.map((k) => [k, Object.fromEntries(Object.entries(DMK[k]).map(([m, q]) => [m, Math.max(1, Math.round((q * s) / 25))]))])) };
    const rs = Object.fromEntries(kt.map((k) => [k, moPhong(cx, dat(N, 2, s, k, cua), seed, lan)]));
    for (const k of kt) {
      const r = rs[k];
      rows5.push([N, s, k, Object.entries(cx.danhMuc[k]).map(([m, q]) => `${m} ${q}`).join(', '), `${vn(r.served)} / ${vn(r.skipped, 1)} không tới`, nhan(r.tally), `${r.tally >= rs['Chuẩn bị kỹ'].tally ? '+' : ''}${vn((r.tally / rs['Chuẩn bị kỹ'].tally - 1) * 100, 1)}%`, pt(r.tipPhan), pt(r.pre)]);
    }
  }
  out.push(bangMd(['N', 'Số tàu', 'Kiểu danh mục', 'Thùng bày', 'Tàu xong / không tới', 'Tally', 'So với Chuẩn bị kỹ', 'Tip', 'Đơn đặt trước đạt'], rows5));

  // 6. Bơm khí
  out.push('\n## 6. Bơm khí lúc cập (luật 28), trễ 2 giây, số tàu và cửa neo theo mục 4\n');
  const rows6 = [];
  for (const [tenb, bom] of [['không bơm khí', { ...cfg.bom, batLucCap: 0, sau: [1e9, 1e9] }], ['luật 28 (50% lúc cập, sau đó 10 tới 18 giây)', cfg.bom], ['tất cả tàu bật lúc cập', { ...cfg.bom, batLucCap: 1 }]]) for (const N of [1, 2, 4]) {
    const { s, cua } = de[N], r = moPhong({ ...cfg, bom }, dat(N, 2, s, DM0, cua), seed, lan);
    rows6.push([tenb, N, s, `${vn(r.bomPhan * 100, 1)}%`, pt(r.tipPhan), pt(r.ranh), `${vn(r.served)} (${pt(r.xong)})`, nhan(r.giay), nhan(r.tally)]);
  }
  for (const N of NS) {
    const { s, cua } = de[N], r = moPhong({ ...cfg, tip: { ...cfg.tip, toiDa: 0.25 } }, dat(N, 2, s, DM0, cua), seed, lan);
    rows6.push(['luật 28 và tip tối đa 25% (thử)', N, s, vn(r.bomPhan * 100, 1) + '%', pt(r.tipPhan), pt(r.ranh), vn(r.served) + ' (' + pt(r.xong) + ')', nhan(r.giay), nhan(r.tally)]);
  }
  out.push(bangMd(['Bơm khí', 'N', 'Số tàu', 'Bơm khí trong Tally', 'Tip kể cả bơm khí', 'Rảnh TB', 'Tàu xong', 'Ca (giây)', 'Tally'], rows6));

  // 7. Tàu vội chỉ gọi băng và khoáng (luật 24)
  out.push('\n## 7. Tàu vội chỉ gọi băng và khoáng (Hạng 2), trễ 2 giây, số tàu và cửa neo theo mục 4\n');
  const K7 = { 'có băng và quặng': { phe: 10, cap: 8, quang: 8, bang: 5, td: 5 }, 'chỉ quặng, không băng': { phe: 10, cap: 8, quang: 8, td: 5 }, 'không băng, không quặng': { phe: 10, cap: 8, td: 5, long: 1 } };
  const rows7 = [];
  for (const N of NS) {
    const { s, cua } = de[N], cx = { ...cfg, danhMuc: K7 }, rs = Object.fromEntries(Object.keys(K7).map((k) => [k, moPhong(cx, dat(N, 2, s, k, cua), seed, lan)]));
    for (const k of Object.keys(K7)) { const r = rs[k]; rows7.push([N, s, k, vn(r.skipped, 1), `${vn(r.served)} (${pt(r.xong)})`, nhan(r.tally), `${r.tally >= rs['có băng và quặng'].tally ? '+' : ''}${vn((r.tally / rs['có băng và quặng'].tally - 1) * 100, 1)}%`, pt(r.tipPhan), pt(r.ranh)]); }
  }
  out.push(bangMd(['N', 'Số tàu', 'Danh mục (số thùng nhân số tàu chia 25)', 'Tàu không tới', 'Tàu xong', 'Tally', 'So với có cả băng và quặng', 'Tip', 'Rảnh TB'], rows7));
  out.push('\nMục tiêu của gd-quan: danh mục thiếu băng và khoáng hụt Tally từ 5% mà ca vẫn trong mục tiêu rảnh. Tàu vội không tới không làm ca ngắn đi (số tàu trong lịch giữ nguyên), nên rảnh có thể tăng.');

  // 8. Đồ Trái Đất và đơn đặt trước (Tikko hệ số 6)
  out.push('\n## 8. Đồ Trái Đất bán hết trước tàu thứ 9 và đơn đặt trước (Tikko đồ Trái Đất hệ số 6), trễ 2 giây\n');
  const rows8 = [];
  for (const N of [1, 2]) for (const td of [2, 3, 5]) {
    const { s, cua } = de[N], cx = { ...cfg, danhMuc: { x: { phe: 10, cap: 8, quang: 8, td } } }, r = moPhong(cx, dat(N, 2, s, 'x', cua), seed, lan);
    const thung = Math.ceil((td * s) / cfg.soTauGoc);
    rows8.push([N, s, thung, pt(r.tdHet), vn(r.tdBan9, 1), pt(r.pre), vn(r.tally, 0)]);
  }
  out.push(bangMd(['N', 'Số tàu', 'Thùng đồ Trái Đất bày (gồm 1 giữ cho đơn đặt trước)', 'Hết thùng thường trước tàu thứ 9', 'Đã bán trước tàu thứ 9', 'Đơn đặt trước đạt', 'Tally'], rows8));
  out.push('\n"Hết thùng thường" là phần ca mà lúc tàu thứ 9 cập không còn thùng đồ Trái Đất nào ngoài thùng giữ cho đơn đặt trước. Đơn đặt trước đạt là tàu thứ 9 nhận được thùng đã giữ.');

  // 9. Hạng 1 chỉ có Loose Bolt
  out.push('\n## 9. Hạng 1 chỉ có Loose Bolt so với có thêm Tàu vội, trễ 2 giây, số tàu và cửa neo theo mục 4\n');
  const rows9 = [];
  for (const N of NS) {
    const { s, cua } = de[N], cx = cua === 3 ? cfg : c4;
    for (const [ten, ex] of [['có Tàu vội', {}], ['chỉ Loose Bolt', { chiBolt: true }]]) {
      const r = moPhong(cx, dat(N, 2, s, DM0, cua, ex), seed, lan);
      rows9.push([N, s, ten, `${vn(r.served)} (${pt(r.xong)})`, nhan(r.giay), pt(r.ranh), nhan(r.tally), pt(r.tipPhan)]);
    }
  }
  out.push(bangMd(['N', 'Số tàu', 'Lịch tàu', 'Tàu xong', 'Ca (giây)', 'Rảnh TB', 'Tally', 'Tip kể cả bơm khí'], rows9));
  return { txt: out.join('\n'), de };
}

if (process.argv[1] && basename(process.argv[1]) === 'sim-ca-cang.mjs') {
  const arg = (k, d) => (process.argv.includes(k) ? process.argv[process.argv.indexOf(k) + 1] : d);
  const seed = Number(arg('--seed', 1)), lan = Number(arg('--lan', CFG.lan)), ra = arg('--ra', null);
  const { txt } = baoCao(CFG, seed, lan);
  if (ra) writeFileSync(ra, txt + '\n');
  console.log(txt);
}
