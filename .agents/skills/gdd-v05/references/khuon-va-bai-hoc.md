# Khuôn GDD V0.5 và bài học từ các bản Lead đã duyệt

Gộp từ các bản V0.5 Lead đã duyệt của game họ drop (game bóng nổi, game tile rơi, game chữ rơi) và bản viết gọn của một game băng chuyền phục vụ Order. Mẫu cấu trúc gốc Lead đưa: bản V0.5 của một game sort.

## 1. Hai tab mặc định, tab phụ tùy chọn

| Tab | Cột | Ghi chú |
|---|---|---|
| Gameplay | Ảnh, Mục, Mô tả | Cột Ảnh để trống cho wireframe hoặc ảnh demo Lead dán |
| Main Task | STT, Hạng mục, Scope, Người thực hiện, Trạng thái, Ghi chú | Hàng nhóm (GD, 2D ART, DEV, SFX, VFX) chỉ có tên ở cột Hạng mục |

- Không Tutorials, Thuật toán level, Level data, V1 Update. Sheet bản sao còn các tab đó thì ẩn, không xóa.
- Mặc định V0.5 chỉ 2 tab Gameplay và Main Task. Tab phụ là tùy chọn, chỉ thêm khi game có nội dung đó (ví dụ chỉ game có nhân vật mới có tab Nhân vật). Khuôn cột và ví dụ: `references/tab-phu.md`.
  + Theo luật Lead đã nói, không hỏi lại: tab Nhân vật khi game có nhân vật, tab SFX, VFX - Anim, Object khi game có nội dung đó và danh sách dài hơn ô Main Task 5 dòng.
  + Tab khác chỉ khi Lead nói bằng lời (ví dụ tab Object List, Group List cho art).

## 2. Tab Gameplay: khung chung cho mọi Puzzle

Mỗi game có gameplay và điều kiện thắng thua riêng, skill phải viết được GDD cho mọi game Puzzle. Mặc định là khung chung. Họ drop chỉ là một preset (mục 2b), dùng khi người dùng xác nhận game thuộc họ đó.

| Mục | Chứa | Lấy từ |
|---|---|---|
| Cách chơi | Người chơi chạm gì, làm gì để tiến, mục tiêu ván | Câu 1 ở bước hỏi 3 câu (SKILL mục 0) |
| Các mục riêng của game, thường 1 tới 4 mục | Mỗi mục một vùng hoặc một luật lớn: vật đi đâu, ai lấy, vùng nào đầy thì sao. Người dùng tự đặt tên mục | Câu 1 và đính kèm |
| Win | Chỉ điều kiện thắng. Không ghi meta (coin, sao, kỷ lục, phần thưởng), áp mọi game | Câu 2 |
| Lose | Điều kiện thua, bằng điều người chơi thấy | Câu 3 |

- Câu nào người dùng chưa trả lời thì mục đó ghi "- chờ Lead chọn".
- Mỗi ô 1 tới 3 gạch đầu dòng, mục luật dài nhất được dài hơn.
- Không mục nào của họ drop (Order, hàng chờ, Hồi sinh, Revive) khi game không thuộc họ drop.

Gợi ý mục riêng theo dạng Puzzle. Bảng chỉ để gợi ý khi hỏi câu 1, tên mục cuối cùng theo lời người dùng:

| Dạng | Gợi ý mục riêng |
|---|---|
| Sort | Ống hoặc cột, Cách đổ, Ống trống |
| Match 3 | Bàn, Đổi chỗ, Vật đặc biệt |
| Tile match | Bàn nhiều tầng, Khay, Ghép bộ |
| Jam hoặc block | Bàn và lối ra, Cách di chuyển, Bãi chờ |
| Screw hoặc pin | Tấm và ốc, Hộp màu, Ô chờ |
| Path | Bàn, Vẽ đường, Ô chặn |
| Drop | Dùng preset họ drop (mục 2b) |
| Phục vụ Order (băng chuyền) | Khay đĩa, Order, Logic, Băng chuyền |

