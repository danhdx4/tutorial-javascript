let myName = "Trần Phương Anh"; // Kiểu dữ liệu chuỗi (string)
let myYearOfBirth = 1987; // Kiểu dữ liệu số (number)
let myAge = 2026 - myYearOfBirth; // Kiểu dữ liệu số (number)
let myKnowsAutomation = false; // Kiểu dữ liệu boolean (boolean)
let yearOfExperience = 6; // Kiểu dữ liệu số (number)

// Hiển thị thông tin cá nhân trên console
console.log("Họ tên: " + myName);
console.log("Tuổi: " + myAge);
console.log("Có biết automation: " + (myKnowsAutomation ? "Có" : "Không"));
console.log("Số năm kinh nghiệm: " + yearOfExperience);
console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
console.log("Đánh giá ứng viên: " + myName); // In ra dấu gạch ngang để phân cách

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

if (myAge <= 35 && myAge >= 18) {
  console.log(
    `Tuổi: ${myAge} - Ứng viên ${myName} đủ điều kiện ứng tuyển Senior Automation QA`,
  );
} else {
  console.log(
    `Tuổi: ${myAge} - Ứng viên ${myName} không đủ điều kiện ứng tuyển Senior Automation QA`,
  );
}

if (yearOfExperience < 1) {
  console.log(`Ứng viên ${myName} phân loại: Fresher`);
} else if (yearOfExperience <= 3) {
  console.log(`Ứng viên ${myName} phân loại: Junior QA`);
} else if (yearOfExperience <= 5) {
  console.log(`Ứng viên ${myName} phân loại: Middle QA`);
} else {
  console.log(`Ứng viên ${myName} phân loại: Senior QA`);
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
console.log("Kết quả đánh giá ứng viên: " + myName); // In ra dấu gạch ngang để phân cách

if (yearOfExperience >= 3 && myKnowsAutomation && myAge <= 35) {
  console.log(`Đủ điều kiện ứng tuyển Senior Automation QA`);
} else {
  console.log(`Chưa đủ điều kiện Senior Automation QA`);
}
