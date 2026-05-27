
//FUNTION
// viết arrow funtion nhận width, height và trả về diện tích
/**const dientich=(width,height) => {
console.log(width* height)}
  dientich(2,3);
//bai 1
//tinhTong(3, 7);tinhTong(-1, 5)
//cach 1
function sum(a,b) {
  return a+b;
}
  console.log(sum(3, 7));
  console.log(sum(-1, 5));
//cach2
const sum1=(c,d) => c+d;
  console.log(sum1(3,7));
  console.log(sum1(-1,5));

//bai 2
  //tinh dien tich có so do(5,4);(3,3)
  //cach1
function dientich1(x,y){
  return x*y;
}
  console.log(dientich1(5,4));
  console.log(dientich1(3,3));
  //cach2
const dientich2=(e,f) => e*f;
 console.log(dientich2(5,4));
 console.log(dientich2(3,3));

//bai 3
  //kiem tra so chan le 4 va 7
  //cach1
const chanle=(n) =>{
  if(n%2===0){
  console.log("chẵn")
  }
  else{
    console.log("lẻ")
  }};
  chanle(4);
  chanle(7);

//bai 4
  //Viết function declaration nhận name và role, in ra lời chào.
  //cach 1
function chaoMung1(name,role){
  console.log(`Xin chào ${name}!`)
  console.log(`Vai trò của bạn là ${role}`);
}
chaoMung1("Xuân","QA")
  //cach 2
const chaoMung2=(name,role)=>{
  console.log(`Xin chào ${name}!`)
  console.log(`Vai trò của bạn là ${role}`);
}
chaoMung1("Xuân","QA")

//bai 5
  //Tìm số lớn nhất Viết arrow function nhận mảng số, trả về số lớn nhất.
const max1=(arr)=> Math.max(...arr)
  console.log(max1([3,9,1,7]));
  console.log(max1([-2,0,5]));

//BUỔI 6
//map
  //nhân các phần tử với 2, in ra mảng mới và mảng ban đầu
const numbers = [1, 2, 3];

const doubled = numbers.map(n => n * 2);

console.log(doubled); 
console.log(numbers);
  //
  const users = [
    { name: "An",   age: 25 },
    { name: "Bình", age: 30 }
  ];
  
  const names = users.map(u => u.name);
  
  console.log(names);
  const names = users.map(u => u.name);
  
  console.log(names);
  */

//filter
  //loc nhung nguoi tren 25 tuổi
 /**  const users = [
  { name: "An",    age: 25 },
  { name: "Bình",  age: 30 },
  { name: "Cường", age: 20 }
];

const adults = users.filter(u => u.age >= 25);

console.log(adults);
//find
const user = users.find(u => u.name === "Bình");

console.log(user);
// { name: "Bình", age: 30 }

// ⚠️ Cẩn thận: có thể trả undefined!
const notFound = users.find(u => u.name === "XYZ");
console.log(notFound); // undefined

// ✅ Luôn kiểm tra trước khi dùng
if (user) {
  console.log(user.name);
}
*/


/**const fruit = ["cam","táo","xoài","chuối"];
In ra phần tử đầu tiên
In ra phần tử cuối cùng
In ra độ dài của mảng
*/
/**const fruits = ["cam","táo","xoài","chuối","mít"]
console.log(fruits[0]) ;
console.log(fruits.at(-1)) ;
console.log(fruits.length);

//In ra tên sản phẩm
//in ra giá tiền
//kiểm tra kiểu dữ liệu inStock

const product={
  name:"laptop",
  price:1500,
  inStock:true
}
console.log(product.name);
console.log(product.price)
console.log(typeof product.inStock)*/

//tạo mảng mới cộng thêm 1 điểm cho mỗi bạn
//tạo mảng nhân đôi số điểm

const score =[5,7,8,6,9];
const score1= score.map(n=>n+1);
console.log(score1);

for(let i=0;i<score.length;i++){
  score[i]= score[i]+1;
}
console.log(score);

const score2= score.map(n=>n*2);
console.log(score2);

//Lọc ra những người từ 18 tuổi trở lên
//Lọc những người duois 18 tuổi
const ages=[15,22,17,30,16,25]
const age1= ages.filter(n=> n>=18)
console.log(age1)
const age2= ages.filter(n=> n<18)
console.log(age2)
//Tìm học sinh tên "Bình"
//Tìm học sinh có điểm > 8
const students = [
  { name: "An",   score: 8 },
  { name: "Bình", score: 5 },
  { name: "Cúc",  score: 9 }
];
const student1=students.find(u => u.name==="Bình")
  console.log(student1);

const score3= students.filter(u=>u.score >8)
 console.log(score3);


//Nhân đôi tất cả phần tử (map)
//Lọc số > 3 (filter)
//Tìm số = 4 (find)

 const numbers = [1,2,3,4,5];
  const number1= numbers.map(n=> n*2)
  console.log(number1)

  const number2= numbers.filter(n=> n>3);
  console.log(number2);

  const number3= numbers.find(n=>  n==4)
  console.log(number3)

// Lấy danh sách name
//Lọc user > 25 tuổi
//Tìm user id = 2
  const users = [
    { id:1, name:"An",    age:25 },
    { id:2, name:"Bình",  age:30 },
    { id:3, name:"Cường", age:20 }
  ];

  const names = users.map(user => user.name);
    console.log(names);

  const age4 = users.filter(user=> user.age>25);
    console.log(age4);

  const id1= users.find(user=>user.id ===1);
    console.log(id1);


//Lấy tất cả order có status = "success"
//Lấy danh sách total của toàn bộ orders
//Tìm order có id = 2
const orders = [
  { id:1, status:"success", total:100 },
  { id:2, status:"pending", total:200 },
  { id:3, status:"success", total:150 }
];

const success1= orders.filter(u=>u.status ==="success")
  console.log(success1);

const total1= orders.map(u=>u.total);
  console.log(total1);

const id2= orders.find(u=>u.id ===2);
console.log(id2);
  







