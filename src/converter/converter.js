function convert(unit) {
  switch (unit) {
    case 'c':
      document.querySelector('#inputFahrenheit').value = celsiusToFahrenheit(inputCelsius.value);
      document.querySelector('#inputKelvin').value = celsiusToKelvin(inputCelsius.value);
      break;
    case 'f':
      document.querySelector('#inputCelsius').value = fahrenheitToCelsius(inputFahrenheit.value);
      document.querySelector('#inputKelvin').value = fahrenheitToKelvin(inputFahrenheit.value);
      break;
    case 'k':
      document.querySelector('#inputCelsius').value = kelvinToCelsius(inputKelvin.value);
      document.querySelector('#inputFahrenheit').value = kelvinToFahrenheit(inputKelvin.value);
      break;
    default:
  }
}

if (typeof module === 'object') {
  module.exports = convert;
}
