<<<<<<< HEAD
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("https://conduit.bondaracademy.com/");

    // login with the credentical
    await page.getByRole('link', { name: ' Sign in ' }).click()
    await page.getByPlaceholder('Email').fill('lanh.zensho@test.com')
    await page.getByPlaceholder('Password').fill('123456789')
    await page.getByRole('button', { name: ' Sign in ' }).click()
});

test('Should be create a articel successfully', async ({ page, request }) => {
    // todo
    

})

test('Should delete the article successfully', async ({ page, request }) => {
    // todo
})
=======
import { test as setup } from "@playwright/test";
import * as fs from 'fs';
import * as path from 'path';

setup("Should be create a articel successfully", async ({ page, request }) => {
    // Login by API to get access token
    const response = await request.post(
        "https://conduit-api.bondaracademy.com/api/users/login",
        {
            data: { user: { email: "lanh.zensho@test.com", password: "123456789" } },
        },
    );
    const responseBody = await response.json();
    console.log(responseBody)

    // Write into the auth.json
    // Định nghĩa đường dẫn tới file
    const filePath = path.join(__dirname, '..', '.auth', 'user.json');

    // Ghi đối tượng JSON vào file
    fs.writeFileSync(filePath, JSON.stringify(responseBody));
});
>>>>>>> 94e0fe18162e7fc222a412cee829587f5d81e907
