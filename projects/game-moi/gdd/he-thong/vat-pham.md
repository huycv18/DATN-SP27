# GDD hệ thống: Vật phẩm, tài nguyên, dụng cụ, công thức, hàng hóa cảng

Project: game-moi | Chủ sở hữu: gd-items | Trạng thái: bản đủ, ĐẠT GD-031, đã áp phản diện mới đợt 6 (GD-033), chờ gd-qa chấm lại, đã áp ca cảng kiểu Dave đợt 9 GD-052 (2026-11-20) | Nguồn quyết định: `../00-khung-game.md` (K1 đến K26, C1 đến C10, B3 đến B11), `../../log-gdm-tu-quyet.md`

## Tóm tắt

Hệ thống này định nghĩa mọi thứ người chơi nhặt, chế, mang, đóng thùng và bán: tài nguyên theo dải, mẫu Driftlife, dụng cụ, vật tiêu hao, công thức xưởng và nghiên cứu, kiện hàng cảng, linh kiện động cơ. Nó nối nửa đi ra ngoài (nhặt, khai thác, hạ hoặc bắt) với nửa ở trạm (sửa, chế, nuôi, lập danh mục bán) theo pillar P2: mọi thứ nhặt được đều có chỗ dùng nhìn thấy được. Tầng: lõi. Ưu tiên: bản đầu (MVP chương 1) rồi đầy đủ. Phụ thuộc chính: gd-combat (loài, drop, hành vi dụng cụ), gd-world (vị trí điểm khai thác), gd-quan (khoang, đơn hàng cảng), gd-character (túi, Oxy, bậc bộ đồ), gd-economy (giá Tally).

Nguồn dữ liệu duy nhất của mọi bảng số trong file này là `projects/game-moi/sim/vat-pham.mjs`. Bảng giữa các dấu `<!--B:...-->` do script sinh, không sửa tay. Đổi số thì sửa script rồi chạy `node projects/game-moi/sim/vat-pham.mjs --ghi`.

## Hiện hành

- ID là khóa duy nhất. Tiền tố: RES tài nguyên thô, SLV điểm khai thác, SMP mẫu đã hạ, LIV mẫu sống, BIO sản phẩm nuôi, COM vật liệu chế, CON vật tiêu hao, CGO kiện, ENG linh kiện động cơ, BPR bản thiết kế, STY vật kể chuyện, BNG buồng ngủ đông, BPS mẫu sinh thiết, FED thức ăn nuôi, TOL dụng cụ và chìa, UPG nâng cấp, RCP công thức.
- Đơn vị giá trị là GTĐ (giá trị tương đối, RES-101 bằng 1,0). Không phải Tally. gd-economy quy đổi GTĐ ra Tally (xem `kinh-te-tien-trinh.md` mục 3.1), file này không ghi giá.
- Túi tính bằng Khối. Dụng cụ và nâng cấp là mở khóa cho cả nhóm, không vào kho. Kiện nằm trong kho, không vào túi. Trong ca cảng người chơi mang thùng, mỗi lần một thùng (1 kiện = 2,5 thùng, lồng sinh vật sống là một đơn vị không chia, luật G2). Mẫu sống cỡ S đi trong Lồng mẫu (TOL-501) kéo theo, cỡ M gửi về kho bằng Phao kéo, buồng ngủ đông là vật kéo.
- Mỗi dải có tài nguyên riêng. Chuỗi giá trị: thô, luyện thành COM (hệ số 1,25 đến 1,5), đóng kiện (thô hệ số 1,0, tinh 1,1 đến 1,25). Mẫu sống cỡ S và M bằng 1,5 đến 2,0 lần giá trị hạ, mẫu sinh thiết cỡ L bằng 0,45 lần (luật M1, log 66). Chìa mở lối map nhánh là cổng cứng, không cần mang theo.
- MVP (chương 1): dải Gần, 6 tài nguyên, 7 điểm khai thác, 5 COM, 9 kiện (gồm 1 kiện đặc sản, 1 lồng sinh vật sống và đúng 1 kiện phải chế trước khi đóng là CGO-113, chốt cuối với gd-quan), 6 nâng cấp (OXY-1, BAG-1, THR-1, RACK-1, MIN-2, HAR-2), 2 vật tiêu hao (Bình Oxy nhỏ, Lưới cuộn), 5 dụng cụ (Dụng cụ khai thác, Lao từ, Dùi xung, Súng lưới, Lồng mẫu) cộng chìa Bộ kích nguồn, 4 loài Driftlife (3 loài cỡ S DL-G01, G02, G04 bắt sống được bằng Súng lưới, log 49). Phần còn lại nhãn Sau MVP.
- Số trong file là khởi điểm ước, chưa đo. Cổng kiểm máy: 0 lỗi nhất quán (ID, nguồn, tiêu, biên lợi, chi phí nâng cấp). Chưa có sim cân bằng (đợt 2).

## 1. Mục đích với người chơi

- Người chơi cảm thấy: mỗi thứ nhặt được đều có hình dạng và chỗ dùng. Túi là giới hạn thứ hai sau Oxy (K3), nên mỗi lần nhặt là một lựa chọn "đồ nào đáng chỗ này". Về trạm thấy kho đầy lên, thấy xưởng biến phế liệu thành đồ có ích, thấy thùng hàng ra quầy cảng rồi lên tàu.
- Quyết định chính: nhặt đồ dày giá trị (hiếm, nhỏ) hay đồ rẻ nhưng chiếm chỗ, hạ hay bắt sống, đem nguyên liệu thô bán thẳng hay luyện rồi mới đóng kiện, dùng vật liệu cho nâng cấp hay cho kiện.
- Phục vụ pillar: P2 (mọi thứ nhặt đều có chỗ dùng, mỗi vật phẩm có nguồn tiêu và không có vật phẩm chỉ để bán lấy số), P1 (túi và vật tiêu hao Oxy đặt giá cho từng hơi thở), P3 (mọi luật chạy đúng với 1 đến 4 người).
- 30 giây đầu: người chơi nhặt Mảnh vỡ trôi bằng tay (SLV-101, không cần dụng cụ), thấy túi đầy lên bằng thanh Khối, khoan một mạch quặng (SLV-102) bằng Dụng cụ khai thác khởi đầu, nạy một hòm bằng cùng dụng cụ đó rồi dùng Lao từ ở ô thứ hai khi gặp Driftlife. Ba ô dụng cụ ở bậc 0, ba loại thao tác, ba loại vật phẩm.

## 2. Luật

### 2.1 Nhóm vật phẩm và nơi chứa

| Nhóm | Ví dụ | Chứa ở đâu | Tính Khối | Mất khi bị kéo về (K2) |
|---|---|---|---|---|
| Tài nguyên thô, Mẫu hạ, Vật tiêu hao | RES, SMP, CON | Túi trong chuyến, kho ở trạm | Có | Mất trừ 1 món tự chọn |
| Vật nhiệm vụ | STY-102, 103, 301, 401, 501, 701 | Túi như vật thường | Có (1 Khối) | Mất cùng túi, nhưng không mất vĩnh viễn: về lại vị trí gốc ở chuyến sau (luật V4). Có thể chọn làm món giữ lại theo K2 |
| Vật manh mối | STY-101, 104, 105, 111, 211 đến 213, 311 đến 313, 411, 412, 414, 502, 601 | Tự ghi vào Sổ tay khi nhặt, không chiếm túi | Không | Không mất, đã ghi thì giữ |
| Mẫu sống, mẫu sinh thiết | LIV (cỡ S vào Lồng mẫu kéo theo, cỡ M gửi về kho bằng Phao kéo), BPS (vào túi như mẫu thường) | Lồng mẫu (tối đa 3 con, mỗi người 1 lồng, gd-combat), kho | LIV không tính Khối (nằm trong lồng). BPS 1 Khối | LIV trong lồng mất cùng túi trừ 1 món. LIV đã gửi kho không mất |
| Vật kéo | BNG (buồng ngủ đông) | Kéo theo người chơi, không vào túi | Không (gd-character định cách kéo) | Bỏ lại chỗ cũ, chuyến sau còn ở điểm cũ vì là map nhánh. Riêng kén BNG-102 (vật kéo lớp Nặng): rơi thì nằm lại chỗ thả, lưu ở beacon cố định gần nhất đã qua, chưa qua beacon nào thì ở cửa N4, ngoài K2 (combat luật 42, 43, map 2.7.9) |
| Kiện | CGO | Kho ở trạm, tính ra thùng lúc Mở ca. Trong ca mang 1 thùng mỗi lần | Không | Không có ngoài trạm |
| Vật liệu chế, Sản phẩm nuôi | COM, BIO | Kho ở trạm (không nhặt ngoài không gian, trừ COM trong hòm Seed) | Có nếu mang ra | Mất trừ 1 món |
| Linh kiện động cơ, Bản thiết kế | ENG, BPR | Kho, học ngay (BPR) | Không | Không có ngoài trạm |
| Dụng cụ, Nâng cấp bộ đồ | TOL, UPG | Mở khóa cho cả nhóm (C4), không có dạng vật | Không | Không áp dụng |

- Luật V1 (log 57): Lồng mẫu chọn làm món giữ thì chỉ giữ con sao cao nhất trong lồng. Món giữ lại khi bị kéo về (K2) là món người chơi ghim (nguoi-choi.md điểm 5): 1 đơn vị vật phẩm của một loại, hoặc 1 vật đang kéo. Mặc định ghim vật có độ hiếm cao nhất vừa nhặt. Vật nhiệm vụ ghim được (luật V4). (Nhãn: MVP.)
- Luật V2: kho có giới hạn 999 đơn vị mỗi loại và không giới hạn số loại. Kho dùng chung cả nhóm (C3). (Nhãn: MVP.)
- Luật V3: túi tính bằng Khối. Tổng Khối của vật phẩm trong túi không vượt sức chứa (do gd-character quyết, giá trị tham chiếu ở mục 3). Túi đầy thì không nhặt thêm được, người chơi thả vật phẩm để nhặt vật khác. Thả vật phẩm xuống tạo vật nhặt được tại chỗ trong 30 giây. (Nhãn: MVP.)
- Luật V4: vật manh mối tự ghi vào Sổ tay khi nhặt, không chiếm túi, không thể mất. Vật nhiệm vụ (chỉ 6 thứ: mảnh lõi Cinder và Wick, mẫu mang dấu săn bắt, hộp ghi hành trình Cradle, bản đồ sao thật, gói tin mật) chiếm túi như vật thường. Nếu người mang bị kéo về mất túi hoặc thả xuống thì vật nhiệm vụ nằm lại vị trí gốc ở map nhánh (nơi dựng tay cố định, K7) và có lại ở chuyến sau, không mất vĩnh viễn. Người chơi có thể chọn vật nhiệm vụ làm món được giữ khi bị kéo về (K2). Khớp luật 5 của gd-story. Ngoại lệ: STY-701 không có vị trí gốc ở map nhánh, mất thì về khoang liên lạc và nhận lại ngày sau (mỗi ngày tối đa 1 gói, luật C7). "Nộp" là bỏ vào kho ở nơi nhận, không tiêu vật, trừ khi vật nằm trong danh sách vật liệu của một việc sửa hoặc công thức (STY-102 ở sửa KH08, STY-401 và STY-501 ở RCP-207). RCP-141 chỉ sao từ STY-101 và STY-401, không sao từ STY-502. Lý do: P4 cấm manh mối bắt buộc nằm ở nơi mất được hoặc sinh lại ngẫu nhiên, và vẫn giữ áp lực của túi (P1). (Nhãn: MVP.)
- Luật V5: vật kể chuyện không bán cho tàu. Với loại dữ liệu (STY-101, STY-401) khoang liên lạc sao ra Bản sao dữ liệu (CGO-131) để bán, vật gốc ở lại trạm (RCP-141, mỗi vật gốc sao một lần). Thẻ tên buồng ngủ đông (STY-601) treo ở khoang buồng ngủ đông, đổi hình trạm, không có công dụng chơi, vẫn thỏa P2 vì có chỗ dùng nhìn thấy được. (Nhãn: Sau MVP.)

### 2.2 Tài nguyên theo dải và điểm khai thác

- Luật S1: tài nguyên thô gắn với dải (K5). Mỗi dải có ít nhất 2 tài nguyên chỉ dải đó có. Gần có 6, Giữa 4, Xa 5 (kèm 1 tài nguyên Cradle). Vật phẩm của dải trước vẫn có sink ở mọi giai đoạn: sửa khoang, luyện COM, kiện thô, nâng cấp bậc thấp. (Nhãn: MVP.)
- Luật S2: tài nguyên và Driftlife sinh lại mỗi chuyến, không cạn (K8). Điểm khai thác không có số lần dùng giữa các chuyến, chỉ biến mất trong chuyến sau khi khai thác xong. (Nhãn: MVP.)
- Luật S3: điểm khai thác (SLV) có độ cứng 0 đến 3 (vật liệu) hoặc cấp khóa 1 đến 3 (hòm). Dụng cụ khai thác (TOL-102) có bậc 1 đến 3: khoan vật liệu và nạy hòm đều dùng cùng một dụng cụ, vì khoan và nạy là cùng một thao tác với cùng dụng cụ, gộp cho gọn ô. Nếu bậc dụng cụ nhỏ hơn độ cứng hoặc cấp khóa thì vẫn làm được nhưng thời gian dài gấp 4 (cổng mềm, cùng tinh thần K6). Nếu bậc bằng hoặc lớn hơn thì thời gian chia cho hệ số bậc (mục 3). (Nhãn: MVP.)
- Luật S4: mỗi điểm khai thác có bảng rơi theo trọng số. Mỗi lần quay chọn một dòng theo trọng số rồi cho số lượng ghi ở dòng đó. Số lần quay cố định theo loại điểm. (Nhãn: MVP.)
- Luật S5: độ hiếm 4 bậc: Thường, Ít gặp, Hiếm, Đặc biệt. Mật độ giá trị mỗi Khối (GTĐ trên Khối) tăng theo bậc để món hiếm đáng chỗ trong túi (mục 3). Số lượng điểm khai thác và vị trí do gd-world quyết, gd-items chỉ định nghĩa loại điểm và thứ chúng nhả ra. (Nhãn: MVP.)
- Luật S6: khai thác một điểm có người khác cùng khai thác: người đến trước giữ điểm, người sau không thấy tương tác tới khi điểm xong hoặc người trước rời. Mỗi điểm chỉ một người khai thác cùng lúc. Người giữ điểm không có tiến độ khai thác trong 10 giây thì thả điểm. Phần thưởng thuộc người khai thác, tự vào túi người đó. (Nhãn: MVP.)

### 2.3 Mẫu Driftlife

- Luật M1 (K9 đã sửa, log 66): hạ một Driftlife cho nguyên liệu sinh học của dải (SMP-101, 201, 301, số lượng theo loài) và có xác suất rơi đặc sản của loài (SMP-111 và các số tương ứng). Bắt sống cho mẫu sống (LIV), chỉ với loài cỡ S và M. K9 chỉ áp cho loài bắt sống được: giá mẫu sống bằng k nhân giá trị kỳ vọng khi hạ, k từ 1,5 đến 2,0 theo loài (cỡ M dùng 1,5), gồm cả GTĐ vật tiêu hao kỳ vọng của lần bắt, nên tỉ lệ ròng đúng bằng k. Loài cỡ L (DL-M01, DL-M05, DL-X03, DL-X04) không bắt sống được, chỉ lấy mẫu sinh thiết (BPS) bằng Kim sinh thiết, đứng ngoài K9: giá ròng 0,45 lần E(hạ) cùng loài (nhanh mà ít, hạ lâu mà nhiều). DL-M01 không hạ được nên không có đặc sản và giữ giá cố định. Thứ tự và mã loài theo gd-combat. (Nhãn: MVP, cỡ S.)
- Luật M2: mẫu sống có 3 nơi tiêu: nuôi trong khoang sinh quyển (chương 2, BIO mỗi ngày, mỗi con cần 1 thức ăn nuôi FED mỗi ngày), nghiên cứu (chương 2, đổi ra bản thiết kế, RCP-301 và RCP-302), bán ở ca cảng giá cao (lồng sinh vật sống, MVP chương 1). Mẫu sinh thiết đi vào kiện đặc sản và nghiên cứu Hồ sơ loài. Mẫu đã hạ chỉ có nguồn tiêu thô: kiện mô, kiện đặc sản, vật liệu cho vật tiêu hao. (Nhãn: Sau MVP.)
- Luật M3: chất lượng mẫu 1 đến 3 sao do gd-combat định: mẫu sống theo Sinh lực còn lại lúc bắt (từ 70% là 3 sao, 30% đến dưới 70% là 2 sao, dưới 30% là 1 sao), mẫu sinh thiết luôn 3 sao, hạ thường cho 1 sao và Kết nhanh (hạ con đang bất lực) cho 2 sao. Hệ số giá trị 1,0 / 1,25 / 1,5. Ràng buộc K9 của gd-combat: mẫu sống 1 sao không thấp hơn nguyên liệu hạ 2 sao của cùng loài, script kiểm. Phẩm cấp kiện sinh học bằng sao thấp nhất trong đầu vào. Đơn hàng có thể đòi phẩm cấp tối thiểu (gd-quan). (Nhãn: MVP.)
- Luật M4: boss có hai cách kết ở chương 1 và 2 (hạ hoặc xua đi). BS-1: hạ rơi Hạch thủ lĩnh Gần (SMP-191) cộng 5 SMP-101, xua đi rơi Mẫu boss Gần (SMP-192) cộng 2 SMP-101. BS-2: hạ rơi Đặc sản Tempest Gulper (SMP-291), xua đi rơi Mẫu boss Giữa (SMP-292). Chương 1 và 2 dùng một trong hai (khoang dẫn đường nhận SMP-191 hoặc SMP-192). Vật rơi boss chưa dùng được ở chương đang chơi (hạch, mẫu boss dùng cho khoang dẫn đường ở chương 2) nằm trong kho, trạm báo "dùng được khi mở khoang dẫn đường". Mẫu boss và hạch chỉ để sửa khoang, không dùng để nghiên cứu. Đặc sản loài Gần (SMP-111 đến 114) có chỗ dùng ở MVP là Kiện đặc sản Gần (CGO-106, RCP-124, 1 đặc sản mỗi kiện). BS-3 và BS-4 chỉ hạ: rơi Linh kiện Warden (RES-305) và Linh kiện Cradle (RES-401). BS-5 không rơi vật phẩm (gd-combat đã bỏ đồ rơi của Daskel): sau khi khuất phục Daskel, Data Core của Warden Rig mở ra, trong đó nhặt được Bản đồ sao thật (STY-501, khe V1) và Lệnh phục kích Cradle mang dấu Daskel (STY-502, khe M1). Tọa độ hành tinh thật do Sevra trao ở mốc C5.6 là cảnh truyện, không phải vật phẩm. (Nhãn: MVP cho BS-1 và đặc sản loài Gần. BS-2 đến BS-5, STY-501 và STY-502: Sau MVP.)
- Luật M5: con nuôi lấy ra khỏi ô bỏ vào lồng giao đơn (HC06) được tính là mẫu sống của loài đó nhưng lồng có giá bằng 0,5 lần giá lồng bắt thật cùng loài, và mỗi ngày tối đa 1 lồng từ nuôi cho mỗi loài, để nuôi rồi bán lồng không vượt giá bắt thật. gd-quan khớp `tram-va-cang.md`. (Nhãn: Sau MVP.)

### 2.4 Dụng cụ, bậc, nâng cấp bộ đồ

