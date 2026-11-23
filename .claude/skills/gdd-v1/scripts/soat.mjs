#!/usr/bin/env node
// Soát định dạng GDD theo luật viết của phòng. Định nghĩa từng phép kiểm: ../references/soat-dinh-dang.md
// Chạy: node soat.mjs <file...> [--tu-vung <file>] [--loai he-thong|mini|sheet|du-lieu]
//       --loai du-lieu: tab dữ liệu (danh sách tile, mã ảnh, level data) như sheet nhưng không kiểm tên biến code
//       Không có --tu-vung thì tự tìm projects/<slug>/gdd/tu-vung.md theo đường dẫn file; thiếu thì CẢNH BÁO to, không im lặng.
//       node soat.mjs --project <slug>   (soát từ vựng mọi file md, tsv dưới projects/<slug>/, kể cả tham-chieu/; cổng ví dụ gắn data cho gdd/)
// Thoát mã 1 khi còn Lỗi.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { basename, extname, join, relative } from "node:path";

const args = process.argv.slice(2);
const files = [];
let tuVungPath = null;
let loaiArg = null;
let project = null;
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--tu-vung") tuVungPath = args[++i];
  else if (args[i] === "--loai") loaiArg = args[++i];
  else if (args[i] === "--project") project = args[++i];
  else if (args[i] === "--ca-qa") {}
  else files.push(args[i]);
}
if (!files.length && !project) {
  console.log("Cách dùng: node soat.mjs <file...> [--tu-vung <file>] [--loai he-thong|mini|sheet|du-lieu]\n           node soat.mjs --project <slug> [--tu-vung <file>]");
  process.exit(2);
}
const projectDir = project ? join("projects", project) : null;
if (project && !tuVungPath) tuVungPath = join(projectDir, "gdd", "tu-vung.md");

