#!/usr/bin/env python
# GDD con bản đọc (DECISIONS 2026-11-20 "GDD con gọn"): kiểm và dựng xlsx từ TSV của vai giữ hệ thống.
# Nguồn: projects/game-moi/gdd/sheet/gdd-con/<module>/<TAB>.tsv, khuôn ở gdd/sheet/gdd-con/KHUON.md.
# Chạy:  python -P projects/game-moi/tools/dung-gdd-con.py kiem <story|combat|vat-pham|tat-ca>      (thoát 1 khi có lỗi)
#        python -P projects/game-moi/tools/dung-gdd-con.py dung <module|tat-ca> --ra <thư mục>       (kiểm rồi ghi <module>.xlsx)
# xlsx tải lên Drive, chép tab vào GDD con bằng connector. Tab dữ liệu (GAME STORY, Enemy...) không dựng ở đây.
import re, sys, math, argparse
from pathlib import Path

GOC = Path(__file__).resolve().parents[1]
NGUON = GOC / 'gdd' / 'sheet' / 'gdd-con'
HT = GOC / 'gdd' / 'he-thong'
REPO = 'https://github.com/huycv18/DATN-SP27/blob/main/projects/game-moi/gdd/he-thong/'
GDD_CHINH = 'https://docs.google.com/spreadsheets/d/1kGdCePi8LDK1sGxfH7FK5sswVTgsXO71N4QyjzZP7Bs/edit'

# Tab -> [(cột, độ rộng px)]. Tên cột phải khớp đúng hàng đầu TSV.
KHUON = {
    'TỔNG QUAN': [('Mục', 200), ('Nội dung', 760)],
    'LUẬT': [('Mã', 70), ('Luật', 720), ('Phạm vi', 90)],
    'CHƯƠNG': [('Chương', 170), ('Tóm tắt', 500), ('Mốc chính', 360), ('Phạm vi', 90)],
    'NHÂN VẬT': [('Tên', 170), ('Vai trò', 280), ('Tính cách và giọng', 460), ('Phạm vi', 90)],
    'THAM SỐ': [('Tham số', 300), ('Giá trị', 150), ('Đơn vị', 110), ('Ghi chú', 420)],
    'TÊN RIÊNG': [('Tên', 220), ('Loại', 160), ('Nghĩa và ghi chú', 580)],
    'TRƯỜNG HỢP BIÊN': [('Tình huống', 360), ('Xử lý', 620)],
    'YÊU CẦU': [('Bộ phận', 110), ('Yêu cầu', 760), ('Phạm vi', 90)],
    'NGHIỆM THU': [('Tiêu chí', 360), ('Cách đo', 400), ('Ngưỡng đạt', 220)],
    'CÂU HỎI MỞ': [('Câu hỏi', 620), ('Ai trả lời', 160), ('Cần trước', 200)],
}
TONG_QUAN_BAT_BUOC = ['Hệ thống làm gì', 'Người chơi nhận được gì', 'Pillar phục vụ', 'Trong MVP', 'Sau MVP', 'Liên quan hệ thống khác', 'Vai giữ']
TUY_CHON = {'CÂU HỎI MỞ'}
MODULE = {
    'story': dict(so='01', ten='Story', md=['cot-truyen.md'],
                  tab=['TỔNG QUAN', 'LUẬT', 'CHƯƠNG', 'NHÂN VẬT', 'THAM SỐ', 'TÊN RIÊNG', 'TRƯỜNG HỢP BIÊN', 'YÊU CẦU', 'NGHIỆM THU', 'CÂU HỎI MỞ']),
    'combat': dict(so='02', ten='Combat và Driftlife', md=['combat-driftlife.md'],
                   tab=['TỔNG QUAN', 'LUẬT', 'THAM SỐ', 'TRƯỜNG HỢP BIÊN', 'YÊU CẦU', 'NGHIỆM THU', 'CÂU HỎI MỞ']),
    'vat-pham': dict(so='03', ten='Vật phẩm', md=['vat-pham.md'],
                     tab=['TỔNG QUAN', 'LUẬT', 'THAM SỐ', 'TRƯỜNG HỢP BIÊN', 'YÊU CẦU', 'NGHIỆM THU', 'CÂU HỎI MỞ']),
}
DAI_TOI_DA = 280  # ký tự một ô: dài hơn thì tách hàng
CAM = [(r'\blog\b', 'nhắc log nội bộ'), (r'\bQA\b|gd-qa|GD-0\d\d', 'nhắc QA hoặc mã việc'), (r'tự quyết', 'nhắc điểm tự quyết'),
       (r'xem mục|mục \d', 'trỏ mục của file khác'), (r'\bgd-[a-z]+', 'tên vai (chỉ được ở hàng Vai giữ)'), (r'[—–]', 'gạch dài'),
       (r'\*\*|`', 'ký hiệu markdown'), (r'\[GIẢ ĐỊNH\]', 'còn giả định chưa chốt')]

