const momentDefault = require('moment');
const momentRange = require('moment-range');
const moment = momentRange.extendMoment(momentDefault);
let str = '{a: "text", b: 1, c: {d: "aaa", e: 123}}';
str = addslashes(str);


let images = [
  {
    "link": "/uploads/images/g4-1665072873860.jpg",
    "_id": {
      "$oid": "633efee95ba09351eed6cd88"
    }
  },
  {
    "link": "/uploads/images/g5-1665072873864.jpg",
    "_id": {
      "$oid": "633efee95ba09351eed6cd89"
    }
  }
];

console.log(images[0].link)

function addslashes(string) {
  return string.replace(/\\/g, '\\\\').
      replace(/\u0008/g, '\\b').
      replace(/\t/g, '\\t').
      replace(/\n/g, '\\n').
      replace(/\f/g, '\\f').
      replace(/\r/g, '\\r').
      replace(/'/g, '\\\'').
      replace(/"/g, '\\"');
}

console.log(str);

let GMTTime = "2022-10-11T05:00:00.000Z"; //Singapore

let localTime = moment(GMTTime).format('YYYY-MM-DD HH:mm:ssZ')


console.log("localTime",localTime);