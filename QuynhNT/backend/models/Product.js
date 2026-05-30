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
