#!/usr/bin/env node
// Xuất Doc thiết kế ra Word: gộp (gop-book), vẽ mỗi khối mermaid thành PNG bằng Chrome headless,
// thay khối bằng ảnh, rồi pandoc ra book/ket-qua/book.docx để Lead kéo vào Drive thành Google Doc.
// Công cụ (Lead cho tải 2026-11-23): tools/vendor/mermaid.min.js (mermaid 10.9.1), tools/vendor/pandoc-3.1.11.1/pandoc.exe.
// Chạy: node projects/game-moi/tools/xuat-book.mjs [--chrome <đường dẫn>]
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync, mkdtempSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';

const TOOLS = dirname(fileURLToPath(import.meta.url));
const BOOK = join(TOOLS, '..', 'book');
const KQ = join(BOOK, 'ket-qua');
const HINH = join(BOOK, 'hinh');
const MERMAID = join(TOOLS, 'vendor', 'mermaid.min.js');
const PANDOC = join(TOOLS, 'vendor', 'pandoc-3.1.11.1', 'pandoc.exe');
const argChrome = process.argv.indexOf('--chrome');
const CHROME = argChrome > 0 ? process.argv[argChrome + 1]
  : ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(existsSync);

for (const [ten, p] of [['mermaid.min.js', MERMAID], ['pandoc', PANDOC], ['Chrome hoặc Edge', CHROME]]) {
  if (!p || !existsSync(p)) { console.error(`Thiếu ${ten}: ${p ?? 'không tìm thấy'}. Xem tools/README.md mục Xuất Doc.`); process.exit(1); }
}

const tam = mkdtempSync(join(tmpdir(), 'xuat-book-'));
const chrome = (...a) => execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', `--user-data-dir=${join(tam, 'profile')}`, ...a], { encoding: 'utf8', maxBuffer: 64 << 20, timeout: 60000 });

// Lượt 1: mermaid vẽ ra SVG trong trang, lấy DOM. Lượt 2: chụp SVG đúng kích thước, nhân 2 cho nét.
function veHinh(code, ra) {
  const html1 = join(tam, 've.html');
  writeFileSync(html1, `<!doctype html><meta charset="utf-8"><body><script src="${pathToFileURL(MERMAID)}"></script><script>
mermaid.initialize({ startOnLoad: false, theme: 'default', fontFamily: 'Segoe UI, Arial, sans-serif', flowchart: { htmlLabels: false } });
mermaid.render('d', ${JSON.stringify(code)}).then(r => { document.body.innerHTML = r.svg; document.title = 'xong'; })
  .catch(e => { document.body.textContent = 'LOI ' + e.message; document.title = 'loi'; });
</script></body>`);
  const dom = chrome('--virtual-time-budget=15000', '--dump-dom', pathToFileURL(html1).href);
  const svg = dom.match(/<svg[\s\S]*<\/svg>/)?.[0];
  if (!svg) throw new Error(`mermaid không vẽ được: ${dom.match(/LOI[^<]*/)?.[0] ?? 'không có SVG'}`);
  const vb = svg.match(/viewBox="[\d.\-]+ [\d.\-]+ ([\d.]+) ([\d.]+)"/);
  const w = Math.ceil(vb ? +vb[1] : 800) + 16, h = Math.ceil(vb ? +vb[2] : 600) + 16;
  const html2 = join(tam, 'chup.html');
  writeFileSync(html2, `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;background:#fff}svg{display:block;margin:8px;width:${w - 16}px!important;height:${h - 16}px!important;max-width:none!important}</style>${svg}`);
  chrome(`--window-size=${w},${h}`, '--force-device-scale-factor=2', '--default-background-color=ffffffff', `--screenshot=${ra}`, pathToFileURL(html2).href);
  if (!existsSync(ra)) throw new Error(`Chrome không ghi được ảnh ${ra}`);
  return { w, h };
}

execFileSync(process.execPath, [join(TOOLS, 'gop-book.mjs')], { stdio: 'inherit' });
const md = readFileSync(join(KQ, 'book.md'), 'utf8');
mkdirSync(HINH, { recursive: true });
let n = 0;
const loi = [];
const ra = md.replace(/```mermaid\n([\s\S]*?)```/g, (_, code) => {
  n++;
  const ten = `so-do-${String(n).padStart(2, '0')}.png`;
  try { const { w, h } = veHinh(code, join(HINH, ten)); console.log(`${ten} ${w}x${h}`); }
  catch (e) { loi.push(`${ten}: ${e.message}`); return '```text\n' + code + '```'; }
  return `![](../hinh/${ten})`;
});
writeFileSync(join(KQ, 'book-docx.md'), ra);
execFileSync(PANDOC, ['book-docx.md', '-f', 'markdown', '-o', 'book.docx', '--resource-path=.;..'], { cwd: KQ, stdio: 'inherit' });
rmSync(tam, { recursive: true, force: true });
console.log(`Vẽ ${n - loi.length}/${n} sơ đồ. Ra: ${join(KQ, 'book.docx')}`);
if (loi.length) { console.error('Sơ đồ lỗi, giữ dạng chữ trong docx:\n' + loi.join('\n')); process.exit(1); }
