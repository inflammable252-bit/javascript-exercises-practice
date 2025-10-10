const convertToCelsius = (Ftemp) => 
  parseFloat((((Ftemp-32) * 5) / 9).toFixed(1))


const convertToFahrenheit = (Ctemp) =>
parseFloat((((Ctemp*9) / 5) + 32).toFixed(1))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
