import { useAppSelector } from "../../hooks/useAppSelector";
import { Search } from "./Search";
import { getSelectedWeatherDay, getWeather, getWeatherByIndex } from "./weatherSelector";
import './weather.scss';
import { CurrentWeather } from "./CurrentWeather";
import { WeatherForecast } from "./WeatherForecast";
import { Spinner } from "../../components/Spinner";

const Weather = () => {
  const weather = useAppSelector(getWeather);
  const selectedWeatherDay = useAppSelector(getSelectedWeatherDay);
  const current = useAppSelector(state => getWeatherByIndex(state, selectedWeatherDay));

  const renderContent = () => {
    if (weather.loading) {
      return <div className="spinner-wrapper"><Spinner /></div>
    }

    if (weather.error) {
      return (
        <>
          We could not find weather information for the location above
        </>
      );
    }
    
    if (weather.data && current) {
      return (
        <>
          <CurrentWeather current={current}/>
          <WeatherForecast forecast={weather.data.daily} />
        </>
      )
    }
  }

  return (
    <div className='weather-widget'>
      <div className="weather-widget__search-container">
        <Search />
      </div>
      <div className="weather-widget__container">
        {renderContent()}
      </div>
    </div>
  );
};

export default Weather;