# -*- coding: utf-8 -*-
"""kiem_noi_dung.py - cổng kiểm data level cho mọi game: mật độ mechanic và đổi từ theo chủ đề.

Chạy (một dòng):
  python -I -X utf8 kiem_noi_dung.py --cfg cfg.json --levels sau.csv [--truoc truoc.csv] [--md bang.md]
  python -I -X utf8 kiem_noi_dung.py --selftest
Thoát 1 khi có lỗi chặn (vượt trần mật độ, từ thêm vào là từ cấm, từ thêm lạc chủ đề chưa được chấp nhận).

Hai cổng (rút từ game chữ V1, 20/10/2026):
1. MẬT ĐỘ. Cột mechanic: mỗi mechanic một phần, ngăn bằng ";" hoặc xuống dòng trong ô.
   - Dạng tỉ lệ "tên: tiến độ-tỉ lệ, ...": hàm bậc thang theo tiến độ.
   - Dạng số lượng (tên trong so_luong) "tên: tiến độ-số lượng, ...": mỗi mốc là số sinh trong đoạn, không cộng dồn;
     mật độ = tổng các đoạn x quan_moi_don_vi[tên] (mặc định 1) / tổng quân (hai game họ drop 22/10/2026).
   - Dạng "tên: n": số vật thể riêng, tính n / tổng quân.
   Ở MỌI mốc tiến độ: phần tỉ lệ tại mốc + phần số lượng cả ván; chặn <= tran_chan, tổng mọi mechanic <= tran_tong.
   Lỗi cũ bị bắt: thêm mechanic mới cộng dồn lên Lock/Ice/Link làm 95% quân mang mechanic.
2. ĐỔI TỪ THEO CHỦ ĐỀ (cần --truoc). So từng level trước và sau: mỗi từ thêm vào phải
   (a) không nằm trong danh sách cấm của kho từ (ảnh lỗi, ảnh quá chi tiết...),
   (b) thuộc một nhóm chủ đề chính của level TRƯỚC khi đổi (các nhóm lớn nhất phủ >= phu_chu_de số từ),
   (c) không có trong cua_so level liền trước (cảnh báo, không chặn).
   Lỗi cũ bị bắt: level nội thất nhận DOCK, PARK (địa điểm ngoài trời, ảnh chi tiết cao).
   Ngoại lệ có chủ ý ghi ở file chap_nhan (level, từ, lý do) thì hạ thành cảnh báo.
In bảng "từ bỏ -> từ thêm -> chủ đề" để soi mắt (--md), số trong bảng sinh từ chính file đo.

cfg.json (khóa và mặc định):
  cot_level "level", cot_tu "word_list", tach_tu ",", cot_mechanic "mechanic",
  tong_quan "chu" (tổng chữ của các từ) | "<tên cột>" | "so_tu",
  chan ["lock","ice","link"], dem_rieng ["coin"] (vật thể không chặn; dạng "tên: n", hoặc chuỗi: tên có trong so_luong thì cộng các đoạn,
  không có thì lấy số ở mốc cuối như cách ghi cộng dồn cũ), so_luong [] (tên đọc dạng tiến độ-số lượng),
  quan_moi_don_vi {} (ví dụ {"link2": 2, "link3": 3}: số quân mỗi dây), tran_chan 0.5, tran_tong 0.8,
  kho_tu "<csv: word, nhom, cam>" (cam khác rỗng = lý do cấm), phu_chu_de 0.5, cua_so 5,
  nguong_viet_lai 0.5 (đổi quá tỉ lệ này số từ = level viết lại: bỏ kiểm chủ đề, vẫn kiểm cấm),
  chap_nhan "<csv: level, tu, ly_do>" (tùy chọn). Đường dẫn tương đối tính từ thư mục chứa cfg.
"""
import argparse, csv, io, json, os, re, sys, time
from collections import Counter

MAC_DINH = {"cot_level": "level", "cot_tu": "word_list", "tach_tu": ",", "cot_mechanic": "mechanic",
            "tong_quan": "chu", "chan": ["lock", "ice", "link"], "dem_rieng": ["coin"],
            "tran_chan": 0.5, "tran_tong": 0.8, "kho_tu": None, "phu_chu_de": 0.5, "cua_so": 5,
            "chap_nhan": None, "nguong_viet_lai": 0.5, "so_luong": [], "quan_moi_don_vi": {}}


