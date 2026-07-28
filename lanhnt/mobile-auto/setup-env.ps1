# ============================================================================
# Mobile-Auto Environment Setup Script (PowerShell)
# Hướng dẫn cài đặt biến môi trường cho chạy automation tests trên Android
# ============================================================================

# Cấu hình để theo dõi trạng thái setup
$setupComplete = $true
$missingSteps = @()

Write-Host ""
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "     Mobile-Auto Environment Setup             " -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host ""

# ============================================================================
# BƯỚC 1: KIỂM TRA VÀ CẬP NHẬT JAVA_HOME
# ============================================================================

Write-Host "1. JAVA_HOME Setup:" -ForegroundColor Cyan
Write-Host "---" -ForegroundColor Gray

if ($env:JAVA_HOME) {
    Write-Host "[OK] JAVA_HOME đã được cấu hình: $env:JAVA_HOME" -ForegroundColor Green
} else {
    # Cố gắng tự động phát hiện JDK từ lệnh java
    $detectedJdk = $null

    try {
        $javaPath = (Get-Command java -ErrorAction SilentlyContinue).Source
        if ($javaPath) {
            # Trích xuất JAVA_HOME từ đường dẫn java.exe (loại bỏ \bin\java.exe)
            $detectedJdk = Split-Path (Split-Path $javaPath -Parent) -Parent
        }
    } catch {}

    # Nếu không tìm thấy từ lệnh java, tìm ở các vị trí thông thường
    if (-not $detectedJdk) {
        $jdkPaths = @(
            "$env:ProgramFiles\Eclipse Foundation\jdk-*",
            "$env:ProgramFiles\Java\jdk-*",
            "$env:ProgramFiles\OpenJDK\jdk-*",
            "${env:ProgramFiles(x86)}\Java\jdk-*"
        )

        foreach ($pattern in $jdkPaths) {
            $found = Get-Item $pattern -ErrorAction SilentlyContinue | Sort-Object -Descending | Select-Object -First 1
            if ($found) {
                $detectedJdk = $found.FullName
                break
            }
        }
    }

    if ($detectedJdk) {
        $env:JAVA_HOME = $detectedJdk
        Write-Host "[OK] JAVA_HOME tự động phát hiện cho phiên hiện tại: $env:JAVA_HOME" -ForegroundColor Yellow
        Write-Host "   Lưu ý: Đây là tạm thời. Để cấu hình vĩnh viễn:" -ForegroundColor Gray
        Write-Host "   Chạy với quyền Admin:" -ForegroundColor Gray
        Write-Host "   [Environment]::SetEnvironmentVariable('JAVA_HOME', '$detectedJdk', 'User')" -ForegroundColor Gray
        
        # Cố gắng cấu hình vĩnh viễn
        try {
            [Environment]::SetEnvironmentVariable("JAVA_HOME", $detectedJdk, "User")
            Write-Host "[OK] JAVA_HOME đã cấu hình vĩnh viễn cho người dùng" -ForegroundColor Green
        } catch {
            Write-Host "[!] Không thể cấu hình vĩnh viễn (cần quyền Admin)" -ForegroundColor Yellow
        }
    } else {
        Write-Host "[ERROR] JAVA_HOME chưa cấu hình và JDK không được tìm thấy" -ForegroundColor Red
        $setupComplete = $false
        $missingSteps += "Cài đặt Java JDK và thêm vào PATH"
        Write-Host "   Yêu cầu: Cấu hình JAVA_HOME đến đường dẫn cài đặt JDK của bạn" -ForegroundColor Yellow
        Write-Host "   Ví dụ: C:\Program Files\Java\jdk-21" -ForegroundColor Gray
    }
}

Write-Host ""

# ============================================================================
# BƯỚC 2: KIỂM TRA VÀ CẬP NHẬT ANDROID_HOME
# ============================================================================

Write-Host "2. ANDROID_HOME Setup:" -ForegroundColor Cyan
Write-Host "---" -ForegroundColor Gray

