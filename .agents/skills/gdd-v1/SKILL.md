---
name: gdd-v1
description: Viết hoặc cập nhật GDD cho một project của phòng Game Designer theo đúng khuôn và luật viết của Lead. Một lệnh ba loại đầu ra - he-thong (GDD một hệ thống theo template phòng), mini (mini GDD cho prototype) và sheet (nội dung 6 tab Google Sheet chuẩn của studio dạng TSV và HTML sẵn dán). Có bước hỏi đáp chốt luật một lượt từ đính kèm, chế độ cập nhật không ghi đè, và script soát định dạng in bảng kết quả. Dùng khi Lead hoặc GDM nói viết GDD, update GDD, mini GDD cho prototype, sinh sheet GDD, chốt luật ra giấy. GDD bản V0.5 (2 tab Gameplay, Main Task) dùng /gdd-v05.
argument-hint: <he-thong|mini|sheet> <tên> [--project <slug>] [--dinh-kem <đường dẫn>...] [--tra-loi <file>]
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, Bash, AskUserQuestion
---

# /gdd-v1 - viết GDD theo khuôn của phòng

Tiếng Việt có dấu toàn bộ, thuật ngữ kỹ thuật giữ tiếng Anh. Chỉ dùng "-". Không emoji.
Vai dùng skill: `gd-systems` (playbook `docs/playbooks/gd-systems.md`), GDM gọi trực tiếp khi việc nhỏ.
Đường dẫn trong skill tính từ gốc repo. Thư mục skill: `.Codex/skills/gdd-v1/` (gọi tắt `SKILL/`).

## 1. Tham số và đích ghi

| Loại | Tên | Ghi vào | Khuôn |
|---|---|---|---|
| `he-thong` | tên hệ thống, kebab-case (`vat-dong-bang`) | `projects/<slug>/gdd/he-thong/<tên>.md` | `docs/process/templates/gdd-he-thong.md` |
| `mini` | tên game | `projects/<slug>/gdd/mini-gdd.md` | `SKILL/templates/mini-gdd.md` |
| `sheet` | tên game | `projects/<slug>/gdd/sheet/` (6 cặp `.tsv` + `.html`, `README.md`) | `SKILL/templates/sheet/` |

- `<slug>`: lấy từ `--project`. Không có thì nếu `projects/` chỉ có một thư mục thì dùng nó, còn lại hỏi Lead trong cùng danh sách câu hỏi ở bước 3.
- Thiếu loại hoặc tên: in bảng trên và dừng.
- Hỏi đáp ghi vào `projects/<slug>/gdd/hoi-dap/<yyyy-mm-dd>-<tên>.md`. Kết quả soát ghi `projects/<slug>/gdd/soat/<yyyy-mm-dd>-<tên>.md`.

## 2. Đọc trước (một lượt, không hỏi gì khi chưa đọc xong)

1. `AGENTS.md` mục "Nguyên tắc vận hành" và `docs/knowledge/50-gdd-va-tai-lieu.md` (luật viết, cấu trúc Sheet, bảng màu).
2. `projects/<slug>/DECISIONS.md` và `projects/<slug>/README.md`: lấy từ Lead dùng cho vật thể và vùng, số đã có nguồn, luật đã chốt kèm ngày.
3. `projects/<slug>/gdd/tu-vung.md` nếu có (bảng từ dùng / không dùng). Chưa có thì tạo nháp từ DECISIONS và đính kèm, đánh `[GIẢ ĐỊNH]`.
4. GDD đã có trong `projects/<slug>/gdd/` (mọi loại): đọc nguyên văn để không mâu thuẫn và để vào chế độ cập nhật (mục 6).
5. Đính kèm Lead đưa (`--dinh-kem` hoặc nêu trong tin): ảnh và video đọc bằng mắt, JSON level đọc bằng script, GDD cũ đọc nguyên văn. Cách bóc từng loại: `SKILL/references/hoi-dap-chot-luat.md` mục 1.
6. Khuôn của loại đang viết (bảng mục 1) và `SKILL/references/khuon-ba-loai.md` (từng mục phải chứa gì, ví dụ đạt và không đạt).

## 3. Hỏi đáp chốt luật MỘT lượt

Mục tiêu: sau một lượt trả lời của Lead là viết được bản hoàn chỉnh.

