// Dùng vòng lặp for để in ra các số từ 1 đến 5, nhưng nếu là số 3 thì in thêm chữ "(Bỏ qua test case này)

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    console.log(i, "Bo qua testcase nay");
  }
  console.log(i);
}

// let status = 404;
// yêu cầu:
// 200 → OK
// 404 → NOT FOUND
// 500 → SERVER ERROR
// default → UNKNOWN

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
    console.log("UNKNOWNh");
}

// Viết switch kiểm tra biến userRole ("admin", "user", "guest") và in ra quyền tương ứng "Được xóa bài"/"Được đăng bài"/"Chỉ xem"/"Role không hợp lệ" (default)​
let userRole = "guest_1";
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
}

// Bài tập về nhà:​
// 1. Hãy hiển thị danh sách phim dưới đây​
//      ===== DANH SÁCH PHIM =====​
// 1. Avengers      - 90000đ​
// 2. Conan         - 70000đ​
// 3. Doraemon      - 60000đ​
// 4. One Piece     - 80000đ​
// 0. Thoát​
// 2. - user sẽ nhập số để chọn phim tương ứng hãy dùng switch case để: in tên phim và giá vé đã chọn​
//     Gợi ý mục 2: khởi tạo biến và lấy giá trị khi user nhập số chọn phim bằng hàm sau:​
// let choice​
// choice = Number(prompt("Chọn phim:")); --> giả lập màn hình hiển thị "Chọn phim: __"​
// Ý nghĩa: prompt(""): Hiển thị ô nhập liệu để user có thể nhập vào --> sau khi nhập xx hàm sẽ nhận giá trị prompt("xx") --> đây là String --> dùng Number() để convert String sang Number (từ "xx" --> xx)​
// 3. - Nhập số lượng vé --> tương tự như nhập "Chọn phim"​
// Sau đó tính tổng tiền (tổng tiền = giá vé * số lượng);​
// In số lượng, tổng tiền

console.log("---Bài tập về nhà---");
let moive = {
  Avengers: 90000,
  Conan: 70000,
  Doraemon: 60000,
  One_Piece: 80000,
};

console.log("===== DANH SÁCH PHIM =====​");
for (let i = 1; i <= 4; i++) {
  if (i == 1) {
    console.log(i + ". Avengers   - " + moive.Avengers + "đ");
  } else if (i == 2) {
    console.log(i + ". Conan   - " + moive.Conan + "đ");
  } else if (i == 3) {
    console.log(i + ". Doraemon   - " + moive.Doraemon + "đ");
  } else if (i == 4) {
    console.log(i + ". One Piece   - " + moive.One_Piece + "đ");
  }
}
console.log("0. Thoát");

console.log("-- Chọn phim -- ");
let choice = Number(prompt("Chọn phim: "));
let gia = 0;
let name_movie = "";
switch (choice) {
  case 1:
    name_movie = "Avengers";
    gia = moive.Avengers;
    break;
  case 2:
    name_movie = "Conan";
    gia = moive.Conan;
  case 3:
    name_movie = "Doraemon";
    gia = moive.Doraemon;
    break;
  case 4:
    name_movie = "One Piece";
    gia = moive.One_Piece;
    break;
  case 0:
    console.log("Thoát chương trình");
    break;
  default:
    console.log("Giá trị không hợp lệ");
}
if (choice >= 1 && choice <= 4) {
  console.log("Bạn đã chọn phim: " + name_movie);
  console.log("Giá vé: " + gia + "đ ");
  let count = Number(prompt("Nhập số lượng vé: "));
  console.log("Số lượng vé: " + count + "  Tổng giá: " + count * gia + "đ");
}
