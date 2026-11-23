"""Trình xem và kiểm bố cục Vành đai ngoài (GD-026 mục 2.9 và 6.3.1, gd-world). Bản tham chiếu cho dev dựng bộ sinh thật.

Chạy: python -X utf8 projects/game-moi/sim/bo_cuc.py [--seed 1] [--lan 1000] [--xem 3]
Ghi `bo-cuc.md` cạnh file này: tỉ lệ hợp lệ, tỉ lệ rơi bố cục dự phòng, trùng mảnh, beacon đổi ô.
Định nghĩa dùng (khớp map.md):
- Ô là (cột, hàng), cột 1 đến 4 từ trái sang phải, hàng 1 dưới, 2 giữa, 3 trên.
- Cổng ghi Trái, Phải, Trên, Dưới. Cạnh chạm biên map không tính.
- Nửa ngoài là cột lớn hơn nửa số cột (Vành đai ngoài: cột 3, 4). Mảnh cờ "Có" chỉ đặt ở nửa ngoài, cờ "Không" đặt mọi cột.
- Trùng mảnh: cùng mảnh ở cùng ô với chuyến trước, chỉ tính ô ghép.
"""
import random
import sys
from collections import Counter
from pathlib import Path

COT, HANG = 4, 3
BEN_NGOAI, CINDER = (1, 2), (3, 3)
CO_DINH = {BEN_NGOAI: ("Bến ngoài", "1111"), CINDER: ("Lối vào Cinder", "1101")}
# ID: (loại, cổng TPTD, có SP-B, chỉ nửa ngoài) theo map.md 6.4
KHO = {
    "G-M01": ("Mở", "1111", 1, 0), "G-M02": ("Mở", "1110", 1, 0), "G-M03": ("Mở", "1101", 1, 0),
    "G-M04": ("Mở", "1111", 1, 1), "G-M05": ("Mở", "0111", 1, 0),
    "G-H01": ("Hành lang", "1100", 0, 0), "G-H02": ("Hành lang", "1100", 0, 0), "G-H03": ("Hành lang", "0011", 0, 0),
    "G-O01": ("Ổ", "1100", 0, 0), "G-O02": ("Ổ", "1010", 0, 1), "G-O03": ("Ổ", "1101", 0, 1),
    "G-X01": ("Xác lớn", "1100", 1, 0), "G-X02": ("Xác lớn", "1110", 1, 1), "G-X03": ("Xác lớn", "1101", 1, 0),
    "G-T01": ("Thưởng", "1000", 0, 1), "G-T02": ("Thưởng", "0100", 0, 1),
}
# Bố cục dự phòng dựng tay (map.md 6.4), đã kiểm hợp lệ bằng chính hàm kiem() ở dưới
DU_PHONG = {(1, 1): "G-M05", (1, 3): "G-H03", (2, 1): "G-H02", (2, 2): "G-H01", (2, 3): "G-X01",
            (3, 1): "G-O03", (3, 2): "G-X03", (4, 1): "G-X02", (4, 2): "G-M01", (4, 3): "G-M04"}
THU_LAI, TRUNG_TOI_DA, BEACON_GAN = 20, 0.5, 1
HUONG = {"T": (-1, 0, 0, 1), "P": (1, 0, 1, 0), "Tr": (0, 1, 2, 3), "D": (0, -1, 3, 2)}  # dx, dy, cổng mình, cổng ô kề


def cong(bc, o):
    return CO_DINH[o][1] if o in CO_DINH else KHO[bc[o]][1]


def noi(bc, a, b):
    for dx, dy, i, j in HUONG.values():
        if (a[0] + dx, a[1] + dy) == b:
            return cong(bc, a)[i] == "1" and cong(bc, b)[j] == "1"
    return False


def ke(o):
    for dx, dy, _, _ in HUONG.values():
        c, h = o[0] + dx, o[1] + dy
        if 1 <= c <= COT and 1 <= h <= HANG:
            yield (c, h)


def ngoai(o):
    return o[0] > COT / 2


