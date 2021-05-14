import axios from 'axios';

const apiService = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API_URL,
  responseType: 'json',
});

export default apiService;