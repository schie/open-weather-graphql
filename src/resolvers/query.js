const simpleResolve = (_, { appId }) => ({ appId });

module.exports = {
  currentWeather: simpleResolve,
  fiveDayForecast: simpleResolve
};
