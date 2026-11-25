"""Kiểm lớp màu cố định: tương phản với nền vùng, và cặp màu dễ nhầm.
Chạy: python art/C/04-bang-mau/kiem-mau.py
Sửa màu thì sửa ở CO_DINH và NEN, chạy lại, chép bảng vào cau-truc-bang-mau.md.
"""
import colorsys
import sys

sys.stdout.reconfigure(encoding="utf-8")  # console Windows mặc định cp1252, không in được tiếng Việt

CO_DINH = {  # tên: hex. Màu đề xuất cũng nằm ở đây, đánh dấu trong file .md
    "slot1_cam": "#F26B1D",
    "slot2_lam_ngoc": "#1FB5D6",
    "slot3_vang_chanh": "#D8E21F",
    "slot4_hong_tim": "#D6309B",
    "wardens_trang_xuong": "#EDEBE0",
    "wardens_luc_acid": "#7CFC3A",
    "bao_don_vang": "#FFB020",
    "bao_don_do": "#FF3B30",
    "choang_xanh_duong": "#3D7BFF",
    "nhat_duoc_vien": "#FFF4D6",
    "hiem1_xam": "#A7B0BA",
    "hiem2_luc": "#45C46A",
    "hiem3_lam": "#4FA3FF",
    "hiem4_tim": "#C77DFF",
    "driftlife_xanh_ngoc": "#80C5C8",  # lấy mẫu từ ảnh Lead duyệt (Skitter Ray)
}
NEN = {  # nền tối nhất của từng vùng MVP
    "vanh_dai_ngoai": "#1E1C3D",  # lấy mẫu từ ảnh Lead duyệt
}
SAT_HUE = 20  # hai màu bão hòa lệch hue dưới mức này thì dễ nhầm
TUONG_PHAN_MIN = 3.0  # phần tử đồ họa, theo ux-ui.md luật 4


def rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))


def lum(h):
    c = [x / 12.92 if x <= 0.04045 else ((x + 0.055) / 1.055) ** 2.4 for x in rgb(h)]
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]


def tuong_phan(a, b):
    la, lb = sorted((lum(a), lum(b)), reverse=True)
    return (la + 0.05) / (lb + 0.05)


def hls(h):
    return colorsys.rgb_to_hls(*rgb(h))


def lech_hue(a, b):
    d = abs(hls(a)[0] - hls(b)[0]) * 360
    return min(d, 360 - d)


assert round(tuong_phan("#FFFFFF", "#000000"), 1) == 21.0  # tự kiểm công thức
assert lech_hue("#FF0000", "#00FFFF") == 180

loi = 0
print("| Màu | Hex | Hue | Tương phản với nền " + " | ".join(NEN) + " |")
print("|---|---|---|---|")
for ten, hx in CO_DINH.items():
    tp = [tuong_phan(hx, n) for n in NEN.values()]
    dau = "" if min(tp) >= TUONG_PHAN_MIN else " THẤP"
    loi += bool(dau)
    print(f"| {ten} | `{hx}` | {hls(hx)[0] * 360:.0f} | " + " | ".join(f"{t:.1f}{dau}" for t in tp) + " |")

print("\n| Cặp dễ nhầm | Lệch hue | Lệch độ sáng |")
print("|---|---|---|")
ds = list(CO_DINH.items())
for i, (a, ha) in enumerate(ds):
    for b, hb in ds[i + 1:]:
        if min(hls(ha)[2], hls(hb)[2]) < 0.25:  # màu gần xám thì hue không có nghĩa
            continue
        if lech_hue(ha, hb) < SAT_HUE:
            print(f"| {a} / {b} | {lech_hue(ha, hb):.0f} | {abs(lum(ha) - lum(hb)):.2f} |")
sys.exit(1 if loi else 0)
