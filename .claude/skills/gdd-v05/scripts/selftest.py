# Selftest của sinh-v05.py: kiểm cấu trúc Main Task (nhóm, số dòng DEV, STT liền mạch, Ghi chú đúng hàng theo tên), khung chung Puzzle,
# lỗi khóa ghi_chu, và chạy được khi thiếu -X utf8. Không so từng chữ với cấu hình mẫu (chữ mẫu do gd-systems sửa).
# Chạy: python -I .claude/skills/gdd-v05/scripts/selftest.py   (thoát 0 khi mọi ca đạt)
import json
import os
import subprocess
import sys
import tempfile
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")
SINH = Path(__file__).with_name("sinh-v05.py")
NHOM = ("GD", "2D ART", "DEV", "SFX", "VFX")

DROP = dict(ho="drop", ten_game="Thử Drop", vat="quân", tam_nhin="dưới vạch", cung_loai="cùng hình", logic_nhat="nhặt quân sáng",
            demo_scope="1 màn", object_scope="12 quân", dev_scope="core", sfx_scope="10 âm", vfx_scope="8 hiệu ứng")
TACH = dict({k: x for k, x in DROP.items() if k != "ho"}, gameplay=[{"muc": "Cách chơi", "dong": ["- dòng 1", "- dòng 2\ncó xuống dòng thật"]}], luat_loi_scope="luật",
            dev_rows=[["Khay", "scope khay", "gc khay"], ["Băng", "scope băng\nXong khi: chạy", ""], ["Ghép level", "json", ""]],
            object_rows=[["Nguyên liệu", "12 món", "gc món"], ["Đầu bếp", "1 người", ""]],
            mechanic_art_rows=[["Nắp", "2 trạng thái", "gc nắp"]],
            ghi_chu={"GD/Mechanic": "gc mechanic GD", "Sfx": "gc sfx", "Băng": "gc băng đè", "Background": "gc nền\\nhai dòng"})
# Khung chung Puzzle (Lead 05/11/2026): game ngoài họ drop, cấu hình tối thiểu chỉ có các mục Gameplay
ONG = dict(ten_game="Sort ống nước", gameplay=[
    {"muc": "Cách chơi", "dong": ["- Chạm 1 ống rồi chạm ống khác để rót lớp nước trên cùng sang"]},
    {"muc": "Ống nước", "dong": ["- Mỗi ống chứa tối đa 4 lớp nước", "- Chỉ rót được khi lớp trên cùng cùng màu hoặc ống đích rỗng"]},
    {"muc": "Win", "dong": ["- Mỗi ống chỉ còn một màu là win"]},
    {"muc": "Lose", "dong": ["- Không còn nước đi nào là thua"]}])
THIEU_WIN = dict(ten_game="Thiếu Win", gameplay=[{"muc": "Cách chơi", "dong": ["- Chạm để chơi"]}, {"muc": "Lose", "dong": ["- Hết lượt là thua"]}])
CAM = ("order", "hàng chờ", "hồi sinh", "revive", "coin")


def chay(cfg, du_utf8=True):
    d = Path(tempfile.mkdtemp())
    (d / "c.json").write_text(json.dumps(cfg, ensure_ascii=False), encoding="utf-8")
    env = {k: v for k, v in os.environ.items() if k not in ("PYTHONIOENCODING", "PYTHONUTF8")}
    lenh = [sys.executable, "-I"] + (["-X", "utf8"] if du_utf8 else []) + [str(SINH), str(d / "c.json"), "--ra", str(d / "ra")]
    r = subprocess.run(lenh, capture_output=True, env=env)
    bang = [l.split("\t") for l in (d / "ra/02-main-task.tsv").read_text(encoding="utf-8").splitlines()] if r.returncode == 0 else None
    chay.gameplay = (d / "ra/01-gameplay.tsv").read_text(encoding="utf-8") if r.returncode == 0 else ""
    chay.gameplay_file = d / "ra/01-gameplay.tsv"
    return r, bang


def nhom_cua(bang):
    """{nhóm: [dòng]} theo thứ tự, kiểm luôn STT liền 1..N."""
    ra, g, stt = {}, None, 0
    for h in bang[1:]:
        if h[0] == "" and h[1] in NHOM and not any(h[2:]):
            g = h[1]
            ra[g] = []
            continue
        stt += 1
        assert h[0] == str(stt), f"STT đứt: {h[0]!r} ở dòng {h[1]!r}, chờ {stt}"
        ra[g].append(h)
    return ra


