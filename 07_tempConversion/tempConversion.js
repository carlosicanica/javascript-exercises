const convertToCelsius = function(fahr) {
  let newCels = (fahr - 32) / 1.8000
  let celsiusRounded = Math.round(newCels * 10) / 10;
  return celsiusRounded;
};

const convertToFahrenheit = function(cels) {
  let newFahr = (cels * 1.8000) + 32;
  let fahrenheitRounded = Math.round(newFahr * 10) / 10;
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
