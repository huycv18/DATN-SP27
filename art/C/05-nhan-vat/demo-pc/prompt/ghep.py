import sys, os
from PIL import Image, ImageDraw, ImageFont

src, dst = sys.argv[1], sys.argv[2]
os.makedirs(dst, exist_ok=True)
CARDS = [
    ("pc1.png", "PC-1  Nguyễn Việt", "Việt Nam - nam, 29 - slot cam ○ - MVP"),
    ("pc2.png", "PC-2  Jonas Weber", "Đức - nam, 34 - slot lam ngọc △ - MVP"),
    ("pc3.png", "PC-3  Mei Tanaka", "Nhật Bản - nữ, 26 - slot vàng chanh □ - Sau MVP"),
    ("pc4c.png", "PC-4  Niamh Doyle", "Ireland - nữ, 36 - slot hồng tím ◇ - Sau MVP"),
]
F = "C:/Windows/Fonts/"
big = ImageFont.truetype(F + "segoeuib.ttf", 44)
small = ImageFont.truetype(F + "segoeui.ttf", 28)
sym = ImageFont.truetype(F + "seguisym.ttf", 28)
W, BAR = 1254, 110
sheet = Image.new("RGB", (W * 2, (W + BAR) * 2), "#F5EFE0")
d = ImageDraw.Draw(sheet)
for i, (f, name, sub) in enumerate(CARDS):
    im = Image.open(os.path.join(src, f)).convert("RGB")
    assert im.size == (W, W), (f, im.size)
    x, y = (i % 2) * W, (i // 2) * (W + BAR)
    d.text((x + 40, y + 14), name, font=big, fill="#1B1530")
    for part in sub.split(" "):  # ký hiệu slot cần font ký hiệu, chữ Việt cần Segoe UI
        f2 = sym if part in "○△□◇" else small
        d.text((x + 40 + (cx := locals().get("cx", 0)), y + 68), part, font=f2, fill="#4A4458")
        cx += d.textlength(part + " ", font=f2)
    del cx
    sheet.paste(im, (x, y + BAR))
    im.save(os.path.join(dst, f.replace("pc4c", "pc4").replace(".png", ".webp")), quality=88)
sheet.save(os.path.join(dst, "doi-hinh-4-pc.webp"), quality=88)
sheet.resize((W, W + BAR)).save(os.path.join(src, "preview.png"))
print("ok", sheet.size)
