const Dog      = require("./models/Dog");
const dogsData = require("./data/dogs.json");

const dogs = dogsData.map(d => new Dog(d.name, d.breed));

dogs.forEach(dog => {
  dog.speak();
  dog.fetch();
});

const Car      = require("./models/Car");
const carsData = require("./data/cars.json");

const cars = carsData.map(c => new Car(c.brand, c.maxSpeed, c.seats));
cars.forEach(car => {
  console.log(car.getInfo());
  console.log(car.honk());
});