# Đo chiều cao 4 silhouette ở nửa dưới bảng so dáng, in tỉ lệ so với người thứ 3 (Việt, 1,0 u).
# Chạy: python -X utf8 -P prompt/do-cao.py <ảnh so dáng>
import sys
from PIL import Image

im = Image.open(sys.argv[1]).convert("L")
W, H = im.size
y0 = H // 2 + 10
den = lambda x, y: im.getpixel((x, y)) < 40
xs = [x for x in range(W) if any(den(x, y) for y in range(y0, H - 40, 4))]
cum, s, p = [], xs[0], xs[0]
for x in xs[1:]:
    if x - p > 15:
        cum.append((s, p))
        s = x
    p = x
cum.append((s, p))
cum = [c for c in cum if c[1] - c[0] > 40]
assert len(cum) == 4, f"cần 4 silhouette, thấy {len(cum)}: {cum}"
cao = []
for a, b in cum:
    ys = [y for y in range(y0, H - 30) if any(den(x, y) for x in range(a, b + 1, 2))]
    cao.append(ys[-1] - ys[0])
MUC_TIEU = [0.98, 1.1, 1.0, 0.9]  # Niamh, Jonas, Việt, Mei theo bảng Tỉ lệ preset
for ten, h, mt in zip(["Niamh", "Jonas", "Việt", "Mei"], cao, MUC_TIEU):
    print(f"{ten}: {h} px, {h / cao[2]:.2f} lần Việt, mục tiêu {mt}")
