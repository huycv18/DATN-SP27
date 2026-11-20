# Ý của Lead về phản diện (GD-033), dùng để chấm

Nguồn nguyên văn: cuối `projects/game-moi/story/lead-y-tuong-2026-11-20.md` mục "Lead sửa phản diện - 2026-11-20". Tóm tắt Lead đã chốt: `projects/game-moi/DECISIONS.md` mục "Lead sửa phản diện". Tên [TẠM] do gd-story chốt: mục "Tên mới" ở đầu `gdd/he-thong/cot-truyen.md`.

## Tên thống nhất (phải giống nhau ở mọi file và tab)
| Là gì | Tên | Ghi chú |
|---|---|---|
| Chủng tộc của X và Y | Sennari | Chủng tộc trong The Veyl, không thêm chủng tộc mới |
| Hành tinh quê | Sennar | Người chơi không tới |
| The Wardens | The Wardens | Tên chế độ và quân của X. KHÔNG còn là tên một chủng tộc |
| X, tên độc tài | Serith (WD-P1, BS-5) | First Warden, kẻ cầm quyền Sennar |
| Người cai trị cũ | Ilvane | Steward of Sennar, cha của Y, không xuất hiện |
| Y, người thừa kế hợp pháp | Sevra Ilvane (NP-5) | Giả làm thương nhân Ilsume (TR-2, tàu TA04) |
| Chiến tranh vũ trụ | The Meeting War | Cha của Serith chết ở đó |
| Mạng lưới cách mạng | The Kindling | Tàu TA09 |
| Căn cứ của Y | The Hearth | Khoang ẩn ở Veyl Waypost (N4) |
| Gián điệp săn Y | Maro (WD-P2, TA08) | Chỉ huy toán bắt cóc |
| Vụ phục kích | The Scattering | Không còn The Sundering |

## 15 ý của Lead phải có và đúng
| # | Ý | Nơi dự kiến |
|---|---|---|
| P1 | Bỏ yếu tố "họ tham lam hơn loài người" | Mọi file |
| P2 | Cái nhìn "loài người tham lam, xấu tính" là phiến diện của một tên độc tài, không phải sự thật của game | B5, cốt truyện |
| P3 | X đảo chính, lật đổ người cai trị tại hành tinh và chủng tộc đó | Cốt truyện |
| P4 | Người cai trị trước chủ trương chung sống hòa bình với nhiều chủng tộc vũ trụ sau chiến tranh vũ trụ (nổ ra khi các hành tinh phát hiện sự sống của nhau) | Cốt truyện |
| P5 | X là con trai một sĩ quan hy sinh trong chiến tranh đó, nuôi hận thù và căm giận | Cốt truyện, hồ sơ X |
| P6 | X âm mưu lật đổ, hướng sự chú ý từ bất ổn trong hành tinh sang Trái Đất để ổn định vị trí và đoàn kết chủng tộc sau đảo chính | Cốt truyện |
| P7 | Có quyền lực, X biết Trái Đất tìm hành tinh di cư, cho giả tín hiệu dụ rồi phục kích | Cốt truyện, Solace là mồi |
| P8 | Dưới X, hành tinh hòa bình chuyển hiếu chiến: ép lính, dung túng cướp bóc và tệ nạn, khơi mào chiến tranh | Cốt truyện, bối cảnh |
| P9 | Y là con gái người cai trị cũ, người thừa kế hợp pháp, giả dạng thương nhân | Cốt truyện, hồ sơ, cảng |
| P10 | Trong một lần ra ngoài người chơi tình cờ thấy cuộc tấn công và bắt cóc Y và cứu Y | Chương 3, map nhánh |
| P11 | Biết đoàn là loài người đi tìm lời giải, Y lộ danh tính và cầu giúp đỡ | Cốt truyện |
| P12 | Y cùng mạng lưới quân cách mạng và người nằm vùng đã chuẩn bị lật đổ | Cốt truyện, The Kindling |
| P13 | Đoàn hộ tống Y về căn cứ, hỗ trợ kết nối tình báo | Chương 4, 5, ca cảng |
| P14 | Cách mạng thành công, Y lên nắm quyền, lập lại hòa bình, giúp loài người tìm thành viên sống sót | Cảnh kết |
| P15 | Y trao cho đoàn thông tin về một hành tinh có sự sống thực sự để xây lại đế chế | Cảnh kết, B11 |

## Ý cũ phải không còn (trừ lịch sử thay đổi và phần "ý đã bỏ")
"tham lam hơn loài người", "đạo đức giả", "kẻ canh giữ" (tự xưng), Driftlife là "đàn được bảo hộ" để kết tội, "thu hoạch công nghiệp", "bản khảo sát bị giấu", kết "chưa có đích", "ghét loài người vì tham lam", "lòng tham nhân loại" là gốc tai nạn, The Wardens là chủng tộc, "The Sundering". Công cụ: `node projects/game-moi/qa/quet-phan-dien.mjs`.

## Không có hệ thống mới
Hộ tống dùng sẵn bay, kéo vật, combat trong map nhánh. Nối tình báo là loại kiện có tin mật trong ca cảng (luật ca cảng sẵn có). Không thêm chủng tộc, không thêm art chủng tộc, không thêm tiền, không thêm phe, không thêm chế độ chơi. Trần: log GDM 87.

## Đầu ra của người chấm
Ghi `projects/game-moi/qa/GD-033-<tên-file>.md`: dòng đầu ĐẠT hoặc TRẢ LẠI. Bảng P1 đến P15 (có trong file này không, dòng nào), bảng ý cũ còn sót (dòng, trích), bảng tên (khớp hay lệch với các file khác), mục "Hệ thống mới" (có hay không), lỗi (mức chặn, nặng, nhẹ, dòng, bằng chứng, người sửa). Lỗi chặn: trái lời Lead, còn ý cũ trong luật, thêm hệ thống mới. Lỗi nặng: tên lệch giữa file, mâu thuẫn với mốc truyện. Chỉ chấm phần đổi của đợt 6, không chấm lại các phần cũ đã ĐẠT trừ khi chạm phản diện. Văn phong: tiếng Việt có dấu, không emoji, không gạch dài, không dấu chấm phẩy. Báo tối đa 6 dòng.
