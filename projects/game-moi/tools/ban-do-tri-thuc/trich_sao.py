# Trích cây sao: The Novent -> 11 GDD -> mục ## -> mục ###, nội dung markdown từng mục,
# trọng số từ số khái niệm graphify rơi vào mục, liên hệ chéo giữa mục từ edge graphify.
import json, re, sys, unicodedata
from collections import Counter, defaultdict
from pathlib import Path
sys.stdout.reconfigure(encoding='utf-8')
REPO = Path(__file__).resolve().parents[4]  # tools/ban-do-tri-thuc -> gốc repo, chạy được ở mọi máy và worktree
GDD = REPO / 'projects' / 'game-moi' / 'gdd'
OUT = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parent / 'sao.json'
FILES = [('00-khung-game.md', 'Khung game'), ('he-thong/cot-truyen.md', 'Cốt truyện'), ('he-thong/ho-so-nhan-vat.md', 'Nhân vật'),
         ('he-thong/nguoi-choi.md', 'Người chơi'), ('he-thong/combat-driftlife.md', 'Combat và Driftlife'), ('he-thong/map.md', 'Map'),
         ('he-thong/vat-pham.md', 'Vật phẩm'), ('he-thong/tram-va-cang.md', 'Trạm và cảng'), ('he-thong/kinh-te-tien-trinh.md', 'Kinh tế và tiến trình'),
         ('he-thong/ux-ui.md', 'UX / UI'), ('he-thong/ky-thuat.md', 'Kỹ thuật')]
BO = re.compile(r'^(Danh mục|Lịch sử thay đổi|Điểm tự quyết|Phản biện|Lệch)', re.I)


def fold(s):
    s = unicodedata.normalize('NFD', s.lower()).replace('đ', 'd')
    return ''.join(c for c in s if unicodedata.category(c) != 'Mn')


def sach(md):
    md = re.sub(r'<!--.*?-->', '', md, flags=re.S)
    return md.strip('\n')


nodes, links = [], []
def add(**k):
    k['i'] = len(nodes); nodes.append(k); return k['i']

root = add(t='The Novent', lv=0, p=None, f='', body='')
for fi, (rel, ten) in enumerate(FILES):
    L = (GDD / rel).read_text(encoding='utf-8').split('\n')
    h1 = next((l[2:].strip() for l in L if l.startswith('# ')), ten)
    sid = add(t=ten, full=h1, lv=1, p=root, f=rel, sys=fi, body='')
    cur = {1: sid}; buf = []; skip_lv = None; owner = sid
    def flush():
        global buf
        if buf and owner is not None:
            nodes[owner]['body'] += '\n'.join(buf) + '\n'
        buf = []
    for line in L:
        m = re.match(r'^(#{1,3}) (.*)', line)
        if m:
            lv = len(m.group(1))
            flush()
            if lv == 1:
                owner = sid; continue
            title = m.group(2).strip()
            if skip_lv is not None and lv > skip_lv:
                owner = None; continue
            skip_lv = None
            if BO.match(re.sub(r'^\d+[a-z]?\.\s*', '', title)):
                skip_lv = lv; owner = None; continue
            if lv == 2 and re.match(r'^Tóm tắt', title):
                nodes[sid]['body'] = ''; owner = sid; continue  # tóm tắt thành nội dung của sao hệ thống
            parent = cur.get(lv - 1, sid)
            owner = add(t=re.sub(r'\s*`?(MVP|Sau MVP)`?\s*$', '', title), lv=lv, p=parent, f=rel, sys=fi, body='')
            cur[lv] = owner
            for k in list(cur):
                if k > lv: del cur[k]
            continue
        buf.append(line)
    flush()

for n in nodes:
    n['body'] = sach(n['body'])
    if n['lv'] == 1:  # bỏ dòng siêu dữ liệu đầu file (Project, Chủ sở hữu, Trạng thái)
        n['body'] = '\n'.join(l for l in n['body'].split('\n') if not re.match(r'^(Project|Chủ sở hữu|Trạng thái)\b', l.strip())).strip()
# nội dung gốc: tóm tắt của khung
khung = next(n for n in nodes if n['lv'] == 1 and n['f'].startswith('00-'))
nodes[root]['body'] = ('Tỉnh dậy trên trạm hỏng giữa bãi vỡ của tàu mẹ, mỗi ngày ra ngoài đổi Oxy lấy tài nguyên và Driftlife, '
                       'về sửa trạm, bán hàng ở giờ giao thương cho thương nhân ngoài hành tinh lấy Tally, nâng cấp để đi xa hơn, cho tới khi trạm rời neo.\n\n'
                       'Mỗi ngôi sao lớn là một hệ thống trong GDD. Sao càng to, càng nhiều phần khác của thiết kế dẫn tới nó.')

