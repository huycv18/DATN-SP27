"""Một script cho mọi việc đưa GDD lên Google Sheet qua connector (Drive + Sheets), kiểu Sheet của Lead (05/11/2026,
gdd-v05/references/khuon-va-bai-hoc.md mục 8). Cách dùng đầy đủ: ../references/tao-sheet.md.

  python -I sheet-yeu-cau.py <thư mục sheet> [--ra <file.json>] [--da-co-tab]
      Sheet mới: mảng `requests` cho update_spreadsheet. Mỗi NN-<tab>.html (sheet-html.mjs sinh): đặt tên tab (tab đầu đổi tên
      Sheet1, sheetId 0; tab sau addSheet sheetId 1001, 1002...), dán HTML (màu nhóm, đậm, ô gộp, xuống dòng), rồi định dạng kiểu Lead:
      header đỏ chữ trắng cỡ 12 cao 36px cố định, Gameplay gộp cột Ảnh A2 tới hàng cuối, cột Mục hồng đào, hàng nhóm Main Task hồng đào,
      độ rộng cột, viền, xuống dòng tự động, căn giữa dọc.
      --da-co-tab: tab đã dựng lần trước (cùng sheetId), chỉ dán lại và định dạng.
  python -I sheet-yeu-cau.py <thư mục sheet> --chu [--ra <file.json>]
      Sheet có sẵn của Lead: chỉ chữ. Ra {"<tên tab>": [[...]]} cho update_values từng tab từ A1 (USER_ENTERED), giữ định dạng tay
      của Lead. `\\n` trong TSV thành xuống dòng thật, ô mở đầu bằng - + = có thêm ' để Sheet không đọc thành công thức.
  python -I sheet-yeu-cau.py <thư mục sheet> --doi
      Đối chiếu: đổi _tren-sheet/NN-<tab>.json (mảng `values` của get_values) thành .csv rồi chạy quet.mjs --doi (Lead sửa tay ô nào).
  python -I sheet-yeu-cau.py --selftest
"""
import argparse
import csv
import json
import re
import subprocess
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")
HERE = Path(__file__).resolve().parent

TEN_TAB = {
    "gameplay": "Gameplay",
    "main-task": "Main Task",
    "level-curve": "Level Curve",
    "level-data": "Level Data",
    "tutorials": "Tutorials",
    "asset-man-hinh": "Asset & Màn hình",
}
# độ rộng cột (px) theo kiểu Lead; tab khác tự co theo nội dung
RONG = {
    "Gameplay": [265, 120, 560],
    "Main Task": [50, 180, 520, 120, 120, 300],
}
DO = {"red": 0.72, "green": 0.25, "blue": 0.25}
HONG = {"red": 0.99, "green": 0.89, "blue": 0.84}
TRANG = {"red": 1, "green": 1, "blue": 1}


def ten_tab(stem: str) -> str:
    goc = re.sub(r"^\d+-", "", stem)
    return TEN_TAB.get(goc, goc.replace("-", " ").title())


def doc_tsv(f: Path, chu=False):
    """Hàng của TSV. chu=True: dạng dán bằng update_values (xuống dòng thật, ' trước ô mở đầu - + =)."""
    hang = []
    for dong in f.read_text(encoding="utf-8").replace("﻿", "").rstrip("\n").split("\n"):
        o = dong.split("\t")
        if chu:
            o = [c.replace("\\n", "\n") for c in o]
            o = [("'" + c) if c[:1] in ("-", "+", "=") else c for c in o]
        hang.append(o)
    return hang


def la_hang_nhom(h):
    return len(h) > 1 and not h[0].strip() and h[1].strip() and not any(c.strip() for c in h[2:])


def vung(sid, r0, r1, c0, c1):
    return {"sheetId": sid, "startRowIndex": r0, "endRowIndex": r1, "startColumnIndex": c0, "endColumnIndex": c1}


def to(sid, r0, r1, c0, c1, nen=None, chu=None, giua=False):
    fmt = {"textFormat": {"bold": True, "fontSize": 12}, "verticalAlignment": "MIDDLE"}
    fields = ["userEnteredFormat.textFormat", "userEnteredFormat.verticalAlignment"]
    if nen:
        fmt["backgroundColorStyle"] = {"rgbColor": nen}
        fields.append("userEnteredFormat.backgroundColorStyle")
    if chu:
        fmt["textFormat"]["foregroundColorStyle"] = {"rgbColor": chu}
    if giua:
        fmt["horizontalAlignment"] = "CENTER"
        fields.append("userEnteredFormat.horizontalAlignment")
    return {"repeatCell": {"range": vung(sid, r0, r1, c0, c1), "cell": {"userEnteredFormat": fmt}, "fields": ",".join(fields)}}


def co(sid, chieu, i0, i1, px):
    return {"updateDimensionProperties": {"range": {"sheetId": sid, "dimension": chieu, "startIndex": i0, "endIndex": i1},
                                          "properties": {"pixelSize": px}, "fields": "pixelSize"}}


