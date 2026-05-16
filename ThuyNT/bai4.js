// Vi du 1
let role = "admin";
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

// Vi du 2
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// Vi du 3
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

//Bai tap 1
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log(i, "Bo qua testcase nay");
    } else {
        console.log(i);
    }
}

//Bai tap 2
let status = 404;
switch (status) {
    case 200:
        console.log("OK");
        break;
    case 404:
        console.log("Not Found");
        break;
    case 500:
        console.log("Server Error");
        break;
    default:
        console.log("Unknown");
} 

//Bai tap 3
let userRole = "Admin";
switch (userRole) {
    case "Admin":
        console.log("Duoc xoa bai");
        break;
    case "User":
        console.log("Duoc dang bai");
        break;
    case "Guest":
        console.log("Chi xem");
        break;
    default:
        console.log("Role không hợp lệ");
} 

//BTVN 1
/*Hãy hiển thị danh sách phim dưới đây
     ===== DANH SÁCH PHIM =====
1. Avengers      - 90000đ
2. Conan         - 70000đ
3. Doraemon      - 60000đ
4. One Piece     - 80000đ
0. Thoát
*/
console.log("===== DANH SÁCH PHIM =====");
let movies = [
    film1 = {
        name: "Avengers",
        price: 90000,
    },
    film2 = {
        name: "Conan",
        price: 70000,
    },
    film3 = {
        name: "Doraemon",
        price: 60000,
    },  
    film4 = {
        name: "One Piece",
        price: 80000,
    },
];

for (let i = 0; i < movies.length; i++) {
    console.log((i + 1) + ". " + movies[i].name + " - " + movies[i].price + "đ");
}

let choice = Number(prompt("Chọn phim:")); 

for (let i = 0; i < movies.length; i++) {
    if (choice === 0) {
        console.log("Số vé không hợp lệ");
        break;
    }
    else if (choice > 0 && choice <= movies.length) {
        console.log("Bạn đã chọn phim:", movies[choice - 1].name);
        break;
    }
    else {
        console.log("Lựa chọn không hợp lệ");
        break;
    }
}

let number = Number(prompt("Nhập số vé:"));
if (number > 0) {
    let total = movies[choice - 1].price * number;
    console.log("Tổng tiền:", total + "đ");
}