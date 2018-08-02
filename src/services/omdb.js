const axios = require('axios');

const { OMDB_API_URL, OMDB_API_KEY } = process.env;

class OmdbApi {
  constructor() {
    this.apiUrl = process.env.OMDB_API_URL;
    this.apiKey = process.env.OMDB_API_KEY;
  }
  buildPath() {
    return `${this.apiUrl}/?apikey=${this.apiKey}&v=1&r=json`;
  }
  getMovie(params) {
    const path = this.buildPath();
    console.log(path, params);
    return axios.get(path, { params });
  }
}

module.exports = new OmdbApi();
