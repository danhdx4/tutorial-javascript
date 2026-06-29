/**## Bài tập về nhà

Viết bài test verify Basic form với các nội dung như sau:

1. Đi tới link http://localhost:4200/
2. Click vào btn Forms trên menu bar
3. Click vào bnt Form Layouts trên menu bar
4. Verify Basic form với các nội dung

- Trường Email có placeholder là 'Email'
- Trường Password có placeholder là 'Password'
- Button Submit có mã màu là rgb(255,61,113)

5. Tiến hành filter thông tin Email và Password
6. Verify text hiển thị trong trường email, password như thông tin đã nhập
7. Click vào btn Submit */
import { test, expect } from '@playwright/test';

test('Verify Basic form on Form Layouts page', async ({ page }) => {
  await page.goto('/');

  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();

  const basicFormCard = page.locator('nb-card', { hasText: 'Basic form' });
  const emailInput = basicFormCard.getByPlaceholder('Email');
  const passwordInput = basicFormCard.getByPlaceholder('Password');
  const submitButton = basicFormCard.getByRole('button', { name: 'Submit' });

  await expect(emailInput).toHaveAttribute('placeholder', 'Email');
  await expect(passwordInput).toHaveAttribute('placeholder', 'Password');
  await expect(submitButton).toHaveCSS('background-color', 'rgb(255, 61, 113)');

  const expectedEmail = 'test@example.com';
  const expectedPassword = 'Password123';

  await emailInput.fill(expectedEmail);
  await passwordInput.fill(expectedPassword);

  await expect(emailInput).toHaveValue(expectedEmail);
  await expect(passwordInput).toHaveValue(expectedPassword);

  await submitButton.click();
});
/**## Bài tập về nhà

Thực hiện các step và các bài kiểm tra sau:

1. Đi tới link: http://localhost:4200/auth/login
2. Lên kịch bản test verify cho các case màn hình Login. Gợi ý:

- Trạng thái khởi tạo: email, password có placeholder, checkbox ko được chheck, btn login disable
- Nhập đủ email, password hợp lệ
  => Verify thông tin phản ánh đúng, btn Login được enable
- Nhập thiếu email hoặc password
  => Verify hiển thị msg yêu cầu nhập, btn Login disable
- Nhập email sai định dạng
  => Verify hiển thị msg thông báo email không hợp lệ, btn Login disable
- Nhập password không hợp lệ
  => Verìy hiển thị msg thông báo password không hợp lệ, btn Login disable */

  /**## Bài tập về nhà

1. Vào link 'http://localhost:4200/pages/forms/datepicker'
2. Chọn form input range-datepicker
3. Chọn khoảng thời gian từ ngày hiện tại tới cách đó 5 ngày. */

test('Select range datepicker from today to 5 days later', async ({ page }) => {
  await page.goto('http://localhost:4200/pages/forms/datepicker');

  // Tính toán ngày động
  const today = new Date();
  const endDate = new Date();
  endDate.setDate(today.getDate() + 5);

  const startDay = today.getDate().toString();
  const endDay = endDate.getDate().toString();
  const startMonthShort = today.toLocaleString('en-US', { month: 'short' });
  const endMonthShort = endDate.toLocaleString('en-US', { month: 'short' });
  const startYear = today.getFullYear();
  const endYear = endDate.getFullYear();

  const expectedStartDate = `${startMonthShort} ${startDay}, ${startYear}`;
  const expectedEndDate = `${endMonthShort} ${endDay}, ${endYear}`;
  const expectedRangeValue = `${expectedStartDate} - ${expectedEndDate}`;

  console.log('Expected range:', expectedRangeValue);

  // Mở range datepicker
  const rangePickerInput = page.getByPlaceholder('Range Picker');
  await rangePickerInput.click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(300);

  // Click ngày bắt đầu (hôm nay)
  const startDateCell = page
    .locator('[class="day-cell ng-star-inserted"]')
    .filter({ hasText: new RegExp(`^${startDay}$`) });
  await startDateCell.first().click();
  await page.waitForTimeout(500);

  // Click ngày kết thúc (hôm nay + 5)
  // Nếu month khác nhau, click next-month để navigate
  if (startMonthShort !== endMonthShort || startYear !== endYear) {
    const nextButton = page.locator('button.next-month').first();
    await nextButton.click();
    await page.waitForTimeout(300);
  }

  const endDateCell = page
    .locator('[class="day-cell ng-star-inserted"]')
    .filter({ hasText: new RegExp(`^${endDay}$`) });
  await endDateCell.first().click();
  await page.waitForTimeout(500);

  // Verify giá trị input
  await expect(rangePickerInput).toHaveValue(expectedRangeValue);
});