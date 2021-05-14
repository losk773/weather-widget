export type TWeather = {
  description: string;
  icon: string;
}

export type TCurrentWeather = {
  humidity: number;
  temp: number;
  dt: number;
  weather: TWeather[];
  wind_deg: number;
  wind_speed: number;
}

export type TWeatherDay = {
  dt: number;
  temp: {
    max: number,
    min: number
  };
  weather: TWeather[];
  humidity: number;
  wind_speed: number;
  wind_deg: number;
}

export type TWeatherState = {
  data: {
    location: string;
    timezone: string;
    current: TCurrentWeather;
    daily: TWeatherDay[];
  } | null;
  loading: boolean;
  error: string| null;
  unit: string;
}

export enum WeatherActionTypes {
  WEATHER_FORECAST_REQUEST = 'WEATHER_FORECAST_REQUEST',
  WEATHER_FORECAST_SUCCESS = 'WEATHER_FORECAST_SUCCESS',
  WEATHER_FORECAST_ERROR = 'WEATHER_FORECAST_ERROR',
  SET_WEATHER_UNIT = 'SET_WEATHER_UNIT',
}

type TWeatherForecastRequest = {
  type: WeatherActionTypes.WEATHER_FORECAST_REQUEST;
}

type TWeatherForecastSuccess = {
  type: WeatherActionTypes.WEATHER_FORECAST_SUCCESS;
  payload: {};
}

type TWeatherForecastError = {
  type: WeatherActionTypes.WEATHER_FORECAST_ERROR;
  payload: string;
}

type TWeatherUnit = {
  type: WeatherActionTypes.SET_WEATHER_UNIT;
  payload: string;
}

export type TWeatherAction = 
  TWeatherForecastRequest | 
  TWeatherForecastSuccess | 
  TWeatherForecastError |
  TWeatherUnit;