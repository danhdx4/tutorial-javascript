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



let student = {
  info: {
    name: "Trần Thị B",
    age: 19,
    class: "12A1",
  },
  scores: {
    math: 9,
    physics: 7.5,
    chemistry: 4,
  },
  attendance: {
    totalDays: 180,
    absentDays: 12, // ngày vắng mặt
  },
  behavior: "good", // good | average | bad
  extracurricular: true,
};
/**Dữ liệu không hợp lệ
age <= 0 hoặc age > 100
scores <= 0 hoặc > 10
absentDays > totalDays
Behavior không thuộc: good, average, bad --> dùng includes() để kiểm tra, vd: ["good", "average", "bad"].includes(behavior)
*/
if (student.info.age <= 0 || student.info.age > 100) {
    console.log("Dữ liệu không hợp lệ: Tuổi không hợp lệ");
}   else if (student.scores.math < 0 || student.scores.math > 10 ||        
              student.scores.physics < 0 || student.scores.physics > 10 ||  
                student.scores.chemistry < 0 || student.scores.chemistry > 10) {
    console.log("Dữ liệu không hợp lệ: Điểm số không hợp lệ");
}   else if (student.attendance.absentDays > student.attendance.totalDays) {
    console.log("Dữ liệu không hợp lệ: Số ngày vắng mặt không hợp lệ");
}
else if (!["good", "average", "bad"].includes(student.behavior)) {
    console.log("Dữ liệu không hợp lệ: Hạnh kiểm không hợp lệ");
} else {
    console.log("Dữ liệu hợp lệ");
}                           
/**
 * 2. tính điểm trung bình và in ra "Average score: xx", làm tròn tới 2 chữ số sau dấu phẩy (dùng toFixed)
 */
if (student.scores.math >= 0 && student.scores.math <= 10 &&
    student.scores.physics >= 0 && student.scores.physics <= 10 &&
    student.scores.chemistry >= 0 && student.scores.chemistry <= 10) {          
    let averageScore = (student.scores.math + student.scores.physics + student.scores.chemistry) / 3;
    console.log("Average score: " + averageScore.toFixed(2));
}   else {
    console.log("Không thể tính điểm trung bình do có điểm số không hợp lệ");
}       
/**
 * 3. Xếp loại học lực
avg > 8: Giỏi
avg >= 6.5: Khá
avg >= 5: Trung bình
Còn lại: Yếu
 */
let averageScore = (student.scores.math + student.scores.physics + student.scores.chemistry) / 3;
if (averageScore > 8) {
    console.log("Xếp loại học lực: Giỏi");          
} else if (averageScore >= 6.5) {
    console.log("Xếp loại học lực: Khá");
} else if (averageScore >= 5) {
    console.log("Xếp loại học lực: Trung bình");
}   else {
    console.log("Xếp loại học lực: Yếu");
}           

/**
 * 4. Cảnh báo học lệch môn
 * Nếu math >= 9 nhưng chemistry < 5 --> in ra "Strong in Math, weak in Science"
 * Nếu extracurricular == false và attendanceRate < 85 --> in ra "Needs more participation"
 
 */
let attendanceRate = ((student.attendance.totalDays - student.attendance.absentDays) / student.attendance.totalDays) * 100;
if (student.scores.math >= 9 && student.scores.chemistry < 5) {
    console.log("Strong in Math, weak in Science");         
} else if (!student.extracurricular && attendanceRate < 85) {
    console.log("Needs more participation");
}   else {
    console.log("No specific warnings");
}       
