# Mười hai luật

Phát biểu cho mọi game. Mỗi luật kèm **triệu chứng** - dấu hiệu nhận ra mình
đang vi phạm nó. Bằng chứng cụ thể từ một ca có thật nằm ở `case-hop-bong.md`.

---

## Nguyên tắc nền: ba phán quyết, không phải hai

| Phán quyết | Nghĩa là gì |
|---|---|
| **Giải được** | Tìm thấy một lời giải. Chắc chắn. |
| **Vô nghiệm** | Vét cạn xong, không có đường nào. Đây là **chứng minh**. |
| **Chưa kết luận** | Tìm kiếm nhanh không thấy, hoặc vét cạn hết ngân sách. Chưa được phép nói gì. |

Đừng bao giờ để tìm kiếm nhanh nói câu của tìm kiếm vét cạn. Đó là lời nói dối
rẻ tiền nhất mà một tool dựng level có thể nói với người dùng nó.

---

## Giai đoạn I - Tạo

### 1. Phỏng vấn designer trước khi viết dòng code nào

Ba câu, ghi nguyên văn, đừng gợi ý đáp án. Câu "level nào bạn thấy đúng nhất"
cho bạn **fixture**.

> **Triệu chứng:** bạn đang tự nghĩ ra các trục độ khó. Trục designer thật sự
> dùng để nghĩ gần như luôn khác, và bám nhãn của chính họ tốt hơn.

### 2. Viết luật game trước giao diện, và chỉ viết MỘT bản

Gói thành hợp đồng năm hàm. Mẹo co không gian trạng thái: **nước đi nào luôn có
lợi thì đừng đưa vào tìm kiếm**, cho nó chạy tự động.

> **Triệu chứng:** luật bắn/ăn/ghép của game xuất hiện ở nhiều hơn một file.
> Solver, AI chơi thử và chế độ chơi tay đều cần nó - cho cả ba gọi chung một hàm.

### 3. Sinh level bằng cách phá một lời giải, không sinh bừa rồi kiểm

Tạo bàn, bóc một dãy nước đi hợp lệ, rồi hoán vị. Hoán vị giữ thứ tự tương đối
thì bảo toàn lời giải. Phá mạnh hơn thì để solver phán quyết.

> **Triệu chứng:** tỉ lệ sinh hỏng cao, hoặc bạn phải thử lại nhiều lần mới ra
> một level dùng được.

### 4. Một file, không dependency

Đổi lại phải giữ hai quy ước: chỉ named export, không trùng tên ở tầng ngoài
cùng. Một phép kiểm canh chừng đúng hai điều đó.

> **Triệu chứng:** designer phải chạy lệnh gì đó mới mở được tool.

---

## Giai đoạn II - Hoàn thiện

### 5. Thang điểm: ý đồ trước, dữ liệu sau

Hỏi designer → tìm số đo cho mỗi thứ họ nói → đặt trọng số theo **ý đồ** → chỉ
dò ngưỡng dải và mức chuẩn hoá. Ràng buộc mọi trục cốt lõi phải có trọng số thật.

> **Triệu chứng:** máy dò dồn hết trọng số cho một trục tầm thường như độ dài
> ván. Khi đó tool sẽ khuyên "muốn khó hơn thì làm bàn dài hơn".
>
> **Triệu chứng khác:** hai trục luôn dồn về một cái. Đó là dấu hiệu **đếm hai
> lần**, không phải dấu hiệu trục kia vô dụng. Giữ một trục trong điểm, đưa trục
> kia ra làm số chẩn đoán.

### 6. Tham số trực tiếp: gõ số nào ra đúng số đó

Thứ suy ra được thì hiện như **hệ quả**. Ai muốn xuất phát từ hệ quả thì cho một
nút tính ngược, điền vào ô rồi để họ xem lại.

> **Triệu chứng:** designer nhập một con số rồi tool tự suy ra ba con số khác mà
> họ mới là người muốn kiểm soát.

### 7. Luật trải nghiệm phải đo được mới ép được

Mỗi luật cần **một hàm đo** và **một hàm sửa**. Không đo được thì không phải
luật, chỉ là mong muốn.

> **Triệu chứng:** designer mô tả một cảm giác ("mở màn phải thông", "cuối ván
> phải đã") mà bạn gật đầu rồi không biết kiểm thế nào. Viết hàm đo trước - nó
> hay phơi ra là bộ level hiện tại đang vi phạm chính luật đó.

### 8. Báo thất bại cho tử tế

Hụt đích thì nói **trục nào đang chặn**. Tự ý thu hẹp yêu cầu thì **nói ra**.
"Chưa kết luận" khác "không giải được".

> **Triệu chứng:** thông báo lỗi chỉ nói "không thành công". Hoặc tệ hơn: tool
> âm thầm giảm bớt điều designer đặt để cứu một lần sinh, và không nói gì.

---

## Giai đoạn III - Cải tiến

### 9. Đo trước, sửa sau

Tài liệu luật mới về tay thì đừng viết lại simulator ngay. Dựng bản mô phỏng
luật mới **bên cạnh**, chạy trên fixture, **báo tác động trước**.

> **Triệu chứng:** bạn đã sửa xong mới biết luật mới làm hỏng level nào. Lúc đó
> không còn cách nào so với trước nữa.

### 10. Giữ đường lui bằng một tham số tương thích ngược

Tìm giá trị nào của tham số mới tái hiện **đúng** luật cũ, rồi chốt thành phép
kiểm. Vừa chứng minh bản cài mới đúng, vừa là đường lui nếu build đổi ý.

> **Triệu chứng:** không có cách nào chạy lại luật cũ để so. Khi đó mọi khác
> biệt đo được đều không phân biệt nổi "luật mới" với "bản cài sai".

### 11. Hiệu chuẩn lại thì chốt danh sách, đừng chỉ đếm

Bài kiểm phải khoá **đúng những level nào lệch nhãn**. Và phải phân biệt **thang
điểm sai** với **nhãn sai** - nhãn do người đặt, cho phiên bản game lúc đó, và
nó cũ đi khi luật đổi.

> **Triệu chứng:** bài kiểm chỉ so số lượng. Sửa trọng số xong tổng vẫn bằng cũ
> mà lệch trôi sang level khác, và không ai nhận ra.

### 12. Đổi luật thì soát lại mọi giả định ngầm

Đi soát ba chỗ: chỗ nào giả định **đơn điệu** (thêm tài nguyên thì không bao giờ
tệ đi), chỗ nào **hiệu chuẩn theo thang cũ**, chỗ nào thành **code chết** vì
chạy sai thứ tự so với nhánh khác.

> **Triệu chứng:** một hàm dùng tìm nhị phân trên một tính chất chưa ai chứng
> minh là đơn điệu. Một bảng tham số được tune cho thang điểm đời trước. Một
> nhánh cứu hộ không bao giờ chạy tới vì nhánh phía trên đã return.

---

## Trước khi giao file

1. Bốn tầng xanh hết. Một tầng đỏ là chưa giao, không ngoại lệ.
2. Mở file thật trong trình duyệt và chạy đúng thao tác vừa sửa.
3. Nói ra mọi thứ tool tự ý đổi so với điều designer đặt.
4. Dọn script tạm.
5. Ghi con số đã đo vào chú thích ngay chỗ nó biện minh.
