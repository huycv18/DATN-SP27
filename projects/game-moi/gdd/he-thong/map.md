# GDD hệ thống: Map tổng, map nhánh, hazard, Recall Beacon, Skiff, nhịp chuyến

Project: game-moi (The Novent) | Chủ sở hữu: gd-world | Trạng thái: bản đủ, số là khởi điểm ước, chưa sim (2026-11-20, GD-026) | Nguồn: `../00-khung-game.md` (K1 đến K9, C1 đến C8, mục 7, 9, 12), `../../log-gdm-tu-quyet.md`, brief `../../briefs/dot1-gdd-he-thong.md`

Tên hiển thị đã chốt cho The Novent. The Veyl gọi các dải theo điểm neo Ember, đàn Shepherd Whale và ánh tinh thể trong Glass Nebula. Tên các khoang giữ cách gọi theo công dụng của thủy thủ đoàn hoặc của The Wardens. Tên phòng trong spec greybox vẫn dùng tiếng Việt.
Số trong file sinh từ `projects/game-moi/sim/ngan_sach_oxy.py` (bảng ở `projects/game-moi/sim/ngan-sach-oxy.md`). Đây là phép tính tất định, chưa có sim nhiều seed (việc của gd-tech ở đợt 2).

## Danh mục

| Mã | Loại | Tên | Ghi chú | Nhãn |
|---|---|---|---|---|
| Z1 | Dải | Vành đai ngoài, Ember Anchorage | Mở từ đầu chương 1. Môi trường E0 | MVP |
| Z2 | Dải | Vành đai trong, Shepherd Belt | Mở ở mốc đóng chương 1. Môi trường E1 | Sau MVP |
| Z3 | Dải | Vùng trung tâm, Glass Nebula | Mở ở mốc đóng chương 2. Môi trường E2 | Sau MVP |
| E0 | Môi trường | Chân không sạch / Clear Vacuum | Không cần cấp vỏ bộ đồ | MVP |
| E1 | Môi trường | Lạnh sâu / Deep Cold | Cần vỏ bộ đồ (T-VO) cấp 1 | Sau MVP |
| E2 | Môi trường | Bức xạ tinh vân / Nebula Radiation | Cần vỏ bộ đồ (T-VO) cấp 2 | Sau MVP |
| E3 | Môi trường | Lõi rò / Core Leak | Cần vỏ bộ đồ (T-VO) cấp 3. Chỉ trong Cradle Interior và Warden Rig | Sau MVP |
| R0 | Ranh | Rạn vụn / Shatterline | Dải va chạm dày 8 u ở 8 u đầu cột 1 của dải chưa mở (ranh trong của dải đó). Không phải ô, không tính vào ô cố định | MVP |
| H01 | Hazard | Mảnh trôi / Drifting Debris | Vành đai ngoài trở đi | MVP |
| H02 | Hazard | Cáp chập / Live Cable | Vành đai ngoài trở đi, có trong map nhánh | MVP |
| H03 | Hazard | Ống xì / Vent Jet | Vành đai ngoài trở đi, đẩy người chơi, không trừ Oxy | MVP |
| H04 | Hazard | Dòng đá vụn / Rubble Stream | Vành đai trong trở đi | Sau MVP |
| H05 | Hazard | Băng nứt / Cracking Ice | Vành đai trong | Sau MVP |
| H06 | Hazard | Dòng trôi / Drift Current | Vành đai trong trở đi, đẩy người chơi, không trừ Oxy | Sau MVP |
| H07 | Hazard | Bùng tinh vân / Glassflare | Vùng trung tâm | Sau MVP |
| H08 | Hazard | Vùng nhiễu / Dead Air | Vùng trung tâm, tắt la bàn, ping, tín hiệu Recall Beacon | Sau MVP |
| H09 | Hazard | Hàng rào cắt / Warden Cutline | Vùng trung tâm, công trình tĩnh của The Wardens, từ chương 3 | Sau MVP |
| N1 | Map nhánh | Station Cinder (xác Seed Station) | Vành đai ngoài, chương 1. Ingrid (Kỹ sư), Linh (Thông dịch viên), boss BS-1 | MVP |
| N2 | Map nhánh | Station Wick (xác Seed Station) | Vành đai trong, chương 2. Rafa (Hoa tiêu) | Sau MVP |
| N3 | Map nhánh | Station Lantern (trạm còn người) | Vành đai trong, chương 2. Amara (Nhà sinh học), boss BS-2 | Sau MVP |
| N4 | Map nhánh | Veyl Waypost | Vùng trung tâm, chương 3 đến 5. Yusuf (Trưởng cảng). Nơi cứu Sevra Ilvane (mốc C3.8) và căn cứ The Hearth của mạng lưới The Kindling (đích hộ tống, mốc C5.1). Không boss | Sau MVP |
| N5 | Map nhánh | The Raft (nơi ở của The Remainers) | Vùng trung tâm, chương 3. Không boss | Sau MVP |
| N6 | Map nhánh | Station Flint (xác Seed Station) | Vùng trung tâm, chương 3. Manh mối cú lật Driftlife, boss BS-3 | Sau MVP |
| N7 | Map nhánh | Cradle Interior | Vùng trung tâm, chương 4. Boss BS-4 | Sau MVP |
| N8 | Map nhánh | Warden Rig | Vùng trung tâm, chương 5. Nơi Daskel chỉ huy ở bãi vỡ, căn cứ của The Wardens. Boss BS-5 | Sau MVP |
| A01 | Địa danh | Ember Mooring | Ô cố định cột 1 hàng giữa Vành đai ngoài | MVP |
| A02 | Địa danh | Lantern Outer Ring, Lantern Berth, Lantern Core | Ba khu của Station Lantern | Sau MVP |
| A03 | Địa danh | Waypost Outer Ring, Waypost Concourse, The Hearth | Ba khu của Veyl Waypost. The Hearth là khoang ẩn của The Kindling (tên của gd-story), cửa mở khi kén của Sevra chạm tới | Sau MVP |
| A04 | Địa danh | Broken Hold, Cryo Deck, Engine Core, Bridge Archive | Bốn khu của Cradle Interior (tên làm việc cũ: Khoang hàng sập, Khu ngủ đông chính, Lõi máy, Buồng lái và kho lưu trữ) | Sau MVP |
| A05 | Địa danh | Rig Landing, Holding Pens, Command Deck, Data Core | Bốn khu của Warden Rig | Sau MVP |
| SP-R | Điểm sinh | Tài nguyên | Nhóm theo dải, gd-items cấp | MVP |
| SP-D | Điểm sinh | Driftlife (đơn, đàn, tổ) | Loài theo dải, gd-combat cấp | MVP |
| SP-W | Điểm sinh | Đơn vị The Wardens | Vùng trung tâm, từ chương 3, gd-combat cấp | Sau MVP |
| SP-H | Điểm sinh | Hazard | gd-world | MVP |
| SP-B | Điểm sinh | Recall Beacon | gd-world | MVP |
| SP-L | Điểm sinh | Lối vào map nhánh | Cố định | MVP |

## Tóm tắt

Hệ thống này dựng toàn bộ không gian ngoài trạm: map tổng The Wake gồm ba dải ghép mới mỗi chuyến từ mảnh dựng tay, tám map nhánh dựng tay cố định giữ truyện, người vớt và boss, cùng hai cách rút ngắn đường (Recall Beacon và Skiff). Hệ thống biến Oxy thành quyết định đi tiếp hay quay về (P1) và đặt nội dung một lần ở chỗ chắc chắn gặp (P4). Tầng: lõi. Ưu tiên: bản đầu cho MVP (Vành đai ngoài, Station Cinder), đầy đủ cho cả game. Phụ thuộc: tốc độ bay và bình Oxy của gd-character, loài và boss của gd-combat, nhóm tài nguyên của gd-items, mốc chương của gd-story.

## Hiện hành

- Map tổng là một dải ngang: Ember ở mép trái, đi sang phải là đi xa trạm và về phía tâm vụ nổ. Ba vùng Vành đai ngoài, Vành đai trong, Vùng trung tâm nối tiếp nhau theo trục ngang.
- Mỗi dải là lưới mảnh 40 x 24 u, cao 3 hàng. Vành đai ngoài 4 cột, Vành đai trong 6 cột, Vùng trung tâm 8 cột. Mảnh dựng tay, ghép lại mỗi chuyến, một số ô cố định.
- Dải chưa mở bị chặn bằng Rạn vụn. Dải đã mở mà vỏ bộ đồ thiếu cấp môi trường thì hao nền nhân hệ số thiếu cấp của gd-character (2,5 hoặc 4).
- Recall Beacon: Vành đai ngoài 1, Vành đai trong 2, Vùng trung tâm 3 mỗi chuyến, giữ phím 5 giây, dùng nhiều lần, ai cũng dùng được.
- Skiff mở ở chương 2, đưa cả nhóm tới lối vào một map nhánh đã từng vào, tính là một chuyến, chỉ đi vào map nhánh đó.
- Map nhánh giữ trạng thái giữa các chuyến (cửa đã mở, boss đã hạ, đường tắt).
- Thang đã chốt (GDM, log 54): túi bậc 0 đến 4 là 80, 100, 126, 168, 216 Khối, bình là 330, 450, 600, 780, 1000. Giây khai thác mỗi node đã nhân 2 (gd-items). Thời lượng chuyến và tỉ lệ bị kéo về hiện hành ở mục 3.9, chép từ sim bằng script.

## 1. Mục đích với người chơi

Người chơi cảm thấy: mỗi lần rời cửa khí là một khoản Oxy đem đi đầu tư. Đi xa thì đổi được thứ hiếm hơn, nhưng đường về dài hơn và chỗ thoát ít hơn. Mỗi chuyến lạ đi một chút nhưng không bao giờ lạc: trạm, Ember Mooring và lối vào map nhánh (kể cả vỏ xác Station Cinder) luôn ở chỗ cũ.

Quyết định người chơi đưa ra trong hệ thống này:
1. Đi dải nào hôm nay (gần, an toàn, hàng thường hay xa, đắt Oxy, hàng hiếm).
2. Đi theo đường chính hay rẽ vào nhánh phụ có mảnh Thưởng.
3. Lúc nào quay về: bay ngược về cửa khí, tìm Recall Beacon đã thấy, hay liều tìm beacon mới.
4. Dùng chuyến cho map tổng (tài nguyên sinh lại) hay cho map nhánh (truyện, người vớt, boss, một lần).

- Pillar phục vụ: P1 (Oxy là đồng hồ của không gian), P3 (mọi luật đúng với 1 đến 4 người), P4 (truyện chỉ ở chỗ dựng tay).

30 giây đầu của chuyến đầu tiên: ra cửa khí vào mảnh Ember Mooring (ô cố định, không hazard, không Driftlife săn mồi). Thấy phế liệu trôi trong tầm tay, nhặt món đầu. Thấy xác Station Cinder lớn ở phía phải trên làm mốc. Thấy Mảnh trôi đầu tiên đi chậm qua đường bay, có vệt bụi báo trước.

## 2. Luật

### 2.1 Map tổng và mảnh

1. Map tổng The Wake là mặt phẳng 2D nhìn ngang. Trục ngang là khoảng cách tới Ember. Ember nằm ngoài lưới, ở mép trái, cửa khí mở vào giữa chiều cao map. (MVP)
2. Map tổng gồm ba dải nối tiếp theo trục ngang: Vành đai ngoài, Vành đai trong, Vùng trung tâm. Mỗi dải là một lưới mảnh, số cột theo bảng tham số, cao 3 hàng. (MVP cho Vành đai ngoài)
3. Mảnh là khối dựng tay cùng kích thước. Mỗi cạnh của mảnh khai báo một cổng: mở (lỗ rộng bằng tham số cổng mảnh, ở giữa cạnh) hoặc đóng. Hai mảnh cạnh nhau chỉ thông nhau khi cả hai cạnh chạm nhau đều mở. (MVP)
4. Mỗi mảnh thuộc đúng một dải và một loại: Mở, Hành lang, Ổ, Xác lớn, Thưởng, Cố định. Định nghĩa loại ở bảng 3.3. (MVP)
5. Ô cố định giữ nguyên mảnh qua mọi chuyến: ô Ember Mooring (cột 1 hàng giữa của Vành đai ngoài, cổng Trái, Phải, Trên, Dưới đều mở) và ô lối vào của mỗi map nhánh (cổng ghi ở mục 6.4). Rạn vụn không phải ô (luật 2.2.2). (MVP)
6. Bố cục mới được sinh khi chuyến bắt đầu, theo thứ tự xử lý ở 2.9. Seed của chuyến sinh từ thế giới, số ngày và số thứ tự chuyến trong ngày (1 hoặc 2), nên nạp lại cùng ngày cùng chuyến ra đúng bố cục cũ (K23). Trong một chuyến, bố cục không đổi. (MVP)
7. Trong một chuyến, một mảnh xuất hiện tối đa một lần. Trùng mảnh là cùng một mảnh ở cùng một ô với chuyến liền trước, chỉ tính ô ghép. Số ô trùng không vượt tham số trùng tối đa. (MVP)
8. Cờ nửa ngoài của mảnh: "Có" là mảnh chỉ đặt ở nửa ngoài của dải (cột lớn hơn nửa số cột, Vành đai ngoài là cột 3 và 4), "Không" là mảnh đặt ở mọi cột. Mảnh Thưởng luôn có cờ "Có". (MVP)
9. Mỗi dải có đường chính đi được từ ranh trong tới ranh ngoài mà không cần dụng cụ phá vật cản. Mỗi dải có ít nhất một vòng: hai đường khác nhau nối cùng hai cột. (MVP)
10. Mọi ô lối vào map nhánh, mọi Recall Beacon của chuyến và ô Ember Mooring đều nối được với đường chính. (MVP)
11. Biên trên và biên dưới của map là ranh vô hình có hình mảnh vỡ dày. Người chơi chạm ranh thì dừng lại, không mất Oxy. (MVP)

