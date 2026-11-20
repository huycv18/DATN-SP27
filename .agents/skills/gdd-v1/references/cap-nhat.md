# Chế độ cập nhật

Vào chế độ này khi file đích đã tồn tại (he-thong, mini) hoặc thư mục sheet đã có TSV. Lead tự sửa song song và hay xóa mục, nên nguyên tắc là: đọc nguyên văn trước, chỉ thêm, không thay.

## 1. Markdown (he-thong, mini)

1. Đọc file từ đĩa. Lập bảng mục: mục của khuôn | có trong file | trống hoặc giữ chỗ | nội dung mới cần vào.
2. Mục đã có nội dung: giữ nguyên từng chữ, kể cả khi viết khác phong cách. Không sắp xếp lại, không đổi số thứ tự luật đã có (tool, tutorial, DECISIONS đang trỏ theo số đó).
3. Mục trống hoặc còn chữ giữ chỗ ("...", "<...>", "[chưa có]"): điền.
4. Mục khuôn mới mà file chưa có (ví dụ file cũ thiếu "Trạng thái và chuyển tiếp", "Cảm giác", "Tiêu chí nghiệm thu"): thêm đúng vị trí của khuôn, đánh dấu "(thêm dd/mm)" ở tiêu đề.
5. Nội dung cũ mâu thuẫn DECISIONS mới hơn: không xóa. Viết dòng mới ngay dưới, dòng cũ thêm "(đã đổi dd/mm, xem Lịch sử)". Ví dụ:

```
7. Băng chỉ đặt ở tầng trên cùng. (đã đổi 30/09, xem Lịch sử)
7. Băng đặt ở tầng trên cùng và tầng ngay dưới nó. Bàn 2 tầng thì cả tầng đáy. Chủ dự án chốt 30/09.
```

6. "Hiện hành" ở đầu file viết lại cho đúng trạng thái sau cập nhật (đây là mục duy nhất được viết lại toàn bộ).
7. Thêm dòng vào "Lịch sử thay đổi": `| dd/mm/yyyy | mục nào, đổi gì | lý do hoặc nguồn (DECISIONS dd/mm, Lead nói) | ai |`. Chưa có bảng này thì tạo ở cuối file.
8. Chạy soát trên toàn file. Lỗi ở phần cũ không sửa tự ý, liệt kê trong báo cáo để hỏi Lead.

## 2. Sheet (TSV)

1. Đọc TSV hiện có (và tab thật qua `get_values` hoặc gviz nếu có link, xem `tao-sheet.md` mục 3). Cột hiện có là chuẩn, kể cả khi khác cột mặc định của khuôn: Lead đã xóa cột thì không thêm lại.
2. Chỉ thêm hàng mới. Hàng mới chèn vào giữa (ví dụ task phụ thuộc) thì sửa cột Phụ thuộc `#n` của các hàng sau cho đúng và ghi trong README phần "Hàng đã chèn".
3. Hàng đã có: không đổi nội dung. Trạng thái xanh đỏ do Lead và team đặt, không tự đổi.
4. Mục Lead đã xóa (ghi trong hỏi đáp cũ hoặc nhìn thấy trong sheet) không thêm lại. Mechanic bị bỏ thì không có hàng tutorial, asset.
5. Sinh lại HTML bằng script. README ghi "Cập nhật dd/mm: thêm n hàng ở tab X, dán từ hàng k".

## 3. Lỗi đã gặp để tránh

- Game tile chữ nhiều tầng: Lead xóa một mechanic và đổi STT. Bản sau tự thêm lại mechanic đó và làm lệch cột Phụ thuộc.
- Game tile rơi: tạo tab Mechanic riêng bị xóa. Logic mechanic nằm ở hàng DEV của Main Task.
- Một dự án cũ: file GDD tích lũy thành nhật ký 1 081 dòng. "Hiện hành" ở đầu file là thuốc.
