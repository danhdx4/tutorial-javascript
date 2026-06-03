class Vehicle {
    constructor(brand, maxSpeed) {
        this.brand = brand,
        this.maxSpeed = maxSpeed
    }

    getInfo()
    {
        console.log(`${this.brand} - tốc độ tối đa ${this.maxSpeed} km/h`)
    }
}

module.exports = Vehicle