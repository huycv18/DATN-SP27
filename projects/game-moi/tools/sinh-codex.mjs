#!/usr/bin/env node
// Sinh Codex (bách khoa trong game) từ TSV các tab Sheet GDD. Dữ liệu sinh bằng máy, chỉ cột "Lời trong game" do gd-story viết.
//   --khung   ghi codex/khung.tsv (khoa | tab | loai | ten | ten_en | tom_tat_luat) cho gd-story
//   (không cờ) đọc codex/loi.tsv (khoa | loi), ghi codex/<Tab>.tsv. Thiếu lời thì để trống
//   --kiem    thoát 1 khi thiếu lời, lời thừa khóa, lời quá 200 ký tự, có chữ số, gạch dài, chấm phẩy
// Chạy: node projects/game-moi/tools/sinh-codex.mjs [--khung|--kiem] [--goc <thư mục game>]
// Chỉ lấy mục MVP. Khóa (ID hoặc tên đúng như TSV) chỉ nằm ở khung.tsv và loi.tsv, không in ra tab Codex.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { docTsv } from './doi-chieu-sheet.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
export const TABS = ['Vật phẩm', 'Điểm khai thác', 'Driftlife', 'Thương nhân', 'Trạm và nâng cấp', 'Nhân vật và trạng thái'];
export const COT = ['STT', 'Loại', 'Tên', 'Tên tiếng Anh', 'Lời trong game', 'Nguồn nhận', 'Công thức', 'Dùng cho', 'Ảnh'];
const LOI_TOI_DA = 200;

// ---------- Đọc và làm sạch ----------
const nhanMvp = (s) => /\bMVP\b/.test(s) && !/Sau MVP/.test(s);
const dongNhan = (s) => (/Nhãn: ([^\n]*)/.exec(s) || [])[1]; // undefined khi không có dòng Nhãn
const ascii = (s) => /^[\x20-\x7e]+$/.test(s);
const bo = (s) => s.replace(/\r/g, '').trim();
const phang = (s) => bo(s).split('\n').map((l) => l.replace(/^- /, '').trim()).filter(Boolean).join(' / ');
const hoa = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const catDai = (s, n = 600) => (s.length > n ? s.slice(0, n - 3) + '...' : s);

// Gom hàng TSV (bỏ header) thành khối: { stt, ten, ref, subs: [{ten, txt}] }.
export function gomKhoi(rows) {
  const out = [];
  for (const r of rows.slice(1)) {
    const [stt, task, sub, txt, ref] = [r[0] || '', r[1] || '', r[2] || '', r[3] || '', r[4] || ''];
    if (stt !== '' || !out.length) out.push({ stt, ten: task, ref, subs: [] });
    out[out.length - 1].subs.push({ ten: sub, txt });
  }
  return out;
}
const sub = (k, ten) => (k.subs.find((s) => s.ten === ten) || { txt: '' }).txt;

function nap(goc) {
  const f = (ten) => join(goc, 'gdd', 'sheet', ten);
  const tsv = (ten) => docTsv(readFileSync(f(ten + '.tsv'), 'utf8'));
  const json = (ten) => JSON.parse(readFileSync(f(ten + '.json'), 'utf8'));
  const vp = join(goc, 'gdd', 'he-thong', 'vat-pham.md');
  const en = {}; // ID -> tên Anh, từ bảng "Tên / English" của vat-pham.md
  if (existsSync(vp)) for (const l of readFileSync(vp, 'utf8').split('\n')) { const m = /^\| ((?:RES|SMP|LIV|COM|CON|CGO|ENG|STY|BNG|TOL)-\d{3}) \| [^|]*? \/ ([^|]*?) \|/.exec(l); if (m) en[m[1]] = m[2].trim(); }
  return { en, item: tsv('ITEM LIST'), itemJ: json('ITEM LIST'), salv: tsv('Salvage'), salvJ: json('Salvage'), rcp: tsv('Recipe'), rcpJ: json('Recipe'), enemy: tsv('Enemy'), cust: tsv('Customer'), upg: tsv('Upgrade'), player: tsv('Player') };
}

