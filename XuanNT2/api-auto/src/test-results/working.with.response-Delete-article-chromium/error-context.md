# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: working.with.response.spec.ts >> Delete article
- Location: api-auto\tests\working.with.response.spec.ts:57:5

# Error details

```
SyntaxError: Unexpected token '<', "<html>
<h"... is not valid JSON
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e4]:
    - generic:
      - link "conduit" [ref=e5] [cursor=pointer]:
        - /url: /
      - list [ref=e6]:
        - listitem [ref=e7]:
          - link "Home" [ref=e8] [cursor=pointer]:
            - /url: /
        - listitem [ref=e9]:
          - link "Sign in" [ref=e10] [cursor=pointer]:
            - /url: /login
        - listitem [ref=e11]:
          - link "Sign up" [ref=e12] [cursor=pointer]:
            - /url: /register
  - contentinfo [ref=e13]:
    - generic [ref=e14]:
      - link "conduit" [ref=e15] [cursor=pointer]:
        - /url: /
      - generic [ref=e16]:
        - text: © 2026. An interactive learning project from
        - link "RealWorld OSS Project" [ref=e17] [cursor=pointer]:
          - /url: https://github.com/gothinkster/realworld
        - text: . Code licensed under MIT. Hosted by
        - link "Bondar Academy" [ref=e18] [cursor=pointer]:
          - /url: https://bondaracademy.com
        - text: .
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | import tags from "../test-data/tags.json";
  3   | import article from "../test-data/article.json";
  4   | import { request } from "node:http";
  5   | 
  6   | test.beforeEach(async ({ page }) => {
  7   |   await page.goto("https://conduit.bondaracademy.com/");
  8   | });
  9   | 
  10  | test("has title", async ({ page }) => {
  11  |   await expect(page.locator(".navbar-brand")).toHaveText("conduit");
  12  | });
  13  | 
  14  | test("Mocking API", async ({ page }) => {
  15  |   // chặn yêu cầu API
  16  |   await page.route("**/api/tags", async (router) => {
  17  |     // tạo phản hồi giả
  18  |     await router.fulfill({
  19  |       body: JSON.stringify(tags),
  20  |     });
  21  |   });
  22  | 
  23  |   const tagList = page.locator(".col-md-3");
  24  |   await expect(tagList.getByText("XuanNT Test 1.4")).toBeVisible();
  25  | });
  26  | 
  27  | /** Bai tap ve nha
  28  | Tạo mock cho API get dữ liệu bài viết https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0 với các thông tin như sau:
  29  | - Giả lập chỉ trả về 2 bài viết
  30  | - Sửa các thông tin sau trong bài viết đầu:
  31  |   - title
  32  |   - description
  33  |  */
  34  | 
  35  | test("BTVN", async ({ page }) => {
  36  |   // cắt danh sách, giữ lại 2 bài viết đầu
  37  |   article.articles = article.articles.splice(0, 2);
  38  |   article.articlesCount = 2;
  39  | 
  40  |   // sửa thông tin bài viết đầu
  41  |   article.articles[0].title = "XuanNT title 1.1";
  42  |   article.articles[0].description = "XuanNT description 1.1";
  43  | 
  44  |   // chặn yêu cầu API
  45  |   await page.route("**/api/articles*", async (router) => {
  46  |     // tạo phản hồi giả
  47  |     await router.fulfill({
  48  |       body: JSON.stringify(article),
  49  |     });
  50  |   });
  51  | 
  52  |   //verify the title,description of the article
  53  |   await expect(page.getByText("XuanNT title 1.1")).toBeVisible();
  54  |   await expect(page.getByText("XuanNT description 1.1")).toBeVisible();
  55  | });
  56  | 
  57  | test("Delete article", async ({ page, request }) => {
  58  |   // await page.goto("https://conduit.bondaracademy.com");
  59  |   const response = await request.post(
  60  |     "https://conduit.bondaracademy.com/login",
  61  |     {
  62  |       data: {
  63  |         user: { email: "xuannt2.test@gmail.com", password: "123456789" },
  64  |       },
  65  |     },
  66  |   );
> 67  |   const responseBody = await response.json();
      |                        ^ SyntaxError: Unexpected token '<', "<html>
  68  |   const accessToken = responseBody.user.token;
  69  | 
  70  |   const articleResponse = await request.post(
  71  |     "https://conduit.bondaracademy.com/article/${slug}",
  72  |     {
  73  |       data: {
  74  |         article: {
  75  |           title: "XuanNT Title",
  76  |           description: "This is message",
  77  |         },
  78  |       },
  79  |       headers: {
  80  |         Authorization: `Token ${accessToken}`,
  81  |       },
  82  |     },
  83  |   );
  84  |   expect(responseBody.status().toEqual(201));
  85  | 
  86  |   // await page.goto(
  87  |   //   "https://conduit.bondaracademy.com/article/${responseBody.article.slug}",
  88  |   // );
  89  |   await page
  90  |     .locator(".banner")
  91  |     .getByRole("button", { name: "Delete Article" })
  92  |     .click();
  93  |   await page.waitForResponse(
  94  |     "https://conduit-api.bondaracademy.com/api/articles/*",
  95  |   );
  96  | 
  97  |   // verify the article is not exsiting
  98  |   await page.goto("https://conduit.bondaracademy.com");
  99  |   await expect(
  100 |     page.locator("app-article-page h1", { hasText: "XuanNT Title" }),
  101 |   ).not.toBeVisible();
  102 | });
  103 | 
```