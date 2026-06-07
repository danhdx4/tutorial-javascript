const Vehicle = require("./Vehicle")

class Car extends Vehicle {
    constructor(brand,maxSpeed,seats) {
        super(brand,maxSpeed),
        this.seats = seats
    }

    honk(){
        console.log(`${this.brand} bíp bíp 🚗` );
    }

    getInfo(){
      console.log(`${this.brand} — ${this.maxSpeed} km/h — ${this.seats} chỗ`);
        
    }
}

module.exports = Car