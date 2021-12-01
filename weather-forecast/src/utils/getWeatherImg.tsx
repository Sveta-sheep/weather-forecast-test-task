import React from "react";
import WeatherIcon from "../components/WeatherData/weatherIcon/WeatherIcon";
import Sun from "../images/sunny.png";
import Rain from "../images/rainy.png";
import Snow from "../images/snow.png";
import Clear from "../images/clear.png";
import Windy from "../images/windy.png";
import Fog from "../images/fog.png";
import Clouds from "../images/cloud.png";
import { WeatherKeyType } from "../components/WeatherData/WeatherKeyType";
import { IWeatherProps } from "../components/WeatherData/weatherIcon/IWeatherProps";

const weatherIconObj: Record<WeatherKeyType, IWeatherProps> = {
  Sun: { alt: "sun", img: Sun },
  Rain: { alt: "rain", img: Rain },
  Snow: { alt: "snow", img: Snow },
  Clear: { alt: "clear", img: Clear },
  Windy: { alt: "windy", img: Windy },
  Fog: { alt: "fog", img: Fog },
  Clouds: { alt: "cloud", img: Clouds },
};

const getWeatherImg = (weatherKey: WeatherKeyType) => {
  return <WeatherIcon {...weatherIconObj[weatherKey || "Clear"]} />;
};

export default getWeatherImg;
