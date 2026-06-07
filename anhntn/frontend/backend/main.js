// file: main.js

// Import class từ file khác
const Product = require("./models/products");

// Sử dụng bình thường
const product = new Product(1, "Laptop", 25000000);
product.getInfo();
// #1 - Laptop - 25000000 VND

/**async function layDuLieu() {

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

//BTVN 
/**Bài 1 — Chia file & Export
Lấy class Animal và Dog từ bài tập đã làm ở buổi 7
Copy mỗi class vào một file .js riêng
Thêm module.exports = Animal vào cuối Animal.js
Thêm const Animal = require("./Animal") + module.exports = Dog vào Dog.js
*/



//BTVN
const Dog      = require("./models/Dog");
const dogsData = require("./data/dogs.json");

const dogs = dogsData.map(d => new Dog(d.name, d.breed));
dogs.forEach(dog => { dog.speak(); dog.fetch(); });


const Car      = require("./models/Cars.js");
const carsData = require("./data/cars.json");

const cars = carsData.map(c => new Car(c.brand, c.maxSpeed, c.seats));
cars.forEach(car => { car.getInfo(); car.honk(); });

