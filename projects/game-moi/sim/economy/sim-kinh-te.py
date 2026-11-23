# -*- coding: utf-8 -*-
"""Sim kinh tế và tiến trình The Novent (GD-028, đợt 9 GD-055). Một lệnh in lại mọi bảng số của GDD kinh tế.

  python projects/game-moi/sim/economy/sim-kinh-te.py            in tóm tắt, ghi ket-qua.json
  python projects/game-moi/sim/economy/sim-kinh-te.py --ghi      như trên rồi đưa bảng vào GDD (economy_doc.py ghi)
  python projects/game-moi/sim/economy/sim-kinh-te.py --do       dò β cho kịch bản trung bình 1 người
  python projects/game-moi/sim/economy/sim-kinh-te.py --tab      in lại tab ECONOMIC bản đọc (gdd/sheet/ECONOMIC.tsv)
  python projects/game-moi/sim/economy/sim-kinh-te.py --selftest tự kiểm

Đầu vào: tham-so.json (cùng thư mục), các bảng của gd-items trong vat-pham.md (ITEM, REPAIR, NODE, SPECIES, UPG),
sim chuyến và sim ca cảng của gd-tech (tools/ket-qua/sim-chuyen.md, sim-ca-cang.md). Kiểu danh mục đo bằng do-danh-muc.mjs.
Mô hình ở mức giá trị: lượng nhặt tính bằng GTĐ, ca cảng bán theo thùng (1 kiện = 2,5 thùng), giá thùng theo bậc giá.
"""
import io
import json
import math
import os
import random
import re
import statistics
import subprocess
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", "..", "..", ".."))
GDD = os.path.join(ROOT, "projects", "game-moi", "gdd", "he-thong", "kinh-te-tien-trinh.md")
TS = json.load(open(os.path.join(HERE, "tham-so.json"), encoding="utf-8"))
S = TS["sim"]
TRUC = ["OXY", "TUI", "VO", "DAY", "DUNGCU"]
TEN_TRUC = {"OXY": "T-OXY dung lượng Oxy", "TUI": "T-TUI sức chứa túi", "VO": "T-VO cấp môi trường", "DAY": "T-DAY bộ đẩy", "DUNGCU": "T-DUNGCU số ô dụng cụ",
            "DUNGCU_KHAI_THAC": "Dụng cụ (UPG-MIN, UPG-HAR, UPG-NET)", "KHOANG_CAP": "Nâng cấp khoang", "BPR": "Bản thiết kế ở Shop", "CANG_2": "Nâng cấp cảng"}


# ---------- đọc bảng của gd-items ----------
def bang(md, ten):
    m = re.search(r"<!--B:%s-->(.*?)<!--/B:%s-->" % (ten, ten), md, re.S)
    if not m:
        raise SystemExit("thiếu bảng B:%s trong vat-pham.md" % ten)
    dong = [l.strip() for l in m.group(1).strip().splitlines() if l.strip().startswith("|")]
    dau = [c.strip() for c in dong[0].strip("|").split("|")]
    return [dict(zip(dau, [c.strip() for c in l.strip("|").split("|")])) for l in dong[2:]]


def so(x):
    try:
        return float(str(x).replace(",", "."))
    except ValueError:
        return None


VP = open(os.path.join(ROOT, S["vat_pham_md"]), encoding="utf-8").read()
ITEM = {r["Item ID"]: r for r in bang(VP, "ITEM")}
GTD = {k: so(v["GTĐ"]) for k, v in ITEM.items()}
REPAIR = bang(VP, "REPAIR")
NODE = bang(VP, "NODE")


def chuong_cua(ghi_chu):
    m = re.search(r"Chương (\d)", ghi_chu)
    return int(m.group(1)) if m else 1


VAT_LIEU_SUA = [0.0] * 5  # GTĐ vật liệu sửa khoang và động cơ theo chương (không gồm ENG)
for r in REPAIR:
    VAT_LIEU_SUA[chuong_cua(r["Ghi chú"]) - 1] += so(r["Σ GTĐ"])
VAT_LIEU_SUA_GOC = list(VAT_LIEU_SUA)
VAT_LIEU_SUA = [x * h for x, h in zip(VAT_LIEU_SUA, S["he_so_vat_lieu_sua_de_xuat"])]

# Mật độ GTĐ mỗi Khối theo dải: trung bình bảng NODE (map tổng, không tính nhánh)
MAT_DO = {}
for d in ("Gần", "Giữa", "Xa"):
    ds = [so(n["GTĐ mỗi Khối"]) for n in NODE if n["Dải"] == d]
    MAT_DO[d] = sum(ds) / len(ds)
# Món đắt nhất một đơn vị mỗi dải (giữ 1 món khi ngạt), không tính mẫu boss một lần
MON_MAX = {}
for d in ("Gần", "Giữa", "Xa"):
    MON_MAX[d] = max(GTD[k] for k, v in ITEM.items() if v["Dải"] == d and k[:3] in ("RES", "SMP") and GTD[k] and v["Độ hiếm"] != "Đặc biệt")
# Kiện trung bình theo dải (kiện thô và tinh, không tính kiện sống, dữ liệu)
KIEN = {}
for d in ("Gần", "Giữa", "Xa"):
    rieng = {k for ks in S["kien_theo_chuong"].values() for k in ks}
    ds = [GTD[k] for k, v in ITEM.items() if k.startswith("CGO-") and v["Dải"] == d and GTD[k] and k not in ("CGO-121", "CGO-221", "CGO-321", "CGO-131", "CGO-141", "CGO-421") and k not in rieng]  # bỏ lồng sống, dữ liệu, vật tư, tin mật khỏi trung bình kiện hàng
    KIEN[d] = sum(ds) / len(ds)
KIEN_THO = statistics.mean(GTD[k] for k in ("CGO-101", "CGO-102", "CGO-103", "CGO-104", "CGO-105", "CGO-109"))  # đơn chương 1 chỉ đòi kiện thô (HC01, HC02, HC05, HC10)


# Lãi nuôi một ô một ngày: sản phẩm nuôi trừ thức ăn của dải (vat-pham.md)
LAI_NUOI = {d: GTD[b] - GTD[fd] for d, b, fd in S["nuoi_dai"]}
# Ca cảng khung Dave (sim ca cảng gd-tech, mục 4): theo số người N và trễ phản xạ, số tàu, cửa neo, phần tàu xong, giây một ca,
# phần tip trong Tally, điểm cảng mỗi tàu phục vụ xong. Kịch bản tệ, trung bình, tốt ứng với trễ 3, 2, 1 giây (tham-so.json ca_cang).
PORT = {}
_pc = os.path.join(ROOT, S["sim_ca_cang_gd_tech"])
for _m in re.finditer(r"^\| (\d) \| (\d) \| (\d+) \| (\d) giây \| ([\d,]+) \(\d+%\) \| [\d,]+ \| (\d+) \| \d+% \| \d+ \| (\d+)% \| (\d+) \| \d+% \|", open(_pc, encoding="utf-8").read(), re.M):
    _n, _tre, _tau, _xong = int(_m.group(1)), int(_m.group(4)), int(_m.group(3)), so(_m.group(5))
    PORT[(_n, _tre)] = {"tau": _tau, "cua": int(_m.group(2)), "xong": _xong / _tau, "giay": int(_m.group(6)), "tip": int(_m.group(7)) / 100, "diem_tau": int(_m.group(8)) / _xong}
if len(PORT) < 12:
    raise SystemExit("sim-ca-cang.md mục 4 thiếu dòng (cần N 1 tới 4, trễ 1 tới 3), đọc được %d" % len(PORT))


def port(N, kb):
    return PORT[(N, S["ca_cang"]["tre_theo_kich_ban"][kb])]


PHUT_CA = {c: port(1, "trung bình")["giay"] / 60 for c in range(1, 6)}  # shortcut: sim ca cảng chỉ có chương 1, chương sau dùng cùng số. Đo lại khi gd-quan đặt tàu chương 2 tới 5

# Phút và GTĐ một chuyến (trung bình, một người, gồm Driftlife). Ưu tiên sim chuyến gd-tech khi cột Bình khớp thang hiện hành,
# không khớp thì dùng số dự phòng trong tham-so.json (gd-world chạy cùng sim trên bản sao tham số, map.md mục 3.9).
TECH, NGUON_CHUYEN = {}, {}
_pt = os.path.join(ROOT, S["sim_chuyen_gd_tech"])
if os.path.exists(_pt):
    for _m in re.finditer(r"^\| (\d) \| [^|]+ \| (\d+) \| trung bình \| 1 \| ([\d,]+)[^|]*\| ([\d,]+) \|", open(_pt, encoding="utf-8").read(), re.M):
        _c = int(_m.group(1))
        if int(_m.group(2)) == S["oxy_theo_bac"][_c - 1]:
            TECH[_c] = (so(_m.group(3)), so(_m.group(4)))
            NGUON_CHUYEN[_c] = "sim chuyến gd-tech"
