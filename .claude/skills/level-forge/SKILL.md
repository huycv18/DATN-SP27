---
name: level-forge
description: Phân tích một gameplay puzzle rồi dựng tool build level (level editor / level designer tool) cho nó - quản lý bộ level, nạp/lưu JSON, nhập CSV, bộ giải chứng minh level giải được, thang điểm độ khó, sinh level hàng loạt, xuất cho engine. Dùng khi cần làm tool dựng màn cho một game mới, tách cấu trúc tool từ mô tả gameplay, thêm bộ sinh level tự động, chấm độ khó level, hoặc chứng minh một level có lời giải. Triggers - tool build level, level editor, level designer, trình dựng màn, sinh level, chấm độ khó, level solver, level generator, xuất LevelList JSON, phân tích gameplay thành tool.
---

# Level Forge - từ một gameplay ra một tool dựng level

**Ý chính:** một tool dựng level chỉ có **NĂM CHỖ** phụ thuộc game. Mọi thứ còn
lại là khung, và khung tự lắp được khi năm chỗ đó đã điền. Việc của bạn khi cầm
một tài liệu gameplay là **tách nó thành năm chỗ đó**, không phải nghĩ ra kiến
trúc mới.

Mỗi game một khác, nên skill này chỉ nói phần chung. Ví dụ cụ thể nằm ở
`examples/`, và một ca có thật đã đi hết vòng đời nằm ở
`references/case-hop-bong.md` - đọc khi cần bằng chứng, không phải để chép.

---

## Bước 0 - Thử tính khả thi TRƯỚC khi hứa gì

Lời hứa lớn nhất của tool là "không bao giờ giao level chưa chứng minh được là
giải được". Lời hứa đó chỉ giữ nổi khi **vét cạn được không gian tìm kiếm**.
Bốn câu, hỏi thẳng vào gameplay:

1. **Mỗi lượt người chơi thật sự có mấy lựa chọn?** Từ khoảng 6 trở xuống thì
   vét cạn được. Vài chục thì phải nghĩ lại cách mô hình hoá trước khi code.
2. **Có bước nào LUÔN có lợi không?** Có thì đẩy ra khỏi tìm kiếm, cho chạy tự
   động. Đây là đòn bẩy lớn nhất để co không gian trạng thái, và là chỗ hay bị
   bỏ sót nhất.
3. **Có đúng MỘT tài nguyên khan hiếm không?** (ô chờ, lá trên tay, số nước,
   lần hoàn tác). Nếu có, nó thành thước đo độ khó chính gần như miễn phí:
   "level này cần tối thiểu bao nhiêu".
4. **Level có bất biến đếm được không?** Có thì kiểm được dữ liệu hỏng mà không
   cần chạy solver.

**Ngưỡng thực dụng:** vét cạn một level nên tốn dưới vài nghìn node. Vượt vài
chục nghìn thì gần như chắc chắn câu 2 chưa được trả lời - còn một bước "luôn có
lợi" đang nằm nhầm trong không gian tìm kiếm.

Trả lời xong bốn câu này rồi mới viết dòng code đầu tiên.

---

## Năm chỗ phụ thuộc game

Mỗi chỗ trả lời đúng một câu về gameplay. Điền xong chỗ nào, khung trả lại ngay
những thứ ở cột phải - không phải viết thêm.

| # | Chỗ | Câu hỏi về gameplay | Khung trả lại |
|---|---|---|---|
| 1 | **SCHEMA** | Một level gồm những gì? | Quản lý bộ level, nạp/lưu JSON, CSV, nhớ qua reload, hoàn tác |
| 2 | **LUẬT** | Người chơi làm được gì, thắng thua khi nào? | Bộ giải hai chế độ, ba phán quyết, đo tài nguyên tối thiểu, chơi thử tay, AI chơi thử |
| 3 | **BẤT BIẾN** | Dữ liệu thế nào là hợp lệ? | Chặn ở cửa nạp kèm lý do, kiểm cả bộ, nút tự sửa |
| 4 | **TRỤC KHÓ** | Độ khó đến từ đâu? | Điểm 0-100, hiệu chuẩn theo fixture, bảng phân tích, lời khuyên gỡ khó |
| 5 | **DỰNG** | Làm sao đẻ ra một bàn chắc chắn giải được? | Sinh hàng loạt, bám đích điểm, đường cong độ khó cả chương |

