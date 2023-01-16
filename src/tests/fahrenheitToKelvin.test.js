const fahrenheitToKelvin = require('../converter/fahrenheitToKelvin');

describe('fahrenheit to kelvin conversion', () => {
  it('should 100 fahrenheit return 310.928 kelvin', () => {
    expect(fahrenheitToKelvin(100)).toBe(310.928);
  });

  it('should 0 fahrenheit return 255.372 kelvin', () => {
    expect(fahrenheitToKelvin(0)).toBe(255.372);
  });

  it('should -5 fahrenheit return 252.59 kelvin', () => {
    expect(fahrenheitToKelvin(-5)).toBe(252.594);
  });

});
