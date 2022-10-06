const {meService} = require("../services");
const catchAsync = require("../utils/catchAsync");
const requestHandler = require("../utils/requestHandler");
const nodeMailer = require('../utils/mailer');
const AppError = require('../utils/AppError');

// Confirm Email and Mobile then send OTP to Email 
const meLogin = catchAsync(async (req, res)=> {
    const code = await meService.meLogin(req.body);
    if(code){
        //send OTP to mail
        try {
            // Lấy data truyền lên từ form phía client
            const { email } = req.body;
            let subject = 'Code Verify Send From Hotel Booking App';
            let bodyHtml = `<p><b>Hello !</b></p>
            <p>Code verify: <strong>${code}</strong></p>
            <p>This code is only valid for 5 minutes (current Time ${Date.now}).</p>`;
            // Thực hiện gửi email
            await nodeMailer.sendMail(email, subject, bodyHtml);
            // Quá trình gửi email thành công thì gửi về thông báo success cho người dùng
            requestHandler.sendSuccess(res, 'successful')({email});
          } catch (error) {
            // Nếu có lỗi thì log ra để kiểm tra và cũng gửi về client
            console.log(error)
            throw new AppError('Send code to email failed',400);
          }
    }

    throw new AppError('Code failed',400);
   
});

// Confirm OTP 
const meVerify = catchAsync(async (req, res)=> {
    const result = await meService.meVerify(req.body);
    if(!result) throw new AppError('Login failed',400);
    requestHandler.sendSuccess(res, 'successful')({result});
   
});

const meVerifyToken = catchAsync(async (req, res)=> {
    requestHandler.sendSuccess(res, 'successful');
});

const meFreshToken = catchAsync(async (req, res)=> {
    requestHandler.sendSuccess(res, 'successful');
});



const meLogout = catchAsync(async (req, res)=> {

});

module.exports = {
    meLogin,
    meVerify,
    meVerifyToken,
    meFreshToken,
    meLogout

}
