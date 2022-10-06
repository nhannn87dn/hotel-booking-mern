const {Booking} = require('../models');
const AppError = require('../utils/AppError');



const getBooking = async (id)=> {
    const booking = await Booking.findById(id);
    return booking;
};

const getBookings = async (pageNumber)=> {

    let pageSize = 25; // number records per a page
    const totals = await Booking.countDocuments();
    const bookings = await Booking.find()
      .select('-__v')
      .sort({name:-1})
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);
   
    const filteredCount = bookings.length;

    return [{ pageSize, totals, filteredCount, bookings }];
};


const createBooking = async (bookingBody)=> {
    const booking = await Booking.create(bookingBody);
    return booking;
};

const updateBooking = async (id,bookingBody)=> {
    const booking = await getBooking(id);
    if(!booking){
        throw new AppError('Booking not Found', 400);
    }

    Object.assign(booking,bookingBody); 
    let result = await booking.save();
    return result;
}

const deleteBooking = async(id) =>{
    const booking = await getBooking(id);
    if(!booking){
        throw new AppError('Booking not Found', 400);
    }
    let result = await booking.remove({_id: booking._id});
    return result;
}


module.exports = {
    getBookings,
    getBooking,
    createBooking,
    updateBooking,
    deleteBooking,
};