# ---------- đọc ----------
def doc_csv(path):
    """Giữ xuống dòng trong ô có ngoặc kép (ô mechanic nhiều dòng)."""
    text = open(path, encoding="utf-8-sig", newline="").read()
    dau = text.split("\n", 1)[0]
    if text and "," not in dau:  # dòng ghi chú đầu file nháp
        text = text.split("\n", 1)[1] if "\n" in text else ""
    return list(csv.DictReader(io.StringIO(text, newline="")))


def tu_cua(r, cfg):
    return [w.strip().upper() for w in r[cfg["cot_tu"]].split(cfg["tach_tu"]) if w.strip()]


def tong_quan(r, cfg):
    t = cfg["tong_quan"]
    ws = tu_cua(r, cfg)
    if t == "chu":
        return sum(len(w) for w in ws)
    if t == "so_tu":
        return len(ws)
    return float(r[t])


def tach_mechanic(chuoi):
    """'lock: 0-0.1,1-0.1; coin: 4' hoặc ngăn bằng xuống dòng -> [('lock', [(0,0.1),(1,0.1)]), ('coin', 4)]"""
    out = []
    for p in re.split(r"[;\n]", chuoi or ""):
        p = re.sub(r"\s*\([^)]*\)", "", p).strip()  # bỏ chú thích "(gợi ý ...)"
        if not p or ":" not in p:
            continue
        ten, v = p.split(":", 1)
        ten, v = ten.strip(), v.strip()
        if "-" in v:
            pts = sorted((float(a), float(b)) for a, b in (x.strip().split("-") for x in v.split(",") if x.strip()))
            out.append((ten, pts))
        else:
            out.append((ten, float(v)))
    return out


def gia_tri(pts, t):
    """Hàm bậc thang: giá trị giữ từ mốc này tới mốc kế."""
    v = 0.0
    for x, y in pts:
        if x <= t + 1e-12:
            v = y
    return v


# ---------- cổng 1: mật độ ----------
def mat_do(r, cfg):
    """Trả (chặn lớn nhất, tổng lớn nhất, mốc của tổng lớn nhất) qua mọi mốc tiến độ."""
    mech = tach_mechanic(r.get(cfg["cot_mechanic"], ""))
    n = tong_quan(r, cfg) or 1
    sl, dv = set(cfg.get("so_luong") or []), cfg.get("quan_moi_don_vi") or {}
    ti_le = [(ten, v) for ten, v in mech if isinstance(v, list) and ten not in sl and ten not in cfg["dem_rieng"]]
    moc = sorted({x for _, v in ti_le for x, _ in v} | {0.0, 1.0})
    # số lượng cả ván: tiến độ-số lượng thì cộng các đoạn; "tên: n" thì n; dem_rieng ngoài so_luong lấy số ở mốc cuối
    def dem(ten, v):
        if not isinstance(v, list):
            return v
        return sum(y for _, y in v) if ten in sl else v[-1][1]
    so = [(ten, dem(ten, v) * dv.get(ten, 1) / n) for ten, v in mech if ten in sl or ten in cfg["dem_rieng"] or not isinstance(v, list)]
    sl_chan = sum(x for ten, x in so if ten in cfg["chan"])
    sl_tong = sum(x for _, x in so)
    best = (0.0, 0.0, 0.0)
    for t in moc:
        chan = sum(gia_tri(v, t) for ten, v in ti_le if ten in cfg["chan"]) + sl_chan
        tong = sum(gia_tri(v, t) for _, v in ti_le) + sl_tong
        best = (max(best[0], chan), max(best[1], tong), t if tong >= best[1] else best[2])
    return best


def cong_mat_do(rows, cfg):
    loi = []
    for r in rows:
        c, t, moc = mat_do(r, cfg)
        if c > cfg["tran_chan"] + 1e-9 or t > cfg["tran_tong"] + 1e-9:
            loi.append({"level": r[cfg["cot_level"]], "chan": round(c, 3), "tong": round(t, 3), "moc": moc})
    return loi


# ---------- cổng 2: đổi từ theo chủ đề ----------
def doc_kho(path):
    return {r["word"].strip().upper(): r for r in doc_csv(path)}


def chu_de_chinh(ws, kho, phu):
    """Các nhóm lớn nhất, tối đa 3, phủ >= phu số từ."""
    dem = Counter(kho[w]["nhom"] for w in ws if w in kho)
    out, cong = [], 0
    for k, v in dem.most_common(3):
        out.append(k); cong += v
        if cong >= phu * len(ws):
            break
    return out


