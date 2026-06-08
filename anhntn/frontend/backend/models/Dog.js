const Animal = require("./Animal");
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    getInfo() {
        console.log(`#${this.name} - ${this.age} tuổi - ${this.breed}`);
    }   
    fetch() {
        console.log(`${this.name} đang fetch...`);
    }   
    speak() {
        console.log(`${this.name} nói: Woof!`);
    }
}
module.exports = Dog;
