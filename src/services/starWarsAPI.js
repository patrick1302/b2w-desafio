const axios = require('axios');

const starWarsAPI = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

module.exports = starWarsAPI;
