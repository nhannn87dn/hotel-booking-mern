const {Customer} = require('../models');
const AppError = require('../utils/AppError');
//const _ = require('lodash');

const meLogin = async (meBody) => {

    let customer = await Customer.findOne({
        email: meBody.email
    });
    if(!customer){
        throw new AppError('Invalid email', 400);
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
        otp: meBody.code
    });
    if(!customer){
        throw new AppError('Code is Expired', 400);
    }
    const token = customer.generateAuthToken();

    /* Only select fields necessary */
    var result = _.pick(customer, ['_id', 'name', 'email']);
    return [{user: result, token}];
}

const meLogout = async (meBody) => {

}

module.exports = {
    meLogin,
    meVerify,
    meLogout,
};