Luật viết chung cho mọi game:

- Viết cho Game Designer đọc, đơn giản và dễ hiểu: câu ngắn, từ thường, nói người chơi thấy gì, làm gì, được gì. Không viết như spec dev (bộ đếm, công thức, ngoại lệ biên kiểu "đĩa cuối được đẩy lên 7/6"). Không dùng dấu chấm phẩy, tách ý thành 2 gạch hoặc dùng "," hay ".". Chi tiết cài đặt dev đọc ở prototype, không đưa vào V0.5.
- Ví dụ: bản Lead sửa tay của một game băng chuyền phục vụ Order, từ 8 mục 22 dòng còn 7 mục 14 dòng, là mức chữ chuẩn:
  + Chỉ luật lõi. Bỏ meta (sao, kỷ lục, phần thưởng), bỏ mục Cứu ván, chỉ ghi "dùng booster để tránh thua" ở mục băng chuyền. Bỏ dòng xem trước khách, dòng mô tả art.
  + Logic là chuỗi nguyên nhân rồi kết quả bằng câu thường, không đặt tên luật con: "Đồ ăn trên băng chuyền trùng với Order của khách hàng sẽ được khách hàng lấy và ăn".
  + Dùng từ game quen: Capacity, match, booster, Order, win. Ví dụ: "Capacity băng chuyền là 6".
  + Win, Lose viết bằng điều người chơi thấy: "Dọn hết đồ ăn hoặc phục vụ hết khách hàng là win", không qua thanh tiến độ.
- Bài học từ bản Lead sửa tay đó:
  + Win, Lose, mục tiêu ván lấy từ câu trả lời của người dùng ở bước hỏi 3 câu (SKILL mục 0), không chép biến hay điều kiện của build. Cả 4 ô Lead đổi luật đều do chép từ build.
  + Viết câu luật đầy đủ, nói rõ vật đi đâu và ai lấy: "Đồ ăn trên băng chuyền trùng với Order của khách hàng sẽ được khách hàng lấy và ăn".
  + Không đặt nhãn kiểu tên hàm ở đầu dòng ("Ghép lại:", "Chọn liền tay:"). Viết thành câu.
  + Cách giải tỏa gọi chung là "dùng booster", không liệt kê từng nút.
  + Không chứa meta (sao, kỷ lục, khăn), biên của build (giới hạn Hoàn tác, ghế dùng tới hết lượt), chi tiết art.
  + Game ngoài họ drop không sinh mục mặc định của họ drop (Cứu ván, Hồi sinh).
- Không có mục Mechanic trong Gameplay: Lead tự bỏ trên Sheet, mechanic chỉ nằm ở Main Task.
- Không liệt kê trạng thái, không đánh số 30 điều như V1.

## 2b. Preset họ drop

Dùng khi người dùng xác nhận game thuộc họ drop: nhặt vật vào Order, hàng chờ, vật lý rơi hoặc nổi, chỉ khác object và vùng nhặt (ví dụ game tile rơi, game chữ rơi, game bóng nổi). Cấu hình ghi `"ho": "drop"`, chép `cau-hinh/drop.json`.

| Mục | Chứa | Ví dụ (bản game họ drop đã duyệt, sửa dấu câu và câu Lose theo luật viết hiện hành) |
|---|---|---|
| Cách chơi | Chạm gì, nhặt được khi nào, thắng bằng gì | "- Tap object dưới vạch sáng để nhặt, object phía trên vạch nhìn mờ, chưa nhặt được" |
| Order | Bao nhiêu Order, mấy ô, clear thì sao, thanh tiến độ | "- Luôn có 2 Order, mỗi Order là 1 loại object, 3 ô" |
| Logic | Mỗi chủ đề một dòng "Tên: luật" như Lead tự viết trên Sheet, nhánh con bằng "  + " | "- Điều phối object:" / "  + Trùng Order: Tự động bay vào Order tương ứng." |
| Hàng chờ | Số ô, ô mở bằng ads, thứ tự vào, khi nào thua | "- 7 ô: 5 ô mở + 2 ô "+" mở bằng xem quảng cáo, giữ tới hết level" |
| Hồi sinh | Giá, làm gì với trạng thái thua | "- Màn thua: Hồi sinh 900 coin hoặc Chơi lại" |
| Win | Như khung chung | "- Clear hết Order là win" |
| Lose | Như khung chung | "- Hàng chờ đầy mà không object nào bay lên Order được là thua" |

