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
    return `${this.brand} — tốc độ tối đa ${this.maxSpeed} km/h`;
  }
}

const vehicle = new Vehicle("Toyota", 180);
console.log(vehicle.getInfo());

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
    console.log(`${this.brand} bíp bíp 🚗`);
  }
}
const car = new Car("Honda", 160, 5);
console.log(car.getInfo());
car.honk();

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
