const convDict = require('./romanToArabConvDict.json')

const romanToArab = (roman) => {
 if(typeof roman !== 'string') {
   throw new TypeError('a roman number must be a string');
 } else if (roman.indexOf(' ') !== -1) {
  throw new TypeError('a roman numeral must not contain spaces');
 }
 const romanChars = roman.split('');
 let value = 0;
 romanChars.forEach((char, index) => {
  if(convDict[char] === undefined) {
    throw new TypeError(`${char} is not a valid roman numeral`);
  }
  if(romanChars[index + 1] === undefined) {
    value += convDict[char];
  } else if(convDict[char] < convDict[romanChars[index + 1]]) {
    value -= convDict[char];
  } else {
    value += convDict[char];
  }
 })
 return value;
}
module.exports = romanToArab;