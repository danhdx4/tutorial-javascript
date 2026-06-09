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

const prod1 = new Product(1, "Áo sơ mi", 120000, "ao");
prod1.fromJSON();

Product.fromJSON({
    id: 1,
    name: "123",
    
})