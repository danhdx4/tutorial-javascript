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

module.exports = ProductStore;
