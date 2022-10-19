const {User} = require('../models');
const AppError = require('../utils/AppError');
const _ = require('lodash');

const authLogin = async (userBody) => {

    let user = await User.findOne({
        email: userBody.email
    });
    if(!user){
        throw new AppError('Invalid email or password', 400);
    } 

    const invalidPasword = await user.invalidPassword(
        userBody.password,
        user.password
    );

    if(!invalidPasword) throw new AppError('Invalid email or password', 400);
    
    const token = user.generateAuthToken();
    //TODO insert token to access_token Collection -> check valid token expr
    /* Only select fields necessary */
    return {token: token};
}

const VerifyToken = async (reqMe) => {
    const user = await User.findById(reqMe._id);
    var result = _.pick(user, ["name", "email", "role", "isEmailVerified"]);
    return {...result,isLoggedIn: true}
}


module.exports = {
    authLogin,
    VerifyToken
};
