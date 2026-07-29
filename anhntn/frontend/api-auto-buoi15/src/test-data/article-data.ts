export const makeCreateArticleData = (timestamp: number) => ({
  title: `Buoi15 Create ${timestamp}`,
  description: `Mo ta ${timestamp}`,
  body: `Noi dung bai viet ${timestamp}`,
  tags: "playwright",
});

export const makeDeleteSeedArticleData = (timestamp: number) => ({
  title: `Buoi15 Delete ${timestamp}`,
  description: `Description ${timestamp}`,
  body: `Body ${timestamp}`,
  tagList: ["api", "setup"],
});
