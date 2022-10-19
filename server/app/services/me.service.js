const {Customer} = require('../models');
const AppError = require('../utils/AppError');
const _ = require('lodash');

const meProfile = async (customer) => {
  const me = await Customer.findById(customer._id);
  if(!me){
    throw new AppError('Customer not Found', 400);
    }
  var result = _.pick(me, ["_id", "name", "email", "birthday", "mobile", "address", "avatar", "country", "zipCode"]);
  return result;
};


const meLogin = async (meBody) => {

    let customer = await Customer.findOne({
        email: meBody.email
    });
    if(!customer){
        throw new AppError(meBody.email + 'Invalid email', 400);
    } 

    const code = customer.generateCode(6);
    //TODO save code to Collection
    customer.otp = code;
    await customer.save();

    return code;
}

const meVerify = async (meBody) => {
    let customer = await Customer.findOne({
        email: meBody.email,
        otp: meBody.otp
    });
    if(!customer){
        throw new AppError('Code is Expired', 400);
    }
    const token = customer.generateAuthToken();
    //TODO insert token to access_token Collection -> check valid token expr
    /* Only select fields necessary */
    //var result = _.pick(customer, ['_id', 'name', 'email', 'avatar']);
    return {token: token}
}

const meVerifyToken = async (reqMe) => {
    const me = await meProfile(reqMe);
    var result = _.pick(me, ['_id', 'name', 'email', 'avatar']);
    return {...result,isLoggedIn: true}
}


const meSignUp = async (body) => {
    const me = await Customer.create(body);
    let result = _.pick(me, ['_id', 'name', 'email', 'avatar']);
    return result
};
  


module.exports = {
    meLogin,
    meVerify,
    meVerifyToken,
    meProfile,
    meSignUp
};
