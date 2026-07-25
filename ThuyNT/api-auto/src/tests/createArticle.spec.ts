import { test, expect } from "../fixtures/auth-test";
import { RecordPage } from "../pages/recordPage.page";
import { recordData } from "../test-data/records.data";

let articleSlug = "";

test.afterEach(async ({ page, accessToken }) => {
    if (!articleSlug) return;

    const recordPage = new RecordPage(page);

    await recordPage.deleteArticleByAPI(articleSlug, accessToken);

    await recordPage.verifyArticleDeleted(
        recordData.valid.title,
        recordData.valid.description
    );

    articleSlug = "";
});

test("Should create a new article successfully", async ({
    page,
}) => {
    const recordPage = new RecordPage(page);

    await recordPage.goto();
    await recordPage.waitForLoad();

    articleSlug = await recordPage.createNewArticle(
        recordData.valid
    );

    expect(articleSlug).toBeDefined();

    await recordPage.verifyArticleExists(
        recordData.valid.title,
        recordData.valid.description
    );
});
    