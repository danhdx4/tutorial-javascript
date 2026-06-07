// Bài 1 — Hoàn thiện Product
// Thêm thuộc tính inStock (boolean)
// Method getLabel(): in “✅ Tên — Giá” hoặc “❌ ...” tùy inStock
// Static method fromJSON(data) → tạo Product từ plain object

console.log("Bài 1:......................")
class Product {
  constructor(id, name, price, category, inStock) {
    this.id = id;
    this.name = name;
    this.price = price;      
    this.category = category;
    this.inStock = inStock;
  }
 
  getInfo() {
    return `Product ${this.id}: ${this.name} — ${this.price}₫ (${this.category})`;
  }
 
  getLabel() {
    const icon = this.inStock ? "✅" : "❌";
    return `${icon} ${this.name} — ${this.price}₫`;
  }
 
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      category: this.category,
      inStock: this.inStock
    };
  }
 
  static fromJSON(data) {
    return new Product(
      data.id,
      data.name,
      data.price,
      data.category,
      data.inStock
    );
  }
}
 
// Test
const prod = new Product(1, "Áo thun", 100000, "quần áo", false);
 
console.log(prod.getInfo());
console.log(prod.getLabel());
console.log(prod.toJSON());
 
 
// Bài 2 — Class ProductStore
// Constructor nhận mảng Product[]
// getAll() → trả về toàn bộ
// findById(id) → tìm theo id
// findByCategory(cat) → lọc theo danh mục

console.log("Bài 2:......................")
 
class ProductStore {
  constructor (products){
    this.products = products;
  }
getAll (){
  return this.products
}
findById (id){
  return this.products.find(u => u.id === id)
}
finByCategory(cat){
  return this.products.filter( u => u.category === cat)
}
};
 
const prod2 = new Product(2, "Ao somi", 200000, "quan ao", true);
const prod3 = new Product(3, "tui", 500000, "phu kien", true);
const products =  [
 prod.toJSON(),
 prod2.toJSON(),
 prod3.toJSON(),
]
const products1 = new ProductStore (products);
console.log(products1.getAll());
 
console.log(products1.findById(2));
 
console.log(products1.finByCategory("phu kien"));
 

// Bài 3 — Tạo file JSON
// Tạo 2 file — Buổi 8 nạp vào server:

// data/products.json — 3 sản phẩm (id, name, price, category, inStock)
// data/users.json — 3 user (id, username, role)


console.log("Bài 3:......................")

// Import thư viện fs của NodeJS
// fs = file system -> dùng để tạo/đọc file

// Bài 3 — Tạo file JSON

console.log("Bài 3:......................")

// Import thư viện fs của NodeJS
// fs = file system -> dùng để tạo/đọc file
const fs = require("fs");

// Dữ liệu products
const productsData = [
  {
    id: 1,
    name: "Áo thun",
    price: 100000,
    category: "quần áo",
    inStock: false
  },
  {
    id: 2,
    name: "Áo sơ mi",
    price: 200000,
    category: "quần áo",
    inStock: true
  },
  {
    id: 3,
    name: "Túi",
    price: 500000,
    category: "phụ kiện",
    inStock: true
  }
];

// Dữ liệu users
const usersData = [
  {
    id: 1,
    username: "anhnv",
    role: "admin"
  },
  {
    id: 2,
    username: "binhtran",
    role: "staff"
  },
  {
    id: 3,
    username: "minhpham",
    role: "customer"
  }
];

// Tạo file products.json
fs.writeFileSync(
  "./data/products.json",
  JSON.stringify(productsData, null, 2)
);

// Tạo file users.json
fs.writeFileSync(
  "./data/users.json",
  JSON.stringify(usersData, null, 2)
);

console.log("Đã tạo file JSON thành công!");




