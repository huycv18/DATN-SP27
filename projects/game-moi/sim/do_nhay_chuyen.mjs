// Độ nhạy thời lượng chuyến (gd-world, GD-026 sau sim GD-030). Dùng sim của gd-tech, chỉ đổi bản sao tham số trong bộ nhớ.
// Chạy: node projects/game-moi/sim/do_nhay_chuyen.mjs  -> ghi do-nhay-chuyen.md cạnh file này.
import { writeFileSync } from 'node:fs';
import { CFG, NODE, moPhong } from '../tools/sim-chuyen.mjs';

const LAN = 600, SEED = 1, KB = 'trung bình';
const clone = (o) => JSON.parse(JSON.stringify(o));
const goc = Object.fromEntries(Object.entries(NODE).map(([k, v]) => [k, v.giay]));
const vn = (x, d = 1) => x.toFixed(d).replace('.', ',');
const chay = (sua, ch) => { const c = clone(CFG); sua(c, ch); return moPhong(c, ch, KB, 1, CFG.coop.kHeSo, SEED, LAN); };

const out = [`# Độ nhạy thời lượng chuyến (sinh bởi do_nhay_chuyen.mjs, ${new Date().toISOString().slice(0, 16)})`, '',
  `Sim gd-tech \`tools/sim-chuyen.mjs\`, seed ${SEED}, ${LAN} chuyến mỗi ô, một người, kịch bản ${KB}. Chỉ phần nhặt tài nguyên.`, ''];

out.push('## A. Đổi số hàng mỗi dải (diện tích), túi giữ nguyên', '', '| Hàng | Chương 1 phút | Chương 3 phút | Chương 5 phút |', '|---|---|---|---|');
const A = {};
for (const hang of [3, 4, 5]) {
  const r = ['1', '3', '5'].map((ch) => chay((c) => { c.khongGian.hang = hang; }, ch));
  A[hang] = r.map((x) => x.phut.p50);
  out.push(`| ${hang} | ${r.map((x) => vn(x.phut.p50)).join(' | ')} |`);
}

out.push('', '## B. Đổi giây khai thác mỗi node và cỡ túi, 3 hàng', '', '| Giây node so với hiện hành | Túi nhân | Ch1 phút | Ch1 về vì túi | Ch3 phút | Ch3 về vì túi | Ch5 phút | Ch5 về vì túi |', '|---|---|---|---|---|---|---|---|');
const B = {}, G = {};
for (const gx of [0.5, 1, 1.5]) {
  for (const [k, v] of Object.entries(NODE)) v.giay = goc[k] * gx;
  for (const tm of [1, 2, 3]) {
    const r = ['1', '3', '5'].map((ch) => chay((c, x) => { c.chuong[x].tui *= tm; }, ch));
    B[`${gx}x${tm}`] = r.map((x) => x.phut.p50);
    G[`${gx}x${tm}`] = r.map((x) => x.gtdNguoi);
    out.push(`| ${vn(gx, gx % 1 ? 1 : 0)} | ${tm} | ${r.map((x) => `${vn(x.phut.p50)} | ${(x.tuiDay * 100).toFixed(0)}%`).join(' | ')} |`);
  }
}
for (const [k, v] of Object.entries(NODE)) v.giay = goc[k];

// C. Đề xuất túi và bình (sim gd-tech đã có Driftlife từ 2026-11-20, giây node đã nhân 2)
const DE_XUAT = { '1': { tui: 80, binh: 330 }, '2': { tui: 100, binh: 450 }, '3': { tui: 126, binh: 600 }, '4': { tui: 168, binh: 780 }, '5': { tui: 216, binh: 1000 } };
const muc = { '1': [4, 6], '2': null, '3': null, '4': null, '5': [10, 12] };
out.push('', '## C. Đề xuất túi và bình theo chương (sim có Driftlife)', '',
  '| Chương | Túi | Bình | Phút P50 | Về vì túi | Bị kéo về, trung bình | Bị kéo về, tham | GTĐ một chuyến | Mục tiêu khung (phút) |', '|---|---|---|---|---|---|---|---|---|');
let ok = true;
for (const [ch, dx] of Object.entries(DE_XUAT)) {
  const sua = (c) => { c.chuong[ch].tui = dx.tui; c.chuong[ch].binh = dx.binh; };
  const c1 = clone(CFG); sua(c1);
  const r = moPhong(c1, ch, KB, 1, CFG.coop.kHeSo, SEED, LAN), g = moPhong(c1, ch, 'tham', 1, CFG.coop.kHeSo, SEED, LAN);
  const m = muc[ch];
  if (m && (r.phut.p50 < m[0] || r.phut.p50 > m[1])) ok = false;
  out.push(`| ${ch} | ${dx.tui} | ${dx.binh} | ${vn(r.phut.p50)} | ${(r.tuiDay * 100).toFixed(0)}% | ${(r.keo * 100).toFixed(0)}% | ${(g.keo * 100).toFixed(0)}% | ${vn(r.gtdNguoi)} | ${m ? m.join(' đến ') : 'không có'} |`);
}
console.assert(A[5][0] <= A[3][0] + 0.05, 'thêm hàng phải không kéo dài chương 1');
out.push('', `Tự kiểm đề xuất vào khung mục 9: ${ok ? 'ĐẠT' : 'KHÔNG ĐẠT'}`);
writeFileSync(new URL('./do-nhay-chuyen.md', import.meta.url), out.join('\n') + '\n');
console.log(out.join('\n'));