// Bảng ID sang tên (ID chỉ để tra, không in ra).
const UPG = { OXY: 'Bình Oxy bậc', BAG: 'Túi đồ bậc', THR: 'Bộ đẩy bậc', MIN: 'Dụng cụ khai thác bậc', HAR: 'Lao từ bậc', NET: 'Súng lưới bậc', ENV: 'Vỏ bộ đồ cấp', RACK: 'Đai dụng cụ bậc' };
function dungMap(d) {
  const ten = {}, rcp = {}, canh = [];
  const itemRows = d.item.slice(1);
  if (itemRows.length !== d.itemJ.length) throw new Error(`ITEM LIST.tsv ${itemRows.length} hàng, .json ${d.itemJ.length} hàng`);
  itemRows.forEach((r, i) => { if (d.itemJ[i][2] !== r[2]) throw new Error(`ITEM LIST hàng ${i + 1}: TSV và JSON lệch loại`); ten[d.itemJ[i][0]] = r[1]; });
  const sK = gomKhoi(d.salv), sJ = d.salvJ.filter((r) => r[0].startsWith('SLV-'));
  if (sK.length !== sJ.length) throw new Error(`Salvage.tsv ${sK.length} khối, .json ${sJ.length} khối`);
  sK.forEach((k, i) => { if (sJ[i][1] !== k.ten) throw new Error(`Salvage khối ${i + 1}: TSV "${k.ten}" lệch JSON "${sJ[i][1]}"`); ten[sJ[i][0]] = k.ten; k.id = sJ[i][0]; });
  const rK = gomKhoi(d.rcp), rJ = d.rcpJ.filter((r) => r[0] !== '');
  if (rK.length !== rJ.length) throw new Error(`Recipe.tsv ${rK.length} khối, .json ${rJ.length} khối`);
  rK.forEach((k, i) => {
    ten[rJ[i][0]] = k.ten; k.id = rJ[i][0];
    const tg = (/Thời gian: ([^\n]+)/.exec(sub(k, 'Output')) || [])[1];
    const ra = bo(sub(k, 'Output')).split('\n').filter((l) => l.trim() && !/^Thời gian:/.test(l));
    const dau = !ra.length || !ra.every((l) => /^\d+ x /.test(l)) || (ra.length === 1 && /^1 x /.test(ra[0])) ? '' : ` -> ${ra.join(' + ')}`; // đầu ra khác 1 món thì ghi rõ (Lưới cuộn ra 10)
    rcp[rJ[i][0]] = bo(sub(k, 'Ingredients')).split('\n').join(' + ') + dau + (tg ? ` (${tg})` : '');
  });
  // Mã quái (DL-G01, BS-1) lấy từ các ô JSON có dạng "DL-G01 Driftmoth".
  const quai = {};
  for (const m of JSON.stringify([d.itemJ, d.salvJ, d.rcpJ]).matchAll(/\b((?:DL-[A-Z]\d{2})|BS-\d) ([A-Z][a-z]+(?: [A-Z][a-z]+)?)/g)) quai[m[1]] = m[2];
  return { ten, rcp, quai, sK, rK, canh };
}

// Mục Sau MVP, xác định từ nhãn trong chính các tab nguồn: ID thô và tên. Trả { ids, names, re }.
export function dungSau(d, M) {
  const ids = new Set(), names = new Set();
  const them = (id, ten) => { if (id) ids.add(id); if (ten) names.add(ten); };
  const sau = (nl) => nl !== undefined && !nhanMvp(nl);
  d.item.slice(1).forEach((r, i) => { if (!nhanMvp(r[5])) them(d.itemJ[i][0], r[1]); });
  for (const k of M.sK) if (sau(dongNhan(sub(k, 'Type')))) them(k.id, k.ten);
  for (const k of M.rK) if (sau(dongNhan(sub(k, 'Unlock')))) them(k.id, k.ten);
  for (const k of gomKhoi(d.upg)) {
    const a = Object.keys(UPG).find((x) => UPG[x].replace(/ (bậc|cấp)$/, '') === k.ten);
    if (!a) continue;
    for (const s of k.subs.filter((x) => /^(Bậc|Cấp) \d/.test(x.ten))) {
      if (/(^|[ .])MVP\s*$/.test(s.txt) && !/Sau MVP\s*$/.test(s.txt)) continue;
      const n = /\d/.exec(s.ten)[0];
      them(`UPG-${a}-${n}`, `${UPG[a]} ${n}`);
    }
  }
  const code = (ten) => Object.keys(M.quai).find((c) => M.quai[c] === ten);
  for (const k of gomKhoi(d.enemy)) if (sau(dongNhan(sub(k, 'Type')))) them(code(k.ten), k.ten);
  const esc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const all = [...ids, ...names].filter((x) => x.length > 2).map(esc);
  return { ids, names, re: all.length ? new RegExp(`(?<![\\p{L}\\d-])(?:${all.join('|')})(?![\\p{L}\\d])`, 'u') : /(?!)/ };
}

