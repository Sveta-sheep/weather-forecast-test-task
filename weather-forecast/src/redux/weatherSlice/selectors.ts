import { WeatherState } from "./../weatherSlice/reducer";

export const selectWeatherData = (state: WeatherState) => state.weatherData;
export const selectErrorMessage = (state: WeatherState) => state.error;
