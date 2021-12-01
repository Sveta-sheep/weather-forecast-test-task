import { IWeatherProps } from "./IweatherProps";
import s from "./WeatherIcon.module.css";

const WeatherIcon = ({ alt, img }: IWeatherProps) => {
  return <img className={s.weatherImg} alt={alt} src={img} />;
};

export default WeatherIcon;
