const convertToCelsius = function(fahr) {
  let newCels = (fahr - 32) / 1.8000
  let celsiusRounded = Math.round(newCels * 10) / 10;
  return celsiusRounded;
};

const convertToFahrenheit = function(cels) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
