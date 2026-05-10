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

// Tìm fulname
console.log("Full Name: ", data.firstname + " " + data.lastname);

// Tìm giá trị của các key: additionalneeds, checkin, checkout
console.log("Additional Needs: ", data.additionalneeds);
console.log("Checkin: ", data.bookingdates.checkin);
console.log("Checkout: ", data.bookingdates.checkout);

 // Kiểm tra kiểu dữ liệu của các key: totalprice, depositpaid, checkin, checkout
console.log(typeof data.totalprice)
console.log(typeof data.depositpaid)
console.log(typeof data.bookingdates.checkin)
console.log(typeof data.bookingdates.checkout)