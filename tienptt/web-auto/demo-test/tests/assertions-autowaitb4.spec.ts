import { test, expect } from '@playwright/test';

test ('test verify basic Form and Submit', async({page})=>{
 
  // đi tới link
  await page.goto("http://localhost:4200/");

  // click forms trên menu
  await page.getByText("Forms").click();

  // click form layout
    await page.getByText("Form Layouts").click();
  
    // xác định basic form
    const basicform= page.locator('nb-card').filter({ hasText: 'basic form'});
const fieldemail = basicform.getByRole('textbox', { name: 'Email',
  });
  const fieldpassword = basicform.locator('input[type="password"]');
  const submitButton = basicform.getByRole('button', { name: 'Submit',
  });
//********8Verify ***********
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
//BTVN BÀI 6


test('BTVN 6 - Tìm và xóa row có ID = 11', async ({ page }) => {
  await page.goto('http://localhost:4200/pages/tables/smart-table');
test('BTVN 6 - Tìm và xóa row có ID = 11', async ({ page }) => {

  // Mở trang Smart Table
  await page.goto('http://localhost:4200/pages/tables/smart-table');

  // Lấy nút ">" để chuyển sang trang tiếp theo
  const nextBtn = page.locator('.ng2-smart-pagination-nav').getByText('>');

  // Biến đánh dấu đã tìm thấy hay chưa
  let found = false;

  // Lặp cho đến khi tìm thấy ID = 11
  while (!found) {

    // Tìm dòng có cột ID = 11 trên trang hiện tại
    const targetRowById = page.getByRole('row').filter({has: page.locator('td').nth(1).filter({ hasText: '11' }),
    });

    // In ra số dòng tìm được (để debug)
    console.log('Số dòng tìm thấy:', await targetRowById.count());

    // Nếu tìm thấy row có ID = 11
    if (await targetRowById.count() > 0) {
      found = true;

      // Đăng ký xử lý hộp thoại xác nhận xóa (Confirm)
      page.once('dialog', async (dialog) => {
        // Nhấn nút OK trên popup
        await dialog.accept();
      });

      // Click vào icon thùng rác để xóa
      await targetRowById.locator('.nb-trash').click();

      // Thoát khỏi vòng lặp vì đã xóa xong
      break;

    } else {
      // Nếu chưa tìm thấy thì chuyển sang trang tiếp theo
      await nextBtn.click();
    }
  }
});
});
