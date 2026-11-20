#!/usr/bin/env node
// gdd-sheet-sync: đóng gói một bảng nguồn thành payload nạp vào trang Sheet (trang.js -> __ss.nap(...)).
// Chạy: node goi.mjs <nguồn .tsv|.csv> --tab "<tên tab>" [--che-do doi-chieu|moi|o] [--o A1] [--bo-dong-dau n] [--html <file>] [--ra <thư mục>]
//  doi-chieu: chỉ hash từng hàng (nhẹ).  moi: kèm HTML có màu (lấy file .html cùng tên).  o: kèm chữ thuần để dán vào ô có sẵn.
import { writeFileSync, existsSync, statSync, readFileSync, mkdirSync } from "node:fs";
import { basename, dirname, join, extname } from "node:path";
import { tmpdir } from "node:os";
import { docNguon, hashHang, sangPlain, nenHtml, boDamMotPhan, fnv, chuanO, soNguonHtml, soSangCot } from "./chung.mjs";

const a = process.argv.slice(2);
const opt = (k, d) => (a.includes(k) ? a[a.indexOf(k) + 1] : d);
const nguon = a.find((x, i) => !x.startsWith("--") && !(i > 0 && a[i - 1].startsWith("--")));
const tab = opt("--tab");
const cheDo = opt("--che-do", "doi-chieu");
const o = opt("--o", "A1").toUpperCase();
const boDong = +opt("--bo-dong-dau", 0);
const ra = opt("--ra", join(tmpdir(), "gdd-sheet-sync"));
if (!nguon || !tab || !["doi-chieu", "moi", "o"].includes(cheDo) || !/^[A-Z]+\d+$/.test(o)) {
  console.log('Cách dùng: node goi.mjs <nguồn .tsv|.csv> --tab "<tên tab>" [--che-do doi-chieu|moi|o] [--o A1] [--bo-dong-dau n] [--html <file>] [--ra <thư mục>]');
  process.exit(2);
}
const canhBao = [];
const { rows, ncol } = docNguon(nguon, boDong);
const ten = basename(nguon, extname(nguon));
const p = { ten, tab, o, ncol, cheDo, hashes: rows.map((r) => hashHang(r, 0, ncol)), nhom: {} };
// Hàng nhóm (đúng một ô có chữ): trên Sheet là ô gộp trải ngang nên chữ có thể nằm ở cột khác nguồn; so theo chữ.
rows.forEach((r, i) => { const co = r.filter((c) => chuanO(c) !== ""); if (ncol > 1 && co.length === 1) p.nhom[i] = fnv(chuanO(co[0])); });

if (cheDo === "moi") {
  if (boDong) { console.log("Chế độ moi dán cả bảng HTML, không dùng --bo-dong-dau."); process.exit(2); }
  const fHtml = opt("--html", join(dirname(nguon), ten + ".html"));
  if (!existsSync(fHtml)) { console.log(`Không thấy ${fHtml}. Sinh HTML trước (skill gdd: sheet-html.mjs --tab, hoặc script sinh riêng).`); process.exit(2); }
  if (statSync(fHtml).mtimeMs + 1000 < statSync(nguon).mtimeMs) canhBao.push(`${basename(fHtml)} cũ hơn ${basename(nguon)}: sinh lại HTML rồi đóng gói lại.`);
  const sinhRieng = join(dirname(nguon), `sinh-${ten}.mjs`);
  if (existsSync(sinhRieng)) canhBao.push(`Có script sinh riêng ${basename(sinhRieng)}: HTML phải do script này sinh (sheet-html.mjs không --tab sẽ ghi đè). Chạy lại nó nếu nghi bị đè.`);
  let html = readFileSync(fHtml, "utf8").replace(/^<meta[^>]*>\s*/, "");
  // Cổng: HTML (thứ được dán) phải có đúng nội dung ô của TSV (thứ QA chấm và đối chiếu). Lệch thì dừng.
  const so = soNguonHtml(rows, html, ncol);
  if (so.lech.length || so.hangHtml !== rows.length) {
    console.log(`DỪNG: ${basename(fHtml)} lệch ${basename(nguon)}: ${so.hangHtml} hàng HTML, ${rows.length} hàng TSV, ${so.lech.length} ô khác.`);
    console.log("| Ô | TSV | HTML |\n|---|---|---|");
    const ngan = (s) => (s.length > 50 ? s.slice(0, 47) + "..." : s).replace(/\n/g, " / ").replace(/\|/g, "/");
    for (const l of so.lech.slice(0, 20)) console.log(`| ${soSangCot(l.cot)}${l.hang} | ${ngan(l.tsv) || "(trống)"} | ${ngan(l.html) || "(trống)"} |`);
    console.log("Sinh lại cả hai file từ cùng một nguồn rồi đóng gói lại. Bỏ qua cổng này: --bo-qua-so-html (phải nói rõ trong báo cáo).");
    if (!a.includes("--bo-qua-so-html")) process.exit(1);
  }
  const b = boDamMotPhan(html); html = b.html;
  if (b.so) canhBao.push(`Đã bỏ <b> ở ${b.so} ô chỉ đậm một phần (Sheet sẽ đậm cả ô). Đậm phần chữ đó bằng tay sau khi dán nếu cần.`);
  const nen = nenHtml(html); p.html = nen.html; p.kieu = nen.kieu;
}
if (cheDo === "o") p.plain = sangPlain(rows);

mkdirSync(ra, { recursive: true });
const out = join(ra, `${ten}.payload.js`);
const js = `__ss.nap(${JSON.stringify(p)})`;
writeFileSync(out, js, "utf8");
console.log(`payload: ${out}`);
console.log(`tab "${tab}", ô đầu ${o}, ${rows.length} hàng x ${ncol} cột, chế độ ${cheDo}, ${js.length} ký tự`);
for (const c of canhBao) console.log("CẢNH BÁO: " + c);
