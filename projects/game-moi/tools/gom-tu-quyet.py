# Gom mục "Điểm tự quyết" của mọi GDD hệ thống vào một file cho Lead đọc.
# Chủ: GDM. Chạy từ gốc repo: python projects/game-moi/tools/gom-tu-quyet.py
# Chỉ chép nguyên văn, không sửa nội dung của vai.
import io
import os
import re
import glob

GOC = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
VAI = {
    'cot-truyen.md': 'gd-story',
    'nguoi-choi.md': 'gd-character',
    'ho-so-nhan-vat.md': 'gd-character',
    'combat-driftlife.md': 'gd-combat',
    'vat-pham.md': 'gd-items',
    'map.md': 'gd-world',
    'tram-va-cang.md': 'gd-quan',
    'kinh-te-tien-trinh.md': 'gd-economy',
    'ux-ui.md': 'gd-ux',
    'ky-thuat.md': 'gd-tech',
}


def doc(p):
    return io.open(p, encoding='utf-8').read()


def muc_tu_quyet(t):
    m = re.search(r'^## [^\n]*Điểm tự quyết[^\n]*\n(.*?)(?=^## |\Z)', t, re.S | re.M)
    return m.group(1).strip() if m else ''


def so_hang(khoi):
    hang = [l for l in khoi.split('\n') if l.startswith('|')]
    return max(0, len(hang) - 2)


def main():
    ra = ['# Điểm các vai tự quyết trong từng GDD hệ thống', '',
          'File sinh bằng `projects/game-moi/tools/gom-tu-quyet.py`, chép nguyên văn mục "Điểm tự quyết" của từng GDD. Không sửa tay file này, sửa ở GDD rồi chạy lại.',
          'Điểm GDM tự quyết nằm ở `log-gdm-tu-quyet.md`.', '']
    tong = 0
    bang = ['| File | Vai | Số điểm |', '|---|---|---|']
    than = []
    for ten in VAI:
        p = os.path.join(GOC, 'gdd', 'he-thong', ten)
        if not os.path.exists(p):
            continue
        khoi = muc_tu_quyet(doc(p))
        n = so_hang(khoi)
        tong += n
        bang.append('| `gdd/he-thong/%s` | %s | %d |' % (ten, VAI[ten], n))
        than += ['## %s (%s, %d điểm)' % (ten, VAI[ten], n), '', khoi if khoi else 'Không có mục Điểm tự quyết.', '']
    bang.append('| Tổng | | %d |' % tong)
    ra += bang + [''] + than
    dich = os.path.join(GOC, 'log-vai-tu-quyet.md')
    io.open(dich, 'w', encoding='utf-8', newline='\n').write('\n'.join(ra).rstrip('\n') + '\n')
    print('Đã ghi log-vai-tu-quyet.md, tổng %d điểm' % tong)
    for l in bang[2:]:
        print(l)


if __name__ == '__main__':
    main()
