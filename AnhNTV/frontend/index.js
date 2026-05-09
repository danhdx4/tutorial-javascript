console.log("Hello JavaScript");

let name = "Nguyen Thi Van Anh";
let current = 2026;
let birth = 1995
let isstudent = false
let high = 163
let hobby = "Chơi";
let age = current - birth;



console.log("Tên:",  name);
console.log("Tuổi:",  age);
console.log("là sinh viên:", isstudent);
console.log("Chiều cao:",high + " cm");
console.log("Sở thích:", hobby);

console.log("Tên:" + name);
console.log("Tuổi:"  + age);
console.log("là sinh viên:" + isstudent);
console.log("Chiều cao:" + high + " cm");
console.log("Sở thích:" + hobby);


console.log("................") 
let user = {
    name: "Nguyen Thi Van Anh",
    age: 31,
    isstudent: false,
    high: 163,
    hobby: "Chơi"       
};
////khai báo kiểu mảng
console.log("Tên:", user.name);
console.log("Tuổi:", user.age);
console.log("là sinh viên:", user.isstudent);
console.log("Chiều cao:", user.high + " cm");
console.log("Sở thích:", user.hobby);

/// kiểm tra kiểu dữ liệu
console.log(typeof name);
console.log(typeof age);


let data ={
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

let fullname= data.firstname + " " + data.lastname;
console.log("Full name: " + fullname);

console.log(typeof data.totalprice);
console.log(typeof data.depositpaid);
console.log(typeof data.checkin);
console.log(typeof data.checkout);

console.log("additional needs: " + data.additionalneeds);
console.log("check-in date: " + data.bookingdates.checkin);
console.log("check-out date: " + data.bookingdates.checkout);