### 2.2 Dải, mở dải và môi trường

1. Vành đai ngoài mở từ đầu game. Vành đai trong mở ở mốc đóng chương 1 (bắt được sóng của Lantern, Thông dịch viên giải ra khe đi qua Rạn vụn). Vùng trung tâm mở ở mốc đóng chương 2 (Hoa tiêu đọc lõi dẫn đường). Mốc do gd-story giữ. (MVP cho Vành đai ngoài, Sau MVP cho Vành đai trong, Vùng trung tâm)
2. Dải chưa mở có Rạn vụn chiếm 8 u đầu cột 1 của dải đó, suốt chiều cao map. Rạn vụn là va chạm cứng, không phá được bằng mọi dụng cụ. Khi dải mở, Rạn vụn mở một khe cao bằng cổng mảnh ở đúng hàng đường chính đi từ dải trước sang (mục 2.9 bước 4), phần còn lại giữ làm cảnh. (MVP)
3. Mỗi dải có một môi trường: Vành đai ngoài E0, Vành đai trong E1, Vùng trung tâm E2. Môi trường E0 không đòi gì. Môi trường E1, E2, E3 đòi cấp vỏ bộ đồ (trục T-VO của gd-character) bằng số trong mã. (MVP cho E0)
4. Người chơi ở trong dải có môi trường cao hơn cấp vỏ bộ đồ thì hao nền Oxy nhân hệ số thiếu cấp. Hệ số do gd-character giữ (thiếu 1 cấp và thiếu từ 2 cấp). Hệ số tính theo khu người đó đang ở, đổi ngay khi qua ranh dải. (Sau MVP)
5. Map nhánh dùng môi trường của dải chứa lối vào, trừ khu có khí (luật 2.7.4). Cradle Interior và Warden Rig dùng E3. (Sau MVP)
6. Tài nguyên và loài Driftlife gắn với dải, không trộn giữa các dải (K5). Mỗi dải có loài và nhóm tài nguyên chỉ dải đó có, danh sách do gd-items và gd-combat giữ. (MVP)

### 2.3 Hazard

1. Hazard chỉ xuất hiện ở điểm sinh SP-H của mảnh hoặc ở vị trí dựng tay trong map nhánh. Mỗi SP-H khai báo danh sách hazard được phép, máy chọn một hazard trong danh sách theo dải và chương. (MVP)
2. Mọi hazard gây hại đều có tín hiệu báo trước bằng hình và tiếng, dài ít nhất bằng tham số báo trước tối thiểu. Không hazard nào gây hại khi chưa báo. Báo trước tính từ lúc người chơi thấy được tín hiệu, không phải từ lúc hazard vào màn. Hazard có thể chạm người chơi từ ngoài vùng nhìn (H01, H04, H07) có chỉ báo ở mép màn hình (mũi tên theo hướng tới và tiếng) bắt đầu ít nhất bằng báo trước tối thiểu trước khi vào màn. (MVP cho H01)
3. Sát thương của hazard trừ thẳng vào Oxy (K1). Đẩy lùi của hazard cộng vào vận tốc người chơi. Hazard không giết thẳng: Oxy về 0 thì theo luật ngạt của gd-character. (MVP)
4. Hazard không phân biệt người chơi: trúng ai thì trừ người đó. Driftlife cũng chịu Mảnh trôi, Dòng đá vụn, Bùng tinh vân, Hàng rào cắt. (MVP)
5. Hazard đẩy (Ống xì, Dòng trôi) không trừ Oxy. Bay xuôi chiều được cộng tốc độ, bay ngược bị trừ tốc độ. (MVP cho Ống xì)
6. Vùng nhiễu tắt la bàn, ping co-op và tín hiệu Recall Beacon cho người đứng trong vùng. Beacon nằm trong Vùng nhiễu vẫn kích được bằng tay. (Sau MVP)
7. Hàng rào cắt có một máy phát. Phá máy phát thì hàng rào tắt tới hết chuyến. Máy phát có máu theo bảng hazard, tăng theo số người theo C8. (Sau MVP)
8. Hazard trong map tổng không xuất hiện ở ô Ember Mooring và ở mảnh chứa Recall Beacon trong bán kính an toàn của beacon. (MVP)
Chi tiết từng hazard ở bảng 3.5.

### 2.4 Điểm sinh và mật độ

1. Mỗi mảnh khai báo sẵn các điểm sinh: SP-R, SP-D, SP-W, SP-H, SP-B, SP-L. Số khe mỗi loại theo loại mảnh ở bảng 3.3. (MVP)
2. Khi sinh chuyến, máy kích hoạt một phần khe SP-R và SP-D theo tỉ lệ kích hoạt của dải nhân hệ số số người k(N). Khe không kích hoạt để trống. (MVP)
3. Khe SP-R chọn một điểm khai thác (mã SLV của gd-items) trong danh sách của dải theo trọng số do gd-items cấp. Khe SP-D chọn một loài trong danh sách của dải và một kiểu sinh (đơn, đàn, tổ) do gd-combat cấp. (MVP)
4. Tài nguyên và Driftlife không sinh lại trong cùng chuyến. Đã nhặt, đã bắt, đã hạ thì trống tới chuyến sau (K8 áp ở mức chuyến). (MVP)
5. Khe SP-R hạng hiếm là khe chỉ cho phép điểm khai thác loại hòm của dải: SLV-104 (Vành đai ngoài), SLV-203 (Vành đai trong), SLV-303 (Vùng trung tâm). Mảnh Thưởng luôn có ít nhất một khe hạng hiếm được kích hoạt, và luôn có ít nhất một SP-H hoặc một SP-D loài săn mồi được kích hoạt. (MVP)
6. Từ chương 3, Vùng trung tâm kích hoạt khe SP-W theo tỉ lệ ở bảng 3.6. Trước chương 3 khe SP-W để trống. (Sau MVP)
7. Khe SP-D khai báo điểm neo (không neo, mảnh vỡ nhỏ, xác có điện hoặc cạnh Cáp chập, thiên thạch khoáng, mây khí, xác lớn). Loài có điểm neo trong bảng điểm sinh của gd-combat chỉ sinh ở khe có điểm neo đó. Loài đòi vùng trống hazard (Storm Siphon) chỉ sinh ở khe không có SP-H kích hoạt trong bán kính loài đó đòi. (MVP)
8. Khe SLV-101 Mảnh vỡ trôi (nhặt tay) chiếm tối đa 25% khe SP-R của một mảnh, hai khe SLV-101 cách nhau ít nhất 2 u. Node khoan và nạy đặt thành cụm 2 đến 3 node trong bán kính 4 u. Với lượng của gd-items (1 lần quay), tính cả thời gian bay thì nhặt tay và khoan gần ngang nhau (bảng cuối mục 3.8). (MVP)

### 2.5 Recall Beacon

1. Mỗi chuyến có số Recall Beacon trong mỗi dải theo bảng tham số. Beacon chỉ đặt ở khe SP-B của mảnh. Beacon của chuyến không nằm ở ô nào đã có beacon trong chuyến liền trước (K4). (MVP)
2. Luật đặt: không đặt ở ô Ember Mooring, hai beacon cách nhau ít nhất số cột theo tham số, mỗi dải có ít nhất một beacon ở nửa ngoài của dải, mọi beacon nằm trên đường chính hoặc ở ô kề đường chính. (MVP)
3. Beacon phát tín hiệu trong bán kính phát hiện. Người chơi bay vào bán kính thì beacon hiện trên la bàn của cả nhóm tới hết chuyến. (MVP)
4. Kích beacon: đứng trong bán kính kích, giữ phím Kích Recall đủ thời gian giữ. Trong lúc giữ, Oxy vẫn hao. Trúng đòn hoặc thả phím thì hủy, phải giữ lại từ đầu. Thử lại không giới hạn. (MVP)
5. Kích xong: người đó về trạm, giữ nguyên túi đồ. Vật đang kéo (buồng ngủ đông, Driftlife sống, kiện) trong bán kính kéo theo đi cùng. (MVP)
6. Beacon dùng được nhiều lần trong chuyến, nhiều người cùng kích một beacon được, mỗi người kích riêng. (MVP)
7. Map nhánh có beacon dựng tay ở vị trí cố định, theo sơ đồ từng nhánh. Mỗi phòng boss có một beacon cố định ở phía lối vào, ngoài phòng, để rút giữa trận. Beacon trong map nhánh theo luật 2.5.4 tới 2.5.6. (MVP)
8. Cửa khí của Ember là lối về luôn có, không cần giữ phím: bay vào cửa khí là về. (MVP)

### 2.6 Skiff

1. Skiff mở khi Hoa tiêu đã về trạm và bến Skiff đã sửa (khoang của gd-quan). (Sau MVP)
2. Skiff chỉ đi tới lối vào của map nhánh mà nhóm đã vào ít nhất một lần bằng đường bay (K7). (Sau MVP)
3. Chọn Skiff ở cửa khí thay cho ra cửa khí. Mọi người xác nhận như chuyến thường (C5). Chuyến Skiff tính là một chuyến trong ngày. (Sau MVP)
4. Skiff chạy cảnh đi trong thời gian cố định, Oxy không hao trong cảnh đi. Skiff thả cả nhóm ở cửa map nhánh. (Sau MVP)
5. Chuyến Skiff chỉ gồm map nhánh đó. Ra khỏi cửa map nhánh là về Skiff và Skiff đưa về trạm, không bay ra map tổng. Recall Beacon trong map nhánh cũng đưa về trạm. (Sau MVP)
6. Map nhánh N8 Warden Rig là ngoại lệ của luật 2.6.2: N8 không có ô lối vào trong map tổng, Skiff đi thẳng tới N8 ngay sau mốc C4.7 mà không cần từng vào. (Sau MVP)

### 2.7 Map nhánh

1. Map nhánh là khu dựng tay, không sinh lại (K7). Vào bằng cửa ở ô lối vào trong map tổng, hoặc bằng Skiff. Vào và ra qua màn chuyển cảnh ngắn. (MVP)
2. Map nhánh giữ trạng thái giữa các chuyến: cửa đã mở, vách đã cắt, boss đã hạ, đường tắt đã mở, vật kể chuyện đã lấy, vị trí kén hộ tống (luật 2.7.9). Tài nguyên và Driftlife thường trong map nhánh sinh lại mỗi chuyến như map tổng. (MVP)
3. Mỗi map nhánh có ít nhất một lối vào và một lối ra rõ: cửa vào chính luôn là lối ra, cộng các beacon cố định. (MVP)
4. Khu có khí (trạm còn người: Lantern, Waypost, The Raft) không hao nền Oxy và không nạp Oxy. Trúng đòn trong khu có khí vẫn trừ Oxy. (Sau MVP)
5. Người vớt nằm trong buồng ngủ đông (vật kéo BNG của gd-items). Muốn vớt thì kéo buồng tới beacon hoặc tới cửa ra. Buồng không vào túi đồ. Người vớt còn thức (Amara ở Lantern, Yusuf ở Veyl Waypost) về trạm bằng mốc truyện (C2.3, C3.2 của gd-story), không kéo buồng. Sevra Ilvane nằm trong kén thoát hiểm, kéo theo đúng luật kéo buồng ngủ đông. Lúc cứu (C3.8), kén về tới Ember bằng Recall Beacon (kén trong bán kính kéo theo đi cùng, luật 2.5.5) hoặc qua cửa khí, hai cách đều tính là xong C3.8. (MVP cho luật kéo buồng, Sau MVP cho Sevra)
6. Manh mối truyện, người vớt và boss chỉ nằm trong map nhánh (K7). Nội dung manh mối do gd-story đặt vào khe manh mối của sơ đồ. (MVP)
7. Khóa trong map nhánh mở bằng một trong ba loại chìa: dụng cụ (do gd-items định nghĩa), mốc truyện (do gd-story), hạ boss. Một người mở được mọi khóa. (MVP)
8. Vật nhiệm vụ ở khe V bị mất khi người mang bị kéo về thì trở lại đúng khe V của nó ở chuyến sau. Vật manh mối ở khe M tự ghi khi chạm, không chiếm túi (log GDM dòng 46). (MVP)
9. Hộ tống (C5.1) không có hệ thống riêng: kéo kén của Sevra qua một đoạn map nhánh có kẻ địch, dùng luật bay, kéo và combat sẵn có. Từ đầu chương 5 (sau C4.7), Skiff chở nhóm và kén từ Ember tới cửa N4, kén chỉ rời Ember bằng Skiff. Từ cửa N4, kéo kén qua vòng phong tỏa tới cửa The Hearth. Cửa The Hearth mở khi kén chạm cửa, đó là mốc C5.1. Trong hộ tống, kén không đi theo Recall Beacon: người kéo kích beacon thì kén nằm lại tại chỗ. Kén rơi khi người kéo ngạt, bị kéo về hoặc kích beacon. Giữa các chuyến, kén được lưu ở beacon cố định gần nhất đã đi qua trên đường hộ tống, chưa qua beacon nào thì ở cửa N4. (Sau MVP)
Sơ đồ từng map nhánh ở mục 2.10.

### 2.8 Nhịp chuyến

