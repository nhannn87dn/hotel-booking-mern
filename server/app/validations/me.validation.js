const Joi = require("joi");

const meLogin = {
   body: Joi.object().keys({
      email: Joi.string().email().required(),
   }),

};

const meVerify = {
  body: Joi.object().keys({
     email: Joi.string().email().required(),
     otp: Joi.string().min(6).required(),
  }),

};

const meSignUp = {
   body: Joi.object().keys({
      email: Joi.string().email().max(160).required(),
      name: Joi.string().max(160).required(),
   }),
 
 };
 

module.exports = {
  meLogin,
  meVerify,
  meSignUp
}