# GTĐ mỗi người một chuyến theo (chương, kịch bản, số người), sim chuyến gd-tech, dùng cho kho thùng sau hai chuyến
TRIP = {}
if os.path.exists(_pt):
    for _m in re.finditer(r"^\| (\d) \| [^|]+ \| (\d+) \| (tệ|trung bình|tốt) \| (\d) \| [^|]+ \| ([\d,]+) \|", open(_pt, encoding="utf-8").read(), re.M):
        if int(_m.group(2)) == S["oxy_theo_bac"][int(_m.group(1)) - 1]:
            TRIP[(int(_m.group(1)), _m.group(3), int(_m.group(4)))] = so(_m.group(5))
# Mỗi người so với một mình theo số người (cột "Mỗi người so với một mình" của sim chuyến gd-tech)
MOI_NGUOI = {}
if os.path.exists(_pt):
    for _m in re.finditer(r"^\| (\d) \| [^|]+ \| (\d+) \| trung bình \| (\d) \|(?:[^|]*\|){5}\s*(\d+)% \|", open(_pt, encoding="utf-8").read(), re.M):
        if int(_m.group(2)) == S["oxy_theo_bac"][int(_m.group(1)) - 1]:
            MOI_NGUOI[(int(_m.group(1)), int(_m.group(3)))] = int(_m.group(4)) / 100
for _c, (_p, _g) in S["chuyen_du_phong"]["so"].items():
    if int(_c) not in TECH:
        TECH[int(_c)] = (_p, _g)
        NGUON_CHUYEN[int(_c)] = S["chuyen_du_phong"]["nguon"]


def he_so_tech(c):  # GTĐ gd-tech chia GTĐ túi đầy của mô hình này, 1 nếu không dùng
    if not S["dung_gtd_gd_tech"] or c not in TECH:
        return 1.0
    dai = S["dai_theo_chuong"][c - 1]
    return TECH[c][1] / (S["tui_theo_bac"][c - 1] * MAT_DO[dai] * S["he_so_mat_do_them"][c - 1] * S["kich_ban"]["trung bình"]["day_tui"])


# ---------- giá (Shop là bảng giá duy nhất) ----------
def tron(x):
    if x < 100:
        return int(5 * round(x / 5))
    if x < 1000:
        return int(10 * round(x / 10))
    return int(50 * round(x / 50))


def phut_ngay_tham_chieu(c):  # c từ 1: 2 chuyến đo được, ca cảng, chuẩn bị và cuối ngày
    return 2 * (TECH[c][0] if c in TECH else 0.85 * S["oxy_theo_bac"][c - 1] / 60) + PHUT_CA[c] + S["phut_chuan_bi_cuoi_ngay"]


def ngay_muc_tieu(c):
    return S["gio_muc_tieu_chuong"][c - 1] * 60 / phut_ngay_tham_chieu(c)


# ---------- giá thùng theo bậc giá (Shop là bảng giá duy nhất) ----------
GT = S["gia_thung"]
THUNG = S["ca_cang"]["thung_moi_kien"]
SPECIES = bang(VP, "SPECIES")


def bac_gia(cgo):
    return GT["bac"][GT["kien"][cgo]]


def gia_thung(cgo):  # Tally một thùng: GTĐ thùng x 10 x hệ số bậc, tròn số chẵn để giá kiện là số nguyên
    return int(2 * round(GTD[cgo] / THUNG * S["tally_moi_gtd"] * bac_gia(cgo)["he_so"] / 2))


def gia_kien(cgo):
    return int(gia_thung(cgo) * THUNG)


NGUYEN_CAI = ("CGO-131", "CGO-421")  # Lead 2026-11-20: bán nguyên cái, một cái là một đơn vị bán, giá bằng giá kiện


def gia_long(sp):  # lồng không chia: GTĐ mẫu sống x 10 x hệ số Hàng sống, tròn 5
    cgo = {"Gần": "CGO-121", "Giữa": "CGO-221", "Xa": "CGO-321"}[sp["Dải"]]
    return int(5 * round(so(sp["GTĐ mẫu bắt"]) * S["tally_moi_gtd"] * bac_gia(cgo)["he_so"] / 5))


LONG_MVP = [sp for sp in SPECIES if sp["Bắt"] == "Sống (LIV)" and sp["Nhãn"] == "MVP"]
GIA_LONG_TB = statistics.mean(gia_long(sp) for sp in LONG_MVP)
GTD_LONG_TB = statistics.mean(so(sp["GTĐ mẫu bắt"]) for sp in LONG_MVP)


def gia_don_vi(cgo):  # (Tally, GTĐ) một đơn vị bán: thùng, hoặc lồng loài MVP trung bình
    if cgo in ("CGO-121", "CGO-221", "CGO-321"):
        return GIA_LONG_TB, GTD_LONG_TB
    return gia_thung(cgo), GTD[cgo] / THUNG


def chi_so_gia(kb):  # Tally trên (GTĐ x 10) của danh mục đại diện của kịch bản: 1,0 là giá cũ một GTĐ 10 Tally
    dm = S["danh_muc_kich_ban"][kb]
    return sum(q * gia_don_vi(k)[0] for k, q in dm.items()) / sum(q * gia_don_vi(k)[1] * S["tally_moi_gtd"] for k, q in dm.items())


def he_so_tip(N, kb):  # Tally ca chia Tally giá thùng: tip là phần p của Tally ca nên nhân 1 / (1 - p)
    return 1 / (1 - port(N, kb)["tip"])


def thu_nhap_tham_chieu(c):  # Tally một ngày: 2 chuyến đầy túi bậc theo chương, bán hết theo chỉ số giá và tip của kịch bản trung bình
    dai = S["dai_theo_chuong"][c - 1]
    return 2 * S["tui_theo_bac"][c - 1] * MAT_DO[dai] * S["he_so_mat_do_them"][c - 1] * he_so_tech(c) * S["tally_moi_gtd"] * chi_so_gia("trung bình") * he_so_tip(1, "trung bình")


def ngan_sach(c, beta=None):  # tổng giá Tally mọi thứ mở ở chương c
    return (beta or S["beta_ngan_sach"]) * ngay_muc_tieu(c) * thu_nhap_tham_chieu(c)


def kien_tb(c):
    rieng = [GTD[k] for k in S["kien_theo_chuong"].get(str(c), []) if GTD.get(k)]
    if rieng:
        return statistics.mean(rieng)
    return KIEN_THO if c == 1 else KIEN[S["dai_theo_chuong"][c - 1]]


def gtd_thung(c):  # GTĐ trung bình một đơn vị bán của chương
    return kien_tb(c) / THUNG


def vat_lieu_nang_cap(bac):  # bậc theo nguoi-choi.md 1..4, công thức gd-items 25 x 1,8^(bậc vat-pham - 2), bậc vat-pham = bậc nguoi-choi + 1
    return 25 * 1.8 ** (bac - 1)


UPG = bang(VP, "UPG")
TRUC_UPG = {"OXY": "OXY", "BAG": "TUI", "THR": "DAY", "ENV": "VO", "RACK": "DUNGCU", "MIN": "DUNGCU_KHAI_THAC", "HAR": "DUNGCU_KHAI_THAC", "NET": "DUNGCU_KHAI_THAC"}


def chuong_mo(txt):
    m = re.search(r"[Cc]hương (\d)", txt)
    return int(m.group(1)) if m else None


def danh_sach_mua(beta=None):
    """Mọi thứ mua bằng Tally. Nâng cấp lấy từ bảng UPG của gd-items (ID, bậc, vật liệu, chương mở). Giá chia ngân sách chương theo tỉ lệ."""
    hang = []
    for u in UPG:
        uid = u["Nâng cấp"]
        c = chuong_mo(u["Mở bằng"]) or S["chuong_mo_thieu"][uid]
        hang.append({"id": uid, "ten": uid, "c": c, "loai": TRUC_UPG[uid.split("-")[1]], "bac": int(u["Bậc"]), "vl": so(u["Σ GTĐ vào"]),
                     "mien_phi": "Quest" in u["Mở bằng"], "nhan": u["Nhãn"], "mo": u["Mở bằng"]})
    for uid, ten, loai, c in S["mua_them"]:
        hang.append({"id": uid, "ten": ten, "c": c, "loai": loai, "bac": 0, "vl": 0.0, "mien_phi": False, "nhan": "MVP" if c == 1 else "Sau MVP", "mo": "Shop" if loai in ("BPR", "CANG_2") else "Xưởng"})
    for c in range(1, 5):
        hang.append({"id": "ENG-10%d" % c, "ten": "Linh kiện động cơ", "c": c, "loai": "ENG", "bac": c, "vl": 0.0, "mien_phi": False, "nhan": "MVP" if c == 1 else "Sau MVP",
                     "mo": "Shop, cần Hạng cảng %d" % S["hang_mo_eng"][c - 1]})
    for c in range(1, 6):
        ds = [h for h in hang if h["c"] == c and not h["mien_phi"]]
        # thứ ngoài chia (ví dụ KH11-C3) lấy giá theo đơn giá một phần trọng số của chương nhưng không vào W, để giá thứ khác của chương giữ nguyên
        W = sum(S["ti_le_gia"][h["loai"]] for h in ds if h["id"] not in S["ngoai_chia_ngan_sach"])
        for h in ds:
            h["gia"] = tron(ngan_sach(c, beta) * S["ti_le_gia"][h["loai"]] / W)
    cx = S["cong_xuong_cap_2"]
    for h in hang:
        if h["loai"] in TRUC and h["bac"] >= cx["tu_bac"]:
            h["can"] = cx["id"]
            if h["bac"] == cx["tu_bac"]:  # bậc cao hơn mở ở chương sau, Xưởng cấp 2 đã có
                h["mo"] += ", cần Xưởng cấp 2"
    for h in hang:
        if h["mien_phi"]:
            h["gia"] = 0
    return hang