ca = []


def kiem(ten, f):
    try:
        f()
        ca.append((ten, True, ""))
    except AssertionError as e:
        ca.append((ten, False, str(e)))


def ca_drop():
    r, b = chay(DROP)
    assert r.returncode == 0, r.stderr.decode("utf-8", "replace")
    g = nhom_cua(b)
    assert list(g) == list(NHOM), f"thứ tự nhóm {list(g)}"
    assert [len(g[k]) for k in NHOM] == [5, 5, 2, 1, 1], [len(g[k]) for k in NHOM]
    assert all(len(h) == 6 for h in b)


def ca_tach():
    r, b = chay(TACH)
    assert r.returncode == 0, r.stderr.decode("utf-8", "replace")
    g = nhom_cua(b)
    assert [h[1] for h in g["DEV"]] == ["Khay", "Băng", "Ghép level"], [h[1] for h in g["DEV"]]
    assert all(h[3] == "Dev" for h in g["DEV"])
    art = [h[1] for h in g["2D ART"]]
    assert art == ["Demo màn gameplay", "Luồng UI", "Background", "Nguyên liệu", "Đầu bếp", "Nắp"], art
    gc = {(k, h[1]): h[5] for k in g for h in g[k]}
    assert gc[("GD", "Mechanic")] == "gc mechanic GD", gc[("GD", "Mechanic")]
    assert gc[("SFX", "Sfx")] == "gc sfx" and gc[("DEV", "Băng")] == "gc băng đè" and gc[("DEV", "Khay")] == "gc khay"
    assert gc[("2D ART", "Background")] == "gc nền\\nhai dòng" and gc[("2D ART", "Nắp")] == "gc nắp"
    assert gc[("DEV", "Ghép level")] == "" and gc[("VFX", "Anim, VFX")] == "", "ghi chú lọt sang hàng khác"
    assert "scope băng\\nXong khi: chạy" in [h[2] for h in g["DEV"]], "xuống dòng thật trong dev_rows chưa đổi thành \\n"


def ca_khoa_sai():
    r, _ = chay(dict(DROP, ghi_chu={"Mechanic": "x"}))  # Mechanic có ở GD và 2D ART
    assert r.returncode != 0 and "trùng 2 dòng" in r.stderr.decode("utf-8", "replace"), "khóa trùng tên không bị chặn"
    r, _ = chay(dict(DROP, ghi_chu={"13": "x"}))  # khóa STT cũ
    assert r.returncode != 0 and "không khớp dòng nào" in r.stderr.decode("utf-8", "replace"), "khóa STT cũ không bị chặn"


def ca_thieu_utf8():
    r, b = chay(TACH, du_utf8=False)
    assert r.returncode == 0 and b, "chết khi thiếu -X utf8: " + r.stderr.decode("utf-8", "replace")[-200:]


def ca_ong():
    r, b = chay(ONG)
    assert r.returncode == 0, r.stderr.decode("utf-8", "replace")
    g = nhom_cua(b)
    assert list(g) == list(NHOM), f"thứ tự nhóm {list(g)}"
    chu = (chay.gameplay + "\n".join("\t".join(h) for h in b)).lower()
    lot = [w for w in CAM if w in chu]
    assert not lot, f"chữ của họ drop lọt vào game ngoài họ: {lot}"
    assert "Ống nước" in chay.gameplay, "thiếu mục riêng của game"
    assert g["GD"][0][2] == "Cách chơi, Ống nước, Win, Lose", f"luật lõi mặc định phải là tên các mục Gameplay: {g['GD'][0][2]!r}"
    assert g["2D ART"][0][2] == "chờ Lead chọn", "trường Main Task thiếu mà không ghi chờ Lead chọn"


def ca_thieu_win():
    r, _ = chay(THIEU_WIN)
    assert r.returncode == 0, r.stderr.decode("utf-8", "replace")
    win = [l.split("\t") for l in chay.gameplay.splitlines() if l.split("\t")[1:2] == ["Win"]]
    assert win and win[0][2] == "- chờ Lead chọn", f"ô Win: {win}"


