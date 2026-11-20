#!/usr/bin/env node
// Sim ca cảng (GD-030 mục 3), theo tram-va-cang.md luật 18 tới 70 và bảng Cấu hình lịch. RNG có seed, bước thời gian cố định.
// Chạy: node projects/game-moi/tools/sim-ca-cang.mjs [--seed 1] [--lan 300] [--ra <file.md>]
// Mô hình: mặt cắt thu về một trục ô (xưởng, kho, máy và kệ, bến). Mỗi người lặp: nghĩ, chọn một dòng đơn còn thiếu,
// lấy kiện trên kệ nếu có, không thì lấy hàng ở kho, chế ở xưởng nếu kiện cần, đóng kiện hoặc cho con vào lồng ở máy (một máy, xếp hàng), mang tới bến.
// Đơn ghi theo ID kiện (luật 23). Nhóm hàng đọc từ tram-va-cang.md, cỡ kiện đọc từ vat-pham.md.
// Không mô phỏng: chạy lấy hàng ngoài kho (kho coi như đủ hàng), dòng tùy chọn TA03, dòng ẩn TA06, TA08, Driftlife sổng ăn hàng, giá Tally,
// ca đầu tiên của thế giới (luật 67, lịch cố định 1 tàu).
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rngTu, phanVi, tb, vn, pt, bangMd, docNhomHang, docCoKien, dauChay } from './lib.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const GDD = join(HERE, '..', 'gdd', 'he-thong');
export const CFG = JSON.parse(readFileSync(join(HERE, 'tham-so', 'ca-cang.json'), 'utf8'));
CFG.nhom = docNhomHang(join(GDD, 'tram-va-cang.md'));
CFG.coKien = docCoKien(join(GDD, 'vat-pham.md'));

// Thuộc tính một ID kiện. Dải theo hàng trăm của số ID (1 Gần, 2 Giữa, 3 Xa). Kiện tinh (x11 tới x13) và CGO-141 cần chế ở xưởng.
export function kien(cfg, id) {
  const so = Number(id.slice(4)), duoi = so % 100;
  const g = Object.keys(cfg.nhom).find((h) => cfg.nhom[h].ids.includes(id));
  return {
    id, g, dai: Math.floor(so / 100), co: cfg.coKien[id] || 'Nhỏ',
    tinh: duoi >= 11 && duoi <= 13, che: (duoi >= 11 && duoi <= 13) || id === 'CGO-141',
    dong: g !== 'HC09', giayMay: cfg.giayMayRieng?.[id] ?? (g === 'HC06' ? cfg.dongLong : cfg.dongKien),
  };
}

// Trọng số túi trộn, đổi được từ một chương (trongSoTuChuong: {"4": 3}).
const trongSo = (x, ch) => Object.entries(x.trongSoTuChuong || {}).filter(([c]) => Number(c) <= ch).reduce((w, [, v]) => v, x.trongSo);

