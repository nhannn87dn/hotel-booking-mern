const {bookingService} = require("../services");
const catchAsync = require("../utils/catchAsync");
const AppError = require('../utils/AppError');
const requestHandler = require("../utils/requestHandler");
const nodeMailer = require('../utils/mailer');
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

    if(booking){
        //send Booking to mail
        try {
            // Lấy data truyền lên từ form phía client
            let subject = 'Confirm Booking From Sochi Hotel';
            let bodyHtml = `<p><b>Hello !</b></p>
            <p>Code Booking: <strong>${booking.code}</strong></p>
            <p>CheckIn Date: <strong>${booking.checkInDate}</strong></p>
            <p>CheckIn Date: <strong>${booking.checkOutDate}</strong></p>
            <p>Total Amout: <strong>${booking.totalAmount}</strong></p>
            <p>Please contact us for supports details !</p>`;
            // Thực hiện gửi email
            await nodeMailer.sendMail(email, subject, bodyHtml);
            // Quá trình gửi email thành công thì gửi về thông báo success cho người dùng
          } catch (error) {
            // Nếu có lỗi thì log ra để kiểm tra và cũng gửi về client
            console.log(error)
            //throw new AppError('Send code to email failed',400);
          }
    }


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