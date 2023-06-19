const { RESTDataSource } = require("@apollo/datasource-rest");

class TrackAPI extends RESTDataSource {
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

    getTracksForHome() {
        return this.get('tracks');
      }

    async getTracksForHomeFetch() {
        const res = await fetch(this.baseURL +'tracks');
        return res.json();
      }

    getAuthor(authorId) {
        return this.get(`author/${authorId}`);
      }
  }


  module.exports = TrackAPI;