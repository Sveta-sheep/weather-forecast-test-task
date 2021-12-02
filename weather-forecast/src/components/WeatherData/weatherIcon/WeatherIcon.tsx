import { IWeatherProps } from "./IWeatherProps";
import { useStyles } from "./WeatherIconStyles";

const WeatherIcon = ({ alt, img }: IWeatherProps) => {
  const classes = useStyles();
  return (
    <img
      className={classes.weatherImg}
      alt={alt}
      src={`/assets/images/${img}.png`}
    />
  );
};

export default WeatherIcon;
