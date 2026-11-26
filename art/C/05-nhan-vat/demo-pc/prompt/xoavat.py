# Xóa vật để lại ở góc phải dưới, tô bằng màu nền lấy mẫu ngay trên vùng xóa
import statistics
from PIL import Image, ImageDraw
X0 = {"pc1": 1025, "pc2": 992, "pc3": 1020, "pc4c": 1012}
for n, x0 in X0.items():
    im = Image.open(f"out/{n}.png").convert("RGB")
    px = [im.getpixel((x, y)) for x in range(x0, 1250, 5) for y in range(860, 890, 3)]
    bg = tuple(int(statistics.median(c[i] for c in px)) for i in range(3))
    ImageDraw.Draw(im).rectangle((x0, 895, 1253, 1253), fill=bg)
    im.save(f"out2/{n}.png")
    print(n, bg)
