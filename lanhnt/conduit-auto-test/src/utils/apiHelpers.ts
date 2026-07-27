import { APIRequestContext } from "@playwright/test";
import { ConfigValue } from "./constants";
import * as fs from 'fs';
import * as path from 'path';
import { ArticleDataType } from "./type";

export const getToken = async (request: APIRequestContext) => {
    const response = await request.post(
        "https://conduit-api.bondaracademy.com/api/users/login",
        {
            data: { user: { email: ConfigValue.USER_EMAIL, password: ConfigValue.USER_PASSWORD } },
        },
    );
    const responseBody = await response.json();

    const authDirPath = path.join(__dirname, '..', '.auth');
    fs.mkdirSync(authDirPath, { recursive: true });

    const filePath = path.join(authDirPath, 'user.json');
    fs.writeFileSync(filePath, JSON.stringify(responseBody));

    return responseBody.user.token;
};

export const createArticleByAPI = async (request: APIRequestContext, articleData: ArticleDataType) => {
    const response = await request.post(
        "https://conduit-api.bondaracademy.com/api/articles/",
        { data: { article: articleData } },
    );

    return await response.json();
};

export const deleteArticleByAPI = async (request: APIRequestContext, slug: string) => {
    const response = await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${slug}`);
    if (response.status() === 204) {
        return null;
    }

    return await response.json();
};
