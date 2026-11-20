// gdd-sheet-sync: phần dùng chung cho các script Node. FNV, chuẩn hóa ô và parse CSV phải giống hệt trang.js (selftest kiểm).
import { readFileSync } from "node:fs";
import { extname } from "node:path";

export function parseCsv(s) {
  s = s.replace(/\r\n/g, "\n");
  const rows = []; let row = [], f = "", q = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (q) { if (c === '"') { if (s[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true;
    else if (c === ",") { row.push(f); f = ""; }
    else if (c === "\n") { row.push(f); rows.push(row); row = []; f = ""; }
    else f += c;
  }
  if (f !== "" || row.length) { row.push(f); rows.push(row); }
  return rows;
}

export function fnv(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, "0");
}
export const chuanO = (v) => (v == null ? "" : String(v)).replace(/\r\n/g, "\n").replace(/\s+$/, "");
export const hashHang = (cells, c0, n) => { const a = []; for (let j = 0; j < n; j++) a.push(chuanO(cells[c0 + j])); return fnv(a.join("\u0001")); };
export const soSangCot = (c) => { let s = ""; c++; while (c) { const m = (c - 1) % 26; s = String.fromCharCode(65 + m) + s; c = (c - m - 1) / 26; } return s; };

// Đọc nguồn: .tsv (xuống dòng trong ô ghi bằng chuỗi \n, quy ước của skill gdd) hoặc .csv (RFC 4180).
export function docNguon(path, boDongDau = 0) {
  const text = readFileSync(path, "utf8").replace(/^﻿/, "");
  let rows;
  if (extname(path).toLowerCase() === ".csv") rows = parseCsv(text);
  else {
    const BS = String.fromCharCode(92);
    rows = text.replace(/\r\n/g, "\n").split("\n").map((l) => l.split("\t").map((c) => c.split(BS + "n").join("\n")));
  }
  while (rows.length && rows[rows.length - 1].every((c) => c.trim() === "")) rows.pop();
  rows = rows.slice(boDongDau);
  const ncol = Math.max(...rows.map((r) => r.length));
  rows = rows.map((r) => { const a = r.slice(); while (a.length < ncol) a.push(""); return a; });
  return { rows, ncol };
}

// Chữ thuần để dán vào ô có sẵn: kiểu Excel, ô có tab, xuống dòng hoặc ngoặc kép thì bọc ngoặc kép.
export function sangPlain(rows) {
  const o = (v) => (/[\t\n"]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v);
  return rows.map((r) => r.map(o).join("\t")).join("\n");
}

// Nén HTML: gom các style="..." lặp lại thành từ điển; trang.js nap() giải nén.
export function nenHtml(html) {
  const kieu = [], idx = new Map();
  const out = html.replace(/style="([^"]*)"/g, (_, s) => {
    if (!idx.has(s)) { idx.set(s, kieu.length); kieu.push(s); }
    return `style="\u0002${idx.get(s)}\u0003"`;
  });
  return { html: out, kieu };
}
export const giaiNenHtml = (html, kieu) => html.replace(/\u0002(\d+)\u0003/g, (_, i) => kieu[+i]);

// Nội dung ô của bảng HTML như Sheet sẽ nhận: bỏ thẻ, <br> là xuống dòng, giải mã thực thể, colspan trải thành ô trống.
export function oCuaHtml(html) {
  const giai = (s) => s.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
  return [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].map((m) => {
    const a = [];
    for (const c of m[1].matchAll(/<td([^>]*)>([\s\S]*?)<\/td>/gi)) {
      a.push(giai(c[2]));
      const cs = +((/colspan="(\d+)"/i.exec(c[1]) || [])[1] || 1);
      for (let k = 1; k < cs; k++) a.push("");
    }
    return a;
  });
}

// So bảng nguồn (TSV) với bảng HTML từng ô; hàng nhóm (đúng một ô có chữ) so theo chữ vì ô gộp có thể đặt chữ ở cột khác.
export function soNguonHtml(rows, html, ncol) {
  const h = oCuaHtml(html), lech = [];
  const n = Math.max(rows.length, h.length);
  for (let i = 0; i < n; i++) {
    const a = rows[i] || [], b = h[i] || [];
    const coA = a.map(chuanO).filter((v) => v !== ""), coB = b.map(chuanO).filter((v) => v !== "");
    if (coA.length === 1 && coB.length === 1 && coA[0] === coB[0]) continue;
    for (let j = 0; j < ncol; j++) if (chuanO(a[j]) !== chuanO(b[j])) lech.push({ hang: i + 1, cot: j, tsv: chuanO(a[j]), html: chuanO(b[j]) });
  }
  return { hangHtml: h.length, lech };
}

// Sheet làm đậm CẢ ô khi ô chỉ đậm một phần: tìm và bỏ <b> nằm trong ô có chữ khác ngoài phần đậm.
export function boDamMotPhan(html) {
  let so = 0;
  const out = html.replace(/(<td[^>]*>)([\s\S]*?)(<\/td>)/g, (m, a, body, z) => {
    if (!/<b>/.test(body)) return m;
    const conLai = body.replace(/<b>[\s\S]*?<\/b>/g, "").replace(/<br>/g, "").trim();
    if (!conLai) return m;
    so++;
    return a + body.replace(/<\/?b>/g, "") + z;
  });
  return { html: out, so };
}
