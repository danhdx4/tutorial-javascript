// bài 2
//let name = "Nguyễn Thị Xuân"; // Khai báo kiểu thường
//let current = 2026;
//let birth = 2003;
//let isstudent = true;
//let hight = 150;
//let hobby = "ngủ";
//let age = current - birth;

//console.log("Tên:" + name);
//console.log("Tuổi:" + age);
//console.log("Là sinh viên:" + isstudent);
//console.log("Chiều cao:" + hight);
//console.log("Sở thích:" + hobby);
//console.log(typeof name) //kiểu tra kiểu dữ liệu của biến name
// Khai báo kiểu mảng khác với kiểu thường: thay dấu = bằng dấu : và dấu phẩy thay cho dấu chấm phẩy
//let user = {
 //   name: "Nguyễn Thị Xuân", // Khai báo kiểu thường
  //  age: 23,
 //   birth: 2003,
  //  isstudent: true,
  //  hight: 150,
  //  hobby: "ngủ",
//};
//console.log("Tên: ", user.name); // lấy giá trị của biến trong mảng thì phải lấy tên mảng.tên biến
//console.log("Tuổi: ", user.age);
//console.log("Chiều cao: ", user.hight);
//console.log("Sở thích: ", user.hobby);

//let data = {
 // firstname: "Sally",
 // lastname: "Brown",
 // totalprice: 111,
 // depositpaid: true,
 // bookingdates: {
    //checkin: "2013-02-23",
    //checkout: "2014-10-23",
 // },
 // additionalneeds: "Breakfast",
//};


/**
 * Tìm fulname
 * Kiểm tra kiểu dữ liệu của các key: totalprice, depositpaid, checkin, checkout
 * Tìm giá trị của các key: additionalneeds, checkin, checkout
 */

//console.log("full name: ", data.firstname + " " + data.lastname);
//console.log("Kiểu dữ liệu totalprice: ", typeof data.totalprice);
//console.log("Kiểu dữ liệu depositpaid: ", typeof data.depositpaid);
//console.log("Kiểu dữ liệu checkin: ", typeof data.bookingdates.checkin);
//console.log("Kiểu dữ liệu checkout: ", typeof data.bookingdates.checkout);
//console.log("Giá trị của additionalneeds: ", data.additionalneeds);
//console.log("Giá trị của checkin: ", data.bookingdates.checkin);
//console.log("Giá trị của checkout: ", data.bookingdates.checkin);

/**
 * Tạo các biến: Họ tên(String),Tuổi(Number) và Tính tuổi =(2026-năm sinh)
 * Số năm kinh nghiệm
 * Có biết Automation hay không
 * Yêu cầu: phân loại: <1 năm -> fresher; 1-3 năm: Junior QA; 3-5 năm: MIddle QA; >5 năm: Senoir
 * Kiểm tra điều kiện để tuyển senior auto : Biết auto = true; tuổi>=35; Nếu đủ các đk trên: đủ đk senior auto, nguojc lại: chưa đủ đk senior auto
 * In toàn bộ thông tin
 */
 let hoten= "Xuannt";
 let tuoi= 2003;
 let tinhtuoi= (2026-2003);
 let snkn= 3;
 let  isAuto = false;
// Yeu cau 1
 if(
  snkn <1
 ){
  console.log("QA fresher")
 }
 else if(
  snkn>=1 && snkn<3
 ){
  console.log("QA Junior")
 }
 else if(
  snkn>=3 && snkn<5
 ){console.log("Middle QA")
}
else{
  console.log("Senior QA")
}

// Yeu cau 2
if(
  isAuto= true && tinhtuoi>=35
){
  console.log("Đủ đk senior auto")
} else{
  console.log("Không đủ đk")
}

//In toan bo thong tin
console.log("tên: ", hoten);
console.log("năm sinh: ", tuoi);
console.log("tuổi: ", tinhtuoi);
console.log("số nă kinh nghiệm: ", snkn);

 //Bai tap 2
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

  //age <=0 hoặc age>100
  if(student.info.age<=0 || student.info.age>100 ){
    console.log("(age) Invalid student data");
  }

  //Score <=0 hoặc >10
if(
    (student.scores.math<=0 || student.scores.math >10) ||
    (student.scores.physics<=0 || student.scores.physics >10) ||
    (student.scores.chemistry<=0 || student.scores.chemistry >10)
){
    console.log(" (score)Invalid student data")
}
 //absentDays>totalDay
if(student.attendance.absentDays> student.attendance.totalDays){
    console.log("(absentDays) Invalid student data")
}
//Behavior không thuộc: good, average, bad --> dùng includes() để kiểm tra, ​
//vd: ["good", "average", "bad"].includes(behavior)​
if(!["good", "average", "bad"].includes(student.behavior)){
    console.log("(behavior)Invalid student data")
}

//tính điểm trung bình và in ra "Average score: xx", làm tròn tới 2 chữ số sau dấu phẩy (dùng toFixed)​
let averageScore = ((student.scores.math + student.scores.physics + student.scores.chemistry)/3).toFixed(2)
console.log("Average score: ", averageScore);

// Xếp loại học lực
if(averageScore>8){
    console.log("Giỏi")
} else if(averageScore>=6.5){
    console.log("Khá")
} else if(averageScore>=5){
    console.log("Trung bình")
} else{console.log("Yếu")}

//Nếu math >= 9 nhưng chemistry < 5 --> in ra "Strong in Math, weak in Science"​
if(student.scores.math>=9 && student.scores.chemistry<5){
    console.log("Strong in Math, weak in Science")
}

//Nếu extracurricular == false và attendanceRate ​< 85 --> in ra "Needs more participation"
let attendanceRate= 100-(student.attendance.absentDays/student.attendance.totalDays)*100 ;
if(attendanceRate<85 && student.extracurricular == false){
    console.log("Needs more participation")
}


