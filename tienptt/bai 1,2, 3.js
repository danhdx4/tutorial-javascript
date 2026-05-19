// Bài học buổi 2: Biến và kiểu dữ liệu trong JavaScript
//kiểu dữ liệu
// let name ='Pham thị thuỷ tiên';
// let current=2026;
// let birth = 1998;
// let istudent =false;
// let Height =150;
// let hody= "chơi";


// console.log("tên:"+ name)
// console.log("tuổi:"+ (current - birth))
// console.log("chiều cao:"+ Height)
// console.log("sở thích:"+ hody)
// console.log("là sinh viên:"+ istudent)


// console.log("---------")
// let user ={
//     name: 'Pham thị thuỷ tiên',
//     age: 28,
//     height: 150,
//     hobby: 'chơi',
//     istudent: false,
// };
// console.log("tên:"+ user.name)
// console.log("tuổi:"+ user.age)
// console.log("chiều cao:"+ user.height)
// console.log("sở thích:"+ user.hobby)
// console.log("là sinh viên:"+ user.istudent)

// console.log("---------")
// // kiểm tra kiểu dữ liệu khái báo
// console.log(typeof name);
// console.log(typeof current);
// console.log(typeof birth);
// console.log(typeof istudent);
// console.log(typeof Height);
// console.log(typeof hody);

// //// cài thêm extension

// /** Bài tập về nhà
//  * Tìm fulname
//  * Kiểm tra kiểu dữ liệu của các key: totalprice, depositpaid, checkin, checkout
//  * Tìm giá trị của các key: additionalneeds, checkin, checkout
//  */
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
// // 1. Tìm fullname
// let fullname = data.firstname + " " + data.lastname;
// console.log("Fullname:", fullname);

// // 2. Kiểm tra kiểu dữ liệu
// console.log("Kiểu dữ liệu totalprice:", typeof data.totalprice);
// console.log("Kiểu dữ liệu depositpaid:", typeof data.depositpaid);
// console.log("Kiểu dữ liệu checkin:", typeof data.bookingdates.checkin);
// console.log("Kiểu dữ liệu checkout:", typeof data.bookingdates.checkout);

// // 3. Tìm giá trị các key
// console.log("additionalneeds:", data.additionalneeds);
// console.log("checkin:", data.bookingdates.checkin);
// console.log("checkout:", data.bookingdates.checkout);




////////////////////Bài hoc buổi 3
// Tạo các biến:
// Họ tên (string),
// Tuổi (number, và tính tuổi =(2026 - năm sinh)
// Số năm kinh nghiệm (number)
// Có biết automation hay không (boolean)

let data = "Phạm Thị Thuỷ Tiên";
let birth = 1998;
let current = 2026;
let age = current - birth;
let experience = 4;
let knowsAutomation = true;

// Yêu cầu:
//  Phân loại
// < 1 năm → "Fresher"
// 1–3 năm → "Junior QA"
// 3–5 năm → "Middle QA"
// >5 năm → "Senior QA"

if(experience<1)
  {
  console.log("Fresher");
}
else if(experience >=1 && experience <3){
  console.log("Junior QA");
}
else if(experience >=3 && experience <5){
  console.log("Middle QA");
}
else {
  console.log("Senior QA");
}

// Kiểm tra điều kiện tuyển Senior Automation QA
// Kinh nghiệm ≥ 3 năm
// Biết automation = true
// Tuổi ≤ 35
// Nếu thỏa mãn các yêu cầu trên:
// → "Đủ điều kiện Senior Automation QA"
// Ngược lại:
// → "Chưa đủ điều kiện“
// In toàn bộ thông tin
if(experience>=3&& knowsAutomation== true&& age <=35){
  console.log("Đủ điều kiện Senior Automation QA");
} else {
  console.log("Chưa đủ điều kiện");
}

/// Bài tập về nhà.
//obj như sau:
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



//1. validation dữ liệu, nếu dữ liệu không hợp lệ thì in "Invalid student data"
// Dữ liệu không hợp lệ
// age <= 0 hoặc age > 100
// scores <= 0 hoặc > 10
// absentDays > totalDays
// Behavior không thuộc: good, average, bad --> dùng includes() để kiểm tra, vd: ["good", "average", "bad"].includes(behavior)
if(student.info.age <= 0 ||student.info.age > 100){
  console.log("Invalid student data");
}
else if(student.scores.math <= 0 || student.scores.math > 10
   || student.scores.physics <= 0 || student.scores.physics > 10
    || student.scores.chemistry <= 0 || student.scores.chemistry > 10){
  console.log("Invalid student data");
}
else if(student.attendance.absentDays > student.attendance.totalDays){
  console.log("Invalid student data");
}
else if(!["good", "average", "bad"].includes(student.behavior)){
  console.log("Invalid student data");
}
else{
  console.log("Student data is valid");
}

//2.  tính điểm trung bình và in ra "Average score: xx", làm tròn tới 2 chữ số sau dấu phẩy (dùng toFixed)
let averageScore = (student.scores.math + student.scores.physics + student.scores.chemistry) / 3;
console.log("Average score: " + averageScore.toFixed(2));

// Xếp loại học lực
//avg > 8: Giỏi
// avg >= 6.5: Khá
// avg >= 5: Trung bình
// Còn lại: Yếu

if(averageScore > 8){
  console.log("Xếp loại học lực: Giỏi");
} else if(averageScore >= 6.5){
  console.log("Xếp loại học lực: Khá");
} else if(averageScore >= 5){
  console.log("Xếp loại học lực: Trung bình");
} else {
  console.log("Xếp loại học lực: Yếu");
}
// 4. Cảnh báo học lệch môn

//  Nếu math >= 9 nhưng chemistry < 5 --> in ra "Strong in Math, weak in Science"
// Nếu extracurricular == false và attendanceRate < 85 --> in ra "Needs more participation"
if(student.scores.math >= 9 && student.scores.chemistry < 5){
  console.log("Strong in Math, weak in Science");
}
let attendanceRate = ((student.attendance.totalDays - student.attendance.absentDays) / student.attendance.totalDays) * 100;
if(student.extracurricular == false && attendanceRate < 85){
  console.log("Needs more participation");
}

