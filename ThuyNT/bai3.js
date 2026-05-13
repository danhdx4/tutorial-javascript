/************** Bài 2 */
// Tạo các biến:
// Họ tên (string),
// Tuổi (number, và tính tuổi =(2026 - năm sinh)
// Số năm kinh nghiệm (number)
// Có biết automation hay không (boolean)


let user = {
    name : "Ngo Thuy",
    birth : 2003,
    age: 2026 - birth,
    experience : 7,
    is_auto : false
}
// Yêu cầu:
//  Phân loại
// < 1 năm → "Fresher"
// 1–3 năm → "Junior QA"
// 3–5 năm → "Middle QA"
// >5 năm → "Senior QA"

if (user.experience < 1) {
    console.log("Fresher")
} else if (user.experience <= 3){
    console.log("Junior QA")
} else if (user.experience < 5){
    console.log("Middle QA")
} else {
    console.log("Senior QA")

}
// Kiểm tra điều kiện tuyển Senior Automation QA
// Kinh nghiệm ≥ 3 năm
// Biết automation = true
// Tuổi ≤ 35
// Nếu thỏa mãn các yêu cầu trên:
// → "Đủ điều kiện Senior Automation QA"
// Ngược lại:
// → "Chưa đủ điều kiện“
// In toàn bộ thông tin
