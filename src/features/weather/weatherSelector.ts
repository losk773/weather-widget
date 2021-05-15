import { RootState } from '../../store';
import { TCurrentWeather, TWeatherState } from './weatherTypes';

export const getWeather = (state: RootState): TWeatherState => state.weather;

export const getWeatherByIndex = (state: RootState, index: number): TCurrentWeather | null => {
  if (index === 0 && state.weather.data) {
    return state.weather.data.current;
  }
  
  const weather = state.weather.data?.daily[index];

  return weather ? {
    ...weather,
    temp: weather.temp.max,
  } : null;
};

export const getWeatherTimezone = (state: RootState): string => {
  return state.weather.data ? state.weather.data.timezone : ''
};

export const getWeatherLocation = (state: RootState): string => {
  return state.weather.data ? state.weather.data.location : ''
};

export const getWeatherAir = (state: RootState): number => {
  return state.weather.data ? state.weather.data.air : 1;
};

export const getSelectedWeatherDay = (state: RootState): number => {
  return state.weather.selected;
};

export const getCurrentWeather = (state: RootState): TCurrentWeather | null => {
  return state.weather.data ? state.weather.data.current : null;
}

export const getWeatherUnit = (state: RootState): string => {
  return state.weather.unit;
}