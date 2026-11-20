# GD-033 combat-driftlife
ĐẠT (vòng 2) - 0 chặn, 0 nặng, 1 nhẹ còn. N1 và 4 trong 5 nhẹ đã sửa, kén khớp `map.md` và `cot-truyen.md`, BS-5 khớp Serith First Warden, máy quét và validator 0 hit ở combat.

## Vòng 2
Giờ sửa file khi chấm: `combat-driftlife.md` 10:34 (102052 byte), `map.md` 10:29, `cot-truyen.md` 10:32, `vat-pham.md` 10:15, `gdd/sheet/Enemy.tsv` 10:34.
| # | Trạng thái | Kiểm ở đâu |
|---|---|---|
| N1 nặng, kén bị trói | Đã sửa | Luật 34 (dòng 166): lưới tự tan tối đa 2 giây, người kéo vật lớp Nặng chờ hoặc thả vật rồi Lướt. E20 (dòng 524) cho người một mình. Khớp `nguoi-choi.md:72`. BS-5 pha 2 "tối đa 5 s" (2 giây cộng 3 giây của Serith) nhất quán |
| L1 "dấu thu hoạch" | Đã sửa | Dòng 104 đổi. Chỉ còn trong dòng lịch sử 733. Quét `quet-phan-dien.mjs`: combat 1 hit ở dòng 733 (lịch sử, được phép) |
| L2 mốc C5.5 | Đã sửa | `cot-truyen.md:505` ghi "Serith bị khuất phục, bị bắt và giao cho The Kindling", dòng 35 cũng ghi. Luật 38 khớp. C5.5 tên "First Warden" |
| L3 tên riêng lạ | Đã sửa | `validate-gdd.mjs`: 391 ID, lỗi 2, cả hai của gd-tech, 0 của gd-combat |
| L4 BNG-102, gỡ kén, toán | Sửa gần hết | Luật 40 (dòng 204) có BNG-102 và Tương tác giữ 2 giây gỡ kén khỏi mạn TA04. Trạng thái toán khi cả nhóm rút giữa trận vẫn chưa ghi (dưới đây) |
| L5 BS-5 pha 3, sim | Sửa một phần | Dòng 381: pha 3 từ Sinh lực Serith dưới 30%, sàn vỡ dần 90 giây, Serith nhận sát thương bình thường, hết giờ không thua. Hết "đánh lõi". Chưa có sim BS-5, toán bắt cóc, hộ tống (gd-tech) |

Kiểm theo yêu cầu:
| Mục | Kết quả |
|---|---|
| Luật 42 và mục 2.8 so với `map.md` | Khớp. C3.8: kén về Ember bằng Recall Beacon (kén đi theo, `map.md:151`) hoặc cửa khí, combat bảng 2.8 và luật 44 ghi cả hai. C5.1: Skiff chở kén tới cửa N4, kéo tới cửa The Hearth, kén không đi theo beacon, kích beacon thì kén nằm lại (luật 42, `map.md:155`). Giữa các chuyến kén ở beacon cố định gần nhất, chưa qua beacon nào thì ở cửa N4. Hai câu "về trạm thì kén nằm lại" và "C3.8 kén đi theo beacon" không mâu thuẫn vì luật 42 chỉ nói về nhóm về trạm mà không kéo kén |
| BS-5 so với Serith First Warden | Khớp `cot-truyen.md:505, 35, 531`: Serith tự tới Warden Rig để bắt Sevra, đứng đầu The Wardens, kết khuất phục và bắt giữ |
| Tab Enemy | Có pha 3 "dưới 30%", BNG-102, "tự tan". Không còn "đánh lõi" |
| Sim | Chạy lại `sim-combat.mjs` ra file tạm: giống file kết quả ngoài giờ sinh. BS-1 không đổi |

Lỗi còn lại:
| # | Mức | File:dòng | Vấn đề | Người sửa |
|---|---|---|---|---|
| R1 | Nhẹ | combat:168, 204 | Chưa nói toán bắt cóc hồi máu hay giữ máu khi cả nhóm rút giữa trận (luật 44 chỉ nói "không sinh lại sau khi đã cứu"). Chưa có sim S1, S5 cho toán, BS-5 và hộ tống C5.1 (quãng 120 u kéo lớp Nặng 0,50, `map.md:227`) | gd-combat, gd-tech |

## Vòng 1 (giữ để tra)
Vòng 1 kết luận TRẢ LẠI vì N1, nay đã sửa.

