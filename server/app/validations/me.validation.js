const Joi = require("joi");

const meLogin = {
   body: Joi.object().keys({
      email: Joi.string().email().required(),
   }),

};

const meVerify = {
  body: Joi.object().keys({
     email: Joi.string().email().required(),
     code: Joi.string().min(6).required(),
  }),

};


module.exports = {
  meLogin,
  meVerify
}