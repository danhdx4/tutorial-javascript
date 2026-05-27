
// bài học: //so sánh  map, fillter, find.
/*map = biến đổi tất cả  |  filter = lọc nhiều  |  find = tìm 1 phần tử đầu tiên khớp*/

// //Ví dụ: 1
// const users = [
//   { name: "An",   age: 25 },
//   { name: "Bình", age: 30 }
// ];
// const names = users.map(u => u.name);
// console.log(names);

// //eg 2:
// const users = [
//   { name: "An",    age: 25 },
//   { name: "Bình",  age: 30 },
//   { name: "Cường", age: 20 }
// ];

// const adults = users.filter(u => u.age >= 25);
// console.log(adults);

// // [{ name:"An",age:25 }, { name:"Bình",age:30 }]


//  Bài 1 — Truy cập phần tử Array
// In ra phần tử đầu tiên
// In ra phần tử cuối cùng
// In ra độ dài của mảng

const fruits = ["Cam", "Táo", "Xoài", "Chuối", "khế"];
    console.log (fruits[0]);
    console.log (fruits [fruits.length-1]);
   // Array.length
    console.log(fruits.length);

// Bài 2 — Truy cập thuộc tính Object
// In ra tên sản phẩm
// In ra giá tiền
// Kiểm tra kiểu dữ liệu của inStock

const product = {
  name: "Laptop",
  price: 15000000,
  inStock: true
};
product.name;
product.price;
console.log(product.name);
console.log(" tên sản phẩm");
console.log("giá tiến");

console.log (typeof product.inStock);

// Bài 3 — map() cơ bản
// Tạo mảng mới cộng thêm 1 điểm cho mỗi bạn
 const scores = [5, 7, 8, 6, 9];
 const cong = scores.map (n => n+1);
 console.log(cong);
 console.log(scores);
// Tạo mảng nhân đôi điểm số
 const nhan = scores.map (n => n*2);
 console.log(nhan);
 console.log(scores);

//  Bài 4 — filter() cơ bản
// Lọc ra những người đủ 18 tuổi trở lên
const ages = [15, 22, 17, 30, 16, 25];
const loc= ages.filter (u=> u>=18)
console.log(loc);

// Lọc ra những người dưới 18 tuổi
const Loc2 =ages.filter(l2 => l2 <18)
console.log(Loc2);



// 📚 Bài 5 — find() cơ bản

// Tìm học sinh tên "Bình"

const students = [
  { name: "An",   score: 8 },
  { name: "Bình", score: 5 },
  { name: "Cúc",  score: 9 }
];
const tim =students.find(t =>t.name==="Bình");
console.log(tim);

// Tìm học sinh có điểm > 8
const tim2 =students.find (t2 => t2.score >8);
console.log(tim2);



console.log("------------BÀI TẬP VỀ NHÀ-----------");
// Bài 1 — Mảng số
// Nhân đôi tất cả phần tử (map)

const numbers = [1,2,3,4,5];
// Nhân đôi tất cả phần tử (map)
const double = numbers.map(n => n*2);
console.log(double);

//Lọc số > 3 (filter)
const locso=numbers.filter(n => n>3);
console.log(locso);

// Tìm số = 4 (find)
const timso = numbers.find(n => n === 4);
console.log(timso);


// Bài 2 — Object Array
// Lọc user > 25 tuổi
const users = [
  { id:1, name:"An",    age:25 },
  { id:2, name:"Bình",  age:30 },
  { id:3, name:"Cường", age:20 }
];
// Lấy danh sách name
const name = users.map(u => u.name);
console.log(name);

// Lọc user > 25 tuổi
const locuser = users.filter( u => u.age >25);;
console.log (locuser);

// Tìm user id = 2
const timuser = users.find( u1 => u1.id===2);
console.log(timuser);

//  Bài 3 — Giống API thật (QA hay gặp!)
console.log ("bài tập 3");



const orders = [
  { id:1, status:"success", total:100 },
  { id:2, status:"pending", total:200 },
  { id:3, status:"success", total:150 }
];
// Lấy tất cả order có status = "success"
const oderstatus =orders.filter( o =>o.status ==="success");
console.log(oderstatus);

// Lấy danh sách total của toàn bộ orders

const total = orders.map(t =>t.total);
console.log(total);
 
// Tìm order có id = 2
const oderID=orders.find (OID => OID.id ===2);
console.log(oderID);
