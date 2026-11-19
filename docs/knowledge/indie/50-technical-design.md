# 50 - Technical design cho game indie

Kiến thức nền của vai gd-tech. Cách làm việc (quy trình, checklist, phối hợp) nằm ở `docs/playbooks/indie/gd-tech.md`, file này không chép lại. Ký hiệu [Nx] trỏ tới nguồn ở mục 6.

## 1. Khái niệm lõi và thuật ngữ

| Thuật ngữ | Định nghĩa một dòng |
|---|---|
| Technical designer | Designer đứng giữa thiết kế và lập trình, biến luật thành dữ liệu, tool và tham số chỉnh được [N22] |
| Data-driven design | Hành vi game đọc từ dữ liệu ngoài code, đổi số không cần build lại logic [N3] [N5] |
| ScriptableObject | Asset dữ liệu của Unity, nhiều object dùng chung một bản, ở bản build chỉ đọc được [N3] |
| Single source of truth | Mỗi số chỉ sống ở một nơi, nơi khác tham chiếu hoặc sinh ra từ đó [N5] [N6] |
| Importer / exporter | Script đưa dữ liệu từ Sheet hay CSV vào engine và ngược lại [N5] [N6] |
| Round-trip | Xuất rồi nhập lại không mất hay đổi dữ liệu |
| Validator | Script kiểm luật chéo giữa các bảng (ID duy nhất, tham chiếu có thật), thoát lỗi khi sai [N6] |
| Source / pool / converter / drain | Bốn loại nút của mô hình dòng tài nguyên: sinh ra, tích lại, đổi dạng, mất đi [N7] [N23] |
| Monte Carlo simulation | Chạy mô hình ngẫu nhiên nhiều lần rồi đọc phân bố kết quả thay vì một con số [N8] |
| Seed | Giá trị khởi tạo RNG, cùng seed cho cùng chuỗi ngẫu nhiên, nhờ đó tái hiện được lỗi |
| Determinism | Cùng đầu vào cho cùng đầu ra, điều kiện để sim, replay và test có ý nghĩa [N1] |
| Fixed timestep | Bước vật lý cố định độc lập với tốc độ khung hình [N1] [N2] |
| Tuning knob | Tham số designer chỉnh trực tiếp (lực đẩy, cản, tiêu hao), không cần lập trình viên [N22] |
| Game feel | Cảm giác điều khiển một vật ảo theo thời gian thực, gồm input, phản hồi, ngữ cảnh, polish, ẩn dụ, luật [N10] |
| Juice | Phản hồi thừa có chủ đích (rung, bật, hạt, âm) cho một thao tác nhỏ [N14] |
| Forgiveness | Kỹ thuật vô hình giúp người chơi đúng ý đồ: coyote time, input buffer, nới vùng va chạm [N13] |
| Telemetry | Dữ liệu sự kiện ghi tự động khi chơi để phân tích hành vi [N16] [N17] |
| Event schema | Định nghĩa một sự kiện: tên, khi gửi, tham số, kiểu giá trị |
| Greybox | Bản dựng bằng khối thô để thử nhịp và luật trước khi có art |

## 2. Nguyên lý

**2.1 Tách dữ liệu khỏi logic.** Số cân bằng nằm trong asset hay bảng, code chỉ đọc. Đúng vì designer chỉnh được mà không chạm code, và Unity giữ một bản dữ liệu dùng chung cho mọi object tham chiếu nên đỡ bộ nhớ [N3] [N4]. Không áp cho trạng thái lưu game của người chơi: ScriptableObject ở bản build chỉ đọc được, save phải dùng file riêng [N3].

**2.2 Một số một nơi, file sinh ra không sửa tay.** Team Defend the Dam dùng Google Sheet làm CMS, giữ CSV dẫn xuất trong source control để nhập lại bản trước khi hỏng [N5]. BakingSheet đưa tham chiếu chéo giữa sheet và validate vào ngay pipeline [N6]. Không áp khi còn ở giai đoạn phác ý tưởng một ngày, lúc đó sửa tay nhanh hơn dựng pipeline.

**2.3 Mô phỏng trước khi build.** Vẽ dòng tài nguyên bằng source, pool, converter, drain cho thấy vòng lặp dương (lãi chồng lãi) hay vòng âm (kẹt) trước khi có code game [N7] [N23]. Dormans chứng minh sơ đồ chạy được có thể dùng để cân bằng game trước khi dựng [N8]. Schreiber và Romero dạy dò đường cong chi phí, tiến độ bằng bảng tính [N9]. Không áp cho cảm giác điều khiển: sim không thay được tay người chơi (xem 2.5).

