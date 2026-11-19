#!/usr/bin/env node
// Selftest gd-department: dựng repo nguồn giả trong thư mục tạm, sinh gói bằng tools/sinh-khung-phong.mjs,
// cài, kiểm, cập nhật 3 bên, mo-vai. Chỉ ghi vào thư mục tạm. Chạy ở repo nguồn của phòng:
//   node .claude/skills/gd-department/scripts/selftest.mjs     (thoát 0 khi mọi ca đạt)
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { sha } from "./chung.mjs";

const SKILL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const GEN = path.resolve(SKILL, "../../../tools/sinh-khung-phong.mjs");
if (!fs.existsSync(GEN)) { console.log("BỎ QUA: không thấy tools/sinh-khung-phong.mjs (selftest chỉ chạy ở repo nguồn)"); process.exit(0); }

const T = fs.mkdtempSync(path.join(os.tmpdir(), "gd-dept-"));
const NGUON = path.join(T, "nguon"), GOI = path.join(T, "goi"), PHONG = path.join(T, "phong co cach"), TL = path.join(T, "tl.json");
const viet = (goc, p, s) => { fs.mkdirSync(path.dirname(path.join(goc, p)), { recursive: true }); fs.writeFileSync(path.join(goc, p), s); };
const doc = (p) => fs.readFileSync(p, "utf8");
const chay = (f, args) => { const r = spawnSync(process.execPath, [f, ...args], { encoding: "utf8" }); return { ma: r.status, ra: (r.stdout || "") + (r.stderr || "") }; };
const setup = (...args) => chay(path.join(GOI, "scripts/setup.mjs"), args);
const sinh = () => chay(GEN, ["--goc", NGUON, "--ra", GOI]);
const bamCay = (d) => Object.fromEntries(duyetMoi(d).map((p) => [p, sha(fs.readFileSync(path.join(d, p)))]));
const duyetMoi = (d, c = "") => fs.readdirSync(path.join(d, c)).flatMap((t) => { const p = c ? `${c}/${t}` : t; return fs.statSync(path.join(d, p)).isDirectory() ? duyetMoi(d, p) : [p]; });

// Repo nguồn giả: 3 agent (1 ngoài bộ gọn), 2 skill, hồ sơ thật + mẫu, tri thức nhắc tên game, project thật
const agent = (n, model = "sonnet") => `---\nname: ${n}\ndescription: vai ${n}\nmodel: ${model}\n---\nĐọc docs/org/ho-so-lead.md.\n`;
viet(NGUON, "CLAUDE.md", "# Phòng\nLead: xem @docs/org/ho-so-lead.md\n");
for (const n of ["gd-systems", "gd-qa", "gd-ux"]) viet(NGUON, `.claude/agents/${n}.md`, agent(n));
viet(NGUON, ".claude/agents/_shared-protocol.md", "giao thức chung\n");
viet(NGUON, ".claude/skills/demo/SKILL.md", "---\nname: demo\ndescription: thử\n---\n");
viet(NGUON, ".claude/skills/demo/scripts/selftest.mjs", "console.log('demo đạt')\n");
viet(NGUON, ".claude/settings.local.json", "{}\n");
for (const p of duyetMoi(SKILL)) if (!/^assets\/(khung|manifest)|selftest/.test(p)) viet(NGUON, `.claude/skills/gd-department/${p}`, fs.readFileSync(path.join(SKILL, p)));
viet(NGUON, "docs/org/ho-so-lead.md", "| Khóa | Giá trị |\n|---|---|\n| Tên | Trần Thử Nghiệm |\n| Studio | StudioGia |\n");
// biến ghép chuỗi để chính file này không chứa biến nguyên văn (cổng và kiem chặn biến sót trong khung)
const B = (n) => "{" + "{" + n + "}}";
viet(NGUON, "docs/org/ho-so-lead.mau.md", `| Khóa | Giá trị |\n|---|---|\n| Tên | ${B("LEAD_TEN")} |\n| Studio | ${B("STUDIO")} |\n| Bộ vai | ${B("BO_VAI")} |\n`);
viet(NGUON, "docs/playbooks/gd-qa.md", "# Playbook gd-qa\nbản 1\n");
viet(NGUON, "docs/knowledge/00-du-an.md", "Ca có nguồn: game Vui Ve, 20/10.\n");
viet(NGUON, "docs/knowledge/nguon/raw.md", "nguồn thô\n");
viet(NGUON, "projects/_template/README.md", "# <slug>\n");
viet(NGUON, "projects/vui-ve/DECISIONS.md", "của sản phẩm thật\n");
viet(NGUON, "production/reports/x.md", "báo cáo\n");
fs.writeFileSync(TL, JSON.stringify({ LEAD_TEN: "Lan", STUDIO: "Studio X", BO_VAI: "gọn" }));

