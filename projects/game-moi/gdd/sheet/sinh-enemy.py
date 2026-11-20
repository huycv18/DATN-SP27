# Sinh Enemy.tsv (tab Enemy, khuôn khối Quái) từ các bảng trong gdd/he-thong/combat-driftlife.md.
# Chạy: python -X utf8 projects/game-moi/gdd/sheet/sinh-enemy.py
# Ô xuống dòng ghi chuỗi \n theo khuôn gdd-sheet-sync.
import io, os

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, '..', 'he-thong', 'combat-driftlife.md')
OUT = os.path.join(HERE, 'Enemy.tsv')
REF = 'projects/game-moi/gdd/he-thong/combat-driftlife.md'
NL = '\\n'
md = io.open(SRC, encoding='utf-8').read().split('\n')


def bang(hdr_start):
    """List dict của bảng có hàng header bắt đầu bằng hdr_start."""
    for i, l in enumerate(md):
        if l.startswith(hdr_start):
            h = [c.strip() for c in l.strip().strip('|').split('|')]
            rows = []
            for r in md[i + 2:]:
                if not r.startswith('|'):
                    break
                c = [x.strip() for x in r.strip().strip('|').split('|')]
                rows.append(dict(zip(h, c)))
            return rows
    raise SystemExit('Không thấy bảng: ' + hdr_start)


def id_of(s):
    return s.split(' ')[0]


def j(*lines):
    return NL.join(lines)


dm = {r['ID']: r for r in bang('| ID | Tên | Dải | Cỡ | Kiểu |')}
sinh = {r['ID']: r for r in bang('| ID | Số gd-items | Kiểu sinh |')}
cs = {id_of(r['ID']): r for r in bang('| ID | Sinh lực | Ngưỡng choáng | Ngưỡng mê | Miễn |')}
don = bang('| Loài | Đòn | Hình dạng, tầm |')
dc = bang('| Loài | Tốc độ thường |')
hs = {r['ID']: r for r in bang('| ID | Hành vi riêng')}
wd = {id_of(r['ID']): r for r in bang('| ID | Sinh lực | Ngưỡng choáng | Khiên |')}
bs = {id_of(r['ID']): r for r in bang('| ID | Nơi | Sinh lực (một mình) | Pha |')}
bsr = {id_of(r['Boss']): r for r in bang('| Boss | Chương | Nơi (gd-world, gd-story) |')}
dungcu = bang('| Dụng cụ | Mở | Tác dụng bậc 1 |')

rows = [['Issue ID', 'Task', 'Sub Task', 'Short Description', 'Ref']]


def khoi(id_, task, items, ref):
    for k, (sub, desc) in enumerate(items):
        rows.append([id_ if k == 0 else '', task if k == 0 else '', sub, desc, ref if k == 0 else ''])


