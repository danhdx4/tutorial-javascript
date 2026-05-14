// 09. Toán tử gán

let x = 10; // Toán tử gán (=)
let y = 5;
let z = x + y; // Toán tử cộng (+)
console.log("Giá trị của x: " + x); // Kết quả: 10
console.log("Giá trị của y: " + y); // Kết quả: 5
console.log("Giá trị của z: " + z); // Kết quả: 15

let a = 7;
a += 3; // Toán tử gán (=)
console.log("Giá trị của a sau khi sử dụng toán tử +=: " + a); // Kết quả: 10

let b = 15;
b -= 6; // Toán tử gán (-=)
console.log("Giá trị của b sau khi sử dụng toán tử -=: " + b); // Kết quả: 9

let c = 5;
c *= 4; // Toán tử gán (*=)
console.log("Giá trị của c sau khi sử dụng toán tử *=: " + c); // Kết quả: 20

let d = 12;
d /= 2; // Toán tử gán (/=)
console.log("Giá trị của d sau khi sử dụng toán tử /=: " + d); // Kết quả: 6

let e = 5;
f = 2;
e = e - (f + 1);
console.log("Giá trị của e sau khi sử dụng toán tử gán với biểu thức: " + e); // Kết quả: 2
