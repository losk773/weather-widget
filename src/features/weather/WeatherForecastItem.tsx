import React from 'react';
import { timeFormats } from '../../constant/timeFormats';
import { useAppSelector } from '../../hooks/useAppSelector';
import { WeatherService } from '../../services/weatherService';
import { formatTime } from '../../utils/formatTime';
import { getWeatherTimezone } from './weatherSelector';
import { TWeatherDay } from './weatherTypes';

interface Props {
  weatherInfo: TWeatherDay;
  index: number;
  selected: boolean;
  onClick: (value: number) => void;
}

export const WeatherForecastItem: React.FC<Props> = ({weatherInfo, index, selected, onClick}) => {
  const timezone = useAppSelector(getWeatherTimezone);

  const handleClick = (index: number) => {
    onClick(index)
  }

  return (
    <div 
      className={`weather-forecast__item ${selected ? 'selected' : ''}`}
      onClick={() => handleClick(index)}
    >
      <div className="weather-forecast__title">
        {formatTime(weatherInfo.dt, timezone, timeFormats.DAY_SHORT)} 
      </div>
      <img
        className="weather-forecast__icon"
        src={WeatherService.getWeatherIconURL(weatherInfo.weather[0].icon)}
        alt={weatherInfo.weather[0].description} 
      />
      <div className="weather-forecast__max">{Math.round(weatherInfo.temp.max)}°</div>
      <div className="weather-forecast__min">{Math.round(weatherInfo.temp.min)}°</div>
    </div>
  )
};