# ---------- một lần chạy ----------
def chay(kb, N, rng, beta=None, giu_mon=1, ghi_ngay=False, nguong=None):
    NGUONG = nguong or S["nguong_hang"]
    K = S["kich_ban"][kb]
    P = port(N, kb)
    gia_gtd = S["tally_moi_gtd"] * chi_so_gia(kb) * he_so_tip(N, kb)  # Tally một GTĐ bán ở ca, gồm tip
    mua = sorted(danh_sach_mua(beta), key=lambda m: (m["c"], 0 if m["loai"] in S["uu_tien_mua"] or m["id"] in S["uu_tien_mua"] else 1))
    da_mua = set()
    bac = {t: 0 for t in TRUC}
    tally = 0.0
    kho = 0.0  # GTĐ trong kho, dải hiện tại
    diem = 0.0
    hang = 1
    phut = 0.0
    ngay = 0
    c = 1
    moc = []
    nhat_ca_game = 0.0
    tally_thu = 0.0
    tally_tip = 0.0
    ban_ch1 = []  # thùng bán mỗi ca chương 1
    tally_chi = {}
    mat_ngat = 0.0
    nhat_ch1 = 0.0
    dong = []
    chuyen_nhanh = S["chuyen_nhanh_theo_chuong"][0]
    sua_con = VAT_LIEU_SUA[0]
    vot_con = S["nguoi_vot_theo_chuong"][0]
    cang_mo = False
    cang_xong = None  # ngày sửa xong 5 khoang chương 1
    ca_day = False
    ngay_dau_chuong = 1
    while c <= 5 and ngay < 400:
        ngay += 1
        i = c - 1
        dai = S["dai_theo_chuong"][i]
        oxy = S["oxy_theo_bac"][bac["OXY"]]
        ra, ve = S["bay_ra_ve_giay"][i]
        lam = oxy * (1 - S["du_tru_ve"] - S["du_tru_don"]) - ra - ve
        mat_do = MAT_DO[dai] * S["he_so_mat_do_them"][i] * K["mat_do"]
        # tốc độ nhặt thực: túi bậc 0 đầy ở 65% thời gian làm việc chương 1, các dải sau nhân theo mật độ
        r = S["tui_theo_bac"][0] * MAT_DO["Gần"] / (S["ti_le_lam_viec_khi_day_tui"] * S["giay_lam_viec_ch1_tham_chieu"]) * (mat_do / MAT_DO["Gần"])
        tui = S["tui_theo_bac"][bac["TUI"]]
        thieu_vo = bac["VO"] < i  # dải Giữa cần VO 1, Xa cần 2, Cradle và Rig cần 3
        if i >= 3:
            thieu_vo = bac["VO"] < 3
        he_vo = S["he_so_thieu_vo"] if thieu_vo else 1.0
        mot_nguoi = min(tui * mat_do * K["day_tui"], lam * r * he_vo) * he_so_tech(c)
        p_ngat = K["p_ngat"] * (S["giam_ngat_coop"] if N > 1 else 1.0)
        nhat = 0.0
        for t in range(2):
            he = S["nang_suat_chuyen_nhanh"] if chuyen_nhanh > 0 and t == 0 else 1.0
            if chuyen_nhanh > 0 and t == 0:
                chuyen_nhanh -= 1
            for _ in range(N):
                y = mot_nguoi * he * MOI_NGUOI.get((c, N), (1 + S["k_coop"][c - 1] * (N - 1)) / N)
                if rng.random() < p_ngat:
                    giu = min(y, giu_mon * MON_MAX[dai])
                    mat_ngat += y - giu
                    y = giu
                nhat += y
        if c == 1:
            nhat_ch1 += nhat
        # nuôi (chương 2 trở đi): lãi ròng sản phẩm nuôi trừ thức ăn, mỗi ô mỗi ngày
        nuoi = S["o_nuoi_theo_chuong"][i] * LAI_NUOI[dai]
        nhat += nuoi
        nhat_ca_game += nhat
        kho += nhat
        # người vớt tỉnh sau một đêm, mỗi người giữ tiến trình một ngày
        if vot_con > 0:
            vot_con -= 1
        # xây: sửa khoang chương này trước
        dung = min(kho, sua_con)
        sua_con -= dung
        kho -= dung
        # lịch tàu sinh đầu ngày (log GDM 111): cảng sửa xong hôm nay thì ca đầu ở ngày sau, sớm nhất ngày 5
        if c == 1 and cang_xong is None and sua_con <= VAT_LIEU_SUA[0] - S["vl_mo_cang_ch1"]:  # đủ 5 khoang chương 1
            cang_xong = ngay
        if c == 1 and not cang_mo and cang_xong is not None and ngay > cang_xong and ngay >= S["ngay_mo_cang_ch1"]:
            cang_mo = True
            ca_day = True
        if c > 1:
            cang_mo = True
        # ca cảng
        phut_ca = 0.0
        thu = ban = 0.0
        la_ca_day = cang_mo and ca_day
        if la_ca_day:
            # ca dạy (tram-va-cang.md luật 67): 2 tàu Loose Bolt chỉ gọi thùng phế liệu, 1 tàu nếu kho chỉ đủ 1 thùng
            CD = S["ca_day"]
            ban = float(min(CD["tau"], int(kho / (GTD["CGO-101"] / THUNG))))
            ca_day = ban == 0  # kho không có phế liệu thì nút Mở ca xám, ca dạy dời sang ngày sau
            kho -= ban * GTD["CGO-101"] / THUNG
            thu = round(ban * gia_thung("CGO-101") * he_so_tip(N, kb))
            phut_ca = CD["giay"] / 60 * ban / CD["tau"]
            tally += thu
            tally_thu += thu
            tally_tip += thu * P["tip"]
            diem += ban * CD["diem_moi_tau"]
            while hang < S["tran_hang_theo_chuong"][i] and diem >= NGUONG[hang]:
                hang += 1
        elif cang_mo:
            # ca khung Dave: mỗi tàu gọi 1 thùng. Bán được số nhỏ hơn giữa tàu phục vụ xong và thùng có trong kho sau khi giữ phần để xây (D8)
            con_xay = sua_con > 0 or any(m["c"] <= c and m["vl"] > 0 for m in mua)
            co_the = kho * (1 - (S["du_tru_vat_lieu_khi_con_xay"] if con_xay else 0.0)) / gtd_thung(c)
            ban = min(P["tau"] * P["xong"], co_the)
            kho -= ban * gtd_thung(c)
            thu = round(ban * gtd_thung(c) * gia_gtd)  # Tally là số nguyên: số dư cuối ngày nguyên, phép cộng trừ in ở ECONOMIC đúng từng dòng
            phut_ca = P["giay"] / 60 * ban / (P["tau"] * P["xong"])  # hết hàng thì ca kết thúc sớm
            tally += thu
            tally_thu += thu
            tally_tip += thu * P["tip"]
            diem += ban * P["diem_tau"]
            if c == 1:
                ban_ch1.append(ban)
            while hang < S["tran_hang_theo_chuong"][i] and diem >= NGUONG[hang]:
                hang += 1
        # mua theo lộ trình, chương đã mở, đủ Tally và vật liệu
        mua_ngay = []
        tally_truoc_mua = tally
        for m in mua:
            if m.get("xong") or m["c"] > c:
                continue
            if m["loai"] == "ENG" and hang < S["hang_mo_eng"][m["c"] - 1]:
                continue
            if m.get("can") and m["can"] not in da_mua:  # bộ đồ từ bậc 2 cần Xưởng cấp 2 (tram-va-cang.md mục 2.7)
                continue
            if tally >= m["gia"] and kho >= m["vl"]:
                tally -= m["gia"]
                kho -= m["vl"]
                m["xong"] = True
                da_mua.add(m["id"])
                tally_chi[m["loai"]] = tally_chi.get(m["loai"], 0) + m["gia"]
                mua_ngay.append(m)
                if m["loai"] in TRUC:
                    bac[m["loai"]] = max(bac[m["loai"]], m["bac"])
        trip_phut = 2 * (TECH[c][0] if c in TECH else 0.85 * oxy / 60.0)
        phut_ngay = (trip_phut + phut_ca + S["phut_chuan_bi_cuoi_ngay"]) * K["phut_them"] * (1 + S["he_so_ngay_coop_moi_nguoi"] * (N - 1))
        phut += phut_ngay
        if ghi_ngay:
            dong.append((ngay, c, nhat, thu, tally, hang, phut, mua_ngay, tally_truoc_mua - thu, diem, ban, la_ca_day))
        # điều kiện qua chương
        bat_buoc = [m for m in mua if m["c"] == c and m["loai"] == "ENG"]
        if sua_con <= 0 and chuyen_nhanh == 0 and vot_con == 0 and all(m.get("xong") for m in bat_buoc) and ngay - ngay_dau_chuong + 1 >= S["san_ngay_truyen"][i]:
            moc.append((ngay, phut / 60.0))
            ngay_dau_chuong = ngay + 1
            c += 1
            if c <= 5:
                sua_con = VAT_LIEU_SUA[c - 1]
                chuyen_nhanh = S["chuyen_nhanh_theo_chuong"][c - 1]
                vot_con = S["nguoi_vot_theo_chuong"][c - 1]
                kho *= 0.3  # hàng dải cũ vẫn bán được nhưng ít đơn đòi, giữ 30% giá trị cho dải mới
    return {"moc": moc, "tally_tip": tally_tip, "ban_ch1": ban_ch1, "tally_thu": tally_thu, "tally_chi": tally_chi, "mat_ngat": mat_ngat, "nhat": nhat_ca_game, "nhat_ch1": nhat_ch1, "dong": dong, "tally_du": tally, "bac": bac}


