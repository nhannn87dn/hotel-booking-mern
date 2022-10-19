const { Booking } = require("../models");
const { roomService } = require("../services");
const {AppError, randomString} = require("../utils");

/**
 * Query conditions and other options
 * https://mongoosejs.com/docs/populate.html#query-conditions
 *
 */
// Get Details a Bookings by CustomerID
// @customerId: get from request headers
const getBookingByCustomer = async (customerId,params) => {
  const booking = await Booking.findOne({
    _id: params.bookingId,
    customer: customerId,
  }).populate({
    path: "customer",
    select: "name email birthday mobile address country zipCode",
  });
  return booking;
};

// Get All Bookings by CustomerID
const getBookingsListByCustomer = async (query, customerId) => {
  const pageNumber = query.page ? parseInt(query.page) : 1;
  const pageSize = 25; // number records per a page
  const count = await Booking.countDocuments();
  const bookings = await Booking.find({
    customer: customerId,
  })
    .populate("customer", "name email birthday mobile address country zipCode")
    .sort({ name: -1 })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);

  const filteredCount = bookings.length;

  return [
    {
      pageSize,
      pageNumber,
      count,
      totalPages: Math.ceil(count / pageSize),
      filteredCount,
      bookings,
    },
  ];
};

/**
 * Private Services
 * Query conditions and other options
 * https://mongoosejs.com/docs/populate.html#query-conditions
 */

const getBooking = async (id) => {
  const booking = await Booking.findOne({
    _id: id,
  }).populate({
    path: "customer",
    select: "name email birthday mobile address country zipCode",
  });
  return booking;
};

//TODO get booking by range dates, current day
const getBookings = async (query) => {
  let pageNumber = query.page ? parseInt(query.page) : 1;
  let pageSize = 25; // number records per a page

  /* filter conditions */
  const customerName = query.name
    ? { "customer.name": { $regex: query.name, $options: "i" } }
    : {};

  const customerEmail = query.email
    ? { "customer.email": { $regex: query.email, $options: "i" } }
    : {};

  const customerMobile = query.mobile
    ? { "customer.mobile": { $regex: query.mobile, $options: "i" } }
    : {};
  
  const keyword = { $and: [
        customerName,
        customerEmail,
        customerMobile
   ]};  

  const bookingCode = query.code
    ? { code: { $regex: query.code, $options: "i" } }
    : {};

  const count = await Booking.countDocuments({
    $or: [
      bookingCode,
      keyword
    ],
  });
  const bookings = await Booking.find({
    $or: [
      bookingCode,
      keyword
    ],
  })
    .populate({
      path: "customer",
      select: "name email birthday mobile address country zipCode",
    })
    .select("-__v")
    .sort({ createdAt: -1 })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);

  const filteredCount = bookings.length;

  return [
    {
      pageSize,
      pageNumber,
      count,
      totalPages: Math.ceil(count / pageSize),
      filteredCount,
      bookings,
    },
  ];
};

const createBooking = async (body) => {
  /* Check available room before booking */
  const result = await roomService.searchAvailableRooms({
    ...body,
    roomId: body.room
  },{});

  if(result && result.roomAvailable === false){
     throw new AppError("This type room is unavailable for booking", 400);
  }

  body.checkInDate = await Booking.makeBookingDate(body.checkInDate);
  body.checkOutDate = await Booking.makeBookingDate(body.checkOutDate,true);
  body.code =  randomString.makeRandomString(8);

  /* tạo phương thức thanh toán dựa trên ID */
  body.paymentInfo = {
    payment: body.paymentId
  }
  delete body.paymentId;
 
  const booking = await Booking.create(body);
  return booking;
};

const updateBooking = async (id, body) => {
  const booking = await getBooking(id);
  if (!booking) {
    throw new AppError("Booking not Found", 400);
  }
  
  if(body.checkInDate) body.checkInDate = await Booking.makeBookingDate(body.checkInDate);
  if(body.checkOutDate) body.checkOutDate = await Booking.makeBookingDate(body.checkOutDate,true);
  
  Object.assign(booking, body);
  let result = await booking.save();
  return result;
};

//TODO soft delete
const deleteBooking = async (id) => {
  const booking = await getBooking(id);
  if (!booking) {
    throw new AppError("Booking not Found", 400);
  }
  let result = await booking.remove({ _id: booking._id });
  return result;
};

module.exports = {
  getBookings,
  getBooking,
  getBookingByCustomer,
  getBookingsListByCustomer,
  createBooking,
  updateBooking,
  deleteBooking,
};
