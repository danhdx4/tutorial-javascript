// Bài 1 — Class Product
// Thuộc tính: id, name, price, category, inStock
// Method getLabel(): in "✅ Name — Price" hoặc "❌ ..."
// Static method fromJSON(data): tạo Product từ plain object

class Product {
    constructor(id, name, price, category, inStock = true) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.inStock = inStock;
    }

    // Trả về label: "✅ Name — Price" hoặc "❌ Name — Hết hàng"
    getLabel() {
        if (this.inStock) {
            return `✅ ${this.name} — ${this.price.toLocaleString('vi-VN')}đ`;
        } else {
            return `❌ ${this.name} — Hết hàng`;
        }
    }

    // Static method: tạo Product từ plain object
    static fromJSON(data) {
        return new Product(
            data.id,
            data.name,
            data.price,
            data.category,
            data.inStock
        );
    }

    // Chuyển đổi thành plain object
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            category: this.category,
            inStock: this.inStock
        };
    }
}

class ProductStore {
    constructor(products = []) {
        this.list_product_nhan = products;
    }

    getAll() {
        return this.list_product_nhan;
    }

    findById(id) {
        return this.list_product_nhan.find(p => p.id === id);
    }

    findByCategory(cat) {
        return this.list_product_nhan.filter(p => p.category === cat);
    }
}


const prod1 = new Product(1, "Áo sơ mi", 120000, "ao");
const prod2 = new Product(2, "Quần dài", 100000, "quan");

const list = [
    prod1.toJSON(),
    prod2.toJSON()
]


const classProductStore = new ProductStore(list);
// console.log(typeof list);
// console.log(classProductStore.findByCategory("ao"));

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(
      `${this.name} kêu: ${this.sound}`
    );
  }
}

class Dog extends Animal {

  constructor(name, breed) {
    super(name, "Gâu gâu");

    this.breed = breed;
  }

  fetch() {
    console.log(
      `${this.name} (${this.breed}) đang nhặt bóng 🎾`
    );
  }

}

const dog = new Dog(
  "Lucky",
  "Husky"
);

dog.speak();

dog.fetch();