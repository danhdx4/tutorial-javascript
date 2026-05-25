function display_log() {
  console.log("-------------------");
}

const numbers = [1, 2, 3];

const doubled = numbers.map((n) => n * 2);

console.log(doubled); // [2, 4, 6]
console.log(numbers);

display_log();
const users = [
  { name: "An", age: 25 },
  { name: "Bình", age: 30 },
];

console.log(users);
const names = users.map((u) => {
  return "xin chào " + u.name;
});
console.log(names);

const ages = users.map((u) => {
  return "xin chào " + u.name + ", tuổi " + u.age;
});
console.log(ages);
display_log();
const useRs = [
  { name: "An", age: 25 },
  { name: "Bình", age: 30 },
  { name: "Cường", age: 20 },
];

const adults = useRs.filter((u) => u.age <= 25);

console.log(adults);
display_log();
const userss = useRs.filter((u) => u.name === "An" || u.name === "Bình");
console.log(userss);

display_log();
//  Bài 1 — Truy cập phần tử Array
// const  Bài 1 — Truy cập phần tử Array
// In ra phần tử đầu tiên
// In ra phần tử cuối cùng
// In ra độ dài của mảng
const fruits = ["Cam", "Táo", "Xoài", "Chuối"];

console.log(fruits[0]); // Cam
console.log(fruits[fruits.length - 1]); // Chuối
console.log(fruits.length); // 4

display_log();
//  Bài 2 — Truy cập thuộc tính Object
const product = {
  name: "Laptop",
  price: 15000000,
  inStock: true,
};
// In ra tên sản phẩm
// In ra giá tiền
// Kiểm tra kiểu dữ liệu của inStock

console.log(product.name); // Laptop
console.log(product.price); // 15000000
console.log(typeof product.inStock); // boolean

display_log();
// Bài 3 — map() cơ bản
const scores = [5, 7, 8, 6, 9];
// Tạo mảng mới cộng thêm 1 điểm cho mỗi bạn
// Tạo mảng nhân đôi điểm số
console.log(scores);

const increasedScores = scores.map((score) => score + 1);
console.log(increasedScores); // [6, 8, 9, 7, 10]

const doubledScores = scores.map((score) => score * 2);
console.log(doubledScores); // [10, 14, 16, 12, 18]

display_log();
//  Bài 4 — filter() cơ bản
const aGes = [15, 22, 17, 30, 16, 25];
// Lọc ra những người đủ 18 tuổi trở lên
// Lọc ra những người dưới 18 tuổi

const aDults = aGes.filter((age) => age >= 18);
console.log(aDults); // [22, 30, 25]

const minors = aGes.filter((age) => age < 18);
console.log(minors); // [15, 17, 16]

console.log(aGes.length);

display_log();
//  Bài 5 — find() cơ bản
const students = [
  { name: "An", score: 8 },
  { name: "Bình", score: 5 },
  { name: "Cúc", score: 9 },
];
// Tìm học sinh tên "Bình"
// Tìm học sinh có điểm > 8

const studentBinh = students.find((student) => student.name === "Bình");
console.log(studentBinh); // { name: "Bình", score: 5 }

const highScorer = students.find((student) => student.score > 8);
console.log(highScorer); // { name: "Cúc", score: 9 }