def ca_khong_object():
    r, b = chay(ONG)  # sort ống nước không khai object_scope, object_rows
    assert r.returncode == 0, r.stderr.decode("utf-8", "replace")
    art = [h[1] for h in nhom_cua(b)["2D ART"]]
    assert not any(x.startswith("Các object") for x in art), f"game không có object vẫn ra dòng object: {art}"
    r, b = chay(dict(ONG, vat="lớp nước", object_scope="8 màu nước"))
    art = [h[1] for h in nhom_cua(b)["2D ART"]]
    assert "Các object: lớp nước" in art, f"có object_scope mà thiếu dòng object: {art}"


def ca_khong_gameplay():
    r, _ = chay({k: x for k, x in DROP.items() if k != "ho"})
    assert r.returncode != 0 and '"ho"' in r.stderr.decode("utf-8", "replace"), "thiếu cả ho và gameplay mà không bị chặn"


def ca_sang_sheet():
    # sheet-yeu-cau.py nằm ở gdd-v1/scripts (repo phòng) hoặc v1/scripts (gói gdd); gói không có thì bỏ qua ca này
    yc = next((p for p in (SINH.parents[2] / "gdd-v1" / "scripts" / "sheet-yeu-cau.py", SINH.parents[2] / "v1" / "scripts" / "sheet-yeu-cau.py") if p.exists()), None)
    if not yc:
        return
    r, _ = chay(ONG)
    assert r.returncode == 0, r.stderr.decode("utf-8", "replace")
    d = chay.gameplay_file.parent
    ra = d / "s.json"
    q = subprocess.run([sys.executable, "-I", str(yc), str(d), "--chu", "--ra", str(ra)], capture_output=True)
    assert q.returncode == 0, q.stderr.decode("utf-8", "replace")
    v = json.loads(ra.read_text(encoding="utf-8"))
    o = v["Gameplay"][2][2]  # mục Ống nước có 2 dòng
    assert o.startswith("'- ") and "\n- " in o and "\\n" not in o, f"ô Gameplay sai: {o[:60]!r}"
    for f in ("01-gameplay", "02-main-task"):
        (d / f"{f}.html").write_text("<table></table>", encoding="utf-8")
    q = subprocess.run([sys.executable, "-I", str(yc), str(d), "--ra", str(ra)], capture_output=True)
    assert q.returncode == 0, q.stderr.decode("utf-8", "replace")
    req = json.loads(ra.read_text(encoding="utf-8"))
    nhom = [x for x in req if "repeatCell" in x and x["repeatCell"]["range"]["sheetId"] == 1001
            and x["repeatCell"]["range"]["startRowIndex"] > 0 and x["repeatCell"]["range"]["endRowIndex"] - x["repeatCell"]["range"]["startRowIndex"] == 1]
    assert len(nhom) == 5, f"{len(nhom)} hàng nhóm, cần 5"
    gop = [x["mergeCells"]["range"] for x in req if "mergeCells" in x]
    assert gop == [{"sheetId": 0, "startRowIndex": 1, "endRowIndex": len(v["Gameplay"]), "startColumnIndex": 0, "endColumnIndex": 1}], f"gộp sai: {gop}"


for ten, f in (("họ drop (ho = drop): 5 nhóm, STT 1-14", ca_drop), ("tách DEV, object, mechanic art + Ghi chú theo tên", ca_tach),
               ("khóa ghi_chu trùng hoặc STT cũ bị chặn", ca_khoa_sai), ("chạy thiếu -X utf8", ca_thieu_utf8),
               ("Puzzle ngoài họ drop (sort ống nước): 0 chữ Order, hàng chờ, Hồi sinh, Revive, coin", ca_ong),
               ("thiếu mục Win: ô Win ghi chờ Lead chọn", ca_thieu_win),
               ("game không khai object: không có dòng Các object, có object_scope thì có", ca_khong_object),("không có ho, không có gameplay thì dừng", ca_khong_gameplay),
               ("sheet-yeu-cau --chu: xuống dòng thật, ' trước ô mở đầu -; lô lệnh: 5 hàng nhóm, gộp cột Ảnh (bỏ qua khi gói không có)", ca_sang_sheet)):
    kiem(ten, f)
for ten, ok, ly_do in ca:
    print(("ĐẠT  " if ok else "HỎNG ") + ten + (f": {ly_do}" if ly_do else ""))
hong = sum(not ok for _, ok, _ in ca)
print(f"{len(ca) - hong} đạt, {hong} hỏng")
sys.exit(1 if hong else 0)
