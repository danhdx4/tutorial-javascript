
// Bài 1 — Hoàn thiện Product
// Thêm thuộc tính inStock (boolean)
// Method getLabel(): in “✅ Tên — Giá” hoặc “❌ ...” tùy inStock
// Static method fromJSON(data) → tạo Product từ plain object
class produc {
    constructor(ten, gia, instock) {
        this.ten = ten;
        this.gia = gia;
        this.instock = instock;
    }

    getLabel() {
        return `${this.instock ? "✅" : "x"} ${this.ten} - Giá: ${this.gia}`;
    }

    static fromJSON(data) {
        return new produc(
            data.ten,
            data.gia,
            data.instock
        );
    }
}


// Tạo object
const product1 = new produc(
    "Laptop",
    20000000,
    true
);

console.log(product1.getLabel());