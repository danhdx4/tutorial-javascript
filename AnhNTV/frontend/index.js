
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
console.log(typeof data.bookingdates.checkin);
console.log(typeof data.bookingdates.checkout);

console.log("additional needs: " + data.additionalneeds);
console.log("check-in date: " + data.bookingdates.checkin);
console.log("check-out date: " + data.bookingdates.checkout);

///Buổi 3: Vòng lặp và điều kiện
//Tạo các biến:​
//Họ tên (string), ​
//Tuổi (number, và tính tuổi =(2026 - năm sinh)​
//Số năm kinh nghiệm (number) ​
//Có biết automation hay không (boolean) ​

//Yêu cầu:​
 //Phân loại ​
/* < 1 năm → "Fresher"​
1–3 năm → "Junior QA"​
3–5 năm → "Middle QA"​
>5 năm → "Senior QA"​
Kiểm tra điều kiện tuyển Senior Automation QA ​
Kinh nghiệm ≥ 3 năm​
Biết automation = true​
Tuổi ≤ 35​
Nếu thỏa mãn các yêu cầu trên:​
→ "Đủ điều kiện Senior Automation QA"​
Ngược lại:​
→ "Chưa đủ điều kiện“​
In toàn bộ thông tin​ */

console.log("Bài 3................") 
let name1 = "Nguyen Thi Van Anh";
let birth1 = 1995;
let current1 = 2026;
let experience = 4;
let isAutomation = true;
let age1 = current1 - birth1; 
console.log("Tên:", name1);
console.log("Tuổi:", age1);
console.log("Số năm kinh nghiệm:", experience);
console.log("Biết automation:", isAutomation);    
if (experience < 1) {
    console.log("Fresher");
} else if (experience <= 3) {
    console.log("Junior QA");
} else if (experience <= 5) {
    console.log("Middle QA");
} else {
    console.log("Senior QA");
};


if (experience >= 3 && isAutomation && age1 <= 35) {
    console.log("Đủ điều kiện Senior Automation QA");
} else {
    console.log("Không đủ điều kiện");
}


///Buổi 4: 
console.log("Buổi 4:........................")

let role="admin";
switch (role) {
   case "admin":
      console.log("Quản trị");
      break;
   case "user":
      console.log("Người dùng");
      break;
   default:
     console.log("Khách");
}

///: Dùng vòng lặp for để in ra các số từ 1 đến 5,
//  nhưng nếu là số 3 thì in thêm chữ "(Bỏ qua test case này)".

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log(i, "Bỏ qua testcase này");
  } else {
    console.log(i);
  }
}

console.log("Bài 2:........................")
//Viết switch kiểm tra biến userRole ("admin", "user", "guest") 
// và in ra quyền tương ứng "Được xóa bài"/"Được đăng bài"/"Chỉ xem"/"Role không hợp lệ" (default)

let userRole = "user"

switch (userRole) {
   case "admin":
      console.log("Được xóa bài");
      break;
   case "user":
      console.log("Được đăng bài");
      break;
    case "guest":
      console.log("Chỉ xem");
      break;
   default:
     console.log("Không hợp lệ");
}



///Buổi 5: 
console.log(123)

///Buổi 6: 
console.log("Buổi 6.................")
const numbers = [1, 2, 3];

const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3] ← không đổi!


const users = [
  { name: "An",   age: 25 },
  { name: "Bình", age: 30 }
];

const names = users.map(u => u.name);

console.log(names);
// ["An", "Bình"]

const usersList = [
  { name: "An",    age: 25 },
  { name: "Bình",  age: 30 },
  { name: "Cường", age: 20 }
];

const adults = usersList.filter(u => u.age >= 25);

console.log(adults);
// [{ name:"An",age:25 }, { name:"Bình",age:30 }]

const foundUser = users.find(u => u.name === "Bình");

console.log(foundUser);
// { name: "Bình", age: 30 }

// 📚 Bài 1 — Truy cập phần tử Array
// const fruits = ["Cam", "Táo", "Xoài", "Chuối"];
// In ra phần tử đầu tiên
// In ra phần tử cuối cùng
// In ra độ dài của mảng

console.log(" Bài 1: Truy cập phần tử array")
const fruits = ["Cam", "Táo", "Xoài", "Chuối"];
console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

// Bài 2 — Truy cập thuộc tính Object
// const product = {
//   name: "Laptop",
//   price: 15000000,
//   inStock: true
// };
// In ra tên sản phẩm
// In ra giá tiền
// Kiểm tra kiểu dữ liệu của inStock
console.log(" Bài 2")
const product = {
  name: "Laptop",
  price: 15000000,
  inStock: true
};

console.log(product.name);
console.log(product.price);
console.log(typeof product.inStock);

// Bài 3 — map() cơ bản
// const scores = [5, 7, 8, 6, 9];
// Tạo mảng mới cộng thêm 1 điểm cho mỗi bạn
// Tạo mảng nhân đôi điểm số
console.log(" Bài 3------------")

const scores = [5, 7, 8, 6, 9];
const doubled1 = scores.map(n => n + 1);
console.log(doubled1);
const nhandoi = scores.map(n => n*2);
console.log(nhandoi);

//  Bài 4 — filter() cơ bản
// const ages = [15, 22, 17, 30, 16, 25];
// Lọc ra những người đủ 18 tuổi trở lên
// Lọc ra những người dưới 18 tuổi

console.log(" Bài 4------------")
const ages = [15, 22, 17, 30, 16, 25];
const ages1 = ages.filter(u => u >= 18);

console.log(ages1);

const ages2 = ages.filter(u => u < 18);

console.log(ages2);

// Bài 5 — find() cơ bản
// const students = [
//   { name: "An",   score: 8 },
//   { name: "Bình", score: 5 },
//   { name: "Cúc",  score: 9 }
// ];
// Tìm học sinh tên "Bình"
// Tìm học sinh có điểm > 8

console.log(" Bài 5------------")
const students = [
  { name: "An",   score: 8 },
  { name: "Bình", score: 5 },
  { name: "Cúc",  score: 9 }
];

const students1 = students.find(u => u.name =="Bình");
console.log(students1);


///Buổi 6
console.log("Buổi 6:.......................")
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    getInfo() {
        console.log("Hello");
    }
}

let user = new User(1, "user");
let object = {
    id: 1,
    name: "user"
    getInfo() => {
        console.log("Hello");
};

user.getInfo();
console.log(user, object);