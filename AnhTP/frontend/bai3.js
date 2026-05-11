// let isString = "Đây là một chuỗi"; // Kiểu dữ liệu chuỗi (string)
// let isNumber = 12345; // Kiểu dữ liệu số (number)
// let isBoolean = true; // Kiểu dữ liệu boolean (true/false)
// let isArray = [1, 2, 3, 4, 5]; // Kiểu dữ liệu mảng (array)
// let isObject = { name: "AnhTP", age: 25 }; // Kiểu dữ liệu đối tượng (object)
// let x;
// let data = null;

// console.log(`Kiểu dữ liệu chuỗi: ${isString}`);
// console.log(typeof isString); // Kiểm tra kiểu dữ liệu của biến isString

// console.log(`Kiểu dữ liệu số: ${isNumber}`);
// console.log(typeof isNumber); // Kiểm tra kiểu dữ liệu của biến isNumber

// console.log(`Kiểu dữ liệu boolean: ${isBoolean ? "Có" : "Không"}`);
// console.log(typeof isBoolean); // Kiểm tra kiểu dữ liệu của biến isBoolean

// console.log(`Kiểu dữ liệu mảng: ${isArray.join(", ")}`);
// console.log(typeof isArray); // Kiểm tra kiểu dữ liệu của biến isArray

// console.log(
//   `Kiểu dữ liệu đối tượng: Name - ${isObject.name}, Age - ${isObject.age}`,
// );
// console.log(typeof isObject); // Kiểm tra kiểu dữ liệu của biến isObject

// console.log(`Kiểu dữ liệu undefined: ${x}`);
// console.log(typeof x); // Kiểm tra kiểu dữ liệu của biến x

// console.log(`Kiểu dữ liệu null: ${data}`);
// console.log(typeof data); // Kiểm tra kiểu dữ liệu của biến data

// let soA = 25;
// let soB = 5;

// console.log(`Tổng của ${soA} và ${soB} là: ${soA + soB}`);
// console.log(`Hiệu của ${soA} và ${soB} là: ${soA - soB}`);
// console.log(`Tích của ${soA} và ${soB} là: ${soA * soB}`);
// console.log(`Thương của ${soA} và ${soB} là: ${soA / soB}`);

// let bienA = 3;
// let bienB = 4;
// let kq = bienA * bienB;

// console.log("Kết quả : " + bienA + " nhân với " + bienB + " bằng " + kq);
// console.log(`Kết quả :`, bienA, `nhân với`, bienB, `bằng`, kq);
// console.log(`Kết quả : ${bienA} nhân với ${bienB} bằng ${kq}`); // Sử dụng template literals
// console.log(`Kết quả : %s nhân với %s bằng %s`, bienA, bienB, kq); // Sử dụng placeholder

let bienA = 14;
let bienB = 5;

console.log(bienA + bienB); // Kết quả: 15
console.log(bienA - bienB); // Kết quả: 5
console.log(bienA * bienB); // Kết quả: 50
console.log(bienA / bienB); // Kết quả: 2
console.log(bienA % bienB); // Kết quả: 0 (phép chia lấy dư)

console.log("----".repeat(20)); // In ra dấu gạch ngang để phân cách

let bienName = "AnhTP";
console.log(`Hello ${bienName}`); // Kết quả: Xin chào, tôi là AnhTP
console.log("5" + 5); // Kết quả: "55" (phép cộng chuỗi)

console.log("----".repeat(20)); // In ra dấu gạch ngang để phân cách

let A = true;
let B = false;

console.log(`A AND B: ${A && B}`); // Kết quả: false
console.log(`A OR B: ${A || B}`); // Kết quả: true
console.log(`NOT A: ${!A}`); // Kết quả: false
console.log(`NOT B: ${!B}`); // Kết quả: true

console.log("----".repeat(20)); // In ra dấu gạch ngang để phân cách