Bố cục thư mục gợi ý - tên file tuỳ bạn, ranh giới thì nên giữ:

```
model/   schema · stats · validate      ← chỗ 1 và 3
sim/     rules · solver · score          ← chỗ 2 và 4
gen/     primitives · generate           ← chỗ 5
io/      parse · serialize · csv         ← khung
ui/      stage · panels · play           ← khung
```

Thứ **không** thuộc chỗ nào, thuần khung: bộ gộp một file HTML và bốn tầng kiểm
tra. Đừng đụng vào chúng khi làm game mới.

---

## Thứ tự dẫn xuất

Mỗi bước kiểm được trước khi sang bước sau, nên sai chỗ nào lộ ra ngay chỗ đó.

1. **Điền năm chỗ RA GIẤY trước.** Chưa code. Chỗ nào tài liệu gameplay không
   trả lời được thì đó là câu phải hỏi designer, không phải chỗ để đoán.
2. **Viết LUẬT trước tiên** - hợp đồng năm hàm ở `forge/solver.js`. Nó là thứ
   duy nhất không kiểm được bằng cách nào khác ngoài chạy thử.
3. **Kiểm LUẬT bằng level có sẵn của game.** Kết quả phải khớp điều người chơi
   đã biết là đúng. Không khớp thì luật sai, sửa ngay - mọi thứ sau đứng trên đây.
4. **Viết SCHEMA và BẤT BIẾN.** Xong hai chỗ này là có quản lý level, JSON, CSV
   và kiểm dữ liệu, không phải viết thêm dòng nào.
5. **Viết DỰNG.** Bóc một lời giải hợp lệ rồi phá nó.
6. **Phỏng vấn designer lấy TRỤC KHÓ**, rồi hiệu chuẩn theo fixture.
7. **Khung lắp phần còn lại.**

Bước 6 đi sau cùng là có chủ đích: thang điểm chỉ có nghĩa khi đã có bộ sinh để
dò ngưỡng và có fixture để hiệu chuẩn.

---

## Phỏng vấn designer - ba câu

Hỏi trước bước 6, ghi lại **nguyên văn**, đừng gợi ý đáp án:

- Độ khó của game này đến từ đâu? (đợi họ kể 2-4 thứ)
- Một ván hay thì cảm giác nó đi thế nào từ đầu tới cuối?
- Level nào trong bộ hiện tại bạn thấy *đúng* nhất? Vì sao?

Câu ba cho bạn **fixture**. Không có fixture thì không hiệu chuẩn được gì, và
mọi con số về sau chỉ là ý kiến.

---

## Mười hai luật

Đầy đủ ở `references/rules.md`. Bản rút gọn:

**Tạo** - phỏng vấn trước khi code · luật game viết MỘT bản duy nhất, đừng chép
ra nhiều nơi · sinh level bằng cách phá một lời giải · một file, không dependency.

**Hoàn thiện** - thang điểm đặt trọng số theo ý đồ rồi mới dò ngưỡng · tham số
trực tiếp, gõ số nào ra đúng số đó · luật trải nghiệm phải có hàm đo mới ép được ·
báo thất bại cho tử tế.

**Cải tiến** - đo trước sửa sau · giữ đường lui bằng tham số tương thích ngược
rồi chốt thành phép kiểm · hiệu chuẩn lại thì chốt danh sách chứ đừng chỉ đếm ·
đổi luật thì soát lại mọi giả định ngầm.

Hai cái đắt nhất, đọc kỹ trước khi làm:

- **Đừng để máy dò trọng số chọn hộ.** Nó tối ưu khớp nhãn, và cách rẻ nhất để
  khớp nhãn thường là dồn trọng số cho một trục tầm thường như độ dài ván. Kết
  quả là tool khuyên "muốn khó hơn thì làm bàn dài hơn" - đúng thống kê, sai
  thiết kế. Đặt trọng số theo ý đồ, chỉ dò ngưỡng.
- **Đo đòn bẩy độ khó trước khi tin nó.** Cái núm bạn tin là chính hoàn toàn có
  thể gần như không nối với gì. Quét cả dải của nó và xem trục độ khó nhúc nhích
  bao nhiêu, trước khi xây UI quanh nó.

---

## Cổng nội dung trước khi xuất data

