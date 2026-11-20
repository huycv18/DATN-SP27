# Bố cục dải Gần (sinh bởi bo_cuc.py, seed 1, 300 chuyến liền nhau)

| Chỉ số | Kết quả | Tiêu chí (map.md mục 8) |
|---|---|---|
| Hợp lệ ngay lần thử đầu | 51,0% | |
| Rơi bố cục dự phòng (quá 20 lần thử) | 0,00% | dưới 1% |
| Bố cục cuối hợp lệ | 100% (mọi bố cục qua kiem(), dự phòng đã kiểm) | 100% |
| Trùng mảnh cùng ô với chuyến trước, lớn nhất | 5 trên 10 ô ghép | tối đa 5 |
| Trùng mảnh cùng ô, trung bình | 1,5 trên 10 | |
| Beacon cùng ô với chuyến trước | 0,0% | 0% |

Mẫu bố cục (hàng 3 ở trên, * là đường chính, B là beacon):

```
 G-X03    G-H01   Lối và    G-M02  
Bến ng*   G-M03*   G-O02    G-T01  
 G-M01    G-M05*   G-O01*   G-X01*B
```

```
 G-M05    G-X01   Lối và    G-M04  
Bến ng*   G-M03*   G-O02    G-X03 B
 G-H03    G-M02*   G-H01*   G-X02* 
```

```
 G-M05    G-M03   Lối và*   G-X02*B
Bến ng*   G-H01*   G-M04*   G-O02  
 G-H03    G-X01    G-T01    G-T02  
```

Tự kiểm tiêu chí: ĐẠT
