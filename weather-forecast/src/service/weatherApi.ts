import { WeatherDataType } from "../redux/interfaces";
import instance from "./axiosInstance";

export const weatherApi = {
  getWeatherForecast(city: string): Promise<WeatherDataType> {
    return instance
      .get(`/weather?q=${city}&units=metric`)
      .then((res) => res.data);
  },
};
