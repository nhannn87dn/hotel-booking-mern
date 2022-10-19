const moment = require('moment');

let POSTTime = "2022-10-09 14:00:00+07:00"; //Vietnam
console.log('POSTTime', POSTTime);
let utcPostTime = moment.utc(POSTTime).format("YYYY-MM-DD HH:mm:ssZ");
console.log('utcPostTime', utcPostTime);
let localDateTime = moment(utcPostTime).format("YYYY-MM-DD HH:mm:ssZ")
console.log("localDateTime", localDateTime)
