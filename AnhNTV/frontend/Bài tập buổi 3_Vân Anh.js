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
// Dữ liệu không hợp lệ
// age <= 0 hoặc age > 100
// scores <= 0 hoặc > 10
// absentDays > totalDays
// Behavior không thuộc: good, average, bad --> dùng includes() để kiểm tra,
// vd: ["good", "average", "bad"].includes(behavior)
console.log("Bài 1.............")
if (
    student.info.age <= 0 || student.info.age > 100 ||
    student.scores.math < 0 || student.scores.math > 10 ||
    student.scores.physics < 0 || student.scores.physics > 10 ||
    student.scores.chemistry < 0 || student.scores.chemistry > 10 ||
    student.attendance.absentDays > student.attendance.totalDays
) {
    console.log("Invalid student data");
} else {
    console.log("Valid student data");}

if (student.behavior !== ["good", "average", "bad"].includes(student.behavior)) {
console.log("Invalid student data")
} else {
console.log("Valid student data")
}

//tính điểm trung bình và in ra "Average score: xx", 
// làm tròn tới 2 chữ số sau dấu phẩy (dùng toFixed)
console.log("Bài 2: Tính điểm trung bình")

let values = Object.values(student.scores);
let sum = values.reduce((a, b) => a + b, 0);
let avg = sum / values.length;

console.log("Average score: " + avg.toFixed(2));

// Xếp loại học lực 
/* avg > 8: Giỏi
avg >= 6.5: Khá
avg >= 5: Trung bình
Còn lại: Yếu */

console.log("Bài 3: Xếp loại học sinh")
if (avg > 8) {
    console.log("Giỏi");
} else if (avg >= 6.5) {
    console.log("Khá");
} else if (avg >= 5) {
    console.log("Trung Bình");
} else {
    console.log("Yếu");
}
/* Nếu math >= 9 nhưng chemistry < 5
 --> in ra "Strong in Math, weak in Science"
Nếu extracurricular == false và attendanceRate < 85 
--> in ra "Needs more participation */

console.log("Bài 4: Cảnh báo học lệch môn")
if (student.scores.math >= 9 && student.scores.chemistry < 5){
    console.log("Strong in Math, weak in Science")
}
let attendedDay = student.attendance.totalDays - student.attendance.absentDays
let attendanceRate = (attendedDay/student.attendance.totalDays)*100

if (student.extracurricular == false && attendanceRate < 85) {
console.log("Needs more participation")
} else {
console.log("Shows active participation")
}