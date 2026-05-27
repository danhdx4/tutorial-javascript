class User {
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    get infor(){
        console.log("hello")
    }
}
let user = new User("12","xuân");
let object={
    id:1,
    name:"user"
}
console.log(user,object)

/**Bài 1 — Template Literal
Dùng template literal in ra thông tin sản phẩm:
"Sản phẩm: Áo thun — Giá: 150.000 VND — Còn hàng: ✅" */

const sanpham="Sản phẩm: Áo thun";
const gia= "Giá: 150000 VND";
const trangthai= "Còn hàng: ✅";
console.log(`${sanpham}-${gia}-${trangthai}`)

/**
 in ra tên, giá, danh mục của sản phẩm
 */
const tensp="Tủ lạnh";
const giasp="15000000 vnd";
const danhmuc="Đồ gia dụng";
console.log(`${tensp} ${giasp} ${danhmuc}`)

/**
 Cho original và discount(%) tính và in ra giá sau khi giảm ngay trong template literal
 */
const giagoc=15000000;
const giamgia=15;

console.log(`Gia sau giam= ${giagoc-giagoc*giamgia/100}`);

/**
 Bài 4-Class Product
 Constructor: id, name, price, category
 tạo method getInfo() dùng template literal
 tạo method toJSON() trả về plain object
 */
class Product {
    constructor(id, name, price, category){
        this.id=id;
        this.name=name;
    
    }
}