- Luật T1: dụng cụ là trang bị mở khóa cho cả nhóm. Chế một lần ở Xưởng, mọi người chơi trong nhóm đều dùng được, mỗi người tự chọn dụng cụ mang theo. Lý do: C4 và C3. (Nhãn: MVP.)
- Luật T2: dụng cụ không có độ bền, không tốn chi phí duy trì (K17). Chi phí dùng dụng cụ là vật tiêu hao (Súng lưới tốn Lưới cuộn, Súng gây mê tốn Ống gây mê, Phao kéo, Kim sinh thiết) hoặc cooldown (Lao từ, Dùi xung). gd-combat chốt cooldown và chỉ số theo bậc. (Nhãn: MVP.)
- Luật T7: chìa mở lối map nhánh (Bộ kích nguồn TOL-401, Máy cắt thân tàu TOL-402) là cổng cứng: chưa mở khóa thì không mở được lối, không có chế độ chậm. Chìa không cần mang theo và không chiếm ô dụng cụ: nhóm đã mở khóa thì ai tương tác với cửa cũng mở được. Lý do: không có người quên mang chìa, co-op công bằng (C4), không khóa chết. Bộ kích nguồn là công thức đầu tiên của Xưởng sau khi vớt Kỹ sư (RCP-205, chỉ dùng tài nguyên thô): Station Cinder vớt người hai lần, lần một vào khu ngoài chưa cần chìa (vớt Kỹ sư), lần hai mở cửa D1 bằng chìa này (gd-world, `map.md` mục 2.10). (Nhãn: MVP.)
- Luật T8 (K26): Oxy hồi từ vật tiêu hao trong một chuyến không quá 25% dung lượng bình của người đó, không dùng được khi đang ngạt, không hồi vượt dung lượng. Bình Oxy nhỏ (CON-101) hồi 40 điểm (khoảng 12% bình bậc 0), mỗi người mang tối đa 2 bình trong túi mỗi chuyến, tối đa 80 Oxy mỗi chuyến là 24,2% bình bậc 0 (330), thấp hơn ở bậc cao, nên đạt K26 (script kiểm). Chi phí chế 1 Bình Oxy nhỏ là 9,1 GTĐ (RCP-131, 10 giây), 2 bình 18,2 GTĐ. Số hồi và trần gd-character ghi ở `nguoi-choi.md` mục 2.3. Sim đợt 2 kiểm bình có phá P1 không.
- Luật T3: dụng cụ nâng cấp theo bậc 1 đến 3 bằng công thức ở Xưởng (UPG-MIN, UPG-HAR, UPG-NET). Dụng cụ đánh số bậc 1 là khởi điểm (theo gd-combat), còn trục bộ đồ đánh số bậc 0 là khởi điểm (theo gd-character). Mỗi nâng cấp là một công thức riêng tốn vật liệu, và tốn Tally ở tab Upgrade (gd-economy, không ghi ở đây). Hiệu ứng UPG-HAR-2 và HAR-3 (Lao từ bậc 2 và 3) do gd-combat ghi ở bảng 3.3 `combat-driftlife.md`. Đã có: Lao từ bậc 2 (UPG-HAR-2, MVP) 14 sát thương, nhịp 0,75 giây, tầm 9 u. Bậc 3 (UPG-HAR-3, Sau MVP) 20 sát thương, nhịp 0,7 giây, tầm 10 u. UPG-NET-2 bán kính 2,2 u, nạp lại 2,5 giây, tầm 8 u, tối đa 3 con. (Nhãn: MVP.)
- Luật T4: nâng cấp bộ đồ có 5 trục theo `nguoi-choi.md`: Bình Oxy (OXY, bậc 0 đến 4), Túi đồ (BAG, bậc 0 đến 4), Bộ đẩy (THR, bậc 0 đến 3), Vỏ bộ đồ tức cấp môi trường theo dải (ENV, cấp 0 đến 3), Đai dụng cụ (RACK, bậc 0 đến 2). Bậc 0 là khởi điểm, không có công thức. Vật liệu của bậc n bằng 25 nhân 1,8 mũ (lớp chi phí trừ 2) GTĐ, sai số 20%. Lớp chi phí bằng n cộng 1 cho OXY, BAG, THR, RACK, bằng n cộng 2 cho ENV (vỏ mở theo dải nên đắt hơn một lớp), bằng n cho dụng cụ. Hiệu ứng mỗi bậc (túi, số ô dụng cụ, Oxy, vỏ) ở `nguoi-choi.md` mục 2.6, không lặp số ở đây. (Nhãn: MVP, bậc 1.)
- Luật T5: bộ vật liệu mỗi nâng cấp luôn gồm ít nhất một COM của dải vừa mở. Người chơi phải đi tới dải mới mới nâng được bậc kế tiếp, nối tiến trình dải với tiến trình bộ đồ. (Nhãn: Sau MVP.)
- Luật T6: số ô dụng cụ theo Đai dụng cụ của gd-character (`nguoi-choi.md`): bậc 0 là 3 ô, bậc 1 là 4 ô (UPG-RACK-1, chương 1, đi kèm Dùi xung), bậc 2 là 5 ô (UPG-RACK-2, chương 2). Bộ khởi điểm: ô 1 Dụng cụ khai thác (TOL-102), ô 2 Lao từ (TOL-211), ô 3 để trống cho Dùi xung hoặc Súng lưới (mở bằng quest Kỹ sư ở chương 1). Chìa và Lồng mẫu không chiếm ô. Vật tiêu hao nằm trong túi, chiếm Khối, không có ô riêng. Dụng cụ không tốn Oxy (nguoi-choi.md điểm 9). (Nhãn: MVP.)

### 2.5 Công thức

- Luật C1: công thức có 4 nơi chế: Xưởng (Kỹ sư mở, chương 1), Cảng (đóng thùng tự động lúc Mở ca, Thông dịch viên mở), Phòng nghiên cứu (Nhà sinh học, chương 2), khoang sinh quyển (nuôi, chương 2, do gd-quan). (Nhãn: MVP, Xưởng và Cảng.)
- Luật C2: chế có hai kiểu thời gian. Nhanh (không quá 20 giây): người chơi đứng tại chỗ làm, ngoài ca cảng (trong ca không chế, K13). Qua đêm: đặt vào hàng đợi, hoàn thành khi ngủ, nhận ở pha chuẩn bị. Nâng cấp và dụng cụ luôn qua đêm. Hàng đợi qua đêm có 2 chỗ ở MVP, mở rộng do gd-quan. Mẻ xếp theo thứ tự người chơi đặt, mẻ thiếu vật liệu không bắt đầu và không trừ nguyên liệu. (Nhãn: MVP.)
- Luật C3: công thức vật liệu chế (COM) và kiện đều mở theo vai (Kỹ sư, Thông dịch viên, Nhà sinh học) và theo chương, không cần bản thiết kế. Dụng cụ mới và bản nghiên cứu cần bản thiết kế (BPR), học một lần cho cả nhóm. (Nhãn: MVP.)
- Luật C4: bản thiết kế có ba nguồn: nghiên cứu mẫu sống (BPR-101 Súng lưới bậc 2 từ DL-G01, BPR-102 Súng gây mê từ DL-G04, chương 2), Shop (K19), hòm cố định trong map nhánh (gd-world). Học BPR tiêu BPR. Số bản thiết kế giữa 103 và 105 để trống, không tái dùng, vì Dùi xung mở bằng quest Kỹ sư thay vì bản thiết kế. Súng lưới bậc 1, Dùi xung, Lồng mẫu không cần BPR vì mở bằng quest Kỹ sư ở chương 1. (Nhãn: Sau MVP.)
- Luật C5: biên lợi chuỗi giá trị (hệ số GTĐ đầu ra trên GTĐ đầu vào). COM từ 1,25 đến 1,5 (luyện tốn thời gian). Kiện thô đúng 1,0 (chỉ đóng gói, tiện, không thêm giá trị). Kiện tinh từ 1,1 đến 1,25. Lồng sinh vật sống mang đúng GTĐ của mẫu sống bên trong, theo loài (bảng giá lồng ở mục 3, khối LONG), nên hệ số k của mẫu sống không bị làm sập bởi một giá phẳng. Bản sao dữ liệu từ 1,5 đến 2,5 (thông tin đắt hơn vật liệu, giá do gd-economy). Vật tiêu hao bằng 1,0 (không bán). Kiểm bằng script. (Nhãn: MVP.)
- Luật C7 (log 87, GD-033): kiện tin mật CGO-421 là loại kiện của nối tình báo. Đóng tự động lúc Mở ca bằng RCP-422: 1 gói tin mật STY-701 cộng 1 kiện vỏ bọc là một kiện hàng thường dải Xa (CGO-311, 312, 313, 306 hoặc 307), tin đi lẫn trong hàng. STY-701 là vật nhiệm vụ không giá: khoang liên lạc nhận từ mạng lưới, tối đa 1 gói mỗi ngày từ khi mốc nối tình báo mở, không mua bán, bị tiêu khi đóng. Giá trị CGO-421 bằng đúng kiện vỏ bọc rẻ nhất (hệ số 1,0), nên tin mật không sinh thêm Tally, chỉ thêm sức nặng truyện và một bước đóng. Đơn của mạng lưới thuộc nhóm hàng HC15 của gd-quan. (Nhãn: Sau MVP.)
- Luật C6: mọi công thức chỉ dùng vật phẩm có trong ITEM LIST. Chiều ngược lại: thức ăn nuôi rẻ hơn sản phẩm nuôi từ 1,5 lần trở lên (script kiểm) để nuôi có lời. Nguyên liệu "một trong n loài" ghi dạng nhóm loài cùng dải, giá trị tính theo loài rẻ nhất. (Nhãn: MVP.)

### 2.6 Hàng hóa cảng (kiện)

- Luật G1 (K13): ca cảng là nửa chơi tay thứ hai. gd-quan sở hữu luật ca, đơn và tàu. Hệ thống này cung cấp loại kiện, nguyên liệu và quy đổi thùng. Ca không có bước chế hay đóng. (Nhãn: MVP.)
- Luật G2: đơn vị bán trong ca là thùng, 1 kiện = 2,5 thùng (Lead chốt 2026-11-20, D0). Giá trị một thùng bằng GTĐ kiện chia 2,5 (bảng ở mục 2.6b). Giá Tally của thùng do gd-economy đặt, file này không ghi giá. Lồng sinh vật sống, Bản sao dữ liệu (CGO-131) và Kiện tin mật (CGO-421) không chia: một cái là một đơn vị bán (Lead chốt 2026-11-20). Có ba loại kiện. Kiện thô (CGO-101..105 và CGO-109 Kiện đồ Trái Đất): đóng thẳng từ tài nguyên thô hoặc mô sinh học, hệ số 1,0. Kiện tinh (CGO-111..113 và các kiện sau): làm từ COM, COM luyện ở Xưởng phải xong trước Mở ca (hàng đợi qua đêm hoặc chế nhanh ban ngày). CGO-113 là kiện duy nhất ở chương 1 có bước chế trước. Kiện sinh học và đặc biệt (CGO-106, 107, 121, 131, 141 và các bản dải sau): đặc sản, sản phẩm nuôi, lồng sinh vật sống, bản sao dữ liệu, kiện vật tư (nhóm đồ chế HC08 của gd-quan). Khớp nhóm hàng cảng HC01 đến HC09 của gd-quan: HC07 là CGO-107, 207, 307, HC08 là CGO-141, HC09 là CGO-131. Cách đóng: các công thức đóng kiện (RCP-111 đến RCP-128 và các bản dải sau) chạy tự động lúc Mở ca, Thông dịch viên làm, không tốn thời gian ca. Mỗi lần đóng cho 2,5 thùng, đóng đủ số thùng danh mục còn thiếu, làm tròn lên số kiện. Thùng thừa và thùng chưa bán ở lại kho cho ca sau. Lồng giao Driftlife sống (RCP-126, 128, 226, 326) do người chơi làm ở cảng trước Mở ca, 8 giây, nhớ loài và sao. Giá trị một kiện bằng khoảng một phần mười giá trị đơn một ca của chương (khoảng 13,6 GTĐ chương 1, 42,5 chương 2, 104 chương 3, gd-economy đặt), nên một ca một người khoảng 10 kiện, tức 25 thùng (demo bot 2026-11-20). Số đơn vị đầu vào mỗi kiện từ 1 đến 14. (Nhãn: MVP.)
- Luật G3: không có cỡ kiện. Trong ca mọi thùng và lồng mang như nhau: một lần một thứ, tốc độ chạy không đổi, không khiêng chung (gd-quan, `tram-va-cang.md`). Hệ số 0,75 và 0,50 ở `nguoi-choi.md` là tốc độ kéo vật ngoài không gian, không phải mang hàng. (Nhãn: MVP.)
- Luật G4: tàu chỉ mua (K13). Mỗi tàu gọi 1 thùng còn trong danh mục bán, loại thùng lấy từ danh sách kiện của mục này. Luật ca, danh mục, giao sai cửa neo do gd-quan. Giá Tally của thùng do gd-economy. (Nhãn: MVP.)
- Luật G5: lồng sinh vật sống nhớ loài và sao: GTĐ của lồng bằng GTĐ mẫu sống bên trong nhân hệ số sao (1,0 / 1,25 / 1,5), nên giá theo loài, không có một giá phẳng. gd-economy ghi giá lồng theo loài. Các kiện khác không nhớ nguồn gốc. Lồng không chia thùng. (Nhãn: MVP.)

### 2.6b Thùng mỗi kiện

<!--B:CGOTHUNG-->
| Kiện | GTĐ kiện | Thùng mỗi kiện | GTĐ mỗi thùng |
|---|---|---|---|
| CGO-101 | 14,0 | 2,5 | 5,60 |
| CGO-102 | 13,2 | 2,5 | 5,28 |
| CGO-103 | 13,2 | 2,5 | 5,28 |
| CGO-104 | 14,0 | 2,5 | 5,60 |
| CGO-105 | 13,5 | 2,5 | 5,40 |
| CGO-109 | 12,5 | 2,5 | 5,00 |
| CGO-111 | 13,4 | 2,5 | 5,36 |
| CGO-112 | 16,1 | 2,5 | 6,44 |
| CGO-113 | 12,0 | 2,5 | 4,80 |
| CGO-106 | 13,2 | 2,5 | 5,28 |
| CGO-107 | 42,9 | 2,5 | 17,16 |
| CGO-121 | theo loài | 1 đơn vị, không chia | bằng GTĐ lồng |
| CGO-141 | 46,9 | 2,5 | 18,76 |
| CGO-131 | 20,9 | 1 đơn vị, không chia | 20,9 |
| CGO-211 | 40,4 | 2,5 | 16,16 |
| CGO-212 | 31,3 | 2,5 | 12,52 |
| CGO-213 | 44,9 | 2,5 | 17,96 |
| CGO-206 | 44,0 | 2,5 | 17,60 |
| CGO-207 | 46,2 | 2,5 | 18,48 |
| CGO-221 | theo loài | 1 đơn vị, không chia | bằng GTĐ lồng |
| CGO-311 | 107,6 | 2,5 | 43,04 |
| CGO-312 | 86,9 | 2,5 | 34,76 |
| CGO-313 | 111,1 | 2,5 | 44,44 |
| CGO-306 | 99,0 | 2,5 | 39,60 |
| CGO-307 | 107,8 | 2,5 | 43,12 |
| CGO-321 | theo loài | 1 đơn vị, không chia | bằng GTĐ lồng |
| CGO-411 | 161,0 | 2,5 | 64,40 |
| CGO-421 | 86,9 | 1 đơn vị, không chia | 86,9 |
| CGO-511 | 193,2 | 2,5 | 77,28 |
<!--/B:CGOTHUNG-->

### 2.7 Vật liệu sửa khoang và động cơ chính

- Luật E1 (K19): tài nguyên thô, COM, vật tiêu hao, kiện và mọi dụng cụ đều tự làm được. Linh kiện lõi động cơ (ENG-101..104) không tự làm được, mua ở Shop bằng Tally (sink của Tally theo K19). ENG-105 (Lõi dẫn hướng rời bãi vỡ, giai đoạn 5) không mua được, chế từ vật kể chuyện (RCP-207: Bản đồ sao thật, Hộp ghi hành trình Cradle, 2 Mạch cảm biến), khớp lý do R2 của truyện (đường rời bãi vỡ không ai bán). Khung mới (Solace là mồi) làm tên cũ "Lõi dẫn hướng Solace" không còn đúng nên đã đổi. gd-quan đang ghi mỗi giai đoạn một ENG mua ở Shop: giai đoạn 5 lệch ở chỗ này, báo nếu bác bỏ. (Nhãn: MVP.)
- Luật E2: nhu cầu vật liệu sửa khoang do gd-quan chốt. Bảng dưới khớp 13 khoang và nhóm vật liệu ở `tram-va-cang.md` mục 2.6c, thay ID cụ thể cho các nhóm. Hai việc đầu của chương 1 (khoang neo, Xưởng) chỉ dùng tài nguyên thô vì chưa có Xưởng thì chưa chế được COM. Khoang dẫn đường nhận hạch hoặc mẫu boss BS-1 (một trong hai). (Nhãn: MVP.)

<!--B:REPAIR-->
| Khoang hoặc mốc | Ghi chú | Vật liệu đề xuất | Σ GTĐ | Nhãn |
|---|---|---|---|---|
| Khoang neo (KH04, hãm trôi và neo, K10) | Chương 1, trước khi có Xưởng nên chỉ tài nguyên thô | 10 x RES-101, 4 x RES-102, 1 x RES-104 | 17,8 | MVP |
| Kho cấp 2 (KH03) | Chương 1 | 8 x RES-101, 3 x RES-103 | 14,6 | MVP |
| Xưởng (KH05, Kỹ sư mở) | Chương 1, chỉ tài nguyên thô vì chưa chế được COM | 8 x RES-101, 4 x RES-103, 2 x RES-104, 3 x RES-102 | 26,4 | MVP |
| Khoang liên lạc (KH06, Thông dịch viên mở) | Chương 1, linh kiện và khoáng Gần | 3 x RES-104, 4 x RES-103, 2 x RES-102 | 20,2 | MVP |
| Cảng bến 1 (KH07) | Chương 1, phế liệu và linh kiện Gần | 8 x RES-101, 4 x RES-102, 2 x RES-104 | 18,8 | MVP |
| Động cơ chính, giai đoạn 1 (KH13) | Chương 1, linh kiện ENG mua ở Shop cộng vật liệu Gần cộng hạch hoặc mẫu boss BS-1 | 1 x ENG-101, 6 x COM-101, 4 x COM-103, 1 x SMP-191 hoặc SMP-192 | 72,2 | MVP |
| Khoang dẫn đường và bến Skiff (KH08, KH09) | Chương 2, hạch hoặc mẫu boss BS-1 cộng mảnh lõi dẫn đường | 1 x RES-204, 3 x RES-202, 1 x STY-102, 1 x SMP-191 hoặc SMP-192 | 52,0 | Sau MVP |
| Phòng nghiên cứu (KH10) | Chương 2, băng, khoáng Giữa, mẫu Driftlife | 3 x RES-203, 2 x RES-202, 2 x SMP-201 | 35,0 | Sau MVP |
| Khoang sinh quyển (KH11) | Chương 2 | 4 x RES-203, 1 x RES-204, 4 x SMP-201 | 45,0 | Sau MVP |
| Động cơ chính, giai đoạn 2 | Chương 2 | 1 x ENG-102, 4 x COM-201, 2 x COM-202 | 79,2 | Sau MVP |
| Bến 2, bến 3, tiện ích cảng (KH12, Trưởng cảng) | Chương 3, phế liệu, khoáng Xa, linh kiện cộng bản thiết kế | 4 x RES-301, 2 x RES-302, 2 x RES-304, 1 x BPR-106 | 84,0 | Sau MVP |
| Động cơ chính, giai đoạn 3 | Chương 3 | 1 x ENG-103, 3 x COM-301, 2 x COM-302 | 180,0 | Sau MVP |
| Động cơ chính, giai đoạn 4 | Chương 4, linh kiện Warden và Cradle | 1 x ENG-104, 3 x RES-305, 2 x RES-401 | 76,0 | Sau MVP |
| Động cơ chính, giai đoạn 5 | Chương 5, ENG-105 chế từ vật kể chuyện | 1 x ENG-105, 3 x RES-305, 3 x RES-401 | 96,0 | Sau MVP |
<!--/B:REPAIR-->

- Linh kiện động cơ chính theo thứ tự lắp: ENG-101 (chương 1), ENG-102 (chương 2), ENG-103 (chương 3), ENG-104 (chương 4), ENG-105 (chương 5, chế từ STY). Mỗi giai đoạn cộng vật liệu của dải mới như trong bảng. Số bước và điều kiện lắp do gd-quan chốt.

### 2.8 Vòng đời vật phẩm: trạng thái và chuyển tiếp

| Trạng thái | Vào khi | Ra khi | Hành vi | Người chơi thấy gì |
|---|---|---|---|---|
| Trên map (điểm khai thác) | Mảnh map sinh lại | Khai thác xong hoặc chuyến kết thúc | Có độ cứng hoặc cấp khóa, một người khai thác | Biểu tượng theo nhóm, màu theo độ hiếm |
| Vật nhặt được (thả xuống) | Người chơi thả hoặc Driftlife rơi | Nhặt hoặc 30 giây | Nhặt bằng tay | Vật nổi nhẹ trong chân không |
| Trong túi | Nhặt, khai thác xong | Về trạm, bị kéo về, thả | Chiếm Khối | Thanh Khối trên HUD |
| Bị kéo về | Oxy về 0 rồi hết khoảng ngạt (K2) | Ngay lập tức | Giữ 1 món, mất phần còn lại | Màn chọn 1 món |
| Trong kho | Về trạm (K3) | Chế, mang ra, lập danh mục bán, tiêu | Dùng chung cả nhóm | Danh sách kho |
| Trong hàng đợi chế | Đặt công thức qua đêm | Ngủ | Nguyên liệu đã trừ | Thanh đang chế |
| Thùng đã đóng | Đóng tự động lúc Mở ca | Bán cho tàu, hoặc quay về kho cuối ca | Mang 1 thùng mỗi lần trong ca, tốc độ không đổi | Hộp có biểu tượng loại |
| Thùng trên tàu | Giao đúng cửa neo | Tàu rời | Giao đúng thì nhận Tally và tip (gd-quan) | Hoạt ảnh bốc hàng |

