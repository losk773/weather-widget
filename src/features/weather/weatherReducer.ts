import { tempUnits } from "../../constant/tempUnits";
import { TWeatherAction, WeatherActionTypes, TWeatherState } from "./weatherTypes";

const initState: TWeatherState = {
  data: null,
  loading: false,
  error: null,
  unit: tempUnits.METRIC,
}

export const weatherReducer = (state: TWeatherState = initState, action: TWeatherAction) => {
  switch (action.type) {
    case WeatherActionTypes.WEATHER_FORECAST_REQUEST:
      return { ...state, loading: true, error: null };
    case WeatherActionTypes.WEATHER_FORECAST_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case WeatherActionTypes.WEATHER_FORECAST_ERROR:
      return { ...state, data: null, loading: false, error: action.payload };
    case WeatherActionTypes.SET_WEATHER_UNIT:
      return { ...state, unit: action.payload };
    default:
      return state;
  }
}