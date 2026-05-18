// Hãy hiển thị danh sách phim dưới đây
//      ===== DANH SÁCH PHIM =====
// 1. Avengers      - 90000đ
// 2. Conan         - 70000đ
// 3. Doraemon      - 60000đ
// 4. One Piece     - 80000đ
// 0. Thoát

let listFilm = [
    {
        id: 1,
        name: "Avengers",
        price: 90000,
    },
    {
        id: 2,
        name: "Conan",
        price: 70000,
    },
    {
        id: 3,
        name: "Doraemon",
        price: 60000,
    },
    {
        id: 4,
        name: "One Piece",
        price: 80000,
    }
];

console.log("===== DANH SÁCH PHIM =====")
console.log("1.", listFilm[0].name + " - " + listFilm[0].price + "đ")
console.log("2.", listFilm[1].name + " - " + listFilm[1].price + "đ")
console.log("3.", listFilm[2].name + " - " + listFilm[2].price + "đ")
console.log("4.", listFilm[3].name + " - "+ listFilm[3].price + "đ")
console.log("0. Thoát")

// user sẽ nhập số để chọn phim tương ứng hãy dùng switch case để: in tên phim và giá vé đã chọn

let choice;
choice = Number(prompt("Chọn phim:"));
let choicePrice = 0;

switch (choice) {
    case 1:
        choicePrice = listFilm[0].price;
        console.log(listFilm[0].name + " - "+ listFilm[0].price + "đ")
      break; 
    case 2:
        choicePrice = listFilm[1].price;
        console.log(listFilm[1].name + " - "+ listFilm[1].price + "đ")
      break;
    case 3:
        choicePrice = listFilm[2].price;
        console.log(listFilm[2].name + " - "+ listFilm[2].price + "đ")
      break; 
    case 4:
        choicePrice = listFilm[3].price;
        console.log(listFilm[3].name + " - "+ listFilm[3].price + "đ")
      break;
    case 0:
        console.log("Thoát chương trình")
      break;
   default:
        console.log("Phim không hợp lệ")
} 

// Nhập số lượng vé --> tương tự như nhập "Chọn phim"
// Sau đó tính tổng tiền (tổng tiền = giá vé * số lượng);
// In số lượng, tổng tiền

let choice1;
choice1 = Number(prompt("Số lượng vé:"));

if (choice1 >= 1 && 0 < choice && choice <= 4) {
    let totalPrice = choicePrice * choice1;
    console.log("Số lượng: " + choice1);
    console.log("Tổng tiền: " + totalPrice + "đ");
} else {
    alert("Số lượng không hợp lệ. Xin vui lòng nhập lại");
}