// Bỏ khỏi ô mọi đoạn (tách theo dấu phẩy ngoài ngoặc) nhắc tới mục Sau MVP. Giữ xuống dòng.
export function locSau(s, sau) {
  return s.split('\n').map((l) => l.split(/,\s+(?![^()]*\))/).filter((p) => !sau.re.test(p)).join(', ')).join('\n').trim();
}

// Thay ID bằng tên, bỏ ghi chú tham chiếu file, mã luật. Trả chuỗi sạch.
function sach(s, M) {
  s = s.replace(/\b(DL-[A-Z]\d{2}|BS-\d) ([A-Z][a-z]+(?: [A-Z][a-z]+)?)/g, '$2').replace(/\b(DL-[A-Z]\d{2}|BS-\d)\b/g, (m) => M.quai[m] || m);
  s = s.replace(/\bUPG-([A-Z]+)-(\d)\b/g, (m, a, n) => (UPG[a] ? `nâng cấp ${UPG[a]} ${n}` : m));
  s = s.replace(/\bRCP-\d{3}\b/g, (m) => (M.ten[m] ? `công thức ${M.ten[m]}` : m));
  s = s.replace(/\b(?:SLV|RES|SMP|LIV|COM|CON|CGO|ENG|STY|BNG|TOL)-\d{3}\b/g, (m) => M.ten[m] || m);
  s = s.replace(/\s*\((?:[^()]*\.md[^()]*|gd-[^()]*|K\d+[^()]*)\)/g, '').replace(/, K\d+\)/g, ')').replace(/ theo K\d+/g, '').replace(/\s*\(MVP\)/g, '').replace(/, MVP\)/g, ')').replace(/Mã truyện MM[\d.]+, /g, '');
  return s.replace(/ {2,}/g, ' ').trim();
}

// Phím mặc định (F, V, E) có màn Đổi phím nên không ghi cứng, gọi theo tên hành động.
const PHIM = { F: 'Recall', V: 'Chia Oxy', E: 'Tương tác' };
export const phimTen = (s) => s.replace(/\b([Gg]iữ) ([FVE])\b/g, (_, g, p) => `${g} phím ${PHIM[p]}`);
// Cột Dùng cho của các mục Player không có kỹ năng: [Sub Task, tiền tố dòng MVP].
const DUNG_P = {
  'Nhân vật người chơi (ngoài không gian và trong trạm)': [['Move', 'Bay (bậc 0)'], ['Attribute', 'Hao nền'], ['Attribute', 'Bán kính va chạm']],
  'Oxy, Ngạt, cứu và bị kéo về': [['Characteristic', 'Oxy hao nền'], ['Characteristic', 'Oxy chạm 0 thì vào Ngạt']],
  'Túi đồ và dụng cụ': [['Attribute', 'Bộ khởi điểm'], ['Characteristic', 'Túi đầy thì không nhặt thêm']],
  'Bộ đồ: 5 trục nâng cấp (giá ở tab Upgrade)': [['Type', 'Nâng cấp mua một lần'], ['Type', 'MVP có bậc']],
  'Co-op 1 đến 4 người': [['Characteristic', 'Riêng từng người'], ['Characteristic', 'Chung cả nhóm']],
};

