// //ctrl + J: mở file terminal để chạy chính trên sever máy của mình
// watch: khi save liên tục sẽ chạy tiếp tục., ko có thi sẽ ko chay tiếp. 
//ctrl +c: thoát lệnh chường trình.
// Node--watch bai4.js để chạy chương trình. 



// // console.log(123);

// function greet (name){
//     console.log("helo");
// }
// greet("danh")

console.log ("************Bài tập về nha*****");

//Bài 1.  tính diện tích hình chữ nhật
// Cách 1:  function declaration
function dientich (width,height)
{
    return width*height;
}
console.log(dienTich(2,3));

//cách 2:Arrow function 

const dientich = (width, height) => width*height
console.log(dientich(2,3));


/*2. Viết function declaration nhận 2 số, trả về tổng
 Cách 1:  function declaration*/
 function sum(a,b)
 {
    return a+b;
 }
 console.log (sum(3,7));
 console.log(sum(-1,5));

// các 2: Arrow function
const sum= (a,b)=>
{
    return a+b;
}
console.log (sum(3,7));
 console.log(sum(-1,5));

//Bài 3 — Chẵn hay Lẻ?
// Viết arrow function nhận 1 số, trả về chuỗi "Chẵn" hoặc "Lẻ".

// // Kết quả mong đợi:
// chanLe(4); // "Chẵn"
// chanLe(7); // "Lẻ"


 // Cách 1:  function declaration
function chanLe(so) {
    if (so % 2 === 0) {
        return "Chẵn";
    } else {
        return "Lẻ";
    }
}

// Kết quả
console.log(chanLe(4)); // Chẵn
console.log(chanLe(7)); // Lẻ

//Cách 2:Arrow function
const chanLe = (so) => 
{
    return so % 2 === 0 ? "Chẵn" : "Lẻ";
};

// Kết quả
console.log(chanLe(4)); 
console.log(chanLe(7)); 

/*4. Viết function declaration nhận name và role, in ra lời chào.
Kết quả mong đợi:
chaoMung("An", "QA");
"Chào An! Vai trò của bạn là QA."*/

// Cách 1: funtion declaration
function chaoMung (name,role)
{
    console.log (`chào ${name} vai tro cua ban la ${role}.`);
}
chaoMung ("An", "QA");

//cách 2: Arrow function

const chaoMung = (name, role) =>
{
    console.log (`chào ${name} vai tro cua ban la ${role}.`);
}
chaoMung ("An", "QA")

 /*Bài 5 — Tìm số lớn nhất
Viết arrow function nhận mảng số, trả về số lớn nhất. (Gợi ý: dùng Math.max(...arr))
 Kết quả mong đợi:
timMax([3, 9, 1, 7]); // 9
timMax([-2, 0, 5]);   // 5

// Cách 1: Function declaration*/

function timMax(arr) {
    return Math.max(...arr);
}

console.log(timMax([3, 9, 1, 7])); // 9
console.log(timMax([-2, 0, 5]));   // 5

// Cách 2: Arrow function
const timmax = (arr) => {
    return Math.max(...arr);
}

console.log(timmax([3, 9, 1, 7])); // 9
console.log(timmax([-2, 0, 5]));   // 5