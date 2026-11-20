# Tab phụ: Nhân vật, Object, SFX, VFX - Anim, Tutorials

Khuôn cột lấy từ bản Lead đã duyệt: một game băng chuyền phục vụ Order cho Nhân vật, Object, SFX, VFX - Anim, và một game tile rơi cho Tutorials. Dùng cho cả V0.5 (`/gdd-v05`) và V1 (`/gdd-v1 sheet`).

Các tab trong file này là tab tùy chọn. Mặc định của V0.5 vẫn chỉ 2 tab Gameplay và Main Task. Chỉ thêm tab khi game có nội dung đó. Game không có nhân vật thì không có tab Nhân vật. Game không có object riêng cần mô tả thì không có tab Object.

## 1. Khi nào có tab phụ

| Tab | Có khi | Hỏi Lead? |
|---|---|---|
| Nhân vật | Game có nhân vật. Tab mô tả từng nhân vật, ref, hành vi Animation và biểu cảm | Không, luật đã có |
| SFX, VFX - Anim, Object | Game có nội dung đó và danh sách của ô Main Task dài hơn 5 dòng, không nhét hết vào 1 ô. Danh sách vừa 5 dòng thì để trong ô Main Task | Không, luật đã có |
| Tutorials | V1 nằm trong khuôn 6 tab. V0.5 chỉ khi Lead nói bằng lời | V0.5: có |
| Tab khác (Object List, Group List, Thuật toán level) | Lead nói bằng lời | Có |

- Ô Main Task trỏ sang tab phụ chỉ ghi số lượng và tên tab: "19 âm và 1 nhạc nền, xem tab SFX".
- Số trong ô Main Task bằng số hàng của tab. Đếm lại sau mỗi lần sửa tab.

## 2. Luật viết chung

- Mỗi mục một hàng. Không gộp nhiều âm, nhiều hiệu ứng vào một hàng.
- Ghi chú không chen thành hàng trong bảng. Lời dặn chung đặt ở tiêu đề cột hoặc tab riêng (bài học từ bản Lead sửa tay).
- Hàng 1 là tiêu đề cột. Tên cột ở dòng đầu ô, lời dặn Art (vẽ theo cột nào) tối đa 2 dòng ngay dưới tên cột.
- Ô ngắn: cột tên tối đa 1 dòng, cột mô tả tối đa 3 dòng.
- Không dấu chấm phẩy, không gạch dài, không đường dẫn file repo, không tên biến code.
- Dùng đúng tên vật và tên vùng của tab Gameplay. Tab Gameplay gọi "đĩa" thì tab phụ không gọi "khay".
- Tab phụ viết tay, không sinh từ cấu hình. File: `projects/<slug>/gdd/sheet/<số>-<tên-tab>.tsv`.

Soát mọi tab, kể cả tab phụ:

```
node .claude/skills/gdd-v1/scripts/soat.mjs projects/<slug>/gdd/sheet/*.tsv --loai sheet
```

## 3. Nhân vật

| Cột | Viết gì |
|---|---|
| Ref tính cách, diễn hoạt (tên game ref) | Ảnh chèn trong ô |
| Ref 2D art | Ảnh art đã vẽ lại theo style game |
| Nhân vật | Tên |
| Vai trò trong màn chơi | Làm gì trên màn, người chơi đọc được gì từ nhân vật. Khách thêm dòng Tính cách |
| Ngoại hình | Tối đa 3 dòng: tóc và da, áo quần, đồ cầm hoặc dáng quen |
| Animation | Mỗi dòng "- Tên: khi nào chạy" |
| Ref key pose Animation | Ảnh, mỗi ô một trạng thái, cùng thứ tự cột Animation |
| Biểu cảm | Mỗi dòng "- Tên: khi nào hiện" |
| Ghi chú | Tên nhân vật ref và link |

- Hàng nhóm (Đầu bếp, Khách) ghi chữ ở cột đầu, các cột khác trống.
- Nhân vật cùng vai ghi đủ ở người đầu, người sau ghi "Giống <tên>" ở cột trùng.

Ví dụ (game băng chuyền phục vụ Order, chép nguyên văn cột Nhân vật, Animation, Biểu cảm):

| Nhân vật | Animation | Biểu cảm |
|---|---|---|
| Bancho | - Thái: lúc đứng chờ, dao chém ra vệt slash trắng<br>- Reo và cúi chào: khi Win<br>- Ôm mặt: khi Lose | - Bình thường: mặc định<br>- Lo: băng đầy<br>- Buồn: khi Lose |
| Ellie | Giống Yui | Giống Yui |

