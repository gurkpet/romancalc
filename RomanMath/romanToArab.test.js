const romanToArab = require('./romanToArab.js');

describe("romanSecToArab invalid param handling", () => {
  it('should throw a type error for invalid Roman Numerals',
    () => expect( () => (romanToArab('a'))).toThrow(TypeError)),
  it('should throw a type error if passed a number',
    () => expect( () => (romanToArab(1))).toThrow(TypeError)),
  it('should throw a type error a string with a space',
    () => expect( () => (romanToArab('X I'))).toThrow(TypeError))
})

describe("romanToArab basic convertions", () => {
  it('should convert I to 1', () => expect(romanToArab('I')).toEqual(1))
  it('should convert V to 5', () => expect(romanToArab('V')).toEqual(5))
  it('should convert X to 10', () => expect(romanToArab('X')).toEqual(10))
  it('should convert L to 50', () => expect(romanToArab('L')).toEqual(50))
  it('should convert C to 100', () => expect(romanToArab('C')).toEqual(100))
  it('should convert D to 500', () => expect(romanToArab('D')).toEqual(500))
  it('should convert M to 1000', () => expect(romanToArab('M')).toEqual(1000))
})

describe("romanToArab intermediate convertions", () => {
  it('should convert VI to 6', () => expect(romanToArab('VI')).toEqual(6))
  it('should convert XX to 20', () => expect(romanToArab('XX')).toEqual(20))
  it('should convert CI to 101', () => expect(romanToArab('CI')).toEqual(101))
  it('should convert MD to 1500', () => expect(romanToArab('MD')).toEqual(1500))
})

describe("romanToArab advanced convertions", () => {
  it('should convert IV to 4', () => expect(romanToArab('IV')).toEqual(4))
  it('should convert IX to 9', () => expect(romanToArab('IX')).toEqual(9))
  it('should convert XL to 40', () => expect(romanToArab('XL')).toEqual(40))
  it('should convert XC to 90', () => expect(romanToArab('XC')).toEqual(90))
  it('should convert CD to 400', () => expect(romanToArab('CD')).toEqual(400))
  it('should convert CM to 900', () => expect(romanToArab('CM')).toEqual(900))
})
