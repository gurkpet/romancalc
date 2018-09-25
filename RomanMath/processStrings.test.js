const processString = require('./processString.js');

describe("romanToArab basic convertions", () => {
  it('should convert "I + I"', () => expect(processString('I + I')).toEqual('II'))
  it('should convert "III + I"', () => expect(processString('III + I')).toEqual('IV'))
  it('should convert "X - I"', () => expect(processString("X - I")).toEqual('IX'))
  it('should convert "C - X"', () => expect(processString('C - X')).toEqual('XC'))
  it('should convert "C - I"', () => expect(processString('C - I')).toEqual('XCIX'))
})