def ngay_du(runs, nguong):  # ngày đủ điểm trung bình cho một ngưỡng, chưa tính trần chương
    v = [next((x[0] for x in r["dong"] if x[9] >= nguong), r["dong"][-1][0] + 1) for r in runs]
    return tb(v)


def nguong_theo_ngay_cu(vong=2, n=100):
    """Ngưỡng Hạng 2 tới 8 sao cho ngày đủ điểm trung bình (một người, kịch bản trung bình) gần ngày đủ điểm của bản trước đợt 9 nhất."""
    ng = list(S["nguong_hang"])
    for _ in range(vong):
        rng = random.Random(S["seed"])
        runs = [chay("trung bình", 1, rng, ghi_ngay=True, nguong=ng) for _ in range(n)]
        tran = max(x[9] for r in runs for x in r["dong"])
        ng = [0] + [min(range(5, int(tran) + 5, 5), key=lambda t: abs(ngay_du(runs, t) - d)) for d in S["ngay_du_diem_cu"]]
    return ng


def nhieu(kb, N, beta=None, giu_mon=1, n=None):
    rng = random.Random(S["seed"] + N * 1000 + list(S["kich_ban"]).index(kb) * 10 + giu_mon)
    return [chay(kb, N, rng, beta, giu_mon, ghi_ngay=True) for _ in range(n or S["so_lan_chay"])]


def tb(ds):
    return statistics.mean(ds) if ds else float("nan")


def gio_chuong(runs):
    """giờ trung bình từng chương (không cộng dồn) và tổng"""
    out = []
    for k in range(5):
        v = [r["moc"][k][1] - (r["moc"][k - 1][1] if k else 0) for r in runs if len(r["moc"]) > k]
        out.append(tb(v))
    return out


def f(x, d=1):
    if x is None or (isinstance(x, float) and math.isnan(x)):
        return "-"
    return ("%.*f" % (d, x + 0.0 if round(x, d) != 0 else 0.0)).replace(".", ",")


def tbl(dau, rows):
    return "\n".join(["| " + " | ".join(dau) + " |", "|" + "|".join(["---"] * len(dau)) + "|"] + ["| " + " | ".join(str(c) for c in r) + " |" for r in rows])


# ---------- dò núm gap ----------
def do_num():
    muc = S["gio_muc_tieu_chuong"]
    for b100 in range(20, 125, 5):
        beta = b100 / 100
        h = gio_chuong(nhieu("trung bình", 1, beta, n=40))
        print("beta %.2f giờ %s tổng %.1f" % (beta, [round(x, 2) for x in h], sum(h)))


# ---------- in mọi bảng ----------
def tally_ha(sp):  # một lần hạ: mô sinh học bán theo thùng mô, phần đặc sản đóng kiện đặc sản (hệ số chế 1,1 của công thức đóng kiện đặc sản)
    n_mo = so(sp["Nguyên liệu chung mỗi lần hạ"].split(" x ")[0])
    mo = n_mo * GTD["SMP-101"]
    dac = so(sp["E[GTĐ] khi hạ"]) - mo
    p_mo = gia_thung("CGO-105") / (GTD["CGO-105"] / THUNG)
    p_dac = gia_thung("CGO-106") / (GTD["CGO-106"] / THUNG)
    return mo * p_mo + dac * 1.1 * p_dac


_DM = None


def do_danh_muc():  # chạy do-danh-muc.mjs một lần: kiểu danh mục trên mô hình ca của gd-tech, giá và độ gọi của file này
    global _DM
    if _DM is None:
        D = S["do_danh_muc"]
        gia = {m: (round(GIA_LONG_TB) if c == "CGO-121" else gia_thung(c)) for m, c in D["ma"].items()}
        do_goi = {m: bac_gia(c)["do_goi"] for m, c in D["ma"].items()}
        tau = {n: port(n, "trung bình")["tau"] for n in S["so_nguoi"]}
        dm = {ten: {n: {m: max(1, round(q * tau[n] / 25)) for m, q in k.items()} for n in S["so_nguoi"]} for ten, k in D["kieu"].items()}
        vao = {"gia": gia, "doGoi": do_goi, "hang": D["ma"], "khongChia": ["long"], "danhMuc": dm, "tau": tau,
               "cua": {n: port(n, "trung bình")["cua"] for n in S["so_nguoi"]}, "tre": D["tre"], "lan": D["lan"], "seed": D["seed"]}
        r = subprocess.run(["node", os.path.join(HERE, "do-danh-muc.mjs")], input=json.dumps(vao, ensure_ascii=False), capture_output=True, text=True, encoding="utf-8", check=True)
        _DM = (json.loads(r.stdout), dm, gia)
    return _DM


def bang_danh_muc():
    out, dm, gia = do_danh_muc()
    goc = {x["N"]: x for x in out if x["ten"] == "Chuẩn bị kỹ"}
    rows, V = [], {}
    for x in out:
        ban = x["served"]
        gtd = sum(q * (GTD_LONG_TB if S["do_danh_muc"]["ma"][m] == "CGO-121" else GTD[S["do_danh_muc"]["ma"][m]] / THUNG) for m, q in dm[x["ten"]][x["N"]].items()) * min(1, ban / x["thung"])
        rows.append([x["N"], x["ten"], ", ".join("%s %d" % (ITEM[S["do_danh_muc"]["ma"][m]]["Tên (VI / EN [TẠM])"].split(" / ")[0], q) for m, q in dm[x["ten"]][x["N"]].items()),
                     "%s / %s" % (f(ban, 1), f(x["skipped"], 1)), f(x["tally"], 0), "%+d%%" % round(100 * (x["tally"] / goc[x["N"]]["tally"] - 1)), "%d%%" % round(100 * x["tipPhan"]),
                     "%d%%" % round(100 * x["pre"]), f(x["tally"] / max(1, ban), 0), f(x["tally"] / max(1e-9, gtd), 1)])
    t1 = {x["ten"]: x for x in out if x["N"] == 1}
    V["dm-cho"] = "%+d%%" % round(100 * (t1["Hàng chợ, không chuẩn bị"]["tally"] / t1["Chuẩn bị kỹ"]["tally"] - 1))
    V["dm-thua"] = "%+d%%" % round(100 * (t1["Chuẩn bị kỹ nhưng bày thừa hàng chợ"]["tally"] / t1["Chuẩn bị kỹ"]["tally"] - 1))
    V["dm-it"] = "%+d%%" % round(100 * (t1["Ít mà đắt"]["tally"] / t1["Chuẩn bị kỹ"]["tally"] - 1))
    V["dm-bo-td"] = "%+d%%" % round(100 * (t1["Chuẩn bị kỹ, bỏ đồ Trái Đất"]["tally"] / t1["Chuẩn bị kỹ"]["tally"] - 1))
    V["dm-tip"] = "%d%% đến %d%%" % (round(100 * min(x["tipPhan"] for x in out)), round(100 * max(x["tipPhan"] for x in out)))
    return tbl(["Số người", "Kiểu danh mục", "Thùng bày (lồng tính 1)", "Tàu xong / không tới", "Tally một ca", "So với Chuẩn bị kỹ", "Tip trong Tally", "Đơn đặt trước đạt", "Tally mỗi tàu", "Tally mỗi GTĐ đã bán"], rows), V


