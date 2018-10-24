const { get } = require('../utils');
const CURRENT_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast`;

module.exports = {
  byCityName: ({ appId, lang, units }, { name, countryCode }) => {
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
  byCityID: ({ appId, lang, units }, { id }) =>
    get(CURRENT_FORECAST_URL, appId, {
      id,
      units,
      lang
    }),
  byLatLon: ({ appId, lang, units }, { lat, lon }) =>
    get(CURRENT_FORECAST_URL, appId, {
      lat,
      lon,
      units,
      lang
    }),
  byZIP: ({ appId, lang, units }, { zip, countryCode }) => {
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