Thứ tự xử lý một chuyến:

1. Nhặt hoặc khai thác, trừ Khối.
2. Hạ hoặc bắt Driftlife, rơi vật phẩm.
3. Về trạm (cửa khí hoặc Recall Beacon), chuyển túi sang kho.
4. Chế (Xưởng, nghiên cứu).
5. Lập danh mục bán, Mở ca: đóng thùng tự động.
6. Ca cảng: giao thùng cho tàu, nhận Tally.
7. Cuối ngày: nâng cấp, học BPR, đặt hàng ở Shop.

## 3. Tham số

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nhóm tác động | Nguồn |
|---|---|---|---|---|---|---|
| Sức chứa túi bậc 0 đến 4 | 80, 100, 126, 168, 216 Khối (GDM chốt log 54) | Bậc 0: 60 đến 100 | Ít lựa chọn nhặt hơn | Túi bí, chuyến ngắn | Nhặt, nâng cấp BAG | GDM, `nguoi-choi.md`. Một mẻ khai thác lớn nhất không vượt 2 lần túi bậc 0 (160 Khối): Tấm vỏ lớn khoảng 6 Khối, đạt. Tỉ lệ túi trên Khối so với bản 20 Khối tăng 4 lần, gd-tech chạy lại sim chuyến |
| Thời gian làm đầy túi T0 | 60 đến 70% thời gian chuyến (chương 1: khoảng 2,5 đến 3 phút làm việc trong 4 đến 6 phút) | 50 đến 85% | Túi không bao giờ bí | Túi bí quá sớm | Nhịp chuyến | Ước, gd-tech đo ở sim |
| Hệ số chậm khi bậc dụng cụ thấp hơn độ cứng | 4 lần | 2 đến 6 | Cổng cứng hơn | Cổng mềm hơn | Khai thác | Ước (cùng tinh thần K6) |
| Hệ số tốc độ khai thác theo bậc dụng cụ | Bậc 1: 1,0. Bậc 2: 1,4. Bậc 3: 1,9 | Bậc 2: 1,25 đến 1,6. Bậc 3: 1,6 đến 2,2 | Nâng cấp dụng cụ thấy rõ | Nâng cấp yếu | Khai thác | Ước |
| Mật độ GTĐ mỗi Khối theo bậc hiếm (tài nguyên thô và mẫu) | Thường 1,0 đến 1,5. Ít gặp 2,5 đến 5,0. Hiếm 7 đến 20. Đặc biệt từ 12 | Theo bậc | Đồ hiếm đáng chỗ hơn | Đồ thường cạnh tranh được | Lựa chọn nhặt | Ước, script kiểm từng vật phẩm RES và SMP |
| Hệ số chuỗi COM | 1,25 đến 1,5 | 1,2 đến 1,6 | Luyện có lời hơn bán thô | Luyện vô nghĩa | Chế | Ước, kiểm bằng script |
| Hệ số kiện tinh | 1,1 đến 1,25 | 1,05 đến 1,3 | Ép người chơi qua Xưởng | Kiện thô đủ ăn | Cảng | Ước, kiểm bằng script |
| Hệ số mẫu sống k (so với hạ) | 1,5 đến 2,0 theo loài | 1,5 đến 2,0 (khung mục 9) | Bắt sống hơn hạ nhiều | Săn đủ ăn, bắt sống thừa công | Combat, nuôi | Khung K9, mục tiêu khung mục 9 |
| Sản phẩm nuôi | 1 đơn vị mỗi con trưởng thành mỗi ngày | 0,5 đến 2 | Nuôi hơn bán sống nhanh | Nuôi không đáng | Nuôi, kinh tế | Ước, gd-quan chốt số ô |
| Hệ số hệ chất lượng mẫu | 1,0 / 1,25 / 1,5 | 1,0 đến 1,6 | Chất lượng quan trọng | Chất lượng vô nghĩa | Combat, cảng | Tham chiếu Stardew, Dave (nguồn 25-items-crafting) |
| Chi phí vật liệu nâng cấp bậc n | 25 nhân 1,8 mũ (n trừ 2) GTĐ | Sai số 20% | Chậm hơn | Nhanh hơn | Tiến trình | Ước, gd-economy chỉnh |
| Thời gian luyện COM | 8 đến 20 giây | 5 đến 30 | Chuỗi chậm | Chuỗi nhanh | Nhịp ca | Ước |
| Thời gian đóng thùng trong ca | 0 giây, đóng tự động lúc Mở ca | cố định | - | - | Ca cảng | Lead chốt 2026-11-20 (K13) |
| Thùng mỗi kiện | 2,5 | cố định | - | - | Ca cảng, kinh tế | Lead chốt 2026-11-20 (D0) |
| Ngưỡng chế nhanh, ngoài ca | 20 giây | 10 đến 30 | Nhiều công thức chế nhanh tại chỗ | Ít | Xưởng | Ước |
| Chỗ hàng đợi qua đêm | 2 | 1 đến 4 | Chuẩn bị nhiều hơn | Chọn kỹ hơn | Xưởng | Ước, gd-quan |
| Hệ số tài nguyên theo số người k(N) | Do gd-world giữ ở `map.md` (k(N) theo dải, số hiện hành ở `map.md` mục 3.8, tỉ lệ kích hoạt khe SP-R). Vật phẩm không có núm riêng | Theo `map.md` | Nhóm đông tiến nhanh hơn | Nhóm đông không lợi | Co-op | Một núm duy nhất ở `map.md`. Mục tiêu khung 70 đến 85% thời gian tới mốc chương, GDM chốt, sim đợt 2 chỉnh |
| Kho: tối đa mỗi loại | 999 | 99 đến không giới hạn | Kho không bao giờ đầy | Phải bán bớt | Kho | Chọn cho UI gọn (điểm tự quyết 7) |
| Thời gian vật thả tồn tại | 30 giây | 15 đến 60 | Dễ nhặt lại | Mất đồ chắc hơn | Nhặt | Ước |

- Núm gap (tham số nối số gốc với mục tiêu): chỉ có một núm cho co-op ở `map.md`, k(N), thực hiện bằng số điểm khai thác trên map (số khe SP-R kích hoạt). Mỗi điểm khai thác vẫn nhả đúng lượng ở bảng SLV, nên người đông không bị loãng phần thưởng mỗi điểm. Vật phẩm không nhân thêm hệ số nào. gd-world đã chỉ ra hai núm cho cùng một việc là thừa, tôi bỏ R(N) bằng N mũ 0,36 của bản trước.

### Danh sách tham chiếu sinh từ script

- Loài Driftlife và hệ số mẫu bắt (loài, mã và thứ tự do gd-combat, số xác suất và nguyên liệu chung theo `combat-driftlife.md` mục Điểm sinh và rơi). Cột "Số" là số ID vật phẩm: 111 ứng với SMP-111, LIV-111, BIO-111. Loài cỡ L chỉ có mẫu sinh thiết BPS cùng số:

<!--B:SPECIES-->
| Số | Mã gd-combat | Tên | Dải | Cỡ | Hạ được | Bắt | Nuôi | Nguyên liệu chung mỗi lần hạ | Xác suất đặc sản | E[GTĐ] khi hạ | Hệ số k | Vật tiêu hao mỗi lần bắt | GTĐ mẫu bắt | Tỉ lệ ròng trên hạ | Nhãn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 111 | DL-G01 | Driftmoth | Gần | S | Có | Sống (LIV) | Có | 1 x SMP-101 | 0,30 | 2,70 | 1,50 | 1 x CON-102 | 5,14 | 1,50 | MVP |
| 112 | DL-G02 | Skitter Ray | Gần | S | Có | Sống (LIV) | Có | 1 x SMP-101 | 0,40 | 3,10 | 1,50 | 1 x CON-102 | 5,74 | 1,50 | MVP |
| 113 | DL-G04 | Sting Krill | Gần | S | Có | Sống (LIV) | Có | 1 x SMP-101 | 0,20 | 2,30 | 1,60 | 1/3 x CON-102 | 4,04 | 1,60 | MVP |
| 114 | DL-G05 | Arc Eel | Gần | M | Có | Sống (LIV) | Có | 2 x SMP-101 | 0,60 | 6,00 | 1,50 | 3 x CON-103, 1 x CON-106 | 30,71 | 1,50 | MVP (hạ), Sau MVP (bắt) |
| 115 | DL-G03 | Latchjaw | Gần | M | Có | Sống (LIV) | Không | 2 x SMP-101 | 0,60 | 6,00 | 1,50 | 1 x CON-106 | 16,91 | 1,50 | Sau MVP |
| 211 | DL-M01 | Shepherd Whale | Giữa | L | Không | Sinh thiết (BPS) | Không | - | - | - | - | 1 x CON-107 | 25,00 | cố định | Sau MVP |
| 212 | DL-M02 | Lumen Jelly | Giữa | M | Có | Sống (LIV) | Có | 2 x SMP-201 | 0,40 | 12,00 | 1,50 | 1 x CON-106 | 25,91 | 1,50 | Sau MVP |
| 213 | DL-M03 | Orebiter | Giữa | M | Có | Sống (LIV) | Có | 2 x SMP-201 | 0,60 | 14,00 | 1,50 | 1 x CON-106 | 28,91 | 1,50 | Sau MVP |
| 214 | DL-M04 | Needlefin | Giữa | S | Có | Sống (LIV) | Có | 1 x SMP-201 | 0,15 | 5,50 | 1,80 | 1/3 x CON-102 | 10,26 | 1,80 | Sau MVP |
| 215 | DL-M05 | Gulper | Giữa | L | Có | Sinh thiết (BPS) | Không | 4 x SMP-201 | 1,00 | 26,00 | 0,45 | 1 x CON-107 | 19,52 | 0,45 | Sau MVP |
| 311 | DL-X01 | Prism Wisp | Xa | S | Có | Sống (LIV) | Có | 1 x SMP-301 | 0,50 | 18,00 | 1,80 | 1 x CON-102 | 33,49 | 1,80 | Sau MVP |
| 312 | DL-X02 | Mirror Mantis | Xa | M | Có | Sống (LIV) | Không | 2 x SMP-301 | 0,60 | 28,80 | 1,50 | 4 x CON-103, 1 x CON-106 | 69,51 | 1,50 | Sau MVP |
| 313 | DL-X03 | Storm Siphon | Xa | L | Có | Sinh thiết (BPS) | Không | 4 x SMP-301 | 1,00 | 54,00 | 0,45 | 1 x CON-107 | 32,12 | 0,45 | Sau MVP |
| 314 | DL-X04 | Shardbrood Queen | Xa | L | Có | Sinh thiết (BPS) | Không | 4 x SMP-301 | 1,00 | 54,00 | 0,45 | 1 x CON-107 | 32,12 | 0,45 | Sau MVP |
| 315 | DL-X05 | Shardbrood Hatchling | Xa | S | Có | Sống (LIV) | Có | 1 x SMP-301 | 0,20 | 12,60 | 1,80 | 1/3 x CON-102 | 23,04 | 1,80 | Sau MVP |
<!--/B:SPECIES-->

- Giá lồng sinh vật sống theo loài (CGO-121, 221, 321 nhớ loài, GTĐ bằng mẫu sống bên trong). Hệ số ròng bằng k của loài:

<!--B:LONG-->
| Lồng | Loài | Mẫu sống | GTĐ lồng giao (bằng mẫu sống bên trong, nhân hệ số sao 1,0 / 1,25 / 1,5) | Tỉ lệ ròng trên E(hạ) | Nhãn |
|---|---|---|---|---|---|
| CGO-121 | DL-G01 Driftmoth | LIV-111 | 5,14 | 1,50 | MVP |
| CGO-121 | DL-G02 Skitter Ray | LIV-112 | 5,74 | 1,50 | MVP |
| CGO-121 | DL-G04 Sting Krill | LIV-113 | 4,04 | 1,60 | MVP |
| CGO-121 | DL-G05 Arc Eel | LIV-114 | 30,71 | 1,50 | Sau MVP |
| CGO-121 | DL-G03 Latchjaw | LIV-115 | 16,91 | 1,50 | Sau MVP |
| CGO-221 | DL-M02 Lumen Jelly | LIV-212 | 25,91 | 1,50 | Sau MVP |
| CGO-221 | DL-M03 Orebiter | LIV-213 | 28,91 | 1,50 | Sau MVP |
| CGO-221 | DL-M04 Needlefin | LIV-214 | 10,26 | 1,80 | Sau MVP |
| CGO-321 | DL-X01 Prism Wisp | LIV-311 | 33,49 | 1,80 | Sau MVP |
| CGO-321 | DL-X02 Mirror Mantis | LIV-312 | 69,51 | 1,50 | Sau MVP |
| CGO-321 | DL-X05 Shardbrood Hatchling | LIV-315 | 23,04 | 1,80 | Sau MVP |
<!--/B:LONG-->

Điểm khai thác (SLV). Cột GTĐ mỗi giây là chênh lệch hiệu quả giữa các điểm khi đã ở trước mặt người chơi, chưa tính thời gian bay tới. Đây là kiểm nhất quán, không phải sim cân bằng:

<!--B:NODE-->
| SLV ID | Tên | Dải | Dụng cụ | Độ cứng hoặc cấp khóa | Giây (bậc 1) | Số lần quay | Bảng rơi (ID, trọng số, số lượng mỗi lần) | GTĐ kỳ vọng | Khối kỳ vọng | GTĐ mỗi giây | GTĐ mỗi Khối | Nhãn |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SLV-101 | Mảnh vỡ trôi | Gần | Tay | 0 | 1,6 | 1 | RES-101 w60 x1, RES-102 w40 x1 | 1,1 | 1,0 | 0,68 | 1,08 | MVP |
| SLV-102 | Mạch quặng sắt | Gần | TOL-102 | 1 | 8,0 | 1 | RES-103 w100 x2 | 4,4 | 4,0 | 0,55 | 1,10 | MVP |
| SLV-103 | Khối băng trôi | Gần | TOL-102 | 1 | 7,0 | 1 | RES-105 w100 x2 | 4,0 | 4,0 | 0,57 | 1,00 | MVP |
| SLV-104 | Hòm kỹ thuật vỡ | Gần | TOL-102 | 1 | 6,0 | 2 | RES-104 w30 x1, RES-102 w30 x2, RES-101 w25 x2, RES-106 w15 x1 | 5,0 | 3,1 | 0,83 | 1,61 | MVP |
| SLV-105 | Tấm vỏ lớn | Gần | TOL-102 | 1 | 14,0 | 3 | RES-101 w100 x2 | 6,0 | 6,0 | 0,43 | 1,00 | MVP |
| SLV-111 | Hòm kỹ thuật Seed (nhánh) | Nhánh Gần | TOL-102 | 1 | 8,0 | 3 | RES-104 w35 x1, RES-102 w25 x2, RES-101 w25 x2, RES-106 w15 x1 | 7,6 | 4,5 | 0,95 | 1,68 | MVP |
| SLV-112 | Kho hàng Seed (nhánh) | Nhánh Gần | TOL-102 | 2 | 12,0 | 3 | RES-104 w35 x1, RES-103 w35 x1, RES-106 w30 x1 | 7,7 | 4,0 | 0,64 | 1,90 | MVP |
| SLV-201 | Mạch quặng cobalt | Giữa | TOL-102 | 2 | 12,0 | 1 | RES-202 w100 x2 | 12,0 | 4,0 | 1,00 | 3,00 | Sau MVP |
| SLV-202 | Khối băng tinh | Giữa | TOL-102 | 2 | 11,0 | 1 | RES-203 w100 x2 | 10,0 | 4,0 | 0,91 | 2,50 | Sau MVP |
| SLV-203 | Hòm Cradle | Giữa | TOL-102 | 2 | 8,0 | 2 | RES-204 w25 x1, RES-201 w45 x2, RES-104 w30 x2 | 13,5 | 3,5 | 1,69 | 3,86 | Sau MVP |
| SLV-204 | Tấm hợp kim trôi | Giữa | TOL-102 | 1 | 10,0 | 3 | RES-201 w100 x1 | 9,0 | 3,0 | 0,90 | 3,00 | Sau MVP |
| SLV-301 | Mạch kính nebula | Xa | TOL-102 | 3 | 16,0 | 1 | RES-302 w100 x2 | 32,0 | 4,0 | 2,00 | 8,00 | Sau MVP |
| SLV-302 | Túi khí plasma đông | Xa | TOL-102 | 3 | 14,0 | 1 | RES-303 w100 x2 | 28,0 | 4,0 | 2,00 | 7,00 | Sau MVP |
| SLV-303 | Hòm Warden | Xa | TOL-102 | 3 | 10,0 | 2 | RES-304 w30 x1, RES-301 w70 x2 | 28,4 | 3,4 | 2,84 | 8,35 | Sau MVP |
<!--/B:NODE-->

Dụng cụ (TOL). Trang bị, không vào kho. Chỉ số combat theo bậc do gd-combat giữ ở `combat-driftlife.md`:

<!--B:TOOL-->
| ID | Tên (VI / EN [TẠM]) | Vai trò | Cách có | Công dụng và gating | Nhãn |
|---|---|---|---|---|---|
| TOL-102 | Dụng cụ khai thác / Mining Tool | Khai thác | Khởi đầu | Khoan khoáng và băng (độ cứng 1 đến 3), nạy hòm (cấp khóa 1 đến 3). Bậc thấp hơn độ cứng hoặc cấp khóa thì chậm gấp 4 | MVP |
| TOL-211 | Lao từ / Mag Harpoon | Hạ | Khởi đầu | Đòn tầm xa dùng cooldown. Chỉ số theo bậc do gd-combat | MVP |
| TOL-201 | Dùi xung / Pulse Prod | Choáng | Quest Kỹ sư, RCP-204 | Làm choáng cận chiến, dùng cooldown. Chỉ số do gd-combat | MVP |
| TOL-202 | Súng lưới / Net Gun | Bắt sống | Quest Kỹ sư (chương 1), RCP-201 | Bắt sống cỡ S vào Lồng mẫu, tốn CON-102. Chỉ số do gd-combat | MVP |
| TOL-203 | Súng gây mê / Tranq Gun | Bắt sống | BPR-102, RCP-202 | Gây mê, tốn CON-103. Chỉ số do gd-combat | Sau MVP |
| TOL-301 | Máy quét xung / Pulse Scanner | Tiện ích | BPR-103, RCP-203 | Hiện điểm khai thác trong bán kính. Bậc 2 hiện hạng, bậc 3 hiện Driftlife. Bán kính do gd-world và gd-ux | Sau MVP |
| TOL-401 | Bộ kích nguồn / Power Primer | Chìa | Xưởng, công thức đầu tiên sau khi vớt Kỹ sư (RCP-205, chỉ dùng tài nguyên thô) | Mở cửa D1 khóa nguồn trong Station Cinder (lần vớt thứ hai). Cổng cứng, không có chế độ chậm. Không cần mang theo (luật T7) | MVP |
| TOL-402 | Máy cắt thân tàu / Hull Cutter | Chìa | BPR-105, RCP-206 | Mở vách vào Cradle Interior (chương 4). Cổng cứng, không cần mang theo (luật T7) | Sau MVP |
| TOL-501 | Lồng mẫu / Specimen Cage | Chứa | Quest Kỹ sư (chương 1), RCP-208 | Kéo theo, chứa tối đa 3 mẫu sống cỡ S, mỗi người 1 lồng (gd-combat) | MVP |
<!--/B:TOOL-->

Nâng cấp bậc (vật liệu). Tally cho mỗi nâng cấp ở tab Upgrade, gd-economy ghi. Hiệu ứng bậc: `nguoi-choi.md`:

