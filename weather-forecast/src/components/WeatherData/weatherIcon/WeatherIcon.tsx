import { IWeatherProps } from "./IWeatherProps";
import s from "./WeatherIcon.module.css";

const WeatherIcon = ({ alt, img }: IWeatherProps) => {
  return (
    <img className={s.weatherImg} alt={alt} src={`/assets/images/${img}.png`} />
  );
};

export default WeatherIcon;
