import { test, expect } from '@playwright/test';

test('test verify basic Form and Submit', async ({ page }) => {

  // đi tới link
  await page.goto("http://localhost:4200/");

  // click forms trên menu
  await page.getByText("Forms").click();

  // click form layout
  await page.getByText("Form Layouts").click();

  // xác định basic form
  const basicform = page.locator('nb-card').filter({ hasText: 'basic form' });
  const fieldemail = basicform.getByRole('textbox', {
    name: 'Email',
  });
  const fieldpassword = basicform.locator('input[type="password"]');
  const submitButton = basicform.getByRole('button', {
    name: 'Submit',
  });
  //********Verify ***********
  // Placeholder Email
  await expect(fieldemail).toHaveAttribute('placeholder', 'Email');

  // Placeholder Password
  await expect(fieldpassword).toHaveAttribute('placeholder', 'Password');
  // Verify màu của nút Submit
  await expect(submitButton).toHaveCSS(
    'background-color',
    'rgb(255, 61, 113)'
  );

  //  Nhập Email và Password
  await fieldemail.fill('tienptt1998@gmail.com');
  await fieldpassword.fill('123456');

  // Verify dữ liệu đã nhập
  await expect(fieldemail).toHaveValue('tienptt1998@gmail.com');
  await expect(fieldpassword).toHaveValue('123456');

  // Hoặc dùng extracting values:
  // const emailValue = await fieldemail.inputValue();
  // expect(emailValue).toEqual('tienptt1998@gmail.com');

  // const passwordValue = await fieldemail.inputValue();
  // expect(passwordValue).toEqual('123456');


  // 7. Click Submit
  await submitButton.click();

});
/**
 * Lanh note: Bài của em đang bị 2 function test lồng nhau, nên chạy sẽ bị fail.
 * Em bỏ 1 function đi nha
 */