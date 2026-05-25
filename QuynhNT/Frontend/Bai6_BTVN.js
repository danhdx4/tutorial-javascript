console.log("====Bai 1 ====");
const numbers = [1, 4, 3, 4, 5];
// Nhân đôi tất cả phần tử (map)
// Lọc số > 3 (filter)
// Tìm số = 4 (find)
const numbers_1 = numbers.map((u) => u * 2);
console.log("1. Chuỗi tìm được: ", numbers_1);

const filter_number = numbers.filter((u) => {
  return u > 3;
});
console.log("2. Các số > 3: ", filter_number);

const find_number = numbers.find((u) => {
  return u == 4;
});
console.log("3. số tìm được: ", find_number);

console.log("====Bai 2===");
const users = [
  { id: 1, name: "An", age: 25 },
  { id: 2, name: "Bình", age: 30 },
  { id: 3, name: "Cường", age: 20 },
];
// Lấy danh sách name
// Lọc user > 25 tuổi
// Tìm user id = 2
const list_name = users.map((u) => u.name);
console.log("1. Danh sách name: ", list_name);

const filter_age = users.filter((u) => {
  return u.age > 25;
});
console.log("2. User > 25 tuổi", filter_age);

const find_id = users.find((u) => {
  return (u.id = 2);
});
console.log("3. user id = 2", find_id);

console.log("====Bai 3====");
const orders = [
  { id: 1, status: "success", total: 100 },
  { id: 2, status: "pending", total: 200 },
  { id: 3, status: "success", total: 150 },
];
// Lấy tất cả order có status = "success"
// Lấy danh sách total của toàn bộ orders
// Tìm order có id = 2
const list_status = orders.filter((u) => {
  return u.status == "success";
});
console.log("1. order có status = success", list_status);
const list_total_orders = orders.map((u) => u.total);
console.log("2. danh sách total của toàn bộ orders", list_total_orders);
const find_id_order = orders.find((u) => {
  return (u.id = 2);
});
console.log("3. Order có id = 2", find_id_order);
