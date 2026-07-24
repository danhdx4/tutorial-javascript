export const APP_URL = "https://conduit.bondaracademy.com";
export const API_URL = "https://conduit-api.bondaracademy.com/api";

export const AUTH = {
  email: process.env.CONDUIT_EMAIL ?? "lanh.zensho@test.com",
  password: process.env.CONDUIT_PASSWORD ?? "123456789",
};

export type ArticleInput = {
  title: string;
  description: string;
  body: string;
  tagList: string[];
};

export function buildArticleData(prefix: string): ArticleInput {
  const uniqueId = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  return {
    title: `${prefix} title ${uniqueId}`,
    description: `${prefix} description ${uniqueId}`,
    body: `${prefix} body ${uniqueId}`,
    tagList: ["playwright", "buoi15"],
  };
}
