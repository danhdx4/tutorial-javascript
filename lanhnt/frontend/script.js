// import response from "../../data/getBookingResponse.json" with { type: "json" };

// console.log("Checking:", response);
// console.log("Checking:", typeof response.bookingdates.checkin);

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
