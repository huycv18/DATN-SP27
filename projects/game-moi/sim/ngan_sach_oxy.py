"""Ngân sách Oxy một chuyến theo chương và bậc bình (GD-026, gd-world).

Phép tính tất định từ số khởi điểm ước, KHÔNG phải sim. Sim nhiều seed là việc của gd-tech ở đợt 2.
Chạy: python -X utf8 projects/game-moi/sim/ngan_sach_oxy.py  -> ghi ngan-sach-oxy.md cạnh file này.
"""
from datetime import datetime
from pathlib import Path

# Tham số khởi điểm (ước). Đổi ở đây, chạy lại, dán bảng vào map.md.
V_BAC = {0: 6.0, 1: 6.5, 2: 7.0, 3: 7.5}   # vmax theo bậc T-DAY, u/s, nguồn nguoi-choi.md
V = V_BAC[0]
F = 1.3                 # hệ số đường vòng so với đường thẳng
DRAIN = 1.0             # hao nền Oxy mỗi giây [CHỜ gd-character]
THIEU_CAP = {1: 2.5, 2: 4.0}   # thiếu 1 cấp, thiếu từ 2 cấp, nguồn nguoi-choi.md
DU_TRU = 0.15           # người chơi quay về khi còn 15% bình
DON = 0.10              # phần bình dự trù cho trúng đòn và hazard
GIU_BEACON = 5.0        # giây giữ phím Recall Beacon
TOI_BEACON = 15.0       # giây bay đường thẳng tới beacon gần nhất đã thấy (trung bình)
DAI = {"Vành đai ngoài": (0, 160), "Vành đai trong": (160, 400), "Vùng trung tâm": (400, 720)}   # ranh dải, u (mảnh rộng 40 u: 4, 6, 8 cột)
BINH = {0: 330, 1: 450, 2: 600, 3: 780, 4: 1000}              # bình theo bậc T-OXY 0-4, GDM chốt log 54
TUI = {0: 80, 1: 100, 2: 126, 3: 168, 4: 216}                  # túi theo bậc T-TUI 0-4, GDM chốt log 54
CAP_DAI = {"Vành đai ngoài": 0, "Vành đai trong": 1, "Vùng trung tâm": 2}                       # cấp môi trường của dải (gd-world)
# chương: (bậc bình, dải làm việc, điểm làm việc u, có beacon, bậc bộ đẩy)
CHUONG = {1: (0, "Vành đai ngoài", 80, True, 0), 2: (1, "Vành đai trong", 280, True, 1), 3: (2, "Vùng trung tâm", 480, True, 2),
          4: (3, "Vùng trung tâm", 560, True, 3), 5: (4, "Vùng trung tâm", 640, True, 3)}
def doc_a_tu_map():
    """a của k(N) theo dải đọc từ bảng "| Dải | a |" ở map.md mục 3.8, nguồn duy nhất (gd-tech cũng đọc bảng này)."""
    md = (Path(__file__).parent.parent / "gdd" / "he-thong" / "map.md").read_text(encoding="utf-8")
    phan = md[md.index("### 3.8 "):md.index("### 3.9 ")]
    a = {}
    for dong in phan.splitlines():
        o = [x.strip() for x in dong.strip("|").split("|")]
        if dong.startswith("| ") and len(o) >= 2 and o[0] in ("Vành đai ngoài", "Vành đai trong", "Vùng trung tâm") and o[1].replace(",", "").isdigit():
            a.setdefault(o[0], float(o[1].replace(",", ".")))
    assert set(a) == {"Vành đai ngoài", "Vành đai trong", "Vùng trung tâm"}, "không đọc được bảng a ở map.md mục 3.8"
    return a


K_NGUOI = doc_a_tu_map()
KICH_HOAT = {"Vành đai ngoài": (0.40, 0.40), "Vành đai trong": (0.38, 0.40), "Vùng trung tâm": (0.35, 0.40)}   # tỉ lệ kích hoạt khe SP-R, SP-D khi 1 người
# node khoan và nạy Vành đai ngoài: (GTĐ kỳ vọng, giây thao tác bậc 1), nguồn vat-pham.md bảng SLV
NODE_KHOAN = {"SLV-102 Mạch quặng sắt": (4.4, 8.0), "SLV-103 Khối băng trôi": (4.0, 7.0),
              "SLV-104 Hòm kỹ thuật vỡ": (5.0, 6.0), "SLV-105 Tấm vỏ lớn": (6.0, 14.0)}   # giây đã nhân 2 (gd-items, GD-030)
