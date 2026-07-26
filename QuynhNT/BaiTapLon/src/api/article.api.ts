import { APIRequestContext, expect } from "@playwright/test";
import { account } from "../data/account.data";
import { PageUrl } from "../utils/constants";
//đăng nhập thông qua API và lấy JWT Token. Token này thường được dùng để gọi các API yêu cầu xác thực, ví dụ như xóa bài viết sau khi test.
export async function getToken(request: APIRequestContext) {
  const response = await request.post(
    "https://conduit-api.bondaracademy.com/api/users/login",
    {
      data: {
        user: account,
      },
    },
  );
  const body = await response.json();
  return body.user.token;
}

// tạo bài viết
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
// xóa bài viết
export async function deleteArticle(request: APIRequestContext, slug: string) {
  if (!slug) return; // nếu !slug thì return luôn không gọi delete API nữa
  const token = await getToken(request);
  const response = await request.delete(
    `${PageUrl.BASE_API}/articles/${slug}`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    },
  );
  expect(response.ok()).toBeTruthy(); //Verify Delete
}
