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
    super(name, "Gâu gâu");   // tiếng sủa mặc định
    this.breed = breed;
  }

  fetch() {
    console.log(`${this.name} (${this.breed}) đang nhặt bóng 🎾`);
  }
speak(){
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
