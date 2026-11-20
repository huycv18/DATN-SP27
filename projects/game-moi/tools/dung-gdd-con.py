#!/usr/bin/env python
# Dựng file xlsx cho một GDD con (Sheet) từ GDD hệ thống markdown trong repo, theo khuôn GDD con (DECISIONS 2026-11-20 Tách GDD con).
# Mỗi mục "## " của markdown vào đúng một tab khuôn. Mục không có chỗ thì dừng, để không mất nội dung.
# Chạy: python -P projects/game-moi/tools/dung-gdd-con.py <story|combat|vat-pham|tat-ca> --ra <thư mục>
# File xlsx tải lên Drive (đổi sang Google Sheet) rồi chép tab vào GDD con bằng connector. Tab dữ liệu (GAME STORY, Enemy...) giữ nguyên ở file con, không dựng ở đây.
import re, sys, math, argparse
from pathlib import Path
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side

GOC = Path(__file__).resolve().parents[1]
HT = GOC / 'gdd' / 'he-thong'
REPO = 'https://github.com/huycv18/DATN-SP27/blob/main/projects/game-moi/gdd/he-thong/'
GDD_CHINH = 'https://docs.google.com/spreadsheets/d/1kGdCePi8LDK1sGxfH7FK5sswVTgsXO71N4QyjzZP7Bs/edit'

TAB_KHUON = [  # (tên tab, nội dung, tiền tố tiêu đề mục "## " thuộc tab). Tiền tố cụ thể đặt trước tiền tố chung.
    ('TỔNG QUAN', 'Thông tin module, tóm tắt, số hiện hành, mục đích với người chơi, danh mục', ['Tóm tắt', 'Hiện hành', '1. ', 'Danh mục']),
    ('LUẬT', 'Luật, trạng thái, thứ tự xử lý, co-op 1 đến 4 người', ['6b.', '11. Co-op', 'Co-op', '2. ', 'Driftlife trong trạm']),
    ('THAM SỐ', 'Tham số và số cân bằng', ['3. ']),
    ('TRƯỜNG HỢP BIÊN', 'Trường hợp biên và ràng buộc của luật', ['4. ', '5. ']),
    ('YÊU CẦU', 'Yêu cầu cho engineer, tool, art, UI, tutorial, audio và cảm giác', ['7b.', '6. ', '7. ']),
    ('NGHIỆM THU', 'Cách đo thành công, tiêu chí nghiệm thu, lệch khỏi tham chiếu', ['8. ', '9. ']),
    ('TÊN RIÊNG', 'Bảng tên riêng và tên game', ['12. ']),
    ('VOICE SHEET', 'Giọng văn từng nhân vật, câu mẫu', ['13. ']),
    ('CÂU HỎI VÀ LỊCH SỬ', 'Câu hỏi mở, điểm tự quyết, phản biện, lệch với vai khác, lịch sử thay đổi', ['10. ', 'Điểm tự quyết', 'Phản biện', 'Lịch sử', 'Lệch', 'Tên mới']),
]
BO_QUA = {'14. ': 'Khối GAME STORY: đã là tab GAME STORY trong file này'}

MODULE = {
    'story': dict(so='01', ten='Story', md=['cot-truyen.md'], vai='gd-story', data=['GAME STORY'],
                  pham_vi='Bối cảnh, mạch truyện 5 chương, nhân vật truyện, tên riêng, voice sheet, lời thoại'),
    'combat': dict(so='02', ten='Combat và Driftlife', md=['combat-driftlife.md'], vai='gd-combat', data=['Enemy'],
                   pham_vi='Combat chung, choáng và mê, bắt sống, Driftlife, The Wardens, boss, Driftlife trong trạm'),
    'vat-pham': dict(so='03', ten='Vật phẩm', md=['vat-pham.md'], vai='gd-items', data=['Salvage', 'ITEM LIST', 'Recipe'],
                     pham_vi='Tài nguyên, mẫu Driftlife, dụng cụ, công thức, hàng hóa cảng, vật liệu sửa khoang, vòng đời vật phẩm'),
}
DATA_MO_TA = {'GAME STORY': 'Khối truyện dán Sheet', 'Enemy': 'Bảng Driftlife, The Wardens, boss',
              'Salvage': 'Tài nguyên và điểm khai thác', 'ITEM LIST': 'Danh sách vật phẩm', 'Recipe': 'Công thức chế'}

# ---------- đọc markdown ----------
def sach(s):
    s = re.sub(r'`(Sau MVP|MVP)`', r'[\1]', s)
    s = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'\1 (\2)', s)
    s = s.replace('**', '').replace('`', '').replace('<br>', '\n')
    return s.strip()

