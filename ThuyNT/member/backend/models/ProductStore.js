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
}

module.exports = ProductStore;
