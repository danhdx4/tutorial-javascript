const Product = require("./Product");
const { showLog } = require("./function");

const pro = new Product(1, "Quan", 120000);
console.log (showLog());

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