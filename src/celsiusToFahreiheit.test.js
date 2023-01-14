const celsiusToFahreiheit = require('./celsiusToFahreiheit');

describe('celsius to fahrenheit conversion', () => {
  it('should 100 celsius return 212 fahrenheit', () => {
    expect(celsiusToFahreiheit(100)).toBe(212);
  });
});
