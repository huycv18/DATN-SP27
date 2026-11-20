#!/usr/bin/env node
// gdd-sheet-sync selftest: trang.js và chung.mjs cho cùng hash, cùng parse; nén HTML đi về đúng; chữ thuần dán đọc lại đúng.
// Chạy: node <thư mục skill gdd-sheet-sync>/scripts/selftest.mjs
import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";
import vm from "node:vm";
import * as C from "./chung.mjs";

const DIR = dirname(fileURLToPath(import.meta.url));
const ctx = { window: {}, location: { pathname: "/spreadsheets/d/X/edit", hash: "#gid=1" }, document: { querySelector: () => null, querySelectorAll: () => [] } };
vm.createContext(ctx);
vm.runInContext(readFileSync(join(DIR, "trang.js"), "utf8"), ctx);
const T = ctx.window.__ss;

let dat = 0, hong = 0;
const kiem = (ten, ok) => { ok ? dat++ : hong++; console.log(`${ok ? "ĐẠT " : "HỎNG"} ${ten}`); };

const mau = [["Bước", "Tên", "Ghi chú"], ["", "Nhóm A", ""], ["1", 'Có "ngoặc"\nhai dòng', "Tab\tgiữa  "], ["2", "Tiếng Việt có dấu", ""]];
kiem("fnv giống nhau", ["", "abc", "Tiếng Việt", "\u0001\n"].every((s) => C.fnv(s) === T.fnv(s)));
kiem("hashHang giống nhau, bỏ khoảng trắng cuối ô", mau.every((r) => C.hashHang(r, 0, 3) === T.hashHang(r, 0, 3)) && C.hashHang(["a "], 0, 1) === C.hashHang(["a"], 0, 1));
kiem("hashHang có lệch cột", C.hashHang(["x", "a", "b"], 1, 2) === T.hashHang(["a", "b"], 0, 2));
const csv = 'a,"b,c","d ""e""",\n"x\ny",,z\n';
kiem("parseCsv giống nhau", JSON.stringify(C.parseCsv(csv)) === JSON.stringify(T.parseCsv(csv)) && C.parseCsv(csv)[1][0] === "x\ny");
kiem("oSangSo / soSangCot", T.oSangSo("AB12").c0 === 27 && T.oSangSo("AB12").r0 === 11 && C.soSangCot(27) === "AB" && T.soSangCot(0) === "A");

// Chữ thuần kiểu Excel: đọc lại bằng parse CSV với tab làm dấu phân cách phải ra đúng bảng.
const plain = C.sangPlain(mau);
const docLai = C.parseCsv(plain.replace(/,/g, "\u0007").replace(/\t/g, ",")).map((r) => r.map((c) => c.replace(/\u0007/g, ",").replace(/,/g, "\t")));
kiem("sangPlain đọc lại đúng (ngoặc kép, xuống dòng, tab trong ô)", JSON.stringify(docLai) === JSON.stringify(mau));

const html = `<table><tr><td style="a:1">x</td><td style="b:2">y</td></tr><tr><td style="a:1"><b>TB1</b><br>câu</td><td style="a:1"><b>Đậm cả ô</b></td></tr></table>`;
const nen = C.nenHtml(html);
kiem("nén HTML đi về đúng, từ điển 2 kiểu", C.giaiNenHtml(nen.html, nen.kieu) === html && nen.kieu.length === 2);
const p = { ten: "t", tab: "T", o: "A1", ncol: 1, hashes: ["0"], html: nen.html, kieu: nen.kieu };
T.nap(p);
kiem("trang.js nap() giải nén giống Node", ctx.window.__ssP.html === html);
const b = C.boDamMotPhan(html);
kiem("bỏ <b> một phần ô, giữ ô đậm cả ô", b.so === 1 && b.html.includes("TB1<br>câu") && b.html.includes("<b>Đậm cả ô</b>"));

// TSV quy ước skill gdd: chuỗi \n trong ô là xuống dòng.
const d = mkdtempSync(join(tmpdir(), "ss-"));
const f = join(d, "mau.tsv");
writeFileSync(f, "A\tB\nx\\ny\t\n\n", "utf8");
const n = C.docNguon(f);
kiem("docNguon TSV: \\n thành xuống dòng, bỏ dòng trống cuối, đủ cột", n.rows.length === 2 && n.rows[1][0] === "x\ny" && n.ncol === 2);

