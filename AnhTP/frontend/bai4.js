let role = "a";
switch (role) {
  case "admin":
    console.log("Quản trị");
    break;
  case "user":
    console.log("Người dùng");
    break;
  default:
    console.log("Khách");
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
let roles = "admin";
switch (roles) {
  case "admin":
    console.log("System Administrator");
    break;
  case "user":
    console.log("End user");
    break;
  default:
    console.log("Guest");
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách

let status = 44;
switch (status) {
  case 200:
    console.log("OK");
    break;
  case 404:
    console.log("Not Found");
    break;
  case 500:
    console.log("Server Not Found");
    break;
  default:
    console.log("Unknown");
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách

for (let i = 1; i <= 5; i++) {
  console.log("Lần lặp thứ: " + i);
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách

let fruits = ["Táo", "Cam", "Chuối"];
for (let i = 2; i >= 0; i--) {
  console.log("Trái cây: " + fruits[i]);
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
for (let i = 0; i < fruits.length; i++) {
  console.log("Trái cây: " + fruits[i]);
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
let roleA = "A";
switch (roleA) {
  case "admin":
  case "manager":
    console.log("Full access");
    break;
  case "user":
    console.log("Limited access");
    break;
  default:
    console.log("No access");
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
let retry = 1;
while (retry <= 3) {
  console.log("Login attempt:", retry);
  retry++;
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0) {
    console.log(`Bỏ qua TC : ${i}`);
    continue; // Bỏ qua lần lặp này và tiếp tục với lần lặp tiếp theo
  }
  console.log("TC :", i);
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
let userRole = "guest";
switch (userRole) {
  case "admin":
    console.log("Được xóa bài viết");
    break;
  case "user":
    console.log("Được đăng bài viết");
    break;
  case "guest":
    console.log("Được xem bài viết");
    break;
  default:
    console.log("Role không hợp lệ");
}

console.log("----".repeat(10)); // In ra dấu gạch ngang để phân cách
console.log("BTVN Buổi 4");
