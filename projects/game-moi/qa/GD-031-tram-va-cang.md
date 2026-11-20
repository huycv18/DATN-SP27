# GD-031 tram-va-cang

ĐẠT (kiểm sau F1, 08:57) - F1 đã sửa: gd-qa grep dòng 379 (quy mô đơn 1, 1,6, 2,2, 2,8, hệ số 0,6), mục 5 không còn số sim chép tay, `[CHỜ` 0, "Sundering" 0 (file 08:57:56). Còn 7 nhẹ F2 đến F8 (F2, F7, F8 gd-quan báo đã sửa, chưa kiểm lại từng dòng). Chặn 0, nặng 0.

Trạng thái trước đó: TRẢ LẠI - vòng cuối: ba lỗi nặng vòng 2 (R1, R2, R3) đã sửa thật, còn 1 lỗi nặng mới là số sim cũ trong mục 5 và mục 3 (sửa ba dòng là xong). Chặn 0.

## Vòng cuối

Giờ sửa file khi chấm (đã chờ đứng yên 20 giây): `tram-va-cang.md` 08:53:31 (637 dòng). Khung `00-khung-game.md` 04:54:38 (lần 5, K22 tới K27, C10). `tools/ket-qua/sim-ca-cang.md` 04:51:27, `tools/sim-ca-cang.mjs` 04:42:15, `ca-cang.json` 04:51:14. Các file `vat-pham.md`, `cot-truyen.md`, `ky-thuat.md`, `kinh-te-tien-trinh.md` vừa sửa lúc 08:52 tới 08:53, không chờ thêm.
Máy: `validate-gdd.mjs` 0 lỗi cho `tram-va-cang.md` (8 lỗi còn lại đều ở `nguoi-choi.md`, gd-character), đã có kiểm "mọi CGO thuộc đúng một nhóm HC" (R10 vòng 2 đã xong).
Sim chạy lại ra thư mục tạm (`--ra`, seed 1, 300 ca): chương 2 trở đi giống file kết quả từng ô. Chương 1 lệch tối đa 2 điểm phần trăm so với file (hash tham số `c4d91863` so với `948260d3`) vì sim đọc nhóm hàng từ `tram-va-cang.md` và cỡ kiện từ `vat-pham.md`, hai file này đổi sau 04:51. Mọi kết luận đạt hay không đạt giữ nguyên với cả hai bản.

### Ba lỗi nặng vòng 2

| # | Trạng thái | Bằng chứng |
|---|---|---|
| R1 lịch và N | Đã sửa | Luật 20 (:118): loại tàu, giờ đến, ID kiện, kiện gốc cố định trong ngày. Số kiện bằng kiện gốc nhân quy mô đơn theo N đang online, bảng tàu tính lại khi N đổi, chốt lúc Mở ca. Khớp luật 64 (:186), luật 69 (:191), bảng 2.9 (:320), AC :494 |
| R2 kiện tinh chương 1 | Đã sửa | Luật 23 (:121), bảng 2.4 TA01 (:229), HC03 (:64): chương 1 đúng một loại kiện tinh là CGO-113, tối đa 1 dòng mỗi ca, kiện gốc 1, từ khi xưởng Hoạt động. HC04 (CGO-111, 112) chuyển sang chương 2. Khớp `vat-pham.md`: CGO-113 MVP (RCP-123, 2 x COM-105), CGO-111 Sau MVP, mục MVP ghi "đúng 1 kiện phải chế trước khi đóng là CGO-113". Khớp log 67. Hai file không nói hai ID khác nhau. Tutorial :468 nay có thật |
| R3 sim lệch GDD | Đã sửa | `ca-cang.json` nay có `suCoGiay` 4, `suCoThemTuN`, điểm đơn đủ làm tròn tích, TA02 ở ô "Chương 1, Hạng 3", nhóm hàng đọc từ bảng của GDD, cỡ kiện đọc từ `vat-pham.md`, luật 69 túi trộn có trọng số. Thêm ô chương 3 một bến và chương 4 hai bến (R11 vòng 2 cũng xong) |

Các lỗi nhẹ vòng 2: R4 (Bỏ ca khóa cửa khí, luật 63 và 65), R5 (làm tròn ca đầu, :189), R6 (mục tiêu về 70 tới 90%, chương 1 70 tới 95% theo log 78, ca 180 giây), R7 (số 61% đã bỏ), R8 (K24 ở luật 12), R9 (chương 2 N=4 nay rảnh 19%), R10 (validator), R11 (ô sim): đều Đã sửa.

### Kiểm theo yêu cầu