**2.4 Tất định là điều kiện của mọi phép đo.** Fixed timestep tách bước vật lý khỏi tốc độ khung hình, nhờ đó chuyển động giống nhau trên máy nhanh và chậm [N1]. Unity mặc định bước 0,02 s, giảm bước thì chính xác hơn nhưng tốn CPU [N2]. Cộng với RNG có seed, mọi lỗi ngẫu nhiên tái hiện được. Không cần cho phần trang trí (hạt, rung camera) vốn không ảnh hưởng luật.

**2.5 Feel là tham số, chỉnh bằng tay khi chơi.** Swink chia game feel thành các thành phần đo và chỉnh được, không phải cảm tính mơ hồ [N10]. Mô hình xử lý của người cho khoảng 100 ms cảm nhận và khoảng 240 ms một vòng chỉnh hành động, nên phản hồi chậm hơn ngưỡng đó làm mất cảm giác điều khiển trực tiếp [N11]. Technical designer expose núm để designer tự dò [N22]. Không áp cho thao tác không cần thời gian thực (menu quán, chọn công thức).

**2.6 Tha thứ vô hình.** Celeste cho nhảy sau khi rời mép, nhớ lệnh nhảy bấm sớm, đẩy nhân vật qua góc khi va đầu, nới cửa sổ bật tường 2 pixel. Người chơi thấy game khó nhưng công bằng vì game đọc đúng ý đồ [N13]. Không áp khi chính độ chính xác là thử thách người chơi chọn (chế độ khó, speedrun).

**2.7 Juice có liều.** Jonasson và Purho cho thấy thêm phản hồi nhỏ làm một game nhạt thành dễ chịu [N14]. Một talk sau đó ở GDC Europe phản biện rằng polish thừa có thể làm giảm sự nhập tâm [N12]. Áp mạnh cho cắt, choáng, lưới. Giảm ở quán, nơi người chơi cần đọc thông tin.

**2.8 Phản hồi và telemetry đặt câu hỏi trước.** Subnautica cho người chơi bấm F8 gửi phản hồi kèm ảnh chụp, nhận hàng trăm nghìn phiếu để chọn việc làm tiếp, và dựng hệ telemetry riêng [N17]. Sách Game Analytics xếp thiết kế hệ telemetry thành một phần riêng của vòng sản xuất [N16]. Không áp đại trà: sự kiện không gắn câu hỏi thiết kế chỉ sinh dữ liệu không ai đọc.

**2.9 Playtest nhỏ, nhiều đợt.** Nielsen khuyên chia ngân sách 15 người thành 3 đợt mỗi đợt 5 người, sửa giữa các đợt, vì đợt đầu đã lộ phần lớn lỗi dễ dùng [N15]. Không áp khi cần số thống kê (tỉ lệ thắng, thời gian trung bình), lúc đó cần nhiều người hơn hoặc dùng sim.

**2.10 Bản thô trước bản đẹp.** Đội Dave the Diver tái dùng project Unity của bản mobile đã bỏ để thử core nhanh [N19]. Dome Keeper bắt đầu từ bản jam Ludum Dare làm bằng Godot [N21]. Không áp cho phần đã được chứng minh, lúc đó làm thẳng bản sạch.

## 3. Con số tham chiếu

| Số | Giá trị | Nguồn |
|---|---|---|
| Fixed timestep mặc định của Unity | 0,02 s (50 lần mỗi giây) | [N2] |
| Thời gian cảm nhận trong mô hình xử lý của người | khoảng 100 ms (dải 50 đến 200 ms) | [N11] |
| Một vòng cảm nhận, nhận thức, vận động | khoảng 240 ms trung bình | [N11] |
| Cửa sổ bật tường của Celeste | 2 pixel ở độ phân giải 320x180 | [N13] |
| Cỡ đợt playtest dễ dùng Nielsen khuyên | 5 người mỗi đợt, 3 đợt thay vì 15 người một lần | [N15] |
| Phản hồi trong game của Subnautica | hàng trăm nghìn phiếu, dùng để chọn việc làm tiếp | [N17] |
| Đội làm Dave the Diver | 27 người, PC, Mac, Nintendo Switch | [N19] |
| Bản jam của Dome Keeper | Ludum Dare 48 (4/2021), xếp hạng 9 | [N21] |

## 4. Phân tích game tham chiếu

