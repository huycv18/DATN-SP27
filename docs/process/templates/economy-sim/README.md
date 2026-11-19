# Mẫu sim economy và cổng kiểm số (dùng chung mọi game)

Mục đích: số trong doc economy luôn bằng số sim in ra, và số Lead đã chốt không thể còn bản cũ trong văn bản. Sinh từ lỗi E1 và E6 của một game chữ rơi (doc ghi "10 coin" khi tham số là 5).

## Ba file
| File | Việc |
|---|---|
| `tham-so.mau.json` | Mẫu `economy/tham-so.json` của game (đang là bản ví dụ của một game chữ rơi). `tham_so.<tên>.gia_tri` là số Lead chốt, `nguon` ghi DECISIONS hoặc `so-hien-hanh.md`. `bat` là regex (nhóm 1 là số) tìm chỗ doc nhắc tham số. `cam` là số cũ không được còn. `sim` là cấu hình sim (kịch bản hành vi, dải nhạy) |
| `economy_doc.py` | `ghi`, `kiem`, `selftest`. Không phụ thuộc game |
| sim của game | Ví dụ `projects/<slug>/economy/sim-quan-vang.py`: đọc `tham-so.json`, in bảng markdown, ghi `ket-qua.json` bằng cờ `--ra` |

## Cách dùng (một game mới)
1. Chép `tham-so.mau.json` về `projects/<slug>/economy/tham-so.json`, sửa giá trị và regex theo cách doc của game viết. Số hiện hành lấy từ `projects/<slug>/so-hien-hanh.md`, không lấy từ tin nhắn.
2. Viết sim theo mẫu của game ví dụ: mọi tham số đọc từ `tham-so.json`. In `ket-qua.json` dạng `{"khoi": {"ten": "bảng markdown"}, "bien": {"ten": "giá trị"}}`.
3. Trong doc: bảng sinh từ sim đặt giữa `<!--khoi:ten-->` và `<!--/khoi-->`. Số suy ra từ sim (mốc Hồi sinh đầu, tổng, trung bình) đặt giữa `<!--v:ten-->` và `<!--/v-->`. Không gõ tay các số này.
4. Mỗi lần Lead đổi tham số: sửa `tham-so.json` (và thêm số cũ vào `cam`), chạy sim `--ra`, rồi:
   `python docs/process/templates/economy-sim/economy_doc.py ghi <doc.md> <ket-qua.json>`
   `python docs/process/templates/economy-sim/economy_doc.py kiem <tham-so.json> <doc.md> <ket-qua.json>`
   `kiem` phải ra 0 lỗi trước khi báo xong.
5. Dải nhạy: mọi tham số hành vi (tỉ lệ nhặt, xác suất thua, tỉ lệ xem ads) đặt cận dưới và cận trên ở `sim.dai_nhay`. Sim in bảng và câu kết luận "mốc dịch bao nhiêu level, tham số nào nhạy". Tham số nhạy phải có dữ liệu thật trước khi tin mốc.

## Kiểm máy
`python docs/process/templates/economy-sim/economy_doc.py selftest` (xanh = bắt được "10 coin mỗi Coin" khi tham số là 5, bắt được "50% level" khi tham số là 30, bắt được biến và bảng lệch sim, và lệnh `ghi` sửa được).

Ví dụ chạy thật trên game chữ rơi: bản sao `quan-vang.md` đổi một chỗ thành "+10 coin" thì `kiem` báo `tham số coin_moi_coin = 5 nhưng doc ghi 10`. Đổi "80 coin" thành "50 coin" trong bảng số chốt thì báo `thuong_thang = 80 nhưng doc ghi 50`.

## Giới hạn
- `kiem` kiểm số theo mẫu regex bạn khai báo. Câu mới viết theo cách khác không bị bắt. Khi viết thêm cách nói mới về một tham số, thêm regex vào `bat`.
- Mục "Phụ lục" và "Lịch sử thay đổi" (khai ở `bo_qua_tieu_de`) không bị kiểm tham số: chỗ đó được phép ghi số cũ.
