function display_log() {
  console.log("-------------------");
}

// function greet(name) {
//   console.log(`Hello ${name}!`);
// }

// greet("AnhTP"); // Hello AnhTP!
// greet("Phương Anh"); // Hello Phương Anh!

// display_log();
// function add(a, b) {
//   return a + b;
// }
// console.log(add(3, 5)); // 8
// console.log(add(3, -5)); // -2

// display_log();
// function isEven(num) {
//   return num % 2 === 0;
// }
// console.log(isEven(1)); // false
// console.log(isEven(0)); // true

// display_log();
// function isOdd(num) {
//   return num % 2 !== 0;
// }
// console.log(isOdd(1)); // true
// console.log(isOdd(0)); // false

// display_log();
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120

// sayHi();
// function sayHi() {
//   console.log("Hi!");
// }
// Output: Hi!

let role = "admin";
switch (role) {
  case "admin":
    displayLog("Quản trị");
    break;
  case "user":
    displayLog("Người dùng");
    break;
  default:
    displayLog("Khách");
}

function displayLog(role) {
  console.log(`Đã vào case ${role}`);
}

console.log(sum(3, 5)); // 8
// const sum = (a, b) => a + b;
// console.log(sum(3, 5)); // 8

function sum(a, b) {
  return a + b;
}

const dientich = (r, d) => r * d;
console.log(dientich(4, 5)); // 20

const dientichHCN = (r, d) => {
  console.log(`Diện tích HCN: ${r * d}`);
};
dientichHCN(2, 5); // Diện tích HCN: 10
