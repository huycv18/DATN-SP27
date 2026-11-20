# Sinh GDD V0.5 (2 tab Gameplay, Main Task) cho mọi game Puzzle. Khuôn gọn theo references/khuon-va-bai-hoc.md.
# Lead 05/11/2026: "mỗi game đều có những gameplay và điều kiện thắng thua riêng biệt", nên mặc định là khung chung Puzzle:
#   - Không có "ho": bắt buộc "gameplay" (list {muc, dong}). Thiếu mục Win hoặc Lose thì thêm mục đó với ô "chờ Lead chọn".
#     Main Task thiếu trường nào cũng ra "chờ Lead chọn", không chèn chữ của họ drop (Order, hàng chờ, Hồi sinh, Revive).
#   - "ho": "drop" là preset họ drop (nhặt 3 vật cùng loại vào Order, hàng chờ, vật lý, Lead 21/10/2026): tab Gameplay sinh
#     từ gameplay_drop, Main Task dùng câu mặc định của họ drop.
# Chạy: python -I .claude/skills/gdd-v05/scripts/sinh-v05.py projects/<slug>/gdd/cau-hinh-v05.json [--ra <thư mục>]
# Ra: <thư mục>/01-gameplay.tsv, 02-main-task.tsv (mặc định projects/<slug>/gdd/sheet/; Gameplay 3 cột, Main Task 6 cột).
# Main Task tách dòng theo cấu hình (Lead 04/11, trước đây ở script riêng tach-dev.py của một sản phẩm):
#   "dev_rows"          [[hạng mục, scope, ghi chú], ...] thay các dòng của nhóm DEV
#   "object_rows"       cùng dạng, thay dòng "Các object" của 2D ART
#   "mechanic_art_rows" cùng dạng, thay dòng "Mechanic" của 2D ART khi Lead chốt mechanic
# rồi đánh lại STT liền nhau. "ghi_chu" khớp theo tên hạng mục (cột B), không theo STT: {"Tên": "...", "NHÓM/Tên": "..."}.
# Tên trùng ở 2 nhóm (Mechanic của GD và 2D ART) phải ghi kèm nhóm. Khóa không khớp dòng nào thì dừng, không im lặng bỏ qua.
import json
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")  # console cp1252 làm chết khi in tiếng Việt nếu thiếu -X utf8
NL = chr(92) + "n"
NHOM = ("GD", "2D ART", "DEV", "SFX", "VFX")
CHO = "chờ Lead chọn"


def o(*dong):
    return NL.join(d for d in dong if d)


def gameplay_drop(cfg):
    v = cfg["vat"]                      # tên ngắn: "bóng", "quân", "object"
    V = v[0].upper() + v[1:]
    nhin = cfg["tam_nhin"]              # câu ngắn: vùng nào nhặt được
    gameplay = [
        ["Ảnh", "Mục", "Mô tả"],
        ["", "Cách chơi", o(
            f"- Tap {cfg.get('vat_day_du', v)} {nhin} để nhặt" + (f", {cfg['tam_nhin_them']}" if cfg.get('tam_nhin_them') else ""),
            f"- Nhặt đủ 3 {v} cùng loại ({cfg['cung_loai']}) để clear Order",
            "- Mục tiêu: clear hết Order trước khi hàng chờ đầy")],
        ["", "Order", o(
            f"- Luôn có 2 Order, mỗi Order là 1 loại {v}, 3 ô",
            f"- Đủ 3 {v} thì clear, Order mới vào ngay chỗ đó",
            "- Thanh tiến độ đầy dần mỗi lần clear 1 Order")],
        # Logic theo cách Lead viết lại trên Sheet game họ drop đầu tiên 21/10/2026: luật theo chủ đề, không liệt kê trạng thái.
        ["", "Logic", o(
            f"- Nhặt {v}: {cfg['logic_nhat']}",
            f"- Điều phối {v}:",
            "  + Trùng Order: Tự động bay vào Order tương ứng.",
            "  + Không trùng Order: Rơi vào ô trống ngoài cùng bên trái của hàng chờ.",
            f"- Ghép từ hàng chờ: Khi Order mới xuất hiện trùng loại với {v} trong hàng chờ -> {v} tự động bay lên ghép vào Order.",
            f"- Cơ chế hàng chờ: {V} nằm yên, không tự nổ dù đủ {cfg.get('bo_3', 'bộ 3')}. Đầy ô mở -> Thua.",
            f"- Chuỗi Combo: Clear Order liên tiếp mà không có {v} vào hàng chờ sẽ tăng cấp dải khen. Có 1 {v} vào hàng chờ -> chuỗi về 0.")],
        ["", "Hàng chờ", o(
            '- 7 ô: 5 ô mở + 2 ô "+" mở bằng xem quảng cáo, giữ tới hết level',
            f"- {V} không trùng Order vào ô trống trái nhất, theo thứ tự vào, không tự nổ",
            f"- Ô mở nào cũng có {v} là thua")],
        # Lead bỏ mục Mechanic khỏi tab Gameplay (Sheet game họ drop đầu tiên 21/10/2026); mechanic chỉ nằm ở Main Task.
        ["", "Hồi sinh", o(
            "- Màn thua: Hồi sinh 900 coin hoặc Chơi lại",
            f"- Hồi sinh thu hết {v} hàng chờ vào Box. Order mới trùng loại thì {v} trong Box tự vào Order")],
        ["", "Win", o("- Clear hết Order là win")],
        ["", "Lose", o(f"- Hàng chờ đầy mà không {v} nào bay lên Order được là thua", "- Không có đồng hồ")],
    ]
    # Game có luật Order khác "3 cùng loại" (ví dụ Order theo chủ đề) ghi đè từng mục bằng list dòng trong cấu hình.
    for muc, khoa in (("Cách chơi", "dong_cach_choi"), ("Order", "dong_order"), ("Logic", "dong_logic"), ("Hàng chờ", "dong_hang_cho"), ("Hồi sinh", "dong_hoi_sinh")):
        if cfg.get(khoa):
            for h in gameplay:
                if h[1] == muc:
                    h[2] = o(*cfg[khoa])
    return gameplay


