#!/usr/bin/env node
// gdd-sheet-sync: in bảng ô lệch từ kết quả __ss.doiChieu() (lưu ra file JSON) so với nguồn.
// Chạy: node doi-chieu.mjs <nguồn .tsv|.csv> --ket-qua <file.json> [--bo-dong-dau n]
import { readFileSync } from "node:fs";
import { docNguon, chuanO, soSangCot } from "./chung.mjs";

const a = process.argv.slice(2);
const opt = (k, d) => (a.includes(k) ? a[a.indexOf(k) + 1] : d);
const nguon = a.find((x, i) => !x.startsWith("--") && !(i > 0 && a[i - 1].startsWith("--")));
const fKq = opt("--ket-qua");
if (!nguon || !fKq) { console.log("Cách dùng: node doi-chieu.mjs <nguồn> --ket-qua <file.json> [--bo-dong-dau n]"); process.exit(2); }
const kq = JSON.parse(readFileSync(fKq, "utf8"));
const { rows, ncol } = docNguon(nguon, +opt("--bo-dong-dau", 0));
const c0 = (() => { const m = /^([A-Z]+)/.exec(kq.o); let c = 0; for (const ch of m[1]) c = c * 26 + ch.charCodeAt(0) - 64; return c - 1; })();
const ngan = (s) => { s = s.replace(/\n/g, " / ").replace(/\|/g, "/"); return s.length > 70 ? s.slice(0, 67) + "..." : s; };

console.log(`## Đối chiếu tab "${kq.tab}" từ ${kq.o} với ${nguon}\n`);
console.log(`| Hàng nguồn | Hàng lệch | Hàng thừa trên tab |\n|---|---|---|\n| ${kq.hangNguon} | ${kq.lech} | ${kq.thua.length ? kq.thua.join(", ") : 0} |\n`);
if (kq.nhomKhop?.length) console.log(`Hàng nhóm khớp theo chữ (ô gộp trải ngang, đúng thiết kế): ${kq.nhomKhop.join(", ")}\n`);
if (kq.goiY) console.log(`Gợi ý: ${kq.goiY}\n`);
let soO = 0;
const bang = [];
for (const h of kq.chiTiet) {
  const src = rows[h.nguon - 1] || [];
  for (let j = 0; j < ncol; j++) {
    const tren = chuanO(h.o[j]), can = chuanO(src[j]);
    if (tren !== can) { soO++; bang.push(`| ${soSangCot(c0 + j)}${h.hang} | ${ngan(tren) || "(trống)"} | ${ngan(can) || "(trống)"} |`); }
  }
}
if (bang.length) console.log(`| Ô | Trên tab | Nguồn |\n|---|---|---|\n${bang.join("\n")}\n`);
if (kq.lech > kq.chiTiet.length) console.log(`Chỉ in ${kq.chiTiet.length}/${kq.lech} hàng lệch đầu tiên.`);
console.log(kq.lech === 0 && !kq.thua.length ? "KẾT QUẢ: KHỚP (0 ô lệch, 0 hàng thừa)" : `KẾT QUẢ: LỆCH (${soO} ô ở ${kq.lech} hàng, ${kq.thua.length} hàng thừa)`);
process.exit(kq.lech === 0 && !kq.thua.length ? 0 : 1);
