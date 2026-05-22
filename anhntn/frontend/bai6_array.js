const numbers = [1, 2, 3, 4, 5];    
const doubled = numbers.map(n => n * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
console.log(numbers); // Output: [1, 2, 3, 4, 5] (mảng gốc không bị thay đổi)

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },   
];
console.log(users); // Output: [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }] 
const names = users.map(u => {
        return u.name;
} );
console.log(names); // Output: ["Alice", "Bob"] 

const users2 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }, 
];
const adults = users2.filter (u => u.age >= 25).map((item, index) => { 
    console.log(item, index);
    return item;
});

const user = users2.find(u => u.name ===   "Alice");
console.log(users2); 
console.log(adults);  


/*📚 Bài 1 — Truy cập phần tử Array
const fruits = ["Cam", "Táo", "Xoài", "Chuối"];
In ra phần tử đầu tiên
In ra phần tử cuối cùng
In ra độ dài của mảng
*/
const fruits = ["Cam", "Táo", "Xoài", "Chuối"];
console.log(fruits[0]); // đầu tiên = 0
console.log(fruits[fruits.length - 1]); // cuối cùng = độ dài - 1

const lastIndex = fruits.length - 1;
console.log(fruits[lastIndex]); // cuối cùng = độ dài - 1
console.log(fruits.length); // độ dài của mảng

/*📚 Bài 2 — Truy cập thuộc tính Object
const product = {
  name: "Laptop",
  price: 15000000,
  inStock: true
};
In ra tên sản phẩm
In ra giá tiền
Kiểm tra kiểu dữ liệu của inStock
*/ 
const product = {
    name: "Laptop",
    price: 15000000,   
    inStock: true
};
console.log(product.name);
console.log(product.price);
console.log(typeof product.inStock); // boolean

/*📚 Bài 3 — map() cơ bản
const scores = [5, 7, 8, 6, 9];
Tạo mảng mới cộng thêm 1 điểm cho mỗi bạn
Tạo mảng nhân đôi điểm số
// Kết quả mong đợi (cộng 1):
// [6, 8, 9, 7, 10]
*/
const scores = [5, 7, 8, 6, 9];
const increasedScores = scores.map(score => score + 1);
console.log(increasedScores); // [6, 8, 9, 7, 10]   
const doubledScores = scores.map(score => score * 2);
console.log(doubledScores); // [10, 14, 16, 12, 18]

/*📚 Bài 4 — filter() cơ bản
const ages = [15, 22, 17, 30, 16, 25];
Lọc ra những người đủ 18 tuổi trở lên
Lọc ra những người dưới 18 tuổi
// Kết quả mong đợi (< 18):
// [15, 17, 16] */
const ages = [15, 22, 17, 30, 16, 25];
const adults2 = ages.filter(age => age >= 18);
console.log(adults2); // [22, 30, 25]
const minors = ages.filter(age => age < 18);
console.log(minors); // [15, 17, 16]  


/**📚 Bài 5 — find() cơ bản
const students = [
  { name: "An",   score: 8 },
  { name: "Bình", score: 5 },
  { name: "Cúc",  score: 9 }
];
Tìm học sinh tên "Bình"
Tìm học sinh có điểm > 8
 */
const students = [
    { name: "An", score: 8 },
    { name: "Bình", score: 5 },
    { name: "Cúc", score: 9 }
];
const studentBinh = students.find(student => student.name === "Bình");
console.log(studentBinh);
const highScorer = students.find(student => student.score > 8);
console.log(highScorer);



/**🟡 Bài 1 — Mảng số
const numbers = [1,2,3,4,5];
Nhân đôi tất cả phần tử (map)
Lọc số > 3 (filter)
Tìm số = 4 (find)
 */
const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers2.map(n => n * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
const filteredNumbers = numbers2.filter(n => n > 3);
console.log(filteredNumbers); // [4, 5]
const foundNumber = numbers2.find(n => n === 4);
console.log(foundNumber); // 4 
