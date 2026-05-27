// Cấu trúc chung của class
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  getInfor() {
    return "Hello";
  }
}
let user = new User(1, "user");
console.log(user);
let object = {
  id: 1,
  name: "user2",
  getInfor: () => {
    return "Hello";
  },
};
console.log(user, object);
console.log(object.getInfor());

console.log("=====");

class Cal {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add() {
    return this.a + this.b;
  }
  sub() {
    return this.a - this.b;
  }
}
class CalFx570 extends Cal {
  constructor(a, b, c) {
    super(a, b);
    this.c = c;
  }
  add() {
    return this.a * this.b + this.c;
  }
}
let cal = new CalFx570(2, 5, 5);
console.log(cal.add());

console.log("=====");
// Dùng template literal in ra thông tin sản phẩm:
// "Sản phẩm: Áo thun — Giá: 150.000 VND — Còn hàng: ✅"

const name = "Áo Thun";
const price = 150000;
const conhang = "✅";
console.log(`Sản phẩm: ${name}— Giá: ${price} VND- Còn hàng ${conhang}`);

console.log("=====");
// Bài 2 — Template Literal nhiều dòng
// Dùng template literal in card sản phẩm gồm: ID, Tên, Giá, Danh mục.

const ID = 1;
const name_1 = "Bàn Phím";
const price_1 = 200000;
const danhmuc = "Máy tính";
console.log(`
    ID: ${ID}
    Name: ${name_1}
    Giá: ${price_1} VND
    Danh mục: ${danhmuc}`);
console.log("====");
// Bài 3 — Tính giá giảm
// Cho originalPrice và discount (%), tính và in giá sau giảm ngay trong template literal.
const originalPrice = 200000;
const discount = 10;
console.log(
  `Giá sau giảm: ${originalPrice - (discount / 100) * originalPrice}`,
);

console.log("=====");
// Bài 4 — Class Product
// Constructor: id, name, price, category
// Tạo method getInfo() dùng template literal
// Tạo method toJSON() trả về plain object

class Product {
  constructor(id, name_2, price_2, category) {
    this.id = id;
    this.name_2 = name_2;
    this.price_2 = price_2;
    this.category = category;
  }
  getInfo() {
    return `Thong tin san pham: ID: ${this.id} name: ${this.name_2} Giá: ${this.price_2}VND Category: ${this.category}`;
  }
  toJson() {
    return {
      id: this.id,
      name: this.name_2,
      price: this.price_2,
      category: this.category,
    };
  }
}
const product = new Product(1, "Áo Thun", "150000", "Quần áo"); // Tạo object
console.log(product.getInfo); // Gọi Object
console.log(product.toJson()); // Chuyển thành plain Object

// Bài 5 — Class User
// Constructor: id, username, role
// Tạo method getProfile() dùng template literal
// Tạo method isAdmin() trả về true/false
// Tạo method toJSON() trả về plain object
// Tạo method fromJSON(data) tạo User từ plain object
console.log("=====Bài 5======");
class UserP {
  constructor(id, username, role) {
    this.id = id;
    this.username = username;
    this.role = role;
  }
  getProfile() {
    return `Thong tin profile cua user: ID: ${this.id}, Tên: ${this.username}, role: ${this.role}`;
  }
  isAdmin() {
    return this.role == "admin";
  }
  toJSON() {
    return {
      id: this.id,
      username: this.username,
      role: this.role,
    };
  }
  fromJSON(data) {
    return new UserP(data.id, data.username, data.role);
  }
}
const userProfile = new UserP(1, "Quỳnh", "super_admin");
console.log(userProfile.getProfile());
console.log(userProfile.isAdmin());
console.log(userProfile.toJSON());
const userProfile1 = UserP.fromJSON(userProfile.toJSON());

console.log(userProfile1);
