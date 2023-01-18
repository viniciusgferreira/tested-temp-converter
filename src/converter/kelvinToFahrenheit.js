function kelvinToFahrenheit(kelvin) {
  if (kelvin < 0) { return null; }
  return Number(((kelvin * 9 / 5) - 459.67).toFixed(3));
}

if (typeof module === 'object') {
  module.exports = kelvinToFahrenheit;
}