// ---------- từ vựng của Lead ----------
// Ô "Không dùng" là danh sách cách nhau bằng dấu phẩy. Từ đa nghĩa ghi kèm ngữ cảnh cấm:
//   khay [cùng câu: đầy/thua/7 ô]  -> chỉ báo khi "khay" đứng cùng câu với một trong các cụm đó.
let banned = []; // { w, ctx: [] }
let tuVungNote = "chưa có tu-vung, bỏ qua";
let thieuTuVung = null; // đường dẫn tu-vung.md đã tìm mà không có
const tuVungArg = tuVungPath;
const themTuCam = (s) => {
  const x = s.trim();
  if (!x || /^-$/.test(x)) return;
  const m = x.match(/^(.+?)\s*\[cùng câu:\s*(.+)\]$/iu);
  banned.push(m ? { w: m[1].trim(), ctx: m[2].split("/").map((c) => c.trim()).filter(Boolean) } : { w: x, ctx: [] });
};
function napTuVung(tuVungPath) {
  banned = [];
  thieuTuVung = null;
  if (!tuVungPath) { tuVungNote = "chưa có tu-vung, bỏ qua"; thieuTuVung = "projects/<slug>/gdd/tu-vung.md"; return; }
  if (!existsSync(tuVungPath)) {
    tuVungNote = `không thấy ${tuVungPath}`;
    thieuTuVung = tuVungPath;
  } else {
    const t = readFileSync(tuVungPath, "utf8");
    for (const line of t.split(/\r?\n/)) {
      const cells = line.split("|").map((c) => c.trim());
      // bảng: | Dùng | Không dùng | Ghi chú |
      if (cells.length >= 3 && cells[0] === "" && cells[1] && cells[2] && !/^-+$/.test(cells[2]) && !/^không dùng$/i.test(cells[2])) {
        for (const w of cells[2].split(/[,;](?![^\[]*\])/)) themTuCam(w);
      }
      const m = line.match(/^\s*không( dùng)?\s*:\s*(.+)$/i);
      if (m) for (const w of m[2].split(/[,;](?![^\[]*\])/)) themTuCam(w);
    }
    const seen = new Set();
    banned = banned.filter((b) => { const k = b.w + "|" + b.ctx.join("/"); if (seen.has(k)) return false; seen.add(k); return true; });
    tuVungNote = `${banned.length} từ cấm`;
  }
}
// File nằm trong projects/<slug>/ thì từ vựng là projects/<slug>/gdd/tu-vung.md
function timTuVung(file) {
  const m = file.replace(/\\/g, "/").match(/^(.*?projects\/[^/]+)\//);
  return m ? join(m[1], "gdd", "tu-vung.md") : null;
}
const CANH_BAO_TU_VUNG = (p) => `\n!!! CẢNH BÁO: không có ${p}. Chưa soát từ của Lead, "0 lỗi" dưới đây KHÔNG gồm kiểm từ vựng. Tạo tu-vung.md hoặc truyền --tu-vung <file>.\n`;
const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const coTu = (s, w) => new RegExp(`(?<![\\p{L}])${escRe(w)}(?![\\p{L}])`, "iu").test(s);
// Trả về từ cấm đầu tiên gặp trong dòng (bỏ phần trích nguyên văn trong ngoặc kép và backtick), hoặc null.
function tuCamTrongDong(line) {
  const s = line.replace(/`[^`]*`/g, " ").replace(/"[^"]*"/g, " ").replace(/“[^”]*”/g, " ");
  for (const b of banned) {
    if (!b.ctx.length) { if (coTu(s, b.w)) return b.w; continue; }
    for (const cau of s.split(/[.;!?]|\\n/)) if (coTu(cau, b.w) && b.ctx.some((c) => coTu(cau, c))) return `${b.w} (cùng câu với ${b.ctx.find((c) => coTu(cau, c))})`;
  }
  return null;
}
// Cổng "Ví dụ gắn data": dòng có mã level (L1, L28) đi cùng từ in hoa (từ trong word list) hoặc số quân. Data level đổi thì ví dụ sai âm thầm
// (game chữ 20/10/2026 lỗi G1: "L1 DOVE, BIRD, DOG = 11 quân" trong khi data V1 là CAT, BIRD, DOG = 10 quân).
const IN_HOA_OK = new Set(["GDD", "GDM", "QA", "IAP", "RNG", "FPS", "CTA", "NPC", "AND", "THE", "TSV", "CSV", "HTML", "JSON", "SFX", "VFX", "ART", "DEV", "FTUE", "KPI", "LEVEL", "DATA", "DIFFICULTY", "CURVE", "PNG", "API", "ADS", "MVP", "BOT", "NOTE", "TODO", "ID", "UI", "UX", "EN", "VN"]);
function ganData(line) {
  // đã ghi nguồn data ("theo `levels/level-v1.csv`") là cách sửa đúng, không báo
  if (/theo\s+`?[\w./-]*\.(csv|tsv|json)/iu.test(line)) return false;
  const s = line.replace(/`[^`]*`/g, " ");
  if (!/(?<![\p{L}\d])L\d{1,3}(?![\p{L}\d])/u.test(s)) return false;
  const inHoa = (s.match(/(?<![\p{L}\d])[A-Z]{3,}(?![\p{L}\d])/gu) || []).filter((w) => !IN_HOA_OK.has(w));
  // số quân từ 5 trở lên mới là số đếm theo data ("1 quân", "3 quân" là đơn vị luật)
  return inHoa.length > 0 || /(?<![\d,.])([5-9]|\d{2,})\s*quân(?![\p{L}])/u.test(s);
}

// ---------- tiện ích ----------
// Từ meta (sao, kỷ lục, quà...) không thuộc luật core win lose (Lead 05/11/2026). Ghép theo cả từ, bỏ "vì sao", "sao chép", "chương trình".
const RE_META = /(?<![p{L}])(sao|kỷ lục|phần thưởng|coin|quà|skin|khăn|chương)(?![p{L}])/iu;
const RE_META_BO = /(?<![p{L}])((tại|vì|làm|ngôi) sao|sao (chép|lưu|cho|vậy)|chương trình)(?![p{L}])/giu;
const coMeta = (s) => RE_META.test(s.replace(RE_META_BO, " "));
const RE_DASH = /[–—−]/g;
const RE_EMOJI = /[\p{Extended_Pictographic}️✓✔✅❌←-↓]/gu;
const RE_GIONG = /(làm giống|giống game|giống như game|như game|kiểu game|tương tự game|y như|giống hệt)/giu;
const RE_CAMEL = /(?<![\p{L}\d_$])[a-z][a-z0-9]*[A-Z][A-Za-z0-9]*(?![\p{L}\d_$])/gu;
const RE_SNAKE = /(?<![\p{L}\d$])[a-z][a-z0-9]*_[a-z0-9_]+(?![\p{L}\d$])/gu;
const RE_TICK = /`([^`]+)`/g;
const RE_MOHO = /(?<![\p{L}])(thường|có thể|khá|hầu như|tương đối|đôi khi|gần như|có lẽ)(?![\p{L}])/giu;
const RE_NEN = /(?<![,;]\s{0,2})(?<![\p{L}])nên(?![\p{L}])/iu; // "nên" sau dấu phẩy là liên từ, không mơ hồ
const CAMEL_OK = /^(i[A-Z][a-z]+|iOS|macOS|eSports|tvOS|watchOS)$/;
const RE_MOHO_EXC = /(quân thường|người thường|bình thường|thường xuyên|khác thường|tầm thường)/giu;
const RE_KHONGDAU = /(?<![\p{L}])(khong|duoc|nguoi|choi|luat|truoc|nhat)(?![\p{L}])/giu;
const RE_GIADINH = /\[GIẢ ĐỊNH\]/g;
const RE_DO_DUOC = /(\d|%|(?<![\p{L}])(thấy|không có|bằng|đúng|pass|ra)(?![\p{L}]))/iu;

function stripNumbersNotCounted(s) {
  return s
    .replace(/\b\d{1,2}\/\d{1,2}(\/\d{2,4})?\b/g, " ") // ngày
    .replace(/(?<![\p{L}])[A-Z]{1,3}\d+(?:-\d+)?(?![\p{L}])/gu, " ") // L16, TB1, V2, S3, L1-15
    .replace(/(mục|§)\s*\d+(\.\d+)*/giu, " ") // mục 3.2
    .replace(/\bv\d+(\.\d+)*/gi, " "); // v0.2
}
function countNumbers(s) {
  const m = stripNumbersNotCounted(s).match(/\d+([.,]\d+)?%?/g);
  return m ? m.length : 0;
}
function isIdentifier(s) {
  if (s.includes("/") || s.includes(" ")) return false; // đường dẫn, câu
  if (!/^[A-Za-z_$][\w$]*(\.\w+)*(\(\))?$/.test(s)) return false;
  return /[a-z][A-Z]/.test(s) || s.includes("_") || s.endsWith("()") || /\.(js|mjs|ts|cs|py)$/.test(s);
}
function pos(list) {
  if (!list.length) return "";
  const s = list.slice(0, 5).map((n) => `L${n}`).join(", ");
  return list.length > 5 ? `${s} +${list.length - 5}` : s;
}

// ---------- soát một file ----------
function soatFile(file) {
  const text = readFileSync(file, "utf8");
  const lines = text.split(/\r?\n/);
  const ext = extname(file).toLowerCase();
  const loai = loaiArg || (ext === ".tsv" ? "sheet" : /mini/i.test(basename(file)) ? "mini" : "he-thong");
  const isSheet = loai === "sheet" || loai === "du-lieu";
  const isDuLieu = loai === "du-lieu";
  const hdr0 = (lines[0] || "").split("\t").map((x) => x.trim());
  const laMainTask = loai === "sheet" && hdr0.includes("Hạng mục");
  const laGameplay = loai === "sheet" && (/gameplay/i.test(basename(file)) || (hdr0.includes("Mục") && hdr0.includes("Mô tả")));

  const R = {
    dash: [], emoji: [], giong: [], code: [], soVanXuoi: [], tuVung: [], luatChuaSo: [], moHo: [],
    bien: [], nghiemThu: [], chamPhay: [], khongDau: [], giaDinh: [], mucTrong: [], duongDan: [], ganData: [], qua5: [], boDem: [], nhan: [], meta: [], metaMT: [], scope3: [], tienTo: {},
  };
  let bienCount = 0, bienPhanQuyetTrong = 0, coMucBien = false, coMucNghiemThu = false;

  // cột File trong TSV
  let fileCol = -1;
  if (isSheet && lines.length) {
    const hdr = lines[0].split("\t");
    fileCol = hdr.findIndex((h) => /^file$/i.test(h.trim()));
  }

  let inCode = false;
  let section = "";
  let secLevel = 0;
  let sectionLineStart = 0;
  let sectionHasContent = false;
  let sectionIsExempt = false; // engineer, tool, kỹ thuật, level data, lịch sử
  let sectionIsLuat = false;
  let sectionIsBien = false;
  let sectionIsNghiemThu = false;
  let tableHeaderSeen = false;

  const closeSection = (newLevel) => {
    // mục cha có mục con thì không tính là trống
    if (section && !sectionHasContent && !isSheet && !(newLevel > secLevel)) R.mucTrong.push(sectionLineStart);
    if (sectionIsBien) coMucBien = true;
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const n = i + 1;
    const line = raw.trimEnd();
    if (/^\s*```/.test(line)) { inCode = !inCode; continue; }
    if (inCode) continue;

    // tiêu đề mục (markdown)
    const h = !isSheet && line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      closeSection(h[1].length);
      section = h[2];
      secLevel = h[1].length;
      sectionLineStart = n;
      sectionHasContent = false;
      sectionIsExempt = /engineer|tool|kỹ thuật|level data|lịch sử/iu.test(section);
      sectionIsLuat = /^(\d+(\.\d+)*\.?\s*)?luật/iu.test(section);
      sectionIsBien = /biên|edge case/iu.test(section);
      sectionIsNghiemThu = /nghiệm thu|acceptance/iu.test(section);
      if (sectionIsNghiemThu) coMucNghiemThu = true;
      tableHeaderSeen = false;
      // tiêu đề cũng soát ký tự
      if (RE_DASH.test(line)) R.dash.push(n);
      RE_DASH.lastIndex = 0;
      if (RE_EMOJI.test(line)) R.emoji.push(n);
      RE_EMOJI.lastIndex = 0;
      continue;
    }

    const trimmed = line.trim();
    const isBlank = trimmed === "";
    const isPlaceholder = /^(\.\.\.|<[^>]*>|\[chưa có\]|(-|\d+\.)\s*(\.\.\.|<[^>]*>)?)$/u.test(trimmed);
    if (!isBlank && !isPlaceholder) sectionHasContent = true;
    if (isBlank) continue;

    const isTable = !isSheet && trimmed.startsWith("|");
    const isSep = isTable && /^\|?\s*:?-{2,}/.test(trimmed);
    const isNumbered = /^\d+\.\s/.test(trimmed);
    const isBullet = /^[-*+]\s/.test(trimmed);
    const isMeta = /^(project|phiên bản|nguồn|cập nhật|trạng thái)\s*:/iu.test(trimmed) || (trimmed.includes("|") && !isTable);

    // 1. gạch dài, gạch ngắn
    if (RE_DASH.test(line)) R.dash.push(n);
    RE_DASH.lastIndex = 0;
    // 2. emoji
    if (RE_EMOJI.test(line)) R.emoji.push(n);
    RE_EMOJI.lastIndex = 0;
    // 2b. dấu chấm phẩy (Lead 04/11/2026: "không dùng kí tự ; nó AI quá")
    if (line.replace(/https?:\/\/\S+/g, " ").includes(";")) R.chamPhay.push(n);
    // 3. giống game X
    if (RE_GIONG.test(line)) R.giong.push(n);
    RE_GIONG.lastIndex = 0;
    // 4. tên biến code
    if (!sectionIsExempt && !isDuLieu) {
      let scan = line;
      if (isSheet && fileCol >= 0) {
        const cells = line.split("\t");
        if (cells[fileCol] !== undefined) { cells[fileCol] = ""; scan = cells.join("\t"); }
      }
      // link URL và chuỗi xuống dòng "\n" trong ô TSV không phải tên biến (báo nhầm ở game chữ 20/10/2026)
      scan = scan.replace(/https?:\/\/\S+/g, " ");
      if (isSheet) scan = scan.replace(/\\n/g, " ");
      let hit = false;
      let m;
      while ((m = RE_TICK.exec(scan))) if (isIdentifier(m[1])) hit = true;
      RE_TICK.lastIndex = 0;
      const noTick = scan.replace(RE_TICK, " ");
      const camels = (noTick.match(RE_CAMEL) || []).filter((w) => !CAMEL_OK.test(w));
      if (camels.length || RE_SNAKE.test(noTick)) hit = true;
      RE_SNAKE.lastIndex = 0;
      if (hit) R.code.push(n);
    }
    // 5. số trong văn xuôi
    if (!isSheet && !isTable && !isNumbered && !isBullet && !isMeta && !/^\s/.test(raw)) {
      if (countNumbers(line) >= 2) R.soVanXuoi.push(n);
    }
    // 6. từ của Lead
    if (banned.length && !sectionIsExempt && tuCamTrongDong(line)) R.tuVung.push(n);
    // 6b. ví dụ gắn data level
    if (!sectionIsExempt && ganData(line)) R.ganData.push(n);
    // 7, 8. luật
    if (sectionIsLuat && !isSheet) {
      if (isBullet) R.luatChuaSo.push(n);
      if (isNumbered) {
        const cleaned = line.replace(RE_MOHO_EXC, " ");
        if (RE_MOHO.test(cleaned) || RE_NEN.test(cleaned)) R.moHo.push(n);
        RE_MOHO.lastIndex = 0;
      }
    }
    // 9. biên
    if (sectionIsBien && !isSheet) {
      if (isTable) {
        if (isSep) { tableHeaderSeen = true; }
        else if (tableHeaderSeen) {
          bienCount++;
          const cells = trimmed.replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
          if (cells.length >= 2 && cells[1] === "") { bienPhanQuyetTrong++; R.bien.push(n); }
        }
      } else if (isNumbered || isBullet) bienCount++;
    }
    // 10. nghiệm thu đo được
    if (sectionIsNghiemThu && !isSheet && (isNumbered || isBullet)) {
      if (!RE_DO_DUOC.test(line)) R.nghiemThu.push(n);
    }
    // 10b. tab Sheet cho Dev/Art không trỏ đường dẫn file trong repo của phòng (game chữ 20/10/2026: lặp ở Main Task và Tutorials)
    if (isSheet && /(?:^|[\s(:"])(?:projects|gdd|levels|tham-chieu|ux|qa|economy|do-kho|briefs)\/[\w.\/-]*\.(?:md|csv|tsv|py|mjs|html)\b/u.test(line)) R.duongDan.push(n);
    // 10c. ô Main Task tối đa 5 dòng (Lead 04/11/2026, DECISIONS sản phẩm)
    if (laMainTask && n > 1 && line.split("\t").some((c) => c.split("\\n").length > 5)) R.qua5.push(n);
    // 10g. Main Task gộp task, scope ngắn, chỉ core win lose (Lead 05/11/2026, production/DECISIONS.md)
    if (laMainTask && n > 1) {
      const c = line.split("\t");
      const hm = (c[hdr0.indexOf("Hạng mục")] || "").trim();
      const tien = hm.match(/^([^:]{2,40}):\s/u);
      if (tien) (R.tienTo[tien[1].trim()] ||= []).push(n);
      if (coMeta(line)) R.metaMT.push(n);
      if (((c[hdr0.indexOf("Scope")] || "").split("\\n").filter((y) => y.trim()).length) > 3) R.scope3.push(n);
    }
    // 10d. Gameplay viết cho Game Designer đọc (Lead 04/11/2026): không bộ đếm "x/6", "số ... / tổng", công thức "a = b x c"
    if (laGameplay && n > 1) {
      const s = line.replace(/https?:\/\/\S+/g, " ").replace(/\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/g, " ");
      if (/(?<![\p{L}\d/])(\d+|[a-z])\s*\/\s*\d+(?![\d/])/u.test(s) || /(?<![\p{L}])số\s[^.\\]{0,40}?\/\s*tổng/iu.test(s) ||
          /=\s*[^=\\]{1,30}?\s[x×*]\s+\S/u.test(s) || /(?<![\p{L}])(bộ đếm|trần)(?![\p{L}])/iu.test(s)) R.boDem.push(n);
      // 10e. ý mở đầu bằng nhãn ngắn kiểu tên hàm rồi ":" ("- Ghép lại: ...", "- Chọn liền tay: ..."): Lead viết lại thành câu luật (05/11/2026)
      const moTa = line.split("\t")[hdr0.indexOf("Mô tả")] ?? line.split("\t").pop();
      const muc = (line.split("\t")[hdr0.indexOf("Mục")] || "").trim();
      // mục Mechanic định nghĩa thuật ngữ "Lock: ..." là đúng khuôn, không kiểm
      if (!/mechanic/iu.test(muc) && moTa.split("\\n").some((y) => /^\s*[-+]\s*[\p{L} ]{2,25}:\s/u.test(y) && y.trim().replace(/^[-+]\s*/, "").split(":")[0].trim().split(/\s+/).length <= 4)) R.nhan.push(n);
      // 10f. ô Win, Lose chỉ nói điều kiện thắng thua, không meta (sao, kỷ lục, phần thưởng, coin, khăn) (Lead 05/11/2026)
      if (/^(win|lose|thắng|thua)$/iu.test(muc) && coMeta(s)) R.meta.push(n);
    }
    // 11. không dấu
    if (RE_KHONGDAU.test(line)) R.khongDau.push(n);
    RE_KHONGDAU.lastIndex = 0;
    // 12. giả định
    const g = line.match(RE_GIADINH);
    if (g) for (let k = 0; k < g.length; k++) R.giaDinh.push(n);
  }
  closeSection(0);

  const structural = loai === "he-thong" || loai === "mini";
  const rows = [];
  let loi = 0, canhBao = 0;
  const add = (ten, list, muc, extra) => {
    const c = list.length;
    let kq = c === 0 ? "0" : `${c} ${muc}`;
    if (extra) kq = extra;
    rows.push([ten, kq, pos(list)]);
    if (c && muc === "lỗi") loi += c;
    if (c && muc === "cảnh báo") canhBao += c;
  };
  add("Gạch dài, gạch ngắn", R.dash, "lỗi");
  add("Emoji, ký tự trang trí", R.emoji, "lỗi");
  add("Dấu chấm phẩy", R.chamPhay, "lỗi");
  add("Giống game X", R.giong, "lỗi");
  if (!isDuLieu) add("Tên biến code", R.code, "lỗi");
  if (!isSheet) add("Số trong văn xuôi", R.soVanXuoi, "lỗi");
  if (banned.length) add("Từ không phải từ của Lead", R.tuVung, "lỗi");
  else rows.push(["Từ không phải từ của Lead", tuVungNote + (thieuTuVung ? " (1 cảnh báo)" : ""), ""]);
  if (!isSheet) {
    add("Luật chưa đánh số", R.luatChuaSo, "lỗi");
    add("Từ mơ hồ trong luật", R.moHo, "lỗi");
  }
  if (structural) {
    if (!coMucBien) { rows.push(["Trường hợp biên", "1 lỗi: thiếu mục", ""]); loi++; }
    else if (bienCount < 4) { rows.push(["Trường hợp biên", `1 lỗi: ${bienCount} ca, cần 4`, ""]); loi++; }
    else if (bienPhanQuyetTrong) { rows.push(["Trường hợp biên", `${bienPhanQuyetTrong} lỗi: ca không có phán quyết`, pos(R.bien)]); loi += bienPhanQuyetTrong; }
    else rows.push(["Trường hợp biên", `0 (${bienCount} ca)`, ""]);
    if (!coMucNghiemThu) { rows.push(["Tiêu chí nghiệm thu", "1 lỗi: thiếu mục", ""]); loi++; }
    else add("Tiêu chí nghiệm thu không đo được", R.nghiemThu, "cảnh báo");
  }
  if (isSheet) add("Đường dẫn file repo trong Sheet", R.duongDan, "lỗi");
  if (laMainTask) add("Ô Main Task quá 5 dòng", R.qua5, "lỗi");
  if (laMainTask) {
    const gop = Object.entries(R.tienTo).filter(([, ds]) => ds.length >= 3);
    rows.push(["Hạng mục cùng tiền tố, nên gộp (từ 3 dòng \"X: ...\")", gop.length ? `${gop.length} cảnh báo: ${gop.map(([t, ds]) => `${t} (${ds.length} dòng)`).join(", ")}` : "0", pos(gop.flatMap(([, ds]) => ds))]);
    canhBao += gop.length;
    add("Meta trong Main Task (sao, kỷ lục, quà, skin, khăn, chương, coin, phần thưởng)", R.metaMT, "cảnh báo");
    add("Ô Scope quá 3 ý", R.scope3, "cảnh báo");
  }
  if (laGameplay) add("Bộ đếm, công thức trong Gameplay (x/N, số ... / tổng, a = b x c)", R.boDem, "cảnh báo");
  if (laGameplay) add("Ý mở đầu bằng nhãn ngắn rồi dấu hai chấm (\"- Ghép lại: ...\")", R.nhan, "cảnh báo");
  if (laGameplay) add("Meta trong ô Win, Lose (sao, kỷ lục, phần thưởng, coin, quà, skin, khăn, chương)", R.meta, "cảnh báo");
  if (isDuLieu) rows.push(["Tên biến code", "bỏ qua (--loai du-lieu)", ""]);
  if (thieuTuVung) canhBao++;
  add("Ví dụ gắn data level (mã level + từ in hoa hoặc số quân)", R.ganData, "cảnh báo");
  add("Tiếng Việt không dấu", R.khongDau, "cảnh báo");
  if (!isSheet) add("Mục trống", R.mucTrong, "cảnh báo");
  rows.push(["[GIẢ ĐỊNH]", `${R.giaDinh.length}`, pos([...new Set(R.giaDinh)])]);

  let out = `### ${file} (loại ${loai})\n${thieuTuVung ? CANH_BAO_TU_VUNG(thieuTuVung) : ""}\n| Kiểm | Kết quả | Vị trí |\n|---|---|---|\n`;
  for (const r of rows) out += `| ${r[0]} | ${r[1]} | ${r[2]} |\n`;
  out += `\nLỗi: ${loi}. Cảnh báo: ${canhBao}. [GIẢ ĐỊNH]: ${R.giaDinh.length}.\n`;
  return { out, loi, canhBao, giaDinh: R.giaDinh.length };
}

// ---------- chế độ project: quét từ vựng mọi file md, tsv; cổng ví dụ gắn data cho gdd/ ----------
if (project) {
  if (!existsSync(projectDir)) { console.log(`Không thấy ${projectDir}`); process.exit(2); }
  napTuVung(tuVungPath);
  if (thieuTuVung) console.log(CANH_BAO_TU_VUNG(thieuTuVung));
  // qa/ là biên bản chấm, trích lại từ sai để mô tả lỗi; thêm --ca-qa nếu muốn quét cả thư mục đó
  const BO_QUA_DIR = new Set(["tmp", "node_modules", "v0.5-goc", ".git", ...(args.includes("--ca-qa") ? [] : ["qa"])]);
  const ds = [];
  const walk = (d) => {
    for (const f of readdirSync(d)) {
      const p = join(d, f);
      if (statSync(p).isDirectory()) { if (!BO_QUA_DIR.has(f)) walk(p); continue; }
      if (![".md", ".tsv"].includes(extname(f).toLowerCase())) continue;
      if (/nguyen-van/i.test(f) || p === tuVungPath || join(p) === join(tuVungPath)) continue; // nguyên văn nguồn ngoài và chính bảng từ vựng
      ds.push(p);
    }
  };
  walk(projectDir);
  const tuVung = [], gan = [];
  const ngan = (s) => { s = s.trim().replace(/\|/g, "/"); return s.length > 90 ? s.slice(0, 87) + "..." : s; };
  for (const f of ds) {
    const laGdd = relative(projectDir, f).split(/[\\/]/)[0] === "gdd";
    let inCode = false;
    readFileSync(f, "utf8").split(/\r?\n/).forEach((line, i) => {
      if (/^\s*```/.test(line)) { inCode = !inCode; return; }
      if (inCode) return;
      const w = banned.length ? tuCamTrongDong(line) : null;
      if (w) tuVung.push(`| ${relative(projectDir, f).replace(/\\/g, "/")}:${i + 1} | ${w} | ${ngan(line)} |`);
      if (laGdd && ganData(line)) gan.push(`| ${relative(projectDir, f).replace(/\\/g, "/")}:${i + 1} | ${ngan(line)} |`);
    });
  }
  console.log(`### Soát project ${project}: ${ds.length} file md, tsv; từ vựng ${tuVungNote} (${tuVungPath})\n`);
  console.log(`Từ không phải từ của Lead (lỗi): ${tuVung.length}`);
  if (tuVung.length) console.log(`\n| File:dòng | Từ | Dòng |\n|---|---|---|\n${tuVung.join("\n")}`);
  console.log(`\nVí dụ gắn data level trong gdd/ (cảnh báo, sửa thành ví dụ không gắn level hoặc ghi "theo <file data> ngày ..."): ${gan.length}`);
  if (gan.length) console.log(`\n| File:dòng | Dòng |\n|---|---|\n${gan.join("\n")}`);
  console.log(`\nTổng: Lỗi ${tuVung.length}. Cảnh báo ${gan.length + (thieuTuVung ? 1 : 0)}.`);
  process.exit(tuVung.length ? 1 : 0);
}

let totalLoi = 0, totalCanhBao = 0, totalGD = 0;
for (const f of files) {
  if (!existsSync(f)) { console.log(`Không thấy file: ${f}`); totalLoi++; continue; }
  napTuVung(tuVungArg || timTuVung(f));
  const r = soatFile(f);
  console.log(r.out);
  totalLoi += r.loi; totalCanhBao += r.canhBao; totalGD += r.giaDinh;
}
if (files.length > 1) console.log(`Tổng: Lỗi ${totalLoi}. Cảnh báo ${totalCanhBao}. [GIẢ ĐỊNH] ${totalGD}.`);
process.exit(totalLoi ? 1 : 0);
