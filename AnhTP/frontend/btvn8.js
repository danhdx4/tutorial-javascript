console.log("BTVN 1 thêm — Class Vehicle (cha)");
// Bài 1 — Class Vehicle (cha)
// Constructor: brand, maxSpeed → gán vào this
// Method getInfo() dùng template literal in "<brand> — tốc độ tối đa <maxSpeed> km/h"
// Test thử getInfo(): new Vehicle("Toyota", 180)
// Kết quả mong đợi: Toyota — tốc độ tối đa 180 km/h

class Vehicle {
  constructor(brand, maxSpeed) {
    this.brand = brand;
    this.maxSpeed = maxSpeed;
  }
  getInfo() {
    return `<${this.brand}> - tốc độ tối đa <${this.maxSpeed}> km/h`;
  }
}
const vehical = new Vehicle("Toyota", 180);
console.log(vehical.getInfo());

console.log("BTVN 2 thêm — Class Car kế thừa Vehicle");
// Bài 2 — Class Car kế thừa Vehicle
// Dùng class Car extends Vehicle
// Constructor nhận brand, maxSpeed, seats
// Gọi super(brand, maxSpeed) rồi gán this.seats = seats.
// Tạo method riêng honk() → in "<brand> bíp bíp 🚗"
// Test thử: new Car("Honda", 160, 5)
// Kết quả mong đợi: Honda bíp bíp 🚗

class Car extends Vehicle {
  constructor(brand, maxSpeed, seats) {
    super(brand, maxSpeed);
    this.seats = seats;
  }

  honk() {
    return `${this.brand} bíp bíp 🚗`;
  }
}
const car = new Car("Honda", 160, 5);
console.log(car.getInfo());
console.log(car.honk());

console.log("BTVN 3 thêm — Override getInfo() trong Car");
// Bài 3 — Override getInfo()
// Trong Car, override getInfo() để in thêm số ghế
// Gợi ý: return `${this.brand} — ${this.maxSpeed} km/h — ${this.seats} chỗ`;
// Test thử: const car = new Car("Mazda", 200, 4); car.getInfo();
// Kết quả mong đợi: Mazda — 200 km/h — 4 chỗ
class CarOverride extends Vehicle {
  constructor(brand, maxSpeed, seats) {
    super(brand, maxSpeed);
    this.seats = seats;
  }

  getInfo() {
    return `${this.brand} — ${this.maxSpeed} km/h — ${this.seats} chỗ`;
  }
}

const carOverride = new CarOverride("Mazda", 200, 4);
console.log(carOverride.getInfo());

console.log("Bài 1 — Tạo class Animal");
// Bài 1 — Tạo class Animal
// Constructor: name, sound → gán vào this
// Method speak() → in "<name> kêu: <sound>"
// Test thử hàm speak(): new Animal("Mèo", "Meo meo")

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return `${this.name} kêu: ${this.sound}`;
  }
}

const animal = new Animal("Mèo", "Meo meo");
console.log(animal.speak());

console.log("Bài 2 — Tạo class Dog kế thừa Animal");
// Bài 2 — Tạo class Dog kế thừa Animal
// Dùng class Dog extends Animal
// Xem cú pháp ở Slide 28.
// Constructor nhận name, breed
// Gọi super(name, "Gâu gâu") rồi gán this.breed = breed.
// Tạo method fetch() → in "<name> (<breed>) đang nhặt bóng 🎾"
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Gâu gâu");
    this.breed = breed;
  }

  fetch() {
    return `${this.name} (${this.breed}) đang nhặt bóng 🎾`;
  }
}
const dog = new Dog("Buddy", "Labrador");
console.log(dog.speak());
console.log(dog.fetch());

console.log("Bài 3 — Override method trong Dog");
// Bài 3 — Override method
// Trong Dog, override method speak() để in thêm tên giống chó
// Gợi ý: return `${this.name} (${this.breed}) sủa: ${this.sound}`;
// Test thử: const dog = new Dog("Lu", "Corgi"); dog.speak();
// Kết quả mong đợi: Lu (Corgi) sủa: Gâu gâu
class DogOverride extends Animal {
  constructor(name, breed) {
    super(name, "Gâu gâu");
    this.breed = breed;
  }

  speak() {
    return `${this.name} (${this.breed}) sủa: ${this.sound}`;
  }
}

const dogOverride = new DogOverride("Lu", "Corgi");
console.log(dogOverride.speak());

console.log("Bài 4 — Class TestUser (gắn với QA)");
// Bài 4 — Class TestUser (gắn với QA)
// Tạo class TestUser extends User (dùng User đã viết ở Bài 5)
// Constructor: id, username, testEnv → super(id, username, "tester") + lưu testEnv vào this (vd: data truyền vào testEnv là "staging")
// Method getTestInfo() → in "Tester <username> đang test trên <testEnv>"
class User {
  constructor(id, username, role) {
    this.id = id;
    this.username = username;
    this.role = role;
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
const testUser = new TestUser(1, "alice", "staging");
console.log(testUser.getTestInfo());
