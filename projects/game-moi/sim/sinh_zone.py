"""Sinh tab Zone (khuôn khối Khu vực: Type, Characteristic, Role) từ map.md (GD-032, gd-world).

Chạy: python -X utf8 projects/game-moi/sim/sinh_zone.py
Ghi `gdd/sheet/Zone.tsv`. Xuống dòng trong ô ghi là \\n (khuôn mục 2). Số lấy từ bảng của map.md, không gõ tay.
Issue ID của tab Zone dùng tiền tố Z (Z01 trở đi) để không trùng tab spec khác khi các vai dán song song.
"""
from pathlib import Path

GOC = Path(__file__).resolve().parent.parent
MAP = (GOC / "gdd" / "he-thong" / "map.md").read_text(encoding="utf-8")
OUT = GOC / "gdd" / "sheet" / "Zone.tsv"
REF = "GDD hệ thống map.md (thư mục he-thong của game-moi)"


def bang(dau, md=MAP):
    """Bảng markdown có dòng header bắt đầu bằng `dau`. Trả list dict."""
    i = md.index(dau)
    dong = []
    for d in md[i:].splitlines():
        if not d.startswith("|"):
            break
        dong.append([x.strip() for x in d.strip().strip("|").split("|")])
    hd = dong[0]
    return [dict(zip(hd, r)) for r in dong[2:]]


def o(*y):
    return "\\n".join(y)


rows, so = [], [0]


def khoi(task, typ, char, role, ref):
    so[0] += 1
    iid = f"Z{so[0]:02d}"
    for k, (sub, nd) in enumerate((("Type", typ), ("Characteristic", char), ("Role", role))):
        rows.append([iid if k == 0 else "", task if k == 0 else "", sub, nd, ref if k == 0 else ""])


dm = {r["Mã"]: r for r in bang("| Mã | Loại | Tên |")}
md = {r["Chỉ số"]: r for r in bang("| Chỉ số | Gần | Giữa | Xa |")}
ranh = {r["Dải"]: r for r in bang("| Dải | Từ (u) | Tới (u) |")}
haz = bang("| Mã | Tên | Loại | Tác động |")
nhanh = {r["Nhánh"].split()[0]: r for r in bang("| Nhánh | Dải, chương | Khu |")}
mo = {r["Nhánh"].split()[0]: r["Mở sau mốc"] for r in bang("| Nhánh | Mở sau mốc |")}
cinder = bang("| Khu | Vị trí | Có gì |")
bs = {r["Boss"].split()[0]: r for r in bang("| Boss | Nơi | Kích thước (u) |")}
tran = bang("| Chương | Bậc bình | Bậc bộ đẩy | Oxy | Túi |")
sim = bang("| Chương | Phút P50 (P10 đến P90) |")
bc = {r["Tên"]: r for r in bang("| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nguồn |\n|---|---|---|---|---|---|\n| Thời gian giữ phím")}
ka = {r["Dải"]: r for r in bang("| Dải | a | k(2) |")}

# 1. Map tổng
khoi("Map tổng The Wake",
     o("Map tổng, sinh lại mỗi chuyến bằng ghép mảnh dựng tay", "3 dải nối tiếp theo trục ngang: Gần, Giữa, Xa", "MVP: dải Gần"),
     o("- Mặt phẳng 2D nhìn ngang, Ember ở mép trái, đi sang phải là xa trạm",
       "- Lưới mảnh 40 x 24 u, cao 3 hàng. Gần 4 cột, Giữa 6, Xa 8",
       "- Mỗi cạnh mảnh có cổng mở (8 u) hoặc đóng. Các ô cố định như Ember Mooring giữ mảnh qua mọi chuyến",
       "- Seed chuyến sinh từ thế giới, số ngày, số thứ tự chuyến: nạp lại ra đúng bố cục (K23)",
       "- Đường chính đi được qua mọi cột, mỗi dải có ít nhất một vòng, trùng mảnh cùng ô với chuyến trước tối đa 5 trên 10",
       "- Dải chưa mở bị chặn bằng rạn vụn Shatterline (dải va chạm 8 u ở đầu cột 1 của dải đó)"),
     o("- Nơi lấy tài nguyên và Driftlife sinh lại mỗi chuyến (K5, K8)",
       "- Oxy là đồng hồ: đi xa đổi được hàng hiếm, đường về dài hơn, chỗ thoát ít hơn (P1)",
       "- Không lạc: Ember, xác lớn cố định, lối vào map nhánh luôn ở chỗ cũ"),
     f"{REF} mục 2.1, 2.9, 6.4")