# Khối luật chung
dc_txt = j(*[f"- {r['Dụng cụ']}: {r['Mở']}. {r['Tác dụng bậc 1']}. Nhịp {r['Nhịp bắn']}, tầm {r['Tầm']}, {r['Đạn mỗi chuyến']} ({r['Nhãn']})" for r in dungcu])
khoi('EN-00', 'Luật combat và bắt sống (tóm tắt)', [
    ('Sát thương', j('- Trúng đòn trừ thẳng vào Oxy (K1), không có thanh máu riêng',
                     '- Trúng đòn: đẩy lùi, mất điều khiển ngắn, rồi miễn sát thương ngắn (số ở bản đủ mục 3.1)',
                     '- Trúng đòn hủy mọi thao tác giữ phím (Recall, bắt, sinh thiết)',
                     '- Người đang Ngạt hoặc Được cứu không bị nhắm, không nhận sát thương',
                     '- Không sát thương đồng đội. Lao từ trúng đồng đội thì kéo về phía mình')),
    ('Báo trước', j('- Mọi đòn có ba pha Báo trước, Đánh, Hồi. Báo trước có cả hình và tiếng',
                    '- Tối thiểu: đòn hẹp dưới 15 Oxy 0,7 s, đòn hẹp từ 15 Oxy 0,8 s, đòn vùng bán kính 2 đến 3 u 1,0 s, vùng trên 3 đến 4 u 1,3 s',
                    '- Đòn từ ngoài màn có mũi tên ở mép màn và âm định hướng')),
    ('Vé tấn công', j('- Mỗi người có vé riêng: 2 ở dải Gần, 3 ở dải Giữa và Xa',
                      '- Kẻ địch phải giữ một vé mới ra đòn, hết vé thì lượn chờ')),
    ('Choáng và Mê', j('- Dùi xung cộng thanh Choáng, đầy thì Choáng 4 s',
                       '- Súng gây mê cộng thanh Mê sau 1,5 s, đầy thì Ngủ 12 s, bị đánh là tỉnh',
                       '- Choáng hoặc Ngủ gọi chung là Bất lực',
                       '- Giảm dần: tỉnh xong miễn 2 s, ngưỡng loại đó nhân 1,5 tới trần 3, về 1 sau 20 s')),
    ('Bắt sống', j('- Cỡ S: Súng lưới (tối đa 3 con một phát) hoặc tay giữ 1,5 s khi Bất lực. Mẫu vào Lồng mẫu kéo theo, 3 con, 1 lồng mỗi người (MVP)',
                   '- Cỡ M: Bất lực rồi gắn Phao kéo, phao đưa về kho (Sau MVP)',
                   '- Cỡ L: không bắt sống, chỉ Kim sinh thiết khi Bất lực (Sau MVP)',
                   '- Kết nhanh (phím riêng, giữ 0,6 s): hạ con đang Bất lực cho nguyên liệu 2 sao')),
    ('Chất lượng mẫu', j('- Mẫu sống: từ 70% Sinh lực 3 sao, 30 đến dưới 70% 2 sao, dưới 30% 1 sao',
                         '- Hạ thường 1 sao, Kết nhanh 2 sao, sinh thiết luôn 3 sao',
                         '- K9: với loài cỡ S, M, mẫu sống luôn giá trị hơn hạ sau khi trừ vật tiêu hao. Giá ở tab Shop')),
    ('Dụng cụ combat', dc_txt),
    ('Co-op', j('- Sinh lực và ngưỡng Driftlife nhân N chia k(N) của dải, mỗi người gánh như chơi một mình',
                '- Sinh lực boss và đơn vị The Wardens nhân 1 + 0,6 x (N - 1)',
                '- Sát thương lên người chơi không đổi theo số người',
                '- Bảng đủ ở bản đủ mục 6b')),
], REF + ' mục 2, 3.1 đến 3.3, 6b')

# Driftlife
for id_, r in dm.items():
    if not id_.startswith('DL-'):
        continue
    c = cs[id_]
    s = sinh[id_]
    h = hs[id_]
    mv = next((m for m in dc if id_ in m['Loài']), None)
    attr = [f"- Sinh lực (máu): {c['Sinh lực']}", f"- Ngưỡng choáng: {c['Ngưỡng choáng']}",
            f"- Ngưỡng mê: {c['Ngưỡng mê']}", f"- Miễn: {c['Miễn'] or 'Không'}",
            f"- Vùng phát hiện: {c['Vùng phát hiện']}"]
    if mv:
        attr += [f"- Tốc độ thường (u/s): {mv['Tốc độ thường']}",
                 f"- Tốc độ khi đuổi hoặc chạy (u/s): {mv['Tốc độ khi đuổi hoặc chạy']}",
                 f"- Khoảng bỏ đuổi: {mv['Khoảng bỏ đuổi']}"]
    items = [
        ('Type', j(f"- Dải {r['Dải']}, cỡ {r['Cỡ']}, kiểu {r['Kiểu']}",
                   f"- Nhãn: {r['Nhãn']}",
                   f"- Bắt sống: {r['Bắt sống']}. Nuôi: {r['Nuôi']}",
                   f"- Rơi khi hạ: {r['Rơi khi hạ (nhóm)']}. Nguyên liệu chung: {s['Nguyên liệu chung khi hạ (SMP-101, 201, 301)']}. Đặc sản: {s['Đặc sản khi hạ (xác suất)']}",
                   f"- Khi bắt hoặc sinh thiết: {s['Khi bắt hoặc sinh thiết']}",
                   f"- Số ID vật phẩm (gd-items): {s['Số gd-items']}")),
        ('Characteristic', j(f"- {h['Hành vi riêng (không chỉ khác số)']}",
                             f"- Sinh: {s['Kiểu sinh']}, {s['Số con mỗi điểm sinh']}{' con' if s['Số con mỗi điểm sinh'][-1].isdigit() else ''} mỗi điểm sinh. Điểm neo: {s['Điểm neo']}",
                             f"- Người chơi học: {h['Người chơi học gì']}")),
        ('Attribute', j(*attr)),
    ]
    k = 0
    for d in don:
        if d['Loài'] != id_:
            continue
        k += 1
        items.append((f'Skill {k}', j(f"- Tên: {d['Đòn']}", f"- Hình dạng, tầm: {d['Hình dạng, tầm']}",
                                      f"- DMG (Oxy mất): {d['DMG (Oxy)']}", f"- Báo trước (s): {d['Báo trước']}",
                                      f"- Đánh (s): {d['Đánh'] or 'Không'}", f"- Hồi (s): {d['Hồi'] or 'Không'}",
                                      f"- Hồi chiêu (s): {d['Hồi chiêu'] or 'Không'}", f"- Cần vé: {d['Cần vé']}")))
    if k == 0:
        items.append(('Skill 1', '- Không có đòn'))
    items.append(('Capture', j(f"- Lý do bắt: {h['Lý do bắt sống']}", f"- Lý do hạ: {h['Lý do hạ']}",
                               f"- Khắc chế: {h['Khắc chế bằng']}")))
    khoi(id_, f"{r['Tên']} [TẠM]", items, REF + ' mục 3.4, 3.4b, 3.5')