def dinh_dang(sid, ten, hang):
    """Kiểu Lead cho một tab, sau khi đã dán HTML. hang: hàng TSV (hàng 0 là tiêu đề)."""
    n, m = len(hang), len(hang[0])
    vien = {"style": "SOLID"}
    r = [{"repeatCell": {"range": vung(sid, 0, n, 0, m), "cell": {"userEnteredFormat": {"wrapStrategy": "WRAP", "verticalAlignment": "MIDDLE"}},
                         "fields": "userEnteredFormat.wrapStrategy,userEnteredFormat.verticalAlignment"}},
         {"updateBorders": {"range": vung(sid, 0, n, 0, m), "top": vien, "bottom": vien, "left": vien, "right": vien,
                            "innerHorizontal": vien, "innerVertical": vien}},
         {"updateSheetProperties": {"properties": {"sheetId": sid, "gridProperties": {"frozenRowCount": 1}}, "fields": "gridProperties.frozenRowCount"}},
         to(sid, 0, 1, 0, m, DO, TRANG, giua=True), co(sid, "ROWS", 0, 1, 36)]
    if ten == "Gameplay" and n > 1:
        r += [{"mergeCells": {"range": vung(sid, 1, n, 0, 1), "mergeType": "MERGE_ALL"}},
              to(sid, 1, n, 1, 2, HONG, giua=True), co(sid, "ROWS", 1, n, 95)]
    else:
        for i, h in enumerate(hang[1:], start=1):
            if la_hang_nhom(h):
                r.append(to(sid, i, i + 1, 0, m, HONG if ten == "Main Task" else None))
    rong = RONG.get(ten)
    if rong:
        for c, px in enumerate(rong[:m]):
            r.append(co(sid, "COLUMNS", c, c + 1, px))
    else:
        r.append({"autoResizeDimensions": {"dimensions": {"sheetId": sid, "dimension": "COLUMNS", "startIndex": 0, "endIndex": m}}})
    return r


def cac_tab(thu_muc: Path):
    files = sorted(thu_muc.glob("[0-9][0-9]-*.tsv"))
    if not files:
        raise SystemExit(f"Không có file NN-<tab>.tsv trong {thu_muc}.")
    return files


def yeu_cau(thu_muc: Path, da_co_tab=False):
    req = []
    for i, f in enumerate(cac_tab(thu_muc)):
        html = f.with_suffix(".html")
        if not html.exists():
            raise SystemExit(f"Thiếu {html.name}. Chạy sheet-html.mjs trước.")
        sid, ten = (0 if i == 0 else 1000 + i), ten_tab(f.stem)
        if not da_co_tab:
            if i == 0:
                req.append({"updateSheetProperties": {"properties": {"sheetId": 0, "title": ten}, "fields": "title"}})
            else:
                req.append({"addSheet": {"properties": {"sheetId": sid, "title": ten}}})
        req.append({"pasteData": {"coordinate": {"sheetId": sid, "rowIndex": 0, "columnIndex": 0},
                                  "data": html.read_text(encoding="utf-8"), "html": True, "type": "PASTE_NORMAL"}})
        req += dinh_dang(sid, ten, doc_tsv(f))
    return req


def chu(thu_muc: Path):
    return {ten_tab(f.stem): doc_tsv(f, chu=True) for f in cac_tab(thu_muc)}


def doi(thu_muc: Path):
    """_tren-sheet/NN-<tab>.json (mảng values của get_values) -> .csv cùng tên, rồi quet.mjs --doi."""
    ts = thu_muc / "_tren-sheet"
    tsv, csvs = [], []
    for f in cac_tab(thu_muc):
        j = ts / (f.stem + ".json")
        if not j.exists():
            print(f"{f.name}: chưa có {j.relative_to(thu_muc)} (lưu mảng values của get_values vào đó)")
            continue
        d = json.loads(j.read_text(encoding="utf-8"))
        d = d.get("values", d) if isinstance(d, dict) else d
        c = j.with_suffix(".csv")
        with c.open("w", encoding="utf-8", newline="") as fh:
            csv.writer(fh).writerows([[str(x)[1:] if str(x)[:1] == "'" else str(x) for x in h] for h in d])
        tsv.append(str(f))
        csvs.append(str(c))
    if not tsv:
        raise SystemExit("Không có file nào để đối chiếu.")
    quet = next((p for p in (HERE.parent.parent / "gdd-review" / "scripts" / "quet.mjs", HERE.parent.parent / "chung" / "quet.mjs") if p.exists()), None)
    lenh = ["node", str(quet or "<quet.mjs>"), "--doi", *tsv, "--csv", *csvs]
    if not quet:
        print("Chạy: " + " ".join(lenh))
        return 0
    return subprocess.run(lenh).returncode


