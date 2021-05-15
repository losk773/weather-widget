import React from 'react';
import { useDispatch } from 'react-redux';
import { tempUnits } from '../../constant/tempUnits';
import { timeFormats } from '../../constant/timeFormats';
import { windSpeedUnits } from '../../constant/windSpeedUnits';
import { useAppSelector } from '../../hooks/useAppSelector';
import { WeatherService } from '../../services/weatherService';
import { convertWindDegreeToText } from '../../utils/convertWindDegreeToText';
import { formatTime } from '../../utils/formatTime';
import { setWeatherUnit } from './weatherActions';
import { 
  getSelectedWeatherDay,
  getWeatherAir,
  getWeatherLocation,
  getWeatherTimezone,
  getWeatherUnit
} from './weatherSelector';
import { fetchWeatherForecast } from './weatherThunk';
import { TCurrentWeather } from './weatherTypes';

interface Props {
  current: TCurrentWeather;
}

export const CurrentWeather: React.FC<Props> = ({current}) => {
  const selectedWeatherDay = useAppSelector(getSelectedWeatherDay);
  const location = useAppSelector(getWeatherLocation) || '';
  const timezone = useAppSelector(getWeatherTimezone) || '';
  const air = useAppSelector(getWeatherAir);
  const unit = useAppSelector(getWeatherUnit);
  const dispatch = useDispatch();

  const unitButtons = [
    {text: 'F', unit: tempUnits.IMPERIAL},
    {text: 'C', unit: tempUnits.METRIC},
  ]

  const windSpeed = `${Math.round(current.wind_speed)} ${windSpeedUnits[unit]}`;
  const windDirection = `${convertWindDegreeToText(current.wind_deg)}`;
  const time = selectedWeatherDay === 0 ? formatTime(current.dt, timezone) : formatTime(current.dt, timezone, timeFormats.DAY_LONG);

  const handleUnitClick = (unit: string) => {
    dispatch(setWeatherUnit(unit));
    dispatch(fetchWeatherForecast(location, unit));
  };

  return (
    <div className="weather-current">
      <div className="weather-current__head">
        <div className="weather-current__title">{location}</div>
        <div className="weather-current__subtitle">
          {time}
          <span className="weather-current__separator">•</span>
          {current.weather[0].description}
        </div>
      </div>
      <div className="weather-current__data">
        <div className="weather-current__temp">
          <img
          src={`${WeatherService.getWeatherIconURL(current.weather[0].icon)}`} 
          alt={current.weather[0].description} />
          <span className="weather-current__value">{Math.round(current.temp)}°</span>
          <div className="weather-current__buttons">
            {
              unitButtons.map(button => (
                <button
                  key={button.unit}
                  type="button"
                  className={`${button.unit === unit ? 'active' : ''}`}
                  onClick={() => handleUnitClick(button.unit)}>{button.text}</button>
              ))
            }
            
          </div>
        </div>
        <div className="weather-current__other">
          <ul>
            <li>Humidity: {current.humidity}%</li>
            <li>Wind: {windSpeed} {windDirection}</li>
            { selectedWeatherDay === 0 && <li>Air Quality: {air}</li>}
          </ul>
        </div>
      </div>
    </div>
  )
};