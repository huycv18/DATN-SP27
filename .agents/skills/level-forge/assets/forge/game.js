/* forge/game.js — HỢP ĐỒNG MỘT GAME KÝ VỚI FORGE.

   Đây là file DUY NHẤT bạn phải đọc kỹ khi làm tool cho một game mới. Điền đủ
   hợp đồng này thì được miễn phí: quản lý bộ level, nạp/lưu JSON, nạp/xuất CSV,
   nhớ qua lần tải lại trang, hoàn tác, bộ giải hai chế độ, thang điểm nhiều
   trục, và bộ kiểm tra hồi quy.

   Nguyên tắc: forge KHÔNG BAO GIỜ đoán cấu trúc level của bạn. Mọi chỗ cần
   hiểu dữ liệu, forge hỏi game qua một hàm trong hợp đồng này.

   ──────────────────────── BẮT BUỘC ────────────────────────
     id            chuỗi không dấu, dùng làm khoá localStorage
     name          tên hiển thị
     emptyLevel(i) → một level mới, HỢP LỆ NGAY (đừng trả bàn rỗng: người dựng
                     phải có cái để bắt đầu phá, không phải cái để bắt đầu xây)
     readLevel(raw, i)  → JSON thô của build → level nội bộ. Tự lo di trú bản cũ
                          Ở ĐÂY, đừng rải khắp nơi.
     writeLevel(L, i)   → level nội bộ → ĐÚNG mẫu JSON build đang đọc
     validate(L)        → mảng {k:'bad'|'warn', t:'...'}; rỗng = hợp lệ

   ──────────────────────── TUỲ CHỌN ────────────────────────
     rules         hợp đồng bộ giải (xem forge/solver.js). Có thì tool biết
                   chứng minh level giải được; không có thì tool chỉ còn là
                   trình soạn thảo, mất đúng thứ giá trị nhất.
     cap           {name, def, min, max} — tài nguyên khan hiếm của build
     axes          {tên: fn(L, sim) → 0..1} các trục độ khó
     weights       {tên: số}, cộng lại bằng 1
     bands         [{n, lo, hi}] ngưỡng nhãn độ khó
     csv           {cols, toRow(L), fromRow(row, i)} — sinh hàng loạt bảng tính
     listShape(levels, opt) → hình dạng file cả bộ; mặc định {levels:[...]}

   ─────────────────────────────────────────────────────────
   Bản mẫu tối giản ở examples/. Đừng chép cả tool cũ sang game mới — chép
   hợp đồng, viết lại phần ruột. */

const NEED = ['id', 'name', 'emptyLevel', 'readLevel', 'writeLevel', 'validate'];

/* Kiểm hợp đồng NGAY LÚC NẠP, không đợi tới lúc người dùng bấm nút.
   Thiếu một hàm thì hỏng ở chỗ xa tít và khó lần ra. */
export function defineGame(g){
  const miss = NEED.filter(k => typeof g[k] !== (k === 'id' || k === 'name' ? 'string' : 'function'));
  if(miss.length) throw new Error('Game thiếu: ' + miss.join(', '));
  if(!/^[a-z0-9_-]+$/.test(g.id)) throw new Error('id chỉ nhận a-z 0-9 _ - (dùng làm khoá lưu)');

  if(g.weights){
    const s = Object.values(g.weights).reduce((a, b) => a + b, 0);
    if(Math.abs(s - 1) > 0.001) throw new Error('weights phải cộng lại bằng 1, đang là ' + s.toFixed(3));
    const noAxis = Object.keys(g.weights).filter(k => !g.axes || !g.axes[k]);
    if(noAxis.length) throw new Error('weights nhắc tới trục không có hàm đo: ' + noAxis.join(', '));
  }
  if(g.csv && (!Array.isArray(g.csv.cols) || typeof g.csv.fromRow !== 'function'))
    throw new Error('csv cần {cols, fromRow} (toRow tuỳ chọn)');

  return {
    cap: {name: 'sức chứa', def: 5, min: 1, max: 12},
    listShape: (levels, opt) => ({levels}),
    ...g
  };
}
