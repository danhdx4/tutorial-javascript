// Bài 2 — Class ProductStore
// Quản lý mảng sản phẩm
// Method getAll(): trả về toàn bộ sản phẩm
// Method findById(id): tìm theo id
// Method findByCategory(cat): lọc theo danh mục

class ProductStore {
    constructor(products = []) {
        this.products = products;
    }

    // Trả về toàn bộ sản phẩm
    getAll() {
        return this.products;
    }

    // Tìm sản phẩm theo id
    findById(id) {
        return this.products.find(product => product.id === id);
    }

    // Lọc sản phẩm theo danh mục
    findByCategory(category) {
        return this.products.filter(product => product.category === category);
    }

    // Thêm sản phẩm vào store
    add(product) {
        this.products.push(product);
    }

    // Xóa sản phẩm theo id
    removeById(id) {
        this.products = this.products.filter(product => product.id !== id);
    }

    // Trả về số lượng sản phẩm
    count() {
        return this.products.length;
    }

    // Trả về sản phẩm còn hàng
    getInStock() {
        return this.products.filter(product => product.inStock);
    }
}
