#!/usr/bin/env node
// Cổng khuôn Doc thiết kế (GD-059). Luật: projects/game-moi/book/KHUON.md (luật 2 tới 9 làm được bằng máy).
// Chạy: node projects/game-moi/tools/kiem-book.mjs <file.md|thư mục>   Thoát 1 khi có lỗi.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, basename, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const TOOLS = dirname(fileURLToPath(import.meta.url));
const TAB = Object.keys(JSON.parse(readFileSync(join(TOOLS, 'tham-so', 'sheet.json'), 'utf8')).gid);
const MIN = 120, MAX = 300;
const CAM = [
  [/[—–]/, 'Gạch dài'],
  [/;/, 'Dấu chấm phẩy'],
  [/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u, 'Emoji'],
  [/\b[A-Z]{2,4}-\d{2,3}\b/, 'ID nội bộ (ghi tên tab Sheet)'],
];
const HINH = /^\*Hình (I{1,2})\.(\d+)\.(\w+) - \S.*\*\s*$/;

// Trả { loi: [[dong, kiem, chiTiet]], lech, choAnh, dong, mermaid }. phan/n lấy từ tên file khi có tiền tố NN-.
export function kiemMuc(text, tenFile = 'muc.md') {
  const L = text.replace(/\r/g, '').replace(/\n$/, '').split('\n');
  const loi = [], them = (d, k, v = '') => loi.push([d, k, v]);
  const nFile = Number((basename(tenFile).match(/^(\d+)-/) || [])[1]) || null;
  if (L.length < MIN || L.length > MAX) them(1, `Độ dài ${L.length} dòng, cần ${MIN} tới ${MAX}`);

  // Quét một lượt: bỏ phần trong khối code khi tìm heading, gom khối mermaid và chỗ chờ ảnh.
  let trong = null; // { loai, bat }
  const H2 = [], H3 = [], hinh = [];
  let lech = 0, choAnh = 0, mermaid = 0;
  L.forEach((s, i) => {
    const d = i + 1;
    if (/^\s*```/.test(s)) {
      if (trong) {
        if (trong.loai === 'mermaid') hinh.push({ d: i, loai: 'mermaid' }); // i = chỉ số dòng 0-based của dòng đóng
        trong = null;
      } else {
        trong = { loai: (s.match(/```\s*(\w*)/) || [])[1] || '', bat: d };
        if (trong.loai === 'mermaid') {
          mermaid++;
          const dau = L.slice(i + 1).find((x) => x.trim());
          if (!/^flowchart TD\b/.test((dau || '').trim())) them(d, 'Sơ đồ phải mở bằng flowchart TD', (dau || '').trim().slice(0, 40));
        }
      }
    } else if (!trong) {
      const m2 = s.match(/^## (.*)$/), m3 = s.match(/^### (.*)$/);
      if (m2) H2.push({ d, t: m2[1] });
      if (m3) H3.push({ d, t: m3[1] });
      if (/\[CHỜ ẢNH/.test(s)) { choAnh++; hinh.push({ d: i, loai: 'cho-anh' }); }
    }
    lech += (s.match(/\[LỆCH/g) || []).length;
    // Văn phong áp cho mọi dòng, kể cả trong khối code.
    for (const [re, ten] of CAM) if (re.test(s)) them(d, ten, s.match(re)[0]);
  });
  if (trong) them(trong.bat, 'Khối code mở mà không đóng');

  // Heading
  let part = null, n = null;
  if (H2.length !== 1) them(H2[1]?.d || 1, `Cần đúng 1 heading "## II.n.", có ${H2.length}`);
  if (H2[0]) {
    const m = H2[0].t.match(/^(I{1,2})\.(\d+)\. \S/);
    if (!m) them(H2[0].d, 'Heading mục phải dạng "## II.n. Tên"', H2[0].t);
    else {
      [part, n] = [m[1], Number(m[2])];
      if (nFile && nFile !== n) them(H2[0].d, `Số mục ${n} lệch số trong tên file ${nFile}`);
    }
  }
  const nhan = part ? `${part}.${n}` : null;
  let k = 0, daZ = false;
  for (const h of H3) {
    const m = h.t.match(/^(I{1,2})\.(\d+)\.(\d+|z)\. \S/);
    if (!m) { them(h.d, 'Heading con phải dạng "### II.n.k. Tên"', h.t); continue; }
    if (nhan && `${m[1]}.${m[2]}` !== nhan) them(h.d, `Tiền tố ${m[1]}.${m[2]} sai, cần ${nhan}`);
    if (daZ) them(h.d, 'Còn mục sau II.n.z, Post-MVP phải là mục cuối');
    if (m[3] === 'z') { daZ = true; if (!/^Post-MVP$/.test(h.t.replace(/^[\w.]+ /, ''))) them(h.d, 'Mục z phải tên "Post-MVP"', h.t); }
    else if (Number(m[3]) !== ++k) them(h.d, `Đánh số không liên tục, cần ${nhan}.${k}`, h.t);
  }
  if (part === 'II') {
    if (!H3.some((h) => /^II\.\d+\.1\. Overview$/.test(h.t))) them(1, 'Thiếu mục "II.n.1. Overview"');
    if (!H3.some((h) => /^II\.\d+\.z\. Post-MVP$/.test(h.t))) them(1, 'Thiếu mục "II.n.z. Post-MVP"');
    if (!mermaid) them(1, 'Cần ít nhất 1 khối mermaid');
    const dauMuc = H2[0] ? L.slice(H2[0].d, (H3[0]?.d || L.length + 1) - 1) : [];
    if (H2[0] && !dauMuc.some((x) => x.trim())) them(H2[0].d, 'Thiếu đoạn mở giữa "##" và mục con đầu');
  }

  // Chú thích hình: sơ đồ và chỗ chờ ảnh cần dòng *Hình II.n.k - ...* trong 3 dòng không rỗng ngay sau (hoặc cùng dòng với CHỜ ẢNH).
  const dung = new Set();
  for (const f of hinh) {
    const sau = L.slice(f.d + 1).filter((x) => x.trim()).slice(0, 3);
    const cat = sau.findIndex((x) => /^(#|```)|\[CHỜ ẢNH/.test(x)); // không mượn chú thích của hình kế tiếp
    const dong = [L[f.d], ...(cat < 0 ? sau : sau.slice(0, cat))];
    const c = dong.find((x) => HINH.test(x.trim())) ?? dong.find((x) => /\*Hình I/.test(x));
    const ten = f.loai === 'mermaid' ? 'Sơ đồ' : 'Chỗ chờ ảnh';
    if (!c) { them(f.d + 1, `${ten} thiếu chú thích "*Hình II.n.k - ...*"`); continue; }
    const m = c.trim().match(HINH);
    if (!m) { them(f.d + 1, `${ten}: chú thích sai dạng`, c.trim().slice(0, 50)); continue; }
    if (nhan && `${m[1]}.${m[2]}` !== nhan) them(f.d + 1, `${ten}: chú thích Hình ${m[1]}.${m[2]} sai số mục, cần ${nhan}`);
    const nh = `${m[1]}.${m[2]}.${m[3]}`;
    if (dung.has(nh)) them(f.d + 1, `Trùng số hình ${nh}`);
    dung.add(nh);
  }

  // Tên tab: "tab <Tên>" viết hoa phải bắt đầu bằng một tab có thật trong sheet.json.
  L.forEach((s, i) => {
    for (const m of s.matchAll(/\btab (?:\*\*)?`?([A-ZĐ][^\n,.;:)`*]*)/g)) {
      const x = m[1].trim();
      if (!TAB.some((t) => x === t || x.startsWith(t + ' '))) them(i + 1, 'Tên tab không có trên Sheet', x.slice(0, 40));
    }
  });
  return { loi, lech, choAnh, dong: L.length, mermaid };
}