<!--B:UPG-->
| Nâng cấp | Bậc | Lớp chi phí | Đầu vào (vật liệu) | Σ GTĐ vào | Mục tiêu 25 x 1,8^(lớp-2) | Mở bằng | Nhãn |
|---|---|---|---|---|---|---|---|
| UPG-OXY-1 | 1 | 2 | 4 x COM-101, 2 x COM-105 | 26,0 | 25,0 | Kỹ sư (chương 1) | MVP |
| UPG-BAG-1 | 1 | 2 | 3 x COM-102, 2 x COM-101, 2 x RES-102 | 24,2 | 25,0 | Kỹ sư (chương 1) | MVP |
| UPG-THR-1 | 1 | 2 | 2 x COM-103, 1 x COM-104, 1 x COM-101 | 26,2 | 25,0 | Kỹ sư (chương 1) | MVP |
| UPG-MIN-2 | 2 | 2 | 2 x COM-103, 2 x COM-101, 1 x COM-102 | 24,4 | 25,0 | Kỹ sư (chương 1) | MVP |
| UPG-HAR-2 | 2 | 2 | 2 x COM-103, 1 x COM-104, 1 x COM-102 | 27,0 | 25,0 | Kỹ sư (chương 1) | MVP |
| UPG-RACK-1 | 1 | 2 | 2 x COM-101, 2 x COM-102, 1 x COM-103 | 23,1 | 25,0 | Quest Kỹ sư (chương 1), đi kèm Dùi xung | MVP |
| UPG-NET-2 | 2 | 2 | 1 x COM-103, 2 x COM-102, 1 x COM-104 | 25,7 | 25,0 | BPR-101 | Sau MVP |
| UPG-OXY-2 | 2 | 3 | 2 x COM-201, 2 x COM-204 | 49,4 | 45,0 | Chương 2 | Sau MVP |
| UPG-BAG-2 | 2 | 3 | 2 x COM-201, 2 x COM-102, 2 x COM-101 | 40,6 | 45,0 | Chương 2 | Sau MVP |
| UPG-THR-2 | 2 | 3 | 1 x COM-202, 1 x COM-203 | 43,4 | 45,0 | Chương 2 | Sau MVP |
| UPG-MIN-3 | 3 | 3 | 2 x COM-202, 2 x COM-103 | 44,3 | 45,0 | Chương 2 | Sau MVP |
| UPG-HAR-3 | 3 | 3 | 1 x COM-203, 1 x COM-202 | 43,4 | 45,0 | Chương 2 | Sau MVP |
| UPG-ENV-1 | 1 | 3 | 2 x COM-204, 1 x COM-201, 2 x COM-105 | 48,1 | 45,0 | Chương 2 (dải Giữa) | Sau MVP |
| UPG-RACK-2 | 2 | 3 | 2 x COM-103, 1 x COM-202, 2 x COM-102 | 37,4 | 45,0 | Chương 2 | Sau MVP |
| UPG-OXY-3 | 3 | 4 | 1 x COM-302, 1 x COM-301 | 74,4 | 81,0 | Chương 3 | Sau MVP |
| UPG-BAG-3 | 3 | 4 | 1 x COM-303, 1 x COM-301, 1 x COM-104 | 79,4 | 81,0 | Chương 3 | Sau MVP |
| UPG-THR-3 | 3 | 4 | 1 x COM-304, 1 x COM-302 | 75,4 | 81,0 | Chương 3 | Sau MVP |
| UPG-ENV-2 | 2 | 4 | 1 x COM-301, 1 x COM-304, 1 x COM-203 | 90,6 | 81,0 | Chương 3 (dải Xa) | Sau MVP |
| UPG-OXY-4 | 4 | 5 | 1 x COM-302, 1 x COM-304, 1 x COM-303, 1 x RES-401 | 133,2 | 145,8 | Chương 4 đến 5 | Sau MVP |
| UPG-BAG-4 | 4 | 5 | 1 x COM-303, 1 x COM-304, 1 x COM-301, 1 x RES-401 | 121,2 | 145,8 | Chương 4 đến 5 | Sau MVP |
| UPG-ENV-3 | 3 | 5 | 1 x COM-301, 1 x COM-302, 1 x COM-304, 1 x RES-401 | 126,6 | 145,8 | Chương 4 (Cradle) | Sau MVP |
<!--/B:UPG-->

Công thức (RCP):

<!--B:RECIPE-->
| Recipe ID | Tên | Nơi chế | Đầu vào | Đầu ra | Thời gian (giây) | Mở bằng | Σ GTĐ vào | GTĐ ra | Hệ số | Nhãn |
|---|---|---|---|---|---|---|---|---|---|---|
| RCP-101 | Ép tấm thép | Xưởng | 3 x RES-101 | 1 x COM-101 | 10 | Kỹ sư (chương 1) | 3,0 | 3,9 | 1,30 | MVP |
| RCP-102 | Bện dây dẫn | Xưởng | 3 x RES-102 | 1 x COM-102 | 8 | Kỹ sư (chương 1) | 3,6 | 4,7 | 1,30 | MVP |
| RCP-103 | Luyện thỏi sắt | Xưởng | 2 x RES-103 | 1 x COM-103 | 15 | Kỹ sư (chương 1) | 4,4 | 5,9 | 1,35 | MVP |
| RCP-104 | Phục hồi mạch | Xưởng | 2 x RES-104, 1 x RES-102 | 1 x COM-104 | 20 | Kỹ sư (chương 1) | 7,2 | 10,4 | 1,45 | MVP |
| RCP-105 | Lọc băng | Xưởng | 2 x RES-105 | 1 x COM-105 | 12 | Kỹ sư (chương 1) | 4,0 | 5,2 | 1,30 | MVP |
| RCP-151 | Ép tấm hợp kim chịu nhiệt | Xưởng | 3 x RES-201 | 1 x COM-201 | 10 | Kỹ sư, dải Giữa mở | 9,0 | 11,7 | 1,30 | Sau MVP |
| RCP-152 | Luyện thỏi cobalt | Xưởng | 2 x RES-202 | 1 x COM-202 | 15 | Kỹ sư, dải Giữa mở | 12,0 | 16,2 | 1,35 | Sau MVP |
| RCP-153 | Chế mạch cảm biến | Xưởng | 1 x RES-204, 1 x COM-104 | 1 x COM-203 | 20 | Kỹ sư, dải Giữa mở | 19,4 | 27,2 | 1,40 | Sau MVP |
| RCP-154 | Pha dung dịch lạnh | Xưởng | 2 x RES-203 | 1 x COM-204 | 12 | Kỹ sư, dải Giữa mở | 10,0 | 13,0 | 1,30 | Sau MVP |
| RCP-161 | Ép tấm giáp Warden | Xưởng | 3 x RES-301 | 1 x COM-301 | 12 | Kỹ sư, dải Xa mở | 24,0 | 31,2 | 1,30 | Sau MVP |
| RCP-162 | Mài phiến kính | Xưởng | 2 x RES-302 | 1 x COM-302 | 18 | Kỹ sư, dải Xa mở | 32,0 | 43,2 | 1,35 | Sau MVP |
| RCP-163 | Cuộn plasma | Xưởng | 2 x RES-303 | 1 x COM-303 | 18 | Kỹ sư, dải Xa mở | 28,0 | 37,8 | 1,35 | Sau MVP |
| RCP-164 | Nạp lõi nguội | Xưởng | 1 x RES-304, 1 x COM-204 | 1 x COM-304 | 20 | Kỹ sư, dải Xa mở | 23,0 | 32,2 | 1,40 | Sau MVP |
| RCP-131 | Nạp Bình Oxy nhỏ | Xưởng | 1 x COM-105, 1 x COM-101 | 1 x CON-101 | 10 | Kỹ sư (chương 1) | 9,1 | 9,1 | 1,00 | MVP |
| RCP-132 | Quấn Lưới cuộn | Xưởng | 2 x COM-102, 1 x SMP-101 | 10 x CON-102 | 10 | Quest Kỹ sư (chương 1) | 10,9 | 10,9 | 1,00 | MVP |
| RCP-133 | Chiết Ống gây mê | Phòng nghiên cứu | 1 x SMP-111, 1 x COM-105 | 2 x CON-103 | 10 | Nhà sinh học (chương 2) | 9,2 | 9,2 | 1,00 | Sau MVP |
| RCP-134 | Trộn Keo vá | Xưởng | 2 x COM-101, 1 x SMP-113 | 2 x CON-104 | 10 | Chương 3 | 11,8 | 11,8 | 1,00 | Sau MVP |
| RCP-135 | Lắp Cầu chì dự phòng | Xưởng | 1 x COM-104, 1 x SMP-114 | 2 x CON-105 | 10 | Chương 3 | 15,4 | 15,4 | 1,00 | Sau MVP |
| RCP-136 | Chế Phao kéo | Xưởng | 1 x COM-103, 1 x COM-102, 1 x COM-105 | 2 x CON-106 | 10 | Chương 2 | 15,8 | 15,8 | 1,00 | Sau MVP |
| RCP-137 | Chế Kim sinh thiết | Phòng nghiên cứu | 1 x COM-104, 1 x COM-105 | 2 x CON-107 | 10 | Nhà sinh học (chương 2) | 15,6 | 15,6 | 1,00 | Sau MVP |
| RCP-171 | Pha thức ăn nuôi Gần | Khoang sinh quyển | 2 x SMP-101 | 4 x FED-101 | 8 | Chương 2 | 3,0 | 3,0 | 1,00 | Sau MVP |
| RCP-271 | Pha thức ăn nuôi Giữa | Khoang sinh quyển | 2 x SMP-201 | 4 x FED-201 | 8 | Chương 2 | 8,0 | 8,0 | 1,00 | Sau MVP |
| RCP-371 | Pha thức ăn nuôi Xa | Khoang sinh quyển | 2 x SMP-301 | 4 x FED-301 | 8 | Chương 3 | 18,0 | 18,0 | 1,00 | Sau MVP |
| RCP-111 | Đóng kiện phế liệu | Cảng (tự động lúc Mở ca) | 14 x RES-101 | 1 x CGO-101 (2,5 thùng) | lúc Mở ca | Thông dịch viên (chương 1) | 14,0 | 14,0 | 1,00 | MVP |
| RCP-112 | Đóng kiện cáp | Cảng (tự động lúc Mở ca) | 11 x RES-102 | 1 x CGO-102 (2,5 thùng) | lúc Mở ca | Thông dịch viên (chương 1) | 13,2 | 13,2 | 1,00 | MVP |
| RCP-113 | Đóng kiện quặng | Cảng (tự động lúc Mở ca) | 6 x RES-103 | 1 x CGO-103 (2,5 thùng) | lúc Mở ca | Thông dịch viên (chương 1) | 13,2 | 13,2 | 1,00 | MVP |
| RCP-114 | Đóng kiện băng | Cảng (tự động lúc Mở ca) | 7 x RES-105 | 1 x CGO-104 (2,5 thùng) | lúc Mở ca | Thông dịch viên (chương 1) | 14,0 | 14,0 | 1,00 | MVP |
| RCP-115 | Đóng kiện mô sinh học | Cảng (tự động lúc Mở ca) | 9 x SMP-101 | 1 x CGO-105 (2,5 thùng) | lúc Mở ca | Thông dịch viên (chương 1) | 13,5 | 13,5 | 1,00 | MVP |
| RCP-116 | Đóng kiện đồ Trái Đất | Cảng (tự động lúc Mở ca) | 5 x RES-106 | 1 x CGO-109 (2,5 thùng) | lúc Mở ca | Thông dịch viên (chương 1) | 12,5 | 12,5 | 1,00 | MVP |
| RCP-121 | Đóng kiện cơ khí | Cảng (tự động lúc Mở ca) | 3 x COM-101 | 1 x CGO-111 (2,5 thùng) | lúc Mở ca | Chương 2 | 11,7 | 13,4 | 1,15 | Sau MVP |
| RCP-122 | Đóng kiện điện tử | Cảng (tự động lúc Mở ca) | 3 x COM-102 | 1 x CGO-112 (2,5 thùng) | lúc Mở ca | Chương 2 | 14,0 | 16,1 | 1,15 | Sau MVP |
| RCP-123 | Đóng kiện nước tinh khiết | Cảng (tự động lúc Mở ca) | 2 x COM-105 | 1 x CGO-113 (2,5 thùng) | lúc Mở ca | Thông dịch viên (chương 1) | 10,4 | 12,0 | 1,15 | MVP |
| RCP-124 | Đóng kiện đặc sản Gần | Cảng (tự động lúc Mở ca) | 3 x một trong SMP-111..115 | 1 x CGO-106 (2,5 thùng) | lúc Mở ca | Thông dịch viên (chương 1) | 12,0 | 13,2 | 1,10 | MVP |
| RCP-125 | Đóng kiện sản phẩm nuôi Gần | Cảng (tự động lúc Mở ca) | 13 x một trong BIO-111..114 | 1 x CGO-107 (2,5 thùng) | lúc Mở ca | Chương 2 | 39,0 | 42,9 | 1,10 | Sau MVP |
| RCP-126 | Đưa sinh vật sống cỡ S Gần vào lồng giao | Cảng (trước Mở ca) | 1 x một trong LIV-111..113 | 1 x CGO-121 (1 đơn vị bán) | 8 | Thông dịch viên (chương 1) | 4,0 | - | - | MVP |
| RCP-128 | Đưa sinh vật sống cỡ M Gần vào lồng giao | Cảng (trước Mở ca) | 1 x một trong LIV-114..115 | 1 x CGO-121 (1 đơn vị bán) | 8 | Chương 2 | 16,9 | - | - | Sau MVP |
| RCP-127 | Đóng kiện vật tư | Cảng (tự động lúc Mở ca) | 4 x CON-101, 4 x CON-102 | 1 x CGO-141 (2,5 thùng) | lúc Mở ca | Chương 2 | 40,8 | 46,9 | 1,15 | Sau MVP |
| RCP-141 | Sao bản dữ liệu | Khoang liên lạc | 1 x COM-104. Giữ nguyên, không tiêu: một vật kể chuyện loại dữ liệu (STY-101, STY-401), mỗi vật gốc sao một lần | 1 x CGO-131 (1 đơn vị bán) | 10 | Chương 3 | 10,4 | 20,9 | 2,00 | Sau MVP |
| RCP-221 | Đóng kiện hợp kim | Cảng (tự động lúc Mở ca) | 3 x COM-201 | 1 x CGO-211 (2,5 thùng) | lúc Mở ca | Chương 2 | 35,1 | 40,4 | 1,15 | Sau MVP |
| RCP-222 | Đóng kiện cảm biến | Cảng (tự động lúc Mở ca) | 1 x COM-203 | 1 x CGO-212 (2,5 thùng) | lúc Mở ca | Chương 2 | 27,2 | 31,3 | 1,15 | Sau MVP |
| RCP-223 | Đóng kiện dung dịch lạnh | Cảng (tự động lúc Mở ca) | 3 x COM-204 | 1 x CGO-213 (2,5 thùng) | lúc Mở ca | Chương 2 | 39,0 | 44,9 | 1,15 | Sau MVP |
| RCP-224 | Đóng kiện đặc sản Giữa | Cảng (tự động lúc Mở ca) | 4 x một trong SMP-212..215 hoặc BPS-211, 215 | 1 x CGO-206 (2,5 thùng) | lúc Mở ca | Chương 2 | 40,0 | 44,0 | 1,10 | Sau MVP |
| RCP-225 | Đóng kiện sản phẩm nuôi Giữa | Cảng (tự động lúc Mở ca) | 6 x một trong BIO-212..214 | 1 x CGO-207 (2,5 thùng) | lúc Mở ca | Chương 2 | 42,0 | 46,2 | 1,10 | Sau MVP |
| RCP-226 | Đưa sinh vật sống Giữa vào lồng giao | Cảng (trước Mở ca) | 1 x một trong LIV-212..214 | 1 x CGO-221 (1 đơn vị bán) | 8 | Chương 2 | 10,3 | - | - | Sau MVP |
| RCP-321 | Đóng kiện giáp | Cảng (tự động lúc Mở ca) | 3 x COM-301 | 1 x CGO-311 (2,5 thùng) | lúc Mở ca | Chương 3 | 93,6 | 107,6 | 1,15 | Sau MVP |
| RCP-322 | Đóng kiện plasma | Cảng (tự động lúc Mở ca) | 2 x COM-303 | 1 x CGO-312 (2,5 thùng) | lúc Mở ca | Chương 3 | 75,6 | 86,9 | 1,15 | Sau MVP |
| RCP-323 | Đóng kiện lõi nguội | Cảng (tự động lúc Mở ca) | 3 x COM-304 | 1 x CGO-313 (2,5 thùng) | lúc Mở ca | Chương 3 | 96,6 | 111,1 | 1,15 | Sau MVP |
| RCP-324 | Đóng kiện đặc sản Xa | Cảng (tự động lúc Mở ca) | 5 x một trong SMP-311..315 hoặc BPS-313..314 | 1 x CGO-306 (2,5 thùng) | lúc Mở ca | Chương 3 | 90,0 | 99,0 | 1,10 | Sau MVP |
| RCP-325 | Đóng kiện sản phẩm nuôi Xa | Cảng (tự động lúc Mở ca) | 7 x một trong BIO-311, 315 | 1 x CGO-307 (2,5 thùng) | lúc Mở ca | Chương 3 | 98,0 | 107,8 | 1,10 | Sau MVP |
| RCP-421 | Đóng kiện linh kiện Cradle | Cảng (tự động lúc Mở ca) | 7 x RES-401 | 1 x CGO-411 (2,5 thùng) | lúc Mở ca | Chương 4 | 140,0 | 161,0 | 1,15 | Sau MVP |
| RCP-422 | Đóng kiện tin mật | Cảng (tự động lúc Mở ca) | 1 x một trong CGO-306..307, 311..313, 1 x STY-701 | 1 x CGO-421 (1 đơn vị bán) | lúc Mở ca | Chương 4 | 86,9 | 86,9 | 1,00 | Sau MVP |
| RCP-521 | Đóng kiện linh kiện Warden | Cảng (tự động lúc Mở ca) | 14 x RES-305 | 1 x CGO-511 (2,5 thùng) | lúc Mở ca | Chương 5 | 168,0 | 193,2 | 1,15 | Sau MVP |
| RCP-326 | Đưa sinh vật sống Xa vào lồng giao | Cảng (trước Mở ca) | 1 x một trong LIV-311..312, 315 | 1 x CGO-321 (1 đơn vị bán) | 8 | Chương 3 | 23,0 | - | - | Sau MVP |
| RCP-301 | Phân tích DL-G01 | Phòng nghiên cứu | 1 x LIV-111, 2 x COM-105 | 1 x BPR-101 | qua đêm | Nhà sinh học (chương 2) | 15,5 | - | - | Sau MVP |
| RCP-302 | Phân tích DL-G04 | Phòng nghiên cứu | 1 x LIV-113, 2 x COM-105 | 1 x BPR-102 | qua đêm | Nhà sinh học (chương 2) | 14,4 | - | - | Sau MVP |
| RCP-207 | Ghép Lõi dẫn hướng rời bãi vỡ | Xưởng | 1 x STY-501, 1 x STY-401, 2 x COM-203 | 1 x ENG-105 | qua đêm | Chương 5 | 54,4 | - | - | Sau MVP |
| RCP-205 | Chế Bộ kích nguồn (TOL-401) | Xưởng | 6 x RES-101, 3 x RES-102, 1 x RES-104 | Mở khóa dụng cụ cho nhóm | qua đêm | Xưởng, công thức đầu tiên sau khi vớt Kỹ sư | 12,6 | - | - | MVP |
| RCP-201 | Chế Súng lưới (TOL-202) | Xưởng | 2 x COM-103, 1 x COM-102, 1 x COM-104 | Mở khóa dụng cụ cho nhóm | qua đêm | Quest Kỹ sư (chương 1) | 27,0 | - | - | MVP |
| RCP-202 | Chế Súng gây mê (TOL-203) | Xưởng | 1 x COM-103, 1 x COM-104, 2 x COM-105 | Mở khóa dụng cụ cho nhóm | qua đêm | BPR-102 | 26,8 | - | - | Sau MVP |
| RCP-203 | Chế Máy quét xung (TOL-301) | Xưởng | 1 x COM-104, 1 x COM-102, 2 x COM-101 | Mở khóa dụng cụ cho nhóm | qua đêm | BPR-103 | 22,9 | - | - | Sau MVP |
| RCP-204 | Chế Dùi xung (TOL-201) | Xưởng | 2 x COM-103, 1 x COM-104, 1 x COM-101 | Mở khóa dụng cụ cho nhóm | qua đêm | Quest Kỹ sư (chương 1) | 26,2 | - | - | MVP |
| RCP-206 | Chế Máy cắt thân tàu (TOL-402) | Xưởng | 1 x COM-301, 1 x COM-303, 1 x COM-104 | Mở khóa dụng cụ cho nhóm | qua đêm | BPR-105 | 79,4 | - | - | Sau MVP |
| RCP-208 | Chế Lồng mẫu (TOL-501) | Xưởng | 2 x COM-101, 1 x COM-103, 1 x COM-102, 1 x COM-105 | Mở khóa dụng cụ cho nhóm | qua đêm | Quest Kỹ sư (chương 1) | 23,6 | - | - | MVP |
<!--/B:RECIPE-->

