const celsiusToFahrenheit = require('../celsiusToFahrenheit');

describe('celsius to fahrenheit conversion', () => {
  it('should 100 celsius return 212 fahrenheit', () => {
    expect(celsiusToFahrenheit(100)).toBe(212);
  });
});
