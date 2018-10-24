const axios = require('axios');
const _ = require('lodash');

module.exports = {
  get: (url, appId, queries = {}) => {
    const queryString = _.chain({ ...queries, APPID: appId })
      .toPairs()
      .map(p => p.join('='))
      .join('&')
      .value();
    return axios.get(`${url}?${queryString}`).then(({ data }) => data);
  }
};