def doc_chap_nhan(path):
    if not path or not os.path.exists(path):
        return {}
    return {(r["level"].strip(), r["tu"].strip().upper()): r["ly_do"] for r in doc_csv(path)}


def bang_doi_tu(truoc, sau, cfg, kho):
    """Mỗi dòng: level, bỏ, thêm, nhóm từ thêm, chủ đề chính, kết luận, lý do."""
    tr = {r[cfg["cot_level"]]: tu_cua(r, cfg) for r in truoc}
    cn = doc_chap_nhan(cfg.get("chap_nhan"))
    ds = [(r[cfg["cot_level"]], tu_cua(r, cfg)) for r in sau]
    vi_tri = {lv: i for i, (lv, _) in enumerate(ds)}
    out = []
    for lv, ws in ds:
        cu = tr.get(lv)
        if cu is None:
            continue
        if len(cu) == len(ws):  # đổi tại chỗ: ghép theo vị trí
            cap_doi = [(a, b) for a, b in zip(cu, ws) if a != b and b not in cu]
        else:
            bo_ = [w for w in cu if w not in ws]; th_ = [w for w in ws if w not in cu]
            cap_doi = [(bo_[k] if k < len(bo_) else "", w) for k, w in enumerate(th_)]
        if not cap_doi:
            continue
        viet_lai = len(cap_doi) > cfg.get("nguong_viet_lai", 0.5) * len(cu)  # đổi quá nửa level: chủ đề mới là chủ ý
        cd = chu_de_chinh(cu, kho, cfg["phu_chu_de"])
        i = vi_tri[lv]
        gan = {w for _, ws2 in ds[max(0, i - cfg["cua_so"]):i] for w in ws2}
        for bo1, w in cap_doi:
            x = kho.get(w, {})
            ly, muc = ([], "ok") if not viet_lai else (["viết lại level, bỏ qua kiểm chủ đề"], "ok")
            if not x:
                ly.append("không có trong kho từ"); muc = "chặn"
            elif (x.get("cam") or "").strip():
                ly.append("cấm: " + x["cam"].strip()); muc = "chặn"
            if x and not viet_lai and x.get("nhom") not in cd:
                ly.append(f"lạc chủ đề ({x.get('nhom')})"); muc = "chặn" if muc != "chặn" else muc
            if w in gan:
                ly.append(f"lặp trong {cfg['cua_so']} level trước")
                muc = "cảnh báo" if muc == "ok" else muc
            if muc == "chặn" and (str(lv), w) in cn:
                muc = "chấp nhận"; ly.append("chấp nhận: " + cn[(str(lv), w)])
            out.append({"level": lv, "bo": bo1, "them": w, "nhom_them": x.get("nhom", ""),
                        "chu_de": ", ".join(cd), "ket_luan": muc, "ly_do": "; ".join(ly)})
    return out


def chon_tu_thay(bo, ws, kho, cfg, gan=(), cap=frozenset(), do_dai=1, dung=None):
    """Luật đổi từ theo chủ đề (dùng khi DỰNG): ứng viên thuộc chủ đề chính của level, không cấm,
    không tạo cặp nhầm, lệch độ dài <= do_dai; ưu tiên không lặp level gần, ít dùng."""
    cd = chu_de_chinh(ws, kho, cfg["phu_chu_de"])
    s = set(ws); dung = dung or Counter()
    ung = sorted((w in gan, abs(len(w) - len(bo)), dung[w], w) for w, x in kho.items()
                 if w not in s and not (x.get("cam") or "").strip() and x.get("nhom") in cd
                 and abs(len(w) - len(bo)) <= do_dai and not any(frozenset((w, o)) in cap for o in s if o != bo))
    return ung[0][-1] if ung else None


# ---------- bảng markdown sinh từ file đo ----------
def bang_md(rows, cols, tieu_de=None):
    tieu_de = tieu_de or cols
    out = ["| " + " | ".join(tieu_de) + " |", "|" + "---|" * len(cols)]
    for r in rows:
        out.append("| " + " | ".join(str(r.get(c, "")) for c in cols) + " |")
    return "\n".join(out)


def nguon(*paths):
    return "Sinh lúc " + time.strftime("%d/%m/%Y %H:%M") + " từ " + ", ".join(
        f"`{os.path.basename(p)}` ({time.strftime('%H:%M:%S', time.localtime(os.path.getmtime(p)))})" for p in paths)