Giờ sửa file khi chấm vòng 1: `combat-driftlife.md` 10:14 (99773 byte), `cot-truyen.md` 10:12 (đứng yên từ lúc chấm, nhưng gd-story chưa sửa xong, xem lỗi chéo), `00-khung-game.md` 10:12, `map.md` 10:13, `vat-pham.md` 10:15, `sim-combat.md` 02:00 UTC. Vòng chấm: 1.

Chỉ chấm phần đổi của đợt 6: luật 30, 31, 38, 40 đến 44, mục 2.8, 3.7 BS-5, Danh mục BS-3 và BS-5, bảng boss, dòng 605 (Dấu săn bắt) và 717. Đối chiếu `vat-pham.md` (dòng 501, 503, 505, 677), `map.md` (dòng 155, 227, 231, 242), `nguoi-choi.md` (dòng 72, 314), `cot-truyen.md` (mục "Tên mới", mốc C3.8, C5.x), khung B3 đến B11, K27, C10. Chạy `quet-phan-dien.mjs --chi-tiet`, `validate-gdd.mjs` và `sim-combat.mjs` (ra file tạm).

## Bảng P1 đến P15 (phần combat chạm tới)
| # | Có trong file này không | Dòng | Nhận xét |
|---|---|---|---|
| P1 bỏ "tham lam hơn loài người" | Không còn | Quét 0 hit | Đạt |
| P2 cái nhìn phiến diện, không phải sự thật của game | Qua Driftlife | 30 | Dấu săn bắt là "bằng chứng chế độ của Serith cướp bóc tràn lan, trái với hình ảnh chúng tự dựng", khớp khung B6 mới và B5. Đạt |
| P3 đến P6 (đảo chính, hòa bình, hận thù, hướng sang Trái Đất) | Không thuộc combat | Chỉ có "Độc tài của Sennar" ở 43, 381 | Không cần có |
| P7 giả tín hiệu dụ rồi phục kích | Không nhắc | Không có Solace và The Scattering trong file | Không mâu thuẫn. Các đồ rơi bản đồ sao và bản khảo sát đã bỏ (dòng 84 "Không rơi trực tiếp") |
| P8 hành tinh chuyển hiếu chiến, dung túng cướp bóc | Qua luật 30 và 31 | 30, 31 | "Cướp bóc tràn lan", The Wardens là quân của Serith, lính là người Sennari mặc giáp chế độ. Đạt |
| P9 Y giả làm thương nhân | Qua toán bắt cóc | 44 | "Sevra Ilvane ... tàu TA04 (Ilsume)". Đạt |
| P10 tình cờ thấy tấn công, bắt cóc, cứu Y | Có | 44, 2.8 dòng 195-207 | Toán áp mạn TA04 ở C3.8, hạ hết toán thì gỡ kén Sevra, kéo về cửa khí Ember. Đạt. Chữ "tình cờ" thuộc truyện, combat không cần |
| P11, P12 (Y lộ danh tính, The Kindling) | Không thuộc combat | The Kindling xuất hiện ở 181, 381 | Đạt, tên khớp |
| P13 đoàn hộ tống Y về căn cứ | Có | 2.8 mốc C5.1 | Kéo kén từ lối vào N4 tới The Hearth qua vòng phong tỏa của The Wardens, dùng luật Kéo vật và combat sẵn có. Đạt, nhưng còn lỗ E-case (N1) |
| P14 cách mạng thành công | Qua BS-5 | 38, 381 | Serith gục và bị bắt giao cho The Kindling. Phù hợp ý Lead, truyện chưa ghi theo (L2) |
| P15 Y trao tin hành tinh thật | Qua đồ rơi BS-5 | 84, 43 | Combat không còn rơi bản đồ sao, ghi "vật truyện mở sau trận theo `vat-pham.md`". Khớp `vat-pham.md:501` ("Không rơi từ Serith") |

## Ý cũ còn sót
| Dòng | Trích | Kết luận |
|---|---|---|
| combat:104 | "The Wardens và dấu thu hoạch trên Driftlife kể chuyện" | Còn. Tên cũ của luật 30 (nay là Dấu săn bắt). Máy quét báo mục "thu hoạch công nghiệp". Nằm ở mục 1, không phải luật. L1 |
| combat:761 | "BS-5 rơi bản đồ sao thật" | Lịch sử thay đổi, được phép |
| Sundering, tham lam, đạo đức giả, kẻ canh giữ, bảo hộ, khảo sát bị giấu, chủng tộc The Wardens, Solace | Không còn ở thân file | Đạt. Chỉ còn ở lịch sử và bảng Assets ngoài file này (`gdd/sheet/Assets.tsv:74`, thuộc GDM) |
| `Enemy.tsv` | grep các cụm cũ | 0 hit. Tab Enemy có BS-5 Serith, EN-01 toán bắt cóc và kén khớp file |

