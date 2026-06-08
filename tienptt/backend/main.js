const ProductStore = require("./Model/producstore");

const store = new ProductStore();

// Lấy tất cả
console.log("Danh sách sản phẩm:");
console.log(store.getAll());

// Tìm theo id
console.log("Tìm id = 2");
console.log(store.findById(2));