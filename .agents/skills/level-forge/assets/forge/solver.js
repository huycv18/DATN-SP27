/* forge/solver.js — BỘ GIẢI DÙNG CHUNG CHO MỌI GAME.

   Đây là thứ giữ lời hứa quan trọng nhất của một tool dựng level:
   KHÔNG BAO GIỜ GIAO MỘT LEVEL MÀ TA CHƯA CHỨNG MINH ĐƯỢC LÀ GIẢI ĐƯỢC.

   Bộ giải không biết gì về game. Game ký một hợp đồng năm hàm (`rules`) rồi
   nhận lại hai chế độ tìm kiếm và một phép quét sức chứa.

   ─────────────────────────── HỢP ĐỒNG `rules` ───────────────────────────
     initial(level, cap)   → state đầu ván, ĐÃ tự giải quyết hết phần bắt buộc
     moves(state)          → mảng nước đi hợp lệ; rỗng = hết đường đi
     apply(state, move)    → state MỚI (không đụng state cũ), đã tự giải quyết
     isWin(state)          → true nếu thắng
     rank(state)           → số, CÀNG LỚN CÀNG TỐT; dùng để xếp beam và DFS
     key(state)            → chuỗi định danh thế cờ, để memo bỏ trùng
     dead(state)           → (tuỳ chọn) true nếu thế cờ chết, cắt sớm cho nhanh
     progress(state)       → (tuỳ chọn) số đo "đi được bao xa", để báo khi bí

   `cap` là MỘT tài nguyên khan hiếm của build mà mọi game kiểu này đều có:
   số ô chờ, số lá trên tay, số nước đi, số lần hoàn tác. Nó không phải trường
   của level — nó là hằng số của bản build — nên nó đi qua tham số chứ không
   nằm trong dữ liệu level.

   ────────────────────────── VÌ SAO HAI CHẾ ĐỘ ──────────────────────────
   Chúng trả lời hai câu hỏi khác nhau và tốn kém khác nhau:

     beam   — rẻ, chạy được mỗi lần người dựng gõ một phím. BẤT ĐỐI XỨNG:
              tìm thấy là CHẮC CHẮN thắng; không tìm thấy chỉ có nghĩa là
              "beam này không thấy", KHÔNG phải "vô nghiệm".
     exact  — vét cạn có memo và có ngân sách. Khi nó không thấy đường và chưa
              chạm ngân sách thì đó là CHỨNG MINH vô nghiệm theo đúng luật.

   Đừng bao giờ để UI nói "không giải được" dựa trên beam. Đó là lời nói dối
   rẻ tiền nhất mà một tool dựng level có thể nói với người dùng nó. */

const DEF_BEAM   = 160;
const DEF_BUDGET = 400000;

/* Kết quả: {ok, state, nodes, reason}
     reason '' khi thắng · 'unsolvable' khi vét cạn xong mà không có đường ·
     'budget' khi hết ngân sách (CHƯA kết luận được) · 'stuck' khi beam bí. */
export function solve(rules, level, opt){
  opt = opt || {};
  const cap = opt.cap;
  const start = rules.initial(level, cap);
  if(rules.isWin(start)) return {ok: true, state: start, nodes: 1, reason: ''};

  return opt.exact ? exhaust(rules, start, opt) : beam(rules, start, opt);
}

/* ───────────────────────────── VÉT CẠN ─────────────────────────────
   DFS lặp (không đệ quy — level dựng tay có thể sâu bất thường và ta không
   muốn tràn stack). Con được xếp theo rank giảm dần rồi đẩy vào stack, nên
   nhánh thử trước là nhánh "chơi đẹp" — lời giải tìm được thường gọn, dù về
   mặt phán quyết thì bất kỳ lời giải nào cũng như nhau. */
