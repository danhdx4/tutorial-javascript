console.log("---Bai tap don gian---");
// Truy cập phần tử Array

const fruits = ["Cam", "Táo", "Xoài", "Chuối"]
console.log(fruits[0]); // In ra phần tử đầu tiên
console.log(fruits.length); // In ra phần tử cuối cùng
console.log(fruits[fruits.length]); // In ra độ dài của mảng

// Bài 2 — Truy cập thuộc tính Object

const product = {
  name: "Laptop",
  price: 15000000,
  inStock: true
};
console.log(product.name); // In ra tên sản phẩm
console.log(product.price); // In ra giá tiền
console.log(typeof(product.inStock)); // Kiểm tra kiểu dữ liệu của inStock

// Bài 3 — map() cơ bản
// Tạo mảng mới cộng thêm 1 điểm cho mỗi bạn

const scores = [5, 7, 8, 6, 9];
const result = scores.map(a => a+1);
console.log(result);

// Tạo mảng nhân đôi điểm số
const result1 = scores.map(n => n*2);
console.log(result1);

// Bài 4 — filter() cơ bản
// Lọc ra những người đủ 18 tuổi trở lên

const ages = [15, 22, 17, 30, 16, 25];
const ketQua = ages.filter(a => a >= 18);
console.log(ketQua);

// Lọc ra những người dưới 18 tuổi
const ketQua1 = ages.filter(a => a < 18);
console.log(ketQua1);

// Bài 5 — find() cơ bản
// Tìm học sinh tên "Bình"
const students = [
  { name: "An",   score: "8" },
  { name: "Bình", score: "5" },
  { name: "Cúc",  score: "9" }
];
const timTen = students.filter(s => s.name === "Bình").map(s => s.name);
console.log(timTen);

// Tìm học sinh có điểm > 8
const timTen1 = students.filter(s => s.score > 8).map(s => s.name);
console.log(timTen1);

console.log("---Bai tap nang cao---");
console.log("+ Bai 1");
// Bài 1 — Mảng số
// Nhân đôi tất cả phần tử (map)

const number = [1,2,3,4,5];
const muptily = number.map(n => n*2);
console.log(muptily);

// Lọc số > 3 (filter)
const locSo3 = number.filter(n => n > 3);
console.log(locSo3);

// Tìm số = 4 (find)
const timSo = number.find(n => n = 4);
console.log(timSo);

console.log("+ Bai 2");
// Bài 2 — Object Array
// Lấy danh sách name

const users = [
  { id:1, name:"An",    age:25 },
  { id:2, name:"Bình",  age:30 },
  { id:3, name:"Cường", age:20 }
];
const timName = users.map(users => users.name);
console.log(timName);

// Lọc user > 25 tuổi
const timUser = users.filter(users => users.age > 25);
console.log(timUser);

// Tìm user id = 2
const timUser1 = users.filter(users => users.id === 2);
console.log(timUser1);

console.log("+ Bai 3");
// Bài 3 — Giống API thật (QA hay gặp!)
// Lấy tất cả order có status = "success"

const orders = [
  { id:1, status:"success", total:100 },
  { id:2, status:"pending", total:200 },
  { id:3, status:"success", total:150 }
];
const all = orders.filter(orders => orders.status === "success");
console.log(all);

// Lấy danh sách total của toàn bộ orders
const danhSach = orders.map(orders => orders.total);
console.log(danhSach);

// Tìm order có id = 2
const timOrder = orders.find(orders => orders.id = 2);
console.log(timOrder);
