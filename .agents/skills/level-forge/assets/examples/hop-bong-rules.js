/* examples/hop-bong-rules.js — VÍ DỤ MẪU: cơ chế hộp bóng của một game bắn bóng ký
   hợp đồng `rules` của forge/solver.js.

   Đọc file này để thấy một game thật cần viết bao nhiêu thì bộ giải chung chạy
   được: khoảng 60 dòng. Mọi thứ còn lại — beam, vét cạn có memo, ngân sách,
   quét sức chứa tối thiểu, phân biệt "vô nghiệm" với "chưa kết luận" — là của
   forge, không phải của game.

   LUẬT GAME (tóm tắt): người chơi lấy hộp ĐẦU một cột hộp bất kỳ vào một SLOT
   chờ. Hộp trong slot bắn khi có cột card đang lộ đúng màu nó; nhiều cột cùng
   khớp thì CỘT TRÁI TRƯỚC. Hộp hết bóng thì rời slot. Thua khi mọi slot đầy mà
   không hộp nào bắn được. */

/* Cột trái nhất đang lộ card màu c, hoặc −1 — chính là luật nhắm của súng. */
function leftmost(cols, bi, c){
  for(let i = 0; i < cols.length; i++)
    if(bi[i] < cols[i].length && cols[i][bi[i]] === c) return i;
  return -1;
}

/* Bắn hết những gì bắn được. Bắn LUÔN có lợi (vừa tiến độ vừa giải phóng slot)
   nên làm tự động, không đưa vào không gian tìm kiếm — đây là mẹo quan trọng
   nhất để không gian trạng thái nhỏ lại đủ để vét cạn được. */
function settle(st){
  for(;;){
    let fired = false;
    for(let s = 0; s < st.slots.length; s++){
      const b = st.slots[s];
      const ci = leftmost(st.cols, st.bi, b.c);
      if(ci < 0) continue;
      st.bi[ci]++; st.done++; b.n--;
      const gone = b.n === 0;
      st.trace.push({k: 'fire', c: b.c, col: ci, slot: s, left: b.n, gone,
                     slots: st.slots.length - (gone ? 1 : 0)});
      if(gone) st.slots.splice(s, 1);
      fired = true; break;
    }
    if(!fired) return st;
  }
}

export const hopBongRules = {
  initial(L, cap){
    const cols  = L.blockColumns.map(c => c.colors.slice());
    const bcols = L.boxColumns.map(c => c.boxes.map(b => ({c: b.c, n: b.n | 0})));
    return settle({
      cols, bcols, cap,
      nBlk: cols.reduce((s, c) => s + c.length, 0),
      bi: cols.map(() => 0), hi: bcols.map(() => 0),
      slots: [], done: 0, peak: 0, trace: []
    });
  },

  /* Nước đi = chọn cột hộp còn hàng. Chỉ ≤4 nhánh mỗi nước — đó là lý do vét
     cạn khả thi ở game này. */
  moves(st){
    const out = [];
    for(let i = 0; i < st.bcols.length; i++) if(st.hi[i] < st.bcols[i].length) out.push(i);
    return out;
  },

  apply(st, lane){
    const ns = {
      cols: st.cols, bcols: st.bcols, cap: st.cap, nBlk: st.nBlk,
      bi: st.bi.slice(), hi: st.hi.slice(),
      slots: st.slots.map(b => ({...b})),
      done: st.done, peak: st.peak, trace: st.trace.slice()
    };
    const b = ns.bcols[lane][ns.hi[lane]];
    ns.hi[lane]++;
    ns.slots.push({c: b.c, n: b.n, lane});
    ns.peak = Math.max(ns.peak, ns.slots.length);
    ns.trace.push({k: 'pull', c: b.c, n: b.n, lane, slots: ns.slots.length});
    return settle(ns);
  },

  isWin : st => st.done === st.nBlk,
  dead  : st => st.slots.length >= st.cap,
  key   : st => st.bi.join(',') + '|' + st.hi.join(',') + '|'
              + st.slots.map(b => b.c + ':' + b.n).sort().join('.'),
  /* Tiến độ trước hết; phạt slot đang chiếm và bóng còn kẹt trong slot — một
     hộp 7 bóng nằm chờ nặng hơn một hộp 1 bóng nằm chờ. */
  rank  : st => st.done * 100 - st.slots.length * 14
              - st.slots.reduce((s, b) => s + b.n, 0) * 1.5 - st.peak * 2,
  progress: st => st.done
};
