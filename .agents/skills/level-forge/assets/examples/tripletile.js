/* examples/tripletile.js — GAME MẪU CHẠY ĐƯỢC, dùng làm điểm xuất phát.

   Cơ chế "gom ba" quen thuộc: vài hàng thẻ, người chơi lấy thẻ ĐẦU một hàng bất
   kỳ vào KHAY; đủ ba thẻ cùng màu trong khay thì chúng biến mất. Khay đầy mà
   không gom nổi bộ ba nào là thua.

   Chọn cơ chế này làm mẫu vì nó có đủ mọi thứ đáng học:
     · một tài nguyên khan hiếm của build (sức chứa khay) → `cap`
     · một bước tự giải quyết luôn có lợi (gom ba) → chạy trong `apply`, không
       đưa vào không gian tìm kiếm
     · số nước đi mỗi lượt nhỏ (bằng số hàng) → vét cạn được
     · bất biến dữ liệu rõ ràng: mỗi màu phải chia hết cho 3

   Level: {index, name, difficulty, rows: [[màu,...], ...]}

   Chép file này, đổi luật, giữ nguyên hình dạng. */

import { defineGame } from '../forge/game.js';

const TRIPLE = 3;

/* Gom hết bộ ba có thể gom. Luôn có lợi nên làm tự động. */
function settle(st){
  for(;;){
    const cnt = new Map();
    st.tray.forEach(c => cnt.set(c, (cnt.get(c) || 0) + 1));
    const hit = [...cnt.keys()].find(c => cnt.get(c) >= TRIPLE);
    if(hit === undefined) return st;
    let left = TRIPLE;
    st.tray = st.tray.filter(c => (c === hit && left > 0) ? (left--, false) : true);
    st.cleared += TRIPLE;
    st.trace.push({k: 'match', c: hit, tray: st.tray.length});
  }
}

export const tripleRules = {
  initial(L, cap){
    const rows = L.rows.map(r => r.slice());
    return settle({
      rows, cap, ri: rows.map(() => 0), tray: [], cleared: 0,
      total: rows.reduce((s, r) => s + r.length, 0), peak: 0, trace: []
    });
  },
  moves(st){
    const out = [];
    for(let i = 0; i < st.rows.length; i++) if(st.ri[i] < st.rows[i].length) out.push(i);
    return out;
  },
  apply(st, row){
    const ns = {...st, ri: st.ri.slice(), tray: st.tray.slice(), trace: st.trace.slice()};
    const c = ns.rows[row][ns.ri[row]];
    ns.ri[row]++;
    ns.tray.push(c);
    ns.peak = Math.max(ns.peak, ns.tray.length);
    ns.trace.push({k: 'take', c, row, tray: ns.tray.length});
    return settle(ns);
  },
  isWin  : st => st.cleared === st.total,
  dead   : st => st.tray.length >= st.cap,
  key    : st => st.ri.join(',') + '|' + st.tray.slice().sort().join(''),
  rank   : st => st.cleared * 100 - st.tray.length * 10 - st.peak * 2,
  progress: st => st.cleared
};

/* Sinh một level hợp lệ theo cách ĐÚNG: dựng từ một lời giải có sẵn.
   Rải từng bộ ba vào các hàng, nên luôn tồn tại thứ tự lấy để thắng. */
function makeRows(nRow, nTriple, nColor, seed){
  let s = seed >>> 0 || 1;
  const rnd = () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;
  const rows = Array.from({length: nRow}, () => []);
  for(let t = 0; t < nTriple; t++){
    const c = t % nColor;
    for(let k = 0; k < TRIPLE; k++) rows[Math.floor(rnd() * nRow)].push(c);
  }
  return rows.map(r => r.length ? r : [0, 0, 0]);
}

export const tripleTile = defineGame({
  id: 'tripletile',
  name: 'Triple Tile (mẫu)',
  cap: {name: 'ô khay', def: 7, min: 3, max: 12},

  emptyLevel(i){
    return {index: i, name: 'Level_' + String(i + 1).padStart(2, '0'),
            difficulty: 'Easy', rows: makeRows(3, 4, 2, i + 1)};
  },
  readLevel(raw, i){
    return {index: raw.index ?? i, name: raw.name || 'Level_' + (i + 1),
            difficulty: raw.difficulty || 'Easy',
            rows: (raw.rows || []).map(r => r.map(Number))};
  },
  writeLevel(L, i){
    return {index: i, name: L.name, difficulty: L.difficulty, rows: L.rows};
  },
  /* Bất biến của cơ chế: mỗi màu phải chia hết cho 3, không thì vô nghiệm
     ngay từ dữ liệu, chẳng cần chạy solver mới biết. */
  validate(L){
    const out = [];
    const cnt = new Map();
    L.rows.forEach(r => r.forEach(c => cnt.set(c, (cnt.get(c) || 0) + 1)));
    for(const [c, n] of cnt)
      if(n % TRIPLE) out.push({k: 'bad', t: 'màu ' + c + ' có ' + n + ' thẻ, không chia hết cho ' + TRIPLE});
    if(!L.rows.length) out.push({k: 'bad', t: 'level không có hàng nào'});
    return out;
  },

  rules: tripleRules,
  bands: [{n: 'Easy', lo: 0, hi: 34}, {n: 'Medium', lo: 34, hi: 67}, {n: 'Hard', lo: 67, hi: 101}],
  axes: {
    /* Sức chứa khay THẬT SỰ cần — thước đo độ khó chính, y như mọi game có
       một tài nguyên khan hiếm. */
    room  : (L, sim) => sim && sim.minCap != null ? sim.minCap / 7 : 1,
    colors: L => Math.min(1, (new Set(L.rows.flat()).size - 2) / 6),
    length: L => Math.min(1, L.rows.flat().length / 60)
  },
  weights: {room: 0.6, colors: 0.25, length: 0.15},

  csv: {
    cols: ['name', 'difficulty', 'rows', 'triples', 'colors'],
    toRow: L => ({name: L.name, difficulty: L.difficulty, rows: L.rows.length,
                  triples: L.rows.flat().length / TRIPLE,
                  colors: new Set(L.rows.flat()).size}),
    fromRow(o, i){
      const rows = +o.rows || 3, tri = +o.triples || 4, col = +o.colors || 2;
      return {index: i, name: o.name || 'Level_' + (i + 1),
              difficulty: o.difficulty || 'Easy',
              rows: makeRows(rows, tri, col, i + 7)};
    }
  }
});
