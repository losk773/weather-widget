import { ThunkAction } from "redux-thunk";
import { AnyAction } from 'redux';
import { WeatherService } from "../../services/weatherService";
import { RootState } from "../../store";
import { 
  weatherForecastError,
  weatherForecastRequest,
  weatherForecastSuccess,
} from "./weatherActions";
import { TWeather, TWeatherDay } from "./weatherTypes";

export const fetchWeatherForecast = (
  value: string,
  unit: string,
): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
  try {
    dispatch(weatherForecastRequest());

    const { data: locationDataArray } = await WeatherService.getGeoByLocationName(value);

    if (!locationDataArray.length) throw new Error('Location data not found');

    const locationInfo = locationDataArray.shift();
    const { data: weatherData } = await WeatherService
      .getForecastWeather(locationInfo.lat, locationInfo.lon, unit);


    const transformedWeatherData = {
      location: `${locationInfo.name}, ${locationInfo.country}`,
      timezone: weatherData.timezone,
      current: {
        dt: weatherData.current.dt,
        temp: weatherData.current.temp,
        weather: weatherData.current.weather.map((item: TWeather) => ({
          description: item.description,
          icon: item.icon
        })),
        humidity: weatherData.current.humidity,
        wind_speed: weatherData.current.wind_speed,
        wind_deg: weatherData.current.wind_deg,
      },
      daily: weatherData.daily.map((item: TWeatherDay) => ({
        dt: item.dt,
        weather: item.weather.map((item: TWeather) => ({
          description: item.description,
          icon: item.icon
        })),
        temp: {
          max: item.temp.max,
          min: item.temp.min
        },
        humidity: item.humidity,
        wind_speed: item.wind_speed
      }))
    };

    dispatch(weatherForecastSuccess(transformedWeatherData));
  } catch (error) {
    dispatch(weatherForecastError(error));
  }
}