// file: tests/login.test.js

// Import JSON — đơn giản như require class!
// const testData = require("../data/testData.json");

// console.log(testData.baseUrl);
// https://example.com

// Lặp qua từng user trong mảng
// testData.users.forEach(user => {
//   console.log(
//     `Test user ${user.id}: ${user.username}`
//   );
//   console.log(`  Kỳ vọng: ${user.expected}`);
// });
// Test user 1: admin 
//   Kỳ vọng: Đăng nhập thành công
// Test user 2: wrong_user
//   Kỳ vọng: Sai thông tin đăng nhập



// "async" trước function = function này có thể chờ
async function layDuLieu() {

  console.log("Bắt đầu gọi API...");

  // "await" = chờ kết quả trước khi tiếp tục
  const response = await fetch(
    "https://products-api-ten-alpha.vercel.app/api/products"
  );

  const data = await response.json();

  console.log(`Số sản phẩm: ${data.length}`);
}

// Gọi function async
layDuLieu();
// const layDuLieu = async () => {
//   const data = await fetch(url);
//   return data;
// };

// async function layChiTiet(id) {
//   console.log("⏳ Bắt đầu gọi API...");

//   const res = await fetch(
//     `https://products-api-ten-alpha.vercel.app
// /api/products/${id}`
//   );
//   const data = await res.json();

//   console.log("✅ Đã có dữ liệu:", data);
// }

// layChiTiet(2);

