# GD-031 khung game (`gdd/00-khung-game.md`)

ĐẠT (vòng cuối, khung lần 5 lúc 04:54) - 0 chặn, 0 nặng, 3 nhẹ. Lỗi 4 (`so-hien-hanh.md`) đã sửa (09:03 ghi K1 đến K27, C1 đến C10, ghi The Scattering và số sàn ngày). K9, K22 đến K27, C5, C10, mục 9 đã đọc lại, không tự mâu thuẫn và khớp 10 GDD (grep The Scattering, K25 một nghĩa, K27 đang ngạt không trao).
Giờ sửa file khi chấm: vòng 1 04:01, vòng 2 04:13 (khung lần 4, log dòng 61 đến 64). Người chấm: gd-qa (đọc toàn file, grep các dòng K22, K23, K24, C10, mục 9).

## Tóm tắt lỗi
| Mức | Số lỗi |
|---|---|
| Chặn | 0 |
| Nặng | 2 |
| Nhẹ | 3 |

## Lỗi
| # | Mức | Lớp | File:dòng | Vấn đề | Bằng chứng | Đề xuất sửa | Người sửa |
|---|---|---|---|---|---|---|---|
| 1 | Nặng | 2 | 00-khung-game.md:130-133 | Hai mục tiêu mục 9 không thể cùng đạt ở chương 5. Chuyến chương 5 là 10 đến 12 phút, ca cảng 3 đến 5 phút, nên một ngày đủ 2 chuyến và ca cảng dài 2x10 + 3 = 23 đến 2x12 + 5 = 29 phút, vượt trần 25 phút của dòng 133. Chương 1 thì đạt (2x4 + 3 = 11 đến 2x6 + 5 = 17, cộng chuẩn bị và cuối ngày vào khoảng 15) | Tính tay từ dòng 130, 131, 132, 133. Sim chuyến báo chuyến chương 5 dài 10,7 phút (log 54), nên 2x10,7 + ca 4 = 25,4 phút, đã chạm trần | Sửa dòng 133 thành khoảng theo chương (ví dụ chương 1: 15 đến 20, chương 5: 25 đến 30) hoặc cho phép ngày chương 5 chỉ một chuyến | GDM |
| 2 | Nặng | 3, 4 | 00-khung-game.md:52-53 | Trần "tối đa 2 chuyến mỗi ngày" chỉ ngầm trong bảng pha (hai hàng Chuyến 1, Chuyến 2), không là luật K nào, và grep không thấy luật này ở file hệ thống nào. gd-economy mặc định 2 chuyến (`kinh-te-tien-trinh.md:165`). Không luật nào nói điều gì xảy ra nếu người chơi muốn chuyến thứ ba, hoặc về trạm rồi ra lại trong ngày. Đây là chỗ P1 bị phá: về trạm nạp đầy Oxy rồi ra lại thì giới hạn Oxy (K1) mất nghĩa, giống lý do C9 chặn trong cùng chuyến | `grep -rnE "tối đa (2|hai) chuyến\|chuyến thứ ba" gdd/` trả về rỗng | Thêm luật K22: một ngày có tối đa 2 chuyến, nút ngủ hoặc ca cảng khóa chuyến. Ghi trần này ở `nguoi-choi.md`, `map.md`, `tram-va-cang.md` cho cùng một con số | GDM |
| 3 | Nhẹ | 1 | 00-khung-game.md:40-41 | Hàng B11 đứng trước B10, thứ tự ID sai | Dòng 40 là B11, dòng 41 là B10 | Đổi chỗ | GDM |
| 4 | Nhẹ | 3 | so-hien-hanh.md (giờ 02:46) | `so-hien-hanh.md` lỗi thời: còn ghi luật khung "K1 đến K21, C1 đến C8" (khung đã có C9), cốt truyện "`story/game-story-v3.md` cho tới khi có `cot-truyen.md`" (file đã có), "Số cân bằng: Chưa có" (đã có sim) | So dòng "Khung game" và "Số cân bằng" của file với `00-khung-game.md` | GDM chép khi 2b xong (đã nằm trong kế hoạch của brief) | GDM |
| 5 | Nhẹ | 4 | 00-khung-game.md:71 | K10 nói Ember rời neo thì "game kết" nhưng không nói người chơi có chơi tiếp sau kết được không. Người chơi ngủ ở chương 5 xong vẫn có thế giới lưu dở | Không có câu nào về trạng thái sau kết trong khung, `tram-va-cang.md:100` chỉ nói "game sang cảnh kết mở" | Ghi một câu: sau kết quay về menu, bản lưu vào lại ở điểm ngay trước cảnh kết (hoặc cho chơi tiếp tự do) | GDM |

## Trái lời Lead
Không. Đã đối chiếu L1 đến L17. Ghi chú: L8 "trạm neo cố định" khớp K10 (neo suốt game, rời neo chỉ ở kết). L9 "cổng đi thẳng tới map nhánh đã mở" được khung hiện thực hóa bằng Skiff (K7), chấp nhận được vì Lead ghi "cơ chế cụ thể ở bước 4".

## Mâu thuẫn chéo
Xem `GD-031-tong-hop.md`. Riêng khung: không còn "Hollower", "Bếp trưởng", "Halcyon", "Tether" (grep sạch). "Phí cứu hộ và nợ" chỉ nằm ở mục 11 Không làm, đúng chỗ.

