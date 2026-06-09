//Bai 1

const ProductStore = require("./models/ProductStore.js");
const Product = require("./models/Product.js");

const dssp = [
  new Product(1, "Laptop Dell XPS 13", 25000000, "electronics", true),
  new Product(2, "iPhone 15 Pro",     28000000, "electronics", true),
  new Product(3, "Sony WH-1000XM5",   8000000,  "accessories", false),
];


const store = new ProductStore(dssp);

console.log(store.getAll());

store.getAll().forEach(p =>
  console.log(p.getLabel())
);

const p2 = store.findById(2);
console.log("Tìm id=2:", p2.getLabel());

// Lọc theo danh mục
const acc = store.findByCategory("accessories");
console.log("Accessories:", acc.length, "sản phẩm");

// Bai 2
// Đọc file JSON — tự động parse thành JS array
const rawData = require("./data/products.json");

// Bước 1: xem raw data trước
console.log("Raw JSON:", rawData);
// → [{ id: 1, name: 'Laptop Dell XPS 13', ... }, ...]

const products = rawData.map(item =>
  Product.fromJSON(item)
);

const newStore = new ProductStore(products);

newStore.getAll().forEach(p =>
  console.log(p.getLabel())
);

console.log("Còn hàng:", newStore.getInStock().length, "sản phẩm");

//Bai 3
async function layChiTiet(id) {
  console.log("⏳ Đang gọi API...");

  const res = await fetch(
    `https://products-api-ten-alpha.vercel.app/api/products/${id}`
  );
  const data = await res.json();

  console.log("✅ Nhận được:", data.name, "—", data.price);
}

layChiTiet(2);

//BTVN
const Dog      = require("./models/Dog");
const dogsData = require("./data/dogs.json");

const dogs = dogsData.map(d => new Dog(d.name, d.breed));
dogs.forEach(dog => { dog.speak(); dog.fetch(); });


// BTVN
const Car      = require("./models/Car");
const carsData = require("./data/cars.json");

const cars = carsData.map(c => new Car(c.brand, c.maxSpeed, c.seats));
cars.forEach(car => { car.getInfo(); car.honk(); });