import { ArticleDataType } from "../utils/type";

export type CreateArticleTestCase = {
    payload: ArticleDataType;
    errorMessage: string | null;
};

export const articleData: Record<string, CreateArticleTestCase> = {
    success: {
        payload: {
            title: "Playwright Article",
            description: "Description",
            body: "Article content",
            tagList: ["playwright", "e2e", "auto test", "hsc", "zensho holding"],
        },
        errorMessage: null,
    },
    successWithoutTagList: {
        payload: {
            title: "Playwright Article",
            description: "Description",
            body: "Article content",
            tagList: [],
        },
        errorMessage: null,
    },
    missingTitle: {
        payload: {
            title: "",
            description: "Description",
            body: "Article content",
            tagList: ["playwright", "e2e", "auto test", "hsc", "zensho holding"],
        },
        errorMessage: "title can't be blank",
    },
    missingDescription: {
        payload: {
            title: "Playwright Article",
            description: "",
            body: "Article content",
            tagList: ["playwright", "e2e", "auto test", "hsc", "zensho holding"],
        },
        errorMessage: "description can't be blank",
    },
    missingBody: {
        payload: {
            title: "Playwright Article",
            description: "Description",
            body: "",
            tagList: ["playwright", "e2e", "auto test", "hsc", "zensho holding"],
        },
        errorMessage: "body can't be blank",
    },
};
