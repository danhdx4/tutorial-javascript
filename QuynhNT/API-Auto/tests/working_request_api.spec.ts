import { test, expect } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto("https://conduit.bondaracademy.com/");
  await page.getByRole("link", { name: "Sign in" }).click();
  await page.getByPlaceholder("Email").fill("quynh2@gmail.com");
  await page.getByPlaceholder("Password").fill("12345678");
  await page.getByRole("button", { name: "Sign in" }).click();
});
test("create new article", async ({ page, request }) => {
  await page.getByRole("link", { name: "New Article" }).click();
  await page.getByPlaceholder("Article Title").fill("hahahaha");
  await page
    .getByPlaceholder("What's this article about?")
    .fill("Đây là bài viết của Quỳnh");
  await page
    .getByPlaceholder("Write your article (in markdown)")
    .fill("Đây là bài viết của Quỳnh");
  await page.getByPlaceholder("Enter tags").fill("hahahaha");
  await page.getByRole("button", { name: "Publish Article" }).click();
  //chờ API trả về dữ liệu
  const waitForRespon = await page.waitForResponse(
    "https://conduit-api.bondaracademy.com/api/articles/",
  );
  //chuyển data thành json
  const createArticle = await waitForRespon.json();
  const slug = createArticle.article.slug;
  //mở home xem bài biết vừa tạo đã có ở home hay chưa
  await page.goto("https://conduit.bondaracademy.com/");
  //tìm phần từ
  //await expect(page.locator(".preview-link h1")).toHaveText("hahahaha");
  await expect(
    page.locator("app-article-preview h1", { hasText: "hahahaha" }),
  ).toBeVisible();
  await expect(
    page.locator("app-article-preview p", {
      hasText: "Đây là bài viết của Quỳnh",
    }),
  ).toBeVisible();

  //clear data sau khi test xong
  //lấy access token
  const respon = await request.post(
    "https://conduit-api.bondaracademy.com/api/users/login",
    {
      data: {
        user: {
          email: "quynh2@gmail.com",
          password: "12345678",
        },
      },
    },
  );
  const responBody = await respon.json();
  const accessToken = responBody.user.token;
  //delete article
  const deleteResponse = await request.delete(
    `https://conduit-api.bondaracademy.com/api/articles/${slug}`,
    {
      headers: {
        Authorization: `Token ${accessToken}`,
      },
    },
  );
  expect(deleteResponse.status()).toEqual(204);
});
