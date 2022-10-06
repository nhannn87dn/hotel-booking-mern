const Joi = require('joi')
    .extend(require('@joi/date'));
const {objectId} = require('./custom.validation');

const uploads = {
  params: Joi.object().keys({
    typeFile: Joi.string().required().valid("image", "file").default("file"),
  }),
};


module.exports = {
  uploads
}