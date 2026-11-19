# Hỏi đáp chốt luật một lượt

Nguyên tắc: Lead gửi luật bằng bảng, ảnh, video, JSON, không bằng văn xuôi dài. Việc của skill là đọc hết đính kèm, tự trả lời mọi thứ trả lời được, rồi hỏi đúng chỗ mơ hồ trong MỘT danh sách. Mỗi câu có phương án nghiêng về để Lead chỉ cần gõ số hoặc "Oke", trừ câu về luật lõi và mechanic (mục 2). Bằng chứng: ở một game sort, Lead viết 6 điểm, hỏi đúng 4 chỗ mơ hồ là được đón nhận. Ở một game tile rơi, 9 luật chốt trong một lượt từ màn demo.

## 1. Đọc đính kèm theo loại

| Loại | Cách đọc | Rút ra |
|---|---|---|
| Ảnh màn chơi, ảnh có khoanh đỏ | Đọc bằng Read (ảnh hiện ra), đếm vật thể, đọc HUD, nhãn nút | Số order mở, sức chứa khay hay hàng chờ, có đồng hồ không, booster nào có nút, trạng thái vật thể (úp, băng, xích), text đang hiện |
| Video demo | Không mở được trực tiếp. Nhờ Lead cho 3 đến 5 ảnh chụp mốc đầu, giữa, thắng, thua, hoặc đọc mô tả Lead kèm | Thứ tự sự kiện trong một lượt (resolution order), cái gì xảy ra khi order xong |
| JSON level | Script nhỏ đọc đếm (số quân, tầng, order, mechanic và số của nó, khay) | Số thật cho Level Data, tên trường cho mục engineer, giới hạn thực tế (trần) |
| Build, prototype, config | Đọc để biết build đang làm gì | Không lấy luật Win, Lose, mục tiêu ván. Ba điều này hỏi người dùng (mục 2) |
| GDD cũ (sheet, markdown) | Đọc nguyên văn, ghi lại mục nào Lead đã xóa | Luật đã chốt kèm ngày, mục không được thêm lại |
| Bảng 2 cột "Mục - Mô tả" của Lead | Mỗi dòng thành một luật ứng viên | Luật khẳng định, chỗ thiếu số hoặc thiếu ca biên thành câu hỏi |
| Game tham chiếu (tên hoặc link) | Nếu có hồ sơ `projects/<slug>/tham-chieu/` thì đọc, không có thì chỉ ghi tên, không bịa cơ chế | Nội dung cần chép nguyên văn kèm nguồn |

Không có đính kèm nào: danh sách câu hỏi chính là bộ câu hỏi mặc định theo thể loại ở mục 3, nhưng vẫn bỏ câu nào DECISIONS đã trả lời.

## 2. Mẫu danh sách

```
# Hỏi đáp chốt luật - <tên> - <yyyy-mm-dd>

Đã chốt (không hỏi lại):
- dd/mm: <luật> (DECISIONS)

Câu hỏi (trả lời bằng số câu kèm phương án, ví dụ "4: a, 7: 5 ô"):

## Gameplay, Win, Lose (luôn hỏi đầu tiên, người dùng tự viết)
1. Gameplay thế nào: người chơi làm gì trong một ván?
2. Win khi nào?
3. Thua khi nào?

## Luật
4. <câu hỏi>? Nghiêng về: <phương án>. Vì: <một câu>.
5. ...
## Ca tranh cãi của thắng, thua
6. ...
## Tham số
7. ...
## Mechanic và tín hiệu nhìn thấy (không kèm "Nghiêng về")
8. <câu hỏi>? Phương án: a) ..., b) .... Lead viết lựa chọn bằng lời.
## Phạm vi (chỉ khi cần)
9. ...
```

