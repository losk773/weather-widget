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

export const getWeatherTimezone = (state: RootState): string | undefined => {
  return  state.weather?.data?.timezone;
};

export const getWeatherLocation = (state: RootState): string | undefined => {
  return state.weather?.data?.location;
};

export const getWeatherAir = (state: RootState): number | undefined => {
  return state.weather?.data?.air;
};

export const getSelectedWeatherDay = (state: RootState): number => {
  return state.weather.selected;
};

export const getCurrentWeather = (state: RootState): TCurrentWeather |undefined => {
  return state.weather?.data?.current;
}

export const getWeatherUnit = (state: RootState): string => {
  return state.weather.unit;
}