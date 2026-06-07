//Bài học buổi 4: Cấu trúc điều khiển trong JavaScript 
for (let i = 1; i <= 5; i++) {
    if(i === 3)    
    {   
         console.log("Bỏ qua số 3");
    }
   console.log(i);
}

 let status = 404;
/**yêu cầu:
200 → OK
404 → NOT FOUND
500 → SERVER ERROR
default → UNKNOWN 
*/
switch (status) {
    case 200:
        console.log("OK");  
        break;  
    case 404:
        console.log("NOT FOUND");  
        break;  
    case 500:
        console.log("SERVER ERROR");  
        break;  
    default:
        console.log("UNKNOWN");  
        break;
}   
/**
 * Bài 2: Viết switch kiểm tra biến userRole ("admin", "user", "guest") và in ra quyền tương ứng "Được xóa bài"/"Được đăng bài"/"Chỉ xem"/"Role không hợp lệ" (default)
 */
let userRole = "admin";
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
        console.log("Role không hợp lệ");
        break;
}

/**
 * Bài 1: Dùng vòng lặp for để in ra các số từ 1 đến 5, nhưng nếu là số 3 thì in thêm chữ "(Bỏ qua test case này)".
 */
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log(i + " (Bỏ qua test case này)");
    } else {
        console.log(i);
    }
}

/**
 * Bài tập về nhà:
1. Hãy hiển thị danh sách phim dưới đây
     ===== DANH SÁCH PHIM =====
1. Avengers      - 90000đ
2. Conan         - 70000đ
3. Doraemon      - 60000đ
4. One Piece     - 80000đ
0. Thoát
2. - user sẽ nhập số để chọn phim tương ứng hãy dùng switch case để: in tên phim và giá vé đã chọn
    Gợi ý mục 2: khởi tạo biến và lấy giá trị khi user nhập số chọn phim bằng hàm sau:
let choice
choice = Number(prompt("Chọn phim:")); --> giả lập màn hình hiển thị "Chọn phim: __"
Ý nghĩa: prompt(""): Hiển thị ô nhập liệu để user có thể nhập vào --> sau khi nhập xx hàm sẽ nhận giá trị prompt("xx") --> đây là String --> dùng Number() để convert String sang Number (từ "xx" --> xx)
3. - Nhập số lượng vé --> tương tự như nhập "Chọn phim"
Sau đó tính tổng tiền (tổng tiền = giá vé * số lượng);
In số lượng, tổng tiền
 */
let movies = [
    { name: "Avengers", price: 90000 },
    { name: "Conan", price: 70000 },        
    { name: "Doraemon", price: 60000 },
    { name: "One Piece", price: 80000 }
];
 console.log("===== DANH SÁCH PHIM =====");

for (let i = 0; i < movies.length; i++) {
    console.log((i + 1) + ". " + movies[i].name + " - " + movies[i].price + "đ");
}   
console.log("0. Thoát");

let choice = Number(prompt("Chọn phim:"));
switch (choice) {
    case 1 :     
        console.log("Bạn đã chọn phim Avengers với giá vé 90000đ");
        break;
    case 2 :
        console.log("Bạn đã chọn phim Conan với giá vé 70000đ");
        break;  
    case 3 :
        console.log("Bạn đã chọn phim Doraemon với giá vé 60000đ");
        break;
    case 4 :
        console.log("Bạn đã chọn phim One Piece với giá vé 80000đ");
        break;  
    case 0:
        console.log("Bạn đã chọn thoát");
        break;
    default:
        console.log("Lựa chọn không hợp lệ");
        break;
}
/** 3: Nhập số lượng vé ----- */ 
       
let qty = Number(prompt("Nhập số lượng vé:"));
let price;
switch (choice) {
    case 1 :    
        price = 90000;
        break;
    case 2 :
        price = 70000;
        break;          
    case 3 :
        price = 60000;
        break;
    case 4 :
        price = 80000;
        break;
    default:
        price = 0;
        break;
}

// 3.5. Tính tổng tiền
let total = price * qty;
console.log("Số lượng vé: " + qty);
console.log("Tổng tiền: " + total + "đ");


