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
    birthday: Joi.date().format('YYYY-MM-DD').utc(),
    mobile: Joi.string().min(10).required(),
    address: Joi.string().optional().default(''),
    avatar: Joi.string().optional().default(''),
    country: Joi.string().optional().default(''),
    zipCode: Joi.number().optional().default(''),
   }),

};

const updateCustomer = {
  body: Joi.object().keys({
    name: Joi.string().min(4).max(160).required(),
    email: Joi.string().email().required(),
    birthday: Joi.date().format('YYYY-MM-DD').utc(),
    mobile: Joi.string().min(10).required(),
    address: Joi.string().optional().default(''),
    avatar: Joi.string().optional().default(''),
    country: Joi.string().optional().default(''),
    zipCode: Joi.number().optional().default(''),
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