def la_nhom(h):
    return h[0] == "" and h[1] in NHOM and not any(h[2:])


def tach_dong(main, cfg):
    """Thay dòng theo dev_rows, object_rows, mechanic_art_rows rồi đánh lại STT liền nhau."""
    dong = lambda ds, nguoi: [["", h, s, nguoi, "", g] for h, s, g in ds]
    if cfg.get("dev_rows"):
        i = next(i for i, h in enumerate(main) if la_nhom(h) and h[1] == "DEV")
        j = next(j for j, h in enumerate(main) if j > i and la_nhom(h))
        main = main[:i + 1] + dong(cfg["dev_rows"], "Dev") + main[j:]
    for ten, khoa in (("Các object", "object_rows"), ("Mechanic", "mechanic_art_rows")):
        if cfg.get(khoa):
            i = next(i for i, h in enumerate(main) if h[1].startswith(ten) and h[3] == "2D art")
            main = main[:i] + dong(cfg[khoa], "2D art") + main[i + 1:]
    stt = 0
    for h in main[1:]:
        if not la_nhom(h):
            stt += 1
            h[0] = str(stt)
    return main


def ghi_chu(main, gc):
    """Ô Ghi chú chủ dự án sửa tay trên Sheet: khớp theo tên hạng mục (hoặc NHÓM/Tên), để sinh lại không đè sai hàng."""
    ten = {}
    nhom = ""
    for h in main[1:]:
        if la_nhom(h):
            nhom = h[1]
            continue
        ten.setdefault(h[1], []).append(h)
        ten.setdefault(f"{nhom}/{h[1]}", []).append(h)
    loi = []
    for k, v in gc.items():
        hs = ten.get(k, [])
        if len(hs) != 1:
            loi.append(f"{k!r}: {'không khớp dòng nào' if not hs else 'trùng ' + str(len(hs)) + ' dòng, ghi kèm nhóm (NHÓM/Tên)'}")
            continue
        hs[0][5] = v
    if loi:
        sys.exit("ghi_chu lỗi:\n  " + "\n  ".join(loi) + "\nTên hạng mục có: " + ", ".join(k for k in ten if "/" not in k))
    return main


