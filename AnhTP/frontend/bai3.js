let isString = "Đây là một chuỗi"; // Kiểu dữ liệu chuỗi (string)
let isNumber = 12345; // Kiểu dữ liệu số (number)
let isBoolean = true; // Kiểu dữ liệu boolean (true/false)
let isArray = [1, 2, 3, 4, 5]; // Kiểu dữ liệu mảng (array)
let isObject = { name: "AnhTP", age: 25 }; // Kiểu dữ liệu đối tượng (object)
let x;
let data = null;

console.log(`Kiểu dữ liệu chuỗi: ${isString}`);
console.log(typeof isString); // Kiểm tra kiểu dữ liệu của biến isString

console.log(`Kiểu dữ liệu số: ${isNumber}`);
console.log(typeof isNumber); // Kiểm tra kiểu dữ liệu của biến isNumber

console.log(`Kiểu dữ liệu boolean: ${isBoolean ? "Có" : "Không"}`);
console.log(typeof isBoolean); // Kiểm tra kiểu dữ liệu của biến isBoolean

console.log(`Kiểu dữ liệu mảng: ${isArray.join(", ")}`);
console.log(typeof isArray); // Kiểm tra kiểu dữ liệu của biến isArray

console.log(
  `Kiểu dữ liệu đối tượng: Name - ${isObject.name}, Age - ${isObject.age}`,
);
console.log(typeof isObject); // Kiểm tra kiểu dữ liệu của biến isObject

console.log(`Kiểu dữ liệu undefined: ${x}`);
console.log(typeof x); // Kiểm tra kiểu dữ liệu của biến x

console.log(`Kiểu dữ liệu null: ${data}`);
console.log(typeof data); // Kiểm tra kiểu dữ liệu của biến data

let soA = 25;
let soB = 5;

console.log(`Tổng của ${soA} và ${soB} là: ${soA + soB}`);
console.log(`Hiệu của ${soA} và ${soB} là: ${soA - soB}`);
console.log(`Tích của ${soA} và ${soB} là: ${soA * soB}`);
console.log(`Thương của ${soA} và ${soB} là: ${soA / soB}`);

let bienA = 3;
let bienB = 4;
let kq = bienA * bienB;

console.log("Kết quả : " + bienA + " nhân với " + bienB + " bằng " + kq);
console.log(`Kết quả :`, bienA, `nhân với`, bienB, `bằng`, kq);
console.log(`Kết quả : ${bienA} nhân với ${bienB} bằng ${kq}`); // Sử dụng template literals
console.log(`Kết quả : %s nhân với %s bằng %s`, bienA, bienB, kq); // Sử dụng placeholder