1. Thời lượng chuyến khi Oxy là giới hạn bằng dung lượng bình trừ phần dự trù quay về. Bình quyết chuyến dài bao lâu, dải quyết phần nào của chuyến là bay và phần nào là làm việc. (MVP)
2. Đường áp lực của một chuyến: nhẹ ở Ember Mooring, tăng dần theo cột, có mảnh Mở hoặc Xác lớn sau mỗi mảnh Ổ hoặc Thưởng trên đường chính để người chơi thở. Máy sinh không đặt hai mảnh Ổ hoặc Thưởng liền nhau trên đường chính. (MVP)
3. Phần thưởng tăng theo rủi ro: tỉ lệ khe SP-R hạng hiếm tăng theo cột, mảnh Thưởng chỉ ở nửa ngoài của dải. (MVP)
4. Chuyến kết thúc với từng người khi người đó về cửa khí, kích beacon xong hoặc bị kéo về. Chuyến của nhóm kết thúc khi người cuối cùng xong (C6). (MVP)
5. Một ngày có tối đa hai chuyến, chuyến Skiff cũng tính (K22). Ngân sách một ngày ở khung mục 9 do GDM giữ, thời lượng mỗi chuyến đo ở mục 3.9. (MVP)

### 2.9 Thứ tự xử lý khi sinh một chuyến

1. Đọc chương, dải đã mở, map nhánh đã mở, số người N, seed của chuyến (từ thế giới, số ngày, số thứ tự chuyến, K23).
2. Đặt ô cố định (Ember Mooring, ô lối vào map nhánh đã biết) và Rạn vụn ở dải chưa mở.
3. Mỗi dải: chọn đường chính đi qua mọi cột từ trái sang phải. Trong một cột đường chính đổi tối đa một hàng, và chỉ sang hàng kề (hàng 1 sang 2, hàng 2 sang 1 hoặc 3, hàng 3 sang 2), rồi sang cột kế ở hàng đó. Vành đai ngoài bắt đầu ở ô Ember Mooring.
4. Hàng đường chính đi vào cột 1 của dải sau bằng hàng đường chính ra khỏi cột cuối của dải trước. Khe Rạn vụn (khi dải sau đã mở) đặt ở hàng đó.
5. Đặt mảnh cho các ô trên đường chính: cổng phải khớp hướng đường. Áp luật nhịp 2.8.2.
6. Chọn một cặp cột cho vòng, đặt mảnh ô phụ tạo đường thứ hai.
7. Điền ô còn lại bằng mảnh có ít nhất một cổng mở về phía ô đã nối.
8. Kích hoạt khe SP-R, SP-D, SP-W, SP-H theo 2.4.
9. Đặt Recall Beacon theo 2.5.2.
10. Kiểm hợp lệ: đường chính đi được và nối liền giữa các dải, mỗi dải có vòng, mọi beacon và lối vào nối được, không mảnh lặp, cờ nửa ngoài đúng, không hai mảnh Ổ hoặc Thưởng liền nhau trên đường chính, số ô trùng mảnh với chuyến trước không vượt tham số, không beacon nào cùng ô với beacon chuyến trước. Bản tham chiếu: `projects/game-moi/sim/bo_cuc.py` (hàm kiểm).
11. Không hợp lệ thì sinh lại với seed kế tiếp. Quá số lần thử theo tham số thì dùng bố cục dự phòng dựng tay của dải (bảng ở mục 6.4), beacon đặt ở ô dự phòng không trùng chuyến trước.

### 2.10 Map nhánh từng nơi

Ký hiệu khu: C là khu, D là cửa khóa, B là beacon cố định, M là khe manh mối (nội dung do gd-story), V là khe vật nhiệm vụ (vật kể chuyện của gd-items dùng để mở tính năng). Thời lượng là thời gian ở trong nhánh, ước.

Lối vào mỗi map nhánh mở theo mốc truyện (bảng mốc ở `cot-truyen.md` mục 2.5). Trước mốc, ô lối vào vẫn có trên map tổng nhưng cửa đóng:

| Nhánh | Mở sau mốc |
|---|---|
| N1 Station Cinder | C1.2 |
| N3 Station Lantern | C1.9 |
| N2 Station Wick | C2.5 |
| N4 Veyl Waypost | C2.8 (cửa The Hearth mở khi kén của Sevra chạm tới, mốc C5.1) |
| N5 The Raft | C3.4 |
| N6 Station Flint | C3.5 |
| N7 Cradle Interior | C3.8 (cứu Sevra ở N4) |
| N8 Warden Rig | C4.7 |

**N1 Station Cinder (MVP).**
- Xác Seed Station đầu tiên, Vành đai ngoài, chương 1.
- Ô lối vào cố định ở Vành đai ngoài cột 3 hàng trên, vỏ xác nhìn thấy từ Ember Mooring làm mốc.

| Khu | Vị trí | Có gì |
|---|---|---|
| C1 Cửa khí hỏng | Tầng dưới, đầu trái | Lối vào và lối ra chính. Beacon B1 |
| C2 Hành lang trục | Tầng dưới | Mảnh trôi trong hành lang, đàn Driftmoth, phế liệu, linh kiện. Beacon B3 ngay trước D1 để rút khỏi phòng boss |
| C3 Khoang ngủ đông trái | Tầng trên, lên bằng giếng ở đầu trái C2 | Buồng của Ingrid (sống), một buồng tắt (M1), khe M4 nhật ký trạm STY-101 (vật manh mối đầu tiên, lấy được ở lần 1) |
| C4 Vách sập | Giữa tầng trên | Chặn đường sang C5 từ C3, không phá được |
| C5 Khoang ngủ đông phải | Tầng trên | Buồng của Linh (sống), một buồng tắt (M2). Chỉ vào được từ C8, tức phải qua phòng boss |
| D1 Cửa khóa nguồn | Cuối C2 | Mở bằng TOL-401 Bộ kích nguồn: công thức đầu tiên Ingrid chế ở xưởng sau lần 1 (RCP-205, chỉ dùng tài nguyên thô Vành đai ngoài). Nhóm đã có thì ai chạm cửa cũng mở |
| C6 Khoang máy | Tầng dưới, sau D1 | Lõi năng lượng, tổ của boss BS-1 Scrapmaw (3 điểm neo xúc tu trên tường), hai Cáp chập |
| C7 Khoang lái | Đầu phải, hai tầng | khe M3 (manh mối MM1.2 của gd-story), khe vật nhiệm vụ V1 (STY-102 mảnh lõi dẫn đường), beacon B2 mở sau khi xong boss |
| C8 Hành lang trên | Tầng trên, từ C7 sang C5 | Đường duy nhất tới buồng của Linh |

- Lần 1 (chưa có chìa): C1, C2, giếng, C3, vớt Ingrid, kéo buồng về B1. Lần 2 (có Bộ kích nguồn): C1, C2, D1, C6 boss, C7, C8, C5, vớt Linh, kéo buồng về B2.
- Cửa giữa C6 và C7 là vách kín, chỉ mở khi BS-1 kết thúc (hạ hoặc xua đi). Không chạy ngang boss được: đường duy nhất tới C7, C8, C5 và Linh đi qua trận boss. Driftlife do boss sinh ra trong trận không rời phòng C6 (gd-combat xác nhận), nên beacon B3 ngoài phòng luôn kích được.

| Lần | Thời lượng trong nhánh (giây) | Ghi chú |
|---|---|---|
| Lần 1 | 90 | Dạy kéo buồng và beacon cố định |
| Lần 2 | 150 | Gồm boss, ước 60 giây (gd-combat đo trong đề sim combat) |

Các map nhánh sau MVP (sơ đồ chi tiết làm ở đợt dựng chương tương ứng):

| Nhánh | Dải, chương | Khu | Khóa và chìa | Người vớt | Boss | Khe manh mối | Thời lượng mỗi chuyến (giây) |
|---|---|---|---|---|---|---|---|
| N2 Station Wick | Vành đai trong, 2 | Cửa khí, hành lang băng phủ (Băng nứt), khoang ngủ đông, khoang lái. Chung bộ nội thất với Cinder, đổi bố trí và hư hại | Khoang ngủ đông mất điện, mở bằng Bộ kích nguồn (dụng cụ cũ dùng lại) | Rafa (Hoa tiêu) | Không | M1, M2, M3 ở khoang ngủ đông (M3 là thẻ tên STY-601), V1 ở khoang lái (STY-103) | 150 |
| N3 Station Lantern | Vành đai trong, 2 | Lantern Outer Ring gồm Lantern Berth (chân không, đấu boss giữa các kiện hàng trôi), Lantern Core (khu có khí: Odile, Bram, Amara, chợ đổi tin) | Cửa cập chỉ mở sau khi đuổi BS-2 lần đầu (chìa là hạ boss). Sau đó là điểm ghé | Amara (Nhà sinh học) | BS-2 Tempest Gulper | M1, M2 ở Lantern Core | 180 lần đầu, 60 các lần ghé sau |
| N4 Veyl Waypost | Vùng trung tâm, 3 đến 5 (ô lối vào cố định ở Vùng trung tâm cột 1) | Waypost Outer Ring (chân không, nơi tàu TA04 của Ilsume bị toán của Maro áp mạn ở C3.8), Waypost Concourse có khí (thương nhân, Yusuf đang làm ở bến), The Hearth (khoang ẩn có khí của The Kindling, sâu trong Waypost, cửa mở khi kén của Sevra chạm tới). Đường hộ tống từ cửa N4 tới cửa The Hearth dài khoảng 120 u, qua hai đoạn phong tỏa, beacon cố định ở khoảng 40 u và 90 u (ước, chốt khi dựng greybox) | Cứu Sevra (C3.8): sự kiện áp mạn tàu TA04 ở Waypost Outer Ring chỉ sinh khi mốc C3.7 đã xong và giai đoạn 3 của động cơ đã lắp (K25). Hạ toán của Maro, kéo kén về Ember bằng beacon hoặc cửa khí. Hộ tống (C5.1, luật 2.7.9): Skiff chở kén tới cửa N4, kéo kén qua vòng phong tỏa của The Wardens (Hàng rào cắt và đơn vị The Wardens) tới cửa The Hearth. Yusuf về Ember bằng mốc C3.2 | Yusuf (Trưởng cảng), còn thức. Sevra Ilvane trong kén thoát hiểm (không phải người vớt mở tính năng) | Không boss. Toán của Maro (gd-combat) | M1, M2 | 150 lần thường, 180 lúc cứu Sevra, 210 lúc hộ tống |
| N5 The Raft | Vùng trung tâm, 3 | Cụm trạm con ghép của The Remainers, phần lớn có khí. Một khu ngoài có Hàng rào cắt cũ để dạy phá máy phát | Mốc truyện gặp Elias | Không | Không | M1 (Elias, Wren) | 120 |
| N6 Station Flint | Vùng trung tâm, 3 | Xác Seed Station chung bộ nội thất, khoang nghiên cứu, khoang hàng bị The Wardens biến thành trạm thu (Driftlife bị giữ, đấu trường boss) | Khoang nghiên cứu mở sau khi hạ BS-3 | Không | BS-3 Warden Reaper | M1 nhật ký Flint, M2 manh mối lõi dẫn đường STY-104, V1 mẫu STY-301 ở khoang nghiên cứu (mở sau BS-3) | 210 |
| N7 Cradle Interior | Vùng trung tâm, 4 | Bốn khu nối tiếp: Broken Hold, Cryo Deck, Engine Core, Bridge Archive (hộp ghi hành trình lộ ra Solace là thông tin mồi). Mỗi khu xong mở đường tắt về cửa vào và một beacon cố định | Vách thân tàu mở bằng TOL-402 Máy cắt thân tàu (bản thiết kế BPR-105 ở hòm cố định của Station Flint hoặc Shop) | Không | BS-4 Cradle Custodian ở Engine Core | M1 ở Broken Hold (STY-411), M2 ở Cryo Deck (STY-412), M3 ở Engine Core (STY-105). Khu cuối có M4 bản gốc Lodestar Survey và V1 hộp ghi hành trình STY-401. Mang hộp về trạm là mốc C4.5 của gd-story | 240, đi trọn trong 3 đến 4 chuyến |
| N8 Warden Rig | Vùng trung tâm, 5 (chỉ vào bằng Skiff) | Rig Landing (Hàng rào cắt, đơn vị The Wardens), Holding Pens (thả để chúng đánh lại The Wardens), Command Deck (đấu boss), Data Core sau Command Deck (bản đồ sao thật và lệnh phục kích Cradle mang dấu Daskel). Nơi Daskel chỉ huy ở bãi vỡ, đánh khi cách mạng nổ ra | Vào Warden Rig: mốc đóng chương 4. Data Core: mở sau khi hạ BS-5 | Không | BS-5 (gd-combat đặt tên Daskel) | V1 bản đồ sao thật STY-501, M1 lệnh phục kích Cradle mang dấu Daskel STY-502, cả hai ở Data Core | 300, hai beacon cố định giữa các khu để chia trận cuối nhiều chuyến |


Phòng boss (kích thước theo thời lượng trận ước, cơ chế do gd-combat giữ):

| Boss | Nơi | Kích thước (u) | Điểm dựng cho cơ chế | Lối ra sau trận |
|---|---|---|---|---|
| BS-1 Scrapmaw | Cinder, C6 Khoang máy | 16 x 12 | 3 điểm neo xúc tu trên tường, lõi năng lượng ở giữa, 2 Cáp chập | Cửa không khóa. Rút giữa trận: qua D1 về C2, beacon B3 cách D1 6 u. Sau trận: beacon B2 ở C7 |
| BS-2 Tempest Gulper | Lantern, Lantern Berth, Lantern Outer Ring | 32 x 20 | Kiện hàng trôi (Vụn, đẩy được), 2 cửa cập làm chỗ nấp | Cửa cập Lantern mở, beacon cố định ở bến. Beacon phía lối vào, ngoài phòng, để rút giữa trận (luật 2.5.7) |
| BS-3 Warden Reaper | Flint, khoang hàng thành trạm thu | 28 x 16 | Lồng giữ Driftlife phá được, băng chuyền thu hoạch | Khoang nghiên cứu mở, beacon cố định. Beacon phía lối vào, ngoài phòng, để rút giữa trận (luật 2.5.7) |
| BS-4 Cradle Custodian | Cradle, Engine Core | 32 x 24 | Hai tầng sàn kỹ thuật, Engine Core làm tâm | Đường tắt về cửa vào, beacon cố định. Beacon phía lối vào, ngoài phòng, để rút giữa trận (luật 2.5.7) |
| BS-5 (Daskel) | Warden Rig, Command Deck | 36 x 24 | Hàng rào cắt bật theo pha, Holding Pens kề bên | Data Core mở, beacon cố định. Beacon phía lối vào, ngoài phòng, để rút giữa trận (luật 2.5.7) |

