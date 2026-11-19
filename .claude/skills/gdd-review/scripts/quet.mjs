#!/usr/bin/env node
// quet.mjs - quét QA dùng chung cho phòng Game Designer (GD-019b, gd-qa).
// Gom các phép kiểm máy lặp lại khi chấm cuốn chiếu: giờ sửa file, bản gọn so với nguồn,
// số đếm theo data level, ví dụ gắn data, mốc mechanic, từ cũ sau đổi tên, gạch dài và emoji.
// Không phụ thuộc thư viện. Mọi đường dẫn tính từ thư mục gốc repo (hoặc --goc).
//
// Cách dùng (một dòng mỗi phép; ghép được nhiều phép trong một lệnh):
//   node <thư mục skill gdd-review>/scripts/quet.mjs --selftest
//   node .../quet.mjs --project <slug>                          # chạy bộ mặc định cho project
//   node .../quet.mjs --gio file1 file2 --luu                   # in giờ sửa; --luu ghi mốc vào qa/.quet-gio.json
//   node .../quet.mjs --doi repo.tsv --csv sheet-export.csv      # so từng ô TSV repo với bản export CSV của Sheet (Lead đã sửa tay chưa)
//   node .../quet.mjs --project <slug> --doi                    # mọi gdd/sheet/<tab>.tsv so với gdd/sheet/_tren-sheet/<tab>.csv
//   File báo cáo lưu trữ (dòng đầu có "Trạng thái: dừng" hoặc "lưu trữ", thư mục luu-tru/, archive/, hoặc ghi trong
//   projects/<slug>/qa/luu-tru.txt) không đưa vào các phép quét doc.
//   node .../quet.mjs --gon gon.tsv --nguon nguon.tsv [--bo-qua-cot 8]
//   node .../quet.mjs --level levels/level-v1.csv --chan lock,ice,link,stone --tran-chan 0.5 --tran-tong 0.8 --dem coin --moc-ten "lock=Lock,coin=Coin"
//   node .../quet.mjs --level levels/level-v1.csv --dem-tu FRIES,GATE --doc docs...    # số level ghi trong doc so với đo
//   node .../quet.mjs --tu-cu-file projects/<slug>/qa/tu-cu.txt --doc dir-or-files
//   node .../quet.mjs --doc dir-or-files                        # gạch dài, emoji
// Mã thoát: 1 nếu có mục LỖI, 0 nếu chỉ OK hoặc CẢNH BÁO.
import { readFileSync, existsSync, statSync, readdirSync, writeFileSync, mkdirSync, mkdtempSync } from "node:fs";
import { join, resolve, dirname, extname, relative } from "node:path";
import { tmpdir } from "node:os";

const args = process.argv.slice(2);
const opt = {};
const lists = {};
const KEYS_LIST = new Set(["gio", "doc", "doi", "csv"]);
let cur = null;
for (const a of args) {
  if (a.startsWith("--")) {
    cur = a.slice(2);
    if (KEYS_LIST.has(cur)) lists[cur] = lists[cur] || [];
    else opt[cur] = true;
  } else if (cur) {
    if (KEYS_LIST.has(cur)) lists[cur].push(a);
    else if (opt[cur] === true) opt[cur] = a;
    else opt[cur] += "," + a;
  }
}
const GOC = resolve(opt.goc && opt.goc !== true ? opt.goc : process.cwd());
const R = (p) => resolve(GOC, p);

const ket = []; // {muc, mucDo, noi}
const add = (muc, mucDo, noi) => ket.push({ muc, mucDo, noi });
const doc = (p) => readFileSync(p, "utf8").replace(/^﻿/, "");

function layFile(p, ext = [".md", ".tsv", ".csv", ".txt", ".html"], bo = /(node_modules|\.git|[\\/]tmp[\\/])/) {
  const ra = [];
  const q = R(p);
  if (!existsSync(q)) { add("doc", "CẢNH BÁO", `không có đường dẫn ${p}`); return ra; }
  const duyet = (d) => {
    if (statSync(d).isDirectory()) { for (const f of readdirSync(d)) if (!bo.test(join(d, f))) duyet(join(d, f)); }
    else if (ext.includes(extname(d).toLowerCase())) ra.push(d);
  };
  duyet(q);
  return ra;
}
const hms = (t) => new Date(t).toTimeString().slice(0, 8);

