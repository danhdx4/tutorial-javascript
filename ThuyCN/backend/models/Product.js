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
