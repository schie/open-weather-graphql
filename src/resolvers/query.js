const simpleResolve = (_, { appId, lang }) => ({ appId, lang });

module.exports = {
  currentWeather: simpleResolve,
  fiveDayForecast: simpleResolve
};
