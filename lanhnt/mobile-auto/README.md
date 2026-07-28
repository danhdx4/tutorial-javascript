# Mobile-Auto: Automation Testing Framework

Nền tảng tự động hóa test mobile cho ứng dụng Android sử dụng WebdriverIO, Appium và Mocha.

## 📋 Mục Lục

- [Giới Thiệu](#giới-thiệu)
- [Yêu Cầu Hệ Thống](#yêu-cầu-hệ-thống)
- [Cài Đặt Nhanh](#cài-đặt-nhanh)
- [Cài Đặt Thủ Công](#cài-đặt-thủ-công)
- [Kiểm Tra Cài Đặt](#kiểm-tra-cài-đặt)
- [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
- [Chạy Tests](#chạy-tests)
- [Khắc Phục Sự Cố](#khắc-phục-sự-cố)
- [Tài Liệu Tham Khảo](#tài-liệu-tham-khảo)

## 🎯 Giới Thiệu

Framework này được xây dựng để tự động hóa kiểm thử ứng dụng Android với:

- ✅ Hỗ trợ kiểm thử tự động trên Android
- ✅ Mẫu Page Object Model
- ✅ Báo cáo chi tiết với Allure
- ✅ Chụp ảnh tự động khi test thất bại
- ✅ Hỗ trợ WebView và Native Context
- ✅ WebdriverIO v9 và Appium 2.x

## 💻 Yêu Cầu Hệ Thống

### Phần Mềm Bắt Buộc

| Phần Mềm         | Phiên Bản | Link Tải                                                         |
| ---------------- | --------- | ---------------------------------------------------------------- |
| Node.js          | LTS       | [Download](https://nodejs.org/)                                  |
| Java JDK         | LTS       | [Download](https://www.oracle.com/java/technologies/downloads/)  |
| Android Studio   | Latest    | [Download](https://developer.android.com/studio)                 |
| Android Emulator | Latest    | Tạo trong Android Studio (xem [Máy Ảo Android](#máy-ảo-android)) |
| Appium           | 2.x       | `npm install -g appium`                                          |
| Appium Inspector | Latest    | [Download](https://github.com/appium/appium-inspector/releases)  |

### Yêu Cầu Tối Thiểu Hệ Thống

- **RAM**: 8GB (tối thiểu), 16GB (khuyến nghị)
- **Đĩa cứng**: 5GB (cho Android SDK)
- **OS**: Windows 10+ (64-bit)

## 🚀 Cài Đặt Nhanh (Khuyến Nghị)

### Bước 1: Chạy Script Cài Đặt

Mở PowerShell **với quyền Admin** và chạy:

```powershell
# Di chuyển đến thư mục dự án
cd d:\HSC\AutoTestClass\tutorial-javascript\lanhnt\mobile-auto

# Chạy script cài đặt
.\setup-env.ps1
```

Script này sẽ tự động:

- ✅ Phát hiện và cấu hình JAVA_HOME
- ✅ Phát hiện và cấu hình ANDROID_HOME
- ✅ Cập nhật biến PATH cho phiên hiện tại
- ✅ Phát hiện thiết bị Android kết nối và lấy thông tin

### Bước 2: Cài Đặt Dependencies

```bash
npm install
```

### Bước 3: Kết Nối Thiết Bị

1. Kết nối thiết bị Android qua USB
2. Kích hoạt **Developer Options** trên thiết bị:
   - Vào **Settings > About Phone**
   - Nhấn 5 lần vào **Build Number**
3. Kích hoạt **USB Debugging**:
   - Quay lại **Settings > Developer Options**
   - Bật **USB Debugging**
4. Chấp nhận RSA key khi được yêu cầu

### Bước 4: Chạy Test

```bash
npm run wdio
```

### Máy Ảo Android (Android Emulator)

**Yêu cầu:**

- Cài đặt ít nhất 1 máy ảo Android trên Android Studio
- Hoặc kết nối thiết bị Android vật lý qua USB

**Cách tạo máy ảo:**

1. Mở **Android Studio**
2. Chọn **Device Manager** (bên phải cửa sổ)
3. Nhấn **Create Device**
4. Chọn một thiết bị (ví dụ: Pixel 5)
5. Chọn **API Level** (tối thiểu Android 10 - API 29)
6. Hoàn thành setup
7. Nhấn **Play** để khởi động máy ảo

```bash
npm run wdio
```

## 🔧 Cài Đặt Thủ Công

Nếu script cài đặt gặp vấn đề, hãy cài đặt thủ công theo các bước sau:

### 1. Cài Đặt Node.js

- Tải từ [nodejs.org](https://nodejs.org/)
- Chọn phiên bản **LTS** (18.x trở lên)
- Chạy installer và làm theo hướng dẫn
- Xác minh cài đặt:

```bash
node --version
npm --version
```

### 2. Cài Đặt Java JDK

- Tải từ [oracle.com](https://www.oracle.com/java/technologies/downloads/)
- Chọn **Java 21** (hoặc 17+)
- Chạy installer và ghi nhớ đường dẫn cài đặt

#### Cấu Hình JAVA_HOME (PowerShell - Quyền Admin):

```powershell
# Thay thế với đường dẫn JDK của bạn
[Environment]::SetEnvironmentVariable("JAVA_HOME", "C:\Program Files\Java\jdk-21", "User")

# Thêm vào PATH
$currentPath = [Environment]::GetEnvironmentVariable("Path", "User")
[Environment]::SetEnvironmentVariable("Path", "$currentPath;%JAVA_HOME%\bin", "User")

# Xác minh
java -version
```

### 3. Cài Đặt Android Studio & SDK

- Tải từ [developer.android.com](https://developer.android.com/studio)
- Chạy installer
- Mở Android Studio và hoàn thành SDK setup wizard
- SDK thường được cài đặt tại: `C:\Users\<YourUsername>\AppData\Local\Android\Sdk`

#### Cấu Hình ANDROID_HOME (PowerShell - Quyền Admin):

```powershell
# Thay thế với đường dẫn Android SDK của bạn
[Environment]::SetEnvironmentVariable("ANDROID_HOME", "C:\Users\<YourUsername>\AppData\Local\Android\Sdk", "User")
[Environment]::SetEnvironmentVariable("ANDROID_SDK_ROOT", "C:\Users\<YourUsername>\AppData\Local\Android\Sdk", "User")

# Thêm vào PATH
$currentPath = [Environment]::GetEnvironmentVariable("Path", "User")
$newPath = "$currentPath;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools;%ANDROID_HOME%\tools\bin"
[Environment]::SetEnvironmentVariable("Path", $newPath, "User")

# Xác minh
adb version
```

### 4. Cài Đặt Appium

```bash
npm install -g appium
npm install -g appium-doctor

# Kiểm tra cài đặt
appium -v
appium-doctor
```

## ✅ Kiểm Tra Cài Đặt

### Kiểm Tra Tự Động (Khuyến Nghị)

Chạy script cài đặt để kiểm tra môi trường:

```powershell
.\setup-env.ps1
```

Script sẽ:

- ✅ Kiểm tra và báo cáo trạng thái JAVA_HOME
- ✅ Kiểm tra và báo cáo trạng thái ANDROID_HOME
- ✅ Kiểm tra cấu hình PATH
- ✅ Phát hiện thiết bị Android kết nối
- ✅ Hiển thị thông tin thiết bị (Manufacturer, Model, Android version, UDID)

### Kiểm Tra Thủ Công

Mở Command Prompt hoặc PowerShell và chạy các lệnh sau:

```bash
# Kiểm tra Java
java -version              # openjdk 21 hoặc cao hơn

# Kiểm tra ADB
adb version                # Android Debug Bridge version 1.0.x

# Kiểm tra thiết bị kết nối
adb devices                # Liệt kê thiết bị kết nối
```

## 📁 Cấu Trúc Dự Án

```
mobile-auto/
├── src/
│   ├── pages/              # Page Object Model
│   │   ├── login.page.ts
│   │   ├── secure.page.ts
│   │   └── page.ts         # Base page class
│   └── tests/              # Test scripts
│       ├── sample.spec.ts
│       └── test.e2e.ts
├── chromedriver-mobile/    # WebDriver binaries
├── screenshots/            # Ảnh chụp khi test thất bại
├── wdio.conf.ts           # Cấu hình WebdriverIO
├── tsconfig.json          # Cấu hình TypeScript
├── setup-env.ps1          # Script cài đặt môi trường
├── package.json           # Dependencies
└── README.md              # Tài liệu này
```

## 🧪 Chạy Tests

### Chạy Tất Cả Tests

```bash
npm run wdio
```

### Chạy Tests Cụ Thể

```bash
# Chỉ chạy test sample
npx wdio run wdio.conf.ts --spec ./src/tests/sample.spec.ts

# Chỉ chạy test e2e
npx wdio run wdio.conf.ts --spec ./src/tests/test.e2e.ts
```

### Chạy Tests với Mock/Debug

```bash
# Chạy với log chi tiết
npm run wdio -- --log-level debug

# Chạy test đơn lẻ
npx wdio run wdio.conf.ts --suite sample
```

## 🔍 Khắc Phục Sự Cố

### Lỗi: "JAVA_HOME is not set"

**Giải pháp:**

```powershell
# Chạy với quyền Admin
[Environment]::SetEnvironmentVariable("JAVA_HOME", "C:\Program Files\Java\jdk-21", "User")

# Khởi động lại terminal
```

### Lỗi: "ANDROID_HOME is not set"

**Giải pháp:**

```powershell
# Chạy với quyền Admin
[Environment]::SetEnvironmentVariable("ANDROID_HOME", "C:\Users\<YourUsername>\AppData\Local\Android\Sdk", "User")

# Khởi động lại terminal
```

### Lỗi: "adb: not found" hoặc "adb: command not found"

**Giải pháp:**

1. Kiểm tra ANDROID_HOME được cấu hình đúng
2. Thêm `%ANDROID_HOME%\platform-tools` vào PATH
3. Khởi động lại terminal

### Lỗi: "No device connected"

**Giải pháp:**

1. Kết nối thiết bị Android qua USB
2. Bật USB Debugging trên thiết bị:
   - Settings > Developer Options > USB Debugging
3. Chạy: `adb devices` để xác minh
4. Chấp nhận RSA key dialog trên thiết bị (nếu xuất hiện)

### Lỗi: "Appium server failed to start"

**Giải pháp:**

```bash
# Cài đặt lại Appium
npm install -g appium

# Cài đặt Appium drivers
appium driver install uiautomator2

# Chạy Appium server thủ công
appium
```

### Lỗi: Npm proxy issues (E407)

**Giải pháp:**

```bash
# Xóa cấu hình proxy
npm config rm proxy
npm config rm https-proxy

# Xác minh
npm ping

# Nếu cần proxy, cài đặt proxy đã xác thực
npm config set proxy http://username:password@proxy-server:port
```

## 📚 Tài Liệu Tham Khảo

- [WebdriverIO Documentation](https://webdriver.io/)
- [Appium Documentation](https://appium.io/)
- [Android Studio Setup](https://developer.android.com/studio)
- [Mocha Testing Framework](https://mochajs.org/)
- [Page Object Model Pattern](https://webdriver.io/docs/pageobjects/)

## 💡 Gợi Ý Hay Dùng

### Chạy Test Trong Appium Inspector

1. Mở [Appium Inspector](https://github.com/appium/appium-inspector/releases)
2. Điền thông tin Desired Capabilities
3. Click **Start Session** để bắt đầu inspect elements
4. Sử dụng các element tìm được trong test scripts

### Tạo Test Mới

1. Tạo page object trong `src/pages/`
2. Tạo test file trong `src/tests/`
3. Chạy test: `npm run wdio -- --spec ./src/tests/your-test.spec.ts`

### Debugging

```typescript
// Thêm pause point trong test
await browser.pause(5000); // Dừng 5 giây

// Hoặc sử dụng debugger
debugger;
```

---

**Cần hỗ trợ?** Kiểm tra file `setup-env.ps1` để cài đặt tự động hoặc tham khảo phần "Khắc Phục Sự Cố" ở trên.
