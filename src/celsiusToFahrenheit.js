function celsiusToFahrenheit(celsius) {
  return Number(((celsius * 9 / 5) + 32).toFixed(3));
}

module.exports = celsiusToFahrenheit;
