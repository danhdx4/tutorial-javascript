class Product {
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

// const productData = {
//   id: 3,
//   name: "Giầy Da",
//   price: 1550000,
//   category: "Thời trang",
//   inStock: false,
// };

// const productComplete = ProductComplete.fromJSON(productData);
// console.log(productComplete.getLabel());

module.exports = Product;