function lietKe(p) {
  if (!statSync(p).isDirectory()) return [p];
  return readdirSync(p, { withFileTypes: true }).flatMap((e) => {
    const q = join(p, e.name);
    if (e.isDirectory()) return e.name === 'ket-qua' ? [] : lietKe(q);
    return /\.md$/.test(e.name) && !/^(KHUON|README)\.md$/i.test(e.name) ? [q] : [];
  });
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const arg = process.argv[2];
  if (!arg) { console.error('Dùng: node kiem-book.mjs <file.md|thư mục>'); process.exit(2); }
  const files = lietKe(arg);
  if (!files.length) { console.log('Không có file .md để kiểm.'); process.exit(0); }
  let tong = 0;
  const tomTat = ['| File | Dòng | Sơ đồ | CHỜ ẢNH | LỆCH | Lỗi |', '|---|---|---|---|---|---|'];
  const chiTiet = [];
  for (const f of files) {
    const r = kiemMuc(readFileSync(f, 'utf8'), f);
    tong += r.loi.length;
    tomTat.push(`| ${basename(f)} | ${r.dong} | ${r.mermaid} | ${r.choAnh} | ${r.lech} | ${r.loi.length} |`);
    for (const [d, k, v] of r.loi) chiTiet.push(`| ${basename(f)}:${d} | ${k} | ${String(v).replace(/\|/g, '/')} |`);
  }
  console.log(tomTat.join('\n'));
  if (chiTiet.length) console.log('\n| Vị trí | Lỗi | Chi tiết |\n|---|---|---|\n' + chiTiet.join('\n'));
  console.log(tong ? `\nTRẢ LẠI: ${tong} lỗi` : '\nĐẠT');
  process.exit(tong ? 1 : 0);
}
