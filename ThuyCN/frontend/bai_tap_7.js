// Bài 1 — Hoàn thiện Product
class Product {
    constructor (name, price, inStock){
        this.name = name;
        this.price = price;
        this.inStock = inStock;
    }
    getLabel(){
        if (this.inStock === true) {
            console.log(`✅ ${this.name} - ${this.price}`)
        } else {
            console.log(`❌ ${this.name} - ${this.price}`)
        }
    }
    static fromJSON(info){
        return new Product (info.name, info.price, info.inStock);
    }
}

const info = {
    name: "pants",
    price: 10000,
    inStock: false
};
const product = Product.fromJSON(info);
product.getLabel()  //Method getLabel(): in “✅ Tên — Giá” hoặc “❌ ...” tùy inStock
console.log(product); //Static method fromJSON(data) → tạo Product từ plain object

// Bài 2 — Class ProductStore
// Constructor nhận mảng Product[]
class ProductStore {
    constructor(products){
        this.products = products
    }
    getAll(){
        console.log(this.products)
    }
    findById(idFind){
        const findID = this.products.find(product => product.id == idFind);
        console.log(findID);
    }
    findByCategory(catFind){
        const findCat = this.products.find(product1 => product1.category == catFind);
        console.log(findCat);
    }

}

const p1 = {id: 1, name: "skirt", price: 20000, category: "Clothes", inStock: true};
const p2 = {id: 5, name: "t-shirt", price: 40000, category: "Clothes", inStock: false};

const products = new ProductStore([p1,p2])
products.getAll(); // getAll() → trả về toàn bộ
products.findById(5); // findById(id) → tìm theo id
products.findByCategory("Clothes"); // findByCategory(cat) → lọc theo danh mục


