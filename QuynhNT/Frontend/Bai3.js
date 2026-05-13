//Tạo các biến:
//Họ tên (string),
//Tuổi (number, và tính tuổi =(2026 - năm sinh)
//Số năm kinh nghiệm (number)
//Có biết automation hay không (boolean)
 
//Yêu cầu:
 //Phân loại
/* < 1 năm → "Fresher"
1–3 năm → "Junior QA"
3–5 năm → "Middle QA"
>5 năm → "Senior QA"
Kiểm tra điều kiện tuyển Senior Automation QA
Kinh nghiệm ≥ 3 năm
Biết automation = true
Tuổi ≤ 35
Nếu thỏa mãn các yêu cầu trên:
→ "Đủ điều kiện Senior Automation QA"
Ngược lại:
→ "Chưa đủ điều kiện“
In toàn bộ thông tin */


let name = "Nguyen Thi Quynh";
let birth = 1998;
let current=2026;
let age = current-birth;
let experience = 4;
let is_auto = true;
 console.log("-----Phân loại----")
if(experience<1){
    console.log("Bạn là Fresher");
}
else if(1<=experience&&experience<=3){
    console.log("Bạn là Junior QA");
}
else if(3<=experience && experience<=5){
    console.log("Bạn là Middle QA");
}
else{
    console.log("Bạn là Senior QA");
 }   


console.log("----Kiểm tra điều kiện tuyển Senior Automation QA ----​");
if(experience>=3 && is_auto===true && age <=35){
    console.log("Đủ điều kiện Senior Automation QA");
}
else{
    console.log("Chưa đủ điều kiện");
}
console.log("---In ra toàn bộ thông tin---");
console.log("Tên: "+ name);
console.log("Tuổi: "+ age);
console.log("Kinh nghiệm: "+ experience + " năm");
console.log("Có biết auto không: "+ is_auto);

console.log("--Bài tâp về nhà: Bài 1:--")

let student = {
  info: {
    name: "Trần Thị B",
    age: 99,
    class: "12A1",
  },
  scores: {
    math: 9,
    physics: 7.5,
    chemistry: 4,
  },
  attendance: {
    totalDays: 40,
    absentDays: 12, // ngày vắng mặt
  },
  behavior: "goodss", // good | average | bad
  extracurricular: false,
};
// 1. validation dữ liệu, nếu dữ liệu không hợp lệ thì in "Invalid student data"
// Dữ liệu không hợp lệ
// age <= 0 hoặc age > 100
// scores <= 0 hoặc > 10
// absentDays > totalDays
// Behavior không thuộc: good, average, bad --> dùng includes() để kiểm tra,
// vd: ["good", "average", "bad"].includes(behavior)

if(student.info.age<=0 || student.info.age>100){
    console.log("Invalid student data")
}
else if(student.scores<=0 || student.scores >10){
    console.log("Invalid student data")
}
else if(student.attendance.absentDays > student.attendance.totalDays){
    console.log("Invalid student data")
}
else if (!["good", "average", "bad"].includes(student.behavior)) {
    console.log("Invalid student data");
}
else{
    console.log("Valid student data")
}

console.log("--Bài tập về nhà: Bài 2 (Tính điểm tủng bình)--");
let avg=(student.scores.chemistry+student.scores.math+student.scores.physics)/3
let avg_1 = avg.toFixed(2);
console.log(avg.toFixed(2));

console.log("---Bài tâp về nhà: Bài 3 (Xếp loại học lực:) ---");

if(avg_1>8){
    console.log("Học lực giỏi");
}
else if(avg_1>=6.5){
    console.log("Học lực khá");
}
else if(avg_1>=5){
    console.log("Học lực trung bình");
}
else{
    console.log("Học lực yếu");
}

console.log("---Bài tâp về nhà: Bài 4 (Cảnh báo lệch nhóm:) ---");

if(student.scores.math>=9 && student.scores.chemistry<5){
    console.log("Strong in Math, weak in Science");
}
if(student.extracurricular===false && (student.attendance.totalDays - student.attendance.absentDays)<85){
    console.log("Needs more participation");
}

