/* selftest.mjs — chứng minh lõi forge còn chạy đúng, không cần repo nào khác.
   Chạy:  node assets/selftest.mjs
   Dùng game mẫu Triple Tile trong examples/. */

import { solve, minCapacity, verdict } from './forge/solver.js';
import { addLevel, duplicateLevel, removeLevel, moveLevel, renameLevel, reindex }
  from './forge/levels.js';
import { readPayload, mergeLevels, writeJSON, readCSV, writeCSV } from './forge/io.js';
import { scoreLevel, calibrate } from './forge/score.js';
import { defineGame } from './forge/game.js';
import { tripleTile, tripleRules } from './examples/tripletile.js';

let fails = 0;
const ok = (t, cond, note) => {
  if(!cond) fails++;
  console.log('  ' + (cond ? '✓' : '✗') + ' ' + t + (note ? '  ' + note : ''));
};

console.log('\nforge selftest — game mẫu: ' + tripleTile.name + '\n');

/* ── 1. bộ giải ───────────────────────────────────────────────── */
const L0 = tripleTile.emptyLevel(0);
const v = verdict(tripleRules, L0, {cap: 7});
ok('level mẫu giải được, và là kết luận CHẮC', v.solvable && v.proven);

const mc = minCapacity(tripleRules, L0, {to: 12, exact: true});
ok('quét sức chứa tối thiểu', mc != null && mc >= 3, '→ cần ' + mc + ' ô khay');

/* Khay 3 ô: chỉ thắng khi lấy đúng ba thẻ cùng màu liên tiếp. Bàn có 2 màu
   nên gần như chắc chắn bí — đây là phép thử "vô nghiệm phải là CHỨNG MINH". */
const tight = solve(tripleRules, L0, {cap: 3, exact: true});
ok('vét cạn ở khay 3 ô cho kết luận dứt khoát',
   tight.ok || tight.reason === 'unsolvable',
   '→ ' + (tight.ok ? 'thắng được' : 'chứng minh vô nghiệm sau ' + tight.nodes + ' node'));

/* beam chỉ được sai về phía BÁO CHẬT HƠN THẬT, không bao giờ ngược lại. */
let asym = true;
for(let cap = 3; cap <= 9; cap++){
  const b = solve(tripleRules, L0, {cap, beam: 24});
  const e = solve(tripleRules, L0, {cap, exact: true});
  if(b.ok && !e.ok) asym = false;
}
ok('beam bất đối xứng đúng chiều: thấy đường thì vét cạn cũng thấy', asym);

/* ── 2. quản lý bộ level ──────────────────────────────────────── */
let ls = reindex([tripleTile.emptyLevel(0)]);
ls = addLevel(ls, tripleTile);
ls = addLevel(ls, tripleTile);
ok('thêm level, tên không trùng', new Set(ls.map(L => L.name)).size === ls.length,
   '→ ' + ls.map(L => L.name).join(', '));

ls = duplicateLevel(ls, 0);
ok('nhân bản, index đánh lại liền mạch', ls.every((L, i) => L.index === i), '→ ' + ls.length + ' level');

ls = moveLevel(ls, 0, 2);
ok('đổi chỗ, index vẫn liền mạch', ls.every((L, i) => L.index === i));

const rn = renameLevel(ls, 1, ls[2].name);
ok('đổi tên trùng thì tự né VÀ báo cũ→mới cho bên gọi dời cache',
   rn.levels[1].name !== ls[2].name && rn.from && rn.to);

let one = ls;
while(one.length > 1) one = removeLevel(one, 0, tripleTile);
one = removeLevel(one, 0, tripleTile);
ok('xoá tới cùng vẫn còn một level hợp lệ, bộ không bao giờ rỗng',
   one.length === 1 && tripleTile.validate(one[0]).filter(m => m.k === 'bad').length === 0);

/* ── 3. JSON ──────────────────────────────────────────────────── */
const json = writeJSON(tripleTile, ls);
const back = readPayload(tripleTile, json);
ok('nạp lại JSON vừa xuất: đủ level, không lỗi',
   back.levels.length === ls.length && !back.errors.length);
ok('vòng JSON trùng TỪNG BYTE', writeJSON(tripleTile, back.levels) === json);

const bad = readPayload(tripleTile, '{"levels":[{"name":"X","rows":[[0,0]]}]}');
ok('level sai bất biến bị chặn ở cửa nạp, kèm lý do',
   bad.errors.length > 0, '→ "' + (bad.errors[0] || '') + '"');

const merged = mergeLevels(ls, [{...ls[0], rows: ls[0].rows}], 'merge');
ok('ghép kiểu merge: trùng tên thì đè, không đẻ bản sao', merged.length === ls.length);
ok('ghép kiểu append: trùng tên thì đổi tên, không mất level',
   mergeLevels(ls, [ls[0]], 'append').length === ls.length + 1);

/* ── 4. CSV ───────────────────────────────────────────────────── */
const csv = writeCSV(tripleTile, ls);
const rows = readCSV(tripleTile, csv);
ok('vòng CSV: xuất rồi nạp lại đủ dòng, không lỗi',
   rows.rows.length === ls.length && !rows.errors.length);
const blankCell = readCSV(tripleTile, 'name,difficulty,rows,triples,colors\nA,,,,');
ok('ô CSV trống = "theo mặc định", KHÔNG phải số 0',
   blankCell.rows[0].rows.length > 0, '→ ' + blankCell.rows[0].rows.length + ' hàng');

/* ── 5. thang điểm ────────────────────────────────────────────── */
const simOf = L => ({solvable: true, minCap: minCapacity(tripleRules, L, {to: 12})});
const s1 = scoreLevel(tripleTile, ls[0], simOf(ls[0]));
ok('chấm điểm ra dải hợp lệ', s1.score >= 0 && s1.score <= 100,
   '→ ' + s1.score + ' (' + s1.band + ')');
const stuck = scoreLevel(tripleTile, ls[0], {solvable: false});
ok('level không giải được luôn là 100', stuck.score === 100);

const cal = calibrate(tripleTile, ls, simOf);
ok('bộ hiệu chuẩn trả về cả mức khớp lẫn DANH SÁCH lệch',
   cal.total === ls.length && Array.isArray(cal.misses),
   '→ khớp ' + cal.hits + '/' + cal.total);

/* ── 6. hợp đồng tự bắt lỗi khai báo ──────────────────────────── */
const rej = f => { try{ f(); return ''; }catch(e){ return e.message; } };
ok('thiếu hàm bắt buộc thì báo ngay lúc nạp',
   /thiếu/.test(rej(() => defineGame({id: 'a', name: 'A'}))));
ok('trọng số không cộng bằng 1 thì báo',
   /cộng lại bằng 1/.test(rej(() => defineGame({
     id: 'a', name: 'A', emptyLevel(){}, readLevel(){}, writeLevel(){}, validate(){},
     axes: {x: () => 0}, weights: {x: 0.9}}))));
ok('id sai định dạng thì báo (nó là khoá lưu trữ)',
   /id chỉ nhận/.test(rej(() => defineGame({
     id: 'Có Dấu', name: 'A', emptyLevel(){}, readLevel(){}, writeLevel(){}, validate(){}}))));

console.log('\n' + (fails ? '✗ ' + fails + ' phép kiểm THẤT BẠI' : '✓ lõi forge chạy đúng') + '\n');
process.exit(fails ? 1 : 0);
