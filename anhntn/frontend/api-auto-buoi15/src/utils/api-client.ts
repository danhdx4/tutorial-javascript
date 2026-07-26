import { APIRequestContext, expect } from "playwright/test";
import { API_URL, TEST_USER } from "./constants";

export type ArticlePayload = {
  title: string;
  description: string;
  body: string;
  tagList?: string[];
};

export async function loginAndGetToken(request: APIRequestContext): Promise<string> {
  const response = await request.post(`${API_URL}/users/login`, {
    data: {
      user: {
        email: TEST_USER.email,
        password: TEST_USER.password,
      },
    },
  });

  expect(response.ok()).toBeTruthy();
  const responseBody = await response.json();
  return responseBody.user.token as string;
}

export async function createArticleByApi(
  request: APIRequestContext,
  token: string,
  article: ArticlePayload,
): Promise<{ slug: string }> {
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
}

export async function deleteArticleByApi(
  request: APIRequestContext,
  token: string,
  slug: string,
): Promise<void> {
  const response = await request.delete(`${API_URL}/articles/${slug}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  expect(response.status()).toBe(204);
}