Hòm và vật kể chuyện trong map nhánh (hòm là điểm khai thác SLV của gd-items, độ cứng theo bảng của gd-items):

| Nhánh | Hòm | Vật kể chuyện (ID gd-items) | Vị trí |
|---|---|---|---|
| Station Cinder | 3 SLV-111 Hòm kỹ thuật Seed, 1 SLV-112 Kho hàng Seed | STY-601 thẻ tên ở hai buồng tắt (M1, M2), STY-101 ở khoang ngủ đông trái (M4), STY-102 ở khoang lái (V1) | SLV-111 ở C2, C3, C7. SLV-112 ở C6 sau boss |
| Station Wick | 3 SLV-111, 1 SLV-112 | STY-211 mảng vỏ thân (M1), STY-101 nhật ký trạm (M2), STY-601 thẻ tên (M3), STY-103 (V1) | M1 đến M3 ở khoang ngủ đông, V1 ở khoang lái |
| Station Lantern | Không | STY-212 sổ trực (M1), STY-213 bản Lodestar Survey (M2) | Lantern Core |
| Veyl Waypost | Không | STY-311 (M1), STY-312 (M2) | Waypost Concourse |
| The Raft | Không | STY-313 (M1) | Khu có khí |
| Station Flint | 3 SLV-111, 1 hòm cố định chứa BPR-105 | STY-301 ở khoang nghiên cứu (V1), STY-104 (M2), nhật ký Flint (M1) | Hòm BPR-105 trong khoang nghiên cứu, mở sau BS-3 |
| Cradle Interior | 2 SLV-112 mỗi khu | STY-411 (M1, Broken Hold), STY-412 (M2, Cryo Deck), STY-105 (M3, Engine Core), bản gốc Lodestar Survey (M4) và STY-401 hộp ghi hành trình (V1) ở Bridge Archive | Mỗi khu 2 hòm |
| Warden Rig | Không | STY-501 bản đồ sao thật (V1), STY-502 lệnh phục kích Cradle mang dấu Daskel (M1) | Data Core, mở sau BS-5 |

## 3. Tham số

### 3.1 Không gian và di chuyển

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nhóm tác động | Nguồn |
|---|---|---|---|---|---|---|
| Tốc độ bay đều | 6,0 u/s ở bộ đẩy bậc 0, 6,5 đến 7,5 ở bậc 1 đến 3 | theo gd-character | Dải ngắn lại theo giây | Bay chiếm nhiều Oxy hơn | Mọi dải | gd-character |
| Hệ số đường vòng | 1,3 | 1,2 đến 1,5 | Bay ra tốn Oxy hơn | Map thẳng, ít vòng | Ngân sách Oxy | ước |
| Kích thước mảnh | 40 x 24 u | rộng 32 đến 48 | Ít mảnh hơn mỗi dải, ít đa dạng | Nhiều mối nối, dễ vụn | Kho mảnh, greybox | ước |
| Số hàng mỗi dải | 3 | 2 đến 4 | Dải rộng, khó lạc đường chính | Dải thành hành lang | Mọi dải | ước |
| Số cột Vành đai ngoài, Vành đai trong, Vùng trung tâm | 4, 6, 8 | ±1 mỗi dải | Dải dài, bay ra tốn Oxy | Thời lượng làm việc tăng | Ngân sách Oxy | ước |
| Ranh dải (u) | 160, 400, 720 | theo số cột | | | Ngân sách Oxy | sinh từ số cột |
| Cổng mảnh | 8 u | 6 đến 10 | Đi qua dễ, mảnh ít kín | Va chạm nhiều ở mối nối | Greybox | ước |
| Khe hở tối thiểu | 3 u | 3 đến 4 | Dễ bay | Chật, hay va | Greybox | ước, nhân vật cao 1 u |
| Đường chính rộng tối thiểu | 6 u | 5 đến 8 | Dễ đi | Chật | Greybox | ước |

### 3.2 Oxy và nhịp chuyến

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nhóm tác động | Nguồn |
|---|---|---|---|---|---|---|
| Hao nền | 1 điểm/giây | cố định | | | Mọi chuyến | gd-character (1 điểm bằng 1 giây hao nền). Bảng trần dưới đây không tính hao thêm khi túi gần đầy (tới 1,15 lần) và khi kéo buồng (1,25 lần). Sim chuyến có tính |
| Bình Oxy bậc 0 đến 4 | 330, 450, 600, 780, 1000 | GDM chốt (log 54) | Chuyến dài hơn | Chuyến ngắn hơn | Thời lượng chuyến cuối game | gd-character giữ trục, GDM chốt |
| Túi bậc 0 đến 4 (Khối) | 80, 100, 126, 168, 216 | GDM chốt (log 54) | Oxy thành giới hạn sớm hơn | Túi đầy sớm, chuyến ngắn | Thời lượng chuyến đầu game | gd-character giữ trục, GDM chốt |
| Hệ số thiếu cấp môi trường | 2,5 khi thiếu 1 cấp, 4,0 khi thiếu từ 2 cấp | theo gd-character | Cổng mềm thành tường | Người chơi bỏ qua nâng vỏ bộ đồ | Vành đai trong, Vùng trung tâm, Cradle, Warden Rig | gd-character |
| Dự trù quay về trong phép tính | 15% bình | 10 đến 20% | Phép tính cho chuyến ngắn hơn | Phép tính cho nhiều chuyến ngạt hơn | Chỉ phép tính ngân sách và sim | ước. Giả định hành vi người chơi trong phép tính, HUD dùng vạch đủ về của gd-character |
| Dự trù trúng đòn trong phép tính | 10% bình | 5 đến 15% | | | Phép tính ngân sách | ước |
| Mục tiêu chuyến chương 1, chương 5 | 4 đến 6 phút, 10 đến 12 phút | | | | Khung mục 9 | khung |

Trần Oxy của một chuyến theo chương (sinh bởi script, đủ cấp môi trường, người chơi chơi tới ngưỡng dự trù). Đây là trần: thời lượng thật đo bằng sim ở mục 3.9 ngắn hơn vì túi đầy ở đầu game, combat và hazard ăn Oxy ở cuối game.

| Chương | Bậc bình | Bậc bộ đẩy | Oxy | Túi | Dải | Bay ra | Về | Làm việc | Dự trù đòn | Tổng chuyến (giây) | Tổng (phút) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 0 | 0 | 330 | 80 | Vành đai ngoài | 17 | 17 | 213 | 33 | 280 | 4,7 |
| 2 | 1 | 1 | 450 | 100 | Vành đai trong | 56 | 24 | 257 | 45 | 382 | 6,4 |
| 3 | 2 | 2 | 600 | 126 | Vùng trung tâm | 89 | 24 | 336 | 60 | 510 | 8,5 |
| 4 | 3 | 3 | 780 | 168 | Vùng trung tâm | 97 | 24 | 463 | 78 | 663 | 11,1 |
| 5 | 4 | 3 | 1000 | 216 | Vùng trung tâm | 111 | 24 | 615 | 100 | 850 | 14,2 |

Về bằng beacon tính bằng thời gian bay tới beacon gần nhất đã thấy cộng thời gian giữ phím. Chương 1 về bằng cửa khí vì Vành đai ngoài gần trạm.

Thiếu cấp môi trường (vào dải mới khi vỏ bộ đồ chưa nâng):

| Chương | Dải | Làm việc đủ cấp | Làm việc thiếu 1 cấp | Còn lại |
|---|---|---|---|---|
| 2 | Vành đai trong | 257 | 74 | 29% |
| 3 | Vùng trung tâm | 336 | 111 | 33% |

Ranh dải theo giây bay:

| Dải | Từ (u) | Tới (u) | Giây bay thẳng tới ranh ngoài | Giây bay có đường vòng |
|---|---|---|---|---|
| Vành đai ngoài | 0 | 160 | 27 | 35 |
| Vành đai trong | 160 | 400 | 67 | 87 |
| Vùng trung tâm | 400 | 720 | 120 | 156 |

- Công thức: Oxy làm việc = Bình x (1 trừ Dự trù quay về) trừ Oxy bay ra trừ Oxy về trừ Bình x Dự trù trúng đòn. Oxy bay ra = (khoảng cách tới điểm làm việc chia Tốc độ bay đều) x Hệ số đường vòng x Hao nền, phần nằm trong dải thiếu cấp nhân thêm Hệ số thiếu cấp. Ví dụ chương 1: 330 x 0,85 trừ 17 trừ 17 trừ 33 = 213 giây làm việc.

Núm gap: Hệ số đường vòng và Dự trù quay về là hai núm nối số gốc với mục tiêu thời lượng. Chưa đo, gd-tech đo bằng sim đợt 2.

### 3.3 Loại mảnh và khe điểm sinh

| Loại | Vai | Cổng mở tối thiểu | SP-R | SP-D | SP-H | SP-B | Tỉ lệ trong kho |
|---|---|---|---|---|---|---|---|
| Mở | Khai thác, thở | 3 | 8 | 2 | 0 đến 1 | 1 | 30% |
| Hành lang | Nối, hẹp, có hazard | 2 (đối diện) | 3 | 1 | 1 đến 2 | 0 | 20% |
| Ổ | Driftlife tập trung | 2 | 4 | 4 | 0 đến 1 | 0 | 20% |
| Xác lớn | Vật cản lớn có túi khai thác bên trong, che tầm nhìn | 2 | 10 | 1 | 1 | 1 | 20% |
| Thưởng | Hàng hiếm, rủi ro cao, chỉ nửa ngoài dải | 1 | 6 (có hạng hiếm) | 2 | 2 | 0 | 10% |
| Cố định | Ember Mooring, lối vào map nhánh, Rạn vụn | theo thiết kế | theo thiết kế | theo thiết kế | 0 | 0 | ngoài kho |


Điểm khai thác (mã SLV của gd-items) theo loại mảnh, Vành đai ngoài (MVP):

| Loại mảnh | SLV cho phép | Ghi chú |
|---|---|---|
| Mở | SLV-101 Mảnh vỡ trôi, SLV-102 Mạch quặng, SLV-103 Khối băng | Nhiều node nhỏ, ít hazard |
| Hành lang | SLV-101, SLV-104 Hòm kỹ thuật vỡ | Hòm ở chỗ có Cáp chập để lấy hòm phải canh nhịp |
| Ổ | SLV-101, SLV-102 | Node nằm giữa đàn Driftlife |
| Xác lớn | SLV-104, SLV-105 Tấm vỏ lớn | SLV-105 chỉ có ở Xác lớn. Cạnh H02 là điểm neo của Arc Eel |
| Thưởng | Mọi SLV của dải, có hạng hiếm | |

Điểm khai thác Vành đai trong và Vùng trung tâm (Sau MVP):

| Loại mảnh | Vành đai trong | Vùng trung tâm |
|---|---|---|
| Mở | SLV-201 Mạch quặng cobalt, SLV-202 Khối băng tinh | SLV-301 Mạch kính nebula, SLV-302 Túi khí plasma đông |
| Hành lang | SLV-204 Tấm hợp kim trôi | SLV-301 |
| Ổ | SLV-201 | SLV-302 trong mây khí |
| Xác lớn | SLV-203 Hòm Cradle, SLV-204 | SLV-303 Hòm Warden (cạnh trạm thu, có WD-02 canh) |
| Thưởng | Mọi SLV của dải, có hạng hiếm | Mọi SLV của dải, có hạng hiếm |

Hazard làm node khó lấy:
- Vành đai ngoài: Cáp chập cạnh SLV-104 Hòm kỹ thuật vỡ.
- Vành đai trong: Băng nứt là phản ứng của SLV-202 Khối băng tinh khi khoan mạnh. Dòng đá vụn chạy ngang qua SLV-201 Mạch quặng cobalt.
- Vùng trung tâm: Bùng tinh vân đặt cạnh SLV-302 Túi khí plasma đông. Hàng rào cắt chắn trước SLV-303 Hòm Warden.

### 3.4 Kho mảnh và ô cố định

| Dải | Số ô | Ô cố định | Ô ghép | Kho mảnh MVP | Kho mảnh đủ | Tỉ lệ kho trên ô ghép (đủ) |
|---|---|---|---|---|---|---|
| Vành đai ngoài | 12 | 2 (Ember Mooring, lối vào Cinder) | 10 | 16 | 22 | 2,2 |
| Vành đai trong | 18 | 2 (lối vào Wick, Lantern) | 16 | không có | 32 | 2,0 |
| Vùng trung tâm | 24 | 4 (lối vào Waypost, Raft, Flint, Cradle) | 20 | không có | 40 | 2,0 |

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nguồn |
|---|---|---|---|---|---|
| Trùng mảnh tối đa giữa hai chuyến liền nhau | 5 trên 10 ô ghép (50%), tính cùng mảnh cùng ô | 30 đến 60% | Lặp, chán | Kho phải lớn hơn | đo bằng `sim/bo_cuc.py` |
| Số lần thử sinh lại | 20 | 10 đến 50 | Chậm lúc vào chuyến | Hay rơi vào bố cục dự phòng | ước |
| Đổi hàng tối đa mỗi cột trên đường chính | 1 hàng kề | 1 | | | ước |
| Dung sai tỉ lệ loại mảnh trong kho | ±5 điểm so với bảng 3.3 (kho MVP: Mở 31%, Hành lang 19%, Ổ 19%, Xác lớn 19%, Thưởng 12,5%) | | | | ước |

