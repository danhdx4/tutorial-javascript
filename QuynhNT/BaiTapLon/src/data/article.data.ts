import { faker } from "@faker-js/faker";

export const articleData = {
  title: faker.lorem.words(3), //sinh 3 từ ngẫu nhiên
  description: faker.lorem.sentence(), //sinh 1 câu hoàn chỉnh
  body: faker.lorem.paragraph(), //sinh 1 đoạn văn
  tag: faker.word.noun(), // sinh 1 danh từ ngẫu nhiên
};
