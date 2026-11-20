# Đợt 4 game-moi: áp các điểm GDM chốt sau QA vòng 2 (2026-11-20)

Nguồn: `log-gdm-tu-quyet.md` Phần 5 và Phần 6 (dòng 61 đến 80), khung sửa lần 5 `gdd/00-khung-game.md` (K9, K22 đến K27, C5, C10, mục 7, mục 9). Phiếu QA: `qa/GD-031-<ten-file>.md`, tổng hợp `qa/GD-031-tong-hop.md`.

## Việc chung của mọi vai giữ GDD (một lượt, là vòng sửa cuối)

1. Đọc khung sửa lần 5 và log dòng 61 đến 80. Áp vào file của mình mọi luật mới chạm hệ thống mình: K22 (tối đa 2 chuyến mỗi ngày), K23 (ba điểm tự lưu, lưu bố cục chuyến), K24, K25 (một nghĩa của "qua chương"), K26 (trần Oxy hồi từ vật tiêu hao), K27 (đang ngạt không trao, không thả đồ), C10 (rời phiên giữa chuyến tính như bị kéo về).
2. Đổi "The Sundering" thành "The Scattering" ở mọi chỗ (log 75).
3. Sửa hết lỗi chặn và nặng còn lại trong phiếu QA của file mình. Lỗi nhẹ sửa nếu nhanh. Điểm đang ghi "chờ GDM" thì thay bằng quyết định ở log và ghi số dòng log.
4. Bảng số lấy từ sim thì sinh lại bằng script sau khi gd-tech và gd-economy chạy bản cuối, không chép tay.
5. Soát văn phong, chạy `node projects/game-moi/tools/validate-gdd.mjs` (phần mình 0 lỗi). Báo gd-qa để chấm lại, và báo GDM `GD-0xx Đ4 XONG|KẸT`, tối đa 6 dòng.

## Việc riêng

| Vai | Việc |
|---|---|
| gd-story | K25 thay câu hỏi mở 8 (mốc đóng chương cần giai đoạn động cơ của chương đã lắp, ghi vào từng mốc đóng chương). K24 theo đề xuất của bạn (log 77). Odile giữ (log 73). Giữ sàn ngày, mục tiêu co-op đã đổi thành 60 đến 75% (log 69). Duyệt tên tiếng Anh các khu trong Cradle cùng gd-world (log 74). Thoại gốc tiếng Việt, không lồng tiếng (log 80) |
| gd-character | Phiếu `qa/GD-031-nguoi-choi.md` (2 chặn, 9 nặng) và `qa/GD-031-ho-so-nhan-vat.md` (9 nặng). C10 thay "Về an toàn giữ nguyên túi" khi thoát giữa chuyến. K26, K27. Thêm thao tác và phím "Dùng vật tiêu hao" |
| gd-combat | Phiếu QA còn 2 nặng. K9 mới: sinh thiết cỡ L đứng ngoài luật bắt sống đáng hơn hạ (log 66). K27 với trạng thái ngạt |
| gd-items | Phiếu QA còn 2 chặn, 8 nặng. C10 thay luật thoát giữa chuyến. K9 mới cho sinh thiết. K26 cho CON-101 (kèm số lượng mang, chi phí chế để không lời ròng quá trần). Chương 1 có đúng 1 loại kiện phải chế trước khi đóng, nhãn MVP, khớp TA01 của gd-quan (log 67) |
| gd-world | Đổi tên các khu hiện như địa danh trong Cradle sang tiếng Anh [TẠM], báo gd-story duyệt (log 74). Trọng số trục độ khó đã duyệt (log 79). Lưu bố cục chuyến theo K23 |
| gd-quan | Phiếu QA còn 3 nặng. Giữ kiện tinh chương 1 nhưng đúng 1 loại (log 67). K25 thay luật 11. Mục tiêu đơn đủ chương 1 là 70 đến 95% (log 78). Ngủ sang ngày theo luật 59 đến 61 của bạn đã vào K23 |
| gd-economy | Nhận lại hệ số 0,40 (log 70). Mục tiêu nhóm 4 là 60 đến 75% (log 69). K25: bỏ cổng chương riêng của kinh tế, giữ làm gợi ý tiến độ. Chạy bản cuối, cập nhật "Số hiện hành đề xuất" |
| gd-ux | K23 ba điểm lưu thay câu hỏi mở 5 (UI-44). K22: cửa khí khóa sau chuyến 2 và sau khi mở ca cảng cần tín hiệu. K27. 5 việc chéo trong phiếu QA |
| gd-tech | Phiếu QA còn 2 nặng. K23: luật lưu của `ky-thuat.md` theo ba điểm lưu và lưu seed bố cục. Validator thêm kiểm: không còn "Sundering", không còn chữ "chờ GDM". Chạy bản cuối cả 4 sim và validator sau khi các vai báo xong, ghi `tools/ket-qua/` |
| gd-qa | Chấm vòng cuối khi các vai báo. Cập nhật `GD-031-tong-hop.md` và `mvp-criteria-checklist.md`. File nào còn lỗi chặn hoặc nặng sau vòng này thì liệt kê cho GDM, không chấm ĐẠT cho đủ |
