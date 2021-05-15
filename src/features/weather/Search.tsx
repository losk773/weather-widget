import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getWeatherUnit } from "./weatherSelector";
import { fetchWeatherForecast } from "./weatherThunk";

export const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const weatherUnit = useAppSelector(getWeatherUnit);
  const dispatch = useDispatch();
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputValue) {
      dispatch(fetchWeatherForecast(inputValue, weatherUnit));
    }
  }

  return (
    <form className="weather-form" onSubmit={handleSubmit} noValidate>
      <input 
        type="search"
        name="weather-search"
        className="weather-form__input"
        value={inputValue} 
        onChange={handleChange}
        placeholder="Type city"
      />
    </form>
  )
};