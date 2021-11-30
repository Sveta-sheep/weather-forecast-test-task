import React from "react";
import s from "./WeatherData.module.css";
import { capitalize } from "../../utils";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../../redux/weatherSlice/selectors";
import getWeatherImg from "../../utils/getWeatherImg";

const WeatherData = () => {
  const weatherData = useSelector(selectWeatherData);

  return (
    <div className={s.weatherDataWrapper}>
      <div className={s.weatherImg}>
        {getWeatherImg(weatherData?.weather?.[0]?.main || "")}
      </div>
      <div className={s.weatherDescription}>
        {weatherData.weather && capitalize(weatherData?.weather[0].description)}
      </div>
      <div>
        <div className={s.weatherData}>
          <p className={s.weatherProperty}>Temperature</p>
          <p className={s.weatherValue}>
            {Math.ceil(weatherData?.main?.temp || 0)}&#8451;
          </p>
        </div>
        <div className={s.weatherData}>
          <p className={s.weatherProperty}>Feels like</p>
          <p className={s.weatherValue}>
            {Math.ceil(weatherData?.main?.feels_like || 0)}&#8451;
          </p>
        </div>
        <div className={s.weatherData}>
          <p className={s.weatherProperty}>Humidity</p>
          <p className={s.weatherValue}>{weatherData?.main?.humidity || 0}%</p>
        </div>
        <div className={s.weatherData}>
          <p className={s.weatherProperty}>Wind speed</p>
          <p className={s.weatherValue}>
            {weatherData?.wind?.speed || 0}meter/sec
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
