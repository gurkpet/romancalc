const arabToRoman = require('./arabToRoman.js');

describe('arabToRoman basic conversions', () => {
  it('should convert 1 to I', () => expect(arabToRoman(1)).toEqual('I')),
  it('should convert 5 to V', () => expect(arabToRoman(5)).toEqual('V'))
  it('should convert 10 to X', () => expect(arabToRoman(10)).toEqual('X'))
  it('should convert 50 to L', () => expect(arabToRoman(50)).toEqual('L'))
  it('should convert 100 to C', () => expect(arabToRoman(100)).toEqual('C'))
  it('should convert 500 to D', () => expect(arabToRoman(500)).toEqual('D'))
  it('should convert 1000 to M', () => expect(arabToRoman(1000)).toEqual('M'))
})

describe('arabToRoman intermedia conversions', () => {
  it('should convert 4 to IV', () => expect(arabToRoman(4)).toEqual('IV')),
  it('should convert 9 to IX', () => expect(arabToRoman(9)).toEqual('IX'))
  it('should convert 40 to XL', () => expect(arabToRoman(40)).toEqual('XL'))
  it('should convert 90 to XC', () => expect(arabToRoman(90)).toEqual('XC'))
  it('should convert 400 to CD', () => expect(arabToRoman(400)).toEqual('CD'))
  it('should convert 900 to CM', () => expect(arabToRoman(900)).toEqual('CM'))
})