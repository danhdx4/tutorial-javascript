function display_log() {
  console.log("-------------------");
}

// // function greet(name) {
// //   console.log(`Hello ${name}!`);
// // }

// // greet("AnhTP"); // Hello AnhTP!
// // greet("Phương Anh"); // Hello Phương Anh!

// // display_log();
// // function add(a, b) {
// //   return a + b;
// // }
// // console.log(add(3, 5)); // 8
// // console.log(add(3, -5)); // -2

// // display_log();
// // function isEven(num) {
// //   return num % 2 === 0;
// // }
// // console.log(isEven(1)); // false
// // console.log(isEven(0)); // true

// // display_log();
// // function isOdd(num) {
// //   return num % 2 !== 0;
// // }
// // console.log(isOdd(1)); // true
// // console.log(isOdd(0)); // false

// // display_log();
// // function factorial(n) {
// //   if (n === 0 || n === 1) {
// //     return 1;
// //   }
// //   return n * factorial(n - 1);
// // }
// // console.log(factorial(5)); // 120

// // sayHi();
// // function sayHi() {
// //   console.log("Hi!");
// // }
// // Output: Hi!

// let role = "admin";
// switch (role) {
//   case "admin":
//     displayLog("Quản trị");
//     break;
//   case "user":
//     displayLog("Người dùng");
//     break;
//   default:
//     displayLog("Khách");
// }

// function displayLog(role) {
//   console.log(`Đã vào case ${role}`);
// }

// console.log(sum(3, 5)); // 8
// // const sum = (a, b) => a + b;
// // console.log(sum(3, 5)); // 8

// function sum(a, b) {
//   return a + b;
// }

//  Bài 1 — Tính tổng
// Viết function declaration nhận 2 số, trả về tổng.

function tinhTong(a, b) {
  console.log(`Tổng ${a} + ${b} = ${a + b}`);
}

tinhTong(3, 5); // 8
tinhTong(-2, 4); // 2
display_log();
// Bài 2 — Diện tích hình chữ nhật
// Viết arrow function nhận width, height, trả về diện tích.

const dientichHCN = (r, d) => {
  console.log(`Diện tích HCN size ${r} và ${d} : ${r * d}`);
};
dientichHCN(2, 5); // Diện tích HCN: 10
display_log();
// 📚 Bài 3 — Chẵn hay Lẻ?
// Viết arrow function nhận 1 số, trả về chuỗi "Chẵn" hoặc "Lẻ".

const chanLe = (Numb) => (Numb % 2 === 0 ? "Chẵn" : "Lẻ");
console.log(chanLe(4));
console.log(chanLe(7));
display_log();
// 📚 Bài 4 — Lời chào cá nhân hoá
// Viết function declaration nhận name và role, in ra lời chào.

function chaoMung(name, role) {
  console.log(`Chào ${name}! Vai trò của bạn là ${role}.`);
}

chaoMung("Nam", "Dev");

display_log();
// Bài 5 — Tìm số lớn nhất
// Viết arrow function nhận mảng số, trả về số lớn nhất. (Gợi ý: dùng Math.max(...arr))

// Kết quả mong đợi:
// timMax([3, 9, 1, 7]); // 9
// timMax([-2, 0, 5]); // 5

const timMax = (arr) => Math.max(...arr);
console.log(timMax([3, 9, 1, 7]));
console.log(timMax([-2, 0, 5]));

display_log();

const timMin = (arr) => Math.min(...arr);
console.log(timMin([3, 9, 1, 7]));
console.log(timMin([-2, 0, 5]));
