// bài 4;
//commit/full code chọn create tick chọn checkbox 3.
// switch so sánh bằng.
// Điều kiện phức tạp: if/else
// So sánh nhiều giá trị cố định: switch
// Biết số lần lặp: for
// Không biết trước số lần: while

 // bài tập thực hành.
// Bài 1: Dùng vòng lặp for để in ra các số từ 1 đến 5, nhưng nếu là số 3 thì in thêm chữ "(Bỏ qua test case này)".

for (let i = 1; i <= 5; i++) {
    if(i ===3){
        console.log(i + " (Bỏ qua test case này)");
    }
   console.log(i);
}

// Cú pháp: 
switch (status) {
   case 200:
    console.log ("ok");
       // code
      break;  
  case 404:
      // code
      console.log("Not found");

case 500:
      // code
      console.log("Server error");
      break;
   default:
      // code mặc định
        console.log("Unknown status");
} 
// Bài 2: Viết switch kiểm tra biến userRole ("admin", "user", "guest")
//  và in ra quyền tương ứng "Được xóa bài"/"Được đăng bài"/"Chỉ xem"/"Role không hợp lệ" (default)
let userRole = "admin";
switch (userRole)
 {
    case "admin":
        console.log("Được xóa bài");
        break;
        case"user":
        console.log("được đăng kí bài");
        break;
        case"guest":
        console.log("chỉ xem");
        break;
    default:
        console.log("roke không hợp lệ");}

    // bài tập về nhà.tập về nhà:
// 1. Hãy hiển thị danh sách phim dưới đây
//      ===== DANH SÁCH PHIM =====
// 1. Avengers      - 90000đ
// 2. Conan         - 70000đ
// 3. Doraemon      - 60000đ
// 4. One Piece     - 80000đ
// 0. Thoát
// 2. - user sẽ nhập số để chọn phim tương ứng hãy dùng switch case để: in tên phim và giá vé đã chọn
//     Gợi ý mục 2: khởi tạo biến và lấy giá trị khi user nhập số chọn phim bằng hàm sau:
// let choice
// choice = Number(prompt("Chọn phim:")); --> giả lập màn hình hiển thị "Chọn phim: __"
// Ý nghĩa: prompt(""): Hiển thị ô nhập liệu để user có thể nhập vào --> sau khi nhập xx hàm sẽ nhận giá trị prompt("xx") --> đây là String --> dùng Number() để convert String sang Number (từ "xx" --> xx)
// 3. - Nhập số lượng vé --> tương tự như nhập "Chọn phim"
// Sau đó tính tổng tiền (tổng tiền = giá vé * số lượng);
// In số lượng, tổng tiền

//1. Hiển thị danh sách phim
console.log("Danh sách phim");
console.log("1. Avengers      - 90000đ");
console.log("2. Conan         - 70000đ");
console.log("3. Doraemon      - 60000đ");
console.log("4. One Piece     - 80000đ");
console.log("0. Thoát");

//2. User nhập số để chọn phim
let choice = Number(prompt("Chọn phim:"));
 let  tenphim ="";
 let giave =0;
 switch(choice){
    case 1:
        tenphim = "Avengers";
        giave=90000
        break;
    case 2:
        tenphim = "Conan";
        giave=70000
        break;
    case 3:
        tenphim = "Doraemon";
        giave=60000
        break;
    case 4:
        tenphim = "One Piece";
        giave=80000
        break;
    case 0:
        console.log("Thoát chương trình");
        break;  
        Default:
        console.log
        ("Lựa chọn không hợp lệ");
        break;
 }
//3
if (choice >=1 && choice <=4    ){
    console.log(" Thông tin đặt vé");
    Console.log("Tên phím" +tenphim);
    console.log("Giá vé:" +giave + "đ");
    let soluong =number(prompt("Nhập số lượng vé:"));
    let tongtien = giave * soluong;
    console.log("Số lượng vé:" +soluong);
    console.log("Tổng tiền:" +tongtien + "đ");
    Console.log("Cảm ơn bạn đã đặt vé");
}