const tachTen = (goc) => {
  const m = /^(.*?)\s*\(([^()]*)\)\s*$/.exec(goc);
  if (!m || /tab /.test(m[2])) return { ten: m ? m[1] : goc, en: '' };
  return ascii(m[1]) ? { ten: m[2], en: m[1] } : { ten: m[1], en: '' };
};

// ---------- Dựng mục theo tab ----------
export function dung(goc) {
  const d = nap(goc), M = dungMap(d), SAU = dungSau(d, M);
  const sachM = (x) => sach(locSau(x, SAU), M); // ô dữ liệu chỉ nêu thứ MVP
  const muc = [], khongNhan = [];
  const them = (e) => muc.push({ nguon: '', congthuc: '', dungcho: '', ten_en: '', ...e });

  // Vật phẩm: khóa là ID của ITEM LIST.json, tên lấy từ TSV.
  d.item.slice(1).forEach((r, i) => {
    if (!nhanMvp(r[5])) return;
    const id = d.itemJ[i][0], note = r[5];
    const en0 = ascii(note.split('. ')[0]) && /[A-Za-z]/.test(note.split('. ')[0]) ? note.split('. ')[0] : '';
    // Tên Anh lấy từ bảng ID của vat-pham.md, GDD không có thì để trống (không tự dịch)
    const en = (d.en[id] || en0).replace(/\b(DL-[A-Z]\d{2}|BS-\d)\b/g, (m) => M.quai[m] || m);
    const ct = (d.itemJ[i][3].match(/RCP-\d{3}/g) || []).filter((x) => !SAU.ids.has(x)).map((x) => locSau(M.rcp[x] || '', SAU)).filter(Boolean).join('\n');
    const nguon = sachM(d.itemJ[i][3]), dung_ = sachM(d.itemJ[i][4]);
    them({ khoa: id, tab: 'Vật phẩm', loai: r[2], ten: r[1], ten_en: en, nguon, congthuc: ct, dungcho: dung_, tom: catDai(`Loại ${r[2]}. Nguồn nhận: ${nguon}. Nguồn tiêu: ${dung_}. ${en0 ? note.slice(en0.length + 2) : note}`) });
  });

  // Điểm khai thác: chỉ mã SLV.
  for (const k of M.sK) {
    if (!k.id.startsWith('SLV-')) continue;
    const nl = dongNhan(sub(k, 'Type'));
    if (nl === undefined) khongNhan.push(`Salvage: ${k.ten}`);
    if (!nl || !nhanMvp(nl)) continue;
    const ra = sachM(bo(sub(k, 'Resource Output')).split('\n').map((l) => l.replace(/^- /, '')).join('\n'));
    const cho = sachM(sub(k, 'Spawn Point'));
    them({ khoa: k.id, tab: 'Điểm khai thác', loai: 'Điểm khai thác', ten: k.ten, nguon: cho.split('. ')[0], dungcho: ra, tom: catDai(k.subs.map((s) => `${s.ten}: ${phang(sach(s.txt, M))}`).join(' | ')) });
  }

  // Driftlife: loài và boss, bỏ hàng luật chung và sự kiện (không có dòng Nhãn).
  for (const k of gomKhoi(d.enemy)) {
    const type = sub(k, 'Type'), nl = dongNhan(type);
    if (nl === undefined) { khongNhan.push(`Enemy: ${k.ten}`); continue; }
    if (!nhanMvp(nl)) continue;
    const boss = /^- Boss/.test(type), dong = type.split('\n').map((l) => l.replace(/^- /, ''));
    const noi = boss ? (dong.find((l) => /^Nơi: /.test(l)) || '').slice(5) : dong[0];
    const chiHa = /^Bắt sống: .*Sau MVP/m.test(dong.join('\n')); // bắt sống còn Sau MVP thì không kể Mẫu sống
    const roi = dong.filter((l) => /^(Rơi khi|Bắt sống cho)/.test(l) && !(chiHa && /^Bắt sống cho/.test(l))).join('. ');
    them({ khoa: k.ten, tab: 'Driftlife', loai: boss ? 'Boss' : 'Loài', ten: k.ten, ten_en: k.ten, nguon: noi, dungcho: sachM(roi), tom: catDai(k.subs.map((s) => `${s.ten}: ${phang(sach(s.txt, M))}`).join(' | ')) });
  }

  // Thương nhân: mỗi tàu MVP một mục, thêm một mục cho thương nhân có tên riêng.
  const cK = gomKhoi(d.cust);
  for (const k of cK) {
    const type = sub(k, 'Type'), nl = dongNhan(type);
    if (!/^- Ai: /.test(type)) continue; // chỉ khối tàu, các hàng luật bỏ qua
    if (!nl) { khongNhan.push(`Customer: ${k.ten}`); continue; }
    if (!nhanMvp(nl)) continue;
    const { ten, en } = tachTen(k.ten), ai = type.split('\n')[0].slice(6);
    const tom = catDai(k.subs.map((s) => `${s.ten}: ${phang(s.txt)}`).join(' | '));
    them({ khoa: k.ten, tab: 'Thương nhân', loai: 'Tàu', ten, ten_en: en, nguon: sub(k, 'Unlock'), dungcho: phang(sub(k, 'Order')), tom });
    const ten2 = ai.split(',')[0];
    if (/thương nhân/.test(ai) && !/không tên riêng/.test(ai)) them({ khoa: ten2, tab: 'Thương nhân', loai: 'Thương nhân', ten: ten2, ten_en: ascii(ten2) ? ten2 : '', nguon: `${/^Tàu/.test(ten) ? '' : 'Tàu '}${ten}. ${sub(k, 'Unlock')}`, dungcho: phang(sub(k, 'Order')), tom: `Ai: ${ai}. ${tom}` });
  }

  // Trạm và nâng cấp: khoang từ khối "Khoang trạm" của Customer, nâng cấp từ Upgrade (mỗi trục có bậc MVP một mục).
  const kt = cK.find((k) => k.ten === 'Khoang trạm');
  for (const s of kt ? kt.subs : []) {
    const nl = dongNhan(s.txt);
    if (nl === undefined) continue; // các dòng luật không có Nhãn
    if (!nhanMvp(nl)) continue;
    const f = (nhan) => ((new RegExp(`^- ${nhan}: (.*)$`, 'm').exec(s.txt)) || [])[1] || '';
    const { ten } = tachTen(s.ten);
    const vot = f('Người vớt');
    // Nhãn "MVP giai đoạn N": chỉ nêu giai đoạn MVP (mỗi chương một giai đoạn), không nêu 5 giai đoạn
    const gd = /^MVP giai đoạn (\d)/.exec(nl);
    const chg = gd ? gd[1] : f('Mở ở chương');
    const chucNang = gd ? f('Chức năng').replace(/\d+ giai đoạn/, `giai đoạn ${gd[1]}`) : f('Chức năng');
    them({ khoa: s.ten, tab: 'Trạm và nâng cấp', loai: 'Khoang', ten, nguon: `${vot === 'Có sẵn' || /^Có sẵn/.test(vot) ? 'Có sẵn' : 'Người vớt ' + vot}, mở ở chương ${chg}`, dungcho: chucNang, tom: catDai(phang(sach(s.txt, M))) });
  }
  for (const k of gomKhoi(d.upg)) {
    const bac = k.subs.filter((s) => /^(Bậc|Cấp) \d/.test(s.ten));
    const mvp = bac.filter((s) => /(^|[ .])MVP\s*$/.test(s.txt) && !/Sau MVP\s*$/.test(s.txt));
    bac.filter((s) => !/MVP\s*$/.test(s.txt)).forEach((s) => khongNhan.push(`Upgrade: ${k.ten} ${s.ten}`));
    if (!mvp.length) continue;
    const t = mvp.map((s) => { const p = s.txt.replace(/\.?\s*MVP\s*$/, '').split('. '); return { ten: s.ten, hieu: p[0], gia: p[1] || '', mo: p.slice(2).join('. ') }; });
    them({ khoa: k.ten, tab: 'Trạm và nâng cấp', loai: 'Nâng cấp', ten: k.ten, nguon: t.map((x) => `${x.ten}: ${x.mo}`).join('\n'), congthuc: t.map((x) => `${x.ten}: ${x.gia}`).join('\n'), dungcho: t.map((x) => `${x.ten}: ${x.hieu}`).join('\n'), tom: catDai(`${sub(k, 'Loại')} | ${t.map((x) => `${x.ten}: ${x.hieu}. ${x.gia}. ${x.mo}`).join(' | ')}`) });
  }

  // Nhân vật và trạng thái: Task MVP của Player, kỹ năng đặc biệt tách theo từng tên.
  const LOAI_P = { 'Nhân vật người chơi (ngoài không gian và trong trạm)': 'Nhân vật', 'Oxy, Ngạt, cứu và bị kéo về': 'Trạng thái', 'Túi đồ và dụng cụ': 'Chỉ số', 'Bộ đồ: 5 trục nâng cấp (giá ở tab Upgrade)': 'Chỉ số', 'Co-op 1 đến 4 người': 'Cách chơi' };
  for (const k of gomKhoi(d.player)) {
    const nl = k.subs.map((s) => s.txt).join('\n');
    if (k.ten.startsWith('Hồ sơ nhân vật')) { khongNhan.push(`Player: ${k.ten} (hồ sơ art, bỏ)`); continue; }
    if (!/\(MVP\)|MVP chạy|MVP có|MVP bậc/.test(nl)) { khongNhan.push(`Player: ${k.ten}`); continue; }
    const loai = LOAI_P[k.ten];
    if (!loai) throw new Error(`Player: chưa có Loại cho "${k.ten}", thêm vào LOAI_P`);
    const ten = k.ten === 'Bộ đồ: 5 trục nâng cấp (giá ở tab Upgrade)' ? 'Bộ đồ' : tachTen(k.ten).ten;
    const tom = catDai(phimTen(k.subs.map((s) => `${s.ten}: ${phang(s.txt)}`).join(' | ')));
    // Dùng cho: các dòng MVP chọn theo tiền tố trong DUNG_P (bậc cao của chỉ số là Sau MVP nên không lấy cả khối)
    const dungcho = (DUNG_P[k.ten] || []).flatMap(([sn, tt]) => bo(sub(k, sn)).split('\n').map((l) => l.replace(/^- /, '')).filter((l) => l.startsWith(tt))).join(' / ');
    them({ khoa: k.ten, tab: 'Nhân vật và trạng thái', loai, ten, tom, dungcho });
    if (!k.ten.startsWith('Nhân vật người chơi')) continue;
    // Kỹ năng: dòng "Tên: mô tả" mở mục mới, dòng không có tên nối vào mục trước. Kĩ năng nội tại không có tên nên một mục.
    const noiTai = sub(k, 'Kĩ năng nội tại');
    them({ khoa: 'Kĩ năng nội tại', tab: 'Nhân vật và trạng thái', loai: 'Kỹ năng', ten: 'Kĩ năng nội tại', tom: catDai(phimTen(phang(noiTai))), dungcho: phimTen(phang(noiTai)) });
    let cur = null;
    for (const l of bo(sub(k, 'Kĩ năng đặc biệt')).split('\n').map((x) => x.replace(/^- /, ''))) {
      const m = /^([^:]{2,30}): (.*)$/.exec(l);
      if (m) { cur = { khoa: m[1], tab: 'Nhân vật và trạng thái', loai: 'Kỹ năng', ten: m[1], tom: phimTen(hoa(m[2])), dungcho: phimTen(hoa(m[2])) }; them(cur); }
      else if (cur) { cur.tom += '. ' + phimTen(l); cur.dungcho += '. ' + phimTen(l); }
    }
  }

  const khoa = new Set();
  for (const e of muc) { if (khoa.has(e.khoa)) throw new Error(`Trùng khóa "${e.khoa}" (${e.tab})`); khoa.add(e.khoa); }
  const canh = [];
  for (const e of muc) for (const c of ['nguon', 'congthuc', 'dungcho', 'tom']) if (/\b[A-Z]{2,4}-[A-Z0-9]{1,3}\b|\.md\b|\bgd-|\bK\d{1,2}\b|\bMM\d/.test(e[c])) canh.push(`${e.tab} / ${e.ten} / ${c}: còn mã hoặc tham chiếu`);
  return { muc, khongNhan, canh };
}

