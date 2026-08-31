# Hướng dẫn cài đặt môi trường lập trình

---

# 1. Cài đặt VS Code

- Truy cập: https://code.visualstudio.com/download
- **Windows:** Tải file `.exe`, chạy và nhấn **Next** đến khi hoàn tất.
- **macOS:** Tải file `.dmg`, mở và kéo **Visual Studio Code** vào thư mục **Applications**.

---

# 2. Cài đặt SourceTree

- Truy cập: https://www.sourcetreeapp.com
- **Windows:** Tải file `.exe`, chạy và đăng nhập bằng tài khoản Atlassian (hoặc tạo mới).
- **macOS:** Tải file `.dmg`, mở và kéo **Sourcetree** vào thư mục **Applications**.

---

# 3. Cài đặt Node.js (qua nvm)

> **nvm** (Node Version Manager) giúp cài và quản lý nhiều phiên bản Node.js, dễ nâng cấp hoặc chuyển đổi phiên bản sau này.

---

## 3.1. Windows

### Bước 1 — Cài nvm-windows

1. Truy cập: https://github.com/coreybutler/nvm-windows/releases
2. Tải file **`nvm-setup.exe`** ở phần **Assets** của bản release mới nhất.
3. Chạy file `.exe`, nhấn **Next** đến khi hoàn tất cài đặt.
4. Mở lại **Command Prompt** hoặc **PowerShell** (mở mới để nhận biến môi trường).
5. Kiểm tra cài đặt thành công:
   ```
   nvm version
   ```

### Bước 2 — Cài Node.js qua nvm

```bash
# Cài phiên bản LTS mới nhất (khuyến nghị)
nvm install lts

# Dùng phiên bản vừa cài
nvm use lts

# Kiểm tra
node --version
npm --version
```

---

## 3.2. macOS

### Bước 1 — Cài nvm

Mở **Terminal** và chạy lệnh sau:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

Sau khi cài xong, **đóng và mở lại Terminal**, hoặc chạy lệnh reload phù hợp với shell đang dùng:

```bash
# Nếu dùng zsh (mặc định trên macOS)
source ~/.zshrc

# Nếu dùng bash
source ~/.bashrc
```

Kiểm tra cài đặt thành công:

```bash
nvm --version
```

### Bước 2 — Cài Node.js qua nvm

```bash
# Cài phiên bản LTS mới nhất (khuyến nghị)
nvm install --lts

# Kiểm tra
node --version
npm --version
```

---

# 4. Cài đặt Extensions

## 4.1. Prettier – Tự động format code

### Cài extension
1. Mở VS Code.
2. Vào tab **Extensions** (Ctrl+Shift+X / Cmd+Shift+X).
3. Tìm kiếm **Prettier - Code formatter**.
4. Nhấn **Install**.

### Bật Format on Save
1. Mở **Settings** (Ctrl+, / Cmd+,).
2. Tìm kiếm `format on save`.
3. Tích vào ô **Editor: Format On Save**.

### Đặt Prettier làm formatter mặc định
1. Trong **Settings**, tìm kiếm `default formatter`.
2. Chọn **Prettier - Code formatter** trong danh sách.

---

# 5. Tắt gợi ý code tự động của Copilot

1. Nhấn vào **biểu tượng Copilot** ở thanh trạng thái phía dưới (mũi tên 1).
2. Trong panel hiện ra, tìm mục **Inline Suggestions**.
3. Bỏ tích **All files** để tắt toàn bộ, hoặc bỏ tích từng ngôn ngữ cụ thể (ví dụ: **JavaScript**) để chỉ tắt cho ngôn ngữ đó (mũi tên 2).

![Tắt Auto Suggest](image.png)
