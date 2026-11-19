#!/usr/bin/env node
// gd-department: cài, cập nhật, kiểm phòng Game Designer từ gói khung (assets/khung + assets/manifest.json).
// Gói sinh bằng tools/sinh-khung-phong.mjs ở repo nguồn (mặc định ra dist/gd-department/).
//
//   node setup.mjs cai      --dich <thư mục> --tra-loi <json> [--ghi]   mặc định chạy thử, --ghi mới ghi
//   node setup.mjs cap-nhat --dich <thư mục> [--tra-loi <json>] [--ghi]
//   node setup.mjs kiem     --dich <thư mục>                            thoát 1 khi một dòng HỎNG
//   node setup.mjs mo-vai <vai> --dich <thư mục>                        bật agent vai đang để dành
//   Tùy chọn chung: --khung <gói>  (mặc định: thư mục cha của scripts/)
//
// Luật cập nhật: so 3 bên bằng sha256 (bản lúc cài, bản trên đĩa, bản mới). Người dùng chưa sửa thì thay (backup trước),
// đã sửa thì ghi bản mới ra <file>.moi, không đè. Không bao giờ đụng projects/, production/, DECISIONS, BACKLOG.
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import os from "node:os";
import { sha, duyet, laVanBan, RO_CHUNG, RE_BIEN, soi, frontmatter, docJson, ghiJson } from "./chung.mjs";

if (+process.versions.node.split(".")[0] < 18) {
  console.log(`Cần Node 18 trở lên, máy đang có ${process.version}. Chưa ghi file nào.`);
  process.exit(2);
}
const a = process.argv.slice(2);
const lenh = a[0];
const lay = (k, md) => (a.includes(k) ? a[a.indexOf(k) + 1] : md);
const DICH = path.resolve(lay("--dich", process.cwd()));
const GOI = path.resolve(lay("--khung", path.join(path.dirname(fileURLToPath(import.meta.url)), "..")));
const GHI = a.includes("--ghi");
const TRANG_THAI = path.join(DICH, ".gd-department");
const DA_CAI = path.join(TRANG_THAI, "da-cai.json");

const docManifest = () => {
  const p = path.join(GOI, "assets/manifest.json");
  if (!fs.existsSync(p)) {
    console.log(`Không thấy gói khung ở ${GOI} (cần assets/manifest.json). Ở repo nguồn chạy: node tools/sinh-khung-phong.mjs, rồi dùng dist/gd-department/scripts/setup.mjs.`);
    process.exit(2);
  }
  return docJson(p);
};
const daDu = (tl) => /^(đủ|du|đầy đủ|day du|8|full)/i.test(String(tl.BO_VAI || "").trim());
const vungNguoiDung = (p) => p.startsWith("projects/") || p.startsWith("production/") || /(^|\/)(DECISIONS|BACKLOG)\.md$/.test(p);
const laAgentDeDanh = (p, man, tl) => {
  const m = p.match(/^\.claude\/agents\/([^/_][^/]*)\.md$/);
  return m && !man.vai_gon.includes(m[1]) && !daDu(tl) ? `.gd-department/vai-them/${m[1]}.md` : null;
};

