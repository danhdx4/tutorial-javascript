
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


/**
 * Tìm fulname
 * Kiểm tra kiểu dữ liệu của các key: totalprice, depositpaid, checkin, checkout
 * Tìm giá trị của các key: additionalneeds, checkin, checkout
 */
console.log("---Tìm full name---")
console.log("fullname: ", data.firstname + data.lastname);
console.log("---Kiểm tra kiểu dữ liệu---")
console.log("Kiểu dữ liệu của totalprice: ", typeof data.totalprice);
console.log("Kiểu dữ liệu của depositpaid: ", typeof data.depositpaid);
console.log("Kiểu dữ liệu của checkin: ", typeof data.bookingdates.checkin);
console.log("Kiểu dữ liệu của checkout: ", typeof data.bookingdates.checkout);
console.log("---Tìm giá trị các key---")
console.log("additionalneeds: ", data.additionalneeds);
console.log("checkin: ", data.bookingdates.checkin);
console.log("checkout: ", data.bookingdates.checkout); 


