"""Chép số từ bản sim chuyến của gd-tech vào map.md mục 3.9 (GD-026, gd-world). Không chép tay.

Chạy: python -X utf8 projects/game-moi/sim/dong_bo_sim.py
Đọc `tools/ket-qua/sim-chuyen.md`, thay hai bảng giữa hai dấu <!--SIM:...--> trong `gdd/he-thong/map.md`.
"""
import re
from pathlib import Path

GOC = Path(__file__).resolve().parent.parent
SIM = GOC / "tools" / "ket-qua" / "sim-chuyen.md"
MAP = GOC / "gdd" / "he-thong" / "map.md"


def bang_sau(md, tieu_de):
    i = md.index(tieu_de)
    dong = md[i:].splitlines()
    out, bat_dau = [], False
    for d in dong[1:]:
        if d.startswith("|"):
            out.append(d)
            bat_dau = True
        elif bat_dau:
            break
    return out


def o(d):
    return [x.strip() for x in d.strip().strip("|").split("|")]


def main():
    sim = SIM.read_text(encoding="utf-8")
    gio = re.search(r"lúc (\S+?),?\s", sim).group(1)
    # Bảng 1: một người, kịch bản trung bình, theo chương
    b1 = bang_sau(sim, "## 1.")
    hd = o(b1[0])
    ci = {k: hd.index(k) for k in ("Chương", "Kịch bản", "Số người", "Phút nhóm P50 (P10 đến P90)", "Về vì túi đầy", "Bị kéo về (ngạt không cứu)")}
    hang = ["| Chương | Phút P50 (P10 đến P90) | Về vì túi đầy | Bị kéo về |", "|---|---|---|---|"]
    for d in b1[2:]:
        c = o(d)
        if c[ci["Kịch bản"]] == "trung bình" and c[ci["Số người"]] == "1":
            hang.append(f"| {c[ci['Chương']]} | {c[ci['Phút nhóm P50 (P10 đến P90)']]} | {c[ci['Về vì túi đầy']]} | {c[ci['Bị kéo về (ngạt không cứu)']]} |")
    assert len(hang) == 7, "thiếu chương trong bảng 1 của sim"
    # Bảng 2: đối chiếu khung, chép nguyên
    b2 = bang_sau(sim, "## 2.")
    assert len(b2) >= 3, "không đọc được bảng 2 của sim"

    m = MAP.read_text(encoding="utf-8")
    for ten, bang in (("CHUONG", hang), ("DOI-CHIEU", b2)):
        mo, dong = f"<!--SIM:{ten}-->", f"<!--/SIM:{ten}-->"
        assert mo in m and dong in m, f"map.md thiếu dấu {mo}"
        a, b = m.index(mo) + len(mo), m.index(dong)
        m = m[:a] + f"\n- Bản sim gd-tech lúc {gio}, một người trừ dòng nhóm 4.\n\n" + "\n".join(bang) + "\n" + m[b:]
    MAP.write_text(m, encoding="utf-8")
    print(f"Đã chép bản sim lúc {gio}: {len(hang) - 2} chương, {len(b2) - 2} dòng đối chiếu")


if __name__ == "__main__":
    main()
