const ProductStore = require('./models/ProductStore');

const p1 = {id: 1, name: "skirt", price: 20000, category: "Clothes", inStock: true};
const p2 = {id: 5, name: "t-shirt", price: 40000, category: "Clothes", inStock: false};

const products = new ProductStore([p1,p2])
products.getAll(); // getAll() → trả về toàn bộ
products.findById(1); // findById(id) → tìm theo id