# -*- coding: utf-8 -*-
"""Sim kinh tế và tiến trình EMBER (GD-028). Một lệnh in lại mọi bảng số của GDD kinh tế.

  python projects/game-moi/sim/economy/sim-kinh-te.py            in tóm tắt, ghi ket-qua.json
  python projects/game-moi/sim/economy/sim-kinh-te.py --ghi      như trên rồi đưa bảng vào GDD (economy_doc.py ghi)
  python projects/game-moi/sim/economy/sim-kinh-te.py --do       dò B1 và g cho kịch bản trung bình 1 người
  python projects/game-moi/sim/economy/sim-kinh-te.py --selftest tự kiểm

Đầu vào: tham-so.json (cùng thư mục) và các bảng do script của gd-items sinh trong vat-pham.md (ITEM, REPAIR, NODE).
Mô hình ở mức giá trị: lượng nhặt tính bằng GTĐ (đơn vị của gd-items), quy ra Tally bằng tally_moi_gtd.
shortcut: lượng nhặt một chuyến là số ước từ map.md và vat-pham.md, thay bằng output sim-chuyen.mjs của gd-tech khi có.
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
            "DUNGCU_KHAI_THAC": "Dụng cụ (UPG-MIN, UPG-HAR, UPG-NET)", "KHOANG_CAP": "Nâng cấp khoang", "BPR": "Bản thiết kế ở Shop", "KE_KIEN_2": "Kệ kiện cấp 2"}


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
# Kiện giao được một ca, một người, kịch bản trung bình, không đóng sẵn (sim ca cảng gd-tech). Chương không có số lấy chương trước.
KIEN_GIAO, PHUT_CA = {}, {}
_pc = os.path.join(ROOT, S["sim_ca_cang_gd_tech"])
if os.path.exists(_pc):
    for _m in re.finditer(r"^\| Chương (\d)[^|]*\| trung bình \| 1 \| 0 \| (\d+) / \d+ \|(?:[^|]*\|){3}\s*([\d,]+) \|", open(_pc, encoding="utf-8").read(), re.M):
        if int(_m.group(1)) not in KIEN_GIAO:
            KIEN_GIAO[int(_m.group(1))] = so(_m.group(3))
            PHUT_CA[int(_m.group(1))] = int(_m.group(2)) / 60
for _c in range(1, 6):
    KIEN_GIAO.setdefault(_c, KIEN_GIAO.get(_c - 1, 10.0))
    PHUT_CA.setdefault(_c, PHUT_CA.get(_c - 1, S["phut_ca_cang"][_c - 1]))


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


def thu_nhap_tham_chieu(c):  # Tally một ngày: 2 chuyến đầy túi bậc theo chương, bán hết, có thưởng đủ đơn
    dai = S["dai_theo_chuong"][c - 1]
    return 2 * S["tui_theo_bac"][c - 1] * MAT_DO[dai] * S["he_so_mat_do_them"][c - 1] * he_so_tech(c) * S["tally_moi_gtd"] * (1 + S["thuong_du_don"])


def ngan_sach(c, beta=None):  # tổng giá Tally mọi thứ mở ở chương c
    return (beta or S["beta_ngan_sach"]) * ngay_muc_tieu(c) * thu_nhap_tham_chieu(c)


def don_goc_gtd(c):  # GTĐ đơn đòi một ca khi chơi một mình: ti_le_cang nhân 2 chuyến đầy túi bậc theo chương
    dai = S["dai_theo_chuong"][c - 1]
    return S["ti_le_cang"] * 2 * S["tui_theo_bac"][c - 1] * MAT_DO[dai] * S["he_so_mat_do_them"][c - 1] * he_so_tech(c)


def kien_tb(c):
    rieng = [GTD[k] for k in S["kien_theo_chuong"].get(str(c), []) if GTD.get(k)]
    if rieng:
        return statistics.mean(rieng)
    return KIEN_THO if c == 1 else KIEN[S["dai_theo_chuong"][c - 1]]


def diem_ngay_tham_chieu(c):  # điểm cảng một ngày, một người, kịch bản trung bình
    K = S["kich_ban"]["trung bình"]
    return S["tau_moi_ca"][c - 1] * K["ky_nang_ca"] * (S["diem_du_don"] + S["diem_nhanh"] * K["p_nhanh"])


def nguong_de_xuat():
    """Ngưỡng hạng trần của chương c = tổng điểm tới phần ti_le_hang của ngày mục tiêu, chương 1 trừ ngày chưa có cảng."""
    tran = []
    tong = 0.0
    for c in range(1, 5):
        ngay = ngay_muc_tieu(c) - (S["ngay_chua_co_cang"] if c == 1 else 0)
        tong += S["ti_le_hang"] * ngay * diem_ngay_tham_chieu(c)
        tran.append(5 * round(tong / 5))
    h3, h5, h7, h8 = tran
    return [0, 5 * round(h3 / 2 / 5), h3, 5 * round((h3 + h5) / 2 / 5), h5, 5 * round((h5 + h7) / 2 / 5), h7, h8]


def gia_kien(id_kien):
    return tron(S["tally_moi_gtd"] * GTD[id_kien])


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
        hang.append({"id": uid, "ten": ten, "c": c, "loai": loai, "bac": 0, "vl": 0.0, "mien_phi": False, "nhan": "MVP" if c == 1 else "Sau MVP", "mo": "Shop" if loai in ("BPR", "KE_KIEN_2") else "Xưởng"})
    for c in range(1, 5):
        hang.append({"id": "ENG-10%d" % c, "ten": "Linh kiện động cơ", "c": c, "loai": "ENG", "bac": c, "vl": 0.0, "mien_phi": False, "nhan": "MVP" if c == 1 else "Sau MVP",
                     "mo": "Shop, cần Hạng cảng %d" % S["hang_mo_eng"][c - 1]})
    for c in range(1, 6):
        ds = [h for h in hang if h["c"] == c and not h["mien_phi"]]
        W = sum(S["ti_le_gia"][h["loai"]] for h in ds)
        for h in ds:
            h["gia"] = tron(ngan_sach(c, beta) * S["ti_le_gia"][h["loai"]] / W)
    for h in hang:
        if h["mien_phi"]:
            h["gia"] = 0
    return hang


NGUONG = None  # đặt sau khi có MAT_DO


# ---------- một lần chạy ----------
def chay(kb, N, rng, beta=None, giu_mon=1, ghi_ngay=False):
    global NGUONG
    if NGUONG is None:
        NGUONG = nguong_de_xuat() if S["dung_nguong_de_xuat"] else S["nguong_hang"]
    K = S["kich_ban"][kb]
    mua = sorted(danh_sach_mua(beta), key=lambda m: (m["c"], 0 if m["loai"] in S["uu_tien_mua"] else 1))
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
    tally_thuong = 0.0
    tally_chi = {}
    mat_ngat = 0.0
    nhat_ch1 = 0.0
    dong = []
    chuyen_nhanh = S["chuyen_nhanh_theo_chuong"][0]
    sua_con = VAT_LIEU_SUA[0]
    vot_con = S["nguoi_vot_theo_chuong"][0]
    cang_mo = False
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
        if c == 1 and ngay >= S["ngay_mo_cang_ch1"] and sua_con <= VAT_LIEU_SUA[0] - S["vl_mo_cang_ch1"]:  # Thông dịch viên đã tỉnh và đủ 5 khoang chương 1
            cang_mo = True
        if c > 1:
            cang_mo = True
        # ca cảng
        phut_ca = 0.0
        if cang_mo:
            phut_ca = PHUT_CA[c]
            tau = S["tau_moi_ca"][i]
            can_gtd = don_goc_gtd(c) * (1 + S["he_so_don_coop"][i] * (N - 1))  # quy mô đơn theo số người (gd-quan)
            if S.get("tran_kien_hien_tai"):  # thu một ca không vượt sức chở: số kiện sim ca cảng giao được nhân GTĐ một kiện hiện tại
                can_gtd = min(can_gtd, KIEN_GIAO[c] * kien_tb(c) * (1 + S["he_so_don_coop"][i] * (N - 1)))
            con_xay = sua_con > 0 or any(m["c"] <= c and m["vl"] > 0 for m in mua)
            co_the = kho * (1 - (S["du_tru_vat_lieu_khi_con_xay"] if con_xay else 0.0))
            giao = min(can_gtd, co_the) * K["ky_nang_ca"]
            kho -= giao
            ti_le = giao / can_gtd
            du = tau * ti_le
            thu = giao * S["tally_moi_gtd"] * (1 + S["thuong_du_don"] * min(1, ti_le) + S["thuong_nhanh"] * K["p_nhanh"] * min(1, ti_le))
            tally += thu
            tally_thu += thu
            tally_thuong += thu - giao * S["tally_moi_gtd"]
            q = (N + 1) / 2 if S["diem_theo_quy_mo_don"] else 1  # gd-quan làm tròn lên
            diem += du * (math.ceil(S["diem_du_don"] * q) + math.ceil(S["diem_nhanh"] * q) * K["p_nhanh"])
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
            if tally >= m["gia"] and kho >= m["vl"]:
                tally -= m["gia"]
                kho -= m["vl"]
                m["xong"] = True
                tally_chi[m["loai"]] = tally_chi.get(m["loai"], 0) + m["gia"]
                mua_ngay.append(m)
                if m["loai"] in TRUC:
                    bac[m["loai"]] = max(bac[m["loai"]], m["bac"])
        trip_phut = 2 * (TECH[c][0] if c in TECH else 0.85 * oxy / 60.0)
        phut_ngay = (trip_phut + phut_ca + S["phut_chuan_bi_cuoi_ngay"]) * K["phut_them"] * (1 + S["he_so_ngay_coop_moi_nguoi"] * (N - 1))
        phut += phut_ngay
        if ghi_ngay:
            dong.append((ngay, c, nhat, thu if cang_mo else 0.0, tally, hang, phut, mua_ngay, tally_truoc_mua - (thu if cang_mo else 0.0)))
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
    return {"moc": moc, "tally_thuong": tally_thuong, "tally_thu": tally_thu, "tally_chi": tally_chi, "mat_ngat": mat_ngat, "nhat": nhat_ca_game, "nhat_ch1": nhat_ch1, "dong": dong, "tally_du": tally, "bac": bac}


def nhieu(kb, N, beta=None, giu_mon=1, n=None):
    rng = random.Random(S["seed"] + N * 1000 + list(S["kich_ban"]).index(kb) * 10 + giu_mon)
    return [chay(kb, N, rng, beta, giu_mon) for _ in range(n or S["so_lan_chay"])]


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
def bao_cao():
    K = {}
    V = {}
    kbs = list(S["kich_ban"])
    # 1. Bảng giá kiện
    rows = []
    for k, v in ITEM.items():
        if k.startswith("CGO-") and GTD[k]:
            rows.append([k, v["Tên (VI / EN [TẠM])"].split(" / ")[0], v["Dải"], f(GTD[k]), gia_kien(k), v["Nhãn"]])
    K["gia_kien"] = tbl(["ID kiện", "Tên", "Dải", "GTĐ (gd-items)", "Giá Tally một kiện", "Nhãn"], rows)
    rows = []
    for sp in bang(VP, "SPECIES"):
        if sp["Bắt"] != "Sống (LIV)":
            continue
        cgo = {"Gần": "CGO-121", "Giữa": "CGO-221", "Xa": "CGO-321"}[sp["Dải"]]
        rows.append([cgo, "%s %s" % (sp["Mã gd-combat"], sp["Tên"]), sp["Dải"], sp["GTĐ mẫu bắt"], tron(S["tally_moi_gtd"] * so(sp["GTĐ mẫu bắt"])), sp["Nhãn"]])
    K["gia-song"] = tbl(["Lồng", "Loài bên trong", "Dải", "GTĐ mẫu sống (gd-items)", "Giá Tally một lồng", "Nhãn"], rows)
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
    rows = [[x[0], x[1], f(x[2], 0), f(x[3], 0), f(x[4], 0), x[5], f(x[6] / 60, 2)] for x in one["dong"]]
    K["tally_ngay"] = tbl(["Ngày", "Chương", "Nhặt cả ngày (GTĐ)", "Tally thu ở ca cảng", "Tally còn cuối ngày", "Hạng cảng", "Giờ chơi cộng dồn"], rows)
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
            rows.append([kb, N, f(thu, 0), "100%", f(chi.get("ENG", 0) / tong_chi * 100, 0) + "%", f(sum(chi.get(t, 0) for t in TRUC) / tong_chi * 100, 0) + "%",
                         f((tong_chi - chi.get("ENG", 0) - sum(chi.get(t, 0) for t in TRUC)) / tong_chi * 100, 0) + "%", f(du, 0), f(du / thu * 100, 0) + "%"])
    V["thuong-phan"] = "%d%%" % round(100 * tb([r["tally_thuong"] / r["tally_thu"] for r in R[("trung bình", 1)]]))
    V["thuong-te"] = "%d%%" % round(100 * tb([r["tally_thuong"] / r["tally_thu"] for r in R[("tệ", 1)]]))
    V["thuong-tot"] = "%d%%" % round(100 * tb([r["tally_thuong"] / r["tally_thu"] for r in R[("tốt", 1)]]))
    V["du_tb"] = [x for x in rows if x[0] == "trung bình" and x[1] == 1][0][-1]
    K["source_sink"] = tbl(["Kịch bản", "Số người", "Tally thu cả game", "Phần từ ca cảng", "Chi cho ENG", "Chi cho bộ đồ", "Chi cho dụng cụ, khoang, Shop khác", "Tally dư cuối game", "Dư so với thu"], rows)
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
    for sp in bang(VP, "SPECIES"):
        if "CON-102" not in sp["Vật tiêu hao mỗi lần bắt"] or sp["Hạ được"] != "Có":
            continue
        ha, song = so(sp["E[GTĐ] khi hạ"]), so(sp["GTĐ mẫu bắt"])
        r = [(song - luoi / n) / ha for n in S["phan_tich"]["so_con_moi_phat_luoi"]]
        rows.append(["%s %s" % (sp["Mã gd-combat"], sp["Tên"]), sp["Dải"], f(ha, 2), f(song, 2), f(song / ha, 2)] + [f(x, 2) for x in r] + [sp["Nhãn"]])
    K["bat_song"] = tbl(["Loài cỡ S", "Dải", "Hạ (GTĐ kỳ vọng)", "Mẫu sống (GTĐ, gd-items)", "Sống trên hạ, bắt tay sau choáng", "Ròng trên hạ, lưới trúng 1 con", "2 con", "3 con", "Nhãn"], rows)
    V["luoi_gtd"] = f(luoi, 2)
    rr = [[so(x) for x in r[5:8]] + [so(r[4])] for r in rows]
    V["luoi_min"] = f(min(min(x[0:3]) for x in rr), 2)
    V["luoi_max"] = f(max(max(x[0:3]) for x in rr), 2)
    V["luoi_min2"] = f(min(min(x[1:3]) for x in rr), 2)
    V["tay_min"] = f(min(x[3] for x in rr), 2)
    V["tay_max"] = f(max(x[3] for x in rr), 2)
    # Log 53: chương 1 cần bao nhiêu chuyến đầy túi, ca cảng thiếu hàng
    can = VAT_LIEU_SUA[0] + sum(m["vl"] for m in danh_sach_mua() if m["c"] == 1)
    V["vl_ch1"] = f(can, 0)
    V["chuyen_ch1"] = f(can / (S["tui_theo_bac"][0] * MAT_DO["Gần"]), 1)
    rows = []
    for c in range(1, 6):
        moi = don_goc_gtd(c)
        rows.append([c, f(moi, 0), f(kien_tb(c), 1), f(moi / kien_tb(c), 1), f(KIEN_GIAO[c], 1), f(moi / S["kien_muc_tieu_moi_ca"], 1)])
    K["quy_mo_don"] = tbl(["Chương", "Đơn một ca, một người (GTĐ)", "GTĐ một kiện trung bình hiện tại (gd-items)", "Kiện mỗi ca với kiện hiện tại", "Kiện giao được một ca (sim ca cảng gd-tech)", "GTĐ một kiện cần để đơn là %d kiện" % S["kien_muc_tieu_moi_ca"]], rows)
    V["kien-can-ch1"] = f(don_goc_gtd(1) / S["kien_muc_tieu_moi_ca"], 1)
    V["kien-cu-ch1"] = f(don_goc_gtd(1) / kien_tb(1), 1)
    S["san_ngay_truyen"], san_cu = S["san_ngay_truyen_ha"], S["san_ngay_truyen"]
    a1 = tb([r["moc"][4][1] for r in nhieu("trung bình", 1, n=60)])
    a4 = tb([r["moc"][4][1] for r in nhieu("trung bình", 4, n=60)])
    V["coop4-san-ha"] = "%d%%" % round(100 * a4 / a1)
    V["san-ha-tong"] = str(sum(S["san_ngay_truyen_ha"]))
    S["san_ngay_truyen"] = san_cu
    S["tran_kien_hien_tai"] = False
    rk = nhieu("trung bình", 1, n=60)
    V["gio-game-khong-chan"] = f(tb([r["moc"][4][1] for r in rk if len(r["moc"]) == 5]), 1)
    S["tran_kien_hien_tai"] = True
    V["sua_ch1_goc"] = f(VAT_LIEU_SUA_GOC[0], 0)
    V["sua_ch1_moi"] = f(VAT_LIEU_SUA[0], 0)
    V["xa_gan"] = f(MAT_DO["Xa"] / MAT_DO["Gần"], 1)
    V["gia_cgo101"] = str(gia_kien("CGO-101"))
    V["gia_tui1"] = str([m for m in danh_sach_mua() if m["id"] == "UPG-BAG-1"][0]["gia"])
    kc = S["k_coop"]
    V["moi-nguoi-4"] = "%d%% đến %d%%" % (round(100 * min(MOI_NGUOI.get((c, 4), 1) for c in range(1, 6))), round(100 * max(MOI_NGUOI.get((c, 4), 0) for c in range(1, 6))))
    K["coop_he_so"] = tbl(["Phần", "1 người", "2 người", "3 người", "4 người"], [
        ["Ví Tally, giá, Hạng cảng", "Chung", "Chung", "Chung", "Chung"],
        ["Hệ số khe điểm sinh k(N) (gd-world), Gần, Giữa, Xa"] + ["%s, %s, %s" % (f(1 + kc[0] * (n - 1), 2), f(1 + kc[1] * (n - 1), 2), f(1 + kc[4] * (n - 1), 2)) for n in range(1, 5)],
        ["Mỗi người so với chơi một mình, sim chuyến gd-tech, chương 1 tới 5"] + [", ".join("%d%%" % round(100 * MOI_NGUOI.get((c, n), (1 + kc[c - 1] * (n - 1)) / n)) for c in range(1, 6)) for n in range(1, 5)],
        ["Quy mô đơn chương 1 và 2, chương 3 tới 5 (gd-quan C8)"] + ["%s, %s" % (f(1 + S["he_so_don_coop"][0] * (n - 1), 1), f(1 + S["he_so_don_coop"][4] * (n - 1), 1)) for n in range(1, 5)],
        ["Điểm cảng mỗi đơn đủ (gd-quan đã nhận)"] + [str(math.ceil(S["diem_du_don"] * (n + 1) / 2)) for n in range(1, 5)],
        ["Giá nâng cấp, sửa khoang", "Không đổi", "Không đổi", "Không đổi", "Không đổi"]])
    # số phụ: điểm cố định, khoảng β, sàn chương 1
    S["diem_theo_quy_mo_don"], cu = False, S["diem_theo_quy_mo_don"]
    a1 = tb([r["moc"][4][1] for r in nhieu("trung bình", 1, n=60)])
    a4 = tb([r["moc"][4][1] for r in nhieu("trung bình", 4, n=60)])
    S["diem_theo_quy_mo_don"] = cu
    V["coop4_diem_co_dinh"] = "%d%%" % round(100 * a4 / a1)
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
    K["nguong-hang"] = tbl(["Hạng", "Trần ở chương", "Ngưỡng điểm (gd-quan đã nhận, sim dùng số này)"], [[h + 1, S["tran_chuong_cua_hang"][h], S["nguong_hang"][h]] for h in range(1, 8)])
    K["balance"] = tbl(["Tham số", "Nơi giữ", "Cũ", "Kết quả thử", "Mới", "Vai sửa"], S["lich_su_doi_so"])
    V["mat_do"] = ", ".join("%s %s" % (d, f(MAT_DO[d], 2)) for d in MAT_DO)
    V["vl_sua"] = ", ".join("chương %d: %s" % (i + 1, f(x, 0)) for i, x in enumerate(VAT_LIEU_SUA))
    return {"khoi": K, "bien": V}, R


def bang_md(md, tieu_de):
    """bảng markdown ngay sau dòng tiêu đề"""
    a = md.index(tieu_de)
    dong = []
    for l in md[a:].splitlines()[1:]:
        if l.startswith("|"):
            dong.append([c.strip() for c in l.strip("|").split("|")])
        elif dong:
            break
    return dong[0], dong[2:]


def sheet():
    kq, R_ = bao_cao()
    md = open(GDD, encoding="utf-8").read()
    ref = "projects/game-moi/gdd/he-thong/kinh-te-tien-trinh.md"
    out = {}
    # ECONOMIC: theo ngày, trung bình một người, một lượt có seed. Surplus do sim in.
    one = chay("trung bình", 1, random.Random(S["seed"]), ghi_ngay=True)
    rows = [["Day ID", "Source (vật phẩm)", "Source (Tally)", "Sink Type", "Sink Quality", "Surplus", "Note"]]
    for x in one["dong"]:
        ngay, c, nhat, thu, tl, hang, phut, mua, dau = x
        chi = sum(m["gia"] for m in mua)
        rows.append(["D%02d" % ngay, "Nhặt %s GTĐ (gồm Driftlife, nuôi)" % f(nhat, 0), f(thu, 0) if thu else "0 (chưa có ca cảng)" if c == 1 and not thu else f(thu, 0),
                     ", ".join(m["id"] for m in mua) or "-", ", ".join("%s %s Tally" % (m["id"], m["gia"]) for m in mua) or "Không mua",
                     "Tally: %s + %s - %s = %s" % (f(dau, 0), f(thu, 0), chi, f(tl, 0)), "Chương %d, Hạng cảng %d, giờ chơi cộng dồn %s" % (c, hang, f(phut / 60, 2))])
    rows.append(["Ghi chú", "Kịch bản trung bình, một người, một lượt seed %d" % S["seed"], "Tally = GTĐ kiện x %d, cộng thưởng" % S["tally_moi_gtd"], "ID theo tab Shop và Upgrade", "Giá theo tab Shop và Upgrade", "Surplus do sim in, không gõ tay", "Bản đủ: %s mục 8, sinh bằng sim-kinh-te.py --sheet" % ref])
    out["ECONOMIC"] = rows
    # Shop: bảng giá duy nhất
    rows = [["ID", "Item List", "Quantity", "Unit", "Value", "Price (Tally)", "New Price (Tally)", "Note"]]
    for k, v in ITEM.items():
        if k.startswith("CGO-") and GTD[k] and k not in ("CGO-121", "CGO-221", "CGO-321"):
            rows.append([k, v["Tên (VI / EN [TẠM])"].split(" / ")[0], 1, "kiện", f(GTD[k]), gia_kien(k), "", "Tàu trả khi bốc kiện. %s" % v["Nhãn"]])
    for sp in bang(VP, "SPECIES"):
        if sp["Bắt"] == "Sống (LIV)":
            cgo = {"Gần": "CGO-121", "Giữa": "CGO-221", "Xa": "CGO-321"}[sp["Dải"]]
            rows.append(["%s %s" % (cgo, sp["Mã gd-combat"]), "Lồng sinh vật sống, %s" % sp["Tên"], 1, "lồng", sp["GTĐ mẫu bắt"], tron(S["tally_moi_gtd"] * so(sp["GTĐ mẫu bắt"])), "", "Tàu trả theo loài bên trong. Con nuôi trả 0,5 lần. %s" % sp["Nhãn"]])
    for m in danh_sach_mua():
        if m["loai"] in ("ENG", "BPR", "KE_KIEN_2"):
            dk = "Cần Hạng cảng %d. " % S["hang_mo_eng"][m["c"] - 1] if m["loai"] == "ENG" else ""
            rows.append([m["id"], m["ten"], 1, "cái", "-", m["gia"], "", "Shop bán. %sMở chương %d. %s" % (dk, m["c"], m["nhan"])])
    out["Shop"] = rows
    # Upgrade: khuôn khối, mỗi trục một khối
    rows = [["Issue ID", "Task", "Sub Task", "Short Description", "Ref"]]
    nhom = [("OXY", "T-OXY dung lượng Oxy (UPG-OXY)", "Chỉ là số: chuyến dài hơn"), ("TUI", "T-TUI sức chứa túi (UPG-BAG)", "Chỉ là số: mang về nhiều hơn"),
            ("DAY", "T-DAY bộ đẩy (UPG-THR)", "Chỉ là số: chuyến gọn hơn"), ("VO", "T-VO cấp môi trường (UPG-ENV)", "Mở khả năng: vào dải mới không bị hao Oxy gấp 2,5 hoặc 4 (K6). Không chặn chương"),
            ("DUNGCU", "T-DUNGCU số ô dụng cụ (UPG-RACK)", "Mở khả năng: mang thêm một dụng cụ"), ("DUNGCU_KHAI_THAC", "Dụng cụ (UPG-MIN, UPG-HAR, UPG-NET)", "Chỉ là số, cổng mềm: khai thác điểm cứng không chậm gấp 4"),
            ("KHOANG_CAP", "Nâng cấp khoang (KH05-C2, KHxx-C3)", "Khoang thêm tính năng theo gd-quan")]
    ds = danh_sach_mua()
    for i, (loai, ten, kieu) in enumerate(nhom, 1):
        iid = "UP-%02d" % i
        rows.append([iid, ten, "Type", kieu, ref + " mục 3.2"])
        rows.append([iid, ten, "Characteristic", "Hiệu ứng từng bậc ở nguoi-choi.md mục 2.6 (bộ đồ) hoặc vat-pham.md (dụng cụ), tram-va-cang.md (khoang). Mua một lần cho cả nhóm (C4), làm ở Xưởng, xong qua đêm", ""])
        for m in sorted([m for m in ds if m["loai"] == loai], key=lambda x: (x["c"], x["id"])):
            gia = "0 Tally (quest Kỹ sư)" if m["mien_phi"] else "%s Tally" % m["gia"]
            vl = "vật liệu %s GTĐ (vat-pham.md)" % f(m["vl"]) if m["vl"] else "không vật liệu"
            rows.append([iid, ten, m["id"], "%s, %s, mở chương %d (%s). %s" % (gia, vl, m["c"], m["mo"], m["nhan"]), ""])
    out["Upgrade"] = rows
    # PROCESSING: theo chương, số ngày do sim in
    dau, data = bang_md(md, "### PROCESSING (tab Sheet, theo chương)")
    runs = R_[("trung bình", 1)]
    rows = [["Day ID", "User Progression", "Salvage Unlock", "Zone Unlock", "Recipe Unlock", "Enemy Unlock", "Customer Unlock", "Power Growth", "Design Intent", "Note"]]
    truoc = 0
    for r in data:
        c = int(r[0])
        het = round(tb([x["moc"][c - 1][0] for x in runs]))
        rows.append(["Chương %d (ngày %d tới %d)" % (c, truoc + 1, het), r[1], r[2], r[3], r[4], r[5], S["tau_theo_chuong"][str(c)], r[6] + ". GTĐ một chuyến %s" % f(TECH[c][1], 0), r[7],
                     "Sàn ngày truyện %d. Ngân sách Tally %s. Bản đủ: %s" % (S["san_ngay_truyen"][c - 1], tron(ngan_sach(c)) if c <= 4 else "không", ref)])
        truoc = het
    out["PROCESSING"] = rows
    # Balance Sheet: lịch sử đổi số
    rows = [["Feature", "Category", "Current Value", "Test Result", "Issue Found", "Adjustment Plan", "New Value", "Result After Change", "Decision", "Notes"]]
    for t, noi, cu, kq_thu, moi, vai in S["lich_su_doi_so"]:
        rows.append([t, noi, cu, "Sim GD-028", kq_thu, "Vai sửa: %s" % vai, moi, "Bảng 8.1 của %s" % ref, "Keep" if vai == "Giữ" else "Pass", ""])
    out["Balance Sheet"] = rows
    thu_muc = os.path.join(ROOT, "projects", "game-moi", "gdd", "sheet")
    os.makedirs(thu_muc, exist_ok=True)
    for ten, rows in out.items():
        with open(os.path.join(thu_muc, ten + ".tsv"), "w", encoding="utf-8", newline="\n") as fh:
            for r in rows:
                fh.write("\t".join(str(c).replace("\t", " ").replace("\n", " ") for c in r) + "\n")
    json.dump(out, open(os.path.join(HERE, "sheet.json"), "w", encoding="utf-8"), ensure_ascii=False)
    print({k: len(v) - 1 for k, v in out.items()})


def selftest():
    assert tron(37) == 35 and tron(372) == 370 and tron(3720) == 3700
    assert abs(vat_lieu_nang_cap(1) - 25) < 1e-9
    a = chay("trung bình", 1, random.Random(1))
    b = chay("trung bình", 1, random.Random(1))
    assert a["moc"] == b["moc"], "cùng seed phải cùng kết quả"
    assert len(a["moc"]) == 5, "kịch bản trung bình một người phải xong game"
    t = chay("tệ", 1, random.Random(1))
    g = chay("tốt", 1, random.Random(1))
    assert t["moc"][-1][1] > a["moc"][-1][1] > g["moc"][-1][1], "tệ chậm hơn trung bình chậm hơn tốt"
    assert a["tally_thu"] > 0
    print("selftest xanh")


if __name__ == "__main__":
    if "--selftest" in sys.argv:
        selftest()
        sys.exit(0)
    if "--sheet" in sys.argv:
        sheet()
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