NHAT_TAY = (1.1, 1.6)   # SLV-101, 1 lần quay, giây đã nhân 2
KC_CUM = 4              # u, node khoan đặt thành cụm
KC_TAY = 2              # u, SLV-101 rải như node khác, khoảng cách tối thiểu giữa hai khe SLV-101
MUC_TIEU = {1: (240, 360), 5: (600, 720)}                     # khung mục 9, giây


def s(x, d=0):
    return f"{x:.{d}f}".replace(".", ",")


def kn(n, dai="Vành đai ngoài"):
    return 1 + K_NGUOI[dai] * (n - 1)


def toi_moc(k, f):
    return f + (1 - f) / k


def bay(x, v=V):
    return x / v * F


def chuyen(chuong, thieu=0):
    """thieu: số cấp vỏ bộ đồ còn thiếu so với cấp của dải làm việc."""
    bac, dai, x, co_beacon, bac_day = CHUONG[chuong]
    v = V_BAC[bac_day]
    binh = BINH[bac]
    lo, _ = DAI[dai]
    he = THIEU_CAP[min(thieu, 2)] if thieu else 1.0
    # bay ra: phần trong dải làm việc chịu hệ số môi trường
    ra = bay(lo, v) * DRAIN + bay(x - lo, v) * DRAIN * he
    ve_cua = ra
    ve_beacon = (bay(TOI_BEACON * V, V) + GIU_BEACON) * DRAIN * he
    ve = min(ve_cua, ve_beacon) if co_beacon else ve_cua
    dung = binh * (1 - DU_TRU)           # Oxy tiêu trong chuyến
    lam = dung - ra - ve - binh * DON    # Oxy còn cho làm việc
    giay_lam = lam / (DRAIN * he)
    # thời lượng thật: phần bay theo giây, phần làm việc theo giây
    giay_ra = bay(x, v)
    giay_ve = bay(TOI_BEACON * V, V) + GIU_BEACON if ve == ve_beacon else bay(x, v)
    giay_don = binh * DON / (DRAIN * he)
    tong = giay_ra + giay_ve + giay_lam + giay_don
    return dict(binh=binh, dai=dai, ra=giay_ra, ve=giay_ve, lam=giay_lam, tong=tong)


