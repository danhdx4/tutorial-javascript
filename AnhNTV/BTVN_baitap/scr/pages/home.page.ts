export class HomePage {

    constructor(private page: Page){}

    newArticleButton = this.page.getByText("New Article");

}
//dùng cho các chức năng ở Home
//khai báo locator New Article