- Logic theo chủ đề như bản Lead sửa (Nhặt, Điều phối, Ghép từ hàng chờ, Cơ chế hàng chờ, Chuỗi Combo). Nhãn "Tên: luật" chỉ dùng ở preset này.
- Luật Order khác (ví dụ Order là nhóm chủ đề 4 ô) thì viết luật bằng ví dụ: "ví dụ Order Trái cây: nhặt 4 tile trái cây".
- Win, Lose vẫn hỏi người dùng 3 câu. Câu trong bảng trên chỉ là mặc định khi người dùng xác nhận đúng luật đó.

## 3. Tab Main Task

Khung gốc 14 việc, 5 nhóm. Nhóm DEV viết mỗi tính năng hoặc mechanic một dòng theo luật bên dưới. Số STT liền từ 1.

Luật Main Task V0.5, áp mọi game: task nhỏ của cùng một tính năng thì gộp lại, Scope ngắn dễ hiểu, bỏ thiết kế ngoài core (sao, quà, khăn), chỉ tập trung core win lose:

- Mỗi tính năng hoặc mechanic là 1 dòng. Không tách một tính năng thành nhiều dòng con kiểu "Tên: phần việc" (ví dụ 5 dòng "Nắp thủy tinh: ..." thì gộp còn 1 dòng).
- Nhóm DEV không dồn thành 1 cục. Mức gợi ý: 6 tới 8 dòng.
- Scope ngắn, 1 tới 2 ý. "Xong khi" chỉ 1 câu.
- V0.5 chỉ làm core win lose. Không đưa vào: sao, kỷ lục, quà, skin, khăn, chương, Home chọn chương, mọi màn ngoài core.
- Luồng UI V0.5 chỉ gồm Gameplay, Win, Lose, cộng màn quảng cáo nếu game có.

Ví dụ đạt (game băng chuyền phục vụ Order sau khi viết gọn, chép nguyên văn Hạng mục và Scope):

| Loại dòng | Hạng mục | Scope |
|---|---|---|
| Mechanic đã gộp còn 1 dòng (trước là 5 dòng "Nắp thủy tinh: ...") | Nắp thủy tinh | Khay có nắp không chọn được. Lấy khay kề thì số giảm 1, về 0 thì nhấc nắp<br>Xong khi: số giảm đúng theo khay kề sau mỗi lượt, viền sáng chỉ đúng khay kề |
| DEV một tính năng | Băng chuyền và Order | Đầu bếp chia món lên băng 6 ô, khách gọi đúng món thì lấy ăn. Ghế 3, 4 mở bằng quảng cáo<br>Xong khi: mọi món tới đúng khách, món dư nằm lại trên băng |
| Luồng UI | Luồng UI | Gameplay, Win, Lose (Chơi lại), Quảng cáo mở ghế, Settings (âm thanh, nhạc, rung) |

Bản ví dụ còn Settings ở Luồng UI. Game mới bỏ Settings theo luật trên, trừ khi Lead nói giữ.

