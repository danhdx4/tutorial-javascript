// Bài tập về nhà:
// 1. Hãy hiển thị danh sách phim dưới đây
//      ===== DANH SÁCH PHIM =====
// 1. Avengers      - 90000đ
// 2. Conan         - 70000đ
// 3. Doraemon      - 60000đ
// 4. One Piece     - 80000đ
// 0. Thoát
console.log("===== DANH SÁCH PHIM =====")
let move = ["Avengers ","Conan","Doraemon ","One Piece"];
// for (let i = 0; i<move.length;i++){
//     console.log(move[i]);
// } // ở đây mới chỉ in danh sách ten phim thôi chưa có giá
for (let i=0;i<move.length;i++){
    let price;
    switch(i+1){
        case 1:
            price = 9000;
            break;
        case 2:
            price = 7000;
            break;
        case 3:
            price = 6000;
            break;
        case 4:
            price = 80000;
            break; 
    }
    console.log(i+1+". "+move[i] +" - "+price+"đ");
}
console.log("----".repeat(10));


// 2. - user sẽ nhập số để chọn phim tương ứng hãy dùng switch case để: in tên phim và giá vé đã chọn
//     Gợi ý mục 2: khởi tạo biến và lấy giá trị khi user nhập số chọn phim bằng hàm sau:
// let choice
// choice = Number(prompt("Chọn phim:")); --> giả lập màn hình hiển thị "Chọn phim: __"
// Ý nghĩa: prompt(""): Hiển thị ô nhập liệu để user có thể nhập vào --> sau khi nhập xx hàm sẽ nhận giá trị prompt("xx") --> đây là String --> dùng Number() để convert String sang Number (từ "xx" --> xx)
let choice = Number(prompt("Chọn phim:"));
switch(choice){
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
let quantity = Number(prompt("Chọn số vé:"));
let ticket_price;
switch(choice){
    case 1:
        ticket_price = 90000;
        break;
    case 2:
        ticket_price = 70000;
        break;
    case 3:
        ticket_price = 60000;
        break;
    case 4:
        ticket_price = 80000;
        break;
    case 0:  
        console.log("Thoát chương trình");
        break;
    default:
        console.log("Lựa chọn không hợp lệ"); 
}
console.log('Số lượng vé: '+quantity);
console.log("Tổng tiền: "+(ticket_price*quantity) +"đ");