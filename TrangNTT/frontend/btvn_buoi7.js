class User{
    constructor(id,name){
        this.id = id;
        this.name = name;

    }
    getInfor(){
        return "nhấc tay";
    }
    go(){
        return"Đi lại";
    }
    getInfo(){
        return `Hello ${this.name}`;
    }
}

let user = new User (1,"user");
console.log(user);
console.log(user.go());
console.log(user.getInfo());


//VD2: Hàm để tính toán
class Cal{
    constructor(a,b){//Có thể thêm biến so với class cha
        this.a = a;
        this.b = b;
    }
    add(){
        return this.a + this.b;
    }
    sub(){
        return this.a - this.b;
    }

}
let cal = new Cal(2,5);
console.log(cal.add());
//Bài tập
// Bài 1 — Template Literal
// Dùng template literal in ra thông tin sản phẩm:
// "Sản phẩm: Áo thun — Giá: 150.000 VND — Còn hàng: ✅"
const item = "áo thun";
const price = "150.000";
console.log(`Sản phẩm ${item} giá ${price} VND ~ Còn hàng` );


// Bài 2 — Template Literal nhiều dòng
// Dùng template literal in card sản phẩm gồm: ID, Tên, Giá, Danh mục.
const product = {
    id : 1,
    name : "laptop",
    price : "150.000",
    list : "test"
};
console.log(`ID: ${product.id}
Tên: ${product.name}
Giá: ${product.price}
Danh sách: ${product.list}`);

// Bài 3 — Tính giá giảm
// Cho originalPrice và discount (%), tính và in giá sau giảm ngay trong template literal.
const originalPrice = 100000;
const discount = 10;
const after_discount = originalPrice-(originalPrice/discount);
console.log(`Giá sau giảm là ${after_discount}`);
;

// Bài 4 — Class Product
// Constructor: id, name, price, category
// Tạo method getInfo() dùng template literal
// Tạo method toJSON() trả về plain object
console.log('Bài 4', '==========='.repeat(5))
class Product{
        constructor(id,name,price,category){
            this.id=id;
            this.name=name;
            this.price=price;
            this.category=category;
        }
        // Tạo method getInfo() dùng template literal
        getInfo(){
            return `ID: ${this.id}, NAME: ${this.name}, PRICE: ${this.price}, CATEGORY: ${this.category}`
        }
        //trả về plain object -> trả về  một object mới đơn giản, không có method, chỉ chứa dữ liệu
        toJSON(){
            return{
                id: this.id,
                name: this.name,
                price: this.price,
                category: this.category

            }
        }
}
let product1 = new Product(1, "Laptop", 25000000, "Mới");
console.log(product1.getInfo());
console.log(product1.toJSON());

// Bài 5 — Class User
// Constructor: id, username, role
// Tạo method getProfile() dùng template literal
// Tạo method isAdmin() trả về true/false
// Tạo method toJSON() trả về plain object
// Tạo method fromJSON(data) tạo User từ plain object
class User1 {
    constructor (id,username,role){
        this.id=id;
        this.username=username;
        this.role=role;
    }
    getProfile(){
        return `ID: ${this.id}, USERNAME: ${this.username}, ROLE: ${this.role}`
    }
    isAdmin(){
        return this.role==='admin';
        }
    toJSON(){
        return{
            id: this.id,
            username: this.username,
            role: this.role
        }
    }
    static fromJSON(data){
        return new User1(
            data.id, 
            data.username, 
            data.role
        );
    }
}


let user1 = new User1(1,"Trang","admin");
console.log("1111",user1);
console.log(user1.isAdmin());
console.log(user1.toJSON());

const user2 = {
    id: 2,
    username: 'Lan',
    role: 'user',
};
console.log('Trước khi chuyển thành plain object', user2);
const user3 = User1.fromJSON(user2);
console.log(user3);
console.log("\n===========BTVN===========")
// Bài 1 — Hoàn thiện Product
// Thêm thuộc tính inStock (boolean)
// Method getLabel(): in “✅ Tên — Giá” hoặc “❌ ...” tùy inStock
// Static method fromJSON(data) → tạo Product từ plain object
console.log("BTVN 1 — Hoàn thiện Product");
class ProductComplete {
  constructor(id, name, price, category, inStock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.inStock = inStock;
  }
  getLabel() {
    const status = this.inStock ? "✅" : "❌";
    return `${status} ${this.name} — ${this.price.toLocaleString()} VND`;
  }

  static fromJSON(data) {
    return new ProductComplete(
      data.id,
      data.name,
      data.price,
      data.category,
      data.inStock,
    );
  }
}

const productData = {
  id: 3,
  name: "Giầy Da",
  price: 1550000,
  category: "Thời trang",
  inStock: false,
};

const productComplete = ProductComplete.fromJSON(productData);
console.log(productComplete.getLabel());



// Bài 2 — Class ProductStore
// Constructor nhận mảng products const products = [];
// contructor(products) { this.products = products; }
// getAll() → trả về toàn bộ products
// findById(id) → tìm products theo id dùng find
// findByCategory(cat) → tìm products lọc theo danh mục dùng filter()
console.log("BTVN 2 — Class ProductStore");
class ProductStore {
  constructor(products) {
    this.products = products || [];
  }

  // Trả về toàn bộ products
  getAll() {
    return this.products;
  }

  // Tìm product theo id
  findById(id) {
    return this.products.find(product => product.id === id);
  }

  // Lọc product theo category
  findByCategory(cat) {
    return this.products.filter(product => product.category === cat);
  }
}


const products = [
  { id: 1, name: 'Laptop', category: 'Electronics' },
  { id: 2, name: 'Phone', category: 'Electronics' },
  { id: 3, name: 'Shoes', category: 'Fashion' }
];

const store = new ProductStore(products);

console.log(store.getAll());
// [
//   { id: 1, name: 'Laptop', category: 'Electronics' },
//   { id: 2, name: 'Phone', category: 'Electronics' },
//   { id: 3, name: 'Shoes', category: 'Fashion' }
// ]

console.log(store.findById(2));
// { id: 2, name: 'Phone', category: 'Electronics' }

console.log(store.findByCategory('Electronics'));
// [
//   { id: 1, name: 'Laptop', category: 'Electronics' },
//   { id: 2, name: 'Phone', category: 'Electronics' }
// ]