Bước đầu tiên, trước khi viết chữ nào, hỏi người dùng skill 3 câu dưới đây. Ba câu này luôn đứng đầu danh sách:

1. Gameplay thế nào: người chơi làm gì trong một ván?
2. Win khi nào?
3. Thua khi nào?

- Người dùng skill có thể không phải Lead (skill chạy cả trên claude.ai cho org). Hỏi đúng người đang gọi skill.
- Đọc đính kèm trước khi hỏi. Đính kèm đã nói rõ câu nào thì nhắc lại kèm nguồn để người dùng xác nhận, không hỏi lại từ đầu.
- Không lấy luật thắng, thua hay mục tiêu ván từ build, prototype hay config (biến tiến độ, đồng hồ trễ, điều kiện trong code). Build chỉ cho biết build đang làm gì, chưa phải luật đã chốt.
- Câu nào chưa có trả lời thì ghi "chờ Lead chọn" ở mục đó (Cách chơi, Win hoặc Lose), không tự điền.

Sau đó:

1. Từ đính kèm và file đã đọc, liệt kê mọi điểm mơ hồ thành MỘT danh sách đánh số, nhóm theo mục của khuôn. Mỗi câu một dòng theo mẫu: `n. <câu hỏi>? Nghiêng về: <phương án>. Vì: <một câu>.` Câu về luật lõi hoặc mechanic thì liệt kê phương án, không kèm "Nghiêng về", để Lead tự viết lựa chọn. Chi tiết và bộ câu hỏi gợi ý theo thể loại: `SKILL/references/hoi-dap-chot-luat.md` mục 2.
2. Chỉ hỏi điều tài liệu không trả lời được. Điều đã có trong DECISIONS thì không hỏi lại, chỉ nhắc một dòng "Đã chốt dd/mm: ...". Dưới 15 câu, nhiều hơn thì gộp theo mục.
3. Ghi danh sách vào `projects/<slug>/gdd/hoi-dap/<ngày>-<tên>.md` rồi gửi Lead nguyên danh sách. Lead trả lời bằng số ("1: a, 3: b") hoặc file (`--tra-loi`).
4. Câu không được trả lời, hoặc Lead nói "cứ làm": điền theo phương án nghiêng về và đánh `[GIẢ ĐỊNH]` ngay tại chỗ dùng trong GDD, đồng thời liệt kê ở mục "Câu hỏi mở".
   + Trừ câu về luật lõi hoặc mechanic: Lead bỏ trống thì không tự điền, không `[GIẢ ĐỊNH]`. Ghi "chờ Lead chọn" tại chỗ dùng (V0.5 ghi "1 mechanic hidden") và liệt kê ở "Câu hỏi mở".
   + Luật lõi và mechanic chỉ chốt khi Lead nói bằng lời. Chép nguyên văn kèm ngày vào file hỏi đáp. Chữ trên nút gợi sẵn Lead bấm không tính là chốt.
5. Lead trả lời bằng ví dụ số thì viết luật lại bằng chính ví dụ đó.

## 4. Viết

- Luật: đánh số, câu khẳng định, không "thường / có thể / khá / nên". Thắng và thua viết cả ca tranh cãi. Có trạng thái thì có bảng Trạng thái và chuyển tiếp. Có nhiều sự kiện trong một lượt thì có resolution order.
- Số: trong bảng, không trong văn xuôi. Tham số có Khởi điểm, Khoảng an toàn, Tăng thì, Giảm thì, Nguồn.
- Trường hợp biên tối thiểu 4, mỗi ca có phán quyết. Tiêu chí nghiệm thu đo được: "mở level X làm Y thấy Z", "bot nhắm mắt thắng L1-5 từ 90%".
- Tham chiếu: chép nguyên văn kèm nguồn (tên game, studio, ngày xem). Không viết "làm giống game X". Game feel ghi đúng khoảnh khắc mượn và phản tham chiếu.
- Mỗi luật mới có tín hiệu nhìn thấy và dòng yêu cầu cho art, UI, tutorial, audio.
- `sheet` bản V0.5 (GDD cho prototype, game mới, chỉ 2 tab Gameplay và Main Task): dùng skill `/gdd-v05`, không dùng skill này.
- Main Task mọi bản: mỗi tính năng hoặc mechanic là 1 dòng, Scope 1 tới 2 ý, "Xong khi" 1 câu. Cột và nhóm: `SKILL/references/sheet-6-tab.md` mục 2.
- `sheet` bản V1: soạn TSV theo cột chuẩn trong `SKILL/references/sheet-6-tab.md`, rồi chạy `node SKILL/scripts/sheet-html.mjs <thư mục sheet>` để sinh HTML có màu và `README.md` hướng dẫn dán. Level Curve và Level Data lấy số thật từ file level bằng script. Không có file thì để trống ô và ghi `[GIẢ ĐỊNH]` ở README. Soát xong thì đưa lên Google Sheet theo `SKILL/references/tao-sheet.md` (chưa có link thì tự tạo, không hỏi).
- Ghi file sớm, kể cả nháp.

