import { test } from "../fixtures/auth-test";
import { RecordPage } from "../pages/recordPage.page";
import { recordData } from "../test-data/records.data";

let articleSlug = "";

test.beforeEach(async ({ page, accessToken }) => {
    const recordPage = new RecordPage(page);

    articleSlug = await recordPage.createArticleByAPI(
        recordData.valid,
        accessToken
    );
});

test("Should delete article successfully", async ({
    page,
}) => {
    const recordPage = new RecordPage(page);

    await recordPage.gotoArticle(articleSlug);
    await recordPage.deleteArticleByUI();
    await recordPage.verifyArticleDeleted(
        recordData.valid.title,
        recordData.valid.description
    );
});