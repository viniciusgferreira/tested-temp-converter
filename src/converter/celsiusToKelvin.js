function celsiusToKelvin(celsius) {
  celsius = Number.parseInt(celsius);
  return Number((celsius + 273.15).toFixed(3));
}
if (typeof module === 'object') {
  module.exports = celsiusToKelvin;
}