// ---------- Ghi, kiểm ----------
const o = (s) => String(s ?? '').replace(/\t/g, ' ').replace(/\n/g, '\\n');
const tsv = (rows) => rows.map((r) => r.map(o).join('\t')).join('\n') + '\n';

export function docLoi(file) {
  if (!existsSync(file)) return null;
  const rows = docTsv(readFileSync(file, 'utf8'));
  const loi = new Map();
  for (const r of rows.slice(1)) if (r[0]) loi.set(r[0], (r[1] || '').trim());
  return loi;
}

export function kiem(muc, loi) {
  const e = [];
  if (!loi) return [`Không có codex/loi.tsv: thiếu lời cả ${muc.length} mục`];
  const co = new Set(muc.map((m) => m.khoa));
  for (const m of muc) {
    const l = loi.get(m.khoa);
    if (!l) { e.push(`Thiếu lời: ${m.tab} / ${m.khoa}`); continue; }
    if ([...l].length > LOI_TOI_DA) e.push(`Lời quá ${LOI_TOI_DA} ký tự (${[...l].length}): ${m.khoa}`);
    if (/\d/.test(l)) e.push(`Lời chứa chữ số: ${m.khoa}`);
    if (/[—–]/.test(l)) e.push(`Lời chứa gạch dài: ${m.khoa}`);
    if (/;/.test(l)) e.push(`Lời chứa chấm phẩy: ${m.khoa}`);
  }
  for (const k of loi.keys()) if (!co.has(k)) e.push(`Lời thừa, không khớp khóa nào: ${k}`);
  return e;
}

