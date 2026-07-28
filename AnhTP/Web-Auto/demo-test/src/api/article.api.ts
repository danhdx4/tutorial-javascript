import { APIRequestContext, expect } from "@playwright/test";
import { account } from "../data/account.data";
import { PageUrl } from "../utils/constants";

// Lấy token thông qua API
export async function getToken(request: APIRequestContext) {
  const response = await request.post(
    "https://conduit-api.bondaracademy.com/api/users/login",
    {
      data: {
        user: account,
      },
    },
  );
  if (!response.ok()) {
    const errorText = await response.text();
    throw new Error(`Login API failed: ${response.status()} - ${errorText}`);
  }

  const body = await response.json();
  if (!body?.user?.token) {
    throw new Error("Login API succeeded but token was not found in response");
  }
  return body.user.token;
}

// Tạo bài viết thông qua API
export async function createArticle(
  request: APIRequestContext,
  articleData: {
    title: string;
    description: string;
    body: string;
    tag: string;
  },
) {
  const token = await getToken(request);
  const response = await request.post(`${PageUrl.BASE_API}/articles`, {
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {
      article: articleData,
    },
  });
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  return body.article;
}

// Xóa bài viết thông qua API
export async function deleteArticle(request: APIRequestContext, slug: string) {
  if (!slug) return; // nếu slug rỗng thì không thực hiện xóa, slug là tham số bắt buộc để xác định bài viết cần xóa
  const token = await getToken(request);
  const response = await request.delete(
    `${PageUrl.BASE_API}/articles/${slug}`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    },
  );
  expect(response.ok()).toBeTruthy();
}
