// Bài 1 — Tạo class Animal
// Constructor: name, sound → gán vào this
// Method speak() → in "<name> kêu: <sound>"
// Test thử hàm speak(): new Animal("Mèo", "Meo meo")

console.log("Bài 1: Tạo class Animal.............");

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(`${this.name} kêu: ${this.sound}`);
  }
}

const cat = new Animal("Mèo", "Meo meo");
cat.speak();

// Bài 2 — Tạo class Dog kế thừa Animal
// Dùng class Dog extends Animal
// Xem cú pháp ở Slide 28.
// Constructor nhận name, breed
// Gọi super(name, "Gâu gâu") rồi gán this.breed = breed.
// Tạo method fetch() → in "<name> (<breed>) đang nhặt bóng 🎾"

console.log("Bài 2: Tạo class Dog kế thừa Animal.............");
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Gâu gâu"); // tiếng sủa mặc định
    this.breed = breed;
  }

  fetch() {
    console.log(`${this.name} (${this.breed}) đang nhặt bóng 🎾`);
  }
  speak() {
    return `${this.name} (${this.breed}) sủa: ${this.sound}`;
  }
}
// test bài 2
const dog = new Dog("Bốp", "Corgi");
dog.fetch();

// Bài 3 — Override method
// Trong Dog, override method speak() để in thêm tên giống chó
// Gợi ý: return `${this.name} (${this.breed}) sủa: ${this.sound}`;
// Test thử: const dog = new Dog("Lu", "Corgi"); dog.speak();
// Kết quả mong đợi: Lu (Corgi) sủa: Gâu gâu

//Test bài 3
const dog2 = new Dog("Lu", "Corgi");
console.log(dog2.speak());

// Bài 4 — Class TestUser (gắn với QA)
// Tạo class TestUser extends User (dùng User đã viết ở Bài 5)
// Constructor: id, username, testEnv → super(id, username, "tester")
// + lưu testEnv vào this (vd: data truyền vào testEnv là "staging")
// Method getTestInfo()
// → in "Tester <username> đang test trên <testEnv>"
console.log("Bài 4: Class TestUser.............");

class User {
  constructor(id, username, role) {
    this.id = id;
    this.username = username;
    this.role = role;
  }

  getProfile() {
    return `ID: ${this.id}, Username: ${this.username}, Role: ${this.role}`;
  }
}

class TestUser extends User {
  constructor(id, username, testEnv) {
    super(id, username, "tester");
    this.testEnv = testEnv;
  }

  getTestInfo() {
    return `Tester ${this.username} đang test trên ${this.testEnv}`;
  }
}

// test bài 4
const tester1 = new TestUser(101, "QA_AnhNTV", "staging");

console.log(tester1.getProfile());
console.log(tester1.getTestInfo());

// Bài luyện thêm 1 — Class Vehicle (cha)
// Constructor: brand, maxSpeed → gán vào this
// Method getInfo() dùng template literal in "<brand> — tốc độ tối đa <maxSpeed> km/h"
// Test thử getInfo(): new Vehicle("Toyota", 180)
// Kết quả mong đợi: Toyota — tốc độ tối đa 180 km/h

console.log("Bài luyện thêm 1 : Class Vehicle.............");
class Vehicle {
  constructor(brand, maxSpeed) {
    this.brand = brand;
    this.maxSpeed = maxSpeed;
  }
  getInfo() {
    return `${this.brand} — tốc độ tối đa ${this.maxSpeed} km/h`;
  }
}

//test
const vehicle = new Vehicle("Toyota", 180);
console.log(vehicle.getInfo());

// Bài 2 — Class Car kế thừa Vehicle
// Dùng class Car extends Vehicle
// Constructor nhận brand, maxSpeed, seats
// Gọi super(brand, maxSpeed) rồi gán this.seats = seats.
// Tạo method riêng honk() → in "<brand> bíp bíp 🚗"
// Test thử: new Car("Honda", 160, 5)
// Kết quả mong đợi: Honda bíp bíp 🚗

console.log(
  "Bài luyện thêm 2,3 : Class Car kế thừa Vehicle, Override getInfo().............",
);
class Car extends Vehicle {
  constructor(brand, maxSpeed, seats) {
    super(brand, maxSpeed);
    this.seats = seats;
  }
  hock() {
    return `${this.brand} bíp bíp 🚗`;
  }

  getInfo() {
    return `${this.brand} — ${this.maxSpeed} km/h — ${this.seats} chỗ`;
  }
}

const car = new Car("Honda", 160, 5);
console.log(car.getInfo());
console.log(car.hock());

const car2 = new Car("Mazda", 200, 4);
console.log(car2.getInfo());

// Bài 3 — Override getInfo()
// Trong Car, override getInfo() để in thêm số ghế
// Gợi ý: return `${this.brand} — ${this.maxSpeed} km/h — ${this.seats} chỗ`;
// Test thử: const car = new Car("Mazda", 200, 4); car.getInfo();
// Kết quả mong đợi: Mazda — 200 km/h — 4 chỗ