# ---------- chạy ----------
def chay(cfg, levels, truoc=None, md=None):
    sau = doc_csv(levels)
    loi_md = cong_mat_do(sau, cfg)
    dong = bang_doi_tu(doc_csv(truoc), sau, cfg, doc_kho(cfg["kho_tu"])) if truoc and cfg.get("kho_tu") else []
    chan = [d for d in dong if d["ket_luan"] == "chặn"]
    mx = max((mat_do(r, cfg) for r in sau), key=lambda x: x[1], default=(0, 0, 0))
    tom = (f"MẬT ĐỘ: {len(sau)} level, chặn lớn nhất {mx[0]:.3f} (trần {cfg['tran_chan']}), "
           f"tổng lớn nhất {mx[1]:.3f} (trần {cfg['tran_tong']}), vượt {len(loi_md)}"
           + (f" | ĐỔI TỪ: {len(dong)} từ thêm, chặn {len(chan)}, chấp nhận "
              f"{sum(d['ket_luan'] == 'chấp nhận' for d in dong)}, cảnh báo {sum(d['ket_luan'] == 'cảnh báo' for d in dong)}"
              if truoc else ""))
    if md:
        phan = ["# Bảng kiểm data level (sinh bằng máy, không sửa tay)", "", nguon(*[p for p in (levels, truoc) if p]), "",
                tom, "", "## Vượt trần mật độ", "",
                bang_md(loi_md, ["level", "chan", "tong", "moc"], ["Level", "Chặn", "Tổng", "Mốc tiến độ"]) if loi_md else "Không có.",
                ""]
        if truoc:
            phan += ["## Từ bỏ -> từ thêm -> chủ đề (soi mắt)", "",
                     bang_md(dong, ["level", "bo", "them", "nhom_them", "chu_de", "ket_luan", "ly_do"],
                             ["Level", "Bỏ", "Thêm", "Nhóm từ thêm", "Chủ đề chính", "Kết luận", "Lý do"]) if dong else "Không đổi từ.", ""]
        open(md, "w", encoding="utf-8").write("\n".join(phan))
    print(tom)
    for x in loi_md:
        print(f"  VƯỢT TRẦN L{x['level']}: chặn {x['chan']}, tổng {x['tong']} (mốc {x['moc']})")
    for d in chan:
        print(f"  CHẶN L{d['level']}: {d['bo']} -> {d['them']} ({d['ly_do']})")
    return 1 if loi_md or chan else 0


