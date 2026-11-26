#!/usr/bin/env node
// Sinh wiki thông tin game (wiki/index.html) từ GDD, để trang không bao giờ là bản thứ hai của luật.
// Chạy: node projects/game-moi/tools/xuat-wiki.mjs        ghi lại wiki/index.html
//       node projects/game-moi/tools/xuat-wiki.mjs --kiem cổng: thoát 1 khi index.html cũ hơn GDD
// Thêm loại mới (Driftlife, Item): viết một hàm trich<Loai>() trả về { id, ten, nguon, nhom: [{ ten, ghiChu, muc: [...] }] }
// rồi thêm vào LOAI. Mỗi mục: { ma, ten, nhan, mau, anh, truong: [[tên trường, giá trị], ...] }.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const GAME = join(dirname(fileURLToPath(import.meta.url)), '..');
const HS = join(GAME, 'gdd/he-thong/ho-so-nhan-vat.md');
const CT = join(GAME, 'gdd/he-thong/cot-truyen.md');
const KHUON = join(GAME, 'wiki/khuon.html');
const RA = join(GAME, 'wiki/index.html');

// Ảnh đã có trong repo, đường dẫn tính từ wiki/index.html.
const ANH = {
  'PC-1': '../../../art/C/05-nhan-vat/demo-pc/pc1.webp',
  'PC-2': '../../../art/C/05-nhan-vat/demo-pc/pc2.webp',
  'PC-3': '../../../art/C/05-nhan-vat/demo-pc/pc3.webp',
  'PC-4': '../../../art/C/05-nhan-vat/demo-pc/pc4.webp',
};
const NHOM_NV = [
  ['PC-', 'Người chơi'], ['RS-', 'Người vớt'], ['TR-', 'Thương nhân The Veyl'], ['WD-P', 'The Wardens'], ['NP-', 'Người phụ'],
];
const ID_NV = /^(PC-|RS-|TR-|WD-P|NP-)\d+/;

const tach = (l) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());

