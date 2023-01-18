function fahrenheitToKelvin(fahrenheit) {
  const kelvin = Number(((fahrenheit - 32) * 5 / 9 + 273.15).toFixed(3));
  return kelvin;
  //return Number((fahrenheit - 273.15).toFixed(3));
}

if (typeof module === 'object') {
  module.exports = fahrenheitToKelvin;
}
