// main.js
const Product = require("./models/Product");
const ProductStore = require("./models/ProductStore");

const store = new ProductStore([
  new Product(1, "Áo Thun", 150000, "Thời trang", false),
  new Product(2, "Quần Jean", 350000, "Thời trang", false),
  new Product(3, "Giầy Da", 1550000, "Giầy dép", true),
  new Product(4, "Giầy Thể Thao", 1200000, "Giầy dép", true),
  new Product(5, "Mũ Lưỡi Trai", 200000, "accessories", true),
  new Product(6, "Dây Nịt", 300000, "accessories", false),
]);

// Lấy toàn bộ sản phẩm
store.getAll().forEach((p) => console.log(p.getLabel()));

// Tìm theo id
const p2 = store.findById(2);
console.log("Tìm id=2:", p2.getLabel());

// Lọc theo danh mục
const acc = store.findByCategory("accessories");
console.log("Accessories:", acc.length, "sản phẩm");