def bang_ca_theo_n():
    """Tally một ca chương 1 theo số người so với giá trị hai chuyến đầy túi của cả nhóm (mốc cũ 60%), và kho thùng sau hai chuyến so với số tàu."""
    rows, V = [], {}
    for kb in S["kich_ban"]:
        for n in S["so_nguoi"]:
            P = port(n, kb)
            ca = P["tau"] * P["xong"] * gtd_thung(1) * S["tally_moi_gtd"] * chi_so_gia(kb) * he_so_tip(n, kb)
            hai = 2 * TRIP[(1, kb, n)] * n / S["kich_ban"][kb]["day_tui"] * S["tally_moi_gtd"] * chi_so_gia(kb) * he_so_tip(n, kb)
            rows.append([kb, n, P["tau"], f(P["tau"] * P["xong"], 1), f(ca, 0), f(hai, 0), "%d%%" % round(100 * ca / hai), f(P["diem_tau"] * P["tau"] * P["xong"], 0)])
            if kb == "trung bình":
                V["tally-ca-%d" % n] = f(ca, 0)
                V["moc-%d" % n] = "%d%%" % round(100 * ca / hai)
    t1 = tbl(["Kịch bản", "Số người", "Số tàu", "Tàu xong (sim ca cảng)", "Tally một ca, kho đủ", "Hai chuyến đầy túi của nhóm, quy ra Tally", "Mốc: phần hai chuyến bán ở một ca", "Điểm cảng một ca"], rows)
    rows = []
    for c in range(1, 6):
        for kb in (S["kich_ban"] if c == 1 else ["trung bình"]):
            o = []
            for n in S["so_nguoi"]:
                th = 2 * TRIP[(c, kb, n)] * n / gtd_thung(c)
                o.append("%s / %d %s" % (f(th, 0), port(n, kb)["tau"], "đủ" if th >= port(n, kb)["tau"] else "thiếu"))
            rows.append([c, kb, f(gtd_thung(c), 1)] + o)
    th1 = 2 * TRIP[(1, "trung bình", 1)] / gtd_thung(1)
    V["kho-ch1-1"] = f(th1, 0)
    V["kho-ch1-1-xay"] = f(th1 * (1 - S["du_tru_vat_lieu_khi_con_xay"]), 0)
    t2 = tbl(["Chương", "Kịch bản", "GTĐ một thùng trung bình"] + ["%d người: thùng sau hai chuyến / số tàu" % n for n in S["so_nguoi"]], rows)
    return t1, t2, V


