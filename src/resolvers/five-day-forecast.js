const { addUnits, get } = require('../utils');
const CURRENT_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast`;

module.exports = {
  byCityName: ({ appId }, { name, countryCode, units }) => {
    const location = [name];
    if (countryCode && countryCode.trim()) {
      location.push(countryCode.trim());
    }
    return get(`${CURRENT_FORECAST_URL}?APPID=${appId}&q=${location.join()}${addUnits(units)}`);
  },
  byCityID: ({ appId }, { id, units }) =>
    get(`${CURRENT_FORECAST_URL}?${appId}&id=${id}${addUnits(units)}`),
  byLatLon: ({ appId }, { lat, lon, units }) =>
    get(`${CURRENT_FORECAST_URL}?APPID=${appId}&lat=${lat}&lon=${lon}${addUnits(units)}`),
  byZIP: ({ appId }, { zip, countryCode, units }) => {
    const location = [zip];
    if (countryCode && countryCode.trim()) {
      location.push(countryCode.trim());
    }
    return get(`${CURRENT_FORECAST_URL}?APPID=${appId}&zip=${location.join()}${addUnits(units)}`);
  }
};
