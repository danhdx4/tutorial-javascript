let data = {
  firstname: "Sally",
  lastname: "Brown",
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: "2013-02-23",
    checkout: "2014-10-23",
  },
  additionalneeds: "Breakfast",
};


 /* Tìm fulname*/
console.log("Full name: " + data.firstname + " " + data.lastname);

 /* Kiểm tra kiểu dữ liệu của các key: totalprice, depositpaid, checkin, checkout*/
console.log("Kiểu dữ liệu totalprice:", typeof data.totalprice);
console.log("Kiểu dữ liệu depositpaid:", typeof data.depositpaid);
console.log("Kiểu dữ liệu checkin:", typeof data.bookingdates.checkin);
console.log("Kiểu dữ liệu checkout:", typeof data.bookingdates.checkout);
 /* Tìm giá trị của các key: additionalneeds, checkin, checkout*/

console.log("additionalneeds:", data.additionalneeds);
console.log("checkin:", data.bookingdates.checkin);
console.log("checkout:", data.bookingdates.checkout);