### 3.5 Hazard

| Mã | Tên | Loại | Tác động | Báo trước | Chu kỳ | Cách né | Dải, chương | Nhãn |
|---|---|---|---|---|---|---|---|---|
| H01 | Mảnh trôi | Động | Khối tròn bán kính va chạm 1 u, trôi thẳng hết chiều ngang hoặc chiều dọc của mảnh rồi sinh lại ở đầu đường. Va trúng trừ 8 Oxy, đẩy 4 u/s | Vệt bụi phía trước 1,5 giây. Ngoài màn: chỉ báo ở mép 1 giây trước khi vào | Trôi 2 u/s | Tránh đường đi, nấp sau Xác lớn | Vành đai ngoài trở đi | MVP |
| H02 | Cáp chập | Tĩnh theo nhịp | Tia thẳng giữa hai đầu cáp, dài 4 đến 8 u, rộng 0,5 u. Một lần phóng trúng mỗi người tối đa một lần: trừ 12 Oxy, choáng 0,5 giây | Tia lửa nhỏ 1 giây | Phóng 1,5 giây mỗi 5 giây | Đi qua lúc tắt | Vành đai ngoài trở đi, map nhánh | MVP |
| H03 | Ống xì | Đẩy | Luồng hình chữ nhật dài 12 u, rộng 3 u, hướng khai báo ở marker SP-H (8 hướng). Đẩy 6 u/s, không trừ Oxy | Hơi trắng 1 giây | Xì 3 giây, nghỉ 3 giây | Đi xuôi để tăng tốc hoặc đợi nghỉ | Vành đai ngoài trở đi | MVP |
| H04 | Dòng đá vụn | Động theo làn | Làn rộng 6 u, đá bay 10 u/s, mỗi viên trừ 10 Oxy | Chỉ báo ở mép màn hình (vạch đỏ theo làn, tiếng rền) 2 giây trước đợt, kể cả khi làn còn ngoài màn | Đợt 4 giây, nghỉ 6 giây | Ra khỏi làn, nấp | Vành đai trong trở đi | Sau MVP |
| H05 | Băng nứt | Phản ứng | Khai thác hoặc va mạnh thì vỡ, 6 mảnh văng, mỗi mảnh trừ 6 Oxy | Vết nứt sáng 1,5 giây | Một lần | Lùi xa khi thấy nứt | Vành đai trong | Sau MVP |
| H06 | Dòng trôi | Đẩy | Vùng lực 3 u/s một hướng, không trừ Oxy | Hạt bụi chảy thành dòng | Luôn bật | Bay xuôi để tiết kiệm Oxy | Vành đai trong trở đi | Sau MVP |
| H07 | Bùng tinh vân | Nổ | Bán kính 5 u, trừ 20 Oxy, đẩy 8 u/s | Sáng dần 2 giây. Túi khí cách mép màn dưới 5 u thì chỉ báo ở mép cùng lúc | Mỗi 8 giây | Ra khỏi bán kính | Vùng trung tâm | Sau MVP |
| H08 | Vùng nhiễu | Môi trường cục bộ | Tắt la bàn, ping, tín hiệu beacon. Không trừ Oxy | Màn hình nhiễu ở mép | Luôn bật, bán kính 15 đến 25 u | Nhớ đường, ra khỏi vùng | Vùng trung tâm | Sau MVP |
| H09 | Hàng rào cắt | Tĩnh theo nhịp | Tia giữa hai cột, trừ 25 Oxy, đẩy mạnh. Máy phát 60 máu (một người) | Tia mờ 1 giây | Bật 3 giây, tắt 2 giây | Đi qua lúc tắt hoặc phá máy phát | Vùng trung tâm từ chương 3 | Sau MVP |

- Kiểm phép tính: vùng nhìn tối thiểu 17,8 x 10 u (gd-ux), nửa ngang 8,9 u. Tốc độ tương đối lớn nhất của Mảnh trôi là 17 u/s (lướt 15 u/s cộng trôi 2 u/s), đi hết 8,9 u trong 0,52 giây, dưới 1 giây. Vì vậy H01, H04, H07 cần chỉ báo ở mép (luật 2.3.2).
- Báo trước tối thiểu của mọi hazard gây hại: 1 giây. Bán kính an toàn quanh beacon không có hazard: 8 u.
- Khoảng cách khe: khe SP-R cách vùng gây hại của hazard (tia, luồng, đường trôi, bán kính nổ) ít nhất 2 u. "Cạnh Cáp chập" nghĩa là khe SP-R cách vùng tia của H02 từ 2 đến 4 u.

### 3.6 Mật độ và độ khó theo dải

| Chỉ số | Vành đai ngoài | Vành đai trong | Vùng trung tâm | Nguồn |
|---|---|---|---|---|
| Tỉ lệ kích hoạt khe SP-R (một người) | 40% | 38% | 35% | ước, trần 100% ở 4 người |
| Tỉ lệ kích hoạt khe SP-D (một người) | 40% | 40% | 40% | ước, trần 100% ở 4 người |
| Tỉ lệ khe SP-R hạng hiếm (loại hòm của dải, luật 2.4.5), nửa trong và nửa ngoài dải | 5% và 15% | 10% và 20% | 15% và 30% | ước |
| Phần mảnh có hazard được kích hoạt | 30% | 50% | 70% | ước |
| Số loài chủ động tấn công trên tổng loài của dải | MVP 1 trên 4 (Arc Eel). Đủ 2 trên 5 (Latchjaw, Arc Eel) | 3 trên 5 (Orebiter, Needlefin, Gulper) | 4 trên 5 (Mirror Mantis, Storm Siphon, Shardbrood Queen, Shardbrood Hatchling) | cột Kiểu của `combat-driftlife.md` |
| Tỉ lệ kích hoạt khe SP-W (từ chương 3) | 0% | 0% | 25% | ước |
| Recall Beacon mỗi chuyến | 1 | 2 | 3 | ước |
| Khoảng cách tối thiểu giữa hai beacon | 2 cột | 2 cột | 2 cột | ước |
| Môi trường, cấp vỏ bộ đồ cần | E0, 0 | E1, 1 | E2, 2 | khung K6 |

- Trục độ khó của chuyến, trọng số GDM đã duyệt (log 79): Oxy bay ra 35%, mật độ đe dọa (Driftlife săn mồi, The Wardens) 30%, phần mảnh có hazard 20%, môi trường 15%. Đo ở đợt 2.

### 3.7 Recall Beacon và Skiff

| Tên | Khởi điểm | Khoảng an toàn | Tăng thì | Giảm thì | Nguồn |
|---|---|---|---|---|---|
| Thời gian giữ phím | 5 giây | 4 đến 7 | Thoát khó khi đang bị đuổi | Thoát quá dễ, ít căng | gốc Dave [D9] là 6 giây, ước |
| Bán kính kích, bán kính hủy | 1,5 u, 2,5 u | theo gd-character | | | gd-character |
| Bán kính phát hiện | 30 u | 20 đến 40 | Dễ tìm, ít liều | Phải đi dò | ước |
| Bán kính kéo vật theo | 3 u | 2 đến 4 | | | ước |
| Thời gian cảnh Skiff đi | 8 giây | 5 đến 10 | | | ước |
| Số người Skiff chở | 4 | cố định | | | C1 |

### 3.8 Hệ số số người

- Mục tiêu khung: mỗi người trong nhóm 4 nhặt từ 60% so với chơi một mình (log 50). Nhóm 4 hết game bằng 60 đến 75% thời gian chơi một mình (log 69). Mốc chương bị sàn ngày truyện giữ, nên a chỉ đổi lượng mỗi người nhặt.
- Hệ số tổng k(N) = 1 + a x (N trừ 1), nhân vào tỉ lệ kích hoạt khe SP-R và SP-D, a đặt theo dải. Dải là núm vì mỗi chương làm việc chủ yếu ở một dải.
- Bảng mục 4 của sim chuyến (`tools/ket-qua/sim-chuyen.md`) cho a tối thiểu khác nhau giữa Vành đai ngoài (chương 1) và Vùng trung tâm (chương 3 đến 5). a của Vành đai ngoài đặt trên mức tối thiểu của kịch bản tốt ở chương 1 một khoảng dư, vì kết quả sim dịch mỗi khi các vai khác đổi số.
- Bảng dưới là nguồn duy nhất của a. Sim chuyến, sim combat (gd-tech) và `projects/game-moi/sim/ngan_sach_oxy.py` đọc thẳng cột a. Giữ dạng bảng (cột Dải rồi cột a, số dùng dấu phẩy). Đổi a thì nhắn gd-tech chạy lại và gd-combat cập nhật hệ số sinh lực.

| Dải | a | k(2) | k(3) | k(4) |
|---|---|---|---|---|
| Vành đai ngoài | 0,30 | 1,30 | 1,60 | 1,90 |
| Vành đai trong | 0,25 | 1,25 | 1,50 | 1,75 |
| Vùng trung tâm | 0,38 | 1,38 | 1,76 | 2,14 |

| Dải | SP-R một người | SP-R 4 người | SP-D một người | SP-D 4 người |
|---|---|---|---|---|
| Vành đai ngoài | 40% | 76% | 40% | 76% |
| Vành đai trong | 38% | 66% | 40% | 70% |
| Vùng trung tâm | 35% | 75% | 40% | 86% |

- Sinh lực Driftlife thường theo số người do gd-combat giữ, bằng N chia k(N) của dải để gánh mỗi người bằng 1 (gd-combat mục 6b).
- Kết quả co-op hiện hành ở bảng đối chiếu mục 3.9 (chép bằng script). Thời gian nhóm 4 tới mốc chương ở `kinh-te-tien-trinh.md` mục 6b của gd-economy.
- Nhặt tay so với khoan (luật 2.4.8), có tính thời gian bay giữa các node:

| Node | GTĐ | Giây thao tác | Khoảng cách tới node kế (u) | GTĐ mỗi giây có bay | So với khoan trung bình |
|---|---|---|---|---|---|
| SLV-102 Mạch quặng sắt | 4,4 | 8,0 | 4 | 0,51 | |
| SLV-103 Khối băng trôi | 4,0 | 7,0 | 4 | 0,52 | |
| SLV-104 Hòm kỹ thuật vỡ | 5,0 | 6,0 | 4 | 0,75 | |
| SLV-105 Tấm vỏ lớn | 6,0 | 14,0 | 4 | 0,41 | |
| SLV-101 Mảnh vỡ trôi | 1,1 | 1,6 | 2 | 0,57 | 1,04 lần |

### 3.9 Kết quả sim chuyến và hướng đã chọn

Số hiện hành, chép từ `tools/ket-qua/sim-chuyen.md` bằng `projects/game-moi/sim/dong_bo_sim.py` (không chép tay, chạy lại mỗi khi gd-tech chạy lại sim):

Một người, kịch bản trung bình, theo chương:

<!--SIM:CHUONG-->
- Bản sim gd-tech lúc 2026-11-19T21:49:09.259Z, một người trừ dòng nhóm 4.

| Chương | Phút P50 (P10 đến P90) | Về vì túi đầy | Bị kéo về |
|---|---|---|---|
| 1 | 4,4 (4,0 đến 4,7) | 83% | 1% |
| 2 | 5,4 (4,8 đến 5,9) | 24% | 1% |
| 3 | 6,5 (5,6 đến 7,4) | 9% | 3% |
| 4 | 8,2 (7,2 đến 9,2) | 11% | 0% |
| 5 | 10,4 (9,2 đến 11,4) | 12% | 0% |
<!--/SIM:CHUONG-->

Đối chiếu mục tiêu khung mục 9:

<!--SIM:DOI-CHIEU-->
- Bản sim gd-tech lúc 2026-11-19T21:49:09.259Z, một người trừ dòng nhóm 4.

| Mục | Mục tiêu | Đo |
|---|---|---|
| Thời lượng chuyến chương 1, trung bình, một người | 4 đến 6 phút | 4,4 phút |
| Thời lượng chuyến chương 5, trung bình, một người | 10 đến 12 phút | 10,4 phút |
| Tỉ lệ bị kéo về vì hết Oxy, kịch bản tệ, một người, chương 1 đến 5 |  | 14%, 16%, 23%, 13%, 6% |
| Tỉ lệ bị kéo về vì hết Oxy, kịch bản trung bình, một người, chương 1 đến 5 | dưới 5% (cẩn thận, log 56) | 1%, 1%, 3%, 0%, 0% |
| Tỉ lệ bị kéo về vì hết Oxy, kịch bản tốt, một người, chương 1 đến 5 | dưới 5% (cẩn thận, log 56) | 0%, 0%, 0%, 0%, 0% |
| Tỉ lệ bị kéo về vì hết Oxy, kịch bản tham, một người, chương 1 đến 5 | 15 đến 40% (log 56) | 10%, 36%, 41%, 29%, 13% |
| Mỗi người nhóm 4 so với một mình, kịch bản tệ, chương 1 đến 5 | từ 60% | 75%, 90%, 104%, 91%, 70% |
| Mỗi người nhóm 4 so với một mình, kịch bản trung bình, chương 1 đến 5 | từ 60% | 66%, 80%, 89%, 83%, 69% |
| Mỗi người nhóm 4 so với một mình, kịch bản tốt, chương 1 đến 5 | từ 60% | 61%, 79%, 89%, 82%, 68% |
| Mỗi người nhóm 4 so với một mình, kịch bản tham, chương 1 đến 5 | từ 60% | 71%, 115%, 135%, 109%, 73% |
<!--/SIM:DOI-CHIEU-->

