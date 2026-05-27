// Bài 1 — Mảng số
// const numbers = [1,2,3,4,5];
// Nhân đôi tất cả phần tử (map)
// Lọc số > 3 (filter)
// Tìm số = 4 (find)
console.log("Bài 1: Mảng số...........")
const numbers = [1,2,3,4,5];
const doubled = numbers.map(n => n*2);
console.log (doubled);

const filter = numbers.filter(n => n > 3);
console.log(filter);

const find = numbers.find(n => n === 4);
console.log(find);

// Bài 2 — Object Array
// const users = [
//   { id:1, name:"An",    age:25 },
//   { id:2, name:"Bình",  age:30 },
//   { id:3, name:"Cường", age:20 }
// ];
// Lấy danh sách name
// Lọc user > 25 tuổi
// Tìm user id = 2

console.log ("Bài 2: Object Array.......")
const users = [
  { id:1, name:"An",    age:25 },
  { id:2, name:"Bình",  age:30 },
  { id:3, name:"Cường", age:20 }
];

const names = users.map(user => user.name);
console.log(names);

const Lọc = users.filter(u => u.age > 25);
console.log(Lọc);

const Tìm = users.find(u => u.id === 2);
console.log(Tìm);

//  Bài 3 — Giống API thật (QA hay gặp!)
// const orders = [
//   { id:1, status:"success", total:100 },
//   { id:2, status:"pending", total:200 },
//   { id:3, status:"success", total:150 }
// ];
// Lấy tất cả order có status = "success"
// Lấy danh sách total của toàn bộ orders
// Tìm order có id = 2

console.log("Bài 3: Giống API thật (QA hay gặp!......")

const orders = [
  { id:1, status:"success", total:100 },
  { id:2, status:"pending", total:200 },
  { id:3, status:"success", total:150 }
];

const order = orders.filter(u => u.status === "success");
console.log(order);

const listorder = orders.map(u => u.total);
console.log(listorder);

const findOrder = orders.find(u => u.id === 2 );
console.log(findOrder);