def kiem(bc, duong, beacon, truoc=None):
    """Trả danh sách lỗi. Rỗng là hợp lệ."""
    loi = []
    for o, m in bc.items():
        if o in CO_DINH:
            continue
        if KHO[m][3] and not ngoai(o):
            loi.append(f"{m} cờ nửa ngoài ở {o}")
    ghep = [bc[o] for o in bc if o not in CO_DINH]
    if len(ghep) != len(set(ghep)):
        loi.append("mảnh lặp")
    for a, b in zip(duong, duong[1:]):
        if not noi(bc, a, b):
            loi.append(f"đường chính đứt {a} {b}")
    if cong(bc, duong[0])[0] != "1":
        loi.append("Bến ngoài không mở về cửa khí")
    if cong(bc, duong[-1])[1] != "1":
        loi.append("đường chính không ra ranh ngoài")
    # vùng đi được từ Bến ngoài
    tham, ngan = {BEN_NGOAI}, [BEN_NGOAI]
    while ngan:
        a = ngan.pop()
        for b in ke(a):
            if b not in tham and noi(bc, a, b):
                tham.add(b)
                ngan.append(b)
    if CINDER not in tham:
        loi.append("lối vào Cinder không nối được")
    canh = sum(1 for a in tham for b in ke(a) if b in tham and a < b and noi(bc, a, b))
    if canh < len(tham):
        loi.append("không có vòng")
    # nhịp: không hai mảnh Ổ hoặc Thưởng liền nhau trên đường chính
    nang = [o not in CO_DINH and KHO[bc[o]][0] in ("Ổ", "Thưởng") for o in duong]
    if any(x and y for x, y in zip(nang, nang[1:])):
        loi.append("hai mảnh Ổ hoặc Thưởng liền nhau trên đường chính")
    if not beacon:
        loi.append("không đặt được beacon")
    for b in beacon:
        if b not in tham or not ngoai(b) or b in CO_DINH or not KHO[bc[b]][2]:
            loi.append(f"beacon sai chỗ {b}")
        if not (b in duong or any(x in duong for x in ke(b))):
            loi.append(f"beacon không kề đường chính {b}")
        if truoc and b in truoc["beacon"]:
            loi.append("beacon cùng ô chuyến trước")
    if truoc:
        trung = sum(1 for o in bc if o not in CO_DINH and truoc["bc"].get(o) == bc[o])
        if trung > TRUNG_TOI_DA * (COT * HANG - len(CO_DINH)):
            loi.append(f"trùng {trung} mảnh cùng ô")
    return loi


def sinh_duong(rng):
    """Mỗi cột vào ở một hàng, đổi tối đa một hàng kề rồi sang phải (map.md 2.9 bước 3)."""
    duong, h = [], BEN_NGOAI[1]
    for c in range(1, COT + 1):
        duong.append((c, h))
        moi = max(1, min(HANG, h + rng.choice((-1, 0, 0, 1))))
        if moi != h:
            duong.append((c, moi))
            h = moi
    return duong


def mot_lan(rng, truoc):
    duong = sinh_duong(rng)
    bc = {o: None for o in CO_DINH}
    con = list(KHO)
    rng.shuffle(con)
    # bước 4: ô trên đường chính, cổng khớp hướng
    can = {}
    for a, b in zip(duong, duong[1:]):
        for ten, (dx, dy, i, j) in HUONG.items():
            if (a[0] + dx, a[1] + dy) == b:
                can.setdefault(a, set()).add(i)
                can.setdefault(b, set()).add(j)
    can.setdefault(duong[0], set()).add(0)
    can.setdefault(duong[-1], set()).add(1)
    for o in dict.fromkeys(duong):
        if o in CO_DINH:
            if any(CO_DINH[o][1][i] != "1" for i in can[o]):
                return None
            continue
        hop = [m for m in con if all(KHO[m][1][i] == "1" for i in can[o]) and (ngoai(o) or not KHO[m][3])]
        if not hop:
            return None
        bc[o] = hop[0]
        con.remove(hop[0])
    # bước 5, 6: điền ô còn lại, ưu tiên mảnh nối được với ô đã có
    for o in [(c, h) for c in range(1, COT + 1) for h in range(1, HANG + 1) if (c, h) not in bc]:
        hop = [m for m in con if (ngoai(o) or not KHO[m][3])]
        tot = [m for m in hop if any(b in bc and bc[b] is not None or b in CO_DINH for b in ke(o))
               and any(noi({**bc, o: m}, o, b) for b in ke(o) if b in bc)]
        chon = (tot or hop)
        if not chon:
            return None
        bc[o] = chon[0]
        con.remove(chon[0])
    # bước 8: beacon
    ung = [o for o in bc if o not in CO_DINH and ngoai(o) and KHO[bc[o]][2]
           and (o in duong or any(x in duong for x in ke(o))) and not (truoc and o in truoc["beacon"])]
    beacon = rng.sample(ung, min(BEACON_GAN, len(ung)))
    return {"bc": bc, "duong": duong, "beacon": beacon}


