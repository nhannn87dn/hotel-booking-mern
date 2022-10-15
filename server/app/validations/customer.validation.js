const Joi = require('joi')
    .extend(require('@joi/date'));
const {objectId} = require('./custom.validation');

const getCustomer = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};


const createCustomer = {
   body: Joi.object().keys({
    name: Joi.string().min(4).max(160).required(),
    email: Joi.string().email().required(),
    birthday: Joi.date().required().format('YYYY-MM-DD').utc(),
    mobile: Joi.string().optional().default(''),
    address: Joi.string().optional().default(''),
    avatar: Joi.string().optional().default(''),
    country: Joi.string().optional().default(''),
    zipCode: Joi.number().optional().default(0),
   }),

};

const updateCustomer = {
  body: Joi.object().keys({
    name: Joi.string().min(4).max(160).required(),
    email: Joi.string().email().required(),
    birthday: Joi.date().required().format('YYYY-MM-DD').utc(),
    mobile: Joi.string().optional().default(''),
    address: Joi.string().optional().default(''),
    avatar: Joi.string().optional().default(''),
    country: Joi.string().optional().default(''),
    zipCode: Joi.number().optional().default(0),
  }),
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

const deleteCustomer = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
}

module.exports = {
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
}