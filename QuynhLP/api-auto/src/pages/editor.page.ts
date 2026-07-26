import { ArticleInput } from "../utils/constants";
import { BasePage } from "./base.page";

export class EditorPage extends BasePage {
  titleInput = this.page.getByPlaceholder("Article Title");
  descriptionInput = this.page.getByPlaceholder("What's this article about?");
  bodyInput = this.page.getByPlaceholder("Write your article (in markdown)");
  tagsInput = this.page.getByPlaceholder("Enter tags");
  publishBtn = this.page.getByRole("button", { name: "Publish Article" });

  async publishArticle(article: ArticleInput) {
    await this.titleInput.fill(article.title);
    await this.descriptionInput.fill(article.description);
    await this.bodyInput.fill(article.body);

    for (const tag of article.tagList) {
      await this.tagsInput.fill(tag);
      await this.tagsInput.press("Enter");
    }

    await this.publishBtn.click();
  }
}