- Kịch bản "cẩn thận" của log 56 là kịch bản trung bình và tốt của sim. Kịch bản "tham" là kịch bản tham.
- Tỉ lệ bị kéo về của người chơi tham lệch khỏi 15 đến 40% ở chương đầu và chương cuối. Không chỉnh map trước playtest vì kịch bản tham là giả định. Nếu playtest xác nhận, núm của gd-world là phần mảnh có hazard ở Vùng trung tâm.

- Bản chạy thử dùng để chọn hướng (đổi diện tích, giây khai thác, cỡ túi và bình) nằm ở `projects/game-moi/sim/do-nhay-chuyen.md`, sinh bởi `sim/do_nhay_chuyen.mjs`. Kết quả: thêm diện tích hay mật độ không kéo dài chuyến, túi quyết thời lượng đầu game, bình quyết cuối game.
- Hướng đã chọn: map giữ nguyên kích thước và mật độ ở mục 3.1 đến 3.7. Giây khai thác nhân 2 (gd-items). Túi 80 đến 216 Khối và bình 330 đến 1000 (GDM, log 54).

## 4. Trường hợp biên

| Ca | Phán quyết |
|---|---|
| Kích beacon khi Oxy còn đủ đúng thời gian giữ, Oxy về 0 cùng lúc giữ xong | Giữ xong tính trước. Người chơi về trạm, không vào ngạt |
| Đang giữ beacon thì đồng đội ngạt ngay cạnh | Không tự hủy. Người giữ tự chọn thả phím để chia Oxy |
| Hai người cùng giữ một beacon | Mỗi người tính riêng, cả hai về khi đủ thời gian của mình |
| Đang kéo buồng ngủ đông mà Oxy về 0 | Buồng rơi tại chỗ, ở lại map nhánh với trạng thái chưa vớt. Không mất người vớt |
| Kéo Driftlife sống vào beacon nhưng nó ở ngoài bán kính kéo theo | Driftlife không đi cùng, ở lại map |
| Spam phím giữ beacon (nhấn nhả liên tục) | Mỗi lần nhả là hủy, tiến độ về 0, không cộng dồn |
| Thoát game giữa chuyến (chơi một mình) | Nạp lại ở điểm lưu sau chuyến trước (K23). Chuyến dở không tính vào hạn 2 chuyến của ngày, đồ nhặt trong chuyến đó mất. Chơi lại chuyến đó ra đúng bố cục cũ vì seed theo ngày và số thứ tự chuyến |
| Host thoát giữa chuyến co-op | Phiên kết thúc với mọi người, thế giới về điểm lưu gần nhất (C10, K23). Chuyến đang dở mất, chơi lại ra đúng bố cục cũ |
| Người vào phiên giữa chuyến | Chờ ở trạm tới chuyến sau, không vào map đang chạy |
| Sinh bố cục 20 lần đều hỏng | Dùng bố cục dự phòng dựng tay của dải, ghi log seed hỏng |
| Mọi beacon của dải nằm trong Vùng nhiễu | Không xảy ra: kiểm hợp lệ loại bố cục có dải mất hết tín hiệu beacon |
| Dải đã mở nhưng vỏ bộ đồ cấp 0, Oxy không đủ bay tới beacon | Hợp lệ, là quyết định của người chơi (K6). HUD báo bằng vạch đủ về của gd-character |
| Hazard đẩy người chơi vào Rạn vụn hoặc ranh map | Dừng lại ở ranh, không trừ Oxy |
| Hazard trùng vị trí với SP-R | Kiểm khi dựng mảnh: khe SP-R cách vùng gây hại của hazard ít nhất 2 u |
| Mảnh Thưởng sinh ở nửa trong dải do lỗi kho | Kiểm hợp lệ loại, sinh lại |
| Vào map nhánh khi đồng đội còn ở map tổng | Hợp lệ. Mỗi người ở khu nào là ở khu đó, luật Oxy của khu đó |
| Boss map nhánh đã hạ một phần, người chơi rút khỏi phòng | Cửa phòng boss không khóa, boss không đuổi ra ngoài. Phòng không còn ai quá 10 giây hoặc cả nhóm về trạm thì boss hồi đầy (gd-combat luật 36). Cửa đã mở giữ nguyên |
| Skiff tới map nhánh đã xong mọi nội dung | Vẫn cho đi, map nhánh còn tài nguyên sinh lại |

## 5. Ràng buộc vật lý của luật

| Ràng buộc | Số | Lý do |
|---|---|---|
| Thời lượng chuyến tối đa khi Oxy là giới hạn | 85% dung lượng bình (giây) | Dự trù quay về là ngưỡng người chơi tự đặt, thời lượng không vượt dung lượng bình |
| Vùng trung tâm cột cuối, bình bậc 0, bộ đẩy bậc 0 | Bay ra có đường vòng 156 giây trên bình 330 | Tới được nhưng còn ít Oxy làm việc: Vùng trung tâm thực tế cần bình bậc 2 trở lên |
| Thiếu 1 cấp ở Vành đai trong, bình bậc 1 | 74 giây làm việc | Cổng mềm rất đắt, đúng ý K6: vẫn vào được dải mới |
| Số mảnh khác nhau gặp trong một chuyến | tối đa 54 ô | 12 + 18 + 24 ô |
| Số map nhánh cả game | 8 | 4 xác hoặc trạm con dùng chung bộ nội thất Seed Station (Cinder, Wick, Flint, phần ngoài Lantern) |
| Người chơi không lạc | Mốc cố định nhìn được từ mọi cột của dải | Ember và vỏ Station Cinder cố định, luôn chỉ trên la bàn |

## 6. Yêu cầu cho engineer và tool

### 6.1 Dữ liệu

| Dữ liệu | Trường | Ghi chú |
|---|---|---|
| Mảnh | ID, dải, loại, cổng bốn cạnh (mở, đóng), cờ nửa ngoài, danh sách khe (loại, vị trí, danh sách cho phép, hướng cho SP-H đẩy, điểm neo cho SP-D) | Một prefab mỗi mảnh, khe là marker không va chạm |
| Bảng dải | Số cột, số hàng, môi trường, tỉ lệ kích hoạt, số beacon, danh sách loài và nhóm tài nguyên theo chương | gd-tech đưa vào ScriptableObject |
| Bảng hazard | Theo bảng 3.5 | |
| Map nhánh | Scene riêng, trạng thái lưu: cửa, vách, boss, đường tắt, vật kể chuyện, buồng đã vớt | Lưu theo thế giới (C3) |
| Chuyến | Seed (từ thế giới, số ngày, số thứ tự chuyến), danh sách ô và mảnh, khe đã kích hoạt, beacon, ô mỗi người đã vào | Bố cục lưu theo ngày và số thứ tự chuyến (K23), nạp lại không đổi. Đồng bộ co-op bằng seed và danh sách khe đã dùng. Ô đã vào gộp cả nhóm, cấp cho bản đồ chuyến (UI-33 của gd-ux) |

### 6.2 Sự kiện cần bắn

Chuyến bắt đầu (seed, N, chương), vào dải, ra dải, thấy beacon, kích beacon bắt đầu, kích beacon hủy, kích beacon xong, trúng hazard (mã, Oxy trừ), vào map nhánh, ra map nhánh, mở khóa map nhánh, chuyến kết thúc (cách kết thúc, Oxy còn, dải xa nhất). gd-tech giữ tên event.

### 6.3 Tool cần

1. Trình xem bố cục: nhập seed, chương, N, in lưới mảnh và đường chính, đánh dấu lỗi hợp lệ. Dùng cho QA và cân bằng.
2. Validator kho mảnh: mỗi mảnh có cổng tối thiểu theo loại, khe SP-R cách vùng gây hại của hazard ít nhất 2 u, mảnh Thưởng có cờ nửa ngoài, kho đủ tỉ lệ loại.
3. Sim chuyến (đợt 2, gd-tech): đề sim ở mục 8.

### 6.4 Spec greybox MVP: Vành đai ngoài

- Đơn vị Unity: 1 u, nhân vật cao 1 u. Gốc tọa độ: x = 0 ở cửa khí của Ember, y = 0 ở biên dưới map. Camera cao 10 u, rộng 17,8 u ở 16:9, mở ngang tới 21:9 (gd-ux). Một mảnh 40 x 24 u bằng khoảng 2,2 x 2,4 màn hình.

| Phần | Tọa độ (u) | Ghi chú |
|---|---|---|
| Ember (vỏ ngoài) | x từ âm 40 tới 0, y từ 24 tới 48 | Không vào lưới. Cửa khí ở (0, 36) |
| Lưới Vành đai ngoài | x từ 0 tới 160, y từ 0 tới 72 | 4 cột x 3 hàng, mỗi ô 40 x 24 |
| Ô Ember Mooring (cố định) | Cột 1 hàng giữa: x từ 0 tới 40, y từ 24 tới 48 | Cổng 1111. 6 SP-R phế liệu và 1 SP-D loài hiền luôn kích hoạt (không nhân tỉ lệ), không hazard, không loài săn mồi |
| Ô lối vào Station Cinder (cố định) | Cột 3 hàng trên: x từ 80 tới 120, y từ 48 tới 72 | Cổng 1101 (Trái, Phải, Dưới mở, Trên là biên map). Vỏ xác 32 x 16 u, cửa vào ở cạnh dưới vỏ |
| Rạn vụn chương 1 | x từ 160 tới 168, y từ 0 tới 72 | 8 u đầu cột 1 Vành đai trong. Va chạm cứng, khe mở ở chương 2 tại hàng đường chính ra khỏi cột 4 của Vành đai ngoài |
| Biên trên, biên dưới | y = 0 và y = 72 | Va chạm vô hình kèm lớp hình mảnh vỡ dày |

Lớp va chạm:

| Lớp | Dùng cho | Va với người chơi | Va với Driftlife |
|---|---|---|---|
| Rắn | Vỏ xác, thiên thạch lớn, Rạn vụn, biên | Có | Có |
| Vụn | Vật trôi nhỏ đẩy được (Rigidbody2D) | Có, đẩy được | Có |
| Hazard | Vùng gây hại hoặc đẩy | Trigger | Trigger |
| Khe | Marker điểm sinh | Không | Không |
| Lối | Cửa khí, beacon, cửa map nhánh | Trigger | Không |

- Kho mảnh MVP Vành đai ngoài (16 mảnh). Cổng ghi theo thứ tự Trái, Phải, Trên, Dưới, 1 là mở:

| ID | Loại | Cổng | SP-R | SP-D | SP-H cho phép | SP-B | Nửa ngoài |
|---|---|---|---|---|---|---|---|
| G-M01 | Mở | 1111 | 8 | 2 | H01 | 1 | Không |
| G-M02 | Mở | 1110 | 8 | 2 | H01, H03 | 1 | Không |
| G-M03 | Mở | 1101 | 8 | 2 | H01 | 1 | Không |
| G-M04 | Mở | 1111 | 8 | 2 | H03 | 1 | Có |
| G-M05 | Mở | 0111 | 8 | 2 | H01 | 1 | Không |
| G-H01 | Hành lang | 1100 | 3 | 1 | H02 | 0 | Không |
| G-H02 | Hành lang | 1100 | 3 | 1 | H01, H03 | 0 | Không |
| G-H03 | Hành lang | 0011 | 3 | 1 | H03 | 0 | Không |
| G-O01 | Ổ | 1100 | 4 | 4 | H01 | 0 | Không |
| G-O02 | Ổ | 1010 | 4 | 4 | không | 0 | Có |
| G-O03 | Ổ | 1101 | 4 | 4 | H02 | 0 | Có |
| G-X01 | Xác lớn | 1100 | 10 | 1 | H02 | 1 | Không |
| G-X02 | Xác lớn | 1110 | 10 | 1 | H01 | 1 | Có |
| G-X03 | Xác lớn | 1101 | 10 | 1 | H02 | 1 | Không |
| G-T01 | Thưởng | 1000 | 6 | 2 | H01, H02 | 0 | Có |
| G-T02 | Thưởng | 0100 | 6 | 2 | H02, H03 | 0 | Có |

- Cột "Nửa ngoài": "Có" chỉ đặt ở cột 3 và 4, "Không" đặt mọi cột (luật 2.1.8). Khe SP-D của mảnh Mở và Ổ neo "mảnh vỡ nhỏ" (Driftmoth, Sting Krill, Skitter Ray). Khe SP-D của mảnh Xác lớn và mảnh có H02 neo "xác có điện hoặc cạnh Cáp chập" (Arc Eel).

- Bố cục dự phòng Vành đai ngoài (dựng tay, đã kiểm bằng `sim/bo_cuc.py`), đường chính đi hàng giữa từ cột 1 tới cột 4:

| Hàng | Cột 1 | Cột 2 | Cột 3 | Cột 4 |
|---|---|---|---|---|
| 3 (trên) | G-H03 | G-X01 | Lối vào Cinder | G-M04 (beacon nếu chuyến trước không ở đây) |
| 2 (giữa) | Ember Mooring | G-H01 | G-X03 | G-M01 |
| 1 (dưới) | G-M05 | G-H02 | G-O03 | G-X02 (beacon thay thế) |

### 6.5 Spec greybox MVP: Station Cinder

- Scene riêng. Gốc tọa độ ở góc dưới trái của vỏ xác. Nội thất 64 x 24 u, hai tầng, mỗi tầng cao 12 u.

