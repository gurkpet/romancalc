const arabToRoman = require('./arabToRoman.js');
const romanToArab = require('./romanToArab.js');

const processString = (inputString) => {
  const stringToProcess = inputString.split(' ');
  if (stringToProcess.length !== 3) {
    throw new Error('Invalid input, format should be Roman Numeral, a space, a math operation, a space, another math operation and nothing else')
  }
  
  const firstNum = romanToArab(stringToProcess[0]);
  const secondNum = romanToArab(stringToProcess[2]);

  if(stringToProcess[1] === '+') {
    const RomanOutput = arabToRoman(firstNum + secondNum);
    console.log(`${stringToProcess[0]} + ${stringToProcess[2]} equals ${RomanOutput}`)
    return RomanOutput;
  }

  if(stringToProcess[1] === '*') {
    const RomanOutput = arabToRoman(firstNum * secondNum);
    console.log(`${stringToProcess[0]} * ${stringToProcess[2]} equals ${RomanOutput}`)
    return RomanOutput;
  }
  
  if(stringToProcess[1] === '/') {
    const RomanOutput = arabToRoman(firstNum / secondNum);
    console.log(`${stringToProcess[0]} / ${stringToProcess[2]} equals ${RomanOutput}`)
    return RomanOutput;
  }

  if(stringToProcess[1] === '-') {
    let RomanOutput = arabToRoman(firstNum - secondNum);
    if(RomanOutput.length === 0) {
      RomanOutput = "Zero was inverted in 600 AD in indea and has no Roman representation"
    }
    console.log(`${stringToProcess[0]} - ${stringToProcess[2]} equals ${RomanOutput}`)
    

    return RomanOutput;
  }

}

module.exports = processString;