// Bài 1 — Tạo class Animal
// Constructor: name, sound → gán vào this
// Method speak() → in "<name> kêu: <sound>"
// Test thử hàm speak(): new Animal("Mèo", "Meo meo")
class Animal {
    constructor(name, sound) {
        this.name = name,
        this.sound = sound
    }

    speak(){
        console.log(`${this.name} kêu: ${this.sound}`);
    }
}

let meo = new Animal("Mèo", "Meo meo");
meo.speak()

// Bài 2 — Tạo class Dog kế thừa Animal
// Dùng class Dog extends Animal
// Xem cú pháp ở Slide 28.
// Constructor nhận name, breed
// Gọi super(name, "Gâu gâu") rồi gán this.breed = breed.
// Tạo method fetch() → in "<name> (<breed>) đang nhặt bóng 🎾"

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Gâu gâu"),
        this.breed = breed
    }

    fetch(){
        console.log(`${this.name} (${this.breed}) đang nhặt bóng 🎾`);
    }

    speak(){
        console.log(`${this.name} (${this.breed}) sủa ${this.sound}`);
    }
}

let gau = new Dog("Lu", "Corgi");
gau.fetch();

// Bài 3 — Override method
// Trong Dog, override method speak() để in thêm tên giống chó
// Gợi ý: return `${this.name} (${this.breed}) sủa: ${this.sound}`;
// Test thử: const dog = new Dog("Lu", "Corgi"); dog.speak();
// Kết quả mong đợi: Lu (Corgi) sủa: Gâu gâu
gau.speak();

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

    getProfile() {
        return `
        ID ${this.id}
        Username ${this.username}
        Role ${this.role}`
    }

}
class TestUser extends User {
    constructor(id, username, testEnv) {
        super(id, username, "tester"),
        this.testEnv = testEnv
    }

    getTestInfo(){
        console.log(`Tester ${this.username} đang test trên ${this.testEnv}`);
        
    }
}

let QA = new TestUser(1, "ThuyNT", "staging");
QA.getTestInfo();


// Bài 1 — Class Vehicle (cha)
// Constructor: brand, maxSpeed → gán vào this
// Method getInfo() dùng template literal in "<brand> — tốc độ tối đa <maxSpeed> km/h"
// Test thử getInfo(): new Vehicle("Toyota", 180)
// Kết quả mong đợi: Toyota — tốc độ tối đa 180 km/h

class Vehicle {
    constructor(brand, maxSpeed) {
        this.brand = brand,
        this.maxSpeed = maxSpeed
    }

    getInfo()
    {
        console.log(`${this.brand} - tốc độ tối đa ${this.maxSpeed} km/h`)
    }
}

let car = new Vehicle("Toyota", "180 km/h")
car.getInfo();

// Bài 2 — Class Car kế thừa Vehicle
// Dùng class Car extends Vehicle
// Constructor nhận brand, maxSpeed, seats
// Gọi super(brand, maxSpeed) rồi gán this.seats = seats.
// Tạo method riêng honk() → in "<brand> bíp bíp 🚗"
// Test thử: new Car("Honda", 160, 5)
// Kết quả mong đợi: Honda bíp bíp 🚗
class Car extends Vehicle {
    constructor(brand,maxSpeed,seats) {
        super(brand,maxSpeed),
        this.seats = seats
    }

    honk(){
        console.log(`${this.brand} bíp bíp 🚗` );
    }

    getInfo(){
      console.log(`${this.brand} — ${this.maxSpeed} km/h — ${this.seats} chỗ`);
        
    }
}

let newCar = new Car("Honda", 160, 5)
newCar.honk()

// Bài 3 — Override getInfo()
// Trong Car, override getInfo() để in thêm số ghế
// Gợi ý: return `${this.brand} — ${this.maxSpeed} km/h — ${this.seats} chỗ`;
// Test thử: const car = new Car("Mazda", 200, 4); car.getInfo();
// Kết quả mong đợi: Mazda — 200 km/h — 4 chỗ

let Mazda = new Car("Mazda", 200, 4)
Mazda.getInfo()