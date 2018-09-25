const convDict = require('./romanToArabConvDict.json')

const divideParts = (number, divisor) => {
  const parts = {};
  parts['whole'] = Math.floor(number/divisor);
  parts['remainder'] = number%divisor;
  return parts
}

const arabToRoman = (arabNum) => {
  if(typeof arabNum !== 'number') {
    throw new TypeError("arabToRoman only accepts numbers");
  }
  const romanSymCount = [];
  romanSymCount.push(Math.floor(arabNum/1000));
  romanSymCount.push(Math.floor(arabNum%1000/100));
  romanSymCount.push(Math.floor(arabNum%100/10));
  romanSymCount.push(Math.floor(arabNum%10/1));
  
  let outputString = '';
  // add the number of Ms to output, no special circumstances to account for
  outputString += 'M'.repeat(romanSymCount[0])
  
  // add the number of Cs to output, if C is 4 or 9 use substraction shorthand
  if (romanSymCount[1] === 9) {
    outputString += 'CM';
  } else if (romanSymCount[1] === 4) {
    outputString += 'CD';
  } else if (romanSymCount[1] >= 5) {
    outputString += 'D';
    outputString += 'C'.repeat(romanSymCount[1]-5);
  } else {
    outputString += 'C'.repeat(romanSymCount[1])
  }

  if (romanSymCount[2] === 9) {
    outputString += 'XC';
  } else if (romanSymCount[2] === 4) {
    outputString += 'XL';
  } else if (romanSymCount[2] >= 5) {
    outputString += 'L';
    outputString += 'X'.repeat(romanSymCount[2] - 5)
  } else {
    outputString += 'X'.repeat(romanSymCount[2])
  }

  if (romanSymCount[3] === 9) {
    outputString += 'IX';
  } else if (romanSymCount[3] === 4) {
    outputString += 'IV';
  } else if (romanSymCount[3] === 5) {
    outputString += 'V';
    outputString += 'I'.repeat(romanSymCount[3] - 5)
  } else {
    outputString += 'I'.repeat(romanSymCount[3])
  }
  return outputString;
}

module.exports = arabToRoman;