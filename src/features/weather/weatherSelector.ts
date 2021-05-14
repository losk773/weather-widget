import { RootState } from '../../store';
import { TCurrentWeather, TWeatherState } from './weatherTypes';

export const getWeather = (state: RootState): TWeatherState => state.weather;

export const getWeatherTimezone = (state: RootState): string => {
  return state.weather.data ? state.weather.data.timezoone : ''
};

export const getWeatherLocation = (state: RootState): string => {
  return state.weather.data ? state.weather.data.location : ''
};

export const getCurrentWeather = (state: RootState): TCurrentWeather | null => {
  return state.weather.data ? state.weather.data.current : null;
}

export const getWeatherUnit = (state: RootState): string => {
  return state.weather.unit;
}