ITEM LIST (tab Sheet, một dòng mỗi vật phẩm, cột Nguồn nhận và Nguồn tiêu sinh từ công thức và điểm khai thác):

<!--B:ITEM-->
| Item ID | Tên (VI / EN [TẠM]) | Nhóm | Độ hiếm | Khối | GTĐ | Dải | Nguồn nhận | Nguồn tiêu | Nhãn |
|---|---|---|---|---|---|---|---|---|---|
| RES-101 | Mảnh vỏ Cradle / Hull Shard | Phế liệu | Thường | 1 | 1,0 | Gần | SLV-101, SLV-104, SLV-105, SLV-111 | RCP-101, RCP-111, RCP-205, Sửa khoang (tram-va-cang.md mục 2.6c) | MVP |
| RES-102 | Dây cáp đứt / Frayed Cable | Phế liệu | Thường | 1 | 1,2 | Gần | SLV-101, SLV-104, SLV-111 | RCP-102, RCP-104, RCP-112, RCP-205, UPG-BAG-1, Sửa khoang (tram-va-cang.md mục 2.6c) | MVP |
| RES-103 | Quặng sắt thiên thạch / Meteoric Iron Ore | Khoáng | Thường | 2 | 2,2 | Gần | SLV-102, SLV-112 | RCP-103, RCP-113, Sửa khoang (tram-va-cang.md mục 2.6c) | MVP |
| RES-104 | Bo mạch cháy / Scorched Circuit | Linh kiện | Ít gặp | 1 | 3,0 | Gần | SLV-104, SLV-111, SLV-112, SLV-203 | RCP-104, RCP-205, Sửa khoang (tram-va-cang.md mục 2.6c) | MVP |
| RES-105 | Băng nước đục / Murky Ice | Băng | Thường | 2 | 2,0 | Gần | SLV-103 | RCP-105, RCP-114, Sửa khoang (tram-va-cang.md mục 2.6c) | MVP |
| RES-106 | Đồ Trái Đất vụn / Earth Trinkets | Phế liệu | Ít gặp | 1 | 2,5 | Gần | SLV-104, SLV-111, SLV-112 | RCP-116 | MVP |
| RES-201 | Hợp kim nóng chảy / Fused Alloy | Phế liệu | Ít gặp | 1 | 3,0 | Giữa | SLV-203, SLV-204 | RCP-151, Sửa khoang (tram-va-cang.md mục 2.6c) | Sau MVP |
| RES-202 | Quặng cobalt / Cobalt Ore | Khoáng | Ít gặp | 2 | 6,0 | Giữa | SLV-201 | RCP-152, Sửa khoang (tram-va-cang.md mục 2.6c) | Sau MVP |
| RES-203 | Băng tinh / Clear Ice | Băng | Ít gặp | 2 | 5,0 | Giữa | SLV-202 | RCP-154, Sửa khoang (tram-va-cang.md mục 2.6c) | Sau MVP |
| RES-204 | Lõi cảm biến / Sensor Core | Linh kiện | Hiếm | 1 | 9,0 | Giữa | SLV-203 | RCP-153, Sửa khoang (tram-va-cang.md mục 2.6c) | Sau MVP |
| RES-301 | Hợp kim Warden / Warden Alloy | Phế liệu | Hiếm | 1 | 8,0 | Xa | SLV-303, Đơn vị The Wardens hạ được (WD-01..04, gd-combat) | RCP-161, Sửa khoang (tram-va-cang.md mục 2.6c) | Sau MVP |
| RES-302 | Kính nebula / Nebula Glass | Khoáng | Hiếm | 2 | 16,0 | Xa | SLV-301 | RCP-162, Sửa khoang (tram-va-cang.md mục 2.6c) | Sau MVP |
| RES-303 | Băng plasma / Plasma Ice | Băng | Hiếm | 2 | 14,0 | Xa | SLV-302 | RCP-163 | Sau MVP |
| RES-304 | Lõi năng lượng nguội / Cold Core | Linh kiện | Hiếm | 1 | 10,0 | Xa | SLV-303 | RCP-164, Sửa khoang (tram-va-cang.md mục 2.6c) | Sau MVP |
| RES-305 | Linh kiện Warden / Warden Part | Linh kiện | Hiếm | 1 | 12,0 | Xa | WD-01..04 và boss BS-3 (gd-combat) | RCP-521, Lắp động cơ chính giai đoạn 4 và 5 | Sau MVP |
| RES-401 | Linh kiện Cradle / Cradle Part | Linh kiện | Đặc biệt | 1 | 20,0 | Cradle | Boss BS-4 và map nhánh Cradle Interior (gd-combat, gd-world) | RCP-421, UPG-OXY-4, UPG-BAG-4, UPG-ENV-3, Lắp động cơ chính giai đoạn 4 và 5 | Sau MVP |
| SMP-101 | Mô sinh học Gần / Near Biomass | Mẫu | Thường | 1 | 1,5 | Gần | Mọi loài Gần khi hạ | RCP-132, RCP-171, RCP-115 | MVP |
| SMP-201 | Mô sinh học Giữa / Mid Biomass | Mẫu | Ít gặp | 1 | 4,0 | Giữa | Mọi loài Giữa khi hạ | RCP-271 | Sau MVP |
| SMP-301 | Mô sinh học Xa / Far Biomass | Mẫu | Hiếm | 1 | 9,0 | Xa | Mọi loài Xa khi hạ | RCP-371 | Sau MVP |
| SMP-111 | Đặc sản DL-G01 Driftmoth / DL-G01 Specialty | Mẫu | Ít gặp | 1 | 4,0 | Gần | DL-G01 khi hạ (xác suất 0,3) | RCP-133, RCP-124 | MVP |
| SMP-112 | Đặc sản DL-G02 Skitter Ray / DL-G02 Specialty | Mẫu | Ít gặp | 1 | 4,0 | Gần | DL-G02 khi hạ (xác suất 0,4) | RCP-124 | MVP |
| SMP-113 | Đặc sản DL-G04 Sting Krill / DL-G04 Specialty | Mẫu | Ít gặp | 1 | 4,0 | Gần | DL-G04 khi hạ (xác suất 0,2 mỗi con) | RCP-134, RCP-124 | MVP |
| SMP-114 | Đặc sản DL-G05 Arc Eel / DL-G05 Specialty | Mẫu | Ít gặp | 1 | 5,0 | Gần | DL-G05 khi hạ (xác suất 0,6) | RCP-135, RCP-124 | MVP |
| SMP-115 | Đặc sản DL-G03 Latchjaw / DL-G03 Specialty | Mẫu | Ít gặp | 1 | 5,0 | Gần | DL-G03 khi hạ (xác suất 0,6) | RCP-124 | Sau MVP |
| SMP-212 | Đặc sản DL-M02 Lumen Jelly / DL-M02 Specialty | Mẫu | Hiếm | 1 | 10,0 | Giữa | DL-M02 khi hạ (xác suất 0,4) | RCP-224 | Sau MVP |
| SMP-213 | Đặc sản DL-M03 Orebiter / DL-M03 Specialty | Mẫu | Hiếm | 1 | 10,0 | Giữa | DL-M03 khi hạ (xác suất 0,6) | RCP-224 | Sau MVP |
| SMP-214 | Đặc sản DL-M04 Needlefin / DL-M04 Specialty | Mẫu | Hiếm | 1 | 10,0 | Giữa | DL-M04 khi hạ (xác suất 0,15 mỗi con) | RCP-224 | Sau MVP |
| SMP-215 | Đặc sản DL-M05 Gulper / DL-M05 Specialty | Mẫu | Hiếm | 1 | 10,0 | Giữa | DL-M05 khi hạ (xác suất 1) | RCP-224 | Sau MVP |
| SMP-311 | Đặc sản DL-X01 Prism Wisp / DL-X01 Specialty | Mẫu | Hiếm | 1 | 18,0 | Xa | DL-X01 khi hạ (xác suất 0,5) | RCP-324 | Sau MVP |
| SMP-312 | Đặc sản DL-X02 Mirror Mantis / DL-X02 Specialty | Mẫu | Hiếm | 1 | 18,0 | Xa | DL-X02 khi hạ (xác suất 0,6) | RCP-324 | Sau MVP |
| SMP-313 | Đặc sản DL-X03 Storm Siphon / DL-X03 Specialty | Mẫu | Hiếm | 1 | 18,0 | Xa | DL-X03 khi hạ (xác suất 1) | RCP-324 | Sau MVP |
| SMP-314 | Đặc sản DL-X04 Shardbrood Queen / DL-X04 Specialty | Mẫu | Hiếm | 1 | 18,0 | Xa | DL-X04 khi hạ (xác suất 1) | RCP-324 | Sau MVP |
| SMP-315 | Đặc sản DL-X05 Shardbrood Hatchling / DL-X05 Specialty | Mẫu | Hiếm | 1 | 18,0 | Xa | DL-X05 khi hạ (xác suất 0,2 mỗi con) | RCP-324 | Sau MVP |
| SMP-191 | Hạch thủ lĩnh Gần / Scrapmaw Core | Mẫu | Đặc biệt | 2 | 25,0 | Gần | BS-1 Scrapmaw bị hạ, cộng 5 SMP-101 (gd-combat) | Sửa khoang theo chương | MVP |
| SMP-192 | Mẫu boss Gần / Scrapmaw Sample | Mẫu | Đặc biệt | 2 | 30,0 | Gần | BS-1 Scrapmaw bị xua đi, cộng 2 SMP-101 (gd-combat) | Sửa khoang theo chương, thay được SMP-191 | MVP |
| SMP-291 | Đặc sản Tempest Gulper / Tempest Gulper Core | Mẫu | Đặc biệt | 2 | 60,0 | Giữa | BS-2 bị hạ, cộng phế liệu nó đã nuốt (gd-combat) | Sửa khoang theo chương | Sau MVP |
| SMP-292 | Mẫu boss Giữa / Tempest Gulper Sample | Mẫu | Đặc biệt | 2 | 65,0 | Giữa | BS-2 bị xua đi (gd-combat) | Sửa khoang theo chương, thay được SMP-291 | Sau MVP |
| LIV-111 | Mẫu sống DL-G01 Driftmoth / DL-G01 Live Specimen | Mẫu sống | Ít gặp | kéo | 5,1 | Gần | Bắt sống DL-G01 bằng Súng lưới (K9, từ chương 1) | RCP-126, RCP-301, Nuôi (chương 2), bán ở ca cảng (lồng sinh vật sống), nghiên cứu (chương 2) | MVP |
| BIO-111 | Sản phẩm nuôi DL-G01 Driftmoth / DL-G01 Farm Yield | Sản phẩm nuôi | Thường | 1 | 3,0 | Gần | Khoang nuôi DL-G01 (1 đơn vị mỗi con trưởng thành mỗi ngày khi được cho ăn) | RCP-125 | Sau MVP |
| LIV-112 | Mẫu sống DL-G02 Skitter Ray / DL-G02 Live Specimen | Mẫu sống | Ít gặp | kéo | 5,7 | Gần | Bắt sống DL-G02 bằng Súng lưới (K9, từ chương 1) | RCP-126, Nuôi (chương 2), bán ở ca cảng (lồng sinh vật sống), nghiên cứu (chương 2) | MVP |
| BIO-112 | Sản phẩm nuôi DL-G02 Skitter Ray / DL-G02 Farm Yield | Sản phẩm nuôi | Thường | 1 | 3,0 | Gần | Khoang nuôi DL-G02 (1 đơn vị mỗi con trưởng thành mỗi ngày khi được cho ăn) | RCP-125 | Sau MVP |
| LIV-113 | Mẫu sống DL-G04 Sting Krill / DL-G04 Live Specimen | Mẫu sống | Ít gặp | kéo | 4,0 | Gần | Bắt sống DL-G04 bằng Súng lưới (K9, từ chương 1) | RCP-126, RCP-302, Nuôi (chương 2), bán ở ca cảng (lồng sinh vật sống), nghiên cứu (chương 2) | MVP |
| BIO-113 | Sản phẩm nuôi DL-G04 Sting Krill / DL-G04 Farm Yield | Sản phẩm nuôi | Thường | 1 | 3,0 | Gần | Khoang nuôi DL-G04 (1 đơn vị mỗi con trưởng thành mỗi ngày khi được cho ăn) | RCP-125 | Sau MVP |
| LIV-114 | Mẫu sống DL-G05 Arc Eel / DL-G05 Live Specimen | Mẫu sống | Ít gặp | kéo | 30,7 | Gần | Bắt sống DL-G05 bằng Súng gây mê rồi Phao kéo (K9, chương 2, miễn choáng) | RCP-128, Nuôi (chương 2), bán ở ca cảng (lồng sinh vật sống), nghiên cứu (chương 2) | Sau MVP |
| BIO-114 | Sản phẩm nuôi DL-G05 Arc Eel / DL-G05 Farm Yield | Sản phẩm nuôi | Thường | 1 | 3,0 | Gần | Khoang nuôi DL-G05 (1 đơn vị mỗi con trưởng thành mỗi ngày khi được cho ăn) | RCP-125 | Sau MVP |
| LIV-115 | Mẫu sống DL-G03 Latchjaw / DL-G03 Live Specimen | Mẫu sống | Ít gặp | kéo | 16,9 | Gần | Bắt sống DL-G03 bằng choáng hoặc mê rồi Phao kéo (K9, chương 2) | RCP-128, Nuôi (chương 2), bán ở ca cảng (lồng sinh vật sống), nghiên cứu (chương 2) | Sau MVP |
| BPS-211 | Mẫu sinh thiết DL-M01 Shepherd Whale / DL-M01 Biopsy | Mẫu sinh thiết | Hiếm | 1 | 25,0 | Giữa | Kim sinh thiết trên DL-M01 (loài L, chương 2) | RCP-224, Nghiên cứu (Hồ sơ loài, gd-combat) | Sau MVP |
| LIV-212 | Mẫu sống DL-M02 Lumen Jelly / DL-M02 Live Specimen | Mẫu sống | Hiếm | kéo | 25,9 | Giữa | Bắt sống DL-M02 bằng choáng hoặc mê rồi Phao kéo (K9, chương 2) | RCP-226, Nuôi (chương 2), bán ở ca cảng (lồng sinh vật sống), nghiên cứu (chương 2) | Sau MVP |
| BIO-212 | Sản phẩm nuôi DL-M02 Lumen Jelly / DL-M02 Farm Yield | Sản phẩm nuôi | Ít gặp | 1 | 7,0 | Giữa | Khoang nuôi DL-M02 (1 đơn vị mỗi con trưởng thành mỗi ngày khi được cho ăn) | RCP-225 | Sau MVP |
| LIV-213 | Mẫu sống DL-M03 Orebiter / DL-M03 Live Specimen | Mẫu sống | Hiếm | kéo | 28,9 | Giữa | Bắt sống DL-M03 bằng choáng hoặc mê rồi Phao kéo (K9, chương 2) | RCP-226, Nuôi (chương 2), bán ở ca cảng (lồng sinh vật sống), nghiên cứu (chương 2) | Sau MVP |
| BIO-213 | Sản phẩm nuôi DL-M03 Orebiter / DL-M03 Farm Yield | Sản phẩm nuôi | Ít gặp | 1 | 7,0 | Giữa | Khoang nuôi DL-M03 (1 đơn vị mỗi con trưởng thành mỗi ngày khi được cho ăn) | RCP-225 | Sau MVP |
| LIV-214 | Mẫu sống DL-M04 Needlefin / DL-M04 Live Specimen | Mẫu sống | Hiếm | kéo | 10,3 | Giữa | Bắt sống DL-M04 bằng Súng lưới (K9, từ chương 1) | RCP-226, Nuôi (chương 2), bán ở ca cảng (lồng sinh vật sống), nghiên cứu (chương 2) | Sau MVP |
| BIO-214 | Sản phẩm nuôi DL-M04 Needlefin / DL-M04 Farm Yield | Sản phẩm nuôi | Ít gặp | 1 | 7,0 | Giữa | Khoang nuôi DL-M04 (1 đơn vị mỗi con trưởng thành mỗi ngày khi được cho ăn) | RCP-225 | Sau MVP |
| BPS-215 | Mẫu sinh thiết DL-M05 Gulper / DL-M05 Biopsy | Mẫu sinh thiết | Hiếm | 1 | 19,5 | Giữa | Kim sinh thiết trên DL-M05 (loài L, chương 2) | RCP-224, Nghiên cứu (Hồ sơ loài, gd-combat) | Sau MVP |
| LIV-311 | Mẫu sống DL-X01 Prism Wisp / DL-X01 Live Specimen | Mẫu sống | Hiếm | kéo | 33,5 | Xa | Bắt sống DL-X01 bằng Súng lưới (K9, từ chương 1) | RCP-326, Nuôi (chương 2), bán ở ca cảng (lồng sinh vật sống), nghiên cứu (chương 2) | Sau MVP |
| BIO-311 | Sản phẩm nuôi DL-X01 Prism Wisp / DL-X01 Farm Yield | Sản phẩm nuôi | Ít gặp | 1 | 14,0 | Xa | Khoang nuôi DL-X01 (1 đơn vị mỗi con trưởng thành mỗi ngày khi được cho ăn) | RCP-325 | Sau MVP |
| LIV-312 | Mẫu sống DL-X02 Mirror Mantis / DL-X02 Live Specimen | Mẫu sống | Hiếm | kéo | 69,5 | Xa | Bắt sống DL-X02 bằng choáng hoặc mê rồi Phao kéo (K9, chương 2) | RCP-326, Nuôi (chương 2), bán ở ca cảng (lồng sinh vật sống), nghiên cứu (chương 2) | Sau MVP |
| BPS-313 | Mẫu sinh thiết DL-X03 Storm Siphon / DL-X03 Biopsy | Mẫu sinh thiết | Hiếm | 1 | 32,1 | Xa | Kim sinh thiết trên DL-X03 (loài L, chương 2) | RCP-324, Nghiên cứu (Hồ sơ loài, gd-combat) | Sau MVP |
| BPS-314 | Mẫu sinh thiết DL-X04 Shardbrood Queen / DL-X04 Biopsy | Mẫu sinh thiết | Hiếm | 1 | 32,1 | Xa | Kim sinh thiết trên DL-X04 (loài L, chương 2) | RCP-324, Nghiên cứu (Hồ sơ loài, gd-combat) | Sau MVP |
| LIV-315 | Mẫu sống DL-X05 Shardbrood Hatchling / DL-X05 Live Specimen | Mẫu sống | Hiếm | kéo | 23,0 | Xa | Bắt sống DL-X05 bằng Súng lưới (K9, từ chương 1) | RCP-326, Nuôi (chương 2), bán ở ca cảng (lồng sinh vật sống), nghiên cứu (chương 2) | Sau MVP |
| BIO-315 | Sản phẩm nuôi DL-X05 Shardbrood Hatchling / DL-X05 Farm Yield | Sản phẩm nuôi | Ít gặp | 1 | 14,0 | Xa | Khoang nuôi DL-X05 (1 đơn vị mỗi con trưởng thành mỗi ngày khi được cho ăn) | RCP-325 | Sau MVP |
| COM-101 | Tấm thép nén / Pressed Plate | Vật liệu chế | Thường | 1 | 3,9 | Gần | RCP-101 | RCP-131, RCP-134, RCP-121, RCP-203, RCP-204, RCP-208, UPG-OXY-1, UPG-BAG-1, UPG-THR-1, UPG-MIN-2, UPG-RACK-1, UPG-BAG-2 | MVP |
| COM-102 | Dây dẫn bện / Braided Conductor | Vật liệu chế | Thường | 1 | 4,7 | Gần | RCP-102 | RCP-132, RCP-136, RCP-122, RCP-201, RCP-203, RCP-208, UPG-BAG-1, UPG-MIN-2, UPG-HAR-2, UPG-RACK-1, UPG-NET-2, UPG-BAG-2, UPG-RACK-2 | MVP |
| COM-103 | Thỏi sắt / Iron Ingot | Vật liệu chế | Thường | 1 | 5,9 | Gần | RCP-103 | RCP-136, RCP-201, RCP-202, RCP-204, RCP-208, UPG-THR-1, UPG-MIN-2, UPG-HAR-2, UPG-RACK-1, UPG-NET-2, UPG-MIN-3, UPG-RACK-2 | MVP |
| COM-104 | Mạch phục hồi / Restored Circuit | Vật liệu chế | Ít gặp | 1 | 10,4 | Gần | RCP-104 | RCP-153, RCP-135, RCP-137, RCP-141, RCP-201, RCP-202, RCP-203, RCP-204, RCP-206, UPG-THR-1, UPG-HAR-2, UPG-NET-2, UPG-BAG-3 | MVP |
| COM-105 | Khối nước tinh khiết / Purified Ice Block | Vật liệu chế | Thường | 1 | 5,2 | Gần | RCP-105 | RCP-131, RCP-133, RCP-136, RCP-137, RCP-123, RCP-301, RCP-302, RCP-202, RCP-208, UPG-OXY-1, UPG-ENV-1 | MVP |
| COM-201 | Tấm hợp kim chịu nhiệt / Heat Alloy Plate | Vật liệu chế | Ít gặp | 1 | 11,7 | Giữa | RCP-151 | RCP-221, UPG-OXY-2, UPG-BAG-2, UPG-ENV-1 | Sau MVP |
| COM-202 | Thỏi cobalt / Cobalt Ingot | Vật liệu chế | Ít gặp | 1 | 16,2 | Giữa | RCP-152 | UPG-THR-2, UPG-MIN-3, UPG-HAR-3, UPG-RACK-2 | Sau MVP |
| COM-203 | Mạch cảm biến / Sensor Circuit | Vật liệu chế | Hiếm | 1 | 27,2 | Giữa | RCP-153 | RCP-222, RCP-207, UPG-THR-2, UPG-HAR-3, UPG-ENV-2 | Sau MVP |
| COM-204 | Dung dịch lạnh / Coolant | Vật liệu chế | Ít gặp | 1 | 13,0 | Giữa | RCP-154 | RCP-164, RCP-223, UPG-OXY-2, UPG-ENV-1 | Sau MVP |
| COM-301 | Tấm giáp Warden / Warden Armor Plate | Vật liệu chế | Hiếm | 1 | 31,2 | Xa | RCP-161 | RCP-321, RCP-206, UPG-OXY-3, UPG-BAG-3, UPG-ENV-2, UPG-BAG-4, UPG-ENV-3 | Sau MVP |
| COM-302 | Phiến kính / Glass Slab | Vật liệu chế | Hiếm | 1 | 43,2 | Xa | RCP-162 | UPG-OXY-3, UPG-THR-3, UPG-OXY-4, UPG-ENV-3 | Sau MVP |
| COM-303 | Cuộn plasma / Plasma Coil | Vật liệu chế | Hiếm | 1 | 37,8 | Xa | RCP-163 | RCP-322, RCP-206, UPG-BAG-3, UPG-OXY-4, UPG-BAG-4 | Sau MVP |
| COM-304 | Lõi nguội nạp / Charged Cold Core | Vật liệu chế | Hiếm | 1 | 32,2 | Xa | RCP-164 | RCP-323, UPG-THR-3, UPG-ENV-2, UPG-OXY-4, UPG-BAG-4, UPG-ENV-3 | Sau MVP |
| CON-101 | Bình Oxy nhỏ / Spare Canister | Vật tiêu hao | Ít gặp | 2 | 9,1 | Gần | RCP-131 | RCP-127, Dùng trong chuyến: hồi 40 điểm Oxy (khoảng 12% bình bậc 0) cho chính người dùng, dùng 1,5 giây, chiếm túi, tối đa 2 bình trong túi mỗi chuyến (trần chống nạp Oxy vô hạn, K22) | MVP |
| CON-102 | Lưới cuộn / Net Cartridge | Vật tiêu hao | Thường | 1 | 1,1 | Gần | RCP-132 | RCP-127, Dùng với Súng lưới | MVP |
| CON-103 | Ống gây mê / Sedative Ampoule | Vật tiêu hao | Thường | 1 | 4,6 | Gần | RCP-133 | Dùng với Súng gây mê | Sau MVP |
| CON-104 | Keo vá / Sealant Patch | Vật tiêu hao | Thường | 1 | 5,9 | Gần | RCP-134 | Xử lý sự cố rò khí, 1 mỗi lần (K14, gd-quan) | Sau MVP |
| CON-105 | Cầu chì dự phòng / Spare Fuse | Vật tiêu hao | Ít gặp | 1 | 7,7 | Gần | RCP-135 | Xử lý sự cố chập điện, 1 mỗi lần (K14, gd-quan) | Sau MVP |
| CON-106 | Phao kéo / Tow Buoy | Vật tiêu hao | Ít gặp | 1 | 7,9 | Gần | RCP-136 | Gửi Driftlife cỡ M bất lực về kho (gd-combat) | Sau MVP |
| CON-107 | Kim sinh thiết / Biopsy Needle | Vật tiêu hao | Ít gặp | 1 | 7,8 | Gần | RCP-137 | Lấy mẫu sinh thiết loài cỡ L (gd-combat) | Sau MVP |
| FED-101 | Thức ăn nuôi Gần / Near Feed | Thức ăn nuôi | Thường | 1 | 0,8 | Gần | RCP-171 | Khoang sinh quyển, 1 mỗi con mỗi ngày (K16) | Sau MVP |
| FED-201 | Thức ăn nuôi Giữa / Mid Feed | Thức ăn nuôi | Thường | 1 | 2,0 | Giữa | RCP-271 | Khoang sinh quyển, 1 mỗi con mỗi ngày (K16) | Sau MVP |
| FED-301 | Thức ăn nuôi Xa / Far Feed | Thức ăn nuôi | Thường | 1 | 4,5 | Xa | RCP-371 | Khoang sinh quyển, 1 mỗi con mỗi ngày (K16) | Sau MVP |
| CGO-101 | Kiện phế liệu / Scrap Crate | Kiện | Thường | kho | 14,0 | Gần | RCP-111 | Bán theo thùng ở ca cảng (K13) | MVP |
| CGO-102 | Kiện cáp / Cable Crate | Kiện | Thường | kho | 13,2 | Gần | RCP-112 | Bán theo thùng ở ca cảng (K13) | MVP |
| CGO-103 | Kiện quặng / Ore Crate | Kiện | Thường | kho | 13,2 | Gần | RCP-113 | Bán theo thùng ở ca cảng (K13) | MVP |
| CGO-104 | Kiện băng / Ice Crate | Kiện | Thường | kho | 14,0 | Gần | RCP-114 | Bán theo thùng ở ca cảng (K13) | MVP |
| CGO-105 | Kiện mô sinh học / Biomass Crate | Kiện | Thường | kho | 13,5 | Gần | RCP-115 | Bán theo thùng ở ca cảng (K13) | MVP |
| CGO-109 | Kiện đồ Trái Đất / Earth Trinket Crate | Kiện | Ít gặp | kho | 12,5 | Gần | RCP-116 | Bán theo thùng ở ca cảng (K13) | MVP |
| CGO-111 | Kiện cơ khí / Mechanical Crate | Kiện | Ít gặp | kho | 13,4 | Gần | RCP-121 | Bán theo thùng ở ca cảng (K13) | Sau MVP |
| CGO-112 | Kiện điện tử / Electronics Crate | Kiện | Ít gặp | kho | 16,1 | Gần | RCP-122 | Bán theo thùng ở ca cảng (K13) | Sau MVP |
| CGO-113 | Kiện nước tinh khiết / Purified Water Crate | Kiện | Ít gặp | kho | 12,0 | Gần | RCP-123 | Bán theo thùng ở ca cảng (K13) | MVP |
| CGO-106 | Kiện đặc sản Gần / Near Specialty Crate | Kiện | Ít gặp | kho | 13,2 | Gần | RCP-124 | Bán theo thùng ở ca cảng (K13) | MVP |
| CGO-107 | Kiện sản phẩm nuôi Gần / Near Farm Crate | Kiện | Ít gặp | kho | 42,9 | Gần | RCP-125 | Bán theo thùng ở ca cảng (K13) | Sau MVP |
| CGO-121 | Lồng sinh vật sống Gần / Near Live Cage | Kiện | Hiếm | kho | theo loài | Gần | RCP-126, RCP-128 | Bán theo thùng ở ca cảng (K13) | MVP |
| CGO-141 | Kiện vật tư / Supply Crate | Kiện | Ít gặp | kho | 46,9 | Gần | RCP-127 | Bán theo thùng ở ca cảng (K13) | Sau MVP |
| CGO-131 | Bản sao dữ liệu / Data Copy | Kiện | Hiếm | kho | 20,9 | Gần | RCP-141 | Bán nguyên cái ở ca cảng (K13) | Sau MVP |
| CGO-211 | Kiện hợp kim / Alloy Crate | Kiện | Ít gặp | kho | 40,4 | Giữa | RCP-221 | Bán theo thùng ở ca cảng (K13) | Sau MVP |
| CGO-212 | Kiện cảm biến / Sensor Crate | Kiện | Hiếm | kho | 31,3 | Giữa | RCP-222 | Bán theo thùng ở ca cảng (K13) | Sau MVP |
| CGO-213 | Kiện dung dịch lạnh / Coolant Crate | Kiện | Ít gặp | kho | 44,9 | Giữa | RCP-223 | Bán theo thùng ở ca cảng (K13) | Sau MVP |
| CGO-206 | Kiện đặc sản Giữa / Mid Specialty Crate | Kiện | Hiếm | kho | 44,0 | Giữa | RCP-224 | Bán theo thùng ở ca cảng (K13) | Sau MVP |
| CGO-207 | Kiện sản phẩm nuôi Giữa / Mid Farm Crate | Kiện | Ít gặp | kho | 46,2 | Giữa | RCP-225 | Bán theo thùng ở ca cảng (K13) | Sau MVP |
| CGO-221 | Lồng sinh vật sống Giữa / Mid Live Cage | Kiện | Hiếm | kho | theo loài | Giữa | RCP-226 | Bán theo thùng ở ca cảng (K13) | Sau MVP |
| CGO-311 | Kiện giáp / Armor Crate | Kiện | Hiếm | kho | 107,6 | Xa | RCP-321 | RCP-422, Bán theo thùng ở ca cảng (K13) | Sau MVP |
| CGO-312 | Kiện plasma / Plasma Crate | Kiện | Hiếm | kho | 86,9 | Xa | RCP-322 | RCP-422, Bán theo thùng ở ca cảng (K13) | Sau MVP |
| CGO-313 | Kiện lõi nguội / Cold Core Crate | Kiện | Hiếm | kho | 111,1 | Xa | RCP-323 | RCP-422, Bán theo thùng ở ca cảng (K13) | Sau MVP |
| CGO-306 | Kiện đặc sản Xa / Far Specialty Crate | Kiện | Hiếm | kho | 99,0 | Xa | RCP-324 | RCP-422, Bán theo thùng ở ca cảng (K13) | Sau MVP |
| CGO-307 | Kiện sản phẩm nuôi Xa / Far Farm Crate | Kiện | Hiếm | kho | 107,8 | Xa | RCP-325 | RCP-422, Bán theo thùng ở ca cảng (K13) | Sau MVP |
| CGO-321 | Lồng sinh vật sống Xa / Far Live Cage | Kiện | Hiếm | kho | theo loài | Xa | RCP-326 | Bán theo thùng ở ca cảng (K13) | Sau MVP |
| CGO-411 | Kiện linh kiện Cradle / Cradle Parts Crate | Kiện | Hiếm | kho | 161,0 | Cradle | RCP-421 | Bán theo thùng ở ca cảng (K13) | Sau MVP |
| CGO-421 | Kiện tin mật / Dispatch Crate | Kiện | Hiếm | kho | 86,9 | Xa | RCP-422 | Bán nguyên cái ở ca cảng (K13) | Sau MVP |
| CGO-511 | Kiện linh kiện Warden / Warden Parts Crate | Kiện | Hiếm | kho | 193,2 | Xa | RCP-521 | Bán theo thùng ở ca cảng (K13) | Sau MVP |
| ENG-101 | Van tiết lưu / Throttle Valve | Linh kiện lõi | Hiếm | kho | - | Gần | Shop (K19), mở ở Hạng cảng 3 (kinh-te-tien-trinh.md) | Lắp động cơ chính, giai đoạn 1 | MVP |
| ENG-102 | Buồng đốt tái chế / Recycled Combustor | Linh kiện lõi | Hiếm | kho | - | Giữa | Shop (K19) | Lắp động cơ chính, giai đoạn 2 | Sau MVP |
| ENG-103 | Cuộn ổn định từ / Magnetic Stabilizer | Linh kiện lõi | Hiếm | kho | - | Xa | Shop (K19) | Lắp động cơ chính, giai đoạn 3 | Sau MVP |
| ENG-104 | Bơm nhiên liệu Veyl / Veyl Fuel Pump | Linh kiện lõi | Hiếm | kho | - | Xa | Shop (K19) | Lắp động cơ chính, giai đoạn 4 | Sau MVP |
| ENG-105 | Lõi dẫn hướng rời bãi vỡ / Exit Guide Core | Linh kiện lõi | Đặc biệt | kho | - | Cradle | RCP-207, Chế từ vật kể chuyện (RCP-207), không mua được (đường rời bãi vỡ không ai bán, R2 của truyện) | Lắp động cơ chính, giai đoạn 5 | Sau MVP |
| BPR-101 | Bản thiết kế Súng lưới bậc 2 / Net Gun Mk2 Blueprint | Bản thiết kế | Ít gặp | 0 | - | Gần | RCP-301, Nghiên cứu mẫu sống DL-G01 (RCP-301) | Học để mở UPG-NET-2 (vùng lưới rộng hơn, chỉ số do gd-combat) | Sau MVP |
| BPR-102 | Bản thiết kế Súng gây mê / Tranq Gun Blueprint | Bản thiết kế | Ít gặp | 0 | - | Gần | RCP-302, Nghiên cứu mẫu sống DL-G04 (RCP-302) | Học để mở RCP-202 | Sau MVP |
| BPR-103 | Bản thiết kế Máy quét xung / Pulse Scanner Blueprint | Bản thiết kế | Ít gặp | 0 | - | Gần | Shop (K19) và hòm nhánh Seed Station thứ hai | Học để mở RCP-203 | Sau MVP |
| BPR-105 | Bản thiết kế Máy cắt thân tàu / Hull Cutter Blueprint | Bản thiết kế | Hiếm | 0 | - | Xa | Hòm cố định trong khoang nghiên cứu Station Flint, mở sau BS-3 (chương 3, gd-world), và Shop (K19) | Học để mở RCP-206 | Sau MVP |
| BPR-106 | Bản thiết kế tiện ích cảng / Port Utility Blueprint | Bản thiết kế | Hiếm | 0 | - | Xa | Shop (K19) | Sửa khoang Bến 2, bến 3 và tiện ích cảng | Sau MVP |
| STY-101 | Nhật ký trạm / Station Log | Vật manh mối | Đặc biệt | 0 | - | Gần | Mỗi xác Seed Station một bản (gd-story, gd-world) | Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi. Loại dữ liệu, sao được thành CGO-131 | MVP |
| STY-102 | Mảnh lõi dẫn đường Cinder / Cinder Nav Core Fragment | Vật nhiệm vụ | Đặc biệt | 1 | - | Gần | Xác Seed Station Cinder (gd-world, gd-story) | Vật liệu sửa khoang dẫn đường KH08 (chương 2), bị tiêu ở việc sửa đó, ghép đường đi | MVP |
| STY-103 | Mảnh lõi dẫn đường Wick / Wick Nav Core Fragment | Vật nhiệm vụ | Đặc biệt | 1 | - | Giữa | Xác Seed Station Wick (gd-world, gd-story) | Nộp ở khoang dẫn đường (Hoa tiêu), không tiêu vật, vào kho, ghép đường đi | Sau MVP |
| STY-104 | Manh mối lõi dẫn đường Flint / Flint Nav Core Clue | Vật manh mối | Đặc biệt | 0 | - | Xa | Xác Seed Station Flint (gd-world, gd-story) | Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi | Sau MVP |
| STY-105 | Manh mối lõi dẫn đường Cradle / Cradle Nav Core Clue | Vật manh mối | Đặc biệt | 0 | - | Cradle | Cradle Interior (gd-world) | Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi | Sau MVP |
| STY-111 | Bản tin trong máy liên lạc Cinder / Cinder Comm Message | Vật manh mối | Đặc biệt | 0 | - | Gần | Mã truyện MM1.2, máy liên lạc xác Seed Station Cinder (gd-story, gd-world) | Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi | MVP |
| STY-211 | Mảng vỏ thân Wick / Wick Hull Panel | Vật manh mối | Đặc biệt | 0 | - | Giữa | Mã truyện MM2.1, xác Seed Station Wick (gd-story, gd-world) | Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi | Sau MVP |
| STY-212 | Sổ trực Lantern / Lantern Watch Log | Vật manh mối | Đặc biệt | 0 | - | Giữa | Mã truyện MM2.3, Station Lantern (gd-story, gd-world) | Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi | Sau MVP |
| STY-213 | Bản Lodestar Survey treo tường ở Lantern / Lantern Lodestar Survey Copy | Vật manh mối | Đặc biệt | 0 | - | Giữa | Mã truyện MM2.4, Station Lantern (gd-story, gd-world) | Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi | Sau MVP |
| STY-311 | Bản ghi chuyển tin The Lattice và sổ hải trình / Lattice Relay Record | Vật manh mối | Đặc biệt | 0 | - | Xa | Mã truyện MM3.1, Veyl Waypost (gd-story, gd-world) | Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi | Sau MVP |
| STY-312 | Lời tuyên bố khu bảo hộ / Protected Zone Declaration | Vật manh mối | Đặc biệt | 0 | - | Xa | Mã truyện MM3.2 (gd-story, gd-world) | Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi | Sau MVP |
| STY-313 | Xác máy thu hoạch / Harvester Wreck | Vật manh mối | Đặc biệt | 0 | - | Xa | Mã truyện MM3.3 (gd-story, gd-world) | Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi | Sau MVP |
| STY-411 | Vết vũ khí trên vỏ Cradle / Weapon Scars on Cradle Hull | Vật manh mối | Đặc biệt | 0 | - | Cradle | Mã truyện MM4.1, bên trong và vỏ Cradle (gd-story, gd-world) | Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi | Sau MVP |
| STY-412 | Hiến chương định cư United Accord / United Accord Settlement Charter | Vật manh mối | Đặc biệt | 0 | - | Cradle | Mã truyện MM4.2, bên trong Cradle (gd-story, gd-world) | Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi | Sau MVP |
| STY-414 | Bản gốc Lodestar Survey / Original Lodestar Survey | Vật manh mối | Đặc biệt | 0 | - | Cradle | Mã truyện MM4.4, bên trong Cradle (gd-story, gd-world) | Tự ghi vào Sổ tay, mở cảnh truyện, không chiếm túi | Sau MVP |
| STY-301 | Mẫu mang dấu săn bắt Wardens / Hunt-marked Sample | Vật nhiệm vụ | Đặc biệt | 1 | - | Xa | Station Flint (chương 3, gd-story) | Nộp ở phòng nghiên cứu (Nhà sinh học), không tiêu vật, vào kho, mở cú lật Driftlife | Sau MVP |
| STY-401 | Hộp ghi hành trình Cradle / Cradle Flight Recorder | Vật nhiệm vụ | Đặc biệt | 1 | - | Cradle | Cradle Interior (chương 4, gd-story) | RCP-207, Nộp ở khoang dẫn đường (không tiêu vật, vào kho), mở cảnh truyện. Loại dữ liệu, sao được thành CGO-131 (RCP-141). Bị tiêu ở RCP-207 (sau mốc C5.6) | Sau MVP |
| STY-501 | Bản đồ sao thật / True Star Chart | Vật nhiệm vụ | Đặc biệt | 1 | - | Cradle | Data Core ở Warden Rig, khe V1, mở sau BS-5 (chương 5, gd-world). Không rơi từ Daskel. Tọa độ hành tinh thật do Sevra trao ở C5.6 là cảnh truyện, không phải vật | RCP-207, Nộp ở khoang dẫn đường (không tiêu vật, vào kho). Bị tiêu ở RCP-207 (Lõi dẫn hướng rời bãi vỡ, sau mốc C5.6) | Sau MVP |
| STY-701 | Gói tin mật / Sealed Dispatch | Vật nhiệm vụ | Đặc biệt | 1 | - | Xa | Khoang liên lạc nhận từ mạng lưới, tối đa 1 gói mỗi ngày từ khi mốc nối tình báo mở (chương 4 đến 5, gd-quan), không mua bán | RCP-422, Bị tiêu ở RCP-422 (đóng kiện tin mật). Mất khi rời phiên thì về lại khoang liên lạc (luật V4) | Sau MVP |
| STY-502 | Lệnh phục kích Cradle mang dấu Daskel / Daskel-Marked Ambush Order | Vật manh mối | Đặc biệt | 0 | - | Cradle | Data Core ở Warden Rig, khe M1, cùng chỗ STY-501, mở sau BS-5 (chương 5, gd-world). Không rơi từ Daskel | Tự ghi vào Sổ tay, mở cảnh truyện. Không sao thành CGO-131 (RCP-141 chỉ sao STY-101 và STY-401) | Sau MVP |
| STY-601 | Thẻ tên buồng ngủ đông / Cryo Pod Nameplate | Vật manh mối | Đặc biệt | 0 | - | Gần | Xác Seed Station, mỗi buồng đã tắt một thẻ (gd-story) | Tự ghi vào Sổ tay, hiện trên tường khoang buồng ngủ đông (đổi hình trạm, P2), không có công dụng chơi | Sau MVP |
| BNG-102 | Kén thoát hiểm của Ilsume / Ilsume Escape Pod | Vật kéo | Đặc biệt | kéo | - | Xa | Map nhánh N4 Waypost Outer Ring, cứu Sevra ở mốc C3.8 (gd-story, gd-world) | Đưa về trạm qua cửa khí (C3.8), sau đó kéo tới The Hearth ở N4 (C5.1). Không mở người vớt hay tính năng. Kén rơi thì nằm lại chỗ thả, lưu ở beacon cố định gần nhất đã qua (chưa qua beacon nào thì ở cửa N4), ngoài K2 (combat luật 42, 43, map 2.7.9) | Sau MVP |
| BNG-101 | Buồng ngủ đông (có người) / Cryo Pod | Vật kéo | Đặc biệt | kéo | - | Gần | Map nhánh xác Seed Station, người vớt theo K12 | Đưa về trạm, mở người vớt và tính năng | MVP |
<!--/B:ITEM-->

