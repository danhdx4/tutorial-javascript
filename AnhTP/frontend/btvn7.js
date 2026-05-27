function display_log() {
  console.log("-------------------");
}
// BTVN 1 — Hoàn thiện Product
// Thêm thuộc tính inStock (boolean)
// Method getLabel(): in “✅ Tên — Giá” hoặc “❌ ...” tùy inStock
// Static method fromJSON(data) → tạo Product từ plain object
console.log("BTVN 1 — Hoàn thiện Product");
class ProductComplete {
  constructor(id, name, price, category, inStock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.inStock = inStock;
  }
  getLabel() {
    const status = this.inStock ? "✅" : "❌";
    return `${status} ${this.name} — ${this.price.toLocaleString()} VND`;
  }

  static fromJSON(data) {
    return new ProductComplete(
      data.id,
      data.name,
      data.price,
      data.category,
      data.inStock,
    );
  }
}

const productData = {
  id: 3,
  name: "Giầy Da",
  price: 1550000,
  category: "Thời trang",
  inStock: false,
};

const productComplete = ProductComplete.fromJSON(productData);
console.log(productComplete.getLabel());

display_log();

// Bài 2 — Class ProductStore
// Constructor nhận mảng Product[]
// getAll() → trả về toàn bộ
// findById(id) → tìm theo id
// findByCategory(cat) → lọc theo danh mục
console.log("BTVN 2 — Class ProductStore");
class ProductStore {
  constructor(products) {
    this.products = products;
  }
  //
  getAll() {
    return this.products;
  }
  // tìm sản phẩm theo id
  findById(id) {
    return this.products.find((product) => product.id === id);
  }
  // tìm sản phẩm theo danh mục
  findByCategory(category) {
    return this.products.filter((product) => product.category === category);
  }
  // tìm sản phẩm còn hàng (inStock = true)
  findInStock() {
    return this.products.filter((product) => product.inStock);
  }
}

const store = new ProductStore([
  new ProductComplete(1, "Áo Thun", 150000, "Thời trang", true),
  new ProductComplete(2, "Quần Jean", 350000, "Thời trang", false),
  new ProductComplete(3, "Giầy Da", 1550000, "Giầy dép", true),
]);

console.log(store.getAll());
display_log();
console.log(store.findById(3));
display_log();
console.log(store.findByCategory("Thời trang"));
display_log();
console.log(store.findInStock());
display_log();

// Bài 3 — Tạo file JSON
// Tạo 2 file — Buổi 8 nạp vào server:

// data/products.json — 3 sản phẩm (id, name, price, category, inStock)
// data/users.json — 3 user (id, username, role)
console.log("BTVN 3 — Tạo file JSON");