# 2. Ba dải
for ma, dai in (("Z1", "Gần"), ("Z2", "Giữa"), ("Z3", "Xa")):
    r = dm[ma]
    env = md["Môi trường, cấp vỏ bộ đồ cần"][dai]
    khoi(f"Dải {dai}, {r['Tên'].split(', ')[1]}",
         o(f"Dải {dai}, x từ {ranh[dai]['Từ (u)']} tới {ranh[dai]['Tới (u)']} u ({ranh[dai]['Giây bay thẳng tới ranh ngoài']} giây bay thẳng tới ranh ngoài)",
           f"{r['Ghi chú']}", f"Môi trường và cấp vỏ bộ đồ cần: {env}", r["Nhãn"]),
         o(f"- Tỉ lệ kích hoạt khe tài nguyên SP-R một người: {md['Tỉ lệ kích hoạt khe SP-R (một người)'][dai]}",
           f"- Tỉ lệ kích hoạt khe Driftlife SP-D một người: {md['Tỉ lệ kích hoạt khe SP-D (một người)'][dai]}",
           f"- Khe hạng hiếm nửa trong và nửa ngoài dải: {md['Tỉ lệ khe SP-R hạng hiếm (loại hòm của dải, luật 2.4.5), nửa trong và nửa ngoài dải'][dai]}",
           f"- Phần mảnh có hazard: {md['Phần mảnh có hazard được kích hoạt'][dai]}",
           f"- Loài chủ động tấn công: {md['Số loài chủ động tấn công trên tổng loài của dải'][dai]}",
           f"- Recall Beacon mỗi chuyến: {md['Recall Beacon mỗi chuyến'][dai]}",
           f"- Hệ số số người k(N) = 1 + {ka[dai]['a']} x (N trừ 1), k(4) = {ka[dai]['k(4)']}"),
         o("- Thưởng tăng theo cột, mảnh Thưởng chỉ ở nửa ngoài dải",
           "- Thiếu cấp vỏ bộ đồ vẫn vào được, hao nền Oxy nhân 2,5 (thiếu 1 cấp) hoặc 4 (thiếu từ 2 cấp)"),
         f"{REF} mục 2.2, 3.6, 3.8")

# 3. Map nhánh
cin = "\\n".join(f"- {k['Khu']}: {k['Có gì']}" for k in cinder)
khoi("Map nhánh N1 Station Cinder",
     o("Xác Seed Station đầu tiên, dải Gần, chương 1", f"Mở sau mốc {mo['N1']}", "MVP"),
     cin,
     o("- Lần 1: vào khu ngoài, vớt Ingrid (Kỹ sư), kéo buồng về beacon B1",
       "- Ingrid chế TOL-401 Bộ kích nguồn, lần 2 mở cửa D1, qua boss BS-1 Scrapmaw, vớt Linh (Thông dịch viên)",
       f"- Phòng boss {bs['BS-1']['Kích thước (u)']} u. {bs['BS-1']['Lối ra sau trận']}"),
     f"{REF} mục 2.10, 6.5")
for n in ("N2", "N3", "N4", "N5", "N6", "N7", "N8"):
    r = nhanh[n]
    ten = r["Nhánh"].split(" ", 1)[1]
    khoi(f"Map nhánh {n} {ten}",
         o(f"Dải, chương: {r['Dải, chương']}", f"Mở sau mốc {mo[n]}", "Sau MVP"),
         o(f"- Khu: {r['Khu']}", f"- Khóa và chìa: {r['Khóa và chìa']}", f"- Khe manh mối: {r['Khe manh mối']}"),
         o(f"- Người vớt: {r['Người vớt']}", f"- Boss: {r['Boss']}", f"- Thời lượng mỗi chuyến (giây): {r['Thời lượng mỗi chuyến (giây)']}"),
         f"{REF} mục 2.10")