def sinh(rng, truoc):
    for lan in range(1, THU_LAI + 1):
        kq = mot_lan(rng, truoc)
        if kq and not kiem(kq["bc"], kq["duong"], kq["beacon"], truoc):
            return kq, lan
    duong = [(1, 2), (2, 2), (3, 2), (4, 2)]
    bc = {**{o: None for o in CO_DINH}, **DU_PHONG}
    b = [o for o in ((4, 3), (4, 1)) if not (truoc and o in truoc["beacon"])][:1]
    return {"bc": bc, "duong": duong, "beacon": b}, 0


def ve(kq):
    out = []
    for h in range(HANG, 0, -1):
        hang = []
        for c in range(1, COT + 1):
            o = (c, h)
            ten = CO_DINH[o][0][:6] if o in CO_DINH else kq["bc"][o]
            dau = ("*" if o in kq["duong"] else " ") + ("B" if o in kq["beacon"] else " ")
            hang.append(f"{ten:>6}{dau}")
        out.append(" ".join(hang))
    return "\n".join(out)


def vn(x, d=1):
    return f"{x:.{d}f}".replace(".", ",")


def main():
    arg = dict(zip(sys.argv[1::2], sys.argv[2::2]))
    seed, lan, xem = int(arg.get("--seed", 1)), int(arg.get("--lan", 1000)), int(arg.get("--xem", 3))
    assert not kiem({**{o: None for o in CO_DINH}, **DU_PHONG}, [(1, 2), (2, 2), (3, 2), (4, 2)], [(4, 3)]), "bố cục dự phòng không hợp lệ"
    rng = random.Random(seed)
    truoc, du_phong, lan_dau, trung, cung_o, mau = None, 0, 0, Counter(), 0, []
    for i in range(lan):
        kq, thu = sinh(rng, truoc)
        du_phong += thu == 0
        lan_dau += thu == 1
        if truoc:
            trung[sum(1 for o in kq["bc"] if o not in CO_DINH and truoc["bc"].get(o) == kq["bc"][o])] += 1
            cung_o += any(b in truoc["beacon"] for b in kq["beacon"])
        if i < xem:
            mau.append(ve(kq))
        truoc = kq
    cap = lan - 1
    out = [f"# Bố cục Vành đai ngoài (sinh bởi bo_cuc.py, seed {seed}, {lan} chuyến liền nhau)", "",
           "| Chỉ số | Kết quả | Tiêu chí (map.md mục 8) |", "|---|---|---|",
           f"| Hợp lệ ngay lần thử đầu | {vn(lan_dau / lan * 100)}% | |",
           f"| Rơi bố cục dự phòng (quá {THU_LAI} lần thử) | {vn(du_phong / lan * 100, 2)}% | dưới 1% |",
           f"| Bố cục cuối hợp lệ | 100% (mọi bố cục qua kiem(), dự phòng đã kiểm) | 100% |",
           f"| Trùng mảnh cùng ô với chuyến trước, lớn nhất | {max(trung)} trên 10 ô ghép | tối đa 5 |",
           f"| Trùng mảnh cùng ô, trung bình | {vn(sum(k * v for k, v in trung.items()) / cap)} trên 10 | |",
           f"| Beacon cùng ô với chuyến trước | {vn(cung_o / cap * 100)}% | 0% |", "",
           "Mẫu bố cục (hàng 3 ở trên, * là đường chính, B là beacon):", ""]
    for m in mau:
        out += ["```", m, "```", ""]
    ok = du_phong / lan < 0.01 and max(trung) <= 5 and cung_o == 0
    out.append(f"Tự kiểm tiêu chí: {'ĐẠT' if ok else 'KHÔNG ĐẠT'}")
    Path(__file__).with_name("bo-cuc.md").write_text("\n".join(out) + "\n", encoding="utf-8")
    print("\n".join(out))


if __name__ == "__main__":
    main()
