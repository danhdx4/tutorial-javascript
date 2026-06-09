class ProductStore {
    constructor(products) {
        this.products = products;
    }

    getAll() {
        return this.products;
    }

    findById(id) {
        return this.products.find(
            product => product.id === id
        );
    }

    findByCategory(cat) {
        return this.products.filter(
            product => product.category === cat
        );
    }

    getInStock() {
        return this.products.filter(p => p.inStock === true);
    }

}

module.exports = ProductStore;