def tach_muc(text):
    dau, muc, cur = [], [], None
    for ln in text.replace('\r\n', '\n').split('\n'):
        if ln.startswith('## '):
            cur = (sach(ln[3:]), []); muc.append(cur)
        elif cur is None:
            dau.append(ln)
        else:
            cur[1].append(ln)
    return dau, muc

def hang_cua(tieu, dong):
    """Trả danh sách (loại, ô). Loại: H1 tiêu đề mục, H2, H3, TH đầu bảng, TR hàng bảng, P đoạn."""
    out = [('H1', [tieu])]
    i = 0
    while i < len(dong):
        ln = dong[i].rstrip()
        if not ln.strip():
            i += 1; continue
        if ln.startswith('#### '): out.append(('H3', [sach(ln[5:])]))
        elif ln.startswith('### '): out.append(('H2', [sach(ln[4:])]))
        elif ln.lstrip().startswith('|'):
            bang = []
            while i < len(dong) and dong[i].lstrip().startswith('|'):
                bang.append(dong[i].strip()); i += 1
            for k, b in enumerate(bang):
                o = [sach(c) for c in re.split(r'(?<!\\)\|', b.strip('|'))]
                if k == 1 and all(re.fullmatch(r':?-{2,}:?', c.replace(' ', '')) for c in o): continue
                out.append(('TH' if k == 0 else 'TR', o))
            continue
        else:
            out.append(('P', [sach(re.sub(r'^>\s?', '', ln))]))
        i += 1
    return out

def dem_dong_noi_dung(dong):
    return sum(1 for l in dong if l.strip() and not re.fullmatch(r'\|?[\s:|-]+\|?', l.strip()))

# ---------- dựng ----------
TIM = '351C75'
KIEU = {
    'H1': (PatternFill('solid', fgColor='674EA7'), Font(name='Arial', size=12, bold=True, color='FFFFFF')),
    'H2': (PatternFill('solid', fgColor='D9D2E9'), Font(name='Arial', size=11, bold=True)),
    'H3': (PatternFill('solid', fgColor='EFEBF7'), Font(name='Arial', size=10, bold=True, italic=True)),
    'TH': (PatternFill('solid', fgColor='F3F3F3'), Font(name='Arial', size=10, bold=True)),
    'TR': (None, Font(name='Arial', size=10)),
    'P': (None, Font(name='Arial', size=10)),
}
VIEN = Border(*(Side(style='thin', color='BFBFBF'),) * 4)
CANH = Alignment(wrap_text=True, vertical='top')
PX_KY_TU = 6.3  # Arial 10: khoảng 7 px một ký tự, dùng ước chiều cao hàng (ô gộp không tự giãn)

def do_rong(ncol):
    if ncol == 1: return [1100]
    khac = max(140, min(320, int(980 / (ncol - 1))))
    return [200] + [khac] * (ncol - 1)

def so_dong(text, px):
    return sum(max(1, math.ceil(len(p) * PX_KY_TU / max(px - 10, 40))) for p in str(text).split('\n'))

def ghi_tab(ws, tieu_de, ghi_chu, hang):
    ncol = max([4] + [len(o) for k, o in hang if k in ('TH', 'TR')])
    w = do_rong(ncol)
    for j, px in enumerate(w):
        ws.column_dimensions[chr(65 + j) if j < 26 else 'A' + chr(65 + j - 26)].width = px / 7
    tong = sum(w)
    ws.append([tieu_de]); ws.merge_cells(start_row=1, start_column=1, end_row=1, end_column=ncol)
    c = ws.cell(1, 1); c.fill = PatternFill('solid', fgColor=TIM); c.font = Font(name='Arial', size=16, bold=True, color='FFFFFF')
    c.alignment = Alignment(horizontal='center', vertical='center'); ws.row_dimensions[1].height = 36
    ws.append([ghi_chu]); ws.merge_cells(start_row=2, start_column=1, end_row=2, end_column=ncol)
    c = ws.cell(2, 1); c.font = Font(name='Arial', size=9, italic=True, color='666666'); c.alignment = CANH
    ws.row_dimensions[2].height = 15 * so_dong(ghi_chu, tong) + 4
    ws.freeze_panes = 'A2'
    for k, o in hang:
        ws.append(o); r = ws.max_row
        nen, font = KIEU[k]
        if k in ('H1', 'H2', 'H3', 'P'):
            ws.merge_cells(start_row=r, start_column=1, end_row=r, end_column=ncol)
            n = so_dong(o[0], tong)
            for j in range(1, ncol + 1):
                cc = ws.cell(r, j); cc.font = font; cc.alignment = CANH
                if nen: cc.fill = nen
            ws.row_dimensions[r].height = 15 * n + (8 if k == 'H1' else 4)
        else:
            n = 1
            for j in range(1, ncol + 1):
                cc = ws.cell(r, j); cc.font = font; cc.alignment = CANH; cc.border = VIEN
                if nen: cc.fill = nen
                if j - 1 < len(o): n = max(n, so_dong(o[j - 1], w[j - 1]))
            ws.row_dimensions[r].height = 15 * n + 4
    return ncol

