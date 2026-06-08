class Product {
    constructor(id, name, price, category, inStock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.inStock = inStock;
    }

    getInfo() {
        console.log(`
            ID: ${this.id}
            Name: ${this.name}
            Price: ${this.price}
            Category: ${this.category}
            In Stock: ${this.inStock}
        `);
    }

    getLabel() {
        if (this.inStock) {
            return `✅ ${this.name} — ${this.price}`;
        } else {
            return `❌ ${this.name} — ${this.price}`;
        }
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            category: this.category,
            inStock: this.inStock
        };
    }

    static fromJSON(data) {
        return new Product(
            data.id,
            data.name,
            data.price,
            data.category,
            data.inStock
        );
    }

    getInStock(){
        return this.inStock === true;
    }
}

module.exports = Product;