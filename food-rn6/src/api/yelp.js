import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer qtHWDELd2rBnwDHS6rSFDOTUG9DwI7TpP64lWa-Z8CPHVbWH8oZUZ5OTCKThhhSf4Ogr4Pq0GAHAy2GmrE47ghCKF1y0U74LPzF0VqviimvEvI_XHKzNW8L08awcZHYx',
  },
});
