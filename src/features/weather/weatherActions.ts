import { TWeatherAction, WeatherActionTypes } from "./weatherTypes";

export const weatherForecastRequest = (): TWeatherAction => ({
  type: WeatherActionTypes.WEATHER_FORECAST_REQUEST,
});

export const weatherForecastSuccess = (data: any): TWeatherAction => ({
  type: WeatherActionTypes.WEATHER_FORECAST_SUCCESS,
  payload: data,
});

export const weatherForecastError = (error: string): TWeatherAction => ({
  type: WeatherActionTypes.WEATHER_FORECAST_ERROR,
  payload: error,
});

export const setWeatherUnit = (unit: string): TWeatherAction => ({
  type: WeatherActionTypes.SET_WEATHER_UNIT,
  payload: unit,
});