// Sinh lịch theo luật 68 tới 70. ck: khóa của cfg.cauHinh.
export function sinhLich(cfg, ck, N, rng) {
  const C = cfg.cauHinh[ck];
  const loai = Object.entries(cfg.tau).filter(([id, x]) => !id.startsWith('_') && x.tu <= C.ch && (x.den ?? 99) >= C.ch && (x.hang || 1) <= C.hang && trongSo(x, C.ch) > 0);
  const tui = [];
  const rut = () => { // túi trộn có trọng số, rút không hoàn lại, hết thì trộn túi mới
    if (!tui.length) for (const [id, x] of loai) for (let i = 0; i < trongSo(x, C.ch); i++) tui.push(id);
    return tui.splice(rng.int(tui.length), 1)[0];
  };
  const moId = (x, g) => cfg.nhom[g].ids.filter((id) => cfg.nhom[g].tu <= C.ch && kien(cfg, id).dai <= Math.min(C.ch, 3) && (!x.chiId?.[g] || x.chiId[g].includes(id)));
  const tau = [];
  let coTinh = false;
  for (let i = 0; i < C.soTau; i++) {
    const id = C.truyen?.[i] ?? rut(), x = cfg.tau[id]; // tàu truyện chiếm chỗ đầu lịch (luật 69)
    const nhom = [...x.nhom, ...Object.entries(x.nhomTuHang || {}).filter(([h]) => Number(h) <= C.hang).flatMap(([, n]) => n)];
    const nguon = [...nhom.map((g) => moId(x, g)), ...(x.themId || []).map((k) => [k])].filter((l) => l.length);
    const soDong = x.dong[0] + rng.int(x.dong[1] - x.dong[0] + 1);
    const dong = (x.dongCoDinh || []).map((kid) => ({ id: kid, can: 1, xong: 0, giu: 0 })), daDung = new Set(x.dongCoDinh || []); // dòng đúng 1 kiện ở mọi N
    for (let d = dong.length, thu = 0; d < soDong && thu < 30; thu++) {
      const kid = rng.chon(rng.chon(nguon));
      if (daDung.has(kid)) continue; // một đơn không có hai dòng cùng ID (luật 23)
      const k = kien(cfg, kid);
      let goc = k.che || k.g === 'HC06' ? 1 : C.kienGoc[0] + rng.int(C.kienGoc[1] - C.kienGoc[0] + 1); // luật 69: dòng cần chế và lồng sống kiện gốc 1
      if (C.ch === 1 && k.tinh) { if (coTinh) continue; coTinh = true; goc = 1; } // chương 1: tối đa một dòng kiện tinh, 1 kiện
      daDung.add(kid); d++;
      const can = C.ch === 1 && k.tinh ? 1 : Math.ceil(goc * (1 + C.heSoKien * (N - 1)));
      dong.push({ id: kid, can, xong: 0, giu: 0 });
    }
    const luu = cfg.luuBen[x.luu];
    const den = Math.min(i * C.gianCach + rng() * cfg.lechGioDen, cfg.caToiDa - luu); // luật 70
    tau.push({ id, den, luu, chao: x.chao || 0, dong, tt: 'sắp', ben: -1 });
  }
  // Luật riêng TA01: mỗi lịch có ít nhất một dòng CGO-121 ở một tàu TA01.
  const t01 = tau.find((x) => x.id === 'TA01');
  if (t01 && !tau.some((x) => x.dong.some((d) => d.id === 'CGO-121')) && !t01.dong.some((d) => d.id === 'CGO-121')) t01.dong[0].id = 'CGO-121';
  return tau;
}

