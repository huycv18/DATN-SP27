#!/usr/bin/env node
// Validator chéo GDD game-moi (GD-030). Đọc mọi file trong gdd/he-thong/, in bảng lỗi theo file và dòng, thoát 1 khi có lỗi.
// Chạy: node projects/game-moi/tools/validate-gdd.mjs [thư mục he-thong] [--ra <file.md>]
// Luật kiểm: tools/README.md mục validate-gdd. Selftest: tools/selftest.mjs
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));

// File nào do vai nào giữ (khung mục 8). File đợt 2 chưa có thì bỏ qua.
export const CHU_FILE = {
  'cot-truyen.md': 'gd-story', 'nguoi-choi.md': 'gd-character', 'ho-so-nhan-vat.md': 'gd-character',
  'combat-driftlife.md': 'gd-combat', 'vat-pham.md': 'gd-items', 'map.md': 'gd-world',
  'tram-va-cang.md': 'gd-quan', 'kinh-te-tien-trinh.md': 'gd-economy', 'ux-ui.md': 'gd-ux', 'ky-thuat.md': 'gd-tech',
};
// Họ ID và file định nghĩa. Mẫu khớp cả ID, nhóm 1 là tiền tố để báo.
const HO_ID = [
  { file: 'vat-pham.md', re: /\b(RES|SMP|LIV|BPS|BIO|COM|CON|TOL|CGO|STY|BNG|RCP|SLV|BPR|FED|ENG)-\d{3}\b/g },
  { file: 'vat-pham.md', re: /\b(UPG)-[A-Z]{3,4}-\d\b/g },
  { file: 'combat-driftlife.md', re: /\b(DL)-[GMX]\d{2}\b/g },
  { file: 'combat-driftlife.md', re: /\b(WD)-\d{2}\b/g },
  { file: 'combat-driftlife.md', re: /\b(BS)-\d\b/g },
  { file: 'map.md', re: /\b(SP)-[A-Z]\b/g },
  { file: 'map.md', re: /\b(H)\d{2}\b/g },
  { file: 'map.md', re: /\b(Z)[1-9]\b/g },
  { file: 'tram-va-cang.md', re: /\b(KH|TA|HC)\d{2}\b/g },
  { file: 'ho-so-nhan-vat.md', re: /\b(PC|RS|TR|NP)-\d\b/g },
  { file: 'ho-so-nhan-vat.md', re: /\b(WD-P)\d\b/g },
  { file: 'map.md', re: /\b(N)\d{1,2}\b/g },
  { file: 'map.md', re: /\b(A)\d{2}\b/g },
  { file: 'nguoi-choi.md', re: /\b(T)-[A-Z]{2,8}\b/g },
  { file: 'cot-truyen.md', re: /\b(MM)\d+\.\d+\b/g, khongNhan: true }, // nhãn MVP nằm ở STY đi kèm
];
const CHO_DUOC = /^(gd-economy|gd-ux)\b/; // gd-tech đã trả lời mọi điểm chờ ở ky-thuat.md, chủ file phải gỡ dấu
const PHAN_DIEN_CU = /tham lam hơn loài người|bản khảo sát|đạo đức giả/i; // Lead sửa phản diện (GD-033)
// Vai giữ tab Sheet (briefs/dot5-dan-sheet.md), để lỗi trong TSV báo đúng người
const TAB_VAI = {
  'GAME STORY': 'gd-story', Player: 'gd-character', Enemy: 'gd-combat', Salvage: 'gd-items', 'ITEM LIST': 'gd-items', Recipe: 'gd-items',
  Zone: 'gd-world', Customer: 'gd-quan', ECONOMIC: 'gd-economy', Shop: 'gd-economy', Upgrade: 'gd-economy', PROCESSING: 'gd-economy',
  'Balance Sheet': 'gd-economy', WIREFRAME: 'gd-ux', Tutorials: 'gd-ux', 'Event Tracking': 'gd-tech', 'MVP Criteria Checklist': 'gd-qa',
};
const TU_CU = [/Hollower/i, /Bếp trưởng/i, /Sundering/i]; // Sundering đổi thành The Scattering (log 75)
const BO_QUA_MUC = /^#+\s*(Lịch sử thay đổi|Balance Sheet)/; // số và tên cũ được nhắc trong lịch sử
// Cụm trái luật khung đã đổi: số túi cũ trước log 54, đường về an toàn khi rời hoặc rớt giữa chuyến (trái C10).
const CUM_CU = [
  { re: /chờ GDM/i, ten: 'Còn chờ GDM (thay bằng quyết định ở log-gdm-tu-quyet.md, ghi số dòng)' },
  { re: /\b20, 30, 42, 56, 72\b/, ten: 'Số túi cũ (trước log 54)' },
  { re: /\b2\/3\/4 ô|\b2, 3, 4 ô|ô 2, 3, 4\b/, ten: 'Số ô đai cũ (đúng là 3, 4, 5 ô theo nguoi-choi.md)' },
  { re: /(thoát giữa|thoát game|rời phiên|rời giữa|mất kết nối|rớt|Giữ chỗ|quá 15 giây|Về an toàn)[^|.]*(?<!không )giữ nguyên túi/i, ten: 'Trái C10: rời hoặc rớt giữa chuyến không giữ nguyên túi', tru: /Tự thoát|không phải đường về/ },
];
const BO_QUA_TEN = /^#+[\s\d.]*(Câu hỏi mở|Tên game|Lệch khỏi tham chiếu|Lịch sử thay đổi)/; // đề xuất tên, game tham chiếu