Luật viết câu hỏi:
- Ba câu Gameplay, Win, Lose luôn đứng đầu. Không kèm "Nghiêng về" lấy từ build. Đính kèm đã nói rõ thì ghi "Đính kèm ghi: ... Đúng không?" để người dùng xác nhận.
- Một câu một điều, câu có thể trả lời bằng một chữ hoặc một số.
- Phương án nghiêng về lấy từ game tham chiếu, từ DECISIONS game cùng studio, hoặc từ knowledge, ghi nguồn trong "Vì".
- Câu về luật lõi hoặc mechanic: liệt kê phương án kèm điểm mạnh, rủi ro, không ghi "Nghiêng về" dạng chọn sẵn. Chỉ nhận câu Lead tự viết, chữ trên nút gợi sẵn không tính là chốt.
- Không hỏi khái niệm ("core loop là gì"), không hỏi lại điều đã chốt, không hỏi thứ skill tự đo được bằng script.
- Dưới 15 câu. Nhiều hơn thì gộp thành câu có nhiều lựa chọn (a, b, c).
- Lead trả lời bằng ví dụ số ("90/80") thì luật trong GDD viết lại bằng chính ví dụ đó.

## 3. Bộ câu hỏi gợi ý theo thể loại (chọn, không chép hết)

Tile match và sort có bộ đệm (ví dụ game tile chữ nhiều tầng, game họ drop):
- Thua ngay khi đầy hay sau khi xử lý xong cả lượt (nhóm Link, chuộc)? Nghiêng về: sau khi cả nhóm vào chỗ và order mới đã chuộc.
- Số order mở cố định hay theo level? Order mới sinh ngay hay chờ hiệu ứng tan xong?
- Vật trong bộ đệm có tự về order giữa chừng không hay chỉ lúc order mới sinh?
- Mechanic chặn (băng, xích, úp): điều kiện mở là gì, đếm theo lượt nào, có đếm khi còn bị đè không, về 0 thì có nhặt ngay được không?
- Mechanic nhóm (Link): định nghĩa "sát nhau" (cùng tầng, chung cạnh?), tối đa mấy quân, bộ đệm còn 1 ô thì sao?
- Hai mechanic chồng nhau (băng trên quân Link, úp trên quân băng): cái nào xử lý trước?
- Booster với mechanic: nam châm rút được quân băng không? Xáo có đổi số băng không? Hoàn tác có trả số băng không?
- Có đồng hồ không? Có sao không? Có điểm không?
- Revive: giá, số lần, làm gì với bộ đệm, có giữ khớp chính xác không?

Puzzle đệm và order (ví dụ game băng chuyền phục vụ Order và game path):
- Pick hợp lệ tính thế nào khi một phần khớp order ngay? Thua khi đầy hay khi deadlock? Ai ưu tiên khi hai order cần cùng thứ (cũ nhất, trái sang phải)?

Mọi thể loại:
- Khung bàn và cỡ vật thể tối thiểu ở viewport mục tiêu (380 px)?
- Từ Lead gọi vật thể và vùng (khay, hàng chờ hay băng chuyền, quân, bóng hay card)?
- Level dạy mechanic ở đâu, mật độ theo chặng, tầng được đặt?
- Phạm vi bản này: prototype một phiên, bản đầu, hay đầy đủ?

## 4. Sau khi Lead trả lời

- Ghi câu trả lời vào cùng file hỏi đáp (cột "Trả lời", ngày).
- Mỗi câu trả lời thành một luật đánh số trong GDD, kèm "chủ dự án chốt dd/mm" khi là quyết định mới. Ghi DECISIONS.
- Câu không trả lời: dùng phương án nghiêng về, đánh `[GIẢ ĐỊNH]` tại chỗ dùng và liệt kê trong "Câu hỏi mở".
- Câu Gameplay, Win, Lose chưa có trả lời: ghi "chờ Lead chọn" ở mục đó, không lấy từ build.
- Câu về luật lõi hoặc mechanic mà Lead bỏ trống, nói "cứ làm", hoặc chỉ bấm nút gợi sẵn: không tự điền, không `[GIẢ ĐỊNH]`. Ghi "chờ Lead chọn" tại chỗ dùng (V0.5 ghi "1 mechanic hidden"), liệt kê trong "Câu hỏi mở", hỏi lại ở lượt sau.
- Lead trả lời luật lõi hoặc mechanic bằng lời: chép nguyên văn kèm ngày vào file hỏi đáp, rồi mới viết thành luật.
