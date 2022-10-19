const Joi = require("joi");
const {objectId} = require('./custom.validation');

const getMessage = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};


const createMessage = {
   body: Joi.object().keys({
    name: Joi.string().min(4).max(160).required(),
    email: Joi.string().email().required(),
    content: Joi.string().min(60).max(500).required(),
    mobile: Joi.string().optional().default(''),
   }),

};

const updateMessage = {
  body: Joi.object().keys({
    name: Joi.string().min(4).max(160).required(),
    email: Joi.string().email().required(),
    content: Joi.string().min(60).max(500).required(),
    mobile: Joi.string().optional().default(''),
  }),
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

const deleteMessage = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

/* Reply Message by Id */

const replyMessage = {
  body: Joi.object().keys({
    user: Joi.string().required().custom(objectId),
    content: Joi.string().required(),
  }),
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

module.exports = {
    getMessage,
    createMessage,
    updateMessage,
    deleteMessage,
    replyMessage
}