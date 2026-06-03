class Product {
    constructor(id, name, price, category, inStock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.inStock = inStock;
    }
    getLabel() {
        if (this.inStock === true) {
            return (`✅ ${this.name} - ${this.price}`)
        } else {
            return (`❌ ${this.name} - ${this.price}`)
        }
    }
    static fromJSON(info) {
        return new Product(info.name, info.price, info.inStock);
    }
}

module.exports = Product;
