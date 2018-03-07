const { addUnits, get } = require('../utils');

const APPID = process.env.APP_ID
const CURRENT_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?${APPID}`

module.exports = {
  byCityName: (_, { name, countryCode, units }) => {
    const location = [name]
    if (countryCode && countryCode.trim()) {
      location.push(countryCode.trim())
    }
    return get(`${CURRENT_FORECAST_URL}&q=${location.join()}${addUnits(units)}`)
  },
  byCityID: (_, { id, units }) => get(`${CURRENT_FORECAST_URL}&id=${id}${addUnits(units)}`),
  byLatLon: (_, { lat, lon, units }) => get(`${CURRENT_FORECAST_URL}&lat=${lat}&lon=${lon}${addUnits(units)}`),
  byZIP: (_, { zip, countryCode, units }) => {
    const location = [zip]
    if (countryCode && countryCode.trim()) {
      location.push(countryCode.trim())
    }
    return get(`${CURRENT_FORECAST_URL}&zip=${location.join()}${addUnits(units)}`)
  }
}
