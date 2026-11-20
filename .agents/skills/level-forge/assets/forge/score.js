/* forge/score.js — THANG ĐIỂM ĐỘ KHÓ NHIỀU TRỤC, và bộ hiệu chuẩn cho nó.

   ═══════════════ ĐỌC PHẦN NÀY TRƯỚC KHI ĐẶT TRỌNG SỐ ═══════════════

   Cách làm SAI mà rất dễ rơi vào: có sẵn một bộ level đã gắn nhãn, ném vào máy
   dò trọng số, lấy bộ khớp nhãn cao nhất. Máy dò tối ưu khớp nhãn, và cách RẺ
   NHẤT để khớp nhãn thường là dồn trọng số cho một trục tầm thường như độ dài
   ván, đồng thời đẩy những trục designer coi là cốt lõi về 0. Kết quả: tool
   khuyên người dựng "muốn khó hơn thì làm bàn dài hơn" — đúng thống kê, sai
   thiết kế. Chuyện này đã xảy ra thật, xem references/case-hop-bong.md.

   Cách làm ĐÚNG, theo thứ tự:
     1. HỎI designer độ khó của game này đến từ đâu. Ghi lại NGUYÊN VĂN.
     2. Với mỗi thứ họ nói, tìm MỘT con số đo được từ level hoặc từ lời giải.
     3. Đặt trọng số theo Ý ĐỒ: thứ họ nói trước thì nặng hơn.
     4. Chỉ DÒ ngưỡng dải và mức chuẩn hoá, đừng dò lại trọng số.
     5. Ràng buộc mọi trục cốt lõi phải có trọng số thật (≥ 0.1). Bộ nào vi
        phạm thì loại, kể cả khi nó khớp nhãn cao hơn.
     6. Nhãn designer đặt có thể TỰ MÂU THUẪN với chính định nghĩa họ vừa nêu.
        Khi đó nói ra, đừng bẻ thang điểm cho vừa nhãn.

   Hai trục đo cùng một hiện tượng thì máy dò sẽ dồn hết cho một cái và bỏ cái
   kia — đó là dấu hiệu bạn đang đếm hai lần, không phải dấu hiệu trục kia vô
   dụng. Giữ một trục trong điểm, đưa trục kia ra làm SỐ CHẨN ĐOÁN. */

const clamp01 = v => v < 0 ? 0 : v > 1 ? 1 : v;

/* Chấm điểm một level. `axes` là {tên: fn(level, sim) → 0..1}.
   `sim` là kết quả solver (có thể null nếu trục không cần tới lời giải).
   Level không giải được → 100, không cần cộng trục. */
export function scoreLevel(game, L, sim){
  if(sim && sim.solvable === false) {
    const full = {};
    Object.keys(game.axes || {}).forEach(k => full[k] = 1);
    return {score: 100, band: bandOf(game, 100), axes: full};
  }
  const axes = {};
  for(const [k, fn] of Object.entries(game.axes || {})) axes[k] = clamp01(fn(L, sim));
  const score = Math.round(100 * Object.keys(game.weights || {})
    .reduce((s, k) => s + game.weights[k] * (axes[k] || 0), 0));
  return {score, band: bandOf(game, score), axes};
}

export function bandOf(game, score){
  const bands = game.bands || [{n: 'Easy', lo: 0, hi: 101}];
  return (bands.find(b => score >= b.lo && score < b.hi) || bands[bands.length - 1]).n;
}

/* ─────────────────────── HIỆU CHUẨN ───────────────────────
   Chạy trên bộ level ĐÃ GẮN NHÃN TAY. Trả về mức khớp, và quan trọng hơn:
   DANH SÁCH LEVEL LỆCH. Danh sách đó mới là thứ đáng đọc — nó chỉ ra hoặc
   thang điểm sai, hoặc nhãn sai, và bạn phải tự quyết là cái nào.

   Mẹo: chốt danh sách lệch vào bài kiểm tra. Chỉ đếm số lượng thì sửa trọng số
   xong tổng vẫn bằng cũ mà lệch sang level khác, và không ai nhận ra. */
export function calibrate(game, levels, simOf){
  const rows = levels.map(L => {
    const r = scoreLevel(game, L, simOf ? simOf(L) : null);
    return {name: L.name, label: L.difficulty, score: r.score, band: r.band, axes: r.axes};
  });
  const hit = rows.filter(r => r.band === r.label);
  return {
    rows,
    hits: hit.length,
    total: rows.length,
    misses: rows.filter(r => r.band !== r.label).map(r => r.name + ' (' + r.label + ' → ' + r.band + ')'),
    corr: pearson(rows.map(r => r.score), rows.map(r => rankOf(game, r.label)))
  };
}

const rankOf = (game, label) =>
  (game.bands || []).findIndex(b => b.n === label);

/* Tương quan hạng — nói thang điểm có XẾP THỨ TỰ đúng không, độc lập với việc
   ngưỡng dải đặt ở đâu. Hai con số này trả lời hai câu khác nhau: khớp nhãn
   nói ngưỡng có đúng chỗ không, tương quan nói trọng số có đúng không. */
function pearson(xs, ys){
  const n = xs.length;
  if(n < 2) return 0;
  const mx = xs.reduce((a, b) => a + b, 0) / n, my = ys.reduce((a, b) => a + b, 0) / n;
  let sxy = 0, sxx = 0, syy = 0;
  xs.forEach((x, i) => { sxy += (x - mx) * (ys[i] - my); sxx += (x - mx) ** 2; syy += (ys[i] - my) ** 2; });
  return sxy / Math.sqrt(sxx * syy || 1);
}

/* Chuẩn hoá một số đo thô về 0..1 theo trần. Đặt trần RỘNG HƠN mức cao nhất
   của bộ shipped một chút: sát quá thì mọi level khó đều bão hoà bằng điểm
   nhau và tool hết đường phân biệt. */
export const norm = (v, capValue) => clamp01(v / (capValue || 1));