def dung(key, ra):
    m = MODULE[key]
    nhom = {t[0]: [] for t in TAB_KHUON}
    nguon_dem = 0
    for f in m['md']:
        dau, muc = tach_muc((HT / f).read_text(encoding='utf-8'))
        for tieu, dong in muc:
            if any(tieu.startswith(p) for p in BO_QUA): continue
            tab = next((t for t, _, ps in TAB_KHUON if any(tieu.startswith(p) for p in ps)), None)
            if tab is None: sys.exit(f'DỪNG: mục "{tieu}" ở {f} chưa có tab khuôn. Thêm tiền tố vào TAB_KHUON.')
            h = hang_cua(tieu, dong)
            nguon_dem += dem_dong_noi_dung(dong) + 1
            nhom[tab].append((f, tieu, h))
    tabs = [t for t in TAB_KHUON if nhom[t[0]]]
    wb = Workbook(); wb.remove(wb.active)
    ten_file = f"GDD - The Novent - {m['so']} {m['ten']}"
    da_ghi = 0
    for ten, mo_ta, _ in tabs:
        hang = []
        if ten == 'TỔNG QUAN':
            hang += [('H1', ['Thông tin module']), ('TH', ['Mục', 'Nội dung']),
                     ('TR', ['GDD chính', f'=HYPERLINK("{GDD_CHINH}","GDD - The Novent (bản chính)")']),
                     ('TR', ['Phạm vi module', m['pham_vi']]),
                     ('TR', ['Vai giữ', m['vai']]),
                     ('TR', ['Nguồn (bản đủ)', ', '.join(f'projects/game-moi/gdd/he-thong/{f}' for f in m['md'])]),
                     ('TR', ['Link nguồn', f'=HYPERLINK("{REPO}{m["md"][0]}","{m["md"][0]} trên GitHub")']),
                     ('TR', ['Quy ước', 'Nguồn luật là GDD hệ thống trong repo. Sheet này sinh bằng tools/dung-gdd-con.py, không sửa tay. Đổi luật: sửa markdown, chạy lại script, cập nhật Sheet, ghi một dòng ở tab TRACKING của GDD chính. GDD chính giữ tóm tắt và link của module này ở tab GDD CON'])]
            hang += [('H1', ['Danh mục tab']), ('TH', ['Tab', 'Nội dung'])]
            for t, mt, _ in tabs:  # thứ tự như tab trong file: bảng dữ liệu đứng sau THAM SỐ
                hang.append(('TR', [t, mt]))
                if t == 'THAM SỐ': hang += [('TR', [d, DATA_MO_TA[d] + ' (bảng dữ liệu)']) for d in m['data']]
        for f, tieu, h in nhom[ten]:
            hang += h
            da_ghi += sum(1 for k, _ in h)
        nguon = '; '.join(f'{f} mục "{t}"' for f, t, _ in nhom[ten])
        ws = wb.create_sheet(ten)
        ghi_tab(ws, f"{m['ten'].upper()} - {ten}", f'Nguồn: {nguon}. Sinh bằng tools/dung-gdd-con.py, sửa ở repo trước.', hang)
    # tự kiểm: mỗi dòng nội dung của markdown (trừ dòng kẻ bảng) thành đúng một hàng
    assert da_ghi == nguon_dem, f'{key}: {da_ghi} hàng ghi, {nguon_dem} dòng nguồn'
    out = Path(ra) / f'{key}.xlsx'
    wb.save(out)
    print(f'{key}: {out} | {len(tabs)} tab khuôn | {da_ghi} hàng nội dung | tab: {", ".join(t for t, _, _ in tabs)}')
    return ten_file

if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    a = argparse.ArgumentParser(); a.add_argument('module'); a.add_argument('--ra', default='.')
    x = a.parse_args()
    for k in (MODULE if x.module == 'tat-ca' else [x.module]): dung(k, x.ra)
