// gdd-sheet-sync: thư viện chạy TRONG trang Google Sheet (docs.google.com/spreadsheets/d/<id>/edit).
// Nạp một lần mỗi lần tải trang: dán nguyên file này vào công cụ chạy JS của trình duyệt.
// Không fetch ra ngoài docs.google.com, không gán innerHTML (trang dùng Trusted Types).
// Hàm FNV và chuẩn hóa ô phải giống hệt scripts/chung.mjs (selftest kiểm).
(() => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const $ = (s) => document.querySelector(s);

  // ---------- dữ liệu ----------
  function parseCsv(s) {
    s = s.replace(/\r\n/g, "\n");
    const rows = []; let row = [], f = "", q = false;
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (q) { if (c === '"') { if (s[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
      else if (c === '"') q = true;
      else if (c === ",") { row.push(f); f = ""; }
      else if (c === "\n") { row.push(f); rows.push(row); row = []; f = ""; }
      else f += c;
    }
    if (f !== "" || row.length) { row.push(f); rows.push(row); }
    return rows;
  }
  function fnv(str) {
    let h = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
    return h.toString(16).padStart(8, "0");
  }
  const chuanO = (v) => (v == null ? "" : String(v)).replace(/\r\n/g, "\n").replace(/\s+$/, "");
  const hashHang = (cells, c0, n) => { const a = []; for (let j = 0; j < n; j++) a.push(chuanO(cells[c0 + j])); return fnv(a.join("\u0001")); };
  const oSangSo = (o) => { const m = /^([A-Z]+)(\d+)$/.exec(o.toUpperCase()); let c = 0; for (const ch of m[1]) c = c * 26 + ch.charCodeAt(0) - 64; return { c0: c - 1, r0: +m[2] - 1 }; };
  const soSangCot = (c) => { let s = ""; c++; while (c) { const m = (c - 1) % 26; s = String.fromCharCode(65 + m) + s; c = (c - m - 1) / 26; } return s; };

  // ---------- trạng thái trang ----------
  const idSheet = () => (location.pathname.match(/\/d\/([^/]+)/) || [])[1];
  const tabHienTai = () => $(".docs-sheet-active-tab .docs-sheet-tab-name")?.textContent;
  const gidHienTai = () => (location.hash.match(/gid=(\d+)/) || [])[1];
  const nameBox = () => $("#t-name-box")?.value;
  const fire = (el, types) => types.forEach((t) => el.dispatchEvent(new MouseEvent(t, { bubbles: true, button: 0 })));
  function trangThai() {
    const t = document.body.innerText;
    return { sheet: idSheet(), tab: tabHienTai(), gid: gidHienTai(), nameBox: nameBox(),
      chiXem: /Chỉ xem|Chỉ nhận xét|View only|Comment only/.test(t.slice(0, 3000)) };
  }
  async function moTab(ten) {
    const el = [...document.querySelectorAll(".docs-sheet-tab")].find((e) => e.querySelector(".docs-sheet-tab-name")?.textContent === ten);
    if (!el) throw new Error("Không thấy tab: " + ten);
    fire(el, ["mousedown", "mouseup", "click"]); await sleep(800);
    if (tabHienTai() !== ten) throw new Error("Mở tab không được: " + ten);
    return gidHienTai();
  }
  async function danhSachTab() {
    const goc = tabHienTai(), out = [];
    for (const el of [...document.querySelectorAll(".docs-sheet-tab")]) {
      const ten = el.querySelector(".docs-sheet-tab-name").textContent;
      out.push({ ten, gid: await moTab(ten) });
    }
    if (goc) await moTab(goc);
    return out;
  }
  async function diToi(vung) {
    const nb = $("#t-name-box"); nb.focus(); nb.value = vung;
    for (const t of ["keydown", "keypress", "keyup"]) nb.dispatchEvent(new KeyboardEvent(t, { key: "Enter", code: "Enter", keyCode: 13, which: 13, bubbles: true }));
    await sleep(700);
    if (nameBox() !== vung) throw new Error(`Name Box là ${nameBox()}, cần ${vung}`);
    return vung;
  }
  // Bấm menu theo nhãn, ví dụ ["Định dạng", "Xuống dòng tự động", "Xuống dòng(W)"].
  // Nhãn khớp nguyên văn nhãn mục (kể cả chữ tắt "(M)") hoặc khớp sau khi bỏ chữ tắt; hai mục trùng tên thì ghi kèm chữ tắt.
  async function menu(nhan) {
    const btn = [...document.querySelectorAll(".menu-button")].find((b) => b.textContent.trim() === nhan[0]);
    if (!btn) throw new Error("Không thấy menu " + nhan[0]);
    fire(btn, ["mousedown", "mouseup"]); await sleep(500);
    const nhanMuc = (e) => (e.querySelector(".goog-menuitem-label")?.textContent || "").trim();
    for (let i = 1; i < nhan.length; i++) {
      const it = [...document.querySelectorAll(".goog-menuitem")].filter((e) => e.offsetParent)
        .find((e) => nhanMuc(e) === nhan[i] || nhanMuc(e).replace(/\(\w\)$/, "") === nhan[i]);
      if (!it) { document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", keyCode: 27, bubbles: true })); throw new Error("Không thấy mục " + nhan[i]); }
      if (i < nhan.length - 1) { fire(it, ["mouseover", "mouseenter", "mousemove"]); await sleep(500); }
      else { fire(it, ["mouseover", "mousedown", "mouseup", "click"]); await sleep(500); }
    }
    return nhan.join(" > ");
  }
  async function dinhDangSauDan(vung) {
    await diToi(vung);
    await menu(["Định dạng", "Xuống dòng tự động", "Xuống dòng(W)"]);
    await menu(["Định dạng", "Căn chỉnh", "Giữa(M)"]); // "Giữa(C)" là căn ngang, "Giữa(M)" là căn dọc (giao diện tiếng Việt)
    return vung;
  }

  // ---------- đọc tab ----------
  async function docTab(gid) {
    const r = await fetch(`/spreadsheets/d/${idSheet()}/export?format=csv&gid=${gid}`);
    if (!r.ok) throw new Error("Export lỗi " + r.status);
    return parseCsv(await r.text());
  }

  // ---------- nạp payload (do scripts/goi.mjs sinh) ----------
  function nap(p) {
    if (p.html && p.kieu) p.html = p.html.replace(/\u0002(\d+)\u0003/g, (_, i) => p.kieu[+i]);
    window.__ssP = p;
    return { ten: p.ten, tab: p.tab, o: p.o, hang: p.hashes.length, cot: p.ncol, html: !!p.html, plain: !!p.plain };
  }

  // ---------- đối chiếu: so hash từng hàng; trả ô của hàng lệch ----------
  async function doiChieu(p = window.__ssP) {
    if (tabHienTai() !== p.tab) await moTab(p.tab);
    const rows = await docTab(gidHienTai());
    const { c0, r0 } = oSangSo(p.o);
    const lech = [], nhomKhop = [];
    p.hashes.forEach((h, i) => {
      const r = rows[r0 + i] || [];
      if (hashHang(r, c0, p.ncol) === h) return;
      const co = r.slice(c0, c0 + p.ncol).map(chuanO).filter((v) => v !== "");
      if (p.nhom && p.nhom[i] && co.length === 1 && fnv(co[0]) === p.nhom[i]) { nhomKhop.push(r0 + i + 1); return; }
      lech.push({ hang: r0 + i + 1, nguon: i + 1, o: Array.from({ length: p.ncol }, (_, j) => chuanO(r[c0 + j])) });
    });
    // Hàng thừa: hàng có chữ nối liền ngay dưới bảng (dừng ở hàng trống đầu tiên: bảng khác bên dưới không tính).
    const thua = [];
    for (let i = r0 + p.hashes.length; i < rows.length; i++) {
      const r = rows[i] || [];
      if (!r.slice(c0, c0 + p.ncol).some((v) => chuanO(v) !== "")) break;
      thua.push(i + 1);
    }
    let goiY = null;
    if (lech.length && lech[0].nguon === 1) {
      const k = rows.findIndex((r) => hashHang(r || [], c0, p.ncol) === p.hashes[0]);
      if (k >= 0) goiY = `Hàng đầu nguồn nằm ở hàng ${k + 1} của tab, thử --o ${soSangCot(c0)}${k + 1}`;
    }
    return { tab: p.tab, o: p.o, hangNguon: p.hashes.length, lech: lech.length, nhomKhop, thua, goiY, chiTiet: lech.slice(0, 40) };
  }

  // ---------- dán ----------
  async function dan(kieu, p = window.__ssP) {
    if (tabHienTai() !== p.tab) await moTab(p.tab);
    if (trangThai().chiXem) throw new Error("Tab chỉ xem/nhận xét: nhờ chủ Sheet cấp quyền chỉnh sửa");
    await diToi(p.o);
    const ed = $("#waffle-rich-text-editor");
    const dt = new DataTransfer();
    if (kieu === "html") { if (!p.html) throw new Error("Payload không có HTML (chế độ moi)"); dt.setData("text/html", p.html); dt.setData("text/plain", ""); }
    else if (kieu === "plain") { if (!p.plain) throw new Error("Payload không có chữ thuần (chế độ o)"); dt.setData("text/plain", p.plain); }
    else throw new Error("kieu là html hoặc plain");
    ed.focus();
    ed.dispatchEvent(new ClipboardEvent("paste", { clipboardData: dt, bubbles: true, cancelable: true }));
    await sleep(2500);
    const { c0, r0 } = oSangSo(p.o);
    return { tab: p.tab, vung: `${p.o}:${soSangCot(c0 + p.ncol - 1)}${r0 + p.hashes.length}`, nameBox: nameBox() };
  }

  window.__ss = { parseCsv, fnv, chuanO, hashHang, oSangSo, soSangCot, trangThai, moTab, danhSachTab, diToi, menu,
    dinhDangSauDan, docTab, nap, doiChieu, dan, phienBan: "1" };
  return "gdd-sheet-sync trang.js đã nạp";
})();
