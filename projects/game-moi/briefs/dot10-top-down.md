# Đợt 10 game-moi: chuyển góc nhìn sang top-down 45 độ (2026-11-23)

Lead: "Về Art game sẽ là không gian game là 3D đồ họa là 2.5D Góc nhìn là Top-down 45". "Không gian 3D nghĩa là trong Unity sẽ dựng với 3D nhưng dùng Assets 2D". Trạm và cảng: "Chuyển hết sang top-down".
Nguồn việc: `DECISIONS.md` mục "2026-11-23 - Art: không gian 3D, đồ họa 2.5D, góc nhìn top-down 45 độ".

Việc của đợt: mọi chỗ trong GDD, Book, tab còn tả theo góc nhìn ngang (mặt cắt trạm, tầng, trái phải, leo thang, mép phải) viết lại theo top-down 45 độ. Chỉ đổi cách trình bày không gian và layout. Luật chơi, số, tên gọi giữ nguyên.

## Quy ước chung (GDM chốt, log 118, mọi vai dùng)

| Mục | Quy ước |
|---|---|
| Camera | Cố định, nghiêng 45 độ, không xoay. Phía trên màn hình là phía bắc của map. Một camera cho cả trạm, cảng, ngoài không gian |
| Dựng | Unity dựng cảnh 3D. Mọi asset là 2D: nhân vật, Driftlife, vật phẩm, tàu là sprite đứng quay mặt về camera. Sàn, nền, tường thấp là sprite hoặc tile phẳng. Không có model 3D |
| Mặt phẳng chơi | Mọi di chuyển nằm trên mặt phẳng ngang nhìn từ trên xuống, ở trạm và ngoài không gian. Ngoài không gian vẫn bay tự do 8 hướng. Kích thước map, tốc độ, Oxy, quãng đường giữ nguyên: đơn vị khoảng cách không đổi |
| Trạm | Thay mặt cắt ngang 3 tầng bằng một mặt bằng nhìn từ trên: khoang là phòng, nối bằng hành lang. Ưu tiên một mặt bằng duy nhất để camera không phải đổi tầng. Danh sách khoang, luật sửa, người vớt giữ nguyên |
| Cảng | Quầy cảng 3 ô và 3 cửa neo giữ nguyên số. Quãng chạy từ quầy tới từng cửa neo giữ như tham số sim `tools/tham-so/ca-cang.json` (quayX, neoX, neoDai, tocDo) và tiêu chí "quầy tới cửa neo 3 dưới 2,5 giây chạy", để sim GD-054 còn hiệu lực. Đổi quãng chạy thì báo GDM, gd-tech chạy lại sim |
| Che khuất | Vật cao (vách, xác tàu, máy) che người chơi thì làm mờ phần che. gd-tech ghi spec |
| Hướng sprite | Tối thiểu cho artist: nhân vật 3 hướng vẽ (lên, xuống, ngang) và lật gương ngang, đi 8 hướng dùng hướng gần nhất. Vai nào cần nhiều hơn thì ghi [GIẢ ĐỊNH] kèm lý do |
| Từ ngữ | "trên, dưới, trái, phải" theo màn hình. Không dùng "tầng trên, tầng dưới, leo, rơi, trọng lực" trừ khi là luật có thật. "mặt cắt" đổi thành "mặt bằng" |

## Ai làm gì

| Mã | Việc | Agent | Ghi vào |
|---|---|---|---|
| GD-070 | Map, map nhánh Station Cinder, hazard, greybox theo top-down | gd-world (opus) | `gdd/he-thong/map.md`, `gdd/sheet/Zone.tsv`, `book/phan-2/03-map-va-chuyen.md` |
| GD-071 | Mặt bằng trạm Ember và cảng thay mặt cắt, mục 2.6b, mọi chỗ "mặt cắt" | gd-quan (opus) | `gdd/he-thong/tram-va-cang.md`, `gdd/sheet/Customer.tsv` nếu chạm, `book/phan-2/06-tram-va-cang.md` |
| GD-072 | Điều khiển trong trạm (đi 8 hướng thay đi ngang và leo thang), hướng sprite nhân vật | gd-character (sonnet) | `gdd/he-thong/nguoi-choi.md`, `gdd/sheet/Player.tsv`, `book/phan-2/02-nguoi-choi.md` |
| GD-073 | Telegraph, hitbox, layout trận boss Scrapmaw theo top-down | gd-combat (opus) | `gdd/he-thong/combat-driftlife.md`, `gdd/sheet/Enemy.tsv` nếu chạm, `book/phan-2/04-combat-driftlife.md` nếu chạm |
| GD-074 | Spec camera, dựng 3D với asset 2D, che khuất, camera co-op 2 tới 4 người, schema vị trí khoang | gd-tech (sonnet) | `gdd/he-thong/ky-thuat.md` |
| GD-075 | Wireframe và HUD theo top-down (màn trạm, màn cảng UI-40, bảng tàu) | gd-ux (sonnet), đợt 2 sau GD-070, GD-071 | `gdd/he-thong/ux-ui.md`, `gdd/sheet/WIREFRAME.tsv`, `gdd/sheet/Tutorials.tsv` |
| GD-076 | Nghiệm thu đợt | gd-qa (sonnet), sau GD-070 tới GD-075 | `qa/GD-076.md` |
| GDM | OVERVIEW, Assets, Book II.1, `book/de-xuat-du-an.md`, khung | GDM | các file đó |

## Ai đưa gì cho ai

- gd-quan ghi mặt bằng trạm và cảng sớm (mục 2.6b), gd-ux và gd-tech đọc lại trước khi chốt phần của mình.
- gd-tech cần từ gd-world tầm nhìn tối thiểu ngoài không gian (bán kính người chơi phải thấy quanh mình) để đặt camera co-op. Chưa có thì gd-tech ghi [GIẢ ĐỊNH] và nêu trong báo cáo.
- Đổi tên trường dữ liệu (ví dụ `viTriMatCat` trong `ky-thuat.md`) do gd-tech đổi, gd-quan dùng đúng tên mới.
- Bất đồng giữa hai vai: ghi hai phương án vào báo cáo, GDM chốt.

## Luật chung

- Mỗi vai chỉ sửa file trong cột Ghi vào của mình. Không sửa Google Sheet, không commit, không push.
- Không thêm luật chơi, không đổi số. Điều chưa chốt đánh `[GIẢ ĐỊNH]`.
- Sơ đồ mermaid và chú thích hình đổi theo. Ảnh chưa có giữ `[CHỜ ẢNH: ...]`, sửa mô tả cho đúng top-down.
- Tiếng Việt có dấu, không gạch dài, không emoji, không dấu chấm phẩy. Book qua `node tools/kiem-book.mjs <file>`, GDD qua `node tools/validate-gdd.mjs` và `node tools/kiem-de-doc.mjs`, TSV dòng không quá 300 ký tự.
- Xong báo GDM, dòng đầu `GD-### XONG|KẸT: <một câu>` kèm khối `## Báo cáo cho GDM`.
