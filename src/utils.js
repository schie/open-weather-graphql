const axios = require('axios');

module.exports = {
  addUnits: units => (units ? `&units=${units}` : ''),
  get: url => axios.get(url).then(({ data }) => data)
};