| STT | Nhóm | Hạng mục | Scope viết gì |
|---|---|---|---|
| 1 | GD | Luật lõi V0.5 | Liệt kê các mục của tab Gameplay. Trạng thái "Đã làm", Ghi chú "Tab Gameplay" |
| 2 | GD | Mechanic | "1 mechanic hidden" khi Lead chưa chốt bằng lời |
| 3 | GD | Level Design | "15 level". Ghi chú vị trí level khó và nhịp mở thứ mới |
| 4 | GD | Tool level | "File json 15 level" |
| 5 | GD | Tutorials | Onboarding L1, các thứ cần dạy, mechanic |
| 6 | 2D ART | Demo màn gameplay | Những gì có trên màn. Ghi chú ref (ảnh Lead gửi, prototype, link store) |
| 7 | 2D ART | Luồng UI | Gameplay, Win, Lose, cộng màn quảng cáo nếu game có. Họ drop thêm Hồi sinh |
| 8 | 2D ART | Background | Số lượng, theme |
| 9 | 2D ART | Các object: <vật> | Số loại, cách chia (màu x loại), danh sách, yêu cầu nhận ra ở cỡ nhỏ nhất |
| 10 | 2D ART | Mechanic | "Art của mechanic khi chốt" |
| 11 | DEV | Core gameplay + 1 mechanic hidden + Diễn hoạt anim <vật> | Nhóm gốc, khi viết tách mỗi tính năng hoặc mechanic một dòng, thường 6 tới 8 dòng. Họ drop thêm Revive ở Hạng mục, Scope ghi vật lý, vùng nhặt, Order, hàng chờ, combo, Hồi sinh |
| 12 | DEV | Ghép luồng UI + Ghép level Design | "Ghép UI và 15 level từ file json" |
| 13 | SFX | Sfx | Từng âm theo khoảnh khắc |
| 14 | VFX | Anim, VFX | Từng hiệu ứng theo khoảnh khắc |

- Ghi rõ số lượng và đủ từng mục, ví dụ Art vẽ nhân vật thì ghi có bao nhiêu nhân vật:
  + Art: mỗi việc có con số, ví dụ "1 đầu bếp, 8 khách, mỗi nhân vật 3 biểu cảm".
  + Anim, VFX: mỗi dòng một hiệu ứng, ghi "Tên: khi nào chạy, trông thế nào".
  + SFX: mỗi dòng một âm, ghi "Tên: khi nào phát, cảm giác".
  + Không gộp kiểu "combo, Sạch đĩa, confetti".
  + Không nhét cả danh sách vào 1 ô (ví dụ ô SFX 20 dòng). Ô Main Task tối đa 5 dòng. Danh sách dài hơn tách sang tab phụ theo `references/tab-phu.md` mà không hỏi lại. Ô Main Task chỉ ghi số lượng và tên tab, ví dụ "20 hiệu ứng, xem tab VFX - Anim".
- Game có nhân vật thì thêm tab Nhân vật mô tả từng nhân vật, ref, hành vi Animation và biểu cảm. Cột theo `references/tab-phu.md` mục 3. Main Task nhóm 2D ART và VFX trỏ sang tab này.
- DEV mỗi tính năng hoặc mechanic một dòng, làm rõ, không để thành 1 cục, gộp theo tính năng. Không dùng luật cũ "DEV đúng 2 dòng", không tách một tính năng thành từng phần việc.
  + Mỗi dòng: Hạng mục là tên tính năng ngắn, Scope 1 tới 2 ý, "Xong khi" 1 câu.
  + Thứ tự: core gameplay -> mechanic -> booster -> anim -> ghép UI -> ghép level.
  + Hai dòng 11, 12 ở bảng trên chỉ là nhóm gốc, khi viết thì tách theo tính năng.
- 2D Art đúng 5 việc: Demo màn gameplay, Luồng UI, Background, Các object, Mechanic.
- Không cột phụ thuộc. Không trỏ sang tab Tutorials, Level data.
- Tài sản dùng lại từ game cũ: Ghi chú "Đã có từ <game>", "Sản xuất lại dựa trên style của <game>", "Sửa lại với Gameplay mới" (cách Lead tự ghi).
- Level Design Ghi chú có thể thêm nhịp mở (ví dụ game bóng nổi: "Sương từ L2, họa tiết từ L4, tối đa 6 cột").