// Một ca. dongSan: 0, 0.5, 1 phần kiện của lịch đặt sẵn trên kệ (trần sức chứa kệ).
export function chayCa(cfg, ck, kb, N, dongSan, rng, cheSan = 0) {
  const K = cfg.kichBan[kb], C = cfg.cauHinh[ck], V = cfg.viTri, dt = cfg.dt;
  const tau = sinhLich(cfg, ck, N, rng);
  const ke = {}, kePhu = {}; let keTong = 0;
  const phu = cfg.coKePhu && C.ch >= cfg.kePhu.tuChuong ? cfg.kePhu.cho : 0; // kệ phụ cạnh bến 2, 3 chỉ chứa kiện đóng sẵn
  const tatCa = tau.flatMap((x) => x.dong.flatMap((d) => Array(d.can).fill(d.id)));
  tatCa.slice(0, Math.min(cfg.keKien + phu, Math.round(tatCa.length * dongSan))).forEach((g, i) => {
    if (i < phu) kePhu[g] = (kePhu[g] || 0) + 1; else { ke[g] = (ke[g] || 0) + 1; keTong++; }
  });
  const ben = Array(C.ben).fill(null);
  // Máy đóng kiện và xưởng có nhiều chỗ chạy song song (C.may, C.xuong). Mỗi chỗ giữ thời điểm rảnh.
  const mayBan = Array(C.may || 1).fill(0), xuongBan = Array(C.xuong || 1).fill(0);
  let mayBanTong = 0, xuongBanTong = 0, benBanTong = 0, conCheSan = cheSan;
  const suCo = [];
  const soSuCo = C.suCo[0] + rng.int(C.suCo[1] - C.suCo[0] + 1) + (N >= cfg.suCoThemTuN && C.suCo[1] > 0 ? 1 : 0);
  for (let i = 0; i < soSuCo; i++) suCo.push({ luc: 30 + rng() * 170, nhan: false });
  const ng = Array.from({ length: N }, () => ({ pos: V.kho, viec: [], cur: null, con: 0, ranh: 0, choMay: 0 }));
  const conLai = (x, t) => (x.tt === 'ở bến' ? x.luu - (t - x.cap) : x.tt === 'chờ' ? cfg.choNgoai - (t - x.den) + x.luu : 1e9);
  const viTriBen = (x) => V.ben[Math.max(0, x.ben)];

  const lapViec = (p, t) => {
    const sc = suCo.find((s) => s.luc <= t && !s.nhan);
    if (sc) { sc.nhan = true; return [{ k: 'đi', toi: V.kho, toc: 1 }, { k: 'chờ', giay: cfg.suCoGiay }]; }
    const xet = tau.filter((x) => x.tt === 'ở bến' || x.tt === 'chờ' || (K.dongTruocTau && x.tt === 'sắp' && x.den - t < 60));
    const dong = xet.flatMap((x) => x.dong.filter((d) => d.can - d.xong - d.giu > 0).map((d) => ({ x, d })));
    if (!dong.length) return null;
    const { x, d } = K.thamLam ? dong.sort((a, b) => conLai(a.x, t) - conLai(b.x, t))[0] : rng.chon(dong);
    d.giu++;
    const k = kien(cfg, d.id), toc = cfg.tocDoMang[k.co];
    const v = [{ k: 'chờ', giay: K.nghi }];
    const viTriPhu = V.ben[1] - 1; // quãng từ kệ phụ tới bến xa bằng máy tới bến 1
    if (kePhu[d.id] > 0 && (x.ben > 0 || !(ke[d.id] > 0))) { kePhu[d.id]--; v.push({ k: 'đi', toi: viTriPhu, toc: 1 }); }
    else if (ke[d.id] > 0) { ke[d.id]--; keTong--; v.push({ k: 'đi', toi: V.may, toc: 1 }); }
    else {
      v.push({ k: 'đi', toi: V.kho, toc: 1 });
      if (k.che && conCheSan > 0) conCheSan--; // hàng đã chế qua đêm (luật 25) nằm sẵn trong kho
      else if (k.che) v.push({ k: 'đi', toi: V.xuong, toc: 1 }, { k: 'xưởng' });
      if (k.dong) v.push({ k: 'đi', toi: V.may, toc: 1 }, { k: 'máy', giay: k.giayMay });
    }
    v.push({ k: 'giao', x, d, toc });
    return v;
  };

  let t = 0;
  for (; t < cfg.caToiDa; t += dt) {
    for (const x of tau) {
      if (x.tt === 'sắp' && t >= x.den) x.tt = 'chờ';
      if (x.tt === 'chờ') {
        const b = ben.indexOf(null);
        if (b >= 0) { ben[b] = x; x.ben = b; x.tt = 'ở bến'; x.cap = t; }
        else if (t - x.den > cfg.choNgoai) x.tt = 'bỏ';
      }
      if (x.tt === 'ở bến') {
        benBanTong += dt;
        const du = x.dong.every((d) => d.xong >= d.can);
        if (du && x.du === undefined) x.du = t;
        if ((du && t - x.du >= cfg.roiSauKhiDu) || t - x.cap >= x.luu) { x.tt = du ? 'rời đủ' : 'rời trượt'; ben[x.ben] = null; }
      }
    }
    if (tau.every((x) => /rời|bỏ/.test(x.tt))) break;
    mayBanTong += (dt * mayBan.filter((b) => b > t).length) / mayBan.length;
    xuongBanTong += (dt * xuongBan.filter((b) => b > t).length) / xuongBan.length;
    for (const p of ng) {
      if (!p.cur) {
        if (!p.viec.length) { const v = lapViec(p, t); if (!v) { p.ranh += dt; continue; } p.viec = v; }
        p.cur = p.viec.shift();
        const a = p.cur;
        if (a.k === 'đi') { p.con = (Math.abs(a.toi - p.pos) * V.giayMoiO) / a.toc; p.pos = a.toi; }
        else if (a.k === 'chờ') p.con = a.giay;
        else if (a.k === 'giao') {
          if (a.x.tt === 'ở bến') { p.con = (Math.abs(viTriBen(a.x) - p.pos) * V.giayMoiO) / a.toc; p.pos = viTriBen(a.x); a.ben = true; }
          else p.con = 0; // tàu chưa cập bến hoặc đã đi: đặt lên kệ ngay tại máy
        } else p.con = 0;
      }
      const a = p.cur;
      if (a.k === 'máy' || a.k === 'xưởng') {
        const cho = a.k === 'máy' ? mayBan : xuongBan, ranh = cho.findIndex((b) => b <= t);
        if (!a.batDau) {
          if (ranh < 0) { p.choMay += dt; continue; }
          const giay = a.k === 'máy' ? a.giay : cfg.cheXuong;
          cho[ranh] = t + giay;
          a.batDau = true; p.con = giay;
        }
      }
      if (a.k === 'giao' && a.ben && a.x.tt === 'ở bến' && t - a.x.cap < a.x.chao) continue; // nghi lễ chào TA04
      p.con -= dt;
      if (p.con > 0) continue;
      if (a.k === 'giao') {
        a.d.giu--;
        if (a.ben && a.x.tt === 'ở bến') {
          const d = a.d.xong < a.d.can ? a.d : a.x.dong.find((y) => y.id === a.d.id && y.xong < y.can);
          if (d) d.xong++; else if (keTong < cfg.keKien) { ke[a.d.id] = (ke[a.d.id] || 0) + 1; keTong++; }
        } else if (keTong < cfg.keKien) { ke[a.d.id] = (ke[a.d.id] || 0) + 1; keTong++; }
      }
      p.cur = null;
    }
  }
  for (const x of tau) if (!/rời|bỏ/.test(x.tt)) x.tt = x.dong.every((d) => d.xong >= d.can) ? 'rời đủ' : 'rời trượt';
  const du = tau.filter((x) => x.tt === 'rời đủ');
  const nhanh = du.filter((x) => x.du !== undefined && x.du - x.cap < x.luu * (1 - cfg.nguongNhanh));
  const hs = (N + 1) / 2; // luật 40: làm tròn lên tích
  return {
    giay: t, soTau: tau.length, du: du.length, nhanh: nhanh.length, bo: tau.filter((x) => x.tt === 'bỏ').length,
    kien: tau.reduce((s, x) => s + x.dong.reduce((a, d) => a + d.xong, 0), 0),
    diem: du.length * Math.ceil(cfg.diemDu * hs) + nhanh.length * Math.ceil(cfg.diemNhanh * hs),
    may: mayBanTong / t, xuong: xuongBanTong / t, ben: benBanTong / (t * C.ben), ranh: tb(ng.map((p) => p.ranh / t)), choMay: tb(ng.map((p) => p.choMay / t)),
  };
}

