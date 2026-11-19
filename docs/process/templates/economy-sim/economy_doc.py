# -*- coding: utf-8 -*-
"""Cổng kiểm số cho doc economy (dùng chung mọi game). Không phụ thuộc game.

Ba lệnh:
  python economy_doc.py ghi      <doc.md> <ket-qua.json>                  đưa bảng và số từ sim vào doc
  python economy_doc.py kiem     <tham-so.json> <doc.md> [<ket-qua.json>]  báo mọi số lệch; thoát mã 1 nếu có lỗi
  python economy_doc.py selftest                                           tự thử: phải bắt được "10 coin" khi tham số là 5

Hợp đồng với sim của game (xem README.md cùng thư mục):
  ket-qua.json = {"khoi": {"ten": "bảng markdown"}, "bien": {"ten": "giá trị chữ"}}
  Trong doc: khối bảng nằm giữa  <!--khoi:ten-->  và  <!--/khoi-->  ; số suy ra nằm trong  <!--v:ten-->giá trị<!--/v-->
  tham-so.json: tham_so.<tên>.gia_tri (hoặc gia_tri_doc nếu doc viết khác, ví dụ 30 cho 30%),
                bat = các regex có nhóm 1 là số, doc phải bằng giá trị; cam = regex số cũ không được còn;
                bo_qua_tieu_de = tiêu đề mục (ví dụ "Phụ lục") không kiểm tham số.
"""
import json
import os
import re
import sys
import tempfile

KHOI = re.compile(r"(<!--khoi:([\w\-]+)-->)(.*?)(<!--/khoi-->)", re.S)
BIEN = re.compile(r"(<!--v:([\w\-]+)-->)(.*?)(<!--/v-->)", re.S)


def doc_file(p):
    with open(p, encoding="utf-8") as fh:
        return fh.read()


def ghi_file(p, s):
    with open(p, "w", encoding="utf-8", newline="\n") as fh:
        fh.write(s)


def so(x):
    return float(x.replace(",", "."))


def ghi(doc_path, kq_path):
    kq = json.loads(doc_file(kq_path))
    s = doc_file(doc_path)
    loi = []

    def r_khoi(m):
        if m.group(2) not in kq["khoi"]:
            loi.append("khối %s không có trong ket-qua.json" % m.group(2))
            return m.group(0)
        return "%s\n%s\n%s" % (m.group(1), kq["khoi"][m.group(2)].strip(), m.group(4))

    def r_bien(m):
        if m.group(2) not in kq["bien"]:
            loi.append("biến %s không có trong ket-qua.json" % m.group(2))
            return m.group(0)
        return "%s%s%s" % (m.group(1), kq["bien"][m.group(2)], m.group(4))

    s = BIEN.sub(r_bien, KHOI.sub(r_khoi, s))
    ghi_file(doc_path, s)
    for e in loi:
        print("LỖI: " + e)
    print("ghi xong %s: %d khối, %d biến" % (doc_path, len(KHOI.findall(s)), len(BIEN.findall(s))))
    return 1 if loi else 0


def bo_qua_dong(lines, tieu_de):
    """Trả tập chỉ số dòng nằm trong mục bị bỏ qua (đến tiêu đề cùng cấp kế)."""
    bo = set()
    dang = False
    for i, ln in enumerate(lines):
        if ln.startswith("## "):
            dang = any(t in ln for t in tieu_de)
        if dang:
            bo.add(i)
    return bo


