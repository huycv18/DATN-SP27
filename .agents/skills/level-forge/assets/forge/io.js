/* forge/io.js — NẠP VÀ LƯU. JSON cho build, CSV cho bảng tính.

   Bốn bài học đắt nhất về nạp/lưu nằm ở đây, ghi lại để không phải học lại:

   1. DI TRÚ TRƯỚC, KIỂM TRA SAU. Bản đầu tiên kiểm "id màu có vượt bảng không"
      rồi mới di trú. File theo bảng cũ bị từ chối ngay ở cửa, mà lệnh sửa lại
      nằm trong menu và chỉ chạy được sau khi file đã nạp — người dùng hết
      đường. Thứ tự đúng: đọc → di trú → kiểm → nạp.

   2. NÓI RA MỌI THỨ ĐÃ TỰ ĐỔI. Nạp xong mà im lặng đổi dữ liệu của người ta là
      cách nhanh nhất để mất lòng tin vào tool.

   3. XUẤT PHẢI TRÙNG TỪNG BYTE với file mẫu của build. Có một fixture và một
      phép so sánh chuỗi là đủ chặn mọi kiểu trôi định dạng về sau.

   4. Ô CSV TRỐNG KHÔNG PHẢI LÀ SỐ 0. Trống nghĩa là "theo mặc định của nhãn",
      0 là một lựa chọn thật. Gộp hai thứ này là lỗi im lặng, người dựng chỉ
      phát hiện khi thấy cả loạt level sai. */

/* ─────────────────────────────── JSON ─────────────────────────────── */

/* Đọc một payload bất kỳ thành mảng level nội bộ.
   Trả {levels, notes, errors}. `notes` là những thứ ĐÃ TỰ ĐỔI, phải hiện cho
   người dùng thấy. */
export function readPayload(game, text){
  let raw;
  try{ raw = JSON.parse(text); }
  catch(e){ return {levels: [], notes: [], errors: ['Không phải JSON hợp lệ: ' + e.message]}; }

  const arr = Array.isArray(raw) ? raw
            : Array.isArray(raw.levels) ? raw.levels
            : (raw.index != null || raw.name != null) ? [raw]     /* file một level */
            : null;
  if(!arr) return {levels: [], notes: [], errors: ['Không tìm thấy mảng level trong file.']};

  const notes = [], errors = [];
  const levels = arr.map((r, i) => game.readLevel(r, i, notes));

  /* Kiểm SAU khi đã di trú — xem ghi chú 1 ở đầu file. */
  levels.forEach((L, i) => {
    game.validate(L).filter(m => m.k === 'bad')
      .forEach(m => errors.push((L.name || 'Level ' + i) + ': ' + m.t));
  });
  return {levels, notes, errors};
}

/* Ghép bộ mới vào bộ đang có.
     replace  thay cả bộ
     merge    trùng TÊN thì đè, khác thì thêm vào cuối
     append   nối vào cuối, đổi tên nếu trùng */
export function mergeLevels(cur, incoming, mode){
  if(mode === 'replace') return incoming.slice();
  if(mode === 'merge'){
    const out = cur.slice();
    for(const L of incoming){
      const at = out.findIndex(x => x.name === L.name);
      if(at >= 0) out[at] = L; else out.push(L);
    }
    return out;
  }
  const taken = new Set(cur.map(L => L.name));
  return cur.concat(incoming.map(L => {
    if(!taken.has(L.name)){ taken.add(L.name); return L; }
    let k = 2, n = L.name + '_' + k;
    while(taken.has(n)) n = L.name + '_' + (++k);
    taken.add(n);
    return {...L, name: n};
  }));
}

/* Chuỗi JSON để tải về. `indent` phải khớp ĐÚNG file mẫu của build, nếu không
   phép so trùng-từng-byte sẽ báo động giả mãi mãi. */
export function writeJSON(game, levels, opt){
  const o = game.listShape(levels.map((L, i) => game.writeLevel(L, i)), opt || {});
  return JSON.stringify(o, null, (opt && opt.indent) ?? 4);
}

/* ──────────────────────────────── CSV ──────────────────────────────── */

/* Đọc CSV thành các dòng đã chuẩn hoá. Dòng đầu là header nếu nhận ra được
   tên cột, không thì coi như dữ liệu và dùng đúng thứ tự `game.csv.cols`.
   Ô TRỐNG trả về null chứ không phải 0 — xem ghi chú 4 ở đầu file. */
export function readCSV(game, text){
  if(!game.csv) return {rows: [], errors: ['Game này chưa khai báo csv.']};
  const cols = game.csv.cols;
  const lines = String(text).split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  if(!lines.length) return {rows: [], errors: ['CSV rỗng.']};

  const head = lines[0].split(',').map(s => s.trim().toLowerCase());
  const hasHead = head.some(h => cols.map(c => c.toLowerCase()).includes(h));
  const names = hasHead ? head : cols.map(c => c.toLowerCase());
  const body = hasHead ? lines.slice(1) : lines;

  const rows = [], errors = [];
  body.forEach((ln, i) => {
    const parts = ln.split(',').map(s => s.trim());
    const o = {};
    names.forEach((c, k) => { o[c] = parts[k] === undefined || parts[k] === '' ? null : parts[k]; });
    try{ rows.push(game.csv.fromRow(o, i)); }
    catch(e){ errors.push('Dòng ' + (i + 1) + ': ' + e.message); }
  });
  return {rows, errors};
}

/* Đổ bộ đang có ra CSV để sửa trong bảng tính rồi nạp lại. */
export function writeCSV(game, levels, extra){
  if(!game.csv || !game.csv.toRow) return '';
  const out = [game.csv.cols.join(',')];
  levels.forEach((L, i) => {
    const r = game.csv.toRow(L, i, extra);
    out.push(game.csv.cols.map(c => cell(r[c])).join(','));
  });
  return out.join('\n');
}

/* Dấu phẩy và xuống dòng trong tên level sẽ phá cả file — bọc lại theo đúng
   luật CSV thay vì cấm người dùng đặt tên. */
function cell(v){
  if(v === null || v === undefined) return '';
  const s = String(v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}
