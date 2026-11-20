#!/usr/bin/env node
// Selftest soat.mjs: bắt lại đúng lỗi cũ của game chữ 20/10/2026, các quy tắc họp 05/11/2026, và không báo nhầm câu đúng.
// Chạy: node .claude/skills/gdd-v1/scripts/soat-selftest.mjs
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";

const SOAT = join(dirname(fileURLToPath(import.meta.url)), "soat.mjs");
const goc = mkdtempSync(join(tmpdir(), "soat-"));
const p = join(goc, "projects", "loi-cu");
for (const d of ["gdd/sheet", "tham-chieu", "ux", "qa"]) mkdirSync(join(p, d), { recursive: true });

writeFileSync(join(p, "gdd/tu-vung.md"), `# Từ vựng
| Dùng | Không dùng | Ghi chú |
|---|---|---|
| quân | thẻ, ô chữ | |
| hàng chờ | khay chờ, slot, khay [cùng câu: đầy/thua/7 ô] | "khay" chỉ dành cho Khay chứa quân |
| hàng đợi | queue | |
`, "utf8");
// Lỗi 13 review-v1.md: tham chiếu dùng "khay" cho hàng chờ của game khác (dựng lại từ mô tả lỗi; bản gốc đã sửa trước commit).
writeFileSync(join(p, "tham-chieu/giam-roi.md"), `# Tham chiếu
- Triple Tile: khay 7 ô ở đáy màn, đầy khay là thua.
- Hướng Khay chứa quân của Thiện: khay chứa 2-3 quân đứng thẳng, vỡ khi rỗng.
`, "utf8");
// Lỗi 12 review-v1.md: từ cấm "thẻ", "ô chữ", "queue" trong file UX (ngoài danh sách soát lúc đó).
writeFileSync(join(p, "ux/giam-roi-mat.md"), `# Giảm rối mắt
- Thẻ Order dùng ô chữ to hơn.
- Waiting row thay cho queue.
- Lời trích nguyên văn của Lead "thẻ" không tính.
`, "utf8");
// Lỗi G1 review-v1-dot2.md: ví dụ gắn data level (dòng thật trong luat-loi.md bản a801831 và câu G1).
writeFileSync(join(p, "gdd/luat-loi.md"), `# Luật
## 3. Luật
1. Ví dụ L1 DOVE, BIRD, DOG = 11 quân.
2. Cùng lý do; L1 V0.5 có 3 Order nhưng 11 quân.
3. Mỗi lần nhặt 1 quân, ở L4 quân Lock đầu tiên có xích.
4. Ví dụ L1 theo \`levels/level-v1.csv\` ngày 20/10/2026: CAT, BIRD, DOG = 10 quân.
`, "utf8");
writeFileSync(join(p, "qa/review.md"), `- Lỗi: file dùng thẻ cho quân.\n`, "utf8");

const chay = (a) => spawnSync(process.execPath, [SOAT, ...a], { cwd: goc, encoding: "utf8" });
let dat = 0, hong = 0;
const kiem = (ten, ok, log) => { ok ? dat++ : hong++; console.log(`${ok ? "ĐẠT " : "HỎNG"} ${ten}`); if (!ok && log) console.log(log); };

const r = chay(["--project", "loi-cu"]);
const o = r.stdout;
kiem("--project quét cả tham-chieu/ và ux/, thoát 1", r.status === 1 && o.includes("tham-chieu/giam-roi.md") && o.includes("ux/giam-roi-mat.md"), o);
kiem("bắt 'khay' cùng câu với 'đầy' (lỗi 13), không bắt Khay chứa quân", o.includes("tham-chieu/giam-roi.md:2 | khay (cùng câu với") && !o.includes("tham-chieu/giam-roi.md:3"), o);
kiem("bắt 'thẻ', 'ô chữ', 'queue' (lỗi 12)", o.includes("ux/giam-roi-mat.md:2 |") && o.includes("ux/giam-roi-mat.md:3 | queue"), o);
kiem("không bắt từ trong lời trích ngoặc kép", !o.includes("ux/giam-roi-mat.md:4"), o);
kiem("bỏ qua qa/ mặc định", !o.includes("qa/review.md"), o);
kiem("bắt ví dụ gắn data G1 (L1 + từ in hoa, L1 + 11 quân)", o.includes("gdd/luat-loi.md:3 |") && o.includes("gdd/luat-loi.md:4 |"), o);
kiem("không bắt '1 quân' với L4, không bắt dòng đã ghi nguồn data", !o.includes("gdd/luat-loi.md:5 |") && !o.includes("gdd/luat-loi.md:6 |"), o);
const r2 = chay(["--project", "loi-cu", "--ca-qa"]);
kiem("--ca-qa thì quét cả qa/", r2.stdout.includes("qa/review.md:1 | thẻ"), r2.stdout);
const r3 = chay([join(p, "gdd/luat-loi.md"), "--tu-vung", join(p, "gdd/tu-vung.md")]);
kiem("chế độ file: có dòng 'Ví dụ gắn data level' 2 cảnh báo", /Ví dụ gắn data level[^|]*\| 2 cảnh báo \| L3, L4/.test(r3.stdout), r3.stdout);

