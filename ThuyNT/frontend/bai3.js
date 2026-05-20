/************** Bài 2 */
// Tạo các biến:
// Họ tên (string),
// Tuổi (number, và tính tuổi =(2026 - năm sinh)
// Số năm kinh nghiệm (number)
// Có biết automation hay không (boolean)

let name = "Ngô Thủy";
let birth = 2003;
let age = 2026 - birth;
let experience = 7;
let is_auto = true;
// Yêu cầu:
//  Phân loại
// < 1 năm → "Fresher"
// 1–3 năm → "Junior QA"
// 3–5 năm → "Middle QA"
// >5 năm → "Senior QA"

if (experience < 1) {
    console.log("Fresher")
} else if (experience <= 3) {
    console.log("Junior QA")
} else if (experience < 5) {
    console.log("Middle QA")
} else {
    console.log("Senior QA")

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
if (experience >= 3 && is_auto === true && age <= 35) {
    console.log("Đủ điều kiện Senior Automation QA");
    console.log("Họ tên:", name);
    console.log("Tuổi:", age);
    console.log("Số năm kinh nghiệm:", experience);
    console.log("Biết automation:", is_auto);
} else {
    console.log("Chưa đủ điều kiện");

}

//---------BTVN--------------------------------------------//
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
        absentDays: 12, 
    },
    behavior: "good",
    extracurricular: true,
};

/*
1. validation dữ liệu, nếu dữ liệu không hợp lệ thì in "Invalid student data"
Dữ liệu không hợp lệ
age <= 0 hoặc age > 100
scores <= 0 hoặc > 10
absentDays > totalDays
Behavior không thuộc: good, average, bad --> dùng includes() để kiểm tra, vd: ["good", "average", "bad"].includes(behavior)
*/
if (student.info.age <= 0 || student.info.age > 100 ||
    student.scores.math < 0 || student.scores.math > 10 ||
    student.scores.physics < 0 || student.scores.physics > 10 ||    
    student.scores.chemistry < 0 || student.scores.chemistry > 10 ||
    student.attendance.absentDays > student.attendance.totalDays ||
    !["good", "average", "bad"].includes(student.behavior)) {
    console.log("Invalid student data");
}else {
    console.log("Valid student data");
}
/*2. tính điểm trung bình và in ra "Average score: xx", làm tròn tới 2 chữ số sau dấu phẩy (dùng toFixed)
*/
let avg = (student.scores.math + student.scores.physics + student.scores.chemistry) / 3;
console.log("Average score:", avg.toFixed(2));
/*3. Xếp loại học lực
*/
if (avg > 8) {
    console.log("Gioi");
} else if (avg >= 6.5) {
    console.log("Kha");
} else if (avg >= 5) {
    console.log("Trung binh");
} else {
    console.log("Yeu");
}