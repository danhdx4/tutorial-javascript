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