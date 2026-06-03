class Vehicle {
    constructor(brand, maxSpeed) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
    }
    getInfo() {
        return `${this.brand} - tốc độ tối đa ${this.maxSpeed} km/h`
    }
}
module.exports = Vehicle;