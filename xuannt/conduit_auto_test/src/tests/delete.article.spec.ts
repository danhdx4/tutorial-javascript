import { test, expect } from "../fixtures/login";
import { ConduitApi } from "../utils/apiHelper";
import { testData } from "../testData";

let createdSlug: string | undefined;

test.beforeEach(async ({ request }) => {
    const api = new ConduitApi(request);
    const token = await api.login(testData.login.email, testData.login.password);

    const response = await request.post(
        "https://conduit-api.bondaracademy.com/api/articles",
        {
            headers: {
                Authorization: `Token ${token}`,
            },
            data: {
                article: {
                    title: testData.article.title,
                    description: testData.article.description,
                    body: testData.article.body,
                    tagList: testData.article.tagList,
                },
            },
        },
    );

    const body = await response.json();
    createdSlug = body.article.slug;
});

test.afterEach(async ({ request }) => {
    if (!createdSlug) {
        return;
    }

    const api = new ConduitApi(request);
    const token = await api.login(testData.login.email, testData.login.password);
    await api.deleteArticle(createdSlug, token);
    createdSlug = undefined;
});

test("Delete an article", async ({ request }) => {
    const api = new ConduitApi(request);
    const token = await api.login(testData.login.email, testData.login.password);

    const response = await request.delete(
        `https://conduit-api.bondaracademy.com/api/articles/${createdSlug}`,
        {
            headers: {
                Authorization: `Token ${token}`,
            },
        },
    );

    expect(response.status()).toBe(204);
});
