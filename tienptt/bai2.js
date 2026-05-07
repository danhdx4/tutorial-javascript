// Bài học buổi 2: Biến và kiểu dữ liệu trong JavaScript
//kiểu dữ liệu
let name ='Pham thị thuỷ tiên';
let current=2026;
let birth = 1998;
let istudent =false;
let Height =150;
let hody= "chơi";


console.log("tên:"+ name)
console.log("tuổi:"+ (current - birth))
console.log("chiều cao:"+ Height)
console.log("sở thích:"+ hody)
console.log("là sinh viên:"+ istudent)


console.log("---------")
let user ={
    name: 'Pham thị thuỷ tiên',
    age: 28,
    height: 150,
    hobby: 'chơi',
    istudent: false,
};
console.log("tên:"+ user.name)
console.log("tuổi:"+ user.age)
console.log("chiều cao:"+ user.height)
console.log("sở thích:"+ user.hobby)
console.log("là sinh viên:"+ user.istudent)

console.log("---------")
// kiểm tra kiểu dữ liệu khái báo
console.log(typeof name);
console.log(typeof current);
console.log(typeof birth);
console.log(typeof istudent);
console.log(typeof Height);
console.log(typeof hody);

//// cài thêm extension

/** Bài tập về nhà
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
// 1. Tìm fullname
let fullname = data.firstname + " " + data.lastname;
console.log("Fullname:", fullname);

// 2. Kiểm tra kiểu dữ liệu
console.log("Kiểu dữ liệu totalprice:", typeof data.totalprice);
console.log("Kiểu dữ liệu depositpaid:", typeof data.depositpaid);
console.log("Kiểu dữ liệu checkin:", typeof data.bookingdates.checkin);
console.log("Kiểu dữ liệu checkout:", typeof data.bookingdates.checkout);

// 3. Tìm giá trị các key
console.log("additionalneeds:", data.additionalneeds);
console.log("checkin:", data.bookingdates.checkin);
console.log("checkout:", data.bookingdates.checkout);