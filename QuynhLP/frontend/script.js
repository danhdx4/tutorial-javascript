// // import response from "../../data/getBookingResponse.json" with { type: "json" };

// // console.log("Checking:", response);
// // console.log("Checking:", typeof response.bookingdates.checkin);
// // Bài tập về nhà 2
// let data = {
//   firstname: "Sally",
//   lastname: "Brown",
//   totalprice: 111,
//   depositpaid: true,
//   bookingdates: {
//     checkin: "2013-02-23",
//     checkout: "2014-10-23",
//   },
//   additionalneeds: "Breakfast",
// };

// /**
//  * Tìm fulname
//  * Kiểm tra kiểu dữ liệu của các key: totalprice, depositpaid, checkin, checkout
//  * Tìm giá trị của các key: additionalneeds, checkin, checkout
//  */
// console.log("Tìm fulname:");
// console.log("fulname:", data.firstname + " " + data.lastname);

// console.log("totalprice", typeof data.totalprice);
// console.log("depositpaid", typeof data.depositpaid);
// console.log("checkin", typeof data.bookingdates.checkin);
// console.log("checkout", typeof data.bookingdates.checkout);

// console.log("key additionalneeds:", data.additionalneeds);
// console.log("key checkin:", data.bookingdates.checkin);
// console.log("key checkout:", data.bookingdates.checkout);

// /**Phân loại ​

// < 1 năm → "Fresher"​

// 1–3 năm → "Junior QA"​

// 3–5 năm → "Middle QA"​

// >5 năm → "Senior QA"​

// Kiểm tra điều kiện tuyển Senior Automation QA ​

// Kinh nghiệm ≥ 3 năm​

// Biết automation = true​

// Tuổi ≤ 35​

// Nếu thỏa mãn các yêu cầu trên:​
// → "Đủ điều kiện Senior Automation QA"​

// Ngược lại:​
// → "Chưa đủ điều kiện“​

// In toàn bộ thông tin​
// */
// let name = "Le Phuong Quynh";
// let birth = 32;
// let experience = 3;
// let automation = true;
// if (experience < 1) {
//   console.log("Fresher");
// } else if (experience < 3 && experience >= 1) {
//   console.log("Junior QA");
// } else if (experience <= 5 && experience >= 3) {
//   console.log("Middle QA");
// } else if (experience > 5) {
//   console.log("Senior QA");
// }
// if (experience >= 3 && automation == true && birth <= 35) {
//   console.log("Đủ điều kiện Senior Automation QA");
// } else {
//   console.log("Chưa đủ điều kiện");
// }
// /*Bài tập về nhà 3*/
// let student = {

//   info: {
//     name: "Trần Thị B",
//     age: 19,
//     class: "12A1",
//   },
//   scores: {
//     math: 9,
//     physics: 7.5,
//     chemistry: 9,
//   },
//   attendance: {
//     totalDays: 180,
//     absentDays: 12, // ngày vắng mặt
//   },
//   behavior: "good", // good | average | bad​
//   extracurricular: true,
// };
// if (student.info.age <= 0 || student.info.age > 100) {
//   console.log("Invalid student data");
// }
// if ((student.scores.math <= 0 || student.scores.math > 10) ||
//   (student.scores.physics <= 0 || student.scores.physics > 10) ||
//   (student.scores.chemistry <= 0 || student.scores.chemistry > 10)) {
//   console.log("Invalid student data");
// }
// if (!["good", "average", "bad"].includes(student.behavior)) {
//   console.log("Invalid student data");
// }
// let average = ((student.scores.math + student.scores.physics + student.scores.chemistry) / 3).toFixed(2)
// console.log("Average score: " + average)
// if (average > 8) {
//   console.log("Giỏi​");
// } else if (average >= 6.5) {
//   console.log("Khá​​");
// } else if (average >= 5) {
//   console.log("Trung bình​​​");
// } else {
//   console.log("Yếu");
// }
// if (student.scores.math >= 9 && student.scores.chemistry < 5) {
//   console.log("Strong in Math, weak in Science")
// }
// let attendanceRate = (student.attendance.totalDays - student.attendance.absentDays) / student.attendance.totalDays * 100
// if (student.extracurricular == false && attendanceRate < 85) {
//   console.log("Needs more participation");
// }

// /*Bài tập về nhà 4*/

// console.log("===== DANH SÁCH PHIM =====");
// console.log("1. Avengers      - 90000đ");
// console.log("2. Conan         - 70000đ");
// console.log("3. Doraemon      - 60000đ");
// console.log("4. One Piece     - 80000đ");
// console.log("0. Thoát");


// console.log("\n===========================");


// let choice = Number(prompt("Chọn phim:"));
// switch (choice) {
//   case 1:
//     console.log('Avengers      - 90000đ');
//     break;
//   case 2:
//     console.log("Conan         - 70000đ");
//     break;
//   case 3:
//     console.log("Doraemon      - 60000đ");
//     break;

//   case 4:
//     console.log("4. One Piece     - 80000đ");
//     break;

//   case 0:
//     console.log("Thoát");
//     break;
// }
// console.log("\n===========================");

// let quantity = Number(prompt("Chọn vé:"));
// switch (choice) {
//   case 1:
//     console.log('Avengers - ' + quantity * 90000 + "d");
//     break;
//   case 2:
//     console.log("Conan - " + quantity * 70000 + "d");
//     break;
//   case 3:
//     console.log("Doraemon - " + quantity * 60000 + "d");
//     break;

//   case 4:
//     console.log("One Piece - " + quantity * 80000 + "d");
//     break;

//   case 0:
//     console.log("Thoát");
//     break;
// }
// 
/*Bài tập về nhà_Danh */
  // Bài 1
const tinhTong = (a, b) => a + b
console.log(tinhTong(3, 5))


function tinhtong(a, b) {
  return a + b;
}
console.log(tinhtong(3, 7));


  // Bài 2
function dienTich(a, b) {
  return a * b;
}
console.log(dienTich(-1, 5));


  // Bài 3

const chanLe2 = (a) => a % 2 === 0 ? "Chẵn" : "Lẻ";
console.log("chanLe" + chanLe2(9))

function chanLe(a) {
  if (a % 2 === 0)
    return "chẵn";
  else
    return "lẻ";

    
  // Bài 4
}
console.log(chanLe(4));
function chaoMung(name, role) {
  return "Chào " + name + "! Vai trò của bạn là " + role + "."

}
console.log(chaoMung("An", "QA"));


  // Bài 5


function timMax(a) {
  return Math.max(...a)
}
console.log(timMax([3, 9, 1, 7, 2, 3, 4, 5, 6, 7]));

const timMax2 = (a) => Math.max(...a)
console.log("TimMax: " + timMax2([3, 8, 1, 7, 1]));

