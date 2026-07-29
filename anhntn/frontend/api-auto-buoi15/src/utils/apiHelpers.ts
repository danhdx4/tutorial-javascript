import { APIRequestContext, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { TEST_USER } from '../test-data/user.data';
import { API_URL } from './constants';

export type ArticlePayload = {
    title: string;
    description: string;
    body: string;
    tagList?: string[];
};

export const getToken = async (request: APIRequestContext): Promise<string> => {
    const response = await request.post(
        `${API_URL}/users/login`,
        {
            data: {
                user: {
                    email: TEST_USER.email,
                    password: TEST_USER.password,
                },
            },
        },
    );

    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();

    // Write into auth file giống format bên api-auto
    const filePath = path.join(__dirname, '..', '.auth', 'user.json');
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(responseBody));

    return responseBody.user.token as string;
};

export const isApiReachable = async (request: APIRequestContext): Promise<boolean> => {
    try {
        const response = await request.get(`${API_URL}/tags`);
        return response.ok();
    } catch {
        return false;
    }
};

export const createArticleByApi = async (
    request: APIRequestContext,
    token: string,
    article: ArticlePayload,
): Promise<{ slug: string }> => {
    const response = await request.post(`${API_URL}/articles`, {
        headers: {
            Authorization: `Token ${token}`,
        },
        data: {
            article,
        },
    });

    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    return { slug: responseBody.article.slug as string };
};

export const deleteArticleByApi = async (
    request: APIRequestContext,
    token: string,
    slug: string,
): Promise<void> => {
    const response = await request.delete(`${API_URL}/articles/${slug}`, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });

    expect(response.status()).toBe(204);
};