def sinh(cfg):
    if cfg.get("ho") == "drop":
        v = cfg["vat"]
        gameplay = gameplay_drop(cfg)
        mac = dict(luat_loi_scope=f"Order 3 {v} cùng loại, hàng chờ, Hồi sinh, Win, Lose", tutorial_scope="Onboarding L1, hàng chờ, mechanic",
                   ui_scope="Gameplay, Win, Lose, Hồi sinh, Chơi lại, Settings", dev_hang_muc=f"Core gameplay + 1 mechanic hidden + Revive + Diễn hoạt anim {v}")
        lay = lambda k: cfg.get(k, mac[k]) if k in mac else cfg[k]  # họ drop: trường scope bắt buộc như trước
    elif cfg.get("ho"):
        sys.exit(f'"ho": {cfg["ho"]!r} chưa có preset. Có: "drop". Game khác bỏ "ho" và ghi "gameplay"')
    else:
        if not cfg.get("gameplay"):
            sys.exit('Khung chung Puzzle cần "gameplay": [{"muc": ..., "dong": [...]}]. Game họ drop thì ghi "ho": "drop"')
        v = cfg.get("vat", "object")
        muc = list(cfg["gameplay"])
        for ten, cung in (("Win", ("win", "thắng")), ("Lose", ("lose", "thua"))):
            if not any(m["muc"].strip().lower() in cung for m in muc):
                muc.append({"muc": ten, "dong": []})
        gameplay = [["Ảnh", "Mục", "Mô tả"]] + [["", m["muc"], o(*m["dong"]) or f"- {CHO}"] for m in muc]
        # tên trường và mặc định chốt với gd-systems 05/11/2026 (khuôn chung.json)
        mac = dict(luat_loi_scope=", ".join(m["muc"] for m in muc), tutorial_scope="Onboarding L1, mechanic", ui_scope="Gameplay, Win, Lose",
                   dev_hang_muc=f"Core gameplay + 1 mechanic hidden + Diễn hoạt anim {v}")
        lay = lambda k: cfg.get(k, mac.get(k, CHO))
    nhom = lambda ten: ["", ten, "", "", "", ""]
    ref = cfg.get("ref", "")
    nhan_obj = cfg.get("nhan_object") or ("Các object" + (f": {v}" if v != "object" else ""))
    main = [
        ["STT", "Hạng mục", "Scope", "Người thực hiện", "Trạng thái", "Ghi chú"],
        nhom("GD"),
        ["", "Luật lõi V0.5", lay("luat_loi_scope"), "GD", "Đã làm", "Tab Gameplay"],
        ["", "Mechanic", cfg.get("mechanic_scope", "1 mechanic hidden"), "GD", "", ""],
        ["", "Level Design", f"{cfg.get('so_level', 15)} level", "GD", "", cfg.get("level_tag", "")],
        ["", "Tool level", f"File json {cfg.get('so_level', 15)} level", "GD", "", ""],
        ["", "Tutorials", lay("tutorial_scope"), "GD", "", ""],
        nhom("2D ART"),
        ["", "Demo màn gameplay", lay("demo_scope"), "2D art", "", ref],
        ["", "Luồng UI", lay("ui_scope"), "2D art", "", ""],
        ["", "Background", cfg.get("background", "1 background"), "2D art", "", ""],
        ["", nhan_obj, lay("object_scope"), "2D art", "", ref],
        ["", "Mechanic", "Art của mechanic khi chốt", "2D art", "", ""],
        nhom("DEV"),
        ["", lay("dev_hang_muc"), lay("dev_scope"), "Dev", "", ref],
        ["", "Ghép luồng UI + Ghép level Design", f"Ghép UI và {cfg.get('so_level', 15)} level từ file json", "Dev", "", ""],
        nhom("SFX"),
        ["", "Sfx", lay("sfx_scope"), "SFX", "", ""],
        nhom("VFX"),
        ["", "Anim, VFX", lay("vfx_scope"), "VFX", "", ""],
    ]
    # Khung chung: game không khai object (match 3, screw, sort...) thì không có dòng "Các object" (gd-qa 05/11/2026). Họ drop giữ như cũ.
    if cfg.get("ho") != "drop" and not (cfg.get("object_scope") or cfg.get("object_rows")):
        main = [h for h in main if not (h[3] == "2D art" and h[1] == nhan_obj)]
    main = ghi_chu(tach_dong(main, cfg), cfg.get("ghi_chu", {}))
    return gameplay, main


def doi_xuong_dong(x):
    """Xuống dòng thật trong cấu hình đổi thành chuỗi \\n theo khuôn Sheet, cả trong list và dict lồng nhau."""
    if isinstance(x, str):
        return x.replace(chr(10), NL)
    if isinstance(x, list):
        return [doi_xuong_dong(y) for y in x]
    if isinstance(x, dict):
        return {k: doi_xuong_dong(y) for k, y in x.items()}
    return x


def ghi(cfg, out):
    out.mkdir(parents=True, exist_ok=True)
    for ten, bang in zip(("01-gameplay.tsv", "02-main-task.tsv"), sinh(cfg)):
        n = len(bang[0])
        for h in bang:
            assert len(h) == n and not any("\t" in x or "\n" in x for x in h), (ten, h[:2])
        (out / ten).write_text("\n".join("\t".join(h) for h in bang) + "\n", encoding="utf-8", newline="\n")
        print(out / ten, len(bang) - 1, "hàng dữ liệu")


def main():
    a = sys.argv[1:]
    if not a or a[0] in ("-h", "--help"):
        print("Dùng: python -I sinh-v05.py <cau-hinh-v05.json> [--ra <thư mục>]. Trường cấu hình: references/khuon-va-bai-hoc.md mục 4.")
        sys.exit(0 if a else 2)
    p = Path(a[0])
    cfg = doi_xuong_dong(json.loads(p.read_text(encoding="utf-8")))
    ghi(cfg, Path(a[a.index("--ra") + 1]) if "--ra" in a else p.parent / "sheet")


if __name__ == "__main__":
    main()