// Tạo các biến:
// Họ tên (string),
// Tuổi (number, và tính tuổi =(2026 - năm sinh)
// Số năm kinh nghiệm (number)
// Có biết automation hay không (boolean)
// Sau đó in ra thông tin của các biến trên bằng cách sử dụng console.log và template literals.
// Yêu cầu:
//  Phân loại
// < 1 năm → "Fresher"
// 1–3 năm → "Junior QA"
// 3–5 năm → "Middle QA"
// >5 năm → "Senior QA"
// Kiểm tra điều kiện tuyển Senior Automation QA
// Kinh nghiệm ≥ 3 năm
// Biết automation = true
// Tuổi ≤ 35
// Nếu thỏa mãn các yêu cầu trên:→ "Đủ điều kiện Senior Automation QA"
// Ngược lại:→ "Chưa đủ điều kiện“
// In toàn bộ thông tin

let myName1 = "Trần Phương Anh trong quá khứ"; // Kiểu dữ liệu chuỗi (string)
let myYearOfBirth1 = 2000; // Kiểu dữ liệu số (number)
let myAge1 = 2026 - myYearOfBirth1; // Kiểu dữ liệu số (number)
let myExperienceYears1 = 3; // Kiểu dữ liệu số (number)
let myKnowsAutomation1 = false; // Kiểu dữ liệu boolean (boolean)

console.log("   Hồ sơ ứng viên   "); // In ra dấu gạch ngang để phân cách

console.log(`Họ tên : ${myName1}`);
console.log(`Tuổi : ${myAge1}`);
console.log(`Số năm kinh nghiệm : ${myExperienceYears1}`);
console.log(`Có biết automation : ${myKnowsAutomation1 ? "Có" : "Không"}`);

console.log("----".repeat(20)); // In ra dấu gạch ngang để phân cách
console.log("Đánh giá ứng viên : " + myName1); // In ra dấu gạch ngang để phân cách

if (myExperienceYears1 < 1) {
  console.log("Phân loại: Fresher");
} else if (myExperienceYears1 >= 1 && myExperienceYears1 <= 3) {
  console.log("Phân loại: Junior QA");
} else if (myExperienceYears1 > 3 && myExperienceYears1 <= 5) {
  console.log("Phân loại: Middle QA");
} else {
  console.log("Phân loại: Senior QA");
}

if (myExperienceYears1 >= 3 && myKnowsAutomation1 && myAge1 <= 35) {
  console.log("Đủ điều kiện Senior Automation QA");
} else {
  console.log("Chưa đủ điều kiện");
}

console.log("----".repeat(20)); // In ra dấu gạch ngang để phân cách

let myName2 = "Trần Phương Anh hiện tại"; // Kiểu dữ liệu chuỗi (string)
let myYearOfBirth2 = 1990; // Kiểu dữ liệu số (number)
let myAge2 = 2026 - myYearOfBirth2; // Kiểu dữ liệu số (number)
let myExperienceYears2 = 13; // Kiểu dữ liệu số (number)
let myKnowsAutomation2 = true; // Kiểu dữ liệu boolean (boolean)

console.log("   Hồ sơ ứng viên   "); // In ra dấu gạch ngang để phân cách

console.log(`Họ tên : ${myName2}`);
console.log(`Tuổi : ${myAge2}`);
console.log(`Số năm kinh nghiệm : ${myExperienceYears2}`);
console.log(`Có biết automation : ${myKnowsAutomation2 ? "Có" : "Không"}`);

console.log("----".repeat(20)); // In ra dấu gạch ngang để phân cách
console.log("Đánh giá ứng viên : " + myName2); // In ra dấu gạch ngang để phân cách

if (myExperienceYears2 < 1) {
  console.log("Phân loại: Fresher");
} else if (myExperienceYears2 >= 1 && myExperienceYears2 <= 3) {
  console.log("Phân loại: Junior QA");
} else if (myExperienceYears2 > 3 && myExperienceYears2 <= 5) {
  console.log("Phân loại: Middle QA");
} else {
  console.log("Phân loại: Senior QA");
}

if (myExperienceYears2 >= 3 && myKnowsAutomation2 && myAge2 <= 35) {
  console.log("Đủ điều kiện Senior Automation QA");
} else {
  console.log("Chưa đủ điều kiện");
}
