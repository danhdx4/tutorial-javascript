
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


if (experience>=3 && isAutomation==true && age<=35)
{
    console.log("Đủ điều kiện Senior Automation QA");}
else 
    {console.log("Không đủ điều kiện");};


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
  if(i === 3)
    console.log(i,("Bỏ qua testcase này"))
    console.log(i);
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