# gắn khái niệm graphify vào mục chứa nó (khớp chữ của nhãn với tiêu đề và nội dung mục cùng file)
G = json.loads((REPO / 'graphify-out' / 'graph.json').read_text(encoding='utf-8'))
by_file = defaultdict(list)
for n in nodes:
    if n['lv'] >= 1:
        by_file[n['f']].append(n)
txt = {n['i']: fold(n['t'] + ' ' + n['body']) for n in nodes}
ttl = {n['i']: fold(n['t']) for n in nodes}
gmap, gdeg = {}, Counter()
for e in G['links']:
    gdeg[e['source']] += 1; gdeg[e['target']] += 1
for g in G['nodes']:
    s = str(g.get('source_file') or '').replace('\\', '/')
    rel = s.replace('projects/game-moi/gdd/', '')
    if rel not in by_file or g.get('file_type') == 'code':
        continue
    toks = [w for w in re.findall(r'\w+', fold(re.sub(r'\(.*?\)', '', g['label']))) if len(w) >= 3]
    if not toks:
        continue
    best, bs = None, 0
    for n in by_file[rel]:
        if n['lv'] == 1:
            continue
        sc = sum(1 for w in toks if w in txt[n['i']]) / len(toks) + sum(0.5 for w in toks if w in ttl[n['i']]) / len(toks)
        sc += 0.15 * n['lv']  # ưu tiên mục sâu hơn khi ngang điểm
        if sc > bs:
            best, bs = n['i'], sc
    if best is not None and bs >= 0.75:
        gmap[g['id']] = best
w = Counter()
for gid, i in gmap.items():
    w[i] += 1 + gdeg[gid] * 0.5
cross = Counter()
for e in G['links']:
    a, b = gmap.get(e['source']), gmap.get(e['target'])
    if a is not None and b is not None and a != b:
        cross[tuple(sorted((a, b)))] += 1

# trọng số: khái niệm graphify + độ dài nội dung + con, cộng dồn lên cha
for n in sorted(nodes, key=lambda n: -n['lv']):
    own = w[n['i']] + min(len(n['body']) / 900, 6)
    n['own'] = own
    n['w'] = own + sum(nodes[c]['w'] for c in [m['i'] for m in nodes if m['p'] == n['i']]) * (0.5 if n['lv'] >= 1 else 0.3)
for n in nodes:
    n['k'] = len([m for m in nodes if m['p'] == n['i']])
data = {
    'n': [[n['t'], n['lv'], -1 if n['p'] is None else n['p'], n.get('sys', -1), round(n['w'], 2), n['body'], n['f'], n.get('full', '')] for n in nodes],
    'x': [[a, b, c] for (a, b), c in cross.items() if nodes[a]['sys'] != nodes[b]['sys'] or c >= 2],
    'meta': {'commit': G.get('built_at_commit', ''), 'mapped': len(gmap)},
}
OUT.write_text(json.dumps(data, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')
print('sao', len(nodes), Counter(n['lv'] for n in nodes), '| khái niệm gắn', len(gmap), '| liên hệ chéo', len(data['x']), '| bytes', OUT.stat().st_size)
for n in sorted([n for n in nodes if n['lv'] == 1], key=lambda n: -n['w']):
    print(f"  {n['t']:24s} w={n['w']:.1f} con={n['k']}")
print('top mục:', [(nodes[n['p']]['t'][:12] + ' > ' + n['t'][:30], round(n['w'], 1)) for n in sorted([n for n in nodes if n['lv'] == 2], key=lambda n: -n['w'])[:10]])
print('mục trống:', sum(1 for n in nodes if n['lv'] >= 2 and not n['body'].strip()))

# Bản một file: nhúng sao.json vào index.html để nháy đúp mở thẳng, không cần server
HERE = Path(__file__).resolve().parent
page = (HERE / 'index.html').read_text(encoding='utf-8')
cu = "try { D = await (await fetch('sao.json')).json(); }"
assert page.count(cu) == 1, 'index.html đổi cách tải dữ liệu, sửa lại đoạn nhúng'
page = page.replace(cu, "try { D = JSON.parse(document.getElementById('sao-data').textContent); }")
nhung = OUT.read_text(encoding='utf-8').replace('</', '<' + chr(92) + '/')
page = page.replace('<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/', '<script id="sao-data" type="application/json">' + nhung + '</script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/', 1)
head = '<!doctype html>\n<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>body{margin:0}[hidden]{display:none!important}</style>\n'
(HERE / 'ban-do-mot-file.html').write_text(head + page + '\n</html>\n', encoding='utf-8')
print('ban-do-mot-file.html', (HERE / 'ban-do-mot-file.html').stat().st_size, 'bytes')
