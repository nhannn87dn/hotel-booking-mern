// Make random string 
const makeRandomString = (length=6) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *  charactersLength));
    }
   return result;
}

// Function to generate OTP
const generateOTP = (length=4) => {
          
  // Declare a digits variable 
  // which stores all digits
  var digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < length; i++ ) {
      OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}


module.exports = {
  makeRandomString,
  generateOTP,
}