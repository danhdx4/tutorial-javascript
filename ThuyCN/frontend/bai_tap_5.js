// Bài tập thực hành
// bài 1: Convert sang Arrow
// function multiply(a, b) {
//   return a * b;
// }

const multiply = (a,b) => a * b;

// bài 2: Convert sang Declaration
// const divide = (a, b) => a / b;

function divide (a,b){
    return a/b;
}

// Bài 3: Viết function nhận vào name, trả về chuỗi "Hello <name>"
function displayLog(name) {
    console.log("Hello " + name);
}
let name = "Thuy";
displayLog(name)

// Bài 4: Tạo array bình phương các số
// Cách đơn giản:
let numbers = (a,b,c,d) => [a**2, b**2, c**2, d**2];
console.log(numbers(1,2,3,4));

// Cách phức tạp: 
let number23 = (a) => {
    const bp = [];
    for (let i = 0; i < a.length; i++) {
        bp[i] = a[i]**2;
    }
    return bp;
};
console.log(number23([2, 3, 6]));

// Bài tập đơn giản
// Viết function declaration nhận 2 số, trả về tổng.
function tinhTong(a, b) {
  return a + b;
}
console.log(tinhTong(2,3));

// Viết arrow function nhận width, height, trả về diện tích.
let dienTich = (width,height) => width * height;
console.log(dienTich(2,3));
    
// Viết arrow function nhận 1 số, trả về chuỗi "Chẵn" hoặc "Lẻ".
let a = 12
let chanLe = (a) => a % 2
if (chanLe(a) === 0) {
console.log("Chẵn");
} else {
console.log("Lẻ");
}

// Viết function declaration nhận name và role, in ra lời chào.
function chaoMung(name,role) {
    console.log("Chào mừng " + name + "! Vai trò của bạn là " + role + ".");
}
chaoMung("Thúy","tester")

// Viết arrow function nhận mảng số, trả về số lớn nhất. (Gợi ý: dùng Math.max(...arr))
let timMax = (a) => Math.max(...(a));
console.log(timMax([-1,7,2,9]));