const cells = (line) => line.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
const laHangBang = (line) => /^\s*\|/.test(line) && !/^\s*\|[\s:|-]+\|\s*$/.test(line);

function docThuMuc(dir) {
  const files = {};
  for (const f of readdirSync(dir).filter((f) => f.endsWith('.md')).sort()) {
    const lines = readFileSync(join(dir, f), 'utf8').split(/\r?\n/);
    let boQua = false, boQuaTen = false, tuQuyet = false;
    files[f] = lines.map((text, i) => {
      if (/^#/.test(text)) { boQua = BO_QUA_MUC.test(text); boQuaTen = BO_QUA_TEN.test(text); tuQuyet = /^#+[\s\d.]*Điểm tự quyết/i.test(text); }
      return { n: i + 1, text, boQua, boQuaTen, tuQuyet };
    });
  }
  return files;
}

// Bảng tên riêng ở cot-truyen.md mục "Toàn bộ tên riêng": | Nhóm | Tên, Tên |
function tenRieng(files) {
  const out = {};
  const L = files['cot-truyen.md'] || [];
  const i = L.findIndex((l) => /^#+\s*Toàn bộ tên riêng/.test(l.text));
  if (i < 0) return out;
  for (const l of L.slice(i + 1)) {
    if (/^#/.test(l.text)) break;
    if (!laHangBang(l.text)) continue;
    const [nhom, ten] = cells(l.text);
    if (!ten || nhom === 'Nhóm') continue;
    out[nhom] = ten.split(',').map((s) => s.replace(/\(.*?\)/g, '').trim()).filter(Boolean);
  }
  return out;
}

export function kiem(dir) {
  const files = docThuMuc(dir);
  const loi = [];
  const them = (file, n, kiemTen, chiTiet, vai) => loi.push({ file, n, kiem: kiemTen, chiTiet, vai: vai || CHU_FILE[file] || 'GDM' });

  // 1. ID định nghĩa = ô đầu của một hàng bảng trong file chủ. Ghi kèm hàng có nhãn MVP không.
  const dinhNghia = new Map(); // id -> {file, n, coNhan}
  for (const ho of HO_ID) {
    for (const l of files[ho.file] || []) {
      if (!laHangBang(l.text)) continue;
      const dau = cells(l.text)[0];
      for (const m of dau.matchAll(ho.re)) {
        const d = dinhNghia.get(m[0]) || { file: ho.file, n: l.n, coNhan: !!ho.khongNhan };
        if (/MVP/.test(l.text)) d.coNhan = true;
        dinhNghia.set(m[0], d);
      }
    }
  }
  for (const ho of HO_ID) {
    if (!files[ho.file]) continue; // file chủ chưa có thì không kiểm họ đó
    const chu = CHU_FILE[ho.file];
    for (const [f, L] of Object.entries(files)) {
      for (const l of L) {
        if (l.boQua) continue;
        for (const m of l.text.matchAll(ho.re)) {
          if (/bỏ\s*$/i.test(l.text.slice(0, m.index))) continue; // câu ghi đã bỏ ID này
          if (!dinhNghia.has(m[0])) them(f, l.n, 'ID không có trong file chủ', `${m[0]} không có trong ${ho.file} (chủ ${chu})`);
        }
      }
    }
  }
  // 2. Nhãn MVP: mỗi ID định nghĩa phải có ít nhất một hàng định nghĩa ghi MVP hoặc Sau MVP.
  for (const [id, d] of dinhNghia) if (!d.coNhan) them(d.file, d.n, 'Thiếu nhãn MVP', `${id} không có hàng nào ghi MVP hoặc Sau MVP`);

  // 3. Dấu chờ ngoài ba vai đợt 2, và tên cũ.
  for (const [f, L] of Object.entries(files)) {
    for (const l of L) {
      if (l.boQua) continue;
      for (const m of l.text.matchAll(/\[CHỜ\s*([^\]]*)\]/g)) {
        if (!CHO_DUOC.test(m[1].trim())) them(f, l.n, 'Còn dấu CHỜ', m[0]);
      }
      for (const re of TU_CU) { const m = l.text.match(re); if (m) them(f, l.n, 'Tên cũ đã bỏ', m[0]); }
    }
  }

  // 4. Tên riêng khớp cot-truyen.md.
  const TR = tenRieng(files);
  if (files['cot-truyen.md']) {
    const tram = new Set((TR['Trạm con'] || []).filter((s) => s.startsWith('Station ')).map((s) => s.slice(8)));
    const tatCa = Object.values(TR).flat();
    const theNames = tatCa.filter((s) => s.startsWith('The '));
    const nguoi = ['Tổ Ember', 'Người vớt', 'Người khác'].flatMap((k) => TR[k] || []).filter((s) => s.includes(' '));
    const ho = new Map(nguoi.map((s) => [s.split(' ')[0], s.split(' ').slice(1).join(' ')]));
    const tenVatPham = (files['vat-pham.md'] || []).filter((l) => laHangBang(l.text)).map((l) => (cells(l.text)[1] || '').split(' / ')[1] || '');
    const laTenVatPham = (s) => tenVatPham.some((t) => t.includes(s));
    for (const [f, L] of Object.entries(files)) {
      for (const l of L) {
        if (l.boQuaTen) continue;
        for (const m of l.text.matchAll(/\bStation ([A-Z][a-z]+)/g)) {
          if (m[1] !== 'Seed' && !tram.has(m[1]) && !laTenVatPham(m[0])) them(f, l.n, 'Tên riêng lạ', `Station ${m[1]} không có trong bảng tên riêng của cot-truyen.md`);
        }
        for (const m of l.text.matchAll(/\bThe ([A-Z][a-z]+)/g)) {
          if (!theNames.some((t) => t.startsWith(`The ${m[1]}`)) && !laTenVatPham(m[0])) them(f, l.n, 'Tên riêng lạ', `The ${m[1]} không có trong bảng tên riêng của cot-truyen.md`);
        }
        for (const m of l.text.matchAll(/\b([A-Z][a-z]+) ([A-Z][a-z]+)\b/g)) {
          if (ho.has(m[1]) && ho.get(m[1]) !== m[2] && !/^(Station|The)$/.test(m[2])) them(f, l.n, 'Tên riêng lệch', `${m[0]} lệch tên ${m[1]} ${ho.get(m[1])} của cot-truyen.md`);
        }
      }
    }
    // Tên vùng của cot-truyen phải có trong map.md (gd-world giữ tên vùng).
    if (files['map.md']) {
      const mapText = files['map.md'].map((l) => l.text).join('\n');
      for (const t of TR['Nơi khác (tên vùng do gd-world giữ)'] || []) {
        if (!mapText.includes(t)) them('cot-truyen.md', 0, 'Tên vùng lệch', `${t} có ở cot-truyen.md nhưng không có trong map.md`, 'gd-story, gd-world');
      }
    }
  }

  // 5. Tên loài và kẻ địch: mã đứng sát một tên sinh vật ("DL-G01 Driftmoth", "Driftmoth (DL-G01") thì tên đó phải đúng của mã.
  const ten = new Map(); // mã -> tên
  for (const l of files['combat-driftlife.md'] || []) {
    if (!laHangBang(l.text)) continue;
    const c = cells(l.text);
    if (/^(DL-[GMX]\d{2}|WD-\d{2}|BS-\d)$/.test(c[0]) && c[1] && !ten.has(c[0])) ten.set(c[0], c[1]);
  }
  const tenDai = [...ten.values()].sort((a, b) => b.length - a.length); // khớp tên dài trước (Tempest Gulper trước Gulper)
  const tenDung = (s) => tenDai.find((t) => s.startsWith(t));
  const tenCuoi = (s) => tenDai.find((t) => s.endsWith(t));
  for (const [f, L] of Object.entries(files)) {
    for (const l of L) {
      if (l.boQua) continue;
      for (const m of l.text.matchAll(/\b(DL-[GMX]\d{2}|WD-\d{2}|BS-\d)\b/g)) {
        if (!ten.has(m[1])) continue;
        const sau = l.text.slice(m.index + m[0].length).match(/^\s*[:|]?\s*(.*)/)[1];
        const truoc = l.text.slice(0, m.index).match(/(.*?)\s*\(\s*$/)?.[1] || '';
        const t = tenDung(sau) || tenCuoi(truoc);
        if (t && t !== ten.get(m[1])) them(f, l.n, 'Tên loài lệch', `${m[1]} đi với tên ${t}, combat ghi ${m[1]} là ${ten.get(m[1])}`);
      }
    }
  }
  // 6. Mọi kiện CGO định nghĩa ở vat-pham.md thuộc đúng một nhóm hàng HC ở tram-va-cang.md (luật 23, 69).
  if (files['tram-va-cang.md'] && files['vat-pham.md']) {
    const nhom = {};
    for (const l of files['tram-va-cang.md']) {
      const m = l.text.match(/^\| (HC\d{2}) \|/);
      if (!m || nhom[m[1]]) continue;
      nhom[m[1]] = { n: l.n, ids: new Set(cells(l.text)[2]?.match(/CGO-\d{3}/g) || []) };
    }
    for (const [id, d] of dinhNghia) {
      if (!id.startsWith('CGO-')) continue;
      const thuoc = Object.keys(nhom).filter((h) => nhom[h].ids.has(id));
      if (thuoc.length !== 1) them('tram-va-cang.md', 0, 'Kiện không thuộc đúng một nhóm', `${id} thuộc ${thuoc.length ? thuoc.join(', ') : 'không nhóm nào'} (vat-pham.md dòng ${d.n})`);
    }
  }
  // 7. ID trùng trong một bảng danh mục: khối ITEM của vat-pham.md và các bảng dưới tiêu đề "Danh mục".
  // Bảng nhiều hàng mỗi ID có chủ đích (đòn theo loài, giá lồng theo loài) không kiểm.
  for (const [f, L] of Object.entries(files)) {
    let bang = new Map(), trongDanhMuc = false, trongKhoi = false, dauBang = null;
    const hoChu = HO_ID.filter((h) => h.file === f).map((h) => new RegExp(`^${h.re.source}$`));
    for (const l of L) {
      if (/^#/.test(l.text)) trongDanhMuc = /Danh mục/.test(l.text);
      if (/<!--B:[A-Z]+-->/.test(l.text)) trongKhoi = true;
      if (/<!--\/B:[A-Z]+-->/.test(l.text)) trongKhoi = false;
      if (!/^\s*\|/.test(l.text)) { bang = new Map(); dauBang = null; continue; }
      if (dauBang === null) dauBang = cells(l.text);
      if (/^(Đòn|Loài)$/.test(dauBang[1] || '')) continue; // bảng cố ý nhiều hàng mỗi ID: đòn theo loài, lồng theo loài
      if (!laHangBang(l.text)) continue;
      const dau = cells(l.text)[0];
      const laIdChu = hoChu.some((r) => r.test(dau)); // bảng định nghĩa trong file chủ của họ ID
      if (!trongDanhMuc && !trongKhoi && !laIdChu) continue;
      if (!laIdChu && !/^[A-Z]{1,4}(-[A-Z]{1,4})?-?\d{1,3}$/.test(dau)) continue;
      if (bang.has(dau) && !l.boQua) them(f, l.n, 'ID trùng trong bảng', `${dau} đã có ở dòng ${bang.get(dau)} cùng bảng`);
      else bang.set(dau, l.n);
    }
  }
  // 8. Cụm trái luật khung đã đổi.
  for (const [f, L] of Object.entries(files)) for (const l of L) {
    if (l.boQua) continue;
    for (const c of CUM_CU) if (c.re.test(l.text) && !c.tru?.test(l.text)) them(f, l.n, c.ten, l.text.match(c.re)[0].slice(0, 80));
  }
  // 8b. Cụm phản diện cũ Lead đã bỏ (GD-033), cả GDD hệ thống lẫn TSV của Sheet. Lịch sử và Điểm tự quyết được nhắc.
  for (const [f, L] of Object.entries(files)) for (const l of L) {
    if (l.boQua || l.tuQuyet) continue;
    const m = l.text.match(PHAN_DIEN_CU); if (m) them(f, l.n, 'Cụm phản diện cũ (GD-033)', m[0]);
  }
  const sheetDir = join(dir, '..', 'sheet');
  if (existsSync(sheetDir)) for (const f of readdirSync(sheetDir).filter((x) => x.endsWith('.tsv'))) {
    readFileSync(join(sheetDir, f), 'utf8').split(/\r?\n/).forEach((text, i) => {
      const m = text.match(PHAN_DIEN_CU); if (m) them(`sheet/${f}`, i + 1, 'Cụm phản diện cũ (GD-033)', m[0], TAB_VAI[f.slice(0, -4)]);
    });
  }
  // 9. Mọi luật K và C của khung được ít nhất một GDD hệ thống nhắc tới.
  const khung = join(dir, '..', '00-khung-game.md');
  if (existsSync(khung)) {
    const tatCa = Object.values(files).flat().map((l) => l.text).join('\n');
    for (const m of readFileSync(khung, 'utf8').matchAll(/^- ([KC]\d+) \(/gm)) {
      if (!new RegExp(`\\b${m[1]}\\b`).test(tatCa)) them('00-khung-game.md', 0, 'Luật khung chưa GDD nào nhắc', `${m[1]} không xuất hiện ở file hệ thống nào`, 'GDM');
    }
  }
  // 10. Mọi kiện CGO ở ITEM LIST có giá trong bảng giá kiện của kinh-te-tien-trinh.md.
  const kt = files['kinh-te-tien-trinh.md'];
  if (kt) {
    const coGia = new Set(kt.map((l) => l.text.match(/^\| (CGO-\d{3}) \|/)?.[1]).filter(Boolean));
    for (const [id, d] of dinhNghia) if (id.startsWith('CGO-') && !coGia.has(id)) them('kinh-te-tien-trinh.md', 0, 'Kiện chưa có giá', `${id} có ở ITEM LIST (vat-pham.md dòng ${d.n}) nhưng không có hàng giá`);
  }
  // 11. Ngưỡng Hạng cảng: dãy số ở kinh-te-tien-trinh.md (ngoài lịch sử) phải khớp tram-va-cang.md.
  const tvc = files['tram-va-cang.md'];
  const day = (L) => L.filter((l) => !l.boQua && /ngưỡng/i.test(l.text) && /hạng/i.test(l.text)).flatMap((l) => [...l.text.matchAll(/\b\d+(?:, \d+){5,6}\b/g)].map((m) => ({ n: l.n, s: m[0] })));
  if (tvc && kt) {
    const goc = day(tvc)[0]?.s;
    if (goc) for (const x of day(kt)) if (!goc.endsWith(x.s) && !x.s.endsWith(goc)) them('kinh-te-tien-trinh.md', x.n, 'Ngưỡng Hạng cảng lệch', `${x.s} khác tram-va-cang.md (${goc})`);
  }
  // 12. Vật truyện (bảng MM, V ở cot-truyen.md mục 2.5): có ID STY, khe có trong mục map nhánh của map.md, mốc "Hiện từ mốc" có trong cot-truyen.md.
  const ct = files['cot-truyen.md'], mp = files['map.md'];
  if (ct && mp) {
    const ctText = ct.map((l) => l.text).join('\n');
    const tenNhanh = {};
    for (const l of mp) { const c = cells(l.text); if (laHangBang(l.text) && /^N\d$/.test(c[0])) tenNhanh[c[0]] = (c[2] || '').split(/[,(]/)[0].trim(); }
    // Khe của một map nhánh: mọi dòng map.md nhắc tên nơi đó, mở rộng dạng "M1 đến M3".
    const trongMuc = (ten) => { // dòng thuộc mục có tiêu đề chứa tên nơi đó
      const out = []; let cap = 0;
      for (const l of mp) {
        const h = l.text.match(/^(#+) /);
        if (h) { if (l.text.includes(ten)) cap = h[1].length; else if (cap && h[1].length <= cap) cap = 0; }
        if (cap) out.push(l);
      }
      return out;
    };
    const mucMap = (ten) => [...new Set([...mp.filter((l) => l.text.includes(ten)), ...trongMuc(ten)])].map((l) => l.text.replace(/([MV])(\d+) đến \1?(\d+)/g, (_, k, a, b) => Array.from({ length: b - a + 1 }, (x, n) => `${k}${+a + n}`).join(' '))).join('\n');
    for (const l of ct) {
      if (l.boQua || !/^\| (MM|V)\d+\.\d+ \|/.test(l.text)) continue;
      const c = cells(l.text);
      if (!/STY-\d{3}/.test(c[2] || '')) them('cot-truyen.md', l.n, 'Vật truyện chưa có ID', `${c[0]} chưa có ID STY ở cột ID vật`, 'gd-items, gd-story');
      const nh = (c[3] || '').match(/\b(N\d)\b/)?.[1];
      const muc = nh && tenNhanh[nh] ? mucMap(tenNhanh[nh]) : '';
      for (const k of (c[3] || '').matchAll(/khe ([MV]\d+)/g)) {
        if (!new RegExp(`\\b${k[1]}\\b`).test(muc)) them('cot-truyen.md', l.n, 'Khe vật truyện chưa có trên map', `${c[0]} đặt ở ${nh || '?'} khe ${k[1]}, mục map nhánh của map.md chưa có khe này`, 'gd-world, gd-story');
      }
      const moc = (c[4] || '').match(/C\d\.\d+/)?.[0];
      if (moc && !new RegExp(`^\\| ${moc.replace('.', '\\.')} \\|`, 'm').test(ctText)) them('cot-truyen.md', l.n, 'Mốc hiện vật truyện không có', `${c[0]} hiện từ ${moc}, không có hàng định nghĩa mốc này`);
    }
  }
  loi.sort((a, b) => a.vai.localeCompare(b.vai) || a.file.localeCompare(b.file) || a.n - b.n);
  return { loi, soFile: Object.keys(files).length, soId: dinhNghia.size };
}

export function bang(kq) {
  const out = [`| Vai sửa | File | Dòng | Kiểm | Chi tiết |`, `|---|---|---|---|---|`];
  for (const e of kq.loi) out.push(`| ${e.vai} | ${e.file} | ${e.n} | ${e.kiem} | ${e.chiTiet.replace(/\|/g, '/')} |`);
  const dem = {};
  for (const e of kq.loi) dem[e.vai] = (dem[e.vai] || 0) + 1;
  const tom = Object.entries(dem).map(([v, n]) => `${v} ${n}`).join(', ') || 'không';
  return `Đọc ${kq.soFile} file, ${kq.soId} ID định nghĩa. Lỗi: ${kq.loi.length} (${tom}).\n\n${kq.loi.length ? out.join('\n') : ''}`;
}

if (process.argv[1] && basename(process.argv[1]) === 'validate-gdd.mjs') {
  const args = process.argv.slice(2);
  const ra = args.includes('--ra') ? args[args.indexOf('--ra') + 1] : null;
  const dir = args.find((a, i) => !a.startsWith('--') && args[i - 1] !== '--ra') || join(HERE, '..', 'gdd', 'he-thong');
  if (!existsSync(dir)) { console.error(`Không thấy thư mục ${dir}`); process.exit(2); }
  const kq = kiem(dir);
  const txt = bang(kq);
  console.log(txt);
  if (ra) writeFileSync(ra, `# Kết quả validate-gdd\n\nChạy lúc ${new Date().toISOString()}.\n\n${txt}\n`);
  process.exit(kq.loi.length ? 1 : 0);
}
