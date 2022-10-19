const Joi = require("joi");


const updateSetting = {
  body: Joi.object().keys({
    appName: Joi.string().min(4).max(60).optional().default(''),
    metaTitle: Joi.string().max(60).optional().default(''),
    metaDescription: Joi.string().max(158).optional().default(''),
    name: Joi.string().min(4).max(160).optional().default(''),
    hotline: Joi.string().optional().default(''),
    email: Joi.string().email().optional().default(''),
    address: Joi.string().max(255).optional().default(''),
    telephone: Joi.string().optional().default(''),
    taxFee: Joi.number().optional().default(0)
  })
};

module.exports = {
    updateSetting
}