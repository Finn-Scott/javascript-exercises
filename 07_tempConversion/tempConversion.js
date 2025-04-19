const convertToCelsius = function (temp) {
  let convert = ((temp - 32) * 5) / 9;
  let round = Math.round(convert * 10) / 10;
  return round;
};

const convertToFahrenheit = function (temp) {
  let convert = (temp * 9) / 5 + 32;
  let round = Math.round(convert * 10) / 10;
  return round;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
