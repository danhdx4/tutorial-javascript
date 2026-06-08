// // Bài 1
// const ProductStore = require('./models/ProductStore');

// // const p1 = {id: 1, name: "skirt", price: 20000, category: "Clothes", inStock: true};
// // const p2 = {id: 5, name: "t-shirt", price: 40000, category: "Clothes", inStock: false};

// // const products = new ProductStore([p1,p2])
// // products.getAll(); // getAll() → trả về toàn bộ
// // products.findById(1); // findById(id) → tìm theo id

// const Product = require('./models/Product');
// const itemList = [
//     new Product(1, 'mũ', 80000, 'phụ kiện', true),
//     new Product(5, 'giày', 200000, 'clothes', true),
//     new Product(10, 'túi', 300000, 'phụ kiện', false),
// ];
// const store = new ProductStore(itemList);
// store.getAll().forEach(p => console.log(p.getLabel()));

// console.log(store.findById(5));
// const countCat = store.findByCategory('phụ kiện').length;
// console.log(`Phụ kiện: ${countCat} sản phẩm`);

//Bài 2:
// const rawData = require('./data/products.json');
// console.log('Raw data:', rawData);

// BTVN: Animal & Dog
const Dog = require("./models/Dog");
const dogsData = require("./data/dogs.json");

const dogs = dogsData.map(d => new Dog(d.name, d.breed, d.sound));
dogs.forEach(dog => { console.log(dog.speak()); console.log(dog.fetch()) });

// BTVN: Vehicle & Car
const Car = require("./models/Car");
const carsData = require("./data/cars.json");

const cars = carsData.map(c => new Car(c.brand, c.maxSpeed, c.seats));
cars.forEach(car => { console.log(car.getInfo()); console.log(car.honk()); }); 