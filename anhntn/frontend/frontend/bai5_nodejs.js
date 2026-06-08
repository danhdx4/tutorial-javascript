console.log("bai5_nodejs.js is loaded"); 
function greet(name) {
    console.log(`Hello ${name}!`);
}   
greet("Ngoc Anh");


let userRole = "admin";
switch (userRole) {
    case "admin":       
        checkStatus("Được xóa bài");
        break;
    case "user":
        checkStatus("Được đăng bài");
        break;  
    case "guest":
        checkStatus("Chỉ xem");
        break;
    default:
        checkStatus("Role không hợp lệ");
        break;
}
function checkStatus(userRole) {
    console.log(userRole); 
}

const sum = (a, b) => a + b;
console.log(sum(5, 3));

 const dientich = (width, height) => {
   // width * height;
   console.log(width, height, 111);
 } 
 console.log(dientich([2,3], 1));
 //console.log(dientich(4, 5));

 ////BTVN:
 
/**Bài 1 — Tính tổng
Viết function declaration nhận 2 số, trả về tổng.
*/
function amount(a, b) {
    return a + b;
}
console.log(amount(3, 7)); 
console.log(amount(-1, 5)); 

/**Bài 2 — Tính diện tích hình chữ nhật 
Viết arrow function nhận width, height, trả về diện tích.
*/

/* Cách 1: function acreage(width, height) {
    return width * height;
}

console.log(acreage(5, 4));
console.log(acreage(3, 3));
*/
// Cách 2: 
const acreage2 = (width, height) => width * height;
console.log(acreage2(5, 4));
console.log(acreage2(3, 3)); 

/**Bài 3 — Kiểm tra số chẵn lẻ
Viết arrow function nhận 1 số, trả về chuỗi "Chẵn" hoặc "Lẻ".
*/
const chanle = (num) => {
    if (num % 2 === 0) {
        return "Chẵn";
    } else {    
        return "Lẻ";
    }
}
console.log(chanle(4));
console.log(chanle(7));

/*Bài 4 — Lời chào cá nhân hoá
Viết function declaration nhận name và role, in ra lời chào.
*/
/*Cách 1:
function chaoMung(name, role) {
    console.log(`Xin chào ${name}, bạn là ${role}`);
}   
chaoMung("Ngoc Anh", "QA");
*/
//Cách 2
const chaoMung2 = (name, role) => console.log(`Xin chào ${name}, bạn là ${role}`); 
console.log(chaoMung2("Ngoc Anh", "QA"));


/*Bài 5 — Tìm số lớn nhất
Viết arrow function nhận mảng số, trả về số lớn nhất. (Gợi ý: dùng Math.max(...arr))
*/
const maxNumber = (arr) => Math.max(...arr);
console.log(maxNumber([3, 7, 2, 9, 5])); 
console.log(maxNumber([-1, -5, -3]));










