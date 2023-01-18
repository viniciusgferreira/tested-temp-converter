function kelvinToCelsius(kelvin) {
  if (kelvin < 0) { return null; }
  return Number((kelvin - 273.15).toFixed(3));
}

if (typeof module === 'object') {
  module.exports = kelvinToCelsius;
}
