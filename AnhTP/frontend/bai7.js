function display_log() {
  console.log("-------------------");
}

const name = "Lan";
const age = 25;
console.log(`Tôi là ${name}, ${age} tuổi`);
// ✅ Sạch hơn, dễ đọc hơn nhiều!

const testName = "Login_001";
const status = "PASSED";
const duration = 1.23;
console.log(`[${testName}] → ${status} (${duration}s)`);

const baseUrl = "https://api.example.com";
const userId = 42;
const url = `${baseUrl}/users/${userId}/profile`;
console.log(url);

const email = `
Kính gửi team QA,

Test case TC_001 đã chạy xong.
Kết quả: ${status}
Thời gian: ${duration}s
`;
console.log(email);

display_log();

class TenClass {
  // constructor: chạy khi tạo object mới
  constructor(thamSo1, thamSo2) {
    this.thamSo1 = thamSo1;
    this.thamSo2 = thamSo2;
  }

  // method: hàm bên trong class
  tenHam() {
    console.log(`Hello ${this.thamSo1}`);
  }
}

// Tạo object từ class
const obj = new TenClass("giaTri1", "giaTri2");
obj.tenHam();

display_log();
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  getInfor() {
    console.log(`Hello ${this.name}`);
  }
}

let user = new User(0, "Name0");
let object = { id: 1, name: "Name1" };
console.log(user, object);
display_log();

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
  mul() {
    return this.a * this.b;
  }
  div() {
    if (this.b === 0) {
      console.log("Không thể chia cho 0");
      return null;
    }
    return this.a / this.b;
  }
}

let cal = new Cal(10, 3);
console.log(cal.add());
console.log(cal.sub());
console.log(cal.mul());
console.log(cal.div());

display_log();

// Kế thừa: class con kế thừa class cha, có thể sử dụng lại toàn bộ hàm của class cha
class CalFx570 extends Cal {
  constructor(a, b) {
    super(a, b);
  }
  add() {
    return this.a + this.b - 570;
  }
}

let calFx570 = new CalFx570(10, 4);
console.log(calFx570.add());
console.log(calFx570.sub());
console.log(calFx570.mul());
console.log(calFx570.div());

display_log();
// Bài 1 — Template Literal
// Dùng template literal in ra thông tin sản phẩm:
// "Sản phẩm: Áo thun — Giá: 150.000 VND — Còn hàng: ✅"

const productName = "Áo thun";
const price = 150000;
const inStock = true;
console.log(
  `Sản phẩm: ${productName} — Giá: ${price.toLocaleString()} VND — Còn hàng: ${inStock ? "✅" : "❌"}`,
);

display_log();
// Bài 2 — Template Literal nhiều dòng
// Dùng template literal in card sản phẩm gồm: ID, Tên, Giá, Danh mục.
const productId = 123;
const productCategory = "Thời trang";
console.log(`ID: ${productId}
Tên: ${productName}
Giá: ${price.toLocaleString()} VND
Danh mục: ${productCategory}`);

display_log();
// Bài 3 — Tính giá giảm
// Cho originalPrice và discount (%), tính và in giá sau giảm ngay trong template literal.
const originalPrice = 200000;
const discount = 20;
console.log(`Giá gốc: ${originalPrice.toLocaleString()} VND
Giảm giá: ${discount}%
Giá sau giảm: ${(originalPrice * (1 - discount / 100)).toLocaleString()} VND`);

display_log();
console.log("Bài 4 — Class Product");
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
Giá: ${this.price.toLocaleString()} VND
Danh mục: ${this.category}`;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      category: this.category,
    };
  }
}

const product = new Product(2, "Quần Jean", 350000, "Thời trang");
console.log(product.getInfo());
console.log(product.toJSON());

display_log();
console.log("Bài 5 — Class UserBasic");
// Bài 5 — Class UserBasic
// Constructor: id, username, role
// Method getProfile() dùng template literal
// Method isAdmin() trả về true/false

class UserBasic {
  constructor(id, username, role) {
    this.id = id;
    this.username = username;
    this.role = role;
  }

  getProfile() {
    return `ID: ${this.id}
Username: ${this.username}
Role: ${this.role}`;
  }

  isAdmin() {
    return this.role === "admin";
  }
}
const userBasic = new UserBasic(1, "user1", "admin");
console.log(userBasic.getProfile());
console.log("Is admin?", userBasic.isAdmin());

display_log();
const userBasic2 = new UserBasic(2, "user2", "user");
console.log(userBasic2.getProfile());
console.log("Is admin?", userBasic2.isAdmin());