## 4. Trường cấu hình (`sinh-v05.py`)

| Trường | Bắt buộc | Dùng ở | Ví dụ |
|---|---|---|---|
| `ten_game`, `vat` | có | mọi chỗ | "<tên game>", "object" |
| `ho` | không | chọn preset | `"drop"` bật preset họ drop. Không có là khung chung |
| `gameplay` | có, khi không có `ho` (thiếu thì script dừng) | cả tab Gameplay, thứ tự Cách chơi, mục riêng, Win, Lose. Thiếu mục Win hoặc Lose, hoặc mục không có dòng, thì script ghi "- chờ Lead chọn" | list `{"muc": "...", "dong": ["- ...", "  + ..."]}` |
| `vat_day_du` | họ drop | Cách chơi | "bóng bay" |
| `tam_nhin`, `tam_nhin_them` | họ drop | Cách chơi | "dưới vạch sáng", "object phía trên vạch nhìn mờ, chưa nhặt được" |
| `cung_loai` | họ drop | Cách chơi | "cùng hình object" |
| `logic_nhat`, `bo_3` | họ drop | Logic | câu nhặt và lấp chỗ, "bộ 3" |
| `dong_cach_choi`, `dong_order`, `dong_logic`, `dong_hang_cho`, `dong_hoi_sinh` | họ drop, không bắt buộc | ghi đè đúng mục đó | list dòng |
| `luat_loi_scope` | không | Main Task #1 | Mặc định tên mọi mục Gameplay theo thứ tự, ví dụ "Cách chơi, Ống nước, Win, Lose" |
| `mechanic_scope` | không | #2 | mặc định "1 mechanic hidden" |
| `so_level`, `level_tag` | không | #3, #4, #12 | 15, "2 level very hard 10, 15. 3 level hard 5, 8, 13" |
| `tutorial_scope` | không | #5 | |
| `demo_scope`, `object_scope`, `dev_scope`, `sfx_scope`, `vfx_scope` | nên có | #6, #9, #11, #13, #14 | Khung chung thiếu thì script ghi "chờ Lead chọn" |
| `background`, `nhan_object`, `ref` | không | #8, #9, Ghi chú #6 #9 #11 | |
| `ui_scope`, `dev_hang_muc` | không | Scope #7, Hạng mục #11 | game đã có mechanic (ví dụ game phục vụ Order) |
| `dev_rows`, `object_rows`, `mechanic_art_rows` | không | tách nhóm DEV, dòng Các object, dòng Mechanic của 2D ART thành nhiều dòng | list `[hạng mục, scope, ghi chú]` |
| `ghi_chu` | không | ô Ghi chú khớp theo tên hạng mục, chữ Lead sửa tay. Tên trùng ở 2 nhóm ghi kèm nhóm | `{"Luồng UI": "Đã có từ <game cũ>", "2D ART/Mechanic": "..."}` |

Xuống dòng trong chuỗi cấu hình (`\n` của JSON) tự đổi thành `\n` của Sheet.

## 5. Số mặc định của họ drop

Chỉ dùng với preset họ drop (mục 2b). Lấy từ bản V0.5 đầu tiên của họ drop, dùng lại ở 3 game sau mà Lead không sửa. Game khác họ thì hỏi người dùng, không chép các số này.

| Thứ | Số |
|---|---|
| Order | 2 Order, 3 ô (Order theo nhóm chủ đề: 4 ô) |
| Hàng chờ | 7 ô: 5 mở + 2 ô "+" mở bằng ads, giữ tới hết level |
| Hồi sinh | 900 coin hoặc Chơi lại, thu hết vật hàng chờ vào Box |
| Win | Clear hết Order (thưởng coin không ghi ở Win) |
| Thua | Hàng chờ đầy, không đồng hồ |
| Level | 15 level. Very hard 10, 15. Hard 5, 8, 13 |