| Việc kiểm | Kết quả |
|---|---|
| Mục 8 so với sim (bản chạy lại) | Chương 1 Hạng 1: đơn đủ 92, 93, 93, 80%, rảnh 18, 22, 23, 26%. Hạng 3: 93, 94, 93, 75%, rảnh 20, 23, 23, 26%. Đạt 70 tới 95% và rảnh không quá 30%. Chương 2: 89, 90, 87, 76%, rảnh 14 tới 19%. Chương 3 một bến 83, 85, 80, 73%. Chương 3 hai bến 76, 76, 70, 93% (N=4 vượt trần 3 điểm, đã ghi chấp nhận theo log 78). Chương 4 ba bến có kệ phụ và đóng sẵn một nửa: 86, 82, 74, 86%, rảnh 37, 34, 26, 34%. Khớp lời GDD (:485 tới :488) |
| P3, ca một mình (N=1, trung bình, 0 đóng sẵn) | Chương 1 đơn đủ 92%, rảnh 18%, ca 181 giây. Chương 2 89%. Chương 3 một bến 83%, hai bến 76%. Chương 4 hai bến 67%. Chương 4 và 5 ba bến không chuẩn bị 61%, 70% ca chạm trần 240 giây. Có đóng sẵn một nửa và kệ phụ thì 86%. Kết luận: một người kịp ở chương 1 tới 3 và chương 4 hai bến. Chương 4, 5 ba bến cần đóng sẵn (GDD ghi đúng là ý đồ chuẩn bị, :487). Kiện giao mỗi người nhóm 4 ở chương 1 là 23,4 chia 4 bằng 5,85, so với 9,2 khi chơi một mình là 64%, qua mức 60% của khung |
| K25 một nghĩa | Khớp. Luật 11 (:103), khung :88, `cot-truyen.md` mốc C1.9, C2.8, C3.8, C4.7 và dòng 25, `kinh-te-tien-trinh.md` luật 12 (dòng 50) đều nói: chương đóng khi mốc đóng chương xong và mốc đó chỉ kích hoạt khi giai đoạn động cơ của chương đã lắp, không có cổng riêng |
| Dòng "luật 16" cũ và `[CHỜ gd-tech]` | Đã sửa. `tram-va-cang.md` không còn "luật 16", dòng 396 dẫn `ky-thuat.md` luật 17 và ba điểm tự lưu của K23 (khớp khung :86, :101 và `ky-thuat.md` luật 17), không còn chuỗi CHỜ. Câu hỏi mở về host đã bỏ. Dòng :601 nay ghi "GDM đã xử, log 65" |
| K22 đến K24, C10 | Khớp: luật 63 và 65 (K22), luật 60 và 66 (30 giây, K23), dòng 396 và mục Lưu :439 (K23, C10), luật 12 (K24). Không còn từ "chờ GDM", không có Sundering |
| Kiện tinh chương 1 và `vat-pham.md` | Cùng CGO-113, không lệch ID |

### Lỗi còn lại

| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|---|
| F1 | Nặng | Số | tram-va-cang.md:423, :425, :379 | Số trích từ vòng sim cũ vẫn còn ở mục 5 và mục 3, sai so với sim cuối. :423 "giãn cách 45 giây, ca khoảng 190 giây" (nay 42 giây, ca 179 tới 183). :425 "4 người giao khoảng 31 kiện, chờ máy tới 16%, chưa nghẽn" (nay 23,1 tới 23,4 kiện, chờ máy 21 tới 22%, máy bận 70 tới 71%). :379 "quy mô đơn 1, 1,4, 1,8, 2,2 lần ở chương 3 tới 5" trong khi cùng đoạn và bảng cấu hình nói hệ số 0,6 mọi chương, tức 1, 1,6, 2,2, 2,8 | sim-ca-cang.md bảng 1 và 2, hàng "Chương 1, Hạng 1", N=4. Bảng cấu hình :368-375 | Chép lại ba chỗ theo sim cuối hoặc đổi thành "xem `sim-ca-cang.md`" | gd-quan |
| F2 | Nhẹ | 1 | tram-va-cang.md:3 | Header ghi nguồn "K10 đến K24, C1 đến C10", khung nay tới K27 | khung :3 sửa lần 5 | Cập nhật | gd-quan |
| F3 | Nhẹ | 2 | tram-va-cang.md:450 vs :485-487 | Đề sim còn "rảnh từ 10% tới 30%" nhưng mục 8 chỉ ghi "không quá 30%". Thực tế chương 3, 4 và N=1 rảnh 8 tới 9%, tức người chơi bận 91% thời gian | sim bảng 2: chương 3 hai bến 9, 10, 11%, chương 4 ba bến 8, 9, 8% | Ghi rõ đã bỏ mép dưới 10% và lý do, hoặc nhận là rủi ro playtest | gd-quan |
| F4 | Nhẹ | Số | tram-va-cang.md:485 | "Ca chạm mép dưới 180 giây, lệch tối đa 3 giây". Bản chạy lại thấp nhất 176 giây (chương 1 Hạng 3 N=1), tức 4 giây. File kết quả 04:51 ghi 177 | Chạy lại ra thư mục tạm | Ghi "tối đa 4 giây" hoặc chạy lại file kết quả | gd-quan, gd-tech |
| F5 | Nhẹ | Số | tools/ket-qua/sim-ca-cang.md dòng 3 | File kết quả cũ hơn đầu vào: hash `948260d3`, chạy lại ra `c4d91863` vì `tram-va-cang.md` và `vat-pham.md` đổi sau 04:51. Chương 1 lệch tối đa 2 điểm phần trăm | diff hai file | Chạy lại và lưu đè sau khi GDD và `vat-pham.md` đứng yên | gd-tech |
| F6 | Nhẹ | 3 | tools/sim-ca-cang.mjs (dòng `const can = C.ch === 1 && k.tinh ? 1 : ...`) | Sim đặt kiện tinh chương 1 luôn là 1 kiện, bỏ quy mô đơn theo N. Luật 23 nói kiện gốc 1 và nhân quy mô đơn như mọi dòng (N=4 ra 3 kiện). Sim nhẹ tay hơn GDD ở chương 1 co-op | Luật 23 (:121) | Sửa sim hoặc sửa luật 23 | gd-tech |
| F7 | Nhẹ | 3 | tram-va-cang.md:142 (luật 38) vs cot-truyen.md:344 | Luật 38 nói lần 3 của TA08 vào lịch "từ ngày kế tiếp sau mốc C3.7", thiếu điều kiện giai đoạn 3 của động cơ đã lắp (K25) mà cot-truyen C3.8 có. Luật 11 đã nói chung nên không mâu thuẫn, nhưng dev đọc riêng luật 38 sẽ thiếu | cot-truyen.md:344 | Thêm điều kiện vào luật 38 | gd-quan |
| F8 | Nhẹ | 3 | tram-va-cang.md:104 (luật 12) vs khung :87 | K24 nay ghi bản lưu ở ngày cuối với mọi mốc xong, Ember còn ở neo, cảnh kết không phát lại, xem lại ở Sổ tay. Luật 12 ghi "ngay trước khi rời neo" và không nói cảnh kết không phát lại | Sau MVP | Chép lại theo K24 | gd-quan |

Kết luận: chỉ còn F1 là nặng và nó là ba số cũ trong prose, không ảnh hưởng luật hay sim. Sửa F1 thì ĐẠT kèm danh sách nhẹ F2 tới F8 (không chặn giao dev).

## Vòng 2 (lưu lại)

Vòng 2: TRẢ LẠI - 27 trong 30 lỗi cũ đã sửa thật, nhưng còn 3 lỗi nặng (1 lỗi cũ về sim, 2 lỗi mới trong luật lịch và kiện tinh MVP). Chặn 0.
Giờ sửa file khi chấm: 04:20 (`gdd/he-thong/tram-va-cang.md`, 623 dòng). Khung `00-khung-game.md` 04:13 (sửa lần 4, K22 tới K24, C10). Sim `tools/ket-qua/sim-ca-cang.md` 03:59, `tools/sim-ca-cang.mjs` 03:57, `tools/tham-so/ca-cang.json` 03:59: không đổi từ vòng 1 nên không chạy lại (kết quả vòng 1 đã so thân bảng giống từng ký tự). Vòng chấm: 2.
Máy: `node tools/validate-gdd.mjs` 0 lỗi (328 ID). Tự kiểm bằng script: mọi CGO trong `vat-pham.md` đều nằm trong bảng nhóm hàng, không CGO nào ở hai nhóm.

## Tóm tắt lỗi (còn lại sau vòng 2)

| Mức | Số lỗi |
|---|---|
| Chặn | 0 |
| Nặng | 3 |
| Nhẹ | 8 |

## Lỗi còn và lỗi mới

| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|---|
| R1 | Nặng | 5 | tram-va-cang.md:117 (luật 20), :185 (luật 64), :190 (luật 69), :379, :319 | Lịch sinh "lúc bắt đầu ngày, không đổi trong ngày" nhưng số kiện mỗi dòng nhân quy mô đơn theo N, và N là số người online lúc mở ca. Lịch hiện ở bảng tàu từ pha chuẩn bị nên không biết N nào | Co-op 2 người: người thứ hai vào sau khi lịch đã sinh thì bảng tàu hiện kiện theo N=1 hay N=2. Kiện đóng trước (luật 57) lập kế hoạch theo bảng này. ux-ui.md:875 còn để mở phương án "cố định theo số người tỉnh dậy" | Viết: lịch sinh đầu ngày với kiện gốc, nhân N tính lại lúc hiển thị và lúc Mở ca, hoặc sinh lại lịch lúc Mở ca. Nói bảng tàu pha chuẩn bị hiện theo N đang online | gd-quan |
| R2 | Nặng | 3, 4 | tram-va-cang.md:228-229 (bảng 2.4 TA01, TA02), :120 (luật 23), :122 (luật 25), :466, :584, :62-66 | Kiện tinh (CGO-111 tới 113) và bước "chế thêm ở xưởng" gắn nhãn MVP chương 1, nhưng không tàu nào của chương 1 có trong pool: TA01 chỉ HC01, HC02, HC10, HC06 (thêm HC05 từ Hạng 3), TA02 chỉ HC01, HC02, HC10, CGO-104 (thô). HC03 có CGO-113 và HC04 chỉ vào đơn từ TA03, TA04 (chương 2, Sau MVP) | Luật 23 "mỗi ca có tối đa một dòng kiện tinh" là luật chết ở chương 1. :466 tutorial "lần đầu có kiện cần chế thêm" và :584 "Kiện tinh vẫn có chỗ tiêu" không xảy ra ở MVP. K13 nói người chơi "chế thêm" mà MVP không có dòng đơn nào đòi chế. Sim chương 1 cũng không có (TA01 pool). Trái P2 cho COM ở xưởng khi nhìn riêng cảng | Chọn một: thêm HC03 (CGO-113) hoặc HC04 vào pool TA01 hay TA02 chương 1 với dòng tối đa 1 kiện (và đưa vào sim), hoặc bỏ nhãn MVP khỏi kiện tinh và sửa :466, :584 | gd-quan, GDM duyệt vì chạm phạm vi MVP |
| R3 | Nặng | Số | tools/tham-so/ca-cang.json:51-70, :253, tools/sim-ca-cang.mjs:19, :33, :144 | (Lỗi cũ 17, còn.) Sim chưa khớp GDD hiện hành: cỡ HC02 và HC03 là Lớn, HC04 là Vừa (vat-pham.md:97-99 xếp Nhỏ). `suCoGiay` 10 giây (GDD :350 là 4 giây). Không cộng 1 sự cố khi N từ 3 (:548). Điểm cảng làm tròn hệ số `Math.ceil((N+1)/2)` (luật 40 nay là làm tròn tích: N=2 sim 4 điểm, GDD 3, N=4 sim 6, GDD 5). TA02 bị loại ở chương 1. Rút tàu đều, không theo túi trộn trọng số 3:1 của luật 69, TA02 và TA04 pool khác bảng 2.4 | Mục 8 (:483-488) dẫn số từ sim này. Số khớp file sim từng ô (đã kiểm), nhưng sim chạy với tham số lệch nên "đạt" chưa chắc đúng với luật hiện hành. Gd-tech đang sửa theo báo của GDM | Sửa json và mjs theo luật 40, 69, 70, bảng 2.4, vat-pham cỡ kiện, rồi chạy lại. Đến khi đó GDD ghi "số sim trước khi sửa tham số" | gd-tech |
| R4 | Nhẹ | 2 | tram-va-cang.md:490 vs :181 (luật 63), :186 (luật 65) | AC "Bỏ ca: cửa khí khóa tới ngày mới" nhưng luật 63 và 65 chỉ khóa khi Mở ca | Luật 19 Bỏ ca không nói khóa cửa khí. K22 chỉ nói "đã mở ca cảng" | Thêm vào luật 65 hoặc bỏ khỏi AC | gd-quan |
| R5 | Nhẹ | 2 | tram-va-cang.md:188 (luật 67) | Số kiện ca đầu là "2 nhân quy mô đơn theo N", không nói làm tròn (N=2 ra 3,2) | Luật 69 có làm tròn lên, luật 67 không dẫn | Thêm "làm tròn lên" | gd-quan |
| R6 | Nhẹ | 2 | tram-va-cang.md:483, :487 vs :448, khung 00-khung-game.md:132 | Mục tiêu bị nới để đạt: chương 1 đơn đủ "70 tới 100%" (đề sim :448 vẫn 70 tới 90%), thời lượng ca "170 tới 300" trong khi khung mục 9 là 3 đến 5 phút (180 đến 300), sim thấp nhất 178 và kịch bản tốt chương 3 N=3 là 167 | sim-ca-cang.md dòng 65, 73. Nới mục tiêu để đạt cần GDM duyệt | GDM duyệt hoặc trả mục tiêu về 70 tới 90% và 180 | GDM, gd-quan |
| R7 | Nhẹ | Số | tram-va-cang.md:583 | Dẫn "gd-economy: nhóm 4 xong game bằng 61% (0,4 là 59%)". kinh-te-tien-trinh.md (04:14) nay ghi 53% (dòng 21, 340) và hết chương 2 ngoài dung sai | Đã kiểm kinh-te dòng 21, 340 | Cập nhật hoặc bỏ số | gd-quan |
| R8 | Nhẹ | 3 | tram-va-cang.md:103 (luật 12) | K24 (khung lần 4): sau cảnh kết về menu, bản lưu ở ngày cuối trước rời neo, vẫn chơi tiếp. Luật 12 và mục Lưu (:437) không nhắc | Sau MVP | Thêm một câu | gd-quan |
| R9 | Nhẹ | 2 | tram-va-cang.md:484 | Chương 2, N=4 rảnh 31% vượt trần 30%, ghi "chấp nhận, playtest đo lại" | sim-ca-cang.md dòng 50 (hàng chương 2 N=4: 31%) | Giữ, ghi nhận như lệch có chủ ý | gd-quan |
| R10 | Nhẹ | 3 | tram-va-cang.md:498 | AC "validator gd-tech: mọi CGO thuộc đúng một nhóm". `tools/validate-gdd.mjs` chưa có kiểm này (grep không thấy HC). Tôi đã kiểm bằng script thủ công, đạt | validate-gdd.md: 0 lỗi nhưng không có dòng nhóm hàng | gd-tech thêm | gd-tech |
| R11 | Nhẹ | 4 | tram-va-cang.md:371, :373, :488 | Hai cấu hình lịch "chưa sim": chương 3 với 1 bến (giãn cách 55) và chương 4 và 5 với 2 bến (42). Đã ghi trung thực, chưa có số | Bảng cấu hình lịch :366-374 | Sim bổ sung khi gd-tech sửa sim | gd-tech |

