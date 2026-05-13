//Bài học buổi 3: Toán tử trong JavaScript
let a = 10;
let b = 5;
 
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0

console.log("--------------------------------------------------");

let num = 7;
if (num % 2 === 0) {
     console.log("Số chẵn");
} else {
     console.log("Số lẻ");
}
for (let i = 1; i <= 10; i++) {
   if (i % 3 === 0) {
        console.log(i);
   }
}

console.log("--------------------------------------------------");

let name = "Anh";
console.log("Hello " + name); // Hello Anh

console.log("--------------------------------------------------");

let A = true;
let B = false;

console.log(`A AND B: ${A && B}`); // Kết quả: false
console.log(`A OR B: ${A || B}`); // Kết quả: true
console.log(`NOT A: ${!A}`); // Kết quả: false
console.log(`NOT B: ${!B}`); // Kết quả: true

console.log("----".repeat(20)); // In ra dấu gạch ngang để phân cách

// Bài tập 3: 
/**  Tạo các biến:
 Họ tên (string), 
 Tuổi (number, và tính tuổi =(2026 - năm sinh)
 Số năm kinh nghiệm (number) 
 Có biết automation hay không (boolean) 
 */ 
    /** Yêu cầu:
     Phân loại 
    < 1 năm → "Fresher"
    1–3 năm → "Junior QA"
    3–5 năm → "Middle QA"
    >5 năm → "Senior QA"
    Kiểm tra điều kiện tuyển Senior Automation QA 
    Kinh nghiệm ≥ 3 năm
    Biết automation = true
    Tuổi ≤ 35
    Nếu thỏa mãn các yêu cầu trên:→ "Đủ điều kiện Senior Automation QA"
    Ngược lại:→ "Chưa đủ điều kiện“
    In toàn bộ thông tin
    */

let fullName = "Ngoc Anh";
let birthYear = 2000;
let experienceYears = 4;
let knowsAutomation = true;
let currentYear = 2026;
let age = currentYear - birthYear;      

console.log("Họ tên: " + fullName);
console.log("Tuổi: " + age);
console.log("Số năm kinh nghiệm: " + experienceYears);
console.log("Có biết automation: " + (knowsAutomation ? "Có" : "Không"));       

if (experienceYears < 1) {
    console.log("Phân loại: Fresher");
} else if (experienceYears >= 1 && experienceYears <= 3) {
    console.log("Phân loại: Junior QA");
} else if (experienceYears > 3 && experienceYears <= 5) {
    console.log("Phân loại: Middle QA");
} else {
    console.log("Phân loại: Senior QA");
}           

if (experienceYears >= 3 && knowsAutomation && age <= 35) {
    console.log("Đủ điều kiện Senior Automation QA");
} else {
    console.log("Chưa đủ điều kiện");
}