## 6. Soát tay sau khi máy soát 0 lỗi

| Kiểm | Đạt khi |
|---|---|
| Số tab | Gameplay, Main Task. Tab phụ chỉ khi game có nội dung đó (mục 1) |
| Gameplay | Khung Cách chơi, mục riêng, Win, Lose. Không có mục Mechanic, không mục họ drop khi game không thuộc họ, ô ngắn, mỗi câu một ý, hai mục không lặp cùng luật, một tên vật xuyên suốt (không lúc "tile" lúc "quân") |
| Main Task | 5 nhóm, 6 cột, mỗi tính năng hoặc mechanic 1 dòng (DEV thường 6 tới 8 dòng), Scope 1 tới 2 ý, mỗi ô tối đa 5 dòng, Luật lõi chỉ nhắc điều có trong Gameplay |
| Core win lose | Không sao, kỷ lục, quà, skin, khăn, chương, Home chọn chương, màn ngoài core. Luồng UI chỉ Gameplay, Win, Lose, màn quảng cáo nếu có |
| Tab phụ (nếu có) | Cột theo `references/tab-phu.md`, số trong ô Main Task bằng số hàng của tab |
| Lời | Không bộ đếm, công thức, giây, câu kiểu "kiểm sau khi" |
| Mechanic | "1 mechanic hidden" nếu Lead chưa nói chốt bằng lời |
| Object | Có số loại, cách chia, danh sách, yêu cầu nhận ra ở cỡ nhỏ nhất |
| Chữ Lead | Ô Lead sửa tay còn nguyên sau khi dán lại |
| Trong Sheet | Không đường dẫn file repo, không tên biến code, không "[GIẢ ĐỊNH]" |

## 7. Điều Lead đã bác (đừng lặp)