| Game | Làm gì | Vì sao hiệu quả | Bài học cho Space Salvage |
|---|---|---|---|
| Dave the Diver | Pixel art 2D trên nền 3D bằng URP. Đàn cá đẩy nhau dùng C# Job System với Unity Physics. Input System cho nhiều nền tảng. Tái dùng project mobile cũ để thử core [N19] | Chọn công nghệ theo nhu cầu cảm giác (chiều sâu biển) và thử core loop trước khi polish | Space Salvage cùng engine và cấu trúc ngày hai nửa. Prototype jetpack và vòng một ngày trước art. Đo hiệu năng sớm nếu tầng có nhiều salvage và quái cùng lúc |
| Hardspace: Shipbreaker | Cắt tàu theo vật lý, tàu dựng bán thủ tục từ module, có hệ điện và phóng xạ. Có talk riêng về cách cắt tương tác với vật lý và pipeline sinh tàu cắt được [N18] | Một động từ (cắt) gắn với hệ vật lý nhất quán nên mỗi con tàu thành câu đố mới | Cắt plasma của Space Salvage cần luật cắt viết rõ (cắt gì, ra mảnh gì) và dữ liệu salvage theo module để sim được số mảnh mang về |
| Subnautica | Nút F8 gửi phản hồi kèm ảnh, telemetry tự viết, công khai dữ liệu phản hồi trong early access [N17] | Phản hồi gắn đúng vị trí và thời điểm người chơi gặp vấn đề, đội ưu tiên bằng dữ liệu thay vì đoán | Event Tracking cho playtest offline nên có sự kiện "ghi chú người chơi" kèm vị trí, ngày, seed. Ghi ra file cục bộ vì game offline |
| Stardew Valley | Item, object nằm trong file dữ liệu (`Data/Objects` từ bản 1.6), mỗi item có ID chuỗi duy nhất, mod sửa dữ liệu không cần sửa code [N20] | Dữ liệu tách khỏi code đủ sạch để cộng đồng mở rộng, ID chuỗi tránh trùng khi thêm nội dung | ID của ITEM LIST, Recipe, Salvage nên là chuỗi ổn định (không phải số thứ tự dòng) để Sheet chèn dòng không làm lệch dữ liệu Unity |
| Dome Keeper | Bản jam Godot thành game thương mại, nhịp đào dưới đất như chạy đua với đồng hồ trước khi quay về bảo vệ vòm [N21] | Vòng ngắn, áp lực thời gian rõ, công cụ cho phép lặp nhanh | Năng lượng bộ đồ là đồng hồ chuyến bay. Prototype phải cho chỉnh tốc độ tiêu hao ngay khi chơi để tìm nhịp "đủ căng" |

## 5. Sai lầm thường gặp ở team indie nhỏ

| Sai lầm | Hậu quả | Tránh bằng |
|---|---|---|
| Số cân bằng viết cứng trong code hoặc prefab | Mỗi lần chỉnh cần lập trình viên, designer ngừng thử | Dữ liệu trong asset, đọc từ bảng [N3] [N4] |
| Một số ghi ở nhiều tab, sửa một nơi quên nơi khác | Dev nạp số sai, QA chấm theo số khác | Một nguồn, validator so chéo [N5] [N6] |
| Đọc cột Sheet theo vị trí | Chèn một cột làm hỏng cả bộ dữ liệu | Đọc theo tên header, có tham chiếu chéo [N6] |
| Sim chỉ in trung bình | Ngày tệ (kẹt ₵, nợ cứu hộ) bị giấu | Chạy nhiều lần, đọc phân bố [N8] |
| Vật lý chạy theo khung hình | Jetpack bay khác nhau trên máy khác nhau, sim không khớp game | Fixed timestep [N1] [N2] |
| Ngẫu nhiên không seed | Lỗi chỉ gặp một lần, không tái hiện | Seed theo ngày, ghi seed trong log |
| Chốt số di chuyển trên giấy | Điều khiển trôi, khó dừng, phản hồi trễ | Prototype có núm chỉnh, dò khi chơi [N10] [N11] |
| Thêm juice mọi nơi | Màn quán rối, khó đọc thông tin | Juice theo hành động, có liều [N14] [N12] |
| Telemetry ghi mọi thứ | Nhiều dữ liệu, không trả lời câu nào | Mỗi sự kiện gắn một câu hỏi thiết kế [N16] |
| Playtest một lần thật lớn ở cuối | Sửa muộn, đắt | Đợt nhỏ lặp lại [N15] |

## 6. Nguồn

