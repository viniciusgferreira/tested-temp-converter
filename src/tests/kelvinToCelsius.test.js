const kelvinToCelsius = require('../kelvinToCelsius');

describe('kevin to celsius conversion', () => {
  it('should 400 kelvin return 126.85 celsius', () => {
    expect(kelvinToCelsius(400)).toBe(126.85);
  });

  it('should 1 kelvin return -272.15 celsius', () => {
    expect(kelvinToCelsius(1)).toBe(-272.15);
  });

  it('should negative kelvin return null', () => {
    expect(kelvinToCelsius(-1)).toBeFalsy();
  });

});