if ($env:ANDROID_HOME -and $env:ANDROID_SDK_ROOT) {
    Write-Host "[OK] ANDROID_HOME đã được cấu hình: $env:ANDROID_HOME" -ForegroundColor Green
    Write-Host "[OK] ANDROID_SDK_ROOT đã được cấu hình: $env:ANDROID_SDK_ROOT" -ForegroundColor Green
} else {
    # Cố gắng tự động phát hiện từ các vị trí phổ biến
    $androidPaths = @(
        "$env:LOCALAPPDATA\Android\Sdk",           # Người dùng (phổ biến nhất)
        "$env:ProgramData\Android\Sdk",             # Toàn hệ thống
        "C:\Android\Sdk",                           # Vị trí tùy chỉnh
        "$env:SystemDrive\Android\Sdk"              # Gốc ổ đĩa hệ thống
    )

    $detectedAndroid = $null
    foreach ($path in $androidPaths) {
        if (Test-Path $path) {
            $detectedAndroid = $path
            break
        }
    }

    if ($detectedAndroid) {
        # Cấu hình vĩnh viễn cho người dùng (không cần admin)
        try {
            [Environment]::SetEnvironmentVariable('ANDROID_HOME', $detectedAndroid, 'User')
            [Environment]::SetEnvironmentVariable('ANDROID_SDK_ROOT', $detectedAndroid, 'User')
            Write-Host "[OK] ANDROID_HOME và ANDROID_SDK_ROOT cấu hình vĩnh viễn: $detectedAndroid" -ForegroundColor Green
        } catch {
            Write-Host "[!] Không thể cấu hình vĩnh viễn, chỉ cấu hình cho phiên hiện tại" -ForegroundColor Yellow
        }
        
        # Cấu hình cho phiên hiện tại
        $env:ANDROID_HOME = $detectedAndroid
        $env:ANDROID_SDK_ROOT = $detectedAndroid
        Write-Host "   Những biến này hiện có sẵn toàn hệ thống (khởi động lại terminal để áp dụng)" -ForegroundColor Gray
    } else {
        Write-Host "[ERROR] ANDROID_HOME/ANDROID_SDK_ROOT chưa cấu hình và SDK không được tìm thấy" -ForegroundColor Red
        $setupComplete = $false
        $missingSteps += "Cài đặt ANDROID_HOME và ANDROID_SDK_ROOT"
        Write-Host "   Yêu cầu: Cấu hình ANDROID_HOME và ANDROID_SDK_ROOT đến đường dẫn Android SDK" -ForegroundColor Yellow
        Write-Host "   Các vị trí phổ biến:" -ForegroundColor Gray
        Write-Host "   - $env:LOCALAPPDATA\Android\Sdk (người dùng)" -ForegroundColor Gray
        Write-Host "   - $env:ProgramData\Android\Sdk (toàn hệ thống)" -ForegroundColor Gray
    }
}

Write-Host ""

# ============================================================================
# BƯỚC 3: CẬP NHẬT PATH CHO PHIÊN HIỆN TẠI
# ============================================================================

Write-Host "3. Path Configuration:" -ForegroundColor Cyan
Write-Host "---" -ForegroundColor Gray

if ($env:JAVA_HOME -and $env:ANDROID_HOME) {
    $env:Path = "$env:JAVA_HOME\bin;$env:ANDROID_HOME\platform-tools;$env:ANDROID_HOME\tools;$env:ANDROID_HOME\tools\bin;$env:Path"
    Write-Host "[OK] PATH đã cập nhật cho phiên hiện tại" -ForegroundColor Green
    Write-Host "   JAVA_HOME\bin: $env:JAVA_HOME\bin" -ForegroundColor Gray
    Write-Host "   ANDROID_HOME\platform-tools: $env:ANDROID_HOME\platform-tools" -ForegroundColor Gray
} else {
    Write-Host "[ERROR] Không thể cập nhật PATH (JAVA_HOME hoặc ANDROID_HOME chưa được cấu hình)" -ForegroundColor Red
}

Write-Host ""
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "Device Detection:" -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host ""

# ============================================================================
# BƯỚC 8: PHÁT HIỆN THIẾT BỊ ANDROID
# ============================================================================

Write-Host "[INFO] Phát hiện thiết bị Android kết nối..." -ForegroundColor Gray
$deviceOutput = adb devices
$deviceList = @()
foreach ($line in $deviceOutput) {
    if ($line -match '^\s*(\S+)\s+device\s*$' -and $line -notmatch 'List of devices') {
        $deviceList += $matches[1]
    }
}

if ($deviceList.Count -eq 0) {
    Write-Host "[ERROR] Không có thiết bị nào kết nối" -ForegroundColor Red
    Write-Host "   Yêu cầu: Kết nối thiết bị qua USB và bật Developer Options > USB Debugging" -ForegroundColor Yellow
} else {
    $udid = $deviceList[0]
    Write-Host "[OK] Thiết bị được phát hiện: $udid" -ForegroundColor Green

    # Lấy thông tin thiết bị
    try {
        $deviceName = (adb -s $udid shell "getprop ro.product.model").Trim()
        $manufacturer = (adb -s $udid shell "getprop ro.product.manufacturer").Trim()
        $androidVersion = (adb -s $udid shell "getprop ro.build.version.release").Trim()

        Write-Host "   Nhà sản xuất: $manufacturer" -ForegroundColor Gray
        Write-Host "   Model: $deviceName" -ForegroundColor Gray
        Write-Host "   Android: $androidVersion" -ForegroundColor Gray
        Write-Host "   UDID: $udid" -ForegroundColor Gray
    } catch {
        Write-Host "   [!] Không thể lấy thông tin thiết bị" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "===============================================" -ForegroundColor Cyan

if ($setupComplete) {
    Write-Host "Setup Complete! ✓" -ForegroundColor Green
} else {
    Write-Host "Setup INCOMPLETE! ✗" -ForegroundColor Red
}

Write-Host "===============================================" -ForegroundColor Cyan
Write-Host ""
