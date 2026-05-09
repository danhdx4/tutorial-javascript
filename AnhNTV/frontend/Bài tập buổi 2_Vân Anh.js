let data ={
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

let fullname= data.firstname + " " + data.lastname;
console.log("Full name: " + fullname);

console.log(typeof data.totalprice);
console.log(typeof data.depositpaid);
console.log(typeof data.bookingdates.checkin);
console.log(typeof data.bookingdates.checkout);

console.log("additional needs: " + data.additionalneeds);
console.log("check-in date: " + data.bookingdates.checkin);
console.log("check-out date: " + data.bookingdates.checkout);