| Khu | x (u) | y (u) | Ghi chú dựng |
|---|---|---|---|
| C1 Cửa khí hỏng | 0 tới 8 | 0 tới 12 | Cửa ra map tổng ở x = 0. Beacon B1 tại (4, 4) |
| C2 Hành lang trục | 8 tới 40 | 0 tới 12 | Giếng lên tầng trên ở x từ 10 tới 13. Hai H01 trôi dọc hành lang, không đi qua bán kính an toàn 8 u của B3. Beacon B3 tại (34, 4) |
| C3 Khoang ngủ đông trái | 8 tới 24 | 12 tới 24 | Buồng Ingrid tại (16, 15), buồng tắt M1 tại (20, 15), khe M4 (STY-101) tại (12, 20) |
| C4 Vách sập | 24 tới 26 | 12 tới 24 | Rắn, không phá |
| C5 Khoang ngủ đông phải | 26 tới 40 | 12 tới 24 | Buồng Linh tại (32, 15), buồng tắt M2 tại (36, 15) |
| D1 Cửa khóa nguồn | x = 40 | 0 tới 12 | Cửa 1 x 6 u, trigger dùng Bộ kích nguồn |
| C6 Khoang máy | 40 tới 56 | 0 tới 12 | Đấu trường boss 16 x 12 u, H02 tại (44, 10) và (52, 2), lõi năng lượng ở giữa |
| C7 Khoang lái | 56 tới 64 | 0 tới 24 | Giếng hai tầng. Khe M3 tại (60, 18), khe V1 (STY-102) tại (58, 10). Beacon B2 tại (60, 4), bật sau boss |
| C8 Hành lang trên | 40 tới 56 | 12 tới 24 | Nối C7 sang C5 |
| Cửa D1 và vách C6 sang C7 | x = 40 và x = 56 | 0 tới 12 | D1 mở bằng TOL-401 thì giữ mở ở mọi chuyến sau. Vách tại x = 56 mở sau boss và giữ mở |

## 7. Yêu cầu cho art, UI, tutorial, audio

| Sự kiện | Hình (VFX, trạng thái) | Âm (SFX) | Text, tutorial | Ưu tiên |
|---|---|---|---|---|
| Qua ranh dải | Đổi màu nền, hạt bụi môi trường đổi | Tầng nhạc nền đổi | Tên dải hiện 2 giây | MVP |
| Vào dải thiếu cấp | Viền màn hình theo màu môi trường, thanh Oxy chạy nhanh | Tiếng cảnh báo bộ đồ | Một dòng: thiếu cấp vỏ, Oxy hao nhanh | Sau MVP |
| Thấy beacon lần đầu | Cột sáng từ beacon, ghim lên la bàn | Tiếng bíp phát hiện | Tutorial lần đầu: giữ phím để về trạm | MVP |
| Đang giữ beacon | Vòng tiến độ quanh nhân vật | Âm tăng dần | | MVP |
| Giữ beacon bị hủy | Vòng vỡ | Tiếng tắt | | MVP |
| Báo trước từng hazard | Theo bảng 3.5. Chỉ báo ở mép màn hình cho H01, H04, H07 (mũi tên theo hướng tới) | Mỗi hazard một tiếng báo riêng, tiếng chỉ báo mép có hướng trái phải | Lần đầu gặp mỗi hazard: một dòng gợi ý | MVP cho H01 đến H03 |
| Rạn vụn | Tường mảnh vỡ dày, chớp nhẹ ở khe khi dải mở | | Khi chạm lần đầu ở chương 1: chưa có đường qua | MVP |
| Bản đồ chuyến (phím M, không dừng thời gian) | Lưới mảnh, ô đã vào sáng, ô chưa vào tối, ghim beacon đã thấy, lối vào map nhánh, vị trí đồng đội | | Tutorial lần đầu ở Ember Mooring | MVP |
| Mốc cố định | Silhouette lớn, đèn nháy riêng của mỗi xác | | | MVP |
| Kéo buồng ngủ đông | Dây kéo, buồng phát sáng nhịp tim | Tiếng máy buồng | Tutorial lần 1 ở Cinder | MVP |
| Skiff đi | Cảnh xuồng tách bến, bay qua các dải | Động cơ | | Sau MVP |

Art 2D vector, một artist: map tổng dựng từ một bộ kit dùng chung cho mỗi dải (khối vỏ tàu, thiên thạch, băng, mây khí). Mảnh là cách xếp kit, không phải tranh vẽ riêng. Map nhánh xác Seed Station dùng chung một bộ nội thất.

## 7b. Cảm giác

Tham chiếu cảm giác: khoảnh khắc thấy vỏ xác lớn hiện dần từ bóng tối khi bay tới, tiếng thở trong mũ đổi nhịp khi Oxy thấp, Recall Beacon kéo người chơi đi trong một nhịp sáng ngắn rồi cắt về trạm.
Phản tham chiếu: không để map tổng trông như lưới ô vuông. Mối nối giữa hai mảnh phải bị che bằng vật trôi và mảnh vỡ. Không để hazard giật hình hay rung màn hình liên tục.
Phản hồi: trúng hazard thì nhân vật nháy và bị đẩy ngay trong khung hình đó, thanh Oxy rơi kèm số trừ. Báo trước của hazard luôn dài hơn thời gian phản ứng tối thiểu ở bảng 3.5.

## 8. Cách đo thành công và tiêu chí nghiệm thu

Chỉ số kết quả: thời lượng chuyến theo chương, tỉ lệ chuyến hết Oxy, tỉ lệ chuyến kết thúc bằng beacon, cửa khí, bị kéo về. Chỉ số trải nghiệm: số lần dùng vòng của dải, số mảnh Thưởng được vào, thời gian từ khi thấy beacon tới khi dùng.

Đề sim cho gd-tech (đợt 2):

| Câu hỏi | Đầu vào | Đầu ra |
|---|---|---|
| Thời lượng chuyến và tỉ lệ bị kéo về theo chương | Bảng 3.1 đến 3.7, số của gd-character, gd-combat, 4 kịch bản của sim (tệ, trung bình, tốt, tham). Kịch bản "cẩn thận" của khung là trung bình và tốt | p10, p50, p90 thời lượng, tỉ lệ bị kéo về |
| Tài nguyên mỗi chuyến theo N | Bảng 3.6, 3.8 | Tài nguyên mỗi người, mỗi nhóm |
| Bố cục hợp lệ | Kho mảnh MVP, 1000 seed | Tỉ lệ hợp lệ lần đầu, số lần rơi vào dự phòng, độ trùng mảnh giữa hai chuyến |

Tiêu chí nghiệm thu:
1. Trình xem bố cục chạy 1000 chuyến liền nhau Vành đai ngoài: 100% bố cục cuối hợp lệ, dưới 1% rơi vào bố cục dự phòng. Bản tham chiếu `sim/bo_cuc.py` đo 0,00% rơi dự phòng ở 3 seed (`sim/bo-cuc.md`).
2. Hai chuyến liền nhau bất kỳ: số ô có cùng mảnh ở cùng ô không vượt 5 trên 10 ô ghép, và không beacon nào ở cùng ô với chuyến trước. Bản tham chiếu đo lớn nhất 5, trung bình 1,4, beacon trùng ô 0%.
3. Sim chương 1, chính sách trung bình: p50 thời lượng chuyến nằm trong 4 đến 6 phút.
4. Sim chương 5, chính sách trung bình: p50 thời lượng chuyến nằm trong 10 đến 12 phút.
5. Sim kịch bản cẩn thận: tỉ lệ chuyến bị kéo về dưới 5%. Sim kịch bản tham: 15 đến 40% (log 56). Playtest đo lại cả hai.
6. Mỗi hazard gây hại có báo trước đo được trên build ít nhất 1 giây.
7. Một người chơi một mình vào Station Cinder, đi hết lần 1 và lần 2, vớt đủ Ingrid và Linh, hạ hoặc xua BS-1, không cần người thứ hai.
8. Mở map nhánh đã xong lần 2: cửa D1 vẫn mở, boss không còn, beacon B2 bật.
9. Mỗi map nhánh có ít nhất một lối ra được kiểm bằng tay trên greybox.

## 9. Lệch khỏi tham chiếu (Dave the Diver)

| Điểm | Dave làm thế nào | Mình làm thế nào | Vì sao lệch |
|---|---|---|---|
| Trục khám phá | Blue Hole chia 3 dải theo độ sâu (0 đến 50 m, 50 đến 130 m, 130 đến 250 m) [D3] | 3 dải theo khoảng cách ngang tới trạm | Không gian không có trên dưới, khoảng cách tới trạm là thứ người chơi tính Oxy |
| Sinh lại | Địa hình và sinh vật sinh lại mỗi lần lặn [D2][D4], loài gắn độ sâu [D5] | Ghép mảnh dựng tay theo lưới, có đường chính và vòng bảo đảm, ô cố định | Kho tri thức ghi Dave bỏ sinh thủ tục vì độ vui không đều (log dòng 13). Ghép mảnh giữ chất lượng từng mảnh |
| Thoát | Escape Pod, giữ phím 6 giây, đổi vị trí mỗi dive, bị đẩy thì hủy [D9] | Recall Beacon giữ 5 giây, số beacon giới hạn theo dải, phải thấy mới ghim | Số beacon và bán kính phát hiện là núm đo được cho P1. Dave không công bố số pod |
| Khu đặc biệt | Glacial Area, Cargo Ship và khu khác có tên, cố định, có đường tắt bằng gương [D3][D6] | 8 map nhánh dựng tay giữ trạng thái, Skiff đi thẳng | Truyện và người vớt phải ở chỗ chắc chắn gặp (K7, P4) |
| Một mình hay nhiều người | Một người | 1 đến 4 người, không gian giữ nguyên, tài nguyên theo k(N) | C1 đến C8 |

- Điểm yếu tham chiếu được sửa: lặp lại đường đi xuống dải sâu mỗi lần lặn trong Dave không có số công bố. Ở đây, chuyến chương 5 bay ra chiếm khoảng 16% thời lượng chuyến, nên có Dòng trôi ở Vành đai trong và Skiff cho map nhánh để giảm phần bay lặp. Chưa đo, đề sim ở mục 8.

## 10. Câu hỏi mở

| Câu | Phương án đề xuất | Ai quyết |
|---|---|---|
| Bay ra Vùng trung tâm ở chương 5 chiếm khoảng 16% chuyến, có thấy lặp không | Giữ, đo ở playtest. Nếu lặp thì đặt Dòng trôi xuôi về Vùng trung tâm trên đường chính của Vành đai trong | gd-world sau playtest |
| Recall Beacon có hiện ngay khi vào dải không | Không, phải vào bán kính phát hiện. Giữ ý đồ dò đường | GDM |
| Trọng số các trục độ khó | Đã chốt: Oxy bay ra 35%, mật độ đe dọa 30%, hazard 20%, môi trường 15% (log 79) | GDM |
| Bản đồ chuyến (UI-33) trong MVP | Có. Map cấp ô đã vào, beacon đã thấy, lối vào map nhánh đã biết | gd-world, gd-ux đã thống nhất |
| Rớt mạng của host giữa chuyến | Theo luật chung của gd-tech | gd-tech |

## Co-op 1 đến 4 người

| Luật | 1 người | 2 người | 3 người | 4 người |
|---|---|---|---|---|
| Kích thước map, số mảnh, số beacon | Giữ nguyên | Giữ nguyên | Giữ nguyên | Giữ nguyên |
| Tỉ lệ kích hoạt SP-R, SP-D | x 1,00 | Vành đai ngoài x 1,30, Vành đai trong x 1,25, Vùng trung tâm x 1,38 | Vành đai ngoài x 1,60, Vành đai trong x 1,50, Vùng trung tâm x 1,76 | Vành đai ngoài x 1,90, Vành đai trong x 1,75, Vùng trung tâm x 2,14 |
| Hazard | Như nhau, trúng ai trừ người đó | Như nhau | Như nhau | Như nhau |
| Máu máy phát Hàng rào cắt | Theo bảng 3.5 | x 1,6 | x 2,2 | x 2,8 (hệ số boss và The Wardens của gd-combat, 1 + 0,6 x (N trừ 1)) |
| Recall Beacon | Một người kích | Mỗi người kích riêng, cùng beacon được | Như 2 người | Như 2 người |
| Beacon đã thấy | Ghim cho mình | Ghim cho cả nhóm | Như 2 người | Như 2 người |
| Khóa map nhánh | Một người mở được | Một người mở, người khác dọn đường | Như 2 người | Như 2 người |
| Kéo buồng ngủ đông | Hệ số kéo 0,50 | 0,65 khi cùng kéo | 0,80 | 0,95 (gd-character) |
| Boss map nhánh | Sinh lực x 1 | x 1,6 | x 2,2 | x 2,8 (gd-combat) |
| Driftlife thường | Sinh lực, ngưỡng choáng, ngưỡng mê x 1 | N chia k(N) của dải | N chia k(N) của dải | N chia k(N) của dải, gánh mỗi người bằng 1. Bảng số ở gd-combat mục 6b |
| Skiff | Chở 1 | Chở cả nhóm đã xác nhận | Như 2 người | Như 2 người |
| Tách nhau | Không áp | Mỗi người tự do ở dải hoặc map nhánh khác nhau | Như 2 người | Như 2 người |
| Về trước đồng đội | Không áp | Không ra lại trong cùng chuyến (C9), xem vị trí đồng đội và beacon đã thấy trên bản đồ chuyến | Như 2 người | Như 2 người |

Không có luật cần đúng N người: không cửa nào cần hai người cùng đứng, không công tắc đôi, không boss có cơ chế bắt buộc nhiều người.

## Điểm tự quyết

