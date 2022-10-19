const {bookingService} = require("../services");
const catchAsync = require("../utils/catchAsync");
const AppError = require('../utils/AppError');
const requestHandler = require("../utils/requestHandler");

/**
 * Public Controllers
 */

const getBookingByCustomer = catchAsync(async (req, res)=> {
    const booking = await bookingService.getBookingByCustomer(req.me._id,req.params);
    if(!booking) throw new AppError('Booking not found',400);
    requestHandler.sendSuccess(res,'successful')(booking);
});

const getBookingsListByCustomer = catchAsync(async (req, res)=> {
    const bookings = await bookingService.getBookingsListByCustomer(req.query,req.me._id);
    requestHandler.sendSuccess(res,'successful')(bookings);
});


/**
 * Private Controllers
 */

const getBooking = catchAsync(async (req, res)=> {
    const id = req.params.id;
    const booking = await bookingService.getBooking(id);
    if(!booking) throw new AppError('Booking not found',400);
    requestHandler.sendSuccess(res,'successful')(booking);
});

const getBookings = catchAsync(async (req, res)=> {
    const bookings = await bookingService.getBookings(req.query);
    requestHandler.sendSuccess(res,'successful')({bookings});
});

const createBooking = catchAsync(async (req, res)=> {
    const booking = await bookingService.createBooking(req.body);
    requestHandler.sendSuccess(res,'successful')(booking);
});

const updateBooking = catchAsync(async (req, res)=> {
    const id = req.params.id;
    const booking = await bookingService.updateBooking(id,req.body);
    requestHandler.sendSuccess(res,'successful')(booking);
});

const deleteBooking = catchAsync(async (req, res)=> {
    const id = req.params.id;
    const booking = await bookingService.deleteBooking(id);
    requestHandler.sendSuccess(res,'successful')(booking);
});


module.exports = {
    getBooking,
    getBookings,
    createBooking,
    updateBooking,
    deleteBooking,
    getBookingByCustomer,
    getBookingsListByCustomer,

}