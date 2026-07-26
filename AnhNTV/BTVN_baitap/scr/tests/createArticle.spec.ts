import { test } from "../fixtures/auth.fixture";
import { ArticlePage } from "../pages/article.page";
import { articleData } from "../test_data/article.data";
import { ArticleApi } from "../api/article.api";

let slug = "";
let token = "";

test.beforeAll(async ({ request }) => {

    const response = await request.post(
        "https://conduit-api.bondaracademy.com/api/users/login",
        {
            data: {
                user: {
                    email: "vananh217.tm@gmail.com",
                    password: "12345678"
                }
            }
        }
    );

    const body = await response.json();

    token = body.user.token;

});

test.afterEach(async ({ request }) => {

    if (slug) {

        const articleApi = new ArticleApi(request);

        await articleApi.deleteArticle(slug, token);

    }

});

test("Create Article", async ({ page }) => {

    const articlePage = new ArticlePage(page);
    const uniqueTitle = `${articleData.title} ${Date.now()}`;

    await articlePage.createArticle(
        uniqueTitle,
        articleData.description,
        articleData.body
    );

    await articlePage.verifyArticle(uniqueTitle);

    slug = page.url().split("/").pop()!;

});