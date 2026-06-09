// Bài học buổi 2: Biến và kiểu dữ liệu trong JavaScript
    console.log("Hello, World!");
    let name = "Ngoc Anh";
    let current = 2026;
    let birth = 2000;
    let isStudent = false;
    let height = 150;
    let hobby = "Nghe nhạc";
    console.log("Tên: " + name);
    console.log("Tuổi: " + (current - birth));
    console.log("Sinh viên: " + isStudent);
    console.log("Chiều cao: " + height + " cm");
    console.log("Sở thích: " + hobby);
console.log("--------------------------------------------------");

let user = {
    name: "Ngoc Anh",
    age: current - birth,
    isStudent: false,
    height: height,
    hobby: hobby
};
console.log("Thông tin người dùng: " + user.name);
console.log("Tuổi: " + user.age);
console.log("Sinh viên: " + user.isStudent);
console.log("Chiều cao: " + user.height + " cm");
console.log("Sở thích: " + user.hobby); 
console.log("--------------------------------------------------");
// BAI TAP 2:
/**
 * Tìm fulname
 * Kiểm tra kiểu dữ liệu của các key: totalprice, depositpaid, checkin, checkout
 * Tìm giá trị của các key: additionalneeds, checkin, checkout
 */
let data = {
  firstname: "Sally",
  lastname: "Brown",
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: "2013-02-23",
    checkout: "2014-10-23",
  },
  additionalneeds: "Breakfast",
};

console.log("Fullname: " + data.firstname + " " + data.lastname);
console.log("Kiểu dữ liệu của totalprice: " + typeof data.totalprice);
console.log("Kiểu dữ liệu của depositpaid: " + typeof data.depositpaid);
console.log("Kiểu dữ liệu của checkin: " + typeof data.bookingdates.checkin);
console.log("Kiểu dữ liệu của checkout: " + typeof data.bookingdates.checkout);
console.log("Giá trị của additionalneeds: " + data.additionalneeds);
console.log("Giá trị của checkin: " + data.bookingdates.checkin);
console.log("Giá trị của checkout: " + data.bookingdates.checkout);

console.log("--------------------------------------------------");