## Trạng thái 30 lỗi vòng 1

| # cũ | Mức cũ | Trạng thái | Chỗ sửa và nhận xét |
|---|---|---|---|
| 1 | Nặng | Đã sửa | Luật 70 (:191): i từ 0, lệch cộng 0 tới 10 giây, vượt 240 thì kéo giờ đến về 240 trừ lưu bến, cùng giờ xếp theo thứ tự lịch. Khớp sim-ca-cang.mjs:33 |
| 2 | Nặng | Đã sửa | Luật 69 (:190): túi trộn theo trọng số bảng 2.4, tàu truyện tối đa 2 chỗ đầu, số dòng, nhóm rồi ID rút đều, kiện gốc nhân N làm tròn lên, không trùng ID. Dev dựng được. Sim chưa theo (R3) |
| 3 | Nặng | Đã sửa | Luật 68 (:189) và bảng Cấu hình lịch (:366-374) theo số bến đang Hoạt động. Hai ô chưa sim (R11) |
| 4 | Nặng | Đã sửa | Luật 64 tới 66 (:185-187): mở khi không ai ngoài chuyến, N lúc mở ca, một ca mỗi ngày, ca bỏ hoặc xong không mở lại, 2 người trở lên Bỏ ca hoặc mở sớm cần xác nhận 30 giây. Lỗ mới R1 và R4 |
| 5 | Nặng | Đã sửa | Luật 67 (:188) ca đầu cố định 1 tàu TA01 dài, CGO-101, giờ đến 0. Khớp tutorial :466 và :83. Lỗ nhẹ R5 |
| 6 | Nặng | Đã sửa | Luật 63 (:181) và KH02 (:30): nạp đầy Oxy khi chuyến kết thúc, tối đa 2 chuyến, Skiff tính một chuyến, khóa sau chuyến 2 hoặc khi mở ca. Khớp K22 (khung :85) và nguoi-choi.md:83. Chuyến co-op chung nên C9 vẫn đúng. Không còn Oxy vô hạn |
| 7 | Nặng | Đã sửa | Luật 62 (:180): N buồng chạy, buồng còn lại hỏng và không sửa, người vào sau có buồng ở khu hồi sức, không lấp buồng tắt. Khớp cot-truyen.md:183, :476, :479 và L4 |
| 8 | Nặng | Đã sửa | Luật 7 (:95): khoang có người vớt chỉ sửa được sau khi người vớt tỉnh và giao quest. Khớp thứ tự C1.4 tới C1.7 ở cot-truyen.md:207-211. AC :502 |
| 9 | Nặng | Đã sửa | Luật 23, 30, 31 (:120, :127, :128): mỗi dòng một ID, giá một kiện theo ID, tổng giá đơn là giá kiện đã nhận ở dòng bắt buộc. Dòng tùy chọn TA03 xác định (:230). Lồng sống giá theo loài, kinh-te.md dòng 112-114 có giá từng loài |
| 10 | Nặng | Đã sửa trong GDD | HC06 (:67) và luật 24 (:121): 8 giây ở máy đóng kiện, khớp RCP-126, RCP-128. Sim còn bỏ bước này (gộp trong R3) |
| 11 | Nặng | Đã sửa | HC11 tới HC13 (:72-74). Đã kiểm: mọi CGO-xxx trong vat-pham.md thuộc đúng một nhóm |
| 12 | Nặng | Đã sửa | Hạng 7 (:249) đổi thành "Đơn TA06 và TA10 có dòng HC13 giá cao". Không còn tàu vô danh |
| 13 | Nặng | Đã sửa | Luật 46 (:155), bảng 2.8 (:307), luật 45 (:154), điểm tự quyết (:590): hàng bị giữ trong con vật, về chỗ cũ, không mất. Khớp combat-driftlife.md:618, :663 |
| 14 | Nặng | Đã sửa | Bảng 2.8 (:305): rò khí chỉ làm cửa chậm thêm 3 giây, điểm rò ở kho, ô máy, ô cạnh bến. Không cần đường vòng. Đúng mặt cắt 2.6b |
| 15 | Nặng | Đã sửa trong GDD | Luật 40 (:146) làm tròn tích, ví dụ 3 và 2, 5 và 3 đúng, AC :494 (3, 5, 6, 8) tự tính lại đúng. Sim còn làm tròn hệ số (R3) |
| 16 | Nặng | Đã sửa | Mục 8 (:483-488) chép lại. Đã đối chiếu từng số với sim-ca-cang.md: chương 1 ca 190 tới 191, rảnh 21, 23, 24, 26, kiện mỗi người 10,8, 10,2, 9,5, 7,8, đơn đủ 91, 94, 96, 86. Chương 2 84, 81, 80, 77 và rảnh 27, 25, 28, 31. Chương 3 70, 80, 88, 79 và 13, 19, 29, 25. Chương 4 83, 87, 90, 83 và 31, 35, 40, 35, một người 62. Khớp hết |
| 17 | Nặng | Còn | Xem R3 |
| 18 | Nặng | Đã sửa | Ngưỡng hạng 10, 20, 45, 70, 100, 135, 195 giữ. kinh-te-tien-trinh.md bảng 3.5 (dòng 228-238) nay ghi "gd-quan đã nhận, sim dùng số này". Còn một số 61% cũ (R7) |
| 19 | Nặng | Chuyển GDM | :395, :535, :599 theo khung C10, K23 (đầu ngày) và ghi lệch với ky-thuat.md luật 16. Xem mục Ghi cho GDM. Không tính lỗi của gd-quan |
| 20 | Nặng | Đã sửa | Mục 8 thêm sửa khoang, người vớt, Hạng cảng, sang ngày 30 giây, ra chuyến 30 giây, K22, người vào sau (:500-511) |
| 21 | Nhẹ | Đã sửa | Số luật 1 tới 70 tăng dần theo mục |
| 22 | Nhẹ | Đã sửa | Header :3, :5 cập nhật |
| 23 | Nhẹ | Đã sửa | Bảng 2.5, 2.6, 2.6c, 2.9 có cột Nhãn |
| 24 | Nhẹ | Đã sửa | Bảng 2.9 hàng "Quy mô đơn" (:319) |
| 25 | Nhẹ | Đã sửa, mở R6 | Câu "vượt trần 26%" bỏ. Đơn đủ chương 1 vượt 90% nay ghi chấp nhận (R6) |
| 26 | Nhẹ | Đã sửa, mở R6 | Đổi mục tiêu xuống 170 (R6) |
| 27 | Nhẹ | Đã sửa | Luật 30: giá theo loài, bảng tàu hiện "từ" |
| 28 | Nhẹ | Đã sửa | Luật 49 (trần theo số dòng HC06, HC07, HC11), luật 51 (con non không lấy ra), luật 52 và bảng 2.6 (môi trường Xa ở cấp 3, chương 3) |
| 29 | Nhẹ | Đã sửa | Luật 61 (:179) hủy xác nhận trước khi chuyến bắt đầu |
| 30 | Nhẹ | Đã sửa | :339, :378 ghi "vòng cũ", :421 chỉ dẫn sim chương 1 |

