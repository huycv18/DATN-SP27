// Hàm dùng chung cho tools/sinh-khung-phong.mjs (sinh khung) và setup.mjs (cài, cập nhật, kiểm),
// để hai đầu ra băm, duyệt thư mục và soi rò rỉ bằng cùng một logic.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

export const sha = (buf) => crypto.createHash("sha256").update(buf).digest("hex");
export const posix = (p) => p.split(path.sep).join("/");

// Duyệt thư mục, trả đường dẫn tương đối dạng a/b/c, bỏ thư mục .git
export function duyet(goc, con = "") {
  const thu = path.join(goc, con);
  if (!fs.existsSync(thu)) return [];
  if (fs.statSync(thu).isFile()) return [posix(con)];
  const ra = [];
  for (const ten of fs.readdirSync(thu).sort()) {
    if (ten === ".git") continue;
    ra.push(...duyet(goc, con ? path.join(con, ten) : ten));
  }
  return ra;
}

export const laVanBan = (buf) => !buf.subarray(0, 8000).includes(0);

// Rò rỉ không được có ở bất kỳ file nào của khung, kể cả tri thức
export const RO_CHUNG = [
  ["đường dẫn máy", /[A-Za-z]:[\\/]+Users[\\/]+|\/Users\/[^/\s]+\/|\/home\/[^/\s]+\//],
  ["link Sheet", /docs\.google\.com\/spreadsheets\/d\/[A-Za-z0-9_-]{20,}/],
  ["email", /[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[a-z]{2,}/],
];
export const RE_BIEN = /\{\{[A-Z][A-Z0-9_]*\}\}/g;

// Dò từng dòng: trả [{dong, loai, trich}]
export function soi(text, mau) {
  const ra = [];
  text.split(/\r?\n/).forEach((dong, i) => {
    for (const [loai, re] of mau) {
      const m = dong.match(re);
      if (m) ra.push({ dong: i + 1, loai, trich: m[0] });
    }
  });
  return ra;
}

export function frontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const ra = {};
  for (const d of m[1].split(/\r?\n/)) {
    const k = d.match(/^([A-Za-z_-]+):\s*(.*)$/);
    if (k) ra[k[1]] = k[2].trim();
  }
  return ra;
}

export const docJson = (p) => JSON.parse(fs.readFileSync(p, "utf8"));
export const ghiJson = (p, x) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(x, null, 2) + "\n");
};
