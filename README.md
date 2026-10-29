# BÀI TẬP CÁ NHÂN: TRIỂN KHAI WEBSITE TỰ ĐỘNG VỚI GITHUB ACTIONS

- **Họ và tên**: Dương Hoàng Thái
- **MSSV**: 1822040093
- **Tài khoản GitHub**: `1822040093-max`
- **Tên Repository GitHub**: `devops-1822040093`
- **Địa chỉ website GitHub Pages sau deploy**: `https://1822040093-max.github.io/devops-1822040093/`

---

## 1. Cấu trúc thư mục dự án

```text
1822040093-DuongHoangThai-BTCN/
├── .github/
│   └── workflows/
│       └── deploy.yml      # File cấu hình CI/CD Pipeline (2 job: check & deploy)
├── index.html              # Trang chủ website (chứa thẻ <h1> tên + MSSV và <title>)
├── style.css               # Định dạng giao diện (giao diện hiện đại, responsive, dark/light)
├── script.js               # Logic tương tác (đồng hồ thời gian thực, đếm click, đổi giao diện)
└── README.md               # Hướng dẫn chi tiết thực hiện và làm báo cáo Word
```

---

## 2. Hướng dẫn từng bước thực hiện trên GitHub

### Bước 1: Tạo Repository mới trên GitHub
1. Đăng nhập vào [GitHub](https://github.com).
2. Nhấn vào nút **New** (Tạo repository mới).
3. Đặt tên Repository chính xác là:
   ```text
   devops-1822040093
   ```
4. Chọn chế độ: **Public**.
5. **Không** tích chọn "Add a README file" hay bất kỳ template nào (để repository hoàn toàn rỗng).
6. Nhấn **Create repository**.

---

### Bước 2: Bật tính năng GitHub Pages (Source: GitHub Actions)
1. Trong repository `devops-1822040093` vừa tạo, vào tab **Settings** (ở thanh menu trên cùng).
2. Ở thanh bên trái, chọn mục **Pages** (dưới nhóm *Code and automation*).
3. Tại phần **Build and deployment** -> mục **Source**:
   - Chọn chuyển từ *Deploy from a branch* sang **GitHub Actions**.
4. Lúc này GitHub Pages đã sẵn sàng nhận pipeline tự động từ file workflow.

---

### Bước 3: Đẩy mã nguồn từ máy tính lên GitHub (Git Push)

Mở Terminal / PowerShell tại thư mục này (`d:\1822040093-DuongHoangThai-BTCN`), chạy lần lượt các lệnh:

```bash
# 1. Liên kết với remote repository của bạn trên GitHub
git remote add origin https://github.com/1822040093-max/devops-1822040093.git

# 2. Đẩy code lên nhánh main
git push -u origin main
```

---

### Bước 4: Kiểm tra Pipeline và Truy cập Website

1. Truy cập tab **Actions** trên repository GitHub của bạn:
   - Bạn sẽ thấy workflow `CI/CD Pipeline - Deploy to GitHub Pages` đang chạy.
   - Nhấp vào workflow để xem 2 job:
     - **Job 1 (check)**: Kiểm tra sự tồn tại của 3 file (`index.html`, `style.css`, `script.js`) và kiểm tra thẻ `<title>` trong `index.html`.
     - **Job 2 (deploy)**: Tự động chạy sau khi job `check` màu xanh (thành công) và xuất bản lên GitHub Pages.
2. Khi job `deploy` hoàn thành, URL website sẽ xuất hiện:
   ```text
   https://1822040093-max.github.io/devops-1822040093/
   ```
3. Truy cập vào đường link trên để kiểm tra website hoạt động với đầy đủ họ tên **Dương Hoàng Thái - 1822040093**.

---

### Bước 5: Thực nghiệm Pipeline thất bại & Cập nhật phiên bản mới (Theo yêu cầu đề bài)

#### 5.1. Cố tình tạo lỗi để Pipeline thất bại (Fail)
1. Mở file `index.html`, tạm thời xóa (hoặc comment) dòng thẻ `<title>`:
   ```html
   <!-- <title>Dương Hoàng Thái - 1822040093 | CI/CD GitHub Actions</title> -->
   ```
2. Thực hiện commit và push lên GitHub:
   ```bash
   git add index.html
   git commit -m "test: Co tinh xoa the title de test pipeline that bai"
   git push origin main
   ```
3. Vào tab **Actions** trên GitHub:
   - Quan sát job `check` bị đánh dấu **X màu đỏ (Failed)** với thông báo lỗi: `❌ LỖI: File index.html không chứa thẻ <title> hợp lệ hoặc thẻ bị rỗng!`.
   - Quan sát job `deploy` bị bỏ qua (Skipped) do `needs: check` không thỏa mãn.
   - **Chụp ảnh màn hình bước này lại để dán vào file Word báo cáo!**

#### 5.2. Khôi phục thẻ title và cập nhật lên "Phiên bản 2.0"
1. Mở file `index.html`:
   - Thêm lại thẻ `<title>`:
     ```html
     <title>Dương Hoàng Thái - 1822040093 | Phiên bản 2.0</title>
     ```
   - Cập nhật dòng trạng thái hoặc phụ đề trên giao diện thành `Phiên bản 2.0`:
     ```html
     <span class="status-text" id="pipeline-status">Hệ thống đang hoạt động bình thường (Phiên bản 2.0)</span>
     ```
2. Thực hiện commit và push:
   ```bash
   git add index.html
   git commit -m "fix: Khoi phuc the title va cap nhat website len Phien ban 2.0"
   git push origin main
   ```
3. Vào lại tab **Actions**:
   - Thấy job `check` và job `deploy` đều xanh lá cây (Success).
4. Mở lại link website `https://1822040093-max.github.io/devops-1822040093/` để xác nhận giao diện đã được cập nhật sang "Phiên bản 2.0".
   - **Chụp ảnh màn hình lại để dán vào file Word báo cáo!**

---

## 3. Dàn ý gợi ý cho Báo cáo Word

| Phần | Nội dung cần trình bày | Hình ảnh minh họa cần chụp |
|---|---|---|
| **1. Thông tin sinh viên & Đề tài** | - Họ tên: Dương Hoàng Thái<br>- MSSV: 1822040093<br>- Đề tài: Triển khai Website tự động với GitHub Actions | (Ảnh thông tin bìa báo cáo) |
| **2. Cấu trúc mã nguồn & Nội dung Website** | - Trình bày mục đích của 3 file `index.html`, `style.css`, `script.js`.<br>- Thẻ `<h1>` chứa: `Dương Hoàng Thái - 1822040093`. | - Ảnh chụp cấu trúc thư mục trên VS Code / Explorer.<br>- Ảnh chụp đoạn mã thẻ `<h1>` và `<title>`. |
| **3. Cấu hình GitHub Actions (deploy.yml)** | - Giải thích chi tiết 2 job:<br>  + Job `check`: Kiểm tra 3 file và thẻ `<title>`.<br>  + Job `deploy`: `needs: check`, deploy Pages. | - Ảnh chụp mã nguồn file `.github/workflows/deploy.yml`. |
| **4. Kết quả triển khai ban đầu (v1.0)** | - Cấu hình Settings -> Pages (Source: GitHub Actions).<br>- Kết quả chạy workflow thành công trên GitHub Actions. | - Ảnh cấu hình GitHub Pages.<br>- Ảnh 2 job `check` và `deploy` màu xanh.<br>- Ảnh website chạy trên domain `github.io`. |
| **5. Thực nghiệm Pipeline thất bại** | - Cố tình xóa thẻ `<title>` và push.<br>- Pipeline dừng lại ngay ở job `check`, không cho phép deploy code lỗi. | - Ảnh commit xóa `<title>`.<br>- Ảnh Job `check` báo lỗi đỏ trên tab Actions.<br>- Ảnh Job `deploy` bị Skipped/Canceled. |
| **6. Khôi phục và nâng cấp (Phiên bản 2.0)** | - Sửa lại thẻ `<title>`, cập nhật giao diện "Phiên bản 2.0", push lại.<br>- Pipeline chạy thành công trở lại và cập nhật website. | - Ảnh commit sửa lỗi và lên v2.0.<br>- Ảnh workflow chạy thành công.<br>- Ảnh website đã cập nhật nội dung "Phiên bản 2.0". |
| **7. Kết luận & Bài học kinh nghiệm** | - Đánh giá vai trò của CI/CD Pipeline trong việc tự động hóa kiểm tra và ngăn chặn triển khai lỗi lên môi trường thực tế. | |
