#!/usr/bin/env node
// Sim chuyến ra ngoài (GD-030 mục 2). RNG có seed, tham số ở tham-so/chuyen.json, điểm khai thác đọc từ vat-pham.md.
// Chạy: node projects/game-moi/tools/sim-chuyen.mjs [--seed 1] [--lan 2000] [--ra <file.md>]
// Mô hình: map tổng thu về các cột của dải đích. Mỗi người bay ra mép trong của dải, làm từng cột từ trong ra ngoài,
// lấy node của mình, quay về khi túi đầy hoặc Oxy chạm vạch quay về, chọn cửa khí hoặc Recall Beacon đã thấy rẻ hơn.
// Không mô phỏng: săn hay bắt Driftlife để lấy mẫu, map nhánh, vớt người, tìm manh mối (chỉ đo phần nhặt tài nguyên).
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rngTu, phanVi, tb, vn, pt, soVn, docKhoi, bangMd, docHeSoDai, dauChay } from './lib.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
export const CFG = JSON.parse(readFileSync(join(HERE, 'tham-so', 'chuyen.json'), 'utf8'));
for (const [d, a] of Object.entries(docHeSoDai(join(HERE, '..', 'gdd', 'he-thong', 'map.md')))) CFG.dai[d].kHeSo = a; // a của k(N) theo dải, nguồn map.md 3.8
export const NODE = Object.fromEntries(docKhoi(join(HERE, '..', 'gdd', 'he-thong', 'vat-pham.md'), 'NODE').map((r) => [r['SLV ID'], {
  id: r['SLV ID'], gtd: soVn(r['GTĐ kỳ vọng']), khoi: soVn(r['Khối kỳ vọng']), giay: soVn(r['Giây (bậc 1)']), cung: soVn(r['Độ cứng hoặc cấp khóa']),
}]));

const kCua = (N, a) => 1 + a * (N - 1);

// Driftlife: số mỗi trận lấy từ sim combat (một người trung bình), GTĐ và nguyên liệu từ khối SPECIES. Tính một lần lúc nạp.
import * as CB from './sim-combat.mjs';
const SPEC = Object.fromEntries(docKhoi(join(HERE, '..', 'gdd', 'he-thong', 'vat-pham.md'), 'SPECIES').map((r) => [r['Mã gd-combat'], r]));
export const DRIFT = CB.docLoai().map((s) => {
  const r = SPEC[s.id] || {}, lan = CFG.driftlife.lanSimCombat;
  const nls = /(\d+) x SMP/.exec(r['Nguyên liệu chung mỗi lần hạ'] || '');
  const ha = CB.moPhong(CB.CFG, s, 1, 'trung bình', 'hạ', 1, lan), bat = CB.moPhong(CB.CFG, s, 1, 'trung bình', 'bắt', 1, lan);
  return {
    id: s.id, dai: s.dai, nhan: s.nhan, co: s.co, cach: CB.cachBat(s)?.kieu || null, ha, bat,
    gHa: soVn(r['E[GTĐ] khi hạ']) || 0, gBat: soVn(r['GTĐ mẫu bắt']) || 0,
    khoiHa: (nls ? +nls[1] : 1) + (soVn(r['Xác suất đặc sản']) || 0), // mỗi đơn vị mẫu 1 Khối
  };
});

// Sinh một map: mảng cột của dải đích, mỗi cột có node đã chia cho từng người, khe Driftlife chủ động, số ô hazard, beacon.
export function sinhMap(cfg, ch, N, a, rng) {
  const C = cfg.chuong[ch], D = cfg.dai[C.dai], k = kCua(N, a);
  const loai = Object.entries(cfg.manh).filter(([t]) => !t.startsWith('_'));
  const cot = [];
  for (let c = 0; c < D.cot; c++) {
    const ngoai = c >= D.cot / 2;
    const col = { nodes: Array.from({ length: N }, () => []), drift: Array(N).fill(0), sinh: Array.from({ length: N }, () => []), haz: 0, beacon: false, c };
    const loaiDai = DRIFT.filter((s) => s.dai === C.dai && (ch !== '1' || s.nhan === 'MVP'));
    for (let h = 0; h < cfg.khongGian.hang; h++) {
      let t;
      do { let r = rng(); t = loai.find(([, m]) => (r -= m.tiLe) < 0)?.[0] ?? loai[0][0]; } while (t === 'Thưởng' && !ngoai);
      const m = cfg.manh[t];
      for (let i = 0; i < m.spR; i++) if (rng() < Math.min(1, D.rR * k)) col.nodes[rng.int(N)].push(NODE[rng.chon(m.slv[C.dai])]);
      for (let i = 0; i < m.spD; i++) if (rng() < Math.min(1, D.rD * k) && loaiDai.length) {
        const ai = rng.int(N), aggr = rng() < D.phanTanCong;
        col.sinh[ai].push({ s: rng.chon(loaiDai), aggr });
        if (aggr) col.drift[ai]++;
      }
      if (rng() < D.hazard) col.haz++;
    }
    cot.push(col);
  }
  // Beacon: cách nhau tối thiểu 2 cột (map.md 3.6), thử ngẫu nhiên.
  for (let b = 0, thu = 0; b < D.beacon && thu < 50; thu++) {
    const c = rng.int(D.cot);
    if (cot.every((x) => !x.beacon || Math.abs(x.c - c) >= 2)) { cot[c].beacon = true; b++; }
  }
  return cot;
}

