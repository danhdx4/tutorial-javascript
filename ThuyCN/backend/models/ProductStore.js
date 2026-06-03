// Bài 2 — Class ProductStore
// Constructor nhận mảng Product[]
class ProductStore {
    constructor(products) {
        this.products = products
    }
    getAll() {
        return this.products;
    }
    findById(idFind) {
        const findID = this.products.find(product => product.id == idFind);
        return findID;
    }
    findByCategory(catFind) {
        const findCat = this.products.filter(product1 => product1.category == catFind);
        return findCat;
    }

}

module.exports = ProductStore;