// doi-chieu.mjs: in đúng ô lệch, mã thoát 1 khi lệch, 0 khi khớp.
import { spawnSync } from "node:child_process";
const kq = join(d, "kq.json");
writeFileSync(kq, JSON.stringify({ tab: "T", o: "B3", hangNguon: 2, lech: 1, nhomKhop: [], thua: [5], goiY: null, chiTiet: [{ hang: 4, nguon: 2, o: ["x\ny", "thừa"] }] }));
const r1 = spawnSync(process.execPath, [join(DIR, "doi-chieu.mjs"), f, "--ket-qua", kq], { encoding: "utf8" });
kiem("doi-chieu.mjs báo ô C4 lệch, hàng thừa 5, thoát 1", r1.status === 1 && r1.stdout.includes("| C4 | thừa | (trống) |") && r1.stdout.includes("| 2 | 1 | 5 |"));
writeFileSync(kq, JSON.stringify({ tab: "T", o: "A1", hangNguon: 2, lech: 0, nhomKhop: [], thua: [], goiY: null, chiTiet: [] }));
const r2 = spawnSync(process.execPath, [join(DIR, "doi-chieu.mjs"), f, "--ket-qua", kq], { encoding: "utf8" });
kiem("doi-chieu.mjs khớp thì thoát 0", r2.status === 0 && r2.stdout.includes("KHỚP"));

// goi.mjs: hàng nhóm có hash theo chữ; chế độ o có chữ thuần.
const g = join(d, "nhom.tsv");
writeFileSync(g, "A\tB\tC\n\tNhóm\t\n1\t2\t3\n", "utf8");
const r3 = spawnSync(process.execPath, [join(DIR, "goi.mjs"), g, "--tab", "T", "--che-do", "o", "--ra", d], { encoding: "utf8" });
const pl = readFileSync(join(d, "nhom.payload.js"), "utf8");
const pj = JSON.parse(pl.slice("__ss.nap(".length, -1));
kiem("goi.mjs: hash nhóm theo chữ, có chữ thuần", r3.status === 0 && pj.nhom["1"] === C.fnv("Nhóm") && pj.plain === "A\tB\tC\n\tNhóm\t\n1\t2\t3");

// Cổng TSV so HTML (lỗi game chữ 20/10/2026: TSV "Quy tắc chung:" còn HTML và Sheet "Quy tắc chung").
const tsvRows = [["Bước", "Tên"], ["", "Nhóm A"], ["Quy tắc chung:\n- a", ""], ["1", 'x "y"']];
const htmlBang = `<table><tr><td>Bước</td><td>Tên</td></tr><tr><td colspan="2">Nhóm A</td></tr><tr><td colspan="2"><b>Quy tắc chung</b><br>- a</td></tr><tr><td>1</td><td>x &quot;y&quot;</td></tr></table>`;
const so1 = C.soNguonHtml(tsvRows, htmlBang, 2);
kiem("so TSV-HTML: bắt 'Quy tắc chung:' ở A3, hàng nhóm lệch cột không tính", so1.lech.length === 1 && so1.lech[0].hang === 3 && so1.lech[0].cot === 0);
tsvRows[2][0] = "Quy tắc chung\n- a";
kiem("so TSV-HTML: khớp thì 0 lệch (thực thể, <br>, colspan)", C.soNguonHtml(tsvRows, htmlBang, 2).lech.length === 0);
const ft = join(d, "lech.tsv"), fh = join(d, "lech.html");
writeFileSync(ft, "Bước\tTên\nQuy tắc chung:\\n- a\t\n", "utf8");
writeFileSync(fh, `<meta charset="utf-8">\n<table><tr><td>Bước</td><td>Tên</td></tr><tr><td colspan="2">Quy tắc chung<br>- a</td></tr></table>`, "utf8");
const r4 = spawnSync(process.execPath, [join(DIR, "goi.mjs"), ft, "--tab", "T", "--che-do", "moi", "--ra", d], { encoding: "utf8" });
kiem("goi.mjs moi: DỪNG, thoát 1, chỉ ra ô A2", r4.status === 1 && r4.stdout.includes("DỪNG") && r4.stdout.includes("| A2 | Quy tắc chung: /"));

console.log(`\n${dat} đạt, ${hong} hỏng`);
process.exit(hong ? 1 : 0);