<!--B:CHECK-->
- Sinh bởi `projects/game-moi/sim/vat-pham.mjs` lúc 2026-11-20 10:34 UTC. Số vật phẩm: 146. Công thức: 84. Điểm khai thác: 14. Trang bị: 9. Kiện nhãn MVP: 9. Lỗi kiểm: 0.
- Vật liệu nhãn MVP (6 việc sửa khoang và 6 nâng cấp) quy ra tài nguyên thô: 272,2 GTĐ, tương đương 3,1 chuyến đầy túi (túi bậc 0 là 80 Khối, mật độ 1,1 GTĐ mỗi Khối), chưa tính nguyên liệu đóng kiện bán lấy Tally. Đây là kiểm nhất quán, không phải sim cân bằng.
<!--/B:CHECK-->

## 4. Trường hợp biên

| Trường hợp | Luật |
|---|---|
| Túi rỗng, bị kéo về | Không có món nào để giữ, không có hiệu ứng. Người chơi vẫn được tính chuyến kết thúc |
| Túi đầy, nhặt thêm | Không nhặt được, hiện cảnh báo "túi đầy" và Khối đang thiếu |
| Túi đầy đúng 0 Khối trống, đang khai thác điểm có số lượng lớn | Điểm giữ nguyên, người chơi thả đồ rồi quay lại. Tiến độ khai thác bị hủy nếu bỏ đi |
| Kho đạt 999 một loại | Phần thừa của loại đó khi về trạm bị bỏ tự động (không còn chiếm Khối trong túi), hiện thông báo. gd-tech kiểm bằng sim rằng 999 hiếm khi chạm tới |
| Hai người cùng khai thác một điểm | Người đến trước giữ. Người sau thấy điểm xám |
| Người chơi thả vật nhiệm vụ | Thả được, vật nằm 30 giây rồi về vị trí gốc nếu không ai nhặt (V4) |
| Spam nhặt và thả | Thả mất tối đa 1 lần mỗi giây, vật thả tồn tại 30 giây. Không có lỗi nhân đôi vì vật được trừ khỏi túi ngay |
| Rời phiên hoặc mất kết nối giữa chuyến | Theo C10: khách mất kết nối được giữ chỗ 15 giây, quá hạn hoặc chủ động rời thì tính như bị kéo về (K2), chỉ giữ 1 món, không phải đường về an toàn giữ nguyên túi. Host thoát thì thế giới về điểm lưu gần nhất (K23). Chơi một mình thoát giữa chuyến thì mất chuyến |
| Hai mẫu cùng loài, một sống một hạ | Hai vật phẩm khác ID, không gộp |
| Công thức đòi "một trong n loài" và kho có nhiều loài | Người chơi chọn loài dùng. Nhóm loài cùng dải, giá trị đầu vào tính theo loài rẻ nhất trong nhóm |
| Hết nguyên liệu lúc Mở ca khi đóng thùng | Loại hàng đó đóng được bao nhiêu thùng thì bày bấy nhiêu, không trừ nguyên liệu của thùng không đóng |
| Ngủ khi hàng đợi chưa xong | Hàng đợi hoàn thành khi ngủ. Không có hàng đợi chạy khi người chơi offline |
| Nâng cấp bậc cao hơn dải đã mở | Không cho. Công thức bậc đó mở khi dải mở (luật T5) |
| Người vào sau co-op | Nhận trang bị theo cấp nhóm (C4), túi rỗng |

