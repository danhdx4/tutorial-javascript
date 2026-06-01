// Bài 1 — Convert sang Arrow
// function multiply(a, b) {
//   return a * b;
// }
// // 👉 Viết lại bằng arrow function
console.log("Bài 1:------------------------");
const multiply = (a,b) => a*b;
console.log(multiply(2, 3));


// 📚 Bài 2 — Convert sang Declaration
// const divide = (a, b) => a / b;
// // 👉 Viết lại bằng function declaration
console.log("Bài 2:------------------------");
function divide(a,b){
    return a/b;
}
console.log(divide(2,3));


// 📚 Bài 3 — Viết function mới
// Viết function nhận vào name, trả về chuỗi "Hello <name>"
console.log("Bài 3:------------------------");
function hello (name){
    console.log(`Hello ${name}`);
}
hello("Trang");


// 📚 Bài 4 — Array + Arrow
// const numbers = [1,2,3,4];
// // 👉 Tạo array bình phương các số
console.log("Bài 4:------------------------");
const numbers = [1,2,3,4];
const square = numbers.map(i => i*i);
console.log(square);



console.log ("============Bài tập về nhà============");

//Bài 1.  tính diện tích hình chữ nhật
console.log("Bài 1 — Tính diện tích hình chữ nhật");
const dientich = (width, height) => width*height
console.log(dientich(2,3));


//2. Viết function declaration nhận 2 số, trả về tổng
console.log("Bài 2 — Viết function declaration nhận 2 số, trả về tổng");
const sum= (a,b)=> a+b;
console.log (sum(3,7));

//Bài 3 — Chẵn hay Lẻ?
// Viết arrow function nhận 1 số, trả về chuỗi "Chẵn" hoặc "Lẻ".
// // Kết quả mong đợi:
// chanLe(4); // "Chẵn"
// chanLe(7); // "Lẻ"
console.log("Bài 3 — Chẵn hay Lẻ?");
function chanLe (number){
    return number % 2 === 0 ? "Chẵn" : "Lẻ";
};
console.log(chanLe(4)); 
console.log(chanLe(7)); 

/*4. Viết function declaration nhận name và role, in ra lời chào.
Kết quả mong đợi:
chaoMung("An", "QA");
"Chào An! Vai trò của bạn là QA."*/
console.log("Bài 4 — Viết function declaration nhận name và role, in ra lời chào.");
function chaoMung (name,role)
{
    console.log (`chào ${name} vai tro cua ban la ${role}.`);
}
chaoMung ("An", "QA");


 /*Bài 5 — Tìm số lớn nhất
Viết arrow function nhận mảng số, trả về số lớn nhất. (Gợi ý: dùng Math.max(...arr))
 Kết quả mong đợi:
timMax([3, 9, 1, 7]); // 9
timMax([-2, 0, 5]);   // 5*/
console.log("Bài 5 — Tìm số lớn nhất");
function timMax(array) {
    return Math.max(...array);
}
console.log(timMax([3, 9, 1, 7])); // 9
console.log(timMax([-2, 0, 5]));   // 5

