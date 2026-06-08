const Vehicle = require("./Vehicle");
class Car extends Vehicle {
    constructor(brand, maxSpeed, seats) {   
        super(brand, maxSpeed);
        this.seats = seats;
    }

    getInfo() {
        console.log(`#${this.brand} - ${this.maxSpeed} km/h - ${this.seats} chỗ`);
    }
    honk() {
        console.log(`${this.brand} nói: Beep beep!`);
    }
}
module.exports = Car;
