console.log("===Tinh dien tich===");
const dientich = (width, height) => width * height;
console.log(dientich(2, 3));

console.log("===chan hay le===");
//Cách 1: Function Declaration
function is_even(n) {
  if (n % 2 == 0) {
    return "chẵn";
  } else {
    return "lẻ";
  }
}
console.log(is_even(5));
//Cách 2: Arrow Function
const is_even_1 = (n) => (n % 2 == 0 ? "chẵn" : "lẻ");
console.log(is_even_1(10));

console.log("===Lời chào cá nhân hóa===");
//Cách 1: Function Declaration
function hello(name, role) {
  console.log(`Chào ${name}! Vai trò của bạn là ${role}`);
}
hello("Quynh", "QA");
//Cách 2: Arrow Function
const hello_1 = (name_1, role_1) =>
  `Chào ${name_1}! Vai trò của bạn là ${role_1}`;
hello("Quynh", "QA");

console.log("===Tìm số lớn nhât===");
//Cách 1: Function Declaration
function Max(arr) {
  return Math.max(...arr);
}
console.log(Max([3, -9, 1, 999]));
//Cách 2: Arrow Function
const timMax = (arr) => Math.max(...arr);
console.log(timMax([3, 9, 1, 7]));
