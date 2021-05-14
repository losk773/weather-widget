import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from "redux";
import { weatherReducer } from './features/weather/weatherReducer';
import { TWeatherState } from './features/weather/weatherTypes';

export const store = createStore(combineReducers({
  weather: weatherReducer,
}), composeWithDevTools(applyMiddleware(thunk)));

export type RootState = {
  weather: TWeatherState
};

export type AppDispatch = typeof store.dispatch;