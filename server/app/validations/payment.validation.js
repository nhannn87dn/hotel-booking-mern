const Joi = require('joi');
const {objectId} = require('./custom.validation');

const getPayment = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

const createPayment = {
   body: Joi.object().keys({
    code: Joi.string().min(3).max(20).required(),
    name: Joi.string().min(10).max(255).required(),
    desc: Joi.string().max(255).required(),
    fee: Joi.number().min(0).optional().default(0),
    order: Joi.number().optional().default(0),
    config: Joi.object().optional().default({}),
    isOnline: Joi.boolean().optional().valid(true, false).default(false),
    enabled: Joi.boolean().optional().valid(true, false).default(false),
    isCod: Joi.boolean().optional().valid(true, false).default(false),
    isDelete: Joi.boolean().optional().valid(true, false).default(false),
   }),

};

const updatePayment = {
  body: Joi.object().keys({
    code: Joi.string().min(3).max(20).optional(),
    name: Joi.string().min(10).max(255).optional(),
    desc: Joi.string().max(255).optional(),
    fee: Joi.number().min(0).optional().default(0),
    order: Joi.number().optional().default(0),
    config: Joi.string().optional().default(""),
    isOnline: Joi.boolean().optional().valid(true, false).default(false),
    enabled: Joi.boolean().optional().valid(true, false).default(false),
    isCod: Joi.boolean().optional().valid(true, false).default(false),
    isDelete: Joi.boolean().optional().valid(true, false).default(false),
  }),
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

const deletePayment = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
}

module.exports = {
    getPayment,
    createPayment,
    updatePayment,
    deletePayment
}