| ID | Nguồn | Link |
|---|---|---|
| N1 | Glenn Fiedler - Fix Your Timestep (Gaffer On Games) | https://gafferongames.com/post/fix_your_timestep/ |
| N2 | Unity Manual - Fixed updates (Unity 6) | https://docs.unity.com/en-us/engine/6000.0/manual/scripting/managing-time-and-frame-rate/fixed-updates |
| N3 | Unity Manual - ScriptableObject (Unity 6) | https://docs.unity.com/en-us/engine/6000.0/manual/scripting/get-started/fundamental-unity-types/class-scriptable-object |
| N4 | Ryan Hipple - Game Architecture with Scriptable Objects (Unite Austin 2017), bản tóm của Unity | https://unity.com/how-to/architect-game-code-scriptable-objects |
| N5 | Turning data into enemies: Google Spreadsheets as a CMS for Unity in Defend the Dam (Game Developer) | https://gamedeveloper.com/design/turning-data-into-enemies-how-we-used-google-spreadsheets-as-a-cms-for-unity-in-defend-the-dam |
| N6 | BakingSheet (cathei), thư viện Sheet sang dữ liệu Unity | https://github.com/cathei/BakingSheet |
| N7 | Adams, Dormans - Game Mechanics: Advanced Game Design (2012), chương 5 Machinations | https://www.oreilly.com/library/view/game-mechanics-advanced/9780132946728/ch05.html |
| N8 | Dormans - Simulating Mechanics to Study Emergence in Games (AIIDE) | https://ojs.aaai.org/index.php/AIIDE/article/view/12477 |
| N9 | Schreiber, Romero - Game Balance (CRC Press 2021) | https://www.routledge.com/Game-Balance/Schreiber-Romero/p/book/9781498799577 |
| N10 | Steve Swink - Game Feel: A Game Designer's Guide to Virtual Sensation, và bài Principles of Virtual Sensation | https://shop.elsevier.com/books/game-feel/swink/978-0-12-374328-2 và https://www.gamedeveloper.com/design/principles-of-virtual-sensation |
| N11 | Stephen Morris - split second timings for intuitive controls (PocketGamer.biz) | https://www.pocketgamer.biz/best-of-british-stephen-morris-considers-the-split-second-timings-needed-for-intuitive-controls |
| N13 | Maddy Thorson - Celeste & Forgiveness | https://maddymakesgames.com/articles/celeste_and_forgiveness/ |
| N14 | Jonasson, Purho - Juice It or Lose It (GDC Europe 2012, GDC Vault) | https://gdcvault.com/play/1016487/Juice-It-or-Lose |
| N15 | Jakob Nielsen - Why You Only Need to Test with 5 Users (NN/g) | https://nngroup.com/articles/why-you-only-need-to-test-with-5-users/ |
| N16 | Seif El-Nasr, Drachen, Canossa - Game Analytics: Maximizing the Value of Player Data (Springer 2013) | https://www.springer.com/in/book/9781447147688 |
| N17 | Unknown Worlds - Creating a Telemetry System for Subnautica, phỏng vấn Charlie Cleveland (Fandom), Subnautica as told by its bug reports (Kotaku) | https://unknownworlds.com/subnautica/?p=326 và https://www.fandom.com/articles/subnautica-charlie-cleveland-interview và https://kotaku.com/subnautica-as-told-by-its-bug-reports-1823274701 |
| N18 | How to Dissect an Exploding Spaceship in Hardspace: Shipbreaker (GDC Vault), An inside look at the making of Hardspace: Shipbreaker (Game Developer) | https://gdcvault.com/play/1026837/How-to-Dissect-an-Exploding và https://gamedeveloper.com/design/video-an-inside-look-at-the-making-of-i-hardspace-shipbreaker-i- |
| N19 | Unity case study Dave the Diver, MINTROCKET on porting Dave the Diver (80.lv) | https://unity.com/case-study/dave-diver và https://80.lv/articles/mintrocket-on-porting-dave-the-diver-to-different-platforms |
| N20 | Stardew Valley Wiki - Modding: Items, Modding: Object data | https://stardewvalleywiki.com/Modding:Items và https://stardewvalleywiki.com/Modding:Object_data |
| N21 | Dome Keeper (Wikipedia), The Sausage Factory 423 phỏng vấn René Habermann | https://Www.Wikipedia.org/wiki/Dome_Keeper (link podcast chết khi kiểm 2026-11-19) |
| N22 | Why You Need a Technical Designer (Game Developer) | https://gamedeveloper.com/design/why-you-need-a-technical-designer |
| N23 | The Designer's Notebook: Machinations, a new way to design game mechanics (Game Developer) | https://gamedeveloper.com/design/the-designer-s-notebook-machinations-a-new-way-to-design-game-mechanics |
| N12 | Indies, resist the urge to juice it or lose it (Game Developer) | https://gamedeveloper.com/design/video-indies-resist-the-urge-to-juice-it-or-lose-it- |