## Chỗ phải đoán (lớp 5)
Dev mới đọc mục 5 và 6 dựng được vòng chính. Phải đoán: (1) có trần số chuyến mỗi ngày không (lỗi 2). (2) Ngày kết thúc bằng gì nếu người chơi bỏ qua mọi pha trừ cuối ngày: bảng pha nói bỏ qua được, không nói ngày có đồng hồ thế giới chạy hay không.

## Số kiểm bằng chứng
| Số | Trong khung | File kiểm | Kết quả |
|---|---|---|---|
| Chuyến chương 1 4 đến 6 phút | mục 9:130 | `tools/ket-qua/sim-chuyen.md` | Sim ra 4,2 phút theo log 54, trong khoảng |
| Chuyến chương 5 10 đến 12 phút | mục 9:131 | như trên | Sim ra 10,7 phút, trong khoảng |
| Chương 1 1,5 đến 2 giờ, cả game 12 đến 15 giờ | mục 9:134-135 | log 55 (1,89 giờ, 13,0 giờ) | Khớp, chờ gd-economy chạy lại xác nhận ở 2b |
| Một ngày 15 đến 25 phút | mục 9:133 | tính tay | Lệch ở chương 5 (lỗi 1) |

## Tiêu chí nghiệm thu rút từ khung
Đã đưa vào `mvp-criteria-checklist.md` mục "Khung" (CK-xx).

## Bỏ qua / không kiểm được
Chưa chơi build (không có build). Mục 9 hầu hết là mục tiêu ý đồ, chấm theo sim, không theo playtest.

## Vòng 2 (khung lần 4)
| # | Lỗi vòng 1 | Trạng thái | Bằng chứng |
|---|---|---|---|
| 1 | Mục 9 độ dài ngày tự mâu thuẫn | Đã sửa | Dòng 137: chương 1 là 15 đến 20 phút, chương 5 là 25 đến 30 phút. Tính lại: 2x(10 đến 12) + (3 đến 5) = 23 đến 29, khớp |
| 2 | Không có trần chuyến mỗi ngày | Đã sửa | Dòng 85, K22: tối đa 2 chuyến, Skiff tính một chuyến, cửa khí khóa sau chuyến thứ hai và khi đã mở ca cảng |
| 3 | Thứ tự B11 và B10 | Đã sửa | GDM báo, ID đã đúng thứ tự |
| 4 | `so-hien-hanh.md` lỗi thời | Còn, nhẹ | GDM đã ghi sẽ chép khi 2b xong, chưa kiểm lại file này |
| 5 | Sau kết và ngày không đồng hồ | Đã sửa | Dòng 86 K23, dòng 87 K24 |

Lỗi chặn ở `nguoi-choi.md:310` đã được khung nhận: dòng 98 C10 (rời phiên hoặc mất kết nối quá 15 giây giữa chuyến tính như bị kéo về, giữ 1 món, host thoát về lần lưu đầu ngày, một mình thoát giữa chuyến thì mất chuyến).

Lỗi mới do chỗ sửa sinh ra, đều nhẹ:
| # | Mức | Vấn đề | Đề xuất |
|---|---|---|---|
| 6 | Nhẹ | K23 "thoát giữa ngày thì về đầu ngày": ngày chương 5 dài 25 đến 30 phút, tắt game hoặc crash cuối ngày mất cả ngày. Mục tiêu người chơi phiên 30 đến 60 phút (mục 1). `ky-thuat.md` luật 16 từng giảm bằng điểm lưu tạm nhưng nay trái K23 | GDM chọn: giữ K23 và chấp nhận, hoặc cho phép điểm lưu tạm sau mỗi chuyến và ca cảng, sửa K23 và C10 cùng lúc |
| 7 | Nhẹ | Khung không nói sau khi nạp lại đầu ngày thì seed bố cục chuyến là cũ hay mới. Seed mới cho phép nạp lại để đổi bố cục (rerun miễn phí), seed cũ thì ngày chơi lại y hệt | Ghi một câu: seed theo ngày, lưu cùng bản lưu (khớp `daySeed` mà `ky-thuat.md` nhắc) |

## Vòng cuối (khung lần 5)
| # | Mức | Vấn đề | Đề xuất |
|---|---|---|---|
| 8 | Nhẹ | K25 viết "kinh tế và trạm không có cổng chương riêng", nhưng điều kiện đóng chương là "giai đoạn động cơ đã lắp", và linh kiện động cơ mua bằng Tally (K19). Về thực tế kinh tế vẫn là cổng chương gián tiếp. Không sai luật, chỉ dễ gây hiểu lầm ở vai kinh tế | Thêm một câu vào K25: giai đoạn động cơ là cổng, đơn giá của nó do kinh tế đặt |
| 9 | Nhẹ | K24 "Ember còn ở neo để chơi tự do" và K10 "xong động cơ thì rời neo" nói hai trạng thái của cùng một thời điểm: bản lưu ở ngày cuối trước khi rời neo, rồi cảnh kết. Dev có thể hiểu nhầm | Ghi rõ: bản lưu được tạo ngay trước cảnh rời neo, cảnh kết không đổi thế giới |
| 10 | Nhẹ | K23 lưu bố cục theo ngày và số thứ tự chuyến nên nạp lại ra đúng bố cục: người chơi thoát để dò hòm và beacon rồi chơi lại (cái giá là mất cả chuyến). Thiết kế chấp nhận, chưa ghi vào khung | Ghi một câu nếu GDM chấp nhận, hoặc đổi seed theo số lần nạp |
Lỗi 6 và 7 vòng 2 đã xử (G1 ba điểm lưu, seed theo ngày và thứ tự chuyến).
