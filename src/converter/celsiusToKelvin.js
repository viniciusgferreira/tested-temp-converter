function celsiusToKelvin(celsius) {
  celsius = Number(celsius);
  return (celsius + 273.15);
}
if (typeof module === 'object') {
  module.exports = celsiusToKelvin;
}
