import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { 
  getSelectedWeatherDay,
} from './weatherSelector';
import { WeatherForecastItem } from './WeatherForecastItem';
import { TWeatherDay } from './weatherTypes';
import { useDispatch } from 'react-redux';
import { selectWeatherDay } from './weatherActions';

interface Props {
  forecast: TWeatherDay[];
}

export const WeatherForecast: React.FC<Props> = ({forecast}) => {
  const selected = useAppSelector(getSelectedWeatherDay);
  const dispatch = useDispatch();

  const handleClick = (value: number) => {
    dispatch(selectWeatherDay(value));
  };

  return (
    <div className="weather-forecast">
      {
        forecast.map((item, index) => (
          <WeatherForecastItem 
            key={item.dt} 
            index={index}
            weatherInfo={item}
            selected={selected === index}
            onClick={handleClick}
          />
        ))
      }
    </div>
  )
};
