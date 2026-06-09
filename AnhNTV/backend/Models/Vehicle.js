class Vehicle {
  constructor(brand, maxSpeed) {
    this.brand = brand;
    this.maxSpeed = maxSpeed;
  }
  getInfo() {
    return `${this.brand} 窶・t盻祖 ﾄ黛ｻ・t盻訴 ﾄ疎 ${this.maxSpeed} km/h`;
  }
}


module.exports = Vehicle;
