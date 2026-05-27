
//Bai 1
const fruits = ["Cam", "Táo", "Xoài", "Chuối"];
// In ra phần tử đầu tiên
// In ra phần tử cuối cùng
// In ra độ dài của mảng

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);

// Bai 2
const product = {
    name: "Laptop",
    price: 15000000,
    inStock: true
};
// In ra tên sản phẩm
// In ra giá tiền
// Kiểm tra kiểu dữ liệu của inStock
console.log(product.name);
console.log(product.price);
console.log(typeof product.inStock);

//Bai 3
const scores = [5, 7, 8, 6, 9];
// Tạo mảng mới cộng thêm 1 điểm cho mỗi bạn
// Tạo mảng nhân đôi điểm số
const up = scores.map(n => n + 1);
console.log(up);


const nhan = scores.map(n => n * 2);
console.log(nhan);

//Bai 4
const ages = [15, 22, 17, 30, 16, 25];
// Lọc ra những người đủ 18 tuổi trở lên
// Lọc ra những người dưới 18 tuổi
const loc1 = ages.filter(u => u > 18)
console.log(loc1);

const loc2 = ages.filter(u => u < 18)
console.log(loc2);

//Bai 5 
const students = [
    { name: "An", score: 8 },
    { name: "Bình", score: 5 },
    { name: "Cúc", score: 9 }
];
// Tìm học sinh tên "Bình"
// Tìm học sinh có điểm > 8
const find1 = students.find(u => u.name === "Bình")
console.log(find1);

const find2 = students.find(u => u.score > 8)
console.log(find2);

//BTVN
// Bai 1
const numbers = [1, 2, 3, 4, 5];
// Nhân đôi tất cả phần tử (map)
// Lọc số > 3 (filter)
// Tìm số = 4 (find)
const doubled = numbers.map(n => n * 2);

console.log(doubled);
const filter1 = doubled.filter(u => u > 3);
console.log(filter1);
const find4 = doubled.find(u => u === 4);
console.log(find4);

//Bai 2
const users = [
  { id:1, name:"An",    age:25 },
  { id:2, name:"Bình",  age:30 },
  { id:3, name:"Cường", age:20 }
];
// Lấy danh sách name
// Lọc user > 25 tuổi
// Tìm user id = 2
const names = users.map(u => u.name)
console.log(names);

const ageUser = users.filter(u => u.age > 25)
console.log(ageUser);

const userId = users.find(u => u.id === 2)
console.log(userId);

//Bài 3 — Giống API thật (QA hay gặp!)
const orders = [
  { id:1, status:"success", total:100 },
  { id:2, status:"pending", total:200 },
  { id:3, status:"success", total:150 }
];
// Lấy tất cả order có status = "success"
// Lấy danh sách total của toàn bộ orders
// Tìm order có id = 2
const successOrder = orders.filter(u => u.status === "success")
console.log(successOrder);

const totalOrder = orders.map(u => u.total)
console.log(totalOrder);

const OrderId = orders.find(u => u.id === 2)
console.log(OrderId);





