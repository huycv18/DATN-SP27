# Phân tích game tham chiếu và nghiên cứu thị trường

Nguồn: game tile chữ A (game tile sort B: Sorting Jam làm chuẩn thẩm mỹ), game-tycoon-a (Game Dev Story: wiki, APK, Ghidra), game lặn quán ăn A (Dave the Diver qua nguồn công khai), game RTS A, Thriving City Song và HoI4 (reverse-engineer dữ liệu), game phục vụ Order A (chef Bancho).

## 1. Bốn kiểu Lead tiếp cận game tham chiếu và cách xử lý

| Kiểu | Ví dụ | Cách làm đúng |
|---|---|---|
| Chuẩn thẩm mỹ hoặc UX nội bộ (game cùng studio) | game tile sort B: Sorting Jam (cùng studio, Zego) | Mô tả đo được: cụm 2-3 quân chồng 2 tầng trên bệ, lưới có rãnh, đối xứng trái phải, đáy là kệ dài, không vẽ hình bằng quân. Render demo ở 380 px trong game thật, không chỉ SVG |
| "Bám sát" một game | Broken Arrow, Game Dev Story | Nguồn chính thức. Tách đã xác minh khỏi chưa xác minh. Giữ cơ chế và cảm giác, không chép tên, số liệu, bản đồ, UI, asset |
| Mod, việt hóa (thực chất là reverse-engineer dữ liệu) | TCS, HoI4 | Làm được và hữu ích: tìm bảng ngôn ngữ, kiểm khóa rỗng và text gắn cứng, đo chữ tràn bằng font thật, giữ token định dạng, backup và script khôi phục, cập nhật manifest/MD5 |
| "Đục" bản crack để clone, lấy asset | Dave the Diver | Từ chối. Chuyển sang phân tích qua nguồn công khai, video gameplay hợp pháp. Ranh giới IP ghi vào DECISIONS từ kickoff. Thư mục tham chiếu ngoài repo, hook chặn |

Lead đã chấp nhận phương án hợp lệ mỗi lần được giải thích rõ và có thay thế cụ thể.

## 2. Thứ bậc nguồn số liệu

APK / dữ liệu game đã dump (Ghidra, UnityPy, ilspy) > wiki cộng đồng (trích thành CSV có cột nguồn) > video gameplay có timestamp và bấm giờ > "ước của ta". Số gốc làm trọng tài cho cân bằng. Mốc ước nhường số gốc. Số nguồn không "làm đẹp" (bảng F gãy ở 1 000 fan là thật).

Mỗi khẳng định gắn nhãn độ tin cậy: Xác nhận / Một nguồn / Suy luận / Không có dữ liệu. Không có nguồn thì ghi "Không có dữ liệu", không đoán.

## 3. Sản phẩm của một lần phân tích

1. **Hồ sơ game**: tên, studio, nền tảng, link store và video, core loop một câu, luật chính khẳng định, mechanic kèm mốc giới thiệu quan sát được, cấu trúc level, monetization quan sát, số liệu thị trường (bản bán, điểm review, thời lượng) có nguồn.
2. **Bảng cấu trúc tái dùng**: ví dụ bảng curve của game khác chuyển thành cột (level, số, nhãn, chuỗi "tiến độ-cường độ" như `0-0,0.6-2,1-3`, mechanic dạng "lượng-tiến độ"). Chỉ lấy cấu trúc. Luật và theme của game kia không map 1-1 ("cái nồi không liên quan").
3. **Bảng đối chiếu theo hệ thống**: giống / khác / giống đến mức rủi ro / bài học, mức trùng Thấp, TB, Cao. Khác biệt phải nằm ở cơ chế, không chỉ ở skin.
4. **Kiểm toán độ trung thành hoặc khác biệt** ngay sau phân tích, trước khi viết GDD hệ thống (game-tycoon-a thiết kế trước rồi phải hoàn 45 điểm lệch).
5. Kết luận "học gì, làm khác gì, rủi ro gì" và các điểm yếu của game tham chiếu đánh số (chỉ được lệch khi sửa một điểm yếu có bằng chứng, cải tiến là công tắc mặc định tắt).

## 4. Bài học phương pháp

- Đếm thô luôn phóng đại: HoI4 "81,5% đã dịch" thực tế chỉ còn 4 câu thật. Đếm 16 màu trong JPEG thực ra 6. Phân loại trước khi báo phần trăm. Kiểm một mẫu thật trước khi tin bộ lọc.
- Thứ tự load và nguồn thật của code quyết định nghĩa (TCS: code chạy ở `Unity.Model.dll`, `Hotfix.dll` là bản cũ không load).
- Tách "thứ gặp ở mọi ván chơi" khỏi "riêng từng nước / danh từ riêng": Lead chỉ cần thứ trong game.
- Nguồn công khai đủ để rút nguyên lý, không đủ để biết cue nhạc hay bố cục HUD chi tiết. Muốn hơn thì xem video hợp pháp.
- Phân tích song song nhiều vai (gameplay, art, audio) rồi gộp bảng. Lead quyết điểm chạm tầm nhìn (giữ quán sushi theo đầu bếp chọn thay vì đổi sang món Việt).
- Đổi hình tượng đã quen theo tham chiếu dễ bị bác ("không giống Bancho"). Đưa ảnh so sánh trước.
- Bot tham chiếu khi so với bản gốc: đo nhịp thật (phút mỗi vòng, đồng hồ 4-7 s mỗi tuần) bằng chơi và bấm giờ, phân biệt thời gian đồng hồ và thời gian thao tác.

## 5. Benchmark nên có cho casual puzzle (điền khi có nguồn)

Thời lượng một ván theo nhãn (game bắn màu A shipped 15-55 s, game tile chữ A L50 mục tiêu ~5 phút), số level khi ra mắt (15 prototype, 50 production, loop từ 16), mốc giới thiệu mechanic (L6 / L16 / L26 cho 3 mechanic trong 50 level), mốc ads (ô "+", revive, ghế), tỉ lệ level khó trong bộ (16/50 viền đen), trần độ khó đo được theo luật.
