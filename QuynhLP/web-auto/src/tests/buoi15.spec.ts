import { test, expect } from "../fixtures/auth.fixture";
import { ArticlePage } from "../pages/article.page";
import { createArticleByApi, deleteArticleByApi } from "../utils/apiHelper";

test.describe("Buổi 15 - Chữa bài tập lớn", () => {
    const createdTitles: string[] = [];
    let titleForDeleteTest = "";
    let slugForDeleteTest = "";

    // Hook after: xóa dữ liệu sau test tạo bản ghi bằng API
    test.afterEach(async ({ request, authToken }, testInfo) => {
        if (testInfo.title.includes("Tạo bản ghi")) {
            for (const title of createdTitles.splice(0)) {
                await deleteArticleByApi(request, authToken, title);
            }
        }
    });

    // Hook before: tạo sẵn bản ghi bằng API cho test xóa bản ghi
    test.beforeEach(async ({ request, authToken }, testInfo) => {
        if (testInfo.title.includes("Xóa bản ghi")) {
            titleForDeleteTest = `api-${Date.now()}`;
            slugForDeleteTest = await createArticleByApi(request, authToken, titleForDeleteTest);
        }
    });

    test("1. Tạo bản ghi bằng browser", async ({ loggedInPage }) => {
        const articlePage = new ArticlePage(loggedInPage);
        const title = `browser-${Date.now()}`;

        await articlePage.createArticle(title);
        await expect(loggedInPage.getByText(title).first()).toBeVisible();
        createdTitles.push(title);
    });

    test('2. Xóa bản ghi bằng browser', async ({ loggedInPage }) => {
        const articlePage = new ArticlePage(loggedInPage);

        await loggedInPage.goto(`https://conduit.bondaracademy.com/article/${slugForDeleteTest}`);

        const deleteButton = loggedInPage.getByRole('button', { name: /delete article/i }).first();
        await deleteButton.waitFor({ state: 'visible', timeout: 60000 });
        await deleteButton.click();

        await loggedInPage.waitForLoadState('networkidle');
        await expect(loggedInPage.getByText(titleForDeleteTest).first()).not.toBeVisible();
    });
});