let student = {
    info: {
        name: "Trần Thị B",
        age: 19,
        class: "12A1",
    },
    scores:{
        math: 9,
        physics: 7.5,
        chemistry:4,
    },
    attendance:{
        totalDays:180,
        absentDays: 12,
    },
    bahavior: "good",
    extracurricular: true,
};
// 1. validation dữ liệu, nếu dữ liệu không hợp lệ thì in "Invalid student data"
// Dữ liệu không hợp lệ
// age <= 0 hoặc age > 100
// scores <= 0 hoặc > 10
// absentDays > totalDays
// Behavior không thuộc: good, average, bad --> dùng includes() để kiểm tra, vd: ["good", "average", "bad"].includes(behavior)
if(student.age <=0 || student.age>100){
console.log("Invalid student data");
}else if (student.scores.math <=0 || student.scores.math > 10 || student.scores.physics <=0 || student.scores.physics > 10||student.scores.chemistry <=0||student.scores.chemistry >10){
console.log("Invalid student data");
}else if(student.attendance.absentDays > student.attendance.totalDays){
console.log("Invalid student data");
}else if([!"good", "average", "bad"].includes(student.behavior)){
console.log("Invalid student data");
}else{
    console.log("Valid student data");
}
console.log("----------------------------------------------------");

//2. tính điểm trung bình và in ra "Average score: xx", làm tròn tới 2 chữ số sau dấu phẩy (dùng toFixed)

let Average_score = (student.scores.math + student.scores.physics + student.scores.chemistry)/3
console.log("Average score off student is:  "+ Average_score.toFixed(2));

// 3. Xếp loại học lực
// avg > 8: Giỏi
// avg >= 6.5: Khá
// avg >= 5: Trung bình
// Còn lại: Yếu
if(Average_score>8){
    console.log("Học lực gỏi")
}else if(Average_score >=6.5){
    console.log("Học lực khá")
}else if(Average_score >=5){
    console.log("Học lực trung bình")
}else{
    console.log("Học lực yếu")
}
console.log("----------------------------------------------------");

// 4. Cảnh báo học lệch môn
// Nếu math >= 9 nhưng chemistry < 5 --> in ra "Strong in Math, weak in Science"
// Nếu extracurricular == false và attendanceRate < 85 --> in ra "Needs more participation"

if(student.scores.math >=9 && student.scores.chemistry <5){
    console.log("Strong in Math, weak in Science");
}else if (student.extracurricular === false && (student.totalDays - student.absentDays)< 85){
    console.log("Needs more participation");
}else{
    console.log("GOOD!")
}