| # | Điểm | Chọn | Vì sao | Đã bỏ | Đảo |
|---|---|---|---|---|---|
| W1 | Hình học map tổng | Dải ngang một trục, Ember ở mép trái | Khoảng cách tới trạm là một trục, tính Oxy được, ghép mảnh theo cột đơn giản | Vòng tròn đồng tâm quanh trạm (diện tích tăng bậc hai, nặng art) | Đắt |
| W2 | Đơn vị ghép | Lưới mảnh 40 x 24 u, cao 3 hàng | Mỗi mảnh khoảng 2 x 2 màn hình, đủ chỗ cho một ý | Mảnh tự do không lưới | Vừa |
| W3 | Bảo đảm đường | Đường chính kiểu một hàng mỗi cột, ít nhất một vòng mỗi dải | Không sinh bố cục hỏng, có lựa chọn đường | Cây phân nhánh | Rẻ |
| W4 | Mở dải | Rạn vụn chặn dải chưa mở, mở theo mốc chương. Vành đai trong mở bởi mốc đóng chương 1, Vùng trung tâm bởi mốc đóng chương 2 | Khớp K6 (mở theo chương) và gd-story (Hoa tiêu ở Wick trong Vành đai trong, mở Vùng trung tâm) | Hoa tiêu mở Vành đai trong (Hoa tiêu nằm trong Vành đai trong nên không tới được) | Rẻ |
| W5 | Cấp môi trường từng dải | Vành đai ngoài 0, Vành đai trong 1, Vùng trung tâm 2, Cradle Interior và Warden Rig 3 (môi trường E3 Lõi rò). Hệ số thiếu cấp dùng của gd-character | Mỗi chương lớn cần một bậc vỏ, khớp bảng T-VO của gd-character. Thiếu 1 cấp còn 29 đến 33% thời gian làm việc: đi được nhưng đắt (K6) | Cradle dùng E2 của Vùng trung tâm (cấp 3 của T-VO không có chỗ dùng) | Rẻ |
| W6 | Sinh lại trong chuyến | Không | Chống farm tại chỗ, K8 áp ở mức chuyến | Làm mới theo thời gian | Rẻ |
| W7 | Số beacon | Vành đai ngoài 1, Vành đai trong 2, Vùng trung tâm 3, phải thấy mới ghim | Beacon là núm của P1, giới hạn để còn quyết định quay về | Không giới hạn như Escape Pod | Rẻ |
| W8 | Beacon dùng lại | Nhiều lần, nhiều người, mỗi người kích riêng | P3, không có luật cần đúng N người | Một lần mỗi beacon | Rẻ |
| W9 | Beacon trong map nhánh | Cố định theo sơ đồ | Map nhánh không sinh lại (K7) | Đổi chỗ như map tổng | Rẻ |
| W10 | Skiff chỉ vào map nhánh, không ra map tổng | Chuyến Skiff là chuyến map nhánh | Không để Skiff thành đường tắt khai thác Vùng trung tâm | Skiff thả ở map tổng | Vừa |
| W11 | Map nhánh giữ trạng thái | Cửa, boss, đường tắt giữ, tài nguyên sinh lại | Map nhánh lớn chia được nhiều chuyến | Đặt lại mỗi lần | Vừa |
| W12 | Khu có khí | Không hao nền, không nạp Oxy | Trạm còn người có khí là hợp truyện, không vi phạm P1 vì không hồi | Hao như ngoài | Rẻ |
| W13 | Hazard có máu | Chỉ máy phát Hàng rào cắt | Một hazard dạy người chơi phá vật thể The Wardens | Mọi hazard phá được | Rẻ |
| W14 | Người vớt trong buồng | Kéo buồng tới beacon hoặc cửa ra | Một hành động vớt rõ, dùng lại luật kéo vật | Người vớt tự đi theo | Rẻ |
| W15 | Đặt người vớt | Ingrid, Linh ở Cinder, Rafa ở Wick, Amara ở Lantern, Yusuf ở Waypost | Khớp bảng của gd-story | Mỗi người một xác riêng | Rẻ |
| W16 | Hệ số số người | k(N) = 1 + a x (N trừ 1), a theo dải: Vành đai ngoài 0,30, Vành đai trong 0,25, Vùng trung tâm 0,38 | Sim gd-tech: a tối thiểu khác nhau giữa chương 1 và chương 5. Một a chung không đạt cả hai mục tiêu ở mọi chương | a chung 0,47 (nhóm 4 qua chương đầu quá nhanh), a chung 0,25 (chương 5 dưới 60% mỗi người) | Rẻ |
| W20 | Hướng sửa thời lượng chuyến | Không đổi map. Giây khai thác nhân 2 (gd-items đã làm). Túi bậc 0 đến 4 là 80, 100, 126, 168, 216 và bình 330, 450, 600, 780, 1000 (GDM đã chốt, log 54) | Sim: diện tích, mật độ, hazard không kéo dài chuyến đủ. Túi quyết đầu game, bình quyết cuối game | Tăng số hàng, mật độ, giảm hazard (sim cho ngắn hơn hoặc thêm dưới 1 phút) | Vừa |
| W21 | Định nghĩa để dựng bộ sinh mảnh | Trùng mảnh là cùng mảnh cùng ô. Cờ nửa ngoài "Có" là chỉ cột 3, 4. Cổng ô cố định Ember Mooring 1111, Cinder 1101. Beacon không cùng ô chuyến trước. Đường chính nối liền giữa hai dải. Bố cục dự phòng dựng tay. Kiểm bằng `sim/bo_cuc.py` | QA GD-031: các luật cũ chưa dựng được, cách đọc khác nhau lệch tỉ lệ hợp lệ hàng nghìn lần | Trùng tính theo tập mảnh (kho 16 không đạt tiêu chí) | Rẻ |
| W22 | Nơi cứu và hộ tống Sevra (lời Lead, GD-033) | Dùng lại N4 Veyl Waypost theo đề xuất của gd-story. Cứu ở Waypost Outer Ring, kén về Ember bằng beacon hoặc cửa khí (C3.8). Hộ tống: Skiff chở kén tới cửa N4, kéo tới cửa The Hearth (C5.1). Trong hộ tống kén không theo beacon, lưu ở beacon cố định gần nhất | Không thêm map nhánh và art mới. Một đích cho mỗi mốc. Kén không theo beacon để hộ tống không bị bỏ qua bằng một lần kích | Station Flint, kéo kén xuyên map tổng từ Ember | Rẻ |
| W17 | Kho mảnh MVP | 16 mảnh Vành đai ngoài, 2 ô cố định | Tỉ lệ kho trên ô ghép 1,6, vừa sức 1 artist khi dựng bằng kit | 22 mảnh ngay MVP | Rẻ |
| W19 | Nơi đặt vật kể chuyện chương 4 và 5 | Hộp ghi hành trình ở Bridge Archive (khu cuối Cradle Interior). Bản đồ sao thật và lệnh phục kích mang dấu Daskel ở Data Core của Warden Rig, mở sau BS-5 | Vật kể chuyện là phần thưởng của trận cuối, người chơi tự tay lấy | Rơi từ boss (dễ lỡ khi xua hoặc rớt mạng) | Rẻ |
| W18 | Boss chương 2 và 3 | BS-2 ở Lantern Outer Ring, BS-3 ở Flint. Waypost và Wick không boss | BS-2 là Gulper vây Lantern (mô tả của gd-combat), lần đầu tới Lantern thành trận cứu trạm. BS-3 là máy thu hoạch, đặt ở Flint thì trận boss và manh mối cú lật Driftlife nói cùng một điều. Waypost trung lập giữ vai bến buôn | BS-2 ở Wick, BS-3 ở Waypost | Rẻ |

## Phản biện khung

| # | Vấn đề | Lý do và bằng chứng | Phương án thay |
|---|---|---|---|
| 1 | C8 cộng mục tiêu cũ (4 người tới mốc bằng 70 đến 85%) làm mỗi người chỉ nhặt khoảng 35% | GDM đã xử, log dòng 50: đổi mục tiêu, giá sửa khoang không theo số người | k(N) tính lại ở mục 3.8 |
| 2 | Beacon trong map nhánh vướng K4 | GDM đã xử, log dòng 51: K4 sửa, beacon map nhánh cố định | Không còn |
| 3 | Khung chưa nói dải chưa mở chặn thế nào | GDM đã xử, log dòng 51: K6 sửa, chặn cứng bằng Rạn vụn | Không còn |

## Lịch sử thay đổi

| Ngày | Thay đổi | Lý do | Ai |
|---|---|---|---|
| 2026-11-20 | Ghi Danh mục sơ bộ | Luật đợt số 11 | gd-world |
| 2026-11-20 | GD-033 phản diện mới: N4 thêm nơi cứu Sevra và The Hearth, luật hộ tống 2.7.9, Warden Rig là nơi Daskel chỉ huy ở bãi vỡ, STY-502 đổi nội dung. Sửa theo QA GD-033 vòng 1: đích C3.8 là Ember, Skiff chở kén tới N4, kén không theo beacon khi hộ tống, lưu vị trí kén, khoảng cách đường hộ tống | Brief đợt 6, tên của gd-story, phiếu `qa/GD-033-map.md` | gd-world |
| 2026-11-20 | Đợt 4: địa danh tiếng Anh [TẠM] (log 74), seed và lưu bố cục theo K23, giờ giao thương biên thoát theo K23, trọng số độ khó đã duyệt (log 79), mục tiêu co-op 60 đến 75% (log 69) | Tin GDM, brief đợt 4 | gd-world |
| 2026-11-20 | Sửa 5 lỗi nhẹ QA GD-031 vòng 2: chép lại sim 04:43, bỏ bảng chạy thử khỏi 3.9, khoảng cách khe tính theo vùng gây hại, beacon lối vào BS-2 đến BS-4 | Phiếu `qa/GD-031-map.md` | gd-world |
| 2026-11-20 | Sửa theo QA GD-031 vòng 1: định nghĩa bộ sinh mảnh (W21), `sim/bo_cuc.py`, số 3.9 chép bằng `sim/dong_bo_sim.py`, a Vành đai ngoài 0,30, hình học hazard, cửa C6 sang C7, Amara, Skiff tới Warden Rig, giờ giao thương biên theo C10 và K23 | Phiếu `qa/GD-031-map.md` | gd-world |
| 2026-11-20 | Khe M và V khớp bảng khe chốt của gd-story (phiếu QA GD-031), thêm bảng mốc mở lối vào map nhánh | Tin gd-story | gd-world |
| 2026-11-20 | Báo trước tính từ lúc thấy tín hiệu, chỉ báo ở mép cho H01, H04, H07, tốc độ đá H04 10 u/s | Tin gd-ux (QA) | gd-world |
| 2026-11-20 | Thêm beacon B3 trước D1 ở Cinder, luật beacon phía lối vào mỗi phòng boss, giờ giao thương biên rút khỏi phòng boss | Tin gd-combat (QA N8, L6) | gd-world |
| 2026-11-20 | k(N) theo dải nâng Vành đai ngoài 0,27, Vùng trung tâm 0,38 cho có dư mục tiêu 60% | Sim gd-tech bảng 2 | gd-world |
| 2026-11-20 | k(N) theo dải: Vành đai ngoài 0,25, Vành đai trong 0,25, Vùng trung tâm 0,35 | Tin gd-economy, bảng mục 4 sim chuyến gd-tech | gd-world |
| 2026-11-20 | Đợt 2b: thang túi và bình GDM chốt (log 54) vào Hiện hành, 3.2, 3.9. Mục tiêu bị kéo về hai mức (log 56) | Tin GDM | gd-world |
| 2026-11-20 | Mục 3.9 viết lại theo sim có Driftlife: đề xuất thang túi và bình | Tin gd-tech | gd-world |
| 2026-11-20 | Camera 10 x 17,8 u theo gd-ux, bản đồ chuyến vào MVP, 15% chỉ là giả định của phép tính | Tin gd-ux | gd-world |
| 2026-11-20 | Thêm mục 3.9 theo sim GD-030: map giữ nguyên, đề xuất đổi giây khai thác và túi | Tin gd-tech | gd-world |
| 2026-11-20 | Co-op: Driftlife thường x (1 + 0,22 x (N trừ 1)), boss x (1 + 0,6 x (N trừ 1)) theo gd-combat. Hết lệch hệ số chồng | Tin gd-combat | gd-world |
| 2026-11-20 | SLV-101 còn 1 lần quay (gd-items), bỏ rải thưa 8 u, giữ trần 25% khe | Tránh giảm hai lần | gd-world |
| 2026-11-20 | Đợt 1b: k(N) tính lại theo mục tiêu mới, hạ tỉ lệ kích hoạt một người, luật rải thưa nhặt tay, gỡ dấu CHỜ vai đợt 1, phản biện đã xử | Tin GDM, log 50 và 51 | gd-world |
| 2026-11-20 | Khớp bản đủ cốt truyện: bỏ khe M thừa ở N4, N5, N6, thêm khe V1 ở Cinder và khe M4, M5 ở Cradle, mốc Yusuf C3.2 | Tin gd-story | gd-world |
| 2026-11-20 | Solace là mồi, không có vùng Solace: hộp ghi hành trình ở Cradle, Data Core sau boss ở Warden Rig (W19) | Tin GDM, khung B4, B9, B11, K10 | gd-world |
| 2026-11-20 | Bản đủ đầu tiên, số ước từ `projects/game-moi/sim/ngan_sach_oxy.py` | GD-026 | gd-world |
| 2026-11-23 | Sửa câu văn theo đánh giá humanizer (production/reports/2026-11-23-humanizer-gdd.md): bỏ lịch sử trong thân luật, phủ định thừa, câu chốt lặp. Không đổi luật, số, ID. | production/reports/2026-11-23-humanizer-gdd.md | gd-world |
