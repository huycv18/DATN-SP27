# Ca tham chiếu - Level Forge của game hộp bóng (game ví dụ)

Một tool đã đi hết vòng đời: dựng từ đầu, hoàn thiện, rồi sống qua hai lần build
đổi luật. Đọc để lấy **bằng chứng và con số** cho các luật ở `rules.md`. Đừng
chép cấu trúc - game của bạn khác.

**Cơ chế:** cột thẻ màu bị bắn vỡ. Hộp đạn nằm ở cột riêng, người chơi lấy hộp
đầu cột vào một ô chờ. Súng bắn khi màu khớp. Thua khi ô chờ đầy mà không bắn
được gì. Tài nguyên khan hiếm duy nhất: **số ô chờ**.

---

## Quy mô

| | |
|---|---|
| Mã nguồn | 6 460 dòng, 36 module |
| Thật sự dùng lại được cho game khác | ~800 dòng (12%) |
| Giao hàng | 1 file HTML, 0 dependency |
| Fixture | 15 level đã gắn nhãn tay |

Phân bổ: `ui/` 3 930 dòng · `gen/` 1 107 · `sim/` 919 · `model/` 392 · `io/` 261
· `core/` 52. Hai tầng `gen/` và `sim/` chiếm gần một nửa và chúng *chính là*
game, không trừu tượng hoá được.

---

## Bước 0 - tính khả thi

Vét cạn không gian tìm kiếm, đo trên cả 15 level:

| | |
|---|---|
| Trung bình | 93 node |
| Nặng nhất | 551 node |
| Ngân sách | 400 000 node |
| Dư ra | 726 lần |

Lý do rẻ đến vậy: **bắn luôn có lợi**, nên nó chạy tự động và không nằm trong
không gian tìm kiếm. Việc còn lại chỉ là "lấy hộp ở cột nào", tối đa 4 nhánh mỗi
nước. Đây là minh hoạ trực tiếp cho câu hỏi 2 của Bước 0.

---

## Bằng chứng cho từng luật

### Luật 1 - phỏng vấn trước khi code

Thang điểm đầu tiên dựng từ thứ tôi tự nghĩ ra. Khi hỏi thật, designer nêu ba
thứ khác hẳn: **độ chặn** (phải lấy ra mấy hộp màu khác mới tới hộp cần), **độ
dư** (hộp lên ô chờ bắn được vài phát rồi nằm lại), **ô chờ** (ít thì khó).

Mức bám nhãn của chính designer:

| Đo cái gì | Bám nhãn |
|---|---|
| Ba trục designer nêu | 0.742 |
| Điểm tool đang chạy lúc đó | 0.664 |

### Luật 2 - một bản luật duy nhất

Luật bắn từng được chép ở ba nơi: solver, AI chơi thử, chế độ chơi tay. Khi build
đổi logic súng, phải sửa cả ba. Đã gom về hai hàm dùng chung.

### Luật 3 - đo đòn bẩy trước khi tin

| Đòn bẩy | Độ chặn đổi được |
|---|---|
| Xáo dãy hộp (tưởng là nút chính) | 0.06 → 0.13 |
| Chôn màu (nút thật) | 0.03 → 0.29 |

Tool xoay một cái núm gần như không nối với gì suốt nhiều tháng.

### Luật 5 - đừng để máy dò chọn hộ

Máy dò thuần dữ liệu đòi đẩy hai trục designer coi là cốt lõi về **0**, rồi dồn
**34%** cho độ dài ván. Khớp nhãn cao hơn thật, nhưng tool khi đó khuyên "muốn
khó hơn thì làm bàn dài hơn".

Bộ trọng số cuối cùng đặt theo ý đồ, chỉ dò ngưỡng: độ chặn .29 · nằm ô chờ .23
· ô chờ tối thiểu .27 · số màu .08 · độ dài .08 · ẩn .05.

### Luật 6 - tham số trực tiếp

Tool từng bắt nhập "thời lượng ván" rồi tự suy ra cỡ bàn. Designer bác thẳng và
đòi nhập số thẻ, số hộp, độ lệch, số màu. Thời lượng là **hệ quả** của bốn con
số đó, không phải nguyên nhân.

