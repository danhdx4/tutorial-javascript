# MOBILE AUTOMATION TESTING SETUP GUIDE

## Android Automation Testing với Appium 3.x

### Công nghệ sử dụng

- Java JDK 25
- Android Studio
- Android SDK API 35
- Android Emulator
- Node.js LTS
- Appium 3.x
- Appium UiAutomator2 Driver
- Appium Inspector

---

# PHẦN 1 – HƯỚNG DẪN CÀI ĐẶT TRÊN WINDOWS

## 1. Yêu cầu cấu hình

- Windows 10 hoặc Windows 11 (64-bit)
- RAM tối thiểu 8GB
- Khuyến nghị 16GB
- 20GB dung lượng trống
- CPU hỗ trợ Virtualization

---

## 2. Cài đặt Java JDK 25

### Download

Truy cập:

https://adoptium.net

Chọn:

- Operating System: Windows
- Package Type: JDK
- Version: 25 (LTS)

### Cài đặt

- Chạy file .msi
- Next → Next → Install → Finish

### Kiểm tra

Mở Command Prompt:

```bash
java -version
```

Kết quả:

```bash
openjdk version "25.x.x"
```

---

## 3. Cài đặt Android Studio

### Download

https://developer.android.com/studio

### Cài đặt

- Chạy file cài đặt
- Chọn Standard Installation
- Next → Install → Finish

---

## 4. Cài đặt Android SDK API 35

Mở Android Studio

More Actions

→ SDK Manager

### SDK Platforms

Chọn:

```text
Android 15 (API Level 35)
```

### SDK Tools

Đảm bảo các thành phần sau được chọn:

```text
Android SDK Build-Tools
Android SDK Command-line Tools
Android SDK Platform-Tools
Android Emulator
```

Nhấn Apply.

---

## 5. Cấu hình Android SDK Environment Variables

### Bước 1: Xác định SDK Path

Android Studio

Settings

→ Android SDK

Ví dụ:

```text
C:\Users\<username>\AppData\Local\Android\Sdk
```

---

### Bước 2: Tạo biến ANDROID_HOME

System Properties

→ Advanced

→ Environment Variables

Tạo mới:

```text
Variable Name:
ANDROID_HOME
```

```text
Variable Value:
C:\Users\<username>\AppData\Local\Android\Sdk
```

---

### Bước 3: Cập nhật PATH

Thêm:

```text
%ANDROID_HOME%\platform-tools

%ANDROID_HOME%\emulator

%ANDROID_HOME%\cmdline-tools\latest\bin
```

---

### Kiểm tra

Mở CMD mới:

```bash
adb version
```

---

## 6. Tạo Android Emulator

Android Studio

Tools

→ Device Manager

→ Create Device

Khuyến nghị:

```text
Pixel 8
```

System Image:

```text
Android 15 (API 35)
```

Khởi động Emulator.

Kiểm tra:

```bash
adb devices
```

Kết quả:

```bash
emulator-5554 device
```

---

## 7. Cài đặt Node.js

Download:

https://nodejs.org

Chọn:

```text
Node.js LTS
```

Cài đặt mặc định.

Kiểm tra:

```bash
node -v

npm -v
```

---

## 8. Cài đặt Appium 3.x

Mở CMD:

```bash
npm install -g appium
```

Kiểm tra:

```bash
appium -v
```

---

## 9. Cài đặt UiAutomator2 Driver

```bash
appium driver install uiautomator2
```

Kiểm tra:

```bash
appium driver list --installed
```

---

## 10. Khởi động Appium Server

```bash
appium
```

Kết quả:

```text
Appium REST http interface listener started
```

---

## 11. Cài đặt Appium Inspector

Download:

https://github.com/appium/appium-inspector/releases

Tải file Windows (.exe)

Cài đặt theo mặc định.

---

## 12. Kiểm tra môi trường

```bash
java -version

node -v

npm -v

adb version

adb devices

appium -v

appium driver list --installed
```

Nếu tất cả lệnh chạy thành công, môi trường đã sẵn sàng.

---

# PHẦN 2 – HƯỚNG DẪN CÀI ĐẶT TRÊN macOS

## 1. Yêu cầu cấu hình

- macOS 13+
- Intel hoặc Apple Silicon
- RAM tối thiểu 8GB
- Khuyến nghị 16GB
- 20GB dung lượng trống

---

## 2. Cài đặt Java JDK 25

### Cài Homebrew (nếu chưa có)

Mở Terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

---

### Cài JDK 25

```bash
brew install openjdk@25
```

---

### Kiểm tra

```bash
java -version
```

Kết quả:

```bash
openjdk version "25.x.x"
```

---

## 3. Cài đặt Android Studio

Download:

https://developer.android.com/studio

### Cài đặt

- Mở file .dmg
- Kéo Android Studio vào Applications
- Mở Android Studio

---

## 4. Cài đặt Android SDK API 35

Android Studio

More Actions

→ SDK Manager

### SDK Platforms

Chọn:

```text
Android 15 (API 35)
```

### SDK Tools

Chọn:

```text
Android SDK Build-Tools
Android SDK Command-line Tools
Android SDK Platform-Tools
Android Emulator
```

Nhấn Apply.

---

## 5. Cấu hình Android SDK Environment Variables

Mở Terminal:

```bash
nano ~/.zshrc
```

Thêm:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk

export PATH=$PATH:$ANDROID_HOME/platform-tools

export PATH=$PATH:$ANDROID_HOME/emulator

export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
```

Lưu file.

Reload:

```bash
source ~/.zshrc
```

Kiểm tra:

```bash
adb version
```

---

## 6. Tạo Android Emulator

Android Studio

Tools

→ Device Manager

→ Create Device

Khuyến nghị:

```text
Pixel 8
```

System Image:

```text
Android 15 (API 35)
```

Khởi động Emulator.

Kiểm tra:

```bash
adb devices
```

---

## 7. Cài đặt Node.js

### Cài bằng Homebrew

```bash
brew install node
```

---

### Kiểm tra

```bash
node -v

npm -v
```

---

## 8. Cài đặt Appium 3.x

```bash
npm install -g appium
```

---

### Kiểm tra

```bash
appium -v
```

---

## 9. Cài đặt UiAutomator2 Driver

```bash
appium driver install uiautomator2
```

---

### Kiểm tra

```bash
appium driver list --installed
```

---

## 10. Khởi động Appium Server

```bash
appium
```

Kết quả:

```text
Appium REST http interface listener started
```

---

## 11. Cài đặt Appium Inspector

Download:

https://github.com/appium/appium-inspector/releases

Tải phiên bản dành cho macOS.

Cài đặt theo hướng dẫn của hệ điều hành.

---

## 12. Kiểm tra môi trường

```bash
java -version

node -v

npm -v

adb version

adb devices

appium -v

appium driver list --installed
```

Nếu tất cả lệnh chạy thành công, môi trường đã sẵn sàng.

---

# CHECKLIST HOÀN THÀNH

□ Java JDK 25

□ Android Studio

□ Android SDK API 35

□ Android Emulator

□ Node.js LTS

□ Appium 3.x

□ UiAutomator2 Driver

□ Appium Inspector

□ Emulator khởi động thành công

□ adb devices nhận thiết bị

□ Appium Server khởi động thành công
