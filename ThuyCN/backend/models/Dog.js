const Animal = require('./Animal');
class Dog extends Animal {
    constructor(name, breed, sound) {
        super(name, sound);
        this.breed = breed;
    }
    fetch() {
        return `${this.name} (${this.breed}) đang nhặt bóng`;
    }
    speak() {
        return `${this.name} (${this.breed}) sủa: ${this.sound}`;
    }
}
module.exports = Dog;