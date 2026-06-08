// Bài 1 — Tạo class Animal
// Constructor: name, sound → gán vào this
// Method speak() → in "<name> kêu: <sound>"
// Test thử hàm speak(): new Animal("Mèo", "Meo meo")
console.log("=====Bài 1=======");
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak() {
    return `Tên: ${this.name}, kêu: ${this.sound}`;
  }
}
const ani = new Animal("Mèo", "meo meo");
console.log(ani.speak());
// Bài 2 — Tạo class Dog kế thừa Animal
// Dùng class Dog extends Animal
// Xem cú pháp ở Slide 28.
// Constructor nhận name, breed
// Gọi super(name, "Gâu gâu") rồi gán this.breed = breed.
// Tạo method fetch() → in "<name> (<breed>) đang nhặt bóng 🎾"
console.log("===Bài 2===");
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "gâu gâu");
    this.breed = breed;
  }
  fetch() {
    return ` ${this.name}  (${this.breed}) Đang nhặt bóng`;
  }
  speak() {
    return `${this.name} (${this.breed}) sủa: ${this.sound}`;
  }
}
const dog = new Dog("chó cảnh", "CHó");
console.log(dog.fetch());
// Bài 3 — Override method
// Trong Dog, override method speak() để in thêm tên giống chó
// Gợi ý: return `${this.name} (${this.breed}) sủa: ${this.sound}`;
// Test thử: const dog = new Dog("Lu", "Corgi"); dog.speak();
// Kết quả mong đợi: Lu (Corgi) sủa: Gâu gâu
console.log("===Bài 3===");
const dog_1 = new Dog("Lu", "Corgi");
console.log(dog_1.speak());
// Bài 4 — Class TestUser (gắn với QA)
// Tạo class TestUser extends User (dùng User đã viết ở Bài 5)
// Constructor: id, username, testEnv → super(id, username, "tester") + lưu testEnv vào this (vd: data truyền vào testEnv là "staging")
// Method getTestInfo() → in "Tester <username> đang test trên <testEnv>"

console.log("===Bài 4===");
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
const user = new TestUser(1, "Quynh", "staging");
console.log(user.getTestInfo());