## Trái lời Lead

Không. L4 nay khớp (luật 62). L1 tới L17 còn lại không đổi so với vòng 1.

## Mâu thuẫn chéo (file khác nói gì, dòng nào)

| File khác | Nói gì | GDD này | Ghi chú |
|---|---|---|---|
| khung K22, K23, K24, C10 (:85-87, :98) | K22 2 chuyến, đã mở ca thì khóa cửa khí. K23 ngủ 30 giây, tự lưu lúc ngủ, thoát giữa ngày về đầu ngày. K24 kết về menu, lưu ngày cuối. C10 host thoát về lần lưu đầu ngày | Luật 59 tới 66, :395 theo K22, K23, C10 | Khớp. K24 chưa phản ánh (R8) |
| ky-thuat.md:104 (luật 16) | Điểm lưu tạm sau chuyến 1, chuyến 2, ca cảng | :395, :535, :599 theo khung | Khung và ky-thuat lệch nhau, chưa chốt. Ghi cho GDM, không phải lỗi gd-quan |
| ux-ui.md:70, :171, :278, :787, :926 (04:21) | Ngủ co-op đếm 60 giây, ghi "ĐÃ CHỐT (gd-quan luật 59 tới 61)" | Luật 60 nay 30 giây theo K23 | Lệch. Cần gd-ux sửa về 30 giây. Ghi cho GDM, không tính lỗi GDD này |
| combat-driftlife.md:618, :663 | Sổng giữ hàng không làm mất | Luật 46 | Khớp |
| kinh-te-tien-trinh.md:228-238, :112-114 | Ngưỡng hạng 10, 20, 45, 70, 100, 135, 195, giá lồng theo loài | :347, luật 30 | Khớp |
| vat-pham.md:97-99, :304-305 | Cỡ kiện, RCP-126 8 giây | Luật 24, HC06 | GDD khớp, sim lệch (R3) |
| cot-truyen.md:207-211, :476-479 | Thứ tự C1.4 tới C1.7, buồng vô danh cho người vào sau | Luật 7, 62 | Khớp |