## Bảng tên
| Tên | Dùng ở combat | Khớp mục "Tên mới" của `cot-truyen.md` và các file khác |
|---|---|---|
| Sennari, Sennar | 31, 43 (Sennar) | Khớp |
| The Wardens (chế độ và quân đội) | 31, Danh mục | Khớp, không còn là chủng tộc |
| Serith (BS-5) | 43, 84, 381 | Khớp |
| Sevra Ilvane, Ilsume, TA04 | 44, 195 đến 207 | Khớp (`vat-pham.md:505`, `map.md:227`) |
| Maro, TA08 | 44 | Khớp (WD-P2, TA08) |
| The Kindling, The Hearth | 181, 202, 381 | Khớp mục "Tên mới", nhưng validator báo 4 lỗi "Tên riêng lạ" ở combat dòng 181, 202, 381 vì bảng tên riêng của `cot-truyen.md` chưa có hai tên này (lỗi chéo, L3) |
| Command Deck | 43, 84, 381, 426 | Khớp `map.md:231, 242` |
| BNG-102 (kén) | Không ghi ID | Lệch nhẹ so với `vat-pham.md:505`, L4 |

## Hệ thống mới
Không. Hộ tống dùng bay, Kéo vật lớp Nặng, combat sẵn có (luật 40 đến 43). Toán bắt cóc chỉ dùng WD-01, WD-02, WD-03 có sẵn (2 Lancer, 1 Snare Hunter, 2 Drone). Maro chỉ là nhân vật truyện, không thêm loại kẻ địch. Không thêm tiền, chủng tộc, phe, chế độ chơi.

## Hộ tống Sevra (kén) ở combat
| Câu hỏi | Kết quả |
|---|---|
| Kén có bị nhắm hay nhận sát thương không | Không (luật 41), đòn vùng cũng không tác dụng lên kén. Kẻ địch nhắm người theo luật 9 và 10. Khớp `map.md:155` |
| Oxy của kén | Kén không có Oxy. Người kéo chịu hệ số lớp Nặng của `nguoi-choi.md:72` (tốc độ 0,50, Oxy hao nền 1,25, không Lướt). Combat không nhắc, chỉ dẫn "theo luật Kéo vật". Chấp nhận |
| Ngạt | Người kéo ngạt thì thả kén, kén trôi tại chỗ, đồng đội kéo tiếp (luật 42). Khớp `nguoi-choi.md:314` (buồng ngủ đông) và `map.md:155` |
| K27 | Không phá. Kén không phải đồ trong túi nên không khóa như Lồng mẫu, luật 43 ghi rõ ngoài K2 |
| C10, rớt mạng hoặc rời phiên | Luật 42 gom "bị kéo về hoặc về trạm thì kén nằm lại chỗ thả". Rớt quá 15 giây tính như bị kéo về (C10, luật 25) nên khớp. Combat không nhắc C10 riêng cho kén (nhẹ) |
| Một mình | Kéo được một mình ở 0,50. Nhưng gặp lỗ N1 khi qua vòng phong tỏa ở C5.1 |
| E-case | Mục 2.8 dùng luật 40 đến 43 thay cho E-case, mục 4 không có E20 trở đi cho kén |

