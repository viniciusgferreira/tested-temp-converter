const celsiusToKelvin = require('../converter/celsiusToKelvin');

describe('celsius to kelvin conversion', () => {
  it('should 100 celsius return 373.15 kelvin', () => {
    expect(celsiusToKelvin(100)).toBe(373.15);
  });

  it('should 0 celsius return 273.15 kelvin', () => {
    expect(celsiusToKelvin(0)).toBe(273.15);
  });

  it('should -5 celsius return 268.15 kelvin', () => {
    expect(celsiusToKelvin(-5)).toBe(268.15);
  });

  it('should 100 celsius(string) return 373.15 kelvin(number)', () => {
    expect(celsiusToKelvin('100')).toBe(373.15);
  });
});
