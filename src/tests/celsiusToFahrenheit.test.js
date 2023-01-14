const celsiusToFahrenheit = require('../celsiusToFahrenheit');

describe('celsius to fahrenheit conversion', () => {
  it('should 100 celsius return 212 fahrenheit', () => {
    expect(celsiusToFahrenheit(100)).toBe(212);
  });

  it('should 0 celsius return 32 fahrenheit', () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
  });

  it('should -5 celsius return 23 fahrenheit', () => {
    expect(celsiusToFahrenheit(-5)).toBe(23);
  });

  it('should 100 celsius(string) return 212 fahrenheit(number)', () => {
    expect(celsiusToFahrenheit('100')).toBe(212);
  });
});