def doc_tsv(p):
    rows = [l.split('\t') for l in p.read_text(encoding='utf-8').replace('\r\n', '\n').strip('\n').split('\n')]
    return [[c.replace('\\n', '\n').strip() for c in r] for r in rows]

def la_nhom(r):
    return r[0].startswith('# ') and all(not c for c in r[1:])

def kiem(key):
    m, loi = MODULE[key], []
    nguon = '\n'.join((HT / f).read_text(encoding='utf-8') for f in m['md'])
    so_nguon = set(re.findall(r'\d+(?:[.,]\d+)?', nguon))
    bang = {}
    for tab in m['tab']:
        p = NGUON / key / f'{tab}.tsv'
        if not p.exists():
            if tab not in TUY_CHON: loi.append(f'{tab}: thiếu file {p.relative_to(GOC)}')
            continue
        rows = doc_tsv(p); cot = [c for c, _ in KHUON[tab]]
        if rows[0] != cot: loi.append(f'{tab}: hàng đầu phải là {" | ".join(cot)}, đang là {" | ".join(rows[0])}'); continue
        for i, r in enumerate(rows[1:], 2):
            if la_nhom(r): continue
            if len(r) != len(cot): loi.append(f'{tab} hàng {i}: {len(r)} cột, cần {len(cot)}'); continue
            for j, c in enumerate(r):
                if len(c) > DAI_TOI_DA: loi.append(f'{tab} hàng {i} cột {cot[j]}: {len(c)} ký tự, tối đa {DAI_TOI_DA}')
                if len(re.findall(r'[.!?](?=\s|$)', c)) > 2: loi.append(f'{tab} hàng {i} cột {cot[j]}: quá 2 câu, tách hàng')
                for mau, ly_do in CAM:
                    if re.search(mau, c) and not (tab == 'TỔNG QUAN' and r[0] == 'Vai giữ'): loi.append(f'{tab} hàng {i}: {ly_do} ("{c[:50]}")')
                for so in re.findall(r'\d+(?:[.,]\d+)?', c):
                    if so not in so_nguon and so.replace(',', '.') not in so_nguon and so.replace('.', ',') not in so_nguon:
                        loi.append(f'{tab} hàng {i}: số {so} không có trong {", ".join(m["md"])}')
            if 'Phạm vi' in cot and r[cot.index('Phạm vi')] not in ('MVP', 'Sau MVP'):
                loi.append(f'{tab} hàng {i}: Phạm vi phải là MVP hoặc Sau MVP')
        tran = 70 if tab == 'LUẬT' else 45  # bản đọc phải gọn: chi tiết nhỏ để ở bản đủ trong repo
        if len(rows) - 1 > tran: loi.append(f'{tab}: {len(rows) - 1} hàng, tối đa {tran} (gộp luật nhỏ, chi tiết để ở bản đủ)')
        if tab == 'TỔNG QUAN':
            co = [r[0] for r in rows[1:]]
            loi += [f'TỔNG QUAN: thiếu hàng "{x}"' for x in TONG_QUAN_BAT_BUOC if x not in co]
        bang[tab] = rows
    return bang, loi

