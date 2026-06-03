class Vehicle {
    constructor(brand, maxSpeed) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
    }   
    getInfo() {
        console.log(`#${this.id} - ${this.make} ${this.model} (${this.year}) - ${this.color}`);
    }
}
module.exports = Vehicle;