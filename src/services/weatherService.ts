import apiService from './apiService';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const WeatherService = {
  getGeoByLocationName(name: string) {
    return apiService.get(`/geo/1.0/direct?q=${name}&appid=${apiKey}`);;
  },
  getForecastWeather(lat: number, lon: number, unit: string) {
    return apiService.get(`/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&exclude=minutely,hourly,alerts&appid=${apiKey}`);
  },
  getAirPollution(lat: number, lon: number) {
    return apiService.get(`/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  },
  getWeatherIconURL(code: string) {
    return `${process.env.REACT_APP_WEATHER_IMG_URL}/${code}@2x.png`;
  } 
}