def main():
    out = [f"# Ngân sách Oxy một chuyến (sinh bởi ngan_sach_oxy.py, {datetime.now():%Y-%m-%d %H:%M})", "",
           "Phép tính ước, chưa sim. Đơn vị giây.", "",
           "## Ranh dải", "", "| Dải | Từ (u) | Tới (u) | Giây bay thẳng tới ranh ngoài | Giây bay có đường vòng |", "|---|---|---|---|---|"]
    for d, (a, b) in DAI.items():
        out.append(f"| {d} | {a} | {b} | {b / V:.0f} | {bay(b):.0f} |")
    out += ["", "## Trần Oxy theo chương, đủ cấp môi trường (thời lượng thật đo bằng sim, xem do-nhay-chuyen.md)", "",
            "| Chương | Bậc bình | Bậc bộ đẩy | Oxy | Túi | Dải | Bay ra | Về | Làm việc | Dự trù đòn | Tổng chuyến (giây) | Tổng (phút) |",
            "|---|---|---|---|---|---|---|---|---|---|---|---|"]
    kq = {}
    for c in CHUONG:
        r = chuyen(c)
        kq[c] = r
        out.append(f"| {c} | {CHUONG[c][0]} | {CHUONG[c][4]} | {r['binh']} | {TUI[CHUONG[c][0]]} | {r['dai']} | {r['ra']:.0f} | {r['ve']:.0f} | {r['lam']:.0f} | "
                   f"{r['binh'] * DON:.0f} | {r['tong']:.0f} | {s(r['tong'] / 60, 1)} |")
    out += ["", "## Thiếu cấp môi trường (vào dải mới khi bộ đồ chưa nâng)", "",
            "| Chương | Dải | Làm việc đủ cấp | Làm việc thiếu 1 cấp | Còn lại |", "|---|---|---|---|---|"]
    for c in (2, 3):
        a, b = chuyen(c), chuyen(c, 1)
        out.append(f"| {c} | {a['dai']} | {a['lam']:.0f} | {b['lam']:.0f} | {b['lam'] / a['lam'] * 100:.0f}% |")
    out += ["", "## Hệ số tài nguyên theo số người (C8), theo dải", "",
            "Số chốt đo bằng sim chuyến của gd-tech và sim kinh tế của gd-economy. Bảng này chỉ in hệ số và trần khe.", "",
            "| Dải | a | k(2) | k(3) | k(4) |", "|---|---|---|---|---|"]
    for d in K_NGUOI:
        out.append(f"| {d} | {s(K_NGUOI[d], 2)} | {s(kn(2, d), 2)} | {s(kn(3, d), 2)} | {s(kn(4, d), 2)} |")
    out += ["", "## Tỉ lệ kích hoạt khe một người (trần 100% ở 4 người)", "", "| Dải | SP-R một người | SP-R 4 người | SP-D một người | SP-D 4 người |", "|---|---|---|---|---|"]
    for d, (r, dd) in KICH_HOAT.items():
        out.append(f"| {d} | {r * 100:.0f}% | {r * kn(4, d) * 100:.0f}% | {dd * 100:.0f}% | {dd * kn(4, d) * 100:.0f}% |")
    out += ["", "## Nhặt tay so với khoan, có tính bay giữa các node", "",
            "| Node | GTĐ | Giây thao tác | Khoảng cách tới node kế (u) | GTĐ mỗi giây có bay | So với khoan trung bình |", "|---|---|---|---|---|---|"]
    khoan = [gtd / (t + KC_CUM / V) for (gtd, t) in NODE_KHOAN.values()]
    tb = sum(khoan) / len(khoan)
    for ten, (gtd, t) in NODE_KHOAN.items():
        out.append(f"| {ten} | {s(gtd, 1)} | {s(t, 1)} | {KC_CUM} | {s(gtd / (t + KC_CUM / V), 2)} | |")
    tay = NHAT_TAY[0] / (NHAT_TAY[1] + KC_TAY / V)
    out.append(f"| SLV-101 Mảnh vỡ trôi | {s(NHAT_TAY[0], 1)} | {s(NHAT_TAY[1], 1)} | {KC_TAY} | {s(tay, 2)} | {s(tay / tb, 2)} lần |")

    # tự kiểm: khớp khung mục 9 và không có số âm
    for c, (lo, hi) in MUC_TIEU.items():
        assert kq[c]["tong"] >= lo, f"chương {c}: trần Oxy {kq[c]['tong']:.0f}s ngắn hơn mục tiêu thấp {lo}s"
    assert all(r["lam"] > 0 for r in kq.values())
    assert chuyen(3, 1)["lam"] > 0, "thiếu cấp ở Vùng trung tâm phải vẫn làm việc được (K6: đi được nhưng đắt)"
    assert all(r * kn(4, d) <= 1.0 and dd * kn(4, d) <= 1.0 for d, (r, dd) in KICH_HOAT.items()), "vượt 100% khe ở 4 người"
    assert K_NGUOI["Vành đai ngoài"] >= 0.27 and K_NGUOI["Vùng trung tâm"] >= 0.37, "dưới mức tối thiểu đạt 60% mỗi người của sim gd-tech"
    assert 0.8 <= tay / tb <= 1.3, "nhặt tay và khoan phải gần ngang nhau khi tính bay"
    p = Path(__file__).with_name("ngan-sach-oxy.md")
    p.write_text("\n".join(out) + "\n", encoding="utf-8")
    print("\n".join(out))
    print("\nTự kiểm: ĐẠT")


if __name__ == "__main__":
    main()
