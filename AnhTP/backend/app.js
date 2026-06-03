// Bước 1 — Import class
// Trong app.js, require() class Product, tạo 1 object và console.log ra.
console.log("📦 Bước 1 : Tạo object Product:");
const Product = require("./models/Product");

const productData = {
  id: 3,
  name: "Giầy trẻ em",
  price: 550000,
  category: "Thời trang",
  inStock: false,
};

const productComplete = Product.fromJSON(productData);
console.log(productComplete.getLabel());

// Bước 2 — Đọc products.json
// require() file JSON, chuyển thành mảng object Product, in danh sách ra terminal.
console.log("\n📦 Bước 2 : Danh sách sản phẩm:");
const productsJSON = require("./data/products.json");
const products = productsJSON.map((item) => Product.fromJSON(item));
products.forEach((product) => console.log(product.getLabel()));

// Bước 3 — Gọi API thật bằng async/await
// async function layChiTiet() {
//   console.log("⏳ Bắt đầu...");
//   const res = await fetch(
//     "https://products-api-ten-alpha.vercel.app/api/products/2"
//   );
//   const data = await res.json();
//   console.log("✅", data);
// }
// layChiTiet();
// Mong đợi: in iPhone 15 Pro sau ~4 giây.

console.log("\n📦 Bước 3 : Gọi API thật bằng async/await:");
async function layChiTiet() {
  console.log("⏳ Bắt đầu...");
  const res = await fetch(
    "https://products-api-ten-alpha.vercel.app/api/products/2",
  );
  const data = await res.json();
  console.log("✅", data);
}
layChiTiet();

// Bước 4 — Bỏ await để thấy lỗi
// const res = fetch("...");  // ❌ bỏ await
// console.log(res);
// const data = res.json();  // 💥 lỗi
// res → Promise { <pending> }
// res.json() → TypeError
// → Hiểu vì sao Playwright bắt buộc await.

console.log("\n📦 Bước 4 : Bỏ await để thấy lỗi:");
const res = fetch("https://products-api-ten-alpha.vercel.app/api/products/2");
console.log(res);
try {
  const data = res.json();
  console.log(data);
} catch (error) {
  console.error("💥 Lỗi:", error);
}