export function ghiTab(muc, loi) {
  return TABS.map((tab) => {
    const ms = muc.filter((m) => m.tab === tab);
    return { tab, n: ms.length, text: tsv([COT, ...ms.map((m, i) => [i + 1, m.loai, m.ten, m.ten_en, (loi && loi.get(m.khoa)) || '', m.nguon, m.congthuc, m.dungcho, ''])]) };
  });
}

function chay() {
  const a = process.argv.slice(2);
  const goc = resolve(a.includes('--goc') ? a[a.indexOf('--goc') + 1] : join(HERE, '..'));
  const dir = join(goc, 'codex');
  const { muc, khongNhan, canh } = dung(goc);
  const loi = docLoi(join(dir, 'loi.tsv'));
  if (a.includes('--kiem')) {
    const e = kiem(muc, loi);
    e.forEach((x) => console.log('LỖI ' + x));
    console.log(e.length ? `${e.length} lỗi` : `Đạt: ${muc.length} mục đủ lời`);
    process.exit(e.length ? 1 : 0);
  }
  mkdirSync(dir, { recursive: true });
  if (a.includes('--khung')) {
    writeFileSync(join(dir, 'khung.tsv'), tsv([['khoa', 'tab', 'loai', 'ten', 'ten_en', 'tom_tat_luat'], ...muc.map((m) => [m.khoa, m.tab, m.loai, m.ten, m.ten_en, m.tom])]));
    console.log(`Ghi codex/khung.tsv: ${muc.length} mục`);
  } else {
    for (const t of ghiTab(muc, loi)) writeFileSync(join(dir, t.tab + '.tsv'), t.text);
    console.log(`Ghi ${TABS.length} tab Codex vào codex/ (${loi ? loi.size + ' lời' : 'chưa có loi.tsv, lời trống'})`);
  }
  console.log('| Tab | Số mục |\n|---|---|');
  for (const t of TABS) console.log(`| ${t} | ${muc.filter((m) => m.tab === t).length} |`);
  console.log(`| Tổng | ${muc.length} |`);
  if (khongNhan.length) console.log('\nKhối TSV không đọc được nhãn MVP (bỏ qua):\n' + khongNhan.map((x) => '- ' + x).join('\n'));
  if (canh.length) console.log('\nCẢNH BÁO còn mã hoặc tham chiếu chưa dịch:\n' + canh.map((x) => '- ' + x).join('\n'));
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) chay();
