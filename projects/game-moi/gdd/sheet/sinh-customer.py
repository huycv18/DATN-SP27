# Sinh tab Customer (thương nhân, tàu, trạm và cảng) từ gdd/he-thong/tram-va-cang.md.
# Chạy: python projects/game-moi/gdd/sheet/sinh-customer.py  -> ghi Customer.tsv cạnh file này.
# Ô nhiều dòng giữ ký tự xuống dòng thật khi dán, trong TSV ghi thành \n.
import os, re

HERE = os.path.dirname(os.path.abspath(__file__))
GDD = os.path.join(HERE, '..', 'he-thong', 'tram-va-cang.md')
REF = 'projects/game-moi/gdd/he-thong/tram-va-cang.md'
md = open(GDD, encoding='utf-8').read()


def bang(tieu_de):
    """Bảng markdown đầu tiên sau dòng tiêu đề bắt đầu bằng tieu_de: list dict theo header."""
    i = md.index(tieu_de)
    dong = md[i:].split('\n')
    tb = [d for d in dong[1:60] if d.startswith('|')]
    # chỉ lấy khối bảng liền nhau đầu tiên
    k = next(n for n, d in enumerate(dong[1:]) if d.startswith('|'))
    tb = []
    for d in dong[1 + k:]:
        if not d.startswith('|'):
            break
        tb.append([c.strip() for c in d.strip('|').split('|')])
    head = tb[0]
    return [dict(zip(head, r)) for r in tb[2:]]


def luat(so):
    m = re.search(r'^%d\. (.*)$' % so, md, re.M)
    return re.sub(r'\s*`(MVP|Sau MVP)`.*$', '', m.group(1)).strip()


rows = [['Issue ID', 'Task', 'Sub Task', 'Short Description', 'Ref']]


def khoi(iid, task, subs, ref=REF):
    for n, (sub, desc) in enumerate(subs):
        rows.append([iid if n == 0 else '', task if n == 0 else '', sub, desc, ref if n == 0 else ''])


# 1. Thương nhân và tàu
ten = {r['ID']: r for r in bang('### Loại tàu và thương nhân')}
for r in bang('### 2.4 Bảng loại tàu'):
    t = ten[r['ID']]
    khoi(r['ID'], t['Tàu'], [
        ('Type', '- Ai: %s\n- Nhãn: %s' % (t['Ai (tên theo `cot-truyen.md` sơ bộ)'], r['Nhãn'])),
        ('Characteristic', r['Luật riêng']),
        ('Attribute', '- Lưu bến: %s\n- Trọng số túi trộn: %s' % (r['Lưu bến'], r['Trọng số'])),
        ('Order', r['Kiểu danh sách (số dòng, nhóm)']),
        ('Unlock', r['Mở']),
    ], REF + ' bảng 2.4')

# 2. Nhóm hàng cảng
khoi('HC', 'Nhóm hàng cảng', [
    (r['ID nhóm'] + ' ' + r['Nhóm hàng'],
     '- ID kiện: %s\n- Làm từ: %s\n- Trước khi bốc: %s\n- Mở: %s' % (r['ID kiện (gd-items)'], r['Làm từ'], r['Bước trước khi bốc'], r['Mở']))
    for r in bang('### Nhóm hàng cảng')
] + [('Giá', 'Giá từng ID kiện ở tab Shop. Lồng sống giá theo loài bên trong')], REF + ' mục Danh mục')

# 3. Luật ca cảng tóm tắt
khoi('CC', 'Luật ca cảng (tóm tắt)', [
    ('Mở ca', '- ' + luat(18) + '\n- ' + luat(64) + '\n- ' + luat(65)),
    ('Ca đầu tiên', luat(67)),
    ('Lịch tàu', '- ' + luat(20) + '\n- ' + luat(70)),
    ('Bến và tàu', '- ' + luat(21) + '\n- ' + luat(22)),
    ('Dòng đơn', luat(23)),
    ('Đóng kiện', '- ' + luat(24) + '\n- ' + luat(25) + '\n- ' + luat(26)),
    ('Mang và bốc', '- ' + luat(28) + '\n- ' + luat(29)),
    ('Tally và thưởng', '- ' + luat(30) + '\n- ' + luat(31) + '\n- Thưởng đủ đơn 25%, thưởng nhanh 15% tổng giá đơn, giá ở tab Shop'),
    ('Thất bại', luat(32)),
    ('Kết thúc ca', '- ' + luat(34) + '\n- ' + luat(35)),
    ('Đóng kiện trước', '- ' + luat(53) + '\n- ' + luat(57) + '\n- ' + luat(58)),
    ('Sự cố (Sau MVP)', '- ' + luat(43) + '\n- ' + luat(45) + '\n- ' + luat(46)),
], REF + ' mục 2')

# 4. Hạng cảng
khoi('HG', 'Hạng cảng', [('Luật', '- ' + luat(39) + '\n- ' + luat(40) + '\n- ' + luat(41))] + [
    ('Hạng ' + r['Hạng'], '- Trần ở chương: %s\n- Mở: %s\n- Nhãn: %s' % (r['Trần ở chương'], r['Mở'], r['Nhãn']))
    for r in bang('### 2.5 Bảng Hạng cảng')
] + [('Ngưỡng điểm', 'Hạng 2 tới 8: 10, 20, 45, 70, 100, 135, 195 điểm cảng')], REF + ' bảng 2.5')

# 5. Khoang trạm
khoi('KH', 'Khoang trạm', [('Luật', '- ' + luat(3) + '\n- ' + luat(7) + '\n- ' + luat(9))] + [
    (r['ID'] + ' ' + r['Khoang'], '- Chức năng: %s\n- Người vớt: %s\n- Mở ở chương: %s\n- Nhãn: %s' % (r['Chức năng'], r['Người vớt'], r['Mở ở chương'], r['Nhãn']))
    for r in bang('### Khoang của Ember')
] + [('Động cơ chính', '- ' + luat(10) + '\n- ' + luat(11))], REF + ' mục Danh mục, bảng 2.6')

# 6. Người vớt
khoi('NV', 'Người vớt mở tính năng', [('Luật', '- ' + luat(13) + '\n- ' + luat(14) + '\n- ' + luat(15))] + [
    (r['Người vớt'], '- Khoang: %s\n- Khi mở: %s\n- Lớn dần: %s\n- Nhãn: %s' % (r['Khoang'], r['Tính năng khi mở'], r['Lớn dần theo cấp khoang và chương'], r['Nhãn']))
    for r in bang('### 2.7 Người vớt')
], REF + ' bảng 2.7')

# 7. Nuôi Driftlife
khoi('ND', 'Nuôi Driftlife (Sau MVP)', [
    ('Mở', luat(47)), ('Thả', luat(48)), ('Cho ăn và sản phẩm', luat(49)),
    ('Sinh con non', luat(50)), ('Lấy ra', luat(51)), ('Nâng cấp', luat(52)),
    ('Số ô', 'Cấp 1, 2, 3: 4, 6, 9 ô. Con non trưởng thành sau 2 ngày'),
], REF + ' mục 2 nuôi')

out = os.path.join(HERE, 'Customer.tsv')
with open(out, 'w', encoding='utf-8') as f:
    for r in rows:
        f.write('\t'.join(c.replace('`', '').replace('\t', ' ').replace('\n', '\\n') for c in r) + '\n')
assert len({r[0] for r in rows[1:] if r[0]}) == sum(1 for r in rows[1:] if r[0]), 'Issue ID trùng'
print(len(rows) - 1, 'rows ->', out)
