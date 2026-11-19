#!/usr/bin/env node
// Sinh HTML bảng có màu (sẵn dán vào Google Sheet) từ các file TSV trong thư mục sheet của project.
// Bảng màu: ../references/sheet-6-tab.md mục 3 (nguồn knowledge 50).
// Chạy: node sheet-html.mjs <thư mục sheet> [--tab <tên file .tsv>]
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

const args = process.argv.slice(2);
const dir = args.find((a) => !a.startsWith("--"));
if (!dir || !existsSync(dir)) {
  console.log("Cách dùng: node sheet-html.mjs <thư mục sheet> [--tab <file.tsv>]");
  process.exit(2);
}
const onlyTab = args.includes("--tab") ? args[args.indexOf("--tab") + 1] : null;

const C = {
  header: "#c0504d", muc: "#fce4d6", groupMain: "#fce4d6", groupAsset: "#b4a7d6", groupTut: "#fce5cd",
  done: "#b6d7a8", update: "#f4cccc", de: "#b6d7a8", vua: "#ffe599", kho: "#f4cccc", ratKho: "#b4a7d6", border: "#bfbfbf",
};
const TAB_NAME = {
  "01-gameplay": "Gameplay", "02-main-task": "Main Task", "03-level-curve": "Level Curve",
  "04-level-data": "Level Data", "05-tutorials": "Tutorials", "06-asset-man-hinh": "Asset & Màn hình",
};
const GROUP_COLOR = { "02-main-task": C.groupMain, "05-tutorials": C.groupTut, "06-asset-man-hinh": C.groupAsset };

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const cellHtml = (s) => esc(s).replace(/\\n/g, "<br>");
const base = `border:1px solid ${C.border};vertical-align:middle;font-family:Arial;font-size:10pt;padding:4px;`;

function nhanColor(v) {
  const t = v.trim().toLowerCase();
  if (t === "dễ") return C.de;
  if (t === "vừa") return C.vua;
  if (t === "khó") return C.kho;
  if (t === "rất khó" || t === "cực khó") return C.ratKho;
  return null;
}
function trangThaiColor(v) {
  const t = v.trim().toLowerCase();
  if (/^(đã làm|done|xong)$/.test(t)) return C.done;
  if (/^(cần update|update|sửa)$/.test(t)) return C.update;
  return null;
}

function render(tsvPath) {
  const key = basename(tsvPath, ".tsv");
  const text = readFileSync(tsvPath, "utf8").replace(/^﻿/, "");
  const rows = text.split(/\r?\n/).filter((l) => l.trim() !== "").map((l) => l.split("\t"));
  if (!rows.length) return { html: "", n: 0 };
  const header = rows[0].map((h) => h.trim());
  const ncol = header.length;
  const colMuc = header.findIndex((h) => /^mục$/i.test(h));
  const colNhan = header.findIndex((h) => /^nhãn$/i.test(h));
  const colTrangThai = header.findIndex((h) => /^trạng thái$/i.test(h));
  const groupColor = GROUP_COLOR[key] || null;

  let html = `<table style="border-collapse:collapse">\n<tr>`;
  for (const h of header) html += `<td style="${base}background:${C.header};color:#ffffff;font-weight:bold">${cellHtml(h)}</td>`;
  html += `</tr>\n`;
  for (const r of rows.slice(1)) {
    while (r.length < ncol) r.push("");
    const nonEmpty = r.filter((c) => c.trim() !== "");
    if (groupColor && nonEmpty.length === 1) {
      html += `<tr><td colspan="${ncol}" style="${base}background:${groupColor};font-weight:bold">${cellHtml(nonEmpty[0].trim())}</td></tr>\n`;
      continue;
    }
    html += "<tr>";
    r.slice(0, ncol).forEach((c, i) => {
      let bg = null;
      if (i === colMuc) bg = C.muc;
      if (i === colNhan) bg = nhanColor(c) || bg;
      if (i === colTrangThai) bg = trangThaiColor(c) || bg;
      html += `<td style="${base}${bg ? `background:${bg};` : ""}">${cellHtml(c)}</td>`;
    });
    html += "</tr>\n";
  }
  html += "</table>\n";
  return { html: `<meta charset="utf-8">\n${html}`, n: rows.length - 1 };
}

const tsvs = readdirSync(dir).filter((f) => f.endsWith(".tsv") && (!onlyTab || f === onlyTab)).sort();
const summary = [];
for (const f of tsvs) {
  // Tab có script sinh riêng (sinh-<tên>.mjs cùng thư mục) thì không ghi đè HTML của nó (game chữ 20/10/2026)
  const own = join(dir, `sinh-${basename(f, ".tsv")}.mjs`);
  if (existsSync(own)) { console.log(`${f}: bỏ qua, HTML do ${basename(own)} sinh`); continue; }
  const { html, n } = render(join(dir, f));
  const out = join(dir, f.replace(/\.tsv$/, ".html"));
  writeFileSync(out, html, "utf8");
  const key = basename(f, ".tsv");
  summary.push({ f, html: basename(out), tab: TAB_NAME[key] || key, n });
  console.log(`${f} -> ${basename(out)} (${n} hàng)`);
}

// README: giữ phần ngoài hai dấu mốc, sinh lại phần giữa
const START = "<!-- sheet-html:start -->", END = "<!-- sheet-html:end -->";
const today = new Date().toISOString().slice(0, 10).split("-").reverse().join("/");
let block = `${START}\n## Dán lên Google Sheet (sinh ${today})\n\n| File HTML | Tab đích | Số hàng dữ liệu | Dán từ ô |\n|---|---|---|---|\n`;
for (const s of summary) block += `| ${s.html} | ${s.tab} | ${s.n} | A1 (tab mới) hoặc hàng trống đầu tiên (cập nhật) |\n`;
block += `
Cách dán qua browser (không có connector; có connector thì theo references/tao-sheet.md):
1. Đọc lại tab đích nguyên văn trước khi dán; Lead tự sửa song song.
2. Chọn ô đầu, dán nội dung file .html bằng sự kiện paste kiểu text/html để giữ màu, đậm, gộp ô, xuống dòng. Cần chữ thuần thì dán file .tsv.
3. Sau dán: Định dạng > Xuống dòng tự động; căn giữa dọc; chỉnh độ rộng cột tay.
4. Soát trên sheet: gạch dài, gạch ngắn, emoji.
Màu: tiêu đề #c0504d chữ trắng; cột Mục và nhóm Main Task #fce4d6; nhóm Asset #b4a7d6; khối Tutorials #fce5cd; Đã làm #b6d7a8; Cần update #f4cccc; nhãn Vừa #ffe599; Rất khó và Cực khó #b4a7d6; nhãn Dễ và Khó là [GIẢ ĐỊNH].
${END}`;
const readme = join(dir, "README.md");
let content = existsSync(readme) ? readFileSync(readme, "utf8") : `# Sheet GDD\n\n`;
if (content.includes(START) && content.includes(END)) {
  // Bảng đã có người giữ (ô đầu, tab đích, người giữ nguồn): không ghi đè, chỉ in số hàng để cập nhật tay.
  // Trước 20/10/2026 lệnh --tab ghi đè bảng chỉ còn một dòng, lặp 3 lần ở game chữ.
  console.log(`README.md giữ nguyên. Số hàng mới để cập nhật bảng: ${summary.map((s) => `${s.html} ${s.n}`).join(", ") || "không có"}.`);
} else {
  content = content.trimEnd() + "\n\n" + block + "\n";
  writeFileSync(readme, content, "utf8");
  console.log(`README.md tạo bảng (${summary.length} tab).`);
}
