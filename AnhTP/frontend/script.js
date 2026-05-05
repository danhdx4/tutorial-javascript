// // Hàm hiển thị alert dạng pop-up khi trang web được tải
// alert("Hello ATP A, Welcome to the AutoTestTraining");

// // Khai báo biến để lưu tên người dùng được nhập trên PU alert
// // Các từ khóa khai báo biến: var, let, const
// let userName = prompt("Hãy nhập tên của bạn:");

// // Sử dụng biến userName để hiển thị lời chào trên console
// console.log("Hello, " + userName + "! Welcome to the AutoTestTraining");

// // Khai báo biến mà không gán giá trị ban đầu
// let myName;
// var yourName;
// const ATP = "AutoTestTraining";

// // Khởi tạo biến gồm giá trị
// myName = "Name AnhTP";
// yourName = "Your Name AnhTP";
// var myAge = 25;
// let yourAge = 30;
// const PI = 3.14;

// console.log(`Hello, ${myName} ${myAge}! Welcome to the AutoTestTraining`); // Sử dụng template literals để hiển thị lời chào
// console.log(`Hello, ${yourName} ${yourAge}! Welcome to the AutoTestTraining`); // Sử dụng template literals để hiển thị lời chào
// console.log(`Hello, ${ATP}!`); // Sử dụng template literals để hiển thị lời chào

// Bài 2 : Biến và kiểu dữ liệu trong JavaScript
let myName = "Trần Phương Anh trong quá khứ"; // Kiểu dữ liệu chuỗi (string)
let myYearOfBirth = 2005; // Kiểu dữ liệu số (number)
let isStudent = true; // Kiểu dữ liệu boolean (true/false)
let myHeight = 155; // Kiểu dữ liệu số (number)
let myHobbies = ["Xem phim", "Cafe", "Du lịch", "..."]; // Kiểu dữ liệu mảng (array)

console.log(`Họ tên đầy đủ: ${myName}`); // Sử dụng template literals để hiển thị tên
console.log(`Tuổi: ${2026 - myYearOfBirth}`);
console.log(`Là sinh viên hay không: ${isStudent}`);
console.log(`Chiều cao: ${myHeight} cm`);
console.log(`Sở thích: ${myHobbies.join(", ")}`);

// Cập nhật HTML với các giá trị của biến
document.querySelectorAll("ul li")[0].textContent = `Họ tên đầy đủ: ${myName}`;
document.querySelectorAll("ul li")[1].textContent =
  `Tuổi: ${2026 - myYearOfBirth}`;
document.querySelectorAll("ul li")[2].textContent =
  `Là sinh viên hay không: ${isStudent ? "Có" : "Không"}`;
document.querySelectorAll("ul li")[3].textContent = `Chiều cao: ${myHeight} cm`;
document.querySelectorAll("ul li")[4].textContent =
  `Sở thích: ${myHobbies.join(", ")}`;