## Lỗi
| # | Mức | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|
| N1 | Nặng | combat:166, 205, 370 so với `nguoi-choi.md:72` | Người kéo kén bị Snare Hunter trói thì không có đường thoát. Luật 41 và bảng 3.6 nói Snare Hunter ưu tiên người đang kéo vật, tức người kéo kén ở C5.1 (qua vòng phong tỏa của The Wardens). Luật 34 cho tự thoát bằng Lướt 3 lần liên tiếp, nhưng vật kéo lớp Nặng không Lướt được (`nguoi-choi.md:72` cột Lướt: "Không"), đồng đội cắt lưới bằng Lao từ không có khi chơi một mình. Luật 34 vẫn cam kết "một mình luôn thoát được (C1)" và dòng 214. Không có luật nói người bị trói có thả được kén hay không | Dòng 166 (luật 34), 205 (luật 41), `nguoi-choi.md:72` | Thêm một E-case: người kéo kén bị trói được bấm thả kén (E) ngay, kén trôi tại chỗ (luật 42), rồi tự thoát bằng Lướt. Hoặc cho Snare Hunter bỏ qua người kéo kén | gd-combat |
| L1 | Nhẹ | combat:104 | Còn "dấu thu hoạch" trong mục 1, trái tên "Dấu săn bắt" (30, 605, 717) và máy quét báo 1 hit | Quét | Đổi thành "dấu săn bắt" | gd-combat |
| L2 | Nhẹ | combat:181, 381 so với `cot-truyen.md:476, 35, 497` | Luật 38 và 3.7 nói Serith "gục và bị bắt, giao cho The Kindling (mốc C5.5)". `cot-truyen.md` mục "Tên mới" chỉ ghi "giữ chân hắn ở Rig", mốc C5.5 vẫn là "Kẻ canh giữ | BS-5 Serith xong", vai truyện boss (dòng 497) và thoại VO_SER còn nội dung cũ. Không có chỗ nào của truyện ghi bắt giữ | Đối chiếu | gd-story ghi C5.5 theo khuất phục và bắt giữ, rồi giữ hoặc đổi luật 38 theo | gd-story |
| L3 | Nhẹ | combat:181, 202, 381 | Validator báo 4 lỗi "Tên riêng lạ": The Kindling và The Hearth không có trong bảng tên riêng của `cot-truyen.md`. Tên đúng, lỗi nằm ở bảng của gd-story | `validate-gdd.mjs`: gd-combat 4 | gd-story thêm hai tên vào bảng tên riêng | gd-story |
| L4 | Nhẹ | combat:204, 2.8 | Luật 40 nói "kén thoát hiểm" nhưng không ghi ID BNG-102 (`vat-pham.md:505, 677`). Không nói thao tác "gỡ kén" sau khi hạ hết toán (luật 44) là Tương tác giữ bao lâu. Toán không sinh lại "sau khi đã cứu" nhưng chưa nói nếu cả nhóm rút giữa trận thì toán hồi hay giữ máu | Dòng 168, 204 | Ghi BNG-102, thời gian gỡ kén, và trạng thái toán khi rút | gd-combat |
| L5 | Nhẹ | combat:381, 426 | BS-5 pha 3 "Rig quá tải, sàn vỡ dần, đánh lõi trong 90 s" trong khi cách kết là Sinh lực Serith về 0: chưa nói đánh lõi hay đánh Serith ở pha 3. Chưa có số sim cho BS-5 và cho toán bắt cóc (S5 chỉ có BS-1, chạy lại cho kết quả giống file cũ ngoài giờ sinh). Hộ tống C5.1 chưa có số quãng đường và Oxy (kéo lớp Nặng 0,50 và hao 1,25 so với bình chương 5) | `sim-combat.md` mục 5 chỉ có BS-1. `map.md:155` | Ghi mục tiêu pha 3, đề gd-tech sim S5 cho BS-5, S1 cho toán và hộ tống | gd-combat, gd-tech |

## Lỗi chéo (thuộc vai khác, ngoài file combat)
| Vai | Vấn đề |
|---|---|
| gd-story | `cot-truyen.md` vẫn còn 16 chỗ ý cũ theo máy quét (vai truyện BS-5 dòng 497, thoại VO_SER_03, mục MM5.1 bản khảo sát bị giấu, mốc C3.8 dòng 384 và C5.1 dòng 472 theo bản trước). Chưa chấm ở đây vì file này chưa xong và không thuộc phạm vi |
| gd-items | `vat-pham.md:677` viết "The Heart" thay vì The Hearth |

## Kiểm BS-5 theo các chỉ tiêu
| Chỉ tiêu | Kết quả |
|---|---|
| Số của BS-5 (Sinh lực 1500, 3 pha, 6 đến 9 phút) | Không đổi so với bản đã ĐẠT. Đợt 6 chỉ đổi nơi (Command Deck), vai (Serith tự tới bắt Sevra) và cách kết (khuất phục) |
| Hệ số co-op | Vẫn 1 + 0,6 (N - 1), khớp 6b |
| `sim-combat.md` | Không có S5 cho BS-5, không lệch vì số không đổi. Chạy lại sim cho kết quả giống file (BS-1 hạ trung bình 1 người 1,2 / 1,3 phút, Oxy P90 200 là 61% bình) |
| Phòng boss | Command Deck 36 x 24 khớp `map.md:242`. Vật dựng lệch cũ (combat cần "sàn vỡ", `map.md` ghi "Hàng rào cắt bật theo pha") vẫn ghi nhận ở dòng 418 |
| Đồ rơi | Không rơi trực tiếp. Khớp `vat-pham.md:501, 503` (STY-501, STY-502 ở Data Core, mở sau BS-5) |

## Bỏ qua / không kiểm được
- Không kiểm cú pháp nội dung `cot-truyen.md`, `map.md`, `vat-pham.md` ngoài các dòng dẫn chiếu combat.
- Không chơi thử hộ tống, không có build.
- Số lỗi chéo trong `cot-truyen.md` chưa chấm vì file đang được gd-story sửa.
