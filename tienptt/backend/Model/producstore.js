// Bài 2 — Class ProductStore
// Constructor nhận mảng Product[]
// getAll() → trả về toàn bộ
// findById(id) → tìm theo id
// findByCategory(cat) → lọc theo danh mục

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class ProductStore {
    constructor(products) {
        this.products = products;
    }

    // Lấy toàn bộ danh sách
    getAll() {
        return this.products;
    }

    // Tìm theo id
    findById(id) {
        return this.products.find(
            product => product.id === id
        );
    }

    // Lọc theo danh mục
    findByCategory(cat) {
        return this.products.filter(
            product => product.category === cat
        );
    }
}
// Tạo dữ liệu 

const p1 = new Product(
    1,
    "Laptop",
    20000000,
    "Điện tử"
);

const p2 = new Product(
    2,
    "Chuột",
    300000,
    "Phụ kiện"
);

const p3 = new Product(
    3,
    "Bàn phím",
    800000,
    "Phụ kiện"
);
//Tạo Store

const store = new ProductStore([
    p1,
    p2,
    p3
]);
//Test
console.log("Danh sách tất cả:");
console.log(store.getAll());

console.log("Tìm id = 2:");
console.log(store.findById(2));

console.log("Lọc danh mục Phụ kiện:");
console.log(
    store.findByCategory("Phụ kiện")
);