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
 