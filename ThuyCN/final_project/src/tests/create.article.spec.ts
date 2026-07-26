import { test, expect } from "../fixtures/baseTest";
import { CreateArticle } from "../pages/create.article.page";
import { ConduitApi } from "../utils/apiHelper";
import { testData } from "../testData";

let createdSlug: string | undefined;

test.afterEach(async ({ request }) => {
    if (!createdSlug) {
        return;
    }

    const api = new ConduitApi(request);
    const token = await api.login(testData.login.email, testData.login.password);
    await api.deleteArticle(createdSlug, token);
    createdSlug = undefined;
});

test("Create a new article", async ({ page, loginPage }) => {
    const createArticle = new CreateArticle(page);

    await createArticle.pgoto();
    createdSlug = await createArticle.createArticle({
        title: testData.article.title,
        description: testData.article.description,
        body: testData.article.body,
        tags: testData.article.tagList.join(" "),
    });

    expect(createdSlug).toBeTruthy();
});

