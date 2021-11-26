import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/rootReducer'
import sun from '../../images/sunny.png';
import rain from '../../images/rainy.png';
import snow from '../../images/snow.png';
import clear from '../../images/clear.png';
import windy from '../../images/windy.png';
import fog from '../../images/fog.png';
import cloud from '../../images/cloud.png';
import { WeatherDataType } from '../../redux/types';
import s from './WeatherData.module.css';


const WeatherIcon = ({ alt, img }: { alt: string, img: string, }) => <img className={s.weatherImg} alt={alt} src={img} />

const WeatherData = () => {
    const weatherData = useSelector<AppState, Partial<WeatherDataType>>(state => state.weatherReducer.weatherData)

    const getWeatherImg = (weatherKey: string) => {
        switch (weatherKey) {
            case 'Sun':
                return <WeatherIcon alt='sun' img={sun} />;
            case 'Clear':
                return <WeatherIcon alt='clear' img={clear} />;
            case 'Windy':
                return <WeatherIcon alt='windy' img={windy} />
            case 'Fog':
                return <WeatherIcon alt='fog' img={fog} />
            case 'Snow':
                return <WeatherIcon alt='snow' img={snow} />
            case 'Rain':
                return <WeatherIcon alt='rain' img={rain} />
            case 'Clouds':
                return <WeatherIcon alt='cloud' img={cloud} />
            default:
                return <WeatherIcon alt='sun' img={sun} />
        }
    }

    const weatherDescription = weatherData.weather &&
        (weatherData?.weather[0].description[0].toUpperCase() + weatherData.weather[0].description.slice(1))

    return (
        <div className={s.weatherDataWrapper}>
            <div className={s.weatherImg}>{getWeatherImg(weatherData.weather && weatherData.weather[0].main || '')}</div>
            <div className={s.weatherDescription}>{weatherDescription}</div>
            <div>
                <div className={s.weatherData}>
                    <p className={s.weatherProperty}>Temperature</p>
                    <p className={s.weatherValue}>{Math.ceil(weatherData?.main?.temp || 0)}&#8451;</p>
                </div>
                <div className={s.weatherData}>
                    <p className={s.weatherProperty}>Feels like</p>
                    <p className={s.weatherValue}>{Math.ceil(weatherData?.main?.feels_like || 0)}&#8451;</p>
                </div>
                <div className={s.weatherData}>
                    <p className={s.weatherProperty}>Humidity</p>
                    <p className={s.weatherValue}>{weatherData?.main?.humidity || 0}%</p>
                </div>
                <div className={s.weatherData}>
                    <p className={s.weatherProperty}>Wind speed</p>
                    <p className={s.weatherValue}>{weatherData?.wind?.speed || 0}meter/sec</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherData
