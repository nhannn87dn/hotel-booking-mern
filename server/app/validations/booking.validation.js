const Joi = require('joi')
    .extend(require('@joi/date'));
const {objectId} = require('./custom.validation');

const getBooking = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};


const createBooking = {
   body: Joi.object().keys({
    room: Joi.string().required().custom(objectId),
    customer: Joi.string().required().custom(objectId),
    checkInDate: Joi.date().format('YYYY-MM-DD').utc(),
    checkOutDate: Joi.date().format('YYYY-MM-DD').utc(),
    totalAmount: Joi.number().optional().default(0),
    daysOfStay: Joi.number().optional().default(1),
    paymentInfo: Joi.array().optional().default([]),
    status: Joi.string().valid("booked", "canceled", "checkedin", "checkedout").default('booked'),
    isDelete: Joi.boolean().optional().default(false),
   }),

};

const updateBooking = {
  body: Joi.object().keys({
    room: Joi.string().required().custom(objectId),
    customer: Joi.string().required().custom(objectId),
    checkInDate: Joi.date().format('YYYY-MM-DD').utc(),
    checkOutDate: Joi.date().format('YYYY-MM-DD').utc(),
    totalAmount: Joi.number().optional().default(0),
    daysOfStay: Joi.number().optional().default(1),
    paymentInfo: Joi.array().optional().default([]),
    status: Joi.string().valid("booked", "canceled", "checkedin", "checkedout").default('booked'),
    isDelete: Joi.boolean().optional().default(false),
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
    createBooking,
    updateBooking,
    deleteBooking
}