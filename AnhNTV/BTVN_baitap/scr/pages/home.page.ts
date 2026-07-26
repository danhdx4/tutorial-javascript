export class HomePage {

    constructor(private page: Page){}

    newArticleButton = this.page.getByText("New Article");

}