## 5. Ràng buộc vật lý của luật

| Ràng buộc | Số hoặc lý do |
|---|---|
| Giá trị tối đa túi mang ra một chuyến | Sức chứa T0 nhân mật độ cao nhất. Với 80 Khối toàn Hiếm (7 đến 10 GTĐ mỗi Khối) thì 560 đến 800 GTĐ. Thực tế không đạt vì Hiếm chỉ có ở dải sâu và số lượng ít |
| Chuỗi COM không tăng giá trị vô hạn | COM chỉ nhân 1,25 đến 1,5 một lần, kiện tinh nhân thêm tối đa 1,25. Tổng chuỗi thô, COM, kiện tinh tối đa 1,5 nhân 1,25 bằng 1,88 lần GTĐ thô |
| Mẫu sống tối đa gấp đôi mẫu hạ | k tối đa 2,0, nên ép người chơi cân nhắc rủi ro bắt (lâu hơn) với thưởng |
| Không có vòng lặp tạo giá trị | Không công thức nào cho ra nguyên liệu thô. Mọi vòng đều tiêu GTĐ |
| Nâng cấp phải đi cùng dải | Vật liệu bậc 3 cần COM Giữa (chỉ làm được sau khi đi tới Giữa) |
| Số loại vật phẩm | Khoảng 143 vật phẩm có ID duy nhất và 83 công thức (script đếm, xem dòng sinh ở mục 3). Dev vẫn nhập được bằng một bảng dữ liệu |
| Hạn chế thùng | 1 người mang 1 thùng mỗi lần trong ca, tốc độ không đổi |

## Co-op 1 đến 4 người

| Số người | Luật vật phẩm |
|---|---|
| 1 | Một túi, một bộ dụng cụ chọn. Xưởng và cảng một người làm hết: mọi công thức chế được ngoài ca, mọi thùng mang được một mình. Số điểm khai thác bản 1 người (R=1,0) |
| 2 | Hai túi riêng, hai bộ dụng cụ riêng chọn từ cùng danh sách mở khóa chung. Số điểm khai thác theo k(2) của `map.md`. Có thể chia việc: một người khai thác, một người ở xưởng chế. Kho chung |
| 3 | Như 2, số điểm khai thác theo k(3) |
| 4 | Như 2, số điểm khai thác theo k(4) |

- Dùng chung (C3): kho, bản thiết kế, cấp dụng cụ, cấp nâng cấp bộ đồ, hàng đợi chế. Riêng: túi, dụng cụ đang mang, vật tiêu hao đang mang. Không có luật cần đúng N người: tất cả công thức, kiện và điểm khai thác chạy đúng với 1 người. Người vào sau nhận mọi nâng cấp đã mua (C4), không bị yếu. Người rời phiên giữa chuyến áp luật C10 (mục 4): không giữ túi, chỉ giữ 1 món.
Chia Oxy cứu đồng đội (C6): do gd-character định, hệ thống này không thêm vật phẩm. Bình Oxy nhỏ (CON-101) là vật tiêu hao dùng cho chính người mang, không thể thả cho người khác (đề xuất, chờ gd-character).

## 6. Yêu cầu cho engineer và tool

- Dữ liệu: mỗi vật phẩm một bản ghi tĩnh `ItemData` (id, tên, nhóm, độ hiếm, khối, GTĐ tham chiếu, dải, cờ nhãn MVP). Bản ghi động `ItemInstance` chỉ có id, số lượng, phẩm cấp (1 đến 3 sao cho mẫu và kiện sinh học), loài (cho kiện sống). Xuất từ script này qua JSON cho Unity (gd-tech làm).
- Công thức: `RecipeData` (id, nơi chế, đầu vào [id hoặc nhóm id, số lượng], đầu ra, thời gian hoặc "qua đêm", cờ mở bằng vai, chương hoặc BPR). Nhóm id cho phép chọn một trong n loài.
- Điểm khai thác: `SalvageNodeData` (id, độ cứng hoặc cấp khóa, dụng cụ, thời gian bậc 1, số lần quay, bảng rơi [id, trọng số, số lượng]).
- Sự kiện cần: `item_pickup` (id, số lượng, nguồn), `item_craft` (recipe id, nơi chế), `cargo_pack` (kiện id, phẩm cấp), `item_lost_on_recall` (danh sách mất). gd-tech ghi vào Event Tracking.
- Đồng bộ co-op: kho, hàng đợi chế, bản thiết kế, nâng cấp là trạng thái dùng chung, đồng bộ qua host. Túi, khai thác điểm (khóa điểm cho một người) là trạng thái riêng người chơi có xác nhận host (chống nhân đôi). Điểm khai thác mới sinh theo hạt giống chuyến cho mọi người.
- Nơi phải cùng đổi khi đổi luật: script `vat-pham.mjs`, bảng Sheet Salvage, ITEM LIST, Recipe, tab Shop (gd-economy), tab Upgrade, `nguoi-choi.md`, `combat-driftlife.md`, `map.md`, `tram-va-cang.md`.
- Kiểm tự động: `node projects/game-moi/sim/vat-pham.mjs` kiểm ID duy nhất, đầu vào công thức có trong ITEM LIST, mọi vật phẩm có nguồn nhận và nguồn tiêu, tối thiểu 2 tài nguyên riêng mỗi dải, biên lợi từng loại công thức, chi phí nâng cấp theo công thức, tỉ lệ mẫu sống trên hạ từ 1,5 đến 2,0. Thoát mã 1 khi có lỗi.

## 7. Yêu cầu cho art, UI, tutorial, audio

| Sự kiện | Hình | Âm | Text và tutorial | Ưu tiên |
|---|---|---|---|---|
| Nhặt vật phẩm | Vật bay vào người, số đếm cộng lên HUD | Tiếng nhặt cao độ theo độ hiếm | Tutorial 1: nhặt Mảnh vỡ trôi | MVP |
| Khai thác điểm | Thanh tiến độ trên điểm, tia khoan, mảnh vụn bay | Tiếng khoan, tiếng vỡ | Tutorial 2: khoan quặng và băng, tutorial 3: nạy hòm | MVP |
| Cổng mềm (dụng cụ yếu) | Thanh tiến độ chậm, biểu tượng khóa nửa mở | Tiếng khoan ì ạch | Gợi ý "cần bậc cao hơn để nhanh" | MVP |
| Túi đầy | Thanh Khối đổi màu đỏ, vật phẩm thừa bật ra | Tiếng cảnh báo ngắn | Tutorial 4: thả đồ | MVP |
| Bị kéo về | Màn chọn 1 món, các món còn lại mờ đi | Tiếng ngắt nhẹ | Giải thích luật 1 món ở lần đầu | MVP |
| Chế tại xưởng | Máy ép, lò, hàng đợi | Tiếng máy theo loại công thức | Tutorial 5: chế COM đầu tiên | MVP |
| Đóng thùng lúc Mở ca | Hộp gấp lại hàng loạt, nhãn loại và phẩm cấp | Tiếng dán, thả hộp | Tutorial 6 (cảng, gd-ux và gd-quan) | MVP |
| Bậc hiếm | Màu viền và hình dạng biểu tượng khác nhau, không chỉ dựa vào màu (cho người mù màu) | Nhạc nhặt tăng cao độ theo bậc | Chú giải trong kho | MVP |
| Nâng cấp bộ đồ hoàn thành | Bộ đồ đổi hình theo trục, trạm đổi hình khi sửa xong khoang | Tiếng khởi động | Màn nhận đồ chế xong | MVP |
| Học bản thiết kế | Bản vẽ mở ra, dụng cụ mới hiện | Tiếng mở khóa | Tutorial dụng cụ mới | Sau MVP |

Art cần ID danh sách icon: mọi ID trong ITEM LIST (khoảng 130) cần icon vector, nhóm theo hình khối: phế liệu (mảnh góc cạnh), khoáng (tinh thể), băng (khối trong), linh kiện (bo mạch), mẫu (thể sinh học), kiện (hộp). GDM đưa vào tab Assets.

## 7b. Cảm giác (game feel)

- Tham chiếu: khoảnh khắc "khoan và thấy tiến độ" của Dave the Diver khi mở nhánh khai thác, tiếng nhặt tăng cao độ theo độ hiếm. Không lấy asset, chỉ lấy nhịp phản hồi: nhặt trả lời trong dưới 0,1 giây, khoan có tiến độ nhìn thấy, hoàn thành có phản hồi rõ.
- Phản tham chiếu: không làm thanh tiến độ khoan nhàm chán như chờ. Điểm khoan mất 6 đến 14 giây ở bậc 1 nên cần có rung nhẹ và mảnh vụn để không thành thời gian chết. Không để nhặt bị kéo dài quá 1 giây.
- Thời gian phản hồi: nhặt 0,1 giây, hoàn thành khai thác hiện hiệu ứng trong 0,2 giây, đóng thùng lúc Mở ca, hộp gấp trong 0,5 giây.

## 8. Cách đo thành công và tiêu chí nghiệm thu

- Chỉ số kết quả: số GTĐ trung bình mang về mỗi chuyến (do gd-tech đo ở sim). Thời gian làm đầy túi (mục tiêu 60 đến 70% chuyến, chương 1). Tỉ lệ chuyến dùng cả khoan, nạy hòm và hạ trong cùng chuyến ở chương 1 (mục tiêu trên 90%). Tỉ lệ kiện tinh trên kiện thô khi có đủ nguyên liệu (mục tiêu trên 50% sau chương 1).
- Chỉ số trải nghiệm: playtest ghi người chơi hiểu vì sao đồ này đáng nhặt, bỏ gì khi túi đầy.

Tiêu chí nghiệm thu (gd-qa kiểm pass hoặc fail):
1. `node projects/game-moi/sim/vat-pham.mjs` thoát mã 0, 0 lỗi.
2. Mọi vật phẩm trong ITEM LIST có nguồn nhận và nguồn tiêu (script).
3. Mọi công thức chỉ dùng vật phẩm có trong ITEM LIST (script).
4. Mỗi dải có ít nhất 2 tài nguyên riêng (script).
5. Biên lợi mọi công thức nằm trong khoảng ở luật C5 (script).
6. Tỉ lệ ròng mẫu sống trên hạ từ 1,5 đến 2,0 cho mọi loài cỡ S và M có mẫu sống (script kiểm). Mẫu sinh thiết loài cỡ L đứng ngoài K9 (log 66), script chỉ kiểm khoảng 0,4 đến 0,5 theo thiết kế.
7. Không ghi giá Tally ở file này. Tìm "Tally" chỉ thấy trong ngữ cảnh giá do gd-economy giữ.
8. Mỗi nhãn MVP có số lượng đủ cho chương 1: 6 tài nguyên, 5 COM, 9 kiện, 6 nâng cấp, 2 vật tiêu hao, 5 dụng cụ cộng chìa Bộ kích nguồn, 4 loài Driftlife trong đó 3 loài cỡ S bắt sống được. Mỗi luật có nhãn MVP hoặc Sau MVP.
9. Không còn dấu chờ của gd-story, gd-character, gd-combat, gd-world, gd-quan. Chỉ còn chờ gd-economy (giá, quy đổi GTĐ), gd-ux, gd-tech (script kiểm đã có sẵn, sim đợt 2).
10. Kiểm sim đợt 2 (gd-tech): thời gian làm đầy túi, thu nhập chuỗi thô và chuỗi tinh trong một ngày, mức độ trội của một chiến lược nhặt (script nên in).

## 9. Lệch khỏi tham chiếu (Dave the Diver)

Dave làm thế nào (theo `docs/knowledge/indie/06-dave-the-diver-cau-truc.md`): sức chứa và oxy là hạn chế thật, Gold nâng sức chứa, oxy, độ sâu [D14]. Map và sinh vật sinh lại mỗi chuyến [D2][D4]. Bắt sống bằng Net Gun hoặc Remote Drone kèm Tranquilizer [D8]. Farm nhân giống cá, món có Taste và giá [D8][D15]. Cá hiếm hơn nằm sâu hơn [D5].

| Điểm | Dave | The Novent | Bằng chứng không tệ hơn |
|---|---|---|---|
| Đồ nhặt chỉ để bán và nấu | Cá và nguyên liệu bán lấy Gold và nấu ở quán [D12][D14] | Mọi vật phẩm đều có nơi tiêu nhìn thấy ở trạm: sửa khoang, luyện, nâng cấp, kiện (P2). Không có vật phẩm chỉ để bán lấy số | Nhất quán với P2, kiểm bằng script (mọi item có sink) |
| Ngăn xa nhau hai nửa | Quán sushi nhận cá, nấu ra món | Cảng nhận kiện, kiện tinh phải qua Xưởng, giá trị thêm 1,1 đến 1,25 | Chưa đo, sim đợt 2 |
| Mẫu sống | Cá sống cho nhiệm vụ đặc biệt và farm [D8][D11] | Mẫu sống cho 3 nơi tiêu (nuôi, nghiên cứu, kiện sống) và có hệ số 1,5 đến 2,0 lần mẫu hạ | Đúng mục tiêu khung mục 9, kiểm bằng script |
| Cổng dụng cụ | Weapon và nâng cấp qua NPC [D10] | Dụng cụ mở khóa cho cả nhóm, bậc thấp vẫn khai thác được thứ cứng hơn nhưng chậm gấp 4 | Giống tinh thần K6 (cổng mềm) và giữ co-op công bằng (C4) |
| Chuỗi giá trị | Món có cấp nâng Taste tăng giá [D15] | Giá trị tăng theo chuỗi thô, luyện, kiện tinh, không có cấp nâng từng vật phẩm | Ít thứ phải theo dõi hơn, vừa với 4 dev |
| Hai tiền | Gold và Bei [D12] | Một đồng Tally (K18) | Theo khung |

## 10. Câu hỏi mở

| # | Câu hỏi | Đề xuất | Ai quyết |
|---|---|---|---|
| 1 | Túi đo bằng Khối hay ô, sức chứa khởi điểm | Khối, 80 Khối khởi điểm (GDM chốt log 54). Nếu gd-character chọn ô thì 1 Khối bằng 1 ô, vật nặng chiếm nhiều ô | gd-character |
| 2 | Tên và thứ tự loài Driftlife | Đã khớp với `combat-driftlife.md`: Gần 111 đến 115, Giữa 211 đến 215, Xa 311 đến 315. Mẫu sinh thiết BPS cho 4 loài L. Mẫu boss SMP-192 và SMP-292. Phao kéo CON-106, Kim sinh thiết CON-107, Lồng mẫu TOL-501 | gd-combat xác nhận |
| 3 | Bình Oxy nhỏ có phá P1 ("không hồi Oxy miễn phí giữa chuyến") không | Giữ, vì tốn Khối và vật liệu chế, chỉ hồi 40 điểm (khoảng 12% bình bậc 0), tối đa 2 bình mỗi chuyến (luật T8), hủy nếu bị đánh | gd-character, GDM |
| 4 | Số ô dụng cụ | Đã chốt theo `nguoi-choi.md`: 3, 4, 5 ô theo Đai dụng cụ (UPG-RACK). Vật tiêu hao nằm trong túi | gd-character (đã trả lời) |
| 5 | Chỉ số combat của dụng cụ theo bậc, cooldown, tầm | gd-combat giữ. Đề xuất dụng cụ không độ bền, chi phí là vật tiêu hao hoặc cooldown | gd-combat |
| 6 | Tốc độ mang kiện nhiều người | Bỏ từ đợt 9: không có cỡ kiện, không khiêng chung, thùng mang một lần một thùng, tốc độ không đổi | gd-quan (Lead chốt 2026-11-20) |
| 7 | Nhu cầu vật liệu sửa khoang, số bước lắp động cơ chính | Bảng ở mục 2.7 | gd-quan |
| 8 | Quy đổi GTĐ ra Tally, mức giá kiện, giá linh kiện ENG, giá nâng cấp | Hệ số GTĐ sang Tally là một số duy nhất theo chương hoặc Hạng cảng, gd-economy đặt | gd-economy |
| 9 | Số điểm khai thác theo số người k(N), mật độ, vị trí | Do gd-world giữ ở `map.md`, vật phẩm không có núm riêng | gd-world, GDM (mục tiêu 70 đến 85%) |
| 10 | Vật kể chuyện: tên riêng và nơi đặt | ID đã gán theo danh mục gd-story: STY-101 Nhật ký trạm, STY-102..104 Mảnh lõi dẫn đường (Cinder, Wick, Flint), STY-105 Lõi dẫn đường Cradle, STY-301 Mẫu mang dấu săn bắt, STY-401 Hộp ghi hành trình, STY-501 Bản đồ sao thật, STY-601 Thẻ tên buồng ngủ đông | gd-story |
| 11 | Bộ kích nguồn (TOL-401) từ đâu | Đã chốt với gd-world: công thức đầu của Xưởng sau khi vớt Kỹ sư (RCP-205). Nhịp khóa và chìa đầu game được giữ | gd-world (đã trả lời) |
| 12 | Giai đoạn 5 động cơ dùng ENG-105 chế từ STY, không mua ở Shop | Giữ (lý do R2 của truyện). Nếu gd-quan cần 5 linh kiện mua được thì đổi RCP-207 thành mua | gd-quan |
| 13 | Kiện đồ Trái Đất (CGO-109) cho thương nhân mê đồ Trái Đất (gd-story) | Đã thêm RES-106 Đồ Trái Đất vụn trong hòm kỹ thuật, kiện thô CGO-109 | gd-quan |

