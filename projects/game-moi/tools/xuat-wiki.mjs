#!/usr/bin/env node
// Sinh wiki thông tin game (wiki/index.html) từ GDD, để trang không bao giờ là bản thứ hai của luật.
// Chạy: node projects/game-moi/tools/xuat-wiki.mjs        ghi lại wiki/index.html
//       node projects/game-moi/tools/xuat-wiki.mjs --kiem cổng: thoát 1 khi index.html cũ hơn GDD
// Cách ghép: bảng nào có một cột mà phần lớn ô mở đầu bằng mã (DL-G01, RES-101...) thì mỗi hàng ghép vào mục có mã đó,
// thành một phần đặt tên theo câu dẫn hoặc tiêu đề của bảng. Mã lặp nhiều hàng trong một bảng (bảng đòn) thì giữ nguyên thành bảng con.
// Thêm loại mới: thêm một mục vào LOAI() với file nguồn, regex mã, cách chia nhóm.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const GAME = join(dirname(fileURLToPath(import.meta.url)), '..');
const HT = (f) => join(GAME, 'gdd/he-thong', f);
const KHUON = join(GAME, 'wiki/khuon.html');
const RA = join(GAME, 'wiki/index.html');

// Ảnh đã có trong repo, đường dẫn tính từ wiki/index.html.
const ANH = {
  'PC-1': '../../../art/C/05-nhan-vat/demo-pc/pc1.webp',
  'PC-2': '../../../art/C/05-nhan-vat/demo-pc/pc2.webp',
  'PC-3': '../../../art/C/05-nhan-vat/demo-pc/pc3.webp',
  'PC-4': '../../../art/C/05-nhan-vat/demo-pc/pc4.webp',
};

