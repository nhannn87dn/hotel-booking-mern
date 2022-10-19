const fileSizeConvert = require('./fileSizeConvert');

/* 
    @str formats number.unit 
    Ex: 2.MB
    @return 0 |  if checks format string return false
*/
const strToBytes = (str) => {
    if (!(str.indexOf('.') > -1)){
        return 0;
    }
   
    let arr  = str.split(".");
    return fileSizeConvert.toBytes(arr[0],arr[1]);
}

module.exports = {
   strToBytes
}