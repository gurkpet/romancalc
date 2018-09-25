const processString = require('./RomanMath/processString.js')


const stringToProcess = process.argv[2];

try {
  processString(stringToProcess);
} catch (error) {
  console.log(error.message);
}