def kiem(ts_path, doc_path, kq_path=None):
    ts = json.loads(doc_file(ts_path))
    s = doc_file(doc_path)
    loi = []
    lines = s.split("\n")
    bo = bo_qua_dong(lines, ts.get("bo_qua_tieu_de", []))
    # dòng nằm trong khối bảng sinh ra từ sim thì không kiểm bằng regex tham số (kiểm bằng so khối)
    trong_khoi = set()
    for m in KHOI.finditer(s):
        a = s.count("\n", 0, m.start(3))
        b = s.count("\n", 0, m.end(3))
        trong_khoi.update(range(a, b + 1))

    for ten, tp in ts["tham_so"].items():
        gt = tp.get("gia_tri_doc", tp["gia_tri"])
        for pat in tp.get("bat", []):
            rx = re.compile(pat)
            for i, ln in enumerate(lines):
                if i in bo or i in trong_khoi:
                    continue
                for m in rx.finditer(ln):
                    if not m.groups():
                        continue
                    try:
                        v = so(m.group(1))
                    except (ValueError, TypeError):
                        continue
                    if abs(v - float(gt)) > 1e-9:
                        loi.append("%s:%d tham số %s = %s nhưng doc ghi %s (\"%s\")" % (os.path.basename(doc_path), i + 1, ten, gt, m.group(1), ln.strip()[:70]))
        for pat in tp.get("cam", []):
            rx = re.compile(pat)
            for i, ln in enumerate(lines):
                if i in bo:
                    continue
                if rx.search(ln):
                    loi.append("%s:%d số cũ bị cấm cho %s: /%s/ (\"%s\")" % (os.path.basename(doc_path), i + 1, ten, pat, ln.strip()[:70]))

    if kq_path:
        kq = json.loads(doc_file(kq_path))
        for m in KHOI.finditer(s):
            ten = m.group(2)
            if ten not in kq["khoi"]:
                loi.append("khối %s không có trong ket-qua.json" % ten)
            elif m.group(3).strip() != kq["khoi"][ten].strip():
                loi.append("khối %s trong doc khác output sim (chạy lệnh ghi)" % ten)
        for m in BIEN.finditer(s):
            ten = m.group(2)
            if ten not in kq["bien"]:
                loi.append("biến %s không có trong ket-qua.json" % ten)
            elif m.group(3) != kq["bien"][ten]:
                loi.append("biến %s trong doc là \"%s\", sim in \"%s\" (chạy lệnh ghi)" % (ten, m.group(3), kq["bien"][ten]))
    print("| Kiểm | Kết quả |")
    print("|---|---|")
    print("| Tham số (%d) và số cũ bị cấm | %d lỗi |" % (len(ts["tham_so"]), sum(1 for e in loi if "tham số" in e or "số cũ" in e)))
    print("| Khối bảng và biến so với sim | %d lỗi |" % sum(1 for e in loi if "khối" in e or "biến" in e))
    for e in loi:
        print("  - " + e)
    return 1 if loi else 0


def selftest():
    d = tempfile.mkdtemp(prefix="economy-doc-")
    ts = {"tham_so": {"coin_moi_coin": {"gia_tri": 5, "bat": ["(\\d+) coin mỗi Coin"], "cam": ["\\bx 10\\b"]},
                      "uptake": {"gia_tri": 0.3, "gia_tri_doc": 30, "bat": ["(\\d+)% level"]}},
          "bo_qua_tieu_de": ["Phụ lục"]}
    kq = {"khoi": {"b": "| a |\n|---|\n| 1 |"}, "bien": {"x": "L13"}}
    tp, dp, kp = [os.path.join(d, n) for n in ("ts.json", "doc.md", "kq.json")]
    ghi_file(tp, json.dumps(ts, ensure_ascii=False))
    ghi_file(kp, json.dumps(kq, ensure_ascii=False))
    tot = "# T\nMỗi lần +5, 5 coin mỗi Coin; ads 30% level; mốc <!--v:x-->L13<!--/v-->.\n<!--khoi:b-->\n| a |\n|---|\n| 1 |\n<!--/khoi-->\n## Phụ lục\nbản cũ 10 coin mỗi Coin, trần x 10.\n"
    ghi_file(dp, tot)
    ok = True
    import io, contextlib

    def chay(*a):
        with contextlib.redirect_stdout(io.StringIO()) as o:
            r = kiem(*a)
        return r, o.getvalue()

    r, _ = chay(tp, dp, kp)
    print("doc đúng: %s" % ("qua" if r == 0 else "SAI (đáng ra phải qua)"))
    ok &= r == 0
    ghi_file(dp, tot.replace("5 coin mỗi Coin;", "10 coin mỗi Coin;").replace("30% level", "50% level"))
    r, out = chay(tp, dp, kp)
    bat = r == 1 and "10" in out and "50" in out
    print("doc có \"10 coin mỗi Coin\" và \"50%% level\" khi tham số là 5 và 30: %s" % ("bắt được" if bat else "KHÔNG BẮT ĐƯỢC"))
    ok &= bat
    ghi_file(dp, tot.replace("L13", "L16").replace("| 1 |\n<!--/khoi-->", "| 2 |\n<!--/khoi-->"))
    r, out = chay(tp, dp, kp)
    bat = r == 1 and "biến x" in out and "khối b" in out
    print("doc lệch sim (biến L16, bảng 2): %s" % ("bắt được" if bat else "KHÔNG BẮT ĐƯỢC"))
    ok &= bat
    ghi(dp, kp)
    r, _ = chay(tp, dp, kp)
    print("sau lệnh ghi: %s" % ("qua" if r == 0 else "SAI"))
    ok &= r == 0
    print("selftest %s" % ("XANH" if ok else "ĐỎ"))
    return 0 if ok else 1


def main():
    a = sys.argv[1:]
    if a and a[0] == "selftest":
        return selftest()
    if a and a[0] == "ghi" and len(a) == 3:
        return ghi(a[1], a[2])
    if a and a[0] == "kiem" and len(a) in (3, 4):
        return kiem(a[1], a[2], a[3] if len(a) == 4 else None)
    print(__doc__)
    return 2


if __name__ == "__main__":
    sys.exit(main())
