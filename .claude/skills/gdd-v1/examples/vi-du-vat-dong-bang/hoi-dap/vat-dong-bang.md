# Hỏi đáp chốt luật - quân băng (game tile chữ nhiều tầng, game ví dụ) - 20/10/2026

Đính kèm đã đọc: GDD markdown game tile chữ nhiều tầng mục 3, 5.0b, 5.2, 8, 9 (29/09 và 30/09/2026). Knowledge 25, 50, 70. File level L16 đến L20 (đọc bằng script `scripts/level-data-tile-chu.mjs`).

Đã chốt (không hỏi lại):
- 29/09: Lead rút gọn luật: "quân bị đóng băng, ko lấy được, có số, mỗi khi lấy được 1 quân (khác) thì số trừ 1, về 0 thì mất băng". Về 0 vẫn phải hết bị đè mới nhặt được.
- 29/09: Lấy nhóm Link N quân thì số băng giảm N. Bấm vào quân bị từ chối thì không giảm.
- 30/09: Tầng đặt băng: tầng trên cùng và tầng ngay dưới nó, tối đa 3 tầng trên. Bàn 2 tầng thì cả tầng đáy. Số băng 1 đến 6.
- 30/09: Mốc giới thiệu L16 (băng 1 quân từ đầu ván), L17 và L18 luyện (2 quân, 1 từ 10% và 1 từ 50%). Mật độ L16 đến 25 1 đến 3 quân, L26 đến 35 3 đến 4, L36 đến 50 4 đến 6. Chia hai đợt trong ván (5 đến 10% và 45 đến 50%).
- 01/10: Thành phần "Băng" trong thang độ khó v2 trọng số 7 (60% loại bỏ với bot người thường, 40% số nước quân đã thoáng mà vẫn băng). Cờ "băng tan trước khi lộ".
- Không booster Hoàn tác và Soi trên màn chơi (art chỉ có 3 nút).

Câu hỏi (trả lời bằng số câu kèm phương án, ví dụ "1: a"):

## Luật
1. Nam châm có được rút quân băng không? Nghiêng về: không, nam châm chỉ rút quân có số băng bằng 0. Vì: băng là chặn theo thời gian. Vượt bằng booster làm mechanic vô nghĩa và bot đo không tính booster.
2. Xáo có giữ số băng tại vị trí không? Nghiêng về: giữ, chỉ chữ hoán vị. Vì: Xáo "hoán vị chữ giữa các quân, vị trí giữ nguyên" (GDD 3.5). Băng thuộc vị trí như tầng.
3. Chuộc khay có làm số băng giảm không? Nghiêng về: không, chỉ quân nhặt từ bàn mới đếm. Vì: cài đặt hiện tại tan khi tổng số quân đã nhặt từ bàn đạt n.

## Trạng thái chồng nhau
4. Quân vừa úp vừa băng: số băng có hiện khi quân còn úp không? Nghiêng về: hiện. Vì: số băng là thông tin nhịp, không phải thông tin chữ. Úp chỉ giấu chữ.
5. Quân băng trong nhóm Link: nhóm bị chặn cho tới khi mọi quân hết băng, đúng không? Nghiêng về: đúng. Vì: luật Link "mọi quân trong nhóm đều phải nhặt được".

## Tín hiệu và phản hồi
6. Bấm vào quân băng còn số: phản hồi gì? Nghiêng về: quân rung ngang nhẹ, không âm, số không đổi. Vì: ở game tile rơi bấm quân Lock thì rung. Không âm để không loãng phản hồi nhặt đúng.
7. Số băng về 0: có hiệu ứng tan không? Nghiêng về: có, lớp băng vỡ ngắn dưới 0,3 giây, không khóa input. Vì: prototype hiện gỡ tĩnh. Unity có lớp băng và bộ đếm 3D riêng nên cần một dòng VFX.
8. Có SFX tan băng không? Nghiêng về: có, tiếng băng vỡ nhỏ hơn tiếng nhặt đúng. Vì: cùng lý do S10 Reveal nhẹ hơn S2.

## Tutorial
9. Text box dạy băng ở L16? Nghiêng về: "Ice tiles are locked. Pick other tiles to melt the ice!" kèm nút Got it!. Vì: khuôn tab Tutorials (tối đa 2 dòng, mỗi mechanic một khối).

## Dữ liệu
10. File L16 đang có 2 quân băng số 5 và 6 trong khi mốc 30/09 ghi "1 quân từ đầu ván". Giữ file hay sửa file theo mốc? Nghiêng về: sửa file theo mốc. Vì: level giới thiệu không chạm trần (knowledge 25).

## Trả lời (ca thử: giả lập, không có Lead)
| Câu | Trả lời | Nguồn |
|---|---|---|
| 3 | Không giảm | GDD 5.2 cài đặt |
| 5 | Đúng | GDD 5.3 |
| 1, 2, 4, 6, 7, 8, 9, 10 | chưa trả lời | điền theo phương án nghiêng về, đánh [GIẢ ĐỊNH] |
