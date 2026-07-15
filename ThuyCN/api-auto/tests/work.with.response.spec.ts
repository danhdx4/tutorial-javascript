import { test, expect } from "@playwright/test";
import tags from "../test_data/tags.json";
import articles from '../test_data/articles.json';
import login from '../test_data/login.data.json';

test.beforeEach(async ({ page }) => {
  await page.goto("https://conduit.bondaracademy.com/");
  await page.getByRole('link', { name: ' Sign in ' }).click()
  await page.getByPlaceholder('Email').fill(login[0].email)
  await page.getByPlaceholder('Password').fill(login[0].password)
  await page.getByRole('button', { name: ' Sign in ' }).click()
});


test("has title", async ({ page }) => {
  await expect(page.locator(".navbar-brand")).toHaveText("conduit");
});

test("Mocking API", async ({ page }) => {
  await page.route('**/api/articles*', async (route) => {

    await route.fulfill({
      body: JSON.stringify(articles),
    });
  });

  const firstArticle = page.locator('app-article-preview').first()
  //verify the title of the article
  await expect(firstArticle.locator('h1')).toHaveText('Automation test')
  
  //verify the description of the article
  await expect(firstArticle.locator('p')).toHaveText('Welcome you all to our automation testing class!')
})

test("Create a new article", async ({ page, request }) => {
  await page.route('**/api/articles*', async (route) => {

    await route.fulfill({
      body: JSON.stringify(articles),
    });
  });
  //  Create a new article
  page.getByRole('link', {name: "New Article"}).click();
  const titleField = page.getByPlaceholder('Article Title');
  await titleField.fill("Test6");
  const titleValue = await titleField.inputValue();
  expect(titleValue).toEqual("Test6");
  
  const descriptionField = page.getByPlaceholder("What's this article about?");
  await descriptionField.fill("This is my testing articles");
  const despValue = await descriptionField.inputValue();
  expect(despValue).toEqual("This is my testing articles");

  const bodyField = page.getByPlaceholder("Write your article (in markdown)");
  await bodyField.fill("Playwright Test is an end-to-end test framework for modern web apps.");
  const bodyValue = await bodyField.inputValue();
  expect(bodyValue).toEqual("Playwright Test is an end-to-end test framework for modern web apps.");

  const tagsField = page.getByPlaceholder("Enter tags");
  await tagsField.fill("Playwright");
  const tagsValue = await tagsField.inputValue();
  expect(tagsValue).toEqual("Playwright");

  const btn = page.getByRole('button', {name: 'Publish Article'})
  await btn.click()
  
  const createAritcleResponse = await page.waitForResponse(
    "https://conduit-api.bondaracademy.com/api/articles/",
  );
  const createAritcleResponseBody = await createAritcleResponse.json();
  const slug = createAritcleResponseBody.article.slug;

  // Back to home and verify your article that you just created

  // await page.goto("https://conduit.bondaracademy.com/");
  // await expect(page.locator("app-article-preview").filter({ hasText: "Test3" })).toBeVisible();
  // await expect(page.locator("app-article-preview").filter({ hasText: "This is my testing articles" })).toBeVisible();

  // Tear down: Clean data after testing
  // Get access token by the loginn API
  const response = await request.post(
    "https://conduit-api.bondaracademy.com/api/users/login",
    {
      data: { user: { email: "thuytest@test.com", password: "12345678" } },
    },
  );
  const responseBody = await response.json();
  const accessToken = responseBody.user.token;

  // Delete the article by the delete API
  const deleteArticleResponse = await request.delete(
    `https://conduit-api.bondaracademy.com/api/articles/${slug}`,
    {
      headers: {
        Authorization: `Token ${accessToken}`,
      },
    },
  );

  expect(deleteArticleResponse.status()).toEqual(204);
});


