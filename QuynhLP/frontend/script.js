// import response from "../../data/getBookingResponse.json" with { type: "json" };

// console.log("Checking:", response);
// console.log("Checking:", typeof response.bookingdates.checkin);
// bài 2
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
  console.log("Tìm fulname:");
  console.log("fulname:", data.firstname + " " + data.lastname);

  console.log("totalprice", typeof data.totalprice);
  console.log("depositpaid", typeof data.depositpaid);
  console.log("checkin", typeof data.bookingdates.checkin);
  console.log("checkout", typeof data.bookingdates.checkout);

  console.log("key additionalneeds:", data.additionalneeds);
  console.log("key checkin:", data.bookingdates.checkin);
  console.log("key checkout:", data.bookingdates.checkout);