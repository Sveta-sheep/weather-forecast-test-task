import s from "./WeatherIcon.module.css";

const WeatherIcon = ({ alt, img }: { alt: string; img: string }) => {
  return <img className={s.weatherImg} alt={alt} src={img} />;
};

export default WeatherIcon;
