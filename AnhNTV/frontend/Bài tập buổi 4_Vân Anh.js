/* Hãy hiển thị danh sách phim dưới đây
     ===== DANH SÁCH PHIM =====
1. Avengers      - 90000đ
2. Conan         - 70000đ
3. Doraemon      - 60000đ
4. One Piece     - 80000đ
0. Thoát
 */

console.log("Bài 1: Hiển thị danh sách phim")
const movies = [
    { name: "Avengers", price: 90000 },

    { name: "Conan", price: 70000 },

    { name: "Doraemon", price: 60000 },
    { name: "One Piece", price: 80000 },
];

console.log("===== DANH SÁCH PHIM =====");
for (let i = 0; i < movies.length; i++) {
    console.log(`${i + 1}. ${movies[i].name} - ${movies[i].price}đ`);
} 
console.log("0. Thoát");


//user sẽ nhập số để chọn phim tương ứng
//  hãy dùng switch case để: in tên phim và giá vé đã chọn  
console.log("Bài 2: Chọn phim");

let choice;
choice = Number(prompt("Chọn phim:"));
let movieName = "";
let ticketPrice = 0;
switch (choice) {
    case 1:
        movieName = "Avengers";
        ticketPrice = 90000;
        console.log("Bạn đã chọn phim Avengers");
        console.log("Giá vé: 90000đ");
        break;
    case 2:
        movieName = "Conan";
        ticketPrice = 70000;
        console.log("Bạn đã chọn phim Conan");
        console.log("Giá vé: 70000đ");
        break;
    case 3:
        movieName = "Doraemon";
        ticketPrice = 60000;
        console.log("Bạn đã chọn phim Doraemon");
        console.log("Giá vé: 60000đ");
        break;
    case 4:
        movieName = "One Piece";
        ticketPrice = 80000;
        console.log("Bạn đã chọn phim One Piece");
        console.log("Giá vé: 80000đ");
        break;
    case 0:
        console.log("Thoát chương trình");
        break;
    default:
        console.log("Lựa chọn không hợp lệ");
        break;
} 
/* . - Nhập số lượng vé --> tương tự như nhập "Chọn phim"
Sau đó tính tổng tiền (tổng tiền = giá vé * số lượng);
In số lượng, tổng tiền */
let quantity;
quantity = Number(prompt("Nhập số lượng vé:"));
let totalPrice = ticketPrice * quantity;
console.log(`Số lượng vé: ${quantity}`);
console.log(`Tổng tiền: ${totalPrice}đ`);