## 4. Object

| Cột | Viết gì |
|---|---|
| STT | Liền từ 1 |
| Tên | Tên vật như trong Gameplay |
| Màu tham khảo | Mã màu đo từ game ref, ghi rõ Art chốt bằng mắt |
| Trông thế nào | Một câu: hình, vân, điểm nhận ra ở cỡ nhỏ nhất |

Ví dụ (game băng chuyền phục vụ Order, nguyên văn):

| STT | Tên | Trông thế nào |
|---|---|---|
| 1 | Cá ngừ | Lát đỏ có vân trắng |
| 3 | Tôm | Thân cong, đuôi xòe. Sống và chín cùng hình, khác màu |

## 5. SFX

| Cột | Viết gì |
|---|---|
| STT | Liền từ 1 |
| Tên âm | Tên ngắn |
| Khi nào phát | Việc người chơi làm hoặc thấy lúc đó |
| Cảm giác | Âm nghe ra sao, một câu |

Ví dụ (game băng chuyền phục vụ Order, nguyên văn):

| STT | Tên âm | Khi nào phát | Cảm giác |
|---|---|---|---|
| 1 | Chạm đĩa | Chạm 1 đĩa trên khay | Tiếng gõ gỗ nhẹ |
| 2 | Bị chặn | Chạm đĩa không chọn được, hết Hoàn tác, bấm level khóa | Tiếng rè ngắn |

## 6. VFX - Anim

| Cột | Viết gì |
|---|---|
| STT | Liền từ 1 |
| Tên | Tên hiệu ứng ngắn |
| Khi nào chạy | Việc người chơi làm hoặc thấy lúc đó |
| Trông thế nào | Màu, hình, chuyển động, một câu |

Ví dụ (game băng chuyền phục vụ Order, nguyên văn):

| STT | Tên | Khi nào chạy | Trông thế nào |
|---|---|---|---|
| 2 | Xem trước khi nhấn | Giữ ngón trên đĩa | Ô Order sẽ nhận nhấp nháy vàng |
| 3 | Chọn đĩa | Chạm chọn 1 đĩa | Vòng sáng trắng quanh đĩa, đĩa nảy lên rồi trống |

## 7. Tutorials

| Cột | Viết gì |
|---|---|
| Bước | Số liền trong cả tab |
| Tên bước | Tên ngắn |
| Khi nào | Lúc người chơi gặp bước này: "Vào L7 lần đầu" |
| Highlight | Vùng sáng, có lớp tối hay không |
| Bàn tay | Chỉ vào đâu, hoặc "Không" |
| Text box (tiếng Anh) | Tối đa 2 dòng |
| Kết thúc bước | Việc người chơi làm để qua bước |
| Ghi chú | Tối đa 2 câu |

- Hàng khối (Quy tắc chung, Onboarding, Cảnh báo, từng mechanic, từng booster) chỉ ghi tên khối ở cột đầu. Luật mechanic, booster nằm ở tab Gameplay, không chen hàng giải thích dưới hàng khối.
- Viết lời người chơi thấy và làm. Không ghi giây, không ghi bộ đếm hay số lượt còn lại. Nhịp thời gian Dev chỉnh trong build.
- Chỉ dạy điều tab Gameplay đã viết. Từ nào dùng trong tutorial phải có trong Gameplay.

Ví dụ viết lại từ tab Tutorials của một game tile rơi:

| Ô gốc | Không đạt vì | Viết lại |
|---|---|---|
| Kết thúc bước 2: "Order đủ 3 quân và clear, giữ 0,4 s rồi tắt lớp tối" | Ghi giây | Order đủ quân và clear, lớp tối tắt |
| Kết thúc bước 12: "Chạm quân đó: số giảm từ 3 còn 2, tắt lớp tối" | Ghi bộ đếm | Chạm quân đó: số trên băng giảm, lớp tối tắt |
| Quy tắc chung: "đứng yên 3 s thì quân nên chạm sáng lên, các lần sau 6 s" | Ghi giây | Người chơi đứng yên một lúc thì quân nên chạm sáng lên |
| Ghi chú bước 6: "Trừ 1 lượt, còn 3" | Ghi bộ đếm | Dùng mất 1 lượt booster |
