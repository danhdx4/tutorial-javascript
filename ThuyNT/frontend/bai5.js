console.log("123");

function greet(name) {
    console.log("Hello " + name);
}

greet("Danh");


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
    console.log("Da vao case " + role);
}

// function đơn giản, trả về nhanh
const sum = (a, b) => a + b;

function sum2(a, b) {
    return a + b;
}
console.log(sum(1, 2));

const dientich = (w, h) => w * h;
console.log(dientich(2, 3));


// Bài 1 — Convert sang Arrow
// function multiply(a, b) {
//   return a * b;
// }
// 👉 Viết lại bằng arrow function
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

// Bài 2 — Convert sang Declaration
// const divide = (a, b) => a / b;
// // 👉 Viết lại bằng function declaration
function divide(a, b) {
    return a / b;
}
console.log(divide(6, 4));

// Bài 3 — Viết function mới
// Viết function nhận vào name, trả về chuỗi "Hello <name>"
function hello(name) {
    console.log("Hello " + name);
}

hello("Thuy")
// Bai 4 - const numbers = [1,2,3,4];
// 👉 Tạo array bình phương các số

const numbers = [1, 2, 3, 4];

function square(a) {
    return a * a;
}

for (let i = 0; i < numbers.length; i++){
    console.log(square(numbers[i]));
}