// ---------- csv / tsv ----------
function parseCsv(txt, sep = ",") {
  const rows = []; let row = [], f = "", q = false;
  for (let i = 0; i < txt.length; i++) {
    const c = txt[i];
    if (q) { if (c === '"') { if (txt[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"' && f === "") q = true;
    else if (c === sep) { row.push(f); f = ""; }
    else if (c === "\n") { row.push(f.replace(/\r$/, "")); rows.push(row); row = []; f = ""; }
    else f += c;
  }
  if (f !== "" || row.length) { row.push(f.replace(/\r$/, "")); rows.push(row); }
  return rows;
}
const docTsv = (p) => parseCsv(doc(p), "\t").filter((r) => r.some((x) => x.trim() !== ""));

// ---------- 1. giờ sửa ----------
function kiemGio(files, luu, project) {
  const snapPath = R(project ? `projects/${project}/qa/.quet-gio.json` : ".quet-gio.json");
  const cu = existsSync(snapPath) ? JSON.parse(doc(snapPath)) : {};
  const moi = {};
  const dong = files.map((f) => { const m = statSync(f).mtimeMs; moi[relative(GOC, f)] = m; return [relative(GOC, f), hms(m), cu[relative(GOC, f)] ? (cu[relative(GOC, f)] === m ? "không đổi" : "ĐỔI sau lần lưu") : "mới"]; });
  const doi = dong.filter((d) => d[2] === "ĐỔI sau lần lưu");
  add("giờ sửa", doi.length ? "CẢNH BÁO" : "OK", `${dong.length} file; ${doi.length} file đổi sau lần lưu: ${doi.map((d) => `${d[0]} (${d[1]})`).join(", ") || "không"}`);
  for (const d of dong.slice(0, 40)) add("  giờ", "OK", `${d[1]}  ${d[0]}  ${d[2]}`);
  if (luu) { mkdirSync(dirname(snapPath), { recursive: true }); writeFileSync(snapPath, JSON.stringify({ ...cu, ...moi }, null, 1)); add("giờ sửa", "OK", `đã lưu mốc vào ${relative(GOC, snapPath)}`); }
}

// ---------- 1b. TSV repo so với bản export CSV của Sheet: so nội dung từng ô, không so giờ file ----------
// Sinh lại tab từ cấu hình sẽ đè chữ Lead sửa tay trên Sheet (đã gặp ở 3 sản phẩm). Lệch thì kéo Sheet về trước.
function kiemDoi(cap) {
  const chuan = (rows, laTsv) => rows.map((r) => r.map((x) => (laTsv ? x.replace(/\\n/g, "\n") : x).replace(/\r/g, "").trim()))
    .map((r) => { while (r.length && r[r.length - 1] === "") r.pop(); return r; }).filter((r) => r.length);
  for (const [tsv, csv] of cap) {
    if (!existsSync(R(tsv))) { add("Sheet so với repo", "CẢNH BÁO", `không có ${tsv}`); continue; }
    if (!csv || !existsSync(R(csv))) { add("Sheet so với repo", "CẢNH BÁO", `${tsv}: chưa có bản export CSV của Sheet${csv ? ` (${csv})` : ""}, kéo Sheet về trước khi sinh lại`); continue; }
    const a = chuan(docTsv(R(tsv)), true), b = chuan(parseCsv(doc(R(csv))), false);
    const lech = [];
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      const x = a[i] || [], y = b[i] || [];
      for (let c = 0; c < Math.max(x.length, y.length); c++) {
        if ((x[c] || "") !== (y[c] || "")) lech.push(`hàng ${i + 1} cột ${String.fromCharCode(65 + c)}: repo "${(x[c] || "").slice(0, 30).replace(/\n/g, " / ")}" khác Sheet "${(y[c] || "").slice(0, 30).replace(/\n/g, " / ")}"`);
      }
    }
    add("Sheet so với repo", lech.length ? "LỖI" : "OK", lech.length ? `${tsv}: ${lech.length} ô lệch, kéo bản Sheet về trước khi sinh lại: ${lech.slice(0, 5).join(" | ")}` : `${tsv}: ${a.length} hàng khớp từng ô với ${csv}`);
  }
}

// File báo cáo lưu trữ không quét: dòng đầu ghi "Trạng thái: dừng"/"lưu trữ", thư mục luu-tru/archive, hoặc có tên trong qa/luu-tru.txt
const RE_LUU_TRU = /trạng thái\s*:?\**\s*(dừng|lưu trữ|archived)/iu;
function boLuuTru(ds, project) {
  const ds0 = project && existsSync(R(`projects/${project}/qa/luu-tru.txt`))
    ? doc(R(`projects/${project}/qa/luu-tru.txt`)).split(/\r?\n/).map((s) => s.trim()).filter((s) => s && !s.startsWith("#")) : [];
  const giu = [], bo = [];
  for (const f of ds) {
    const rel = relative(GOC, f).replace(/\\/g, "/");
    const luu = /[\\/](luu-tru|archive)[\\/]/i.test(f) || ds0.some((x) => rel.endsWith(x)) ||
      (/\.(md|txt)$/i.test(f) && doc(f).split(/\r?\n/).slice(0, 14).some((s) => RE_LUU_TRU.test(s)));
    (luu ? bo : giu).push(f);
  }
  if (bo.length) add("file lưu trữ", "OK", `bỏ qua ${bo.length} file: ${bo.slice(0, 6).map((f) => relative(GOC, f)).join(", ")}`);
  return giu;
}

// ---------- 2. bản gọn so với nguồn ----------
const chuanO = (s) => s.replace(/\\n/g, " ").replace(/\s+/g, " ").replace(/^TB\d+(?::\s*|\s+)/, "").trim();
function kiemGon(gonP, nguonP, boQuaCot) {
  const bo = new Set((boQuaCot || "").split(",").filter(Boolean).map((x) => Number(x)));
  const a = docTsv(R(nguonP)), b = docTsv(R(gonP));
  const khoa = (r) => r[0].trim();
  const A = new Map(a.filter((r) => /^\d+$/.test(khoa(r))).map((r) => [khoa(r), r]));
  const B = new Map(b.filter((r) => /^\d+$/.test(khoa(r))).map((r) => [khoa(r), r]));
  const loi = [];
  for (const k of A.keys()) if (!B.has(k)) loi.push(`thiếu hàng ${k} ở bản gọn`);
  for (const k of B.keys()) if (!A.has(k)) loi.push(`hàng ${k} chỉ có ở bản gọn`);
  for (const [k, ra] of A) {
    const rb = B.get(k); if (!rb) continue;
    for (let c = 1; c < Math.max(ra.length, rb.length); c++) {
      if (bo.has(c)) continue;
      const x = chuanO(ra[c] || ""), y = chuanO(rb[c] || "");
      if (x !== y) loi.push(`hàng ${k} cột ${c}: nguồn "${x.slice(0, 50)}" khác gọn "${y.slice(0, 50)}"`);
    }
  }
  const cotKhac = new Set(b.map((r) => r.length));
  add("bản gọn so với nguồn", loi.length ? "LỖI" : "OK", loi.length ? `${loi.length} lệch: ${loi.slice(0, 6).join(" | ")}` : `${A.size} bước khớp nguồn từng ô (bỏ cột ${[...bo].join(",") || "không"}); số cột các hàng gọn: ${[...cotKhac].join(",")}`);
}

// ---------- 3. data level ----------
const TEN = {
  level: ["level"], box: ["box_order", "box order"], words: ["word_list", "word list"], mech: ["mechanic"], tong: ["tong_chu", "tổng chữ"], tag: ["tag"],
};
function timCot(h, ten) { const i = h.findIndex((x) => ten.includes(x.trim().toLowerCase())); return i; }
function docLevel(p) {
  const rows = parseCsv(doc(R(p)), ","); const h = rows[0].map((x) => x.trim().toLowerCase());
  const ix = Object.fromEntries(Object.entries(TEN).map(([k, v]) => [k, timCot(h, v)]));
  const ls = rows.slice(1).filter((r) => r[ix.level] && /^\d+$/.test(r[ix.level].trim())).map((r) => {
    const words = (r[ix.words] || "").split(",").map((w) => w.trim().toUpperCase()).filter(Boolean);
    return { n: Number(r[ix.level]), tag: ix.tag >= 0 ? r[ix.tag] : "", box: ix.box >= 0 ? Number(r[ix.box]) : null, words, tong: ix.tong >= 0 && r[ix.tong] ? Number(r[ix.tong]) : null, mech: (r[ix.mech] || "").trim() };
  });
  return ls;
}
function parseMech(m) {
  const d = {};
  for (const part of m.split(";")) {
    const p = part.trim(); if (!p) continue;
    const i = p.indexOf(":"); if (i < 0) continue;
    const ten = p.slice(0, i).trim().toLowerCase().split(/\s+/)[0]; const v = p.slice(i + 1).trim();
    if (/^\d+$/.test(v)) d[ten] = { dem: Number(v) };
    else d[ten] = { chuoi: v.split(",").map((x) => x.trim().split("-").map(Number)) };
  }
  return d;
}
const tai = (chuoi, t) => { let c = 0; for (const [a, b] of chuoi) if (a <= t) c = b; return c; };

function kiemLevel(p, o) {
  const ls = docLevel(p);
  const loiCau = [];
  for (const l of ls) {
    if (l.box != null && l.box !== l.words.length) loiCau.push(`L${l.n}: box ${l.box} khác ${l.words.length} từ`);
    if (new Set(l.words).size !== l.words.length) loiCau.push(`L${l.n}: từ trùng trong level`);
    const t = l.words.reduce((s, w) => s + w.length, 0);
    if (l.tong != null && l.tong !== t) loiCau.push(`L${l.n}: tổng chữ ghi ${l.tong}, đo ${t}`);
  }
  add("level: cấu trúc", loiCau.length ? "LỖI" : "OK", loiCau.length ? loiCau.slice(0, 6).join(" | ") : `${ls.length} level; box order, từ trùng, tổng chữ đều khớp`);
  const mech = ls.map((l) => ({ l, d: parseMech(l.mech) }));
  const tenAll = new Set(mech.flatMap((m) => Object.keys(m.d)));
  const dau = {}, dem = {};
  for (const { l, d } of mech) for (const k of Object.keys(d)) { dem[k] = (dem[k] || 0) + 1; if (dau[k] == null) dau[k] = l.n; }
  add("level: mốc mechanic", "OK", [...tenAll].map((k) => `${k} L${dau[k]} (${dem[k]} level)`).join("; "));
  // trần mật độ
  const chan = (o.chan || "").split(",").filter(Boolean).map((s) => s.toLowerCase());
  const demCoin = (o.dem || "").split(",").filter(Boolean).map((s) => s.toLowerCase());
  const tranChan = o["tran-chan"] ? Number(o["tran-chan"]) : null, tranTong = o["tran-tong"] ? Number(o["tran-tong"]) : null;
  if (chan.length && (tranChan != null || tranTong != null)) {
    const vC = [], vT = []; let max = 0;
    for (const { l, d } of mech) {
      const tong = l.words.reduce((s, w) => s + w.length, 0);
      const diem = new Set([0]);
      for (const k of Object.keys(d)) if (d[k].chuoi) for (const [a] of d[k].chuoi) diem.add(a);
      let mc = 0, mt = 0;
      for (const t of diem) {
        let sc = 0, st = 0;
        for (const k of Object.keys(d)) {
          const v = d[k].chuoi ? tai(d[k].chuoi, t) : (demCoin.includes(k) && tong ? d[k].dem / tong : 0);
          if (chan.includes(k)) sc += v;
          st += v;
        }
        mc = Math.max(mc, sc); mt = Math.max(mt, st);
      }
      max = Math.max(max, mt);
      if (tranChan != null && mc > tranChan + 1e-9) vC.push(`L${l.n}=${mc.toFixed(2)}`);
      if (tranTong != null && mt > tranTong + 1e-9) vT.push(`L${l.n}=${mt.toFixed(2)}`);
    }
    add("level: trần mật độ", vC.length || vT.length ? "LỖI" : "OK", vC.length || vT.length ? `vượt trần chặn ${tranChan}: ${vC.join(",") || "không"}; vượt trần tổng ${tranTong}: ${vT.join(",") || "không"}` : `0 level vượt (chặn ≤ ${tranChan}, tổng ≤ ${tranTong}); tổng lớn nhất ${max.toFixed(2)}`);
  }
  return { ls, dau };
}

// ---------- 4. số trong doc so với data ----------
function kiemDocData(ls, dau, o, docs) {
  const ten = Object.fromEntries((o["moc-ten"] || "").split(",").filter(Boolean).map((s) => s.split("=")));
  const loiTu = [], loiVd = [], loiMoc = [];
  const tu = (o["dem-tu"] || "").split(",").filter(Boolean).map((s) => s.toUpperCase());
  const dem = Object.fromEntries(tu.map((w) => [w, ls.filter((l) => l.words.includes(w)).map((l) => l.n)]));
  const hop = new Set(ls.filter((l) => tu.some((w) => l.words.includes(w))).map((l) => l.n));
  if (tu.length) add("level: đếm từ", "OK", tu.map((w) => `${w} ${dem[w].length} level`).join("; ") + `; hợp ${hop.size} level`);
  for (const f of docs) {
    if (/DECISIONS|[\\/](qa|briefs|tham-chieu)[\\/]/i.test(f)) continue; // lịch sử, ghi số theo thời điểm
    const dong = doc(f).split("\n");
    dong.forEach((s, i) => {
      const where = `${relative(GOC, f)}:${i + 1}`;
      // số level ghi cạnh từ
      if (tu.length && /\b\d+\s*level/i.test(s)) {
        const co = tu.filter((w) => new RegExp("\\b" + w + "\\b", "i").test(s));
        if (co.length && !/V0\.5|V1 nháp/i.test(s)) {
          const nums = [...s.matchAll(/(\d+)\s*level/gi)].map((m) => Number(m[1]));
          const dung = new Set([...co.map((w) => dem[w].length), co.length > 1 ? new Set(ls.filter((l) => co.some((w) => l.words.includes(w))).map((l) => l.n)).size : -1]);
          for (const n of nums) if (!dung.has(n)) loiTu.push(`${where}: ghi ${n} level cạnh ${co.join("/")}, đo ${co.map((w) => `${w} ${dem[w].length}`).join(", ")}${co.length > 1 ? `, hợp ${new Set(ls.filter((l) => co.some((w) => l.words.includes(w))).map((l) => l.n)).size}` : ""}`);
        }
      }
      // ví dụ L<n> + danh sách từ in hoa
      const m = s.match(/\bL(\d+)\b[^\n]{0,12}?((?:[A-Z]{3,}(?:,\s*|\s+và\s+)){1,}[A-Z]{3,})/);
      if (m && /ví dụ|vd/i.test(s) && !/V0\.5|bỏ|thay|đổi|->|→|nháp/i.test(s)) {
        const n = Number(m[1]); const lv = ls.find((l) => l.n === n);
        const tuDoc = m[2].split(/,\s*|\s+và\s+/).map((x) => x.trim()).filter(Boolean);
        if (lv && tuDoc.length >= 2 && tuDoc.every((w) => /^[A-Z]{3,}$/.test(w)) && [...tuDoc].sort().join() !== [...lv.words].sort().join()) loiVd.push(`${where}: ví dụ L${n} ghi ${tuDoc.join(", ")}, data là ${lv.words.join(", ")}`);
      }
      // mốc: "<ten> L<n>"
      if (/mốc|giới thiệu|level đầu|đầu tiên/i.test(s) && !/^\|\s*\d{2}\/\d{2}\/\d{4}\s*\|/.test(s)) for (const [k, tenDoc] of Object.entries(ten)) {
        const re = new RegExp(tenDoc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "[^\\w\\d\\n]{0,4}(?:mốc\\s*)?L(\\d+)", "g");
        for (const mm of s.matchAll(re)) if (dau[k] != null && Number(mm[1]) !== dau[k] && !/mốc cũ|cũ|trước đây|V0\.5/i.test(s)) loiMoc.push(`${where}: ghi ${tenDoc} L${mm[1]}, data ${k} L${dau[k]}`);
      }
    });
  }
  if (tu.length) add("doc: số level cạnh từ", loiTu.length ? "LỖI" : "OK", loiTu.length ? loiTu.slice(0, 6).join(" | ") : "mọi số level ghi cạnh từ khớp đo");
  add("doc: ví dụ gắn data", loiVd.length ? "LỖI" : "OK", loiVd.length ? loiVd.slice(0, 6).join(" | ") : "ví dụ level + từ khớp data (hoặc không có)");
  if (Object.keys(ten).length) add("doc: mốc mechanic", loiMoc.length ? "LỖI" : "OK", loiMoc.length ? loiMoc.slice(0, 6).join(" | ") : "mọi mốc ghi trong doc khớp data");
}

// ---------- 5. từ cũ sau đổi tên ----------
function kiemTuCu(fileTuCu, docs) {
  const cap = doc(R(fileTuCu)).split(/\r?\n/).map((s) => s.trim()).filter((s) => s && !s.startsWith("#"));
  // dòng có dấu hiệu lịch sử, so sánh với bản cũ, hoặc comment code thì không tính là còn dùng từ cũ
  const bo = /(tạm gác|giữ làm lịch sử|lịch sử thay đổi|thay cho|đổi tên|đổi thành|đổi sang|đổi từ|trước là|trước đó|trước khi|lúc trước|trước đây|bản cũ|thay bằng|thay thế|đã thay|được thay|đã bỏ|đã gỡ|gỡ khỏi|\(cũ\)|DECISIONS|nháp không áp|^\s*\/\/|^\s*#|^\|\s*\d{2}\/\d{2}\/\d{4}\s*\|)/i;
  const tam = /(tạm gác|không thuộc V1|giữ làm lịch sử|đã thay bằng|thay bằng `|được thay)/i;
  const hit = []; const boFile = [];
  for (const f of docs) {
    const dong = doc(f).split(/\r?\n/);
    if (/tam-gac|tu-vung|v0\.5-goc|DECISIONS|[\\/](qa|briefs|tham-chieu)[\\/]/i.test(f) || dong.slice(0, 14).some((s) => tam.test(s))) { boFile.push(relative(GOC, f)); continue; }
    let boTu = 0; // mức tiêu đề đang bỏ qua (phụ lục, lịch sử)
    dong.forEach((s, i) => {
      const h = s.match(/^(#+)\s+(.*)/);
      if (h) { const m = h[1].length; if (boTu && m <= boTu) boTu = 0; if (!boTu && /(phụ lục|đã bỏ|lịch sử|tạm gác)/i.test(h[2])) boTu = m; }
      if (boTu || bo.test(s)) return;
      const co = [];
      for (const c of cap) {
        const [cu, moi] = c.split("->").map((x) => x.trim());
        if (cu && new RegExp(cu.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(s)) co.push(`"${cu}" (nay: ${moi || "?"})`);
      }
      if (co.length) hit.push({ vitri: `${relative(GOC, f)}:${i + 1}`, tu: co.join(", "), dong: s.trim().slice(0, 140) });
    });
  }
  add("từ cũ sau đổi tên", hit.length ? "LỖI" : "OK", (hit.length ? `${hit.length} dòng: ${hit.slice(0, 8).map((h) => `${h.vitri} ${h.tu}`).join(" | ")}` : `${cap.length} từ cũ, 0 dòng còn dùng`) + `; bỏ ${boFile.length} file (briefs, tham-chieu, tạm gác, lịch sử, QA, DECISIONS, từ vựng, phụ lục) và dòng ghi "trước là", "thay", "đổi từ", "tạm gác", hàng lịch sử có ngày, comment code`);
  if (opt["day-du"]) tuCuDayDu = hit;
}
let tuCuDayDu = null;

// ---------- 6. gạch dài, emoji ----------
function kiemKyTu(docs) {
  const emo = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B50}\u{2705}\u{274C}]/u;
  const gach = [], em = [];
  for (const f of docs) doc(f).split("\n").forEach((s, i) => { if (new RegExp("[" + String.fromCharCode(0x2014, 0x2013) + "]").test(s)) gach.push(`${relative(GOC, f)}:${i + 1}`); if (emo.test(s)) em.push(`${relative(GOC, f)}:${i + 1}`); });
  add("gạch dài", gach.length ? "LỖI" : "OK", gach.length ? `${gach.length} dòng: ${gach.slice(0, 6).join(", ")}` : `0 trên ${docs.length} file`);
  add("emoji", em.length ? "LỖI" : "OK", em.length ? `${em.length} dòng: ${em.slice(0, 6).join(", ")}` : `0 trên ${docs.length} file`);
}

// ---------- in kết quả ----------
function in_(tieuDe) {
  console.log(`\n## ${tieuDe}`);
  console.log("| Kiểm | Mức | Kết quả |\n|---|---|---|");
  for (const k of ket) console.log(`| ${k.muc} | ${k.mucDo} | ${k.noi.replace(/\|/g, "/")} |`);
  const loi = ket.filter((k) => k.mucDo === "LỖI").length, cb = ket.filter((k) => k.mucDo === "CẢNH BÁO").length;
  if (tuCuDayDu && tuCuDayDu.length) { console.log("\nTừ cũ còn dùng (đầy đủ):"); for (const h of tuCuDayDu) console.log(`- ${h.vitri}  ${h.tu}  | ${h.dong}`); }
  console.log(`\nLỗi: ${loi}. Cảnh báo: ${cb}.`);
  return loi;
}

// ---------- selftest ----------
function selftest() {
  const d = mkdtempSync(join(tmpdir(), "quet-"));
  const w = (n, t) => { mkdirSync(dirname(join(d, n)), { recursive: true }); writeFileSync(join(d, n), t); return n; };
  // data: L1 CAT BIRD DOG; FRIES ở 9 level, GATE ở 4 (hợp 13); mechanic coin n; stone chuỗi
  const rows = ["level,tag,difficulty_point,box_order,curve_order,word_list,mechanic,tong_chu"];
  for (let n = 1; n <= 14; n++) rows.push(`${n},easy,0,3,"0-0,1-0","${n === 1 ? "CAT, BIRD, DOG" : n <= 10 ? "FRIES, BOX, KEY" : "GATE, BOX, KEY"}","${n === 6 ? "coin: 2; lock: 0-0.2,1-0.2; stone: 0-0.2,1-0.2" : ""}",${n === 1 ? 10 : n <= 10 ? 11 : 10}`);
  w("lv.csv", rows.join("\n"));
  w("doc/sai.md", ["FRIES và GATE có trong 12 level (V1)", "Ví dụ L1 DOVE, BIRD, DOG: 4 + 4 + 3 = 11 quân", "Quân vàng nhặt vào Order, mốc Coin L9", "dòng có gạch dài " + String.fromCharCode(0x2014) + " và emoji " + String.fromCodePoint(0x2705)].join("\n"));
  w("doc/ok.md", ["FRIES có trong 9 level, GATE có trong 4 level", "L1 CAT, BIRD, DOG = 10 quân", "Coin L6", "sạch"].join("\n"));
  w("tu-cu.txt", "quân vàng -> Coin\nblocker -> Đá");
  w("nguon.tsv", "Bước\tTên\tText\tGhi chú\n1\tNhặt\tTB1: Tap the letters!\tdài dài\n2\tClear\tTB2: Done\t");
  w("gon-ok.tsv", "Bước\tTên\tText\tGhi chú\n1\tNhặt\tTB1\\nTap the letters!\tngắn\n2\tClear\tTB2\\nDone\t");
  w("gon-sai.tsv", "Bước\tTên\tText\tGhi chú\n1\tNhặt\tTB1\\nTap the letters!\tngắn\nQuy tắc chung:\\n- a\t\t\t\n2\tClear\tTB2\\nDone!\t");
  let ok = true;
  const chay = (ten, f, kyVong) => {
    ket.length = 0; f();
    const co = ket.some((k) => k.mucDo === "LỖI");
    const dung = co === kyVong; ok = ok && dung;
    console.log(`${dung ? "ĐẠT" : "TRƯỢT"}  ${ten}: ${kyVong ? "phải bắt" : "phải sạch"}; ${co ? "đã bắt" : "không bắt"}${co ? " -> " + ket.filter((k) => k.mucDo === "LỖI").map((k) => k.noi.slice(0, 90)).join(" // ") : ""}`);
  };
  const bak = GOC;
  const op = { chan: "lock,stone", "tran-chan": "0.5", "tran-tong": "0.8", dem: "coin", "dem-tu": "FRIES,GATE", "moc-ten": "coin=Coin" };
  const lv = () => { const g = docLevel(join(d, "lv.csv")); return g; };
  const run = (docF) => () => { const ls = lv(); const dau = {}; for (const l of ls) for (const k of Object.keys(parseMech(l.mech))) if (dau[k] == null) dau[k] = l.n; kiemDocData(ls, dau, op, [join(d, docF)]); };
  chay("số level ghi cạnh FRIES/GATE (12 so với 13 đo)", run("doc/sai.md"), true);
  chay("doc đúng số", run("doc/ok.md"), false);
  chay("cấu trúc level", () => kiemLevel(join(d, "lv.csv"), op), false);
  chay("trần mật độ vượt (lock 0.2 + stone 0.2 + coin 2/11 = 0.58 so với trần tổng 0.5)", () => kiemLevel(join(d, "lv.csv"), { ...op, "tran-tong": "0.5" }), true);
  chay("từ cũ sau đổi tên (quân vàng)", () => kiemTuCu(join(d, "tu-cu.txt"), [join(d, "doc/sai.md")]), true);
  chay("từ cũ: file sạch", () => kiemTuCu(join(d, "tu-cu.txt"), [join(d, "doc/ok.md")]), false);
  w("doc/lichsu.md", ["Mechanic trước là blocker trơn và quân vàng, nay là Đá và Coin", "| 20/10/2026 | Đổi quân vàng thành Coin | Lead |", "// quân vàng chỉ là comment code", "tên cột đổi từ blocker sang stone"].join("\n"));
  w("doc/con-dung.md", ["Quân vàng nhặt +5 coin vào ví", "Đá không phải quân vàng nhưng blocker vẫn rơi"].join("\n"));
  w("briefs/cu.md", "quân vàng là phần thưởng (brief lịch sử)");
  chay("từ cũ: câu lịch sử, hàng ngày, comment, briefs không bị bắt", () => kiemTuCu(join(d, "tu-cu.txt"), [join(d, "doc/lichsu.md"), join(d, "briefs/cu.md")]), false);
  chay("từ cũ: câu 'quân vàng nhặt +5' vẫn bị bắt", () => kiemTuCu(join(d, "tu-cu.txt"), [join(d, "doc/con-dung.md")]), true);
  chay("bản gọn đúng nguồn", () => kiemGon(join(d, "gon-ok.tsv"), join(d, "nguon.tsv"), "3"), false);
  chay("bản gọn lệch nguồn (text khác một ô)", () => kiemGon(join(d, "gon-sai.tsv"), join(d, "nguon.tsv"), "3"), true);
  chay("gạch dài và emoji", () => kiemKyTu([join(d, "doc/sai.md")]), true);
  chay("giờ sửa", () => kiemGio([join(d, "doc/sai.md")], false, null), false);
  // --doi so nội dung ô (họp 05/11/2026): \n trong ô TSV bằng xuống dòng thật trong ô CSV export
  w("sheet/02.tsv", "STT\tHạng mục\tGhi chú\n1\tKhay\tdòng 1\\ndòng 2\n2\tBăng\t\n");
  w("sheet/_tren-sheet/02.csv", 'STT,Hạng mục,Ghi chú\n1,Khay,"dòng 1\ndòng 2"\n2,Băng,\n');
  w("sheet/lead-sua.csv", 'STT,Hạng mục,Ghi chú\n1,Khay,"dòng 1\ndòng 2"\n2,Băng,Lead ghi tay\n');
  chay("--doi: TSV repo khớp export CSV từng ô", () => kiemDoi([[join(d, "sheet/02.tsv"), join(d, "sheet/_tren-sheet/02.csv")]]), false);
  chay("--doi: Lead sửa tay 1 ô trên Sheet bị bắt", () => kiemDoi([[join(d, "sheet/02.tsv"), join(d, "sheet/lead-sua.csv")]]), true);
  chay("--doi: chưa có export thì cảnh báo, không im lặng ĐẠT", () => { kiemDoi([[join(d, "sheet/02.tsv"), join(d, "khong-co.csv")]]); if (!ket.some((k) => k.mucDo === "CẢNH BÁO")) add("x", "LỖI", "không cảnh báo"); }, false);
  // file lưu trữ không bị quét
  w("doc/bao-cao-cu.md", ["# Báo cáo cũ", "", "**Trạng thái: dừng theo Lead.**", "dòng có gạch dài " + String.fromCharCode(0x2014)].join("\n"));
  chay("file 'Trạng thái: dừng' bị bỏ khỏi quét doc", () => kiemKyTu(boLuuTru([join(d, "doc/bao-cao-cu.md"), join(d, "doc/ok.md")], null)), false);
  console.log(ok ? "\nSELFTEST ĐẠT: mọi lỗi cũ bị bắt, file sạch không báo" : "\nSELFTEST TRƯỢT");
  process.exit(ok ? 0 : 1);
}

// ---------- chạy ----------
if (opt.selftest) selftest();
const project = opt.project && opt.project !== true ? opt.project : null;
let docs = [];
const nap = (x) => x.flatMap((p) => layFile(p));
if (lists.doc) docs = nap(lists.doc);
let files = lists.gio ? nap(lists.gio) : [];
if (project && !lists.doc) {
  docs = layFile(`projects/${project}`, [".md", ".tsv"]).filter((f) => !/[\\/]qa[\\/]/.test(f));
  if (!lists.gio && !lists.doi) files = docs.concat(layFile(`projects/${project}/levels`, [".csv"]));
}
docs = boLuuTru(docs, project);
if (files.length) kiemGio(files, opt.luu, project);
if (lists.doi) {
  let tsv = lists.doi;
  if (!tsv.length && project) tsv = layFile(`projects/${project}/gdd/sheet`, [".tsv"]).filter((f) => dirname(f) === R(`projects/${project}/gdd/sheet`)).map((f) => relative(GOC, f));
  const csv = lists.csv || [];
  kiemDoi(tsv.map((t, i) => [t, csv[i] || (lists.csv ? null : join(dirname(t), "_tren-sheet", t.split(/[\\/]/).pop().replace(/\.tsv$/i, ".csv")))]));
}
if (opt.gon && opt.nguon) kiemGon(opt.gon, opt.nguon, opt["bo-qua-cot"] && opt["bo-qua-cot"] !== true ? opt["bo-qua-cot"] : "");
let lvInfo = null;
const levelFile = opt.level && opt.level !== true ? opt.level : (project && existsSync(R(`projects/${project}/levels/level-v1-sheet.csv`)) ? `projects/${project}/levels/level-v1-sheet.csv` : null);
if (levelFile) lvInfo = kiemLevel(levelFile, opt);
if (lvInfo && (opt["dem-tu"] || opt["moc-ten"] || project)) kiemDocData(lvInfo.ls, lvInfo.dau, opt, docs);
const tuCu = opt["tu-cu-file"] && opt["tu-cu-file"] !== true ? opt["tu-cu-file"] : (project && existsSync(R(`projects/${project}/qa/tu-cu.txt`)) ? `projects/${project}/qa/tu-cu.txt` : null);
if (tuCu) kiemTuCu(tuCu, docs);
if (docs.length) kiemKyTu(docs);
if (!ket.length) { console.log("Không có phép kiểm nào chạy. Xem đầu file để biết cách dùng."); process.exit(0); }
process.exit(in_(project ? `Quét QA ${project}` : "Quét QA") > 0 ? 1 : 0);
