const kelvinToFahrenheit = require('../kelvinToFahrenheit');

describe('kelvin to fahrenheit conversion', () => {
  it('should 100 kelvin return -279.67 fahrenheit', () => {
    expect(kelvinToFahrenheit(100)).toBe(-279.67);
  });

  it('should 0 kelvin return -459.67 fahrenheit', () => {
    expect(kelvinToFahrenheit(0)).toBe(-459.67);
  });

  it('should negative kelvin return null', () => {
    expect(kelvinToFahrenheit(-5)).toBe(null);
  });

  it('should 100 kelvin(string) return -279.67 fahrenheit(number)', () => {
    expect(kelvinToFahrenheit('100')).toBe(-279.67);
  });
});
