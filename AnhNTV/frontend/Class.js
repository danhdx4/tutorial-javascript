class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    nhactay() {
        return "nhac tay";
    }

    getInfo() {
        console.log("Hello");
    }
}

let user = new User(1, "user");

let object = {
    id: 1,
    name: "user",
    
    getInfo: function () {
        console.log("Hello");
    }
};

user.getInfo();

console.log(user, object);


// Bài 1 — Template Literal
// Dùng template literal in ra thông tin sản phẩm:
// "Sản phẩm: Áo thun — Giá: 150.000 VND — Còn hàng: ✅"

let TenSanPham = "Áo Thun";
let Gia = "150.000";
let conHang = "✅";
console.log(`Sản phẩm: ${TenSanPham} — Giá:${Gia} — Còn hàng:${conHang} `);

// Bài 2 — Template Literal nhiều dòng
// Dùng template literal in card sản phẩm gồm: ID, Tên, Giá, Danh mục.

let id = 1;
let ten = "Áo thun";
let gia = "150.000 VND";
let danhMuc = "Thời trang";

let card = `
ID:${id}, Tên:${ten}, Giá:${gia}, Danh mục:${danhMuc}
`
console.log(card);

// Bài 3 — Tính giá giảm
// Cho originalPrice và discount (%), tính và in giá sau giảm ngay trong template literal.

let originalPrice = 20000;
let discount = 20;

console.log (`Giá gốc: ${originalPrice} VND,
Giảm giá: ${discount}%, 
Giá sau giảm: ${originalPrice - (originalPrice * discount / 100)} VND
`)

// Bài 4 — Class Product
// Constructor: id, name, price, category
// Method getInfo() dùng template literal
// Method toJSON() trả về plain object


class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

getInfo() {
        return `ID: ${this.id}
Tên: ${this.name}
Giá: ${this.price} VND
Danh mục: ${this.category}`;
    }

 toJSON() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            category: this.category
        };
    }
}

let product = new Product(1, "Áo thun", 150000, "Thời trang");

console.log(product.getInfo());

console.log(product.toJSON());