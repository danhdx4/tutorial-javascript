// class User {
//     constructor(id, name)
//     {
// this.id= id;
// this.name=name;
//     }
//     getInfor(){
//         console.log("hello");
//     }
// }
// let user =new User(1, "user");
// let object={
//     id:1,
//     name:"user"
// }
// console.log(user,object);


// //vi dụ: class
// class cal{
//     constructor(a,b){
//         this.a =a;
//         this.b =b;
//     }
// add()
// {
//     return this.a +this.b;
// }
// nhan()
// {
//     return this.a * this.b;
// }
// // class caldx570  extends cal{
// //     constructor(a,b,b,c {
// //         super(a,b);
        
// //     }
// //}
// }
// let cal =new cal(2,3);
// console.log(cal.add());


console.log ("bài tập thực hành");
// Bài 1 — Template Literal
// Dùng template literal in ra thông tin sản phẩm:
// "Sản phẩm: Áo thun — Giá: 150.000 VND — Còn hàng:

const sanpham = "áo thun"
const gia=150.000 ;
console.log (`Sản phẩm: ${sanpham},  ${gia} `);

// Bài 2 — Template Literal nhiều dòng
// Dùng template literal in card sản phẩm gồm: ID, Tên, Giá, Danh mục.
const id =1;
const ten = "bánh";
const gia1= 250.000;
const danhmuc = "test";
console.log (`sản phầm gồm ${id}, ${ten}, ${gia1}, ${danhmuc}`);
console.log (`sản phầm gồm  ${ten}, ${gia1}, ${danhmuc}`);

// Bài 3 — Tính giá giảm
// Cho originalPrice và discount (%), tính và in giá sau giảm ngay trong template literal.
//
const originalPrice = 250.000;
const discount =10;
console.log (`Sản phẩm giảm giá; ${originalPrice*(1-discount/10)}`);

// Bài 4 — Class Product
// Constructor: id, name, price, category
// Method getInfo() dùng template literal
// Method toJSON() trả về plain object
class Product {
    constructor (id, name, price, category)
    {
        this.id =id;
        this.name = name;
        this.price =price;
        this.category =category;
    }
    getInfo()
    {
        return(`danh muc gồm: ${this.id}, ${this.name}, ${this.price}, ${this.category}`) }
}
const object1 = new Product("1", "tiên", "150.000", "test");
console.log(object1.getInfo());
// Bài 5 — Class User
// Constructor: id, username, role
// Method getProfile() dùng template literal
// Method isAdmin() trả về true/false

class User{
    constructor (id1, username1, role)
    {
        this.id1=id1;
        this.username1 =username1;
        this.role =role;
    }
    getProfile()
    {
        return
        `ID:${this.id}
        Username: ${this.username1}
       Role: ${this.role}`;
    }
    isAdmin(){
        return this.role =="admin";

    }
    //tạo đối tượng
    
}
const user1 = new User(1, "Tien", "admin");
const user2 =new User (1, "Thuỷ","user")
// kiểm tra hiển thị kết quả
console.log(user1.getProfile());
console.log(user1.isAdmin());
console.log(user2.isAdmin());

console.log("************Bài tập về nhà**************");

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

// Bài 2 — Class ProductStore
// Constructor nhận mảng Product[]
// getAll() → trả về toàn bộ
// findById(id) → tìm theo id
// findByCategory(cat) → lọc theo danh mục

// class Product {
//     constructor(id, name, price, category) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.category = category;
//     }
// }

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
// Bài 3 — Tạo file JSON
// Tạo 2 file — Buổi 8 nạp vào server:
// data/products.json — 3 sản phẩm (id, name, price, category, inStock)
// data/users.json — 3 user (id, username, role)

/*const products = require("./data/products.json");
const users = require("./data/users.json");

console.log(products);
console.log(users);*/

//extentds; dùng kế thừa.
//super dùng đẻ gọi contructor ở bên trên.
// class car {


//bài 2;
class producstore1 {
    constructor (produc =[] )
    {
this.list_produc_nhan =products
    }
    getAll ()

    {
        return this.list_produc_nhan;
    }

    finbyid(){
        return  this.list_produc_nhan.find(p =>p.id==id);
    }
}

const list_produc_nhan =[

    {
        id: 1,
        name:"áo sơ mi",
    category: "áo"
    },

    {
id: 2,
name: "quan dài",
category: "quan",
    }
]
const classproducstore =new producstore1 (list);
console.log (typeof list)
console.log (classproducstore.finbyid(1));