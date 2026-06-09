// // Bài 1 — Tạo class Animal
// Constructor: name, sound → gán vào this
// Method speak() → in "<name> kêu: <sound>"
// Test thử hàm speak(): new Animal("Mèo", "Meo meo")

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  //method
  speak() {
    console.log(`${this.name} keu: ${this.sound}`);
  }
}
//khởi tạo object.
const test = new Animal("cho", "meo");
//console.log (test.speak());
test.speak();

// Bài 2 — Tạo class Dog kế thừa Animal
// Dùng class Dog extends Animal
// Xem cú pháp ở Slide 28.
// Constructor nhận name, breed
// Gọi super(name, "Gâu gâu") rồi gán this.breed = breed.
// Tạo method fetch() → in "<name> (<breed>) đang nhặt bóng 🎾"

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak() {
    console.log(`${this.name} kêu:${this.sound}`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    // gọi cha
    super(name, "gâu gâu");
    //thuọc tính riêng lẻ
    this.breed = breed;
  }
  fetch() {
    console.log(`${this.name} ${this.breed}`);
  }
}
//tạo đối tượng
const ob = new Dog("milu", "miumiu");
//goimethod cha
ob.speak();
//gọi method con
ob.fetch();

// Bài 3 — Override method
// Trong Dog, override method speak() để in thêm tên giống chó
// Gợi ý: return `${this.name} (${this.breed}) sủa: ${this.sound}`;
// Test thử: const dog = new Dog("Lu", "Corgi"); dog.speak();
// Kết quả mong đợi: Lu (Corgi) sủa: Gâu gâu



/// bài tập đang sai xem lại. 
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak() {
    return(`${this.name} kêu:${this.sound}`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    // gọi cha
    super(name, "gâu gâu");
    //thuọc tính riêng lẻ
    this.breed = breed;
  }
  //overrude method speak()
  speak() {
    return(`${this.name} (${this.breed}) sủa: ${this.sound}`);
  }
}
//tạo đối tượng
const ob = new Dog("Lu", "Corgi");
//gọi để hiển thị kết quả
ob.speak();


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
class testUser extends User {
  constructor(id, username, testEnv) {
    // con contructor cha
    super(id, username, "tester");
    this.testEnv = testEnv;
  }
  //method
  getTestInfo() {
    console.log(`Test ${this.username} đang test trên ${this.testEnv}`);
  }
}
//tạo đối tượng
const tester = new testUser(1, "QA TienPTT", "Staging");
tester.getTestInfo();

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
        return `${this.brand} — tốc độ tối đa ${this.maxSpeed} km/h`;
    }
}

const car = new Vehicle("Toyota", 180);

console.log(car.getInfo());

// Bài 2 — Class Car kế thừa Vehicle
// Dùng class Car extends Vehicle
// Constructor nhận brand, maxSpeed, seats
// Gọi super(brand, maxSpeed) rồi gán this.seats = seats.
// Tạo method riêng honk() → in "<brand> bíp bíp 🚗"
// Test thử: new Car("Honda", 160, 5)
// Kết quả mong đợi: Honda bíp bíp 
class Vehicle {
    constructor(brand, maxSpeed) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
    }

    getInfo() {
        return `${this.brand} — tốc độ tối đa ${this.maxSpeed} km/h`;
    }
}

class Car extends Vehicle {
    constructor(brand, maxSpeed, seats) {
        super(brand, maxSpeed);
        this.seats = seats;
    }

    honk() {
        return `${this.brand} bíp bíp oto`;
    }
}

// Bài 3 — Override getInfo()
// Trong Car, override getInfo() để in thêm số ghế
// Gợi ý: return `${this.brand} — ${this.maxSpeed} km/h — ${this.seats} chỗ`;
// Test thử: const car = new Car("Mazda", 200, 4); car.getInfo();
// Kết quả mong đợi: Mazda — 200 km/h — 4 chỗ

const car2 = new Car("Mazda", 200, 4);
console.log(car2.getInfo());