// Một người làm một chuyến trên map đã sinh. Trả {t, gtd, khoi, ket: 'cửa khí'|'beacon'|'kéo về', cuu, lyDo}.
export function chayNguoi(cfg, ch, kb, N, map, p, rng) {
  const C = cfg.chuong[ch], D = cfg.dai[C.dai], K = cfg.kichBan[kb], G = cfg.khongGian, O = cfg.oxy;
  const bac = cfg.dungCu.heSoBac[C.dungCu];
  const BO = cfg.binhOxy || { soMang: 0 };
  let binh = BO.soMang, t = 0, oxy = C.binh, khoi = binh * (BO.khoi || 0), gtd = 0, quy = 0, cuu = false, lyDo = 'Oxy', long = 0, gtdDrift = 0, soBat = 0, soHa = 0;
  const tai = () => O.phatTaiToiDa * Math.max(0, (khoi / C.tui - O.nguongTai) / (1 - O.nguongTai));
  const v = () => G.tocDoHieuDung * C.vmax * (1 - tai());
  const hao = () => O.haoNen * (1 + tai());
  let x = D.tu, daThay = [];
  // Trừ Oxy theo thời gian hoặc đòn. Về 0 thì ngạt: có đồng đội thì có thể được cứu, không thì bị kéo về.
  const ngat = () => {
    const pCuu = 1 - (1 - cfg.coop.pCuuMoiDongDoi) ** (N - 1);
    if (rng() < pCuu) { t += O.ngat / 2; oxy = O.oxyThoatNgat; cuu = true; return false; }
    t += O.ngat; return true;
  };
  const tieu = (giay, dmg = 0) => {
    t += giay; oxy -= giay * hao() + dmg;
    if (oxy <= 0 && duocDung()) { binh--; khoi -= BO.khoi; oxy += hoiThat(); } // còn Bình Oxy nhỏ thì dùng trước khi ngạt
    return oxy <= 0 ? ngat() : false;
  };
  // Chạm vạch quay về mà còn bình thì dùng bình (1,5 giây) và đi tiếp. Trả true khi vẫn phải quay về.
  const phaiVe = (chiPhi) => {
    while (oxy - chiPhi < vach() && duocDung()) { binh--; khoi -= BO.khoi; t += BO.giayDung; oxy += hoiThat() - BO.giayDung * hao(); dungBinh++; }
    return oxy - chiPhi < vach();
  };
  let dungBinh = 0, daHoi = 0;
  // K26: Oxy hồi từ vật tiêu hao một chuyến không quá tranK26 dung lượng bình, không hồi vượt dung lượng
  const tranHoi = (BO.tranK26 ?? 1) * C.binh;
  function duocDung() { return binh > 0 && daHoi < tranHoi && oxy < C.binh; }
  function hoiThat() { const h = Math.max(0, Math.min(BO.hoi, tranHoi - daHoi, C.binh - Math.max(oxy, 0))); daHoi += h; return h; }
  const keoVe = () => ({ t, gtd: quy * cfg.coop.giuKhiBiKeo, khoi: 0, ket: 'kéo về', cuu, lyDo, gtdTruocKeo: gtd, gtdDrift: 0, soBat, soHa, daHoi });
  const giaVe = () => {
    const cuaKhi = x / v();
    const bc = daThay.map((xb) => Math.abs(x - xb) / v() + O.giuBeacon);
    const best = Math.min(cuaKhi, ...bc);
    return { giay: best, beacon: best < cuaKhi, xDich: best < cuaKhi ? daThay[bc.indexOf(best)] : 0 };
  };
  const vach = () => Math.max(K.hud * 0.15 * C.binh, K.vachVe * (giaVe().giay * hao() + G.duPhongVe));

  if (tieu((D.tu * G.duongVong) / v())) return keoVe();
  outer: for (const col of map) {
    // Vào cột: bay ngang một cột (nửa cột với cột đầu), qua các ô hazard của cột.
    const vao = ((col.c === 0 ? 0.5 : 1) * G.rongCot * G.duongVong) / v();
    if (phaiVe(vao * hao())) break;
    if (tieu(vao)) return keoVe();
    x = D.tu + (col.c + 0.5) * G.rongCot;
    if (col.beacon) daThay.push(x);
    for (let h = 0; h < col.haz; h++) if (rng() < K.pTrung && tieu(0, D.dmgHazard)) return keoVe();
    // Driftlife của người này ở cột: giao chiến với xác suất K.danh (bắt nếu được, không thì hạ), con chủ động không đánh thì gặp đòn.
    const sinh = col.sinh ? col.sinh[p] : Array.from({ length: col.drift[p] }, () => ({ s: null, aggr: true }));
    for (const { s, aggr } of sinh) {
      if (s && rng() < (K.danh || 0)) {
        const batDuoc = s.cach && Number(ch) >= cfg.driftlife.moBat[s.cach] && s.bat && (s.co !== 'S' || long < cfg.driftlife.longMau);
        const tr = batDuoc ? s.bat : s.ha;
        const khoiCan = batDuoc ? (s.co === 'L' ? 1 : 0) : s.khoiHa;
        if (tr && khoi + khoiCan <= C.tui && !phaiVe(tr.p50 * hao() + tr.oxy)) {
          if (tieu(tr.p50, tr.oxy)) return keoVe();
          khoi += khoiCan; const g = batDuoc ? s.gBat : s.gHa; gtd += g; gtdDrift += g; quy = Math.max(quy, g);
          if (batDuoc && s.co === 'S') long++;
          if (batDuoc) soBat++; else soHa++;
          continue;
        }
      }
      if (!aggr || rng() >= cfg.gapDrift.pGap) continue;
      for (let d = 0; d < cfg.gapDrift.soDon; d++) if (rng() < K.pTrung && tieu(0, D.dmgDrift)) return keoVe();
    }
    let nodes = [...col.nodes[p]];
    if (K.chonLoc) nodes.sort((a, b) => b.gtd / b.khoi - a.gtd / a.khoi);
    const dientich = G.rongCot * G.caoManh * G.hang;
    const dnn = Math.max(2, 0.5 * Math.sqrt(dientich / Math.max(1, nodes.length)));
    for (const n of nodes) {
      if (C.tui - khoi < 1) { lyDo = 'Túi đầy'; break outer; }
      if (khoi + n.khoi > C.tui) continue;
      if (K.chonLoc && khoi > C.tui / 2 && n.gtd / n.khoi < 1.05) continue;
      const giay = dnn / v() + (n.giay / bac) * (n.cung > C.dungCu ? cfg.dungCu.chamKhiThieuBac : 1);
      if (phaiVe(giay * hao())) break outer;
      if (tieu(giay)) return keoVe();
      khoi += n.khoi; gtd += n.gtd; quy = Math.max(quy, n.gtd);
    }
    if (C.tui - khoi < 1) { lyDo = 'Túi đầy'; break; }
    if (col === map[map.length - 1]) lyDo = 'Hết dải';
  }
  if (khoi >= 0.9 * C.tui) lyDo = 'Túi đầy'; // không node nào còn vừa túi cũng tính là túi đầy
  // Về: qua ô hazard nằm trên đường (mỗi ô hazard một phần ba khả năng nằm trên đường thẳng về).
  const ve = giaVe();
  const cotQua = map.filter((c) => (D.tu + (c.c + 0.5) * G.rongCot) <= x && (D.tu + (c.c + 0.5) * G.rongCot) >= ve.xDich);
  for (const c of cotQua) for (let h = 0; h < c.haz; h++) if (rng() < 1 / 3 && rng() < K.pTrung && tieu(0, D.dmgHazard)) return keoVe();
  // Bay về, nếu Oxy cạn giữa đường thì ngạt tại chỗ đó.
  const conCan = ve.giay * hao();
  if (oxy - conCan <= 0) {
    t += oxy / hao(); oxy = 0;
    if (ngat()) return keoVe();
    t += (ve.giay * (1 - 0)) / 2; // được cứu ở khoảng giữa đường, bay nốt nửa còn lại
  } else { t += ve.giay; oxy -= conCan; }
  return { t, gtd, khoi, ket: ve.beacon ? 'beacon' : 'cửa khí', cuu, lyDo, gtdTruocKeo: gtd, gtdDrift, soBat, soHa, daHoi };
}

