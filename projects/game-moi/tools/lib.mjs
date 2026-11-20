// Hàm dùng chung cho tools/: RNG có seed, phân vị, đọc bảng markdown sinh từ script, định dạng số kiểu Việt.
import { readFileSync } from 'node:fs';

// mulberry32: cùng seed cho cùng chuỗi.
export function rngTu(seed) {
  let a = seed >>> 0;
  const r = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  r.int = (n) => Math.floor(r() * n);
  r.chon = (arr) => arr[Math.floor(r() * arr.length)];
  return r;
}

export const phanVi = (xs, p) => {
  if (!xs.length) return NaN;
  const s = [...xs].sort((a, b) => a - b);
  return s[Math.min(s.length - 1, Math.floor(p * s.length))];
};
export const tb = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : NaN);

// Số kiểu Việt: dấu phẩy thập phân.
export const vn = (x, d = 1) => (Number.isFinite(x) ? x.toFixed(d).replace('.', ',') : '-');
export const pt = (x) => (Number.isFinite(x) ? `${Math.round(x * 100)}%` : '-');
export const soVn = (s) => Number(String(s).replace(',', '.'));

// Đọc bảng giữa <!--B:TÊN--> và <!--/B:TÊN--> thành mảng object theo header.
export function docKhoi(file, ten) {
  const txt = readFileSync(file, 'utf8');
  const m = txt.match(new RegExp(`<!--B:${ten}-->([\\s\\S]*?)<!--/B:${ten}-->`));
  if (!m) throw new Error(`Không thấy khối ${ten} trong ${file}`);
  const hang = m[1].split(/\r?\n/).filter((l) => /^\|/.test(l) && !/^\|[\s:|-]+\|$/.test(l.trim()));
  const tach = (l) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
  const head = tach(hang[0]);
  return hang.slice(1).map((l) => Object.fromEntries(tach(l).map((c, i) => [head[i], c])));
}

export const bangMd = (head, rows) => [`| ${head.join(' | ')} |`, `|${head.map(() => '---').join('|')}|`, ...rows.map((r) => `| ${r.join(' | ')} |`)].join('\n');

// Hệ số a của k(N) = 1 + a (N - 1) theo dải, đọc bảng "| Dải | a | k(2) ..." ở map.md mục 3.8 (gd-world giữ). Một nguồn cho sim chuyến và sim combat.
export function docHeSoDai(file) {
  const txt = readFileSync(file, 'utf8');
  const muc = txt.split(/^### /m).find((x) => x.startsWith('3.8'));
  const out = {};
  for (const m of (muc || '').matchAll(/^\| (Gần|Giữa|Xa) \| ([\d,]+) \| [\d,]+ \|/gm)) out[m[1]] = soVn(m[2]);
  if (Object.keys(out).length !== 3) throw new Error(`Không đọc được bảng a theo dải ở ${file} mục 3.8`);
  return out;
}

// Nhóm hàng cảng: bảng "| ID nhóm | Nhóm hàng | ID kiện (gd-items) | ... | Mở |" ở tram-va-cang.md (gd-quan giữ).
// Trả { HC01: { ids: ['CGO-101', ...], tu: chương mở của nhóm }, ... }.
export function docNhomHang(file) {
  const out = {};
  for (const l of readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = l.match(/^\| (HC\d{2}) \|/);
    if (!m || out[m[1]]) continue;
    const c = l.trim().replace(/^\||\|$/g, '').split('|').map((x) => x.trim());
    const ids = [...new Set((c[2].match(/CGO-\d{3}/g) || []))];
    const tu = Number((c[c.length - 1].match(/Chương (\d)/) || [])[1] || 1);
    out[m[1]] = { ids, tu };
  }
  if (!Object.keys(out).length) throw new Error(`Không đọc được bảng nhóm hàng ở ${file}`);
  return out;
}

// Cỡ kiện: khối <!--B:CGOSIZE--> của vat-pham.md, dạng "CGO-102..106, 109". Trả { 'CGO-102': 'Nhỏ', ... }.
export function docCoKien(file) {
  const out = {};
  for (const r of docKhoi(file, 'CGOSIZE')) {
    for (const phan of r['Kiện'].replace(/CGO-/g, '').split(',')) {
      const [a, b] = phan.trim().split('..').map(Number);
      for (let n = a; n <= (b || a); n++) out[`CGO-${n}`] = r['Cỡ'];
    }
  }
  return out;
}

// Dòng nguồn của file kết quả: hash tham số (FNV-1a trên JSON), kèm giờ chạy trừ khi có cờ --khong-gio (để so hai lần chạy bằng diff).
export function dauChay(cfg) {
  let h = 0x811c9dc5;
  for (const ch of JSON.stringify(cfg)) { h ^= ch.codePointAt(0); h = Math.imul(h, 0x01000193) >>> 0; }
  const hash = h.toString(16).padStart(8, '0');
  return process.argv.includes('--khong-gio') ? `hash tham số ${hash}` : `lúc ${new Date().toISOString()}, hash tham số ${hash}`;
}
