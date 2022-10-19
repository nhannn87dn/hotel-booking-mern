const Joi = require('joi');
const {objectId, dateFormat} = require('./custom.validation');


const getBookingByCustomer = {
  params: Joi.object().keys({
    bookingId: Joi.string().required().custom(objectId),
  }),
};


const getBookingsListByCustomer = {
  query: Joi.object().keys({
    page: Joi.number().optional().default(1),
  }),
};



const getBooking = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

const getBookings = {
  query: Joi.object().keys({
    page: Joi.number().optional().default(1),
    code: Joi.string().optional().default(''),
    name: Joi.string().optional().default(''),
    mobile: Joi.string().optional().default(''),
  }),
};


const createBooking = {
   body: Joi.object().keys({
      room: Joi.string().required().custom(objectId),
      customer: Joi.string().required().custom(objectId),
      numOfRooms: Joi.number().required().default(1), 
      checkInDate: Joi.string().required().custom(dateFormat),
      checkOutDate: Joi.string().required().custom(dateFormat),
      pricePerNight: Joi.number().required().default(0),
      priceChildren: Joi.number().min(0).max(Joi.ref('pricePerNight')).required().default(0),
      numOfAdults: Joi.number().required().default(1),
      numOfChildren: Joi.number().optional().default(0),
      serviceCharge: Joi.number().optional().default(0),
      surCharge: Joi.number().optional().default(0),
      taxFee: Joi.number().optional().default(0),
      discount: Joi.number().min(0).max(Joi.ref('pricePerNight')).required().default(0),
      totalAmount: Joi.number().optional().default(0),
      daysOfStay: Joi.number().optional().default(1),
      paymentId: Joi.string().required().custom(objectId),
      status: Joi.string().valid("booked","confirmed", "canceled", "checkedin", "checkedout","success").default('booked'),
      paymentStatus: Joi.string().valid("unpay", "pending", "paid").default('unpay'),
      note: Joi.string().optional().valid("").default(""),
   }),

};



const updateBooking = {
  body: Joi.object().keys({
    room: Joi.string().optional().custom(objectId),
    numOfRooms: Joi.number().required().default(1), 
    checkInDate: Joi.string().required().custom(dateFormat),
    checkOutDate: Joi.string().required().custom(dateFormat),
    pricePerNight: Joi.number().optional().default(0),
    priceChildren: Joi.number().min(0).max(Joi.ref('pricePerNight')).optional().default(0),
    numOfAdults: Joi.number().optional().default(1),
    numOfChildren: Joi.number().optional().default(0),
    serviceCharge: Joi.number().optional().default(0),
    surCharge: Joi.number().optional().default(0),
    taxFee: Joi.number().optional().default(0),
    discount: Joi.number().min(0).max(Joi.ref('pricePerNight')).optional().default(0),
    totalAmount: Joi.number().optional().default(0),
    daysOfStay: Joi.number().optional().default(1),
    paymentInfo: Joi.object().optional().default({}),
    status: Joi.string().optional().valid("booked", "confirmed", "canceled", "checkedin", "checkedout","success").default('booked'),
    paymentStatus: Joi.string().optional().valid("unpay", "pending", "paid").default('unpay'),
    note: Joi.string().optional(),
    isDelete: Joi.boolean().optional().valid(true,false).default(false),
    actions: Joi.array().optional(),
  }),
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

const deleteBooking = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
}

module.exports = {
    getBooking,
    getBookings,
    createBooking,
    updateBooking,
    deleteBooking,
    getBookingByCustomer,
    getBookingsListByCustomer,
}