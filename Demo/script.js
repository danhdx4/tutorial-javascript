// console.log("Hello JavaScript");

/************** Bài 2 */
// let name = "Nguyễn Thị Xuân";
// let current = 2026;
// let birth = 1986;
// let isStudent = false;
// let height = 150;
// let hobby = "Chơi";
// let age = current - birth;

// console.log("Tên: " + name);
// console.log("Tuổi: " + age + " tuổi");
// console.log("là sinh viên: " + isStudent);
// console.log("Chiều cao: " + height + "cm");
// console.log("Sở thích: " + hobby);

// console.log("---------");
// // console.log(typeof current);

// // object
// let user = {
//   name: "Nguyễn Thị Xuân",
//   age: 40,
//   isStudent: false,
//   height: 150,
//   hobby: "Chơi",
// };

// console.log("Tên: ", user.name);
// console.log("Tuổi: ", user.age);
// console.log("là sinh viên: ", user.isStudent);
// console.log("Chiều cao: ", user.height + "cm");
// console.log("Sở thích: ", user.hobby);
// // log object
// console.log("User", user);
// console.log("User" + user); //sai

// console.log("--------- Bài tập ----------");
// // bài tập
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
// console.log("Fullname", data.firstname + " " + data.lastname);
// console.log("Kiểu dữ liệu của totalprice là:", typeof data.totalprice);
// console.log("Kiểu dữ liệu của depositpaid là:", typeof data.depositpaid);
// console.log("Kiểu dữ liệu của checkin là:", typeof data.bookingdates.checkin);
// console.log("Kiểu dữ liệu của checkout là:", typeof data.bookingdates.checkout);
// console.log("Giá trị của additionalneeds:", data.additionalneeds);
// console.log("Giá trị của chekin:", data.bookingdates.checkin);
// console.log("Giá trị của chekout:", data.bookingdates.checkout);

/************** Bài 3 */
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
// 1. validation dữ liệu, nếu dữ liệu không hợp lệ thì in "Invalid student data"
// dữ liệu không hợp lệ
// age <= 0 hoặc age > 100
// scores <= 0 hoặc > 10
// absentDays > totalDays
// behavior không thuộc: good, average, bad --> dùng includes() để kiểm tra, vd: ["good", "average", "bad"].includes(behavior)
// 2. tính điểm trung bình và in ra "Average score: xx", làm tròn tới 2 chữ số sau dấu phẩy (dùng toFixed)
// 3. Xếp loại học lực
// avg > 8: Giỏi
// avg >= 6.5: Khá
// avg >= 5: Trung bình
// còn lại: Yếu
// 4. Cảnh báo học lệch môn
// Nếu math >= 9 nhưng chemistry < 5 --> in ra "Strong in Math, weak in Science"
// Nếu extracurricular == false và attendanceRate < 85 --> in ra "Needs more participation"

console.log("/************** Bài 3 */");
let { math, physics, chemistry } = student.scores;
let behavior = student.behavior;
if (
  student.info.age < 0 ||
  student.info.age > 100 ||
  math <= 0 ||
  math > 10 ||
  physics <= 0 ||
  physics > 10 ||
  chemistry <= 0 ||
  chemistry > 10 ||
  student.attendance.absentDays > student.attendance.totalDays ||
  !["good", "average", "bad"].includes(behavior)
) {
  console.log("Invalid student data");
} else {
  console.log("Pass");
}
let average_score = (
  (student.scores.math + student.scores.physics + student.scores.chemistry) /
  3
).toFixed(2);
console.log("Average score: ", average_score);
if (average_score > 8) {
  console.log("Học lực: Giỏi");
} else if (average_score >= 6.5) {
  console.log("Học lực: Khá");
} else if (average_score >= 5) {
  console.log("Học lực: Trung bình");
} else {
  console.log("Học lực: Yếu");
}
let attendanceRate =
  (student.attendance.absentDays / student.attendance.totalDays) * 100;
if (student.scores.math >= 9 && student.scores.chemistry < 5) {
  console.log("Strong in Math, weak in Science");
} else if (student.extracurricular == false && attendanceRate < 85) {
  console.log("Needs more participation");
} else {
  // do nothing
}
