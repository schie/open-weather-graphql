const axios = require('axios');

module.exports = {
  addUnits: units => (units ? `&units=${units}` : ''),
  addLanguage: lang => `&lang=${lang}`,
  get: url => axios.get(url).then(({ data }) => data)
};