// Một ô kết quả: ch, kịch bản, N, hệ số k. Cùng seed cho cùng kết quả.
export function moPhong(cfg, ch, kb, N, a, seed, lan) {
  const rng = rngTu(seed);
  const tg = [], gtdNguoi = [], gtdNhom = [], dayTui = [], gtdDrift = [], soBat = [], soHa = [];
  let keo = 0, cuu = 0, beacon = 0, tuiDay = 0, nguoi = 0;
  for (let i = 0; i < lan; i++) {
    const map = sinhMap(cfg, ch, N, a, rng);
    const kq = Array.from({ length: N }, (_, p) => chayNguoi(cfg, ch, kb, N, map, p, rng));
    tg.push(Math.max(...kq.map((r) => r.t)));
    gtdNhom.push(kq.reduce((s, r) => s + r.gtd, 0));
    for (const r of kq) {
      nguoi++; gtdNguoi.push(r.gtd); dayTui.push(r.khoi / cfg.chuong[ch].tui); gtdDrift.push(r.gtdDrift); soBat.push(r.soBat); soHa.push(r.soHa);
      if (r.ket === 'kéo về') keo++; else if (r.ket === 'beacon') beacon++;
      if (r.cuu) cuu++;
      if (r.lyDo === 'Túi đầy') tuiDay++;
    }
  }
  return {
    ch, kb, N, a, phut: { p10: phanVi(tg, 0.1) / 60, p50: phanVi(tg, 0.5) / 60, p90: phanVi(tg, 0.9) / 60 },
    gtdNguoi: tb(gtdNguoi), gtdNhom: tb(gtdNhom), dayTui: tb(dayTui), gtdDrift: tb(gtdDrift), soBat: tb(soBat), soHa: tb(soHa),
    keo: keo / nguoi, cuu: cuu / nguoi, beacon: beacon / nguoi, tuiDay: tuiDay / nguoi,
  };
}

