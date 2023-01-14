const fahrenheitToCelsius = require('../fahrenheitToCelsius');

describe('fahrenheit to celsius conversion', () => {
  it('should 212 fahrenheit return 100 celsius', () => {
    expect(fahrenheitToCelsius(212)).toBe(100);
  });

  it('should 0 fahrenheit return -17.778 celsius', () => {
    expect(fahrenheitToCelsius(0)).toBe(-17.778);
  });

  it('should -5 fahrenheit return -20.556 celsius', () => {
    expect(fahrenheitToCelsius(-5)).toBe(-20.556);
  });

});
