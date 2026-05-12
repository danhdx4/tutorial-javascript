// console.log("Hello JavaScript");

/************** Bài 2 */
let name = "Nguyễn Thị Xuân";
let current = 2026;
let birth = 1986;
let isStudent = false;
let height = 150;
let hobby = "Chơi";
let age = current - birth;

console.log("Tên: " + name);
console.log("Tuổi: " + age + " tuổi");
console.log("là sinh viên: " + isStudent);
console.log("Chiều cao: " + height + "cm");
console.log("Sở thích: " + hobby);

console.log("---------");
// console.log(typeof current);

// object
let user = {
  name: "Nguyễn Thị Xuân",
  age: 40,
  isStudent: false,
  height: 150,
  hobby: "Chơi",
};

console.log("Tên: ", user.name);
console.log("Tuổi: ", user.age);
console.log("là sinh viên: ", user.isStudent);
console.log("Chiều cao: ", user.height + "cm");
console.log("Sở thích: ", user.hobby);
// log object
console.log("User", user);
console.log("User" + user); //sai

console.log("--------- Bài tập ----------");
// bài tập
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
/**
 * Tìm fulname
 * Kiểm tra kiểu dữ liệu của các key: totalprice, depositpaid, checkin, checkout
 * Tìm giá trị của các key: additionalneeds, checkin, checkout
 */
console.log("Fullname", data.firstname + " " + data.lastname);
console.log("Kiểu dữ liệu của totalprice là:", typeof data.totalprice);
console.log("Kiểu dữ liệu của depositpaid là:", typeof data.depositpaid);
console.log("Kiểu dữ liệu của checkin là:", typeof data.bookingdates.checkin);
console.log("Kiểu dữ liệu của checkout là:", typeof data.bookingdates.checkout);
console.log("Giá trị của additionalneeds:", data.additionalneeds);
console.log("Giá trị của chekin:", data.bookingdates.checkin);
console.log("Giá trị của chekout:", data.bookingdates.checkout);

/************** Bài 2 */