// Tìm hệ số k nhỏ nhất (bước 0,01) để mỗi người nhóm 4 nhặt từ mucTieu so với một mình.
// Bản sao cfg với túi một chương nhân hệ số (đo độ nhạy, không đổi file tham số).
export const voiTui = (cfg, ch, heSo) => ({ ...cfg, chuong: { ...cfg.chuong, [ch]: { ...cfg.chuong[ch], tui: cfg.chuong[ch].tui * heSo } } });

export function timK(cfg, ch, kb, mucTieu, seed, lan) {
  const solo = moPhong(cfg, ch, kb, 1, 0, seed, lan).gtdNguoi;
  for (let a = 0.2; a <= 1.5001; a += 0.01) {
    const r = moPhong(cfg, ch, kb, 4, a, seed, lan).gtdNguoi / solo;
    if (r >= mucTieu) return { a: Math.round(a * 100) / 100, tiLe: r };
  }
  return { a: NaN, tiLe: NaN };
}

export function baoCao(cfg, seed, lan) {
  const KB = Object.keys(cfg.kichBan).filter((k) => !k.startsWith('_'));
  const aOf = (ch) => cfg.dai[cfg.chuong[ch].dai].kHeSo ?? cfg.coop.kHeSo; // k(N) theo dải (map.md 3.8)
  const out = [];
  out.push(`# Kết quả sim chuyến\n\nSinh bởi \`tools/sim-chuyen.mjs\` ${dauChay(cfg)}, seed ${seed}, ${lan} chuyến mỗi ô. Tham số \`tools/tham-so/chuyen.json\`, điểm khai thác từ \`vat-pham.md\` khối NODE.`);
  out.push('\nĐo phần nhặt tài nguyên và giao chiến với Driftlife ở map tổng. Chưa có map nhánh, vớt người, manh mối. GTĐ là đơn vị giá trị tương đối của gd-items, chưa quy ra Tally. GTĐ Driftlife là gộp, chưa trừ vật tiêu hao (xem sim combat bảng 2).');
  out.push('\nGiả định gd-tech tự đặt (chưa có trong GDD):\n');
  for (const [k, v] of Object.entries(cfg)) {
    const n = typeof v === 'object' && v && (v._nguon || '');
    if (n && n.includes('GIẢ ĐỊNH')) out.push(`- ${k}: ${n}`);
  }
  const rows = [];
  const cache = {};
  for (const ch of ['1', '2', '3', '4', '5']) for (const kb of KB) {
    const solo = (cache[`${ch}|${kb}`] = moPhong(cfg, ch, kb, 1, aOf(ch), seed, lan));
    for (const N of [1, 2, 3, 4]) {
      const r = N === 1 ? solo : moPhong(cfg, ch, kb, N, aOf(ch), seed, lan);
      rows.push([ch, cfg.chuong[ch].dai, cfg.chuong[ch].binh, kb, N, `${vn(r.phut.p50)} (${vn(r.phut.p10)} đến ${vn(r.phut.p90)})`,
        vn(r.gtdNguoi), pt(r.gtdDrift / r.gtdNguoi), `${vn(r.soBat)} / ${vn(r.soHa)}`, vn(r.gtdNhom), pt(r.gtdNguoi / solo.gtdNguoi), pt(r.dayTui), pt(r.tuiDay), pt(r.keo), pt(r.cuu), pt(r.beacon)]);
    }
  }
  out.push(`\n## 1. Theo chương, kịch bản, số người (k(N) = 1 + a (N - 1), a theo dải: ${['Vành đai ngoài', 'Vành đai trong', 'Vùng trung tâm'].map((d) => `${d} ${vn(cfg.dai[d].kHeSo ?? cfg.coop.kHeSo, 2)}`).join(', ')})\n`);
  out.push(bangMd(['Chương', 'Dải', 'Bình', 'Kịch bản', 'Số người', 'Phút nhóm P50 (P10 đến P90)', 'GTĐ mỗi người', 'Phần từ Driftlife', 'Bắt / hạ mỗi người', 'GTĐ cả nhóm', 'Mỗi người so với một mình', 'Túi đầy trung bình', 'Về vì túi đầy', 'Bị kéo về (ngạt không cứu)', 'Được cứu', 'Về bằng beacon'], rows));

  out.push('\n## 2. Đối chiếu mục tiêu khung mục 9\n');
  const m = (ch, kb) => cache[`${ch}|${kb}`];
  const doi = [
    ['Thời lượng chuyến chương 1, trung bình, một người', '4 đến 6 phút', `${vn(m('1', 'trung bình').phut.p50)} phút`],
    ['Thời lượng chuyến chương 5, trung bình, một người', '10 đến 12 phút', `${vn(m('5', 'trung bình').phut.p50)} phút`],
    ...KB.map((kb) => [`Tỉ lệ bị kéo về vì hết Oxy, kịch bản ${kb}, một người, chương 1 đến 5`, ({ 'trung bình': 'dưới 5% (cẩn thận, log 56)', 'tốt': 'dưới 5% (cẩn thận, log 56)', 'tham': '15 đến 40% (log 56)' })[kb] || '', ['1', '2', '3', '4', '5'].map((c) => pt(m(c, kb).keo)).join(', ')]),
  ];
  for (const kb of KB) doi.push([`Mỗi người nhóm 4 so với một mình, kịch bản ${kb}, chương 1 đến 5`, 'từ 60%', ['1', '2', '3', '4', '5'].map((c) => pt(moPhong(cfg, c, kb, 4, aOf(c), seed, lan).gtdNguoi / m(c, kb).gtdNguoi)).join(', ')]);
  out.push(bangMd(['Mục', 'Mục tiêu', 'Đo'], doi));

  out.push('\n## 3. Độ nhạy theo cỡ túi, kịch bản trung bình, một người\n');
  out.push('Túi của chương nhân hệ số, mọi tham số khác giữ nguyên. Cho biết túi cỡ nào thì chuyến vào khung mục 9 và Oxy mới là giới hạn.\n');
  const tRows = [];
  for (const ch of ['1', '3', '5']) for (const h of [1, 2, 3, 4, 6, 100]) {
    const r = moPhong(voiTui(cfg, ch, h), ch, 'trung bình', 1, aOf(ch), seed, lan);
    tRows.push([ch, h === 100 ? 'không giới hạn' : `${h} lần (${cfg.chuong[ch].tui * h} Khối)`, `${vn(r.phut.p50)} (${vn(r.phut.p10)} đến ${vn(r.phut.p90)})`, vn(r.gtdNguoi), pt(r.tuiDay), pt(r.keo)]);
  }
  out.push(bangMd(['Chương', 'Túi', 'Phút P50 (P10 đến P90)', 'GTĐ mỗi chuyến', 'Về vì túi đầy', 'Bị kéo về'], tRows));

  out.push('\n### 3b. Lưới mật độ khe SP-R nhân cỡ túi, kịch bản trung bình, một người\n');
  out.push('Mật độ nhân vào tỉ lệ kích hoạt SP-R của dải (map.md 3.6). Ô ghi phút P50 / tỉ lệ về vì túi đầy / tỉ lệ bị kéo về.\n');
  const MD = [1, 0.6, 0.4, 0.25], TUI = [1, 2, 3, 4];
  const gRows = [];
  for (const ch of ['1', '5']) for (const md of MD) {
    const D = cfg.chuong[ch].dai;
    const cell = TUI.map((h) => {
      const c2 = voiTui({ ...cfg, dai: { ...cfg.dai, [D]: { ...cfg.dai[D], rR: cfg.dai[D].rR * md } } }, ch, h);
      const r = moPhong(c2, ch, 'trung bình', 1, aOf(ch), seed, Math.max(200, Math.floor(lan / 4)));
      return `${vn(r.phut.p50)} / ${pt(r.tuiDay)} / ${pt(r.keo)}`;
    });
    gRows.push([ch, `${md} (${vn(cfg.dai[D].rR * md * 100, 0)}%)`, ...cell]);
  }
  out.push(bangMd(['Chương', 'Mật độ SP-R', ...TUI.map((h) => `Túi ${h} lần`)], gRows));

  out.push('\n## 3c. Bình Oxy nhỏ (CON-101), một người, mang B bình từ đầu chuyến\n');
  out.push(`Mỗi bình ${cfg.binhOxy.khoi} Khối trong túi, hồi ${cfg.binhOxy.hoi} Oxy. ${cfg.binhOxy._nguon.split('. ').slice(-2).join('. ')}. Ô ghi bị kéo về / phút P50 / GTĐ mỗi chuyến.\n`);
  const BB = [0, 1, 2, 4, 8], bRows = [];
  for (const kb of ['trung bình', 'tham']) for (const ch of ['1', '2', '3', '4', '5']) {
    bRows.push([kb, ch, ...BB.map((b) => {
      const r = moPhong({ ...cfg, binhOxy: { ...cfg.binhOxy, soMang: b } }, ch, kb, 1, aOf(ch), seed, Math.max(300, Math.floor(lan / 4)));
      return `${pt(r.keo)} / ${vn(r.phut.p50)} / ${vn(r.gtdNguoi, 0)}`;
    })]);
  }
  out.push(bangMd(['Kịch bản', 'Chương', ...BB.map((b) => `${b} bình`)], bRows));

  out.push('\n## 4. Hệ số k(N) = 1 + a (N - 1) nhỏ nhất để mỗi người nhóm 4 nhặt từ 60% so với một mình\n');
  out.push('Đo ở túi hiện hành và ở túi không giới hạn (Oxy là giới hạn). Khi túi là giới hạn, ai cũng đầy túi nên tỉ lệ gần 100% với mọi a.\n');
  const kRows = [];
  for (const ch of ['1', '3', '5']) for (const h of [1, 100]) for (const kb of KB) {
    const c2 = voiTui(cfg, ch, h);
    const r = timK(c2, ch, kb, 0.6, seed, Math.max(200, Math.floor(lan / 4)));
    const hien = moPhong(c2, ch, kb, 4, aOf(ch), seed, lan).gtdNguoi / moPhong(c2, ch, kb, 1, aOf(ch), seed, lan).gtdNguoi;
    kRows.push([ch, h === 100 ? 'không giới hạn' : 'hiện hành', kb, vn(r.a, 2), pt(r.tiLe), pt(hien)]);
  }
  out.push(bangMd(['Chương', 'Túi', 'Kịch bản', 'a nhỏ nhất', 'Mỗi người nhóm 4 tại a đó', 'Mỗi người nhóm 4 tại a hiện hành của dải'], kRows));
  return out.join('\n');
}

if (process.argv[1] && basename(process.argv[1]) === 'sim-chuyen.mjs') {
  const arg = (k, d) => (process.argv.includes(k) ? process.argv[process.argv.indexOf(k) + 1] : d);
  const seed = Number(arg('--seed', 1)), lan = Number(arg('--lan', CFG.lan)), ra = arg('--ra', null);
  const txt = baoCao(CFG, seed, lan);
  if (ra) writeFileSync(ra, txt + '\n');
  console.log(txt);
}
