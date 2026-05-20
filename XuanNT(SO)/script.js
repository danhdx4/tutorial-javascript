console.log("/************** Bài 5.1 */");
// bài 1: Convert sang Arrow
// function multiply(a, b) {
//   return a * b;
// }
const multiply = (a, b) => a * b;
console.log("Hàm multiply có giá trị là: " + multiply(2, 5));

console.log("/************** Bài 5.2 */");
// Convert sang Declaration
// const divide = (a, b) => a / b;
function divide(a, b) {
  return a / b;
}
console.log("Hàm divide có giá trị là: " + divide(10, 2));

console.log("/************** Bài 5.3 */");
// Viết function mới
// Viết function nhận vào name, trả về chuỗi "Hello <name>"
function name(name) {
  console.log(`Hello ${name}`);
}
name("XuanNT");

console.log("/************** Bài 5.4 */");
// Array + Arrow
// Tạo array bình phương các số
// const numbers = [1,2,3,4];
const numbers = [1, 2, 3, 4];
const result = numbers.map((x) => x * x);
console.log(`Kết quả bình phương của mảng là: [${result}]`);