def selftest():
    import tempfile
    d = tempfile.mkdtemp()
    def ghi(ten, rows, cols):
        p = os.path.join(d, ten)
        with open(p, "w", newline="", encoding="utf-8") as f:
            w = csv.DictWriter(f, fieldnames=cols); w.writeheader(); w.writerows(rows)
        return p
    kho = ghi("kho.csv", [{"word": w, "nhom": n, "cam": c} for w, n, c in [
        ("BED", "noi_that", ""), ("SOFA", "noi_that", ""), ("LAMP", "noi_that", ""), ("RUG", "noi_that", ""),
        ("TUB", "noi_that", ""), ("BIN", "noi_that", ""), ("PORCH", "dia_diem", ""), ("ROOF", "dia_diem", ""),
        ("DOCK", "dia_diem", "ảnh mức 3"), ("PARK", "dia_diem", "ảnh mức 3"), ("EMOJI", "do_vat", "")]],
        ["word", "nhom", "cam"])
    cfg = dict(MAC_DINH, kho_tu=kho, cua_so=1)
    cols = ["level", "word_list", "mechanic"]
    # ca 95%: lock 0,25 + link 0,25 + quân che 0,2 + giỏ 0,2 + coin 4 trên 80 quân
    l95 = ghi("l95.csv", [{"level": "1", "word_list": "BED, SOFA", "mechanic": "lock: 0-0.15,0.4-0.25,1-0.25; "
           "link: 0-0.15,0.4-0.25,1-0.25; hidden: 0-0,0.2-0.2,1-0.2; khay 3: 0-0,0.2-0.2,1-0.2; coin: 0.315"}], cols)
    cfg95 = dict(cfg, chan=["lock", "ice", "link", "hidden"], tong_quan="so_tu")
    r95 = cong_mat_do(doc_csv(l95), cfg95)
    ok1 = len(r95) == 1 and r95[0]["tong"] >= 0.9 and r95[0]["chan"] > 0.5
    # bậc thang: mốc 0.4 phải đọc giá trị 0.25, không phải 0.15
    ok2 = abs(gia_tri([(0, .15), (.4, .25), (1, .25)], 0.4) - 0.25) < 1e-9 and abs(gia_tri([(0, .15), (.4, .25)], .39) - .15) < 1e-9
    # ca L37: nội thất nhận DOCK, PARK, EMOJI thay PORCH, ROOF, LAMP
    tr = ghi("tr.csv", [{"level": "37", "word_list": "BED, SOFA, LAMP, RUG, PORCH, ROOF", "mechanic": ""}], cols)
    sa = ghi("sa.csv", [{"level": "37", "word_list": "BED, SOFA, EMOJI, RUG, DOCK, PARK", "mechanic": ""}], cols)
    dong = bang_doi_tu(doc_csv(tr), doc_csv(sa), cfg, doc_kho(kho))
    kl = {x["them"]: x["ket_luan"] for x in dong}
    ok3 = kl == {"EMOJI": "chặn", "DOCK": "chặn", "PARK": "chặn"}
    # ca đúng: BIN, TUB cùng chủ đề thì qua
    sa2 = ghi("sa2.csv", [{"level": "37", "word_list": "BED, SOFA, LAMP, RUG, BIN, TUB", "mechanic": ""}], cols)
    ok4 = all(x["ket_luan"] == "ok" for x in bang_doi_tu(doc_csv(tr), doc_csv(sa2), cfg, doc_kho(kho)))
    # luật chọn từ thay: bỏ PORCH thì chọn từ nội thất, không chọn DOCK
    ok5 = chon_tu_thay("PORCH", ["BED", "SOFA", "LAMP", "RUG", "PORCH", "ROOF"], doc_kho(kho), cfg, do_dai=2) in ("BIN", "TUB")
    # dạng số lượng (game chữ 22/10): ô nhiều dòng, link3 tính 3 quân mỗi dây, coin cộng các đoạn
    cfg_sl = dict(cfg, chan=["lock", "ice", "link2", "link3", "stone"], so_luong=["lock", "ice", "link2", "link3", "coin"],
                  quan_moi_don_vi={"link2": 2, "link3": 3}, tong_quan="so_tu")
    sl_dat = ghi("sl1.csv", [{"level": "1", "word_list": ", ".join(["BED"] * 100), "mechanic":
             "lock: 0-3,0.15-3,0.4-5\nlink2: 0-2,0.15-2,0.4-2\nlink3: 0-0,0.15-1,0.4-2\nstone: 0-0,0.2-0.05,1-0.05\n"
             "coin: 0-2,0.15-2,0.4-3 (gợi ý)"}], cols)
    m1 = mat_do(doc_csv(sl_dat)[0], cfg_sl)  # chặn = (11 + 12 + 9) / 100 + 0,05 = 0,37; tổng thêm coin 7 / 100
    sl_vuot = ghi("sl2.csv", [{"level": "2", "word_list": ", ".join(["BED"] * 100), "mechanic":
              "lock: 0-20,0.1-20\nlink3: 0-0,0.3-5"}], cols)
    ok6 = abs(m1[0] - 0.37) < 1e-9 and abs(m1[1] - 0.44) < 1e-9 and len(cong_mat_do(doc_csv(sl_vuot), cfg_sl)) == 1
    kq = [("cổng mật độ bắt bản 95% quân mang mechanic", ok1), ("đọc hàm bậc thang đúng mốc", ok2),
          ("dạng tiến độ-số lượng: ô nhiều dòng, đếm theo quân, bắt bản 55%", ok6),
          ("đổi từ bắt DOCK, PARK, EMOJI lạc chủ đề và ảnh cấm", ok3), ("đổi từ cho qua BIN, TUB cùng chủ đề", ok4),
          ("chọn từ thay theo chủ đề chính", ok5)]
    for t, k in kq:
        print(("  ĐẠT " if k else "  HỎNG ") + t)
    return 0 if all(k for _, k in kq) else 1


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--cfg"); ap.add_argument("--levels"); ap.add_argument("--truoc"); ap.add_argument("--md")
    ap.add_argument("--selftest", action="store_true")
    a = ap.parse_args()
    if a.selftest:
        sys.exit(selftest())
    cfg = dict(MAC_DINH, **json.load(open(a.cfg, encoding="utf-8")))
    goc = os.path.dirname(os.path.abspath(a.cfg))
    for k in ("kho_tu", "chap_nhan"):
        if cfg.get(k) and not os.path.isabs(cfg[k]):
            cfg[k] = os.path.join(goc, cfg[k])
    sys.exit(chay(cfg, a.levels, a.truoc, a.md))


if __name__ == "__main__":
    main()
