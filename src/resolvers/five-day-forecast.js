const { addUnits, get, addLanguage } = require('../utils');
const CURRENT_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast`;

module.exports = {
  byCityName: ({ appId, lang }, { name, countryCode, units }) => {
    const location = [name];
    if (countryCode && countryCode.trim()) {
      location.push(countryCode.trim());
    }
    return get(
      `${CURRENT_FORECAST_URL}?APPID=${appId}&q=${location.join()}${addUnits(units)}${addLanguage(
        lang
      )}`
    );
  },
  byCityID: ({ appId, lang }, { id, units }) =>
    get(`${CURRENT_FORECAST_URL}?${appId}&id=${id}${addUnits(units)}${addLanguage(lang)}`),
  byLatLon: ({ appId, lang }, { lat, lon, units }) =>
    get(
      `${CURRENT_FORECAST_URL}?APPID=${appId}&lat=${lat}&lon=${lon}${addUnits(units)}${addLanguage(
        lang
      )}`
    ),
  byZIP: ({ appId, lang }, { zip, countryCode, units }) => {
    const location = [zip];
    if (countryCode && countryCode.trim()) {
      location.push(countryCode.trim());
    }
    return get(
      `${CURRENT_FORECAST_URL}?APPID=${appId}&zip=${location.join()}${addUnits(units)}${addLanguage(
        lang
      )}`
    );
  }
};