export function moPhong(cfg, ck, kb, N, dongSan, seed, lan, cheSan = 0) {
  const rng = rngTu(seed);
  const r = Array.from({ length: lan }, () => chayCa(cfg, ck, kb, N, dongSan, rng, cheSan));
  const soTau = r.reduce((s, x) => s + x.soTau, 0);
  return {
    giayTb: tb(r.map((x) => x.giay)), giayP90: phanVi(r.map((x) => x.giay), 0.9),
    du: r.reduce((s, x) => s + x.du, 0) / soTau, nhanh: r.reduce((s, x) => s + x.nhanh, 0) / soTau, bo: r.reduce((s, x) => s + x.bo, 0) / soTau,
    kien: tb(r.map((x) => x.kien)), diem: tb(r.map((x) => x.diem)), may: tb(r.map((x) => x.may)), xuong: tb(r.map((x) => x.xuong)), ben: tb(r.map((x) => x.ben)),
    ranh: tb(r.map((x) => x.ranh)), choMay: tb(r.map((x) => x.choMay)), tran: r.filter((x) => x.giay >= cfg.caToiDa - cfg.dt).length / lan,
  };
}

export function baoCao(cfg, seed, lan) {
  const KB = Object.keys(cfg.kichBan).filter((k) => !k.startsWith('_'));
  const CK = Object.keys(cfg.cauHinh).filter((k) => !k.startsWith('_'));
  const out = [`# Kết quả sim ca cảng\n\nSinh bởi \`tools/sim-ca-cang.mjs\` ${dauChay(cfg)}, seed ${seed}, ${lan} ca mỗi ô. Tham số \`tools/tham-so/ca-cang.json\`.`];
  out.push('\nKho coi như đủ hàng. Không có Tally vì giá kiện do gd-economy đặt: cột "Kiện giao" nhân giá kiện ra Tally một ca. Ca đầu tiên của thế giới (luật 67) không sim.');
  out.push(`\nSố đã chốt: ${cfg._nguon_so}. ${cfg._gio_den}. Cấu hình: ${cfg.cauHinh._nguon}. Tàu: ${cfg.tau._nguon}.`);
  out.push(`\nGiả định gd-tech còn lại: ${cfg._gia_dinh.replace('[GIẢ ĐỊNH] ', '')}. Kịch bản: ${cfg.kichBan._nguon.replace('[GIẢ ĐỊNH] ', '')}.`);
  const rows = [], cache = {};
  for (const ck of CK) for (const kb of KB) for (const N of [1, 2, 3, 4]) for (const ds of [0, 0.5]) {
    if (ds !== 0 && kb !== 'trung bình') continue;
    const r = (cache[`${ck}|${kb}|${N}|${ds}`] = moPhong(cfg, ck, kb, N, ds, seed, lan));
    rows.push([cfg.cauHinh[ck].ten, kb, N, ds === 0 ? '0' : 'một nửa', `${vn(r.giayTb, 0)} / ${vn(r.giayP90, 0)}`, pt(r.du), pt(r.nhanh), pt(r.bo), vn(r.kien), vn(r.diem), pt(r.may), pt(r.ben), pt(r.ranh), pt(r.choMay)]);
  }
  out.push('\n## 1. Theo cấu hình lịch, kịch bản, số người, kiện đóng sẵn\n');
  out.push(bangMd(['Cấu hình', 'Kịch bản', 'Số người', 'Đóng sẵn', 'Giây ca TB / P90', 'Đơn đủ', 'Đơn nhanh', 'Tàu bỏ đi', 'Kiện giao', 'Điểm cảng', 'Máy bận', 'Bến bận', 'Rảnh mỗi người', 'Chờ máy mỗi người'], rows));
  const m = (ck, N, ds = 0) => cache[`${ck}|trung bình|${N}|${ds}`];
  out.push('\n## 2. Bảng gọn, trung bình, 0 đóng sẵn, N = 1 / 2 / 3 / 4\n');
  out.push(bangMd(['Cấu hình', 'Đơn đủ', 'Rảnh mỗi người', 'Kiện giao', 'Điểm cảng', 'Giây ca TB', 'Ca chạm trần 240 giây', 'Máy bận / xưởng bận / chờ máy mỗi người'], CK.map((ck) => [cfg.cauHinh[ck].ten, ...['du', 'ranh'].map((f) => [1, 2, 3, 4].map((N) => pt(m(ck, N)[f])).join(' / ')), [1, 2, 3, 4].map((N) => vn(m(ck, N).kien)).join(' / '), [1, 2, 3, 4].map((N) => vn(m(ck, N).diem)).join(' / '), [1, 2, 3, 4].map((N) => vn(m(ck, N).giayTb, 0)).join(' / '), [1, 2, 3, 4].map((N) => pt(m(ck, N).tran)).join(' / '), [1, 4].map((N) => `N = ${N}: ${pt(m(ck, N).may)} / ${pt(m(ck, N).xuong)} / ${pt(m(ck, N).choMay)}`).join(', ')])));
  out.push(`\n## 2b. Chế qua đêm, trung bình, 0 đóng sẵn: đầu ca có sẵn ${cfg.cheQuaDem} mẻ hàng đã chế (luật 25), N = 1 / 2 / 3 / 4\n`);
  out.push(bangMd(['Cấu hình', 'Đơn đủ', 'Rảnh mỗi người', 'Giây ca TB'], ['2', '3-1ben', '3', '4-2ben', '4'].map((ck) => {
    const r = [1, 2, 3, 4].map((N) => moPhong(cfg, ck, 'trung bình', N, 0, seed, lan, cfg.cheQuaDem));
    return [cfg.cauHinh[ck].ten, r.map((x) => pt(x.du)).join(' / '), r.map((x) => pt(x.ranh)).join(' / '), r.map((x) => vn(x.giayTb, 0)).join(' / ')];
  })));
  out.push('\n## 3. Chương 4 và 5 với 3 bến, kệ phụ của Trưởng cảng, đóng sẵn một nửa, trung bình (mục tiêu của gd-quan)\n');
  const kp = { ...cfg, coKePhu: true };
  out.push(bangMd(['Cấu hình', 'Đơn đủ N = 1 / 2 / 3 / 4', 'Rảnh N = 1 / 2 / 3 / 4', 'Giây ca TB'], ['4', '5'].map((ck) => {
    const r = [1, 2, 3, 4].map((N) => moPhong(kp, ck, 'trung bình', N, 0.5, seed, lan));
    return [cfg.cauHinh[ck].ten, r.map((x) => pt(x.du)).join(' / '), r.map((x) => pt(x.ranh)).join(' / '), r.map((x) => vn(x.giayTb, 0)).join(' / ')];
  })));
  return out.join('\n');
}

if (process.argv[1] && basename(process.argv[1]) === 'sim-ca-cang.mjs') {
  const arg = (k, d) => (process.argv.includes(k) ? process.argv[process.argv.indexOf(k) + 1] : d);
  const seed = Number(arg('--seed', 1)), lan = Number(arg('--lan', CFG.lan)), ra = arg('--ra', null);
  const txt = baoCao(CFG, seed, lan);
  if (ra) writeFileSync(ra, txt + '\n');
  console.log(txt);
}