function exhaust(rules, start, opt){
  const budget = opt.budget || DEF_BUDGET;
  const seen = new Set([rules.key(start)]);
  const stack = [start];
  let nodes = 0, hitBudget = false;
  let deepest = start;
  const far = rules.progress || (() => 0);

  while(stack.length){
    const st = stack.pop();
    if(rules.isWin(st)) return {ok: true, state: st, nodes, reason: ''};
    if(far(st) > far(deepest)) deepest = st;
    if(++nodes > budget){ hitBudget = true; break; }
    if(rules.dead && rules.dead(st)) continue;

    const kids = [];
    for(const mv of rules.moves(st)){
      const ns = rules.apply(st, mv);
      const k = rules.key(ns);
      if(seen.has(k)) continue;
      seen.add(k);
      kids.push(ns);
    }
    kids.sort((a, b) => rules.rank(a) - rules.rank(b));   /* tốt nhất lên đỉnh */
    stack.push(...kids);
  }
  return {ok: false, state: deepest, nodes, reason: hitBudget ? 'budget' : 'unsolvable'};
}

/* ─────────────────────────────── BEAM ───────────────────────────────
   Mỗi bước giữ lại `width` thế cờ tốt nhất. Hẹp thì nhanh nhưng chỉ sai về
   phía BÁO CHẬT HƠN THẬT — an toàn cho việc gõ tới đâu thấy tới đó. */
function beam(rules, start, opt){
  const width = Math.max(8, Math.min(800, opt.beam || DEF_BEAM));
  const steps = opt.maxSteps || 200;
  const seen = new Set([rules.key(start)]);
  let front = [start], nodes = 0;

  for(let step = 0; step < steps; step++){
    const next = [];
    for(const st of front){
      if(rules.isWin(st)) return {ok: true, state: st, nodes, reason: ''};
      if(rules.dead && rules.dead(st)) continue;
      for(const mv of rules.moves(st)){
        const ns = rules.apply(st, mv);
        nodes++;
        const k = rules.key(ns);
        if(seen.has(k)) continue;
        seen.add(k);
        next.push(ns);
      }
    }
    if(!next.length) break;
    next.sort((a, b) => rules.rank(b) - rules.rank(a));
    front = next.slice(0, width);
    const win = front.find(s => rules.isWin(s));
    if(win) return {ok: true, state: win, nodes, reason: ''};
  }
  const far = rules.progress || (() => 0);
  const best = front.length ? front.reduce((a, b) => far(b) > far(a) ? b : a) : start;
  return {ok: false, state: best, nodes, reason: 'stuck'};
}

/* ───────────────────── SỨC CHỨA TỐI THIỂU ─────────────────────
   Số `cap` nhỏ nhất mà level vẫn thắng được. Đây thường là THƯỚC ĐO ĐỘ KHÓ
   THẬT của game kiểu này: nó nói level cần bao nhiêu chỗ xoay xở, chứ không
   nói level dài bao nhiêu.

   Quét tuyến tính từ nhỏ lên chứ không nhị phân: tính giải được KHÔNG đảm bảo
   đơn điệu theo cap ở mọi game (nhiều chỗ hơn có thể dụ người chơi vào thế
   xấu), nên nhị phân sẽ trả lời sai ở đúng những level thú vị nhất.
   Trả null nếu tới `to` vẫn không thắng nổi. */
export function minCapacity(rules, level, opt){
  opt = opt || {};
  const from = opt.from ?? 1, to = opt.to ?? 12;
  for(let cap = from; cap <= to; cap++)
    if(solve(rules, level, {...opt, cap}).ok) return cap;
  return null;
}

/* Phán quyết ĐẦY ĐỦ cho một level, dùng khi bấm Phân tích / Kiểm tra cả bộ /
   Xuất: chạy beam trước cho rẻ, bí thì mới vét cạn.
   `proven` = kết luận CHẮC CHẮN. UI phải phân biệt "không giải được" với
   "chưa kết luận" — chúng là hai câu khác hẳn nhau. */
export function verdict(rules, level, opt){
  opt = opt || {};
  let r = solve(rules, level, opt);
  if(!r.ok) r = solve(rules, level, {...opt, exact: true});
  return {
    ...r,
    solvable: r.ok,
    proven: r.ok || r.reason === 'unsolvable'
  };
}