const tach = (l) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
const gon = (s) => s.replace(/^\d+[a-z]?(\.\d+)*[a-z]?\s+/, '').replace(/`/g, '');

// Mọi bảng markdown: tiêu đề ##/### gần nhất, câu dẫn ngay trước bảng, đoạn văn dưới mỗi tiêu đề.
export function docBang(text) {
  const L = text.split(/\r?\n/);
  const bang = [];
  const muc = {};
  let td = '', dan = '', dam = '';
  for (let i = 0; i < L.length; i++) {
    const l = L[i];
    if (/^#{2,3} /.test(l)) { td = l.replace(/^#+ /, ''); muc[td] = []; dan = dam = ''; continue; }
    if (l.startsWith('|') && L[i + 1]?.startsWith('|---')) {
      const head = tach(l);
      const rows = [];
      for (i += 2; i < L.length && L[i].startsWith('|'); i++) rows.push(tach(L[i]));
      i--;
      bang.push({ td, dan, dam, head, rows });
      dan = dam = '';
      continue;
    }
    if (l.trim() && !l.startsWith('<!--')) {
      dan = l.trim();
      if (dan.startsWith('**')) dam = dan.match(/^\*\*(.+?)\*\*/)[1];
      if (td) muc[td].push(dan);
    }
  }
  return { bang, muc };
}

// Tên phần của một bảng: câu dẫn kết thúc bằng ":" (hoặc mọi câu dẫn dưới tiêu đề chung), rồi tiêu đề in đậm, rồi tiêu đề.
const tenPhan = (b) => {
  const dungDan = b.dan && (b.dan.endsWith(':') || /^Danh sách tham chiếu/.test(b.td));
  return gon(dungDan ? b.dan.replace(/^- /, '').split(/ \(|:|\. /)[0] : b.dam || b.td);
};

// Cột khóa: cột đầu tiên mà từ nửa số hàng trở lên mở đầu bằng mã.
const cotKhoa = (b, re) => {
  const dau = new RegExp(`^(${re.source})`);
  return b.head.findIndex((_, c) => b.rows.filter((r) => dau.test(r[c] || '')).length * 2 >= b.rows.length && b.rows.length);
};
// Mọi mã ở đầu ô, kể cả ô liệt kê "DL-G01, DL-M01, DL-M02 (Hiền)".
const maTrongO = (o, re) => {
  const dau = o.match(new RegExp(`^((?:${re.source})(?:, ?(?:${re.source}))*)`));
  return dau ? dau[1].split(/, ?/) : [];
};

// Ghép bảng của các nguồn vào map mã -> mục. nguon: [{ text, tao }], tao=false thì chỉ ghép vào mục đã có.
export function gomTheoMa(nguon, re, map = new Map()) {
  for (const { text, tao = true, loc = () => true } of nguon) {
    for (const b of docBang(text).bang.filter(loc)) {
      const k = cotKhoa(b, re);
      if (k < 0) continue;
      const hang = b.rows.flatMap((r) => maTrongO(r[k] || '', re).map((ma) => [ma, r]));
      const lap = new Set(hang.map(([ma]) => ma)).size < hang.length;
      const ten = tenPhan(b);
      for (const [ma, r] of hang) {
        if (!map.has(ma)) { if (!tao) continue; map.set(ma, { ma, td: b.td, phan: [], bangCon: [] }); }
        const m = map.get(ma);
        if (lap) {
          let bc = m.bangCon.find((x) => x.ten === ten);
          if (!bc) m.bangCon.push(bc = { ten, head: b.head.filter((_, c) => c !== k), rows: [] });
          bc.rows.push(r.filter((_, c) => c !== k));
        } else themPhan(m, ten, b.head.filter((_, c) => c !== k), r.filter((_, c) => c !== k));
      }
    }
  }
  return map;
}

// Thêm một hàng vào phần tên `ten`, bỏ ô trống và cặp (trường, giá trị) đã có ở mục.
function themPhan(m, ten, head, row) {
  let p = m.phan.find((x) => x.ten === ten);
  if (!p) m.phan.push(p = { ten, truong: [] });
  head.forEach((h, c) => {
    const v = row[c];
    if (!v || v === '-') return;
    if (m.phan.some((q) => q.truong.some(([a, b]) => b === v && (a === h || h === 'Nhãn')))) return;
    p.truong.push([h, v]);
  });
  if (!p.truong.length) m.phan.splice(m.phan.indexOf(p), 1);
}

const tatCaTruong = (m) => m.phan.flatMap((p) => p.truong);
const lay = (m, re) => (tatCaTruong(m).find(([h]) => re.test(h)) || ['', ''])[1];

// Mục ra trang: tên chính và dòng phụ ("Ilsume (tên giả...)", "Daskel, danh xưng...", "Mảnh vỏ / Hull Shard").
function raMuc(m) {
  const t = (lay(m, /^Tên/) || m.ma).replace(/`/g, '').match(/^(.*?)(?:\s*\((.*)\)| \/ (.*)|, (.*))?$/);
  const mau = tatCaTruong(m).map(([h, v]) => (/màu nhận diện/i.test(h) ? (v.match(/#[0-9A-Fa-f]{6}\b/) || [''])[0] : '')).find(Boolean) || '';
  return { ma: m.ma, ten: t[1], tenPhu: t[2] || t[3] || t[4] || '', nhan: lay(m, /^Nhãn$/), mau, anh: ANH[m.ma] || '', phan: m.phan, bangCon: m.bangCon };
}

// Chia mục vào nhóm theo khóa nhom(m), giữ thứ tự nhóm trong `thuTu` rồi tới thứ tự gặp.
function chiaNhom(map, nhom, thuTu = [], ghiChu = () => [], nguon = () => '') {
  const g = new Map(thuTu.map((t) => [t, []]));
  for (const m of map.values()) {
    const k = nhom(m);
    if (!g.has(k)) g.set(k, []);
    g.get(k).push(m);
  }
  const theoMa = (a, b) => a.ma.localeCompare(b.ma, 'en', { numeric: true });
  return [...g].filter(([, ds]) => ds.length).map(([ten, ds]) => ({ ten, ghiChu: ghiChu(ds), nguon: nguon(ds), muc: ds.sort(theoMa).map(raMuc) }));
}

const ID_NV = /PC-\d+|RS-\d+|TR-\d+|WD-P\d+|NP-\d+/;
const NHOM_NV = { 'PC-': 'Người chơi', 'RS-': 'Người vớt', 'TR-': 'Thương nhân The Veyl', 'WD-P': 'The Wardens', 'NP-': 'Người phụ' };

export function trichNhanVat(hoSo, cotTruyen) {
  const hs = docBang(hoSo);
  const la2b = (b) => b.td.startsWith('2b.');
  const map = gomTheoMa([{ text: hoSo, loc: la2b }, { text: cotTruyen, tao: false, loc: (b) => b.head[0] === 'Mã' }], ID_NV);
  // Bảng theo tên (tính cách, chương xuất hiện) ghép theo chữ đầu của tên hoặc tên trong ngoặc.
  const biDanh = (m) => { const t = lay(m, /^Tên/); return [t.split(/[ ,(]/)[0], (t.match(/\(([^)\s]+)\)/) || [])[1]]; };
  for (const b of hs.bang.filter((x) => la2b(x) && x.head[0] === 'Tên')) {
    for (const r of b.rows) {
      const m = [...map.values()].find((x) => biDanh(x).includes(r[0]));
      if (m) themPhan(m, tenPhan(b), b.head.slice(1), r.slice(1));
    }
  }
  const nhom = chiaNhom(map, (m) => NHOM_NV[m.ma.replace(/\d+$/, '')], Object.values(NHOM_NV),
    (ds) => hs.muc[ds[0].td] || [], (ds) => `ho-so-nhan-vat.md mục ${ds[0].td.split(' ')[0]}`);
  return { id: 'nhan-vat', ten: 'Nhân vật', nhanh: ['Vai trong nhóm', 'Vai', 'Vai truyện', 'Chủng', 'Chiều cao', 'Chiều cao, tỉ lệ', 'Tên, quốc gia', 'Giới tính, tuổi', 'Chương'], nhom };
}

const ID_DL = /DL-[GMX]\d{2}|WD-\d{2}|BS-\d+/;
export function trichDriftlife(combat, vatPham) {
  const map = gomTheoMa([{ text: combat }, { text: vatPham, tao: false }], ID_DL);
  const nhom = chiaNhom(map, (m) => (m.ma.startsWith('BS') ? 'Boss' : m.ma.startsWith('WD') ? 'Đơn vị The Wardens' : lay(m, /^Dải$/)),
    ['Vành đai ngoài', 'Vành đai trong', 'Vùng trung tâm', 'Đơn vị The Wardens', 'Boss'], () => [], () => 'combat-driftlife.md, vat-pham.md');
  return { id: 'driftlife', ten: 'Driftlife', nhanh: ['Dải', 'Cỡ', 'Kiểu', 'Sinh lực', 'Sinh lực (một mình)', 'Bắt sống', 'Nuôi'], nhom };
}

const ID_VP = /[A-Z]{3}-\d{3}/;
export function trichVatPham(vatPham) {
  const map = gomTheoMa([{ text: vatPham }], ID_VP);
  const dauMa = { RCP: 'Công thức', SLV: 'Điểm khai thác', TOL: 'Dụng cụ' };
  // Thứ tự nhóm chỉ để đọc, nhóm mới chưa có ở đây tự xếp cuối.
  const thuTu = ['Phế liệu', 'Khoáng', 'Băng', 'Linh kiện', 'Linh kiện lõi', 'Vật liệu chế', 'Mẫu', 'Mẫu sinh thiết', 'Mẫu sống', 'Sản phẩm nuôi', 'Thức ăn nuôi',
    'Vật tiêu hao', 'Dụng cụ', 'Bản thiết kế', 'Kiện', 'Vật kéo', 'Vật manh mối', 'Vật nhiệm vụ', 'Công thức', 'Điểm khai thác'];
  const nhom = chiaNhom(map, (m) => dauMa[m.ma.slice(0, 3)] || lay(m, /^Nhóm$/) || 'Khác', thuTu, () => [], () => 'vat-pham.md');
  return { id: 'vat-pham', ten: 'Vật phẩm', nhanh: ['Nhóm', 'Độ hiếm', 'Khối', 'GTĐ', 'Dải', 'Nơi chế', 'Thời gian (giây)', 'Dụng cụ'], nhom };
}

const LOAI = () => {
  const doc = (f) => readFileSync(HT(f), 'utf8');
  return [
    trichNhanVat(doc('ho-so-nhan-vat.md'), doc('cot-truyen.md')),
    trichDriftlife(doc('combat-driftlife.md'), doc('vat-pham.md')),
    trichVatPham(doc('vat-pham.md')),
  ];
};

export function dung(khuon, loai) {
  for (const l of loai) {
    if (!l.nhom.some((g) => g.muc.length)) throw new Error(`Loại ${l.ten} không có mục nào, kiểm lại bảng nguồn`);
    for (const g of l.nhom) for (const m of g.muc) if (!m.ten || !m.phan.length) throw new Error(`${m.ma} thiếu tên hoặc trường`);
  }
  const json = JSON.stringify({ loai }).replace(/</g, '\\u003c');
  if (!khuon.includes('/*DATA*/null')) throw new Error('khuon.html thiếu chỗ /*DATA*/null');
  return khuon.replace('/*DATA*/null', () => json); // hàm để $ trong dữ liệu không bị hiểu là mẫu thay thế
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const loai = LOAI();
  const html = dung(readFileSync(KHUON, 'utf8'), loai);
  const dem = loai.map((l) => `${l.ten} ${l.nhom.reduce((s, g) => s + g.muc.length, 0)} (${l.nhom.map((g) => `${g.ten} ${g.muc.length}`).join(', ')})`).join('. ');
  if (process.argv.includes('--kiem')) {
    let cu = '';
    try { cu = readFileSync(RA, 'utf8'); } catch {}
    // git autocrlf trả CRLF trên Windows, so theo nội dung.
    if (cu.replace(/\r\n/g, '\n') !== html) { console.log('TRẢ LẠI  wiki/index.html cũ hơn GDD, chạy lại node projects/game-moi/tools/xuat-wiki.mjs'); process.exit(1); }
    console.log(`ĐẠT  wiki khớp GDD. ${dem}`);
  } else {
    writeFileSync(RA, html);
    console.log(`Đã ghi wiki/index.html. ${dem}`);
  }
}
