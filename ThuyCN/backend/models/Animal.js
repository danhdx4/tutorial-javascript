class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    speak() {
        return `${this.name} kêu: ${this.sound}`;
    }
}
module.exports = Animal;