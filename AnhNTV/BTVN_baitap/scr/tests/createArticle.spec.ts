import { test } from "../fixtures/auth.fixture";
import { ArticlePage } from "../pages/article.page";
import { articleData } from "../test_data/article.data";
import { ArticleApi } from "../api/article.api";

let slug = "";
let token = "";

test.beforeAll(async ({ request }) => {//Đăng nhập qua API để lấy token 

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

    const body = await response.json();//chuyển kết quả thành Json

    token = body.user.token;//lưu token để dùng cho việc xóa bài viết sau

});

test.afterEach(async ({ request }) => {//Xóa bài viết khi tạo thành công

    if (slug) {//kiểm tra xem bài viết tạo thành công không

        const articleApi = new ArticleApi(request);

        await articleApi.deleteArticle(slug, token);

    }

});

test("Create Article", async ({ page }) => {//tự động đăng nhập bằng fixture

    const articlePage = new ArticlePage(page); //tạo object thao tác bài viết
    const uniqueTitle = `${articleData.title} ${Date.now()}`;//tạo tiêu đề trành trùng lặp 

    await articlePage.createArticle(
        uniqueTitle,
        articleData.description,
        articleData.body
    );

    await articlePage.verifyArticle(uniqueTitle);//kiểm tra tiêu đề bài viết hiển thị 

    slug = page.url().split("/").pop()!;//lấy phần tử cuối cùng của mảng để xóa đúng

});