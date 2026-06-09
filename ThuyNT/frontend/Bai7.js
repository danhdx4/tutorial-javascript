class User {
    constructor(id, name) {
        this.id = id;
        this.name = name
    }

    getInfo() {
        console.log('Hello ' + this.name);


    }

}

let user = new User(1, "Thuy");
console.log(user);

let object = {
    id: 1,
    name: "user",
    getInfo: () => {

    }
}
let newuser = new User(2, "Danh")
console.log(newuser);

class Cal {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }
}

//ke thua class cu
class CalFx570 extends Cal {
    constructor(a, b) {
        super(a, b)
    }
}

let cal = new Cal(2, 3)
console.log(cal.add());

let cal2 = new CalFx570(4, 3)
console.log(cal2.add());

// Bài 1 — Template Literal
// Dùng template literal in ra thông tin sản phẩm:
// "Sản phẩm: Áo thun — Giá: 150.000 VND — Còn hàng: ✅"
const shirt = "Ao thun";
const price = 150000;
const tick = "✅";

console.log(`Sản phẩm: ${shirt} — Giá: ${price} VND — Còn hàng: ${tick}`);

// Bài 2 — Template Literal nhiều dòng
// Dùng template literal in card sản phẩm gồm: ID, Tên, Giá, Danh mục.
let id = 1;
let product = "Phone";
let priceProduct = 123;
let menu = "Electric";

const info = `Thông tin sản phẩm
ID: ${id}
Tên: ${product}
Giá: ${priceProduct} USD
Danh mục: ${menu}`

console.log(info);

// Bài 3 — Tính giá giảm
// Cho originalPrice và discount (%), tính và in giá sau giảm ngay trong template literal.
let originalPrice = 100;

console.log(`Gia : ${originalPrice}
Gia sau giam: ${originalPrice * 0.9}`);


// Bài 4 — Class Product
// Constructor: id, name, price, category
// Method getInfo() dùng template literal
// Method toJSON() trả về plain object
class Product {
    constructor(id, name, price, category, inStock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category,
            this.inStock = inStock
    }

    getInfo() {
        console.log(`
            ID: ${this.id}
            Name: ${this.name}
            Price: ${this.price}
            Category ${this.category}`);
    }

    getLabel() {

        if (this.inStock) {
            return `✅ ${this.name} — ${this.price}`;
        } else {
            return `❌ ${this.name} — ${this.price}`;
        }
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            category: this.category,
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
}

const info1 = new Product(1, "Dell Inspriron", 1000, "Laptop");
info1.getInfo();

const info2 = new Product(2, "Iphone XS", 1000, "IOS");
console.log(info2.toJson());

// Bài 5 — Class User
// Constructor: id, username, role
// Tạo method getProfile() dùng template literal
// Tạo method isAdmin() trả về true/false
// Tạo method toJSON() trả về plain object
// Tạo method fromJSON(data) tạo User từ plain object

class User1 {
    constructor(id, username, role) {
        this.id = id;
        this.username = username;
        this.role = role;
    }

    getProfile() {
        return `
        ID ${this.id}
        Username ${this.username}
        Role ${this.role}`
    }

    isAdmin() {
        return this.role === "admin"
    }

    toJson() {
        return {
            id: this.id,
            username: this.username,
            role: this.role
        }
    }

    fromJson(data) {
        return {
            id: data.id,
            username: data.username,
            role: data.role
        };
    }

    static fromJSON(data) {
        return new User1(data.id, data.username, data.role);
    }

}

UserProfile = new User1(1, "ThuyNT", "true")
console.log(UserProfile.getProfile());

console.log(UserProfile.isAdmin());

console.log(UserProfile.toJson());

let data = {
    id: 2,
    username: "HangNM",
    role: "user"
}

let userNew = User1.fromJSON(data);

console.log(userNew);

//BTVN 1
const p1 = new Product(
    1,
    "Dell Inspiron",
    1000,
    "Laptop",
    true
);

console.log(p1.getLabel());

const dataNew = {
    id: 2,
    name: "iPhone XS",
    price: 1200,
    category: "IOS",
    inStock: false
};


const p2 = Product.fromJSON(dataNew);

console.log(p2);

//BTVN2

class ProductStore {
    constructor(products = []) {
        this.products = products;
    }

    getAll() {
        return this.products;
    }

    findId(id) {
        return this.products.find(product => product.id === id);
    }

    filterCategory(category) {
        return this.products.filter(
            product => product.category === category
        );
    }
}


const products = [
    {
        id: 1,
        name: "Dell Inspiron",
        price: 1000,
        category: "Laptop"
    },
    {
        id: 2,
        name: "Macbook Pro",
        price: 2000,
        category: "Laptop"
    },
    {
        id: 3,
        name: "iPhone 15",
        price: 1500,
        category: "Phone"
    }
];


const p3 = new ProductStore(products);

console.log(p3.getAll());
console.log(p3.findId(2));
console.log(p3.filterCategory("Laptop"));

