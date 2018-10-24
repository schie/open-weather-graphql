const { get } = require('../utils');
const CURRENT_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast`;

module.exports = {
  byCityName: ({ appId, lang }, { name, countryCode, units }) => {
    const location = [name];
    if (countryCode && countryCode.trim()) {
      location.push(countryCode.trim());
    }

    return get(CURRENT_FORECAST_URL, appId, {
      q: location.join(),
      units,
      lang
    });
  },
  byCityID: ({ appId, lang }, { id, units }) =>
    get(CURRENT_FORECAST_URL, appId, {
      id,
      units,
      lang
    }),
  byLatLon: ({ appId, lang }, { lat, lon, units }) =>
    get(CURRENT_FORECAST_URL, appId, {
      lat,
      lon,
      units,
      lang
    }),
  byZIP: ({ appId, lang }, { zip, countryCode, units }) => {
    const location = [zip];
    if (countryCode && countryCode.trim()) {
      location.push(countryCode.trim());
    }

    return get(CURRENT_FORECAST_URL, appId, {
      zip: location.join(),
      units,
      lang
    });
  }
};
