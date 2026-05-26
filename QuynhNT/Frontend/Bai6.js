const numbers = [1, 2, 3];

const doubled = numbers.map((n) => n * 2);

console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3] ← không đổi!

console.log("===");
const users = [
  { name: "An", age: 25 },
  { name: "Bình", age: 30 },
];

const names = users.map((u) => {
  if (u.age >= 30) {
    return u;
  }
});

console.log(names);
// ["An", "Bình"]

const users_1 = [
  { name: "An", age_1: 25 },
  { name: "Bình", age_1: 30 },
  { name: "Cường", age_1: 20 },
];

const adults = users_1
  .filter((u) => u.age_1 >= 25)
  .map((u) => u.name + " " + u.age_1);

console.log(adults);
// [{ name:"An",age:25 }, { name:"Bình",age:30 }]

// const fruits = ["Cam", "Táo", "Xoài", "Chuối"];
// In ra phần tử đầu tiên
// In ra phần tử cuối cùng
// In ra độ dài của mảng

const fruits = ["Cam", "Táo", "Xoài", "Chuối"];
console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

console.log("=====");
const product = {
  name: "Laptop",
  price: 15000000,
  inStock: true,
};
// In ra tên sản phẩm
// In ra giá tiền
// Kiểm tra kiểu dữ liệu của inStock

console.log(product.name);
console.log(product.price);
console.log(typeof product.inStock);

const scores = [5, 7, 8, 6, 9];
// Tạo mảng mới cộng thêm 1 điểm cho mỗi bạn
// Tạo mảng nhân đôi điểm số
const doubled_1 = scores.map((n) => n + 1);
console.log(doubled_1);
// console.log(scores);
const nhandoi = scores.map((n) => n * 2);
console.log(nhandoi);
// console.log(scores);
const ages_5 = [15, 22, 17, 30, 16, 25];
// Lọc ra những người đủ 18 tuổi trở lên
// Lọc ra những người dưới 18 tuổi
const adults_1 = ages_5.filter((u) => {
  //Mảng thì không cần u.age nếu là object thì cần
  return u >= 18;
});
console.log(adults_1);

const adults_2 = ages_5.filter((u) => {
  //Mảng thì không cần u.age nếu là object thì cần
  return u < 18;
});
console.log(adults_2);

console.log("======");
const students = [
  { name_10: "An", score: 8 },
  { name_10: "Bình", score: 5 },
  { name_10: "Cúc", score: 9 },
];

// Tìm học sinh tên "Bình"
// Tìm học sinh có điểm > 8

const find_name = students.filter((u) => {
  return u.name_10 == "Bình";
});
console.log(find_name);

const find_score = students.filter((u) => {
  return u.score > 8;
});
console.log(find_score);