# The Wardens
for id_, r in dm.items():
    if not id_.startswith('WD-'):
        continue
    w = wd[id_]
    khoi(id_, f"{r['Tên']} [TẠM]", [
        ('Type', j(f"- Phe The Wardens, dải {r['Dải']}, cỡ {r['Cỡ']}", f"- Nhãn: {r['Nhãn']}",
                   '- Không bắt sống, miễn mê', f"- Rơi khi hạ: {r['Rơi khi hạ (nhóm)']}")),
        ('Characteristic', j(f"- {r['Kiểu']}", f"- Hành vi: {w['Hành vi']}", f"- Khác Driftlife: {w['Khác Driftlife']}")),
        ('Attribute', j(f"- Sinh lực (máu): {w['Sinh lực']}", f"- Ngưỡng choáng: {w['Ngưỡng choáng']}", f"- Khiên: {w['Khiên']}")),
        ('Skill 1', f"- Đòn (DMG Oxy, báo trước s, hồi chiêu s): {w['Đòn (DMG, báo trước, hồi chiêu)']}"),
    ], REF + ' mục 2.5, 3.6')

# Boss
for id_, r in dm.items():
    if not id_.startswith('BS-'):
        continue
    b = bs[id_]
    d = bsr[id_]
    khoi(id_, f"{r['Tên']} [TẠM]", [
        ('Type', j(f"- Boss chương {d['Chương']}. {r['Kiểu']}", f"- Nơi: {b['Nơi']}", f"- Nhãn: {b['Nhãn']}",
                   f"- Rơi khi hạ: {d['Rơi khi hạ']}", f"- Rơi khi xua đi: {d['Rơi khi xua đi']}")),
        ('Attribute', j(f"- Sinh lực (một mình): {b['Sinh lực (một mình)']}", f"- Số pha: {b['Pha']}",
                        '- Miễn Dùi xung và Súng gây mê, chỉ Bất lực theo cơ chế pha',
                        f"- Thời lượng mục tiêu một mình: {b['Thời lượng mục tiêu một mình']}")),
        ('Skills và pha', b['Cơ chế chính']),
        ('Cách kết', b['Cách kết']),
    ], REF + ' mục 2.6, 3.7')

with io.open(OUT, 'w', encoding='utf-8', newline='\n') as f:
    for r in rows:
        assert not any('\t' in c or '\n' in c for c in r), r
        f.write('\t'.join(r) + '\n')
ids = [r[0] for r in rows[1:] if r[0]]
assert len(ids) == len(set(ids)), 'Issue ID trùng'
print(f'{OUT}: {len(rows) - 1} dòng dữ liệu, {len(ids)} khối')