def selftest():
    import tempfile
    with tempfile.TemporaryDirectory() as t:
        d = Path(t)
        row = "<table><tr><td>A</td><td>B</td><td>C</td></tr></table>"
        (d / "01-gameplay.tsv").write_text("Ảnh\tMục\tMô tả\n\tCách chơi\t- Chạm\\n- Kéo\n\tWin\t- Hết là win\n", encoding="utf-8")
        mt = ["STT\tHạng mục\tScope\tNgười thực hiện\tTrạng thái\tGhi chú", "\tGD\t\t\t\t", "1\tLuật lõi\tx\tGD\t\t", "\t2D ART\t\t\t\t",
              "\tDEV\t\t\t\t", "\tSFX\t\t\t\t", "\tVFX\t\t\t\t", "2\tSfx\t3 âm\tSFX\t\t"]
        (d / "02-main-task.tsv").write_text("\n".join(mt) + "\n", encoding="utf-8")
        (d / "03-level-curve.tsv").write_text("Level\tNhãn\tNote\n1\tDễ\tmở\n", encoding="utf-8")
        for f in ("01-gameplay", "02-main-task", "03-level-curve"):
            (d / f"{f}.html").write_text(row, encoding="utf-8")
        r = yeu_cau(d)
        kinds = [next(iter(x)) for x in r]
        assert kinds[0] == "updateSheetProperties" and r[0]["updateSheetProperties"]["properties"]["title"] == "Gameplay"
        adds = [x["addSheet"]["properties"] for x in r if "addSheet" in x]
        assert [(a["sheetId"], a["title"]) for a in adds] == [(1001, "Main Task"), (1002, "Level Curve")], adds
        assert kinds.count("pasteData") == 3 and kinds.count("autoResizeDimensions") == 1
        gop = [x["mergeCells"]["range"] for x in r if "mergeCells" in x]
        assert gop == [vung(0, 1, 3, 0, 1)], f"gộp cột Ảnh sai: {gop}"
        nhom = [x for x in r if "repeatCell" in x and x["repeatCell"]["range"]["sheetId"] == 1001
                and x["repeatCell"]["range"]["startRowIndex"] > 0 and x["repeatCell"]["range"]["endRowIndex"] - x["repeatCell"]["range"]["startRowIndex"] == 1]
        assert len(nhom) == 5, f"{len(nhom)} hàng nhóm, cần 5"
        assert sum(1 for x in r if "updateDimensionProperties" in x and x["updateDimensionProperties"]["range"]["dimension"] == "COLUMNS") == 9
        assert sum(1 for x in r if "updateBorders" in x) == 3 and sum(1 for x in r if "updateSheetProperties" in x and "gridProperties" in x["updateSheetProperties"]["properties"]) == 3
        r2 = yeu_cau(d, da_co_tab=True)
        assert not any("addSheet" in x for x in r2) and r2[0].get("pasteData")
        v = chu(d)
        assert list(v) == ["Gameplay", "Main Task", "Level Curve"]
        o = v["Gameplay"][1][2]
        assert o == "'- Chạm\n- Kéo", f"ô chữ sai: {o!r}"
        assert v["Main Task"][2] == ["1", "Luật lõi", "x", "GD", "", ""]
        (d / "_tren-sheet").mkdir()
        # get_values trả về đúng chữ trên Sheet: xuống dòng thật, không có ', bỏ ô trống cuối hàng
        tren = {"01-gameplay": [["Ảnh", "Mục", "Mô tả"], ["", "Cách chơi", "- Chạm\n- Kéo"], ["", "Win", "- Hết là win"]],
                "02-main-task": [h.split("\t") for h in mt], "03-level-curve": [["Level", "Nhãn", "Note"], ["1", "Dễ", "mở"]]}
        for k, v in tren.items():
            (d / "_tren-sheet" / f"{k}.json").write_text(json.dumps({"values": v}, ensure_ascii=False), encoding="utf-8")
        (d / "03-level-curve.html").unlink()
        try:
            yeu_cau(d)
            assert False, "thiếu html mà không dừng"
        except SystemExit:
            pass
        assert doi(d) == 0, "quet.mjs --doi báo lệch dù Sheet khớp TSV"  # quet.mjs không có bên cạnh thì chỉ in lệnh, cũng 0
        c = list(csv.reader((d / "_tren-sheet" / "01-gameplay.csv").open(encoding="utf-8", newline="")))
        assert c == tren["01-gameplay"], c
    print("selftest OK")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("thu_muc", nargs="?")
    ap.add_argument("--ra")
    ap.add_argument("--da-co-tab", action="store_true")
    ap.add_argument("--chu", action="store_true")
    ap.add_argument("--doi", action="store_true")
    ap.add_argument("--selftest", action="store_true")
    a = ap.parse_args()
    if a.selftest:
        return selftest()
    if not a.thu_muc:
        ap.error("cần <thư mục sheet>")
    d = Path(a.thu_muc)
    if a.doi:
        sys.exit(doi(d))
    out = chu(d) if a.chu else yeu_cau(d, a.da_co_tab)
    s = json.dumps(out, ensure_ascii=False)
    if a.ra:
        Path(a.ra).write_text(s, encoding="utf-8")
        tom = ", ".join(f"{k} {len(v)} hàng" for k, v in out.items()) if a.chu else f"{len(out)} lệnh"
        print(f"{a.ra}: {tom}, {len(s) // 1024} KB")
    else:
        print(s)


if __name__ == "__main__":
    main()
