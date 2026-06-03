class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  getInfo() {
    console.log(`#${this.id} - ${this.name} - ${this.price} VND`);
  }
}

// Export để file khác dùng được
module.exports = Product;

//conole.log(pro.getLatbel())
