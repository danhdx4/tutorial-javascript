class User {
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    get infor(){
        console.log("hello")
    }
}
let user = new User("12","xuân");
let object={
    id:1,
    name:"user"
}
console.log(user,object)

/**Bài 1 — Template Literal
Dùng template literal in ra thông tin sản phẩm:
"Sản phẩm: Áo thun — Giá: 150.000 VND — Còn hàng: ✅" */

const sanpham="Sản phẩm: Áo thun";
const gia= "Giá: 150000 VND";
const trangthai= "Còn hàng: ✅";
console.log(`${sanpham}-${gia}-${trangthai}`)

/**
 in ra tên, giá, danh mục của sản phẩm
 */
const tensp="Tủ lạnh";
const giasp="15000000 vnd";
const danhmuc="Đồ gia dụng";
console.log(`${tensp} ${giasp} ${danhmuc}`)

/**
 Cho original và discount(%) tính và in ra giá sau khi giảm ngay trong template literal
 */
const giagoc=15000000;
const giamgia=15;

console.log(`Gia sau giam= ${giagoc-giagoc*giamgia/100}`);

/**
 Bài 4-Class Product
 Constructor: id, name, price, category
 tạo method getInfo() dùng template literal
 tạo method toJSON() trả về plain object
 */
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
    static fromJSON(data) {
      return new UserP(data.id, data.username, data.role);
    }
  }
  const userProfile = new UserP(1, "Xuân", "super_admin");
  console.log(userProfile.getProfile());
  console.log(userProfile.isAdmin());
  console.log(userProfile.toJSON());
  const userProfile1 = UserP.fromJSON(userProfile.toJSON());
  
  console.log(userProfile1);


  // Bài 1 — Hoàn thiện Product
// Thêm thuộc tính inStock (boolean)
// Method getLabel(): in “✅ Tên — Giá” hoặc “❌ ...” tùy inStock
// Static method fromJSON(data) → tạo Product từ plain object

/**class Product1 {
  constructor(id, name_2, price_2, category, inStock) {
    this.id = id;
    this.name_2 = name_2;
    this.price_2 = price_2;
    this.category = category;
    this.inStock = inStock;
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
      inStock: this.inStock,
    };
  }
  getLabel() {
    if (this.inStock == true) {
      return `✅ Tên: ${this.name_2}, Giá: ${this.price_2}`;
    } else {
      return `❌ Tên: ${this.name_2}, Giá: ${this.price_2}`;
    }
  }
  static fromJSON(data) {
    return new Product1(
      data.id,
      data.name,
      data.price,
      data.category,
      data.inStock
    );
  }
}
const product = new Product1(1, "Áo Thun", 150000, "Quần áo", false); 
console.log(product.getInfo()); // Gọi Object
console.log(product.getLabel());
//console.log(product.toJson()); // Chuyển thành plain Object
const product_2 = Product1.fromJSON(product.toJson());
console.log(product_2);
*/ 
// Bài 2 — Class ProductStore
// Constructor nhận mảng Product[]
// getAll() → trả về toàn bộ
// findById(id) → tìm theo id
// findByCategory(cat) → lọc theo danh mục
console.log("=====Bài 2=====");
class ProductStore {
  constructor(products) {
    this.products = products;
  }
  getAll() {
    return this.products;
  }
  findById(id) {
    return this.products.find((product) => product.id === id);
  }
  findByCategory(cat) {
    return this.products.filter((product) => product.category == cat);
  }
}
const pro = new ProductStore([
  {
    id: 1,
    name: "Vòng",
    price: 20000,
    category: "Trang sức",
    inStock: true,
  },

  {
    id: 2,
    name: "Váy",
    price: 20000,
    category: "Làm đẹp",
    inStock: true,
  },
]);

console.log("===== Tất cả sản phẩm =====");
console.log(pro.getAll());
console.log("===== Tìm theo ID =====");
console.log(pro.findById(1));
console.log("===== Lọc theo category =====");
console.log(pro.findByCategory("Trang sức"));
