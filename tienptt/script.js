// Bài 2
//kiểu dữ liệu
let name ='Pham thị thuỷ tiên';
let current=2026;
let birth = 1998;
let istudent =false;
let Height =150;
let hody= "chơi";


console.log("tên:"+ name)
console.log("tuổi:"+ (current - birth))
console.log("chiều cao:"+ Height)
console.log("sở thích:"+ hody)
console.log("là sinh viên:"+ istudent)


console.log("---------")
let user ={
    name: 'Pham thị thuỷ tiên',
    age: 28,
    height: 150,
    hobby: 'chơi',
    istudent: false,
};
console.log("tên:"+ user.name)
console.log("tuổi:"+ user.age)
console.log("chiều cao:"+ user.height)
console.log("sở thích:"+ user.hobby)
console.log("là sinh viên:"+ user.istudent)

console.log("---------")
// kiểm tra kiểu dữ liệu khái báo
console.log(typeof name);
console.log(typeof current);
console.log(typeof birth);
console.log(typeof istudent);
console.log(typeof Height);
console.log(typeof hody);

//// cài thêm extension