function kiemTraLoi(man, tl) {
  const loi = [];
  for (const b of man.bien) {
    const v = tl[b];
    if (typeof v !== "string" || !v.trim()) loi.push(`thiếu ${b}`);
    else if (/[|\r\n]|\{\{/.test(v)) loi.push(`${b} có ký tự không được dùng (| xuống dòng {{)`);
  }
  if (loi.length) {
    console.log("Câu trả lời chưa đủ, chưa ghi file nào:\n  " + loi.join("\n  "));
    process.exit(1);
  }
}
const dien = (buf, tl) => Buffer.from(buf.toString("utf8").replace(RE_BIEN, (m) => tl[m.slice(2, -2)]));

// Lập kế hoạch ghi cho mọi file trong manifest
function keHoach(man, daCai, tl, laCai) {
  const kh = [];
  for (const [p, info] of Object.entries(man.files)) {
    if (info.loai === "khoi_tao") {
      if (laCai && !fs.existsSync(path.join(DICH, p))) kh.push({ p, vt: p, viec: "them", buf: fs.readFileSync(path.join(GOI, "assets/khung", info.nguon)), info });
      else kh.push({ p, vt: p, viec: "vung_nd", info });
      continue;
    }
    if (!laCai && vungNguoiDung(p)) { kh.push({ p, vt: p, viec: "vung_nd", info }); continue; }
    const vt = daCai.vi_tri?.[p] || (daCai.files?.[p] ? p : laAgentDeDanh(p, man, tl) || p);
    let buf = fs.readFileSync(path.join(GOI, "assets/khung", info.nguon));
    if (info.loai === "mau") buf = dien(buf, tl);
    const moi = sha(buf);
    const goc = daCai.files?.[p];
    const q = path.join(DICH, vt);
    const dia = fs.existsSync(q) ? sha(fs.readFileSync(q)) : null;
    let viec;
    if (dia === null) viec = goc ? "nguoi_dung_xoa" : "them";
    else if (dia === moi) viec = "giu";
    else if (goc && dia === goc) viec = "thay";
    else viec = fs.existsSync(q + ".moi") && sha(fs.readFileSync(q + ".moi")) === moi ? "moi_da_co" : "moi";
    kh.push({ p, vt, viec, buf, moi, info });
  }
  return kh;
}

function thucHien(man, daCai, tl, laCai) {
  const kh = keHoach(man, daCai, tl, laCai);
  const bo = Object.keys(daCai.files || {}).filter((p) => !man.files[p]);
  const dem = (v) => kh.filter((x) => x.viec === v);
  console.log(`| ${laCai ? "Cài" : "Cập nhật"} ${GHI ? "(GHI THẬT)" : "(chạy thử, chưa ghi; thêm --ghi để ghi)"} | ${DICH} |\n|---|---|`);
  console.log(`| Gói | ${man.phien_ban}, ${man.so_agent} agent, ${man.so_skill} skill |`);
  for (const [v, ten] of [["them", "Thêm mới"], ["thay", "Thay (người dùng chưa sửa, có backup)"], ["moi", "Người dùng đã sửa: ghi bản mới ra .moi, không đè"],
    ["moi_da_co", "Đã có .moi giống bản mới"], ["giu", "Không đổi"], ["nguoi_dung_xoa", "Người dùng đã xóa, không ghi lại"], ["vung_nd", "Vùng người dùng, không đụng"]])
    console.log(`| ${ten} | ${dem(v).length} |`);
  console.log(`| Khung đã bỏ (chỉ báo, không xóa) | ${bo.length} |`);
  for (const v of ["thay", "moi", "nguoi_dung_xoa"]) for (const x of dem(v)) console.log(`  ${v}: ${x.vt}${v === "moi" ? ".moi" : ""}`);
  for (const p of bo) console.log(`  khung bỏ: ${p}`);
  if (laCai) console.log(`| Agent để dành (bật bằng mo-vai) | ${kh.filter((x) => x.vt.startsWith(".gd-department/vai-them/")).map((x) => path.basename(x.vt, ".md")).join(", ") || "không"} |`);
  if (!GHI) return;

  const ts = new Date().toISOString().replace(/[-:]/g, "").replace("T", "-").slice(0, 15);
  const ghi = (q, buf) => { fs.mkdirSync(path.dirname(q), { recursive: true }); fs.writeFileSync(q, buf); };
  const moiDaCai = { ...daCai, phien_ban: man.phien_ban, tra_loi: tl, files: { ...(daCai.files || {}) }, vi_tri: { ...(daCai.vi_tri || {}) } };
  for (const x of kh) {
    if (["them", "thay", "giu"].includes(x.viec) && x.info.loai !== "khoi_tao") moiDaCai.files[x.p] = x.moi;
    if (x.vt !== x.p && x.info.loai !== "khoi_tao") moiDaCai.vi_tri[x.p] = x.vt;
  }
  const boNgay = ({ ngay_cai, ngay_cap_nhat, ...x }) => JSON.stringify(x);
  if (!laCai && !kh.some((x) => ["them", "thay", "moi"].includes(x.viec)) && boNgay(moiDaCai) === boNgay(daCai)) {
    console.log("| Đã ghi | không có gì đổi, không ghi file nào |");
    return;
  }
  if (laCai) moiDaCai.ngay_cai = new Date().toISOString();
  else moiDaCai.ngay_cap_nhat = new Date().toISOString();
  for (const x of kh) {
    const q = path.join(DICH, x.vt);
    if (x.viec === "thay") {
      ghi(path.join(TRANG_THAI, "backup", ts, x.vt), fs.readFileSync(q));
      ghi(q, x.buf);
    } else if (x.viec === "them") ghi(q, x.buf);
    else if (x.viec === "moi") ghi(q + ".moi", x.buf);
  }
  ghiJson(DA_CAI, moiDaCai);
  fs.copyFileSync(path.join(GOI, "assets/manifest.json"), path.join(TRANG_THAI, "manifest.json"));
  if (dem("thay").length) console.log(`| Backup | .gd-department/backup/${ts}/ |`);
  console.log("| Đã ghi | xong |");
}

function cai() {
  const man = docManifest();
  if (fs.existsSync(DA_CAI)) { console.log("Thư mục đã cài phòng (có .gd-department/da-cai.json). Dùng lệnh cap-nhat."); process.exit(1); }
  const p = lay("--tra-loi");
  if (!p) { console.log("Thiếu --tra-loi <json> (khóa là tên biến: " + man.bien.join(", ") + ")."); process.exit(1); }
  const tl = docJson(path.resolve(p));
  kiemTraLoi(man, tl);
  thucHien(man, {}, tl, true);
}

function capNhat() {
  const man = docManifest();
  if (!fs.existsSync(DA_CAI)) { console.log("Thư mục chưa cài phòng bằng gd-department (thiếu .gd-department/da-cai.json). Dùng lệnh cai."); process.exit(1); }
  const daCai = docJson(DA_CAI);
  const tl = { ...daCai.tra_loi, ...(lay("--tra-loi") ? docJson(path.resolve(lay("--tra-loi"))) : {}) };
  kiemTraLoi(man, tl);
  thucHien(man, daCai, tl, false);
}

function moVai() {
  const vai = (a[1] || "").startsWith("gd-") ? a[1] : `gd-${a[1] || ""}`;
  if (!fs.existsSync(DA_CAI)) { console.log("Thư mục chưa cài phòng."); process.exit(1); }
  const daCai = docJson(DA_CAI);
  const p = `.claude/agents/${vai}.md`;
  const dich = path.join(DICH, p);
  if (!daCai.files?.[p] && !fs.existsSync(dich)) {
    const co = Object.keys(daCai.files || {}).filter((x) => /^\.claude\/agents\/[^_]/.test(x)).map((x) => path.basename(x, ".md"));
    console.log(`Không có vai ${vai}. Vai có: ${co.join(", ")}`);
    process.exit(1);
  }
  if (daCai.vi_tri?.[p]) {
    fs.mkdirSync(path.dirname(dich), { recursive: true });
    fs.renameSync(path.join(DICH, daCai.vi_tri[p]), dich);
    delete daCai.vi_tri[p];
    ghiJson(DA_CAI, daCai);
    console.log(`Đã bật agent ${vai}: ${p}`);
  } else console.log(`Agent ${vai} đã có: ${p}`);
  console.log(`Agent chỉ nạp ở phiên mở sau khi bật. Mở phiên mới tên ${vai} trong ${DICH}, hoặc GDM gọi Agent với subagent_type ${vai}. Không mở phiên khi chưa có việc cho vai này.`);
}

// ---------- kiem ----------
function timPython() {
  for (const c of [process.env.GD_PYTHON, "python3", "python", "py"].filter(Boolean)) {
    const r = spawnSync(c, ["-c", "import sys;print(sys.version_info[0])"], { encoding: "utf8" });
    if (r.status === 0 && r.stdout.trim() === "3") return c;
  }
  return null;
}

function kiem() {
  const hang = [];
  const them = (ten, dat, kq) => hang.push({ ten, dat, kq });
  them("Node 18 trở lên", true, process.version);
  if (!fs.existsSync(DA_CAI)) { them("Đã cài bằng gd-department", false, "thiếu .gd-department/da-cai.json"); return inKiem(hang); }
  const daCai = docJson(DA_CAI);
  const man = docJson(fs.existsSync(path.join(TRANG_THAI, "manifest.json")) ? path.join(TRANG_THAI, "manifest.json") : path.join(GOI, "assets/manifest.json"));
  const vt = (p) => daCai.vi_tri?.[p] || p;

  // Khung khớp manifest: file khung chưa sửa phải trùng sha đã qua cổng rò rỉ lúc sinh
  let khop = 0, sua = [], thieu = [], lech = [];
  for (const [p, s] of Object.entries(daCai.files)) {
    const q = path.join(DICH, vt(p));
    if (!fs.existsSync(q)) { thieu.push(vt(p)); continue; }
    if (sha(fs.readFileSync(q)) !== s) { sua.push(vt(p)); continue; }
    if (man.files[p]?.loai === "khung" && man.files[p].sha256 !== s) lech.push(p);
    else khop++;
  }
  them("File khung có mặt", !thieu.length, `${Object.keys(daCai.files).length - thieu.length}/${Object.keys(daCai.files).length}${thieu.length ? ", thiếu: " + thieu.slice(0, 5).join(", ") : ""}`);
  them("File khung trùng sha manifest (đã qua cổng rò rỉ)", !lech.length, `${khop} khớp, người dùng sửa ${sua.length}${lech.length ? ", lệch manifest: " + lech.slice(0, 5).join(", ") : ""}`);

  // Agent theo đĩa
  const agentCan = man.agents.filter((n) => !daCai.vi_tri?.[`.claude/agents/${n}.md`]);
  const agentDia = duyet(DICH, ".claude/agents").filter((p) => /\.md$/.test(p) && !path.basename(p).startsWith("_"));
  const thieuA = agentCan.filter((n) => !fs.existsSync(path.join(DICH, `.claude/agents/${n}.md`)));
  const fmA = agentDia.filter((p) => {
    const f = frontmatter(fs.readFileSync(path.join(DICH, p), "utf8"));
    return !f || f.name !== path.basename(p, ".md") || !f.description || !/^(opus|sonnet|haiku|inherit|claude-[\w.-]+)$/.test(f.model || "");
  });
  them("Agent theo đĩa", !thieuA.length, `${agentDia.length} trên đĩa, cần ${agentCan.length}, để dành ${man.agents.length - agentCan.length}${thieuA.length ? ", thiếu: " + thieuA.join(", ") : ""}`);
  them("Frontmatter agent (name trùng file, description, model)", !fmA.length, `${fmA.length} lệch${fmA.length ? ": " + fmA.join(", ") : ""}`);

  // Skill theo đĩa
  const skillDia = duyet(DICH, ".claude/skills").filter((p) => /^\.claude\/skills\/[^/]+\/SKILL\.md$/.test(p));
  const thieuS = man.skills.filter((s) => !fs.existsSync(path.join(DICH, `.claude/skills/${s}/SKILL.md`)));
  const fmS = skillDia.filter((p) => (frontmatter(fs.readFileSync(path.join(DICH, p), "utf8")) || {}).name !== p.split("/")[2]);
  them("Skill theo đĩa", !thieuS.length, `${skillDia.length} trên đĩa, manifest ${man.so_skill}${thieuS.length ? ", thiếu: " + thieuS.join(", ") : ""}`);
  them("Frontmatter skill (name trùng thư mục)", !fmS.length, `${fmS.length} lệch${fmS.length ? ": " + fmS.join(", ") : ""}`);

  // Rò rỉ và biến còn sót trong file của phòng (bỏ file mẫu: hồ sơ chứa câu trả lời của người dùng)
  const ro = [], bien = [];
  for (const p of Object.keys(daCai.files)) {
    const q = path.join(DICH, vt(p));
    if (!fs.existsSync(q)) continue;
    const buf = fs.readFileSync(q);
    if (!laVanBan(buf)) continue;
    const t = buf.toString("utf8");
    if (man.files[p]?.loai !== "mau") for (const v of soi(t, RO_CHUNG)) ro.push(`${vt(p)}:${v.dong} [${v.loai}]`);
    if (RE_BIEN.test(t)) bien.push(vt(p));
    RE_BIEN.lastIndex = 0;
  }
  them("Không rò đường dẫn máy, link Sheet, email", !ro.length, `${ro.length} dòng${ro.length ? ": " + ro.slice(0, 5).join(", ") : ""}`);
  them("Không còn biến {{...}} chưa điền", !bien.length, `${bien.length} file${bien.length ? ": " + bien.join(", ") : ""}`);
  them("Hồ sơ Lead", fs.existsSync(path.join(DICH, "docs/org/ho-so-lead.md")), "docs/org/ho-so-lead.md");
  const pj = fs.existsSync(path.join(DICH, "projects")) ? fs.readdirSync(path.join(DICH, "projects")) : [];
  them("projects/_template", pj.includes("_template"), `projects/: ${pj.join(", ") || "rỗng"}`);

  // Selftest các skill (trừ gd-department: selftest của nó cần repo nguồn)
  const py = timPython();
  const chay = (lenh_, args) => spawnSync(lenh_, args, { cwd: DICH, encoding: "utf8", timeout: 300000, env: { ...process.env, PYTHONUTF8: "1" } });
  const tests = [];
  for (const p of duyet(DICH, ".claude/skills")) {
    if (p.startsWith(".claude/skills/gd-department/") || !/\.(mjs|py)$/.test(p)) continue;
    const ten = path.basename(p);
    if (/^selftest\.(mjs|py)$|-selftest\.mjs$/.test(ten)) tests.push([p, []]);
    // script nhận cờ --selftest: khai báo cờ trong code hoặc ghi cách chạy "<tên> --selftest" ở đầu file
    else if (/\/scripts\/[^/]+$/.test(p) && new RegExp(`"--selftest"|'--selftest'|${ten.replace(".", "\\.")} --selftest`).test(fs.readFileSync(path.join(DICH, p), "utf8"))) tests.push([p, ["--selftest"]]);
  }
  for (const [p, args] of tests) {
    if (p.endsWith(".py") && !py) { them(`Selftest ${p}`, null, "BỎ QUA: máy không có Python 3"); continue; }
    const r = p.endsWith(".py") ? chay(py, ["-I", "-X", "utf8", p, ...args]) : chay(process.execPath, [p, ...args]);
    const cuoi = ((r.stdout || "") + (r.stderr || "")).trim().split(/\r?\n/).filter(Boolean).pop() || "";
    them(`Selftest ${p}${args.length ? " " + args.join(" ") : ""}`, r.status === 0, `thoát ${r.status}: ${cuoi.slice(0, 80)}`);
  }

  // Sinh thử GDD V0.5 bằng cấu hình Puzzle trung lập rồi soát
  const sinh = ".claude/skills/gdd-v05/scripts/sinh-v05.py", mau = ".claude/skills/gdd-v05/cau-hinh/puzzle-mau.json", soat = ".claude/skills/gdd-v1/scripts/soat.mjs";
  if (![sinh, mau, soat].every((p) => fs.existsSync(path.join(DICH, p)))) them("Sinh thử GDD V0.5", null, "BỎ QUA: thiếu gdd-v05 hoặc gdd-v1");
  else if (!py) them("Sinh thử GDD V0.5", null, "BỎ QUA: máy không có Python 3");
  else {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "gd-kiem-"));
    const r = chay(py, ["-I", "-X", "utf8", sinh, mau, "--ra", tmp]);
    const tsv = ["01-gameplay.tsv", "02-main-task.tsv"].map((f) => path.join(tmp, f));
    if (r.status !== 0 || !tsv.every((f) => fs.existsSync(f))) them("Sinh thử GDD V0.5", false, `sinh-v05 thoát ${r.status}`);
    else {
      const s = chay(process.execPath, [soat, ...tsv, "--loai", "sheet"]);
      const loi = +((s.stdout || "").match(/Tổng: Lỗi (\d+)/) || [0, -1])[1];
      const chu = tsv.map((f) => fs.readFileSync(f, "utf8")).join("\n").toLowerCase();
      const lot = ["order", "hàng chờ", "hồi sinh", "revive", "khay", "drop"].filter((w) => chu.includes(w));
      them("Sinh thử GDD V0.5 (puzzle-mau.json) + soát", loi === 0 && !lot.length, `2 TSV, soát Lỗi ${loi}, chữ họ drop lọt: ${lot.length ? lot.join(", ") : 0}`);
    }
  }
  them("Agent nạp thật", null, "BƯỚC TAY: mở phiên mới, GDM gọi Agent gd-qa trả lời 'sẵn sàng'");
  inKiem(hang);
}

function inKiem(hang) {
  console.log(`| # | Kiểm | Kết quả | Đạt |\n|---|---|---|---|`);
  hang.forEach((h, i) => console.log(`| ${i + 1} | ${h.ten} | ${h.kq} | ${h.dat === null ? "BỎ QUA" : h.dat ? "ĐẠT" : "HỎNG"} |`));
  const hong = hang.filter((h) => h.dat === false).length;
  console.log(`\n${hang.filter((h) => h.dat).length} đạt, ${hong} hỏng, ${hang.filter((h) => h.dat === null).length} bỏ qua`);
  process.exit(hong ? 1 : 0);
}

const bang = { cai, "cap-nhat": capNhat, kiem, "mo-vai": moVai };
if (!bang[lenh]) {
  console.log("Lệnh: cai | cap-nhat | kiem | mo-vai <vai>. Xem đầu file setup.mjs.");
  process.exit(2);
}
bang[lenh]();