## Chỗ phải đoán (lớp 5)

Dev mới đọc luật 19, 20 và 64 tới 70 có dựng được ca cảng chưa: gần như được. Đã giải quyết: i từ 0 và kéo giờ đến về 240 trừ lưu bến (luật 70), chọn tàu và dòng hàng (luật 69), mở ca và một ca mỗi ngày (luật 64, 65), ca đầu (luật 67), bốc kiện và thứ tự xử lý (:215-221), vòng Oxy (luật 63 và K22), đóng kiện trước (luật 53 tới 58). Còn phải đoán:

| # | Chỗ phải đoán | Dòng |
|---|---|---|
| 1 | Bảng tàu pha chuẩn bị hiện kiện theo N nào, lịch sinh đầu ngày hay lúc mở ca (R1) | :117, :185 |
| 2 | Kiện tinh ở chương 1 lấy từ đâu (R2) | :120, :228 |
| 3 | Bỏ ca có khóa cửa khí không (R4) | :116, :181 |
| 4 | Làm tròn số kiện ca đầu khi N từ 2 (R5) | :188 |
| 5 | Túi trộn hết túi trộn lại: lưu cùng thế giới (:433), nhưng "hết túi" tính theo thẻ hay theo ngày chưa viết rõ. Dev đọc "rút không hoàn lại, hết túi thì trộn lại" là hiểu được | :190 |

## Số kiểm bằng chứng (số nào khớp file sim, số nào không)

Không có số nào trong mục 8 lệch với `sim-ca-cang.md` (bản 03:59). Bảng đối chiếu từng ô ở dòng "Trạng thái" số 16. Số còn không kiểm được:
- Ô chương 3 với 1 bến, chương 4 và 5 với 2 bến, chương 5: chưa sim (R11), GDD đã ghi.
- Số "vòng cũ" ở :339, :378 (rảnh 31 tới 39% với hệ số 0,4 ở chương 1): không còn trong sim hiện hành, GDD đã ghi là vòng cũ.
- Nhóm 4 xong game 61% (:583): sai so với kinh-te hiện hành 53% (R7).
- Cột "Điểm cảng" của sim ở N=2, N=4 sai theo luật 40 mới (R3), mục 8 không dẫn cột này.

## Tiêu chí nghiệm thu rút từ mục 8 (bảng Feature, Category, Acceptance Criteria đo được, MVP hay Sau MVP)

