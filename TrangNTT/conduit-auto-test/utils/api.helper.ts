import { request } from '@playwright/test';
import { API_URL, USER } from './constants';
import { ArticleData } from '../pages/editor.page';

export interface LoginResponse {
  user?: {
    token?: string;
  };
}

export interface RegisterUserData {
  username: string;
  email: string;
  password: string;
}

export async function getToken(email = USER.email, password = USER.password): Promise<string> {
  const apiContext = await request.newContext();

  const response = await apiContext.post(`${API_URL}/users/login`, {
    data: {
      user: {
        email,
        password,
      },
    },
  });

  const body = await response.json() as LoginResponse;

  if (!body.user?.token) {
    throw new Error('Login failed: token not returned');
  }

  return body.user.token;
}

export async function registerUser(user: RegisterUserData) {
  const apiContext = await request.newContext();

  const response = await apiContext.post(`${API_URL}/users`, {
    data: {
      user: {
        username: user.username,
        email: user.email,
        password: user.password,
      },
    },
  });

  return await response.json();
}

export async function createArticle(article: ArticleData) {
  const token = await getToken();

  const apiContext = await request.newContext();

  const response = await apiContext.post(`${API_URL}/articles`, {
    headers: {
      Authorization: `Token ${token}`,
    },

    data: {
      article: {
        title: article.title,
        description: article.description,
        body: article.body,
        tagList: [article.tag],
      },
    },
  });

  return await response.json();
}

export async function deleteArticle(slug: string, token?: string): Promise<void> {
  const authToken = token ?? await getToken();

  const apiContext = await request.newContext();

  await apiContext.delete(`${API_URL}/articles/${slug}`, {
    headers: {
      Authorization: `Token ${authToken}`,
    },
  });
}