#!/usr/bin/env node
// Cổng "Sheet dễ đọc" (đợt 8, Lead 2026-11-20): Sheet GDD là bản đọc, không mã phức tạp, cột ID là số thứ tự.
// Chạy: node projects/game-moi/tools/kiem-de-doc.mjs [--tab "Zone"] [--tat-ca]   Thoát 1 khi có lỗi.
// Luật đầy đủ: projects/game-moi/briefs/dot8-gdd-de-doc.md
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { docTsv } from './doi-chieu-sheet.mjs';

const THU_MUC = join(dirname(fileURLToPath(import.meta.url)), '..', 'gdd', 'sheet');
// Mã kiểu K1, C3, RES-101, C1.1, UPG-OXY-1, T-OXY, WD-P2. Phím bấm và nút tay cầm không tính.
const MA = /\b(?:[A-Z]{1,5}-?\d+(?:\.\d+)*[a-z]?|[A-Z]{1,5}-[A-Z]{2,}(?:-\d+)?)\b/g;
const CHO_PHEP = /^(?:[0-9A-F]{6}|F\d{1,2}|[LR][123]|[LR]S|MP3|MP4|H264|A11Y|I18N|SP27)$/;
const COT_ID = new Set(['Issue ID', 'ID', 'Item ID', 'No', 'Mã', 'Day ID', 'STT']);
const KHONG_SO_ID = new Set(['PROCESSING', 'OVERVIEW']);
const CAM = [
  [/[—–]/, 'Gạch dài'],
  [/;/, 'Dấu chấm phẩy'],
  [/\*\*|^#{1,3} \S.*#$/, 'Ký hiệu markdown'],
  [/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u, 'Emoji'],
  [/Mỗi hơi thở là một quyết định|Mang về là để trạm sống lại|Vũ trụ kể chuyện qua thứ bạn vớt được/, 'Tên pillar cũ'],
  [/projects\/game-moi\//, 'Đường dẫn dài (Ref chỉ ghi <file>.md mục X)'],
];
const DAI_TOI_DA = 300; // ký tự mỗi dòng trong ô
// Cột Phiên bản (Lead 2026-11-25): tab nội dung phải có, mỗi hàng một giá trị hợp lệ
const PHIEN_BAN = new Set(['MVP', 'Sau MVP', 'MVP một phần']);
const CAN_PHIEN_BAN = new Set(['Assets', 'ITEM LIST', 'Salvage', 'Recipe', 'Shop', 'Upgrade', 'PROCESSING', 'Balance Sheet', 'Enemy', 'Customer', 'Zone', 'Player', 'GAME STORY', 'CORE LOOP', 'Day', 'Tutorials', 'WIREFRAME', 'MVP Criteria Checklist', 'Event Tracking']);

export function kiemTab(tab, rows) {
  const loi = [];
  const hdr = rows[0] || [];
  // GAME STORY có nhiều bảng con: cột lấy từ hàng header đầu tiên có chữ Phiên bản. Bỏ qua tiêu đề mục, hàng trống, hàng header
  const cotPb = (rows.find((r) => r.includes('Phiên bản')) || []).indexOf('Phiên bản');
  if (CAN_PHIEN_BAN.has(tab) && cotPb < 0) loi.push(['1', 'Thiếu cột Phiên bản', tab]);
  if (cotPb >= 0) rows.forEach((r, i) => {
    if (i === 0 || r.includes('Phiên bản') || r.filter((o, j) => j !== cotPb && o.trim()).length <= 1) return;
    if (!PHIEN_BAN.has((r[cotPb] || '').trim())) loi.push([`${String.fromCharCode(65 + cotPb)}${i + 1}`, 'Phiên bản sai', r[cotPb] || '(trống)']);
  });
  const cotId = KHONG_SO_ID.has(tab) ? [] : hdr.map((h, i) => (COT_ID.has(h.trim()) ? i : -1)).filter((i) => i >= 0);
  rows.forEach((r, ri) => {
    r.forEach((o, ci) => {
      const vt = `${String.fromCharCode(65 + ci)}${ri + 1}`;
      if (ri > 0 && cotId.includes(ci) && o.trim() && !/^\d+$/.test(o.trim()) && !o.startsWith('#')) loi.push([vt, 'ID không phải số thứ tự', o]);
      const ma = [...o.matchAll(MA)].map((m) => m[0]).filter((m) => !CHO_PHEP.test(m));
      if (ma.length) loi.push([vt, 'Còn mã', [...new Set(ma)].slice(0, 6).join(', ')]);
      for (const [re, ten] of CAM) if (re.test(o) && !(tab === 'OVERVIEW' && ten.startsWith('Đường dẫn'))) loi.push([vt, ten, o.match(re)[0]]);
      for (const dong of o.split('\n')) if (dong.length > DAI_TOI_DA) loi.push([vt, `Dòng dài hơn ${DAI_TOI_DA} ký tự`, `${dong.length} ký tự`]);
    });
  });
  return loi;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const arg = (k) => (process.argv.includes(k) ? process.argv[process.argv.indexOf(k) + 1] : null);
  const chiTab = arg('--tab'), tatCa = process.argv.includes('--tat-ca');
  let tong = 0;
  console.log('| Tab | Lỗi | Ví dụ |\n|---|---|---|');
  for (const f of readdirSync(THU_MUC).filter((x) => x.endsWith('.tsv'))) {
    const tab = basename(f, '.tsv');
    if (chiTab && tab !== chiTab) continue;
    const loi = kiemTab(tab, docTsv(readFileSync(join(THU_MUC, f), 'utf8')));
    tong += loi.length;
    const vd = (tatCa ? loi : loi.slice(0, 3)).map(([o, t, v]) => `${o} ${t}: ${String(v).slice(0, 60)}`).join('<br>');
    console.log(`| ${tab} | ${loi.length} | ${loi.length ? vd : 'ĐẠT'} |`);
  }
  console.log(tong ? `\nTRẢ LẠI: ${tong} lỗi` : '\nĐẠT');
  process.exit(tong ? 1 : 0);
}
