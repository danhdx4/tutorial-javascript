// 📚 Bài 1 — Truy cập phần tử Array
const fruits = ["Cam", "Táo", "Xoài", "Chuối"];
// In ra phần tử đầu 
console.log(fruits[0]);
// In ra phần tử cuối cùng
console.log(fruits[fruits.length - 1])
// In ra độ dài của mảng
console.log(fruits.length)
// 📚 Bài 2 — Truy cập thuộc tính Object
const product = {
  name: "Laptop",
  price: 15000000,
  inStock: true
};
// In ra tên sản phẩm
console.log(product.name)
// In ra giá tiền
console.log(product.price)
// Kiểm tra kiểu dữ liệu của inStock
console.log(typeof product.inStock)
// 📚 Bài 3 — map() cơ bản
const scores = [5, 7, 8, 6, 9];
// Tạo mảng mới cộng thêm 1 điểm cho mỗi bạn
const incrementedScores = scores.map(score => score + 1);
console.log(incrementedScores);
// Tạo mảng nhân đôi điểm số
const doubledScores = scores.map(score => score * 2);
console.log(doubledScores);
// // Kết quả mong đợi (cộng 1):
// // [6, 8, 9, 7, 10]
// 📚 Bài 4 — filter() cơ bản
const ages = [15, 22, 17, 30, 16, 25];
// Lọc ra những người đủ 18 tuổi trở lên
const adults = ages.filter(age => age >= 18);
console.log(adults);
// Lọc ra những người dưới 18 tuổi
const minors = ages.filter(age => age < 18);
console.log(minors);
// // Kết quả mong đợi (≥ 18):
// // [22, 30, 25]
// 📚 Bài 5 — find() cơ bản
const students = [
  { name: "An",   score: 8 },
  { name: "Bình", score: 5 },
  { name: "Cúc",  score: 9 }
];
// Tìm học sinh tên "Bình"
const studentBinh = students.find(student => student.name === "Bình");
console.log(studentBinh);
// Tìm học sinh có điểm > 8
const highScoreStudent = students.find(student => student.score > 8);
console.log(highScoreStudent);