# 4. Hazard
for h in haz:
    ten_en = dm[h['Mã']]['Tên'].split(' / ', 1)[1]
    khoi(f"Hazard {h['Mã']} {h['Tên']} / {ten_en}",
         o(f"Loại: {h['Loại']}", f"Dải, chương: {h['Dải, chương']}", h["Nhãn"]),
         o(f"- Tác động: {h['Tác động']}", f"- Báo trước: {h['Báo trước']}", f"- Chu kỳ: {h['Chu kỳ']}"),
         o(f"- Cách né: {h['Cách né']}", "- Mọi hazard gây hại báo trước ít nhất 1 giây tính từ lúc người chơi thấy tín hiệu"),
         f"{REF} mục 2.3, 3.5")

# 5. Recall Beacon, Skiff
khoi("Recall Beacon",
     o("Điểm thoát kéo về trạm, giữ nguyên túi đồ", "Map tổng: đổi ô mỗi chuyến, không trùng ô chuyến trước. Map nhánh: cố định", "MVP"),
     o(f"- Giữ phím {bc['Thời gian giữ phím']['Khởi điểm']}, trúng đòn hoặc thả phím thì hủy",
       f"- Bán kính kích, hủy: {bc['Bán kính kích, bán kính hủy']['Khởi điểm']}",
       f"- Bán kính phát hiện {bc['Bán kính phát hiện']['Khởi điểm']}, thấy rồi thì ghim cho cả nhóm",
       f"- Vật đang kéo trong {bc['Bán kính kéo vật theo']['Khởi điểm']} đi cùng",
       "- Dùng nhiều lần, nhiều người cùng kích, mỗi người tính riêng"),
     o("- Cho người chơi quyết định quay về sớm hay liều tìm beacon mới (P1)",
       "- Mỗi phòng boss có một beacon phía lối vào, ngoài phòng, để rút giữa trận"),
     f"{REF} mục 2.5, 3.7")
khoi("Skiff",
     o("Xuồng đi thẳng từ trạm tới map nhánh đã từng vào", "Mở khi có Hoa tiêu và bến Skiff", "Sau MVP"),
     o(f"- Tính là một chuyến (K22), chở {bc['Số người Skiff chở']['Khởi điểm']} người",
       f"- Cảnh đi {bc['Thời gian cảnh Skiff đi']['Khởi điểm']}, Oxy không hao trong cảnh đi",
       "- Chỉ vào map nhánh đó, không bay ra map tổng",
       "- Warden Rig là ngoại lệ: Skiff tới ngay sau mốc C4.7 mà không cần từng vào"),
     o("- Bớt bay lặp tới map nhánh xa, không thành đường tắt khai thác dải Xa"),
     f"{REF} mục 2.6")

# 6. Ngân sách Oxy
tr = "\\n".join(f"- Chương {r['Chương']}: bình {r['Oxy']}, túi {r['Túi']}, trần {r['Tổng (phút)']} phút" for r in tran)
sm = "\\n".join(f"- Chương {r['Chương']}: {r['Phút P50 (P10 đến P90)']} phút, về vì túi {r['Về vì túi đầy']}, bị kéo về {r['Bị kéo về']}" for r in sim)
khoi("Ngân sách Oxy một chuyến",
     o("Thời lượng chuyến theo chương, hao nền 1 Oxy mỗi giây", "Bình và túi theo thang GDM chốt (log 54)", "MVP: chương 1"),
     o("Trần Oxy (phép tính):", tr),
     o("Đo bằng sim gd-tech, một người, kịch bản trung bình:", sm, "- Mục tiêu khung: chương 1 từ 4 đến 6 phút, chương 5 từ 10 đến 12 phút"),
     f"{REF} mục 3.2, 3.9")

OUT.parent.mkdir(parents=True, exist_ok=True)
hd = ["Issue ID", "Task", "Sub Task", "Short Description", "Ref"]
OUT.write_text("\n".join("\t".join(r) for r in [hd] + rows) + "\n", encoding="utf-8")
ids = [r[0] for r in rows if r[0]]
assert len(ids) == len(set(ids)) and all("\t" not in c for r in rows for c in r)
print(f"Zone.tsv: {len(rows)} dòng dữ liệu, {len(ids)} khối")
