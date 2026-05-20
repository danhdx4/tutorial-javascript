// 📚 Bài 3 — Chẵn hay Lẻ?
// Viết arrow function nhận 1 số, 
// trả về chuỗi "Chẵn" hoặc "Lẻ".

// Cách 1: Function Declaration

function chanle(n) {
  return n % 2 === 0 ? "Chẵn" : "Lẻ";
}
console.log(chanle(10));

// Cách 2: Arrow Function (ngắn hơn)
const chanle1 = n => n % 2 === 0 ? "Chẵn" : "Lẻ";
console.log(chanle1(10));

// 📚 Bài 4 — Lời chào cá nhân hoá
// Viết function declaration 
// nhận name và role, in ra lời chào.

// Cách 1: Function Declaration
function chaoMung(name, role) {
  return `Chào ${name} vai trò của bạn là ${role}`;
}
console.log(chaoMung("Vân Anh !", "QA"));

// Cách 2: Arrow Function (ngắn hơn)
const chaoMung1 = (name, role) => `Chào ${name} vai trò của bạn là ${role}`;
console.log(chaoMung1("Vân Anh !", "QA"));

// Bài 5 — Tìm số lớn nhất
// Viết arrow function nhận mảng số, trả về số lớn nhất. 
// (Gợi ý: dùng Math.max(...arr))

// Cách 1: Function Declaration
function timMax(arr) {
  return Math.max(...arr);
}
console.log(timMax([3, 12, 1, 9, 5]));

// Cách 2: Arrow Function (ngắn hơn)
const timMax2 = arr => Math.max(...arr);
console.log(timMax2([3, 12, 1, 9, 5]));


console.log("Bài tập thực hành.............")
// Bài 1 — Convert sang Arrow
// function multiply(a, b) {
//   return a * b;
// }
// 👉 Viết lại bằng arrow function

console.log("Bài 1: Convert sang Arrow")
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));


// Bài 2 — Convert sang Declaration
// const divide = (a, b) => a / b;
// // 👉 Viết lại bằng function declaration

console.log("Bài 2: Convert sang Declaration")
function divide(a, b) {
 return a / b;
 }
console.log(divide(20, 5));

//  Bài 3 — Viết function mới
// Viết function nhận vào name, trả về chuỗi "Hello <name>"

console.log("Bài 3: Viết function mới")
function gioithieu(name) {
  return `Hello ${name} `;
}
console.log(gioithieu("Vân Anh"));

// Bài 4 — Array + Arrow
// const numbers = [1,2,3,4];
// // 👉 Tạo array bình phương các số

console.log("Bài 4: Array + Arrow")
const numbers = [1, 2, 3, 4];
const square = nums => nums.map(n => n * n);
console.log(square(numbers));