| Đã làm | Lead phản hồi | Cách tránh |
|---|---|---|
| Dựng V0.5 như V1: 5 tab, luật 30 điều, 2 lượt QA, bot đo 15 level | V0.5 ưu tiên tốc độ cao nhất | 2 tab, một lượt, không bot |
| Ghi mechanic từ nút gợi sẵn Lead bấm | Bỏ mechanic đó vì Lead chưa chốt mechanic nào | Mechanic chỉ chốt khi Lead nói bằng lời |
| Main Task có cột phụ thuộc, trỏ sang tab khác | Bỏ cột phụ thuộc | 6 cột, không trỏ tab ẩn |
| Gameplay có mục Mechanic, Logic liệt kê trạng thái | Lead sửa tay trên Sheet | Không mục Mechanic. Logic theo chủ đề |
| Ghi ref game cũ ở Demo, không ghi tài sản dùng lại | Lead sửa tay Ghi chú | Ghi rõ cái gì đã có từ game nào |
| Gameplay viết lại vẫn 8 mục 22 dòng, có Cứu ván, sao, kỷ lục, khăn | Lead sửa tay còn 7 mục 14 dòng | Chỉ luật lõi, theo mục 2 |
| Câu nối ý bằng dấu chấm phẩy | Cấm dấu chấm phẩy vì đọc như AI viết | Tách gạch hoặc dùng "," hay ".". Máy bắt (`soat.mjs`): dấu chấm phẩy (trừ trong link) và gạch dài trên mọi file kể cả tab phụ, ô Main Task quá 5 dòng (lỗi), bộ đếm dạng x/6 hoặc công thức trong Gameplay (cảnh báo). Máy không bắt câu kiểu spec viết bằng chữ thường, câu gánh nhiều ý: soát tay theo mục 6 |
| Gameplay chép luật build kiểu spec dev (đồng hồ x/6 đếm cả món đang tới khách, khóa chọn 7/6, 8/6) | Nội dung phải đơn giản, dễ hiểu với Game Designer | Viết điều người chơi thấy và làm, bỏ chi tiết cài đặt |
| Win, Lose, mục tiêu ván chép từ build (biến tiến độ, thua trễ sau khi băng đầy) | Lead sửa tay 4 ô luật trên Sheet, skill phải hỏi gameplay, win, thua trước | Hỏi 3 câu trước khi viết (SKILL mục 0), chưa trả lời thì ghi "chờ Lead chọn" |
| Main Task tách nhỏ (5 dòng "Nắp thủy tinh: ..."), Scope dài, còn sao, quà, khăn | Gộp task nhỏ, Scope ngắn, bỏ thiết kế ngoài core, mọi game sau làm như vậy | Mỗi tính năng 1 dòng, Scope 1 tới 2 ý, chỉ core win lose (mục 3) |
| Giả định "nhặt khi đang lộ" trước khi xem ảnh màn chơi | Lead gửi ảnh có vạch sáng | Đọc ảnh trước. Đồng hồ, thẻ mục tiêu trong ảnh không tự đưa vào luật |
| Câu xác nhận gameplay từ video gộp một chi tiết đọc sai (plug có ổ trên thân để cắm nối), Lead bấm "Đúng" cả cụm | Soi khung gốc mới thấy đó chỉ là mặt chân cắm, phải gỡ khỏi luật và ghi giả định | Câu xác nhận chỉ nêu điều thấy rõ. Chi tiết ngờ hỏi riêng hoặc "chờ Lead chọn" (SKILL mục 0) |
| Tự chèn ảnh vào cột Ảnh: chép tay base64 vào Drive `create_file` (2 lần, ảnh vỡ), thả file vào Drive bằng script, dán ảnh bằng ClipboardEvent giả vào Sheet, mở hộp Chèn hình ảnh trên Chrome (khung upload là iframe khác nguồn, công cụ không chạm được ô chọn file) | Lead hỏi sao không tự làm được, cuối cùng vẫn chèn tay | Không thử các đường trên. Cắt sẵn `gdd/anh/gameplay.png`, gộp sẵn ô Ảnh, Lead chèn tay (SKILL mục 5) |
| Định dạng Sheet theo ý mình (header xanh, hàng nhóm vàng, mỗi hàng Gameplay một ô ảnh) | Lead gửi ảnh mẫu Sheet của mình | Dùng kiểu Sheet ở mục 8, `.claude/skills/gdd-v1/scripts/sheet-yeu-cau.py` sinh sẵn |

## 8. Kiểu Sheet của Lead

Lấy từ ảnh Sheet GDD V0.5 Lead gửi (05/11/2026). `.claude/skills/gdd-v1/scripts/sheet-yeu-cau.py` sinh đúng các request này, sau khi dán HTML có màu của `sheet-html.mjs` (cách dùng: `.claude/skills/gdd-v1/references/tao-sheet.md`).

| Chỗ | Kiểu |
|---|---|
| Header cả 2 tab | Nền đỏ đậm (RGB 0.72, 0.25, 0.25), chữ trắng in đậm cỡ 12, căn giữa, cao 36px, cố định hàng đầu |
| Tab Gameplay, cột Ảnh | Gộp A2 tới hàng cuối thành 1 khung ảnh màn dọc, rộng 265px, mỗi hàng cao 95px. Một ảnh gameplay giữa ván, không mỗi mục một ảnh |
| Tab Gameplay, cột Mục | Nền hồng đào (RGB 0.99, 0.89, 0.84), chữ in đậm cỡ 12, căn giữa |
| Tab Gameplay, cột Mô tả | Rộng 560px, tự xuống dòng, căn giữa theo chiều dọc |
| Tab Main Task, hàng nhóm (GD, 2D ART, DEV, SFX, VFX) | Nền hồng đào, chữ in đậm cỡ 12 |
| Tab Main Task, cột | STT 50, Hạng mục 180, Scope 520, Người thực hiện 120, Trạng thái 120, Ghi chú 300 (px) |
| Cả 2 tab | Viền mảnh mọi ô, tự xuống dòng |
