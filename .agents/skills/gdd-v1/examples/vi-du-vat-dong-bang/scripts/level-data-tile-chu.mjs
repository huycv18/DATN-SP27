#!/usr/bin/env node
// Đọc số THẬT cho tab Level Data từ file level của game ví dụ tile chữ nhiều tầng (schema v1).
// Chạy: node level-data-tile-chu.mjs <thư mục levels> <từ> <đến>  -> in TSV (không có hàng tiêu đề) ra stdout.
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const [dir, a, b] = process.argv.slice(2);
if (!dir || !a || !b) { console.error("Cách dùng: node level-data-tile-chu.mjs <levels> <từ> <đến>"); process.exit(2); }
const NHAN = { easy: "Dễ", medium: "Vừa", hard: "Khó", veryhard: "Rất khó", extreme: "Cực khó" };

for (let n = Number(a); n <= Number(b); n++) {
  const file = `Level_${String(n).padStart(2, "0")}.json`;
  const p = join(dir, file);
  if (!existsSync(p)) { console.error(`bỏ qua ${file}: không có`); continue; }
  const L = JSON.parse(readFileSync(p, "utf8"));
  const tiles = L.layout?.tiles || [];
  const layers = new Set(tiles.map((t) => t[0])).size;
  const orders = L.orders || [];
  const words = orders.map((o) => o.word);
  const goiY = orders.map((o) => o.word.split("").map((ch, i) => ((o.hint || []).includes(i) ? ch : "_")).join(""));
  const lo = orders.reduce((s, o) => s + (o.hint || []).length, 0);
  const tong = orders.reduce((s, o) => s + o.word.length, 0);
  const meta = (t) => (t[4] && typeof t[4] === "object" ? t[4] : t[4] === 1 ? { faceDown: true } : {});
  const up = tiles.filter((t) => meta(t).faceDown).length;
  const bang = tiles.map(meta).filter((m) => (m.iceCount || 0) > 0).map((m) => m.iceCount);
  const linkIds = new Set(tiles.map(meta).filter((m) => m.linkId > 0).map((m) => m.linkId));
  const linkTiles = tiles.map(meta).filter((m) => m.linkId > 0).length;
  const nhan = NHAN[String(L.difficulty || "").toLowerCase()] || (L.difficulty || "");
  const row = [
    String(n), nhan, "", String(tiles.length), String(layers), String(orders.length),
    words.join(", "), goiY.join(", "), `${lo}/${tong}`, String(L.tray ?? ""), String(up),
    bang.length ? `${bang.length} (${bang.join(", ")})` : "0",
    linkTiles ? `${linkTiles} quân, ${linkIds.size} nhóm` : "0", file,
  ];
  console.log(row.join("\t"));
}
