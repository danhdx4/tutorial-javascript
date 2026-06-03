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
  // tìm sản phẩm theo khoảng giá (min, max)
  findByPriceRange(min, max) {
    return this.products.filter(
      (product) => product.price >= min && product.price <= max,
    );
  }
  // tìm sản phẩm theo tên (chứa chuỗi con, không phân biệt hoa thường)
  findByName(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(lowerKeyword),
    );
  }
  // tìm sản phầm hết hàng (inStock = false)
  findOutOfStock() {
    return this.products.filter((product) => !product.inStock);
  }
  // sortByPrice(order) — sắp xếp theo giá (asc, desc)
  sortByPrice(order = "asc") {
    const sorted = [...this.products].sort((a, b) => a.price - b.price);
    return order === "asc" ? sorted : sorted.reverse();
  }
}

const store = new ProductStore([
  new ProductComplete(1, "Áo Thun", 150000, "Thời trang", false),
  new ProductComplete(2, "Quần Jean", 350000, "Thời trang", false),
  new ProductComplete(3, "Giầy Da", 1550000, "Giầy dép", true),
  new ProductComplete(4, "Giầy Thể Thao", 1200000, "Giầy dép", true),
]);

console.log(store.getAll());
display_log();
console.log(store.findById(1));
display_log();
console.log(store.findByCategory("Giầy dép"));
display_log();
console.log(store.findInStock());
display_log();
console.log(store.findByPriceRange(300000, 1600000));
display_log();
console.log(store.findByName("giầy"));
display_log();
console.log(store.findOutOfStock());
display_log();
console.log(store.sortByPrice("asc"));
display_log();
console.log(store.sortByPrice("desc"));
display_log();
