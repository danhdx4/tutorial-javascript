// Bài 4 — Main file: khởi tạo & chạy
// Tạo ProductStore từ array cứng, gọi các method

// ========== Load classes (chưa dùng require, chỉ demo) ==========
// Trong buổi 8 sẽ thêm: const Product = require('./models/Product.js');

class Product {
    constructor(id, name, price, category, inStock = true) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.inStock = inStock;
    }

    getLabel() {
        if (this.inStock) {
            return `✅ ${this.name} — ${this.price.toLocaleString('vi-VN')}đ`;
        } else {
            return `❌ ${this.name} — Hết hàng`;
        }
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
        this.products = products;
    }

    getAll() {
        return this.products;
    }

    findById(id) {
        return this.products.find(product => product.id === id);
    }

    findByCategory(category) {
        return this.products.filter(product => product.category === category);
    }

    getInStock() {
        return this.products.filter(product => product.inStock);
    }
}

// ========== Dữ liệu cứng (Demo) ==========
const productsData = [
    {
        "id": 1,
        "name": "Laptop Dell XPS 13",
        "price": 25000000,
        "category": "electronics",
        "inStock": true
    },
    {
        "id": 2,
        "name": "iPhone 15 Pro",
        "price": 28000000,
        "category": "electronics",
        "inStock": true
    },
    {
        "id": 3,
        "name": "Sony WH-1000XM5",
        "price": 8000000,
        "category": "accessories",
        "inStock": false
    }
];

// ========== Khởi tạo Store ==========
const productStore = new ProductStore(
    productsData.map(data => Product.fromJSON(data))
);

// ========== Test các method ==========
console.log("=== Test ProductStore ===\n");

// Test getAll()
console.log("📦 Tất cả sản phẩm:");
productStore.getAll().forEach(p => console.log(p.getLabel()));

console.log("\n---\n");

// Test findById()
const product1 = productStore.findById(1);
console.log("🔍 Tìm theo id=1:");
console.log(product1.getLabel());

console.log("\n---\n");

// Test findByCategory()
const electronicsProducts = productStore.findByCategory("electronics");
console.log("🏷️  Sản phẩm category 'electronics':");
electronicsProducts.forEach(p => console.log(p.getLabel()));

console.log("\n---\n");

// Test getInStock()
const inStockProducts = productStore.getInStock();
console.log("✅ Sản phẩm còn hàng:");
inStockProducts.forEach(p => console.log(p.getLabel()));

console.log("\n✅ Demo main.js thành công!");
