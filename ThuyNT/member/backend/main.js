const ProductStore = require('./models/ProductStore.js');

const products = [
    {
        id: 1,
        name: "Dell Inspiron",
        price: 1000,
        category: "Laptop"
    },
    {
        id: 2,
        name: "Macbook Pro",
        price: 2000,
        category: "Laptop"
    },
    {
        id: 3,
        name: "iPhone 15",
        price: 1500,
        category: "Phone"
    }
];


const p3 = new ProductStore(products);

console.log(p3.getAll());
console.log(p3.findById(2));
console.log(p3.findByCategory("Laptop"));