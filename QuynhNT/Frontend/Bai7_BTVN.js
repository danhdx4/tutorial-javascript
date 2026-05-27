// Bài 1 — Hoàn thiện Product
// Thêm thuộc tính inStock (boolean)
// Method getLabel(): in “✅ Tên — Giá” hoặc “❌ ...” tùy inStock
// Static method fromJSON(data) → tạo Product từ plain object
console.log("======Bài 1======");
class Product {
  constructor(id, name_2, price_2, category, inStock) {
    this.id = id;
    this.name_2 = name_2;
    this.price_2 = price_2;
    this.category = category;
    this.inStock = inStock;
  }
  getInfo() {
    return `Thong tin san pham: ID: ${this.id} name: ${this.name_2} Giá: ${this.price_2}VND Category: ${this.category}`;
  }
  toJson() {
    return {
      id: this.id,
      name: this.name_2,
      price: this.price_2,
      category: this.category,
      inStock: this.inStock,
    };
  }
  getLabel() {
    if (this.inStock == true) {
      return `✅ Tên: ${this.name_2}, Giá: ${this.price_2}`;
    } else {
      return `❌ Tên: ${this.name_2}, Giá: ${this.price_2}`;
    }
  }
  static fromJSON(data) {
    return new Product(
      data.id,
      data.name,
      data.price,
      data.category,
      data.inStock,
    );
  }
}
const product = new Product(1, "Áo Thun", 150000, "Quần áo", false); // Tạo object
console.log(product.getInfo()); // Gọi Object
console.log(product.getLabel());
//console.log(product.toJson()); // Chuyển thành plain Object
const product_2 = Product.fromJSON(product.toJson());
console.log(product_2);

// Bài 2 — Class ProductStore
// Constructor nhận mảng Product[]
// getAll() → trả về toàn bộ
// findById(id) → tìm theo id
// findByCategory(cat) → lọc theo danh mục
console.log("=====Bài 2=====");
class ProductStore {
  constructor(products) {
    this.products = products;
  }
  getAll() {
    return this.products;
  }
  findById(id) {
    return this.products.find((product) => product.id === id);
  }
  findByCategory(cat) {
    return this.products.filter((product) => product.category == cat);
  }
}
const pro = new ProductStore([
  {
    id: 1,
    name: "Vòng",
    price: 20000,
    category: "Trang sức",
    inStock: true,
  },

  {
    id: 2,
    name: "Váy",
    price: 20000,
    category: "Làm đẹp",
    inStock: true,
  },
]);

console.log("===== Tất cả sản phẩm =====");
console.log(pro.getAll());
console.log("===== Tìm theo ID =====");
console.log(pro.findById(1));
console.log("===== Lọc theo category =====");
console.log(pro.findByCategory("Trang sức"));
