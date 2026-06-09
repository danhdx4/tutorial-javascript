class Animal {  
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        console.log(`#${this.name} - ${this.age} tuổi`);
    }
}
module.exports = Animal;
