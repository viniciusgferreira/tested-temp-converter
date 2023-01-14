function fahrenheitToCelsius(fahrenheit) {
  return Number(((fahrenheit - 32) * 5 / 9).toFixed(3));
}

module.exports = fahrenheitToCelsius;
