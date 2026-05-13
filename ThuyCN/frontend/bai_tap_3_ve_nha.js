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

if (student.info.age <= 0 || student.info.age > 100) {
console.log("Invalid student data")
} else {
console.log("Valid student data")
}

if (student.scores <= 0 || student.scores > 10) {
console.log("Invalid student data")
} else {
console.log("Valid student data")
}

if (student.attendance.absentDays > student.attendance.totalDays) {
console.log("Invalid student data")
} else {
console.log("Valid student data")
}

if (student.behavior !== ["good", "average", "bad"].includes(student.behavior)) {
console.log("Invalid student data")
} else {
console.log("Valid student data")
}

// tính điểm trung bình và in ra "Average score: xx", 
// làm tròn tới 2 chữ số sau dấu phẩy (dùng toFixed)
let scores = Object.values(student.scores);
let average =
  scores.reduce((sum, score) => sum + score, 0) / scores.length;

console.log("Điểm trung bình:", average.toFixed(2));

// Xếp loại học lực
// avg > 8: Giỏi
// avg >= 6.5: Khá
// avg >= 5: Trung bình
// Còn lại: Yếu

if (average > 8) {
console.log("Xếp loại học lực: Giỏi")
} else if (average >= 6.5) {
console.log("Xếp loại học lực: Khá")
} else if (average >=5) {
console.log("Xếp loại học lực: Trung bình")
} else {
console.log("Xếp loại học lực: Yếu")
}

// Nếu math >= 9 nhưng chemistry < 5 --> in ra "Strong in Math, weak in Science"

if (student.scores.math >= 9 && student.scores.chemistry < 5) {
console.log("Strong in Math, weak in Science")
} else {
console.log("Strong in both Math and Science")
}

// Nếu extracurricular == false và attendanceRate < 85 --> in ra "Needs more participation"
let attendedDay = student.attendance.totalDays - student.attendance.absentDays
let attendanceRate = (attendedDay/student.attendance.totalDays)*100

if (student.extracurricular == false && attendanceRate < 85) {
console.log("Needs more participation")
} else {
console.log("Shows active participation")
}