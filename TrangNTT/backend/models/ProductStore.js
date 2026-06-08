class ProductStore {
  constructor(products) {
    this.products = products || [];
  }

  // Trả về toàn bộ products
  getAll() {
    return this.products;
  }

  // Tìm product theo id dùng find()
  findById(id) {
    return this.products.find(product => product.id === id);
  }

  // Lọc product theo category dùng filter()
  findByCategory(cat) {
    return this.products.filter(product => product.category === cat);
  }
}


const products = [
  { id: 1, name: 'Laptop', category: 'Electronics' },
  { id: 2, name: 'Phone', category: 'Electronics' },
  { id: 3, name: 'Shoes', category: 'Fashion' }
];

const store = new ProductStore(products);

console.log(store.getAll());
console.log(store.findById(2));
console.log(store.findByCategory('Electronics'));