const ca = [];
const kiem = (ten, f) => { try { f(); ca.push([ten, ""]); } catch (e) { ca.push([ten, e.message]); } };
const dung = (dk, msg) => { if (!dk) throw new Error(msg); };

kiem("cổng chặn tên người trong lớp luật", () => {
  viet(NGUON, "docs/playbooks/gd-qa.md", "# Playbook gd-qa\nhỏi Nghiệm trước\n");
  const r = sinh();
  dung(r.ma === 1 && /tên người/.test(r.ra) && !fs.existsSync(GOI), "không chặn: " + r.ra.slice(-300));
});
kiem("cổng chặn tên game (theo projects/) ở mọi lớp khi bảng thay chưa có tên đó", () => {
  viet(NGUON, "docs/playbooks/gd-qa.md", "# Playbook gd-qa\nbản 1\n");
  viet(NGUON, ".claude/skills/demo/vi-du.md", "ví dụ Vui-Ve\n");
  const r = sinh();
  dung(r.ma === 1 && /demo\/vi-du\.md:1: \[tên game/.test(r.ra) && /00-du-an\.md:1: \[tên game/.test(r.ra) && !fs.existsSync(GOI), r.ra.slice(-300));
});
kiem("bảng thay tên game: nguồn có tên thì bản sinh ra không còn, nguồn không đổi, bảng không đi theo gói", () => {
  viet(NGUON, "docs/org/thay-ten-game.json", JSON.stringify({ "Vui Ve": "game A", "Vui-Ve": "game-a", "vui-ve": "game-a" }));
  const truoc = doc(path.join(NGUON, "docs/knowledge/00-du-an.md"));
  const r = sinh();
  dung(r.ma === 0 && /đã thay 2 chỗ/.test(r.ra), r.ra.slice(-400));
  dung(doc(path.join(GOI, "assets/khung/docs/knowledge/00-du-an.md")).includes("game game A") && doc(path.join(GOI, "assets/khung/.claude/skills/demo/vi-du.md")).includes("ví dụ game-a"), "chưa thay");
  dung(doc(path.join(NGUON, "docs/knowledge/00-du-an.md")) === truoc, "sửa nguồn");
  dung(!fs.existsSync(path.join(GOI, "assets/khung/docs/org/thay-ten-game.json")), "bảng thay lọt vào gói");
  dung(chay(GEN, ["--goc", NGUON, "--quet", GOI]).ma === 0, "quét lại gói còn tên");
});
kiem("sinh gói: đếm theo đĩa, không lấy projects thật, nguon, settings, hồ sơ thật", () => {
  const r = sinh();
  dung(r.ma === 0, r.ra);
  const m = JSON.parse(doc(path.join(GOI, "assets/manifest.json")));
  dung(m.so_agent === 3 && m.so_skill === 2 && m.bien.join() === "BO_VAI,LEAD_TEN,STUDIO", `agent ${m.so_agent}, skill ${m.so_skill}, biến ${m.bien}`);
  const k = Object.keys(m.files);
  dung(!k.some((p) => /vui-ve|nguon\/|settings|reports/.test(p)), "lọt: " + k.join(", "));
  dung(m.files["docs/org/ho-so-lead.md"]?.loai === "mau" && m.files["production/DECISIONS.md"]?.loai === "khoi_tao", "thiếu mẫu hoặc khởi tạo");
  dung(!doc(path.join(GOI, "assets/khung/docs/org/ho-so-lead.mau.md")).includes("Trần"), "hồ sơ thật lọt vào gói");
});
kiem("cai thiếu biến thì dừng, không ghi", () => {
  fs.writeFileSync(path.join(T, "thieu.json"), JSON.stringify({ LEAD_TEN: "Lan" }));
  const r = setup("cai", "--dich", PHONG, "--tra-loi", path.join(T, "thieu.json"), "--ghi");
  dung(r.ma === 1 && /thiếu STUDIO/.test(r.ra) && !fs.existsSync(PHONG), r.ra);
});
kiem("cai chạy thử không ghi gì", () => {
  const r = setup("cai", "--dich", PHONG, "--tra-loi", TL);
  dung(r.ma === 0 && !fs.existsSync(PHONG), r.ra);
});
kiem("cai --ghi (đường dẫn có dấu cách): hồ sơ điền, bộ gọn để dành gd-ux, kiem thoát 0", () => {
  const r = setup("cai", "--dich", PHONG, "--tra-loi", TL, "--ghi");
  dung(r.ma === 0, r.ra);
  dung(doc(path.join(PHONG, "docs/org/ho-so-lead.md")).includes("| Tên | Lan |"), "hồ sơ chưa điền");
  dung(!fs.existsSync(path.join(PHONG, ".claude/agents/gd-ux.md")) && fs.existsSync(path.join(PHONG, ".gd-department/vai-them/gd-ux.md")), "gd-ux không để dành");
  dung(fs.existsSync(path.join(PHONG, "production/DECISIONS.md")) && fs.readdirSync(path.join(PHONG, "projects")).join() === "_template", "thiếu production hoặc projects lạ");
  const k = setup("kiem", "--dich", PHONG);
  dung(k.ma === 0, k.ra);
});
kiem("cai lần 2 bị chặn, cap-nhat cùng gói không đổi file nào, không tạo backup", () => {
  dung(setup("cai", "--dich", PHONG, "--tra-loi", TL, "--ghi").ma === 1, "cai lần 2 không bị chặn");
  const truoc = bamCay(PHONG);
  const r = setup("cap-nhat", "--dich", PHONG, "--ghi");
  const sau = bamCay(PHONG);
  const doi = Object.keys(sau).filter((p) => truoc[p] !== sau[p]);
  dung(r.ma === 0 && !doi.length && !Object.keys(truoc).concat(Object.keys(sau)).some((p) => p.includes("/backup/")), "đổi: " + doi.join(", ") + r.ra);
});
kiem("cap-nhat: file người dùng sửa ra .moi, file chưa sửa được thay có backup, DECISIONS và projects giữ nguyên", () => {
  viet(PHONG, "CLAUDE.md", doc(path.join(PHONG, "CLAUDE.md")) + "Ghi chú tay của người dùng\n");
  viet(PHONG, "projects/sort-x/DECISIONS.md", "quyết định game sort\n");
  viet(PHONG, "production/DECISIONS.md", doc(path.join(PHONG, "production/DECISIONS.md")) + "## mục của người dùng\n");
  const giu = ["CLAUDE.md", "projects/sort-x/DECISIONS.md", "production/DECISIONS.md"].map((p) => sha(fs.readFileSync(path.join(PHONG, p))));
  viet(NGUON, "CLAUDE.md", "# Phòng bản 2\nLead: xem @docs/org/ho-so-lead.md\n");
  viet(NGUON, "docs/playbooks/gd-qa.md", "# Playbook gd-qa\nbản 2\n");
  viet(NGUON, "docs/playbooks/gd-ux.md", "# Playbook gd-ux mới\n");
  dung(sinh().ma === 0, "sinh lại lỗi");
  const thu = setup("cap-nhat", "--dich", PHONG);
  dung(thu.ma === 0 && doc(path.join(PHONG, "docs/playbooks/gd-qa.md")).includes("bản 1"), "chạy thử đã ghi");
  const r = setup("cap-nhat", "--dich", PHONG, "--ghi");
  dung(r.ma === 0, r.ra);
  const sau = ["CLAUDE.md", "projects/sort-x/DECISIONS.md", "production/DECISIONS.md"].map((p) => sha(fs.readFileSync(path.join(PHONG, p))));
  dung(sau.join() === giu.join(), "đè file người dùng");
  dung(doc(path.join(PHONG, "CLAUDE.md.moi")).includes("bản 2"), "thiếu CLAUDE.md.moi");
  dung(doc(path.join(PHONG, "docs/playbooks/gd-qa.md")).includes("bản 2") && fs.existsSync(path.join(PHONG, "docs/playbooks/gd-ux.md")), "không thay hoặc không thêm");
  const bk = path.join(PHONG, ".gd-department/backup");
  dung(fs.existsSync(bk) && duyetMoi(bk).some((p) => p.endsWith("docs/playbooks/gd-qa.md") && doc(path.join(bk, p)).includes("bản 1")), "thiếu backup bản cũ");
  const lan2 = bamCay(PHONG), soBk = duyetMoi(bk).length;
  dung(setup("cap-nhat", "--dich", PHONG, "--ghi").ma === 0, "cap-nhat lần 2 lỗi");
  const lan3 = bamCay(PHONG);
  const doi = Object.keys(lan3).filter((p) => lan3[p] !== lan2[p]);
  dung(!doi.length && duyetMoi(bk).length === soBk, `lần 2 vẫn đổi: ${doi.join(", ")}, backup ${soBk} -> ${duyetMoi(bk).length}`);
});
kiem("mo-vai ux bật agent để dành, kiem vẫn thoát 0", () => {
  const r = setup("mo-vai", "ux", "--dich", PHONG);
  dung(r.ma === 0 && fs.existsSync(path.join(PHONG, ".claude/agents/gd-ux.md")), r.ra);
  dung(setup("mo-vai", "khong-co", "--dich", PHONG).ma === 1, "vai lạ không bị chặn");
  const k = setup("kiem", "--dich", PHONG);
  dung(k.ma === 0, k.ra);
});
kiem("kiem bắt file khung bị gỡ và biến sót", () => {
  fs.renameSync(path.join(PHONG, ".claude/agents/gd-qa.md"), path.join(T, "gd-qa.md"));
  viet(PHONG, "docs/org/ho-so-lead.md", `| Tên | ${B("LEAD_TEN")} |\n`);
  const k = setup("kiem", "--dich", PHONG);
  dung(k.ma === 1 && /thiếu: \.claude\/agents\/gd-qa\.md/.test(k.ra) && /biến \{\{\.\.\.\}\} chưa điền \| 1 file/.test(k.ra), k.ra);
});
kiem("cai vào thư mục có sẵn file: không đè, ghi .moi", () => {
  const d = path.join(T, "co-san");
  viet(d, "CLAUDE.md", "CLAUDE.md riêng của người dùng\n");
  const r = setup("cai", "--dich", d, "--tra-loi", TL, "--ghi");
  dung(r.ma === 0 && doc(path.join(d, "CLAUDE.md")).startsWith("CLAUDE.md riêng") && fs.existsSync(path.join(d, "CLAUDE.md.moi")), r.ra);
});

for (const [ten, loi] of ca) console.log((loi ? "HỎNG " : "ĐẠT  ") + ten + (loi ? ": " + loi.slice(0, 600) : ""));
const hong = ca.filter(([, l]) => l).length;
console.log(`${ca.length - hong} đạt, ${hong} hỏng (thư mục tạm ${T})`);
process.exit(hong ? 1 : 0);