// Quy tắc 05/11/2026 (họp team): ô Main Task quá 5 dòng, bộ đếm trong Gameplay, thiếu tu-vung, --loai du-lieu.
const NL = "\\n";
writeFileSync(join(p, "gdd/sheet/02-main-task.tsv"), [
  "STT\tHạng mục\tScope\tNgười thực hiện\tTrạng thái\tGhi chú",
  `1\tKhay\t${["a", "b", "c", "d", "e"].join(NL)}\tDev\t\t`,
  `2\tBăng\t${["a", "b", "c", "d", "e", "f"].join(NL)}\tDev\t\t`,
].join("\n") + "\n", "utf8");
writeFileSync(join(p, "gdd/sheet/01-gameplay.tsv"), [
  "Ảnh\tMục\tMô tả",
  `\tCách chơi\t- Chạm 1 đĩa để lấy cả đĩa${NL}- Phục vụ tới khi hết món`,
  `\tĐồng hồ\t- Đồng hồ x/6 tăng mỗi lượt`,
  `\tThanh tiến độ\t- Thanh tiến độ: số khách đã xong / tổng khách`,
  `\tĐiểm\t- Điểm = số đĩa x 10`,
].join("\n") + "\n", "utf8");
writeFileSync(join(p, "gdd/sheet/tile.tsv"), "Mã\tTên\tẢnh\nart_12\tCá hồi\tart_12.png\nart_13\tTôm\tart_13.png\n", "utf8");
const r4 = chay([join(p, "gdd/sheet/02-main-task.tsv")]);
kiem("ô Main Task 6 dòng là lỗi, 5 dòng không", /Ô Main Task quá 5 dòng \| 1 lỗi \| L3 \|/.test(r4.stdout) && r4.status === 1, r4.stdout);
const r5 = chay([join(p, "gdd/sheet/01-gameplay.tsv")]);
kiem("Gameplay: bắt x/6, số ... / tổng, công thức; không bắt câu thường", /Bộ đếm, công thức trong Gameplay[^|]*\| 3 cảnh báo \| L3, L4, L5 \|/.test(r5.stdout), r5.stdout);
// Bài học Lead sửa tay Gameplay một sản phẩm 05/11/2026: nhãn kiểu tên hàm rồi ":", meta trong ô Win, Lose
writeFileSync(join(p, "gdd/sheet/gameplay-cu.tsv"), [
  "Ảnh\tMục\tMô tả",
  `\tLogic\t- Đồ ăn trên băng trùng Order thì khách lấy và ăn${NL}- Ghép lại: khách mới vào gọi đúng món trên băng thì lấy luôn`,
  `\tCách chơi\t- Chọn liền tay: chọn được nhiều đĩa liền nhau`,
  `\tMechanic\t- Lock: quân bị xích, chưa nhặt được`,
  `\tWin\t- Dọn hết đồ ăn là win${NL}- Tối đa 3 sao, thắng nhanh hơn thì lập kỷ lục`,
  `\tLose\t- Băng đầy, hết 5 giây thì thua`,
  `\tLose\t- Hết giờ thì thua, đầu bếp được khăn mới`,
].join("\n") + "\n", "utf8");
const r8 = chay([join(p, "gdd/sheet/gameplay-cu.tsv")]);
kiem("Gameplay: bắt nhãn \"Ghép lại:\", \"Chọn liền tay:\", không bắt Mechanic \"Lock:\" và câu thường", /nhãn ngắn rồi dấu hai chấm[^|]*\| 2 cảnh báo \| L2, L3 \|/.test(r8.stdout), r8.stdout);
kiem("Gameplay: bắt sao, kỷ lục, khăn trong ô Win, Lose, không bắt ô Lose sạch", /Meta trong ô Win, Lose[^|]*\| 2 cảnh báo \| L5, L7 \|/.test(r8.stdout), r8.stdout);
// Main Task gộp task, scope ngắn, chỉ core win lose (Lead 05/11/2026)
writeFileSync(join(p, "gdd/sheet/main-task-gop.tsv"), [
  "STT\tHạng mục\tScope\tNgười thực hiện\tTrạng thái\tGhi chú",
  "1\tNắp: đậy khay\tKhay có nắp không chọn được\tDev\t\t",
  "2\tNắp: giảm số\tLấy khay kề thì số giảm 1\tDev\t\t",
  "3\tNắp: nhấc nắp\tSố về 0 thì nhấc nắp\tDev\t\t",
  "4\tWin, Lose\tMàn Win có sao, quà khăn mới\tDev\t\t",
  `5\tKhay\t${["a", "b", "c", "d"].join(NL)}\tDev\t\tvì sao phải gộp, sao chép chương trình mẫu`,
  "6\tBăng: chạy\tBăng 6 ô\tDev\t\t",
].join("\n") + "\n", "utf8");
const r9 = chay([join(p, "gdd/sheet/main-task-gop.tsv")]);
kiem("Main Task: 3 dòng \"Nắp: ...\" báo nên gộp, 1 dòng \"Băng:\" không", /nên gộp[^|]*\| 1 cảnh báo: Nắp \(3 dòng\) \| L2, L3, L4 \|/.test(r9.stdout), r9.stdout);
kiem("Main Task: bắt sao, quà, khăn; không bắt \"vì sao\", \"sao chép\", \"chương trình\"", /Meta trong Main Task[^|]*\| 1 cảnh báo \| L5 \|/.test(r9.stdout), r9.stdout);
kiem("Main Task: ô Scope 4 ý là cảnh báo, 4 dòng chưa là lỗi 5 dòng", /Ô Scope quá 3 ý \| 1 cảnh báo \| L6 \|/.test(r9.stdout) && /Ô Main Task quá 5 dòng \| 0 \|/.test(r9.stdout), r9.stdout);
kiem("file trong projects/<slug>/ tự tìm tu-vung.md, có thì không cảnh báo", !r5.stdout.includes("!!! CẢNH BÁO") && r5.stdout.includes("Từ không phải từ của Lead | 0 |"), r5.stdout);
const q = join(goc, "projects", "chua-co-tu-vung", "gdd");
mkdirSync(q, { recursive: true });
writeFileSync(join(q, "a.md"), "# A\n\nKhông có lỗi gì.\n", "utf8");
const r6 = chay([join(q, "a.md"), "--loai", "sheet"]);
kiem("thiếu tu-vung.md: CẢNH BÁO to và tính vào Cảnh báo", r6.stdout.includes("!!! CẢNH BÁO: không có") && /Cảnh báo: 1\./.test(r6.stdout), r6.stdout);
const r6b = chay(["--project", "chua-co-tu-vung"]);
kiem("--project thiếu tu-vung.md cũng CẢNH BÁO to", r6b.stdout.includes("!!! CẢNH BÁO: không có") && /Cảnh báo 1\./.test(r6b.stdout), r6b.stdout);
const r7 = chay([join(p, "gdd/sheet/tile.tsv"), "--loai", "du-lieu"]);
const r7b = chay([join(p, "gdd/sheet/tile.tsv"), "--loai", "sheet"]);
kiem("--loai du-lieu bỏ kiểm tên biến (mã ảnh art_12), --loai sheet vẫn bắt", r7.status === 0 && r7.stdout.includes("bỏ qua (--loai du-lieu)") && /Tên biến code \| 2 lỗi/.test(r7b.stdout), r7.stdout + r7b.stdout);

console.log(`\n${dat} đạt, ${hong} hỏng`);
process.exit(hong ? 1 : 0);
