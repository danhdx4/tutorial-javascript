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
    return`${this.name} kêu: ${this.sound}`;
  }
}

const cat = new Animal("Mèo", "Meo meo");
console.log(cat.speak()); 

// Bài 2 — Tạo class Dog kế thừa Animal
// Dùng class Dog extends Animal
// Xem cú pháp ở Slide 28.
// Constructor nhận name, breed
// Gọi super(name, "Gâu gâu") rồi gán this.breed = breed.
// Tạo method fetch() → in "<name> (<breed>) đang nhặt bóng 🎾"

/*class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Gâu gâu");
        this.breed = breed;
  }
  fetch() {
    return`${this.name} (${this.breed}) đang nhặt bóng 🎾`;
  }
}

const dog = new Dog("Lucky", "Golden Retriever");
console.log(dog.speak()); // "Lucky kêu: Gâu gâu"
console.log(dog.fetch());*/// "Lucky (Golden Retriever) đang nhặt bóng 🎾"

// Bài 3 — Override method
// Trong Dog, override method speak() để in thêm tên giống chó
// Gợi ý: return `${this.name} (${this.breed}) sủa: ${this.sound}`;
// Test thử: const dog = new Dog("Lu", "Corgi"); dog.speak();
// Kết quả mong đợi: Lu (Corgi) sủa: Gâu gâu
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Gâu gâu"); // mặc định chó sẽ kêu "Gâu gâu"
    this.breed = breed;
  }

  // Override method speak()
  speak() {
    console.log(`${this.name} (${this.breed}) sủa: ${this.sound}`);
  }

  fetch() {
    console.log(`${this.name} (${this.breed}) đang nhặt bóng 🎾`);
  }
}


const dog = new Dog("Lu", "Corgi");
dog.speak(); // "Lu (Corgi) sủa: Gâu gâu"
dog.fetch(); // "Lu (Corgi) đang nhặt bóng 🎾"