class AppError extends Error {
    constructor(message, statusCode, isOperational = true, stack = ""){
        super(message);
        this.statusCode = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.status = statusCode;
        this.isOperational = isOperational;
        this.message = message;
        this.type =  'AppError';
        if(stack){
            this.stack = stack;

        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
   
module.exports = AppError