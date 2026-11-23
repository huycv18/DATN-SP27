#!/usr/bin/env node
// Gộp Doc thiết kế (GD-059): book/phan-1/*.md rồi book/phan-2/*.md thành book/ket-qua/book.md,
// thêm tiêu đề, mục lục (9 dòng Phần II theo bảng của KHUON.md, thiếu file ghi "chưa viết") và đánh số hình xuyên suốt.
// Chạy: node projects/game-moi/tools/gop-book.mjs [--book <thư mục book>]   Không sửa file nguồn, ghi đè ket-qua/book.md.
import { readFileSync, readdirSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const TIEU_DE = 'The Novent Design Document';
const HINH_NHAN = /Hình ((?:I|II)\.\d+\.\w+)/g;
const docLf = (f) => readFileSync(f, 'utf8').replace(/\r/g, '').trim();
const dsMd = (d) => (existsSync(d) ? readdirSync(d).filter((x) => x.endsWith('.md')).sort() : []);
const tenMuc = (txt) => (txt.match(/^## (.+)$/m) || [])[1];

// Bảng mục lục Phần II lấy từ KHUON.md: "| II.n | `file` | Hệ thống | ...".
export function mucLucKhuon(khuon) {
  return [...khuon.matchAll(/^\| (II\.\d+) \| `([^`]+)` \| ([^|]+?) \|/gm)].map((m) => ({ ma: m[1], file: m[2], ten: m[3] }));
}

// Đổi "*Hình II.n.k - ...*" thành "*Hình N - ...*" xuyên suốt, sửa luôn chỗ nhắc "Hình II.n.k" trong cùng file.
export function danhSoHinh(txt, batDau) {
  const map = new Map();
  let n = batDau;
  const kq = txt.replace(/^\*Hình ((?:I|II)\.\d+\.\w+) - /gm, (_, nh) => { map.set(nh, n); return `*Hình ${n++} - `; });
  return { txt: kq.replace(HINH_NHAN, (m, nh) => (map.has(nh) ? `Hình ${map.get(nh)}` : m)), tiep: n };
}

export function gop(book) {
  const khuon = docLf(join(book, 'KHUON.md'));
  const p1 = dsMd(join(book, 'phan-1')), p2 = dsMd(join(book, 'phan-2'));
  const muc = mucLucKhuon(khuon);
  const luc = [];
  let hinh = 1;
  const thanPhan = (phan, files, thuMuc) => files.map((f) => {
    const r = danhSoHinh(docLf(join(book, thuMuc, f)), hinh);
    hinh = r.tiep;
    return r.txt;
  });
  const p1txt = thanPhan(1, p1, 'phan-1');
  const p2txt = thanPhan(2, p2, 'phan-2');

  luc.push('## Table of Contents', '', '### Part I. Controls', '');
  if (p1.length) p1txt.forEach((t, i) => luc.push(`- ${tenMuc(t) || p1[i]}`));
  else luc.push('- chưa viết');
  luc.push('', '### Part II. Game Elements', '');
  const thieu = [];
  for (const m of muc) {
    const i = p2.indexOf(m.file);
    if (i >= 0) luc.push(`- ${tenMuc(p2txt[i]) || `${m.ma}. ${m.ten}`}`);
    else { luc.push(`- ${m.ma}. ${m.ten} (chưa viết)`); thieu.push(m.ma); }
  }
  const la = p2.filter((f) => !muc.some((m) => m.file === f)); // file ngoài mục lục vẫn được gộp, không mất chữ
  for (const f of la) luc.push(`- ${tenMuc(p2txt[p2.indexOf(f)]) || f} (ngoài mục lục KHUON.md)`);

  const out = [`# ${TIEU_DE}`, '', ...luc, ''];
  if (p1.length) out.push('# Part I. Controls', '', p1txt.join('\n\n'), '');
  if (p2.length) out.push('# Part II. Game Elements', '', p2txt.join('\n\n'), '');
  return { md: out.join('\n'), thieu, nMuc: muc.length, nHinh: hinh - 1, nFile: p1.length + p2.length, la };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const i = process.argv.indexOf('--book');
  const book = i > 0 ? resolve(process.argv[i + 1]) : join(dirname(fileURLToPath(import.meta.url)), '..', 'book');
  const r = gop(book);
  mkdirSync(join(book, 'ket-qua'), { recursive: true });
  writeFileSync(join(book, 'ket-qua', 'book.md'), r.md);
  console.log(`Gộp ${r.nFile} file, ${r.nHinh} hình, mục lục ${r.nMuc} mục Phần II, chưa viết: ${r.thieu.join(' ') || 'không'}`);
  if (r.la.length) console.log(`Ngoài mục lục KHUON.md: ${r.la.join(' ')}`);
  console.log(`Ra: ${join(book, 'ket-qua', 'book.md')}`);
}