`scripts/kiem_noi_dung.py` (Python, không dependency) chạy ở bước xuất data của mọi game:

- **Mật độ mechanic.** Cột mechanic gồm các cụm "tên: tiến độ-tỉ lệ" hoặc "tên: n" ngăn bằng dấu chấm phẩy, hoặc mỗi mechanic một dòng trong ô. Tên khai ở `so_luong` đọc dạng tiến độ-số lượng (mỗi mốc là số sinh trong đoạn, không cộng dồn, ví dụ game tile rơi): mật độ = tổng các đoạn x `quan_moi_don_vi` (dây link3 = 3 quân) / tổng quân. Ở mọi mốc tiến độ, tổng mechanic chặn không vượt `tran_chan` (mức cao nhất bộ đã ship) và tổng mọi mechanic không vượt `tran_tong`. Bắt lỗi thêm mechanic mới cộng dồn lên mechanic cũ.
- **Đổi từ theo chủ đề.** So bản trước và sau từng level: từ thêm vào phải thuộc chủ đề chính và không nằm trong kho cấm. Ngoại lệ ghi vào file chấp nhận kèm lý do. Script in bảng "từ bỏ -> từ thêm -> chủ đề" để soi mắt.
- **Dùng khi dựng.** `chon_tu_thay()` chọn từ thay theo cùng luật.

Lệnh: `python -I -X utf8 scripts/kiem_noi_dung.py --cfg cfg.json --levels sau.csv --truoc truoc.csv --md bang.md`. Selftest: `--selftest`. Khóa cấu hình ở docstring đầu file. Ca thật: script kiểm xuất của một game chữ rơi, nằm trong thư mục độ khó của project đó.

---

## Bốn tầng kiểm tra

Chạy cả bốn trước mỗi lần giao file. Không tầng nào thay được tầng nào.

| Tầng | Chứng minh | Bắt lỗi loại nào |
|---|---|---|
| `check` | Quy ước module, không trùng tên, tầng lõi không đụng DOM | Gộp file xong vỡ lúc chạy thật |
| `verify` | Fixture hợp lệ, xuất trùng từng byte, thang điểm khớp **đúng danh sách** nhãn đã chốt | Trôi định dạng, thang điểm lệch, luật bị sửa ngầm |
| `verify:gen` | Bộ sinh bám đích, tất định theo seed, giữ đủ luật trải nghiệm | Núm xoay không nối với gì |
| `verify:pt` | AI chơi thử: thang kỹ năng đơn điệu | Level đúng điểm trên giấy nhưng chơi thì ức chế |

---

## Trong `assets/`

| File | Dùng lại | Việc của nó |
|---|---|---|
| `forge/solver.js` | nguyên si | Beam + vét cạn có memo và ngân sách, quét tài nguyên tối thiểu |
| `forge/game.js` | nguyên si | Hợp đồng game phải ký, tự bắt lỗi khai báo lúc nạp |
| `forge/levels.js` | nguyên si | Thêm, nhân bản, xoá, đổi chỗ, đổi tên, đánh số lại |
| `forge/io.js` | nguyên si | JSON nạp/lưu, CSV nạp/xuất, ghép bộ |
| `forge/score.js` | nguyên si | Thang điểm nhiều trục, hiệu chuẩn theo fixture |
| `examples/tripletile.js` | chép làm điểm xuất phát | Một game mẫu điền đủ năm chỗ, chạy được ngay |
| `examples/hop-bong-rules.js` | đọc để so | Một cơ chế khác hẳn ký cùng hợp đồng LUẬT |
| `selftest.mjs` | chạy để yên tâm | 22 phép kiểm chứng minh lõi còn đúng |

```bash
node assets/selftest.mjs
```

---

## Đừng làm mấy việc này

- **Đừng chép cả tool cũ sang game mới.** Chép **hợp đồng**, viết lại phần ruột.
- **Đừng trừu tượng hoá chỗ DỰNG.** Cách sinh level là bản sắc của từng game.
  Ép chung một khuôn thì game nào cũng vừa vặn một cách tồi tệ. Phần thật sự
  dùng lại được thường chỉ khoảng một phần tám mã nguồn.
- **Đừng thêm dependency.** Giao một file, designer bấm đúp là chạy.
- **Đừng giao level chưa chứng minh được là giải được.**
