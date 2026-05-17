let role = "a";
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

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
let roles = "admin";
switch (roles) {
  case "admin":
    console.log("System Administrator");
    break;
  case "user":
    console.log("End user");
    break;
  default:
    console.log("Guest");
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách

let status = 44;
switch (status) {
  case 200:
    console.log("OK");
    break;
  case 404:
    console.log("Not Found");
    break;
  case 500:
    console.log("Server Not Found");
    break;
  default:
    console.log("Unknown");
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách

for (let i = 1; i <= 5; i++) {
  console.log("Lần lặp thứ: " + i);
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách

let fruits = ["Táo", "Cam", "Chuối"];
for (let i = 2; i >= 0; i--) {
  console.log("Trái cây: " + fruits[i]);
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
for (let i = 0; i < fruits.length; i++) {
  console.log("Trái cây: " + fruits[i]);
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
let roleA = "A";
switch (roleA) {
  case "admin":
  case "manager":
    console.log("Full access");
    break;
  case "user":
    console.log("Limited access");
    break;
  default:
    console.log("No access");
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
let retry = 1;
while (retry <= 3) {
  console.log("Login attempt:", retry);
  retry++;
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0) {
    console.log(`Bỏ qua TC : ${i}`);
    continue; // Bỏ qua lần lặp này và tiếp tục với lần lặp tiếp theo
  }
  console.log("TC :", i);
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
let userRole = "guest";
switch (userRole) {
  case "admin":
    console.log("Được xóa bài viết");
    break;
  case "user":
    console.log("Được đăng bài viết");
    break;
  case "guest":
    console.log("Được xem bài viết");
    break;
  default:
    console.log("Role không hợp lệ");
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
console.log("BTVN Buổi 4");
// 1. Hãy hiển thị danh sách phim dưới đây
//      ===== DANH SÁCH PHIM =====
// 1. Avengers      - 90000đ
// 2. Conan         - 70000đ
// 3. Doraemon      - 60000đ
// 4. One Piece     - 80000đ
// 0. Thoát

console.log("===== DANH SÁCH PHIM =====");
let movies = [, "Avengers", "Conan", "Doraemon", "One Piece"];
for (let i = 1; i < movies.length; i++) {
  let price;
  switch (i) {
    case 1:
      price = 90000;
      break;
    case 2:
      price = 70000;
      break;
    case 3:
      price = 60000;
      break;
    case 4:
      price = 80000;
      break;
  }
  console.log(`${i}. ${movies[i]} - ${price}đ`);
}

// 2. - user sẽ nhập số để chọn phim tương ứng hãy dùng switch case để: in tên phim và giá vé đã chọn
//     Gợi ý mục 2: khởi tạo biến và lấy giá trị khi user nhập số chọn phim bằng hàm sau:
// let choice
// choice = Number(prompt("Chọn phim:")); --> giả lập màn hình hiển thị "Chọn phim: __"
// Ý nghĩa: prompt(""): Hiển thị ô nhập liệu để user có thể nhập vào --> sau khi nhập xx hàm sẽ nhận giá trị prompt("xx") --> đây là String --> dùng Number() để convert String sang Number (từ "xx" --> xx)

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách

let choice = Number(prompt("Chọn phim:"));
switch (choice) {
  case 1:
    console.log("Bạn đã chọn phim : Avengers - 90000đ");
    break;
  case 2:
    console.log("Bạn đã chọn phim : Conan - 70000đ");
    break;
  case 3:
    console.log("Bạn đã chọn phim: Doraemon - 60000đ");
    break;
  case 4:
    console.log("Bạn đã chọn phim : One Piece - 80000đ");
    break;
  case 0:
    console.log("Thoát chương trình");
    break;
  default:
    console.log("Lựa chọn không hợp lệ");
}

// 3. - Nhập số lượng vé --> tương tự như nhập "Chọn phim"
// Sau đó tính tổng tiền (tổng tiền = giá vé * số lượng);
// In số lượng, tổng tiền

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách

let quantity = Number(prompt("Nhập số lượng vé:"));
let totalPrice;
switch (choice) {
  case 1:
    totalPrice = 90000 * quantity;
    break;
  case 2:
    totalPrice = 70000 * quantity;
    break;
  case 3:
    totalPrice = 60000 * quantity;
    break;
  case 4:
    totalPrice = 80000 * quantity;
    break;
  default:
    totalPrice = 0;
}
console.log(`Số lượng vé: ${quantity}`);
console.log(`Tổng tiền: ${totalPrice}đ`);