def bao_cao():
    K = {}
    V = {}
    kbs = list(S["kich_ban"])
    # 1. Bảng giá kiện
    rows = []
    for k, v in ITEM.items():
        if k.startswith("CGO-") and GTD[k]:
            b = GT["kien"][k]
            rows.append([k, v["Tên (VI / EN [TẠM])"].split(" / ")[0], v["Dải"], f(GTD[k]), gia_kien(k), ("%d (bán nguyên cái)" % gia_kien(k)) if k in NGUYEN_CAI else gia_thung(k), b, f(GT["bac"][b]["he_so"], 2), f(GT["bac"][b]["do_goi"], 1), v["Nhãn"]])
    K["gia_kien"] = tbl(["ID kiện", "Tên", "Dải", "GTĐ kiện (gd-items)", "Giá Tally một kiện", "Giá Tally một thùng", "Bậc giá", "Hệ số giá", "Độ gọi", "Nhãn"], rows)
    rows = []
    for sp in SPECIES:
        if sp["Bắt"] != "Sống (LIV)":
            continue
        cgo = {"Gần": "CGO-121", "Giữa": "CGO-221", "Xa": "CGO-321"}[sp["Dải"]]
        rows.append([cgo, "%s %s" % (sp["Mã gd-combat"], sp["Tên"]), sp["Dải"], sp["GTĐ mẫu bắt"], gia_long(sp), sp["Nhãn"]])
    K["gia-song"] = tbl(["Lồng", "Loài bên trong", "Dải", "GTĐ mẫu sống (gd-items)", "Giá Tally một lồng", "Nhãn"], rows)
    rows = []
    for b, d in GT["bac"].items():
        mvp = [k for k, x in GT["kien"].items() if x == b and ITEM.get(k, {}).get("Nhãn") == "MVP"]
        gia = ", ".join("%s %d" % (ITEM[k]["Tên (VI / EN [TẠM])"].split(" / ")[0], gia_thung(k)) for k in mvp if GTD[k]) or ", ".join("lồng %s %d" % (sp["Tên"], gia_long(sp)) for sp in LONG_MVP)
        rows.append([b, f(d["he_so"], 2), f(d["do_goi"], 1), d["y_do"], gia])
    K["bac-gia"] = tbl(["Bậc giá", "Hệ số giá", "Độ gọi", "Ý đồ", "Giá chương 1 (MVP, Tally một thùng hoặc lồng)"], rows)
    rows = []
    for kb in kbs:
        dm = S["danh_muc_kich_ban"][kb]
        rows.append([kb, ", ".join("%s %d" % (ITEM[k]["Tên (VI / EN [TẠM])"].split(" / ")[0], q) for k, q in dm.items()), sum(dm.values()), f(sum(q * gia_don_vi(k)[0] for k, q in dm.items()), 0), f(chi_so_gia(kb), 2)])
        V["chi-so-" + {"tệ": "te", "trung bình": "tb", "tốt": "tot"}[kb]] = f(chi_so_gia(kb), 2)
    K["chi-so-gia"] = tbl(["Kịch bản", "Danh mục đại diện, chương 1, một người (đơn vị)", "Đơn vị", "Tally giá thùng", "Chỉ số giá (Tally trên GTĐ x 10)"], rows)
    V["gia-thung-phe"] = str(gia_thung("CGO-101"))
    K["danh-muc"], dm_v = bang_danh_muc()
    V.update(dm_v)
    # 2. Bảng giá nâng cấp, ENG, mục Shop
    rows = []
    for m in sorted(danh_sach_mua(), key=lambda x: (x["c"], x["loai"], x["id"])):
        truc = TEN_TRUC.get(m["loai"], "") if m["loai"] != "ENG" else ""
        if m["loai"] in ("OXY", "TUI", "VO", "DAY", "DUNGCU"):
            truc = "%s bậc %d" % (TEN_TRUC[m["loai"]], m["bac"])
        gia = "0 (quest Kỹ sư)" if m["mien_phi"] else m["gia"]
        rows.append([m["c"], m["id"], m["ten"] if m["ten"] != m["id"] else "-", truc or "-", m["mo"], f(m["vl"]) if m["vl"] else "-", gia, m["nhan"]])
    K["gia_mua"] = tbl(["Chương mở", "ID", "Tên", "Trục bộ đồ (nguoi-choi.md)", "Mở bằng hoặc nơi", "Vật liệu (GTĐ, gd-items)", "Giá Tally", "Nhãn"], rows)
    V["beta"] = f(S["beta_ngan_sach"], 2)
    V["vd-phut"] = f(phut_ngay_tham_chieu(1), 1)
    V["vd-ca"] = f(PHUT_CA[1], 1)
    V["vd-ngay"] = f(ngay_muc_tieu(1), 1)
    V["vd-chuyen"] = f(TECH[1][0], 1)
    V["vd-gtd"] = f(TECH[1][1], 1)
    V["vd-thu"] = str(tron(thu_nhap_tham_chieu(1)))
    V["vd-ngan-sach"] = str(tron(ngan_sach(1)))
    V["phut-ca"] = ", ".join(f(PHUT_CA[c], 2) for c in range(1, 6))
    K["ngan_sach"] = tbl(["Chương", "Giờ dùng tính ngân sách", "Phút một ngày tham chiếu", "Ngày mục tiêu", "Thu nhập tham chiếu một ngày (Tally)", "Ngân sách Tally của chương"],
                         [[c, f(S["gio_muc_tieu_chuong"][c - 1], 2), f(phut_ngay_tham_chieu(c), 1), f(ngay_muc_tieu(c), 1), tron(thu_nhap_tham_chieu(c)), tron(ngan_sach(c)) if c <= 4 else "không có thứ mua mới"] for c in range(1, 6)])
    V["kc"] = "%s ở dải Gần, %s ở Giữa, %s ở Xa" % (f(S["k_coop"][0], 2), f(S["k_coop"][1], 2), f(S["k_coop"][4], 2))
    # 3. Chạy chính
    R = {(kb, N): nhieu(kb, N) for kb in kbs for N in S["so_nguoi"]}
    # 3a. mốc chương
    rows = []
    for kb in kbs:
        for N in S["so_nguoi"]:
            runs = R[(kb, N)]
            h = gio_chuong(runs)
            ngay_moc = [tb([r["moc"][k][0] for r in runs if len(r["moc"]) > k]) for k in range(5)]
            tong = tb([r["moc"][4][1] for r in runs if len(r["moc"]) == 5])
            xong = sum(1 for r in runs if len(r["moc"]) == 5) / len(runs)
            rows.append([kb, N] + ["%s ngày, %s giờ" % (f(ngay_moc[k], 0), f(h[k], 2)) for k in range(5)] + [f(tong, 1), "%d%%" % round(100 * xong)])
    K["moc_chuong"] = tbl(["Kịch bản", "Số người", "Chương 1", "Chương 2", "Chương 3", "Chương 4", "Chương 5", "Cả game (giờ)", "Lượt chạy xong game"], rows)
    # 3b. so mục tiêu khung mục 9 (trung bình 1 người)
    h1 = gio_chuong(R[("trung bình", 1)])
    tong1 = tb([r["moc"][4][1] for r in R[("trung bình", 1)]])
    V["gio_ch1_tb"] = f(h1[0], 2)
    V["ngay-game-tb"] = f(tb([r["moc"][4][0] for r in R[("trung bình", 1)]]), 0)
    V["phut-ngay-ch1"] = f(phut_ngay_tham_chieu(1), 1)
    V["phut-ngay-ch5"] = f(phut_ngay_tham_chieu(5), 1)
    V["gio_ch2_tb"] = f(h1[1], 1)
    V["lech_ch2"] = "%d%%" % round(100 * (h1[1] / S["gio_muc_tieu_chuong"][1] - 1))
    V["gio_game_te"] = f(tb([r["moc"][4][1] for r in R[("tệ", 1)]]), 1)
    V["gio_game_tot"] = f(tb([r["moc"][4][1] for r in R[("tốt", 1)]]), 1)
    V["gio_game_tb"] = f(tong1, 1)
    V["san-tong"] = str(sum(S["san_ngay_truyen"]))
    K["gio-lech"] = tbl(["Chương", "Giờ dùng tính ngân sách", "Giờ đo (trung bình, một người)", "Lệch"],
                        [[c, f(S["gio_muc_tieu_chuong"][c - 1], 2), f(h1[c - 1], 2), "%+d%%" % round(100 * (h1[c - 1] / S["gio_muc_tieu_chuong"][c - 1] - 1))] for c in range(1, 6)])
    # 3c. co-op
    rows = []
    for kb in kbs:
        base = R[(kb, 1)]
        tb1 = [tb([r["moc"][k][1] for r in base if len(r["moc"]) > k]) for k in range(5)]
        for N in S["so_nguoi"][1:]:
            rr = R[(kb, N)]
            tbn = [tb([r["moc"][k][1] for r in rr if len(r["moc"]) > k]) for k in range(5)]
            moi_nguoi = tb([MOI_NGUOI.get((c, N), (1 + S["k_coop"][c - 1] * (N - 1)) / N) for c in range(1, 6)])
            rows.append([kb, N, "%d%%" % round(100 * moi_nguoi)] + ["%d%%" % round(100 * tbn[k] / tb1[k]) for k in range(5)])
    K["coop"] = tbl(["Kịch bản", "Số người", "Mỗi người nhặt so với một mình", "Tới hết chương 1 (cộng dồn)", "Tới hết chương 2 (cộng dồn)", "Tới hết chương 3 (cộng dồn)", "Tới hết chương 4 (cộng dồn)", "Hết game"], rows)
    r4 = [x for x in rows if x[0] == "trung bình" and x[1] == 4][0]
    V["coop4-ch2"] = r4[4]
    V["coop4_game"] = r4[-1]
    V["coop4_ch1"] = r4[3]
    # 3d. Tally theo ngày, trung bình 1 người, một lượt chạy có seed
    one = chay("trung bình", 1, random.Random(S["seed"]), ghi_ngay=True)
    rows = [[x[0], x[1], f(x[2], 0), f(x[10], 1), f(x[3], 0), f(x[4], 0), f(x[9], 0), x[5], f(x[6] / 60, 2)] for x in one["dong"]]
    K["tally_ngay"] = tbl(["Ngày", "Chương", "Nhặt cả ngày (GTĐ)", "Thùng bán ở ca", "Tally thu ở ca cảng", "Tally còn cuối ngày", "Điểm cảng cộng dồn", "Hạng cảng", "Giờ chơi cộng dồn"], rows)
    # 3e2. Thùng bán mỗi ca theo chương so với số tàu (kho có chặn không)
    rows = []
    for kb in kbs:
        for N in S["so_nguoi"]:
            o = []
            for c in range(1, 6):
                v = [x[10] for r in R[(kb, N)] for x in r["dong"] if x[1] == c and x[3] > 0 and not x[11]]  # ca dạy 2 tàu không tính
                o.append("%s (%d%%)" % (f(tb(v), 1), round(100 * tb(v) / port(N, kb)["tau"])))
            rows.append([kb, N, port(N, kb)["tau"]] + o)
    K["ban-chuong"] = tbl(["Kịch bản", "Số người", "Số tàu"] + ["Chương %d: thùng bán mỗi ca (phần số tàu)" % c for c in range(1, 6)], rows)
    # 3f. Ngưỡng Hạng cảng: ngày đủ điểm giữ như bản trước đợt 9
    rr1 = R[("trung bình", 1)]
    rows = []
    for h in range(2, 9):
        nlen = tb([next((x[0] for x in r["dong"] if x[5] >= h), float("nan")) for r in rr1])
        rows.append([h, S["tran_chuong_cua_hang"][h - 1], S["nguong_hang"][h - 1], f(S["ngay_du_diem_cu"][h - 2], 1), f(ngay_du(rr1, S["nguong_hang"][h - 1]), 1), f(nlen, 1)])
    K["nguong-hang"] = tbl(["Hạng", "Trần ở chương", "Ngưỡng điểm (sim dùng số này)", "Ngày đủ điểm, bản trước đợt 9", "Ngày đủ điểm, đo lại", "Ngày lên hạng (có trần chương)"], rows)
    V["nguong-de-xuat"] = ", ".join(str(x) for x in nguong_theo_ngay_cu()[1:])
    V["nguong-hien-hanh"] = ", ".join(str(x) for x in S["nguong_hang"][1:])
    V["ban-ch1"] = f(tb([tb(r["ban_ch1"]) for r in rr1]), 1)
    V["diem-ca-1"] = f(port(1, "trung bình")["diem_tau"] * port(1, "trung bình")["tau"] * port(1, "trung bình")["xong"], 0)
    # 3e. Source và sink Tally
    rows = []
    for kb in kbs:
        for N in S["so_nguoi"]:
            runs = R[(kb, N)]
            thu = tb([r["tally_thu"] for r in runs])
            chi = {}
            for r in runs:
                for k2, v2 in r["tally_chi"].items():
                    chi[k2] = chi.get(k2, 0) + v2 / len(runs)
            tong_chi = sum(chi.values())
            du = tb([r["tally_du"] for r in runs])
            rows.append([kb, N, f(thu, 0), "%d%%" % round(100 * tb([r["tally_tip"] / r["tally_thu"] for r in runs])), f(chi.get("ENG", 0) / tong_chi * 100, 0) + "%", f(sum(chi.get(t, 0) for t in TRUC) / tong_chi * 100, 0) + "%",
                         f((tong_chi - chi.get("ENG", 0) - sum(chi.get(t, 0) for t in TRUC)) / tong_chi * 100, 0) + "%", f(du, 0), f(du / thu * 100, 0) + "%"])
    for kb in kbs:
        V["tip-" + {"tệ": "te", "trung bình": "tb", "tốt": "tot"}[kb]] = "%d%%" % round(100 * tb([r["tally_tip"] / r["tally_thu"] for r in R[(kb, 1)]]))
    V["du_tb"] = [x for x in rows if x[0] == "trung bình" and x[1] == 1][0][-1]
    K["source_sink"] = tbl(["Kịch bản", "Số người", "Tally thu cả game", "Phần tip trong thu", "Chi cho ENG", "Chi cho bộ đồ", "Chi cho dụng cụ, khoang, Shop khác", "Tally dư cuối game", "Dư so với thu"], rows)
    # 4. Log 40: giữ 1 món hay 3 món ở chương 1
    rows = []
    for kb in kbs:
        a = nhieu(kb, 1, giu_mon=1)
        b = nhieu(kb, 1, giu_mon=3)
        ha = gio_chuong(a)[0]
        hb = gio_chuong(b)[0]
        mat = tb([r["mat_ngat"] for r in a])
        rows.append([kb, "%d%%" % round(100 * S["kich_ban"][kb]["p_ngat"]), f(mat / tb([r["nhat"] + r["mat_ngat"] for r in a]) * 100, 1) + "%", f(ha, 2), f(hb, 2), f((ha - hb) * 60, 0)])
        V["chenh_" + {"tệ": "te", "trung bình": "tb", "tốt": "tot"}[kb]] = f((ha - hb) * 60, 0)
    K["log40"] = tbl(["Kịch bản", "Tỉ lệ chuyến ngạt (đầu vào)", "Phần nhặt mất vì ngạt, cả game", "Giờ chương 1, giữ 1 món", "Giờ chương 1, giữ 3 món", "Chênh (phút)"], rows)
    # Món giữ lại so với túi, theo chương
    rows = []
    for i in range(5):
        dai = S["dai_theo_chuong"][i]
        tui = S["tui_theo_bac"][min(i, 4)] * MAT_DO[dai] * S["he_so_mat_do_them"][i]
        rows.append([i + 1, dai, f(tui, 0), f(MON_MAX[dai], 1), f(MON_MAX[dai] / tui * 100, 0) + "%"])
    V["giu_ch1"] = rows[0][-1]
    V["giu_ch5"] = rows[-1][-1]
    K["mon_giu"] = tbl(["Chương", "Dải", "Túi đầy (GTĐ, bậc túi theo chương)", "Món đắt nhất một đơn vị (GTĐ)", "Giữ 1 món còn lại bao nhiêu"], rows)
    # Lồng mẫu 3 con giữ như 1 món (luật 25 gd-combat)
    lon = max(GTD[k] for k in ITEM if k.startswith("LIV-1") and GTD[k])
    V["long_3"] = f(3 * lon, 1)
    V["tui_ch1"] = f(S["tui_theo_bac"][0] * MAT_DO["Gần"], 1)
    # 5. Log 53: bắt sống, chi phí lưới
    luoi = GTD["CON-102"]
    rows = []
    for sp in SPECIES:
        if "CON-102" not in sp["Vật tiêu hao mỗi lần bắt"] or sp["Hạ được"] != "Có":
            continue
        ha, song = tally_ha(sp), gia_long(sp)
        r = [(song - luoi * S["tally_moi_gtd"] / n) / ha for n in S["phan_tich"]["so_con_moi_phat_luoi"]]
        rows.append(["%s %s" % (sp["Mã gd-combat"], sp["Tên"]), sp["Dải"], f(ha, 1), song, f(song / ha, 2)] + [f(x, 2) for x in r] + [sp["Nhãn"]])
    K["bat_song"] = tbl(["Loài cỡ S", "Dải", "Hạ (Tally kỳ vọng, bán mô sinh học và đặc sản)", "Lồng sống (Tally)", "Sống trên hạ, bắt tay sau choáng", "Ròng trên hạ, lưới trúng 1 con", "2 con", "3 con", "Nhãn"], rows)
    V["luoi_gtd"] = f(luoi, 2)
    rr = [[so(x) for x in r[5:8]] + [so(r[4])] for r in rows]
    V["luoi_min"] = f(min(min(x[0:3]) for x in rr), 2)
    V["luoi_max"] = f(max(max(x[0:3]) for x in rr), 2)
    V["luoi_min2"] = f(min(min(x[1:3]) for x in rr), 2)
    V["tay_min"] = f(min(x[3] for x in rr), 2)
    V["tay_max"] = f(max(x[3] for x in rr), 2)
    K["tally-ca"], K["kho-thung"], tc_v = bang_ca_theo_n()
    V.update(tc_v)
    S["san_ngay_truyen"], san_cu = S["san_ngay_truyen_ha"], S["san_ngay_truyen"]
    a1 = tb([r["moc"][4][1] for r in nhieu("trung bình", 1, n=60)])
    a4 = tb([r["moc"][4][1] for r in nhieu("trung bình", 4, n=60)])
    V["coop4-san-ha"] = "%d%%" % round(100 * a4 / a1)
    V["san-ha-tong"] = str(sum(S["san_ngay_truyen_ha"]))
    S["san_ngay_truyen"] = san_cu
    V["sua_ch1_goc"] = f(VAT_LIEU_SUA_GOC[0], 0)
    V["sua_ch1_moi"] = f(VAT_LIEU_SUA[0], 0)
    V["xa_gan"] = f(MAT_DO["Xa"] / MAT_DO["Gần"], 1)
    V["gia_tui1"] = str([m for m in danh_sach_mua() if m["id"] == "UPG-BAG-1"][0]["gia"])
    kc = S["k_coop"]
    V["moi-nguoi-4"] = "%d%% đến %d%%" % (round(100 * min(MOI_NGUOI.get((c, 4), 1) for c in range(1, 6))), round(100 * max(MOI_NGUOI.get((c, 4), 0) for c in range(1, 6))))
    K["coop_he_so"] = tbl(["Phần", "1 người", "2 người", "3 người", "4 người"], [
        ["Ví Tally, giá, Hạng cảng", "Chung", "Chung", "Chung", "Chung"],
        ["Hệ số khe điểm sinh k(N) (gd-world), Gần, Giữa, Xa"] + ["%s, %s, %s" % (f(1 + kc[0] * (n - 1), 2), f(1 + kc[1] * (n - 1), 2), f(1 + kc[4] * (n - 1), 2)) for n in range(1, 5)],
        ["Mỗi người so với chơi một mình, sim chuyến gd-tech, chương 1 tới 5"] + [", ".join("%d%%" % round(100 * MOI_NGUOI.get((c, n), (1 + kc[c - 1] * (n - 1)) / n)) for c in range(1, 6)) for n in range(1, 5)],
        ["Số tàu một ca và cửa neo (sim ca cảng gd-tech, C8)"] + ["%d tàu, %d cửa neo" % (port(n, "trung bình")["tau"], port(n, "trung bình")["cua"]) for n in range(1, 5)],
        ["Điểm cảng một ca, kịch bản trung bình, kho đủ"] + [f(port(n, "trung bình")["diem_tau"] * port(n, "trung bình")["tau"] * port(n, "trung bình")["xong"], 0) for n in range(1, 5)],
        ["Giá nâng cấp, sửa khoang", "Không đổi", "Không đổi", "Không đổi", "Không đổi"]])
    # số phụ: khoảng β, sàn chương 1
    for ten, b in (("beta_lo", S["beta_ngan_sach"] - 0.05), ("beta_hi", S["beta_ngan_sach"] + 0.05)):
        V[ten] = f(sum(gio_chuong(nhieu("trung bình", 1, b, n=60))), 1)
    V["san_ch1_moi"] = f(gio_chuong(nhieu("trung bình", 1, 0.02, n=60))[0], 1)
    giu = list(VAT_LIEU_SUA)
    VAT_LIEU_SUA[:] = VAT_LIEU_SUA_GOC
    S["he_so_vat_lieu_sua_de_xuat"], hs = [1] * 5, S["he_so_vat_lieu_sua_de_xuat"]
    V["san_ch1_goc"] = f(gio_chuong(nhieu("trung bình", 1, 0.02, n=60))[0], 1)
    VAT_LIEU_SUA[:] = giu
    S["he_so_vat_lieu_sua_de_xuat"] = hs
    # Log 53: nhặt tay so với khoan, tính cả thời gian đi giữa hai điểm
    t_di = S["phan_tich"]["giay_di_giua_hai_diem"]
    rows = []
    for n in NODE:
        if n["Dải"] != "Gần":
            continue
        gt, kh, gi = so(n["GTĐ kỳ vọng"]), so(n["Khối kỳ vọng"]), so(n["Giây (bậc 1)"])
        rows.append([n["SLV ID"], n["Tên"], n["Dụng cụ"], f(gt / gi, 2), f(gt / (gi + t_di), 2), f(S["tui_theo_bac"][0] / kh * (gi + t_di), 0), f(gt / kh, 2)])
    K["tay_khoan"] = tbl(["Điểm", "Tên", "Dụng cụ", "GTĐ mỗi giây tại chỗ", "GTĐ mỗi giây gồm %d giây đi" % t_di, "Giây đầy túi %d Khối" % S["tui_theo_bac"][0], "GTĐ mỗi Khối"], rows)
    # Nguồn số chuyến
    rows = []
    for c in range(1, 6):
        dai = S["dai_theo_chuong"][c - 1]
        toi = S["tui_theo_bac"][c - 1] * MAT_DO[dai] * S["he_so_mat_do_them"][c - 1] * S["kich_ban"]["trung bình"]["day_tui"]
        rows.append([c, S["oxy_theo_bac"][c - 1], S["tui_theo_bac"][c - 1], f(TECH[c][0], 1), f(TECH[c][1], 1), f(toi, 0), f(he_so_tech(c), 2), NGUON_CHUYEN[c]])
    K["so_gd_tech"] = tbl(["Chương", "Bình", "Túi (Khối)", "Phút một chuyến", "GTĐ một chuyến (gồm Driftlife)", "GTĐ túi đầy chỉ tài nguyên, sim này", "Hệ số nhân vào sim này", "Nguồn"], rows)
    V["nguon-chuyen"] = "sim chuyến gd-tech" if all(v == "sim chuyến gd-tech" for v in NGUON_CHUYEN.values()) else "số dự phòng của gd-world, chờ sim chuyến gd-tech chạy theo thang mới"
    # 6. PROCESSING: sức mạnh theo chương (trung bình 1 người, đầu chương)
    rows = []
    for i in range(5):
        dai = S["dai_theo_chuong"][i]
        oxy = S["oxy_theo_bac"][i]
        rows.append([i + 1, dai, oxy, S["tui_theo_bac"][i], f(TECH[i + 1][1], 0), f(TECH[i + 1][1] * S["tally_moi_gtd"], 0), tron(ngan_sach(i + 1)) if i < 4 else "-", f(2 * TECH[i + 1][0], 1)])
    K["suc_manh"] = tbl(["Chương", "Dải", "Oxy (bậc theo chương)", "Túi (Khối)", "GTĐ một chuyến (gồm Driftlife)", "Quy ra Tally", "Ngân sách Tally của chương", "Phút ra ngoài một ngày"], rows)
    # 7. Balance sheet
    K["balance"] = tbl(["Tham số", "Nơi giữ", "Cũ", "Kết quả thử", "Mới", "Vai sửa"], S["lich_su_doi_so"])
    V["mat_do"] = ", ".join("%s %s" % (d, f(MAT_DO[d], 2)) for d in MAT_DO)
    V["vl_sua"] = ", ".join("chương %d: %s" % (i + 1, f(x, 0)) for i, x in enumerate(VAT_LIEU_SUA))
    return {"khoi": K, "bien": V}, R