## 5. Soát trước khi báo xong (bắt buộc)

```
node .Codex/skills/gdd-v1/scripts/soat.mjs <file...> [--tu-vung projects/<slug>/gdd/tu-vung.md] [--loai he-thong|mini|sheet|du-lieu]
node .Codex/skills/gdd-v1/scripts/soat-selftest.mjs
```

Script in bảng Kiểm | Kết quả | Vị trí, tổng Lỗi và Cảnh báo (thoát mã 1 khi còn lỗi). Các phép kiểm:
- Ký tự và cách viết: gạch dài và gạch ngắn, emoji, "giống game X", tên biến code ngoài mục engineer, số trong văn xuôi, tiếng Việt không dấu.
- Từ không phải từ của Lead.
- Luật: chưa đánh số hoặc có từ mơ hồ, trường hợp biên dưới 4, tiêu chí nghiệm thu không đo được.
- Tab Sheet: ô Main Task quá 5 dòng (Lỗi), bộ đếm và công thức trong tab Gameplay như `x/6`, `số ... / tổng`, `a = b x c` (Cảnh báo).
- Số `[GIẢ ĐỊNH]`.

Tham số:
- `--tu-vung`: không truyền thì script tự tìm `projects/<slug>/gdd/tu-vung.md` theo đường dẫn file. Không có file đó thì in CẢNH BÁO to và tính 1 Cảnh báo: "0 lỗi" khi đó chưa gồm kiểm từ vựng.
- `--loai du-lieu`: tab dữ liệu (danh sách tile, mã ảnh, level data). Kiểm như sheet nhưng bỏ kiểm tên biến code. Định nghĩa từng phép kiểm: `SKILL/references/soat-dinh-dang.md`.

Sửa tới khi Lỗi = 0, rồi ghi bảng vào `projects/<slug>/gdd/soat/<ngày>-<tên>.md`. Cảnh báo còn lại giải thích một dòng mỗi cái trong báo cáo. Đọc lại file từ đĩa, không từ trí nhớ, trước khi soát lần cuối.

## 6. Chế độ cập nhật (file đích đã có)

- Không ghi đè mục đã có nội dung. Chỉ điền mục còn trống hoặc còn chữ giữ chỗ, và thêm mục khuôn mới mà file chưa có.
- Sửa nội dung cũ chỉ khi DECISIONS mới hơn mâu thuẫn với nó: giữ dòng cũ kèm "(đã đổi dd/mm)", viết dòng mới, ghi vào "Lịch sử thay đổi" với ngày và lý do.
- Sheet: đọc TSV hiện có, chỉ thêm hàng, không xóa hàng hay cột Lead đã bỏ. Mục Lead đã xóa không thêm lại.
- Chi tiết và ví dụ diff: `SKILL/references/cap-nhat.md`.

## 7. Báo cáo (dưới 15 dòng)

```
**Kết luận:** một câu (viết mới / cập nhật, loại, file).
**Đã xong:** file đã ghi, mỗi dòng một file.
**Soát:** Lỗi 0, Cảnh báo n (một dòng mỗi cảnh báo còn lại), [GIẢ ĐỊNH] m.
**Cần Lead quyết:** câu hỏi mở kèm phương án, hoặc "Không".
**Nơi phải đổi theo nếu luật đổi:** engine, solver, tool, tutorial, thang độ khó, Sheet (liệt kê cái áp dụng).
```

Ví dụ chạy đủ ba loại trên ca quân băng của một game tile chữ nhiều tầng (game ví dụ): `SKILL/examples/vi-du-vat-dong-bang/`.
