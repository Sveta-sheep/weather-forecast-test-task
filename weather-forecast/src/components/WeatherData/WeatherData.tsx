import { capitalize } from "../../utils";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../../redux/weatherSlice/selectors";
import getWeatherImg from "../../utils/getWeatherImg";
import { WeatherKeyType } from "./WeatherKeyType";
import { useStyles } from "./WeatherDataStyles";

const WeatherData = () => {
  const weatherData = useSelector(selectWeatherData);
  const classes = useStyles();

  return (
    <div className={classes.weatherDataWrapper}>
      <div>
        {getWeatherImg(weatherData?.weather?.[0]?.main as WeatherKeyType)}
      </div>
      <div className={classes.weatherDescription}>
        {weatherData.weather && capitalize(weatherData?.weather[0].description)}
      </div>
      <div>
        <div className={classes.weatherData}>
          <p className={classes.weatherProperty}>Temperature</p>
          <p className={classes.weatherValue}>
            {Math.ceil(weatherData?.main?.temp || 0)}&#8451;
          </p>
        </div>
        <div className={classes.weatherData}>
          <p className={classes.weatherProperty}>Feels like</p>
          <p className={classes.weatherValue}>
            {Math.ceil(weatherData?.main?.feels_like || 0)}&#8451;
          </p>
        </div>
        <div className={classes.weatherData}>
          <p className={classes.weatherProperty}>Humidity</p>
          <p className={classes.weatherValue}>
            {weatherData?.main?.humidity || 0}%
          </p>
        </div>
        <div className={classes.weatherData}>
          <p className={classes.weatherProperty}>Wind speed</p>
          <p className={classes.weatherValue}>
            {weatherData?.wind?.speed || 0}meter/sec
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
