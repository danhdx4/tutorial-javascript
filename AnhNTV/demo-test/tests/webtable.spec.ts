// import { test, expect } from '@playwright/test';

// /**
//  * Vào link http://localhost:4200/pages/tables/smart-table
// - Tìm kiếm row có id = 11
// - Thực hiện xoá row này. (Gợi ý dùng dialog confirm)
//  */

// test("web tables - btvn", async ({ page }) => {
//     // Navigate to Smart Table Page
//     await page.goto("http://localhost:4200/pages/tables/smart-table")

//     const targetRowById = page.getByRole('row').filter({ has: page.locator('td').nth(1).getByText('11') })
//     const nextBtn = page.locator('.ng2-smart-page-link.page-link.page-link-next')

//     let found = false
//     while (!found) {
//         console.log('checkly: ', await targetRowById.count())
//         if (await targetRowById.count()) {
//             console.log('I found it!!!!')

//             // Delete row
//             page.on('dialog', async dialog => {
//                 console.log('Check message text: ', dialog.message())
//                 console.log('Check dialog type: ', dialog.type())
//                 await dialog.accept();
//             });

//             await targetRowById.locator('.nb-trash').click()

//             // Verify the target deleted
//             await expect(targetRowById).toBeHidden()
//             break;
//         }
//         await nextBtn.click()
//     }
// });


//BTVN Vào link http://localhost:4200/pages/tables/smart-table

// Tìm kiếm row có id = 11
// Thực hiện xoá row này. (Gợi ý dùng dialog confirm)


import { test, expect } from '@playwright/test';

test('Xóa cột id=11', async ({ page }) => {
  await page.goto('http://localhost:4200/pages/tables/smart-table');
  await page.locator('.ng2-smart-page-item a.page-link', { hasText: '2' }).click();//di chuyển đến trang 2
  const row = page.locator('table tbody tr').filter({ has: page.locator('td').nth(1).filter({ hasText: "11" }) }); //tìm đến dòng có id =11
  await expect(row).toHaveCount(1);
  await row.locator('i.nb-trash').click(); //click icon Xóa
  page.once('dialog', dialog => {
    console.log('Popup:', dialog.message('Are you sure you want to delete?'));
    //Lanh note: hàm dialog.message() không cần tham số đầu vào nên bỏ đi e nhé
    dialog.accept(); // bắt popup TRƯỚC khi click icon xoá
  });
  await row.locator('i.nb-trash').click(); //xác nhận popup 
});