## Điểm tự quyết

| # | Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|---|
| 1 | Đơn vị giá trị trước khi có giá Tally | Chỉ số GTĐ tương đối (RES-101 bằng 1,0), không phải Tally | Cần một thước để kiểm biên lợi chuỗi và tỉ lệ mẫu sống 1,5 đến 2,0 mà không ghi giá | Không có thước (không kiểm được), ghi giá Tally (trái brief) | Rẻ |
| 2 | Túi tính bằng Khối, không phải ô | Khối, mỗi vật phẩm có Khối nguyên 1 đến 2 | Một số đơn giản, gd-character đổi sang ô được bằng 1 Khối bằng 1 ô | Ô lưới tự do (khó cho gamepad, tốn UI) | Vừa |
| 3 | Dụng cụ là mở khóa cho cả nhóm, không có dạng vật | Mở khóa nhóm | Khớp C3, C4. Bạn vào giữa chừng không yếu, ít thứ trong kho phải theo dõi | Mỗi người sở hữu dụng cụ riêng | Vừa |
| 4 | Dụng cụ không có độ bền | Không độ bền | K17 không chi phí duy trì. Chi phí dụng cụ là vật tiêu hao hoặc cooldown | Độ bền và sửa chữa | Rẻ |
| 5 | Cổng mềm ở khai thác (bậc thấp vẫn làm nhưng chậm 4 lần) | Mềm | Cùng tinh thần K6. Cho người giỏi liều sớm | Cổng cứng (chặn hẳn) | Rẻ |
| 6 | Vật nhiệm vụ chiếm túi, mất thì về vị trí gốc chuyến sau. Vật manh mối tự ghi Sổ tay | Chiếm túi, vị trí gốc | P4 cấm manh mối bắt buộc nằm ở chỗ mất được. K2 nói mất phần còn lại của túi, STY không nằm trong túi | Coi STY là vật thường | Rẻ |
| 7 | Kho 999 mỗi loại | 999 | UI gọn, không đầy trong thực tế | Kho giới hạn tổng | Rẻ |
| 8 | "1 món" ở K2 là 1 đơn vị một loại | 1 đơn vị | Người chơi giữ món quý nhất. Kho cheap stack không bị giữ hết | 1 loại (cả stack) | Rẻ |
| 9 | Chuỗi giá trị 3 bước: thô, COM, kiện | 3 bước, hệ số 1,25 đến 1,5 và 1,1 đến 1,25 | Ca cảng có chỗ để chế thêm (K13) mà không phá nhịp ca 3 đến 5 phút | 2 bước, hoặc cấp nâng Taste như Dave | Vừa |
| 10 | Mẫu sống có 3 nơi tiêu | Nuôi, nghiên cứu, kiện sống | K9 nói "nuôi, nghiên cứu, đơn cảng giá cao", tôi gắn mỗi nơi vào một công thức | Chỉ nuôi | Vừa |
| 11 | Nghiên cứu đổi mẫu sống ra bản thiết kế dụng cụ | Có, mỗi loài mở một bản | Cho mẫu sống giá trị thiết kế, nối nhà sinh học với tiến trình dụng cụ | Nghiên cứu cho điểm kinh nghiệm (trái K18) | Vừa |
| 12 | Bình Oxy nhỏ là vật tiêu hao hồi một phần Oxy | Có, giá bằng chế tạo và Khối | Cho người chơi liều đổi chỗ túi lấy thêm thời gian, không miễn phí (P1) | Không có vật tiêu hao hồi Oxy | Rẻ |
| 13 | Hệ số tài nguyên theo số người | Bỏ núm riêng của vật phẩm, dùng k(N) của gd-world ở `map.md` | gd-world chỉ ra hai núm cho cùng một việc, và mục tiêu khung 70 đến 85% đang làm mỗi người nhặt ít (khoảng 35% so với chơi một mình) | N mũ 0,36 của bản trước | Rẻ |
| 14 | Tài nguyên dải trước giữ nguyên sink ở mọi giai đoạn | Có (sửa khoang, luyện COM, kiện thô, nâng cấp bậc thấp) | Tránh tài nguyên dải Gần trở thành rác sau chương 2 | Tài nguyên dải trước hết giá trị | Rẻ |
| 15 | Linh kiện ENG-105 không mua được | Chế từ STY (RCP-207) | Khớp lý do R2 của truyện (tọa độ không ai bán) | Mua ở Shop | Rẻ |
| 16 | Chìa mở lối map nhánh | Cổng cứng, không cần mang theo, nhóm mở khóa thì ai cũng mở. Bộ kích nguồn là công thức đầu của Xưởng | Tránh quên mang chìa trong co-op, giữ nhịp khóa và chìa đầu game (gd-world, gd-story: Linh cần dụng cụ Ingrid chế) | Chìa chiếm ô dụng cụ, chìa riêng từng người | Rẻ |
| 17 | Mẫu sinh thiết (BPS) cho loài L | Nhóm vật phẩm riêng, vào túi, giá ròng 0,45 lần E(hạ) cùng loài, đứng ngoài K9 | GDM đã sửa K9 chỉ áp cho loài bắt sống được (log 66), sinh thiết không phải bắt sống | Nâng k lên 1,5 đến 2,0 | Vừa |
| 18 | Mẫu boss (xua đi) | SMP-192 và SMP-292, GTĐ bằng hoặc hơn hạch một chút | Hai cách kết ở chương 1 và 2 cho giá trị gần bằng nhau để chọn theo lối chơi, không theo thưởng | Chỉ hạ mới có thưởng | Rẻ |
| 19 | Thức ăn nuôi | FED-101, 201, 301, 1 mỗi con mỗi ngày, làm từ mô sinh học, rẻ hơn sản phẩm nuôi từ 1,5 lần (script kiểm) | gd-quan cần ID. Cho mô sinh học thêm chỗ tiêu và nuôi có lời | Nuôi không tốn gì | Rẻ |
| 20 | Bản sao dữ liệu (CGO-131) | Sao từ STY loại dữ liệu bằng 1 COM-104, vật gốc ở lại, hệ số giá trị 1,5 đến 2,5 | Giữ luật STY không bán của gd-quan và P4 | Bán thẳng vật gốc | Rẻ |
| 21 | Kiện vật tư (CGO-141) cho nhóm hàng đồ chế HC08 | 2 Bình Oxy nhỏ cộng 2 Lưới cuộn | Đồ chế duy nhất không phải COM mà bán được | Bán thẳng dụng cụ (dụng cụ là mở khóa nhóm, không có dạng vật) | Rẻ |
| 22 | Giá trị một kiện theo túi 80 Khối | GTĐ một kiện bằng một phần mười giá trị đơn một ca của chương (khoảng 13,6 chương 1, 42,5 chương 2, 104 chương 3, theo gd-economy), nên mỗi ca khoảng 10 kiện. Từ đợt 9 bán theo thùng, 1 kiện = 2,5 thùng, khoảng 25 thùng một ca một người | Bản trước chia nhỏ theo túi 20 Khối (2 đến 3 GTĐ mỗi kiện) khiến đơn một ca cần 54 kiện, Tally bị chặn bởi sức ca cảng (QA GD-031, gd-economy) | Kiện 2 đến 3 GTĐ | Rẻ |
| 23 | Gộp Dụng cụ nạy vào Dụng cụ khai thác (TOL-102), bỏ TOL-101 | Một dụng cụ khai thác khoan và nạy | Khoan và nạy là cùng thao tác. Gộp để 3 ô dụng cụ ở bậc 0 còn chỗ cho dụng cụ hạ và dụng cụ thứ ba | Hai dụng cụ khai thác riêng | Vừa |
| 24 | Súng lưới, Lồng mẫu, Dùi xung mở bằng quest Kỹ sư ở chương 1 | MVP, không cần bản thiết kế | Log 49: Súng lưới cỡ S ở chương 1, một loại hàng sống ở chương 1. BPR-101 đổi thành bản thiết kế Súng lưới bậc 2 (đề xuất gd-combat) | Súng lưới mở ở chương 2 bằng BPR | Rẻ |
| 25 | Đánh số bậc nâng cấp bộ đồ theo gd-character (bậc 0 là khởi điểm) | UPG-OXY-1 là nâng cấp đầu tiên, lớp chi phí bằng bậc cộng 1 | Khớp T-OXY, T-TUI, T-DAY, T-VO, T-DUNGCU của `nguoi-choi.md`. Thêm trục Đai dụng cụ (UPG-RACK-1 và 2) | Bậc 1 là khởi điểm (bản trước) | Rẻ |
| 26 | Bình Oxy nhỏ hồi 40 điểm Oxy | 40 điểm, 1,5 giây, 1 Bình mất 2 Khối, nhãn MVP | Khớp đề xuất của gd-character (khoảng 12% bậc 0), trần 2 bình mỗi chuyến, kiểm bằng sim | Hồi nhiều hơn | Rẻ |
| 27 | Giảm lượng nhặt tay SLV-101 xuống 1 lần quay | 1 lần quay, gd-world rải thưa | Brief đợt 1b hỏi rải thưa hay giảm lượng. Giảm lượng là việc của tôi và không cần map đổi | Chỉ rải thưa | Rẻ |
| 28 | Nhân đôi giây khai thác mọi điểm khai thác (GD-030) | Giây ở bậc 1 nhân 2 (hằng số TIME_X trong script) | Sim chuyến của gd-tech: chuyến chương 1 chỉ 1,1 phút, khung muốn 4 đến 6. Khoan lâu hơn hợp cảm giác tháo dỡ, tỉ lệ giữa các node không đổi | Giữ giây cũ | Rẻ |
| 29 | Boss chương 1 có chỗ dùng ở MVP | Động cơ giai đoạn 1 (KH13, MVP) nhận 1 hạch hoặc 1 mẫu boss BS-1 | QA GD-031 lỗi 4: SMP-191 và SMP-192 nhãn MVP nhưng chỉ dùng ở khoang dẫn đường (chương 2). STY-102 giữ nhãn MVP theo gd-quan: nhặt ở MVP (Station Cinder), nộp ở khoang dẫn đường chương 2 (KH08 là Sau MVP) | Đổi nhãn sang Sau MVP | Rẻ |
| 30 | Lồng sinh vật sống giá theo loài | GTĐ lồng bằng GTĐ mẫu sống bên trong nhân hệ số sao | QA GD-031 lỗi 5: một giá phẳng làm hệ số k sập (G02 ròng 0,94) | Một giá phẳng cho cả dải | Vừa |
| 31 | Trần Bình Oxy nhỏ 2 bình mỗi chuyến | 2 bình trong túi mỗi chuyến | QA GD-031 lỗi 9: không có trần thì đổi Khối túi lấy Oxy vô hạn, phá K1 và K22 | Không trần, chi phí leo thang | Rẻ |
| 32 | Con nuôi vào lồng giao đơn | Giá lồng nuôi bằng 0,5 lần lồng bắt thật, tối đa 1 lồng mỗi loài mỗi ngày | QA GD-031 lỗi 10: tránh vòng lặp nuôi rồi bán không tốn chuyến | Con nuôi không giao được | Rẻ |
| 33 | SLV-112 nhả tài nguyên thô thay vì COM | RES-104, RES-103, RES-106 | QA GD-031 lỗi 21: nhả COM bỏ qua hệ số chuỗi 1,25 đến 1,5 và bước Xưởng, mật độ 4,87 trội | Giữ COM | Rẻ |
| 34 | Rời phiên theo C10 | Giữ chỗ 15 giây rồi áp luật 1 món | QA GD-031 lỗi 1: bản trước cho giữ túi trong dữ liệu, trái C10 | Giữ túi | Rẻ |
| 35 | Kiện tin mật ăn giá bằng kiện vỏ bọc | CGO-421 hệ số 1,0, gói tin STY-701 giá 0 | Nối tình báo là sức nặng truyện, không phải nguồn Tally mới (log 87, không thêm hệ thống). Một ngày tối đa 1 gói nên kiện tin mật chỉ là một dòng đơn | Kiện tin có giá riêng | Rẻ |
| 36 | Kén của Sevra là vật kéo riêng BNG-102, không dùng chung BNG-101 | BNG-102 nhãn Sau MVP, dải Xa, kéo như BNG-101 nhưng không mở người vớt, kéo hai lần (C3.8 về trạm, C5.1 tới The Hearth) | BNG-101 gắn người vớt theo K12, dùng chung sẽ mở nhầm người vớt (gd-story đề nghị ID riêng hoặc dùng chung) | Dùng chung BNG-101 | Rẻ |
| 37 | Bán theo thùng, bỏ cỡ kiện và tốc độ mang | 1 kiện = 2,5 thùng, lồng sống không chia. Đóng thùng tự động lúc Mở ca, không tốn thời gian ca. Kiện tinh và lồng làm trước ca | Lead chốt ca cảng theo khung Dave 2026-11-20 (D0, D1, D2), bot đo bản mỗi tàu một kiện thì rảnh 76% | Giữ cỡ Nhỏ, Vừa, Lớn và tốc độ mang | Vừa |

## Phản biện khung

- Không có luật K hay C nào cần đổi để hệ thống chạy. Sáu điểm cần theo dõi, không phải phản biện chặn (hai điểm cuối là vấn đề cân bằng chương 1 thấy được ngay từ bảng, cần sim đợt 2 xác nhận):

| Điểm | Vấn đề | Lý do | Bằng chứng | Phương án thay |
|---|---|---|---|---|
| K2 (ghim 1 món, log 46) cùng K3 (túi đầy) | Người chơi giỏi nhặt đồ hiếm Khối 1 sẽ luôn giữ được món quý nhất, nên bị kéo về ít đau với đồ nhỏ giá trị cao | Mật độ giá trị lớn ở món nhỏ (Bo mạch cháy 3,0 GTĐ mỗi Khối) | Chưa đo, sim đợt 2 | Nếu sim cho thấy, đổi thành "1 món bất kỳ trừ món có GTĐ lớn nhất" hoặc giữ thêm 1 món mỗi bậc túi |
| K9 và mẫu sinh thiết loài L | GDM đã xử, log dòng 66: K9 chỉ áp cho loài bắt sống được (cỡ S, M), sinh thiết loài L đứng ngoài. Giữ BPS bằng 0,45 lần E(hạ) | Sinh thiết không phải bắt sống | Sim S2 của gd-tech: sinh thiết mất 7,7 đến 16,9 giây, hạ 33,6 đến 44,9 giây | Không cần đổi |
| K9 và hệ số k | Hệ số k 1,5 đến 2,0 chỉ có nghĩa khi bắt sống không tốn nhiều hơn 1,5 đến 2,0 lần công hạ. Nếu bắt lâu hơn gấp 3 thì người chơi hạ | Chi phí bắt do gd-combat định | Chưa đo | gd-combat đưa thời gian bắt trung bình, tôi chỉnh k hoặc thêm thưởng sao |
| K19 (Tally chỉ để nâng cấp và linh kiện) và C4 (nâng cấp mua một lần cho nhóm) | Nâng cấp mua một lần cho cả nhóm thì nhóm 4 người trả giá tương đương 1 người nhưng thu nhập tài nguyên theo k(4) của gd-world, nên có thể nhanh hơn hoặc chậm hơn mục tiêu 70 đến 85% thời gian tùy núm đó | Hai luật cùng làm co-op nhanh hơn | Chưa đo | gd-economy chỉnh giá theo số người, gd-world chỉnh k(N) |
| K21 (mỗi chương một kiểu chơi mới) cùng thời lượng chương 1 (1,5 đến 2 giờ) | GDM đã chốt túi 80 Khối (log 54): vật liệu cho 6 việc sửa khoang và 6 nâng cấp nhãn MVP còn khoảng 3,1 chuyến đầy túi (dòng kiểm ở mục 3), thay vì 11,2 chuyến ở túi 20. Nguy cơ chuyển sang chiều ngược lại: túi 80 đầy rất lâu nên nguyên liệu dư, cảng không còn thiếu hàng. Giây khai thác đã nhân đôi (GD-030) để bù | Chi phí nâng cấp 25 GTĐ ở bậc 1 bằng khoảng một phần ba chuyến đầy túi | Dòng kiểm ở mục 3 (272,2 GTĐ thô, ước, chưa sim lại với túi 80) | gd-tech chạy lại sim chuyến và gd-economy chạy lại sim kinh tế với túi 80. Nếu dư nguyên liệu thì tăng chi phí vật liệu hoặc giảm giây nhặt |
| Điểm khai thác nhặt tay (SLV-101) | GDM và gd-world đã chốt rải thưa (map.md 2.4.8): SLV-101 chiếm tối đa 25% khe SP-R, hai khe cách nhau ít nhất 2 u, nhặt tay còn xấp xỉ khoan về GTĐ mỗi giây (số ở `map.md` mục 3.8). Giữ thêm 1 lần quay của tôi vì gd-world tính từ bảng này. Bản trước nhặt tay nhanh gấp 2,5 lần khoan về GTĐ mỗi giây. Đã giảm lượng (1 lần quay), còn gấp khoảng 1,2 lần khoan (tỉ lệ này không đổi khi nhân đôi giây khai thác ở GD-030). Còn nguy cơ khoan và nạy thành vô nghĩa nếu gd-world rải dày | Nhặt tay không tốn thời gian khai thác | Bảng điểm khai thác ở mục 3, chưa tính thời gian bay giữa các điểm | gd-world rải thưa. Cần sim hành trình. GDM đã giao gd-economy và gd-tech đo (log 53) |

## Lịch sử thay đổi

| Ngày | Thay đổi | Lý do | Ai |
|---|---|---|---|
| 2026-11-20 | Bản đủ đầu tiên, thay Danh mục sơ bộ | Brief GD-025 | gd-items |
| 2026-11-20 | Đợt 4 sau QA GD-031: K9 sinh thiết 0,45, K26 bình Oxy, đúng 1 kiện chế (CGO-113), kiện lớn lại theo túi 80 Khối, The Scattering | Biên bản GD-031, brief đợt 4 | gd-items |
| 2026-11-20 | Dán 3 tab Salvage, ITEM LIST, Recipe lên Sheet (GD-032), đối chiếu KHỚP | Brief đợt 5 | gd-items |
| 2026-11-20 | Đợt 6 phản diện mới (GD-033): thêm STY-701, CGO-421, RCP-422 (luật C7), BNG-102, đổi STY-301, 412, 502, bỏ ý bản khảo sát bị giấu, sửa nguồn STY-501 và 502, kén ngoài K2 | Brief đợt 6, phiếu QA GD-033 | gd-items |
| 2026-11-20 | Đợt 9 GD-052: bán theo thùng (1 kiện = 2,5 thùng, lồng không chia), bỏ cỡ Nhỏ Vừa Lớn, bỏ tốc độ mang, bỏ máy đóng kiện và kệ kiện trong ca, đóng thùng tự động lúc Mở ca (G2, G3, G4), sửa tab ITEM LIST và Recipe | Lead chốt ca cảng theo khung Dave, brief đợt 9 | gd-items |
| 2026-11-20 | Luật M4: nhãn BS-2 đến BS-5, STY-501, STY-502 đổi từ MVP sang Sau MVP (khớp combat BO8) | Phiếu QA GD-038 N1 | gd-items |
| 2026-11-20 | Bảng biên: host thoát về "điểm lưu gần nhất" thay "lần lưu đầu ngày" (khớp K23, C10) | Phiếu QA GD-038 N2 | gd-items |
