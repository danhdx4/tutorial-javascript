// 📚 Bài 1 — Truy cập phần tử Array
// const fruits = ["Cam", "Táo", "Xoài", "Chuối"];
// In ra phần tử đầu tiên
// In ra phần tử cuối cùng
// In ra độ dài của mảng
console.log("Bài 1 — Truy cập phần tử Array");
const fruits = ["Cam", "Táo", "Xoài", "Chuối"];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
console.log(fruits.length);

// Bài 2 — Truy cập thuộc tính Object
// const product = {
//   name: "Laptop",
//   price: 15000000,
//   inStock: true
// };
// In ra tên sản phẩm
// In ra giá tiền
// Kiểm tra kiểu dữ liệu của inStock
console.log("Bài 2 — Truy cập thuộc tính Object");
const product = {
  name: "Laptop",
  price: 15000000,
  inStock: true
};
console.log(product.name);
console.log(product.price);
console.log(typeof product.inStock);// kiểm tra  kiểu dữ liệu

// 📚 Bài 3 — map() cơ bản
// const scores = [5, 7, 8, 6, 9];
// Tạo mảng mới cộng thêm 1 điểm cho mỗi bạn
// Tạo mảng nhân đôi điểm số
console.log("Bài 3 — map() cơ bản ");
const scores = [5, 7, 8, 6, 9];
const plush = scores.map(n => ++n);
const double = scores.map(n => n * 2);
console.log("mảng cộng thêm 1 điểm số: ", plush);
console.log("mảng nhân đôi điểm số: ", double);


// 📚 Bài 4 — filter() cơ bản
// const ages = [15, 22, 17, 30, 16, 25];
// Lọc ra những người đủ 18 tuổi trở lên
// Lọc ra những người dưới 18 tuổi
console.log("Bài 4 — filter() cơ bản");
const ages = [15, 22, 17, 30, 16, 25];
const adult = ages.filter(u => u >= 18);// Lọc ra những người đủ 18 tuổi trở lên
const chill = ages.filter(u => u <18);
console.log("Những người đủ 18 tuổi trở lên: ",adult);
console.log("Những người dưới 18 tuổi:" ,chill);


// Bài 5 — find() cơ bản
// const students = [
//   { name: "An",   score: 8 },
//   { name: "Bình", score: 5 },
//   { name: "Cúc",  score: 9 }
// ];
// Tìm học sinh tên "Bình"
// Tìm học sinh có điểm > 8
console.log("Bài 5","-----------".repeat(5));
const students = [
  { name: "An",   score: 8 },
  { name: "Bình", score: 5 },
  { name: "Cúc",  score: 9 }
];
const student= students.find(u => u.name === "Bình" )// Tìm học sinh tên "Bình"
// Kiểm tra 
if (student) {
  console.log(student.name);
}else{
  console.log("Không tồn tại")
}

const point = students.find(p => p.score > 8);
// if (point) {
//   console.log(point.score);
// }else{
//   console.log("Không tồn tại")
// }
console.log(point.score)

console.log("=======Bài tập nâng cao=======\n")
//Bài 1 — Mảng số
// const numbers = [1,2,3,4,5];
// Nhân đôi tất cả phần tử (map)
// Lọc số > 3 (filter)
// Tìm số = 4 (find)
console.log("Bài 1",'-----'.repeat(5));
const numbers = [1,2,3,4,5];
const double_2= numbers.map(n => n * 2);// Nhân đôi tất cả phần tử (map)
const filter_number = numbers.filter(n=>n>3);// Lọc số > 3 (filter)
const find_number = numbers.find(n=>n===4);// Tìm số = 4 (find)
console.log("Mảng ban đầu: [1,2,3,4,5]");
console.log("Nhân đôi tất cả phần tử: ",double_2);
console.log("Lọc số > 3: ",filter_number);
console.log("Tìm số = 4: ",find_number);

// Bài 2 — Object Array
// const users = [
//   { id:1, name:"An",    age:25 },
//   { id:2, name:"Bình",  age:30 },
//   { id:3, name:"Cường", age:20 }
// ];
// Lấy danh sách name
// Lọc user > 25 tuổi
// Tìm user id = 2
console.log("Bài 2",'-----'.repeat(5));
const users = [
  { id:1, name:"An",    age:25 },
  { id:2, name:"Bình",  age:30 },
  { id:3, name:"Cường", age:20 }
];
const list_name = users.map(n=>n.name);// Lấy danh sách name
const age = users.filter(n=>n.age>25);// Lọc user > 25 tuổi
const user_id_2 = users.find(n=>n.id===2);// Tìm user id = 2
console.log("Danh sách user: \n id:1, name:An,    age:25 \n id:2, name:Bình,  age:30 \n id:3, name:Cường, age:20")
console.log("Lấy danh sách name: ",list_name);
console.log("Lọc user > 25 tuổi: ",age);//TH: Chỉ lấy tên user > 25 tuổi console.log("Lọc user > 25 tuổi: ",age.map(n=>n.name));
console.log("Lấy danh sách name: ",user_id_2);

// Bài 3 — Giống API thật (QA hay gặp!)
// const orders = [
//   { id:1, status:"success", total:100 },
//   { id:2, status:"pending", total:200 },
//   { id:3, status:"success", total:150 }
// ];
// Lấy tất cả order có status = "success"
// Lấy danh sách total của toàn bộ orders
// Tìm order có id = 2
console.log("Bài 3",'-----'.repeat(5));
const orders = [
  { id:1, status:"success", total:100 },
  { id:2, status:"pending", total:200 },
  { id:3, status:"success", total:150 }
];
const list_success = orders.filter(s=>s.status==="success");
const list_orders = orders.map(o=>o.total);
const order_id_2 = orders.find(i=>i.id ==2);
console.log("1) Lấy tất cả order có status = success: ", list_success);
console.log("2) Lấy danh sách total của toàn bộ orders: ", list_orders);
console.log("3) Tìm order có id = 2:  ", order_id_2);




