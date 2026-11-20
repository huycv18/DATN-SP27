/* forge/levels.js — QUẢN LÝ BỘ LEVEL. Thuần, không DOM, không state toàn cục.

   Mọi hàm nhận bộ `levels` và trả BỘ MỚI; không sửa tại chỗ. Nhờ vậy hoàn tác
   chỉ là giữ lại tham chiếu cũ, và test gọi thẳng được mà không cần trình duyệt.

   Vì sao tên level quan trọng hơn vẻ ngoài của nó: build đọc level theo TÊN,
   cache phân tích khoá theo TÊN, và người dựng gọi nhau qua TÊN. Nên đổi tên
   là thao tác nguy hiểm — `rename` ở đây trả về cả ánh xạ cũ→mới để bên gọi
   dời cache đi theo, thay vì âm thầm làm hỏng cache. */

const pad2 = n => String(n).padStart(2, '0');

/* Tên còn trống trong bộ, theo mẫu `Level_01`. Không bao giờ trả tên trùng. */
export function freeName(levels, stem){
  const base = stem || 'Level';
  const taken = new Set(levels.map(L => L.name));
  for(let i = 1; i <= levels.length + 2; i++){
    const n = base + '_' + pad2(i);
    if(!taken.has(n)) return n;
  }
  return base + '_' + Date.now();
}

export function addLevel(levels, game, at){
  const i = at == null ? levels.length : clampIdx(at, levels.length + 1);
  const L = game.emptyLevel(i);
  L.name = freeName(levels);
  const out = levels.slice();
  out.splice(i, 0, L);
  return reindex(out);
}

export function duplicateLevel(levels, i){
  if(!levels[i]) return levels;
  const copy = JSON.parse(JSON.stringify(levels[i]));
  copy.name = freeName(levels, 'Level');
  const out = levels.slice();
  out.splice(i + 1, 0, copy);
  return reindex(out);
}

/* Xoá KHÔNG bao giờ để bộ rỗng: một bộ rỗng làm mọi panel phải xử lý trường
   hợp null, đổi lấy đúng một thao tác mà người dùng gần như không muốn. */
export function removeLevel(levels, i, game){
  if(!levels[i]) return levels;
  if(levels.length === 1) return reindex([game.emptyLevel(0)]);
  const out = levels.slice();
  out.splice(i, 1);
  return reindex(out);
}

export function moveLevel(levels, from, to){
  if(!levels[from]) return levels;
  const out = levels.slice();
  const [L] = out.splice(from, 1);
  out.splice(clampIdx(to, out.length + 1), 0, L);
  return reindex(out);
}

/* Trả {levels, from, to} — `from`/`to` để bên gọi dời cache phân tích. */
export function renameLevel(levels, i, name){
  const L = levels[i];
  const want = String(name || '').trim();
  if(!L || !want || want === L.name) return {levels, from: null, to: null};
  const taken = new Set(levels.filter((_, k) => k !== i).map(x => x.name));
  let final = want, k = 2;
  while(taken.has(final)) final = want + '_' + (k++);
  const out = levels.slice();
  out[i] = {...L, name: final};
  return {levels: out, from: L.name, to: final};
}

/* Đánh số lại TOÀN BỘ theo vị trí. Build đọc `index` để xếp thứ tự màn, nên
   sau bất kỳ thao tác thêm/xoá/đổi chỗ nào cũng phải chạy — quên một lần là
   bộ level lên build sai thứ tự mà tool vẫn hiện đúng. */
export function reindex(levels){
  return levels.map((L, i) => (L.index === i ? L : {...L, index: i}));
}

/* Đặt lại tên cả bộ theo thứ tự hiện tại. Dùng sau khi kéo thả lung tung. */
export function renumber(levels, stem){
  const base = stem || 'Level';
  return levels.map((L, i) => ({...L, index: i, name: base + '_' + pad2(i + 1)}));
}

const clampIdx = (v, n) => Math.max(0, Math.min(n - 1, v | 0));
