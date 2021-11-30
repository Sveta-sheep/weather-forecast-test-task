import React from "react";
import WeatherIcon from "../components/WeatherData/weatherIcon/WeatherIcon";
import Sun from "../images/sunny.png";
import Rain from "../images/rainy.png";
import Snow from "../images/snow.png";
import Clear from "../images/clear.png";
import Windy from "../images/windy.png";
import Fog from "../images/fog.png";
import Cloud from "../images/cloud.png";

const weatherIconObj: {
  [s: string]: {
    alt: string;
    img: string;
  };
} = {
  Sun: { alt: "sun", img: Sun },
  Rain: { alt: "rain", img: Rain },
  Snow: { alt: "snow", img: Snow },
  Clear: { alt: "clear", img: Clear },
  Windy: { alt: "windy", img: Windy },
  Fog: { alt: "fog", img: Fog },
  Cloud: { alt: "cloud", img: Cloud },
};

const getWeatherImg = (weatherKey: string) => {
  return <WeatherIcon {...weatherIconObj[weatherKey || "Clear"]} />;
};

export default getWeatherImg;
// switch (weatherKey) {
//   case "Sun":
//     return
//   case "Clear":
//     return <WeatherIcon alt= img={clear} />;
//   case "Windy":
//     return <WeatherIcon alt= img={windy} />;
//   case "Fog":
//     return <WeatherIcon alt= img={fog} />;
//   case "Snow":
//     return <WeatherIcon alt= img={snow} />;
//   case "Rain":
//     return <WeatherIcon alt= img={rain} />;
//   case "Clouds":
//     return <WeatherIcon alt= img={cloud} />;
//   default:
//     return <WeatherIcon alt= img={sun} />;
// }