// Mọi bảng markdown trong text, kèm tiêu đề ### gần nhất và đoạn văn dưới tiêu đề đó.
export function docBang(text) {
  const L = text.split(/\r?\n/);
  const bang = [];
  const muc = {}; // tiêu đề -> đoạn văn
  let td = '';
  for (let i = 0; i < L.length; i++) {
    const l = L[i];
    if (/^#{2,3} /.test(l)) { td = l.replace(/^#+ /, ''); muc[td] = []; continue; }
    if (l.startsWith('|') && L[i + 1]?.startsWith('|---')) {
      const head = tach(l);
      const rows = [];
      for (i += 2; i < L.length && L[i].startsWith('|'); i++) rows.push(tach(L[i]));
      i--;
      bang.push({ td, head, rows });
      continue;
    }
    if (td && l.trim() && !l.startsWith('|')) muc[td].push(l.trim());
  }
  return { bang, muc };
}

const mauDau = (s) => (s.match(/#[0-9A-Fa-f]{6}\b/) || [])[0] || '';

export function trichNhanVat(hoSo, cotTruyen) {
  const hs = docBang(hoSo);
  const bangHs = hs.bang.filter((b) => b.td.startsWith('2b.'));
  const nv = new Map();
  const them = (m, head, row) => {
    head.forEach((h, k) => {
      const v = row[k];
      if (!v || k === 0 && h === 'Mã') return;
      if (m.truong.some(([a, b]) => b === v && (a === h || h === 'Nhãn'))) return;
      m.truong.push([h, v]);
    });
  };
  // Lượt 1: bảng có cột Mã tạo nhân vật.
  for (const b of bangHs) {
    if (b.head[0] !== 'Mã') continue;
    for (const r of b.rows) {
      const ma = r[0].match(ID_NV)?.[0];
      if (!ma) continue;
      if (!nv.has(ma)) nv.set(ma, { ma, td: b.td, truong: [] });
      them(nv.get(ma), b.head, r);
    }
  }
  // Tên gọi ngắn để khớp bảng theo tên: chữ đầu của tên, và tên trong ngoặc.
  const ten = (m) => (m.truong.find(([h]) => /^Tên( mặc định)?$/.test(h)) || ['', m.ma])[1];
  const biDanh = (m) => {
    const t = ten(m);
    return [t.split(/[ ,(]/)[0], ...(t.match(/\(([^)\s]+)\)/) ? [t.match(/\(([^)\s]+)\)/)[1]] : [])];
  };
  // Lượt 2: bảng theo Tên hoặc Preset (tính cách, chương xuất hiện, clip idle) ghép vào nhân vật có sẵn.
  for (const b of bangHs) {
    if (!['Tên', 'Preset'].includes(b.head[0])) continue;
    for (const r of b.rows) {
      const m = nv.get(r[0].match(ID_NV)?.[0]) || [...nv.values()].find((x) => biDanh(x).includes(r[0]));
      if (m) them(m, b.head.slice(1), r.slice(1));
    }
  }
  // Lượt 3: bảng tính cách PC ở cot-truyen.md.
  for (const b of docBang(cotTruyen).bang) {
    if (b.head[0] !== 'Mã') continue;
    for (const r of b.rows) if (nv.has(r[0]) && r[0].startsWith('PC-')) them(nv.get(r[0]), b.head, r);
  }
  const nhom = NHOM_NV.map(([tien, tenNhom]) => {
    const muc = [...nv.values()].filter((m) => m.ma.replace(/\d+$/, '') === tien);
    const td = muc[0]?.td || '';
    return {
      ten: tenNhom,
      ghiChu: hs.muc[td] || [],
      nguon: `ho-so-nhan-vat.md mục ${td.split(' ')[0]}`,
      muc: muc.map((m) => {
        const mau = m.truong.map(([h, v]) => (/Màu nhận diện|màu nhận diện/.test(h) ? mauDau(v) : '')).find(Boolean) || '';
        const nhan = (m.truong.find(([h]) => h === 'Nhãn') || ['', ''])[1];
        // "Ilsume (tên giả ...)" và "Daskel, danh xưng ..." tách thành tên chính và dòng phụ.
        const t = ten(m).replace(/`/g, '').match(/^(.*?)(?:\s*\((.*)\)|, (.*))?$/);
        return { ma: m.ma, ten: t[1], tenPhu: t[2] || t[3] || '', nhan, mau, anh: ANH[m.ma] || '', truong: m.truong };
      }),
    };
  });
  return { id: 'nhan-vat', ten: 'Nhân vật', nguon: 'gdd/he-thong/ho-so-nhan-vat.md, cot-truyen.md', nhom };
}

const LOAI = () => [trichNhanVat(readFileSync(HS, 'utf8'), readFileSync(CT, 'utf8'))];

export function dung(khuon, loai) {
  for (const l of loai) {
    const n = l.nhom.reduce((s, g) => s + g.muc.length, 0);
    if (!n) throw new Error(`Loại ${l.ten} không có mục nào, kiểm lại bảng nguồn`);
    for (const g of l.nhom) for (const m of g.muc) if (!m.ten || !m.truong.length) throw new Error(`${m.ma} thiếu tên hoặc trường`);
  }
  const json = JSON.stringify({ loai }).replace(/</g, '\\u003c');
  if (!khuon.includes('/*DATA*/null')) throw new Error('khuon.html thiếu chỗ /*DATA*/null');
  return khuon.replace('/*DATA*/null', json);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const loai = LOAI();
  const html = dung(readFileSync(KHUON, 'utf8'), loai);
  const dem = loai.map((l) => `${l.ten} ${l.nhom.map((g) => `${g.ten} ${g.muc.length}`).join(', ')}`).join('. ');
  if (process.argv.includes('--kiem')) {
    let cu = '';
    try { cu = readFileSync(RA, 'utf8'); } catch {}
    if (cu !== html) { console.log('TRẢ LẠI  wiki/index.html cũ hơn GDD, chạy lại node projects/game-moi/tools/xuat-wiki.mjs'); process.exit(1); }
    console.log(`ĐẠT  wiki khớp GDD. ${dem}`);
  } else {
    writeFileSync(RA, html);
    console.log(`Đã ghi wiki/index.html. ${dem}`);
  }
}
