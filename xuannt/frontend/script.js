
//FUNTION
// viết arrow funtion nhận width, height và trả về diện tích
const dientich=(width,height) => {
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