TEN_DOC = {"UPG-OXY": "Bình Oxy bậc %s", "UPG-BAG": "Túi đồ bậc %s", "UPG-THR": "Bộ đẩy bậc %s", "UPG-ENV": "Vỏ bộ đồ cấp %s", "UPG-RACK": "Đai dụng cụ bậc %s",
           "UPG-MIN": "Dụng cụ khai thác bậc %s", "UPG-HAR": "Lao từ bậc %s", "UPG-NET": "Súng lưới bậc %s",
           "ENG-101": "Van tiết lưu (động cơ giai đoạn 1)", "ENG-102": "Buồng đốt tái chế (động cơ giai đoạn 2)", "ENG-103": "Cuộn ổn định từ (động cơ giai đoạn 3)",
           "ENG-104": "Bơm nhiên liệu Veyl (động cơ giai đoạn 4)", "KH07-C2": "Cảng cấp 2", "KH05-C2": "Xưởng cấp 2", "KH11-C3": "Khoang sinh quyển cấp 3", "KHxx-C3": "Cấp 3 các khoang còn lại",
           "BPR-103": "Bản thiết kế Máy quét xung", "BPR-105": "Bản thiết kế Máy cắt thân tàu", "BPR-106": "Bản thiết kế tiện ích cảng"}


