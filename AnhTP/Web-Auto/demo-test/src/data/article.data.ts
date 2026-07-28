import { faker } from "@faker-js/faker";

export const articleData = {
  title: faker.lorem.words(3), //random 3 từ
  description: faker.lorem.sentence(), //random 1 câu
  body: faker.lorem.paragraph(), //random 1 đoạn văn
  tag: faker.word.noun(), // random 1 danh từ
};
