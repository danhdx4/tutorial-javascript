const Animal = require("./Animal")

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

module.exports = Dog;