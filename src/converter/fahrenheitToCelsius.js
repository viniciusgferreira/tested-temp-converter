function fahrenheitToCelsius(fahrenheit) {
  return Number(((fahrenheit - 32) * 5 / 9).toFixed(3));
}

if (typeof module === 'object') {
  module.exports = fahrenheitToCelsius;
}