# ---------- dựng ----------
def dung(key, ra):
    from openpyxl import Workbook
    from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
    bang, loi = kiem(key)
    if loi: sys.exit('DỪNG, sửa TSV trước:\n' + '\n'.join(loi))
    m = MODULE[key]
    vien = Border(*(Side(style='thin', color='CCCCCC'),) * 4)
    f = lambda **k: Font(name='Arial', **{'size': 10, **k})
    nen = lambda h: PatternFill('solid', fgColor=h)
    wb = Workbook(); wb.remove(wb.active)
    for tab, rows in bang.items():
        if tab == 'TỔNG QUAN':
            rows = rows + [['GDD chính', f'=HYPERLINK("{GDD_CHINH}","GDD - The Novent (bản chính)")'],
                           ['Bản đủ', f'=HYPERLINK("{REPO}{m["md"][0]}","{", ".join(m["md"])} trên GitHub")']]
        ws = wb.create_sheet(tab); khuon = KHUON[tab]; n = len(khuon)
        for j, (_, px) in enumerate(khuon): ws.column_dimensions[chr(65 + j)].width = px / 7
        ws.append([f'{m["ten"].upper()}  |  {tab}']); ws.merge_cells(start_row=1, start_column=1, end_row=1, end_column=n)
        c = ws.cell(1, 1); c.fill = nen('351C75'); c.font = f(size=14, bold=True, color='FFFFFF')
        c.alignment = Alignment(horizontal='left', vertical='center', indent=1); ws.row_dimensions[1].height = 34
        for i, r in enumerate(rows):
            ws.append(r); rr = ws.max_row
            if i == 0:  # header
                for j in range(1, n + 1):
                    x = ws.cell(rr, j); x.fill = nen('D9D2E9'); x.font = f(bold=True); x.border = vien
                    x.alignment = Alignment(vertical='center', horizontal='center' if khuon[j - 1][0] == 'Phạm vi' else 'left', indent=0 if khuon[j - 1][0] == 'Phạm vi' else 1)
                ws.row_dimensions[rr].height = 24; continue
            if la_nhom(r):
                ws.cell(rr, 1).value = r[0][2:]
                ws.merge_cells(start_row=rr, start_column=1, end_row=rr, end_column=n)
                for j in range(1, n + 1):
                    x = ws.cell(rr, j); x.fill = nen('EFEBF7'); x.font = f(bold=True, color='351C75'); x.border = vien
                    x.alignment = Alignment(vertical='center', indent=1)
                ws.row_dimensions[rr].height = 22; continue
            dong = 1
            for j, (ten, px) in enumerate(khuon, 1):
                x = ws.cell(rr, j); x.border = vien
                giua = ten in ('Phạm vi', 'Mã')
                x.font = f(bold=(j == 1 and tab in ('TỔNG QUAN', 'NHÂN VẬT', 'CHƯƠNG', 'TÊN RIÊNG')), color='38761D' if ten == 'Phạm vi' and r[j - 1] == 'MVP' else '000000')
                x.alignment = Alignment(wrap_text=True, vertical='top', horizontal='center' if giua else 'left', indent=0 if giua else 1)
                v = str(r[j - 1]) if j - 1 < len(r) else ''
                if not v.startswith('='):
                    dong = max(dong, sum(max(1, math.ceil(len(p) * 5.8 / (px - 24))) for p in v.split('\n')))
            ws.row_dimensions[rr].height = 16 * dong + 6
        ws.freeze_panes = 'A3'
        ws.sheet_view.showGridLines = False
    out = Path(ra) / f'{key}.xlsx'; wb.save(out)
    print(f'{key}: {out} | tab: {", ".join(bang)}')

if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    a = argparse.ArgumentParser(); a.add_argument('lenh', choices=['kiem', 'dung']); a.add_argument('module'); a.add_argument('--ra', default='.')
    x = a.parse_args()
    ds = list(MODULE) if x.module == 'tat-ca' else [x.module]
    sai = 0
    for k in ds:
        if x.lenh == 'dung': dung(k, x.ra); continue
        _, loi = kiem(k)
        print(f'{k}: {"ĐẠT" if not loi else f"{len(loi)} lỗi"}'); print('\n'.join('  - ' + l for l in loi[:60])); sai += bool(loi)
    sys.exit(1 if sai else 0)