### Luật 7 - luật trải nghiệm phải đo được

Hai luật designer nêu, và thứ hàm đo phơi ra:

- *"Mở màn phải giải được 1-2 hộp ngay"* → viết hàm đo xong mới thấy **5/15**
  level đang ship bịt lối ngay nước đầu.
- *"Cuối ván phải là dãy cùng màu dài"* → hoá ra cấu trúc cột thẻ **ngược hoàn
  toàn**: dãy dài nằm ở đầu ván, đuôi ván lục cục. Mọi level mở màn thì đã, kết
  thúc thì mệt.

### Luật 8 - báo thất bại tử tế

Với 14 màu trên 4 cột và 5 ô chờ, bộ sinh giao level KẸT **8/8** lần. Nấc lùi
bớt màu chỉ chạy 4 lần nên 14 màu chỉ xuống được 10, vẫn kẹt. Khi cứu được, nó
lặng lẽ bớt từ **14 xuống 7** màu mà không nói.

### Luật 9 - đo trước sửa sau

Build gửi tài liệu logic súng mới. Đo **trước khi sửa**:

| | Luật cũ | Luật mới |
|---|---|---|
| Độ chặn trung bình | 0.096 | 0.159 |
| Level không thắng nổi với 5 ô chờ | 2/15 | 3/15 |
| Level đổi ô chờ tối thiểu | | 8/15, lệch tới 3 |

Độ chặn **tăng** chứ không giảm, ngược trực giác. Và một level đang ship từ
thắng được thành không thắng nổi. Biết trước nên không ai bị bất ngờ.

### Luật 10 - đường lui

Tham số magazine đặt bằng **1** tái hiện chính xác luật cũ trên **15/15** level,
kể cả hai level vô nghiệm và đúng từng con số ô chờ tối thiểu. Đã chốt thành
phép kiểm.

### Luật 11 - chốt danh sách, đừng chỉ đếm

Sau khi đổi luật bắn, khớp nhãn tụt **10/15 → 9/15**. Không phải thang điểm tệ
đi: nhãn được designer đặt cho khẩu súng **cũ**. Ba nhãn lệch mới là ba level
cần xem lại, không phải ba con số cần vặn cho vừa.

### Luật 12 - soát giả định ngầm

Ba chỗ hỏng cùng một gốc, lộ ra khi đổi luật:

- Hàm đo ô chờ tối thiểu dùng **tìm nhị phân**, ngầm giả định thêm ô chờ thì
  không bao giờ tệ đi. Giả định đó chết theo luật mới.
- Bảng hình dạng bàn **vẫn tune cho thang điểm cũ**, đẩy lên 9 màu ở đích cao,
  ngốn hết ô chờ và chặn mất nửa trên của thang.
- Nấc lùi bớt màu là **code chết** vì chạy sau nấc phóng to bàn: đích **95** trả
  về level **56** điểm.

---

## Vài ràng buộc riêng của game này

Ghi lại để thấy dạng ràng buộc mà designer hay đưa ra, không phải để chép:

- **Cỡ hộp phải là số đẹp** (2 4 6 8 10 12, trần 12). Kéo theo một hệ quả không
  né được: bất biến của game là tổng đạn mỗi màu bằng tổng thẻ màu đó, nên màu
  nào có số thẻ **lẻ** thì bắt buộc phải có một hộp lẻ. Phải sửa cả phía thẻ,
  không chỉ phía đóng hộp.
- **Đường cong nhịp độ trong một ván** designer vẽ tay: mở nhẹ, đỉnh nhỏ ở 40%,
  nghỉ quãng 55%, đỉnh lớn ở 77%, xả về 0. Đo được nhưng chỉ **nắn được một
  phần**: người chơi giỏi luôn hoãn nước xấu nên đỉnh bị đẩy về cuối ván.

Bài học chung: designer sẽ đưa ra ràng buộc nghe đơn giản mà chạm vào bất biến
của dữ liệu. Tìm ra bất biến bị chạm **trước khi** hứa.