def ten_doc(i):
    if i in TEN_DOC:
        return TEN_DOC[i]
    k, b = i.rsplit("-", 1)
    return TEN_DOC[k] % b


def tab_economic():
    """Tab ECONOMIC bản đọc (luật đợt 8: không mã, cột Ngày là số). Một lượt seed, kịch bản trung bình, một người."""
    one = chay("trung bình", 1, random.Random(S["seed"]), ghi_ngay=True)
    rows = [["Ngày", "Source (vật phẩm)", "Source (Tally)", "Sink Type", "Sink Quality", "Surplus", "Note"]]
    for ngay, c, nhat, thu, tl, hang, phut, mua, dau, diem, ban, day in one["dong"]:
        chi = sum(m["gia"] for m in mua)
        rows.append([ngay, "%s GTĐ" % f(nhat, 0), f(thu, 0), ", ".join(ten_doc(m["id"]) for m in mua) or "Không mua",
                     " + ".join("0 (thưởng quest Kỹ sư)" if m["mien_phi"] else str(m["gia"]) for m in mua) or "0",
                     "%s + %s - %s = %s" % (f(dau, 0), f(thu, 0), chi, f(tl, 0)),
                     "Chương %d, Hạng cảng %d, đã chơi %s giờ. %s" % (c, hang, f(phut / 60, 2), ("Ca dạy 2 tàu Loose Bolt, bán %s thùng phế liệu, điểm cảng cộng dồn %s" if day else "Bán %s thùng, điểm cảng cộng dồn %s") % (f(ban, 0), f(diem, 0)) if ban else "Cảng chưa mở")])
    rows.append(["", "Ghi chú: kịch bản trung bình, một người, một lượt sim. Nhặt gồm cả Driftlife bắt, hạ và con nuôi",
                 "Tally thu bằng giá thùng cộng tip. Ca cảng sớm nhất ngày %d, ca đầu là ca dạy 2 tàu Loose Bolt bán thùng phế liệu" % S["ngay_mo_cang_ch1"], "Tên thứ mua theo tab Shop và Upgrade", "Tally chi, giá theo tab Shop và Upgrade",
                 "Tally đầu ngày + thu - chi = Tally cuối ngày. Sim in, không gõ tay",
                 "Một lượt nên ngày qua chương có thể lệch vài ngày so với tab PROCESSING (trung bình nhiều lượt). Bản đủ: kinh-te-tien-trinh.md Phụ lục"])
    p = os.path.join(ROOT, "projects", "game-moi", "gdd", "sheet", "ECONOMIC.tsv")
    with open(p, "w", encoding="utf-8", newline="\n") as fh:
        for r in rows:
            fh.write("\t".join(str(x) for x in r) + "\n")
    print("ghi %s: %d ngày" % (p, len(rows) - 2))


def selftest():
    assert tron(37) == 35 and tron(372) == 370 and tron(3720) == 3700
    assert abs(vat_lieu_nang_cap(1) - 25) < 1e-9
    assert gia_kien("CGO-101") == gia_thung("CGO-101") * THUNG and gia_kien("CGO-101") == int(gia_kien("CGO-101")), "giá kiện = giá thùng x 2,5, số nguyên"
    assert gia_thung("CGO-109") > gia_thung("CGO-113") > gia_thung("CGO-105") > gia_thung("CGO-101"), "bậc giá: hiếm > chế > sinh học > chợ"
    for sp in LONG_MVP:  # K9 theo Tally: bắt tay sau choáng hơn hạ, trong trần 2 của khung mục 9
        assert 1.2 <= gia_long(sp) / tally_ha(sp) <= 2.0, sp["Tên"]
    cc = json.load(open(os.path.join(ROOT, "projects", "game-moi", "tools", "tham-so", "ca-cang.json"), encoding="utf-8"))["giaThung"]
    ma = S["do_danh_muc"]["ma"]
    assert all(cc["thung"][m] == gia_thung(ma[m]) and cc["doGoi"][m] == bac_gia(ma[m])["do_goi"] for m in cc["thung"]), "ca-cang.json giaThung lệch bảng giá"
    assert all(cc["long"]["LIV-%s" % sp["Số"]] == gia_long(sp) for sp in LONG_MVP), "ca-cang.json giaThung.long lệch bảng giá lồng"
    assert abs(he_so_tip(1, "trung bình") - 1 / (1 - port(1, "trung bình")["tip"])) < 1e-12
    a = chay("trung bình", 1, random.Random(1))
    b = chay("trung bình", 1, random.Random(1))
    assert a["moc"] == b["moc"], "cùng seed phải cùng kết quả"
    assert len(a["moc"]) == 5, "kịch bản trung bình một người phải xong game"
    assert all(x <= port(1, "trung bình")["tau"] + 1e-9 for x in a["ban_ch1"]), "không bán quá số tàu"
    t = chay("tệ", 1, random.Random(1))
    g = chay("tốt", 1, random.Random(1))
    assert t["moc"][-1][1] > a["moc"][-1][1] > g["moc"][-1][1], "tệ chậm hơn trung bình chậm hơn tốt"
    assert a["tally_thu"] > 0
    r = chay("trung bình", 1, random.Random(1), ghi_ngay=True)
    thu_tu = [m["id"] for x in r["dong"] for m in x[7]]
    assert all(thu_tu.index(m["can"]) < thu_tu.index(m["id"]) for x in r["dong"] for m in x[7] if m.get("can")), "bộ đồ bậc 2 mua sau Xưởng cấp 2"
    assert all(x[4] == int(x[4]) and x[8] + x[3] - sum(m["gia"] for m in x[7]) == x[4] for x in r["dong"]), "số dư nguyên, đầu + thu - chi = cuối"
    ca = [x for x in r["dong"] if x[10] > 0]
    assert ca[0][0] >= S["ngay_mo_cang_ch1"] and ca[0][11] and 0 < ca[0][10] <= S["ca_day"]["tau"], "ca đầu sớm nhất ngày 5 và là ca dạy tối đa 2 tàu (log 111)"
    assert sum(1 for x in r["dong"] if x[11]) == 1, "đúng một ca dạy"
    print("selftest xanh")


if __name__ == "__main__":
    if "--selftest" in sys.argv:
        selftest()
        sys.exit(0)
    if "--tab" in sys.argv:
        # Tab Sheet là bản đọc (DECISIONS đợt 8). Chỉ ECONOMIC sinh lại được vì cả tab là số theo ngày. Tab khác sửa tay rồi chạy tools/kiem-de-doc.mjs
        tab_economic()
        sys.exit(0)
    if "--do" in sys.argv:
        do_num()
        sys.exit(0)
    kq, R = bao_cao()
    p = os.path.join(HERE, "ket-qua.json")
    kq = {k: {t.replace("_", "-"): v for t, v in d.items()} for k, d in kq.items()}  # tên khối dùng gạch nối cho soat.mjs
    json.dump(kq, open(p, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(kq["khoi"]["moc-chuong"])
    print(kq["khoi"]["coop"])
    print("giờ chương 1 TB:", kq["bien"]["gio-ch1-tb"], "cả game TB:", kq["bien"]["gio-game-tb"])
    if "--ghi" in sys.argv:
        dd = os.path.join(ROOT, "docs", "process", "templates", "economy-sim", "economy_doc.py")
        subprocess.run([sys.executable, dd, "ghi", GDD, p], check=True, env=dict(os.environ, PYTHONIOENCODING="utf-8"))
        r = subprocess.run([sys.executable, dd, "kiem", os.path.join(HERE, "tham-so.json"), GDD, p], env=dict(os.environ, PYTHONIOENCODING="utf-8"))
        sys.exit(r.returncode)