| Feature | Category | Acceptance Criteria | Nhãn | Nhận xét |
|---|---|---|---|---|
| Ca chương 1 một người | Sim, chơi thật | Lịch 4 tàu, giao đủ ít nhất 3 đơn trong 240 giây, 0 đóng sẵn | MVP | Đo được, sim 3,6 |
| Giờ đến tàu | Sim | Không tàu nào có giờ đến cộng lưu bến vượt 240 giây (luật 70) | MVP | Đo được |
| Ca chương 1 N 1 tới 4 | Sim | Ca 190 tới 191 giây, rảnh 21 tới 26%, kiện mỗi người 10,8, 10,2, 9,5, 7,8, đơn đủ 91, 94, 96, 86% | MVP | Khớp sim, đơn đủ trên 90% ghi chấp nhận (R6) |
| Ca chương 2 | Sim | Đơn đủ 84, 81, 80, 77%, rảnh 27, 25, 28, 31% | Sau MVP | Khớp, N=4 lệch 1 điểm (R9) |
| Ca chương 3 (2 bến) | Sim | Đơn đủ 70, 80, 88, 79%, rảnh 13, 19, 29, 25%, ca 178 tới 191 | Sau MVP | Khớp |
| Ca chương 4 (kệ phụ, đóng sẵn một nửa) | Sim | Đơn đủ 83, 87, 90, 83%, rảnh 31, 35, 40, 35% | Sau MVP | Khớp |
| Thời lượng ca | Sim | Trung bình 170 tới 300 giây mọi N, chương 1 tới 4 | MVP | Nới so với khung (R6) |
| Đơn trượt | Log | Tally không giảm, kiện còn đúng, Hạng không đổi | MVP | Đo được |
| Bỏ ca | Chơi, log | Tàu không tới, kiện còn đủ, cửa khí khóa | MVP | Đo được, luật chưa viết khóa (R4) |
| Bốc đồng thời, 2 người | Co-op | Đúng 1 kiện nhận | MVP | Đo được |
| Ca đầu tiên | Chơi, log | Đúng 1 tàu TA01, 1 dòng CGO-101 | MVP | Đo được |
| Mở ca | Log | Còn người ngoài chuyến thì không mở. Một ca mỗi ngày. Sau mở ca cửa khí khóa | MVP | Đo được |
| Điểm cảng | Sim, log | Đơn đủ nhanh 3, 5, 6, 8 điểm ở N 1 tới 4 | MVP | Đo được, tính lại đúng |
| Số tàu theo N | Sim | Bằng nhau ở N 1 tới 4 | MVP | Đo được |
| CGO-121 chương 1 | Sim 100 lịch | Mọi lịch từ ngày có Súng lưới có 1 dòng CGO-121 | MVP | Đo được |
| Nhóm hàng | Validator | Mọi CGO thuộc đúng một nhóm | MVP | Đạt (kiểm tay), validator chưa có (R10) |
| Sửa khoang | Chơi, log | Thiếu vật liệu không bắt đầu, thả phím giữ tiến độ, vật liệu không hoàn | MVP | Đo được |
| Người vớt | Chơi, log | Kéo buồng về, tỉnh đầu ngày kế, khoang chỉ sửa sau khi tỉnh | MVP | Đo được |
| Hạng cảng | Sim, log | Điểm đúng công thức, không giảm, trần dồn | MVP tới hạng 3 | Đo được |
| Sang ngày co-op | Chơi 2 người | Người treo máy: sang ngày sau 30 giây | MVP | Đo được |
| Ra chuyến co-op | Chơi 2 người | Người treo máy: chuyến bắt đầu sau 30 giây, tính ở lại | MVP | Đo được |
| Hai chuyến mỗi ngày | Chơi, log | Chuyến thứ 3 bị cửa khí chặn | MVP | Đo được |
| Đóng kiện trước co-op | Chơi 2 người | Người về sớm đóng được kiện, không ra lại, kiện được nhận | MVP | Đo được |
| Người vào sau | Chơi | Có chỗ ngủ ở khu hồi sức, buồng tắt vẫn tắt | MVP | Đo được |
| Sự cố | Sim, chơi | Không sự cố trước chương 3. Sổng bỏ mặc: 0 hàng mất | Sau MVP | Đo được |
| Nuôi | Chơi, log | Không cho ăn 5 ngày: 0 chết, 0 sản phẩm | Sau MVP | Đo được |

## Ghi cho GDM (không tính lỗi của gd-quan)

1. Host rời giữa ca: khung K23 và C10 nói về đầu ngày (mất tới 2 chuyến và việc trạm, khoảng 15 tới 25 phút). `ky-thuat.md` luật 16 nói điểm lưu tạm sau chuyến 1, chuyến 2 và ca. GDD này theo khung và đã ghi vào Câu hỏi mở (:535) và Phản biện khung (:599). Cần GDM chọn một bên.
2. `ux-ui.md` còn ngủ co-op 60 giây (dòng 70, 171, 278, 787, 926), khung K23 và GDD đã là 30 giây.
3. Sim: chờ gd-tech sửa R3 rồi chạy lại. Nếu file sim đổi sau 04:21 thì phải chấm lại mục 8.
4. Nới mục tiêu ở R6 (đơn đủ chương 1 tới 100%, ca 170 giây) nên được GDM chốt, vì khung mục 9 vẫn ghi ca 3 đến 5 phút.

## Bỏ qua / không kiểm được

- Chưa có build, chưa chơi. Chưa kiểm bộ biên PC, save và load, gamepad.
- Không chạy lại sim vì file sim và tham số không đổi từ 03:59. Không chạy sim kinh tế của gd-economy.
- Chỉ đọc các file khác ở các điểm giao với GDD này (grep), không đọc lại toàn bộ `map.md`, `ho-so-nhan-vat.md`, `story/`, `strings/`.
