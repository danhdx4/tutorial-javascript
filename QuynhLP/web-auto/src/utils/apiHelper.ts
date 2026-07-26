import { APIRequestContext } from "@playwright/test";

const API_BASE = "https://conduit-api.bondaracademy.com/api";

// Lấy token để gọi API
export async function getToken(request: APIRequestContext) {
  const response = await request.post(`${API_BASE}/users/login`, {
    data: {
      user: { email: "lanh.zensho@test.com", password: "123456789" },
    },
  });

  const body = await response.json();
  return body.user.token;
}

// Tạo bài bằng API
export async function createArticleByApi(request: APIRequestContext, token: string, title: string) {
  const response = await request.post(`${API_BASE}/articles`, {
    data: {
      article: {
        title,
        description: "demo",
        body: "demo",
        tagList: [],
      },
    },
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  const body = await response.json();
  return body.article.slug;
}

// Xóa bài bằng API
export async function deleteArticleByApi(request: APIRequestContext, token: string, title: string) {
  const listResponse = await request.get(`${API_BASE}/articles?limit=10&offset=0`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  const body = await listResponse.json();
  const article = body.articles.find((item: any) => item.title === title);

  if (!article) {
    return null;
  }

  return request.delete(`${API_BASE}/articles/${article.slug}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
}
