const {authService} = require("../services");
const catchAsync = require("../utils/catchAsync");
const requestHandler = require("../utils/requestHandler");

const authLogin = catchAsync(async (req, res)=> {
    const result = await authService.authLogin(req.body);
    if(!result) throw new AppError('Login failed',400);
    requestHandler.sendSuccess(res, 'successful')({result});
   
});

module.exports = {
    authLogin,

}
