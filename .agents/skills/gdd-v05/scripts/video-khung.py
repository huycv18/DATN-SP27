# Cắt khung hình từ video gameplay để đọc luật trước khi hỏi 3 câu, và cắt ảnh minh họa cho cột Ảnh của tab Gameplay.
# Chạy:
#   python -I .claude/skills/gdd-v05/scripts/video-khung.py <video> --ra <thư mục> [--moi 2]          tấm ghép 12 khung có mốc giờ
#   python -I .claude/skills/gdd-v05/scripts/video-khung.py <video> --ra <thư mục> --cat 50.5,90.5    khung gốc ở các giây đã chọn
# ffmpeg lấy từ PATH, không có thì lấy từ gói Python imageio_ffmpeg (pip install imageio-ffmpeg).
import argparse
import shutil
import subprocess
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")


def tim_ffmpeg():
    ff = shutil.which("ffmpeg")
    if ff:
        return ff
    import site
    sys.path.append(site.getusersitepackages())  # chạy với -I thì Python bỏ gói cài --user, thêm lại chỉ để tìm imageio_ffmpeg
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except ImportError:
        sys.exit("Không thấy ffmpeg: cài ffmpeg vào PATH hoặc chạy: pip install imageio-ffmpeg")


def chay(lenh):
    r = subprocess.run(lenh, capture_output=True, text=True, encoding="utf-8", errors="replace")
    # Fontconfig báo lỗi cấu hình trên Windows nhưng drawtext vẫn vẽ được, chỉ dừng khi ffmpeg trả mã lỗi
    if r.returncode != 0:
        sys.exit(r.stderr[-800:])


def main():
    p = argparse.ArgumentParser()
    p.add_argument("video")
    p.add_argument("--ra", required=True)
    p.add_argument("--moi", type=float, default=2, help="số giây giữa hai khung của tấm ghép")
    p.add_argument("--cat", help="danh sách giây, cắt khung gốc từng mốc (ví dụ 50.5,90.5)")
    a = p.parse_args()
    ff, ra = tim_ffmpeg(), Path(a.ra)
    if not Path(a.video).is_file():
        sys.exit(f"Không thấy video: {a.video}")
    ra.mkdir(parents=True, exist_ok=True)
    if a.cat:
        for t in a.cat.split(","):
            f = ra / f"khung-{float(t):06.1f}s.png"
            chay([ff, "-loglevel", "error", "-y", "-ss", t.strip(), "-i", a.video, "-frames:v", "1", str(f)])
            print(f)
        return
    tam = ra / "_khung"
    tam.mkdir(exist_ok=True)
    for f in tam.glob("k*.png"):
        f.unlink()
    loc = f"fps=1/{a.moi},scale=211:-2,drawtext=text='%{{pts\\:hms}}':x=5:y=5:fontsize=18:fontcolor=yellow:box=1:boxcolor=black"
    chay([ff, "-loglevel", "error", "-y", "-i", a.video, "-vf", loc, str(tam / "k%03d.png")])
    n = len(list(tam.glob("k*.png")))
    if n == 0:
        sys.exit("Không cắt được khung nào")
    chay([ff, "-loglevel", "error", "-y", "-i", str(tam / "k%03d.png"), "-vf", "tile=6x2", str(ra / "tam-%02d.png")])
    for f in sorted(ra.glob("tam-*.png")):
        print(f)
    print(f"{n} khung, mỗi {a.moi}s, 12 khung một tấm. Đọc từng tấm, rồi cắt khung gốc bằng --cat ở các mốc cần soi")


if __name__ == "__main__":
    main()
