/// <reference types="node" />
import { APIRequestContext } from "@playwright/test";
import * as fs from 'fs';
import * as path from 'path';

export const getToken = async (request: APIRequestContext) => {
    const response = await request.post(
        "https://conduit-api.bondaracademy.com/api/users/login",
        {
            data: { user: { email: "thuy@test.com", password: "12345678" } },
        },
    );
    const responseBody = await response.json();

    // Write into the auth.json
    // Định nghĩa đường dẫn tới file
    const filePath = path.join(__dirname, '..', '.auth', 'user.json');

    // Ghi đối tượng JSON vào file
    fs.writeFileSync(filePath, JSON.stringify(responseBody));

    return responseBody.user.token
}